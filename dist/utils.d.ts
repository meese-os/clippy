export declare const getWindowScroll: () => {
    scrollLeft: number;
    scrollTop: number;
};
export declare function getOffset(element: HTMLElement): {
    top: number;
    left: number;
};
export declare function getWidth(el: HTMLElement, type: "inner" | "outer" | "width" | "full"): number | null;
export declare function getHeight(el: HTMLElement, type: "inner" | "outer" | "height" | "full"): number | null;
export declare class Deferred {
    promise: Promise<void>;
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
    constructor();
}
//# sourceMappingURL=utils.d.ts.map