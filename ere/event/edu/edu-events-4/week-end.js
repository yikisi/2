const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const CharaTalk = require('#/utils/chara-talk');
const chara_talk = new CharaTalk(4);
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const MaEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-4');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { location_enum } = require('#/data/locations');
const { add_event } = require('#/event/queue');
const event_hooks = require('#/data/event/event-hooks');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
/**
 * @param {HookArg} hook
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async function (hook, __, event_object) {
  const chara17_talk = get_chara_talk(17),
    chara301_talk = get_chara_talk(301),
    me = get_chara_talk(0),
    event_marks = new MaEventMarks(),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:4:育成回合计时');
  let wait_flag = false;
  if (event_marks.beginning === 1) {
    event_marks.beginning++;
    await print_event_name(`${chara_talk.name}的初次登场`, chara_talk);
    await era.printAndWait(`训练场`);
    await me.say_and_wait(`${chara_talk.name}希望和我在训练场见面吗？`);
    era.drawLine({ content: '训练室' });
    await era.printAndWait(
      `打开训练室的门,扫了一圈之后目光定格在了办公桌上的信封。`,
    );
    await me.say_and_wait(`难道是写给我的情书吗？`, true);
    await era.printAndWait(
      `走进之后拿起信封扫了眼右下角,不出意外看到了自己的名字。`,
    );
    await me.say_and_wait(
      `听说${chara_talk.name}意外喜欢复古的潮流,所以的话`,
      true,
    );
    await chara_talk.say_and_wait(`训练员君,可以来训练场一趟吗？`);
    await me.say_and_wait(`以书信代替短信进行交流,意外的很有新意啊`, true);
    await me.say_and_wait(
      `毕竟是接下来三年朝夕相处的同伴,所以慎重一点也没错吧......诶，还有唇印吗?`,
      true,
    );
    await me.say_and_wait(
      `既然是作为训练员与担当${chara_talk.get_uma_sex_title()}的初次见面,这个珍贵的回忆就作为收藏好好收起来吧`,
    );
    await era.printAndWait(
      `你将信封小心翼翼的收在了抽屉后。强行按捺住因激动而微微颤抖的自己`,
    );
    await me.say_and_wait(
      `给我冷静下来，这是${chara_talk.name}对你的第一个考验`,
    );
    await me.say_and_wait(
      `连这个都处理不了你怎么成为引导${chara_talk.sex}的值得信赖的训练员?`,
    );
    await era.printAndWait(
      `低声呵斥不成熟的自己,你重新整理了一遍作为训练员的制服。`,
    );
    await me.say_and_wait(`我想要得到${chara_talk.sex}`, true);
    await era.printAndWait(
      `你猛的甩了甩头,想要将这个灰色的欲望扫到记忆的角落之中`,
    );
    await me.say_and_wait(`那么去和${chara_talk.name}吧。`);
    era.drawLine();
    await era.printAndWait(
      `沉闷的草场被充满生机的春风所吹拂,作为热情的火焰化身——${chara_talk.name}正快乐的奔跑在草地上。`,
    );
    await me.say_and_wait(
      `真是美丽的身影啊,果然作为${chara_talk.get_uma_sex_title()}的魅力就是自由自在的奔跑。`,
      true,
    );
    await me.say_and_wait(`我能跟上风的节奏吗......不,你在想什么呢`, true);
    await era.printAndWait(`苦笑着摇了摇头再次抬头看向火焰时`);
    await me.say_and_wait(`那个是!`);
    await era.printAndWait(
      `昏暗的想法瞬间被那道狂风所吹散,你的视线被那道身影所占据。`,
    );
    await era.printAndWait(`比起之前所吹拂的春风,你感受到了另一种东西——`);
    await me.say_and_wait(`如果我没看错的话，那道身影蕴藏着火焰`, true);
    await me.say_and_wait(
      `尚未参加出道战的${
        chara_talk.sex
      }已经拥有能与经典级${chara_talk.get_uma_sex_title()}一较高下的水准了`,
      true,
    );
    await era.printAndWait(`不知为何感到了莫名的害怕。`);
    await me.say_and_wait(`我该怎么与这团火焰共舞呢？`, true);
    await era.printAndWait(
      `担当${chara_talk.get_uma_sex_title()}越是优秀,对训练员的能力要求就越严苛。`,
    );
    await era.printAndWait(`不过,想要守护那道身影的决意却没有改变。`);
    await me.say_and_wait(`我该怎么做才能让${chara_talk.name}注视着我呢?`);
    await chara_talk.say_and_wait(`先从了解彼此开始吧？`);
    await era.printAndWait(`身边传来了温柔的声音。`);
    await me.say_and_wait(
      `嗯，没错，先和${chara_talk.sex}彼此了解......呜哇，${chara_talk.name}什么时候来的?!`,
    );
    await era.printAndWait(
      `像是被窥视到了内心的想法一样，你下意识的向声音来源望去`,
    );
    await era.printAndWait(`却看到了那翠蓝色的清澈双眼。`);
    await chara_talk.say_and_wait(
      `训练员君这么在意我,${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }真的很开心哦。`,
    );
    await era.printAndWait(
      `你的头被温柔的抚摸着,${chara_talk.name}身上特有的香味让你不禁脸红心跳起来`,
    );
    await chara_talk.say_and_wait(`真是抱歉,不小心把你当作那些后辈们看待了。`);
    await era.printAndWait(
      `${chara_talk.name}像是才意识到眼前的不是平时的后辈,而是较为陌生的训练员,惊讶的看着你。`,
    );
    await me.say_and_wait(
      `${chara_talk.name}的手很温柔呢,不如说更想了解${chara_talk.sex}本人了。`,
    );
    era.printButton(`让我们一起享受风的吹拂吧,${chara_talk.name}请多指教`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `从今天的训练开始互相了解彼此效果更好哦,请多指教了训练员君。`,
    );
    await era.printAndWait(`${chara_talk.name}似乎很开心的抖动着耳朵和尾巴。`);
    await era.printAndWait(`你与${chara_talk.name}的第一次训练开始了。`);
    wait_flag = get_attr_and_print_in_event(4, undefined, 120) || wait_flag;
  } else if (event_marks.sister_annoyance === 1) {
    event_marks.sister_annoyance++;
    await print_event_name(
      `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}的烦恼`,
      chara_talk,
    );
    era.drawLine({ content: '天台' });
    era.printButton(`差点就迟到了`, 1);
    await era.input();
    await era.printAndWait(
      `虽然在胜者舞台结束之后连忙开车赶回来，却仍然踩着约定的时刻赶到`,
    );
    await era.printAndWait(
      `${chara_talk.name}的演出以胜利落幕，其本人看上去也没有任何区别`,
    );
    await me.say_and_wait(`${chara_talk.sex}开始怀疑起自己了。`, true);
    await era.printAndWait(
      `没有换回校服，就这样穿着决胜服看着天空之中的星星。`,
    );
    await era.printAndWait(
      `作为${chara_talk.name}的专属训练员,你相比与其他人更了解${chara_talk.name}。`,
    );
    await era.printAndWait(
      `虽然平时努力扮演着大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }的角色，但内心深处还是个敏感细腻的${chara_talk.get_teen_sex_title()}。`,
    );
    await era.printAndWait(
      `作为理想过于完美的梦想家，现实只是不轻不重的敲了敲理想国的门槛也是一件好事。`,
    );
    await me.say_and_wait(`希望${chara_talk.sex}能顺利度过。`, true);
    await me.say_and_wait(`抱歉我来晚了。`);
    await chara_talk.say_and_wait(`没关系,我也是刚刚才到。`);
    await era.printAndWait(`你顺势也靠在了栏杆之上`);
    await me.say_and_wait(`晚风吹拂得很舒服呢。`);
    await me.say_and_wait(`${chara_talk.name}也是这么想的吗？`);
    await chara_talk.say_and_wait(`......是啊。`);
    await era.printAndWait(`${chara_talk.name}的声音似乎显得很失落。`);
    await me.say_and_wait(`如果遇到什么麻烦的话，向我倾诉也没问题的。`);
    await era.printAndWait(
      `${chara_talk.name}的耳朵立刻竖了起来，在几个深呼吸后`,
    );
    await chara_talk.say_and_wait(
      `训练员君，为什么我现在觉得跑步这件事不那么开心了呢？`,
    ); //${chara_talk.name}的理想是自己的背影引导更多的${chara_talk.get_uma_sex_title()}奔跑，现实使${chara_talk.name}产生了动摇
    //在一种强有力情感或者事实的打破${chara_talk.sex}的感情保护伞之前，${chara_talk.sex}必须不断地从外界寻求认可，通过不断的赞许维持自己前进的动力，而一旦遭受挫折，便可能一发而不可收拾。
    await chara_talk.say_and_wait(
      `比赛之前跑步的时候一直都觉得很开心,可是现在跑步的时候已经感受不到那种快乐了`,
    );
    era.printButton(
      `虽然有些${chara_talk.get_uma_sex_title()}们无法追上你的速度，但更多的${chara_talk.get_uma_sex_title()}们实际上因为你的奔跑对跑步产生了向往。`,
      1,
    );
    await era.input();
    era.printButton(
      `所以丸善${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }不需要对自己太过贬低哦`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(`训练员君，谢谢你我现在好多了`);
    await era.printAndWait(`${chara_talk.name}的气势又恢复回来了。`);
    await chara_talk.say_and_wait(
      `训练员君，刚刚是叫我${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }吗？`,
    );
    era.printButton(`？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `那么${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我现在要好好考虑怎么面对可爱的弟弟君了。`,
    );
    await era.printAndWait(
      `${chara_talk.name}打量你的眼神看起来像是发现了很有趣的玩具。`,
    );
    await chara_talk.say_and_wait(`那么接下来也请多指教了哦，训练员君`);
    await me.say_and_wait(`真是松了一口气啊`, true);
    await era.printAndWait(`在谈笑之中你们向着皋月赏继续前进了。`);
  } else if (edu_weeks === 47 + 18) {
    await print_event_name(`过于自由的${chara_talk.name}`, chara_talk);
    era.drawLine({ content: '训练员宿舍' });
    await me.say_and_wait(`接下来的训练计划就暂时写到这里吧`, true);
    await era.printAndWait(
      `轻轻拍了拍自己的脸，少许的疼痛感刺激着疲惫的神经。`,
    );
    await me.say_and_wait(`已经快到12点了吗`, true);
    await era.printAndWait(
      `在保存了文件之后，一直紧绷的神经终于可以放松下来了。`,
    );
    await me.say_and_wait(`等会洗个澡就睡觉吧`, true);
    await era.printAndWait(`嗡嗡嗡`);
    await me.say_and_wait(`这种时候骚扰电话也不会打过来吧`, true);
    await era.printAndWait(`你的视线却被屏幕上的联系人所吸引住了。`);
    await me.say_and_wait(`${chara_talk.name}？`);
    await era.printAndWait(
      `按下收听键，${chara_talk.name}充满活力的声音从电话中传来。`,
    );
    await chara_talk.say_and_wait(`训练员君，现在天气真不错呢？`);
    await me.say_and_wait(`我这边的话除了看惯了的风景以外也没有什么特别的地方`);
    await chara_talk.say_and_wait(
      `这样吗？我这边的话能看到特雷森学院的轮廓呢，夜晚的学院看起来也很不错呢。`,
    );
    await chara_talk.say_and_wait(
      `没关系的，即使厚厚的乌云把月亮遮住，${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我也可以一口气把乌云吹飞⭐`,
    );
    await me.say_and_wait(`这么晚了还在外面闲逛吗？`);
    await chara_talk.say_and_wait(
      `不知道为什么心情十分雀跃所幸就和小塔一起出来感受风的律动呢`,
    );
    await me.say_and_wait(
      `${chara_talk.name}不好好休息明天会失眠的，现在赶快回去睡觉。`,
    );
    await chara_talk.say_and_wait(
      `训练员君真是扫兴，难得我打算约你出来一起兜风呢`,
    );
    await me.say_and_wait(`你现在在哪里我马上过来`);
    await era.printAndWait(
      `不等对方回答连忙换上穿惯的训练员制服，打开房门之时`,
    );
    await chara_talk.say_and_wait(`...我已经到门口了`);
    await era.printAndWait(`却从翠色的瞳孔之中看到了自己的惊愕`);
    await chara_talk.say_and_wait(`训练员君...`);
    era.drawLine();
    await chara_talk.say_and_wait(`训练员君原来住在这种宿舍里吗？`);
    await era.printAndWait(`${chara_talk.name}止不住兴奋的看着家具的布置。`);
    await me.say_and_wait(`你喜欢喝果汁还是牛奶？`);
    await chara_talk.say_and_wait(`哎，没有啤酒吗？`);
    await era.printAndWait(`你无视了对方的疑问，再次重复了一遍。`);
    await chara_talk.say_and_wait(`嗯，还是果汁吧。`);
    await era.printAndWait(
      `你将桌子稍微收拾了一下腾出了一块空间招待着不请自来的客人。`,
    );
    await chara_talk.say_and_wait(`训练员君真是温柔呢。`);
    await era.printAndWait(
      `${chara_talk.name}小口小口的吮吸着果汁，你忍不住叹了口气。`,
    );
    await era.printAndWait(
      `这么晚让${chara_talk.sex}一个人回去也有些危险，但也不能随便收留学生留宿。`,
    );
    await me.say_and_wait(`我该怎么办`, true);
    await chara_talk.say_and_wait(`训练员君脸色看起来不太好哦。`);
    await me.say_and_wait(
      `刚刚在苦恼下一周的训练方案有什么需要改进的地方，所以脸色不太好。`,
      true,
    );
    await chara_talk.say_and_wait(
      `辛苦了，${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我真感动呢。`,
    );
    //训练员君平时不会说这么多话，所以一定是在隐瞒什么
    await me.say_and_wait(
      `如果真意识到我很操劳的话以后就不要在深夜飙车了，你知道我有多担心你吗？`,
    );
    await era.printAndWait(
      `因为过于烦躁于是脱口而出，但刚说出口下一秒就开始后悔了。`,
    );
    await era.printAndWait(
      `${chara_talk.name}显然也是被吓了一跳，手中的果汁也差点拿不稳了。`,
    );
    await chara_talk.say_and_wait(`对不起，以后不会再这么做了。`); //训练员君是在生我的气吗？
    await era.printAndWait(
      `你看着${chara_talk.sex}可怜的样子，心还是狠不下来，所以又叹了口气。`,
    );
    await me.say_and_wait(
      `这么晚一个人回去的话我也不放心你，干脆今晚你就留下来过一夜吧。`,
    );
    await chara_talk.say_and_wait(`训练员君打算两个人一起睡吗？`); //训练员君在担心我呢。
    await chara_talk.say_and_wait(
      `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我要被吃掉了`,
    );
    await me.say_and_wait(`你睡床上我今晚就打地铺吧`);
    await chara_talk.say_and_wait(`这样不会太麻烦了吗？`);
    await me.say_and_wait(`如果你不给我添麻烦的话就更好了`);
    await chara_talk.say_and_wait(`训练员君接下来就请多指教了`);
    await me.say_and_wait(`不要用这种迷惑的说法。`);
    await era.printAndWait(
      `像是会出现在galgame里剧情发生在了现实，你只觉得深深的无力感。`,
    );
    await era.printAndWait(
      `虽然自己再怎么说也不至于会对自己的学生出手，但是${chara_talk.name}又是怎么想的。`,
    );
    await me.say_and_wait(`......今晚的话就辛苦自己吧`);
    await era.printAndWait(`你度过了相当煎熬的一个晚上。`);
  } else if (event_marks.girls_blue === 1) {
    event_marks.girls_blue++;
    await print_event_name(
      `${chara_talk.get_teen_sex_title()}的忧郁`,
      chara_talk,
    );
    await era.printAndWait(`从那天开始，${chara_talk.name}就开始心不在焉了。`);
    await era.printAndWait(
      `不知何时${chara_talk.sex}已经感受不到奔跑的快乐了。`,
    );
    await era.printAndWait(
      `经过深思熟虑之后，你划去了菊花赏的预定，${chara_talk.name}的心灵已经千疮百孔了。`,
    );
    await me.say_and_wait(
      `虽然早就知道${chara_talk.name}会遇到挫折，但没想到来得这么急，这么快。`,
      true,
    );
    await me.say_and_wait(
      `如果我在那个时候不是大脑一片空白，而是做了什么的话`,
      true,
    );
    await era.printAndWait(`你陷入了深深的悔恨之中`);
    await chara301_talk.say_and_wait(`打扰了，请问是${me.name}训练员吗？`);
    await era.printAndWait(`手纲小姐打开了训练室的大门。`);
    await chara301_talk.say_and_wait(`我来这边打算告诉你`);
    await chara301_talk.say_and_wait(`${chara_talk.name}小姐不见了`);
    await era.printAndWait(`钢笔从你的手中滑落。`);
    await chara301_talk.say_and_wait(
      `......看起来训练员先生也不知道${chara_talk.name}小姐现在在哪里。`,
    );
    await chara301_talk.say_and_wait(
      `虽然失踪时间还没有超过48小时，学院也不希望因为学生失踪而引发的丑闻。`,
    );
    await chara301_talk.say_and_wait(
      `对${chara_talk.name}小姐来说最亲近的人就是你了。`,
    );
    await chara301_talk.say_and_wait(
      `如果可以的话请协助我们寻找${chara_talk.name}小姐。`,
    );
    await era.printAndWait(`手纲小姐向你鞠躬请求协助。`);
    era.printButton(`请多多指教了`, 1);
    await era.input();
    await era.printAndWait(`你已下定决心。`);
    era.drawLine({ content: '与手纲小姐分头行动一段时间后' });
    await era.printAndWait(`你带着最后一丝希望走上了天台。`);
    await me.say_and_wait(`${chara_talk.name}.......`, true);
    await era.printAndWait(`......这里也不在吗？`);
    await era.printAndWait(
      `最后的希望也消失了，过度的疲惫与幻想的破灭使你一下子没有坚持住跪在了地上`,
    );
    await me.say_and_wait(`都是我的错`, true);
    await era.printAndWait(`眼泪打湿了地板。`);
    await me.say_and_wait(`不能这样，必须找到${chara_talk.name}。`, true);
    await era.printAndWait(`抹干眼泪后正准备回头时`);
    await chara_talk.say_and_wait(`训练员君？`);
    await era.printAndWait(`${chara_talk.name}不知何时出现在了入口处`);
    await chara_talk.say_and_wait(`训练员君！`);
    await era.printAndWait(
      `先是感受到了一阵柔软紧接着的便是令人喘不过气来的怀抱。`,
    );
    await era.printAndWait(
      `眼前的${chara_talk.get_teen_sex_title()}已经失去了作为${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }身份的余力，此刻的${chara_talk.sex}仅仅只是一个孤独的女孩子。`,
    );
    await era.printAndWait(
      `在充分理解了这一点之后，你也抱住了${chara_talk.sex}。`,
    );
    await chara_talk.say_and_wait(`.....训.训练员君...我应该怎么办。`);
    await era.printAndWait(
      `该如何安慰眼前这位心碎的${chara_talk.get_teen_sex_title()}？`,
    );
    await era.printAndWait(`无论怎么思考思维都在死胡同之间转圈圈。`);
    await era.printAndWait(
      `你轻抚着${chara_talk.name}的后背，让${chara_talk.sex}的情绪逐渐恢复。`,
    );
    await era.printAndWait(
      `${chara_talk.get_teen_sex_title()}渐渐止住了哭泣，多日未曾好好打理的长发出现了分叉缠绕在了一起。`,
    );
    await chara_talk.say_and_wait(
      `一时的安慰只会让${chara_talk.name}越来越依赖自己`,
      true,
    );
    await chara_talk.say_and_wait(
      `真正的解决办法还是需要${chara_talk.name}自己得出答案`,
      true,
    );
    await chara_talk.say_and_wait(
      `希望尽快能出现解决的契机吧，在此之前我必须守护好${chara_talk.sex}。`,
      true,
    );
    era.printButton(
      `面对现实和理想之间的碰撞，我们只能一边流着泪一边拼命的寻找。`,
      1,
    );
    await era.input();
    era.printButton(
      `我会引导你找到两者平衡的桥梁，所以请冷静下来慢慢思考吧`,
      1,
    );
    await era.input();
    era.printButton(`我永远会守护你`, 1);
    await era.input();
    await era.printAndWait(
      `之后你带着冷静下来的${chara_talk.name}找到了手纲小姐，果不其然遭到了手纲小姐的一顿批评。`,
    );
  } else if (edu_weeks === 47 + 31) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`水火不容`, chara_talk);
    await era.printAndWait(
      `直至夏季合宿还剩下一周的时间，你依然没有找到合适的机会出手，`,
    );
    await era.printAndWait(
      `所幸${chara_talk.name}已经恢复到德比之前的状态了。`,
    );
    await era.printAndWait(`看着空中的烈日，你不禁叹了口气。`);
    await era.printAndWait(`浄风幸「呦，好久不见了」`);
    await era.printAndWait(`那个奇怪的男人不知从哪里又冒出来了。`);
    await era.printAndWait(`浄风幸「为什么不去陪你的小女友」`);
    await era.printAndWait(`浄风幸「怎么一个人在这里呆坐着？」`);
    await me.say_and_wait(`你又为什么不去陪自己的担当？`);
    await era.printAndWait(
      `那名${chara_talk.get_uma_sex_title()}似乎说过想和${
        chara_talk.name
      }再一次比试`,
    );
    await era.printAndWait(
      `浄风幸「${chara_talk.sex}去采购晚上开派对需要的食材了」`,
    );
    await era.printAndWait(`浄风幸「就是你家的丸善带${chara_talk.sex}过去的」`);
    await era.printAndWait(`他很自然地坐到了你的旁边。`);
    await era.printAndWait(`浄风幸「你和${chara_talk.name}之间发生了什么？」`);
    await era.printAndWait(
      `浄风幸「为什么${chara_talk.name}的奔跑已经看不到灵动的感觉了？」`,
    );
    await era.printAndWait(`浄风幸「告诉我。」`);
    await era.printAndWait(`他平静的声音里正努力压抑着愤怒。`);
    await me.say_and_wait(`你jb谁？`);
    await era.printAndWait(`漂亮的右勾拳正中你的左脸。`);
    await era.printAndWait(
      `大脑还来不及感受事态的变换又结结实实地腹部挨了一拳。`,
    );
    await era.printAndWait(`浄风幸「我tm给你脸了是吧。」`);
    era.printButton(`你又不是我你怎么知道我的处境`, 1);
    await era.input();
    await era.printAndWait(
      `强忍着疼痛，肾上腺素疯狂分泌，你也顾不上什么姿态了，俯身躲过对面抓你衣领的右手给对面腹部回敬了一记直拳。`,
    );
    await era.printAndWait(`浄风幸「咕呜。」`);
    await era.printAndWait(`虽然还想乘胜追击但向前挥出的手臂却被死死的抓住了`);
    await era.printAndWait(`浄风幸「我为什么要关心你怎么样」`);
    await era.printAndWait(`腹部又受了膝盖的重击。`);
    await era.printAndWait(`你再也忍受不了这种痛苦，无力地跪在了地上。`);
    await era.printAndWait(`浄风幸「我早就看你不爽了」`);
    await era.printAndWait(
      `浄风幸「明明${chara_talk.name}那么喜欢你，你为什么让${chara_talk.sex}受到这么多的痛苦」`,
    );
    await era.printAndWait(`你的衣领被他强行提起，被迫直视他的双眼。`);
    await era.printAndWait(`浄风幸「回答我，你们之间到底发生了什么」`);
    era.printButton(`想知道答案先把我打趴下再说`, 1);
    await era.input();
    await era.printAndWait(`浄风幸「这可是你自找的。」`);
    await era.printAndWait(
      `在海滩一处偏僻的角落，一场没有旁观者的斗殴在这里上演`,
    );
  } else if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name(`沙滩上的烟火`, chara_talk);
    await era.printAndWait(`夏季合宿即将进入尾声。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `比起去年和小塔一起在海边看着潮水的涨落，今年有可爱的后辈们还有训练员君在我身边热闹了不少。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`.......但是我还是找不到正确的道路。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`像被困在一片无穷无尽的花园里，不知道该往何处出发`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`我做的是对的吗？走这条道路是正确的吗？`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `走这条道造成的痛苦与悲伤，在终点之时能得到补偿吗？`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `虽然沙滩上吹拂的海风依然带着令人怀念的味道，但此刻的我已经无心再去关注了`,
      {
        color: chara_talk.color,
      },
    );
    await chara_talk.say_and_wait(`什么都不做只会让事情越来越糟糕`, true);
    await chara_talk.say_and_wait(`一定要找到解决的方法`, true);
    await chara_talk.say_and_wait(
      `......不能在继续颓废下去了，接下来的话`,
      true,
    );
    await era.printAndWait(`训练员君？`, {
      color: chara_talk.color,
    });
    era.drawLine();
    await chara_talk.say_and_wait(
      `训练员君终于主动来找${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我了吗？`,
    );
    await chara_talk.say_and_wait(
      `是想和${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我约会吗？`,
    );
    era.printButton(`${chara_talk.name}今晚有空吗？`, 1);
    await era.input();
    era.printButton(`我有话想要对你说。`, 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}沉默了片刻后，突然对你笑了起来`);
    await chara_talk.say_and_wait(`......当然可以♪`);
    await chara_talk.say_and_wait(`呵呵~开始期待今天晚上的约会了♪`);
    await chara_talk.say_and_wait(`训练员君`);
    await era.printAndWait(`你被突然平静的声音吓了一跳`);
    await chara_talk.say_and_wait(`说到夏日的海滩，干脆在这里放烟火吧？`);
    await chara_talk.say_and_wait(`两个人一起放烟火不是很浪漫的事情吗？`);
    era.printButton(`好，好啊，既然${chara_talk.name}喜欢的话`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `呜，训练员君的态度真是冷淡呢，${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我好伤心啊。`,
    );
    await era.printAndWait(`${chara_talk.name}作势要哭出来了`);
    await me.say_and_wait(`对不起是我态度不好`);
    await era.printAndWait(`此刻老老实实道歉才是最好的选择吧`);
    await chara_talk.say_and_wait(
      `既然这样的话训练员君可以陪我一起去买烟花吗？`,
    );
    await era.printAndWait(
      `${chara_talk.name}突然停止了假哭的声音顺势提出了要求`,
    );
    era.printButton(`不如说正合我意`, 1);
    await era.input();
    await me.say_and_wait(`${chara_talk.name}变得更加脆弱了`, true);
    era.drawLine({ content: '到了傍晚' });
    await chara_talk.say_and_wait(`训练员君在吗？我来找你了。`);
    await era.printAndWait(
      `穿着浴衣的${chara_talk.get_teen_sex_title()}邀请你出发。`,
    );
    await me.say_and_wait(`我马上出来`);
    await era.printAndWait(`你和${chara_talk.name}来到了海滩之上。`);
    await era.printAndWait(
      `夏季合宿已经接近尾声，${chara_talk.get_uma_sex_title()}们在宿舍里为纪念着这一个月的辛苦举行着派对。`,
    );
    await era.printAndWait(
      `沙滩上已经没有人或者${chara_talk.get_uma_sex_title()}在这边训练了。`,
    );
    await chara_talk.say_and_wait(`训练员君接着`);
    await era.printAndWait(`${chara_talk.sex}递给了你手中的正在燃烧的烟花棒。`);
    await era.printAndWait(
      `烟花棒在手中化作一闪而过的美丽花朵，在柔软的沙滩上绽放。`,
    );
    await chara_talk.say_and_wait(`好漂亮啊，训练员君也这么想吗？`);
    await era.printAndWait(
      `一脸兴奋盯着燃烧着的烟花看的${
        chara_talk.name
      }像是发现了新鲜胡萝卜的小${chara_talk.get_uma_sex_title()}一样露出了可爱的笑脸。`,
    );
    await era.printAndWait(
      `${chara_talk.name}的心情随着一根根烟花的燃烧不断地高涨，直到最后一根烟花放完才发现两人不知何时贴在了一起。`,
    );
    await chara_talk.say_and_wait(`真可惜，就这样结束了，训练员君？`);
    await era.printAndWait(
      `穿着精心挑选的浴衣更突出了${chara_talk.name}的诱人身材，为了防止烟花烧到长发而特意将其盘起来反而成了一种新鲜的景色。`,
    );
    await me.say_and_wait(`仔细看的话${chara_talk.name}真漂亮呢`);
    await era.printAndWait(
      `不论是丰满的身体还是身上发出的香味，都让你兴致高涨。`,
    );
    await chara_talk.say_and_wait(`哎呀~训练员先生是在调情吗？`);
    await era.printAndWait(`${chara_talk.name}轻轻抚摸着你的头`);
    await era.printAndWait(
      `散发着诱人香味的${chara_talk.sex}让你控制不住将头埋在${chara_talk.sex}的胸里的冲动，无视${chara_talk.sex}地惊呼你顺势抱住了${chara_talk.sex}。`,
    );
    await chara_talk.say_and_wait(`训练员君也辛苦了呢。`);
    await era.printAndWait(
      `被激发出母性的${chara_talk.name}反将你抱在了怀里，胸前的柔软成了世上最舒适的枕头。`,
    );
    await chara_talk.say_and_wait(`就这样在怀里好好休息吧。`);
    await era.printAndWait(
      `像是魅魔在耳边悄声细语，一直紧绷的精神终于还是战胜了理智。`,
    );
    await me.say_and_wait(`就这样沉湎在${chara_talk.sex}的怀抱里`, true);
    await era.printAndWait(`夏季合宿结束了。`);
  } else if (edu_weeks === 47 + 34) {
    await print_event_name(`失而复得`, chara_talk);
    await era.printAndWait(`夏季合宿结束后，我凝视着天花板上的黑点。`);
    await chara_talk.say_and_wait(`到底是哪里出了问题`, true);
    await era.printAndWait(
      `自合宿回来后，你多次向${
        chara_talk.sex
      }询问是否愿意和${chara_talk.get_uma_sex_title()}再次比赛。`,
    );
    await era.printAndWait(`不是被巧妙的转移了话题就是面对铁一样的沉默。`);
    await me.say_and_wait(`${chara_talk.name}也在等待着合适的时机吗？`);
    await era.printAndWait(`猜测从潜意识中浮现。`);
    await me.say_and_wait(`究竟还差了什么？`);
    await era.printAndWait(`莫名的烦躁感占据了你的内心。`);
    await era.printAndWait(`${chara_talk.get_uma_sex_title()}「打扰了」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「丸善前辈的训练员先生」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `净风幸的担当${chara_talk.get_uma_sex_title()}走进了训练室。`,
    );
    await me.say_and_wait(`请坐，想喝点什么饮料，果汁还是红茶？`);
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「不用了，我来这边只是为了把这个还给${
        chara_talk.name
      }。」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}从校服的口袋中将手链递给了你`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `似乎是${chara_talk.get_uma_sex_title()}们送给${
        chara_talk.name
      }的礼物，为什么会`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「丸善学姐不小心遗留在了中庭的手链，希望训练员先生能在合适的时机交付与${
        chara_talk.sex
      }。」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `破旧的手链上有明显的弥补痕迹，原本的红水晶也被换成了绿水晶。`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「训练员先生，请转告给丸善学姐，我们一直期待着你活跃在草场上的样子，拜托了。」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}说完深深的低下了头，似乎得不到肯定的答复就不会起来。`,
      {
        color: chara_talk.color,
      },
    );
    await me.say_and_wait(
      `......我知道了，手链和话语会在合适的时机一同交给${chara_talk.sex}。`,
    );
  } else if (edu_weeks === 47 + 37) {
    await print_event_name(`思绪`, chara_talk);
    await era.printAndWait(
      `因为${chara_talk.name}内心受到重创，再继续参加比赛只会让${chara_talk.sex}更加痛苦。`,
    );
    await era.printAndWait(
      `在发布会上你向众多记者宣布${chara_talk.name}将不会参加菊花赏。`,
    );
    await era.printAndWait(`一片哗然。`);
    await era.printAndWait(
      `众人的指责与疑问你都默默承受，做出判断时的犹豫与痛苦不足与外人道也。`,
    );
    await era.printAndWait(
      `做出弃赛决定之后，为了预防过激粉丝对你的生命造成威胁，你在${chara_talk.name}的建议下到${chara_talk.sex}现在所住的公寓里暂住一段时间。`,
    );
    await chara_talk.say_and_wait(`哼哼~这不是已经是恋人之间的关系了吗?`);
    await era.printAndWait(`因为同吃同住的缘故，两人之间的羁绊也愈发加深。`);
    await me.say_and_wait(
      `差不多是时候了，现在必须让${chara_talk.name}踏出那一步。`,
      true,
    );
    await era.printAndWait(
      `手中紧紧握着${chara_talk.get_uma_sex_title()}托付给你的手链，你下定了决心。`,
    );
    era.drawLine({ content: '晚饭后' });
    era.printButton(`明天我们出去一起赏秋吧？`, 1);
    await era.input();
    await era.printAndWait(`你打算在约会高潮时将手链交给${chara_talk.sex}。`);
    await chara_talk.say_and_wait(`训练员君今天有些奇怪呢？`);
    await chara_talk.say_and_wait(
      `难道有什么事情瞒着${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}吗？`,
    );
    await era.printAndWait(
      `${chara_talk.name}放下了手中的筷子，双手托腮盯着你看。`,
    );
    await era.printAndWait(
      `本就犹豫不定的你被${chara_talk.sex}这么盯着看更是开始冒起冷汗。`,
    );
    await me.say_and_wait(`人们不是常说艺术之秋，读书之秋吗？`);
    await me.say_and_wait(
      `比起夏天的炎热，冬天的寒冷，秋天这种清爽的季节是最适合抒发艺术情感的时候了。`,
    );
    await me.say_and_wait(
      `而且啊，我也想在秋天留下和${chara_talk.name}之间的美好回忆。`,
    );
    await chara_talk.say_and_wait(`训练员君原来这么在意我吗？`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我也想和训练员君留下美好的回忆呢......`,
    );
    await chara_talk.say_and_wait(`呵呵~已经开始期待起明天的行程了呢。`);
    await era.printAndWait(`${chara_talk.name}看起来心情变好了。`);
    era.drawLine({ content: '第二天早上' });
    await chara_talk.say_and_wait(`训练员君？起来了吗？`);
    await era.printAndWait(`你揉着还未进入状态的双眼挣扎着起床了。`);
    era.printButton(`比约定的起床时间还要早一点啊`, 1);
    await era.input();
    await era.printAndWait(
      `一大早感受到了${chara_talk.name}久违的充满活力的声音让你对之后的事情充满了希望。`,
    );
    await chara_talk.say_and_wait(
      `说起来最近好像有美术展览会,以此作为我们第一站的目标吧。`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(`快到中午了，训练员君尝尝我做的便当怎么样？`);
    era.drawLine();
    await me.say_and_wait(`抓娃娃可真是困难啊。`);
    await era.printAndWait(
      `抱着${
        chara_talk.name
      }玩偶的${chara_talk.get_teen_sex_title()}一脸幸福的微笑着。`,
    );
    await me.say_and_wait(`足够了。`);
    era.drawLine();
    await era.printAndWait(`最后一站回到了学院的天台。`);
    await chara_talk.say_and_wait(`风也是会成长的吧。`);
    await era.printAndWait(
      `顺着${chara_talk.name}的视线望向整个学院，金黄色的银杏叶随着风而漫天飞舞。`,
    );
    await chara_talk.say_and_wait(`新诞生的风总是无忧无虑地向着天空飞去。`);
    await chara_talk.say_and_wait(
      `然而，当${chara_talk.sex}接触到了枯叶的悲伤之后，${chara_talk.sex}的脚步就变得沉重了。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.sex}也希望能让那些枯叶感受到天空的自由，所以温柔的怀抱着它们，想带着它们一起飞往无忧无虑的天空。`,
    );
    await chara_talk.say_and_wait(
      `但束缚住枯叶的土地最终还是战胜了风的怀抱，所以枯叶在飞向天空的过程中折翼。`,
    );
    await chara_talk.say_and_wait(`最后枯叶还是回归了大地。`);
    await era.printAndWait(
      `你开始走进${chara_talk.get_teen_sex_title()}的圣域。`,
    );
    await me.say_and_wait(`即使如此，枯叶在风的指引下依然做出了自己的决定。`);
    await me.say_and_wait(`没有什么比这一过程更能体现枯叶的生命力了。`);
    await chara_talk.say_and_wait(`......训练员君是打算把手链交给我吗？`);
    await era.printAndWait(
      `以${chara_talk.sex}的心思细腻与精准的直觉，这是必然发生的事情。`,
    );
    await me.say_and_wait(`但是，不能在这里放弃。`, true);
    await me.say_and_wait(
      `我已经做好了和${chara_talk.sex}同生共死的觉悟了。`,
      true,
    );
    await chara_talk.say_and_wait(`......看来我说中了呢。`);
    await chara_talk.say_and_wait(`不过训练员君放弃吧。`);
    await chara_talk.say_and_wait(
      `努力奔跑的背影无法让所有看到我的${chara_talk.get_uma_sex_title()}们都对此产生希望。`,
    );
    await me.say_and_wait(`才不会！`, {
      align: 'center',
      fontSize: '24px',
    });
    await me.say_and_wait(
      `${chara_talk.name}是比谁都温柔的注视大家的大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }。`,
    );
    await me.say_and_wait(
      `如果像这样的大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }因为自责而放弃了比赛的话。`,
    );
    await me.say_and_wait(`这条手链也会哭泣的啊`);
    await era.printAndWait(`你从口袋之中将修复后的手链交给了${chara_talk.sex}`);
    await me.say_and_wait(`大家的希望，大家的期盼都寄托在了这条手链之中啊。`);
    await me.say_and_wait(
      `虽然它已经不再完美了，但正因为它的不完美，所以才更接近完美了。`,
    );
    era.printButton(`你听到它的低语了吗？`, 1);
    await era.input();
    await era.printAndWait(
      `${chara_talk.name}颤抖着接过了手链之后，心理防线终于崩溃，大滴大滴的泪珠从脸庞滑落。`,
    );
    await me.say_and_wait(
      `这条孤独探索的道路只能你自己一个人去摸索，但我永远会在你身边守护你。`,
    );
    await era.printAndWait(
      `你抚摸着${chara_talk.name}的长发，感受到了${chara_talk.sex}的心跳。`,
    );
  } else if (edu_weeks === 47 + 40) {
    await print_event_name(`映光之森`, chara_talk);
    era.drawLine({ content: '`特雷森学院·夜间草地' });
    await era.printAndWait(`${chara_talk.name}为追逐自己的背影即将再次启程。`);
    await era.printAndWait(`浄风幸「终于来了啊。」`);
    await era.printAndWait(
      `在将手链还给${chara_talk.name}后，你便联系了那个男人。`,
    );
    await era.printAndWait(`约定在10月第四周再次进行赛跑。`);
    await me.say_and_wait(
      `再怎么说${chara_talk.name}也已经很久没有认真训练过了，请给我们半个月的时间。`,
    );
    await era.printAndWait(
      `在经历半个月的训练之后，${chara_talk.name}才算恢复到了皋月赏时的状态。`,
    );
    await me.say_and_wait(
      `训练这种事情，一天落下的话需要花三天时间才能恢复`,
      true,
    );
    await me.say_and_wait(
      `能在半个月后恢复大半，实际上也是${chara_talk.name}自己意志做出的决定。`,
      true,
    );
    await era.printAndWait(`浄风幸「......你有没有听我在说什么？」`);
    await me.say_and_wait(`啊，抱歉，现在就开始吧`, true);
    await era.printAndWait(
      `浄风幸「......算了。就以菊花赏3000米为假想开始练习吧。」`,
    );
    await era.printAndWait(
      `浄风幸(你能让我再看到当时希望的背影吗？${chara_talk.name}。)`,
    );
    await era.printAndWait(
      `包括两名训练员两名${chara_talk.get_uma_sex_title()}在内，练习开始了。`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「${
        me.name
      }，非常感谢你能让丸善学姐重新振作起来。」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `身穿决胜服的${chara_talk.get_uma_sex_title()}向你鞠躬，然后`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「就让我来见证超级跑车的速度然后超越那道背影！」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`你看到了有如实质的滂薄战意。`);
    era.drawLine();
    await era.printAndWait(
      `狂妄到自认为可以救人者，会亲手伤害自己打算拯救的对象。`,
      { align: 'center', fontSize: '22px' },
    );
    await era.printAndWait(`我的世界曾经充满了色彩。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `在晨曦之中苏醒，被柔和的光抚摸着，跟随时节的变化起舞，整个世界都变得亮晶晶的。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `突然有一天，风拜访了我的世界，我看到了它的脚步，听到了它的喃喃自语。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `为了追逐它的脚步，我学会了奔跑。听到它的低语后，我感受到了快乐。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `于是我希望能让更多的${chara_talk.get_uma_sex_title()}们也能看到它的脚步，同样感受到奔跑的快乐`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `所以我打算让更多的${chara_talk.get_uma_sex_title()}们追逐着我奔跑的背影`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `如果所有人都能感受到奔跑的快乐的话，我的理想世界也不远了吧。`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`然而，理想与现实可能永远存在矛盾。`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `我的奔跑注定会伤害到一些${chara_talk.get_uma_sex_title()}，我所期待着的后辈们`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`难以言及的悲伤化为了灰色的阴影`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`现在依然在等着我去追逐${chara_talk.sex}`, {
      color: chara_talk.color,
    });
    era.drawLine();
    await me.say_and_wait(`${chara_talk.name}`, true);
    await era.printAndWait(
      `${chara_talk.name}的神情从怀念、恐惧、悲伤最后变为了决心，似乎已经做好了准备`,
    );
    era.printButton(`预备`, 1);
    await era.input();
    era.printButton(`跑！`, 1);
    await era.input();
    await era.printAndWait(`风压如刀片割的脸生疼。`);
    await era.printAndWait(
      `${
        chara_talk.name
      }追逐着只有自己才能看见的某物,紧随其后的是作为后辈的${chara_talk.get_uma_sex_title()}`,
    );
    await era.printAndWait(`难以言及的凝重笼罩在赛场上。`);
    era.drawLine();
    await chara_talk.say_and_wait(`令人怀念的感觉从奔跑的一刻开始了`, true);
    await chara_talk.say_and_wait(`紧张而颤抖的身体习惯性的做出了最优解`, true);
    await chara_talk.say_and_wait(`第一个弯道通过`);
    await era.printAndWait(`听着身后传来的稳健脚步声简单估算了下距离。`);
    await chara_talk.say_and_wait(`采取先行跑法吗？`);
    await chara_talk.say_and_wait(`稍微有些不利呢。`);
    await era.printAndWait(
      `${
        chara_talk.name
      }之前尚未就长距离着重锻炼过，与身后以中长距离为目标的${chara_talk.get_uma_sex_title()}相比稍显劣势。`,
    );
    await chara_talk.say_and_wait(`就在中盘一口气将你甩掉。`);
    await era.printAndWait(`成功与否就看对方是否适应${chara_talk.sex}的节奏了`);
    await chara_talk.say_and_wait(`比想象之中还要难缠。`);
    await era.printAndWait(
      `身后的${chara_talk.get_uma_sex_title()}认真的，虎视眈眈的狙击着${
        chara_talk.name
      }的背影。`,
    );
    await chara_talk.say_and_wait(`好像稍微感受到了${chara_talk.sex}的想法`);
    await chara_talk.say_and_wait(
      `瞄准着我的背影，希望超越${chara_talk.sex}。`,
    );
    await chara_talk.say_and_wait(`我的想法传达到${chara_talk.sex}身上了吗？`);
    await era.printAndWait(`比赛进入了第四个弯,已经是最后的冲刺阶段了`);
    await chara_talk.say_and_wait(`那么，在这边一口气......`);
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}A「世界上原来真的是有不可跨越的鸿沟的，学姐果然是怪物啊。」`,
    );
    await era.printAndWait(`${chara_talk.name}的眼前再次出现了那道黑影。`);
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `在最后冲刺阶段呼吸混乱了一瞬间，后面的${chara_talk.get_uma_sex_title()}没有放过这个机会同样以更快的加速度拼尽全力`,
    );
    await chara_talk.say_and_wait(`......不，不对。`);
    await me.say_and_wait(`你听到它的低语了吗？`, true);
    await chara_talk.say_and_wait(`原来是这样。`);
    await era.printAndWait(`突然就明白了`);
    await era.printAndWait(
      `每有一位因我的背影黯然失色而离场的${chara_talk.get_uma_sex_title()}，会有更多的${chara_talk.get_uma_sex_title()}会因我的奔跑而受到鼓舞`,
    );
    await era.printAndWait(
      `虽然作为赛${chara_talk.get_uma_sex_title()}个人的职业生涯如同流星一样短暂,但我的存在能够让更多的${chara_talk.get_uma_sex_title()}们闪耀。`,
    );
    await era.printAndWait(
      `许许多多的流星汇集在一起，最后一定会组成非常壮观的流星雨。`,
    );
    await era.printAndWait(
      `许许多多的流星汇集在一起，最后一定会组成非常壮观的流星雨。`,
    );
    await chara_talk.say_and_wait(`......所以我`, true);
    await chara_talk.say_and_wait(
      `虽然我之前一直以让所有赛${chara_talk.get_uma_sex_title()}都追逐着我的背影，但是面临了失败`,
      true,
    );
    await chara_talk.say_and_wait(
      `但失败的不是理想，是我，我对自己的能力评估过高了，所以造成了失败`,
      true,
    );
    await chara_talk.say_and_wait(
      `那些因为我的背影而放弃的${chara_talk.get_uma_sex_title()}们，我永远会将${
        chara_talk.sex
      }们的失败报以歉意`,
      true,
    );
    await chara_talk.say_and_wait(
      `所以，我的现在的目标是让更多支持着我憧憬着我的后辈们能看着我的背影追逐着自己的理想`,
      true,
    );
    await chara_talk.say_and_wait(
      `所以，不论是憧憬我的后辈还是训练员，都请看着我的背影追逐着风吧`,
      true,
    );
    await era.printAndWait(`一朝顿悟，身前的阴影终于再次与己身合一。`);
    await era.printAndWait(`身旁疾驰的风仿佛也在庆贺这一刻的到来。`);
    await chara_talk.say_and_wait(`那么，要加速了`, true);
    era.drawLine();
    await era.printAndWait(
      `突然加速的${
        chara_talk.name
      }像是红色的闪电一样与后方的${chara_talk.get_uma_sex_title()}的距离越拉越大，像是有台风一样席卷草场。`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}「怎么可能.....」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`浄风幸「......这就是我想看到的背影。」`);
    await era.printAndWait(`站在观众席上的男人泣不成声。`);
    era.printButton(`${chara_talk.name}，祝贺你。`, 1);
    await era.input();
    await era.printAndWait(
      `${chara_talk.name}终于从自己构建的理想世界之中走出，开始面对真实的世界了。`,
    );
    await era.printAndWait(`带着希望之光的风终于再次于此处吹起。`);
    //todo 领域
  } else if (edu_weeks === 95 + 9) {
    await print_event_name(`焱炎`, chara_talk);
    await era.printAndWait(`漫长的寒冬终于过去，春风再次吹拂着特雷森。`);
    await era.printAndWait(
      `你们为了实现能让更多${chara_talk.get_uma_sex_title()}追逐着背影的理想，在草地上进行着训练。`,
    );
    await era.printAndWait(`浄风幸「呦，训练辛苦了。」`);
    await era.printAndWait(
      `作为友人的他受到${chara_talk.name}的鼓舞，现在也在背后支持着自己的担当活跃在赛场上。`,
    );
    await era.printAndWait(`浄风幸「接下来的训练就让......」`);
    await chara17_talk.say_and_wait(
      `${chara_talk.name}，你还在坚持你那脆弱的理想吗？`,
    );
    await era.printAndWait(`威严的声音响彻响彻整个训练场。`);
    await era.printAndWait(
      `欢呼吧，吾等之皇帝——鲁铎象征将领导整个赛${chara_talk.get_uma_sex_title()}的未来。`,
    );
    await era.printAndWait(`不必相信，只需追随皇帝的脚步。`);
    await chara_talk.say_and_wait(`啊啦，皇帝也是为了超越我的背影而过来的吗？`);
    await era.printAndWait(`除了${chara_talk.name}——`);
    await chara17_talk.say_and_wait(
      `比起同世代的弱小${chara_talk.get_uma_sex_title()}，作为前辈的${
        chara_talk.name
      }似乎更加美味呢`,
    );
    await chara_talk.say_and_wait(`我可以当作是夸奖我吗？`);
    await chara17_talk.say_and_wait(`但是，你还是过于懦弱了。`);
    await chara17_talk.say_and_wait(
      `明明有着天赋的能力，却安于现状，还在做着脆弱而可笑的梦。`,
    );
    await chara17_talk.say_and_wait(
      `弱小的${chara_talk.get_uma_sex_title()}们只有在皇帝的领导一下才会有勇气超越过去的自己。`,
    );
    await chara17_talk.say_and_wait(
      `因此赛${chara_talk.get_uma_sex_title()}的未来必须在皇帝的领导之下`,
    );
    await chara17_talk.say_and_wait(
      `为此，身为皇帝，不仅要无敌于同时代，还要击溃过往的荣耀，镇压未来的荣光。`,
    );
    await chara17_talk.say_and_wait(`于大阪杯见证皇帝的神威吧。`);
    await era.printAndWait(`留下旨意之后，皇帝地从容离开了训练场。`);
    era.printButton(`终于要与皇帝对决了吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `......不，${chara_talk.get_uma_sex_title()}们的未来应该由${
        chara_talk.sex
      }们自己决定。`,
    );
    await chara_talk.say_and_wait(
      `我相信着${
        chara_talk.sex
      }们一定能超越我，超越皇帝成为更优秀的赛${chara_talk.get_uma_sex_title()}。`,
    );
    await chara_talk.say_and_wait(`为此，我必须要让鲁铎象征看着我的背影。`);
    await chara_talk.say_and_wait(`训练员君，请祝我一臂之力哦。`);
    await era.printAndWait(`为此，下一个目标已经决定了。`);
    //todo 强敌：“皇帝” 速力智1200 耐根1150 领域
  } else if (edu_weeks === 95 + 32) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name('夏季合宿结束·难忘的盛宴', chara_talk);
    await era.printAndWait(`今年夏季合宿过得的非常充实。`);
    await era.printAndWait(
      `除了在沙滩上打排球敲西瓜之类的日常运动，听着后辈${chara_talk.get_uma_sex_title()}们的烦恼然后准确给出建议也是享受的一环。`,
    );
    await era.printAndWait(`在夏季合宿的最后一天,你们参加了宿舍里的派对。`);
    await era.printAndWait(
      `特别周、千代王一脸崇拜的听着${chara_talk.name}讲述自己这二年来的经验，草上飞也向${chara_talk.name}发起了挑战。`,
    );
    await era.printAndWait(`直至深夜临近，大家才心满意足的解散。`);
    await me.say_and_wait(`夏季合宿也快结束了，接下来就是天秋了吧。`, true);
    await me.say_and_wait(
      `比起比赛的话，果然还是${chara_talk.name}的笑脸最棒了。`,
      true,
    );
    era.printButton(`好！回到特雷森后也要全力以赴。`, 1);
    await era.input();
    await era.printAndWait(`自言自语打开房门后，`);
    await me.say_and_wait(`奇怪门没锁吗？`);
    await chara_talk.say_and_wait(`训练员君♪`);
    await era.printAndWait(`门后出现的${chara_talk.name}向你飞扑了过来。`);
    await chara_talk.say_and_wait(`今天的话一起睡吧？`);
    await me.say_and_wait(`合宿的时候一起睡的话再怎么说也......`);
    await chara_talk.say_and_wait(`已经和理事长小姐说过了哦`);
    await era.printAndWait(
      `${chara_talk.name}似乎在你不知道的时候和理事长达成了什么协议。`,
    );
    await chara_talk.say_and_wait(
      `理事长也希望我们能好好享受青春的时光呢，所以训练员君`,
    );
    await era.printAndWait(`${chara_talk.name}满脸通红的看着你。`);
    era.printButton(`要上了`, 1);
    era.printButton(`还是算了吧`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`接下来请多多关照了♪`);
      await quick_into_sex(4);
    } else {
      await chara_talk.say_and_wait(
        `诶，训练员君面对这样的美${chara_talk.get_teen_sex_title()}都提不起兴趣吗？${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }我真的要怀疑自己的魅力了呢。`,
      );
      await era.printAndWait(
        `耷拉着耳朵的${chara_talk.name}与平时看上去强烈的反差反而让你激起了施虐心。`,
      );
      await era.printAndWait(`强行压下去的性欲又被提了起来。`);
      await chara_talk.say_and_wait(`那么接下来请多关照了，训练员君♪`);
      await quick_into_sex(4);
    }
  } else if (edu_weeks === 95 + 43) {
    await print_event_name('温柔的风', chara_talk);
    await era.printAndWait(`今天起的意外的早`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`因为实在睡不着所以干脆直接起床`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`睡眼惺忪的打开窗户后清爽的空气便拜访了这间公寓`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `屋外的金黄色的树叶也脱离了母树的怀抱，随着金风的引导拜访了这里`,
      {
        color: chara_talk.color,
      },
    );
    await chara_talk.say_and_wait(`欢迎光临`);
    await era.printAndWait(`对着小小的客人露出笑脸迎接到来`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `在接受了主人的邀请后，小小的客人便稳稳当当地落在了书桌上`,
      {
        color: chara_talk.color,
      },
    );
    await chara_talk.say_and_wait(`......说起来现在流行用落叶制成的书签呢`);
    await era.printAndWait(`小心地将树叶清洗干净后，用字典将树叶进行压平`, {
      color: chara_talk.color,
    });
    await chara_talk.say_and_wait(
      `接下来的话只要耐心等待太阳的出现了就可以了`,
      true,
    );
    await era.printAndWait(
      `清晨的薄雾尚未散去，月亮依然悬挂在天空之中，繁星点点。`,
    );
    await chara_talk.say_and_wait(`不久之后就是冬天了呢`, true);
    await chara_talk.say_and_wait(
      `春天萌发的树叶，在夏天生长茂盛，在秋天迎来凋零，最后回归冬天的怀抱`,
      true,
    );
    await chara_talk.say_and_wait(`我也努力的绽放过了吗？`, true);
    await era.printAndWait(
      `突来的一阵强风吹得人几乎睁不开眼睛，金黄色的落叶依依不舍地离开树枝的怀抱，跟随着热情的风前往最后的旅程。`,
    );
    await era.printAndWait(
      `无数的落叶像小溪一样奔涌着，在风的指引下汇入大地的海洋之中。`,
    );
    await chara_talk.say_and_wait(
      `......真是期待可爱的后辈们最终能达到什么地步呢`,
      true,
    );
    await chara_talk.say_and_wait(`等待着后辈们超越我的那一天`, true);
    await era.printAndWait(`温柔的风注视着后辈们的成长`);
  }
  wait_flag && (await era.waitAnyKey());
};
