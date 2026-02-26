import fs from 'fs'

const header = fs.readFileSync('header.js', 'utf8')
const products = fs.readFileSync('temp_products_dump.json', 'utf8')
const content = `${header}\n\nexport const newProducts = ${products}`

fs.writeFileSync('newProducts.js', content)
console.log('newProducts.js reassembled')
