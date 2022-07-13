export enum KeyState {
  None,
  Pressed,
  Repeated,
  Released,
}

export interface Events {
  [button: string]: KeyState;
}

const events: Events = {};

export function GetEvents(): Events {
  return events;
}

export function KeyDown(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  if (events[key] == KeyState.Repeated) return;
  events[key] = KeyState.Pressed;
}

export function KeyUp(event: KeyboardEvent) {
  const key = event.key.toLowerCase();
  events[key] = KeyState.Released;
}
