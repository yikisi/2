const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { recruit_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedEvent = require('#/event/event-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

class CustomizedRecruit extends CustomizedEvent {
  /**
   * @protected
   * @returns {Promise<boolean|void>}
   */
  async check_before_rec() {
    const chara = get_chara_talk(this.id);
    const ret = await select_yes_or_no(
      i18n().timon.recruit.get_check_message(chara),
      i18n().ui_yes,
      i18n().ui_cancel,
    );
    if (!ret) {
      era.print(i18n().timon.recruit.get_check_no_msg(chara));
      return true;
    }
  }

  /**
   * @param {number} stage
   * @param {EventObject} event_object
   * @returns {Promise<boolean|void>}
   */
  async recruit(stage, event_object) {
    if (await this.check_before_rec()) {
      return;
    }
    await i18n().timon.recruit.rec(get_chara_talk(this.id), get_chara_talk(0));
    // CFLAGNAME:66 = 招募状态
    era.set(`cflag:${this.id}:66`, recruit_flags.yes);
    await this.recruit_end();
  }

  /** @protected */
  async recruit_end() {
    era.println();
    await i18n().timon.recruit.rec_end(get_chara_talk(this.id));
  }

  async recruit_result() {
    // FLAGNAME:2 = 当前月
    if (era.get('flag:2') > 3) {
      // CFLAGNAME:48 = 育成回合计时
      era.set(`cflag:${this.id}:48`, 'x');
    }
    recruit_chara(this.id);
    const temp = sys_get_star_premium_draw();
    if (temp.chara === this.id) {
      temp.chara = 0;
      temp.cost += 40;
    }
    if (i18n().note[this.id]) {
      era.drawLine();
      if (await select_yes_or_no(i18n().nt_ask, i18n().ui_yes, i18n().nt_no)) {
        i18n().note[this.id].forEach((e) =>
          era.print(
            [
              { content: e[0], fontWeight: 'bold' },
              i18n().tk_speak_border[0],
              e[1],
              i18n().tk_speak_border[1],
            ],
            { color: get_chara_color(this.id) },
          ),
        );
        await era.waitAnyKey();
      }
    }
  }
}

module.exports = CustomizedRecruit;
