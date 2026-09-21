const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { init_ero, set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedEro = require('#/event/ero/ero-common');
const masturbate = require('#/event/snippets/masturbate');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  async ero_start(h) {
    if (
      sys_check_awake(this.id) &&
      sys_check_awake(0) &&
      era.getCharactersInTrain().indexOf(this.id) !== -1 &&
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
      sys_check_awake(this.id) &&
      sys_check_awake(32) &&
      sys_check_awake(0) &&
      era.get(`love:${this.id}`) >= 90 &&
      era.get('love:32') >= 90 &&
      era.getCharactersInTrain().length === 2
    ) {
      const tachyon_marks = new TachyonLifeMarks();
      if (tachyon_marks.ntr_mark === 1) {
        tachyon_marks.ntr_mark = 2 + (tachyon_marks.betrayed >= 10);
        tachyon_marks.betrayed++;
        await print_title_with_kojo(
          i18n().kojo[32].ero,
          'betrayed1',
          get_chara_talk(32),
          get_chara_talk(this.id),
          get_chara_talk(0),
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(this.id, 0),
        );
        init_ero(32);
        await masturbate(32);
      } else if (
        tachyon_marks.ntr_mark === 3 &&
        era.get(`cflag:${this.id}:妊娠回合计时`) === 0 &&
        era.get('cflag:32:妊娠回合计时') === 0
      ) {
        tachyon_marks.ntr_mark = 4;
        const ret = await print_title_with_kojo(
          i18n().kojo[32].ero,
          'betrayed2',
          get_chara_talk(32),
          get_chara_talk(this.id),
          get_chara_talk(0),
          sys_get_colored_callname(32, 0),
          sys_get_colored_callname(32, this.id),
          sys_get_colored_callname(this.id, 0),
          sys_get_colored_callname(this.id, 32),
          sys_get_callname(0, 32),
          {
            ...di18n.tb_item.get_titled_item(103),
            color: buff_colors[2],
          },
        );
        era.add('item:「嫁衣」', 1);
        init_ero(32);
        if (ret[0] === 1) {
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(32, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(32, part_enum.virgin),
            false,
          );
        } else {
          set_palam_to_max(0, part_enum.penis);
          set_palam_to_max(this.id, part_enum.virgin);
          set_palam_to_max(32, part_enum.virgin);
          await quick_make_love(
            new EroParticipant(0, part_enum.penis),
            new EroParticipant(this.id, part_enum.virgin),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(0, part_enum.penis),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(this.id, part_enum.virgin),
            false,
          );
          await quick_make_love(
            new EroParticipant(32, part_enum.mouth),
            new EroParticipant(this.id, part_enum.foot),
            false,
          );
          era.set('talent:32:绿帽癖', 1);
        }
        global_achievement.c_tachyon1 = 1;
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
