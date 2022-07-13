import { HEIGHT, WIDTH } from "./config.js";
import { Events, KeyState } from "./events.js";
import { GameObject } from "./gameObject.js";
import { Clamp } from "./utils.js";

export class Player extends GameObject {
  Start() {}

  Update(events: Events) {
    if (events[" "] == KeyState.Pressed && this.isGrounded) {
      this.yVel -= 20;
    }

    if (events["a"] == KeyState.Pressed) {
      this.xVel -= 5;
    }

    if (events["d"] == KeyState.Pressed) {
      this.xVel += 5;
    }

    if (events["a"] == KeyState.Released) {
      this.xVel -= -5;
    }

    if (events["d"] == KeyState.Released) {
      this.xVel -= 5;
    }

    this.position.x = Clamp(
      this.position.x + this.xVel,
      WIDTH - this.size.w,
      0
    );
    this.position.y = Clamp(
      this.position.y + this.yVel,
      HEIGHT - this.size.h,
      0
    );

    this.isGrounded = this.position.y == HEIGHT - this.size.h;
    this.yVel += this.isGrounded ? -this.yVel : 1;
  }
}
