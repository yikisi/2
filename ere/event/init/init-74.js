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
      if (era.get('flag:角色性别') === 1) {
        era.set('callname:74:2', '铃鹿先生');
        era.set('callname:74:13', '麦昆哥哥');
        era.set('callname:74:27', '莱恩哥哥');
        era.set('callname:74:64', '善信哥哥');
        era.set('callname:74:71', '阿尔丹哥哥');
        era.set('callname:74:86', '高峰哥哥');
      } else {
        era.set('callname:74:2', '铃鹿小姐');
        era.set('callname:74:13', '麦昆姐姐');
        era.set('callname:74:27', '莱恩姐姐');
        era.set('callname:74:64', '善信姐姐');
        era.set('callname:74:71', '阿尔丹姐姐');
        era.set('callname:74:86', '高峰姐姐');
      }
    }
  }
};
