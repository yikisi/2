const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');
const { transform } = require('#/event/snippets/101700');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      CustomizedInit.init_chara(9017);
      era.set('callname:9017:0', 'trainer17');
      era.set('relation:9017:0', -95);
      era.set('status:17:自毁', 1);
      era.set('status:17:迷恋', 1);
      era.set('status:9017:皇帝', 1);
      era.set('status:9017:心术', 1);
      if (era.get('cflag:0:模版角色') !== 17) {
        era.set('callname:0:17', '101702');
        era.set('callname:0:9017', '101715');
      }
    } else if (era.get('status:17:皇帝') > 0) {
      const edu_marks = new LunaEduMarks();
      edu_marks.emperor = 1;
      transform(edu_marks);
      era.set('callname:17:-1', era.set('callname:17:-2', '101702'));
    }
    era.set('status:17:精神损伤', 0);
    era.set('status:17:神经衰弱', 0);
    era.set('status:17:领域', 0);
  }
};
