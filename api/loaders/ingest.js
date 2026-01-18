import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { loadPDF } = require("./pdf.cjs");
const { loadDocx } = require("./docx.js");
const { loadImage } = require("./image.js");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RAW_DIR = path.join(__dirname, "../raw_files");
const OUTPUT_FILE = path.join(__dirname, "../knowledge.json");

async function ingest() {
  const files = fs.readdirSync(RAW_DIR);
  const knowledge = [];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const filePath = path.join(RAW_DIR, file);

    console.log(`📄 Đang đọc: ${file}`);

    try {
      let text = "";

      if (ext === ".pdf") {
        text = await loadPDF(filePath);
      } 
      else if (ext === ".docx") {
        text = await loadDocx(filePath);
      } 
      else if ([".png", ".jpg", ".jpeg"].includes(ext)) {
        text = await loadImage(filePath);
      } 
      else {
        console.log("⏭️ Bỏ qua file không hỗ trợ\n");
        continue;
      }

      if (!text || text.trim().length < 20) {
        console.log("⚠️ Nội dung rỗng / quá ngắn – bỏ qua\n");
        continue;
      }

      knowledge.push({
        source: file,
        type: ext.replace(".", ""),
        content: text.trim()
      });

      console.log(`✅ Đã đọc (${text.length} ký tự)\n`);
    } catch (err) {
      console.error(`❌ Lỗi khi đọc ${file}:`, err.message, "\n");
    }
  }

  fs.writeFileSync(
    OUTPUT_FILE,
    JSON.stringify(knowledge, null, 2),
    "utf8"
  );

  console.log(`🎉 HOÀN TẤT – Đã tạo knowledge.json`);
}

ingest();
