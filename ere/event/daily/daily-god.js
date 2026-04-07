const { add, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { i18n } = require('#/i18n/selector');

class DailyGod extends CustomizedDaily {
  async borrow_money() {
    const ret = await i18n().timon.god_shop.borrow_money(
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
    if (ret < 99) {
      add('flag:当前声望', -50 * ret);
      add('flag:当前马币', 400 * ret);
      sys_like_chara(this.id, 0, 25 * ret) && (await waitAnyKey());
    }
  }
}

module.exports = DailyGod;
