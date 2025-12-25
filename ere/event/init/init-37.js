const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && era.get('cflag:0:模版角色') !== 37) {
      era.set('callname:0:37', '103711');
    }
    new FlashEduMarks().train_with_festa = 1;
    era.set('status:37:虚弱', 0);
    era.set('status:37:荣耀德比', 0);
    era.set('status:37:必行之事', 0);
    era.set('status:37:分心', 0);
  }
};
