const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');

const print_ero_page = require('#/page/page-ero');

const { common_future } = require('#/event/edu/edu-events-32/snippets');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (tachyon, me, callname, hook, event_object) => {
  if (era.get('flag:当前互动角色') !== 32) {
    add_event(hook.hook, event_object);
    return;
  }
  const coffee = get_chara_talk(25),
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32');
  if (edu_marks.plan_b) {
    await print_event_name('其他的可能性', tachyon);
  } else {
    await print_event_name('薛定鄂的超光速粒子', tachyon);
  }
  await tachyon.say_and_wait('对了，这么说起来，还有这个东西啊……');
  await tachyon.say_and_wait([
    '感觉浪费了也不好，怎么样，',
    callname,
    '？要一起去吗？',
  ]);
  era.println();
  await era.printAndWait('在偶然整理实验室时');
  await era.printAndWait([
    me.get_couple_title(),
    ' 发现了被藏在某个角落的信封袋',
  ]);
  if (love >= 75) {
    await era.printAndWait('嗯……？');
    await era.printAndWait('不知道为什么，总觉得违和感十分重');
    await era.printAndWait([
      me.get_colored_name(),
      ' 仔细观察了一下，随即发现端倪',
    ]);
    await era.printAndWait(
      '明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着',
    );
    await era.printAndWait([
      '联想到是 ',
      tachyon.get_colored_name(),
      '「找」出来的，',
      me.get_colored_name(),
      ' 大致猜到了真相',
    ]);
    era.println();
    await tachyon.say_and_wait(['嗯？', callname, '？怎么了吗？']);
    era.println();
    await era.printAndWait('……还是别说出来吧');
    await era.printAndWait([
      '不然，',
      tachyon.get_colored_name(),
      ' 恼羞成怒事小，问题在',
      tachyon.sex,
      '恼羞成怒之后晚上自己绝对不会好受',
    ]);
  }
  era.println();
  if (edu_marks.plan_b) {
    await era.printAndWait('正好，现在该忙的事也差不多忙完了');
    await era.printAndWait([
      coffee.get_colored_name(),
      ' 的URA总决赛也已经结束',
    ]);
    await era.printAndWait('有机会就一起去吧');
    era.drawLine();
    await era.printAndWait('坐了将近十多个小时的车后');
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 总算抵达了温泉旅馆',
    ]);
    era.println();
    await tachyon.say_and_wait('呼……总算到了啊');
    await tachyon.say_and_wait('我说……我们真的没走错吧');
    era.printButton('「……地图写的确实是这里没错」', 1);
    await era.input();
    await era.printAndWait(['也不免 ', me.get_couple_title(), ' 会有些迟疑']);
    await era.printAndWait(
      '此处两人所在的地方，是称之为原始森林也不为过的深山',
    );
    await era.printAndWait('这种地方，真的会有温泉吗……');
    era.println();
    await tachyon.say_and_wait('我找找……等一下，为什么这里连讯号都没有啊！？');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 掏出手机来看，深山裏确实毫无讯号',
    ]);
    await era.printAndWait('这下……可不妙了');
    era.println();
    await tachyon.say_and_wait([callname, '……要不，我们回去吧']);
    era.println();
    await era.printAndWait([
      '正当 ',
      me.get_colored_name(),
      ' 也想着打退堂鼓的时候',
    ]);
    await era.printAndWait('在拨开一层树丛，出现在眼前的赫然是一座温泉旅馆');
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 在前台登记入住后，',
      me.get_colored_name(),
      ' 便马上进了露天温泉',
    ]);
    await era.printAndWait(
      '在还未完全回暖的冬天，坐了十几个小时的车后又跋山涉水，真的把人累坏了',
    );
    await era.printAndWait(
      '但在深山也不是没有好处，整间旅馆除了自己两人外就没有其他的客人了，可以说是一人独占整间旅馆的状态',
    );
    await era.printAndWait('因此，此时泡的温泉格外使人舒畅');

    era.printButton('「……嗯？」', 1);
    await era.input();
    await era.printAndWait('这时更衣室的门帘响起了有人的声音');
    await era.printAndWait('嗯？才说完没人的，结果就有其他人来了吗？');
    era.println();
    await tachyon.say_and_wait([callname, '？你在里面吗？']);
    era.println();
    await era.printAndWait('……啊？');
    era.printButton('「速……速子！？」', 1);
    await era.input();
    await tachyon.say_and_wait('哦哦，你在啊，那么我就直接进来了');
    era.println();
    await era.printAndWait([
      '说完后，',
      tachyon.sex,
      '不等 ',
      me.get_colored_name(),
      ' 回应便推开了更衣间的门走了进来',
    ]);
    await era.printAndWait([
      '……看见',
      tachyon.sex,
      '身上裹着浴巾的模样，',
      me.get_colored_name(),
      ' 的心中不知是庆幸还是失望',
    ]);
    era.println();
    await tachyon.say_and_wait('哈哈哈！那种表情，你以为我会光着身体进来吗？');
    await tachyon.say_and_wait('再怎么说那种常识我也还是有的');
    era.println();
    await era.printAndWait([
      '虽然语气上仿佛在逗自己玩，但 ',
      me.get_colored_name(),
      ' 总觉得',
      tachyon.sex,
      '似乎有些什么话想说',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '我刚刚和柜台的老板娘聊了会……',
      tachyon.sex,
      '啊，完全不知道我是谁',
    ]);
    await tachyon.say_and_wait([
      '或者说不知道赛',
      tachyon.get_uma_sex_title(),
      ' ',
      tachyon.get_colored_name(),
      ' 是谁',
    ]);
    era.println();
    await era.printAndWait([
      '仿佛怕 ',
      me.get_colored_name(),
      ' 误会，',
      tachyon.get_colored_name(),
      ' 连忙补充了一句',
    ]);
    await era.printAndWait([
      '认不出 ',
      tachyon.get_colored_name(),
      ' 或许可以理解，毕竟不是每个人都对',
      tachyon.get_uma_sex_title(),
      '的比赛热衷到记得每一名选手的模样',
    ]);
    await era.printAndWait([
      '但不认识赛',
      tachyon.get_uma_sex_title(),
      '的 ',
      tachyon.get_colored_name(),
      ...(check_aim_race(new RaceHistory(32).get(), race_enum.prix_lat, 2, 1)
        ? [
            '……不认识拿下了世界最高峰，凯旋门赏冠军的',
            tachyon.get_uma_sex_title(),
          ]
        : []),
      '，在这个世界上确实稀奇',
    ]);
    await era.printAndWait(
      '但想想这里是如此偏远的旅馆，忽然又觉得大概也算正常了',
    );
    era.println();
    await tachyon.say_and_wait(
      '说真的，挺令人吃惊啊……居然会有人真的，完全不知道，不认识……',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 等着 ',
      tachyon.get_colored_name(),
      ' 继续说下去',
    ]);
    await era.printAndWait([
      '虽然确实也让 ',
      me.get_colored_name(),
      ' 震惊了一下，但 ',
      tachyon.get_colored_name(),
      ' 也不是那种好名利的',
      tachyon.get_uma_sex_title(),
      '，名声这种东西更可以说是',
      tachyon.sex,
      '最不在乎的东西之一了',
    ]);
    await era.printAndWait('特别提出这个，想必是有什么其他的理由吧');
    era.println();
    if (edu_marks.chris < 2) {
      await tachyon.say_and_wait('你还记得圣诞节那天的事吗？');
      era.println();
      await era.printAndWait([
        '圣诞节……',
        me.get_colored_name(),
        ' 想起了那间小居酒屋',
      ]);
      await era.printAndWait('赛场的世界好像真的与其毫无相干');
      await era.printAndWait('没有比赛，这些人的人生也一样在运转着');
      await era.printAndWait('此时此刻，恰如彼时彼刻');
      await era.printAndWait([
        '……当时自己对 ',
        tachyon.get_colored_name(),
        ' 提出的可能性是拒绝的',
      ]);
      await era.printAndWait([
        '因为当时的',
        tachyon.sex,
        '只是为了逃避而选择离开赛场',
      ]);
      await era.printAndWait('那，现在呢？');
      await era.printAndWait([
        me.get_colored_name(),
        ' 默默等待着 ',
        tachyon.get_colored_name(),
        ' 将话说完',
      ]);
      era.println();
      await era.printAndWait(['坐在岸边的', tachyon.sex, '不发一语']);
      await era.printAndWait('在月光下看起来是无比的寂静，宛如身处画中');
      await era.printAndWait([
        '这是但凡认识',
        tachyon.sex,
        '，认识 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.get_uma_sex_title(),
        '的人都难以想像的',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，竟然会与宁静这个词如此般配',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……那天的回答，你还没给我吧']);
      await tachyon.say_and_wait('这样的可能性，是可以存在的吗？');
      await tachyon.say_and_wait(
        '不停追寻可能性的科学家，某天忽然觉得累了，没有任何契机，',
      );
      await tachyon.say_and_wait(
        '只是觉得差不多够了，接下来的道路，交给后来的人吧……',
      );
      await tachyon.say_and_wait('只想与自己重视的，重视自己的人一起生活……');
      await tachyon.say_and_wait(
        '你不觉得，对这种人而言……这样的地方，就很适合吗？',
      );
      era.println();
      await era.printAndWait([
        '没有人认识 ',
        tachyon.get_colored_name(),
        ' 的地方',
      ]);
      await era.printAndWait('不需要继续探索可能性');
      await era.printAndWait(
        '可以停下来歇歇脚，或者……就这么在此过着平安喜乐的生活',
      );
      await era.printAndWait('这样的可能性……');
      era.printButton('「听起来……挺不错的」', 1);
      era.printButton('「或许……再思考看看吧」', 2);
    } else {
      await tachyon.say_and_wait('这个地方，很安静呢');
      era.println();
      await era.printAndWait(
        '……除了风声，以及温泉水的声音外，就没有任何其他人声的温泉旅馆',
      );
      await era.printAndWait([
        '过于寂静的环境在其他时刻或许会让人有些恐惧，但有了 ',
        tachyon.get_colored_name(),
        ' 陪伴，这样的空间其实也不是无法忍受',
      ]);
      era.println();
      await tachyon.say_and_wait('而且，也很大');
      era.println();
      await era.printAndWait(
        '……毕竟是温泉旅馆，虽然现在只有自己两人，但原本设计来容纳数百名游客的旅馆，大也是当然的',
      );
      era.println();
      await tachyon.say_and_wait('而且，没什么人');
      era.println();
      await era.printAndWait('……毕竟在这样的深山里啊');
      await era.printAndWait([
        '一连说了许多没头没脑的话，导致 ',
        me.get_colored_name(),
        ' 越发无法理解 ',
        tachyon.get_colored_name(),
        ' 到底想说什么',
      ]);
      era.println();
      era.println();
      await tachyon.say_and_wait([
        '如此广大，宁静，祥和的地方……应该也容得下一名凯旋门赏',
        tachyon.get_uma_sex_title(),
        '和',
        tachyon.sex,
        '的训练员吧',
      ]);
      await tachyon.say_and_wait(
        '像这样……无人认识，安静平和的生活……也是一种可能性吗？',
      );
      era.println();
      await era.printAndWait([tachyon.get_uma_sex_title(), '的可能性']);
      await era.printAndWait([
        '这是 ',
        tachyon.get_colored_name(),
        ' 总放在口上的话',
      ]);
      await era.printAndWait([
        '但',
        tachyon.get_uma_sex_title(),
        '是无法一辈子奔跑的',
      ]);
      await era.printAndWait([
        '就算是赛',
        tachyon.get_uma_sex_title(),
        '，也终会走上离开赛场，离开对速度的追求的道路',
      ]);
      era.println();
      await era.printAndWait([
        '那么，这种可能性能否共用在 ',
        tachyon.get_colored_name(),
        ' 身上呢？',
      ]);
      await common_future(tachyon, callname);
      era.printButton('「听起来……挺不错的」', 1);
      era.printButton('「或许……再思考看看吧」', 2);
    }
    await era.input();
    await tachyon.say_and_wait('……呵呵');
    era.println();
    await era.printAndWait([
      '对 ',
      me.get_colored_name(),
      ' 的回答，',
      tachyon.get_colored_name(),
      ' 没有多说什么',
    ]);
    await era.printAndWait([tachyon.sex, '用脚滑绕着水面，在水上荡出层层水波']);
    await era.printAndWait([
      '忽然，风起，',
      me.get_colored_name(),
      ' 听见整个森林又活了起来',
    ]);
    await era.printAndWait('树叶沙沙落下，夜晚安眠的鸟雀被惊醒呱呱乱飞');
    await era.printAndWait([
      '夜晚的寂静，仿佛因为',
      tachyon.sex,
      '这一时的搅乱而被瞬间打破',
    ]);
    era.println();
    await era.printAndWait([
      '这样的',
      tachyon.sex,
      '，真的能过上那样的生活吗？',
    ]);
    await era.printAndWait([
      '想到无论能与不能会带来的可能性，让 ',
      me.get_colored_name(),
      ' 忽然有些兴奋',
    ]);
    await era.printAndWait([
      '不过，无论能与不能，自己都必然陪伴着',
      tachyon.sex,
      '，直到最后的吧',
    ]);
    era.println();
    await tachyon.say_and_wait('话说');
    era.println();
    await era.printAndWait('在周围的环境恢复冬夜的宁静及吵杂后');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 仿佛忽然想起一般开口说道',
    ]);
    await era.printAndWait(
      '一边说着，一边悄悄将浴巾的下摆卷了起来，直到接近大腿根部',
    );
    era.println();
    await tachyon.say_and_wait('虽然包了浴巾比较抱歉……');
    await tachyon.say_and_wait('但是，下面确实是没穿的哦……要看看吗？');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 用玩味的眼神看着 ',
      me.get_colored_name(),
      '，手上慢慢的将浴巾打结的部分悄悄揭开',
    ]);
    if (tachyon.sex_code - 1) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 看见了浴巾下若隐若现，似乎有些潮湿的缝隙',
      ]);
      await era.printAndWait('……大概，是温泉水吧');
      await era.printAndWait([
        '虽然知道 ',
        tachyon.get_colored_name(),
        ' 明明还没进入温泉，但 ',
        me.get_colored_name(),
        ' 还是决定这么骗自己',
      ]);
    }
    era.printButton('「在温泉里，不太好吧……」', 1);
    era.printButton('「要不，等到回房间……？」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '我已经确认过了……这几天只有我们有预定住宿，所以就算在这里做什么都不会有关系',
    );
    await tachyon.say_and_wait(
      '除此之外……因为不会有人来，所以就算你想反抗，也是没用的哦♡',
    );
    await tachyon.say_and_wait('放宽心，好好享受吧');
    era.println();

    await era.printAndWait([
      '不知何时脱下浴巾，赤裸着身子进入温泉的 ',
      tachyon.get_colored_name(),
      ' 趴在了 ',
      me.get_colored_name(),
      ' 的身上，',
      tachyon.sex_code - 1 && me.sex_code > 0
        ? '将那在进入温泉前就已经完全湿透的粉嫩缝隙对准了粗棒……'
        : '',
    ]);
    begin_and_init_ero(0, 32);
    era.set('tcvar:0:发情', 1);
    era.set('tcvar:32:发情', 1);
    update_ero_status(0, 32);
    era.set('flag:当前位置', location_enum.hot_spring);
    await print_ero_page(32, true);
    era.set('flag:当前位置', location_enum.gate);
    await end_ero_and_show_result(true);
    await era.printAndWait([
      '云雨过后，',
      tachyon.get_colored_name(),
      ' 先一步出了温泉',
    ]);
    if (tachyon.sex_code - 1 && me.sex_code > 0) {
      await era.printAndWait([
        me.get_colored_name(),
        ' 看着',
        tachyon.sex,
        '满足的摸着稍微有些变大的肚子的模样，以及顺着大腿流出，不知是温泉水还是其他什么东西的透明液体',
      ]);
      await era.printAndWait(
        '还有从一字型变成了双唇模样，唇间还留着刚偷吃完的白浆的穴口',
      );
      await era.printAndWait('胯下又一次硬了起来');
      await era.printAndWait([
        tachyon.sex,
        '仿佛察觉到了一般，稍稍扭动了一下屁股',
      ]);
    }
    await era.printAndWait('看来回房之后，又会是一场恶战啊……');
    await era.printAndWait([
      '在大战前，',
      me.get_colored_name(),
      ' 望着天空，享受战前最后的宁静',
    ]);
  } else {
    await era.printAndWait([
      me.get_couple_title(),
      ' 来到的温泉旅店，就商店街的活动标准来看，算是相当豪华的场所',
    ]);
    await era.printAndWait('独间的温泉池，日式的标准客房，甚至还有怀石料理');
    await era.printAndWait(
      '不如说……一般商店街的抽奖真的会准备如此豪华的大奖吗？',
    );
    await era.printAndWait([
      '难不成……其实一开始就是有人安排过的，只是借这个机会提供给',
      tachyon.get_uma_sex_title(),
      '和训练员？',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 坐在温泉池内，胡思乱想着一些无边无际的事情',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '？我进去了哦～～']);
    era.println();
    await era.printAndWait([
      '忽然，负责',
      tachyon.get_uma_sex_title(),
      '在门外的呼喊将 ',
      me.get_colored_name(),
      ' 的神智唤回',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 下意识的回答了请便后才想起现在自己正在泡汤',
    ]);
    await era.printAndWait('现在要遮挡自己已经来不及了—————');
    await era.printAndWait([
      me.get_colored_name(),
      ' 连忙将身体完全缩进了温泉中，希望能靠着温泉的雾气稍微遮蔽一些不该被看到的部位',
    ]);
    if (era.get('exp:32:性爱次数')) {
      await tachyon.say_and_wait([
        callname,
        '—————怎么这么害羞的缩着身体呢？明明都已经看过那么多次了',
      ]);
    } else {
      await tachyon.say_and_wait([
        callname,
        '—————怎么这么害羞的缩着身体呢？明明实验的时候都全看光过了',
      ]);
    }
    era.println();
    await era.printAndWait([
      '虽然这么说，但 ',
      tachyon.get_colored_name(),
      ' 的语气其实也有些拘谨',
    ]);
    await era.printAndWait([
      '与光着身子的 ',
      me.get_colored_name(),
      ' 不同，',
      tachyon.get_colored_name(),
      ' 的身上围了一层浴巾',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '自顾自的进了温泉，朝着 ',
      me.get_colored_name(),
      ' 靠了过来',
    ]);
    await era.printAndWait([
      '随后坐在 ',
      me.get_colored_name(),
      ' 的身旁，一脸放松的依偎着 ',
      me.get_colored_name(),
    ]);
    era.println();
    await tachyon.say_and_wait('总算……URA也结束了啊');
    await tachyon.say_and_wait('偶尔，像这样放松一下也不错呢');
    era.println();
    await era.printAndWait([tachyon.sex, '满足的叹了口气']);
    await era.printAndWait(
      '仿佛刚完成了一件大案子的社畜，在酒会上猛灌了口啤酒后吐出的那口气一般',
    );
    await era.printAndWait(
      '说不清到底是解放感，成就感，可能……还有淡淡的，自己都找不到原因的失落感？',
    );
    await era.printAndWait([
      '回想这三年，',
      me.get_colored_name(),
      ' 和 ',
      tachyon.get_colored_name(),
      ' 确实一起达到了许多成就',
    ]);
    await era.printAndWait([
      '三冠的道路，对情感的研究课题，与 ',
      coffee.get_colored_name(),
      ' 的激战……',
    ]);
    await era.printAndWait('还有更多更多，值得一提，或者不值一提');
    await era.printAndWait([
      '这三年的重量，让 ',
      me.get_colored_name(),
      ' 不由得也和 ',
      tachyon.get_colored_name(),
      ' 一样吐出了叹息',
    ]);
    era.println();
    await era.printAndWait([
      '接下来的时间，',
      me.get_couple_title(),
      ' 二人谁也没说话，只是互相依偎着',
    ]);
    await era.printAndWait([
      '此时的 ',
      me.get_colored_name(),
      ' 才发觉，身旁的',
      tachyon.sex,
      '身体是如此娇小',
    ]);
    await era.printAndWait([
      '此时不是什么天才',
      tachyon.get_uma_sex_title(),
      '，也不是疯狂科学家',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '也不过是一名普通的',
      tachyon.get_teen_sex_title(),
      '而已',
    ]);
    era.println();
    await era.printAndWait('热烟缭绕的温泉中，静静享受着片刻宁静的两人');
    await era.printAndWait([
      '对熟知麻烦制造者 ',
      tachyon.get_colored_name(),
      '，以及助纣为虐的其负责训练员的人来说，这想必是难以置信的画面吧',
    ]);
    await era.printAndWait('但此时，两人便是如此沉浸于此');
    era.drawLine();
    await tachyon.say_and_wait([callname, '，你知道，薛定鄂的猫吗？']);
    era.println();
    await era.printAndWait([
      '忽然，',
      tachyon.get_colored_name(),
      ' 打破了这份沉默',
    ]);
    await era.printAndWait('薛定鄂的猫……？');
    era.printButton('「不知道」', 1);
    era.printButton('「知道」', 2);
    if ((await era.input()) === 1) {
      await tachyon.say_and_wait(
        '薛定鄂的猫，最早是薛定鄂用以反驳量子力学而提出的假想实验，',
      );
      await tachyon.say_and_wait(
        '令人讽刺的是，现在却变成了用以诠释量子力学的最佳代表',
      );
      await tachyon.say_and_wait(
        '简单来说，就是将放射性物质、会被放射线触发的毒气开关，以及猫放在完全隔绝外界的箱子中',
      );
      await tachyon.say_and_wait('没有人知道放射性物质何时会衰变生成放射线，');
      await tachyon.say_and_wait(
        '换言之，没有人知道开关究竟会不会触发，在打开箱子前，猫会同时处于死亡和生存的叠加状态',
      );
    } else {
      await tachyon.say_and_wait(
        '关于这个实验，如今各种学派都有各自的想法，但万变不离其宗的……你知道，这个实验中最重要的是什么吗？',
      );
    }
    era.printButton('「……猫？」', 1);
    era.printButton('「……毒气？」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '哈哈，确实，要是没有这些的话实验根本是无法成立的……不过，都不对哦',
    );
    era.println();
    await era.printAndWait([
      '忽然，',
      tachyon.get_colored_name(),
      ' 从温泉里站起身来，面对着 ',
      me.get_colored_name(),
      '，与 ',
      me.get_colored_name(),
      ' 双目相对',
    ]);
    await era.printAndWait('那酒红色的眼眸如久酿的蜜泉一般，令人沉醉');
    await era.printAndWait([
      '忽然 ',
      me.get_colored_name(),
      ' 有些好奇，这样的',
      tachyon.sex,
      '也曾经评价过自己拥有一双疯狂的眼睛',
    ]);
    await era.printAndWait([
      '那么现在，从',
      tachyon.sex,
      '的眼眸中看见的又是什么呢？',
    ]);
    era.println();
    await tachyon.say_and_wait('答案是—————『观测者』');
    await tachyon.say_and_wait(
      '无论猫是死是活，这都只是『可能』，是无限接近，却无法定型的可能性',
    );
    await tachyon.say_and_wait(
      '只有在加入了观测后，可能性才能彻底定型，化为无论生死的结果',
    );
    era.println();
    await era.printAndWait('换言之');
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' 伸出手，好似想要触碰 ',
      me.get_colored_name(),
      ' 的眼睛，却又有些颤抖，怕一不小心伤害到 ',
      me.get_colored_name(),
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 主动抓住了',
      tachyon.sex,
      '的手，缓慢，却稳当的朝着自己的双眼靠近',
    ]);
    era.println();
    await tachyon.say_and_wait('你，就是我的观测者');
    await tachyon.say_and_wait([
      '是将 ',
      tachyon.get_colored_name(),
      ' 的可能性固定的人',
    ]);
    await tachyon.say_and_wait([
      '是决定了此刻的 ',
      tachyon.get_colored_name(),
      ' 的人',
    ]);
    await tachyon.say_and_wait(
      '在这场实验中，你才是研究者，而我，不过是被你放进箱子里的猫而已',
    );
    era.println();
    await era.printAndWait('轻轻的，碰到了');
    await era.printAndWait('没什么特殊的感觉，除了眼珠被触碰的刺痛感');
    await era.printAndWait([
      '但 ',
      tachyon.get_colored_name(),
      ' 仿佛这样就满足了一般，主动收回了手',
    ]);
    era.println();
    await tachyon.say_and_wait('今后的实验……还请多多指教');
    await tachyon.say_and_wait('我亲爱的，教授君');
    await tachyon.say_and_wait('等会出去，不要忘记我给你准备的礼物哦');
    era.println();
    await era.printAndWait([
      '说完后，',
      tachyon.get_colored_name(),
      ' 便先上了岸',
    ]);
    era.println();
    await tachyon.say_and_wait('对了，今天的药我加在冰镇牛奶里了，要记得喝哦');
    era.println();
    await era.printAndWait(
      '…………最起码，会帮自己准备冰牛奶，这也算是一种成长吗？',
    );
    await era.printAndWait([
      me.get_colored_name(),
      ' 一边思考着近似于被PUA的人会有的想法，一边决定在温泉里再多泡一会',
    ]);
  }
  era.set('item:用途不明的眼镜', 1);
  return true;
};
