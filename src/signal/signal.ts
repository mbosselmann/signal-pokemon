// Global variable

let effectCallback: (() => void) | null = null;

// First we need to create the signal class

export class Signal<T> {
  private value: T;
  private subscribers: (() => void)[];

  constructor(initialValue: T) {
    this.value = initialValue;
    this.subscribers = [];
  }

  set(newValue: T) {
    if (newValue === this.value) {
      return;
    }
    this.value = newValue;
    this.subscribers.forEach((subscriber) => subscriber());
  }

  get() {
    if (effectCallback) {
      this.subscribers.push(effectCallback);
    }
    return this.value;
  }
}

// Create the effect function

export function createEffect(effectFn: () => void) {
  effectCallback = effectFn;
  effectFn();
  effectCallback = null;
}
