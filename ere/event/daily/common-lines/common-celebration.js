const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_celebration } = require('#/data/info-generator');

/** @param {number} chara_id */
module.exports = async (chara_id) => {
  const chara = get_chara_talk(chara_id),
    me = get_chara_talk(0),
    weeks = (era.get('flag:当前回合数') - 1) % 48;
  await print_event_name(get_celebration(), chara);
  switch (weeks) {
    case 0:
      await era.printAndWait([
        '迎接新的一年，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 在训练员室里一起好好庆祝了一番。',
      ]);
      break;
    case 5:
      await era.printAndWait([
        '今天是情人节，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 在训练员室里互相赠送了礼物。看到对方高兴的模样，',
        me.get_colored_name(),
        ' 也觉得很开心。',
      ]);
      break;
    case 13:
      await era.printAndWait([
        '四月的粉丝感谢祭上，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起给粉丝表演了才艺。',
      ]);
      break;
    case 29:
      await era.printAndWait([
        '庙会期间，',
        me.get_colored_name(),
        ' 决定邀请 ',
        chara.get_colored_name(),
        ' 一起去夏合宿场地旁边的市集游玩。',
      ]);
      if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          '很快同意了，',
          me.get_couple_title(),
          ' 把所有事务抛诸脑后，好好痛快地玩了一天……',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          '迅速给 ',
          me.get_colored_name(),
          ' 发了回信。',
          me.get_colored_name(),
          ' 特意提前于入口处等候时，抬眼猛然发现了身着崭新浴衣，精心打扮的',
          chara.sex,
          '。',
        ]);
        await era.printAndWait([
          '还未等 ',
          me.get_colored_name(),
          ' 反应，她便微微一笑，把上 ',
          me.get_colored_name(),
          ' 的胳膊，拉着 ',
          me.get_colored_name(),
          ' 一起走了……',
        ]);
        await era.printAndWait([me.get_couple_title(), ' 度过了愉快的一天。']);
      }
      break;
    case 39:
      await era.printAndWait([
        '正在 ',
        me.get_colored_name(),
        ' 享受休闲时光的时候，房门突然传来了不徐不急却猛烈的敲门声。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 大概知道是谁搞的鬼，拉开房门，装作被奇异打扮的 ',
        chara.get_colored_name(),
        ' 吓一跳的样子，陪',
        chara.sex,
        '一同出去要糖了……',
      ]);
      await era.printAndWait('一路上，似乎见到了不少奇怪的东西。');
      break;
    case 47:
      await era.printAndWait([
        '圣诞节到了，',
        me.get_colored_name(),
        ' 与 ',
        chara.get_colored_name(),
        ' 一起装扮成圣诞老人庆祝，',
        me.get_couple_title(),
        ' 嬉闹到了晚上才消耗完过剩的精力。',
      ]);
  }
};
