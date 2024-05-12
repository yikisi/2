const era = require('#/era-electron');

const print_page_header = require('#/page/components/page-header');

const CharaTalk = require('#/utils/chara-talk');

module.exports = async () => {
  let flag_save_game = true;
  let msg_notification = '';

  while (flag_save_game) {
    await era.clear();
    print_page_header();

    era.drawLine();
    msg_notification && era.print(msg_notification, { align: 'center' });

    era.drawLine();
    era.print('要保存至哪个栏位？');

    const buffer = [];
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
          config: { width: 4 },
          content: '改名',
          type: 'button',
        });
      }
    });
    era.printMultiColumns(buffer);

    era.drawLine();
    era.printButton('返回上一级', 99, { align: 'right' });

    let ret = await era.input();
    let comment;

    switch (ret) {
      case 99:
        flag_save_game = false;
        break;
      default:
        if (ret < 100) {
          const cur = era.get(`global:saves:${ret}`);
          if (cur && !cur.startsWith('(FILE LOST)')) {
            era.printMultiColumns([
              {
                content: `要覆盖 ${ret} 号栏位的存档吗？`,
                type: 'text',
              },
              {
                accelerator: 0,
                config: { align: 'center', width: 12 },
                content: '是',
                type: 'button',
              },
              {
                accelerator: 100,
                config: { align: 'center', width: 12 },
                content: '否',
                type: 'button',
              },
            ]);
            if (await era.input()) {
              break;
            }
          }
          comment = `${CharaTalk.me.actual_name} 于 ${new Date().toLocaleString(
            'zh-CN',
            { timeZone: 'Asia/Shanghai' },
          )} 保存的进度 (${era.get('flag:当前年')} 年 ${era.get(
            'flag:当前月',
          )} 月 第 ${era.get('flag:当前周')} 周)`;

          if (await era.saveData(ret, comment)) {
            msg_notification = `已成功保存至 ${ret} 号栏位`;
          }
        } else {
          let name;
          do {
            era.print(
              `${
                name ? '名字太长了！' : ''
              }请输入新的存档命名：（最长不超过50个字符）`,
            );
            name = await era.input();
          } while (name && name.length > 50);
          era.printMultiColumns([
            {
              content: `要将 ${ret - 100} 号栏位的存档改名为 [${name}] 吗？`,
              type: 'text',
            },
            {
              accelerator: 0,
              config: { align: 'center', width: 12 },
              content: '是',
              type: 'button',
            },
            {
              accelerator: 100,
              config: { align: 'center', width: 12 },
              content: '否',
              type: 'button',
            },
          ]);
          if ((await era.input()) === 0) {
            era.set(`global:saves:${ret - 100}`, name.toString());
            era.saveGlobal();
            msg_notification = `${ret - 100} 号栏位的存档改名成功`;
          } else {
            msg_notification = `放弃了给 ${ret - 100} 号栏位的存档改名`;
          }
        }
    }
  }
};
