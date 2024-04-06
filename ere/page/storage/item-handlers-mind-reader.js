const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

async function use_glasses(item) {
  const item_name = era.get(`itemname:${item}`);
  if (!era.get('item:万能镜框')) {
    await era.printAndWait(`没有地方安装【${item_name}】！`);
    return;
  }
  if (era.get(`status:0:${item_name}`)) {
    await era.printAndWait(`已经给【万能镜框】装上【${item_name}】了……`);
  } else {
    const ret = await select_yes_or_no(
      `要给【万能镜框】装上【${item_name}】吗？这会导致原有镜片损坏！`,
    );
    if (ret) {
      await era.printAndWait(`给【万能镜框】装上了【${item_name}】……`);
      if (era.get('status:0:好感度镜片')) {
        await era.printAndWait('原有的【好感度镜片】损毁了！');
        era.set('status:0:好感度镜片', 0);
      } else if (era.get('status:0:马跳次数镜片')) {
        await era.printAndWait('原有的【马跳次数镜片】损毁了！');
        era.set('status:0:马跳次数镜片', 0);
      } else if (era.get('status:0:透视镜片')) {
        await era.printAndWait('原有的【透视镜片】损毁了！');
        era.set('status:0:透视镜片', 0);
      }
      era.set(`status:0:${item_name}`, 1);
      era.add(`item:${item_name}`, -1);
      return true;
    }
  }
}

/** @param {Record<string,function>} handlers */
module.exports = (handlers) => {
  handlers[800] = async () => {
    const amount = era.get('item:马语者');
    let to_use = 0,
      flag_use = true,
      timer;
    while (flag_use) {
      era.print('请选择要使用的马语者点数卡数量');
      era.setAlign('center');
      era.printMultiColumns([
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
        { content: '', type: 'text' },
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
      ]);
      era.setAlign('left');
      switch (await era.input()) {
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
          return;
      }
      if (flag_use) {
        era.setToBottom();
      }
    }
    if (to_use) {
      const ret = await select_yes_or_no(`要使用 ${to_use} 张马语者点数卡吗？`);
      if (ret) {
        const timer = era.add('status:0:马语者', to_use);
        era.add('item:马语者', -to_use);
        await get_chara_talk(0).say_as_unknown_and_wait(
          to_use === timer
            ? `欢迎使用【马语者】App！您的会员身份将在 ${timer} 周后过期。`
            : `感谢续费【马语者】App！您的会员身份将在 ${timer} 周后过期。`,
        );
        return true;
      }
    } else if ((timer = era.get('status:0:马语者'))) {
      await get_chara_talk(0).say_as_unknown_and_wait(
        `您的会员身份将在 ${timer} 周后过期。`,
      );
    }
  };

  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[802 + i] = () => use_glasses(802 + i)));
};
