const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

function find_escape(out_of_prison, s_level_up, is_back) {
  const grand = get_chara_talk(89),
    me = get_chara_talk(0),
    callname = sys_get_colored_callname(89, 0);
  new GrandLifeMarks().b_find_escape = 1;
  if (is_back && out_of_prison) {
    era.print(['在一次不经意的尝试中，铁丝似乎触动了锁内的某个部分。']);
    era.print([
      me.get_colored_name(),
      ' 握紧铁丝，用力一转，只感觉锁体内部传来了一阵顺畅的转动感。',
    ]);
    era.print([
      me.get_colored_name(),
      ' 在心中欢呼着推开铁门，来到一条狭窄的通道，只要穿过这——',
    ]);
    era.println();

    grand.say(['……', me.get_colored_name(), '，你要去哪里？']);
    era.println();

    era.print(['肌肤发泡般的恶寒传遍全身，从脖子到后背都被冷汗打湿。']);
    era.print([
      '从通道另一端传来的声音微弱的几乎听不到，其中的意思却强烈地传递过来。',
    ]);
    era.print([
      '步步逼近的',
      grand.get_uma_sex_title(),
      '并非在问 ',
      me.get_colored_name(),
      '，只是在了解一切的基础上进行『确认』而已。',
    ]);
    era.println();

    me.say(['这、这也是为了 ', sys_get_colored_callname(0, 89), '……']);
    era.println();

    if (era.get('exp:89:监禁次数') === 1) {
      grand.say(['如果你是真心为了我好……就不要用这句话来回答我啊。']);
      era.println();

      era.print([
        '被逼退回门内的 ',
        me.get_colored_name(),
        '，近在咫尺的爱马，不好的预感在心中弥漫开来。',
      ]);
      era.println();

      grand.say(['对我来说，', callname, ' 才是最重要的，是我的一切……']);
    } else {
      grand.say([callname, '……你打算用这种话来糊弄我吗……']);
      era.println();

      era.print([
        '被逼退回门内的 ',
        me.get_colored_name(),
        '，近在咫尺的爱马，不好的预感在心中弥漫开来。',
      ]);
      era.println();

      grand.say([
        '我……虽然不像 ',
        sys_get_colored_callname(89, 91),
        ' 那样聪明，但也不是会被轻易欺骗的傻瓜。',
      ]);
    }
    era.println();

    era.print(['咔哒——锁芯转动的冰冷声音在寂静的房间里回荡。']);
    era.print([
      '在这个不会再与外界产生任何接触的地方，',
      me.get_colored_name(),
      ' 认命般闭上了眼睛。',
    ]);
  } else {
    era.print(['咔嚓，咔嚓——']);
    era.println();

    me.say(['啧……']);
    era.println();

    era.print(['好不容易找到的一根铁丝断在了锁芯。']);
    era.print([
      '无次数尝试中 ',
      me.get_colored_name(),
      ' 早已尝惯失败，但留下的碎片无疑将成为试图逃离的证据。',
    ]);
    era.println();

    me.say(['这个……拔不出来……！']);
    era.println();

    era.print(['是什么时候开始出错了呢？']);
    era.print(['到底为什么会走到这一步呢？']);
    era.print([
      '脑海中，小',
      grand.get_uma_sex_title(),
      '那天使般的笑容如幻影般浮现。',
    ]);
    era.println();

    grand.say(['……', callname, '？']);
    era.println();

    era.print([
      '微弱的声音定住了 ',
      me.get_colored_name(),
      ' 的动作，宣告一时兴起的越狱游戏到此结束。',
    ]);
    era.println();

    grand.say(['对不起，', callname, '……']);
    era.println();

    era.print([
      me.get_colored_name(),
      ' 甚至不敢回头确认',
      grand.get_child_sex_title(),
      '的神情，只是任凭自己被拖回床笫之上。',
    ]);
    era.println();

    grand.say(['都是我的错…没有照顾好 ', callname, '，让你产生了离开的想法。']);
    grand.say(['……必须让 ', callname, ' 感受到我的心意…']);
  }
}

module.exports = find_escape;
