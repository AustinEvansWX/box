export class GameObject {
    constructor(x, y, w, h, color = 'white') {
        this.xVel = 0;
        this.yVel = 0;
        this.isGrounded = true;
        this.position = { x, y };
        this.size = { w, h };
        this.color = color;
    }
}
