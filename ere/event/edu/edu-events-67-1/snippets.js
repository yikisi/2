const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} me
   * @param {CharaTalk} kita
   * @param {boolean} [is_race_end]
   */
  async takz_kin_common(daiya, me, kita, is_race_end) {
    await kita.say_and_wait('…………唔！');
    await daiya.say_and_wait('小北！！');
    await era.printAndWait(
      '北部玄驹今天的表现少了平时的利落感。没能正常发挥实力的原因应该是──',
    );
    await daiya.say_and_wait('呼、呼…………小北。');
    await kita.say_and_wait('观、观众们说的话……我真的没办法再继续听下去了……');
    await kita.say_and_wait('虽然是我自己表现得不好，这我都知道……');
    await kita.say_and_wait('……唔……可是…………');
    await kita.say_and_wait('是我让他们失望了────！！');
    await kita.say_and_wait('呜哇啊啊啊啊啊啊啊啊啊啊啊！');
    await daiya.say_and_wait('……小北……');
    await daiya.say_and_wait(
      '……小北，你今天根本不是在绝佳的状态下比赛的吧……？',
    );
    await kita.say_and_wait('嗯……呜……今天不知道为什么……很怪……觉得身体很重……');
    await kita.say_and_wait(
      '明知道应该要加快步调了，可是……呜，脚却……越来越出不了力气……！',
    );
    await kita.say_and_wait('……我明明已经很努力了……');
    await kita.say_and_wait(
      '……『宝冢纪念』……呜呜……得到粉丝票选第一名……我真的好开心……！',
    );
    await kita.say_and_wait(
      '想说一定不能辜负大家的期望……所以我真的真的非常努力了！！',
    );
    await kita.say_and_wait('为什么会是这样！？');
    await daiya.say_and_wait(
      '我想……会不会是因为身体其实还很疲劳？我之前也因为『天皇赏（春）』留下了疲劳。',
    );
    await era.printAndWait(
      `经过「天皇赏（春）』的激战，北部玄驹的身体也累积了疲劳。${kita.sex}本人却没有发现。`,
    );
    await era.printAndWait(
      `${kita.sex}因为不想辜负大家的期望，所以没有感觉到疲劳，但疲劳却也没有消失，反而是在${kita.sex}身体里慢慢累积。`,
    );
    await daiya.say_and_wait('你就是不小心努力过头了……这很像小北的作风。');
    await kita.say_and_wait('……我其实很疲劳……？怎么会……可是……');
    await kita.say_and_wait(
      '我居然会没发现自己身体的疲劳……居然因为这样辜负了大家的期望……',
    );
    await kita.say_and_wait('好不甘心……我真的好不甘心……！');
    await daiya.say_and_wait(
      '──没事的。小北不小心努力过头的这件事情，粉丝一定都能明白的。',
    );
    await daiya.say_and_wait(
      '毕竟他们都是一直守护着努力的小北，从小北身上获得鼓励的人呀。',
    );
    await kita.say_and_wait(
      '……可是，大家特地把票投给我，我却这样搞砸了……大家一定对我很失望的……',
    );
    await daiya.say_and_wait('……因为辜负了期望，所以就不会再支持你了吗……？');
    await kita.say_and_wait(
      '嗯……因为，原本不受瞩目的我会开始受到大家的注意，也是因为一直跑赢比赛的关系……',
    );
    await kita.say_and_wait('因为一直跑赢比赛，支持我的人才变多的！');
    await kita.say_and_wait(
      `要是没有跑赢比赛的话，我就只是个不被注意的普通赛${daiya.uma_sex_title}……`,
    );
    await kita.say_and_wait(
      '我也不像小钻有厉害的尾段加速能力，我没有那样的武器，就是一个只知道努力、很平凡的……',
    );
    await daiya.say_and_wait('这就是小北让人觉得了不起的地方呀。');
    await kita.say_and_wait('咦……？');
    await daiya.say_and_wait(
      '能够坚定不移地努力这点。我想大家不就是因为看到你这点，所以才想会要支持你的吧。',
    );
    await daiya.say_and_wait(
      '我觉得大家是因为看到小北这一路以来都非常努力的模样，才会对小北产生深厚感情的。',
    );
    await era.printAndWait(
      `刚观战完的男性观众A「就是因为北部玄驹每次都非常卖力地奔跑，才让我忍不住想为${kita.sex}加油的。真的就是非常坚定不移的模样。」`,
    );
    await era.printAndWait(
      `刚观战完的男性观众B「我懂我懂！因为${kita.sex}本身也没什么特别亮眼的地方，就是很普通、很接近我们的感觉。」`,
    );
    await era.printAndWait(
      `刚观战完的男性观众B「所以反而更希望${kita.sex}能够跑赢！就像是看到自己获得成就的感觉！」`,
    );
    await daiya.say_and_wait(
      '观众们说如果小北跑赢的话，就如同自己的事情一般开心喔。',
    );
    await daiya.say_and_wait(
      '『因为北部很努力，所以我也能继续努力。』……小北跟我不一样，是像这样得到大家支持的。',
    );
    await daiya.say_and_wait('有时候，我也会有点羡慕这样的小北呢。');
    await kita.say_and_wait('啊……');
    await era.printAndWait(
      '观众A「也就是『春季资深三冠』了吧！一定要拿下啊，北部！！」',
    );
    await era.printAndWait('观众A「北部──！一定要为去年雪耻啊！！」');
    await daiya.say_and_wait(
      '让观众感同身受地支持你，这真的是非常了不起的事情。',
    );
    await daiya.say_and_wait(
      '粉丝们不只是喜欢你实力坚强，而是真正地爱着你的本质。',
    );
    await daiya.say_and_wait('所以，没事的。');
    await kita.say_and_wait('小钻……');
    await daiya.say_and_wait(
      '虽然今天可能真的让大家失望了，但粉丝们一定还对小北充满『期待』的。',
    );
    await kita.say_and_wait('……期待……');
    await daiya.say_and_wait('我也很期待喔。');
    await kita.say_and_wait('…………');
    await daiya.say_and_wait('……因为我相信小北能做到的。');
    era.drawLine();
    await era.printAndWait(
      `从${
        is_race_end ? '休息室' : '地下道'
      }出来后，里见光钻就像在思索着什么般。`,
    );
    await daiya.say_and_wait('……训练员，你想要看见什么样的我呢？');
    era.printButton('「嗯……？什么意思？」', 1);
    await era.input();
    await era.printAndWait(`${me.name} 因为没听懂意思而反问${daiya.sex}。`);
    await daiya.say_and_wait(
      '我刚刚一直在想，如果大家是因为能从小北身上看到自己而支持她，那支持我的人又是因为什么呢？',
    );
    await daiya.say_and_wait(
      `身为『知名赛${daiya.uma_sex_title}』的贡献……小北${
        kita.sex
      }已经做到带给大家笑容的这个贡献了。`,
    );
    await daiya.say_and_wait('而我却连该做些什么都还没有想到……');
    await daiya.say_and_wait(
      `为了赛${daiya.uma_sex_title}界的发展，我所该做的事情……`,
    );
    await daiya.say_and_wait(
      `身为一个赛${daiya.uma_sex_title}，我的表现能带给大家的究竟是什么……`,
    );
    await era.printAndWait(
      `大家在里见光钻身上所追求的事情。${daiya.sex}的表现能带给粉丝什么梦想。`,
    );
    await era.printAndWait(
      `每一位「知名赛${daiya.uma_sex_title}」都各自能带给大家不一样的梦想。`,
    );
    era.printButton('「我从你身上能感受到『可能性』」', 1);
    await era.input();
    await daiya.say_and_wait('可能性……');
    await era.printAndWait(
      `深藏着坚定不可动摇意志的${daiya.sex}，给人一种甚至能颠覆不可能的能量。`,
    );
    await era.printAndWait(
      `成功克服了里见家长年所困魔咒的${daiya.sex}，给人一种，或许${daiya.sex}有可能做到任何事的感觉。`,
    );
    await daiya.say_and_wait('原来如此……谢谢你。');
    await daiya.say_and_wait('……我会再自己好好想一想的……');
    await era.printAndWait(
      `里见光钻又再次陷入沉思。为了不打扰${
        daiya.sex
      }的思绪，${me.get_couple_title()} 就这样静静地走向车站。`,
    );
  },
  async japa_cup_common(daiya, me, kita, teio) {
    await teio.say_and_wait('做好觉悟吧！！');
    await daiya.say_and_wait('──唔！是！！');
    await kita.say_and_wait('好！！我一定会用心迎战的！');
    await daiya.say_and_wait(
      `无时无刻不忘挑战的心……这就是帝王${
        teio.sex
      }身为『知名赛${daiya.uma_sex_title}』的做法……`,
    );
    await daiya.say_and_wait(
      '麦昆是接受挑战的身份，帝王则是挑战者的身份。',
      true,
    );
    await daiya.say_and_wait('那我……', true);
    await daiya.say_and_wait(
      '里见家首次的G1胜利……挑战魔咒、破除魔咒、赢得胜利。',
      true,
    );
    await daiya.say_and_wait(
      '追上小北，在梦寐以求的闪耀系列赛的舞台进行比赛。',
      true,
    );
    await daiya.say_and_wait('最适合我的做法是……！', true);
    await daiya.say_and_wait('……训练员。');
    await era.printAndWait(
      '一阵沉默过后，开口的里见光钻露出了下定决心的表情。',
    );
    await daiya.say_and_wait('我决定今后也要不停地挑战下去。');
    era.printButton('「不停地挑战……？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是的。一直以来我都在挑战各种事情，像是阻挠里见家的魔咒，还有挑战小北。',
    );
    await daiya.say_and_wait(
      `所以，我想我身为一个『知名赛${daiya.uma_sex_title}』，继续挑战各种事物，是不是就是最适合我的做法呢。`,
    );
    await daiya.say_and_wait(
      '就像我挑战麦昆和帝王，在里见家的历史上开启一个新的篇章一样。',
    );
    await daiya.say_and_wait(
      `我想要挑战各种事物，为里见家和赛${daiya.uma_sex_title}界开拓新的历史。`,
    );
    await daiya.say_and_wait(
      '当我这么一想的同时，我才再次发现到，我想要挑战国外的比赛这件事。',
    );
    await daiya.say_and_wait(
      '不单只是为了让大家感受到可能性，而是为了实现我自己的心愿。',
    );
    await daiya.say_and_wait(
      `想要在历史悠久的国外竞赛中取得胜利，把里见的名字刻划在赛${daiya.uma_sex_title}界的历史中。`,
    );
    await daiya.say_and_wait(
      `然后，为里见家和日本赛${daiya.uma_sex_title}开拓新的历史──`,
    );
    await daiya.say_and_wait(
      `我想，这就是我能为赛${daiya.uma_sex_title}界所作的贡献吧。`,
    );
    era.printButton('「你找到自己的答案了呢」', 1);
    await era.input();
    await daiya.say_and_wait('是的！');
    await daiya.say_and_wait(
      `身为『知名赛${daiya.uma_sex_title}』的里见光钻所该有的模样……我已经确定自己的目标了。`,
    );
    await daiya.say_and_wait(
      `我要在『有马纪念』获胜，正式加入『知名赛${daiya.uma_sex_title}』的行列！`,
    );
  },
};
