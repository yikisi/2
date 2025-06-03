const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');

const date_indicator = require('#/page/components/date-indicator');
const print_race_track_chart = require('#/page/race/race-track-chart');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const {
  adaptability_colors,
  el_danger_color,
  el_success_color,
  el_warning_color,
  motivation_colors,
} = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const { item_enum, item_names } = require('#/data/ero/item-const');
const { vp_status_enum } = require('#/data/ero/status-const');
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
  chara.attrs.forEach((_val, index) => {
    const value = Math.floor(_val);
    const attr_buff_list = chara.attr_buffs[index];
    const rank = get_attr_rank(value);
    const rank_color = adaptability_colors[get_rank_level(rank)];
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
              ? `${value.toLocaleString()}=${Math.floor(
                  era.get(`base:${chara.index_chara}:${attr_names[index]}`),
                )}(基础)${attr_buff_list.join('')}`
              : void 0,
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
 * @param {boolean} [is_grand_live=false]
 */
async function preview_race(
  info,
  team_list,
  contestants,
  is_grand_live = false,
) {
  const item_inf = era.get('flag:道具影响');
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
      content: `${info.track > 0 ? RaceInfo.track_names[info.track] : '训练场'} ${adaptability_names[
        info.ground
      ].substring(0, 1)} ${info.span.toLocaleString()}m (${adaptability_names[
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
  const item_chara = team_list.filter((e) => {
    const { index_chara: cid } = e;
    if (!cid) {
      return true;
    }
    if (
      cid > 0 &&
      !e.legend &&
      era.get(`exp:${cid}:性爱次数`) > era.get(`exp:${cid}:睡奸次数`)
    ) {
      if (era.get(`love:${cid}`) >= 50 && get_sex_acceptable(cid) > 0) {
        return true;
      }
      const mark_check = Math.max(
        era.get(`mark:${cid}:淫纹`) ||
          era.get(`mark:${cid}:欢愉`) -
            Math.max(era.get(`mark:${cid}:苦痛`), era.get(`mark:${cid}:羞耻`)),
        era.get(`mark:${cid}:顺从`) - era.get(`mark:${cid}:反抗`),
      );
      if (
        mark_check === 3 ||
        (mark_check > 0 && mark_check / 3 > Math.random())
      ) {
        return true;
      }
    }
    return false;
  });
  let flag_prepare_race = true;
  let cur_chara = team_list[0];
  let uma_index = contestants.indexOf(cur_chara);
  let attribute_info = generate_attribute_info(cur_chara);
  let strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
  let flag_print = true;
  cur_chara.list_skill.forEach((s) =>
    skill_buffer.push(...s.data.get_colored_name(cur_chara)),
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
                    : void 0,
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
                    : void 0,
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
            config: { width: 8, align: 'center' },
            content: '出走！',
            type: 'button',
          },
          {
            accelerator: 110,
            config: { width: 8, align: 'center' },
            content: '赛场数据',
            type: 'button',
          },
          {
            accelerator: 120,
            config: {
              align: 'center',
              disabed: item_chara.length === 0,
              width: 8,
            },
            content: '使用玩具',
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
    } else if (ret === 110) {
      await era.clear((await print_race_track_chart(info)) - line_num);
    } else if (ret === 120) {
      const curr = era.getLineCount();
      era.drawLine();
      let flag = true;
      let index = 0;
      let chara = get_chara_talk(item_chara[index].index_chara);
      while (flag) {
        await era.clear(era.getLineCount() - curr - 1);
        era.print(['为 ', chara.get_colored_full_name(), ' 装备性玩具：']);
        const b_item = era.get(`equip:${chara.id}:胸部`);
        if (chara.sex_code !== 1) {
          era.printMultiColumns([
            { config: { width: 2 }, content: '乳头', type: 'text' },
            {
              accelerator: 1,
              config: {
                disabled: !b_item && era.get('item:跳蛋') < 2,
                width: 22,
              },
              content: b_item > 0 ? item_names[b_item] : '无',
              type: 'button',
            },
          ]);
        }
        const p_item = era.get(`equip:${chara.id}:阴茎`);
        const c_item = era.get(`equip:${chara.id}:阴蒂`);
        if (
          chara.sex_code > 0 ||
          item_chara[index].ero.main.at(-1) === 'penis'
        ) {
          era.printMultiColumns([
            { config: { width: 2 }, content: '肉棒', type: 'text' },
            {
              accelerator: 2,
              config: {
                disabled: !p_item && era.get('item:飞机杯') < 1,
                width: 22,
              },
              content: p_item > 0 ? item_names[p_item] : '无',
              type: 'button',
            },
          ]);
        } else {
          era.printMultiColumns([
            { config: { width: 2 }, content: '阴核', type: 'text' },
            {
              accelerator: 3,
              config: {
                disabled:
                  !c_item &&
                  era.get('item:跳蛋') < 1 &&
                  era.get('item:夹子') < 1,
                width: 22,
              },
              content: c_item > 0 ? item_names[c_item] : '无',
              type: 'button',
            },
          ]);
        }
        const v_item = era.get(`equip:${chara.id}:阴道`);
        if (chara.sex_code !== 1) {
          era.printMultiColumns([
            { config: { width: 2 }, content: '小穴', type: 'text' },
            {
              accelerator: 4,
              config: {
                disabled:
                  !v_item &&
                  era.get('item:跳蛋') < 1 &&
                  era.get('item:伪器') < 1,
                width: 22,
              },
              content: v_item > 0 ? item_names[v_item] : '无',
              type: 'button',
            },
          ]);
        }
        const a_item = era.get(`equip:${chara.id}:肛门`);
        era.printMultiColumns([
          { config: { width: 2 }, content: '屁穴', type: 'text' },
          {
            accelerator: 5,
            config: {
              disabled:
                !a_item &&
                era.get('item:伪器') < 1 &&
                era.get('item:肛塞') < 1 &&
                era.get('item:拉珠') < 1,
              width: 22,
            },
            content: a_item > 0 ? item_names[a_item] : '无',
            type: 'button',
          },
        ]);
        if (item_chara.length > 1) {
          era.printButton(`上一位 ${item_chara[index - 1]?.name ?? '-'}`, 10, {
            disabled: index === 0,
          });
          era.printButton(`下一位 ${item_chara[index + 1]?.name ?? '-'}`, 11, {
            disabled: index === item_chara.length - 1,
          });
        }
        era.printButton('结束', 99);
        let ret = await era.input();
        switch (ret) {
          case 1:
            era.printMultiColumns([
              {
                config: {
                  content: `为 ${chara.get_full_name()} 的 乳头 装备性玩具`,
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              { config: { width: 2 }, content: '跳蛋', type: 'text' },
              {
                accelerator: 1,
                config: { width: 4 },
                content: b_item === item_enum.love_eggs ? '摘下' : '装上',
                type: 'button',
              },
              {
                config: { width: 18 },
                content: [
                  '还有 ',
                  era.get('item:跳蛋').toLocaleString(),
                  ' 件',
                ],
                type: 'text',
              },
              { accelerator: 9, content: '返回', type: 'button' },
            ]);
            if ((await era.input()) !== 9) {
              if (b_item === item_enum.love_eggs) {
                era.set(`equip:${chara.id}:胸部`, 0);
                era.add('item:跳蛋', 2);
              } else {
                era.set(`equip:${chara.id}:胸部`, item_enum.love_eggs);
                era.add('item:跳蛋', -2);
              }
            }
            break;
          case 2:
            era.printMultiColumns([
              {
                config: {
                  content: `为 ${chara.get_full_name()} 的 肉棒 装备性玩具`,
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              { config: { width: 2 }, content: '飞机杯', type: 'text' },
              {
                accelerator: 1,
                config: { width: 4 },
                content:
                  p_item === item_enum.artificial_virgin ? '摘下' : '装上',
                type: 'button',
              },
              {
                config: { width: 18 },
                content: [
                  '还有 ',
                  era.get('item:飞机杯').toLocaleString(),
                  ' 件',
                ],
                type: 'text',
              },
              { accelerator: 9, content: '返回', type: 'button' },
            ]);
            if ((await era.input()) !== 9) {
              if (p_item === item_enum.artificial_virgin) {
                era.set(`equip:${chara.id}:阴茎`, 0);
                era.add('item:飞机杯', 1);
              } else {
                era.set(`equip:${chara.id}:阴茎`, item_enum.artificial_virgin);
                era.add('item:飞机杯', -1);
              }
            }
            break;
          case 3:
            era.printMultiColumns([
              {
                config: {
                  content: `为 ${chara.get_full_name()} 的 阴核 装备性玩具`,
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              ...[item_enum.clamps, item_enum.love_eggs].reduce((p, c) => {
                const count = era.get(`item:${item_names[c]}`);
                p.push(
                  {
                    config: { width: 2 },
                    content: item_names[c],
                    type: 'text',
                  },
                  {
                    accelerator: c,
                    config: {
                      disabled: c_item !== c && count < 1,
                      width: 4,
                    },
                    content: c_item === c ? '摘下' : '装上',
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content: ['还有 ', count.toLocaleString(), ' 件'],
                    type: 'text',
                  },
                );
                return p;
              }, []),
              { accelerator: 9, content: '返回', type: 'button' },
            ]);
            ret = await era.input();
            if (ret !== 9) {
              if (c_item === ret) {
                era.set(`equip:${chara.id}:阴蒂`, 0);
                era.add(`item:${item_names[ret]}`, 1);
              } else {
                era.set(`equip:${chara.id}:阴蒂`, ret);
                era.add(`item:${item_names[ret]}`, -1);
              }
            }
            break;
          case 4:
            era.printMultiColumns([
              {
                config: {
                  content: `为 ${chara.get_full_name()} 的 小穴 装备性玩具`,
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              ...[item_enum.love_eggs, item_enum.dildo].reduce((p, c) => {
                const check =
                  c === item_enum.dildo &&
                  era.get(`talent:${chara.id}:处女`) !== vp_status_enum.no;
                const count = era.get(`item:${item_names[c]}`);
                p.push(
                  {
                    config: { width: 2 },
                    content: item_names[c],
                    type: 'text',
                  },
                  {
                    accelerator: c,
                    config: {
                      disabled: check || (v_item !== c && count < 1),
                      title: check ? '还是处女！' : void 0,
                      width: 4,
                    },
                    content: v_item === c ? '摘下' : '装上',
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content: ['还有 ', count.toLocaleString(), ' 件'],
                    type: 'text',
                  },
                );
                return p;
              }, []),
              { accelerator: 9, content: '返回', type: 'button' },
            ]);
            ret = await era.input();
            if (ret !== 9) {
              if (v_item === ret) {
                era.set(`equip:${chara.id}:阴道`, 0);
                era.add(`item:${item_names[ret]}`, 1);
              } else {
                era.set(`equip:${chara.id}:阴道`, ret);
                era.add(`item:${item_names[ret]}`, -1);
              }
            }
            break;
          case 5:
            era.printMultiColumns([
              {
                config: {
                  content: `为 ${chara.get_full_name()} 的 屁穴 装备性玩具`,
                  width: 12,
                },
                type: 'divider',
              },
              { content: [], type: 'text' },
              ...[
                item_enum.dildo,
                item_enum.butt_plug,
                item_enum.anal_beads,
              ].reduce((p, c, i) => {
                const check = era.get(`exp:${chara.id}:肛交次数`) < 10 - i * 5;
                const count = era.get(`item:${item_names[c]}`);
                p.push(
                  {
                    config: { width: 2 },
                    content: item_names[c],
                    type: 'text',
                  },
                  {
                    accelerator: c,
                    config: {
                      disabled: check || (a_item !== c && count < 1),
                      title: check ? '肛交经验不足！' : void 0,
                      width: 4,
                    },
                    content: a_item === c ? '摘下' : '装上',
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content: ['还有 ', count.toLocaleString(), ' 件'],
                    type: 'text',
                  },
                );
                return p;
              }, []),
              { accelerator: 9, content: '返回', type: 'button' },
            ]);
            ret = await era.input();
            if (ret !== 9) {
              if (a_item === ret) {
                era.set(`equip:${chara.id}:肛门`, 0);
                era.add(`item:${item_names[ret]}`, 1);
              } else {
                era.set(`equip:${chara.id}:肛门`, ret);
                era.add(`item:${item_names[ret]}`, -1);
              }
            }
            break;
          case 10:
            index--;
            break;
          case 11:
            index++;
            break;
          case 99:
            flag = false;
        }
      }
      await era.clear(era.getLineCount() - curr);
      item_chara.forEach((u) => {
        const { index_chara: cid } = u;
        const o_has_item = u.race.conditionParams.item;
        u.race.conditionParams.item = +new Array(5)
          .fill(void 0)
          .reduce(
            (p, _, i) => p || era.get(`equip:${cid}:${i + 5}`) > 0,
            false,
          );
        const ero_skill_level = u.list_skill.find(
          (s) => s.data.group_id === 66003,
        )?.data?.group_level;
        const buff_length = u.attr_buffs[0].length;
        if (ero_skill_level === 2) {
          const has_buff =
            u.attr_buffs[0].findIndex((b) => b.endsWith('[欢愉赐福]')) !== -1;
          if (u.race.conditionParams.item === 1 && !has_buff) {
            u.attr_buffs.forEach((l) => l.push('+10%[欢愉赐福]'));
          } else if (!u.race.conditionParams.item && has_buff) {
            u.attr_buffs = u.attr_buffs.map((l) =>
              l.filter((b) => b !== '+10%[欢愉赐福]'),
            );
          }
        } else if (era.get('flag:道具影响') !== 0 && ero_skill_level !== 1) {
          const has_debuff =
            u.attr_buffs[0].findIndex((b) => b.endsWith('[性玩具]')) !== -1;
          if (u.race.conditionParams.item === 1 && !has_debuff) {
            u.attr_buffs.forEach((l) => l.push(`${item_inf}%[性玩具]`));
          } else if (!u.race.conditionParams.item && has_debuff) {
            u.attr_buffs = u.attr_buffs.map((l) =>
              l.filter((b) => b !== `${item_inf}%[性玩具]`),
            );
          }
        }
        if (u === cur_chara && o_has_item !== u.race.conditionParams.item) {
          skill_buffer.splice(0);
          cur_chara.list_skill.forEach((s) =>
            skill_buffer.push(...s.data.get_colored_name(cur_chara)),
          );
        }
        if (buff_length !== u.attr_buffs[0].length) {
          u.calc_attrs();
          if (u === cur_chara) {
            attribute_info = generate_attribute_info(cur_chara);
          }
        }
      });
    } else if (ret >= 21) {
      cur_chara.style = era.set(
        `cflag:${cur_chara.index_chara}:跑法`,
        ret - 21,
      );
    } else if (ret <= 20) {
      cur_chara = contestants[(uma_index = ret - 1)];
      attribute_info = generate_attribute_info(cur_chara);
      strategy_ability = cur_chara.adapt_style_list.map(get_adaptability_rank);
      skill_buffer.splice(0);
      cur_chara.list_skill.forEach((s) =>
        skill_buffer.push(...s.data.get_colored_name(cur_chara)),
      );
    }
  }
}

module.exports = preview_race;
