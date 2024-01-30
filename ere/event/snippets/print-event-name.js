const era = require('#/era-electron');

const { get_image } = require('#/system/sys-calc-image');

const CharaTalk = require('#/utils/chara-talk');

/**
 * @param {string|array} name
 * @param {CharaTalk} chara
 * @param {string} [color]
 */
async function print_event_name(name, chara, color) {
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
          names: get_image(chara.id).join('\t'),
          type: 'image.whole',
        },
      ],
      config: { width: 2 },
    },
    {
      columns: [
        {
          config: {
            color: color || chara.color,
            fontSize: '28px',
            fontWeight: 'bold',
          },
          content: name,
          type: 'text',
        },
        {
          config: { color: color || chara.color, fontSize: '12px' },
          content: chara.name,
          type: 'text',
        },
      ],
      config: { width: 16, verticalAlign: 'middle' },
    },
  );
  era.setVerticalAlign('top');
  await era.waitAnyKey();
  era.println();
}

module.exports = print_event_name;
