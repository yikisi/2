const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const { palam_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { base_juel_reward } = require('#/data/ero/juel-const');
const { palam2juel } = require('#/data/ero/orgasm-const');
const { part2jid, part_enum, pleasure_list } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

const { __, i18n } = require('#/i18n/selector');

let tmp = {};

/**
 * @param {number} cid
 * @param {number} jid
 * @param {number} num
 */
function add_juel(cid, jid, num) {
  const master = era.get('tflag:主导权');
  if (cid > 0) {
    // 睡着的角色无法获取痛苦以外的情感因子
    if (jid >= 10 && jid !== 11 && !sys_check_awake(cid)) {
      return;
    }
    // 有主导权或者担任助手时只会得到10%的情感因子
    if (
      jid >= 10 &&
      jid !== 11 &&
      (master === cid || era.get('tflag:当前助手') === cid)
    ) {
      tmp[cid][jid] += num / 10;
    } else {
      tmp[cid][jid] += num;
    }
  } else {
    // 玩家无法获取顺从之外的情感因子
    if (jid > 10) {
      return;
    }
    // 有主导权的玩家或睡着的玩家无法获取顺从因子
    if (jid === 10 && (master === cid || !sys_check_awake(cid))) {
      return;
    }
    tmp[cid][jid] += num;
  }
}

/**
 * @param {number} cid
 * @param {number} jid
 * @returns {number}
 */
function get_buffed_jewel(cid, jid) {
  const ret =
    tmp[cid][jid] *
    (1 + era.get(`tcvar:${cid}:${i18n('zh-CN').tb_param[jid]}因子加成`));
  tmp[cid][jid] = 0;
  return ret;
}

/**
 * @param {number} cid
 * @param {number} jid
 * @param {number} src
 * @param {number} dst
 * @param {boolean} shown
 */
function print_jewel_change(cid, jid, src, dst, shown = true) {
  const jewel = Math.floor(src / palam2juel);
  const new_jewel = Math.floor(dst / palam2juel);
  if (shown && new_jewel !== jewel) {
    era.print(
      i18n().sex.get_got_jewel_info(
        get_chara_talk(cid).get_colored_name(),
        __(`tb_param.jewel${jid}`),
        get_abbr_number(jewel),
        {
          ...get_abbr_number(new_jewel - jewel),
          color: palam_colors.notifications[0],
        },
        { ...get_abbr_number(new_jewel), color: palam_colors.notifications[1] },
        get_abbr_number(new_jewel + era.get(`jewel:${cid}:${jid}`)),
      ),
    );
  }
}

module.exports = {
  add_juel,
  /** 只清空临时的 jewel，不会影响已获得的 jewel */
  clean_juels: () => (tmp = {}),
  /** @param {number} ids */
  init_juels: (...ids) => {
    const jid_list = era.get('jewelkeys').filter((jid) => jid <= 15);
    ids.forEach((cid) => {
      tmp[cid] = {};
      jid_list.forEach((jid) => (tmp[cid][jid] = 0));
    });
  },
  /**
   * @param {boolean} shown
   * @param {number} ids
   */
  update_juels(shown, ...ids) {
    for (const cid of ids) {
      const inmon = CharaInmon.get(cid);
      let j_body = 0;
      let j_spirit = 0;
      pleasure_list.forEach((part) => {
        const jid = part2jid[part];
        const param = get_buffed_jewel(cid, jid);
        if (part === part_enum.sadism && part === part_enum.masochism) {
          j_spirit += param;
        } else {
          j_body += param;
        }
        print_jewel_change(
          cid,
          jid,
          era.get(`gotjewel:${cid}:${jid}`),
          era.add(`gotjewel:${cid}:${jid}`, param),
          shown,
        );
      });

      // JEWELNAME:10 = 顺从
      const j_meek = get_buffed_jewel(cid, 10);
      let g_meek;
      print_jewel_change(
        cid,
        10,
        era.get(`gotjewel:${cid}:10`),
        (g_meek = era.add(`gotjewel:${cid}:10`, j_meek)),
        shown,
      );

      if (cid > 0) {
        // JEWELNAME:11 = 痛苦
        const j_pain = get_buffed_jewel(cid, 11);
        let g_pain = 0;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_pain / 10);
        } else if (inmon.on(plugin_enum.tran_p) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_pain / 10);
        } else {
          print_jewel_change(
            cid,
            11,
            era.get(`gotjewel:${cid}:11`),
            (g_pain = era.add(`gotjewel:${cid}:11`, j_pain)),
            shown,
          );
          add_juel(cid, 15, j_pain / 2);
          add_juel(cid, 12, j_pain / 5);
        }

        // JEWELNAME:12 = 恐惧
        const j_fear = get_buffed_jewel(cid, 12);
        let g_fear;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_fear / 10);
        } else if (inmon.on(plugin_enum.tran_f) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_fear / 10);
        } else {
          print_jewel_change(
            cid,
            12,
            era.get(`gotjewel:${cid}:12`),
            (g_fear = era.add(`gotjewel:${cid}:12`, j_fear)),
            shown,
          );
          add_juel(cid, 15, j_fear / 2);
          g_pain += g_fear;
        }

        // JEWELNAME:13 = 羞耻
        const j_shame = get_buffed_jewel(cid, 13);
        let g_shame;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_shame / 10);
        } else if (inmon.on(plugin_enum.tran_s) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_shame / 10);
        } else {
          print_jewel_change(
            cid,
            13,
            era.get(`gotjewel:${cid}:羞耻`),
            (g_shame = era.add(`gotjewel:${cid}:羞耻`, j_shame)),
            shown,
          );
          add_juel(cid, 15, j_shame / 2);
        }

        // JEWELNAME:14 = 反感
        const j_hate = get_buffed_jewel(cid, 14);
        let g_hate;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_hate / 10);
        } else if (inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_hate / 10);
        } else {
          print_jewel_change(
            cid,
            14,
            era.get(`gotjewel:${cid}:反感`),
            (g_hate = era.add(`gotjewel:${cid}:反感`, j_hate)),
            shown,
          );
          add_juel(cid, 15, j_hate / 5);
        }

        // JEWELNAME:15 = 自卫
        print_jewel_change(
          cid,
          15,
          era.get(`gotjewel:${cid}:15`),
          era.add(`gotjewel:${cid}:15`, get_buffed_jewel(cid, 15)),
          shown,
        );
        const l_pleasure = era.get(`mark:${cid}:欢愉`);
        const l_meek = era.get(`mark:${cid}:同心`);
        const l_pain = era.get(`mark:${cid}:苦痛`);
        const l_shame = era.get(`mark:${cid}:羞耻`);
        const l_hate = era.get(`mark:${cid}:反抗`);
        const l_inmon = era.get(`mark:${cid}:淫纹`);
        const p_pleasure = j_body + j_spirit / 10;
        const total_ex = era.get(`ex:${cid}:TotalEX`);
        const p_pain = j_pain / 10 + j_fear / 10 - j_spirit / 25;
        const p_shame =
          inmon.on(plugin_enum.sls) || inmon.on(plugin_enum.khn)
            ? 0
            : // 限制因为快感获得的羞耻刻印
              Math.min(j_body / 50 + j_spirit / 25, 1200) +
              j_shame / 2 -
              j_meek / 5;
        if (!l_inmon) {
          if ((p_pleasure >= 4500 || total_ex >= 6) && l_pleasure < 3) {
            // EXNAME:65 = 欢愉获取
            era.set(`nowex:${cid}:65`, 3 - l_pleasure);
          } else if ((p_pleasure >= 3000 || total_ex >= 4) && l_pleasure < 2) {
            era.set(`nowex:${cid}:65`, 2 - l_pleasure);
          } else if ((p_pleasure >= 1500 || total_ex >= 2) && l_pleasure < 1) {
            era.set(`nowex:${cid}:65`, 1);
          }
        }
        if (
          ((g_meek >= 25000 || j_meek >= 3000) && l_meek < 3) ||
          ((g_meek >= 20000 || j_meek >= 2250) && l_meek < 2) ||
          ((g_meek >= 15000 || j_meek >= 1500) && l_meek < 1)
        ) {
          // EXNAME:67 = 同心获取
          era.set(`nowex:${cid}:67`, 1);
        }
        if (!inmon.on(plugin_enum.meek)) {
          if ((g_pain >= 15000 || p_pain >= 2750) && l_pain < 3) {
            // EXNAME:68 = 苦痛获取
            era.set(`nowex:${cid}:68`, 3 - l_pain);
          } else if ((g_pain >= 11250 || p_pain >= 2000) && l_pain < 2) {
            era.set(`nowex:${cid}:68`, 2 - l_pain);
          } else if ((g_pain >= 7500 || p_pain >= 1250) && l_pain < 1) {
            era.set(`nowex:${cid}:68`, 1);
          }
          if ((g_shame >= 10000 || p_shame >= 2750) && l_shame < 3) {
            // EXNAME:69 = 羞耻获取
            era.set(`nowex:${cid}:69`, 3 - l_shame);
          } else if ((g_shame >= 7500 || p_shame >= 2000) && l_shame < 2) {
            era.set(`nowex:${cid}:69`, 2 - l_shame);
          } else if ((g_shame >= 5000 || p_shame >= 1250) && l_shame < 1) {
            era.set(`nowex:${cid}:69`, 1);
          }
        }
        if (!inmon.on(plugin_enum.meek) && !inmon.on(plugin_enum.rel_lock)) {
          if ((g_hate >= 10000 || j_hate >= 3200) && l_hate < 3) {
            // EXNAME:70 = 反抗获取
            era.set(`nowex:${cid}:70`, 3 - l_hate);
          } else if ((g_hate >= 7500 || j_hate >= 2400) && l_hate < 2) {
            era.set(`nowex:${cid}:70`, 2 - l_hate);
          } else if ((g_hate >= 5000 || j_hate >= 1600) && l_hate < 1) {
            era.set(`nowex:${cid}:70`, 1);
          }
        }
      }
    }
  },
  /**
   * @param {number} cid
   * @param {string} talent
   */
  update_juels_from_talent(cid, talent) {
    if (era.get(`talent:${cid}:${talent}`) > 0) {
      add_juel(cid, 10, base_juel_reward);
    }
  },
};
