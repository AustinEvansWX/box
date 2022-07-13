import { Events } from "./events.js";

interface Position {
  x: number;
  y: number;
}

interface Size {
  w: number;
  h: number;
}

export class GameObject {
  position: Position;
  size: Size;
  xVel: number = 0;
  yVel: number = 0;
  isGrounded: boolean = true;
  isCollidable: boolean = true;
  color: string;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    color: string = "white"
  ) {
    this.position = { x, y };
    this.size = { w, h };
    this.color = color;
  }

  Start() {}

  Update(events: Events) {}
}
