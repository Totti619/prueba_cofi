import { Request, Response } from 'express'
import { ProductCheckoutCreator } from '../Contexts/Application/ProductCheckout/Create/ProductCheckoutCreator'
import ProductCheckoutDeletor from '../Contexts/Application/ProductCheckout/Delete/ProductCheckoutDeletor'
import ProductCheckoutFormatter from '../Contexts/Application/ProductCheckout/Format/ProductCheckoutFormatter'
import { ProductCheckoutScanner } from '../Contexts/Application/ProductCheckout/Scan/ProductCheckoutScanner'
import ProductCheckoutFinder from '../Contexts/Application/ProductCheckout/SearchAll/ProductCheckoutFinder'
import ProductCheckoutSearcher from '../Contexts/Application/ProductCheckout/SearchAll/ProductCheckoutSearcher'
import { ProductCheckoutUpdater } from '../Contexts/Application/ProductCheckout/Update/ProductCheckoutUpdater'
import { ProductCheckout } from '../Contexts/Domain/ProductCheckout/ProductCheckout'
import { JsonFileProductCheckoutRepository } from '../Contexts/Infrastructure/Persistence/JsonFileProductCheckoutRepository'
import { JsonFileProductRepository } from '../Contexts/Infrastructure/Persistence/JsonFileProductRepository'

const findProductCheckout = async (id: string): Promise<ProductCheckout> => {
    const finder = new ProductCheckoutFinder(new JsonFileProductCheckoutRepository())
    const productCheckout = await finder.run(id)
    return productCheckout
}

export const create = async (req: Request, res: Response) => {
    const { id } = req.body
    try {
        const foundProductCheckout = await findProductCheckout(id)
        if (foundProductCheckout) return res.json(foundProductCheckout.toPrimitives())
    } catch (e) {}
    try {
        const creator = new ProductCheckoutCreator(new JsonFileProductCheckoutRepository())
        const newProductCheckout = await creator.run(id)
        return res.json(newProductCheckout.toPrimitives())
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

export const read = async (req: Request, res: Response) => {
    try {
        const searcher = new ProductCheckoutSearcher(new JsonFileProductCheckoutRepository())
        const productCheckouts = await searcher.run()
        
        const formatter = new ProductCheckoutFormatter()
        const formatted = productCheckouts.map(p => formatter.run(p))
        return res.json(formatted)
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

export const remove = async (req: Request, res: Response) => {
    const { id } = req.params
    let foundProductCheckout: ProductCheckout
    try {
        foundProductCheckout = await findProductCheckout(id)
    } catch (e) {
        return res.json('✅')
    }
    try {
        const deletor = new ProductCheckoutDeletor(new JsonFileProductCheckoutRepository())
        await deletor.run(foundProductCheckout)
        return res.json('✅')
    } catch (e) {
        console.error(e)
        return res.status(500).json({ error: e.message })
    }
}

export const scan = async (req: Request, res: Response) => {
    const { id } = req.params
    const { code } = req.body
    let foundProductCheckout: ProductCheckout
    try {
        foundProductCheckout = await findProductCheckout(id)
    } catch (e) {
        return res.status(404).json({ message: 'Product checkout not found.' })
    }
    try {
        const scanner = new ProductCheckoutScanner(
            new JsonFileProductCheckoutRepository(),
            new JsonFileProductRepository(),
            foundProductCheckout
        )
        const productCheckout = await scanner.scan(code)
        const formatter = new ProductCheckoutFormatter()
        const formatted = formatter.run(productCheckout)
        return res.json(formatted)
    } catch (e) {
        console.error(e)
        return res.status(404).json({ message: 'Product not found.' })
    }
}
