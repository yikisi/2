const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const { check_satisfied } = require('#/system/ero/sys-calc-ero-status');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const page_ero = require('#/page/page-ero');

const { get_custom_ero } = require('#/event/ero/ero-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

const { i18n } = require('#/i18n/selector');

const debug = false;
const default_my_filter = new Array(5).fill(false);

/**
 * @param {number} cid
 * @param {number} [supporter=0]
 */
async function sys_rape_in_sleeping(cid, supporter = 0) {
  era.logger.debug(
    `角色 ${[cid, supporter].filter((e) => e).join(', ')} 睡奸发生！`,
  );
  begin_and_init_ero(0, cid);
  era.set('tflag:主导权', cid);
  era.set('tflag:当前对手', cid);
  if (supporter > 0) {
    init_ero(supporter);
    era.set('tflag:当前助手', supporter);
  }
  era.set('tflag:强奸', cid);
  let a_count = 0;
  let current = new Date().getTime();
  let r_flag = true;
  let wake_up = false;
  let temp;
  while (r_flag) {
    await sys_handle_ero_act(
      ero_hooks.relax,
      default_my_filter,
      debug || era.get('tflag:装睡') > 0,
    );
    a_count++;
    if (
      era.get(`tcvar:${cid}:逃跑`) > 0 ||
      (check_satisfied(cid) > 0 &&
        (!supporter || check_satisfied(supporter) > 0)) ||
      (wake_up =
        !era.get('tflag:装睡') &&
        !era.get('status:0:马跳S') &&
        era.get('base:0:体力') > 0 &&
        (temp = era.get('ex:0:TotalEX')) > 0 &&
        Math.random() < Math.min(temp, 5) * 0.05) ||
      a_count > 36
    ) {
      r_flag = false;
      if (
        wake_up &&
        (await select_yes_or_no(
          (supporter > 0
            ? i18n().timon.get_it_multi_rape_in_sleeping
            : i18n().timon.get_it_chara_rape_in_sleeping)(
            get_chara_talk(cid),
            get_chara_talk(0),
            supporter > 0 && get_chara_talk(supporter),
          ),
          i18n().ui_wur_sleep,
          i18n().ui_wur_wake,
        ))
      ) {
        wake_up = false;
        r_flag = true;
        era.set('tflag:装睡', 1);
      }
    }
  }
  current = new Date().getTime() - current;
  era.logger.debug(
    `角色 ${cid}${
      supporter > 0 ? ' & ' + supporter : ''
    } 睡奸完毕！${a_count} actions, ${current}ms, ${(current / a_count).toFixed(
      2,
    )} ms/action`,
  );
  if (wake_up) {
    if (
      !era.get(`cflag:${cid}:父方角色`) ||
      !era.get(`cflag:${cid}:母方角色`) ||
      (supporter > 0 &&
        (!era.get(`cflag:${supporter}:父方角色`) ||
          !era.get(`cflag:${supporter}:母方角色`)))
    ) {
      global_achievement.et_tu = 1;
    }
    await get_custom_ero(cid).raping_start(supporter);
    await page_ero(void 0, true);
  }
  await end_ero_and_show_result(wake_up || era.get('tflag:装睡') > 0);
  era.set('status:0:熬夜', 1 - era.get('status:0:马跳S'));
  era.set(`status:${cid}:熬夜`, 1);
  sys_like_chara(cid, 0, 25, false);
  if (supporter > 0) {
    era.set(`status:${supporter}:熬夜`, 1);
    sys_like_chara(supporter, 0, 25, false);
  } else if (sys_check_yandere(cid, (y) => y === 2)) {
    era.set('flag:床伴', cid);
  }
  era.set('status:0:沉睡', 1);
}

module.exports = sys_rape_in_sleeping;
