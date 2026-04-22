const Products = require('../models/products')

const insertProductSchema = async(req, res)=>{
    try{  const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];


    const result = await Products.insertMany(sampleProducts)
    if(result){
        res.status(201).json({
            success: true,
            message: `products has been inserted ${result.length}`
        })
    }

        

    }catch(error){
        console.log(error)
        res.status(400).json({
            success: false,
            message: `something went wrong! server error: ${error.message}`
        })

    }
}

module.exports = {insertProductSchema}