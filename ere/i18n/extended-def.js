/**
 * @file i18n 衍生
 * 可以理解为辅助 i18n 的工具函数组
 * 不需要任何修改或者翻译（也没有任何可以修改的地方）
 */
const get_titled_content = require('#/i18n/get-titled-content');
const { __, i18n, lan } = require('#/i18n/selector');

/**
 * @typedef CostInfo
 * @property {number} mark
 * @property {number} [stamina]
 * @property {number} [time]
 * @property {number} [ctime]
 */

/**
 * @param {string[]} ret
 * @param {CostInfo} cost_info
 * @param {I18nEntry} _
 */
function fill_cost_info(ret, cost_info, _) {
  if (!cost_info) {
    return;
  }
  if ((cost_info.mark & 0b1) > 0) {
    ret.push(
      _.ui_cost_you_stamina_tip_template.replace(
        '%STAMINA%',
        Math.ceil(cost_info.stamina).toLocaleString(lan()),
      ),
    );
  }
  if ((cost_info.mark & 0b10) > 0) {
    ret.push(
      _.ui_cost_you_time_tip_template.replace(
        '%TIME%',
        Math.ceil(cost_info.time).toLocaleString(lan()),
      ),
    );
  }
  if ((cost_info.mark & 0b100) > 0) {
    ret.push(
      _.ui_cost_chara_stamina_tip_template.replace(
        '%STAMINA%',
        Math.ceil(cost_info.stamina).toLocaleString(lan()),
      ),
    );
  }
  if ((cost_info.mark & 0b1000) > 0) {
    ret.push(
      _.ui_cost_chara_time_tip_template.replace(
        '%TIME%',
        Math.ceil(cost_info.ctime || cost_info.time).toLocaleString(lan()),
      ),
    );
  }
}

const di18n = {
  get n_attr() {
    const _ = i18n();
    return [_.speed, _.endurance, _.strength, _.toughness, _.intelligence];
  },
  get n_base() {
    const _ = i18n();
    return [_.hp, _.tp];
  },
  get n_mot() {
    const _ = i18n();
    return [_.mot_0, _.mot_1, _.mot_2, _.mot_3, _.mot_4];
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
  get n_ground() {
    const _ = i18n();
    return [_.a_g_grass, _.a_g_dirt];
  },
  get n_dis() {
    const _ = i18n();
    return [_.a_d_short, _.a_d_mile, _.a_d_medium, _.a_d_long];
  },
  get n_style() {
    const _ = i18n();
    return [_.a_s_nige, _.a_s_senko, _.a_s_sashi, _.a_s_okimi];
  },
  get n_edu() {
    const _ = i18n();
    return [_.edu_0, _.edu_1, _.edu_2];
  },
  get a_edu() {
    const _ = i18n();
    return [_.a_edu_0, _.a_edu_1, _.a_edu_2];
  },
  get n_oot() {
    const _ = i18n();
    return [_.oot_0, _.oot_1];
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
  get_too_long: (width) =>
    i18n()
      .ui_too_long_template.replace('%WIDTH%', width.toString())
      .replace('%WIDTH*2%', (width * 2).toString()),
  get ui_select_order_marks() {
    const [m_down, m_up] = i18n().ui_select_order_marks;
    return { '-1': m_down, 0: '', 1: m_up };
  },
  /**
   * @param {boolean} has_event
   * @param {CostInfo} [cost_info]
   * @param {string} [additional]
   */
  get_act_tip(has_event, cost_info, ...additional) {
    const ret = [];
    if (has_event) {
      ret.push(i18n().ui_act_event_tip);
    }
    additional.forEach((add) => add && ret.push(add));
    fill_cost_info(ret, cost_info, i18n());
    return ret.join('\n') || void 0;
  },
  get_activity_filter: (template, is_on) =>
    template.replace('%STATUS%', is_on ? i18n().ui_on : i18n().ui_off),
  /**
   * @param {boolean} has_back_event
   * @param {boolean} has_event
   * @param {number} npc_count
   * @param {number} event_count
   * @param {{mark:number,stamina:number,time:number}} cost_info
   * @param {string} [additional]
   */
  get_loc_tips(
    has_back_event,
    has_event,
    npc_count = 0,
    event_count = 0,
    cost_info,
    ...additional
  ) {
    const _ = i18n();
    const ret = [];
    if (npc_count > 0) {
      ret.push(
        _.ui_loc_npc_tip_template.replace('%COUNT%', npc_count.toString()),
      );
    }
    if (has_event) {
      ret.push(_.ui_loc_event_tip);
    }
    if (has_back_event) {
      ret.push(_.ui_loc_back_tip);
    }
    if (event_count > 0) {
      ret.push(
        _.ui_loc_celebration_tip_template.replace(
          '%COUNT%',
          event_count.toString(),
        ),
      );
    }
    additional.forEach((add) => add && ret.push(add));
    fill_cost_info(ret, cost_info, _);
    return ret.join('\n') || void 0;
  },
  get race_result_statistics() {
    const _ = i18n();
    return [
      _.ui_race_result_summary,
      _.ui_race_result_location,
      _.ui_race_result_speed,
      _.ui_race_result_endurance,
      _.ui_race_result_skills,
      _.ui_race_result_log,
    ];
  },
  ...require('#/i18n/extended-chara-def'),
  kojo: {
    get_titled_content: (ckey, key, ...args) =>
      get_titled_content(
        i18n().kojo[ckey],
        key,
        i18n().kojo[ckey],
        (k) => `${k}_desc`,
        ...args,
      ),
    get punishment() {
      return [
        i18n().kojo[0].pn_1,
        i18n().tb_mark.s_t_no,
        i18n().tb_mark.s_t_pregnant,
      ];
    },
    get punish_desc() {
      return [
        i18n().kojo[0].pn_1_desc,
        i18n().kojo[0].pn_2_desc,
        i18n().kojo[0].pn_3_desc,
      ];
    },
    get_npc_talk: (cid) => i18n().kojo[cid]?.npc_talk ?? i18n().timon.npc_talk,
    get_npc_sex: (cid) => i18n().kojo[cid]?.npc_sex ?? i18n().timon.npc_sex,
    get_npc_out: (cid) => i18n().kojo[cid]?.npc_out ?? i18n().timon.npc_out,
    get_npc_celebration: (cid, celebration) =>
      (i18n().kojo[cid]?.get_npc_celebration &&
        i18n().kojo[cid].get_npc_celebration(celebration)) ??
      i18n().timon.get_npc_celebration(celebration),
    get_npc_bye: (cid) => i18n().kojo[cid]?.npc_bye ?? i18n().timon.npc_bye,
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
    get eds_basement() {
      const _ = i18n().timon;
      return [
        _.ed_saying_01,
        _.ed_saying_02,
        _.ed_saying_04,
        _.ed_saying_05,
        _.ed_saying_12,
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
    /**
     * @param {string} vehicle
     * @param {string} location
     */
    get_it_arrive_location(vehicle, location) {
      return i18n().timon.get_it_arrive_location(
        vehicle !== void 0
          ? i18n()
              .vehicle.use_vehicle_template.replace(
                '%VERB%',
                __(`vehicle.${vehicle}_verb`),
              )
              .replace('%VEHICLE%', i18n().vehicle[vehicle])
          : '',
        i18n().location[location],
      );
    },
    /**
     * @param {CharaTalk} chara
     * @param {string} vehicle
     * @param {string} location
     */
    get_it_goto_location(chara, vehicle, location) {
      const vehicle_info =
        vehicle !== void 0
          ? i18n()
              .vehicle.use_vehicle_template.replace(
                '%VERB%',
                __(`vehicle.${vehicle}_verb`),
              )
              .replace('%VEHICLE%', i18n().vehicle[vehicle])
          : '';
      const location_name = i18n().location[location];
      if (chara.id > 0) {
        return i18n().timon.get_it_goto_location(
          chara,
          vehicle_info,
          location_name,
        );
      } else {
        return i18n().timon.get_it_self_goto_location(
          vehicle_info,
          location_name,
        );
      }
    },
  },
  new_game: {
    get taiwu_talents() {
      const _ = i18n().new_game;
      return [
        _.taiwu_talent_speed,
        _.taiwu_talent_stamina,
        _.taiwu_talent_power,
        _.taiwu_talent_guts,
        _.taiwu_talent_wiz,
      ];
    },
    get taiwu_talent_desc() {
      const _ = i18n().new_game;
      return [
        _.taiwu_talent_speed_desc,
        _.taiwu_talent_stamina_desc,
        _.taiwu_talent_power_desc,
        _.taiwu_talent_guts_desc,
        _.taiwu_talent_wiz_desc,
      ];
    },
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
  ...require('#/i18n/extended-table-def'),
  sex: {
    get motion_info() {
      const _ = i18n().sex;
      return [
        [_.m_lie_right, _.m_lie_left],
        [_.m_sit_right, _.m_sit_left],
        [_.m_stand_right, _.m_stand_left],
        [_.m_rev_right, _.m_rev_left],
      ];
    },
    get setting_options() {
      const _ = i18n().sex;
      return [
        _.st_act_vagina_filter,
        _.st_act_anal_filter,
        _.st_act_sm_filter,
        _.st_act_pet_filter,
        _.st_act_breast_filter,
        _.st_act_ask_filter,
        _.st_act_force_filter,
        _.st_simpler_report,
      ];
    },
  },
  jewel_shop: {
    get_price_title(price_dict) {
      const _ = i18n().jewel_shop;
      return _.price_tip_template.replace(
        '%PRICE%',
        Object.entries(price_dict)
          .map(([jid, count]) =>
            _.jewel_price_template
              .replace('%JEWEL%', __(`tb_param.jewel${jid}`))
              .replace('%COUNT%', count.toString()),
          )
          .join(_.price_splitter),
      );
    },
    get_price_title_with_other_tip(price_dict, other, dict) {
      const _ = i18n().jewel_shop;
      let price = Object.entries(price_dict)
        .map(([jid, count]) =>
          _.jewel_price_template
            .replace('%JEWEL%', __(`tb_param.jewel${jid}`))
            .replace('%COUNT%', count.toString()),
        )
        .join(_.price_splitter);
      if (Array.isArray(dict)) {
        dict
          .filter(
            (e) =>
              Array.isArray(e) &&
              typeof e[0] === 'string' &&
              typeof e[1] === 'string',
          )
          .forEach(([a, r]) => (other = other.replaceAll(`%${a}%`, r)));
      }
      return _.price_tip_template.replace('%PRICE%', `\n${other}\n${price}`);
    },
    get_price_title_with_condition(price_dict, ceids, now, cond) {
      const _ = i18n().jewel_shop;
      let price = Object.entries(price_dict)
        .map(([jid, count]) =>
          _.jewel_price_template
            .replace('%JEWEL%', __(`tb_param.jewel${jid}`))
            .replace('%COUNT%', count.toString()),
        )
        .join(_.price_splitter);
      if (ceids.length > 1) {
        price =
          _.multi_cond_tip_template
            .replace('%COND%', cond.toString())
            .replace(
              '%ALL%',
              now.reduce((p, c) => p + c, 0).toLocaleString(lan()),
            )
            .replace(
              '%NOW%',
              ceids
                .map(
                  (eid, i) =>
                    now[i].toLocaleString(lan()) + ' ' + i18n().tb_exp[eid],
                )
                .join(_.price_splitter),
            ) +
          '\n' +
          price;
      } else if (ceids.length > 0) {
        price =
          _.cond_tip_template
            .replace('%COND%', cond.toString())
            .replace('%EXP%', i18n().tb_exp[ceids[0]])
            .replace('%NOW%', now[0].toLocaleString(lan())) +
          '\n' +
          price;
      }
      return _.price_tip_template.replace('%PRICE%', '\n' + price);
    },
    get_price_info(jid, cost, all, chara) {
      return i18n().jewel_shop.get_price_info(
        __(`tb_param.jewel${jid}`),
        cost,
        all,
        chara,
      );
    },
    get_transfer_button: (chara, tid, you) =>
      i18n()
        .jewel_shop.bt_transfer.replace('%NAME%', chara)
        .replace('%JEWEL%', __(`tb_param.jewel${tid}`))
        .replace('%YOU%', you),
    get_inmon_slave: (slave) =>
      i18n().jewel_shop.inmon_slave_template.replace(
        '%SLAVE%',
        di18n.tb_mark.s_options[slave],
      ),
    get_inmon_slave_desc: (slave) =>
      i18n().jewel_shop.inmon_slave_desc_template.replace(
        '%DESC%',
        di18n.tb_mark.s_descriptions[slave],
      ),
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
  ...require('#/i18n/extended-race-def'),
};

module.exports = di18n;
