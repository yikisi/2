const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const chara_talk = new CharaTalk(4);
/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const chara17_talk = get_chara_talk(17),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:4:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('出道战前・一切的起点', chara_talk);
    era.drawLine({ content: '比赛开始前，地下通道内' });
    await me.say_and_wait(
      `${
        chara_talk.name
      }加油,一定要让后辈${chara_talk.get_uma_sex_title()}们看到你帅气的背影哦`,
    );
    await chara_talk.say_and_wait(
      `这不是当然的事情嘛,现在的我已经做好享受这场跑步的快乐了。`,
    );
    await chara_talk.say_and_wait(
      `一想到能让后辈们看到我帅气的背影,就已经止不住的兴奋起来了！`,
    );
    await chara_talk.say_and_wait(
      `啊，差不多到我出场的时候了，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }待会见！`,
    );
    era.printButton(`祝你武运昌隆`, 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}走向了赛场`);
    await me.say_and_wait(`接下来去找座位吧`, true);
  } else if (extra_flag.race === race_enum.asah_sta && edu_weeks < 95) {
    await print_event_name('朝日杯前・马力全开', chara_talk);
    await era.printAndWait(
      `按照预定计划,你和${chara_talk.name}开始挑战G1级别的赛事——朝日杯`,
    );
    era.drawLine({ content: '比赛开始前，准备室内' });
    await era.printAndWait(
      `换上决胜服跃跃欲试的${chara_talk.name}和一脸紧张的你形成了鲜明的对比。`,
    );
    await me.say_and_wait(`深呼吸，放轻松放轻松`, true);
    await me.say_and_wait(`现在就是检测平时训练成果的时候了`, true);
    await era.printAndWait(
      `也许是参加G1级赛事的缘故,${chara_talk.name}显得比平时还要兴奋`,
    );
    await chara_talk.say_and_wait(
      `能够与更强的${chara_talk.get_uma_sex_title()}们一决高下,心情难免有些激动呢⭐`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }一定要目不转睛的盯着我看哦?`,
    );
    era.printButton(`嗯,希望努力的丸善能让我也感受到风的吹拂`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `今天的状态意外的很好呢,总有种可以看到新世界的感觉呢。`,
    );
    await chara_talk.say_and_wait(`那么，我出发了。`);
    await era.printAndWait(`做好准备的${chara_talk.name}走向了赛场。`);
    await me.say_and_wait(
      `接下来在观众席上为${chara_talk.sex_code - 1 ? '她' : '他'}加油吧`,
      true,
    );
  } else if (extra_flag.race === race_enum.sprg_sta && edu_weeks < 95) {
    await print_event_name(
      `春季锦标前・热情似火的${chara_talk.name}`,
      chara_talk,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},我已经准备好了`,
    );
    await era.printAndWait(
      `对于赛${chara_talk.get_uma_sex_title()}来说,经典年这一年非常重要`,
    );
    await era.printAndWait(
      `一般有两条道路选择,追求无败的经典三冠与重视优雅与气质的皇冠路线`,
    );
    await era.printAndWait(`在与${chara_talk.name}商量之后`);
    await chara_talk.say_and_wait(
      `如果选择经典三冠路线的话说不定能享受到更多的快乐。`,
    );
    await era.printAndWait(
      `在尊重自己爱马的想法之后，${me.name}决定选择以春季锦标优胜作为参加皋月赏的前哨战`,
    );
    era.printButton(`${chara_talk.name}这次也要好好享受比赛哦`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `真期待这次一起奔跑的${chara_talk.get_uma_sex_title()}们呢`,
    );
    await me.say_and_wait(`为什么感到了一阵不安呢`, true);
    await era.printAndWait(
      `${me.name}将这份不安深深的埋进了心底,看着爱马走向了赛场`,
    );
  } else if (extra_flag.race === race_enum.radi_shi && edu_weeks < 95) {
    await print_event_name(
      `皐月賞前・重新振作起来的${chara_talk.name}`,
      chara_talk,
    );
    era.drawLine({ content: '比赛开始前，记者会上' });
    await era.printAndWait(
      `记者A「${chara_talk.name}小姐,听说上次比赛的时候只有5人参赛是吗？」`,
    );
    await chara_talk.say_and_wait(`没错是这样的。`);
    await era.printAndWait(`记者B「看来这次比赛的话也是势在必得呢」`);
    await era.printAndWait(
      `记者C「不愧是被称为超级跑车的${chara_talk.get_uma_sex_title()}呢」`,
    );
    await era.printAndWait(`记者A「比赛结束后也请给我们采访的机会」`);
    await era.printAndWait(
      `记者A「不仅是我们，作为观众的大家也觉得${chara_talk.name}的胜率是最高的。」`,
    );
    await era.printAndWait(
      `记者B「毕竟比起其他参赛者的话，${chara_talk.name}这次也能将${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们远远的甩到后面吧」`,
    );
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(`记者C「那么我们就拭目以待了呦」`);
    await era.printAndWait(`哈哈哈哈哈哈哈哈哈`);
    await me.say_and_wait(
      `${chara_talk.name}接下来要为比赛做好充足准备，大家如果有什么问题的话可以像我这个训练员提出问题。`,
    );
    era.drawLine({ content: '发布会结束后' });
    await me.say_and_wait(`${chara_talk.name}好好享受这场难得的经典赛事吧`);
    await chara_talk.say_and_wait(`如果训练员这么想的话，我会加油的`);
    await me.say_and_wait(`${chara_talk.name}似乎有些驻足不前了`, true);
    await me.say_and_wait(
      `比起荣誉的话，${chara_talk.name}如果能好好享受的话，我也大饱眼福哦`,
    );
    await chara_talk.say_and_wait(
      `呵呵，那${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }就等着瞧吧。`,
    );
    await chara_talk.say_and_wait(`啊，差不多该出发了呢`);
    await me.say_and_wait(`祝你一切顺利`, true);
    await chara_talk.say_and_wait(`嗯`);
    await era.printAndWait(`${chara_talk.name}走向了赛场。`);
    await me.say_and_wait(
      `......${chara_talk.name}，我会一直见证你的脚步`,
      true,
    );
  } else if (extra_flag.race === race_enum.toky_yus && edu_weeks < 95) {
    await print_event_name(`日本德比前・${chara_talk.name}`, chara_talk);
    await era.printAndWait(
      `应${chara_talk.name}希望能在更大的舞台上体验到不一样的感受，于是你们决定参加日本德比。`,
    );
    await era.printAndWait(`训练室内`);
    await chara_talk.say_and_wait(
      `不愧是德比比赛，前来参加的${chara_talk.get_uma_sex_title()}们水平都很高呢`,
    );
    await era.printAndWait(
      `作为经典三冠之中的第二冠，东京优骏(日本德比)素有最幸运的${chara_talk.get_uma_sex_title()}才能获胜的俗称。`,
    );
    await era.printAndWait(
      `即使是实力强大的${chara_talk.get_uma_sex_title()}，在这一关翻车的也比比皆是，但对${
        chara_talk.name
      }来说`,
    );
    await era.printAndWait(`${chara_talk.name}与平常的表现没有什么区别。`);
    await era.printAndWait(`也许这就是纯粹为了享受比赛而来的吧。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },接下来要好好地看着我的身影哦。`,
    );
    await era.printAndWait(`${chara_talk.name}做好准备后，走向了地下通道。`);
    await me.say_and_wait(`我也差不多该去观众席了。`);
  } else if (extra_flag.race === race_enum.tana_sho && edu_weeks < 95) {
    await print_event_name('日经广播赏前・为了何人的奔跑', chara_talk);
    await era.printAndWait(`训练室中`);
    await era.printAndWait(
      `德比之后${chara_talk.name}将对后辈们的热情与爱全部转移到了你的身上`,
    );
    await era.printAndWait(`拜此所赐你的胃也更加痛苦不堪`);
    await me.say_and_wait(`好不容易才说服${chara_talk.name}参加这场比赛`, true);
    await era.printAndWait(
      `在试探性的向${
        chara_talk.name
      }提出参加七夕赏时，默默将手上的椰果饮料放在训练室后关门离开的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }让你的良心开始拷问自己。`,
    );
    await era.printAndWait(
      `在多次打电话未果之后才收到了${chara_talk.name}的同意。`,
    );
    await era.printAndWait(
      `看着眼前的${chara_talk.name}对着全身镜调整着自己的状态。`,
    );
    await me.say_and_wait(
      `现在的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }也在动摇着吧，如果再经受一次轻微的打击的话，${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的理想恐怕就会动摇了`,
      true,
    );
    await me.say_and_wait(
      `我真的应该.....不，一定，一定这是最好的办法了`,
      true,
    );
    await chara_talk.say_and_wait(`真是令人怀念的衣服......不，没什么`);
    await era.printAndWait(`${chara_talk.name}穿上了略显紧绷的决胜服。`);
    await chara_talk.say_and_wait(
      `接下来一定要把胜利带给亲爱的${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }♪`,
    );
    await era.printAndWait(
      `任何想法都已经无所谓了，${chara_talk.name}走向了赛场。`,
    );
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 95) {
    await print_event_name('有马纪念前・最盛大的舞台', chara_talk);
    await era.printAndWait(
      `有马纪念是日本赛事之中最盛大的一场，众多的赛${chara_talk.get_uma_sex_title()}通过投票获得出场许可。`,
    );
    await era.printAndWait(
      `被称为超级跑车的拥有众多人气的${chara_talk.name}自然也达到了入场的许可。`,
    );
    era.drawLine({ content: '准备室中' });
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，这下要让后辈们好好看着我的背影哦`,
    );
    era.printButton(`唔`, 1);
    await era.input();
    await era.printAndWait(
      `在${chara_talk.name}摆脱阴影之后，以国内最大的舞台——有马纪念为目标，你们开始了练习。`,
    );
    await era.printAndWait(
      `作为少数在经典年就掌握了领域的${chara_talk.get_uma_sex_title()}，或许在参加经典年限定的赛事能稳压一头，不过在强敌如云的有马纪念上`,
    );
    await me.say_and_wait(`只要${chara_talk.name}高兴就好了`, true);
    await era.printAndWait(`这么想着，最后确认了没有遗漏之后。`);
    await era.printAndWait(`嘴唇传来了湿润的触感。`);
    await chara_talk.say_and_wait(`这样的话油门也加满了`);
    await chara_talk.say_and_wait(
      `那么，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }我出发了。`,
    );
    await era.printAndWait(
      `带着${chara_talk.name}独有的活力，${
        chara_talk.sex_code - 1 ? '她' : '他'
      }走上了赛场。`,
    );
  } else if (extra_flag.race === race_enum.sank_hai && edu_weeks > 95) {
    await print_event_name('大阪杯前・柔和之风', chara_talk);
    await era.printAndWait(`与皇帝之间的对决即将在大阪杯开始`);
    await era.printAndWait(`媒体将这件事渲染为王道与霸道之间的对决。`);
    await era.printAndWait(`大阪杯的关注人数已经远远超越了去年的有马纪念。`);
    await era.printAndWait(
      `站台上全是关注这场传奇大赛的粉丝，甚至连过道都占满了人。`,
    );
    era.drawLine({ content: '准备室中' });
    await chara_talk.say_and_wait(`哼哼哼~`);
    await era.printAndWait(`如此紧张的时刻${chara_talk.name}依然相当从容。`);
    era.printButton(`${chara_talk.name}，这次一定会跑的非常开心`, 1);
    await era.input();
    await era.printAndWait(
      `没有比皇帝登场更能让${chara_talk.name}对比赛感到兴奋的事情了。`,
    );
    await chara_talk.say_and_wait(`那么，一切都准备OK了。`);
    await chara_talk.say_and_wait(`现在该去享受更加盛大的比赛了。`);
    await era.printAndWait(
      `正准备帮${chara_talk.name}开门的你却碰到了同样的纤细小手`,
    );
    await era.printAndWait(
      `嘴唇传来了潮湿的气息，柔软的舌头相互交织在一起，又依依不舍的分开。`,
    );
    await chara_talk.say_and_wait(`差点就忘了最重要的事情呢。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }一定要注视着我哦。`,
    );
    await era.printAndWait(`${chara_talk.name}走向了赛场`);
  } else if (extra_flag.race === race_enum.yasu_kin && edu_weeks > 95) {
    await print_event_name('安田纪念前・生机勃发', chara_talk);
    await era.printAndWait(`${chara_talk.name}追逐着自由之风来到了东京赛马场`);
    await chara_talk.say_and_wait(`今天的状态非常不错哦。`);
    await era.printAndWait(
      `帮${chara_talk.name}抚平了衣服上突起的褶皱后，超级跑车已经准备就绪`,
    );
    await chara_talk.say_and_wait(
      `后辈们现在也希望追逐着我的背影然后超越过去呢。`,
    );
    await era.printAndWait(
      `相比于比赛的胜利，${chara_talk.name}更希望亲爱的后辈们能超越自己与旧时代的荣耀`,
    );
    await chara_talk.say_and_wait(`所以我现在也燃烧起来了呢。`);
    await chara_talk.say_and_wait(
      `那么惯例的，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}。`,
    );
    await era.printAndWait(
      `轻搂着${chara_talk.name}纤弱的腰肢，你们沉浸在幸福的时刻之中`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，要一直一直盯着我的背影看哦。`,
    );
    await chara_talk.say_and_wait(
      `看着其他${chara_talk.get_uma_sex_title()}的话，就算是${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我也会吃醋的。`,
    );
    era.printButton(`我会一直看着你的`, 1);
    await era.input();
    await chara_talk.say_and_wait(`那么最后一次♪`);
    await era.printAndWait(
      `依依不舍的分别之后，${chara_talk.name}走向了赛场。`,
    );
  } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks > 95) {
    await print_event_name('天皇赏秋前・伊甸之梦', chara_talk);
    await era.printAndWait(`与皇帝的第二次对决即将开始。`);
    await era.printAndWait(`————又为彼此理想殊死一战`);
    era.drawLine({ content: '准备室中' });
    await chara_talk.say_and_wait(
      `准备好了！这下一定会让小鲁铎看到最棒的风景。`,
    );
    await era.printAndWait(`作为皇帝的复仇之战，虽不知对方锻炼到了何种程度。`);
    await era.printAndWait(`但你们同样也抱着最高的敬意。`);
    await era.printAndWait(
      `${chara_talk.name}和皇帝都认定自己走的道路是正确的。`,
    );
    await era.printAndWait(`双方都竭尽所能证明自己的道路比对方要更加自洽。`);
    await era.printAndWait(`所以一切的结果到最后都会收敛到唯一的选择————`);
    await chara17_talk.say_and_wait(
      `${chara_talk.name}，准备好迎接吾的怒火了吗？`,
    );
    await era.printAndWait(`鲁铎象征不知何时来到了准备室中。`);
    await era.printAndWait(`于赛场之上竭尽全力的对决。`);
    await era.printAndWait(`一切对一切，胜负即为正误，存亡即为神裁。`);
    await chara17_talk.say_and_wait(
      `身为皇帝，吾将领导所有${chara_talk.get_uma_sex_title()}前往充满荣耀的道路。`,
    );
    await chara17_talk.say_and_wait(`你引以为傲的自由与欲望。`);
    await chara17_talk.say_and_wait(`将在皇帝的神威之下粉碎，奠定千秋霸业！`);
    await chara_talk.say_and_wait(
      `亲爱的鲁铎象征，此时此刻我不是作为前辈站在这里。`,
    );
    await chara_talk.say_and_wait(`而是作为友人，作为对手身怀敬意进行决斗`);
    await chara_talk.say_and_wait(`————就用这份红焰。`);
    await chara_talk.say_and_wait(`为了彼此的理想。`);
    await era.printAndWait(
      `沉默不语，静静听完${chara_talk.name}讲述的皇帝笑了。`,
    );
    await chara17_talk.say_and_wait(`可以，这才适合作为皇帝——鲁铎象征的对手`);
    await chara17_talk.say_and_wait(
      `作为皇帝的矜持，在决斗开始之前，还有什么想对你的侍从说的吗？`,
    );
    await era.printAndWait(
      `对于你来说，从招募${chara_talk.name}或者说是${chara_talk.name}选择了你开始`,
    );
    await era.printAndWait(
      `就必定会遇到最后的考验，现实打开了${chara_talk.name}的理想国，露出了狰狞的嘴脸。`,
    );
    await era.printAndWait(`而对于${chara_talk.name}来说————`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，一起出发吧`,
    );
    era.printButton(`无论如何，我都会陪你到最后`, 1);
    await era.input();
    await chara_talk.say_and_wait(`最后的道路一定是通往伊甸的门扉`);
    await chara_talk.say_and_wait(`我坚信着自己的选择没有错误`);
    era.printButton(`无论这条道路的最后是正确还是破灭`, 1);
    await era.input();
    era.printButton(`我都会陪你到最后，毕竟你在身边即使身处地狱也为天堂。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，我爱你。`,
    );
    await era.printAndWait(
      `恐怕是${chara_talk.name}在你记忆之中最美丽的笑容。`,
    );
    await era.printAndWait(`与沉默不语的皇帝一起，双方走向了战场。`);
    await era.printAndWait(
      `两人之间的对决究竟以何人的理想为结局，恐怕只有三女神才能知道了。`,
    );
  } else {
    await print_event_name('比赛开始', chara_talk);
    await era.printAndWait(`地下通道内`);
    await chara_talk.say_and_wait(`今天的比赛也要让后辈们看到我帅气的背影`);
    era.printButton(`${chara_talk.name}加油`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `呵呵,谢谢${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}了`,
    );
    await chara_talk.say_and_wait(
      `不要被${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}的背影迷上了哟~`,
    );
    await era.printAndWait(`你目送着${chara_talk.name}走向了赛道`);
  }
};
