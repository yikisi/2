const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const { say_by_passer_by } = require('#/utils/chara-talk');
const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/**
 * @param {HookArg} hook
 * @param _
 * @param {EventObject} event_object
 */
module.exports = async function (hook, _, event_object) {
  const me = get_chara_talk(0),
    chara_talk = get_chara_talk(4),
    chara19_talk = get_chara_talk(19),
    event_marks = new MaEduMarks(),
    chara301_talk = get_chara_talk(301),
    edu_weeks = era.get('cflag:4:育成回合计时');
  let wait_flag = false;
  if (event_marks.memory === 1) {
    await print_event_name(`早上好，丸善斯基`, chara_talk);
    chara_talk.print(`被直射的阳光照在脸上，不情愿地醒来了。`);
    chara_talk.print(`是昨天晚上玩过头了吗？`);
    await chara_talk.say_and_wait(`呜——`);
    await era.printAndWait(`丸善斯基从床上睁开了眼睛。`);
    await chara_talk.say_and_wait(`呼啊——`);
    await chara_talk.say_and_wait(
      `不愿意从床上做起来，就这样伸出一只手摸索着闹钟。`,
    );
    chara_talk.print(
      `意外的是，平时不小心睡过头被训练员君用直直的眼神瞪着一样的可怕闹钟，现在却像理事长在学院里种的胡萝卜一样安静。`,
    );
    chara_talk.print(`......不对，怎么想的话都有点奇怪吧？`);
    chara_talk.print(`果然是昨天用力过猛，不小心弄坏了吗？`);
    chara_talk.print(`还是说——`);
    await chara_talk.say_and_wait(`今天是休息日吗？`, true);
    chara_talk.print(`在得到这个好消息后，心满意足的就这么睡过去了——不对！`);
    chara_talk.print(`要是是闹钟坏了呢？今天是星期...星期几来着？`);
    chara_talk.print(`要是迟到的话，被训练员君发现的话......`);
    await chara_talk.say_and_wait(`这么想的话果然睡不着了啊！`, true);
    chara_talk.print(
      `就这么坐了起来，因为困倦还未完全消除的身体传来了阵阵的麻痹感。`,
    );
    await chara_talk.say_and_wait(`哈——啊。`);
    chara_talk.print(`身体自动做出了反应。`);
    await era.printAndWait(
      `丸善斯基披着乱糟糟的头发摸索着不知丢在何处的拖鞋，视野模糊着走下了床。`,
    );
    era.drawLine();
    chara_talk.print(
      `半梦半醒的自己总算被冰凉的水流从三女神的伊甸园里活生生拽了出来。`,
    );
    chara_talk.print(
      `简单的用电吹风吹了一下头发后，用毛巾包裹住尚在滴水的头发走出了卫生间。`,
    );
    chara_talk.print(`咕咚咕咚，哈啊~`);
    chara_talk.print(`将一整瓶咖啡牛奶一饮而尽后，心情也变得雀跃起来了♪`);
    await chara_talk.say_and_wait(`接下来做些什么呢？`);
    chara_talk.print(`休息日的今天，后辈们应该也去放松了。`);
    chara_talk.print(`休息日的特雷森，稍微有些冷清呢。`);
    await chara_talk.say_and_wait(`训练员君——`);
    chara_talk.print(`胸中悄然涌出一份感觉。`);
    chara_talk.print(`陌生又莫名熟悉的甜蜜感袭上了心头。`);
    chara_talk.print(
      `就算训练员君从这个世界上消失的话，我恐怕也不会忘记这份怮动吧。`,
    );
    await chara_talk.say_and_wait(`这样的话，今天就去训练室吧。`);
    await era.printAndWait(`如果是自卑又比谁都要好胜训练员君的话。`);
    await era.printAndWait(
      `此刻的现在，恐怕正在训练室，一边苦恼着接下来的比赛，一边喝着浓浓的苦咖啡吧。`,
    );
    await chara_talk.say_and_wait(
      `这样的话，不去把他从这份令人难受的苦恼之中拽出来可不行呢。`,
    );
    await era.printAndWait(`丸善斯基来到了训练室门口。`);
    await era.printAndWait(
      `带着最近新了解的“突然推开门吓人一跳”的潮流，推开门大声地宣布着自己的到来。`,
    );
    await era.printAndWait(
      `看着训练员君带着慌乱的表情手忙脚乱的寻找着被刚才的惊吓不小心飞到沙发下的遥控器。`,
    );
    await era.printAndWait(
      `丸善斯基想起了小包中那张与训练员君一起在卡拉OK拍下的合照，喝过头的训练员君带着的可爱酒窝，在床上不知道翻来覆去看了多少遍。`,
    );
    await era.printAndWait(`也许是晴天的关系吧。`);
    await era.printAndWait(
      `丸善斯基看上去就像刚喝饱水分的亮晶晶的胡萝卜一样。`,
    );
    await era.printAndWait(
      `明天的她也会一如既往的，带着这份独特的感觉鼓励着大家吧。`,
    );
    await era.printAndWait(`带着这份对未来的憧憬，丸善斯基迎来了新的一天。`);
  } else if (edu_weeks === 5) {
    await print_event_name(
      `来自${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}的礼物`,
      chara_talk,
    );
    // 丸善斯基邀请玩家开车兜风
    await era.printAndWait(`训练室`);
    await era.printAndWait(`咚咚咚`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}打扰了。`,
    );
    await era.printAndWait(
      `抱着巧克力小山的${chara_talk.name}走进了${me.actual_name}的训练室。`,
    );
    era.printButton(`需要帮忙吗？`, 1);
    await era.input();
    await era.printAndWait(
      `像是轻小说一样的事情发生在了现实之中，一瞬间让${me.actual_name}怀疑自己是不是活在虚拟世界里。`,
    );
    await chara_talk.say_and_wait(
      `说着感谢丸善前辈在平日里的帮助什么的，将这些巧克力硬塞过来了。`,
    );
    await chara_talk.say_and_wait(
      `后辈们比想象之中还要热情还真是有些不知如何是好呢——啊，放在这里可以吗？`,
    );
    era.printButton(`后辈们很喜欢你呢`, 1);
    await era.input();
    await era.printAndWait(
      `将放在小桌上的各种零食与漫画放在地板上，从丸善斯基的手中接过一部分巧克力。`,
    );
    await chara_talk.say_and_wait(`呼——后辈们的期待可真是沉重呢。`);
    await era.printAndWait(
      `从摇摇欲坠的巧克力塔中解脱出来的${chara_talk.name}带着略显困扰的微笑坐在了沙发上。`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，非常感谢♪`,
    );
    await me.say_and_wait(`作为报酬能和我多说一点可爱后辈们的事情吗？`);
    await era.printAndWait(
      `${me.actual_name}就这样也顺势坐在了沙发上，正视着${chara_talk.name}的双眼。`,
    );
    await chara_talk.say_and_wait(
      `嗯——既然是${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的要求的话。啊，说起来上次有一个看起来很消沉的孩子呢。`,
    );
    await chara_talk.say_and_wait(
      `虽然只是在选拔赛上失利了，哭啼啼的来找我倾诉。在认真听完她的讲诉后，虽然只是分享了一些我自己跑步时的心得，不过她听得很认真的样子。`,
    );
    await chara_talk.say_and_wait(
      `对于某些微妙的地方也是提出了自己的想法，笔记都记了满满一页，拜此所赐，我也收获了不少呢。`,
    );
    await chara_talk.say_and_wait(
      `在离开之前郑重的向我道谢，听说之后也是顺利与训练员签约了♪`,
    );
    await chara_talk.say_and_wait(
      `每次回想起来，我都觉得心情会变得非常愉悦呢⭐`,
    );
    await me.say_and_wait(`真是不错的经历啊。`);
    await chara_talk.say_and_wait(`我也是这么觉得的♪`);
    await chara_talk.say_and_wait(
      `说起来，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }有收到巧克力吗？`,
    );
    await era.printAndWait(`丸善斯基将目光投向了${me.actual_name}的办公桌。`);
    await me.say_and_wait(
      `很遗憾，虽然以前在团队的时候还会有马娘送给我巧克力，不过自从离开团队作为独立训练员努力后，义理巧克力也看不到了。`,
    );
    await chara_talk.say_and_wait(`唔，这可真是遗憾啊。`);
    await chara_talk.say_and_wait(`......嗯`);
    await chara_talk.say_and_wait(`既然这样的话，那我们一起去挑巧克力吧♪`);
    await era.printAndWait(
      `下定了决心的${chara_talk.name}的耳朵刷地一下竖了起来，两眼发亮的看向了${me.actual_name}。`,
    );
    await chara_talk.say_and_wait(`事不宜迟，现在就出发吧！`);
    await me.say_and_wait(`还是算了吧。`, true);
    await era.printAndWait(
      `虽然想这么说出口，不过看着${chara_talk.name}认真考虑店铺的样子。${me.actual_name}想了想最后还是闭上了嘴。`,
    );
    await me.say_and_wait(`如果只是这样出去的话，应该也没关系吧。`, true);
    era.drawLine();
    await chara_talk.say_and_wait(
      `容我介绍一下，这边的这位是我的朋友兼爱车，小塔！`,
    );
    era.printButton(`小塔吗？很高兴认识你！`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}坐在副驾驶上吧。`,
    );
    await chara_talk.say_and_wait(
      `小塔的话也会因为能遇到${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}这样的新朋友感到高兴的。`,
    );
    await me.say_and_wait(`不妙，第一次坐跑车有点兴奋啊。`, true);
    await chara_talk.say_and_wait(`呼呼，小塔似乎也感到很高兴的样子呢♪`);
    await chara_talk.say_and_wait(`那么，Let‘s go！`);
    await me.say_and_wait(`哎？速度是不是有点快啊啊啊啊啊啊啊`);
    era.drawLine();
    await chara_talk.say_and_wait(
      `呼——久违的大闹了一场之后，真是有点欲罢不能的小兴奋呢！${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }也感受到了吗......${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }？`,
    );
    era.printButton(`非常抱歉我突然想起还有有事情要去处理`, 1);
    await era.input();
    await era.printAndWait(
      `连回应的勇气都已经丧失的一干二净，夹着尾巴逃跑的${me.actual_name}像极了被马娘追赶着的胡萝卜。`,
    );
    await chara_talk.say_and_wait(
      `唔，是不是刺激感太强了啊。下次还是开慢一点吧`,
    );
    await era.printAndWait(`被留在原地的丸善斯基一个人在自言自语。`);
  } else if (edu_weeks === 24) {
    await print_event_name('一见如故', chara_talk);
    await me.say_and_wait(`今天的训练就到这里为止了,辛苦了。`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}也是，辛苦了。`,
    );
    await era.printAndWait(
      `丸善斯基接过从${me.actual_name}手中的毛巾，将额头之上的汗水略微擦拭便交换给了你。`,
    );
    await me.say_and_wait(
      `按照这样的节奏继续前进的话，之后的朝日杯也有优胜的希望了。`,
    );
    await chara_talk.say_and_wait(
      `我也有点期待之后的比赛呢，不知道在G1级的比赛中又会有什么样的盛况出现呢。`,
    );
    await me.say_and_wait(
      `不过最重要的一点果然还是，${chara_talk.name}觉得奔跑快乐吗？`,
    );
    await era.printAndWait(
      `将毛巾重新拧干之后，从旁边的背包之中取出备用的毛巾，仔细的擦拭着${chara_talk.get_uma_sex_title()}奔跑时凌乱的长发。`,
    );
    await chara_talk.say_and_wait(
      `如果不拿发卡固定住散乱的头发的话在奔跑的时候打到眼睛也是很痛的事情呢。`,
    );
    await chara_talk.say_and_wait(
      `果然还是换个发型转换一下心情比较好吧，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}觉得呢？`,
    );
    await me.say_and_wait(`我也这么觉得。`);
    await me.say_and_wait(
      `如果把头发扎起来作成长马尾牢牢固定住的话，也不会影响到奔跑吧。`,
    );
    await me.say_and_wait(
      `而且这样的话，能让大家看到丸善斯基不同的一面，也是不错的选择呢。`,
    );
    await chara_talk.say_and_wait(
      `嗯——到底应该怎么样才好呢？虽然${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的建议也不错，不过`,
    );
    await chara_talk.say_and_wait(`啊，好痛。`);
    await me.say_and_wait(`抱歉，这部分的头发缠在一起了。`);
    await chara_talk.say_and_wait(`长发果然还是有些困扰呢。`);
    await chara_talk.say_and_wait(
      `那么，为了转换心情的话，今天也和小塔一起去享受海风吧♪`,
    );
    await chara_talk.say_and_wait(`训练员君，可以送我到门口吗？`);
    era.printButton(`乐意为你效劳`, 1);
    await era.input();
    era.drawLine();
    await chara_talk.say_and_wait(
      `那么${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，明天再见~`,
    );
    await era.printAndWait(
      `伴随着引擎的发动声响起,${chara_talk.name}的背影消失在了视野的角落之中。`,
    );
    await era.printAndWait(
      `正准备回到训练室的${me.actual_name}感受到了手机的震动。`,
    );
    await me.say_and_wait(`这个时候发消息的话，也只有这位了吧。`, true);
    await me.say_and_wait(`接下来该去赴约了`);
    await era.printAndWait(`看了一眼他发送的地址,${me.name}快步走向了商店街`);
    era.drawLine({ content: '居酒屋内' });
    await say_by_passer_by(`浄风幸`, `干杯！`);
    era.printButton(`干杯!`, 1);
    await era.input();
    await say_by_passer_by(
      `浄风幸`,
      `果然还是喝酒才能把那种烦心事统统甩开啊！`,
    );
    era.printButton(`说起来的话，你的担当呢？`, 1);
    await era.input();
    await say_by_passer_by(`浄风幸`, `......`);
    await say_by_passer_by(`浄风幸`, `喂,干嘛说这么扫兴的话啊！`);
    await say_by_passer_by(
      `浄风幸`,
      `这可是人生重要的三年啊,不能找个普通的${chara_talk.get_uma_sex_title()}就可以草草了事的！`,
    );
    era.printButton(
      `不赶快找到担当的话,小心被金发小${
        era.get('cflag:4:性别') - 1 ? '萝莉' : '正太'
      }开除了`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `正打算回呛${me.name}的浄风幸似乎想起了什么,神秘兮兮的靠近了${me.name}`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `${me.name}听说过这所特雷森学院的都市传说吗？`,
    );
    await me.say_and_wait(`有这么夸张吗要靠这么近`, true);
    era.printButton(`说来听听`, 1);
    await era.input();
    await say_by_passer_by(`浄风幸`, `那${me.name}可要听好了。`);
    await say_by_passer_by(
      `浄风幸`,
      `为了寻找合适的担当,我回到了之前作为助理训练员干过一段时间的团队训练室门口。`,
    );
    await say_by_passer_by(`浄风幸`, `正打算敲门的时候,听到里面传来对话。`);
    await say_by_passer_by(
      `新人训练员A`,
      `喂，${me.name}听说了吗?有个训练员因为多次未入着然后下落不明了`,
    );
    await say_by_passer_by(`新人训练员B`, `真的假的?特雷森还会发生这种事?`);
    await say_by_passer_by(
      `新人训练员A`,
      `那可不,我听同宿舍的室友说,有天他烟瘾犯了又不好意思在训练室抽烟,所以找了个偏僻的角落`,
    );
    await say_by_passer_by(
      `新人训练员A`,
      `正准备打火的时候,突然有只手从背后向他搭话`,
    );
    await say_by_passer_by(`新人训练员B`, `卧槽怕不是白天遇鬼了`);
    await say_by_passer_by(
      `新人训练员A`,
      `那家伙被吓得不轻，后面传来的却是${chara_talk.get_teen_sex_title}的声音`,
    );
    await say_by_passer_by(`新人训练员B`, `说了啥`);
    await say_by_passer_by(`新人训练员A`, `你真的想知道吗？`);
    await say_by_passer_by(`新人训练员B`, `有什么话快说！别磨磨唧唧的。`);
    await say_by_passer_by(`新人训练员A`, `兄弟借个火`);
    await say_by_passer_by(
      `新人训练员B`,
      `这是遇到不良${chara_talk.get_uma_sex_title()}了?`,
    );
    await say_by_passer_by(
      `新人训练员A`,
      `那家伙心里肯定想得是老子好歹也是为人师表,虽然打不过，不过不管怎么样也得教训下这帮不良`,
    );
    await say_by_passer_by(
      `新人训练员A`,
      `然后他转过头正准备训斥的时候,突然有种好熟悉的感觉。`,
    );
    await say_by_passer_by(`新人训练员A`, `仔细一看好像就是那位失踪的同事`);
    await say_by_passer_by(`新人训练员A`, `仔细一看好像就是那位失踪的同事。`);
    await say_by_passer_by(`新人训练员B`, `卧槽`);
    await say_by_passer_by(
      `新人训练员A`,
      `当时一股寒意从天灵盖一直穿到脚底,吓得他没命的跑,所幸那妖怪也没有追来。`,
    );
    await say_by_passer_by(
      `新人训练员A`,
      `死里逃生的他把这件事告诉了我,我现在告诉${me.name},这件事不要告诉别人。`,
    );
    await say_by_passer_by(
      `新人训练员B`,
      `这特雷森学院真是吓人,我还是赶快辞职算了。`,
    );
    await era.printAndWait(
      `听着浄风幸绘声绘色的讲述,${me.name}深感这酒比想象之中还要美味。`,
    );
    era.printButton(`理事长和手纲小姐不知道这件事情吗?`, 1);
    await era.input();
    await say_by_passer_by(`浄风幸`, `.....就是因为不知道才是都市传说啊。`);
    await say_by_passer_by(
      `浄风幸`,
      `以前在训练员学校的时候不是还有学校的八大不可思议传说吗？`,
    );
    await say_by_passer_by(`浄风幸`, `服务员再来一杯。`);
    era.drawLine({ content: '酒过三巡之后' });
    await say_by_passer_by(
      `浄风幸`,
      `说起来，那位皇帝一直都在关注着丸善斯基的样子。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `不过也难怪，发生了那件事之后，两人之间发生摩擦才是正常的事情吧。`,
    );
    era.printButton(`唔，什么事情？`, 1);
    await era.input();
    await say_by_passer_by(
      `浄风幸`,
      `诶？${chara_talk.name}没有告诉你吗？她与皇帝之间因为信念不同的缘故发生的摩擦。`,
    );
    await me.say_and_wait(`可以给我讲讲看吗？`);
    await say_by_passer_by(
      `浄风幸`,
      `这不是在训练员学校就该知道的常识吗？日本赛马界一直以来的愿望都是夺得凯旋门的桂冠。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然前辈训练员和马娘们一直都朝着这方面努力，但是`,
    );
    await era.printAndWait(`说着又是一瓶下肚。`);
    await say_by_passer_by(`浄风幸`, `直到皇帝出现之前，全都失败了。`);
    await me.say_and_wait(`说起皇帝的话，只能是鲁铎家的那位吧。`);
    await say_by_passer_by(
      `浄风幸`,
      `不如说在那么多场胜利的映衬下，即使不怎么关心赛马的人多少也会听说过吧。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `原本计划作为日本赛马娘的代表前往巴黎参加凯旋门赏，却在关键时刻因为腿部受伤严重被迫放弃。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然也是出于对皇帝身体的考虑，但紧紧盯着皇帝的粉丝们可不好交代啊。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `作为风暴中心的本人来说，又是怎么想的呢？`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `听说当时在学生会办公室爆发了一次激烈的争吵，不过具体恐怕只有在场的两人才知道了。`,
    );
    await me.say_and_wait(`也许${chara_talk.name}也有自己的考虑吧。`);
    await say_by_passer_by(`浄风幸`, `或许吧。服务员`);
    await era.printAndWait(
      `他正准备招手的时候不小心碰到了路过${chara_talk.get_uma_sex_title()}的手臂`,
    );
    await say_by_passer_by(`浄风幸`, `不好意思。`);
    await say_by_passer_by(`${chara_talk.get_uma_sex_title()}`, `不好意思。`);
    await era.printAndWait(
      `两人同时低头道歉,仔细一看的话${chara_talk.get_uma_sex_title()}似乎还穿着特雷森学院的制服`,
    );
    await say_by_passer_by(`${chara_talk.get_uma_sex_title()}`, `你是？`);
    await me.say_and_wait(`之前遇到的那个人！`);
    await era.printAndWait(
      `之前在${chara_talk.name}出道战上见过面的${chara_talk.get_uma_sex_title()}`,
    );
    await me.say_and_wait(
      `这么说坐在那里的几名${chara_talk.get_uma_sex_title()}也都是特雷森学院的学生吗`,
      true,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `失礼了,同伴们还在等着我。`,
    );
    await era.printAndWait(`这本应该吐槽一句的浄风幸却一副略有所思的样子`);
    await say_by_passer_by(
      `浄风幸`,
      `${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的腿似乎很擅长跑中距离和长距离。`,
    );
    await say_by_passer_by(`浄风幸`, `说不定是个好苗子。`);
    await me.say_and_wait(`这么优秀的话应该已经有训练员了`);
    await say_by_passer_by(`浄风幸`, `不试试看怎么知道呢。`);
    await say_by_passer_by(
      `浄风幸`,
      `正好我也烦恼着合适的人选，,说不定运气正好对方也在苦恼训练员呢！`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `说起来桐生院家的大小姐去年也来当训练员了`,
    );
    await say_by_passer_by(`浄风幸`, `说不定明年会看到一颗新星冉冉升起`);
    await say_by_passer_by(`浄风幸`, `时间也差不多了,我去结账。`);
    await say_by_passer_by(`浄风幸`, `下次再一起喝酒吧。`);
    await me.say_and_wait(`下一次我来请客`);
    await me.say_and_wait(`......丸善斯基`, true);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) || wait_flag;
  } else if (edu_weeks === 30) {
    chara19_talk.name = '皇帝';
    await print_event_name('三女神的孩子们', chara_talk);
    await era.printAndWait(`中庭 三女神像前`);
    await era.printAndWait(
      `远离终日吵吵闹闹的草场与教学楼，此处是马娘们心灵寄托的圣地。`,
    );
    await era.printAndWait(
      `此处供奉着三女神的神像，其名分别为达利阿拉伯，高多芬阿拉伯以及拜耶尔阿拉伯。`,
    );
    await era.printAndWait(`清澈的水流顺着女神们托着的水瓶汇入池中。`);
    await era.printAndWait(`而此处，又迎来了新的客人。`);
    await chara19_talk.say_and_wait(`......`);
    await era.printAndWait(`皇帝凝视着三女神像。`);
    await chara19_talk.say_and_wait(`还没来吗？`, true);
    await era.printAndWait(
      `虽然以私人的名义邀请了最近看好的马娘前来，不过对方态度却依然暧昧。`,
    );
    await era.printAndWait(
      `是出于对皇帝的威压而恐惧吗，也罢，这样懦弱的马娘不值得托付背后。`,
    );
    await era.printAndWait(`在我等所创造的伊甸园里自由的活下去吧。`);
    await chara19_talk.say_and_wait(`那么，也差不多该回去了`);
    await say_by_passer_by(
      `浄风幸`,
      `没想到忙碌的皇帝殿下居然会来到这里散心。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `作为一般小市民来说真是幸运到几乎要折寿的程度了啊。`,
    );
    await chara19_talk.say_and_wait(`......你也是在等待着某人吗？`);
    await say_by_passer_by(
      `浄风幸`,
      `既然来到了这里，那么您也应该知道我等待着的是谁了吧。`,
    );
    await chara19_talk.say_and_wait(`既然如此的话......`);
    await era.printAndWait(`皇帝的话语被朝着中庭前来的脚步声所打断。`);
    era.drawLine();
    era.printButton(`呃，我是不是来错地方了。`, 1);
    await era.input();
    await me.say_and_wait(`难道他们认识吗？`, true);
    await era.printAndWait(
      `虽然只是一时的心血来潮，但却意外误入了秘密谈话的场合。`,
    );
    await era.printAndWait(
      `不知如何继续话题而闭上了嘴，耳朵传来的只有从女神像所托举的瓶中之水顺流而下与水池碰撞飞溅之声。`,
    );
    await say_by_passer_by(`浄风幸`, `......不，只是意外撞到了一起。`);
    await era.printAndWait(
      `友人打破了这份令人难受的沉默氛围，皇帝则收回了目光重新看向了女神像。`,
    );
    await me.say_and_wait(`矢口否认的他现在更有嫌疑了啊。`, true);
    era.printButton(`这里还是找机会离开吧`, 1);
    await era.input();
    await me.say_and_wait(`所以。`);
    await say_by_passer_by(`浄风幸`, `说起来像这样正视着看女神像还是第一次。`);
    await say_by_passer_by(
      `浄风幸`,
      `虽然小时候被父母带着到神社参拜的时候有幸见过神明大人。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然已经不记得参拜时到底经历了什么，不过只有那个温柔的声音一直记在了心里。`,
    );
    await me.say_and_wait(`所以那份声音一直指引着你吗？`);
    await say_by_passer_by(
      `浄风幸`,
      `是，那份怀念的，温柔的声音，一直鼓舞着我。`,
    );
    await era.printAndWait(
      `很久以前，自己还是孩子的时候，独自一人来到神社时，好像也经历过这样的事情。`,
    );
    await era.printAndWait(
      `凝视着三女神的雕像，忽略掉周围的声音，让自己沉浸在回忆之中。`,
    );
    await era.printAndWait(
      `与朋友玩捉迷藏，为了躲开抓捕者，特意躲在了偏僻的角落里。`,
    );
    await era.printAndWait(`然后在等待的过程之中，不小心就这样睡着了。`);
    await era.printAndWait(`于是就这样遇到了三女神大人。`);
    await era.printAndWait(
      `美丽的红色长发让人想起燃烧的火焰，温柔的她尝试安抚惊慌失措的${me.actual_name}`,
    );
    await era.printAndWait(
      `虽然已经不记得当时安慰的话语了，但那份温柔的感触像是写在了永不褪色的相簿之中的文字一样，被${me.actual_name}铭记着。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `我对您毅然踏上这条注定充满荆棘的道路致敬。`,
    );
    await say_by_passer_by(`浄风幸`, `抱歉，我不认可您的做法。`);
    await chara19_talk.say_and_wait(
      `吾不需要认可，也无需赞同，所谓王者既是身先士卒。`,
    );
    await era.printAndWait(
      `嘈杂的声音打断了你的思绪，双腿传来的酥麻感拖着你的意识回到了现实之中。`,
    );
    await me.say_and_wait(`哈~啊。`);
    await era.printAndWait(
      `忍不住打了一个呵欠，回味着这份温暖的余韵，将视线从女神像移向了中庭的另一边。`,
    );
    await era.printAndWait(`似乎是刻意远离了${me.actual_name}谈论着什么。`);
    await me.say_and_wait(`正好谁也不在，就这样悄悄。`, true);
    await chara_talk.say_and_wait(`${
      era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
    }？后辈们送了一些胡萝卜过来，今天的话。
    `);
    await era.printAndWait(`丸善斯基堵住了离开中庭最近的道路，而且。`);
    await chara19_talk.say_and_wait(`丸善斯基，别来无恙。`);
    await chara_talk.say_and_wait(`露娜今天看上去也很精神的样子呢。`);
    await chara_talk.say_and_wait(`后辈们送了我一点胡萝卜，露娜也来尝尝看吧。`);
    await chara19_talk.say_and_wait(`不用了。`);
    await chara_talk.say_and_wait(`是吗？真是可惜呢。`);
    await chara19_talk.say_and_wait(`之后可以拜托你送一点过来吗？`);
    await chara_talk.say_and_wait(`当然可以！`);
    await chara_talk.say_and_wait(
      `为了马娘们的幸福拼命努力着的露娜，我觉得很厉害哦。`,
    );
    await chara_talk.say_and_wait(
      `作为挑战者一路努力过来，在赛场上留下了皇帝的威名。`,
    );
    await chara_talk.say_and_wait(
      `像这样不断将没有马娘能做到的预言打破，作为人生来说也是一种幸福吧。`,
    );
    await chara19_talk.say_and_wait(`那么丸善斯基觉得幸福吗？`);
    await chara_talk.say_and_wait(
      `如果说幸福的话，像这样在赛场上为可爱的后辈们留下追逐的希望，不也是很幸福的事情吗？`,
    );
    await chara_talk.say_and_wait(
      `在草场之上自由的奔跑，听着后辈们的苦恼并提供建议，我觉得是不粗的选择哦？`,
    );
    await chara19_talk.say_and_wait(
      `马娘们的期待可是比想象之中还要沉重的东西呢。`,
    );
    await chara19_talk.say_and_wait(
      `若是中途便将粉色的泡泡戳破的话还好，如果一直做着粉红色的梦的话。`,
    );
    await chara19_talk.say_and_wait(`总有一天，会遇到自己无法处理的事情。`);
    await chara19_talk.say_and_wait(
      `到那时的话，丸善斯基，我期待着你采取什么方式，怎么跨越这道障碍。`,
    );
    await era.printAndWait(`像是意识到了什么，丸善斯基罕见的沉默了。`);
    await chara19_talk.say_and_wait(
      `虽然还想多聊几句，不过办公室还有积攒的工作尚未结束，失礼了。`,
    );
    await era.printAndWait(`说罢，皇帝离开了中庭。`);
    await chara_talk.say_and_wait(`......尽管如此，我也知道的。`);
    await chara_talk.say_and_wait(
      `......抱歉，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，我想起一点事情。`,
    );
    await era.printAndWait(`丸善斯基露出了忧郁的表情离开了中庭。`);
    await me.say_and_wait(`于是谁也不在了吗？`);
    await say_by_passer_by(
      `马娘`,
      `实在非常抱歉不小心看错时间来迟了，还请皇帝陛下？`,
    );
    await era.printAndWait(
      `像是反驳${me.actual_name}的样子，少女气喘吁吁的来到了中庭。`,
    );
    await me.say_and_wait(`抱歉，皇帝已经离开了。`);
    await say_by_passer_by(`马娘`, `诶？`);
    await say_by_passer_by(`马娘`, `......果然是这样吗。`);
    await say_by_passer_by(
      `马娘`,
      `不管怎样，总之，丸善斯基的训练员${me.get_adult_sex_title()}，非常感谢。`,
    );
    await say_by_passer_by(`马娘`, `也许那个奇怪的训练员说过的话是对的。`);
    await era.printAndWait(`气喘吁吁的马娘垂头丧气的离开了中庭。`);
    await me.say_and_wait(`丸善斯基，似乎有什么心事的样子，找机会聊天吧。`);
    await era.printAndWait(`${me.actual_name}离开了中庭。`);
    await era.printAndWait(`于是旅人们怀着不同的心思为了不同的目的前进。`);
    await era.printAndWait(`三女神默默包容了一切。`);
  } else if (edu_weeks === 34) {
    await print_event_name('礼物', chara_talk);
    await era.printAndWait(`某天,当${me.name}正在办公室整理文件的时候。`);
    await era.printAndWait(`咚咚咚`);
    era.printButton(`请进`, 1);
    await era.input();
    await say_by_passer_by_and_wait(`马娘`, `打扰了。`);
    await era.printAndWait(
      `随着门把手的扭转，看上去像是高中部的马娘走了进来。`,
    );
    await say_by_passer_by_and_wait(`马娘`, `下午好，训练员先生。`);
    era.printButton(`下午好`, 1);
    await era.input();
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `虽然之前在中庭匆匆见面，不过像这样正式见面还是第一次。`,
    );
    //佩斯舞台 丸善斯基口上自设路人马娘
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `我叫佩斯舞台(本口上自设原创马娘)，是特雷森学院随处可见的普通马娘之中的一员`,
    );
    await say_by_passer_by(
      `佩斯舞台`,
      `希望能像丸善前辈一样在赛场上一路胜利。`,
    );
    await say_by_passer_by_and_wait(`佩斯舞台`, `平时的话直接叫我舞台就可以了`);
    era.printButton(`请多指教，佩斯舞台`, 1);
    await era.input();
    await era.printAndWait(`两人的手握在了一起。\n`);
    era.printButton(
      `这边有咖啡......不，还是算了。红茶和椰子汁喜欢喝哪种？`,
      1,
    );
    await era.input();
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `非常感谢，不过我只是为了送礼物过来的。`,
    );
    await era.printAndWait(
      `${chara_talk.sex_code - 1 ? '她' : '他'}从口袋中掏出了一个小盒子`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `像我们这样的普通马娘，能够被训练员看重，在职业生涯中能够G3胜利已经是非常厉害的事情了。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `大家都只是朝着入着为目标拼命努力。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `尽管如此，能够入着的马娘也是屈指可数，大部分赛马娘都只是在出道战胜利后，就这样一场未胜结束了三年的生涯。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `有的甚至在毕业时，也没遇到能签订专属契约的训练员`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `丸善前辈不关心这些，只是一直鼓励着我们的前进。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `在我们遇到问题的时候，在旁边指点着我们。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `所以，我们一直都很感激丸善前辈。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `所以说，我和朋友们一起制作了这份礼物，想要送给丸善前辈。`,
    );
    era.printButton(`我觉得丸善斯基一定会很高兴的，谢谢你们`, 1);
    await era.input();
    await me.say_and_wait(`从舞台的手上将带有蝴蝶结装饰的小盒子收了下来。`);
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `谢谢你，训练员${me.get_adult_sex_title()}。`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `在之后的选拔赛中，一定要让所有人都大吃一惊才行！`,
    );
    await say_by_passer_by_and_wait(
      `佩斯舞台`,
      `再见了，丸善斯基的训练员先生！`,
    );
    await era.printAndWait(
      `鞠躬之后,${
        chara_talk.sex_code - 1 ? '她' : '他'
      }快步走向了门口探头探脑的同伴身旁`,
    );
    await me.say_and_wait(`希望她接下来能够遇到合适的训练员`, true);
    await era.printAndWait(`轻轻关上大门后,${me.name}打开了小盒子。`);
    await era.printAndWait(`里面放着的是由水晶制作的手链。`);
    await me.say_and_wait(
      `等${chara_talk.name}回来后亲手交给${
        chara_talk.sex_code - 1 ? '她' : '他'
      }吧`,
      true,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47) {
    await print_event_name('圣诞节', chara_talk);
    await chara_talk.say_and_wait(`Merry Christmas！`);
    await era.printAndWait(
      `穿着厚厚衣服的${chara_talk.name}出现在了训练室中。`,
    );
    era.printButton(`圣诞节快乐!要取暖的话，这里放了围炉和橘子。`, 1);
    await era.input();
    await era.printAndWait(
      `揉了揉疲惫的眼睛，借着和${chara_talk.name}对话的机会稍微放空大脑。`,
    );
    await chara_talk.say_and_wait(`外面比想象中还要寒冷呢。`);
    await era.printAndWait(
      `将身体交给了柔软的沙发，${chara_talk.name}小心的拨开了橘子皮将果肉放入了口中。`,
    );
    await me.say_and_wait(
      `今天的气温已经到零下1°了，天气预报说今天晚上还会下雪。`,
    );
    await era.printAndWait(
      `'下雪吗'这么嘟哝着的${chara_talk.name}又拨开了一个橘子。`,
    );
    await era.printAndWait(
      `一时之间训练室似乎恢复了寂静，只有沙沙的翻阅纸张声音回荡在训练室之中。`,
    );
    await era.printAndWait(
      `将身体深深埋入沙发的怀抱之中，重新翻开了本周时尚杂志的${chara_talk.name}在被发出橙色光的暖炉围绕之下露出了愉悦的表情。`,
    );
    era.drawLine();
    await me.say_and_wait(`这就是最后一份了。`, true);
    await era.printAndWait(`将文件整理到文件夹之中，活动着酸麻的双腿。`);
    await chara_talk.say_and_wait(
      `辛苦了${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，接下来有什么计划吗？`,
    );
    await era.printAndWait(
      `将放松下来的肌肉一瞬间绷紧，重新恢复到平时状态的${chara_talk.name}看着站起来的${me.actual_name}。`,
    );
    await me.say_and_wait(`计划吗？`);
    await era.printAndWait(
      `以前圣诞的时候都是一个人在训练室整理心得笔记的${me.actual_name}。`,
    );
    await me.say_and_wait(`嗯——说的对，`);
    await chara_talk.say_and_wait(`一起出去庆祝吧？`);
    await me.say_and_wait(`不过还是我打算一个人`, true);
    await era.printAndWait(
      `看着露出了期待表情的${chara_talk.name}，${me.actual_name}后半部分硬生生咽了回去。`,
    );
    await chara_talk.say_and_wait(`现在就出发！`);
    await era.printAndWait(
      `在${chara_talk.name}的热情邀请之下，两人达成了一致。`,
    );
    era.drawLine();
    await era.printAndWait(`在震动的马达声之中，小塔发动了。`);
    await era.printAndWait(
      `黑沉沉的天空，不时吹来的阵阵寒风无情的收割着来往的生灵。`,
    );
    await me.say_and_wait(`阿嚏！`);
    await era.printAndWait(`劲风顺着衣服与肌肤的缝隙之中钻了进去，。`);
    await me.say_and_wait(`好冷啊，但是不久之后还会下雪。`);
    await era.printAndWait(`不禁对之后的行程感到绝望。`);
    await chara_talk.say_and_wait(
      `......小特她们成长的比预想之中还要迅速呢，看到后辈们这么努力的样子，连姐姐我也有些兴奋起来了呢。`,
    );
    await era.printAndWait(
      `据说${chara_talk.get_uma_sex_title()}的体温要比正常人高的多，要不要靠近她取暖？`,
    );
    await me.say_and_wait(`出门应该带条围巾的。`);
    await chara_talk.say_and_wait(
      `......百货大厦那边推出了圣诞主题的烛光晚餐，一起去尝尝看吧？`,
    );
    await era.printAndWait(
      `呼啸的寒风声中，${chara_talk.name}的话语似乎远在天边。`,
    );
    await chara_talk.say_and_wait(`......比起这个的话，我还是认为，啊，到了！`);
    await era.printAndWait(`不远处就是百货大厦了。`);
    era.drawLine();
    await era.printAndWait([
      chara_talk.get_colored_name(),
      '/',
      me.get_colored_name(),
      '「',
      { content: '干', color: chara_talk.color },
      '杯！」',
    ]);
    await era.printAndWait(
      `在${chara_talk.name}口中的特价餐厅之中，两人举杯庆祝着节日的到来。`,
    );
    await chara_talk.say_and_wait(
      `真可惜，现在的我还不能喝酒......不过，果汁的味道也不错哦♪`,
    );
    era.printButton(`过不了多久，${chara_talk.name}也能喝酒了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `到那一天时，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }要陪我一起喝到通宵才行呢。`,
    );
    await era.printAndWait(
      `一朵雪花从窗外的天空中落下，然后无数的雪花跟随着它的脚步落到了地面之上。`,
    );
    await me.say_and_wait(`为了那一天的到来，接下来的训练也要努力才行！`);
    await era.printAndWait(
      `冰凉而又美丽的它们像是自然界的精灵一样，随性地从空中落入凡间游玩。`,
    );
    await chara_talk.say_and_wait(`呵呵♪啊，下雪了。`);
    await era.printAndWait(
      `似乎回忆起了什么，${chara_talk.name}盯着外面的雪花若有所思。`,
    );
    await me.say_and_wait(`${chara_talk.name}喜欢雪吗？`);
    await era.printAndWait(
      `摇晃着早已喝尽的玻璃杯，少女的思绪似乎回到了遥远的过去。`,
    );
    await chara_talk.say_and_wait(`......啊！抱歉，不小心走神了呢。`);
    await era.printAndWait(
      `似乎才注意到你的存在一样，慌慌张张回应着你的${chara_talk.name}露出了可爱的破绽。`,
    );
    era.printButton(`不，没什么`, 1);
    era.printButton(`${chara_talk.name}喜欢雪吗？`, 2, { disabled: true });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `再问同样的问题，对${chara_talk.name}来说也会很尴尬吧。`,
      );
      await era.printAndWait(`玩家名决定用其他的话题应付过去。`);
      await era.printAndWait(`晚餐就在这样的良好气氛之中结束了。`);
    } else {
      await chara_talk.say_and_wait(`欸？雪花吗？`);
      await era.printAndWait(
        `似乎苦恼了一会，不过${chara_talk.name}还是说了出来。`,
      );
      await chara_talk.say_and_wait(`其实很喜欢哦？`);
      await chara_talk.say_and_wait(
        `不如说希望能在早起的时候拉开窗帘就看到雪花落在窗户上的景象呢！`,
      );
      await me.say_and_wait(`为什么露出这么惆怅的神情呢？`);
      await chara_talk.say_and_wait(
        `${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }不也是这样的吗？`,
      );
      await era.printAndWait(`没有接过问题，反而抛出了另一个问句。`);
      await chara_talk.say_and_wait(
        `露出了一副苦恼的样子，像是苦苦寻求答案的探索者一样。`,
      );
      await era.printAndWait(
        `重新把握了节奏的${chara_talk.name}露出了玩味的笑容。`,
      );
      await chara_talk.say_and_wait(`不过，答案其实很简单哦？`);
      await me.say_and_wait(`那么答案是？`);
      await chara_talk.say_and_wait(`不·告·诉·你⭐`);
      await me.say_and_wait(`不对，说话太急切反而让她警戒起来了吗。`, true);
      await me.say_and_wait(`只能下次再找机会了。`, true);
      await era.printAndWait(
        `之后又聊了一些有关训练的事情后，愉快的晚餐就这样告一段落了。`,
      );
    }
    era.drawLine({ content: '训练员宿舍门口' });
    await chara_talk.say_and_wait(
      `那么，${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}明天见！`,
    );
    await chara_talk.say_and_wait(
      `啊，差点忘了！${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，这个送给你。`,
    );
    await era.printAndWait(
      `从放的满满当当的后座位拿出了一个精美丝带包装的礼物盒。`,
    );
    await me.say_and_wait(`${chara_talk.name}这个是？`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}明天见哦！`,
    );
    await era.printAndWait(
      `${me.actual_name}的话语被引擎的轰鸣声所盖过，只能抱着盒子看着小塔变成越来越小的一个点。`,
    );
    await me.say_and_wait(`总之，先回去吧。`);
    await era.printAndWait(
      `小心捧着作为${chara_talk.name}心意的礼物盒，慢慢回到了房间之中。`,
    );
    await era.printAndWait(
      `扯下金黄色的丝带，轻轻打开礼物盒的顶端，仿佛之中回到了幼年时收到长辈送的礼物一样。`,
    );
    await era.printAndWait(`一条做工精美的围巾以及`);
    await chara_talk.say_and_wait(
      `抱歉呢，虽然也想给${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }准备更好的，不过现在只有这种牌子了，希望${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }不要介意，圣诞节快乐！`,
    );
    await era.printAndWait(`细腻优美的字迹仿佛是在与本人进行对话。`);
    await me.say_and_wait(`谢谢你，${chara_talk.name}。`);
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('新年的思绪', chara_talk);
    await era.printAndWait(`时间过得飞快，转眼之间又到了新的一年。`);
    await era.printAndWait(
      `与丸善斯基一起经历的酸甜苦辣，如今都化为了美好的回忆。`,
    );
    await era.printAndWait(
      `虽说今天是法定的节假日，不过在训练员宿舍就这么懒散的度过也过于烦闷了。`,
    );
    await era.printAndWait(
      `想着‘随便逛逛吧’，脚步迈向的方向却不知不觉又回到了特雷森。`,
    );
    await me.say_and_wait(`既然来都来了，不如去训练室看看吧`);
    await era.printAndWait(`打定主意后，${me.actual_name}走向了训练室。`);
    era.drawLine({ content: '训练室' });
    await era.printAndWait(
      `如果是平时的训练室，总有种‘又要上班啊’的烦躁感挥之不去。`,
    );
    await era.printAndWait(
      `但如果是休息日带着‘随便看看吧’的心态重新回到了训练室时。`,
    );
    await era.printAndWait(
      `与丸善斯基讨论接下来的训练方针，一起品尝着美味的蛋糕，挤在沙发上全神贯注地看着重赏大赛的录像带。`,
    );
    await era.printAndWait(`一切的一切，都像是发生在昨天的事情一样。`);
    await me.say_and_wait(`时间过得可真快啊。`);
    await era.printAndWait(`望着以往的训练室，却有种格格不入的错觉。`);
    await me.say_and_wait(`太累了吗？`);
    await me.say_and_wait(`好！接下来去天台上吹下风清醒一下吧`, true);
    await me.say_and_wait(
      `......不知道${chara_talk.name}现在在哪里,也许和朋友们一起在哪里聚会吧`,
      true,
    );
    await era.printAndWait(`轻轻关上训练室的大门，为了转换心情走向了天台。`);
    era.drawLine({ content: '天台' });
    await era.printAndWait(
      `很多${chara_talk.get_uma_sex_title()}决定在新年时和同伴或者自己的训练员一起度过,而且利用假期这段时间将去年的烦恼一甩而空`,
    );
    await era.printAndWait(`往日吵吵闹闹的学院现在露出了宁静的一面。`);
    await era.printAndWait(`从天台向下俯瞰,整个特雷森学院都在视线之下`);
    await me.say_and_wait(
      `这个时候大喊一声我是要成为驯服三冠王${chara_talk.get_uma_sex_title()}的男人才符合气氛吧`,
      true,
    );
    await me.say_and_wait(`虽然没有人在这里不过还是太羞耻了`, true);
    await me.say_and_wait(`……`);
    await era.printAndWait(
      `「我要成为配得上${chara_talk.name}的${
        me.sex_code - 1 ? '女人' : '男人'
      }！！！」`,
      {
        align: 'center',
        color: me.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    );
    await era.printAndWait(
      `将训练员的身份啊，大人的矜持啊通通抛在了脑后，凭着气势喊出了连自己都被吓了一跳的声音。`,
    );
    await era.printAndWait(
      `打破了禁忌带来的兴奋感让${me.actual_name}满脸通红。`,
    );
    await me.say_and_wait(`真是畅快啊。`);
    await me.say_and_wait(`趁着现在还没人注意到天台，还是快离开吧。\n`);
    await chara_talk.say_and_wait(
      `哎呀？${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？`,
    );
    await era.printAndWait(`野生的${chara_talk.name}出现了！`);
    await me.say_and_wait(`咦咦咦？${chara_talk.name}怎么会在这里？`, true);
    await me.say_and_wait(`哈哈,人生完蛋了`, true);
    await me.say_and_wait(`找个没人的荒岛就这样度过余生吧。`, true);
    era.printButton(`抱歉，你认错人了。`, 1);
    await era.input();
    era.printButton(`现在的我只是一个路过的普通训练员罢了。`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `......啊啦，这位普通的训练员${me.get_adult_sex_title()}。`,
    );
    await chara_talk.say_and_wait(
      `刚才喊的可真有气势，我在楼梯上都听到了那充满热情的声音。`,
    );
    await chara_talk.say_and_wait(`青春真是美好呢。`);
    await chara_talk.say_and_wait(
      `不过，这种话语果然还是要当着当事人的面好好说出来才可以吧？`,
    );
    await chara_talk.say_and_wait(
      `如果是我家的训练员的话，说不定会带着满腔的感情好好阐述出来吧。`,
    );
    await era.printAndWait(
      `因为强烈的羞耻感而感到浑身发热的${me.actual_name}膝下一软，几乎要摔倒。`,
    );
    await me.say_and_wait(`非常抱歉。`, true);

    await era.printAndWait(`${chara_talk.name}只是静静的仰望着天空。`);
    era.printButton(
      `......不去找小特${chara_talk.sex_code - 1 ? '她' : '他'}们一起去玩吗?`,
      1,
    );
    era.printButton(`可以告诉我你的想法吗？`, 1, { disabled: true });
    await era.input();
    await era.printAndWait(`${chara_talk.name}心情不错的哼着怀旧的曲子。`);
    await me.say_and_wait(`是感觉到寂寞了吗？`, true);
    era.printButton(`这么冷的天气为什么特意来天台呢？`, 1);
    era.printButton(`你到底在想什么？`, 1, { disabled: true });
    await era.input();
    await era.printAndWait(
      `为了得知真实想法的${me.actual_name}顺势就和一起靠在栏杆上聊起来了`,
    );
    await chara_talk.say_and_wait(
      `去年还和小特${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们一起开新年派对的,不过今年说着什么快去陪自己的训练员然后就把我推出来了`,
    );
    era.printButton(
      `小特${chara_talk.sex_code - 1 ? '她' : '他'}们其实很关心${me.name}呢`,
      1,
    );
    await era.input();
    await era.printAndWait(`从${chara_talk.name}身上飘来了芬芳馥郁的气味，`);
    await me.say_and_wait(`是洗发水的味道吗？为什么今天这么香呢`, true);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}也是这么想的吗?${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们可是充满着希望的幼苗呢`,
    );
    await chara_talk.say_and_wait(`总有一天会冲破风与雨的束缚,成为参天大树`);
    await era.printAndWait(
      `与${chara_talk.name}充满期盼的话语相比,${
        chara_talk.sex_code - 1 ? '她' : '他'
      }看着天空的样子充满了思绪。`,
    );
    era.printButton(`${chara_talk.name}不想变成参天大树吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`比起大树的话,我更想化为一阵温柔的风呢。`);
    era.printButton(`风？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }没有注意到天空中自由自在的风吗`,
    );
    await chara_talk.say_and_wait(
      `如果能化为天空中吹拂的风,我也许能在后辈们苦恼的时候`,
    );
    await chara_talk.say_and_wait(
      `就差一点就能成功的时候，在叹息的时候给予${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们鼓励了`,
    );
    await me.say_and_wait(`${chara_talk.name}现在已经做的很好了`);
    await me.say_and_wait(`现在就尽情享受新年的快乐吧`);
    await chara_talk.say_and_wait(`说的也是呢，这样子下去真不像我了呢`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}有什么计划吗？`,
    );
    era.printButton('「今天的话就在草地上练习吧」', 1);
    era.printButton('「一起出去逛街然后把不愉快都一扫而空吧」', 2);
    era.printButton('「今天就在训练室好好休息吧」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await chara_talk.say_and_wait('嗯嗯,在草地上飞驰把烦恼全部甩开吧');
      await chara_talk.say_and_wait(
        `不愧是${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        },真懂我的心呢。`,
      );
      await era.printAndWait(`${chara_talk.name}似乎重新打起了精神`);
      await chara_talk.say_and_wait('OK!那么现在就出发吧');
      await era.printAndWait(
        `${me.get_couple_title()}在草地上训练了一整天然后聚在训练室小小庆祝了一下`,
      );
      wait_flag =
        get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], 0) || wait_flag;
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        `诶？${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}是想和${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }我约会吗?`,
      );
      //好感+5 爱慕+3
      await chara_talk.say_and_wait('这样的话不好好计划可不行呢');
      await chara_talk.say_and_wait('那么就开着小塔');
      era.printButton(`既然是约会的话不如一起走过去吧`, 1);
      await era.input();
      await chara_talk.say_and_wait(`嗯——`);
      era.printButton(`既然是情侣的话一起走过去更加有氛围吧`, 1);
      await era.input();
      await chara_talk.say_and_wait(
        `既然${
          era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
        }都这么要求了`,
      );
      await chara_talk.say_and_wait(`偶尔散步的话也能体会到不一样的感觉吧⭐`);
      await era.printAndWait(`那么现在就出发`);
      await era.printAndWait(`等回到训练室的时候两人都筋疲力竭的靠在了沙发上`);
      era.println();
      wait_flag =
        get_attr_and_print_in_event(
          4,
          [0, 0, 0, 0, 0],
          0,
          JSON.parse('{"体力":200}'),
        ) || wait_flag;
    } else {
      await chara_talk.say_and_wait(
        `说的也是,这么冷的天还是呆在温暖的训练室里才对吧`,
      );
      era.printButton(`我把放在训练室里的小零食还有橘子都拿出来吧`, 1);
      await era.input();
      await chara_talk.say_and_wait(`呵呵,那我来剥橘子。`);
      await era.printAndWait(`于是这天靠着围炉两人气氛不错的度过了。`);
      era.println();
      wait_flag =
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 20) || wait_flag;
    }
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 5) {
    await print_event_name('春冬之交', chara_talk);
    await era.printAndWait(`训练场`);
    await era.printAndWait(`赛马娘在这里挥洒着汗水，朝着希望的未来前进。`);
    await era.printAndWait(
      `经历了朝日杯的洗礼后，你们将目光放在了皋月赏的前哨战——春季锦标上。`,
    );
    await chara_talk.say_and_wait(
      `按照预定计划，转过第三个弯道后，现在是冲刺的时候了！`,
    );
    await chara_talk.say_and_wait(`就这么一口气将油门踩到底!`);
    await era.printAndWait(
      `对于采取逃马策略的赛马娘,相比于其他跑法的马娘来说，将大部分的注意力都放在了序盘与中盘之上。`,
    );
    await era.printAndWait(
      `大概是考虑到将序盘与中盘确立起来的优势牢牢固定下来，就这样取得优势。`,
    );
    await era.printAndWait(
      `比赛中，多名采取相同策略的逃马，往往会在序盘与中盘之间发生殊死的较量。`,
    );
    await era.printAndWait(
      `就这样将比赛带到了快节奏模式，打乱采取穿插与追比策略马娘的节奏吧。`,
    );
    await era.printAndWait(
      `然而，就上面尚未提到的先马，则会因为逃马之间的战斗无力在终盘保持原有的速度，就这么将温存的体力一口气爆发出来，取得优势。`,
    );
    await era.printAndWait(`螳螂捕蝉黄雀在后吗？`);
    await era.printAndWait(`但是，丸善斯基不是因为选择了逃马策略，而是因为`);
    await me.say_and_wait(
      `不愧是被称为怪物一样的${chara_talk.get_uma_sex_title()}`,
      true,
    );
    await era.printAndWait(
      `因为享受奔跑，而不知不觉之间获得了常人难以企及的速度。`,
    );
    era.printButton(`辛苦了,稍微休息一下吧。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`哈...哈啊......呼~`);
    await era.printAndWait(`周围的草地像是台风过境一样被弄得乱七八糟的。`);
    await chara_talk.say_and_wait(`非常感谢♪`);
    await era.printAndWait(
      `接过了你递过来的毛巾之后，丸善斯基擦拭着额头上的汗水，从湿透的长发传来的香草味钻进了${me.actual_name}的鼻腔之中。`,
    );
    await era.printAndWait(
      `说不定，像这样在奔跑后露出由衷的满足感才是丸善斯基真正的模样。`,
    );
    era.printButton(`好怀念的香味啊。`, 1);
    await era.input();
    await era.printAndWait(
      `一边帮助丸善斯基将湿透的头发用毛巾擦干，一边寻找着话题。`,
    );
    await chara_talk.say_and_wait(`训练员君对香味很感兴趣吗？`);
    await me.say_and_wait(`嗯，很好闻的体香味。`);
    await chara_talk.say_and_wait(
      `呵呵~虽然和体香味很像，不过这其实是香水的味道。`,
    );
    await chara_talk.say_and_wait(`虽然是为了心情变换才选择了这款。`);
    await chara_talk.say_and_wait(`不过从训练员君的反应看来。`);
    await chara_talk.say_and_wait(`似乎很受欢迎的样子。`);
    await chara_talk.say_and_wait(`嗯，看上去姐姐我也一直站在潮流的第一线呢。`);
    await era.printAndWait(`她的心情似乎变得更好了。`);
    await me.say_and_wait(
      `唔，虽然我对潮流的东西也了解不多，不过丸善斯基一直都是相当迷人的角色呢。`,
    );
    await chara_talk.say_and_wait(`就算训练员君这么说，也不会有什么奖励的哦？`);
    era.printButton(`真的不需要`, 1);
    era.printButton(`已经收到了非常美好的回忆了`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`诶——`);
      await chara_talk.say_and_wait(
        `训练员君用这种语气说的话，稍微有点可爱呢~`,
      );
      await era.printAndWait(`丸善斯基轻轻抚摸着你的脑袋。`);
      await chara_talk.say_and_wait(`哼哼哼~果然还是这样的训练员君最可爱了♪`);
    } else {
      await chara_talk.say_and_wait(`欸——`);
      await era.printAndWait(`丸善斯基带着不可思议的表情看着你。`);
      await chara_talk.say_and_wait(
        `训练员......训练员君说这种话可真是太狡猾了。`,
      );
      await chara_talk.say_and_wait(
        `......训练员君是不是对其他孩子也是这副说辞？`,
      );
      await era.printAndWait(
        `像是遇到了什么头疼的事情，丸善斯基直直的盯着你看。`,
      );
      await chara_talk.say_and_wait(
        `如果训练员君变成这样放荡的人，姐姐我也是会伤心的哦？`,
      );
      await me.say_and_wait(`非常抱歉，绝对没有下次了。`);
      await chara_talk.say_and_wait(
        `哈啊，不管怎么样，一定不要对其他的孩子这么说哦，这次的对象是我还好。不，即使是我的话也不要。`,
      );
    }
    await me.say_and_wait(`说起来，丸善斯基。`);
    await me.say_and_wait(`虽然有些突兀，不过有个问题困扰了我很久。`);
    await chara_talk.say_and_wait(`哎呀，训练员君也有向姐姐我请教的时刻吗？`);
    await chara_talk.say_and_wait(`放心吧，我会好好把我知道的部分都告诉你的。`);
    await era.printAndWait(`你将擦过汗水的毛巾挤干水分后叠起来放回了包中。`);
    await me.say_and_wait(`丸善斯基一直都很受后辈们的欢迎呢，所以我在想。`);
    await me.say_and_wait(`也许，我说的是也许，丸善斯基，你`);
    await me.say_and_wait(`丸善斯基的愿望是什么呢？`);
    await chara_talk.say_and_wait(
      `嗯——就像花园里的园丁一样，在布满杂草的土壤之上埋下种子。`,
    );
    await chara_talk.say_and_wait(
      `浇水、松土、然后施肥，不论外界的变化如何，就这么期待着。`,
    );
    await chara_talk.say_and_wait(
      `虽然有时会遇到狂风骤雨、在松土时也会遇到意外难缠的杂草，但是，看着依靠自己顽强毅力破土而出的花朵们。`,
    );
    await chara_talk.say_and_wait(
      `看着美丽的花朵终于绽放的一瞬间，在百感交集之下留下的喜悦泪水，我想，这才是我存在的意义。`,
    );
    await me.say_and_wait(`所以，丸善斯基一直都在默默努力着啊。`);
    await chara_talk.say_and_wait(
      `当然，像这样带着稚嫩的后辈们慢慢前进，等待她们开花结果的时刻到来。`,
    );
    await chara_talk.say_and_wait(`一切的辛苦都将会得到应分的回报。`);
    await era.printAndWait(`没有激动的情感，丸善斯基平静地说出了自己的梦想。`);
    await me.say_and_wait(`......真美啊，丸善斯基。`);
    await me.say_and_wait(`非常感谢，接下来也请多多指教了。`);
    await chara_talk.say_and_wait(`我这边也是，请多多指教了。`);
    await era.printAndWait(
      `虽然冬日的寒冷尚未撤去，但丸善斯基的笑容却令你感到了温暖。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 20) || wait_flag;
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('情人节', chara_talk);
    await era.printAndWait(`今天是情人节啊。`);
    await era.printAndWait(`明明空气中散布着巧克力的香味`);
    await era.printAndWait(`但是一个巧克力都没收到啊。`);
    await era.printAndWait(`呜呼，没人气也该有个限度啊。`);
    await era.printAndWait(`因为受不了学院里甜的发腻的气氛所以干脆出来散步`);
    await say_by_passer_by(`浄风幸`, `呦,这不是${me.actual_name}吗？`);
    await me.say_and_wait(`真巧啊，在这个地方也能碰到你。`);
    await me.say_and_wait(`你也是一个人吗？`);
    await era.printAndWait(
      `看着样子也知道，如果有可爱的马娘早就跑的不见踪影了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `啊哈哈,${
        chara_talk.sex_code - 1 ? '她' : '他'
      }跟我说有惊喜要准备给我所以一大早就跑去看巧克力了`,
    );
    await me.say_and_wait(`所以？`);
    await say_by_passer_by(`浄风幸`, `......咕唔。`);
    await say_by_passer_by(
      `浄风幸`,
      `我在训练室等了好久也没看到人影,所以也跑出来呼吸新鲜空气了`,
    );
    await say_by_passer_by(`浄风幸`, `唔,真是的,连个义理巧克力都没收到。`);
    await say_by_passer_by(`浄风幸`, `明明去年还在团队的时候收到了巧克力的`);
    await say_by_passer_by(`浄风幸`, `嘛，你今天的打算是什么？`);
    await era.printAndWait(`嗯。我也没想好。`);
    await era.printAndWait(`脑海之中突然浮现出了${chara_talk.name}的身影。`);
    await me.say_and_wait(`像风一样自由的人当然是走遍天涯海角了`);
    await say_by_passer_by(
      `浄风幸`,
      `说什么样风一样,不就是漫无目的的四处乱走吗`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `不过，也许像这样四处闲逛说不定会遇到什么有趣的事情。`,
    );
    await say_by_passer_by(`浄风幸`, `那么，现在就出发吧。`);
    await era.printAndWait(`于是两个漫无目的的人开始了四处闲逛。`);
    era.drawLine({ content: '情人旅馆前' });
    await say_by_passer_by(`浄风幸`, `那个好像是我们的前辈吧？`);
    await me.say_and_wait(`说起来好像真的是他啊`);
    await era.printAndWait(`估计是看到了救星一样，前辈向你们眨了眨眼睛。`);
    await say_by_passer_by(`浄风幸`, `是不是在向我们求救啊？`);
    await era.printAndWait(
      `看了看依偎在他旁边的${chara_talk.get_uma_sex_title()}一副吃定的样子，仔细想了想。`,
    );
    await me.say_and_wait(`......没想到这位马娘和训练员的关系真好啊。`);
    await say_by_passer_by(
      `浄风幸`,
      `是啊是啊，今天的空气都充斥着恋爱的酸臭味呢。`,
    );
    await era.printAndWait(
      `无视了之后传来的骚动，就当无事发生走过的两人有说有笑的离开了。`,
    );
    era.drawLine({ content: '巧克力店前' });
    await era.printAndWait(
      `虽然心照不宣的避开了情侣最多的地方，但兜兜转转之后你们还是在巧克力店门口停了下来。`,
    );
    await say_by_passer_by(`浄风幸`, `那边的是作为代理理事长的樫本训练员吗？`);
    await era.printAndWait(
      `樫本理子在两名${chara_talk.get_uma_sex_title()}一前一后的簇拥下挑选着巧克力。`,
    );
    await say_by_passer_by(`浄风幸`, `怎么她今天有空来选巧克力了？`);
    await say_by_passer_by(`浄风幸`, `要进去打个招呼吗？`);
    era.printButton(
      `还是不要打扰${chara_talk.sex_code - 1 ? '她' : '他'}们吧。`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `虽然还在思考的时候，樫本理子已经挑选好了巧克力准备离开了`,
    );
    await era.printAndWait(
      `似乎是准备沿着相反的方向离开，所以${
        chara_talk.sex_code - 1 ? '她' : '他'
      }似乎没看到你们就匆匆离开了`,
    );
    era.drawLine({ content: '过了一段时间后' });
    await era.printAndWait(
      `在逛了这么久后还在有些劳累,所以找了一个位置准备休息。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `呼——总算可以坐下来稍微休息一下了，上次走这么远还是找舞台的时候。`,
    );
    await era.printAndWait(`${me.actual_name}接过他递过来的饮料小抿了一口。`);
    await me.say_and_wait(
      `真是得救了,接下来.....那边是你的担当${chara_talk.get_uma_sex_title()}吗？`,
    );
    await era.printAndWait(
      `你看到似乎很眼熟的一位${chara_talk.get_uma_sex_title()}走出了街对面的店铺`,
    );
    await me.say_and_wait(`是你家的孩子吧`);
    await say_by_passer_by(
      `浄风幸`,
      `嗯......还真是，抱歉失陪了，我要去找我家的孩子了。`,
    );
    await era.printAndWait(`净风幸站了起来朝着街对面走去。`);
    await era.printAndWait(`在街道的座位上，你又稍微休息了一刻钟。`);
    await me.say_and_wait(`接下来又只剩我一个人了吗`, true);
    await me.say_and_wait(`嘛，像这样一个人呆着真是放松啊。`);
    await me.say_and_wait(`接下来是继续前行还是直接返回特雷森呢。`);
    await me.say_and_wait(`自己做决定可真是件困难的事情`);
    await me.say_and_wait(`总之......那边的马娘是？`);
    await era.printAndWait(`看着${chara_talk.name}提着一大袋东西正准备上车`);
    await me.say_and_wait(`${chara_talk.name}！`);
    await era.printAndWait(`错觉吗？刚刚马耳似乎在动的样子。`);
    await era.printAndWait(`虽然尽力向对面跑去，但还是迟了一步。`);
    await me.say_and_wait(`说不定是因为太过敏感被认为是幻听了吧。`);
    await era.printAndWait(
      `因为风啊，数目抖动、呼唤着发音类似人名而导致了幻听。`,
    );
    await era.printAndWait(`总之还是先回趟训练室吧。`);
    era.drawLine({ content: '训练室门口' });
    await era.printAndWait(`${me.name}垂头丧气的回到了训练室`);
    await era.printAndWait(`然而却被从哪里放出的礼炮把${me.name}吓了一跳`);
    await chara_talk.say_and_wait(
      `surprise！${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}`,
    );
    era.printButton('呜啊', 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}似乎在这里等你很久了`);
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},感觉怎么样？`,
    );
    await chara_talk.say_and_wait(
      `比起普通的送巧克力，还是像这样特别庆祝更不错吧？`,
    );
    await era.printAndWait(`办公桌上摆满了各种饮料和小吃`);
    await chara_talk.say_and_wait(
      `嗯,还有这个，${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }请收下`,
    );
    await era.printAndWait(`${chara_talk.name}从身后拿出了包装精美的巧克力`);
    await chara_talk.say_and_wait(
      `因为是第一次尝试做巧克力的缘故，如果不好吃的话一定要说出来哦？，`,
    );
    era.printButton(`谢谢你！丸善斯基。`, 1);
    await era.input();
    await me.say_and_wait(`这是我度过的最棒的情人节了。`);
    await chara_talk.say_and_wait(
      `训练员君喜欢的话当然是最好了，能看到训练员君露出幸福的笑容，总觉得心里也有种不一样的怮动呢。`,
    );
    await era.printAndWait(
      `之后你和${chara_talk.name}一起度过了一个甜蜜的情人节。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) || wait_flag;
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 7) {
    await print_event_name('偶像', chara_talk);
    await era.printAndWait(`训练室`);
    await era.printAndWait(`距离春季锦标还有两个星期。`);
    await era.printAndWait(
      `处理完最后一份文件后，${me.actual_name}放下了手中的笔，长长的呼出了一口气。`,
    );
    await me.say_and_wait(`终于处理完了。`);
    await me.say_and_wait(`但是。`);
    await era.printAndWait(`一直以来都有的一个疑问。`);
    await era.printAndWait(`被死死压制住，不，干脆是不愿意去回忆。`);
    await me.say_and_wait(`丸善斯基。`);
    await era.printAndWait(`园丁。`);
    await me.say_and_wait(`一直习惯于以强者的姿态面临问题。`);
    await era.printAndWait(
      `希望能以教育者的姿态，通过自己的经验尽可能帮助那些可爱的小马娘。`,
    );
    await me.say_and_wait(`但是，作为园丁的道路，不是那么理想的世界。`);
    await say_by_passer_by(`马娘`, `打扰了。`);
    await era.printAndWait(`一位瘦小的马娘走了进来。`);
    await say_by_passer_by(`马娘`, `那个，请问丸善前辈在这里吗？`);
    await me.say_and_wait(
      `丸善斯基有事暂时离开了，你先在这里坐着稍微休息一下吧。`,
    );
    await say_by_passer_by(`马娘`, `这样吗......啊，非常感谢！`);
    await era.printAndWait(`你将一罐胡萝卜汁放在了沙发桌上。`);
    await era.printAndWait(
      `你打开了之前看到一半的，丸善斯基参加朝日杯的录像。`,
    );
    await say_by_passer_by(`马娘`, `诶，这个是丸善前辈的！`);
    await me.say_and_wait(`你也喜欢看录像吗？`);
    await say_by_passer_by(
      `马娘`,
      `嗯！丸善前辈冲线部分的特写，我反复看了五六遍呢！`,
    );
    await say_by_passer_by(
      `马娘`,
      `不如说，通过模仿丸善前辈的摆动方式，说不定我也能顺利在G3上获胜！`,
    );
    await me.say_and_wait(`......原来是这样吗？`);
    await say_by_passer_by(
      `马娘`,
      `诶...嗯。因为本格化的时间比较早，所以初中的时候就作为赛马娘参赛了。`,
    );
    await say_by_passer_by(
      `马娘`,
      `不过，虽然三年过去了，但除了出道战胜利以外，最好的成绩也只有G3的五着。`,
    );
    await era.printAndWait(`马娘捧着手中的胡萝卜汁，凝视着里面的橘黄色液体。`);
    await say_by_passer_by(
      `马娘`,
      `虽然也为此付出了大量的努力，不过几乎没有什么成长。`,
    );
    await say_by_passer_by(
      `马娘`,
      `只是重复着，重复着同样的行动，就这样浑浑噩噩的度过。`,
    );
    await say_by_passer_by(`马娘`, `我也想过，说不定是我的方法出现了问题。`);
    await say_by_passer_by(
      `马娘`,
      `不过，仅仅只是在脑海里稍微想了一下就这么搁置了。`,
    );
    await say_by_passer_by(
      `马娘`,
      `也许，我并不适合作为赛马娘，是时候去找其他方向的出路了。`,
    );
    await era.printAndWait(`说完，马娘沉默注视着你和丸善斯基取得的奖杯。`);
    await me.say_and_wait(`......`);
    await era.printAndWait(`赛马娘界不是那个付出就能得到回报的温柔的世界。`);
    await era.printAndWait(`尽管如此。`);
    await me.say_and_wait(`付出终会有回报的一天。`);
    await era.printAndWait(`心乱如麻，恐怕这个马娘也是这么想的吧。`);
    await say_by_passer_by(`马娘`, `.....谢谢。`);
    await say_by_passer_by(
      `马娘`,
      `啊，抱歉，呆的太久了，既然丸善前辈还没过来的话，那我先告辞了。`,
    );
    await era.printAndWait(`将喝完的罐头扔进垃圾桶后，马娘向你道别。`);
    await me.say_and_wait(`祝你武运昌隆。`);
    await say_by_passer_by(`马娘`, `嗯，再见。`);
    await era.printAndWait(`带着苦涩笑容的马娘轻轻关上了训练室的门。`);
  } else if (edu_weeks === 47 + 17) {
    // 玩家病倒，丸善斯基照顾，夏季合宿阶段丸善斯基生病，玩家照顾，核心语句应该包括对人生的意义看法，为后文丸善斯基的觉醒做铺垫
    await print_event_name('憧憬', chara_talk);
    await era.printAndWait(`训练室\n`);
    await era.printAndWait(
      `厚厚的黑眼圈伴随着挥之不去的咖啡，你将手中的文件看了一遍又一遍。`,
    );
    await me.say_and_wait(`以现在的姿态去挑战德比的话`);
    //todo 耐力小于300
    await me.say_and_wait(`不行，属性太低了，这周必须加强耐力训练`);
    //todo 耐力大于300
    await me.say_and_wait(`接下来提高力量与根性吧，啊嚏！`);
    await era.printAndWait(
      `集中的注意力被喷嚏所打断，你抽了张放在右手边的餐巾纸，然后扔进了满满的垃圾桶中。`,
    );
    await me.say_and_wait(`等处理完这份文件。`, true);
    await era.printAndWait(
      `身体好冷，像是全身埋进了冰块之中，视野也变得模糊了起来。`,
    );
    await era.printAndWait(
      `原以为自己年轻力壮稍微熬了一个星期的夜没关系，却没想到身体先撑不住垮掉了。`,
    );
    await me.say_and_wait(`这该死的身体，感冒药，感冒药在哪里？`);
    await era.printAndWait(
      `打开抽屉，抽出写着退烧药的纸盒子，却发现里面的药早就吃光了。`,
    );
    await me.say_and_wait(`......这样吗？至少趁脑子还能运转的时候。`);
    await era.printAndWait(
      `已经没有什么比这更加糟糕的情况了，心情却变得轻松了起来。`,
    );
    await era.printAndWait(
      `从饮水机倒了一杯温水后，一饮而尽的你重新坐回了座位。`,
    );
    await me.say_and_wait(`得加快速度了。`);
    await era.printAndWait(
      `牙齿因感受到寒冷而不自觉的上下打架，发出了一连串的”哒哒哒“声，喉咙也变得吞咽困难。`,
    );
    await era.printAndWait(
      `只是为了满足”快点完成这份工作“，”还不能在这里倒下“的这份心情，你咬牙坚持着。`,
    );
    await me.say_and_wait(`结束了！`);
    await era.printAndWait(
      `敲下最后一个字母后，因为完成带来的满足而放松的精神终于坚持不住。视野开始天旋地转了，大概，自己已经到极限了吧。`,
    );
    await era.printAndWait(`于是你，满足的倒下了。`);
    await chara_talk.say_and_wait(`训练员君？`);
    await era.printAndWait(`在意识消失之前，你听到了丸善斯基的声音。`);
    era.drawLine();
    await era.printAndWait(`就好好看着我吧，作为在赛马娘生涯上的前辈。`);
    await era.printAndWait(`请好好注视着我吧，就这样被我永远的甩在后面。`);
    await era.printAndWait(`请好好祝福着我吧，现在，轮到你为我喝彩了。`);
    await me.say_and_wait(`这样啊。`);
    await era.printAndWait(
      `大概是某个不知名的马娘心底的声音不小心漏了出来吧。`,
    );
    await chara_talk.say_and_wait(`训练员君？`);
    await era.printAndWait(`似乎有人在呼唤着你。`);
    await chara_talk.say_and_wait(`训练员君`);
    await era.printAndWait(`该醒了。`);
    await era.printAndWait(`于是你睁开了眼睛。`);
    await chara_talk.say_and_wait(`训练员君你终于醒了。`);
    await me.say_and_wait(`这里是？`);
    await era.printAndWait(`环绕四周，似乎是你生活的地方。`);
    await chara_talk.say_and_wait(`稍微等一下。`);
    await era.printAndWait(`丸善斯基走进了厨房，然后端出了一碗粥。`);
    await chara_talk.say_and_wait(
      `已经煮好一段时间了，如果还是有点烫的话，要和我说哦。`,
    );
    await era.printAndWait(
      `温暖的流体送进了你的口中，昏昏沉沉的大脑只能凭借本能认定这是对自己有利的东西。`,
    );
    await me.say_and_wait(`不用了，我自己来。`);
    await era.printAndWait(
      `刚想要就这么坐起来，却被更加强而有力的双手制止住了。`,
    );
    await chara_talk.say_and_wait(
      `现在不是逞强的时候，病人应该乖乖躺在床上然后好好休息。`,
    );
    await me.say_and_wait(`丸善斯基...`);
    await era.printAndWait(
      `终于耗尽了最后一丝力气，不得不躺在床上。努力将送入口中的食物吞咽下去。`,
    );
    await era.printAndWait(
      `那双温暖的双手，以及那副认真的模样，不知不觉间，似乎与母亲的面貌慢慢重合在了一起。`,
    );
    await me.say_and_wait(`......妈妈。`);
    await era.printAndWait(`怀念的气息让你闭上了眼睛，陷入了沉沉的睡眠之中。`);
    await era.printAndWait(`因为恐惧而不断奔波的身体，终于得到了安心。`);
    era.drawLine();
    await me.say_and_wait(`......什么时候？`);
    await era.printAndWait(
      `睁开眼睛，正打算爬起来的时候，看见了在椅子上休息的少女趴在床上睡着了。`,
    );
    await era.printAndWait(
      `尽力以不会产生颤抖的动作掀开窗帘一角，一丝光芒照在了你的脸上，天亮了。`,
    );
    await chara_talk.say_and_wait(`唔。`);
    await era.printAndWait(
      `所幸，直立起身体的微微颤动仅仅只是让她无意识的换了一个姿势，均匀的呼吸声没有被打断。`,
    );
    await me.say_and_wait(`就这样一直等到她醒来吧。`, true);
    await era.printAndWait(`这么想着，你闭上了眼等待着天亮的时候。`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) || wait_flag;
  } else if (edu_weeks === 47 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:4:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('夏季合宿', chara_talk);
    await era.printAndWait(`沙滩`);

    await era.printAndWait(`虽说是理事长的私人沙滩。`);
    await era.printAndWait(`空气却带着一股感到清凉感。`);
    await era.printAndWait(`也许是因为靠近大海的缘故吧，`);
    await era.printAndWait(`海风带着远远的一进一退的波浪声传来了潮湿的气息。`);
    await era.printAndWait(
      `从小塔之上下来，丸善斯基带着满足的感觉微眯着双眼享受着度假的气息——`,
    );
    await me.say_and_wait(`话说，为什么不去乘校车啊。`);
    await era.printAndWait(
      `在丸善斯基强烈要求之下，你们在小塔的帮助下来到了理事长的私人沙滩。`,
    );
    await chara_talk.say_and_wait(
      `因为是第一次夏季特训的缘故，稍微想让小塔也感受一下，结果...在中途的时候不小心就按照比赛时候的...感觉了，抱歉呢。`,
    );
    await me.say_and_wait(
      `哈啊——丸善斯基，你也知道夏季合宿是快速提高能力的捷径吧？`,
    );
    await me.say_and_wait(`稍微~比平常要更加认真一点吧。`);
    await chara_talk.say_and_wait(
      `唔，抱歉。既然训练员君都这么说了，那么姐姐我不认真一点也不行呢⭐`,
    );
    era.printButton(`这不是当然的吗？`, 1);
    await era.input();
    await era.printAndWait(`嘛，虽然你也没资格说就是了。`);
    await me.say_and_wait(`这样的话，接下来就好好享受青春吧。`);
    await era.printAndWait(`有些人按照身体感觉来走才是更加正确的道路。`);
    await era.printAndWait(`所以最好还是不要干涉吧。`);
    await chara_talk.say_and_wait(
      `像这样感受着海风带来的吹拂，心情也变得更加开朗了呢。`,
    );
    await me.say_and_wait(`比之前一直在训练室的沙发上要好上许多倍了`, true);
    await chara_talk.say_and_wait(
      `像这样感受着海风带来的吹拂，心情也变得更加开朗了呢。`,
    );
    await era.printAndWait(
      `看着在沙滩上邀请${me.name}一起享受的${chara_talk.name}，${me.name}下定了决心。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 30) {
    await print_event_name('庙会', chara_talk);
    await me.say_and_wait(`真是热闹啊。`);
    await era.printAndWait(
      `与丸善斯基约定好了一起来参加据说非常盛大的庙会，但你在入口处等了很久也没看见她的身影。`,
    );
    await era.printAndWait(
      `“是人流太大迷路了吧”正当你放空大脑看着人群不断汇入灯笼装饰着的庙会，眯着眼着打了一个哈欠时。`,
    );
    await me.say_and_wait(`真是热闹啊。`);
    await era.printAndWait(
      `跟预想之中只是寥寥几个摊位的情况完全不同，从四面八方汇聚的游客与摊位从街道的这头一直蔓延到了街道的另一头。`,
    );
    await say_by_passer_by(`摊主`, `在这里发呆的少年，不来尝尝新鲜的水果吗？`);
    await me.say_and_wait(`诶？`);
    await era.printAndWait(`被流动的人群推赶着，不知不觉站在了水果摊面前。`);
    await say_by_passer_by(`摊主`, `看这样子是第一次来参加庙会的吧？`);
    await era.printAndWait(
      `似乎是因为收益不错心情也变好的缘故，大叔开始涛涛不绝的说了下去。`,
    );
    await say_by_passer_by(
      `摊主`,
      `想想看也是，毕竟这里可是被评为旅游时必逛的庙会之一。`,
    );
    await say_by_passer_by(
      `摊主`,
      `毕竟整个小镇因为靠近这片美丽的沙滩可是吸引了不少的游客前来度假呢。`,
    );
    await say_by_passer_by(
      `摊主`,
      `虽然以前这里不过只是一个交通不便的平平无奇的乡村罢了，不过自从这边的沙滩出名之后，前来参观的游客也变得多了起来。`,
    );
    await say_by_passer_by(
      `摊主`,
      `后来伴随着铁路的开通，人们都哗的一下往这边跑了，最后变成了现在的小镇。`,
    );
    await me.say_and_wait(`那个？请问`);
    await say_by_passer_by(
      `摊主`,
      `哦。看我这记性，说起来你是因为迷路才站在这里的吧？`,
    );
    await say_by_passer_by(
      `摊主`,
      `也是，因为这个庙会有四个一摸一样的入口嘛，虽然我不懂什么艺术之类的东西，不过每年都能看到与其他人约定在入口处集合而找不到人的乐子。`,
    );
    await era.printAndWait(
      `似乎正讲到兴头之上，看上去因为是小镇的本地居民而自豪的大叔带着洪亮的嗓门介绍着。`,
    );
    await say_by_passer_by(
      `摊主`,
      `顺带一提，如果想走完整个庙会的话，从这里出发一路直走能看到这边的特色演出。`,
    );
    await say_by_passer_by(
      `摊主`,
      `今晚说不定能在观看庆典的人群那里大赚一笔呢，哈哈哈。`,
    );
    await era.printAndWait(`说完最后一句话后，唾沫横飞的大叔终于停下了对话。`);
    await say_by_passer_by(`手机`, `嗡嗡嗡`);
    await era.printAndWait(
      `口袋中的手机发出了震动的声音。在人们大多为了演出而出发的现在，现在会打电话的不言而喻了。`,
    );
    await chara_talk.say_and_wait(`训练员君你在哪里？`);
    await era.printAndWait(
      `口袋中的手机发出了震动的声音。在人们大多为了演出而出发的现在，现在会打电话的不言而喻了。`,
    );
    await chara_talk.say_and_wait(
      `明明是精心准备了一番，看着手机上拍下的照片赶到入口处的时候，却怎么也没看到训练员君的样子。`,
    );
    await chara_talk.say_and_wait(
      `虽然自认不会错过训练员君的身影，不过左看右看都找不到训练员君的身影，姐姐我还是有点伤心呢><。`,
    );
    await era.printAndWait(`是搞错了入口吧，不，说不定大概我也搞错了？`);
    era.printButton(`不好意思打扰了。`, 1);
    await era.input();
    await say_by_passer_by(`摊主`, `嗯？是想问怎么分辨入口吧？`);
    await say_by_passer_by(`摊主`, `也是，毕竟每年都有人问这个问题。`);
    await say_by_passer_by(
      `摊主`,
      `平时的时候很容易分辨的地方，人一多起来看什么就都是一样的了。`,
    );
    await say_by_passer_by(
      `摊主`,
      `你叫那位朋友从入口处走到第五个摊位，那边有专门负责引导的志愿者。`,
    );
    await era.printAndWait(`大叔一边说着一边自然拿出了一份地图指给了你看。`);
    await say_by_passer_by(
      `摊主`,
      `如果要赶演出的话，走这条路，现在赶过去还来得及。`,
    );
    await era.printAndWait(`虽然因为过于热情而有点奇怪但是很好心的大叔。`);
    await era.printAndWait(
      `向他道谢之后，你将原话告诉了丸善斯基便匆忙赶了过去。`,
    );
    era.drawLine();
    await era.printAndWait(`快来吧，快来吧，不远处就是盛大的舞台。`);
    await era.printAndWait(`忘却这份烦恼吧，在这份热情的舞动之中翩翩起舞吧。`);
    await era.printAndWait(
      `融化在这份盛大的庆典之中吧，就这样和我一起祈祷她永不落幕吧。`,
    );
    await era.printAndWait(
      `带着泪水与汗水交织而成的喜悦，带着迷茫与痛苦最终释然吧。`,
    );
    await era.printAndWait(
      `就像沙滩之上亮晶晶的沙子一样，你们的喜悦与解脱最终将被历史所铭记。\n`,
    );
    await me.say_and_wait(`总算到目的地了。`);
    await era.printAndWait(
      `前来观看表演的人群络绎不绝，人们或站或坐，举着饮料或者相机观看着舞台之上的精彩表演。`,
    );
    await era.printAndWait(
      `人们呼出的气息仿佛织成了一张薄薄的网，小孩子们尖叫着在人群之中兴奋的跑来跑去。`,
    );
    await me.say_and_wait(`人可真多啊。`);
    await era.printAndWait(
      `尽管已经相当注意自己的脚下，但还是好几次被疯跑着的孩童差点撞得失去平衡。`,
    );
    await me.say_and_wait(`好热，不过当务之急还是要先找到丸善斯基——`);
    await era.printAndWait(
      `虽然想将自己的定位发给她，但在这么多的人群中，就连手机的信号也变得断断续续的。`,
    );
    await chara_talk.say_and_wait(`训练员君！`);
    await era.printAndWait(
      `夜幕低垂，舞台的灯光逐一亮起，在场的游客将自身的注意力集中于舞台之上——`,
    );
    await era.printAndWait(
      `除了看着丸善斯基的你与注视到你的目光挥着手小跑过来的丸善斯基。`,
    );
    era.printButton(`能看到丸善斯基真是太好了`, 1);
    await era.input();
    await era.printAndWait(
      `像是心中的一块大石终于落到了地上，你长长的呼出了一口气。`,
    );
    await chara_talk.say_and_wait(`总算找到你了，姐姐我也是松了一口气呢。`);
    await me.say_and_wait(`抱歉，虽然我也想尽快和丸善斯基汇合，不过——`);
    await chara_talk.say_and_wait(
      `嗯~比起道歉的话，接下来训练员君和我一起看表演才是最能用行动作为补偿吧。`,
    );
    await me.say_and_wait(
      `......直到舞台结束为止，我都不会离开丸善斯基身边的。`,
    );
    await me.say_and_wait(`所以，请让我和你一起创造这份美好的回忆吧。拜托了！`);
    await chara_talk.say_and_wait(`哎呀，这是什么新型告白方式吗？`);
    await chara_talk.say_and_wait(`姐姐我也是稍~微有点心动了呢。`);
    await chara_talk.say_and_wait(`既然这样的话，训练员君就不要离开我了哦？`);
    await era.printAndWait(
      `受邀参加演出的马娘穿着流光溢彩的服饰轻盈的跃上了舞台，灯光一下子全部集中在了她的身上，此刻的她仿佛变成了这份沙滩之中最为耀眼的存在。`,
    );
    await me.say_and_wait(`丸善斯基？`);
    await era.printAndWait(
      `她的动作流畅而美丽，让人不禁想起了不远处仍在汹涌奔流着的海浪，随着节奏而悄然出现的民族风伴奏将这位身着深蓝色的服饰的马娘烘托成了于海洋深处悄然来到陆地之上翩翩起舞的精灵。`,
    );
    await me.say_and_wait(`丸善斯基！`);
    await chara_talk.say_and_wait(`嗯？训练员君怎么了？`);
    await era.printAndWait(
      `被稍稍提高了声音的你而吓到了的少女看着询问的目光看着你。`,
    );
    await era.printAndWait(`你的决定是`);
    era.printButton(`丸善斯基，请告诉我你的痛苦与悲伤吧。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `舞台之上的少女拼尽自己的全力，洒下的汗水汇聚成了一阵又一阵的浪潮起伏。`,
    );
    await era.printAndWait(
      `观众们带着期待的目光，聚精会神的看着在舞台之上闪耀的那个偶像。`,
    );
    await era.printAndWait(`而从始至终，丸善斯基都保持着那份令人不安的沉默。`);
    await me.say_and_wait(`恐怕现在就是关键时刻了。`, true);
    await me.say_and_wait(`无论如何都要保持着耐心。`, true);
    await era.printAndWait(
      `台上的少女，每一次旋转，每一个跳跃，都牢牢的将观众们的内心紧紧抓住。`,
    );
    await era.printAndWait(`观众们屏息等待着那个时刻的到来。`);
    await chara_talk.say_and_wait(`果然，还是瞒不过训练员君吗？`);
    await era.printAndWait(
      `突然，像是平地一声雷响起，观众们爆发出了热烈的掌声与欢呼声。`,
    );
    await era.printAndWait(
      `将带着的微笑面具摘下，丸善斯基露出了悲伤与成功解脱的释然表情看着你。`,
    );
    await era.printAndWait(
      `就连这份疼痛都已经消失，带着这份几乎要瘫在地上的麻木感，少女品尝到了不知道是汗水还是泪水的咸味。`,
    );
    await chara_talk.say_and_wait(
      `...接下来，换个地方说吧？${me.actual_name}？`,
    );
    await era.printAndWait(
      `被散发出的迷人诱香的果实所吸引的无数游客们汇入了这份盛况之中，今夜，才刚刚进入高潮。`,
    );
    era.drawLine();
    await era.printAndWait(
      `逆着期待欢愉与忘却的人流，你们像是散步一样来到了附近的一处神社。`,
    );
    await era.printAndWait(
      `欢乐已达高潮，游客们的目光纷纷聚焦在了小镇中心的舞台上，`,
    );
    await era.printAndWait(`要是说偏僻的话，亦是存在比此处更为偏僻的地方，`);
    await era.printAndWait(
      `然而，此处既不因过于幽静而显得恐惧，也不因过于喧嚣而使人感到不安。`,
    );
    await chara_talk.say_and_wait(`三女神大人，请听我诉说。`);
    await era.printAndWait(
      `与投入赛钱箱中的马币之间碰撞的清脆声音同时发生的来自丸善斯基的祈祷。`,
    );
    era.printButton(`投入马币`, 1);
    await era.input();
    await era.printAndWait(`你效仿着丸善斯基的动作，闭上眼睛向着三女神祈祷。`);
    era.printButton(`三女神大人，请指引痛苦之人吧`, 1);
    era.printButton(`三女神大人，请指引迷茫之人吧`, 2);
    await era.input();
    await era.printAndWait(`许下了愿望之后，你看向了一旁的少女。`);
    await era.printAndWait(
      `她死死的注视着赛钱箱——不，她看向了那未知的，遥远的地方。`,
    );
    await me.say_and_wait(`丸善斯基在哭泣吗？`, true);
    await say_by_passer_by(`巫女`, `实在抱歉，今天的姻缘符已经送完了。`);
    await era.printAndWait(
      `少顷，揉着双眼打着哈欠的巫女才从观看表演的人群中姗姗来迟。`,
    );
    await say_by_passer_by(
      `巫女`,
      `......如果可以的话，请两位客人收下这个吧。`,
    );
    await era.printAndWait(
      `似乎意识到了什么，巫女从长袖中缝合的小口袋里拿出了护身符。`,
    );
    await me.say_and_wait(`非常感谢。`);
    await say_by_passer_by(`巫女`, `感谢的话语，献给美丽的女神。`);
    await say_by_passer_by(`巫女`, `祝福的话语，献给仁慈的女神。`);
    await say_by_passer_by(`巫女`, `解脱的话语，献给慈爱的女神。`);
    await me.say_and_wait(`解脱吗？`, true);
    await chara_talk.say_and_wait(`祝福吗......三女神大人，谢谢你。`, true);
    await say_by_passer_by(`巫女`, `三女神们，请带给这个世界美好与希望吧。`);
    await say_by_passer_by(`巫女`, `可爱的人们，愿三女神与你们同在。`);
    await era.printAndWait(`巫女一边说着祝福的话语一边将护身符递给了你们。`);
    await era.printAndWait(
      `与迅速从巫女手中接过护符并回礼的你不同，丸善斯基接过护符之后，放进了随身携带的小包之中。`,
    );
    await era.printAndWait(`随后——`);
    await chara_talk.say_and_wait(`还是瞒不过训练员君呢。`);
    await era.printAndWait(
      `似乎察觉到了气氛的改变，巫女伸出右手指向了一条僻静的小道，随后离开了此处。`,
    );
    await era.printAndWait(
      `木屐与地面碰撞发出哒哒的清脆声音慢慢变得越来越小，渐渐，这里只剩下了远处传来的鼓声与观众欢呼喝彩之声。`,
    );
    await me.say_and_wait(
      `这里只剩下我们两个人了，接下来的话语除了三女神大人，谁也不会听见。`,
    );
    await era.printAndWait(
      `你看向了丸善斯基的脸庞，而后者因为终于从困扰之中解脱出来而身体微微颤抖。`,
    );
    await chara_talk.say_and_wait(
      `从哪里说起来比较好呢。实际上，那个晚上我也在场。`,
    );
    await me.say_and_wait(`什么？！`);
    await era.printAndWait(
      `你的背后涌起了一股寒意，双腿发抖，甚至想要就这么转身逃跑，但是仅存的理性还是告诉了自己，人是不可能跑得过马娘的。`,
    );
    await era.printAndWait(`更何况，是作为马娘中的佼佼者，丸善斯基。`);
    await chara_talk.say_and_wait(
      `正如你所想的那样，那天的训练员君神色有些古怪，而且视线总是无意识地看向手表。`,
    );
    await chara_talk.say_and_wait(`这个时候，令人讨厌的直觉就这么发动了。`);
    await era.printAndWait(
      `丸善斯基带起了那副你从未见过的假面，就这么面无表情地诉说着。`,
    );
    await chara_talk.say_and_wait(
      `晚饭后，虽然说回到公寓了，但事实上只是将小塔临时停在了附近的停车场，然后借助脚力回到了特雷森。`,
    );
    await era.printAndWait(
      `背叛者，畜生，罪人，脑海之中不禁浮现出了与丸善斯基定下的约定。`,
    );
    await me.say_and_wait(`我有什么脸面去见她？`, true);
    await era.printAndWait(
      `一想到这个，大脑就一片空白，嘴唇下意识的咬紧，胃里翻江倒海般的——一股恶心感传了出来。`,
    );
    await chara_talk.say_and_wait(
      `虽然训练员君反侦察意识很强呢，不过再怎么说，警惕起来的马娘可是连最微小的声音都不会放过的。`,
    );
    await chara_talk.say_and_wait(
      `在远远处看到了训练员君神色慌张的走进了教学楼后，在一楼耐心等到说话声响起便可迅速定位。`,
    );
    await me.say_and_wait(`......`);
    await era.printAndWait(`你张了张嘴，什么也说不出来。`);
    await era.printAndWait(
      `度日如年的感觉，想要就此逃跑，却被灌了铅一样的双腿牢牢钉死在了原地。`,
    );
    await chara_talk.say_and_wait(
      `明明，如果训练员君没同意和我一起去庙会的话，我打算就这样装傻到一切结束呢。`,
    );
    await era.printAndWait(
      `虽然说出的话带着一股轻快感，但一丝笑容都没有出现的丸善斯基紧紧地盯着你。`,
    );
    await chara_talk.say_and_wait(
      `不过，既然训练员君已经下定决心的话，我也应该回以应有的尊重。`,
    );
    await chara_talk.say_and_wait(`那么，训练员君，现在轮到你了。`);
    await era.printAndWait(
      `人类远古时期流传下来的恐惧让你的大脑全速运转，你的决定是。`,
    );
    //  这里可以设计一个好感度，如果爱慕度未达到49，则只存在选项2
    era.printButton(`抱歉，我拒绝。`, 1);
    era.printButton(`非常抱歉，我是个罪人`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await chara_talk.say_and_wait(`......`);
      await era.printAndWait(`你毫不犹豫的迎上了丸善斯基的双眼。`);
      await chara_talk.say_and_wait(
        `${me.actual_name}，你最好给我一个满意的答复。`,
      );
      await era.printAndWait(
        `丸善斯基的马耳慢慢向后背去，语气之中也变得急躁起来。`,
      );
      await me.say_and_wait(`踏错一步可能就是万丈深渊了。`);
      await era.printAndWait(
        `强行安下跳得越来越厉害的心脏，冷静得仿佛不是自己一样。`,
      );
      await era.printAndWait(
        `虽然连自己也不太清楚，为什么自己下意识的拒绝了。`,
      );
      await era.printAndWait(
        `但是，你知道，这个时候绝对不能妥协，你不是为了来陪丸善斯基过家家，你必须展现出那份意志。`,
      );
      await era.printAndWait(
        `回到正题，丸善斯基在意的地方是什么？令她痛苦的除了背叛誓言还有什么？`,
      );
      await me.say_and_wait(`我是来把你从偶像的神座上拽下来的，丸善斯基。`);
      await era.printAndWait(
        `丸善斯基有意无意释放了一点自己的领域，你体会到了在赛场上的马娘们所感受到了恐惧。`,
      );
      await me.say_and_wait(
        `偶像是什么？被人崇拜，被人寄托了命运，虽然说着为了让其他人看着自己的背影前进，但实际上，你是如此的傲慢。`,
      );
      await me.say_and_wait(`你真的承受得了那份被无数人寄托了希望的千斤顶吗？`);
      await me.say_and_wait(`尽管是我，我也知道，世界上没有完美无缺的人。`);
      await me.say_and_wait(`只要是人，就一定会犯错，一定会做出错误。`);
      await me.say_and_wait(
        `错误是不可避免的，悲伤、痛苦之后，才更加懂得珍惜。`,
      );
      await me.say_and_wait(`但是你`);
      await me.say_and_wait(`虽然也是作为知心大姐姐帮助困扰的马娘们。`);
      await me.say_and_wait(
        `但是没有做好善后工作，完全没有意识到马娘们把你当成了逃避一切问题用的避风港。`,
      );
      await me.say_and_wait(
        `就这样，被马娘擅自寄托了希望，又就这样擅自被认为背叛了的马娘憎恨。`,
      );
      await me.say_and_wait(
        `虽然那些马娘们口口声声说把你的背影作为偶像看待，在实际行动里却把你当成神一样崇拜。`,
      );
      await me.say_and_wait(
        `虽然你不是有意这么做，也从未有这种想法，但是，悲剧就是这么诞生了。`,
      );
      await me.say_and_wait(
        `所以，请从这个神座上下来吧，我不是为了自己而请求，而是因为看到了通向地狱的单程车而拉住你。`,
      );
      await era.printAndWait(
        `完全不顾丸善斯基的想法，就这样一口气将自己内心挤压下来的想法说了出来。\n`,
      );
      await chara_talk.say_and_wait(
        `那你的解决方法又在哪里？世界上从来不缺发现问题的人，缺的从来都是能更进一步解决问题的人。`,
      );
      await chara_talk.say_and_wait(`而且，说到底都是你的一面之辞吧？`);
      await chara_talk.say_and_wait(`谁知道这不是你因为恐惧而胡扯出来的东西？`);
      era.printButton(
        `就像我为了冒被丸善斯基讨厌的风险一样，你也应该知道自己为什么，是为了何人而冒的风险吧！`,
        1,
      );
      await era.input();
      await era.printAndWait(`正打算继续说下去的丸善斯基，被你的话语所打断。`);
      await me.say_and_wait(
        `我虽然没有这种被后辈们寄托了大量希望与期待的经历，但我也知道，丸善斯基是出于爱而帮助的她们。`,
      );
      await me.say_and_wait(
        `就是这个宁可粉身碎骨、万劫不复也要帮助她们的这个名叫爱的东西！`,
      );
      await me.say_and_wait(
        `所以，我不会阻止丸善斯基践行自己的道路，但不论如何，作为你的训练员，我都要把你从神座上拽下来（只有竭力避免将荣耀归于自身才能妥善处理这份氢氟酸）！`,
      );
      await era.printAndWait(
        `这是你第一次直面领域，但心中有种难以形容的温暖与激情让你凝视着她的双眼。`,
      );
      await era.printAndWait(`然后，你看着她的气势慢慢的消散，越来越小。`);
      await era.printAndWait(
        `最后，就像是犯了错的小朋友一样，耷拉着耳朵，乖乖听着你的说教。`,
      );
      await era.printAndWait(`于是，你与丸善斯基度过了一个难忘的庙会。`);
    } else {
      await chara_talk.say_and_wait(`......`);
      await era.printAndWait(
        `像是度过了一年一样漫长，你被丸善斯基用审视犯人的目光紧紧盯着看。最后，她收回了目光。`,
      );
      await chara_talk.say_and_wait(`那么，接下来的日子，也请多多指教了♪`);
      await era.printAndWait(`像是什么也没发生一样，她带着笑容向你伸出了手。`);
      await me.say_and_wait(`请多多指教`);
      await era.printAndWait(`尽管她依然是那副柔和的语气，但你知道——`);
      await era.printAndWait(
        `有什么暖洋洋的东西，向着黑暗之中，连同自己的灵魂一起\n`,
      );
      await era.printAndWait(`然后，终于 结束了。`);
      await era.printAndWait(`留下的只有寂静。`);
    }
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 47 + 31) {
    if (era.get('flag:当前位置') !== location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name('土水生岚', chara_talk);
    await era.printAndWait(`某天，友人找到了你。`);
    await say_by_passer_by(`浄风幸`, `今天晚上有空吗？`);
    await me.say_and_wait(`又是打算炫耀和担当之间的亲密关系啊。`, true);
    await me.say_and_wait(`难道又和担当闹别扭了吗？`);
    await say_by_passer_by(
      `浄风幸`,
      `呜啊，饶了我吧，那个孩子每天都是一副兴致勃勃的样子，再这样下去恐怕会出什么事情。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `咳咳——扯远了。叫你出来也不是什么大事，只是有点好奇。`,
    );
    await say_by_passer_by(`浄风幸`, `你和丸善斯基之间发展的怎么样了？`);
    await era.printAndWait(`你告诉了他你们之间发生的故事。`);
    //todo TE结局路线
    await say_by_passer_by(`浄风幸`, `这样子看起来不是超好的吗！`);
    await say_by_passer_by(`浄风幸`, `可恶，我都有点羡慕了！`);
    await era.printAndWait(`打算向你炫耀的他反而吃了一波狗粮。`);
    //todo GE结局路线
    await say_by_passer_by(`浄风幸`, `什么啊，你也是来向我炫耀的吗！`);
    await say_by_passer_by(`浄风幸`, `可恶，我都有点羡慕了！`);
    await era.printAndWait(`小学生吗？做出了一副咬牙切齿的样子。`);
    //todo 其他结局路线
    await say_by_passer_by(`浄风幸`, `看起来还要加油的样子。`);
    await say_by_passer_by(
      `浄风幸`,
      `不过没关系，虽然丸善斯基看起来很难接触的样子，不过只要坦率一点大部分场合都能解决的！`,
    );
    await say_by_passer_by(`浄风幸`, `嗯。大多数场合。`);
    await era.printAndWait(`看上去略有所思的样子。`);
    await say_by_passer_by(`浄风幸`, `这样的话，我就放心了。`);
    await era.printAndWait(`友人像是终于放下了执念一样，露出了释然的表情。`);
    await era.printAndWait(`然后`);
    await say_by_passer_by(`浄风幸`, `说起来不久之前有一名赛马娘退役了。`);
    await me.say_and_wait(`？`);
    await say_by_passer_by(
      `浄风幸`,
      `说起来之前还在团队当助理训练员的时候，与她曾是马娘与训练员之间的关系。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `不过也没有那么多的故事啦，我们之间也只是名义上的担当关系罢了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然只是名义上的训练员与马娘，抱歉，是赛马娘之间的关系。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `当时的我，训练手法与情感处理都是压倒性的经验不足。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `不过还是凭借一腔热情进行着训练，她也很努力的配合着不成熟的我进行训练。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `日夜训练，参加比赛，然后总结教训再次挑战。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `就这样，比起团队中的其他马娘更加关注那个马娘的样子。磕磕碰碰的度过了最初的一年。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `拜此所赐，说不定我们也能向皇帝那样，就带着不切实际的希望期待着。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `不过后来因为理念不同吵了一架，想让对方向我道歉，说起来两人都是这样想的吧。我赌气般的投身于新担当的训练计划了。就这样微小的摩擦不断积累着，等意识到的时候却已经无法返回了。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `真是可笑，明知道自己不是鸟为什么要去追逐蓝天。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `啊。抱歉，光是让你听我抱怨了。今天想吃什么的话我来请客！`,
    );
    era.printButton(`那就恭敬不如从命了。`, 1);
    era.printButton(`难得来次海滩，晚点再出发吧。`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await say_by_passer_by(`浄风幸`, `那是那是！`);
      await era.printAndWait(
        `带着对未来的期待，两人向着目标方向有说有笑的前进了。`,
      );
    } else {
      await say_by_passer_by(
        `浄风幸`,
        `诶？难道这片海滩之上还有什么值得你留恋的——`,
      );
      await era.printAndWait(`像是突然想起了什么，友人沉默了一会。`);
      await say_by_passer_by(
        `浄风幸`,
        `......说起来，为什么丸善斯基没有过来。`,
      );
      await say_by_passer_by(`浄风幸`, `难道说你们之间？`);
      era.printButton(`丸善斯基去采购今晚派对的物资了`, 1);
      await era.input();
      await say_by_passer_by(`浄风幸`, `这样啊...嗯。`);
      await era.printAndWait(`像是为了将什么抛到脑后，两人快步离开了海滩。`);
    }
    era.drawLine({ content: '酒过三巡之后' });
    await say_by_passer_by(
      `浄风幸`,
      `......说起来，心里一直有个故事想要和人分享，不过就这么说出来的话，多少还是有些羞耻。`,
    );
    era.printButton(`有意思，说出来听听。`, 1);
    await era.input();
    await say_by_passer_by(`浄风幸`, `就我个人来说吧，我也没有突出的本事`);
    await say_by_passer_by(
      `浄风幸`,
      `每天考虑最多的也不是${chara_talk.get_uma_sex_title()}的未来和幸福这种大事`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `在没遇到现在的担当之前，我在团队里也就是帮帮主训练员记录一下时间与开导一下${chara_talk.get_uma_sex_title()}们的疑惑`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `看着自己做出的成就还有收获到${chara_talk.get_uma_sex_title()}们的感谢，其实我觉得自己这样过得也不错嘛`,
    );
    await era.printAndWait(`话还没说完，又是一罐啤酒下肚。`);
    await say_by_passer_by(
      `浄风幸`,
      `呼啊，真爽，果然还是要喝点酒才是人生真谛。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `虽然现实就是个垃圾游戏，不过也有能让人得到安慰的部分嘛。`,
    );
    await say_by_passer_by(`浄风幸`, `唔。刚刚说到哪里了？`);
    era.printButton(`团队时期作为助理训练员的时光。`, 1);
    await era.input();
    await say_by_passer_by(`浄风幸`, `对啊，就是这个！然后呢——`);
    await say_by_passer_by(
      `浄风幸`,
      `突然有一天我觉得不能在这样浑浑噩噩下去了，所以我向前辈提出想要找到自己的道路。`,
    );
    await say_by_passer_by(`浄风幸`, `前辈当时是这么说的。`);
    await say_by_passer_by(
      `资深训练员`,
      `既然你打算去寻找自己的道路的话，我给你一个忠告。`,
    );
    await say_by_passer_by(
      `资深训练员`,
      `不论你是否自知，你终会找到自己的道路，以及自己的理想。`,
    );
    await say_by_passer_by(
      `资深训练员`,
      `然后，不是小说里写得那样，从此前途一片大好，只要朝着理想努力就行了。`,
    );
    await say_by_passer_by(
      `资深训练员`,
      `理想需要支撑它前进的能力，需要志同道合的同伴。`,
    );
    await say_by_passer_by(
      `资深训练员`,
      `为此，你需要解决路上的问题，需要安慰受到创伤的同伴，需要不断忍受漫漫长夜，需要信仰以及最重要的——原谅与宽恕。`,
    );
    await say_by_passer_by(
      `资深训练员`,
      `支撑你不断努力的，不会是对美好世界的向往而坚持——恰恰相反，“对美好世界的向往”在将来会是你最凶恶的敌人。`,
    );
    await say_by_passer_by(
      `资深训练员`,
      `支撑你无限努力的，是不断的原谅和宽恕。`,
    );
    await say_by_passer_by(`浄风幸`, `嘛，大概第二天就忘了吧。`);
    await say_by_passer_by(`浄风幸`, `非常感谢，我一定会铭记在心！`);
    await say_by_passer_by(
      `浄风幸`,
      `从团队之中独立出来，作为曾失去马娘的训练员，再次邂逅了新的马娘。`,
    );
    await say_by_passer_by(
      `浄风幸`,
      `直到之前的马娘退役之后，我才愕然的发现。`,
    );
    await say_by_passer_by(`浄风幸`, `我不小心记到了现在。`);
    await say_by_passer_by(`浄风幸`, `为什么呢？我也在寻找这个答案。`);
    await say_by_passer_by(`浄风幸`, `就算这样的话，明明。`);
    await say_by_passer_by(`浄风幸`, `明明，明明就差一点了。`);
    await say_by_passer_by(
      `浄风幸`,
      `如果我当时能向她道歉的话，说不定，说不定。`,
    );
    era.drawLine();
    await say_by_passer_by(`马娘`, `......原来如此，训练员先生。`);
    await say_by_passer_by(`浄风幸`, `你心里不是一清二楚吗？`, true);
    await say_by_passer_by(`浄风幸`, `鄙人净风幸。`);
    await say_by_passer_by(`马娘`, `非常高兴能认识您，净风幸先生。`);
    await say_by_passer_by(`浄风幸`, `我也是。`);
    await say_by_passer_by(
      `浄风幸`,
      `......如果我没有将训练员学校教授的东西全部遗忘的话，恐怕那不是因为受到巨大的惊吓，而是她的双腿已经快坚持不住了。`,
      true,
    );
    era.drawLine();
    await say_by_passer_by(`浄风幸`, `我们会......一起站在G1的领奖台上。`);
    await era.printAndWait(
      `到了傍晚，劳累了一天的客人们在品尝到了美味的啤酒后露出了由衷的笑容。`,
    );
    await say_by_passer_by(`浄风幸`, `如果可以重来的话。`, true);
    await say_by_passer_by(`浄风幸`, `我绝对要向你道歉。`, true);
    await say_by_passer_by(
      `浄风幸`,
      `对不起，如果能重来的话，我绝对不会因为你劝我不要抽烟而说出那么重的话。`,
      true,
    );
    await say_by_passer_by(
      `浄风幸`,
      `......如果这样能稍微从自我惩罚中解脱一点的话。`,
    );
    await say_by_passer_by(`浄风幸`, `尽管已经无可挽回，是无可奈何的事情了。`);
    await say_by_passer_by(
      `浄风幸`,
      `所以才要原谅自己吗？不，我已经无法原谅自己了。`,
      true,
    );
    await say_by_passer_by_and_wait(
      `浄风幸`,
      `三女神们，至少也要让那个孩子......对不起`,
      true,
    );
    await say_by_passer_by_and_wait(`浄风幸`, `......`, true);
    await era.printAndWait(
      `月亮出来了，向着月亮许愿（忏悔）的男人终于借着酒精进入了梦乡。`,
    );
    await era.printAndWait(
      `而你把醉鬼扔到训练员宿舍后打开窗户，不知为何，觉得今晚的月亮意外的柔和。`,
    );
  } else if (edu_weeks === 47 + 48) {
    await print_event_name('圣诞节', chara_talk);
    await chara_talk.say_and_wait(`哼哼哼♪`);
    await era.printAndWait(
      `已经到12月了吗,${me.name}停下手中的笔，看向窗外的雪花.`,
    );
    await era.printAndWait(`特雷森每年这个时期都额外的寒冷啊.`);
    await era.printAndWait(
      `${me.name}摇了摇头,正准备将注意力重新集中在手中的文件时.`,
    );
    await chara_talk.say_and_wait(
      `咚咚————${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，我进来了.`,
    );
    await era.printAndWait(
      `随着门把手的转动,那位令${me.name}心醉的${chara_talk.get_teen_sex_title}打开了门.`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}♪我就知道${
        me.name
      }在这里.`,
    );
    await chara_talk.say_and_wait(`都已经是圣诞节了,还在思考计划吗?`);
    era.printButton(`「${chara_talk.name}是打算和我约会吗?」`, 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}看起来更开心了`);
    await chara_talk.say_and_wait(
      `呵呵~原来${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }这么希望和我约会吗?啊啦♪${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我的魅力真是惊人呢⭐`,
    );
    await chara_talk.say_and_wait(
      `既然${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }都邀请我了,那么现在就出发吧！`,
    );
    era.drawLine();
    await chara_talk.say_and_wait(
      `————${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },偶尔想这样走在步行道上也不错呢.`,
    );
    era.printButton(`「啊啊.....好耀眼」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}与换上了冬装的${chara_talk.name}走在大街上,本就美丽的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }在换上了精心挑选的衣服之后独特的气质深深抓住了${me.name}的心.`,
    );
    await era.printAndWait(
      `游客A:这位是${chara_talk.name}吧?我在电视上看过${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的跑步.`,
    );
    await era.printAndWait(
      `游客B:是${chara_talk.name}!我是${me.name}的粉丝!请务必给我签名!`,
    );
    await chara_talk.say_and_wait(`哎呀,原来我已经这么出名了吗?`);
    await era.printAndWait(
      `不妙,好像越来越多的人注意到${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的到来了`,
    );
    await era.printAndWait(
      `${chara_talk.name}的魅力似乎也将无关人员也牵扯进来了,`,
    );
    era.printButton(
      `(才不能让${me.get_couple_title()}打扰和${chara_talk.name}共处的时光呢)`,
      1,
    );
    await era.input();

    await era.printAndWait(
      `${me.name}握紧${chara_talk.name}逐渐温暖起来的小手，加快步伐试图甩开那些追星的粉丝们`,
    );
    await chara_talk.say_and_wait(`.....呵呵♪`);
    await era.printAndWait(
      `${me.get_couple_title()}好不容易才甩开了紧紧追在后面的粉丝群后,才发觉自己来到了市中心公园`,
    );
    await era.printAndWait(
      `比起上气不接下气的${me.name},身为赛${chara_talk.get_uma_sex_title()}的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }似乎连呼吸都没有打乱节奏.`,
    );
    await era.printAndWait(`————比起平时的训练,这连开胃小菜都算不上.`);
    era.printButton(`(呼...呼...呼啊,总算甩开他们了吧)`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },这里好像很安静呢.`,
    );
    await era.printAndWait(
      `相互交织的led灯缠绕在道路两旁的树木上,从${me.get_couple_title()}的身后向前方无限延伸.`,
    );
    await era.printAndWait(
      `彩灯照亮了圣诞之夜,也为12月的寒风带来了一丝温暖和光明.`,
    );
    era.printButton(`是啊,这里真是一个约会的好地方啊`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `平安夜的话,训练员${me.get_adult_sex_title()}♪ ... 不想和最喜欢的人一起分享慢慢流逝的时光吗?`,
    );
    era.printButton(`(都这么说了不展现自己的勇气可不行啊)`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `哼哼~所以${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }的回答是?`,
    );
    era.printButton(`${chara_talk.name}小姐,请和我约会!`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `啊啦~${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }可真有勇气呢,虽然我也想就这么顺着气势答应下来,不过————`,
    );
    await era.printAndWait(`在刚刚的奔跑中${me.name}的头发变得乱糟糟的`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }的样子可真可爱呢,与其约会不如先把头发梳理一下吧`,
    );
    era.printButton(`「啊hao」`, 1);
    await era.input();

    await era.printAndWait(
      `还没有等${me.name}回复${chara_talk.name}就从自己的挎包中取出了梳子`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}把头低下来`,
    );
    await era.printAndWait(
      `${me.name}乖乖顺从${chara_talk.name}的意图将头低了下来.`,
    );
    await chara_talk.say_and_wait(
      `嗯...${me.name}的头发有些干燥呢,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }真是辛苦了.`,
    );
    await era.printAndWait(
      `${chara_talk.sex_code - 1 ? '她' : '他'}尽可能控制住力度温柔的梳理着${
        me.name
      }的头发,那温暖而感怀的气息让${
        me.name
      }回忆起了小时候在草地上晒太阳的气息.`,
    );
    await chara_talk.say_and_wait(
      `......这样的话就差不多了♪那么,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },今天的约会就还请多多指教了.`,
    );
    era.printButton(`「我这边也是请多多指教了」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}紧紧地握住了${chara_talk.name}的左手,慢慢地享受着着片刻的甜蜜时光.`,
    );
    await chara_talk.say_and_wait(
      `话说回来,这里似乎是本周最受欢迎的情侣打卡圣地呢.`,
    );
    era.printButton(`「难怪一路上都是成双成对的情侣呢」`, 1);
    await era.input();

    await chara_talk.say_and_wait(`呵呵♪下次圣诞的话我们也来这里看风景吧.`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },到时候可不要爽约哦`,
    );
    await era.printAndWait(
      `12月的寒风仿佛见证了${me.name}和${chara_talk.name}之间的亲密关系.`,
    );
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 95 + 6) {
    await print_event_name('情人节', chara_talk);
    await chara_talk.say_and_wait(`给,这是我亲手制作的巧克力.`);
    await era.printAndWait(
      `今年的情人节,${chara_talk.name}也来到了训练员室送给了${me.name}亲手制作的巧克力.`,
    );
    era.printButton(`「谢谢」`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `呵呵♪这是昨天晚上我对照着杂志上潮流的巧克力自己试出来的.`,
    );
    await chara_talk.say_and_wait(
      `虽然中途失败了许多次,巧克力的外观也做得不太像杂志封面的样子,不过最后成功做出来的时候心情却十分高兴呢♪`,
    );
    era.printButton(
      `「那我就心怀感激的收下了,谢谢${me.name}${chara_talk.name}」`,
      1,
    );
    await era.input();

    await chara_talk.say_and_wait(`呵呵♪训练员高兴的话就好`);
    await chara_talk.say_and_wait(
      `啊，对了!我听小特${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们说百货大楼有家店铺情人节的时候如果双方是情侣的话拍照打卡可以打六折呢.`,
    );
    await era.printAndWait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }可以和我一起去吗?`,
    );
    era.printButton(`「没问题」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}和${chara_talk.name}来到了百货大楼,在搜素了一点时间后看到了那家店铺.`,
    );
    await era.printAndWait(
      `可能是什么本周的打卡圣地吧,门口排起了长队,看这样子似乎都是情侣.`,
    );
    await chara_talk.say_and_wait(
      `好多人啊,小特${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们果然没有说错呢,应该就是这家了`,
    );
    await era.printAndWait(`那么我们也去排队吧.`);
    await era.printAndWait(
      `${chara_talk.name}非常自然的抱住了${me.name}的胳膊,将整个胸部压在了上面.`,
    );
    await era.printAndWait(
      `体会到巨乳带来的重压的${me.name}感受到了另样的快乐.`,
    );
    await era.printAndWait(`服务员:两位客人是打算购买情侣特惠套餐吗?`);
    await era.printAndWait(
      `服务员:不过因为听说这里有优惠的原因,有很多贪小便宜的顾客过来,导致真正想要买这份套餐的情侣反而买不到呢`,
    );
    await era.printAndWait(
      `服务员:我们也很头疼呢,不过最后店主想到了一个好主意.`,
    );
    await era.printAndWait(`服务员:请二位来一个浪漫的kiss吧.`);
    era.printButton(`「k..kiss?!」`, 1);
    await era.input();

    await era.printAndWait(
      `服务员:接吻不是很浪漫的事情吗?不仅可以表达您对伴侣的爱意,那些贪图小便宜的人听到要接吻也纷纷逃跑了呢.`,
    );
    await era.printAndWait(`服务员:如果是情侣的话没有什么好害羞的吧.`);
    await era.printAndWait(
      `服务员锐利的视线让${me.name}压力越来越大,${me.name}看向${
        chara_talk.name
      }，虽然${
        chara_talk.sex_code - 1 ? '她' : '他'
      }强装着镇定,不过剧烈摆动的尾巴还是出卖了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }.`,
    );
    era.printButton(`「只有这么办了」`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}？`,
    );
    await era.printAndWait(
      `${me.name}搂住了${chara_talk.name}的腰,轻抚${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的脸庞,然后心一横亲了过去.`,
    );
    await era.printAndWait(
      `先是试探性的轻吻,随着气氛的不断高涨${me.name}也加快了速度,炽热的爱意最后化为了重重地深吻.`,
    );
    await era.printAndWait(
      `${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的嘴唇仿佛散发着苹果的芳香,吸引着采撷者的前来.${
        me.name
      }让自己的舌头探进了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的口腔,仔细地探求着每一寸的空间`,
    );
    await era.printAndWait(
      `每当${me.name}想碰碰${chara_talk.sex_code - 1 ? '她' : '他'}的舌头时,${
        chara_talk.sex_code - 1 ? '她' : '他'
      }不好意思退回去的样子却更加刺激了${me.name}的情欲.`,
    );
    await era.printAndWait(`不可以再继续下去了,但${me.name}的动作却无法停下.`);
    await era.printAndWait(
      `在大脑因剧烈的刺激而一片空白时,${me.name}只想将这一刻化为永恒,${me.name}感到了幸福.`,
    );
    await chara_talk.say_and_wait(
      `......${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}`,
    );
    await era.printAndWait(
      `服务员:呜啊,还真是炽热的吻,那么快请进,后面的顾客等不及了.`,
    );
    await era.printAndWait(
      `无暇顾及后面的顾客,${me.name}轻捧着${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的脸颊,仿佛是世间唯一的至宝.`,
    );
    await era.printAndWait(
      `${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的脸颊彻底变得通红,剧烈的心跳通过二人的近距离接触而传到了${
        me.name
      }的身上.`,
    );
    await era.printAndWait(
      `${me.name}握住了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的手,走向了空出来的座位.`,
    );
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `二人沉默着品尝同一份巴菲,颤抖的手臂暗示了主人的不平静`,
    );
    await era.printAndWait(
      `接下来该怎么道歉?${
        chara_talk.sex_code - 1 ? '她' : '他'
      }会不会就此与我断绝关系?恐惧与喜悦在${me.name}的脑海交锋,最后留下的却是`,
    );
    era.printButton(
      `「${chara_talk.name}是否喜欢我,这没关系，但我喜欢${
        chara_talk.sex_code - 1 ? '她' : '他'
      }」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `在经过漫长的折磨后,这份巴菲终于见底了.${me.get_couple_title()}沉默着离开了店铺,走在大街上，掠过河提，最后回到了训练室.`,
    );
    await chara_talk.say_and_wait(
      `呐,${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}.`,
    );
    await era.printAndWait(
      `${me.name}突然发现一路上两人的手紧紧握在一起,下意识想要放开.`,
    );
    await chara_talk.say_and_wait(`再来一个吻吧.`);
    await era.printAndWait(
      `当${me.name}与${chara_talk.name}再次接吻的时候,${me.name}感受了更为炽热的爱意.`,
    );
    await era.printAndWait(`今天的情人节让${me.name}难以忘怀.`);
  } else if (edu_weeks === 95 + 14) {
    // 粉丝感谢祭是四月第二周，不是二月第二周
    await print_event_name('粉丝感谢祭', chara_talk);
    await era.printAndWait(
      `今天是粉丝感谢祭,是${chara_talk.get_uma_sex_title()}们为感谢粉丝们的支持进行表演的日子.`,
    );
    await era.printAndWait(
      `特雷森学院的各个地方都举行着由${chara_talk.get_uma_sex_title()}准备的活动.`,
    );
    await era.printAndWait(
      `难得空闲下来的${me.name}也趁着这个机会到处走动,充分放松自己积累下来的压力.`,
    );
    await era.printAndWait(
      `${chara_talk.name},作为${
        me.name
      }的担当${chara_talk.get_uma_sex_title()},现在正观看着后辈们的表演.`,
    );
    await era.printAndWait(
      `听到来者的脚步声,下意识扭头望去,向${me.name}露出了温柔的微笑.`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }也是来看${chara_talk.get_uma_sex_title()}们的表演吗?`,
    );
    era.printButton(`「点头」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}在${
        chara_talk.name
      }身边站定,看着眼前舞台上的${chara_talk.get_uma_sex_title()}们努力着展现着自己最美好的一面.`,
    );
    await chara_talk.say_and_wait(
      `后辈们看上去都活力四射的样子呢,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }也是这么想的吗?`,
    );
    era.printButton(
      `「${chara_talk.sex_code - 1 ? '她' : '他'}们都是因为憧憬着${
        chara_talk.name
      },希望能超越${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的背影所以才拼命努力的」`,
      1,
    );
    await era.input();
    await chara_talk.say_and_wait(
      `哎呀♪${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }每次都能带给我意外的惊喜呢.`,
    );
    await chara_talk.say_and_wait(
      `那么,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },想看我上台表演吗?`,
    );
    await era.printAndWait(
      `${chara_talk.name}的尾巴不知不觉间缠绕住了${me.name}的大腿,所幸周围的观众被舞台之上的气氛所点燃没有注意到这边的小小动作.`,
    );
    await era.printAndWait(
      `${chara_talk.name}似乎是察觉到了${me.name}的软肋,更加肆无忌惮的将整个身体贴在了${me.name}的手臂上.`,
    );
    era.printButton(`「${chara_talk.name}」`, 1);
    await era.input();

    await era.printAndWait(
      `因为害怕两人之间传出不好的传闻而影响到${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的前途还有${me.name}被解雇的未来,${me.name}的身体瞬间僵直了.`,
    );
    await chara_talk.say_and_wait(`训·练·员·君♪`);
    await era.printAndWait(
      `${me.name}似乎觉得周围的目光都在看着${me.name},${me.name}开始觉得口干舌燥.`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }的这种反应看起来也很可爱呢.虽然很可惜,不过差不多轮到我上台演出了,请不要将视线从我这里移开哦.`,
    );
    await era.printAndWait(
      `再回神时${chara_talk.sex_code - 1 ? '她' : '他'}已经站在舞台之上了.`,
    );
    await era.printAndWait(
      `${me.name}连忙向周围的游客借了一份荧光棒,跟随着粉丝的浪潮开始舞动起来.`,
    );
    await chara_talk.say_and_wait(
      `享受着风,追逐着风的赛${chara_talk.get_uma_sex_title()},${
        chara_talk.name
      },现在将向粉丝还有后辈们献上我的歌曲.`,
    );
    await era.printAndWait(
      `那天一首复古的流行歌曲响起,在下面欢呼的粉丝们永远不会知道,这是为一人所唱的恋曲.`,
    );
    era.set('cflag:4:节日事件标记', 0);
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:位置') !== location_enum.beach ||
      era.get('cflag:4:位置') !== era.get('cflag:0:位置')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('夏季合宿开始', chara_talk);
    await era.printAndWait(
      `第三年的夏季合宿现在正式开始，带着与去年截然不同的心态，${me.name}和${chara_talk.name}一起走向了沙滩.`,
    );
    await chara_talk.say_and_wait(
      `呵呵♪今年也是把其他人都甩在身后了呢,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }.`,
    );
    await era.printAndWait(
      `身边的爱马依然喜欢抢在其他${chara_talk.get_uma_sex_title()}的前头到达沙滩。`,
    );
    await me.say_and_wait(`${chara_talk.name}看上去心情不错啊`);
    await chara_talk.say_and_wait(
      `啊啦,这不是当然的嘛，必须要把去年没有好好享受的青春今年全部弥补回来嘛.`,
    );
    await era.printAndWait(
      `${chara_talk.name}似乎准备了黑色的泳装,配合${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的身材似乎显得额外充满了魅力.`,
    );
    await me.say_and_wait(
      `平时的${chara_talk.name}一直喜欢睡懒觉，今天反而是${
        chara_talk.sex_code - 1 ? '她' : '他'
      }来叫我起床的.`,
    );
    await chara_talk.say_and_wait(
      `总之现在是好好享受集训时光的时间了!不过还是先把防晒霜涂好比较重要吧?`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}可以麻烦${
        me.name
      }帮我涂下防晒霜吗?不然${me.name}喜欢的肌肤就要被太阳晒成棕色了。`,
    );
    era.printButton(`我马上就过来`, 1);
    await era.input();
    await era.printAndWait(`夏季集训就在这种轻松的气氛中开始了.`);
  } else if (edu_weeks === 95 + 48) {
    await print_event_name('圣诞节', chara_talk);
    await era.printAndWait(
      `圣诞节到了,因为与${chara_talk.name}的约定,${me.name}将最后一份工作完成后便匆匆前往约定的场所。`,
    );
    await era.printAndWait(
      `在打了辆的士到达约定的榉树林荫道附近时,${me.name}看了眼手机,比约定的时间还要早30分钟。`,
    );
    era.printButton(`「(时间看来还很充足)」`, 1);
    await era.input();

    await era.printAndWait(
      `心中大定的${me.name}放慢了匆忙的脚步,但过去的回忆却如冒烟的炉火一般慢慢升起.`,
    );
    await era.printAndWait(
      `去年和${chara_talk.name}为了躲避粉丝们的合围慌不择路恰巧发现了这条小径.`,
    );
    await era.printAndWait(
      `当时的${
        chara_talk.sex_code - 1 ? '她' : '他'
      }似乎很开心的样子....不对,与以往在赛场之上不同,那是另一种的快乐.`,
    );
    await era.printAndWait(
      `似乎为了和我一起享受奔跑的快乐故意放慢了脚步,当时的我大脑一片空白.`,
    );
    await era.printAndWait(`还有情人节那次的接吻,粉丝感谢祭时的亲密接触...`);
    await era.printAndWait(`实际上.....`);
    await chara_talk.say_and_wait(`吓!`);
    await era.printAndWait(
      `似乎为了吓${me.name}一跳,${chara_talk.name}从${me.name}左手边的一棵榉树后突然冒了出来,那抹红色的身影在白雪的衬托下显得格外的耀眼.`,
    );
    era.printButton(`「唔啊啊啊啊」`, 1);
    await era.input();

    await era.printAndWait(
      `面对突然从视野中窜出来的${chara_talk.get_teen_sex_title}(?),${me.name}成功地被吓了一跳.`,
    );
    await chara_talk.say_and_wait(`嗯♪看来这次作战大成功呢.`);
    era.printButton(`「${chara_talk.name}这样突然蹿出来太吓人了」`, 1);
    await era.input();

    await era.printAndWait(
      `去年与${chara_talk.name}约定在这条榉树林荫道上见面,但没想到${
        chara_talk.sex_code - 1 ? '她' : '他'
      }这么活泼.`,
    );
    await era.printAndWait(
      `虽然一直以成熟的${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }自居,不过在${me.name}面前也开始展现出了${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的另一面.`,
    );
    await chara_talk.say_and_wait(
      `虽说也有我按捺不住兴奋的心情提前了一个小时到这里太无聊心血来潮的缘故.`,
    );
    await chara_talk.say_and_wait(
      `不过${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }被吓成这样真可爱呢♪`,
    );
    era.printButton(`「${chara_talk.name}!!!」`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `呵呵♪${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}来抓我啊.`,
    );
    era.printButton(`「别跑！」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.get_couple_title()}像小孩子一样追逐嬉戏,恍惚间回到了童年时期无忧无虑.`,
    );
    era.printButton(`「真快乐啊」`, 1);
    await era.input();

    await era.printAndWait(
      `所幸这条小道上来往的人数不多而且都是像${me.get_couple_title()}这样的情侣`,
    );
    await era.printAndWait(
      `${chara_talk.name}姑且不论,但${
        me.name
      }现在也没有小孩子那种活力了,只能喘着粗气扶着树干看着${
        chara_talk.sex_code - 1 ? '她' : '他'
      }.`,
    );
    await chara_talk.say_and_wait(`哼哼♪这场游戏是我赢了.`);
    await chara_talk.say_and_wait(`作为胜利者,训练员要接受我一个条件.`);
    era.printButton(`「等下有这回事吗」`, 1);
    await era.input();

    await chara_talk.say_and_wait(`今天晚上和我约会吧.`);
    await chara_talk.say_and_wait(
      `和我这样潮流的美${chara_talk.get_teen_sex_title}约会的话可是千载难逢的机会哦.`,
    );
    await chara_talk.say_and_wait(
      `不知${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}意下如何呢?`,
    );
    era.printButton(`「.....」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}正打算回答的时候,肚子却不争气的叫了起来.`,
    );
    await chara_talk.say_and_wait(
      `呵呵,${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }看来是饿了呢,那么我们就先去吃一点东西再出发吧.`,
    );
    await era.printAndWait(
      `${me.name}再次坐在了副驾驶上,熟悉的感觉令${me.name}无比安心.`,
    );
    await era.printAndWait(
      `${
        chara_talk.sex_code - 1 ? '她' : '他'
      }插上钥匙后发动引擎,重低音的引擎轰鸣声响彻了寂静的公园.`,
    );
    await era.printAndWait(
      `${me.get_couple_title()}在萨莉亚一起吃了稍微丰盛一点的晚餐.`,
    );
    await era.printAndWait(
      `相较于独自一人的默默咀嚼,有${chara_talk.name}的陪伴下食物看起来更加美味了.`,
    );
    await chara_talk.say_and_wait(`OK,我在小塔上等${me.name}.`);
    await era.printAndWait(
      `${me.name}让${chara_talk.name}先回到小塔上等候,自己先去前台付账.`,
    );
    await era.printAndWait(
      `伴随着引擎的再度轰鸣,${me.get_couple_title()}出发前往今天最后一个目的地.`,
    );
    await era.printAndWait(
      `${me.name}熟练地触碰着安装在车内面板的播放音乐,然后靠在座椅上享受着音乐.`,
    );
    await era.printAndWait(`等红绿灯转过后,小塔爬上了斜坡.`);
    await era.printAndWait(
      `上了高速公路后跑车开始一路加速,两旁飞速倒退的路灯使${me.name}仿佛置身于时光隧道之中.`,
    );
    await era.printAndWait(
      `在经历最初的不适后,${me.name}慢慢适应了${chara_talk.name}的速度.`,
    );
    await era.printAndWait(
      `音乐引诱${me.name}逃离时间，呼吸促使${me.name}释放时间.`,
    );
    await era.printAndWait(
      `${me.name}转过头看着${chara_talk.name},恰巧窥见${
        chara_talk.sex_code - 1 ? '她' : '他'
      }将视线收回的一瞬间.`,
    );
    await era.printAndWait(`之后除了音响中放出的柔和音乐外,沉默降临了此处.`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },已经到山顶了呦.`,
    );
    await era.printAndWait(
      `这是这座城市附近最高的山峰,从山顶向下望去,可以将整座城市收入眼底.`,
    );
    await era.printAndWait(
      `寒冷的空气带走了肺中残存的温暖,刺激着心脏的激烈跳动.`,
    );
    await era.printAndWait(
      `${me.name}看向了身旁的${
        chara_talk.sex_code - 1 ? '她' : '他'
      },那双轻松的,明亮的眸子,带着闪闪发光的样子看着沉浸于节日庆典的城市.`,
    );
    era.printButton(`「${me.name}的眼睛真美丽呢」`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `呵呵♪${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }是想和我调情吗?`,
    );
    await era.printAndWait(
      `${chara_talk.name}将视线收回,然后再度将视线望向了${me.name}.`,
    );
    await chara_talk.say_and_wait(
      `人们常说眼睛是心灵的窗户,那么在${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }看来,我又是什么样的呢?`,
    );
    await me.say_and_wait(`「些许感伤的温柔又美丽的眼睛」`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }又是想到了什么发出这份感慨呢?`,
    );
    await me.say_and_wait(`「那双温柔的眼睛一直在注视着后辈们」`);
    await me.say_and_wait(`「虽然会因为快乐的时间不会一直持续下去而感伤」`);
    await me.say_and_wait(
      `「但因为坚信着后辈们会带来更加耀眼的光芒而感到快乐」`,
    );
    await me.say_and_wait(`「像是夏天万里无云的晴空一样」`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }是不是对我评价过高了呢?而且现在是冬季呢.`,
    );
    await me.say_and_wait(
      `「没有人会小看那份温柔的力量,因为那归根结底可以算作爱.」`,
    );
    await me.say_and_wait(`「只有温柔的爱才能治愈人们心中的创伤.」`);
    await me.say_and_wait(
      `「为回应那份爱而努力追逐着背影的孩子们所散发出的火焰,即使是冬天也能感受到和夏天一样的温暖」`,
    );
    await chara_talk.say_and_wait(
      `如果注视着孩子们的背影的话,明天也会是一个温暖的晴天吧.`,
    );
    await chara_talk.say_and_wait(
      `我能遇见${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }真是太好了♪`,
    );
    await chara_talk.say_and_wait(
      `......${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      },可以让我任性一回吗?`,
    );
    era.printButton(`「如果是${me.name}的愿望的话,请说吧」`, 1);
    await era.input();
    await chara_talk.say_and_wait(`可以吻我吗?`);
    await era.printAndWait(
      `${me.name}搂住了${chara_talk.name}的腰肢,轻轻拨弄着发梢.`,
    );
    await era.printAndWait(`长达10秒钟的接吻,却是一生之中难忘的一段回忆.`);
    await era.printAndWait(
      `随后两者分开,${chara_talk.name}的眼泪慢慢滑落脸颊.`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'},我爱${
        me.name
      }.`,
    );
    era.printButton(`「我也爱${me.name}」`, 1);
    await era.input();
    await era.printAndWait(
      `随着时钟指向12点,二人在烟花的烘托下紧紧抱在了一起.`,
    );
  } else if (event_marks.girls_dream === 1) {
    event_marks.girls_dream++;
    await print_event_name(`梦的未来`, chara_talk);
    await era.printAndWait(
      `三年以来，${me.name}与${chara_talk.name}互相依靠，在之后的ura比赛取得了优胜。`,
    );
    await era.printAndWait(`在这之后————`);
    await say_by_passer_by(
      `路人${chara_talk.get_uma_sex_title()}A`,
      `${chara_talk.name}${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }，这次的GIII我按照${me.name}教的方法真的胜利了！`,
    );
    await say_by_passer_by(
      `路人${chara_talk.get_uma_sex_title()}B`,
      `原来还有这种解决方法吗？不愧是丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }`,
    );
    await say_by_passer_by(
      `路人${chara_talk.get_uma_sex_title()}C`,
      `多亏了丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }的技巧，现在和训练员${me.get_adult_sex_title()}也相处的很好了。`,
    );
    await chara_talk.say_and_wait(
      `呵呵~我的建议能够帮上后辈们的忙也是太好了！`,
    );
    await era.printAndWait(`今天的${chara_talk.name}也在给予后辈们建议。`);
    await say_by_passer_by(
      `路人${chara_talk.get_uma_sex_title()}A`,
      `${chara_talk.name}${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }的训练员${me.get_adult_sex_title()}来了！`,
    );
    await era.printAndWait(
      `被${chara_talk.get_uma_sex_title()}们围在中间的${
        chara_talk.name
      }注意到了${me.name}的存在。`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}！`,
    );
    await era.printAndWait(
      `${chara_talk.name}将饱满的胸部整个压在了${me.name}的肩膀上。`,
    );
    await say_by_passer_by(
      `路人${chara_talk.get_uma_sex_title()}B`,
      `呜哇，这个是？`,
    );
    await say_by_passer_by(
      `路人${chara_talk.get_uma_sex_title()}C`,
      `丸善${era.get('cflag:4:性别') - 1 ? '学姐' : '学长'}和${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的训练员今天也是非常恩爱呢。`,
    );
    era.printButton(`${chara_talk.name}今天也在给予后辈们建议吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `嗯嗯，已经有两个小时没看到${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }了，${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我真的好寂寞呢~`,
    );
    await chara_talk.say_and_wait(`作为补偿的话，今天下午和我一起约会吧♪`);
    era.printButton(`其实我也因为好~久没看到${chara_talk.name}所以不安了`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }果然一直想着我呢，那么惯例的——`,
    );
    await era.printAndWait(`二人在训练场上紧紧地抱在了一起。`);
    await chara_talk.say_and_wait(
      `果然还是最喜欢${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }了呢⭐`,
    );
  } else if (event_marks.gentle_wind === 1) {
    event_marks.gentle_wind++;
    await print_event_name(`温柔之风吹拂在整个世界`, chara_talk);
    await era.printAndWait(
      `在与${chara_talk.name}经历了难以忘怀的三年之后，夺得了URA奖杯`,
    );
    await era.printAndWait(`接下来要挑战的就是全新的闪耀系列赛了`);
    await era.printAndWait(`不过在此之前。`);
    await say_by_passer_by(`浄风幸`, `呦，好久不见了。`);
    await say_by_passer_by(
      `浄风幸`,
      `连以霸道著称的皇帝也击败了吗？一代传奇就这么落幕了，真是唏嘘啊。`,
    );
    await era.printAndWait(
      `暂时不管在回忆之中的他，身旁的${chara_talk.get_uma_sex_title()}开口了。`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `在见过那场比赛之后，深刻了解了丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }的愿望之后，在闪耀系列中，我一定会超越${
        chara_talk.sex_code - 1 ? '她' : '他'
      }的背影！`,
    );
    await say_by_passer_by(
      `${chara_talk.get_uma_sex_title()}`,
      `不过在此之前，丸善${
        era.get('cflag:4:性别') - 1 ? '学姐' : '学长'
      }在天台似乎有话对${me.name}说`,
    );
    await era.printAndWait(`浄风幸被他的担当强拉着带走了。`);
    await me.say_and_wait(`接下来就是去见${chara_talk.name}了吗？`);
    await me.say_and_wait(`有点紧张啊。`);
    era.drawLine({ content: '天台' });
    await era.printAndWait(`拉开天台的大门。`);
    await me.say_and_wait(`好像${chara_talk.name}不在啊？`);
    await era.printAndWait(`除了一阵微风吹过，天台之上再无人影。`);
    await chara_talk.say_and_wait(`猜猜我是谁？`);
    await era.printAndWait(
      `${me.name}的视线被一双手所覆盖，熟悉的味道立刻让${me.name}意识到了来者的身份。`,
    );
    await me.say_and_wait(`${chara_talk.name}`);
    await era.printAndWait(
      `原以为自己会激动的大喊出来，但此刻的声音平稳的自己都有些怀疑。`,
    );
    await chara_talk.say_and_wait(
      `不愧是${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }呢，一下子就猜出了我是谁。`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我从没有这么喜欢过一个人呢♪`,
    );
    await chara_talk.say_and_wait(`这就是所谓的爱吗♪`);
    era.printButton(`${chara_talk.name}我有话想对${me.name}说，所以`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `哼哼~${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}想对${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }撒娇吗？`,
    );
    await chara_talk.say_and_wait(`不管是什么恶......`);
    era.printButton(`请跟我永远生活在一起`, 1);
    await era.input();
    await era.printAndWait(
      `在${chara_talk.name}一脸难以置信的神情之中，${
        me.name
      }将象征着誓约的戒指递给了${chara_talk.sex_code - 1 ? '她' : '他'}。`,
    );
    era.printButton(`比起理想，比起赛跑，我更在乎的其实是${me.name}`, 1);
    await era.input();
    era.printButton(`所以请接受我的爱意吧`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `这下的话，不对这份爱意抱以同样的回应的话，我可是没脸去见三女神呢。`,
    );
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }，不止在赛跑上，今后的生活也请多多指教了。`,
    );
    era.printButton(`我也是，今后也请多多指教了`, 1);
    await era.input();
    await era.printAndWait(
      `誓约之吻是什么味道的？咸的？还是带有一丝甜味？此刻都没眼前心醉的${chara_talk.get_teen_sex_title}更加重要。`,
    );
    await era.printAndWait(
      `${me.name}与${chara_talk.name}之间的命运在经历错综复杂的结果之后终于得到了馈赠。`,
    );
    await era.printAndWait(
      `${
        chara_talk.name
      }的奔跑带给了赛${chara_talk.get_uma_sex_title()}们勇气与希望。`,
    );
    await era.printAndWait(
      `赛${chara_talk.get_uma_sex_title()}们今后也会一直追逐着${
        chara_talk.name
      }的背影然后超越${chara_talk.sex_code - 1 ? '她' : '他'}吧。`,
    );
    await chara_talk.say_and_wait(
      `比起获胜的话，能让更多的${chara_talk.get_uma_sex_title()}们感受到希望的存在才是我的理想♪`,
    );
    await chara_talk.say_and_wait(
      `接下来的日子里，在草场的一端默默地注视着赛${chara_talk.get_uma_sex_title()}们，然后引导${
        chara_talk.sex_code - 1 ? '她' : '他'
      }们前往伊甸园便是我新的使命了。`,
    );
    await chara_talk.say_and_wait(
      `不过此刻的话，能和${
        era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'
      }甜甜蜜蜜的生活在一起才是最幸福的ge呢♪`,
    );
    await era.printAndWait(
      `引导着处于迷茫时期${chara_talk.name}的${
        me.name
      }与引导着迷茫${chara_talk.get_uma_sex_title()}的${
        chara_talk.name
      }最终将化为温柔之风吹拂于赛${chara_talk.get_uma_sex_title()}的世界之中。`,
    );
    await era.printAndWait(
      `就这样，二人的故事暂且迎来的结局，可喜可贺可喜可贺。`,
    );
  }
  wait_flag && (await era.waitAnyKey());
};
