const era = require('#/era-electron');

const { sys_get_chara } = require('#/system/chara/sys-calc-characteristic');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { sort_list } = require('#/utils/list-utils');

const CharaSkills = require('#/data/chara-skills');
const { get_trainer_level } = require('#/data/info-generator');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceHistory = require('#/data/race/model/race-history');
const { race_infos } = require('#/data/race/race-const');
const { track2location } = require('#/data/race/race-location');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names, attr_names } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @returns {PseudoUma}
 */
function sys_get_chara_pseudo(chara_id) {
  const adapt_list = adaptability_names.map((adapt) =>
      era.get(`cflag:${chara_id}:${adapt}适性`),
    ),
    debuff = era.get(`status:${chara_id}:客场作战`),
    uma = new PseudoUma(
      chara_id,
      era.get(`callname:${chara_id}:-1`),
      get_chara_talk(chara_id).color,
      era.get(`cflag:${chara_id}:干劲`),
      attr_names.map((attr) => era.get(`base:${chara_id}:${attr}`)),
      era.get(`cflag:${chara_id}:跑法`),
      adapt_list.slice(6, 10),
      adapt_list.slice(2, 6).map((adapt) => adapt - debuff),
      adapt_list.slice(0, 2).map((adapt) => adapt - debuff),
      new CharaSkills(chara_id).get().map((e) => skills_dict[e]),
    );
  uma.chara = sys_get_chara(chara_id);
  uma.base.winCount = new RaceHistory(chara_id)
    .get_values()
    .filter((e) => e.rank === 1).length;
  if (debuff) {
    uma.ground_buffs.push(`-${debuff}[客场作战(${debuff})]`);
    uma.dis_buffs.push(`-${debuff}[客场作战${debuff}]`);
  }
  let temp;
  if ((temp = era.get(`status:${chara_id}:疲惫`))) {
    uma.attr_buffs.forEach((l) => l.push(`-${5 * temp}%[疲惫(${temp})]`));
  }
  if (era.get(`status:${chara_id}:领域`)) {
    uma.attr_buffs.forEach((l) => l.push('+5%[领域！]'));
  }
  if ((temp = era.get(`status:${chara_id}:水土不服`))) {
    uma.attr_buffs
      .slice(0, 3)
      .forEach((l) => l.push(`-${5 * temp}%[水土不服(${temp})]`));
  }
  if ((temp = era.get(`status:${chara_id}:语言不通`))) {
    uma.attr_buffs
      .slice(3)
      .forEach((l) => l.push(`-${5 * temp}%[语言不通(${temp})]`));
  }
  const stamina_ratio =
      era.get(`base:${chara_id}:体力`) / era.get(`maxbase:${chara_id}:体力`),
    time_ratio =
      era.get(`base:${chara_id}:精力`) / era.get(`maxbase:${chara_id}:精力`);
  if (stamina_ratio < 0.3) {
    uma.attr_buffs.slice(0, 3).forEach((l) => l.push('-50%[体力低下]'));
  } else if (stamina_ratio < 0.5) {
    uma.attr_buffs.slice(0, 3).forEach((l) => l.push('-20%[体力不足]'));
  }
  if (time_ratio < 0.3) {
    uma.attr_buffs.slice(3).forEach((l) => l.push('-50%[精力低下]'));
  } else if (time_ratio < 0.5) {
    uma.attr_buffs.slice(3).forEach((l) => l.push('-20%[精力不足]'));
  }
  switch (era.get(`cflag:${chara_id}:妊娠阶段`)) {
    // 早期
    case 0b100:
      uma.attr_buffs.forEach((l) => l.push('-5%[孕早期]'));
      break;
    // 安定
    case 0b1000:
      uma.attr_buffs.forEach((l) => l.push('+5%[安定期]'));
      break;
    // 晚期
    case 0b10000:
      uma.attr_buffs.forEach((l) => l.push('-10%[孕晚期]'));
  }
  get_custom_mec(uma.index_chara).set_pseudo_uma(uma);
  uma.attr_buffs = uma.attr_buffs.map((l, i) => {
    const buffs = l.map((e) => {
      const ret = { buff: e },
        val_str = e.substring(0, e.indexOf('['));
      if (val_str.endsWith('%')) {
        ret.val = Number(val_str.substring(0, val_str.length - 1));
        ret.p = true;
      } else {
        ret.val = Number(val_str);
      }
      return ret;
    });
    uma.attrs[i] *=
      100 + buffs.filter((e) => e.p).reduce((p, c) => p + c.val, 0);
    uma.attrs[i] = Math.floor(uma.attrs[i] / 100);
    uma.attrs[i] += buffs.filter((e) => !e.p).reduce((p, c) => p + c.val, 0);
    return sort_list(buffs, (e) => (e.p ? 10000 + e.val : e.val), false).map(
      (e) => e.buff,
    );
  });
  uma.adapt_ground_list = uma.adapt_ground_list.map((e) =>
    Math.min(Math.max(e, 0), 7),
  );
  uma.ground_buffs = sort_list(
    uma.ground_buffs,
    (buff) => Number(buff.substring(0, buff.indexOf('['))),
    false,
  );
  uma.adapt_distance_list = uma.adapt_distance_list.map((e) =>
    Math.min(Math.max(e, 0), 7),
  );
  uma.dis_buffs = sort_list(
    uma.dis_buffs,
    (buff) => Number(buff.substring(0, buff.indexOf('['))),
    false,
  );
  temp = track2location[race_infos[era.get('flag:当前赛事')].track];
  if (temp) {
    uma.base.language = era.get(`abl:${chara_id}:${temp.lan}语`);
  }
  temp = uma.attrs.reduce((p, c) => p + c, 0) / 5;
  uma.base.attr_err = uma.attrs.reduce((p, c) => p + (c - temp) ** 2, 0) / 5;
  uma.base.weight = era.get(`base:${chara_id}:体重偏差`);
  uma.base.research_lv = attr_names.reduce(
    (p, c) => p + era.get(`abl:${chara_id}:${c}训练等级`),
    0,
  );
  uma.base.fame = get_trainer_level();
  return uma;
}

module.exports = sys_get_chara_pseudo;
