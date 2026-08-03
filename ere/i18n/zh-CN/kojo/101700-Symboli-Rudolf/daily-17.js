/**
 * @file 鲁铎象征 - 日常
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   */
  good_morning_luna(luna, you) {
    const buffer = [
      () =>
        luna.say('谁会想到，我们竟然成了这样的关系……已经没有回头的机会了。'),
      () =>
        luna.say('那些信任着我、期待着我的人们……我实在没办法斥责他们的心意。'),
      () =>
        luna.say(
          '多亏有你在我身旁，就算是被认为是虚无缥缈的伊甸，我也正一步步靠近。',
        ),
      () => luna.say('将心比心？我不认为有人能理解我的立场。'),
      () =>
        luna.say(
          '把对学生会的要求写在纸条上给我们吧，我会尽可能满足大家的愿望的。',
        ),
      () =>
        luna.say('你觉得我的决胜服很帅气？……我不喜欢用帅气，来形容一座监狱。'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => luna.say('最近时不时，会觉得头疼难耐。'),
        () => luna.say('我睡的时间是不是越来越多了？'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => luna.say('不要离开我的视线！我要感觉不到你了……！'),
        () =>
          luna.say(
            `${you.actual_name}，你还在看着露娜吗？我好像……不再是自己了——`,
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  good_morning_emperor(emperor) {
    const buffer = [
      () => emperor.say('不要浪费时间。'),
      () => emperor.say('不要犯下错误。'),
      () => emperor.say('不要让吾失望。'),
    ];
    if (
      era.get('status:17:精神损伤') > 0 ||
      era.get('status:9017:精神损伤') > 0
    ) {
      buffer.push(
        () => emperor.say('沉睡的时间越来越少。很好。'),
        () => emperor.say('弄臣，趁我状态正佳，多安排几场狩猎！'),
      );
    }
    if (
      era.get('status:17:神经衰弱') > 0 ||
      era.get('status:9017:神经衰弱') > 0
    ) {
      buffer.push(
        () => emperor.say('消除软弱，让皇帝之名远扬！'),
        () => emperor.say(`谁在吾脑海里聒噪？让${emperor.sex}闭嘴。`),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   */
  select_luna(luna, you) {
    const buffer = [
      () => luna.say(`${you.actual_name}？`),
      () => luna.say('想不出冷笑话呢……'),
      () => luna.say('今天的行程是？'),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  select_emperor(emperor) {
    const buffer = [
      () => emperor.say('是你啊，弄臣。'),
      () => emperor.say('吾心情正好，别让我扫兴。'),
      () =>
        emperor.say('万事万物有始有终，就算我终究凋零，也要给后辈们留下芬芳。'),
    ];
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝 */
  select_sleep(chara17) {
    chara17.say('嘶……呼……');
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_study_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('我都不知道，你会看心理学的书。教教我吧？'),
      () => luna.say_and_wait('训练员执照的考试，有些题还是我出的。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_study_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('吾不需要学艺不精的教授。'),
      () => emperor.say_and_wait('无论何种时代，智者理应得到尊崇。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_prepare_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('我，曾经很喜欢奔跑……'),
      () => luna.say_and_wait('为了我们共同的理想，我不会退缩。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_prepare_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('美美此刻，血脉偾张！'),
      () => emperor.say_and_wait('来，让我见识一下英雄和勇者的挣扎！！！'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async talk_luna(luna) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => luna.say_and_wait('我还能继续下去！'),
        () => luna.say_and_wait('再追加一轮训练吧，我的实力还远不止如此。'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () =>
              luna.say_and_wait('状态『极其』好，『激起』了训练的心潮！呼呼……'),
            () =>
              luna.say_and_wait('我的状态比平时还要好，看来会有不错的表现。'),
          );
          break;
        case 1:
          buffer.push(
            () => luna.say_and_wait('平日里的积累很重要。'),
            () =>
              luna.say_and_wait(
                '等训练结束了，我们一起去散散步吧……如果有空闲时间的话。',
              ),
          );
          break;
        case 0:
          buffer.push(
            () => luna.say_and_wait('虽然不能说是状态完美，但是我不能示弱。'),
            () => luna.say_and_wait('一步一步来吧，我会忍耐的。'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              luna.say_and_wait(
                '穿上决胜服是一种身份的切换，意味着我又要变成皇帝……',
              ),
            () =>
              luna.say_and_wait(
                '唔……总觉得状态不太好，不过不能因为这点疲劳就说泄气话。',
              ),
          );
          break;
        case -2:
          buffer.push(
            () =>
              luna.say_and_wait(
                '这下糟了……感觉身体很沉重。可是哪怕一天我都不想浪费……',
              ),
            () =>
              luna.say_and_wait(
                '找不到平时的状态了……心里知道不能再这样下去，但是……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async talk_emperor(emperor) {
    const buffer = [];
    if (era.get('base:17:体力') < 0.4 * era.get('maxbase:17:体力')) {
      buffer.push(
        () => emperor.say_and_wait('感觉疲劳正在堆积。'),
        () => emperor.say_and_wait('你不必相信，你只需追随。'),
      );
    } else {
      switch (era.get('cflag:17:干劲')) {
        case 2:
          buffer.push(
            () => emperor.say_and_wait('出征之时已至。'),
            () => emperor.say_and_wait('让皇帝之名响彻云霄！'),
          );
          break;
        case 1:
          buffer.push(
            () => emperor.say_and_wait('帝国，始于一砖一瓦。'),
            () => emperor.say_and_wait('嗯……？弄臣，何不讲个笑话。'),
          );
          break;
        case 0:
          buffer.push(
            () => emperor.say_and_wait('兴致缺缺。'),
            () => emperor.say_and_wait('不要让吾扫兴。'),
          );
          break;
        case -1:
          buffer.push(
            () => emperor.say_and_wait('哼……'),
            () => emperor.say_and_wait('滚出我的视线。'),
          );
          break;
        case -2:
          buffer.push(
            () => emperor.say_and_wait('弄臣，你似乎把事情全搞糟了？'),
            () => emperor.say_and_wait('不要对吾无礼。'),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_gift_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('我已经不是小孩子了……！嘿嘿，但谢谢你！'),
      () =>
        luna.say_and_wait(
          '我们是有相同理想的『共犯』，完成目标前，我们都不能停下……抱歉，是不是有点太沉重了？',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_gift_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('哦？礼品？……哼，想要的，吾会自己去取。'),
      () => emperor.say_and_wait('贡品就堆放到宝库中去。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_cook_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '做出大量令人愉快的美食吧，呼呼，其实烹饪的过程，也令人愉悦。特别是和你一起。',
        ),
      () =>
        luna.say_and_wait(
          '我趁上午的时间把学生会的工作都做完，这下可以专心投入了。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_cook_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('食物的制成也大有学问。'),
      () => emperor.say_and_wait('赏给你的，满怀敬畏地吃下去吧。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_rest_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '……真令人害羞啊，长大以后，过去寻常的拥抱，也变得有点火热了。',
        ),
      () => luna.say_and_wait('嘶……呼……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_rest_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('……沉睡……'),
      () => emperor.say_and_wait('如果遇到棘手的事情，弄臣……吾允许你唤醒我。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async office_game_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('游戏……？我记得小时候，你总是抱着我玩。'),
      () => luna.say_and_wait('玩归玩，可不能浪费时间。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async office_game_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('作为消遣而言，还算合格。'),
      () => emperor.say_and_wait('还没准备好狩猎吗？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async s_a_tree_hollow_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '萌芽的意志，是热情还是本能呢？有种看不见的力量在促我前行。',
        ),
      () =>
        luna.say_and_wait(
          `三女神，倘若真的有伊甸存在，我会带领所有${luna.uma_sex_title}都去往那里的。`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_tree_hollow_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('吾能听见……失意和失败之人留存在此的苦恨。'),
      () => emperor.say_and_wait('就算帝国终会崩塌，美景与古迹也会一直留存。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async s_a_dating_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '这就是所谓的光阴似箭吧，好像我还没长大，我们都在象征家疯闹似的。',
        ),
      () =>
        luna.say_and_wait(
          '我们离别了好几年，从现在开始，我们别离彼此太远为好。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async s_a_dating_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait('在吾沉睡时，你有以吾的意志，好好打理这行宫吗？'),
      () =>
        emperor.say_and_wait(
          '弄臣，只要你好好侍奉吾，吾自会许给你无尽的荣耀。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async school_rooftop_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '呵呵呵……没有姜的话，不就成了脱『姜』之马……呵呵呵呵！',
        ),
      () =>
        luna.say_and_wait(
          '其实我对口味的要求不高。但如果摆盘精致、气味宜人，更能让我食指大动。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async school_rooftop_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('寻常的进食，能果腹即可。'),
      () => emperor.say_and_wait('我对食物没有要求。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_r_fishing_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('动心忍性，增益其所不能。钓鱼，是一门相当的学问呢。'),
      () =>
        luna.say_and_wait('就算钓上了鱼，也只能拍照纪念哦，这是学园的财产。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_fishing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('在赛场上狩猎，又何尝不是一种垂钓？'),
      () => emperor.say_and_wait('水中的生灵……'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_r_walking_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '我好像有点回想起小时候的时光了。你总是陪在我身边呢。',
        ),
      () =>
        luna.say_and_wait('如今，我们已经可以并肩前行了——你看，我长高了吧？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_r_walking_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('视察疆土，也是皇帝的责任。'),
      () => emperor.say_and_wait('前方何事喧闹？弄臣，去打听清楚。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   */
  async o_s_arcade_luna(luna, you) {
    const buffer = [
      () => luna.say_and_wait('姆……再来一局！'),
      () =>
        luna.say_and_wait(
          `那个、还有那个！${you.actual_name}，我们都去玩一遍吧！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_arcade_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('聒噪的地方。'),
      () =>
        emperor.say_and_wait(
          '虚幻的游戏仅能带来虚无的抚慰，若想真正获得乐趣，不如去和勇者厮杀。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_drawing_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('看你喜欢的……要不，干脆我们把温泉酒店买下来？'),
      () => luna.say_and_wait('希望每个抽奖的孩子都能有好运气。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_drawing_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('概率学，是一门深奥的学问。'),
      () => emperor.say_and_wait('既然决定要去温泉，何必要用这种方式？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_ktv_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('趁这个机会，小憩片刻吧。'),
      () => luna.say_and_wait('如果能把一切痛苦，都通过歌声呕吐出来都多好。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_ktv_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('和剧院不同，别有一般风味。'),
      () => emperor.say_and_wait('聆听美妙的音乐，是绝佳的享受。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_movie_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          '非常好的片子。我本想睡一觉的，但电影的剧情确实吸引眼球。',
        ),
      () =>
        luna.say_and_wait('真想不到，如今的电影这么真实啊。我都捏了一把冷汗。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_movie_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('无趣。'),
      () => emperor.say_and_wait('不会有下次了。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} luna 鲁铎象征/露娜
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray_luna(luna, you, dice) {
    await era.printAndWait(
      `神社对于 ${you.name} 和 ${luna.name} 而言，并没有什么特别的地方。`,
    );
    await era.printAndWait(
      `${you.name} 已过了祈祷好运的年纪，${luna.name} 则一向是靠实力取得成绩。`,
    );
    await era.printAndWait([
      '但令 ',
      you.get_colored_name(),
      ' 欣慰的是，',
      luna.get_colored_name(),
      ' 和从前一样，对新鲜事物总有无尽的好奇。',
    ]);
    await era.printAndWait(`一年几次的祈福，足够${luna.sex}保持足够的新鲜感。`);
    await era.printAndWait(
      `${you.name} 站在 ${luna.name} 身边，等待着${luna.sex}抽出象征『幸运』的签。`,
    );
    era.println();
    if (dice < 0.5) {
      await luna.say_and_wait('似乎是相当的好的启示呢。');
      await era.printAndWait([
        luna.get_colored_name(),
        ' 笑盈盈地将好签展示给 ',
        you.get_colored_name(),
        '，然后将签挂在了树上。',
      ]);
      await era.printAndWait(`${you.name} 突然想，要不自己也去抽个好签吧？`);
      await era.printAndWait(
        `只要能让 ${luna.name} 高兴，为你们看不见未来的曲折前路添加些许希望。`,
      );
      await era.printAndWait(
        `什么助力都好。啊啊……三女神，请保佑 ${luna.name}！`,
      );
    } else {
      await luna.say_and_wait('看来我们这一路上还会遇到很多阻碍。');
      await era.printAndWait([
        luna.get_colored_name(),
        ' 没有向 ',
        you.get_colored_name(),
        ' 展示签中写的是什么，只是将它仔细收好。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 的脸色稍微有点阴沉。']);
      await era.printAndWait([you.get_colored_name(), ' 知道的。']);
      await era.printAndWait(
        '如果你们看不见未来的曲折前路，还要平添神明的苛责……',
      );
      await era.printAndWait('稍微，有点烦躁。');
    }
  },
  /**
   * @param {CharaTalk} emperor 皇帝
   * @param {CharaTalk} you 玩家
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray_emperor(emperor, you, dice) {
    await era.printAndWait(
      `神社对于 ${you.name} 和 ${emperor.name} 而言，并没有什么特别的地方。`,
    );
    await era.printAndWait(
      `${you.name} 已过了祈祷好运的年纪，${emperor.name} 则一向是靠实力取得成绩。`,
    );
    await era.printAndWait([
      '但令 ',
      you.get_colored_name(),
      ' 惊喜的是，',
      emperor.get_colored_name(),
      ' 和露娜一样，对新鲜事物总有无尽的好奇。',
    ]);
    await era.printAndWait(
      `一年几次的祈福，足够${emperor.sex}保持足够的新鲜感。`,
    );
    await era.printAndWait(
      `${you.name} 站在 ${emperor.name} 身边，等待着${emperor.sex}抽出象征『幸运』的签。`,
    );
    era.println();
    if (dice < 0.5) {
      await emperor.say_and_wait('只要有绝对的实力，连天也会眷顾。');
      await era.printAndWait([
        emperor.get_colored_name(),
        ' 随手将签往后一抛，',
        you.get_colored_name(),
        ' 赶忙去接住，挂在了树上。',
      ]);
      await era.printAndWait(`${you.name} 突然想，要不自己也去抽个好签吧？`);
      await era.printAndWait(
        `只要能让 ${emperor.name} 高兴，为你们看不见未来的曲折前路添加些许希望。`,
      );
      await era.printAndWait(
        `什么助力都好。啊啊……三女神，请保佑 ${emperor.name}！`,
      );
    } else {
      await emperor.say_and_wait('有趣！吾喜欢挑战。');
      await era.printAndWait([
        emperor.get_colored_name(),
        ' 饶有兴致地举起手中的签，哈哈大笑。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 的脸色稍微有点阴沉。']);
      await era.printAndWait([you.get_colored_name(), ' 知道的。']);
      await era.printAndWait(
        '如果你们看不见未来的曲折前路，还要平添神明的苛责……',
      );
      await era.printAndWait('稍微，有点烦躁。');
    }
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_restaurant_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait(
          `后辈一直吵着要请我吃冰淇淋……呼呼，得找个时间和${luna.sex}一起去吃。`,
        ),
      () =>
        luna.say_and_wait(
          '最近好多孩子的食欲很旺盛，我得和计算一下，看如何增加食材的进货量。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_restaurant_emperor(emperor) {
    const buffer = [
      () =>
        emperor.say_and_wait('征途的一大乐趣，就是品尝脚下土地所孕育的粮食。'),
      () => emperor.say_and_wait('将美食和美酒呈上来！'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_dating_luna(luna) {
    const buffer = [
      () => luna.say_and_wait('要是做了噩梦的话就告诉我，我会帮你守夜的。'),
      () =>
        luna.say_and_wait(
          '心情消沉时就来『赏枫』，让心情『防风』……呼呼，真是杰作。',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_dating_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('弄臣，既然决定要献殷勤，就好好地取悦吾。'),
      () => emperor.say_and_wait('……哼，如果连踮脚都做不到，你也不必随侍了。'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} luna 鲁铎象征/露娜 */
  async o_s_shopping_luna(luna) {
    const buffer = [
      () =>
        luna.say_and_wait('现在的商铺，已经这么时髦了？难怪孩子们会被吸引。'),
      () => luna.say_and_wait('那边好热闹啊，我们去看看吧？'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} emperor 皇帝 */
  async o_s_shopping_emperor(emperor) {
    const buffer = [
      () => emperor.say_and_wait('吾喜欢有活力的城市。'),
      () => emperor.say_and_wait('臣民其乐融融，不错。'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} chara17 鲁铎象征/露娜/皇帝
   * @param {CharaTalk} you 玩家
   * @param {boolean} is_good_end 是否是 GE（鲁铎象征形态）
   * @param {boolean} i_emperor 是否是皇帝形态（否则为露娜）
   */
  async load_talk(chara17, you, is_good_end, i_emperor) {
    if (is_good_end) {
      await chara17.say_and_wait('愿太阳和月亮能继续陪伴着你');
      await chara17.say_and_wait('……但，请不要忘了皇帝，和露娜');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' 转过身去，颤抖着',
      ]);
      await chara17.say_and_wait('注意……安全，我们会再相遇的（抽泣）');
    } else if (i_emperor) {
      await chara17.say_and_wait('弄臣，无用功还要一次再一次了？');
    } else if (era.get('love:17') >= 75) {
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' 嘴唇微张，但发不出一丝声音',
      ]);
      await chara17.say_and_wait('——！');
      await chara17.say_and_wait('——不要走……');
      await chara17.print_and_wait([
        chara17.get_colored_name(),
        ' 抽泣着，但 ',
        you.get_colored_name(),
        ' 已远去……',
      ]);
      await chara17.say_and_wait('明明你答应过我……无论发生什么都不会离开——');
    }
  },
};
