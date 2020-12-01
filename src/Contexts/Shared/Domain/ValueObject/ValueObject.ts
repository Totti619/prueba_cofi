export abstract class ValueObject<T> {
    private _value: T

    constructor(value: T) {
        this._value = value
    }

    public value(): T {
        return this._value
    }

    public equals(o: ValueObject<T>): boolean {
        return this.value() === o.value()
    }

    valueOf() {
        return this.value
    }
}
