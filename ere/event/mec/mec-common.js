const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const check_stages = require('#/data/event/check-stages');

/** @type {Record<string,function(chara_id:number,extra_flag:*):*>} */
const handlers = {};

handlers[check_stages.mec_action_debuff] = () => 0;

handlers[check_stages.mec_callname_customize] = (chara_id) => {
  let callname;
  if (!era.get(`cflag:${chara_id}:父方角色`)) {
    callname = '爸爸';
  } else if (!era.get(`cflag:${chara_id}:母方角色`)) {
    callname = '妈妈';
  } else {
    switch (era.get('flag:惩戒力度')) {
      case 2:
        callname = '性奴';
        break;
      case 3:
        callname = '孕袋';
        break;
      default:
        callname = '训练员' + get_chara_talk(0).get_adult_sex_title();
    }
  }
  era.set(`callname:${chara_id}:0`, callname);
};

handlers[check_stages.mec_ero_check] = () => 0;

handlers[check_stages.mec_maxbase_buff] = () => 0;

handlers[check_stages.mec_motivation] = () => 0;

handlers[check_stages.mec_pressure_buff] = () => 0;

handlers[check_stages.mec_race_cloth] = (chara_id) => {
  const base = era.get(`cstr:${chara_id}:头像`);
  let temp;
  if ((temp = era.get(`cstr:${chara_id}`)) === -1) {
    return [`${base}_运`, base, 'default'];
  }
  return [`${base}${temp}`, base, `${base}_运`, 'default'];
};

handlers[check_stages.mec_race_buff] = () => 0;

handlers[check_stages.mec_sex_acceptable] = () => 0;

handlers[check_stages.mec_status] = () => [];

handlers[check_stages.mec_success_rate] = () => 0;

handlers[check_stages.mec_talents] = () => [];

handlers[check_stages.mec_train_buff] = () => 0;

/**
 * @param {number} chara_id
 * @param {number} stage_id
 * @param extra_flag
 * @returns {*}
 */
module.exports = (chara_id, stage_id, extra_flag) => {
  if (handlers[stage_id]) {
    return handlers[stage_id](chara_id, extra_flag);
  }
};
