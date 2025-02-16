const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const recruit_flags = require('#/data/event/recruit-flags');

/** @param {CharaTalk} chara */
async function take_care(chara) {
  const curr = era.get(`cflag:${chara.id}:照看`);
  era.print(
    curr > 0
      ? [
          chara.get_colored_name(),
          ' 现在正在照看 ',
          get_chara_talk(curr).get_colored_name(),
          '……要切换照看角色吗？',
        ]
      : ['想请 ', chara.get_colored_name(), ' 照看谁？'],
  );
  era.printMultiColumns(
    era
      .getAddedCharacters()
      .filter(
        (e) =>
          e > 0 &&
          era.get(`cflag:${e}:招募状态`) === recruit_flags.yes &&
          era.get(`cflag:${e}:育成回合计时`) < 3 * 48,
      )
      .map((e) => {
        const teach = curr === e ? chara.id : era.get(`cflag:${e}:照看`);
        return {
          accelerator: e,
          config: { align: 'center', disabled: curr === e, width: 6 },
          content:
            era.get(`callname:${e}:-2`) +
            (curr === e
              ? '（照看中）'
              : teach > 0
                ? `（${era.get(`callname:${teach}:-2`)} 照看中）`
                : ''),
          type: 'button',
        };
      }),
  );
  era.printButton('取消照看', 998, { disabled: curr === 0 });
  era.printButton('保持原状', 999);
  const ret = await era.input();
  if (ret === 999) {
    if (curr > 0) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 会继续照看 ',
        get_chara_talk(curr).get_colored_name(),
        '……',
      ]);
    }
  } else if (ret === 998) {
    era.set(`cflag:${curr}:照看`, 0);
    era.set(`cflag:${chara.id}:照看`, 0);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 不再照看 ',
      get_chara_talk(curr).get_colored_name(),
      ' 了……',
    ]);
  } else {
    await era.printAndWait([
      chara.get_colored_name(),
      ' 从现在开始将照看 ',
      get_chara_talk(ret).get_colored_name(),
      '……',
    ]);
    sys_like_chara(
      chara.id,
      0,
      -get_random_value(25, 50 + era.get(`talent:${ret}:病娇`) * 2),
    ) && (await era.waitAnyKey());
    if (curr > 0) {
      era.set(`cflag:${curr}:照看`, 0);
    }
    era.set(`cflag:${chara.id}:照看`, ret);
    let temp;
    if ((temp = era.get(`cflag:${ret}:照看`)) > 0) {
      era.set(`cflag:${temp}:照看`, 0);
    }
    era.set(`cflag:${ret}:照看`, chara.id);
  }
}

module.exports = take_care;
