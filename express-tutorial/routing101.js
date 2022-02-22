const express = require('express')
const app = express()
const { products, people } = require('./data.js')
const _ = require('lodash')

// app.get('/', (req, res) => { // outputs JSON on homepage, imported from data.js
//     res.json(products)
// })

app.get('/', (req, res) => {
    res.send(
        `<h1>Home Page</h1>
        <a href='/api/products'>Products</a>`
    )
})

// map specific keys from JSON data
app.get('/api/products', (req, res) => {
    const newProducts = products.map(product => {
        const { id, name, image } = product
        return { id, name, image }
    })
    res.json(newProducts)
})

// return a single key from JSON data
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find(product => product.id === 1)
    res.json(singleProduct)
})

// route parameters ':'
app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params);

    const { productID } = req.params
    const productData = products.find(
        product => product.id === _.toInteger(productID)
    )

    if(!productData) {
        return res.status(404).send('Product Does Not Exist')
    }

    console.log(productData)
    res.json(productData)
})

// complex route parameters
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello World')
})

// query results from search and output on page (i.e. query?search=a&limit=1)
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]
    if (search) {
        sortedProducts = sortedProducts.filter(product => {
            return product.name.startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts < 1) {
        // return res.status(200).send('No products matched your search')
        // or conventional use
        return res.status(200).json({ success: true, data: [] })
    } else {
        return res.status(200).json(sortedProducts)
    }
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})