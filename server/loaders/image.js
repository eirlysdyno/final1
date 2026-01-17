import Tesseract from "tesseract.js"

export async function loadImage(filePath) {
  const result = await Tesseract.recognize(
    filePath,
    "vie", // tiếng Việt
    { logger: m => console.log(m.status) }
  )

  return result.data.text
}
