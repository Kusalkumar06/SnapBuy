import { newProducts } from './newProducts.js'
import fs from 'fs'

const json = JSON.stringify(newProducts, null, 2)
fs.writeFileSync('temp_products_dump.json', json)
console.log('Dumped products to temp_products_dump.json')
