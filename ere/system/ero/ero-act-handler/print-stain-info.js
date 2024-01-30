const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { poll_stain } = require('#/system/ero/sys-calc-stain');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { part_abbr } = require('#/data/ero/ero-alias.json');

function print_stain_info(chara_id) {
  const chara = get_chara_talk(chara_id);
  const temp = [
    {
      columns: [
        {
          config: {
            content: `${CharaTalk.me.name} 的身体脏污`,
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
            content: `${chara.name} 的身体脏污`,
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

  [0, chara_id].forEach((c_id) => {
    const penis_size = get_penis_size(c_id),
      virgin_size = era.get(`cflag:${c_id}:阴道尺寸`);
    ['口腔', '胸部', '手部', '身体', '脚部', '阴茎', '外阴', '阴道', '肛门']
      .filter(
        (_, i) =>
          i <= 4 ||
          i === 8 ||
          (i === 5 && penis_size) ||
          (i === 6 && virgin_size && !penis_size) ||
          (i === 7 && virgin_size),
      )
      .forEach((part) => {
        const abbr = {
          config: { width: 2 },
          content: part_abbr[part],
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
          content: poll_stain(c_id, part),
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
