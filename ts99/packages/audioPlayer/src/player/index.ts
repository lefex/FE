export interface PlayerOptions {
  url: string;
}

export enum PlayStatus {
  Playing = 'playing',
  Stop = 'stop'
}

export default class Player {
  options: PlayerOptions;
  status: PlayStatus;

  constructor(options: PlayerOptions) {
    this.options = options;

    console.log(defaultAudio);
    console.log(SpeedRatio);
  }

  play() {
    if (this.status === PlayStatus.Playing) {
      return;
    }

    this.status = PlayStatus.Playing;
  }
}