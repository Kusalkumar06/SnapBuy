// --- Object IDs ---
const fashionId = 'PUT Fashion category objectID here'
const electronicsId = 'PUT Electronics category objectID here'
const homeId = 'PUT Home & Kitchen category objectID here'
const beautyId = 'PUT Beauty category objectID here'
const sportsId = 'PUT Sports category objectID here'
const booksId = 'PUT Books category objectID here'

export const subCategories = {
  fashion: {
    men: 'PUT Fashion category - men object ID here',
    women: 'PUT Fashion category - women object ID here',
    kids: 'PUT Fashion category - kids object ID here',
    footwear: 'PUT Fashion category - footwear object ID here',
    accessories: 'PUT Fashion category - accessories object ID here',
  },
  electronics: {
    mobiles: 'PUT Electronics category - mobiles object ID here',
    laptops: 'PUT Electronics category - laptops object ID here',
    audio: 'PUT Electronics category - audio object ID here',
    smart: 'PUT Electronics category - smart object ID here',
    accessories: 'PUT Electronics category - accessories object ID here',
  },
  home: {
    furniture: 'PUT Home & Kitchen category - furniture object ID here',
    kitchen: 'PUT Home & Kitchen category - kitchen object ID here',
    cookware: 'PUT Home & Kitchen category - cookware object ID here',
    decor: 'PUT Home & Kitchen category - decor object ID here',
    storage: 'PUT Home & Kitchen category - storage object ID here',
  },
  beauty: {
    skincare: 'PUT Beauty category - skincare object ID here',
    makeup: 'PUT Beauty category - makeup object ID here',
    hair: 'PUT Beauty category - hair object ID here',
    grooming: 'PUT Beauty category - grooming object ID here',
    hygiene: 'PUT Beauty category - hygiene object ID here',
  },
  sports: {
    gym: 'PUT Sports category - gym object ID here',
    yoga: 'PUT Sports category - yoga object ID here',
    wear: 'PUT Sports category - wear object ID here',
    outdoor: 'PUT Sports category - outdoor object ID here',
    accessories: 'PUT Sports category - accessories object ID here',
  },
  books: {
    academic: 'PUT Books category - academic object ID here',
    fiction: 'PUT Books category - fiction object ID here',
    office: 'PUT Books category - office object ID here',
    art: 'PUT Books category - art object ID here',
    school: 'PUT Books category - school object ID here',
  },
}

export const categoriesMap = [
  { name: 'Fashion', id: fashionId, key: 'fashion' },
  { name: 'Electronics', id: electronicsId, key: 'electronics' },
  { name: 'Home & Kitchen', id: homeId, key: 'home' },
  { name: 'Beauty', id: beautyId, key: 'beauty' },
  { name: 'Sports', id: sportsId, key: 'sports' },
  { name: 'Books', id: booksId, key: 'books' },
]


export const fashion_men_products = [
  {
    title: "Classic White T-Shirt",
    slug: "classic-white-t-shirt-6441",
    description:
      "Elevate your wardrobe with our Classic White T-Shirt, a timeless staple combining comfort and style. Crafted from 100% premium, long-staple cotton, it offers a soft, breathable feel. The fabric is pre-shrunk for a consistent fit, wash after wash. With a classic crewneck and modern tailored fit, it's a versatile piece for any occasion, perfect on its own or for layering. Reinforced stitching ensures durability, while the tag-free neck provides added comfort. This t-shirt is the ultimate foundation for any outfit, offering a clean, simple design that pairs effortlessly with anything in your closet.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    basePriceInPaise: 59900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 59900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 59900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 59900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 59900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.0,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-12T10:15:00")
  },

  {
    title: "Blue Denim Jeans",
    slug: "blue-denim-jeans-8986",
    description:
      "Discover your new favorite pair of classic Blue Denim Jeans, a wardrobe essential offering the perfect blend of style, comfort, and durability. Crafted from high-quality denim with a hint of stretch, they provide a comfortable, flexible fit. The timeless blue wash, five-pocket design, and straight-leg cut create a flattering silhouette that never goes out of style. Reinforced stitching and durable hardware ensure these jeans are built to last. Subtle fading and whiskering add a touch of vintage character. Pair them with a t-shirt for a casual look or dress them up with a button-down shirt.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://www.mumkins.in/cdn/shop/products/denim-jeans-for-kids-bl0612345-darkblue-1_1024x1024.jpg?v=1757575343"
    ],
    basePriceInPaise: 99900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 99900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 99900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 99900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 99900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-20T14:40:00")
  },

  {
    title: "Black Leather Jacket",
    slug: "black-leather-jacket-2344",
    description:
      "Make a bold statement with our iconic Black Leather Jacket, a timeless piece that exudes confidence and style. Crafted from 100% genuine, full-grain leather, it offers a luxurious feel and exceptional durability that gets better with age. The classic biker-style design features an asymmetrical zipper, notched lapels, and multiple zippered pockets for an edgy, sophisticated look. A tailored fit and smooth satin lining ensure comfort and easy layering. This versatile jacket is perfect for any occasion, adding an instant dose of attitude to any outfit. It's more than a jacket; it's a symbol of timeless style.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://www.noorainternational.biz/cdn/shop/files/Myproject-1_5_1024x1024.jpg?v=1690871206"
    ],
    basePriceInPaise: 149900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 149900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 149900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 149900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 149900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.8,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-02-02T09:25:00")
  },

  {
    title: "Casual Hoodie",
    slug: "casual-hoodie-3303",
    description:
      "Stay cozy and stylish with our versatile Casual Hoodie, the ultimate comfort piece for your wardrobe. Crafted from a soft fleece fabric, it provides the perfect amount of warmth for cooler days. The relaxed fit, adjustable drawstring hood, and spacious kangaroo pocket make it a go-to choice for lounging or running errands. Ribbed cuffs and hem ensure a snug fit. With its minimalist design and high-quality construction, this hoodie is easy to pair with jeans or joggers. It's the perfect layering piece for any season, combining comfort, style, and practicality for your everyday life.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/casual-hoodie-fy6hMYb29TrBfW8JAQiJWo4Oqjkril.jpg"
    ],
    basePriceInPaise: 79900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 79900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 79900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 79900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 79900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-02-10T16:05:00")
  },

  {
    title: "Wool Sweater",
    slug: "wool-sweater-6324",
    description:
      "Embrace the warmth and timeless style of our classic Wool Sweater. Crafted from 100% pure, soft merino wool, it offers exceptional warmth, breathability, and a luxurious feel. The classic crewneck design and regular fit make it a versatile addition to any wardrobe. Ribbed collar, cuffs, and hem provide a snug, comfortable fit and help maintain the sweater's shape. This sweater is a versatile layering piece that can be dressed up with a collared shirt or down with jeans. It's an investment in timeless style, quality, and comfort, perfect for transitioning between seasons.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/wool-sweater-k7dNfTXsCdEguuRASAJ6JyQw0M4gws.jpg"
    ],
    basePriceInPaise: 89900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 89900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 89900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 89900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 89900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-02-15T11:30:00")
  },

  {
    title: "Cargo Pants",
    slug: "cargo-pants-4721",
    description:
      "Combine rugged utility with modern style in our versatile Cargo Pants. Designed for adventure and everyday wear, they offer a perfect blend of functionality, comfort, and durability. Crafted from tough, breathable cotton twill, they feature a relaxed, straight-leg fit for ample movement. Multiple cargo pockets provide plenty of storage for your essentials. Reinforced stitching and an adjustable waistband ensure a secure, long-lasting fit. Pair them with hiking boots for an outdoor adventure or sneakers for a relaxed, everyday look. These pants are the perfect combination of rugged style and practical design, ready for anything.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/cargo-pants-S5UmJ6tvjRjysdJZvXg54ZEQ4FZw1c.jpg"
    ],
    basePriceInPaise: 94900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 94900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 94900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 94900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 94900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.35,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-02-22T08:50:00")
  },

  {
    title: "Polo Shirt",
    slug: "polo-shirt-3161",
    description:
      "Achieve effortless sophistication with our classic Polo Shirt. This timeless staple bridges the gap between casual and smart, making it a must-have for any wardrobe. Crafted from premium, breathable cotton pique, it provides all-day comfort and a polished appearance. The classic design features a two-button placket, a ribbed collar, and a regular fit that is both comfortable and flattering. Pair it with chinos for a smart-casual look or with shorts for a relaxed weekend ensemble. It's the perfect combination of comfort, quality, and timeless style, a symbol of refined, casual elegance.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/polo-shirt-WChYflDB7ZTVwMa6FxOuKf8TZ4F00T.jpg"
    ],
    basePriceInPaise: 69900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 69900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 69900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 69900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 69900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-02-28T13:10:00")
  },

  {
    title: "Winter Coat",
    slug: "winter-coat-7248",
    description:
      "Brave the coldest days in style and comfort with our premium Winter Coat. Engineered for exceptional warmth and protection, it's an essential for any winter wardrobe. Crafted from a water-resistant and windproof outer shell, it features thick, high-loft insulation for superior warmth. The classic parka design includes a longer length, a full-zip front, and a cozy, faux-fur-trimmed hood. Multiple pockets and fleece-lined hand-warmer pockets provide ample storage and comfort. This coat is the perfect combination of style, warmth, and practicality, designed to keep you comfortable and protected all winter long.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://affairweatherkennel.com/wp-content/uploads/2024/06/Men_s-Hooded-Winter-Coat-Puffer-Jacket-Thicken-Warm-Fur-Down-Parka-Jacket-with-Removable-Hood_4-1024x1024.jpg"
    ],
    basePriceInPaise: 139900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 139900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 139900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 139900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 139900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-03-03T10:20:00")
  },

  {
    title: "Shorts",
    slug: "shorts-5042",
    description:
      "Stay cool and comfortable in our classic and versatile Shorts. Designed for warm weather and active lifestyles, they offer a perfect blend of comfort, style, and practicality. Crafted from a lightweight, breathable cotton-blend fabric, they feature a classic flat-front design and a regular fit for a clean, timeless look. The knee-length inseam and four-pocket design provide a comfortable, modern fit with ample storage. These shorts are a versatile addition to any casual wardrobe, perfect for a day at the beach or a barbecue with friends. Stay cool and stylish all season long.",
    brand: "SnapBuy Selection",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://www.dukeindia.com/cdn/shop/files/5_03adfdfc-5669-41be-a4c5-e76024e3704d_1024x1024.jpg?v=1702463834"
    ],
    basePriceInPaise: 54900,
    variants: [
      { size: "S", color: "Standard", priceInPaise: 54900, stock: 25 },
      { size: "M", color: "Standard", priceInPaise: 54900, stock: 25 },
      { size: "L", color: "Standard", priceInPaise: 54900, stock: 25 },
      { size: "XL", color: "Standard", priceInPaise: 54900, stock: 25 }
    ],
    totalStock: 100,
    rating: 3.9,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-03-06T15:35:00")
  },

  {
    title: "Casual Blazer",
    slug: "casual-blazer-654-4578",
    description:
      "Upgrade your everyday style with our Casual Blazer, designed to deliver a sharp and modern look without sacrificing comfort. Crafted from a lightweight and breathable fabric blend, this blazer is ideal for office wear, business casual meetings, and evening outings. The slim fit structure enhances your profile while allowing easy movement throughout the day. It features a classic notch lapel, clean stitching, and a smooth inner lining for long-lasting comfort. Functional pockets and durable construction reflect premium craftsmanship. Pair it with jeans, chinos, or tailored trousers to create a refined and versatile wardrobe essential.",
    brand: "SnapBuy Basics",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - men object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770270938/Men-Blazer-Suit-Jacket-Slim-fit-Fashion-blaser-masculine-high-quality-casual-red-blazer-jacket-for_tpdtkm.webp"
    ],
    basePriceInPaise: 129900,
    variants: [
      { size: "S", color: "White", priceInPaise: 129900, stock: 21 },
      { size: "M", color: "White", priceInPaise: 129900, stock: 21 },
      { size: "L", color: "Black", priceInPaise: 129900, stock: 21 },
      { size: "XL", color: "Blue", priceInPaise: 129900, stock: 21 }
    ],
    totalStock: 84,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-03-10T12:45:00")
  }
];

export const fashion_women_products = [
{
  title: "Summer Dress",
  slug: "summer-dress",
  description: "Embrace the sunshine with our beautiful and breezy Summer Dress. Designed to keep you cool and stylish, it is crafted from lightweight and breathable fabric that feels soft on the skin. The relaxed silhouette offers a flattering and comfortable fit for daily wear, vacations, and casual outings. Easy to style with sandals or flats, this dress delivers effortless charm and long-lasting comfort for warm weather wardrobes.",
  brand: "SnapBuy Selection",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/summer-dress-0VJHv3JqYlEwT6PXd7dRGTRSSwS76Q.jpg"
  ],
  basePriceInPaise: 59990,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 5999, stock: 25 },
    { size: "M", color: "Standard", priceInPaise: 5999, stock: 25 },
    { size: "L", color: "Standard", priceInPaise: 5999, stock: 25 },
    { size: "XL", color: "Standard", priceInPaise: 5999, stock: 25 }
  ],
  totalStock: 100,
  rating: 3.1,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-05T10:30:00")
},

{
  title: "Floral Summer Dress",
  slug: "floral-summer-dress",
  description: "Add a refreshing and vibrant touch to your wardrobe with this Floral Summer Dress. Made from breathable and soft fabric, it provides all-day comfort while maintaining a flattering shape. The cheerful floral pattern enhances everyday style and makes it perfect for holidays, casual gatherings, and daily wear. Easy to pair with sandals or sneakers, this dress is a dependable warm-weather essential.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770282285/images_yrbfnd.jpg"
  ],
  basePriceInPaise: 200000,
  variants: [
    { size: "S", color: "Blue", priceInPaise: 200000, stock: 18 },
    { size: "M", color: "Red", priceInPaise: 200000, stock: 18 },
    { size: "L", color: "White", priceInPaise: 200000, stock: 18 },
    { size: "XL", color: "Blue", priceInPaise: 200000, stock: 18 }
  ],
  totalStock: 72,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-08T11:10:00")
},

{
  title: "Elegant Evening Gown",
  slug: "elegant-evening-gown",
  description: "This Elegant Evening Gown is designed for formal occasions and special celebrations. Crafted from smooth and flowing fabric, it drapes beautifully and enhances the natural silhouette. The refined neckline and tailored structure deliver a graceful and confident look. Ideal for receptions, parties, and festive events, this gown blends modern elegance with long-lasting comfort.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770282472/m46862887159_1_fllfb2.jpg"
  ],
  basePriceInPaise: 200500,
  variants: [
    { size: "S", color: "Red", priceInPaise: 200500, stock: 12 },
    { size: "M", color: "White", priceInPaise: 200500, stock: 12 },
    { size: "L", color: "Black", priceInPaise: 200500, stock: 12 },
    { size: "XL", color: "Blue", priceInPaise: 200500, stock: 12 }
  ],
  totalStock: 48,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-12T14:20:00")
},

{
  title: "High Waist Skirt",
  slug: "high-waist-skirt",
  description: "This High Waist Skirt offers a flattering fit with everyday comfort. The high-rise waistline enhances your silhouette while allowing easy movement throughout the day. Crafted from durable and breathable fabric, it pairs effortlessly with blouses, tops, and casual tees. Suitable for workwear and casual outings, this skirt delivers both style and versatility.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770282631/images_cqf5bq.jpg"
  ],
  basePriceInPaise: 201000,
  variants: [
    { size: "S", color: "White", priceInPaise: 201000, stock: 26 },
    { size: "M", color: "Black", priceInPaise: 201000, stock: 26 },
    { size: "L", color: "Black", priceInPaise: 201000, stock: 26 },
    { size: "XL", color: "Blue", priceInPaise: 201000, stock: 26 }
  ],
  totalStock: 104,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-15T09:45:00")
},

{
  title: "Silk Blouse",
  slug: "silk-blouse",
  description: "This Silk Blouse combines elegance and everyday practicality. The soft and smooth fabric feels gentle on the skin and offers a refined appearance suitable for office and casual wear. Designed with a flattering fit and clean stitching, it pairs effortlessly with skirts, trousers, and jeans. A versatile staple for modern wardrobes.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770282736/X-1024.SL_LIGHT-GOLD_HF_zoom_a0klns.jpg"
  ],
  basePriceInPaise: 201500,
  variants: [
    { size: "S", color: "Black", priceInPaise: 201500, stock: 32 },
    { size: "M", color: "Red", priceInPaise: 201500, stock: 32 },
    { size: "L", color: "Red", priceInPaise: 201500, stock: 32 },
    { size: "XL", color: "White", priceInPaise: 201500, stock: 32 }
  ],
  totalStock: 128,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-18T12:00:00")
},

{
  title: "Designer Saree",
  slug: "designer-saree",
  description: "This Designer Saree is crafted to highlight traditional elegance with a modern finish. The lightweight and comfortable fabric drapes gracefully and provides a refined look for festive occasions, weddings, and cultural events. Subtle detailing and premium stitching elevate the overall appearance. A perfect choice for special celebrations and formal gatherings.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770282866/DustyMintDesignerEmbroideredTissueOrganzaWeddingPartyWearSaree-Saira_sBoutique_1_ee2nkm.jpg"
  ],
  basePriceInPaise: 202000,
  variants: [
    { size: "S", color: "White", priceInPaise: 202000, stock: 16 },
    { size: "M", color: "Red", priceInPaise: 202000, stock: 16 },
    { size: "L", color: "Black", priceInPaise: 202000, stock: 16 },
    { size: "XL", color: "Blue", priceInPaise: 202000, stock: 16 }
  ],
  totalStock: 64,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-22T15:40:00")
},

/* ---- created products to reach minimum 10 unique items ---- */

{
  title: "Cotton Kurti",
  slug: "cotton-kurti",
  description: "This Cotton Kurti is designed for daily comfort and effortless ethnic style. Made from soft and breathable cotton fabric, it allows easy movement and long-lasting comfort throughout the day. The relaxed fit and clean finish make it suitable for work, casual outings, and everyday wear.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770283383/images_dcwkdj.jpg"
  ],
  basePriceInPaise: 149000,
  variants: [
    { size: "S", color: "Blue", priceInPaise: 149000, stock: 20 },
    { size: "M", color: "Blue", priceInPaise: 149000, stock: 20 },
    { size: "L", color: "Red", priceInPaise: 149000, stock: 20 },
    { size: "XL", color: "Red", priceInPaise: 149000, stock: 20 }
  ],
  totalStock: 80,
  rating: 4.4,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-02-01T10:00:00")
},

{
  title: "Denim Jacket",
  slug: "denim-jacket",
  description: "This Denim Jacket offers a classic casual look with modern comfort. Built with durable denim fabric, it provides long-lasting wear and versatile styling. Ideal for layering over dresses and tops, this jacket adds a stylish edge to everyday outfits.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770283459/images_ligljk.jpg"
  ],
  basePriceInPaise: 175000,
  variants: [
    { size: "S", color: "Blue", priceInPaise: 175000, stock: 18 },
    { size: "M", color: "Blue", priceInPaise: 175000, stock: 18 },
    { size: "L", color: "Black", priceInPaise: 175000, stock: 18 },
    { size: "XL", color: "Black", priceInPaise: 175000, stock: 18 }
  ],
  totalStock: 72,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-02-03T11:30:00")
},

{
  title: "Palazzo Pants",
  slug: "palazzo-pants",
  description: "These Palazzo Pants are designed for relaxed comfort and modern style. The wide-leg silhouette allows excellent airflow and freedom of movement. Crafted from lightweight fabric, they are ideal for travel, casual outings, and everyday wear.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770283621/images_rgdjd9.jpg"
  ],
  basePriceInPaise: 135000,
  variants: [
    { size: "S", color: "Black", priceInPaise: 135000, stock: 24 },
    { size: "M", color: "Black", priceInPaise: 135000, stock: 24 },
    { size: "L", color: "Blue", priceInPaise: 135000, stock: 24 },
    { size: "XL", color: "Blue", priceInPaise: 135000, stock: 24 }
  ],
  totalStock: 96,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-02-06T09:20:00")
},

{
  title: "Knit Cardigan",
  slug: "knit-cardigan",
  description: "This Knit Cardigan delivers lightweight warmth and everyday comfort. The soft knit fabric feels gentle on the skin and makes it suitable for layering across seasons. Designed for casual wear, it pairs easily with dresses, tops, and jeans.",
  brand: "SnapBuy Basics",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - women object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770283691/avondale-tweed-cardigan-front_efjl8d.png"
  ],
  basePriceInPaise: 158000,
  variants: [
    { size: "S", color: "Grey", priceInPaise: 158000, stock: 16 },
    { size: "M", color: "Grey", priceInPaise: 158000, stock: 16 },
    { size: "L", color: "Beige", priceInPaise: 158000, stock: 16 },
    { size: "XL", color: "Beige", priceInPaise: 158000, stock: 16 }
  ],
  totalStock: 64,
  rating: 4.5,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-02-08T14:10:00")
}
];


export const fashion_kids_products = [

{
  title: "Kids Graphic Tee",
  slug: "kids-graphic-tee",
  description: "This kids graphic tee is made from soft and breathable cotton fabric to keep children comfortable throughout school hours and playtime. The lightweight material allows easy movement while the durable stitching helps the t-shirt retain its shape even after repeated washes. It is ideal for everyday casual wear and pairs well with shorts, jeans or joggers.",
  brand: "H&M",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286343/51f444fe1ffae0ade552c4c162b10994b5561b64_gxfxeu.jpg"
  ],
  basePriceInPaise: 49900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 49900, stock: 25 },
    { size: "M", color: "Standard", priceInPaise: 49900, stock: 25 },
    { size: "L", color: "Standard", priceInPaise: 49900, stock: 25 },
    { size: "XL", color: "Standard", priceInPaise: 49900, stock: 25 }
  ],
  totalStock: 100,
  rating: 3.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-05T10:20:00")
},

{
  title: "Boys Cargo Shorts",
  slug: "boys-cargo-shorts",
  description: "These boys cargo shorts are designed for everyday comfort and active movement. The lightweight and durable fabric supports outdoor play, travel and casual wear. Multiple utility pockets make the shorts practical while the relaxed fit keeps kids comfortable throughout the day.",
  brand: "Puma",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286462/PUMA-Basic-Essentials-Little-Kids_-Fleece-Cargo-Shorts_yilmi2.jpg"
  ],
  basePriceInPaise: 69900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 69900, stock: 18 },
    { size: "M", color: "Standard", priceInPaise: 69900, stock: 18 },
    { size: "L", color: "Standard", priceInPaise: 69900, stock: 18 },
    { size: "XL", color: "Standard", priceInPaise: 69900, stock: 18 }
  ],
  totalStock: 72,
  rating: 4.1,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-07T11:10:00")
},

{
  title: "Girls Party Frock",
  slug: "girls-party-frock",
  description: "This girls party frock offers a stylish look with all-day comfort. The soft fabric and smooth lining feel gentle on the skin while the lightweight design allows free movement. It is suitable for birthdays, school events and festive occasions.",
  brand: "Hopscotch",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286519/71fqC256x-L._AC_UY1100__vbbwqq.jpg"
  ],
  basePriceInPaise: 119900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 119900, stock: 16 },
    { size: "M", color: "Standard", priceInPaise: 119900, stock: 16 },
    { size: "L", color: "Standard", priceInPaise: 119900, stock: 16 },
    { size: "XL", color: "Standard", priceInPaise: 119900, stock: 16 }
  ],
  totalStock: 64,
  rating: 4.4,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-09T14:15:00")
},

{
  title: "Kids Nightwear Set",
  slug: "kids-nightwear-set",
  description: "This kids nightwear set is crafted from soft and breathable fabric to ensure a comfortable sleep experience. The flexible fit supports natural movement during sleep and helps avoid skin irritation. It is easy to maintain and suitable for daily use.",
  brand: "Carter’s",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286568/Carter-s-Child-of-Mine-Toddler-Halloween-Pajama-Set-2-Piece-Sizes-12M-5T_54bbde18-a3af-41c0-91cf-8454cd591865.b0d4d0555600dcbe2f6eb421e0ba3e14_satcv8.jpg"
  ],
  basePriceInPaise: 79900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 79900, stock: 20 },
    { size: "M", color: "Standard", priceInPaise: 79900, stock: 20 },
    { size: "L", color: "Standard", priceInPaise: 79900, stock: 20 },
    { size: "XL", color: "Standard", priceInPaise: 79900, stock: 20 }
  ],
  totalStock: 80,
  rating: 4.2,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-11T09:45:00")
},

{
  title: "Kids School Uniform Set",
  slug: "kids-school-uniform-set",
  description: "This kids school uniform set is designed for long school hours and daily activities. The breathable fabric keeps children comfortable while the durable stitching supports frequent washing. The neat fit ensures a clean and smart school appearance.",
  brand: "FirstCry",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286657/Manufacture-Custom-OEM-Wholesale-Primary-Children-Kid-Uniform-Set-High-Middle-School-University-Kindergarten-School-Uniforms_yfrb9i.jpg"
  ],
  basePriceInPaise: 149900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 149900, stock: 22 },
    { size: "M", color: "Standard", priceInPaise: 149900, stock: 22 },
    { size: "L", color: "Standard", priceInPaise: 149900, stock: 22 },
    { size: "XL", color: "Standard", priceInPaise: 149900, stock: 22 }
  ],
  totalStock: 88,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-13T13:30:00")
},

{
  title: "Kids Hoodie",
  slug: "kids-hoodie",
  description: "This kids hoodie provides soft warmth and everyday comfort. The inner lining feels gentle on the skin and the relaxed fit supports easy layering. It is ideal for school days, travel and casual outings.",
  brand: "GAP",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286739/cn56850938_ccykfq.jpg"
  ],
  basePriceInPaise: 129900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 129900, stock: 18 },
    { size: "M", color: "Standard", priceInPaise: 129900, stock: 18 },
    { size: "L", color: "Standard", priceInPaise: 129900, stock: 18 },
    { size: "XL", color: "Standard", priceInPaise: 129900, stock: 18 }
  ],
  totalStock: 72,
  rating: 4.5,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-15T11:10:00")
},

{
  title: "Kids Jogger Pants",
  slug: "kids-jogger-pants",
  description: "These kids jogger pants are designed for sports, play and everyday comfort. The stretchable fabric supports free movement while the elastic waistband offers a secure fit. They are suitable for school activities and outdoor play.",
  brand: "Nike",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286790/Nike-Kids-Boy-s-Club-Fleece-Rib-Cuff-Pants-Little-Kids-Carbon-Heather-6-Little-Kids_6445cf48-b022-47e8-b839-019f501cca0d.9fc540a4aca17ca4e134efa303e4c38b_bm6a5b.jpg"
  ],
  basePriceInPaise: 109900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 109900, stock: 20 },
    { size: "M", color: "Standard", priceInPaise: 109900, stock: 20 },
    { size: "L", color: "Standard", priceInPaise: 109900, stock: 20 },
    { size: "XL", color: "Standard", priceInPaise: 109900, stock: 20 }
  ],
  totalStock: 80,
  rating: 4.4,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-17T10:25:00")
},

{
  title: "Kids Track Suit",
  slug: "kids-track-suit",
  description: "This kids track suit is suitable for sports practice and everyday activities. The lightweight and breathable fabric keeps children comfortable during long hours of use while allowing free movement.",
  brand: "Adidas",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286857/-1117Wx1400H-410352883-black-MODEL_nmpsoi.jpg"
  ],
  basePriceInPaise: 159900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 159900, stock: 16 },
    { size: "M", color: "Standard", priceInPaise: 159900, stock: 16 },
    { size: "L", color: "Standard", priceInPaise: 159900, stock: 16 },
    { size: "XL", color: "Standard", priceInPaise: 159900, stock: 16 }
  ],
  totalStock: 64,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-19T15:35:00")
},

{
  title: "Kids Rain Jacket",
  slug: "kids-rain-jacket",
  description: "This kids rain jacket provides protection during light and moderate rain. The water resistant outer layer keeps children dry while remaining breathable and lightweight. It is easy to carry and suitable for school travel and outdoor use.",
  brand: "Decathlon",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770286941/rain-jacket_mustard_alt_a4daz4.jpg"
  ],
  basePriceInPaise: 99900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 99900, stock: 18 },
    { size: "M", color: "Standard", priceInPaise: 99900, stock: 18 },
    { size: "L", color: "Standard", priceInPaise: 99900, stock: 18 },
    { size: "XL", color: "Standard", priceInPaise: 99900, stock: 18 }
  ],
  totalStock: 72,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-21T09:15:00")
},

{
  title: "Kids Denim Jacket",
  slug: "kids-denim-jacket",
  description: "This kids denim jacket adds a stylish outer layer for everyday wear. Made from durable denim fabric, it provides comfort and long lasting use. Suitable for mild weather, school outings and casual travel.",
  brand: "Zara",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770287064/s-l1200_uhqd6h.png"
  ],
  basePriceInPaise: 179900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 179900, stock: 14 },
    { size: "M", color: "Standard", priceInPaise: 179900, stock: 14 },
    { size: "L", color: "Standard", priceInPaise: 179900, stock: 14 },
    { size: "XL", color: "Standard", priceInPaise: 179900, stock: 14 }
  ],
  totalStock: 56,
  rating: 4.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-23T12:45:00")
},

{
  title: "Kids Cotton Shorts",
  slug: "kids-cotton-shorts",
  description: "These kids cotton shorts are made for everyday comfort during warm weather. The soft and breathable fabric keeps children cool while the relaxed fit supports free movement during play and travel.",
  brand: "Max Fashion",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770287143/s-l1200_bcnufj.jpg"
  ],
  basePriceInPaise: 44900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 44900, stock: 25 },
    { size: "M", color: "Standard", priceInPaise: 44900, stock: 25 },
    { size: "L", color: "Standard", priceInPaise: 44900, stock: 25 },
    { size: "XL", color: "Standard", priceInPaise: 44900, stock: 25 }
  ],
  totalStock: 100,
  rating: 3.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-25T10:10:00")
},

{
  title: "Kids Polo T Shirt",
  slug: "kids-polo-t-shirt",
  description: "This kids polo t shirt delivers a smart casual look with breathable comfort. The cotton fabric keeps children comfortable throughout the day while the neat collar and regular fit make it suitable for family outings and casual events.",
  brand: "Levi’s",
  category: "PUT Fashion category objectID here",
  subCategory: "PUT Fashion category - kids object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770287222/81P770-X1O_91P770-X1O_1_my9ggj.png"
  ],
  basePriceInPaise: 89900,
  variants: [
    { size: "S", color: "Standard", priceInPaise: 89900, stock: 20 },
    { size: "M", color: "Standard", priceInPaise: 89900, stock: 20 },
    { size: "L", color: "Standard", priceInPaise: 89900, stock: 20 },
    { size: "XL", color: "Standard", priceInPaise: 89900, stock: 20 }
  ],
  totalStock: 80,
  rating: 4.2,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-01-27T11:55:00")
}

];


export const fashion_footwear_products = [
  {
    title: "Running Shoes",
    slug: "running-shoes-nike",
    description:
      "Designed for everyday runners and fitness enthusiasts, these lightweight running shoes offer excellent cushioning and breathable comfort for long training sessions. The engineered mesh upper improves airflow and keeps your feet cool, while the responsive foam midsole helps reduce impact on joints. A reinforced heel counter provides stability and better alignment during movement. The durable rubber outsole delivers reliable grip on roads and gym surfaces. Ideal for jogging, treadmill workouts, and casual athletic wear, these shoes combine performance, comfort, and a clean modern design suitable for daily use.",
    brand: "Nike",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288342/PEGASUS_EASYON_fsagqz.png"
    ],
    basePriceInPaise: 999900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 999900, stock: 20 },
      { size: "8", color: "Standard", priceInPaise: 999900, stock: 20 },
      { size: "9", color: "Standard", priceInPaise: 999900, stock: 20 },
      { size: "10", color: "Standard", priceInPaise: 999900, stock: 20 }
    ],
    totalStock: 80,
    rating: 4.8,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-12")
  },
  {
    title: "Casual Sneakers",
    slug: "casual-sneakers-adidas",
    description:
      "These casual sneakers are built for everyday comfort and street-ready style. The soft textile upper keeps the shoes light and breathable, while the padded collar and cushioned footbed provide long-lasting comfort throughout the day. A flexible outsole allows smooth movement for walking and daily commuting. The minimalist design pairs well with jeans, joggers, and casual outfits, making them suitable for work, travel, and weekend wear. Designed for people who want reliable comfort without sacrificing a clean, modern appearance.",
    brand: "Adidas",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288405/shoes_men_tcc_d_44a809233a_eqrck3.jpg"
    ],
    basePriceInPaise: 599900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 599900, stock: 22 },
      { size: "8", color: "Standard", priceInPaise: 599900, stock: 22 },
      { size: "9", color: "Standard", priceInPaise: 599900, stock: 22 },
      { size: "10", color: "Standard", priceInPaise: 599900, stock: 22 }
    ],
    totalStock: 88,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-18")
  },
  {
    title: "Leather Loafers",
    slug: "leather-loafers-clarks",
    description:
      "Crafted from premium leather, these loafers deliver a refined and comfortable experience for daily office wear and formal occasions. The soft inner lining helps reduce friction and keeps feet relaxed during long hours. A supportive insole improves underfoot comfort, while the sturdy outsole offers stability and durability. The classic slip-on silhouette makes them easy to wear and suitable for business outfits, formal trousers, and smart casual looks. Built for comfort and long-term use with a timeless design.",
    brand: "Clarks",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288493/71B_BX0ZlcL._AC_UY900__z7vzmf.jpg"
    ],
    basePriceInPaise: 699900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 699900, stock: 18 },
      { size: "8", color: "Standard", priceInPaise: 699900, stock: 18 },
      { size: "9", color: "Standard", priceInPaise: 699900, stock: 18 },
      { size: "10", color: "Standard", priceInPaise: 699900, stock: 18 }
    ],
    totalStock: 72,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2024-12-28")
  },
  {
    title: "Formal Oxfords",
    slug: "formal-oxfords-hush-puppies",
    description:
      "These classic formal oxfords are designed for professionals who need comfort and style throughout the workday. The smooth leather upper delivers a polished appearance, while the cushioned footbed supports extended standing and walking. A balanced sole construction ensures reliable grip on indoor and outdoor surfaces. The elegant lace-up profile pairs perfectly with formal suits and office attire. Ideal for daily business wear, meetings, and formal occasions where comfort and presentation both matter.",
    brand: "Hush Puppies",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288535/hm01107-208-dark-brown-760x850-3_4_otn2by.jpg"
    ],
    basePriceInPaise: 749900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 749900, stock: 16 },
      { size: "8", color: "Standard", priceInPaise: 749900, stock: 16 },
      { size: "9", color: "Standard", priceInPaise: 749900, stock: 16 },
      { size: "10", color: "Standard", priceInPaise: 749900, stock: 16 }
    ],
    totalStock: 64,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-05")
  },
  {
    title: "Sports Sandals",
    slug: "sports-sandals-decathlon",
    description:
      "Built for outdoor comfort and everyday adventures, these sports sandals provide excellent breathability and adjustable support. The cushioned footbed absorbs impact during long walks and travel activities. Strong straps help secure the foot while maintaining flexibility for movement. The rugged outsole delivers reliable traction on light trails and wet surfaces. Ideal for casual outdoor use, city travel, and light trekking where comfort, grip, and durability are essential.",
    brand: "Decathlon",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288581/SANDALE_TREK_500_20198506214TCIPSHOT001_-_8506214_-_001_---_Expires_on_01-10-2026_iwv0zb.jpg"
    ],
    basePriceInPaise: 299900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 299900, stock: 25 },
      { size: "8", color: "Standard", priceInPaise: 299900, stock: 25 },
      { size: "9", color: "Standard", priceInPaise: 299900, stock: 25 },
      { size: "10", color: "Standard", priceInPaise: 299900, stock: 25 }
    ],
    totalStock: 100,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-09")
  },
  {
    title: "Trail Running Shoes",
    slug: "trail-running-shoes-salomon",
    description:
      "Designed for off-road runners and outdoor athletes, these trail running shoes offer enhanced grip, protection, and stability. The reinforced upper protects the foot from debris while maintaining breathability. A responsive midsole supports uneven terrain and reduces fatigue during long trail sessions. The aggressive outsole pattern improves traction on mud, gravel, and rocky paths. Perfect for trail runs, outdoor training, and adventure sports.",
    brand: "Salomon",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288690/IMG_0342_pjnphp.jpg"
    ],
    basePriceInPaise: 1099900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 1099900, stock: 14 },
      { size: "8", color: "Standard", priceInPaise: 1099900, stock: 14 },
      { size: "9", color: "Standard", priceInPaise: 1099900, stock: 14 },
      { size: "10", color: "Standard", priceInPaise: 1099900, stock: 14 }
    ],
    totalStock: 56,
    rating: 4.9,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2024-12-20")
  },
  {
    title: "Slip-On Sneakers",
    slug: "slip-on-sneakers-vans",
    description:
      "These slip-on sneakers are built for effortless everyday wear with a lightweight canvas upper and flexible sole. The easy on-off design makes them convenient for travel, college, and casual outings. A cushioned insole improves comfort for extended walking. The simple low-profile silhouette pairs well with jeans, shorts, and relaxed streetwear styles. Perfect for users who prefer comfort and simplicity without compromising style.",
    brand: "Vans",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288717/slipcheck_1_y7uiyw.jpg"
    ],
    basePriceInPaise: 499900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 499900, stock: 24 },
      { size: "8", color: "Standard", priceInPaise: 499900, stock: 24 },
      { size: "9", color: "Standard", priceInPaise: 499900, stock: 24 },
      { size: "10", color: "Standard", priceInPaise: 499900, stock: 24 }
    ],
    totalStock: 96,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-03")
  },
  {
    title: "Walking Shoes",
    slug: "walking-shoes-skechers",
    description:
      "Engineered for daily walking and comfort, these walking shoes feature soft cushioning and a breathable upper for long-hour usage. The lightweight construction reduces foot fatigue, while the flexible sole supports natural foot movement. A padded collar and supportive midsole help maintain stability during long walks and travel. Suitable for casual wear, office commuting, and daily fitness routines.",
    brand: "Skechers",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288900/124823-NVPK__62750.1713811417_sifp8u.jpg"
    ],
    basePriceInPaise: 549900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 549900, stock: 22 },
      { size: "8", color: "Standard", priceInPaise: 549900, stock: 22 },
      { size: "9", color: "Standard", priceInPaise: 549900, stock: 22 },
      { size: "10", color: "Standard", priceInPaise: 549900, stock: 22 }
    ],
    totalStock: 88,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-14")
  },
  {
    title: "Training Shoes",
    slug: "training-shoes-reebok",
    description:
      "These training shoes are designed for gym workouts, cross-training sessions, and indoor fitness activities. The stable base improves balance during weight training, while the cushioned midsole provides comfort for high-impact movements. A breathable upper helps regulate heat and moisture. Ideal for strength training, functional workouts, and everyday gym routines.",
    brand: "Reebok",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770288943/DP0212202409032841M_f9ygr6.jpg"
    ],
    basePriceInPaise: 449900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 449900, stock: 20 },
      { size: "8", color: "Standard", priceInPaise: 449900, stock: 20 },
      { size: "9", color: "Standard", priceInPaise: 449900, stock: 20 },
      { size: "10", color: "Standard", priceInPaise: 449900, stock: 20 }
    ],
    totalStock: 80,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-10")
  },
  {
    title: "Flip Flops",
    slug: "flip-flops-puma",
    description:
      "Lightweight and easy to wear, these flip flops are ideal for daily use, travel, and indoor comfort. The soft footbed improves step comfort, while the flexible sole allows natural movement. Designed for quick wear and easy storage, they are suitable for short walks, beach trips, and casual home use. Simple styling and reliable comfort make them a practical everyday essential.",
    brand: "Puma",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770289024/Leadcat-2_z4wzpu.jpg"
    ],
    basePriceInPaise: 199900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 199900, stock: 30 },
      { size: "8", color: "Standard", priceInPaise: 199900, stock: 30 },
      { size: "9", color: "Standard", priceInPaise: 199900, stock: 30 },
      { size: "10", color: "Standard", priceInPaise: 199900, stock: 30 }
    ],
    totalStock: 120,
    rating: 4.0,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-01")
  },
  {
    title: "School Shoes",
    slug: "school-shoes-bata",
    description:
      "Built for everyday school use, these durable school shoes provide comfort and long-lasting support for growing feet. The sturdy construction handles daily wear, while the cushioned insole helps reduce foot strain during long school hours. A secure fit improves stability and confidence while walking and running. Designed for uniform compatibility and daily reliability.",
    brand: "Bata",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770289099/01_8860710005_SI_00_bslcjc.jpg"
    ],
    basePriceInPaise: 249900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 249900, stock: 26 },
      { size: "8", color: "Standard", priceInPaise: 249900, stock: 26 },
      { size: "9", color: "Standard", priceInPaise: 249900, stock: 26 },
      { size: "10", color: "Standard", priceInPaise: 249900, stock: 26 }
    ],
    totalStock: 104,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2024-12-30")
  },
  {
    title: "Hiking Sandals",
    slug: "hiking-sandals-quechua",
    description:
      "Designed for outdoor walks and light trekking, these hiking sandals offer breathable comfort and dependable grip. The adjustable straps allow a secure and personalised fit, while the cushioned sole helps reduce impact on uneven surfaces. A rugged outsole improves stability on trails and wet ground. Ideal for hiking, travel, and outdoor exploration where comfort and flexibility are required.",
    brand: "Quechua",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - footwear object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770289179/decathlon_hiking_sandal_nh500_1710854988_31696199_progressive_g5j5jq.jpg"
    ],
    basePriceInPaise: 349900,
    variants: [
      { size: "7", color: "Standard", priceInPaise: 349900, stock: 24 },
      { size: "8", color: "Standard", priceInPaise: 349900, stock: 24 },
      { size: "9", color: "Standard", priceInPaise: 349900, stock: 24 },
      { size: "10", color: "Standard", priceInPaise: 349900, stock: 24 }
    ],
    totalStock: 96,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-01-07")
  }
];


export const fashion_accessories_products = [
  {
    title: "Leather Belt",
    slug: "leather-belt",
    description:
      "This genuine leather belt is designed for daily reliability, long wear comfort, and clean professional styling. It is crafted from premium full-grain leather that gradually develops a natural finish with use. The strong metal buckle provides a secure fit and resists bending or loosening over time. Reinforced stitching at stress points improves durability during regular wear. Its simple profile pairs easily with office trousers, denim, and formal outfits. The belt maintains its shape even after frequent adjustments and extended use, making it ideal for customers who want a dependable wardrobe essential that combines durability, comfort, versatility, and timeless everyday style.",
    brand: "Tommy Hilfiger",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/leather-belt-XqiNhkVB5r2LL29lGRnG14vWBu3lbd.jpg"
    ],
    basePriceInPaise: 249900,
    variants: [],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-11T10:12:00Z")
  },

  {
    title: "Sunglasses",
    slug: "sunglasses",
    description:
      "These sunglasses are designed for everyday outdoor comfort and dependable eye protection in bright conditions. The high-quality lenses reduce glare and help protect your eyes from harmful ultraviolet exposure. Lightweight and well-balanced frames ensure a comfortable fit during extended use without creating pressure on the nose or temples. The classic shape works well with casual clothing, travel outfits, and daily commuting styles. Durable construction helps the frame resist minor impacts and frequent handling. This pair is ideal for users seeking practical visual comfort, long wearing stability, and modern styling for routine outdoor activities and travel use.",
    brand: "Ray-Ban",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/sunglasses-V2Srj7WtRy7xjDv94mhk1wAQI47k6Q.jpg"
    ],
    basePriceInPaise: 749900,
    variants: [],
    totalStock: 100,
    rating: 4.9,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-03T08:45:00Z")
  },

  {
    title: "Crossbody Bag",
    slug: "crossbody-bag",
    description:
      "This crossbody bag is built for people who prefer lightweight and hands-free everyday carrying. The main compartment easily stores your phone, wallet, power bank, and daily essentials while internal pockets improve organization. A smooth zipper closure keeps personal items secure during travel and crowded movement. The adjustable strap allows comfortable wearing across the body or over the shoulder. The outer fabric resists light moisture and surface abrasion. Its compact shape makes it suitable for shopping, commuting, and short trips. This bag is ideal for customers who value convenience, durability, comfort, and clean minimal everyday styling.",
    brand: "Fossil",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/crossbody-bag-R3IGMGYCwMxA8VtoqS6imHdAr9aV8m.jpg"
    ],
    basePriceInPaise: 899900,
    variants: [],
    totalStock: 100,
    rating: 4.8,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-19T14:22:00Z")
  },

  {
    title: "Scarf",
    slug: "scarf",
    description:
      "This lightweight scarf is created to provide everyday comfort while adding a simple and elegant layer to your outfit. The soft fabric feels gentle against the skin and remains breathable during long hours of use. Its flexible length supports different styling options such as draping, wrapping, or loose layering. The material folds easily without forming hard creases and stays comfortable even in indoor air-conditioned environments. The clean and neutral design allows easy pairing with office wear, travel outfits, and casual clothing. This scarf suits customers seeking a versatile, practical accessory for daily styling and light warmth.",
    brand: "Marks & Spencer",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://www.annabeltrends.com/cdn/shop/products/63SSB_Slip_through_Scarf_Black_2.jpg?v=1683872166"
    ],
    basePriceInPaise: 199900,
    variants: [],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-07-07T09:18:00Z")
  },

  {
    title: "Watch",
    slug: "watch",
    description:
      "This analog wrist watch is designed for consistent daily performance and clean professional appearance. The strong outer case protects the internal mechanism while remaining lightweight on the wrist. A clear dial layout allows quick time reading in both indoor and outdoor lighting. The quartz movement delivers accurate timekeeping with minimal maintenance requirements. The strap offers secure and comfortable fit during extended wear. Its balanced styling works equally well with business clothing, casual outfits, and formal occasions. This watch is ideal for customers looking for reliability, simplicity, durability, and long-term everyday usability without unnecessary design complexity.",
    brand: "Casio",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://m.media-amazon.com/images/I/61liwYpcANL._UY1000_.jpg"
    ],
    basePriceInPaise: 499900,
    variants: [],
    totalStock: 100,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-02T11:30:00Z")
  },

  {
    title: "Gloves",
    slug: "gloves",
    description:
      "These gloves are designed to provide reliable warmth and everyday hand protection during cooler weather conditions. The soft inner lining helps retain heat while remaining comfortable against the skin. Flexible outer material allows easy finger movement for daily tasks such as driving, walking, or light outdoor activities. The grip surface supports better handling without reducing comfort. Lightweight construction avoids bulky feeling during extended use. The simple and functional design fits well with casual winter clothing and travel wear. These gloves are suitable for customers who want practical warmth, comfort, durability, and easy everyday usability in cold environments.",
    brand: "Decathlon",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://www.bestmarine.com/cdn/shop/files/PVCgloves_1024x1024.jpg?v=1744970541"
    ],
    basePriceInPaise: 79900,
    variants: [],
    totalStock: 100,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-06-14T16:05:00Z")
  },

  {
    title: "Canvas Backpack",
    slug: "canvas-backpack",
    description:
      "This canvas backpack is designed for daily commuting, college use, and light travel requirements. The spacious main compartment comfortably stores books, clothing, and electronic devices, while inner pockets support organized storage. Reinforced seams and strong stitching improve long-term durability under regular carrying loads. The padded shoulder straps reduce pressure on the shoulders during extended use. Lightweight yet sturdy fabric ensures comfortable handling without sacrificing strength. The structured design helps maintain the bag’s shape when partially filled. This backpack suits customers who need a reliable, comfortable, and practical bag for everyday movement and short travel routines.",
    brand: "Wildcraft",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770296919/-original-imah9a2hrujr4twh_mr8dlg.jpg"
    ],
    basePriceInPaise: 199900,
    variants: [],
    totalStock: 90,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-01T12:40:00Z")
  },

  {
    title: "Aviator Sunglasses",
    slug: "aviator-sunglasses",
    description:
      "These aviator sunglasses are built for comfortable daily wear and consistent eye protection in bright outdoor environments. The lightweight metal frame ensures stability without causing pressure on the ears or nose. High-quality lenses help reduce glare and provide clear visual comfort during extended use. The classic aviator silhouette suits multiple face shapes and matches travel, casual, and outdoor outfits easily. Durable construction supports frequent handling and everyday storage. This pair is ideal for customers who want dependable sun protection, clean styling, long wearing comfort, and a versatile eyewear option for daily outdoor routines.",
    brand: "Polaroid",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770296957/Polaroid_1017_003WJ_Sunglass_01_txsmfy.jpg"
    ],
    basePriceInPaise: 349900,
    variants: [],
    totalStock: 75,
    rating: 4.8,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-14T10:55:00Z")
  },

  {
    title: "Silk Scarf",
    slug: "silk-scarf",
    description:
      "This silk-blend scarf is designed to offer lightweight comfort while enhancing everyday outfits with a refined appearance. The smooth fabric drapes naturally around the neck and shoulders, making it suitable for long wearing hours. Breathable material helps maintain comfort without causing skin irritation. The soft finish allows easy pairing with both traditional and modern clothing. Its versatile size supports different styling options for casual and formal occasions. This scarf is ideal for customers who value softness, flexible styling, lightweight feel, and a subtle premium look for daily wear and occasional events.",
    brand: "FabIndia",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770296991/m_69582226dc3b4663fc41523d_hajbpp.jpg"
    ],
    basePriceInPaise: 149900,
    variants: [],
    totalStock: 110,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-07-23T09:35:00Z")
  },

  {
    title: "Leather Wallet",
    slug: "leather-wallet",
    description:
      "This leather wallet is designed for daily use with a compact and well-organized internal layout. Multiple card slots allow easy access to frequently used cards, while a dedicated cash compartment keeps notes neatly stored. The slim profile fits comfortably into pockets without adding bulk. Durable leather construction helps maintain shape and appearance during regular use. Reinforced edges improve long-term strength at stress points. The clean finish supports both casual and professional use. This wallet is suitable for customers seeking a practical, durable, and minimal everyday accessory for managing personal essentials.",
    brand: "Levi’s",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770297049/1624438277156-ba987dfe-3d40-4337-87da-4bebc669bb67_dd5bvc.webp"
    ],
    basePriceInPaise: 129900,
    variants: [],
    totalStock: 130,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-06-30T15:10:00Z")
  },

  {
    title: "Sports Cap",
    slug: "sports-cap",
    description:
      "This sports cap is designed for outdoor training, casual wear, and daily activity use. Lightweight and breathable fabric helps manage heat and moisture during extended movement. The adjustable back strap allows a secure and comfortable fit for different head sizes. The structured front panel maintains its shape and provides shade for the face and eyes. Soft inner lining reduces irritation during longer wear. Its clean and sporty appearance pairs well with activewear and casual clothing. This cap is ideal for customers who want comfort, breathability, sun protection, and versatile everyday styling.",
    brand: "Nike",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770297092/c99b49bf_713f_48a0_9f66_7f3a3317611a_ay1ppc.jpg"
    ],
    basePriceInPaise: 99900,
    variants: [],
    totalStock: 140,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-25T07:55:00Z")
  },

  {
    title: "Travel Duffel Bag",
    slug: "travel-duffel-bag",
    description:
      "This travel duffel bag is designed for gym use, weekend trips, and short travel needs. The large main compartment easily stores clothing, shoes, and personal accessories. Internal pockets improve item organization and quick access. Reinforced handles provide strong grip support, while the adjustable shoulder strap allows flexible carrying. Durable fabric resists surface wear and light moisture during everyday movement. The structured base helps maintain shape even when partially loaded. This bag is ideal for customers seeking a reliable, practical, and comfortable carry solution for fitness sessions and short travel routines.",
    brand: "Puma",
    category: "PUT Fashion category objectID here",
    subCategory: "PUT Fashion category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770297129/Active-Training-Essentials-Women_E2_80_99s-Gym-Bag-24L_nrikk9.jpg"
    ],
    basePriceInPaise: 249900,
    variants: [],
    totalStock: 85,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-28T13:50:00Z")
  }
];



export const electronics_mobiles_products = [

{
  title: "Flagship Android Smartphone",
  slug: "flagship-android-smartphone",
  description: "This flagship Android smartphone is designed for users who expect premium performance, refined design and long-term reliability in everyday use. It offers a high-quality display with excellent brightness, a powerful processor capable of handling demanding apps and games, and a versatile camera system suitable for both casual photography and professional-looking content. The device focuses on smooth software experience, fast connectivity and strong security features, making it ideal for work, entertainment and daily communication. With efficient power management and intelligent system optimization, the phone delivers consistent performance throughout the day while maintaining stable thermal control and dependable long-term durability.",
  brand: "Samsung",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770298704/b79a8de435d147508bcfd9fda26a7072_axki0z.jpg"
  ],
  basePriceInPaise: 6999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 96,
  rating: 4.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-21T11:42:15.000Z"),
  warrantyMonths: 12
},

{
  title: "Affordable Android Smartphone",
  slug: "affordable-android-smartphone",
  description: "This affordable Android smartphone is built for users who want dependable everyday performance without paying a premium price. It offers a clean and responsive interface, a practical camera setup for daily photos, and a bright display that works well both indoors and outdoors. The phone focuses on balanced hardware and efficient software optimization to ensure smooth calling, browsing, social media usage and light gaming. With strong battery endurance and stable connectivity support, this device suits students, first-time smartphone buyers and users looking for a reliable backup phone for daily communication and entertainment needs.",
  brand: "Xiaomi",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770298783/1108-xiaomi-redmi-a5-smartphone-688-3gb-64gb-dual-sim-4g-5200mah-15w-negro_c7kqqf.jpg"
  ],
  basePriceInPaise: 899900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 112,
  rating: 4.1,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-12T08:19:41.000Z"),
  warrantyMonths: 12
},

{
  title: "Gaming Performance Smartphone",
  slug: "gaming-performance-smartphone",
  description: "This gaming performance smartphone is engineered for users who demand sustained power, fast graphics processing and responsive touch controls during extended gaming sessions. It features an advanced cooling system, a high refresh rate display and tuned audio output to deliver an immersive gameplay experience. The device maintains stable frame rates even under heavy load while supporting modern mobile games and high-resolution streaming. Along with strong battery management and fast charging support, this smartphone balances performance and efficiency, making it a practical choice for mobile gamers who also require a capable daily-use device.",
  brand: "ASUS",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770298842/image-28_t0j7uv.png"
  ],
  basePriceInPaise: 5999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 74,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-11-03T14:27:09.000Z"),
  warrantyMonths: 12
},

{
  title: "Foldable Display Smartphone",
  slug: "foldable-display-smartphone",
  description: "This foldable display smartphone combines innovative design with modern smartphone performance to deliver a unique multitasking experience. The flexible screen allows users to switch between compact portability and expanded viewing space for productivity, streaming and browsing. It offers a refined hinge mechanism, durable display protection and optimized software features designed specifically for foldable usage. The device supports advanced multitasking tools, smooth transitions between screen modes and strong processing power to handle everyday applications comfortably, making it suitable for users who want cutting-edge form factor without sacrificing reliability or usability.",
  brand: "Samsung",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770298908/81rCIc3xUhL._AC_UF894_1000_QL80__hw9ljw.jpg"
  ],
  basePriceInPaise: 12499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 41,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-18T10:05:55.000Z"),
  warrantyMonths: 12
},

{
  title: "Basic Feature Phone",
  slug: "basic-feature-phone",
  description: "This basic feature phone is designed for users who prefer simplicity, long battery life and reliable calling functionality. It provides clear voice quality, easy-to-navigate menus and a compact form factor suitable for everyday communication. The device focuses on durability and stable network performance, making it ideal for senior users, backup phone requirements and locations with limited charging access. With essential messaging features, practical keypad controls and strong standby time, this phone delivers dependable everyday usage without unnecessary complexity or advanced smartphone distractions.",
  brand: "Nokia",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770298986/nokia-105-4g-dual-sim-unlocked-4g-feature-phone-386292_df6vwd.jpg"
  ],
  basePriceInPaise: 279900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 133,
  rating: 3.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-07-05T09:12:22.000Z"),
  warrantyMonths: 12
},

{
  title: "Camera Focus Smartphone",
  slug: "camera-focus-smartphone",
  description: "This camera focused smartphone is built for users who prioritize photography and video quality in their daily mobile experience. It offers a refined imaging system with advanced stabilization, intelligent scene detection and optimized image processing for both low-light and bright environments. The device supports high-resolution video recording and delivers consistent color accuracy for social media content creation. Combined with a smooth display, reliable performance and fast connectivity, this smartphone serves as a strong companion for users who want professional-looking results directly from their mobile camera system.",
  brand: "Vivo",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299037/vivox200ultra_1.jpg_bdqfr4.jpg"
  ],
  basePriceInPaise: 4799900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 69,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-02T13:36:48.000Z"),
  warrantyMonths: 12
},

{
  title: "Clean Android Smartphone",
  slug: "clean-android-smartphone",
  description: "This clean Android smartphone delivers a streamlined software experience with minimal preinstalled applications and fast system updates. It focuses on long-term software reliability, strong security features and smooth daily performance. The device offers a balanced camera system, dependable connectivity and optimized battery efficiency for extended everyday usage. Designed for users who prefer a simple and clutter-free interface, this smartphone provides quick access to essential services and productivity tools while maintaining consistent performance for browsing, media consumption and regular communication tasks.",
  brand: "Google",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299151/Refurbished-for-Google-for-6a-128GB-Unlocked-5G-Android-Phone-Clean-IMEI-for-Verizon-T-Mobile-AT-T-Global-Version_o3m3x3.jpg"
  ],
  basePriceInPaise: 4399900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 83,
  rating: 4.5,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-25T15:58:11.000Z"),
  warrantyMonths: 12
},

{
  title: "Fast Charging Smartphone",
  slug: "fast-charging-smartphone",
  description: "This fast charging smartphone is designed for users who need rapid power recovery during busy daily schedules. It supports high-speed charging technology that significantly reduces downtime while maintaining battery health through intelligent charging control. The device offers a smooth display, responsive performance and reliable camera output for everyday photography. Combined with stable connectivity and efficient thermal management, this smartphone provides a practical solution for professionals and students who depend on quick charging without compromising performance or long-term device reliability.",
  brand: "Realme",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299236/bg_88fb5fbaca_lct3sb.jpg"
  ],
  basePriceInPaise: 2199900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 118,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-29T07:44:37.000Z"),
  warrantyMonths: 12
},

{
  title: "Compact Android Smartphone",
  slug: "compact-android-smartphone",
  description: "This compact Android smartphone is built for users who prefer comfortable one-handed operation without sacrificing performance or display quality. It offers a lightweight and ergonomic design, responsive touch controls and optimized software that runs smoothly on compact hardware. The phone delivers reliable daily performance for calls, messaging, browsing and media consumption. With efficient power management and a well-tuned camera system, this device provides a balanced experience for users who value portability, usability and dependable everyday functionality in a smaller form factor.",
  brand: "Sony",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299326/c77d26e25599a37b9b4d5c0555711fae_qbmpfu.jpg"
  ],
  basePriceInPaise: 5499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 52,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-11T12:23:19.000Z"),
  warrantyMonths: 12
},

{
  title: "Premium Android Smartphone",
  slug: "premium-android-smartphone",
  description: "This premium Android smartphone is crafted for users who expect refined build quality, strong performance and a polished software experience. It features a high-resolution display, fast and stable processing capabilities and a well-balanced camera system suitable for everyday and creative use. The device focuses on smooth animations, long-term software support and dependable security updates. With efficient battery optimization and premium materials, this smartphone offers a reliable and comfortable daily experience for users who prefer a high-end feel and consistent performance.",
  brand: "OnePlus",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299378/71xMs88FYbL._AC_UF894_1000_QL80__kkase4.jpg"
  ],
  basePriceInPaise: 6499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 61,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-11-19T16:41:06.000Z"),
  warrantyMonths: 12
},

{
  title: "Long Battery Smartphone",
  slug: "long-battery-smartphone",
  description: "This long battery smartphone is designed for users who need extended usage throughout the day without frequent recharging. It features a large capacity battery combined with efficient power optimization to support calls, browsing, streaming and navigation for longer durations. The device delivers smooth everyday performance and stable connectivity while maintaining a practical and comfortable design. With dependable camera quality and optimized background processing, this smartphone is well suited for travel, field work and users who prioritize endurance and consistent performance in daily mobile use.",
  brand: "Motorola",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - mobiles object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299473/71HeQhrjROL._AC_UF894_1000_QL80__e9yzao.jpg"
  ],
  basePriceInPaise: 1899900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 97,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-07-22T06:18:54.000Z"),
  warrantyMonths: 12
}

];


export const electronics_laptops_products = [

{
  title: "Ultralight Performance Laptop",
  slug: "ultralight-performance-laptop",
  description: "This ultralight performance laptop is designed for professionals and students who need portability without sacrificing everyday speed and reliability. It offers a slim and lightweight chassis, a sharp display for comfortable long working sessions, and efficient thermal management for stable performance throughout the day. The system is well suited for productivity software, web applications, video meetings and light creative tasks. With fast boot times, smooth multitasking and dependable wireless connectivity, this laptop is ideal for frequent travelers and office users who require a compact device that can handle daily workloads consistently and comfortably.",
  brand: "Dell",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299882/7-15_bqwils.jpg"
  ],
  basePriceInPaise: 8899900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 64,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-14T10:22:11.000Z"),
  warrantyMonths: 24
},

{
  title: "Gaming Performance Laptop",
  slug: "gaming-performance-laptop",
  description: "This gaming performance laptop is built for demanding users who require powerful graphics, high refresh rate visuals and stable processing for modern games and heavy applications. It features an advanced cooling design that helps maintain consistent frame rates during extended gaming sessions. The laptop also performs well for content editing, 3D applications and streaming workflows. With responsive keyboard controls, immersive audio output and strong connectivity options, it delivers a balanced experience for both gaming and productivity, making it a reliable choice for users who expect sustained performance under continuous load.",
  brand: "ASUS",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770299997/71FUg8w-r7L._AC_UF894_1000_QL80__pdfabg.jpg"
  ],
  basePriceInPaise: 12499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 41,
  rating: 4.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-06T15:41:08.000Z"),
  warrantyMonths: 24
},

{
  title: "Student Everyday Laptop",
  slug: "student-everyday-laptop",
  description: "This student everyday laptop is designed to support online learning, assignments, research work and daily entertainment needs. It offers a comfortable keyboard, clear display and dependable performance for browsing, document editing and video conferencing. The device focuses on balanced hardware and efficient power usage to deliver stable performance throughout the academic day. With practical connectivity options and lightweight portability, it is well suited for school and college users who require a simple and reliable laptop for regular coursework and personal use without unnecessary complexity.",
  brand: "HP",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300084/f3633d08-647d-4659-9f5b-05c122bf2f73.__CR0_0_970_600_PT0_SX970_V1____oxnqbb.png"
  ],
  basePriceInPaise: 4799900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 93,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-28T09:12:44.000Z"),
  warrantyMonths: 12
},

{
  title: "Convertible Touch Laptop",
  slug: "convertible-touch-laptop",
  description: "This convertible touch laptop combines the flexibility of a tablet with the productivity of a full laptop. It supports multiple usage modes, making it suitable for presentations, note taking, media consumption and regular office work. The responsive touchscreen display and hinge mechanism allow smooth transitions between laptop and tablet orientations. With reliable processing power and optimized software performance, this device supports multitasking and collaboration workflows effectively. It is a practical solution for users who value versatility and interactive usage in their daily computing experience.",
  brand: "Lenovo",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300207/64d849a391df522441229ece-lenovo-flex-5-14-fhd-touchscreen_atovx9.jpg"
  ],
  basePriceInPaise: 6799900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 58,
  rating: 4.5,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-30T11:33:27.000Z"),
  warrantyMonths: 12
},

{
  title: "Mobile Workstation Laptop",
  slug: "mobile-workstation-laptop",
  description: "This mobile workstation laptop is designed for engineers, designers and professionals who require high processing power and reliable system stability for demanding applications. It supports heavy multitasking, complex software environments and large project workloads with consistent performance. The device emphasizes durability, professional-grade reliability and long operational life. With advanced thermal design and dependable connectivity options, this laptop serves as a powerful portable workstation for users who need to work efficiently across multiple locations without compromising on performance or long-term system reliability.",
  brand: "Lenovo",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300253/lenovo-laptop-thinkpad-p53-hero_tkzpwp.png"
  ],
  basePriceInPaise: 18999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 27,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-11-02T14:48:55.000Z"),
  warrantyMonths: 36
},

{
  title: "Business Productivity Laptop",
  slug: "business-productivity-laptop",
  description: "This business productivity laptop is built for professionals who require reliability, security and consistent performance for office and enterprise environments. It delivers smooth handling of productivity tools, video conferencing platforms and data management applications. The device focuses on stable software performance, secure system features and comfortable long-hour usage. With dependable build quality and efficient power management, it supports everyday corporate workflows and remote work scenarios. It is a practical choice for business users who prioritize stability and professional reliability in daily operations.",
  brand: "Dell",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300315/61dXC1-tdsL._AC_UF894_1000_QL80__ew9gwn.jpg"
  ],
  basePriceInPaise: 7999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 66,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-18T08:57:31.000Z"),
  warrantyMonths: 24
},

{
  title: "Content Creator Laptop",
  slug: "content-creator-laptop",
  description: "This content creator laptop is designed for photo editors, video producers and creative professionals who need reliable performance and color-accurate visuals. It supports creative software smoothly and handles high resolution media workflows efficiently. The display quality and processing performance make it suitable for editing, rendering and previewing creative projects. With optimized system stability and efficient hardware integration, this laptop provides a refined experience for professionals who demand both performance and consistency in creative production environments.",
  brand: "Apple",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300367/hero_endframe__e4ls9pihykya_xlarge_q8hqvc.jpg"
  ],
  basePriceInPaise: 15999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 34,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-11-11T12:15:09.000Z"),
  warrantyMonths: 12
},

{
  title: "Affordable Everyday Laptop",
  slug: "affordable-everyday-laptop",
  description: "This affordable everyday laptop is designed for users who need a dependable device for daily browsing, online classes and light office tasks. It offers stable performance for essential applications such as document editing, video playback and communication tools. The laptop focuses on usability, comfortable typing and simple system maintenance. With practical connectivity and efficient power usage, it provides a reliable entry-level computing experience for home users and students looking for a budget-friendly solution for routine digital activities.",
  brand: "Acer",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300415/51w45bzlj8L_xgichc.jpg"
  ],
  basePriceInPaise: 3899900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 108,
  rating: 4.2,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-16T07:26:18.000Z"),
  warrantyMonths: 12
},

{
  title: "Thin and Light Laptop",
  slug: "thin-and-light-laptop",
  description: "This thin and light laptop is designed for users who prioritize portability, comfort and clean design in everyday computing. It offers a compact body with a sharp display and responsive system performance suitable for office work, browsing and media consumption. The device focuses on efficient hardware integration and quiet operation for comfortable daily use. With long battery endurance and dependable connectivity, it is well suited for professionals and students who frequently move between workspaces and require a lightweight yet capable laptop.",
  brand: "LG",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300470/71SjVi8KwdL._AC_UF894_1000_QL80__f0wvpo.jpg"
  ],
  basePriceInPaise: 9999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 49,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-21T13:52:46.000Z"),
  warrantyMonths: 24
},

{
  title: "Rugged Business Laptop",
  slug: "rugged-business-laptop",
  description: "This rugged business laptop is built for field professionals and industrial environments where durability and reliability are critical. It features reinforced construction, resistance to shock and environmental stress, and dependable performance for operational software and communication tools. The device is suitable for on-site inspections, logistics operations and remote fieldwork. With extended hardware reliability and stable connectivity options, it supports demanding professional use cases where standard consumer laptops may not be sufficient for long-term operational requirements.",
  brand: "Panasonic",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300545/19__09142.1543111310_dccg1y.jpg"
  ],
  basePriceInPaise: 20999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 21,
  rating: 4.9,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-29T16:39:58.000Z"),
  warrantyMonths: 36
},

{
  title: "Chromebook Laptop",
  slug: "chromebook-laptop",
  description: "This Chromebook laptop is designed for cloud-based workflows, online learning and lightweight daily computing. It delivers fast startup, smooth web browsing and simple access to productivity and collaboration tools. The device focuses on security, quick system updates and minimal maintenance requirements. With reliable performance for streaming, document editing and communication platforms, it is well suited for students and remote users who depend on web applications and simple device management for everyday digital tasks.",
  brand: "Google",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300616/two_arrows_2_dahwo5.jpg"
  ],
  basePriceInPaise: 3299900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 97,
  rating: 4.1,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-09T06:14:02.000Z"),
  warrantyMonths: 12
},

{
  title: "AI Ready Laptop",
  slug: "ai-ready-laptop",
  description: "This AI ready laptop is designed for next generation applications, intelligent workflows and advanced productivity features. It supports modern software tools that benefit from on-device processing and optimized system acceleration. The laptop delivers fast multitasking performance, efficient power management and smooth user interaction for both professional and personal use. With strong hardware integration and future-focused architecture, it is suitable for users exploring AI-based tools, development environments and advanced productivity solutions in a reliable and scalable computing platform.",
  brand: "Microsoft",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - laptops object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770300681/097eb7a6-3208-415f-ab54-ee8a4ff45796_hwmmiv.jpg"
  ],
  basePriceInPaise: 11999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 44,
  rating: 4.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-11-17T09:28:36.000Z"),
  warrantyMonths: 24
}

];





export const electronics_audio_products = [

{
  title: "Wireless Earbuds Pro",
  slug: "wireless-earbuds-pro",
  description: "Immerse yourself in pure, uninterrupted sound with these premium wireless earbuds designed for everyday comfort and reliable performance. The earbuds deliver clear audio output with balanced bass and detailed mids, making them suitable for music, podcasts and voice calls. Active noise control helps reduce surrounding distractions while maintaining stable call quality for remote work and daily communication. The compact charging case supports extended listening time and convenient portability for travel and workouts. With a secure in-ear fit and intuitive touch controls, these earbuds offer a practical and refined wireless audio experience for regular users and commuters.",
  brand: "Apple",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
  ],
  basePriceInPaise: 1799900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 100,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-11T10:42:18.000Z"),
  warrantyMonths: 12
},

{
  title: "Portable Bluetooth Speaker",
  slug: "portable-bluetooth-speaker",
  description: "This portable Bluetooth speaker is designed to deliver clear and powerful sound in a compact and travel-friendly form. It provides strong bass response, balanced audio output and stable wireless connectivity for smooth streaming across smartphones and tablets. The rugged outer design supports everyday outdoor usage, making it suitable for small gatherings, travel and casual home listening. With a long-lasting battery and simple control buttons, this speaker offers reliable performance for music, podcasts and calls while maintaining convenient portability for daily use.",
  brand: "JBL",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
  ],
  basePriceInPaise: 799900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 100,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-25T09:17:41.000Z"),
  warrantyMonths: 12
},

{
  title: "Noise Cancelling Headphones",
  slug: "noise-cancelling-headphones",
  description: "These noise cancelling headphones are built for immersive listening and focused work environments by effectively reducing ambient sound and improving overall audio clarity. The over-ear design provides long-term comfort for extended listening sessions while delivering rich sound with clear vocals and controlled bass. They support stable wireless connectivity and consistent call quality for remote meetings and travel use. With dependable battery life and intuitive controls, these headphones offer a balanced solution for users seeking distraction-free listening, entertainment and productivity throughout the day.",
  brand: "Sony",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770354938/74739_original_local_1200x1050_v3_converted_sh9slr.webp"
  ],
  basePriceInPaise: 1999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 126,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-04T14:22:09.000Z"),
  warrantyMonths: 12
},

{
  title: "Sports Wireless Earbuds",
  slug: "sports-wireless-earbuds",
  description: "These sports wireless earbuds are designed for active users who need a secure fit and stable audio performance during workouts and outdoor activities. The lightweight in-ear design helps maintain comfort during long training sessions while delivering clear sound and consistent bass response. Sweat-resistant construction and dependable wireless connectivity support running, gym training and daily commuting. With practical touch controls and efficient power management, these earbuds provide a reliable audio solution for users who prioritise movement, durability and everyday listening convenience.",
  brand: "Jabra",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355001/Jabra-SPORT-Wireless-Earset_30fe55ba-d3f8-4222-ae4a-f181ae419df7.768185cc80e7bfc74ef8911a7e623b82_z2r3tq.jpg"
  ],
  basePriceInPaise: 999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 67,
  rating: 4.4,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-14T11:38:52.000Z"),
  warrantyMonths: 12
},

{
  title: "Compact Wireless Earbuds",
  slug: "compact-wireless-earbuds",
  description: "These compact wireless earbuds are designed for everyday listening with a lightweight and comfortable in-ear profile that fits easily into small pockets and travel cases. They deliver balanced sound quality with clear vocals and stable Bluetooth performance for uninterrupted music and calls. The simple charging case supports convenient daily use and reliable battery backup for commuting and casual listening. With easy pairing and intuitive controls, these earbuds provide a clean and practical wireless audio experience for users who value portability and simplicity.",
  brand: "Samsung",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355056/samsung-galaxy-buds-2-in-case_klawxn.jpg"
  ],
  basePriceInPaise: 899900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 123,
  rating: 4.3,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-19T08:55:27.000Z"),
  warrantyMonths: 12
},

{
  title: "Portable Party Bluetooth Speaker",
  slug: "portable-party-bluetooth-speaker",
  description: "This portable party Bluetooth speaker is designed for social gatherings and outdoor events, delivering loud and clear sound with enhanced bass output. The speaker supports stable wireless connectivity and simple pairing for quick music playback from smartphones and tablets. Its portable design and built-in handle make it easy to carry between locations. With dependable battery life and easy-to-use controls, this speaker is suitable for casual parties, small events and home entertainment setups where portable and reliable sound performance is essential.",
  brand: "boAt",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355108/Artboard12_0bfbf9ba-5110-4b7b-a0c1-e88b5f49b230_1800x_vuxykq.png"
  ],
  basePriceInPaise: 599900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 86,
  rating: 4.2,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-03T10:11:34.000Z"),
  warrantyMonths: 12
},

{
  title: "Premium Portable Bluetooth Speaker",
  slug: "premium-portable-bluetooth-speaker",
  description: "This premium portable Bluetooth speaker offers refined sound quality with deeper bass, clearer highs and improved overall audio balance for both indoor and outdoor listening. The compact and durable body supports everyday travel while maintaining strong acoustic performance for music and podcasts. It delivers stable wireless connectivity and consistent battery life for long listening sessions. Designed for users who want higher sound clarity and build quality, this speaker provides a dependable and premium portable audio experience.",
  brand: "JBL",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355144/61d1zD09NFL._AC_UF894_1000_QL80__cu1j1q.jpg"
  ],
  basePriceInPaise: 1299900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 54,
  rating: 4.5,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-09-07T12:46:59.000Z"),
  warrantyMonths: 12
},

{
  title: "Dolby Atmos Soundbar",
  slug: "dolby-atmos-soundbar",
  description: "This Dolby Atmos soundbar is designed to enhance television and home entertainment audio with immersive surround sound and clearer dialogue. It supports multi-channel audio processing to create a wider soundstage and more realistic cinematic effects. The compact and minimal design allows easy placement under modern televisions while maintaining powerful audio output. With stable wireless connectivity options and simple setup, this soundbar provides an improved home audio experience for movies, sports and streaming content.",
  brand: "Samsung",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355194/2022-Soundbar-MKT-F01-KV-01-PC_w8u0aa.jpg"
  ],
  basePriceInPaise: 3499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 79,
  rating: 4.7,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-12T15:27:18.000Z"),
  warrantyMonths: 24
},

{
  title: "Compact Soundbar",
  slug: "compact-soundbar",
  description: "This compact soundbar is built to improve everyday television audio with clearer vocals and balanced sound output in a space-saving design. It fits easily into small living rooms and bedroom setups while offering reliable wireless connectivity and simple control options. The soundbar enhances dialogue clarity for shows and news while delivering cleaner sound separation for movies and music. With easy installation and dependable performance, it is well suited for users seeking a simple audio upgrade without complex home theatre systems.",
  brand: "Sony",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355370/61hzHO3LT8L._AC_UF1000_1000_QL80__tsmcdk.jpg"
  ],
  basePriceInPaise: 1499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 122,
  rating: 4.4,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-08-31T09:05:43.000Z"),
  warrantyMonths: 12
},

{
  title: "Home Theatre System",
  slug: "home-theatre-system",
  description: "This home theatre system is designed to deliver a full surround sound experience for living room entertainment and dedicated media spaces. It produces powerful audio output with clear dialogue and immersive background effects for movies, sports and gaming. The system supports multiple audio input options and reliable wireless connectivity for modern home setups. With consistent performance and easy configuration, it provides a practical solution for users who want an enhanced cinematic experience without complex professional installation.",
  brand: "LG",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355417/IMG-20231204_102916_777_rkyz6y.jpg"
  ],
  basePriceInPaise: 2499900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 103,
  rating: 4.6,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-10-23T11:49:02.000Z"),
  warrantyMonths: 24
},

{
  title: "Premium Home Theatre System",
  slug: "premium-home-theatre-system",
  description: "This premium home theatre system is built for users who want a more immersive and powerful cinematic experience at home. It delivers enhanced surround sound, stronger bass output and improved audio separation for movies, music and gaming. The system is designed for stable performance and long-term reliability in dedicated entertainment rooms. With modern connectivity support and refined acoustic tuning, it offers a higher-end home audio solution for users who prioritise sound quality and immersive performance in their home setup.",
  brand: "Sony",
  category: "PUT Electronics category objectID here",
  subCategory: "PUT Electronics category - audio object ID here",
  images: [
    "https://res.cloudinary.com/dtrouncfb/image/upload/v1770355457/QaGo8SDumdNz8kvdsGrBxF_bjay8i.jpg"
  ],
  basePriceInPaise: 3999900,
  variants: [
    { color: "Standard" }
  ],
  totalStock: 74,
  rating: 4.8,
  numReviews: 0,
  isActive: true,
  createdAt: new Date("2025-11-05T13:21:56.000Z"),
  warrantyMonths: 24
}

];


export const electronics_smart_products = [
{
    "title": "Smart Fitness Watch",
    "slug": "smart-fitness-watch-1531",
    "description": "Meet your ultimate wellness companion, the Smart Fitness Watch. Engineered for a modern, active lifestyle, this sleek wearable is more than a timepiece; it's your personal health coach. It tracks daily activities like steps, calories, and distance with precision. The advanced heart rate monitor and integrated GPS help optimize your workouts, from running to yoga. Stay seamlessly connected with notifications for calls, texts, and apps right on your wrist. Control your music, check the weather, and analyze your sleep patterns for a more restful night. With a long-lasting battery, customizable faces, and a water-resistant design, it’s ready for any adventure.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 24999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Watch Series 5 597",
    "slug": "smart-watch-series-5-597-8791",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 500000,
    "variants": [],
    "totalStock": 120,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fitness Band 121",
    "slug": "fitness-band-121-5455",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 500500,
    "variants": [],
    "totalStock": 116,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Ring 17",
    "slug": "smart-ring-17-5318",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 501000,
    "variants": [],
    "totalStock": 118,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "VR Headset 89",
    "slug": "vr-headset-89-7493",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 501500,
    "variants": [],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Glasses 631",
    "slug": "smart-glasses-631-1577",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 502000,
    "variants": [],
    "totalStock": 95,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Watch Series 5 641",
    "slug": "smart-watch-series-5-641-833",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 502500,
    "variants": [],
    "totalStock": 98,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fitness Band 622",
    "slug": "fitness-band-622-9978",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 503000,
    "variants": [],
    "totalStock": 102,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Ring 451",
    "slug": "smart-ring-451-6423",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 503500,
    "variants": [],
    "totalStock": 60,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "VR Headset 246",
    "slug": "vr-headset-246-4404",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 504000,
    "variants": [],
    "totalStock": 64,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Glasses 42",
    "slug": "smart-glasses-42-5152",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 504500,
    "variants": [],
    "totalStock": 111,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Watch Series 5 892",
    "slug": "smart-watch-series-5-892-4425",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 505000,
    "variants": [],
    "totalStock": 82,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fitness Band 79",
    "slug": "fitness-band-79-5553",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 505500,
    "variants": [],
    "totalStock": 98,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Ring 44",
    "slug": "smart-ring-44-6237",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 506000,
    "variants": [],
    "totalStock": 59,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "VR Headset 762",
    "slug": "vr-headset-762-1074",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 506500,
    "variants": [],
    "totalStock": 131,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Glasses 959",
    "slug": "smart-glasses-959-509",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 507000,
    "variants": [],
    "totalStock": 137,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Watch Series 5 835",
    "slug": "smart-watch-series-5-835-5614",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 507500,
    "variants": [],
    "totalStock": 86,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fitness Band 285",
    "slug": "fitness-band-285-4756",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 508000,
    "variants": [],
    "totalStock": 105,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Ring 393",
    "slug": "smart-ring-393-5439",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 508500,
    "variants": [],
    "totalStock": 83,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "VR Headset 133",
    "slug": "vr-headset-133-6455",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 509000,
    "variants": [],
    "totalStock": 130,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Smart Glasses 206",
    "slug": "smart-glasses-206-3091",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - smart object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 509500,
    "variants": [],
    "totalStock": 121,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  }
]

export const electronics_accessories_products = [
{
    "title": "4K Webcam",
    "slug": "4k-webcam-4022",
    "description": "Elevate your video calls and content creation with our professional 4K Webcam. Delivering stunning, ultra-high-definition video, it captures every detail with exceptional clarity. The premium glass lens, intelligent autofocus, and automatic low-light correction ensure you look your best in any environment. Dual omni-directional microphones with noise-cancellation provide crystal-clear audio by filtering out background noise. With a wide 90-degree field of view, plug-and-play USB connectivity, and a versatile mounting clip, setup is effortless. An integrated privacy shutter gives you complete control and peace of mind. Make a lasting impression in every meeting and stream.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143706/4k-webcam-E8uStGVcj7MGvaxdhxiLyFdYaPgIwh_hexgty.jpg"
    ],
    "basePriceInPaise": 12999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "USB-C Hub",
    "slug": "usb-c-hub-4956",
    "description": "Unlock your device's full potential with our versatile USB-C Hub. This compact, all-in-one solution transforms a single USB-C port into a powerhouse of productivity. It features a 4K HDMI port for screen mirroring, multiple high-speed USB 3.0 ports for fast data transfer, and integrated SD/microSD card readers. The 100W Power Delivery port allows you to charge your laptop while using all other functions. Crafted from durable aluminum for excellent heat dissipation, its slim, lightweight design is perfect for on-the-go productivity. Plug-and-play functionality ensures instant use with a wide range of USB-C devices.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143863/usb-c-hub-kIWXrZ0JSjlIIic9AaQqPXB3pFFAzb_kwvaqu.jpg"
    ],
    "basePriceInPaise": 4999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Mechanical Keyboard",
    "slug": "mechanical-keyboard-6625",
    "description": "Elevate your typing and gaming with our premium Mechanical Keyboard. Engineered for performance and durability, it features high-quality mechanical switches for satisfying tactile feedback and precision. With full N-key rollover and anti-ghosting, every keystroke is registered, giving you a competitive edge. The customizable RGB backlighting offers over 16.8 million colors for an immersive setup. Built with a solid aluminum frame and wear-resistant PBT keycaps, this keyboard is made to last. The ergonomic design, including a detachable wrist rest, ensures comfort during long sessions. It's the ultimate tool for programmers, writers, and gamers seeking excellence.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 15999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Wireless Mouse",
    "slug": "wireless-mouse-6414",
    "description": "Experience freedom and precision with our high-performance Wireless Mouse. Designed for comfort and reliability, its advanced optical sensor provides smooth, accurate tracking with adjustable DPI for customized control. The ergonomic shape reduces hand strain, while silent-click buttons ensure a quiet, distraction-free environment. Enjoy a stable, lag-free connection with the 2.4GHz wireless technology and a plug-and-play nano receiver. Intelligent power-saving features extend battery life for months. Compatible with all major operating systems, this lightweight and portable mouse is the perfect accessory for a clutter-free and productive workspace, wherever you are.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143952/wireless-mouse-gaYSdYszQdxE3riM1dHTIR8Wg8mVLS_hdbdbk.jpg"
    ],
    "basePriceInPaise": 3999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Portable SSD 1TB",
    "slug": "portable-ssd-1tb-9156",
    "description": "Experience lightning-fast data transfer with our Portable SSD 1TB. This compact and powerful drive is the ultimate solution for professionals and content creators. With read/write speeds up to 1,050MB/s, you can transfer 4K videos and large files in seconds. The 1TB capacity provides ample space for your digital world. Its durable, shock-resistant design protects your data from drops, while AES 256-bit hardware encryption ensures security. Compatible with a wide range of devices, its palm-sized form factor makes it incredibly portable. Get the perfect blend of speed, durability, and security for your on-the-go storage needs.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 9999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Laptop Stand",
    "slug": "laptop-stand-6472",
    "description": "Improve your comfort and productivity with our ergonomic Laptop Stand. Designed to elevate your laptop to the perfect eye level, it reduces neck and back strain by promoting better posture. Crafted from sturdy, lightweight aluminum, its open design enhances airflow to prevent overheating. The adjustable height and angle settings allow you to create a customized workstation anywhere. Non-slip silicone pads keep your laptop secure and protect your surfaces. Compatible with a wide range of laptops, this stand folds flat for easy portability. It's an essential tool for a healthier and more efficient work environment.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/laptop-stand-UZwVML7JKLStw6NPbvydtfVzegEagp.jpg"
    ],
    "basePriceInPaise": 2999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Portable Charger 20000mAh",
    "slug": "portable-charger-20000mah-1807",
    "description": "Stay powered up on the go with our high-capacity 20000mAh Portable Charger. This reliable power bank can charge most smartphones multiple times, making it perfect for travel, long days, or emergencies. Equipped with multiple USB-A and USB-C ports, it supports fast charging for up to three devices simultaneously. The smart charging technology ensures safe and efficient power delivery, while the clear LED display shows the remaining battery life. Its slim, lightweight design and durable finish make it easy to carry. With a comprehensive multi-protection system, this portable charger is an essential accessory for modern life.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144093/portable-charger-20000mah-YNA4lKuklHzgOUpMny2vsky8HiA8cK_vtivcu.jpg"
    ],
    "basePriceInPaise": 3499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Wireless Charger",
    "slug": "wireless-charger-2367",
    "description": "Simplify your charging routine with our sleek and efficient Wireless Charger. This pad offers a convenient, cable-free way to power up your Qi-enabled devices. Just place your smartphone or earbuds on the pad for instant charging. It supports up to 15W fast wireless charging and features an intelligent system that protects against overheating and overcharging. The slim, minimalist design with a non-slip surface complements any space. It's case-friendly and universally compatible with all Qi-certified devices. Say goodbye to tangled cables and enjoy the ease of drop-and-go charging for your home or office.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144180/wireless-charger-cAhfJTX7WE8xIXDsj05hvZ2eOgrLG9_dtcqbm.jpg"
    ],
    "basePriceInPaise": 2499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "USB-C Cable 3-Pack",
    "slug": "usb-c-cable-3-pack-8849",
    "description": "Stay connected with our durable and versatile USB-C Cable 3-Pack. This pack includes three high-quality, braided nylon cables in varying lengths (3ft, 6ft, 10ft) to meet all your charging and data transfer needs. Built to last, they resist tangling and fraying. These cables support fast charging up to 60W and high-speed data transfer up to 480Mbps, perfect for smartphones, tablets, and laptops. The reversible USB-C connector ensures easy use every time. Compatible with a wide range of devices, this 3-pack offers exceptional value and convenience for home, office, or travel.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144217/usb-c-cable-3pack-sqWWYTQFRGFhRSCISUWoveSGBfBbXc_vxkuxd.jpg"
    ],
    "basePriceInPaise": 1999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Screen Protector Pack",
    "slug": "screen-protector-pack-8219",
    "description": "Protect your device's screen with our premium Screen Protector Pack. This pack includes multiple high-quality tempered glass protectors, offering superior defense against scratches, scuffs, and impacts. Crafted from 9H hardness tempered glass, it provides maximum durability while maintaining original screen brightness and clarity. The oleophobic coating repels fingerprints and smudges. With a precise, laser-cut design and an included alignment frame, installation is bubble-free and effortless. The ultra-thin profile ensures full touch sensitivity and case compatibility. Safeguard your investment and keep your screen looking flawless with this essential, cost-effective protection solution.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/screen-protector-pack-TkpNIqaZCLk7FtwlcwAqXbfDmwsvzY.jpg"
    ],
    "basePriceInPaise": 1499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Phone Case",
    "slug": "phone-case-1577",
    "description": "Safeguard your smartphone with our stylish and durable Phone Case. It offers the perfect balance of protection and aesthetics, crafted from a shock-absorbent TPU bumper and a scratch-resistant polycarbonate back. Raised bezels protect the screen and camera from scratches. The slim, lightweight design preserves your phone's sleek profile while providing a secure, non-slip grip. Precise cutouts ensure easy access to all ports and buttons. The crystal-clear, anti-yellowing back showcases your phone's original design. Compatible with wireless charging, this case offers robust protection without sacrificing convenience or style. Protect your investment with this essential accessory.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144286/phone-case-NvZDfGEWqmXg8F1RNsk29yCd0Qcrkd_qn5jvs.jpg"
    ],
    "basePriceInPaise": 1999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Tablet Stand",
    "slug": "tablet-stand-3514",
    "description": "Enhance your tablet experience with our versatile and sturdy Tablet Stand. It provides a comfortable, hands-free viewing experience, perfect for watching movies, video calls, or following recipes. The adjustable design helps you find the perfect angle, reducing neck strain and promoting better posture. Crafted from premium aluminum, it's both lightweight and durable. Non-slip silicone pads keep your device secure and scratch-free. Compatible with a wide range of tablets, its foldable design makes it compact and portable. This stand is an essential accessory for a more comfortable and productive digital life at home or on the go.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144330/tablet-stand-kO5tR2A8FeKj2pxRhaoa5sliOPz5m6_z8yvlx.jpg"
    ],
    "basePriceInPaise": 2299,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "HDMI Cable 2-Pack",
    "slug": "hdmi-cable-2-pack-2288",
    "description": "Ensure a high-quality, reliable connection for your home entertainment with our HDMI Cable 2-Pack. These premium, high-speed cables support 4K Ultra HD video at 60Hz and HDR, delivering stunning colors and incredible detail for movies, gaming, and streaming. They also support immersive audio formats like Dolby TrueHD. Built to last with a durable braided nylon jacket and gold-plated connectors, these cables resist fraying and corrosion. This convenient 2-pack allows you to connect multiple devices, such as Blu-ray players, gaming consoles, and laptops, to your TV or monitor. Enjoy a flawless entertainment experience.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144513/61JL7RYC18L._UF1000_1000_QL80__bfczs6.jpg"
    ],
    "basePriceInPaise": 1699,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Monitor Light Bar",
    "slug": "monitor-light-bar-1045",
    "description": "Transform your workspace and reduce eye strain with our innovative Monitor Light Bar. This sleek lighting solution mounts on top of your monitor, saving desk space and illuminating your workspace without causing screen glare. The asymmetrical design reduces eye fatigue during long hours of computer use. Customize your lighting with adjustable brightness and color temperature settings, from warm to cool, via simple touch controls. Powered by USB-C, it offers a clutter-free setup. The flicker-free LED lights provide natural, even illumination, improving your visual comfort and focus. It's an essential tool for a more productive work environment.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144732/Pura_Monitor_Light_Bar_7_1024x1024_jxsahq.jpg"
    ],
    "basePriceInPaise": 8999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Webcam Ring Light",
    "slug": "webcam-ring-light-5089",
    "description": "Achieve professional-quality lighting for your video calls and streams with our versatile Webcam Ring Light. This compact light clips directly onto your laptop, monitor, or smartphone, providing soft, even, and flattering illumination. Customize your look with adjustable brightness and three color modes (warm, cool, neutral) to match any environment. The diffused light eliminates harsh shadows and creates a beautiful catchlight in your eyes for a polished appearance. Powered by USB, its lightweight design makes it perfect for on-the-go use. It's an essential, affordable tool for a flawless on-camera presence.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/c_crop,w_1024,h_1024/v1761144801/RingLight18_01_gzj9zb.jpg"
    ],
    "basePriceInPaise": 3499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Desk Lamp",
    "slug": "desk-lamp-9526",
    "description": "Illuminate your workspace with our modern and elegant Desk Lamp. It provides optimal, adjustable lighting for reading, working, or studying. With a flexible arm and rotating head, you can direct light exactly where you need it. Customize your lighting with multiple brightness levels and color temperature modes using simple touch controls. The energy-efficient, flicker-free LED light reduces eye strain. This lamp also includes a convenient built-in USB charging port to keep your devices powered. Its sleek, minimalist design and sturdy base make it a stylish and functional addition to any home or office.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144903/executivetablelamp_b1j31a.jpg"
    ],
    "basePriceInPaise": 4499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Cable Organizer",
    "slug": "cable-organizer-2652",
    "description": "Tame the tangle of cables with our practical and stylish Cable Organizer. This compact organizer is the perfect solution for managing your charging cables, adapters, and earbuds at home or on the go. It features multiple elastic loops and mesh pockets to keep your accessories secure and easy to find. The durable, water-resistant exterior and padded interior protect your items from damage. Its slim, lightweight design fits easily into any bag, making it an essential travel companion. Say goodbye to cable clutter and hello to a more organized and efficient way of managing your electronics.",
    "brand": "SnapBuy Selection",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144970/realike-travel-cable-organizer-electronic-accessories-organizer-for-cord-hard-drive-earphone-power-bank-and-others-13469066461284_1024x1024_isxeox.jpg"
    ],
    "basePriceInPaise": 1299,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Brand",
        "value": "Generic"
      },
      {
        "key": "Model",
        "value": "2025 Edition"
      },
      {
        "key": "Warranty",
        "value": "1 Year"
      },
      {
        "key": "Origin",
        "value": "Imported"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Formal Blazer",
    "slug": "formal-blazer-2202",
    "description": "Elevate your professional and formal attire with our impeccably tailored Formal Blazer. This sophisticated piece is a cornerstone of any polished wardrobe, exuding confidence and timeless style. Crafted from a premium wool-blend fabric, it offers a luxurious feel and a structured silhouette. The classic single-breasted design features a two-button closure and notched lapels. Expertly tailored for a flattering, modern fit, its clean lines create a sharp look perfect for business meetings or formal events. This versatile blazer pairs well with trousers or dark-wash jeans, making it a timeless investment in refined taste.",
    "brand": "SnapBuy Selection",
    "category": "PUT Fashion category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/formal-blazer-EPJ8kUYTNiuDFfq0ayYQdfutrVSjsE.jpg"
    ],
    "basePriceInPaise": 14999,
    "variants": [
      {
        "size": "S",
        "color": "Standard",
        "priceInPaise": 14999,
        "stock": 25
      },
      {
        "size": "M",
        "color": "Standard",
        "priceInPaise": 14999,
        "stock": 25
      },
      {
        "size": "L",
        "color": "Standard",
        "priceInPaise": 14999,
        "stock": 25
      },
      {
        "size": "XL",
        "color": "Standard",
        "priceInPaise": 14999,
        "stock": 25
      }
    ],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true
  },
{
    "title": "Backpack",
    "slug": "backpack-8852",
    "description": "Carry your essentials in style and comfort with our versatile and durable Backpack. It's designed for students, professionals, and travelers, offering a perfect blend of functionality and modern design. Crafted from a high-quality, water-resistant material, it features a spacious main compartment, a padded laptop sleeve, and multiple pockets for organization. Ergonomic, padded shoulder straps and back panel provide exceptional comfort. The sleek, minimalist design is both stylish and professional, making it a great choice for any setting. With its durable construction and practical features, this backpack is ready for any adventure.",
    "brand": "SnapBuy Selection",
    "category": "PUT Fashion category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 7999,
    "variants": [
      {
        "size": "S",
        "color": "Standard",
        "priceInPaise": 7999,
        "stock": 25
      },
      {
        "size": "M",
        "color": "Standard",
        "priceInPaise": 7999,
        "stock": 25
      },
      {
        "size": "L",
        "color": "Standard",
        "priceInPaise": 7999,
        "stock": 25
      },
      {
        "size": "XL",
        "color": "Standard",
        "priceInPaise": 7999,
        "stock": 25
      }
    ],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true
  },
{
    "title": "Fast Charger 65W 282",
    "slug": "fast-charger-65w-282-9883",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 100000,
    "variants": [],
    "totalStock": 147,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "USB-C Hub 375",
    "slug": "usb-c-hub-375-4932",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 100500,
    "variants": [],
    "totalStock": 73,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Power Bank 20000mAh 806",
    "slug": "power-bank-20000mah-806-9133",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 101000,
    "variants": [],
    "totalStock": 121,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Phone Case Rugged 165",
    "slug": "phone-case-rugged-165-9711",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 101500,
    "variants": [],
    "totalStock": 133,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Screen Protector Glass 123",
    "slug": "screen-protector-glass-123-9311",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 102000,
    "variants": [],
    "totalStock": 130,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fast Charger 65W 299",
    "slug": "fast-charger-65w-299-5674",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 102500,
    "variants": [],
    "totalStock": 148,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "USB-C Hub 304",
    "slug": "usb-c-hub-304-7582",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 103000,
    "variants": [],
    "totalStock": 111,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Power Bank 20000mAh 270",
    "slug": "power-bank-20000mah-270-9177",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 103500,
    "variants": [],
    "totalStock": 119,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Phone Case Rugged 216",
    "slug": "phone-case-rugged-216-5498",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 104000,
    "variants": [],
    "totalStock": 64,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Screen Protector Glass 673",
    "slug": "screen-protector-glass-673-4285",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 104500,
    "variants": [],
    "totalStock": 72,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fast Charger 65W 194",
    "slug": "fast-charger-65w-194-8459",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 105000,
    "variants": [],
    "totalStock": 133,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "USB-C Hub 772",
    "slug": "usb-c-hub-772-7713",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 105500,
    "variants": [],
    "totalStock": 81,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Power Bank 20000mAh 631",
    "slug": "power-bank-20000mah-631-1611",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 106000,
    "variants": [],
    "totalStock": 137,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Phone Case Rugged 208",
    "slug": "phone-case-rugged-208-5974",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 106500,
    "variants": [],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Screen Protector Glass 75",
    "slug": "screen-protector-glass-75-5597",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 107000,
    "variants": [],
    "totalStock": 85,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Fast Charger 65W 418",
    "slug": "fast-charger-65w-418-8817",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 107500,
    "variants": [],
    "totalStock": 79,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "USB-C Hub 685",
    "slug": "usb-c-hub-685-6458",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 108000,
    "variants": [],
    "totalStock": 70,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Power Bank 20000mAh 587",
    "slug": "power-bank-20000mah-587-5826",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 108500,
    "variants": [],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Phone Case Rugged 990",
    "slug": "phone-case-rugged-990-1221",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 109000,
    "variants": [],
    "totalStock": 128,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  },
{
    "title": "Screen Protector Glass 276",
    "slug": "screen-protector-glass-276-1377",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Electronics category objectID here",
    "subCategory": "PUT Electronics category - accessories object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 109500,
    "variants": [],
    "totalStock": 79,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "specifications": [
      {
        "key": "Feature 1",
        "value": "High Performance"
      },
      {
        "key": "Feature 2",
        "value": "Energy Efficient"
      },
      {
        "key": "Connectivity",
        "value": "Wireless"
      },
      {
        "key": "Material",
        "value": "Premium"
      }
    ],
    "warrantyMonths": 12
  }
]

export const home_furniture_products = [
  {
    title: "Modern Open Bookshelf",
    slug: "modern-open-bookshelf",
    description:
      "Organize your books and display your favourite décor pieces with this modern open bookshelf designed for everyday homes and compact apartments. The structure is built using engineered wood panels with a stable back frame that improves load handling and reduces wobble during long-term use. The open shelf layout keeps the room visually light while offering enough space for books, storage baskets, indoor plants and decorative items. Its neutral finish blends well with both contemporary and traditional interiors, making it suitable for living rooms, bedrooms or home offices. The shelves are easy to clean and designed to retain their finish even with regular usage.",
    brand: "IKEA",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/bookshelf-4ztlDPHY4CHCdHqtMLfCzXRRaWLnEk.jpg"
    ],
    basePriceInPaise: 849900,
    totalStock: 94,
    rating: 4.3,
    numReviews: 128,
    isActive: true,
    createdAt: new Date("2024-09-14T10:22:41.000Z"),
    dimensions: { length: 80, width: 30, height: 180, unit: "cm" },
    weight: { value: 22, unit: "kg" }
  },

  {
    title: "Upholstered Dining Chair",
    slug: "upholstered-dining-chair",
    description:
      "Upgrade your dining space with this upholstered dining chair designed to provide everyday comfort without compromising on style. The padded seat and supportive backrest allow you to sit comfortably through long meals and conversations. The solid frame ensures dependable strength while maintaining a lightweight structure that can be moved easily around the dining area. Its neutral fabric finish works well with wooden, glass or metal dining tables, making it suitable for both modern and traditional interiors. The chair is finished to resist everyday scuffs and stains, helping it retain its appearance even with frequent use in family homes.",
    brand: "Godrej Interio",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/dining-chair-HoibG8V8xSAP4uQRXZWQWEvO4PHzbF.jpg"
    ],
    basePriceInPaise: 629900,
    totalStock: 88,
    rating: 4.1,
    numReviews: 96,
    isActive: true,
    createdAt: new Date("2024-10-05T14:36:18.000Z"),
    dimensions: { length: 45, width: 52, height: 90, unit: "cm" },
    weight: { value: 7.5, unit: "kg" }
  },

  {
    title: "Ergonomic Office Chair",
    slug: "ergonomic-office-chair",
    description:
      "Designed for long working hours, this ergonomic office chair provides proper posture support for your back, shoulders and neck during extended desk use. The breathable mesh back improves airflow and reduces heat buildup, while the adjustable height and tilt mechanism help you customise your seating position for better comfort. A padded seat with firm cushioning prevents fatigue and supports healthy sitting habits across daily office tasks. The sturdy base and smooth caster wheels allow effortless movement on most floor surfaces. This chair is well suited for home offices, study rooms and professional workspaces where comfort and reliability are equally important.",
    brand: "Green Soul",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356103/543050368-jupiter-superb-hb-black_58169cc6-27df-404e-b374-678c2c2168c8_ksjklh.png"
    ],
    basePriceInPaise: 1399900,
    totalStock: 72,
    rating: 4.6,
    numReviews: 214,
    isActive: true,
    createdAt: new Date("2024-11-19T09:18:33.000Z"),
    dimensions: { length: 60, width: 60, height: 120, unit: "cm" },
    weight: { value: 18, unit: "kg" }
  },

  {
    title: "Solid Wood Coffee Table",
    slug: "solid-wood-coffee-table",
    description:
      "This solid wood coffee table is designed to serve as a functional centrepiece for your living room while offering dependable durability for everyday use. The wide tabletop provides enough space for drinks, books, décor items and serving trays, making it suitable for both casual and entertaining settings. The sturdy wooden construction ensures long-term stability and resistance to daily wear. Its clean silhouette blends easily with modern, minimalist and classic interiors. Whether placed in front of a sofa or used in a reading corner, this table delivers a balanced combination of practicality and timeless design.",
    brand: "Urban Ladder",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356146/Solid-Wood-Three-Piece-Balcony-Outdoor-Leisure-Table-Chair-Set-One-Table-Two-Chair-Combination-for-Coffee-Dining-Home-Furniture_nznpgd.jpg"
    ],
    basePriceInPaise: 1249900,
    totalStock: 41,
    rating: 4.4,
    numReviews: 76,
    isActive: true,
    createdAt: new Date("2024-08-27T11:44:05.000Z"),
    dimensions: { length: 100, width: 60, height: 45, unit: "cm" },
    weight: { value: 21, unit: "kg" }
  },

  {
    title: "Three Seater Fabric Sofa",
    slug: "three-seater-fabric-sofa",
    description:
      "Built for everyday comfort and family use, this three seater fabric sofa offers a well-balanced seating experience with supportive cushioning and a spacious layout. The soft upholstery feels comfortable against the skin while remaining durable for long-term use. A solid internal frame provides dependable strength and prevents sagging over time. Its clean profile and neutral fabric tone make it easy to pair with different interior themes and colour palettes. Ideal for living rooms and shared spaces, this sofa is designed to support relaxed seating, casual lounging and daily entertainment without compromising comfort or durability.",
    brand: "Wakefit",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356197/WSFATVLLRNMN3LVGR_LS_1_n2dk75.jpg"
    ],
    basePriceInPaise: 2799900,
    totalStock: 23,
    rating: 4.7,
    numReviews: 189,
    isActive: true,
    createdAt: new Date("2024-12-03T16:07:52.000Z"),
    dimensions: { length: 195, width: 85, height: 85, unit: "cm" },
    weight: { value: 48, unit: "kg" }
  },

  {
    title: "Four Seater Dining Table",
    slug: "four-seater-dining-table",
    description:
      "This four seater dining table is designed to comfortably accommodate family meals and everyday dining needs. The broad tabletop provides adequate space for serving dishes, tableware and centrepieces, while the sturdy legs offer reliable support during daily use. Its durable construction helps maintain stability even with frequent movement of chairs and heavy cookware. The simple, balanced design allows it to blend naturally with a wide range of dining chairs and interior styles. Ideal for apartments and medium-sized dining areas, this table delivers dependable performance with a clean and timeless visual appeal.",
    brand: "Godrej Interio",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356237/azera-1_y7tlmq.jpg"
    ],
    basePriceInPaise: 2499900,
    totalStock: 29,
    rating: 4.6,
    numReviews: 121,
    isActive: true,
    createdAt: new Date("2024-09-30T13:11:44.000Z"),
    dimensions: { length: 120, width: 80, height: 75, unit: "cm" },
    weight: { value: 46, unit: "kg" }
  },

  {
    title: "Storage Cabinet With Doors",
    slug: "storage-cabinet-with-doors",
    description:
      "This storage cabinet with doors is designed to keep your home organised while maintaining a clean and clutter-free appearance. The internal shelves offer flexible storage for books, files, household items and daily essentials. The closed door design protects contents from dust and keeps the room visually tidy. Built using durable engineered panels, the structure remains stable even when fully loaded. Its compact footprint allows easy placement in living rooms, bedrooms or home offices. This cabinet is well suited for users who need practical storage without compromising the overall layout of the room.",
    brand: "IKEA",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356288/skruvby-cabinet-with-doors-white__1381151_pe961770_s5_bcpeba.jpg"
    ],
    basePriceInPaise: 1599900,
    totalStock: 36,
    rating: 4.4,
    numReviews: 102,
    isActive: true,
    createdAt: new Date("2024-10-18T08:49:27.000Z"),
    dimensions: { length: 70, width: 35, height: 120, unit: "cm" },
    weight: { value: 28, unit: "kg" }
  },

  {
    title: "TV Unit Stand",
    slug: "tv-unit-stand",
    description:
      "Designed to support modern entertainment setups, this TV unit stand offers ample surface space for televisions and media devices while providing organised storage below. Open shelves and closed compartments allow easy placement of gaming consoles, routers and accessories. The sturdy structure ensures stable support for large screens and everyday equipment. Its balanced proportions help maintain a neat appearance in the living room without occupying excessive floor space. The clean finish and functional layout make it suitable for both compact apartments and spacious family rooms where organised media storage is essential.",
    brand: "IKEA",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356345/s-l1200_sz3zw8.jpg"
    ],
    basePriceInPaise: 1799900,
    totalStock: 31,
    rating: 4.5,
    numReviews: 87,
    isActive: true,
    createdAt: new Date("2024-11-02T12:34:16.000Z"),
    dimensions: { length: 150, width: 40, height: 55, unit: "cm" },
    weight: { value: 32, unit: "kg" }
  },

  {
    title: "Bedside Table With Drawer",
    slug: "bedside-table-with-drawer",
    description:
      "This bedside table with drawer is designed to keep your everyday essentials within easy reach while maintaining a clean bedroom layout. The smooth tabletop provides space for lamps, books and mobile devices, while the drawer offers discreet storage for personal items. A compact structure allows easy placement beside most beds without crowding the room. The stable construction and well-finished surfaces help the unit retain its appearance with regular use. Suitable for modern and traditional bedrooms alike, this table combines practical storage with a simple and versatile design.",
    brand: "Pepperfry",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356387/Ingleside-Danish-inspired-1-Drawer-Nightstand-by-iNSPIRE-Q-Modern_vsk365.jpg"
    ],
    basePriceInPaise: 699900,
    totalStock: 58,
    rating: 4.2,
    numReviews: 65,
    isActive: true,
    createdAt: new Date("2024-08-21T15:52:08.000Z"),
    dimensions: { length: 40, width: 35, height: 50, unit: "cm" },
    weight: { value: 11, unit: "kg" }
  },

  {
    title: "Study Desk With Storage",
    slug: "study-desk-with-storage",
    description:
      "This study desk with storage is designed to support focused work, study and computer use in compact home environments. The wide tabletop provides enough space for laptops, books and writing accessories, while integrated shelves help organise documents and daily essentials. The structure is engineered for stability and comfortable legroom, allowing extended use without discomfort. Its simple design fits well into study rooms, bedrooms and home offices. This desk offers a practical solution for students and professionals who require an organised and efficient workspace at home.",
    brand: "Nilkamal",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356423/SCHOLAR-STUDY-DESK-WALNUT_FLSDSCHOLARSDWLT_02_btbnvx.jpg"
    ],
    basePriceInPaise: 999900,
    totalStock: 44,
    rating: 4.3,
    numReviews: 91,
    isActive: true,
    createdAt: new Date("2024-09-11T17:05:29.000Z"),
    dimensions: { length: 110, width: 55, height: 75, unit: "cm" },
    weight: { value: 24, unit: "kg" }
  },

  {
    title: "Shoe Rack Cabinet",
    slug: "shoe-rack-cabinet",
    description:
      "This shoe rack cabinet is designed to keep footwear neatly organised while maintaining a clean and clutter-free entryway or bedroom. Multiple internal compartments provide adequate space for everyday shoes, sandals and slippers. The closed cabinet structure helps protect footwear from dust and keeps the living area visually tidy. Built with durable panels and stable hinges, the unit offers dependable daily use for family households. Its compact footprint makes it easy to place near entrances or wardrobes without occupying excessive floor space.",
    brand: "Durian",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - furniture object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770356473/wood-shoe-cabinet-shoe-storage-organizer-with-2-flip-drawers-180054_hey1q0.jpg"
    ],
    basePriceInPaise: 1199900,
    totalStock: 39,
    rating: 4.4,
    numReviews: 73,
    isActive: true,
    createdAt: new Date("2024-10-09T09:27:54.000Z"),
    dimensions: { length: 80, width: 30, height: 95, unit: "cm" },
    weight: { value: 26, unit: "kg" }
  }
];


export const home_kitchen_products = [
  {
    title: "Blender",
    slug: "blender",
    description:
      "Unleash your culinary creativity with this powerful and versatile blender, ideal for smoothies, soups, sauces and nut butters. Its robust motor and stainless steel blades effortlessly crush ice and blend ingredients to a smooth consistency. The large-capacity, BPA-free pitcher makes it perfect for family-sized batches, while variable speed control and a pulse function give you complete control over texture. Designed for everyday use, the easy-to-clean components and self-cleaning feature make maintenance effortless. This blender is a reliable kitchen companion that helps you prepare delicious and healthy meals with ease.",
    brand: "Bajaj",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/blender-epIlNICv0ESTjq0KtLAoPpYkOdYiu8.jpg"
    ],
    basePriceInPaise: 499900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-10T11:25:37.000Z"),
    dimensions: { length: 25, width: 20, height: 35, unit: "cm" },
    weight: { value: 3.2, unit: "kg" }
  },
  {
    title: "Coffee Maker",
    slug: "coffee-maker",
    description:
      "Start your day right with a perfect cup of coffee from this reliable and easy-to-use coffee maker. Designed to brew aromatic coffee at the touch of a button, it features a programmable timer so you can wake up to freshly brewed coffee. The large 12-cup carafe is ideal for families or guests, while a brew-pause function lets you pour a cup mid-brew. The non-stick warming plate keeps coffee hot, and automatic shut-off provides peace of mind. With a sleek design and user-friendly controls, this coffee maker is a great addition to any kitchen.",
    brand: "Morphy Richards",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/coffee-maker-R1K2m4nrNJHrzXdgbqzbuBaE3cl8Nb.jpg"
    ],
    basePriceInPaise: 1099900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-24T08:14:22.000Z"),
    dimensions: { length: 30, width: 18, height: 28, unit: "cm" },
    weight: { value: 2.8, unit: "kg" }
  },
  {
    title: "Microwave Oven",
    slug: "microwave-oven",
    description:
      "Simplify your cooking and reheating with this modern and efficient microwave oven. Its spacious interior and turntable ensure even cooking for a variety of dishes. Intuitive digital controls and pre-programmed settings make it easy to prepare everything from popcorn to frozen dinners. The defrost function quickly thaws frozen foods, while the easy-to-clean interior keeps maintenance simple. With its sleek finish and reliable performance, this microwave oven is an essential appliance for busy families, students and professionals.",
    brand: "Samsung",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-microwave-oven-XafSbb8a2ibnyNoVhRZC0fDPQkpo15.png"
    ],
    basePriceInPaise: 629900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-15T13:42:01.000Z"),
    dimensions: { length: 48, width: 35, height: 30, unit: "cm" },
    weight: { value: 11.4, unit: "kg" }
  },
  {
    title: "Toaster",
    slug: "toaster",
    description:
      "Start your day with perfectly toasted bread and bagels using this classic and reliable toaster. Designed for consistent, even toasting with wide slots to accommodate various bread sizes, it allows you to customise browning levels with a variable control. Additional functions like cancel, defrost and reheat provide added convenience. The high-lift lever makes it easy to remove smaller items, while the removable crumb tray ensures quick cleanup. With its compact and stylish design, this toaster offers everyday functionality for breakfast routines.",
    brand: "Philips",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/toaster-VNFMTCna5zSa6SDmgQytLP6ml8yd1m.jpg"
    ],
    basePriceInPaise: 219900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-29T09:33:45.000Z"),
    dimensions: { length: 30, width: 17, height: 20, unit: "cm" },
    weight: { value: 2.0, unit: "kg" }
  },
  {
    title: "Electric Kettle",
    slug: "electric-kettle",
    description:
      "Boil water quickly and efficiently with this stylish and convenient electric kettle. Featuring a powerful heating element that brings water to a boil in minutes, it’s perfect for tea, coffee or instant meals. Automatic shut-off and boil-dry protection add peace of mind, while the cordless design and 360° swivel base make lifting and pouring effortless. A water level indicator and removable filter enhance convenience. With its sleek, modern design, this kettle is a dependable and affordable kitchen essential.",
    brand: "Bajaj",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/electric-kettle-fIq5HXwjrz6TkX5SH040d51e7KntOJ.png"
    ],
    basePriceInPaise: 179900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-02T07:54:28.000Z"),
    dimensions: { length: 22, width: 18, height: 24, unit: "cm" },
    weight: { value: 1.6, unit: "kg" }
  },
  {
    title: "Vacuum Cleaner",
    slug: "vacuum-cleaner",
    description:
      "Keep your home clean and fresh with this powerful and efficient vacuum cleaner. Designed to tackle dust, dirt and debris on carpets, hardwood floors and tiles, its cyclonic suction system ensures deep and thorough cleaning. The lightweight, maneuverable design makes it easy to reach under furniture and into corners, while the large-capacity dustbin is simple to empty. A set of attachments helps you clean upholstery, stairs and delicate surfaces. This vacuum cleaner is a reliable and affordable solution for everyday home cleaning needs.",
    brand: "Eureka Forbes",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/vacuum-cleaner-IKo5QHbtyX64j0TDE0dYJhohVUyPFv.jpg"
    ],
    basePriceInPaise: 1499900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-08T12:05:31.000Z"),
    dimensions: { length: 40, width: 30, height: 50, unit: "cm" },
    weight: { value: 6.5, unit: "kg" }
  },
  {
    title: "Mop and Bucket Set",
    slug: "mop-and-bucket-set",
    description:
      "Keep your floors sparkling clean with this convenient and effective mop and bucket set. Designed for efficient mopping, it features a high-quality mop with a super-absorbent, machine-washable microfiber head that lifts dirt, dust and spills with minimal effort. The specially designed bucket features a built-in wringer to easily control water content, ensuring your floors dry quickly and streak-free. Practical and affordable, this set is perfect for hardwood, tile or laminate floors and everyday home cleaning.",
    brand: "Vileda",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/mop-and-bucket-r3lHrcEWpIqfm75eFYqseLdbJdLZRE.jpg"
    ],
    basePriceInPaise: 119900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-20T10:33:59.000Z"),
    dimensions: { length: 50, width: 35, height: 60, unit: "cm" },
    weight: { value: 5.0, unit: "kg" }
  },
  {
    title: "Coffee Table",
    slug: "coffee-table",
    description:
      "Complete your living room with this modern and stylish coffee table crafted from high-quality, durable materials. The large tabletop offers ample space for drinks, snacks and décor, while the lower shelf provides convenient additional storage for books and magazines. Its sleek design complements a variety of décor styles, from contemporary to classic. This coffee table is the perfect way to add both functionality and aesthetic appeal to your living space, creating a more inviting and comfortable environment.",
    brand: "Urban Ladder",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-coffee-table-tut4uunLJgGXj1ksl1I5pRWOf2J5jT.png"
    ],
    basePriceInPaise: 299900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-15T08:47:16.000Z"),
    dimensions: { length: 100, width: 60, height: 45, unit: "cm" },
    weight: { value: 18.0, unit: "kg" }
  },

  {
    title: "Mixer Grinder",
    slug: "mixer-grinder",
    description:
      "This 750W mixer grinder is ideal for everyday kitchen use, blending, grinding and mixing ingredients for chutneys, spices and batter with ease. Its powerful motor ensures consistent performance, and the set includes multiple stainless steel jars for different purposes. Designed for stability and low vibration, it delivers reliable grinding results for Indian cooking tasks. The compact base and user-friendly controls make it a convenient choice for homes and kitchens of all sizes.",
    brand: "Philips",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357006/2_3f7ab6af-6f0d-4630-b60c-195e3f1c0360_u1pvqn.png"
    ],
    basePriceInPaise: 229900,
    variants: [{ color: "Standard" }],
    totalStock: 133,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-22T14:20:49.000Z"),
    dimensions: { length: 25, width: 20, height: 30, unit: "cm" },
    weight: { value: 4.5, unit: "kg" }
  },

  {
    title: "Induction Cooktop",
    slug: "induction-cooktop",
    description:
      "Prepare your favourite meals more efficiently with this induction cooktop featuring responsive touch controls and adjustable heat levels. The sleek ceramic surface allows quick cleanup and even heat distribution, making it suitable for cooking a wide range of dishes. Designed for modern kitchens, it offers multiple safety features like auto-shutoff and child lock. Its compact footprint fits well on countertops of all sizes, offering fast and energy-efficient cooking for everyday use.",
    brand: "Prestige",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357079/71M5XL6LbFL_n6rzcv.jpg"
    ],
    basePriceInPaise: 299900,
    variants: [{ color: "Standard" }],
    totalStock: 139,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-28T12:55:33.000Z"),
    dimensions: { length: 60, width: 35, height: 7, unit: "cm" },
    weight: { value: 7.0, unit: "kg" }
  },

  {
    title: "Digital Air Fryer",
    slug: "digital-air-fryer",
    description:
      "This digital air fryer allows you to enjoy healthier versions of your favourite fried foods with up to 80% less oil. Its intuitive digital display makes it easy to select temperature and cooking time, while the large cooking basket accommodates family meals. Rapid hot air circulation delivers even crispiness and consistent results every time. Designed for user convenience, the non-stick basket is dishwasher-safe, and cool-touch handles make it safe to use. Ideal for snacks, desserts and everyday cooking, this air fryer adds versatility to your kitchen appliances.",
    brand: "Philips",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357126/vrs_27c2449192f7c4b1240c6c185d5e758b753863b5_zvywcz.png"
    ],
    basePriceInPaise: 599900,
    variants: [{ color: "Standard" }],
    totalStock: 62,
    rating: 4.8,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-11-09T15:38:21.000Z"),
    dimensions: { length: 35, width: 30, height: 33, unit: "cm" },
    weight: { value: 8.2, unit: "kg" }
  },

  {
    title: "Sandwich Maker",
    slug: "sandwich-maker",
    description:
      "Make delicious snacks in minutes with this reliable sandwich maker featuring non-stick plates for even heating and easy cleaning. Its compact design allows storage in small kitchens, while large surface plates help accommodate multi-layer sandwiches. Indicator lights and simple controls ensure intuitive use, perfect for quick breakfasts or evening snacks. With sturdy build quality and safe operation features, this sandwich maker is a practical addition to your kitchen appliance collection.",
    brand: "Bajaj",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - kitchen object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357159/270105-1_ostnxl.jpg"
    ],
    basePriceInPaise: 259900,
    variants: [{ color: "Standard" }],
    totalStock: 71,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-12T10:49:57.000Z"),
    dimensions: { length: 29, width: 25, height: 15, unit: "cm" },
    weight: { value: 3.5, unit: "kg" }
  }
];


export const home_cookware_products = [

  {
    title: "Cookware Set",
    slug: "cookware-set",
    description:
      "Equip your kitchen with this comprehensive and high-quality cookware set that includes essential pots and pans for everyday cooking. Each piece is crafted from durable, heat-conductive material that ensures even heat distribution and consistent results every time you cook. The non-stick coating simplifies both cooking and cleanup, while tempered glass lids let you monitor your food without lifting them. Comfortable, stay-cool handles provide a secure grip and added safety. This versatile set is perfect for beginners and experienced cooks alike and is designed to handle a wide range of cooking tasks with ease.",
    brand: "Vinod",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/cookware-set-ugpyL0IK68PZTqjtE7hZvfBk12WMmg.jpg"
    ],
    basePriceInPaise: 499900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-07T10:22:00.000Z"),
    dimensions: { length: 40, width: 30, height: 35, unit: "cm" },
    weight: { value: 8, unit: "kg" }
  },

  {
    title: "Knife Set",
    slug: "knife-set",
    description:
      "Upgrade your culinary skills with this professional-quality knife set featuring essential knives for all food preparation needs. Each knife is forged from high-carbon stainless steel for a sharp, durable, and corrosion-resistant blade. The ergonomic, triple-riveted handles provide a comfortable, secure grip, helping you chop, slice and dice with control and confidence. This set includes a chef’s knife, bread knife, slicing knife, utility knife, paring knife and steak knives, all housed in a stylish wooden block that keeps your workspace organised. It's a must-have for anyone who loves cooking.",
    brand: "Victorinox",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/knife-set-yS7fJw5ilD9FMTQT4Gk3HlKBVD3m6Y.jpg"
    ],
    basePriceInPaise: 199900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-15T14:13:29.000Z"),
    dimensions: { length: 30, width: 15, height: 25, unit: "cm" },
    weight: { value: 4, unit: "kg" }
  },

  {
    title: "Cutting Board",
    slug: "cutting-board",
    description:
      "Prepare your meals with ease and style on this durable and versatile cutting board. Crafted from high-quality, non-porous material that is gentle on your knives and easy to clean, the generous size provides ample space for chopping vegetables, meats and fruits. A built-in juice groove helps keep your countertop clean, while non-slip feet offer a stable cutting surface. The reversible design allows separate boards for meats and vegetables, helping reduce cross-contamination. Practical and stylish, this cutting board is a kitchen essential for efficient food preparation.",
    brand: "Boos Block",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/cutting-board-YROhMrfOmieSuIkYZuoG3S2leovayf.jpg"
    ],
    basePriceInPaise: 60000,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-01T09:47:22.000Z"),
    dimensions: { length: 45, width: 30, height: 2, unit: "cm" },
    weight: { value: 2.5, unit: "kg" }
  },

  {
    title: "Dish Set",
    slug: "dish-set",
    description:
      "Set a beautiful table with this elegant and durable dish set that includes dinner plates, salad plates, bowls and mugs. Each piece is crafted from high-quality, chip-resistant porcelain or stoneware for a long-lasting design that withstands everyday use. The classic and timeless design is perfect for both casual dining and special occasions. Microwave and dishwasher-safe construction makes cleaning simple and convenient. Designed to elevate your dining experience, this dish set is ideal for family meals and gatherings.",
    brand: "Corelle",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/dish-set-efMZvCm21PpHXXJKATfzrJuYo6PgDL.jpg"
    ],
    basePriceInPaise: 499900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-28T08:58:15.000Z"),
    dimensions: { length: 35, width: 35, height: 20, unit: "cm" },
    weight: { value: 6, unit: "kg" }
  },

  {
    title: "Non-Stick Fry Pan",
    slug: "non-stick-fry-pan",
    description:
      "This non-stick fry pan is designed for everyday cooking with a high-quality non-stick coating that helps prevent food from sticking and makes cleanup effortless. The heat-distributing base ensures even cooking and consistent browning, while the ergonomic handle provides a comfortable, secure grip. Suitable for sautéing, frying and preparing omelettes, this pan is a versatile addition to any kitchen. Its durable construction ensures long-lasting performance, helping you cook with confidence every day.",
    brand: "Prestige",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357525/3629-36722-P-IMG1_ktdrr4.jpg"
    ],
    basePriceInPaise: 100000,
    variants: [{ color: "Standard" }],
    totalStock: 144,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-10T11:29:47.000Z"),
    dimensions: { length: 28, width: 28, height: 5, unit: "cm" },
    weight: { value: 1.8, unit: "kg" }
  },

  {
    title: "Pressure Cooker",
    slug: "pressure-cooker",
    description:
      "Cook delicious meals quickly and efficiently with this classic pressure cooker. Constructed from heavy-gauge stainless steel for long-lasting performance and consistent heat transfer, it features a secure locking lid and safety valves to help control pressure. The wide base allows for rapid cooking of stews, dals, curries and rice, making it ideal for everyday Indian cooking. Easy-to-clean surfaces and versatile usability deliver dependable performance for home cooks and families alike.",
    brand: "Hawkins",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357556/05c01d4d098b8a45dea824b9857eec9b_zuvphi.jpg"
    ],
    basePriceInPaise: 300000,
    variants: [{ color: "Standard" }],
    totalStock: 87,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-22T15:48:02.000Z"),
    dimensions: { length: 30, width: 30, height: 30, unit: "cm" },
    weight: { value: 4.2, unit: "kg" }
  },

  {
    title: "Stainless Steel Cookware Set",
    slug: "stainless-steel-cookware-set",
    description:
      "This stainless steel cookware set provides dependable performance for everyday use with multiple pots and pans crafted from premium stainless steel. Excellent heat distribution and corrosion resistance make this set suitable for a variety of cooking tasks, from boiling and simmering to frying and sautéing. Comfortable, heat-resistant handles ensure a secure grip, while sleek polished surfaces complement modern kitchen décor. The set pieces nest easily for compact storage and deliver consistent results for family meals and weekend feasts alike.",
    brand: "Vinod",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357586/Claro_Kadhai_5_Pcs_Set_kwxpkt.png"
    ],
    basePriceInPaise: 249900,
    variants: [{ color: "Standard" }],
    totalStock: 118,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-05T12:21:34.000Z"),
    dimensions: { length: 50, width: 40, height: 30, unit: "cm" },
    weight: { value: 12, unit: "kg" }
  },

  {
    title: "Cast Iron Pan",
    slug: "cast-iron-pan",
    description:
      "This cast iron skillet is a versatile kitchen essential that delivers exceptional heat retention and even cooking across stovetops and ovens. The seasoned surface improves with use, creating a naturally non-stick finish without synthetic coatings. Ideal for searing, frying and baking, it offers reliable performance for home cooks and professionals alike. Heavy-duty construction ensures long-lasting durability, while sturdy handles provide secure control when moving from stovetop to oven. Its rugged design makes it a timeless addition to any cookware collection.",
    brand: "Lodge",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357651/8319-DEFAULT-l_lyprnu.jpg"
    ],
    basePriceInPaise: 119900,
    variants: [{ color: "Standard" }],
    totalStock: 87,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-11-01T09:53:19.000Z"),
    dimensions: { length: 30, width: 30, height: 6, unit: "cm" },
    weight: { value: 5.5, unit: "kg" }
  },

  {
    title: "Professional Knife Set",
    slug: "professional-knife-set",
    description:
      "This professional knife set features premium blades forged from high-carbon stainless steel that deliver unmatched sharpness and edge retention for demanding kitchen tasks. Each knife is ergonomically balanced for comfortable handling and precise cuts. The set includes chef’s knives, utility knives and paring knives suitable for both everyday food preparation and culinary art. A stylish block keeps the set organised and within easy reach, making it perfect for serious home cooks and aspiring chefs alike.",
    brand: "Victorinox",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357689/VT5-1150-11_04_victorinox-wood_ckvdjq.jpg"
    ],
    basePriceInPaise: 100000,
    variants: [{ color: "Standard" }],
    totalStock: 96,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-30T11:07:44.000Z"),
    dimensions: { length: 38, width: 18, height: 28, unit: "cm" },
    weight: { value: 5.6, unit: "kg" }
  },

  {
    title: "Saucepan With Lid",
    slug: "saucepan-with-lid",
    description:
      "This saucepan with lid is a versatile kitchen essential perfect for boiling, simmering and making sauces. Crafted from premium stainless steel with an even-heat base, it provides reliable performance for daily cooking. The fitted lid traps heat and moisture, helping preserve flavours and reduce splatter. A comfortable handle and secure grip make it easy to move from stove to countertop. Its compact design is ideal for small to medium meals, making it a practical addition to every kitchen.",
    brand: "Prestige",
    category: "PUT Home & Kitchen category objectID here",
    subCategory: "PUT Home & Kitchen category - cookware object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770357747/m73665146228_1_fxqcia.jpg"
    ],
    basePriceInPaise: 179900,
    variants: [{ color: "Standard" }],
    totalStock: 82,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-18T13:28:16.000Z"),
    dimensions: { length: 22, width: 22, height: 14, unit: "cm" },
    weight: { value: 2.1, unit: "kg" }
  }

];


export const home_decor_products = [
{
    "title": "Lamp",
    "slug": "lamp-8699",
    "description": "Illuminate your space with our stylish and versatile Lamp. Designed to provide both functional and ambient lighting, it's a perfect addition to any room. The classic design and neutral color complement a variety of decor styles. It features a sturdy base and a fabric shade that diffuses the light to create a warm, inviting glow. The convenient on/off switch is located on the cord. This lamp is the perfect choice for a living room, bedroom, or office, adding a touch of style and warmth to any space. It's a practical and stylish investment in your home's comfort.",
    "brand": "SnapBuy Selection",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/mop-and-bucket-r3lHrcEWpIqfm75eFYqseLdbJdLZRE.jpg"
    ],
    "basePriceInPaise": 4499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    },
    "weight": {
      "value": 1,
      "unit": "kg"
    }
  },
{
    "title": "Wall Clock",
    "slug": "wall-clock-8609",
    "description": "Keep track of time in style with our modern and minimalist Wall Clock. It's designed to be a functional and stylish addition to any room. The simple, clean design features a large, easy-to-read face with bold numbers and hands. The silent, non-ticking movement ensures a quiet and peaceful environment. Crafted from high-quality materials, its sleek, modern design complements a variety of decor styles. This wall clock is the perfect choice for a kitchen, living room, or office, adding a touch of style and functionality to any space.",
    "brand": "SnapBuy Selection",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/modern-wall-clock-CFKjjDwR11Q6QfpkP8yegZatLDQyuo.png"
    ],
    "basePriceInPaise": 2499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    },
    "weight": {
      "value": 1,
      "unit": "kg"
    }
  },
{
    "title": "Throw Pillow",
    "slug": "throw-pillow-5853",
    "description": "Add a touch of comfort and style to your living space with our cozy and decorative Throw Pillow. It's the perfect accent for your sofa, bed, or armchair. Crafted from a soft, durable fabric and filled with a plush polyester fill, it features a stylish, modern design with a variety of colors and patterns to choose from. The removable cover with a hidden zipper makes it easy to clean. This throw pillow is a simple and affordable way to add a pop of color, texture, and personality to any room, creating a more inviting space.",
    "brand": "SnapBuy Selection",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/throw-pillow-qinXsUenOpylnYsRgT14LgLLvNXt18.jpg"
    ],
    "basePriceInPaise": 2999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    },
    "weight": {
      "value": 1,
      "unit": "kg"
    }
  },
{
    "title": "Curtains",
    "slug": "curtains-951",
    "description": "Enhance your privacy and control the light in your room with our stylish and functional Curtains. They are a beautiful and practical addition to any room. Crafted from high-quality, light-filtering or blackout fabric, they can either gently diffuse light or completely block it out. The curtains feature a classic rod-pocket or grommet top design for easy hanging. The set includes two panels for full coverage. Available in a variety of colors and patterns, these machine-washable curtains are a simple and affordable way to add style and privacy to your home.",
    "brand": "SnapBuy Selection",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/curtains-2rb3BtpxXKy65nSmBQkjXwX8d2lyNC.jpg"
    ],
    "basePriceInPaise": 5999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    },
    "weight": {
      "value": 1,
      "unit": "kg"
    }
  },
{
    "title": "Rug",
    "slug": "rug-7809",
    "description": "Add warmth, comfort, and style to your living space with our beautiful and durable Rug. It's the perfect centerpiece for any room. Crafted from a high-quality, soft, and durable material, it's both comfortable underfoot and easy to clean. The rug features a stylish, modern design with a variety of colors and patterns to choose from. A non-slip backing keeps it in place, reducing the risk of slips. Available in various sizes, this rug is a simple and affordable way to update your decor and create a more inviting and comfortable space.",
    "brand": "SnapBuy Selection",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/rug-5QZK6fVN4tD3y6qiqRqs0jBfZXSXry.jpg"
    ],
    "basePriceInPaise": 7999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    },
    "weight": {
      "value": 1,
      "unit": "kg"
    }
  },
{
    "title": "Wall Clock Vintage 504",
    "slug": "wall-clock-vintage-504-639",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 150000,
    "variants": [],
    "totalStock": 135,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Table Lamp LED 0",
    "slug": "table-lamp-led-0-1656",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 150500,
    "variants": [],
    "totalStock": 114,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Decorative Vase 789",
    "slug": "decorative-vase-789-1750",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 151000,
    "variants": [],
    "totalStock": 67,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Floor Rug Persian 50",
    "slug": "floor-rug-persian-50-7766",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 151500,
    "variants": [],
    "totalStock": 137,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Throw Pillows Set 532",
    "slug": "throw-pillows-set-532-613",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 152000,
    "variants": [],
    "totalStock": 122,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Wall Clock Vintage 235",
    "slug": "wall-clock-vintage-235-8815",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 152500,
    "variants": [],
    "totalStock": 81,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Table Lamp LED 795",
    "slug": "table-lamp-led-795-9013",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 153000,
    "variants": [],
    "totalStock": 142,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Decorative Vase 716",
    "slug": "decorative-vase-716-5295",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 153500,
    "variants": [],
    "totalStock": 112,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Floor Rug Persian 961",
    "slug": "floor-rug-persian-961-7748",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 154000,
    "variants": [],
    "totalStock": 147,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Throw Pillows Set 351",
    "slug": "throw-pillows-set-351-695",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 154500,
    "variants": [],
    "totalStock": 104,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Wall Clock Vintage 368",
    "slug": "wall-clock-vintage-368-481",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 155000,
    "variants": [],
    "totalStock": 61,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Table Lamp LED 345",
    "slug": "table-lamp-led-345-4846",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 155500,
    "variants": [],
    "totalStock": 104,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Decorative Vase 600",
    "slug": "decorative-vase-600-7647",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 156000,
    "variants": [],
    "totalStock": 139,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Floor Rug Persian 178",
    "slug": "floor-rug-persian-178-1220",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 156500,
    "variants": [],
    "totalStock": 94,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Throw Pillows Set 998",
    "slug": "throw-pillows-set-998-9225",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 157000,
    "variants": [],
    "totalStock": 73,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Wall Clock Vintage 902",
    "slug": "wall-clock-vintage-902-5354",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 157500,
    "variants": [],
    "totalStock": 103,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Table Lamp LED 793",
    "slug": "table-lamp-led-793-1070",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 158000,
    "variants": [],
    "totalStock": 145,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Decorative Vase 625",
    "slug": "decorative-vase-625-6471",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 158500,
    "variants": [],
    "totalStock": 93,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Floor Rug Persian 332",
    "slug": "floor-rug-persian-332-2574",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 159000,
    "variants": [],
    "totalStock": 109,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Throw Pillows Set 636",
    "slug": "throw-pillows-set-636-6522",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - decor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 159500,
    "variants": [],
    "totalStock": 136,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  }
]

export const home_storage_products = [
{
    "title": "Storage Containers",
    "slug": "storage-containers-8902",
    "description": "Keep your kitchen organized and your food fresh with our versatile and practical Storage Containers. This set includes a variety of sizes, perfect for storing leftovers, snacks, and pantry staples. Each container is crafted from durable, BPA-free plastic. The airtight, leak-proof lids keep food fresh and prevent spills. The clear design allows you to easily see what's inside. These containers are stackable and nestable for easy storage, and they are microwave, freezer, and dishwasher-safe for ultimate convenience. It's a practical and affordable solution for a more organized kitchen.",
    "brand": "SnapBuy Selection",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/storage-containers-ZaID6QrLug4FlyR6bc3B0nYFjK8j94.jpg"
    ],
    "basePriceInPaise": 3999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 10,
      "width": 10,
      "height": 10,
      "unit": "cm"
    },
    "weight": {
      "value": 1,
      "unit": "kg"
    }
  },
{
    "title": "Plastic Container Set 376",
    "slug": "plastic-container-set-376-994",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 120000,
    "variants": [],
    "totalStock": 112,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Laundry Basket 121",
    "slug": "laundry-basket-121-3685",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 120500,
    "variants": [],
    "totalStock": 144,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Shoe Rack Organizer 729",
    "slug": "shoe-rack-organizer-729-9081",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 121000,
    "variants": [],
    "totalStock": 98,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Vacuum Storage Bags 268",
    "slug": "vacuum-storage-bags-268-6088",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 121500,
    "variants": [],
    "totalStock": 75,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Kitchen Rack Steel 968",
    "slug": "kitchen-rack-steel-968-97",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 122000,
    "variants": [],
    "totalStock": 126,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Plastic Container Set 2",
    "slug": "plastic-container-set-2-5275",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 122500,
    "variants": [],
    "totalStock": 69,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Laundry Basket 98",
    "slug": "laundry-basket-98-7924",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 123000,
    "variants": [],
    "totalStock": 132,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Shoe Rack Organizer 162",
    "slug": "shoe-rack-organizer-162-8386",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 123500,
    "variants": [],
    "totalStock": 126,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Vacuum Storage Bags 875",
    "slug": "vacuum-storage-bags-875-2768",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 124000,
    "variants": [],
    "totalStock": 146,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Kitchen Rack Steel 999",
    "slug": "kitchen-rack-steel-999-3518",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 124500,
    "variants": [],
    "totalStock": 82,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Plastic Container Set 34",
    "slug": "plastic-container-set-34-1807",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 125000,
    "variants": [],
    "totalStock": 138,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Laundry Basket 763",
    "slug": "laundry-basket-763-1250",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 125500,
    "variants": [],
    "totalStock": 127,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Shoe Rack Organizer 380",
    "slug": "shoe-rack-organizer-380-526",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 126000,
    "variants": [],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Vacuum Storage Bags 816",
    "slug": "vacuum-storage-bags-816-8951",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 126500,
    "variants": [],
    "totalStock": 139,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Kitchen Rack Steel 644",
    "slug": "kitchen-rack-steel-644-2791",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 127000,
    "variants": [],
    "totalStock": 95,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Plastic Container Set 425",
    "slug": "plastic-container-set-425-5811",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 127500,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Laundry Basket 841",
    "slug": "laundry-basket-841-5631",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 128000,
    "variants": [],
    "totalStock": 126,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Shoe Rack Organizer 260",
    "slug": "shoe-rack-organizer-260-6832",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 128500,
    "variants": [],
    "totalStock": 146,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Vacuum Storage Bags 359",
    "slug": "vacuum-storage-bags-359-4588",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 129000,
    "variants": [],
    "totalStock": 114,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  },
{
    "title": "Kitchen Rack Steel 255",
    "slug": "kitchen-rack-steel-255-8242",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Home & Kitchen category objectID here",
    "subCategory": "PUT Home & Kitchen category - storage object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 129500,
    "variants": [],
    "totalStock": 138,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 15,
      "width": 15,
      "height": 15,
      "unit": "cm"
    },
    "weight": {
      "value": 1.5,
      "unit": "kg"
    }
  }
]

export const beauty_skincare_products = [
  {
    title: "Moisturizer",
    slug: "moisturizer",
    description:
      "Hydrate and nourish your skin with this luxurious and effective moisturizer. Formulated with high-quality, natural ingredients, it delivers long-lasting hydration while improving skin texture and resilience. Its lightweight, non-greasy formula absorbs quickly, leaving skin soft, smooth, and supple. Enriched with hyaluronic acid and Vitamin E, this daily-use moisturizer helps plump skin, reduce the appearance of fine lines, and protect against environmental damage. Designed for all skin types, it creates a perfect base for makeup while locking in moisture throughout the day.",
    brand: "Clinique",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://dr.rashel.in/cdn/shop/files/Hyaluronicacidmoisturizercream_1024x1024.jpg?v=1712218398"
    ],
    basePriceInPaise: 60000,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-7197",
    createdAt: new Date("2025-09-15T10:45:21.000Z")
  },
  {
    title: "Sunscreen SPF 50",
    slug: "sunscreen-spf-50",
    description:
      "Protect your skin from harmful UVA and UVB rays with this high-performance SPF 50 sunscreen. Featuring a lightweight and non-greasy formula that absorbs quickly and leaves no white cast, it's ideal for everyday use. Enriched with antioxidants, it helps defend against environmental stressors while preventing sunburn and premature aging. Water-resistant for up to 80 minutes, this sunscreen is suitable for all skin types, including sensitive skin. Enjoy the outdoors confidently knowing your skin is well shielded from sun damage.",
    brand: "Neutrogena",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://www.newu.in/cdn/shop/files/1_e220deed-7886-4b7f-ad8f-2fb41a469824_1024x1024.jpg?v=1737721311"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-5003",
    createdAt: new Date("2025-09-18T12:15:09.000Z")
  },
  {
    title: "Face Mask",
    slug: "face-mask",
    description:
      "Treat your skin to a spa-like experience with this luxurious face mask formulated with natural detoxifying and hydrating ingredients. This creamy and cooling mask helps draw out impurities, unclog pores and soothe the skin. Enriched with clay and botanical extracts, it nourishes and revitalizes dull or tired skin. Suitable for all skin types, this mask leaves your skin feeling softer, smoother, and more radiant with each use. It's perfect for weekly pampering and achieving a healthy, glowing complexion right at home.",
    brand: "The Body Shop",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770369913/charcoal-pore_720x_fszihs.jpg"
    ],
    basePriceInPaise: 30000,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-9182",
    createdAt: new Date("2025-09-20T11:05:42.000Z")
  },
  {
    title: "Body Lotion",
    slug: "body-lotion",
    description:
      "Hydrate and nourish your skin with this rich and creamy body lotion formulated with natural moisturizers like shea butter and Vitamin E. Its non-greasy texture absorbs quickly, leaving skin soft, smooth, and supple without feeling heavy. Suitable for all skin types, this gentle daily lotion improves skin texture and tone while providing long-lasting hydration. A light, refreshing scent adds a touch of freshness to your skincare routine, making it ideal for everyday pampering and skin comfort.",
    brand: "Aveeno",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIvH9WskCdy_Ya96TJnv-SkhpCefGiYjzKA&s"
    ],
    basePriceInPaise: 42000,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-1433",
    createdAt: new Date("2025-09-17T09:42:55.000Z")
  },
  {
    title: "Hair Serum",
    slug: "hair-serum",
    description:
      "Tame frizz, add shine, and protect your hair with this lightweight and nourishing hair serum. Formulated with natural oils and silicones, it smooths the hair cuticle, reduces frizz, and adds a healthy shine without weighing hair down. Suitable for all hair types, this serum can be used on damp or dry hair to tame flyaways, enhance shine, and provide heat protection. A simple yet effective finishing touch for any hairstyle, this serum helps you achieve smooth, glossy, and healthy-looking hair every day.",
    brand: "L'Oréal Paris",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://trichocarepharma.com/wp-content/uploads/2024/07/Artboard-1-copy-6-1024x1024.webp"
    ],
    basePriceInPaise: 79900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-8963",
    createdAt: new Date("2025-09-16T14:32:01.000Z")
  },
  {
    title: "Face Cleanser",
    slug: "face-cleanser",
    description:
      "Cleanse and refresh your skin with this gentle and effective face cleanser formulated to remove dirt, oil, and makeup without stripping your skin of essential moisture. Its sulfate- and paraben-free formula is suitable for all skin types, including sensitive skin, and is enriched with soothing botanical extracts that help calm irritation. With regular use, you'll notice improved skin clarity and texture, making this cleanser an essential first step in your skincare routine for healthy, radiant skin.",
    brand: "Cetaphil",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://www.fixderma.com/cdn/shop/files/mandefix_foaming_face_wash_50ml.webp?v=1756383750"
    ],
    basePriceInPaise: 35900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-1332",
    createdAt: new Date("2025-09-14T08:27:16.000Z")
  },
  {
    title: "Exfoliator",
    slug: "exfoliator",
    description:
      "Reveal a brighter, smoother complexion with this gentle and effective exfoliator. Formulated with natural exfoliating particles, it gently removes dead skin cells and unclogs pores without harsh abrasion. Enriched with botanical extracts that soothe and nourish the skin, it helps improve texture and clarity with regular use. Suitable for all skin types, including sensitive skin, this exfoliator supports a more radiant and even-toned complexion. Incorporate it into your weekly skincare routine for smoother, healthier-looking skin.",
    brand: "St. Ives",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://mantleskin.com/cdn/shop/files/Mantle_TheEx_1024x1024.jpg?v=1754895116"
    ],
    basePriceInPaise: 39900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-471",
    createdAt: new Date("2025-09-19T11:16:54.000Z")
  },
  {
    title: "Vitamin C Serum",
    slug: "vitamin-c-serum",
    description:
      "Brighten and rejuvenate your skin with this potent Vitamin C serum formulated to enhance radiance and even skin tone. Enriched with stabilized Vitamin C and antioxidants, it helps fade dark spots, reduce dullness, and protect against environmental aggressors. The lightweight serum absorbs quickly and layers seamlessly with other skincare products. Suitable for all skin types, this serum is an excellent addition to your daily skincare regimen for a more radiant and youthful complexion.",
    brand: "Minimalist",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770369068/VitaminC10_1200-1-min_yfce7c.png"
    ],
    basePriceInPaise: 51900,
    variants: [{ color: "Standard" }],
    totalStock: 127,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-06-30T00:00:00.000Z",
    batchNumber: "GEN-3905",
    createdAt: new Date("2025-09-23T10:55:38.000Z")
  },
  {
    title: "Night Repair Cream",
    slug: "night-repair-cream",
    description:
      "Restore and rejuvenate skin overnight with this advanced night repair cream. Enriched with anti-aging peptides, hyaluronic acid and nourishing emollients, it helps reduce the appearance of fine lines and improve skin elasticity while you sleep. The luxurious, non-greasy texture absorbs deeply to hydrate, soothe, and regenerate skin, leaving it firmer and more radiant by morning. Suitable for all skin types, this night cream enhances your nightly skincare routine and supports skin renewal as you rest.",
    brand: "Olay",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - skincare object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770369103/Olay_Regenerist_Night_Recovery_Cream_FF_CE__78420.1708630452.386.513_sqxzrq.jpg"
    ],
    basePriceInPaise: 46900,
    variants: [{ color: "Standard" }],
    totalStock: 131,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-06-30T00:00:00.000Z",
    batchNumber: "GEN-4321",
    createdAt: new Date("2025-09-24T09:43:15.000Z")
  }
];


export const beauty_makeup_products = [

  {
    title: "Lipstick",
    slug: "lipstick",
    description:
      "Add a pop of color to your look with this vibrant and long-lasting lipstick that delivers rich, beautiful pigments and a comfortable, hydrating feel. Formulated with high-quality colourants and moisturizing ingredients, it glides on smoothly for full coverage in a single swipe. Available in a curated range of classic and contemporary shades, this lipstick enhances your makeup look with a stunning finish. Designed to resist feathering and fading, it stays vibrant throughout the day, making it perfect for both everyday wear and special occasions. Express your personal style with confidence and flair.",
    brand: "Maybelline",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://www.lagirlusa.com/cdn/shop/products/GLC581_prod_img_1024x1024.jpg?v=1699773955"
    ],
    basePriceInPaise: 34900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-5655",
    createdAt: new Date("2025-10-05T11:24:09.000Z")
  },

  {
    title: "Foundation",
    slug: "foundation",
    description:
      "Create a flawless, natural-looking canvas for your makeup with this lightweight and buildable foundation. Its medium-to-full coverage evens out skin tone while concealing imperfections without caking or creasing. The oil-free formula blends seamlessly into the skin for a smooth, radiant finish and is available in a wide range of shades to suit diverse complexions. Designed to last all day, this foundation is enriched with skin-loving ingredients that nourish and protect your skin, making it suitable for all skin types including sensitive skin.",
    brand: "Faces Canada",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://www.facescanada.com/cdn/shop/products/UltimeProHDRunwayReadyFoundation_PDP_Ivory_1024x1024.jpg?v=1646397623"
    ],
    basePriceInPaise: 39900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-4065",
    createdAt: new Date("2025-09-24T09:17:04.000Z")
  },

  {
    title: "Eye Shadow Palette",
    slug: "eye-shadow-palette",
    description:
      "Create stunning eye looks with this highly-pigmented eye shadow palette featuring a curated collection of complementary shades in matte, satin, shimmer and metallic finishes. The smooth, blendable formula is easy to apply and delivers rich, long-lasting color that effortlessly transitions from day to night. With multiple colour stories to choose from, you can experiment with natural, bold, or dramatic styles. The compact, travel-friendly packaging makes it perfect for makeup lovers on the go.",
    brand: "HOK Makeup",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://hokmakeup.com/cdn/shop/files/G43312_prod_img_1024x1024_ab08b91c-7fd8-4b4b-9271-5253ce8d112e.jpg?v=1757405008"
    ],
    basePriceInPaise: 79900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-9115",
    createdAt: new Date("2025-08-29T15:43:26.000Z")
  },

  {
    title: "Mascara",
    slug: "mascara",
    description:
      "Define and lengthen your lashes with this volumizing and lengthening mascara that delivers dramatic results without clumping or flaking. The specially designed brush coats each lash from root to tip to create a full, fluttery look with intense colour payoff. Its long-lasting, water-resistant formula stays put all day without smudging or smearing. Available in a classic black shade, this mascara is perfect for both natural and bold makeup looks, enhancing the eyes with depth and definition.",
    brand: "Swiss Beauty",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://swissbeauty.in/cdn/shop/files/Select_Game_Changer_Tubing_Mascara_1024x.jpg?v=1759300833"
    ],
    basePriceInPaise: 59900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-8568",
    createdAt: new Date("2025-09-28T08:19:51.000Z")
  },

  {
    title: "Nail Polish",
    slug: "nail-polish",
    description:
      "Add a pop of color to your nails with this vibrant, long-lasting nail polish formulated with high-quality pigments for rich, beautiful colour in a single coat. The chip-resistant, quick-dry formula is designed to last for days without chipping or fading. Available in a range of contemporary shades, this polish is perfect for day or night looks. The easy-to-use brush provides smooth, even application for a salon-like finish from the comfort of home.",
    brand: "Modelones",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/c_crop,w_1024,h_1024/v1761152704/ed6a3eb3-94d0-4b58-bafa-44a422eb346e1718365080024ModelonesColoringLifeSoak-OffUVLEDCuredGelNailPolish7ml-MD-11_p0bsti.webp"
    ],
    basePriceInPaise: 39900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-9259",
    createdAt: new Date("2025-09-22T10:55:38.000Z")
  },

  {
    title: "Nail File Set",
    slug: "nail-file-set",
    description:
      "Keep your nails looking their best with this comprehensive nail file set that includes multiple files and buffers to shape, smooth and shine your nails. Designed for both professional and at-home manicure needs, the ergonomic files provide precise control while the included buffers deliver a polished finish. Housed in a compact, travel-friendly case, this set is perfect for maintaining neat and stylish nails on the go.",
    brand: "Beter",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_n7dusMz72u1kF2exXNYWu2upchLKgPsKsg&s"
    ],
    basePriceInPaise: 29900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.0,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-3019",
    createdAt: new Date("2025-09-27T13:11:20.000Z")
  },

  {
    title: "Eyeliner",
    slug: "eyeliner",
    description:
      "Achieve precise, bold eye definition with this long-lasting eyeliner crafted for smooth application and intense pigment payoff. Its waterproof formula resists smudging and fading throughout the day, ensuring your eye looks stay sharp from morning to night. The fine tip allows controlled lines from thin, subtle looks to dramatic wings. Suitable for sensitive eyes and contact lens wearers, this eyeliner enhances any eye makeup look with crisp, striking definition.",
    brand: "Maybelline",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770370399/Maybelline-EyeStudio-Master-Precise-All-Day-Liquid-Eyeliner-Makeup-Matte-Black_fa6cb88a-77a0-47ac-9023-5ab617ac553e.45e14ae599a78bf266c65bfd20371299_qek4m1.jpg"
    ],
    basePriceInPaise: 29000,
    variants: [{ color: "Standard" }],
    totalStock: 95,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-9001",
    createdAt: new Date("2025-10-02T09:42:51.000Z")
  },

  {
    title: "Blush",
    slug: "blush",
    description:
      "Add a natural, healthy flush to your cheeks with this finely milled blush that delivers buildable, seamless colour. Its smooth, blendable texture allows effortless application with brushes or fingertips. Suitable for all skin tones, this blush enhances the complexion with a soft, radiant finish. The long-lasting formula resists fading and blends beautifully with other makeup products, making it an excellent choice for both everyday looks and special occasions.",
    brand: "Lakme",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770370440/40161226_1-lakme-9-to-5-pure-rouge-blusher_mqygty.jpg"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 84,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-8202",
    createdAt: new Date("2025-09-30T11:28:43.000Z")
  },

  {
    title: "Makeup Primer",
    slug: "makeup-primer",
    description:
      "Prepare your skin with this lightweight makeup primer that smooths texture, minimises pores, and enhances makeup longevity. Its silky, fast-absorbing formula creates an even base for foundation and other makeup products, helping them apply more smoothly and last longer throughout the day. Suitable for all skin types, this primer improves makeup performance while keeping skin comfortable and hydrated.",
    brand: "L'Oréal Paris",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770370472/071249629000_t1_ulpup6.png"
    ],
    basePriceInPaise: 149900,
    variants: [{ color: "Standard" }],
    totalStock: 76,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-7703",
    createdAt: new Date("2025-10-07T14:55:19.000Z")
  },

  {
    title: "Makeup Remover",
    slug: "makeup-remover",
    description:
      "Effortlessly remove makeup and impurities with this gentle yet effective makeup remover. Its micellar water formulation draws out dirt, oil, and makeup without harsh rubbing or stripping skin of natural moisture. Suitable for all skin types and safe for sensitive eyes, this cleanser leaves skin refreshed, clean, and hydrated. Ideal for daily use at the beginning and end of your beauty routine, it supports healthy, clear skin with each application.",
    brand: "Garnier",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - makeup object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770370504/Garnier-SkinActive-Micellar-Cleansing-Water-All-in-1-Makeup-Remover-Adult-3-4-fl-oz_03c5f896-f38b-4507-81b8-8066c381e6ff.e54b775e6fc5486f63d965d7021ae3c1_xzbvwo.png"
    ],
    basePriceInPaise: 119900,
    variants: [{ color: "Standard" }],
    totalStock: 88,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-9331",
    createdAt: new Date("2025-10-03T10:36:22.000Z")
  }

];

export const beauty_hair_products = [

  {
    title: "Shampoo",
    slug: "shampoo",
    description:
      "Cleanse and nourish your hair with this gentle and effective shampoo formulated to remove dirt, oil and buildup without stripping away your scalp’s natural oils. Its mild, sulfate-free formula is suitable for all hair types, including color-treated and chemically processed hair. Enriched with botanical extracts and essential oils, it strengthens and conditions each strand while leaving hair feeling soft, fresh, and manageable. With regular use, your hair will feel cleaner and healthier, and the refreshing scent keeps your hair smelling great throughout the day. This shampoo is an essential first step in your daily hair care routine.",
    brand: "Herbal Essences",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://www.thedravyastore.com/cdn/shop/files/8K2A8864-1-1-scaled_1024x1024.jpg?v=1719758325"
    ],
    basePriceInPaise: 29900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-5287",
    createdAt: new Date("2025-09-19T10:22:08.000Z")
  },

  {
    title: "Conditioner",
    slug: "conditioner",
    description:
      "Hydrate and detangle your hair with this rich and nourishing conditioner designed to moisturize, strengthen and protect each strand from breakage and frizz. Its creamy formula smooths the hair cuticle and helps restore softness, shine and manageability after shampooing. Enriched with natural botanical extracts and essential oils, it helps repair damage caused by heat styling and environmental stressors. Suitable for all hair types, including colour-treated hair, this conditioner leaves your hair silky, smooth and beautifully healthy with every use.",
    brand: "Pantene",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://heyumanos.com/cdn/shop/files/umanosConditionerBottleBox_1024x1024.jpg?v=1719353171"
    ],
    basePriceInPaise: 39900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-8736",
    createdAt: new Date("2025-09-21T09:18:37.000Z")
  },

  {
    title: "Hair Brush",
    slug: "hair-brush",
    description:
      "Detangle and style your hair effortlessly with this versatile hair brush designed for daily use on all hair types, from fine and straight to thick and curly. The flexible bristles gently glide through knots and tangles without pulling or tugging, while stimulating the scalp to promote healthy circulation. Its ergonomic handle ensures a comfortable grip for easy brushing whether at home or on the go. Ideal for daily grooming and styling, this hair brush keeps hair smooth, sleek and tangle-free with minimal effort.",
    brand: "Tangle Teezer",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://www.kareco.com/cdn/shop/products/BigHairBrushCollection_1024x1024.png?v=1659635651"
    ],
    basePriceInPaise: 19900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    batchNumber: "BATCH-9904",
    createdAt: new Date("2025-08-27T14:47:19.000Z")
  },

  {
    title: "Argan Oil Shampoo",
    slug: "argan-oil-shampoo",
    description:
      "Revitalize your hair with this luxurious argan oil shampoo that deeply cleanses and nourishes while preserving essential moisture. Rich in antioxidants and vitamin E, argan oil helps strengthen hair from root to tip, reduces breakage, and adds a natural shine. Its sulfate-free formula gently removes buildup without stripping away beneficial oils, making it suitable for dry, frizzy or textured hair types. With continued use, hair feels softer, healthier and more manageable. Experience salon-like hair care at home with this premium argan oil shampoo.",
    brand: "OGX",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388224/argan-oil-of-morocco-shampoo-13oz-FOP-cloudy-gradient_z00fun.webp"
    ],
    basePriceInPaise: 69900,
    variants: [{ color: "Standard" }],
    totalStock: 115,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "GEN-73259",
    createdAt: new Date("2025-10-03T12:55:37.000Z")
  },

  {
    title: "Keratin Conditioner",
    slug: "keratin-conditioner",
    description:
      "Smooth and strengthen hair with this keratin conditioner enriched with nourishing proteins that help restore damaged strands, reduce frizz and enhance softness. The advanced keratin formula penetrates deeply to rebuild hair resilience and improve manageability. Ideal for heat-styled, chemically treated or frizzy hair, it leaves hair feeling silky, sleek and revitalized after each use. Use after shampooing for best results, as part of your daily hair care routine for healthier-looking, glossy hair.",
    brand: "Tresemmé",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388264/11876_S9-8909106001466_31696d20-116f-4ee8-a21f-537fa865b18e_lpg1du.jpg"
    ],
    basePriceInPaise: 69900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "GEN-66943",
    createdAt: new Date("2025-10-06T11:23:05.000Z")
  },

  {
    title: "Hair Serum",
    slug: "hair-serum",
    description:
      "Boost shine, tame frizz and protect your hair from environmental stressors with this nourishing hair serum. Formulated with lightweight silicones and essential nutrients, it smooths the hair cuticle, enhances gloss and reduces flyaways without weighing hair down. Suitable for all hair types, this serum can be applied to damp or dry hair to improve smoothness and manageability. Its protective properties help defend hair from heat styling damage while adding a healthy, radiant shine. A daily styling essential, it keeps hair looking polished and sleek.",
    brand: "Livon",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388299/Websiteupload_517acc3b-2eae-439f-88ea-694ec7b777da_1024x1024_uqr0gf.jpg"
    ],
    basePriceInPaise:   69900,
    variants: [{ color: "Standard" }],
    totalStock: 96,
    rating: 4.7,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "GEN-66534",
    createdAt: new Date("2025-10-08T15:42:29.000Z")
  },

  {
    title: "Hair Mask",
    slug: "hair-mask",
    description:
      "Restore and revitalize tired, dry or damaged hair with this deeply conditioning hair mask that delivers intense moisture and repair. Enriched with botanical extracts and nourishing agents, it penetrates deep into the hair shaft to strengthen fibres, reduce breakage and improve elasticity. The creamy mask formula helps smooth frizz and replenish essential nutrients lost through heat styling and environmental stress. Use once or twice a week after shampooing to reveal softer, stronger, and visibly healthier hair. Perfect for maintaining vibrant, nourished locks.",
    brand: "L'Oréal Paris",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388374/loreal-paris-botanicals-arnica-40ml-hair-mask-fabfinds_500x500_uaskk4.jpg"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 76,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "GEN-66295",
    createdAt: new Date("2025-10-07T09:51:16.000Z")
  },

  {
    title: "Hair Growth Oil",
    slug: "hair-growth-oil",
    description:
      "Nourish and strengthen your hair from the roots with this potent hair growth oil formulated with natural botanical oils, vitamins and nutrients that help stimulate scalp circulation and promote healthier hair growth. The deeply penetrating oil blend moisturizes the scalp, reduces breakage, and improves overall hair strength and texture. Suitable for all hair types, it supports daily hair care and helps combat thinning or weak strands. With regular use, hair appears fuller, more resilient and visibly nourished.",
    brand: "Indulekha",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388435/614K49ZlYKL._AC_UF1000_1000_QL80__itidkm.jpg"
    ],
    basePriceInPaise: 89900,
    variants: [{ color: "Standard" }],
    totalStock: 80,
    rating: 4.8,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "GEN-68822",
    createdAt: new Date("2025-10-09T14:32:53.000Z")
  },

  {
    title: "Hair Spray",
    slug: "hair-spray",
    description:
      "Set your style with this strong-hold hair spray formulated to keep hair in place without stiffness or stickiness. The fine mist delivers even coverage and long-lasting hold, helping tame flyaways and maintain hairstyles throughout the day. Ideal for both everyday styling and special occasions, it provides flexible yet dependable control. Suitable for most hair types, this hair spray leaves hair feeling light and touchable while preserving your desired look without flaking or residue.",
    brand: "Schwarzkopf",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388479/818346_1_jwofzt.jpg"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 88,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-9092",
    createdAt: new Date("2025-10-04T12:15:34.000Z")
  },

  {
    title: "Hair Styling Cream",
    slug: "hair-styling-cream",
    description:
      "Style and shape your hair with this lightweight hair styling cream that offers medium hold and flexible control. Its smooth, creamy texture allows easy distribution through damp or dry hair while providing soft definition and shine. Perfect for creating everyday hairstyles or taming unruly strands, this cream enhances texture without crunchiness or greasiness. Suitable for most hair types, it leaves hair feeling nourished and manageable with a natural finish.",
    brand: "Gatsby",
    category: "PUT Beauty category objectID here",
    subCategory: "PUT Beauty category - hair object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770388514/gatsby-hyper-quiff-hair-gel-75g-nazar-jan-s-supermarket_gvjv3a.jpg"
    ],
    basePriceInPaise: 59900,
    variants: [{ color: "Standard" }],
    totalStock: 76,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    expiryDate: "2027-01-01T00:00:00.000Z",
    batchNumber: "BATCH-8201",
    createdAt: new Date("2025-10-06T10:38:49.000Z")
  }

];


export const beauty_grooming_products = [
{
    "title": "Perfume",
    "slug": "perfume-4651",
    "description": "Leave a lasting impression with our captivating and long-lasting Perfume. This fragrance is a beautiful blend of floral, fruity, and woody notes, creating a unique and unforgettable scent. The top notes are bright and fresh, the middle notes are soft and feminine, and the base notes are warm and sensual. The long-lasting formula stays with you all day, leaving a beautiful, lingering trail. The elegant bottle is a beautiful addition to any vanity. This perfume is the perfect way to express your personal style and feel confident and beautiful.",
    "brand": "SnapBuy Selection",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://www.lylablanc.in/cdn/shop/files/WhatsAppImage2025-06-26at3.45.22PM.jpg?v=1750932942"
    ],
    "basePriceInPaise": 4999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2027-01-01T00:00:00.000Z",
    "batchNumber": "BATCH-6785"
  },
{
    "title": "Deodorant",
    "slug": "deodorant-6641",
    "description": "Stay fresh and confident all day long with our effective and long-lasting Deodorant. It's formulated to provide 24-hour protection against odor and wetness. The gentle, non-irritating formula is suitable for all skin types, including sensitive skin, and is free of aluminum and parabens. It glides on smoothly and dries quickly, leaving no white marks on your clothes. The light, refreshing scent will leave you feeling clean and confident. This deodorant is the perfect choice for anyone who wants to stay fresh and dry all day long. Stay confident and comfortable.",
    "brand": "SnapBuy Selection",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://www.wildstone.in/cdn/shop/files/Edge150mlnew-Copy_1_1024x1024.jpg?v=1688560465"
    ],
    "basePriceInPaise": 899,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2027-01-01T00:00:00.000Z",
    "batchNumber": "BATCH-833"
  },
{
    "title": "Beard Oil 985",
    "slug": "beard-oil-985-4575",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 40000,
    "variants": [],
    "totalStock": 116,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-71938"
  },
{
    "title": "Shaving Cream 604",
    "slug": "shaving-cream-604-6380",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 40500,
    "variants": [],
    "totalStock": 109,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-80859"
  },
{
    "title": "After Shave Lotion 173",
    "slug": "after-shave-lotion-173-8146",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 41000,
    "variants": [],
    "totalStock": 96,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-45763"
  },
{
    "title": "Hair Gel Strong Hold 771",
    "slug": "hair-gel-strong-hold-771-5799",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 41500,
    "variants": [],
    "totalStock": 113,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-19636"
  },
{
    "title": "Face Scrub Men 671",
    "slug": "face-scrub-men-671-8526",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 42000,
    "variants": [],
    "totalStock": 148,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-99270"
  },
{
    "title": "Beard Oil 766",
    "slug": "beard-oil-766-8103",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 42500,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-51298"
  },
{
    "title": "Shaving Cream 909",
    "slug": "shaving-cream-909-2328",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 43000,
    "variants": [],
    "totalStock": 67,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-89688"
  },
{
    "title": "After Shave Lotion 178",
    "slug": "after-shave-lotion-178-5450",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 43500,
    "variants": [],
    "totalStock": 109,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-94141"
  },
{
    "title": "Hair Gel Strong Hold 852",
    "slug": "hair-gel-strong-hold-852-1131",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 44000,
    "variants": [],
    "totalStock": 78,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-88871"
  },
{
    "title": "Face Scrub Men 715",
    "slug": "face-scrub-men-715-9306",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 44500,
    "variants": [],
    "totalStock": 146,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-9435"
  },
{
    "title": "Beard Oil 953",
    "slug": "beard-oil-953-4689",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 45000,
    "variants": [],
    "totalStock": 70,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-98450"
  },
{
    "title": "Shaving Cream 423",
    "slug": "shaving-cream-423-1880",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 45500,
    "variants": [],
    "totalStock": 60,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-50500"
  },
{
    "title": "After Shave Lotion 117",
    "slug": "after-shave-lotion-117-1951",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 46000,
    "variants": [],
    "totalStock": 92,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-72172"
  },
{
    "title": "Hair Gel Strong Hold 968",
    "slug": "hair-gel-strong-hold-968-5271",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 46500,
    "variants": [],
    "totalStock": 110,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-58018"
  },
{
    "title": "Face Scrub Men 341",
    "slug": "face-scrub-men-341-7255",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 47000,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-34838"
  },
{
    "title": "Beard Oil 34",
    "slug": "beard-oil-34-7210",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 47500,
    "variants": [],
    "totalStock": 134,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-9331"
  },
{
    "title": "Shaving Cream 94",
    "slug": "shaving-cream-94-8558",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 48000,
    "variants": [],
    "totalStock": 113,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-32451"
  },
{
    "title": "After Shave Lotion 446",
    "slug": "after-shave-lotion-446-6879",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 48500,
    "variants": [],
    "totalStock": 96,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-23147"
  },
{
    "title": "Hair Gel Strong Hold 813",
    "slug": "hair-gel-strong-hold-813-1635",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 49000,
    "variants": [],
    "totalStock": 99,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-48647"
  },
{
    "title": "Face Scrub Men 749",
    "slug": "face-scrub-men-749-9060",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - grooming object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 49500,
    "variants": [],
    "totalStock": 67,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-92879"
  }
]

export const beauty_hygiene_products = [
{
    "title": "Toothbrush",
    "slug": "toothbrush-3939",
    "description": "Keep your teeth and gums healthy with our effective and gentle Toothbrush. It's designed to provide a thorough, comfortable clean. The soft, rounded bristles are gentle on your gums and effective at removing plaque and food particles. The ergonomic handle provides a comfortable, secure grip. Available in a variety of colors, this toothbrush is the perfect choice for anyone who wants to maintain good oral hygiene. It's a simple and affordable way to keep your teeth and gums healthy. For best results, use with our matching toothpaste and replace your toothbrush every three months.",
    "brand": "SnapBuy Selection",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://cdn-ilbepif.nitrocdn.com/pZrBMYQGrUZaHsbVKBUlrVMHXHFmMxDe/assets/images/optimized/rev-5919f9c/organicb.in/wp-content/uploads/2024/07/BrushYourWaytoaBrighterSmileandaGreenerPlanetYourGuidetoEco-FriendlyToothbrushes-1024x1024.jpg"
    ],
    "basePriceInPaise": 999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2027-01-01T00:00:00.000Z",
    "batchNumber": "BATCH-3743"
  },
{
    "title": "Toothpaste",
    "slug": "toothpaste-6235",
    "description": "Achieve a brighter, healthier smile with our whitening and strengthening Toothpaste. Formulated with natural ingredients, it gently whitens your teeth, removes stains, and strengthens your enamel. The fluoride formula helps prevent cavities and protect your teeth from decay. A refreshing mint flavor leaves your mouth feeling clean and fresh. This toothpaste is the perfect choice for anyone who wants to achieve a brighter, healthier smile. It's a simple and effective way to improve your oral hygiene and boost your confidence. For best results, use with our matching toothbrush and visit your dentist regularly.",
    "brand": "SnapBuy Selection",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://himalayawellness.in/cdn/shop/products/sparkling-white-toothpaste_1024x1024.jpg?v=1622095538"
    ],
    "basePriceInPaise": 799,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2027-01-01T00:00:00.000Z",
    "batchNumber": "BATCH-7486"
  },
{
    "title": "Body Wash Lavender 55",
    "slug": "body-wash-lavender-55-2225",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 30000,
    "variants": [],
    "totalStock": 120,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-10988"
  },
{
    "title": "Hand Wash Liquid 281",
    "slug": "hand-wash-liquid-281-3241",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 30500,
    "variants": [],
    "totalStock": 92,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-20114"
  },
{
    "title": "Sanitizer Spray 563",
    "slug": "sanitizer-spray-563-2004",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 31000,
    "variants": [],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-21845"
  },
{
    "title": "Dental Floss 160",
    "slug": "dental-floss-160-4907",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 31500,
    "variants": [],
    "totalStock": 140,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-70179"
  },
{
    "title": "Mouthwash Mint 343",
    "slug": "mouthwash-mint-343-1309",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 32000,
    "variants": [],
    "totalStock": 125,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-11468"
  },
{
    "title": "Body Wash Lavender 804",
    "slug": "body-wash-lavender-804-8227",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 32500,
    "variants": [],
    "totalStock": 62,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-8166"
  },
{
    "title": "Hand Wash Liquid 475",
    "slug": "hand-wash-liquid-475-6116",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 33000,
    "variants": [],
    "totalStock": 81,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-55276"
  },
{
    "title": "Sanitizer Spray 884",
    "slug": "sanitizer-spray-884-7451",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 33500,
    "variants": [],
    "totalStock": 122,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-49396"
  },
{
    "title": "Dental Floss 128",
    "slug": "dental-floss-128-7518",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 34000,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-89633"
  },
{
    "title": "Mouthwash Mint 504",
    "slug": "mouthwash-mint-504-4705",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 34500,
    "variants": [],
    "totalStock": 111,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-15770"
  },
{
    "title": "Body Wash Lavender 922",
    "slug": "body-wash-lavender-922-6720",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 35000,
    "variants": [],
    "totalStock": 80,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-79492"
  },
{
    "title": "Hand Wash Liquid 645",
    "slug": "hand-wash-liquid-645-2751",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 35500,
    "variants": [],
    "totalStock": 86,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-88733"
  },
{
    "title": "Sanitizer Spray 67",
    "slug": "sanitizer-spray-67-9155",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 36000,
    "variants": [],
    "totalStock": 118,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-75965"
  },
{
    "title": "Dental Floss 214",
    "slug": "dental-floss-214-5141",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 36500,
    "variants": [],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-82328"
  },
{
    "title": "Mouthwash Mint 754",
    "slug": "mouthwash-mint-754-3380",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 37000,
    "variants": [],
    "totalStock": 51,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-60042"
  },
{
    "title": "Body Wash Lavender 934",
    "slug": "body-wash-lavender-934-9691",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 37500,
    "variants": [],
    "totalStock": 112,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-5601"
  },
{
    "title": "Hand Wash Liquid 542",
    "slug": "hand-wash-liquid-542-7441",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 38000,
    "variants": [],
    "totalStock": 80,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-15336"
  },
{
    "title": "Sanitizer Spray 188",
    "slug": "sanitizer-spray-188-8168",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 38500,
    "variants": [],
    "totalStock": 107,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-37898"
  },
{
    "title": "Dental Floss 259",
    "slug": "dental-floss-259-6880",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 39000,
    "variants": [],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-75019"
  },
{
    "title": "Mouthwash Mint 927",
    "slug": "mouthwash-mint-927-6887",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Beauty category objectID here",
    "subCategory": "PUT Beauty category - hygiene object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 39500,
    "variants": [],
    "totalStock": 142,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "expiryDate": "2026-12-31T00:00:00.000Z",
    "batchNumber": "GEN-93276"
  }
]

export const sports_gym_products = [

  {
    title: "Dumbbells Set",
    slug: "dumbbells-set",
    description:
      "Build strength and tone your muscles with this versatile dumbbells set, ideal for a wide range of exercises and fitness levels. Crafted from high-quality, durable material, the hex-shaped dumbbells prevent rolling and enhance safety during workouts. The ergonomic, textured handles provide a secure grip, ensuring comfort and stability throughout your sessions. Whether you’re performing curls, presses or lunges, this dumbbells set supports full-body strength and conditioning. Perfect for beginners and seasoned athletes alike, it adds flexibility and power to your home gym routine.",
    brand: "Bowflex",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://samsfitness.com.au/wp-content/smush-webp/2020/09/CGHEXDB30KG-rubber-hex-dumbbell-pair-1024x1024.jpg.webp"
    ],
    basePriceInPaise: 199900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-09-18T10:22:00.000Z")
  },

  {
    title: "Kettlebell",
    slug: "kettlebell",
    description:
      "Build strength, power and endurance with this versatile kettlebell designed for a wide range of exercises from swings and squats to presses and rows. Crafted from durable cast-iron with a smooth finish, it provides reliable performance and a secure grip for functional training. The wide, flat base ensures stability for safe workouts, while the ergonomic handle supports varied grips and movement patterns. Ideal for cardio conditioning, strength training and full-body workouts, this kettlebell is a compact and essential addition to any home gym.",
    brand: "Kettler",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://commercial.torquefitness.com/cdn/shop/files/2024_06_06-35LBRubberCoatedKettlebell-5832_1024x1024.jpg?v=1745251179"
    ],
    basePriceInPaise: 109900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-09-20T11:47:32.000Z")
  },

  {
    title: "Pull-up Bar",
    slug: "pull-up-bar",
    description:
      "Increase upper body strength with this sturdy and easy-to-install pull-up bar designed to fit most standard doorways. Constructed from heavy-duty steel with a reinforced frame, it supports a wide range of bodyweight exercises including pull-ups, chin-ups and hanging leg raises. The comfortable, non-slip foam grips provide secure handling, while the compact design makes it perfect for home workout spaces. Ideal for strength development, this pull-up bar is a reliable and space-efficient choice for your daily fitness routine.",
    brand: "Iron Gym",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://www.bullrockfitness.com/wp-content/uploads/2023/04/rig_flying_pull_up_bar-1024x1024.jpg"
    ],
    basePriceInPaise: 149900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-10-02T09:15:19.000Z")
  },

  {
    title: "Ab Roller",
    slug: "ab-roller",
    description:
      "Strengthen your core and tone your abs with this effective and easy-to-use ab roller. Featuring a durable wheel and comfortable, ergonomic handles, it helps you perform ab rollouts with stability and control. This ab roller targets your abdominal muscles, obliques and lower back, providing a focused core workout that improves strength and balance. Its compact design makes it ideal for home workouts or gym setups with limited space. A simple yet powerful tool for enhancing your core fitness, it’s perfect for all levels of training.",
    brand: "Valeo",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://www.strengthshop.co.uk/cdn/shop/products/new-ab-wheel_1024x1024.jpg?v=1641970945"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-09-22T13:24:51.000Z")
  },

  {
    title: "Foam Roller",
    slug: "foam-roller",
    description:
      "Relieve muscle soreness and improve your flexibility with this versatile foam roller designed for self-myofascial release. Constructed from high-density foam, it provides a comfortable yet firm surface to target tension in your back, legs and arms. Regular use increases mobility, improves circulation and accelerates recovery after intense workouts. Compact and lightweight, this foam roller is ideal for home gyms or travel, helping you maintain muscle health and recovery as part of your fitness routine.",
    brand: "TriggerPoint",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://worldfitness.com.au/cdn/shop/products/TriggerPointGRID2.0FoamRoller_1024x1024.png?v=1662693538"
    ],
    basePriceInPaise: 99900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-09-25T12:02:34.000Z")
  },

  {
    title: "Gym Bag",
    slug: "gym-bag",
    description:
      "Carry your gym essentials in style with this spacious and durable gym bag that keeps your gear organized and accessible. It features multiple compartments including a main storage area for clothing and shoes, side pockets for accessories and a ventilated shoe compartment for separation of clean and used items. The adjustable shoulder strap and padded handle ensure comfortable carrying on the go, while the rugged build stands up to regular use. Functional yet stylish, this gym bag is the perfect companion for workouts, weekend trips or daily activities.",
    brand: "Nike",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://fabrella.in/cdn/shop/files/m-iron-man-2020-monvelli-25-original-imag5dzanbyes3cw_1024x1024.jpg?v=1738867588"
    ],
    basePriceInPaise: 79900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-09-27T14:47:11.000Z")
  },

  {
    title: "Punching Bag",
    slug: "punching-bag",
    description:
      "Get a great workout and relieve stress with this durable and high-quality punching bag designed for both beginners and experienced athletes. Crafted from rugged synthetic leather, it withstands powerful punches and kicks, while the heavy-duty straps and reinforced stitching ensure secure hanging. The dense foam filling offers excellent shock absorption to protect wrists and joints during workouts. Whether you’re training for boxing, MMA or fitness conditioning, this punching bag adds intensity and versatility to your home gym setup.",
    brand: "Everlast",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://m.media-amazon.com/images/I/81yKBX5LLZL._UF1000,1000_QL80_.jpg"
    ],
    basePriceInPaise: 199900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-09-29T11:27:53.000Z")
  },

  {
    title: "Boxing Gloves",
    slug: "boxing-gloves",
    description:
      "Protect your hands and boost your performance with these high-quality boxing gloves designed for both training and sparring. Made from durable synthetic leather with multi-layer foam padding, they provide excellent shock absorption and wrist support. The secure hook-and-loop closure ensures a snug, comfortable fit so you can focus on your technique. Available in various sizes and weights, these gloves are perfect for workouts, sparring sessions and fitness boxing routines. A must-have for anyone serious about their training.",
    brand: "Everlast",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://www.fightequipmentuk.com/cdn/shop/files/playerz-spartech-boxing-gloves-whiteblack-playerz-boxing.jpg?v=1743656385"
    ],
    basePriceInPaise: 59900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 50, width: 20, height: 20, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-10-01T09:53:17.000Z")
  },

  {
    title: "Resistance Bands",
    slug: "resistance-bands",
    description:
      "Enhance your workouts with this set of resistance bands that offer versatile exercise options for strength training, stretching and rehabilitation. Crafted from premium elastic materials, these bands deliver smooth resistance for every movement and are ideal for targeting arms, legs and core muscles. Lightweight and portable, they fit easily into any gym bag for on-the-go workouts. Suitable for beginners and advanced athletes alike, resistance bands provide an effective, low-impact way to build strength and flexibility at home or in the gym.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770440926/decathlon_resistance_band_1637383793_9beb53a7_progressive_vkcu8q.jpg"
    ],
    basePriceInPaise: 39900,
    variants: [{ color: "Standard" }],
    totalStock: 120,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 30, width: 5, height: 5, unit: "cm" },
    weight: { value: 0.4, unit: "kg" },
    createdAt: new Date("2025-09-30T13:11:05.000Z")
  },

  {
    title: "Bench Press Stand",
    slug: "bench-press-stand",
    description:
      "Build your upper body strength with this sturdy bench press stand designed for weight training and home gym setups. Made from heavy-duty steel with a stable base and adjustable supports, it accommodates various bench press exercises and weight plates. Its rugged construction ensures durability and safety during intense training sessions. Ideal for chest, shoulder and arm workouts, this bench press stand delivers reliable performance for fitness enthusiasts at any level.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - gym object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770440977/4f913a553f09613696be10fa503ee746fad83035_mocggo.jpg"
    ],
    basePriceInPaise: 429900,
    variants: [{ color: "Standard" }],
    totalStock: 95,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 100, width: 50, height: 120, unit: "cm" },
    weight: { value: 20, unit: "kg" },
    createdAt: new Date("2025-10-03T10:45:28.000Z")
  }

];

export const sports_yoga_products = [

  {
    title: "Yoga Mat",
    slug: "yoga-mat",
    description:
      "Enhance your yoga practice with this premium yoga mat that offers the perfect blend of comfort, stability, and grip for yogis of all levels. Crafted from high-quality, eco-friendly materials, it provides a non-slip surface that helps you stay balanced in every pose while offering cushioning for your joints. Lightweight yet durable, this yoga mat is easy to roll up and transport, whether you’re heading to a class or practicing at home. Its easy-to-clean design ensures long-lasting use, making it a reliable and essential foundation for your yoga routine. Whether you're working on flexibility, strength, or relaxation, this yoga mat supports your journey toward health and well-being.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhA60xCxttg3dtVwiuRJxk1psNe_p8QjZO4w&s"
    ],
    basePriceInPaise: 89900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 180, width: 60, height: 0.5, unit: "cm" },
    weight: { value: 2, unit: "kg" },
    createdAt: new Date("2025-10-02T09:15:18.000Z")
  },

  {
    title: "Yoga Blocks",
    slug: "yoga-blocks",
    description:
      "Deepen your stretches and improve pose alignment with this set of supportive and durable yoga blocks. Made from high-density foam material, these blocks provide both stability and comfort, making them ideal for practitioners of all levels. Use them to assist in standing, seated, and supine poses to enhance flexibility and reduce strain. When incorporated into your routine, they help you achieve proper posture and increase your range of motion safely and comfortably. Lightweight and easy to carry, these yoga blocks are essential accessories for next-level practice.",
    brand: "Reebok",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://cdn.yanrefitness.com/cdn-cgi/imagedelivery/m94-xP3Y6Xwv_FOE9Rj47w/www.yanrefitness.com/2021/07/Figure-1-Cork-yoga-Blocks.jpg/w=1024"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 22, width: 15, height: 6, unit: "cm" },
    weight: { value: 1.2, unit: "kg" },
    createdAt: new Date("2025-09-28T11:24:33.000Z")
  },

  {
    title: "Yoga Strap",
    slug: "yoga-strap",
    description:
      "Improve flexibility and deepen your stretches with this durable and adjustable yoga strap designed to help you reach further and hold poses longer. Constructed from high-quality, non-stretch cotton with a secure D-ring buckle, it allows you to customize the length to suit your practice and body type. Whether you’re working on splits, forward folds, or shoulder stretches, this strap offers reliable support without slipping or bunching. Lightweight and easy to carry, this yoga strap is a valuable addition to any yoga routine, enhancing your flexibility and helping you progress safely.",
    brand: "Manduka",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://msfstore.fit/cdn/shop/files/Yoga_Strap_With_SS_Hook_A1_1_1024x1024.jpg?v=1740553059"
    ],
    basePriceInPaise: 29900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 180, width: 5, height: 0.5, unit: "cm" },
    weight: { value: 0.3, unit: "kg" },
    createdAt: new Date("2025-10-01T08:37:44.000Z")
  },

  {
    title: "Exercise Ball",
    slug: "exercise-ball",
    description:
      "Improve your balance, stability and core strength with this durable, anti-burst exercise ball that supports a wide range of workouts, from core strengthening and stretching to yoga and Pilates sessions. Constructed from high-quality, anti-burst material, it can support substantial weight while providing a secure, non-slip surface for safe use. Available in multiple sizes to suit different heights and routines, it enhances flexibility and posture with consistent use. Ideal for home gyms and yoga studios alike, this exercise ball adds versatility and dynamic movement to your fitness and yoga practices.",
    brand: "Gymnic",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://www.msffit.com/cdn/shop/files/Anti-Burst_Exercise_Balls_1_1024x1024.jpg?v=1740565246"
    ],
    basePriceInPaise: 59900,
    variants: [{ color: "Standard" }],
    totalStock: 100,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 65, width: 65, height: 65, unit: "cm" },
    weight: { value: 1.5, unit: "kg" },
    createdAt: new Date("2025-09-30T14:50:37.000Z")
  },

  {
    title: "Meditation Cushion",
    slug: "meditation-cushion",
    description:
      "Relax and support your posture during meditation with this plush meditation cushion designed for comfort and durability. Filled with soft yet supportive materials, it helps align your spine and hips for longer, more focused meditation sessions. The removable cover allows easy cleaning, while the textured fabric provides a comfortable feel. Ideal for yoga cooling-down periods or dedicated meditation practice, this cushion contributes to a calmer, more mindful experience. A must-have accessory for yogis and meditators alike, it enhances comfort without sacrificing posture.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770441478/TRIBE-ZafuMeditationCushion-Twilight_2c3cd4fb-4a81-44e3-b32b-dbf559679135_u53bjc.jpg"
    ],
    basePriceInPaise: 89900,
    variants: [{ color: "Standard" }],
    totalStock: 104,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 30, width: 30, height: 15, unit: "cm" },
    weight: { value: 1.3, unit: "kg" },
    createdAt: new Date("2025-10-05T09:42:21.000Z")
  },

  {
    title: "Anti-Burst Ball",
    slug: "anti-burst-ball",
    description:
      "Add dynamic movement and balance training to your yoga or fitness routine with this anti-burst ball crafted from high-quality, resilient material. Designed to withstand intense workouts, its anti-burst technology ensures safe inflation and stable performance throughout your sessions. Use it for stretching, core strengthening, stability drills and a range of rehabilitative exercises that improve posture and muscle engagement. Lightweight and easy to store, this ball is an excellent tool for enhancing flexibility, balance and overall mobility.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770441541/gym-ball-yoga-ball-anti-burst-balance-core-strength-posture-original-imah3kvdtqevjwhg_ehnbol.jpg"
    ],
    basePriceInPaise: 119900,
    variants: [{ color: "Standard" }],
    totalStock: 75,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 60, width: 60, height: 60, unit: "cm" },
    weight: { value: 1.7, unit: "kg" },
    createdAt: new Date("2025-10-07T14:27:53.000Z")
  },

  {
    title: "Yoga Towel",
    slug: "yoga-towel",
    description:
      "Stay dry and comfortable during hot yoga sessions with this highly absorbent yoga towel. Made from a microfiber blend that wicks away sweat efficiently, it helps maintain a secure grip on your mat and prevents slipping during intense flows. Lightweight and quick-drying, this towel is perfect for yoga classes, travel and home practice alike. Designed to fit most standard mats, it adds a hygienic layer between you and the mat surface for improved comfort and performance. A practical accessory for yogis seeking both stability and convenience.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770441596/512evLuoUuL._AC_UF1000_1000_QL80__qpcdbs.jpg"
    ],
    basePriceInPaise: 29900,
    variants: [{ color: "Standard" }],
    totalStock: 95,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 70, width: 30, height: 1, unit: "cm" },
    weight: { value: 0.4, unit: "kg" },
    createdAt: new Date("2025-10-06T11:38:09.000Z")
  },

  {
    title: "Yoga Wheel",
    slug: "yoga-wheel",
    description:
      "Enhance flexibility and support your backbends with this robust yoga wheel engineered for stability and smooth rotations. Crafted from sturdy, lightweight materials, it provides the right balance of firmness and cushioning to aid deep stretches, improve posture and increase mobility in the spine and hips. Beginner-friendly yet suitable for advanced practitioners, this yoga wheel allows you to explore new depths in your flexibility training while safely supporting your body. Ideal for core engagement, balance work and stretching sequences, it elevates your practice with functional design.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770441641/picture_scnfnv.jpg"
    ],
    basePriceInPaise: 79900,
    variants: [{ color: "Standard" }],
    totalStock: 80,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 35, width: 35, height: 12, unit: "cm" },
    weight: { value: 1.2, unit: "kg" },
    createdAt: new Date("2025-10-08T09:15:22.000Z")
  },

  {
    title: "Balance Disc",
    slug: "balance-disc",
    description:
      "Improve your stability and core engagement with this inflatable balance disc designed for dynamic workouts and yoga integration. Its textured surface provides sensory feedback while challenging your balance and proprioception, aiding muscle activation and posture improvement. Lightweight and portable, this disc is perfect for home workouts, rehabilitation exercises and yoga warm-ups. Inflate it to the recommended firmness for desired resistance and tailor your routine to your fitness level. A versatile tool for strengthening core muscles and enhancing balance, it’s a smart addition to any yoga accessory collection.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770441745/p2718962_bctdcs.jpg"
    ],
    basePriceInPaise: 49900,
    variants: [{ color: "Standard" }],
    totalStock: 90,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 30, width: 30, height: 10, unit: "cm" },
    weight: { value: 0.6, unit: "kg" },
    createdAt: new Date("2025-10-09T08:25:47.000Z")
  },

  {
    title: "Meditation Bench",
    slug: "meditation-bench",
    description:
      "Support your meditation and yoga practice with this ergonomic meditation bench designed for comfort and alignment. Made from sturdy wood with a padded seat, it helps maintain proper posture during extended meditation sessions and reduces strain on your knees and back. The compact, foldable design makes it easy to transport and store, while the cushioned top adds comfort without sacrificing stability. Ideal for yogis, meditators and mindfulness practitioners, this bench enhances focus and relaxation during seated practices.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - yoga object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770441851/Foldable-Ergonomic-Cotton-Bamboo-Yoga-Exercise-Meditation-Stool-Sturdy-Prayer-Bench-Seat-Eco-Friendly-for-Relaxation_lrnd7d.jpg"
    ],
    basePriceInPaise: 109900,
    variants: [{ color: "Standard" }],
    totalStock: 85,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    dimensions: { length: 40, width: 20, height: 25, unit: "cm" },
    weight: { value: 2.5, unit: "kg" },
    createdAt: new Date("2025-10-10T12:38:04.000Z")
  }

];

export const sports_wear_products = [
{
    "title": "Dry-Fit T-Shirt 11",
    "slug": "dry-fit-t-shirt-11-5520",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 150000,
    "variants": [
      {
        "size": "S",
        "color": "White",
        "priceInPaise": 150000,
        "stock": 30
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 150000,
        "stock": 30
      },
      {
        "size": "L",
        "color": "Red",
        "priceInPaise": 150000,
        "stock": 30
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 150000,
        "stock": 30
      }
    ],
    "totalStock": 120,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Running Shorts 843",
    "slug": "running-shorts-843-8562",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 150500,
    "variants": [
      {
        "size": "S",
        "color": "Blue",
        "priceInPaise": 150500,
        "stock": 27
      },
      {
        "size": "M",
        "color": "Red",
        "priceInPaise": 150500,
        "stock": 27
      },
      {
        "size": "L",
        "color": "Black",
        "priceInPaise": 150500,
        "stock": 27
      },
      {
        "size": "XL",
        "color": "Red",
        "priceInPaise": 150500,
        "stock": 27
      }
    ],
    "totalStock": 108,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Compression Leggings 910",
    "slug": "compression-leggings-910-9153",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 151000,
    "variants": [
      {
        "size": "S",
        "color": "White",
        "priceInPaise": 151000,
        "stock": 22
      },
      {
        "size": "M",
        "color": "Blue",
        "priceInPaise": 151000,
        "stock": 22
      },
      {
        "size": "L",
        "color": "Black",
        "priceInPaise": 151000,
        "stock": 22
      },
      {
        "size": "XL",
        "color": "Red",
        "priceInPaise": 151000,
        "stock": 22
      }
    ],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sports Bra High Support 313",
    "slug": "sports-bra-high-support-313-7194",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 151500,
    "variants": [
      {
        "size": "S",
        "color": "Blue",
        "priceInPaise": 151500,
        "stock": 14
      },
      {
        "size": "M",
        "color": "Black",
        "priceInPaise": 151500,
        "stock": 14
      },
      {
        "size": "L",
        "color": "Red",
        "priceInPaise": 151500,
        "stock": 14
      },
      {
        "size": "XL",
        "color": "Red",
        "priceInPaise": 151500,
        "stock": 14
      }
    ],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Tracksuit Set 248",
    "slug": "tracksuit-set-248-7996",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 152000,
    "variants": [
      {
        "size": "S",
        "color": "Red",
        "priceInPaise": 152000,
        "stock": 14
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 152000,
        "stock": 14
      },
      {
        "size": "L",
        "color": "White",
        "priceInPaise": 152000,
        "stock": 14
      },
      {
        "size": "XL",
        "color": "Blue",
        "priceInPaise": 152000,
        "stock": 14
      }
    ],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Dry-Fit T-Shirt 185",
    "slug": "dry-fit-t-shirt-185-6893",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 152500,
    "variants": [
      {
        "size": "S",
        "color": "White",
        "priceInPaise": 152500,
        "stock": 28
      },
      {
        "size": "M",
        "color": "Blue",
        "priceInPaise": 152500,
        "stock": 28
      },
      {
        "size": "L",
        "color": "Blue",
        "priceInPaise": 152500,
        "stock": 28
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 152500,
        "stock": 28
      }
    ],
    "totalStock": 112,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Running Shorts 160",
    "slug": "running-shorts-160-1094",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 153000,
    "variants": [
      {
        "size": "S",
        "color": "Blue",
        "priceInPaise": 153000,
        "stock": 28
      },
      {
        "size": "M",
        "color": "Red",
        "priceInPaise": 153000,
        "stock": 28
      },
      {
        "size": "L",
        "color": "Red",
        "priceInPaise": 153000,
        "stock": 28
      },
      {
        "size": "XL",
        "color": "Red",
        "priceInPaise": 153000,
        "stock": 28
      }
    ],
    "totalStock": 112,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Compression Leggings 880",
    "slug": "compression-leggings-880-874",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 153500,
    "variants": [
      {
        "size": "S",
        "color": "Black",
        "priceInPaise": 153500,
        "stock": 29
      },
      {
        "size": "M",
        "color": "Blue",
        "priceInPaise": 153500,
        "stock": 29
      },
      {
        "size": "L",
        "color": "Blue",
        "priceInPaise": 153500,
        "stock": 29
      },
      {
        "size": "XL",
        "color": "Red",
        "priceInPaise": 153500,
        "stock": 29
      }
    ],
    "totalStock": 116,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sports Bra High Support 153",
    "slug": "sports-bra-high-support-153-7666",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 154000,
    "variants": [
      {
        "size": "S",
        "color": "White",
        "priceInPaise": 154000,
        "stock": 14
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 154000,
        "stock": 14
      },
      {
        "size": "L",
        "color": "Red",
        "priceInPaise": 154000,
        "stock": 14
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 154000,
        "stock": 14
      }
    ],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Tracksuit Set 120",
    "slug": "tracksuit-set-120-213",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 154500,
    "variants": [
      {
        "size": "S",
        "color": "Red",
        "priceInPaise": 154500,
        "stock": 36
      },
      {
        "size": "M",
        "color": "Black",
        "priceInPaise": 154500,
        "stock": 36
      },
      {
        "size": "L",
        "color": "Black",
        "priceInPaise": 154500,
        "stock": 36
      },
      {
        "size": "XL",
        "color": "Black",
        "priceInPaise": 154500,
        "stock": 36
      }
    ],
    "totalStock": 144,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Dry-Fit T-Shirt 283",
    "slug": "dry-fit-t-shirt-283-3056",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 155000,
    "variants": [
      {
        "size": "S",
        "color": "Blue",
        "priceInPaise": 155000,
        "stock": 34
      },
      {
        "size": "M",
        "color": "Black",
        "priceInPaise": 155000,
        "stock": 34
      },
      {
        "size": "L",
        "color": "Black",
        "priceInPaise": 155000,
        "stock": 34
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 155000,
        "stock": 34
      }
    ],
    "totalStock": 136,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Running Shorts 796",
    "slug": "running-shorts-796-1197",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 155500,
    "variants": [
      {
        "size": "S",
        "color": "White",
        "priceInPaise": 155500,
        "stock": 13
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 155500,
        "stock": 13
      },
      {
        "size": "L",
        "color": "White",
        "priceInPaise": 155500,
        "stock": 13
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 155500,
        "stock": 13
      }
    ],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Compression Leggings 105",
    "slug": "compression-leggings-105-5049",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 156000,
    "variants": [
      {
        "size": "S",
        "color": "Black",
        "priceInPaise": 156000,
        "stock": 14
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 156000,
        "stock": 14
      },
      {
        "size": "L",
        "color": "White",
        "priceInPaise": 156000,
        "stock": 14
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 156000,
        "stock": 14
      }
    ],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sports Bra High Support 517",
    "slug": "sports-bra-high-support-517-6944",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 156500,
    "variants": [
      {
        "size": "S",
        "color": "Black",
        "priceInPaise": 156500,
        "stock": 14
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 156500,
        "stock": 14
      },
      {
        "size": "L",
        "color": "Red",
        "priceInPaise": 156500,
        "stock": 14
      },
      {
        "size": "XL",
        "color": "Blue",
        "priceInPaise": 156500,
        "stock": 14
      }
    ],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Tracksuit Set 359",
    "slug": "tracksuit-set-359-3032",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 157000,
    "variants": [
      {
        "size": "S",
        "color": "White",
        "priceInPaise": 157000,
        "stock": 21
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 157000,
        "stock": 21
      },
      {
        "size": "L",
        "color": "Black",
        "priceInPaise": 157000,
        "stock": 21
      },
      {
        "size": "XL",
        "color": "Blue",
        "priceInPaise": 157000,
        "stock": 21
      }
    ],
    "totalStock": 84,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Dry-Fit T-Shirt 422",
    "slug": "dry-fit-t-shirt-422-6171",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 157500,
    "variants": [
      {
        "size": "S",
        "color": "Black",
        "priceInPaise": 157500,
        "stock": 13
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 157500,
        "stock": 13
      },
      {
        "size": "L",
        "color": "White",
        "priceInPaise": 157500,
        "stock": 13
      },
      {
        "size": "XL",
        "color": "Blue",
        "priceInPaise": 157500,
        "stock": 13
      }
    ],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Running Shorts 511",
    "slug": "running-shorts-511-8876",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 158000,
    "variants": [
      {
        "size": "S",
        "color": "Red",
        "priceInPaise": 158000,
        "stock": 13
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 158000,
        "stock": 13
      },
      {
        "size": "L",
        "color": "Red",
        "priceInPaise": 158000,
        "stock": 13
      },
      {
        "size": "XL",
        "color": "Black",
        "priceInPaise": 158000,
        "stock": 13
      }
    ],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Compression Leggings 507",
    "slug": "compression-leggings-507-4066",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 158500,
    "variants": [
      {
        "size": "S",
        "color": "Red",
        "priceInPaise": 158500,
        "stock": 25
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 158500,
        "stock": 25
      },
      {
        "size": "L",
        "color": "Blue",
        "priceInPaise": 158500,
        "stock": 25
      },
      {
        "size": "XL",
        "color": "Blue",
        "priceInPaise": 158500,
        "stock": 25
      }
    ],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sports Bra High Support 573",
    "slug": "sports-bra-high-support-573-3580",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 159000,
    "variants": [
      {
        "size": "S",
        "color": "Red",
        "priceInPaise": 159000,
        "stock": 28
      },
      {
        "size": "M",
        "color": "White",
        "priceInPaise": 159000,
        "stock": 28
      },
      {
        "size": "L",
        "color": "White",
        "priceInPaise": 159000,
        "stock": 28
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 159000,
        "stock": 28
      }
    ],
    "totalStock": 112,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Tracksuit Set 681",
    "slug": "tracksuit-set-681-8523",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - wear object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 159500,
    "variants": [
      {
        "size": "S",
        "color": "Blue",
        "priceInPaise": 159500,
        "stock": 29
      },
      {
        "size": "M",
        "color": "Blue",
        "priceInPaise": 159500,
        "stock": 29
      },
      {
        "size": "L",
        "color": "Blue",
        "priceInPaise": 159500,
        "stock": 29
      },
      {
        "size": "XL",
        "color": "White",
        "priceInPaise": 159500,
        "stock": 29
      }
    ],
    "totalStock": 116,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  }
]

export const sports_outdoor_products = [
{
    "title": "Camping Tent 2-Person 550",
    "slug": "camping-tent-2-person-550-7803",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 300000,
    "variants": [],
    "totalStock": 91,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Hiking Backpack 40L 792",
    "slug": "hiking-backpack-40l-792-2583",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 300500,
    "variants": [],
    "totalStock": 140,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sleeping Bag 921",
    "slug": "sleeping-bag-921-8640",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 301000,
    "variants": [],
    "totalStock": 62,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Trekking Pole 807",
    "slug": "trekking-pole-807-2688",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 301500,
    "variants": [],
    "totalStock": 86,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Portable Camping Stove 778",
    "slug": "portable-camping-stove-778-8256",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 302000,
    "variants": [],
    "totalStock": 139,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Camping Tent 2-Person 677",
    "slug": "camping-tent-2-person-677-4645",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 302500,
    "variants": [],
    "totalStock": 83,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Hiking Backpack 40L 470",
    "slug": "hiking-backpack-40l-470-9250",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 303000,
    "variants": [],
    "totalStock": 68,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sleeping Bag 711",
    "slug": "sleeping-bag-711-3157",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 303500,
    "variants": [],
    "totalStock": 84,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Trekking Pole 732",
    "slug": "trekking-pole-732-2296",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 304000,
    "variants": [],
    "totalStock": 128,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Portable Camping Stove 264",
    "slug": "portable-camping-stove-264-7918",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 304500,
    "variants": [],
    "totalStock": 119,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Camping Tent 2-Person 217",
    "slug": "camping-tent-2-person-217-404",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 305000,
    "variants": [],
    "totalStock": 129,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Hiking Backpack 40L 868",
    "slug": "hiking-backpack-40l-868-7446",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 305500,
    "variants": [],
    "totalStock": 140,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sleeping Bag 841",
    "slug": "sleeping-bag-841-524",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 306000,
    "variants": [],
    "totalStock": 113,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Trekking Pole 721",
    "slug": "trekking-pole-721-2518",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 306500,
    "variants": [],
    "totalStock": 81,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Portable Camping Stove 368",
    "slug": "portable-camping-stove-368-1264",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 307000,
    "variants": [],
    "totalStock": 132,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Camping Tent 2-Person 278",
    "slug": "camping-tent-2-person-278-1462",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 307500,
    "variants": [],
    "totalStock": 62,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Hiking Backpack 40L 344",
    "slug": "hiking-backpack-40l-344-1530",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 308000,
    "variants": [],
    "totalStock": 103,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Sleeping Bag 370",
    "slug": "sleeping-bag-370-9610",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 308500,
    "variants": [],
    "totalStock": 128,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Trekking Pole 852",
    "slug": "trekking-pole-852-3244",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 309000,
    "variants": [],
    "totalStock": 149,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  },
{
    "title": "Portable Camping Stove 693",
    "slug": "portable-camping-stove-693-3267",
    "description": "",
    "brand": "SnapBuy Basics",
    "category": "PUT Sports category objectID here",
    "subCategory": "PUT Sports category - outdoor object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 309500,
    "variants": [],
    "totalStock": 58,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 30,
      "width": 10,
      "height": 5,
      "unit": "cm"
    },
    "weight": {
      "value": 0.5,
      "unit": "kg"
    }
  }
]

export const sports_accessories_products = [
  {
    title: "Water Bottle",
    slug: "water-bottle",
    description: "Stay hydrated during your workouts with our durable and convenient Water Bottle. It's designed to be both leak-proof and easy to drink from. Crafted from high-quality, BPA-free plastic, it's lightweight and long-lasting. The flip-top lid with a secure lock makes it easy to open and close with one hand. A wide mouth makes it easy to add ice and clean, and it features a convenient carrying loop. This water bottle is the perfect choice for staying hydrated during workouts, a simple and affordable way to ensure you're getting enough water throughout the day.",
    brand: "Milton",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://www.milton.in/cdn/shop/files/Texture1024x1024.png?v=1735194226"
    ],
    basePriceInPaise: 49900,
    variants: [],
    totalStock: 100,
    rating: 4.0,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-12T10:42:00.000Z")
  },

  {
    title: "Protein Shaker",
    slug: "protein-shaker",
    description: "Mix your protein shakes and supplements with ease using our convenient and leak-proof Protein Shaker. It's designed to be both easy to use and easy to clean. Featuring a secure, screw-on lid and a snap-on cap to prevent leaks, it also includes a mixing ball to break up clumps and create a smooth shake. Crafted from high-quality, BPA-free plastic, it's durable and dishwasher-safe. This protein shaker is the perfect choice for a simple and effective way to mix your supplements, an essential part of any fitness routine.",
    brand: "MyProtein",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://zenithsports.in/cdn/shop/products/MainBanner.jpg?v=1632117877"
    ],
    basePriceInPaise: 69900,
    variants: [],
    totalStock: 100,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-19T09:18:00.000Z")
  },

  {
    title: "Gym Gloves",
    slug: "gym-gloves",
    description: "These gym gloves are designed to improve grip, comfort, and hand protection during weight training, functional workouts, and daily fitness routines. The padded palm construction helps reduce pressure on your hands while lifting heavier loads and performing repeated movements. Breathable fabric panels allow proper airflow and help keep sweat under control even during long training sessions. The adjustable wrist closure provides a secure and supportive fit for different hand sizes. Built for durability and regular use, these gloves are ideal for beginners and serious gym users who want safer, more confident and controlled training sessions.",
    brand: "Adidas",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444085/815gYa_O7eL_qfzpix.jpg"
    ],
    basePriceInPaise: 39900,
    variants: [],
    totalStock: 82,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-02T11:05:00.000Z")
  },

  {
    title: "Wrist Support Band",
    slug: "wrist-support-band",
    description: "This wrist support band is designed to provide firm and comfortable compression for everyday workouts, weight training and recovery sessions. The elastic fabric offers controlled support to help reduce strain and improve wrist stability during pushing and pulling exercises. Its lightweight and breathable design allows extended use without discomfort or overheating. The adjustable wrap closure ensures a secure and personalised fit for different wrist sizes. Ideal for gym training, sports practice and light rehabilitation, this support band helps improve confidence and protection while maintaining natural wrist movement throughout your fitness activities.",
    brand: "Nivia",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444120/New-3061-Multicolor-1_igwnja.jpg"
    ],
    basePriceInPaise: 24900,
    variants: [],
    totalStock: 113,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-05T08:26:00.000Z")
  },

  {
    title: "Headband",
    slug: "headband",
    description: "This sports headband is designed to keep sweat away from your face while providing a secure and comfortable fit during workouts, running and outdoor training. The soft stretch fabric absorbs moisture effectively and dries quickly to keep you focused on your activity. Its lightweight design reduces pressure around the head and remains stable even during intense movement. Suitable for gym sessions, yoga practice and team sports, this headband delivers everyday performance and durability. It is easy to wash, quick to dry and ideal for athletes looking for simple and reliable sweat control.",
    brand: "Nike",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444159/99120613z1_fgfxfm.jpg"
    ],
    basePriceInPaise: 25900,
    variants: [],
    totalStock: 139,
    rating: 4.1,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-07-28T07:50:00.000Z")
  },

  {
    title: "Shaker Bottle",
    slug: "shaker-bottle",
    description: "This shaker bottle is built for smooth and hassle free mixing of protein shakes, supplements and hydration drinks. The secure lid design helps prevent leaks while travelling to the gym or office. A mixing system inside the bottle improves blending and reduces unwanted clumps for a better drinking experience. Made using durable and food safe materials, it supports daily use and easy cleaning. The compact shape fits comfortably in most gym bags and cup holders. Ideal for fitness enthusiasts who need reliable performance, portability and convenience during busy training schedules.",
    brand: "BlenderBottle",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444200/BB_Web_24oz_SS_Strada_Blue_Turned_SC_aukdbf.png"
    ],
    basePriceInPaise: 69900,
    variants: [],
    totalStock: 71,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-10-10T12:34:00.000Z")
  },

  {
    title: "Skipping Rope",
    slug: "skipping-rope",
    description: "This skipping rope is designed for cardio training, warm ups and full body fitness routines. The lightweight cable construction enables fast and smooth rotations while helping improve coordination, endurance and agility. Comfortable handles provide a secure grip and reduce hand fatigue during extended workouts. The adjustable length allows users of different heights to set the rope according to their training needs. Suitable for home workouts, gym sessions and outdoor exercise, this rope supports fat burning and conditioning programs. It is a practical and portable fitness accessory for beginners and advanced athletes alike.",
    brand: "Cosco",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444257/Untitleddesign-2021-07-21T115002.050_n3avpn.jpg"
    ],
    basePriceInPaise: 29900,
    variants: [],
    totalStock: 90,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-03T06:41:00.000Z")
  },

  {
    title: "Yoga Mat",
    slug: "yoga-mat",
    description: "This yoga mat is designed to provide stable grip and cushioning for yoga, stretching and floor based fitness routines. The textured surface helps prevent slipping while maintaining balance during different poses and movements. Its supportive padding reduces pressure on joints and improves comfort during long practice sessions. Lightweight construction allows easy transport to studios, parks and home workouts. Durable materials help the mat retain shape even after repeated use. Ideal for beginners and experienced practitioners, this mat supports safe training and consistent performance during daily wellness and fitness activities.",
    brand: "Decathlon",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444291/ae00c368b78a895c019956ce70d5725b.jpg_720x720q80_cnopgt.jpg"
    ],
    basePriceInPaise: 59900,
    variants: [],
    totalStock: 75,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-22T09:57:00.000Z")
  },

  {
    title: "Resistance Band Set",
    slug: "resistance-band-set",
    description: "This resistance band set is designed to support strength training, rehabilitation and full body workouts. Multiple resistance levels allow gradual progression for beginners as well as challenging routines for advanced users. The flexible and durable material offers consistent tension and long lasting performance. Lightweight construction makes the set ideal for home workouts, travel and outdoor training sessions. Suitable for warm ups, muscle activation and mobility exercises, this band set helps improve flexibility and functional strength. It is a versatile fitness accessory for daily training, recovery programs and general conditioning routines.",
    brand: "Boldfit",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444348/Artboard1_5e1436d0-b1ba-471f-9af4-9ddb72ce23d3_s7wyob.jpg"
    ],
    basePriceInPaise: 29900,
    variants: [],
    totalStock: 85,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-07-15T10:12:00.000Z")
  },

  {
    title: "Sports Cap",
    slug: "sports-cap",
    description: "This sports cap is designed to provide comfort, ventilation and sun protection during outdoor training and daily fitness activities. The lightweight fabric allows proper airflow and helps keep your head cool during running, gym workouts and casual sports sessions. An adjustable strap ensures a secure and personalised fit for different head sizes. The structured design maintains shape even after repeated use. Suitable for athletes and active users, this cap supports everyday performance and practical style. It is an ideal accessory for workouts, travel and casual active wear throughout the year.",
    brand: "Puma",
    category: "PUT Sports category objectID here",
    subCategory: "PUT Sports category - accessories object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770444469/39300303_o_ehqzwt.jpg"
    ],
    basePriceInPaise: 35900,
    variants: [],
    totalStock: 70,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-11T13:29:00.000Z")
  }
];


export const books_academic_products = [
{
    "title": "Physics Textbook 938",
    "slug": "physics-textbook-938-8364",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 60000,
    "variants": [],
    "totalStock": 146,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Chemistry Guide 864",
    "slug": "chemistry-guide-864-5410",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 60500,
    "variants": [],
    "totalStock": 98,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Mathematics Practice 657",
    "slug": "mathematics-practice-657-7900",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 61000,
    "variants": [],
    "totalStock": 133,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "History of World 303",
    "slug": "history-of-world-303-8068",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 61500,
    "variants": [],
    "totalStock": 73,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Computer Science Basics 590",
    "slug": "computer-science-basics-590-79",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 62000,
    "variants": [],
    "totalStock": 93,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Physics Textbook 514",
    "slug": "physics-textbook-514-4458",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 62500,
    "variants": [],
    "totalStock": 68,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Chemistry Guide 146",
    "slug": "chemistry-guide-146-7373",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 63000,
    "variants": [],
    "totalStock": 117,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Mathematics Practice 372",
    "slug": "mathematics-practice-372-421",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 63500,
    "variants": [],
    "totalStock": 89,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "History of World 816",
    "slug": "history-of-world-816-4550",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 64000,
    "variants": [],
    "totalStock": 143,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Computer Science Basics 557",
    "slug": "computer-science-basics-557-8663",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 64500,
    "variants": [],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Physics Textbook 393",
    "slug": "physics-textbook-393-1360",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 65000,
    "variants": [],
    "totalStock": 78,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Chemistry Guide 134",
    "slug": "chemistry-guide-134-522",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 65500,
    "variants": [],
    "totalStock": 57,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Mathematics Practice 632",
    "slug": "mathematics-practice-632-7209",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 66000,
    "variants": [],
    "totalStock": 91,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "History of World 354",
    "slug": "history-of-world-354-8704",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 66500,
    "variants": [],
    "totalStock": 106,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Computer Science Basics 29",
    "slug": "computer-science-basics-29-5826",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 67000,
    "variants": [],
    "totalStock": 50,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Physics Textbook 385",
    "slug": "physics-textbook-385-1836",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 67500,
    "variants": [],
    "totalStock": 140,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Chemistry Guide 123",
    "slug": "chemistry-guide-123-9575",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 68000,
    "variants": [],
    "totalStock": 127,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Mathematics Practice 294",
    "slug": "mathematics-practice-294-4928",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 68500,
    "variants": [],
    "totalStock": 85,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "History of World 934",
    "slug": "history-of-world-934-7838",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 69000,
    "variants": [],
    "totalStock": 55,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Computer Science Basics 169",
    "slug": "computer-science-basics-169-4242",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - academic object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 69500,
    "variants": [],
    "totalStock": 120,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  }
]

export const books_fiction_products = [
  {
    title: "Mystery Novel",
    slug: "mystery-novel",
    description: "This mystery novel follows a gripping investigation that slowly uncovers hidden motives, personal secrets and unexpected connections between its characters. The story is driven by sharp dialogue, atmospheric settings and carefully paced twists that keep the reader engaged from the opening chapter to the final reveal. As the central mystery deepens, relationships are tested and long buried truths begin to surface. The narrative blends emotional depth with intelligent plotting, offering a satisfying reading experience for fans of modern crime and suspense fiction who enjoy character driven stories and complex, layered storytelling throughout the novel.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447111/9780593199336_rfcfxe.jpg"
    ],
    basePriceInPaise: 42500,
    rating: 4.2,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-21T10:24:00.000Z"),
    pages: 352
  },
  {
    title: "Sci Fi Adventure",
    slug: "sci-fi-adventure",
    description: "This science fiction adventure explores a future shaped by advanced technology, distant worlds and unexpected human choices. The story follows a group of characters who are forced to confront dangerous environments, political conflicts and moral dilemmas while navigating an unfamiliar universe. Fast paced action is balanced with thoughtful reflections on survival, loyalty and responsibility. Rich world building and imaginative concepts drive the narrative forward and keep readers immersed throughout the journey. This novel is ideal for readers who enjoy futuristic settings, character focused storytelling and high stakes exploration combined with emotional depth and suspense.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447149/9781101967621_rnfej2.jpg"
    ],
    basePriceInPaise: 43000,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-03T09:18:00.000Z"),
    pages: 384
  },
  {
    title: "Romance Bestseller",
    slug: "romance-bestseller",
    description: "This romance bestseller tells a heartfelt story of two individuals whose lives unexpectedly intersect during a turning point in their personal journeys. Through moments of vulnerability, emotional conflict and quiet connection, the characters slowly build trust and rediscover hope. The narrative focuses on personal growth, meaningful relationships and the courage required to move forward after difficult experiences. Warm dialogue and relatable situations make the story feel authentic and engaging. Perfect for readers who enjoy emotional storytelling, realistic romance and character driven plots that explore love, resilience and new beginnings in a thoughtful and uplifting way.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447179/81ilCcnwayL._AC_UF1000_1000_QL80__bklp3c.jpg"
    ],
    basePriceInPaise: 43500,
    rating: 4.3,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-07-29T11:42:00.000Z"),
    pages: 320
  },
  {
    title: "Thriller Suspense",
    slug: "thriller-suspense",
    description: "This thriller suspense novel delivers a tense and fast moving story built around danger, hidden agendas and unexpected betrayals. The plot follows a central character who becomes entangled in a high risk situation where every decision carries serious consequences. Sharp pacing and constant twists maintain pressure throughout the narrative and keep readers guessing until the final chapters. Emotional stakes and psychological tension strengthen the story and deepen the impact of every revelation. Ideal for fans of intense storytelling, this novel combines mystery, action and human drama into a gripping and unpredictable reading experience.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447217/9781835413319_z4rlno.jpg"
    ],
    basePriceInPaise: 44000,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-10T08:55:00.000Z"),
    pages: 368
  },
  {
    title: "Fantasy Epic",
    slug: "fantasy-epic",
    description: "This fantasy epic presents a richly imagined world filled with ancient powers, hidden kingdoms and characters destined for extraordinary journeys. The story follows heroes and unlikely allies as they face political conflict, magical threats and personal sacrifices that shape the fate of their world. Detailed environments and layered mythology bring depth to the narrative while emotional relationships ground the larger scale adventure. Themes of courage, loyalty and identity run throughout the novel. Perfect for readers who enjoy immersive fantasy, expansive storytelling and character driven plots that balance action, emotion and world building in equal measure.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447257/9781803366067_fkbvvr.jpg"
    ],
    basePriceInPaise: 44500,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-06T10:11:00.000Z"),
    pages: 512
  },
  {
    title: "Historical Fiction Novel",
    slug: "historical-fiction-novel",
    description: "This historical fiction novel brings a vividly detailed past to life through the experiences of characters navigating social change, conflict and personal struggle. The narrative carefully blends historical context with emotional storytelling to create an immersive reading experience. Through shifting relationships and difficult choices, the characters search for identity and stability during uncertain times. Rich descriptions and thoughtful pacing enhance the authenticity of the setting. This novel is well suited for readers who enjoy emotionally grounded stories set against meaningful historical backdrops, combining human drama with carefully researched environments and powerful narrative depth throughout the story.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447305/916FldXBpAL._AC_UL600_SR600_600__ptjqtr.jpg"
    ],
    basePriceInPaise: 45000,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-07-18T09:35:00.000Z"),
    pages: 336
  },
  {
    title: "Young Adult Fantasy Novel",
    slug: "young-adult-fantasy-novel",
    description: "This young adult fantasy novel follows a brave and curious protagonist who discovers hidden abilities and unexpected friendships while facing powerful forces beyond their control. The story explores themes of identity, belonging and courage as the characters learn to trust themselves and each other. Magical elements and imaginative settings create an engaging atmosphere, while emotional challenges keep the narrative relatable and grounded. The balance between adventure and personal growth makes this book appealing to a wide range of readers. It is an ideal choice for those who enjoy heartfelt fantasy stories with strong characters and meaningful journeys.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447359/9780593899168_kqum9h.jpg"
    ],
    basePriceInPaise: 45500,
    rating: 4.4,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-01T07:44:00.000Z"),
    pages: 304
  },
  {
    title: "Crime Investigation Novel",
    slug: "crime-investigation-novel",
    description: "This crime investigation novel follows an experienced investigator as they uncover a complex web of deception, hidden motives and carefully protected secrets. The narrative focuses on logical deduction, detailed questioning and the emotional impact of crime on both victims and investigators. Each chapter introduces new clues that reshape the understanding of the case and challenge earlier assumptions. The slow build of tension keeps readers engaged while offering thoughtful insight into justice and responsibility. Ideal for fans of procedural fiction, this novel blends realistic investigation techniques with character driven storytelling and compelling narrative progression.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447391/9780525535546_hhoamp.jpg"
    ],
    basePriceInPaise: 46000,
    rating: 4.5,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-12T11:02:00.000Z"),
    pages: 392
  },
  {
    title: "Dystopian Science Fiction Novel",
    slug: "dystopian-science-fiction-novel",
    description: "This dystopian science fiction novel portrays a tightly controlled society shaped by surveillance, technological control and rigid social structures. The story follows individuals who begin to question their roles and challenge the system that defines their lives. Emotional conflict, moral dilemmas and personal risk drive the narrative forward. Carefully constructed settings and social commentary add depth to the plot while maintaining strong narrative momentum. This novel is well suited for readers who enjoy thought provoking stories that explore freedom, resistance and human resilience in futuristic environments filled with tension and uncertainty throughout the journey.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447418/9780593497524_wjmykx.jpg"
    ],
    basePriceInPaise: 46500,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-09-14T10:38:00.000Z"),
    pages: 348
  },
  {
    title: "Contemporary Romance Novel",
    slug: "contemporary-romance-novel",
    description: "This contemporary romance novel explores modern relationships shaped by career pressures, personal ambitions and emotional vulnerability. The story follows two individuals navigating misunderstandings, personal growth and unexpected connections while learning to balance independence with emotional closeness. Natural dialogue and realistic situations make the characters relatable and engaging throughout the narrative. Themes of self discovery, trust and communication play a central role in the story’s development. This novel is ideal for readers who enjoy emotionally grounded romance set in present day life, focusing on meaningful connections and personal transformation through honest and heartfelt storytelling.",
    brand: "Penguin Random House",
    category: "PUT Books category objectID here",
    subCategory: "PUT Books category - fiction object ID here",
    images: [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1770447450/9780593498859_ptyvcf.jpg"
    ],
    basePriceInPaise: 47000,
    rating: 4.6,
    numReviews: 0,
    isActive: true,
    createdAt: new Date("2025-08-27T09:49:00.000Z"),
    pages: 328
  }
];


export const books_office_products = [
{
    "title": "A4 Printer Paper 672",
    "slug": "a4-printer-paper-672-5996",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 30000,
    "variants": [],
    "totalStock": 143,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Ball Pens Blue 923",
    "slug": "ball-pens-blue-923-8639",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 30500,
    "variants": [],
    "totalStock": 145,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Stapler Heavy Duty 501",
    "slug": "stapler-heavy-duty-501-1108",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 31000,
    "variants": [],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sticky Notes 400",
    "slug": "sticky-notes-400-7500",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 31500,
    "variants": [],
    "totalStock": 144,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "File Folder Organizer 208",
    "slug": "file-folder-organizer-208-2452",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 32000,
    "variants": [],
    "totalStock": 56,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "A4 Printer Paper 172",
    "slug": "a4-printer-paper-172-130",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 32500,
    "variants": [],
    "totalStock": 62,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Ball Pens Blue 669",
    "slug": "ball-pens-blue-669-9286",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 33000,
    "variants": [],
    "totalStock": 136,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Stapler Heavy Duty 502",
    "slug": "stapler-heavy-duty-502-7057",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 33500,
    "variants": [],
    "totalStock": 98,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sticky Notes 721",
    "slug": "sticky-notes-721-6852",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 34000,
    "variants": [],
    "totalStock": 111,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "File Folder Organizer 670",
    "slug": "file-folder-organizer-670-8438",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 34500,
    "variants": [],
    "totalStock": 118,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "A4 Printer Paper 897",
    "slug": "a4-printer-paper-897-8515",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 35000,
    "variants": [],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Ball Pens Blue 810",
    "slug": "ball-pens-blue-810-1919",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 35500,
    "variants": [],
    "totalStock": 83,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Stapler Heavy Duty 612",
    "slug": "stapler-heavy-duty-612-5709",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 36000,
    "variants": [],
    "totalStock": 59,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sticky Notes 793",
    "slug": "sticky-notes-793-7284",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 36500,
    "variants": [],
    "totalStock": 145,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "File Folder Organizer 694",
    "slug": "file-folder-organizer-694-9346",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 37000,
    "variants": [],
    "totalStock": 136,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "A4 Printer Paper 289",
    "slug": "a4-printer-paper-289-3003",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 37500,
    "variants": [],
    "totalStock": 129,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Ball Pens Blue 145",
    "slug": "ball-pens-blue-145-6000",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 38000,
    "variants": [],
    "totalStock": 122,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Stapler Heavy Duty 627",
    "slug": "stapler-heavy-duty-627-5811",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 38500,
    "variants": [],
    "totalStock": 53,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sticky Notes 636",
    "slug": "sticky-notes-636-3783",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 39000,
    "variants": [],
    "totalStock": 138,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "File Folder Organizer 651",
    "slug": "file-folder-organizer-651-8055",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - office object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 39500,
    "variants": [],
    "totalStock": 68,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  }
]

export const books_art_products = [
{
    "title": "Sketchbook A3 693",
    "slug": "sketchbook-a3-693-661",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 50000,
    "variants": [],
    "totalStock": 135,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Acrylic Paint Set 912",
    "slug": "acrylic-paint-set-912-8631",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 50500,
    "variants": [],
    "totalStock": 62,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Paint Brushes 177",
    "slug": "paint-brushes-177-5107",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 51000,
    "variants": [],
    "totalStock": 53,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Canvas Board 542",
    "slug": "canvas-board-542-6723",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 51500,
    "variants": [],
    "totalStock": 50,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Color Pencils 24 456",
    "slug": "color-pencils-24-456-8584",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 52000,
    "variants": [],
    "totalStock": 106,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sketchbook A3 842",
    "slug": "sketchbook-a3-842-2136",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 52500,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Acrylic Paint Set 296",
    "slug": "acrylic-paint-set-296-3116",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 53000,
    "variants": [],
    "totalStock": 92,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Paint Brushes 541",
    "slug": "paint-brushes-541-101",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 53500,
    "variants": [],
    "totalStock": 61,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Canvas Board 446",
    "slug": "canvas-board-446-8338",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 54000,
    "variants": [],
    "totalStock": 88,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Color Pencils 24 301",
    "slug": "color-pencils-24-301-9376",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 54500,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sketchbook A3 490",
    "slug": "sketchbook-a3-490-6406",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 55000,
    "variants": [],
    "totalStock": 119,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Acrylic Paint Set 600",
    "slug": "acrylic-paint-set-600-7499",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 55500,
    "variants": [],
    "totalStock": 124,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Paint Brushes 811",
    "slug": "paint-brushes-811-7027",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 56000,
    "variants": [],
    "totalStock": 98,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Canvas Board 1",
    "slug": "canvas-board-1-3720",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024"
    ],
    "basePriceInPaise": 56500,
    "variants": [],
    "totalStock": 117,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Color Pencils 24 797",
    "slug": "color-pencils-24-797-7612",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 57000,
    "variants": [],
    "totalStock": 95,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Sketchbook A3 621",
    "slug": "sketchbook-a3-621-619",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 57500,
    "variants": [],
    "totalStock": 52,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Acrylic Paint Set 368",
    "slug": "acrylic-paint-set-368-7782",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 58000,
    "variants": [],
    "totalStock": 65,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Paint Brushes 958",
    "slug": "paint-brushes-958-6699",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 58500,
    "variants": [],
    "totalStock": 142,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Canvas Board 155",
    "slug": "canvas-board-155-5888",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 59000,
    "variants": [],
    "totalStock": 105,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Color Pencils 24 683",
    "slug": "color-pencils-24-683-691",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - art object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 59500,
    "variants": [],
    "totalStock": 101,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  }
]

export const books_school_products = [
{
    "title": "Geometry Box 459",
    "slug": "geometry-box-459-6381",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 80000,
    "variants": [],
    "totalStock": 147,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "School Bag Waterproof 100",
    "slug": "school-bag-waterproof-100-7478",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 80500,
    "variants": [],
    "totalStock": 110,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Lunch Box Insulated 303",
    "slug": "lunch-box-insulated-303-2146",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 81000,
    "variants": [],
    "totalStock": 134,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Water Bottle Kids 310",
    "slug": "water-bottle-kids-310-8075",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg"
    ],
    "basePriceInPaise": 81500,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Notebook Ruled 527",
    "slug": "notebook-ruled-527-5566",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 82000,
    "variants": [],
    "totalStock": 97,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Geometry Box 685",
    "slug": "geometry-box-685-897",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg"
    ],
    "basePriceInPaise": 82500,
    "variants": [],
    "totalStock": 119,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "School Bag Waterproof 698",
    "slug": "school-bag-waterproof-698-2071",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 83000,
    "variants": [],
    "totalStock": 127,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Lunch Box Insulated 188",
    "slug": "lunch-box-insulated-188-4650",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 83500,
    "variants": [],
    "totalStock": 97,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Water Bottle Kids 35",
    "slug": "water-bottle-kids-35-2433",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144146/bluetooth-speaker-fkonqloSW5rgNnI42W53u864qTmlZO_hmlpet.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 84000,
    "variants": [],
    "totalStock": 71,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Notebook Ruled 1",
    "slug": "notebook-ruled-1-6253",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 84500,
    "variants": [],
    "totalStock": 59,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Geometry Box 360",
    "slug": "geometry-box-360-6075",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg"
    ],
    "basePriceInPaise": 85000,
    "variants": [],
    "totalStock": 119,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "School Bag Waterproof 456",
    "slug": "school-bag-waterproof-456-9645",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 85500,
    "variants": [],
    "totalStock": 83,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Lunch Box Insulated 16",
    "slug": "lunch-box-insulated-16-7393",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 86000,
    "variants": [],
    "totalStock": 109,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Water Bottle Kids 853",
    "slug": "water-bottle-kids-853-7214",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 86500,
    "variants": [],
    "totalStock": 131,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Notebook Ruled 378",
    "slug": "notebook-ruled-378-8436",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-MENS-WHITE-TEES-SUB-2048px-5935.jpg?auto=webp&quality=75&width=1024",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg"
    ],
    "basePriceInPaise": 87000,
    "variants": [],
    "totalStock": 85,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Geometry Box 543",
    "slug": "geometry-box-543-7024",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 87500,
    "variants": [],
    "totalStock": 90,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "School Bag Waterproof 286",
    "slug": "school-bag-waterproof-286-6198",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761144000/portable-ssd-1tb-0d5ECzoXdqA5M7WZkDeBTCVOLopEKQ_iix9fx.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143517/wireless-earbuds-pro-oKPqM9oN60Lib7jpOe92GqxI5egWdH_bv9q4z.jpg"
    ],
    "basePriceInPaise": 88000,
    "variants": [],
    "totalStock": 140,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Lunch Box Insulated 493",
    "slug": "lunch-box-insulated-493-7548",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/running-shoes-g0gyL1uiU320toVAxbwRNu5R8zkxF0.jpg"
    ],
    "basePriceInPaise": 88500,
    "variants": [],
    "totalStock": 53,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Water Bottle Kids 906",
    "slug": "water-bottle-kids-906-2554",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/products/backpack-T5L1l2mCl8tRSYRdojqa3JBdJZARZ5.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 89000,
    "variants": [],
    "totalStock": 81,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  },
{
    "title": "Notebook Ruled 79",
    "slug": "notebook-ruled-79-3364",
    "description": "",
    "brand": "Penguin Random House",
    "category": "PUT Books category objectID here",
    "subCategory": "PUT Books category - school object ID here",
    "images": [
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143299/smart-fitness-watch-jfrqIkFjNxfMz2FpRB5htLYKHhw8kY_jggtue.jpg",
      "https://res.cloudinary.com/dtrouncfb/image/upload/v1761143906/mechanical-keyboard-IXU7mTfsOdw9FvR7Fh3qpQULw0AP7R_adzvns.jpg"
    ],
    "basePriceInPaise": 89500,
    "variants": [],
    "totalStock": 86,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 20,
      "width": 15,
      "height": 2,
      "unit": "cm"
    },
    "weight": {
      "value": 0.3,
      "unit": "kg"
    }
  }
]

export const uncategorized_products = [
{
    "title": "Resistance Bands",
    "slug": "resistance-bands-2866",
    "description": "Add variety and intensity to your workouts with our versatile Resistance Bands. This set includes bands with different resistance levels, perfect for a wide range of exercises and fitness levels. Crafted from a high-quality, durable latex material, they are strong and flexible. Perfect for strength training, physical therapy, and stretching. The compact, lightweight design makes them easy to take on the go. This set is a simple and affordable way to build strength, improve flexibility, and achieve your fitness goals. These bands are sure to become an essential part of your fitness routine.",
    "brand": "SnapBuy Selection",
    "category": "PUT Sports category objectID here",
    "images": [
      "https://slovicfitness.com/cdn/shop/files/Blue_1024x1024.jpg?v=1703061610"
    ],
    "basePriceInPaise": 1999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 50,
      "width": 20,
      "height": 20,
      "unit": "cm"
    },
    "weight": {
      "value": 2,
      "unit": "kg"
    }
  },
{
    "title": "Jump Rope",
    "slug": "jump-rope-1747",
    "description": "Get your heart pumping and improve your coordination with our high-quality Jump Rope. Designed for speed and durability, it features a lightweight, adjustable cable and smooth-spinning ball bearings. The comfortable, ergonomic handles provide a secure grip. Its adjustable length makes it suitable for people of all heights. This jump rope is the perfect choice for anyone who wants a great cardio workout. It's a simple and affordable way to improve your fitness and burn calories. Whether you're a beginner or an experienced jumper, this jump rope is an essential part of any fitness routine.",
    "brand": "SnapBuy Selection",
    "category": "PUT Sports category objectID here",
    "images": [
      "https://www.bullrockfitness.com/wp-content/uploads/2024/12/1_Aluminium_Jump_Rope_self_Lock-1024x1024.jpg"
    ],
    "basePriceInPaise": 1499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 50,
      "width": 20,
      "height": 20,
      "unit": "cm"
    },
    "weight": {
      "value": 2,
      "unit": "kg"
    }
  },
{
    "title": "Fitness Tracker",
    "slug": "fitness-tracker-2743",
    "description": "Track your activity and monitor your health with our advanced Fitness Tracker. It's designed to help you achieve your fitness goals and live a healthier lifestyle. It tracks your steps, distance, calories burned, and active minutes, and also monitors your heart rate and sleep patterns. The tracker syncs with your smartphone to provide detailed data and insights. Its sleek, lightweight design is comfortable to wear all day and night, and the long-lasting battery provides up to 7 days of use. This fitness tracker is a simple and effective way to stay motivated and achieve your goals.",
    "brand": "SnapBuy Selection",
    "category": "PUT Sports category objectID here",
    "images": [
      "https://www.fabmart.com/cdn/shop/products/fitness-trackers-getactive-fitness-tracker-3_1024x1024.jpeg?v=1476774294"
    ],
    "basePriceInPaise": 9999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 50,
      "width": 20,
      "height": 20,
      "unit": "cm"
    },
    "weight": {
      "value": 2,
      "unit": "kg"
    }
  },
{
    "title": "Skipping Rope",
    "slug": "skipping-rope-8303",
    "description": "Get a great cardio workout with our durable and adjustable Skipping Rope. Designed for speed and performance, it features a lightweight, tangle-free cable and smooth-spinning ball bearings. The comfortable, ergonomic handles provide a secure grip. Its adjustable length makes it suitable for people of all heights. This skipping rope is the perfect choice for a great cardio workout, a simple and affordable way to improve your fitness and burn calories. Whether you're a beginner or an experienced jumper, this skipping rope is an essential part of any fitness routine.",
    "brand": "SnapBuy Selection",
    "category": "PUT Sports category objectID here",
    "images": [
      "https://www.bullrockfitness.com/wp-content/uploads/2024/12/1_Aluminium_Jump_Rope_self_Lock-1024x1024.jpg"
    ],
    "basePriceInPaise": 1699,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 50,
      "width": 20,
      "height": 20,
      "unit": "cm"
    },
    "weight": {
      "value": 2,
      "unit": "kg"
    }
  },
{
    "title": "Resistance Loop Bands",
    "slug": "resistance-loop-bands-7729",
    "description": "Add resistance to your workouts with our versatile Resistance Loop Bands. This set includes bands with different resistance levels, perfect for a wide range of exercises and fitness levels. Crafted from a high-quality, durable latex material, they are strong and flexible. Perfect for strength training, physical therapy, and stretching. The compact, lightweight design makes them easy to take on the go. This set is a simple and affordable way to build strength, improve flexibility, and achieve your fitness goals. These resistance loop bands are an essential part of any fitness routine.",
    "brand": "SnapBuy Selection",
    "category": "PUT Sports category objectID here",
    "images": [
      "https://commercial.torquefitness.com/cdn/shop/products/LBT9_main_1024x1024.jpg?v=1670362452"
    ],
    "basePriceInPaise": 1499,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 50,
      "width": 20,
      "height": 20,
      "unit": "cm"
    },
    "weight": {
      "value": 2,
      "unit": "kg"
    }
  },
{
    "title": "Massage Gun",
    "slug": "massage-gun-8928",
    "description": "Relieve muscle soreness and improve your recovery with our powerful and portable Massage Gun. It provides deep tissue massage, helping to reduce muscle tension and improve circulation. Featuring a powerful, high-torque motor and multiple speed settings, you can customize the intensity of your massage. It includes a variety of interchangeable heads to target different muscle groups. The lightweight, ergonomic design makes it easy to use. The long-lasting battery provides up to 3 hours of use on a single charge. This massage gun is the perfect choice for improving recovery and reducing muscle soreness.",
    "brand": "SnapBuy Selection",
    "category": "PUT Sports category objectID here",
    "images": [
      "https://healthsense.in/cdn/shop/files/Main_image_1024x1024.jpg?v=1719389910"
    ],
    "basePriceInPaise": 8999,
    "variants": [],
    "totalStock": 100,
    "rating": 0,
    "numReviews": 0,
    "isActive": true,
    "dimensions": {
      "length": 50,
      "width": 20,
      "height": 20,
      "unit": "cm"
    },
    "weight": {
      "value": 2,
      "unit": "kg"
    }
  }
]

// export const newProducts = [
//   ...fashion_men_products,
//   ...fashion_women_products,
//   ...fashion_kids_products,
//   ...fashion_footwear_products,
//   ...fashion_accessories_products,
//   ...electronics_mobiles_products,
//   ...electronics_laptops_products,
//   ...electronics_audio_products,
//   ...electronics_smart_products,
//   ...electronics_accessories_products,
//   ...home_furniture_products,
//   ...home_kitchen_products,
//   ...home_cookware_products,
//   ...home_decor_products,
//   ...home_storage_products,
//   ...beauty_skincare_products,
//   ...beauty_makeup_products,
//   ...beauty_hair_products,
//   ...beauty_grooming_products,
//   ...beauty_hygiene_products,
//   ...sports_gym_products,
//   ...sports_yoga_products,
//   ...sports_wear_products,
//   ...sports_outdoor_products,
//   ...sports_accessories_products,
//   ...books_academic_products,
//   ...books_fiction_products,
//   ...books_office_products,
//   ...books_art_products,
//   ...books_school_products,
//   ...uncategorized_products,
// ]

export const newProducts = [...books_fiction_products]