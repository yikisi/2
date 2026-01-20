const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const di18n = require('#/i18n/extended-def');

async function use_glasses(iid) {
  const item_name = di18n.tb_item.get_name(iid);
  const sid = 24 + iid - 27;
  // ITEMNAME:26 = 万能镜框
  if (!era.get('item:26')) {
    await era.printAndWait(`没有地方安装${item_name}！`);
    return;
  }
  if (era.get(`status:0:${sid}`)) {
    await era.printAndWait(
      `已经给${di18n.tb_item.get_name(26)}装上${item_name}了……`,
    );
  } else {
    const ret = await select_yes_or_no(
      `要给${di18n.tb_item.get_name(26)}装上${item_name}吗？这会导致原有镜片损坏！`,
    );
    if (ret) {
      await era.printAndWait(
        `给${di18n.tb_item.get_name(26)}装上了${item_name}……`,
      );
      // STATUSNAME:24 = 好感度镜片
      // STATUSNAME:25 = 好感度镜片
      // STATUSNAME:26 = 透视镜片
      for (let tmp_iid = 27; tmp_iid <= 29; ++tmp_iid) {
        const tmp_sid = 24 + tmp_iid - 27;
        if (era.get(`status:0:${tmp_sid}`) > 0) {
          await era.printAndWait(
            `原有的${di18n.tb_item.get_name(tmp_iid)}损毁了！`,
          );
          era.set(`status:0:${tmp_sid}`, 0);
          break;
        }
      }
      era.set(`status:0:${sid}`, 1);
      era.add(`item:${iid}`, -1);
      return true;
    }
  }
}

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[25] = async () => {
    const cur_line = era.getLineCount();
    let to_use = 1;
    let flag_use = true;
    let flag_print = true;
    let timer = era.get('status:0:马语者');
    if (timer >= 99) {
      to_use = 0;
    } else {
      const amount = Math.min(era.get('item:马语者'), 99 - timer);
      while (flag_use) {
        era.setAlign('center');
        (flag_print ? era.printInColRows : era.replaceInColRows)(
          [
            {
              config: { align: 'left' },
              content: '请选择要使用的马语者点数卡数量',
              type: 'text',
            },
          ],
          [
            {
              accelerator: 2,
              config: { disabled: to_use < 2, width: 2 },
              content: '-10',
              type: 'button',
            },
            {
              accelerator: 4,
              config: { disabled: !to_use, width: 2 },
              content: '-1',
              type: 'button',
            },
            { config: { width: 2 }, content: to_use, type: 'text' },
            {
              accelerator: 6,
              config: { disabled: to_use === amount, width: 2 },
              content: '+1',
              type: 'button',
            },
            {
              accelerator: 8,
              config: { disabled: to_use === amount, width: 2 },
              content: '+10',
              type: 'button',
            },
            { content: [], type: 'text' },
            {
              accelerator: 5,
              config: { width: 3 },
              content: '确定',
              type: 'button',
            },
            {
              accelerator: 0,
              config: { width: 3 },
              content: '取消',
              type: 'button',
            },
          ],
        );
        era.setAlign('left');
        switch (await era.input({ hideInput: true })) {
          case 2:
            to_use = Math.max(to_use - 10, 0);
            break;
          case 4:
            to_use--;
            break;
          case 6:
            to_use++;
            break;
          case 8:
            to_use = Math.min(to_use + 10, amount);
            break;
          case 5:
            flag_use = false;
            break;
          case 0:
            to_use = 0;
            flag_use = false;
        }
        flag_print = false;
      }
    }
    if (to_use > 0) {
      await era.clear(era.getLineCount() - cur_line);
      if (await select_yes_or_no(['要使用 ', to_use, ' 张马语者点数卡吗？'])) {
        const timer = era.add('status:0:马语者', to_use);
        era.add('item:马语者', -to_use);
        await get_chara_talk(0).say_as_unknown_and_wait(
          to_use === timer
            ? `欢迎使用【马语者】App！您的会员身份将在 ${timer} 周后过期。`
            : `感谢续费【马语者】App！您的会员身份将在 ${timer} 周后过期。`,
        );
        return true;
      }
    } else if (timer > 0) {
      await era.clear(era.getLineCount() - cur_line);
      await get_chara_talk(0).say_as_unknown_and_wait(
        `您的会员身份将在 ${timer} 周后过期。`,
      );
    }
  };

  for (let iid = 27; iid <= 29; ++iid) {
    handlers[iid] = (arg) => use_glasses(arg);
  }
};
