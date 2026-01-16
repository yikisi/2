const get_titled_content = require('#/i18n/get-titled-content');
const { i18n } = require('#/i18n/selector');

/** 基于 i18n 衍生的定义，不需要修改 */
const di18n = {
  get n_attr() {
    const _ = i18n();
    return [_.speed, _.endurance, _.strength, _.toughness, _.intelligence];
  },
  get n_base() {
    const _ = i18n();
    return [_.hp, _.tp];
  },
  get n_moti() {
    const _ = i18n();
    return [_.moti_0, _.moti_1, _.moti_2, _.moti_3, _.moti_4];
  },
  get n_adapt() {
    const _ = i18n();
    return [
      _.a_g_grass,
      _.a_g_dirt,
      _.a_d_short,
      _.a_d_mile,
      _.a_d_medium,
      _.a_d_long,
      _.a_s_nige,
      _.a_s_senko,
      _.a_s_sashi,
      _.a_s_okimi,
    ];
  },
  get n_style() {
    const _ = i18n();
    return [_.a_s_nige, _.a_s_senko, _.a_s_sashi, _.a_s_okimi];
  },
  get n_edu() {
    const _ = i18n();
    return [_.edu_0, _.edu_1, _.edu_2];
  },
  get n_oot() {
    const _ = i18n();
    return [_.oot_0, _.oot_1];
  },
  get train_buff_desc() {
    const _ = i18n();
    return [_.train_debuff, '', _.train_buff_1, _.train_buff_2];
  },
  get m_honour() {
    const _ = i18n();
    return [_.honour_0, _.honour_1, _.honour_2, _.honour_3, _.honour_4];
  },
  get n_title() {
    const _ = i18n();
    return [_.title_0, _.title_1, _.title_2, _.title_3];
  },
  get m_love() {
    const _ = i18n();
    return [
      _.love_0,
      _.love_1,
      _.love_2,
      _.love_3,
      _.love_4,
      _.love_5,
      _.love_6,
    ];
  },
  get m_relation() {
    const _ = i18n();
    return [
      _.relation_0,
      _.relation_1,
      _.relation_2,
      _.relation_3,
      _.relation_4,
      _.relation_5,
      _.relation_6,
      _.relation_7,
    ];
  },
  get n_skin() {
    const _ = i18n();
    return [_.skin_0, _.skin_1, _.skin_2, _.skin_3];
  },
  get n_penis() {
    const _ = i18n();
    return ['', _.penis_1, _.penis_2, _.penis_3, _.penis_4, _.penis_5];
  },
  get n_c_penis() {
    const _ = i18n();
    return [_.p_color_0, _.p_color_1, _.p_color_2];
  },
  get_money_content: (money) =>
    i18n().ui_money_template.replace('%MONEY%', money),
  get_date_indicator: (...args) =>
    i18n().ui_get_date(
      ...args.map((t) => ({ content: t, fontWeight: 'bold' })),
    ),
  get_date: (...args) =>
    i18n()
      .ui_get_date(...args)
      .join(''),
  get_multi_month: (month) =>
    i18n().ui_month_template.replace('%MONTH%', month),
  /**
   * @param {boolean} has_back_event
   * @param {boolean} has_event
   * @param {number} npc_count
   * @param {number} event_count
   */
  get_loc_tips(has_back_event, has_event, npc_count, event_count) {
    const _ = i18n();
    const ret = [];
    if (npc_count > 0) {
      ret.push(
        _.ui_loc_npc_tip_template.replace('%COUNT%', npc_count.toString()),
      );
    }
    if (has_back_event) {
      ret.push(_.ui_loc_back_tip);
    }
    if (has_event) {
      ret.push(_.ui_loc_event_tip);
    }
    if (event_count > 0) {
      ret.push(
        _.ui_loc_celebration_tip_template.replace(
          '%COUNT%',
          event_count.toString(),
        ),
      );
    }
    return ret.join('\n') || void 0;
  },
  achievement: {
    get n_type() {
      const _ = i18n().achievement;
      return [
        _.type_edu,
        _.type_race,
        _.type_love,
        _.type_sex,
        _.type_birth,
        _.type_end,
        _.type_all,
        _.type_hidden,
      ];
    },
    /**
     * @param {number} r
     * @returns {string}
     */
    get_rarity_name(r) {
      return i18n().achievement[`rarity_${r}`];
    },
    get n_platinum() {
      const _ = i18n().achievement;
      return [_.platinum_all];
    },
  },
  kojo: {
    get_titled_content: (ckey, ...args) =>
      get_titled_content(i18n().kojo[ckey], ...args),
  },
  timon: {
    get eds_slave() {
      const _ = i18n().timon;
      return [
        _.ed_saying_01,
        _.ed_saying_02,
        _.ed_saying_03,
        _.ed_saying_04,
        _.ed_saying_05,
      ];
    },
    get eds_crazy_fan() {
      const _ = i18n().timon;
      return [
        _.ed_saying_06,
        _.ed_saying_07,
        _.ed_saying_08,
        _.ed_saying_09,
        _.ed_saying_10,
      ];
    },
    get eds_hentai() {
      const _ = i18n().timon;
      return [
        _.ed_saying_11,
        _.ed_saying_12,
        _.ed_saying_13,
        _.ed_saying_02,
        _.ed_saying_04,
      ];
    },
    get eds_loser() {
      const _ = i18n().timon;
      return [
        _.ed_saying_02,
        _.ed_saying_06,
        _.ed_saying_09,
        _.ed_saying_10,
        _.ed_saying_13,
      ];
    },
  },
  item: {
    get_name(iid) {
      const _ = i18n().item;
      return _.template.replace('%NAME%', _[iid] || `item.${iid}`);
    },
    notify(iid) {
      return i18n().item.got_template.replace(
        '%INAME%',
        di18n.item.get_name(iid),
      );
    },
  },
  tb_mark: {
    get names() {
      const _ = i18n().tb_mark;
      return [_.n_pleasure, _.n_ero, _.n_meek, _.n_pain, _.n_shame, _.n_hate];
    },
    get abbr() {
      const _ = i18n().tb_mark;
      return [_.a_pleasure, _.a_ero, _.a_meek, _.a_pain, _.a_shame, _.a_hate];
    },
    get s_titles() {
      const _ = i18n().tb_mark;
      return [
        _.s_t_no,
        _.s_t_milk,
        _.s_t_pregnant,
        _.s_t_worker,
        _.s_t_inherit,
        _.s_t_furniture,
        _.s_t_assistant,
      ];
    },
    get s_options() {
      const _ = i18n().tb_mark;
      return [
        _.s_o_no,
        _.s_o_milk,
        _.s_o_pregnant,
        _.s_o_worker,
        _.s_o_inherit,
        _.s_o_furniture,
        _.s_o_assistant,
      ];
    },
    get s_descriptions() {
      const _ = i18n().tb_mark;
      return [
        _.s_d_no,
        _.s_d_milk,
        _.s_d_pregnant,
        _.s_d_worker,
        _.s_d_inherit,
        _.s_d_furniture,
        _.s_d_assistant,
      ];
    },
  },
  tb_stain: {
    get names() {
      const _ = i18n().tb_stain;
      return [
        _.n_dirt,
        _.n_saliva,
        _.n_wound,
        _.n_virgin,
        _.n_secretion,
        _.n_anal,
        _.n_semen,
        _.n_milk,
        _.n_lubricant,
        _.n_chocolate,
      ];
    },
  },
  inmon: {
    get_tip(pid, group, level, slot) {
      const _ = i18n().inmon;
      return _.tip_template
        .replace('%NAME%', _[pid])
        .replace('%GROUP%', _[group])
        .replace('%LEVEL%', level)
        .replace('%SLOT%', slot)
        .replace('%DESC%', i18n().inmon_desc[[pid]]);
    },
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
  race: {
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
    /** @returns {string[]} */
    get n_track() {
      const _ = i18n().race;
      return [
        _.t_sapporo,
        _.t_hakodate,
        _.t_niigata,
        _.t_fukushima,
        _.t_nakayama,
        _.t_tokyo,
        _.t_chukyo,
        _.t_kyoto,
        _.t_hanshin,
        _.t_kokura,
        _.t_ohi,
        _.t_kawasaki,
        _.t_funabashi,
        _.t_morioka,
        _.t_longchamp,
        _.t_santa_anita,
        _.t_st_cloud,
        _.t_chantilly,
        _.t_bashang,
        _.t_shatin,
        _.t_kentucky,
        _.t_baltimore,
        _.t_new_york,
        _.t_meydan,
      ];
    },
    get_track_name(track) {
      const _ = i18n().race;
      if (track >= 0) {
        return _.track_name_template.replace('%NAME%', di18n.n_track[track]);
      }
      return _.t_playground;
    },
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
      ];
    },
  },
};

module.exports = di18n;
