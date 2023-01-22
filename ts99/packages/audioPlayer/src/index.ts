// import Player from "./player/index";
import Player from 'player';
import { parse } from '@player/parser/parser';
import { audioId } from "audio";
import type { PlayStatus } from "./player/index";

const player = new Player({
  url: ''
});
player.play();

console.log(audioId);

if (__DEV__) {
  console.log('in development');
}
else {
  console.log('in production');
}

let name = 'suyan';
name.substring(0, 1);
