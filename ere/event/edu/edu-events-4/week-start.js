const era = require('#/era-electron');
const CharaTalk = require('#/utils/chara-talk');

const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { location_enum } = require('#/data/locations');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const { add_event } = require('#/event/queue');
const event_hooks = require('#/data/event/event-hooks');
const MaEventMarks = require('#/data/event/edu-event-marks-extended/edu-event-marks-4');

module.exports = async function (event_object) {
  const me = get_chara_talk(0),
    chara_talk = get_chara_talk(4),
    event_marks = new MaEventMarks(),
    edu_weeks = era.get('flag:当前回合数') - era.get('cflag:4:育成回合计时');
  let wait_flag = false;
  if (edu_weeks === 24) {
    await print_event_name('一见如故', chara_talk);
    await me.say_and_wait(`今天的训练就到这里了,辛苦了。`);
    await chara_talk.say_and_wait(`呼~真是得救了呢`);
    await me.say_and_wait(
      `虽然还没有破出道战时的记录,不过现在也能稳定在这个时间段里了`,
    );
    await chara_talk.say_and_wait(`呵呵~这么努力的训练总算有回报了^_^`);
    await chara_talk.say_and_wait(`那么,接下来训练员君可以陪我到校门口吗?`);
    era.printButton(`当然`, 1);
    await era.input();
    era.drawLine();
    await chara_talk.say_and_wait(`训练员君明天再见咯~`);
    await era.printAndWait(
      `伴随着引擎的发动声响起,${chara_talk.name}的背影越来越远。`,
    );
    await era.printAndWait(
      `在目送${chara_talk.name}离开后,${me.name}收到了之前在出道战遇到的新手训练员的发的消息`,
    );
    await me.say_and_wait(`接下来该去赴约了`, true);
    await era.printAndWait(`看了一眼他发送的地址,${me.name}快步走向了商店街`);
    era.drawLine({ content: '居酒屋内' });
    await era.printAndWait(`浄风幸「干杯!」`);
    era.printButton(`干杯!`, 1);
    await era.input();
    await era.printAndWait(`浄风幸「果然下班之后来这里喝一杯真好啊」`);
    era.printButton(`${me.name}现在找到负责的马娘了吗?`, 1);
    await era.input();
    await era.printAndWait(`浄风幸「唔,现在还没有找到合适的人选」`);
    await era.printAndWait(
      `浄风幸「这可是人生重要的三年啊,不能找个普通的马娘就这么将就度过了」`,
    );
    era.printButton(`不赶快找到担当的话,小心被金发小萝莉开除了`, 1);
    await era.input();
    await era.printAndWait(
      `正打算回呛${me.name}的浄风幸似乎想起了什么,神秘兮兮的靠近了${me.name}`,
    );
    await era.printAndWait(
      `浄风幸「${me.name}听说过这所特雷森学院的都市传说吗？」`,
    );
    await me.say_and_wait(`有这么夸张吗要靠这么近`, true);
    era.printButton(`说来听听`, 1);
    await era.input();
    await era.printAndWait(`浄风幸「那${me.name}可要听好了」`);
    await era.printAndWait(
      `浄风幸「为了寻找合适的担当,我回到了之前作为助理训练员干过一段时间的团队训练室门口」`,
    );
    await era.printAndWait(`浄风幸「正打算敲门的时候,听到里面传来对话.」`);
    await era.printAndWait(
      `新人训练员A「${me.name}听说了吗?有个训练员因为多次未入着然后下落不明了」`,
    );
    await era.printAndWait(`新人训练员B「真的假的?特雷森还会发生这种事?」`);
    await era.printAndWait(
      `新人训练员A「那可不,我听同宿舍的室友说,有天他烟瘾犯了又不好意思在训练室抽烟,所以找了个偏僻的角落」`,
    );
    await era.printAndWait(
      `新人训练员A「正准备打火的时候,突然有只手从背后向他搭话」`,
    );
    await era.printAndWait(`新人训练员B「卧槽怕不是白天遇鬼了」`);
    await era.printAndWait(
      `新人训练员A「那家伙被吓得不轻，后面传来的却是少女的声音」`,
    );
    await era.printAndWait(`新人训练员B「说了啥」`);
    await era.printAndWait(`新人训练员A「兄弟借个火」`);
    await era.printAndWait(`新人训练员B「这是遇到不良马娘了?」`);
    await era.printAndWait(
      `新人训练员A「那家伙心里肯定想得是老子好歹也是为人师表,虽然打不过，不过不管怎么样也得教训下这帮不良」`,
    );
    await era.printAndWait(
      `新人训练员A「然后他转过头正准备训斥的时候,突然觉得语气好熟悉」`,
    );
    await era.printAndWait(`新人训练员A「仔细一看好像就是那位失踪的同事」`);
    await era.printAndWait(`新人训练员B「卧槽」`);
    await era.printAndWait(
      `新人训练员A「当时一股寒意从天灵盖一直穿到脚底,吓得他没命的跑,所幸那女鬼也没有追来」`,
    );
    await era.printAndWait(
      `新人训练员A「死里逃生的他把这件事告诉了我,我现在告诉${me.name},这件事不要告诉别人」`,
    );
    await era.printAndWait(
      `新人训练员B「这特雷森学院真是吓人,我还是赶快辞职算了.」`,
    );
    await era.printAndWait(
      `听着浄风幸绘声绘色的讲述,${me.name}也多少有点相信了`,
    );
    era.printButton(`理事长和手纲小姐不知道这件事情吗?`, 1);
    await era.input();
    await era.printAndWait(`浄风幸「......${me.name}不会真信了吧」`);
    await era.printAndWait(
      `浄风幸「真要有这种事老子还能坐在这和${me.name}吹逼?」`,
    );
    await era.printAndWait(`浄风幸「早就变马娘去跑三冠了」`);
    await me.say_and_wait(`大概是喝多了吧`, true);
    await era.printAndWait(`浄风幸「服务员再来一杯」`);
    await era.printAndWait(`他正准备招手的时候不小心碰到了路过马娘的手臂`);
    await era.printAndWait(`浄风幸「不好意思」`);
    await era.printAndWait(`马娘「不好意思」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `两人同时低头道歉,仔细一看的话似乎还穿着特雷森学院的制服`,
    );
    await me.say_and_wait(
      `这么说坐在那里的几名马娘也都是特雷森学院的学生吗`,
      true,
    );
    await era.printAndWait(`马娘「那么失礼了,请让我过去」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`这本应该吐槽一句的浄风幸却一副略有所思的样子`);
    await era.printAndWait(`浄风幸「看她的腿似乎很擅长跑中距离和长距离」`);
    await era.printAndWait(`浄风幸「而且性格也很认真,说不定是个好苗子」`);
    await me.say_and_wait(`这么优秀的话应该已经有训练员了`);
    await era.printAndWait(
      `浄风幸「这话就不对了,那些实力很强的马娘往往对训练员的相性要求很高」`,
    );
    await era.printAndWait(
      `浄风幸「正好我也烦恼着合适的人选,说不定可以去碰碰运气」`,
    );
    await era.printAndWait(`浄风幸「回到特雷森的话就去打听一下这个马娘吧」`);
    era.drawLine({ content: '酒过三巡后' });
    await era.printAndWait(
      `浄风幸「......听说桐生院家的大小姐去年也来当训练员了」`,
    );
    await era.printAndWait(`浄风幸「说不定明年会看到一颗新星冉冉升起」`);
    await era.printAndWait(`浄风幸「时间也差不多了,我去结账。」`);
    await era.printAndWait(`浄风幸「下次再一起喝酒吧。」`);
    await me.say_and_wait(`说不定他会和那位马娘相性很好`, true);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) || wait_flag;
  } else if (edu_weeks === 34) {
    await print_event_name('意外的见面', chara_talk);
    await era.printAndWait(
      `8月下旬的某一天,${me.name}正在办公室整理这个月${chara_talk.name}跑步的数据，突然听见了敲门声。`,
    );
    await era.printAndWait(`马娘「咚咚咚」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`马娘「请问是丸善学姐的训练员先生吗？」`, {
      color: chara_talk.color,
    });
    era.printButton(`请进`, 1);
    await era.input();
    await era.printAndWait(
      `随着大门被轻轻推开之后，似曾相识的马娘走了进来，她先是四处打量了一下训练室的布置最后将视线定格在了${me.name}的脸上。`,
    );
    await era.printAndWait(`马娘「打扰了,不知您能否让丸善学姐收下这个」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`她不知从何处掏出了一个小盒子`);
    await me.say_and_wait(`是${chara_talk.name}一直关注着的后辈马娘吧`, true);
    await me.say_and_wait(`辛苦了，我会亲手交给${chara_talk.name}的。`);
    await era.printAndWait(
      `她因紧张而一直抖动的耳朵立刻竖了起来,像是松了口气的样子。顿了一会儿,又止不住好奇的向${me.name}问道`,
    );
    await era.printAndWait(
      `马娘「训练员先生，${me.name}不好奇为什么我们不直接送给${chara_talk.name}吗？」`,
      {
        color: chara_talk.color,
      },
    );
    era.printButton(
      `如果换做是我身处${me.name}们的位置,也不会希望有人问着问那吧`,
      1,
    );
    await era.input();
    await me.say_and_wait(
      `更何况${me.name}们是${chara_talk.name}信赖的后辈们,作为她的训练员,我也对${me.name}们充满信任。`,
    );
    await era.printAndWait(`马娘「不愧是丸善学姐的训练员呢,那么打扰了。」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`鞠躬之后她快步走向了门口探头探脑的同伴身旁`);
    await me.say_and_wait(`真是个奇妙的人`, true);
    await era.printAndWait(`轻轻关上大门后,${me.name}打开了小盒子。`);
    await era.printAndWait(`里面放着的是由水晶制作的手链。`);
    await me.say_and_wait(`等${chara_talk.name}回来后亲手交给她吧`, true);
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 41) {
    await print_event_name('训练员与担当马娘', chara_talk);
    await chara_talk.say_and_wait(`训练员君,训练结束后一起出去兜风吧?`);
    await era.printAndWait(
      `随着时间的经过,${me.name}与${chara_talk.name}之间的磨合也愈发紧密。`,
    );
    await era.printAndWait(
      `在她尽力完成日常训练的同时,作为奖励也为了避免${chara_talk.name}精神过于紧绷,在休息日的那晚${me.name}们会一起享受风的吹拂。`,
    );
    await chara_talk.say_and_wait(`呼啊,果然像这样聆听风的声音最令人高兴呢`);
    era.printButton(`${chara_talk.name}可以开的稍微慢一点吗?`, 1);
    await era.input();
    await era.printAndWait(
      `比起第一次坐在副驾驶上字面意义上被吓晕过去,现在的${me.name}已经慢慢适应了`,
    );
    await me.say_and_wait(`果然什么事情经历久了多少都会有抗性了吗`, true);
    await era.printAndWait(
      `那么,差不多到海边了,今天就这样......没想到这里也能遇到马娘呢。`,
    );
    await era.printAndWait(
      `${me.name}从${chara_talk.name}的副驾驶位上下来,看向远处的模糊人影,似乎是有人在那边聊着什么。`,
    );
    await chara_talk.say_and_wait(`青春真美好呢~训练员君不也这么想吗?`);
    await era.printAndWait(
      `平日的${chara_talk.name}一直都是一副知心大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }的模样,此刻却显露出了作为少女的一面。`,
    );
    await chara_talk.say_and_wait(
      `经历了艰难险阻之后的互相扶持的人与马娘在月亮的见证下幸福的kiss`,
    );
    await chara_talk.say_and_wait(
      `${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我也很期待这种事情呢`,
    );
    await era.printAndWait(`${chara_talk.name}露出了寂寞的表情`);
    await me.say_and_wait(`他们好像发现我们了`);
    await era.printAndWait(
      `再次转头时,${chara_talk.name}又变回了之前的外向大${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }`,
    );
    await era.printAndWait(`马娘「是丸善学姐吧!」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `注意到了我们到来的马娘向着${chara_talk.name}的方向慢慢走了过来`,
    );
    await era.printAndWait(
      `马娘「我是上次来找丸善学姐的（马娘名）,虽然很遗憾没能直接与学姐见面」`,
      {
        color: chara_talk.color,
      },
    );
    await me.say_and_wait(`原来是上次的马娘`, true);
    await era.printAndWait(
      `她们亲手制作的水晶手绳现在正系在${chara_talk.name}的右手上`,
    );
    await era.printAndWait(
      `马娘似乎也注意到了这点,本就兴奋的心情变得更加雀跃了。`,
    );
    await era.printAndWait(
      `马娘「看来丸善学姐很喜欢我们的礼物呢,真的是太好了!」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(
      `马娘「我也做好了成为一名赛马娘参加比赛的准备,希望之后也能在赛场上碰到丸善学姐!」`,
      {
        color: chara_talk.color,
      },
    );
    await me.say_and_wait(`他们似乎单方面将我们视为了劲敌呢`, true);
    await chara_talk.say_and_wait(
      `哎呀,没想到后辈们已经决定超越我的背影了呢?看来与训练员君签订契约还真是正确的选择`,
    );
    await chara_talk.say_and_wait(
      `那么${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我就拭目以待了呦`,
    );
    await chara_talk.say_and_wait(`那么接下来就是马娘之间的悄悄话时间了?`);
    await me.say_and_wait(`哈哈哈这片大海真美丽啊,不近点看看真是可惜了。`);
    await era.printAndWait(`这种时候还是自觉一点吧。`);
    await era.printAndWait(
      `波浪伴随着潮湿的海风吹向岸上的沙滩，沙滩包容了海水的冲击却跟不上海风的步伐`,
    );
    await era.printAndWait(`只能看着海风孤独的向未知的旅途前进。`);
    await era.printAndWait(`浄风幸「好久不见了,${me.name}」`);
    await era.printAndWait(`那个男人向${me.name}招手,波浪打湿了他的裤脚。`);
    era.printButton(
      `我这边也是,希望能在今年的赛场之上见到${me.name}们的身影`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `浄风幸「那可真是多谢了,不过出道战可能要往后推一段时间了」`,
    );
    await era.printAndWait(
      `浄风幸「虽然我的担当平时也一直跟着团队训练员一起训练,不过两人之间还是需要一段时间来磨合。」`,
    );
    await era.printAndWait(
      `浄风幸「而且以这种半吊子的水平仓促出道的话,不管是对马娘还是我来说都不是什么好主意。」`,
    );
    await era.printAndWait(`浄风幸「我们会在观众席上加油的。」`);
    await era.printAndWait(`他顿了一下,然后看向了空中的月亮`);
    await era.printAndWait(
      `浄风幸「能在月亮的引导下成功和担当签约,说不定我也是被三女神眷顾的人啊。」`,
    );
    await me.say_and_wait(
      `我与${chara_talk.name}的邂逅也是三女神的指引吧`,
      true,
    );
    await era.printAndWait(
      `波浪拍打着沙滩,然后被沉默的沙砾分解成了无数洁白的泡沫`,
    );
    await era.printAndWait(
      `浪花虽然注定逝去,但在从波浪分解成泡沫的一瞬间,它也曾闪耀过。`,
    );
    await era.printAndWait(
      `对于选择出道的马娘们来说也是这样,她们将人生最宝贵的三年寄托在了训练员身上。`,
    );
    await era.printAndWait(
      `相比于训练员的长达数十年的职业生涯,短短的三年不过像泡沫一样短暂。`,
    );
    await era.printAndWait(
      `所以这就意味着可以将生涯中初次遇到的马娘作为练手的对象吗?`,
    );
    await era.printAndWait(
      `不,作为训练员来说,我们的能力注定不足,很可能会让将赌注压在我们身上的马娘们失望。`,
    );
    await era.printAndWait(`即使如此,我们还是要选择签订契约。`);
    await era.printAndWait(`因为马娘们需要它。`);
    await era.printAndWait(`正因为如此,对训练员来说最重要的就是一颗虔诚的心`);
    await era.printAndWait(
      `"纵使有身败名裂的可能,作为训练员也要和担当一起闪耀。"用这颗虔诚的心,来救赎自己训练过程中的一切丑陋与不足之处。`,
    );
    await chara_talk.say_and_wait(`那边的训练员们,差不多是回寝的时间了`);
    await era.printAndWait(`${chara_talk.name}向${me.name}们招手`);
    await era.printAndWait(`浄风幸「非常感谢!」`);
    await me.say_and_wait(`他们不知道接下来会遇到什么`, true);
    await era.printAndWait(`等到那对搭档系好安全带后`);
    await chara_talk.say_and_wait(`那么出发咯`);
    await era.printAndWait(`浄风幸「呜啊啊啊」`);
    await era.printAndWait(`马娘「呀啊啊啊啊」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`后排已经变成了阿鼻地狱般的惨状`);
    await chara_talk.say_and_wait(`大家看到了风吗?`);
    await me.say_and_wait(`呜啊啊啊啊啊`);
    await era.printAndWait(
      `因为过于享受的${chara_talk.name}不小心突破了自己的极限,下车后三个人互相搀扶着走进了学院`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 10, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 1) {
    await print_event_name('新年的思绪', chara_talk);
    await era.printAndWait(`训练室内`);
    await me.say_and_wait(`最后一份文件也整理好了`, true);
    await me.say_and_wait(`总算可以稍微休息一会了`, true);
    await era.printAndWait(
      `从负责${chara_talk.name}的育成开始就一直紧绷着的神经总算可以稍微放松一下了`,
    );
    await me.say_and_wait(`要是一直这么辛苦下去我迟早要累死`, true);
    await me.say_and_wait(`好！接下来去天台上吹下风清醒一下吧`, true);
    await me.say_and_wait(
      `......不知道${chara_talk.name}现在在哪里,也许和朋友们一起在哪里聚会吧`,
      true,
    );
    era.drawLine({ content: '天台' });
    await era.printAndWait(
      `很多马娘决定在新年时和同伴或者自己的训练员一起度过,而且利用假期这段时间将去年的烦恼一甩而空`,
    );
    await era.printAndWait(
      `与往日热情似火的学院相比,此刻的学院文静的像是大和抚子一样`,
    );
    await era.printAndWait(`从天台向下俯瞰,整个特雷森学院都在视线之下`);
    await me.say_and_wait(
      `这个时候大喊一声我是要成为驯服三冠王马娘的男人才符合气氛吧`,
      true,
    );
    await me.say_and_wait(`虽然没有人在这里不过还是太羞耻了`, true);
    await me.say_and_wait(`......`);
    await me.say_and_wait(`我要成为配得上${chara_talk.name}的男人！！！`, {
      align: 'center',
      color: me.color,
      fontSize: '24px',
      fontWeight: 'bold',
    });
    await era.printAndWait(`震耳欲聋的响声连自己都被吓了一跳`);
    await me.say_and_wait(`这是我发出的声音？`);
    await me.say_and_wait(`还是快离开吧`);
    await chara_talk.say_and_wait(`训练员先生？`);
    await era.printAndWait(`野生的${chara_talk.name}出现了`);
    await me.say_and_wait(`卧槽${chara_talk.name}！`, true);
    await me.say_and_wait(`哈哈,人生完蛋了`, true);
    await me.say_and_wait(`在家的父母恕孩儿不孝不能赡养天年了`, true);
    await era.printAndWait(
      `虽然做好了引颈就戮的准备,不过${chara_talk.name}却似乎心不在焉的样子`,
    );
    era.printButton(`不去找小特她们一起去玩吗?`, 1);
    await era.input();
    await era.printAndWait(`顺势就和${chara_talk.name}一起靠在栏杆上聊起来了`);
    await chara_talk.say_and_wait(
      `去年还和小特她们一起开新年派对的,不过今年说着什么快去陪自己的训练员然后就把我推出来了`,
    );
    era.printButton(`小特她们其实很关心${me.name}呢`, 1);
    await era.input();
    await me.say_and_wait(`是洗发水的味道吗？为什么今天这么香呢`, true);
    await chara_talk.say_and_wait(
      `训练员君也是这么想的吗?她们可是充满着希望的幼苗呢`,
    );
    await chara_talk.say_and_wait(`总有一天会冲破风与雨的束缚,成为参天大树`);
    await era.printAndWait(
      `与${chara_talk.name}充满期盼的话语相比,她看着天空的样子充满了思绪。`,
    );
    era.printButton(`${chara_talk.name}不想变成参天大树吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`比起大树的话,我更想化为一阵温柔的风呢。`);
    era.printButton(`风？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`训练员君没有注意到天空中自由自在的风吗`, 1);
    await chara_talk.say_and_wait(
      `如果能化为天空中吹拂的风,我也许能在后辈们苦恼的时候`,
      1,
    );
    await chara_talk.say_and_wait(
      `就差一点就能成功的时候,在叹息的时候给予她们鼓励了`,
      1,
    );
    await era.printAndWait(`${chara_talk.name}现在已经做的很好了`);
    await era.printAndWait(`现在就尽情享受新年的快乐吧`);
    await chara_talk.say_and_wait(`说的也是呢,这样子下去真不像我了呢`, 1);
    await chara_talk.say_and_wait(`训练员君有什么计划吗？`, 1);
    era.printButton('「今天的话就在草地上练习吧」', 1);
    era.printButton('「一起出去逛街然后把不愉快都一扫而空吧」', 2);
    era.printButton('「今天就在训练室好好休息吧」', 3);
    const ret = await era.input();
    era.println();
    if (ret === 1) {
      await chara_talk.say_and_wait('嗯嗯,在草地上飞驰把烦恼全部甩开吧');
      await chara_talk.say_and_wait(`不愧是训练员君,真懂我的心呢。`);
      await era.printAndWait(`${chara_talk.name}似乎重新打起了精神`);
      await chara_talk.say_and_wait('OK!那么现在就出发吧');
      await era.printAndWait(
        `${me.name}们在草地上训练了一整天然后聚在训练室小小庆祝了一下`,
      );
      wait_flag =
        get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], 0) || wait_flag;
    } else if (ret === 2) {
      await chara_talk.say_and_wait(
        `诶？训练员君是想和${
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
      await chara_talk.say_and_wait(`既然训练员君都这么要求了`);
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
  } else if (edu_weeks === 47 + 5) {
    await print_event_name('春冬之交', chara_talk);
    await me.say_and_wait(`直到中盘为止还没有问题`, true);
    await era.printAndWait(`${me.name}们在草地上进行着日常训练`);
    await me.say_and_wait(`在第三个弯道上冲刺！`);
    await chara_talk.say_and_wait(
      `好！${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我要加速了!`,
    );
    await era.printAndWait(
      `对于逃马而言,最重要的是序盘抢占第一的位置,在中盘尽可能与马群拉开距离,最后在终盘保持一开始的速度`,
    );
    await era.printAndWait(
      `而在现实比赛之中,多名逃马娘之间互相争夺第一的位置往往会使比赛趋于快节奏`,
    );
    await era.printAndWait(
      `部分适应不了快节奏的马娘为了保持与逃马群的相对距离而被迫加快速度从而导致体力快速消耗无法在终盘达到应有的速度而落败`,
    );
    await era.printAndWait(
      `然而这种跑法却对竞争意识有着较高的要求,强行选择逃跑法很容易成为选择先行跑法马娘的垫脚石`,
    );
    await era.printAndWait(
      `一般来说逃马在第三个弯道开始最多保持原本的速度,但${chara_talk.name}却能突破这份束缚甚至做到加速`,
    );
    await me.say_and_wait(`不愧是被称为怪物一样的马娘`, true);
    await era.printAndWait(
      `根据不同马娘的特性制定不同的作战计划也是对训练员能力的一种考验。`,
    );
    era.printButton(`辛苦了,稍微站一会再喝水吧`, 1);
    await era.input();
    await me.say_and_wait(`比上次快了0.1秒,春季锦标应该可以轻松度过了`);
    await chara_talk.say_and_wait(`不知道吹拂在中山竞马场的风又会是什么感觉呢`);
    await me.say_and_wait(`一定会是非常美好的回忆`);
    await chara_talk.say_and_wait(`嗯嗯,接下来做一组拉伸运动吧`);
    await me.say_and_wait(`不多休息一会吗？`);
    await chara_talk.say_and_wait(
      `一想到后辈们会在赛场上给我加油,我就干劲十足呢`,
    );
    await chara_talk.say_and_wait(`好,那么继续`);
    await era.printAndWait(
      `浄风幸「训练的不错啊,可以和我家的孩子比试一下吗？」`,
    );
    await era.printAndWait(
      `除了单独训练之外,共同训练也是一种效果显著的提升方式,在与其他马娘的竞争之中可以快速发现短板从而共同提高`,
    );
    await era.printAndWait(`浄风幸「我家的孩子一直都想和憧憬的前辈比试一场」`);
    await era.printAndWait(`既然都这么说了,没理由不接受吧？`);
    era.printButton(`${chara_talk.name},可以吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(`既然是后辈的请求,没有理由不接受吧?`);
    await era.printAndWait(`马娘「非常感谢,我会尽全力追上丸善学姐的背影」`, {
      color: chara_talk.color,
    });
    await chara_talk.say_and_wait(
      `比起这个更希望${me.name}也能享受到风带来的快乐哦`,
    );
    await era.printAndWait(`两人站在起跑线之后`);
    await me.say_and_wait(`各就位,预备`);
    era.printButton(`跑！`, 1);
    await era.input();
    await era.printAndWait(
      `伴随着发令枪的响起,马娘们如同离弦之箭一样向前方冲了出去`,
    );
    await me.say_and_wait(`${me.name}家的孩子采用的是先行跑法吧？`);
    await era.printAndWait(
      `浄风幸「没错,在试过各类跑法后,还是先行跑法与她比较契合」`,
    );
    await me.say_and_wait(`唔,王道跑法啊`);
    await era.printAndWait(
      `因采用先行跑法的马娘在各类比赛中的胜率较高所以也被视为王道跑法`,
    );
    await era.printAndWait(
      `其特点是序盘温存体力然后在中盘开始发力,比起逃马来说在终盘具有更高的加速度`,
    );
    await era.printAndWait(
      `比起${chara_talk.name}在一开始就保持着极快的节奏,那名马娘一直与${chara_talk.name}保持着一定的距离`,
    );
    await me.say_and_wait(`${chara_talk.name}差不多要开始发力了`);
    await chara_talk.say_and_wait(`那么来尝试超过我的背影吧`);
    await era.printAndWait(`跑过第三个弯道后,${chara_talk.name}开始加速了`);
    await era.printAndWait(`浄风幸「不愧是超级跑车吗?这惊人的加速度。」`);
    await era.printAndWait(`马娘「唔,不会输给前辈的」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`紧随其后的马娘同样开始冲刺了`);
    await chara_talk.say_and_wait(`哈啊啊啊啊啊`);
    await era.printAndWait(`马娘「唔啊啊啊啊」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`马娘(果然我还是离前辈差的远吗,真不甘心。)`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`比试以${chara_talk.name}的压倒式胜利而结束`);
    await era.printAndWait(`浄风幸「真是看到了一场不错的比赛啊」`);
    await era.printAndWait(`浄风幸「看来我们还要加紧训练了」`);
    era.printButton(`${chara_talk.name}辛苦了`, 1);
    await era.input();
    await era.printAndWait(`${me.name}将毛巾和水递给她`);
    await chara_talk.say_and_wait(`感觉怎么样？`);
    await era.printAndWait(`马娘「能与前辈一起奔跑,非常高兴！」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`马娘「下一次我一定会超过前辈的！」`, {
      color: chara_talk.color,
    });
    await me.say_and_wait(`比起懊恼更倾向于积极的一面啊`, true);
    await me.say_and_wait(`${me.name}遇到了不错的搭档呢。`);
    await era.printAndWait(
      `浄风幸「虽然不如${chara_talk.name},不过也是很努力的孩子。」`,
    );
    await era.printAndWait(`马娘「训练员,接下来请加大训练量吧」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `浄风幸「训练量不是越大越好,马娘的腿很脆弱,如果在出道战前受伤的话,那${me.name}怎么办？」`,
    );
    await era.printAndWait(`马娘「只要能超过丸善前辈,区区受伤而已」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(
      `浄风幸「够了,${me.name}不知道自己的任性会造成多大的后果,我知道${me.name}很想超过${chara_talk.name}」`,
    );
    await era.printAndWait(
      `浄风幸「但是${me.name}不能闭着眼睛在钢丝上一路狂奔」`,
    );
    await era.printAndWait(
      `浄风幸「不知道有多少马娘因为训练方法的失误不得不取消参赛甚至退役」`,
    );
    await me.say_and_wait(`两人之间的氛围不太对劲,不采取行动的话`, true);
    await me.say_and_wait(`让我来跟她说吧`);
    await era.printAndWait(`${me.name}尽可能小心的靠近（马娘）`);
    await me.say_and_wait(`（马娘）,${me.name}想超过${chara_talk.name}吗？`);
    await era.printAndWait(`马娘看上去有些焦躁的看着${me.name}`);
    await era.printAndWait(`马娘「请说吧，丸善前辈的训练员」`, {
      color: chara_talk.color,
    });
    await me.say_and_wait(`这里开始必须要小心了`, true);
    await me.say_and_wait(
      `回忆一下,在与${chara_talk.name}追逐的过程中${me.name}感受到了什么`,
    );
    await era.printAndWait(`马娘陷入了深思,之后缓缓开口道`);
    await era.printAndWait(`马娘「风,狂风呼啸,让人喘不过气来的压力」`, {
      color: chara_talk.color,
    });
    await me.say_and_wait(`面对这种强敌,平时训练员教给${me.name}的是什么？`);
    await era.printAndWait(`马娘「沉着冷静,寻找机会一口气超越过去」`, {
      color: chara_talk.color,
    });
    await era.printAndWait(`像是意识到了什么,马娘向训练员道歉`);
    await era.printAndWait(
      `马娘「抱歉,是我太焦躁了,训练是水滴石穿的过程,一蹴而就是错误的行为」`,
      {
        color: chara_talk.color,
      },
    );
    await era.printAndWait(`浄风幸「我这边也有不对,接下来的训练一起加油吧。」`);
    await era.printAndWait(`两人的手重新握在了一起`);
    await me.say_and_wait(`能够想通真是太好了`, true);
    await era.printAndWait(
      `${me.name}终于松了口气,${chara_talk.name}悄悄向${me.name}竖起了大拇指。`,
    );
    await era.printAndWait(`浄风幸「之后的话也希望能和${me.name}们一起训练」`);
    era.printButton(`不如说非常欢迎`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `这场危机训练员君就这么轻易化解了呢,训练员君真厉害！`,
    );
    await era.printAndWait(
      `等到二人组离开之后,${chara_talk.name}伸出手摸了摸${me.name}的头`,
    );
    await chara_talk.say_and_wait(`啊,抱歉,不小心把训练员君当成弟弟来看待了。`);
    await me.say_and_wait(
      `这么轻松能解决还是因为她自己想明白了,我只起到了引导的作用。`,
    );
    await chara_talk.say_and_wait(`接下来我们也要加油了。`);
    await me.say_and_wait(`${chara_talk.name}似乎比之前要开朗一点了`, true);
    await me.say_and_wait(`嗯。`);
    await era.printAndWait(`${chara_talk.name}的脚步更加灵动了。`);
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 20) || wait_flag;
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('情人节', chara_talk);
    await era.printAndWait(`情人节终于到了`);
    await era.printAndWait(`明明空气中散布着巧克力的香味`);
    await era.printAndWait(`但是喜欢我的马娘却没有出来`);
    await era.printAndWait(`啊啊,我的春天什么时候才到啊`);
    await era.printAndWait(`因为受不了学院里甜的发腻的气氛所以干脆出来散步`);
    await era.printAndWait(`浄风幸「呦,这不是${me.name}吗？」`);
    await me.say_and_wait(`上周才见过面的家伙怎么不去陪${me.name}家的孩子了？`);
    await era.printAndWait(
      `浄风幸「哈哈,她跟我说有惊喜要准备给我所以一大早就跑去看巧克力了」`,
    );
    await me.say_and_wait(
      `看巧克力为什么不拉着${me.name}一起去却在这和我见面了？`,
    );
    await me.say_and_wait(`实话是什么？`);
    await era.printAndWait(`浄风幸「......看来还是瞒不过${me.name}啊」`);
    await era.printAndWait(
      `浄风幸「我在训练室等了好久也没看到她过来,所以也跑出来呼吸新鲜空气了」`,
    );
    await era.printAndWait(`浄风幸「唔,真是的,连个义理巧克力都没收到。」`);
    await era.printAndWait(`浄风幸「明明去年还在团队的时候收到了巧克力的」`);
    await era.printAndWait(
      `浄风幸「算了不说这个了，${me.name}今天有什么打算吗？」`,
    );
    await era.printAndWait(`打算吗？我也没想好。`);
    await chara_talk.say_and_wait(`像温柔的风一样`, true);
    await era.printAndWait(`像风一样自由吗？`);
    await me.say_and_wait(
      `像${me.name}我这样的风一样自由的人当然是走遍天涯海角了`,
    );
    await era.printAndWait(
      `浄风幸「说什么样风一样,不就是漫无目的的四处乱走吗」`,
    );
    await era.printAndWait(`浄风幸「虽然我很想拒绝，不过加我一个。」`);
    await era.printAndWait(
      `于是两个人勾肩搭背像失散多年的兄弟/兄妹一样到处流浪`,
    );
    era.drawLine({ content: '情人旅馆前' });
    await era.printAndWait(`浄风幸「那个好像是我们的前辈吧？」`);
    await me.say_and_wait(`${me.name}这么说好像真的是啊`);
    await era.printAndWait(`浄风幸「是不是在向我们求救啊」`);
    await era.printAndWait(`${me.name}看了看依偎在他旁边的马娘情意绵绵的样子`);
    await me.say_and_wait(`......人家${me.name}情我愿的，多是一件美事啊`);
    await era.printAndWait(
      `浄风幸「是啊是啊，今天的空气都充斥着恋爱的酸臭味呢」`,
    );
    await era.printAndWait(
      `后面传来撕心裂肺的惨叫声，${me.name}们就当无事发生走过了。`,
    );
    era.drawLine({ content: '巧克力店前' });
    await era.printAndWait(`兜兜转转之后${me.name}们在巧克力店门口停了下来。`);
    await era.printAndWait(`浄风幸「那个是曾作为代理理事长的樫本训练员吗？」`);
    await era.printAndWait(`樫本理子在两名马娘一前一后的簇拥下挑选着巧克力。`);
    await era.printAndWait(`浄风幸「怎么她今天有空来选巧克力了？」`);
    await era.printAndWait(`浄风幸「那么要进去打个招呼吗？」`);
    era.printButton(`还是不要打扰她们吧。`, 2);
    await era.printAndWait(
      `${me.name}们尚在争论的时候，樫本理子已经挑选好了巧克力准备离开了`,
    );
    await era.printAndWait(
      `似乎准备沿着和${me.name}们相反的方向继续前进吧，所以她匆匆和${me.name}们打了个招呼就离开了`,
    );
    era.drawLine({ content: '过了一段时间后' });
    await era.printAndWait(
      `在逛了这么久后还在有些劳累,所以${me.name}们找了一个位置准备休息。`,
    );
    await era.printAndWait(`浄风幸「呼，真是累死了，要是有马娘来找我就好了」`);
    await era.printAndWait(`${me.name}接过他递过来的饮料小抿了一口。`);
    await me.say_and_wait(`真是得救了,接下来的话.....那边是马娘吗？`);
    await era.printAndWait(`${me.name}看到一位马娘走出了街对面的店铺`);
    await me.say_and_wait(`是${me.name}家的孩子吧`);
    await era.printAndWait(
      `浄风幸「嗯......还真是，抱歉失陪了，我要去找我家的孩子了。」`,
    );
    await era.printAndWait(`净风幸站了起来朝着街对面走去。`);
    await me.say_and_wait(`接下来又只剩我一个人了吗`, true);
    await me.say_and_wait(`说到底朋友也不过就是同行一段路的孤独旅客罢了。`);
    await me.say_and_wait(`接下来是继续前行还是直接返回特雷森呢。`);
    await me.say_and_wait(`做决定真是件困难的事情`);
    await me.say_and_wait(`总之......${chara_talk.name}？`);
    await era.printAndWait(
      `${me.name}看着${chara_talk.name}提着一大袋东西正准备上车`,
    );
    await me.say_and_wait(`${chara_talk.name}！`);
    await era.printAndWait(`虽然尽力向对面跑去，但还是迟了一步。`);
    await me.say_and_wait(`总之先回到特雷森吧`);
    era.drawLine({ content: '训练室门口' });
    await era.printAndWait(`${me.name}垂头丧气的回到了训练室`);
    await chara_talk.say_and_wait('surprise！训练员君');
    await era.printAndWait(`不知从哪里放出的礼炮把${me.name}吓了一跳`);
    era.printButton('「呜哇」', 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}似乎在这里等了${me.name}很久了`);
    await chara_talk.say_and_wait(`训练员君,感觉怎么样？`);
    await chara_talk.say_and_wait(
      `比起普通的送巧克力，还是像这样特别庆祝更不错吧？`,
    );
    await era.printAndWait(`办公桌上摆满了各种饮料和小吃`);
    await chara_talk.say_and_wait(`嗯,还有这个，训练员君请收下`);
    await era.printAndWait(`${chara_talk.name}从身后拿出了包装精美的巧克力`);
    await chara_talk.say_and_wait(`这份手工巧克力只送给训练员君一个人哦`);
    era.printButton('「谢谢${me.name}！${chara_talk.name}」', 1);
    await era.input();
    await era.printAndWait(
      `之后${me.name}和${chara_talk.name}一起度过了不一般的情人节。`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 19) {
    await print_event_name('风信子', chara_talk);
    await era.printAndWait(`${chara_talk.name}下周准备挑战德比。`);
    await era.printAndWait(`以其压倒性的实力，胜利应该不是问题。`);
    await me.say_and_wait(`但真正的问题在于——`, true);
    await chara_talk.say_and_wait(`呵呵~训练员君，现在还在准备比赛的事情吗？`);
    await era.printAndWait(`${chara_talk.name}熟练的打开了训练室。`);
    await era.printAndWait(
      `经过一年多的训练与相处，${me.name}与${chara_talk.name}变成了比较亲密的关系了。`,
    );
    era.printButton(`${chara_talk.name}今天也很新潮呢。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`我就当作是在夸奖我哦？`);
    era.printButton(`所以今天也是因为帮助后辈们所以忙到了现在吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `如果训练员处在我的立场上的话也会和我做出一样行动的吧？`,
    );
    await me.say_and_wait(`虽说如此，不过如果因为助人为乐而疏忽训练的话`);
    era.printButton(`在之后的德比中后辈们说不定会伤心的哭出来呢。`, 1);
    await era.input();
    await chara_talk.say_and_wait(`讨厌啦，训练员君，现在也在拿我开玩笑⭐`);
    await chara_talk.say_and_wait(
      `如果说有马娘能够超越我的背影的话，说不定我更满足呦♪`,
    );
    await chara_talk.say_and_wait(`比起这个，训练员君也不要太过疲惫了。`);
    await era.printAndWait(`她将一份咖啡放到了${me.name}的桌子上。`);
    await chara_talk.say_and_wait(
      `虽然辛苦的汗水构成了胜利的阶梯，但过度劳累的话效率也会降低。`,
    );
    await chara_talk.say_and_wait(`虽然这么说的话会有点奇怪，不过——`);
    await era.printAndWait(`${chara_talk.name}温柔的抚摸着${me.name}的头。`);
    await chara_talk.say_and_wait(
      `——今天也辛苦${me.name}了，我最亲爱的训练员君♪`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) || wait_flag;
  } else if (edu_weeks === 47 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name('夏季合宿', chara_talk);
    await chara_talk.say_and_wait(`训练员君，我们比其他人都快了一步到沙滩了哦`);
    await era.printAndWait(
      `为了在炎炎夏日中让特雷森的赛马娘们高效的训练，理事长破天荒的决定让赛事中的马娘们使用她的私人沙滩`,
    );
    await me.say_and_wait(`为什么不跟着学院的大巴一起过来啊。`);
    await chara_talk.say_and_wait(`能和训练员君两人一起约会的机会可不能错过⭐`);
    await era.printAndWait(
      `自德比发生的事情之后，${chara_talk.name}便陷入了深深的自我怀疑`,
    );
    await era.printAndWait(
      `作为专属训练员的${me.name}虽然痛苦但也明白这条道路只能她自己得出结论`,
    );
    await era.printAndWait(
      `所以${me.name}开始慢慢引导她走出心伤，等待着合适的契机彻底解决问题。`,
    );
    await chara_talk.say_and_wait(`比起这个训练员君感受到了海风的吹拂吗？`);
    await era.printAndWait(`${chara_talk.name}眯起了眼睛像是回忆到了什么一样`);
    await me.say_and_wait(
      `比起之前一直蜷缩在训练室的沙发上要好上许多倍了`,
      true,
    );
    await me.say_and_wait(`必须找到合适的契机让她自己想明白`, true);
    await era.printAndWait(
      `看着在沙滩上邀请${me.name}一起享受的${chara_talk.name}，${me.name}下定了决心。`,
    );
  } else if (edu_weeks === 47 + 32) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name('土水生岚', chara_talk);
    await era.printAndWait(`浄风幸「${me.name}，有空吗？」`);
    await era.printAndWait(
      `浄风幸「晚上来一趟沙滩吧，我有话想和${me.name}说。」`,
    );
    await era.printAndWait(
      `在双方精疲力竭的躺在沙滩上后，${me.name}向他坦白了有关${chara_talk.name}一蹶不振的起因与结果。`,
    );
    await era.printAndWait(`他似乎有些心不在焉的样子，像是回忆起了什么一样。`);
    await era.printAndWait(
      `那天直到最后两人都未说过一句话，现在的他却突然给${me.name}发来了消息。`,
    );
    await me.say_and_wait(`无论如何都要去一趟`, true);
    await era.printAndWait(
      `带着半分好奇一分期待八九分的不安${me.name}前往了约定的地点。`,
    );
    await era.printAndWait(
      `浪潮打湿了他的裤脚，那个男人盯着大海与天空的地平线默默无语。`,
    );
    await era.printAndWait(`浄风幸「${me.name}终于来了啊？」`);
    await era.printAndWait(
      `像是突然才注意到${me.name}靠近了的样子，他恢复了一如既往的笑容。`,
    );
    await era.printAndWait(
      `浄风幸「......${me.name}想知道我从团队训练员到成为现在孩子的担当训练员发生的故事吗？」`,
    );
    await era.printAndWait(`${me.name}点了点头表示同意`);
    await era.printAndWait(`浄风幸「就我个人来说吧，我也没有突出的本事」`);
    await era.printAndWait(
      `浄风幸「每天考虑最多的也不是马娘的未来和幸福这种大事」`,
    );
    await era.printAndWait(
      `浄风幸「在没遇到现在的担当之前，我在团队里也就是帮帮主训练员记录一下时间与开导一下马娘们的疑惑」`,
    );
    await era.printAndWait(
      `浄风幸「看着自己做出的成就还有收获到马娘们的感谢，其实我觉得自己这样过得也不错嘛」`,
    );
    await era.printAndWait(`他将视线从地平线移向了繁星点点的天空。`);
    await era.printAndWait(
      `浄风幸「虽然现实世界是个垃圾游戏，但我也能起到自己的作用。」`,
    );
    await era.printAndWait(
      `浄风幸「突然有一天我觉得不能在这样浑浑噩噩下去了，所以我向前辈提出想要找到自己的道路」`,
    );
    await era.printAndWait(`浄风幸「前辈当时是这么说的」`);
    await era.printAndWait(
      `资深训练员「既然${me.name}打算去寻找自己的道路的话，我给${me.name}一个忠告」`,
    );
    await era.printAndWait(
      `资深训练员「支撑${me.name}不断努力的，不会是对美好世界的向往而坚持——恰恰相反，“对美好世界的向往”在将来会是${me.name}最凶恶的敌人。」`,
    );
    await era.printAndWait(
      `资深训练员「支撑${me.name}无限努力的，是不断的原谅和宽恕。」`,
    );
    await era.printAndWait(
      `资深训练员「${me.name}现在听不懂不要紧，等${me.name}经历得更多了之后就会自己明白。」`,
    );
    await era.printAndWait(
      `资深训练员「那么，现在去追逐${me.name}的理想吧。」`,
    );
    await era.printAndWait(`迷茫在内心中不断扩散开来。`);
    await era.printAndWait(
      `浄风幸「所以我离开了团队，打算到训练场碰碰运气。」`,
    );
    await era.printAndWait(
      `浄风幸「参与选拔的孩子们都很努力的奔跑着，但我依然觉得缺了什么。」`,
    );
    await era.printAndWait(
      `浄风幸「在看了三组马娘的选拔之后，正当我准备离开之时，一阵轻柔的风吹拂过我的脸庞」`,
    );
    await era.printAndWait(
      `浄风幸「现在想想也许是三女神的指引，我决定再次坐下看完最后一组。」`,
    );
    era.printButton(`之后${me.name}就看到了${chara_talk.name}吗？`, 1);
    await era.input();
    await era.printAndWait(`不，一直坐到最后一组结束她也没有出现。`);
    await era.printAndWait(
      `浄风幸「当时的我怀疑自己是个傻子，又安慰自己起码多见识了一下各种马娘之间的不同。」`,
    );
    await era.printAndWait(
      `浄风幸「在我整理完笔记之后准备离开时，却与她擦身经过了。」`,
    );
    await era.printAndWait(
      `浄风幸「也许是第六感还是什么玄幻的东西，我觉得这名马娘不同寻常。」`,
    );
    await era.printAndWait(
      `浄风幸「在向身旁路过的马娘打听之后，才知道她叫${chara_talk.name}，预备在明天早上参加选拔。」`,
    );
    await era.printAndWait(
      `浄风幸「在本子上默默记下了这个信息之后，第二天我又来到了训练场。」`,
    );
    await era.printAndWait(
      `浄风幸「之后我看到了她奔跑时的背影，说来奇怪，我感受到了纯粹，其他马娘都是为了向预计的训练员展示自己的实力而咬牙拼搏。」`,
    );
    await era.printAndWait(`浄风幸「她却是纯粹的享受这份快乐。」`);
    await era.printAndWait(`浄风幸「我被那道纯粹的身影深深的征服了。」`);
    await era.printAndWait(
      `浄风幸「也许她能带我看到希望的地平线是什么样子的。」`,
    );
    await era.printAndWait(
      `浄风幸「可当我下定决心准备招募她时，周围的训练员早以起身将她团团围住。」`,
    );
    await era.printAndWait(`浄风幸「我根本无法挤进人群之中。」`);
    await era.printAndWait(
      `浄风幸「之后的发生的事${me.name}也知道了，然后我遇到了现在的担当」`,
    );
    await era.printAndWait(
      `浄风幸「之前只是处于协助的立场上还没有什么切身感受，可现在自己站在他的位置上时，才觉得深深的无力。」`,
    );
    await era.printAndWait(
      `浄风幸「之前作为团队训练员积累的经验在负责现在的担当时不够细致，之前在团队时不会遇到的事情也接踵而至，所以我经常手忙脚乱地收拾现场。」`,
    );
    await era.printAndWait(`浄风幸「在忙碌之中时间飞速流逝。」`);
    await era.printAndWait(
      `浄风幸「当我在某天傍晚打算趁周围无人时向枯树洞发泄情绪时，意外看到了${chara_talk.name}。」`,
    );
    await era.printAndWait(
      `浄风幸「她看上去很悲伤的样子，像是遇到了什么使她理想破碎的事情一样。」`,
    );
    await era.printAndWait(
      `浄风幸「虽然很想上去询问发生了什么，但她在我思考之时已经消失在了教学楼里。」`,
    );
    await era.printAndWait(`浄风幸「那种痛苦的情感，让我无法释怀」`);
    await era.printAndWait(
      `浄风幸「也许只有作为她专属训练员的${me.name}才能引导她走出丛林吧。」`,
    );
    era.printButton(`能和${chara_talk.name}再次对决吗？`, 1);
    await era.input();
    await era.printAndWait(`浄风幸「......为什么？」`);
    await era.printAndWait(`沉湎于回忆中的男人现在正打量着${me.name}`);
    await me.say_and_wait(
      `${chara_talk.name}因为理想世界永远无法摆脱现实世界的束缚而痛苦着`,
    );
    await me.say_and_wait(
      `我希望能让她意识到:尽管理想世界无法摆脱现实世界的束缚，但坚信是自己方法不对，为了实现自己理想而采取的技术过于简陋。`,
    );
    await me.say_and_wait(
      `一定，一定在某处存在着自己理想和现实世界能够相互兼容的方法。`,
    );
    await me.say_and_wait(`所以，请${me.name}助我一臂之力。`);
    await era.printAndWait(`${me.name}向他低下了头。`);
    await era.printAndWait(
      `许久未得到回应，保持不动姿势的二人像是海岸突然矗立的两块礁石一样。`,
    );
    await era.printAndWait(
      `浄风幸「我会和我家的孩子说明的，她也会同意的，那么，比赛的地点是」`,
    );
    await era.printAndWait(
      `海浪将不甘与悔恨带回深海之中，留下的却是希望与期待。`,
    );
    await me.say_and_wait(`回到那片希望之风吹拂过的地方。`, true);
    await era.printAndWait(`此刻海风化为了岚`);
    await me.say_and_wait(`就在学院的草场上吧。`);
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
    await chara_talk.say_and_wait(`咚咚————训练员君，我进来了.`);
    await era.printAndWait(
      `随着门把手的转动,那位令${me.name}心醉的少女打开了门.`,
    );
    await chara_talk.say_and_wait(`训练员君♪我就知道${me.name}在这里.`);
    await chara_talk.say_and_wait(`都已经是圣诞节了,还在思考计划吗?`);
    era.printButton(`「${chara_talk.name}是打算和我约会吗?」`, 1);
    await era.input();
    await era.printAndWait(`${chara_talk.name}看起来更开心了`);
    await chara_talk.say_and_wait(
      `呵呵~原来训练员君这么希望和我约会吗?啊啦♪${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我的魅力真是惊人呢⭐`,
    );
    await chara_talk.say_and_wait(`既然训练员君都邀请我了,那么现在就出发吧！`);
    era.drawLine();
    await chara_talk.say_and_wait(
      `————训练员君,偶尔想这样走在步行道上也不错呢.`,
    );
    era.printButton(`「啊啊.....好耀眼」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}与换上了冬装的${chara_talk.name}走在大街上,本就美丽的她在换上了精心挑选的衣服之后独特的气质深深抓住了${me.name}的心.`,
    );
    await era.printAndWait(
      `游客A:这位是${chara_talk.name}吧?我在电视上看过她的跑步.`,
    );
    await era.printAndWait(
      `游客B:是${chara_talk.name}!我是${me.name}的粉丝!请务必给我签名!`,
    );
    await chara_talk.say_and_wait(`哎呀,原来我已经这么出名了吗?`);
    await era.printAndWait(`不妙,好像越来越多的人注意到她的到来了`);
    await era.printAndWait(
      `${chara_talk.name}的魅力似乎也将无关人员也牵扯进来了,`,
    );
    era.printButton(
      `(才不能让${me.name}们打扰和${chara_talk.name}共处的时光呢)`,
      1,
    );
    await era.input();

    await era.printAndWait(
      `${me.name}握紧${chara_talk.name}逐渐温暖起来的小手，加快步伐试图甩开那些追星的粉丝们`,
    );
    await chara_talk.say_and_wait(`.....呵呵♪`);
    await era.printAndWait(
      `${me.name}们好不容易才甩开了紧紧追在后面的粉丝群后,才发觉自己来到了市中心公园`,
    );
    await era.printAndWait(
      `比起上气不接下气的${me.name},身为赛马娘的她似乎连呼吸都没有打乱节奏.`,
    );
    await era.printAndWait(`————比起平时的训练,这连开胃小菜都算不上.`);
    era.printButton(`(呼...呼...呼啊,总算甩开他们了吧)`, 1);
    await era.input();

    await chara_talk.say_and_wait(`训练员君,这里好像很安静呢.`);
    await era.printAndWait(
      `相互交织的led灯缠绕在道路两旁的树木上,从${me.name}们的身后向前方无限延伸.`,
    );
    await era.printAndWait(
      `彩灯照亮了圣诞之夜,也为12月的寒风带来了一丝温暖和光明.`,
    );
    era.printButton(`是啊,这里真是一个约会的好地方啊`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `平安夜的话,训练员先生♪ ... 不想和最喜欢的人一起分享慢慢流逝的时光吗?`,
    );
    era.printButton(`(都这么说了不展现自己的勇气可不行啊)`, 1);
    await era.input();

    await chara_talk.say_and_wait(`哼哼~所以训练员君的回答是?`);
    era.printButton(`${chara_talk.name}小姐,请和我约会!`, 1);
    await era.input();

    await chara_talk.say_and_wait(
      `啊啦~训练员君可真有勇气呢,虽然我也想就这么顺着气势答应下来,不过————`,
    );
    await era.printAndWait(`在刚刚的奔跑中${me.name}的头发变得乱糟糟的`);
    await chara_talk.say_and_wait(
      `训练员君的样子可真可爱呢,与其约会不如先把头发梳理一下吧`,
    );
    era.printButton(`「啊hao」`, 1);
    await era.input();

    await era.printAndWait(
      `还没有等${me.name}回复${chara_talk.name}就从自己的挎包中取出了梳子`,
    );
    await chara_talk.say_and_wait(`训练员君把头低下来`);
    await era.printAndWait(
      `${me.name}乖乖顺从${chara_talk.name}的意图将头低了下来.`,
    );
    await chara_talk.say_and_wait(
      `嗯...${me.name}的头发有些干燥呢,训练员君真是辛苦了.`,
    );
    await era.printAndWait(
      `她尽可能控制住力度温柔的梳理着${me.name}的头发,那温暖而感怀的气息让${me.name}回忆起了小时候在草地上晒太阳的气息.`,
    );
    await chara_talk.say_and_wait(
      `......这样的话就差不多了♪那么,训练员君,今天的约会就还请多多指教了.`,
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
    await chara_talk.say_and_wait(`训练员君,到时候可不要爽约哦`);
    await era.printAndWait(
      `12月的寒风仿佛见证了${me.name}和${chara_talk.name}之间的亲密关系.`,
    );
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
      `啊，对了!我听小特她们说百货大楼有家店铺情人节的时候如果双方是情侣的话拍照打卡可以打六折呢.`,
    );
    await era.printAndWait(`训练员君可以和我一起去吗?`);
    era.printButton(`「没问题」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}和${chara_talk.name}来到了百货大楼,在搜素了一点时间后看到了那家店铺.`,
    );
    await era.printAndWait(
      `可能是什么本周的打卡圣地吧,门口排起了长队,看这样子似乎都是情侣.`,
    );
    await chara_talk.say_and_wait(
      `好多人啊,小特她们果然没有说错呢,应该就是这家了`,
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
      `服务员锐利的视线让${me.name}压力越来越大,${me.name}看向${chara_talk.name}，虽然她强装着镇定,不过剧烈摆动的尾巴还是出卖了她.`,
    );
    era.printButton(`「只有这么办了」`, 1);
    await era.input();

    await chara_talk.say_and_wait(`训练员君？`);
    await era.printAndWait(
      `${me.name}搂住了${chara_talk.name}的腰,轻抚她的脸庞,然后心一横亲了过去.`,
    );
    await era.printAndWait(
      `先是试探性的轻吻,随着气氛的不断高涨${me.name}也加快了速度,炽热的爱意最后化为了重重地深吻.`,
    );
    await era.printAndWait(
      `她的嘴唇仿佛散发着苹果的芳香,吸引着采撷者的前来.${me.name}让自己的舌头探进了她的口腔,仔细地探求着每一寸的空间`,
    );
    await era.printAndWait(
      `每当${me.name}想碰碰她的舌头时,她不好意思退回去的样子却更加刺激了${me.name}的情欲.`,
    );
    await era.printAndWait(`不可以再继续下去了,但${me.name}的动作却无法停下.`);
    await era.printAndWait(
      `在大脑因剧烈的刺激而一片空白时,${me.name}只想将这一刻化为永恒,${me.name}感到了幸福.`,
    );
    await chara_talk.say_and_wait(`......训练员君`);
    await era.printAndWait(
      `服务员:呜啊,还真是炽热的吻,那么快请进,后面的顾客等不及了.`,
    );
    await era.printAndWait(
      `无暇顾及后面的顾客,${me.name}轻捧着她的脸颊,仿佛是世间唯一的至宝.`,
    );
    await era.printAndWait(
      `她的脸颊彻底变得通红,剧烈的心跳通过二人的近距离接触而传到了${me.name}的身上.`,
    );
    await era.printAndWait(`${me.name}握住了她的手,走向了空出来的座位.`);
    await chara_talk.say_and_wait(`......`);
    await era.printAndWait(
      `二人沉默着品尝同一份巴菲,颤抖的手臂暗示了主人的不平静`,
    );
    await era.printAndWait(
      `接下来该怎么道歉?她会不会就此与我断绝关系?恐惧与喜悦在${me.name}的脑海交锋,最后留下的却是`,
    );
    era.printButton(`「${chara_talk.name}是否喜欢我,这没关系，但我喜欢她」`, 1);
    await era.input();

    await era.printAndWait(
      `在经过漫长的折磨后,这份巴菲终于见底了.${me.name}们沉默着离开了店铺,走在大街上，掠过河提，最后回到了训练室.`,
    );
    await chara_talk.say_and_wait(`呐,训练员君.`);
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
      `今天是粉丝感谢祭,是马娘们为感谢粉丝们的支持进行表演的日子.`,
    );
    await era.printAndWait(`特雷森学院的各个地方都举行着由马娘准备的活动.`);
    await era.printAndWait(
      `难得空闲下来的${me.name}也趁着这个机会到处走动,充分放松自己积累下来的压力.`,
    );
    await era.printAndWait(
      `${chara_talk.name},作为${me.name}的担当马娘,现在正观看着后辈们的表演.`,
    );
    await era.printAndWait(
      `听到来者的脚步声,下意识扭头望去,向${me.name}露出了温柔的微笑.`,
    );
    await chara_talk.say_and_wait(`训练员君也是来看马娘们的表演吗?`);
    era.printButton(`「点头」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}在${chara_talk.name}身边站定,看着眼前舞台上的马娘们努力着展现着自己最美好的一面.`,
    );
    await chara_talk.say_and_wait(
      `后辈们看上去都活力四射的样子呢,训练员君也是这么想的吗?`,
    );
    era.printButton(
      `「她们都是因为憧憬着${chara_talk.name},希望能超越她的背影所以才拼命努力的」`,
      1,
    );
    await era.input();

    await chara_talk.say_and_wait(`哎呀♪训练员君每次都能带给我意外的惊喜呢.`);
    await chara_talk.say_and_wait(`那么,训练员君,想看我上台表演吗?`);
    await era.printAndWait(
      `${chara_talk.name}的尾巴不知不觉间缠绕住了${me.name}的大腿,所幸周围的观众被舞台之上的气氛所点燃没有注意到这边的小小动作.`,
    );
    await era.printAndWait(
      `${chara_talk.name}似乎是察觉到了${me.name}的软肋,更加肆无忌惮的将整个身体贴在了${me.name}的手臂上.`,
    );
    era.printButton(`「${chara_talk.name}」`, 1);
    await era.input();

    await era.printAndWait(
      `因为害怕两人之间传出不好的传闻而影响到她的前途还有${me.name}被解雇的未来,${me.name}的身体瞬间僵直了.`,
    );
    await chara_talk.say_and_wait(`训·练·员·君♪`);
    await era.printAndWait(
      `${me.name}似乎觉得周围的目光都在看着${me.name},${me.name}开始觉得口干舌燥.`,
    );
    await chara_talk.say_and_wait(
      `训练员君的这种反应看起来也很可爱呢.虽然很可惜,不过差不多轮到我上台演出了,请不要将视线从我这里移开哦.`,
    );
    await era.printAndWait(`再回神时她已经站在舞台之上了.`);
    await era.printAndWait(
      `${me.name}连忙向周围的游客借了一份荧光棒,跟随着粉丝的浪潮开始舞动起来.`,
    );
    await chara_talk.say_and_wait(
      `享受着风,追逐着风的赛马娘,${chara_talk.name},现在将向粉丝还有后辈们献上我的歌曲.`,
    );
    await era.printAndWait(
      `那天一首复古的流行歌曲响起,在下面欢呼的粉丝们永远不会知道,这是为一人所唱的恋曲.`,
    );
  } else if (edu_weeks === 95 + 29) {
    if (era.get('flag:当前位置') === location_enum.beach) {
      if (era.get('cflag:4:位置') !== era.get('cflag:0:位置')) {
        add_event(event_hooks.week_start, event_object);
      }
      return;
    }
    await print_event_name('夏季合宿开始', chara_talk);
    await era.printAndWait(
      `第三年的夏季合宿现在正式开始，带着与去年截然不同的心态，${me.name}和${chara_talk.name}一起走向了沙滩.`,
    );
    await chara_talk.say_and_wait(
      `呵呵♪今年也是把其他人都甩在身后了呢,训练员君.`,
    );
    await era.printAndWait(`身边的爱马依然喜欢抢在其他马娘的前头到达沙滩。`);
    await me.say_and_wait(`${chara_talk.name}看上去心情不错啊`);
    await chara_talk.say_and_wait(
      `啊啦,这不是当然的嘛，必须要把去年没有好好享受的青春今年全部弥补回来嘛.`,
    );
    await era.printAndWait(
      `${chara_talk.name}似乎准备了黑色的泳装,配合她的身材似乎显得额外充满了魅力.`,
    );
    await me.say_and_wait(
      `平时的${chara_talk.name}一直喜欢睡懒觉，今天反而是她来叫我起床的.`,
    );
    await chara_talk.say_and_wait(
      `总之现在是好好享受集训时光的时间了!不过还是先把防晒霜涂好比较重要吧?`,
    );
    await chara_talk.say_and_wait(
      `训练员君可以麻烦${me.name}帮我涂下防晒霜吗?不然${me.name}喜欢的肌肤就要被太阳晒成棕色了。`,
    );
    era.printButton(`我马上就过来`, 1);
    await era.input();
    await era.printAndWait(`夏季集训就在这种轻松的气氛中开始了.`);
  } else if (edu_weeks === 95 + 44) {
    await print_event_name('不给糖就捣蛋！', chara_talk);
    await chara_talk.say_and_wait(`训练员君，起床了！`);
    await era.printAndWait(`耳边似乎传来了熟悉的声音.`);
    era.printButton(`唔，再睡一会`, 1);
    await era.input();
    await chara_talk.say_and_wait(`马上就要九点了呢！`);
    era.printButton(`什么九？嗯！`, 1);
    await era.input();
    await era.printAndWait(
      `突然意识到即将发生什么的${CharaTalk.me.actual_name}从床上瞬间弹起，紧紧忙忙的穿起衣服。`,
    );
    await me.say_and_wait(`这下要被手纲小姐说教了。`);
    await chara_talk.say_and_wait(`呵呵~`);
    await era.printAndWait(
      `看着${me.name}慌慌张张起床的样子，${chara_talk.name}轻轻的笑了。`,
    );
    await me.say_and_wait(`闹钟怎么没响？欸？`);
    await era.printAndWait(`手机上显示的时间为7点，距离上班还有1个小时。`);
    await me.say_and_wait(`${chara_talk.name}！`);
    await chara_talk.say_and_wait(`不给糖就捣蛋！`);
    await me.say_and_wait(`唔——万圣节不是愚人节啊！`);
    await chara_talk.say_and_wait(`不要嘛！我就想要训练员君给我糖！`);
    await me.say_and_wait(`好吧好吧，工作结束之后一起去糖果店看一下吧。`);
    await era.printAndWait(`不知何时两人的嘴唇再次贴在了一起。`);
    await chara_talk.say_and_wait(`嗯——那就用这个稍微忍耐一下吧♪`);
    await era.printAndWait(
      `将两人的早餐端上餐桌的${chara_talk.name}露出了可爱的笑容。`,
    );
    era.drawLine({ content: '训练室' });
    await me.say_and_wait(`这就是最后一份了。`);
    await chara_talk.say_and_wait(`训练员君辛苦了♪`);
    await era.printAndWait(
      `坐在身边的${chara_talk.name}熟练的将文件收回文件夹之中。`,
    );
    await me.say_and_wait(`接下来的话。`);
    await chara_talk.say_and_wait(`接下来的话？`);
    await me.say_and_wait(`好像...有什么重要的事情要做？`);
    await chara_talk.say_and_wait(`训·练·员·君？`);
    await era.printAndWait(
      `注意到耳朵向后背过去的${chara_talk.name}，${CharaTalk.me.actual_name}不由得心里发毛。`,
    );
    await me.say_and_wait(`快想想，忘了什么？啊，对了！`, true);
    await chara_talk.say_and_wait(`训·练·员·君?`);
    await era.printAndWait(
      `${chara_talk.name}的语气逐渐加重，脸上的表情却没有丝毫的变化。`,
    );
    await me.say_and_wait(`一起去糖果店吧？`);
    await era.printAndWait(`平静的语气连自己都感到了害怕。`);
    await chara_talk.say_and_wait(
      `是呢。哎呀~姐姐都差点忘了呢，真实多亏训练员君了♪`,
    );
    await era.printAndWait(
      `刚才的压迫感就像什么也没发生一样消失了，话说她什么时候可以将领域收发自如了？`,
    );
    await chara_talk.say_and_wait(`一起出发吧？`);
    await me.say_and_wait(`不过出发之前还有一件事。`);
    await chara_talk.say_and_wait(`嗯？`);
    await era.printAndWait(`嘴唇重合在了一起。`);
    await chara_talk.say_and_wait(`唔——哈，哎哎哎？`);
    await era.printAndWait(`长达十五秒的深吻。`);
    await me.say_and_wait(`万圣节快乐！不给糖就捣蛋！`);
    await chara_talk.say_and_wait(`欸？训练员君，我·改·变·想·法·了！`);
    await era.printAndWait(
      `比起柔软的感触${CharaTalk.me.actual_name}更加在意${chara_talk.name}即将说出口的话语。`,
    );
    await chara_talk.say_and_wait(`今天晚上不会让${me.name}睡哦❤`);
    await era.printAndWait(
      `全身的力气似乎一瞬间全部消失了一样，浑身瘫软在了${chara_talk.name}的怀抱中。`,
    );
    await chara_talk.say_and_wait(`真是可爱呢。`);
    await era.printAndWait(`眼泪不知何时流了下来，一定是喜悦的泪水吧？`);
    await chara_talk.say_and_wait(`晚上也请多指教了，训练员君♪`);
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
      `当时的她似乎很开心的样子....不对,与以往在赛场之上不同,那是另一种的快乐.`,
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
      `面对突然从视野中窜出来的少女(?),${me.name}成功地被吓了一跳.`,
    );
    await chara_talk.say_and_wait(`嗯♪看来这次作战大成功呢.`);
    era.printButton(`「${chara_talk.name}这样突然蹿出来太吓人了」`, 1);
    await era.input();

    await era.printAndWait(
      `去年与${chara_talk.name}约定在这条榉树林荫道上见面,但没想到她这么活泼.`,
    );
    await era.printAndWait(
      `虽然一直以成熟的${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }自居,不过在${me.name}面前也开始展现出了她的另一面.`,
    );
    await chara_talk.say_and_wait(
      `虽说也有我按捺不住兴奋的心情提前了一个小时到这里太无聊心血来潮的缘故.`,
    );
    await chara_talk.say_and_wait(`不过训练员君被吓成这样真可爱呢♪`);
    era.printButton(`「${chara_talk.name}!!!」`, 1);
    await era.input();

    await chara_talk.say_and_wait(`呵呵♪训练员君来抓我啊.`);
    era.printButton(`「别跑！」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}们像小孩子一样追逐嬉戏,恍惚间回到了童年时期无忧无虑.`,
    );
    era.printButton(`「真快乐啊」`, 1);
    await era.input();

    await era.printAndWait(
      `所幸这条小道上来往的人数不多而且都是像${me.name}们这样的情侣`,
    );
    await era.printAndWait(
      `${chara_talk.name}姑且不论,但${me.name}现在也没有小孩子那种活力了,只能喘着粗气扶着树干看着她.`,
    );
    await chara_talk.say_and_wait(`哼哼♪这场游戏是我赢了.`);
    await chara_talk.say_and_wait(`作为胜利者,训练员要接受我一个条件.`);
    era.printButton(`「等下有这回事吗」`, 1);
    await era.input();

    await chara_talk.say_and_wait(`今天晚上和我约会吧.`);
    await chara_talk.say_and_wait(
      `和我这样潮流的美少女约会的话可是千载难逢的机会哦.`,
    );
    await chara_talk.say_and_wait(`不知训练员君意下如何呢?`);
    era.printButton(`「.....」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}正打算回答的时候,肚子却不争气的叫了起来.`,
    );
    await chara_talk.say_and_wait(
      `呵呵,训练员君看来是饿了呢,那么我们就先去吃一点东西再出发吧.`,
    );
    await era.printAndWait(
      `${me.name}再次坐在了副驾驶上,熟悉的感觉令${me.name}无比安心.`,
    );
    await era.printAndWait(
      `她插上钥匙后发动引擎,重低音的引擎轰鸣声响彻了寂静的公园.`,
    );
    await era.printAndWait(`${me.name}们在萨莉亚一起吃了稍微丰盛一点的晚餐.`);
    await era.printAndWait(
      `相较于独自一人的默默咀嚼,有${chara_talk.name}的陪伴下食物看起来更加美味了.`,
    );
    await chara_talk.say_and_wait(`OK,我在小塔上等${me.name}.`);
    await era.printAndWait(
      `${me.name}让${chara_talk.name}先回到小塔上等候,自己先去前台付账.`,
    );
    await era.printAndWait(
      `伴随着引擎的再度轰鸣,${me.name}们出发前往今天最后一个目的地.`,
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
      `${me.name}转过头看着${chara_talk.name},恰巧窥见她将视线收回的一瞬间.`,
    );
    await era.printAndWait(`之后除了音响中放出的柔和音乐外,沉默降临了此处.`);
    await chara_talk.say_and_wait(`训练员君,已经到山顶了呦.`);
    await era.printAndWait(
      `这是这座城市附近最高的山峰,从山顶向下望去,可以将整座城市收入眼底.`,
    );
    await era.printAndWait(
      `寒冷的空气带走了肺中残存的温暖,刺激着心脏的激烈跳动.`,
    );
    await era.printAndWait(
      `${me.name}看向了身旁的她,那双轻松的,明亮的眸子,带着闪闪发光的样子看着沉浸于节日庆典的城市.`,
    );
    era.printButton(`「${me.name}的眼睛真美丽呢」`, 1);
    await era.input();

    await chara_talk.say_and_wait(`呵呵♪训练员君是想和我调情吗?`);
    await era.printAndWait(
      `${chara_talk.name}将视线收回,然后再度将视线望向了${me.name}.`,
    );
    await chara_talk.say_and_wait(
      `人们常说眼睛是心灵的窗户,那么在训练员君看来,我又是什么样的呢?`,
    );
    await me.say_and_wait(`「些许感伤的温柔又美丽的眼睛」`);
    await chara_talk.say_and_wait(`训练员君又是想到了什么发出这份感慨呢?`);
    await me.say_and_wait(`「那双温柔的眼睛一直在注视着后辈们」`);
    await me.say_and_wait(`「虽然会因为快乐的时间不会一直持续下去而感伤」`);
    await me.say_and_wait(
      `「但因为坚信着后辈们会带来更加耀眼的光芒而感到快乐」`,
    );
    await me.say_and_wait(`「像是夏天万里无云的晴空一样」`, 1);
    await chara_talk.say_and_wait(
      `训练员君是不是对我评价过高了呢?而且现在是冬季呢.`,
    );
    await me.say_and_wait(
      `「没有人会小看那份温柔的力量,因为那归根结底可以算作爱.」`,
      1,
    );
    await me.say_and_wait(`「只有温柔的爱才能治愈人们心中的创伤.」`, 1);
    await me.say_and_wait(
      `「为回应那份爱而努力追逐着背影的孩子们所散发出的火焰,即使是冬天也能感受到和夏天一样的温暖」`,
      1,
    );
    await chara_talk.say_and_wait(
      `如果注视着孩子们的背影的话,明天也会是一个温暖的晴天吧.`,
    );
    await chara_talk.say_and_wait(`我能遇见训练员君真是太好了♪`);
    await chara_talk.say_and_wait(`......训练员君,可以让我任性一回吗?`);
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
    await chara_talk.say_and_wait(`训练员君,我爱${me.name}.`);
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
    await era.printAndWait(
      `路人马娘A「${chara_talk.name}学姐，这次的GIII我按照${me.name}教的方法真的胜利了！」`,
    );
    await era.printAndWait(
      `路人马娘B「原来还有这种解决方法吗？不愧是丸善学姐！」`,
    );
    await era.printAndWait(
      `路人马娘C「多亏了丸善学姐的技巧，现在和训练员先生也相处的很好了。」`,
    );
    await chara_talk.say_and_wait(
      `呵呵~我的建议能够帮上后辈们的忙也是太好了！`,
    );
    await era.printAndWait(`今天的${chara_talk.name}也在给予后辈们建议。`);
    await era.printAndWait(
      `路人马娘A「${chara_talk.name}学姐的训练员先生来了！」`,
    );
    await era.printAndWait(
      `被马娘们围在中间的${chara_talk.name}注意到了${me.name}的存在。`,
    );
    await chara_talk.say_and_wait(`训练员君！`);
    await era.printAndWait(
      `${chara_talk.name}将饱满的胸部整个压在了${me.name}的肩膀上。`,
    );
    await era.printAndWait(`路人马娘B「呜哇，这个是？」`);
    await era.printAndWait(
      `路人马娘C「丸善学姐和她的训练员今天也是非常恩爱呢。」`,
    );
    era.printButton(`${chara_talk.name}今天也在给予后辈们建议吗？`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `嗯嗯，已经有两个小时没看到训练员君了，${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我真的好寂寞呢~`,
    );
    await chara_talk.say_and_wait(`作为补偿的话，今天下午和我一起约会吧♪`);
    era.printButton(`其实我也因为好~久没看到${chara_talk.name}所以不安了`, 1);
    await era.input();
    await chara_talk.say_and_wait(`训练员君果然一直想着我呢，那么惯例的——`);
    await era.printAndWait(`二人在训练场上紧紧地抱在了一起。`);
    await chara_talk.say_and_wait(`果然还是最喜欢训练员君了呢⭐`);
  } else if (event_marks.gentle_wind === 1) {
    event_marks.gentle_wind++;
    await print_event_name(`温柔之风吹拂在整个世界`, chara_talk);
    await era.printAndWait(
      `在与${chara_talk.name}经历了难以忘怀的三年之后，夺得了URA奖杯`,
    );
    await era.printAndWait(`接下来要挑战的就是全新的闪耀系列赛了`);
    await era.printAndWait(`不过在此之前。`);
    await era.printAndWait(`浄风幸「呦，好久不见了。」`);
    await era.printAndWait(`浄风幸「恭喜${me.name}，战胜了皇帝。」`);
    await era.printAndWait(
      `浄风幸「没想到以霸道著称的皇帝最后也无法触及${chara_talk.name}的背影啊。」`,
    );
    await era.printAndWait(
      `马娘「在见过那场比赛之后，深刻了解了丸善学姐的愿望之后，在闪耀系列中，我一定会超越她的背影！」`,
      { color: chara_talk.color },
    );
    await era.printAndWait(
      `马娘「不过在此之前，丸善学姐在天台似乎有话对${me.name}说」`,
      { color: chara_talk.color },
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
    await chara_talk.say_and_wait(`不愧是训练员君呢，一下子就猜出了我是谁。`);
    await chara_talk.say_and_wait(
      `${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }我从没有这么喜欢过一个人呢♪`,
    );
    await chara_talk.say_and_wait(`这就是所谓的爱吗♪`);
    era.printButton(`${chara_talk.name}我有话想对${me.name}说，所以`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `哼哼~训练员君想对${
        era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
      }撒娇吗？`,
    );
    await chara_talk.say_and_wait(`不管是什么恶......`);
    era.printButton(`请跟我永远生活在一起`, 1);
    await era.input();
    await era.printAndWait(
      `在${chara_talk.name}一脸难以置信的神情之中，${me.name}将象征着誓约的戒指递给了她。`,
    );
    era.printButton(`比起理想，比起赛跑，我更在乎的其实是${me.name}`, 1);
    await era.input();
    era.printButton(`所以请接受我的爱意吧`, 1);
    await era.input();
    await chara_talk.say_and_wait(
      `这下的话，不对这份爱意抱以同样的回应的话，我可是没脸去见三女神呢。`,
    );
    await chara_talk.say_and_wait(
      `训练员君，不止在赛跑上，今后的生活也请多多指教了。`,
    );
    era.printButton(`我也是，今后也请多多指教了`, 1);
    await era.input();
    await era.printAndWait(
      `誓约之吻是什么味道的？咸的？还是带有一丝甜味？此刻都没眼前心醉的少女更加重要。`,
    );
    await era.printAndWait(
      `${me.name}与${chara_talk.name}之间的命运在经历错综复杂的结果之后终于得到了馈赠。`,
    );
    await era.printAndWait(
      `${chara_talk.name}的奔跑带给了赛马娘们勇气与希望。`,
    );
    await era.printAndWait(
      `赛马娘们今后也会一直追逐着${chara_talk.name}的背影然后超越她吧。`,
    );
    await chara_talk.say_and_wait(
      `比起获胜的话，能让更多的马娘们感受到希望的存在才是我的理想♪`,
    );
    await chara_talk.say_and_wait(
      `接下来的日子里，在草场的一端默默地注视着赛马娘们，然后引导她们前往伊甸园便是我新的使命了。`,
    );
    await chara_talk.say_and_wait(
      `不过此刻的话，能和训练员君甜甜蜜蜜的生活在一起才是最幸福的ge呢♪`,
    );
    await era.printAndWait(
      `引导着处于迷茫时期${chara_talk.name}的${me.name}与引导着迷茫马娘的${chara_talk.name}最终将化为温柔之风吹拂于赛马娘的世界之中。`,
    );
    await era.printAndWait(
      `就这样，二人的故事暂且迎来的结局，可喜可贺可喜可贺。`,
    );
  }
  wait_flag && (await era.waitAnyKey());
};
