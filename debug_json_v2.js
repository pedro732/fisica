const fs = require('fs')
const path = 'src/assets/fisica.json'
try {
  const content = fs.readFileSync(path, 'utf8')
  console.log('--- RAW CONTENT SNIPPET ---')
  const start = content.indexOf('"description":')
  if (start === -1) {
    console.log('Description not found')
  } else {
    // Show 200 chars after description
    const snippet = content.substring(start, start + 300)
    console.log(JSON.stringify(snippet))
  }
} catch (e) {
  console.error('Error:', e.message)
}
