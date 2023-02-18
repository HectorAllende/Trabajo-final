import {promises as fs} from 'fs'

class ProductManager {
    constructor(){
        this.path = "./src/models/products.json"
    }

    readProducts = async () =>{
        let products = await fs.readFile(this.path, "utf-8")
        return JSON.parse(products)
    }

    writeProducts = async (product) =>{
        let productsOld = await this.readProducts()
        let productAll = [...productsOld, product]
        await fs.writeFile (this.path,JSON.stringify(productAll))
        return "Producto Agregado"
    };

    getProducts = async () =>{
        return await this.readProducts()
    }

}

export default ProductManager



