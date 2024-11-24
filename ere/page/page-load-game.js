const era = require('#/era-electron');

const basement_queue = require('#/event/basement-queue');
const event_queue = require('#/event/queue');
const sys_add_titles = require('#/system/chara/sys-add-titles');
const filter_chara = require('#/system/sys-filter-chara');

const print_page_header = require('#/page/components/page-header');

const { get_custom_check } = require('#/event/check/check-factory');
const { run_custom_daily } = require('#/event/daily/daily-factory');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { cb_enum } = require('#/event/queue');

/**
 * load game
 * @return {Promise<boolean>} if true, tell main.js to call homepage
 */
module.exports = async () => {
  let flag_load_game = true;
  let msg_notification = '';

  while (flag_load_game) {
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
    buffer.push({ config: { content: '要从哪个栏位读取？' }, type: 'divider' });
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
            await run_custom_daily(
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
            basement_queue.init();
            const src_chara = era.get('cflag:0:模版角色');
            chara_colors[0] =
              src_chara > 0 ? get_chara_color(src_chara) : '#ffffff';
            CharaTalk.me = new CharaTalk(0);
            // 向前兼容
            // 大拓太阳神育成目标错误、贵妇人称号bug
            const version = era.get('version');
            if (version <= 1010) {
              [65, 116]
                .filter(
                  (id) =>
                    era.get(`cflag:${id}:招募状态`) === recruit_flags.yes &&
                    era.get(`cflag:${id}:育成回合计时`) >= 3 * 48,
                )
                .forEach((id) => {
                  const check = get_custom_check(id);
                  sys_add_titles(
                    id,
                    ...check.check_and_get_titles(
                      check
                        .get_edu_aims()
                        .reduce((p, c) => p && c.check === 1, true),
                    ),
                  );
                });
            }
            if (version <= 1011) {
              /** @type {Record<string,EventObject[]>} */
              const e_queue = era.get('flag:事件队列');
              Object.values(e_queue).forEach((l) =>
                l.forEach((e) => {
                  if (e.type === cb_enum.love) {
                    if (e.arg === undefined) {
                      era.arg = [era.get(`love:${e.chara_id}`)];
                    } else if (
                      e.arg === 49 ||
                      e.arg === 74 ||
                      e.arg === 89 ||
                      e.arg === 99
                    ) {
                      e.arg = [e.arg];
                    } else if (e.chara_id === 205 && e.arg === 'lust') {
                      e.arg = [49, 'lust'];
                    }
                  }
                }),
              );
            }
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
