import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const CSV_PATH = path.resolve(process.cwd(), 'cards.csv')
const CSV_HEADERS = [
  'slug', 'template', 'companyLogo', 'companyName', 'companySlogan',
  'avatarUrl', 'nombre', 'cargo', 'contacto', 'servicios', 'redes',
  'ctaText', 'ctaUrl', 'createdAt'
]

// Ensure CSV file exists with headers
if (!fs.existsSync(CSV_PATH)) {
  fs.writeFileSync(CSV_PATH, CSV_HEADERS.join(',') + '\n', 'utf8')
}

// Robust CSV cell escaper
function escapeCSVCell(val) {
  if (val === null || val === undefined) return '';
  let str = typeof val === 'object' ? JSON.stringify(val) : String(val);
  str = str.replace(/\r?\n|\r/g, ' ');
  if (str.includes(',') || str.includes('"')) {
    str = str.replace(/"/g, '""');
    return `"${str}"`;
  }
  return str;
}

// Convert fields array to a CSV row string
function toCSVRow(fields) {
  return fields.map(escapeCSVCell).join(',');
}

// Robust CSV line parser
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i++; // skip escaped quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result;
}

// Read cards from the CSV file
function readCardsFromCSV() {
  try {
    if (!fs.existsSync(CSV_PATH)) {
      return [];
    }
    const content = fs.readFileSync(CSV_PATH, 'utf8');
    const lines = content.split(/\r?\n/);
    const cards = [];

    // Skip header line
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const cells = parseCSVLine(line);
      if (cells.length === 0) continue;

      const card = {};
      CSV_HEADERS.forEach((header, index) => {
        const val = cells[index] !== undefined ? cells[index] : '';
        if (['contacto', 'servicios', 'redes'].includes(header)) {
          try {
            card[header] = val ? JSON.parse(val) : [];
          } catch (e) {
            card[header] = []; // Fallback to empty array if JSON parse fails
          }
        } else {
          card[header] = val;
        }
      });
      cards.push(card);
    }
    return cards;
  } catch (error) {
    console.error("Error reading CSV file:", error);
    return [];
  }
}

// Write cards array back to the CSV file
function writeCardsToCSV(cards) {
  try {
    const lines = [CSV_HEADERS.join(',')];
    cards.forEach(card => {
      const fields = CSV_HEADERS.map(header => card[header]);
      lines.push(toCSVRow(fields));
    });
    fs.writeFileSync(CSV_PATH, lines.join('\n') + '\n', 'utf8');
  } catch (error) {
    console.error("Error writing to CSV file:", error);
  }
}

// Custom Vite plugin to handle /api/cards inside Vite's Node.js dev server
function csvDatabasePlugin() {
  return {
    name: 'vite-csv-database',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        // Handle GET /api/cards/:slug
        if (req.url.startsWith('/api/cards/') && req.method === 'GET') {
          const rawSlug = req.url.substring('/api/cards/'.length);
          const slug = decodeURIComponent(rawSlug);
          const cards = readCardsFromCSV();
          const card = cards.find(c => c.slug === slug);
          
          res.setHeader('Content-Type', 'application/json');
          if (!card) {
            res.statusCode = 404;
            res.end(JSON.stringify({ success: false, message: 'Tarjeta no encontrada.' }));
          } else {
            res.statusCode = 200;
            res.end(JSON.stringify(card));
          }
          return;
        }

        // Handle POST /api/cards
        if (req.url === '/api/cards' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', () => {
            try {
              const cardData = JSON.parse(body);
              if (!cardData.slug) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: false, message: 'El slug es obligatorio.' }));
                return;
              }

              const cards = readCardsFromCSV();
              const existingIndex = cards.findIndex(c => c.slug === cardData.slug);

              const newCard = {};
              CSV_HEADERS.forEach(header => {
                newCard[header] = cardData[header] !== undefined ? cardData[header] : '';
              });

              if (existingIndex !== -1) {
                // Update existing card, preserve original creation date
                newCard.createdAt = cards[existingIndex].createdAt || new Date().toISOString();
                cards[existingIndex] = newCard;
              } else {
                // Add new card, set creation date
                newCard.createdAt = new Date().toISOString();
                cards.push(newCard);
              }

              writeCardsToCSV(cards);
              
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: 'Tarjeta guardada correctamente.' }));
            } catch (err) {
              res.statusCode = 500;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Error al guardar la tarjeta.' }));
            }
          });
          return;
        }

        // Pass control to Vite's next handler for normal asset/source serving
        next();
      });
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    csvDatabasePlugin()
  ]
})
