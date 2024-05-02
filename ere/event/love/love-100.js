const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');

async function love_49_week_end(chara_talk) {
  await era.printAndWait('…………');
  await era.printAndWait('最近，不知为何，');
  await era.printAndWait('奇锐骏似乎经常坐在中庭的枯树洞里。');
  await era.printAndWait(
    `前几天偷偷的跟了去，在远处眺望着，发现${chara_talk.sex}似乎在枯树洞中思考些什么。`,
  );
  await era.printAndWait('…………');
  await era.printAndWait(
    '如果想要进一步了解奇锐骏的话，就去中庭的枯树洞看看呢？',
  );
  era.println();
  return true;
}

async function love_49(chara_talk) {
  await era.printAndWait('训练的闲余，一个人来到了中庭。');
  await era.printAndWait(
    '看到了奇锐骏偶尔会待在里面的树洞，不由自主得走了过去。',
  );
  await era.printAndWait('躬下身子，凑近了看,却感觉树洞里的空间意外的狭小。');
  await era.printAndWait(
    '说不清事树梢还是树根的木端显露着黑色的印记，突兀不平的表面与隐约可见的黑蚁在其间穿梭。想也知道，坐在里面的感受恐怕并不会好受。',
  );
  await era.printAndWait('那为什么坐在里面的奇锐骏，却能那般得怡然自得呢？');
  await era.printAndWait('左思右想——却是横竖想不通。');
  await era.printAndWait('“哈”得一声叹了口气，正想起身——');
  await era.printAndWait('——————“桦！？”');
  await era.printAndWait(
    '突然间，双腿好似被一股强大的外力所推动。眼前的天地随之上下倒错。自己的身体被迫一个跟斗“翻”进了树洞之中——',
  );
  await era.printAndWait('发生什么了！？');
  await era.printAndWait(
    '刚想发出这般疑惑的尖叫，却见颠倒的天空之中，浮现出了一个自己再熟悉不过的脸庞。',
  );
  era.printButton('「奇锐骏！」', 1);
  await era.input();
  await era.printAndWait(
    '本想发出的疑惑，就在看着露出了一副如孩子般兴奋表情的奇锐骏时，转变为了惊讶。',
  );
  await era.printAndWait('可随后，这份惊讶便又转变为了一个新的疑惑。');
  era.printButton('「奇锐骏？」', 1);
  await era.input();
  await era.printAndWait('这是第二声呼喊。');
  await era.printAndWait(
    '有别于最初的茫然，与第一声的惊讶,这一声，更多的是疑惑。',
  );
  await era.printAndWait(
    `此前，${sys_get_callname(
      0,
      0,
    )}从未见过这样如孩子般露出了兴奋表情的奇锐骏。`,
  );
  await era.printAndWait('而如今却突然见到了。');
  await era.printAndWait(
    `这不由得令${sys_get_callname(0, 0)}惊喜，乃至于产生了与之更大的惊异——`,
  );
  await era.printAndWait(
    `眼前的如孩童般欣喜的奇锐骏，真的是${sys_get_callname(
      0,
      0,
    )}所认识的那个始终温和的奇锐骏吗？`,
  );
  await era.printAndWait(
    `而眼前的奇锐骏，却又好似听到了${sys_get_callname(
      0,
      0,
    )}心中这般的疑惑。在听到${sys_get_callname(0, 0)}的第二声呼喊后，${
      chara_talk.sex
    }的表情便也随之一转，拭去了最初的欣喜，不知为何得愣在了原地。`,
  );
  await era.printAndWait(
    `${chara_talk.sex}愣住了，${sys_get_callname(
      0,
      0,
    )}也不知所措的愣住了，就这样，${sys_get_callname(0, 0)}和${
      chara_talk.name
    }一同愣在了原地。`,
  );
  await era.printAndWait(
    `${sys_get_callname(0, 0)}被抓着脚颠倒着卧于树洞之内，而${
      chara_talk.sex
    }则抓着${sys_get_callname(0, 0)}的脚全身盖在树洞之上。`,
  );
  await era.printAndWait(
    `${chara_talk.sex}低着头，透过遮挡正中的硕果望着${sys_get_callname(
      0,
      0,
    )}。`,
  );
  await era.printAndWait(
    `${sys_get_callname(0, 0)}抬着头，尽力透过正中的硕果望着${
      chara_talk.sex
    }。`,
  );
  await era.printAndWait('……');
  await era.printAndWait(
    '好一会儿后，似乎终于意识到了什么的奇锐骏，脸红到了耳根。',
  );
  await era.printAndWait('………');
  await era.printAndWait(
    '终于被从奇锐骏的摔跤技释放了后，看到了奇锐骏惊慌失措的道歉。',
  );
  await era.printAndWait(
    '听来，似乎是奇锐骏一如既往的来到中庭打算坐在枯树洞里休息时，无意间看到了自己躬身于树洞前的背影。',
  );
  await era.printAndWait(
    `随后，不知为何“兴趣大发”。便托起了脚，把${sys_get_callname(
      0,
      0,
    )}强压在了树洞之中。`,
  );
  await era.printAndWait('……');
  await chara_talk.say_and_wait('……');
  await era.printAndWait(
    '二人无言，一时间不知该说什么，却看到奇锐骏红透的脸颊仍未消退。眼神高速得闪烁着，似乎正试图隐藏着什么不可告人的心思。',
  );
  await era.printAndWait('……是什么心思呢？');
  await era.printAndWait(
    `老实说，${sys_get_callname(
      0,
      0,
    )}说不太出口。奇锐骏似乎也一样，羞涩得不敢说出口。`,
  );
  await era.printAndWait(
    `${sys_get_callname(0, 0)}们默契得不去看向彼此的脸，一同转过头。`,
  );
  await era.printAndWait(
    '望着一旁最初以为狭小的树洞，心中即感慨着，又下意识想要打破这尴尬的沉默般，开了口——',
  );
  await era.printAndWait('……真大呢。');
  await chara_talk.say_and_wait('……嗯——');
  await era.printAndWait('互相间也不知达成了默契得，默契地点了点头——');
  sys_change_motivation(100, 1);
  const to_print = sys_change_attr_and_print(100, '体力', 100);
  if (to_print) {
    era.println();
    await era.printAndWait([
      chara_talk.get_colored_name(),
      ' 的 ',
      ...to_print,
    ]);
  }
  const to_print1 = sys_change_attr_and_print(100, '精力', 100);
  if (to_print1) {
    era.println();
    await era.printAndWait([
      chara_talk.get_colored_name(),
      ' 的 ',
      ...to_print1,
    ]);
  }
  await sys_love_uma_in_event(100);
  return false;
}

async function love_74_week_end(chara_talk) {
  await era.printAndWait('…………');
  await era.printAndWait('最近，与奇锐骏待在一起的时间越来越长了。');
  await era.printAndWait(`即便分开，脑海里也总是想着${chara_talk.sex}的事情。`);
  await era.printAndWait('…………');
  await era.printAndWait('或许，与奇锐骏的关系还可以再进一步？');
  await era.printAndWait('……如果下定了决心的话，就邀请奇锐骏前往车站约会吧。');
  era.println();
  return true;
}

async function love_74(chara_talk) {
  const me = get_chara_talk(0);
  await era.printAndWait('与奇锐骏一同在车站前进行着约会……');
  await chara_talk.say_and_wait(
    `那个……${me.actual_name}君。为什么一定要到车站来呢？`,
  );
  await era.printAndWait('嗯……好问题。');
  await era.printAndWait(
    `毕竟从${sys_get_callname(
      0,
      0,
    )}的角度来说的话，能够跟奇锐骏一同两个人私自外出，不论去哪都可以算做是约会了吧？`,
  );
  await era.printAndWait('可即便如此，却只有来到车站，才能够算作是约会？');
  await era.printAndWait('如果这不是神明大人的某种恶趣味的话，');
  await era.printAndWait('那么，也就是说……');
  era.println();

  era.printButton('「向奇锐骏告白。（进行升级）」', 1);
  era.printButton('「……或许是自己想多了吧。（取消升级）」', 2);
  const ret = await era.input();
  if (ret === 1) {
    await era.printAndWait('……之所以特意强调是“约会”的原因，还需要问吗？');
    await era.printAndWait(
      `${sys_get_callname(0, 0)}喜欢奇锐骏，所以想要借由约会的藉口，来向${
        chara_talk.sex
      }告白。`,
    );
    await era.printAndWait('——除此以外，还能有其他的原因吗？');
    await era.printAndWait(`是啊，${sys_get_callname(0, 0)}喜欢奇锐骏。`);
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
    await era.printAndWait(
      `${sys_get_callname(0, 0)}和${
        chara_talk.name
      }坐在一起，滴答滴答，心在左面怦怦的跳。`,
    );
    await me.say_and_wait(
      `——是啊，鼓起勇气吧，${me.actual_name}，鼓起勇气吧。`,
      1,
    );
    await era.printAndWait('就像奇锐骏那样——努力、勇敢，坚韧不拔。');
    await era.printAndWait('心在左边砰砰的跳，滴答滴答，指尖在悄悄的靠近。');
    await me.say_and_wait(
      `——是啊，面向${chara_talk.sex}吧，${me.actual_name}，面向${chara_talk.sex}吧。`,
      1,
    );
    await era.printAndWait('滴答声中，奇锐骏抬着头。');
    await era.printAndWait(
      `${chara_talk.sex}的目光一如既往，仍是望向着不知何处的远方。`,
    );
    await me.say_and_wait(
      `——告诉${chara_talk.sex}吧，告诉${chara_talk.sex}吧。`,
      1,
    );
    await era.printAndWait(
      `是啊，告诉${chara_talk.sex}吧，${me.actual_name}。`,
    );
    await era.printAndWait(`告诉奇锐骏，自己是多么的喜欢${chara_talk.sex}。`);
    await era.printAndWait(
      '嘴唇微微地颤抖，吞吐的话语凝成了钻石的结晶，堵塞在咽喉的要道之处。',
    );
    await me.say_and_wait(
      `——告诉${chara_talk.sex}吧，告诉${chara_talk.sex}吧。`,
      1,
    );
    era.printButton('「我、我……我喜——」', 1);
    await era.input();
    await chara_talk.say_and_wait('我喜欢你哦，训练员。');
    await era.printAndWait('……唉？');
    await chara_talk.say_and_wait('——————');
    await era.printAndWait('空气在雨滴落下的瞬间，与这一刻的时间凝固。');
    await era.printAndWait(
      `耳边回荡着${sys_get_callname(0, 0)}本不应该听到的声音。`,
    );
    await era.printAndWait(
      `总是凝视着前方的奇锐骏，不知何时，${
        chara_talk.sex
      }已偏离了视线，望向了毫无起眼的${sys_get_callname(0, 0)}。`,
    );
    await era.printAndWait('本不该这样的……本不该这样的，不是吗？');
    await era.printAndWait(
      `像奇锐骏这些坚强、勇敢的${chara_talk.get_phy_sex_title()}，怎么可能会……`,
    );
    await chara_talk.say_and_wait(`我真的喜欢你哦，${me.actual_name}君。`);
    await era.printAndWait(`这一次，${chara_talk.sex}的声音已不再微弱。`);
    await era.printAndWait(
      `温柔却又坚毅的眼神连着那红晕的羞涩，望向了${sys_get_callname(0, 0)}。`,
    );
    era.printButton('「我、我……」', 1);
    await era.input();
    await chara_talk.say_and_wait(`不要急，小${me.actual_name}。慢慢说吧~`);
    era.printButton('「我也——我也喜欢你，奇锐骏！」', 1);
    await era.input();
    await era.printAndWait('————————');
    await era.printAndWait('那是一个晴朗的午后。');
    await era.printAndWait('在既不算大又算小的雨中。');
    await era.printAndWait('躲在车站小棚中避雨的二人，');
    await era.printAndWait('在悄悄得、不知不觉中，互相靠近……');
    await era.printAndWait('……………………');
    era.println();
    await era.printAndWait('【与奇锐骏成为恋人关系了！】');
    await sys_love_uma_in_event(100);
  } else {
    await era.printAndWait(
      `与自己担当的${chara_talk.get_uma_sex_title()}约会还需要理由吗？`,
    );
    await era.printAndWait(
      '想要跟奇锐骏在一起，跟奇锐骏在一起很开心，理由就是这么简单而已。',
    );
    await era.printAndWait('摇了摇头，将自己多余的烦恼一扫而空。');
    await era.printAndWait('………………');
    await era.printAndWait('与奇锐骏在车站前度过了一段开心的时光。');
    era.set('cflag:100:爱慕暂拒', 74);
  }
  return false;
}

async function love_89_week_end(chara_talk) {
  await era.printAndWait('…………');
  await era.printAndWait('与奇锐骏的相爱，真的是一件十分幸福的事。');
  await era.printAndWait(
    `但是，${sys_get_callname(0, 0)}和${
      chara_talk.name
    }之间每一次的相拥，都要在没人发现的地方。`,
  );
  await era.printAndWait(
    `${sys_get_callname(0, 0)}总觉得这样偷偷摸摸的行为，有些说不上来的不好。`,
  );
  await era.printAndWait(
    `虽然再将这些焦虑跟奇锐骏说了后，${chara_talk.sex}总是微笑的说：——`,
  );
  await era.printAndWait('「不要紧，即便是现在这样，自己就已经很幸福了。」');
  await era.printAndWait(
    '但，这样如同偷情般藏藏掖掖的行为，真的对奇锐骏公平吗？',
  );
  await era.printAndWait(
    `……或许，${sys_get_callname(0, 0)}和${chara_talk.name}可以公开这段恋情。`,
  );
  await era.printAndWait(
    '在特雷森的大家面前公开这段恋情，恐怕需要【如同钢铁一般的意志力】吧。',
  );
  await era.printAndWait('但如果心中已不再迷茫，决定好迈出这一步的话——');
  await era.printAndWait('就与奇锐骏一同在中庭里约会吧。');
  era.println();
  return true;
}

async function love_89_1(chara_talk) {
  const callname = sys_get_callname(100, 0);
  await era.printAndWait(
    `人来人往的中庭，想要在这里忍受其他${chara_talk.get_uma_sex_title()}的视线进行约会，恐怕需要很强大的毅力……`,
  );
  await chara_talk.say_and_wait('啊……要在这里约会吗？我不介意的哦~');
  await era.printAndWait(
    `奇锐骏似乎并不在乎周围${chara_talk.get_uma_sex_title()}的目光……但没有勇气真正踏出那一步的其实是自己。`,
  );
  await era.printAndWait('——感受到了来自奇锐骏期待的目光。');
  await era.printAndWait('………………');
  await era.printAndWait('【你啊，还要当多久的懦夫呢？】');
  await era.printAndWait('恍惚间，心中闪过了这样一句话。');
  await era.printAndWait('一瞬之间，身体闪过了一丝冲动——');
  await chara_talk.say_and_wait(`怎么了？${callname}……唔！`);
  await era.printAndWait('还没等奇锐骏发问，自己便已抱住了奇锐骏。');
  await era.printAndWait('嘴唇紧贴着另一张嘴唇，香甜的气息沁如心脾。');
  await era.printAndWait(
    '一方强硬，一方犹豫，随后被叩入门关。随后是激烈的交换——',
  );
  await era.printAndWait('…………');
  await era.printAndWait('空间转发者：「啊，快看快看，有人在中庭接吻耶。」');
  await era.printAndWait(
    '小红马用户：「呜哇，尊嘟假嘟！？快拍下来，发个博先~」',
  );
  await era.printAndWait(
    `某关西${chara_talk.get_uma_sex_title()}：「好肉麻的两公婆，还是我校的${chara_talk.get_uma_sex_title()}，这样衰了。」`,
  );
  await era.printAndWait('…………');
  await chara_talk.say_and_wait(`唔~~~哈……${callname[0]}，${callname}——`);
  await era.printAndWait('怀中的奇锐骏，脸颊羞红，眼神迷离得看着自己。');
  await era.printAndWait('不似拒绝，却也不像同意，倒似欲拒还迎……');
  await era.printAndWait(
    '自己为什么会做这种事？自己如此大胆会有怎样的后果呢？',
  );
  await era.printAndWait('这些事情怎么样都好。');
  await era.printAndWait('至少现在……现在。');
  await era.printAndWait('现在很幸福，这样就足够了吧。');
  era.println();
  era.set(`talent:100:钢之意志`, 1);
  get_attr_and_print_in_event(100, [0, 0, 0, 10, 0], 0);
  //todo 奇锐骏M属性上升
  await sys_love_uma_in_event(100);
  return false;
}

async function love_89_2(chara_talk) {
  const me = get_chara_talk(0);
  await era.printAndWait(
    `人来人往的中庭，想要在这里忍受其他${chara_talk.get_uma_sex_title()}的视线进行约会，恐怕需要很强大的毅力……`,
  );
  await chara_talk.say_and_wait('啊……要在这里约会吗？我不介意的哦~');
  await era.printAndWait(
    `奇锐骏似乎并不在乎周围${chara_talk.get_uma_sex_title()}的目光……但没有勇气真正踏出那一步的其实是自己。`,
  );
  await era.printAndWait('——感受到了来自奇锐骏期待的目光。');
  await era.printAndWait('………………');
  await era.printAndWait('不行，在中庭约会什么的，实在是太羞耻了。');
  await era.printAndWait(
    '无论如何，自己都不可能在人群之中，在众人的视线下，做出这种羞耻的事情。',
  );
  await era.printAndWait(
    '虽然有背于奇锐骏的期待，但自己果然还是做不到这种事情。',
  );
  await era.printAndWait('摇了摇头，握着奇锐骏的手，正想离开这里——');
  era.printButton('「奇锐……唔！」', 1);
  await era.input();
  await era.printAndWait('还没来得及开口，自己便已被逼近。');
  await era.printAndWait('按着肩膀、踮起脚尖，逼近至鼻尖能互相接触的距离。');
  await era.printAndWait(
    `一双坚毅而温和的眼睛，逼近了懦弱的${sys_get_callname(0, 0)}。`,
  );
  await era.printAndWait('嘴唇紧贴着另一张嘴唇，香甜的气息沁如心脾。');
  await era.printAndWait('强硬却又并非强迫，犹豫之际，却已被叩入门关——');
  await era.printAndWait('…………');
  await era.printAndWait('空间转发者：「啊，快看快看，有人在中庭接吻耶。」');
  await era.printAndWait(
    '小红马用户：「呜哇，尊嘟假嘟！？快拍下来，发个博先~」',
  );
  await era.printAndWait(
    `某关西${chara_talk.get_uma_sex_title()}：「好肉麻的两公婆，还是我校的${chara_talk.get_uma_sex_title()}，这样衰了。」`,
  );
  await era.printAndWait('…………');
  era.printButton('「唔——哈，奇、奇锐骏……你这是——」', 1);
  await era.input();
  await chara_talk.say_and_wait('嗯——');
  await era.printAndWait(
    '奇锐骏应了，却没有答。只是望着自己，平静地望着自己。',
  );
  await era.printAndWait(
    `垫着的脚尖没有落下，紧握得双手环在${sys_get_callname(
      0,
      0,
    )}的颈后，小巧的身躯形似被吊起一般——`,
  );
  await chara_talk.say_and_wait(`你欠我一次哦？${me.actual_name}……`);
  await era.printAndWait('眼前，奇锐骏露出了狡猾的笑容。');
  await era.printAndWait('…………');
  await era.printAndWait('此后，每每念及这次经历。');
  await era.printAndWait('身体总能涌现出一种，好似使不完的力量。');
  era.println();
  era.set(`talent:0:钢之意志`, 1);
  if (era.set(`talent:100:钢之意志`) === 0) era.set(`talent:100:钢之意志`, 1);
  await sys_love_uma_in_event(100);
  return false;
}

async function love_89_3(chara_talk) {
  await era.printAndWait(
    `人来人往的中庭，想要在这里忍受其他${chara_talk.get_uma_sex_title()}的视线进行约会，恐怕需要很强大的毅力……`,
  );
  await chara_talk.say_and_wait('啊……要在这里约会吗？我不介意的哦~');
  await era.printAndWait(
    `奇锐骏似乎并不在乎周围${chara_talk.get_uma_sex_title()}的目光……但没有勇气真正踏出那一步的其实是自己。`,
  );
  await era.printAndWait('——感受到了来自奇锐骏期待的目光。');
  await era.printAndWait('………………');
  await era.printAndWait('在人来人往的中庭，两个相爱的人彼此之间互相索取。');
  await era.printAndWait(
    '不再在乎周围的人的眼神，激烈的唾液交换着彼此相爱的契约。',
  );
  await chara_talk.say_and_wait('……♥');
  await era.printAndWait(
    '小巧的双手环抱着你的头，闪烁得桃红色目光，无论白日或是黑夜，都注释着你一个人。',
  );
  await era.printAndWait(
    '而你，同样还以最热烈的爱，最激情的吻——无论白天还是黑夜，彼此之间紧紧相拥——',
  );
  await era.printAndWait('………………');
  await era.printAndWait('空间转发者：「他们亲了多久？」');
  await era.printAndWait('小红马用户：「不知道……应该有两小时了吧？」');
  await era.printAndWait(
    `某关西${chara_talk.get_uma_sex_title()}：「嗨，破盖仔，天窦黑哇，嘛在这啵。咩哇，真噶蒜中庭开趴哈？」`,
  );
  await era.printAndWait('………………');
  await era.printAndWait('无论日夜轮转，春夏秋冬。');
  await era.printAndWait(`此后的人生，皆不在与${chara_talk.sex}分离。`);
  era.println();
  get_attr_and_print_in_event(100, [0, 10, 10, 10, 0], 50);
  get_attr_and_print_in_event(0, [0, 10, 10, 10, 0], 50);
  sys_like_chara(100, 0, 20);
  await sys_love_uma_in_event(100);
  return false;
}

async function love_99_week_end(chara_talk) {
  await era.printAndWait('………………');
  await era.printAndWait('【劝君莫惜金缕衣，劝君需惜少年时，】');
  await era.printAndWait('【花开堪折只需折，莫待无花空折枝。】');
  await era.printAndWait('………………');
  await era.printAndWait('与奇锐骏的相爱，已有许多时日。');
  await era.printAndWait(
    `${sys_get_callname(0, 0)}和${
      chara_talk.name
    }每日在同一时间起床、同一时间进食、同一时间训练、同一时间比赛。`,
  );
  await era.printAndWait(
    `${sys_get_callname(0, 0)}和${
      chara_talk.name
    }总是相濡以沫，${sys_get_callname(0, 0)}和${chara_talk.name}总是形影不离。`,
  );
  await era.printAndWait(`毫无疑问，${sys_get_callname(0, 0)}爱着奇锐骏。`);
  await era.printAndWait(
    `${sys_get_callname(0, 0)}想，奇锐骏也爱着${sys_get_callname(0, 0)}。`,
  );
  await era.printAndWait(
    `正因如此，${sys_get_callname(0, 0)}和${
      chara_talk.name
    }才能共同的度过训练与生活中的点点滴滴。`,
  );
  await era.printAndWait('——但是，这样的生活，真的能一直持续下去吗？');
  await era.printAndWait('………………');
  await era.printAndWait('年与时驰，意与日去，');
  await era.printAndWait('三年的光阴，总是在悄悄地流逝。');
  await era.printAndWait(
    `纵使是仅有三年的黄粱美梦，与奇锐骏相爱的日子，也是${sys_get_callname(
      0,
      0,
    )}这一生最幸福的时光。`,
  );
  await era.printAndWait(
    '但，若不想放手这份幸福、想要继续燃烧着炽热的灰色爱焰直至生命的终结。',
  );
  await era.printAndWait(
    '——那么，便与奇锐骏，立下【归来的约定】与【再回的誓言】吧。',
  );
  await era.printAndWait(
    `当准备完全后，${chara_talk.sex}便会在天台等待着你的到来。`,
  );
  era.println();
  return true;
}

async function love_99(chara_talk) {
  const callname = sys_get_callname(100, 0);
  await era.printAndWait('…………');
  await era.printAndWait('天边一声轰鸣，铁鸟留下了橘红色的飞行机云。');
  await era.printAndWait(
    '黄昏那耀眼的光辉即将落幕，而那之后是漆黑而幽明的月夜。',
  );
  await era.printAndWait(
    `天台上，奇锐骏背对着${sys_get_callname(0, 0)}，仰望着天边的浮云。`,
  );
  await era.printAndWait(
    `正如${sys_get_callname(0, 0)}和${
      chara_talk.name
    }的初次见面、正如奇锐骏在天台上捡到了丧家的${sys_get_callname(
      0,
      0,
    )}那时一样，这一次的天台上，也仅有${sys_get_callname(0, 0)}和${
      chara_talk.name
    }二人。`,
  );
  await era.printAndWait(
    `——而这一次，${sys_get_callname(0, 0)}和${
      chara_talk.name
    }站着的位置正相反。`,
  );
  await era.printAndWait(
    `悄悄地关上天台的大门、沉住心头那股躁动的气息、${sys_get_callname(
      0,
      0,
    )}缓步的靠近。`,
  );
  await era.printAndWait(
    `站在${chara_talk.sex}的身后、随${chara_talk.sex}一同仰望着天边橘红色的浮云。`,
  );
  await era.printAndWait(`然后、仿着${chara_talk.sex}的语气——`);
  era.printButton('「哎呀呀」', 1);
  await era.input();
  era.printButton('「总是叹气的话呢，福气可是会跑出去的——」', 1);
  await era.input();
  await chara_talk.say_and_wait('——');
  await era.printAndWait('担心的语句，飘散在天空、揉碎在了风中。');
  await era.printAndWait(
    `就像${sys_get_callname(0, 0)}所认识的奇锐骏，${
      chara_talk.sex
    }没有多余的惊情。`,
  );
  await era.printAndWait(
    `只见${chara_talk.sex}缓慢的转过身，踮起脚尖，平静地的神色之下，是深色眼眸中所蕴藏着晶珠。`,
  );
  await chara_talk.say_and_wait(`你来了呢，${callname}。`);
  era.printButton('「我来了哦，奇锐骏。」', 1);
  await era.input();
  await era.printAndWait(
    `${sys_get_callname(0, 0)}和${
      chara_talk.name
    }相互得问候，平静本身便已蕴含着太多。`,
  );
  await era.printAndWait(
    `可${chara_talk.sex}并没有张开双手，相应得${sys_get_callname(
      0,
      0,
    )}也没有。`,
  );
  await era.printAndWait(
    '毕竟这并非是单纯感激地拥抱、而是炽热至心念占有的私欲。',
  );
  await era.printAndWait(
    '脚尖踮起、洁净得鼻梁上下摆弄着下颚渣须，樱桃的红印，吸允于赤白的脖颈。',
  );
  await era.printAndWait(`摇曳的双耳，滑弄于${sys_get_callname(0, 0)}的嘴边。`);
  await era.printAndWait('粉红的尤物蠕动着、渴望着对深灰色的吞咽——');
  quick_into_sex(100);
  await era.printAndWait(
    '炽热的液体交换后，不顾仍在喷涌的秘泉，奇锐骏便穿上了包裹其下的白布。',
  );
  await era.printAndWait('月色的光辉下，下腹前的刻印闪烁着粉红色的微光。');
  await era.printAndWait(
    `奇锐骏说，这是特雷森最近的潮流。在身上持有这刻印的${chara_talk.get_uma_sex_title()}，便会独属于这刻印的主人。`,
  );
  await era.printAndWait('而现在，刻印只差最后一步。');
  await chara_talk.say_and_wait(`……呐，${callname}？`);
  await era.printAndWait(
    '叼着自己的长裙，露出白净的腹肉，含糊不清得述说欲望的诉求。',
  );
  await era.printAndWait(
    '敞开的胸脯展露着丰硕的红果，双手捧起的银圈如呈上的宝物。',
  );
  await era.printAndWait(
    '如同求饶着野禽，又如同认主的家兽。眼角旁的银珠止不住内心的兴动。',
  );
  await era.printAndWait(
    '接过那精致的银圈，用自己的双手，于奇锐骏的脖颈上环首。',
  );
  await era.printAndWait('随后，心满意足的奇锐骏、微笑得蹲下身子。');
  await era.printAndWait('伸出赤舌，侍奉那凶恶的主兽。');
  await era.printAndWait('………………');
  era.println();
  get_attr_and_print_in_event(100, [], 66);
  get_attr_and_print_in_event(100, [], 99);
  era.add(`mark:100:同心`, 1);
  //todo 获得道具：【项圈】
  await sys_love_uma_in_event(100);
  return false;
}

/**
 * 奇锐骏 - 爱慕
 *
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
module.exports = async (hook, _, event_object) => {
  const love = era.get('love:100'),
    chara_talk = get_chara_talk(100);
  if (hook === event_hooks.week_end) {
    if (love === 49) {
      (await love_49_week_end(chara_talk)) &&
        add_event(event_hooks.school_atrium, event_object);
    } else if (love === 74) {
      (await love_74_week_end(chara_talk)) &&
        add_event(event_hooks.out_station, event_object);
    } else if (love === 89) {
      (await love_89_week_end(chara_talk)) &&
        add_event(event_hooks.school_atrium, event_object);
    } else if (love === 99) {
      (await love_99_week_end(chara_talk)) &&
        add_event(event_hooks.school_rooftop, event_object);
    }
  } else if (hook === event_hooks.out_station) {
    await love_74(chara_talk);
  } else if (hook === event_hooks.school_atrium) {
    if (love === 49) {
      await love_49(chara_talk);
    } else if (love === 89) {
      if (
        era.get(`talent:0:钢之意志`) === 1 &&
        era.get(`talent:100:钢之意志`) === 1
      ) {
        await love_89_3(chara_talk);
      } else if (era.get(`talent:0:钢之意志`) === 1) {
        await love_89_1(chara_talk);
      } else {
        await love_89_2(chara_talk);
      }
    }
  } else if (hook === event_hooks.school_rooftop) {
    await love_99(chara_talk);
  }
};
