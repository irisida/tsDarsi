type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[] } = {};

    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };

    trigger = (eventName: string): void => {
        /**
         * handlers may be an array, or may be undefined.
         * if the handlers are undefined or have a zero length we should return early
         * and when not undefined and length > 0 then traverse the array calling
         * each of the callbacks in the array.
         */
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach((callback) => {
            callback();
        });
    };
}
