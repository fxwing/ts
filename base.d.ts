interface M {
    readonly name?: string;
    readonly age: number;
}
declare type M2<T> = {
    -readonly [key in keyof T]?: T[key];
};
declare const m2: M2<M>;
