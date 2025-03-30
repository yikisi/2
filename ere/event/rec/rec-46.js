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

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const falcon = get_chara_talk(46),
      event_marks = new EventMarks(0),
      tokino = get_chara_talk(301),
      me = get_chara_talk(0);
    switch (stage) {
      case event_hooks.recruit:
        if (await this.check_before_rec()) {
          return;
        }
        await say_by_passer_by(
          `${falcon.get_uma_sex_title()}`,
          `能得到训练员的邀请非常感谢，不过呢，我觉得自己的实力恐怕还是差了一点。`,
        );
        await say_by_passer_by(
          `${falcon.get_uma_sex_title()}`,
          `——啊，像训练员这样温柔的人，接下来一定能遇到更好的${falcon.get_uma_sex_title()}。`,
        );
        era.printButton(`是我唐突了，祝你接下来的比赛顺利。`, 1);
        await era.input();
        await era.printAndWait(
          `你与接触的${falcon.get_uma_sex_title()}擦肩而过。这已经是今天第三位拒绝的${falcon.get_uma_sex_title()}了。`,
        );
        await era.printAndWait(
          `或许是阴沉沉的天空影响，因为付出的努力未达到想要的目标而懊恼。${me.actual_name}忍不住叹了一口气`,
        );
        await era.printAndWait(
          `今天就到此为止吧。${me.actual_name}努力克制着失落的情绪，然后将拿出的契约书小心塞回文件夹。${me.actual_name}从结伴而行的${falcon.get_uma_sex_title()}们身边快步经过，然后回到了训练室。`,
        );
        era.drawLine();
        await era.printAndWait(
          `最近的招募情况不尽人意，一方面是找不到心仪的对象，即使勉强自己向着愿意签约的马娘递出合同，但最后还是无法回应期待的双眼。`,
        );
        await era.printAndWait(
          `对于训练员来说短暂的三年却是马娘职业生涯短暂的一生。`,
        );
        await era.printAndWait(
          `心情莫名烦躁了起来，为了甩开纷乱的思想强迫自己望向前方，却与一束光芒相遇`,
        );
        await era.printAndWait(`那束光芒，微弱而耀眼，却似乎有着无限的力量`);
        await era.printAndWait(`内心骚动不安，想要追逐那束光芒。`);
        await era.printAndWait(
          `就像是为了引导你一样，你的身体不受控制的向着目标地前进。`,
        );
        era.drawLine();
        await era.printAndWait(`脚步在楼梯口停下。`);
        await era.printAndWait(`虽然没有停下脚步的理由，但你还是停了下来。`);
        await era.printAndWait(`莫名的悲伤席卷了你。`);
        await me.say_and_wait(
          `美丽又充满智慧的三女神大人啊，请赋予我勇气让我找到合适的${falcon.get_uma_sex_title()}吧。`,
        );
        await era.printAndWait(
          `究竟是自暴自弃的埋怨还是自嘲式的苦中作乐，亦或二者兼有。就算问${me.actual_name}自己，恐怕也没有准确回复。`,
        );
        era.println();
        await say_by_passer_by(
          `怒气冲冲的人类教师`,
          `${falcon.name}！这已经是你这个星期第三次未经许可擅自举办演唱会了！`,
        );
        await era.printAndWait(`愤怒的喊叫声打破了你的思绪。`);
        await me.say_and_wait(`发生了什么？`);
        await era.printAndWait(`正当你努力理解现状的时候。`);
        await falcon.say_and_wait(`不好意思请让一下——`);
        era.printButton(`等——`, 1);
        await era.input();
        await era.printAndWait(`你被狠狠的撞到了墙上。`);
        await era.printAndWait(
          `虽然下意识的用公文包挡在前面充当了缓冲物卸掉了一部分力，但那股巨力还是让你眼前一黑。`,
        );
        await falcon.say_and_wait(`怎、怎么办？`);
        await era.printAndWait(
          `虽然看不见少女的表情，但此刻一定是惊慌失措的模样吧。`,
        );
        await era.printAndWait(`想要逃避所做的反抗，却伤害到了陌生人。`);
        await era.printAndWait(`对少女来说，这也是所谓的顾此失彼吧。`);
        await say_by_passer_by(`怒气冲冲的人类教师`, `${falcon.name}！`);
        await falcon.say_and_wait(`噫——`);
        await era.printAndWait(`一边是无辜的受害者，一边则是紧追不舍的敌人。`);
        await era.printAndWait(
          `就连片刻的迟疑也不允许，追赶的教师已经近在咫尺。`,
        );
        await falcon.say_and_wait(`……飞鹰子可不能在这种地方认输！`);
        await era.printAndWait(
          `如果是${falcon.get_uma_sex_title()}的话，想要从人类的手中逃跑——甚至反过来将他打倒也不是什么难事。`,
        );
        await era.printAndWait(
          `毕竟人类无法战胜${falcon.get_uma_sex_title()}。`,
        );
        await falcon.say_and_wait(`为了飞鹰子的偶像之梦，只能这么做了！`);
        await era.printAndWait(
          `靠着墙支撑起身体的你努力地理解混乱的状况，尚未恢复的视野里浮现出了正准备一跃而下的少女。`,
        );
        await era.printAndWait(`就像是瞄准了猎物准备俯冲的鹰一样。`);
        await era.printAndWait(
          `或许是在肾上腺素的刺激下，你只觉得此刻像是化成了果冻一样几乎停滞。`,
        );
        await say_by_passer_by(`人类教师`, `！${falcon.name}！。`);
        await era.printAndWait(`话语还是慢了一步。`);
        await era.printAndWait(
          `苗条的身影向着天空振翅,然后将站在地上的凡人远远抛开。`,
        );
        await era.printAndWait(`但是\n`, { align: 'center' });
        await era.printAndWait(`毕竟不是真正的鹰`, { align: 'center' });
        await era.printAndWait(`接下来的事情如你预计一般。`);
        await era.printAndWait(`重力毫不留情的将她捕获，重重地将她摁向土地。`);
        await era.printAndWait(
          `然后撞断两根树枝，她灰头土脸的从地上爬起，最终溜的一干二净。`,
        );
        await era.printAndWait(`终究只是似是而非的存在。`);
        await era.printAndWait(`不知为何，心中的人选确立了。`);
        await say_by_passer_by(`人类教师`, `居然这样？`);
        await era.printAndWait(`就应该是这样。`);
        await era.printAndWait(`那道身影难以忘却。`);
        era.printButton(`打扰了，刚刚的${falcon.get_uma_sex_title()}是？`, 1);
        await era.input();
        await say_by_passer_by(
          `人类教师`,
          `醒目飞鹰……你是在寻找合适的担当吗？`,
        );
        await era.printAndWait(
          `对方似乎打算开口询问你的伤势，你对着带着疑惑的教师摇了摇头。`,
        );
        await era.printAndWait(
          `虽然从刚才的决断来看稍显鲁莽，不过那份对于偶像的强烈渴求，除去天赋实在一般，应该早早就有训练员抛出橄榄枝才是。`,
        );
        await era.printAndWait(`似乎看出了你的疑惑，教师苦笑着望向中庭。`);
        await say_by_passer_by(
          `人类教师`,
          `是啊，${falcon.name}比想象中还要倔强呢。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `在平时的练习上，比起速度的练习，醒目飞鹰似乎更在意将他人的视线集中在自己身上，为此引发的问题可是让人头疼。`,
        );
        await me.say_and_wait(`……站在聚光灯下的偶像吗？`, true);
        await era.printAndWait(
          `作为粉丝们期翼的理想存在，在万众瞩目的舞台上展现着自己最美好一面的偶像。`,
        );
        await era.printAndWait(
          `你对职业偶像这块仅限于听说以及在节日的电视上观看表演。`,
        );
        await me.say_and_wait(
          `……但是以赛${falcon.get_uma_sex_title()}为起点比其他方向成功的概率更大，耗时也更短。`,
        );
        await me.say_and_wait(`也许这才是切实可行的方案。`);
        await era.printAndWait(
          `或许是教师对自己学生的期许，亦或者是想要醒目飞鹰就这么平静下来，教师摇了摇头。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `但是她不管怎么努力，似乎都像被沉重的铁球系住了脚。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `在连续三场选拔赛都以倒数第一结束后，最委婉的说法也是不擅长草地。`,
        );
        await say_by_passer_by(
          `人类教师`,
          `不过经历了这么多打击却依然是信心满满的模样，我都有点羡慕她了。`,
        );
        await me.say_and_wait(`……为什么不试试看沙地？`);
        await say_by_passer_by(
          `人类教师`,
          `如果你对醒目飞鹰有兴趣的话，不如自己去问问吧？……今年冬天比去年还要冷啊。`,
        );
        await era.printAndWait(
          `教师搓了搓手，呼出的气体凝聚成了水雾被寒风带走。`,
        );
        await me.say_and_wait(`醒目飞鹰接下来会去哪里？`);
        await say_by_passer_by(
          `人类教师`,
          `接下来会继续在墙壁上张贴自己的演出吧，能在午休期间将海报贴遍所有教室门口，这份行动力为什么不用在专业课的学习上呢。`,
        );
        await era.printAndWait(
          `教师将手中紧紧攥着的海报揉成纸团，然后又将纸团展开。`,
        );
        await era.printAndWait(`叮铃铃铃！`, {
          align: 'center',
          fontSize: '5rem',
        });
        await era.printAndWait(
          `正当你打算询问更多关于${falcon.name}消息时，急促的铃声打断了你们之间的对话。`,
        );
        await era.printAndWait(
          `相互告别后，教师便走向了办公室。你梳理着对话中的有用信息，却被吹进走廊的寒风冷的缩了缩脖子。`,
        );
        era.drawLine({ content: '第二天' });
        await era.printAndWait(
          `你像平时一样来到训练室门口，却发现训练室大门上贴着什么。`,
        );
        await falcon.say_and_wait(
          `观众募集中！新人偶像${falcon.name}！预定于16:00在河边举行的突击演唱会！约好了一定要来看哦♪`,
        );
        await era.printAndWait(`犹豫片刻后，你将海报轻轻撕下。`);
        await era.printAndWait(`不远处传来了不小的骚动声。`);
        era.printButton(`去看看吧。`, 1);
        await era.input();
        await era.printAndWait(
          `虽然没有根据，但或许与手上的海报有关，于是你便向着骚动传来的方向迈出了脚步。`,
        );
        era.println();
        await falcon.say_and_wait(`非常抱歉。`);
        await tokino.say_and_wait(
          `${falcon.name}${falcon.get_adult_sex_title()}，如果想要合规的进行偶像活动，请在赛马娘选拔赛上努力。`,
        );
        await tokino.say_and_wait(
          `特雷森学院是以培育优秀赛${falcon.get_uma_sex_title()}为目标而创立的，请以此为目标与合适的训练员一起奋斗吧。`,
        );
        await era.printAndWait(
          `你看到骏川小姐将${falcon.name}手中尚未分发出去的海报没收后，轻轻搓成了小球。`,
        );
        await falcon.say_and_wait(`噫！知道了！`);
        await era.printAndWait(`${falcon.name}像是被吓到了一样颤抖起来。`);
        await tokino.say_and_wait(
          `……${me.actual_name}${me.get_adult_sex_title()}，请问有什么事情吗？`,
        );
        era.printButton(`……我可以和${falcon.name}聊聊吗？`, 1);
        await era.input();
        await era.printAndWait(`你想起了在窗边闪闪发光的少女。`);
        await era.printAndWait(`所以你看向了手纲小姐翠绿色的瞳孔。`);
        await tokino.say_and_wait(
          `……如果双方达成一致，请把契约书复印一份放在理事长办公室，不过在此之前。`,
        );
        await era.printAndWait(`你顺着骏川小姐的目光看向了一路贴过来的海报。`);
        await tokino.say_and_wait(
          `请在${falcon.get_uma_sex_title()}们午休结束前把走廊恢复成原来的样子。`,
        );
        await era.printAndWait(`你明白了骏川小姐这么生气的原因了。\n\n\n`);
        await falcon.say_and_wait(`这里就是最后一处了！`);
        await era.printAndWait(
          `在两人的拼命努力后，总算在午休结束之前将海报全部撕了下来。`,
        );
        await falcon.say_and_wait(
          `……谢谢你！训练员${me.get_adult_sex_title()}！`,
        );
        await era.printAndWait(
          `看着眼前的始作俑者兴奋的向你道谢，你一时之间也不知该说什么比较好。`,
        );
        await falcon.say_and_wait(
          `……说起来，飞鹰子在河边举行的演唱会，训练员${me.get_adult_sex_title()}会过来看吗？`,
        );
        await era.printAndWait(`醒目飞鹰偷偷看了你一眼，然后略显尴尬的笑着。`);
        era.printButton(`我会参加的。`, 1);
        await era.input();
        await falcon.say_and_wait(
          `欸？真的吗！飞鹰子一定会将你迷到眼睛都离不开飞鹰子！`,
        );
        await era.printAndWait(
          `眼前的少女一扫之前的阴霾，略显激动的握住了你的手。`,
        );
        await falcon.say_and_wait(`啊……不好意思。`);
        await era.printAndWait(`少女羞涩的轻笑着，然后松开了你的手。`);
        await era.printAndWait(`……今天意外的舒适啊。`);
        await era.printAndWait(`你开始期待接下来的演出了。`);
        add_event(event_hooks.out_river, new EventObject(46, cb_enum.recruit));
        event_marks.add(event_hooks.out_river);
        era.set('cflag:46:随机招募', 0);
        era.set('flag:物色对象', 46);
        return true;
      case event_hooks.out_river:
        event_marks.sub(event_hooks.out_river);
        // 定义：1代表积极 2代表消极
        // 节拍 1
        await era.printAndWait(`你跟着海报的指引来到了河岸边。`);
        // 场景应为积极
        await era.printAndWait(
          `随着太阳逐渐西沉，天空的颜色也从明亮的蔚蓝慢慢荡漾到橙黄，云朵也被夕阳染成了金红色。`,
        );
        await falcon.say_and_wait(`~~~♪`);
        // 通过行走暗示时间从下午到黄昏
        await era.printAndWait(
          `高架桥投下的阴影覆盖了桥下的区域，形成了大片的暗区，只有在黄昏之时，才会有一丝丝的光线洒在桥下的草地上。`,
        );
        await era.printAndWait(
          `而被橙黄色的天空所渲染的少女，就在河边的草地，她的舞台上举行着演出。`,
        );
        // 节拍 1
        await falcon.say_and_wait(`~~~♪谢谢大家！`);
        // 对比 空无一人的草地
        await era.printAndWait(`少女娴熟的面对着空地鞠躬。`);
        await era.printAndWait(
          `少女似乎沉溺于自己所想象的舞台中，脸上依然带着发自真心的笑容。`,
        );
        // 节拍 2
        era.printButton(`啪啪啪啪。`, 1);
        await era.input();
        await era.printAndWait(`少女似乎无动于衷。`);
        await era.printAndWait(`刚刚是不是趁转身时偷偷看了一眼？`);
        await era.printAndWait(
          `虽然有种自恋的微妙感，但这种尴尬随着充满生气的口号很快消散了。`,
        );
        await era.printAndWait(
          `即使仔细地观察着她的表演，少女继续着自己的表演。`,
        );
        era.drawLine();
        await falcon.say_and_wait(`——呼……今天的飞鹰子也是状态绝佳⭐`);
        await era.printAndWait(
          `脚下的杂草随风摇曳，似乎是在向她的表演拍手鼓掌。`,
        );
        await era.printAndWait(
          `马娘站在左右路灯发出光线的交界处，就像是在模仿着被探照灯照射的舞台一样。`,
        );
        await era.printAndWait(
          `路过的行人好奇的向着这片小小的舞台撇去一眼，随后加快了脚步离开。`,
        );
        await era.printAndWait(`或许，这就是她的舞台吧。`);
        await falcon.say_and_wait(`……飞鹰子的粉丝一号先生⭐`);
        await era.printAndWait(`正准备转身离开的你被叫住了。`);
        era.printButton(`……粉丝一号？`, 1);
        await era.input();
        await era.printAndWait(
          `正当你咀嚼着她的深意，沐浴在光线之下的少女不给你任何喘息的机会向你挥出了第二击。`,
        );
        await falcon.say_and_wait(
          `因为粉丝一号先生是第一个听完飞鹰子整场演唱会的人⭐`,
        );
        era.println();
        await era.printAndWait(
          `……你稍稍回忆了一下，虽然中途也有两三人围观，但都在最后一幕前离开了。`,
        );
        await falcon.say_and_wait(`所以飞鹰子的付出终于得到了回报⭐`);
        await era.printAndWait(
          `换句话说，自己是唯一一个从开头一直看到结束的观众。`,
        );
        await falcon.say_and_wait(`就带着这样的感觉一口气冲向世界之巅⭐`);
        await era.printAndWait(
          `能在1月的寒风中坚持2小时，被称为粉丝也是确切的说法吧。`,
        );
        await falcon.say_and_wait(`事不宜迟，就这样……训练员先生？`);
        await era.printAndWait(
          `能在1月的寒风中坚持2小时，被称为粉丝也是确切的说法吧。`,
        );
        await era.printAndWait(`训练员先生！`, {
          align: 'center',
          fontSize: '5rem',
          color: '#dc4097',
        });
        era.printButton(`呜啊！`, 1);
        await era.input();
        await era.printAndWait(
          `你下意识的打了一个战栗，醒目飞鹰用手遮住了嘴，下意识的后退了一步。`,
        );
        await falcon.say_and_wait(
          `粉丝一号先生有什么愿望吗？只要是飞鹰子的能力范围内，飞鹰子都会实现的⭐`,
        );
        await era.printAndWait(
          `尴尬的沉默过后，少女努力找到了一个话题。你稍稍想了一下。`,
        );
        era.printButton(`可以在沙地选拔赛上见到飞鹰子吗？`, 1);
        await era.input();
        await era.printAndWait(
          `似乎是始料未及的回复，${falcon.name}露出了有些为难的神情。`,
        );
        await falcon.say_and_wait(`……飞鹰子还正在寻找合适的训练员哦？`);
        era.printButton(`既然这样，不如和我签订契约吧。`, 1);
        await era.input();
        await falcon.say_and_wait(`太好了！`);
        await era.printAndWait(`始料未及的是，醒目飞鹰拉着你的手转起了圈。`);
        await falcon.say_and_wait(`飞鹰子的粉丝一号同时还是一名训练员⭐`);
        await falcon.say_and_wait(`没有什么比这样的事情更幸运了！`);
        await era.printAndWait(
          `直至世界变成了飞快流动的线条，你的眼前只剩下了醒目飞鹰。`,
        );
        await era.printAndWait(`扑通。`);
        await era.printAndWait(`醒目飞鹰终于用尽了最后的力气。`);
        await era.printAndWait(
          `躺在草地上的两人大口喘息着新鲜空气，泥土腥味与青草芳香的钻进了鼻腔之中。`,
        );
        await era.printAndWait(
          `若非是醒目飞鹰在理性耗尽之际紧紧握住了你的手，此刻的你恐怕已经抵达商业街了。`,
        );
        era.printButton(`我希望能在泥地上看到你的身影。`, 1);
        await era.input();
        await era.printAndWait(
          `极力遏制住从胃部传来的呕吐感，周围的一切依然没有停止旋转。`,
        );
        await falcon.say_and_wait(`诶……训练员先生是在开玩笑吧⭐`);
        await era.printAndWait(
          `已经连说话的充裕都消失了，口中吐出的词语似乎都加入了这个旋转的世界。`,
        );
        era.printButton(`我希望能在泥地看到醒目飞鹰的身影。`, 1);
        await era.input();
        await era.printAndWait(`旋转速度渐渐慢了下来。`);
        era.println();
        await falcon.say_and_wait(`……毕竟是飞鹰子第一个粉丝的请求呢。`);
        await era.printAndWait(
          `因为呕吐感占据了上风，你闭上了眼，于此同时很遗憾的错过了醒目飞鹰的表情。`,
        );
        await era.printAndWait(
          `等到再次睁开双眼时，迎接你的是不再回避你的视线，堂堂正正注视着你的${falcon.name}。`,
        );
        await falcon.say_and_wait(
          `飞鹰子觉得只有在草地上奔跑才能登上最大最闪亮的舞台！`,
        );
        await falcon.say_and_wait(
          `而且泥地和草地之间的人气，相差了三四倍不止！`,
        );
        await falcon.say_and_wait(
          `虽然飞鹰子不擅长草地，但是努力一定会产生结果`,
        );
        era.printButton(
          `飞鹰子没有想过作为泥地偶像开创属于自己的马娘偶像时代吗?`,
          1,
        );
        await era.input();
        await falcon.say_and_wait(`咦咦咦——`);
        await me.say_and_wait(
          `泥地的粉丝们也期待着能指引着他们的马娘诞生，不如说这是泥地的大家所期盼的事情。`,
        );
        await me.say_and_wait(
          `——泥地的大家们可是憋着一口气，想要看到明星马娘的诞生！`,
        );
        await era.printAndWait(
          `这么近的距离，你几乎能听到醒目飞鹰越来越急促的心跳声。`,
        );
        await era.printAndWait(`深吸一口气，看来距离说服醒目飞鹰就差一步了。`);
        era.printButton(`醒目飞鹰不想站在最闪耀的舞台之上吗。`, 1);
        await era.input();
        await falcon.say_and_wait(`……飞鹰子的……最闪耀的舞台……`);
        await me.say_and_wait(
          `偶像不就是为了回应粉丝们的期待而将不可能化作可能的明日之星，对吧？`,
        );
        await era.printAndWait(
          `小心翼翼的掌控着节奏，你向${falcon.name}伸出了手。`,
        );
        await me.say_and_wait(
          `我也在寻找一路前行的同伴，就这样为了各自的目标一起前行吧。`,
        );
        await me.say_and_wait(`不久，即将举行一场泥地比赛，一起去看看吧？`);
        await falcon.say_and_wait(
          `接下来请多指教了，训练员……不！飞鹰子的粉丝一号先生⭐`,
        );
        await era.printAndWait(`两人的手紧紧的握在了一起。\n`);
        await era.printAndWait(`成功招募${falcon.name}了！`);
        event_marks.sub(event_hooks.out_river);
        era.set('cflag:46:招募状态', recruit_flags.yes);
        add_event(
          event_hooks.week_end,
          new EventObject(46, cb_enum.edu).set_arg('beginning'),
        );
        era.set('flag:物色对象', 0);
        return true;
    }
    return false;
  }
};
