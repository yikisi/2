const era = require('#/era-electron');

const { check_satisfied } = require('#/system/ero/sys-calc-ero-status');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const page_ero = require('#/page/page-ero');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');

const debug = false;
const default_my_filter = new Array(5).fill(false);

/**
 * @param {number} chara_id
 * @param {number} [supporter]
 */
async function sys_rape_in_sleeping(chara_id, supporter) {
  era.logger.debug(`角色 ${chara_id} 睡奸发生！`);
  begin_and_init_ero(0, chara_id);
  era.set('tflag:主导权', chara_id);
  era.set('tflag:当前对手', chara_id);
  if (supporter) {
    init_ero(supporter);
    era.set('tflag:当前助手', supporter);
  }
  era.set('tflag:强奸', chara_id);
  let action_count = 0,
    current = new Date().getTime(),
    flag_rape = true,
    wake_up = false,
    temp;
  while (flag_rape) {
    await sys_handle_ero_act(ero_hooks.relax, default_my_filter, debug);
    action_count++;
    if (
      era.get(`tcvar:${chara_id}:逃跑`) ||
      (check_satisfied(chara_id) &&
        (!supporter || check_satisfied(supporter))) ||
      (wake_up =
        !era.get('status:0:马跳S') &&
        era.get('base:0:体力') > 0 &&
        (temp = era.get('ex:0:TotalEX')) > 0 &&
        Math.random() < Math.min(temp, 5) * 0.05)
    ) {
      flag_rape = false;
    }
  }
  current = new Date().getTime() - current;
  era.logger.debug(
    `角色 ${chara_id}${
      supporter ? ' & ' + supporter : ''
    } 睡奸完毕！${action_count} actions, ${current}ms, ${(
      current / action_count
    ).toFixed(2)} ms/action`,
  );
  if (wake_up) {
    era.set('status:0:沉睡', 0);
    await era.printAndWait([
      '强烈的刺激使 ',
      get_chara_talk(0).get_colored_name(),
      ' 从睡梦中惊醒，发现 ',
      get_chara_talk(chara_id).get_colored_name(),
      ...(supporter
        ? [' 与 ', get_chara_talk(supporter).get_colored_name()]
        : []),
      ' 伏在身上！',
    ]);
    await page_ero(undefined, true);
    era.getCharactersInTrain().forEach((e) => era.add(`exp:${e}:睡奸次数`, -1));
    era.set('status:0:沉睡', 1);
  }
  await end_ero_and_show_result(wake_up);
  era.endTrain();
  era.set('status:0:熬夜', 1 - era.get('status:0:马跳S'));
  era.set(`status:${chara_id}:熬夜`, 1);
  sys_like_chara(chara_id, 0, 25, false);
  if (supporter > 0) {
    era.set(`status:${supporter}:熬夜`, 1);
    sys_like_chara(supporter, 0, 25, false);
  } else if (era.get(`talent:${chara_id}:病娇`) === 2) {
    era.set('flag:床伴', chara_id);
  }
}

module.exports = sys_rape_in_sleeping;
