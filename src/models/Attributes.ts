import { UserProps } from './User';

export class Attributes<T> {
    constructor(private data: T) {}

    /**
     * @extends the keys of the generic type that is passed in into K as the type
     * @param key: K (K can only be a type from the generic T)
     */
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    };

    getAll(): T {
        return this.data;
    }

    set(update: T): void {
        /**
         * using Object assign allows us to utilise the approach of
         * passing in two objects. The properties of the second object
         * will be assigned to the first.
         */
        Object.assign(this.data, update);
    }
}

const attrs = new Attributes<UserProps>({
    id: 5,
    age: 20,
    name: 'zorro',
});

const name = attrs.get('name');
const age = attrs.get('age');
