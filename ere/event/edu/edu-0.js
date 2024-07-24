const {
  get,
  input,
  printAndWait,
  printInColRows,
  println,
  replaceInColRows,
  set,
} = require('#/era-electron');

const check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_filter_chara = require('#/system/sys-filter-chara');
const { reset_chara } = require('#/system/sys-init-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * 玩家育成事件 - 重复育成
 *
 * @author 天马闪光蹄
 *
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (
    hook.hook !== event_hooks.week_end ||
    event_object.arg !== 'second_chance'
  ) {
    throw new Error();
  }
  const team_limit = -check_team_limit();
  let second_list = sys_filter_chara(
    'cflag',
    '招募状态',
    recruit_flags.yes,
  ).filter((e) => get(`cflag:${e}:可再次育成`) > 0);
  if (second_list.length === 0 || team_limit <= 0) {
    return;
  }
  const me = get_chara_talk(0);
  let yes_button = '继续前进',
    no_button = '就此回头';
  await print_event_name('「梦」', me);
  if (get('flag:初见重复育成') === 1) {
    await printAndWait('夜深人静。');
    await printAndWait([me.get_colored_name(), ' 独自前往特雷森的学院中心。']);
    await printAndWait('一尊三女神的雕塑安然竖立于此。');
    await printAndWait([
      me.get_colored_name(),
      ' 深呼吸，走向泉边，将自己先前所写的书信敬上，投入水中。',
    ]);
    await printAndWait([
      '池里倒映的月光霎时轻摇起来，一片幽光浮动，',
      me.get_colored_name(),
      ' 感觉到数个声音一齐在脑中回荡——',
    ]);
    await printAndWait(
      '人生无常，无论是一马当先的勇者，统治世代的霸主又或是制御领域的帝皇，所经之路都未必一帆风顺，无论光辉黑暗，终究是梦幻的泡影。',
    );
    await printAndWait(
      '不过，噩梦终会逝去，美梦也能成真。浮沫中，也有想要捞出保存的事物。',
    );
    await me.say_as_unknown_and_wait('那么，告诉我你的决心。');
    yes_button = '「我就是为此而来」';
    no_button = '「……已经够了」';
  } else {
    await printAndWait([me.get_colored_name(), ' 又一次回到了这个地方。']);
    await printAndWait([
      '这是……第几次？',
      me.get_colored_name(),
      ' 对此的记忆诡异地模糊起来。',
    ]);
    await printAndWait('不过，这不是关键……');
    await printAndWait([me.get_colored_name(), ' 心中所想之事，才是必需。']);
  }
  const second_dict = {};
  let second_count = 0,
    flag_print = true,
    flag_select = true;
  while (flag_select) {
    (flag_print ? printInColRows : replaceInColRows)(
      {
        columns: [
          {
            type: 'divider',
            config: {
              content: `请选择要再次育成的角色 (最多选择 ${team_limit} 名)`,
            },
          },
          ...second_list.map((e) => ({
            accelerator: e,
            config: {
              align: 'center',
              buttonType: second_dict[e] ? 'warning' : 'info',
              disabled: get(`cflag:${e}:被继承`),
              width: 8,
            },
            content: `${get(`callname:${e}:-1`)}${get(`cflag:${e}:被继承`) ? ' (已被继承)' : ''}`,
            type: 'button',
          })),
        ],
        config: { horizontalAlign: 'space-evenly' },
      },
      [
        {
          accelerator: 1001,
          config: {
            align: 'center',
            disabled: second_count === 0 || second_count > team_limit,
            width: 12,
          },
          content: yes_button,
          type: 'button',
        },
        {
          accelerator: 1002,
          config: { align: 'center', width: 12 },
          content: no_button,
          type: 'button',
        },
      ],
    );
    flag_print = false;
    const ret = await input({ hideInput: true });
    if (ret === 1001) {
      flag_select = false;
    } else if (ret === 1002) {
      Object.keys(second_dict).forEach((k) => delete second_dict[k]);
      flag_select = false;
    } else {
      if ((second_dict[ret] = !second_dict[ret])) {
        second_count++;
      } else {
        second_count--;
      }
    }
  }
  second_list = Object.entries(second_dict)
    .filter((e) => e[1])
    .map((e) => Number(e[0]));
  if (second_list.length > 0) {
    println();
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        me.get_colored_name(),
        ' 望向雕像的面部，盯着那三对灵动似真的眼眸，俯首行礼。',
      ]);
      await printAndWait('随后，一片光彩绽放——');
      await printAndWait('是时候追寻「下一次」的真实了。');
    } else {
      await printAndWait([
        me.get_colored_name(),
        ' 看着三女神的塑像，水雾模糊了她们的面容，',
        me.get_colored_name(),
        ' 想做些什么，刚欲张口伸手，却——',
      ]);
      await printAndWait('眼前的一切在面前扭曲。');
      await printAndWait('随后立刻恢复，仿佛什么都没发生过。');
      await printAndWait('……');
      await printAndWait('一切如常……或有不同？');
      await printAndWait('自己……做了什么来着？');
    }
    second_list.forEach((e) => {
      set(`cflag:${e}:育成回合计时`, 'x');
      reset_chara(e);
      get_custom_check(e).check_second_chance();
    });
  }
  set('flag:初见重复育成', 2);
};
