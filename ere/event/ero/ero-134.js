/**
 * @file 机伶金花 - 调教
 * @author 无名黑奴
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { part_enum } = require('#/data/ero/part-const');
const { stain_enum } = require('#/data/ero/stain-const');
const CustomizedEro = require('#/event/ero/ero-common');
const { set_stain } = require('#/system/ero/sys-calc-stain');

module.exports = class extends CustomizedEro {
  async orgasm(bouquetd) {
    if (
      sys_check_awake(this.id) &&
      era.get(`cflag:${this.id}:性别`) !== 1 &&
      era.get(`talent:${this.id}:泌乳`) === 0 &&
      (era.get(`nowex:${this.id}:胸部高潮`) > 0 ||
        era.get(`nowex:${this.id}:阴道高潮`) > 0)
    ) {
      era.println();
      await bouquetd.say_and_wait('……欸？');
      await era.printAndWait([
        bouquetd.get_colored_name(),
        ' 的乳房喷出了星星点点的液体……',
      ]);
      await era.printAndWait([
        '余韵中的 ',
        bouquetd.get_colored_name(),
        ' 呆呆地看着初乳划过空气的轨迹……',
      ]);
      await era.printAndWait([
        bouquetd.get_colored_name(),
        ' 的胸部开始泌乳了……',
      ]);
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
