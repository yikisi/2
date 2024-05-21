const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');

module.exports = class extends CustomizedMec {
  get_train_buff() {
    const { debuff } = new MeekEduMarks();
    if (debuff) {
      return Math.floor(
        -debuff *
          Math.max(Math.min((era.get('relation:201:0') - 75) / 600, 1), 0.5),
      );
    }
    return 0;
  }
};
