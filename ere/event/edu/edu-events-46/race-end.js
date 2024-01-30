const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const chara_talk = new CharaTalk(46),
    chara4_talk = get_chara_talk(4),
    me = get_chara_talk(0),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:46:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・冉冉升起的新星', chara_talk);
    await chara_talk.say_and_wait(`训练员先生！飞鹰子跑的怎么样？`);
    era.printButton(`非常漂亮的胜利！`, 1);
    await era.input();
    await chara_talk.say_and_wait(`真的吗？那真是太好了！`);
    await era.printAndWait(
      `帮着飞鹰子按摩腿部已经发麻的肌肉，（玩家名）的笑容终于按捺不住了。`,
    );
    await chara_talk.say_and_wait(`训练员先生笑得像花痴一样！`);
    await era.printAndWait(`毫不留情的犀利吐槽让你强行收敛住笑容。`);
    era.printButton(
      `抱歉，看到飞鹰子的梦想踏出了最重要的一步，不知不觉就想出来了`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(`呵呵~训练员先生真是的。`);
    await chara_talk.say_and_wait(
      `那么！接下来的演出，训练员先生也要仔细看着哦！`,
    );
    await era.printAndWait(
      `做完最后一个按摩之后，醒目飞鹰换上了设计好的决胜服。`,
    );
    era.printButton(`飞鹰子加油！`, 1);
    await era.input();
    await me.say_and_wait(`一定要让他们看见泥地马娘的气势！`);
    await chara_talk.say_and_wait(`嗯！接下来就是飞鹰子的主场了！`);
    era.drawLine({ content: '胜者舞台' });
    await chara_talk.say_and_wait(`醒目飞鹰的梦想将从这里启程！`, true);
    await chara_talk.say_and_wait(
      `为了能够让更多像我这样的马娘也能有勇气踏出这一步，所以`,
      true,
    );
    await chara_talk.say_and_wait(`这就是最强大的马娘偶像——醒目飞鹰呦⭐`, true);
    await era.printAndWait(`舞台中央，飞鹰子成为了众人的焦点。`);
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('皋月赏后・憧憬的舞台', chara_talk);
    await era.printAndWait(`休息室中`);
    era.printButton(`演出辛苦了，飞鹰子。`, 1);
    await era.input();
    await era.printAndWait(
      `虽然没能在皋月赏中获胜，但醒目飞鹰却很满足的样子。`,
    );
    await chara_talk.say_and_wait(`皋月赏的舞台比想象中还要大呢？`);
    await chara_talk.say_and_wait(
      `如果训练员先生也能站在舞台上看一下就好了呢。`,
    );
    await era.printAndWait(
      `笨蛋我怎么上的去呢？就这样轻轻敲了敲飞鹰子的小脑袋。`,
    );
    await chara_talk.say_and_wait(`欸嘿⭐`);
    await era.printAndWait(`吐着舌头的醒目飞鹰显得意外可爱。`);
    await me.say_and_wait(`咳咳！接下来的话飞鹰子要好好准备泥地德比了`);
    await chara_talk.say_and_wait(`好⭐`);
    await me.say_and_wait(`不过偶像演出也不能松懈！`);
    await chara_talk.say_and_wait(`是⭐`);
    await me.say_and_wait(`就这样顺着这股气势向前进！`);
    await chara_talk.say_and_wait(
      `最强的马娘偶像——醒目飞鹰⭐下次一定要让大家看着我闪耀的样子！`,
    );
    await era.printAndWait(`高昂的精神将沉闷的空气一扫而空。`);
    await era.printAndWait(`（玩家名）开始期待着接下来的比赛了。`);
  } else if (
    extra_flag.race === race_enum.japa_dir &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('泥地德比后・满足的尽兴', chara_talk);
    await era.printAndWait(`休息室中`);
    await chara_talk.say_and_wait(`训练员先生看到飞鹰子在舞台上的表现了吗⭐`);
    await me.say_and_wait(`现场的情绪比想象之中还要高涨！`);
    await era.printAndWait(
      `在舞台之上的飞鹰子相比于比赛，不如说舞台才是她的主场。`,
    );
    await era.printAndWait(
      `无数次练习的舞步以及与粉丝之间的一问一答炒热了现场的气氛。`,
    );
    await me.say_and_wait(`飞鹰子作为偶像来说真是专业级别的啊。`);
    await era.printAndWait(`比起赛马娘也许她应该向偶像方向发展？`);
    await chara_talk.say_and_wait(
      `飞鹰子既然以顶级偶像为目标前进，那么作为偶像基础中的基础也是必须认真对待的！`,
    );
    await me.say_and_wait(`现在的话，腿还有知觉吗？`);
    await era.printAndWait(`脱下跑鞋之后，帮着飞鹰子做起了脚部按摩。`);
    await chara_talk.say_and_wait(`比起之前的话，稍微有点感觉了！`);
    await me.say_and_wait(
      `虽然飞鹰子的热情像火焰一样炽热，不过忽视自己身体的话是会非常容易受伤的！`,
    );
    await chara_talk.say_and_wait(`我知道了，接下来的话也拜托训练员先生了。`);
    await era.printAndWait(
      `从舞台之上下来的飞鹰子几乎都站不住了，还是（玩家名）抱着飞鹰子回到的休息室。`,
    );
    await me.say_and_wait(`飞鹰子漂亮的像蝴蝶一样呢。`);
    await era.printAndWait(`燃烧自己，照耀世界，脆弱而易碎。`);
    await chara_talk.say_and_wait(
      `欸？蝴蝶吗.......如果是蝴蝶的话，训练员先生也会在花丛中吗？`,
    );
    await me.say_and_wait(`不如说遇到飞鹰子是我的荣幸！`);
    await chara_talk.say_and_wait(`呀啊——飞鹰子要被捉住了！`);
    await me.say_and_wait(`这下飞鹰子跑不了了！`);
    await era.printAndWait(`醒目飞鹰取得了泥地德比的胜利。`);
  } else if (
    extra_flag.race === race_enum.jbc_cls &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('JBC经典赛后・过载', chara_talk);
    await era.printAndWait(`飞鹰子以绝对的优势取得了比赛的胜利。`);
    await era.printAndWait(`采取领放跑法的飞鹰子掌控了整场比赛的节奏。`);
    await era.printAndWait(`接下来的胜者舞台中，她也使出了浑身解数。`);
    await era.printAndWait(`然而——`);
    await era.printAndWait(
      `医生「本身没有大碍，只是因为过于疲惫而晕过去了。」`,
    );
    await era.printAndWait(
      `医生「你是醒目飞鹰的训练员吧？为什么不让她好好休息？」`,
    );
    await me.say_and_wait(`抱歉，都是我的错。`);
    await era.printAndWait(`医生「接下来不要再过度劳累了。」`);
    await me.say_and_wait(`谢谢医生。`);
    await era.printAndWait(`看着躺在病床之上的醒目飞鹰，坐下来的你握紧了拳头`);
    era.drawLine();
    await me.say_and_wait(`飞鹰子！振作一点，飞鹰子！`);
    await era.printAndWait(
      `马娘「刚刚表演的时候还是活跃的样子，从升降机上下来结果就——」`,
    );
    await me.say_and_wait(`救护车！救护车在哪里？`);
    await era.printAndWait(`负责人「已经打电话叫救护车了。」`);
    await era.printAndWait(`负责人「总之先赶快抬到医务室里。」`);
    await era.printAndWait(`飞鹰子「训练员先生?」`, { fontSize: '10px' });
    await era.printAndWait(
      `轻轻将飞鹰子背了起来，顺着负责人的指示向着医务室跑去。`,
    );
    era.printButton(`如果你有什么事的话，我也`, 1);
    await era.input();
    await era.printAndWait(`飞鹰子「是训练员先生吗?」`, { fontSize: '12px' });
    await era.printAndWait(`似乎飞鹰子在说着什么一样。`);
    await era.printAndWait(
      `奔向医务室之后的事情记不太清了，除了看着飞鹰子被抬进救护车之外，什么都不记得了。`,
    );
    await era.printAndWait(`飞鹰子「（玩家名）！」`);
    era.drawLine();
    await era.printAndWait(`眼前的少女睁着大眼睛看着你。`);
    await era.printAndWait(`充满汗水的小手紧紧抓着你的衣袖不放。`);
    await era.printAndWait(`飞鹰子「训练员先生?」`);
    await era.printAndWait(`视野不知何时变得一片模糊。`);
    await me.say_and_wait(`飞鹰子......实在是太好了。`);
    await era.printAndWait(`只要醒目飞鹰没事就好。`);
  } else if (
    extra_flag.race === race_enum.toky_dai &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('东京大赏后・名为醒目飞鹰的泥地偶像', chara_talk);
    await era.printAndWait(`醒目飞鹰赢得了今年的冠军。`);
    await era.printAndWait(`舞台之上的她像是重新蜕变了一样。`);
    await era.printAndWait(`爽朗的笑容与节奏的掌控顺利炒热了现场的气氛。`);
    await me.say_and_wait(`飞鹰子......辛苦了`);
    await era.printAndWait(
      `从舞台之上下来的醒目飞鹰喘着粗气，浑身的汗水象征着作为偶像的努力。`,
    );
    await era.printAndWait(
      `即使在后台也能听到粉丝们的呼喊声如同浪潮一样经久不息。`,
    );
    await me.say_and_wait(`比想象中还要厉害呢`);
    await era.printAndWait(`作为偶像来说是最高的荣誉。`);
    await chara_talk.say_and_wait(
      `没有训练员先生的话，飞鹰子也看不到这一切呢。`,
    );
    await chara_talk.say_and_wait(`与其说全是飞鹰子的功劳，不如说`);
    await me.say_and_wait(`是我们共同努力的结果。`);
    await era.printAndWait(
      `虽然身体微微颤抖，但还是坚持着向你露出灿烂笑容的飞鹰子伸出了手。`,
    );
    await chara_talk.say_and_wait(
      `今后的道路，也希望能和训练员先生一起走下去。`,
    );
    await era.printAndWait(
      `紧紧握住着粘稠的小手的（玩家名）同样带着微笑看向了醒目飞鹰。`,
    );
    await me.say_and_wait(`我也从飞鹰子这里学到了很多，今后也请多指教了。`);
    await era.printAndWait(
      `对视着的彼此像是发泄着心中所有的恐惧一样笑了起来，因为他们知道——`,
    );
    await era.printAndWait(`——世界上再没有第二个人能心意相通到这个程度了。`);
  } else if (
    extra_flag.race === race_enum.febr_sta &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('二月锦标后・后辈', chara_talk);
    era.drawLine({ content: '胜者舞台后' });
    await chara_talk.say_and_wait(`谢谢大家的支持！`);
    await era.printAndWait(`精彩的结束了胜者舞台后的飞鹰子回到了休息室。`);
    await me.say_and_wait(`飞鹰子，辛苦了！`);
    await era.printAndWait(`接过了矿泉水和毛巾之后，慢慢平复着澎湃的心情。`);
    await chara_talk.say_and_wait(`距离飞鹰子成为顶级偶像更近了一步呢！`);
    await me.say_and_wait(`如果是飞鹰子的话，一定可以做到的！`);
    await chara_talk.say_and_wait(`那个，训练员先生，飞鹰子的话......`);
    await era.printAndWait(`咚咚咚`);
    await era.printAndWait(`不合时宜的敲门声响了起来`);
    await me.say_and_wait(`说不定是飞鹰子的粉丝来了。`);
    await era.printAndWait(`轻轻打开休息室的门。`);
    await me.say_and_wait(`抱歉，飞鹰子正在休息......你是？`);
    await era.printAndWait(`在发传单时见到的自称是后辈的马娘。`);
    await era.printAndWait(`马娘「飞鹰子前辈！祝贺你胜利了！」`);
    await chara_talk.say_and_wait(`欸？`);
    await era.printAndWait(
      `马娘「飞鹰子前辈不知道吗？对参加泥地的马娘们来说，飞鹰子可是闪耀着炫目光芒的存在呢！」`,
    );
    await era.printAndWait(
      `马娘「虽然在草地上没有适应性而转战泥地的大家已经是退无可退了......不过，是飞鹰子前辈让我们看到了前进的希望！」`,
    );
    await era.printAndWait(`马娘「所以，希望飞鹰子前辈能够一直闪耀下去！」`);
    await era.printAndWait(`越说越激动的马娘紧紧握住了醒目飞鹰的手。`);
    await chara_talk.say_and_wait(`那个，飞鹰子的话`);
    await me.say_and_wait(
      `我是醒目飞鹰的训练员，现在的她需要休息，如果有什么想法的话请和我说。`,
    );
    await era.printAndWait(`在这一步不可退让。`);
    await era.printAndWait(
      `马娘「飞鹰前辈的训练员吗？抱歉！太激动忘了这件事！」`,
    );
    await era.printAndWait(`马娘「抱歉打扰你们独处我先走了！」`);
    await era.printAndWait(`露出尴尬表情的马娘姗笑着离开了休息室。`);
    await me.say_and_wait(`总算离开了，飞鹰子？`);
    await chara_talk.say_and_wait(
      `明明飞鹰子也是在磕磕绊绊前进着的，总觉得没什么实感呢。`,
    );
    await era.printAndWait(`飞鹰子似乎像是想到了什么一样，露出了迷茫的表情。`);
  } else if (
    extra_flag.race === race_enum.teio_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('帝王赏后・闪耀的偶像', chara_talk);
    await era.printAndWait(`醒目飞鹰漂亮的取得了一着。`);
    await era.printAndWait(`在胜者舞台的场上也展现得。`);
    await era.printAndWait(
      `对于飞鹰子来说，距离成为顶级偶像的道路已经越来越近了。`,
    );
    await chara_talk.say_and_wait(`训练员先生，飞鹰子表演得怎么样？`);
    await me.say_and_wait(`飞鹰子与专业偶像也相差不多了。`);
    await me.say_and_wait(`不过比起来的话，还是我家的飞鹰子最可爱了。`);
    await chara_talk.say_and_wait(`嗯！飞鹰子也觉得自己很可爱！`);
    await chara4_talk.say_and_wait(`飞鹰子很厉害呢！`);
    await era.printAndWait(`不知何时，丸善斯基站在了休息室门口。`);
    await chara_talk.say_and_wait(`诶？丸善前辈为什么在这里？`);
    await chara4_talk.say_and_wait(
      `嗯！看到飞鹰子努力奔跑的样子，我可是超~感动呢！`,
    );
    await chara4_talk.say_and_wait(
      `带着想要闪闪发光的梦想，在草地上一路疾驰，然后在胜者舞台上展现最美的自己。`,
    );
    await chara4_talk.say_and_wait(`姐姐我也被这种热情点燃了呢！`);
    await chara_talk.say_and_wait(`没，没有丸善前辈说的这么厉害啦......`);
    await chara4_talk.say_and_wait(
      `嗯——说起来，如果有机会的话，一起练习一下吧？`,
    );
    await chara_talk.say_and_wait(`那个，飞鹰子`);
    await chara4_talk.say_and_wait(`泥地的话，姐姐我会努力克服这点小缺陷的♪`);
    await chara4_talk.say_and_wait(`那么，到时候再见了♪`);
    await chara_talk.say_and_wait(
      `......嗯！能和丸善前辈一起的话，说不定飞鹰子也能学到更多的东西！`,
    );
    await era.printAndWait(`就这样，帝王赏完美结束了。`);
  } else if (
    extra_flag.race === race_enum.jbc_cls &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('育马场经典赛后・再次起跑！', chara_talk);
    await era.printAndWait(`粉丝们「飞鹰子！飞鹰子！噢噢噢噢噢噢噢噢！」`);
    await era.printAndWait(`冲过终点的一瞬间,全场的粉丝们都在欢呼。`);
    await me.say_and_wait(`飞鹰子，辛苦了。`);
    await era.printAndWait(`将毛巾递给了醒目飞鹰。`);
    await chara_talk.say_and_wait(`非常感谢！`);
    await era.printAndWait(
      `从更衣室里出来后的醒目飞鹰穿上了你叠在座椅上的备用决胜服。`,
    );
    await me.say_and_wait(`接下来的胜者舞台加油！`);
    await chara_talk.say_and_wait(`嗯！飞鹰子不会辜负粉丝们的期待的！`);
    await chara_talk.say_and_wait(`那么，差不多该出发了！`);
    await era.printAndWait(
      `将准备好的矿泉水一饮而尽后，醒目飞鹰走向了胜者舞台。`,
    );
    era.drawLine({ content: '胜者舞台结束后' });
    await chara_talk.say_and_wait(`呼~现在的话就只剩下东京大赏了。`);
    await era.printAndWait(
      `飞鹰子的表演比想象之中还要精彩，粉丝们排山倒海般的气浪几乎将舞台掀翻。`,
    );
    await me.say_and_wait(`距离顶级偶像的话现在只剩一步之遥了哦？`);
    await me.say_and_wait(`飞鹰子实际上已经是顶级偶像了。`, true);
    await era.printAndWait(
      `作为泥地偶像在沙地上驰骋，即是作为前辈也是作为后辈。`,
    );
    await me.say_and_wait(`那么，回去之后好好休息吧。`);
    await me.say_and_wait(`毕竟飞鹰子。`);
    await era.printAndWait(`不知不觉间在座位上睡着的醒目飞鹰额外的可爱。`);
    await me.say_and_wait(`现在的话，就让她稍微睡一会吧。`);
    await era.printAndWait(`尽可能不惊动醒目飞鹰，慢慢将她背到背上。`);
    await era.printAndWait(`在回去的路上，飞鹰子的睡脸额外的可爱。`);
  }
};
