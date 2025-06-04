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
function get_buffed_juel(chara_id, juel_name) {
  const ret = Math.max(
    Math.floor(
      tmp[chara_id][juel_name] *
        (1 + era.get(`tcvar:${chara_id}:${juel_name.substring(0, 2)}因子加成`)),
    ),
    -era.get(`gotjuel:${chara_id}:${juel_name}`),
  );
  tmp[chara_id][juel_name] = 0;
  return ret;
}

/**
 * @param {number} chara_id
 * @param {string} juel_name
 * @param {number} src_juel
 * @param {number} dst_juel
 * @param {boolean} shown
 */
function print_juel_change(chara_id, juel_name, src_juel, dst_juel, shown) {
  const juel = Math.floor(src_juel / palam2juel),
    new_juel = Math.floor(dst_juel / palam2juel);
  shown &&
    new_juel !== juel &&
    era.print([
      get_chara_talk(chara_id).get_colored_name(),
      ` 获得了 ${juel_name.substring(0, 2)}因子！${juel} + `,
      {
        content: `${new_juel - juel}`,
        color: palam_colors.notifications[1],
      },
      ` → ${new_juel} (${new_juel + era.get(`juel:${chara_id}:${juel_name}`)})`,
    ]);
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
    ids.forEach((cid) => {
      let body_jewels = 0,
        spirit_jewels = 0;
      pleasure_list.forEach((part) => {
        const key = `${part_names[part]}快感`,
          palam = get_buffed_juel(cid, key);
        if (part === part_enum.sadism && part === part_enum.masochism) {
          spirit_jewels += palam;
        } else {
          body_jewels += palam;
        }
        print_juel_change(
          cid,
          key,
          era.get(`gotjuel:${cid}:${key}`),
          era.add(`gotjuel:${cid}:${key}`, palam),
          shown,
        );
      });

      const meek_juels = get_buffed_juel(cid, '顺从');
      let got_meek_juels;
      print_juel_change(
        cid,
        '顺从',
        era.get(`gotjuel:${cid}:顺从`),
        (got_meek_juels = era.add(`gotjuel:${cid}:顺从`, meek_juels)),
        shown,
      );

      if (cid) {
        const pain_juels = get_buffed_juel(cid, '痛苦');
        let got_pain_juels;
        print_juel_change(
          cid,
          '痛苦',
          era.get(`gotjuel:${cid}:痛苦`),
          (got_pain_juels = era.add(`gotjuel:${cid}:痛苦`, pain_juels)),
          shown,
        );
        add_juel(cid, '自卫', pain_juels / 2);
        add_juel(cid, '恐惧', pain_juels / 5);

        const fear_juels = get_buffed_juel(cid, '恐惧');
        let got_fear_juels;
        print_juel_change(
          cid,
          '恐惧',
          era.get(`gotjuel:${cid}:恐惧`),
          (got_fear_juels = era.add(`gotjuel:${cid}:恐惧`, fear_juels)),
          shown,
        );
        add_juel(cid, '自卫', fear_juels / 2);
        got_pain_juels += got_fear_juels;

        const shame_juels = get_buffed_juel(cid, '羞耻');
        let got_shame_juels;
        print_juel_change(
          cid,
          '羞耻',
          era.get(`gotjuel:${cid}:羞耻`),
          (got_shame_juels = era.add(`gotjuel:${cid}:羞耻`, shame_juels)),
          shown,
        );
        add_juel(cid, '自卫', shame_juels / 2);

        const hate_juels = get_buffed_juel(cid, '反感');
        let got_hate_juels;
        print_juel_change(
          cid,
          '反感',
          era.get(`gotjuel:${cid}:反感`),
          (got_hate_juels = era.add(`gotjuel:${cid}:反感`, hate_juels)),
          shown,
        );
        add_juel(cid, '自卫', hate_juels / 5);

        print_juel_change(
          cid,
          '自卫',
          era.get(`gotjuel:${cid}:自卫`),
          era.add(`gotjuel:${cid}:自卫`, get_buffed_juel(cid, '自卫')),
          shown,
        );
        const pleasure_mark = era.get(`mark:${cid}:欢愉`),
          meek_mark = era.get(`mark:${cid}:同心`),
          pain_mark = era.get(`mark:${cid}:苦痛`),
          shame_mark = era.get(`mark:${cid}:羞耻`),
          hate_mark = era.get(`mark:${cid}:反抗`),
          ero_mark = era.get(`mark:${cid}:淫纹`),
          pleasure_params = body_jewels + spirit_jewels / 10,
          total_ex = era.get(`ex:${cid}:TotalEX`),
          pain_params = pain_juels / 10 + fear_juels / 10 - spirit_jewels / 25,
          shame_params =
            body_jewels / 50 +
            shame_juels / 2 +
            spirit_jewels / 25 -
            meek_juels / 5;
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
        const inmon = CharaInmon.get(cid);
        if (!inmon.on(plugin_enum.meek)) {
          if (
            (got_pain_juels >= 15000 || pain_params >= 2750) &&
            pain_mark < 3
          ) {
            era.set(`nowex:${cid}:苦痛获取`, 3 - pain_mark);
          } else if (
            (got_pain_juels >= 11250 || pain_params >= 2000) &&
            pain_mark < 2
          ) {
            era.set(`nowex:${cid}:苦痛获取`, 2 - pain_mark);
          } else if (
            (got_pain_juels >= 7500 || pain_params >= 1250) &&
            pain_mark < 1
          ) {
            era.set(`nowex:${cid}:苦痛获取`, 1);
          }
          if (
            (got_shame_juels >= 10000 || shame_params >= 2750) &&
            shame_mark < 3
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 3 - shame_mark);
          } else if (
            (got_shame_juels >= 7500 || shame_params >= 2000) &&
            shame_mark < 2
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 2 - shame_mark);
          } else if (
            (got_shame_juels >= 5000 || shame_params >= 1250) &&
            shame_mark < 1
          ) {
            era.set(`nowex:${cid}:羞耻获取`, 1);
          }
        }
        if (!inmon.on(plugin_enum.meek) && !inmon.on(plugin_enum.rel_lock)) {
          if (
            (got_hate_juels >= 10000 || hate_juels >= 3200) &&
            hate_mark < 3
          ) {
            era.set(`nowex:${cid}:反抗获取`, 3 - hate_mark);
          } else if (
            (got_hate_juels >= 7500 || hate_juels >= 2400) &&
            hate_mark < 2
          ) {
            era.set(`nowex:${cid}:反抗获取`, 2 - hate_mark);
          } else if (
            (got_hate_juels >= 5000 || hate_juels >= 1600) &&
            hate_mark < 1
          ) {
            era.set(`nowex:${cid}:反抗获取`, 1);
          }
        }
      }
    });
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
