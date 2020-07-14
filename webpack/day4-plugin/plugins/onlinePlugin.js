class OnlinePlugin {
    constructor(option) {
        console.log('OnlinePlugin constructor called');
    }
    apply(compiler) {
      console.log('OnlinePlugin apply called');
    }
}
  
module.exports = OnlinePlugin;