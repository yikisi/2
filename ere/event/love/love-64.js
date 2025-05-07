/**
 * @file 目白善信 - 爱慕
 * @author KUN
 */
const kojo = require('#/event/love/love-64.kojo');
const CustomizedLove = require('#/event/love/love-common');

module.exports = class extends CustomizedLove {
  async run(stage, extra_flag, event_object) {
    console.log(Object.keys(kojo));
    return await super.run(stage, extra_flag, event_object);
  }
};
