import { AgentWrapper } from "./types";
export interface AgentOptions {
    agent: AgentWrapper;
    selector?: string;
}
export default class Agent {
    private _queue;
    private _el;
    private _animator;
    private _balloon;
    private _hidden;
    private _idleDfd?;
    private _offset;
    private _dragUpdateLoop?;
    private _targetX?;
    private _targetY?;
    private _moveHandle?;
    private _upHandle?;
    constructor(options: AgentOptions);
    /**
     * @param {Number} x
     * @param {Number} y
     */
    gestureAt(x: number, y: number): boolean;
    /**
     * @param {Boolean=} fast
     */
    hide(fast: boolean, callback: () => void): void;
    moveTo(x: number, y: number, duration: number): void;
    private _playInternal;
    play(animation: any, timeout?: number, cb?: Function): boolean;
    /**
     * @param {Boolean=} fast
     */
    show(fast?: boolean): boolean | undefined;
    /**
     * @param {String} text
     */
    speak(text: string, hold?: boolean): void;
    /**
     * Close the current balloon
     */
    closeBalloon(): void;
    delay(time: number): void;
    /**
     * Skips the current animation
     */
    stopCurrent(): void;
    stop(): void;
    /**
     * @param {String} name
     * @returns {Boolean}
     */
    hasAnimation(name: string): boolean;
    /**
     * Gets a list of animation names
     * @return {Array.<string>}
     */
    animations(): string[];
    /**
     * Play a random animation
     * @return {Deferred}
     */
    animate(): any;
    /**************************** Utils ************************************/
    /**
     * @param {Number} x
     * @param {Number} y
     * @return {String}
     * @private
     */
    private _getDirection;
    /**************************** Queue and Idle handling ************************************/
    /**
     * Handle empty queue.
     * We need to transition the animation to an idle state
     * @private
     */
    private _onQueueEmpty;
    private _onIdleComplete;
    /**
     * Is the current animation state Idle?
     * @return {Boolean}
     * @private
     */
    private _isIdleAnimation;
    /**
     * Gets a random Idle animation
     * @return {String}
     * @private
     */
    private _getIdleAnimation;
    /**************************** Events ************************************/
    private _setupEvents;
    private _onDoubleClick;
    reposition(): void;
    private _onMouseDown;
    /**************************** Drag ************************************/
    private _startDrag;
    private _calculateClickOffset;
    private _updateLocation;
    private _dragMove;
    private _finishDrag;
    private _addToQueue;
    /**************************** Pause and Resume ************************************/
    pause(): void;
    resume(): void;
}
//# sourceMappingURL=agent.d.ts.map