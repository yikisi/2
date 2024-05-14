const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
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
    await era.printAndWait(`地下通道内`);
    await chara_talk.say_and_wait(
      `虽然还是有些紧张，不过现在的话倒是完全放松下来了。`,
    );
    era.printButton(`就这样让后辈们看到丸善斯基帅气的一面吧！`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `嗯嗯,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }也要好好看着丸善斯基帅气的样子哦。`,
    );
    await chara_talk.say_and_wait(
      `而且，不仅有在背后一直支持着我的后辈们，还能感受到疾驰过程中的突破极限的风！`,
    );
    await chara_talk.say_and_wait(`说到这里，身体也开始兴奋起来了呢！`);
    await chara_talk.say_and_wait(
      `差不多到我出场的时候了，那么，训练员君，待会见！`,
    );
    era.printButton(`祝你武运昌隆`, 1);
    await era.input();
    await era.printAndWait(`点了点头后，${chara_talk.name}走向了赛场`);
  } else if (extra_flag.race === race_enum.asah_sta && edu_weeks < 95) {
    await print_event_name('朝日杯前・五挡加速', chara_talk);
    await era.printAndWait(`准备室内`);
    await chara_talk.say_and_wait(`哼哼哼~`);
    await era.printAndWait(`丸善斯基心情不错的在准备室里检查着决胜服。`);
    await me.say_and_wait(`丸善斯基，准备的怎么样了？`);
    await chara_talk.say_and_wait(`哎呀，是训练员君啊。`);
    await chara_talk.say_and_wait(`正如你所见，现在是马力全开的状态。`);
    era.printButton(`接下来也要好好享受比赛哦！`, 1);
    await era.input();
    await me.say_and_wait(
      `毕竟，我一直都想看到朝着未来奔跑的丸善斯基帅气的样子。`,
    );
    await chara_talk.say_and_wait(`嗯，训练员君就好好看着吧。`);
    await chara_talk.say_and_wait(`在赛场上奔跑的丸善斯基的模样。`);
    await chara_talk.say_and_wait(`那么，我出发了。`);
    era.printButton(`丸善斯基加油！`, 1);
    await era.input();
    await era.printAndWait(`做好准备的${chara_talk.name}走向了赛场。`);
    await me.say_and_wait(
      `接下来在观众席上为${chara_talk.sex_code - 1 ? '她' : '他'}加油吧`,
      true,
    );
  } else if (extra_flag.race === race_enum.sprg_sta && edu_weeks < 95) {
    await print_event_name(`春季锦标前・火焰兰`, chara_talk);
    await era.printAndWait(`准备室`);
    await era.printAndWait(
      `春季锦标，作为皋月赏的前哨战，许多马娘全力以赴的场所。`,
    );
    await era.printAndWait(`然而此时。`);
    await say_by_passer_by(
      `工作人员`,
      `已经确认过三遍了，包括丸善斯基在内，一共只有五名赛马娘。`,
    );
    await me.say_and_wait(`啊......谢谢。`);
    await era.printAndWait(
      `对于丸善斯基来说，在赛场上能享受到了快乐程度是与赛事等级以及参赛的马娘成正比。`,
    );
    await era.printAndWait(
      `换句话说，赛事等级越高，能参战的马娘人数以及质量也随之变高，丸善斯基也就愈加享受。`,
    );
    await era.printAndWait(`如果仅仅是这点还好。`);
    await say_by_passer_by(
      `马娘A`,
      `啊，我知道的，这场比赛一定是丸善斯基的胜利。`,
    );
    await say_by_passer_by(
      `马娘B`,
      `还有考虑的必要吗？如果不是丸善斯基获胜，我根本想不到其他人怎么战胜她。`,
    );
    await say_by_passer_by(
      `参赛的赛马娘A`,
      `已经无所谓了，反正接下来一定是丸善斯基的胜利，我还是节省体力准备之后的赛事吧。`,
    );
    await say_by_passer_by(`参赛的赛马娘A`, `说到底，没有人能战胜那种怪物。`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},我已经准备好了`,
    );
    await era.printAndWait(`不合时宜的声音打断了你的回忆。`);
    await me.say_and_wait(`嗯，这次也要好好享受比赛哦。`);
    await chara_talk.say_and_wait(
      `是啊，不过听说这次参加比赛的人数只满足了最低要求呢。`,
    );
    await chara_talk.say_and_wait(`如果参加比赛的大家更积极一点就好了。`);
    await era.printAndWait(
      `看上去丸善斯基的心情似乎不太好，耳朵也随之低垂了下来。`,
    );
    era.printButton(
      `丸善斯基，将我们之前的训练成果好好展示给在场的观众们看吧`,
      1,
    );
    era.printButton(`如果能看到丸善斯基的奔跑，我相信她们一定会改变主意的`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(
        `嗯，训练员君就在观众席上好好看着我的表现吧！`,
      );
      await chara_talk.say_and_wait(`好好将这份火红的身影记在心底！`);
    } else {
      await chara_talk.say_and_wait(`......`);
      await me.say_and_wait(
        `通过丸善斯基的背影，让那些有些泄气的大家们重新散发希望吧`,
      );
      await me.say_and_wait(`就像我们平时训练的那样。`);
      await chara_talk.say_and_wait(`没错！`);
      await era.printAndWait(`丸善斯基垂下的耳朵又笔直地竖了起来。`);
    }
    await era.printAndWait(
      `虽然还想继续说下去，但工作人员们调试麦克风的声音传到了准备室之中。`,
    );
    await chara_talk.say_and_wait(`差不多该到我出场的时候了，训练员君等会见！`);
    await me.say_and_wait(`为什么感到了一阵不安呢`, true);
    await era.printAndWait(
      `${me.name}将这份不安深深的埋进了心底,看着爱马走向了赛场`,
    );
  } else if (extra_flag.race === race_enum.radi_shi && edu_weeks < 95) {
    await print_event_name(`皐月賞前・`, chara_talk);
    await era.printAndWait(`比赛开始前·发布会上`);
    await say_by_passer_by(`记者A`, `非常荣幸能采访到丸善斯基小姐。`);
    await say_by_passer_by(`记者A`, `请问您这次的目标也是取得皋月赏的胜利吗？`);
    await chara_talk.say_and_wait(`是的，这是和负责的训练员商量之后的结果。`);
    await say_by_passer_by(
      `记者B`,
      `不好意思打扰一下，听说上次春季锦标报名的赛马娘数只满足了最低参与条件的5人。`,
    );
    await say_by_passer_by(
      `记者B`,
      `是否可以认为赛马娘们认为自己赢不了丸善斯基所以纷纷避战了呢？`,
    );
    await chara_talk.say_and_wait(
      `关于春季锦标相关问题请咨询负责训练员，这里不做表态。`,
    );
    await say_by_passer_by(
      `记者C`,
      `到我了，请问被称为超级跑车的您之后以无败三冠为目标参加德比吗？`,
    );
    await chara_talk.say_and_wait(`这是目前暂时定下的目标。`);
    await say_by_passer_by(`记者C`, `我明白了，非常感谢。`);
    await chara_talk.say_and_wait(`太客气了。`);
    era.drawLine({ content: '发布会结束后' });
    await era.printAndWait(`准备室\n`);
    await me.say_and_wait(`丸善斯基准备好了吗，接下来轮到你出场了。`);
    await chara_talk.say_and_wait(`已经准备好了哦。`);
    await me.say_and_wait(`就和往常一样，按照你的想法自由的奔跑吧。`);
    await chara_talk.say_and_wait(
      `哼哼，这次${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }一定会被我的奔跑所俘获的。`,
    );
    await chara_talk.say_and_wait(`真是期待着那一刻的到来呢——`);
    await chara_talk.say_and_wait(`啊，差不多该出发了。那么待会见！`);
    await me.say_and_wait(`一切顺利。`, true);
    await chara_talk.say_and_wait(`嗯。`);
    await era.printAndWait(`${chara_talk.name}走向了赛场。`);
    await me.say_and_wait(
      `......${chara_talk.name}，我会一直注视着你的。`,
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
