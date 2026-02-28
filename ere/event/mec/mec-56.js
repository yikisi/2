const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, motivation_colors } = require('#/data/color-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!super.set_callname_from_src()) {
      if (era.get('love:56') < 75) {
        return super.set_callname();
      }
      era.set('callname:56:0', [
        'trainer56',
        era.get('cflag:0:0') === 1 ? 'trainer_m' : 'trainer_f',
      ]);
    }
  }

  get_status(show_train_buff) {
    const ret = [];
    if (show_train_buff) {
      if (era.get('status:56:运势依赖')) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'dependency'),
          color: get_chara_color(this.id),
        });
      }
      if (era.get('status:56:大吉') > 0) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'daikichi'),
          color: motivation_colors.at(-1),
        });
      }
      if (era.get('status:56:中吉')) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'chuukichi'),
          color: motivation_colors.at(-2),
        });
      }
      if (era.get('status:56:小吉')) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'shoukichi'),
          color: motivation_colors.at(-3),
        });
      }
      if (era.get('status:56:凶')) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'kyou'),
          color: motivation_colors.at(-4),
        });
      }
      if (era.get('status:56:PTSD')) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'ptsd'),
          color: buff_colors[3],
        });
      }
      if (era.get('status:56:稳定')) {
        ret.push({
          ...di18n.kojo.get_titled_content(this.id, 'antei'),
          color: buff_colors[1],
        });
      }
    }
    return ret;
  }

  get_motivation_limit() {
    return -3 * era.get('status:56:PTSD');
  }

  get_success_rate_buff() {
    return (
      10 * era.get('status:56:大吉') +
      5 * era.get('status:56:中吉') +
      5 * era.get('status:56:小吉') -
      10 * era.get('status:56:凶') -
      10 * era.get('status:56:PTSD') +
      10 * era.get('status:56:稳定')
    );
  }

  get_train_buff() {
    return (
      5 * era.get('status:56:大吉') +
      5 * era.get('status:56:中吉') -
      10 * era.get('status:56:PTSD') +
      5 * era.get('status:56:稳定') -
      10 * era.get('status:56:凶')
    );
  }
  get_relation_buff() {
    return (
      5 * era.get('status:56:大吉') +
      10 * era.get('status:56:凶') +
      5 * era.get('status:56:稳定')
    );
  }

  set_pseudo_uma(uma) {
    if (era.get('status:56:PTSD') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['-10%', i18n().kojo[this.id].ptsd]),
      );
    }
    if (era.get('status:56:大吉') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['+5%', i18n().kojo[this.id].daikichi]),
      );
    }
    if (era.get('status:56:中吉') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['+3%', i18n().kojo[this.id].chuukichi]),
      );
    }
    if (era.get('status:56:小吉') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['+1%', i18n().kojo[this.id].shoukichi]),
      );
    }
    if (era.get('status:56:凶') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['-10%', i18n().kojo[this.id].kyou]),
      );
    }
    if (era.get('status:56:稳定') > 0) {
      uma.attr_buffs.forEach((l) =>
        l.push(['+5%', i18n().kojo[this.id].antei]),
      );
    }
  }
};
