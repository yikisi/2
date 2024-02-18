const era = require('#/era-electron');

const { get_image } = require('#/system/sys-calc-image');

const race_indicator = require('#/page/components/race-indicator');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const { motivation_colors } = require('#/data/color-const');
const {
  attr_background_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const { chara_desc, growth_stage } = require('#/data/ero/status-const');
const {
  get_love_info,
  get_relation_info,
  get_status,
  get_train_time,
} = require('#/data/info-generator');
const { motivation_names, out_of_train_type } = require('#/data/train-const');

function cur_chara_component(chara_id, type) {
  if (!chara_id) {
    if (type !== chara_info_type.out && type !== chara_info_type.school) {
      era.drawLine();
      era.print('未选择互动角色', { align: 'center' });
    }
  } else {
    era.drawLine();
    const relation = get_relation_info(chara_id),
      love = get_love_info(chara_id),
      growth = era.get(`cflag:${chara_id}:成长阶段`),
      title = new CharaTitles(chara_id).get_colored_curr_title(true),
      in_train =
        growth >= 2 &&
        era.get('flag:当前回合数') - era.get(`cflag:${chara_id}:育成回合计时`) <
          3 * 48,
      motivation = era.get(`cflag:${chara_id}:干劲`),
      out_of_train = era.get(`cflag:${chara_id}:殿堂`);
    /** @type {*[]} */
    const name_columns = ['当前角色：'];
    if (title) {
      name_columns.push(title, { content: ' ' });
    }
    name_columns.push(get_chara_talk(chara_id).get_colored_name());
    if (out_of_train) {
      name_columns.push(` [${out_of_train_type[out_of_train - 1]}]`);
    }
    name_columns.push(` (${growth_stage[Math.min(growth, 2)]})`);
    if (in_train) {
      name_columns.push(
        ' 干劲',
        {
          color: motivation_colors[motivation + 2],
          content: motivation_names[motivation + 2],
        },
        ` ${get_train_time(chara_id)}`,
      );
    } else if (!out_of_train && growth >= 2) {
      name_columns.push(' 待入学');
    }
    name_columns.push(...race_indicator(chara_id));
    era.setVerticalAlign('middle');
    era.printInColRows(
      [{ content: name_columns, type: 'text' }],
      {
        columns: [
          {
            config: { width: 21 },
            names: get_image(chara_id).join('\t'),
            type: 'image.whole',
          },
        ],
        config: {
          width: 3,
        },
      },
      {
        columns: [
          { content: '\n', type: 'text' },
          {
            config: { width: 2 },
            content: '体力',
            type: 'text',
          },
          {
            config: {
              color: attr_background_colors['体力'],
              height: 22,
              width: 9,
            },
            inContent: `${era.get(`base:${chara_id}:体力`)}/${era.get(
              `maxbase:${chara_id}:体力`,
            )}`,
            percentage:
              (era.get(`base:${chara_id}:体力`) * 100) /
              era.get(`maxbase:${chara_id}:体力`),
            type: 'progress',
          },
          { config: { width: 13 }, content: '', type: 'text' },
          {
            config: { width: 2 },
            content: '精力',
            type: 'text',
          },
          {
            config: {
              color: attr_background_colors['精力'],
              height: 22,
              width: 9,
            },
            inContent: `${era.get(`base:${chara_id}:精力`)}/${era.get(
              `maxbase:${chara_id}:精力`,
            )}`,
            percentage:
              (era.get(`base:${chara_id}:精力`) * 100) /
              era.get(`maxbase:${chara_id}:精力`),
            type: 'progress',
          },
          { config: { width: 13 }, content: '', type: 'text' },
          {
            config: { width: 2 },
            content: '气性',
            type: 'text',
          },
          {
            config: { width: 2 },
            content: chara_desc[era.get(`cflag:${chara_id}:气性`) + 3],
            type: 'text',
          },
          {
            config: { offset: 2, width: 2 },
            content: '状态',
            type: 'text',
          },
          {
            config: { width: 16 },
            content: get_status(chara_id),
            type: 'text',
          },
          {
            config: { width: 2 },
            content: '好感',
            type: 'text',
          },
          {
            config: { color: relation_colors[relation[0]], width: 4 },
            content: relation.join(' '),
            type: 'text',
          },
          { config: { width: 2 }, content: '爱慕', type: 'text' },
          {
            config: {
              color: love_colors[love[0]],
              width: 4,
            },
            content: love.join(' '),
            type: 'text',
          },
        ],
        config: {
          width: 16,
        },
      },
    );
    era.setVerticalAlign('top');
  }
}

module.exports = cur_chara_component;
