/**
 * @file 荣进闪耀 - 育成
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '追加训练';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, festa, you) => {
      await era.printAndWait('荣进闪耀以出色的表现完成了这一次的训练目标。');
      await era.printAndWait(
        `本该就此可以休息的${flash.sex}，突然看到了正站在操场一旁的中山庆典。`,
      );
      await flash.say_and_wait('中山同学，你现在是在训练时间吗？');
      await era.printAndWait(
        `见后者此时一脸慵懒的表情，${flash.sex}好奇地问道。`,
      );
      await festa.say_and_wait('是啊……不过总觉得提不起干劲。');
      await era.printAndWait('中山庆典则耸了耸肩膀，回应道。');
      await flash.say_and_wait('提不起干劲？');
      await era.printAndWait('闻言，荣进闪耀的脸上浮现出一丝关切。');
      await flash.say_and_wait('是身体不舒服吗？');
      await festa.say_and_wait('才不是啊，单纯只是自顾自的训练不够刺激而已。');
      await flash.say_and_wait('刺激？');
      await era.printAndWait(
        `听到面前人的话，${flash.sex}若有所思地点了点头。`,
      );
      await flash.say_and_wait(
        '既然这样的话，那和我进行一场併走训练，你觉得如何呢？',
      );
      await festa.say_and_wait('併走？');
      await era.printAndWait(
        '听到荣进闪耀的提议，中山庆典的脸上一扫刚刚的懒散，转而露出感兴趣的微笑。',
      );
      await festa.say_and_wait('这倒是很有意思的方案。');
      await festa.say_and_wait('喂，那边的训练员。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `然后下一秒，${flash.sex}将目光投向 ${you.name}。`,
      );
      await festa.say_and_wait(
        `虽然我很想直接拉着荣进闪耀去痛快跑一场，但是${
          flash.sex
        }是你负责的担当${flash.uma_sex_title}吧？`,
      );
      await festa.say_and_wait('你的意见呢？');
      era.printButton('「去吧，闪耀。」', 1);
      era.printButton('「已经到休息时间了。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `既然荣进闪耀想要带给中山庆典一场热血沸腾的刺激比赛，那就如${flash.sex}所愿好了。`,
        );
        await era.printAndWait(
          `于是，${you.name} 向荣进闪耀挥手，示意${flash.sex}加油。`,
        );
        await flash.say_and_wait('嗯！');
        await era.printAndWait('见此，荣进闪耀点了点头。');
        await flash.say_and_wait('那么，我会全力以赴的，中山同学！');
        await festa.say_and_wait('哈哈！很好，就该这样！');
        await era.printAndWait('闻言，中山庆典也发出一声充满期待的哈哈大笑。');
        await era.printAndWait('就这样，两人奔赴赛道，认真进行着併走训练。');
      } else {
        await era.printAndWait(
          `荣进闪耀想要带给中山庆典一场热血沸腾的刺激比赛，虽然 ${you.name} 也希望能够如${flash.sex}所愿。`,
        );
        await era.printAndWait(
          '但是今天的运动量已经达标了，过度训练反而有可能导致身体出现问题。',
        );
        await era.printAndWait(`因此，${you.name} 对着荣进闪耀摇了摇头。`);
        await flash.say_and_wait('唔……');
        await era.printAndWait('见状，荣进闪耀面露遗憾之色。');
        await flash.say_and_wait('我知道了，过度训练确实不好呢。');
        await flash.say_and_wait(
          '既然这样的话，那中山同学，我们可以改天再来一起奔跑吗？',
        );
        await era.printAndWait(
          '就这样，荣进闪耀从身后拿出计划本，在与中山庆典约定好的日期上面，画上了一个圈。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async train_in_fat(flash) {
    await flash.say_and_wait('……诶？');
    await era.printAndWait(
      '某天，在例行的身体检查中，荣进闪耀发现体重秤上的数字相较于之前有所增长。',
    );
    await flash.say_and_wait('体重……增加了？');
    await era.printAndWait(`见此，${flash.sex}皱紧眉头。`);
    await flash.say_and_wait(
      '看来必须要在原定的行程表之外再添加额外的减肥计划了呢。',
    );
    await era.printAndWait(`想到这里，${flash.sex}点了点头。`);
    await era.printAndWait(
      '就这样，经过一段时间的锻炼，荣进闪耀的体重又回归了正常。',
    );
  },
  train_fail: (() => {
    const title = '好好休息';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait('荣进闪耀的训练失败了。');
      await flash.say_and_wait(
        '唔，是我不够注意……要是热身运动能做得更仔细一点的话……也许就能避免这个结果了。',
      );
      await era.printAndWait(`训练室内，${flash.sex}语气低落地说道。`);
      await flash.say_and_wait('现在这样的话，之后的计划就有被推迟的可能了。');
      era.printButton('「别着急，先好好休息吧。」', 1);
      era.printButton('「不要勉强自己，先好好休息吧。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait('心急吃不了热豆腐，在运动上这个道理同样适用。');
        await era.printAndWait('只劳不逸终究会失衡，最后导致更为糟糕的结果。');
        await flash.say_and_wait('唔……');
        await era.printAndWait(
          `荣进闪耀当然也明白这份道理，于是${flash.sex}在沉默片刻之后，缓缓点头。`,
        );
        await flash.say_and_wait('我知道了，那就按照您的建议，先好好休息吧。');
      } else {
        await era.printAndWait('心急吃不了热豆腐，在运动上这个道理同样适用。');
        await era.printAndWait('一味的勉强自己只会让情况变得更加糟糕。');
        await flash.say_and_wait('唔……');
        if (!fail_again) {
          await era.printAndWait(
            `荣进闪耀当然也明白这份道理，于是${flash.sex}在沉默片刻之后，缓缓点头。`,
          );
          await flash.say_and_wait(
            '虽然我并不认为这是一种勉强。不过您说的也对呢。',
          );
          await flash.say_and_wait('那就按照您的建议，先好好休息吧。');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '不要胡来';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait('荣进闪耀的训练失败了。');
      await flash.say_and_wait('Autsch……');
      await flash.say_and_wait('真是非常抱歉，没有想到我竟然会受伤……');
      await era.printAndWait(`保健室内，${flash.sex}语气歉意地说道。`);
      await flash.say_and_wait('不过，不能因为这种小伤就变更行程。');
      await era.printAndWait(
        `然后下一秒，${flash.sex}又摇了摇头，准备重整旗鼓。`,
      );
      await flash.say_and_wait(
        '幸好伤势的程度在可以接受的范围内，相信只需要稍微休息一下就能继续训练。',
      );
      era.printButton('「先安心治疗吧。」', 1);
      era.printButton('「真的还能继续训练吗？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '虽然想要积极训练是件好事，但也不应该为此而勉强自己。',
        );
        await flash.say_and_wait(
          '但如果在这里浪费太多时间的话，接下来的计划就有被推迟的可能……',
        );
        await era.printAndWait(
          `面对 ${you.name} 的提议，荣进闪耀的脸上浮现出犹豫之色。`,
        );
        era.printButton('「要是伤势恶化，情况就会变得更糟糕。」', 1);
        await era.input();
        await era.printAndWait(`见此，${you.name} 轻叹一口气，说道。`);
        await flash.say_and_wait('……');
        await era.printAndWait(`很明显，${you.name} 的话提醒了面前人。`);
        await era.printAndWait(
          `只见${flash.sex}垂下头，目光闪动，似乎是在思索其中的利害。`,
        );
        await flash.say_and_wait('我知道了……');
        await era.printAndWait(`片刻之后，${flash.sex}身体一松。`);
        await flash.say_and_wait(
          '您说的是呢，既然这样的话，那就暂时先安心治疗吧。',
        );
      } else {
        await era.printAndWait(
          '虽然想要积极训练是件好事，但只凭荣进闪耀现在的状态，是否有些太勉强了？。',
        );
        await flash.say_and_wait(
          '嗯，虽然高强度的运动暂时没有办法进行，不过轻度的耐力跑还是可以做到的。',
        );
        await era.printAndWait(`面对 ${you.name} 的疑惑，${flash.sex}自信道。`);
        if (fail_again) {
          await flash.say_and_wait('唔！');
          await era.printAndWait(
            `……然后下一秒，${you.name} 就看到${flash.sex}因为起身过猛而闷哼一声。`,
          );
          era.printButton('「还是好好治疗吧。」', 1);
          await era.input();
          await era.printAndWait(`见此，${you.name} 轻叹一口气。`);
          await flash.say_and_wait('是……');
          await era.printAndWait(
            '不可置疑的事实摆在眼前，即便心中再有不甘，荣进闪耀也只能低头接受。',
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '万事之始 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('终于到了荣进闪耀出道的时候。');
      await flash.say_and_wait('呼……距离比赛开始还有15分钟。');
      await era.printAndWait(
        `选手休息室内，${you.name} 看见荣进闪耀正在为比赛的开始做最后的准备工作。`,
      );
      era.printButton('「感觉紧张吗？」', 1);
      await era.input();
      await flash.say_and_wait('嗯。');
      await era.printAndWait(`有些出乎 ${you.name} 意料的，荣进闪耀点了点头。`);
      await flash.say_and_wait('紧张情绪的话，肯定是无法避免的。');
      await flash.say_and_wait(
        '因为接下来要面对的，是决定于能否踏上闪光系列赛这条道路的出道战，可谓是万事之始。',
      );
      await flash.say_and_wait(
        '无论再怎么去压抑自己的内心，肯定或多或少也会产生一些波动的吧？',
      );
      era.printButton('「这是很正常的现象。」', 1);
      await era.input();
      await flash.say_and_wait(
        '没错，所以紧张并不会影响之后会发生的事情。更何况……',
      );
      await era.printAndWait(
        `说到这里，${you.name} 突然看到荣进闪耀的脸上浮现出一丝微笑。`,
      );
      await flash.say_and_wait('一切都在遵循着计划前进，不是吗？');
      era.printButton('「！」', 1);
      await era.input();
      await flash.say_and_wait(
        `为了奔跑而进行的训练也好，为了比赛而学习的策略也好。我和 ${callname} 您从签订担当契约的那一刻开始，到今天为止一起经历了这么多的事情。`,
      );
      await flash.say_and_wait(
        '从这个角度来看，出道战，也只是检验我们成果的一场测试而已。',
      );
      era.printButton('「这样啊。」', 1);
      await era.input();
      await era.printAndWait(
        `看着表情胸有成竹的荣进闪耀，${you.name} 拍了拍${flash.sex}的肩膀，露出鼓励的眼神。`,
      );
      era.printButton('「那就将你的成绩，展现给赛场的所有人看吧。」', 1);
      await era.input();
      await flash.say_and_wait('是！');
      await era.printAndWait(
        `荣进闪耀用力点头，昂扬的战意在${flash.sex}的身上迸发。`,
      );
      await flash.say_and_wait('距离比赛开始还有10分钟，那么，我出发了。');
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '万事之始 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(`我回来了，${callname}。`);
      era.printButton('「比赛辛苦了。」', 1);
      await era.input();
      await flash.say_and_wait('呼……真是一场难忘的体验呢。');
      await era.printAndWait(
        '荣进闪耀长舒一口气，为自己缓解些许比赛带来的疲惫。',
      );
      await era.printAndWait(
        `紧接着，${you.name} 听到${flash.sex}发出一句真心感叹。`,
      );
      era.printButton('「难忘吗？」', 1);
      await era.input();
      await flash.say_and_wait(
        '是的，这就是正式比赛和训练赛的区别啊。果然只靠言语是无法感受到的呢。',
      );
      await era.printAndWait('说到这里，荣进闪耀满意地点了点头。');
      await era.printAndWait(
        `${you.name} 看得出来，得到全新收获的${flash.sex}对于这场比赛的过程很是享受。`,
      );
      era.printButton('「接下来准备做什么呢？」', 1);
      await era.input();
      await era.printAndWait('既然如此，那现在正是趁热打铁的好时机。');
      await flash.say_and_wait(
        '接下来的安排的话，果然还是按照计划里决定的那样吧。',
      );
      era.printButton('「计划啊。」', 1);
      await era.input();
      await era.printAndWait(
        '通过出道战来检验自己在中长距离赛道上的发挥，并为接下来参加经典级的经典三冠以及资深级的春秋三冠做好准备。',
      );
      await era.printAndWait(
        `总的来讲，这就是荣进闪耀为自己赛${flash.uma_sex_title}的生涯所做出的规划。可谓是想把一切能够拿到的荣誉都掌握在手中，光只是以文字的形式书写在纸面上都显得无比豪华。`,
      );
      await flash.say_and_wait('只是……');
      await era.printAndWait(
        `……不过，如果真的一切都如${flash.sex}所愿的话。那么到最后，应该也可以像${flash.sex}自己说的那样，以荣誉，让父母以${flash.sex}为傲吧。`,
      );
      await era.printAndWait(`想到这里，${you.name} 不禁在内心中为自己打气。`);
      era.printButton('「那我们，就一起加油吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await era.printAndWait(
        `荣进闪耀朝 ${you.name} 点了点头，${flash.sex}的脸上露出灿烂的笑容。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(
        `『Ich wünsche dir ein frohes neues Jahr!』祝您新年快乐，${callname}。`,
      );
      era.printButton('「新年快乐」', 1);
      await era.input();
      await era.printAndWait(
        `新年的第一天，训练室内，${you.name} 和荣进闪耀互相道贺了祝福。`,
      );
      await flash.say_and_wait('还请您收下这个。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `随后，${you.name} 看见${flash.sex}从身后拿出一盒包装精致的礼盒。`,
      );
      era.printButton('「这个是……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 接过荣进闪耀递来的礼物，在拆开之后，里面的内容物却让 ${you.name} 微微一愣。`,
      );
      era.printButton('「……带着眼球的粉色圆球型蛋糕？」', 1);
      await era.input();
      await flash.say_and_wait('呵呵呵～');
      await era.printAndWait(`荣进闪耀被 ${you.name} 的描述逗地轻笑了几声。`);
      await flash.say_and_wait(
        '虽然客观来讲您描述的很准确，但这可不是什么『带着眼球的粉色圆球型蛋糕』哦。',
      );
      await era.printAndWait(
        `紧接着，${flash.sex}竖起一根手指，开始为 ${you.name} 介绍起了这份礼物的具体含义。`,
      );
      await flash.say_and_wait('『Glücksbringer』，寓意为幸运的猪。');
      await flash.say_and_wait(
        '因为在德国，我们认为猪能够带来幸运和财富。所以新年到来之际，会将以猪为原型的礼物赠送给亲朋好友，用作祝福。',
      );
      era.printButton('「原来如此，那还真是很贵重的礼物啊。」（全属性+10）', 1);
      era.printButton(`「原来如此，所以这是猪啊。」（技能点数+70）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} 看向礼盒，虽然即便在听完荣进闪耀浅显易懂的解释之后，还是很难将其中的粉色状球体和 ${you.name} 印象中的那个猪联系在一起。`,
        );
        await era.printAndWait('不过无论如何，祝贺的心意都是无价的。');
        await era.printAndWait(
          `因此 ${you.name} 无比珍惜地将这份礼物收藏起来。`,
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
          `听到 ${you.name} 的话，荣进闪耀若有所思地点了点头。`,
        );
        await flash.say_and_wait(
          '……您说的对，所谓礼物，更看重的是其中蕴涵的『礼』，其次才是『物』本身。',
        );
      } else {
        await era.printAndWait(
          `虽然荣进闪耀的解释简单易懂，但 ${you.name} 看着礼盒里的粉色状球体，果然还是很难将它和 ${you.name} 印象中的那个猪联系在一起。`,
        );
        await flash.say_and_wait('唔。');
        await era.printAndWait(
          `听到 ${you.name} 这么说，荣进闪耀的脸上露出有些不好意思的表情。`,
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
          `见荣进闪耀的脸色有些低落，${you.name} 连忙拿起礼盒中附带的餐具，将圆球挖出一大个缺口。`,
        );
        await flash.say_and_wait('！');
        await flash.say_and_wait(`${callname}……呵呵～～`);
        await era.printAndWait(
          `见 ${you.name} 一口接着一口大快朵颐的模样，荣进闪耀的表情重新开始浮现出喜色。`,
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
        `荣进闪耀开口，为 ${you.name} 解释这份礼物中蕴涵着的来自${flash.sex}的心意。`,
      );
      await flash.say_and_wait(
        '皋月赏、日本德比、菊花赏……来自经典三冠的挑战近在咫尺。',
      );
      await era.printAndWait(
        `${you.name} 可以听出${flash.sex}的语气慢慢变得严肃。`,
      );
      await flash.say_and_wait(
        '为了达成梦想，为了可以让我的父母以我为荣，我必须要去做到。',
      );
      await flash.say_and_wait('所以……');
      await era.printAndWait(
        `不过就在 ${you.name} 挺直身体准备聆听闪耀的倾诉时。`,
      );
      await era.printAndWait('下一秒，气氛却又是突然一松。');
      await flash.say_and_wait(
        '我在这个幸运猪中倾注了能和您一起在这条荆棘丛生的道路上顺利且平安的走到最后的心愿。',
      );
      era.printButton('「闪耀……」', 1);
      await era.input();
      await era.printAndWait(
        `面对着向 ${you.name} 露出温柔笑容的荣进闪耀，${you.name} 想，${you.name} 已经不必再多说什么了。`,
      );
      era.printButton('「谢谢你。」', 1);
      await era.input();
      await era.printAndWait(
        `因此，${you.name} 郑重地点头，表示接收到了这份祝贺。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_keis_hai: (() => {
    const title = '意外之喜';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '京成杯，经典三冠之一皋月赏的前哨战，与后者有着相同的赛道和相同的距离。',
      );
      await era.printAndWait(
        '因此，荣进闪耀在制定计划之初，将它拿来作为踏上王道之路的提前演练，可谓是再合适不过的打算。',
      );
      await you.say_as_passer_by_and_wait(
        '路人A',
        '说起来今天的比赛，你比较看好哪位选手？',
      );
      await you.say_as_passer_by_and_wait(
        '路人B',
        `诶？这还用说吗，果然还是${flash.sex}吧。`,
      );
      await era.printAndWait(
        `不过令 ${you.name} 和${flash.sex}都有些没想到的是，在正式参加这场比赛之前，却还收获了一件意外之喜。`,
      );
      await you.say_as_passer_by_and_wait(
        '路人A',
        '是呢，毕竟那孩子之前的表现也很出色。',
      );
      await you.say_as_passer_by_and_wait(
        '路人B',
        `而且从参赛阵容上来看，也只能支持${flash.sex}不是吗？`,
      );
      await you.say_as_passer_by_and_wait(
        '路人A',
        `虽然这么说总感觉对其他的孩子不公平……嘛，总之，那我们待会就一起替${flash.sex}加油吧。`,
      );
      await you.say_as_passer_by_and_wait('路人B', '嗯嗯，加油！荣进闪耀！！');
      era.drawLine({ content: '比赛当天，选手休息室内' });
      await flash.say_and_wait('……真没想到，我会是第一人气呢。');
      await era.printAndWait(
        `面对今日报纸上的比赛预测，${you.name} 发现荣进闪耀的眉头微微紧皱。`,
      );
      era.printButton('「不开心吗？」', 1);
      await era.input();
      await flash.say_and_wait(
        '不，与其说是不开心，准确来讲只是心里的情感有些微妙。',
      );
      await flash.say_and_wait(
        '毕竟我能得到第一人气，很大一部分原因是由于参赛的其他选手不被看好……',
      );
      era.printButton(
        '「但换句话说，这也证明了他们对你抱有期待，不是吗？」',
        1,
      );
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `${you.name} 的话让荣进闪耀沉默了几秒。然后，${flash.sex}缓缓点头。`,
      );
      await flash.say_and_wait(
        '您说得对呢，如果自己的能力不出色的话，也没有办法吸引别人的目光。',
      );
      await flash.say_and_wait(
        '所以，为了不让这份期待落空，我必须竭尽全力去回应。',
      );
      await era.printAndWait(
        `说着，荣进闪耀的脸上流露出认真的表情。${you.name} 看得出来，${flash.sex}非常看重粉丝的期待。`,
      );
      await flash.say_and_wait('……不仅如此，我也要，去回应自己。');
      await flash.say_and_wait(
        '京成杯与皋月赏之间拥有相同的赛道与距离。换句话说，如果连这场比赛都发挥的不尽人意的话，那么之后的道路，只会更加坎坷。',
      );
      era.printButton('「尽人事，无愧于己。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！您说的没错。');
      await flash.say_and_wait(
        '我只需要将一切都做到最好，那么应得的结果，就会自然而然地落入我的手中。',
      );
      await flash.say_and_wait(`呼……好！我出发了，${callname}。`);
      era.printButton('「加油！」', 1);
      await era.input();
      await era.printAndWait('话毕，荣进闪耀带着自信的神态奔赴赛场。');
      await era.printAndWait(
        `${you.name} 看向${flash.sex}离去的背影，心想，至少这次的比赛，${flash.sex}的发挥肯定会非常可观。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_13: (() => {
    const title = '突如之灾';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     * @param {PrintedSpan} s_weak 荣进闪耀专属状态 [虚弱]
     */
    const f = async (flash, you, callname, s_weak) => {
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
        `学校保健室内，${you.name} 面带担忧地看着躺倒在病床上的荣进闪耀。`,
      );
      await flash.say_and_wait('……嗯。');
      await era.printAndWait(`${flash.sex}有些虚弱地点了点头。`);
      await flash.say_and_wait(
        '应该是昨天晚上6点外出购物时，由于出发前太过于相信天气预报的降雨概率而没有携带雨伞，结果半途中突然下起大雨使得全身湿透所导……咳咳——。',
      );
      await era.printAndWait('荣进闪耀的话还没有说完，就被剧烈的咳嗽打断了。');
      await era.printAndWait(
        `看得出来${flash.sex}病的相当严重，见此，${you.name} 轻叹一口气。`,
      );
      era.printButton('「要不然……下周的皋月赏，就不参加了吧？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 深知体弱的病人需要好好修养，避免高强度运动的道理。`,
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
        `${you.name} 看着突然激动起来，几欲起身的荣进闪耀，连忙示意${flash.sex}好好躺下休息。`,
      );
      await flash.say_and_wait('……得及……');
      await flash.say_and_wait('…………');
      await era.printAndWait('荣进闪耀沉默地躺回了床上。');
      await era.printAndWait(
        `十几秒之后，重新冷静下来的${flash.sex}才转头看向 ${you.name}。`,
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
        `荣进闪耀没有否认 ${you.name} 言语中的隐意，但即便如此，${flash.sex}也坚持着想要去参赛。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `见状，${you.name} 什么都没说，只是认真地盯着${flash.sex}此时和 ${you.name} 对视的眼睛。`,
      );
      await flash.say_and_wait('所以，拜托您，请允许我参加皋月赏。');
      await flash.say_and_wait('那是我为了实现梦想，而必须要去做的事情。');
      await era.printAndWait(
        `从那道目光中，${you.name} 读出了不屈的坚持与无论如何也要达成目的的执着。`,
      );
      era.printButton('「……好吧。如果到时候真的没有问题的话，那就去吧。」', 1);
      await era.input();
      await era.printAndWait(`最终，${you.name} 轻叹一口气，选择了退让。`);
      era.println();
      era.print([flash.get_colored_name(), ' 变得 ', s_weak, ' 了！']);
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '应行之事 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     * @param {boolean} win_keis_hai 荣进闪耀是否赢取京成杯
     */
    const f = async (flash, you, callname, win_keis_hai) => {
      await era.printAndWait('经典三冠比赛的第一战——皋月赏，终于来临了。');
      await you.say_as_passer_by_and_wait(
        '路人A',
        '关于这次的比赛，你想支持哪位选手？',
      );
      await you.say_as_passer_by_and_wait(
        `路人B`,
        `唔，本来最开始是打算支持荣进闪耀的，因为京成杯上${flash.sex}的发挥很亮眼。`,
      );
      await you.say_as_passer_by_and_wait(
        `路人A`,
        `荣进闪耀啊，但是听说${flash.sex}在前几天生了一场比较严重的病。虽然已经恢复，可在这种情况下参赛，发挥真的没有问题吗？`,
      );
      await you.say_as_passer_by_and_wait(
        '路人B',
        '没错，就是在担心这一点。皋月赏作为G1级重赏，无论是比赛的压力还是对手的强度，都远远超过了之前的京成杯。',
      );
      await you.say_as_passer_by_and_wait(
        `路人A`,
        `嗯，皋月赏的竞争太过激烈，都说唯有最快的赛${flash.uma_sex_title}才能赢下这场比赛。」`,
      );
      await you.say_as_passer_by_and_wait(
        '路人B',
        '是啊，再加上受病情影响，所以比较怀疑。现在的荣进闪耀，真的能够发挥出自己的全部实力吗？」',
      );
      era.drawLine();
      if (win_keis_hai) {
        await era.printAndWait(
          `主持人「让我们有请下一位选手登场，${flash.sex}就是今年京成杯的冠军，本场比赛的三番人气——荣进闪耀！！」`,
        );
      } else {
        await era.printAndWait(
          `主持人「让我们有请下一位选手登场，${flash.sex}就是在今年的京成杯上表现亮眼，本场比赛的三番人气——荣进闪耀！！」`,
        );
      }
      await flash.say_and_wait('………');
      await flash.say_and_wait('呼……');
      era.printButton('「闪耀？」', 1);
      await era.input();
      await era.printAndWait('皋月赏比赛当天，选手休息室。');
      await era.printAndWait(
        `${you.name} 看着眼前对于广播中的声音没有做出反应，只是低下头陷入思考的荣进闪耀，有些疑惑地呼唤道。`,
      );
      await flash.say_and_wait('啊。请放心，我没事。');
      await era.printAndWait('说着，荣进闪耀起身，然后摇了摇头。');
      await flash.say_and_wait(
        '只是稍微有些感慨呢，明明自认为在京成杯上的发挥不错，结果皋月赏这边的人气却完全没有体现出来这一点。',
      );
      era.printButton('「是因为受到了前几天生病的影响吧？」', 1);
      await era.input();
      await era.printAndWait(
        `至于产生这种现象的原因，${you.name} 自然心知肚明。`,
      );
      await era.printAndWait(
        '在上个星期，荣进闪耀因为淋雨受寒，出现了很严重的发烧现象。',
      );
      await era.printAndWait(
        `虽然经过几天的休养，${flash.sex}的身体得以顺利康复，并最终如愿参赛。`,
      );
      await era.printAndWait(
        '可即便如此，病痛带来的虚弱感却仍旧在其的身上纠缠。',
      );
      await era.printAndWait(
        '这种情况下，看好荣进闪耀在皋月赏的发挥的人大幅度减少，也是合情合理的事情。',
      );
      era.printButton('「总之，做好自己就好了。」', 1);
      await era.input();
      await era.printAndWait(
        `似乎是担心面前人会受此影响，${you.name} 宽慰道。`,
      );
      await flash.say_and_wait(
        '……是的，挑战经典三冠，是我必须要去执行的计划。',
      );
      await era.printAndWait(
        `听到 ${you.name} 的话，荣进闪耀沉默了一瞬。紧接着，${you.name} 看见${flash.sex}缓缓攥紧了自己的拳头。`,
      );
      await flash.say_and_wait('无论有无他人的支持，我都要坚持到最后。');
      era.printButton('「……行应行之事，尽应尽之力。」', 1);
      await era.input();
      await era.printAndWait(
        `荣进闪耀对于比赛过于看重的态度让 ${you.name} 隐隐皱眉，不过这对于目前的${flash.sex}来说也并非坏事。`,
      );
      await flash.say_and_wait(`嗯！那么，我准备出发了，${callname}。`);
      era.printButton('「注意安全。」', 1);
      await era.input();
      await era.printAndWait(
        `于是 ${you.name} 也只是对${flash.sex}挥了挥手，祝贺${flash.sex}平安。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_end: (() => {
    const title = '应行之事 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '虽然途中经历了一些波澜，不过经典三冠之一的皋月赏在此刻终于落下帷幕。',
      );
      await flash.say_and_wait(`我回来了，${callname}。`);
      await era.printAndWait(
        `眼见荣进闪耀平安无事地从赛场上归来，${you.name} 不禁松了一口气。`,
      );
      era.printButton('「辛苦了。」', 1);
      await era.input();
      await flash.say_and_wait('嗯，大体是按照计划中设想的那样奔跑了。');
      era.printButton('「确实是很精彩的比赛。」', 1);
      await era.input();
      await era.printAndWait(
        `即便拖着刚刚康复的身体，但${flash.sex}在这场比赛中的表现依旧可圈可点。这点毫无疑问，非常出色。`,
      );
      await flash.say_and_wait('呵呵～');
      await era.printAndWait(
        `听到 ${you.name} 的夸赞，荣进闪耀轻笑几声。此时的${flash.sex}，眼神中闪动着名为热切的光芒。`,
      );
      await flash.say_and_wait('下一场比赛，就是日本德比了呢。');
      await flash.say_and_wait(
        '必须要维持住现在的状态才行。更进一步的训练也要提上日程。',
      );
      await flash.say_and_wait(
        '还有比赛所需的策略以及参赛选手的相关资料也要提前准备。',
      );
      await flash.say_and_wait('以及……');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 看着眼前突然忙碌起来，为直到日本德比到来之前的未来做详细规划的荣进闪耀。`,
      );
      era.printButton(
        '「总之，日本德比固然重要，但在准备比赛之余留给自己适当的休息时间。」',
        1,
      );
      await era.input();
      await era.printAndWait(`深知劳逸结合道理的 ${you.name} 开口提醒道。`);
      era.drawLine();
      await flash.say_and_wait('日本达比……荣进闪耀……评价……');
      await era.printAndWait(
        `回到特雷森学园的高铁上，${you.name} 无意之中看见荣进闪耀拿出手机，在搜索栏中输入以上的三段词汇。`,
      );
      era.printButton('「在搜索人们对你的看法吗？」', 1);
      await era.input();
      await era.printAndWait(
        `片刻的思考后，${you.name} 明白了荣进闪耀此举的用意。`,
      );
      await flash.say_and_wait(
        '是的，在经过皋月赏的比赛之后，我很想知道人们对于我的看法会产生怎样的变化。',
      );
      await era.printAndWait(
        '说着，荣进闪耀打开网页中某个讨论激烈的论坛，映入眼帘的评论是——',
      );
      await you.say_as_passer_by_and_wait(
        '网友A',
        '皋月赏的发挥还真是意外啊，明明是在身体刚痊愈的情况下。',
      );
      await you.say_as_passer_by_and_wait(
        `网友B`,
        `这下有些期待${flash.sex}在日本德比上的表现了呢。`,
      );
      await you.say_as_passer_by_and_wait(
        `网友C`,
        `相比于皋月赏，日本德比的难度又会进一步的提高，不知道${flash.sex}到时候又会跑出什么样的成绩。`,
      );
      era.printButton('「看来大家都对你抱有期待呢。」', 1);
      await era.input();
      await era.printAndWait(`见此，${you.name} 微笑着说道。`);
      await flash.say_and_wait(
        `嗯……不过也不只是我，其他的参赛选手，论坛里的网友对于${flash.couple_title}也有着各种各样的支持理由。`,
      );
      await flash.say_and_wait(
        '可以理解呢。毕竟日本德比，无论对谁而言，都是特别的比赛吧？',
      );
      await flash.say_and_wait('所以……');
      await era.printAndWait(
        `说到这里，荣进闪耀突然深吸一口气，${flash.sex}的眼神在一瞬之间变得无比坚毅。`,
      );
      await flash.say_and_wait('必须要更加努力才行。');
      era.printButton('「闪耀……」', 1);
      await era.input();
      await flash.say_and_wait('日本德比的冠军，我一定要——收入囊中！');
    };
    f.title = title;
    return f;
  })(),
  ws_47_16: (() => {
    const title = '经验之谈 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} s_weak 荣进闪耀专属状态 [虚弱]
     */
    const f = async (flash, you, s_weak) => {
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
        `皋月赏结束后的第三天，荣进闪耀将一份修改过的计划表递给了 ${you.name}。`,
      );
      await era.printAndWait(
        `${you.name} 在仔细阅览之后，从上面挤得密密满满的文字中读出了高强度这几个大字。`,
      );
      era.printButton(
        '「我清楚日本德比对你的重要性，但这不是胡来的理由。」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} 简短地说出自己的意见。`);
      await era.printAndWait('可荣进闪耀在听完之后，却是摇了摇头。');
      await flash.say_and_wait(
        '不，您误会了。这并非胡来，而是我根据量变引起质变这一理论衍生出来的结果。',
      );
      era.printButton('「量变引起质变？」', 1);
      await era.input();
      await flash.say_and_wait('是的。');
      await era.printAndWait(`荣进闪耀伸出一根手指，为 ${you.name} 解释。`);
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
      await era.printAndWait(`荣进闪耀的话让 ${you.name} 陷入思考。`);
      await era.printAndWait(
        `诚然，${
          flash.sex
        }所说的这个训练方法 ${you.name} 确实有所耳闻。并且可以肯定的是，也在某些赛${flash.uma_sex_title}身上出现过奇效。`,
      );
      await era.printAndWait(
        `但是话又说回来，人和人之间的体质不能一概而论，${you.name} 并不清楚这种方式是否也同样的对荣进闪耀奏效。`,
      );
      await era.printAndWait(
        `而为了这种未知的可能性，却需要赌上令${flash.sex}受伤这种高概率的风险。`,
      );
      await era.printAndWait(
        `毫无疑问，作为训练员，${you.name} 是绝对无法接受的。`,
      );
      era.printButton('「要不然，先去尝试别的办法吧？」', 1);
      await era.input();
      await era.printAndWait(`因此，${you.name} 委婉地表述了自己的看法。`);
      await flash.say_and_wait(
        '可是除此之外，并没有其他办法可以在备赛期间内更有效的提升我自己的能力了！',
      );
      await era.printAndWait(
        `见 ${you.name} 否定${flash.sex}的提案，荣进闪耀的语气罕见的出现了一丝焦虑。`,
      );
      await flash.say_and_wait(
        '请相信我，这是我和美浦波旁同学一起经过深思熟虑得出的结果。无论是训练中的风险还是中途可能会遭遇的情景都考量在了其中。',
      );
      await flash.say_and_wait(
        '为了我的梦想，为了让我的父母引以为傲，我必须赢下日本德比，我必须取得这份荣耀。',
      );
      await flash.say_and_wait('所以——');
      era.printButton(
        '「但我更在乎的是这个过程中，你的身体会受到的伤害。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('！');
      era.printButton(
        '「而且你的父母，也肯定不会希望自己的孩子通过这种方式来证明自己吧？」',
        1,
      );
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `有些出乎意料的，荣进闪耀在听到 ${you.name} 的话后，做出了惊讶，甚至可以说是动摇的反应。`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait('…………');
      await flash.say_and_wait('……是这样啊……');
      await era.printAndWait(`${flash.sex}陷入了沉默。`);
      await era.printAndWait(
        `${you.name} 不清楚荣进闪耀的内心正在想些什么。不过可以肯定的是，此时的${flash.sex}直视着 ${you.name} 的那双碧蓝色瞳孔里，正不断起伏着一种 ${you.name} 无法理解，但是又极为复杂的情感。`,
      );
      await flash.say_and_wait('……我知道了。');
      await era.printAndWait(
        '紧张的气氛逐渐缓和。几秒之后，荣进闪耀挪开了自己的目光。',
      );
      await flash.say_and_wait('看来是我考虑不周了呢，非常抱歉。');
      await era.printAndWait(
        `紧接着，${flash.sex}朝 ${you.name} 深深鞠躬。待起身之时，${you.name} 发现那份引起两人争议的计划表又被${flash.sex}拿回到手中。`,
      );
      await flash.say_and_wait('请容我回去，再好好思量一下吧。');
      if (era.get('status:37:虚弱') > 0) {
        await era.printAndWait(
          `与皋月赏前的那次争执不同，这一回，是${flash.sex}主动选择了退让。`,
        );
        era.println();
        era.print([flash.get_colored_name(), ' 不再 ', s_weak, ' 了！']);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_17: (() => {
    const title = '经验之谈 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} luna 鲁铎象征
     * @param {CharaTalk} mr_cb 千明代表
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname_17 鲁铎象征对玩家的称呼
     * @param {PrintedSpan} callname_57 千明代表对玩家的称呼
     */
    const f = async (flash, luna, mr_cb, you, callname_17, callname_57) => {
      await luna.say_and_wait([
        '所以，这就是您来找我的理由吗？',
        callname_17,
        '。',
      ]);
      await era.printAndWait(
        `虽然成功劝说荣进闪耀放弃了${flash.sex}的高强度训练计划。但与此同时，${you.name} 也深知日本德比对于${flash.sex}的重要性。`,
      );
      await era.printAndWait(
        `${you.name} 决定以自己的方式来帮助${flash.sex}。因此，经过深思熟虑之后，${you.name} 来到了这里。`,
      );
      era.printButton('「是的，我希望你能和荣进闪耀进行模拟比赛。」', 1);
      await era.input();
      await era.printAndWait(
        `特雷森学园学生会办公室内，『皇帝』${luna.name} 面露平和之色地看着 ${you.name}。`,
      );
      await luna.say_and_wait(
        `真是意外的请求啊。想要和我一起赛跑的${flash.uma_sex_title}有很多，但需要我去赛跑的训练员可真是罕见呢。`,
      );
      era.printButton(`「${flash.sex}需要你的力量。」`, 1);
      await era.input();
      await luna.say_and_wait('哦？');
      await era.printAndWait(
        `见 ${you.name} 这么说，${luna.name} 的脸上浮现出感兴趣的表情。`,
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
        `那便是与这个领域内的更强者对战，在这一过程中亲身体会${flash.couple_title}所蕴含的力量，借此来使自己获取相关经验，并在接下来的比赛中利用这份经验取得临场发挥的优势。`,
      );
      await era.printAndWait(
        `将这套理论发挥到实战中，那么得出来的结果就是——让荣进闪耀在维持正常强度的日常训练的同时，寻找合适的对手与${flash.sex}进行模拟比赛。`,
      );
      await luna.say_and_wait('哈哈哈哈。');
      await era.printAndWait(
        `听取完 ${you.name} 的想法之后，${luna.name} 哈哈大笑。`,
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
      await era.printAndWait(
        `片刻之后，重新开口的${flash.sex}露出了然的微笑。`,
      );
      await luna.say_and_wait([
        callname_17,
        '，你对于担当',
        flash.uma_sex_title,
        '所抱有的想法我已切身体会到。因此相对的，我也有一个提案。',
      ]);
      era.printButton('「提案？」', 1);
      await era.input();
      await luna.say_and_wait(
        `虽然亲自来担任对手一职也并非不可。但比起我而言，荣进闪耀${flash.sex}可能会需要另一个更加鲜艳的对手。`,
      );
      await luna.say_and_wait('一道……自由的风。');
      era.drawLine();
      await era.printAndWait([
        '在那之后，',
        you.name,
        ' 根据 ',
        luna.get_colored_name(),
        ' 的指示，来到了刚刚结束重赏级比赛的竞马场。',
      ]);
      await era.printAndWait(`在那里，${you.name} 遇到了……`);
      await mr_cb.say_as_unknown_and_wait(
        '哈～今天的比赛真是太棒了。这么自由的氛围，我都快压抑不住自己的内心了。',
      );
      era.printButton('「你是……」', 1);
      await era.input();
      await mr_cb.say_as_unknown_and_wait(
        '脚步、呼吸、应援……我所渴望的想要去感受的一切事物，都在这里汇聚。',
      );
      await mr_cb.say_as_unknown_and_wait([
        '那么你呢？你又是因为什么而来的，',
        callname_57,
        '。',
      ]);
      await era.printAndWait(
        `说着，躯体修长，全身上下散发着如若草地般清新气息的赛${flash.uma_sex_title}转身，对 ${you.name} 嫣然一笑。`,
      );
      era.printButton('「……千明代表。」', 1);
      await era.input();
      await era.printAndWait(
        `出现在 ${you.name} 眼前的，赫然是以令人着迷且充满刺激的奔跑方式夺得三冠王称呼的赛${flash.uma_sex_title}——千明代表。`,
      );
      await mr_cb.say_and_wait('嘛，话虽如此，不过详细的情况我也已经听说了。');
      await mr_cb.say_and_wait(
        `总之，就是想让我跟即将出走德比的${flash.uma_sex_title}併走吗？`,
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
        `就这样，荣进闪耀的模拟赛对手选择好了，由三冠赛${flash.uma_sex_title}千明代表亲自出马。`,
      );
      await era.printAndWait('接下来要做的，便是决定出一个时间即可。');
    };
    f.title = title;
    return f;
  })(),
  ws_47_18: (() => {
    const title = '经验之谈 · 三';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} mr_cb 千明代表
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, mr_cb, you) => {
      await flash.say_and_wait(`三冠赛${mr_cb.uma_sex_title}啊……`);
      await flash.say_and_wait(
        '不，我并不害怕。就像您说的那样，这是一个难得的机会，我必须要去把握住。',
      );
      await flash.say_and_wait('而且……我也很期待呢，与更强者的对决。');
      era.drawLine({ content: '约定日' });
      await era.printAndWait(
        `${you.name} 和荣进闪耀一起前往特雷森学园的操场处。`,
      );
      await mr_cb.say_and_wait('那么准备好的话就可以开始咯。');
      await flash.say_and_wait('好的，请多多指教，千明代表同学。');
      await era.printAndWait('可以看出千明代表早已等候多时。');
      await era.printAndWait(
        `见此情况，${you.name} 鼓励地拍了拍荣进闪耀的肩膀。`,
      );
      era.printButton('「加油上吧！」', 1);
      await era.input();
      await flash.say_and_wait('是！');
      await mr_cb.say_and_wait(
        `呵呵～很好，完全不会因为我的三冠赛${mr_cb.uma_sex_title}这一名号而感到胆怯呢。`,
      );
      await era.printAndWait(
        '荣进闪耀毫不退缩，沉着自如的表现让千明代表称赞地点了点头。',
      );
      await mr_cb.say_and_wait(
        '已经可以预料到会是一场很尽兴的比赛了，我可不会放水的哦。',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} flash 荣进闪耀
   * @param {CharaTalk} mr_cb 千明代表
   * @param {CharaTalk} you 玩家
   * @param {number} rank 荣进闪耀的模拟赛名次
   */
  async ws_47_18_end(flash, mr_cb, you, rank) {
    await era.printAndWait([
      mr_cb.get_colored_name(),
      ' 是赛',
      flash.uma_sex_title,
      '这一职业中久负盛名的前辈。无论是实力还是经验，毫无疑问，作为三冠之王的',
      flash.sex,
      '都全方面的超越了 ',
      flash.get_colored_name(),
      '。',
    ]);
    if (rank === 1) {
      await era.printAndWait(
        '话虽如此，但比赛的胜利，从来都不只取决于这些浮于表面的因素。',
      );
      await flash.say_and_wait('呼……我……赢了？');
      era.printButton('「干得漂亮！」', 1);
      await era.input();
      await era.printAndWait([
        '在比赛的过程中，',
        flash.get_colored_name(),
        ' 展现出了相当强烈的求胜欲望，即便途中被 ',
        mr_cb.get_colored_name(),
        ' 逼近，缠斗甚至超越数次，',
        flash.sex,
        '也仍锲而不舍地重新组织攻势，最终正是这份坚韧的精神改写了看似无望的结果，将胜利掌握在手中。',
      ]);
      await mr_cb.say_and_wait('哈哈哈哈，真的太有意思了。');
      await era.printAndWait([
        mr_cb.get_colored_name(),
        ' 哈哈大笑，虽然尝到败果，但',
        mr_cb.sex,
        '却显得比之前更为兴奋。',
      ]);
    } else {
      await era.printAndWait(
        `因此，后者的落败从一开始便在 ${you.name} 的意料之中。`,
      );
      await flash.say_and_wait('呼……是我输了呢。');
      era.printButton('「辛苦了。」', 1);
      await era.input();
      await era.printAndWait([
        '不过话虽如此，但是在比赛的中途被 ',
        mr_cb.get_colored_name(),
        ' 超越之后，',
        flash.get_colored_name(),
        ' 的那份锲而不舍，直到最终的结果出来之前都在不懈追逐，意图想将胜利重新握于自己手中的坚韧精神也令 ',
        you.name,
        ' 颇为动容。',
      ]);
      await mr_cb.say_and_wait('哈哈哈。');
      await era.printAndWait(`甚至，可能还不只是 ${you.name}。`);
    }
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
      `那日本德比呢？明明想要成为德比赛${flash.uma_sex_title}，结果对于日本德比却没有任何的特殊情感？`,
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
      `与千明代表分别之后，荣进闪耀突然转身，向 ${you.name} 道谢。`,
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
      `说完，${flash.sex}将手放在胸口处，对 ${you.name} 露出温柔的笑意。`,
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
      `${you.name} 看到荣进闪耀突然攥紧拳头，${flash.sex}的目光中闪动着毫不动摇的意念。`,
    );
    await flash.say_and_wait('必须要赢下日本德比，作为对大家的回报才行。');
  },
  before_toky_yus: (() => {
    const title = '应行之事 · 三';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '经典三冠的第二场比赛——日本德比，终于在今天拉开序幕。',
      );
      await flash.say_and_wait('那么，我出……');
      await era.printAndWait('「嘟嘟。」');
      await flash.say_and_wait('诶。');
      await era.printAndWait(
        '选手休息室内，已经做好比赛前最后的准备工作，正打算前往赛场的荣进闪耀突然被手机提示音吸引了注意力。',
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await flash.say_and_wait('啊，没什么。');
      await era.printAndWait(
        `从身后的口袋中拿出手机，对着屏幕中显现的内容注视了几秒的${flash.sex}，脸上露出欣慰的表情。`,
      );
      await flash.say_and_wait('是母亲发来的消息。');
      await flash.say_and_wait(
        `『完全没有想到自己的${
          flash.sex_code - 1 ? '女儿' : '儿子'
        }会在日本德比中出场。』`,
      );
      await flash.say_and_wait(
        '『希望能够留下令你满意的结果，我和爸爸他会在这里为你加油的。』',
      );
      era.printButton('「来自父母的祝福啊。」', 1);
      await era.input();
      await flash.say_and_wait('是期望呢。');
      await era.printAndWait('说完，荣进闪耀收回手机。');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `接受远在大洋彼岸的父母意愿的${flash.sex}，身上似乎产生了微妙的变化。`,
      );
      await flash.say_and_wait('要找到比单纯的赢更重要的情感……吗？');
      era.printButton('「……闪耀︖」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 听到了${flash.sex}的低声轻语，${you.name} 刚想询问${flash.sex}是否遇到了什么问题。`,
      );
      await flash.say_and_wait('呼……');
      await flash.say_and_wait(`${callname}！`);
      era.printButton('「嗯。」', 1);
      await era.input();
      await era.printAndWait(`对上的却是${flash.sex}坚定的眼神。`);
      await flash.say_and_wait('我能赢下这场比赛的，对吗？');
      era.printButton('「我一直都是这么相信的。」', 1);
      await era.input();
      await flash.say_and_wait('好！');
      await era.printAndWait(
        `听到 ${you.name} 的话，荣进闪耀点了点头，自信的笑容浮现于${flash.sex}的脸颊之上。`,
      );
      await flash.say_and_wait('那么，我出发了。');
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '应行之事 · 四';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('观众', '喔喔喔喔喔——！！！');
      await you.say_as_passer_by_and_wait('主持人', '荣进闪耀——冲线！！！');
      await you.say_as_passer_by_and_wait(
        '主持人',
        '真是令人意外的结果，本次日本德比的冠军是——荣进闪耀！！！',
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `让我们恭喜${flash.sex}！」`,
      );
      await flash.say_and_wait('呼……呼……');
      await flash.say_and_wait('我……赢了？');
      await you.say_as_passer_by_and_wait(
        `粉丝A`,
        `恭喜你，荣进闪耀！我就知道我没有支持错人！`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `粉丝B`,
        `德比赛${flash.uma_sex_title}荣进闪耀！我会记得今天的。`,
      );
      await flash.say_and_wait('大家……');
      era.printButton('「恭喜你，闪耀。」', 1);
      await era.input();
      await flash.say_and_wait(`${callname}……嗯！我赢下日本德比了！`);
      era.printButton('「一件非常了不起的成就。」', 1);
      await era.input();
      await flash.say_and_wait(
        '我没有辜负父母的期望，没有辜负您的期望，我做到了！',
      );
      await era.printAndWait(
        `荣进闪耀的脸上露出灿烂的笑容，看得出来，此刻的${flash.sex}完全沉浸于胜利所带来的喜悦中。`,
      );
      await era.printAndWait('「嘟嘟。」');
      await era.printAndWait(
        `然后非常巧妙的，手机提示音也在这个时候传入${flash.sex}的耳中。`,
      );
      await flash.say_and_wait('新的短信？');
      await era.printAndWait('荣进闪耀掏出手机，映入眼帘的是——');
      await you.say_as_passer_by_and_wait(
        `闪耀的母亲`,
        `恭喜你获得第一名，闪耀。日本德比的发挥非常super，toll，klasse。`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `闪耀的母亲`,
        `在得知胜利的消息之后，你爸爸他开心地在蛋糕店里来回走动。`,
      );
      await flash.say_and_wait('父亲他居然……呵呵呵～');
      await you.say_as_passer_by_and_wait(
        `闪耀的母亲`,
        `说实话，真的很想将你抱在怀里夸奖。这次的冠军实属不易，是你这几年来付出的那些努力的缩影，是进步的证明。`,
      );
      await you.say_as_passer_by_and_wait(
        `闪耀的母亲`,
        `愿今后这种源自胜利的喜悦，能常伴于你的身边。」`,
      );
      await flash.say_and_wait('母亲……');
      era.printButton('「看来你的父母也在为你高兴呢。」', 1);
      await era.input();
      await flash.say_and_wait('……嗯！');
      await era.printAndWait('传递喜悦的短信到此结束。');
      await era.printAndWait('而得到父母祝福的荣进闪耀，此时则显得无比积极。');
      await flash.say_and_wait(
        '虽说赢下日本德比这件事情所带来的喜悦很容易让人沉醉其中。不过客观来讲，这也是生涯的一个阶段而已。',
      );
      await flash.say_and_wait(
        `所以事不宜迟，一起来商量下一步的计划吧，${callname}！`,
      );
      await flash.say_and_wait('一起———向着菊花赏，进发。');
    };
    f.title = title;
    return f;
  })(),
  ws_47_21: (() => {
    const title = '两难之择 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     * @param {boolean} win_toky_yus 荣进闪耀是否赢取日本德比
     * @param {PrintedSpan} s_distracted 荣进闪耀专属状态 [分心]
     */
    const f = async (flash, you, callname, win_toky_yus, s_distracted) => {
      await flash.say_and_wait('………');
      await flash.say_and_wait('………');
      era.printButton('「闪耀……」', 1);
      await era.input();
      await flash.say_and_wait(
        `……很抱歉，${callname}，但是我果然还是无法接受。`,
      );
      await flash.say_and_wait('取消菊花赏的出走预定这件事情。');
      era.drawLine();
      if (win_toky_yus) {
        await era.printAndWait(
          '就在上个星期，荣进闪耀于日本德比的赛场上取得了傲人的战绩。',
        );
        await era.printAndWait(
          `深感喜悦的同时，${flash.sex}也下定决心，要在菊花赏的比赛中续写日本德比的辉煌，荣获万众瞩目的冠军。`,
        );
        await era.printAndWait('但……');
      }
      await era.printAndWait(
        `凡事永远都不可能一帆风顺，伤病一直是赛${flash.uma_sex_title}绕不开的一个话题。`,
      );
      await you.say_as_passer_by_and_wait(
        '医生',
        '疼痛的原因应该是腿部肌肉积攒了过多的疲劳所导致的。为了防止病情进一步加重，接下来的一段时间里还请好好休息。',
      );
      await era.printAndWait(
        '事件的起因是由于荣进闪耀在日本德比结束后第二天的训练中说自己的腿部感受到异样的疼痛。',
      );
      await era.printAndWait(
        `对此不放心的 ${you.name} 带着${flash.sex}前往医院检查，然后便得知了患病的结果。`,
      );
      await flash.say_and_wait(
        '但即便如此，在菊花赏之前能够痊愈的概率还是非常高的。',
      );
      await era.printAndWait('可是很显然，荣进闪耀本人并不愿意接受这个情况。');
      await era.printAndWait(
        `即便 ${you.name} 跟${flash.sex}解释『想要赢下菊花赏就必须历经高强度的训练，但目前这样做只会让身体的情况更加糟糕』的现状。`,
      );
      await era.printAndWait(`${flash.sex}也仍旧执着的打算参赛。`);
      era.printButton('「……总之，最近这段时间先好好放松一下吧。」', 1);
      await era.input();
      await era.printAndWait(
        `最终，为了让${flash.sex}不再忧虑，而是静心去修养。${you.name} 选择做出一个承诺。`,
      );
      era.printButton('「如果在那之前可以痊愈的话，肯定是会让你出场的。」', 1);
      await era.input();
      await flash.say_and_wait('………');
      await flash.say_and_wait('……我知道了……');
      await era.printAndWait(
        `而大概是也清楚再争论下去根本没有意义。于是在听到 ${you.name} 的话之后，荣进闪耀只是沮丧地点了点头。`,
      );
      await flash.say_and_wait('那……就先把菊花赏从计划中取消掉吧。');
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `看着面露不甘之色的${flash.sex}，${you.name} 很担心接下来的日子里，${flash.sex}的状态会如何。`,
      );
      era.println();
      era.print([flash.get_colored_name(), ' 变得 ', s_distracted, ' 了！']);
    };
    f.title = title;
    return f;
  })(),
  ws_47_23: (() => {
    const title = '两难之择 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '在决定不以菊花赏为目标之后，已经过去一周的时间了。',
      );
      await era.printAndWait(
        `不出 ${you.name} 意料的，这段期间里，荣进闪耀的状态相比于之前下滑了很多。`,
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
        `${you.name} 听得出来，说这段话时的荣进闪耀，语气有些低落。`,
      );
      era.printButton('「暂时，先按照调整过后的计划来执行吧。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 能够理解${flash.sex}的踌躇，但现在正是修养的关键时期，一切都应该以保重身体为最优先。`,
      );
      await flash.say_and_wait('嗯……');
      await era.printAndWait(
        `……不过，看着${flash.sex}有些失落的表情，${you.name} 也清楚再这样纠结下去并不是解决办法。`,
      );
      await era.printAndWait(
        `${you.name} 深知，荣进闪耀是个非常执着的孩子，这在大部分情况下是一件好事。`,
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
      await flash.used_to_say_and_wait(
        '那是我为了实现梦想，而必须要去做的事情。',
      );
      await era.printAndWait(
        '（医生「为了防止病情进一步加重，接下来的一段时间里还请好好休息。」）',
      );
      await era.printAndWait('……坦白来讲，无论是哪一个选择都不容易。');
      era.printButton('（到底应该怎么做才好。）', 1);
      await era.input();
      await era.printAndWait(`${you.name} 皱眉思索。`);
      await era.printAndWait(
        `作为训练员，没有人比 ${you.name} 更了解${flash.sex}为了梦想所付出的汗水与坚持。`,
      );
      await era.printAndWait(
        `因此，${you.name} 当然殷切的希望${flash.sex}可以圆梦而归。`,
      );
      await era.printAndWait(
        `但是，也正是作为训练员，${you.name} 才无法放任${flash.sex}继续进行有风险的行为。`,
      );
      await era.printAndWait('比起短时的目标，平安无事的跑完全程更为重要。');
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `两难的想法不断在脑海中碰撞，让 ${you.name} 的内心升起一道无法驱散的迷雾。`,
      );
      await era.printAndWait(`${you.name} 清楚，自己急需找一个破局之策。`);
      await era.printAndWait(
        `${you.name} 的举棋不定会令荣进闪耀的处境更加煎熬。`,
      );
      await flash.used_to_say_and_wait(
        '……您说的是呢，能够指出我的错误，将我引领向正确道路的人。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `踌躇之间，${you.name} 想起了当时荣进闪耀在和千明代表对决之后，跟 ${you.name} 说的话。`,
      );
      await era.printAndWait(
        `${flash.sex}相信，${you.name} 是${
          flash.sex
        }在赛${flash.uma_sex_title}这一道途中的指引者。`,
      );
      await era.printAndWait(
        `而事实也证明，${flash.sex}对于 ${you.name} 的大部分指令都会毫无异议地去执行。`,
      );
      await era.printAndWait(
        `那么换成 ${you.name}，事到如今，是否又相信${flash.sex}呢？`,
      );
      era.printButton('「………呼。」', 1);
      await era.input();
      await era.printAndWait(
        `想到这里，${you.name} 将手伸入口袋，从其中拿出一枚铜质勋章。`,
      );
      await era.printAndWait('镀银的外表在阳光的照射下闪闪发光。');
      await flash.used_to_say_and_wait(
        '非常感谢您的帮助，请您务必收下这个作为我对您的回报。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `相遇时的回忆涌上心间，${you.name} 对着它凝视良久。`,
      );
      await era.printAndWait(
        `最后，${you.name} 转身，看向此时正在一旁对着计划书冥思苦想的荣进闪耀。`,
      );
      era.printButton('（这是一开始就没有争议的事情吧。）', 1);
      await era.input();
      await era.printAndWait(`下一秒，${you.name} 轻笑着摇了摇头。`);
      await era.printAndWait(
        `${you.name} 想自己已经找到了答案，现在要做的，只是静待良机。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '交心之谈 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '所谓合宿，是指特雷森学园为主导，以提高实力为目的，地点位于海边的夏季专属活动。',
      );
      await flash.say_and_wait(
        '这就是日本的大海啊，和德国那边，果然有不小的区别呢。',
      );
      await era.printAndWait(
        '月初，从学园的专用公交上下车，望着面前满眼的蔚蓝，荣进闪耀赞叹道。',
      );
      era.printButton('「想去玩吗？」', 1);
      await era.input();
      await flash.say_and_wait('诶，不用了。');
      await era.printAndWait(
        `不过下一秒，在听到 ${you.name} 的提议后，${flash.sex}摇了摇头。`,
      );
      await flash.say_and_wait(
        '虽然是很令人心动的选择，但目前还是要以训练为第一优先级。',
      );
      await era.printAndWait('说着，荣进闪耀低下头，看向自己的双腿。');
      await flash.say_and_wait(
        '菊花赏的开赛已经迫在眉睫，为了获胜，必须要抓紧每一个机会才行。',
      );
      await era.printAndWait(
        `经过前面一段时间的修养，${flash.sex}的病情相较于最开始，已经有了大大缓解。`,
      );
      await era.printAndWait('托此的福，荣进闪耀的心情也开朗了不少。');
      await era.printAndWait(
        `认为已经规划好的计划终于不会被打乱的${flash.sex}又准备以菊花赏为目的。`,
      );
      era.printButton('「关于这个。」', 1);
      await era.input();
      await era.printAndWait(
        `而见到${flash.sex}这份热情的模样，${you.name} 想，也该到时候了。`,
      );
      era.printButton('「我有话想对你说。」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `其实站在训练员的视角来讲，荣进闪耀现在的状态，对 ${you.name} 而言有些尴尬。`,
      );
      await era.printAndWait(
        `明面上，${flash.sex}的康复，是不争的事实，${you.name} 当然也乐意看到${flash.sex}肆意驰骋于赛场的模样。`,
      );
      await flash.say_and_wait('是关于菊花赏的事情吗？');
      era.printButton('「嗯。」', 1);
      await era.input();
      await era.printAndWait(
        `但是，用谨慎的方式去思考，在肌肉内根深蒂固的疲惫不是那么容易就可以消除的。${you.name} 无法保证备战比赛，不断高强度训练的过程中，病痛不会复发。`,
      );
      await flash.say_and_wait(
        '……您在那天承诺过，如果能够在菊花赏之前康复的话，便同意让我出赛。',
      );
      era.printButton('「是的。」', 1);
      await era.input();
      await era.printAndWait(
        `换句话说，以 ${you.name} 的视角来看，不再去考虑菊花赏，而是将目标比赛定为更之后的日本杯或者有马纪念，并借此利用多出来的空档期来彻底解决身体的隐患才是最好的。`,
      );
      await flash.say_and_wait('既然这样的话，那现在正是积累优势的时候。');
      await era.printAndWait(
        `合宿旅馆内，似乎是意料到 ${you.name} 接下来会说些什么，荣进闪耀的态度很是坚决。`,
      );
      era.printButton('「你误会我的意思了，我并不是来劝阻你的。」', 1);
      await era.input();
      await flash.say_and_wait('诶。');
      await era.printAndWait(`不过这回，${flash.sex}猜错了。`);
      era.printButton(
        '「虽然得承认，菊花赏的参加与否，对我而言是两难的抉择。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `接下来的时间，${you.name} 跟${flash.sex}陈述了自己的苦衷。坦白了那份介于感性与理性之间，既希望${flash.sex}能达成自己的梦想，又不愿意看到${flash.sex}在这过程中受伤的矛盾心理。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `毫无疑问，荣进闪耀是个聪慧的孩子，${flash.sex}当然能理解 ${you.name} 的处境，就像 ${you.name} 能理解${flash.sex}的一样。`,
      );
      era.printButton(
        '「在得知你的身体情况之后，我一直在犹豫不决。但也许，这种踌躇才是最大的错误。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `说到这里，${you.name} 伸出手，将那枚代表相遇的勋章递到${flash.sex}的眼前。`,
      );
      await flash.say_and_wait(`${callname}……`);
      await era.printAndWait(
        `荣进闪耀低下头，看了眼这枚勋章，又抬起头，看了眼 ${you.name}。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(`${flash.sex}张了张嘴，显得欲言又止。`);
      era.printButton(
        '「我想，如果自己无法做出决定的话，那么干脆就交给你来做。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} 则拍了拍${flash.sex}的肩膀，脸上浮现出一丝微笑。`,
      );
      await era.printAndWait(
        `如果关于赛${flash.uma_sex_title}的问题，以训练员的视角无法给出答案的话，那么不妨就交由当事人自己来处理。`,
      );
      await era.printAndWait('无需顾虑，信任是互相的，一心同体即是如此。');
      await era.printAndWait('也无需迟疑，这并非是一种逃避，因为——');
      era.printButton('「无论你做出何种选择，我都会与你一起承担到底。」', 1);
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `昏黄的房间内，来自异国的${flash.teen_sex_title}因为 ${you.name} 的话而陷入短暂的僵直。`,
      );
      await era.printAndWait(
        `周旁的时间仿若停滞，除了那抹转瞬即逝的绯红，${you.name} 没有看到${flash.sex}脸上的表情产生任何波动。`,
      );
      await era.printAndWait(
        `不过在此期间，${flash.sex}的那双清澈透明的湛蓝色瞳孔一直沉默地注视着 ${you.name}，眼神中似有浮光流动。`,
      );
      await flash.say_and_wait('……我……');
      await era.printAndWait('直至十几秒之后，荣进闪耀才再次开口。');
      await flash.say_and_wait(
        '……也许您说的对，让我自己来决定这条道路是对双方都有利的选择。',
      );
      await era.printAndWait(
        `不过与之前的坚决相比，此时${flash.sex}语气中所蕴涵的态度，却是有些游移不定。`,
      );
      await flash.say_and_wait(
        '所以，请再给我一些时间，我需要去认真思考一番。',
      );
      await era.printAndWait(
        `说完，${flash.sex}朝 ${you.name} 深深，深深地鞠躬。`,
      );
      await flash.say_and_wait(
        '我会在合宿结束那天给您答复，这段期间内，就按照原定的计划执行吧。',
      );
      await era.printAndWait(
        `待起身之后，${you.name} 发现，${flash.sex}向 ${you.name} 露出了带着甜蜜的微笑。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '交心之谈 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     * @param {PrintedSpan} s_distracted 荣进闪耀专属状态 [分心]
     */
    const f = async (flash, you, callname, s_distracted) => {
      await flash.used_to_say_and_wait(
        '我会在合宿结束那天给您答复，这段期间内，就按照原定的计划执行吧。',
      );
      await era.printAndWait(
        '特雷森的合宿活动持续时间很短，从开始到结束，也只有一个月的间隔。',
      );
      await era.printAndWait(
        `而在此期间，${you.name} 能感觉到荣进闪耀的状态正在不断的无序起伏着。时而坚定，时而动摇；时而对着 ${you.name} 展颜微笑，时而看向天空迷茫沉思。`,
      );
      await era.printAndWait(
        `不过话虽如此，但 ${you.name} 相信${flash.sex}能够在最后理性的做出自己的决断。毕竟对于经历各种艰苦训练都毫无怨言的人而言，这种事情，根本不值一提。`,
      );
      await flash.say_and_wait(
        `${callname}，请问今天晚上17点到18点这段时间，您有安排吗？`,
      );
      await era.printAndWait(
        `而也令 ${you.name} 不失所望的，荣进闪耀，完美地交出了自己的答卷。`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '其实，在10年之前的小时候，我并没有养成现在这种凡事都寻求精确的习性。',
      );
      await era.printAndWait('月末，合宿旅馆旁的海滩。');
      await era.printAndWait(`荣进闪耀和 ${you.name} 一起漫步在大海的边缘。`);
      await era.printAndWait('此刻，夕阳正在另一侧的尽头处徐徐下沉。');
      await era.printAndWait(
        '落日的余晖散发出璀璨的金色，将整片海岸线染成一副壮丽的画卷。',
      );
      await flash.say_and_wait(
        '直到7岁那一年的圣诞节前夕。那天的我回到家，发现我的父亲他正在准备Stollen，一种德国的圣诞节传统面包。',
      );
      await era.printAndWait('说着，荣进闪耀转身，无言地看向这份绝伦美景。');
      await era.printAndWait(`片刻之后，${flash.sex}才再度开口。`);
      await flash.say_and_wait(
        '……看到他在制作的过程中，一丝不苟，连一克的用材误差都不会允许的认真态度。当时的我并不理解，便好奇地发问。',
      );
      await flash.say_and_wait(
        '『爸爸，为什么一定要这么精准呢？哪怕糖的用量跟食谱有一点区别，吃起来的味道也没什么变化呀。』',
      );
      era.printButton('「还真是出乎意料的发言。」', 1);
      await era.input();
      await era.printAndWait(
        `以 ${you.name} 对面前人的了解，很难想象出${flash.sex}居然会说出这种敷衍的话语。`,
      );
      await flash.say_and_wait(
        '是的，所以正是父亲接下来对我说的那段话，改变了我的人生轨迹。',
      );
      await era.printAndWait(
        `荣进闪耀点了点头，${flash.sex}的语气中带着怀念的感慨。`,
      );
      await flash.say_and_wait(
        '『当然是因为品质啊，闪耀。如果今天为了这些许的误差而放松了标准，那么明天，后天呢？』',
      );
      await flash.say_and_wait(
        '一次的放松就有可能带来次次的松懈，最终产生无法挽回的结果……是很简单明了的道理，不是吗？',
      );
      await flash.say_and_wait(
        '我本以为我的父亲只是想借此让我认知到这种事情。但是没有想到，他紧接着说出来的话，却远远超越了当时的我的理解范畴。',
      );
      await era.printAndWait('说到这里，荣进闪耀垂下头，将手放在自己的胸口。');
      await flash.say_and_wait(
        '『但品质并非是最重要的，因为只要有食谱的话，谁都可以做出完美的甜点。』',
      );
      await flash.say_and_wait(
        '『因此最关键的，是这颗心。让别人通过甜点感受到我们的用心，这才是重中之重。』',
      );
      era.printButton('「重要的是其中的心意吗？」', 1);
      await era.input();
      await flash.say_and_wait(
        '但是心并非调味品，它无法做到让食物变得更加美味。',
      );
      await era.printAndWait(
        '荣进闪耀轻叹一声，原本平静如水的眼神产生了一丝明显的波动。',
      );
      await flash.say_and_wait(
        '当时的我，是这么回应我的父亲的。而他，则以我的年龄太小为理由没有进行详细解释，只是说等以后就顺其自然的理解了。',
      );
      era.printButton('「与人生的阅历相挂钩啊。」', 1);
      await era.input();
      await flash.say_and_wait(
        '嗯，可是稚嫩时期的我却不服输的认为不必等到以后。',
      );
      await flash.say_and_wait(
        '都说父母是孩子最崇敬的榜样。然后当时的我就觉得，只要能够模仿他们的行事风格，是不是就可以顺利理解这句话了。',
      );
      await flash.say_and_wait(
        '呵呵呵～～真是不切实际的想法呢。毕竟直到现在，我都没能彻底通透父亲的这句话。',
      );
      await era.printAndWait(
        '荣进闪耀带着自我调侃地轻笑几声，显然对于过去自己的幼稚行为感到些许滑稽。',
      );
      await flash.say_and_wait(
        '不过在这个模仿学习的过程中，因为渐渐知晓了凡事都要做到追求严格、严正、精密这一点的不易，所以倒是越来越尊敬能够将这种事情化作日常的父亲和母亲了呢。',
      );
      await flash.say_and_wait(
        '也正因如此，想要让他们以我为傲的想法便在心底油然而生。',
      );
      era.printButton('「这就是一切的起因吗？」', 1);
      await era.input();
      await flash.say_and_wait('是的，这就是一切的起因。');
      await era.printAndWait('话毕，荣进闪耀从身后取出那枚银黑色勋章。');
      await flash.say_and_wait('然后我就来到了这里，和您相遇。');
      await era.printAndWait(
        `${flash.sex}对着它凝视良久，直至落日收敛起自己的余光，才再度开口。`,
      );
      await flash.say_and_wait(
        `……据说作为${flash.uma_sex_title}出生，能够在赛场上奔跑是件十分骄傲的事情。所以我渴望着在此取得荣誉，最终做到荣归故里。`,
      );
      await flash.say_and_wait(
        '这就是我奔跑的原动力，这就是我一直都如此执着的理由。',
      );
      await flash.say_and_wait('但是……');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `荣进闪耀突然沉默了一瞬，与此同时，${you.name} 看见${flash.sex}的手有些无力地垂落下去。`,
      );
      await flash.say_and_wait(
        '在实际执行的途中，这种想法，却又慢慢扭曲成了一种偏激的意志。',
      );
      await era.printAndWait(`${flash.sex}轻声道。`);
      await flash.say_and_wait(
        '合宿的第一天，您对我说的那番话让我猛然意识到。我的梦想，其实一直以来都并非只属于我一个人。',
      );
      await flash.say_and_wait(
        '过去的我没能理解这一点……所以从来都只顾着自己埋头前进，没有在意过您的任何想法。',
      );
      await flash.say_and_wait(
        '明明您对我的帮助无可替代。明明我们理应是一心同体的关系。',
      );
      era.printButton('「闪耀……」', 1);
      await era.input();
      await flash.say_and_wait('仔细回想起来，我亏欠您许多的恩情。');
      await flash.say_and_wait(
        '皋月赏赛前的发烧也好，日本德比赛后的腿伤也好，都是您提前一步考虑到了最深层次的事物，以我的身体健康为最高优先级重新制定计划。',
      );
      await flash.say_and_wait(
        '而可笑的是，我却对您精心策划的这一切不管不顾，只是一味地谈论未来。',
      );
      await flash.say_and_wait(
        '……明明没有了健康的身体支持，任何梦想都只会沦为毫无意义的空想……',
      );
      await era.printAndWait(
        '说到这里，荣进闪耀抬起头，对着此时将暗不暗的天空，发出一阵幽幽叹息。',
      );
      era.printButton('「能够顺利康复还是取决于你自己的努力。」', 1);
      await era.input();
      await era.printAndWait(
        `见此，${you.name} 微微皱眉。${you.name} 不愿意看到这种情况的发生，荣进闪耀的行为，就像是在否定了${flash.sex}自己的所有努力一样。`,
      );
      await flash.say_and_wait(
        '呵……您啊，即便在这种情况下还会选择安慰我吗，果然是非常温柔的人呢。',
      );
      await era.printAndWait(
        `而${flash.sex}则在听到 ${you.name} 的话后，对 ${you.name} 微微一笑。`,
      );
      era.printButton('「这是事实。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 再次强调。`);
      await flash.say_and_wait('我的话也是事实。');
      await era.printAndWait(
        `荣进闪耀摇了摇头，没有过多纠结于这个话题。${flash.sex}只是伸出手，将 ${you.name} 在月初递给${flash.sex}的银黑勋章又再次递回给 ${you.name}。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 低下头，看了眼这枚勋章，又抬起头，看了眼${flash.sex}。`,
      );
      await flash.say_and_wait(
        '挑战经典三冠的目的是为了实现梦想，但想要实现梦想却并非只有挑战经典三冠这一条路可以选择。',
      );
      await flash.say_and_wait(
        '我其实早就应该明白这一点，但却一直被自己的固执所束缚，自顾自地陷入牛角尖。',
      );
      era.printButton(
        '「这都是你早已经决定好的计划，对于它的坚持可以理解。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '但是计划是可以变通的，一意孤行反而才是一种不成熟的体现。',
      );
      await flash.say_and_wait('……也许……');
      await era.printAndWait(
        `说到这里，${you.name} 看见荣进闪耀突然若有所思地点了点头。`,
      );
      await flash.say_and_wait(
        '花费了这么久的时间才领悟出这个道理的我，终于能够接近父亲和母亲一些了吧。',
      );
      era.printButton('「相信你的父母也很乐意看到你走出属于自己的道路。」', 1);
      await era.input();
      await flash.say_and_wait('您说得对呢。');
      await flash.say_and_wait(`所以，${callname}。`);
      await flash.say_and_wait('呼……');
      await era.printAndWait(
        '在下一句对话开始之前，荣进闪耀深吸一口气，这似乎代表接下来要发生的才是今天最重要的正题。',
      );
      await flash.say_and_wait('我想要参加今年的日本杯。');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}直视着 ${you.name} 的眼睛，一字一顿地说出了自己的想法。`,
      );
      await flash.say_and_wait(
        `如果，因为身体的原因无法角逐只有同世代实力最强的赛${flash.uma_sex_title}才能赢下的菊花赏的话，那么，不妨将目标放在其之上。`,
      );
      await flash.say_and_wait(
        '我想以自己的巅峰状态，去挑战比我更富有经验的前辈。',
      );
      await flash.say_and_wait(
        `我想尝试，赢下日本德比的自己，是否能够战胜${flash.couple_title}。`,
      );
      era.printButton('「如果是你的话一定可以做到。」', 1);
      await era.input();
      await flash.say_and_wait('呵呵～');
      await era.printAndWait(
        `听到 ${you.name} 毫不犹豫的支持，荣进闪耀嫣然一笑。`,
      );
      await flash.say_and_wait(
        '是啊，有您在身边支持的话，我肯定是可以做到的吧。',
      );
      await era.printAndWait(
        `夜幕初临的海滩上，来自异国的${flash.teen_sex_title}面色柔和地对 ${you.name} 伸出左手。`,
      );
      await flash.say_and_wait('接下来，就以此为目标开始努力吧！');
      await era.printAndWait(
        `${flash.sex}的语气中蕴含着十分深沉的情感。那是纵使天崩于前，也丝毫不会动摇的信任。`,
      );
      era.printButton('「嗯。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 点了点头，顺其自然地接过${flash.sex}的手。`,
      );
      await era.printAndWait(
        `毫无疑问的，经过这次的夏季合宿。${you.name} 们的未来，会绽放出更加绚烂精彩的火花。`,
      );
      era.println();
      await era.printAndWait([
        flash.get_colored_name(),
        ' 不再 ',
        s_distracted,
        ' 了！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '迎向菊花赏';
    /** @param {CharaTalk} flash 荣进闪耀 */
    const f = async (flash) => {
      await flash.say_and_wait('经典三冠的最后一场比赛——菊花赏。');
      await flash.say_and_wait(
        '虽然一度从目标之中排除，但最终还是来参赛了呢。',
      );
      era.printButton('「身体比预期中更快的得到痊愈，真是太好了。」', 1);
      await era.input();
      await flash.say_and_wait('嗯。');
      await flash.say_and_wait('不过，由于现在正朝着全新的目标而努力着。');
      await flash.say_and_wait(
        '所以已经没有必要再去执意于经典三冠了，菊花赏和别的比赛也没有什么不同。',
      );
      await flash.say_and_wait('因此，我要做的也只是和平常一样。');
      await flash.say_and_wait('将一切都做到最好，然后迎接顺其自然的结果。');
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_c: (() => {
    const title = '挑战之路 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '日本杯，作为代表闪光系列赛最高荣誉的比赛之一，其的参赛阵容可谓是高手云集。',
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        '这次日本杯的参赛阵容你们都看到了吧。',
      );
      await you.say_as_passer_by_and_wait('观众B', '嗯嗯，还真是出乎意料啊。');
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `荒漠英雄，特别周……明明都是有一段时间没有出场的赛${flash.uma_sex_title}，没想到还能在这场比赛中再次目睹${
          flash.couple_title
        }的发挥。`,
      );
      await you.say_as_passer_by_and_wait(
        `观众B`,
        `不仅如此，更惊人的是，${flash.couple_title}之前都赢下过日本杯。`,
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '这种巧合，简直就像是提前商量好的一样。',
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        '但是这样的话，经验带来的差距可就大了。对于还在经典级的选手来说，真是一场严峻的考验啊。',
      );
      era.drawLine();
      await flash.say_and_wait('日本杯，就要开始了呢。');
      await era.printAndWait('赛前，选手休息室内。');
      await era.printAndWait('荣进闪耀深吸一口气，将自己的状态调整至最佳。');
      await flash.say_and_wait(
        '不出意料的，在参赛名单上见到了很多资深级的前辈啊。',
      );
      era.printButton('「紧张吗？」', 1);
      await era.input();
      await flash.say_and_wait('嗯，毕竟是『挑战者』呢。');
      await era.printAndWait(
        `${flash.sex}点了点头，话虽如此，但 ${you.name} 从${flash.sex}的目光中又隐隐看出一丝期待。`,
      );
      await flash.say_and_wait(
        '之前和千明代表同学的併走让我从中收获了许多全新的经验，受益颇多。所以，想必这次的日本杯也是一样的。无论最终结果如何，在比赛的途中肯定都是能得到启发的吧。',
      );
      await era.printAndWait(
        `荣进闪耀充满干劲地说道，${flash.sex}的脸上露出自信的微笑。`,
      );
      await flash.say_and_wait(
        '嘛，不过话虽如此，但我也不会轻易的将胜利拱手相让。',
      );
      await flash.say_and_wait(
        '毕竟经过这段时间的修养，身体已经彻底痊愈了呢。',
      );
      era.printButton('「终于可以心无旁顾的奔跑了。」', 1);
      await era.input();
      await flash.say_and_wait(`嗯！那么我出发了，${callname}。`);
      era.printButton('「加油！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_c: (() => {
    const title = '挑战之路 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '日本杯跟日本德比之间有着相似的距离和赛道。因此，不出意外的，赢下日本德比的荣进闪耀在这场比赛中也发挥出了极其精彩的表现。',
      );
      await flash.say_and_wait(`呼……我回来了，${callname}。`);
      era.printButton('「比赛辛苦了。」', 1);
      await era.input();
      await era.printAndWait(
        '虽然过程十分艰险，但荣进闪耀最终还是凭借自身过硬的实力，跨越世代的障碍战胜了那些前辈。',
      );
      await flash.say_and_wait('我赢了。');
      await era.printAndWait(
        `赛后，选手休息室内，刚从赛场上归来的荣进闪耀对 ${you.name} 露出有些疲惫的微笑。`,
      );
      await flash.say_and_wait(
        `特别周同学和荒漠英雄同学的实力，真的很强。我竭尽了全力才勉强超越了${flash.couple_title}。`,
      );
      era.printButton('「很精彩的比赛。」', 1);
      await era.input();
      await flash.say_and_wait(
        '是的，也算是切实体会到自己目前所拥有的实力了。',
      );
      await era.printAndWait(
        `荣进闪耀点了点头，${you.name} 能很明显从${flash.sex}的语气中听出对于这场来之不易的胜利的喜悦。`,
      );
      era.printButton('「很开心呢。」', 1);
      await era.input();
      await flash.say_and_wait(
        '嗯，因为我不仅赢了，而且托此的福，也感悟到了不少全新的收获。',
      );
      await era.printAndWait(
        `紧接着，${flash.sex}的脸上浮现出若有所思地表情。`,
      );
      await flash.say_and_wait(
        `一直这样进步下去的话。终有一天，肯定是可以正面战胜${flash.couple_title}，实现一马当先的吧。`,
      );
      era.printButton('「就用下一场比赛，来印证这一场比赛得到的成果吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await flash.say_and_wait('有马纪念……呵，真是令人期待的比赛啊。');
    };
    f.title = title;
    return f;
  })(),
  japa_cup_lose_c: (() => {
    const title = '挑战之路 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '日本杯跟日本德比之间有着相似的距离和赛道。按理来说，赢下日本德比的荣进闪耀在这场比赛中也会有着出彩的发挥才对。',
      );
      await flash.say_and_wait(`呼……我回来了，${callname}。`);
      era.printButton('「比赛辛苦了。」', 1);
      await era.input();
      await era.printAndWait(
        '但很遗憾的是，这种优势并不足以弥补荣进闪耀和那些前辈之间的实力差距。',
      );
      await flash.say_and_wait('失败了呢。');
      await era.printAndWait(
        `赛后，选手休息室内，刚从赛场上归来的荣进闪耀对 ${you.name} 露出有些疲惫的微笑。`,
      );
      await flash.say_and_wait(
        '明明竭尽全力，结果还是无法追上特别周同学和荒漠英雄同学。',
      );
      era.printButton('「很精彩的比赛。」', 1);
      await era.input();
      await flash.say_and_wait(
        `是的，也算是切实体验到与${flash.couple_title}之间的差距了。`,
      );
      await era.printAndWait(
        '荣进闪耀点了点头，言语之间倒是没有太重的失落情绪。',
      );
      await flash.say_and_wait(
        '不过，同样托此的福，感悟到了不少全新的收获呢。',
      );
      await era.printAndWait(
        `紧接着，${flash.sex}的脸上浮现出若有所思地表情。`,
      );
      await flash.say_and_wait(
        `一直这样进步下去的话。终有一天，肯定是可以正面战胜${flash.couple_title}，实现一马当先的吧。`,
      );
      era.printButton('「就用下一场比赛，来印证这一场比赛得到的成果吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await flash.say_and_wait('有马纪念……呵，真是令人期待的比赛啊。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '挑战之路 · 三';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '有马纪念，作为闪光训练赛年底的收官大赛，民间一直流传着『如果一年只看一场比赛的话那就非有马纪念赛莫属的说法。』',
      );
      await era.printAndWait(
        `因为这场比赛的参赛规则采用的是粉丝投票制度，所以唯有在今年留下了亮眼表现的赛${flash.uma_sex_title}才有资格登场。`,
      );
      await era.printAndWait(
        '而赢下日本德比的荣进闪耀，不必多说，自然也在其列了。',
      );
      await you.say_as_passer_by_and_wait(`观众A`, `喂喂喂，你看到了吗？`);
      await you.say_as_passer_by_and_wait(
        '观众B',
        '难以想象，本来以为能看到特别周和荒漠英雄再度登场都已经是不可错过的盛事了。',
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        '没想到参赛选手中居然还有气槽和富士奇石！',
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '即便作为有马纪念赛来说，这阵容也豪华过头了……',
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `现在也好，之前的日本杯也好。连续两次见证了这么多知名赛${flash.uma_sex_title}的再度登场。`,
      );
      await you.say_as_passer_by_and_wait(
        '观众A',
        '给人的感觉就跟接下来会发生什么大事一样，真令人期待。',
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '但这对于经典级的那些孩子们来说，真的是件好事吗？',
      );
      era.drawLine();
      await flash.say_and_wait('还真是……令人惊讶呢。');
      await era.printAndWait(
        '赛前，选手休息室内。荣进闪耀看着本次比赛的参赛名单，眼眉微皱。',
      );
      await flash.say_and_wait(
        '本来以为特别周同学和荒漠英雄同学就已经是这场比赛会遇到的最强大的对手了。',
      );
      await flash.say_and_wait('没想到气槽同学和富士奇石同学也会参与进来。');
      era.printButton('「比赛过程可以预见的会非常惊险。」', 1);
      await era.input();
      await flash.say_and_wait(
        '说的是呢。不过本身就是以挑战为目的来参赛的。所以能够遇到的强者越多，我在此行中得到的收获也会越大。',
      );
      await flash.say_and_wait('更何况……');
      await era.printAndWait('荣进闪耀攥紧拳头，脸上流露出毫不畏惧的神色。');
      await flash.say_and_wait(
        '已经携手跨越了这么多障碍的我们，所拥有的实力也是不容小窥的。',
      );
      era.printButton(`「让${flash.couple_title}见识你的力量吧。」`, 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await flash.say_and_wait('要一直奔跑下去，直至登临绝巅。');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '挑战之路 · 四';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('观众A', '真是一场精彩的比赛。');
      await you.say_as_passer_by_and_wait(
        '观众B',
        '是啊，不亏是有马纪念，完全值回票价了。',
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `光是能看到那些很早之前就不再参赛的赛${flash.uma_sex_title}们久违的再度登场这一点就很令人兴奋了，结果没想到${
          flash.couple_title
        }居然还能跑出这么惊人的成绩。`,
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '说到这个，那更厉害的就是荣进闪耀了。',
      );
      await you.say_as_passer_by_and_wait(
        `观众B`,
        `明明作为尚未成长完全的经典级赛${flash.uma_sex_title}，却在比赛的途中接连不断地超越成名已久的前辈。`,
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `没错，这种实力还真是惊人啊。真是越发期待${flash.sex}在第三年的表现了。`,
      );
      era.drawLine();
      await flash.say_and_wait(`我回来了，${callname}。`);
      era.printButton('「比赛辛苦了，很出彩的发挥。」', 1);
      await era.input();
      await era.printAndWait(
        `正如荣进闪耀赛前所言，从最开始到现在，已经克服了许多挑战的${flash.sex}，自身所蕴涵的实力已经不容小窥。`,
      );
      await era.printAndWait(
        `即便面对那些更高年级的前辈，${flash.sex}也能够分庭抗争，甚至在最后取而胜之。`,
      );
      await flash.say_and_wait(
        '呼……是很畅快的比赛呢。虽然过程十分艰险，但我还是取得了胜利。',
      );
      await era.printAndWait(
        `荣进闪耀长舒一口气，一种大战之后取得理想结果的满足感在${flash.sex}的脸上浮现。`,
      );
      await flash.say_and_wait(
        '通过日本杯和有马纪念这两场比赛，我能明显感受到自己的成长。',
      );
      await flash.say_and_wait(
        '这样的话也就意味着，今年的计划，算是圆满收官了呢。',
      );
      await era.printAndWait(
        `说到这里，荣进闪耀充满干劲地点了点头。从比赛中得到激励的${flash.sex}已经迫不及待地准备开始执行第三年的计划了。`,
      );
      era.printButton('「等回去以后，一起来规划未来吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '挑战之路 · 四';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait('观众A', '真是一场精彩的比赛。');
      await you.say_as_passer_by_and_wait(
        '观众B',
        '是啊，不亏是有马纪念，完全值回票价了。',
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `光是能看到那些很早之前就不再参赛的赛${flash.uma_sex_title}们久违的再度登场这一点就很令人兴奋了，结果没想到${
          flash.couple_title
        }居然还能跑出这么惊人的成绩。`,
      );
      await you.say_as_passer_by_and_wait(
        `观众B`,
        `跟后辈们拉开了一道非常明显的差距啊。难以想象，如果明年${flash.couple_title}还接着参赛，经典级的孩子们应该怎么面对。`,
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `说起经典级，${you.name} 看到了吗，荣进闪耀这局的发挥。`,
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '嗯，客观来讲其实非常出色，只可惜遇到了更强力的对手。',
      );
      await you.say_as_passer_by_and_wait(
        `观众A`,
        `真是令人遗憾的事情，不过${flash.sex}的成长应该也远没有到达尽头，这样想的话还真是期待明年的发展会如何啊。`,
      );
      await you.say_as_passer_by_and_wait(
        '观众B',
        '是啊，对明年的发展开始拭目以待了。',
      );
      era.drawLine();
      await era.printAndWait(
        `正如荣进闪耀赛前所言，从最开始到现在，已经克服了许多挑战的${flash.sex}，自身所蕴涵的实力已然不容小窥。`,
      );
      await flash.say_and_wait(`我回来了，${callname}。`);
      era.printButton('「比赛辛苦了，很出彩的发挥。」', 1);
      await era.input();
      await era.printAndWait(
        '即便在实战中与那些前辈之间仍旧存在些许的差距，但也到了可以接受的范围之内。',
      );
      await flash.say_and_wait(
        '呼……很畅快的比赛，虽然还是无法避免失败的结果。',
      );
      await era.printAndWait(
        `想必等到明年，再次成长起来的${flash.sex}，就可以做到真正意义上的同台竞技了。`,
      );
      await flash.say_and_wait(
        '不过通过日本杯和有马纪念这两场比赛，我确实能明显感受到自己的成长。',
      );
      await flash.say_and_wait('下一次，想超越我就没有这么容易了。');
      await era.printAndWait('巧合的是，面前人也是这么认为的。');
      await era.printAndWait(
        `因此，${you.name} 能清楚看到荣进闪耀此时的表情并没有那么的沮丧，甚至隐隐之间，还有些意犹未尽的感觉。`,
      );
      await flash.say_and_wait(
        '嘛，不过既然有马纪念赛已经结束了的话。那今年的计划，也算是正式落下帷幕了呢。',
      );
      await era.printAndWait(
        `说到这里，荣进闪耀充满干劲地点了点头。从比赛中得到激励的${flash.sex}已经迫不及待地准备开始执行第三年的计划了。`,
      );
      era.printButton('「等回去以后，一起来规划未来吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '初诣';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} fuji 富士奇石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     * @param {PrintedSpan} s_duty 荣进闪耀专属状态 [必行之事]
     */
    const f = async (flash, fuji, you, callname, s_duty) => {
      await era.printAndWait('又是一年春来到。');
      await era.printAndWait('正月，初诣。');
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `最强世代突入！？知名赛${flash.uma_sex_title}的再度崛起！`,
      );
      await era.printAndWait(
        `${you.name} 和荣进闪耀本应该安稳度过的上午，却被电视中一则突如其来的新闻打破了宁静。`,
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `前段时间久违的于日本杯和有马纪念中再度登场的知名赛${flash.uma_sex_title}们，在刚刚召开了记者会。`,
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `这场会议中，${flash.couple_title}都明确表示——将陆续参加今年一整年的G1比赛！！！`,
      );
      await you.say_as_passer_by_and_wait(
        '主持人',
        '考虑到在场的全员都是在各自的领域中留下巨大成就的实力高超者，难以想象这会给今年的闪光系列赛产生怎样巨大的动荡。',
      );
      await you.say_as_passer_by_and_wait(
        '主持人',
        '接下来让我们把镜头给现场记者——',
      );
      await you.say_as_passer_by_and_wait(
        `记者`,
        `富士奇石${flash.adult_sex_title}，请问在这个时间点表明要出战接下来的G1级重赏是出于什么意图呢？`,
      );
      await fuji.say_and_wait('嗯……具体的意图很难明说，是为了成为『高墙』吧。');
      await you.say_as_passer_by_and_wait('记者', '高墙？');
      await fuji.say_and_wait(
        '为了能成为后辈面前的高墙，所以我们才会前来参赛。',
      );
      await fuji.say_and_wait(
        `因此，来大胆挑战吧。我在这里，等待着 ${you.name} 哦。`,
      );
      await era.printAndWait('「哔。」');
      await era.printAndWait(
        '屏幕中的画面在富士奇石对摄像头伸手示意的这一刻定格。',
      );
      await flash.say_and_wait('……高墙，吗？');
      await era.printAndWait('而荣进闪耀，则在看完这则新闻后，微微皱眉。');
      await flash.say_and_wait(
        '虽然我并不畏惧，但为何要在这种时候做出这个决定呢？只是为了阻挡后辈前进的道路？',
      );
      era.printButton('「应该是『试炼』的意思吧？」', 1);
      await era.input();
      await era.printAndWait(
        `不过 ${you.name}，却是敏锐的捕捉到了富士奇石最后那段话中的含义。`,
      );
      await flash.say_and_wait('试炼？');
      await era.printAndWait(
        `听到 ${you.name} 的话，荣进闪耀歪了歪头，显得有些不解。`,
      );
      era.printButton(
        '「高墙固然起到阻挡的作用，但有能力的人，也可以将其翻越。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} 开口，为${flash.sex}简单解释起自己的看法。`,
      );
      await flash.say_and_wait(
        `原来如此，这么说富士奇石同学的本意是为了让后辈在挑战${flash.couple_title}的路上得到成长啊。`,
      );
      await era.printAndWait('荣进闪耀点了点头，露出了然的神色。');
      era.printButton('「就以日本杯和有马纪念时的态度面对吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await era.printAndWait(`下一秒，${flash.sex}充满自信地回应道。`);
      await era.printAndWait('「叮叮叮——」');
      await flash.say_and_wait('？');
      await era.printAndWait(
        `然后也就是在这时，代表联络的响铃突然自${flash.sex}的手机中响起。`,
      );
      await flash.say_and_wait('……母亲的来电？');
      era.drawLine();
      await flash.say_and_wait('………');
      await era.printAndWait('闪耀和父母的通话结束了。');
      era.printButton('「怎么了？」', 1);
      await era.input();
      await era.printAndWait(
        `而放下手机的${flash.sex}，一改刚才的轻松自在，显得很是严肃。`,
      );
      await flash.say_and_wait(
        '父亲和母亲说，会在明年的十月后半，来日本观看我的比赛。',
      );
      era.printButton('「十月后半？」', 1);
      await era.input();
      await flash.say_and_wait(
        '嗯，根据计划上已经决定的，位于那段时间的比赛，也就是秋季天皇赏。',
      );
      era.printButton('「比预期的要快啊。」', 1);
      await era.input();
      await era.printAndWait(
        `按照荣进闪耀原先的想法，是准备在日本这边取得各项G1重赏的荣誉之后，再回到家乡，向父母证明自己的成长。`,
      );
      await flash.say_and_wait(
        '我也是这么认为的，没有想到父母会有时间亲自前往日本，明明他们平日中都是非常忙碌的人才对。',
      );
      era.printButton(
        `「肯定是无论如何都想看到自己${
          flash.sex_code - 1 ? '女儿' : '儿子'
        }在赛场上奔跑的英姿吧。」`,
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '呵呵～嘛，不过换个思路想，这也未尝不是一件好事。',
      );
      await era.printAndWait(
        '说着，荣进闪耀拿出橙色记号笔，在计划书上进行涂改。',
      );
      await flash.say_and_wait(
        '毕竟还有什么能比在父母的亲自注视下取得比赛的冠军这件事更值得让他们骄傲的呢?',
      );
      await era.printAndWait(
        `${you.name} 看到${flash.sex}在秋季天皇赏这个出走预定旁画上好几个圈作为重点。`,
      );
      era.printButton('「说的是呢。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 点头，同意${flash.sex}的看法。`);
      await era.printAndWait(
        `只要能赢下秋季天皇赏的话，荣进闪耀的梦想就可以实现，而这正是 ${you.name} 作为训练员存在的目的。`,
      );
      await era.printAndWait(
        `那么，为了让${flash.sex}在得到这枚盾徽的过程更加顺利，${you.name} 决定——`,
      );
      era.printButton('「去神社祈福吧！」（全属性+20）', 1);
      era.printButton(`「需要更改未来的计划吗？」（获得【必行之事】状态）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '祈福，最开始是人们向神明表达自己的心愿，希望得到神明庇佑的一种仪式。',
        );
        await era.printAndWait(
          '而随着时代的发展，这一行为，慢慢被赋予了其他寓意。',
        );
        await era.printAndWait(
          '时至今日，祈福，早已变为了人们向往更好生活这一情感的载体。',
        );
        await flash.say_and_wait(
          '唔，虽然我并不认为这对比赛结果有实质性的帮助……',
        );
        await era.printAndWait(
          `听到 ${you.name} 的建议，荣进闪耀在思索片刻后，缓缓点头。`,
        );
        await flash.say_and_wait(
          '不过您说得对，希望自己可以得到理想的未来这种想法总是好的。',
        );
        await era.printAndWait(
          `说到这里，${you.name} 看见${flash.sex}将面前的计划书合拢，随后起身。`,
        );
        await flash.say_and_wait('而且今天是初诣，神社那边想必会很热闹吧。');
        era.printButton('「说不定附近还会有祭典哦。」', 1);
        await era.input();
        await flash.say_and_wait('祭典啊……呵呵～');
        await era.printAndWait('荣进闪耀轻笑几声，显然是被勾起了兴趣。');
        await flash.say_and_wait(
          `那就当作是为接下来一整年的计划献上祝福以及年假期间的娱乐活动好了。我们出发吧，${callname}。`,
        );
        await era.printAndWait(
          `说完，${flash.sex}拉起 ${you.name} 的手，示意一起向门外走去。`,
        );
      } else {
        await era.printAndWait(
          '虽然不是对荣进闪耀目前的实力没有信心，但是单纯从达成目标这个角度考虑的话。',
        );
        await era.printAndWait(
          `是不是相较于一直要跟前辈们进行高强度对战从而使得身体容易产生疲劳的G1重赏而言，氛围较为缓和的G2甚至G3比赛更适合${flash.sex}在维持状态的同时保存实力。`,
        );
        await flash.say_and_wait('唔，虽然客观来讲是个不错的选择，不过……');
        await era.printAndWait(
          `${you.name} 将这个想法讲述给荣进闪耀听，${flash.sex}在思索片刻后摇了摇头。`,
        );
        await flash.say_and_wait(
          `想来我的父母是肯定不希望自己的${
            flash.sex_code - 1 ? '女儿' : '儿子'
          }通过这种取巧的方法来赢下胜利的。`,
        );
        await era.printAndWait(
          `说着，${flash.sex}将面前的计划本合拢，认真道。`,
        );
        await flash.say_and_wait(
          '毕竟所谓冠军，只有堂堂正正的夺得才有其意义所在啊。',
        );
        await flash.say_and_wait(
          '是挑战的话就去迎接，是高墙的话就去跨越，唯有以这种方式实现的梦想，才能问心无愧。',
        );
        era.printButton('「还真是富有骑士精神的想法啊。」', 1);
        await era.input();
        await era.printAndWait(
          `看到${flash.sex}的这种态度，${you.name} 不由得感叹一句。`,
        );
        await flash.say_and_wait('呵呵～谢谢夸奖。');
        await flash.say_and_wait(
          '可能正是因为持有这种想法的缘故，所以小学时期的我才能在班级组织的戏剧表演中以骑士的身份出场吧。',
        );
        await era.printAndWait(
          `说到这里，荣进闪耀嫣然一笑。不知不觉间，${flash.sex}的神色又恢复了之前的轻松平和。`,
        );
        era.println();
        era.print([flash.get_colored_name(), ' 有了 ', s_duty, ' 的觉悟！']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_6: (() => {
    const title = '遇见之花';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `临近情人节，为了参观今年新推出的巧克力的款项，荣进闪耀邀请 ${you.name} 一起前往附近的甜品店。`,
      );
      await era.printAndWait('不过……');
      await you.say_as_passer_by_and_wait(
        `客人`,
        `等一下，明明是我先来的——好痛，${you.name} 撞到我了！`,
      );
      await you.say_as_passer_by_and_wait(
        '店员',
        '想要购买『巧克力年轮蛋糕』的顾客请来这里排队。啊！这位客人，店内是不允许奔跑的。',
      );
      await flash.say_and_wait('还真是……一片混乱呢。');
      await era.printAndWait('看着店内在四处嚷挤的人群，荣进闪耀皱紧眉头。');
      await flash.say_and_wait(
        '这样的话就没有办法仔细的调查展览柜里的甜品了，有点麻烦……',
      );
      era.printButton('「需要换一家店吗？」', 1);
      await era.input();
      await era.printAndWait(`见此，${you.name} 提议道。`);
      await flash.say_and_wait(
        '……毕竟情人节将至，恐怕别的地方的情况也跟这里差不多吧。',
      );
      await era.printAndWait('说到这里，荣进闪耀轻叹一口气。');
      await flash.say_and_wait(
        '嘛，不过想要的商品其实已经提前在网上购物成功了，所以即便没有办法在现场考察实际的情况也不是什么大的问题。',
      );
      await flash.say_and_wait('因此，现在就先回去吧。');
      era.drawLine();
      await flash.say_and_wait(
        '其实，自从我来到日本之后，每年的情人节目睹这种人们因为送礼而产生争执的画面，都会觉得有些不可思议呢。',
      );
      await era.printAndWait(
        '回到特雷森学园的路上，荣进闪耀突然发出一声感叹。',
      );
      era.printButton('「德国那边没有这样的习俗吗？」', 1);
      await era.input();
      await era.printAndWait(`见此，${you.name} 有些疑惑。`);
      await flash.say_and_wait(
        '准确来说是有的，但是比起巧克力，主流还是送花。',
      );
      await era.printAndWait(
        `说着，荣进闪耀伸出一根手指，开始为 ${you.name} 科普。`,
      );
      await flash.say_and_wait(
        '而且更进一步的讲，即便要赠礼，对象也不会是情侣之外的人。',
      );
      await flash.say_and_wait('也就是说，没有所谓的义理礼物。');
      era.printButton('「原来如此。」', 1);
      await era.input();
      await era.printAndWait(
        '换句话说，如果想要赠礼的话，那接受礼物的目标一定是十分重要的存在吧。',
      );
      await era.printAndWait(`${you.name} 了然地点了点头。`);
      await flash.say_and_wait(
        '以身边的人举例子的话，那就是每年情人节，我都能看到父亲送给母亲的玫瑰花束。',
      );
      await flash.say_and_wait('………');
      await era.printAndWait('说到这里，不知道为什么，荣进闪耀突然陷入沉默。');
      await era.printAndWait(
        `${you.name} 似乎感觉${flash.sex}的目光在隐隐之间向 ${you.name} 这边看了一眼。`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await flash.say_and_wait('……不，没什么。');
      await era.printAndWait('再度开口的荣进闪耀轻轻摇头。');
      await flash.say_and_wait(
        '总而言之，德国那边是不会以告白为由赠送礼物的。',
      );
      await flash.say_and_wait('如果要这么做，那双方只会是更深层次的关系。');
      await flash.say_and_wait(
        '因此从这个角度来讲，反而是日本这边会有在情人节这天告白的习俗，更让我诧异。',
      );
      era.printButton('「大概是一个顺水推舟的借口吧？」', 1);
      await era.input();
      await era.printAndWait(
        '告白是一个需要勇气的行为，以情人节告白这种传统节日中的传统习俗为由，来进行这类无论最终成败与否都会改变双方关系的行为，正好合适。',
      );
      await flash.say_and_wait('需要合适的理由来为真正的心意做掩护吗……');
      await flash.say_and_wait('呵呵～～倒是很不错的主意呢。');
      await era.printAndWait(
        '如同受到某种启发一般，荣进闪耀若有所思地点了点头。',
      );
      await flash.say_and_wait(
        `啊，看到学园的校门口。那么，由于接下来我还有事情需要去处理，所以先在此告别了，${callname}。`,
      );
      era.printButton('「路上小心。」', 1);
      await era.input();
      era.drawLine({ content: '情人节当天' });
      await flash.say_and_wait(`早上好，${callname}。`);
      await era.printAndWait(
        `刚推开训练室的大门，${you.name} 便看到一朵娇艳欲滴的蓝色花朵，竖立在办公桌旁的花瓶上。`,
      );
      era.printButton('「这朵花是？」', 1);
      await era.input();
      await flash.say_and_wait('蓝色矢车菊，德国的国花。');
      await era.printAndWait(`荣进闪耀微笑着为 ${you.name} 介绍。`);
      await flash.say_and_wait(
        '上次和您分别之后，回去的路上我仔细思索了一番。最终认为既然目前所在的国家是日本的话，那么在传统节日方面也要入乡随俗一点才好。',
      );
      era.printButton('「所以这就是你的情人节礼物吗？」', 1);
      await era.input();
      await flash.say_and_wait(
        `是的，因为 ${callname} 您没有用鲜花作为装饰品的习惯，所以将此作为礼物一来可以改善您的周边环境，二来……`,
      );
      era.printButton('「二来？」', 1);
      await era.input();
      await flash.say_and_wait(
        '二来在不经意间看到这朵鲜花时，说不定还会借此联想到那位赠送鲜花的人。',
      );
      await flash.say_and_wait('呵呵呵——');
      await era.printAndWait(
        '说完这些之后，荣进闪耀捂嘴轻笑，似乎显得很开心。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '挑战之路 · 五';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('春季三冠中的第一冠——大阪杯，就要开始了。');
      await flash.say_and_wait(
        '那么在比赛开始前再度确认一下吧，待会需要注意的对手。',
      );
      await era.printAndWait('赛前，选手休息室内。');
      await era.printAndWait('荣进闪耀拿出一份参赛名单。');
      await flash.say_and_wait(
        `首先是富士奇石同学，虽然大阪杯并非${flash.sex}最擅长的距离。但毫无疑问，拥有不俗实力的${flash.sex}即便在这种情况下也能够左右战局。`,
      );
      await flash.say_and_wait(
        `紧接着是曼城茶座同学，在赛前的选手采访中宣称对于一个月之后的春季天皇赏感觉到命运般的存在。因此大阪杯作为那场比赛的前哨战，想必${flash.sex}也会在此发挥出相当可怕的实力。`,
      );
      era.printButton('「第三位则是荣进闪耀……」', 1);
      await era.input();
      await flash.say_and_wait('诶。');
      await flash.say_and_wait('呵呵呵～');
      await era.printAndWait(
        `${you.name} 突然的话题插入让荣进闪耀笑的很开心。`,
      );
      await flash.say_and_wait(
        '也许真的是这样吧。毕竟相较于去年，我也成长了不少呢。',
      );
      await flash.say_and_wait(
        '对决强敌，领悟知识，收获经验。并在下一次的比赛中利用所得的这一切去奔跑，借此实现进步。',
      );
      await flash.say_and_wait(
        '以往经历的每一次挑战都是这样度过的，今天的大阪杯也不会例外。',
      );
      era.printButton('「所谓高墙，只会成为你更进一步的台阶。」', 1);
      await era.input();
      await flash.say_and_wait('嗯。');
      await era.printAndWait('荣进闪耀点了点头。');
      await flash.say_and_wait('昂首挺胸，跨越阻碍，最终圆梦而归……');
      await flash.say_and_wait(`我出发了！${callname}。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} gs 黄金船
     * @param {CharaTalk} festa 中山庆典
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, gs, festa, you) => {
      await era.printAndWait('四月，春天的粉丝大感谢祭活动到了');
      await era.printAndWait(
        `在今天，赛${flash.uma_sex_title}们会参与到多项可以和粉丝一起乐在其中的比赛中。`,
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `接下来让我们把目光转向G区的挑战者，${flash.couple_title}分别是荣进闪耀、中山庆典以及黄金船。`,
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `${flash.couple_title}要挑战的比赛是——粉丝搬运竞跑！`,
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `比赛的规则很简单，第一个和粉丝一起冲过终点线的赛${flash.uma_sex_title}即是冠军。`,
      );
      await you.say_as_passer_by_and_wait(
        '主持人',
        '那么，哪一个组合会获得胜利呢，让我们拭目以待！',
      );
      await era.printAndWait(
        '此时特雷森学园的操场内，主持人激情四射的话语成功调动起了场地的氛围，让拥挤的人群陷入喧闹。',
      );
      await era.printAndWait('紧接着——');
      await gs.say_and_wait('最终的赢家当然是本大爷啦！阿船命运的——');
      await era.printAndWait(
        '以迅捷的速度先发制人的黄金船随手从前排的观众中粗暴地拉出一位。',
      );
      await gs.say_and_wait(`大•米•袋！就决定是你啦！`);
      await you.say_as_passer_by_and_wait(
        '黄金船的粉丝',
        '呜呜啊啊——居然是扛米抱？？！！好高好快好吓人！',
      );
      await festa.say_and_wait('嗯……');
      await era.printAndWait('一旁的中山庆典见此也不甘示弱。');
      await festa.say_and_wait(`喂，那边的你。`);
      await era.printAndWait(
        `只见${flash.sex}在左顾右盼之后，选择一位站在人群中间的粉丝。`,
      );
      await festa.say_and_wait('一脸时来运转的表情，过来陪我跑一下吧。');
      await you.say_as_passer_by_and_wait(
        '中山庆典的粉丝',
        '诶诶，哇……居然单手就把我抬起来了……好厉害！',
      );
      await flash.say_and_wait('唔……');
      await era.printAndWait(
        `与${flash.couple_title}相比，荣进闪耀就显得仔细许多。`,
      );
      await era.printAndWait(`${flash.sex}在喧闹的人群中观察片刻。`);
      await flash.say_and_wait('那个……能请你来协助我一臂之力吗？');
      await era.printAndWait(
        `最终，${flash.sex}选择了一位站于人群的角落，手握黑白配色旗帜的观众。`,
      );
      await you.say_as_passer_by_and_wait('荣进闪耀的粉丝', '诶，我……我吗？');
      await flash.say_and_wait(
        '嗯，你的手上拿着的旗帜，是我的决胜服配色，对吗？',
      );
      await you.say_as_passer_by_and_wait(
        '荣进闪耀的粉丝',
        '虽……虽然是的，但我……我真的可以吗……」',
      );
      await flash.say_and_wait('那么，请容我失礼了。');
      await era.printAndWait(
        '也不知道有没有听见粉丝的这句回复，总之荣进闪耀牵起粉丝的手。',
      );
      await you.say_as_passer_by_and_wait('荣进闪耀的粉丝', '公，公主抱！！！');
      await era.printAndWait(
        `在一声惊呼之中，荣进闪耀抱起这位看起来有些怯懦的粉丝，向着前方已经与${flash.sex}拉开些许差距的二人奋起直追。`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '主持人',
        '比赛结束！本次粉丝搬运竞跑的冠军是——黄金船！！',
      );
      await era.printAndWait(
        '没过多久，伴随着黄金船的欢呼，这场娱乐性质的比赛便落下帷幕。',
      );
      await you.say_as_passer_by_and_wait(
        '主持人',
        '用令粉丝都骇然失魂的疾速跑法，粗暴地把胜利收入囊中！',
      );
      await you.say_as_passer_by_and_wait(
        '荣进闪耀的粉丝',
        '对不起，对不起！都怪我太碍事了……',
      );
      await era.printAndWait(
        '眼见支持的偶像没有得到冠军，荣进闪耀的粉丝连连低头，将错误都归结于自己身上。',
      );
      await flash.say_and_wait('不，你的发挥没有任何问题。');
      await era.printAndWait(
        '荣进闪耀摇了摇头，目光看向一旁的黄金船，无奈地轻叹一口气。',
      );
      await flash.say_and_wait(
        '而且像这种竞赛想要赢过那个人的话，还是很困难的吧。',
      );
      await flash.say_and_wait('毕竟——');
      await era.printAndWait(`说着，${flash.sex}脸上露出温柔笑容。`);
      await flash.say_and_wait(
        `说什么也不可能像${flash.sex}那样荒谬地对待自己珍贵的粉丝啊。`,
      );
      await you.say_as_passer_by_and_wait('荣进闪耀的粉丝', '！！！！');
      await you.say_as_passer_by_and_wait(
        '荣进闪耀的粉丝',
        `荣……荣进${flash.adult_sex_title}，非常感谢您！`,
      );
      await flash.say_and_wait(
        '呵呵～是我应该这么说才对哦，感谢你愿意来与我一起参加这场比赛。',
      );
      await era.printAndWait('荣进闪耀和粉丝相视一笑。');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_spr: (() => {
    const title = '挑战之路 · 六';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, you) => {
      await era.printAndWait('春季三冠第二冠——春季天皇赏。');
      await era.printAndWait(
        '作为长距离的G1级赛事，坐拥惊人的3200米长度，比荣进闪耀之前参加过的有马纪念还要多出整整700米的差距。',
      );
      await era.printAndWait(`毫无疑问，这是对${flash.sex}耐力的巨大考验。`);
      await flash.say_and_wait('实力强劲呢，曼城茶座同学。');
      await era.printAndWait('赛前，选手休息室内。');
      await era.printAndWait('荣进闪耀此时的语气罕见地有些凝重。');
      era.printButton(`「毕竟这是${flash.sex}擅长的领域。」`, 1);
      await era.input();
      await era.printAndWait(
        `而 ${you.name} 当然知道${flash.sex}在顾虑些什么。`,
      );
      await era.printAndWait(
        '因为与在长距离赛事方面缺乏经验的荣进闪耀不同。曼城茶座，可以说就是以此而闻名的。',
      );
      await era.printAndWait(
        `菊花赏、有马纪念、春季天皇赏，都是${flash.sex}在之前的生涯中取得的荣誉。`,
      );
      await era.printAndWait(
        '所以换句话说，这场春季天皇赏，完全就是在以己之短攻彼之长。',
      );
      await era.printAndWait(
        '在这种情况下，感觉到比赛凶险也是自然而然的事情。',
      );
      await flash.say_and_wait('话虽如此，但这也不是放弃的理由啊。');
      await era.printAndWait(
        `荣进闪耀摇了摇头，无论接下来要面对的情况如何，${flash.sex}向来都不会退缩。`,
      );
      era.printButton('「说起来。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 突然想起了一件事情。`);
      era.printButton('「有记者之前提出想在这场比赛结束后对你进行采访。」', 1);
      await era.input();
      await flash.say_and_wait('诶，采访？');
      era.printButton('「暂定的标题是『于最强世代中绽放的耀眼闪光』。」', 1);
      await era.input();
      await era.printAndWait(
        '因为从去年的日本杯开始，到上一场的大阪杯，在面对那些实力强劲的前辈时，荣进闪耀的表现都非常亮眼，想必这一次的春季天皇赏也不会例外。因此打算抢占热度的记者会事先拟出这个标题倒也无可厚非。',
      );
      await era.printAndWait(
        `${you.name} 向${flash.sex}详细解释了一遍这个标题的用意。`,
      );
      await flash.say_and_wait('耀眼闪光啊……');
      await era.printAndWait(
        `在听到 ${you.name} 的话后，荣进闪耀若有所思地点了点头。`,
      );
      await flash.say_and_wait('倒是十分简洁明了的概括呢。');
      await era.printAndWait(`${flash.sex}随即轻笑一声。`);
      await flash.say_and_wait('不过……');
      await era.printAndWait(
        `然后下一秒，${you.name} 看到${flash.sex}脸上的表情却又突然变得严肃。`,
      );
      await flash.say_and_wait('我和转瞬即逝的闪光可不一样。');
      await flash.say_and_wait('我会耀眼夺目地奔跑下去，直至最后的那一刻。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_23: (() => {
    const title = '未来之事 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, you) => {
      await era.printAndWait('春季三冠的第三冠——宝冢纪念，即将到来。');
      await era.printAndWait(
        '在上半年的比赛中频频出彩的荣进闪耀，自然也获得了参赛的资格。',
      );
      await era.printAndWait('不过……');
      await you.say_as_passer_by_and_wait(
        '医生',
        '为了身体的健康考虑，我不建议你在接下来的一段时间内参加比赛。',
      );
      await era.printAndWait(
        '……就在赛前的日常检查中，荣进闪耀的腿部却再次被确诊了隐患的存在。',
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        '虽然与去年日本德比赛后的那一次相比，程度轻微许多。',
      );
      await era.printAndWait(
        '但是为了安全起见的话，无论如何，近在眼前的宝冢纪念都是无缘去参加了。',
      );
      era.printButton('「闪耀……」', 1);
      await era.input();
      await era.printAndWait(
        `就在 ${you.name} 思索该怎么去劝说此时正满脸凝重之色地盯着病情报告的荣进闪耀放弃参赛时。`,
      );
      await flash.say_and_wait('我知道了，那就好好修养吧。');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `没想到，${flash.sex}却在长吐一口气后，如此说道。`,
      );
      await flash.say_and_wait('诶，很意外我会这么说吗？');
      await era.printAndWait(
        `然后下一秒，面对 ${you.name} 因此而惊讶的表情，${flash.sex}又歪了歪头，显得有些疑惑。`,
      );
      era.printButton('「只是联想到了去年的你。」', 1);
      await era.input();
      await era.printAndWait(`见此，${you.name} 如实说出脑海中的想法。`);
      await flash.say_and_wait('呵呵～');
      await era.printAndWait('闻言，荣进闪耀轻轻一笑。');
      await flash.say_and_wait(
        '如果是去年八月份之前的我的话，确实是无论如何都无法接受事前决定好的计划被突然更改这种情况的。',
      );
      await flash.say_and_wait(
        '但是，人的性格会随着经历的不同而发生变化，不是吗？',
      );
      await era.printAndWait(
        `说着，${flash.sex}摇了摇头，目光注视着 ${you.name}。`,
      );
      await flash.say_and_wait(
        '现在的我早已明白，我的梦想并非只属于我一个人，因此凡事都要在谨慎考虑之后再做决定。',
      );
      await flash.say_and_wait('逞强，是不被允许的。');
      era.printButton('「算是一种积极的改变啊。」', 1);
      await era.input();
      await era.printAndWait(
        `听到荣进闪耀用认真的语气这么说，${you.name} 不禁感叹一声，同时又轻舒了一口气，如同放下心来一样。`,
      );
      await flash.say_and_wait(
        '更何况，今年最重要的目标，是 10 月份的秋季天皇赏。',
      );
      await flash.say_and_wait(
        '在此之前的一切行动都要以能保证自己用完美的状态出赛这一前提制订。',
      );
      era.printButton('「那在此之后呢？」', 1);
      await era.input();
      await flash.say_and_wait('……诶？');
      await era.printAndWait(`兴许是好奇心在作祟，${you.name} 唐突问道。`);
      await flash.say_and_wait('在此……之后？');
      await era.printAndWait(
        `在闪光系列赛上通过不断取得荣誉的行为，进而让父母以${flash.sex}为荣，这是荣进闪耀的梦想。`,
      );
      await era.printAndWait(
        `但仔细想来，${flash.sex}似乎从来没有跟 ${you.name} 说过，在达成梦想之后，${flash.sex}又想要去做些什么。`,
      );
      await flash.say_and_wait('嗯……');
      await era.printAndWait(
        `虽然 ${you.name} 相信荣进闪耀肯定对此自有安排。但是看到${flash.sex}现在这种陷入深思状态，并且还时不时抬起头打量 ${you.name} 一眼的模样。`,
      );
      await era.printAndWait(`${you.name} 又不禁有些怀疑。`);
      era.printButton('「是还没有考虑好吗？」', 1);
      await era.input();
      await flash.say_and_wait('……不，其实这是最开始就规划好的事情。');
      await era.printAndWait('荣进闪耀轻轻摇头，随即说道。');
      await flash.say_and_wait(
        '从来到日本的那一刻起，我就已经在心里做好准备。等实现了梦想，足以成为那个理想中得到认可的自己时，就回到家乡，再经过数年的学习之后，继承父母的蛋糕店。',
      );
      era.printButton('「很美好的未来啊。」', 1);
      await era.input();
      await flash.say_and_wait('如果一切都顺利的话，那确实如此。但是……');
      era.printButton('「但是？」', 1);
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `荣进闪耀没有继续说话，只是沉默地看着 ${you.name}。`,
      );
      await flash.say_and_wait('……不，没什么。');
      await era.printAndWait(`良久之后，${flash.sex}才再度开口。`);
      await flash.say_and_wait(
        '可能只是因为和您相遇之后，经历的事情太多，所以需要再去花费时间好好规划一番吧。',
      );
      era.printButton('「原来如此。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 注意到，说出这句话时的${flash.sex}，眼神中闪烁着一种 ${you.name} 无法理解的波动。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '未来之事 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        '与去年的情况不同，这一次，荣进闪耀腿部的伤病恢复的速度很快。',
      );
      await era.printAndWait(
        `促成这种结果的原因固然跟病情的严重程度有所关联。但 ${you.name} 相信更重要的是，今年的${flash.sex}，是在采用非常积极的心态进行修养的。`,
      );
      await era.printAndWait(
        `因此，就在这届的夏季合宿开启的前一刻，${flash.sex}的身体，便已然平安无忧。`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '不知不觉间，距离作为目标的秋季天皇赏，已经近在咫尺了呢。',
      );
      await era.printAndWait(
        '月初，在合宿旅馆放置完行李的荣进闪耀，对着窗外碧蓝的大海，发出一声感叹。',
      );
      era.printButton(
        '「将这一次的夏季合宿，作为增添实力的机会好好努力吧。」',
        1,
      );
      await era.input();
      await era.printAndWait(`见此，${you.name} 鼓励道。`);
      await flash.say_and_wait(
        '嗯！毕竟腿部的伤势已经痊愈，完全不影响训练了呢。',
      );
      await era.printAndWait('荣进闪耀点了点头，随即转身向训练场地走去。');
      await flash.say_and_wait('不过………');
      await flash.say_and_wait('……最后啊。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `只是，在彻底离开之前，${you.name} 似乎听到从${flash.sex}那边传来的一句喃喃低语。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '未来之事 · 三';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('夏日的时光转瞬即逝。');
      await era.printAndWait(
        `在这最后的夏季合宿中，${you.name} 看着荣进闪耀的实力正在稳扎稳打的变强。`,
      );
      await era.printAndWait(
        `就如同填补完最后一块碎片的镜子一般，此时的${flash.sex}，状态已经趋于完美，能够发挥出来的实力也处于这几年的巅峰。`,
      );
      era.printButton(
        '（这样的话，在秋季天皇赏上的表现应该是没有问题了。）',
        1,
      );
      await era.input();
      await era.printAndWait(
        `见此，${you.name} 满意地点了点头。一种为${flash.sex}即将可以实现梦想的喜悦在心中油然而生。`,
      );
      await flash.say_and_wait(`${callname}？`);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await era.printAndWait(
        `而兴许是见到 ${you.name} 此时的表情有些奇怪，结束一轮训练后的荣进闪耀，站在 ${you.name} 的面前，歪头发问。`,
      );
      await flash.say_and_wait(
        '只是觉得您最近注视着我的眼神里，似乎蕴涵着某种与平常不同的情感呢？',
      );
      era.printButton('「可能是因为我的使命即将达成了吧。」', 1);
      await era.input();
      await flash.say_and_wait('达成使命？');
      era.printButton('「见证你梦想的实现。」', 1);
      await era.input();
      await era.printAndWait(
        `所谓训练员，就是帮助${flash.uma_sex_title}，引导${flash.uma_sex_title}，管理${flash.uma_sex_title}，最终令${
          flash.couple_title
        }得到一个圆满结局的存在。因此，${you.name} 觉得 ${you.name} 的说法并无不妥。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `但有些意外的是，在听到 ${you.name} 这么说之后，荣进闪耀脸上却并没有露出开心的表情，反而是陷入了思索。`,
      );
      await flash.say_and_wait('那在此之后呢？');
      await era.printAndWait(`良久，${flash.sex}才说道。`);
      era.printButton('「在此之后？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 眨了眨眼睛，不理解荣进闪耀如此发问的用意。`,
      );
      await flash.say_and_wait('换句话说，您的梦想是什么呢？');
      era.printButton('「当然是实现你的梦想。」', 1);
      await era.input();
      await era.printAndWait(`闻言，${you.name} 下意识回答。`);
      await flash.say_and_wait('呵呵～');
      await era.printAndWait(
        `而在听到 ${you.name} 这么说之后，荣进闪耀轻笑一声，似乎是意料到了 ${you.name} 会这样回答。`,
      );
      await flash.say_and_wait('不，我想知道的是您的梦想。');
      await era.printAndWait(`下一秒，${flash.sex}摇了摇头。`);
      await flash.say_and_wait('将这件事情排除在外之后的，您真实的想法。');
      await era.printAndWait(
        `这么说着的荣进闪耀，眼睛注视着 ${you.name}，湛蓝色的瞳孔中再次闪烁出2个月之前 ${you.name} 就无法理解的那道波动。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `不过现在，观察着面前人脸上时刻在变化的细微表情，${you.name} 似乎又有了新的想法了。`,
      );
      era.printButton('「让我再考虑一段时间吧。」', 1);
      await era.input();
      await era.printAndWait(`最终，${you.name} 如此说道。`);
      era.drawLine();
      await flash.say_and_wait('………');
      era.printButton('「闪耀？」', 1);
      await era.input();
      await era.printAndWait(
        `回到特雷森学园的车上，${you.name} 发现荣进闪耀的视线一直在盯着某个地方看。`,
      );
      await flash.say_and_wait('没什么，我只是在注视合宿场地。');
      era.printButton('「合宿场地？」', 1);
      await era.input();
      await flash.say_and_wait('嗯，因为从这里学到了很多东西呢。');
      await flash.say_and_wait(
        `就比如与 ${callname} 您一起，经历了许多训练，让自己的实力得到进一步的提升。`,
      );
      era.printButton('「原来如此。」', 1);
      await era.input();
      await flash.say_and_wait(
        '所以，一想到这可能是我最后一次来到这里，心里难免就会产生不舍之情。',
      );
      era.printButton('「将这份宝贵的回忆，铭记在心吧。」', 1);
      await era.input();
      await era.printAndWait(
        `见荣进闪耀此时有些微妙的表情，${you.name} 开口安慰道。`,
      );
      await flash.say_and_wait('嗯。');
      await era.printAndWait(
        `${flash.sex}点了点头，紧接着便转身看向 ${you.name}。`,
      );
      await flash.say_and_wait(`说起来，${callname}。`);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await flash.say_and_wait(
        '如果我在达成梦想之后，选择留在日本的话，您会怎么想呢？',
      );
      era.printButton('「……诶？」', 1);
      await era.input();
      await era.printAndWait(
        `荣进闪耀这突如其来的问题打了 ${you.name} 一个措手不及。`,
      );
      await flash.say_and_wait(
        '虽然继承父母的蛋糕店是已经决定好的事情，但在实现这个计划的途中可能也会因为某些原因在日本逗留一段时间也说不定。',
      );
      await era.printAndWait(
        `而大概是也知道自己的问题太过突兀，紧接着，${flash.sex}解释道。`,
      );
      era.printButton('「会觉得很开心吧。」', 1);
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `然后下一秒，${you.name} 的直言不讳就令${flash.sex}微微一愣。`,
      );
      await flash.say_and_wait('开心……吗？');
      era.printButton('「因为能继续看到你奔跑的身姿。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 点了点头，对荣进闪耀露出温柔笑容。`);
      await flash.say_and_wait('……这样啊。');
      await era.printAndWait(
        `荣进闪耀陷入沉默，${you.name} 看到${flash.sex}错开了和 ${you.name} 对视的眼眸。`,
      );
      era.printButton('「……闪耀？」', 1);
      await era.input();
      await flash.say_and_wait('……不，没什么。');
      await era.printAndWait(`片刻之后，再度开口的${flash.sex}摇了摇头。`);
      await flash.say_and_wait(
        '这些事情还是等之后在讨论吧。总之，目前的重点还是秋季天皇赏。',
      );
      await era.printAndWait(
        `说着，${flash.sex}脸上的表情快速变化为一种坚定。`,
      );
      await flash.say_and_wait('父亲和母亲都在那里等待着我，所以——');
      era.printButton('「要挺胸前进呢。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '璀璨之秋 · 一';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('万众瞩目的秋季天皇赏，终于开始了。');
      await era.printAndWait('观众「喔喔喔——！！」');
      await you.say_as_passer_by_and_wait(
        '闪耀的母亲',
        '啊啦啦，这就是日本的G1级比赛吗，真是太热烈了。',
      );
      await you.say_as_passer_by_and_wait(
        `闪耀的父亲`,
        `秋季天皇赏，这似乎是个历史悠久的比赛，而我们的Schatzi${flash.sex}……`,
      );
      await you.say_as_passer_by_and_wait(
        `荣进闪耀的母亲`,
        `相信${flash.sex}吧。加油啊，闪耀！`,
      );
      era.drawLine();
      await flash.say_and_wait('我的父母，好像平安到达赛场了呢。');
      await era.printAndWait(
        `赛前，选手休息室内，荣进闪耀看着手机中向${flash.sex}报安的短信，露出安心的微笑。`,
      );
      await flash.say_and_wait(
        '这样的话，一切都在按计划前行着。我的状态也非常不错，那么接下来便是……',
      );
      era.printButton('「以闪耀之名，赢下这场比赛。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await era.printAndWait('荣进闪耀用力点头，脸上浮现自信的表情。');
      await flash.say_and_wait(
        '往日经历的所有事物都是在为这场比赛的结果做铺垫。',
      );
      await flash.say_and_wait('所以，唯独今天。');
      await flash.say_and_wait('我必须要赢！');
      era.printButton('「向所有人，证明你的信念吧！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '璀璨之秋 · 二';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait(
        '主持人',
        '本次秋季天皇赏的冠军是——荣进闪耀！！！',
      );
      await you.say_as_passer_by_and_wait(
        `主持人`,
        `让我们恭喜${flash.sex}！！！`,
      );
      await you.say_as_passer_by_and_wait(
        `观众`,
        `荣进闪耀！恭喜 ${you.name}！！！`,
      );
      await flash.say_and_wait('呼……Juhu! Geschafft! 我做到了！');
      await era.printAndWait(
        '闪耀着灿眼光芒的东京竞马场上，以夺目之姿第一个冲过终点线的荣进闪耀向着喧闹的观众席热烈挥手。',
      );
      await flash.say_and_wait('非常感谢大家的支持！');
      await era.printAndWait(
        `${flash.sex}此时的笑容无比璀璨，这是在历经磨难达成理想之后无法压抑的喜悦。`,
      );
      await flash.say_and_wait(
        `在这成为德比赛${flash.uma_sex_title}的东京竞马场上，能够再次取得胜利，真是太……`,
      );
      await you.say_as_passer_by_and_wait(
        `闪耀的母亲`,
        `闪耀，恭喜 ${you.name}。`,
      );
      await flash.say_and_wait('！');
      await you.say_as_passer_by_and_wait(
        `闪耀的父亲`,
        `十分精彩的比赛，${you.name} 不亏是我们的骄傲。`,
      );
      await flash.say_and_wait('！！');
      await era.printAndWait(
        `然后，就在观众席的前方，远渡重洋而来，只为如愿目睹${
          flash.sex_code - 1 ? '女儿' : '儿子'
        }奔跑身姿的父母起身，向${flash.sex}鼓掌祝贺。`,
      );
      await you.say_as_passer_by_and_wait(
        `闪耀的母亲`,
        `当然，即便什么都不做，${you.name} 也是我们最可爱，最珍贵的宝物。这点永远不会发生变化。`,
      );
      await you.say_as_passer_by_and_wait(
        `闪耀的父亲`,
        `更重要的是，${you.name} 坚持贯彻了自己的道路，这点非常难得。`,
      );
      await you.say_as_passer_by_and_wait(
        `闪耀的父亲`,
        `所以，以普通人的身份，我向 ${you.name} 表达敬意。`,
      );
      await flash.say_and_wait('爸爸……妈妈……');
      era.printButton(
        '「恭喜你，闪耀，顺利达成了自己的梦想。你也是我的骄傲。」',
        1,
      );
      await era.input();
      await flash.say_and_wait('还有训练员……');
      await flash.say_and_wait('谢谢你们！');
      await era.printAndWait(
        '说到这里，荣进闪耀高雅的屈身。随后，单膝跪在了草地上。',
      );
      await flash.say_and_wait('呼——');
      await era.printAndWait(
        `${flash.sex}深吸一口气，念出了也许是在心中早已准备好的台词。`,
      );
      await flash.say_and_wait(
        '对于今天这一场胜利，我想要去感谢几位值得我发自真心去尊重的人。',
      );
      await flash.say_and_wait(
        '他们是我严肃和蔼的父亲和我温柔慈爱的母亲，还有……一直以引导的姿态陪伴于我身边，不懈余力帮助我的训练员。',
      );
      await flash.say_and_wait(
        '如果没有他们的帮助的话，如今的我，想必是无论如何也无法到达这种高度吧。',
      );
      await flash.say_and_wait(
        '因此请容许我，在此万众瞩目的场合，对他们，献上自己最深的敬意。',
      );
      await era.printAndWait(
        '荣进闪耀深深鞠躬，漫天的喝彩化作实质的光芒自天空飘落。',
      );
      await era.printAndWait('这是对于一位荣誉而归的骑士，应有的奖赏。');
      era.drawLine();
      await flash.say_and_wait(`我回来了，${callname}。`);
      era.printButton('「欢迎回来，闪耀。」', 1);
      await era.input();
      await era.printAndWait('赛后，选手休息室内。');
      await era.printAndWait(
        `回到房间的荣进闪耀，满脸轻快之色地向 ${you.name} 问好。`,
      );
      era.printButton('「和父母的叙旧结束了吗？」', 1);
      await era.input();
      await era.printAndWait(`见此，${you.name} 问道。`);
      await era.printAndWait(
        `因为荣进闪耀在走下赛场的第一刻就是和父母相拥在一起，站在旁边的 ${you.name} 也不好意思打扰他们的团聚，便干脆在休息室等候届时已经抒发完感情的${flash.sex}归来。`,
      );
      await flash.say_and_wait('嗯。');
      await era.printAndWait('荣进闪耀点了点头，显得很开心。');
      await flash.say_and_wait(
        '和父亲母亲简单交流了一下我离开德国这几年发生的事情。',
      );
      await flash.say_and_wait(
        '真的是一段很令人享受的时光啊，无论是听他们讲述自己的新故事，还是我将自己的新故事讲述给他们。',
      );
      await flash.say_and_wait('如果可以的话，好想一直这样持续下去。');
      await era.printAndWait(`${flash.sex}意犹未尽地发出感叹。`);
      await flash.say_and_wait(
        '不过遗憾的是现在时间已经不早了，父母必须先回旅馆休息了。',
      );
      era.printButton(
        '「你今天也辛苦了，回去好好休息吧。剩下的事情会有很充沛的时间去处理。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '在秋季天皇赏上勇夺桂冠，令父母引以为傲的荣进闪耀已经达成了自己的梦想。',
      );
      await era.printAndWait(
        `换句话说，${flash.sex}已经没有接着参加闪光系列赛的理由了。这种情况下，未来自然能有数不尽的时间用来和家人相处。`,
      );
      await flash.say_and_wait('……您说的对呢，所以我现在就是为此而来的。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `荣进闪耀自然是听出 ${you.name} 话语中想表达的意思。`,
      );
      await era.printAndWait(
        `于是下一秒，${you.name} 看见${flash.sex}收敛起脸上的微笑。`,
      );
      await flash.say_and_wait(`我有话想对您说，${callname}。`);
      era.drawLine();
      await flash.say_and_wait(
        '今年的六月份，您曾经问过我在达成梦想之后，想要去做些什么。',
      );
      await era.printAndWait('皎白的灯光照耀在荣进闪耀姣好的脸上。');
      await era.printAndWait(`${flash.sex}注视 ${you.name}，语气带着平和。`);
      era.printButton('「你说过想继承父母的蛋糕店。」', 1);
      await era.input();
      await flash.say_and_wait('嗯，这是一开始就决定好的事情。');
      await flash.say_and_wait(
        '但与此同时，我也说过。因为和您相遇之后，经历的事情太多，所以需要再去花费时间好好规划一番。',
      );
      era.printButton('「规划的结果是？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 顺着荣进闪耀的话意问道。`);
      await flash.say_and_wait('………');
      await era.printAndWait(
        `然后，${you.name} 听到${flash.sex}发出一声轻叹。`,
      );
      await flash.say_and_wait('有言必行，有恩必报，这是我的为人准则。');
      await flash.say_and_wait(
        '在您的帮助下，我成功得到了父母的认可，成长为了足以独当一面的人。而这是我梦寐以求的心愿。',
      );
      await era.printAndWait(
        `说着，荣进闪耀伸出手，将那本记载了${
          flash.sex
        }作为赛${flash.uma_sex_title}迄今为止的所有计划的笔记本交给 ${you.name}。`,
      );
      await flash.say_and_wait(
        '坦白来讲，即便是现在，在面对这个事实时，我都会产生一些不真实的想法。',
      );
      await flash.say_and_wait(
        '当然，也正是因为如此，才能体现出您对我的贡献之大。',
      );
      await flash.say_and_wait('所以，哪怕是杯水车薪也好。');
      await era.printAndWait(
        `${flash.sex}加重了自己的语气，作为对信念的强调。`,
      );
      await flash.say_and_wait(
        '作为报答，我也想要去帮助您，我想要去实现您的梦想。',
      );
      era.printButton('「这就是之前问我梦想的原因吗？」', 1);
      await era.input();
      await flash.say_and_wait('是的。');
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(`荣进闪耀这份坚定的态度令 ${you.name} 陷入沉默。`);
      await flash.used_to_say_and_wait(
        '我想通过不断取得荣誉的行为，进而让我的父母……以我为荣。',
      );
      await era.printAndWait(
        `${you.name} 又一次想起了一切的开始，那场选拔赛中，${flash.sex}对 ${you.name} 说的话。`,
      );
      await era.printAndWait(
        `起初，${you.name} 答应成为${flash.sex}的担当训练员，还是单纯因为受到${flash.sex}的主动委托。`,
      );
      await you.used_to_say_and_wait('会觉得很开心吧。');
      await you.used_to_say_and_wait('因为能继续看到你奔跑的身姿。');
      await era.printAndWait(
        `但慢慢的，在这个相处的过程中，${you.name} 又逐渐被${flash.sex}的特质所吸引。`,
      );
      await era.printAndWait(
        '无论是比赛开始前那份面对任何对手都毫无畏惧的勇气也好，还是比赛的过程中那份连千明代表都为之赞叹的求胜欲也好，或者比赛结束后那份无论什么结果都冷静应对，奋发图强的精神也好。',
      );
      await era.printAndWait('这种独属于荣进闪耀的精神颇具魅力。');
      await era.printAndWait(
        `因此，在从合宿场地回到特雷森学校的车上，当${flash.sex}问 ${you.name} 如果最终留在日本，${you.name} 会作何感想时，${you.name} 才会直言不讳地表述出自己的情感。`,
      );
      era.printButton('「我的梦想的话。」', 1);
      await era.input();
      await era.printAndWait('想到这里，答案已经很显而易见了。');
      await era.printAndWait(
        `${you.name} 觉得，${you.name} 也终于读懂了当时荣进闪耀眼神中那份深沉的波动所代表的含义。`,
      );
      era.printButton('「我想，看着你一直奔跑下去。」', 1);
      await era.input();
      await flash.say_and_wait('！！！');
      await era.printAndWait(
        `选手休息室内，本因再无牵挂的异国${flash.teen_sex_title}听到 ${you.name} 的话瞪大双眼。`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait('呵……呵呵……');
      await era.printAndWait(`在沉默片刻之后，${flash.sex}突然放声欢笑。`);
      await flash.say_and_wait('呵呵呵呵——');
      await flash.say_and_wait('我知道了，如果这就是您的想法的话。');
      await era.printAndWait(
        `直到心头升起的情绪彻底发泄完毕，${flash.sex}才重新看向 ${you.name}。`,
      );
      await era.printAndWait('湛蓝色的瞳孔中，尽是温柔。');
      await flash.say_and_wait('那么……');
      await flash.say_and_wait('如您所愿，我的训练员。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '未来之事 · 四';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        '闪耀系列赛每年热度最高的盛事，有马纪念，即将于今日开赛。',
      );
      await flash.say_and_wait('呼……比赛即将开始了呢。');
      await era.printAndWait(
        `赛前，选手休息室内。荣进闪耀看了眼时间，随后起身，向 ${you.name} 道别。`,
      );
      await flash.say_and_wait(
        '呵呵～说起来，这还是第一次呢，没有以自己的梦想为前提参加比赛。',
      );
      await era.printAndWait(
        `然后紧接着下一秒，${flash.sex}又带着调侃地露出微笑。`,
      );
      era.printButton('「一个月的休假，感觉如何？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 则拍了拍${flash.sex}的肩膀，关切地问道。`,
      );
      await era.printAndWait(
        '兴许是在完成梦想之后，自身对于比赛的执念有所消散。荣进闪耀并没有按照最初预定的那样去参加日本杯，而是利用这一个月的空闲时间和远道而来的父母在日本各地旅行游玩。',
      );
      await flash.say_and_wait('嗯，感觉身体得到彻底的放松了呢。');
      await era.printAndWait('荣进闪耀点头，目光转向远方。');
      await flash.say_and_wait(
        '想必我的父母现在，也在家里关注这场有马纪念赛的结果吧。',
      );
      era.printButton('「在他们的眼前再次赢下一场比赛的胜利吧。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
      await era.printAndWait(`${flash.sex}自信应允，随后转身向门外走去。`);
      await flash.say_and_wait(`说起来，${callname}。`);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await era.printAndWait(
        `不过在彻底离开之前，${flash.sex}好像还有话要跟 ${you.name} 说。`,
      );
      await flash.say_and_wait(
        '能在对我说一次吗？去年皋月赏赛前，选手休息室内，您对我说的那句话。',
      );
      era.printButton('「皋月赏赛前？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 眨了眨眼睛，顿时明白了荣进闪耀的所指。`,
      );
      await era.printAndWait(
        `虽然 ${you.name} 对${flash.sex}说过很多的话，鼓励也好，指引也好。但在如今这个场合，最合适的，恐怕也只有这句了。`,
      );
      era.printButton('「行应行之事……」', 1);
      await era.input();
      await flash.say_and_wait('尽应尽之力。');
      await flash.say_and_wait('呵呵呵～');
      era.printButton('「哈哈。」', 1);
      await era.input();
      await era.printAndWait(`接龙成功，${you.name} 们两人同时哈哈大笑。`);
      await flash.say_and_wait('那么，我出发了。');
      await era.printAndWait(
        `就这样，在这种愉快氛围的包裹下，${flash.sex}大步迈开自己的双腿，向赛场走去。`,
      );
      era.printButton('「加油！」', 1);
      await era.input();
      await era.printAndWait(
        `而 ${you.name} 目送着${flash.sex}离去的背影，用力挥手。`,
      );
      await era.printAndWait('不得不说这真是一幅美妙的画面。');
      await era.printAndWait(
        `而正如答应好的一样，${you.name} 相信，这种两人之间的守候，在未来的日子里，还会持续许久许久。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_black_treasure: (() => {
    const title = '漆黑珍宝';
    /**
     * @param {CharaTalk} flash 荣进闪耀
     * @param {CharaTalk} you 玩家
     * @param {string} callname 荣进闪耀对玩家的称呼
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `独自在商场准备购买生活用品时，${you.name} 突然在附近看到了满脸闷闷不乐的荣进闪耀。`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await era.printAndWait(`见此，${you.name} 好奇地询问道。`);
      await flash.say_and_wait(`啊，${callname}。`);
      await era.printAndWait(
        `听出声音的来源是 ${you.name}，荣进闪耀有些惊讶。`,
      );
      await flash.say_and_wait('不，没什么。');
      await era.printAndWait(`然后下一秒，${flash.sex}又摇了摇头。`);
      await flash.say_and_wait(
        '只是我突然想念起在家乡吃到的料理，所以想要尝试在日本这边寻找到食材，进行复刻。',
      );
      await flash.say_and_wait('只是……');
      await era.printAndWait('说到这里，荣进闪耀的脸上迅速闪过一丝纠结。');
      era.printButton('「很贵吗？」', 1);
      await era.input();
      await era.printAndWait(
        `而敏锐地捕捉到这一情况的 ${you.name}，似乎猜到了${flash.sex}情绪低落的原因。`,
      );
      await flash.say_and_wait('……嗯。');
      await era.printAndWait(`闻言，${flash.sex}沉默片刻，随后缓缓点头。`);
      await flash.say_and_wait(
        '制作料理所需要用到的高端鱼子酱，在这边商场的价格，超过了我这个月可用的零花钱范畴。',
      );
      await flash.say_and_wait(
        '虽然也可以使用其他更为便宜的品牌进行替代，但是这样做出来的成品就不是我最开始所怀念的那份味道了。',
      );
      await era.printAndWait(`话毕，${you.name} 看见${flash.sex}轻叹一口气。`);
      await era.printAndWait(`面对此时满脸沮丧的荣进闪耀，${you.name} 决定——`);
      era.printButton('「顺其自然」', 1);
      if (era.get('flag:当前马币') > 50) {
        era.printButton(`「借给${flash.sex}钱」`, 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `虽然 ${you.name} 的心中划过替面前人购买商品的打算，但仔细想来，以荣进闪耀的性格想必是不会答应这件事情的。`,
        );
        await era.printAndWait(
          `于是最终，${you.name} 也只是看着${flash.sex}愁眉苦脸地离开商场。`,
        );
      } else {
        await era.printAndWait(
          `虽然 ${you.name} 的心中划过替面前人购买商品的打算，但仔细想来，以荣进闪耀的性格想必是不会答应这件事情的。`,
        );
        await flash.say_and_wait('诶？');
        await era.printAndWait('不过话虽如此，但也不是没有解决办法。');
        await flash.say_and_wait(`${callname} 您的意思是……打算替我支付吗？`);
        await era.printAndWait(`听到 ${you.name} 的提议，荣进闪耀愣了几秒。`);
        await flash.say_and_wait('您的好意我心领了，但这种事情果然……');
        await era.printAndWait(
          `紧接着，反应过来的${flash.sex}猛然摇头，表情甚是抗拒。`,
        );
        era.printButton('「只是将你未来的零花钱提前透支而已。」', 1);
        await era.input();
        await era.printAndWait(
          `见此，${you.name} 向荣进闪耀重申「借」和「请」的区别。`,
        );
        await era.printAndWait(
          `${you.name} 相信比起单纯的受到他人馈赠，这种更为公平的形式${flash.sex}会较容易接受。`,
        );
        await flash.say_and_wait('唔……');
        await era.printAndWait(
          `果然，在听到 ${you.name} 的话后，${flash.sex}的脸上浮现出迟疑的表情。`,
        );
        await flash.say_and_wait('……我知道了。');
        await era.printAndWait(
          `最终，在经过再三思索之后，${flash.sex}点头，接受了 ${you.name} 的帮助。`,
        );
        await flash.say_and_wait('我会铭记您的这份恩情的。');
        await era.printAndWait(`${flash.sex}郑重道。`);
        await flash.say_and_wait('我保证。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
