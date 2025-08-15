const era = require('#/era-electron');

const { get_image } = require('#/system/sys-calc-image');

const CharaTalk = require('#/utils/chara-talk');

/**
 * @param {string|array} name
 * @param {CharaTalk} chara
 * @param {string} [color]
 * @param {number} [offset]
 */
async function print_event_name(name, chara, color = chara.color, offset = 0) {
  if (!(chara instanceof CharaTalk)) {
    console.error('角色对象错误！', name, chara, color);
    return await era.printAndWait(name, {
      color,
      fontSize: '1.75rem',
      fontWeight: 'bold',
    });
  }
  era.setVerticalAlign('middle');
  era.printInColRows(
    {
      columns: [
        {
          config: { width: 20 },
          names: get_image(chara.id)
            .map((e) => (era.get('flag:立绘类型') > 0 ? `${e}_半身` : e))
            .join('\t'),
          type: 'image.whole',
        },
      ],
      config: { offset, width: 2 },
    },
    {
      columns: [
        {
          config: {
            color,
            fontSize: '1.75rem',
            fontWeight: 'bold',
          },
          content: name,
          type: 'text',
        },
        {
          config: { color: chara.color, fontSize: '0.75rem' },
          content: chara.full_name,
          type: 'text',
        },
      ],
      config: { width: 22 - offset, verticalAlign: 'middle' },
    },
  );
  era.setVerticalAlign('top');
  await era.waitAnyKey();
  era.println();
}

module.exports = print_event_name;
