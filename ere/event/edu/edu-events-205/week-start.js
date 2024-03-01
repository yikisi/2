const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_get_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const HookArg = require('#/data/event/hook-arg');
const { race_infos, race_enum } = require('#/data/race/race-const');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const me = get_chara_talk(0),
    montjeu = get_chara_talk(204),
    vp = get_chara_talk(205);
  let temp,
    wait_flag = false;
  switch (event_object?.arg) {
    case 47 + 24:
      await print_event_name('翱翔于蓝天之上', vp);
      await era.printAndWait([
        vp.name,
        ' 在过年后，于春天稍过的五月，和出道赛相同，大胜1600米的 ',
        race_infos[race_enum.prix_prb].get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '在本人强烈希望的支持下，',
        vp.sex,
        '也参加了距离延长了500米左右的 ',
        race_infos[race_enum.prix_dia].get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        `出乎包括 ${me.name} 在内的众多观众的意料，在三冠级别的赛事上获得了压倒性的胜利。`,
      );
      await era.printAndWait(`${vp.name} 稳步地提高了自己的实力。`);
      await era.printAndWait(`而且在那个过程中，${me.name} 能教的东西减少了。`);
      await era.printAndWait(
        `听一而知十的 ${vp.name}，有时即使不教也能自然地得出正确的答案。`,
      );
      await era.printAndWait(
        '即使是资深训练员也不会注意到的事情自己就能改善。',
      );
      await era.printAndWait(
        `虽然也有被其他训练员指责为放任主义的时候，但 ${me.name} 认为对${vp.sex}来说这是正确的。`,
      );
      break;
    case 47 + 33:
      await print_event_name('家贫？走他乡', vp);
      await era.printAndWait(
        `然后夏天也快结束了，从海边的集训回来的 ${me.name} 又在写G1的参赛登记书。`,
      );
      await era.printAndWait(`称霸法国橡树明明还没多久，回过神来又是G1。`);
      await era.printAndWait(`接下来要参加的是${vp.sex}期待的凯旋门赏。`);
      await era.printAndWait(
        `如果只看已经展现出的如此强大的实力，${vp.name} 获得这一荣誉也是不足为奇的。`,
      );
      await era.printAndWait(
        `${me.name} 在参赛登记上写上签名，交给在训练员室的沙发上躺着的 ${vp.name}。`,
      );
      era.printButton(`「这是参赛登记表，请签名。」`, 1);
      await era.input();
      await vp.say_and_wait(`嗯。`);
      await era.printAndWait(
        `不知什么时候，${vp.sex}把自身带进了训练员室，就好像这里是${vp.sex}的私人房间。`,
      );
      await era.printAndWait(`但既然和${vp.sex}签了契约，所以也不能抱怨。`);
      await era.printAndWait(
        `比起那些，或许 ${me.name} 更希望${vp.sex}能想办法解决私生活的邋遢。`,
      );
      await era.printAndWait(
        `${vp.name} 从沙发上摔了下来，站起身，一边敲着递过来的圆珠笔，一边朝 ${me.name} 看了一眼。`,
      );
      await vp.say_and_wait(`这么说来，这个星期天有空吗？`);
      era.printButton(`「白天很闲。」（爱慕+1）`, 1);
      era.printButton(`「要追加练习吗？」（好感+5）`, 2);
      temp = await era.input();
      await era.printAndWait(`${vp.name} 一边签字一边沉思。`);
      await vp.say_and_wait(
        `我师傅说想见我。${vp.sex}说夏天集训结束后就可以，差不多回去一趟。`,
      );
      era.printButton(`「师傅？」`, 1);
      await era.input();
      await vp.say_and_wait(`是的，是教我跑步的人。`);
      await era.printAndWait(`培养${vp.sex}跑步的人物。`);
      await era.printAndWait(
        `如果能遇到从另一个角度看待完成度高的 ${vp.name} 的人物，也会成为很好地了解${vp.sex}的机会吧。`,
      );
      await era.printAndWait(
        `${me.name} 一边糊起装有参赛登记书的信封，一边答应了${vp.sex}的邀请。`,
      );
      await era.printAndWait(
        `既然如此，那还得准备伴手礼。${me.name} 把目光转向摆放着茶叶罐的架子。`,
      );
      await era.printAndWait(`秋天的收获期还很远，哪里都没有秋高气爽的茶叶。`);
      await era.printAndWait(`如果是这样的话，选有长收获期的阿萨姆比较好。`);
      era.println();
      wait_flag = sys_like_chara(
        205,
        0,
        5 * (temp === 2),
        true,
        Number(temp === 1),
      );
      break;
    case 95 + 25:
      await print_event_name('陌路。', vp);
      await era.printAndWait(`从凯旋门赏之后过了半年多。`);
      await era.printAndWait(
        `${vp.name} 的态度至今没有改变，对 ${me.name} 的指导坦率地接受。`,
      );
      await era.printAndWait(
        `虽然有很多方面的成长，但是对练习的动力也没有下降。`,
      );
      await era.printAndWait(
        `${vp.sex}的可爱被更多的人所认知，随着比赛的不断增加，${vp.sex}的粉丝也越来越多。`,
      );
      await era.printAndWait(
        `包括凯旋门赏上的战果在内，现在的${
          vp.sex
        }作为一个背负着法国的${vp.get_teen_sex_title()}而驰名。`,
      );
      await era.printAndWait(`但是，比赛的结果不会因此改变。`);
      await era.printAndWait(
        `${vp.name} 的私人物品比去年增加了很多的训练员室，在被暑气侵蚀的炎热中。`,
      );
      await era.printAndWait(
        `让人 ${me.name} 认为即使该让疲劳的身体休息也必须在这里的理由只有一个。`,
      );
      await era.printAndWait(`关于今年以来 ${vp.name} 的战绩。`);
      await era.printAndWait(
        `在眼前的电脑中，春天和初夏跑过的两场G1的影像不断循环。`,
      );
      await era.printAndWait(`距离也和去年一样，马场的情况也不是特别差。`);
      await era.printAndWait(`尽管如此，前者是第二名，后者是第三名。`);
      await era.printAndWait(
        `虽然 ${vp.name} 一直在练习，但在没有明确的解决方法的情况下，赌上连霸的下一个红宝锦标也留下了不安。`,
      );
      await era.printAndWait(
        `看着反复出现的影像和${vp.sex}的状况，已经过了几个小时了呢。`,
      );
      await era.printAndWait(
        `乌鸦的叫声使 ${me.name} 猛然惊醒。回头一看，窗外被晚霞染成了橙色。`,
      );
      await me.say_and_wait(`……糟了。`, true);
      await era.printAndWait(`今天应该有训练的计划。`);
      await era.printAndWait(
        `只顾自己而忘记${vp.sex}，慌忙拿出手机，收到了一个短信的通知。`,
      );
      await era.printAndWait(
        `在省略的通知中也清楚地知道了大约一个小时前来的那个是来自 ${vp.name} 的。`,
      );
      await vp.say_and_wait(`对不起，今天身体不舒服，请让我休息。`);
      await era.printAndWait(`训练的计划应该在那之前就有了。`);
      await era.printAndWait(`也就是说，经过一定的时间之后才发送了那个信息。`);
      await era.printAndWait(`${me.name} 一边抱着头，一边想给${vp.sex}回信`);
      await era.printAndWait(
        `但是，无论什么借口在这里都是徒劳的，还是只发送简洁的信息比较好。`,
      );
      era.printButton(`「明白了。」`, 1);
      await era.input();
      await era.printAndWait(
        `对于最近没有取得成果的 ${vp.name}，${me.name} 自己也充分理解不得不面对${vp.sex}了。`,
      );
      await era.printAndWait(
        `不知道原因的训练员，到底能胜任${vp.sex}的什么呢。`,
      );
      await era.printAndWait(`${me.name} 站起来才感觉到肚子饿了。`);
      await era.printAndWait(`（……红茶可以吗？）`);
      await era.printAndWait(`茶叶罐架子，轻飘飘的清爽香味刺激着大脑的深处。`);
      await era.printAndWait(
        `有一种大脑放空的顺畅，${me.name} 拿起了一个罐子。`,
      );
      await era.printAndWait(
        `但是里面几乎没有什么东西，只剩下残留的茶叶和留在罐子里残香，是柠檬香味的。`,
      );
      await era.printAndWait(`从那天以来，${vp.name} 就喜欢喝这个。`);
      await era.printAndWait(`偶尔来训练员室的话，泡这种茶的情况也很多。`);
      await era.printAndWait(`到了秋天，寒冷的日子也会增加。`);
      await era.printAndWait(`${me.name} 默默地合上罐子。`);
      await me.say_and_wait('独自去买点吧……', true);
      era.set('cflag:205:招募状态', -2);
      if (era.get('flag:当前互动角色') === 205) {
        era.set('flag:当前互动角色', 0);
      }
      new EventMarks(0).add(event_hooks.out_start);
      new TreveEduMarks().tea = 1;
      break;
    case 95 + 29:
      await print_event_name('Fly Away', vp);
      await era.printAndWait(
        `${me.name} 在训练员室等着约好见面的 ${vp.name}。`,
      );
      await era.printAndWait(
        `在${vp.sex}来之前的这段时间里，重新审视之前比赛的影像。`,
      );
      await era.printAndWait(
        `一个一个地按顺序排出 ${vp.name} 不顺利的理由。但是，还有其他问题。`,
      );
      await era.printAndWait(`${me.name} 重新审视了最近比赛的最终直线。`);
      await era.printAndWait(
        `${vp.name} 和以前一样，为了从第一集团脱出到前方而跃跃欲试。`,
      );
      await era.printAndWait(
        `但在这场比赛中没能摆脱包围网，得意的末脚毫无建树就结束了。`,
      );
      await era.printAndWait(
        `原来 ${vp.name} 就是个算不得高大的${vp.get_uma_sex_title()}。`,
      );
      await era.printAndWait(
        `而且，如果战略也被知晓的话，出现互相勾结不让${vp.sex}向前的集团也不奇怪。`,
      );
      await era.printAndWait(
        `最重要的是，${vp.sex}的做法很容易预料—— ${vp.name} 的跑动很像 ${montjeu.name}。`,
      );
      await era.printAndWait(
        `那个时候，训练员们致力于制定应对 ${montjeu.name} 的战略，在 ${vp.name} 身上就这样通用了。`,
      );
      await era.printAndWait(
        `${me.name} 需要让传奇的接班人赢下去，能给予什么？`,
      );
      await era.printAndWait(
        `在这样烦恼的过程中，约定的时间已经过了一个小时左右。但是 ${vp.name} 没有来的样子。`,
      );
      break;
    case 143 + 9:
      temp = [era.get('love:205'), era.get('relation:205:0')];
      era.set('love:205', 0);
      era.set('relation:205:0', 0);
      await require('#/event/edu/edu-common')(
        205,
        new HookArg(event_hooks.week_start),
      );
      era.set('love:205', temp[0]);
      era.set('relation:205:0', temp[1]);
      if (temp[0] >= 50) {
        era.drawLine();
        await print_event_name(`${vp.sex}即是成真的美梦`, vp);
        await era.printAndWait(`${me.name} 听到了什么声音。`);
        await era.printAndWait(
          `从黑暗中睁开眼睛，眼前是陌生（完全不）的天花板。`,
        );
        await era.printAndWait(`脑子里软绵绵的，无法理解状况。`);
        await era.printAndWait(`总觉得好像身处和往常完全不同的地方。`);
        await era.printAndWait(
          `用模糊的头呆呆地凝视着虚空，轻飘飘的香味扑鼻而来。`,
        );
        await era.printAndWait(
          `紧接着，一个${vp.get_teen_sex_title()}突然映入眼帘。`,
        );
        await era.printAndWait(`柔软的栗色头发，清澈的苍蓝双眸。`);
        await era.printAndWait(
          `然后，${vp.sex}的脸上浮现出宛如注视婴儿般慈爱的笑容。`,
        );
        await vp.say_and_wait(`Bonjour，睡得舒服吗？`);
        await era.printAndWait(`像抚摸一样温柔的声色会引起微微的睡意。`);
        await era.printAndWait(
          `看着对方的脸，${me.name} 终于理解了状况，于是想要让意识苏醒。`,
        );
        await era.printAndWait(`但是，眼睛被温暖的手掌轻轻地盖住了。`);
        await vp.say_and_wait(`再稍微睡一会儿？现在还早呢。`);
        era.printButton(`「……不，该起床了。」`, 1);
        era.printButton(`「我也想享受和你一起的早晨。」（爱慕+1）`, 2);
        temp = await era.input();
        await vp.say_and_wait(`呵呵，这样啊，我很高兴。`);
        await era.printAndWait(`手掌做成的眼罩被取下，光线射入视野。`);
        await era.printAndWait(
          `站起身来，${vp.name} 坐在 ${me.name} 的寝床上微笑着。`,
        );
        await era.printAndWait(
          `虽然稍微考虑了一下感觉有什么遗憾、但或许这就足够了，首先要做的是必须做的事情。`,
        );
        era.printButton(`「早上好，${vp.name}。」`, 1);
        await era.input();
        await vp.say_and_wait(`是的，${me.actual_name}！`);
        await era.printAndWait(`${vp.name} 像唱歌一样回话。`);
        era.drawLine();
        await era.printAndWait(
          `自凯旋门赏以来，${me.get_couple_title()} 一直以海外比赛为主。`,
        );
        await era.printAndWait(
          `准确地说，因为表现出了比平时更好的实力，结果决定以海外的比赛为主战场进行比赛。`,
        );
        await era.printAndWait(
          `想办法赶走粘着的 ${vp.name}，换完衣服，去客厅。`,
        );
        await era.printAndWait(
          `桌上摆满了佳肴，${vp.name} 在等着 ${me.name}。`,
        );
        await era.printAndWait(`说实话很吃惊，${vp.name} 的料理也很拿手。`);
        await era.printAndWait(`坐在座位上眺望各种料理。`);
        await era.printAndWait(
          `用金枪鱼、凤尾鱼、橄榄等制作的分量十足的沙拉。`,
        );
        await era.printAndWait(`看起来很暖人的浓汤散发着美妙的香气。`);
        await era.printAndWait(
          `每一个都是令人眼花缭乱的菜品，但只有一个特别引人注目。`,
        );
        await era.printAndWait(`加入了厚厚的火腿和大量奶酪的热三明治。`);
        await era.printAndWait(
          `告诉 ${vp.name} “我开动了”以后，大口大口地吃了起来。`,
        );
        await era.printAndWait(
          `浓厚的奶酪酱汁加上火腿的风味，就和高档餐厅里吃的味道一样。`,
        );
        await era.printAndWait(`——味道完全一样，现在想起来了。`);
        era.printButton(`「……这个，你买来的吗？」`, 1);
        await era.input();
        await vp.say_and_wait(`是我做的哦？`);
        await vp.say_and_wait(`因为你看起来很爱吃，所以我研究了一下！`);
        await era.printAndWait(`……差点忘了这孩子是个天才。`);
        await era.printAndWait(
          `但是，能复制到这种程度，还是得夸句不愧是${vp.sex}。`,
        );
        await vp.say_and_wait(`……${sys_get_callname(205, 0)} 该给我奖励吧？`);
        await era.printAndWait(
          `一瞬间，带着微笑的 ${vp.name} 在下一刻向我开口了。`,
        );
        await era.printAndWait(
          `${me.name} 看到闪闪发光的鲜红的口内和舌头，不知为什么心脏骤停。`,
        );
        await era.printAndWait(`总觉得好像在看不该看的东西，有一种背德感。`);
        await vp.say_and_wait(`啊……♪`);
        await era.printAndWait(
          `就这样，${vp.name} 一边转动着耳朵和尾巴，一边期待着看 ${me.name}。`,
        );
        await era.printAndWait(`……就是说要做啊，那个。`);
        await era.printAndWait(
          `虽然犹豫了一下，但不确信如果不做的话${vp.sex}就会一直张开嘴。`,
        );
        await era.printAndWait(
          `总之，把三明治撕成小碎块，慢慢地放入${vp.sex}的嘴里。`,
        );
        await vp.say_and_wait(`嗯……`);
        await era.printAndWait(
          `${vp.name} 闭上嘴唇，把 ${me.name} 的指尖微微卷入。`,
        );
        await era.printAndWait(`栩栩如生的触感和温暖从指尖传到大脑。`);
        await era.printAndWait(
          `然后${vp.sex}一边想着什么，一边扭动着嘴，一口一口地咽下去。`,
        );
        await vp.say_and_wait(`……嗯。`);
        await era.printAndWait(`闭上眼睛，再张开嘴。`);
        await era.printAndWait(`没想到要求再来一次。`);
        await era.printAndWait(
          `背德感、保护欲和内心深处的刺激，${me.name} 再次撕下三明治。`,
        );
        await era.printAndWait(
          `两次、三次、四次，放进${vp.sex}的嘴里，指尖渐渐湿润。`,
        );
        await era.printAndWait(
          `不久，盘子上的法式三明治消失了，立刻宣告结束。`,
        );
        await vp.say_and_wait(`啊，连你的份儿都吃了。`);
        era.printButton(`「没关系，没关系的，对吧！？」`, 1);
        await era.input();
        await vp.say_and_wait(`是的♪谢谢♪`);
        await era.printAndWait(
          `${vp.name} 用笑容满面的表情道谢，然后用舌头舔了一圈嘴唇。`,
        );
        await era.printAndWait(`这让 ${me.name} 不得不意识到湿润的手指。`);
        await era.printAndWait(`${vp.name} 一边看着那个，一边小声嘟囔着。`);
        await vp.say_and_wait(`……好像会上瘾。`);
        await era.printAndWait(`假装没听到吧。`);
        era.drawLine();
        await vp.say_and_wait(`……又工作到晚上。`);
        await era.printAndWait(`两肩上放着温暖的手，从上面传来了声音。`);
        await era.printAndWait(
          `抬头一看，洗完澡后残留着热气的 ${vp.name}，用严肃的目光俯视着 ${me.name}。`,
        );
        await era.printAndWait(`那么，时间已经到了，回房间吧。`);
        era.printButton(
          `「今天就睡觉了，晚安 ${sys_get_callname(0, 205)}。」`,
          1,
        );
        await era.input();
        await vp.say_and_wait(`啊……`);
        await era.printAndWait(`衣服被拉了一下。`);
        await era.printAndWait(
          `回头一看，${vp.name} 好像很寂寞，抓住 ${me.name} 衣服的下摆。`,
        );
        await era.printAndWait(`因为那个样子让 ${me.name} 想起了某些小动物。`);
        era.printButton(`「果然不能马上就睡着，要不要吹个晚风？」`, 1);
        await era.input();
        await vp.say_and_wait(`……好！`);
        await era.printAndWait(`${vp.name} 眼睛闪闪发光，摇起尾巴来。`);
        await era.printAndWait(
          `这个反应也见怪不怪了啊，${me.name} 一边这样想着一边牵着${vp.sex}的手。`,
        );
        await era.printAndWait(
          `跑得很漂亮，很美，对任何人来说是都是理想的奔跑。`,
        );
        await era.printAndWait(`拥有圣女般纯洁的${vp.sex}。`);
        await era.printAndWait(`有着女神般高贵的${vp.sex}。`);
        await era.printAndWait(`略有些懒散，意外地容易亲近的${vp.sex}。`);
        await era.printAndWait(`而且，比起别人，容易寂寞的${vp.sex}。`);
        era.printButton(`「只要你在我身边——」`, 1);
        await era.input();
        await era.printAndWait(`简洁地，好好地传达。`);
        await era.printAndWait(`用与 ${vp.name} 相称的话语。`);
        era.printButton(`「无论多少次，我都会将爱传递给你。」`, 1);
        await era.input();
        await era.printAndWait(`好像说了什么荒唐的话。`);
        await era.printAndWait(
          `虽然 ${me.name} 注意到冷汗一股一股地流，但语言已经出发了。`,
        );
        await era.printAndWait(
          `${vp.name} 把耳朵和尾巴立到极限，眼睛睁得满满的，满脸通红。`,
        );
        await era.printAndWait(
          `不久，像是惊呆了一样，像是放弃了一样，发出巨大的叹息。`,
        );
        await vp.say_and_wait(`……你也意外的贪得无厌啊，说了很随便的话。`);
        era.printButton(`「不知道吗，训练员都是这样的。」`, 1);
        await era.input();
        await era.printAndWait(
          `每个人都想把负责的${vp.get_uma_sex_title()}变成英雄。`,
        );
        await era.printAndWait(`拿到桂冠的第二天，就已经在寻觅新的奖杯了。`);
        await era.printAndWait(
          `训练员这种生物实际上是比${vp.get_uma_sex_title()}更贪婪的生物。`,
        );
        await era.printAndWait(
          `听到这句话，${vp.name} 发出比刚才更大的叹气，伸出双手。`,
        );
        await era.printAndWait(
          `轻轻地把手放在 ${me.name} 的两颊上，目不转睛地盯着 ${me.name}。`,
        );
        await vp.say_and_wait(`没办法，我知道了，我会站在你身边的。`);
        await era.printAndWait(`这样说的话，${vp.name} 会更加靠近脸。`);
        await era.printAndWait(
          `眼前是${vp.sex}端正的容貌，甜甜的香味在能让肌肤感受到热气的距离。`,
        );
        await era.printAndWait(`然后就这样，${vp.sex}的目光骤然锐利。`);
        await vp.say_and_wait(`但是请不要误会，我不会满足你的理想。`);
        await era.printAndWait(
          `这是对 ${me.name} 的宣战，就这样，苍白的眼神射穿了 ${me.name}。`,
        );
        await vp.say_and_wait(
          `谁也不让，我会一直站在你面前，总有一天会让你只看着我的。`,
        );
        await era.printAndWait(`说完之后，${vp.name} 莞尔一笑。`);
        await era.printAndWait(
          `那是${vp.sex}本来就有的天真烂漫的，能让周围也变得快乐的笑容。`,
        );
        await era.printAndWait(
          `${vp.sex}脸上重新展露笑颜后，像发出“啪”的一声眨了眨眼。`,
        );
        await vp.say_and_wait(`——我的甜心。`);
        era.println();
        wait_flag = temp === 2 && sys_love_uma(205, 1);
      }
  }
  wait_flag && (await era.waitAnyKey());
};
