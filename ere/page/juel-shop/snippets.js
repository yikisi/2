const era = require('#/era-electron');

const {
  get_skill_price,
  get_talent_price,
} = require('#/system/ero/sys-get-juel-price');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');
const {
  base_skill_limit,
  talent_button_names_and_check_dict,
} = require('#/data/ero/juel-const');
const { mark_colors } = require('#/data/ero/mark-const');
const extra_base = require('#/data/extra-base');

const di18n = require('#/i18n/extended-def');
const { __, i18n } = require('#/i18n/selector');

module.exports = {
  /**
   * @param {number} ret
   * @param {{tab:number,flag:boolean}} pointer
   */
  default_handler(ret, pointer) {
    if (ret === 999) {
      pointer.flag = false;
    } else {
      pointer.tab = ret - 990;
    }
  },
  /**
   * @param {number} cid
   * @param {string} mid
   * @param {number} level
   * @returns {TextObject}
   */
  get_mark_cols(cid, mid, level = era.get(`mark:${cid}:${mid}`)) {
    return {
      config: {
        align: 'center',
        color: mark_colors[mid],
        width: 4,
      },
      content: di18n.tb_mark.get_mark_with_level_stars(
        mid,
        level,
        {
          content: '★'.repeat(level),
          color: get_color(void 0, mark_colors[mid], level / 3),
        },
        '☆'.repeat(3 - level),
      ),
      type: 'text',
    };
  },
  /**
   * @param {number} cid
   * @param {number} acc
   * @param {number} aid
   * @param {Record<string,number>} skill_dict
   * @param {Record<string,number>} juel_dict
   */
  get_skill_buttons(cid, acc, aid, skill_dict, juel_dict) {
    let limit = base_skill_limit * (1 + (!cid && extra_base.skill));
    const level = era.get(`abl:${cid}:${aid}`);
    skill_dict[aid] = level;
    const u_price =
      level >= limit ? void 0 : get_skill_price(cid, aid, level + 1);
    const d_price = level <= 0 ? void 0 : get_skill_price(cid, aid, level);
    return [
      {
        accelerator: acc,
        config: { width: 4 },
        content: di18n.tb_abl.get_leveled_ability(aid, level),
        type: 'button',
      },
      {
        accelerator: acc + 100,
        config: {
          disabled:
            u_price === void 0 ||
            Object.entries(u_price).some(([j, n]) => n > juel_dict[j]),
          width: 2,
          title:
            u_price !== void 0
              ? di18n.jewel_shop.get_price_title(u_price)
              : void 0,
        },
        content: i18n().jewel_shop.bt_upgrade,
        type: 'button',
      },
      {
        accelerator: acc + 200,
        config: {
          disabled:
            d_price === void 0 ||
            Object.entries(d_price).some(([j, n]) => n > juel_dict[j]),
          width: 2,
          title:
            d_price !== void 0
              ? di18n.jewel_shop.get_price_title(d_price)
              : void 0,
        },
        content: i18n().jewel_shop.bt_downgrade,
        type: 'button',
      },
    ];
  },
  /**
   * @param {number} cid
   * @param {number} acc
   * @param {number} tid
   * @param {number[]} ceids condition exp id
   * @param {Record<string,number>} t_dict
   * @param {Record<string,number>} j_dict
   */
  get_talent_buttons(cid, acc, tid, ceids, t_dict, j_dict) {
    let level = t_dict[tid];
    if (level === void 0) {
      level = t_dict[tid] = era.get(`talent:${cid}:${tid}`);
    }
    let talent_bnc;
    let talent_name;
    let bt_plus;
    let bt_minus;
    if (tid >= 70) {
      talent_bnc = talent_button_names_and_check_dict.poisoned;
      talent_name = di18n.tb_talent.get_talent_with_status(tid, level);
      bt_plus = i18n().jewel_shop.bt_add;
      bt_minus = i18n().jewel_shop.bt_remove;
    } else if (tid >= 60) {
      talent_bnc = talent_button_names_and_check_dict.trained;
      talent_name = __(`tb_talent.${tid}_${level}`);
      bt_plus = i18n().jewel_shop.bt_t_up;
      bt_minus = i18n().jewel_shop.bt_t_down;
    } else {
      talent_bnc = talent_button_names_and_check_dict.sm;
      talent_name = di18n.tb_talent.get_talent_with_status(tid, level);
      bt_plus = i18n().jewel_shop.bt_add;
      bt_minus = i18n().jewel_shop.bt_remove;
    }
    const u_price =
      level >= talent_bnc.max
        ? void 0
        : get_talent_price(cid, tid, talent_bnc.up_delta[level]);
    const d_price =
      level <= talent_bnc.min
        ? void 0
        : get_talent_price(cid, tid, talent_bnc.down_delta[level]);
    const now_exp = ceids.map((eid) => era.get(`exp:${cid}:${eid}`));
    return [
      {
        accelerator: acc,
        config: { width: 4 },
        content: talent_name,
        type: 'button',
      },
      {
        accelerator: acc + 100,
        config: {
          disabled:
            u_price === void 0 ||
            Object.entries(u_price).some((e) => e[1] > j_dict[e[0]]) ||
            now_exp.reduce((p, c) => p + c, 0) <
              (talent_bnc.metrics[level] || 0) ||
            (acc < 7 &&
              level === 1 &&
              t_dict.slave_run >= era.get(`talent:${cid}:调教度`)),
          title:
            u_price !== void 0
              ? di18n.jewel_shop.get_price_title_with_condition(
                  u_price,
                  ceids,
                  now_exp,
                  talent_bnc.metrics[level] || 0,
                )
              : void 0,
          width: 4,
        },
        content: bt_plus,
        type: 'button',
      },
      {
        accelerator: acc + 200,
        config: {
          disabled:
            d_price === void 0 ||
            Object.entries(d_price).some((e) => e[1] > j_dict[e[0]]),
          title:
            d_price !== void 0
              ? di18n.jewel_shop.get_price_title(d_price)
              : void 0,
          width: 4,
        },
        content: bt_minus,
        type: 'button',
      },
    ];
  },
  /**
   * @param {number} cid
   * @param {Record<string,number>} price_dict
   * @param {Record<string,number>} origin_dict
   */
  pay_jewels(cid, price_dict, origin_dict) {
    for (const jid of Object.keys(price_dict)) {
      if (origin_dict[jid] >= price_dict[jid]) {
        era.add(`juel:${cid}:${jid}`, -price_dict[jid]);
      } else {
        era.set(`juel:${cid}:${jid}`, 0);
        era.add(`juel:0:${jid}`, -(price_dict[jid] - origin_dict[jid]) * 2);
      }
    }
  },
  /**
   * @param {number} cid
   * @param {number} tab_pointer
   */
  print_footer(cid, tab_pointer) {
    const mark = era.get(`mark:${cid}:淫纹`);
    era.drawLine();
    era.printMultiColumns(
      [
        ...[
          { content: i18n().jewel_shop.abl_tab },
          { content: i18n().jewel_shop.talent_tab },
          {
            config: { disabled: !cid && !mark },
            content: i18n().jewel_shop.mark_tab(mark > 0),
          },
          cid > 0
            ? { content: i18n().jewel_shop.transfer_tab }
            : { content: [], type: 'text' },
        ].map((b, i) => {
          b.accelerator = 990 + i;
          b.config ||= {};
          b.config.buttonType = i === tab_pointer ? 'warning' : 'info';
          return b;
        }),
        {
          accelerator: 999,
          config: { align: 'right', offset: 4 },
          content: i18n().jewel_shop.update_end,
        },
      ].map((b) => {
        b.config.width = 4;
        b.type ??= 'button';
        return b;
      }),
    );
  },
  /**
   * @param {CharaTalk} chara
   * @param {Record<string,number>} price_dict
   * @param {Record<string,number>} origin_dict
   * @param {CharaTalk} me
   * @returns {Promise<boolean>}
   */
  async print_price_and_confirm(
    chara,
    price_dict,
    origin_dict,
    me = !chara.id ? chara : get_chara_talk(0),
  ) {
    for (const jid in price_dict) {
      const buffer = [];
      if (price_dict[jid] > origin_dict[jid]) {
        buffer.push(
          ...di18n.jewel_shop.get_price_info(
            jid,
            {
              content: origin_dict[jid].toLocaleString(),
              color: buff_colors[2],
            },
            {
              content: origin_dict[jid].toLocaleString(),
              color: buff_colors[2],
            },
            chara.get_colored_name(),
          ),
          i18n().jewel_shop.price_splitter,
          ...i18n().jewel_shop.get_addition_price_info(
            {
              content: (
                (price_dict[jid] - origin_dict[jid]) *
                2
              ).toLocaleString(),
              color: buff_colors[2],
            },
            {
              content: era.get(`jewel:0:${jid}`).toLocaleString(),
              color: buff_colors[2],
            },
            me.get_colored_name(),
          ),
        );
      } else {
        buffer.push(
          ...di18n.jewel_shop.get_price_info(
            jid,
            {
              content: price_dict[jid].toLocaleString(),
              color: buff_colors[2],
            },
            {
              content: origin_dict[jid].toLocaleString(),
              color: buff_colors[2],
            },
            chara.get_colored_name(),
          ),
        );
      }
      era.print(buffer, {
        offset: 1,
        width: 23,
      });
    }
    return await select_yes_or_no([]);
  },
};
