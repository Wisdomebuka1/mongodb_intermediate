const Products = require("../models/Products");

const getProductsStats = async (req, res) => {
  try {
    const data = await Products.aggregate([
      {
        //stage 1

        $match: {
          inStock: true,
          price: {
            $gte: 100,
          },
        },
      },

      {
        //stage 2

        $group: {
          _id: "$category",

          count: {
            $sum: 1,
          },
        },
      },
    ]);

    if (data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "no product match the price!",
        product: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "prodouct fetched successfully!",
      product: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `something went wrong! server error: ${error.message}`,
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    const analysisProducts = await Products.aggregate([
      {
        $match: {
          category: "Electronics",
        },
      },

      {
        $group:{
           _id: null,
           totalRevenue:{$sum: '$price'},
           averagePrice:{$avg: '$price'},
           minProductsPrice:{$min: '$price'},
           maxProductsPrice:{$max: '$price'}

        }
      },

      {
        $project:{
          _id: 0,
          totalRevenue: 1,
          averagePrice: 1,
          minProductsPrice: 1,
          maxProductsPrice: 1,

          priceRange:{
             $subtract: ['$maxProductsPrice', '$minProductsPrice']
          }

        }
      }

    ]);

    if (analysisProducts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No electronics products found",
        products: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Category products of electronics found!",
      products: analysisProducts,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `something went wrong! server error: ${error.message}`,
    });
  }
};

const insertProduct = async (req, res) => {
  try {
    const sampleProducts = [
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
        name: "wrist watch",
        category: "Electronics",
        price: 20,
        inStock: false,
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

    if (!sampleProducts || sampleProducts.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No products to insert",
      });
    }

    const result = await Products.insertMany(sampleProducts);

    return res.status(201).json({
      success: true,
      message: `products has been inserted ${result.length}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: `something went wrong! server error: ${error.message}`,
    });
  }
};

module.exports = { insertProduct, getProductsStats, getProductAnalysis };
