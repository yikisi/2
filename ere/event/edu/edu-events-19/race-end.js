const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');
const CharaTalk = require('#/utils/chara-talk');
const chara_talk = new CharaTalk(19);

/**
 * @param {HookArg} hook
 * @param {{race:number,rank:number,relation_change:number}} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const chara61_talk = get_chara_talk(61),
    chara58_talk = get_chara_talk(58),
    chara15_talk = get_chara_talk(15),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:19:育成回合计时');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('出道战胜利', chara_talk);
    await era.printAndWait(
      `出道战，数码在这场比赛中出色地拿到了第一名，然后……`,
    );
    await era.printAndWait(
      `本来以为会看到会尊成灰的数码，像平时一样释放${chara_talk.sex}的爱意，没想到看起来${chara_talk.sex}居然安静下来了，${chara_talk.sex}也有这种时候啊……`,
    );
    await chara_talk.say_and_wait(`……是原点，也是顶点……`);
    await chara_talk.say_and_wait(
      `初次的出闸，无法把控的时间节点，相互纠缠的玉足……`,
    );
    await chara_talk.say_and_wait(
      `汗水四溅，因为焦急而一片空白的大脑，但是伴随着观众的欢呼声消失，留下来的只有揭示板上的结果……`,
    );
    await era.printAndWait(`数码，居然能这样描绘出确切的情感啊。`);
    await chara_talk.say_and_wait(
      `太！太感动了！无论什么都令人不禁落泪，对吧！对吧！`,
    );
    await me.say_and_wait(`对呢，初次的比赛，出道赛，恭喜了。`);
    await chara_talk.say_and_wait(
      `啊啊啊，奔跑的时候，数码被其他${chara_talk.get_uma_sex_title()}酱的情感冲击得乱七八糟，数码我……`,
    );
    await chara_talk.say_and_wait(
      `我真的是，小看了出道战！出道战，谁都是赢家呢！谁都是！`,
    );
    await chara_talk.say_and_wait(
      `被夹杂着如此丰富的情感，无论是谁，都会收获满满吧？`,
    );
    await era.printAndWait(
      `数码，真的很开心，无论是在比赛中的步伐，还是比赛后的感想，都传达出${chara_talk.sex}对比赛的喜爱。`,
    );
    await chara_talk.say_and_wait(
      `训练员，今天的比赛只是入门吧！接下来还有很多比赛吧！还会遇到更多的${chara_talk.get_uma_sex_title()}酱吧！`,
    );
    await me.say_and_wait(
      `对，前面，还有很多${chara_talk.get_uma_sex_title()}在等着你。`,
    );
    await chara_talk.say_and_wait(
      `太棒了！我跨过了乐园的门槛，真的不小心就跨过去了！一直以为那是我不应涉及的领域！`,
    );
    await chara_talk.say_and_wait(
      `下一次，我想要再看到这样的${chara_talk.get_uma_sex_title()}酱们！`,
    );
    await me.say_and_wait(`那么，下一次跑草地比赛怎么样呢？`);
    await chara_talk.say_and_wait(
      `嗯？诶，这次是泥地，下次就草地吗……对不起，是我有些得意忘形了，因为太开心，脑海里的都跑到九霄云外了。`,
    );
    await chara_talk.say_and_wait(
      `我还想再跑一次泥地比赛，再感受一次这种气氛！`,
    );
    await era.printAndWait(`商量过后，你们决定下一次比赛是：新年的风信子杯`);
  } else if (
    extra_flag.race === race_enum.hyac_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('风信子胜利', chara_talk);
    await era.printAndWait(`数码果然还是漂亮地到达了终点，该说是毫无悬念吗……`);
    await chara_talk.say_and_wait(`呼……哈……数码我，做到了……`);
    await chara_talk.say_and_wait(
      `冲过了终点，然后，见证到了，${chara_talk.get_uma_sex_title()}酱们的光辉！`,
    );
    await chara_talk.say_and_wait(
      `该说是果然还是有点意外呢！我本以为是${chara_talk.get_uma_sex_title()}酱们这种奔跑的觉悟很尊……`,
    );
    await chara_talk.say_and_wait(
      `但恐怕${chara_talk.get_uma_sex_title()}酱们对比赛所寄托的愿望更深……只要我再继续比赛，那一定能知道${
        chara_talk.sex
      }们耀眼的原因！`,
    );
    await chara_talk.say_and_wait(`再接着以这种不干扰的主义推下去吧！`);
    await era.printAndWait(`？？？「呜呜呜……呜……」`);
    await era.printAndWait(`？？？「唔啊啊啊啊啊！」`);
    await era.printAndWait(
      `从不远处传来了某个${chara_talk.get_uma_sex_title()}的痛哭。`,
    );
    await chara_talk.say_and_wait(
      `那个${chara_talk.get_uma_sex_title()}，我记得是刚才……`,
    );
    await era.printAndWait(
      `如果没记错的话，${chara_talk.sex}刚好是第六名，恰好在揭示板外。`,
    );
    await era.printAndWait(
      `？？？「揭示板……连揭示板都没能……重赏又怎么有可能……！」`,
    );
    await era.printAndWait(
      `一直以来都看着${chara_talk.get_uma_sex_title()}的数码，现在却完全不敢再继续注视了，扭开视角转过身来。`,
    );
    await era.printAndWait(
      `在穿过地下通道时，数码一直都回避着其他${chara_talk.get_uma_sex_title()}，不是以往的保持距离，而是刻意避开不看。`,
    );
    await chara_talk.say_and_wait(`……`);
    await era.printAndWait(
      `即使如此，前面还是看到了两个${chara_talk.get_uma_sex_title()}，是刚才第二第三的${chara_talk.get_uma_sex_title()}啊。`,
    );
    await era.printAndWait(`数码正准备避开，然后……`);
    await era.printAndWait(`${chara_talk.get_uma_sex_title()}A「呜呜呜……」`);
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B「不是不是，第二名了哦？你哭什么啊？」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}A「明明，明明，是与前辈你的对决的……一直以来都想着，能与你比胜负，然后，超越你……」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B「那不是达到了吗？你啊，真的很强啊，我也差不多要成老骨头了噢～」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}A「……我一直都以为……我只要胜过前辈……我就能……但是，${
        chara_talk.sex
      }真的，很强……伸出手都无法……」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B「钻石君主！你努力了吧！全力以赴了吧！」`,
    );
    await era.printAndWait(`${chara_talk.get_uma_sex_title()}A「但是……」`);
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B「不管你我的成绩如何，闪耀系列赛还是会一直持续下去，它可不会等我们！」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B「你比我强，而且，你还有潜力，你以后，一定会挑战重赏吧！一定会挑战G1吧！让${
        chara_talk.sex
      }们刮目相看吧！」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B「胜者舞台，能一起去吧？」`,
    );
    await era.printAndWait(
      `${chara_talk.get_uma_sex_title()}B抬起了手，擦了${
        chara_talk.sex
      }同伴的眼泪。`,
    );
    await era.printAndWait(`${chara_talk.get_uma_sex_title()}A「！」`);
    await era.printAndWait(`数码正准备避开，然后……`);
    await me.say_and_wait(
      `${chara_talk.sex}使劲地吸了下流下的鼻涕，狠狠地点了头。`,
    );
    era.println();
    await era.printAndWait(
      `看着${chara_talk.sex}们拉着手远去，数码这次，再也无法说出任何「磕到了」的话。`,
    );
    await chara_talk.say_and_wait(`……`);
    await me.say_and_wait(`数码，还好吗？`);
    await chara_talk.say_and_wait(`骗人的……不干涉什么的……`);
    await chara_talk.say_and_wait(`这种事情，根本不可能。`);
    await chara_talk.say_and_wait(
      `只要参赛，那就一定会有胜者，一定会有败者……就算输了也很尊，全部都是胜者什么的，真亏我说得出这种话啊……`,
    );
    await chara_talk.say_and_wait(
      `正是登上赛场，所建立的联系，才会让${chara_talk.get_uma_sex_title()}们如此之尊，这不是你一直以来就知道的吗？`,
    );
    await era.printAndWait(
      `数码在此次比赛，似乎是能窥探到了一些${chara_talk.get_uma_sex_title()}为何尊，为何伟大的奥秘了。`,
    );
    await era.printAndWait(
      `但是${chara_talk.sex}又突然认识到了${chara_talk.sex}作为一个对手，却把自己当成一个观众，还无情地夺走了冠军。`,
    );
    await era.printAndWait(`这是十分失敬的。`);
    await era.printAndWait(`所以数码，在胜者舞台后，回到训练室时……`);
    await chara_talk.say_and_wait(
      `训练员，我想要聊一下关于之后的事情，我要说一些不像我自己的话了，可以吗？？`,
    );
    await me.say_and_wait(`当然。`);
    await chara_talk.say_and_wait(`我觉得，不论如何，我都要参加……G1赛事。`);
    await chara_talk.say_and_wait(
      `感觉，对在场的所有${chara_talk.get_uma_sex_title()}们，都是犯下了需要在炙热铁板上土下座的失礼`,
    );
    await chara_talk.say_and_wait(
      `既然如此，那就不得不去做了，参赛，战胜G1，然后让其他人觉得，数码很强。`,
    );
    await era.printAndWait(
      `想要证明，证明${chara_talk.sex}真的是足够强大的，为了给所有输给${
        chara_talk.sex
      }的${chara_talk.get_uma_sex_title()}一个交代。`,
    );
    await chara_talk.say_and_wait(
      `还有，想要确定一下，${chara_talk.get_uma_sex_title()}酱们到底是如何面对G1比赛的！`,
    );
    await era.printAndWait(
      `想要证明，证明${chara_talk.sex}真的是足够强大的，为了给所有输给${
        chara_talk.sex
      }的${chara_talk.get_uma_sex_title()}一个交代。`,
    );
    await chara_talk.say_and_wait(
      `还有，想要确定一下，${chara_talk.get_uma_sex_title()}酱们到底是如何面对G1比赛的！`,
    );
    await era.printAndWait(
      `数码与你，将下一次比赛，定在了五月前半的nhk英里杯。`,
    );
    await chara_talk.say_and_wait(
      `我要，出赛，然后——带着${chara_talk.sex}们的份一起！`,
    );
    await era.printAndWait(
      `偶然的事件，但并不是偶然的结果，胜利与失败，其所蕴含的悲哀——推动了${chara_talk.name}的未来。`,
    );
  } else if (
    extra_flag.race === race_enum.nhk_cup &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('nhk英里杯胜利', chara_talk);
    await era.printAndWait(
      `实况「是${chara_talk.name}！${chara_talk.name}！${chara_talk.sex}给我们展示了无论是草地还是泥地，都不在${chara_talk.sex}的话下！」`,
    );
    await era.printAndWait(`冲过终点的数码，连脚步都有点踉踉跄跄了。`);
    await chara_talk.say_and_wait(
      `哈……呼……好……没有一点残余能量了……连推的余力都没了……用了，全力……！`,
    );
    await chara_talk.say_and_wait(`啊啊啊，阳光……好耀眼……天空……好……遥远……`);
    await chara_talk.say_and_wait(`啊……这就是……`);
    await era.printAndWait(`（咚！）`);
    await era.printAndWait(`数码倒下了！`);
    era.drawLine();
    await era.printAndWait(
      `幸好，经过了赶来医生的判断，数码只是运动过度了，休息一下就好。`,
    );
    await era.printAndWait(
      `在这一次，数码真正地用出了全力，跟以往不同，这次的数码，背负了作为选手的信念。`,
    );
    await era.printAndWait(`所以，在用尽全力后，数码激动地倒下了。`);
    await era.printAndWait(
      `你背着数码，回到了休息室，然后……发现了两个熟悉的身影，是好歌剧还有名将怒涛。`,
    );
    await chara15_talk.say_and_wait(`数码君？振作一点！`);
    await me.say_and_wait(`没事，${chara_talk.sex}休息一下就好。`);
    await era.printAndWait(`在说着的过程中，把数码躺着放在了休息室的沙发上。`);
    await era.printAndWait(`没过多久，数码就睁开了双眼。`);
    await chara_talk.say_and_wait(`嗯……嗯……诶？！`);
    await chara_talk.say_and_wait(`歌剧和怒涛？！你们怎么？`);
    await me.say_and_wait(
      `${chara_talk.sex}们非常担心你，所以也来到了休息室来看望你……倒不如说是一开始就在休息室里面了。`,
    );
    await chara15_talk.say_and_wait(`怎么这么突然？`);
    await chara15_talk.say_and_wait(
      `不是突然！是怒涛，说有一位能在各种舞台回旋的舞者，为了欣赏新的演员的诞生，所以，我来了。`,
    );
    await chara58_talk.say_and_wait(
      `唔唔唔，我非常感谢数码你的开导！因此，在这场比赛我也来给你加油了！`,
    );
    await chara15_talk.say_and_wait(
      `我们在比赛前就一直隐藏我霸王的气息，装作一般路过的观众来研究你！`,
    );
    await chara58_talk.say_and_wait(
      `因为怕我这种人在亮相圈搭话会影响到你……所以……`,
    );
    await chara_talk.say_and_wait(
      `不不不！怎么会影响呢，倒不如说是我的荣幸……原来一开始的异样感是这样啊。`,
    );
    await chara_talk.say_and_wait(
      `还有，我逐渐明白了，歌剧和怒涛啊，为什么这么耀眼华丽……`,
    );
    await chara_talk.say_and_wait(`终于……稍微……能接近了一些……`);
    await chara15_talk.say_and_wait(
      `哈哈哈！是吗？不过，果然还是因为我的华丽可是天生的啊！`,
    );
    await era.printAndWait(
      `好歌剧相当欣赏数码，而怒涛则是感谢数码对${chara_talk.sex}的鼓舞。`,
    );
    await me.say_and_wait(`你们应该来到这里，应该还有其他想说的吧？`);
    await era.printAndWait(`接着，${chara_talk.sex}们宣布了……`);
    await chara15_talk.say_and_wait(
      `我和怒涛，在接下来的宝冢纪念要进行初次的共演！`,
    );
    await chara58_talk.say_and_wait(
      `我，我终于也能出战G1了，虽然，只是在一个无人在意的角落……`,
    );
    await chara_talk.say_and_wait(
      `！初次的revue，我明白了！这下不得不去看了！`,
    );
    await chara15_talk.say_and_wait(
      `不过，你也应该有对应的节目吧？向我们展示你的全能才能！`,
    );
    await chara15_talk.say_and_wait(
      `你还未在泥地G1胜利过，没有这个的话，还不完整，是吧？`,
    );
    await me.say_and_wait(
      `接下来比较合适的泥地G1，是夏合宿期间的日本泥地达比。`,
    );
    await chara15_talk.say_and_wait(
      `不愧是训练员！那么，${chara_talk.name}，你要接受我们的邀请吗？`,
    );
    await chara_talk.say_and_wait(`我接受了！`);
    await era.printAndWait(
      `所以${chara_talk.sex}们做出约定，歌剧和怒涛在宝冢纪念中给予最盛大的比赛，而数码要在日本泥地达比中也要展示${chara_talk.sex}身为全能选手的本领。`,
    );
  } else if (
    extra_flag.race === race_enum.japa_dir &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('泥地德比胜利', chara_talk);
    await era.printAndWait(
      `完赛了，数码真的很出色，在这场环境完全不同的赛道，也能取得这样优秀的成绩。`,
    );
    await me.say_and_wait(`感觉怎么样？`);
    await era.printAndWait(`数码，带着与以前完全不同的，认真的表情。`);
    await chara_talk.say_and_wait(`数码，${chara_talk.name}，我懂了。`);
    await me.say_and_wait(`嗯。`);
    await chara_talk.say_and_wait(
      `从儿时开始，就一直让我入迷的${chara_talk.get_uma_sex_title()}酱的尊……`,
    );
    await chara_talk.say_and_wait(
      `我知道了，在今天跑完『日本泥地达比』后，明白了。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱，可爱。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱，很尊。`,
    );
    await chara_talk.say_and_wait(
      `那么，${chara_talk.sex}们为何而可爱？${chara_talk.sex}们的哪里让我觉得伟大、无可救药地吸引着我？`,
    );
    await chara_talk.say_and_wait(
      `今天终于明白了，我喜欢的是${chara_talk.get_uma_sex_title()}们『奋不顾身地为自己的梦想而拼搏』的样子啊！`,
    );
    await era.printAndWait(
      `咚咚咚地跺着脚，表达出数码${chara_talk.sex}终于明白的喜悦。`,
    );
    await chara_talk.say_and_wait(
      `明白了后，真想穿越回去暴揍过去以为『只有中央的草地G1才是特别的』我！`,
    );
    await me.say_and_wait(`哈哈，简直就是定番的感想啊。`);
    await chara_talk.say_and_wait(
      `喂喂喂，你早就知道的吧，${chara_talk.get_uma_sex_title()}酱们一直都是一样的。`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.sex}们真的有想要的东西，想要成为的人，以那为目标，在拼命的努力着。`,
    );
    await era.printAndWait(
      `这种人，无论放在哪里，都是耀眼的，何况放在一起比赛呢？`,
    );
    await chara_talk.say_and_wait(
      `${chara_talk.sex}们全力互相联系，互相帮助……时而为同一个胜利斗争，但又不惧怕斗争，一直都在看着前方。`,
    );
    await chara_talk.say_and_wait(`在一切都尘埃落定后，一起贴贴！`);
    await era.printAndWait(`嘛，又是定番剧情呢。`);
    await chara_talk.say_and_wait(`正是这种定番剧情，我的灵魂才会如此震撼啊！`);
    await chara_talk.say_and_wait(
      `虽然在出道之前一直都自以为是……但结果今天才……`,
    );
    await chara_talk.say_and_wait(`啊哇哇哇，真是……`);
    await chara_talk.say_and_wait(
      `歌剧和怒涛的那次比赛，现在回过头来，也总算懂了。`,
    );
    await era.printAndWait(`歌剧和怒涛的对决在宝冢上的光辉，让数码无比羡慕。`);
    await era.printAndWait(`而现在，数码终于也能够触碰到这束光芒。`);
    await chara_talk.say_and_wait(
      `如果在这样下去的话……不行！数码啊！要开始动起来！`,
    );
    await chara_talk.say_and_wait(
      `即使是我的话，我能做好觉悟，怀着纯粹的心情站在闸门前的话！`,
    );
    await chara_talk.say_and_wait(
      `训练员……我……即使是我……也能成为，这样的存在吗？！`,
    );
    await me.say_and_wait(`当然能！`);
    await era.printAndWait(`数码终于，在此刻，成为一名真正的选手。`);
  } else if (
    extra_flag.race === race_enum.mile_cha &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('英里冠军赛胜利', chara_talk);
    await era.printAndWait(
      `从最底层爬上来的圣王光环，数码将${chara_talk.sex}的生存战略从头到尾都看到了最后。`,
    );
    await chara61_talk.say_and_wait(
      `怎么样，数码桑？和我一起跑了这场重要比赛，理解了吧？`,
    );
    await chara61_talk.say_and_wait(
      `圣王光环是一个怎么样的${chara_talk.get_uma_sex_title()}。`,
    );
    await chara_talk.say_and_wait(`是……是的……`);
    await era.printAndWait(
      `被圣王光环教导了“${chara_talk.get_uma_sex_title()}为何物”的数码，在夺下英里冠军杯的胜利后泣不成声。`,
    );
    await era.printAndWait(
      `圣王光环的存在就是如此让${chara_talk.sex}深受感动。`,
    );
    await chara61_talk.say_and_wait(`怎么了？一直在哭，可是说不出来的哦。`);
    await chara_talk.say_and_wait(`全身……都沐浴到了光辉……`);
    await chara_talk.say_and_wait(
      `然后，我明白了，作为${chara_talk.get_uma_sex_title()}而活，意味着什么。`,
    );
    await chara_talk.say_and_wait(
      `不屈的奔跑中寄宿着灵魂！本能！无论准备是否完全，始终贯彻一流的气概！`,
    );
    await chara_talk.say_and_wait(
      `之前的我一直都无法理解，不过现在我明白了，只要奔跑就行！就连丧气话，也要边跑边说！`,
    );
    await chara_talk.say_and_wait(
      `我现在，更喜欢${chara_talk.get_uma_sex_title()}了！`,
    );
    await chara61_talk.say_and_wait(
      `呵呵，你真是喜欢${chara_talk.get_uma_sex_title()}呢。`,
    );
    await chara61_talk.say_and_wait(
      `数码，和更多${chara_talk.get_uma_sex_title()}比赛吧！吸收一切，然后……`,
    );
    await chara61_talk.say_and_wait(
      `成为真正的全能选手吧！毕竟，你就是你最喜欢的${chara_talk.get_uma_sex_title()}的一员啊！`,
    );
    await era.printAndWait(
      `圣王光环在最后，给予了数码祝福，愿数码在今后与更多${chara_talk.get_uma_sex_title()}对决，成为真正的“全能跑者”`,
    );
    await era.printAndWait(`在地下通道时……`);
    await chara_talk.say_and_wait(
      `训练员，我的同志啊，我从圣王那里获得了无比珍贵的事物。`,
    );
    await chara_talk.say_and_wait(
      `需要和更多${chara_talk.get_uma_sex_title()}比赛，我需要做什么呢……`,
    );
    await era.printAndWait(`既然如此，不妨就……`);
    await era.printAndWait(`和数码决定了，接下来参加更多的G1赛事。`);
    await chara_talk.say_and_wait(
      `对的对的，还有，然后在之后，我要向歌剧和怒涛发起挑战！`,
    );
    await era.printAndWait(
      `一直以来仅是仰慕的数码，现在终于也能鼓起勇气，向以前的偶像发起挑战。`,
    );
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('秋季天皇赏胜利', chara_talk);
    await era.printAndWait(`（咚咚咚咚——）`);
    await era.printAndWait(
      `在低沉的脚步声，${chara_talk.get_uma_sex_title()}们逐渐逼近观众席，此时，意外地跑在外道的是——`,
    );
    await era.printAndWait(
      `实况「${chara_talk.name}！是${chara_talk.name}！在雨中，在一片狼籍的草地上，从马群中钻了出来，选择了最好的道路！然后——！」`,
    );
    await era.printAndWait(
      `实况「冲线！用不可思议的跑法征服了天皇赏秋的是——${chara_talk.name}！」`,
    );
    await era.printAndWait(
      `数码一直以来所积累的知识、技能以及情感，给予了数码这次最好的条件。`,
    );
    await era.printAndWait(
      `${chara_talk.sex}在泥泞的草地上，简直像是回到了老家一样，无论是道路选择还是最终加速，作为训练员的你也完全找不出任何不足之处。`,
    );
    await era.printAndWait(`数码不可动摇地拿下了胜利。`);
    era.println();
    await chara_talk.say_and_wait(`嘿嘿……咳咳咳……啊哈哈哈……`);
    await chara_talk.say_and_wait(`是，我的胜利吧。`);
    await era.printAndWait(`是的，是你的胜利，数码。`);
    await era.printAndWait(`数码转过身来，面向观众席。`);
    await chara_talk.say_and_wait(`唔噢噢噢噢噢噢噢噢噢噢噢噢噢！`);
    await era.printAndWait(`观众席「唔噢噢噢噢噢噢噢噢噢噢噢噢噢！」`);
    await chara_talk.say_and_wait(`嘿哇啊啊啊啊啊啊啊啊啊啊！`);
    await era.printAndWait(`观众席「嘿哇啊啊啊啊啊啊啊啊啊啊！」`);
    await chara_talk.say_and_wait(`噫！嘿！哦！噢噢噢噢噢噢！`);
    await era.printAndWait(`观众席「噫！嘿！哦！噢噢噢噢噢噢！」`);
    await era.printAndWait(`哈哈哈哈，喊得喉咙都有点哑了。`);
    await era.printAndWait(`而且跟一般的喊名字不同，该说真有数码的特色吗。`);
    await era.printAndWait(`大张着手跑到你跟前，隔着栏杆将你抱了起来。`);
    await chara_talk.say_and_wait(`训练员！未知的，是未知的景色啊！`);
    await chara_talk.say_and_wait(
      `在台上感受Call的力量！这感觉真的是绝无伦比啊！`,
    );
    await me.say_and_wait(`是啊！这是独属于数码你的Call，独一无二的Call！`);
    await chara_talk.say_and_wait(`黑船……我把胜利，从那两人夺过来了哦……`);
    await era.printAndWait(
      `无论${chara_talk.sex}是怀着悔恨还是悲伤，看到这场比赛，${chara_talk.sex}，想必也会感到解脱了吧。`,
    );
    await chara_talk.say_and_wait(
      `仅凭我自己，是无法做到的——我一直以来，都这么认为。所以我向推寄托了愿望……`,
    );
    await chara_talk.say_and_wait(`但是……`);
    await me.say_and_wait(`我的第一位推，就是你噢！`);
    await chara_talk.say_and_wait(
      `啊哈哈哈，诶嘿嘿嘿……训练员，居然现在说这话，可真是……我要，我要……`,
    );
    await chara_talk.say_and_wait(
      `给给给！给你杀必死！对对对，就是粉丝服务！训练员，想要我尾巴上的毛吗！`,
    );
    await era.printAndWait(
      `看起来数码已经高兴得已经在开始说有点意味不明的话了。`,
    );
    await me.say_and_wait(`到领奖台吧，大家在等着呢。`);
    await chara_talk.say_and_wait(`哦哦哦，如此傲慢无礼，我差点忘了！`);
    await era.printAndWait(
      `一把把你从栅栏一边搬运过来，数码跟你来到了领奖台。`,
    );
    era.println();
    await chara_talk.say_and_wait(
      `多多多多，多谢！我是${
        chara_talk.name
      }！说到底我只不过是一个喜欢${chara_talk.get_uma_sex_title()}酱的……`,
    );
    await chara_talk.say_and_wait(
      `我只不过是追着${chara_talk.get_uma_sex_title()}酱的屁股……哦不，是尾巴，才来到这里的……`,
    );
    await chara_talk.say_and_wait(
      `能懂吗！这份感动！？我最一开始，甚至不能说是普通的${chara_talk.get_uma_sex_title()}酱，只是一个粉丝而已诶！`,
    );
    await chara_talk.say_and_wait(
      `但是，我能混杂在这份闪耀中，在这个尊景中，能在最前方冲线，真的是……感激不尽……`,
    );
    await chara_talk.say_and_wait(
      `之所以能够获胜，一定不是我自己的成果了，是与所有邂逅的人的结晶，`,
    );
    await chara_talk.say_and_wait(
      `一路以来的${chara_talk.get_uma_sex_title()}酱，最一开始认为自己不该会有的粉丝，还有训练员！`,
    );
    await chara_talk.say_and_wait(`今天，是大家让我拿下了胜利。`);
    await chara_talk.say_and_wait(`感激……真的是，非常，感激……`);
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}酱们，比起身为在粉丝的时候所想的${chara_talk.get_uma_sex_title()}酱……要耀眼百倍，千倍……`,
    );
    await era.printAndWait(`说着说着，数码已经开始介绍起了比赛的选手了。`);
    await chara_talk.say_and_wait(
      `看到了吗！英姿飒爽的短发，在猛然冲刺时的摇曳……`,
    );
    await chara_talk.say_and_wait(`那伴随着脚步晃动的包……`);
    await chara_talk.say_and_wait(
      `有，今天不能在场的黑船，如果能的话，总有一天，一定要一起跑在泥地上……`,
    );
    era.println();
    await era.printAndWait(`打开了话匣子，数码还在聊的时候……`);
    await era.printAndWait(
      `工作人员「${chara_talk.name}的训练员，很抱歉在这兴头上打断……胜者舞台……」`,
    );
    await era.printAndWait(
      `啊啊啊啊，低头对着数码说几声，${chara_talk.sex}好像完全没注意到。`,
    );
    await era.printAndWait(`看来只能强行拉走了。`);
    await chara_talk.say_and_wait(`喂喂喂，训练员？`);
    await chara_talk.say_and_wait(`等等，至少请让我再说一句，我再说一句吧——`);
    await chara_talk.say_and_wait(
      `${chara_talk.get_uma_sex_title()}真是——太——棒——啦——！！！！`,
    );
  } else if (extra_flag.rank === 1) {
    await print_event_name('竞赛获胜', chara_talk);
    await chara_talk.say_and_wait(`咔哇哇哇哇！每个孩子都闪耀着最尊的光辉啊！`);
    await era.printAndWait(
      `赛后的数码精神得完全不像经历了一场大赛，一如既往地展现了${chara_talk.sex}的热情。`,
    );
    await chara_talk.say_and_wait(
      `能和${chara_talk.get_uma_sex_title()}酱一起比赛……真的是非常开心……！`,
    );
    await chara_talk.say_and_wait(`而且，还拿到了第一！真的要满含感激地收下！`);
    era.printButton(`你是最闪耀的哦！`, 1);
    era.printButton(`下次的比赛也要加油噢！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait(
        `诶？这这这，怎可能？！这么多${chara_talk.get_uma_sex_title()}，我就只是像空气一般的存在……居然看着我吗？`,
      );
      await era.printAndWait(`这份娇羞也是见多了。`);
      await me.say_and_wait(`这不当然，你可是我的爱马啊！`);
      await chara_talk.say_and_wait(`呜呜呜……`);
      await chara_talk.say_and_wait(`被夸奖真的是难以平静下来呢……`);
      await era.printAndWait(`也当然每一次看都不厌。`);
    } else {
      await chara_talk.say_and_wait(
        `好！为了下次比赛也要照这个劲头，我要变得更强！Power！`,
      );
      await chara_talk.say_and_wait(
        `变得更强大，然后在更激烈的比赛中看到更加闪耀的${chara_talk.get_uma_sex_title()}酱！`,
      );
      await era.printAndWait(`就是这个势头！继续加油吧！`);
      await chara_talk.say_and_wait(`诶！诶！姆！`);
    }
  } else if (extra_flag.rank <= 5) {
    //通用比赛入着
    await print_event_name('竞赛上榜', chara_talk);
    await chara_talk.say_and_wait(
      `唔姆唔姆，原来如此，${chara_talk.get_uma_sex_title()}们的闪耀，还是有点难以接近……`,
    );
    await era.printAndWait('没能获胜的数码，在赛后也没表现出太大的失落……');
    await chara_talk.say_and_wait(`呜……果然，我还是不该作为粉丝出现在这里的……`);
    await era.printAndWait(`喂喂喂。`);
    era.printButton(
      `这次，有没有欣赏到${chara_talk.get_uma_sex_title()}啊？`,
      1,
    );
    era.printButton(`下次争取在最前方欣赏${chara_talk.sex}们吧！`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait('诶！对诶！数码，可！');
      await me.say_and_wait('(这是什么意思？)');
    } else {
      await chara_talk.say_and_wait(
        '没能获胜的数码，在赛后也没表现出太大的失落……',
      );
      await era.printAndWait('总之，数码打起了精神！');
    }
  } else {
    throw new Error();
  }
};
