const era = require('#/era-electron');

const CustomizedEro = require('#/event/ero/ero-common');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  cus_morning_sex(buffer, quick_into_sex) {
    buffer.push(async (sky) => {
      const { sex } = await print_title_with_kojo(
        i18n().kojo[this.id].ero,
        'with_you',
        sky,
        generate_dictionary(this.id),
      );
      if (sex === 1) {
        era.set(`status:0:沉睡`, 0);
        era.set(`status:${this.id}:沉睡`, 1);
        await quick_into_sex(this.id);
        era.set(`status:${this.id}:沉睡`, 0);
      }
    });
  }
};
