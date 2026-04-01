const era = require('#/era-electron');

const { sys_change_money } = require('#/system/sys-calc-flag');

const { attr_change_colors, money_color } = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const { location_enum } = require('#/data/locations');

const { __, i18n, lan } = require('#/i18n/selector');

/** @param {({id:number,[limit]:boolean}|number)[]} item_list */
async function print_shop_page(item_list) {
  const item_keys = era.get('itemkeys');
  // FLAGNAME:19 = 随机种子
  const off_index = era.get('flag:19');
  const off = item_keys[off_index % item_keys.length];
  const price_cache = era.get(`itemprice:${off}`);
  era.set(
    `itemprice:${off}`,
    Math.max(Math.ceil(price_cache * (off_index >> 7 > 0 ? 0.5 : 0.7)), 1),
  );
  const to_buy = {};
  const price = {};
  const limit = {};
  // FLAGNAME:4 = 当前位置
  const cur_loc = i18n().location[location_enum.keys[era.get('flag:4')]];
  // FLAGNAME:119 = 道具价格
  // FLAGNAME:1 = 当前年
  const price_ratio =
    (100 + era.get('flag:119') + (era.get('flag:1') - 2000) * 4) / 100;
  let flag_shop = true;
  let bought = 0;
  item_list.forEach((e) => {
    let id = e;
    if (typeof e !== 'number') {
      id = e.id;
      limit[id] = e.limit;
    }
    to_buy[id] = 1;
    if (id !== 84 && id !== 85) {
      price[id] = Math.ceil(era.get(`itemprice:${id}`) * price_ratio);
    } else {
      price[id] = era.get(`itemprice:${id}`);
    }
  });
  let on_sell_list;
  let cur_coin;
  let cur_page = 1;
  let max_page;
  // FLAGNAME:62 = 隐藏快捷键
  let flag_hide_acc = era.get('flag:62');
  while (flag_shop) {
    // FLAGNAME:16 = 当前马币
    cur_coin = era.get('flag:16');
    on_sell_list = item_list
      .map((e) => e.id || e)
      .filter((e) => !limit[e] || !era.get(`item:${e}`));
    max_page = Math.ceil(on_sell_list.length / 10);
    if (cur_page > max_page) {
      cur_page = max_page;
    }
    const cur_list = on_sell_list.slice(cur_page * 10 - 10, cur_page * 10);
    /** @type {*[]} */
    const buffer = [{ type: 'divider' }];
    cur_list.forEach((iid) => {
      const name = __(`tb_item.${iid}`);
      const max_count = Math.floor(cur_coin / price[iid]);
      buffer.push(
        {
          accelerator: iid,
          config: {
            buttonType: iid === off ? 'danger' : 'warning',
            width: 4,
          },
          content: limit[iid]
            ? i18n().ui_shop_limited_item_entry_template.replace('%ITEM%', name)
            : name,
          type: 'button',
        },
        {
          type: 'text',
          config: {
            align: 'center',
            width: 1,
          },
          content: i18n().ui_shop_hold,
        },
        {
          type: 'text',
          config: { align: 'right', width: 1 },
          // ITEMNAME:30 = 避孕套（5只装）
          // ITEMNAME:101 = 避孕套
          content: iid === 30 ? era.get('item:101') : era.get(`item:${iid}`),
        },
        {
          accelerator: iid + 1000,
          config: {
            align: 'center',
            disabled: to_buy[iid] === 1 || limit[iid],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '-10',
          type: 'button',
        },
        {
          accelerator: iid + 2000,
          config: {
            align: 'center',
            disabled: to_buy[iid] === 1 || limit[iid],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '-1',
          type: 'button',
        },
        {
          type: 'text',
          config: { align: 'center', width: 2 },
          content: `× ${to_buy[iid]}`,
        },
        {
          accelerator: iid + 3000,
          config: {
            align: 'center',
            disabled:
              to_buy[iid] === 99 || to_buy[iid] >= max_count || limit[iid],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '+1',
          type: 'button',
        },
        {
          accelerator: iid + 4000,
          config: {
            align: 'center',
            disabled:
              to_buy[iid] === 99 || to_buy[iid] >= max_count || limit[iid],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '+10',
          type: 'button',
        },
        {
          accelerator: iid + 5000,
          config: {
            align: 'center',
            disabled:
              to_buy[iid] === 99 ||
              max_count === 0 ||
              to_buy[iid] === max_count ||
              limit[iid],
            showAcc: !flag_hide_acc,
            width: 3,
          },
          content: i18n().ui_shop_max,
          type: 'button',
        },
        {
          accelerator: iid + 6000,
          config: {
            align: 'right',
            disabled: price[iid] * to_buy[iid] > cur_coin,
            showAcc: !flag_hide_acc,
            width: 5,
          },
          content: i18n().ui_shop_buy_template.replace(
            '%PRICE%',
            (price[iid] * to_buy[iid]).toLocaleString(lan()),
          ),
          type: 'button',
        },
      );
    });
    buffer.push({
      type: 'text',
      content: '\n' + i18n().ui_shop_tip,
    });
    if (on_sell_list.some((e) => e === off)) {
      buffer.push({
        type: 'text',
        content: i18n().get_ui_shop_bargain(
          {
            content: __(`tb_item.${off}`),
            color: money_color,
            fontWeight: 'bold',
          },
          {
            content:
              off_index >> 7 > 0
                ? i18n().ui_shop_50_off
                : i18n().ui_shop_30_off,
            color: attr_change_colors.up,
          },
        ),
      });
    }
    buffer.push({ type: 'divider' });
    const buffer_2 = [];
    if (max_page > 1) {
      buffer_2.push(
        {
          accelerator: 996,
          config: { align: 'center', disabled: cur_page === 1, width: 3 },
          content: i18n().ui_pg_prev,
          type: 'button',
        },
        {
          config: { align: 'center', width: 6 },
          content: i18n()
            .ui_pagination_template.replace('%CURR%', cur_page.toString())
            .replace('%TOTAL%', max_page.toString()),
          type: 'text',
        },
        {
          accelerator: 997,
          config: {
            align: 'center',
            disabled: cur_page === max_page,
            width: 3,
          },
          content: i18n().ui_pg_next,
          type: 'button',
        },
      );
    }
    buffer_2.push(
      {
        accelerator: 998,
        config: {
          align: 'right',
          buttonType: flag_hide_acc ? 'warning' : 'info',
          width: 6,
        },
        content: i18n().ui_shop_acc_switch_template.replace(
          '%STATUS%',
          flag_hide_acc ? i18n().ui_on : i18n().ui_off,
        ),
        type: 'button',
      },
      {
        accelerator: 999,
        config: { align: 'right', width: 6 },
        content: i18n().ui_back,
        type: 'button',
      },
    );
    await era.clear();
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            config: { width: 9 },
            content: date_indicator(),
            type: 'text',
          },
          {
            config: {
              width: 5,
            },
            content: i18n().get_ui_hd_money(
              {
                color: money_color,
                content: cur_coin.toLocaleString(),
                fontWeight: 'bold',
              },
              [],
            ),
            type: 'text',
          },
          {
            config: { width: 10 },
            content: i18n().get_ui_hd_location(cur_loc),
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      buffer,
      {
        columns: buffer_2,
        config: { horizontalAlign: 'end' },
      },
    );
    const ret = await era.input();
    era.drawLine();
    if (ret === 996) {
      cur_page--;
    } else if (ret === 997) {
      cur_page++;
    } else if (ret === 998) {
      // FLAGNAME:62 = 隐藏快捷键
      flag_hide_acc = era.set('flag:62', !flag_hide_acc);
    } else if (ret === 999) {
      flag_shop = false;
    } else {
      const selected = ret % 1000;
      const sub_code = (ret - selected) / 1000;
      switch (sub_code) {
        case 0:
          era.print(__(`tb_item.${selected}`));
          era.println();
          if (selected !== 30) {
            await era.printAndWait(__(`item_desc.${selected}`));
          } else {
            await era.printAndWait(__('item_desc.101'));
          }
          break;
        case 1:
          to_buy[selected] = Math.max(to_buy[selected] - 10, 1);
          break;
        case 2:
          to_buy[selected]--;
          break;
        case 3:
          to_buy[selected]++;
          break;
        case 4:
          to_buy[selected] = Math.min(to_buy[selected] + 10, 99);
          break;
        case 5:
          to_buy[selected] = Math.max(
            Math.min(Math.floor(cur_coin / price[selected]), 99),
            1,
          );
          break;
        case 6:
          sys_change_money(-price[selected] * to_buy[selected]);
          era.add(`item:${selected}`, to_buy[selected]);
          await era.printAndWait(
            i18n().get_ui_shop_buy(
              __(`tb_item.${selected}`),
              to_buy[selected].toString(),
            ),
          );
          bought += to_buy[selected];
          to_buy[selected] = Math.max(
            Math.min(Math.floor(cur_coin / price[selected]), to_buy[selected]),
            1,
          );
          era.add('item:101', 5 * era.get('item:30'));
          era.set('item:30', 0);
      }
    }
  }
  era.set(`itemprice:${off}`, price_cache);
  return bought;
}

module.exports = print_shop_page;
