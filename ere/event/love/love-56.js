const era = require('#/era-electron');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

const { add_event } = require('#/event/queue');
const add_juel_out_of_train = require('#/event/snippets/add-juel-out-of-train');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,

  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
/**
 * 待兼福来 - 爱慕
 *
 * @author ALEX
 */

/** @param {CharaTalk} chara_talk*/

async function love_49(chara_talk) {
  const me = get_chara_talk(0);
  await print_event_name('爱欲', chara_talk);
  era.drawLine({ content: `待兼福来的宿舍` });
  await me.print_and_wait([
    `某个晚上，躺在床上的`,
    chara_talk.get_colored_name(),
    `，得意洋洋地思考起今天是如何通过占卜来解决了同学疑惑的。`,
  ]);
  await chara_talk.say_and_wait(
    `说起来，最近大家的占卜好像有不少都是关于恋爱的。`,
    true,
  );
  await chara_talk.say_and_wait(`嘿嘿，我可真是个恋爱达人呢。`, true);
  await chara_talk.say_and_wait(`欸……恋爱吗？`, true);
  await chara_talk.say_and_wait(`话说，我还没占卜过自己的恋爱运势呢……`, true);
  await chara_talk.say_and_wait(`……${me.actual_name}`, true);
  await chara_talk.print_and_wait(
    `只是想到这个话题，自己训练员的身影就出现在脑海里。`,
  );
  await chara_talk.print_and_wait(
    `训练时的样子，和自己一起占卜的样子，还有帮自己解签的样子。`,
  );
  await chara_talk.print_and_wait(
    `明明平时都没什么特别的感觉，但是现在想起，每一处细节都颇为清晰。`,
  );
  await chara_talk.print_and_wait(
    `在擦汗的时候拂过脖颈的手指，按摩时触碰自己脚底的温暖掌心，乃至对自己施以铁抓时掠过耳根的刺激感觉。`,
  );
  await chara_talk.print_and_wait(
    `舍友应该已经进入了梦乡,甚至还有轻微的呼噜声传来。`,
  );
  await chara_talk.print_and_wait(
    `但自己依旧辗转反侧，难以入眠，小腹处更是微微发热`,
  );
  await chara_talk.print_and_wait(
    `掀开被子，渗出些许细汗的双腿已经黏糊糊的并拢在了一起，让膝侧的软肉互相蹭弄着。`,
  );
  await chara_talk.say_and_wait(`呼……`);
  await chara_talk.say_and_wait(`还是来占卜一下吧。`);
  await chara_talk.print_and_wait(`伸手摸出了自己放在床头的塔罗牌，`);
  await chara_talk.say_and_wait(`简单抽一张吧……`);
  era.println();
  era.printButton('（星星 正位）（升级关系）', 1);
  era.printButton('（世界 逆位）（暂停升级）', 2);
  const ret = await era.input();
  if (ret === 1) {
    await chara_talk.say_and_wait(`凭心意顺势而行吗？`);
    await chara_talk.say_and_wait(`欸嘿，也是理所应当呢！`);
    await chara_talk.say_and_wait(`毕竟是认定了的命运之人呢!`);
    await chara_talk.say_and_wait(`唔……`);
    await chara_talk.print_and_wait(`更是燥热难耐。`);
    await chara_talk.print_and_wait(
      `在本就确定的答案通过了占卜的肯定之后，刚刚还捏着塔罗牌的右手，不知何时已经伸入睡衣，抚在了自己的胸前。`,
    );
    await chara_talk.print_and_wait(
      `指尖划过侧乳，另一手配合的微微按压了一下小腹，而后中指与食指并拢，探入了已经湿热的内裤中。`,
    );
    await chara_talk.say_and_wait(`啊！`);
    await chara_talk.print_and_wait(
      `先是因为生涩带来的短暂钝痛，而后是因为逐渐熟练起来的酥麻快感。`,
    );
    await chara_talk.print_and_wait(
      `抿着唇以不让熟睡的室友发觉，但因快感而失控深入的手指还是带来了止不住的低吟。`,
    );
    await chara_talk.say_and_wait(`${me.actual_name}……呜……`);
    await chara_talk.print_and_wait(
      `回忆起和训练员先生握手时,有些粗糙的食指,想象着那根食指在插入自己体内的时候会怎样毫不留情的对待自己。`,
    );
    await chara_talk.print_and_wait(
      `刮蹭，摩擦，挑逗，直到最后的痉挛，狠狠的惩罚自己这个会对训练员发情的失格担当。`,
    );
    await chara_talk.say_and_wait(`${me.actual_name}！`);
    await chara_talk.say_and_wait('嗯！！！');
    await chara_talk.print_and_wait(
      `全身颤抖不停，素白色的内裤被喷出的爱液弄的泥泞不堪。`,
    );
    await chara_talk.say_and_wait(`欸嘿……喜欢……`);
    era.println();
    await sys_love_uma_in_event(56);
  } else {
    await chara_talk.say_and_wait(`唉……`);
    await chara_talk.say_and_wait(`暂时的停滞吗……`);
    await chara_talk.print_and_wait([
      `强忍着躁动的身体，`,
      chara_talk.get_colored_name(),
      `用被子蒙上了头。`,
    ]);
    await chara_talk.print_and_wait([
      `但第二天早上,已经湿透了的内裤,因发情而挺立的乳头,说明了`,
      chara_talk.get_colored_name(),
      `的梦境并不像她期望的那样安宁。`,
    ]);
    era.println();
    era.set('status:56:熬夜', 1);
    era.set('cflag:56:爱慕暂拒', 49);
    sys_change_motivation(56, -1);
  }
  await era.waitAnyKey();
}

async function love_74(chara_talk, event_object) {
  const me = get_chara_talk(0);
  await print_event_name(`热恋`, chara_talk);
  era.drawLine({ content: `${me.actual_name}的办公室` });
  await chara_talk.print_and_wait(
    `结束了日常训练，和${me.actual_name}训练员一起回到了办公室。`,
  );
  await chara_talk.print_and_wait(
    `接过了训练员递来的水杯，本想要大口畅饮，却又在训练员的制止下小口小口的吞咽了起来。`,
  );
  await chara_talk.print_and_wait(
    `在训练员拿起毛巾的时候，配合的伸出头，假装不经意地拉开运动外套的拉链，将那对在湿透的衬衫下若隐若现的巨乳示给训练员。`,
  );
  await chara_talk.print_and_wait(
    `见到训练员有些不自在的扭过头去，又故意握住他的胳膊询问起下一步的训练计划。`,
  );
  await chara_talk.print_and_wait(`暧昧的气氛就不断在办公室中蔓延开来。`);
  await chara_talk.print_and_wait(
    `虽然最后往往会因为过于没有距离感的动作而遭到训练员的铁爪攻击。`,
  );
  await chara_talk.print_and_wait(`……`);
  await chara_talk.print_and_wait(
    `最初遇见训练员的自己是抱着一个怎样的心态呢？`,
  );
  await chara_talk.print_and_wait(`犹如将死之人抓住了唯一可见的救命稻草？`);
  await chara_talk.print_and_wait(`抓住船骸的奥德修斯？`);
  await chara_talk.print_and_wait(`因食用灵芝草而免于死亡的神农？`);
  await chara_talk.print_and_wait(`甚至是，遇见了素戋呜尊的天照大神？`);
  era.printButton('「阿福,我去交一下材料，你先休息一会儿吧……」', 1);
  await era.input();
  await chara_talk.print_and_wait([
    `自原本甜腻的气氛中被拽出，留给`,
    chara_talk.get_colored_name(),
    `的只剩下一片空虚。`,
  ]);
  await chara_talk.print_and_wait(
    `瘫坐在搭着训练员外套的座椅上，呆呆地凝视着空无一人的办公室。`,
  );
  await chara_talk.print_and_wait(
    `灵摆，骰子，琥珀，在通过各种借口送给训练员的占卜道具中,塔罗牌自然也在其中。`,
  );
  era.println();
  era.printButton('（恋人 正位）（升级关系）', 1);
  era.printButton('（月亮 正位）（暂停升级）', 2);
  const ret = await era.input();
  if (ret === 1) {
    await chara_talk.print_and_wait(`毫不意外。`);
    await chara_talk.say_and_wait(`喜欢……`);
    await chara_talk.say_and_wait(`喜欢训练员……`);
    await chara_talk.print_and_wait([
      `即使在重复了好几遍之后，自己还在呢喃着`,
      me.get_colored_actual_name(),
      `的名字，宣告了自己的参拜路上被这个${me.get_phy_sex_title()}闯入的事实。`,
    ]);
    await chara_talk.print_and_wait(
      `被心爱之人的气味包围，理应在脱离训练状态后逐渐冷却下来的身体，却在这个时候变得更加炽热。`,
    );
    await chara_talk.say_and_wait(`哈……呼呼……`);
    await chara_talk.print_and_wait([
      `把椅背上的外套袖口抵在鼻尖，一边伸手探入不知是否因为汗水而再次变得濡湿的内裤中。`,
    ]);
    await chara_talk.say_and_wait(`${me.actual_name}……`);
    await chara_talk.print_and_wait([
      `喊着训练员先生的名字，用手指在变得黏糊糊的小穴内翻搅着穴肉。`,
    ]);
    await chara_talk.say_and_wait([`${me.actual_name}……${me.actual_name}~❤`]);
    await chara_talk.print_and_wait([
      `衔着充满着 `,
      me.get_colored_actual_name(),
      ` 的气味的外套，急促的喘息着，嘴角滴答的流下了涎水。`,
    ]);
    await chara_talk.print_and_wait([
      `难以满足般的，让手指对穴道的翻弄插玩愈发激烈，直到在某一次抽插中，迷离的橙色双瞳微胀，反弓起身子。`,
    ]);
    await chara_talk.say_and_wait(`唔❤……咿咿咿❤! ! !`);
    await chara_talk.print_and_wait(
      `本就不是为了吸水而设计的运动长裤没有拦住泄出的爱液，就这样在办公室的椅子上留下了一片湿痕。`,
    );
    await chara_talk.print_and_wait([
      `来自 `,
      chara_talk.get_colored_name(),
      ` 的这样一个下流马娘的，糟糕的气味充满了整间办公室。`,
    ]);
    await chara_talk.print_and_wait(`该怎么办呢？训练员先生一定会发现的吧。`);
    era.println();
    era.printButton('（推开门）', 1);
    await era.input();
    await me.print_and_wait([
      ``,
      me.get_colored_name(),
      `见 `,
      chara_talk.get_colored_name(),
      ` 正有些局促不安的向`,
      me.get_colored_name(),
      `道起歉来。`,
    ]);
    await chara_talk.say_and_wait(`啊啊啊！训练员先生！非常抱歉！`);
    await chara_talk.say_and_wait(`只是想给你泡一杯咖啡！`);
    await me.print_and_wait([
      ` `,
      chara_talk.get_colored_name(),
      ` 的几乎被咖啡淋遍的下半身衣物，正如同样湿透的座椅与外套一被起马娘的体温加热后散发出咖啡的香气。`,
    ]);
    era.printButton('「没事吧？」', 1);
    await era.input();
    await chara_talk.say_and_wait(`……没……没事。`);
    await me.print_and_wait([
      `幸好那个时候的咖啡已经凉了，不然`,
      chara_talk.get_colored_name(),
      `被烫伤就不好了。`,
    ]);
    sys_change_motivation(56, 1);
    add_event(event_hooks.back_school, event_object);
  } else {
    await chara_talk.say_and_wait(`唉……`);
    await chara_talk.say_and_wait(
      `在占卜时，月亮出现，经常表示当事人感到不安、迷惑与恐惧，可能是面对未来的迷惘，或是面对陌生情况的不安。`,
    );
    await chara_talk.print_and_wait(`怀有恐惧，没有信心，不安而情绪化。`);
    await chara_talk.print_and_wait(
      `这样的自己，是不是根本就不配拥有训练员的爱呢？`,
    );
    era.set('cflag:56:爱慕暂拒', 74);
  }
  await era.waitAnyKey();
  return true;
}

/** @param {CharaTalk} chara_talk */
async function love_74_back_school(chara_talk) {
  const me = get_chara_talk(0);

  await print_event_name('告白', chara_talk);

  era.drawLine({ content: `${me.actual_name}的自宅` });
  await me.print_and_wait(`咚，咚，咚`);
  await chara_talk.say_and_wait(`训练员!`);
  await me.print_and_wait([
    `如往常一样，叫做${chara_talk.name}的少女再次敲响了`,
    me.get_colored_name(),
    `家的门口。`,
  ]);
  await me.print_and_wait(`对，不是${me.name}办公室，或者在特雷森宿舍的门。`);
  await me.print_and_wait([
    `最开始，只是因为代她保管那些开运道具，才让她知道了`,
    me.get_colored_name(),
    `的住址。`,
  ]);
  await me.print_and_wait([
    `在那之后，不只是开运道具，而是单纯为了请教训练计划，或是要求出去玩，甚至只是因为‘今天是大吉’这样虚无缥缈理由而来找 `,
    me.get_colored_name(),
    `。`,
  ]);
  await me.print_and_wait(`多备了一双拖鞋,一只杯子,一对碗筷。`);
  await me.print_and_wait([
    `名叫${me.actual_name}的训练员生活中已经充满了`,
    chara_talk.get_colored_name(),
    `的痕迹。`,
  ]);
  await me.print_and_wait(`咚，咚，咚`);
  await chara_talk.say_and_wait(`训练员！你在吗？`);
  await me.print_and_wait([
    `看来`,
    chara_talk.get_colored_name(),
    `等着有些不耐烦了。`,
  ]);
  era.printButton('(开门）', 1);
  await era.input();
  await me.print_and_wait([
    `假设有一位和`,
    me.get_colored_name(),
    `没有血缘关系的异性。`,
  ]);
  await me.print_and_wait([
    `天天黏着`,
    me.get_colored_name(),
    `，还能自由的出入`,
    me.get_colored_name(),
    `家的房门，明明工作日的时都住在学院的宿舍，出门却得非常有仪式感的约在外面见面，那么两人可能会是什么关系呢？`,
  ]);
  await me.print_and_wait([``, me.get_colored_name(), `打开了门`]);
  await chara_talk.say_and_wait(`训练员！`);
  await me.print_and_wait([
    `门口是身着决胜服的`,
    chara_talk.get_colored_name(),
    ``,
  ]);
  await me.print_and_wait(`蓝白色的水手服衬出了她姣好的身材。`);
  await me.print_and_wait(
    `可能是由于跑过来的缘故，裸露在外的双肩遍布着细密的汗珠。`,
  );
  await me.print_and_wait(
    `其下只是贴了乳贴的诱人胸部，在洁白的衣物上撑出明显的形状，在呼吸间上下起伏着。`,
  );
  await me.print_and_wait([
    `作为训练员的 `,
    me.get_colored_name(),
    ` 知道，赛马娘们只有在极为重要的场合才会穿上这样的服装。`,
  ]);
  await chara_talk.say_and_wait(`那个……`);
  await chara_talk.say_and_wait(`不邀请我进来吗？`);
  await me.print_and_wait([
    `她抬起头望着 `,
    me.get_colored_name(),
    `，橙黄色的双眸已经蒙上了一层湿润的雾气。`,
  ]);
  await me.print_and_wait(
    `而后是用餐时，故意仰头吞咽的动作，让她因拉扯而紧绷的水手服下沉甸甸的乳球更为突出。`,
  );
  await me.print_and_wait(
    `再到饭后娱乐时，坐在沙发上的她交叠摩挲着白丝双腿，带动着腰侧系着的绘马在碰撞间发出响声。`,
  );
  await me.print_and_wait([
    `已是深夜，`,
    chara_talk.get_colored_name(),
    `仍然没有提出回去的要求，房间内陷入尴尬的沉默。`,
  ]);
  await chara_talk.say_and_wait(`${me.actual_name}……`);
  await me.print_and_wait([
    `喊出了 `,
    me.get_colored_name(),
    ` 的名字，`,
    chara_talk.get_colored_name(),
    `走到了${me.name}的身边坐下。`,
  ]);
  await chara_talk.say_and_wait(`那个，训练员先生能看出来的吧……喜欢…… `);
  await chara_talk.say_and_wait(
    `明明给你添了那么多的麻烦，却还是愿意陪着我追着运势跑下去……`,
  );
  await chara_talk.say_and_wait(`很温暖呢……给我带来了那么多的好运气。`);
  await chara_talk.say_and_wait(`所以，如果不介意的话，让我也回报一下你吧……`);
  await chara_talk.say_and_wait(`请把小福我变成属于你的开运道具吧。`);
  await me.print_and_wait([
    `身侧的 `,
    chara_talk.get_colored_name(),
    ` 握紧了 `,
    me.get_colored_name(),
    ` 的手，马娘略高的体温自她的掌心不断传递过来。`,
  ]);
  era.printButton(`（接受）`, 1);
  era.printButton(`（拒绝）`, 2);
  const ret = await era.input();
  if (ret === 1) {
    await chara_talk.say_and_wait(`啾……啾溜……噗呲……咕啾……`);
    await me.print_and_wait([
      `让`,
      chara_talk.get_colored_name(),
      `仰头，舌与舌难舍难分，紧密交缠，涎液形成的银丝从空中断裂。`,
    ]);
    await chara_talk.say_and_wait(`唔……咕……`);
    await me.print_and_wait(
      `稍稍分开又继续催人情欲的深吻，肆意感受着担当的气味。`,
    );
    await me.print_and_wait([
      `十指相扣，`,
      me.get_colored_name(),
      ` 将 `,
      chara_talk.get_colored_name(),
      ` 推到在了沙发上。`,
    ]);
    //sys_like_chara(56, 0, 20);
    await sys_love_uma_in_event(56);
    era.set('flag:当前位置', location_enum.home);
    await quick_into_sex(56);
  } else {
    await me.print_and_wait([
      `将`,
      chara_talk.get_colored_name(),
      `送回了特雷森学院……`,
    ]);
    sys_change_motivation(56, -2);
    era.set('cflag:56:爱慕暂拒', 74);
  }
  await era.waitAnyKey();
}

async function love_89(chara_talk) {
  const me = get_chara_talk(0);
  const MF = get_chara_talk(56);
  await print_event_name('佳偶', chara_talk);

  era.drawLine({ content: `${me.actual_name}的自宅` });
  await me.print_and_wait([
    ``,
    me.get_colored_name(),
    `听别人说过耳朵大的马娘性欲强。`,
  ]);
  await me.print_and_wait([
    ``,
    me.get_colored_name(),
    `也听说跑长距离的马娘性欲强`,
  ]);
  await me.print_and_wait(`或许之前还有过怀疑......`);
  await me.print_and_wait([
    `但现在的 `,
    chara_talk.get_colored_name(),
    ` 毫无疑问的成为了上述几个说法的实证。`,
  ]);
  await me.print_and_wait(
    `明明身上已经沾满了精液的痕迹，若干用过的避孕套装饰般挂在身上，小穴里的浓精还正止不住的往外溢。`,
  );
  await me.print_and_wait([
    `即使已经变成了这样，这妖艳的栗毛还在尽力用她那支离破碎的语言对 `,
    me.get_colored_name(),
    ` 发出求欢的邀请。`,
  ]);
  await MF.say_and_wait(`呜……`);
  await MF.say_and_wait(`❤大吉❤`);
  era.drawLine({ content: `一段时间之后` });
  await me.print_and_wait(
    `做的时候丝毫没有考虑事后整理起来会有多么麻烦，沾着黏糊糊体液的校服与训练员制服被扔进了哐当作响的洗衣机中，`,
  );
  await me.print_and_wait([
    ``,
    chara_talk.get_colored_name(),
    `应该带了换洗的衣物吧……`,
  ]);
  await MF.say_and_wait('训练员！');
  await MF.say_and_wait('感觉……怎么样？');
  await me.print_and_wait([
    ` `,
    chara_talk.get_colored_name(),
    ` 赤着双足踏在地板上，属于`,
    me.get_colored_name(),
    `的衬衫正被她穿在身上。`,
  ]);
  await me.print_and_wait([
    `伴着洗浴后的热气，她在 `,
    me.get_colored_name(),
    ` 面前转了一圈。`,
  ]);
  await me.print_and_wait(
    `不太合身……袖口折了两三次之后才露出手来，衬衫的下摆也到了大腿的位置，更不要说平时被遮盖在衣装下方的美乳所构成的深邃沟壑了。`,
  );
  await me.print_and_wait(
    `但正也因为此，尾巴稍微翻动一下，掩盖于其下的重要部位就很容易看见。`,
  );
  era.printButton('「小心着凉。」', 1);
  era.printButton('「很合适.....」', 2);
  await era.input();
  await me.print_and_wait([
    `得到如此评价的`,
    chara_talk.get_colored_name(),
    `，尾巴的摆动更加剧烈，直到本就不是为了马娘设计的衣物下摆被掀起。`,
  ]);
  await me.print_and_wait(`因为方才激烈欢爱而留下的痕迹，清晰可见。`);
  await me.print_and_wait(`话说……是什么时候对于此习以为常的呢。`);
  await me.print_and_wait(
    `性爱变得越来越激烈，甚至方才的最后，毫不顾忌福来的感受，只是把她当成飞机杯一样的抽插。`,
  );
  era.printButton('「刚才的感觉怎么样？」', 1);
  era.printButton('「下次需要温柔一点吗？」', 2);
  await era.input();
  await MF.say_and_wait(`欸……为什么训练员会问这个？`);
  await MF.say_and_wait(`嗯，并不讨厌啦……`);
  await MF.say_and_wait(`倒不如说很喜欢……`);
  await me.print_and_wait([
    `或许对于`,
    chara_talk.get_colored_name(),
    `而言，这些粗暴，带有强迫性甚至一定侮辱性的性爱环节中，她能获得更强烈的安心感与满足感。`,
  ]);
  await MF.say_and_wait(`所以……训练员先生，之后也请尽情的使用小福吧。`);
  await add_juel_out_of_train(56, ['顺从'], [100]);
  if (era.get('talent:56:淫身') !== 2) {
    era.set('talent:56:淫身', 2);
    era.print([
      chara_talk.get_colored_name(),
      ' 变得 ',
      {
        color: buff_colors[2],
        content: '[淫身]',
      },
      ' 了！',
    ]);
  }
  await sys_love_uma_in_event(56);
  await era.waitAnyKey();
  return;
}

async function love_100(chara_talk) {
  const me = get_chara_talk(0);
  const MF = get_chara_talk(56);

  await print_event_name('依存', chara_talk);
  await MF.print_and_wait(`今天几乎和训练员一起在神社忙了一整天。`);
  await MF.print_and_wait(
    `想起往日无所不能的训练员因为初次上手而流露出的笨拙，我不禁笑了出来。`,
  );
  await MF.print_and_wait(`笑声理所当然的吸引了训练员的目光。`);
  await MF.say_and_wait(`咕……`);
  era.drawLine({ content: `几分钟后` });
  era.printButton('（伸手）', 1);
  await era.input();
  await MF.print_and_wait(`训练员的手抚摸过腰，臀，一直到我的膝弯。`);
  await MF.say_and_wait(`哈……`);
  await MF.print_and_wait(
    `双腿一软，我在训练员的示意下翘着屁股，趴在了本殿内的墙上。`,
  );
  era.printButton('（解开衣物）', 1);
  await era.input();
  await MF.print_and_wait(
    `之后，眼睁睁地看着象征着我巫女身份的绯袴滑落在地上，感到了抵在臀部的灼热之物。`,
  );
  await MF.print_and_wait(
    `夹着腿，感到滑腻的液体顺着我的大腿流淌下去，小腹处的酥麻感却是愈演愈烈。`,
  );
  era.printButton('（插入）', 1);
  await era.input();
  await MF.print_and_wait(`用于二人相性的肉棒占卜开始了。`);
  await MF.say_and_wait(`哈啊……`);
  await me.print_and_wait([
    `今天，`,
    chara_talk.get_colored_name(),
    `一反常态的，主动向`,
    me.get_colored_name(),
    `提出了求欢的邀请。`,
  ]);
  await me.print_and_wait([
    ``,
    me.get_colored_name(),
    `只是插入，担当马娘敏感的身躯便几乎要抵达高潮，失焦的双眼不知道在想着些什么。`,
  ]);
  await era.println();
  await MF.say_and_wait(`占卜分为两种，一种是入局，另一种则是在局外。`, true);
  await era.println();
  await MF.say_and_wait(`好厉害……要晕了…….`);
  await era.println();
  await MF.say_and_wait(
    `占卜是偷窥命运、干涉天道的游戏，需要占者卜者都要入局。`,
    true,
  );
  await era.println();
  await me.print_and_wait(
    `橙发的少女全无克制地浪叫出声。清甜酥软的嗓音，此间却叫得分外淫靡。`,
  );
  await MF.say_and_wait(`咿呀呀……啊……`);
  await era.println();
  await MF.say_and_wait(
    `自己并不算是优秀的占卜师，当初撞上训练员也许是纯凭运气。`,
    true,
  );
  await era.println();
  era.printButton('（拍打臀部）', 1);
  await era.input();
  await me.print_and_wait(
    `分出一只手，猛地拍上福来的屁股，有些微受虐倾向的巫女发出了更诱人的娇叫。`,
  );
  await MF.say_and_wait(`……嗯啊~`);
  await era.println();
  await MF.say_and_wait(`但当时既是占者又是卜者的我，毫无疑问的入了局。`, true);
  await era.println();
  era.printButton('（玩弄乳房）', 1);
  await era.input();
  await era.println();
  await MF.say_and_wait(`所以，是的，训练员就是自己的命定之人！`, true);
  await era.println();
  await me.print_and_wait(`双手攀上了福来的双乳，将其肆意揉成各种形状。`);
  await MF.say_and_wait(`啊……啊……`);
  era.printButton('（拉扯尾巴）', 1);

  await era.input();

  await me.print_and_wait(
    `柔顺的栗色马尾，早就沾上了些许因为活塞运动带出的体液。`,
  );
  await me.print_and_wait([
    `尾巴根部传来的触感，乳房被揉捏的快感，让`,
    chara_talk.get_colored_name(),
    `一瞬间发出了今日最为高亢的呻吟。`,
  ]);
  await me.print_and_wait(
    `本殿用作御神体的镜子，清楚的反映出了巫女此刻的幸福神情。`,
  );
  await MF.say_and_wait(`这是……我？`, true);
  await MF.print_and_wait(
    `被情欲染成了红色的脸，还在不断发出断断续续呜咽的樱唇，迷离半睁，如狐狸般魅惑的双眼。`,
  );
  await MF.print_and_wait(
    `被男人抵在墙上，半脱的巫女服下的泛着樱红色身体随着抽插的动作一上一下的。`,
  );
  await MF.say_and_wait(`呜……自己居然会在白兴大人面前变成这样……`, true);
  await MF.say_and_wait(`命定之人……命定之人要负起责任来啊！`, true);
  await MF.say_and_wait(`呜噫噫噫噫！！！！！`);
  await me.print_and_wait(`啵！`);
  await me.print_and_wait(
    `浓稠黏糊的精液，在男人拔出的一瞬间，自巫女穴口涌出，淫靡的气味在本殿内弥漫开来。`,
  );
  begin_and_init_ero(0, 56);
  const part = MF.sex_code - 1 ? '阴道' : '阴茎';
  era.set(`palam:56:${part}快感`, era.get(`tcvar:56:${part}快感上限`));
  era.set('palam:56:受虐快感', era.get('tcvar:56:受虐快感上限'));
  await quick_make_love(
    new EroParticipant(0, part_enum.hit),
    new EroParticipant(56, part_enum.body),
    false,
  );
  era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
  era.set('palam:56:阴道快感', era.get('tcvar:56:阴道快感上限'));
  await quick_make_love(
    new EroParticipant(0, part_enum.penis),
    new EroParticipant(56, part_enum.virgin),
    false,
  );
  end_ero_and_train();
  await add_juel_out_of_train(56, ['受虐快感', '顺从', '羞耻'], [100, 100, 50]);
  era.drawLine({ content: `一段时间后` });
  await MF.say_and_wait(`好激烈啊……`);
  await me.print_and_wait(
    `尽管强装着镇定，但巫女服上液体干涸的痕迹还是表明了刚才那个淫乱的马娘就是她。`,
  );
  era.printButton(`「白兴大人不会怪罪吗？」`, 1);
  await era.input();
  await MF.say_and_wait(`欸……`);
  await MF.say_and_wait(`那个，白兴大人看到我得到了幸福，也会高兴的吧。`);
  await MF.say_and_wait(`应该吧……`);
  await MF.say_and_wait(`呜……只是头脑一热就这样了……`);
  await MF.say_and_wait(`不过，只有对训练员先生，才会这样哦！`);
  await MF.say_and_wait(`毕竟，${me.actual_name}可是我的命定之人啊！`);
  await era.waitAnyKey();
}

/**
 * 待兼福来 - 爱慕
 *
 * @author Alex
 *

 */

module.exports = async (hook, _, event_object) => {
  const love = era.get('love:56'),
    MF = get_chara_talk(56);

  if (hook === event_hooks.week_end) {
    if (love === 49) {
      await love_49(MF, event_object);
    } else if (love === 74) {
      await love_74(MF, event_object);
    } else if (love === 89) {
      await love_89(MF, event_object);
    } else if (love === 100) {
      await love_100(MF, event_object);
    }
  } else if (hook === event_hooks.back_school) {
    await love_74_back_school(MF, event_object);
  } else if (hook === event_hooks.out_church) {
    //   TODO: 也许会参考小北的剧情加几个有关调教进度的事件
    //await love_89_out_church(MF, event_object);
    //   return true;
  }
};

/*
// TODO: 可能会写婚礼，但是写婚礼不太可能。
 */
