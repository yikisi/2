const era = require('#/era-electron');

const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_display_width } = require('#/utils/value-utils');

const { get_save_name } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

module.exports = async () => {
  const save_count = Math.min(
    era.get('gameconfig')?.system.saveFiles ?? 10,
    50,
  );

  let flag_save_game = true;
  let msg_notification = '';

  while (flag_save_game) {
    await era.clear();
    print_page_header();

    const buffer = [];
    if (msg_notification) {
      buffer.push(
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: msg_notification,
          type: 'text',
        },
      );
    }
    buffer.push({
      config: { content: i18n().ui_save_game_header },
      type: 'divider',
    });
    new Array(save_count).fill(0).forEach((_, i) => {
      const ind = i + 1;
      const comm_desc = era.get(`global:saves:${ind}`);
      buffer.push({
        accelerator: ind,
        config: { width: 20 },
        content: comm_desc || i18n().ui_empty_save,
        type: 'button',
      });
      if (comm_desc && !comm_desc.startsWith('(FILE LOST)')) {
        buffer.push({
          accelerator: ind + 100,
          config: { align: 'right', width: 4 },
          content: i18n().ui_save_rename,
          type: 'button',
        });
      }
    });
    buffer.push(
      { type: 'divider' },
      {
        accelerator: 97,
        config: { width: 8 },
        content: i18n().ui_save_name_save,
        type: 'button',
      },
      {
        accelerator: 98,
        config: { disabled: !era.get('flag:存档名'), width: 8 },
        content: i18n().ui_save_remove_save,
        type: 'button',
      },
      {
        accelerator: 99,
        config: { align: 'right', width: 8 },
        content: i18n().ui_back,
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);

    let ret = await era.input();

    switch (ret) {
      case 97:
        era.print(i18n().ui_save_name_save_header);
        ret = '';
        do {
          if (ret) {
            era.print(di18n.get_too_long(20));
          }
          ret = await era.input();
        } while (ret && get_display_width(ret) > 20);
        if (
          await select_yes_or_no(
            i18n().ui_save_name_save_confirm_template.replace('%NAME%', ret),
          )
        ) {
          era.set('flag:存档名', ret);
          msg_notification = i18n().ui_save_name_save_result_template.replace(
            '%NAME%',
            ret,
          );
        }
        break;
      case 98:
        if (
          await select_yes_or_no(
            i18n().ui_save_name_remove_confirm_template.replace(
              '%NAME%',
              era.get('flag:存档名'),
            ),
          )
        ) {
          era.set('flag:存档名', '');
          msg_notification = i18n().ui_save_name_remove_result;
        }
        break;
      case 99:
        flag_save_game = false;
        break;
      default:
        if (ret < 100) {
          const cur = era.get(`global:saves:${ret}`);
          if (cur && !cur.startsWith('(FILE LOST)')) {
            if (
              !(await select_yes_or_no(
                i18n().ui_save_override_confirm_template.replace(
                  '%NO%',
                  ret.toString(),
                ),
              ))
            ) {
              break;
            }
          }

          if (await era.saveData(ret, get_save_name())) {
            msg_notification = i18n().ui_save_save_result_template.replace(
              '%NO%',
              ret.toString(),
            );
          }
        } else {
          let name;
          era.print(i18n().ui_save_name_save_header);
          do {
            if (name) {
              era.print(di18n.get_too_long(40));
            }
            name = await era.input();
          } while (name && get_display_width(name) > 40);
          if (
            await select_yes_or_no(
              i18n()
                .ui_save_rename_confirm_template.replace(
                  '%NO%',
                  (ret - 100).toString(),
                )
                .replace('%NAME%', name),
            )
          ) {
            era.set(`global:saves:${ret - 100}`, name.toString());
            await era.saveGlobal();
            msg_notification = i18n().ui_save_rename_result_template.replace(
              '%NO%',
              (ret - 100).toString(),
            );
          } else {
            msg_notification = i18n().ui_save_rename_cancel_template.replace(
              '%NO%',
              (ret - 100).toString(),
            );
          }
        }
    }
  }
};
