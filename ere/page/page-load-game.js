const era = require('#/era-electron');

const event_queue = require('#/event/queue');
const call_daily_script = require('#/system/script/sys-call-daily-script');
const filter_chara = require('#/system/sys-filter-chara');

const print_page_header = require('#/page/components/page-header');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const CrazyFans = require('#/data/event/crazy-fans');
const event_hooks = require('#/data/event/event-hooks');
const GrandLives = require('#/data/event/grand-lives');
const LocCharacters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * load game
 * @return {Promise<boolean>} if true, tell main.js to call homepage
 */
module.exports = async () => {
  let flag_load_game = true;
  let msg_notification = '';

  while (flag_load_game) {
    await era.clear();
    print_page_header(true);

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
        config: { disabled: !enabled, width: 20 },
        content: comm_desc || '空存档栏位',
        type: 'button',
      });
      if (comm_desc) {
        buffer.push({
          accelerator: e + 100,
          config: { align: 'right', width: 4 },
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
        if (ret < 100) {
          if (era.get('flag:读档对话')) {
            await call_daily_script(
              get_random_entry(
                filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
                  (e) => e,
                ),
              ),
              event_hooks.load_talk,
            );
          }
          if (await era.loadData(ret)) {
            flag_load_game = false;
            event_queue.init();
            const src_chara = era.get('cflag:0:模版角色');
            chara_colors[0] =
              src_chara > 0 ? get_chara_color(src_chara) : '#ffffff';
            CharaTalk.me = new CharaTalk(0);
            new CrazyFans().clean();
            new GrandLives().clean();
            new LocCharacters().clean();
            return true;
          } else {
            msg_notification = `未能成功读取 ${ret} 号栏位的存档`;
          }
        } else if (
          (era.get(`global:saves:${ret - 100}`) &&
            era.get(`global:saves:${ret - 100}`).startsWith('(FILE LOST)') &&
            !era.set(`global:saves:${ret - 100}`, '')) ||
          era.rmData(ret - 100)
        ) {
          era.saveGlobal();
          msg_notification = `成功删除 ${ret - 100} 号栏位的存档`;
        }
        break;
    }
  }
};
