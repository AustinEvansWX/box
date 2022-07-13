import { GameObject } from "./gameObject.js";
import { Renderer } from "./renderer.js";
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const WIDTH = 500;
const HEIGHT = 500;
const FRAME_RATE = 60;
const BACKGROUND = "#2e3440";
const renderer = new Renderer(canvas, context);
const background = new GameObject(0, 0, WIDTH, HEIGHT, BACKGROUND);
const player = new GameObject(0, 0, 50, 50, "#a3be8c");
const buttons = {};
Start();
function Start() {
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    setInterval(Update, 1000 / FRAME_RATE);
}
function Update() {
    renderer.Draw(background);
    renderer.Draw(player);
    player.position.x = Clamp(player.position.x + player.xVel, WIDTH - player.size.w, 0);
    player.position.y = Clamp(player.position.y + player.yVel, HEIGHT - player.size.h, 0);
    player.isGrounded = player.position.y == HEIGHT - player.size.h;
    player.yVel += player.isGrounded ? -player.yVel : 1;
}
function Clamp(num, max, min) {
    return Math.min(max, Math.max(min, num));
}
function KeyDown(event) {
    const key = event.key.toLowerCase();
    if (buttons[key])
        return;
    switch (key) {
        case " ":
            if (!player.isGrounded)
                break;
            player.yVel -= 20;
            break;
        case "a":
            player.xVel -= 5;
            break;
        case "d":
            player.xVel += 5;
            break;
    }
    buttons[key] = true;
}
function KeyUp(event) {
    const key = event.key.toLowerCase();
    if (!buttons[key])
        return;
    switch (key) {
        case "a":
            player.xVel -= -5;
            break;
        case "d":
            player.xVel -= 5;
            break;
    }
    delete buttons[key];
}
document.body.addEventListener("keydown", KeyDown);
document.body.addEventListener("keyup", KeyUp);
