/**
 * @file i18n 衍生 - 赛事相关
 * 可以理解为辅助 i18n 的工具函数组
 * 不需要任何修改或者翻译（也没有任何可以修改的地方）
 */
const { __, i18n } = require('#/i18n/selector');

const _race_def = {
  race: {
    get n_class() {
      const _ = i18n().race;
      return [_.g1, _.g2, _.g3, _.op, _.pre_op, _.spe];
    },
    get a_ground() {
      const _ = i18n().race;
      return [_.g_a_grass, _.g_a_dirt];
    },
    get a_distance() {
      const _ = i18n().race;
      return [_.d_a_short, _.d_a_mile, _.d_a_medium, _.d_a_long];
    },
    get a_style() {
      const _ = i18n().race;
      return [_.s_a_nige, _.s_a_senko, _.s_a_sashi, _.s_a_okimi];
    },
    get n_rotation() {
      const _ = i18n().race;
      return [_.r_left, _.r_right, _.r_straight];
    },
    get n_weather() {
      const _ = i18n().race;
      return [_.w_sunny, _.w_cloudy, _.w_rain, _.w_snow];
    },
    get n_mess() {
      const _ = i18n().race;
      return [_.m_well, _.m_semi, _.m_heavy, _.m_bad];
    },
    get_titled_result_summary: (race, win) => ({
      content: i18n()
        .race.summary_template.replace('%RACE%', race)
        .replace('%WIN%', win),
      title: i18n()
        .race.summary_tip_template.replace('%RACE%', race)
        .replace('%WIN%', win),
    }),
  },
  skill: {
    get n_type() {
      const _ = i18n().skill;
      return [_.n_t_buff, _.n_t_heal, _.n_t_speed, _.n_t_control, _.n_t_debuff];
    },
    get n_rarity() {
      const _ = i18n().skill;
      return [
        _.r_normal,
        _.r_advanced,
        _.r_spe,
        _.r_evol,
        _.r_cheat,
        _.r_ero_normal,
        _.r_ero_advanced,
      ];
    },
    get n_tag() {
      const _ = i18n().skill;
      return [
        _.t_speed,
        _.t_stamina,
        _.t_power,
        _.t_guts,
        _.t_wiz,
        _.t_startDash,
        _.t_tempPer,
        _.t_visible,
        _.t_targetSpeed,
        _.t_currentSpeed,
        _.t_accel,
        _.t_hpRate,
        _.t_temp,
        _.t_laneMove,
        _.t_ero,
        _.t_accelFull,
      ];
    },
  },
  inherit_shop: {
    get_price_info: (jid, cost, all) =>
      i18n().inherit_shop.get_price_info(__(`tb_param.jewel${jid}`), cost, all),
    get_price_info_additional: (jid, cost, you_cost, you_all) =>
      i18n().inherit_shop.get_price_info_additional(
        __(`tb_param.jewel${jid}`),
        cost,
        you_cost,
        you_all,
      ),
  },
  gene: {
    get gn_types() {
      const _ = i18n().gene;
      return [_.t_adapt, _.t_base, _.t_skill];
    },
    get gn_rarities() {
      const _ = i18n().gene;
      return [_.r_n, _.r_r, _.r_sr, _.r_ssr];
    },
  },
};

module.exports = _race_def;
