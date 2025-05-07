const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const basement_owners = require('#/data/event/basement-owners');
const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

async function ask_release_agree() {
  const grand = get_chara_talk(89),
    me = get_chara_talk(0),
    another = basement_owners.get().filter((e) => e !== 89)[0],
    callname = sys_get_colored_callname(89, 0);
  if (era.get('exp:89:监禁次数') === 1 && !new GrandLifeMarks().b_find_escape) {
    await grand.say_and_wait(['……嗯。']);

    await era.printAndWait([
      '在听到 ',
      me.get_colored_name(),
      ' 离开这里的请求后，',
      grand.get_colored_name(),
      ' 迟疑许久，最后缓缓点头。',
    ]);
    era.println();

    if (another) {
      await grand.say_and_wait([
        '最近……',
        sys_get_colored_callname(89, another),
        ' 对我说……要把 ',
        callname,
        ' 带去国外。',
      ]);
      await grand.say_and_wait([
        grand.sex,
        '说只要到了那里……就可以永远占有 ',
        callname,
        ' 了。',
      ]);
      await grand.say_and_wait(['『永远』什么的……真的非常……非常有魅力。']);
      era.println();

      await era.printAndWait([grand.get_colored_name(), ' 苦笑着。']);
      await era.printAndWait([
        '印象中，自从来到这地下室后，',
        grand.get_teen_sex_title(),
        '总是在苦笑着。',
      ]);
      era.println();

      await grand.say_and_wait(['不过……我还是不舍得离开这个充满回忆的地方。']);
    } else {
      await grand.say_and_wait([
        '最近……',
        sys_get_colored_callname(89, 90),
        ' 和 ',
        sys_get_colored_callname(89, 91),
        ' 似乎察觉到了什么，一直在劝我放弃。',
      ]);
      await grand.say_and_wait([
        '我知道',
        grand.sex,
        '们是为了我好，但也说明……这里已经不安全了……',
      ]);
      await grand.say_and_wait(['再过不久，救援队……应该会发现这里吧。']);
      era.println();

      await era.printAndWait([grand.get_colored_name(), ' 苦笑着。']);
      await era.printAndWait([
        '印象中，自从来到这地下室后，',
        grand.get_teen_sex_title(),
        '总是在苦笑着。',
      ]);
      era.println();

      await grand.say_and_wait([
        '但是……我……并不是因为这个才放 ',
        callname,
        ' 离开的。',
      ]);
    }
    await grand.say_and_wait([
      '本来想着……就算只能得到一点点爱，哪怕要抛弃一切……都不会再放开你的手。',
    ]);
    await grand.say_and_wait([
      '就算要亲手弄坏 ',
      callname,
      '，也不想离开你的身边。',
    ]);
    era.println();

    await era.printAndWait([
      '说到这里，',
      grand.get_colored_name(),
      ' 不自觉的握紧了小小的拳头。',
    ]);
    await era.printAndWait([
      '但是与 ',
      me.get_colored_name(),
      ' 目光接触后，',
      grand.get_child_sex_title(),
      '渐渐松开了手。',
    ]);
    era.println();

    await grand.say_and_wait([
      '……但是……这段时间，我总是回忆起和 ',
      callname,
      ' 一起经历过的……各种各样的事情。',
    ]);
    await grand.say_and_wait(['原来……比起把 ', callname, ' 绑在我的视线内——']);
    await grand.say_and_wait(['我最喜欢的，是 ', callname, ' 的笑容。']);
    era.println();

    await era.printAndWait([
      '说着，',
      grand.get_colored_name(),
      ' 从口袋中拿出了一串钥匙，那是见证 ',
      me.get_couple_title(),
      ' 相遇的信物。',
    ]);
    await era.printAndWait([grand.sex, '用颤抖的小手挑出其中一把，插入锁中。']);
    await era.printAndWait([
      '随着『咔哒』一声，那道沉重、压抑的锁，终于被解开了。',
    ]);
    era.println();

    await grand.say_and_wait([
      '如果这样做，还给你自由……你还会重新喜欢上我吗……？',
    ]);
    await grand.say_and_wait([
      '……什么的，明明知道，这种事情是不可能的，却忍不住抱有期待……',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      ' 注意到，',
      grand.get_colored_name(),
      ' 的双手正紧紧地抓着自己的裙摆。',
    ]);
    era.println();

    if (another) {
      await grand.say_and_wait(['快走吧，', callname, '……趁其他人没有回来。']);
      await grand.say_and_wait(['不用担心我也可以……我……我不会有事的。']);
      await grand.say_and_wait(['而且我这种人，根本不值得你担心……']);
      era.println();

      await era.printAndWait([
        '即便如此，',
        grand.get_colored_name(),
        ' 依旧为你推开了沉重的大门，催促 ',
        me.get_colored_name(),
        ' 离开。',
      ]);
    } else {
      await grand.say_and_wait([
        '我知道自己做出的事情……并不是道歉能够解决的。',
      ]);
      await grand.say_and_wait(['但是……对不起，', callname, '。']);
      await grand.say_and_wait(['然后，再见了……', callname, '。']);
      era.println();

      await era.printAndWait([
        '即便如此，',
        grand.get_colored_name(),
        ' 依然挤出了一个笑容，目送 ',
        me.get_colored_name(),
        ' 离开。',
      ]);
    }

    era.printButton('独自离开', 1);
    era.printButton(`邀请${grand.sex}一起离开`, 2, {
      disabled:
        era.get('relation:89:0') < 200 || new GrandLifeMarks().b_flatter < 3,
    });

    if ((await era.input()) === 1) {
      await me.say_and_wait([sys_get_callname(0, 89)[0], '……']);
      era.println();

      await era.printAndWait([
        '想要说些什么，但干渴的喉咙只允许嘴巴一张一合。',
      ]);
      await era.printAndWait([
        '即便再放心不下面前的 ',
        grand.get_colored_name(),
        '，身体和精神却已经到了崩溃的边缘。',
      ]);
      await era.printAndWait([
        '或许这次的行为只是一时冲动……但看到',
        grand.get_child_sex_title(),
        '就下意识感到恐惧的内心，毫无疑问是破镜难圆的证明。',
      ]);
      await era.printAndWait([
        '或许重见天日后帮',
        grand.get_child_sex_title(),
        '瞒下这次暴行，就是 ',
        me.get_colored_name(),
        ' 唯一能为',
        grand.sex,
        '做的事情了。',
      ]);
      era.println();

      await me.say_and_wait(['该死……'], true);
      era.println();

      await era.printAndWait([
        '咒骂着不争气的自己，',
        me.get_colored_name(),
        ' 扶着墙壁，艰难地走出了地下室。',
      ]);
    } else {
      await era.printAndWait([
        '视线在铁门与',
        grand.get_child_sex_title(),
        '之间来回移动，',
        me.get_colored_name(),
        ' 在心中默默有了决定。',
      ]);
      era.println();

      await me.say_and_wait([
        sys_get_colored_callname(0, 89),
        '……还记得你的梦想吗？',
      ]);
      era.println();

      await era.printAndWait([
        '从 ',
        grand.get_colored_name(),
        ' 的态度看来，这次的过激行为只是一时冲动所致。',
      ]);
      await era.printAndWait([
        '犯错是人之常情，身为大人，需要给',
        grand.sex,
        '一个重新来过的机会。',
      ]);
      era.println();

      await grand.say_and_wait(['诶……？']);
      await grand.say_and_wait(['我、我的梦想……']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 吞吞吐吐地迟迟说不出口，和刚与',
        grand.sex,
        '相遇时如出一辙。',
      ]);
      await era.printAndWait([
        '当时实现',
        grand.get_child_sex_title(),
        '梦想的约定，可不能仅是这样就轻易放弃。',
      ]);
      era.println();

      await me.say_and_wait(['让我们继续实现那个梦想吧。']);
      await grand.say_and_wait(['……诶？']);
      await grand.say_and_wait([
        '那是说……我、我还可以继续留在 ',
        callname,
        ' 身边吗？',
      ]);
      await me.say_and_wait([
        '当然了，',
        sys_get_colored_callname(0, 89),
        ' 是我的爱马。',
      ]);
      era.println();

      await era.printAndWait([
        '听到这番话，',
        grand.get_colored_name(),
        ' 先是震惊，转而露出了一副耿耿于怀的表情。',
      ]);
      era.println();

      await grand.say_and_wait([
        '但是……但是我、我可是做了伤害 ',
        callname,
        ' 的事情啊！',
      ]);
      await grand.say_and_wait([
        '而且 ',
        callname,
        ' 消失了这么久……大家一定已经——',
      ]);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 的话说到一半就被吸气声吞掉了。',
      ]);
      await era.printAndWait([
        '因为 ',
        me.get_colored_name(),
        ' 从正面握住了',
        grand.get_child_sex_title(),
        '的双手，举在胸口。',
      ]);
      era.println();

      await me.say_and_wait(['你什么都没做，我来做证。']);
      await grand.say_and_wait(['……！']);
      await me.say_and_wait(['既然是本人说的，没有什么比这更有说服力的了吧？']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        ' 像之前做过的那样，将 ',
        grand.get_colored_name(),
        ' 的脸埋在自己的胸口，避免',
        grand.sex,
        '思考那些不愉快的事情。',
      ]);
      era.println();

      await me.say_and_wait([
        '谁都做过噩梦，只是 ',
        sys_get_colored_callname(0, 89),
        ' 的睡相有点差。',
      ]);
      await me.say_and_wait(['梦醒之后，一切都结束了，就这样而已。']);
      await me.say_and_wait([
        '说到底，逼迫 ',
        sys_get_colored_callname(0, 89),
        ' 做出这种事情的我才是罪魁祸首……你愿意原谅我吗？',
      ]);
      await grand.say_and_wait([callname, '……', callname, '……！']);
      await grand.say_and_wait(['呜呜呜……呜呜呜啊啊啊……']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        ' 在 ',
        me.get_colored_name(),
        ' 的怀中，不断地重复着「我愿意」，哭了很长一段时间。',
      ]);
      await era.printAndWait([
        '冷静下来后，',
        me.get_colored_name(),
        ' 牵起',
        grand.get_child_sex_title(),
        '的手，走出了地下室。',
      ]);
    }
  } else {
    await grand.say_and_wait(['嗯……我会放 ', callname, ' 离开的。']);
    era.println();

    await era.printAndWait([
      '在 ',
      me.get_colored_name(),
      ' 的不懈恳求下，',
      grand.get_colored_name(),
      ' 沉默良久后，终于松了口。',
    ]);
    await era.printAndWait([
      '但很快，那双帽沿下的眼睛紧盯着 ',
      me.get_colored_name(),
      '，说出了自己的要求。',
    ]);
    era.println();

    await grand.say_and_wait([
      '但是……这一次，',
      callname,
      ' 一定要认真看着我哦。',
    ]);
    era.println();

    await era.printAndWait([
      '没有任何犹豫，对于',
      grand.get_teen_sex_title(),
      '提出的条件，',
      me.get_colored_name(),
      '再三保证，绝对不会再犯相同的错误。',
    ]);
    await era.printAndWait([
      '尽管是毫无意义的誓言，',
      grand.get_colored_name(),
      ' 却依旧十分受用，微微点了点头。',
    ]);
    era.println();

    await grand.say_and_wait(['嗯……我相信 ', callname, '。']);
    await grand.say_and_wait([
      '但这一次……我不会再让 ',
      callname,
      ' 离开我的视线了。',
    ]);
    era.println();

    await era.printAndWait([
      '如获大赦的 ',
      me.get_colored_name(),
      ' 在听到这句话后，知道事情还远没有结束。',
    ]);
    await era.printAndWait([
      '带着对未来的担忧……以及身后的视线，',
      me.get_colored_name(),
      ' 走出了地下室。',
    ]);
  }
}

module.exports = ask_release_agree;
