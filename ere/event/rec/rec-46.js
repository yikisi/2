/**
 * @file 醒目飞鹰 - 招募
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { say_by_passer_by } = require('#/utils/chara-talk-factory');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const falcon = get_chara_talk(46),
      tokino = get_chara_talk(301),
      me = get_chara_talk(0);
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        await say_by_passer_by(
          `马娘`,
          `能得到训练员的邀请非常感谢，不过呢，我觉得自己的实力恐怕还是差了一点。`,
        );
        await say_by_passer_by(
          `马娘`,
          `抱歉，不是说您的水平问题，只是我稍微有点担心呢，不好意思。`,
        );
        era.printButton(`我这边才是唐突了。祝你接下来遇到更好的训练员。`, 1);
        await era.input();
        await era.printAndWait(
          `与接触的马娘擦肩而过，因为付出的努力未达到想要的目标而懊恼。`,
        );
        await era.printAndWait(`${me.actual_name}忍不住叹了一口气`);
        await me.say_and_wait(`先回到训练室平复一下心情吧。`);
        await era.printAndWait(
          `努力克制着失落的情绪，你将拿出的契约书草草塞回文件夹，${me.actual_name}从结伴而行的马娘们身边快步经过，然后回到了训练室。`,
        );
        era.drawLine();
        await era.printAndWait(
          `将训练室的大门锁好后，正准备离开的你被闪烁的光芒所吸引。`,
        );
        await era.printAndWait(
          `为探求那道光芒的根源，无所事事的你走向窗台，引入眼帘的是中庭的三女神雕像。`,
        );
        await era.printAndWait(`雕像将夕阳的光芒截取，然后赠与了你。`);
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
        await era.printAndWait(`宁静的走廊被冲突所打破。`);
        await era.printAndWait(
          `愤怒的喊叫从走廊的另一侧化作蜂鸣声杀到了耳中。`,
        );
        await me.say_and_wait(`发生了什么？`);
        await era.printAndWait(`你尚在思考的时候。`);
        await falcon.say_and_wait(`不好意思让一下——`);
        era.printButton(`？嗯——`, 1);
        await era.input();
        await era.printAndWait(`一阵劲风从身边掠过，然后将你掀翻在地。`);
        await falcon.say_and_wait(`怎、怎么办？`);
        await era.printAndWait(`想要逃避所做的反抗，却伤害到了陌生人。`);
        await say_by_passer_by(`怒气冲冲的人类教师`, `醒目飞鹰！`);
        await falcon.say_and_wait(`噫——`);
        await era.printAndWait(
          `为了逃避一种痛苦反而陷入了更加糟糕的事态，说的恐怕就是现在的情况。`,
        );
        await era.printAndWait(
          `就连片刻的迟疑也不允许，追赶的教师一刻不停地逼迫她做出决定。`,
        );
        await falcon.say_and_wait(`……飞鹰子可不能在这种地方认输！`);
        await era.printAndWait(
          `如果是马娘的话，想要从人类的手中逃跑——甚至反过来将他打倒也不是什么难事。`,
        );
        await era.printAndWait(`毕竟人类无法战胜马娘。`);
        await falcon.say_and_wait(`没办法了，就这么办！`);
        await era.printAndWait(
          `扶着墙站起的你努力抑制住这股眩晕感，而后与即将从窗户一跃而下的少女对视。`,
        );
        await say_by_passer_by(`人类教师`, `！醒目飞鹰！。`);
        await era.printAndWait(
          `苗条的身影就像真正的鹰一样，从窗户飞向了天空,将站在地上的凡人远远抛开。`,
        );
        await era.printAndWait(`但是\n`);
        await era.printAndWait(
          `——毕竟不是真正的鹰，重力毫不留情的将她捕获，然后重重地将她向下摁去。`,
        );
        await era.printAndWait(
          `然后她撞断两根树枝，灰头土脸的从地上爬起，随后溜的一干二净。`,
        );
        await say_by_passer_by(`人类教师`, `居然干出这种事？`);
        await me.say_and_wait(
          `明明只要让担当训练员签字就可以解决的事情，不，那也不应该啊。`,
        );
        await say_by_passer_by(`人类教师`, `嗯？`);
        await era.printAndWait(`又惊又怒的教师才注意到你的存在。`);
        await say_by_passer_by(
          `人类教师`,
          `抱歉让你见笑了，我是刚刚跑过去的马娘的班主任。`,
        );
        await me.say_and_wait(`可以给我介绍一下刚才的马娘吗？`);
        await say_by_passer_by(`人类教师`, `你是说醒目飞鹰吗？。`);
        await era.printAndWait(
          `虽然从刚才的决断来看稍显鲁莽，但能如此果断的做出决定，应该早早就有训练员做出决定才是。`,
        );
        await era.printAndWait(`似乎看出了你的疑惑，教师苦笑着摇了摇头。`);
        await say_by_passer_by(`人类教师`, `醒目飞鹰脾气有点古怪。`);
        await say_by_passer_by(
          `人类教师`,
          `比起作为赛马娘出道，她更希望走偶像的道路。`,
        );
        await me.say_and_wait(`偶像？`);
        await era.printAndWait(
          `作为粉丝们期翼的理想存在，在万众瞩目的舞台上展现着自己最美好一面的，偶像。`,
        );
        await me.say_and_wait(
          `……但是以赛马娘为起点比其他方向成功的概率更大，耗时也更短。`,
        );
        await era.printAndWait(`或许是对质疑的下意识反驳，教师摇了摇头。`);
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
          `匆匆与那位教师告别后，你将刚才遇见的马娘记载了随身携带的记事本上。`,
        );
        era.drawLine({ content: '第二天' });
        await era.printAndWait(
          `当你像平时一样来到训练室门口，却发现训练室大门上张贴了一张手写的海报。`,
        );
        await falcon.say_and_wait(
          `新人偶像醒目飞鹰！预定16:00在河边举行突击演唱会！一定要来看哦♪`,
        );
        await era.printAndWait(`犹豫片刻后，将海报轻轻撕下。`);
        await era.printAndWait(`不远处传来了不小的骚动声。`);
        era.printButton(`去看看吧。`, 1);
        await era.input();
        await era.printAndWait(`于是你便向着骚动传来的方向迈出了脚步。`);
        era.println();
        await falcon.say_and_wait(`非常抱歉。`);
        await tokino.say_and_wait(
          `醒目飞鹰小姐，如果想要合规的进行偶像活动，请在选拔赛上努力与合适的训练员进行签约。`,
        );
        await tokino.say_and_wait(
          `特雷森学院是以培育优秀赛马娘为目标而创立的，我想以此为目标希望一同前进的训练员应该不会少。`,
        );
        await tokino.say_and_wait(
          `请把努力的方向修正后，与合适的训练员一同前进吧。`,
        );
        await era.printAndWait(
          `手纲缰绳一边将醒目飞鹰手中尚未分发出去的海报没收，一边郑重的告诫对方。`,
        );
        await falcon.say_and_wait(`......`);
        await era.printAndWait(
          `从低垂的马耳来看，醒目飞鹰似乎陷入了两难之地。`,
        );
        await tokino.say_and_wait(`……（玩家名）先生，请问有什么事情吗？`);
        await era.printAndWait(`说教模式的手纲缰绳迅速切换到了工作模式。`);
        await era.printAndWait(
          `看着眼前低落的少女，你突然回想起了昨天的情景。`,
        );
        await era.printAndWait(`在窗边闪闪发光的少女。`);
        era.printButton(`抱歉，我之后会好好和醒目飞鹰谈谈的。`, 1);
        await era.input();
        await tokino.say_and_wait(
          `……这样的话，之后请把契约书复印一份放在理事长办公室，不过在此之前。`,
        );
        await era.printAndWait(`你顺着手纲小姐的目光看向了贴了一路的海报。`);
        await tokino.say_and_wait(`请在马娘们上课之前把走廊恢复成原来的样子。`);
        await era.printAndWait(`手纲小姐的笑容传来了极强的压迫感。\n\n\n`);
        await era.printAndWait(
          `在拼命的努力后，总算在上课铃响起之前将海报全部撕了下来。`,
        );
        await falcon.say_and_wait(
          `……是之前见过的训练员先生吧？不对，应该是飞鹰子的粉丝一号先生！`,
        );
        await era.printAndWait(`突如其来的设定实在不知该如何吐槽。`);
        await falcon.say_and_wait(`飞鹰子在河边举行的演唱会，一定要来看哦？`);
        await era.printAndWait(`即使在这种时刻，还在努力推销自己的醒目飞鹰。`);
        await era.printAndWait(`你突然想起了放在背包之中的海报。`);
        era.printButton(`我会参加的。`, 1);
        await era.input();
        await era.printAndWait(
          `你看着眼前的少女像花朵一样徐徐展开的笑容，然后暂时告别。`,
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
        await era.printAndWait(`你跟着海报的指引来到了河岸边。`);
        await era.printAndWait(`不远处的少女，在高架桥的承托下显得额外渺小。`);
        await falcon.say_and_wait(`~~~♪`);
        await era.printAndWait(`在灯光的照耀下的她却额外闪耀。`);
        await falcon.say_and_wait(`~~~♪谢谢大家！`);
        await era.printAndWait(`少女娴熟的面对着空地鞠躬。`);
        await era.printAndWait(`——像举行一场仪式一样。`);
        await era.printAndWait(`啪啪啪啪。`);
        await era.printAndWait(
          `挥洒的汗水，露出的可爱笑容，就这样无人欣赏默默凋零，实在不可原谅。`,
        );
        await era.printAndWait(
          `但即使如此，除了耳朵微微颤动以外，少女不为作动。`,
        );
        await era.printAndWait(`连拂去额头上汗珠的闲暇都没有，下一场开始了。`);
        era.drawLine();
        await falcon.say_and_wait(`——呼⭐今天是飞鹰子最满意的演出了。`);
        await era.printAndWait(
          `为了驱散寒风而更加用力的鼓掌，大脑也随之振奋起来。`,
        );
        await falcon.say_and_wait(`飞鹰子的粉丝一号先生⭐`);
        await era.printAndWait(
          `等到思绪重新回到现实之中，小小的脑袋凑了过来。`,
        );
        era.printButton(`……粉丝一号？`, 1);
        await era.input();
        await era.printAndWait(`原来不是偶像为了招揽粉丝的话术吗。`);
        await falcon.say_and_wait(
          `因为粉丝一号先生是第一个听完飞鹰子整场演唱会的人⭐`,
        );
        await era.printAndWait(
          `稍稍回忆了一下，虽然从中途也有两三人围观，但看完全场的只有你一人。`,
        );
        await falcon.say_and_wait(
          `粉丝一号先生有什么愿望吗？只要是飞鹰子的能力范围内，飞鹰子都会实现的⭐`,
        );
        await era.printAndWait(`稍稍想了一下。`);
        era.printButton(`可以在沙地选拔赛上见到飞鹰子吗？`, 1);
        await era.input();
        await era.printAndWait(
          `似乎是始料未及的回复，醒目飞鹰露出了尴尬的神情。`,
        );
        await falcon.say_and_wait(`……飞鹰子的粉丝一号先生是训练员吗？`);
        era.printButton(`作为训练员，我很好奇这个问题。`, 1);
        await era.input();
        await falcon.say_and_wait(`窥探偶像的秘密可不是合格的粉丝哦？`);
        era.printButton(`这个是作为粉丝的请求。`, 1);
        await era.input();
        await era.printAndWait(
          `时间像是凝固了一样，你紧紧的盯着醒目飞鹰试图逃跑的双眼。`,
        );
        await falcon.say_and_wait(`……毕竟是飞鹰子第一个粉丝的请求呢。`);
        await era.printAndWait(
          `不再回避你的视线，堂堂正正注视着你的醒目飞鹰。`,
        );
        await falcon.say_and_wait(
          `因为飞鹰子觉得只有在草地上奔跑才能登上最大最闪亮的舞台！`,
        );
        await falcon.say_and_wait(
          `而且泥地和草地之间的人气，相差了三四倍不止！`,
        );
        await era.printAndWait(`醒目飞鹰认真的回答你的问题。`);
        await era.printAndWait(`明明渴望的目标近在咫尺，但这道门是关闭着的。`);
        era.printButton(`那么就试着作为泥地偶像而努力吧！`, 1);
        await era.input();
        await era.printAndWait(`那就把紧闭的窗户砸烂，从窗户离开。`);
        await falcon.say_and_wait(`诶？飞鹰子不是说过了吗？泥地的——`);
        await me.say_and_wait(
          `如果飞鹰子在泥地上不断取胜，那么关注泥地赛事的人也会不断增加。`,
        );
        await me.say_and_wait(
          `如果把泥地的关注度提到和草地一样，不，甚至比草地人气还要高的话。`,
        );
        await me.say_and_wait(
          `——飞鹰子就能站在最大最闪耀的舞台之上了吗？而且，那可是醒目飞鹰一手创建的，谁也没有见过的最闪耀的舞台！`,
        );
        await falcon.say_and_wait(`……飞鹰子的……最闪耀的舞台吗？`);
        era.printButton(`这是作为一号粉丝的请求！`, 1);
        await era.input();
        await me.say_and_wait(
          `偶像不就是为了回应粉丝们的期待而将不可能化作可能的明日之星，对吧？`,
        );
        await era.printAndWait(
          `似乎是想象到了站在最大的舞台之上，醒目飞鹰明显出现了动摇。`,
        );
        await me.say_and_wait(`不久之后会有一场泥地的比赛，一起去看吧？`);
        await era.printAndWait(
          `像弹起的米粒沿着剑的轨迹被精准的一分为二一样，你向醒目飞鹰伸出了手。`,
        );
        await falcon.say_and_wait(
          `接下来请多指教了，训练员……不！飞鹰子的粉丝一号先生⭐`,
        );
        await era.printAndWait(`两人的手紧紧的握在了一起。\n`);
        await era.printAndWait(`成功招募${falcon.name}了！`);
        new EventMarks(0).sub(event_hooks.out_river);
        new FalconEduMarks().after_recruit++;
        era.set('cflag:46:招募状态', recruit_flags.yes);
        new FalconEduMarks().beginning++;
        add_event(event_hooks.week_end, new EventObject(46, cb_enum.edu));
        era.set('flag:物色对象', 0);
        return true;
    }
    return false;
  }
};
