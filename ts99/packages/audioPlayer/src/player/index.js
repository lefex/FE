export var PlayStatus;
(function (PlayStatus) {
    PlayStatus["Playing"] = "playing";
    PlayStatus["Stop"] = "stop";
})(PlayStatus || (PlayStatus = {}));
export default class Player {
    constructor(options) {
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
