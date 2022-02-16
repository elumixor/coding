export {};

declare global {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Array<T> {
        first: T;
        last: T;
        get isEmpty(): boolean;
        remove(element: T): void;
        // Removes an element at the specified index
        removeAt(index: number): void;
        // Inserts an element at the specified index
        insertAt(element: T, index: number): void;
    }
}

Object.defineProperty(Array.prototype, "first", {
    get(this: unknown[]) {
        return this[0];
    },
    set<T>(this: unknown[], value: T) {
        this[0] = value;
    },
});

Object.defineProperty(Array.prototype, "last", {
    get(this: unknown[]) {
        return this[this.length - 1];
    },
    set<T>(this: unknown[], value: T) {
        this[this.length - 1] = value;
    },
});

Object.defineProperty(Array.prototype, "isEmpty", {
    get(this: unknown[]) {
        return this.length < 1;
    },
});

Object.defineProperty(Array.prototype, "remove", {
    value(this: unknown[], element: unknown) {
        const index = this.indexOf(element);
        if (index < 0) {
            return;
        }
        this.splice(index, 1);
    },
    writable: false,
});
