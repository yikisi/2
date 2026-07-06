/**
 * @file 鲁铎象征 - 爱慕
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait('在出生时，就被安排好了生命的轨迹。');
      await luna.print_and_wait([
        '露娜，一个象征家的赛',
        luna.uma_sex_title,
        '。',
      ]);
      await luna.print_and_wait([
        '和无数朋辈一样，',
        luna.sex,
        '需要完成象征家的夙愿。',
      ]);
      await luna.print_and_wait([
        luna.couple_title,
        '需要永远强大，永远震慑人心。简单来说，就是要追求胜利。',
      ]);
      await luna.print_and_wait(
        '除此之外，为了胜利，一切都是可选、非必要、能抛弃的。',
      );
      await luna.print_and_wait([
        '换句话说，',
        luna.couple_title,
        '也可以肆意妄为。',
      ]);
      await luna.print_and_wait('那个叔母沉迷于情欲。');
      await luna.print_and_wait('那个阿姨沉迷于酒精。');
      await luna.print_and_wait('那个姐姐沉迷于暴力。');
      await luna.print_and_wait('只要能获得胜利，这都是被允许的。');
      await luna.print_and_wait(
        '所以，当露娜展现出了可怖的潜力时，家族的大人物们和颜悦色。',
      );
      await luna.print_and_wait(
        '一日，露娜自己来到了他们的身边。他们再熟悉不过了。',
      );
      await luna.print_and_wait('大人物们和颜悦色地问：你想要什么？');
      await luna.print_and_wait(['露娜则回答说，', luna.sex, '想要爱。']);
      await luna.print_and_wait([
        '很快，露娜得到了无数的新玩具；目白家的大门为',
        luna.sex,
        '敞开；无数或美丽或俊朗的人对',
        luna.sex,
        '献上殷勤……',
      ]);
      await luna.print_and_wait(
        '尽管被世间的美好团团包围，可露娜还是不觉得自己被爱着。',
      );
      await luna.print_and_wait([
        luna.sex,
        '想要那种不是被利益捆绑、不被权力蒙蔽，只是纯粹的，发自内心的，无偿的爱。',
      ]);
      await luna.print_and_wait(
        '夜晚独自坐床上时，露娜会蜷缩身体，试图寻找一点点温暖的痕迹。',
      );
      await luna.print_and_wait([
        '但月光洒在露娜身上，',
        luna.sex,
        '只能感到冷到骨髓里的寒气。',
      ]);
      await luna.say_and_wait('……谁来……');
      await luna.print_and_wait([
        '露娜恐惧极了，哪怕豁出所有向世界索求，',
        luna.sex,
        '仍一无所获。',
      ]);
      era.println();

      era.printButton('「象征家的房子怎么和迷宫似的……？」', 1);
      await era.input();
      await luna.print_and_wait('房门外，好像传来谁的声音。');

      era.printButton('询问', 1);
      await era.input();
      await you.say_and_wait('这里是我的房间……？');
      await you.say_and_wait('抱歉！？我走错地方——诶？你怎么在哭？！');
      await you.say_and_wait('别怕！！！我不是坏人！！！真的不是！！！');
      await you.say_and_wait(
        '完了，这孩子怎么越哭越凶，鼻涕……！鼻涕擦我衣服上了！',
      );
      await you.say_and_wait('唉……');
      era.println();

      await luna.print_and_wait('这只是一场再巧合不过的偶遇。');
      await luna.print_and_wait(
        '需要发泄、需要依靠、需要温暖的小孩，偶遇了迷路的人。',
      );
      await luna.print_and_wait('一整晚，后者狼狈地安慰着哭泣的小孩。');
      await luna.print_and_wait('从那时起，两人渐渐地有了共同的话题。');
      await luna.print_and_wait('从那时起，两人逐渐形影不离。');
      await luna.print_and_wait(
        '一个失意的孩子，与一个碌碌无为的人产生了灵魂的共鸣。',
      );
      await luna.say_and_wait('一定是从那时起，我就再也没办法忘记你……');
    };
    f.title = '阴';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '一年一度的开学典礼。在寻常的学校，一般是由德高望重的校长来进行开幕的演讲。',
      );
      await luna.print_and_wait(
        '但在特雷森学园，执行这一任务的人有，且仅有一位。',
      );
      await luna.print_and_wait([
        '鲁铎象征——学生会长，迈过向',
        luna.sex,
        '鞠躬的人群，走到了演讲台上。',
      ]);
      await luna.print_and_wait('学生们满怀期待，教职工们意气昂扬。');
      await luna.print_and_wait([
        '新的学期，哪怕日本赛',
        luna.uma_sex_title,
        '屡战屡败，但从今天开始，人们逐渐摆脱了丧气。',
      ]);
      await luna.print_and_wait(
        '因为有学生会长在。鲁铎象征——象征家的狮子——那个皇帝，大家为此欢欣鼓舞。',
      );
      await luna.print_and_wait([
        '被火热的目光注视着，露娜只感觉自己的胃被紧紧揪住，',
        luna.sex,
        '几乎要呕吐出来。',
      ]);
      await luna.print_and_wait('无言的空虚和恐惧似乎又要席卷自己的身体……');
      await luna.print_and_wait(
        '露娜无助地环视四周，突然发现，有一个人正踮起脚尖，努力地朝上望。',
      );
      await you.say_and_wait('加油！露娜！');
      await luna.print_and_wait([
        '虽然离得很远，但露娜还是从 ',
        you.get_colored_actual_name(),
        ' 的口型里看出了 ',
        you.sex,
        ' 想要表达的意思。',
      ]);
      await luna.say_and_wait('——呼。');
      await luna.say_and_wait('诸君——');
      era.drawLine();
      await luna.print_and_wait('但或许意外多了，就成了命中注定。');
      await luna.print_and_wait(
        '在这场被无数人铭记的开学典礼上，人们记得鲁铎象征用威严，却又不失风趣的方式鼓舞了大家。',
      );
      await luna.print_and_wait(['人们记得', luna.sex, '发自内心的笑容。']);
      await luna.print_and_wait(
        '但人们不知道，这笑容其实来自于一个由衷的……忍俊不禁。',
      );
      await luna.say_and_wait('踮起脚、这样紧张的样子……呼呼。');
      await luna.print_and_wait([
        '连 ',
        you.get_colored_actual_name(),
        ' 也不知道，这一幕会被这位高高在上的赛',
        luna.uma_sex_title,
        '铭记多久。',
      ]);
    };
    f.title = '阴';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     */
    const f = async (luna, you) => {
      await luna.print_and_wait([
        luna.uma_sex_title,
        '和训练员相处的时间，其实也就比任课教师要稍微多些。',
      ]);
      await luna.print_and_wait(
        '训练，安排训练。赛事，安排赛事。除此之外，双方也没有特别的见面机会。',
      );
      await luna.print_and_wait(
        '忙碌如露娜，更是如此。也正因如此，露娜前所未有地焦躁了。',
      );
      await luna.print_and_wait('在完成文书工作后，天已经沉沉黑去了。');
      await luna.print_and_wait('拖着疲惫的身体，露娜在校园里巡视。');
      await luna.print_and_wait('一轮又一轮。');
      await luna.print_and_wait([
        '终于，',
        luna.sex,
        '来到了队伍的小屋，里面的灯亮着。',
      ]);
      await luna.print_and_wait([
        luna.sex,
        '也一整天没能露个脸了，还有',
        luna.sex_code === 1 ? '学弟' : '学妹',
        '在此吗？',
      ]);
      await luna.print_and_wait(
        '露娜推开门，这里和自己秘密的基地不一样，是不会锁上的。',
      );
      await luna.print_and_wait(
        '露娜惊讶地发现，自己的训练员正躺在沙发上，书籍和各式的数据散落一地。',
      );
      await luna.say_and_wait('只有你呀……');
      await luna.print_and_wait('是也和我一样，工作到现在吗？');
      await luna.print_and_wait(
        '露娜嘴角微微勾起。自己时为了学园，而训练员这样努力……或许只为了自己。',
      );
      await luna.print_and_wait([
        '不知怎的，露娜心跳地很快。',
        luna.sex,
        '的脸微微发烫。',
      ]);
      await luna.print_and_wait([
        '就像是因 ',
        you.get_colored_actual_name(),
        ' 而鼓噪。',
      ]);
      await luna.print_and_wait([
        '露娜有些恍惚。',
        luna.sex,
        '紧紧攥着自己胸口的衣物，',
        luna.sex,
        '发觉自己对训练员的情感好似有些转变。',
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' 已经沉沉地睡去了。这里只有',
        you.couple_title,
        '，只有 ',
        you.couple_title,
        '……',
      ]);
      await luna.print_and_wait(
        '露娜摒住了呼吸，往后微微一躺，半掩着的门就发出咔擦一声，紧紧关上。',
      );
      await luna.print_and_wait(['随后，', luna.sex, '又背着手，将房门锁住。']);
      await luna.print_and_wait('——明明知道这样是不对的。');
      await luna.print_and_wait([
        '露娜脚步沉重，来到了 ',
        you.get_colored_actual_name(),
        ' 的身前。',
      ]);
      await luna.print_and_wait([
        '——',
        luna.sex,
        '背负着学生会长的职责，和象征家的荣耀。',
      ]);
      await luna.print_and_wait([
        '露娜脱去鞋子，坐在了 ',
        you.get_colored_actual_name(),
        ' 的身边。',
      ]);
      await luna.print_and_wait('——如果被人发现，一切都会崩塌。');
      await luna.print_and_wait([
        '露娜弯下身子，躺进了 ',
        you.get_colored_actual_name(),
        ' 的怀中。',
      ]);
      await luna.print_and_wait([
        '但',
        luna.teen_sex_title,
        '抗拒可能性。未来怎样又如何？',
        luna.sex,
        '只要当下。',
      ]);
      await luna.print_and_wait([
        '蜷缩在 ',
        you.get_colored_actual_name(),
        ' 的怀里，露娜贪婪地感受着温暖。',
      ]);
      await luna.say_and_wait('这么多年，你的气息还是一点都没变。');
      await luna.print_and_wait(
        '让自己平静，让自己释然。就好像汪洋中的一块舢板。',
      );
      await luna.say_and_wait('我不会让自己离开你的，无论发生什么。');
      await luna.print_and_wait([
        '露娜转过身，紧紧地抱住 ',
        you.get_colored_actual_name(),
        '。',
        luna.sex,
        '抬起头，嗅着怀中人的口唇。',
      ]);
      await luna.say_and_wait('所以，你也不要离开我……好吗？');
      await luna.print_and_wait([
        '在 ',
        you.get_colored_actual_name(),
        ' 怀中，露娜沉沉地睡去。',
      ]);
      await luna.print_and_wait([
        '难得一次，',
        luna.sex,
        '也能不做恶梦，安稳地睡到天明。',
      ]);
    };
    f.title = '圆';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} luna 露娜/鲁铎象征
     * @param {CharaTalk} you 玩家
     * @param {string} callname 露娜/鲁铎象征对玩家的称呼
     */
    const f = async (luna, you, callname) => {
      await luna.print_and_wait('露娜躺在床上辗转反侧。');
      await luna.print_and_wait(
        '久违地回到家中，似乎什么也没有改变，唯有家族的大人物们也开始对自己唯唯诺诺。',
      );
      await luna.print_and_wait([
        '这一切发生的原因是什么呢？是自己变得越来越强了吗？身为象征家的',
        luna.uma_sex_title,
        '应该为此骄傲才对。',
      ]);
      await luna.print_and_wait(
        '但露娜丝毫不觉得快乐，甚至觉得心中有什么东西在燃烧。',
      );
      await luna.print_and_wait([
        '只是按照惯例回一趟家，可 ',
        callname,
        ' 却不能随意随行。',
      ]);
      await luna.print_and_wait(
        '走在熟悉的道路上，露娜好几次都险些撞到了墙上。',
      );
      await luna.print_and_wait([
        luna.sex,
        '突然发现自己已经习惯了有人挡在自己旁边，能忍受自己得寸进尺般地依偎。',
      ]);
      await luna.print_and_wait('不在……');
      await luna.print_and_wait('不在…………');
      await luna.print_and_wait('不在………………！');
      await luna.print_and_wait([
        '露娜发现，只是因为 ',
        you.get_colored_actual_name(),
        ' 不在自己的身边，',
        luna.sex,
        '就怅然若失。',
      ]);
      await luna.print_and_wait('夜幕降临，月光再次洒进卧室，正如多年以前。');
      await luna.print_and_wait(
        '冰冷的感觉在此爬上自己的身躯，无奈，露娜只能闷头盖上被子，回想和爱人相处的点点滴滴。',
      );
      await luna.print_and_wait([
        '如果 ',
        you.get_colored_actual_name(),
        ' 在，躺在同一张床上。那么……',
      ]);
      await luna.print_and_wait('——两人的唇齿会难舍难分，互相吮吸相依。');
      await luna.print_and_wait('——厚重的鼻息会不断扑打在自己脸上。');
      await luna.print_and_wait('——自己的肩膀和锁骨会留下痕迹。');
      if (luna.sex_code - 1) {
        await luna.print_and_wait('——自己的胸部会被反复揉搓。');
      }
      await luna.print_and_wait('——自己的长腿会被抚摸。');
      await luna.print_and_wait('——双方不断索求！');
      await luna.print_and_wait([
        '露娜的身子颤抖着，双耳耷拉下来，',
        luna.sex,
        '修长的手指往身下触摸，让',
        luna.sex,
        '触电般痉挛。',
      ]);
      await luna.print_and_wait([
        '如果 ',
        you.get_colored_actual_name(),
        ' 真在此处，',
        luna.sex,
        '会迎合，无论发生什么。',
      ]);
      await luna.say_and_wait([
        you.get_colored_actual_name(),
        '，快回到我身边吧……',
      ]);
      await luna.print_and_wait('嘟囔着爱人的名字，露娜沉沉睡去。');
    };
    f.title = '缺';
    return f;
  })(),
};
