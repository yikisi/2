const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

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
    if (era.get('status:0:马语者')) {
      await era.printAndWait('已经安装【马语者】App了……');
    } else {
      const ret = await select_yes_or_no('要安装【马语者】App吗？');
      if (ret) {
        await era.printAndWait(
          '装上【马语者】App了，但是本周结束就会自动删除！',
        );
        era.set('status:0:马语者', 1);
        era.add('item:马语者', -1);
        return true;
      }
    }
  };

  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[802 + i] = () => use_glasses(802 + i)));
};
