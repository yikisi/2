const era = require('#/era-electron');

const { set_stain } = require('#/system/ero/sys-calc-stain');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');

const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  async orgasm(bouquetd) {
    if (
      sys_check_awake(this.id) &&
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      era.get(`talent:${this.id}:泌乳`) === 0 &&
      (era.get(`nowex:${this.id}:胸部高潮`) > 0 ||
        era.get(`nowex:${this.id}:阴道高潮`) > 0)
    ) {
      era.println();
      await i18n().kojo[this.id].ero['have_milk']({
        CHARA: bouquetd.name,
        COLOR: bouquetd.color,
      });
      era.set(`cflag:${this.id}:泌乳`, 3);
      era.set(
        `palam:${this.id}:胸部快感`,
        Math.floor(
          Math.min(
            era.get(`palam:${this.id}:胸部快感`),
            era.get(`tcvar:${this.id}:胸部快感上限`) / 2,
          ),
        ),
      );
      set_stain(this.id, part_enum.breast, stain_enum.milk);
      era.println();
    }
  }
};
