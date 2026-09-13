const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const SkyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-20');

const di18n = require('#/i18n/extended-def');

module.exports = class extends CustomizedMec {
  get_maxbase_buff() {
    return new SkyEduMarks().radiant * 50;
  }

  get_action_debuff() {
    const edu_marks = new SkyEduMarks();
    return 1 * edu_marks.jess - 0.05 * edu_marks.easy_go;
  }

  get_train_buff() {
    const edu_marks = new SkyEduMarks();
    return 100 * edu_marks.jess - 5 * edu_marks.easy_go;
  }

  get_status(show_train_buff) {
    if (show_train_buff) {
      const buffer = [];
      const edu_marks = new SkyEduMarks();
      const color = get_chara_color(this.id);
      if (edu_marks.radiant > 0) {
        buffer.push({
          ...di18n.kojo.get_titled_content(
            this.id,
            'radiant',
            edu_marks.radiant,
          ),
          color,
        });
      }
      if (edu_marks.easy_go > 0) {
        buffer.push({
          ...di18n.kojo.get_titled_content(
            this.id,
            'easy_go',
            edu_marks.easy_go,
          ),
          color,
        });
      }
      if (edu_marks.jess > 0) {
        buffer.push({
          ...di18n.kojo.get_titled_content(this.id, 'jess'),
          color,
        });
      }
      if (edu_marks.soft_be > 0) {
        buffer.push({
          ...di18n.kojo.get_titled_content(this.id, 'soft_be'),
          color,
        });
      }
      return buffer;
    }
    return super.get_status(show_train_buff);
  }

  is_train_enabled() {
    return !new SkyEduMarks().soft_be;
  }

  is_race_register_enabled() {
    return !new SkyEduMarks().soft_be;
  }
};
