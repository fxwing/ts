// 发布订阅  ts  实现

interface EventEmitter {
  events: Map<string, any>;
  on(type: string, callback: Function): void;
  emit(type: string, ...args: any[]): void;
  off(type: string, callback: Function): void;
  once(type: string, callback: Function): void;
}

class Emitter implements EventEmitter {
  events: Map<string, any>;
  constructor() {
    this.events = new Map();
  }
  on(type: string, callback: Function) {
    if (this.events.has(type)) {
      const arr = this.events.get(type);
      arr.push(callback);
    } else {
      this.events.set(type, [callback]);
    }
  }
  emit(type: string, ...args: any[]) {
    if (this.events.has(type)) {
      const arr = this.events.get(type);
      arr.forEach((callback) => {
        callback(...args);
      });
    }
  }
  off(type: string, callback: Function) {
    if (this.events.has(type)) {
      const arr = this.events.get(type);
      arr.forEach((item, index) => {
        if (item === callback) {
          arr.splice(index, 1);
        }
      });
    }
  }
  once(type: string, callback: Function) {
    this.on(type, (...args: any[]) => {
      callback(...args);
      this.off(type, callback);
    });
  }
}
