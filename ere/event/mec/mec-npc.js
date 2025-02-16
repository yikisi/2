const { get } = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

class MecNpc extends CustomizedMec {
  is_able_to_be_selected() {
    return (
      get(`cflag:${this.id}:位置`) > 0 ||
      get(`cflag:${this.id}:育成回合计时`) < 3 * 48
    );
  }
}

module.exports = MecNpc;
