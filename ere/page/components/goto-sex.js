const era = require('#/era-electron');

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

const print_ero_page = require('#/page/page-ero');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

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
 *
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
  era.set('flag:当前互动角色', 0);
}

async function goto_sex(chara_id) {
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0);
  if (!sys_check_awake(chara_id)) {
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
      begin_and_init_ero(0, chara_id);
      await print_ero_page();
      await end_ero_and_show_result(true);
    }
  } else {
    const check = get_sex_acceptable(chara_id);
    let ret;
    if (check >= 0) {
      era.printMultiColumns([
        {
          content: [
            chara.get_colored_name(),
            ' 含情脉脉地看着 ',
            me.get_colored_name(),
            '……',
            { isBr: true },
            '要怎么做？',
          ],
          type: 'text',
        },
        {
          accelerator: 0,
          config: { align: 'center', width: 6 },
          content: '正常求爱',
          type: 'button',
        },
        {
          accelerator: 1,
          config: { align: 'center', width: 6 },
          content: '强奸Play',
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
      }
      begin_and_init_ero(0, chara_id);
      switch (ret) {
        case 1:
          await era.printAndWait([
            chara.get_colored_name(),
            ' 会意地装出了即将被强暴的惊恐神情……',
          ]);
          era.set('tflag:强奸', 0);
          update_juel_buff(chara_id);
          break;
        case 2:
          if (await ask_drink_medicine(chara)) {
            return;
          }
      }
      if (era.get(`status:${chara_id}:超马跳Z`)) {
        era.set('tflag:主导权', chara_id);
      }
      await print_ero_page(chara_id);
      await end_ero_and_show_result(true);
    } else {
      const pleasure_mark =
          era.get(`mark:${chara_id}:欢愉`) -
          Math.max(
            era.get(`mark:${chara_id}:苦痛`),
            era.get(`mark:${chara_id}:羞耻`),
          ),
        meek_mark =
          era.get(`mark:${chara_id}:同心`) - era.get(`mark:${chara_id}:反抗`),
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
                ? `但被肉体欢愉烧灼的内心已无法让${chara.sex}说出拒绝的话语……`
                : '但仍然顺从地准备好了自己……',
            ],
            type: 'text',
          },
          {
            accelerator: 0,
            config: { align: 'center', width: 8 },
            content: '开始调教',
            type: 'button',
          },
          {
            accelerator: 1,
            config: { align: 'center', width: 8 },
            content: '情趣用药',
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
        }
        begin_and_init_ero(0, chara_id);
        if (ret === 1 && (await ask_drink_medicine(chara))) {
          return;
        }
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
        }
        if (ret === 0) {
          sys_change_attr_and_print(0, '体力', -200);
          sys_change_attr_and_print(chara_id, '体力', -200);
          if (
            !era.get('flag:雷普抵抗') ||
            sys_get_strength_ratio_in_fight(0, chara_id) > Math.random()
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
            sys_like_chara(chara_id, 0, -400) && (await era.waitAnyKey());
            begin_and_init_ero(0, chara_id);
            era.set('tflag:强奸', 0);
            update_juel_buff(chara_id);
          } else {
            await era.printAndWait([
              me.get_colored_name(),
              ' 并未成功制服 ',
              chara.get_colored_name(),
              '……',
            ]);
            await fail(chara, me);
            return;
          }
        } else {
          ret = await select_medicine();
          if (!ret) {
            return;
          }
          sys_change_attr_and_print(0, '精力', -200);
          if (
            sys_get_intelligence_ratio_in_fight(0, chara_id) > Math.random()
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
            era.set(`status:${chara_id}:${ret}`, 1);
            era.add(`item:${ret}`, -1);
            begin_and_init_ero(0, chara_id);
          } else {
            await era.printAndWait([
              chara.get_colored_name(),
              ' 机敏地发现了异样……',
            ]);
            await fail(chara, me);
            return;
          }
        }
      }
      if (era.get(`status:${chara_id}:超马跳Z`)) {
        era.set('tflag:主导权', chara_id);
      }
      await print_ero_page(chara_id);
      if (era.get(`status:${chara_id}:超马跳Z`)) {
        await era.printAndWait([
          '虽然一时情动，但当 ',
          chara.get_colored_name(),
          ' 回过神来，一定会对此羞愤难当吧……',
        ]);
        sys_like_chara(chara_id, 0, -400) && (await era.waitAnyKey());
        const hate_mark = era.get(`mark:${chara_id}:反抗`);
        if (hate_mark < 3 && !era.get(`ex:${chara_id}:反抗获取`)) {
          era.set(`nowex:${chara_id}:反抗获取`, 1);
        }
        const shame_mark = era.get(`mark:${chara_id}:羞耻`);
        if (shame_mark < 3 && !era.get(`ex:${chara_id}:羞耻获取`)) {
          era.set(`nowex:${chara_id}:羞耻获取`, 1);
        }
        await update_marks(true, chara_id);
      } else if (
        era.get('tflag:强奸') === 0 &&
        check < 0 &&
        era.get(`mark:${chara_id}:反抗`) < 3
      ) {
        era.set(`nowex:${chara_id}:反抗获取`, 1);
        await update_marks(true, chara_id);
      }
      await end_ero_and_show_result(true);
    }
  }
}

module.exports = goto_sex;
