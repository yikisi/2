const era = require('#/era-electron');

const event_queue = require('#/event/queue');
const call_daily_script = require('#/system/script/sys-call-daily-script');
const filter_chara = require('#/system/sys-filter-chara');

const print_page_header = require('#/page/components/page-header');

const CharaTalk = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * load game
 * @return {Promise<boolean>} if true, tell main.js to call homepage
 */
module.exports = async () => {
  let flag_load_game = true;
  let msg_notification = '';

  while (flag_load_game) {
    era.clear();
    print_page_header();

    era.drawLine();
    msg_notification && era.print(msg_notification, { align: 'center' });

    era.drawLine();
    era.print('要从哪个栏位读取？');

    const buffer = [];
    new Array(11).fill(0).forEach((_, e) => {
      let comm_desc = era.get(`global:saves:${e}`);
      const enabled = comm_desc && !comm_desc.startsWith('(FILE LOST)');
      buffer.push({
        accelerator: e,
        config: { disabled: !enabled, width: 22 },
        content: comm_desc || '空存档栏位',
        type: 'button',
      });
      if (enabled) {
        buffer.push({
          accelerator: e + 20,
          config: { align: 'right', width: 2 },
          content: '删除',
          type: 'button',
        });
      }
    });
    era.printMultiColumns(buffer);

    era.drawLine();
    era.printButton('返回上一级', 99, { align: 'right' });

    let ret = await era.input();

    switch (ret) {
      case 99:
        flag_load_game = false;
        break;
      default:
        if (ret < 20) {
          if (era.get('flag:读档对话')) {
            for (const chara_id of filter_chara(
              'cflag',
              '招募状态',
              recruit_flags.yes,
            )) {
              await call_daily_script(chara_id, event_hooks.load_talk);
            }
          }
          if (!(await era.loadData(ret))) {
            msg_notification = `未能成功读取 ${ret} 号栏位的存档`;
          } else {
            flag_load_game = false;
            event_queue.init();
            CharaTalk.me = new CharaTalk(0);
            return true;
          }
        } else if (era.rmData(ret - 20)) {
          msg_notification = `成功删除 ${ret - 20} 号栏位的存档`;
        }
        break;
    }
  }
};
