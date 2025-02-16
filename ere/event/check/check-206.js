const era = require('#/era-electron');

const CustomizedCheck = require('#/event/check/check-common');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedCheck {
  check_next_week() {
    if (era.get('cflag:206:随机招募') < 0 && era.get('flag:当前声望') >= 1000) {
      era.set('cflag:206:随机招募', 1);
      era.print([
        '据说有 ',
        { color: get_chara_color(this.id), content: '一名优秀的法国幼驹' },
        ' 已经准备来到中央交流，也许可以在训练场遇到……',
      ]);
    }
    super.check_next_week();
  }

  is_prison() {
    if (era.get('cflag:206:招募状态') !== recruit_flags.yes) {
      return false;
    }
    return super.is_prison();
  }

  is_rape_in_sleeping() {
    if (era.get('cflag:206:招募状态') !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};
