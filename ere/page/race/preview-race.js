const era = require('#/era-electron');

const date_indicator = require('#/page/components/date-indicator');
const print_race_track_chart = require('#/page/race/race-track-chart');

const {
  adaptability_colors,
  el_danger_color,
  el_success_color,
  el_warning_color,
  motivation_colors,
} = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const {
  get_adaptability_rank,
  get_attr_rank,
  get_rank_level,
} = require('#/data/info-generator');
const RaceInfo = require('#/data/race/model/race-info');
const {
  adaptability_names,
  attr_names,
  motivation_names,
} = require('#/data/train-const');

const pop_mark = ['➖', '◎', '◯', '▲', '△', '△'];

/** @param {PseudoUma} chara */
function generate_attribute_info(chara) {
  const ret = [];
  chara.attrs.forEach((value, index) => {
    const attr_buff_list = chara.attr_buffs[index],
      rank = get_attr_rank(value),
      rank_color = adaptability_colors[get_rank_level(rank)];
    ret.push(
      {
        config: {
          align: 'center',
          width: 4,
          color: attr_colors[attr_names[index]],
          fontWeight: 'bold',
        },
        content: attr_names[index],
        type: 'text',
      },
      {
        config: {
          color: rank_color,
          fontWeight: 'bold',
          width: 8,
        },
        content: [
          {
            content: `${value.toLocaleString()} (${rank})`,
            title: attr_buff_list.length
              ? `${value.toString()}=${Math.floor(
                  era.get(`base:${chara.index_chara}:${attr_names[index]}`),
                )}(基础)${attr_buff_list.join('')}`
              : undefined,
          },
        ],
        type: 'text',
      },
    );
  });
  return ret;
}

/**
 * @param {RaceInfo} info
 * @param {PseudoUma[]} team_list
 * @param {PseudoUma[]} contestants
 * @param {number} [is_grand_live]
 */
async function preview_race(info, team_list, contestants, is_grand_live) {
  await era.clear();
  era.drawLine();
  const race_header = [
    {
      config: { align: 'center' },
      content: [...date_indicator(), ' ', info.daytime ? '夜' : '昼'],
      type: 'text',
    },
    {
      config: { align: 'center' },
      content: `${info.track ? RaceInfo.track_names[info.track] : '训练场'} ${adaptability_names[
        info.ground
      ].substring(0, 1)} ${info.span}m (${adaptability_names[
        info.distance + 2
      ].substring(
        0,
        1,
      )}) ${RaceInfo.rotation_names[info.rotation]} · ${RaceInfo.weather_names[info.weather]} ${
        RaceInfo.mess_names[info.mess]
      }`,
      type: 'text',
    },
    {
      config: {
        align: 'center',
        fontSize: '1.5rem',
      },
      content: [info.get_colored_name_with_class(), is_grand_live ? ' 🎤' : ''],
      type: 'text',
    },
  ];
  for (const header_line of race_header) {
    await era.printAndWait(header_line.content, header_line.config);
  }
  await era.clear();
  const skill_buffer = [];
  let flag_prepare_race = true,
    cur_chara = team_list[0],
    uma_index = contestants.indexOf(cur_chara),
    attribute_info = generate_attribute_info(cur_chara),
    strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank),
    flag_print = true;
  cur_chara.list_skill.forEach((s) =>
    skill_buffer.push(...s.data.get_colored_name()),
  );
  while (flag_prepare_race) {
    era.setVerticalAlign('middle');
    const line_num = (flag_print ? era.printInColRows : era.replaceInColRows)(
      [{ type: 'divider' }, ...race_header, { type: 'divider' }],
      {
        columns: [
          {
            accelerator:
              ((uma_index + contestants.length - 1) % contestants.length) + 1,
            config: { align: 'center' },
            content: `上一位\n${contestants.at(uma_index - 1).name}`,
            type: 'button',
          },
        ],
        config: { width: 3 },
      },
      {
        columns: [
          {
            names: cur_chara.image,
            type: 'image.whole',
          },
          {
            config: {
              align: 'center',
              color: cur_chara.color,
              fontSize: '1.25rem',
            },
            content: cur_chara.name,
            type: 'text',
          },
        ],
        config: { width: 8 },
      },
      {
        columns: [
          {
            config: { align: 'center' },
            content: [
              {
                color:
                  adaptability_colors[get_rank_level(cur_chara.score_rank)],
                content: cur_chara.score_rank,
                fontWeight: 'bold',
              },
              { isDivider: true },
              '干劲：',
              {
                color: motivation_colors[cur_chara.motivation + 2],
                content: motivation_names[cur_chara.motivation + 2],
              },
              { isDivider: true },
              '第 ',
              cur_chara.pop[0],
              ' 人气 ',
              cur_chara.pop
                .slice(1)
                .map((e) => pop_mark[e])
                .join(' '),
            ],
            type: 'text',
          },
          { config: { content: '基础能力' }, type: 'divider' },
          ...attribute_info,
          { config: { content: '比赛能力' }, type: 'divider' },
          {
            config: { align: 'center', width: 12 },
            content: [
              `${adaptability_names[info.ground]}适性：`,
              {
                color: adaptability_colors[cur_chara.adapts.ground],
                content: get_adaptability_rank(cur_chara.adapts.ground),
                fontWeight: 'bold',
                title:
                  cur_chara.ground_buffs.length > 0
                    ? `${get_adaptability_rank(cur_chara.adapts.ground)}=${get_adaptability_rank(
                        era.get(
                          `cflag:${cur_chara.index_chara}:${adaptability_names[info.ground]}适性`,
                        ),
                      )}(基础)${cur_chara.ground_buffs.join('')}`
                    : undefined,
              },
            ],
            type: 'text',
          },
          {
            config: { align: 'center', width: 12 },
            content: [
              `${adaptability_names[info.distance + 2]}适性：`,
              {
                color: adaptability_colors[cur_chara.adapts.distance],
                content: get_adaptability_rank(cur_chara.adapts.distance),
                fontWeight: 'bold',
                title:
                  cur_chara.dis_buffs.length > 0
                    ? `${get_adaptability_rank(cur_chara.adapts.distance)}=${get_adaptability_rank(
                        era.get(
                          `cflag:${cur_chara.index_chara}:${adaptability_names[2 + info.distance]}适性`,
                        ),
                      )}(基础)${cur_chara.dis_buffs.join('')}`
                    : undefined,
              },
            ],
            type: 'text',
          },
          { config: { content: '出走策略' }, type: 'divider' },
          ...new Array(4).fill(0).map((_, i) => {
            return team_list.indexOf(cur_chara) !== -1
              ? {
                  accelerator: 21 + i,
                  config: {
                    align: 'center',
                    buttonType: cur_chara.style === i ? 'warning' : 'info',
                    width: 6,
                  },
                  content: `${adaptability_names[6 + i].substring(0, 1)} ${strategy_ability[i]}`,
                  type: 'button',
                }
              : {
                  config: {
                    align: 'center',
                    width: 6,
                    ...(cur_chara.style === i
                      ? { color: el_warning_color, fontWeight: 'bold' }
                      : {}),
                  },
                  content: `${adaptability_names[6 + i].substring(0, 1)} ${strategy_ability[i]}`,
                  type: 'text',
                };
          }),
          { config: { content: '习得技能' }, type: 'divider' },
          {
            config: { align: 'center' },
            content: skill_buffer,
            type: 'text',
          },
        ],
        config: { width: 10 },
      },
      {
        columns: [
          {
            accelerator: ((uma_index + 1) % contestants.length) + 1,
            config: { align: 'center', disableWarning: true },
            content: `下一位\n${contestants[(uma_index + 1) % contestants.length].name}`,
            type: 'button',
          },
        ],
        config: { width: 3 },
      },
      {
        columns: [
          { type: 'divider' },
          ...contestants.map((uma, i) => {
            const id = uma.index_chara;
            return {
              accelerator: i + 1,
              config: {
                align: 'center',
                buttonType: uma.legend
                  ? 'danger'
                  : team_list.indexOf(uma) !== -1
                    ? 'success'
                    : 'warning',
                disabled: id === cur_chara.index_chara,
                disableWarning: true,
                width: 4,
              },
              content: `${uma.name} ${adaptability_names[
                6 + uma.style
              ].substring(0, 1)}`,
              type: 'button',
            };
          }),
          {
            config: { align: 'center' },
            content: [
              '* 参赛选手按跑道号从低到高显示，队伍成员显示为 ',
              { color: el_success_color, content: '绿名' },
              '，强敌显示为 ',
              { color: el_danger_color, content: '红名' },
            ],
            type: 'text',
          },
          { type: 'divider' },
          {
            accelerator: 100,
            config: {
              width: 12,
              align: 'center',
            },
            content: '出走！',
            type: 'button',
          },
          {
            accelerator: 110,
            config: {
              width: 12,
              align: 'center',
            },
            content: '赛场数据',
            type: 'button',
          },
        ],
        config: { horizontalAlign: 'center' },
      },
    );
    flag_print = false;
    era.setVerticalAlign('top');
    const ret = await era.input({ hideInput: true });
    if (ret === 100) {
      await era.clear();
      flag_prepare_race = false;
    } else {
      if (ret === 110) {
        await era.clear((await print_race_track_chart(info)) - line_num);
      } else if (ret >= 21) {
        cur_chara.style = era.set(
          `cflag:${cur_chara.index_chara}:跑法`,
          ret - 21,
        );
      } else if (ret <= 20) {
        cur_chara = contestants[(uma_index = ret - 1)];
        attribute_info = generate_attribute_info(cur_chara);
        strategy_ability = cur_chara.adapt_style_list.map(
          get_adaptability_rank,
        );
        skill_buffer.splice(0);
        cur_chara.list_skill.forEach((s) =>
          skill_buffer.push(...s.data.get_colored_name()),
        );
      }
    }
  }
}

module.exports = preview_race;
