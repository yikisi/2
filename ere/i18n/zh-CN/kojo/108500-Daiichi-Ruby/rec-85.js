/**
 * @file 第一红宝石 - 招募
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_start(ruby, you) {
    const ret = [];
    era.print('今天的训练场比往日要热闹不少，声援、欢呼、赞叹……');
    await era.printAndWait(
      `如此丰富的充满感情的声音，只为场上的${ruby.sex}而编织。似乎全场的视线都集中在了那一人身上。`,
    );
    era.println();

    era.print('新人训练员A「喂，这边！」');
    era.print('新人训练员A「已经开始了哦！」');
    era.printButton('「现在就过去！」', 1);
    await era.input();

    await era.printAndWait(
      '新人训练员同僚：「前辈说最好仔细看看的马娘……你看，就是那孩子。」',
    );
    era.println();

    await era.printAndWait(`顺着友人的视线，${you.name} 注意到——`);
    era.printButton('（跑在挺后方的说……）', 1);
    era.printButton('（白丝 + 短灯笼裤……）', 2);
    ret.push((ret['hentai1'] = await era.input()));
    if (ret['hentai1'] === 2) {
      era.println();
      era.print('他妈的，上面的脑袋没问题，下面的脑袋却起火了。');
      era.print(
        `在确认自己完全勃起之后，${you.name} 的心底浮现出了一种不好的预感：难不成我是萝莉控？`,
      );
      era.print(
        `${you.name} 看向赛场上的棕发马娘，过人的鉴识眼让 ${you.name} 一眼看出少女的身高堪堪140cm出头。`,
      );
      era.print(`只一瞬，${you.name} 的视线便定格在了交错的双腿之间。`);
      era.print(
        `贴身的红色运动短裤下，雪白的丝袜将少女的私处遮掩。但在 ${you.name} 眼中，肥嘟嘟的粉嫩雪蛤已经昭然若现。想必要比豆腐还要滑嫩，让人不禁想一口含住。`,
      );
      era.print(
        `隐约地，${you.name} 看到那短裤中间，有一条因阴阜而勾勒出的诱人细缝……`,
      );
      await era.printAndWait(
        '套着白丝的大腿在明媚的光线下透着可爱的粉红，圆润的小臀在浮动中有种异样的美感。',
      );
    }
    era.println();

    await era.printAndWait('新人训练员A「喂喂，别看入迷了啊。」');
    era.println();

    await era.printAndWait(
      `${you.name} 慌忙转过头去，视线最后也不忘瞄向女孩那透着桃红的白丝小腿。`,
    );
    era.println();

    era.print('新人训练员A「这前面都挡得死死的，想要追回差距很难吧。」');
    era.printButton('「是啊。」', 1);
    era.printButton('「不对，从大外侧的话……」', 2);
    await era.input();

    era.print('新人训练员A「诶？骗人的吧！」');
    await era.printAndWait(
      `老手训练员A「真是不得了的末脚，那就是那个……华丽一族的，${ruby.name}。」`,
    );
    era.println();

    era.print(
      '华丽一族。在政治界和商界，以及马娘的竞赛世界中全都打响了自身名号的血族，正统的后继者们此刻也在各处发光发热。',
    );
    await era.printAndWait('在这个国家，应该不存在没听过其名的人吧。');
    era.println();

    await era.printAndWait(
      `根本没把已经出道的前辈们当一回事，${ruby.name}，用比任何人都快的速度冲过了终点线。`,
    );
    era.println();

    era.print(
      `新人训练员A「好厉害！——……那就是传闻中的华丽一族，${ruby.name} 啊。看来已经完全进入本格化了。」`,
    );
    era.printButton('（那岂不是个头也不会怎么长了？）', 1);
    await era.input();

    await era.printAndWait(
      `到底会有什么样的训练员陪伴她呢？此刻，${ruby.name} 周遭已经聚集了许多迫不及待想要招募她的训练员。`,
    );
    era.println();

    era.print(`${you.name} 自己——`);
    era.printButton('没有那样的自信。（放弃招募）', 1);
    era.printButton('（看到那样的奔驰，哪能停滞不前！）', 2);
    era.printButton('（白丝萝莉香香……）', 3);
    ret.push((ret['hentai2'] = await era.input()));
    if (ret['hentai2'] > 1) {
      era.println();

      await ruby.say_and_wait(
        '各位训练员，今天我想借着这个机会，向各位告知一件事情。',
      );
      era.println();

      era.print(
        `${you.name} 收到了管家先生发放的，决定 ${ruby.name} 专属训练员的【选拔测试】的详细资料。`,
      );
      era.print(
        '【选拔测试】期限为30天，每项测试皆会进行评价，再依据综合评分决定是否合格。',
      );
      await era.printAndWait('出现同分者则会追加新的测试项目，管家补充道。');
      era.println();

      await era.printAndWait(
        `${you.name} 看向资料。社交舞、餐桌礼仪……还有其他各种项目。可以肯定的是这绝不是一般人花30天就能掌握的内容。`,
      );
      era.println();

      await ruby.say_and_wait(
        '若没有问题，就到此结束。非常感谢各位的宝贵时间。',
      );
      era.println();

      era.print(
        `语毕，扫视一遍人群的 ${ruby.name}，视线和 ${you.name} 对上了。`,
      );
      await era.printAndWait(
        '温柔的表情消失不见，鲜红的眼瞳竟带上了愉悦和鄙夷两种截然不同的神态。',
      );
      era.println();

      era.print(
        '校外离学园最近的道场便是第一会场。尽管测试内容和训练员的工作毫无关系，但前辈训练员已经换好衣服出发了，要去参加吗？',
      );
      era.printButton('（还是算了。）（放弃招募）', 1);
      era.printButton('（……这也许可以说是个大好机会吧。）', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        era.println();
        await era.printAndWait('想象着突破选拔测验的自己，你决定出发去道场。');
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out1(ruby, you) {
    era.print('离开学园去了最近的道场……');
    ruby.say('哈啊啊啊！');
    era.print(
      `${ruby.name} 的动作行云流水，外行的你也能一眼看出 ${ruby.name} 自幼便开始钻研防身术了。`,
    );
    era.print('【接受防身术的训练，并学会整套的招式。】看来言而非虚。');
    era.printButton('（等等等等，要我做出刚才那个？？）', 1);
    await era.input();

    await era.printAndWait('你的疑问冒出的同时，已经有数名参与者失去了信心。');
    era.println();

    await era.printAndWait(
      '管家「要是因为这种程度就怯懦，是无法前进的。经历百般磨炼后生出的自信，将会升华为最璀璨的品格。」',
    );
    era.println();

    await era.printAndWait(
      `管家「各位之后要献身的对象，是华丽一族的大小姐——${ruby.name}。还请各位做好觉悟和有所自觉。」`,
    );
    era.println();

    await ruby.say_and_wait(
      '谈话到此为止。我会负责最后的判断。请各位专心致志地进行选拔测验。',
    );
    era.println();

    era.print('本想找人开个小灶的，现在怎么办呢？');
    era.printButton('还是算了，靠自己吧。', 1);
    era.printButton('找！', 2);
    if ((await era.input()) === 2) {
      era.println();
      era.print('那么要找谁呢？');
      era.printButton('回忆起大学期末考前的时光，答案已经显而易见了！', 1);
      await era.input();
      await you.say_and_wait('——就决定是你了，白丝臭脸大小姐。', true);
      era.get('cflag:85:招募状态').special++;
    }
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out2(ruby, you) {
    era.print('下一场测试的会场是餐厅');
    era.print(`${you.name} 从训练员室来到现场，面色一僵，只看到`);
    era.print('——位子几乎被坐满了，除了某处。');
    era.print(
      `在周遭人兴味盎然的视线中，${you.name} 满脸无奈地坐在了 ${ruby.name} 的侧近处。`,
    );
    era.print(
      '虽然黑色襦裙的下摆遮住了最美丽的风景，但椅座靠背比桌面要高一些。',
    );
    era.print(
      `${you.name} 的视角下，匀称的白丝美腿形成了一条略微倾斜却笔直的优美斜线。`,
    );
    era.print('正当你完全放松下来时，你闻到了一股「异味」。');
    era.print('那是一种吸入后就会使脑浆融化，身心松弛的甘美毒药。');
    era.print('新人训练员B「喂，你怎么了？脸色好像有点奇怪。」');
    era.print('新人训练员C「是身体哪里不舒服吗？」');
    era.print(
      '注意到你异样的神情和皱成一团的眉毛，附近的训练员放下刀叉担忧道。',
    );
    era.print(
      `${ruby.name} 对周遭毫无反应，让手中的刀滑过料理，餐具没有发出丝毫声响，在你看来宛若一场精彩的默剧。握起高脚杯时，连指尖都倍感纤细，普通的水彷佛成了高档葡萄酒……`,
    );
    era.printButton('（好厉害啊……）', 1);
    era.printButton('（握住的是我的鸡巴该多好……）', 2);
    if ((await era.input()) === 2) {
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print(`用餐，或者说测试结束，${ruby.name} 起身离席。`);
    era.print(
      `${ruby.sex} 今天上身是深蓝色的长袖短衣，上面绣着精美的花朵刺绣。`,
    );
    era.print('下半身是长至小腿的黑裙，玲珑秀气的白丝小脚上穿着软底皮鞋。');
    era.print('绚丽的棕色长发被一只红色蝴蝶在脑后绑起。');
    era.print(
      '配上那完美呈现了东亚人优点的精致五官，充满了贵族风情的粉红色眼瞳。',
    );
    era.print('单是盈盈立在那，便彷佛是画中的倾国美人。');
    era.print(
      `这套上蓝下黑的服饰面料十分好，便是不懂行的 ${you.name} 一眼也能察觉出不便宜。`,
    );
    era.print(`瞧见看直了眼的 ${you.name}，不知道 ${ruby.name} 心中在想什么。`);
    era.print(
      `${ruby.sex}提起裙角行了个道别礼，张扬大方，仰起美丽至极的小脸不漏声色地朝 ${you.name} 一笑。`,
    );
    await era.printAndWait('笑不露齿，却甜美无比。');
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out3(ruby, you) {
    const ret = [];
    await era.printAndWait(
      '那之后的几天，你接连学习了各类教养与知识，随后又掉头回去温习防身术，结果——',
    );
    era.println();

    era.print('老手训练员A「放弃！已经——不行了啦！」');
    await era.printAndWait(
      '新人训练员A「我也放弃。说到底训练员真的需要学这些东西吗？」',
    );
    era.println();

    era.print('随着测试的进行，主动放弃的人数甚至超过了测试不合格的人数。');
    era.printButton('我也放弃了。（放弃招募）', 1);
    era.printButton('就是有必要，才会要我们做的。', 2);
    ret.push((ret['select'] = await era.input()));
    if (ret['select'] === 2) {
      ruby.say('明天的社交舞测验，各位要参加吗？');
      era.print('听到「社交舞」三个字后，身边最后的几位同僚便也陆续离开了。');
      era.print(
        `${ruby.name} 似乎丝毫不在意你们的谈话内容，平铺直叙地通告后，把视线对向了你，神色中有一点意外。`,
      );
      era.print(
        `在 ${ruby.name} 身上，${you.name} 没有感受到那日在赛场时的热情。`,
      );
      era.print('本来参加训练员选拔测试，就是抱着「说不定」的期待。');
      era.print(
        `遗憾的是现实让 ${you.name} 理解，自己与 ${ruby.name} 之间的鸿沟是多么得遥远、难以跨越。`,
      );
      era.print(`${ruby.sex}是生在陡峭的悬崖之上，谁人都无法触碰的高岭之花。`);
      era.printButton('（自己配不上她的，放弃吧。）（放弃招募）', 1);
      era.printButton(
        '（……但是，那出色的奔跑，那抹身姿恐怕此生都难以忘怀。）',
        2,
      );
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        ruby.say(
          '……留在这里的您，决定要参加下一项测试。我可以理解为这个意思吗？',
        );
        era.print(`美丽的深红色眼眸直直地凝视着 ${you.name}。`);
        era.printButton('「是！！！」', 1);
        await era.input();

        ruby.say('唔———！');
        await ruby.say_and_wait('呼嗯…………');

        ruby.say('我知道了');
        era.print(
          `${ruby.child_sex_title}的脸颊为何有淡红色浮现，你不得而知。`,
        );
        ruby.say('请别忘记确认测试的曲目等事项……那么，晚安了。');
        era.print(`${ruby.name} 向你行了一礼。`);
        era.printButton('冲向体育馆', 1);
        await era.input();
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out4(ruby, you) {
    era.print(`${you.name} 一个人默默地反复练习明天测试要考的社交舞。但是……`);
    era.printButton('（好难！）', 1);
    await era.input();

    era.print('理所当然。怎么想都不是一朝一夕可以学会的东西。');
    era.printButton('（只能学多少算多少了。）', 1);
    await era.input();

    era.print('哒，哒，哒……');
    ruby.say('您还在练习吗？');
    await ruby.say_and_wait('各位都已经回去了，您也差不多该去休息一下。');
    era.println();

    era.print('社交舞的测试可就在明天，现在哪是顾及颜面的时候。');
    era.print(`${you.name} 抱着豁出去的精神——`);
    era.printButton('「能否请你指导我怎么跳社交舞呢？」', 1);
    await era.input();

    ruby.say('……');
    await ruby.say_and_wait('请您先端正好姿势。');
    era.println();

    await era.printAndWait(`${ruby.name} 走到你眼前，手把手地指导起来。`);
    era.println();

    await ruby.say_and_wait('您应该已经记住整支舞的动作了吧？那我们就开始吧。');
    era.println();

    era.print(
      `${ruby.sex}叹了口气，走到你的怀中。毛茸茸的耳朵偶尔会蹭到 ${you.name} 的脸颊。`,
    );
    era.print(`${ruby.name} 的指导无疑是严厉的。`);
    era.print(
      `${you.name} 按照 ${ruby.name} 说的，配合着音乐和${ruby.sex}一起动起身子。`,
    );
    await era.printAndWait(
      `本想低头瞥一眼临时舞伴的时候，一双稚嫩的小手攀上了 ${you.name} 的脸颊。`,
    );
    era.println();

    ruby.say('请将脸抬高。若您想达成什么成就，就必须随时保持威严庄重的态度。');
    await ruby.say_and_wait(
      '有什么令您感到可耻的事吗？若是没有，那您就应该为了自己，将视线笔直地投往前方，挺胸抬头才对。',
    );

    await era.printAndWait(
      `被${ruby.sex}这么说，你回想起了至今为止 ${ruby.name} 的举止。`,
    );
    era.println();

    ruby.say(
      '没错。请不要忘记这份身姿。若您有盯上的目标存在，那就必须做出相称的行为举止。',
    );
    ruby.say('唯有如此，有朝一日才能成为自己想成为的模样。');
    await era.printAndWait(`${ruby.name} 说完莞尔一笑。`);
    era.println();

    await era.printAndWait(
      `在那之后，即便布置会场的物料公司员工来了，${you.name} 与 ${ruby.name} 仍选择将地点移到户外继续练习。`,
    );
    era.println();

    await era.printAndWait(
      `——于是隔天，多亏了 ${ruby.name} 的「悉心指导」，${you.name} 成功在测试中拿出了令所有人眼前一亮的成果。`,
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   * @param {string} breast_cup
   */
  async rec_out5(ruby, you, breast_cup) {
    era.print(`在与其他大小姐的茶会上，${you.name} 惊觉！`);
    era.print(`训练员只有 ${you.name} 一个人诶，没有其他人在。`);
    era.printButton(
      '大家一定是在别的地方接受测验，或者是挑其他日子测验吧！',
      1,
    );
    await era.input();

    era.print(`无论是独特的氛围还是少女们的体香，都让 ${you.name} 无法习惯。`);
    era.print(`紧张的 ${you.name} 甚至把杯内红茶一口气喝光。`);
    era.printButton('（再续一杯吧！嗯）', 1);
    await era.input();

    await ruby.say_and_wait('盯……');
    era.println();

    era.print(`这场茶会是由 ${ruby.name} 举办的。`);
    era.print('在这种情况下，要是自己倒的话……');
    era.printButton('（泡茶的技术真好。）', 1);
    await era.input();

    await era.printAndWait(
      `……${you.name} 感觉到这个说法好像不太对。但更能肯定自己主动倒茶是坏了规矩的。`,
    );

    ruby.say('……多谢您的夸奖。');
    era.print(`说完，${ruby.name} 为你倒了第二杯茶。`);
    await era.printAndWait(`${you.name}刚松了一口气——`);

    era.print('管家「大小姐及各位，时间到了。接送的车已经准备好了。」');
    era.printButton('「餐会？」', 1);
    await era.input();

    await ruby.say_and_wait('是的，同时也是下一个测试会场。那么我们就出发吧。');
    era.println();

    era.print(
      `${ruby.name} 不由分说，便将 ${you.name} 带到了只在照片中看过的那种豪华游轮上。`,
    );
    await era.printAndWait(
      `${you.name} 被吓得不知所措，但是——${ruby.name} 面对财政界的显贵们也毫无畏惧，和 ${you.name} 完全不一样。`,
    );
    era.println();

    await era.printAndWait(
      `稍微环视四周，便可见许多视线如那日在训练场一般追逐${ruby.sex}的身影。眼神中莫大的期待，全是献给华丽一族的。`,
    );
    era.println();

    ruby.print(
      '【若您有盯上的目标存在，那就必须做出相称的行为举止。唯有如此，有朝一日才能成为自己想成为的模样。】',
    );
    era.print(`${you.name} 的目标是——`);
    era.printButton(`成为配得上 ${ruby.name} 的训练员`, 1);
    era.printButton(ruby.name, 2);
    if ((await era.input()) === 2) {
      era.print(
        `${ruby.name} 的身材可以说是矮小，但胸前的果实足足有${breast_cup} Cup之大。柔滑的脸蛋，可爱的衣装。身为训练员的 ${
          you.name
        } 也想做很多色情的事情。`,
      );
      era.print('被这样小学生的身体亲吻');
      era.print('丰润的嘴唇接触皮肤的触感');
      era.print('像牛奶一样光滑的皮肤');
      await era.printAndWait('把小舌头拧进耳朵里低语');
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print('……对啊，就是这么一回事。');
    await era.printAndWait(
      `回过神来，视线已经无法从 ${ruby.name} 身上移开了。`,
    );
    era.println();

    await era.printAndWait('深夜的校门前。');
    ruby.say('辛苦啦。那么，接下来我还有训练要做的关系，先在此失陪了。');
    era.printButton('「诶？现在开始吗？」', 1);
    await era.input();

    ruby.say('是的。您不用客气，尽管先回去吧。明天的测验是——');
    era.printButton('「有什么我能帮上忙的吗！」', 1);
    await era.input();

    ruby.say('没有特别需要的。');
    era.printButton('「帮忙测个时间什么的！」', 1);
    await era.input();

    ruby.say('……');
    era.printButton('「想测啊，很想啊。」', 1);
    await era.input();

    await ruby.say_and_wait('请自便，尽管测吧。');

    era.print(
      `这一晚，${you.name} 感觉内心有什么东西变了。一定是 ${ruby.name} 的话语，让自己产生了变化吧。`,
    );
    await era.printAndWait('（暂时没有因选拔测试而外出的必要了）');
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_week_end(ruby, you) {
    era.print(
      `经过豪华游轮事件，在测试结束后陪 ${ruby.name} 训练，已经成为了 ${you.name} 每日的习惯。${you.name} 甚至愿意把假日拿出来陪 ${ruby.name}。`,
    );
    era.print('但是，随着测试进入尾声，意味着这样的帮忙也是最后一次了。');
    era.printButton('「辛苦啦。」', 1);
    await era.input();

    ruby.say('您也是。');
    era.printButton('「训练员选拔测试很快就要结束了呢。」', 1);
    await era.input();

    await ruby.say_and_wait(
      '您说的对。视线又往下飘了，请抬起胸膛，缩起下颚站好。',
    );
    era.println();

    await era.printAndWait('好险，稍微看下腿差点被发现了。');
    era.println();

    await ruby.say_and_wait(
      '意识会展现在态度上。现在再扪心自问一遍，看看自己的心在哪里如何？',
    );
    era.println();

    era.print(
      `还没放弃的训练员肯定大有人在，一直被 ${ruby.name} 知道，${you.name} 深知自己被选出来的概率微乎其微。`,
    );
    era.printButton('「至今为止，真的非常感谢！」', 1);
    await era.input();

    await ruby.say_and_wait('呼……');
    era.println();

    era.print(
      `${you.name} 告诉 ${ruby.name}，自己有幸能完整地接受了这场测试。`,
    );
    await era.printAndWait(
      `无论结果如何，${you.name} 都会将在这一个月里学到的东西转化为将来成长的动力。`,
    );
    era.println();

    await ruby.say_and_wait('……是。您辛苦了。');
    era.println();

    era.print(
      `从头到尾，彼此间都有段距离。这让 ${you.name} 稍微有点寂寞就是另一回事了。`,
    );
    era.print(
      `届时训练员到底会是谁，是怎么样的人，${you.name} 都打算声援对方。`,
    );
    await era.printAndWait(
      `希望那个人能扶持高贵的积极向前的${ruby.sex}，一起迈进。`,
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_final(ruby, you) {
    await ruby.say_as_passer_by_and_wait(
      '信件',
      '诚挚感谢您参加训练员选拔测试，考核结果如下——',
    );
    era.printButton('「……咦？」', 1);
    await era.input();

    era.print(`${you.name} 一手抓紧那封信，匆匆跑出去训练员室。`);
    await era.printAndWait(
      `在训练场找到了 ${ruby.name}，你大声叫喊${ruby.sex}的名字`,
    );

    ruby.say('哈啊……从那个神情来看，您似乎收到信了呢。');
    era.printButton('「这结果……」', 1);
    await era.input();

    era.print(`${ruby.name} 庄重地向你行礼。`);
    ruby.say(
      '从今以后，就请您多多指教了。彼此一起更加努力，好好地精进自己吧。',
    );
    ruby.say('再见');
    era.printButton('「这【及格】是指？」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} 确定了纸面上写的【及格】并不是搞错了，但是为什么？自己各种测试的结果只能说差强人意，丝毫搬不上台面，除了少数几个……`,
    );
    era.println();

    ruby.say('除了您以外没有人留下。');
    ruby.say('其他人都决定弃权了。');
    await ruby.say_and_wait('因此，您被选为我的训练员了。说明完毕。');
    era.println();

    era.print('所以说，只是碰巧留下？');
    await era.printAndWait(
      `${
        you.name
      } 失望地垂下肩膀，没有注意到 ${ruby.child_sex_title} 眼睛里的笑意。`,
    );
    era.println();

    await era.printAndWait(
      `想着再不济也当上 ${ruby.name} 的训练员了，抬起头的瞬间——`,
    );
    era.println();

    const temp = era.get('cflag:85:招募状态').special;
    if (temp) {
      era.add('relation:85:0', -temp * 10);
      era.add('love:85', temp);
      await ruby.say_and_wait(
        '您坚持到了最后，做的很好。偷看未成年少女下体的变态先生。',
      );
    } else {
      await ruby.say_and_wait('您坚持到了最后，做的很好。');
    }
    era.println();

    await era.printAndWait(`不顾愣神的 ${you.name}，${ruby.name} 补充道。`);
    era.println();

    await ruby.say_and_wait(
      '在缔结契约之前，有几项课题想先请您完成。请从站在那里的管家那收下课题，并在明天结束前提出。',
    );
    era.println();

    await era.printAndWait([ruby.get_colored_name(), ' 轻笑着跑开了。']);
  },
};
