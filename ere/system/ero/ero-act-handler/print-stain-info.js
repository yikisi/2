const era = require('#/era-electron');

const get_param_list = require('#/system/ero/ero-act-handler/get-param-list');
const { poll_stain } = require('#/system/ero/sys-calc-stain');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { __, i18n } = require('#/i18n/selector');

/** @param {number} cid */
function print_stain_info(cid) {
  const temp = [
    {
      columns: [
        {
          config: {
            content: i18n().sex.stain_header_template.replace(
              '%NAME%',
              get_chara_talk(0).name,
            ),
            position: 'left',
            width: 23,
          },
          type: 'divider',
        },
      ],
      config: { width: 8 },
    },
    {
      columns: [
        {
          config: {
            content: i18n().sex.stain_header_template.replace(
              '%NAME%',
              get_chara_talk(cid).name,
            ),
            offset: 1,
            position: 'right',
            width: 23,
          },
          type: 'divider',
        },
      ],
      config: { width: 8 },
    },
  ];

  [0, cid].forEach((c_id) => {
    const param_list = get_param_list(c_id);
    param_list.slice(0, param_list.length - 2).forEach((pid) => {
      const part_name = i18n('zh-CN').tb_param[pid];
      const abbr = {
        config: { width: 2 },
        content: __(`tb_param.abbr${pid}`),
        type: 'text',
      };
      const column_index = c_id ? 1 : 0;
      const columns = temp[column_index].columns;
      if (!c_id) {
        columns.push(abbr);
      }
      columns.push({
        config: {
          align: c_id ? 'right' : 'left',
          offset: column_index,
          width: 21,
        },
        content: poll_stain(c_id, part_name),
        type: 'text',
      });
      if (c_id) {
        abbr.config.align = 'right';
        columns.push(abbr);
      }
    });
  });
  era.printInColRows(...temp);
}

module.exports = print_stain_info;
