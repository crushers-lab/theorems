import {IComparable, ComparisionResult} from "../../../src/interfaces/IComparable";

class Car implements IComparable {

    public make: number;
    public name: string;

    constructor(make: number, name: string) {
        this.make = make;
        this.name = name;
    }

    compareTo(value: Car): ComparisionResult {
        return this.make === value.make ? 0 : this.make > value.make ? 1 : -1;
    }
}

export default Car;
