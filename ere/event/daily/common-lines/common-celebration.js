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
    case 8:
      await era.printAndWait([
        '殿堂周，是对于志在奔跑的',
        chara.get_uma_sex_title(),
        '们来说最重要的节日之一。',
      ]);
      if (era.get(`cflag:${chara.id}:育成次数`)) {
        if (era.get(`cflag:${chara.id}:殿堂`) === 2) {
          await era.printAndWait([
            '由于 ',
            me.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 的优越成绩，',
            me.get_couple_title(),
            ' 理所当然作为主角被邀请到来。',
          ]);
          if (era.get(`cflag:${chara.id}:育成回合计时`) === 143 + 9) {
            await era.printAndWait([
              '时候到了，',
              chara.get_colored_name(),
              ' 带着掩饰不住的喜悦与骄傲，向舞台中心走去。',
            ]);
          }
          await era.printAndWait([
            me.get_colored_name(),
            ' 看着',
            chara.sex,
            '一步步走上台前，开始讲述 ',
            me.get_couple_title(),
            ' 的奋斗过往，分享经验与在座观众。',
          ]);
          if (era.get(`cflag:${chara.id}:育成回合计时`) === 143 + 9) {
            await era.printAndWait([
              me.get_colored_name(),
              ' 的眼神有些模糊，不由得回想起 ',
              me.get_couple_title(),
              ' 之间的点点滴滴……',
            ]);
          }
        } else {
          await era.printAndWait([
            me.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 一齐向特雷森学院的大礼堂走去参加活动。',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 的担当耳朵和尾巴无意识地略微耷拉下去，似乎不是很精神。',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            ' 看着 ',
            chara.get_colored_name(),
            '，叹了口气，小心地伸出一只手搭在',
            chara.sex,
            '的肩上，扶着',
            chara.sex,
            '前进。这一举动似乎也让',
            chara.sex,
            '振作了几分。',
          ]);
          await era.printAndWait([
            '尽管 ',
            me.get_colored_name(),
            ' 和 ',
            chara.get_colored_name(),
            ' 也努力过了，但是成绩仍不足以进入殿堂，不过人生总是会有些遗憾。',
          ]);
          await era.printAndWait([
            '虽然没能成为最后的赢家，但 ',
            me.get_couple_title(),
            ' 还是被节日气氛所感染，舒缓了几分精神。',
          ]);
        }
      } else {
        await era.printAndWait([
          '每到这个时候，特雷森学院都会举行活动，其中之一就是邀请数位殿堂',
          chara.get_uma_sex_title(),
          '前来进行连续几天的演讲，向其他',
          chara.get_uma_sex_title(),
          '/训练员们传授经验。',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 好不容易从慕名而来的人们中间抢到了个位置坐下。',
        ]);
        era.get(`cflag:${chara.id}:种族`) &&
          (await era.printAndWait([
            '随着台上',
            chara.get_uma_sex_title(),
            '沉静又不乏激情的声音响起，',
            me.get_colored_name(),
            ' 注意到 ',
            chara.get_colored_name(),
            ' 坐的笔直，眼中似乎露出了憧憬的神情……',
          ]));
      }
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
