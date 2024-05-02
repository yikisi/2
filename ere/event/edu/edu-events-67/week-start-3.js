const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[-1] = async (daiya, me, flags) => {
    await print_event_name('成就我的存在', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait(
      `出道战结束后，${me.name} 和里见光钻针对下一个目标进行讨论。`,
    );
    await era.printAndWait(
      `“要成为能赢得G1的知名赛${daiya.get_uma_sex_title()}”，考量到${
        daiya.sex
      }的这个目标，选择新马级的G1竞赛应该是比较适合的──`,
    );
    era.printButton('「关于下一场比赛你有什么想法吗？」', 1);
    await era.input();
    await daiya.say_and_wait('我想要挑战经典三冠。');
    era.printButton('「不选择新马级的G1竞赛吗？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '在G1取胜当然也是我的目标，但那不过是一个过程而已。',
    );
    await daiya.say_and_wait(
      `里见家所期望的“知名赛${daiya.get_uma_sex_title()}”，那是足以支撑赛${daiya.get_uma_sex_title()}界发展的赛${daiya.get_uma_sex_title()}。`,
    );
    await daiya.say_and_wait(
      `你也知道，里见家为了在赛${daiya.get_uma_sex_title()}界有所贡献，长年专心致力于协助营运和各种慈善活动。`,
    );
    await daiya.say_and_wait(
      `培育大量“能够赢得G1竞赛的知名赛${daiya.get_uma_sex_title()}”，这点也是能够支撑赛${daiya.get_uma_sex_title()}界的贡献之一。`,
    );
    await daiya.say_and_wait(
      `我的目标是成为一个从内部支持赛${daiya.get_uma_sex_title()}界，以及赛${daiya.get_uma_sex_title()}竞赛文化的存在。`,
    );
    await daiya.say_and_wait(
      `这样的话，我想我就必须走上最正统的道路。如果我的参赛能让经典三冠更加热闹的话，那也算是对赛${daiya.get_uma_sex_title()}界的一种贡献了吧。`,
    );
    await daiya.say_and_wait([
      '如果可以的话，我希望能以万全的状态挑战 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '。',
    ]);
    era.printButton('「下一个目标是“皋月赏”？」', 1);
    await era.input();
    await era.printAndWait(
      '如果要调整到万全的状态，的确就不该以新马级的竞赛为优先考量，把目标定为“皋月赏”更为合适。',
    );
    await daiya.say_and_wait('是的。你觉得怎么样呢？');
    era.printButton('「我知道了」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 没有反对的理由。若能在经典三冠取得胜利，那在G1取胜也是必然的。是说──`,
    );
    await daiya.say_and_wait('……怎么了吗？怎么这样盯着我的脸看。');
    era.printButton('「我只是觉得，你总是这么坚定」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是说对目标吗？因为那就是我来到这世上的理由。这点是不用怀疑的。',
    );
    await daiya.say_and_wait(
      `……这么说起来，我好像还没跟你说过，我和父母为什么会这么执着于知名赛${daiya.get_uma_sex_title()}吧。`,
    );
    await daiya.say_and_wait(
      `就像我刚才所说的，里见家虽然一直都对赛${daiya.get_uma_sex_title()}界的发展抱有热情，至今却从未有培育出知名赛${daiya.get_uma_sex_title()}的经验。`,
    );
    await daiya.say_and_wait(
      `里见家过去的赛${daiya.get_uma_sex_title()}当中，没有一位是曾经在G1竞赛中赢得胜利过的。`,
    );
    await daiya.say_and_wait('久而久之，就被称作是“里见家的魔咒”了。');
    await daiya.say_and_wait(
      `再加上，曾经很长一段时间都只生男生，家族一直没有新的赛${daiya.get_uma_sex_title()}诞生……`,
    );
    await daiya.say_and_wait(
      `甚至让里见家一度认为，生不出赛${daiya.get_uma_sex_title()}也都是因为魔咒的关系。`,
    );
    await daiya.say_and_wait(
      `而我就是破除了这个魔咒所诞生的赛${daiya.get_uma_sex_title()}──`,
    );
    await daiya.say_and_wait('为了实现里见家梦想而生的，就是我。');
    await daiya.say_and_wait(
      '加上我的父母是里见集团的核心人物，从小我就受到非常多的支持跟协助。',
    );
    await daiya.say_and_wait('因为里见家所有人的期望，才有现在的我。');
    await daiya.say_and_wait('──这也等于是我的精神支柱！');
    await daiya.say_and_wait(
      '所以我想要回应里见家的期望。这就是我的梦想！绝对不会有动摇的时候！',
    );
    await daiya.say_and_wait(
      `里见家的赛${daiya.get_uma_sex_title()}赢不了G1的魔咒，如果是我的话就能将之破除──`,
    );
    await daiya.say_and_wait('我要赢得经典三冠，来证明这件事情！');
    era.printButton('「知道了，那我们就以经典三冠为目标吧」', 1);
    await era.input();
    await daiya.say_and_wait('谢谢你！那我们的第一战就是“皋月赏”了呢。');
    await era.printAndWait([
      '决定要挑战经典三冠的话，就必须做好准备面对比 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 距离更长的 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      `现在开始的话，就能有足够的时间仔细准备。${me.get_couple_title()} 就一边思考着更以后的目标，一边为明年的 `,
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 做好准备吧。',
    ]);
    era.drawLine();
    await daiya.say_and_wait('──做完热身运动了。第一个要做的训练项目是……');
    await kita.say_and_wait('啊────！！小钻小钻！');
    await daiya.say_and_wait('哇哇！小北怎么了吗？怎么这么慌慌张张的……');
    await kita.say_and_wait('跟你说喔，我看了喔！我看了小钻的出道战喔！！');
    await kita.say_and_wait(
      '虽然没办法到现场去看，但我看了比赛影片喔！我真的是看得超～～～级激动的！',
    );
    await kita.say_and_wait(
      '我是跟大家一起用宿舍的大电视看的！我还忍不住对着电视喊“小钻加油──！”了呢。',
    );
    await kita.say_and_wait('因为喊得太大声，还被大家骂了一顿。');
    await kita.say_and_wait('但小钻的那场比赛真的精彩到我手汗直流喔！');
    await daiya.say_and_wait('呵呵，听起来就像小北会做的事。谢谢你帮我加油！');
    await kita.say_and_wait(
      '有一种……跟自己跑出道战时不一样的喜悦。看得我内心雀跃不已呢！',
    );
    await kita.say_and_wait(
      '小钻在比赛时的表情，跟在学园里跑模拟赛和并跑练习的时候完全不同……',
    );
    await kita.say_and_wait(
      '当时我才有一种，对啊，小钻真的来到跟我一样的地方了……的感觉。',
    );
    await kita.say_and_wait('……小钻，恭喜你顺利出道了！');
    await daiya.say_and_wait('嗯，让你久等了呢……小北！');
    await kita.say_and_wait(
      '嘿嘿，一想到小钻要开始追上我的脚步，我也要更努力才行了！',
    );
    await kita.say_and_wait([
      '虽然我错过了 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '，但 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 我一定会赢的！！',
    ]);
    await kita.say_and_wait('身为小钻的姐姐，我一定要先在G1拿下胜利才行！');
    await daiya.say_and_wait('我的下一个目标也是经典三冠喔。');
    await kita.say_and_wait('咦！？是喔！？');
    await daiya.say_and_wait([
      '嗯，所以小北在 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 的表现……请让我好好参考一番吧。',
    ]);
    await kita.say_and_wait(
      '唔唔～！那我就更不能输了！绝对不能变成不好的范本！',
    );
    await kita.say_and_wait('那我要先回去训练啰！拜拜啰，小钻！');
    await daiya.say_and_wait('我也会努力跑好自己的比赛！你再多等我一下下吧！');
    await kita.say_and_wait('收到──！那我们都要加油喔！');
    await era.printAndWait(
      '北部玄驹像一阵风般快速地离开。是一个对谈中就能带给别人活力的神奇女孩。',
    );
    era.printButton('「我记得……你们曾经约好要一起跑步的吧」', 1);
    await era.input();
    await daiya.say_and_wait(
      '是的，小时候就约好的。我们约好了要一直一起跑步。',
    );
    await daiya.say_and_wait(
      '小北是我遇过的同年龄的人当中，第一个比我“强大”的人。',
    );
    await daiya.say_and_wait(
      '我们后来就变成了好朋友……小北她带着没有接触过外面世界的我去了好多好多的地方。',
    );
    await daiya.say_and_wait(
      '我总是追着跑在我前面的小北一直跑，一直、一直追着她的脚步……',
    );
    await daiya.say_and_wait('想要追上她、想要超越她，从小就一直这么想。');
    await daiya.say_and_wait(
      '小北不仅是我的好朋友，也是我一直想要战胜的目标。',
    );
    await daiya.say_and_wait(
      '而且，小北她真的很了不起喔。她具备了我所没有的韧性……该说是超强意志力？',
    );
    era.printButton('「我想我大概能明白你的意思……！」', 1);
    await era.input();
    await daiya.say_and_wait([
      '呵呵呵，是吧？虽然 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ' 和 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ` ${kita.sex}都很可惜地跑输了……`,
    ]);
    await daiya.say_and_wait(
      '但小北是绝对不会放弃的个性。她接下来的比赛才是关键呢！',
    );
    await daiya.say_and_wait(
      '所以我也要加紧脚步才行。一定要在“皋月赏”赢得胜利！',
    );
    await era.printAndWait(
      `想要战胜的目标──北部玄驹的存在促使里见光钻更加进步──听完这些话后，${me.name} 更加深深相信是这样。`,
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };
};
