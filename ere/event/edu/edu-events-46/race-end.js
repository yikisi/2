const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');

/**
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const callname = sys_get_callname(46, 0),
    falcon = new CharaTalk(46),
    chara2_talk = get_chara_talk(2),
    chara4_talk = get_chara_talk(4),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:46:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战后・冉冉升起的新星', falcon);
    await say_by_passer_by(`解说`, `胜利者是——${falcon.name}！`);
    await era.printAndWait(
      `正如${falcon.name}向粉丝们所宣布的那样，从比赛的开始便牢牢的吸引了所有观众的目光。`,
    );
    await era.printAndWait(
      `就这么保持着与其他${falcon.uma_sex_title}之间的距离一直到最后。`,
    );
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}！训练员${me.adult_sex_title}！看到飞鹰子在赛场上的表现了吗？`,
    );
    era.printButton(`不小心看入迷了！`, 1);
    await era.input();
    await falcon.say_and_wait(`真的吗？太好了⭐`);
    await era.printAndWait(
      `从赛场上下来的${falcon.name}稍作休息后又重新恢复了活力。`,
    );
    await era.printAndWait(
      `帮着飞鹰子按摩腿部已经发麻的肌肉，${me.actual_name}的脸上抑制不住的笑容来。`,
    );
    await falcon.say_and_wait(
      `——就这样飞鹰子快要坚持不住的时候，听到了来自观众席上的应援声，然后飞鹰子不知从哪里来的力气，就这么一口气冲到了底！`,
    );
    await era.printAndWait(
      `从赛场上下来的${falcon.name}，打算趁演出尚未开始的空隙向观众席的各位推销自己每日进行的突击演出，但最后还是被${callname}给劝说下来了。`,
    );
    await falcon.say_and_wait(`好好期待飞鹰子接下来的表演吧！`);
    await era.printAndWait(
      `最后的按摩结束后，${falcon.name}为了确认新的感觉而踮起了脚尖。`,
    );
    era.printButton(`一定要让他们看见泥地偶像的气势哦！`, 1);
    await era.input();
    await falcon.say_and_wait(
      `就这样将所有观众的心在飞鹰子的主场中全～部夺过来♪因为飞鹰子是世界上最闪耀的${falcon.uma_sex_title}偶像呦⭐`,
    );
    era.drawLine({ content: '胜者舞台' });
    await falcon.say_and_wait(`这就是胜者舞台吗？`, true);
    await era.printAndWait(
      `跟随着工作人员的指引，按照之前确定好的队形站在升降机上。`,
    );
    await era.printAndWait(
      `在排列队形时还会有稀稀疏疏的声音，到了站定时能听到的却只剩下微弱的呼吸声了。`,
    );
    await falcon.say_and_wait(`${falcon.name}的梦想将从这里启程！`, true);
    await era.printAndWait(
      `一阵强烈的震动传来，随后${falcon.name}感受到了一股向下的力量传来，接下来就是正式演出了。`,
    );
    await era.printAndWait(
      `虽然在心底告诉自己没有什么可怕的，但额头还有手心还是被汗液打湿。`,
    );
    await era.printAndWait(
      `探照灯已经按照名次顺序点亮了舞台，时间也因等待着${falcon.teen_sex_title}们而渐渐停止。`,
    );
    await era.printAndWait(
      `朝思暮想的舞台就在眼前，排练过的舞步在脑海中闪过无数次，因为紧张而大脑几近空白，但凝滞的时间已经缓缓转动，现在就是前进的时刻了。`,
    );
    await era.printAndWait(`于是${falcon.name}完成了自己的第一次胜者舞台。`);
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('皋月赏后・闪耀的大舞台', falcon);
    await falcon.say_and_wait(`真的吗……`);
    await falcon.say_and_wait(
      `${falcon.name}……飞鹰子居然真的赢了！Lucky！Victory⭐`,
    );
    await era.printAndWait(
      `${callname}也死死的盯着记分板上的字符，生怕眼前的事实就像是一场梦一样，就这么带着不真实的感觉醒来，可醒来的话也会是一场好梦吧。`,
    );
    await era.printAndWait(
      `然而${falcon.name}的名次没有因为${callname}的动作而有任何改变，就像是使苹果从树上落下的重力一样令人安心。`,
    );
    await falcon.say_and_wait(`不会是梦吧！训练员${me.adult_sex_title}！`);
    await era.printAndWait(`${falcon.name}也没从这种狂喜之中回复过来`);
    era.printButton(`接下来就是${falcon.name}梦寐以求的……草地的舞台！`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}发出了连自己听到后都有些吃惊的尖锐与颤抖声。`,
    );
    await falcon.say_and_wait(`是！`);
    await era.printAndWait(
      `${falcon.name}终于反应过来，飞快的做着决胜舞台时所需的准备。`,
    );
    await era.printAndWait(`${callname}靠在座位上，久久不能回神。`);
    era.drawLine({ content: '胜者舞台结束后' });
    await me.say_and_wait(`辛苦了。`);
    await era.printAndWait(
      `${callname}将准备好的毛巾递给了正散发着蒸汽的${falcon.name}。`,
    );
    await era.printAndWait(
      `浑身湿透的${falcon.name}尽管疲惫不堪，但${falcon.sex}的双眼却散发着光芒。`,
    );
    await me.say_and_wait(`皋月赏的舞台怎么样？`);
    await falcon.say_and_wait(`比想象之中还要旷阔，比想象中还要闪耀！`);
    await falcon.say_and_wait(
      `而且，飞鹰子从来没有在这么多人的舞台之上演出过，特别是站在比奔跑过的舞台还要大上两倍的地方。`,
    );
    await era.printAndWait(
      `一边用毛巾擦拭着头发上黏着的汗水，一边望着${callname}的${falcon.name}。`,
    );
    await falcon.say_and_wait(
      `在那么多观众的注视下，飞鹰子就像是充满了力量一样……如果训练员${me.adult_sex_title}也能体会到飞鹰子所说的那种万众瞩目的感觉，那么就会明白飞鹰子说的是什么了。`,
    );
    await era.printAndWait(
      `${falcon.name}略有遗憾的停下了手中的动作，眼睛似乎在望着什么，又像是回忆着美好事物时无意识摩擦着毛巾。`,
    );
    await chara2_talk.say_and_wait(`打扰了。`);
    await era.printAndWait(`无声铃鹿打开了休息室的大门。`);
    await chara2_talk.say_and_wait(`欸？我是不是应该等下再过来。`);
    await era.printAndWait(
      `${falcon.name}下意识的动作停了下来，而无声铃鹿看向了${callname}，似乎在等待着${callname}的下一句话。`,
    );
    await me.say_and_wait(`没有，不如说是来得正好。谢谢${callname}铃鹿小姐。`);
    await me.say_and_wait(`之前的草地特训真是帮了大忙。`);
    await era.printAndWait(`${callname}由衷的向${falcon.sex}表示感谢。`);
    await falcon.say_and_wait(
      `谢谢${callname}，小铃鹿，飞鹰子能取得胜利真是多亏了${callname}⭐`,
    );
    await chara2_talk.say_and_wait(`小……小铃鹿？`);
    await era.printAndWait(`不知何时，${falcon.name}回到了之前的模式。`);
    await me.say_and_wait(
      `作为这次比赛胜利的大功臣，铃鹿小姐可否和我们一起庆祝获胜？`,
    );
    await era.printAndWait(
      `将之前的暧昧气氛抛掷脑后，${callname}向无声铃鹿提出建议。`,
    );
    await chara2_talk.say_and_wait(
      `……既然训练员${me.adult_sex_title}都说到这份上了，非常感谢。`,
    );
    await era.printAndWait(`随后一行人在附近有名的西餐厅享受着胜利的滋味。`);
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('皋月赏后・憧憬的大舞台中央', falcon);
    await era.printAndWait(`休息室中`);
    era.printButton(`演出辛苦了，飞鹰子。`, 1);
    await era.input();
    await era.printAndWait(
      `虽然没能在皋月赏中获胜，但${falcon.name}却很满足的样子。`,
    );
    await falcon.say_and_wait(`皋月赏的舞台比想象中还要大呢……`);
    await falcon.say_and_wait(
      `比平时登上的舞台还要大两倍，耀眼的闪光灯，满眼全部都是注视着我们的观众。`,
    );
    await falcon.say_and_wait(
      `不过，最耀眼的还是舞台最中间的位置吧……下一次，飞鹰子一定会登上去的！`,
    );
    await falcon.say_and_wait(`飞鹰子加油！`);
    await me.say_and_wait(
      `笨蛋，皋月赏是限定第二年的赛${falcon.uma_sex_title}才能参加的比赛！`,
    );
    await era.printAndWait(`${callname}轻轻敲了敲${falcon.name}的小脑袋。`);
    await falcon.say_and_wait(`欸嘿⭐`);
    await era.printAndWait(`吐着舌头的${falcon.name}显得意外可爱。`);
    await me.say_and_wait(`真是可爱。`, true);
    await me.say_and_wait(`咳咳！接下来的话飞鹰子要好好准备泥地德比了。`);
    await falcon.say_and_wait(`好⭐`);
    await me.say_and_wait(`不过偶像演出也不能松懈！`);
    await falcon.say_and_wait(`是⭐`);
    await me.say_and_wait(`就这样顺着这股气势向前进！`);
    await falcon.say_and_wait(
      `最强的${falcon.uma_sex_title}偶像——${
        falcon.name
      }⭐下次一定要让大家看着我闪耀的样子！`,
    );
    await era.printAndWait(`${falcon.name}以活力的声音作为回复。`);
    await era.printAndWait(`${me.actual_name}开始期待着接下来的比赛了。`);
  } else if (
    extra_flag.race === race_enum.japa_dir &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('泥地德比后・满足的尽兴', falcon);
    await era.printAndWait(`休息室\n`);
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}看到飞鹰子在舞台上的表现了吗⭐`,
    );
    await me.say_and_wait(`现场的情绪比想象之中还要高涨！`);
    await era.printAndWait(
      `在舞台之上的飞鹰子相比于比赛，不如说舞台才是${falcon.sex}的主场。`,
    );
    await era.printAndWait(
      `无数次练习的舞步以及与粉丝之间的一问一答炒热了现场的气氛。`,
    );
    await me.say_and_wait(`飞鹰子作为偶像来说真是专业级别的啊。`);
    await era.printAndWait(
      `比起赛${falcon.uma_sex_title}也许${falcon.sex}应该向偶像方向发展？`,
    );
    await falcon.say_and_wait(
      `飞鹰子既然以顶级偶像为目标前进，那么作为偶像基础中的基础也是必须认真对待的！`,
    );
    await me.say_and_wait(`现在的话，腿还有知觉吗？`);
    await era.printAndWait(`脱下跑鞋之后，帮着飞鹰子做起了脚部按摩。`);
    await falcon.say_and_wait(`比起之前的话，稍微有点感觉了！`);
    await me.say_and_wait(
      `虽然飞鹰子的热情像火焰一样炽热，不过忽视自己身体的话是会非常容易受伤的！`,
    );
    await falcon.say_and_wait(
      `我知道了，接下来的话也拜托训练员${me.adult_sex_title}了。`,
    );
    await era.printAndWait(
      `从舞台之上下来的飞鹰子几乎都站不住了，还是${me.actual_name}抱着飞鹰子回到的休息室。`,
    );
    await me.say_and_wait(`飞鹰子漂亮的像蝴蝶一样呢。`);
    await era.printAndWait(`燃烧自己，照耀世界，脆弱而易碎。`);
    await falcon.say_and_wait(
      `欸？蝴蝶吗……如果是蝴蝶的话，训练员${me.adult_sex_title}也会在花丛中吗？`,
    );
    await me.say_and_wait(`不如说遇到飞鹰子是我的荣幸！`);
    await falcon.say_and_wait(`呀啊——飞鹰子要被捉住了！`);
    await me.say_and_wait(`这下飞鹰子跑不了了！`);
    await era.printAndWait(`${falcon.name}取得了泥地德比的胜利。`);
  } else if (
    extra_flag.race === race_enum.jbc_cls &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('JBC经典赛后・过载', falcon);
    await era.printAndWait(`飞鹰子以绝对的优势取得了比赛的胜利。`);
    await era.printAndWait(`采取领放跑法的飞鹰子掌控了整场比赛的节奏。`);
    await era.printAndWait(
      `接下来的胜者舞台中，${falcon.sex}也使出了浑身解数。`,
    );
    await era.printAndWait(`然而——`);
    await era.printAndWait(
      `医生「本身没有大碍，只是因为过于疲惫而晕过去了。」`,
    );
    await era.printAndWait(
      `医生「${callname}是${falcon.name}的训练员吧？为什么不让${falcon.sex}好好休息？」`,
    );
    await me.say_and_wait(`抱歉，都是我的错。`);
    await era.printAndWait(`医生「接下来不要再过度劳累了。」`);
    await me.say_and_wait(`谢谢医生。`);
    await era.printAndWait(
      `看着躺在病床之上的${falcon.name}，坐下来的${callname}握紧了拳头`,
    );
    era.drawLine();
    await me.say_and_wait(`飞鹰子！振作一点，飞鹰子！`);
    await era.printAndWait(
      `${falcon.uma_sex_title}「刚刚表演的时候还是活跃的样子，从升降机上下来结果就——」`,
    );
    await me.say_and_wait(`救护车！救护车在哪里？`);
    await era.printAndWait(`负责人「已经打电话叫救护车了。」`);
    await era.printAndWait(`负责人「总之先赶快抬到医务室里。」`);
    await era.printAndWait(`飞鹰子「训练员${me.adult_sex_title}?」`, {
      fontSize: '0.5rem',
    });
    await era.printAndWait(
      `轻轻将飞鹰子背了起来，顺着负责人的指示向着医务室跑去。`,
    );
    era.printButton(`如果${callname}有什么事的话，我也`, 1);
    await era.input();
    await era.printAndWait(`飞鹰子「是训练员${me.adult_sex_title}吗?」`, {
      fontSize: '0.75rem',
    });
    await era.printAndWait(`似乎飞鹰子在说着什么一样。`);
    await era.printAndWait(
      `奔向医务室之后的事情记不太清了，除了看着飞鹰子被抬进救护车之外，什么都不记得了。`,
    );
    await era.printAndWait(`飞鹰子「${me.actual_name}！」`);
    era.drawLine();
    await era.printAndWait(
      `眼前的${falcon.teen_sex_title}睁着大眼睛看着${callname}。`,
    );
    await era.printAndWait(`充满汗水的小手紧紧抓着${callname}的衣袖不放。`);
    await era.printAndWait(`飞鹰子「训练员${me.adult_sex_title}?」`);
    await era.printAndWait(`视野不知何时变得一片模糊。`);
    await me.say_and_wait(`飞鹰子……实在是太好了。`);
    await era.printAndWait(`只要${falcon.name}没事就好。`);
  } else if (
    extra_flag.race === race_enum.toky_dai &&
    edu_weeks <= 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`东京大赏后・名为${falcon.name}的泥地偶像`, falcon);
    await era.printAndWait(`${falcon.name}赢得了今年的冠军。`);
    await era.printAndWait(`舞台之上的${falcon.sex}像是重新蜕变了一样。`);
    await era.printAndWait(`爽朗的笑容与节奏的掌控顺利炒热了现场的气氛。`);
    await me.say_and_wait(`飞鹰子……辛苦了`);
    await era.printAndWait(
      `从舞台之上下来的${falcon.name}喘着粗气，浑身的汗水象征着作为偶像的努力。`,
    );
    await era.printAndWait(
      `即使在后台也能听到粉丝们的呼喊声如同浪潮一样经久不息。`,
    );
    await me.say_and_wait(`比想象中还要厉害呢`);
    await era.printAndWait(`作为偶像来说是最高的荣誉。`);
    await falcon.say_and_wait(
      `没有训练员${me.adult_sex_title}的话，飞鹰子也看不到这一切呢。`,
    );
    await falcon.say_and_wait(`与其说全是飞鹰子的功劳，不如说`);
    await me.say_and_wait(`是我们共同努力的结果。`);
    await era.printAndWait(
      `虽然身体微微颤抖，但还是坚持着向${callname}露出灿烂笑容的飞鹰子伸出了手。`,
    );
    await falcon.say_and_wait(
      `今后的道路，也希望能和训练员${me.adult_sex_title}一起走下去。`,
    );
    await era.printAndWait(
      `紧紧握住着粘稠的小手的${me.actual_name}同样带着微笑看向了${falcon.name}。`,
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
    await print_event_name('二月锦标后・后辈', falcon);
    era.drawLine({ content: '胜者舞台后' });
    await falcon.say_and_wait(`谢谢大家的支持！`);
    await era.printAndWait(`精彩的结束了胜者舞台后的飞鹰子回到了休息室。`);
    await me.say_and_wait(`飞鹰子，辛苦了！`);
    await era.printAndWait(`接过了矿泉水和毛巾之后，慢慢平复着澎湃的心情。`);
    await falcon.say_and_wait(`距离飞鹰子成为顶级偶像更近了一步呢！`);
    await me.say_and_wait(`如果是飞鹰子的话，一定可以做到的！`);
    await falcon.say_and_wait(
      `那个，训练员${me.adult_sex_title}，飞鹰子的话……`,
    );
    await era.printAndWait(`咚咚咚`);
    await era.printAndWait(`不合时宜的敲门声响了起来`);
    await me.say_and_wait(`说不定是飞鹰子的粉丝来了。`);
    await era.printAndWait(`轻轻打开休息室的门。`);
    await me.say_and_wait(`抱歉，飞鹰子正在休息……${callname}是？`);
    await era.printAndWait(
      `在发传单时见到的自称是后辈的${falcon.uma_sex_title}。`,
    );
    await era.printAndWait(
      `${falcon.uma_sex_title}「飞鹰子前辈！祝贺${callname}胜利了！」`,
    );
    await falcon.say_and_wait(`欸？`);
    await era.printAndWait(
      `${falcon.uma_sex_title}「飞鹰子前辈不知道吗？对参加泥地的${falcon.uma_sex_title}们来说，飞鹰子可是闪耀着炫目光芒的存在呢！」`,
    );
    await era.printAndWait(
      `${falcon.uma_sex_title}「虽然在草地上没有适应性而转战泥地的大家已经是退无可退了……不过，是飞鹰子前辈让我们看到了前进的希望！」`,
    );
    await era.printAndWait(
      `${falcon.uma_sex_title}「所以，希望飞鹰子前辈能够一直闪耀下去！」`,
    );
    await era.printAndWait(
      `越说越激动的${falcon.uma_sex_title}紧紧握住了${falcon.name}的手。`,
    );
    await falcon.say_and_wait(`那个，飞鹰子的话`);
    await me.say_and_wait(
      `我是${falcon.name}的训练员，现在的${falcon.sex}需要休息，如果有什么想法的话请和我说。`,
    );
    await era.printAndWait(`在这一步不可退让。`);
    await era.printAndWait(
      `${falcon.uma_sex_title}「飞鹰前辈的训练员吗？抱歉！太激动忘了这件事！」`,
    );
    await era.printAndWait(
      `${falcon.uma_sex_title}「抱歉打扰${callname}们独处我先走了！」`,
    );
    await era.printAndWait(
      `露出尴尬表情的${falcon.uma_sex_title}姗笑着离开了休息室。`,
    );
    await me.say_and_wait(`总算离开了，飞鹰子？`);
    await falcon.say_and_wait(
      `明明飞鹰子也是在磕磕绊绊前进着的，总觉得没什么实感呢。`,
    );
    await era.printAndWait(`飞鹰子似乎像是想到了什么一样，露出了迷茫的表情。`);
  } else if (
    extra_flag.race === race_enum.teio_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('帝王赏后・闪耀的偶像', falcon);
    await era.printAndWait(`${falcon.name}漂亮的取得了一着。`);
    await era.printAndWait(`在胜者舞台的场上也展现得。`);
    await era.printAndWait(
      `对于飞鹰子来说，距离成为顶级偶像的道路已经越来越近了。`,
    );
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}，飞鹰子表演得怎么样？`,
    );
    await me.say_and_wait(`飞鹰子与专业偶像也相差不多了。`);
    await me.say_and_wait(`不过比起来的话，还是我家的飞鹰子最可爱了。`);
    await falcon.say_and_wait(`嗯！飞鹰子也觉得自己很可爱！`);
    await chara4_talk.say_and_wait(`飞鹰子很厉害呢！`);
    await era.printAndWait(`不知何时，丸善斯基站在了休息室门口。`);
    await falcon.say_and_wait(`诶？丸善前辈为什么在这里？`);
    await chara4_talk.say_and_wait(
      `嗯！看到飞鹰子努力奔跑的样子，我可是超～感动呢！`,
    );
    await chara4_talk.say_and_wait(
      `带着想要闪闪发光的梦想，在草地上一路疾驰，然后在胜者舞台上展现最美的自己。`,
    );
    await chara4_talk.say_and_wait(`姐姐我也被这种热情点燃了呢！`);
    await falcon.say_and_wait(`没，没有丸善前辈说的这么厉害啦……`);
    await chara4_talk.say_and_wait(
      `嗯——说起来，如果有机会的话，一起练习一下吧？`,
    );
    await falcon.say_and_wait(`那个，飞鹰子`);
    await chara4_talk.say_and_wait(`泥地的话，姐姐我会努力克服这点小缺陷的♪`);
    await chara4_talk.say_and_wait(`那么，到时候再见了♪`);
    await falcon.say_and_wait(
      `……嗯！能和丸善前辈一起的话，说不定飞鹰子也能学到更多的东西！`,
    );
    await era.printAndWait(`就这样，帝王赏完美结束了。`);
  } else if (
    extra_flag.race === race_enum.jbc_cls &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('育马场经典赛后・再次起跑！', falcon);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！唔噢噢噢噢噢噢噢！`);
    await era.printAndWait(
      `冲过终点的一瞬间,全场的观众都为沙地冉冉升起的明星喝彩。`,
    );
    await me.say_and_wait(`飞鹰子比想象中还要闪耀呢。`);
    await falcon.say_and_wait(
      `非常感谢${callname}的支持，接下来也要多多支持飞鹰子哦！`,
    );
    await me.say_and_wait(`嗯——接下来是胜者舞台吧。`);
    await era.printAndWait(
      `${callname}将今年的育马场赛事制作的CD放入录像机之中。`,
    );
    await era.printAndWait(
      `虽然没能到现场亲眼见证${falcon.name}冲线的瞬间,不过通过当事人绘声绘色的描述着当时的情景,也能多少弥补遗憾。`,
    );
    await falcon.say_and_wait(`接下来就是飞鹰子强烈推荐的胜者舞台时间⭐`);
    await era.printAndWait(`录像带中的${falcon.name}独自走向了胜者舞台。`);
    era.drawLine({ content: '胜者舞台结束后' });
    await falcon.say_and_wait(`今年的目标就只剩下东京大赏了。`);
    await era.printAndWait(
      `飞鹰子的表演比想象之中还要精彩，粉丝们排山倒海般的气浪几乎将舞台掀翻。`,
    );
    await era.printAndWait(
      `尽管比起在现场观看缺少了临场感,不过${callname}也很满足了。`,
    );
    await me.say_and_wait(`距离顶级偶像的话现在只剩一步之遥了哦？`);
    await falcon.say_and_wait(`离顶级偶像还差得远呢。`);
    await me.say_and_wait(`虽是这么说。`);
    await era.printAndWait(`${callname}将录像暂停后,重新看向${falcon.name}。`);
    await me.say_and_wait(`飞鹰子比想象中还要坚强呢。`);
    await falcon.say_and_wait(`……飞鹰子没有想象中这么坚强哦?`);
    await me.say_and_wait(`为了今年压轴的东京大赏，现在还是好好休息吧。`);
    await me.say_and_wait(`毕竟飞鹰子。`);
    await era.printAndWait(`一旁的${falcon.name}传出了均匀的呼吸声。`);
    await era.printAndWait(
      `这段时间的准备一直都是${falcon.name}独自完成的缘故，积累下来的疲惫也终于到极限了吧。`,
    );
    await me.say_and_wait(`现在的话，就让${falcon.sex}稍微睡一会吧。`, true);
    await me.say_and_wait(`谢谢${callname}，${falcon.name}。`);
    await era.printAndWait(
      `轻轻将${falcon.name}放在柔软的沙发上，然后将身上的训练员服披在${falcon.sex}身上。`,
    );
    await era.printAndWait(
      `或许是因为摆动的幅度过大，${falcon.name}的耳朵动了动，身体也换了更加舒服的姿势。`,
    );
  } else if (
    extra_flag.race === race_enum.cham_cup &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('冠军杯后・目标——东京大赏', falcon);
    await era.printAndWait(`${falcon.name}轻松获得了冠军杯的胜利。`);
    await era.printAndWait(`在舞台之上的${falcon.name}变得更加闪耀。`);
    await era.printAndWait(`休息室中`);
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}——接下来只剩下东京大赏了。`,
    );
    await me.say_and_wait(`我相信飞鹰子一定可以做到的。`);
    await era.printAndWait(`平静的说出了自己的心情。`);
    await era.printAndWait(`与其说是鼓励，不如是在坦述自己的确信。`);
    await falcon.say_and_wait(`——现在的飞鹰子稍微有些紧张呢。`);
    await era.printAndWait(
      `是啊，面对即将踏出的最后一步，在结果到来之前的这段时间里是最紧张的时刻。`,
    );
    await me.say_and_wait(
      `${
        falcon.name
      }是我见过最坚强的${falcon.uma_sex_title}了，所以我希望${callname}的梦想能够实现。`,
    );
    await era.printAndWait(
      `轻轻抚摸着${falcon.name}的小脑袋，比起一开始的抗拒，现在的${falcon.sex}看上去十分平静。`,
    );
    await falcon.say_and_wait(`现在的心情稍微有些平复了，谢谢。`);
    await me.say_and_wait(`既然平静下来的话，找个地方吃一顿庆祝一下吧？`);
    await falcon.say_and_wait(`有点想去尝尝看烤肉呢，接下来一起去吃吧⭐`);
    await era.printAndWait(
      `在享受了美食之后，赶在宵禁前将${falcon.name}送回了宿舍。`,
    );
    await falcon.say_and_wait(`训练员${me.adult_sex_title}。`);
    await era.printAndWait(
      `似乎打算说着什么的${falcon.name}，稍微犹豫了一下。`,
    );
    await me.say_and_wait(`怎么了？`);
    await falcon.say_and_wait(`什么都没有哦⭐`);
    await era.printAndWait(`${falcon.teen_sex_title}捂着嘴偷笑着跑走了。`);
  } else if (
    extra_flag.race === race_enum.toky_dai &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    //（恋心高于责任）东京大赏结束，前往胜者舞台的间隙期间，${falcon.name}再次认识了自己（我对自己所做的决定毫无后悔，如果重新在做选择的话，我也会选择这条道路）
    //（责任大于恋心）东京大赏结束，前往胜者舞台的间隙期间，${falcon.name}再次认识了自己（我对自己所做的决定毫无后悔，如果重新在做选择的话，我也会选择这条道路）
    await print_event_name(
      ['东京大赏典后・胜者舞台前的决定', falcon.get_colored_name()],
      falcon,
    );
    // 渴望最终得到满足，内心不再孤独，恐惧随着信仰的坚定而消散,坚强蜕变为了觉悟
    falcon.print(`这一刻终于到来了。`);
    falcon.print(
      `三年前的自己所憧憬的聚集了万千粉丝目光的最闪耀舞台，尽管与自己设想的轨道再无交汇的可能。`,
    );
    falcon.print(`最终还是实现了。`);
    falcon.print(
      `面对艰难的目标最终实现的那一刻，一般人应该会激动到语无伦次，或者屏住呼吸直到最后彻底达成之后如释重负的吐出那口气为止。`,
    );
    falcon.print(`但此刻的自己却出乎意料的平静。`);
    falcon.print(
      `为了这一刻调整的面部表情、手的动作、身体姿态、发音，都是最自然的形态。`,
    );
    falcon.print(`尽管内心之中还是存在着一种无法形容的感情。`);
    falcon.print(
      `如果要形容那种感觉的话，就像还是在电视前，一边憧憬着电视上的著名偶像，一边刻意的模仿着偶像舞步姿态时的那个小${falcon.uma_sex_title}一样。`,
    );
    falcon.print(`——直到刚才还在脑海之中徘徊的噪音，不知不觉就消失了。`);
    // 恋心大于责任
    falcon.print(
      `我对自己所做的决定毫无后悔，如果重新在做选择的话，我也会选择这条道路`,
    );
    falcon.print(`如果有什么真正要说的话，`);
    falcon.print(`与训练员${me.adult_sex_title}一起的日子，我很满足。`);
    falcon.print(`谢谢${callname}，训练员${me.adult_sex_title}，`);
    //责任大于恋心
    falcon.print(
      `为了逃避责任而寻求着自我麻痹，只会被内心的自我步步诘问，最后在放大了1000倍的敏感状态下，陷入烈火与寒冷的双重痛苦之中`,
    );
    falcon.print(
      `在此增幅之下，哪怕是微不足道的羽毛般的压力，也会彻底摧毁一个人。`,
    );
    falcon.print(
      `直面自己被赋予的责任，固然是一种压力，而从自己所处的责任面前逃避，只会陷入另一种痛苦之中。`,
    );
    falcon.print(`这就是我的感悟。`);
    falcon.print(`所以。`);
    await falcon.say_and_wait(
      `为了粉丝们的大家，飞鹰子要毫无遗憾的献上最后一曲！`,
    );
    era.drawLine();
    await era.printAndWait(
      `从无人问津的路边偶像，到泥地的顶级偶像，以三年的跨度来说，也过于迅速了。`,
    );
    await era.printAndWait(
      `就像是与${falcon.sex}第一次见面时，从窗户上一跃而下的身影。`,
    );
    await era.printAndWait(`那一刻的${falcon.sex}比起大地，更接近天空。`);
    await era.printAndWait(
      `或许这才是自己下定决心与${falcon.sex}签约的原因吧。`,
    );
    await era.printAndWait(
      `被闪光灯汇聚的焦点，便是名为${falcon.name}的顶级偶像。`,
    );
  }
};
