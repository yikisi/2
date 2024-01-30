const era = require('#/era-electron');

const { get_mark_price } = require('#/system/ero/sys-get-juel-price');
const update_marks = require('#/system/ero/calc-sex/update-marks');
const call_ero_script = require('#/system/script/sys-call-ero-script');

const {
  get_mark_cols,
  print_footer,
  print_price_and_confirm,
  default_handler,
} = require('#/page/juel-shop/snippets');

const get_color = require('#/utils/gradient-color');

const { mark_colors } = require('#/data/const.json');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { sys_change_fame } = require('#/system/sys-calc-flag');

/**
 * @param {number} chara_id
 * @param {CharaTalk} chara_talk
 * @param {string} display_name
 * @param {Record<string,number>} juel_dict
 * @param {Record<string,number>} total_delta
 * @param {{tab:number,flag:boolean}} page_pointer
 */
module.exports = async (
  chara_id,
  chara_talk,
  display_name,
  juel_dict,
  total_delta,
  page_pointer,
) => {
  let buffer = [];
  let sex_level = era.get(`mark:${chara_id}:淫纹`);
  const pleasure_level = era.get(`mark:${chara_id}:欢愉`),
    meek_level = era.get(`mark:${chara_id}:同心`),
    pain_level = era.get(`mark:${chara_id}:苦痛`),
    shame_level = era.get(`mark:${chara_id}:羞耻`),
    hate_level = era.get(`mark:${chara_id}:反抗`);
  let sex_mark_price = 0;
  era.drawLine({
    content: `${display_name} 的 刻印`,
  });
  const price_dict = [];
  if (!chara_id && !sex_level) {
    era.print('————', { align: 'center' });
  } else {
    if (sex_level) {
      buffer.push(...get_mark_cols(chara_id, '淫纹', sex_level, true));
    } else if (chara_id) {
      buffer.push(...get_mark_cols(chara_id, '欢愉', pleasure_level, true));
    }
    if (chara_id) {
      buffer.push(...get_mark_cols(chara_id, '同心', meek_level));
      buffer.push(...get_mark_cols(chara_id, '苦痛', pain_level));
      buffer.push(...get_mark_cols(chara_id, '羞耻', shame_level));
      buffer.push(...get_mark_cols(chara_id, '反抗', hate_level));
      if (hate_level) {
        price_dict[0] = get_mark_price(chara_id, hate_level, meek_level / 2);
        price_dict[1] = price_dict[2] = get_mark_price(
          chara_id,
          hate_level,
          pain_level + 0.75,
        );
        price_dict[3] = get_mark_price(
          chara_id,
          hate_level,
          shame_level + 0.75,
        );
        buffer.push(
          ...[
            {
              config: {
                disabled: juel_dict['顺从'] < price_dict[0] || !meek_level,
              },
              content: '使用顺从因子消除反抗刻印',
            },
            {
              config: {
                disabled: juel_dict['痛苦'] < price_dict[1] || !pain_level,
              },
              content: '使用痛苦因子消除反抗刻印',
            },
            {
              config: {
                disabled: juel_dict['恐惧'] < price_dict[2] || !pain_level,
              },
              content: '使用恐惧因子消除反抗刻印',
            },
            {
              config: {
                disabled: juel_dict['羞耻'] < price_dict[3] || !shame_level,
              },
              content: '使用羞耻因子消除反抗刻印',
            },
          ].map((e, i) => {
            e.type = 'button';
            e.config.width = 6;
            e.accelerator = i;
            return e;
          }),
          {
            content:
              '* 在获得刻印的情况下，可以使用相应因子消除反抗刻印\n** 在刻印等级相同的情况下，使用痛苦、恐惧、羞耻三种因子消除反抗刻印的价格比顺从更低，但是可能存在副作用',
            type: 'text',
          },
        );
      }
      if (pain_level) {
        price_dict[4] = get_mark_price(chara_id, pain_level, meek_level);
        buffer.push({
          accelerator: 4,
          config: {
            disabled: juel_dict['顺从'] < price_dict[4],
            width: 6,
          },
          content: '使用顺从因子消除苦痛刻印',
          type: 'button',
        });
      }
      if (shame_level) {
        price_dict[5] = get_mark_price(chara_id, shame_level, meek_level);
        buffer.push({
          accelerator: 5,
          config: {
            disabled: juel_dict['顺从'] < price_dict[5],
            width: 6,
          },
          content: '使用顺从因子消除羞耻刻印',
          type: 'button',
        });
      }
      if (pain_level + shame_level) {
        buffer.push({
          content:
            '* 要消除的刻印等级越低，同心刻印的等级越高，消耗的顺从因子越低',
          type: 'text',
        });
      }
    }
  }
  era.printMultiColumns(buffer);

  if (sex_level || (pleasure_level && meek_level)) {
    era.drawLine({
      content: `${display_name} 的 淫纹`,
    });
    if (!sex_level) {
      sex_mark_price = get_mark_price(chara_id, pleasure_level, meek_level);
      era.printButton('将欢愉刻印转换为淫纹', 6, {
        disabled: juel_dict['顺从'] < sex_mark_price,
      });
      era.print('* 一心同体的程度（同心刻印的等级）越高，淫纹的升级费用越低');
    } else if (sex_level < 3) {
      sex_mark_price = get_mark_price(chara_id, sex_level + 1, meek_level);
      era.printButton('提升淫纹等级', 7, {
        disabled: !meek_level || juel_dict['顺从'] < sex_mark_price,
      });
      if (meek_level) {
        era.print('* 一心同体的程度（同心刻印的等级）越高，淫纹的升级费用越低');
      } else {
        era.print('* 只有一心同体的角色（具有同心刻印）才能进一步升级淫纹');
      }
    } else {
      era.print('其他功能敬请期待！', { align: 'center' });
    }
  }

  print_footer(chara_id, page_pointer.tab);
  const ret = await era.input();
  if (ret < 4) {
    const palam_name = era.get(`palamname:${ret + 10}`);
    era.print([
      '要用 ',
      {
        content: chara_talk.name,
        color: chara_talk.color,
      },
      ` 的 ${palam_name}因子 消除一级`,
      {
        content: ' 反抗刻印 ',
        color: mark_colors['反抗'],
      },
      '吗？花费：',
    ]);
    const is_confirmed = await print_price_and_confirm(
      chara_id,
      JSON.parse(`{"${palam_name}":"${price_dict[ret]}"}`),
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.hate_clear = (total_delta.hate_clear || 0) + 1;
      era.add(`mark:${chara_id}:反抗`, -1);
      era.add(`juel:${chara_id}:${palam_name}`, -price_dict[ret]);
      if (
        (ret === 1 || ret === 2) &&
        pain_level < 3 &&
        Math.random() < 1 - 0.15 * (3 - hate_level) - 0.2 * (pain_level - 1)
      ) {
        era.set(`mark:${chara_id}:苦痛`, `${pain_level + 1}`);
      } else if (
        ret === 3 &&
        shame_level < 3 &&
        Math.random() < 1 - 0.15 * (3 - hate_level) - 0.2 * (shame_level - 1)
      ) {
        era.set(`mark:${chara_id}:羞耻`, `${shame_level + 1}`);
      }
      if (await update_marks(true, chara_id)) {
        await era.waitAnyKey();
      }
    }
  } else if (ret <= 5) {
    const mark_name = era.get(`markname:${ret - 1}`);
    era.print([
      '要用 ',
      {
        content: chara_talk.name,
        color: chara_talk.color,
      },
      ` 的 顺从因子 消除一级`,
      {
        content: ` ${mark_name}刻印 `,
        color: mark_colors[mark_name],
      },
      '吗？花费：',
    ]);
    const is_confirmed = await print_price_and_confirm(
      chara_id,
      JSON.parse(`{"顺从":"${price_dict[ret]}"}`),
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.mark_clear = (total_delta.mark_clear || 0) + 1;
      era.add(`mark:${chara_id}:${mark_name}`, -1);
      era.add(`juel:${chara_id}:顺从`, -price_dict[ret]);
    }
  } else if (ret <= 7) {
    if (ret === 6) {
      era.print([
        '将 ',
        {
          content: chara_talk.name,
          color: chara_talk.color,
        },
        ' 的 ',
        {
          content: `欢愉刻印 Lv.${pleasure_level}`,
          color: get_color(undefined, mark_colors['欢愉'], pleasure_level / 3),
        },
        ` 转换为 `,
        {
          content: `淫纹 Lv.${pleasure_level}`,
          color: get_color(undefined, mark_colors['淫纹'], pleasure_level / 3),
        },
        ` 吗？花费：`,
      ]);
    } else {
      era.print([
        '将 ',
        {
          content: chara_talk.name,
          color: chara_talk.color,
        },
        ' 的 ',
        {
          content: `淫纹 Lv.${sex_level}`,
          color: get_color(undefined, mark_colors['淫纹'], sex_level / 3),
        },
        ` 升级为 `,
        {
          content: `Lv.${sex_level + 1}`,
          color: get_color(undefined, mark_colors['淫纹'], (sex_level + 1) / 3),
        },
        ` 吗？花费：`,
      ]);
    }
    const is_confirmed = await print_price_and_confirm(
      chara_id,
      JSON.parse(`{"顺从":"${sex_mark_price}"}`),
      juel_dict,
    );
    if (is_confirmed) {
      era.printMultiColumns([
        {
          content:
            '刻印淫纹以奴役对方是一种极不道德的行为，对社会评价极为不利！请确认是否继续？',
          type: 'text',
        },
        {
          config: { width: 12, align: 'center' },
          accelerator: 0,
          content: '确定',
          type: 'button',
        },
        {
          config: { width: 12, align: 'center' },
          accelerator: 100,
          content: '溜了溜了',
          type: 'button',
        },
      ]);
      const temp = await era.input();
      if (temp === 0) {
        if (ret === 6) {
          era.set(`mark:${chara_id}:欢愉`, 0);
          sex_level = era.set(`mark:${chara_id}:淫纹`, pleasure_level);
          total_delta.pleasure_delta = pleasure_level;
          total_delta.sex_delta = pleasure_level;
        } else {
          sex_level = era.add(`mark:${chara_id}:淫纹`, 1);
          total_delta.sex_delta = (total_delta.sex_delta || 0) + 1;
        }
        await call_ero_script(chara_id, ero_hooks.get_mark, {
          level: sex_level,
          name: '淫纹',
          new: true,
        });
        era.add(`juel:${chara_id}:顺从`, -sex_mark_price);
        sys_change_fame(-100 * sex_level);
      }
    }
  } else {
    default_handler(ret, page_pointer);
  }
};
