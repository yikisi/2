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
 * @param {number} chara_id
 * @param {string} key
 * @param {number} num
 */
function add_juel(chara_id, key, num) {
  const juel_type = key.length === 2 && key !== '痛苦';
  let temp = era.get('tflag:主导权');
  if (
    !juel_type ||
    ((chara_id || era.getCharactersInTrain().length === 1 || temp) &&
      sys_check_awake(chara_id))
  ) {
    tmp[chara_id][key] +=
      num *
      (1 -
        juel_type *
          (temp === chara_id || era.get('tflag:当前助手') === chara_id) *
          0.9);
  }
}

/**
 * @param {number} chara_id
 * @param {string} juel_name
 * @returns {number}
 */
function get_buffed_jewel(chara_id, juel_name) {
  const ret =
    tmp[chara_id][juel_name] *
    (1 + era.get(`tcvar:${chara_id}:${juel_name.substring(0, 2)}因子加成`));
  tmp[chara_id][juel_name] = 0;
  return ret;
}

/**
 * @param {number} cid
 * @param {string} jewel_name
 * @param {number} src
 * @param {number} dst
 * @param {boolean} shown
 */
function print_jewel_change(cid, jewel_name, src, dst, shown) {
  const jewel = Math.floor(src / palam2juel);
  const new_jewel = Math.floor(dst / palam2juel);
  if (shown && new_jewel !== jewel) {
    era.print([
      get_chara_talk(cid).get_colored_name(),
      ` 获得了 ${jewel_name.substring(0, 2)}因子！${jewel.toLocaleString()} + `,
      {
        content: `${(new_jewel - jewel).toLocaleString()}`,
        color: palam_colors.notifications[1],
      },
      ` → ${new_jewel.toLocaleString()} (${(new_jewel + era.get(`jewel:${cid}:${jewel_name}`)).toLocaleString()})`,
    ]);
  }
}

module.exports = {
  add_juel,
  /**
   * 只清空临时的juel，不会影响已获得的juel
   */
  clean_juels: () => (tmp = {}),
  /** @param {number} ids */
  init_juels: (...ids) =>
    ids.forEach((chara_id) => {
      tmp[chara_id] = {};
      new Array(9)
        .fill(0)
        .forEach((_, i) => (tmp[chara_id][era.get(`palamname:${i}`)] = 0));
      new Array(6)
        .fill(0)
        .forEach((_, i) => (tmp[chara_id][era.get(`palamname:${i + 10}`)] = 0));
    }),
  /**
   * @param {boolean} shown
   * @param {number} ids
   */
  update_juels(shown, ...ids) {
    for (const cid of ids) {
      const inmon = CharaInmon.get(cid);
      let body_jewels = 0;
      let spirit_jewels = 0;
      pleasure_list.forEach((part) => {
        const key = `${part_names[part]}快感`;
        const palam = get_buffed_jewel(cid, key);
        if (part === part_enum.sadism && part === part_enum.masochism) {
          spirit_jewels += palam;
        } else {
          body_jewels += palam;
        }
        print_jewel_change(
          cid,
          key,
          era.get(`gotjewel:${cid}:${key}`),
          era.add(`gotjewel:${cid}:${key}`, palam),
          shown,
        );
      });

      const meek_juels = get_buffed_jewel(cid, '顺从');
      let got_meek_juels;
      print_jewel_change(
        cid,
        '顺从',
        era.get(`gotjewel:${cid}:顺从`),
        (got_meek_juels = era.add(`gotjewel:${cid}:顺从`, meek_juels)),
        shown,
      );

      if (cid > 0) {
        const j_pain = get_buffed_jewel(cid, '痛苦');
        let got_j_pain = 0;
        if (inmon.on(plugin_enum.tran_p) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_pain / 10);
        } else {
          print_jewel_change(
            cid,
            '痛苦',
            era.get(`gotjewel:${cid}:痛苦`),
            (got_j_pain = era.add(`gotjewel:${cid}:痛苦`, j_pain)),
            shown,
          );
          add_juel(cid, '自卫', j_pain / 2);
          add_juel(cid, '恐惧', j_pain / 5);
        }

        const j_fear = get_buffed_jewel(cid, '恐惧');
        let got_j_fear;
        if (inmon.on(plugin_enum.tran_f) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_fear / 10);
        } else {
          print_jewel_change(
            cid,
            '恐惧',
            era.get(`gotjewel:${cid}:恐惧`),
            (got_j_fear = era.add(`gotjewel:${cid}:恐惧`, j_fear)),
            shown,
          );
          add_juel(cid, '自卫', j_fear / 2);
          got_j_pain += got_j_fear;
        }

        const j_shame = get_buffed_jewel(cid, '羞耻');
        let got_j_shame;
        if (inmon.on(plugin_enum.tran_s) || inmon.on(plugin_enum.sls)) {
          era.add(`param:${cid}:受虐快感`, j_shame / 10);
        } else {
          print_jewel_change(
            cid,
            '羞耻',
            era.get(`gotjewel:${cid}:羞耻`),
            (got_j_shame = era.add(`gotjewel:${cid}:羞耻`, j_shame)),
            shown,
          );
          add_juel(cid, '自卫', j_shame / 2);
        }

        const j_hate = get_buffed_jewel(cid, '反感');
        let got_j_hate;
        print_jewel_change(
          cid,
          '反感',
          era.get(`gotjewel:${cid}:反感`),
          (got_j_hate = era.add(`gotjewel:${cid}:反感`, j_hate)),
          shown,
        );
        add_juel(cid, '自卫', j_hate / 5);

        print_jewel_change(
          cid,
          '自卫',
          era.get(`gotjewel:${cid}:自卫`),
          era.add(`gotjewel:${cid}:自卫`, get_buffed_jewel(cid, '自卫')),
          shown,
        );
        const pleasure_mark = era.get(`mark:${cid}:欢愉`);
        const meek_mark = era.get(`mark:${cid}:同心`);
        const pain_mark = era.get(`mark:${cid}:苦痛`);
        const shame_mark = era.get(`mark:${cid}:羞耻`);
        const hate_mark = era.get(`mark:${cid}:反抗`);
        const ero_mark = era.get(`mark:${cid}:淫纹`);
        const pleasure_params = body_jewels + spirit_jewels / 10;
        const total_ex = era.get(`ex:${cid}:TotalEX`);
        const pain_params = j_pain / 10 + j_fear / 10 - spirit_jewels / 25;
        const shame_params =
          body_jewels / 50 + j_shame / 2 + spirit_jewels / 25 - meek_juels / 5;
        if (!ero_mark) {
          if ((pleasure_params >= 4500 || total_ex >= 6) && pleasure_mark < 3) {
            era.set(`nowex:${cid}:欢愉获取`, 3 - pleasure_mark);
          } else if (
            (pleasure_params >= 3000 || total_ex >= 4) &&
            pleasure_mark < 2
          ) {
            era.set(`nowex:${cid}:欢愉获取`, 2 - pleasure_mark);
          } else if (
            (pleasure_params >= 1500 || total_ex >= 2) &&
            pleasure_mark < 1
          ) {
            era.set(`nowex:${cid}:欢愉获取`, 1);
          }
        }
        if (
          ((got_meek_juels >= 25000 || meek_juels >= 3000) && meek_mark < 3) ||
          ((got_meek_juels >= 20000 || meek_juels >= 2250) && meek_mark < 2) ||
          ((got_meek_juels >= 15000 || meek_juels >= 1500) && meek_mark < 1)
        ) {
          era.set(`nowex:${cid}:同心获取`, 1);
        }
        if (!inmon.on(plugin_enum.meek)) {
          if ((got_j_pain >= 15000 || pain_params >= 2750) && pain_mark < 3) {
            era.set(`nowex:${cid}:苦痛获取`, 3 - pain_mark);
          } else if (
            (got_j_pain >= 11250 || pain_params >= 2000) &&
            pain_mark < 2
          ) {
            era.set(`nowex:${cid}:苦痛获取`, 2 - pain_mark);
          } else if (
            (got_j_pain >= 7500 || pain_params >= 1250) &&
            pain_mark < 1
          ) {
            era.set(`nowex:${cid}:苦痛获取`, 1);
          }
          if (
            (got_j_shame >= 10000 || shame_params >= 2750) &&
            shame_mark < 3
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 3 - shame_mark);
          } else if (
            (got_j_shame >= 7500 || shame_params >= 2000) &&
            shame_mark < 2
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 2 - shame_mark);
          } else if (
            (got_j_shame >= 5000 || shame_params >= 1250) &&
            shame_mark < 1
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 1);
          }
        }
        if (!inmon.on(plugin_enum.meek) && !inmon.on(plugin_enum.rel_lock)) {
          if ((got_j_hate >= 10000 || j_hate >= 3200) && hate_mark < 3) {
            era.set(`nowex:${cid}:反抗获取`, 3 - hate_mark);
          } else if ((got_j_hate >= 7500 || j_hate >= 2400) && hate_mark < 2) {
            era.set(`nowex:${cid}:反抗获取`, 2 - hate_mark);
          } else if ((got_j_hate >= 5000 || j_hate >= 1600) && hate_mark < 1) {
            era.set(`nowex:${cid}:反抗获取`, 1);
          }
        }
      }
    }
  },
  /**
   * @param {number} chara_id
   * @param {string} talent
   */
  update_juels_from_talent(chara_id, talent) {
    if (era.get(`talent:${chara_id}:${talent}`)) {
      add_juel(chara_id, '顺从', base_juel_reward);
    }
  },
};
