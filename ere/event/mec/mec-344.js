const { set } = require('#/era-electron');

const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const MecNpc = require('#/event/mec/mec-npc');

module.exports = class extends MecNpc {
  init_love() {
    set(`love:${this.id}`, sys_personal_achievement.get(344) * 25);
  }
};
