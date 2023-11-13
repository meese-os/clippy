export default class Balloon {
    private _targetEl;
    private _balloon?;
    private _content?;
    private _complete?;
    private _hiding;
    private _loop;
    private _hidden;
    private _active;
    private _hold;
    private _addWord;
    constructor(targetEl: HTMLElement);
    private _setup;
    reposition(): void;
    /**
     * @param side
     * @private
     */
    private _position;
    private _isOut;
    speak(complete: Function, text: string, hold: boolean): void;
    show(): void;
    hide(fast?: boolean): void;
    private _finishHideBalloon;
    private _sayWords;
    close(): void;
    pause(): void;
    resume(): void;
}
//# sourceMappingURL=balloon.d.ts.map