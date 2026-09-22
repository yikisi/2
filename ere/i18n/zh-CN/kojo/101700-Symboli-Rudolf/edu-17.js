/**
 * @file 鲁铎象征 - 育成
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ts_add: (() => {
    const title = '额外的自主训练';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`训练结束后，${chara17.name} 似乎仍意犹未尽。`);
      await era.printAndWait(
        `${chara17.sex}远远向天边望去，夕阳正在垂落，最后的光芒洒落大地。`,
      );
      await era.printAndWait('天马上就要黑了，但是还不够，还没有到达极限——');
      await era.printAndWait(`${you.name} 知晓了${chara17.sex}的心意。`);
      era.printButton('「继续奔跑吧！抓住那感觉。」', 1);
      era.printButton('「今日就到此为止吧，接下来还有更重要的事。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('——征途的尽头？有趣。');
        } else {
          await chara17.say_and_wait('好……总感觉，我越来越能抓到诀窍了。');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('沉睡……吗？');
        } else {
          await chara17.say_and_wait('确实如此，感谢你的提醒。');
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛获胜！';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      if (i_emperor) {
        await chara17.say_and_wait(
          `${chara17.couple_title}根本称不上是我的对手。就这点程度，也需要我亲自出手？`,
        );
      } else {
        await chara17.say_and_wait('……如果这是你希望看到的结局，我不会反对。');
      }
      era.printButton('「无可奈何之举。」', 1);
      era.printButton('「你可以做得更好。」', 2);
      if ((await era.input()) === 1) {
        if (i_emperor) {
          await chara17.say_and_wait('哼。');
        } else {
          await chara17.say_and_wait('我明白……唉。');
        }
      } else {
        if (i_emperor) {
          await chara17.say_and_wait('弄臣，你倒是非常神气？哼……');
        } else {
          await chara17.say_and_wait('我不会有这样的期待。');
        }
      }
    };
    f.title = title;
    return f;
  })(),
  faith_collapse: (() => {
    const title = '信念崩塌';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(`${you.name} 张开嘴，却最终没能吐出哪怕一个字。`);
      await era.printAndWait('输了。');
      await era.printAndWait(
        `${you.name} 颤抖地抓住看台上的栏杆，尽可能的不让自己倒下。`,
      );
      await era.printAndWait('身边的人在向你祝贺，祝贺鲁铎象征的入着。');
      await era.printAndWait(
        `${you.name} 连表面功夫都来不及做，径直离开了赛场。`,
      );
      await era.printAndWait(
        `${you.name} 向地下通道奔去，${you.name} 知道，在赛后，赛马娘们都会回到更衣室去。`,
      );
      await era.printAndWait(
        `${you.name} 气喘吁吁地跑到 ${luna.name} 的更衣室门前，却发现无论如何门也打不开。`,
      );
      era.printButton('「露娜？！」', 1);
      era.printButton('「吾皇！！！」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `门内传来了呕吐的声音。${you.name} 感觉被谁重重地击打了脑袋。`,
      );
      await luna.say_and_wait('没事的…………我只是需要一点时间…………');
      await luna.say_and_wait('我……………………………………');
      await era.printAndWait(
        `${
          you.name
        } 拍打着门，却只能听见门内${luna.teen_sex_title}呕吐和啜泣的声音。`,
      );
      await era.printAndWait(
        `${you.name} 无助地蹲在地上……${you.name} 知道，自己辜负了露娜的期望。`,
      );
      await era.printAndWait(`${you.name} 没能帮到${luna.sex}。`);
      await era.printAndWait(`你们……输了。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_transform: (() => {
    const title = '日月交替';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 是否要切换为皇帝
     */
    const f = async (luna, emperor, you, i_emperor) => {
      const buffer = [];
      if (i_emperor) {
        buffer.push(
          () => luna.say_and_wait('嗯……为了我们共同的愿望，我会忍受。'),
          () => luna.say_and_wait('……抱着我……我不想一个人面对……'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() =>
            luna.say_and_wait(`${you.actual_name}，非这样做不可吗？`),
          );
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => luna.say_and_wait('…………………………………………我是谁？'));
        }
      } else {
        buffer.push(
          () => emperor.say_and_wait('入梦之时……？'),
          () => emperor.say_and_wait('大器必成，亦须磨砺。'),
        );
        if (era.get(`status:${luna.id}:精神损伤`) > 0) {
          buffer.push(() => emperor.say_and_wait('梦醒时刻。'));
        }
        if (era.get(`status:${luna.id}:神经衰弱`) > 0) {
          buffer.push(() => emperor.say_and_wait('向伊甸进发！'));
        }
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '进攻开始';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `在和象征家略加商讨后，${you.name} 为露娜的出道报了名。`,
      );
      await era.printAndWait('就在日本杯当天。');
      await era.printAndWait(
        `露娜知道 ${you.name} 的判断后眉头紧蹙，但最终没有反对。`,
      );
      await era.printAndWait(
        `${you.name} 知道这相当地……恶意，但确实是一件没有办法的办法。`,
      );
      await era.printAndWait('日本需要提振信心，哪怕是将希望寄托在未来。');
      await era.printAndWait(
        `所以，当 ${you.name} 目睹了一场谈不上是竞争的赛事后，${you.name} 本能地松了一口气。`,
      );
      await era.printAndWait(
        `事实上，当 ${you.name} 意识到的时候，自己的双手已经紧紧握成拳头。`,
      );
      await you.say_and_wait('我是要向谁挥拳吗？他*的……', true);
      await era.printAndWait(
        `${you.name} 不可思议地看着自己的手，感觉视线颤抖。`,
      );
      await era.printAndWait(
        `不仅如此，${you.name} 还渐渐感觉到口干舌燥、头晕目眩。`,
      );
      await era.printAndWait(`皇帝，皇帝是多么……多么……多么……强大！！！`);
      await era.printAndWait(
        `${you.name} 无法形容自己此刻的感受，但唯有一件事是知道的——`,
      );
      await era.printAndWait(`${you.name} 是如此的卑鄙。`);
      await era.printAndWait(
        `不然要如何解释 ${you.name} 的笑容？还有听到那些外国佬惊呼时的狂喜？`,
      );
      era.printButton('（为了让全世界的人都明白一件事情。）', 1);
      era.printButton('（看到了吗？世界——）', 2);
      await era.input();
      await era.printAndWait(`${you.name} 哈哈大笑。`);
      era.printButton(`「露娜，${luna.sex}要将世界席卷。」`, 1);
      era.printButton(`「皇帝，${luna.sex}要将世界席卷！」`, 2);
      await era.input();
      await era.printAndWait('那天，所有人都被夺取了心智。');
      await era.printAndWait(
        `那天，露娜回来时没有和 ${you.name} 庆祝，只是悲伤地扑进了 ${you.name} 的怀里。`,
      );
      await era.printAndWait(
        `那天，日本赛${luna.uma_sex_title}再次输掉了日本杯。`,
      );
      await era.printAndWait(
        '没事的，没事的……只要有露娜在，一切都会好起来的。',
      );
      await era.printAndWait(`${you.name} 安慰着露娜，所有的担忧都烟消云散。`);
    };
    f.title = title;
    return f;
  })(),
  saud_cup_win: (() => {
    const title = '破竹之势';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(`${chara17.sex}按照计划赢下了比赛。`);
      await era.printAndWait(`${you.name} 的余光看到了同僚们。`);
      await era.printAndWait(
        '离他们的担当回来，必须故作轻松前，还有一些时间。',
      );
      await era.printAndWait(
        `所以 ${you.name} 不会怪罪他们的长吁短叹，和那些投向自己或羡慕或嫉妒的目光。`,
      );
      await era.printAndWait(
        `${you.name} 是鲁铎象征的训练员，${chara17.sex}会取得胜利，${you.name} 也会。`,
      );
      await era.printAndWait('不过');
      era.printButton(i_emperor ? '「您凯旋……！」' : '「辛苦了……！」', 1);
      await era.input();
      await era.printAndWait(
        `看到 ${chara17.name} 归来，${you.name} 刚想打招呼，却见另一位赛${chara17.uma_sex_title}迎上了${chara17.sex}。`,
      );
      await era.printAndWait(`${you.name} 不由得紧张起来——是丸善斯基。`);
      await era.printAndWait(`如果在这个时候刺激 ${chara17.name}——`);
      await era.printAndWait('但所幸，二人只是稍加攀谈，并都露出了笑容。');
      await era.printAndWait(`归来时，${chara17.name} 仍然欢欣雀跃。`);
      await era.printAndWait(
        `${you.name} 知道，${chara17.sex}的笑容并非因为取得了胜利，而是和丸善斯基刚刚的对话。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('那样强大的怪物，正等着我去狩猎——');
      } else {
        await chara17.say_and_wait(
          '能得到前辈的肯定，特别是丸善的肯定，对我而言意义重大。',
        );
      }
      await era.printAndWait(
        `${you.name} 知道，就算是在所有的赛马娘里，丸善斯基依旧以压倒性的强大而闻名。`,
      );
      await era.printAndWait(
        `但是，作为 ${chara17.name} 的训练员，${you.name} 只清楚一件事情。`,
      );
      era.printButton('「赢的会是你。」', 1);
      era.printButton('「到那时，『皇帝』的实力将会更得到证明。」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `似乎很惊讶 ${you.name} 会这样说，${chara17.name} 微微一笑。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('倒是说了句漂亮话，凯旋吧！');
      } else {
        await chara17.say_and_wait(
          '这就是所谓被刺激出了本能吧？哪怕我已经不再愿意奔跑，却仍然能够感到战栗。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的抱负';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '在和露娜成为「共犯」后，不知不觉，就迎来了新的一年。',
      );
      await era.printAndWait(
        `无时无刻的战战兢兢与恐惧，让 ${you.name} 夜夜难眠。`,
      );
      await era.printAndWait(
        `但似乎新年的寒冷的风一吹，${you.name} 就稍微有了更多的勇气。`,
      );
      await era.printAndWait(
        `更别说，露娜正身着艳丽的华服，向 ${you.name} 小步跑来。`,
      );
      await era.printAndWait(`${luna.sex} 扑入了你的怀里，就像船驶入港湾。`);
      await luna.say_and_wait('如果再继续下去，我恐怕要让皇帝替我代劳了。');
      await era.printAndWait(
        `${you.name} 无奈地抚摸着${luna.sex}的发丝，将细雪摘去。`,
      );
      await era.printAndWait(
        `看来，为了尽早和 ${you.name} 独处，露娜来的路上连伞都没打。`,
      );
      await era.printAndWait(
        `${you.name} 亲吻露娜的额头，作为回礼，${luna.sex} 靠着 ${you.name} 的肩膀。`,
      );
      await era.printAndWait('看着窗外，雪花飘摇。');
      await luna.say_and_wait(
        '今年，终于要挑战经典三冠了，只有拿下这个，我才能……',
      );
      await era.printAndWait(
        `看着表情严肃的露娜，${you.name} 深吸一口气，握住了 ${luna.sex} 的手。`,
      );
      await era.printAndWait(
        `似乎是在表示，无论怎样，${you.name} 都会在露娜的身边。`,
      );
      await era.printAndWait(
        `露娜抬头望着 ${you.name}，眼中充满着幸福和希冀。`,
      );
      era.printButton('「希望你贤亮方正，永远做最好的选择。」（智力+40）', 1);
      era.printButton('「希望你十全健康，身心都要重视。」（耐力+40）', 2);
      era.printButton(
        '「希望皇帝武艺百般，活用所有的技巧。」（技能点数+80）',
        3,
      );
      const ret = await era.input();
      await luna.say_and_wait('都是些幸福的、美好的愿望……那我也有一个愿望。');
      await era.printAndWait(
        `露娜摩挲着 ${you.name} 的脸庞，${you.name} 能感觉到${luna.sex}身体的热度，与灵魂中的渴望。`,
      );
      await luna.say_and_wait('希望你能长命百岁。这样，你才能永远陪在我身边。');
      await era.printAndWait(`${you.name} 哈哈大笑。`);
      await luna.say_and_wait('还有，希望能看到更多的冷笑话。');
      await era.printAndWait(`${you.name} 的笑声戛然而止。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '卧薪尝胆';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, you, i_emperor) => {
      await you.say_and_wait('首先是第一冠。');
      if (i_emperor) {
        await era.printAndWait(
          `仿佛和 ${you.name} 一样咀嚼着这份喜悦，皇帝高高举起一根手指。`,
        );
      } else {
        await era.printAndWait(
          `仿佛和 ${you.name} 一样咀嚼着这份喜悦，露娜抬起头，长舒一口气。`,
        );
      }
      await era.printAndWait('如此压倒性的强大，如此不容置疑的强大。');
      await era.printAndWait(
        '观众们对着传说开幕般的场景，发出了迄今为止最热烈的欢呼。',
      );
      era.printButton('「或许真的能实现……如果是皇帝的话。」', 1);
      era.printButton('「或许真的能实现……如果是露娜的话。」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} 还记得，那日露娜对 ${you.name} 说的话。`,
      );
      await luna.say_and_wait(
        `去创造一个所有赛${chara17.uma_sex_title}都能幸福的世界。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ts_47_17: (() => {
    const title = '不协调音';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (chara17, you, i_emperor, sats_sho, toky_yus) => {
      await era.printAndWait([
        '作为目标的 ',
        toky_yus,
        ' 迫在眉睫，训练也进入了最后阶段。',
      ]);
      await era.printAndWait([
        '在 ',
        chara17.get_colored_name(),
        ' 于训练场上疾驰时，围观的赛',
        chara17.uma_sex_title,
        '和训练员们纷纷发出赞叹。',
      ]);
      await era.printAndWait(
        `一圈又一圈，${you.name} 发现 ${chara17.name} 状态极好，在奔跑时甚至露出了笑容。`,
      );
      await era.printAndWait(`尽管如此，${you.name} 心里仍有极大的担忧。`);
      await era.printAndWait([
        '在 ',
        sats_sho,
        ' 之后，压在露娜肩上，本就沉重如山的负担，越发不可收拾。',
      ]);
      await era.printAndWait(`或许，${chara17.name} 不像表面上那样平静。`);
      if (i_emperor) {
        era.printButton('「吾皇，看您似乎已经尽兴，请您保重贵体。」', 1);
      } else {
        era.printButton('「今日的训练就到此为止吧。」', 1);
      }
      await era.input();
      await era.printAndWait(`在一圈结束时，${you.name} 高声呼喊。`);
      await era.printAndWait(
        `听到 ${you.name} 的话，${chara17.name} 停下了脚步。`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `片刻后，气喘吁吁的皇帝向 ${you.name} 走来。不知为何，原本她畅快的表情变得愤怒。`,
        );
        await chara17.say_and_wait('弄臣，给吾一个打搅吾状态的理由。');
        era.printButton('「吾皇，您似乎太兴奋了。」', 1);
        era.printButton('「越是临近狩猎，您越是应该冷静……」', 2);
        await era.input();
        await era.printAndWait(
          `从始至终，${you.name} 都不认为皇帝会扛不住训练的强度。`,
        );
        await era.printAndWait(
          `${you.name} 成为${chara17.sex}的训练员也好，教唆${chara17.sex}成为皇帝也罢。`,
        );
        await era.printAndWait(
          `从始至终，${you.name} 都只是在担心，露娜被自己心中的野兽击垮。`,
        );
        await era.printAndWait(
          `${you.name} 看着对自己露出玩味表情的皇帝，低下了头。后者身上如同山岳般的压力让 ${you.name} 冷汗直流。`,
        );
        await era.printAndWait(
          `跨越了皋月赏，即将进军德比……此时此刻，比起训练的状态，${you.name} 更想呵护好属于露娜的身体。`,
        );
        await era.printAndWait(
          `看着 ${you.name}，皇帝冷哼了一声，径直离开了赛场。`,
        );
        await era.printAndWait(
          `${you.name} 本能地向${chara17.sex}伸出手，但${chara17.sex}走得太快了，${you.name} 没能拦住${chara17.sex}。`,
        );
        era.printButton('「抱歉。」', 1);
        era.printButton('「好好休息吧。」', 2);
        await era.input();
        await era.printAndWait(`${you.name} 叹了口气，小跑着追了上去。。`);
      } else {
        await era.printAndWait(
          `片刻后，气喘吁吁的露娜向 ${you.name} 走来。不知为何，原本${chara17.sex}畅快的表情变得暗淡。`,
        );
        await chara17.say_and_wait(
          `${you.actual_name}，我的状态很好。日本德比很近了，我必须再加强一些！`,
        );
        era.printButton('「我明白，但越是这个时候，就越要冷静。」', 1);
        era.printButton('「我很担心你的状态……」', 2);
        await era.input();
        await era.printAndWait(
          `从始至终，${you.name} 都不认为露娜会扛不住训练的强度。`,
        );
        await era.printAndWait(
          `${you.name} 成为${chara17.sex}的训练员也好，教唆${chara17.sex}成为皇帝也罢。`,
        );
        await era.printAndWait(
          `从始至终，${you.name} 都只是在担心，露娜被自己心中的野兽击垮。`,
        );
        await era.printAndWait(
          `可从初次见面的宣泄以来，露娜已经很久都没有向 ${you.name} 表达心声了。`,
        );
        await era.printAndWait(
          `跨越了皋月赏，即将进军德比。此时此刻，比起训练的状态，${you.name} 更想知道露娜的想法。`,
        );
        await era.printAndWait([
          '看着 ',
          you.get_colored_name(),
          '，露娜思考了一会。',
          chara17.sex,
          '向 ',
          you.get_colored_name(),
          ' 露出了微笑。',
        ]);
        await chara17.say_and_wait(
          '如果这种程度都做不到的话，我们的理想根本无法实现。',
        );
        await era.printAndWait(`${you.name} 暗中咬牙，还想说什么。`);
        await era.printAndWait(
          `露娜蹬了两下脚，本想向跑道走去。但看着 ${you.name} 担心的眼神，最终还是停下了脚步。`,
        );
        era.printButton('「抱歉。」', 1);
        era.printButton('「好好休息吧。」', 2);
        await era.input();
        await era.printAndWait([
          '接过 ',
          you.get_colored_name(),
          ' 递来的毛巾和水，露娜小声地答应了。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  re_double_crowns: (() => {
    const title = '拔山盖世';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await you.say_and_wait('这就是第二冠了！');
      await era.printAndWait('距离实现梦想，又近了一步。');
      await era.printAndWait(
        '人们都在热烈地讨论，在德比上，鲁铎象征发挥出了多么强劲的实力。',
      );
      await era.printAndWait('多么不可思议！');
      if (i_emperor) {
        await era.printAndWait(
          '仿佛和众人一样品味着这份惊喜，皇帝高高举起两根手指。',
        );
      } else {
        await era.printAndWait(
          '仿佛和众人一样品味着这份惊喜，露娜露出了由衷的笑容。',
        );
      }
      await era.printAndWait(
        '随后的几天里，人们都在热烈地讨论，在德比上，鲁铎象征发挥出了多么强劲的实力。',
      );
      await era.printAndWait(
        `${chara17.sex}的名字与那些历史上伟大的赛马娘们相提并论。`,
      );
      await era.printAndWait('那些璀璨，最终又暗淡了的明星们。');
      await era.printAndWait('可鲁铎象征好像不一样。');
      await era.printAndWait(
        `只有 ${you.name} 知道，在德比里，${chara17.sex}踏进了更深远的一步——`,
      );
      await era.printAndWait('领域。');
      await era.printAndWait(
        `直到现在，谈到这里，${you.name} 仍感到深深的敬畏。`,
      );
      await era.printAndWait(`但转念一想，${you.name} 又感到唏嘘不已。`);
      await era.printAndWait(
        '前人也曾做到过，但时光一点一点毫不留情地过去，所有伟大都只成为了回忆。',
      );
      era.printButton(
        '「如今还活跃着的，尚存一丝本格化力量的也仅有丸善斯基了。」',
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name} 和 ${chara17.name} 诉说着。`);
      await era.printAndWait(
        `一旦本格化消失，再强大的赛${chara17.uma_sex_title}也泯然众人，只留下一点点的回忆。`,
      );
      await era.printAndWait(
        `这是无可抗拒的，终有一天，${chara17.name} 也会……`,
      );
      await era.printAndWait(
        `似乎是感受到了 ${you.name} 兴奋之下隐藏的悲叹，${chara17.name} 静静地看着你。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('征途永远不会停止。');
      } else {
        await chara17.say_and_wait('我们的梦想……我似乎得到了答案。');
      }
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 不明白这句话的含义，但 ${chara17.name} 并没有向你解释的意思。`,
      );
      await chara17.say_and_wait('伊甸……');
      era.drawLine();
      await chara17.print_and_wait(
        `在 ${you.name} 和 ${chara17.name} 分别后，${chara17.sex}独自来到了学园中庭。`,
      );
      await chara17.print_and_wait(
        '看着三女神的雕像，回味着踏入领域的光景，站在世代最顶点的赛马娘握紧了拳。',
      );
      if (i_emperor) {
        await chara17.say_and_wait('桎梏，永远不应该存在。');
      } else {
        await chara17.say_and_wait(
          `我一定会完成我和 ${you.actual_name} 的愿望，哪怕我……`,
        );
      }
      era.print([
        chara17.get_colored_name(),
        ' 领悟了',
        { color: buff_colors[1], content: ' [领域]', fontWeight: 'bold' },
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait('明明是夏季合宿的时间——');
      await era.printAndWait(
        `${you.name} 看着被赛${luna.uma_sex_title}们团团围住的露娜，额头留下冷汗。`,
      );
      await era.printAndWait(
        '作为万众瞩目的学生会长，对学生们进行自主训练的指导、',
      );
      await era.printAndWait('帮助苦苦无法突破的学生，甚至亲身指教。');
      await era.printAndWait(`除此之外，在训练中，${luna.sex}也格外努力。`);
      await era.printAndWait(
        '甚至到了晚上，露娜还在帮助两个寮舍的舍长，安排任务。',
      );
      await luna.say_and_wait('学园的问题，都是我的问题，无需在意。');
      await era.printAndWait(
        `随后，${luna.sex}以身作则，早早的就回到寝室休息。`,
      );
      await era.printAndWait(`虽然是这样，${you.name} 的手机却适时响起。`);
      await luna.say_and_wait('总感觉，你的目光就没离开过我身上。');
      await era.printAndWait(`看着露娜发来的短信，${you.name} 莞尔一笑。`);
      era.printButton('「你拨打的电话不在服务区，请稍后再拨。」', 1);
      era.printButton('「因为你太吸引我的目光了。」', 2);
      await era.input();
      await luna.say_and_wait(
        '真是能说会道，但为了学园环境的清朗，请不要用于我之外的孩子身上',
      );
      await luna.say_and_wait('对了');
      await luna.say_and_wait('你一直这样！');
      await luna.say_and_wait('在象征家就花言巧语，真亏你能活下来');
      await luna.say_and_wait('不过，我得先睡了，明天早起去训练吧');
      await era.printAndWait(
        `${you.name} 看着手机闪烁的消息，不知不觉睡了过去。`,
      );
      await era.printAndWait(
        `第二天一早，露娜似乎正准备去训练，但 ${you.name} 拦下了${luna.sex}。`,
      );
      await era.printAndWait(
        `从夏季合宿开始前，${luna.sex}就已经紧锣密鼓地安排多项工作，训练也不落下。`,
      );
      await era.printAndWait(`疲劳是会累积的，${you.name} 确信。`);
      era.printButton('「去吃顿大餐，变得更强壮吧。」（力量+10）', 1);
      era.printButton('「尝试偶尔推迟训练吧。」（根性+10）', 2);
      const ret = await era.input();
      await era.printAndWait('露娜愣住了。');
      await luna.say_and_wait('是在担心我吗？');
      await era.printAndWait(
        `${you.name} 点点头。露娜趴在窗台，面朝大海和沙滩。`,
      );
      await era.printAndWait(
        `清晨的阳光铺满了${luna.sex}的脸，你看不清${luna.sex}的表情。`,
      );
      await luna.say_and_wait('为了他人而努力，始终是一件美好的愿望。');
      await luna.say_and_wait('虽说如此，我们还是得为了菊花赏而努力。');
      await luna.say_and_wait(
        '但你的目光已经说明白了——『训练下去对身体有害』，是吧？',
      );
      await luna.say_and_wait(
        '但德比之后，我越发坚定地认为，完成我们的理想需要非一般的努力。',
      );
      await luna.say_and_wait(
        '你对我的保护，是不是太多了？难道我弱小到，会在这里被打倒吗？',
      );
      era.printButton('「……！」', 1);
      await era.input();
      await era.printAndWait(
        `看着局促的 ${you.name}，露娜意识到了什么，抓住了 ${you.name} 的手臂。`,
      );
      await luna.say_and_wait('这样就好像是完全在拿你发泄了……');
      await era.printAndWait(
        `露娜像是在对 ${you.name} 道歉，但 ${you.name} 知道，${luna.sex}并没有向你妥协。`,
      );
      await era.printAndWait(
        `${luna.sex}的想法，已经确实传达到了 ${you.name} 的心中。`,
      );
      await luna.say_and_wait('今天我不会去训练的，你放心好了。');
      await era.printAndWait(`随后，露娜就离开了 ${you.name} 身边。`);
      await era.printAndWait(
        `${you.name} 没能挽留。${you.name} 捂住胸，许久才回过神来，离开了空空荡荡的走廊。`,
      );
      await era.printAndWait(`这一整天，${you.name} 都没能见到露娜。`);
      await era.printAndWait(`夜晚，${you.name} 拿起手机，向露娜发出短信。`);
      era.printButton('「我会一直陪在你身边的。」', 1);
      era.printButton('「露娜，我始终爱你。」', 2);
      await era.input();
      await era.printAndWait('虽然信息变为已读，但露娜迟迟没有发消息过来。');
      await era.printAndWait(
        `${you.name} 苦苦等待，结果一整晚，露娜都没有回信。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  re_triple_crowns: (() => {
    const title = '三冠达成';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, emperor, you, i_emperor) => {
      await era.printAndWait('仿佛怒吼一般，全世界都在热烈地欢呼。');
      await era.printAndWait(`又一位赛${chara17.uma_sex_title}达成了这伟业！`);
      await era.printAndWait(
        '适时，管弦乐队开始演奏一场家喻户晓，且极其应景的交响曲。',
      );
      await era.printAndWait('【皇帝】', { color: emperor.color });
      await era.printAndWait(`${you.name} 热泪盈眶，扶着腰，低下了头。`);
      await era.printAndWait(`${you.name} 知道，约定，和梦想，还远未达成。`);
      await era.printAndWait('但一会就好……一会就好……');
      await era.printAndWait(`${you.name} 低着头，在无人知晓的地方嚎啕大哭。`);
      era.printButton('「恭喜你……」', 1);
      era.printButton('「有史以来……最伟大的表现……」', 2);
      await era.input();
      await era.printAndWait(`${you.name} 为 ${chara17.name} 感到无尽的骄傲！`);
      if (i_emperor) {
        await era.printAndWait(
          `仿佛和 ${you.name} 心有灵犀，皇帝高高举起三根手指。`,
        );
      } else {
        await era.printAndWait(
          `仿佛和 ${you.name} 心有灵犀，露娜流下了幸福的泪水。`,
        );
      }
      await era.printAndWait(
        `过了许久，气喘吁吁的 ${chara17.name} 都没有离开场地。`,
      );
      await era.printAndWait(
        `人们只是觉得${chara17.sex}想更久地沐浴在荣光之下。`,
      );
      await era.printAndWait(
        `但 ${chara17.name} 滔天的战意之下，${you.name} 却突然发现，${chara17.sex}的脚步摇摇晃晃。`,
      );
      await era.printAndWait(
        `${you.name} 捏紧了拳头，一股从未有过的寒意席卷了 ${you.name} 的身体。`,
      );
      era.printButton('「该不会……」', 1);
      era.printButton('「伤病……」', 2);
      await era.input();
      era.drawLine();
      await chara17.print_and_wait(
        `当晚，${chara17.name} 独自来到了中庭、三女神的雕像之下。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('无论你们建造的摇篮（监狱）多坚固……');
      } else {
        await chara17.say_and_wait('还差一点，我就能进去了……');
      }
    };
    f.title = title;
    return f;
  })(),
  we_47_41: (() => {
    const title = '急转直下';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `皎洁的明月下，${you.name} 焦急地在门外的走廊上徘徊。`,
      );
      await era.printAndWait(`许久后，${you.name} 听到了护士的呼唤。`);
      await era.printAndWait(
        `焦急地冲进病房，${you.name} 发现露娜躺在床上，已经睡着了。`,
      );
      await era.printAndWait(
        `看着${luna.sex}虽然苍白，但呼吸均匀的模样，${you.name} 松了口气。`,
      );
      await era.printAndWait('菊花赏后，露娜被紧急地送往了象征家的私人医院。');
      await era.printAndWait('经过检查，医生给出了诊断结果——露娜过劳了。');
      await era.printAndWait(
        `不过虽然身体虚弱，只要露娜好好休养，${luna.sex}仍然能赶上日本杯。`,
      );
      era.printButton('「日本杯啊——」', 1);
      await era.input();
      await era.printAndWait(
        `因为露娜需要静养，${you.name} 确认了${luna.sex}的状态后，便蹑手蹑脚地走到了门外。`,
      );
      await era.printAndWait(`看着窗外的夜色，${you.name} 感到头疼不已。`);
      await era.printAndWait(
        '日本杯，所有日本赛马娘的夙愿……明明是在主场最宏大的比赛，却屡屡被海外的豪强夺走胜利。',
      );
      await era.printAndWait(
        `为了完成露娜和 ${you.name} 的梦想，达到所有赛马娘都能幸福的世界。`,
      );
      await era.printAndWait('日本杯是露娜必须跨越过的试炼。');
      await era.printAndWait(
        `${you.name} 回过头，望着门。露娜就在门后的床上休息。`,
      );
      await era.printAndWait(
        `${you.name} 叹了口气，一想到${luna.sex}苍白的脸，${you.name} 原本坚定的心就发生了动摇。`,
      );
      await era.printAndWait(
        '赛马娘奔跑的模样是何等的瑰丽，但其中蕴含的危机不亚于真刀真枪的战场。',
      );
      await era.printAndWait(
        '只要有一刻松懈，只要有一瞬失误，赛马娘就可能万劫不复。',
      );
      await era.printAndWait(
        `露娜还年轻，${luna.sex}一定还有机会……不一定非要这一次。`,
      );
      await era.printAndWait(
        `${you.name} 尝试说服自己。但 ${you.name} 明白，全日本对露娜——对鲁铎象征的期待，不允许${luna.sex}「临阵脱逃」。`,
      );
      await era.printAndWait('露娜也一定不愿意就此放弃。');
      await era.printAndWait(
        `${you.name} 焦躁地揉着自己的头发，殚精竭虑间，睡意笼罩了 ${you.name}。`,
      );
      era.printButton('「明天再和露娜谈谈吧……」', 1);
      await era.input();
      await era.printAndWait(`${you.name} 也累坏了。`);
      await era.printAndWait(
        `可第二天，再睁开眼时，${you.name} 却发现自己身上披着一条被子。`,
      );
      await era.printAndWait(
        `${you.name} 猛地看向身旁的门，它虚掩着，房间里本应该好好休息的露娜也不见踪影。`,
      );
      era.printButton('「不会吧？！」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 意识到，露娜似乎用行动向 ${you.name} 证明了${luna.sex}的决心。`,
      );
      era.drawLine();
      await era.printAndWait(
        `${you.name} 推开了学生会的门，却发现里面人满为患——庶务们，正拿着各种文件，向露娜汇报近些日的工作。`,
      );
      await era.printAndWait(`露娜看着 ${you.name}，嘴角微微抿起。`);
      await luna.say_and_wait('训练员，发生什么事了吗？');
      await era.printAndWait(
        `${you.name} 气喘吁吁，看着众人正眼巴巴地望着自己，${you.name} 只好讪笑。`,
      );
      era.printButton('「您忘了东西……」', 1);
      era.printButton('「你应该好好……」', 2);
      await era.input();
      await era.printAndWait(
        `话还没到一半，${you.name} 突然发现，露娜注视着自己的紫色眸子里，带着哀求。`,
      );
      await luna.say_and_wait('我没事的。', true);
      await era.printAndWait(
        `${you.name} 读懂了${luna.sex}的唇语。${you.name} 没办法忤逆${luna.sex}的意思，从小到大都是……`,
      );
      era.printButton('「不，不是什么大事。」', 1);
      era.printButton('「抱歉……」', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} 失魂落魄地离开了学生会。${you.name} 清楚，学园离不开露娜。`,
      );
      await era.printAndWait('露娜也清楚，日本不能在这个时候失去鲁铎象征。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '无可匹敌';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        '与日本杯不同，每年的有马纪念——最后的大奖赛，也是长久以来最受人们瞩目的比赛，不是报名决定参赛的。',
      );
      await era.printAndWait(
        '每年赛前，会由全日本的粉丝们进行投票，投出公众认为，有资格参加比赛的赛马娘。',
      );
      await era.printAndWait(
        `换句话说，能够参赛的赛${chara17.uma_sex_title}，无一不是让人留下深刻印象的强者。`,
      );
      await era.printAndWait('而尽管被高票选中，露娜竟没能获得人气第一。');
      await era.printAndWait(
        '人们议论纷纷。如果说日本杯是当年强者们对世界豪强的迎击，有马，就是决定本国最强者的比赛。',
      );
      era.printButton('（投票不能反映出参赛者真正的实力。）', 1);
      era.printButton('（但投票无疑反映了一定的真实处境。）', 2);
      await era.input();
      await era.printAndWait(
        `${you.name} 忧心忡忡地回到了 ${chara17.name} 的休息室，${chara17.sex}正在闭目养神。`,
      );
      await era.printAndWait(
        '也就是说，始终有人认为，露娜会在经验丰富的前辈们面前陷入苦战。',
      );
      await era.printAndWait('但这也意味着，解决问题的方式同样简单粗暴。');
      if (i_emperor) {
        await chara17.say_and_wait('展现吾的强权。');
      } else {
        await chara17.say_and_wait('要做的事情只有一件。');
      }
      await era.printAndWait(`${chara17.teen_sex_title}睁开双眼，喃喃道。`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait('正因为是新年，才忙碌。');
      await era.printAndWait(
        `在寒冬中，${you.name} 呼出一口气，转瞬就变成白雾。`,
      );
      await era.printAndWait(
        `又是一年新春，${you.name} 站在露娜身后，辅佐着她的工作，鞠躬、收礼、答谢。`,
      );
      await era.printAndWait(
        '给认识的人拜年，举办新年动员会，了结去年留下来的工作……',
      );
      await era.printAndWait(
        `仅仅只是分担了部分露娜的工作，${you.name} 就几乎晕头转向了。`,
      );
      await era.printAndWait(
        `到这时 ${you.name} 才明白，一年前，露娜为什么说想要皇帝代劳。`,
      );
      await luna.say_and_wait('感觉你似乎，在想什么失礼的事情。');
      await era.printAndWait(
        `解决了阶段性的任务后，你们终于有时间去参拜。路上，露娜不知怎的突然嘟囔。`,
      );
      await era.printAndWait(
        `${you.name} 连忙否认。露娜不置可否，${luna.sex}看着神社的钟鼓，闭上了双眼。`,
      );
      await era.printAndWait(
        `新一年，露娜的愿望会是什么呢？${you.name} 没有问，据说，把愿望说出来就不会灵验了。`,
      );
      await era.printAndWait(
        `似乎完成了仪式。露娜睁开眼、仰着头，学着 ${you.name} 的样子吐出一口气。`,
      );
      await era.printAndWait(
        `一股白雾飘散，${luna.sex}愣愣地看着虚空，尔后侧过头，双手合十，向 ${you.name} 露出了疲惫的微笑。`,
      );
      await luna.say_and_wait('或许，我也在想着失礼的事情。');
      await era.printAndWait(
        `霎时，${you.name} 的脸全红了。回想起这段时间波澜壮阔的故事，不禁感慨万千。`,
      );
      await era.printAndWait(`${you.name} 郑重地向露娜说：`);
      era.printButton('「医食同源，希望你能在饮食中注重健康。」（耐力+20）', 1);
      era.printButton(
        '「全知全能，希望你能真正成为真正的皇帝。」（全属性+5）',
        2,
      );
      era.printButton(
        '「风流韵事，别多想，做自己喜欢做的事情就好。」（技能点数+35）',
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `听罢 ${you.name} 的祝福，露娜没有回应，只是轻轻倚靠在你的臂膀上，疲倦地闭上了双眼。`,
      );
      await era.printAndWait('短暂的休憩，在此时也弥足珍贵。');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = '依偎向前';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `新的一年，${you.name} 正冒着寒风赶往准备与露娜相会的地点。`,
      );
      await era.printAndWait(
        `但在路上，${you.name} 却发现露娜正站在大门口，与一位看起来尚且稚嫩的学生交谈。`,
      );
      await era.printAndWait(
        '后者不断点头鞠躬，在郑重地感谢了露娜后就离开了。',
      );
      era.printButton('「露娜学姐。」', 1);
      era.printButton('「露娜姐姐？」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `听到 ${you.name} 的揶揄，露娜的脸微微泛红，${luna.sex}嗔怪地看着 ${you.name}，但似乎也不抗拒这样称呼。`,
      );
      await luna.say_and_wait(
        '是一位到现在才回来的孩子，她马上就要参加出道赛。',
      );
      await luna.say_and_wait(
        '接近一月底才回到学园，恐怕你也会疑惑吧？大多数赛马娘会选择在秋季或冬季出道。',
      );
      await luna.say_and_wait(
        '但在那之前，我们就会来到学园，和同龄人们一起学习，也一起竞争。',
      );
      await luna.say_and_wait(
        '这是快乐的，但也不能保证这个过程没有心碎和疲惫。',
      );
      await era.printAndWait(
        `走到无人的地方，露娜的手臂碰着 ${you.name} 的肩。${luna.sex}似乎有这样的习惯，总是会不由自主地靠近你。`,
      );
      await luna.say_and_wait(
        '经受不住残酷的赛事和训练，对自己失望时，在假期回到了温暖的家中……',
      );
      await luna.say_and_wait('或许就会萌生放弃的想法。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 沉默地听露娜娓娓道来。说实话，站在你们的立场——鲁铎象征的立场上，',
        you.get_colored_name(),
        ' 无法说什么漂亮话。',
      ]);
      await era.printAndWait(
        `${you.name} 知道，很多赛${luna.uma_sex_title}听到露娜将会参赛时，${luna.couple_title}的第一反应就是选择退赛。`,
      );
      era.printButton('「能直面现实和困境的，才是真正的勇者。」', 1);
      era.printButton('「或许我们应该给她们更多的帮助。」', 2);
      await era.input();
      await era.printAndWait(`露娜笑着看着 ${you.name}。`);
      await luna.say_and_wait(
        '我也想过逃避，不过似乎……我逃跑的目的地始终就在你这里。',
      );
      await era.printAndWait(
        `露娜靠在 ${you.name} 的怀里，手指轻轻戳着 ${you.name} 的胸膛。`,
      );
      if (ret === 1) {
        await luna.say_and_wait(`露娜学姐也无路可逃了呢。`);
      } else {
        await luna.say_and_wait(`露娜姐姐也无路可逃了呢。`);
      }
      await era.printAndWait(`真是……`);
      await era.printAndWait(`${you.name} 红着脸，欣然接受了露娜的小小报复。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '呕心沥血';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        '天皇赏春就要来了，作为距离最长的G1赛事，3200米的距离无疑是考验赛马娘韧性的大关。',
      );
      await era.printAndWait(
        '曾经，赢下天皇赏的赛马娘会被认为是最强者，但随着时代的变化，各种赛事的评价也在起伏。',
      );
      await era.printAndWait(
        '可无论如何，天皇赏春确实是目前为止最严苛的比赛。',
      );
      await era.printAndWait(
        '升上高年级后，露娜学生会的工作压力不仅没有降低，更是要经常安排时间指导后辈，并参加各种访谈。',
      );
      await era.printAndWait(
        `尽管 ${you.name} 有些忧虑，但露娜始终认为，这是承担相应名望所要背负的责任。`,
      );
      await era.printAndWait(
        `似乎发现了 ${you.name} 的想法，在结束一天的忙碌后，露娜叫住了 ${you.name}。`,
      );
      await luna.say_and_wait('你在生气吗？');
      era.printButton('「我只是担心你。」', 1);
      era.printButton('「希望你能多依靠我一点。」', 2);
      await era.input();
      await era.printAndWait(`听到${you.name}的话，露娜轻呼一口气。`);
      await luna.say_and_wait('你也要多相信我一点。');
      await era.printAndWait(
        `露娜看着${you.name}，伸出手，抚摸着${you.name}的脸颊。`,
      );
      await luna.say_and_wait(
        '我必须这样做，不然，会有很多人陷入迷茫和困境中的。',
      );
      await luna.say_and_wait('我们还未能实现梦想。');
      await era.printAndWait(`${you.name} 握住了露娜的手。`);
      await era.printAndWait(
        `明明是在说远大的理想，${you.name} 却发现露娜的眉头上始终有散不开的忧愁。`,
      );
      await era.printAndWait(
        `就好像 ${you.name} 们再次相遇时那样，喘不过气来的样子。`,
      );
      await era.printAndWait(`${you.name} 叹了口气，点了点头。`);
      await era.printAndWait(
        `——究竟能为露娜再做些什么？未来的好些天里，${you.name} 一直在思考这个问题。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '皇帝坠落';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait('到四月份，万众瞩目的粉丝感谢祭就要开始了。');
      await era.printAndWait(
        `而尽管 ${you.name} 颇有微词，但开幕式结束之后，会有一场模拟赛。`,
      );
      await era.printAndWait(
        `尽管是模拟赛，但就激烈程度来讲，一定与正式的比赛相差无几。`,
      );
      await era.printAndWait(
        `${you.name} 知道，越是到了这个时候，${you.name} 就越难平衡露娜的身体状态。`,
      );
      await era.printAndWait('一旦出现了问题……');
      await era.printAndWait(
        `可一想到夏日合宿时发生的事情，${you.name} 又无法请求露娜推脱比赛。`,
      );
      await era.printAndWait(
        `到了模拟赛要开始时，露娜疲劳的状态让 ${you.name} 眼角一跳。`,
      );
      await era.printAndWait(
        '不仅是训练，还有学生会的工作和活动的运营，为了今天，露娜身上的负担实在太重。',
      );
      await era.printAndWait('——休息一下吧。');
      await era.printAndWait(
        `${you.name} 看着站在身边的露娜，话梗在喉头，最终化作一声叹息。`,
      );
      await luna.say_and_wait('所有的人都在期待这场比赛。');
      await luna.say_and_wait(
        '粉丝的欢呼、期待和祝愿，让已经退役了的前辈们也心潮澎湃。',
      );
      await era.printAndWait(
        `${you.name} 看向露娜，${luna.sex}似乎若有所思。片刻后，${luna.sex}看向了 ${you.name}。`,
      );
      await luna.say_and_wait('你也对我有所期待吗？');
      era.printButton('「无论何时！」', 1);
      era.printButton('「休息一下吧……」', 2);
      await era.input();
      await era.printAndWait(
        `听到 ${you.name} 的回应，露娜深吸一口气，随后拍了拍 ${you.name} 的肩膀。`,
      );
      await luna.say_and_wait('我去去就回。');
      await era.printAndWait(
        `${you.name} 僵在了原地，但 ${you.name} 随后意识到，露娜是要以【现在】这个状态，走上赛场。`,
      );
      await era.printAndWait(
        `——结果，露娜陷入了苦战。或许是连日的疲劳让${luna.sex}状态不佳。`,
      );
      await era.printAndWait(`观众们一片哗然。`);
      await era.printAndWait(`皇帝怎么会如此失态？这样的讨论持续了数周。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_16: (() => {
    const title = '乾坤一掷';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `明天就是天皇赏春开始的日子了，但这段时间，${you.name} 却发现无论如何，露娜都无法唤出【皇帝】。`,
      );
      era.printButton('「一直累积着的疲劳还是带来了后果。」', 1);
      era.printButton('「不要再勉强自己了！」', 2);
      await era.input();
      await era.printAndWait(
        `在学生会，${you.name} 忧心忡忡地看着捂着额头的露娜。`,
      );
      await era.printAndWait(`${luna.sex}发丝散乱，顶着重重的黑眼圈。`);
      era.printButton('「都是我的责任……！」', 1);
      era.printButton('「抱歉露娜，我……」', 2);
      await era.input();
      await luna.say_and_wait('不，和你无关。');
      await era.printAndWait(
        `露娜抬起头看着 ${you.name}，${luna.sex}发丝散乱，顶着厚厚的黑眼圈，泪水从${luna.sex}脸颊上滑落。`,
      );
      await luna.say_and_wait(
        '为了梦想，我几乎是无谋般冲到了现在，是我的任性妄为被你卷了进来……',
      );
      await luna.say_and_wait(
        '况且，你一次又一次地提醒我注意身体，是我把一切都搞砸了。',
      );
      await luna.say_and_wait(
        '在失去了【皇帝】的情况下，我根本没办法让所有人都满意。',
      );
      await luna.say_and_wait('抱歉，我不是强大的赛马娘……抱歉……抱歉……');
      await era.printAndWait(`在 ${you.name} 面前，露娜嚎啕大哭。`);
      await era.printAndWait(`${you.name} 迅速向前，紧紧地拥抱着露娜。`);
      await era.printAndWait(
        `${you.name} 感受着${luna.sex}的脆弱，感受着${luna.sex}的委屈。`,
      );
      await era.printAndWait(
        `同时，${you.name} 却又有满腔的不满和心疼，想要向露娜诉说。`,
      );
      await era.printAndWait(
        '心疼，在于露娜的泪水；不满，在于露娜的妄自菲薄。',
      );
      await era.printAndWait(
        '就算在模拟赛上没有发挥好，露娜难道就不是被所有人敬仰的存在了吗？',
      );
      await era.printAndWait('不。不！！！');
      await era.printAndWait(`${you.name} 咬着牙。`);
      await era.printAndWait(
        '那样努力，为特雷森、为所有赛马娘呕心沥血、鞠躬尽瘁的露娜，不应被人议论。',
      );
      await era.printAndWait(`${luna.sex}理应问心无愧！`);
      await you.say_and_wait('我想，你误会了人们心目中【皇帝】的强大。');
      await era.printAndWait(
        `在露娜哭累了之后，${you.name}开口安慰。听到${you.name}话中的鉴定，露娜的心微微一颤。`,
      );
      await you.say_and_wait(
        '皇帝——鲁铎象征之所以吸引人，是因为在那个象征的旗帜下，每个人都能各司其职。',
      );
      await you.say_and_wait('激励着所有人为之努力和奋斗。');
      await you.say_and_wait(
        '至今为止，没有人比你更适合【皇帝】这个称号。你引领着我们，你带着我们不断向前！',
      );
      await you.say_and_wait(
        '在向梦想拼搏的天途中，你已经成为了别人的梦想了。',
      );
      await you.say_and_wait('所以，不要贬低自己，露娜——');
      await era.printAndWait(
        `${you.name} 紧紧地抱住露娜，似乎想要给${luna.sex}无限的力量。也像是，${you.name} 想把生命中最重要的人揉进自己的灵魂。`,
      );
      await era.printAndWait(
        `良久后，露娜才抗议似的、轻轻挥起拳头，敲了敲 ${you.name} 的肩膀。`,
      );
      await era.printAndWait(
        `${you.name} 才意识到似乎太用力了。${you.name} 赶忙放开手臂，却发现露娜没有离开，仍趴在 ${you.name} 的胸膛上。`,
      );
      await luna.say_and_wait('我还能继续向前吗？');
      era.printButton('「当然。」', 1);
      await era.input();
      await luna.say_and_wait('你还会陪着我吗？');
      era.printButton('「哪怕万劫不复。」', 1);
      era.printButton('「永远。」', 2);
      await era.input();
      await era.printAndWait(`${you.name} 听到了露娜浅浅的笑声。`);
      await you.say_and_wait(
        '其实不止是我，学生会的大家、还有特雷森的学生们，都想帮你一把，哪怕只能做些微不足道的事情。',
      );
      await you.say_and_wait('你的努力，一定会有成果的。');
      await luna.say_and_wait('那我更不能在此停下脚步了。');
      await luna.say_and_wait('我们的梦想，只存在于未来。');
      await era.printAndWait(
        `${you.name} 从口袋里拿出手帕，为露娜轻轻擦去泪水。${you.name} 发现，露娜眼中闪耀着的，已经不再是泪水。`,
      );
      await era.printAndWait(`而是乾坤一掷的意志。`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_cup_s: (() => {
    const title = '油尽灯枯（上）';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, you, i_emperor) => {
      await era.printAndWait(
        `赛${chara17.uma_sex_title}有着天生的胜负欲，${chara17.couple_title}无论何时都想着疾驰到更远的地方。`,
      );
      await era.printAndWait(
        `而在规定距离的赛场上，${chara17.couple_title}会豁出一切，试图成为最快抵达终点的胜者。`,
      );
      await era.printAndWait(
        '而似乎是为了回应这样的愿望，赛马娘们将在本格化中急速成长，最终能够站上赛场。',
      );
      await era.printAndWait(
        '但同时，随着时间的推移，准确来说，可能就在三、四年间，本格化的力量就会逐渐衰退。',
      );
      await era.printAndWait(
        '就像是耗尽了燃料。赛马娘在这之后，便如寻常众人。',
      );
      await era.printAndWait(
        '这也是赛马娘拼死也要在赛场上奋斗的原因——想要留下自己的篇章，想要让众人不会忘记自己。',
      );
      await era.printAndWait('怀揣着心意，赛马娘们奋不顾身。');
      await era.printAndWait(
        '其中有佼佼者，在无限激烈的竞争中进入了【领域】。',
      );
      await era.printAndWait('那是超越一切的力量。');
      await era.printAndWait('但，力量的代价是什么？');
      await era.printAndWait(
        `自从露娜能够进入领域后，${you.name} 无时无刻在思考这个为题。`,
      );
      await era.printAndWait('命运从未怜悯，一切事物都暗中标好了价格。');
      await era.printAndWait(
        `强大如象征家，${chara17.couple_title}也会无法克制血脉的暴力而走向自我毁灭。`,
      );
      await era.printAndWait(
        `露娜描述过进入领域的感觉，仿佛一切静止，而${chara17.sex}来到一片无垠的草原。`,
      );
      await era.printAndWait(
        `${chara17.sex}会有使不完的力气，就好像自己和未来做了一个交易。`,
      );
      era.drawLine();
      await era.printAndWait('日本杯。');
      await era.printAndWait(
        `赛前，${you.name} 死死地看着 ${chara17.name}。${you.name} 知道，${chara17.sex}已经将自己调整到了最好的状态。`,
      );
      await era.printAndWait(
        `但为了战胜强敌，${chara17.sex}一定会再次进入领域。不，${chara17.sex}不得不进入领域中。`,
      );
      await era.printAndWait(
        `就好像燃烧起的火焰，不把燃料燃烧殆尽，就不会停止的火焰。`,
      );
      era.printButton(`「请小心。」`, 1);
      era.printButton(`「我有不好的预感。」`, 2);
      await era.input();
      await era.printAndWait(
        `${chara17.name} 看着 ${you.name}，${you.name} 才发觉，${chara17.sex}的手正微微颤抖。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('那就将皇帝的姿态铭记于心。');
      } else {
        await chara17.say_and_wait(
          '我明白你的担心，但为了我们的梦想，我不会后退。',
        );
      }
      await era.printAndWait(`说罢，${chara17.teen_sex_title}走向赛场。`);
    };
    f.title = title;
    return f;
  })(),
  japa_cup_win_s: (() => {
    const title = '油尽灯枯（下）';
    /**
     * @param {CharaTalk} chara17 露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await era.printAndWait(
        `${you.name} 看着 ${chara17.name} 冲过终点，${chara17.sex}浑身颤抖，在观众的欢呼声中迅速离场。`,
      );
      await era.printAndWait(`${you.name} 赶紧向更衣室跑去。`);
      await era.printAndWait('不会错的。');
      await era.printAndWait(
        `${you.name} 感觉自己快疯了。看着赛场上，${chara17.sex}差点从领域中崩溃，${you.name} 就明白了那所谓的代价是什么。`,
      );
      await era.printAndWait(
        `领域——它的燃料是赛马娘们的未来！否则，${chara17.name} 绝不可能受到如此之大的伤害，简直就像、就像……`,
      );
      await era.printAndWait('本格化的力量消失了一样。');
      await era.printAndWait(
        `${you.name} 来到更衣室，突然听到了一声巨响！${you.name} 推开门，却发现墙壁上豁然有一个大洞。`,
      );
      if (i_emperor) {
        await chara17.say_and_wait('吾的力量，竟会在赛道中突然消失？');
      } else {
        await chara17.say_and_wait('我抱歉，我情绪有点激动……');
      }
      await era.printAndWait(
        `${you.name} 赶忙向前，看着 ${chara17.name} 鲜血淋漓的手，${you.name} 赶紧去找医药箱。`,
      );
      await era.printAndWait(
        `这样下去，不要说奢求胜利了，${chara17.sex}甚至无法站上赛场。`,
      );
      await chara17.say_and_wait('就算如此，我也不会停下自己的脚步。');
      await era.printAndWait(
        `${you.name} 惊讶地抬起头，却发现 ${chara17.name} 的眼中带着 ${you.name} 根本无法理解的情绪。`,
      );
      await era.printAndWait('有惊讶和不甘，也有狂喜和狂怒。');
      await era.printAndWait([
        { content: '？？？「领域消失的那一瞬间，', color: luna.color },
        { content: '我看到了——', color: emperor.color },
        { content: '」', color: luna.color },
      ]);
      await era.printAndWait([
        { content: '？？？「', color: emperor.color },
        { content: '就差一点……', color: luna.color },
        { content: '一点', color: emperor.color },
        { content: '（伊甸）', color: luna.color },
        { content: '」', color: emperor.color },
      ]);
      await era.printAndWait(
        `${you.name} 无法应和，只能强忍着泪水，为 ${chara17.name} 处理伤口。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_ge: (() => {
    const title = '领域尽头';
    /**
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('哈……哈……');
      await chara17.print_and_wait('哈…………');
      await chara17.print_and_wait(
        `${chara17.name} 眼前的世界正在剧烈地动摇，${chara17.sex}视线内的一切都在模糊。`,
      );
      await chara17.print_and_wait(
        `如海潮般袭来的眩晕与疼痛打击着${chara17.sex}，领域正在排斥自己——${chara17.name} 意识到了。`,
      );
      await chara17.print_and_wait(`${chara17.sex}已不再无所不能。`);
      await chara17.print_and_wait(
        `每迈出一步，${chara17.name} 都能感受到巨大的违和感。`,
      );
      await chara17.print_and_wait(
        `落足，再抬起。剧烈的疼痛让${chara17.sex}面目狰狞得可怕。`,
      );
      await chara17.print_and_wait(
        `往常轻易能破开的风好像铁壁横亘，撞得${chara17.sex}伤痕累累。`,
      );
      await chara17.print_and_wait(
        `在这场比赛中，${chara17.sex}像是风暴中被折断双翼的飞鸟。`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `眼皮变得沉重，${chara17.name}的意识已经恍惚。`,
      );
      await chara17.print_and_wait(
        '领域正在崩塌，那缓慢的场景逐渐要动起来了。',
      );
      await chara17.print_and_wait(
        '马娘们在奔跑，踢着绿茵地，激起尘土，把飞草带进风中飘舞。',
      );
      await chara17.print_and_wait(
        '自己心脏跳得越来越快，却一丁点的力量也用不出。',
      );
      await chara17.print_and_wait(
        '身体的零件：那些肌肉、筋脉和内脏，正在被巨大的惯性撕扯着。',
      );
      await chara17.print_and_wait(
        '如果不在这个弯道停下来，在领域完全褪去的瞬间——',
      );
      await chara17.print_and_wait('自己会死。');
      if (i_emperor) {
        await chara17.say_and_wait('赛道并非天途，终有停滞之时。');
      } else {
        await chara17.say_and_wait('这就是领域的真相……透支本格化的力量……');
      }
      await chara17.print_and_wait(
        '一代又一代的勇者跨入了领域，透支了自己的未来、理想和一切的可能性。',
      );
      await chara17.print_and_wait(`现在，轮到 ${chara17.name} 了。`);
      await chara17.print_and_wait(
        '在面对生涯，乃至生命的结尾时，自己该做些什么？没人教过自己。',
      );
      await era.printAndWait([
        {
          content: '露娜',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '。', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: '露娜',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: '你', color: emperor.color },
        { content: '会和我', color: luna.color },
        { content: '（我）', color: emperor.color },
        { content: '一起的吧？', color: luna.color },
        '」',
      ]);
      await era.printAndWait(
        `把胸中的气吐尽，在千千万万的观众的实现下，${chara17.name} 加速了！！！`,
      );
      await era.printAndWait('没有道路的延续就自己踏破！');
      await era.printAndWait([
        {
          content: '露娜',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: '为了', color: emperor.color },
        { content: '我', color: luna.color },
        { content: '们', color: emperor.color },
        { content: '的梦想！！！', color: luna.color },
        '」',
      ]);
      era.printButton('「冲啊！！！！！！！」', 1);
      await era.input();
      await you.print_and_wait('冲啊！！！！！！！');
      await you.print_and_wait('冲啊！！！！！！！');
      await era.printAndWait(`${you.name} 已经不在乎了自己的喉咙会否撕裂了。`);
      await era.printAndWait(
        `${you.name} 只知道，${chara17.name} 正向你们的梦想迎头迈进。`,
      );
      await era.printAndWait('很近了！很近了！');
      await era.printAndWait(
        '在盛大的欢呼声中，最强的赛马娘踏向了未知的远方。',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s_be: (() => {
    const title = '绝响';
    /**
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     * @param {boolean} i_emperor 目前是否是皇帝人格
     */
    const f = async (chara17, luna, emperor, you, i_emperor) => {
      await chara17.print_and_wait('哈……哈……');
      await chara17.print_and_wait('哈…………');
      await chara17.print_and_wait(
        `${chara17.name} 眼前的世界正在剧烈地动摇，${chara17.sex}视线内的一切都在模糊。`,
      );
      await chara17.print_and_wait(
        `如海潮般袭来的眩晕与疼痛打击着${chara17.sex}，领域正在排斥自己——${chara17.name} 意识到了。`,
      );
      await chara17.print_and_wait(`${chara17.sex}已不再无所不能。`);
      await chara17.print_and_wait(
        `每迈出一步，${chara17.name} 都能感受到巨大的违和感。`,
      );
      await chara17.print_and_wait(
        `落足，再抬起。剧烈的疼痛让${chara17.sex}面目狰狞得可怕。`,
      );
      await chara17.print_and_wait(
        `往常轻易能破开的风好像铁壁横亘，撞得${chara17.sex}伤痕累累。`,
      );
      await chara17.print_and_wait(
        `在这场比赛中，${chara17.sex}像是风暴中被折断双翼的飞鸟。`,
      );
      era.drawLine();
      await chara17.print_and_wait(
        `眼皮变得沉重，${chara17.name}的意识已经恍惚。`,
      );
      await chara17.print_and_wait(
        '领域正在崩塌，那缓慢的场景逐渐要动起来了。',
      );
      await chara17.print_and_wait(
        '马娘们在奔跑，踢着绿茵地，激起尘土，把飞草带进风中飘舞。',
      );
      await chara17.print_and_wait(
        '自己心脏跳得越来越快，却一丁点的力量也用不出。',
      );
      await chara17.print_and_wait(
        '身体的零件：那些肌肉、筋脉和内脏，正在被巨大的惯性撕扯着。',
      );
      await chara17.print_and_wait(
        '如果不在这个弯道停下来，在领域完全褪去的瞬间——',
      );
      await chara17.print_and_wait('自己会死。');
      if (i_emperor) {
        await chara17.say_and_wait('赛道并非天途，终有停滞之时。');
      } else {
        await chara17.say_and_wait('这就是领域的真相……透支本格化的力量……');
      }
      await chara17.print_and_wait(
        '一代又一代的勇者跨入了领域，透支了自己的未来、理想和一切的可能性。',
      );
      await chara17.print_and_wait(`现在，轮到 ${chara17.name} 了。`);
      await chara17.print_and_wait(
        '在面对生涯，乃至生命的结尾时，自己该做些什么？没人教过自己。',
      );
      await era.printAndWait([
        {
          content: '露娜',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: you.actual_name, color: emperor.color },
        { content: '。', color: luna.color },
        '」',
      ]);
      await era.printAndWait([
        {
          content: '露娜',
          color: luna.color,
        },
        '&',
        { content: '皇帝', color: emperor.color },
        '「',
        { content: '我', color: emperor.color },
        { content: '（我）会把', color: luna.color },
        { content: '宝贵的经验', color: emperor.color },
        { content: '告诉你……', color: luna.color },
        '」',
      ]);
      await chara17.print_and_wait('——来吧。');
      await chara17.print_and_wait(
        `如迎接自己的宿命一般，${chara17.name} 冲向了自己的末路。`,
      );
    };
    f.title = title;
    return f;
  })(),
  re_good_end: (() => {
    const title = (emperor) => [
      ['伊甸见我', { content: '（我）', color: emperor.color }],
    ];
    /**
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (chara17, luna, emperor, you) => {
      await luna.print_and_wait('这里是哪里？');
      await luna.print_and_wait('赛马娘好像突然梦醒一样。');
      await luna.print_and_wait('这是一片无尽的草原。');
      await luna.print_and_wait(
        `赛马娘奔跑着，风吹起绿茵，也吹起${chara17.sex}散落的发丝。`,
      );
      await luna.print_and_wait(`${chara17.sex}头顶，同时顶着太阳与月亮。`);
      await luna.print_and_wait('日月之下，有几道身影注视着赛马娘。');
      await luna.print_and_wait('三位女神——好奇地注视着祂们的孩子。');
      await luna.print_and_wait('原来如此。');
      await luna.print_and_wait('赛马娘眨了眨眼。');
      await luna.print_and_wait(
        `赛马娘「${you.actual_name}，你总让我休息。现在……我到了可以永恒安息的地方。」`,
      );
      await luna.print_and_wait(
        '赛马娘「第一次听到【伊甸】的名字时，我无法想象它能涵盖多宏伟和美丽的景象。」',
      );
      await luna.print_and_wait('赛马娘「这是一个崭新的世界。」');
      await luna.print_and_wait(
        '赛马娘「或许此处也有生命存在。拥有和我们一样的喜怒哀乐。」',
      );
      await luna.print_and_wait(
        '赛马娘「有多彩的故事和炽热的愿望，还有浪漫、爱情及挣扎。」',
      );
      await luna.print_and_wait('赛马娘「我终于抵达了——」');
      await luna.print_and_wait(
        '赛马娘的奔跑逐渐缓慢，最终，她停在了女神们的面前。',
      );
      await era.printAndWait(
        '三女神「孩子，恭喜你抵达了一切终点……一切的开端。你是第一位来到伊甸的赛马娘。」',
      );
      await era.printAndWait(
        '三女神「我们会奖励你，为你实现真正的梦想！那么，在许下你的愿望前，你还有什么想问的吗？」',
      );
      era.drawLine();
      await luna.print_and_wait(
        '赛马娘回想着自己的人生，许多画面在她眼前闪过。',
      );
      await luna.print_and_wait('赛马娘「我们的夙愿和难以企及的梦想——」');
      await luna.print_and_wait('赛马娘「我们的传承和热爱的一切——」');
      await luna.print_and_wait(
        '赛马娘「它们究竟是如何经久不衰，被一代又一代的赛马娘继承下去的？」',
      );
      await luna.print_and_wait(
        '赛马娘问出了自己心中的疑问，可不等女神们为她解答，她又自顾自地回答：',
      );
      await luna.print_and_wait(
        '赛马娘「是因为赛马娘和训练员……我们之间的羁绊吗？」',
      );
      await luna.print_and_wait('赛马娘扶额，抬头粲然一笑。');
      await luna.print_and_wait(`女神们爱怜地摸着${chara17.sex}散乱的发丝。`);
      await era.printAndWait('三女神「那么，你的愿望是？」');
      await luna.print_and_wait('赛马娘张开双臂，仿佛拥抱这个崭新的世界。');
      await luna.print_and_wait('赛马娘「我要一个能让梦想延续的地方。」');
      await luna.print_and_wait('赛马娘「一个让赛马娘永远奔跑下去的地方。」');
      await luna.print_and_wait(
        '赛马娘「一个只要我们还能听见爱我们的人在欢呼和祷告，为我们祈求胜利——」',
      );
      await luna.print_and_wait(
        '赛马娘「我们就能永远挺身而出，战胜所有强敌的地方。」',
      );
      await luna.print_and_wait(
        '赛马娘「一个人间的伊甸！只要存有梦想，所有赛马娘都能去的伊甸！」',
      );
      await era.printAndWait('女神们默默地点了点头，而赛马娘又开口了。');
      await luna.print_and_wait(
        '赛马娘「还有，我要回去，在那个地方，我的爱人一定在等着我。」',
      );
      await era.printAndWait(
        '三女神「真是贪婪的孩子……嗯……但我们似乎也没有规定，你只能许一个愿望？」',
      );
      era.drawLine();
      await era.printAndWait('比赛结束了。');
      await era.printAndWait(
        `在人群散去之后，${you.name} 找了一个借口离开了包围着自己的记者和同事，回到了赛场。`,
      );
      await era.printAndWait(`${you.name} 看到了想要见到的赛马娘。`);
      await era.printAndWait(
        `${luna.sex}背对着，${you.name} 看不见${luna.sex}现在的表情。`,
      );
      await era.printAndWait(
        `或许${luna.sex}仍被夺冠的景象震撼，也可能${luna.sex}还在回味于 ${you.name} 不知道的激昂。`,
      );
      await era.printAndWait(`抑或${luna.sex}只是倦了，想自己独处。`);
      await era.printAndWait(
        `${you.name} 颓然地坐到了地上，连日来的疲劳让 ${you.name} 连站起来的力气都快没有了。`,
      );
      await era.printAndWait(
        `${you.name} 昂着头，望着天，发现远处的晴空还挂着月亮——日月当空。`,
      );
      await era.printAndWait(`${you.name} 长出一口气`);
      await luna.say_as_unknown_and_wait(you.actual_name);
      await era.printAndWait(
        `终于，${you.name} 听到了${luna.sex}的呼唤。带着强烈的忐忑，${you.name} 看向了${luna.sex}，却没有回应${luna.sex}。`,
      );
      await era.printAndWait(
        `${you.name} 不知道此刻该跪拜，还是该傻笑。此刻 ${you.name} 面对的，究竟是露娜，还是皇帝？`,
      );
      era.drawLine();
      await luna.say_as_unknown_and_wait(
        '每当一个灵魂沉睡时，另一个灵魂就会苏醒。',
      );
      await luna.say_as_unknown_and_wait(
        '一方哀伤，一方狂怒，似乎像是月亮和太阳一样，从不相见，互相排离。',
      );
      await era.printAndWait(
        `${luna.sex}望向无边无际的天空，神情凝重得却好似望着一道深渊。`,
      );
      era.printButton('「或许你只是太阳。」', 1);
      era.printButton('「或许你只是月亮。」', 2);
      await era.input();
      await era.printAndWait(`听到 ${you.name} 的话，${chara17.sex}低下了头。`);
      era.printButton('「但你也可以既是太阳，也是月亮。」', 1);
      era.printButton('「但你也可以既是皇帝，也是露娜。」', 2);
      await era.input();
      await era.printAndWait('目光顺着日月余晖的光芒交汇。');
      await era.printAndWait(
        `${luna.sex} 呆呆地望着 ${you.name}，随后红了脸颊，也红了眼眶。`,
      );
      await era.printAndWait(
        `${you.name} 伸出了手，而${luna.sex}奔向你。露娜？皇帝？${you.name} 已不再去思考这个问题了。`,
      );
      await era.printAndWait(
        `${you.name} 握住了${luna.sex}伸出的手，然后尽情相拥、泪如雨下。`,
      );
      await era.printAndWait(
        `${you.name} 相信，此时此刻，在 ${you.name} 怀里的${luna.sex}、只顾与 ${you.name} 热烈相拥、亲吻的${luna.sex}，也不再被这个问题束缚。`,
      );
      await era.printAndWait(
        '深吻后，两人都喘息着，希望能在下一轮澄清真心的风暴前透一口气。',
      );
      await era.printAndWait(
        `${you.name} 能听见${luna.sex}趴在你胸膛上的温度，这样的炽热，以前从未有过——既有皇帝的不容置疑，也有露娜的柔情似水。`,
      );
      await you.say_and_wait('你是我爱的皇帝，也是爱我的露娜。', true);
      await era.printAndWait(
        `${you.name} 本这样想，可片刻后却摇了摇头，在怀中美人的一声轻呼中，带着${luna.sex}一起躺倒在草地上。`,
      );
      era.printButton('「我的爱人，名叫鲁铎象征。」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_luna: (() => {
    const title = '亘古轮月';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, emperor, chara17, you) => {
      await era.printAndWait('比赛结束了。');
      await era.printAndWait(
        `在人群散去之后，${you.name} 找了一个借口离开了包围着自己的记者和同事，回到了赛场。`,
      );
      await era.printAndWait(`${you.name} 看到了想要见到的赛马娘。`);
      await era.printAndWait(
        `${chara17.name} 远远地站在夕阳下，风吹起绿茵，也吹起 ${chara17.sex} 散落的发丝。`,
      );
      await era.printAndWait(
        `月夜即将到来，太阳尚未落下。${chara17.sex}背对着，${you.name} 看不见${chara17.sex}现在的表情。`,
      );
      await era.printAndWait(
        `或许${chara17.sex}仍被夺冠的景象震撼，也可能${chara17.sex}还在回味于 ${you.name} 不知道的激昂。`,
      );
      await era.printAndWait(`抑或${chara17.sex}只是倦了，想自己独处。`);
      await era.printAndWait(
        `${you.name} 颓然地坐到了地上，连日来的疲劳让 ${you.name} 连站起来的力气都快没有了。`,
      );
      await era.printAndWait(
        `${you.name} 昂着头，望着天，发现远处的晴空还挂着月亮——日月当空。`,
      );
      await era.printAndWait(`？？？「${you.actual_name}」`);
      await era.printAndWait(
        `终于，${you.name} 听到了${chara17.sex}的呼唤。带着强烈的忐忑，${you.name} 看向了${chara17.sex}，却没有回应${chara17.sex}。`,
      );
      await era.printAndWait(
        `${you.name} 不知道此刻该跪拜，还是该傻笑。此刻 ${you.name} 面对的，究竟是露娜，还是皇帝？`,
      );
      era.drawLine();
      await era.printAndWait(
        '？？？「每当一个灵魂沉睡时，另一个灵魂就会苏醒。」',
      );
      await era.printAndWait(
        '？？？「一方哀伤，一方狂怒，似乎像是月亮和太阳一样，从不相见，互相排离。」',
      );
      await era.printAndWait(
        `${chara17.sex}望向无边无际的天空，神情凝重得却好似望着一道深渊。`,
      );
      await luna.say_as_unknown_and_wait(`我，曾经很恨那个皇帝。`);
      await era.printAndWait(`${you.name} 呆呆地望着${chara17.sex}。`);
      await luna.say_as_unknown_and_wait(
        `但在最后，${chara17.sex}却和我说：『那个弄臣，从始至终都相信吾不会输。』`,
      );
      await luna.say_as_unknown_and_wait(
        `所以${chara17.sex}要赠予 ${you.actual_name} 一场永远都醒不来的，美梦。`,
      );
      await luna.print_and_wait('？？？「皇帝的征途，已经结束了啊。」');
      await era.printAndWait(
        `露娜过去忧愁的目光带着迷茫，明明你们的愿望已经达成，${
          chara17.sex
        }却不知为何如此怅然若失。`,
      );
      await luna.say_and_wait('那我的故事，是不是也要结束了？');
      await era.printAndWait('目光顺着日月余晖的光芒交汇。');
      await era.printAndWait('夜幕降临，太阳消失了踪影。');
      await era.printAndWait('只留天上明月温柔的怀抱。');
      await era.printAndWait(`${you.name} 低下了头，红了眼眶。`);
      era.printButton('「我会陪着你的。」', 1);
      era.printButton('「『皇帝』的故事，是永远不会结束的。」', 2);
      await era.input();
      await luna.say_and_wait('这样啊。');
      await era.printAndWait('抬起沉重的脚步，露娜向轮月的方向走去。');
      await era.printAndWait(`${you.name} 不知道${luna.sex}要去往何处。`);
      await era.printAndWait([
        `但 ${you.name} 还是颤颤巍巍站起身来，跟随着 `,
        luna.get_colored_name(),
        `——无论${luna.sex}要去往何处。`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  re_bad_end_emperor: (() => {
    const title = '皇帝君临';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (emperor, luna, chara17, you) => {
      await era.printAndWait('比赛结束了。');
      await era.printAndWait(
        `在人群散去之后，${you.name} 找了一个借口离开了包围着自己的记者和同事，回到了赛场。`,
      );
      await era.printAndWait(`${you.name} 看到了想要见到的赛马娘。`);
      await era.printAndWait(
        `${chara17.name} 远远地站在夕阳下，风吹起绿茵，也吹起 ${chara17.sex} 散落的发丝。`,
      );
      await era.printAndWait(
        `月夜即将到来，太阳尚未落下。${chara17.sex}背对着，${you.name} 看不见${chara17.sex}现在的表情。`,
      );
      await era.printAndWait(
        `或许${chara17.sex}仍被夺冠的景象震撼，也可能${chara17.sex}还在回味于 ${you.name} 不知道的激昂。`,
      );
      await era.printAndWait(`抑或${chara17.sex}只是倦了，想自己独处。`);
      await era.printAndWait(
        `${you.name} 颓然地坐到了地上，连日来的疲劳让 ${you.name} 连站起来的力气都快没有了。`,
      );
      await era.printAndWait(
        `${you.name} 昂着头，望着天，发现远处的晴空还挂着月亮——日月当空。`,
      );
      await era.printAndWait(`？？？「${you.actual_name}」`);
      await era.printAndWait(
        `终于，${you.name} 听到了${chara17.sex}的呼唤。带着强烈的忐忑，${you.name} 看向了${chara17.sex}，却没有回应${chara17.sex}。`,
      );
      await era.printAndWait(
        `${you.name} 不知道此刻该跪拜，还是该傻笑。此刻 ${you.name} 面对的，究竟是露娜，还是皇帝？`,
      );
      era.drawLine();
      await era.printAndWait(
        '？？？「每当一个灵魂沉睡时，另一个灵魂就会苏醒。」',
      );
      await era.printAndWait(
        '？？？「一方哀伤，一方狂怒，似乎像是月亮和太阳一样，从不相见，互相排离。」',
      );
      await era.printAndWait(
        `${chara17.sex}望向无边无际的天空，神情凝重得却好似望着一道深渊。`,
      );
      await emperor.say_as_unknown_and_wait(
        '近日，吾险些战死在赛场上，但最后，有一个微弱的声音鼓励了吾。',
      );
      await era.printAndWait(`${you.name} 呆呆地望着${chara17.sex}。`);
      await emperor.say_as_unknown_and_wait(
        `${chara17.sex}让吾支撑下去。${chara17.sex}说：『我最讨厌你了，但为了我们的梦想，我只祈求一件事。』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『带着胜利，去见 ${you.actual_name}。』`,
      );
      await emperor.say_as_unknown_and_wait(
        `『哪怕以后我们永远都不会再相见』，${chara17.sex}说……${chara17.sex}也愿意将一切奉献出去。`,
      );
      await era.printAndWait(
        `皇帝锐利的目光带着迷茫，${chara17.sex}怎么也想不起来，是谁胆敢在自己脑海里如此聒噪。`,
      );
      await emperor.say_and_wait(`${chara17.sex}是谁？`);
      await era.printAndWait('目光顺着日月余晖的光芒交汇。');
      await era.printAndWait('天太亮了，月亮消失了踪影。');
      await era.printAndWait('只留太阳无尽的光芒。');
      await era.printAndWait(`${you.name} 低下了头，红了眼眶。`);
      era.printButton('「吾皇，她是我非常重要的人。」', 1);
      era.printButton('「……是谁呢？」', 2);
      await era.input();
      await emperor.say_and_wait('这样啊。');
      await era.printAndWait('抬起沉重的脚步，皇帝向太阳的方向走去。');
      await era.printAndWait(`${you.name} 不知道${emperor.sex}要去往何处。`);
      await era.printAndWait([
        `但 ${you.name} 还是颤颤巍巍站起身来，跟随着 `,
        emperor.get_colored_name(),
        `——无论${emperor.sex}要去往何处。`,
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_wax_and_wane: (() => {
    const title = '阴晴圆缺';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait('小的时候，家里人并不对我抱有期望。');
      await luna.print_and_wait(
        '我被允许四处疯玩，也被允许不参加训练，似乎对我，大家都抱有「怎么都好」的态度。',
      );
      await luna.print_and_wait('象征家就是这样的地方，人们只关心实力。');
      await luna.print_and_wait('于是，强大的姐姐们在赛道上飞驰。');
      await luna.print_and_wait('而我，甚至可以在草坪上睡过一整天。');
      await luna.print_and_wait(
        '我本想轻松度日，但随着年龄逐渐成长，我却发现自己总是克制不住体内的躁动。',
      );
      await luna.print_and_wait('就好像我的血，在体内燃烧一样。');
      await luna.print_and_wait(
        '每每这时，我的心里就会生出一种暴虐凶狠的心情。',
      );
      await luna.print_and_wait(
        '想要撕碎、想要碾压、想要将对手狠狠踩在脚下，讥讽她！嘲笑她！',
      );
      await luna.print_and_wait('——我要夺走所有人的一切，将世界付之一炬！');
      await luna.print_and_wait(
        '在把体力完全耗尽、堪堪回过神来时，我只能感到无尽的空虚和恐惧。',
      );
      await luna.print_and_wait(
        '我开始变得患得患失……为了不让自己胡思乱想，我开始自主地参加训练。',
      );
      await luna.print_and_wait(
        '只有在极致的奔跑下，我才会变得平静……才会变得像我自己。',
      );
      await luna.print_and_wait('「露娜。」');
      await luna.print_and_wait(
        '妈妈给我起了一个好听的名字，也是一个温柔的名字。',
      );
      await luna.print_and_wait('我不想变成只懂得宣泄暴力的怪物……');
      await luna.print_and_wait(
        '可我克服不了血脉带给我的暴虐，就像象征家过去所有的赛马娘一样。',
      );
      await luna.print_and_wait('这时，我才意识到，为什么家人们不会管教我。');
      await luna.print_and_wait(
        '因为，代代流传的「象征」之血，会指引我走上一条既定的道路。',
      );
      await luna.print_and_wait('胜利。胜利。');
      await luna.print_and_wait(
        '只要能胜利，哪怕我变得不再是自己也是被允许的。',
      );
      await luna.print_and_wait('不如说，只要能胜利，怎么都好。');
      await luna.print_and_wait(
        '在我展现出稀世的才能后，象征家着手开始培养我。',
      );
      await luna.print_and_wait('只要我想，我可以轻而易举地拥有所有的资源。');
      await luna.print_and_wait('只要我想，我可以轻而易举地拥有所有的宠爱。');
      await luna.print_and_wait('但我仍感到空虚和恐惧。');
      await luna.print_and_wait(
        '就算奔跑可以短暂地让我放空大脑，但在超越所有对手，站在终点往回望时，我气喘吁吁地发现，我的嘴角竟止不住地上扬。',
      );
      await luna.print_and_wait('就好像，我变了一个人。');
      await luna.print_and_wait('我不由得想，露娜是真实的我吗？');
      await luna.print_and_wait(
        '还是那个站在赛场上肆虐八方的怪物，才是真正的我？',
      );
      await luna.print_and_wait(
        '我很想有一个人能够哭诉，但随着我的长大，温柔待我的人们却唐突逝去。',
      );
      await luna.print_and_wait(
        '母亲，受到猎人的惊吓而郁郁而终；姐姐，在赛前的准备中粲然逝去。',
      );
      await luna.print_and_wait('或许，我也……');
      await luna.print_and_wait(
        '在冷冽月光的注视下，我发狂似地来到了大人们的身边。',
      );
      await luna.say_and_wait('我想要——');
      await luna.print_and_wait(
        '安全感，想要不再恐惧。但面对和蔼的祖父和父母，我没能这么说。',
      );
      await luna.print_and_wait('我看到了他们眼中的期待。');
      await luna.print_and_wait(
        '所以，我许愿要【爱】，我要数不胜数的兄弟姐妹们围在我身边，还要天南地北有趣的人，环绕在象征家。',
      );
      await luna.print_and_wait('只要这里热闹起来——');
      await luna.print_and_wait('只要我被人们包围——');
      await luna.print_and_wait(
        '一定、一定会有机会的，一定会有人能让自己不再空虚和恐惧的。',
      );
      await luna.print_and_wait('到那时……我……露娜……一定会——');
      await luna.say_and_wait(`${you.actual_name}？`);
      await luna.print_and_wait('露娜从梦中惊醒，发现自己独自躺在床上。');
      await luna.print_and_wait(
        '为什么会做这样的梦呢？露娜捂着头。看向窗外皎洁的明月，她感到头晕目眩。',
      );
      await luna.print_and_wait(
        '明明已经接受了鼓励，下定决心向理想冲击，但一想到要让【皇帝】夺去自己的意识，奋起残暴的血脉……',
      );
      await luna.print_and_wait('露娜潸然泪下，无论如何她都还是好害怕。');
      await luna.print_and_wait(
        '明明已经擅长了忍耐，坚信只要忍耐下去，事情就会有所转机。',
      );
      await luna.print_and_wait(
        `但自从和 ${you.actual_name} 重逢后，自己一直以来仰仗的忍耐就失去了作用。`,
      );
      await luna.say_and_wait('好想见你……');
      await luna.say_and_wait('好想见你……');
      await luna.print_and_wait(`${luna.teen_sex_title}一夜无眠。`);
    };
    f.title = title;
    return f;
  })(),
  ws_a_stones_throw: (() => {
    const title = '一步之遥';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await era.printAndWait(
        `露娜是怎么变成皇帝的？${you.name} 终于想起来了。`,
      );
      await era.printAndWait(
        '那是一个无谋的诡计，是一个初出茅庐的臭小子，对象征的未来之星发起的蛊惑。',
      );
      era.printButton('「既然痛恨暴虐，就让别人来做这些事情吧？」', 1);
      await era.input();
      await luna.say_and_wait('别人……？');
      era.printButton(
        '「嗯，别人。就比如说——另一个人，我是说，另一个你。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${you.name} 本意是想开个玩笑，疏导愁眉苦脸的露娜，但不知道为何，平日里调皮的孩子却听得相当认真。`,
      );
      await era.printAndWait(
        `在${luna.sex}目光的催促下，${you.name} 绞尽脑汁，继续荒唐的叙述。`,
      );
      era.printButton('「创造出一个和露娜不一样，好战暴虐的存在出来吧。」', 1);
      era.printButton('「建立在你的个性上，一个想象中的形象。」', 2);
      await era.input();
      await era.printAndWait(`${you.name} 呼出一口气，突发奇想。`);
      await you.say_and_wait('对了，就像【皇帝】一样！');
      await era.printAndWait(
        `露娜呆呆地望着 ${you.name}，${you.name} 为刚才脑海里闪现而过的想法欢欣鼓舞。`,
      );
      await era.printAndWait(
        `不、不要——${you.name} 的灵魂在颤抖，${you.name} 终于回想起来了。`,
      );
      await era.printAndWait(`皇帝，是 ${you.name} 为露娜创造出来的牢笼。`);
      era.printButton('「露娜做不到的事，就统统让皇帝来完成吧。」', 1);
      await era.input();
      await era.printAndWait(
        `不是那样的，那孩子的命运、${luna.sex}背负的一切，怎么能这么轻描淡写地被概括？！`,
      );
      await you.say_and_wait('这样，露娜就能轻易登上巅峰了吧！');
      await you.say_and_wait('住口！快住口！不要再说了！！！', true);
      await era.printAndWait(
        `${you.name} 想死死地掐住自己的脖颈，动作之间，${you.name} 已从梦境中苏醒。`,
      );
      await era.printAndWait(`${you.name} 被冷汗浸透了。`);
      await era.printAndWait(
        `那时的 ${you.name}，不过是个自大的混蛋。自称四处怀才不遇，实际上，不过是学生的夸夸其谈。`,
      );
      await era.printAndWait(
        `遇到露娜时，${you.name} 把脑海里藏着的那些从未见过天日的战略、见闻和幻想，以及 ${you.name} 从露娜身上看出${luna.sex}日后一定会成为大人物这些事，一股脑地说了出来。`,
      );
      await era.printAndWait(
        `${you.name} 不知道那时的自己有多么失态，但露娜，在那时露出了释然的笑容。`,
      );
      await era.printAndWait('在月夜下，绽放的笑容。');
      await era.printAndWait(
        '那时，自己就下定决心，要为露娜赴汤蹈火，将自己的性命和智慧一同献出。',
      );
      await era.printAndWait(
        '回归正业也好，拼命学习也好，成为了鲁铎象征的训练员也好——',
      );
      await era.printAndWait('不是为了要让【皇帝】的威名远扬。');
      await era.printAndWait('一切都是为了露娜的笑容才对！');
      await era.printAndWait('但为什么，为什么会变成这样呢……');
      await era.printAndWait(`${you.name} 捂住了头，深深地叹着气。`);
    };
    f.title = title;
    return f;
  })(),
  fall_into_hell: (() => {
    const title = '堕入深渊';
    /**
     * @param {CharaTalk} luna 露娜
     * @param {CharaTalk} emperor 皇帝
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, emperor, you) => {
      await era.printAndWait(
        `在对手们接二连三地走上赛场时，${you.name} 却突然发现，露娜的状态不对。`,
      );
      await era.printAndWait(`${luna.sex}呆呆地坐在椅子上，愣愣地看着你。`);
      await era.printAndWait(`皇帝呢？${you.name} 愣住了。`);
      await era.printAndWait(
        `面对 ${you.name} 疑惑的目光，露娜开口却无法说出话来。`,
      );
      await luna.say_and_wait('我不想……让她再出来了！');
      era.printButton('「露娜，比赛就要开始了！」', 1);
      era.printButton('「没事的，我会陪着你的。」', 2);
      await era.input();
      await era.printAndWait(
        `但不管 ${you.name} 怎么劝说，露娜都摇着头拒绝了。`,
      );
      await era.printAndWait(
        '——比赛马上就要开始了，如果皇帝再不「出现」，那便真是万事休矣。',
      );
      await era.printAndWait(
        `无奈，${you.name} 只能掐起自己的嗓子，用尽全力让自己的声音听起来像是个滑稽的弄臣。`,
      );
      era.printButton(
        '「皇帝，我伟大的皇帝！您听到了吗？万民那雷鸣般的呼声！」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `露娜仍在哭泣。一股无名火在 ${you.name} 的心中燃起。明明都这个时候了……！`,
      );
      era.printButton('「吾皇，在您沉睡的时候，又有逆贼侮辱您的荣光。」', 1);
      await era.input();
      await era.printAndWait(`露娜只是无助地摇着头。${you.name} 咬紧了牙关。`);
      era.printButton('「请您苏醒，降下滔天的怒火……」', 1);
      await era.input();
      await era.printAndWait(`偏执让 ${you.name} 面目狰狞、声音嘶哑。`);
      await era.printAndWait(
        '或许是抓狂起了作用，露娜的身体渐渐地停止了颤抖。',
      );
      await era.printAndWait(
        `${luna.sex}看着 ${you.name}，双眼里的恐惧逐渐消退，取而代之的，是那让人不寒而栗的锋锐。`,
      );
      await era.printAndWait(
        `${you.name} 松了一口气，可眼前的马娘却突然捂住了头。`,
      );
      await era.printAndWait(`露娜迷茫地看着 ${you.name}。`);
      await luna.say_and_wait(`${luna.couple_title}不是我的朋友吗？`);
      era.printButton(`「……${luna.couple_title}是你的朋友。」`, 1);
      era.printButton(`「吾皇，${luna.couple_title}罪该万死！」`, 2);
      let ret = await era.input();
      if (ret === 2) {
        await luna.say_and_wait(
          '我非要这样做不可吗？我非要变成那个讨厌的模样不可吗？',
        );
        era.printButton('「不……不！我这就去帮你退赛！」', 1);
        era.printButton('「吾皇！您是天生的皇帝！」', 2);
        ret = await era.input();
        if (ret === 2) {
          await luna.say_and_wait(
            '我不是皇帝！不要再让露娜消失了。再这样下去，露娜真的会不见的。',
          );
          await luna.say_and_wait('如果你还爱着我，就不要……');
          await era.printAndWait(
            `露娜绝望地看着 ${you.name}，伸出的手像是想抓住救命的稻草。`,
          );
          await luna.say_and_wait('不要……离开我……');
          await era.printAndWait(
            `${you.name} 闭上了双眼。露娜是这样的信赖和爱慕 ${you.name}，所以——`,
          );
          era.printButton('「握住我的手，露娜！」', 1);
          era.printButton('「皇帝万岁！」', 2);
          let ret = await era.input();
          if (ret === 2) {
            await era.printAndWait(
              `话说出口，${you.name} 感觉时间都凝固了，可下一刻，${you.name} 突然失去了呼吸的权力。`,
            );
            await era.printAndWait(
              `露娜……不，皇帝伸出手，掐紧了 ${you.name} 的脖子。`,
            );
          }
        }
      }
      if (ret === 1) {
        await era.printAndWait(
          `听到你的话，露娜终于如释重负。${luna.sex}迫不及待地向 ${you.name} 伸出手，像是抓住一根不让自己沉没的稻草。`,
        );
        await era.printAndWait(
          `${you.name} 不由得叹息——自己都让露娜做了什么啊。`,
        );
        await era.printAndWait(
          '为什么在之前没发现露娜的异样？无论面临什么样的惊涛骇浪。',
        );
        await era.printAndWait(
          `但从现在开始还不算晚！作为露娜的训练员、保护者和……爱人，${you.name} 都要为露娜扛住一切风雨。`,
        );
        era.printButton('「露娜，我……」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} 看向露娜，正准备牵住${luna.sex}的手。`,
        );
        await era.printAndWait(
          `但那只 ${you.name} 曾握紧过无数次，并许下誓言，永远也不放开的手，却突然向前。`,
        );
        await era.printAndWait('如铁钳一般，死死的掐着的脖子。');
        await emperor.say_and_wait('露娜？谁？');
      }
      await era.printAndWait(`皇帝鄙夷地掐着 ${you.name} 的脖子，站起了身。`);
      await emperor.say_and_wait('吾睡了多久？觊觎吾荣光的贼人在哪里？');
      await era.printAndWait(
        `${emperor.sex}睥睨四周，惊讶每次从睡梦苏醒，${emperor.sex}都会出现在不同的地方。`,
      );
      await era.printAndWait('而为什么每次苏醒，都还有人胆敢忤逆自己的意志？');
      await era.printAndWait(
        `${you.name} 说不出话，也无法挣脱，只能长大了嘴咿呀咿呀地出气。`,
      );
      await era.printAndWait(
        `由于缺氧，${you.name} 的视线逐渐模糊，意识正在远去。`,
      );
      await emperor.say_and_wait('哼。');
      await era.printAndWait(
        `似乎是厌倦了得不到回应，皇帝随手将 ${you.name} 甩到了地上。一声闷响后，${you.name} 剧烈地呕吐起来，只觉得五脏六腑都被压扁了。`,
      );
      await era.printAndWait(
        `无法起身的 ${you.name}，只能趴在地上，听皇帝的足音远去。`,
      );
      await era.printAndWait(
        `在意识消失的最后，${you.name} 仿佛又听到了露娜的哭泣。`,
      );
      await era.printAndWait('抱歉……已经没法回头了。');
      await era.printAndWait(`${you.name} 失去了意识。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
   * @param {boolean} i_good_end 是否是 Good Ending（若是则是鲁铎象征）
   * @param {boolean} i_emperor 目前是否是皇帝人格（非 GE 的情况下）
   */
  async ws_palace(chara17, i_good_end, i_emperor) {
    if (i_good_end) {
      await chara17.say_and_wait(
        '你喜欢什么样的天空？太阳还是月亮？做不出决定也无妨，无论你处在什么样的天空下，终有一日，我们都会相遇。嗯，这次，换我们去找你。',
      );
    } else if (i_emperor) {
      await chara17.say_and_wait(
        '既然还能向前迈进，就没有停留于此处的必要！吾的天途永不停止，庆贺吧，弄臣！你将见证皇帝的伟业。作为奖赏，吾许诺你永世跟随和侍奉吾的荣耀……回答呢？',
      );
    } else {
      await chara17.say_and_wait(
        `皇帝的故事已经终结，而我的使命还没有结束，让我们携手去那里吧，那个所有赛${chara17.uma_sex_title}都能幸福的未来。嗯……那个未来应该也包括我，所以……你会让我幸福的，对吧？`,
      );
    }
  },
};
