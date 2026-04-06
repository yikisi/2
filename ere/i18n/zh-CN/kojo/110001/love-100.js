/**
 * @file 奇锐骏 - 爱慕
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

module.exports = {
  async '49-before'(acute) {
    await era.printAndWait([
      '最近，不知为何，',
      acute.get_colored_name(),
      ' 似乎经常坐在中庭的枯树洞里。',
    ]);
    await era.printAndWait([
      '前几天偷偷的跟了去，在远处眺望着，发现',
      acute.sex,
      '似乎在枯树洞中思考些什么。',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      '如果想要进一步了解 ',
      acute.get_colored_name(),
      ' 的话，就去中庭的枯树洞看看呢？',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   */
  async 49(acute, you) {
    await era.printAndWait('训练的闲余，一个人来到了中庭。');
    await era.printAndWait([
      '看到了 ',
      acute.get_colored_name(),
      ' 偶尔会待在里面的树洞，不由自主地走了过去。',
    ]);
    await era.printAndWait(
      '躬下身子，凑近了看，却感觉树洞里的空间意外的狭小。',
    );
    await era.printAndWait(
      '说不清事树梢还是树根的木端显露着黑色的印记，突兀不平的表面与隐约可见的黑蚁在其间穿梭。想也知道，坐在里面的感受恐怕并不会好受。',
    );
    await era.printAndWait([
      '那为什么坐在里面的 ',
      acute.get_colored_name(),
      '，却能那般得怡然自得呢？',
    ]);
    await era.printAndWait('左思右想——却是横竖想不通。');
    await era.printAndWait('「哈」得一声叹了口气，正想起身——');
    await you.say_and_wait('桦！？');
    await era.printAndWait(
      '突然间，双腿好似被一股强大的外力所推动。眼前的天地随之上下倒错。自己的身体被迫一个跟斗「翻」进了树洞之中——',
    );
    await era.printAndWait('发生什么了！？');
    await era.printAndWait(
      '刚想发出这般疑惑的尖叫，却见颠倒的天空之中，浮现出了一个自己再熟悉不过的脸庞。',
    );
    era.printButton(`「${acute.name}！」`, 1);
    await era.input();
    await era.printAndWait([
      '本想发出的疑惑，就在看着露出了一副如孩子般兴奋表情的 ',
      acute.get_colored_name(),
      ' 时，转变为了惊讶。',
    ]);
    await era.printAndWait('可随后，这份惊讶便又转变为了一个新的疑惑。');
    era.printButton(`「${acute.name}？」`, 1);
    await era.input();
    await era.printAndWait('这是第二声呼喊。');
    await era.printAndWait(
      '有别于最初的茫然，与第一声的惊讶，这一声，更多的是疑惑。',
    );
    await era.printAndWait([
      '此前，',
      you.get_colored_name(),
      '从未见过这样如孩子般露出了兴奋表情的 ',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('而如今却突然见到了。');
    await era.printAndWait([
      '这不由得令 ',
      you.get_colored_name(),
      ' 惊喜，乃至于产生了与之更大的惊异——',
    ]);
    await era.printAndWait([
      '眼前的如孩童般欣喜的 ',
      acute.get_colored_name(),
      '，真的是 ',
      you.get_colored_name(),
      ' 所认识的那个始终温和的 ',
      acute.get_colored_name(),
      ' 吗？',
    ]);
    await era.printAndWait([
      '而眼前的 ',
      acute.get_colored_name(),
      '，却又好似听到了 ',
      you.get_colored_name(),
      ' 心中这般的疑惑。在听到 ',
      you.get_colored_name(),
      ' 的第二声呼喊后，',
      acute.sex,
      '的表情便也随之一转，拭去了最初的欣喜，不知为何得愣在了原地。',
    ]);
    await era.printAndWait([
      acute.sex,
      '愣住了，',
      you.get_colored_name(),
      ' 也不知所措的愣住了，就这样，',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 一同愣在了原地。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 被抓着脚颠倒着卧于树洞之内，而',
      acute.sex,
      '则抓着 ',
      you.get_colored_name(),
      ' 的脚全身盖在树洞之上。',
    ]);
    await era.printAndWait([
      acute.sex,
      '低着头，透过遮挡正中的硕果望着 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 抬着头，尽力透过正中的硕果望着',
      acute.sex,
      '。',
    ]);
    await era.printAndWait('……');
    await era.printAndWait([
      '好一会儿后，似乎终于意识到了什么的 ',
      acute.get_colored_name(),
      '，脸红到了耳根。',
    ]);
    await era.printAndWait('………');
    await era.printAndWait([
      '终于被从 ',
      acute.get_colored_name(),
      ' 的摔跤技释放了后，看到了 ',
      acute.get_colored_name(),
      ' 惊慌失措的道歉。',
    ]);
    await era.printAndWait([
      '听来，似乎是 ',
      acute.get_colored_name(),
      ' 一如既往的来到中庭打算坐在枯树洞里休息时，无意间看到了自己躬身于树洞前的背影。',
    ]);
    await era.printAndWait([
      '随后，不知为何「兴趣大发」。便托起了脚，把 ',
      you.get_colored_name(),
      ' 强压在了树洞之中。',
    ]);
    await you.say_and_wait('……');
    await acute.say_and_wait('……');
    await era.printAndWait([
      '二人无言，一时间不知该说什么，却看到 ',
      acute.get_colored_name(),
      ' 红透的脸颊仍未消退。眼神高速得闪烁着，似乎正试图隐藏着什么不可告人的心思。',
    ]);
    await era.printAndWait('……是什么心思呢？');
    await era.printAndWait([
      '老实说，',
      you.get_colored_name(),
      ' 说不太出口。',
      acute.get_colored_name(),
      ' 似乎也一样，羞涩得不敢说出口。',
    ]);
    await era.printAndWait(['你们默契地不去看向彼此的脸，一同转过头。']);
    await era.printAndWait(
      '望着一旁最初以为狭小的树洞，心中即感慨着，又下意识想要打破这尴尬的沉默般，开了口——',
    );
    await you.say_and_wait('……真大呢。');
    await acute.say_and_wait('……嗯——');
    await era.printAndWait('互相间也不知达成了什么默契的，默契地点了点头——');
  },
  async '74-before'(acute) {
    await era.printAndWait([
      '最近，与 ',
      acute.get_colored_name(),
      ' 待在一起的时间越来越长了。',
    ]);
    await era.printAndWait([
      '即便分开，脑海里也总是想着',
      acute.sex,
      '的事情。',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait([
      '或许，与 ',
      acute.get_colored_name(),
      ' 的关系还可以再进一步？',
    ]);
    await era.printAndWait([
      '……如果下定了决心的话，就邀请 ',
      acute.get_colored_name(),
      ' 前往车站约会吧。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async 74(acute, you, callname) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 一同在车站前进行着约会……',
    ]);
    await acute.say_and_wait([
      '那个……',
      you.actual_name,
      '君。为什么一定要到车站来呢？',
    ]);
    await era.printAndWait('嗯……好问题。');
    await era.printAndWait([
      '毕竟从 ',
      you.get_colored_name(),
      ' 的角度来说的话，能够跟 ',
      acute.get_colored_name(),
      ' 一同两个人私自外出，不论去哪都可以算做是约会了吧？',
    ]);
    await era.printAndWait('可即便如此，却只有来到车站，才能够算作是约会？');
    await era.printAndWait('如果这不是神明大人的某种恶趣味的话，');
    await era.printAndWait('那么，也就是说……');
    era.println();

    era.printButton(`向 ${acute.name} 告白。（升级关系）`, 1);
    era.printButton('……或许是自己想多了吧。（暂不升级）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait('……之所以特意强调是「约会」的原因，还需要问吗？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 喜欢 ',
        acute.get_colored_name(),
        '，所以想要借由约会的藉口，来向',
        acute.sex,
        '告白。',
      ]);
      await era.printAndWait('——除此以外，还能有其他的原因吗？');
      await era.printAndWait([
        '是啊，',
        you.get_colored_name(),
        ' 喜欢 ',
        acute.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '这不是什么忌讳莫深的秘密，而只是在一次次悸动中所认清的事实而已。',
      );
      await era.printAndWait(
        '无论多么困难都愿意去努力克服而在训练场上留下的汗水。',
      );
      await era.printAndWait(
        '无论多么疲倦或疲惫都愿意静下心来用微笑来应对的温和。',
      );
      await era.printAndWait('无数个共同度过的昼与夜，');
      await era.printAndWait('无数次共同品尝的嘎吱干。');
      await era.printAndWait(
        '明明同处于这片浩然的天空之下，可却从没有眺望星空的余裕。',
      );
      await era.printAndWait(
        '因为指尖间的接触、或许本就是奇迹所铸造而成的梦境。',
      );
      await era.printAndWait('天空忽然下起了雨，雨滴滴答在车站的顶棚上。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        acute.get_colored_name(),
        ' 坐在一起，滴答滴答，心在左面怦怦的跳。',
      ]);
      await you.say_and_wait(
        ['是啊，鼓起勇气吧，', you.actual_name, '，鼓起勇气吧。'],
        true,
      );
      await era.printAndWait([
        '就像 ',
        acute.get_colored_name(),
        ' 那样——努力、勇敢，坚韧不拔。',
      ]);
      await era.printAndWait('心在左边砰砰的跳，滴答滴答，指尖在悄悄的靠近。');
      await you.say_and_wait(
        [
          '是啊，面向',
          acute.sex,
          '吧，',
          you.actual_name,
          '，面向',
          acute.sex,
          '吧。',
        ],
        true,
      );
      await era.printAndWait([
        '滴答声中，',
        acute.get_colored_name(),
        ' 抬着头。',
      ]);
      await era.printAndWait([
        acute.sex,
        '的目光一如既往，仍是望向着不知何处的远方。',
      ]);
      await you.say_and_wait(
        ['告诉', acute.sex, '吧，告诉', acute.sex, '吧。'],
        true,
      );
      await era.printAndWait([
        '是啊，告诉',
        acute.sex,
        '吧，',
        you.actual_name,
        '。',
      ]);
      await era.printAndWait([
        '告诉 ',
        acute.get_colored_name(),
        '，自己是多么的喜欢',
        acute.sex,
        '。',
      ]);
      await era.printAndWait(
        '嘴唇微微地颤抖，吞吐的话语凝成了钻石的结晶，堵塞在咽喉的要道之处。',
      );
      await you.say_and_wait(
        ['告诉', acute.sex, '吧，告诉', acute.sex, '吧。'],
        true,
      );
      era.printButton('「我、我……我喜——」', 1);
      await era.input();
      await acute.say_and_wait('我喜欢你哦，训练员。');
      await you.say_and_wait('……唉？');
      await acute.say_and_wait('——————');
      await era.printAndWait('空气在雨滴落下的瞬间，与这一刻的时间凝固。');
      await era.printAndWait([
        '耳边回荡着 ',
        you.get_colored_name(),
        ' 本不应该听到的声音。',
      ]);
      await era.printAndWait([
        '总是凝视着前方的 ',
        acute.get_colored_name(),
        '，不知何时，',
        acute.sex,
        '已偏离了视线，望向了毫无起眼的 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('本不该这样的……本不该这样的，不是吗？');
      await era.printAndWait([
        '像 ',
        acute.get_colored_name(),
        ' 这些坚强、勇敢的',
        acute.phy_sex_title,
        '，怎么可能会……',
      ]);
      await acute.say_and_wait(['我真的喜欢你哦，', you.actual_name, ' 君。']);
      await era.printAndWait(['这一次，', acute.sex, '的声音已不再微弱。']);
      await era.printAndWait([
        '温柔却又坚毅的眼神连着那红晕的羞涩，望向了 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton('「我、我……」', 1);
      await era.input();
      await acute.say_and_wait(['不要急，', callname, '。慢慢说吧～']);
      era.printButton(`「我也——我也喜欢你，${acute.name}！」`, 1);
      await era.input();
      await era.printAndWait('————————');
      await era.printAndWait('那是一个晴朗的午后。');
      await era.printAndWait('在既不算大又算小的雨中。');
      await era.printAndWait('躲在车站小棚中避雨的二人，');
      await era.printAndWait('在悄悄得、不知不觉中，互相靠近……');
      await era.printAndWait('……………………');
      await era.printAndWait([
        '【与 ',
        acute.get_colored_name(),
        ' 成为恋人关系了！】',
      ]);
    } else {
      await era.printAndWait([
        '与自己担当的',
        acute.uma_sex_title,
        '约会还需要理由吗？',
      ]);
      await era.printAndWait([
        '想要跟 ',
        acute.get_colored_name(),
        ' 在一起，跟 ',
        acute.get_colored_name(),
        ' 在一起很开心，理由就是这么简单而已。',
      ]);
      await era.printAndWait('摇了摇头，将自己多余的烦恼一扫而空。');
      await era.printAndWait('………………');
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 在车站前度过了一段开心的时光。',
      ]);
    }
    return ret;
  },
  async '89-before'(acute, you) {
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 的相爱，真的是一件十分幸福的事。',
    ]);
    await era.printAndWait([
      '但是，',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 之间每一次的相拥，都要在没人发现的地方。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 总觉得这样偷偷摸摸的行为，有些说不上来的不好。',
    ]);
    await era.printAndWait([
      '虽然再将这些焦虑跟 ',
      acute.get_colored_name(),
      ' 说了后，',
      acute.sex,
      '总是微笑地说',
    ]);
    await acute.used_to_say_and_wait(
      '不要紧，即便是现在这样，自己就已经很幸福了。',
    );
    await era.printAndWait([
      '但，这样如同偷情般藏藏掖掖的行为，真的对 ',
      acute.get_colored_name(),
      ' 公平吗？',
    ]);
    await era.printAndWait([
      '……或许，',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 可以公开这段恋情。',
    ]);
    await era.printAndWait(
      '在特雷森的大家面前公开这段恋情，恐怕需要【如同钢铁一般的意志力】吧。',
    );
    await era.printAndWait('但如果心中已不再迷茫，决定好迈出这一步的话——');
    await era.printAndWait([
      '就与 ',
      acute.get_colored_name(),
      ' 一同在中庭里约会吧。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} tama 玉藻十字
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async 89(acute, tama, you, callname) {
    tama.name = `某关西${tama.uma_sex_title}`;
    await era.printAndWait([
      '人来人往的中庭，想要在这里忍受其他',
      acute.uma_sex_title,
      '的视线进行约会，恐怕需要很强大的毅力……',
    ]);
    await acute.say_and_wait('啊……要在这里约会吗？我不介意的哦～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 似乎并不在乎周围',
      acute.uma_sex_title,
      '的目光……',
    ]);
    await era.printAndWait([
      '但没有勇气真正踏出那一步的其实是 ',
      you.get_colored_name(),
      ' 自己。',
    ]);
    await era.printAndWait([
      '——感受到了来自 ',
      acute.get_colored_name(),
      ' 期待的目光。',
    ]);
    await era.printAndWait('………………');
    await you.say_and_wait('你啊，还要当多久的懦夫呢？');
    await era.printAndWait('恍惚间，心中闪过了这样一句话。');
    await era.printAndWait('一瞬之间，身体闪过了一丝冲动——');
    await acute.say_and_wait(['怎么了？', callname, '……唔！']);
    await era.printAndWait([
      '还没等 ',
      acute.get_colored_name(),
      ' 发问，',
      you.get_colored_name(),
      ' 便已抱住了 ',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait('嘴唇紧贴着另一张嘴唇，香甜的气息沁如心脾。');
    await era.printAndWait(
      '一方强硬，一方犹豫，随后被叩入门关。随后是激烈的交换——',
    );
    await era.printAndWait('…………');
    await you.say_as_passer_by_and_wait(
      '空间转发者',
      '啊，快看快看，有人在中庭接吻耶。',
    );
    await you.say_as_passer_by_and_wait(
      '小红马用户',
      '呜哇，尊嘟假嘟！？快拍下来，发个博先～',
    );
    await tama.say_and_wait([
      '好肉麻的两公婆，还是我校的',
      acute.uma_sex_title,
      '，这下便样衰了。',
    ]);
    await era.printAndWait('…………');
    await acute.say_and_wait([
      '唔～～～哈……',
      callname.substring(0, 1),
      '，',
      callname,
      '——',
    ]);
    await era.printAndWait([
      '怀中的 ',
      acute.get_colored_name(),
      '，脸颊羞红，眼神迷离地看着自己。',
    ]);
    await era.printAndWait('不似拒绝，却也不像同意，倒似欲拒还迎……');
    await era.printAndWait(
      '自己为什么会做这种事？自己如此大胆会有怎样的后果呢？',
    );
    await era.printAndWait('这些事情怎么样都好。');
    await era.printAndWait('至少现在……现在。');
    await era.printAndWait('现在很幸福，这样就足够了吧。');
  },
  async '99-before'(acute, you) {
    await era.printAndWait('【劝君莫惜金缕衣，劝君需惜少年时，】');
    await era.printAndWait('【花开堪折只需折，莫待无花空折枝。】');
    await era.printAndWait('………………');
    await era.printAndWait([
      '与 ',
      acute.get_colored_name(),
      ' 的相爱，已有许多时日。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 每日在同一时间起床、同一时间进食、同一时间训练、同一时间比赛。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 总是相濡以沫，',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 总是形影不离。',
    ]);
    await era.printAndWait([
      '毫无疑问，',
      you.get_colored_name(),
      ' 爱着 ',
      acute.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' 想，',
      acute.get_colored_name(),
      ' 也爱着 ',
      you.get_colored_name(),
      '。',
    ]);
    await era.printAndWait([
      '正因如此，',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 才能共同的度过训练与生活中的点点滴滴。',
    ]);
    await era.printAndWait('——但是，这样的生活，真的能一直持续下去吗？');
    await era.printAndWait('………………');
    await era.printAndWait('年与时驰，意与日去，');
    await era.printAndWait('三年的光阴，总是在悄悄地流逝。');
    await era.printAndWait([
      '纵使是仅有三年的黄粱美梦，与 ',
      acute.get_colored_name(),
      ' 相爱的日子，也是 ',
      you.get_colored_name(),
      ' 这一生最幸福的时光。',
    ]);
    await era.printAndWait(
      '但，若不想放手这份幸福、想要继续燃烧着炽热的灰色爱焰直至生命的终结。',
    );
    await era.printAndWait([
      '——那么，便与 ',
      acute.get_colored_name(),
      '，立下【归来的约定】与【再回的誓言】吧。',
    ]);
    await era.printAndWait([
      '当准备完全后，',
      acute.sex,
      '便会在天台等待着 ',
      you.get_colored_name(),
      ' 的到来。',
    ]);
  },
  async '99-notify'(acute, you) {
    await era.printAndWait([
      '当准备完全后，',
      acute.sex,
      '便会在天台等待着 ',
      you.get_colored_name(),
      ' 的到来。',
    ]);
  },
  /**
   * @param {CharaTalk} acute 奇锐骏
   * @param {CharaTalk} you 玩家
   * @param {string} callname 奇锐骏对玩家的称呼
   */
  async 99(acute, you, callname) {
    await era.printAndWait('天边一声轰鸣，铁鸟留下了橘红色的飞行机云。');
    await era.printAndWait(
      '黄昏那耀眼的光辉即将落幕，而那之后是漆黑而幽明的月夜。',
    );
    await era.printAndWait([
      '天台上，',
      acute.get_colored_name(),
      ' 背对着 ',
      you.get_colored_name(),
      '，仰望着天边的浮云。',
    ]);
    await era.printAndWait([
      '正如 ',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 的初次见面、正如 ',
      acute.get_colored_name(),
      ' 在天台上捡到了丧家的 ',
      you.get_colored_name(),
      ' 那时一样，这一次的天台上，也仅有 ',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 二人。',
    ]);
    await era.printAndWait([
      '——而这一次，',
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 站着的位置正相反。',
    ]);
    await era.printAndWait([
      '悄悄地关上天台的大门、沉住心头那股躁动的气息、',
      you.get_colored_name(),
      ' 缓步的靠近。',
    ]);
    await era.printAndWait([
      '站在',
      acute.sex,
      '的身后、随',
      acute.sex,
      '一同仰望着天边橘红色的浮云。',
    ]);
    await era.printAndWait(['然后、仿着', acute.sex, '的语气——']);
    era.printButton('「哎呀呀」', 1);
    await era.input();
    era.printButton('「总是叹气的话呢，福气可是会跑出去的——」', 1);
    await era.input();
    await acute.say_and_wait('——');
    await era.printAndWait('担心的语句，飘散在天空、揉碎在了风中。');
    await era.printAndWait([
      '就像 ',
      you.get_colored_name(),
      ' 所认识的 ',
      acute.get_colored_name(),
      '，',
      acute.sex,
      '没有多余的惊情。',
    ]);
    await era.printAndWait([
      '只见',
      acute.sex,
      '缓慢的转过身，踮起脚尖，平静地的神色之下，是深色眼眸中所蕴藏着晶珠。',
    ]);
    await acute.say_and_wait(['你来了呢，', callname, '。']);
    era.printButton(`「我来了哦，奇锐骏。」`, 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' 和 ',
      acute.get_colored_name(),
      ' 相互得问候，平静本身便已蕴含着太多。',
    ]);
    await era.printAndWait([
      '可',
      acute.sex,
      '并没有张开双手，相应得 ',
      you.get_colored_name(),
      ' 也没有。',
    ]);
    await era.printAndWait(
      '毕竟这并非是单纯感激地拥抱、而是炽热至心念占有的私欲。',
    );
    await era.printAndWait(
      '脚尖踮起、洁净得鼻梁上下摆弄着下颚渣须，樱桃的红印，吸允于赤白的脖颈。',
    );
    await era.printAndWait([
      '摇曳的双耳，滑弄于 ',
      you.get_colored_name(),
      ' 的嘴边。',
    ]);
    await era.printAndWait('粉红的尤物蠕动着、渴望着对深灰色的吞咽——');
  },
  async '99-end'(acute, callname) {
    await era.printAndWait([
      '炽热的液体交换后，不顾仍在喷涌的秘泉，',
      acute.get_colored_name(),
      ' 便穿上了包裹其下的白布。',
    ]);
    await era.printAndWait('月色的光辉下，下腹前的刻印闪烁着粉红色的微光。');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 说，这是特雷森最近的潮流。在身上持有这刻印的',
      acute.uma_sex_title,
      '，便会独属于这刻印的主人。',
    ]);
    await era.printAndWait('而现在，刻印只差最后一步。');
    await acute.say_and_wait(['……呐，', callname, '？']);
    await era.printAndWait(
      '叼着自己的长裙，露出白净的腹肉，含糊不清得述说欲望的诉求。',
    );
    await era.printAndWait(
      '敞开的胸脯展露着丰硕的红果，双手捧起的银圈如呈上的宝物。',
    );
    await era.printAndWait(
      '如同求饶着野禽，又如同认主的家兽。眼角旁的银珠止不住内心的兴动。',
    );
    await era.printAndWait([
      '接过那精致的银圈，用自己的双手，于 ',
      acute.get_colored_name(),
      ' 的脖颈上环首。',
    ]);
    await era.printAndWait([
      '随后，心满意足的 ',
      acute.get_colored_name(),
      '、微笑地蹲下身子。',
    ]);
    await era.printAndWait('伸出赤舌，侍奉那凶恶的主兽。');
  },
};
