/**
 * @file 目白光明 - 育成
 * @author KUN
 */
const kojo = require('#/event/edu/edu-74.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

module.exports = class extends CustomizedEdu {
  async train() {
    await kojo['train'](generate_dictionary(this.id, { call: !0 }));
  }
};
