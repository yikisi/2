const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const spe = get_chara_talk(1);
const me = get_chara_talk(0);
const mom = get_chara_talk(4);
mom.name = '特别周妈妈';

module.exports = async (hook, extra_flag) => {
  let edu_weeks = era.get('cflag:1:育成回合计时');
  if (edu_weeks === 3 * 48 + 3 && era.get('love:1') >= 75) {
    await print_event_name('两人一起的北海道之旅');
    await spe.say_and_wait('训练员先生，我们找个时间去北海道吧！');
    await era.printAndWait(
      '在闪耀之星系列赛上取得了亮眼的表现后的某一天，特别周这么和你说道。',
    );
    await me.say_and_wait('我记得小特的老家就在北海道吧？');
    await spe.say_and_wait('是的！实际上，这次是想带训练员去我的家里看一下！');
    await era.printAndWait('……就这样，你和特别周两人去往北海道的旅行开始了。');
    await era.printAndWait('\n出发当日。');
    await era.printAndWait(
      '特别周穿上了她最喜欢穿的衣服，虽然只是普通的蓝色衬衫加粉白色连衣裙，但对于天生美人坯子的她来说，简单的搭配反倒能凸显出她的丽质。',
    );
    await era.printAndWait(
      '脸上掩盖不住的黑眼圈，暴露了可能她没有事前邀请我的时候那么轻松自在。',
    );
    await era.printAndWait(
      '不过论紧张程度坑你也不逊于她，毕竟直到出发前一天凌晨，你都还在搜索引擎中查找“担当马娘第一次邀请自己见家长要怎么做”。',
    );
    await era.printAndWait(
      '\n你从纷乱的思绪中回过神来，发现特别周已经在车站的电子显示屏前站了许久。',
    );
    await era.printAndWait('如果是为了看换乘车次的话这时间也未免太长了。');
    await era.printAndWait('你似乎意识到了什么。');
    await era.printButton('小特，难道说……', 1);
    await era.printButton('……坐错电车了吗？', 2);
    await era.input();
    await spe.say_and_wait('是的……');
    await era.printAndWait('她的声音小的像蚊子叫。');
    await spe.say_and_wait(
      '对不起……明明想让训练员看到我的成长的，结果还是一上来就搞错了……',
    );
    await spe.say_and_wait('怎么办怎么办……这样下去就赶不上飞机了……');
    await era.printAndWait(
      '正在你们为此焦急的时候，特别周的手机铃声响了起来。',
    );
    await spe.say_and_wait('喂喂……青酱？');
    await spe.say_and_wait('小草，小鹰，还有光环！');
    await spe.say_and_wait('是的，我确实坐错了电车……可是大家是怎么知道的？');
    await spe.say_and_wait('昨天聊天的时候就知道我会坐错了！？');
    await era.printAndWait('你仿佛看到特别周的脑袋上冒出了蒸汽。');
    await spe.say_and_wait(
      '船桥站出站再从京成船桥进站，然后坐京成本线一直到成田机场……好的多谢你小草，呜呜呜……',
    );
    await era.printAndWait(
      '万幸的是，在伙伴们的协助下，你们还是有惊无险地赶上了预定的航班。',
    );
    await era.printAndWait(
      '\n' +
        '飞机在北海道降落的时候，特别周身上紧张和焦虑的情绪已经一扫而空。回到家乡的她，正在规划接下来的行程。',
    );
    await spe.say_and_wait('先回家，见一下妈妈们……');
    await spe.say_and_wait('吃好久没吃过的家乡料理，要吃到撑为止！');
    await spe.say_and_wait('晚上可以住在家里，训练员也一起……');
    await era.printAndWait(
      '特别周紧紧握住你的手，碎碎念着她想带你一起做的每一件事。',
    );
    await era.printAndWait(
      '回家的巴士摇摇晃晃，你的心情也变得紧张和期待共存。',
    );
    await era.printAndWait(
      '\n' +
        '从巴士上下来，出现在我们面前的是一座农场。农场门口，一位中年女子正微笑着看向我们，应该是特别周的母亲吧。',
    );
    await spe.say_and_wait('训练员，这就是我家哦。妈妈，我回来了！');
    await era.printAndWait('特别周开心地飞奔过去。');
    await spe.say_and_wait('妈妈，跟你介绍一下，这位是我的训练员哦！');
    await era.printAndWait(
      '我正想着如何做自我介绍的时候，特别周的妈妈开口了。',
    );
    await mom.say_and_wait(
      '初次见面，小特的训练员……同时也是小特的男朋友，对吧？',
    );
    await era.printButton('？！', 1);
    await era.input();
    await spe.say_and_wait('诶？！？！？！');
    await era.printAndWait('不仅是我，特别周也一脸不可置信。');
    await spe.say_and_wait('确实……是的……但是妈妈是怎么看出来的？');
    await era.printAndWait(
      '我感觉到自己腿上有什么东西紧紧缠了上来，应该是特别周紧张到无处安放的尾巴。',
    );
    await mom.say_and_wait(
      '你寄回家的信里，可是一直在聊训练员的事情，能聊整整两页纸呢。',
    );
    await spe.say_and_wait('妈妈……');
    await mom.say_and_wait(
      '你是担心我不同意吗？不会的，既然你跟他在一起的时候那么开心，那也许就说明，他就是最适合你的那个人哦？',
    );
    await mom.say_and_wait(
      '你也是个大孩子了，放心大胆地追求你自己的心中所想吧。',
    );
    await spe.say_and_wait('嗯！我知道了，妈妈！');
    await era.printAndWait('特别周虽然轻轻抽泣，但是脸上却露出阳光般的微笑。');
    await era.printAndWait('特别周的妈妈转向我。');
    await mom.say_and_wait(
      '小特这孩子平时有点呆头呆脑的，有劳你这几年照顾了。',
    );
    await spe.say_and_wait('喂！');
    await era.printAndWait('抽泣变成了娇嗔。');
    await era.printButton('承蒙您的厚爱，这是我的职责所在。', 1);
    await era.printButton('我也很庆幸能够遇上您的女儿这样优秀的马娘。', 2);
    await era.input();
    await era.printAndWait('特别周妈妈笑着转过了身，带着我们往房间走去。');
    await mom.say_and_wait(
      '不用这么客气，你们先回房间简单休息会，稍后开饭的时候我会喊你们的。',
    );
    await era.printAndWait(
      '\n' +
        '当晚的晚饭主菜颇具北海道风格：散发浓郁香味的汤咖喱，热气腾腾的火锅，以及烤胡萝卜。',
    );
    await era.printAndWait(
      '特别周一边大吃特吃，一边跟妈妈讲述学园里发生的故事。',
    );
    await era.printAndWait('\n' + '第二天一早，你被特别周从睡梦中叫醒了。');
    await me.say_and_wait('……小特？');
    await spe.say_and_wait('训练员，可以跟我一起出门吗？');
    await era.printAndWait('她的表情看起来有一些严肃。');
    await era.printAndWait(
      '小特也能起这么早吗？即便这么想，你还是穿好衣服和她出了门。',
    );
    await era.printAndWait(
      '\n' +
        '北海道的早晨有些微凉，走在你身边的特别周一言不发，不知道在想什么，似乎昨天那个滔滔不绝的她一晚上便消失了。',
    );
    await era.printAndWait(
      '你们沉默地向着村庄的边界走去，随着脑袋逐渐清醒，你大致意识到这次的目的地是哪里了。',
    );
    await era.printAndWait(
      '特别周将你带到了不远处的墓地里，在一排排墓碑之间七拐八拐，最终在一块有些年头的墓碑前停下了。',
    );
    await spe.say_and_wait('……这里是我的另一位妈妈，把我生下来的妈妈。');
    await spe.say_and_wait(
      '妈妈，好久不见。我已经是优秀的马娘了，妈妈看到了吗？',
    );
    await era.printAndWait('你静静地站在一旁看着特别周向她的生母倾述心事。');
    await era.printAndWait(
      '她的声音从平静到颤抖，最终无法控制地哭泣起来。你走过去，轻轻握住她的一只手。',
    );
    await era.printAndWait(
      '\n' + '不知哭了多久，重新控制好情绪的特别周站了起来。',
    );
    await spe.say_and_wait('妈妈，我们先走了……下次我和训练员再来看你。');
    await era.printAndWait(
      '\n' + '在回去的路上，特别周主动给你讲起了有关生母的故事。',
    );
    await spe.say_and_wait(
      '我其实已经记不得妈妈长什么样子了……因为我刚出生没多久，她就去世了。',
    );
    await spe.say_and_wait(
      '还好她还留下了照片，日记本，以及许许多多的故事，她应该也是个善良又热心的人。',
    );
    await spe.say_and_wait('……');
    await spe.say_and_wait(
      '到我记事的时候，现在的妈妈就一直精心照顾我，把全部的爱都给到了我。',
    );
    await spe.say_and_wait('来到特雷森之后，又遇到了一直关心我的训练员。');
    await spe.say_and_wait(
      '有时我会想，虽然我遇到了不少波折，但也收到了更多的爱，我感觉很幸运哦。',
    );
    await era.printButton('我会一直陪在你身边的。', 1);
    await spe.say_and_wait('那就约定好了，训练员！');
    await era.printAndWait('特别周是笑着说出这句话的。');
    await era.printAndWait('\n' + '在北海道的悠闲日子很快就结束了。');
    await era.printAndWait(
      '你和特别周临走之前，特别周的妈妈把特别周爱吃的东西准备了整整几大包，直到实在装不下了才罢休。',
    );
    await spe.say_and_wait('妈妈，这些东西已经够了，真的带不下了……');
    await mom.say_and_wait('那就先这些，记得没事多回家来哦。');
    await spe.say_and_wait('嗯，我会的！');
    await mom.say_and_wait('是两个人一起哦。');
    await era.printButton('没问题', 1);
    await mom.say_and_wait('特别周妈妈：“那就祝你们一路顺风，再见了！');
  } else if (edu_weeks === 47 + 29) {
    await print_event_name('夏季合宿开始');
    //todo
  } else if (edu_weeks === 95 + 29) {
    await print_event_name('夏季合宿开始（第二次）');
    //todo
  } else if (edu_weeks === 47 + 48 || edu_weeks === 95 + 48) {
    await print_event_name('圣诞节');
    //todo
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('情人节');
    //todo
  }
};
