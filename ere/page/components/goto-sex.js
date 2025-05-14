const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const update_marks = require('#/system/ero/calc-sex/update-marks');
const sys_get_intelligence_ratio_in_fight = require('#/system/ero/fight/sys-get-intelligence-ratio');
const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');
const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  update_juel_buff,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const print_ero_page = require('#/page/page-ero');

const game_guides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { location_enum } = require('#/data/locations');

async function select_medicine() {
  const item_list = ['超马跳Z', '马跳S']
    .map((e) => {
      return {
        n: e,
        c: era.get(`item:${e}`),
      };
    })
    .filter((e) => e.c);
  if (item_list.length) {
    const button_width = 24 / (item_list.length + 1);
    era.printMultiColumns([
      { content: '要使用什么药物？', type: 'text' },
      ...item_list.map((e, i) => {
        return {
          accelerator: i,
          config: { align: 'center', width: button_width },
          content: `${e.n} (${e.c})`,
          type: 'button',
        };
      }),
      {
        accelerator: 999,
        config: { align: 'center', width: button_width },
        content: '还是算了',
        type: 'button',
      },
    ]);
    const ret = await era.input();
    return ret < item_list.length ? item_list[ret].n : undefined;
  } else {
    await era.printAndWait('无药可用……');
  }
}

/**
 * @param {CharaTalk} chara
 * @returns {Promise<boolean>} if don't use
 */
async function ask_drink_medicine(chara) {
  const ret = await select_medicine();
  if (!ret) {
    return true;
  }
  await era.printAndWait([chara.get_colored_name(), ` 乖乖饮用了【${ret}】……`]);
  await era.printAndWait([
    chara.get_colored_name(),
    ret === '马跳S' ? ' 面带潮红地睡着了……' : ' 变得极其兴奋！',
  ]);
  era.set(`status:${chara.id}:${ret}`, 1);
  era.add(`item:${ret}`, -1);
}

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function fail(chara, me) {
  await era.printAndWait([
    chara.get_colored_name(),
    ' 将 ',
    me.get_colored_name(),
    ' 推倒在地，迅速离开了……',
  ]);
  sys_change_attr_and_print(0, '体力', -100);
  sys_like_chara(chara.id, 0, -400) && (await era.waitAnyKey());
  await era.printAndWait([
    '虽然 ',
    chara.get_colored_name(),
    ' 对此守口如瓶，但社会对 ',
    me.get_colored_name(),
    ' 的评价还是下降了！',
  ]);
  sys_change_fame(-100);
  era.set('flag:变态行为', 1);
  if (era.get('flag:当前互动角色') === chara.id) {
    era.set('flag:当前互动角色', 0);
  }
  switch (era.get('flag:当前位置')) {
    case location_enum.chairman:
    case location_enum.gate:
    case location_enum.trainer:
    case location_enum.visitor:
    case location_enum.clinic:
      return 2;
  }
}

/**
 * @param {number} id
 * @param {number} sex_loc
 * @returns {Promise<boolean|number|undefined>} if skip the week
 */
async function goto_sex(id, sex_loc) {
  era.drawLine();
  if (await game_guides.office_sex()) {
    return;
  }
  const chara = get_chara_talk(id);
  const me = get_chara_talk(0);
  if (!sys_check_awake(id)) {
    era.printMultiColumns([
      {
        content: [
          chara.get_colored_name(),
          ' 睡得正香。',
          { isBr: true },
          '要袭击吗？',
        ],
        type: 'text',
      },
      {
        accelerator: 0,
        config: { align: 'center', width: 12 },
        content: '袭击！',
        type: 'button',
      },
      {
        accelerator: 100,
        config: { align: 'center', width: 12 },
        content: '还是算了',
        type: 'button',
      },
    ]);
    const ret = await era.input();
    if (!ret) {
      era.set('flag:当前位置', sex_loc);
      begin_and_init_ero(0, id);
      await print_ero_page(id);
      await end_ero_and_show_result(true);
    }
  } else {
    const love_check = era.get(`love:${id}`) >= 50;
    const check =
      love_check || era.get('flag:惩戒力度') >= 2 ? get_sex_acceptable(id) : -1;
    let ret, dice;
    if (check >= 0) {
      era.printMultiColumns(
        [
          {
            content: [
              chara.get_colored_name(),
              love_check ? ' 含情脉脉地看着 ' : ' 略带轻浮地看着 ',
              me.get_colored_name(),
              '……',
              { isBr: true },
              '要怎么做？',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 4 },
            content: love_check ? '正常求爱' : '提议献身',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', disabled: !love_check, width: 4 },
            content: '邀请过夜',
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 4 },
            content: '强奸Play',
            type: 'button',
          },
          {
            accelerator: 3,
            config: { align: 'center', disabled: !love_check, width: 4 },
            content: '情趣用药',
            type: 'button',
          },
          {
            accelerator: 4,
            config: { align: 'center', width: 4 },
            content: '还是算了',
            type: 'button',
          },
        ],
        { horizontalAlign: 'space-around' },
      );
      ret = await era.input();
      if (ret === 4) {
        return;
      } else if (ret === 1) {
        era.set('flag:床伴', id);
        return true;
      } else {
        era.set('flag:当前位置', sex_loc);
      }
      let is_rape = 0;
      switch (ret) {
        case 2:
          if (
            love_check &&
            (await select_yes_or_no('', `粗暴对待${chara.sex}`, '请粗暴对待我'))
          ) {
            is_rape = 1;
            await era.printAndWait([
              chara.get_colored_name(),
              ' 会意地装出了即将被强暴的惊恐神情……',
            ]);
          } else {
            is_rape = 2;
            await era.printAndWait([
              me.get_colored_name(),
              ' 露出惊恐柔弱的申请，激发了 ',
              chara.get_colored_name(),
              ' 的凶性……',
            ]);
          }
          break;
        case 3:
          if (await ask_drink_medicine(chara)) {
            return;
          }
      }
      begin_and_init_ero(0, id);
      if (is_rape === 1) {
        era.set('tflag:强奸', 0);
        update_juel_buff(id);
      } else if (is_rape === 2) {
        era.set('tflag:强奸', id);
      }
      if (era.get(`status:${id}:超马跳Z`) > 0 || is_rape === 2 || !love_check) {
        era.set('tflag:主导权', id);
      }
      await print_ero_page(id);
      await end_ero_and_show_result(true);
    } else {
      const pleasure_mark =
          era.get(`mark:${id}:淫纹`) ||
          era.get(`mark:${id}:欢愉`) -
            Math.max(era.get(`mark:${id}:苦痛`), era.get(`mark:${id}:羞耻`)),
        meek_mark = era.get(`mark:${id}:同心`) - era.get(`mark:${id}:反抗`),
        is_pleasure = pleasure_mark > meek_mark,
        accept = Math.max(pleasure_mark, meek_mark) / 3 > Math.random();
      if (accept) {
        era.printMultiColumns([
          {
            content: [
              chara.get_colored_name(),
              ' 不愿意和 ',
              me.get_colored_name(),
              ' 共度春宵……',
              { isBr: true },
              is_pleasure
                ? `但被肉体欢愉烧灼的内心已让${chara.sex}无法说出拒绝的话语……`
                : '但仍然顺从地准备好了自己……',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 6 },
            content: '开始调教',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 6 },
            content: '带回过夜',
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 6 },
            content: '情趣用药',
            type: 'button',
          },
          {
            accelerator: 3,
            config: { align: 'center', width: 6 },
            content: '还是算了',
            type: 'button',
          },
        ]);
        ret = await era.input();
        if (ret === 3) {
          return;
        } else if (ret === 1) {
          era.set('flag:床伴', id);
          return true;
        } else {
          era.set('flag:当前位置', sex_loc);
        }
        if (ret === 2 && (await ask_drink_medicine(chara))) {
          return;
        }
        begin_and_init_ero(0, id);
      } else {
        era.printMultiColumns([
          {
            content: [
              chara.get_colored_name(),
              ' 不愿意和 ',
              me.get_colored_name(),
              ' 共度春宵……',
              { isBr: true },
              '怎么办呢？',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 8 },
            content: '尝试强奸',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 8 },
            content: '尝试下药',
            type: 'button',
          },
          {
            accelerator: 2,
            config: { align: 'center', width: 8 },
            content: '还是算了',
            type: 'button',
          },
        ]);
        ret = await era.input();
        if (ret === 2) {
          return;
        } else if (ret === 0) {
          sys_change_attr_and_print(
            0,
            '体力',
            -get_random_value(0, Math.min(era.get('base:0:体力'), 200)),
          );
          sys_change_attr_and_print(
            id,
            '体力',
            -get_random_value(0, Math.min(era.get(`base:${id}:体力`), 200)),
          );
          if (
            !era.get('flag:强奸抵抗') ||
            sys_get_strength_ratio_in_fight(0, id) > (dice = Math.random())
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 的力量支持了 ',
              me.get_colored_name(),
              ' 的无耻行径……',
            ]);
            await era.printAndWait([
              chara.get_colored_name(),
              ' 露出了惊恐的神情……',
            ]);
            sys_like_chara(id, 0, -400) && (await era.waitAnyKey());
            era.set('flag:当前位置', sex_loc);
            begin_and_init_ero(0, id);
            era.set('tflag:强奸', 0);
            update_juel_buff(id);
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              ' 并未成功制服 ',
              chara.get_colored_name(),
              '……',
            ]);
            return await fail(chara, me);
          }
        } else {
          ret = await select_medicine();
          if (!ret) {
            return;
          }
          sys_change_attr_and_print(
            0,
            '精力',
            -get_random_value(0, Math.min(era.get('base:0:精力'), 200)),
          );
          era.add(`item:${ret}`, -1);
          if (
            !era.get('flag:强奸抵抗') ||
            sys_get_intelligence_ratio_in_fight(0, id) > (dice = Math.random())
          ) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 卑劣的小花招奏效了……',
            ]);
            await era.printAndWait([
              chara.get_colored_name(),
              ' 饮下了那杯加料茶水，',
              ret === '马跳S'
                ? '然后沉沉睡去……'
                : '然后被腾起的性欲烧灼了所有理智……',
            ]);
            era.set(`status:${id}:${ret}`, 1);
            era.set('flag:当前位置', sex_loc);
            begin_and_init_ero(0, id);
          } else {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 机敏地发现了异样……',
            ]);
            return await fail(chara, me);
          }
        }
      }
      if (era.get(`status:${id}:超马跳Z`)) {
        era.set('tflag:主导权', id);
      }
      await print_ero_page(id);
      if (check < 0) {
        if (era.get(`status:${id}:超马跳Z`)) {
          await era.printAndWait([
            '虽然一时情动，但当 ',
            chara.get_colored_name(),
            ' 回过神来，一定会对此羞愤难当吧……',
          ]);
          sys_like_chara(id, 0, -400) && (await era.waitAnyKey());
          if (era.get(`mark:${id}:羞耻`) < 3 && !era.get(`ex:${id}:羞耻获取`)) {
            era.set(`nowex:${id}:羞耻获取`, 1);
          }
          if (era.get(`mark:${id}:反抗`) < 3 && !era.get(`ex:${id}:反抗获取`)) {
            era.set(`nowex:${id}:反抗获取`, 1);
          }
          await update_marks(true, id);
          if (dice < 0.95) {
            era.add(`status:${id}:疲惫`, 3 + (dice < 0.05));
          }
        } else if (era.get(`status:${id}:马跳S`)) {
          if (dice < 0.95) {
            era.add(`status:${id}:疲惫`, 2 + (dice < 0.05));
          }
        } else if (era.get('tflag:强奸') === 0) {
          if (era.get(`mark:${id}:苦痛`) < 3 && !era.get(`ex:${id}:苦痛获取`)) {
            era.set(`nowex:${id}:苦痛获取`, 1);
          }
          if (era.get(`mark:${id}:反抗`) < 3 && !era.get(`ex:${id}:反抗获取`)) {
            era.set(`nowex:${id}:反抗获取`, 1);
          }
          await update_marks(true, id);
          if (dice < 0.95) {
            sys_hurt_uma(id, 1 + (dice < 0.05));
          }
        }
      }
      await end_ero_and_show_result(true);
    }
  }
}

module.exports = goto_sex;
