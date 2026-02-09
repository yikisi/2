const era = require('#/era-electron');

const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_display_width } = require('#/utils/value-utils');

const { get_save_name } = require('#/data/info-generator');

const di18n = require('#/i18n/extended-def');

module.exports = async () => {
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
    buffer.push({ config: { content: '要保存至哪个栏位？' }, type: 'divider' });
    new Array(10).fill(0).forEach((_, e) => {
      const ind = e + 1;
      const comm_desc = era.get(`global:saves:${ind}`);
      buffer.push({
        accelerator: ind,
        config: { width: 20 },
        content: comm_desc || '空存档栏位',
        type: 'button',
      });
      if (comm_desc && !comm_desc.startsWith('(FILE LOST)')) {
        buffer.push({
          accelerator: ind + 100,
          config: { align: 'right', width: 4 },
          content: '改名',
          type: 'button',
        });
      }
    });
    buffer.push(
      { type: 'divider' },
      {
        accelerator: 97,
        config: { width: 8 },
        content: '为这个故事命名',
        type: 'button',
      },
      {
        accelerator: 98,
        config: { disabled: !era.get('flag:存档名'), width: 8 },
        content: '取消这个故事的命名',
        type: 'button',
      },
      {
        accelerator: 99,
        config: { align: 'right', width: 8 },
        content: '返回上一级',
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);

    let ret = await era.input();

    switch (ret) {
      case 97:
        era.print('请输入存档命名：');
        ret = '';
        do {
          if (ret) {
            era.print(di18n.get_too_long(20));
          }
          ret = await era.input();
        } while (ret && get_display_width(ret) > 20);
        if (
          await select_yes_or_no(
            `要将这个故事${era.get('flag:存档名') ? '改名' : '取名'}为 [${ret}] 吗？`,
            '是',
            '否',
          )
        ) {
          era.set('flag:存档名', ret);
          msg_notification = `为这个故事取名为 [${ret}]……`;
        }
        break;
      case 98:
        if (
          await select_yes_or_no(
            `要取消这个故事的命名 [${era.get('flag:存档名')}] 吗？`,
            '是',
            '否',
          )
        ) {
          era.set('flag:存档名', '');
          msg_notification = '取消了存档的命名，下次保存将使用默认名……';
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
                `要覆盖 ${ret} 号栏位的存档吗？`,
                '是',
                '否',
              ))
            ) {
              break;
            }
          }

          if (await era.saveData(ret, get_save_name())) {
            msg_notification = `已成功保存至 ${ret} 号栏位`;
          }
        } else {
          let name;
          era.print('请输入新的存档命名：');
          do {
            if (name) {
              era.print(di18n.get_too_long(40));
            }
            name = await era.input();
          } while (name && get_display_width(name) > 40);
          if (
            await select_yes_or_no(
              `要将 ${ret - 100} 号栏位的存档改名为 [${name}] 吗？`,
              '是',
              '否',
            )
          ) {
            era.set(`global:saves:${ret - 100}`, name.toString());
            await era.saveGlobal();
            msg_notification = `${ret - 100} 号栏位的存档改名成功`;
          } else {
            msg_notification = `放弃了给 ${ret - 100} 号栏位的存档改名`;
          }
        }
    }
  }
};
