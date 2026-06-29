const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:当前赛事')) {
      case race_enum.sats_sho:
      case race_enum.toky_yus:
      case race_enum.kiku_sho:
        return [35, 23].map((e) => new LegendUmaSelector(e, 1.1));
      case race_enum.tenn_spr:
      case race_enum.arim_kin:
        if (era.get('cflag:50:育成回合计时') > 96) {
          return [new LegendUmaSelector(23, 1.1)];
        }
    }
    return super.get_race_contestants(info);
  }

  get_talents() {
    return [
      {
        ...di18n.kojo.get_titled_content(this.id, 'swim_up'),
        color: get_chara_color(this.id),
      },
    ];
  }

  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, 'trainer');
    }
  }

  set_pseudo_uma(uma) {
    uma.attr_buffs.forEach((l) =>
      l.push(['+0.5%', i18n().kojo[this.id].swim_up]),
    );
  }
};
