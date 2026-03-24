const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');
const tachyon_betrayed_1 = require('#/event/ero/ero-lines-32/betrayed-1');
const tachyon_betrayed_2 = require('#/event/ero/ero-lines-32/betrayed-2');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  async ero_start(h) {
    if (
      sys_check_awake(25) &&
      sys_check_awake(0) &&
      era.getCharactersInTrain().indexOf(25) !== -1 &&
      era.getCharactersInTrain().indexOf(32) !== -1 &&
      sys_check_cuckold(32)
    ) {
      await i18n().kojo[this.id].ero.ero_start(
        get_chara_talk(this.id),
        sys_get_colored_callname(this.id, 0),
        sys_get_colored_callname(this.id, 32),
      );
    }
  }

  async ero_end(h) {
    if (
      sys_check_awake(25) &&
      sys_check_awake(32) &&
      sys_check_awake(0) &&
      era.get('love:25') >= 90 &&
      era.get('love:32') >= 90 &&
      era.getCharactersInTrain().length === 2
    ) {
      const life_marks = new TachyonLifeMarks();
      if (life_marks.ntr_mark === 1) {
        await tachyon_betrayed_1(life_marks);
      } else if (
        life_marks.ntr_mark === 3 &&
        era.get('cflag:25:妊娠回合计时') === 0 &&
        era.get('cflag:32:妊娠回合计时') === 0
      ) {
        await tachyon_betrayed_2(life_marks);
      }
    }
  }

  filter_in_rape() {
    if (era.get('flag:惩戒力度') >= 2) {
      return (a) =>
        a === ero_hooks.pet_breast ||
        (a >= ero_hooks.ask_tit_job && a <= ero_hooks.fuck_tit_and_mouth) ||
        (a >= ero_hooks.suck_nipple && a <= ero_hooks.ask_milk_and_hand_job);
    }
    return super.filter_in_rape();
  }
};
