// let num: number = 1;
// num = null;
// num = undefined;

// const a: bigint = 100n;
// const s: symbol = Symbol(10);
// const p: Promise<number> = Promise.resolve(1);
// console.log(typeof a, typeof s, typeof p);

// interface SearchPerson {
//   (x: number, y: number): string;
// }

// type Types = number | string;
// // function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// // function add(a: string, b: number): string;
// // function add(a: number, b: string): string;
// function add(a: Types, b: Types) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }
// const result = add("Semlinker", " Kakuqo");
// result.split(" ");

// let arr: readonly [number, boolean?] = [1, false];
// const [a, b] = arr;

// function err(msg: string): never {
//   //   throw new Error();
//   while (true) {}
// }
// let s: unknown = "1";
// s = 2;
// let n: number = 2;
// s = n;
// n = s;

// let n1: {};
// let n3!: object;
// n1 = n3;
// n3 = n1;
// // 全是true
// type is1 = {} extends object ? true : false;
// type is2 = object extends {} ? true : false;
// type is3 = Object extends {} ? true : false;
// type is4 = {} extends Object ? true : false;
// type is5 = Object extends object ? true : false;
// type is6 = object extends Object ? true : false;

// n1 = n3
// n3 = n1;
// n3 = null;
// let fn: func = () => {};
// fn = 2;

// let n2: object = {};
// n1 = n2; // 不能将对象类型分给原始类型
// n2 = n1;

// function add2(a: number, b = 1) {
//   return a + b;
// }

// add2(1, "1");

// {
//   let str: string = "this is string";
//   let num: number = 1;
//   let bool: boolean = true;
// }
// {
//   const str: string = "this is string";
//   const num: number = 1;
//   const bool: boolean = true;
// }

// const n = "2";
// const len: number = (<string>n).length;

// const obj = { x: 1, y: "a" } as const;

// type a = string & number; // never

// const obj: Record<string, any> = {};
// obj.__proto__ = { x: 1 };

// console.log(Reflect.has(obj, "x"));

// interface A {
//   x: { name: 1 };
// }
// interface B {
//   y: { name: string };
// }
// type C = A & B;
// const c: C = {
//   x: { name: 1 },
//   y: { name: "2" },
// };

// const a: ReadonlyArray<number> = [1];

// interface Mate {
//   name: string;
//   age?: number;
//   //   [key: string]: string | number | undefined;
// }

// const mate: Mate = {
//   name: "1",
//   age: 1,
//   gender: "male",
// } as Mate;

interface M {
  readonly name?: string;
  readonly age: number;
}

type M2<T> = {
  -readonly [key in keyof T]?: T[key];
};

const m2: M2<M> = {
  name: "1",
};

m2.name = "1";

type O = Record<string, any>;

type B = keyof any;

type S = keyof any;

/**
 * This function returns a promise that resolves to an array of values
 * that are present in the first array argument (arr1) but not in the second
 * array argument (arr2).
 *
 * The function works by first filtering the values in arr1 using the
 * async function includes, which returns a promise that resolves to a boolean.
 * The function then checks if the resolved promise is false, which means
 * the value was not found in arr2.
 *
 * The filtered values from arr1 are then returned in a promise.
 *
 * @template T The type of values in the arrays being compared.
 *
 * @param arr1 The first array to compare.
 * @param arr2 The second array to compare.
 *
 * @returns A promise that resolves to an array of values that are in arr1
 *          but not in arr2.
 */
const diff = async <T>(arr1: T[], arr2: T[]): Promise<T[]> => {
  const p = arr1.filter(async (x) => !(await arr2.includes(x)));
  return p;
};

const getRandomColor = () => "#" + Math.random().toString(16).slice(2, 8);

/**
 * Generate a random UUID (version 4)
 *
 * @returns A string in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
 * where each 'x' is a random hexadecimal digit, and each 'y' is one of
 * the digits 8, 9, A, or B.
 */
const getUUid = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (c: string) => {
      const r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }
  );
};
