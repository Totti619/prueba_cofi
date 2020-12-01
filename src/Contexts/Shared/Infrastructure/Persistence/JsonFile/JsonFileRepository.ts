import fs from 'fs'
import { AggregateRoot } from "../../../Domain/AggregateRoot";

export abstract class JsonFileRepository<T extends AggregateRoot> {
    protected abstract filePath(): string

    protected data(): any {
        return JSON.parse(fs.readFileSync(this.filePath()).toString())
    }

    protected persist(key: string, aggregateRoot: T): void {
        let data: any = {}
        try {
            data = this.data()
        } catch (e) {}
        data[key] = aggregateRoot.toPrimitives()
        this.update(data)
    }

    protected delete(key: string): void {
        let data: any = {}
        try {
            data = this.data()
        } catch (e) {}
        delete data[key]
        this.update(data)
    }

    private update(data: any) {
        fs.writeFileSync(this.filePath(), JSON.stringify(data))
    }
}