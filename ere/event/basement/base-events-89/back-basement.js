const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

function back_basement() {
  const callname = sys_get_colored_callname(89, 0),
    grand = get_chara_talk(89),
    life_marks = new GrandLifeMarks(),
    me = get_chara_talk(0);
  if (life_marks.b_start) {
    era.print([
      '正当 ',
      me.get_colored_name(),
      ' 寻找反抗手段时，门锁处突然传来『咔哒』一声。',
    ]);
    era.println();

    grand.say([callname, '……你醒了……']);
    era.println();

    era.print(['然而出现在门口的身影，远非想象中的凶恶歹徒。']);
    era.print([
      '小',
      grand.get_uma_sex_title(),
      '背过手，锁芯伴随一声脆响，向反方向再次转动。',
    ]);
    era.print([
      '耳罩下的小巧耳朵随之一抖，与它的主人步步逼近，止步于 ',
      me.get_colored_name(),
      ' 的身前。',
    ]);
    era.println();

    grand.say(['那里……很痛吧……']);
    era.println();

    era.print([
      grand.get_teen_sex_title(),
      '向 ',
      me.get_colored_name(),
      ' 的后脑伸出颤颤巍巍的小手，悬停片刻，却转而压下帽檐。',
    ]);
    era.println();

    grand.say(['……对不起……我会解释清楚的……']);
    grand.say(['如果可以的话……我也不想这样做……']);
    grand.say([
      '为了避免伤害 ',
      callname,
      '……这一次……可以不要再离开我身边吗……',
    ]);
  } else if (Math.random() < 0.5) {
    grand.say(['那个……', callname, '，我回来了。']);
    era.println();

    era.print([
      '推开铁门现身的小',
      grand.get_uma_sex_title(),
      '手中提着一个纸袋，包装表明里面是『光朝』的肉包。',
    ]);
    era.print([
      '面对 ',
      me.get_colored_name(),
      ' 一起享用的邀请，',
      grand.get_teen_sex_title(),
      '只是微微摇头。',
    ]);
    era.print([
      '是吃过了吗？猜测原因的 ',
      me.get_colored_name(),
      '，没来得及咬下第一口，',
      grand.get_teen_sex_title(),
      '的肚子却先传出了咕咕声。',
    ]);
    era.println();

    grand.say(['……', callname, ' 被监禁在这里，我却一个人享用肉包……什么的。']);
    grand.say(['想到这里……总觉得……什么都吃不下去。']);
    grand.say(['不用在意我也可以的……只要 ', callname, ' 开心……我就满足了……']);
  } else {
    era.print([
      '隐约听到外面的雨声，',
      me.get_colored_name(),
      ' 深吸周围湿冷的空气，呼出夹杂焦虑的叹息。',
    ]);
    era.print(['厚重的门突然被推动，紧随其后的是水珠不断落在地上的啪嗒声。']);
    era.println();

    grand.say(['我回来了……', callname, '。']);
    era.println();

    era.print([
      '湿透的校服，有一块没一块的贴着小',
      grand.get_uma_sex_title(),
      '的身体。',
    ]);
    era.print(['海军帽被雨水染成深色，原本蓬松帅气的短发粘在冻红的脸颊。']);
    era.println();

    grand.say(['……这样的天气……这里一定很潮湿吧……']);
    grand.say(['我……来给 ', callname, '……掏掏耳朵吧……诶嘿嘿……']);
    era.println();

    era.print(['脚边已经积攒出水坑的高尚骏逸，却是一副事不关己的态度。']);
    era.print([
      me.get_colored_name(),
      ' 强硬地将宛如傀偶的',
      grand.get_teen_sex_title(),
      '拉到床边，为',
      grand.sex,
      '披上被褥。',
    ]);
  }
}

module.exports = back_basement;
