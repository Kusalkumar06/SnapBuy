// const fs = require('fs')
// const path = require('path')

// const filePath = path.join('c:\\Users\\DELL\\Desktop\\SnapBuy\\frontend\\src\\newProducts.js')

// try {
//   const fileContent = fs.readFileSync(filePath, 'utf8')

//   // 1. Extract Header
//   const headerEndIndex = fileContent.indexOf('export const newProducts = [')
//   if (headerEndIndex === -1) {
//     throw new Error('Could not find start of newProducts array')
//   }
//   const header = fileContent.substring(0, headerEndIndex)

//   // 2. Extract Data
//   const arrayContent = fileContent.substring(headerEndIndex)
//   // Find the array brackets
//   const startBracket = arrayContent.indexOf('[')
//   const endBracket = arrayContent.lastIndexOf(']')

//   if (startBracket === -1 || endBracket === -1) {
//     throw new Error('Could not find array brackets')
//   }

//   const arrayString = arrayContent.substring(startBracket, endBracket + 1)

//   const innerContent = arrayString.substring(1, arrayString.length - 1).trim() // Remove [ and ]

//   const productChunks = []
//   let braceCount = 0
//   let currentChunk = ''

//   for (let i = 0; i < innerContent.length; i++) {
//     const char = innerContent[i]
//     currentChunk += char

//     if (char === '{') braceCount++
//     if (char === '}') braceCount--

//     if (braceCount === 0 && currentChunk.trim().length > 0) {
//       // Check if we are at a comma separator or end
//       let nextCharIdx = i + 1
//       while (nextCharIdx < innerContent.length && /\s/.test(innerContent[nextCharIdx]))
//         nextCharIdx++

//       if (nextCharIdx >= innerContent.length || innerContent[nextCharIdx] === ',') {
//         // End of object
//         let cleanChunk = currentChunk.trim()
//         productChunks.push(cleanChunk)
//         currentChunk = ''
//         // Advance main loop to skip comma
//         if (innerContent[nextCharIdx] === ',') i = nextCharIdx
//         else i = nextCharIdx - 1
//       }
//     }
//   }

//   // 3. Group chunks
//   const subCategoryMap = {
//     // Fashion
//     'PUT Fashion category - men object ID here': 'fashion_men_products',
//     'PUT Fashion category - women object ID here': 'fashion_women_products',
//     'PUT Fashion category - kids object ID here': 'fashion_kids_products',
//     'PUT Fashion category - footwear object ID here': 'fashion_footwear_products',
//     'PUT Fashion category - accessories object ID here': 'fashion_accessories_products',

//     // Electronics
//     'PUT Electronics category - mobiles object ID here': 'electronics_mobiles_products',
//     'PUT Electronics category - laptops object ID here': 'electronics_laptops_products',
//     'PUT Electronics category - audio object ID here': 'electronics_audio_products',
//     'PUT Electronics category - smart object ID here': 'electronics_smart_products',
//     'PUT Electronics category - accessories object ID here': 'electronics_accessories_products',

//     // Home
//     'PUT Home & Kitchen category - furniture object ID here': 'home_furniture_products',
//     'PUT Home & Kitchen category - kitchen object ID here': 'home_kitchen_products',
//     'PUT Home & Kitchen category - cookware object ID here': 'home_cookware_products',
//     'PUT Home & Kitchen category - decor object ID here': 'home_decor_products',
//     'PUT Home & Kitchen category - storage object ID here': 'home_storage_products',

//     // Beauty
//     'PUT Beauty category - skincare object ID here': 'beauty_skincare_products',
//     'PUT Beauty category - makeup object ID here': 'beauty_makeup_products',
//     'PUT Beauty category - hair object ID here': 'beauty_hair_products',
//     'PUT Beauty category - grooming object ID here': 'beauty_grooming_products',
//     'PUT Beauty category - hygiene object ID here': 'beauty_hygiene_products',

//     // Sports
//     'PUT Sports category - gym object ID here': 'sports_gym_products',
//     'PUT Sports category - yoga object ID here': 'sports_yoga_products',
//     'PUT Sports category - wear object ID here': 'sports_wear_products',
//     'PUT Sports category - outdoor object ID here': 'sports_outdoor_products',
//     'PUT Sports category - accessories object ID here': 'sports_accessories_products',

//     // Books
//     'PUT Books category - academic object ID here': 'books_academic_products',
//     'PUT Books category - fiction object ID here': 'books_fiction_products',
//     'PUT Books category - office object ID here': 'books_office_products',
//     'PUT Books category - art object ID here': 'books_art_products',
//     'PUT Books category - school object ID here': 'books_school_products',
//   }

//   const categorizedProducts = {}

//   // Initialize arrays
//   Object.values(subCategoryMap).forEach((name) => (categorizedProducts[name] = []))
//   const unknownProducts = []

//   productChunks.forEach((chunk) => {
//     // Find subCategory value
//     const match = chunk.match(/"subCategory":\s*"([^"]+)"/)
//     if (match && match[1]) {
//       const subCatId = match[1]
//       const arrayName = subCategoryMap[subCatId]
//       if (arrayName) {
//         categorizedProducts[arrayName].push(chunk)
//       } else {
//         unknownProducts.push(chunk)
//       }
//     } else {
//       unknownProducts.push(chunk)
//     }
//   })

//   // 4. Construct New File
//   let newFileContent = header

//   // Append arrays
//   const arrayNames = Object.keys(categorizedProducts)

//   arrayNames.forEach((name) => {
//     const products = categorizedProducts[name]
//     newFileContent += `export const ${name} = [\n`
//     newFileContent += products.join(',\n')
//     newFileContent += `\n]\n\n`
//   })

//   if (unknownProducts.length > 0) {
//     console.warn(`Warning: ${unknownProducts.length} products could not be categorized.`)
//     newFileContent += `export const uncategorized_products = [\n`
//     newFileContent += unknownProducts.join(',\n')
//     newFileContent += `\n]\n\n`
//   }

//   // Append final export
//   newFileContent += `export const newProducts = [\n`
//   arrayNames.forEach((name) => {
//     if (categorizedProducts[name].length > 0) {
//       newFileContent += `  ...${name},\n`
//     }
//   })
//   if (unknownProducts.length > 0) {
//     newFileContent += `  ...uncategorized_products,\n`
//   }
//   newFileContent += `]\n`

//   // Write file
//   fs.writeFileSync(filePath, newFileContent, 'utf8')
//   console.log('Successfully refactored newProducts.js')
// } catch (err) {
//   console.error('Error transforming file:', err)
// }
