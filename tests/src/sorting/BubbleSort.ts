import {BubbleSort} from "../../../src";
import Car from "../../helpers/sorting/Car";
import {CompareNotImplementedException} from "../../../src/exceptions";
import SortOrder from "../../../src/enums/SortOrder";

describe("Testing bubble sort on numbers", () => {
    const array: number[] = [];
    let sortedArray: number[];
    beforeAll(() => {
        for (let i = 0; i < 100; i++) {
            array.push(Math.ceil(Math.random() * 512));
        }
        sortedArray = array.sort((a, b) => a - b);
    });
    const sort = new BubbleSort();
    it("Should be able to sort in ascending order", () => {
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray);
    });
    it("Should be able to sort in descending order", () => {
        sort.order = SortOrder.DESC;
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
});

describe("Testing bubble sort on numbers in place", () => {
    const array: number[] = [];
    let sortedArray: number[];
    beforeAll(() => {
        for (let i = 0; i < 100; i++) {
            array.push(Math.ceil(Math.random() * 512));
        }
        sortedArray = array.sort((a, b) => a - b);
    });
    const sort = new BubbleSort();
    it("Should be able to sort in ascending order", () => {
        sort.sortInPlace(array);
        expect(array).toEqual(sortedArray);
    });
    it("Should be able to sort in descending order", () => {
        sort.order = SortOrder.DESC;
        sort.sortInPlace(array);
        expect(array).toEqual(sortedArray.reverse());
    });
});

describe("Testing bubble sort on floats", () => {
    const array: number[] = [];
    let sortedArray: number[];
    beforeAll(() => {
        for (let i = 0; i < 100; i++) {
            array.push(Math.random() * 512);
        }
        sortedArray = array.sort((a, b) => a - b);
    });
    const sort = new BubbleSort();
    it("Should be able to sort in ascending order", () => {
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray);
    });
    it("Should be able to sort in descending order", () => {
        sort.order = SortOrder.DESC;
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
});

describe("Testing bubble sort on strings", () => {
    const array: string[] = ["hello", "world"];
    let sortedArray: string[];
    beforeAll(() => {
        sortedArray = array.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    });
    const sort = new BubbleSort();
    it("Should be able to sort in ascending order", () => {
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray);
    });
    it("Should be able to sort in descending order", () => {
        sort.order = SortOrder.DESC;
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
});

describe("Testing bubble sort on strings", () => {
    const array: string[] = ["hello", "world"];
    let sortedArray: string[];
    beforeAll(() => {
        sortedArray = array.sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    });
    const sort = new BubbleSort();
    it("Should be able to sort in ascending order", () => {
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray);
    });
    it("Should be able to sort in descending order", () => {
        sort.order = SortOrder.DESC;
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
});

describe("Testing bubble sort on comparable", () => {
    const array: Car[] = [
        new Car(1, "one"),
        new Car(10, "ten"),
        new Car(2, "two"),
        new Car(4, "four"),
        new Car(7, "seven"),
        new Car(1, "one"),
        new Car(6, "six"),
    ];
    let sortedArray: Car[];
    beforeAll(() => {
        sortedArray = array.sort((a, b) => a.make === b.make ? 0 : a.make > b.make ? 1 : -1);
    });
    const sort = new BubbleSort();
    it("Should be able to sort in ascending order", () => {
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray);
    });
    it("Should be able to sort in descending order", () => {
        sort.order = SortOrder.DESC;
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
});

describe("Testing bubble sort on random with and without compare function", () => {
    const array: any[] = [
        {make: 1},
        {make: 7},
        {make: 2},
        {make: 9},
        {make: 0},
        {make: -1},
    ];
    let sortedArray: any[];
    beforeAll(() => {
        sortedArray = array.sort((a, b) => a.make === b.make ? 0 : a.make > b.make ? 1 : -1);
    });
    const sort = new BubbleSort(SortOrder.DESC);
    it("Should throw if compare function is not assigned", () => {
        expect(() => {
            sort.sort(array)
        }).toThrowError(new CompareNotImplementedException());
    });
    it("Should be able to sort in descending order after implementing the compare function", () => {
        sort.compareFunc((a, b) => a.make === b.make ? 0 : a.make > b.make ? 1 : -1);
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
    it("Should be able to sort in ascending order", () => {
        sort.order = SortOrder.ASC;
        const result = sort.sort(array);
        expect(result).toEqual(sortedArray.reverse());
    });
});
