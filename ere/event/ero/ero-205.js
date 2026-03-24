const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { set_palam_to_max } = require('#/system/ero/sys-prepare-ero');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const TreveLifeMarks = require('#/data/event/life-event-marks/life-event-marks-205');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  async ero_start(h) {
    const life_marks = new TreveLifeMarks();
    const treve = get_chara_talk(this.id);
    if (
      treve.sex_code === 0 &&
      !life_marks.slavery &&
      era.get('love:205') < 50 &&
      era.get('mark:205:欢愉') >= 2 &&
      era.get('mark:205:同心') >= 2 &&
      era.get('tcvar:205:发情') &&
      era.get('tflag:强奸') <= 0
    ) {
      life_marks.slavery = 1;
      await i18n().kojo[this.id].ero.ero_start(treve, get_chara_talk(0));
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.abuse),
        new EroParticipant(205, part_enum.masochism),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.body),
        false,
      );
    }
  }

  async ero_end(h) {
    const life_marks = new TreveLifeMarks();
    if (
      life_marks.slavery === 1 &&
      life_marks.slavery++ &&
      !era.get('tcvar:0:脱力')
    ) {
      era.drawLine();
      await i18n().kojo[this.id].ero.ero_end(
        get_chara_talk(this.id),
        get_chara_talk(0),
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.body),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.abuse),
        new EroParticipant(205, part_enum.masochism),
        false,
      );
      set_palam_to_max(205, part_enum.clitoris);
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.foot),
        new EroParticipant(205, part_enum.clitoris),
        false,
      );
    }
  }
};
