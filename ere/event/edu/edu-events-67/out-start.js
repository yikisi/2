const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-67');
const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async (hook, _, event_object) => {
  if (era.get('flag:当前互动角色') !== 67) {
    add_event(hook.hook, event_object);
    return;
  }
  const daiya = get_chara_talk(67),
    edu_marks = new DaiyaEduMarks(),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:67:育成回合计时'),
    me = get_chara_talk(0);
  let wait_flag = false;
  if (edu_marks.win_g1 === 1) {
    await print_event_name('支持我的大家', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait('里见光钻拿下首次G1胜利后的某天。走在街上时──');
    await say_by_passer_by_and_wait(
      '游戏厅的工作人员',
      '每人可以免费挑战一次抽豪华奖品的机会！目前正在举办“里见光钻G1获胜纪念活动”喔──！！」',
    );
    era.printButton('「里见光钻的活动！？」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 因为感到在意而走进游戏厅。店里装饰得非常缤纷，到处都贴着之前比赛照片的看板。`,
    );
    await daiya.say_and_wait('哎呀，训练员。你好呀。');
    await kita.say_and_wait('你好！训练员也是来玩游戏的吗？');
    era.printButton('「不是，我只是对光钻的活动感到很惊讶……」', 1);
    await era.input();
    await era.printAndWait(`我向 ${daiya.sex}们 询问怎么会有里见光钻的活动。`);
    await daiya.say_and_wait('这是一间摆设里见集团开发的游戏机台的游戏厅。');
    await daiya.say_and_wait(
      '为了纪念我在G1获胜，集团的相关设施都正在举办活动。',
    );
    await daiya.say_and_wait(
      '“遇到喜事就要回馈顾客，把快乐分享给大家”，这是里见集团的经营方针。',
    );
    await daiya.say_and_wait('这件事情应该也已经得到学园那边的取可了的说……');
    await era.printAndWait(
      `${me.name} 想，应该因为是和比赛无关的杂事，所以学园那边帮 ${me.name} 将这些事情都处理好了吧。`,
    );
    await kita.say_and_wait(
      '我们正打算要去家庭餐厅，训练员，你要不要也一起去呢？',
    );
    await daiya.say_and_wait('对呀！和我们一起去吧！');
    era.printButton('「那我就一起去吧」', 1);
    await era.input();
    await daiya.say_and_wait('太好了！嘿嘿嘿♪');
    await daiya.say_and_wait('啊……对了，在那之前，请先等我一下下。');
    await era.printAndWait(
      '说完，里见光钻走向工作人员说了些话，将签名板交给工作人员，并在其中一台游戏机台上签名。',
    );
    await kita.say_and_wait(
      '小钻会像这样造访各个集团的相关设施，然后签名的样子呢！',
    );
    await kita.say_and_wait(
      '这好像是小钻为了多少让来店里的人感到更开心，而自己想到的喔！',
    );
    await kita.say_and_wait(
      '因为没办法造访全国的所有店家，所以会用参加G1竞赛时所用的蹄铁在签名板上盖印，送给大家喔！',
    );
    await daiya.say_and_wait('抱歉，让你们久等了。我们走吧。');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      '「请给我们三人份的“光钻汉堡排”──！」',
    ]);
    await era.printAndWait('家庭餐厅店员「是。请稍候。」');
    era.printButton('「竟然还有活动限定的菜色……」', 1);
    await era.input();
    await daiya.say_and_wait(
      '呵呵呵，其实这个“光钻汉堡排”是还原母亲为我做的汉堡排喔。',
    );
    await daiya.say_and_wait(
      '……在我比赛的前一天，母亲她代替了主厨，自己亲手为我做了汉堡排。',
    );
    await daiya.say_and_wait(
      '圆圆的汉堡排上面会有钻石形状的起司……中间还会插上一根母亲亲手做的旗子。',
    );
    await daiya.say_and_wait(
      '无论工作多么忙碌。母亲都一定会亲自为我做帮我加油打气的汉堡排。',
    );
    await kita.say_and_wait('所以才会叫做“光钻汉堡排”啊！');
    await daiya.say_and_wait(
      '嗯，虽然吃起来的味道应该不会完全一样……但我也很期待呢♪',
    );
    await era.printAndWait(
      '家庭餐厅店员「让您久等了。为您送上“光钻汉堡排”。」',
    );
    await daiya.say_and_wait('哇啊，来了来了！我要开动了──！');
    await daiya.say_and_wait('嚼嚼…………嗯嗯！');
    await daiya.say_and_wait(
      '这个味道……跟母亲做的非常接近呢！尤其是里面咬起来很松软的口感……！',
    );
    await daiya.say_and_wait('……呵呵呵，一定是母亲她亲自监修的吧♪');
    await era.printAndWait(
      '以家庭餐厅的菜色来说，“光钻汉堡排”的确是一道非常有手工感的料理。',
    );
    await kita.say_and_wait(
      '都这样到处办盛大活动了，想必伯父跟伯母对小钻首次在G1获胜这件事很开心吧？',
    );
    await daiya.say_and_wait(
      '嗯──他们是有打电话来道贺，但也没有表现出特别不同的感觉呢？还是工作很忙的样子。',
    );
    await kita.say_and_wait('咦？是喔？');
    await daiya.say_and_wait('嗯，但他们有说等我下次回家的时候会帮我庆祝。');
    await daiya.say_and_wait('……你们两位还吃得下吗？');
    await daiya.say_and_wait(
      '集团经营的别家咖啡厅里，也有办庆祝G1获胜纪念的铜板蛋糕套餐活动呢。',
    );
    await daiya.say_and_wait(
      '甜点我们就到那边吃吧♪之后还有室内的游乐设施，现在都可以全部免费玩呢……',
    );
    era.printButton('「光钻的父母亲会很忙，该不会就是因为……」', 1);
    await era.input();
    await kita.say_and_wait('我想，应该就是为了准备G1获胜纪念活动的关系吧。');
    await kita.say_and_wait('……该不会所有跟集团有关的地方，全部都在办活动吧……');
    await daiya.say_and_wait(
      '啊，里见集团的度假饭店也有今日预约限定的铜板住宿价优惠活动呢。',
    );
    await daiya.say_and_wait('不嫌弃的话，训练员也去体验看看吧♪');
    await kita.say_and_wait('听起来真的是所有地方都有办活动耶！！');
    await era.printAndWait(
      '──这个庆祝的规模实在是非同小可。明显能感受到里见光钻的双亲和家族所有人是多么地开心。',
    );
    await era.printAndWait(
      '里见家首次的G1胜利。里见光钻所成就的伟业，带给许多的人喜悦。',
    );
    await era.printAndWait(
      `今后也要继续和${daiya.sex}一起将更多的胜利带给大家──`,
    );
    edu_marks.win_g1++;
  } else if (edu_marks.satono_uma === 1) {
    edu_marks.satono_uma++;
    await print_event_name(
      `身为里见家的一员，身为赛${daiya.get_uma_sex_title()}`,
      daiya,
    );
    const ryan = get_chara_talk(27),
      bright = get_chara_talk(74);
    await era.printAndWait('休假的黄昏时分，经过校门附近时──');
    await ryan.say_and_wait('你是说，小见还没有回来吗？');
    await bright.say_and_wait('好像是呢～继续在这里等一下好了～');
    era.printButton('「里见光钻怎么了吗？」', 1);
    await era.input();
    await ryan.say_and_wait('你是……小见的训练员对吧。');
    await ryan.say_and_wait(
      '其实是因为今天早上的时候，善信碰巧看到小见外出。听说是要去公司的样子。',
    );
    era.printButton('「公司！？」', 1);
    await era.input();
    await era.printAndWait(
      `意外的词汇令 ${me.name} 不禁感到惊讶，${me.name} 继续听目白赖恩说明详细状况。据说是前往里见家的某间公司了。`,
    );
    await ryan.say_and_wait(
      '因为她说傍晚的时候会回来，但还没回来所以有点担心……',
    );
    era.printButton('「告诉我这件事情非常感谢」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 告诉${daiya.sex}们接下来的事情由 ${me.name} 来处理，并决定要打电话给里见光钻。`,
    );
    await daiya.say_and_wait('哎呀，是训练员呀？');
    era.printButton('「你说你还在公司？」', 1);
    await era.input();
    await era.printAndWait(
      `了解她的状况后，${me.name} 告诉${daiya.sex}目白赖恩等人正在担心${daiya.sex}的事情。`,
    );
    await daiya.say_and_wait(
      '“哎呀，居然害她们担心了。不过我现在已经没事了。事情都已经处理得差不多了。”',
    );
    era.printButton('「我还是觉得不放心，我去接你吧」', 1);
    await era.input();
    await daiya.say_and_wait(
      '你来接我没关系吗？那我就交待公司的人等等直接让你进来啰。',
    );
    era.drawLine();
    await era.printAndWait(
      `${me.name} 进到${daiya.sex}告诉 ${me.name} 的公司大楼里，来到里见光钻所在的楼层。`,
    );
    await era.printAndWait(`${daiya.sex}会在哪里呢？${me.name} 环顾四周──`);
    await era.printAndWait(
      '里见集团的职员「──那么，慈善竞赛的事情该怎么做呢？」',
    );
    await daiya.say_and_wait('首先要先确定日程跟举办场地才行。');
    await daiya.say_and_wait('下周会议之前，我会和母亲先大致上想好的。');
    await daiya.say_and_wait('我们一起同心协力，让当天能有更多的人来参加吧♪');
    await era.printAndWait('看似职员的人行了个礼后，便离开了。');
    era.printButton('「慈善竞赛？」', 1);
    await era.input();
    await daiya.say_and_wait('训练员，你到啦！');
    await daiya.say_and_wait(
      '那是我们里见集团慈善事业的一环，目前正在计划要办一场慈善竞赛。',
    );
    await daiya.say_and_wait(
      `毕竟我既是里见家的一分子也同时是赛${daiya.get_uma_sex_title()}，所以总想着自己能不能帮上点什么忙，想为大家尽点绵薄之力。`,
    );
    await era.printAndWait(
      `${daiya.sex}在说这些话时的表情比平常更加正气凛然，可以感觉得出来${daiya.sex}对此抱持很大的责任感。`,
    );
    era.printButton('「真不愧是里见家的一分子啊」', 1);
    era.printButton('「慈善竞赛你也会参加吗？」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('呵呵，谢谢夸奖♪');
      await daiya.say_and_wait(
        '毕竟我迟早是要站在引领里见家的位置。所以我才会希望能趁现在多拓展自己的视野跟见解。',
      );
      await daiya.say_and_wait(
        '况且，像这样以里见家一员的身份做事，反而会让我有更想努力的感觉呢！',
      );
      await era.printAndWait(
        '她说这些话时的笑容，看得出她身为里见家代表的骄傲。',
      );
      await ryan.say_and_wait(
        '啊，你回来了！小见你明明才刚忙完工作，却很有精神的样子呢。',
      );
      await daiya.say_and_wait(
        '毕竟我是要扛起整个里见家的人，还是不能被这点小事给难倒的♪',
      );
      await ryan.say_and_wait(
        '啊哈哈，真的就像善信所说的一样耶！你的这个部分真的很像麦昆。',
      );
      await daiya.say_and_wait(
        '哎呀，真的吗！？赖恩，我想听更多关于你刚刚说的这件事情的事！',
      );
      await daiya.say_and_wait('是呀，我就是这么打算的。');
      await daiya.say_and_wait(
        `如同我刚才所说，我毕竟既是里见家的一分子也同时是赛${daiya.get_uma_sex_title()}。`,
      );
      await daiya.say_and_wait(
        `虽然我现在还只是个年轻的晚辈，但我希望总有一天自己可以为里见家和赛${daiya.get_uma_sex_title()}业界都做出贡献！`,
      );
      await era.printAndWait(
        `从${daiya.sex}不仅考量着现在也规划着未来的眼神中，${me.name} 仿佛可以预见${daiya.sex}将来活跃的姿态。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
    } else {
      era.drawLine();
      await bright.say_and_wait('哎呀，你回来了～工作的事情处理得怎么样了呢？');
      await era.printAndWait(
        `里见光钻向出来迎接${daiya.sex}的两人提起慈善竞赛的事情。`,
      );
      await bright.say_and_wait(
        '哎呀，感觉是很有意思的事情呢～！那场比赛，我也想要参加看看呢～',
      );
      await daiya.say_and_wait('当然欢迎！非常欢迎目白家的每一位来参加！');
      await bright.say_and_wait(
        '呵呵呵♪既然决定要参加的话，那我就要以优胜为目标啰～',
      );
      await daiya.say_and_wait(
        '是呀，比赛的时候就该是这样才对！我也会认真奉陪的♪',
      );
      await ryan.say_and_wait(
        '看来都是些个性很相像的人参加呢。啊哈哈，到时候真不知道会是什么情况……',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 10, 10, 0, 0], 0);
    }
  } else if (edu_marks.diamond_cotton === 1) {
    edu_marks.diamond_cotton++;
    await print_event_name('坚硬的钻石在棉花里', daiya);
    await era.printAndWait('今天是包含拍摄决胜服的采访日。');
    await era.printAndWait(
      `${me.name} 和里见光钻一起稍微提早前往摄影棚。现在──`,
    );
    await daiya.say_and_wait('哼、哼、哼～♪');
    await era.printAndWait(
      `换上决胜服的${daiya.sex}在摄影机前做动作、摆姿势，时不时也会去看屏幕确认拍出来的成果。`,
    );
    era.printButton('「很认真在确认呢」', 1);
    await era.input();
    await daiya.say_and_wait('是呀，我在确认有没有完整呈现出我想要的感觉。');
    await me.say_and_wait('你想要的感觉？');
    await daiya.say_and_wait(
      '是的，这件决胜服是以我平常就很重视的一些想法为题材所设计的。',
    );
    await daiya.say_and_wait('我希望让看到采访报导的人都能感受到我的想法。');
    await era.printAndWait(
      `这么说起来，${daiya.sex}的决胜服的确有特别让人印象深刻的部分。`,
    );
    era.printButton('「钻石饰品最让人有印象呢」', 1);
    era.printButton('「荷叶边最让人有印象呢」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('是的，没有错！');
      await daiya.say_and_wait(
        '这当然是跟我的名字有关系，但同时也带有意志坚定的意思喔。',
      );
      await daiya.say_and_wait('举例来说，以钟乳石为例。');
      await daiya.say_and_wait(
        '那是雨水降落大地，含有石灰岩的水分落地而生成的。',
      );
      await daiya.say_and_wait(
        '经过了数万年、数十万年的时间，不断地在同一个地方累积，才能变得又坚硬又大。',
      );
      await daiya.say_and_wait(
        `我认为，赛${daiya.get_uma_sex_title()}的强大是跟这个很接近的。`,
      );
      await daiya.say_and_wait('──换句换说，就是贯彻到底的意思。');
      await daiya.say_and_wait(
        '确立目标、持续前进。我相信这些努力是会带来胜利的。',
      );
      await era.printAndWait(
        `${daiya.sex}在说这些话时的眼神中，浮现着和她钻石饰品一样坚强的信念和意志。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    } else {
      await daiya.say_and_wait('哎呀，你竟然注意到了这点！');
      await daiya.say_and_wait(
        '虽然多少也是因为我自己觉得荷叶边很可爱、很喜欢，但这其中主要的还是它的柔软度喔。',
      );
      await daiya.say_and_wait(
        '目标设得越高、越远，前进的过程中就会遭遇更多的苦难。',
      );
      await daiya.say_and_wait(
        '要是面对每一个困难都用硬碰硬的方式，那无论再坚硬的宝石也都会出现裂痕的。',
      );
      await daiya.say_and_wait('所以──有时候以柔克刚也是很重要的。');
      await daiya.say_and_wait(
        '我相信，这样一来就能减少无谓的顾虑，并专心地朝该前进的方向迈进。',
      );
      await era.printAndWait(
        `${daiya.sex}在说这些话时的眼神中，浮现着和${daiya.sex}对荷叶边的信念一样的温柔的光芒。`,
      );
      await era.printAndWait(
        `之后 ${me.get_couple_title()} 又聊了许久，距离正式拍摄还有一段时间。`,
      );
      era.printButton('「边喝东西边等吧」', 1);
      await era.input();
      await daiya.say_and_wait('不错呢！那我们就一起喝茶休息吧！');
      await daiya.say_and_wait('话说茶……要去哪里才能买到呢？');
      era.printButton('「我记得走廊好像有自动贩卖机──」', 1);
      await era.input();
      await daiya.say_and_wait(
        '自动贩卖机！刚才看到的时候，我有注意到是跟一般贩卖机不太一样的机种，我当时觉得很好奇呢！',
      );
      await daiya.say_and_wait(
        '训练员，这件事就交给我吧。我负责去自动贩卖机买茶回来。',
      );
      await era.printAndWait(
        `${me.name} 看着兴奋的里见光钻离开……心中开始对${daiya.sex}刚才所说的“跟一般贩卖机不太一样”这句话感到忧心。`,
      );
      await era.printAndWait(
        `还是跟去看看好了。正当 ${me.name} 打算追上${daiya.sex}的脚步时──`,
      );
      await daiya.say_and_wait(
        '……哎呀，没有罐装的也没有宝特瓶装的呢。这个面板是？按下去就好了吗？还是要按这边的按钮才对呢？',
      );
      await era.printAndWait('喀锵、喀锵——');
      await daiya.say_and_wait('哎呀！出来的是杯子！');
      await era.printAndWait('唰唰唰唰！');
      await daiya.say_and_wait(
        '哇啊，开始掉冰块出来了！？没有要加茶的意思吗？是不是中断它比较好呢？',
      );
      era.printButton('「我现在立刻过去，你站在原地不要动！」', 1);
      await era.input();
      await era.printAndWait(
        `${daiya.sex}有非常稳重可靠的一面，也有与之相反的部分。这次让 ${me.name} 重新慎重地决定今后一定要好好守着${daiya.sex}。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    }
  } else if (edu_marks.high_place === 1) {
    edu_marks.high_place++;
    await print_event_name('前往崇拜之人正等待着的高处', daiya);
    const mcqueen = get_chara_talk(13);
    const gold_ship = get_chara_talk(7);
    await era.printAndWait(
      `休假时，${me.name} 在咖啡厅里，看到了里见光钻和目白麦昆的身影。`,
    );
    await daiya.say_and_wait('啊，训练员！你好！');
    await daiya.say_and_wait('呵呵，今天呀，麦昆特地带我来她推荐的咖啡厅喔！');
    await mcqueen.say_and_wait(
      '请尽情点自己喜欢的东西。这里菜单上的东西，不管点什么都不会让人失望的。',
    );
    await daiya.say_and_wait('谢谢！我看看……！');
    await daiya.say_and_wait('好棒喔……！这间店里总共有129种的甜点可以点呢……！');
    await daiya.say_and_wait(
      '……咦？“吃完全品项的客人还会得到特别荣誉……！？”这是……什么意思呀？',
    );
    await mcqueen.say_and_wait(
      '这、这是……我也只是听说的，据说是吃完全品项的人，会得到“大师”的称号吧。',
    );
    await mcqueen.say_and_wait('听说至今都还没有人得到那个称号过……');
    await gold_ship.say_and_wait('没错──除了（减重中的）麦昆以外。');
    await mcqueen.say_and_wait('你怎么知道的！？而且你怎么会在这！？');
    await daiya.say_and_wait('只有麦昆得到过的称号……这实在是太让我感兴趣了！');
    await daiya.say_and_wait('我想要挑战看看！先点个菜单左边的二十道来吃吧！');
    era.printButton('「超出所需的热量了」', 1);
    era.printButton('「挑战看看好了」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('这么说是没有错……唔～不行吗……？');
      await mcqueen.say_and_wait(
        '这才是明智的选择。我花了十天的时间拼死完成挑战，害我的体重──',
      );
      await mcqueen.say_and_wait(
        '咳咳。美食还是适量就好。好了，重新挑选自己想吃的东西吧──',
      );
      await gold_ship.say_and_wait(
        '我的推荐菜色是猪排丼饭跟腌小黄瓜，还有蛤蛎汤喔。',
      );
      await daiya.say_and_wait('这样呀……那我就点那些──');
      await mcqueen.say_and_wait('这里才没有那些菜色！黄金船还是快点回家吧！');
      await era.printAndWait(
        '后来，里见光钻点了目白麦昆推荐的甜点。……这是考量了热量问题后的选择。',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(
        67,
        undefined,
        0,
        JSON.parse('{"体力":100}'),
      );
    } else {
      await daiya.say_and_wait('是！我一定会追上麦昆的！');
      await daiya.say_and_wait(
        '嗷……我、我已经不行了……感觉已经吃到全身都开始散发出甜点的甜味了……',
      );
      await daiya.say_and_wait('看来我还没能达到麦昆的境界……');
      await mcqueen.say_and_wait(
        '那是当然的啰。我也是花了十天才完成挑战的。怎么可能一次吃二十道……',
      );
      await gold_ship.say_and_wait(
        '哎呀哎呀，已经很了不起了吧。不错嘛，麦昆，你后继有人了。',
      );
      await mcqueen.say_and_wait(
        '是什么样的继承人啊！？唉，想不到我犯的过错居然连累到后辈……！',
      );
      await era.printAndWait(
        `里见光钻摄取了非常庞大的热量。${daiya.sex}会就这样直接成为第二个“大师”吗……！？`,
      );
      era.add(`base:67:体重偏差`, 500);
      era.println();
      wait_flag = get_attr_and_print_in_event(
        67,
        undefined,
        0,
        JSON.parse('{"体力":300}'),
      );
    }
  } else if (edu_marks.fresh === 1) {
    edu_marks.fresh++;
    await print_event_name('新鲜！', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait(
      '和里见光钻一起外出时，看见正在跟果蔬店老板说话的北部玄驹。',
    );
    await daiya.say_and_wait('咦？小北怎么了吗？表情好像很苦恼的样子……');
    await kita.say_and_wait('啊，小钻。是果蔬店的老板遇到困难了啦……');
    await era.printAndWait(
      '果蔬店的大叔「哎呀，今天卖剩了很多的蔬菜啊……也完全没什么人来光顾。」',
    );
    await era.printAndWait(
      '果蔬店的大叔「很便宜、很便宜喔～新鲜又好吃的蔬菜喔……」',
    );
    era.printButton('「…………真的都没有人来呢」', 1);
    await era.input();
    await era.printAndWait(
      '果蔬店的大叔「对吧？每次我们声援的棒球队只要打输就会这样。真的是非常讨厌的一个魔咒耶……」',
    );
    await kita.say_and_wait('老板说他已经受这个魔咒的影响好几次了。');
    await daiya.say_and_wait('……唔！');
    await daiya.say_and_wait(
      '叔叔，魔咒是可以破除的！不要放弃，努力对抗魔咒吧！',
    );
    await daiya.say_and_wait(
      '像是……由我来买下这里剩下的所有蔬菜，你觉得怎么样呢？',
    );
    era.printButton('「这么做有点……」', 1);
    await era.input();
    await kita.say_and_wait('那就用别种方式……！我也想要帮助有困难的人！');
    await kita.say_and_wait('……对了！就让我帮忙你一起卖菜吧！');
    await daiya.say_and_wait('我也要！让我帮忙一起破除魔咒吧！');
    await kita.say_and_wait('商店街的大家！');
    await kita.say_and_wait('要不要买点蔬菜呢──！');
    await era.printAndWait('行人「怎么啦怎么啦！？」');
    await era.printAndWait(
      '北部玄驹大声叫卖的声音响彻整条商店街，让路上的行人都停下了脚步。',
    );
    await daiya.say_and_wait(
      '充满水分的番茄跟充满光泽的茄子！要不要当作晚餐的食材呢～？',
    );
    await era.printAndWait(
      '家庭主妇「哎呀，声音还真有活力呢～过去看一下好了。」',
    );
    await daiya.say_and_wait('每一样我都很推荐喔♪请大家过来看看。');
    await kita.say_and_wait('嘿嘿嘿，感觉不错呢！效果很好！');
    await daiya.say_and_wait('多亏了小北强而有力的声音呢♪');
    await kita.say_and_wait(
      '小钻接待客人的方式也很好啊！平常就注重礼貌的个性派上用场了呢！',
    );
    await era.printAndWait('人声鼎沸，盛况空前……');
    await era.printAndWait(
      '果蔬店的大叔「这是……！这还是第一次在声援的棒球队打输后，生意这么好呢！」',
    );
    await daiya.say_and_wait(
      '呵呵呵，我们也没有做什么特别的事情哦。如果叔叔也像平常一样有精神的话，不用我们帮忙也一样会生意很好的。',
    );
    await kita.say_and_wait(
      '啊，确实是这样耶！大叔今天的叫卖声好像真的少了平时的活力！',
    );
    await era.printAndWait(
      '果蔬店的大叔「啊啊，也对……！经你这么一说，我确实是因为沮丧而消沉。」',
    );
    await daiya.say_and_wait(
      '“不能败给魔咒！”、“不要放在心上，要开心过日子！”。',
    );
    await daiya.say_and_wait(
      '只要抱着这样的想法去叫卖的话，魔咒一定也立刻就破除掉了♪',
    );
    era.printButton('「任何时候都保持积极乐观是最好的！」', 1);
    era.printButton('「任何魔咒都能破除吗？」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('呵呵，没错！');
      await daiya.say_and_wait(
        '就是这样。要不要找其他也受魔咒所苦的人呢？说不定能帮上忙呢！',
      );
      await kita.say_and_wait('我也要、我也要！去问问商店街的其他人看看吧！');
      await era.printAndWait(
        `${me.get_couple_title()} 三人一起走在商店街上，寻找着未知的魔咒！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
    } else {
      await daiya.say_and_wait(
        '啊，你该不会不相信吧？那我就再破除一个魔咒给你看！',
      );
      await era.printAndWait(
        '果蔬店的大叔「如果是魔咒的事情的话，我这里还有呢！“生意好的时候，小黄瓜一定卖不完”是这样的一个魔咒！」',
      );
      await kita.say_and_wait(
        '那我们去宣传吃小黄瓜的好处吧。像是……表演怎么做才会好吃的方法之类的？',
      );
      await daiya.say_and_wait('这主意不错耶！我来问我常吃的三星主厨作法好了♪');
      await era.printAndWait(
        '现场教学贩卖受到了好评，里见光钻等人顺利把小黄瓜也卖完了！',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    }
  } else if (edu_marks.heartbeat_excite === 1) {
    edu_marks.heartbeat_excite++;
    await print_event_name('Heartbeat·Excite', daiya);
    era.println();
    await era.printAndWait('外出时，里见光钻在一张超大海报前停下了脚步。');
    await daiya.say_and_wait(
      '“游乐园史上最恐怖的云霄飞车──‘天堂’诞生……寻求勇敢的挑战者”？',
    );
    await daiya.say_and_wait(
      '会是高度很高……还是速度很快之类的吗？不知道会是怎样的云霄飞车呢……！',
    );
    await daiya.say_and_wait('我们得去一趟游乐园才行了！');
    era.printButton('「咦！？等等……」', 1);
    await era.input();
    await daiya.say_and_wait('快呀，训练员。我们赶快出发吧♪');
    await daiya.say_and_wait(
      '啊，就是那个！那个在很高的地方的轨道……就是传说中最恐怖的云霄飞车没错吧！？',
    );
    await era.printAndWait(
      '那就是“天堂”……几乎贯穿云霄的高度，果然是如其名的规格！',
    );
    await era.printAndWait(
      '行人A「天啊……感觉真的是去了一趟“天堂”……！完全没料到会是那样……」',
    );
    await era.printAndWait(
      '行人B「不行不行，我真的没办法……我连五代之前的祖先都看见了……！」',
    );
    await daiya.say_and_wait('哎呀，玩过的人都吓成那个样子呢……！这样子──');
    await daiya.say_and_wait(
      '我也开始觉得紧张刺激了呢！感觉会是一次全新的体验♪',
    );
    era.printButton('「虽然感觉应该是会很有趣，但……」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name} 既想要尝试又同时觉得害怕。两种心情正在交战……`,
    );
    await daiya.say_and_wait('训练员，你怎么了吗？是不是不太想玩呀……？');
    await daiya.say_and_wait('如果是这样……我可以等到你想玩再玩喔♪');
    await era.printAndWait(
      `${me.get_couple_title()} 决定暂时先在园区内闲晃，度过一段悠闲的时光。`,
    );
    await daiya.say_and_wait('嚼嚼……');
    await daiya.say_and_wait('我吃饱了♪');
    await daiya.say_and_wait('啊，云霄飞车。现在好像刚好比较少人在排队呢？');
    era.printButton('「你也可以自己一个去玩哦？」', 1);
    await era.input();
    await daiya.say_and_wait(
      '嗯～还是不要吧！虽然我原本觉得一个人应该也很好玩……',
    );
    await daiya.say_and_wait('但我觉得，一人份的紧张刺激是满足不了我的。');
    await daiya.say_and_wait(
      '……现在回想起来，我真的跟训练员一起去了好多地方呢。',
    );
    await daiya.say_and_wait('一起窥探未知的世界、一起发现新东西──');
    await daiya.say_and_wait('一起尝试新的体验，也一起寻找更开心的事情……');
    await daiya.say_and_wait(
      '只是稍微回想一下就充满了很多美好的回忆。……然后我就明白了。',
    );
    await daiya.say_and_wait('有训练员在身边的时候……所有的兴奋都是加倍的！');
    await daiya.say_and_wait(
      '所以，不论多久我都会一直等下去的♪等到你愿意跟我一起感受那个紧张跟刺激为止！',
    );
    era.printButton('「我还没做好心理准备……」', 1);
    era.printButton('「好，我们去玩吧！」', 2);
    era.printButton('「要不要找其他的冒险来做？」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('好的──我知道了♪');
      await era.printAndWait(
        `然而 ${me.name} 却始终下不了决心。终于拖到了快到门禁的时间……`,
      );
      await daiya.say_and_wait('那我们……回去吧！');
      era.printButton('「没关系吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '没关系的。其实我的个性是会把喜欢的东西留到最后再吃的那种。',
      );
      await daiya.say_and_wait('所以呢，等将来的某一天我们再一起体验吧♪');
      await era.printAndWait(
        `等到那天来临时，${me.name} 一定要努力鼓起勇气。为了${daiya.sex}的笑容，${me.name} 在心里这么发誓！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    } else if (ret === 2) {
      await daiya.say_and_wait('哇～我就等你说这句话呢！走吧、走吧！');
      await era.printAndWait('咖当咖当咖当咖当……咻──────！');
      await daiya.say_and_wait('呀啊啊啊──────！');
      era.printButton('「天堂────────！！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '真的是非常厉害的体验呢，训练员！我刚才还看见了很漂亮的花海呢！',
      );
      await daiya.say_and_wait('……坐在最前面的位子不知道会看见什么呢！');
      await era.printAndWait(
        `${me.get_couple_title()} 一直重复排队，直到能坐最前面的位子，度过了既好玩又累到头昏眼花的一天！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    } else {
      await daiya.say_and_wait(
        '哎呀，这个主意不错呢！其实其他游乐设施我也很感兴趣喔♪',
      );
      await daiya.say_and_wait('旋转咖啡杯跟鬼屋……我们一起玩到最后一秒吧！');
      await daiya.say_and_wait('快呀，训练员！我们第一站要去鬼屋喔～');
      await daiya.say_and_wait('我看看喔──最恐怖的鬼屋……“地狱”！');
      await era.printAndWait(
        `即使没有玩云霄飞车，${me.name} 还是和里见光钻一起度过了快乐的时光！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
    }
  } else if (edu_weeks === 95 + 1) {
    await print_event_name('新年参拜', daiya);
    await daiya.say_and_wait('新年快乐。欢迎来参加“新年派对”！');
    await era.printAndWait(
      `新年。受到里见光钻的邀约，${me.name} 来到里见集团举办的新年派对。`,
    );
    await era.printAndWait(
      '那似乎是为了让里见家的人和集团相关人士方便在新年互相拜年而举办的。',
    );
    await daiya.say_and_wait(
      '派对才刚开始就打扰你真是不好意思，但我的父母亲都希望能和训练员打声招呼。',
    );
    await era.printAndWait('光钻的父亲「新年快乐。光钻承蒙你照顾了。」');
    await era.printAndWait(
      '光钻的父亲「小女在去年的经典级赛事当中，达到超乎预期的表现。这一切都归功于训练员的教导。」',
    );
    await era.printAndWait(
      '光钻的父亲「证明当初光钻的直觉果然没有错──之后的古马级赛事也要麻烦你了。」',
    );
    era.printButton(
      `「好的。我一定会引导她成为“知名赛${daiya.get_uma_sex_title()}”」`,
      1,
    );
    await era.input();
    await era.printAndWait('光钻的父亲「嗯，我很期待。」');
    await daiya.say_and_wait(
      '我接下来还要去跟大家打招呼，那就先稍微失陪一下了喔。',
    );
    await daiya.say_and_wait('请训练员随意放松，好好享受一番吧。');
    await era.printAndWait(
      `里见光钻的双亲在里见家也算是核心人物。因此身为${
        daiya.sex_code - 1 ? '女儿' : '儿子'
      }的${daiya.sex}似乎也很忙碌。`,
    );
    await era.printAndWait(
      '光钻的前训练员「光钻，新年快乐！你在闪耀系列赛表现得很好呢！」',
    );
    await era.printAndWait(
      '光钻的前医师「呵呵呵，原本还这么小的光钻现在也已经有很好的成就了，每次看比赛的时候我都很感慨呢。」',
    );
    await daiya.say_and_wait('新年快乐。训练员、医师，好久不见了。');
    await daiya.say_and_wait(
      '托你们的福我才能有今天。跑步的基础也都是经由训练员你们帮我奠定的。我真的由衷地感谢。',
    );
    await era.printAndWait(
      '光钻的前训练员「其实我现在都跟我的学生炫耀，说我曾经是光钻的训练员呢！学生们听了都觉得很佩服喔！」',
    );
    await daiya.say_and_wait(
      '哎呀，呵呵呵。那我真是深感光荣♪但训练员明明在指导我之前，就已经是广为人知的好训练员了。',
    );
    await daiya.say_and_wait(
      '医师在营养学界也是德高望重的教授。能够得到两位如此优秀人才的指导，我才是因此令人称羡呢。',
    );
    await era.printAndWait(
      '光钻的前医师「哎呀，真会说话。已经完全是担得起里见集团招牌的气度了。」',
    );
    await daiya.say_and_wait('哪里，我还差得远呢。');
    await daiya.say_and_wait(
      `我还在努力钻研身为“知名赛${daiya.get_uma_sex_title()}”应该要有的样子。`,
    );
    await era.printAndWait(
      `光钻的前训练员「成为了知名赛${daiya.get_uma_sex_title()}……就代表国外远征也会在计划范围内啰？」`,
    );
    await era.printAndWait(
      '运动产品公司的业务员「如果有国外远征的计划，敝公司能为您准备适合国外使用的训练机器及运动鞋喔。」',
    );
    await era.printAndWait(
      '运动产品公司的业务员「也能为光钻小姐开发量身打造的产品。需要时请随时吩咐。」',
    );
    await daiya.say_and_wait(
      '贵公司之前为我们打造的训练机器，我在家的时候还是很爱用呢。',
    );
    await daiya.say_and_wait('需要新机器的时候，能再麻烦贵公司帮忙开发吗？');
    await era.printAndWait(
      '运动产品公司的业务员「当然没问题。光钻小姐是里见集团之星。敝公司一定会为您尽最大的努力。」',
    );
    await daiya.say_and_wait('谢谢。那我近期再和贵公司联络♪');
    await era.printAndWait(
      '优秀的训练员、一流的医师，加上运动产品公司的协助……',
    );
    await era.printAndWait(
      `里见光钻从小就在资源丰富的环境下长大。这也来自于${daiya.sex}背负众多期待的关系吧。`,
    );
    await era.printAndWait(
      `相对地，${daiya.sex}所背负的责任也更为沉重。${daiya.sex}必须用实际的成绩来报答所受的恩惠。与期望相随的是无法躲避的责任。`,
    );
    era.printButton(
      `──资深级的这一年，我一定要和${daiya.sex}一起创下名为胜利的结果！`,
      1,
    );
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `新年派对结束后，${me.name} 和里见光钻一起去新年参拜。`,
    );
    await daiya.say_and_wait('──训练员，你许愿许得真久呀。');
    era.printButton('「因为我要向神明表明决心嘛」', 1);
    await era.input();
    await daiya.say_and_wait('是跟我的比赛有关的事情吗？');
    era.printButton('「当然」', 1);
    await era.input();
    await daiya.say_and_wait('那样的话，我原本也想一起向神明表明决心的说……');
    await daiya.say_and_wait(
      '不过因为意外看见了训练员认真的表情，所以就不计较了♪呵呵呵！',
    );
    await daiya.say_and_wait('那么，接下来的时间……训练员有什么打算吗？');
    await daiya.say_and_wait('不介意的话，我想要知道训练员都是怎么过新年的！');
    await daiya.say_and_wait('因为我家和小北家，都一定会办人数很多的宴会。');
    await daiya.say_and_wait(
      '所以我想要了解除了办派对跟宴会以外，还有什么其他过新年的方式！请让我和你一起过吧！',
    );
    await era.printAndWait(
      '本来以为只是口头叙述过新年的方式就好，没想到不知不觉间就变成要一起过新年了。',
    );
    await era.printAndWait(`说到过新年，${me.name} 一直以来都会做的事情是──`);
    era.printButton('「躺过年」', 1);
    era.printButton('「买福袋」', 2);
    era.printButton('「写新年抱负」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait(
        '……这么早就要睡了吗？是为了练习做新年美梦之类的吗──',
      );
      await era.printAndWait(
        '我向她说明虽然有些人会真的睡觉，但其实也代表不出门，在家悠闲度过的意思。',
      );
      await daiya.say_and_wait(
        '哎呀，刚过新年就在家懒懒散散的吗……有种会充满罪恶感的感觉呢♪那我们就一起躺过年吧！',
      );
      await era.printAndWait(
        `${me.get_couple_title()} 决定一起在训练员室里，一边吃零食，一边看新年特别节目。`,
      );
      await daiya.say_and_wait(
        '……这些人明明是参加巴士之旅，却几乎都在走路呢……',
      );
      await daiya.say_and_wait('哇啊！这个鳗鱼饭看起来好好吃……！');
      era.printButton('「看了真的会想吃呢」', 1);
      await era.input();
      await daiya.say_and_wait(
        '今天好像也有营业的样子，不如我们就叫外送来吃吧。',
      );
      era.printButton('「这可不是能外送过来的距离耶！？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '没问题的，毕竟我和训练员都这么努力，这点小任性，父亲还是会愿意听的♪',
      );
      await era.printAndWait(
        `于是──${me.get_couple_title()} 一起享用了用新干线外送过来的美味鳗鱼饭。`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(
        67,
        undefined,
        0,
        JSON.parse('{"体力":300}'),
      );
    } else if (ret === 2) {
      await daiya.say_and_wait('福袋！那个真的会让人充满期待呢！我也想要买！');
      await era.printAndWait(
        `为了买福袋，${me.name} 和里见光钻一起来到购物中心。`,
      );
      await daiya.say_and_wait(
        '要挑哪一家店好呢……哎呀，还有食物跟茶的福袋呢。',
      );
      era.printButton('「要选那个看看吗？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '如果是食物的话，就算拿到自己不喜欢吃的，也能拿去分送给其他人。那我们就挑那个吧！',
      );
      await daiya.say_and_wait(
        '好多人排队呢……感觉还要等一段时间，等的时间干脆来玩观察力问答游戏吧。',
      );
      await daiya.say_and_wait('我们来猜路过的行人会走进去哪一间店！');
      era.printButton('「好！」', 1);
      await era.input();
      await daiya.say_and_wait(
        '那就从那边那位身穿羽绒外套的男性开始。我猜他会走进咖啡厅！',
      );
      era.printButton('「我猜他应该是要去楼上的书店」', 1);
      await era.input();
      await daiya.say_and_wait(
        '…………啊，他走进咖啡听了！呵呵呵，是我猜对了呢♪因为他刚才看起来很疲倦的样子。',
      );
      await daiya.say_and_wait(
        '玩游戏让时间过得好快呢。好了，我们就赶快回去开福袋吧！',
      );
      await era.printAndWait(
        `${me.get_couple_title()} 一起度过了愉快的排队时间，也顺利买到了福袋！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, new Array(5).fill(10), 0);
    } else {
      await daiya.say_and_wait(
        '写新年抱负吗……既然如此的话，那我想要写一幅大张的！',
      );
      era.printButton('「你是说书法表演艺术吗？」', 1);
      await era.input();
      await daiya.say_and_wait('是的！大毛笔跟宣纸我会请家里的人去帮忙买！');
      await era.printAndWait(
        `所幸过年时间没有人在使用，让 ${me.get_couple_title()} 借到了体育馆，来完成书法表演艺术。`,
      );
      await daiya.say_and_wait(
        '嗯……不先模拟好要怎么写的话，感觉会拿捏不了比例呢。',
      );
      await era.printAndWait(
        `里见光钻在宣纸前仔细地模拟一番后，开始用几乎和${daiya.sex}同高的毛笔一鼓作气地写字。`,
      );
      await daiya.say_and_wait('嘿呀啊啊啊啊啊啊！喝！嘿呀！嘿！');
      await daiya.say_and_wait('呼────！我写得怎么样呢？训练员！');
      await era.printAndWait(
        `于是，${daiya.sex}用非常优美的字体，写出了“成就宿愿”四个大字！`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, undefined, 70);
    }
    era.set('flag:67:节日事件标记', 0);
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};
