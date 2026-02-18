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
 * @param {I18nEntry} _
 * @param {CostInfo} cost_info
 */
function fill_cost_info(ret, _, cost_info) {
  if (!cost_info) {
    return;
  }
  if ((cost_info.mark & (1 << 0)) > 0) {
    ret.push(
      _.ui_cost_you_stamina_tip_template.replace(
        '%STAMINA%',
        Math.ceil(cost_info.stamina).toLocaleString(lan()),
      ),
    );
  }
  if ((cost_info.mark & (1 << 1)) > 0) {
    ret.push(
      _.ui_cost_you_time_tip_template.replace(
        '%TIME%',
        Math.ceil(cost_info.time).toLocaleString(lan()),
      ),
    );
  }
  if ((cost_info.mark & (1 << 2)) > 0) {
    ret.push(
      _.ui_cost_chara_stamina_tip_template.replace(
        '%STAMINA%',
        Math.ceil(cost_info.stamina).toLocaleString(lan()),
      ),
    );
  }
  if ((cost_info.mark & (1 << 3)) > 0) {
    ret.push(
      _.ui_cost_chara_time_tip_template.replace(
        '%TIME%',
        Math.ceil(cost_info.ctime || cost_info.time).toLocaleString(lan()),
      ),
    );
  }
}

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
    fill_cost_info(ret, i18n(), cost_info);
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
    additional.forEach((add) => add && ret.push(add));
    fill_cost_info(ret, _, cost_info);
    return ret.join('\n') || void 0;
  },
  name: {
    /**
     * @param {string} name
     * @param {number} sex
     * @returns {string}
     */
    get_name_with_adult_title(name, sex) {
      switch (sex) {
        case 0:
        case 10:
          return i18n().name.madam_template.replace('%NAME%', name);
        case 1:
          return i18n().name.sir_template.replace('%NAME%', name);
      }
      return name;
    },
    check_duplicate(name, check) {
      const _ = i18n().name;
      if (typeof check === 'string') {
        return _.duplicate_template
          .replace('%NAME%', name)
          .replace('%LAN%', check);
      }
      return _.duplicate_template2.replace('%NAME%', name);
    },
  },
  feature: {
    get types() {
      const _ = i18n().feature;
      return [
        _.n_hair_color,
        _.n_ahoge_hair,
        _.n_front_hair,
        _.n_back_hair,
        _.n_skin_color,
        _.n_armpit_hair,
        _.n_pubic_hair,
        _.n_sex_organ_color,
      ];
    },
    /**
     * @param {number} sex
     * @param {number} race
     * @returns {string}
     */
    get_sex_title(sex, race) {
      return __(`feature.${race > 0 ? 'u_sex' : 'h_sex'}_${sex}`);
    },
    /**
     * @param {number} growth
     * @param {number} race
     * @returns {string}
     */
    get_growth(growth, race) {
      if (growth > 2) {
        growth = 2;
      }
      return __(`feature.${race > 0 ? 'u_age' : 'h_age'}_${growth}`);
    },
    get n_skin() {
      const _ = i18n().feature;
      return [_.skin_0, _.skin_1, _.skin_2, _.skin_3];
    },
    get n_body_hair() {
      const _ = i18n().feature;
      return [_.body_hair_0, _.body_hair_1, _.body_hair_2];
    },
    get n_c_sex_organ() {
      const _ = i18n().feature;
      return [_.p_color_0, _.p_color_1, _.p_color_2];
    },
    get n_penis() {
      const _ = i18n().feature;
      return ['', _.penis_1, _.penis_2, _.penis_3, _.penis_4, _.penis_5];
    },
    get_hair_color: (hc) =>
      i18n().feature.hair_color_template.replace(
        '%COLOR%',
        __(`feature.hc_${hc}`),
      ),
    get_body_hair_color: (bhc) =>
      i18n().feature.uma_hair_color_template.replace(
        '%COLOR%',
        __(`feature.hc_${bhc}`),
      ),
    get_ahoge_hair: (th) =>
      !th || th === 'none'
        ? ''
        : i18n().feature.ahoge_hair_template.replace(
            '%LONG%',
            __(`feature.th_${th}`),
          ),
    get_chara_info(chara) {
      const name = __(`feature.chara_${chara}`);
      return {
        content: name,
        title: i18n()
          .feature.chara_template.replace('%NAME%', name)
          .replace('%DESC%', __(`feature.chara_${chara}_desc`)),
      };
    },
  },
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
  tb_abl: {
    /**
     * @param {number} aid
     * @param {number} level
     * @returns {string}
     */
    get_leveled_ability(aid, level) {
      const _ = i18n().tb_abl;
      return _.template
        .replace('%ABL%', _[aid])
        .replace('%LEVEL%', level.toString());
    },
    /**
     * @param {number} aid
     * @param {number} level
     * @returns {string}
     */
    get_abl_desc(aid, level) {
      if (level >= 10) {
        return i18n().abl_desc.abl_ex;
      } else if (level > 5) {
        return i18n().abl_desc.abl_above;
      }
      let prefix;
      let part;
      if (aid <= 19 || aid === 40) {
        prefix = 'atk';
      } else if (aid <= 27) {
        prefix = 'buff';
      } else {
        prefix = 'def';
      }
      switch (aid) {
        case 10:
          part = 'kiss';
          break;
        case 11:
        case 20:
        case 30:
          part = 'mouth';
          break;
        case 12:
        case 21:
        case 31:
          part = 'tit';
          break;
        case 13:
          part = 'hand';
          break;
        case 14:
          part = 'foot';
          break;
        case 15:
        case 22:
        case 32:
          part = 'body';
          break;
        case 23:
        case 33:
          part = 'cli';
          break;
        case 16:
        case 24:
        case 34:
          part = 'vagina';
          break;
        case 17:
        case 25:
        case 35:
          part = 'anal';
          break;
        case 18:
        case 26:
        case 36:
          part = 'penis';
          break;
        case 19:
        case 27:
        case 37:
          part = 'sm';
          break;
        case 40:
          part = 'talk';
      }
      return (
        __(`abl_desc.${prefix}_${part}_lv${level}`) ||
        __(`abl_desc.${prefix}_lv${level}`)
      );
    },
  },
  tb_item: {
    get_name(iid) {
      const _ = i18n().tb_item;
      return _.template.replace('%NAME%', _[iid] || `item.${iid}`);
    },
    notify(iid) {
      return i18n().tb_item.got_template.replace(
        '%INAME%',
        di18n.tb_item.get_name(iid),
      );
    },
    get_titled_item: (key) =>
      get_titled_content(i18n().tb_item, key, i18n().item_desc, (k) => k),
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
    get_mark_with_level_stars(mid, level, full_stars, empty_stars) {
      const _ = i18n().tb_mark;
      return _.get_mark_with_level_stars(
        _.mark_with_level
          .replace('%MARK%', di18n.tb_mark.names[mid])
          .replace('%LEVEL%', level.toString()),
        full_stars,
        empty_stars,
      );
    },
    get_mark_full_name: (mid) =>
      i18n().tb_mark.name_template.replace('%NAME%', di18n.tb_mark.names[mid]),
    get_mark_full_name_with_level: (mid, level) =>
      i18n()
        .tb_mark.mark_with_level.replace(
          '%MARK%',
          di18n.tb_mark.get_mark_full_name(mid),
        )
        .replace('%LEVEL%', level.toString()),
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
    get_titled_slavery() {},
  },
  tb_param: {},
  tb_stain: {
    get names() {
      const _ = i18n().tb_stain;
      return [
        _.n_saliva,
        _.n_chocolate,
        _.n_milk,
        _.n_lubricant,
        _.n_semen,
        _.n_virgin,
        _.n_wound,
        _.n_secretion,
        _.n_anal,
        _.n_dirt,
      ];
    },
  },
  tb_status: {
    get train_buff() {
      const _ = i18n().tb_status;
      return [_.train_debuff, '', _.train_buff_1, _.train_buff_2];
    },
    get_titled_status: (key, ...args) =>
      get_titled_content(
        i18n().tb_status,
        key,
        i18n().status_desc,
        (k) => k,
        ...args,
      ),
  },
  tb_talent: {
    get_titled_talent: (key, ...args) =>
      get_titled_content(
        i18n().tb_talent,
        key,
        i18n().talent_desc,
        (k) => k,
        ...args,
      ),
    get_talent_with_status(tid, status) {
      const _ = i18n().tb_talent;
      return _.shop_template
        .replace('%NAME%', _[tid])
        .replace('%STATUS%', status ? i18n().ui_yes2 : i18n().ui_no2);
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
  jewel_shop: {
    get_price_title(price_dict) {
      const _ = i18n().jewel_shop;
      return _.price_title_template.replace(
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
      return _.price_title_template.replace('%PRICE%', `\n${other}\n${price}`);
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
          _.multi_cond_title_template
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
          _.cond_title_template
            .replace('%COND%', cond.toString())
            .replace('%EXP%', i18n().tb_exp[ceids[0]])
            .replace('%NOW%', now[0].toLocaleString(lan())) +
          '\n' +
          price;
      }
      return _.price_title_template.replace('%PRICE%', '\n' + price);
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
        return _.track_name_template.replace(
          '%NAME%',
          di18n.race.n_track[track],
        );
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
};

module.exports = di18n;
