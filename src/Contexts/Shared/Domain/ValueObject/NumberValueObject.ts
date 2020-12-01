export abstract class NumberValueObject {
    readonly value: number

    constructor(value: number) {
        this.value = value
    }

    equalsTo(o: NumberValueObject): boolean {
        return this.value === o.value
    }

    isBiggerThan(o: NumberValueObject): boolean {
        return this.value > o.value
    }
}
