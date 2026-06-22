/**
 * @file 里见光钻 - 招募
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} kita
   * @param {CharaTalk} you
   */
  async rec_playground(daiya, kita, you) {
    const ret = [];
    await era.printAndWait(
      `中坚训练员A「终于……『${daiya.sex}』终于要参加模拟赛了。我看这下才刚过年，肯定就要造成不小的骚动啰！」`,
    );
    await era.printAndWait(
      '──新年假期过后。在体育馆举办的训练员会议当中，同事们都在议论纷纷。',
    );
    await era.printAndWait([
      '没错，明天就是『那位',
      daiya.sex_code === 1 ? '少爷' : '千金',
      '』终于要参加模拟赛的日子。究竟谁会成为',
      daiya.sex,
      '的训练员……？',
    ]);
    await daiya.say_and_wait(
      '今天就请各位多多指教了。然后……小北，也请多多指教。谢谢你特地过来♪',
    );
    await kita.say_and_wait(
      '嘿嘿嘿！这可是小钻要首次大展身手的比赛，我怎么可能不赶来呢！',
    );
    await kita.say_and_wait('身为比你先出道的人，有什么问题就尽管问我吧！');
    await daiya.say_and_wait(
      '呵呵，还请手下留情……我本来是想这么说的～但小北从来没在比赛的时候对我放水过吧？',
    );
    await kita.say_and_wait(
      '嗯！我跑步的时候一直都很认真！尤其当对手是小钻的时候！',
    );
    await era.printAndWait([
      '今天的主角，是知名的里见集团千金 ',
      daiya.get_colored_name(),
      '。而最有力的对手，是',
      daiya.sex,
      '那很会照顾人的挚友 ',
      kita.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('里见光钻的才能究竟如何？这场比赛的序幕就此揭开。');
    await kita.say_and_wait(
      '喝啊啊啊啊啊！好，我的火力全开冲刺跑法成功了！就这样一路领先到最后吧！',
      true,
    );
    await kita.say_and_wait(
      `不过……小钻${daiya.sex}应该是追得上来的吧。毕竟${daiya.sex}总是能够追在我身后的嘛！`,
      true,
    );
    await daiya.say_and_wait(
      '已经被拉开这么大的距离了！？真不愧是小北……',
      true,
    );
    await daiya.say_and_wait(
      '而且好多选手都围在我身边……唔，是故意靠过来的吗！？唔唔，左右两侧的前方都被挡住了……不过……！',
      true,
    );
    await daiya.print_and_wait(
      '（年幼的光钻「父亲、母亲，光钻答应你们。我一定会实现里见家的梦想！」）',
    );
    await daiya.say_and_wait(
      '我一直都在为了这一天做准备。跟着好多老师学习、做了好多的研究、背负着好多的──期望！',
      true,
    );
    await daiya.say_and_wait(
      '我还要继续忍耐。时机还没到──我想冲刺，想冲到前面……但我要耐心观察局势……',
      true,
    );
    await kita.say_and_wait(
      '好，到最后的弯道了……！我这样是不是有点跑太快啦？毕竟是照我自己的步调一路跑到这里，就算是小钻也……',
      true,
    );
    await daiya.say_and_wait(
      `──！！${kita.sex}的速度慢下来了！就是现在──！！`,
      true,
    );
    await daiya.say_and_wait('呀啊啊啊啊啊啊啊啊啊啊啊啊啊！！');
    await kita.say_and_wait('什么？咦咦咦咦咦咦咦！？');
    await era.printAndWait('训练员们「唔喔喔喔喔喔喔喔喔喔喔喔！！」');
    await era.printAndWait(
      `中坚训练员A「居然以鼻差的距离……跑赢了北部玄驹！？都还没正式出道呢。${daiya.sex}果然很厉害呢！」`,
    );
    await era.printAndWait(
      '新人训练员A「这可谓是钻石级的人才……！请、请一定要和我签约……！」',
    );
    await daiya.say_and_wait(
      '咦，这、这是怎么了？怎么聚集了这么多人？……小北？',
    );
    await kita.say_and_wait(
      '哪有为什么，他们都是想要成为小钻训练员的人啊！唉──主角锋头全被你抢走了，都不知道该开心还是该不甘心～',
    );
    await daiya.say_and_wait(
      '都是想成为我训练员的人……！原来是这样呀！没想到竟然有这么多人来看我比赛。',
    );
    await daiya.say_and_wait(
      '──我深感光荣，谢谢大家。我要好好地努力，更加精进自己才行呢。',
    );
    await era.printAndWait(
      `${daiya.sex}的表现非常优秀。精准地掌握到进攻时机，并正确地搭配自身爆发力的特长……`,
    );
    await era.printAndWait(
      '可说是集天分和菁英教育的结晶。虽然也有注意到一些菁英特有的弱点……但就连弱点都能视为成长的空间。',
    );
    await kita.say_and_wait(
      '啊，你也是训练员吧？看你看得很投入的样子，小钻是不是很厉害啊？',
    );
    await kita.say_and_wait(
      `虽然${daiya.sex}从小就跑得很快，但最近进化得更加利落了！我个人是非常看好跟推荐${daiya.sex}的喔。`,
    );
    await kita.say_and_wait('怎么样，要不要去尝试一下呢？');
    era.printButton('试试就试试', 1);
    era.printButton('溜了溜了', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await daiya.say_and_wait(
        '哎呀？是刚才跟小北在看台上看起来相谈甚欢的那位？',
        true,
      );
      await daiya.say_and_wait('似乎很想跟我说些什么的样子……', true);
      await daiya.say_and_wait('训练员，请你告诉我，你对我的表现有何看法？');
      await era.printAndWait(
        `${you.name} 要是拒绝回答就太失礼了。${you.name} 决定先如实地赞赏${daiya.sex}的才能──并将 ${you.name} 认为${daiya.sex}接下来需要克服的问题告诉${daiya.sex}。`,
      );
      era.printButton('「首先，你认真与人竞争的经验还不够」', 1);
      await era.input();
      await daiya.say_and_wait('认真竞争……？那指的是什么样的……？');
      await you.say_and_wait('在比赛时，你是不是因为四周的压力而苦恼？');
      await daiya.say_and_wait(
        '啊，我在模拟赛的时候……确实感受到迷惘没错。那种从来不曾感受过的被锁定的焦虑，让我有种无法自由发挥的感觉。',
      );
      await daiya.say_and_wait(
        '但我从小就都有跟一起训练的人交待过，『并跑练习的时候一定不能对我放水』。',
      );
      await you.say_and_wait('即便如此，大家还是对你有顾忌吧');
      await daiya.say_and_wait(
        '原、原来如此～这我还真的没有想过……！所以我才会从其他选手身上感受到压力……！',
      );
      await you.say_and_wait('还有一个问题，那就是你太容易失去冷静了');
      await daiya.say_and_wait(
        '咦……失去冷静？这好像是第一次有人这样跟我说……那是指怎么一回事呢？',
      );
      await era.printAndWait(
        `${you.name} 把自己在比赛中观察到的事情告诉${daiya.sex}。比赛中期，还需要忍耐的时候，会因为跟一旁选手的竞争而加快步调。`,
      );
      await era.printAndWait(
        `那就是失去冷静而导致的。那是藏在${daiya.sex}千金身份底下，${daiya.sex}最真实的个性。`,
      );
      await daiya.say_and_wait(
        '──！？那时候我的确因为想要到更前面的位置，脚一直蠢蠢欲动的……',
      );
      await daiya.say_and_wait(
        '但我还是立刻就忍下来了。明明有忍住的……仅仅一瞬间的步调加快，你却……',
      );
      await daiya.say_and_wait(
        '你……到底是何方神圣呢？仅仅一场比赛就让你对我的状况了若指掌……',
      );
      await you.say_and_wait('那是因为我真的被你的表现给深深吸引住了');
      await era.printAndWait(
        `因为深受吸引，所以才能瞬间就看到${daiya.sex}的长处与短处。虽然 ${you.name} 对${daiya.sex}的家族不了解，却瞬间就看透了${daiya.sex}的本质。`,
      );
      await daiya.say_and_wait('──录取了。');
      era.printButton('「……咦？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '录取了！你就是……你就是我的训练员！是我一直在寻找的唯一的存在。所以录取了！',
      );
      await kita.say_and_wait(
        '等、等一下……小钻家是要用征选的方式来来决定训练员的喔？',
      );
      await daiya.say_and_wait(
        '不，我已经决定了。就算是被小北劝说，唯独这件事，我是绝不会改变心意的。',
      );
      await daiya.say_and_wait(
        `我的训练员就是${you.sex}！只有${you.sex}能胜任。虽然照理说这件事应该需要慎重商量，但──`,
      );
      await daiya.say_and_wait(
        '需要获得全家族的同意──一定也是个魔咒。那不如相信直觉，破除这个魔咒！无论谁说什么，你就是我的训练员！',
      );
      await daiya.say_and_wait(
        '决定了，我已经决定好了。你会接下这份工作吧？对吧？会吧？',
      );
      await era.printAndWait(
        `有别于文静千金的印象，${daiya.sex}的态度相当坚定。在 ${you.name} 点头答应之前，里见光钻迟迟不肯松开 ${you.name} 的手。`,
      );
      era.println();
      await era.printAndWait('于是你和里见光钻的三年开始了！', {
        color: daiya.color,
        fontSize: '1.5rem',
      });
    } else {
      await era.printAndWait(
        `${you.name} 一边看着远处的里见光钻，一边听${daiya.sex}挚友北部的大力推荐。最顶级的贵重人才。将来有着无限的可能。不过……`,
      );
      await era.printAndWait(
        '──同时也是高不可攀的对象、大财团的千金。不是普通的训练员可以光凭热情就随意靠近的存在。',
      );
      await daiya.say_and_wait(
        `哎呀？跟小北在看台上看起来相谈甚欢的那位，${you.sex}是……`,
        true,
      );
      await daiya.say_and_wait(
        `看起来……没有要过来的意思？但似乎又很想跟我说些什么的样子，而且${you.sex}给人的感觉很不一样……`,
        true,
      );
      await era.printAndWait(
        '教官A「好了，到此为止！就先这样吧，各位训练员。关于里见光钻的签约训练员……」',
      );
      await era.printAndWait(
        '教官A「会在选拔赛之后，由里见集团亲自举办训练员征选。有兴趣的人请务必参加。」',
      );
      await kita.say_and_wait(
        '是、是喔……小钻家是要用征选的方式来决定训练员喔。训练员，你也会去参加对吧？',
      );
      era.printButton('还是参加吧', 1);
      era.printButton('溜了溜了', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `或许是由于犹豫了太久，${you.name} 的顺序被排到了最后一位`,
        );
        await era.printAndWait(
          '里见集团的审查员「接下来是报名编号No.29。最后一位征选者，请进。」',
        );
        await daiya.say_and_wait(
          '哎呀？是之前跟小北在看台上看起来相谈甚欢的那位？',
          true,
        );
        await daiya.say_and_wait('训练员，请你告诉我，你对我的表现有何看法？');
        await era.printAndWait(
          `${you.name} 决定先如实地赞赏${daiya.sex}的才能──并将 ${you.name} 认为${daiya.sex}接下来需要克服的问题告诉${daiya.sex}。`,
        );
        era.printButton('「首先，你认真与人竞争的经验还不够」', 1);
        await era.input();
        await daiya.say_and_wait('认真竞争……？那指的是什么样的……？');
        await you.say_and_wait('在比赛时，你是不是因为四周的压力而苦恼？');
        await daiya.say_and_wait(
          '啊，我在模拟赛的时候……确实感受到迷惘没错。那种从来不曾感受过的被锁定的焦虑，让我有种无法自由发挥的感觉。',
        );
        await daiya.say_and_wait(
          '但我从小就都有跟一起训练的人交待过，『并跑练习的时候一定不能对我放水』。',
        );
        await you.say_and_wait('即便如此，大家还是对你有顾忌吧');
        await daiya.say_and_wait(
          '原、原来如此～这我还真的没有想过……！所以我才会从其他选手身上感受到压力……！',
        );
        await you.say_and_wait('还有一个问题，那就是你太容易失去冷静了');
        await daiya.say_and_wait(
          '咦……失去冷静？这好像是第一次有人这样跟我说……那是指怎么一回事呢？',
        );
        await era.printAndWait(
          `${you.name} 把自己在比赛中观察到的事情告诉${daiya.sex}。比赛中期，还需要忍耐的时候，会因为跟一旁选手的竞争而加快步调。`,
        );
        await era.printAndWait(
          `那就是失去冷静而导致的。那是藏在${daiya.sex}千金身份底下，${daiya.sex}最真实的个性。`,
        );
        await daiya.say_and_wait(
          '──！？那时候我的确因为想要到更前面的位置，脚一直蠢蠢欲动的……',
        );
        await daiya.say_and_wait(
          '但我还是立刻就忍下来了。明明有忍住的……仅仅一瞬间的步调加快，你却……',
        );
        await daiya.say_and_wait(
          '你……到底是何方神圣呢？仅仅一场比赛就让你对我的状况了若指掌……',
        );
        await you.say_and_wait('那是因为我真的被你的表现给深深吸引住了');
        await era.printAndWait(
          `因为深受吸引，所以才能瞬间就看到${daiya.sex}的长处与短处。虽然 ${you.name} 对${daiya.sex}的家族不了解，却瞬间就看透了${daiya.sex}的本质。`,
        );
        await daiya.say_and_wait('──录取了。');
        era.printButton('「……咦？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '录取了！你就是……你就是我的训练员！是我一直在寻找的唯一的存在。所以录取了！',
        );
        await daiya.say_and_wait(
          `我的训练员就是${you.sex}！只有${you.sex}能胜任。虽然照理说这件事应该需要慎重商量，但──`,
        );
        await daiya.say_and_wait(
          '需要获得全家族的同意──一定也是个魔咒。那不如相信直觉，破除这个魔咒！无论谁说什么，你就是我的训练员！',
        );
        await daiya.say_and_wait(
          '决定了，我已经决定好了。你会接下这份工作吧？对吧？会吧？',
        );
        await era.printAndWait(
          `有别于文静千金的印象，${daiya.sex}的态度相当坚定。在 ${you.name} 点头答应之前，里见光钻迟迟不肯松开 ${you.name} 的手。`,
        );
        era.println();
        await era.printAndWait('于是你和里见光钻的三年开始了！', {
          color: daiya.color,
          fontSize: '1.5rem',
        });
      } else {
        await kita.say_and_wait('咦……？训练员？');
        await era.printAndWait(
          '仔细思考一番后……还是决定不参加征选了。──毕竟自己实在是配不上人家。',
        );
        await era.printAndWait(
          '里见集团的审查员「接下来是报名编号No.28。最后一位征选者，请进。」',
        );
        await daiya.say_and_wait('嗯……这位就是最后一位……也就是说……', true);
        await daiya.say_and_wait(
          '结果当时的那位训练员没有来。那位看起来想跟我说些什么的人……为什么……',
          true,
        );
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} you
   */
  async try_out(daiya, you) {
    era.setVerticalAlign('middle');
    era.printInColRows(
      {
        columns: [],
        config: { width: 2 },
      },
      {
        columns: [
          {
            config: {
              fontSize: '1.75rem',
              fontWeight: 'bold',
            },
            content: '？？？',
            type: 'text',
          },
          {
            config: { color: daiya.color, fontSize: '0.75rem' },
            content: '？？？',
            type: 'text',
          },
        ],
        config: { width: 16, verticalAlign: 'middle' },
      },
    );
    era.setVerticalAlign('top');
    era.println();
    await era.printAndWait(`${you.name} 仿佛听到了什么声音…………`);
    await daiya.say_as_unknown_and_wait('训练员，你 是 绝 对 逃 不 掉 的 哦？');
  },
  rec_out: (() => {
    const title = '便服派对';
    /**
     * @param {CharaTalk} daiya
     * @param {CharaTalk} mcqueen
     * @param {CharaTalk} kita
     * @param {CharaTalk} you
     */
    const f = async (daiya, mcqueen, kita, you) => {
      const ret = [];
      await era.printAndWait(
        `某天的体育馆里。代表目白家的其中一名赛${mcqueen.uma_sex_title}─目白麦昆在此发表声明。`,
      );
      await mcqueen.say_and_wait(
        '各位在校生，以及平时照顾我们的各位训练员。今天，目白家有事情要宣布。',
      );
      await mcqueen.say_and_wait(
        '不久之后，目白家要在自家举办敦睦交流的派对。希望大家可以穿着便服随意来参加。',
      );
      await era.printAndWait(
        '新人训练员A「哦～由目白家举办的便服派对啊。真的很感激他们经常主办各种活动呢。你也会去吧？」',
      );
      era.printButton('「嗯，会吧……」', 1);
      era.printButton('「还是算了」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          '新人训练员A「那到时候会场上见了。啊，对了，你知道吗？上次里见光钻的训练员征选的结果……」',
        );
        await era.printAndWait(
          '新人训练员A「──据说没有任何人获选。不知道他们接下来打算怎么办呢。」',
        );
        await era.printAndWait(
          `到了派对当天。${you.name} 在会场看见正热衷于多人游戏的里见光钻和北部玄驹。`,
        );
        await kita.say_and_wait(
          '咦咦咦，黑白棋是角落被占走就会输的游戏吧？那小钻怎么还下在那个位置啊！？',
        );
        await daiya.say_and_wait(
          '嗯，四个角落被占走就会输没错。既然大家都这么认为的话──',
        );
        await daiya.say_and_wait(
          '我就要破除这个魔咒！我一定会破除这个传说，成为赢家！',
        );
        await kita.say_and_wait(
          '唔哇，又开始了！小钻的破除魔咒模式！每次只要进入这种模式──',
        );
        await era.printAndWait(
          `对弈的结果──是里见光钻获得压倒性胜利。这让 ${you.name} 看见${daiya.sex}有别于文静千金的另外一面。`,
        );
        await era.printAndWait(
          `魔咒──看来她似乎遇到类似迷信的事物时就会想将之破除。正当 ${you.name} 在琢磨${daiya.sex}的个性时──`,
        );
        await daiya.say_and_wait(
          '那个……可以稍微打扰一下吗？我们曾经在赛场上见过面吧？',
        );
        era.printButton('「里见光钻……？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '你当时有来看我的模拟赛对吧？那个……我有点事情想要问问你～',
        );
        await daiya.say_and_wait(
          '训练员征选，你为什么没有来参加呢？我本来以为你会有兴趣的……',
        );
        await daiya.say_and_wait(
          '请问我不符合你期望的部分是什么呢？……是不是觉得我资质不够好呢？',
        );
        await you.say_and_wait('没有这回事喔。因为……！');
        await era.printAndWait(
          `${you.name} 忍不住说出了心中的想法。${you.name} 虽然觉得${daiya.sex}资质很好，但自己只是平凡的训练员，实在觉得高攀不起。`,
        );
        await daiya.say_and_wait('高攀不起……但这也只是……');
        await mcqueen.say_and_wait(
          '呵呵，提不起勇气这点我可以理解，但畏惧到这种程度就未免太过头了。',
        );
        await daiya.say_and_wait('啊，麦昆♪你好，来你家打扰了～！');
        await mcqueen.say_and_wait(
          '你好。里见，以及年轻的训练员，欢迎你们。介意我参与你们的话题吗？',
        );
        await mcqueen.say_and_wait(
          '里见集团的确是相当知名且规模庞大的企业，但也绝不是难以亲近的对象。会特地举办训练员征选──',
        );
        await mcqueen.say_and_wait(
          '也是因为他们『格外慎重』的关系。里见，我说得没错吧？',
        );
        await daiya.say_and_wait(
          '……是的，你说得没错。寻找合适的训练员，也等于是寻找一个能寄托我的梦想和里见家宿愿的人。',
        );
        await daiya.say_and_wait(
          `里见家──虽然还只是新兴企业，但对赛${daiya.uma_sex_title}竞赛文化抱持着深厚的情感，也希望能为将来的发展尽一份贡献。`,
        );
        await daiya.say_and_wait(
          '协助营运、慈善事业等等，我们在各方面都投注了努力，但我们的资历不比目白家，还未能做到『某个最重要的贡献』。',
        );
        await you.say_and_wait('最重要的贡献？');
        await daiya.say_and_wait(
          `是，也就是──『从我们家族里大量培育出能够赢得G1竞赛的知名赛${daiya.uma_sex_title}。`,
        );
        await mcqueen.say_and_wait(
          `这是赛${daiya.uma_sex_title}业界独有的文化。若能培育出大量知名赛${daiya.uma_sex_title}那将会成为任何事都难以取代，最重要的贡献呢。`,
        );
        await mcqueen.say_and_wait(
          `亲自背负这个重大期望的期待新星就是${daiya.sex}，这位里见光钻。训练员征选会，也是为了找到能够协助并支持${daiya.sex}的人而举办的。`,
        );
        await mcqueen.say_and_wait(
          '里见集团这么做不是为了要居高临下，而是他们真的非常迫切地需要这样的人，没错吧？里见。',
        );
        await daiya.say_and_wait(
          '……是的。一切都是为了完成家族的宿愿。所以我才想用各种方式，找到能和我一起背负这个梦想的人。',
        );
        await daiya.say_and_wait(
          '训练员，请你告诉我，你对我的表现有何看法？我真的很在意那天你有话想说的眼神。',
        );
        await era.printAndWait(
          `她的表情看起来非常认真。耿直的眼神，诉说着${daiya.sex}仅是为了实现目标而想知道答案……`,
        );
        await era.printAndWait(
          `${you.name} 要是拒绝回答就太失礼了。${you.name} 决定先如实地赞赏她的才能──并将${you.name}认为她接下来需要克服的问题告诉${daiya.sex}。`,
        );
        era.printButton('「首先，你认真与人竞争的经验还不够」', 1);
        await era.input();
        await daiya.say_and_wait('认真竞争……？那指的是什么样的……？');
        await you.say_and_wait('在比赛时，你是不是因为四周的压力而苦恼？');
        await daiya.say_and_wait(
          '啊，我在模拟赛的时候……确实感受到迷惘没错。那种从来不曾感受过的被锁定的焦虑，让我有种无法自由发挥的感觉。',
        );
        await daiya.say_and_wait(
          '但我从小就都有跟一起训练的人交待过，『并跑练习的时候一定不能对我放水』。',
        );
        await you.say_and_wait('即便如此，大家还是对你有顾忌吧');
        await daiya.say_and_wait(
          '原、原来如此～这我还真的没有想过……！所以我才会从其他选手身上感受到压力……！',
        );
        await you.say_and_wait('还有一个问题，那就是你太容易失去冷静了');
        await daiya.say_and_wait(
          '咦……失去冷静？这好像是第一次有人这样跟我说……那是指怎么一回事呢？',
        );
        await era.printAndWait(
          `${you.name} 把自己在比赛中观察到的事情告诉${daiya.sex}。比赛中期，还需要忍耐的时候，会因为跟一旁选手的竞争而加快步调。`,
        );
        await era.printAndWait(
          `那就是失去冷静而导致的。那是藏在${daiya.sex}千金身份底下，${daiya.sex}最真实的个性。`,
        );
        await daiya.say_and_wait(
          '──！？那时候我的确因为想要到更前面的位置，脚一直蠢蠢欲动的……',
        );
        await daiya.say_and_wait(
          '但我还是立刻就忍下来了。明明有忍住的……仅仅一瞬间的步调加快，你却……',
        );
        await daiya.say_and_wait(
          '你……到底是何方神圣呢？仅仅一场比赛就让你对我的状况了若指掌……',
        );
        await you.say_and_wait('那是因为我真的被你的表现给深深吸引住了');
        await era.printAndWait(
          `因为深受吸引，所以才能瞬间就看到${daiya.sex}的长处与短处。虽然 ${you.name} 对${daiya.sex}的家族不了解，却瞬间就看透了${daiya.sex}的本质。`,
        );
        await daiya.say_and_wait(
          '从来……从来都没有人对我说过这些话。就连那些来参加征选的人……而你却──',
        );
        await mcqueen.say_and_wait(
          '呵呵，恭喜你。这场派对让你遇到了一个好的人选呢。',
        );
        await mcqueen.say_and_wait(
          '里见，不如也让他参加征选看看？或许里见集团的其他人会看上他──',
        );
        await daiya.say_and_wait('──录取了。');
        era.printButton('「……咦？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '录取了！你就是……你就是我的训练员！是我一直在寻找的唯一的存在。所以录取了！',
        );
        await mcqueen.say_and_wait(
          '咦咦？里见！？你应该明白吧？你的训练员对里见集团来说是多慎重的一件事。',
        );
        await mcqueen.say_and_wait(
          '不应该凭感觉就这样仓促做决定！还是先回去跟大家好好商量──',
        );
        await daiya.say_and_wait(
          '不，我已经决定了。就算是被我尊敬的麦昆劝说，唯独这件事，我是绝不会改变心意的。',
        );
        await daiya.say_and_wait(
          `我的训练员就是${you.sex}！只有${you.sex}能胜任。虽然照理说这件事应该需要慎重商量，但──`,
        );
        await daiya.say_and_wait(
          '需要获得全家族的同意──一定也是个魔咒。那不如相信直觉，破除这个魔咒！无论谁说什么，你就是我的训练员！',
        );
        await daiya.say_and_wait(
          '决定了，我已经决定好了。你会接下这份工作吧？对吧？会吧？',
        );
        await era.printAndWait(
          `有别于文静千金的印象，${daiya.sex}的态度相当坚定。在 ${you.name} 点头答应之前，里见光钻迟迟不肯松开 ${you.name} 的手。`,
        );
        era.println();
        await era.printAndWait('于是你和里见光钻的三年开始了！', {
          color: daiya.color,
          fontSize: '1.5rem',
        });
      } else {
        await era.printAndWait('因为有一种不详的预感，果然还是不要去了吧？');
        await era.printAndWait(
          `不过，在 ${you.name} 转身离开的时候，仿佛听到了什么声音…………`,
        );
        await daiya.say_as_unknown_and_wait(
          '训练员，你 是 绝 对 逃 不 掉 的 哦？',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
