export default class Queue {
    private _queue;
    private _onEmptyCallback;
    private _active;
    constructor(onEmptyCallback: Function);
    /**
     * @param {function(Function)} func
     * @returns {Deferred}
     */
    queue(func: Function): void;
    private _progressQueue;
    clear(): void;
    next(): void;
}
//# sourceMappingURL=queue.d.ts.map