/**
 * @file 待兼福来 - 爱慕
 * @author ALEX
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = '恋心初动';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '某个假日，',
        kitaru.get_colored_name(),
        ' 正思考着最近发生的事情。',
      ]);
      await kitaru.say_and_wait(
        ['唔，想到 ', callname, ' 心跳会加速是什么的预兆呢？'],
        true,
      );
      await kitaru.say_and_wait('嗯……一定是大吉的状况吧！', true);
      await kitaru.say_and_wait(
        ['果然啊！', callname, ' 和占卜结果说的一样，是我的命定之人！'],
        true,
      );
      await kitaru.say_and_wait('哼哼，我的占卜是不会有错的！', true);
      await kitaru.say_and_wait(
        '那么，之后也一直遵循下去就能找到属于自己的幸福吧？',
        true,
      );
      await kitaru.say_and_wait('是这样吗……？', true);
      await kitaru.say_and_wait(
        [
          '明明 ',
          callname,
          ' 给出的指示有时和占卜出的结果完全不一致，那为什么我还会……',
        ],
        true,
      );
      era.printButton('「待兼福来？」', 1);
      await era.input();
      await kitaru.say_and_wait(['啊！', callname, '，没想到能在这里见到你！']);
      await kitaru.say_and_wait('诶！我吗？');
      await kitaru.say_and_wait(
        '唔……通过灵摆占卜到，这里是一个很适合想事情的地点哦！',
      );
      await kitaru.say_and_wait([callname, '是要去干什么呢？']);
      era.printButton('回答', 1);
      await era.input();
      await kitaru.say_and_wait('喔！正好，那一起去吧！');
      await kitaru.say_and_wait('嗯！为什么？');
      await kitaru.say_and_wait('是……是因为……');
      await era.printAndWait([
        '似乎是自己也不知道为什么会突然说出这番话来，有些着急的',
        kitaru.teen_sex_title,
        '居然开始下意识的捋着自己的耳朵来。',
      ]);
      era.printButton('「占卜的结果？」', 1);
      await era.input();
      await kitaru.say_and_wait('对的对的！');
      await era.printAndWait([
        '看来是察觉到了 ',
        you.get_colored_name(),
        ' 似笑非笑的目光，',
        kitaru.get_colored_name(),
        ' 的脸颊泛起了些微的绯红。',
      ]);
      await kitaru.say_and_wait('总之就是能开运啦！');
      await era.printAndWait([
        '之后在',
        kitaru.sex,
        '的死缠烂打之下，不得不同意了一起去购买日用品的要求。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = '爱欲';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '某个晚上，躺在床上的 ',
        kitaru.get_colored_name(),
        '，得意洋洋地思考起今天是如何通过占卜来解决了同学疑惑的。',
      ]);
      await kitaru.say_and_wait(
        '说起来，最近大家的占卜好像有不少都是关于恋爱的。',
        true,
      );
      await kitaru.say_and_wait('嘿嘿，我可真是个恋爱达人呢。', true);
      await kitaru.say_and_wait('欸……恋爱吗？', true);
      await kitaru.say_and_wait('话说，我还没占卜过自己的恋爱运势呢……', true);
      await kitaru.say_and_wait(['……', you.get_colored_actual_name()], true);
      await kitaru.print_and_wait(
        '只是想到这个话题，自己训练员的身影就出现在脑海里。',
      );
      await kitaru.print_and_wait(
        '训练时的样子，和自己一起占卜的样子，还有帮自己解签的样子。',
      );
      await kitaru.print_and_wait(
        '明明平时都没什么特别的感觉，但是现在想起，每一处细节都颇为清晰。',
      );
      await kitaru.print_and_wait(
        '在擦汗的时候拂过脖颈的手指，按摩时触碰自己脚底的温暖掌心，乃至对自己施以铁抓时掠过耳根的刺激感觉。',
      );
      await kitaru.print_and_wait(
        '舍友应该已经进入了梦乡，甚至还有轻微的呼噜声传来。',
      );
      await kitaru.print_and_wait(
        '但自己依旧辗转反侧，难以入眠，小腹处更是微微发热',
      );
      await kitaru.print_and_wait(
        '掀开被子，渗出些许细汗的双腿已经黏糊糊的并拢在了一起，让膝侧的软肉互相蹭弄着。',
      );
      await kitaru.say_and_wait('呼……');
      await kitaru.say_and_wait('还是来占卜一下吧。');
      await kitaru.print_and_wait('伸手摸出了自己放在床头的塔罗牌，');
      await kitaru.say_and_wait('简单抽一张吧……');
      era.println();
      era.printButton('星星 正位（升级关系）', 1);
      era.printButton('世界 逆位（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('凭心意顺势而行吗？');
        await kitaru.say_and_wait('欸嘿，也是理所应当呢！');
        await kitaru.say_and_wait('毕竟是认定了的命运之人呢！');
        await kitaru.say_and_wait('唔……');
        await kitaru.print_and_wait('更是燥热难耐。');
        await kitaru.print_and_wait(
          '在本就确定的答案通过了占卜的肯定之后，刚刚还捏着塔罗牌的右手，不知何时已经伸入睡衣，抚在了自己的胸前。',
        );
        await kitaru.print_and_wait(
          '指尖划过侧乳，另一手配合的微微按压了一下小腹，而后中指与食指并拢，探入了已经湿热的内裤中。',
        );
        await kitaru.say_and_wait('啊！');
        await kitaru.print_and_wait(
          '先是因为生涩带来的短暂钝痛，而后是因为逐渐熟练起来的酥麻快感。',
        );
        await kitaru.print_and_wait(
          '抿着唇以不让熟睡的室友发觉，但因快感而失控深入的手指还是带来了止不住的低吟。',
        );
        await kitaru.say_and_wait([you.get_colored_actual_name(), '……呜……']);
        await kitaru.print_and_wait([
          '回忆起和 ',
          callname,
          ' 握手时，有些粗糙的食指，想象着那根食指在插入自己体内的时候会怎样毫不留情的对待自己。',
        ]);
        await kitaru.print_and_wait([
          '刮蹭，摩擦，挑逗，直到最后的痉挛，狠狠的惩罚自己这个会对训练员发情的失格',
          kitaru.uma_sex_title,
          '。',
        ]);
        await kitaru.say_and_wait([you.get_colored_actual_name(), '！']);
        await kitaru.say_and_wait('嗯！！！');
        await kitaru.print_and_wait(
          '全身颤抖不停，素白色的内裤被喷出的爱液弄的泥泞不堪。',
        );
        await kitaru.say_and_wait('欸嘿……喜欢……');
      } else {
        await kitaru.say_and_wait('唉……');
        await kitaru.say_and_wait('暂时的停滞吗……');
        await kitaru.print_and_wait([
          '强忍着躁动的身体，',
          kitaru.get_colored_name(),
          ' 用被子蒙上了头。',
        ]);
        await kitaru.print_and_wait([
          '但第二天早上，已经湿透了的内裤，因发情而挺立的乳头，说明了 ',
          kitaru.get_colored_name(),
          ' 的梦境并不像她期望的那样安宁。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = '热恋';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '结束了日常训练，和 ',
        callname,
        ' 一起回到了办公室。',
      ]);
      await kitaru.print_and_wait([
        '接过了 ',
        callname,
        ' 递来的水杯，本想要大口畅饮，却又在 ',
        callname,
        ' 的制止下小口小口的吞咽了起来。',
      ]);
      await kitaru.print_and_wait([
        '在 ',
        callname,
        ' 拿起毛巾的时候，配合的伸出头，假装不经意地拉开运动外套的拉链，将那对在湿透的衬衫下若隐若现的巨乳示给 ',
        callname,
        '。',
      ]);
      await kitaru.print_and_wait([
        '见到 ',
        callname,
        ' 有些不自在的扭过头去，又故意握住',
        you.sex,
        '的胳膊询问起下一步的训练计划。',
      ]);
      await kitaru.print_and_wait('暧昧的气氛就不断在办公室中蔓延开来。');
      await kitaru.print_and_wait([
        '虽然最后往往会因为过于没有距离感的动作而遭到 ',
        callname,
        ' 的铁爪攻击。',
      ]);
      await kitaru.print_and_wait('……');
      await kitaru.print_and_wait([
        '最初遇见 ',
        callname,
        ' 的自己是抱着一个怎样的心态呢？',
      ]);
      await kitaru.print_and_wait('犹如将死之人抓住了唯一可见的救命稻草？');
      await kitaru.print_and_wait('抓住船骸的奥德修斯？');
      await kitaru.print_and_wait('因食用灵芝草而免于死亡的神农？');
      await kitaru.print_and_wait('甚至是，遇见了素戋呜尊的天照大神？');
      era.printButton('「福来，我去交一下材料，你先休息一会儿吧……」', 1);
      await era.input();
      await kitaru.print_and_wait([
        '自原本甜腻的气氛中被拽出，留给 ',
        kitaru.get_colored_name(),
        ' 的只剩下一片空虚。',
      ]);
      await kitaru.print_and_wait([
        '瘫坐在搭着 ',
        callname,
        ' 外套的座椅上，呆呆地凝视着空无一人的办公室。',
      ]);
      await kitaru.print_and_wait([
        '灵摆，骰子，琥珀，在通过各种借口送给 ',
        callname,
        ' 的占卜道具中，塔罗牌自然也在其中。',
      ]);
      era.println();
      era.printButton('恋人 正位（升级关系）', 1);
      era.printButton('月亮 正位（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.print_and_wait('毫不意外。');
        await kitaru.say_and_wait('喜欢……');
        await kitaru.say_and_wait(['喜欢', callname, '……']);
        await kitaru.print_and_wait([
          '即使在重复了好几遍之后，自己还在呢喃着 ',
          you.get_colored_actual_name(),
          ' 的名字，宣告了自己的参拜路上被这个',
          you.phy_sex_title,
          '闯入的事实。',
        ]);
        await kitaru.print_and_wait(
          '被心爱之人的气味包围，理应在脱离训练状态后逐渐冷却下来的身体，却在这个时候变得更加炽热。',
        );
        await kitaru.say_and_wait('哈……呼呼……');
        await kitaru.print_and_wait([
          '把椅背上的外套袖口抵在鼻尖，一边伸手探入不知是否因为汗水而再次变得濡湿的内裤中。',
        ]);
        await kitaru.say_and_wait([you.get_colored_actual_name(), '……']);
        await kitaru.print_and_wait([
          '喊着 ',
          callname,
          ' 的名字，用手指在变得黏糊糊的小穴内翻搅着穴肉。',
        ]);
        await kitaru.say_and_wait([
          you.get_colored_actual_name(),
          '……',
          you.get_colored_actual_name(),
          '～❤️',
        ]);
        await kitaru.print_and_wait([
          '衔着充满着 ',
          you.get_colored_actual_name(),
          ' 的气味的外套，急促的喘息着，嘴角滴答的流下了涎水。',
        ]);
        await kitaru.print_and_wait([
          '难以满足般的，让手指对穴道的翻弄插玩愈发激烈，直到在某一次抽插中，迷离的橙色双瞳微胀，反弓起身子。',
        ]);
        await kitaru.say_and_wait('唔❤️……咿咿咿❤️！！！');
        await kitaru.print_and_wait(
          '本就不是为了吸水而设计的运动长裤没有拦住泄出的爱液，就这样在办公室的椅子上留下了一片湿痕。',
        );
        await kitaru.print_and_wait([
          '来自 ',
          kitaru.get_colored_name(),
          ' 的这样一个下流',
          kitaru.uma_sex_title,
          '的，糟糕的气味充满了整间办公室。',
        ]);
        await kitaru.print_and_wait([
          '该怎么办呢？',
          callname,
          ' 一定会发现的吧。',
        ]);
        era.drawLine();
        era.printButton('推开门', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '见 ',
          kitaru.get_colored_name(),
          ' 正有些局促不安的向',
          you.get_colored_name(),
          '道起歉来。',
        ]);
        await kitaru.say_and_wait(['啊啊啊！', callname, '！非常抱歉！']);
        await kitaru.say_and_wait('只是想给你泡一杯咖啡！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的几乎被咖啡淋遍的下半身衣物，正如同样湿透的座椅与外套一被起',
          kitaru.uma_sex_title,
          '的体温加热后散发出咖啡的香气。',
        ]);
        era.printButton('「没事吧？」', 1);
        await era.input();
        await kitaru.say_and_wait('……没……没事。');
        await era.printAndWait([
          '幸好那个时候的咖啡已经凉了，不然 ',
          kitaru.get_colored_name(),
          ' 被烫伤就不好了。',
        ]);
      } else {
        await kitaru.say_and_wait('唉……');
        await kitaru.say_and_wait(
          '在占卜时，月亮出现，经常表示当事人感到不安、迷惑与恐惧，可能是面对未来的迷惘，或是面对陌生情况的不安。',
        );
        await kitaru.print_and_wait('怀有恐惧，没有信心，不安而情绪化。');
        await kitaru.print_and_wait([
          '这样的自己，是不是根本就不配拥有 ',
          callname,
          ' 的爱呢？',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = '告白';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('咚，咚，咚');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '如往常一样，叫做 ',
        kitaru.get_colored_name(),
        ' 的少女再次敲响了 ',
        you.get_colored_name(),
        ' 家的门口。',
      ]);
      await era.printAndWait([
        '对，不是 ',
        you.get_colored_name(),
        ' 的办公室，或者在特雷森宿舍的门。',
      ]);
      await era.printAndWait([
        '最开始，只是因为代她保管那些开运道具，才让她知道了 ',
        you.get_colored_name(),
        ' 的住址。',
      ]);
      await era.printAndWait([
        '在那之后，不只是开运道具，而是单纯为了请教训练计划，或是要求出去玩，甚至只是因为「今天是大吉」这样虚无缥缈理由而来找 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('多备了一双拖鞋，一只杯子，一对碗筷。');
      await era.printAndWait([
        '名叫 ',
        you.get_colored_actual_name(),
        ' 的训练员生活中已经充满了 ',
        kitaru.get_colored_name(),
        ' 的痕迹。',
      ]);
      await era.printAndWait('咚，咚，咚');
      await kitaru.say_and_wait([callname, '！你在吗？']);
      await era.printAndWait([
        '看来 ',
        kitaru.get_colored_name(),
        ' 等着有些不耐烦了。',
      ]);
      era.printButton('开门', 1);
      await era.input();
      await era.printAndWait([
        '假设有一位和 ',
        you.get_colored_name(),
        ' 没有血缘关系的异性。',
      ]);
      await era.printAndWait([
        '天天黏着 ',
        you.get_colored_name(),
        '，还能自由的出入 ',
        you.get_colored_name(),
        ' 家的房门，明明工作日的时都住在学院的宿舍，出门却得非常有仪式感的约在外面见面，那么两人可能会是什么关系呢？',
      ]);
      await era.printAndWait([you.get_colored_name(), '打开了门']);
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '门口是身着决胜服的 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('蓝白色的水手服衬出了她姣好的身材。');
      await era.printAndWait(
        '可能是由于跑过来的缘故，裸露在外的双肩遍布着细密的汗珠。',
      );
      await era.printAndWait(
        '其下只是贴了乳贴的诱人胸部，在洁白的衣物上撑出明显的形状，在呼吸间上下起伏着。',
      );
      await era.printAndWait([
        '作为训练员的 ',
        you.get_colored_name(),
        ' 知道，赛',
        kitaru.uma_sex_title,
        '们只有在极为重要的场合才会穿上这样的服装。',
      ]);
      await kitaru.say_and_wait('那个……');
      await kitaru.say_and_wait('不邀请我进来吗？');
      await era.printAndWait([
        '她抬起头望着 ',
        you.get_colored_name(),
        '，橙黄色的双眸已经蒙上了一层湿润的雾气。',
      ]);
      await era.printAndWait(
        '而后是用餐时，故意仰头吞咽的动作，让她因拉扯而紧绷的水手服下沉甸甸的乳球更为突出。',
      );
      await era.printAndWait(
        '再到饭后娱乐时，坐在沙发上的她交叠摩挲着白丝双腿，带动着腰侧系着的绘马在碰撞间发出响声。',
      );
      await era.printAndWait([
        '已是深夜，',
        kitaru.get_colored_name(),
        ' 仍然没有提出回去的要求，房间内陷入尴尬的沉默。',
      ]);
      await kitaru.say_and_wait([you.get_colored_actual_name(), '……']);
      await era.printAndWait([
        '喊出了 ',
        you.get_colored_name(),
        ' 的名字，',
        kitaru.get_colored_name(),
        ' 走到了 ',
        you.get_colored_name(),
        ' 的身边坐下。',
      ]);
      await kitaru.say_and_wait(['那个，', callname, ' 能看出来的吧……喜欢……']);
      await kitaru.say_and_wait(
        '明明给你添了那么多的麻烦，却还是愿意陪着我追着运势跑下去……',
      );
      await kitaru.say_and_wait('很温暖呢……给我带来了那么多的好运气。');
      await kitaru.say_and_wait('所以，如果不介意的话，让我也回报一下你吧……');
      await kitaru.say_and_wait('请把小福我变成属于你的开运道具吧。');
      await era.printAndWait([
        '身侧的 ',
        kitaru.get_colored_name(),
        ' 握紧了 ',
        you.get_colored_name(),
        ' 的手，',
        kitaru.uma_sex_title,
        '略高的体温自她的掌心不断传递过来。',
      ]);
      era.printButton('接受（升级关系）', 1);
      era.printButton('拒绝（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('啾……啾溜……噗呲……咕啾……');
        await era.printAndWait([
          '让 ',
          kitaru.get_colored_name(),
          ' 仰头，舌与舌难舍难分，紧密交缠，涎液形成的银丝从空中断裂。',
        ]);
        await kitaru.say_and_wait('唔……咕……');
        await era.printAndWait(
          '稍稍分开又继续催人情欲的深吻，肆意感受着担当的气味。',
        );
        await era.printAndWait([
          '十指相扣，',
          you.get_colored_name(),
          ' 将 ',
          kitaru.get_colored_name(),
          ' 推到在了沙发上。',
        ]);
      } else {
        await era.printAndWait([
          '将 ',
          kitaru.get_colored_name(),
          ' 送回了特雷森学院……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '佳偶';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 听别人说过耳朵大的',
        kitaru.uma_sex_title,
        '性欲强。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也听说跑长距离的',
        kitaru.uma_sex_title,
        '性欲强',
      ]);
      await era.printAndWait('或许之前还有过怀疑……');
      await era.printAndWait([
        '但现在的 ',
        kitaru.get_colored_name(),
        ' 毫无疑问的成为了上述几个说法的实证。',
      ]);
      await era.printAndWait(
        '明明身上已经沾满了精液的痕迹，若干用过的避孕套装饰般挂在身上，小穴里的浓精还正止不住的往外溢。',
      );
      await era.printAndWait([
        '即使已经变成了这样，这妖艳的栗毛还在尽力用她那支离破碎的语言对 ',
        you.get_colored_name(),
        ' 发出求欢的邀请。',
      ]);
      await kitaru.say_and_wait('呜……');
      await kitaru.say_and_wait('❤️大吉❤️');
      era.drawLine({ content: '一段时间之后' });
      await era.printAndWait(
        '做的时候丝毫没有考虑事后整理起来会有多么麻烦，沾着黏糊糊体液的校服与训练员制服被扔进了哐当作响的洗衣机中，',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 应该带了换洗的衣物吧……',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait('感觉……怎么样？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 赤着双足踏在地板上，属于 ',
        you.get_colored_name(),
        ' 的衬衫正被她穿在身上。',
      ]);
      await era.printAndWait([
        '伴着洗浴后的热气，她在 ',
        you.get_colored_name(),
        ' 面前转了一圈。',
      ]);
      await era.printAndWait(
        '不太合身……袖口折了两三次之后才露出手来，衬衫的下摆也到了大腿的位置，更不要说平时被遮盖在衣装下方的美乳所构成的深邃沟壑了。',
      );
      await era.printAndWait(
        '但正也因为此，尾巴稍微翻动一下，掩盖于其下的重要部位就很容易看见。',
      );
      era.printButton('「小心着凉。」', 1);
      era.printButton('「很合适……」', 2);
      await era.input();
      await era.printAndWait([
        '得到如此评价的 ',
        kitaru.get_colored_name(),
        '，尾巴的摆动更加剧烈，直到本就不是为了',
        kitaru.uma_sex_title,
        '设计的衣物下摆被掀起。',
      ]);
      await era.printAndWait('因为方才激烈欢爱而留下的痕迹，清晰可见。');
      await era.printAndWait('话说……是什么时候对于此习以为常的呢。');
      await era.printAndWait(
        '性爱变得越来越激烈，甚至方才的最后，毫不顾忌福来的感受，只是把她当成飞机杯一样的抽插。',
      );
      era.printButton('「刚才的感觉怎么样？」', 1);
      era.printButton('「下次需要温柔一点吗？」', 2);
      await era.input();
      await kitaru.say_and_wait(['欸……为什么 ', callname, ' 会问这个？']);
      await kitaru.say_and_wait('嗯，并不讨厌啦……');
      await kitaru.say_and_wait('倒不如说很喜欢……');
      await era.printAndWait([
        '或许对于 ',
        kitaru.get_colored_name(),
        ' 而言，这些粗暴，带有强迫性甚至一定侮辱性的性爱环节中，她能获得更强烈的安心感与满足感。',
      ]);
      await kitaru.say_and_wait([
        '所以……',
        callname,
        '，之后也请尽情地使用小福吧。',
      ]);
      era.println();
      if (era.get('talent:56:淫身') !== 2) {
        era.print([
          kitaru.get_colored_name(),
          ' 变得 ',
          {
            color: buff_colors[2],
            content: '[淫身]',
          },
          ' 了！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '依存';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '今天几乎和 ',
        callname,
        ' 一起在神社忙了一整天。',
      ]);
      await kitaru.print_and_wait([
        '想起往日无所不能的 ',
        callname,
        ' 因为初次上手而流露出的笨拙，我不禁笑了出来。',
      ]);
      await kitaru.print_and_wait([
        '笑声理所当然地吸引了 ',
        callname,
        ' 的目光。',
      ]);
      await kitaru.say_and_wait('咕……');
      era.drawLine({ content: '几分钟后' });
      era.printButton('伸手', 1);
      await era.input();
      await kitaru.print_and_wait([
        callname,
        ' 的手抚摸过腰，臀，一直到我的膝弯。',
      ]);
      await kitaru.say_and_wait('哈……');
      await kitaru.print_and_wait([
        '双腿一软，我在 ',
        callname,
        ' 的示意下翘着屁股，趴在了本殿内的墙上。',
      ]);
      era.printButton('解开衣物', 1);
      await era.input();
      await kitaru.print_and_wait(
        '之后，眼睁睁地看着象征着我巫女身份的绯袴滑落在地上，感到了抵在臀部的灼热之物。',
      );
      await kitaru.print_and_wait(
        '夹着腿，感到滑腻的液体顺着我的大腿流淌下去，小腹处的酥麻感却是愈演愈烈。',
      );
      era.printButton('插入', 1);
      await era.input();
      await kitaru.print_and_wait('用于二人相性的肉棒占卜开始了。');
      era.drawLine();
      await kitaru.say_and_wait('哈啊……');
      await era.printAndWait([
        '今天，',
        kitaru.get_colored_name(),
        ' 一反常态的，主动向 ',
        you.get_colored_name(),
        ' 提出了求欢的邀请。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 只是插入，担当',
        kitaru.uma_sex_title,
        '敏感的身躯便几乎要抵达高潮，失焦的双眼不知道在想着些什么。',
      ]);
      era.println();
      await kitaru.say_and_wait(
        '占卜分为两种，一种是入局，另一种则是在局外。',
        true,
      );
      era.println();
      await kitaru.say_and_wait('好厉害……要晕了……');
      era.println();
      await kitaru.say_and_wait(
        '占卜是偷窥命运、干涉天道的游戏，需要占者卜者都要入局。',
        true,
      );
      era.println();
      await era.printAndWait(
        '橙发的少女全无克制地浪叫出声。清甜酥软的嗓音，此间却叫得分外淫靡。',
      );
      await kitaru.say_and_wait('咿呀呀……啊……');
      era.println();
      await kitaru.say_and_wait(
        ['自己并不算是优秀的占卜师，当初撞上 ', callname, ' 也许是纯凭运气。'],
        true,
      );
      era.printButton('拍打臀部', 1);
      await era.input();
      await era.printAndWait(
        '分出一只手，猛地拍上福来的屁股，有些微受虐倾向的巫女发出了更诱人的娇叫。',
      );
      await kitaru.say_and_wait('……嗯啊～');
      era.println();
      await kitaru.say_and_wait(
        '但当时既是占者又是卜者的我，毫无疑问的入了局。',
        true,
      );
      era.printButton('玩弄乳房', 1);
      await era.input();
      era.println();
      await kitaru.say_and_wait(
        ['所以，是的，', you.get_colored_actual_name(), ' 就是我的命定之人！'],
        true,
      );
      era.println();
      await era.printAndWait('双手攀上了福来的双乳，将其肆意揉成各种形状。');
      await kitaru.say_and_wait('啊……啊……');
      era.printButton('拉扯尾巴', 1);
      await era.input();
      await era.printAndWait(
        '柔顺的栗色马尾，早就沾上了些许因为活塞运动带出的体液。',
      );
      await era.printAndWait([
        '尾巴根部传来的触感，乳房被揉捏的快感，让 ',
        kitaru.get_colored_name(),
        ' 一瞬间发出了今日最为高亢的呻吟。',
      ]);
      await era.printAndWait(
        '本殿用作御神体的镜子，清楚的反映出了巫女此刻的幸福神情。',
      );
      await kitaru.say_and_wait('这是……我？', true);
      await kitaru.print_and_wait(
        '被情欲染成了红色的脸，还在不断发出断断续续呜咽的樱唇，迷离半睁，如狐狸般魅惑的双眼。',
      );
      await kitaru.print_and_wait([
        '被',
        you.phy_sex_title,
        '抵在墙上，半脱的巫女服下的泛着樱红色身体随着抽插的动作一上一下的。',
      ]);
      await kitaru.say_and_wait('呜……自己居然会在白兴大人面前变成这样……', true);
      await kitaru.say_and_wait('命定之人……命定之人要负起责任来啊！', true);
      await kitaru.say_and_wait('呜噫噫噫噫！！！！！');
      await era.printAndWait('啵！');
      await era.printAndWait([
        '浓稠黏糊的精液，在',
        you.phy_sex_title,
        '拔出的一瞬间，自巫女穴口涌出，淫靡的气味在本殿内弥漫开来。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await kitaru.say_and_wait('好激烈啊……');
      await era.printAndWait([
        '尽管强装着镇定，但巫女服上液体干涸的痕迹还是表明了刚才那个淫乱的',
        kitaru.uma_sex_title,
        '就是她。',
      ]);
      era.printButton('「白兴大人不会怪罪吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸……');
      await kitaru.say_and_wait(
        '那个，白兴大人看到我得到了幸福，也会高兴的吧。',
      );
      await kitaru.say_and_wait('应该吧……');
      await kitaru.say_and_wait('呜……只是头脑一热就这样了……');
      await kitaru.say_and_wait([
        '不过，只有对 ',
        you.get_colored_actual_name(),
        '，才会这样哦！',
      ]);
      await kitaru.say_and_wait([
        '毕竟，',
        you.get_colored_actual_name(),
        ' 可是我的命定之人啊！',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
