/**
 * @file 醒目飞鹰 - 招募
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { say_by_passer_by } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {number} stage_id
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise<boolean>}
   */
  async run(stage_id, extra_flag, event_object) {
    const chara_talk = get_chara_talk(46),
      chara301_talk = get_chara_talk(301),
      me = get_chara_talk(0);
    switch (stage_id) {
      case event_hooks.recruit:
        await say_by_passer_by(
          `马娘`,
          `能得到训练员的邀请非常感谢，不过呢，我觉得自己的实力恐怕还是差了一点。`,
        );
        await say_by_passer_by(
          `马娘`,
          `啊，没有指责您的意思，您一定能找到更好的马娘的！`,
        );
        era.printButton(
          `不，我这边才是唐突了。祝你接下来遇到更好的训练员。`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `送别眼前的马娘，因为失意与懊恼，${me.actual_name}还是忍不住叹了一口气`,
        );
        await era.printAndWait(
          `将拿出的契约书草草塞回文件夹，${me.actual_name}从说笑的马娘们身边快步经过，然后回到了训练室。`,
        );
        await me.say_and_wait(`今天到此为止吧。`);
        await era.printAndWait(
          `夕阳西下，${me.actual_name}锁上了训练室的大门。`,
        );
        await era.printAndWait(`从走廊的通道中，无意间撇到了中庭的三女神像。`);
        await me.say_and_wait(
          `美丽又充满智慧的三女神大人啊，请赋予我勇气让我找到合适的马娘吧。`,
        );
        await era.printAndWait(
          `究竟是自暴自弃的埋怨还是自嘲式的苦中作乐，亦或二者兼有。就算问${me.actual_name}自己，恐怕也没有准确回复。`,
        );
        era.println();
        await say_by_passer_by(
          `怒气冲冲的人类教师`,
          `醒目飞鹰！这已经是你这个星期第三次未经许可擅自举办演唱会了！`,
        );
        await era.printAndWait(
          `愤怒的喊叫从走廊的另一侧化作蜂鸣声传到了你的耳中。`,
        );
        await me.say_and_wait(`发生了什么？`);
        await era.printAndWait(`你尚在思考的时候。`);
        await chara_talk.say_and_wait(`前面的训练员，不好意思麻烦让一下——`);
        era.printButton(`嗯——`, 1);
        await era.input();
        await era.printAndWait(`慌不择路的少女便将你撞飞。`);
        await chara_talk.say_and_wait(`怎、怎么办？`);
        await era.printAndWait(`想要逃避所做的反抗，却伤害到了陌生人。`);
        await say_by_passer_by(`怒气冲冲的人类教师`, `醒目飞鹰！`);
        await chara_talk.say_and_wait(`噫——`);
        await era.printAndWait(
          `就连片刻的迟疑也不允许，追赶的教师一刻不停地逼迫她做出决定。`,
        );
        await era.printAndWait(`像是棋盘上必须在车与马之间选择一样丢弃。`);
        await chara_talk.say_and_wait(`……飞鹰子可不能在这种地方认输！`);
        await era.printAndWait(
          `如果是马娘的话，想要从人类的手中逃跑——甚至反过来将他打倒也不是什么难事。`,
        );
        await era.printAndWait(`毕竟人类无法战胜马娘。`);
        await me.say_and_wait(
          `作为偶像如果连路人都会误伤的话，是不是已经失格了呢？`,
        );
        await era.printAndWait(`——又能逃到哪里去呢？`);
        await chara_talk.say_and_wait(`……`);
        await era.printAndWait(
          `马娘从你刚刚经过的楼梯飞速离开，眨眼间便消失的无影无踪。`,
        );
        await say_by_passer_by(`人类教师`, `……别让我再遇见你。`);
        await era.printAndWait(
          `因为两者肉眼可见的体能差距，在被愤怒支配大脑终于冷静了下来。`,
        );
        await era.printAndWait(`耗尽了体力之后，教师便挨着你坐了下来。`);
        await me.say_and_wait(
          `明明冲刺时的爆发力非常优秀，那名马娘到现在都没有训练员吗？`,
        );
        await say_by_passer_by(`人类教师`, `嗯？你是训练员吗？`);
        await era.printAndWait(`坐在一旁的教师突然向你搭话。`);
        await say_by_passer_by(
          `人类教师`,
          `不好意思刚刚失态了，我是刚刚跑过去的马娘的班主任。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `醒目飞鹰是个很外向的孩子，虽然有的时候冒冒失失，但都是为了实现她的偶像梦。`,
        );
        await era.printAndWait(
          `如果想要参与偶像活动，只要在选拨赛时与训练员签约即可，如果从刚刚的步伐来看，少女也不是不可能。`,
        );
        await era.printAndWait(`似乎看出了你的疑惑，教师苦笑着摇了摇头。`);
        await say_by_passer_by(
          `人类教师`,
          `一开始我和你的想法一样，只要能在选拔赛时取得亮眼的表现就能实现她的偶像梦了。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `但是她不管怎么努力，似乎都像被沉重的铁球系住了脚。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `在连续三场选拔赛以倒数几名结束后，恐怕她也知道自己在草地方面并不理想。`,
        );
        await me.say_and_wait(`为什么不试试看沙地？`);
        await say_by_passer_by(`人类教师`, `恐怕只有当面问她才知道。`);
        await era.printAndWait(
          `正当你打算询问更多关于醒目飞鹰消息时，急促的铃声打断了你们之间的对话。`,
        );
        await era.printAndWait(
          `匆匆与那位教师告别后，你才意识到自己对刚才提及的马娘颇感兴趣。`,
        );
        era.drawLine({ content: '第二天' });
        await era.printAndWait(
          `当你像平时一样来到训练室门口，却发现训练室大门上张贴了一张手写的海报。`,
        );
        await chara_talk.say_and_wait(
          `在领放时闪闪放光的飞鹰子！预定16:00在河边举行突击演唱会！`,
        );
        await era.printAndWait(
          `你将海报轻轻撕下，指尖的触感却非冰冷的铁块，尚存的余温预示着主人未走多远。`,
        );
        era.printButton(`现在追过去还来得及。`, 1);
        await era.input();
        await era.printAndWait(
          `你正准备将海报扔进背包中，不远处却传来了手纲小姐略带怒气的声音。\n\n`,
        );
        await chara301_talk.say_and_wait(
          `醒目飞鹰小姐，在教职工大门上张贴海报是错误的行为。`,
        );
        await era.printAndWait(
          `醒目飞鹰在向理事长办公室上张贴海报时被从里面出来的手纲抓个正着。`,
        );
        await chara_talk.say_and_wait(`非常抱歉，下次不会再犯了。`);
        await chara301_talk.say_and_wait(
          `醒目飞鹰小姐，如果想要合规的进行偶像活动，请在选拔赛上努力与合适的训练员进行签约。`,
        );
        await chara301_talk.say_and_wait(
          `特雷森学院是以培育优秀赛马娘为目标而创立的，我想以此为目标希望一同前进的训练员应该不会少。`,
        );
        await chara301_talk.say_and_wait(
          `请把努力的方向修正后，与合适的训练员一同前进吧。`,
        );
        await era.printAndWait(
          `手纲缰绳一边将醒目飞鹰手中尚未分发出去的海报没收，一边郑重的告诫对方。`,
        );
        await chara_talk.say_and_wait(`......`);
        await era.printAndWait(
          `从低垂的马耳来看，醒目飞鹰似乎陷入了两难之地。`,
        );
        await chara301_talk.say_and_wait(`（玩家名）先生，请问有什么事情吗？`);
        await era.printAndWait(`正处于工作模式的手纲缰绳注意到你的存在。`);
        await era.printAndWait(
          `看着眼前低落的少女，你突然回想起了昨天的情景。`,
        );
        await era.printAndWait(
          `如果自己也陷入这种境地，能有一只手来拉自己一把的话……`,
        );
        era.printButton(`抱歉，我之后会好好和醒目飞鹰谈谈的。`, 1);
        await era.input();
        await chara301_talk.say_and_wait(
          `……之后请把契约书复印一份放在理事长办公室，不过在此之前。`,
        );
        await era.printAndWait(`你顺着手纲小姐的目光看向了贴了一路的海报。`);
        await chara301_talk.say_and_wait(
          `请在马娘们上课之前把走廊恢复成原来的样子。\n\n\n`,
        );
        await era.printAndWait(
          `在拼命的努力后，总算在上课铃响起之前将海报全部撕了下来。`,
        );
        await chara_talk.say_and_wait(`……啊，这个……训练员先生？`);
        await era.printAndWait(`眼前的始作俑者犹豫着不知该如何开口。`);
        await chara_talk.say_and_wait(`又给您添麻烦了，非常抱歉！！`);
        await era.printAndWait(
          `似乎是下了很大的决心，醒目飞鹰在鼓起勇气开口后便头也不回的逃跑了。`,
        );
        await era.printAndWait(
          `看着落荒而逃的少女，你突然想起了放在背包之中的海报。\n\n`,
        );

        add_event(event_hooks.out_river, new EventObject(46, cb_enum.recruit));
        new EventMarks(0).add(event_hooks.out_river);
        era.set('cflag:46:随机招募', 0);
        return true;
      case event_hooks.out_river:
        if (era.get('flag:当前互动角色')) {
          add_event(event_hooks.out_river, event_object);
          return false;
        }
        await era.printAndWait(`放学后，你跟着海报的指引来到了河边。`);
        await era.printAndWait(`不远处的少女，在高架桥的承托下显得额外渺小。`);
        await chara_talk.say_and_wait(`~~~♪`);
        await era.printAndWait(
          `即使如此，对着空地绽放了笑容的她却显得额外闪耀。`,
        );
        await chara_talk.say_and_wait(`~~~♪谢谢大家！`);
        await era.printAndWait(
          `像是排练过无数次一样，少女娴熟的面对着空地鞠躬。`,
        );
        await era.printAndWait(`——像一场仪式一样按部就班的结束。`);
        await era.printAndWait(`啪啪啪啪。`);
        await era.printAndWait(
          `挥洒的汗水，露出的可爱笑容，就这样无人欣赏默默凋零，实在不可原谅。`,
        );
        await era.printAndWait(
          `但即使如此，除了耳朵微微颤动以外，少女不为作动。`,
        );
        await era.printAndWait(`连拂去额头上汗珠的闲暇都没有，下一场开始了。`);
        era.drawLine();
        await chara_talk.say_and_wait(
          `——呼⭐今天是飞鹰子表现得最完美的一次演出了。`,
        );
        await era.printAndWait(
          `为了驱散寒风而更加用力的鼓掌，大脑也随之振奋起来。`,
        );
        await chara_talk.say_and_wait(`飞鹰子的粉丝一号先生⭐`);
        await era.printAndWait(
          `等到思绪重新回到现实之中，小小的脑袋凑了过来。`,
        );
        era.printButton(`……粉丝一号？`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `因为粉丝一号先生是第一个听完飞鹰子整场演唱会的人⭐`,
        );
        await era.printAndWait(`醒目飞鹰的兴奋之情溢于言表。`);
        await chara_talk.say_and_wait(
          `粉丝一号先生有什么愿望吗？只要是飞鹰子的能力范围内，飞鹰子都会实现的⭐`,
        );
        await era.printAndWait(`你想了一下。`);
        era.printButton(`为什么飞鹰子不愿去试试看沙地呢？`, 1);
        await era.input();
        await era.printAndWait(
          `似乎是始料未及的回复，醒目飞鹰露出了尴尬的神情。`,
        );
        await chara_talk.say_and_wait(
          `……训练员先生真喜欢开玩笑呢，可以换个愿望吗？`,
        );
        era.printButton(`作为训练员，我很好奇这个问题。`, 1);
        await era.input();
        await chara_talk.say_and_wait(
          `咦？飞鹰子的粉丝一号先生同时还是训练员先生……这样的话，也没办法呢。`,
        );
        await chara_talk.say_and_wait(
          `因为飞鹰子觉得只有在草地上奔跑才能登上最大最闪亮的舞台！`,
        );
        await chara_talk.say_and_wait(
          `而且泥地和草地之间的人气，相差了三四倍不止！`,
        );
        await era.printAndWait(`醒目飞鹰认真的回答你的问题。`);
        await era.printAndWait(`明明渴望的目标近在咫尺，但这道门是关闭着的。`);
        era.printButton(`成为泥地的偶像吧！`, 1);
        await era.input();
        await chara_talk.say_and_wait(`诶？飞鹰子不是说过了吗？泥地的——`);
        await me.say_and_wait(
          `如果飞鹰子在泥地上不断取胜，那么关注泥地赛事的人也会不断增加。`,
        );
        await me.say_and_wait(
          `如果把泥地的关注度提到和草地一样，不，甚至比草地人气还要高的话。`,
        );
        await chara_talk.say_and_wait(
          `——飞鹰子就能站在最大最闪耀的舞台之上了吗？`,
        );
        await chara_talk.say_and_wait(
          `不过，就算数学不好的飞鹰子也知道，即使是泥地G1，要想不断连胜，也是近乎不可能的事情。`,
        );
        era.printButton(`我相信着飞鹰子。`, 1);
        await era.input();
        await me.say_and_wait(
          `为了回应粉丝的梦想，偶像是可以把不可能化作可能的生物，不是吗？`,
        );
        await chara_talk.say_and_wait(`……如果是为了回应粉丝们的期待的话。`);
        await me.say_and_wait(`不久之后会有一场泥地的比赛，一起去看吧？`);
        await chara_talk.say_and_wait(`飞鹰子要用自己的双眼见证泥地的比赛！`);
        await chara_talk.say_and_wait(
          `接下来这段时间请多指教了，训练员……不！飞鹰子的粉丝一号先生⭐`,
        );
        await era.printAndWait(`成功招募${chara_talk.name}了！`);
        new EventMarks(0).sub(event_hooks.out_river);
        new FalconEduMarks().after_recruit++;
        era.set('cflag:46:招募状态', recruit_flags.yes);
        new FalconEduMarks().beginning++;
        add_event(event_hooks.week_end, new EventObject(46, cb_enum.edu));
        era.set('flag:物色对象', 0);
        return true;
    }
    return false;
  },
};
