const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { attr_background_colors } = require('#/data/const.json');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {number} item
 * @param {function(number):boolean} filter_cb
 * @returns {Promise<number|undefined>}
 */
async function select_target_in_storage(item, filter_cb) {
  const buffer = [],
    item_name = era.get(`itemname:${item}`),
    team_list = sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
      filter_cb || (() => true),
    );
  if (team_list.length) {
    buffer.push({
      config: { content: `选择要使用【${item_name}】的对象` },
      type: 'divider',
    });
    team_list.forEach((e) => {
      const stamina = era.get(`base:${e}:体力`),
        max_stamina = era.get(`maxbase:${e}:体力`),
        time = era.get(`base:${e}:精力`),
        max_time = era.get(`maxbase:${e}:精力`);
      buffer.push(
        {
          accelerator: e,
          config: { width: 4 },
          content: era.get(`callname:${e}:-2`),
          type: 'button',
        },
        {
          config: {
            barWidth: 20,
            color: attr_background_colors['体力'],
            height: 22,
            width: 4,
          },
          inContent: `${Math.floor(stamina)}/${max_stamina}`,
          percentage: (stamina * 100) / max_stamina,
          type: 'progress',
        },
        {
          config: {
            barWidth: 20,
            color: attr_background_colors['精力'],
            height: 22,
            width: 4,
          },
          inContent: `${Math.floor(time)}/${max_time}`,
          type: 'progress',
          percentage: (time * 100) / max_time,
        },
        {
          config: { width: 12 },
          content: get_status(e),
          type: 'text',
        },
      );
    });
    buffer.push({ accelerator: 999, content: '返回', type: 'button' });
    era.printMultiColumns(buffer);
    const ret = await era.input();
    if (ret === 999) {
      return;
    }
    return ret;
  } else {
    await era.printAndWait(`没有可以使用【${item_name}】的对象……`);
  }
}

module.exports = select_target_in_storage;
