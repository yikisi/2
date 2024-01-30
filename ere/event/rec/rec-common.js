const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 通用招募事件
 *
 * @author 雞雞
 *
 * @param {number} chara_id
 * @param {number} stage_id
 * @returns {Promise<boolean>}
 */
module.exports = async (chara_id, stage_id) => {
  if (stage_id === event_hooks.recruit) {
    const chara = get_chara_talk(chara_id);
    await era.printAndWait([
      CharaTalk.me.get_colored_name(),
      ' 积极地把 ',
      chara.get_colored_name(),
      ' 招揽进自己的队伍……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 在仔细思考后，点头答应了！',
    ]);
    era.set(`cflag:${chara_id}:招募状态`, recruit_flags.yes);
  }
  return false;
};
