const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');

const {
  generate_common_dict,
} = require('#/event/snippets/generate-dictionary');

const { i18n } = require('#/i18n/selector');

async function anniversary() {
  if (era.get('flag:当前回合数') % 48 === 1) {
    // FLAGNAME:1 = 当前年
    const year = era.get('flag:1');
    let name;
    switch (year) {
      case 2010:
        name = 'TEN';
        break;
      case 2020:
        name = 'TWENTY';
        break;
      case 2030:
        name = 'THIRTY';
        break;
      case 2040:
        name = 'FORTY';
        break;
      case 2050:
        name = 'FIFTY';
    }
    if (name !== void 0) {
      era.drawLine();
      await i18n().timon.anniversary[name](generate_common_dict());
    }
    if (year >= 2009) {
      global_achievement.time_ten = 1;
    }
    if (year >= 2016) {
      global_achievement.time_twe = 1;
    }
    if (year >= 2021) {
      global_achievement.time_thr = 1;
    }
    if (year >= 2024) {
      global_achievement.time_for = 1;
    }
    if (year >= 2025) {
      global_achievement.time_fif = 1;
    }
  }
}

module.exports = anniversary;
