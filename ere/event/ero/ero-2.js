/** @type {KojoFile} */
const kojo = require('#/event/ero/ero-2.kojo');
const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');

module.exports = class extends CustomizedEro {
  async ero_start() {
    await kojo['ero_start'](generate_dictionary(this.id, { call: !0 }));
  }
};
