const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status-desc.json');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');

/** @param {Record<string,function(CharaTalk,string,string,{wait:boolean},function):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (flash, your_name, callname, flags) => {
    await print_event_name('新年的抱负', flash);
    await flash.say_and_wait(
      `『Ich wünsche dir ein frohes neues Jahr!』祝您新年快乐，${callname}。`,
    );
    era.printButton('「新年快乐」', 1);
    await era.input();
    await era.printAndWait(
      `新年的第一天，训练室内，${your_name} 和荣进闪耀互相道贺了祝福。`,
    );
    await flash.say_and_wait('还请您收下这个。');
    era.printButton('「？」', 1);
    await era.input();
    await era.printAndWait(
      `随后，${your_name} 看见${flash.sex}从身后拿出一盒包装精致的礼盒。`,
    );
    era.printButton('「这个是……」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 接过荣进闪耀递来的礼物，在拆开之后，里面的内容物却让 ${your_name} 微微一愣。`,
    );
    era.printButton('「……带着眼球的粉色圆球型蛋糕？」', 1);
    await era.input();
    await flash.say_and_wait('呵呵呵～');
    await era.printAndWait(`荣进闪耀被 ${your_name} 的描述逗地轻笑了几声。`);
    await flash.say_and_wait(
      '虽然客观来讲您描述的很准确，但这可不是什么『带着眼球的粉色圆球型蛋糕』哦。',
    );
    await era.printAndWait(
      `紧接着，${flash.sex}竖起一根手指，开始为 ${your_name} 介绍起了这份礼物的具体含义。`,
    );
    await flash.say_and_wait('『Glücksbringer』，寓意为幸运的猪。');
    await flash.say_and_wait(
      '因为在德国，我们认为猪能够带来幸运和财富。所以新年到来之际，会将以猪为原型的礼物赠送给亲朋好友，用作祝福。',
    );
    era.printButton('「原来如此，那还真是很贵重的礼物啊。」', 1);
    era.printButton(`「原来如此，所以这是猪啊。」`, 2);
    const temp = await era.input();
    if (temp === 1) {
      await era.printAndWait(
        `${your_name} 看向礼盒，虽然即便在听完荣进闪耀浅显易懂的解释之后，还是很难将其中的粉色状球体和 ${your_name} 印象中的那个猪联系在一起。`,
      );
      await era.printAndWait('不过无论如何，祝贺的心意都是无价的。');
      await era.printAndWait(
        `因此 ${your_name} 无比珍惜地将这份礼物收藏起来。`,
      );
      await flash.say_and_wait('呵呵，说起来……');
      await era.printAndWait(
        '也就在这个时候，荣进闪耀突然不好意思地笑了一下。',
      );
      await flash.say_and_wait(
        `其实一开始是准备按照写实风格来设计模型的。但是飞鹰同学说这样做出来的成品是不是会有些吓人，因此最终在${flash.sex}的建议下就准备采取萌化的形状。`,
      );
      await flash.say_and_wait(
        '但是很遗憾的是，在艺术方面，除了临摹之外，我对于其他的技法都不具备经验……这自然也包括变形在内。',
      );
      await flash.say_and_wait(
        '因此哪怕过程中我一直在尽力去实现这一点，但果然最终所呈现出来的效果还是有些不佳呢。',
      );
      era.printButton('「重要的不是外表，而是内在。」', 1);
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `听到 ${your_name} 的话，荣进闪耀若有所思地点了点头。`,
      );
      await flash.say_and_wait(
        '……您说的对，所谓礼物，更看重的是其中蕴涵的『礼』，其次才是『物』本身。',
      );
    } else {
      await era.printAndWait(
        `虽然荣进闪耀的解释简单易懂，但 ${your_name} 看着礼盒里的粉色状球体，果然还是很难将它和 ${your_name} 印象中的那个猪联系在一起。`,
      );
      await flash.say_and_wait('唔。');
      await era.printAndWait(
        `听到 ${your_name} 这么说，荣进闪耀的脸上露出有些不好意思的表情。`,
      );
      await flash.say_and_wait(
        `其实一开始是准备按照写实风格来设计模型的。但是飞鹰同学说这样做出来的成品是不是会有些吓人，因此最终在${flash.sex}的建议下就准备采取萌化的形状。`,
      );
      await flash.say_and_wait(
        '但是很遗憾的是，在艺术方面，除了临摹之外，我对于其他的技法都不具备经验……这自然也包括变形在内。',
      );
      await flash.say_and_wait(
        '因此哪怕过程中我一直在尽力去实现这一点。但是现在看来，最终所呈现出来的效果果然还是不佳呢……',
      );
      era.printButton('「……话虽如此，但是很好吃哦！」', 1);
      await era.input();
      await era.printAndWait(
        `见荣进闪耀的脸色有些低落，${your_name} 连忙拿起礼盒中附带的餐具，将圆球挖出一大个缺口。`,
      );
      await flash.say_and_wait('！');
      await flash.say_and_wait(`${callname}……呵呵～～`);
      await era.printAndWait(
        `见 ${your_name} 一口接着一口大快朵颐的模样，荣进闪耀的表情重新开始浮现出喜色。`,
      );
      await flash.say_and_wait('真是的，哪怕好吃也要注意食用速度啊。');
      await flash.say_and_wait(
        '不过我很开心哦，亲手制作出来的甜品能够得到您的认可。',
      );
      await flash.say_and_wait('毕竟这其中……也倾注了我的心意呢。');
      era.printButton('「心意？」', 1);
      await era.input();
    }
    await flash.say_and_wait(
      '今年，可以说是我迄今为止的人生中，度过得最为重要的一年也说不定。',
    );
    await era.printAndWait(
      `荣进闪耀开口，为 ${your_name} 解释这份礼物中蕴涵着的来自${flash.sex}的心意。`,
    );
    await flash.say_and_wait(
      '皋月赏、日本德比、菊花赏……来自经典三冠的挑战近在咫尺。',
    );
    await era.printAndWait(
      `${your_name} 可以听出${flash.sex}的语气慢慢变得严肃。`,
    );
    await flash.say_and_wait(
      '为了达成梦想，为了可以让我的父母以我为荣，我必须要去做到。',
    );
    await flash.say_and_wait('所以……');
    await era.printAndWait(
      `不过就在 ${your_name} 挺直身体准备聆听闪耀的倾诉时。`,
    );
    await era.printAndWait('下一秒，气氛却又是突然一松。');
    await flash.say_and_wait(
      '我在这个幸运猪中倾注了能和您一起在这条荆棘丛生的道路上顺利且平安的走到最后的心愿。',
    );
    era.printButton('「闪耀……」', 1);
    await era.input();
    await era.printAndWait(
      `面对着向 ${your_name} 露出温柔笑容的荣进闪耀，${your_name} 想，${your_name} 已经不必再多说什么了。`,
    );
    era.printButton('「谢谢你。」', 1);
    await era.input();
    await era.printAndWait(
      `因此，${your_name} 郑重地点头，表示接收到了这份祝贺。`,
    );
    if (temp === 1) {
      era.println();
      flags.wait ||= get_attr_and_print_in_event(
        37,
        new Array(5).fill(10),
        0,
        JSON.parse('{"体力":400}'),
      );
    } else {
      era.println();
      flags.wait ||= get_attr_and_print_in_event(
        37,
        undefined,
        70,
        JSON.parse('{"体力":400}'),
      );
    }
    era.set('cflag:37:节日事件标记', 0);
  };

  handlers[47 + 13] = async (flash, your_name, callname, flags) => {
    await print_event_name('突如之灾', flash);
    await era.printAndWait(
      '在京成杯上，荣进闪耀以出色的表现留下属于自己的成绩。按照计划，下一步就应该参加皋月赏了。',
    );
    await flash.say_and_wait(`……${callname}。`);
    await era.printAndWait(
      '……本该是这样的。但是，就在比赛开赛前一个周，意外，却发生了。',
    );
    era.printButton('「发烧了吗？」', 1);
    await era.input();
    await era.printAndWait(
      `学校保健室内，${your_name} 面带担忧地看着躺倒在病床上的荣进闪耀。`,
    );
    await flash.say_and_wait('……嗯。');
    await era.printAndWait(`${flash.sex}有些虚弱地点了点头。`);
    await flash.say_and_wait(
      '应该是昨天晚上6点外出购物时，由于出发前太过于相信天气预报的降雨概率而没有携带雨伞，结果半途中突然下起大雨使得全身湿透所导……咳咳——。',
    );
    await era.printAndWait('荣进闪耀的话还没有说完，就被剧烈的咳嗽打断了。');
    await era.printAndWait(
      `看得出来${flash.sex}病的相当严重，见此，${your_name} 轻叹一口气。`,
    );
    era.printButton('「要不然……下周的皋月赏，就不参加了吧？」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 深知体弱的病人需要好好修养，避免高强度运动的道理。`,
    );
    await flash.say_and_wait('！');
    await era.printAndWait('但是荣进闪耀，却不这么想。');
    await flash.say_and_wait('不！医生说只要确保休息，那么很快就能康复！');
    await flash.say_and_wait(
      '而且距离皋月赏还有7天的时间，时间一定来……咳咳咳！',
    );
    era.printButton('「冷静点！闪耀。」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 看着突然激动起来，几欲起身的荣进闪耀，连忙示意${flash.sex}好好躺下休息。`,
    );
    await flash.say_and_wait('……得及……');
    await flash.say_and_wait('…………');
    await era.printAndWait('荣进闪耀沉默地躺回了床上。');
    await era.printAndWait(
      `十几秒之后，重新冷静下来的${flash.sex}才转头看向 ${your_name}。`,
    );
    await flash.say_and_wait(`抱歉，${callname}，是我失态了。`);
    era.printButton('「激动的情绪解决不了任何问题。」', 1);
    await era.input();
    await flash.say_and_wait('……是的，您说得对。');
    await flash.say_and_wait(
      '但是，已经制订的计划不容被打破。所以，即便拖着虚弱的身体，我也必须要去参加皋月赏。',
    );
    era.printButton('「你应该也清楚这种状态下的你很难发挥完美。」', 1);
    await era.input();
    await flash.say_and_wait(
      '……可如果连尝试都不愿意去做的话，那就真的一点机会都没有了。',
    );
    await era.printAndWait(
      `荣进闪耀没有否认 ${your_name} 言语中的隐意，但即便如此，${flash.sex}也坚持着想要去参赛。`,
    );
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `见状，${your_name} 什么都没说，只是认真地盯着${flash.sex}此时和 ${your_name} 对视的眼睛。`,
    );
    await flash.say_and_wait('所以，拜托您，请允许我参加皋月赏。');
    await flash.say_and_wait('那是我为了实现梦想，而必须要去做的事情。');
    await era.printAndWait(
      `从那道目光中，${your_name} 读出了不屈的坚持与无论如何也要达成目的的执着。`,
    );
    era.printButton('「……好吧。如果到时候真的没有问题的话，那就去吧。」', 1);
    await era.printAndWait(`最终，${your_name} 轻叹一口气，选择了退让。`);
    era.println();
    era.print([
      flash.get_colored_name(),
      ' 变得 ',
      {
        color: buff_colors[0],
        content: '[虚弱]',
        title: status_desc['闪耀虚弱'],
      },
      ' 了！',
    ]);
    era.set('status:37:虚弱', 1);
    sys_change_motivation(37, -1);
    flags.wait = true;
  };

  handlers[47 + 16] = async (flash, your_name, callname, flags) => {
    await print_event_name('经验之谈 · 一', flash);
    await era.printAndWait('日本德比，是经典三冠赛的第二战。');
    await era.printAndWait(
      '相较于已经过去的皋月赏，坐拥2400米长度的它在难度方面毫无疑问更加苛刻。',
    );
    await era.printAndWait(
      '因此，确实就像荣进闪耀说的那样，想要夺冠，就必须付出加倍的努力。',
    );
    await era.printAndWait('……但是……');
    era.printButton('「很抱歉，但我不能同意你的训练计划。」', 1);
    await era.input();
    await flash.say_and_wait('诶，为什么？');
    await era.printAndWait(
      `皋月赏结束后的第三天，荣进闪耀将一份修改过的计划表递给了 ${your_name}。`,
    );
    await era.printAndWait(
      `${your_name} 在仔细阅览之后，从上面挤得密密满满的文字中读出了高强度这几个大字。`,
    );
    era.printButton('「我清楚日本德比对你的重要性，但这不是胡来的理由。」', 1);
    await era.input();
    await era.printAndWait(`${your_name} 简短地说出自己的意见。`);
    await era.printAndWait('可荣进闪耀在听完之后，却是摇了摇头。');
    await flash.say_and_wait(
      '不，您误会了。这并非胡来，而是我根据量变引起质变这一理论衍生出来的结果。',
    );
    era.printButton('「量变引起质变？」', 1);
    await era.input();
    await flash.say_and_wait('是的。');
    await era.printAndWait(`荣进闪耀伸出一根手指，为 ${your_name} 解释。`);
    await flash.say_and_wait(
      '从今天开始，距离日本德比的开赛还剩下39天的时间。',
    );
    await flash.say_and_wait(
      '而正常情况下，想在这段连一个半月都不到的跨度中提升自己的能力，以求在比赛中得到更好的发挥是几乎不可能的事情。',
    );
    await flash.say_and_wait(
      '所以在思索再三之后，我想到一种剑走偏锋的解决办法。即通过在短期之内大幅度提高应有的训练量，借此来将自己成长所需要的那段时间压缩。',
    );
    await flash.say_and_wait(
      `为此我特意询问了以高强度训练闻名的美浦波旁同学，在${flash.sex}的建议下规划出了目前您所看到的这篇训练计划。`,
    );
    era.printButton(
      '「……也就是说，是以最大限度的压榨身体潜能为目的的训练方式吗？」',
      1,
    );
    await era.input();
    await era.printAndWait(`荣进闪耀的话让 ${your_name} 陷入思考。`);
    await era.printAndWait(
      `诚然，${
        flash.sex
      }所说的这个训练方法 ${your_name} 确实有所耳闻。并且可以肯定的是，也在某些赛${flash.get_uma_sex_title()}身上出现过奇效。`,
    );
    await era.printAndWait(
      `但是话又说回来，人和人之间的体质不能一概而论，${your_name} 并不清楚这种方式是否也同样的对荣进闪耀奏效。`,
    );
    await era.printAndWait(
      `而为了这种未知的可能性，却需要赌上令${flash.sex}受伤这种高概率的风险。`,
    );
    await era.printAndWait(
      `毫无疑问，作为训练员，${your_name} 是绝对无法接受的。`,
    );
    era.printButton('「要不然，先去尝试别的办法吧？」', 1);
    await era.input();
    await era.printAndWait(`因此，${your_name} 委婉地表述了自己的看法。`);
    await flash.say_and_wait(
      '可是除此之外，并没有其他办法可以在备赛期间内更有效的提升我自己的能力了！',
    );
    await era.printAndWait(
      `见 ${your_name} 否定${flash.sex}的提案，荣进闪耀的语气罕见的出现了一丝焦虑。`,
    );
    await flash.say_and_wait(
      '请相信我，这是我和美浦波旁同学一起经过深思熟虑得出的结果。无论是训练中的风险还是中途可能会遭遇的情景都考量在了其中。',
    );
    await flash.say_and_wait(
      '为了我的梦想，为了让我的父母引以为傲，我必须赢下日本德比，我必须取得这份荣耀。',
    );
    await flash.say_and_wait('所以——');
    era.printButton('「但我更在乎的是这个过程中，你的身体会受到的伤害。」', 1);
    await era.input();
    await flash.say_and_wait('！');
    era.printButton(
      '「而且你的父母，也肯定不会希望自己的孩子通过这种方式来证明自己吧？」',
      1,
    );
    await era.input();
    await flash.say_and_wait('………');
    await era.printAndWait(
      `有些出乎意料的，荣进闪耀在听到 ${your_name} 的话后，做出了惊讶，甚至可以说是动摇的反应。`,
    );
    await flash.say_and_wait('…………');
    await flash.say_and_wait('…………');
    await flash.say_and_wait('……是这样啊……');
    await era.printAndWait(`${flash.sex}陷入了沉默。`);
    await era.printAndWait(
      `${your_name} 不清楚荣进闪耀的内心正在想些什么。不过可以肯定的是，此时的${flash.sex}直视着 ${your_name} 的那双碧蓝色瞳孔里，正不断起伏着一种 ${your_name} 无法理解，但是又极为复杂的情感。`,
    );
    await flash.say_and_wait('……我知道了。');
    await era.printAndWait(
      '紧张的气氛逐渐缓和。几秒之后，荣进闪耀挪开了自己的目光。',
    );
    await flash.say_and_wait('看来是我考虑不周了呢，非常抱歉。');
    await era.printAndWait(
      `紧接着，${flash.sex}朝 ${your_name} 深深鞠躬。待起身之时，${your_name} 发现那份引起两人争议的计划表又被${flash.sex}拿回到手中。`,
    );
    await flash.say_and_wait('请容我回去，再好好思量一下吧。');
    if (era.get('status:37:虚弱')) {
      await era.printAndWait(
        `与皋月赏前的那次争执不同，这一回，是${flash.sex}主动选择了退让。`,
      );
      era.println();
      era.print([
        flash.get_colored_name(),
        ' 不再 ',
        {
          color: buff_colors[0],
          content: '[虚弱]',
          title: status_desc['闪耀虚弱'],
        },
        ' 了！',
      ]);
      era.set('status:37:虚弱', 0);
      sys_change_motivation(37, 1);
      flags.wait = true;
    }
  };

  handlers[47 + 17] = async (flash, your_name) => {
    await print_event_name('经验之谈 · 二', flash);
    const luna = get_chara_talk(17);
    await luna.say_and_wait(
      `所以，这就是您来找我的理由吗？${sys_get_callname(17, 0)}。`,
    );
    await era.printAndWait(
      `虽然成功劝说荣进闪耀放弃了${flash.sex}的高强度训练计划。但与此同时，${your_name} 也深知日本德比对于${flash.sex}的重要性。`,
    );
    await era.printAndWait(
      `${your_name} 决定以自己的方式来帮助${flash.sex}。因此，经过深思熟虑之后，${your_name} 来到了这里。`,
    );
    era.printButton('「是的，我希望你能和荣进闪耀进行模拟比赛。」', 1);
    await era.input();
    await era.printAndWait(
      `特雷森学院学生会办公室内，『皇帝』${luna.name} 面露平和之色地看着 ${your_name}。`,
    );
    await luna.say_and_wait(
      `真是意外的请求啊。想要和我一起赛跑的${flash.get_uma_sex_title()}有很多，但需要我去赛跑的训练员可真是罕见呢。`,
    );
    era.printButton(`「${flash.sex}需要你的力量。」`, 1);
    await era.input();
    await luna.say_and_wait('哦？');
    await era.printAndWait(
      `见 ${your_name} 这么说，${luna.name} 的脸上浮现出感兴趣的表情。`,
    );
    await luna.say_and_wait(
      '这点谈何说起呢？我记得没错的话，荣进闪耀目前正在备战今年的日本德比吧。',
    );
    era.printButton('「具体来讲的话……」', 1);
    await era.input();
    await era.printAndWait(
      '想要赢下日本德比，除了提升自己的能力之外，其实还有一条路可以选择。',
    );
    await era.printAndWait(
      `那便是与这个领域内的更强者对战，在这一过程中亲身体会${flash.sex}们所蕴含的力量，借此来使自己获取相关经验，并在接下来的比赛中利用这份经验取得临场发挥的优势。`,
    );
    await era.printAndWait(
      `将这套理论发挥到实战中，那么得出来的结果就是——让荣进闪耀在维持正常强度的日常训练的同时，寻找合适的对手与${flash.sex}进行模拟比赛。`,
    );
    await luna.say_and_wait('哈哈哈哈。');
    await era.printAndWait(
      `听取完 ${your_name} 的想法之后，${luna.name} 哈哈大笑。`,
    );
    await luna.say_and_wait('原来如此，很有意思的想法。');
    await luna.say_and_wait(
      '是想从我这个『无败三冠』的手中获取日本德比的经验吗？真是胆大包天的尝试啊。',
    );
    era.printButton(`「因为这对于${flash.sex}而言，是必要的。」`, 1);
    await era.input();
    await luna.say_and_wait('嗯………');
    await era.printAndWait(
      `${luna.name} 沉吟一声，${flash.sex}的手指开始轻敲桌面，似乎是在考虑些什么。`,
    );
    await luna.say_and_wait('我知道了。');
    await era.printAndWait(`片刻之后，重新开口的${flash.sex}露出了然的微笑。`);
    await luna.say_and_wait(
      `${sys_get_callname(
        17,
        0,
      )}，你对于担当${flash.get_uma_sex_title()}所抱有的想法我已切身体会到。因此相对的，我也有一个提案。`,
    );
    era.printButton('「提案？」', 1);
    await era.input();
    await luna.say_and_wait(
      `虽然亲自来担任对手一职也并非不可。但比起我而言，荣进闪耀${flash.sex}可能会需要另一个更加鲜艳的对手。`,
    );
    await luna.say_and_wait('一道……自由的风。');
    era.drawLine();
    const mr_cb = get_chara_talk(57);
    await era.printAndWait(
      `在那之后，${your_name} 根据 ${mr_cb.name} 的指示，来到了刚刚结束重赏级比赛的竞马场。`,
    );
    await era.printAndWait(`在那里，${your_name} 遇到了……`);
    await mr_cb.say_as_unknown_and_wait(
      '哈～今天的比赛真是太棒了。这么自由的氛围，我都快压抑不住自己的内心了。',
    );
    era.printButton('「你是……」', 1);
    await era.input();
    await mr_cb.say_as_unknown_and_wait(
      '脚步、呼吸、应援……我所渴望的想要去感受的一切事物，都在这里汇聚。',
    );
    await mr_cb.say_as_unknown_and_wait(
      `那么你呢？你又是因为什么而来的，${sys_get_callname(57, 0)}。`,
    );
    await era.printAndWait(
      `说着，躯体修长，全身上下散发着如若草地般清新气息的赛${flash.get_uma_sex_title()}转身，对 ${your_name} 嫣然一笑。`,
    );
    era.printButton('「……千明代表。」', 1);
    await era.input();
    await era.printAndWait(
      `出现在 ${your_name} 眼前的，赫然是以令人着迷且充满刺激的奔跑方式夺得三冠王称呼的赛${flash.get_uma_sex_title()}——千明代表。`,
    );
    await mr_cb.say_and_wait('嘛，话虽如此，不过详细的情况我也已经听说了。');
    await mr_cb.say_and_wait(
      `总之，就是想让我跟即将出走德比的${flash.get_uma_sex_title()}併走吗？`,
    );
    era.printButton('「是的。」', 1);
    await era.input();
    await mr_cb.say_and_wait('哈哈，可以哦。');
    await era.printAndWait('千明代表爽快地点了点头，非常干脆。');
    era.printButton('「……不需要再多考虑一下吗？」', 1);
    await era.input();
    await mr_cb.say_and_wait('不用，因为感觉是很有意思的事情。');
    await mr_cb.say_and_wait(
      '而且只要能给我带来快乐的话，无论多少次都乐意奉陪。',
    );
    era.printButton('「非常感谢！」', 1);
    await era.input();
    await era.printAndWait(
      `就这样，荣进闪耀的模拟赛对手选择好了，由三冠赛${flash.get_uma_sex_title()}千明代表亲自出马。`,
    );
    await era.printAndWait('接下来要做的，便是决定出一个时间即可。');
  };

  handlers[47 + 18] = async (flash, your_name) => {
    const mr_cb = get_chara_talk(57);
    await print_event_name('经验之谈 · 三 ', flash);
    await flash.say_and_wait(`三冠赛${flash.get_uma_sex_title()}啊……`);
    await flash.say_and_wait(
      '不，我并不害怕。就像您说的那样，这是一个难得的机会，我必须要去把握住。',
    );
    await flash.say_and_wait('而且……我也很期待呢，与更强者的对决。');
    era.drawLine({ content: '约定日' });
    await era.printAndWait(
      `${your_name} 和荣进闪耀一起前往特雷森学院的操场处。`,
    );
    await mr_cb.say_and_wait('那么准备好的话就可以开始咯。');
    await flash.say_and_wait('好的，请多多指教，千明代表同学。');
    await era.printAndWait('可以看出千明代表早已等候多时。');
    await era.printAndWait(
      `见此情况，${your_name} 鼓励地拍了拍荣进闪耀的肩膀。`,
    );
    era.printButton('「加油上吧！」', 1);
    await era.input();
    await flash.say_and_wait('是！');
    await mr_cb.say_and_wait(
      `呵呵～很好，完全不会因为我的三冠赛${flash.get_uma_sex_title()}这一名号而感到胆怯呢。`,
    );
    await era.printAndWait(
      '荣进闪耀毫不退缩，沉着自如的表现让千明代表称赞地点了点头。',
    );
    await mr_cb.say_and_wait(
      '已经可以预料到会是一场很尽兴的比赛了，我可不会放水的哦。',
    );
    era.drawLine();
    // todo [转入闪耀与千明代表的一对一对决。赛道各项参数:等同于日本德比 千明代表:全属性1200 适性等同于游戏 技能:三冠之王（效果：对战时所有面板数据提升至3倍）]
    await era.printAndWait(
      `千明代表是闪光系列赛中久负盛名的前辈。无论是实力还是经验，毫无疑问，作为三冠之王的${flash.sex}都全方面的超越了荣进闪耀。`,
    );
    await era.printAndWait(
      `因此，后者的落败从一开始便在 ${your_name} 的意料之中。`,
    );
    await flash.say_and_wait('呼……是我输了呢。');
    era.printButton('「辛苦了。」', 1);
    await era.input();
    await era.printAndWait(
      `不过话虽如此，但是在比赛的中途被千明代表超越之后，荣进闪耀的那份锲而不舍，直到最终的结果出来之前都在不懈追逐，意图想将胜利重新握于自己手中的坚韧精神也令 ${your_name} 颇为动容。`,
    );
    await mr_cb.say_and_wait('哈哈哈。');
    await era.printAndWait(`也许，可能还不只是 ${your_name}。`);
    await mr_cb.say_and_wait('这份求胜的欲望，还真是强烈啊。');
    await mr_cb.say_and_wait(
      `连我都感受到了……果然，荣进闪耀，你让我很开心哦。`,
    );
    await flash.say_and_wait('开心……吗。');
    await flash.say_and_wait('……总而言之，非常感谢千明代表同学你今天的协助。');
    await era.printAndWait(
      `荣进闪耀喘了几口气，在调整好状态之后，${flash.sex}向面前的千明代表点了点头，表达了自己的谢意。`,
    );
    await mr_cb.say_and_wait(`呐，能告诉我，你为什么这么渴望着胜利吗？`);
    await flash.say_and_wait('诶。');
    await era.printAndWait(
      `不过下一秒，后者的突然发问就让${flash.sex}微微一愣。`,
    );
    await flash.say_and_wait('因为……不以胜利为目的的比赛，没有任何意义。');
    await mr_cb.say_and_wait('除此之外呢？');
    await flash.say_and_wait('除此之外？');
    await mr_cb.say_and_wait(`你喜欢跑步吗？对你而言，跑步的意义是什么呢？`);
    await flash.say_and_wait('…………');
    await era.printAndWait('千明代表的话令荣进闪耀陷入沉默。');
    await flash.say_and_wait(
      '……很抱歉，我无法理解千明代表同学你这个问题的含义。',
    );
    await era.printAndWait(`片刻之后，${flash.sex}摇头说道。`);
    await flash.say_and_wait(
      '对我而言，奔跑就是奔跑，是达成目的的一种手段，是一种必要行为。',
    );
    await flash.say_and_wait(
      '我不需要在上面依附更多的感情，我要做的只有赢，一直赢下去，直到一切结束的那一天。',
    );
    await mr_cb.say_and_wait(
      `那日本德比呢？明明想要成为德比赛${flash.get_uma_sex_title()}，结果对于日本德比却没有任何的特殊情感？`,
    );
    await flash.say_and_wait('是的。');
    await mr_cb.say_and_wait('单纯的为赢而赢啊，还真是无趣。');
    await era.printAndWait('千明代表耸了耸肩。');
    await mr_cb.say_and_wait('被这种想法限制着可一点都不自由。');
    await flash.say_and_wait('……自由？');
    await mr_cb.say_and_wait('想要赢下日本德比的诀窍就是，不能只想着赢。');
    await flash.say_and_wait('诶？');
    await mr_cb.say_and_wait(
      '要找到比单纯的赢更重要的情感，再将这种情感化为自己的动力。',
    );
    await mr_cb.say_and_wait(
      '奔跑，再奔跑。极限也好，对手也好，运气也好，直到将一切都超越。',
    );
    await flash.say_and_wait('………');
    await mr_cb.say_and_wait('明白我的意思吗？');
    await flash.say_and_wait('……我……');
    await mr_cb.say_and_wait('嘛，不明白也没有关系。');
    await era.printAndWait('见荣进闪耀皱眉深思的模样，千明代表微微一笑。');
    await mr_cb.say_and_wait(
      `好好考虑吧，接下来就靠你自己了。一生一次的日本德比，在其中到底会领悟什么呢。`,
    );
    await mr_cb.say_and_wait(
      '啊，不过如果未来想找我来当对手的话，随时都乐意奉陪哦。',
    );
    await mr_cb.say_and_wait(
      '就像最开始说的那样，只要让我觉得快乐的事情无论来多少次都没问题。',
    );
    era.printButton('「非常感谢你，千明代表。」', 1);
    await era.input();
    era.drawLine();
    await flash.say_and_wait('今天的事情，非常感谢您。');
    await era.printAndWait(
      `与千明代表分别之后，荣进闪耀突然转身，向 ${your_name} 道谢。`,
    );
    era.printButton('「这是我应该做的。」', 1);
    await era.input();
    await flash.say_and_wait('正因如此，我才更应该表达谢意。');
    await era.printAndWait('荣进闪耀摇了摇头，语气中带着些许感慨。');
    await flash.say_and_wait(
      '和千明代表同学的赛跑，让我接触到了很多新的事物。',
    );
    await flash.say_and_wait(
      `……虽然我还是有些无法理解${flash.sex}最后那段话的具体含义。`,
    );
    await flash.say_and_wait(
      '不过光是已知的这些，就足够我消化学习一段时间了。',
    );
    await era.printAndWait(
      `说完，${flash.sex}将手放在胸口处，对 ${your_name} 露出温柔的笑意。`,
    );
    await flash.say_and_wait(
      '若是没有您的帮助，想必只凭我一个人是无法得出这种训练方案的。',
    );
    era.printButton('「这就是我存在的意义。」', 1);
    await era.input();
    await flash.say_and_wait('！');
    await flash.say_and_wait(
      '……您说的是呢，能够指出我的错误，将我引领向正确道路的人。',
    );
    await flash.say_and_wait(
      '从您，以及今天的千明代表同学这里，得到了不少照顾呢。',
    );
    await flash.say_and_wait('因此——');
    await era.printAndWait(
      `${your_name} 看到荣进闪耀突然攥紧拳头，${flash.sex}的目光中闪动着毫不动摇的意念。`,
    );
    await flash.say_and_wait('必须要赢下日本德比，作为对大家的回报才行。');
  };

  handlers[47 + 21] = async (flash, your_name, callname, flags) => {
    await print_event_name('两难之择 · 一 ', flash);
    await flash.say_and_wait('………');
    await flash.say_and_wait('………');
    era.printButton('「闪耀……」', 1);
    await era.input();
    await flash.say_and_wait(`……很抱歉，${callname}，但是我果然还是无法接受。`);
    await flash.say_and_wait('取消菊花赏的出走预定这件事情。');
    era.drawLine();
    if (check_aim_race(new RaceHistory(37).get(), race_enum.toky_yus, 1, 1)) {
      await era.printAndWait(
        '就在上个星期，荣进闪耀于日本德比的赛场上取得了傲人的战绩。',
      );
      await era.printAndWait(
        `深感喜悦的同时，${flash.sex}也下定决心，要在菊花赏的比赛中续写日本德比的辉煌，荣获万众瞩目的冠军。`,
      );
      await era.printAndWait('但……');
    }
    await era.printAndWait(
      `凡事永远都不可能一帆风顺，伤病一直是赛${flash.get_uma_sex_title()}绕不开的一个话题。`,
    );
    await say_by_passer_by_and_wait(
      '医生',
      '疼痛的原因应该是腿部肌肉积攒了过多的疲劳所导致的。为了防止病情进一步加重，接下来的一段时间里还请好好休息。',
    );
    await era.printAndWait(
      '事件的起因是由于荣进闪耀在日本德比结束后第二天的训练中说自己的腿部感受到异样的疼痛。',
    );
    await era.printAndWait(
      `对此不放心的 ${your_name} 带着${flash.sex}前往医院检查，然后便得知了患病的结果。`,
    );
    await flash.say_and_wait(
      '但即便如此，在菊花赏之前能够痊愈的概率还是非常高的。',
    );
    await era.printAndWait('可是很显然，荣进闪耀本人并不愿意接受这个情况。');
    await era.printAndWait(
      `即便 ${your_name} 跟${flash.sex}解释『想要赢下菊花赏就必须历经高强度的训练，但目前这样做只会让身体的情况更加糟糕』的现状。`,
    );
    await era.printAndWait(`${flash.sex}也仍旧执着的打算参赛。`);
    era.printButton('「……总之，最近这段时间先好好放松一下吧。」', 1);
    await era.input();
    await era.printAndWait(
      `最终，为了让${flash.sex}不再忧虑，而是静心去修养。${your_name} 选择做出一个承诺。`,
    );
    era.printButton('「如果在那之前可以痊愈的话，肯定是会让你出场的。」', 1);
    await era.input();
    await flash.say_and_wait('………');
    await flash.say_and_wait('……我知道了……');
    await era.printAndWait(
      `而大概是也清楚再争论下去根本没有意义。于是在听到 ${your_name} 的话之后，荣进闪耀只是沮丧地点了点头。`,
    );
    await flash.say_and_wait('那……就先把菊花赏从计划中取消掉吧。');
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `看着面露不甘之色的${flash.sex}，${your_name} 很担心接下来的日子里，${flash.sex}的状态会如何。`,
    );
    era.println();
    era.set('status:37:分心', 1);
    flags.wait = true;
    sys_hurt_uma(37, 1);
    era.print([
      flash.get_colored_name(),
      ' 变得 ',
      {
        color: buff_colors[0],
        content: '[分心]',
        title: status_desc['闪耀分心'],
      },
      ' 了！',
    ]);
  };

  handlers[47 + 23] = async (flash, your_name) => {
    await print_event_name('两难之择 · 二', flash);
    await era.printAndWait(
      '在决定不以菊花赏为目标之后，已经过去一周的时间了。',
    );
    await era.printAndWait(
      `不出 ${your_name} 意料的，这段期间里，荣进闪耀的状态相比于之前下滑了很多。`,
    );
    await flash.say_and_wait('……啊。');
    era.printButton('「怎么了？」', 1);
    await era.input();
    await era.printAndWait(
      '休息室内，正拿出笔记本准备核对接下来几天日程的荣进闪耀突然发出一声轻呼。',
    );
    await flash.say_and_wait('……不，没什么。');
    await flash.say_and_wait(
      '只是按照原先的计划安排的话，接下来就应该到以攻克长距离赛事为目的的训练阶段了。',
    );
    await flash.say_and_wait(
      '……但是……果然还是有些不甘心啊，明明距离菊花赏只剩一步之遥。',
    );
    await era.printAndWait(
      `${your_name} 听得出来，说这段话时的荣进闪耀，语气有些低落。`,
    );
    era.printButton('「暂时，先按照调整过后的计划来执行吧。」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name} 能够理解${flash.sex}的踌躇，但现在正是修养的关键时期，一切都应该以保重身体为最优先。`,
    );
    await flash.say_and_wait('嗯……');
    await era.printAndWait(
      `……不过，看着${flash.sex}有些失落的表情，${your_name} 也清楚再这样纠结下去并不是解决办法。`,
    );
    await era.printAndWait(
      `${your_name} 深知，荣进闪耀是个非常执着的孩子，这在大部分情况下是一件好事。`,
    );
    await era.printAndWait(
      `但是在遇到会令自己不知所措的情况时，这种特质反而会使得${flash.sex}更容易钻进牛角尖。`,
    );
    await era.printAndWait(
      '而想要走出去的话，要么就是按照原先的轨迹行走，即参加菊花赏。',
    );
    await era.printAndWait(
      `要么，就是跳出这道轨迹，即……让${flash.sex}承认无法参加菊花赏这件事情。`,
    );
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「那是我为了实现梦想，而必须要去做的事情。」）',
    ]);
    await era.printAndWait(
      '（医生「为了防止病情进一步加重，接下来的一段时间里还请好好休息。」）',
    );
    await era.printAndWait('……坦白来讲，无论是哪一个选择都不容易。');
    era.printButton('（到底应该怎么做才好。）', 1);
    await era.input();
    await era.printAndWait(`${your_name} 皱眉思索。`);
    await era.printAndWait(
      `作为训练员，没有人比 ${your_name} 更了解${flash.sex}为了梦想所付出的汗水与坚持。`,
    );
    await era.printAndWait(
      `因此，${your_name} 当然殷切的希望${flash.sex}可以圆梦而归。`,
    );
    await era.printAndWait(
      `但是，也正是作为训练员，${your_name} 才无法放任${flash.sex}继续进行有风险的行为。`,
    );
    await era.printAndWait('比起短时的目标，平安无事的跑完全程更为重要。');
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `两难的想法不断在脑海中碰撞，让 ${your_name} 的内心升起一道无法驱散的迷雾。`,
    );
    await era.printAndWait(`${your_name} 清楚，自己急需找一个破局之策。`);
    await era.printAndWait(
      `${your_name} 的举棋不定会令荣进闪耀的处境更加煎熬。`,
    );
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「……您说的是呢，能够指出我的错误，将我引领向正确道路的人。」）',
    ]);
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `踌躇之间，${your_name} 想起了当时荣进闪耀在和千明代表对决之后，跟 ${your_name} 说的话。`,
    );
    await era.printAndWait(
      `${flash.sex}相信，${your_name} 是${
        flash.sex
      }在赛${flash.get_uma_sex_title()}这一道途中的指引者。`,
    );
    await era.printAndWait(
      `而事实也证明，${flash.sex}对于 ${your_name} 的大部分指令都会毫无异议地去执行。`,
    );
    await era.printAndWait(
      `那么换成 ${your_name}，事到如今，是否又相信${flash.sex}呢？`,
    );
    era.printButton('「………呼。」', 1);
    await era.input();
    await era.printAndWait(
      `想到这里，${your_name} 将手伸入口袋，从其中拿出一枚铜质勋章。`,
    );
    await era.printAndWait('镀银的外表在阳光的照射下闪闪发光。');
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「非常感谢您的帮助，请您务必收下这个作为我对您的回报。」）',
    ]);
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `相遇时的回忆涌上心间，${your_name} 对着它凝视良久。`,
    );
    await era.printAndWait(
      `最后，${your_name} 转身，看向此时正在一旁对着计划书冥思苦想的荣进闪耀。`,
    );
    era.printButton('（这是一开始就没有争议的事情吧。）', 1);
    await era.input();
    await era.printAndWait(`下一秒，${your_name} 轻笑着摇了摇头。`);
    await era.printAndWait(
      `${your_name} 想自己已经找到了答案，现在要做的，只是静待良机。`,
    );
  };
};
