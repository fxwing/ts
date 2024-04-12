const ws: WeakSet<object> = new WeakSet([{}]);
// 不可以遍历 因为key可能被垃圾回收释放  不稳定
const wm: WeakMap<object, any> = new WeakMap();
