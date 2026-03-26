const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FalconEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (falcon, me) => {
    await print_event_name('新年的感觉！', falcon);
    await era.printAndWait(`你与${falcon.name}共同迎来了新的一年。`);
    await era.printAndWait(`训练室\n`);
    await falcon.say_and_wait(`新年快乐！`);
    await era.printAndWait(
      `你推开训练室的大门，看见坐在围炉旁的${falcon.name}。`,
    );
    era.printButton(`飞鹰子新年快乐！`, 1);
    await era.input();
    await era.printAndWait(`回以问候后你也钻了进去。`);
    await era.printAndWait(
      `温暖的围炉驱散了外界的寒冷，畅想着新的一年会带来什么变化时，你迎上了${falcon.name}的双眼，后者对你笑了一下。`,
    );
    await me.say_and_wait(`跨年的新年演出怎么样？`);
    await era.printAndWait(
      `冰冷的双手慢慢恢复了触觉，你随手拿起一个橘子剥开。`,
    );
    await falcon.say_and_wait(
      `昨晚的表演比想象之中还要精彩，飞鹰子也学到了很多演唱和舞蹈方面的知识！`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}一边说着一边将过于兴奋不小心露出的尾巴重新塞回围炉之中。`,
    );
    await falcon.say_and_wait(`差点忘了！`);
    await era.printAndWait(`${falcon.name}在校服口袋中悉悉索索翻找着什么。`);
    await falcon.say_and_wait(
      `虽然在挑选礼物的时候苦恼着到底送什么才好，不过飞鹰子突然想到要送给在意的人自己亲手制作的礼物才是正解。`,
    );
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}，过去一年辛苦了，新的一年里也请多多指教！`,
    );
    await era.printAndWait(`飞鹰子带着笑容将贺卡递给了${me.actual_name}。`);
    await me.say_and_wait(`那我就心怀感激的收下了。`);
    await era.printAndWait(
      `从围炉之中伸手接过带着围炉余温的贺卡，被${falcon.name}捏住的一角有小小的松软感。`,
    );
    await me.say_and_wait(`今年的计划是？`);
    await falcon.say_and_wait(
      `今年飞鹰子也要把可爱的模样带给作为粉丝们的大家！`,
    );
    await era.printAndWait(
      `话音未落，${falcon.name}便以极快的语速回答着你的问题。`,
    );
    await me.say_and_wait(`平时这么辛苦的飞鹰子现在的话多休息一会也好哦。`);
    await era.printAndWait(
      `你抚摸着${falcon.name}圆圆的脑袋，而${falcon.sex}没有反抗，露出了舒服的表情。`,
    );
    await falcon.say_and_wait(`欸？唔——飞鹰子已经不是小孩子了。`);
    await era.printAndWait(
      `虽然嘴上还在抗议着，但从围炉中再次脱逃的尾巴兴奋的上下摆动着。`,
    );
    await me.say_and_wait(`既然飞鹰子有些疲惫的话\n`);
    era.printButton(`偶像之道在于持之以恒的练习`, 1);
    era.printButton(`去哪里玩一下吧？`, 2);
    era.printButton(`一起去看场电影？`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(
        `持之以恒的训练是迈向卓越的关键，对于${falcon.name}的偶像之路来说，一刻也不能松懈。`,
      );
      await me.say_and_wait(`今天练习一下速度吧。`);
      await era.printAndWait(`虽然舍不得围炉的温暖，但还是将腿从中抽出。`);
      await falcon.say_and_wait(`训练员${me.adult_sex_title}？`);
      await era.printAndWait(`不知何时${falcon.name}已经换好了运动服。`);
      await era.printAndWait(
        `${falcon.name}比想象中更具活力实在令你感到安心。`,
      );
      await era.printAndWait(`随后，你与${falcon.name}一同走向了训练场。`);
    } else if (ret1 === 2) {
      await falcon.say_and_wait(`嗯，去哪里比较好呢？`);
      await era.printAndWait(
        `${falcon.name}从口袋中拿出手机一边轻声念叨着一边快速划过各种界面。`,
      );
      await era.printAndWait(
        `与闪耀的飞鹰子相比，像这样专注思考的飞鹰子非常稀有。`,
      );
      await falcon.say_and_wait(`中午就去这家吧！`);
      await era.printAndWait(
        `${falcon.name}将手机屏幕旋转过来后递给你，上面显示的是附近作为话题的人气奶茶店。`,
      );
      await me.say_and_wait(`不自觉露出笑容的飞鹰子比平时更加可爱哦。`);
      await era.printAndWait(`不知不觉间露出笑容的${falcon.name}。`);
      await falcon.say_and_wait(`啊……`);
      await era.printAndWait(`${falcon.name}突然脸红了。`);
      await falcon.say_and_wait(`心跳的好快……`, true);
      await falcon.say_and_wait(`咦咦咦？飞鹰子没有露出什么失格的表情吧？`);
      await era.printAndWait(
        `慌慌张张的控制住自己表情的飞鹰子手忙脚乱的将尾巴塞回围炉之中。`,
      );
      await falcon.say_and_wait(`训练员${me.adult_sex_title}！`);
      await era.printAndWait(
        `似乎是察觉到了你的表情后，${falcon.name}恢复了往日的神情。`,
      );
      await era.printAndWait(`不久后两人在沏茶店度过了愉快的一天。`);
    } else {
      await falcon.say_and_wait(
        `适合${falcon.uma_sex_title}与训练员一起看的电影是——`,
      );
      await falcon.say_and_wait(`飞鹰子似乎也没有很好的主意呢？`);
      await era.printAndWait(`你也没有什么好主意。`);
    }
    era.set('cflag:46:节日事件标记', 0);
  };

  handlers[47 + 6] = async (falcon, me) => {
    era.set('cflag:46:节日事件标记', 0);
    await print_event_name('恋心！飞鹰子的礼物！', falcon);
    await falcon.say_and_wait(`——早安⭐！`);
    await falcon.say_and_wait(`说起来今天是情人节呢——各位有收到巧克力吗？`);
    await falcon.say_and_wait(
      `没收到也没有关系，因为接下来将要登场的是飞鹰子亲手准备的巧克力——。`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await falcon.say_and_wait(`接下来也要一直支持着飞鹰子呦♪`);
    await say_by_passer_by(`粉丝A`, `这是飞鹰子的本命巧克力吗？`);
    await falcon.say_and_wait(
      `不对～因为飞鹰子要平等的爱着每一位粉丝，所以是从巧克力店里批量采购的巧克力。`,
    );
    await falcon.say_and_wait(`而且盒子里还有飞鹰子精心准备的明信片与签名⭐！`);
    await say_by_passer_by(`粉丝B`, `能够参加飞鹰子的情人节纪念真是太好了！`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(`现场的气氛更加热烈了。`);
    await falcon.say_and_wait(`接下来也要多多支持飞鹰子哦♪`);
    await say_by_passer_by(`粉丝们`, `噢噢噢噢！！！`);
    await falcon.say_and_wait(
      `就是这样♪请观赏带着害羞与爱意的飞鹰子的表演吧！`,
    );
    await era.printAndWait(
      `在粉丝们的欢呼声中${falcon.name}的情人节纪念演唱会才刚刚拉开序幕。`,
    );
    await falcon.say_and_wait(`辛苦了！接下来也要一直支持飞鹰子哦？`);
    await era.printAndWait(
      `直到送走最后一名粉丝之后，在不远处等待着的你才走上前。`,
    );
    await falcon.say_and_wait(
      `飞鹰子的歌有传达到训练员${me.adult_sex_title}心中吗？`,
    );
    era.printButton(`已经感受到了哦。`, 1);
    await era.input();
    await falcon.say_and_wait(
      `……说起来，还有要给训练员${me.adult_sex_title}的东西。`,
    );
    await era.printAndWait(
      `${falcon.name}从不起眼的角落放置的纸箱里取出了一个包装精美的礼物盒。`,
    );
    await falcon.say_and_wait(
      `这是${falcon.name}作为担当${falcon.uma_sex_title}送给训练员${me.adult_sex_title}的本命……义理巧克力哦？`,
    );
    await era.printAndWait(
      `打开礼物盒后，看见了爱心形状的巧克力以及旁边的贺卡。`,
    );
    await falcon.say_and_wait(`今后也要一直支持飞鹰子哦！`);
    await era.printAndWait(`${falcon.name}露出了甜美的笑容。`);
    era.printButton(`收拾好演出场地后，一起去吃饭吧？`, 1);
    await era.input();
    await falcon.say_and_wait(
      `我听说附近有家对训练员与${falcon.uma_sex_title}的组合有优惠的店铺，一起去看看吧！`,
    );
    await era.printAndWait(`${falcon.name}拉起了你的手。`);
    await falcon.say_and_wait(
      `是粉丝们推荐飞鹰子去尝尝看的，不知道那边的店铺也会有飞鹰子的粉丝吗？好期待啊。`,
    );
    era.printButton(`一定会的。`, 1);
    await era.input();
    await falcon.say_and_wait(`说起来，飞鹰子……不，飞鹰子什么都没说哦⭐。`);
    await era.printAndWait(`两人在附近的人气餐厅度过了情人节。`);
  };

  handlers[47 + 9] = async (falcon, me) => {
    const suzuka = get_chara_talk(2);
    await print_event_name('目标是皋月赏！', falcon);
    await era.printAndWait(
      `覆盖在枝条上的厚厚积雪终于化开，静谧的特雷森再次被啼鸣声造访。`,
    );
    await era.printAndWait(`正当你在温暖的训练室思考着接下来的赛事时。`);
    await falcon.say_and_wait(`训练员${me.adult_sex_title}我回来了！`);
    await suzuka.say_and_wait(`打扰了。`);
    await era.printAndWait(`训练室迎来了两位访客。`);
    await me.say_and_wait(`今天的飞鹰子依然活力四射呢。`);
    await falcon.say_and_wait(
      `嗯！毕竟活力与可爱正是${falcon.uma_sex_title}偶像的不同之处呢。`,
    );
    await era.printAndWait(
      `${falcon.name}在训练室转了一圈后一头扎进了沙发里，无声铃鹿安静的坐在沙发边上，双眼不断的打量着训练室。`,
    );
    await falcon.say_and_wait(`在沙发上躺着真是舒服啊。`);
    await me.say_and_wait(`今天的偶像活动是？`);
    await era.printAndWait(`你取出两个塑料杯，泡上了便利店中购买的红茶。`);
    await falcon.say_and_wait(`嗯——飞鹰子希望能参加皋月赏。`);
    await me.say_and_wait(`什么？`);
    await suzuka.say_and_wait(`欸？`);
    await era.printAndWait(`一旁的无声铃鹿轻轻遮住了嘴。`);
    await falcon.say_and_wait(`飞鹰子希望能参加皋月赏！`);
    await era.printAndWait(
      `${falcon.name}以相当具有气势的声音向训练室里的人们宣布。`,
    );
    await suzuka.say_and_wait(`原来飞鹰同学把我拉过来是为了这件事吗？`);
    await suzuka.say_and_wait(
      `不过我记得飞鹰同学在泥地赛道活跃，为什么想要参加草地呢？`,
    );
    await era.printAndWait(`你也带着同样的问题看向了${falcon.sex}。`);
    await falcon.say_and_wait(
      `因为飞鹰子一直都活跃在沙地赛上，所以沙地赛的粉丝们都认识飞鹰子了⭐`,
    );
    await falcon.say_and_wait(
      `不过草地那边的观众好像都不认识飞鹰子，所以飞鹰子希望借着参加草地的机会，让关注草地赛事的粉丝们也开始支持飞鹰子！`,
    );
    era.printButton(`既然这样的话，我也支持。`, 1);
    await era.input();
    await era.printAndWait(
      `如果能让在草地方面的观众也能认识这么可爱的${falcon.uma_sex_title}，对飞鹰子的偶像之路也是一大助力。`,
    );
    await suzuka.say_and_wait(
      `原来如此，所以希望我能传授一些在草地方面的技巧吗？`,
    );
    await falcon.say_and_wait(
      `所以请把异次元的逃亡者（无声铃鹿的称号）借给我吧！`,
    );
    await suzuka.say_and_wait(`……欸？`);
    await falcon.say_and_wait(
      `干脆飞鹰子在跑皋月赏的时候就自称异次元的逃亡者，从小铃鹿这边获取力量！`,
    );
    await era.printAndWait(
      `不只是无声铃鹿，你也对${falcon.name}的脱线有些头疼。`,
    );
    await suzuka.say_and_wait(`飞鹰同学，请不要顶着别人的称号做奇怪的事情！`);
    await era.printAndWait(`无声铃鹿生气了。\n`);
    era.printButton(`抱歉，之后我会对飞鹰子好好说教的。`, 1);
    era.printButton(`可以传授一些有关草地的技巧吗？`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`无论什么理由顶着别人的名头都不会是什么好事。`);
      await era.printAndWait(`在这样下去的话可能会引发不必要的纷争。`);
      await suzuka.say_and_wait(`不，您多虑了。`);
      await suzuka.say_and_wait(
        `飞鹰同学似乎是充满活力又很跳脱的类型，不过飞鹰同学不是会拿别人的声誉作为坏事的人。`,
      );
      await suzuka.say_and_wait(
        `虽然在逃马姐妹的活动中要跟上飞鹰同学的节奏还是很辛苦的事情呢。`,
      );
      await suzuka.say_and_wait(
        `但是还请以自己的身份走完道路，不是自己真心认同的称号是不会带来理想的结局。`,
      );
      await falcon.say_and_wait(`咦咦？小铃鹿生气起来好可怕！`);
      await me.say_and_wait(`原来如此。`);
      await era.printAndWait(`你又重新坐在座位上。`);
      await suzuka.say_and_wait(
        `虽然不能借给飞鹰同学我的称号，不过草地方面的技巧我会好好告诉你的。`,
      );
      await era.printAndWait(
        `之后的三小时里，你们通过无声铃鹿了解到了有关草地的知识。`,
      );
    } else {
      await suzuka.say_and_wait(`如果只是这样的话，当然可以。`);
      await era.printAndWait(`无声铃鹿似乎不在生气了？`);
      await suzuka.say_and_wait(
        `不是自己真心认同的称号是不会带来理想的结局的，还请脱线的飞鹰同学牢记这点。`,
      );
      await suzuka.say_and_wait(`还有\n`);
      await suzuka.say_and_wait(
        `不过前方的风景我是不会让给其他人的！这点还请飞鹰同学记在心底。`,
      );
      await falcon.say_and_wait(`咦咦？小铃鹿生气起来好可怕！`);
      await era.printAndWait(`……原来这个才是重点吗？`);
      await me.say_and_wait(`接下来${falcon.name}似乎要很辛苦了。`, true);
      await era.printAndWait(`${falcon.name}带着求助的目光看向了你。`);
      await me.say_and_wait(`（移开视线）`, true);
      era.drawLine();
      await suzuka.say_and_wait(`已经训练了8个小时，飞鹰同学还这么有活力吗？`);
      await falcon.say_and_wait(`对于耐久演出来说，现在还没有到极限哦！`);
      await suzuka.say_and_wait(`既然这样的话，那就继续吧。`);
      await era.printAndWait(`之后的草地特训一直持续到了宵禁才结束。`);
    }
  };
  handlers[47 + 12] = async (falcon, me) => {
    await print_event_name(`目标！皋月赏！`, falcon);
    await era.printAndWait(`训练场\n`);
    await falcon.say_and_wait(`哈啊，哈啊……`);
    await me.say_and_wait(`辛苦了。`);
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}，飞鹰子比上次练习的速度更快了吗？`,
    );
    await era.printAndWait(`你看了一眼秒表。`);
    await me.say_and_wait(`……距离获胜还有一段距离。`);
    await era.printAndWait(
      `虽然有无声铃鹿所教导的跑法技巧，但对${falcon.name}适应了泥地赛道的${falcon.name}还是很辛苦的事情。`,
    );
    await falcon.say_and_wait(`……训练员${me.adult_sex_title}？`);
    await era.printAndWait(
      `${falcon.name}似乎从你的表情之中看出了什么，一边喝着水一边观察着你的反应。`,
    );
    await me.say_and_wait(`虽然有些困难，不过多练习一下的话就能克服了。`);
    await era.printAndWait(`你将文件夹放下，然后认真的看着${falcon.sex}。`);
    await falcon.say_and_wait(
      `训练员${me.adult_sex_title}这样子看起来很可疑呢?`,
    );
    await falcon.say_and_wait(`难道是已经有喜欢的对象了吗?`);
    await era.printAndWait(
      `虽然不知道飞鹰子为什么得出了这个结论，不过却莫名的令人安心。`,
    );
    await me.say_and_wait(`只是有些疲惫了，稍微休息一下就好。`);
    await falcon.say_and_wait(`……真的是这样吗？`);
    await era.printAndWait(
      `似乎无法撇开这种嫌疑了，于是看着越来越疑惑的${falcon.name}的你寻找着新的话题。`,
    );
    await me.say_and_wait(
      `比起这个的话，飞鹰子不是还要将制作新曲的决定告诉一直支持着自己的大家吗？`,
    );
    await me.say_and_wait(`再不快点的话，大家都要等急了。`);
    await falcon.say_and_wait(`欸?那得抓紧时间了才行了呢。`);
    await era.printAndWait(
      `虽然嘴上这么说着但${falcon.sex}却没有丝毫动作，只有尾巴在啪嗒啪嗒的敲打着座位。`,
    );
    await me.say_and_wait(`再不快点的话，大家都要等急了。`);
    await falcon.say_and_wait(`知道了～`);
    await era.printAndWait(
      `以为是没有听清重复了一遍，${falcon.name}还是坐在那里。`,
    );
    await era.printAndWait(`思考着该说些什么好时，${falcon.name}站了起来。`);
    await falcon.say_and_wait(`那我出发了～`);
    await falcon.say_and_wait(`真遗憾。`, true);
    await era.printAndWait(`随后${falcon.name}便迎着夕阳跑向了更衣室。`);
    era.drawLine({ content: '演出结束后' });
    await falcon.say_and_wait(`谢谢大家⭐，今天的演唱会也是大受好评呢⭐`);
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(`周围传来了稀稀拉拉的掌声。`);
    await falcon.say_and_wait(
      `那么飞鹰子再唱一首歌吧♪——献给一直支持着我的你⭐`,
    );
    await era.printAndWait(`今天的演出也是大获成功。`);
    await era.printAndWait(
      `等到围观的人群慢慢散开后，从远处观看着的你走向了${falcon.name}。`,
    );
    await me.say_and_wait(`辛苦了，今天的演出也非常受欢迎。`);
    await era.printAndWait(
      `无论何时都牵挂着舞台的${falcon.teen_sex_title}实在可爱。`,
    );
    await falcon.say_and_wait(
      `没有那回事！如果不是训练员${me.adult_sex_title}发掘我的话，飞鹰子现在也在为演出而烦恼呢。`,
    );
    await era.printAndWait(
      `自己只是做了应尽的义务……虽然想这么说，但你还是闭上了嘴。`,
    );
    await falcon.say_and_wait(
      `今天的演唱会也结束了，接下来就全力准备皋月赏吧！`,
    );
    await era.printAndWait(
      `接过${falcon.name}手中的纸袋后，你们在回特雷森的路上沉默的前行。`,
    );
    falcon.print(`手中的纸袋为何如此沉重呢？`);
    falcon.print(
      `过度兴奋的大脑就像不断旋转的黑色物体咕噜咕噜在纸杯中旋转着。`,
    );
    await say_by_passer_by(`稚嫩的声音`, `打扰了！`);
    await era.printAndWait(
      `声音从背后传来，你与${falcon.name}对视一眼后一起看去。`,
    );
    await say_by_passer_by(
      `稚嫩的声音`,
      `${falcon.name}姐姐的表演真的很棒，我也想成为飞鹰姐姐那样的偶像！`,
    );
    await era.printAndWait(
      `看上去是像是初中部的小${falcon.uma_sex_title}，似乎是${falcon.name}的粉丝。`,
    );
    await falcon.say_and_wait(`谢谢你！明天也要支持飞鹰子呦，还是在这个地方⭐`);
    await era.printAndWait(
      `重新回到了偶像状态的${falcon.name}高兴的挥舞着双手。`,
    );
    await say_by_passer_by(
      `稚嫩的声音`,
      `请问怎么样才能成为飞鹰子姐姐那样的大偶像呢？`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}想要了解更多有关你们的事情。`,
    );
    await falcon.say_and_wait(
      `带着成为顶级${falcon.uma_sex_title}偶像的目标，然后牢牢记住这个目标，随后开始行动就行了！`,
    );
    await era.printAndWait(`原来如此，小${falcon.uma_sex_title}点了点头。`);
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `旁边的那位是对飞鹰子姐姐很重要的人吧？`,
    );
    await falcon.say_and_wait(`是非常重要的人哦？`);
    await era.printAndWait(
      `${falcon.name}带着难以抑制的上扬感回答${falcon.sex}的疑惑。`,
    );
    await say_by_passer_by(`小${falcon.uma_sex_title}`, `比粉丝们还要重要吗？`);
    await falcon.say_and_wait(`诶？这个的话。`);
    await era.printAndWait(`${falcon.name}罕见的停顿了，随后。`);
    era.printButton(`是比粉丝还要重要的人哦`, 1);
    era.printButton(`是与粉丝不同意义上一样重要的人`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await say_by_passer_by(`小${falcon.uma_sex_title}`, `比粉丝还重要是说？`);
      await era.printAndWait(`是在训练上和日常生活中作为指导的人。`);
    } else {
      await say_by_passer_by(`小${falcon.uma_sex_title}`, `不同意义是说？`);
      await era.printAndWait(`是在训练上和日常生活中作为指导的人。`);
    }
    await say_by_passer_by(`小${falcon.uma_sex_title}`, `原来是训练员！`);
    await era.printAndWait(
      `高兴的围着你旋转的小${falcon.uma_sex_title}突然拉住了你。`,
    );
    await say_by_passer_by(
      `小${falcon.uma_sex_title}`,
      `等我入学之后，大哥哥可以做我的专属训练员吗？`,
    );
    await era.printAndWait(
      `想要培养${falcon.uma_sex_title}需要向理事长提出申请，同时还要负责接下来整整三年的训练。`,
    );
    await era.printAndWait(`实话说是件相当艰难的事情。`);
    await me.say_and_wait(`如果进入特雷森的话，你会遇到比我更优秀的训练员。`);
    await era.printAndWait(`说起来不知为何背后凉飕飕的。`);
    await say_by_passer_by(`小${falcon.uma_sex_title}`, `我知道了！`);
    await era.printAndWait(
      `在表达感谢之后，小${falcon.uma_sex_title}便飞快的离开了。`,
    );
    await me.say_and_wait(`飞鹰子——`);
    await falcon.say_and_wait(`什么都没有哦⭐`);
    await era.printAndWait(`${falcon.name}像是什么都没发生一样盯着你看。`);
    await me.say_and_wait(`这下麻烦了`, true);
    await era.printAndWait(
      `之后为了补偿，答应${falcon.name}下次节假日会和${falcon.sex}一起出行。`,
    );
  };

  handlers[47 + 40] = async (falcon, me) => {
    await print_event_name(`飞鹰子的决定`, falcon);
    await era.printAndWait(`商业街广场\n`);
    await falcon.say_and_wait(`非常感谢大家一直以来默默支持着飞鹰子⭐`);
    await falcon.say_and_wait(
      `这是飞鹰子昨天忙了一个晚上才制作好的小礼物，希望大家接受飞鹰子的小小心意❤`,
    );
    await era.printAndWait(
      `在你和${falcon.name}的不懈宣传之下，越来越多的人们慕名而来，小小的草坪如今被大量的人群所包围。`,
    );
    await say_by_passer_by(`粉丝们`, `飞鹰子！飞鹰子！`);
    await era.printAndWait(
      `而被人群团团围住的，便是在${falcon.uma_sex_title}偶像之道上努力的${falcon.name}。`,
    );
    await era.printAndWait(
      `虽然人气距离草地的明星偶像还有一段距离，但沙地的粉丝们愿意前来参观演出的热情却远远胜过草地粉丝。`,
    );
    await era.printAndWait(
      `究其原因的话，毕竟关注草地的粉丝同时期有不少的名赛${falcon.uma_sex_title}可以选择，但专精于沙地的${falcon.uma_sex_title}偶像，人气与实力共存的${falcon.name}只有${falcon.sex}一人罢了。`,
    );
    await era.printAndWait(`可想而知${falcon.name}的压力有多大。`);
    await era.printAndWait(`就像是在显微镜下聚焦的太阳光一样。`);
    await me.say_and_wait(
      `${falcon.name}最近的睡眠时间越来越少了，真的没问题吗？`,
    );
    await era.printAndWait(
      `最近训练室已经成了${falcon.name}补觉的场所，这还是在你的强迫之下。`,
    );
    await era.printAndWait(
      `训练、偶像活动，回复粉丝之间的来信（经过你审核之后），为了下一次的突击演出所做的准备。`,
    );
    await era.printAndWait(`繁琐的活动占据了${falcon.sex}大量的心力。`);
    await falcon.say_and_wait(`……除此之外！飞鹰子还有一个好消息要告诉大家！`);
    await falcon.say_and_wait(
      `飞鹰子决定参加接下来的JBC经典赛还有东京大赏赛！`,
    );
    await say_by_passer_by(
      `粉丝们`,
      `接下来也能看到飞鹰子活跃的表现了！真是太棒了！`,
    );
    await falcon.say_and_wait(
      `接下来的比赛，飞鹰子也会一直闪耀下去的！大家一定要到现场去参观哦！`,
    );
    await say_by_passer_by(`粉丝们`, `一定会参加的！`);
    await falcon.say_and_wait(`非常感谢⭐`);
    await era.printAndWait(
      `直到最后一名粉丝离开之后，你才从稍远的位置走向${falcon.name}。`,
    );
    era.printButton(`辛苦了。`, 1);
    await era.input();
    await era.printAndWait(
      `所谓的收尾，就是将围观人群留下的垃圾全部清扫干净。`,
    );
    await era.printAndWait(
      `一开始${falcon.name}还想坚持自己打扫，但被你以自己也差不多到极限了吧为由强行制止。`,
    );
    await falcon.say_and_wait(`……训练员${me.adult_sex_title}？`);
    await era.printAndWait(
      `与平时在树下打盹的疲惫不堪的${falcon.name}不同，${falcon.sex}那充满了渴求的眼睛直勾勾的盯着你。`,
    );
    await falcon.say_and_wait(
      `飞鹰子是个合格的${falcon.uma_sex_title}偶像了吗？`,
    );
    await me.say_and_wait(
      `就${falcon.uma_sex_title}偶像而言，是世界上独一无二的存在了。`,
    );
    await falcon.say_and_wait(
      `……只要再坚持一下就可以了，所以训练员${me.adult_sex_title}放心吧！`,
    );
    await era.printAndWait(
      `……${falcon.sex}的眼睛并没有看向你，而是看向你身后的某个物体。`,
    );
    await falcon.say_and_wait(
      `飞鹰子其实很讨厌孤独的哦？所以无论如何都希望能在最大的舞台之上闪耀。`,
    );
    await falcon.say_and_wait(`……就像烟火一样，划破令人讨厌的黑夜。`);
    await falcon.say_and_wait(`为更多像飞鹰子这样的人带来答案。`);
    await era.printAndWait(`说着说着${falcon.sex}突然流下了泪水。`);
    await falcon.say_and_wait(`尽管飞鹰子能够为之努力的方向，只有沙地了。`);
    await falcon.say_and_wait(`……好想再踏上一次，像皋月赏那样的大舞台。`);
    await era.printAndWait(
      `随后疲惫不堪的${falcon.teen_sex_title}合上了双眼。`,
    );
    await era.printAndWait(
      `作为训练员的自己，让担当${falcon.uma_sex_title}陷入这种境地，已经算是失职了。`,
    );
    await era.printAndWait(
      `即使是打着尊重担当的意见，也不过是自我逃避的产物。`,
    );
    await era.printAndWait(`比以往还要痛恨自己的软弱。`);
    await me.say_and_wait(`……不能这么下去了。`);
    await era.printAndWait(
      `轻轻抱起心爱的${falcon.teen_sex_title}，怀中的重量便是作为训练员职责的重量。`,
    );
    await me.say_and_wait(`……至少完成作为训练员的责任。`);
    await era.printAndWait(
      `做好觉悟之后，虽然手臂的肌肉传来阵阵疼痛，但内心却感到了解脱。`,
    );
  };

  handlers[47 + 41] = async (falcon, me) => {
    await print_event_name(`决定的代价`, falcon);
    await era.printAndWait(
      `与11月的气候变换成反比的，有关${falcon.name}暂停偶像活动的相关报道。`,
    );
    await era.printAndWait(
      `以无论赛场还是舞台都在一刻不停闪耀而闻名的${falcon.name}，终于到达了极限。`,
    );
    await era.printAndWait(`至少对外是如此宣传的。`);
    await era.printAndWait(
      `因为事发突然而当事人又都三缄其口，使得这场事务变得愈发魔幻起来。`,
    );
    await era.printAndWait(`排除掉过于离谱的猜测，目前主流的有两种。`);
    await era.printAndWait(`${falcon.name}有了男朋友，不久之后便会退役。`);
    await era.printAndWait(
      `${falcon.name}腿部受了相当严重的伤，目前正在医院修养，痊愈的概率不高，将来可能会隐退。`,
    );
    await era.printAndWait(`无论那种对于偶像活动都是毁灭性的打击。`);
    await me.say_and_wait(`既然已经做出了决定，就没有回头路可走了。`);
    await era.printAndWait(
      `在宣布暂时停止一段时间的偶像活动后，预想之中的争吵并没有发生，${falcon.sex}只是平静的接受了这个事实`,
    );
    await era.printAndWait(
      `……话虽如此，因为自己的擅自行为，说不定使${falcon.sex}失去了成长的机会。`,
    );
    await era.printAndWait(
      `如果因为自己的主张，结果造成了这么严重的后果。回过头来看这样的决定是对是错？`,
    );
    await me.say_and_wait(
      `……最后是对是错我不知道，我只是做了我认为正确的事情。`,
    );
    await era.printAndWait(`就算因此要付出代价。`);
    await say_by_passer_by(
      `${falcon.name}的粉丝`,
      `啊，您好，请问是${falcon.name}的训练员${me.adult_sex_title}吗？`,
    );
    await era.printAndWait(
      `不知何时出现在走廊上的男人像是终于找到了目标后眼睛发亮的向你快步走来。奇怪，这次的行程应该没有通知任何人吧。`,
    );
    await me.say_and_wait(
      `没错，请问您有什么事？如果是打算要飞鹰子的签名，抱歉${falcon.sex}刚刚下去了。`,
    );
    await era.printAndWait(
      `……说起来，这个包厢是在最里侧的一间，如果是找${falcon.name}的话，应该在路上就碰到才对。`,
    );
    await say_by_passer_by(
      `${falcon.name}的粉丝`,
      `啊……不好意思，仅仅是我个人的好奇罢了。`,
    );
    await say_by_passer_by(
      `${falcon.name}的粉丝`,
      `比起飞鹰子，我对${falcon.sex}的训练员更感兴趣呢。`,
    );
    await era.printAndWait(`像是为了掩饰着什么一样，连口罩手套都戴上了。？`);
    await me.say_and_wait(`……不，不对，哪里不对劲。`);
    await say_by_passer_by(`${falcon.name}的粉丝`, `就这么下地狱去吧！`);
    await era.printAndWait(`一道白光毫无征兆的闪过。`);
    await me.say_and_wait(`唔。`);
    await era.printAndWait(
      `虽然也有考虑后会被粉丝的报复，但没想到会有如此的激进事情发生。`,
    );
    await era.printAndWait(`大脑还在处理发生于眼前的，超出现实的事件。`);
    await era.printAndWait(`于是你只能站在原地呆呆地看着小刀刺中你的腹部。`);
    await era.printAndWait(`就这样无奈的迎来自己的末路。`);
    await me.say_and_wait(`唔！`);
    await era.printAndWait(`——如果你没有下意识将公文包作为缓冲的话。`);
    await era.printAndWait(`小刀在皮质的公文包上留下了一道深深的划痕。`);
    await say_by_passer_by(`狂热粉丝`, `该死。`);
    await era.printAndWait(
      `尽管如此，突然之间受到的冲击还是让你下意识的扬起了头，险些一屁股坐到地上。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `飞鹰子明明这么完美，为什么会喜欢上你？`,
    );
    await era.printAndWait(`意识到触感不对的暴徒被眼前的失败所激怒。`);
    await say_by_passer_by(`狂热粉丝`, `给我就这么带着哭喊着下地狱去吧!`);
    await era.printAndWait(
      `不抽出小刀，反而接着这股冲劲意图将你逼迫到墙壁之上。`,
    );
    await me.say_and_wait(`该死，没有退路了。`);
    await era.printAndWait(
      `不抽出小刀，趁你失去着力点就这么将你逼迫到墙壁之上。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `那个青涩、敏感细腻的飞鹰子，怎么会突然宣布停止活动了——`,
    );
    await era.printAndWait(
      `不知是理智被愤怒所冲散的缘故，越说越激动的粉丝用力将小刀向前深入。`,
    );
    await say_by_passer_by(`狂热粉丝`, `——原来如此，我明白了。。`);
    await era.printAndWait(`一瞬间露出了迷惑表情的狂热者恍然大悟。`);
    await say_by_passer_by(
      `狂热粉丝`,
      `都是因为你的存在，我们的飞鹰子才会变成这样。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `如果你消失的话，飞鹰子就会回到之前的样子吧？`,
    );
    await era.printAndWait(`肾上腺素飙升的你看着眼前绝望的一幕。`);
    await era.printAndWait(
      `小腹传来微麻的触感，就像是有人将冰块塞进了你的腹部，从作为盾牌的文件夹下滑落的小刀切实的命中了目标。`,
    );
    await say_by_passer_by(`狂热粉丝`, `切。`);
    await era.printAndWait(
      `原本是瞄准心脏的一击，被公文包挡了下来，只能退而求其次瞄准腹部。`,
    );
    await me.say_and_wait(`请告诉我，为什么${falcon.name}迟迟没有回来。`);
    await era.printAndWait(`局面压倒性的不利，你反而冷静了下来。`);
    await era.printAndWait(
      `激烈的心脏跳动，体力像是积雪一般消散，近乎麻痹的身体，你以前所未有的集中力思考着突破的方式。`,
    );
    await say_by_passer_by(
      `狂热粉丝`,
      `……对你这种罪无可恕之人没有解释的必要。`,
    );
    await me.say_and_wait(`好机会！`, true);
    await era.printAndWait(
      `之前的对话不过是为了麻痹对方，让对方下意识的思考如何对话而疏忽对身体的防守。`,
    );
    await era.printAndWait(
      `虽然也有反过来彻底激怒对方的可能，但这种时候只考虑赌对的可能性。`,
    );
    await era.printAndWait(
      `你趁着对方一时偷袭得手后暂时放松的警惕狠狠的一脚踢到对方下体。`,
    );
    await say_by_passer_by(`狂热粉丝`, `啊啊啊啊啊啊！`);
    await era.printAndWait(
      `似乎疼痛感超过了快感所带来的麻痹，对方的手一下子松开了。`,
    );
    await me.say_and_wait(`好机会！`, true);
    await era.printAndWait(`乘着对方痛苦弯曲时，你将公文包狠狠的砸向对方。`);
    await say_by_passer_by(`狂热粉丝`, `唔——`);
    await era.printAndWait(
      `从手上传来的麻痹感来说，这一击绝对造成了严重的伤害。`,
    );
    await say_by_passer_by(`狂热粉丝`, `……明明就差最后一步了！`);
    await era.printAndWait(
      `因为无路可退而勉强站起来的恶魔看上去随时会倒在地上。`,
    );
    await era.printAndWait(`然而你的状态更糟。`);
    await me.say_and_wait(`一切就这么结束了吗？`, true);
    await era.printAndWait(`眩晕如雪花般袭来。`);
    await era.printAndWait(
      `咬破舌尖，让剧痛暂时驱散晕厥感，使出全力将公文包投掷过去。`,
    );
    await era.printAndWait(
      `第一击被对方侧头躲了过去，紧接着便是你以身体为武器直接撞向对方。`,
    );
    await era.printAndWait(
      `对方后脑勺重重撞在了玻璃桌上，然后彻底的晕了过去。`,
    );
    await me.say_and_wait(`得打电话给救护车`, true);
    await era.printAndWait(`直到拼尽全力打出电话之后，你也昏了过去。`);
    await era.printAndWait(`你的视线渐渐变得模糊。`);
    await era.printAndWait(`即将远去的意识在最后一刻看到的——`);
    await era.printAndWait(`是赶不上新时代船只的乘客。`);
  };
  handlers[47 + 42] = async (falcon, me) => {
    // 我越喜欢，我对“我受不了的方式”的定义就越严苛。我去做点什么的动能就越强。// 什么也不做，对我就是痛苦的，内心深处就有双重辜负感——第一感觉自己辜负了自己所喜欢的对象，第二感觉辜负了自己的喜欢本身。await print_event_name(`水仙`, falcon);
    await era.printAndWait(`粉丝袭击事件已经过去了一周。`);
    await era.printAndWait(
      `身处于事件的风暴中心，出于对你与${falcon.name}的人生安全考虑。`,
    );
    await era.printAndWait(`学院决定暂时限制你们的外出。`);
    await era.printAndWait(`……某种意义上也是一种解脱。`);
    await era.printAndWait(
      `虽然心里一直再说忘记这件事，但自己总会不由自主的想起那副空虚的模样`,
    );
    await me.say_and_wait(`存在感焦虑吗？`, true);
    await era.printAndWait(
      `因为在任何角度之上都是零，任何机会都因为技能和资历的空白从一开始就没有入场的资格。`,
    );
    await era.printAndWait(
      `一开始或许还可以借着说不定自己不适合这行转向其他方面。`,
    );
    await era.printAndWait(`直到在新的行业再次面对一摸一样的窘境。`);
    await era.printAndWait(`回过头来只是白白虚度了几年的岁月。`);
    await era.printAndWait(
      `或许曾经一腔热血想要做出什么，但在现实面前被迫承认自己什么都做不好。`,
    );
    await era.printAndWait(
      `对于不甘心现状的人来说，证明自己存在确实比生命更加重要。`,
    );
    await era.printAndWait(
      `因为没有存在，生命也只是没有显示和输出、途耗能量的过程罢了。`,
    );
    await era.printAndWait(`如果在这个时候有个机会能站在聚光灯下呢？`);
    await era.printAndWait(`就算这件事会给你们造成巨大的伤害。`);
    await era.printAndWait(`我很抱歉，但我必须存在。`);
    await era.printAndWait(
      `因为迷茫而寻求证明自身存在的事物，主动将自己染上色彩，加入和自己色彩相同的人群之中，假装自己不是迷茫的存在。`,
    );
    await era.printAndWait(
      `虽然知道自己得出的结论可能是错的，但现在只能暂时接受这一观点说服自己。`,
    );
    await era.printAndWait(
      `如果从这个角度考虑，上周的袭击事件只是为了证明存在感的绝望之人找到了最能引起热议的话题。`,
    );
    await era.printAndWait(`只是对方恰好是${falcon.name}的粉丝罢了。`);
    await era.printAndWait(
      `看着${falcon.name}轻轻推开训练室的大门，向你勉强露出微笑时。`,
    );
    await era.printAndWait(
      `你将看向${falcon.name}的视线向下挪开，看着训练计划发呆。`,
    );
    await era.printAndWait(
      `上周的袭击虽然惊险无比，但真正造成的伤害也仅仅只是在你小腹之上划了一道口子。`,
    );
    await era.printAndWait(
      `多亏特雷森考虑到训练员在与所属${falcon.uma_sex_title}起冲突时可能会发生的暴力事件，因此采用了凯夫拉纤维作为训练员制服的一部分。`,
    );
    await era.printAndWait(
      `虽说是为了防止被愤怒的${falcon.uma_sex_title}直接踢中导致重伤，但意外的在防刺方面也有出色的性能。`,
    );
    await era.printAndWait(`怎么说呢？因祸得福？`);
    await me.say_and_wait(`飞鹰子……不，${falcon.name}。`);
    await era.printAndWait(
      `将发散的思绪重新集中到眼前的${falcon.teen_sex_title}身上。你犹豫着要不要使用这个艺名称呼${falcon.sex}。`,
    );
    await falcon.say_and_wait(`训练员${me.adult_sex_title}，飞鹰子没关系的。`);
    await era.printAndWait(
      `比想象之中还要坚强的${falcon.teen_sex_title}即令你高兴又感到了一丝悲哀。`,
    );
    await era.printAndWait(`被阴影所覆盖的${falcon.teen_sex_title}低下了头。`);
    await falcon.say_and_wait(
      `飞鹰子作为${falcon.uma_sex_title}偶像，心中隐隐约约就有这种不安，不如说这种事情一定会到来。`,
    );
    await falcon.say_and_wait(
      `所以，与其是训练员${me.adult_sex_title}道歉，倒不如说我才是应该道歉的那一边。`,
    );
    await era.printAndWait(
      `${falcon.name}的视线上下浮动着，似乎不太擅长这样的对话。`,
    );
    await era.printAndWait(`你深吸一口气，准备继续说下去时——`);
    await falcon.say_and_wait(`飞鹰子知道的。`);
    await era.printAndWait(
      `比镜面的湖泊还要平静的${falcon.name}抬起头直视你的双眼。`,
    );
    await falcon.say_and_wait(
      `飞鹰子的粉丝们将希望寄托在了飞鹰子的身上，所以，飞鹰子不能有任何的污点存在。`,
    );
    await falcon.say_and_wait(
      `但是，飞鹰子不这么想，只要有为了成为偶像付出的汗水，然后再加上一点点的运气。`,
    );
    await falcon.say_and_wait(
      `像飞鹰子这样的${falcon.uma_sex_title}就能在舞台中心闪耀了……但是……做出这种事来不是很奇怪吗。`,
    );
    await era.printAndWait(`你想要逃避这双悲哀的眼睛，但无法将视线从中移开。`);
    era.printButton(`飞鹰子为什么想成为偶像？`, 1);
    await era.input();
    await era.printAndWait(`逃避会有比不逃避更惨重的事情发生，。`);
    await falcon.say_and_wait(
      `……为了让像飞鹰子这样寂寞的人也能暂时忘掉孤独的痛苦。`,
    );
    await era.printAndWait(`是了，就是为了这个。`);
    await era.printAndWait(`不管如何哀叹自身的不幸，责任都是一样的。`);
    await era.printAndWait(
      `作为${falcon.uma_sex_title}偶像一帆风顺的走到了现在，已经是难以想象的奇迹般的幸运了。`,
    );
    await me.say_and_wait(
      `我知道的，就像心脏被掏空，那片黑洞洞的伤口，无论何时都在向外流血。`,
    );
    await me.say_and_wait(
      `就算有无数的鲜花与掌声否定这判断，也会在演出结束之后，从舞台之上走下时，从伤口之中流出的鲜血质问着自己。`,
    );
    era.printButton(`比起为了减轻罪恶感的流泪，作为偶像有更重要的事情去做`, 1);
    await era.input();
    await me.say_and_wait(
      `飞鹰子要考虑的是如何赢得接下来的比赛，以及第三年的泥地赛事。`,
    );
    await me.say_and_wait(
      `除了回应粉丝们的期待，更重要的，为了也有以泥地${falcon.uma_sex_title}偶像为目标的后辈们。`,
    );
    await me.say_and_wait(
      `就算看不到方向又如何，就算错了又怎么样！就这么带着这个伤口一直向前！就这样在赛场之上舞台中心一直闪耀下去！。`,
    );
    await me.say_and_wait(
      `让${falcon.sex}们看看作为初代${falcon.uma_sex_title}偶像的${falcon.name}，到底能做到什么地步！`,
    );
    await era.printAndWait(
      `世界上不存在同时满足正确的方向与正确的目标而造成的成功。`,
    );
    await era.printAndWait(
      `严肃考虑的话，正确的方向与正确的目标都是不存在的。`,
    );
    await era.printAndWait(
      `然而，就算方向与目标都是错的，我们也依然做成了无数的成功，不是吗？`,
    );
    await era.printAndWait(
      `前半段旅程取得的成功都是这么过来的，又有什么理由不能证明后面的成功不也是顺着错误的方向与错误的目标而成就的呢？`,
    );
  };
  handlers[47 + 48] = async (falcon, me) => {
    await print_event_name(`圣诞祈愿`, falcon);
    await era.printAndWait(`中山竞马场·有马纪念`);
    await era.printAndWait(
      `坐在观众席上的观众们所呼出的气体化作淡淡的白雾弥漫在冬日的竞马场。`,
    );
    await era.printAndWait(`今年的有马纪念比依然火热。`);
    await era.printAndWait(
      `你与${falcon.name}一起坐在观众席上，听着解说介绍接下来参与有马纪念的明星赛${falcon.uma_sex_title}们。`,
    );
    await me.say_and_wait(
      `今年有马纪念最受瞩目的参赛${falcon.uma_sex_title}是大和赤骥。`,
    );
    await falcon.say_and_wait(`大和同学吗？`);
    await era.printAndWait(
      `在嘈杂的声音下，${falcon.uma_sex_title}引以为傲的听力反而成为了一种枷锁。`,
    );
    await me.say_and_wait(`有好好保护好耳朵吗？`);
    await falcon.say_and_wait(`飞鹰子好好戴上耳套了！`);
    await era.printAndWait(
      `打上了蝴蝶结的可爱耳套避免了飞鹰子因为过于激烈的呼喊声暂时性失聪的可能性。`,
    );
    await me.say_and_wait(`那么，现在一起去找座位吧。`);
    await falcon.say_and_wait(`好！那个……训练员${me.adult_sex_title}`);
    await falcon.say_and_wait(`就今天的话，可以直接叫我的名字吗？`);
    await era.printAndWait(`意外的${falcon.name}不再执着于偶像的包袱了。`);
    await me.say_and_wait(`${falcon.name}，我们一起走吧。`);
    await falcon.say_and_wait(`嗯！`);
    await era.printAndWait(`观众们差不多都坐定了之后，你们才找到自己的座位。`);
    await me.say_and_wait(`今年的有马纪念也依然盛况空前。`);
    await falcon.say_and_wait(`听说赤骥同学也出场了呢！`);
    await era.printAndWait(
      `身穿蓝白色决胜服的赛${falcon.uma_sex_title}走进了赛场。`,
    );
    await era.printAndWait(`最引人注目的还是${falcon.sex}那长长的棕色双马尾。`);
    await falcon.say_and_wait(`赤骥同学的决胜服比在电视上看到的还要漂亮！`);
    await me.say_and_wait(`不知道这次${falcon.sex}会采取什么跑法呢？`);
    era.drawLine({ content: '胜利舞台后' });
    await era.printAndWait(`大和赤骥漂亮的取得了第一的成绩。`);
    await era.printAndWait(`舞台上的表演也让人感到振奋。`);
    await era.printAndWait(`直到结束之后，`);
    await falcon.say_and_wait(`有马纪念的舞台真大呢。`);
    await falcon.say_and_wait(`要是飞鹰子也能登上这样的舞台就好了。`);
    await era.printAndWait(
      `从手机上看到的消息是今年的观看人数超过了十一万人。`,
    );
    await era.printAndWait(`相比之下，东京大赏人数仅有两三万。`);
    await falcon.say_and_wait(
      `不过就算是这样，飞鹰子也要作为顶级偶像让泥地赛道也变得受欢迎才行！`,
    );
    await era.printAndWait(`所谓的正统偶像吗？`);
    await me.say_and_wait(`那么先从东京大赏开始，朝着这个目标一点一点前进吧！`);
    await falcon.say_and_wait(`好！`);
    await era.printAndWait(`掏出手机扫了一眼，已经快到宵禁时间了。`);
    await me.say_and_wait(
      `现在的话回去也有些来不及了，干脆就在附近休息一个晚上吧。`,
    );
    await falcon.say_and_wait(
      `嗯——训练员${me.adult_sex_title}一定已经订好房间了吧？`,
    );
    await me.say_and_wait(`订房间？`);
    await era.printAndWait(`慌忙拿出手机开始查看，才发现附近的酒店早已爆满。`);
    await era.printAndWait(
      `而且在耽搁的这段时间，就算从现在跑到车站都已经赶不上最后一班回特雷森的列车了。`,
    );
    await falcon.say_and_wait(`……没，没关系的训练员${me.adult_sex_title}。`);
    await era.printAndWait(
      `看着你无力垂下的肩膀，${falcon.name}顿了顿从贴身小包中取出了一张卡片递给了你。`,
    );
    await falcon.say_and_wait(
      `差点忘了！这是给训练员${me.adult_sex_title}的。`,
    );
    await era.printAndWait(`你接过印有${falcon.name}圣诞服的小卡片。`);
    await falcon.say_and_wait(
      `差点忘了！这是给训练员${me.adult_sex_title}的。`,
    );
    await falcon.say_and_wait(
      `不是训练员${me.adult_sex_title}突然提醒我的话，飞鹰子差点就忘了呢……啊哈哈。`,
    );
    await era.printAndWait(
      `你看着飞鹰子腼腆的笑容，然后顺着${falcon.sex}期待的视线注意到了反面还有字。`,
    );
    era.printButton(`「谢谢。」`, 1);
    await era.input();
    await era.printAndWait(
      `略微潦草的艺术签名，以及写着「今天也要加油」的飞鹰子Q版头像。`,
    );
    await falcon.say_and_wait(`如果心情低落的话，看到飞鹰子就会高兴起来的！`);
    await era.printAndWait(`真是感激不尽。那么——`);
    await me.say_and_wait(`先去附近的旅馆询问一下有没有剩余的房间吧。`);
    await era.printAndWait(
      `虽然附近的酒店都被人提前预约好了，但也有因为各种原因而无法前来的客人，如果能抓住这个机会的话。`,
    );
    await era.printAndWait(
      `在意识到这点后，你们加快了前去探访的脚步。在询问了三家旅店的前台后打听到了一个因为临时有事取消预约而空余的房间。`,
    );
    await falcon.say_and_wait(`这样真的可以吗？`);
    await era.printAndWait(`取下发饰后将头发散开的${falcon.name}喃喃自语。`);
    await era.printAndWait(
      `毕竟是无可奈何的事情，你揉了揉${falcon.name}的小脑袋。`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `果然还在因为没赶上电车而有些沮丧吧？之后想办法补偿${falcon.sex}吧。`,
    );
    era.set('cflag:46:节日事件标记', 0);
  };
};
