const era = require('#/era-electron');

const { get_image } = require('#/system/sys-calc-image');

const CharaTalk = require('#/utils/chara-talk');

/**
 * @param {string|array} name
 * @param {CharaTalk} chara
 * @param {string} [color]
 * @param {number} [_offset]
 */
async function print_event_name(name, chara, color, _offset) {
  const offset = _offset || 0;
  if (!(chara instanceof CharaTalk)) {
    era.logger.debug('chara type error!');
    console.log('chara type error!', name, chara, color, new Error().stack);
  }
  era.setVerticalAlign('middle');
  era.printInColRows(
    {
      columns: [
        {
          config: { width: 20 },
          names: get_image(chara.id)
            .map((e) => `${e}${era.get('flag:立绘类型') ? '_半身' : ''}`)
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
            color: color || chara.color,
            fontSize: '1.75rem',
            fontWeight: 'bold',
          },
          content: name,
          type: 'text',
        },
        {
          config: { color: chara.color || chara.color, fontSize: '0.75rem' },
          content: chara.name,
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
