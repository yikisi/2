const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');

/***/
const handlers = {};

handlers[check_stages.mec_callname_customize] = () => {
  if (era.get('love:37') >= 75) {
    era.set('callname:37:0', [
      `训练员${get_chara_talk(0).get_adult_sex_title()}`,
      get_chara_talk(0).sex_code - 1 ? 'Mein Lieben' : 'Mein Lieber',
    ]);
  } else {
    era.set(
      'callname:37:0',
      `训练员${get_chara_talk(0).get_adult_sex_title()}`,
    );
  }
};

handlers[check_stages.mec_motivation] = () => -1 * era.get('status:37:虚弱');

handlers[check_stages.mec_race_buff] = () =>
  0.5 * era.get('status:37:荣耀德比');

handlers[check_stages.mec_success_rate] = () => -3 * era.get('status:37:分心');

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
