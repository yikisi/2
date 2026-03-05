const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_display_name = require('#/utils/calc-display-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { i18n } = require('#/i18n/selector');

/** @param {CharaTalk} chara */
async function take_care(chara) {
  const curr = era.get(`cflag:${chara.id}:照看`);
  era.print(
    curr > 0
      ? i18n().get_ui_take_care_change_confirm(
          chara.get_colored_name(),
          get_chara_talk(curr).get_colored_name(),
        )
      : i18n().get_ui_take_care(chara.get_colored_name()),
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
        const name = get_display_name(era.get(`callname:${e}:-2`));
        const teach = curr !== e && era.get(`cflag:${e}:照看`);
        return {
          accelerator: e,
          config: { align: 'center', disabled: curr === e, width: 8 },
          content:
            curr === e
              ? i18n().ui_take_care_aim_continue_template.replace(
                  '%NAME%',
                  name,
                )
              : teach > 0
                ? i18n()
                    .ui_take_care_aim_taken_template.replace('%NAME%', name)
                    .replace(
                      '%TEACHER%',
                      get_display_name(era.get(`callname:${teach}:-2`)),
                    )
                : name,
          type: 'button',
        };
      }),
  );
  era.printButton(i18n().ui_take_care_bt_cancel, 998, { disabled: curr === 0 });
  era.printButton(i18n().ui_take_care_bt_keep, 999);
  const ret = await era.input();
  if (ret === 999) {
    if (curr > 0) {
      await era.printAndWait(
        i18n().get_ui_take_care_continue(
          chara.get_colored_name(),
          get_chara_talk(curr).get_colored_name(),
        ),
      );
    }
  } else if (ret === 998) {
    era.set(`cflag:${curr}:照看`, 0);
    era.set(`cflag:${chara.id}:照看`, 0);
    await era.printAndWait(
      i18n().get_ui_take_care_cancel(
        chara.get_colored_name(),
        get_chara_talk(curr).get_colored_name(),
      ),
    );
  } else {
    await era.printAndWait(
      i18n().get_ui_take_care_change(
        chara.get_colored_name(),
        get_chara_talk(ret).get_colored_name(),
      ),
    );
    const inmon = CharaInmon.get(chara.id);
    if (sys_check_cuckold(chara.id, inmon)) {
      if (sys_like_chara(chara.id, 0, get_random_value(10, 25))) {
        await era.waitAnyKey();
      }
    } else if (
      !inmon.on(plugin_enum.no_yand) &&
      sys_like_chara(
        chara.id,
        0,
        -get_random_value(25, 50 + era.get(`talent:${chara.id}:病娇`) * 2),
      )
    ) {
      await era.waitAnyKey();
    }
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
