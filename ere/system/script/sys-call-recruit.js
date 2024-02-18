const era = require('#/era-electron');

const get_aim_function = require('#/system/script/get-aim-function');
const { recruit_chara } = require('#/system/sys-init-chara');

const rec_common = require('#/event/rec/rec-common');
const check_before_rec = require('#/event/rec/snippets/check-before-rec');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const notes = require('#/data/notes.json');

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
      if (era.get('flag:超得') === chara_id) {
        era.set('flag:超得', 0);
      }
      if (!aim_func || !aim_func.override) {
        await era.printAndWait([
          { isBr: true },
          get_chara_talk(chara_id).get_colored_name(),
          ' 加入了队伍！',
        ]);
      }
      if (notes[chara_id]) {
        era.printMultiColumns([
          {
            content: '是否查看相关的小纸条？',
            type: 'text',
          },
          {
            accelerator: 0,
            config: { width: 12, align: 'center' },
            content: '查看',
            type: 'button',
          },
          {
            accelerator: 100,
            config: { width: 12, align: 'center' },
            content: '之后去首页确认',
            type: 'button',
          },
        ]);
        if (!(await era.input())) {
          notes[chara_id].forEach((e) => say_by_passer_by(e.title, e.content));
          await era.waitAnyKey();
        }
      }
    }
    return ret;
  } catch (e) {
    era.logger.error(e);
  }
}

module.exports = sys_call_rec_event;
