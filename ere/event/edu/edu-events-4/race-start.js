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
  const me = get_chara_talk(0),
    edu_weeks = era.get('cflag:4:育成回合计时');
  if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
    await print_event_name('出道战前・一切的起点', chara_talk);
    await era.printAndWait(`地下通道内`);
    await chara_talk.say_and_wait(
      `虽然还是有些紧张，不过现在的话倒是完全放松下来了。`,
    );
    era.printButton(`「就这样让后辈们看到丸善斯基帅气的一面吧！」`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `嗯嗯, ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'} 也要好好看着丸善斯基帅气的样子哦。`,
    );
    await chara_talk.say_and_wait(
      `而且，不仅有在背后一直支持着我的后辈们，还能感受到疾驰过程中的突破极限的风！`,
    );
    await chara_talk.say_and_wait(`说到这里，身体也开始兴奋起来了呢！`);
    await chara_talk.say_and_wait(
      `差不多到我出场的时候了，那么，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，待会见！`,
    );
    era.printButton(`「祝你武运昌隆」`, 1);
    await era.input();
    await era.printAndWait(`点了点头后，${chara_talk.name}走向了赛场`);
  } else if (extra_flag.race === race_enum.asah_sta && edu_weeks < 95) {
    await print_event_name('朝日杯前・五挡加速', chara_talk);
    await era.printAndWait(`准备室内`);
    await chara_talk.say_and_wait(`哼哼哼~`);
    await era.printAndWait(`丸善斯基心情不错的在准备室里检查着决胜服。`);
    await me.say_and_wait(`丸善斯基，准备的怎么样了？`);
    await chara_talk.say_and_wait(
      `哎呀，是 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'} 啊。`,
    );
    await chara_talk.say_and_wait(`正如你所见，现在是马力全开的状态。`);
    era.printButton(`「接下来也要好好享受比赛哦！」`, 1);
    await era.input();
    await me.say_and_wait(
      `毕竟，我一直都想看到朝着未来奔跑的丸善斯基帅气的样子。`,
    );
    await chara_talk.say_and_wait(
      `嗯，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }就好好看着吧。`,
    );
    await chara_talk.say_and_wait(`在赛场上奔跑的丸善斯基的模样。`);
    await chara_talk.say_and_wait(`那么，我出发了。`);
    era.printButton(`「丸善斯基加油！」`, 1);
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
      `春季锦标，作为皋月赏的前哨战，许多${chara_talk.get_uma_sex_title()}全力以赴的场所。`,
    );
    await era.printAndWait(`然而此时。`);
    await say_by_passer_by(
      `工作人员`,
      `已经确认过三遍了，包括丸善斯基在内，一共只有五名赛${chara_talk.get_uma_sex_title()}。`,
    );
    await me.say_and_wait(`啊……谢谢。`);
    await era.printAndWait(
      `对于丸善斯基来说，在赛场上能享受到了快乐程度是与赛事等级以及参赛的${chara_talk.get_uma_sex_title()}成正比。`,
    );
    await era.printAndWait(
      `换句话说，赛事等级越高，能参战的${chara_talk.get_uma_sex_title()}人数以及质量也随之变高，丸善斯基也就愈加享受。`,
    );
    await era.printAndWait(`如果仅仅是这点还好。`);
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}A`,
      `啊，我知道的，这场比赛一定是丸善斯基的胜利。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}B`,
      `还有考虑的必要吗？如果不是丸善斯基获胜，我根本想不到其他人怎么战胜${
        chara_talk.sex_code - 1 ? '她' : '他'
      }。`,
    );
    await say_by_passer_by(
      `参赛的赛${chara_talk.get_uma_sex_title()}A`,
      `已经无所谓了，反正接下来一定是丸善斯基的胜利，我还是节省体力准备之后的赛事吧。`,
    );
    await say_by_passer_by(
      `参赛的赛${chara_talk.get_uma_sex_title()}A`,
      `说到底，没有人能战胜那种怪物。`,
    );
    await chara_talk.say_and_wait(
      ` ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'} ,我已经准备好了`,
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
    era.printButton(
      `如果能看到丸善斯基的奔跑，我相信${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们一定会改变主意的`,
      2,
    );
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(
        `嗯，${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }就在观众席上好好看着我的表现吧！`,
      );
      await chara_talk.say_and_wait(`好好将这份火红的身影记在心底！`);
    } else {
      await chara_talk.say_and_wait(`……`);
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
    await chara_talk.say_and_wait(
      `差不多该到我出场的时候了，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }等会见！`,
    );
    await me.say_and_wait(`为什么感到了一阵不安呢`, true);
    await era.printAndWait(
      `${me.name}将这份不安深深的埋进了心底,看着爱马走向了赛场`,
    );
  } else if (extra_flag.race === race_enum.sats_sho && edu_weeks < 95) {
    await print_event_name(`皐月賞前・再一次`, chara_talk);
    await era.printAndWait(`比赛开始前·发布会上`);
    await say_by_passer_by(
      `记者A`,
      `非常荣幸能采访到丸善斯基${
        chara_talk.sex_code === 1 ? '先生' : '小姐'
      }。`,
    );
    await say_by_passer_by(`记者A`, `请问您这次的目标也是取得皋月赏的胜利吗？`);
    await chara_talk.say_and_wait(`是的，这是和负责的训练员商量之后的结果。`);
    await say_by_passer_by(
      `记者B`,
      `不好意思打扰一下，听说上次春季锦标报名的赛${chara_talk.get_uma_sex_title()}数只满足了最低参与条件的5人。`,
    );
    await say_by_passer_by(
      `记者B`,
      `是否可以认为赛${chara_talk.get_uma_sex_title()}们认为自己赢不了丸善斯基所以纷纷避战了呢？`,
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
    await me.say_and_wait(`……${chara_talk.name}，我会一直注视着你的。`, true);
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
  } else if (extra_flag.race === race_enum.radi_shi && edu_weeks < 95) {
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
    await chara_talk.say_and_wait(`真是令人怀念的衣服……不，没什么`);
    await era.printAndWait(`${chara_talk.name}穿上了略显紧绷的决胜服。`);
    await chara_talk.say_and_wait(
      `接下来一定要把胜利带给亲爱的${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }♪`,
    );
    await era.printAndWait(
      `任何想法都已经无所谓了，${chara_talk.name}走向了赛场。`,
    );
  } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 95) {
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
    era.printButton(`「唔」`, 1);
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
    era.printButton(`「${chara_talk.name}，这次一定会跑的非常开心」`, 1);
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
      `那么惯例的， ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'} 。`,
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
    era.printButton(`「我会一直看着你的」`, 1);
    await era.input();
    await chara_talk.say_and_wait(`那么最后一次♪`);
    await era.printAndWait(
      `依依不舍的分别之后，${chara_talk.name}走向了赛场。`,
    );
  } else if (extra_flag.race === race_enum.tenn_sho && edu_weeks > 95) {
    await print_event_name('天皇赏秋前・伊甸之梦', chara_talk);
    //todo 强敌：鲁铎象征(差) 速1700 力1200 耐1150 根1500 智1200 汝、皇帝の神威を見よ/汝等，瞻仰皇帝之神威吧 鎧袖一触/易如反掌 皇帝の眼差し/皇帝的视线 王手 优位形成 神速 光芒一閃
    await era.printAndWait(`与皇帝的第二次对决即将开始。`);
    await era.printAndWait(
      `作为丸善斯基与皇帝之间的第二次对决，对于观众们来说是空前盛大的盛况。`,
    );
    era.drawLine({ content: '准备室中' });
    era.printButton(`「让我看到最棒的背影吧」`, 1);
    await era.input();
    await chara_talk.say_and_wait(`能与小鲁铎同台竞技，毫无疑问是最棒的舞台♪`);
    era.printButton(`「有成功的把握吗？」`, 1);
    await era.input();
    await me.say_and_wait(
      `挑战赫赫有名的${chara_talk.get_uma_sex_title()}们，与${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们交流，对抗，决定胜负。`,
    );
    await me.say_and_wait(`有成功的把握吗？`);
    await era.printAndWait(`丸善斯基沉默了一会后，给出了答案。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }对在赛场之中奔跑的${chara_talk.get_uma_sex_title()}们怎么看的呢？`,
    );
    await me.say_and_wait(`为了在赛场上胜利，背后付出了汗水与努力。`);
    await me.say_and_wait(`可是。`);
    await chara_talk.say_and_wait(
      `是啊，只有一名${chara_talk.get_uma_sex_title()}能胜利。`,
    );
    await era.printAndWait(
      `你的眼前再次浮现出了学生会办公室，正中央的那副名言。`,
    );
    await me.say_and_wait(`一马当先，万马齐喑。`);
    await chara_talk.say_and_wait(
      `第一次见到的时候，我想了很久也没想明白该怎么理解。`,
    );
    await chara_talk.say_and_wait(
      `那些默默努力的${chara_talk.get_uma_sex_title()}们，只是因为失败了，努力就全部都被否定了。`,
    );
    await chara_talk.say_and_wait(
      `如果只有一名${chara_talk.get_uma_sex_title()}能够获胜的话，那么其他${chara_talk.get_uma_sex_title()}的努力不就全部白费了吗？`,
    );
    await chara_talk.say_and_wait(
      `如果是注定失败的结局，那从一开始就放弃转向其他方向才是明智的选择吧？`,
    );
    await chara_talk.say_and_wait(
      `——但是，奔跑才是${chara_talk.get_uma_sex_title()}的天性吧？`,
    );
    await chara_talk.say_and_wait(`起跑前紧张的等待着发令枪的响起。`);
    await chara_talk.say_and_wait(
      `奔跑中孤独面对未知的世界，但并没有想象中那么害怕。`,
    );
    await chara_talk.say_and_wait(`冲刺时后方传来的阵阵踩踏声。`);
    await chara_talk.say_and_wait(
      `想要超越前方的背影，想要跑得更快，想要比${
        chara_talk.sex_code - 1 ? '她' : '他'
      }迈的更远。`,
    );
    await chara_talk.say_and_wait(`最后冲线的那一刻，反而不是那么重要了。`);
    await chara_talk.say_and_wait(
      `抱着这样的想法，然后取得成功，就这样让后辈们在看不清前方的道路时，按照这条路。`,
    );
    await chara_talk.say_and_wait(
      `被证明是可以走下去的道路，抱着试一试说不定能行的态度。`,
    );
    await chara_talk.say_and_wait(
      `所以我的答案是——无论成败，这场冒险都有值得去做的理由。`,
    );
    await era.printAndWait(`宣布着比赛即将开始的广播响起。`);
    await chara_talk.say_and_wait(`抱歉，一不小心就说的有点多了呢。`);
    await era.printAndWait(`稍微有点不好意思的丸善斯基脸红了。`);
    await era.printAndWait(`从招募${chara_talk.name}开始经历了这么多的事件。`);
    await era.printAndWait(
      `哭泣也好，欢笑也好，哀怮也好，欢喜也好，信任也好，背叛也好。`,
    );
    await era.printAndWait(`已经全部经历过一边了。`);
    await era.printAndWait(`对于${chara_talk.name}来说————`);
    era.printButton(`「一起出发吧。」`, 1);
    await era.input();
    era.printButton(`「让我们写下属于我们自己的故事吧。」`, 1);
    await era.input();
    await chara_talk.say_and_wait(`……呵呵♪`);
    await era.printAndWait(`丸善斯基露出了笑容。`);
    await chara_talk.say_and_wait(`无论接下来发生什么。你都要一直在我身边哦？`);
    await chara_talk.say_and_wait(`欢笑也好，哭泣也好。都要一起面对哦？`);
    await era.printAndWait(`恐怕是你记忆之中最美丽的笑容。`);
    await era.printAndWait(`丸善斯基走向了赛场。`);
    await era.printAndWait(`不远处，皇帝正等待着挑战者的到来。`);
    await era.printAndWait(`你祈祷着丸善斯基的胜利。`);
    await era.printAndWait(`时间，在此流转。`);
  } else {
    await print_event_name('比赛开始', chara_talk);
    await era.printAndWait(`地下通道内`);
    await chara_talk.say_and_wait(`今天的比赛也要让后辈们看到我帅气的背影`);
    era.printButton(`「${chara_talk.name}加油」`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `呵呵,谢谢 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'} 了`,
    );
    await chara_talk.say_and_wait(
      `不要被${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}的背影迷上了哟~`,
    );
    await era.printAndWait(`你目送着${chara_talk.name}走向了赛道`);
  }
};
