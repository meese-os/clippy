import { AgentWrapper } from "./types";
export default class Animator {
    static States: {
        WAITING: number;
        EXITED: number;
    };
    private _el;
    private _data;
    private _currentFrameIndex;
    private _path;
    private _exiting;
    private _currentFrame?;
    private _started;
    private _sounds;
    private _overlays;
    private _endCallback?;
    private _currentAnimation?;
    private _loop?;
    currentAnimationName: string | undefined;
    constructor(el: HTMLElement, config: AgentWrapper, sounds: Array<string>);
    private _setupElement;
    animations(): string[];
    preloadSounds(sounds: Array<string>): void;
    hasAnimation(name: string): boolean;
    exitAnimation(): void;
    showAnimation(animationName: string, stateChangeCallback: Function): boolean;
    private _draw;
    private _getNextAnimationFrame;
    private _playSound;
    private _atLastFrame;
    private _step;
    /**
     * Pause animation execution
     */
    pause(): void;
    /**
     * Resume animation
     */
    resume(): void;
}
//# sourceMappingURL=animator.d.ts.map