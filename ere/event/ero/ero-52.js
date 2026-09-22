const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[52];

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedEro {
  static CHECK = false;

  async zero_stamina(urara, me, callname) {
    await i18n().kojo[this.id].ero.zero_stamina(urara, me);
  }

  async prison(urara, me, callname, hook) {
    if (!era.get(`exp:${this.id}:监禁次数`)) {
      if (
        (await i18n().kojo[this.id].basement.first_prison(
          urara,
          get_chara_talk(this.id, chara_colors[1]),
          me,
          sys_get_colored_callname(this.id, 0),
        )) === 1
      ) {
        era.println();
        const relation_delta =
          era.get(`love:${this.id}`) * (era.get('flag:极端行为限制') || 1) -
          era.get(`relation:${this.id}:0`) +
          10;
        if (relation_delta > 0 && sys_like_chara(this.id, 0, relation_delta)) {
          await era.waitAnyKey();
        }
      } else {
        era.set(`exp:${this.id}:监禁次数`, 1);
        hook.override = true;
        era.println();
        sys_like_chara(this.id, 0, -get_random_value(75, 125)) &&
          (await era.waitAnyKey());
      }
    }
  }
};
