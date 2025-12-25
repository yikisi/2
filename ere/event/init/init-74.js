const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset || era.get('talent:74:圣母') !== 1) {
      CustomizedInit.init_chara(13);
      CustomizedInit.init_chara(27);
      CustomizedInit.init_chara(59);
      CustomizedInit.init_chara(64);
      CustomizedInit.init_chara(71);
      CustomizedInit.init_chara(86);
      era.set('talent:74:反感获取', -1);
      era.set('talent:74:痛苦感受', -1);
      era.set('talent:74:羞耻忍耐', -1);
      era.set('talent:74:坦率程度', 1);
      era.set('talent:74:圣母', 1);
      era.set('talent:74:喜欢痛苦', 1);
      era.set('talent:74:淫身', -4);
      // FLAGNAME:116 = 角色性别
      const is_man = era.get('flag:116') === 1;
      era.set('callname:74:2', `${100217 + is_man}`);
      era.set('callname:74:13', `${101317 + is_man}`);
      era.set('callname:74:27', `${102712 + is_man}`);
      era.set('callname:74:64', `${106413 + is_man}`);
      era.set('callname:74:71', `${107112 + is_man}`);
      era.set('callname:74:86', `${108614 + is_man}`);
    }
  }
};
