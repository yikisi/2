const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');
const check_stages = require('#/data/event/check-stages');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { distance_enum, ground_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

const handlers = {};

handlers[check_stages.mec_callname_customize] = () => {
  era.set('callname:52:0', '训练员');
};

/** @param {PseudoUma} uma */
handlers[check_stages.mec_race_customize] = (uma) => {
  const { dad, fans, gad, sbuff } = new UraraEduMarks(),
    attr_buff = Math.min(Math.floor(fans / 500), 200 * (1 + sbuff));
  if (attr_buff) {
    uma.attr_buffs.forEach((l) => l.push(`+${attr_buff}[粉丝支持]`));
  }
  const info = race_infos[era.get('flag:当前赛事')];
  uma.adapt_ground_list[ground_enum.grass] = Math.min(
    uma.adapt_ground_list[ground_enum.grass] + gad,
    7,
  );
  if (gad && info.ground === ground_enum.grass) {
    uma.ground_buffs.push(`+${gad}[回响(${gad})]`);
  }
  uma.adapt_distance_list[distance_enum.long] = Math.min(
    uma.adapt_distance_list[distance_enum.long] + dad,
    7,
  );
  uma.adapt_distance_list[distance_enum.medium] = Math.min(
    uma.adapt_distance_list[distance_enum.medium] + dad,
    7,
  );
  if (
    dad &&
    (info.distance === distance_enum.long ||
      info.distance === distance_enum.medium)
  ) {
    uma.dis_buffs.push(`+${dad}[回响(${dad})]`);
  }
};

handlers[check_stages.mec_status] = () => {
  const { gad, dad } = new UraraEduMarks(),
    ret_list = [];
  if (gad || dad) {
    ret_list.push({
      color: get_chara_color(52),
      content: `回响(${gad + dad})`,
      title:
        `[回响(${gad + dad})]：？？？「若能相互理解，现实也能予以共鸣。」参赛时：` +
        [
          gad ? `草地适性上升 ${gad} 级` : '',
          dad ? `中&长距离适性上升 ${dad} 级` : '',
        ]
          .filter((e) => e)
          .join('，'),
    });
  }
  return ret_list;
};

/**
 * @param {number} stage_id
 * @param extra_flag
 */
module.exports = (stage_id, extra_flag) => {
  if (!handlers[stage_id]) {
    throw new Error('unsupported stage!');
  }
  return handlers[stage_id](extra_flag);
};
