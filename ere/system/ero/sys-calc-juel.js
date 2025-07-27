const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { palam_colors } = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { base_juel_reward } = require('#/data/ero/juel-const');
const { palam2juel } = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  pleasure_list,
} = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

let tmp = {};

/**
 * @param {number} cid
 * @param {string} key
 * @param {number} num
 */
function add_juel(cid, key, num) {
  const juel_type = key.length === 2 && key !== '痛苦';
  let temp = era.get('tflag:主导权');
  if (
    !juel_type ||
    ((cid > 0 || era.getCharactersInTrain().length === 1 || temp > 0) &&
      sys_check_awake(cid))
  ) {
    tmp[cid][key] +=
      num *
      (1 -
        juel_type * (temp === cid || era.get('tflag:当前助手') === cid) * 0.9);
  }
}

/**
 * @param {number} cid
 * @param {string} j_name
 * @returns {number}
 */
function get_buffed_jewel(cid, j_name) {
  const ret =
    tmp[cid][j_name] *
    (1 + era.get(`tcvar:${cid}:${j_name.substring(0, 2)}因子加成`));
  tmp[cid][j_name] = 0;
  return ret;
}

/**
 * @param {number} cid
 * @param {string} j_name
 * @param {number} src
 * @param {number} dst
 * @param {boolean} shown
 */
function print_jewel_change(cid, j_name, src, dst, shown = true) {
  const jewel = Math.floor(src / palam2juel);
  const new_jewel = Math.floor(dst / palam2juel);
  if (shown && new_jewel !== jewel) {
    era.print([
      get_chara_talk(cid).get_colored_name(),
      ` 获得了 ${j_name.substring(0, 2)}因子：${jewel.toLocaleString()} + `,
      {
        content: `${(new_jewel - jewel).toLocaleString()}`,
        color: palam_colors.notifications[1],
      },
      ` → ${new_jewel.toLocaleString()} (${(new_jewel + era.get(`jewel:${cid}:${j_name}`)).toLocaleString()})`,
    ]);
  }
}

module.exports = {
  add_juel,
  /** 只清空临时的 jewel，不会影响已获得的 jewel */
  clean_juels: () => (tmp = {}),
  /** @param {number} ids */
  init_juels: (...ids) =>
    ids.forEach((cid) => {
      tmp[cid] = {};
      new Array(9)
        .fill(0)
        .forEach((_, i) => (tmp[cid][era.get(`paramname:${i}`)] = 0));
      new Array(6)
        .fill(0)
        .forEach((_, i) => (tmp[cid][era.get(`paramname:${i + 10}`)] = 0));
    }),
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
        const key = `${part_names[part]}快感`;
        const param = get_buffed_jewel(cid, key);
        if (part === part_enum.sadism && part === part_enum.masochism) {
          j_spirit += param;
        } else {
          j_body += param;
        }
        print_jewel_change(
          cid,
          key,
          era.get(`gotjewel:${cid}:${key}`),
          era.add(`gotjewel:${cid}:${key}`, param),
          shown,
        );
      });

      const j_meek = get_buffed_jewel(cid, '顺从');
      let g_meek;
      print_jewel_change(
        cid,
        '顺从',
        era.get(`gotjewel:${cid}:顺从`),
        (g_meek = era.add(`gotjewel:${cid}:顺从`, j_meek)),
        shown,
      );

      if (cid > 0) {
        const j_pain = get_buffed_jewel(cid, '痛苦');
        let g_pain = 0;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_pain / 10);
        } else if (inmon.on(plugin_enum.tran_p) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_pain / 10);
        } else {
          print_jewel_change(
            cid,
            '痛苦',
            era.get(`gotjewel:${cid}:痛苦`),
            (g_pain = era.add(`gotjewel:${cid}:痛苦`, j_pain)),
            shown,
          );
          add_juel(cid, '自卫', j_pain / 2);
          add_juel(cid, '恐惧', j_pain / 5);
        }

        const j_fear = get_buffed_jewel(cid, '恐惧');
        let g_fear;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_fear / 10);
        } else if (inmon.on(plugin_enum.tran_f) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_fear / 10);
        } else {
          print_jewel_change(
            cid,
            '恐惧',
            era.get(`gotjewel:${cid}:恐惧`),
            (g_fear = era.add(`gotjewel:${cid}:恐惧`, j_fear)),
            shown,
          );
          add_juel(cid, '自卫', j_fear / 2);
          g_pain += g_fear;
        }

        const j_shame = get_buffed_jewel(cid, '羞耻');
        let g_shame;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_shame / 10);
        } else if (inmon.on(plugin_enum.tran_s) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_shame / 10);
        } else {
          print_jewel_change(
            cid,
            '羞耻',
            era.get(`gotjewel:${cid}:羞耻`),
            (g_shame = era.add(`gotjewel:${cid}:羞耻`, j_shame)),
            shown,
          );
          add_juel(cid, '自卫', j_shame / 2);
        }

        const j_hate = get_buffed_jewel(cid, '反感');
        let g_hate;
        if (inmon.on(plugin_enum.khn)) {
          era.add(`param:${cid}:施虐快感`, j_hate / 10);
        } else if (inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_hate / 10);
        } else {
          print_jewel_change(
            cid,
            '反感',
            era.get(`gotjewel:${cid}:反感`),
            (g_hate = era.add(`gotjewel:${cid}:反感`, j_hate)),
            shown,
          );
          add_juel(cid, '自卫', j_hate / 5);
        }

        print_jewel_change(
          cid,
          '自卫',
          era.get(`gotjewel:${cid}:自卫`),
          era.add(`gotjewel:${cid}:自卫`, get_buffed_jewel(cid, '自卫')),
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
            : j_body / 50 + j_shame / 2 + j_spirit / 25 - j_meek / 5;
        if (!l_inmon) {
          if ((p_pleasure >= 4500 || total_ex >= 6) && l_pleasure < 3) {
            era.set(`nowex:${cid}:欢愉获取`, 3 - l_pleasure);
          } else if ((p_pleasure >= 3000 || total_ex >= 4) && l_pleasure < 2) {
            era.set(`nowex:${cid}:欢愉获取`, 2 - l_pleasure);
          } else if ((p_pleasure >= 1500 || total_ex >= 2) && l_pleasure < 1) {
            era.set(`nowex:${cid}:欢愉获取`, 1);
          }
        }
        if (
          ((g_meek >= 25000 || j_meek >= 3000) && l_meek < 3) ||
          ((g_meek >= 20000 || j_meek >= 2250) && l_meek < 2) ||
          ((g_meek >= 15000 || j_meek >= 1500) && l_meek < 1)
        ) {
          era.set(`nowex:${cid}:同心获取`, 1);
        }
        if (!inmon.on(plugin_enum.meek)) {
          if ((g_pain >= 15000 || p_pain >= 2750) && l_pain < 3) {
            era.set(`nowex:${cid}:苦痛获取`, 3 - l_pain);
          } else if ((g_pain >= 11250 || p_pain >= 2000) && l_pain < 2) {
            era.set(`nowex:${cid}:苦痛获取`, 2 - l_pain);
          } else if ((g_pain >= 7500 || p_pain >= 1250) && l_pain < 1) {
            era.set(`nowex:${cid}:苦痛获取`, 1);
          }
          if ((g_shame >= 10000 || p_shame >= 2750) && l_shame < 3) {
            era.set(`nowex:${cid}:羞耻获取`, 3 - l_shame);
          } else if ((g_shame >= 7500 || p_shame >= 2000) && l_shame < 2) {
            era.set(`nowex:${cid}:羞耻获取`, 2 - l_shame);
          } else if ((g_shame >= 5000 || p_shame >= 1250) && l_shame < 1) {
            era.set(`nowex:${cid}:羞耻获取`, 1);
          }
        }
        if (!inmon.on(plugin_enum.meek) && !inmon.on(plugin_enum.rel_lock)) {
          if ((g_hate >= 10000 || j_hate >= 3200) && l_hate < 3) {
            era.set(`nowex:${cid}:反抗获取`, 3 - l_hate);
          } else if ((g_hate >= 7500 || j_hate >= 2400) && l_hate < 2) {
            era.set(`nowex:${cid}:反抗获取`, 2 - l_hate);
          } else if ((g_hate >= 5000 || j_hate >= 1600) && l_hate < 1) {
            era.set(`nowex:${cid}:反抗获取`, 1);
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
      add_juel(cid, '顺从', base_juel_reward);
    }
  },
};
