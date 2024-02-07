const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');
const { recruit_chara } = require('#/system/sys-init-chara');

const rec_common = require('#/event/rec/rec-common');
const check_before_rec = require('#/event/rec/snippets/check-before-rec');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {number} chara_id
 * @param {number} stage
 * @param [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_rec_event(chara_id, stage, extra_flag, event_object) {
  let aim_func = undefined;
  try {
    const { func, _extra } = get_aim_function('rec', chara_id, extra_flag);
    aim_func = func;
    extra_flag = _extra;
  } catch (e) {
    if (e.message && !e.message.startsWith('unsupported')) {
      era.logger.error(e.message, e.stack);
    }
  }
  if (
    stage === event_hooks.recruit &&
    (!aim_func || !aim_func.override) &&
    (await check_before_rec(chara_id))
  ) {
    return false;
  }
  try {
    const ret = aim_func
      ? await aim_func.run(stage, extra_flag, event_object)
      : await rec_common(chara_id, stage);
    // 招募成功时初始化好感并重置育成回合
    if (era.get(`cflag:${chara_id}:招募状态`) === recruit_flags.yes) {
      recruit_chara(chara_id);
      if (!aim_func || !aim_func.override) {
        await era.printAndWait([
          { isBr: true },
          get_chara_talk(chara_id).get_colored_name(),
          ' 加入了队伍！',
        ]);
      }
    }
    return ret;
  } catch (e) {
    era.logger.error(e);
  }
}

module.exports = sys_call_rec_event;
