import { GameObject } from "./gameObject.js";

export class Renderer {
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.context = context;
    }

    Draw(gameObject: GameObject) {
        this.context.fillStyle = gameObject.color;
        this.context.fillRect(gameObject.position.x, gameObject.position.y, gameObject.size.w, gameObject.size.h);
    }
}
