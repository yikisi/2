const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const chara_talk = get_chara_talk(19);
const chara32_talk = get_chara_talk(32);
async function week_end_49(me) {
  await print_event_name('经典湿身，不过是你', chara_talk);
  await era.printAndWait(
    `作为训练员，除了平时指导训练的工作外，还是有一些其他的杂项工作的。`,
  );
  await era.printAndWait(
    `虽然今天是${chara_talk.get_uma_sex_title()}的休息日，但是今天你还是来到了教学楼，来提交${chara_talk.get_uma_sex_title()}预先参赛资料。`,
  );
  await era.printAndWait(
    `当你把事情办完，从办公室出去，却发现，窗外已经稀稀疏疏下起了雨。`,
  );
  await era.printAndWait(`幸运的是，你带了伞。`);
  await era.printAndWait(`正准备回去时，你看到了一个站在走廊下的粉色身影。`);
  await era.printAndWait(
    `是数码，马耳耷拉着，有点无精打采，看起来没带伞。感觉是在某些作品常会发生的一幕。`,
  );
  await era.printAndWait(
    `但，让人疑惑的是，你在不远处的雨中，看到了撑着伞的爱丽速子。`,
  );
  await me.say_and_wait(`不叫住速子吗？`);
  await chara_talk.say_and_wait(`……诶，你应该懂吧？同志？`);
  await era.printAndWait(`数码打了几个手势示意后。`);
  await era.printAndWait(
    `相处了这么久，你也逐渐了解了数码的性格，看起来${chara_talk.sex}是不想干扰到爱丽速子。`,
  );
  await me.say_and_wait(`好，懂力，那要不要和我撑一把伞回去。`);
  await chara_talk.say_and_wait(`感谢！`);
  await era.printAndWait(`所以，你就撑着一把伞，伞下遮着你和数码。`);
  await era.printAndWait(
    `雨有点变大了，最大的问题是，风也变大了，而且还不定向。`,
  );
  await era.printAndWait(
    `这就导致雨像有生命力一般，硬是往你伞偏向相反的方向入手。`,
  );
  await era.printAndWait(`你尽力不让雨淋到数码，把伞往数码方向偏。`);
  await chara_talk.say_and_wait(
    `训练员，虽然我淋雨是不好了，但是我觉得你的身体再怎么说也会比${chara_talk.get_uma_sex_title()}弱一点吧？要是你感冒了那可不好！`,
  );
  await era.printAndWait(`可以看得到数码生气了，马耳都往后背了。`);
  await me.say_and_wait(`这……感觉被伤到了。`);
  await era.printAndWait(`缓和气氛，和数码一路打着啊哈继续走。`);
  await era.printAndWait(`但是你并没有退步，还是尽力遮着${chara_talk.sex}。`);
  await era.printAndWait(
    `很显然，嘴硬的结果就是，回到训练室你衣服都湿了，幸好数码没怎么被淋到。`,
  );
  await chara_talk.say_and_wait(`啊哈哈哈，训练员你给我先别动。`);
  await era.printAndWait(
    `不不不，这时你意识到了，虽然担当${chara_talk.get_uma_sex_title()}湿身很不妙，但在担当${chara_talk.get_uma_sex_title()}前湿身，好像也不太妙。`,
  );
  await era.printAndWait(`数码拿起毛巾擦去了你头上的水珠。`);
  await era.printAndWait(
    `把衣服脱了后又擦了身子，再拿一件干毛巾盖住身子，只能算是权宜之计。`,
  );
  await me.say_and_wait(`非常感谢，下面就让我自己来吧。`);
  await era.printAndWait(`被这样擦身体，你或多或少都有点不好意思，`);
  await era.printAndWait(
    `毕竟你都是一个成年人。数码低下了头，你看不到${chara_talk.sex}的表情，只能从马耳判断，${chara_talk.sex}应该不是不高兴……`,
  );
  await era.printAndWait(`还好吧？`);
  era.drawLine();
  await chara_talk.say_and_wait(
    `呼呀，淋了雨洗过澡之后再躺进被窝里，保持良好的睡眠，才可以让明日更有精力的推活啊！`,
  );
  await era.printAndWait(`同舍的速子好像还在研究室，虽然平时也一样。`);
  await era.printAndWait(`额，好像忘记写日记了来着……`);
  await era.printAndWait(
    `算了，就躺进去，回忆一下今天的推活，为明天做准备吧！`,
  );
  await era.printAndWait(`嗯嗯，早上先是进行了在${chara_talk.get_uma_sex_title()}酱跑过的草地里享福，中午在食堂摄入推活能量，下午……
下午……是训练员……额是……白嫩嫩的肌肤，略有些许形状的腹肌，滴水的头发……`);
  await era.printAndWait(`不是不是不是，数码，你在想什么啊！`);
  await era.printAndWait(
    `感觉是很受${chara_talk.get_uma_sex_title()}欢迎的类型……`,
  );
  await era.printAndWait(
    `不不不，数码碳，让我们先用现有知识解读一下，数码碳，你不是看了很多同人本吗，还画了不少呢。`,
  );
  await era.printAndWait(`来来来，在里面找一下答案吧！`);
  await era.printAndWait(
    `是训练员招揽${chara_talk.get_uma_sex_title()}，然后发觉${
      chara_talk.sex
    }的才能的故事是吧！`,
  );
  await era.printAndWait(`然后，怎么样了来着？`);
  await era.printAndWait(`是${chara_talk.get_uma_sex_title()}酱察觉……`);
  await era.printAndWait(`然后自家发电……`);
  await chara_talk.say_and_wait(`不不不！我为什么会联系到这个，再怎么说也……`);
  await chara32_talk.say_and_wait(`哦呀哦呀，数码碳，你在说什么呢？`);
  await chara_talk.say_and_wait(`噫————！`);
  await era.printAndWait(`看起来速子回来得不是时候。`);
  await sys_love_uma_in_event(19);
}

async function week_start_74(me) {
  await print_event_name(`记`, chara_talk);
  chara_talk.print(
    `今天是让人期待无比初生牛犊的${chara_talk.get_uma_sex_title()}酱选拔赛噢！再次感叹女神们的无尽潜力！`,
  );
  chara_talk.print(
    `然后……遇到了个奇怪的人！该说是遇到还是奇怪呢……看起来${chara_talk.sex}是同好呢。`,
  );
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(
    `就在今天，数码碳我，终于解决到底是该跑草地还是泥地的问题啦！值得待会小小庆祝一下，不过现在还是先记录吧。`,
  );
  chara_talk.print(
    `就是之前那个人，${chara_talk.sex}居然给出了一个完美的方案！真的是一语惊醒梦中人啊。`,
  );
  chara_talk.print(
    `最后，我同意了${chara_talk.sex}的邀请，成为了${chara_talk.sex}的担当${chara_talk.get_uma_sex_title()}。`,
  );
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`真的很意外，没想到训练员居然会和我一起去参加应援活动诶！`);
  chara_talk.print(`我之前从来都没想过，居然能有一个人能跟上我的步伐！`);
  chara_talk.print(`然后，去了好多地方啊，再回想起来的话……`);
  chara_talk.print(
    `现在想想果然，到最后训练员的脸色也不太好看，看起来要累坏了。`,
  );
  chara_talk.print(`不过即使如此，训练员也值得“同志”这一称号！`);
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`然后，去了好多地方啊，又来了又来了，是圣地巡礼噢！……`);
  chara_talk.print(
    `就是去到推们所去过的地方，对推们也有重要意义的地方，模仿推们行为的活动噢！`,
  );
  chara_talk.print(`我的天呐，训练员居然，答应了我的邀请，愿意和我一起折腾。`);
  chara_talk.print(`这简直如同多佛海峡般的共鸣，心脏受损般的共振！`);
  chara_talk.print(
    `还有啊还有啊，训练员居然知道了很多东西诶！有我完全没知道的推们的知识！果然，还是dd失格了吗……`,
  );
  chara_talk.print(
    `到了最后，对训练员进行了界限发言！真的没想到，在宇宙中居然还能有这样一个人肯听我的界限发言啊，感动得都不能自已了……`,
  );
  chara_talk.print(`然后，去了好多地方啊，再回想起来的话……`);
  chara_talk.print(
    `现在想想果然，到最后训练员的脸色也不太好看，看起来要累坏了。`,
  );
  chara_talk.print(`不过即使如此，训练员也值得“同志”这一称号！`);
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`又来了又来了，是圣地巡礼噢！`);
  chara_talk.print(
    `就是去到推们所去过的地方，对推们也有重要意义的地方，模仿推们行为的活动噢！`,
  );
  chara_talk.print(`我的天呐，训练员居然，答应了我的邀请，愿意和我一起折腾。`);
  chara_talk.print(`这简直如同多佛海峡般的共鸣，心脏受损般的共振！`);
  chara_talk.print(
    `还有啊还有啊，训练员居然知道了很多东西诶！有我完全没知道的推们的知识！果然，还是dd失格了吗……`,
  );
  chara_talk.print(
    `到了最后，对训练员进行了界限发言！真的没想到，在宇宙中居然还能有这样一个人肯听我的界限发言啊，感动得都不能自已了……`,
  );
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`夏季合宿快要到了，到时候就可以看得到穿着泳衣的马娘酱们！`);
  chara_talk.print(`在阳光的照耀下，比阳光更闪耀的是——马娘酱啊！`);
  chara_talk.print(`飞溅的西瓜，到底是哪位的手笔呢。`);
  chara_talk.print(`极速的排球，到底会由哪位接住呢。`);
  chara_talk.print(`还有刨冰，海鲜，全都在为马娘酱们增色啊！`);
  chara_talk.print(`到时候邀请训练员一起去玩吧！`);
  chara_talk.print(`……啊`);
  await era.printAndWait(`坐在笔记本前的粉色少女，停下了笔`);
  await chara_talk.say_and_wait(`我是不是，一直都考虑的是自己的……`);
  chara_talk.print(
    `如果说，要是把自私与马娘放在天平上掂量，那么天平，肯定会倾向右边。`,
  );
  chara_talk.print(`如果，把马娘与训练员放在天平上掂量呢？`);
  chara_talk.print(
    `虽然难以承认，但是数码我啊，从目前的行为看来，这个心中的天平都是倾向左边啊。`,
  );
  chara_talk.print(
    `所以，至少明天，在夏季合宿，为训练员做${me.sex}想做的事情。`,
  );
  chara_talk.print(`\n该怎么写呢……`);
  chara_talk.print(`事实上现在回忆起来，还是很害羞……`);
  chara_talk.print(
    `真的，数码碳我还是第一次知道，有这么一个人这么推我，而且还是那个，我的训练员。`,
  );
  chara_talk.print(`\n事实上，感觉从那天开始就很奇怪了……`);
  chara_talk.print(`看到训练员已经开始觉得坐立不安，该如何为好。`);
  chara_talk.print(
    `我懂的，我大概懂的所以啊，是感受心的跳动，还是忽略它的述说？`,
  );
  chara_talk.print(`……`);
  chara_talk.print(
    `\n我不得不坦白，我对训练员有了想法，对的，就是那种男女关系的想法。`,
  );
  chara_talk.print(`事实上啊，这么仔细一想，是不是有点不对劲？`);
  chara_talk.print(`数码碳你想想啊，和训练员一起去出门推活，`);
  chara_talk.print(`一起出门，一起看电影，一起逛庙会，在海滩述说感情……`);
  chara_talk.print(`不对吧？`);
  chara_talk.print(`如果，把马娘与训练员放在天平上掂量呢？`);
  chara_talk.print(`这不就是约会吗？！`);
  await chara_talk.say_and_wait(`虽然约会不仅是那个意思啦。`, true);
  chara_talk.print(
    `难道事实上我早就已经和训练员交往了，但其实只是忘了而已吗？！`,
  );
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`遭了遭了，昨天没记，今天回想起来才觉得万事不妙啊！`);
  chara_talk.print(`接下来该如何是好……`);
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`今天，`);
  chara_talk.print(`又和训练员一起去巡礼了，虽然马娘酱们还是依旧如此闪耀，`);
  chara_talk.print(`但和训练员坐在一起，总会心神不宁地偷瞄训练员……`);
  chara_talk.print(
    `现在回想起来，他还真是挺帅的啊，而且他那精神让我都为之敬佩！`,
  );
  chara_talk.print(`……决定了。`);
  era.drawLine({ content: '未知的页码' });
  chara_talk.print(`今天，与以往不同，我是在早上写下这篇日记的。`);
  chara_talk.print(`数码，你能行的！额，不是，这样想起来，我没什么魅力啊？`);
  chara_talk.print(
    `贫瘠的身体……可谓矮小的身体……就连平时行为，也像一个普普通通……`,
  );
  chara_talk.print(`不是，更像一个变态啊！`);
  chara_talk.print(
    `说起马娘就滔滔不绝的，一遇到熟悉的话题就语速不断加快的，这不就是变态吗？`,
  );
  chara_talk.print(`不是，除了训练员之外，我真的不可能和其他人交往了吧？`);
  chara_talk.print(
    `诶，能遇到训练员真的是幸运至极，这就是说，如果过了这村就没这店了！再也找不到这么能理解善待我的人了！`,
  );
  chara_talk.print(`数码啊数码，你这时候就应该立刻行动！`);
  chara_talk.print(
    `错过了可能就得下半辈子都捂着枕头用被子盖着脑袋在哭嚎了吧？`,
  );
  chara_talk.print(`训练员也是喜欢我的吧？不然的话也不会和我一起去应援的吧？`);
  chara_talk.print(`好好好，成功率可不小呀！`);
  chara_talk.print(`去去去，不要再等了！`);
  era.drawLine();
  await era.printAndWait(
    `你看了一下手机，按理说现在是数码早就开始训练的时候了，虽然还未到正式训练的时间……`,
  );
  await era.printAndWait(
    `不禁回想了一下最近数码的行为，自从上次海滩那次谈话过后，数码好像逐渐开始更加关注你了。`,
  );
  await era.printAndWait(
    `看起来${
      chara_talk.sex
    }除了应援${chara_talk.get_uma_sex_title()}酱外，也有挺多心思啊。`,
  );
  await era.printAndWait(`想着想着，数码已经从远处跑过来了。`);
  await era.printAndWait(`嗯？怎么脸看起来有点憋红？`);
  await era.printAndWait(
    `该不会是受伤了所以才这样吧？今天也是比平时迟了一点。`,
  );
  await me.say_and_wait(`数码！快停下来！`);
  await chara_talk.say_and_wait(`诶！`);
  await era.printAndWait(`快步跑到因惊讶而停下的数码跟前。`);
  await era.printAndWait(`蹲下仔细观察了数码的腿部。`);
  await chara_talk.say_and_wait(`那个……训练员？`);
  await era.printAndWait(`嗯……至少看起来没有红肿……`);
  await me.say_and_wait(`是不是腿部受伤了？要不要去保健室？`);
  await chara_talk.say_and_wait(`诶？`);
  await era.printAndWait(`遭了，数码好像还没意识到，看起来得先查看一下了。`);
  await era.printAndWait(
    `先检查一下膝盖，用左手扶住凸起外侧，用右手轻按里侧韧带，嗯，没有僵硬的感觉。`,
  );
  await chara_talk.say_and_wait(`那个，我说……`);
  await era.printAndWait(`然后是大腿，股二头肌和股直肌都处于很好的放松状态。`);
  await chara_talk.say_and_wait(`能不能先……停下？`);
  await me.say_and_wait(`这怎么能停！`);
  await era.printAndWait(`接着是小腿，小腿肌看起来状态完美。`);
  await era.printAndWait(
    `最后是脚了，不过还得先脱鞋，这样直接脱的话如果有伤肯定会造成二次伤害……`,
  );
  await chara_talk.say_and_wait(`训练员！我没有问题啦！`);
  await me.say_and_wait(`那为什么今天状态这么奇怪？`);
  await era.printAndWait(
    `还处于半蹲的状态仰着头看着数码的脸，看起来更发的红了。`,
  );
  await chara_talk.say_and_wait(`那个啊……先！先去训练室再说明吧！`);
  await me.say_and_wait(`但是……`);
  await chara_talk.say_and_wait(`……`);
  await era.printAndWait(`数码只是一言不发着盯着你。`);
  await me.say_and_wait(`\n那，可以说明了吗？腿是没问题是吧？`);
  await chara_talk.say_and_wait(`那个……先说明啊，腿是肯定没问题的。`);
  await me.say_and_wait(`……那是为什么……`);
  await era.printAndWait(`数码低着头，玩弄着手指，只能一个一个字吐出来。`);
  await chara_talk.say_and_wait(`事实上……我……自从……诶……`);
  await era.printAndWait(`说到一半，数码又叹起了气。`);
  await me.say_and_wait(`要不我先聊下吧。`);
  await me.say_and_wait(`这里也不好聊，我们就一起出去吧。`);
  await chara_talk.say_and_wait(`……啊。`);
  await era.printAndWait(
    `起身，打开训练室的门，去到训练场，爬上训练场的看台。`,
  );
  await era.printAndWait(
    `赛道，早上的朝阳恰好是给勤奋训练的${chara_talk.get_uma_sex_title()}最好的咖啡。`,
  );
  await chara_talk.say_and_wait(`那个，训练员？`);
  await me.say_and_wait(`去下一个地方吧。`);
  await chara_talk.say_and_wait(`啊？`);
  await era.printAndWait(`数码会跟上来的。`);
  await era.printAndWait(`河边，正午照耀下的河流亮得晃眼。`);
  await chara_talk.say_and_wait(`训练员，你是不是想……`);
  await era.printAndWait(`神社，下午斑驳树影恰好能遮住朝拜之地。`);
  await chara_talk.say_and_wait(`……`);
  await era.printAndWait(`公园，趁太阳还没下班灯光就早早替班了。`);
  await chara_talk.say_and_wait(`……`);
  await era.printAndWait(`海边，没有灯光的蓝色海岸只是由月光照明。`);
  await chara_talk.say_and_wait(`……`);
  await chara_talk.say_and_wait(`跟着走了一圈，感觉怎么着都无所谓了。`);
  await me.say_and_wait(`那就好。`);
  await chara_talk.say_and_wait(`训练员。`);
  await me.say_and_wait(`嗯。`);
  await chara_talk.say_and_wait(`我喜欢你。`);
  await era.printAndWait(`\n此刻，你的选择：`);
  era.printButton(`接受`, 1);
  era.printButton(`拒绝`, 2);
  const ret = await era.input();
  if (ret === 1) {
    chara_talk.print(`真是狼狈啊，没想到表白都要由训练员来引导。`);
    chara_talk.print(`不过，成功了。`);
    chara_talk.print(`对，成功了。`);
    chara_talk.print(`本来应该是更欣喜才对的，不过现在的感觉更多的是……`);
    chara_talk.print(`一种洋溢的幸福感。`);
    await sys_love_uma_in_event(19);
  } else {
    chara_talk.print(`\n真是狼狈啊，没想到表白都要由训练员来引导。`);
    chara_talk.print(`哈哈哈哈，结果，还是失败了。`);
    chara_talk.print(`不过，我懂了，我和训练员的关系并不仅是男女关系。`);
    chara_talk.print(`这其中有着更为复杂的情感所在……`);
    chara_talk.print(`想了很多，想写的很多，但是下不了笔……笔记本都被弄湿了……`);
    chara_talk.print(`还是觉得不甘啊……`);
    era.set('cflag:19:爱慕暂拒', 74);
  }
}
//热恋口上拒绝后重新升级剧情
/*TODO 
   await print_event_name(
    `一次不行，那就来第二次，这不是理所当然的吗！`,
     chara_talk,
   );
       chara_talk.print(`\n数码呀数码，过了这么久了，我终于也从痛苦的深渊中挣扎出来了！`);
       chara_talk.print(`\n不过，这么一想，果然！还是喜欢！还是喜欢得不得了！`);
       chara_talk.print(`\n所以，再来一次！这次数码你一定能成功的！`);
       await era.printAndWait(`\n再一次，你的选择是：`);
   era.printButton(`接受`, 1);
   era.printButton(`拒绝`, 2);
   const ret = await era.input();
   if (ret === 1) {
    chara_talk.print(`呜啊啊啊啊啊！成了！`);
    chara_talk.print(`为什么？`);
    chara_talk.print(`这不重要，成了才重要！`);
    await sys_love_uma_in_event(19);
    }else{
      chara_talk.print(`不是，这不对吧？`);
    chara_talk.print(`唔啊啊啊啊，不行！`);
    chara_talk.print(`就算是数码我，我也是有追求的！`);
    chara_talk.print(`我一定要，拿下！`);
    era.set('cflag:19:爱慕暂拒', 74);
    }
 */

async function week_end_89(me) {
  await print_event_name(`同居！果然还是会这样的吧？`, chara_talk);
  await era.printAndWait(
    `如果说，每天结束繁忙的工作，回到家里，闻到了从厨房传来的香味，还能听到有人在哼歌，那一定是偶然被大卡车送走又被消除记忆了。`,
  );
  await era.printAndWait(
    `所以说，到底是什么时候开始，数码拿到了钥匙，来到了你的家呢？`,
  );
  await era.printAndWait(
    `你还很清晰地记得，是在一个夜晚，在一个海滩上，数码向你表白，然后就是，顺理成章地，数码成为了你的女朋友。`,
  );
  await era.printAndWait(`事实上……交往上，和平日上的行为也没啥区别……`);
  await era.printAndWait(`还是一样地，一起推活，一起圣地巡礼。`);
  await era.printAndWait(`接着呢？`);
  await chara_talk.say_and_wait(`不行，这样不就没有区别了吗？！`);
  await chara_talk.say_and_wait(`是我之前的猜想是正确的吗……不对！`);
  await era.printAndWait(
    `嗯……然后为了做出改变，听说数码是参照了某些同人志，然后从你的手上借来了钥匙。`,
  );
  await era.printAndWait(
    `虽然是借走了，但在最开始几天还没有任何事情发生，想着，也许只是一时来兴吧，也把这件事放到了一边。`,
  );
  await era.printAndWait(
    `所以当某天，你拖着疲倦的身体，好不容易拿出钥匙插进锁孔，意识游荡时听到了除金属摩擦的声音时，还是有点被意外的。`,
  );
  await era.printAndWait(`后来啊，数码来你家也越来越频繁了。`);
  await era.printAndWait(`原本家里单调的气息也逐渐混杂了另样的色彩。`);
  await era.printAndWait(
    `不过，最令你感到有些许奇怪并想笑的是，最开始占领你房间的是……`,
  );
  await era.printAndWait(`各种${chara_talk.get_uma_sex_title()}周边。`);
  await era.printAndWait(
    `比如说爱丽速子红茶杯、曼城茶座咖啡杯、目白麦昆鼠标垫、真弓快车玩偶……`,
  );
  await era.printAndWait(
    `其中最让你觉得神奇的是，甚至还有tomachop的玩偶，就是北港火山所在的苫小牧的那个吉祥物！`,
  );
  await era.printAndWait(`还有一天正当在家里看到数码搬着一个烘干机想要放到房间时，你觉得这样下去可不行了！
得出重拳！`);
  await era.printAndWait(
    `你虽然有着很多世上认为最为珍贵的数码周边，比如一些胜利的旗帜，原型的玩偶等……但是基本不是在训练室就是在被官方保管。`,
  );
  await era.printAndWait(`走走走！去超市，把数码的所有周边都买几份！`);
  await era.printAndWait(`叫店员直接运到家门口！`);
  await era.printAndWait(
    `满意地重新鉴赏一下数码在各项赛事的英姿。再把玩偶沙发放个，床上放个，电脑上放个，电视上放个……`,
  );
  await era.printAndWait(
    `然后重新把自己之前一直珍藏的数码作品从隐秘的小角落摆到沙发旁……`,
  );
  await era.printAndWait(`哈哈哈哈，完成了！现在就想看到数码的表情吖！`);
  await era.printAndWait(`然而结果是——`);
  await era.printAndWait(
    `这对数码的冲击力太大，你只能眼睁睁地看着${chara_talk.sex}双脸越来越红最后沉闷一声倒在地上。`,
  );
  await era.printAndWait(
    `除了这些相对有趣的故事外，平日的生活事实上更加平淡。`,
  );
  await era.printAndWait(
    `平淡无奇，就像打开电饭煲后，看到的升腾起白雾的米饭。`,
  );
  await era.printAndWait(
    `所以当你和数码的孩子出生时，除了喜悦外，也会猛然发觉，原来已经这么久了啊。`,
  );
  await era.printAndWait(
    `发现数码怀孕的记忆，也只是模糊而不可察，带着一丝暖流。`,
  );
  await era.printAndWait(
    `最一开始女儿就很让人省心，看到数码，看到各种${chara_talk.get_uma_sex_title()}周边就会安定，只是偶尔会模仿数码发出奇怪的声音。`,
  );
  await era.printAndWait(
    `女儿很像数码，她从小就很喜欢${chara_talk.get_uma_sex_title()}，特别是喜欢坐在电视前看数码的live。`,
  );
  await era.printAndWait(`倒不如说是你作为父亲所以经常播放数码的录像？`);
  await era.printAndWait(
    `而每次看到你和女儿在看录像时，数码最开始总是化身蒸汽机躲进房间里加湿，但到后来也会靠着你抱着女儿一起看了。`,
  );
  await era.printAndWait(`不管怎样，女儿在悉心照料下，健康地成长了。`);
  await era.printAndWait(
    `${chara_talk.get_uma_sex_title()}是成长得很快的，转眼间，她就已经要进特雷森校园了。`,
  );
  await era.printAndWait(
    `跟数码商量，数码觉得照女儿那个喜欢${chara_talk.get_uma_sex_title()}的样，让她自己去参加开幕式感觉会大事不妙。`,
  );
  await era.printAndWait(`不过还是决定，这件事还是她自己去体会比较好。`);
  await era.printAndWait(
    `但是啊，送别前一晚，数码再次整理行李，企图再塞进更多的物资。`,
  );
  await era.printAndWait(
    `明明家里离特雷森这么近，明明你还是特雷森的训练员，明明女儿随时都可以见到${chara_talk.get_couple_title}，但你也在苦恼着是不是还缺必备物品。`,
  );
  await era.printAndWait(`数码也笑了，说着这难道还是永别不成。`);
  await era.printAndWait(
    `女儿倒是哭得很大声，让${chara_talk.get_couple_title}安慰了很久。`,
  );
  await era.printAndWait(`不过，明天终会成为今天，现在是她要上学的时候了。`);
  await era.printAndWait(
    `夜晚的雾气还未散去，远边的天际也只是微红，甚至连路灯都还亮着。`,
  );
  await era.printAndWait(`你跟数码拿着行李，跟女儿来到楼下。`);
  await era.printAndWait(`虽然女儿坚决要自己拿下去，但你和数码却不肯松手。`);
  await era.printAndWait(
    `纠缠不过${chara_talk.get_couple_title}，女儿也只能作罢。`,
  );
  await era.printAndWait(
    `面前就是${chara_talk.get_uma_sex_title()}专用道了，沿着这条路就可以很快到达特雷森，身为${chara_talk.get_uma_sex_title()}，甚至不用叫出租车。`,
  );
  await era.printAndWait(
    `把行李放下，虽然没多少，但对于你来说还是挺累的，相比数码，就拿得多得多。`,
  );
  await era.printAndWait(`诶呀，昨晚没睡好，还一大早起来搬东西，你有点迷糊。`);
  await era.printAndWait(
    `数码关心地用身体支撑了一下你，不过，看着她的眼睛，你知道她也没睡好。`,
  );
  await era.printAndWait(`怎么了？你环视了一下，女儿呢？`);
  await era.printAndWait(`哦哦哦！就在数码旁边呢。`);
  await era.printAndWait(`女儿紧紧拥抱了数码，然后也紧紧拥抱了你。`);
  await era.printAndWait(
    `很轻柔，得紧紧拥抱才能感受到她的存在，还在成长期的她也没多高，就像和数码一样。`,
  );
  await era.printAndWait(`女儿「那么，我要走啦！再见！」`);
  await era.printAndWait(`挥着手，女儿跑起来了。`);
  await era.printAndWait(`诶！等等，行李还没拿呢！`);
  await era.printAndWait(
    `焦急地想要数码追上去，结果却发现数码只是看着女儿远处的方向。`,
  );
  await era.printAndWait(`等一下啊！怎么了？`);
  await chara_talk.say_and_wait(
    `训练员啊，既然女儿就在特雷森，那直接给她送过去不也挺方便吗？`,
  );
  await me.say_and_wait(`不是，数码，女儿她！她……`);
  await era.printAndWait(
    `就像是经常路过的路口，经常光顾的店铺，经常玩的游戏，突然说要封路了，要倒闭了，要关服了……`,
  );
  await era.printAndWait(
    `明明以为会万年不变的，却突然消失的那种荒诞感，此刻却突然充满了你的内心。`,
  );
  await era.printAndWait(`再定睛一看，女儿早已没了身影。`);
  await me.say_and_wait(`数码！这，这是怎么回事！这……这为什么……`);
  await chara_talk.say_and_wait(
    `听说，是一个幻想，是一个疾病，或者是一个灵异现象……`,
  );
  await chara_talk.say_and_wait(
    `大众普遍认为，这是一个精神疾病……传播方式不明，范围仅在${chara_talk.get_uma_sex_title()}及所接触人群……`,
  );
  await era.printAndWait(`那……那是为什么……创造出来只是为了分离吗？`);
  await era.printAndWait(
    `正当恍惚间，你发现，数码此刻却看着特雷森的方向，再也不说一句话。`,
  );
  await era.printAndWait(`你猛然意识到，数码和你的感受是一样的。`);
  await era.printAndWait(
    `平日作为训练员，一直在支撑着数码的你，在这一次，她在支撑着你。`,
  );
  await era.printAndWait(
    `她尽量以一种平和的语气，来冲淡你的伤感。从背后抱着数码，才发现，数码在发抖。`,
  );
  await era.printAndWait(`本来就娇小的身体，显得更脆弱了。`);
  await era.printAndWait(`石头扔进了平静的湖面，掀起了巨浪。`);
  await chara_talk.say_and_wait(`……呜呜呜……`);
  await chara_talk.say_and_wait(`我……我早该知道的……`);
  await chara_talk.say_and_wait(`事实上……我……数码碳……早就知道……`);
  await chara_talk.say_and_wait(`当……意识到一段时间的记忆是那么模糊不清……`);
  await chara_talk.say_and_wait(`当……注意到家里的育儿物资从没变少……`);
  await chara_talk.say_and_wait(`当……翻到以前绘制的同人志……`);
  await chara_talk.say_and_wait(`我那时候啊……就已经明白……`);
  await chara_talk.say_and_wait(`是我爱训练员太深……却又不敢……再继续深入……`);
  await chara_talk.say_and_wait(`并且……训练员你也受到了影响……`);
  await chara_talk.say_and_wait(`所以啊……女儿诞生了……`);
  await chara_talk.say_and_wait(`这就是她的全部……`);
  await era.printAndWait(
    `在数码带着哽咽的话中，你终于明白了，女儿就是数码愿望的产物。`,
  );
  await chara_talk.say_and_wait(
    `只要……只要我们把刚才的事情忘记……那么，我们还能再见到女儿……`,
  );
  await chara_talk.say_and_wait(
    `如果……我们记住，那么女儿……就会……真的消失不见……`,
  );
  await chara_talk.say_and_wait(
    `呵呵呵……事实上，这不就是选择要不要面对现实吗……这根本不就是所谓的精神疾病吗……`,
  );
  era.printButton(`记住`, 1);
  era.printButton(`遗忘`, 2);
  const ret = await era.input();
  if (ret === 1) {
    await me.say_and_wait(`不对！`);
    await me.say_and_wait(`女儿她并不是你的想象！她是我们爱情的象征啊！`);
    await era.printAndWait(`正是在两人止步不前时，是女儿拉起了数码和你的手。`);
    await me.say_and_wait(`女儿她提醒了我，是时候了，我们该更近一步了！`);
    await era.printAndWait(
      `转过数码的身子，数码本来已经逐渐停止流泪的眼睛再次湿润。`,
    );
    await chara_talk.say_and_wait(`你的意思是说？`);
    await me.say_and_wait(`数码，我们结婚吧。`);
    await chara_talk.say_and_wait(`哈哈哈……这样看来，担心这个的我是真的傻呢……`);
    await era.printAndWait(
      `数码笑了，眼里的泪珠化作珍珠，是你最为珍惜的事物。`,
    );
    await era.printAndWait(`你吻了上去。`);
    await era.printAndWait(`咸的。`);
    await era.printAndWait(`想必是带有兴奋的泪水`);
    await era.printAndWait(`苦的。`);
    await era.printAndWait(`想必是带有委屈的泪水。`);
    await era.printAndWait(`……甜的。`);
    await era.printAndWait(`想必是……不再是泪水。`);
    await era.printAndWait(`舌头交融，身体相贴，双手交织。`);
    await era.printAndWait(`再也没人能分开${chara_talk.get_couple_title}。`);
    await sys_love_uma_in_event(19);
  } else {
    await era.printAndWait(
      `一切的事情就像是一场噩梦，但事实上什么都没有发生。`,
    );
    await era.printAndWait(
      `${chara_talk.get_couple_title}的女儿一切正常地入学了特雷森，你作为父亲自然也成为了你女儿的训练员。`,
    );
    await era.printAndWait(`数码作为母亲，也经常和女儿一并训练。`);
    await era.printAndWait(
      `一大一小（虽然大的也挺小）一并训练，真是一个珍奇的画面啊。`,
    );
    await era.printAndWait(`为了女儿的成长着想，你是想让她在特雷森留宿的。`);
    await era.printAndWait(
      `但是她似乎还是比较挂念父母，纠缠不过，还是暂时让她回家住好了。`,
    );
    await era.printAndWait(
      `一切都很正常，除了女儿好像也有点像初期的数码那样经常尊死，嗯……虽然数码现在也差不多。`,
    );
    era.set('cflag:19:爱慕暂拒', 89);
  }
}

/*TODO 佳偶口上选择选项2后重新升级剧情
 await print_event_name(
     `终究是，梦幻的泡影`,
     chara_talk,
   );
   await me.say_and_wait(`周末了，要不在忙碌的过程中看一下女儿吧？`);
   await me.say_and_wait(`正来到了学生宿舍门口，想着打个电话给女儿的，然后……`);
   await chara_talk.say_and_wait(`诶？训练员你在这里干什么？`);
   era.printButton(`说什么呢，我在等女儿啊。`, 1);
   await era.printAndWait(`听到这番话的数码，不知为何，却低下了头。`);
   await chara_talk.say_and_wait(`\n……是，是时候了吗……要，再次告诉训练员真相吗……`,true);
   chara_talk.print(`\n我该怎么办:`);
   era.printButton(`告诉`, 1);
   era.printButton(`不告诉`, 2);
   const ret = await era.input();
   if (ret === 1) {
   await chara_talk.say_and_wait(`我……我本以为，再次的告知仅会带来……泪水——`,true);
   await chara_talk.say_and_wait(`不过，这种感觉……被训练员拥抱求婚的感觉……真的是太好了……`,true);
     await sys_love_uma_in_event(19);
   } else {
   await chara_talk.say_and_wait(`算了，就这样吧，和训练员与女儿的每一天，都十分快乐`,true);
   await chara_talk.say_and_wait(`我希望，这样的每一天，都持续下去，请原谅我。`,true);
     era.set('cflag:19:爱慕暂拒', 89);
   }
*/

async function week_end_99(me) {
  me.name = '训练员';
  await print_event_name('信', chara_talk);
  await era.printAndWait(`“听说数码老师的新刊要发售了噢“`);
  await era.printAndWait(`“诶？真的吗？隔了这么久，终于能看到新刊了吗？“`);
  await era.printAndWait(`“就在这下个月在东京的展子呢！”`);
  await era.printAndWait(`所以说……到底是谁开始造的谣！`);
  await era.printAndWait(
    `没过几天就在网上发酵，现在所有数码老师的粉丝都以为数码下个月会出新刊。`,
  );
  await era.printAndWait(`而数码看到这些推文的时候，第一反应是……愧疚。`);
  await chara_talk.say_and_wait(
    `仔细一想……我好像很久没出过新刊了……啊啊啊，真的是万分抱歉。`,
  );
  await era.printAndWait(`对着屏幕低下了头，为在屏幕外的粉丝道歉。`);
  await era.printAndWait(
    `接着，数码转过身来，拉着你的手，眼里冒着泪光，做出一副要哭出来的表情。`,
  );
  await era.printAndWait(`诶，又是这样，你心想。`);
  await era.printAndWait(
    `这代表着${chara_talk.sex}要开始闭关了，接下来的家务活什么的都由你完成，做饭也是。`,
  );
  await era.printAndWait(`倒也不是很累，就是，在这些日子里，会缺乏一些……`);
  await era.printAndWait(
    `来自数码的能量，不能吸食数码了，不能摸头发了，不能搓耳朵了，不能啃尾巴了……`,
  );
  await chara_talk.say_and_wait(`拜托了！`);
  await me.say_and_wait(`我也不是不认识你。`);
  await era.printAndWait(`结果，还是答应了，这么说来，有过没答应过的吗？`);
  era.drawLine();
  await era.printAndWait(`在打扫过程中，肩膀与背部的酸爽提醒你，该锻炼了。`);
  await era.printAndWait(
    `扫地，拖地，本来想着能买一个洗地机器人，但是又意识到，展柜可清理不到。`,
  );
  await era.printAndWait(
    `是的，你家最难清理的地方，是展柜，很多的展柜，很多的周边。`,
  );
  await era.printAndWait(`诶，拿下鸡毛掸子简单清理下就好。`);
  await era.printAndWait(`突然，白色的相片吸引了你。`);
  await era.printAndWait(`让你泛起温情的相片是你与数码的结婚照。`);
  await era.printAndWait(
    `纯白的${
      chara_talk.sex_code - 1 ? '婚纱' : '西装'
    }装饰起粉色的${chara_talk.get_uma_sex_title()}，头顶上的红色蝴蝶结依然展示它的存在感，精致的颈部，让人引起呵护之心的手，还有，那含泪的灰蓝色双眼。`,
  );
  await era.printAndWait(
    `明明感觉并没有过去多久，回想起来穿着${
      chara_talk.sex_code - 1 ? '婚纱' : '西装'
    }的数码还在眼前，却又感觉度过了几年。`,
  );
  await era.printAndWait(`不管怎样，看着这幅结婚照，让你得到了不少能量补充。`);
  await era.printAndWait(`要不就打扫一些携带着重要回忆的东西就好了。`);
  await era.printAndWait(
    `推门走进收藏室，里面摆着几个巨大的全方位透明柜子，摆满了各种${chara_talk.get_uma_sex_title()}的各种周边。`,
  );
  await era.printAndWait(
    `这间房间本来是客房的，后面因为数码收集的东西多了起来，单独客厅里的展柜已经没位置了，还是单独将一个房间空出来放这些周边了。`,
  );
  await era.printAndWait(
    `顺带一提，你之前所收集的数码周边，在最里面的柜子里。`,
  );
  await era.printAndWait(
    `诶，之前跟${chara_talk.sex}较劲不过来，说着「啊哇哇哇！不行不行，果然还是太羞耻了！」，还是放到了这里。`,
  );
  await era.printAndWait(
    `来到摆着数码周边的柜子前，各种形态的数码，看着都能让你会想到以前的场景。`,
  );
  await era.printAndWait(
    `高举着应援棒流着口水的数码，想必也没其他${chara_talk.get_uma_sex_title()}能有这种周边吧。`,
  );
  await era.printAndWait(
    `看着看着，逐渐走到了柜子的尽头，然后，你看到了——一堆行李。`,
  );
  await era.printAndWait(`这是……`);
  await era.printAndWait(`想起来了，是女儿的行李，她的行李。`);
  era.drawLine();
  chara_talk.print(
    `诶呀诶呀，终于，完成得差不多了，接下来就只剩下……哦哦哦……到吃饭的时候了啊。`,
  );
  chara_talk.print(`今天的饭是什么呢～`);
  chara_talk.print(`打开门看到的居然是摆满了一桌的菜？！`);
  chara_talk.print(`今天是什么特别日子吗？数码我忙忘了吗？！`);
  chara_talk.print(`不妙不妙，数码啊数码，你怎么能把……诶？`);
  await me.say_and_wait(`数码，看这表情，是以为错过了什么吗？`);
  await chara_talk.say_and_wait(
    `诶诶诶？是我的，我的错，忙着忙着忙忘掉了啊！数码我就应该升天去见到……`,
  );
  await me.say_and_wait(`停停停停，稍等，是因为我找到了充满了各种回忆的这个——`);
  chara_talk.print(`看到训练员拿起了一个……信封？`);
  await chara_talk.say_and_wait(
    `在这年代，还能看到信真的是很稀奇啊，难道说是那种什么写给未来的信，还或者是什么幽灵的信……`,
  );
  await me.say_and_wait(`猜到了呢，不过或许不是你想的那样。`);
  chara_talk.print(
    `接过训练员递过来的信，还盖着印泥呢，上面的纹路正是我之前买的特雷森周边，看看落款是……`,
  );
  chara_talk.print(`哦哦哦哦！这还真是吓人啊，没想到，居然是女儿的信啊。`);
  await chara_talk.say_and_wait(
    `难道这是什么从那一边寄过来的信吗？！居然是真实存在的吗？！`,
  );
  await chara_talk.say_and_wait(
    `打开了会不会像什么那种恐怖游戏什么的，恶灵附体什么的！`,
  );
  await me.say_and_wait(`诶，这么说来，要不就打开试试？`);
  await chara_talk.say_and_wait(
    `不不不，总感觉要先开个光，把之前万圣节决胜服的那个符咒拿出来先……`,
  );
  chara_talk.print(
    `事实上，拿着信封，一直在说什么车轱辘话，手却像是脱力了般，连一封轻飘飘的信都拿不稳。`,
  );
  await me.say_and_wait(`……`);
  chara_talk.print(`看着训练员，他……他应该也是这样吧。`);
  chara_talk.print(`靠着训练员坐下了，一个椅子挤一下。`);
  chara_talk.print(`他伸过了手，抱紧了我……都能感受到他手掌心的冷汗。`);
  chara_talk.print(`打开吧。`);
  chara_talk.print(`沙沙……是里面的纸摩擦的声音。`);
  chara_talk.print(`揭开印泥，翻开信封，抽出里面折叠的信纸……`);
  chara_talk.print(`翻开吧。`);
  chara_talk.print(`翻开信纸，里面写着——`);
  await era.printAndWait(`\n爸爸妈妈：`);
  await era.printAndWait(`        谢谢你们。`);
  await era.printAndWait(`你们的女儿`);
  await chara_talk.say_and_wait(`\n唔哈，什么嘛，果然啊，当然是写着这些的啊！`);
  await me.say_and_wait(`这不当然嘛！`);
  await chara_talk.say_and_wait(
    `\n唔噢噢噢，来来来，吃饭吧吃饭吧，好好地休息一下！`,
  );
  chara_talk.print(
    `热腾腾的美味佳肴，升起的薄雾，温暖的训练员，递到嘴里的嫩滑的汉堡肉。`,
  );
  chara_talk.print(`看着训练员夹着菜递过来时的笑容，当然是要好好享用。`);
  chara_talk.print(`拍拍训练员的大腿，嗯，最近有在做家务活健身啊……`);
  await me.say_and_wait(`数码？现在？在这里？不打算吃完饭吗？`);
  await chara_talk.say_and_wait(
    `无论是吃完前还是吃完后的结果都一样吧？不一样都是吃吗？咕嘿嘿……吸溜——`,
  );
  chara_talk.print(`哇，感觉自己发出了很不妙的声音。`);
  await chara_talk.say_and_wait(
    `唔噢噢噢哦，对对对，就是现在，都一周了，我都忍到现在了！呜呜呜，你知道这一周我是怎么过来的吗！`,
  );
  await chara_talk.say_and_wait(
    `明明，明明数码我都画了一周同人志了，按照惯例，画完后都不是要庆祝一下吗？！`,
  );
  await me.say_and_wait(`不不不，这是你的问题吧！还有，数码你画完了？`);
  await chara_talk.say_and_wait(
    `……还，还有一些，但真就还有一些了！而且这重要吗？不应该是我更重要吗？`,
  );
  await me.say_and_wait(
    `啊啊啊，你这一周不也把我冷落了！现在还想开吃是吧！待会还是我整理！`,
  );
  chara_talk.print(`总……总感觉有些抱歉……不过……`);
  await chara_talk.say_and_wait(`非常抱歉！麻烦你待会整理了！`);
  await sys_love_uma_in_event(19);
}

/**
 * 爱丽数码 - 爱慕
 *
 * @author 片手虾好评发售中！
 */
module.exports = async () => {
  const love = era.get(`love:19`),
    me = get_chara_talk(0);

  switch (love) {
    case 49:
      await week_end_49(me);
      break;
    case 74:
      await week_start_74(me);
      break;
    case 89:
      await week_end_89(me);
      break;
    case 99:
      await week_end_99(me);
  }
};
