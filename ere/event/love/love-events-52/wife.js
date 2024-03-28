const era = require('#/era-electron');

const {
  sys_love_uma_in_event,
  sys_get_callname,
} = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

/**
 * @author 99
 *
 * @param {CharaTalk} me
 * @param {CharaTalk} urara
 * @param {CharaTalk} in_urara
 * @param {number} relation
 * @param {string} callname
 */
module.exports = async (me, urara, in_urara, relation, callname) => {
  await print_event_name(`许下约定的${urara.sex}`, urara);
  await in_urara.say_as_unknown_and_wait(
    '那次路过婚礼现场，只是纯粹的偶然而已，但若想改变奔跑的轨迹，一次偶然也足矣。',
  );
  era.drawLine();
  await era.printAndWait([
    '与婚礼现场只有一栅之隔，记忆中的 ',
    me.get_colored_name(),
    ' 与',
    urara.get_uma_sex_title(),
    '，在栅栏之外目送着一对新人穿过献上祝福的人群。',
  ]);
  await era.printAndWait([
    '像是在暗示什么，这对新人一位是娇小的',
    urara.get_uma_sex_title(),
    '，另一位则是大',
    urara.sex,
    '许多的',
    me.get_phy_sex_title(),
    '。',
  ]);
  await era.printAndWait([
    '回忆中的 ',
    urara.get_colored_name(),
    ' 没有说话，只是清澈的樱瞳在注视中闪过了一丝憧憬。',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 也到了寻求组建家庭的阶段。如此倒错的想法，绝不是一位正经大人应该想的。',
  ]);
  await era.printAndWait([
    '但也没办法，与小',
    urara.get_uma_sex_title(),
    '成为了恋人的不是别人，正是',
    urara.sex,
    '的训练员。',
  ]);
  await era.printAndWait(
    '那么扪心自问一下，如果担当希望能与恋人在未来组建家庭，训练员准备又做好了吗？',
  );
  era.println();

  if (relation > 150) {
    await urara.say_and_wait([callname, '，在想什么呢？']);
    await era.printAndWait([
      urara.get_colored_name(),
      ' 不知何时转过头来，像往常一样发自内心的对 ',
      me.get_colored_name(),
      ' 笑着。',
    ]);
    await era.printAndWait([
      '或许 ',
      me.get_colored_name(),
      ' 们现在也和那对新人没什么区别吧？感受着恋人美好的笑容，',
      me.get_colored_name(),
      ' 如此肯定到。',
    ]);
    await era.printAndWait([
      '所以，现在的 ',
      urara.get_colored_name(),
      ' 恰好需要一个认真的承诺，不管',
      urara.sex,
      '是否被定义为「大人」。',
    ]);
  } else {
    await urara.say_and_wait([callname, ' ，有什么在意的事吗？']);
    await era.printAndWait([
      '收回目光 ',
      urara.get_colored_name(),
      ' 静静地看着 ',
      me.get_colored_name(),
      '，露出了有点无奈但依旧很开心的笑容。',
    ]);
    await era.printAndWait([
      '小',
      urara.get_uma_sex_title(),
      '总露出与气氛不符的表情，但要说不知道为什么，恐怕连自己也不会信。',
    ]);
    await era.printAndWait([
      '但小',
      urara.get_uma_sex_title(),
      '是感到憧憬还是不安，亦或是两者都有，只有这点 ',
      me.get_colored_name(),
      ' 现在无法确认。',
    ]);
  }
  era.println();

  await urara.say_and_wait([
    callname,
    '，有一天，乌拉拉也可以穿上白色的长裙吗？',
  ]);
  await era.printAndWait([
    '不等 ',
    me.get_colored_name(),
    ' 回答上一个问题，也不给予更多的思考时间，樱粉色的小恋人再次发问了。',
  ]);
  await urara.say_and_wait([
    '乌拉拉不会有更多的请求，但是 ',
    callname,
    '，乌拉拉的手现在还空着哦？',
  ]);
  await era.printAndWait([
    '没有直接看向 ',
    me.get_colored_name(),
    '，',
    urara.get_colored_name(),
    ' 继续隔着窄窄的围栏，如望向正在播放的未来般凝视着喧闹的结婚仪式。',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    ' 的小手正安静的等在身侧，哪怕上面既没有包裹白纱，也没有戴上闪亮的圆环。',
  ]);
  await era.printAndWait([
    urara.sex,
    '一定懂得这些东西，但小',
    urara.get_uma_sex_title(),
    '想要的仍旧只有掌心的相触，以及勾起小指的约定。',
  ]);
  await era.printAndWait([
    '不管以后要面对什么，小小的',
    urara.sex,
    '都已经决心等待 ',
    me.get_colored_name(),
    ' 的回答。',
  ]);
  in_urara.say_as_unknown(
    `面对依旧等待着训练员${me.get_adult_sex_title()}（您）的${sys_get_callname(
      0,
      52,
    )}，您的决定……`,
  );
  era.printButton(`牵住${sys_get_callname(0, 52)}的手。（升级关系）`, 1);
  era.printButton('现在还没准备好。（暂不升级）', 2);
  if ((await era.input()) === 1) {
    await era.printAndWait([
      '与 ',
      urara.get_colored_name(),
      ' 的关系怎样了，',
      me.get_colored_name(),
      ' 早就知道这一点。',
    ]);
    await era.printAndWait([
      '不需要去考量什么，',
      me.get_colored_name(),
      ' 拉起了恋人的小手，',
      urara.get_colored_name(),
      ' 紧绷的耳朵也终于松口气般地放了下来。',
    ]);
    await era.printAndWait([
      '从简单的相合变为五指交叠，小',
      urara.get_uma_sex_title(),
      '细嫩的手指有些羞涩的在 ',
      me.get_colored_name(),
      ' 的手掌之间蹭来蹭去。',
    ]);
    await era.printAndWait([
      '收到回应的 ',
      urara.get_colored_name(),
      ' 依旧没有说话，但娇羞的红晕此刻诚实的染红了',
      urara.sex,
      '的脸颊。',
    ]);
    await era.printAndWait(
      '抚摸着过于娇小的恋人的手，一直压在心底的背德感仿佛在呼吸之间就会倾泻而出。',
    );
    await era.printAndWait('只是一点承诺都没有，这样真的就好了吗？');
    era.println();
    if (relation > 150) {
      await urara.say_and_wait([
        '原来是这样，身为大人不得不隐藏想法，可 ',
        callname,
        ' 的心里还是觉得对不住乌拉拉啊。',
      ]);
      await urara.say_and_wait([
        '不用担心哦？乌拉拉从一开始就不在意和 ',
        callname,
        ' 的差距，所以乌拉拉才能鼓起勇气主动提起那些事。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 还在对 ',
        me.get_colored_name(),
        ' 笑着，仿佛在用什么都懂一点的表情抚摸着 ',
        me.get_colored_name(),
        ' 内心的最深处。',
      ]);
      await urara.say_and_wait([
        '只要这样就可以了！',
        callname,
        ' 一直以来也很辛苦，所以乌拉拉什么都不需要哦？',
      ]);
      await urara.say_and_wait([
        callname,
        '，以后可以继续请多关照吗？虽然是要以更进一步的身份呦！',
      ]);
      await era.printAndWait([
        '随着婚礼钟声的敲响，樱粉色的笑容逐渐占满了 ',
        me.get_colored_name(),
        ' 的视线。',
      ]);
      await era.printAndWait(
        '原来如此，在看不见的地方，小乌拉拉早就已经做好与人相伴一生的准备了啊……',
      );
    } else {
      await urara.say_and_wait([
        '在担心什么呢 ',
        callname,
        '？明明已经什么事都做过了，是害怕乌拉拉反悔吗？',
      ]);
      await urara.say_and_wait([
        '才不会哦！乌拉拉知道 ',
        callname,
        ' 是个小气鬼，所以我要留在 ',
        callname,
        ' 身边自己寻找答案哦？',
      ]);
      await era.printAndWait([
        '仍然没有看向 ',
        me.get_colored_name(),
        '，',
        urara.get_colored_name(),
        ' 的目光透过栅栏望向天空，似乎在思考着生活尽头的事。',
      ]);
      await urara.say_and_wait([
        '而且就算是个那样的人，我也看得见 ',
        callname,
        ' 的付出，所以乌拉拉可以什么都不要。',
      ]);
      await urara.say_and_wait([
        '不过说句过分的话，乌拉拉觉得 ',
        callname,
        ' 拿不出什么像样的承诺哦？',
      ]);
      await era.printAndWait([
        '婚礼的钟声响起，小',
        urara.get_uma_sex_title(),
        '以笑容转向了 ',
        me.get_colored_name(),
        '，脸上带着释然的爱意。',
      ]);
      await era.printAndWait([
        '就算知道',
        urara.sex,
        '的训练员是什么样的人，',
        urara.get_colored_name(),
        ' 也依旧愿意与其相伴吗……',
      ]);
    }
    era.println();
    await urara.say_and_wait([callname, '，稍微闭上眼睛吧！']);
    await era.printAndWait(
      '虽然有些因紧张而颤抖但不约而同的闭上眼睛，紧接着是与婚礼的主角们所平行的拥吻。',
    );
    await era.printAndWait(
      '或许总有一天，在被隔开的平行线之外的二人也能成为双人仪式的主角。',
    );
    await era.printAndWait(
      '即使未来是未知的，即使谁也没有许下承诺，即使幸福可能会变得稀缺。',
    );
    await era.printAndWait(
      '既然恋人互相拥有了决心，那亦只有牵着手一起向前的选择。',
    );
    if (
      era
        .getAddedCharacters()
        .filter((e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75).length >
      0
    ) {
      era.println();
      await urara.say_and_wait([
        '不过 ',
        callname,
        ' 还真是贪心，虽然这也是乌拉拉的选择，但还是希望大家不会责备乌拉拉就好了。',
      ]);
      await urara.say_and_wait([
        '可是乌拉拉与 ',
        callname,
        ' 都已经做出选择了，已经来不及了呢……',
      ]);
      await era.printAndWait([
        '在亲热后俯在恋人的耳边，',
        urara.get_teen_sex_title(),
        '的笑容似乎有些苦涩。',
      ]);
      era.drawLine();
      await in_urara.say_as_unknown_and_wait(
        '说的也是啊，你确实是个过分的人，不过还请稍微打起精神来吧，因为……',
      );
    } else {
      era.drawLine();
    }
    await in_urara.say_as_unknown_and_wait('您已经没法回头了……');
    await sys_love_uma_in_event(52);
  } else {
    await urara.say_and_wait('现在还不行啊……没关系的，乌拉拉会继续等下去的！');
    await era.printAndWait([
      '在焦急的等待无果后蜷缩起依旧空荡荡的手心，',
      urara.get_colored_name(),
      ' 自我安慰般地再次开口了。',
    ]);
    await urara.say_and_wait([
      '不过呢，如果有一天 ',
      callname,
      ' 想好了的话……一定要快点和乌拉拉说哦!',
    ]);
    await urara.say_and_wait('因为乌拉拉，也是鼓起了好大的勇气才说出来的……');
    await era.printAndWait([
      '没能看向最喜欢的 ',
      callname,
      '，甚至用阴影藏起了变红的樱瞳， ',
      urara.get_colored_name(),
      ' 的笑容因声音的颤抖而变得悲伤。',
    ]);
    await urara.say_and_wait([
      '果然还是有点难受……乌拉拉、真的很想和 ',
      callname,
      '……',
    ]);
    await era.printAndWait('而后，就连强颜欢笑也逐渐变得破碎——');

    era.printButton(
      `「不要伤心，${sys_get_callname(
        0,
        52,
      )}，并不是在说不可以，只是现在还不行。」`,
      1,
    );
    await era.input();

    await urara.say_and_wait('……诶？');
    await era.printAndWait([
      '有些出乎意料地， ',
      urara.get_colored_name(),
      ' 颤抖的声音停下了，红红的眼睛里透着些许疑惑。',
    ]);
    era.println();
    if (relation > 150) {
      await urara.say_and_wait([
        '乌拉拉还以为 ',
        callname,
        ' 终于厌倦了，看来没那回事呢……',
      ]);
      await era.printAndWait([
        '连眼角的泪水都顾不上擦，小',
        urara.get_uma_sex_title(),
        '一下就安心的贴到了 ',
        callname,
        ' 身上。',
      ]);
      await era.printAndWait([
        '安心地感受着恋人身上的气息，',
        urara.get_colored_name(),
        ' 逐渐平复了因害怕被嫌弃而失控的心绪。',
      ]);
    } else {
      await urara.say_and_wait([
        '原来 ',
        callname,
        ' 不是要抛弃乌拉拉吗？总觉得有点开心……',
      ]);
      await era.printAndWait([
        '偷偷抹掉了眼角的泪水，',
        urara.get_teen_sex_title(),
        '小声说着不知道如何得出的结论。',
      ]);
      await era.printAndWait([
        '不过按照一直以来的相处节奏，或许 ',
        urara.get_colored_name(),
        ' 会得出这样的结论也并没那么意外……',
      ]);
    }
    era.printButton(
      `「所以就像${sys_get_callname(
        0,
        52,
      )}说的那样，到合适的时候，我会第一时间告诉${sys_get_callname(
        52,
        0,
      )}的！」`,
      1,
    );
    await era.input();

    await urara.say_and_wait('那……约好了哦？');
    await era.printAndWait([
      '在一阵思索后，',
      urara.get_colored_name(),
      ' 笑着向 ',
      me.get_colored_name(),
      ' 伸出了小指。',
    ]);

    era.printButton('「约好了哦！」', 1);
    await era.input();

    await era.printAndWait(
      '随着小指的相叠，婚礼的现场也响起了庆祝的钟声，仿佛在庆祝两人许下了人生最重要的约定一般。',
    );
    await era.printAndWait([
      '有这样的祝福，与',
      urara.sex,
      '相约的日子，一定会很快到来吧？不过那一天会以怎样的形式到来呢……',
    ]);
    await urara.say_and_wait([
      '不过被 ',
      callname,
      ' 拒绝了，然后未来的日子里被 ',
      callname,
      ' 当做宠物，或许也……',
    ]);
    await urara.say_and_wait('不、不是，没、没什么哦？');
    await era.printAndWait([
      '看着假装自己什么都没说的 ',
      urara.get_colored_name(),
      '，总觉得相约的日子不知不觉中又变远了……',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('在这里停住了？！不……什么都没有……');
    await in_urara.say_as_unknown_and_wait(
      '不过，说起来……您为什么这么熟练啊？',
    );
    era.set('cflag:52:爱慕暂拒', 89);
    new UraraLifeMarks().active_89 = 1;
    await punish_rejecting_love(52);
  }
};
