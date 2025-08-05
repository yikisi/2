const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,number,{race:number,rank:number},DaiyaEduMarks):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    daiya,
    me,
    edu_weeks,
    extra_flag,
    edu_marks,
  ) => {
    if (edu_weeks >= 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('黎明', daiya);
    await daiya.say_and_wait('呼、呼、呼……');
    await daiya.say_and_wait('…………嗯！');
    await say_by_passer_by_and_wait(
      '观众A',
      '喔喔～里见光钻表现得很好嘛……！不愧是得到那么高评分的选手！',
    );
    await say_by_passer_by_and_wait(
      '观众B',
      '她的安定感完全不是出道战级别的呢。感觉很有前途喔！',
    );
    await say_by_passer_by_and_wait(
      '观众A',
      '要是在G1也能跑赢就好了！！打破『里见家的魔咒』……！',
    );
    await daiya.say_and_wait('训练员！！');
    await daiya.say_and_wait('我终于顺利出道了呢！');
    era.printButton('「是啊」', 1);
    await era.input();
    await daiya.say_and_wait('跑完之后，才总算觉得有真实感了。');
    await daiya.say_and_wait(
      '比赛时听到大家的欢呼声……其他选手的施压、喘息。毛囊深处都能感受到的紧张感……',
    );
    await daiya.say_and_wait(
      '都是我从来没有感受过的氛围。这就是，真正的比赛呢……！',
    );
    await daiya.say_and_wait('麦昆和小北，她们也都是在这种氛围下跑步的……');
    await daiya.say_and_wait('我也总算踏上了跟她们一样的赛场……！');
    await era.printAndWait(
      `里见光钻表现得相当兴奋。这也代表这场出道战让${daiya.sex}有很深的感触吧。`,
    );
    await daiya.say_and_wait(
      '……我要用这双脚继续奔跑、跑赢比赛，再继续赢下去。一定要完成里见家的宿愿！',
    );
    await era.printAndWait(
      `${me.get_couple_title()} 跟着散场的人潮，从赛场慢慢走向车站。`,
    );
    await say_by_passer_by_and_wait(
      '观众C',
      `那个叫里见光钻的赛${daiya.get_uma_sex_title()}，${
        daiya.sex
      }跑步的样子真的好漂亮喔！就是那场五亿对决的！」`,
    );
    await say_by_passer_by_and_wait(
      '观众A',
      `${daiya.sex}的尾段加速感觉很厉害喔！」`,
    );
    await say_by_passer_by_and_wait('观众C', [
      '说不定不久后就会参加G1竞赛了吧。感觉 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 也很有希望呢！」',
    ]);
    await era.printAndWait(
      `观众B「……嗯？是说──里见集团有出过跑赢G1的赛${daiya.get_uma_sex_title()}吗……？」`,
    );
    await era.printAndWait(
      `观众A「从来没有啊。以前还蛮多里见家的赛${daiya.get_uma_sex_title()}参赛的，但从来没人赢过G1。」`,
    );
    await era.printAndWait(
      `观众A「所以才会在杂志上看到──『至今没有G1赛${daiya.get_uma_sex_title()}的里见家魔咒』这样的标语……」`,
    );
    await era.printAndWait(
      '观众C「是喔──还有这种传闻喔。所以是因为魔咒的关系才赢不了G1啰？」',
    );
    await era.printAndWait(
      `观众A「对啊。里见光钻是里见家久违出现的赛${daiya.get_uma_sex_title()}，希望她能够跑赢G1呢。」`,
    );
    await era.printAndWait(
      `${me.name} 一边听着走在前面的人所说的话，一边偷偷看向里见光钻。`,
    );
    await daiya.say_and_wait('呵呵，我一定会破除魔咒的！');
    await era.printAndWait(
      `里见光钻露出开朗的微笑，对 ${me.name} 比出一个充满气势的加油手势。`,
    );
    await era.printAndWait(
      `${me.name} 想，心志坚强又坚定的${daiya.sex}，一定能消除这些传闻跟魔咒的吧。`,
    );
    edu_marks.after_begin = 1;
    add_event(event_hooks.week_start, new EventObject(67, cb_enum.edu));
  };

  handlers[race_enum.sats_sho] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('厄运', daiya);
    await say_by_passer_by_and_wait('实况', '选手们从第四弯道进入直线！');
    await daiya.say_and_wait('──这里！从这里……！', true);
    await daiya.say_and_wait('咦……？');
    await daiya.say_and_wait(
      '脚感觉……好沉重……！我应该要从这里开始加速才对的……！！',
      true,
    );
    await daiya.say_and_wait('唔唔唔唔唔啊啊啊啊啊……！');
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        '实况「抵达终点！第一名是里见光钻！！这颗钻石在暴风雨过后的阳光下闪耀！」',
      );
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊！');
      await daiya.say_and_wait('呼、呼……呼、呼……');
      await say_by_passer_by_and_wait(
        '观众A',
        '很厉害嘛，里见光钻！！感觉之后还会继续成长呢，真令人期待！',
      );
      await say_by_passer_by_and_wait(
        '观众B',
        '虽然最后看起来很辛苦的样子，但她撑过了！',
      );
      era.printButton('（不对……）', 1);
    } else {
      await era.printAndWait(
        '实况「……众所瞩目的里见光钻没能戴上『皋月赏』的荣冠！！」',
      );
      await daiya.say_and_wait('呼、呼……呼、呼……');
      await era.printAndWait(
        '观众A「啊～失败了啊。里见光钻表现得不如我的预期啊。」',
      );
      await era.printAndWait(
        '观众B「最后还看起来很辛苦的样子。照这样看来，长距离她应该是不行了……？」',
      );
      era.printButton('（那并不是她最佳的状态……）', 1);
    }
    await era.input();
    await era.printAndWait(
      `${me.name} 从${daiya.sex}比赛中的表现察觉到异状。比赛进入最后阶段的时候，里见光钻露出了明显的疲态。`,
    );
    await era.printAndWait(
      `${me.name} 想是因为……比赛前一路跑到赛场的关系，消耗了${daiya.sex}不少的体力吧……？`,
    );
    await era.printAndWait(
      '当时不跑的话，一定赶不上比赛。虽然那也是逼不得已的状况……',
    );
    await daiya.say_and_wait(
      '……光是跑完2000米就觉得到极限了……这种表现怎么可能跑第一……',
      true,
    );
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait(
        '实际上最后阶段我真的觉得很辛苦……完全没能发挥尾段加速的实力……',
        true,
      );
      await daiya.say_and_wait('这真是……离我预期的表现差得好远……', true);
      await daiya.say_and_wait(
        `速度最快的赛${daiya.get_uma_sex_title()}才能获胜的『皋月赏』，身为赢家的我怎么能是这种表现……！`,
        true,
      );
      await daiya.say_and_wait(
        `什么知名赛${daiya.get_uma_sex_title()}，我根本完全不够格！`,
        true,
      );
    } else {
      await daiya.say_and_wait('但是，要是我的实力再更坚强一点……！', true);
    }
    await daiya.say_and_wait('唔……！');
    era.printButton('光钻……！', 1);
    await era.input();
    await daiya.say_and_wait('……训练员……');
    era.printButton('「害你要自己跑来赛场，我很抱歉」', 1);
    await era.input();
    await daiya.say_and_wait('咦！？训练员不需要为这件事道歉呀！');
    await daiya.say_and_wait('当时的状况，我自己也觉得下车用跑的比较好！');
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait(
        '……可是……刚好今天遇上了坏天气。才没能发挥100%的实力……',
      );
      await daiya.say_and_wait('这也是里见家魔咒的影响吗……？');
      await daiya.say_and_wait('不过，如果真的是魔咒的影响──');
      await daiya.say_and_wait('那就由我去破除它！');
      await daiya.say_and_wait([
        '在下一场 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 战胜魔咒！展现出我最完美的表现！赢得胜利给大家看！！',
      ]);
    } else {
      await daiya.say_and_wait(
        '……可是……刚好今天遇上了坏天气。才没能发挥100%的实力，最后输掉了比赛……',
      );
      await daiya.say_and_wait(
        `『里见家的赛${daiya.get_uma_sex_title()}赢不了G1』这个魔咒，我也……`,
      );
      era.printButton('「光钻……」', 1);
      await era.input();
      await daiya.say_and_wait('但我下一次不会再输了！');
      await daiya.say_and_wait('我一定会破除魔咒的！！');
      await daiya.say_and_wait([
        '下一场 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        '！我一定会战胜魔咒，赢得胜利给大家看！！',
      ]);
    }
    await era.printAndWait(
      `里见光钻强势地宣誓。因为这些运气不好的经历，反而更激发${daiya.sex}想要战胜魔咒的决心。`,
    );
  };

  handlers[race_enum.toky_yus] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('惭愧', daiya);
    await daiya.say_and_wait('……没事的！鞋也已经换过了！', true);
    await daiya.say_and_wait(
      '备用的鞋子也提前钉好蹄铁了！……看吧，穿起来感觉也很正常。',
      true,
    );
    await daiya.say_and_wait('……根本没有什么……', true);
    await daiya.say_and_wait('需要担心的地方！！', true);
    await daiya.say_and_wait('啊啊啊啊啊啊啊啊啊啊！！');
    await era.printAndWait(
      '像是摆脱了什么般的……真切的咆哮。里见光钻展现惊人的气势，在草地上奔驰。',
    );
    if (extra_flag.rank === 1) {
      await say_by_passer_by_and_wait(
        '实况',
        `领先的是……里见光钻──！今年的德比赛${daiya.get_uma_sex_title()}是里见光钻！`,
      );
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊！');
      await say_by_passer_by_and_wait(
        '观众A',
        '里见光钻是第一名！！真是惊人的尾段加速实力！',
      );
      await say_by_passer_by_and_wait(
        '观众B',
        '持久力的部分也完全还有余裕的感觉，『菊花赏』应该也没问题了吧！',
      );
    } else {
      await say_by_passer_by_and_wait(
        '实况',
        `……里见光钻没能做到！成为德比赛${daiya.get_uma_sex_title()}的梦想离${
          daiya.sex
        }远去──！！`,
      );
    }
    await daiya.say_and_wait('呼、呼……');
    await daiya.say_and_wait(
      '鞋子……没有出问题，但我却……忍不住一直在意鞋子……',
      true,
    );
    await daiya.say_and_wait('真是不堪的表现……！！', true);
    if (extra_flag.rank === 1) {
      const reporter = get_chara_talk(303);
      await reporter.say_and_wait(
        `里见光钻${daiya.get_adult_sex_title()}，恭喜你！请问你成为德比赛${daiya.get_uma_sex_title()}的感想是？`,
      );
      await daiya.say_and_wait(
        `……谢谢。能够在赛${daiya.get_uma_sex_title()}的历史上留下自己的名字，我感到很光荣。`,
      );
      await daiya.say_and_wait(
        '在『日本德比』获胜，这对里见家来说也是至高的荣耀。',
      );
      await reporter.say_and_wait('里见集团的大家一定都很开心吧！');
      await daiya.say_and_wait(
        '是的，这是当然的。但我想，大家也会叮咛我不可骄傲自满吧。',
      );
      await reporter.say_and_wait(
        `哎呀！不过也正是这种严谨的上进心，才能将里见光钻${daiya.get_adult_sex_title()}培养得如此坚强吧！`,
      );
      await daiya.say_and_wait('是的，集团的大家总是督促我要更加进步。');
      await daiya.say_and_wait(
        '所以，下一次我一定会让大家看到比今天更出色的表现！',
      );
      await era.printAndWait('观众A「喔喔，我很期待喔──！」');
      await daiya.say_and_wait('嗯！一定会！！');
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊……');
      await daiya.say_and_wait('……呼……');
      await era.printAndWait(
        '走进地下道后，里见光钻原本紧张的情绪获得缓解。在一个长长的叹气后，恢复到了平时的表情。',
      );
      await daiya.say_and_wait('……我们走吧。');
      era.drawLine();
      await era.printAndWait(
        `回到休息室时，${daiya.sex}的表情看起来似乎有些不满。`,
      );
      era.printButton(
        `「恭喜你，今天起你就是德比赛${daiya.get_uma_sex_title()}了呢」`,
        1,
      );
      await era.input();
      await daiya.say_and_wait('谢谢，不过……');
      await daiya.say_and_wait(
        `争夺德比赛${daiya.get_uma_sex_title()}头衔的比赛……我的表现居然是那样，我觉得自己很没用……`,
      );
      era.printButton('「怎么了吗？」', 1);
      await era.input();
      await daiya.say_and_wait('我……在比赛的时候，一直忍不住在意鞋子的状况。');
    } else {
      era.drawLine();
      await era.printAndWait('回到休息室之后，里见光钻就一直保持沉默。');
      era.printButton('「虽然没能跑赢很可惜……」', 1);
      await era.input();
      await daiya.say_and_wait('……不，训练员。会跑输是因为我自己没用。');
      era.printButton('「没用？」', 1);
      await era.input();
      await daiya.say_and_wait('是的。因为我在比赛的时候一直忍不住在意鞋子。');
    }
    await daiya.say_and_wait(
      '明明就完全没有任何异状，我也亲自检查过好多遍，确定没有问题了！',
    );
    await daiya.say_and_wait('……当下的我……就是太害怕魔咒了……');
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait(`因为被魔咒分心，所以没有跑出最佳状态！`);
      await daiya.say_and_wait('我不能原谅这样的自己！！');
    } else {
      await daiya.say_and_wait(
        '因为被魔咒分心，所以没有跑出最佳状态，所以输了！',
      );
      await daiya.say_and_wait('我真的觉得自己这样很丢脸，无法原谅！！');
    }
    await daiya.say_and_wait('我绝不会输给魔咒！明明我都这样发誓过了！！');
    await daiya.say_and_wait(
      '……实现里见家梦想的道路上，我绝不能留下丝毫的不安！',
    );
    await daiya.say_and_wait(
      '如果前方真的有强大的魔咒在等待着我，那我要让自己的实力凌驾于那之上！',
    );
    await daiya.say_and_wait(
      '面对任何困难都不受影响的强大实力！做好能够应对所有事情的万全准备！',
    );
    await daiya.say_and_wait(
      '无论是厄运还是魔咒，我都要用压倒性的实力去碾压！',
    );
    await era.printAndWait(
      `绝对要做到完全胜利的宣言。──令 ${me.name} 相当佩服。`,
    );
    await daiya.say_and_wait('训练员！');
    era.printButton('「训练的安排就都交给我吧！」', 1);
    await era.input();
    await daiya.say_and_wait('呵呵呵！不愧是我的训练员呢♪');
    await daiya.say_and_wait(
      '『菊花赏』的时候，我们一定要让大家看到最完美的比赛！',
    );
    era.drawLine();
    await era.printAndWait(
      `从赛场回程的路上，${me.name} 邀约里见光钻一起去咖啡厅。`,
    );
    await era.printAndWait(
      `${me.name} 打算给准备挑战魔咒的${daiya.sex}一点鼓励，请${daiya.sex}吃一些甜食。`,
    );
    await daiya.say_and_wait(
      '什么都可以点吗……？我看看……水果圣代再加点起司蛋糕也可以吗……？',
    );
    era.printButton('「可以！」', 1);
    await era.input();
    await daiya.say_and_wait(
      '那我要再加三球冰淇淋，再加白玉汤圆跟果冻，然后水果加量……',
    );
    era.printButton('「爱怎么加就怎么加吧！」', 1);
    await era.input();
    await daiya.say_and_wait('呵呵，再加就要装不下了。感谢你的招待，训练员♪');
    await era.printAndWait('──这时，听到旁边座位谈到熟悉的名字。');
    await say_by_passer_by_and_wait('刚观战完的男性观众A', [
      '上次 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 粉丝票选的中间发表结果！第一名是北部玄驹！」',
    ]);
    await say_by_passer_by_and_wait(
      '刚观战完的男性观众B',
      `没错没错！我也是投给${daiya.sex}，所以超开心的！」`,
    );
    await era.printAndWait([
      '参赛选手由粉丝投票选出的 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '。名次的中间发表结果中，北部玄驹得到了第一名。',
    ]);
    await say_by_passer_by_and_wait('刚观战完的男性观众A', [
      `${daiya.sex}在 `,
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 的表现真的很棒！北部玄驹明明一度被超越了，却又在最后反超回来，以鼻差夺得第一！！」',
    ]);
    await say_by_passer_by_and_wait(
      '刚观战完的男性观众B',
      `那场比赛真的很刺激～！最后还是${daiya.sex}顽强的意志力获胜了！！`,
    );
    await say_by_passer_by_and_wait(
      '刚观战完的男性观众A',
      `因为${daiya.sex}真的跑得很拼命的样子，那种坚定不移的感觉会让人忍不住想支持${daiya.sex}吧。`,
    );
    await say_by_passer_by_and_wait(
      '刚观战完的男性观众B',
      `我懂我懂！因为${daiya.sex}本身也没什么特别亮眼的地方，就是很普通、很接近我们的感觉。」`,
    );
    await say_by_passer_by_and_wait(
      '刚观战完的男性观众B',
      `所以反而更希望${daiya.sex}能够跑赢！就像是看到自己获得成就的感觉！`,
    );
    await daiya.say_and_wait(
      '我也是这么想的！那边那两位，真的很懂小北的优点呢！',
    );
    await daiya.say_and_wait(
      '小北……她在新年参拜的时候，把目标定为增加支持自己的人……',
    );
    await daiya.say_and_wait('已经实现了呢。');
    era.printButton('「毕竟是粉丝票选第一名嘛」', 1);
    await era.input();
    await daiya.say_and_wait(
      '对啊。而且连粉丝都看起来很开心地在讨论小北的比赛呢。',
    );
    await daiya.say_and_wait(
      '希望带给支持自己的人笑容──她离这个目标也越来越接近了。',
    );
    await daiya.say_and_wait('……我也不能输给她呢。');
    await daiya.say_and_wait(
      '身为和小北一起比赛的对手，我也要努力不辜负这个身份才行……！',
    );
    await daiya.say_and_wait(
      '虽然现在是小北跑在比我更前方的位置，但我也要在我的道路上继续前进，一定要追上她！',
    );
    era.printButton('「『菊花赏』更是不能输了呢」', 1);
    await era.input();
    await daiya.say_and_wait(
      '嗯。小北在去年跑赢过的『菊花赏』，这场比赛我绝对不能输！',
    );
  };

  handlers[race_enum.kiku_sho] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('克己', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait(
      '照这个样子看来……接下来要开始抢位了，暂时先撑在这个位置……',
      true,
    );
    await era.printAndWait(
      '实况「从内侧开始进攻了！在这个时机点进攻了！后方的选手们也跟着冲上来了！」',
    );
    await daiya.say_and_wait('还不是时候。要忍耐。照我自己的步调……', true);
    await daiya.say_and_wait('──就是现在！！');
    await daiya.say_and_wait('喝啊啊啊啊啊啊啊啊啊啊！！');
    await era.printAndWait(
      '实况「来了──！！是里见光钻！发动了她利落的尾段加速能力──！」',
    );
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        `实况「第一名是里见光钻！！${daiya.sex}用金刚石无坚不摧的实力打破了所有障碍──！」`,
      );
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊！');
      await kita.say_and_wait('好耶！太好了、太好了、太好啦──────！！');
      await kita.say_and_wait('小钻！你成功了，小钻！！');
      await say_by_passer_by_and_wait(
        '观众A',
        '真厉害……我起鸡皮疙瘩了……！里见光钻真的好强啊！！',
      );
      await say_by_passer_by_and_wait('观众B', [
        `哈哈，原来这才是${daiya.sex}真正的实力啊！这也难怪${daiya.sex}会说 `,
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 和 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 时，不满意自己的表现了！',
      ]);
      await kita.say_and_wait('……小钻果然真的很厉害！');
    } else {
      await era.printAndWait(
        '实况「里见光钻虽然错过了成为第一名的机会，却展现出了最高级钻石该有的精彩表现！！」',
      );
      await say_by_passer_by_and_wait('观众', '啪啪啪啪啪！');
      await kita.say_and_wait('好厉害……小钻竟然在我不知不觉间成长成这样了……！');
      await kita.say_and_wait('嘿嘿嘿！好期待能跟她一起比赛喔！');
      await say_by_passer_by_and_wait(
        '观众A',
        '我好像……都起鸡皮疙瘩了……里见光钻的表现真的棒啊。',
      );
      await say_by_passer_by_and_wait('观众B', [
        '跟 ',
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 和 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 时完全不一样！原来这才是里见光钻真正的实力……！',
      ]);
      await say_by_passer_by_and_wait(
        '观众A',
        `让我好期待${daiya.sex}的下一场比赛呢！`,
      );
    }
    await daiya.say_and_wait('呼……呼……');
    await daiya.say_and_wait('脚感觉……好轻盈…………竟然这么……', true);
    await daiya.say_and_wait('我……', true);
    await daiya.say_and_wait('我…………唔！', true);
    await daiya.say_and_wait('训练员……！');
    if (extra_flag.rank === 1) {
      era.printButton('「恭喜你第一名！表现得真的很好哟！」', 1);
      await era.input();
      await daiya.say_and_wait('是……！谢谢你！！');
    } else {
      era.printButton('「你表现得很好哟！」', 1);
      await era.input();
      await daiya.say_and_wait('是……！');
    }
    await daiya.say_and_wait(
      '那个，今天我觉得脚特别地轻盈！跑完比赛也完全不觉得累喔！！',
    );
    await daiya.say_and_wait('跑出了一个自己也很满意的表现！！');
    await daiya.say_and_wait('就像是挣脱了脚上的枷锁一样……！');
    await daiya.say_and_wait('……身体…………跟心情……都很轻盈……！');
    era.printButton('「看来你已经『克服』了魔咒呢」', 1);
    await era.input();
    await daiya.say_and_wait('……！');
    await daiya.say_and_wait('…………呼…………呜……');
    await era.printAndWait('一颗一颗的泪水从里见光钻的眼眶不断滴落。然后──');
    await daiya.say_and_wait('呜啊啊啊啊啊啊……！！');
    await era.printAndWait('地下道里充斥着哭声。');
    await era.printAndWait(
      `打从${daiya.sex}出生以前就一直没有停止过的里见家魔咒的传闻。这个扛在${daiya.sex}肩上的重担，可想而知有多么地沉重。`,
    );
    await era.printAndWait(
      `总是向大家宣示自己不会输给魔咒，这或许也是${daiya.sex}鼓舞自己的一种方式。`,
    );
    await era.printAndWait(`${daiya.sex}终于从这个束缚中解脱了。`);
    await daiya.say_and_wait('……嘿嘿嘿……呜……不好意思……');
    await daiya.say_and_wait(
      '……真的就像麦昆所说的一样。原来，一直以来我都是因为太在意魔咒……反而划地自限了。',
    );
    await daiya.say_and_wait('不过，现在已经没事了。我不会再受影响了！');
    await daiya.say_and_wait(
      '今后我也会继续像今天这样，用自己的步调去赢得其他G1竞赛！',
    );
    await kita.say_and_wait('我可不会让你轻易得逞喔！');
    await daiya.say_and_wait('小北！');
    if (extra_flag.rank === 1) {
      await kita.say_and_wait('恭喜你在『菊花赏』拿第一名，小钻！');
      await daiya.say_and_wait(
        '谢谢！去年小北跑赢的比赛……我也跑赢了喔！所以我现在要很有自信地说出口！',
      );
      await daiya.say_and_wait('小北！跟我在『有马纪念』一较高下吧！');

      await kita.say_and_wait('我很乐意！！');
      await daiya.say_and_wait('可以吧？训练员？');
      era.printButton('「当然！」', 1);
      await era.input();
    } else {
      await kita.say_and_wait('你表现得很好喔，小钻！');
      await daiya.say_and_wait('谢谢！我的表现……够资格当小北的对手了吗……？');
      await kita.say_and_wait('──小钻。');
      await kita.say_and_wait('跟我一起在『有马纪念』决胜负吧！');
      await daiya.say_and_wait('小北……！');
      await daiya.say_and_wait('……训练员，『有马纪念』……');
      era.printButton('「是啊，下一场就是『有马纪念』了！」', 1);
      await era.input();
      await daiya.say_and_wait('是！！');
    }
    await kita.say_and_wait(
      '但是小钻，你要做好心理准备！『有马纪念』的我可是跟过去都不一样的喔！',
    );
    await kita.say_and_wait(
      '在跟小钻对决之前，我会先在『日本杯』用我的跑法，把日本的心意传递给全世界！',
    );
    await daiya.say_and_wait('呵呵，我很期待那天喔！');
    await daiya.say_and_wait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '……让其成为对现在的我们能跑出的最棒的一场对决吧！',
    ]);
    era.drawLine();
    await era.printAndWait('那天，我们从京都赛场回程的路上。');
    await daiya.say_and_wait('呵呵呵，训练员。我今天一直处于很兴奋的状态呢♪');
    era.printButton('「就连现在也是吗？」', 1);
    await era.input();
    await daiya.say_and_wait('是的，现在也是。');
    await daiya.say_and_wait([
      '一想到可以跟小北一起跑 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '，心跳就一直快得不得了。啊，比起兴奋，更大的应该是期待才对。',
    ]);
    await daiya.say_and_wait(
      '我们小时候天真烂漫的梦想，想不到即将就要变成现实了……',
    );
    era.printButton('「要和小北一起比赛的梦想吗？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '呵呵，当时我所想的舞台其实是G1竞赛，没想到现实却是更精彩的状况呢。',
    );
    await daiya.say_and_wait(
      `在我要成为知名赛${daiya.get_uma_sex_title()}这个梦想的路上，小北也在……${
        kita.sex
      }以对手的身份阻挡在前。`,
    );
    await daiya.say_and_wait(
      '没有比这更像是命运的安排又令人充满期待的状况了！',
    );
    era.printButton('「真的是最棒的舞台呢」', 1);
    await era.input();
    await daiya.say_and_wait(
      `是呀，我要追上跑在我前面的小北，超越${kita.sex}，然后实现我的梦想。实现我和里见家的梦想。`,
    );
    await era.printAndWait(
      `里见光钻的眼神中没有一丝的迷惘。燃烧在${daiya.sex}眼神深处的火焰就和刚遇见时一样。炽热地熊熊燃烧着。`,
    );
    era.printButton('「首先是『有马纪念』！」', 1);
    await era.input();
    await daiya.say_and_wait('没错！这次不需要再借用任何助力了。');
    await daiya.say_and_wait(
      '成功克服魔咒的光钻一定会让小北和其他资深级的大家输得五体投地的！',
    );
  };

  handlers[race_enum.arim_kin] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96) {
      await print_event_name('昂扬', daiya);
      const kita = get_chara_talk(68);
      if (extra_flag.rank === 1) {
        await daiya.say_and_wait('我一直不停地追逐着前面的背影。', true);
        await daiya.say_and_wait('我现在──要超越这个背影！！', true);
        await daiya.say_and_wait('呀啊啊啊啊啊啊啊啊！！');
        await say_by_passer_by_and_wait(
          '实况',
          `里见光钻领先冲过终点！！凭着${daiya.sex}钻石般的坚硬，击败了其他对手──！`,
        );
        await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊！');
        await daiya.say_and_wait('呼、呼、呼……');
        await kita.say_and_wait('……啊────！好不甘心喔！我输了────！！');
        await kita.say_and_wait('可是，真的跑得超────开心的！！');
        await daiya.say_and_wait(
          '呵呵呵呵！我也是！我也真的跑得超────开心的！！',
        );
        await daiya.say_and_wait('以后就可以常常体验到这么开心的感觉了呢！');
        await say_by_passer_by_and_wait(
          '观众C',
          '光钻，恭喜你────！你刚才真的很帅气喔────！！',
        );
        await say_by_passer_by_and_wait(
          '观众D',
          '这是一场最棒的比赛！！刚刚真的表现得很好喔，里见──！',
        );
        await kita.say_and_wait('大家都在等小钻过去！快过去吧！');
        const reporter = get_chara_talk(303);
        await reporter.say_and_wait(
          '里见光钻小姐，恭喜你！请告诉大家你现在的心情！',
        );
        await daiya.say_and_wait(
          '能在经典级的尾声完成一场这么棒的比赛，我真的觉得非常开心。',
        );
        await daiya.say_and_wait(
          '这一年……我一路以经典三冠为目标这样走来，这绝不是一条轻松的路程。',
        );
        await daiya.say_and_wait(
          '过程中我经历了许多事情，其中甚至也遭遇了一些无法预期的事情。',
        );
        await reporter.say_and_wait('具体来说是怎样的事情呢？');
        await daiya.say_and_wait([
          '像是在 ',
          race_infos[race_enum.sats_sho].get_colored_name(),
          ' 的时候遇到坏天气……当时真的是超乎想像的恶劣天气。',
        ]);
        await daiya.say_and_wait(
          '闪耀系列赛的比赛有时也会让我觉得很艰难……但是，今天真的是一场非常精彩的比赛。',
        );
        await daiya.say_and_wait(
          '我也发自内心地感谢这一路以来陪伴我走到今天的各位。谢谢大家。',
        );
        await kita.say_and_wait(
          '嘿嘿嘿，我才要跟你说谢谢呢！但我下次可不会再输啰，小钻！！',
        );
        await say_by_passer_by_and_wait(
          '观众A',
          '喔，说得好啊──！北部！下次我也会为你加油的！',
        );
        await say_by_passer_by_and_wait('观众C', '光钻也要加油喔──！');
        await reporter.say_and_wait(
          '两位是从小一起长大的儿时玩伴，之前也对外宣布彼此是竞争对手呢！你们的下一场对决已经决定好了吗？',
        );
        await daiya.say_and_wait('不，还没……');
        await kita.say_and_wait([
          race_infos[race_enum.sank_hai].get_colored_name(),
          '！',
        ]);
        await kita.say_and_wait([
          '我要参加 ',
          race_infos[race_enum.sank_hai].get_colored_name(),
          ' 喔！我要在那边雪耻！！',
        ]);
      } else {
        await daiya.say_and_wait('呼、呼、呼……');
        await kita.say_and_wait('呼、呼……小钻……你真的追上来了……！');
        await kita.say_and_wait(
          '小钻的气势连我的皮肤都感觉到了。现在都还觉得刺刺痛痛的呢。',
        );
        await daiya.say_and_wait('我也是。小北灼热的斗志都快把我给烫伤了。');
        await kita.say_and_wait('这就是比赛时的小钻……！');
        await daiya.say_and_wait('这就是比赛时的小北……！');
        await kita.say_and_wait(
          '之后我就可以常常像今天一样，跟小钻对决了呢！真的好期待喔！',
        );
        await daiya.say_and_wait('是呀！以后就可以一直跟小北一起比赛了！');
        await say_by_passer_by_and_wait(
          '观众A',
          '很好喔──！北部！下次我也会为你加油的！',
        );
        await say_by_passer_by_and_wait('观众C', '光钻也要加油喔──！');
        await kita.say_and_wait([
          '是！！谢谢大家！我的下一场比赛是……',
          race_infos[race_enum.sank_hai].get_colored_name(),
          '！',
        ]);
      }
      await say_by_passer_by_and_wait('观众', '喔喔喔喔喔喔喔！');
      await say_by_passer_by_and_wait(
        '观众A',
        '也就是『春季资深三冠』了吧！一定要拿下啊，北部！！',
      );
      await kita.say_and_wait('是！各位请一定要来现场观看喔！');
      await daiya.say_and_wait(['我也要参加！', '！！']);
      era.printButton('「呃……光钻！？」', 1);
      await era.input();
      await era.printAndWait(
        `下一场比赛，不，甚至连资深级的参赛方针，${me.get_couple_title()} 都还没有讨论过。`,
      );
      await era.printAndWait(
        `然而，里见光钻在看了 ${me.name} 一眼之后，又朝着观众席再重复了一次。`,
      );
      await daiya.say_and_wait([
        '我要在 ',
        race_infos[race_enum.sank_hai].get_colored_name(),
        ' 和小北对决！！',
      ]);
      await say_by_passer_by_and_wait(
        '观众B',
        `里见光钻对北部玄驹，${daiya.sex}们的对决还要继续啊！`,
      );
      await say_by_passer_by_and_wait('观众A', [
        race_infos[race_enum.arim_kin].get_colored_name(),
        '只是一个开始……喔喔喔！今后我也会追看你们的对决的！！',
      ]);
      await era.printAndWait(
        `观众盛大的欢呼声笼罩整个看台，迟迟没有停止。这时，北部玄驹将所有参赛赛${daiya.get_uma_sex_title()}叫来优胜者区域。`,
      );
      await era.printAndWait(
        `赛${daiya.get_uma_sex_title()}排成一列面对着观众席。举起双手大大地左右挥动。`,
      );
      await kita.say_and_wait('各位，明年也麻烦继续支持我们了──！！');
      await say_by_passer_by_and_wait('观众', '哇啊啊啊啊啊啊啊啊啊！');
      era.drawLine();
      await daiya.say_and_wait('……我擅自做决定，真的很抱歉。');
      await era.printAndWait('回到休息室后，里见光钻深深地鞠躬道歉。');
      era.printButton('「下一个目标真的就决定是『大阪杯』了吗？」', 1);
      await era.input();
      await era.printAndWait(
        `距离跟时程上都没有问题。但是以防万一，${me.name} 还是要跟${
          daiya.sex
        }确认，这是否是为了成为知名赛${daiya.get_uma_sex_title()}的梦想而做出来的决定。`,
      );
      await daiya.say_and_wait(
        '是的。毕竟『大阪杯』也是G1竞赛，所以没有问题。',
      );
      if (extra_flag.rank === 1) {
        await daiya.say_and_wait(
          `今天，看到小北在优胜者区域的表现……又让我认知到${kita.sex}有多了不起。`,
        );
        await daiya.say_and_wait(
          '虽然我跑赢了比赛，但我还没完全追上小北的脚步……',
        );
      } else {
        await daiya.say_and_wait(
          `今天，看到小北在比赛后的表现……又让我重新认知到${kita.sex}有多了不起。`,
        );
        await daiya.say_and_wait('……我跟小北之间的距离根本还差得很远……');
      }
      await daiya.say_and_wait(
        '训练员也看见了吧？当时看台上所有观众们的笑容，还有震荡会场的欢呼声。',
      );
      await daiya.say_and_wait(
        `小北用${kita.sex}比赛时的表现带给大家欢笑，并带动整个闪耀系列赛的热潮。`,
      );
      await daiya.say_and_wait(
        `让我深刻觉得那就是『知名赛${daiya.get_uma_sex_title()}』的姿态。`,
      );
      await daiya.say_and_wait(
        `『知名赛${daiya.get_uma_sex_title()}』该是什么样子，我自己还没有找到答案。`,
      );
      await daiya.say_and_wait(
        `以小北来说，${kita.sex}认真比赛的模样会让人忍不住想支持她。`,
      );
      await daiya.say_and_wait('吸引、撼动粉丝的心，那就是小北的风格。');
      await daiya.say_and_wait(
        '……身为里见家千金的我，是无法带动那样的热潮的。',
      );
      era.printButton('「光钻有光钻自己的优点」', 1);
      await era.input();
      await era.printAndWait(
        `坚定不移的坚强心志。带着高贵的气度并从不示弱是${daiya.sex}的作风。`,
      );
      await era.printAndWait(
        `相对可惜的是也因此让人较难看见${daiya.sex}的努力。明明${daiya.sex}的努力并不输给北部玄驹。时时刻刻都绽放着最耀眼的光芒。`,
      );
      await daiya.say_and_wait('呵呵，你这么说我很开心……但不用担心。');
      await daiya.say_and_wait(
        `我打算要找出属于自己的『知名赛${daiya.get_uma_sex_title()}』该有的姿态。`,
      );
      await daiya.say_and_wait(
        `看看里见光钻我究竟能用什么方式支持赛${daiya.get_uma_sex_title()}界……`,
      );
      await daiya.say_and_wait(
        `一边看着小北的表现，一边追着${kita.sex}的背影……我觉得这么做或许就能找到我想要的答案。`,
      );
      era.printButton('「我知道了，下一战就是『大阪杯』了呢！」', 1);
      await era.input();
      await daiya.say_and_wait('好的！训练员，要麻烦你继续照顾了！');
      await era.printAndWait(
        `『知名赛${daiya.get_uma_sex_title()}』该有的姿态。为了寻找这个未知的答案，${
          me.name
        } 和里见光钻即将要迈入资深级。`,
      );
    } else if (extra_flag.rank === 1) {
      await print_event_name('至宝', daiya);
      const kita = get_chara_talk(68);
      const mcqueen = get_chara_talk(13);
      const teio = get_chara_talk(3);
      await era.printAndWait(
        '实况「经过第二弯道的下坡，来到了看台对面的直线！领先集团目前的步调如何呢？」',
      );
      await era.printAndWait(
        '戴眼镜的男性「中山的草地2500米会经过六个弯道。因为赛道有大幅的高低差，更考验韧性。想要单靠速度强行冲线是很困难的。」',
      );
      await era.printAndWait('穿着帽T的男性「怎么突然这么说？」');
      await era.printAndWait(
        '戴眼镜的男性「终点前还有个非常陡的『破坏心脏的坡道』在等她们，比赛的结果不到最后一刻都是未知数。」',
      );
      await era.printAndWait('所有人都屏息以待地盯着比赛。然后──');
      await daiya.say_and_wait('喝啊啊啊啊啊啊啊啊啊啊啊！！');
      await era.printAndWait(
        '实况「有人冲出来了！是里见光钻！领先的是里见光钻！！」',
      );
      await kita.say_and_wait('唔啊啊啊啊啊啊！！');
      await era.printAndWait('麦昆&帝王「喝啊啊啊啊啊啊啊！」');
      await era.printAndWait(
        '实况「里见光钻冲上最后的坡道！一口气超越了她的挚友和崇拜对象──」',
      );
      await era.printAndWait('实况「里见光钻以第一名之姿冲过终点！！」');
      await era.printAndWait('（哇啊啊啊啊啊啊啊啊啊！）');
      await daiya.say_and_wait('呼、呼、呼……');
      await mcqueen.say_and_wait('恭喜你，光钻。是你赢了呢。');
      await daiya.say_and_wait('麦昆……！');
      await mcqueen.say_and_wait(
        '连在长距离的比赛也输给你了呢。你的实力已经无庸置疑了。',
      );
      await mcqueen.say_and_wait(
        `──你这不是已经拥有了吗。你所说的『知名赛${daiya.get_uma_sex_title()}』的实力。`,
      );
      await daiya.say_and_wait('谢谢……！');
      await teio.say_and_wait(
        '唔～想不到小钻跟小北竟然都已经变得这么厉害了……这真的是超乎我的想像。',
      );
      await kita.say_and_wait('帝王……！我我我我好开心喔～～！！');
      await teio.say_and_wait(
        '喂喂，这可还不是结束吧。不如说是才刚要开始而已吧！',
      );
      await teio.say_and_wait(
        '一旦停下脚步，立刻就会被超越。我还打算要再次挑战你们呢。',
      );
      await teio.say_and_wait(
        `况且，像你们这样厉害的赛${daiya.get_uma_sex_title()}，之后也还会陆陆续续出现吧。`,
      );
      await kita.say_and_wait(
        '是！我不会大意的！为了带给大家笑容，我一定会变得更强、更强的！',
      );
      await mcqueen.say_and_wait(
        '……光钻，你呢？已经清楚自己该前进的方向了吗？',
      );
      await daiya.say_and_wait(
        `……是。身为里见家的赛${daiya.get_uma_sex_title()}，我要引领里见家，开拓更多的历史。`,
      );
      await daiya.say_and_wait(
        `用成绩在赛${daiya.get_uma_sex_title()}界留下纪录，就这样继续打造属于里见家的历史。`,
      );
      await mcqueen.say_and_wait('原来如此。那么，你打算开拓怎样的道路呢？');
      await daiya.say_and_wait(
        '──迈向顶点的道路。我要像我的名字一样，挑战绽放出最顶级的钻石光辉。',
      );
      await daiya.say_and_wait(
        `挑战日本、世界各地的顶点，发扬赛${daiya.get_uma_sex_title()}界。`,
      );
      await daiya.say_and_wait(
        `这就是我──里见光钻所认为的『知名赛${daiya.get_uma_sex_title()}』该有的姿态。`,
      );
      await daiya.say_and_wait(
        `我现在才刚到这条路的入口处。今后我会以此为志，继续朝『知名赛${daiya.get_uma_sex_title()}』迈进。`,
      );
      await mcqueen.say_and_wait('呵呵，这是很了不起的心志呢。');
      await mcqueen.say_and_wait(
        `那接下来就像个『知名赛${daiya.get_uma_sex_title()}』一般，出发去吧！大家都在等你了！`,
      );
      await daiya.say_and_wait('好的！');
      await daiya.say_and_wait('各位，谢谢你们为我加油！');
      await era.printAndWait('观众A「光钻────！！恭喜你────！」');
      await era.printAndWait(
        `观众B「赛${daiya.get_uma_sex_title()}界的至宝！！没有人能胜过钻石的光辉！」`,
      );
      await daiya.say_and_wait('呵呵呵，我也希望一直保持。');
      await daiya.say_and_wait(
        `里见光钻身为里见家的赛${daiya.get_uma_sex_title()}，会尽心尽力、竭尽所能地为日本赛${daiya.get_uma_sex_title()}界的发展做出贡献。`,
      );
      await daiya.say_and_wait('而这一条路今后也──');
      await daiya.say_and_wait('小北！！');
      await daiya.say_and_wait('我希望可以跟小北继续一起挑战今后的种种。');
      await daiya.say_and_wait(
        '就算我们参加的比赛不一样了，目标跟前进的方向不一样了。',
      );
      await daiya.say_and_wait('即使我们在各自的道路前进──');
      await daiya.say_and_wait('我也想要继续跟小北并肩向前！');
      await kita.say_and_wait('小钻……！');
      await daiya.say_and_wait('我们一起继续跑下去吧！！');
      await kita.say_and_wait('嗯！！今后也要一直一起！');
      await kita.say_and_wait(
        '不过在那之前！下一场比赛！！我一定会赢过小钻的！',
      );
      await kita.say_and_wait('我目前的目标，首先就是这个！');
      await daiya.say_and_wait('呵呵呵！我不会输的！');
      await era.printAndWait('观众C「唔喔喔喔喔！很好喔你们！！我很期待喔！」');
      await era.printAndWait(
        '戴眼镜的男性「我保证，我会一直守护并见证里见，以及你们两人的历史！！」',
      );
      await era.printAndWait(
        '穿着帽T的男性「我们的心永远都和你们同在！支持你们！直到永远！！」',
      );
      await daiya.say_and_wait('谢谢！能够受到大家这么温暖的支持……');
      await daiya.say_and_wait('嘿嘿嘿，光钻真是个幸福的人！');
      await era.printAndWait('说完，里见光钻露出无比爽朗的笑容。');
      await era.printAndWait(
        '那是比任何宝石、比钻石都要更加耀眼的──里见光钻的光芒。',
      );
    } else {
      return true;
    }
  };
};
