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

    era.printMultiColumns(
      new Array(10).fill(0).map((_, e) => {
        const ind = e + 1;
        const comm_desc = era.get(`global:saves:${ind}`);
        return {
          accelerator: ind,
          config: { width: 23 },
          content: comm_desc || '空存档栏位',
          type: 'button',
        };
      }),
    );

    era.drawLine();
    era.printButton('返回上一级', 99, { align: 'right' });

    let ret = await era.input();
    let comment;

    switch (ret) {
      case 99:
        flag_save_game = false;
        break;
      default:
        comment = `${CharaTalk.me.actual_name} 于 ${new Date().toLocaleString(
          'zh-CN',
          { timeZone: 'Asia/Shanghai' },
        )} 保存的进度 (${era.get('flag:当前年')} 年 ${era.get(
          'flag:当前月',
        )} 月 第 ${era.get('flag:当前周')} 周)`;

        if (await era.saveData(ret, comment)) {
          msg_notification = `已成功保存至 ${ret} 号栏位`;
        }
        break;
    }
  }
};
