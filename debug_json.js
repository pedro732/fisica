const fs = require('fs')
const path = 'src/assets/fisica.json'
const content = fs.readFileSync(path, 'utf8')
console.log('Raw file content snippet:')
const start = content.indexOf('"description":')
console.log(content.substring(start, start + 500))

try {
  const json = JSON.parse(content)
  const desc = json[0].description
  console.log('\nParsed description string:')
  console.log(JSON.stringify(desc))
} catch (e) {
  console.error('JSON parse error:', e)
}
