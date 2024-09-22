const era = require('#/era-electron');

const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const get_aim_function = require('#/system/script/get-aim-function');
const { recruit_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const rec_common = require('#/event/rec/rec-common');
const check_before_rec = require('#/event/rec/snippets/check-before-rec');
const punish_by_yandere = require('#/event/snippets/punish-by-yandere');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const notes = require('#/data/notes.json');

/**
 * @param {number} chara_id
 * @param {number} hook
 * @param [extra_flag]
 * @param {EventObject} [event_object]
 */
async function sys_call_rec_event(chara_id, hook, extra_flag, event_object) {
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
    hook === event_hooks.recruit &&
    (!aim_func || !aim_func.override) &&
    (await check_before_rec(chara_id))
  ) {
    return false;
  }
  try {
    const ret = aim_func
      ? await aim_func.run(hook, extra_flag, event_object)
      : await rec_common(chara_id, hook);
    // 招募成功时初始化好感并重置育成回合
    if (era.get(`cflag:${chara_id}:招募状态`) === recruit_flags.yes) {
      recruit_chara(chara_id);
      let temp;
      if ((temp = sys_get_star_premium_draw()).chara === chara_id) {
        temp.chara = 0;
        temp.cost += 20;
      }
      if (!aim_func || !aim_func.override) {
        await era.printAndWait([
          { isBr: true },
          get_chara_talk(chara_id).get_colored_name(),
          ' 加入了队伍！',
        ]);
      }
      if (notes[chara_id]) {
        if (
          await select_yes_or_no(
            '是否查看相关的小纸条？',
            '查看',
            '之后去首页确认',
          )
        ) {
          notes[chara_id].forEach((e) =>
            era.print(
              [{ content: e.title, fontWeight: 'bold' }, '「', e.content, '」'],
              { color: get_chara_color(chara_id) },
            ),
          );
          await era.waitAnyKey();
        }
      }
    }
    await punish_by_yandere(chara_id, hook);
    return ret;
  } catch (e) {
    era.logger.error(e);
  }
}

module.exports = sys_call_rec_event;
