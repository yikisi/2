const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_bg_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

/**
 * @param {number} iid
 * @param {function(number):boolean} filter_cb
 * @returns {Promise<number|undefined>}
 */
async function select_target_in_storage(iid, filter_cb = () => true) {
  const buffer = [];
  const item_name = di18n.tb_item.get_name(iid);
  // CFLAGNAME:66 = 招募状态
  let team_list = sys_filter_chara('cflag', '66', recruit_flags.yes).filter(
    filter_cb,
  );
  if (team_list.length) {
    buffer.push({
      config: {
        content: i18n().ui_storage_select_header_template.replace(
          '%ITEM%',
          item_name,
        ),
      },
      type: 'divider',
    });
    team_list.forEach((cid) => {
      const stamina = era.get(`base:${cid}:0`);
      const max_stamina = era.get(`maxbase:${cid}:0`);
      const time = era.get(`base:${cid}:1`);
      const max_time = era.get(`maxbase:${cid}:1`);
      buffer.push(
        {
          accelerator: cid,
          config: { width: 4 },
          content: get_chara_talk(cid).name,
          type: 'button',
        },
        {
          config: {
            barWidth: 20,
            color: attr_bg_colors.hp,
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
            color: attr_bg_colors.tp,
            height: 22,
            width: 4,
          },
          inContent: `${Math.floor(time)}/${max_time}`,
          type: 'progress',
          percentage: (time * 100) / max_time,
        },
        {
          config: { width: 12 },
          content: get_status(cid, 29),
          type: 'text',
        },
      );
    });
    buffer.push({ accelerator: 999, content: i18n().ui_back, type: 'button' });
    era.printMultiColumns(buffer);
    const ret = await era.input();
    if (ret === 999) {
      return;
    }
    return ret;
  } else {
    await era.printAndWait(
      i18n().ui_storage_no_targets_template.replace('%ITEM%', item_name),
    );
  }
}

module.exports = select_target_in_storage;
