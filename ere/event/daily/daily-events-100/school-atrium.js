const era = require('#/era-electron');

const { date_common } = require('#/event/daily/daily-events-100/snippets');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

module.exports = async (hook) => {
  const acute = get_chara_talk(100),
    edu_marks = new AcuteEduMarks(),
    me = get_chara_talk(0),
    love = era.get('love:100');
  if (love >= 50 && !edu_marks.possessive) {
    await acute.print_and_wait(['又一次来到了枯树洞……']);
    await acute.print_and_wait([
      '想要在 ',
      me.get_colored_actual_name(),
      ' 的身上留下印迹。',
    ]);
    await acute.print_and_wait(['不仅仅是接吻，还有其他地方。']);
    await acute.print_and_wait([
      '耳垂、脸颊、下巴、脖颈、胸口……都想要留下我的印迹。',
    ]);
    await acute.print_and_wait([
      '这就是所谓的占有欲吗？坦白的说，我并不明白。',
    ]);
    await acute.print_and_wait([
      '想要向 ',
      me.get_colored_actual_name(),
      ' 的嘴唇靠近，想要鼻与唇的喘息的交错；左面的心脏砰砰跳动，一切都是让人难以忍耐。',
    ]);
    await acute.print_and_wait(['爱人之间的接吻……真是一项危险的行动。']);
    await acute.print_and_wait([
      '要是真的接上了吻，让自己的身体染上了对 ',
      sys_get_colored_callname(0, 100),
      ' 的瘾症的话，那时候……我会变得怎样呢？',
    ]);
    await acute.print_and_wait([
      sys_get_colored_callname(0, 100),
      '……会负起责任来吗？',
    ]);
    edu_marks.possessive = 1;
    hook.arg = true;
    return true;
  } else if (love >= 90 && !edu_marks.kiss) {
    await date_common(acute, me);
    await era.printAndWait([
      '——感受到了来自 ',
      acute.get_colored_name(),
      ' 期待的目光。',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('在人来人往的中庭，两个相爱的人彼此之间互相索取。');
    await era.printAndWait(
      '不再在乎周围的人的眼神，激烈的唾液交换着彼此相爱的契约。',
    );
    await acute.say_and_wait('……❤️');
    await era.printAndWait([
      '小巧的双手环抱着你的头，闪烁得桃红色目光，无论白日或是黑夜，都注释着 ',
      me.get_colored_name(),
      ' 一个人。',
    ]);
    await era.printAndWait([
      '而 ',
      me.get_colored_name(),
      '，同样还以最热烈的爱，最激情的吻——无论白天还是黑夜，彼此之间紧紧相拥——',
    ]);
    await era.printAndWait('………………');
    await say_by_passer_by_and_wait('空间转发者', '他们亲了多久？');
    await say_by_passer_by_and_wait('小红马用户', '不知道……应该有两小时了吧？');
    await say_by_passer_by_and_wait(
      '某关西' + acute.uma_sex_title,
      '嗨，破盖仔，天窦黑哇，嘛在这啵。咩哇，真噶蒜中庭开趴哈？',
    );
    await era.printAndWait('………………');
    await era.printAndWait('无论日夜轮转，春夏秋冬。');
    await era.printAndWait(['此后的人生，皆不在与', acute.sex, '分离。']);
    edu_marks.kiss = 1;
    hook.arg = false;
    return true;
  }
  hook.arg = !(await select_action_in_atrium());
  if (hook.arg) {
    await era.printAndWait([
      '中庭后面的枯树洞，常有',
      acute.uma_sex_title,
      '在比赛前，对着树洞呐喊自己的愿望来释放自身压力。',
    ]);
    await era.printAndWait([
      '但平日里看似总是悠闲的的 ',
      acute.get_colored_name(),
      '，似乎更喜欢坐在树洞里。',
    ]);
    await acute.say_and_wait('嗯……这里可真安静呢～');
    await era.printAndWait([
      acute.get_colored_name(),
      ' 依旧温和得说着，脸上的表情似乎产生了些许的变化……',
    ]);
  } else {
    await date_common(acute, me);
    if (era.get('love:100') >= 90) {
      await era.printAndWait('………………');
      await era.printAndWait('人来人往的中庭，相爱的二人，在角落中互相拥抱——');
      await era.printAndWait([
        '与 ',
        acute.get_colored_name(),
        ' 一同度过了极好的中午。',
      ]);
    } else {
      await era.printAndWait([
        '——感受到了来自 ',
        acute.get_colored_name(),
        ' 期待的目光。',
      ]);
      await era.printAndWait(
        '后面的内容，等「爱」更多了，再来探索吧。（苦笑）',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        '顺带一提——想要在人来人往的中庭跨出这一步，还需要如钢一般的意志——',
      );
    }
  }
};
