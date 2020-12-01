import { Request, Response } from 'express'
import { ProductCreator } from '../Contexts/Application/Product/Create/ProductCreator'
import { ProductUpdater } from '../Contexts/Application/Product/Update/ProductUpdater'
import { JsonFileProductRepository } from '../Contexts/Infrastructure/Persistence/JsonFileProductRepository'
// DEBUG PURPOSES, REMOVE BEFORE DEPLOYING
import ProductFinder from '../Contexts/Application/Product/SearchAll/ProductFinder'
import { Product } from '../Contexts/Domain/Product/Product'
import ProductSearcher from '../Contexts/Application/Product/SearchAll/ProductSearcher'
import ProductDeletor from '../Contexts/Application/Product/Delete/ProductDeletor'

const findProduct = async (id: string): Promise<Product> => {
    const finder = new ProductFinder(new JsonFileProductRepository())
    const product = await finder.run(id)
    return product
}

export const create = async (req: Request, res: Response) => {
    const { id, code, name, price } = req.body
    try {
        const foundProduct = await findProduct(id)
        if (foundProduct) return res.json(foundProduct.toPrimitives())
    } catch (e) {}
    try {
        const creator = new ProductCreator(new JsonFileProductRepository())
        const newProduct = await creator.run(id, code, name, price)
        return res.json(newProduct.toPrimitives())
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

export const read = async (req: Request, res: Response) => {
    try {
        const searcher = new ProductSearcher(new JsonFileProductRepository())
        const products = await searcher.run()
        return res.json(products.map((product) => product.toPrimitives()))
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const { code, name, price } = req.body
    let foundProduct: Product
    try {
        foundProduct = await findProduct(id)
    } catch (e) {
        return res.status(404).json({
            message: 'Product not found',
            error: e.message
        })
    }
    try {
        const updater = new ProductUpdater(new JsonFileProductRepository())
        const updatedProduct = await updater.run(foundProduct, { code, name, price })
        return res.json(updatedProduct.toPrimitives())
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params
    let foundProduct: Product
    try {
        foundProduct = await findProduct(id)
    } catch (e) { return res.json('✅') }
    try {
        const deletor = new ProductDeletor(new JsonFileProductRepository())
        await deletor.run(foundProduct)
        return res.json('✅')
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}
