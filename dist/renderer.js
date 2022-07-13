export class Renderer {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }
    Draw(gameObject) {
        this.context.fillStyle = gameObject.color;
        this.context.fillRect(gameObject.position.x, gameObject.position.y, gameObject.size.w, gameObject.size.h);
    }
}
