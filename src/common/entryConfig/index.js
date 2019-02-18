import { Navigator } from '../navigator'

export default (Vue) => {

  // 如果是非线上环境，不加载 VConsole
  if (process.env.NODE_ENV !== 'production' && /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    var VConsole = require('vconsole/dist/vconsole.min.js');
    var vConsole = new VConsole();

    Vue.config.performance = true;
  }

  Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter;
}