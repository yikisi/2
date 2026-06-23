/**
 * @file 鲁铎象征 - 招募
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_start(luna, you) {
    await era.printAndWait(
      `${you.name} 挠了挠头，看着浴室里的积水好一会，随后摊了摊手。`,
    );
    await era.printAndWait(
      `大清早，浴室的所有设备就都罢了工。${you.name} 明白，就算费时费力，它们也不一定会乖乖听话。`,
    );
    era.printButton('「还不如去工作。」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} 潇洒地关上门，拎起背包，向特雷森走去。`,
    );
    era.println();

    await era.printAndWait(
      `又是一个新的学期。${you.name} 想，无论如何，特雷森都该从上年的忧郁里走出来了。`,
    );
    await era.printAndWait('新的学期，新的希冀，新的故事。');
    await era.printAndWait(
      `车站等车时，${you.name} 随手拿了一份站台上摆着的报纸，上面画着一位英姿飒爽的赛马娘，还有四个大字：`,
    );
    await era.printAndWait('鲁铎象征！');
    await era.printAndWait(
      `${you.name} 吹了声口哨，将报纸塞在腋下，登上了电车。`,
    );
    await era.printAndWait(
      '——那个鲁铎象征要出道，已经完全成为近期的热点话题了。',
    );
    await era.printAndWait(
      '无论是工作，还是日常休闲，只要是有人交流的地方，人们都在兴奋地讨论。',
    );
    await era.printAndWait('？？？「学生会会长，【皇帝】鲁铎象征！」');
    await era.printAndWait(
      '？？？「不知道是谁，有机会成为那位皇帝的训练员呢？」',
    );
    await era.printAndWait(
      `？？？「不过话说回来，${luna.sex}真的需要训练员吗？」`,
    );
    await era.printAndWait(
      '？？？「那可是象征的最高杰作，出道前便受万人瞩目的明星。哈，真是不得了的大人物！」',
    );
    await era.printAndWait(
      `每每听到这里，${you.name} 的心中就充满了自豪。似乎，那位皇帝的威名与 ${you.name} 有莫大的关系。`,
    );
    await era.printAndWait(
      `实际上，${you.name} 确实曾在象征家任职过。更具体的，是在象征家当过一段时间的助理训练员。`,
    );
    await era.printAndWait(
      `虽然只是跟在大人物身后打打下手，没有任何出名的机会，但在这段时光，${you.name} 成功地和象征家的小马娘们打成了一片。`,
    );
    await era.printAndWait(
      `其中一位叫露娜的孩子，更是和 ${you.name} 形影不离。`,
    );
    await era.printAndWait(
      `虽然已经有很长的时间没有再去象征家，但因为这段履历，不管是 ${you.name}，还是在特雷森的象征成员，互相都有着不浅的亲切感。`,
    );
    if (era.get('flag:当前声望') < 500) {
      await era.printAndWait(
        `回想起那段时光，${you.name} 只觉得神清气爽。希望有朝一日，${you.name} 也能和这样强大的赛马娘并肩作战，在中央闯出名堂来。`,
      );
    } else {
      await era.printAndWait(
        `不再回想那段荒唐的时光，${you.name} 向天空长出一口气，吐出了隐藏在自豪下的不安。新学期开始了，${you.name} 这个周期的担当将不可避免地和鲁铎象征竞争，恐怕未来会处处受限。真希望就算遇到挫折，她也能坦然前行。`,
      );
    }
    era.println();

    await era.printAndWait(
      `走进学园，${you.name} 发现行人相当稀少——或者说，大门紧闭。`,
    );
    await era.printAndWait(
      `${you.name} 意识到自己来的时间有点早……或许太早了，真应该和浴室搏斗一番。`,
    );
    await era.printAndWait(
      `但难得有时间，就四处走走吧。${you.name} 翻过了围墙，跳进了学园里。`,
    );
    await era.printAndWait('学园静悄悄的。');
    await era.printAndWait(
      `${you.name} 有些好奇地抬起头四处张望。平日里，恐怕不会有人在此时进入校舍区，而正常时间，特雷森总是热闹非凡。`,
    );
    await era.printAndWait(
      `但似乎有哪里不对劲，${you.name} 好像听到了有谁在哭泣的声音。`,
    );
    await era.printAndWait(`不知怎的，${you.name} 前所未有地烦躁起来。`);
    await era.printAndWait(`${you.name} 下意识动起身。`);
    await era.printAndWait('好像灵魂中的某些东西，在推着你行动。');
    await you.say_and_wait('再不快点的话！', true);
    await you.say_and_wait('再不快点找到那孩子的话！', true);
    await era.printAndWait(
      `${you.name} 向一偏僻的地方跑去，直到气喘吁吁时才反应过来，这里是私人的训练场所。`,
    );
    await era.printAndWait('顾不了那么多了——！');
    await era.printAndWait(`${you.name} 冲了进去，推开了虚掩的门。`);
    era.println();
    await era.printAndWait(
      `一位赛马娘蜷缩着身子，倒在地上。${luna.sex}捂着头，似乎是被剧烈的疼痛袭击了。`,
    );
    await era.printAndWait(`${you.name} 刚想发问，但脚却像钉子一样钉在地上。`);
    await era.printAndWait(`确实是鲁铎象征——${you.name} 张开嘴，口干舌燥。`);
    await era.printAndWait(
      `在伟大的名号和盛名之下，${
        luna.sex
      }还只是个正值花样年华的${luna.teen_sex_title}。`,
    );
    await era.printAndWait(`同时，${you.name} 剧烈地动摇了。`);
    await era.printAndWait('谁都无法想信那个举世无双的「皇帝」——');
    await era.printAndWait('那个据传是无懈可击的象征——');
    await era.printAndWait('那个愿望是全赛马娘都能够在「伊甸」奔跑的存在——');
    await era.printAndWait(
      `竟然会在无人之处哭泣和呕吐。但更令 ${you.name} 动摇的是……`,
    );
    era.printButton('「你是——」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} 觉得自己一定是疯了。但，${you.name} 知道，自己绝对不可能忘记那位孩子。`,
    );
    await era.printAndWait('——那位毛毛躁躁，像小狮子一样张牙舞爪的孩子。');
    await era.printAndWait('——那位绝不服输，神气地带着你上山下海的孩子。');
    await era.printAndWait('——那位霸道却又可爱，声称永远不会忘记你的孩子。');
    await era.printAndWait(`${you.name} 的灵魂里刻着${luna.sex}的名字。`);
    await era.printAndWait(`${you.name} 绝不会忘记 ${luna.sex} 的名字。`);
    era.printButton('「露娜！」', 1);
    await era.input();

    await era.printAndWait(`虚弱的${luna.teen_sex_title}抬起头看着你。`);
    await luna.say_and_wait(`……${you.actual_name}……？`);
    await era.printAndWait(
      `说罢，${luna.sex}似乎终于支撑不住了，摇摇晃晃地倒在了地上。`,
    );
    await era.printAndWait(
      `${you.name} 用自己都惊讶的速度向她奔去，抱住了${luna.sex}。`,
    );
    await luna.say_and_wait('真的是你……');
    await era.printAndWait(`言罢，${luna.sex}昏昏沉沉地睡去了。`);

    era.drawLine();
    await era.printAndWait(
      `鲁铎象征——在被这么称呼前，${luna.teen_sex_title}原来的名字是露娜。`,
    );
    await era.printAndWait(`${luna.sex}喜欢奔跑、喜欢甜食、喜欢懒懒散散度日。`);
    await era.printAndWait(
      `在被家族有所期待之前，${luna.sex}不过是象征家令人头痛又宠爱的小少爷。`,
    );
    await era.printAndWait(
      '但随着年龄渐长，露娜那绝对的实力，令人窒息的锋锐，让象征家喜出望外。',
    );
    await era.printAndWait(`${luna.sex}是这样强大。强大到足够满足所有的欲望。`);
    await era.printAndWait('露娜记得，从某天开始，自己的生活就变了。');
    await era.printAndWait(
      `${luna.sex}不再是露娜了，从此往后，${luna.sex}是鲁铎象征。`,
    );
    await era.printAndWait('可一个人，要怎么凭空变成另一个人呢？');
    await era.printAndWait(`露娜日夜苦恼，直到在某日，${luna.sex}——`);
    era.printButton('「露娜……露娜……！」', 1);
    await era.input();

    await era.printAndWait(
      `似乎是终于听到了 ${you.name} 的呼唤，露娜悠悠醒转。`,
    );
    await era.printAndWait(
      `${luna.sex}苦涩的笑着，自己还是坏掉了？怎么会听见 ${
        you.actual_name_with_title
      } 的声音。`,
    );
    await era.printAndWait(
      `${you.sex}是在特雷森，可自从那时起，自己已经下定决心，不再牵连${you.sex}。`,
    );
    await era.printAndWait(
      `但随后，${luna.sex}敏锐地意识到，自己并非身处梦境。`,
    );
    era.drawLine();
    era.printButton('「露娜，真的是你吗？」', 1);
    era.printButton('「露娜，你就是鲁铎象征？！」', 2);
    await era.input();
    await era.printAndWait(`看着怀中的露娜，${you.name} 不由得发问。`);
    await luna.say_and_wait('你终于来到我身边了。');
    await era.printAndWait(
      `露娜认命似的，露出了苦涩的微笑。随后，${luna.sex}喜极而泣。`,
    );
    await luna.say_and_wait(
      '如果你再早来一些，我都不会……你走吧，不要将今天的事情透露出去。皇帝不能软弱。',
    );
    await era.printAndWait(
      `${you.name} 没有听完露娜说的话，${luna.sex}将你驱逐出了这个地方。`,
    );
    await era.printAndWait(`${you.name} 分明清楚，${luna.sex}也认出了你。`);
  },
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_end(luna, you) {
    await era.printAndWait(
      `这接下来的好几天，${you.name} 都陷入了失魂落魄的境地。`,
    );
    await era.printAndWait(`露娜不想见你，就不会去见${luna.sex}。`);
    await era.printAndWait(
      `一直以来，${you.name} 都无法忤逆${luna.sex}的想法。就算是长大了，变成训练员了，${luna.sex}只要一开口，无论是什么你都会乖乖照做。`,
    );
    await era.printAndWait(
      `${you.name}惶惶不安时，突然有一位学生会的干事，兴冲冲地冲进了训练员办公室。`,
    );
    await era.printAndWait(
      `${luna.sex}是来找 ${you.name} 的。或者说，${luna.sex} 带来的一封找你的信。`,
    );
    await era.printAndWait('干事「这是来自学生会长，鲁铎象征的直接指名。」');
    await era.printAndWait(
      `${luna.sex}显然非常兴奋，直接将信递到了 ${you.name} 的手里。`,
    );
    await era.printAndWait(`${you.name} 讪讪笑着，接过了这『烫手山芋』。`);
    await era.printAndWait(
      `任务完成，干事就风一样地跑开了。${you.name} 打了个哈哈早退。`,
    );
    await era.printAndWait(
      `随后，${you.name} 用尽可能快的回了好几天都没回去的家，将房门紧闭。`,
    );
    await era.printAndWait(
      `${you.name} 跑进家里最里的浴室里，用背死死地将门抵住。`,
    );
    await era.printAndWait(
      `${you.name} 感觉自己的手在不断颤抖，费了好大的劲，才颤颤巍巍地撕开了信封，`,
    );
    await era.printAndWait(
      `${you.name} 取出信纸——雪白的纸张上，赫然只写着两个大字：`,
    );
    await era.printAndWait('「救我」', {
      align: 'center',
      color: luna.color,
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(
      `${you.name} 颓然地坐在地上，由于没能及时打扫浴室，${you.name} 刚买的裤子已经被积水浸透了。`,
    );
    await era.printAndWait(`${you.name} 明白，${you.name} 没有拒绝的权力。`);
    await era.printAndWait(
      `${you.name} 不清楚，究竟鲁铎象征——露娜，发生了什么事。`,
    );
    await era.printAndWait(`${you.name} 也明白，自己永远不会拒绝露娜的请求。`);
    await era.printAndWait('无论前方，等待着你们的是什么样的地狱。');

    era.drawLine();
    await era.printAndWait([
      '成功与 ',
      luna.get_colored_actual_name(),
      ' 签约了。',
    ]);
  },
};
