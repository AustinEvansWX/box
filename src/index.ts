import { BACKGROUND, FRAME_RATE, HEIGHT, WIDTH } from "./config.js";
import { GetEvents, KeyDown, KeyState, KeyUp } from "./events.js";
import { GameObject } from "./gameObject.js";
import { Player } from "./player.js";
import { Renderer } from "./renderer.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

const GameObjects: GameObject[] = [];
const renderer = new Renderer(canvas, context);

Start();

function Start() {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const background = new GameObject(0, 0, WIDTH, HEIGHT, BACKGROUND);
  const player = new Player(0, 0, 50, 50, "#a3be8c");

  GameObjects.push(background);
  GameObjects.push(player);

  setInterval(Update, 1000 / FRAME_RATE);
}

function Update() {
  for (let object of GameObjects) {
    object.Update(GetEvents());
  }

  for (let object of GameObjects) {
    renderer.Draw(object);
  }

  const events = GetEvents();

  for (let key in events) {
    if (events[key] == KeyState.Pressed) {
      events[key] = KeyState.Repeated;
    }

    if (events[key] == KeyState.Released) {
      events[key] = KeyState.None;
    }
  }
}

document.body.addEventListener("keydown", KeyDown);
document.body.addEventListener("keyup", KeyUp);
