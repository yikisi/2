/**
 * @file 卓芙 - 爱慕
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  '49-1': (() => {
    const title = 'Un amour à taire（隐藏的恋情）';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, you) => {
      await treve.print_and_wait([
        '某天夜里，',
        treve.get_colored_name(),
        ' 在宿舍想起了与 ',
        you.get_colored_name(),
        ' 在法国一起听过的一首歌。',
      ]);
      era.setColor(treve.color);
      era.setAlign('center');
      await era.printAndWait('过往指引着我们前进，让我们更加清醒理智。');
      await era.printAndWait('猜忌是多么的危险致命，而情感却如此不堪一击。');
      await era.printAndWait('管它希望满怀，还是听天由命。');
      await era.printAndWait('一切自有天意，不如随遇而安。');
      await era.printAndWait('离合悲欢是我们共同的记忆。');
      await era.printAndWait('爱情比我们想象得更加牢固。');
      await era.printAndWait('在我身边的时候，你都做些什么？');
      await era.printAndWait('时光披上神秘的色彩。');
      await era.printAndWait('轻柔的晚风缓缓拂过。');
      await era.printAndWait('爱情比我们想象得更加牢固。');
      await era.printAndWait('或者快乐地生活在笼子里。');
      await era.printAndWait('若没有我们，他们的选择有什么关系？');
      await era.printAndWait('爱比我们强大得多……');
      await era.printAndWait('人们认为这可能足够了，为了更爱而这么说。');
      await era.printAndWait('但这一定是我们的爱，比我们强大得多。');
      await era.printAndWait('有了我们在一起的通行证，我相信这可能足够了。');
      await era.printAndWait('我们应该清醒地说，这一切都是我们的错。');
      await era.printAndWait('爱比我们强大得多……');
      era.setAlign('left');
      era.setColor();
      era.println();
      era.printButton(
        `「我，是这么简单的法兰西${treve.child_sex_title}啊……」（升级关系）`,
        1,
      );
      era.printButton('「别胡思乱想了，再不睡要被师傅说的。」（暂不升级）', 2);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  '49-2': (() => {
    const title = 'La fée（爱上凡人的仙女）';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     * @param {string} cup 卓芙的罩杯
     */
    const f = async (treve, you, callname, cup) => {
      const ret = [];
      await era.printAndWait([
        '清风吹拂，扬起 ',
        treve.get_colored_name(),
        ` 的金丝荡漾，${treve.sex}的肌肤晃若明雪。`,
      ]);
      await era.printAndWait('湛蓝的眼眸嫣然动人，却又透着几分灵动。');
      await era.printAndWait('饱嫩润闪的唇瓣，呈现出一种近似透明的美妍。');
      await era.printAndWait('容貌有种超越年龄的媚气，一眼便能让人沉醉。');
      await era.printAndWait(
        '色泽迷人的短金发，被两个低发髻扎着，闪出精致的亮泽。',
      );
      await era.printAndWait(
        '少女套着白丝的大腿纤细腴润，踏着法式的学生皮鞋，极富女子元气。',
      );
      await era.printAndWait('但眉宇间宛若修造的容颜，绝非寻常人家可近。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 微笑，似乎并没有因为 ',
        you.get_colored_name(),
        ' 的无礼而生气。',
      ]);
      await era.printAndWait(
        `${treve.sex}穿着连衣裙，肩带在领口处交叉，连着脖子上白色的蕾丝领圈。`,
      );
      await era.printAndWait('上半身总体是白色的衣服，裹着她的双乳。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 的腰也很纤细，系了一条蓝色的皮革腰带。',
      ]);
      await era.printAndWait('而腰以下，就是蓝色裙子。');
      await era.printAndWait('群面是宝石一般觉得蓝色，这是上层。');
      await era.printAndWait('下层还有一层衬裙，是白色的，同样是蕾丝、花边。');
      await era.printAndWait('裙子不长，只到大腿的中间。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 的腿很纤细，腿上是一双洁白的过膝袜——半透明的。',
      ]);
      await era.printAndWait('袜子和裙子之间的腿，也格外诱人。');
      await era.printAndWait('在右腿处，还有一个白色的腿环。');
      await era.printAndWait(
        '脚上则穿着一双蓝色的鞋子，几条白色的绑带系在了脚腕处，还打了一个蝴蝶结。',
      );
      era.printButton('「你真漂亮。」', 1);
      await era.input();
      await treve.say_and_wait('谢谢夸奖。');
      era.printButton('「不过法国的金发碧眼好多……」', 1);
      await era.input();
      await treve.say_and_wait('我不好看吗？快看我，快看我！');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 凑上前来，俯下上半身，仰起头。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        treve.get_colored_name(),
        ' 的鼻尖，相隔一寸不到的距离。',
      ]);
      await era.printAndWait([
        '低下头，这个视角恰好可以看到 ',
        treve.get_colored_name(),
        ' 的双乳。',
      ]);
      if (cup < 'D') {
        await era.printAndWait(
          `${treve.sex}的乳房不大，粗看是BC之间的小乳鸽。`,
        );
      }
      await era.printAndWait(
        `但是现在${treve.sex}向前俯身，那观感就不一样了。`,
      );
      await era.printAndWait(
        '被连衣裙包裹着的南半球，两条连接脖子颈环的丝带，就像是快绷断了一样。',
      );
      if (you.sex_code === 1) {
        await era.printAndWait([
          '孤男寡女，',
          treve.sex,
          '倒也不怕 ',
          you.get_colored_name(),
          ' 做出什么出格的事情。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ` 看着眼前的${treve.teen_sex_title}，眼边还因为要见 `,
        you.get_colored_name(),
        ' 特地抹了胭脂，很可爱。',
      ]);
      await era.printAndWait([
        '美中不足的是，穿着连衣裙的 ',
        treve.get_colored_name(),
        '，并不能露出肚脐。',
      ]);
      await era.printAndWait('但是上帝在关上一道门的同时，又开启了一扇窗。');
      await era.printAndWait([
        '——',
        treve.get_colored_name(),
        ' 的衣服没有袖子。',
      ]);
      era.printButton('「能让我摸摸你的咯吱窝吗？」', 1);
      await era.input();
      await treve.say_and_wait('Non，Trousseur de jupons.');
      era.printButton('「我听不懂，那我摸了。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 以迅雷不及掩耳之势，双手袭击了 ',
        treve.get_colored_name(),
        ' 的双腋。',
      ]);
      await treve.say_and_wait('啊！哈哈哈……');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 双手快速落下，夹紧了腋肢。',
      ]);
      await era.printAndWait([
        '把 ',
        you.get_colored_name(),
        ' 的手指夹得紧紧的，然后笑起来。',
      ]);
      await era.printAndWait('时而仰着头，时而又想俯下身。');
      await era.printAndWait('小马驹的腋下格外细嫩，像是新制成的豆腐。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 被 ',
        you.get_colored_name(),
        ' 弄得进退维谷，往左、往右都不是办法，两腋被拿捏得死死的。',
      ]);
      await era.printAndWait([
        '背已经靠着墙壁，往前则是 ',
        you.get_colored_name(),
        ' 这个罪魁祸首的怀抱。',
      ]);
      await treve.say_and_wait([`${callname}，不要……哈哈哈……够，够了啦！`]);
      await treve.say_and_wait([
        '我，求求您了……哈哈哈哈……',
        treve.get_colored_name(),
        ' 求你了',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的行为愈发猖狂，直到 ',
        treve.get_colored_name(),
        ' 大笑到因为自己的唾液呛到。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 放过了侧过头咳嗽了两声的 ',
        treve.get_colored_name(),
        '。',
      ]);
      era.printButton('「怎么想到带腿环的？」', 1);
      await era.input();
      await treve.say_and_wait('嗯？漂亮。');
      era.printButton('「你知不知道，这是什么意思？」', 1);
      await era.input();
      await treve.say_and_wait('不知道。');
      await era.printAndWait('她轻轻地摇头，短发都飘舞起来。');
      era.printButton('「这是勾引男人的意思。」', 1);
      era.printButton(
        '「有些地方，妓女脱光衣服跟男人上床，之后数钱就夹在腿环里。」',
        2,
      );
      await era.input();
      await treve.say_and_wait('那、那我取下来吧……');
      era.printButton('「以后在别人面前不许戴。」', 1);
      era.printButton('「在我面前必须戴上。」', 2);
      await era.input();
      await treve.say_and_wait('可以，不过为什么呀？');
      era.printButton('「在我眼里，你是一个小骚货，一个salope。」', 1);
      era.printButton('「人前活泼可爱的公主，半夜和男人勾搭在一起……」', 2);
      if ((await era.input()) === 1) {
        await treve.say_and_wait('呜……你别骂我……');
      } else {
        await treve.say_and_wait('不是，又不是我主动的……');
      }
      era.print(['面对哽咽欲泣的小洋马，', you.get_colored_name(), '……']);
      era.printButton('揉胸', 1);
      era.printButton('摸腿', 2);
      ret.push(await era.input());
      if (ret.at(-1)) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 让 ',
          treve.get_colored_name(),
          ' 脱掉鞋子爬上床，双腿张开到恰好处跪好。',
        ]);
        await era.printAndWait([
          `${treve.teen_sex_title}丝滑地坐了下来，蓝色的裙摆摊开成一个小圆。`,
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 来到 ',
          treve.get_colored_name(),
          ' 的身后，光洁的后背很是漂亮。',
        ]);
        await era.printAndWait(['双手用力地握着，撑在身体两侧。']);
        await era.printAndWait([
          '本格化了的 ',
          treve.get_colored_name(),
          ' 没有反抗，任由 ',
          you.get_colored_name(),
          ' 摆布。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 抓住 ',
          treve.get_colored_name(),
          ' 的双乳，像掂量菜品一样。',
        ]);
        await era.printAndWait([
          '然后是错乱地揉捏，手法大概是『轻拢慢捻抹复挑』。',
        ]);
        await era.printAndWait([
          treve.get_colored_name(),
          ' 不用低头，也知道自己的双乳露了出来。',
        ]);
        await era.printAndWait(['画圈圈、拨动、按压……']);
        await era.printAndWait([
          treve.get_colored_name(),
          ' 一边感受着乳晕处源源不断的快感，一边保持自己的姿势。',
        ]);
        await era.printAndWait([
          `${treve.sex}这才发现，自己已经抬手向后抱住了 `,
          you.get_colored_name(),
          ' 的头，姿势像是在投降。',
        ]);
        await era.printAndWait([
          '而 ',
          you.get_colored_name(),
          '，咧嘴笑着，很是坏心眼的样子。',
        ]);
        await treve.say_and_wait('不要……');
        await era.printAndWait([
          treve.get_colored_name(),
          ' 轻声呻吟着，双目已经浮现出爱慕的样子。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 轻轻一碰，',
          treve.get_colored_name(),
          ' 就觉得爽劲冲到了后脑勺。',
        ]);
        era.printButton('「来，挺胸，收腹。」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          ' 顺着 ',
          you.get_colored_name(),
          ' 的手，按部就班地调整姿势。',
        ]);
        await era.printAndWait(`呼吸了一下后，${treve.sex}的腹部又小了一圈。`);
        await era.printAndWait([
          you.get_colored_name(),
          ' 摸着 ',
          treve.get_colored_name(),
          ' 的腰肢，确认皮带的位置，轻轻拉动。',
        ]);
        await era.printAndWait('*咔哒咔哒*');
        await era.printAndWait(
          `白色的皮带缩进，直到重新贴紧${treve.sex}的腰腹。`,
        );
        await treve.say_and_wait('好紧……');
        era.printButton('「紧一点才挺拔嘛。」', 1);
        await era.input();
        await era.printAndWait([
          treve.get_colored_name(),
          ' 被束着腰，似乎乳房都更挺拔了。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ` 从后面抱住${treve.sex}，双手交叉，握住一对白兔。`,
        ]);
        era.printButton('「真水灵。」', 1);
        era.printButton(
          `「${treve.name}还是第一次被这样肆无忌惮地揉胸吧。」`,
          2,
        );
        if ((await era.input()) === 1) {
          await treve.say_and_wait('这是什么形容词啊！');
        } else {
          await treve.say_and_wait('……嗯。');
        }
        await era.printAndWait([
          '挺起的双乳，被 ',
          you.get_colored_name(),
          ' 抓成各种模样。',
        ]);
        await era.printAndWait('软软的，像水气球一样。');
      } else {
        era.printButton('「你这还不够，有勒肉才更淑女。」', 1);
        await era.input();
        await treve.say_and_wait('勒肉？');
        await era.printAndWait([
          '不等 ',
          treve.get_colored_name(),
          ' 反应过来，',
          you.get_colored_name(),
          ' 拉动她腿环上的皮带扣。',
        ]);
        await treve.say_and_wait('腿……不可以……');
        await era.printAndWait([
          '刚刚袭击腋下的时候，',
          you.get_colored_name(),
          ' 就发现她怕痒。',
        ]);
        await era.printAndWait('现在也是双腿发抖，身体跟着一阵战栗。');
        await treve.say_and_wait('快停下！');
        await treve.say_and_wait(`${callname}……你快停下呀，笨蛋！`);
        era.printButton(`「卓芙骂人都这么温柔吗？真是好相处呢。」`, 1);
        await era.input();
        await treve.say_and_wait('不要摸大腿内侧呀！快停下啦……');
        await era.printAndWait([
          treve.get_colored_name(),
          ' 咬着下唇，晃得美乳上上下下。',
        ]);
      }
      era.printButton('「我要你说我喜欢听的话。」', 1);
      era.printButton('「说点好话看看？」', 2);
      await era.input();
      await treve.say_and_wait('……');
      await treve.say_and_wait(`${callname}……${you.actual_name}……喜欢……`);
      await treve.say_and_wait(`我好羡慕${callname}的担当……`);
      await treve.say_and_wait(
        `${treve.name} 看到 ${you.actual_name} 就腿软……`,
      );
      era.printButton('「不够好听。」', 1);
      era.printButton('「你自己呢？」', 2);
      if ((await era.input()) === 1) {
        await treve.say_and_wait('啊啊啊啊……');
        await treve.say_and_wait(`${you.actual_name} 是万众瞩目的训练员！`);
        await treve.say_and_wait(
          `${treve.name} 甘愿拜倒在 ${you.actual_name} 脚下……`,
        );
      } else {
        await treve.say_and_wait(`${treve.name}，${treve.name} 自己是大笨蛋！`);
        await treve.say_and_wait(
          `我……看到 ${callname} 就发情，脑袋里全是浆糊……`,
        );
      }
      era.printButton(`「想看卓芙尿尿的地方。」`, 1);
      await era.input();
      await treve.say_and_wait('变态！');
      era.printButton('「谁是变态？」', 1);
      await era.input();
      await era.printAndWait([treve.get_colored_name(), ' 满脸委屈地噘着嘴。']);
      await treve.say_and_wait(`${treve.name} 是变态。`);
      era.drawLine();
      await era.printAndWait([
        '脱下内裤，',
        treve.get_colored_name(),
        ' 躺在床上。',
      ]);
      await era.printAndWait([
        '按照 ',
        you.get_colored_name(),
        ' 的要求，双腿放到了身旁，膝盖折叠。',
      ]);
      await era.printAndWait(
        '脚后跟又紧贴着大腿根部，脚掌完全绷直来让她不能放松。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' 的私处，正门户大开，对着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '鲍鱼似的私处，稀疏的金毛掩盖下，粉嫩的双唇随着呼吸开合。',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' 主动把手垫在了枕头下，不做抵抗。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 埋下头，隔着十几厘米，就能闻到马娘『发春期』的气息。',
      ]);
      await era.printAndWait('淡淡的，有点腥臭，有点少女的芳香。');
      await era.printAndWait('两瓣大阴唇之间的缝隙里，是更加水嫩的小阴唇。');
      await era.printAndWait('薄薄的边缘，近距离打量下很是诱人。');
      await treve.say_and_wait('啊……不要……');
      await era.printAndWait('她快速呼吸，喘不过气来。');
      era.printButton(`有节奏地舔 ${treve.name} 的阴唇。`, 1);
      await era.input();
      await era.printAndWait([
        '淡淡的咸味在 ',
        you.get_colored_name(),
        ' 的舌尖蔓延，但是这样还不够。',
      ]);
      era.printButton(`拨开${treve.name}的阴唇。`, 1);
      await era.input();
      await treve.say_and_wait('不要……');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 面前的，是更加红润的嫩肉。',
      ]);
      await era.printAndWait('上面还沾了一层水，看上去美妙至极。');
      await treve.say_and_wait(`我还是……处……${you.actual_name}，还是……`);
      era.printButton('「好的，我现在先不动」', 1);
      await era.input();
      await treve.say_and_wait('嗯。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 的小阴唇，完全被 ',
        you.get_colored_name(),
        ' 的舌头推着。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 接着一口吻住阴唇包被之下那鼓起的肉核，然后用力吮吸起来。',
      ]);
      await era.printAndWait([
        '这下子，整块皮肉都被吸进了 ',
        you.get_colored_name(),
        ' 的双唇之间。',
      ]);
      await era.printAndWait('肉核更是无处可逃，圆圆地鼓了起来。');
      await treve.say_and_wait('不行了……别吸啊啊啊啊啊……');
      await treve.say_and_wait('小宝宝，还不能给你生……');
      await era.printAndWait([
        '三番五次的吮吸，让 ',
        treve.get_colored_name(),
        ' 满头大汗。',
      ]);
      await era.printAndWait([
        '这个时候 ',
        you.get_colored_name(),
        ' 又一而再再而三地扫过她的穴口。',
      ]);
      await era.printAndWait('触而不入的紧张感让少女欲仙欲死。');
      await treve.say_and_wait('不要……不要……');
      await treve.say_and_wait('快停下来……');
      await treve.say_and_wait('要丢了……去了！');
      await treve.say_and_wait('明天我还要见师傅……');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 语无伦次地说着，直到。',
      ]);
      await era.printAndWait(
        '——淡白的琼浆从嫩穴口流出，接着的几缕则是直接溅出。',
      );
      await era.printAndWait('她抽出枕头下的手，捂着自己的脸。');
      await treve.say_and_wait(`${callname} 讨厌！`);
      era.printButton('「我也快忍不住了，你先起来。」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' 懒散地爬起身，看到一根肉棒已经勃起。',
      ]);
      era.printButton('「刚刚看了你的，你也看看我的吧。」', 1);
      await era.input();
      await treve.say_and_wait('有什么好看的。');
      era.drawLine();
      await treve.say_and_wait(
        `……对不起，${you.actual_name} 的肉棒……好、好大，好粗，${treve.name}，喜欢……`,
      );
      await era.printAndWait([
        treve.get_colored_name(),
        ' 爬到地上跪下，地上铺了地毯，也不会磕脚。',
      ]);
      await treve.say_and_wait('有点臭……');
      await era.printAndWait([treve.get_colored_name(), ' 如是评价。']);
      era.printButton('「喜欢吗？」', 1);
      await era.input();
      await era.printAndWait([treve.get_colored_name(), ' 默不作声。']);
      era.printButton('「看样子是喜欢咯。」', 1);
      await era.input();
      await treve.say_and_wait('才没有！');
      await era.printAndWait([
        '话刚说完，',
        you.get_colored_name(),
        ' 就把肉棒直顶她的鼻子。',
      ]);
      await era.printAndWait(['——准确来说，是人中穴，嘴唇上方的沟壑。']);
      await era.printAndWait(['龟头完全挡住了她两个鼻孔的气路。']);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 每一次吸气，都不得不品尝 ',
        you.get_colored_name(),
        ' 的味道。',
      ]);
      era.printButton('「听你师傅说你唱歌很好听。」', 1);
      await era.input();
      await treve.say_and_wait('唱歌？');
      era.printButton('「就巴黎特雷森的校歌吧。」', 1);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' 就这样跪在地上，鼻子被肉棒顶住，还要唱校歌。',
      ]);
      await era.printAndWait([
        '好不容易唱完后，',
        you.get_colored_name(),
        ' 的雄臭味，已经完全进入了她的鼻腔。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 俯身看着 ',
        treve.get_colored_name(),
        '。',
      ]);
      await era.printAndWait('双颊白皙，吹弹可破。');
      await era.printAndWait(
        '眼睛是宝蓝色的，眼角还化了妆，在夜色下嫣然动人。',
      );
      await era.printAndWait('一头华丽的金色短发，真是货真价实的公主。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 被 ',
        you.get_colored_name(),
        ' 看得不好意思，无奈地伸出舌头。',
      ]);
      await era.printAndWait([
        '她的舌头远比 ',
        you.get_colored_name(),
        ' 更尖、更细，软软的，一下舔到了 ',
        you.get_colored_name(),
        ' 的马眼。',
      ]);
      await era.printAndWait([
        '一番舔舐后，',
        treve.get_colored_name(),
        ' 发现 ',
        you.get_colored_name(),
        ' 没有动静，就含住龟头，然后吮吸。',
      ]);
      await era.printAndWait('腥臭味在她嘴里扩散，一直钻到牙齿缝里。');
      await era.printAndWait([
        '每一次吮吸，都让 ',
        treve.get_colored_name(),
        ' 羞愧不已。',
      ]);
      await era.printAndWait([
        '按捺不住的 ',
        you.get_colored_name(),
        '，双手抱着 ',
        treve.get_colored_name(),
        ' 的头，对着她的嘴抽插起来。',
      ]);
      await treve.say_and_wait('不要……', true);
      await treve.say_and_wait('好难受……', true);
      await treve.say_and_wait(
        '臭！好恶心。顶到上颚了！舌根，受不了……想吐……好想吐',
        true,
      );
      await era.printAndWait([
        '每一次用力挺入，',
        you.get_colored_name(),
        ' 都把龟头顶到她口腔的最深处。',
      ]);
      await era.printAndWait(['——软腭和舌根之间。']);
      await era.printAndWait([
        '舌根处的凸起，让 ',
        you.get_colored_name(),
        ' 的龟头更加快乐。',
      ]);
      await era.printAndWait([
        '可惜 ',
        treve.get_colored_name(),
        ' 在这口交中，只能屈辱地忍受。',
      ]);
      era.printButton('忍不住了。', 1);
      era.printButton('射进嘴里。', 2);
      await era.input();
      await era.printAndWait([
        treve.get_colored_name(),
        ' 察觉到了嘴里阳具的颤抖，想说话，却又说不出来。',
      ]);
      await era.printAndWait(
        '舌根被顶住，一股股温热而腥臭的液体直接射在了最深处。',
      );
      await era.printAndWait('黏糊糊的，似乎要把她的喉咙给缝住。');
      await era.printAndWait([
        treve.get_colored_name(),
        ' 本能地翻起白眼，等 ',
        you.get_colored_name(),
        ' 肉棒拔出，几滴精液还落到了地毯上。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 捂着嘴，快速爬起来。',
      ]);
      await era.printAndWait(
        '几点精液已经从嘴角溢出，玷污了她白色的丝质手套。',
      );
      await treve.say_and_wait('咕……嗯嗯，唔。');
      await era.printAndWait([treve.get_colored_name(), ' 低着头，喉咙滚动着']);
      await era.printAndWait([
        '白色的精液从嘴里被一点点地咽下，比被 ',
        you.get_colored_name(),
        ' 口爆时更加恶心。',
      ]);
      await era.printAndWait('她那整整齐齐的白洁牙齿，也一一沾上了精液。');
      await era.printAndWait('一些精液还粘着上齿和下齿，在她的嘴里拉丝。');
      await treve.say_and_wait('哈啊……gros nigaud！');
      era.printButton('「真对不起。」', 1);
      await era.input();
      return ret;
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = 'Un heureux événement（一件幸福的事情）';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `那天放学后，${callname} 把我拉上车，带我到国道边的情人旅馆。`,
      );
      await treve.print_and_wait('这种地方，我从来没进去过。');
      await treve.print_and_wait(
        '外表朴实无华，大厅和走廊融为一体，有点狭小。',
      );
      await treve.print_and_wait(
        `${callname} 按着安装在柜台上的触摸屏选取房间。`,
      );
      await treve.print_and_wait('没想到会是半自助的，接待员都没有。');
      await treve.print_and_wait(
        `和这个人一起站在电梯前，从现在开始的几个小时里，我会被当做人偶对待，给${you.sex}处理性欲。`,
      );
      await treve.print_and_wait(
        `按照之前的经验，让${you.sex}射出来就能结束了。`,
      );
      await treve.print_and_wait(
        `一进屋，${callname} 就指示我坐在床上脱衣服。`,
      );
      await treve.say_and_wait('我想你的知道的……');
      await you.say_and_wait('啊，我会遵守约定，戴上避孕套。');
      await treve.print_and_wait(
        '脱下衣服，不管怎么说被这样看到还是会感到羞耻。',
      );
      await you.say_and_wait('好厉害，完全没有下垂的感觉。');
      await treve.print_and_wait(
        `让 ${callname} 高兴的乳房，张力也是一级品，是被 ${
          you.sex
        } 一揉就会吸到手上的理想乳房。`,
      );
      await treve.print_and_wait(`我不想让 ${callname} 以外的人碰。`);
      await you.say_and_wait('表情有点僵硬啊……肩膀再放松一点。');
      await treve.print_and_wait(
        '要做的话我希望能赶紧做。不管是手、嘴还是阴道都会被使用。',
      );
      await treve.print_and_wait(
        `我偶尔会觉得自己只是${you.sex}的自慰人偶而已。`,
      );
      await you.say_and_wait('先躺在床上，对，仰面。');
      await treve.print_and_wait('啊？不知道什么意思，想种付位吧。');
      await treve.print_and_wait(
        `按照${you.sex}指示的那样仰面躺着，${callname} 用弹钢琴一样的手势开始在我身上滑动手指。`,
      );
      await treve.print_and_wait(
        '脖子、腋下、锁骨、侧腹，用触摸都算不上的轻微力量，时不时地按上去。',
      );
      await treve.print_and_wait('我开始以为会讨厌的，但是完全没有。');
      await treve.print_and_wait(
        '取而代之的是，像孩子们玩闹的那种令人着急的感觉。',
      );
      await treve.print_and_wait('话说，我不理解为什么要做这样的事。');
      await treve.print_and_wait('一边避开乳头和阴埠，一边灵巧地将手指滑动。');
      await treve.print_and_wait('被抚摸的地方有点紧绷。');
      await treve.print_and_wait(`听 ${callname} 说女人的身体是座金库。`);
      await treve.print_and_wait('按顺序解锁，会以最好的状态打开。');
      await treve.print_and_wait(
        '手指终于进入阴道内了，一边问候入口一遍往里走。',
      );
      await treve.print_and_wait('可能已经湿了，手指顺利地进入。');
      await treve.print_and_wait('把意识集中在天花板上，努力忘记其他东西。');
      await treve.print_and_wait(
        '是LED灯啊，间接照明的那种，我开始数起天花板上的纹路。',
      );
      await you.say_and_wait('大概是这种感觉吧。');
      await treve.say_and_wait('嗯？喔喔啊！啊…啊？');
      await treve.print_and_wait('去了，我……就高潮了？');
      await treve.print_and_wait('诶？啊？');
      await you.say_and_wait('哈哈，都翻白眼了，吓了一跳吗？');
      await treve.print_and_wait('我被打了奇怪的药——这么想着环顾四周。');
      await treve.print_and_wait(
        `${callname} 右手的手指插进阴道内，左手抚摸着侧腹附近。`,
      );
      await treve.print_and_wait('没有注射器之类的奇怪工具。');
      await treve.print_and_wait('异常的只有我的小穴。');
      await treve.print_and_wait(
        `连腰都跟着痉挛了，大口大口地吃下 ${callname} 的手指，滴下爱液，完全是谄媚的姿态。`,
      );
      await treve.say_and_wait('你对我的身体做了什么？');
      await you.say_and_wait(
        `脖子、腋下、肚子、侧腹，卓芙 真的全身满是弱点啊。`,
      );
      await treve.print_and_wait(
        `每当${you.sex}微微移动手指时，我感觉被几十倍的力量给举起。`,
      );
      await treve.print_and_wait(
        `不对，是我的身体像鱼一样跳跃着。被 ${callname} 抠一下，就跳得乱七八糟。`,
      );
      await treve.say_and_wait('不要！停下！住手！Arrêtez！');
      await you.say_and_wait(`果然，卓芙 的表情很丰富。`);
      await treve.print_and_wait(`槽糕……完蛋了，太小看 ${callname} 了。`);
      await treve.print_and_wait(
        `这个家伙，能只用指尖就把女孩子搞得神魂颠倒，变成${you.sex}的可怜母狗。`,
      );
      await treve.print_and_wait('只是欺负了下入口，我的小穴就投降了。');
      await treve.print_and_wait('肚子的深处，子宫像干渴了一样躁动着。');
      await treve.print_and_wait(`你有多熟练？你让多少女孩子哭泣了？`);
      await treve.print_and_wait('我还是中学生啊…在这个年纪被你这样做了的话……');
      await treve.say_and_wait('等一下，请停一下……');
      await you.say_and_wait('好吧？小穴就到此为止。');
      await treve.print_and_wait('这次我的乳头被滑过了。');
      await treve.print_and_wait(
        '在阴道内的余韵中，被毫不留情的指尖刺激了僵硬的乳头。',
      );
      await treve.print_and_wait('我的乳头勃起得太过，热到连乳晕都发烫了。');
      await treve.say_and_wait('啊！嗯噢噢噢！乳头也！');
      await treve.print_and_wait(`任何女人都会哭喊着叫停的。`);
      await treve.say_and_wait('哼姆呜呜！');
      await you.say_and_wait('那么，小穴也…');
      await treve.say_and_wait('哼唔唔唔唔……');
      await treve.print_and_wait('避雷针就是这样的感觉，我的那里打雷了。');
      await treve.print_and_wait('只有下半身被切开，好似变成了别的生物。');
      await treve.print_and_wait('喉咙里只能发出像坏掉的警笛一样的声音。');
      await treve.print_and_wait(
        '如果不把身体里即将爆炸的什么尖叫出来的呀，我就受不了了。',
      );
      await treve.print_and_wait(`我的身体，被 ${callname} 肆意地弄坏了。`);
      await treve.print_and_wait('脖子向后仰着，腰随意地向前突出。');
      await treve.print_and_wait(
        `${callname} 的手指毫不留情地在阴道内挖掘，绷直的脚指向天空。`,
      );
      await treve.print_and_wait(
        '一直忍耐的『尿意』到达极限，让濒临决口的快感变强数百倍不止。',
      );
      await treve.say_and_wait('喔啊啊啊出来了……出来了！不要，不要这样……');
      await you.say_and_wait('那不是尿尿，可以出来的。');
      await treve.print_and_wait(
        `${callname} 一按阴蒂，腰就跳起来，洒出水汪汪的透明液体。`,
      );
      await treve.print_and_wait(
        '虽然拼命地用力想要关闭尿道，但是身体完全不听使唤。',
      );
      await treve.print_and_wait('床单上有斑点，连屁股都能感觉到水的凉意。');
      await you.say_and_wait(`这是第一次潮吹吗？卓芙 真的很容易有感觉。`);
      await treve.say_and_wait(
        '啊……啊……哈啊……不要，停下，请停下吧，请饶了我的小穴……',
      );
      await treve.print_and_wait(
        '即使错开腰也逃不掉，一直被欺负弱点，被抓住责备。',
      );
      await treve.print_and_wait(
        `滴着爱液祈求 ${callname} 原谅的我，一定，表情很糟糕。`,
      );
      await treve.print_and_wait(
        '眼泪和口水溅得到处都是，一定是世界上最幸福的雌性的脸。',
      );
      await treve.print_and_wait(
        `在 ${callname} 的手拔出来之前，我被弄潮吹了好几次。`,
      );
      await treve.print_and_wait('全身痉挛，连改变姿势都做不到。');
      await treve.print_and_wait(
        '感觉就像是神经全部被抽出来，把快乐直接注入脑浆一样。',
      );
      await treve.print_and_wait(`${callname} 慢慢地抚摸着我的肚子、我的头发…`);
      await treve.print_and_wait(
        '为了疼爱露出肚子的宠物狗，温柔地揉捏着跳跃的子宫。',
      );
      await you.say_and_wait('慢慢记住吧，最后我会让你的子宫也变舒服的。');
      await treve.say_and_wait('啊啊啊啊……');
      await treve.print_and_wait(
        `不行……雌性的本能……想向强壮的雄性屈服，被${you.sex}支配……`,
      );
      await treve.print_and_wait(
        '师傅没教过我这样的事啊，全部被夺走了，我的自尊心、自信……',
      );
      await treve.print_and_wait(
        `至今为止积累的一切全部被涂上了${you.sex}的颜色，救命……`,
      );
      await you.say_and_wait('那我差不多也想拜托你了。');
      await treve.print_and_wait(`${callname} 脱下了内裤，展示屹立的阴茎。`);
      await treve.print_and_wait(
        '无论怎么看都和骗人的一样，粗细、长度，血管都绷出来了，和电影里看到的完全不同。',
      );
      await treve.print_and_wait(
        '像热气一样升腾起来，呛人的雄性气味烧坏了我的大脑。',
      );
      await treve.print_and_wait('在那之前，身体已经完全屈服，准备留下子孙。');
      await treve.print_and_wait(
        '收紧的肚子里隐隐作痛，肌肉肆意地把子宫拉下。',
      );
      await treve.print_and_wait('只有强壮的雄性才被允许的特权。');
      await treve.print_and_wait(`被 ${callname} 的种子蹂躏是我卵子的义务。`);
      await treve.print_and_wait('请给我，给我这个，我想要你。');
      await treve.print_and_wait(
        '子宫因为饥饿谄媚而刺痛，抵抗的意识淡薄了，没注意到垂涎的阴道口。',
      );
      await you.say_and_wait('盯着看？有那么喜欢吗。');
      await treve.print_and_wait('煽动我的，发自内心的提问声。');
      await treve.print_and_wait(
        `差劲，差劲死了，你一定就这样把好几个女人都变成了雌性吧。`,
      );
      await treve.say_and_wait('咕……不是挺有型的吗，总之先戴上避孕套……');
      await you.say_and_wait(`在那之前，口交，卓芙 做得到吧？`);
      await treve.print_and_wait('只能顺从了，这也是没办法的事吧？');
      await treve.print_and_wait(
        '含在嘴里的瞬间，被鼻子里的雄臭烧昏头，又吹出了潮水。',
      );
      await treve.print_and_wait(
        '已经只懂得谄媚的笨蛋小穴，期待今后被贯穿，把淫水流的厉害。',
      );
      await treve.print_and_wait('太大了，只能含进去一半多。');
      await treve.print_and_wait('为了不让牙齿蹭到，拉下下巴，收紧嘴。');
      await treve.print_and_wait('无法正常呼吸，鼻息也急促起来。');
      await you.say_and_wait('你的脸，真让人意外。');
      await treve.say_and_wait('哼哦哦哦，咕，嘶，呜呜，哈啊…哈啊，啊姆。');
      await you.say_and_wait(`卓芙 努力的样子很可爱呢。`);
      await treve.print_and_wait('抚摸着头，玩弄耳朵。');
      await treve.print_and_wait(
        '不知什么时候又躺下来了，尾巴卷出了爱心的形状。',
      );
      await treve.print_and_wait(`${callname} 拔出的阴茎，覆盖在我身上。`);
      await treve.print_and_wait('逃不掉，不可避免，无法抗拒。');
      await treve.print_and_wait('我从现在开始，一定会被欺负到脑子都不正常。');
      await treve.print_and_wait(
        '记住这个生殖器，变成无法战胜雄性的杂鱼雌性。',
      );
      await treve.print_and_wait('糟透了……快点啊…');
      await treve.say_and_wait('哇哦哦哦噢噢噢噢！');
      await treve.print_and_wait('一下子就被打倒了。');
      await treve.print_and_wait('小穴，变得很奇怪。');
      await you.say_and_wait('这是你第一次被这样操吧，我尽量快点结束。');
      await treve.say_and_wait('停下吧，脑子会变奇怪的！这种事，我不知道啊…');
      await treve.print_and_wait('就像要把G点顶出来一样，对着最深处活塞。');
      await treve.print_and_wait(
        '即使半狂乱地哭喊，不留情面的『啪啪』声也不会停下。',
      );
      await treve.print_and_wait(
        '意识不知道飞去了哪里，也不知道高潮了多少次，被强硬地拉回来灌注快乐。',
      );
      await treve.print_and_wait(`抽插了十几分钟，${callname} 终于射精了。`);
      await treve.print_and_wait(
        '热的不像有隔了层橡胶，像被注入岩浆一样的一击。',
      );
      era.drawLine();
      await treve.print_and_wait(
        '恢复意识的时候已经过了几个小时了，周围是纸巾盒避孕套的包装。',
      );
      await treve.print_and_wait(
        '垃圾箱里还有几个系好的避孕套，已经不知道换了几次了。',
      );
      await treve.print_and_wait(
        `记得是某次后入位的时候，${callname} 拔出阴茎，更换避孕套时，我昏倒了。`,
      );
      await treve.print_and_wait(`被 ${callname} 抱在怀里，一直玩弄身体。`);
      await treve.print_and_wait(
        '虽然想跳开，但我现在连靠自己站起来都做不到。',
      );
      await you.say_and_wait(`早上好，卓芙。我们身体很投缘，很舒服吧？`);
      await treve.say_and_wait('哈啊……哈啊……已经结束的话，先放开我。');
      await you.say_and_wait(`因为 卓芙 尾巴缠着我所以做不到呢。`);
      await treve.print_and_wait('诶？');
      await you.say_and_wait('不服输对运动员来说可能很好。');
      await treve.print_and_wait(`${callname} 说着又把手靠近我的阴蒂。`);
      await treve.print_and_wait('由于条件反射的身体反应，呼吸一滞。');
      await treve.say_and_wait('等等！不要……对不起！真的很舒服。');
      await treve.print_and_wait(
        `${callname} 满意地用鼻子笑出声，就把手放回了我的乳房。`,
      );
      await treve.print_and_wait(
        '和小孩子玩橡皮泥一样杂乱的揉搓方式，我的身体对那个也起了反应而发抖。',
      );
      await treve.print_and_wait(
        '可恶……被抱着心情很好，无法违抗。连法国的大家都没见过这样的我。',
      );
      await treve.print_and_wait(
        '不知道的各种快乐被灌输在脑海里，从心底感到喜悦。',
      );
      era.drawLine();
      await treve.print_and_wait(
        `早上，被 ${callname} 送到宿舍前，开门后摇摇晃晃地走路。`,
      );
      await treve.print_and_wait('脚像灌了铅一样重，头和被烟霾弥漫一样模糊。');
      await treve.print_and_wait('打开手机，未接来电和留言堆积如山。');
      await treve.print_and_wait(
        '在大家担心我的时候，我因为阴道被抚摸把爱液吹得到处都是。',
      );
      await treve.print_and_wait(
        '在大家担心我的时候，子宫被一个劲地欺负得很开心。',
      );
      await treve.print_and_wait(
        '在大家担心我的时候，我品尝到了作为雌性最好的幸福。',
      );
      await treve.print_and_wait('我背叛了很多人…');
      await treve.say_and_wait('啊……啊啊，嗯。');
      await treve.print_and_wait('注意到的时候，内裤湿透了。');
      await treve.print_and_wait(
        '右手无意识地伸下胯下，划过裂缝，用阴蒂自慰。',
      );
      await treve.print_and_wait(
        '——一点也不舒服，不像那时那样。为什么？明明是同一个地方。',
      );
      await treve.print_and_wait(
        '趴在桌子上，左手从胸罩下面把手伸进去，捏着僵硬的乳头。',
      );
      await treve.print_and_wait(
        '从笔筒里抽出一支较粗的圆珠笔，是师傅送我的礼物。',
      );
      await treve.print_and_wait('浅……够不到啊！完全不够。');
      await treve.print_and_wait(
        '沉迷于手淫，吐槽各种各样的事，连椅子都湿透了。',
      );
      await treve.print_and_wait(
        '但是去不了，我知道，因为我品尝过『真家伙』了。',
      );
      await treve.print_and_wait(
        '连呼吸都能堵住，剜着喉咙那根巨物从脑海中闪过。',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' 收到了 ',
        treve.get_colored_name(),
        ' 的信息：',
      ]);
      await treve.say_and_wait('下一次是什么时候？');
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Premier amou（初恋这件小事）';
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     * @param {string} callname 卓芙对玩家的称呼
     */
    const f = async (treve, you, callname) => {
      await treve.print_and_wait(
        `某天，我对子宫保持诚实，到了 ${callname} 的房间里。`,
      );
      await you.say_and_wait('突然穿这身过来……你是什么意思？');
      await treve.print_and_wait(
        '蓝白低调的衣服，本来是一级赛穿的服装，但我就这么穿着过来了。',
      );
      await treve.print_and_wait(
        '为优雅而牺牲了部分透气性，全力跑上楼梯的我汗液没有蒸发，而是渗进内衣里，非常潮湿。',
      );
      await you.say_and_wait('我会干你一晚上的，你要做好心理准备。');
      await treve.print_and_wait('糟糕，已经湿了。');
      await treve.print_and_wait(
        '积攒了两周的性欲，不同阶段的发春期让小穴已经黏糊糊的了。',
      );
      await treve.print_and_wait(
        '我会变成什么样呢？怎么被打败，怎么谄媚，怎么被毁掉。',
      );
      await treve.print_and_wait(
        `进入房间关上门的瞬间，我就把披肩挂在衣架上，在 ${callname} 面前坐下。`,
      );
      await you.say_and_wait('冷静点，小鸡鸡不会逃跑的。');
      await treve.print_and_wait(
        `为了让这个装傻的家伙闭嘴，我和${you.sex}接吻了。`,
      );
      await treve.print_and_wait(
        '把舌头塞进去缠上，将唾液灌进去，发出刺耳的水声。',
      );
      await you.say_and_wait(`卓芙 很有天赋呢。`);
      await treve.print_and_wait('吵死了……');
      await treve.print_and_wait('嘴里被舔了一下，对未知的触感有点吃惊。');
      await treve.print_and_wait(
        `果然 ${callname} 很擅长接吻，熟知一切性爱中让对方高兴的方法。`,
      );
      await treve.print_and_wait(
        `脱下短靴扔到一边，屁股对着 ${callname} 的脸，凑到肉棒旁去。`,
      );
      await treve.print_and_wait('以前想都不敢想的大胆体味。');
      await treve.say_and_wait('你的腥臭味……好大。');
      await treve.print_and_wait(
        '谄媚的甜言蜜语脱口而出，没办法吧？雌性赢不了的肉棒。',
      );
      await treve.print_and_wait(`整整两周，脑子因为 ${callname} 烧焦了。`);
      await treve.print_and_wait(
        `含住 ${callname} 半勃起的男根，用舌头慢慢地绕龟头半圈。`,
      );
      await treve.print_and_wait('闭上嘴发出「滋溜滋溜」的声音。');
      await treve.print_and_wait('勃起的那个马上贯穿我喉咙的深处。');
      await you.say_and_wait(`卓芙 的脚也很臭，该说咸还是酸呢。`);
      await treve.print_and_wait('变态，奇怪，差劲！');
      await treve.print_and_wait('除了你以外，我都不知道我的那种臭味。');
      await treve.print_and_wait('舌头仔细地舔着经络，慢慢地逼近根部。');
      await treve.print_and_wait(
        `期待中阴蒂推开包皮擅自跑了出来，我用大腿抓住 ${callname} 的头勒紧。`,
      );
      await treve.print_and_wait(
        '闻一下，舔一下，快点！快点，咬我也行，咬我那里！',
      );
      await treve.print_and_wait(
        '自己手淫的时候都不敢触碰，小指尖那么大的栗子。',
      );
      await treve.print_and_wait(
        '最近只要夹紧腿走路就会被阴唇和内衣摩擦，变成了随意的下流弱点。',
      );
      await treve.print_and_wait(
        `责备开始了，就这样被 ${callname} 吸住，用牙齿轻轻地碾磨。`,
      );
      await treve.print_and_wait(
        '平时连户外的空气都不接触，想忍耐是不可能的。',
      );
      await treve.print_and_wait(
        `我的腰像鲤鱼打挺一样跳了起来，把潮水泼洒在${you.sex}脸上。`,
      );
      await treve.print_and_wait('虽然想喊，但是嘴完全被堵住了。');
      await treve.say_and_wait('嗯！嗯啊啊啊啊啊，嗯，哦哦哦。');
      await treve.print_and_wait(
        '每次我有感觉的时候喉咙都会收缩，把龟头挤压。',
      );
      await treve.print_and_wait(
        '我被当成了飞机杯，可以通过刺激阴蒂来开关的方便工具。',
      );
      await treve.print_and_wait(`${callname} 的肉杆在嘴里发抖，大量吐精。`);
      await treve.print_and_wait(
        '不是电影里那种流水一样的射精，是像炼乳一样浓厚的精液。',
      );
      await treve.print_and_wait(
        '我把以要在喉咙深处开个洞般气势射出的精液，用力地移动喉咙咽下。',
      );
      await treve.print_and_wait('面对你这样的雄性不可能吐出精液吧。');
      await you.say_and_wait('口交变得很擅长了呢，给，水。');
      await treve.print_and_wait(`${callname} 稍微有点吃惊地把水递了过来。`);
      await treve.print_and_wait(`我大大地张开嘴，让${you.sex}看清喉咙深处。`);
      await treve.print_and_wait(
        '你看，你最重要的孩子，全部都掉在我的胃里了哦？',
      );
      await treve.say_and_wait('啊……');
      await treve.print_and_wait('雄臭从食道涌上来，一直贯穿到大脑。');
      await treve.print_and_wait(
        '从小穴中已经滴下了雪白的淫液，不直接落下而是粘稠地垂下。',
      );
      await treve.print_and_wait(
        '我的子宫……下降到了小孩子的手指都能触摸到的程度。',
      );
      await treve.say_and_wait('这次，请在我的阴道里…');
      await treve.print_and_wait(
        '我像青蛙一样张开腿，用手指放大私处，试着媚笑。',
      );
      await treve.print_and_wait('你看，这里有能让你舒服的洞哦？');
      await treve.print_and_wait('插进去的话一定最舒服了。');
      await treve.print_and_wait('是黏糊糊的牝马雌穴哦？');
      await treve.print_and_wait('来了！');
      await treve.say_and_wait('嗯……！啊……！');
      await treve.print_and_wait(
        '一下子被贯穿了，被龟头戳到了，和子宫接吻，变得奇怪。',
      );
      await treve.print_and_wait('好热，形状好棒。');
      await treve.say_and_wait('那里，多戳几下……喜欢。');
      await treve.print_and_wait('每一次活塞都很厉害，脑内的神经都要短路了。');
      await treve.print_and_wait(
        `紧紧的收缩阴道的话，${callname} 也会露出苦闷的表情。`,
      );
      await treve.print_and_wait(`很可爱，我想一直这么勒紧${you.sex}。`);
      await treve.print_and_wait('听到「噗」的声音，肉棒要拔出去了……');
      await treve.print_and_wait('不行，不行！再多爱我一点，不插入是不行的…');
      await you.say_and_wait(`这是什么啊，你真是最顶级的名器啊 卓芙！`);
      await treve.print_and_wait('啊……好开心。');
      await treve.print_and_wait(
        `被${callname} 抚摸着头，让我匍匐着，像小狗一样，从后面做。`,
      );
      await treve.print_and_wait('呀啊！这样，简直就是野兽交合。');
      await treve.print_and_wait(
        `我因为汗液而粘在一起的头发被 ${callname} 粗暴的抓起，像把手一样握住。`,
      );
      await treve.print_and_wait(
        '笨蛋！明明是女孩子最重要的东西之一，太过分了。',
      );
      await treve.print_and_wait('被从后面紧紧的抓住乳房，下体互相碰撞。');
      await treve.print_and_wait('我无力地把脸趴在枕头上。');
      await you.say_and_wait('真是个好屁股啊，太色气了……');
      await treve.print_and_wait('笨蛋、cruche、Imbécile……');
      await treve.print_and_wait(
        '每次腰被撞击的时候屁股都会欺负，明明有点痛，却很舒服。',
      );
      await treve.say_and_wait('……想要。');
      await treve.print_and_wait('说完我就被翻过身吸出了舌头，然后……潮吹了。');
      await treve.print_and_wait('虽然快无法呼吸了，但是嘴不会放开。');
      await treve.print_and_wait('发出「啾噜、啾噜」的声音。');
      await you.say_and_wait(`可恶，要射出来了，卓芙！`);
      await treve.print_and_wait(`我把脚缠在${you.sex}腰上紧紧地抱住。`);
      await treve.print_and_wait('不要逃跑，全部注入子宫。');
      await treve.print_and_wait(`${you.sex}的龟头，和我的子宫口非常契合。`);
      await treve.print_and_wait('全部交给我，一点也不放过，全部……');
      await treve.print_and_wait(`勒紧脚，不让${you.sex}拔出肉棒。`);
      await treve.print_and_wait('用区区人类的力量抵抗也是没用的哦？');
      await treve.print_and_wait(`${callname}，注精完成。`);
      await you.say_and_wait(`……哈啊，卓芙，售后服务呢？`);
      await treve.print_and_wait('哈哈，我怎么会喜欢上这么差劲的人的？');
      await treve.print_and_wait(
        '不过还挺好吃的，没办法，就帮你扫除口交一下。',
      );
      await treve.print_and_wait('……不够、不够、不够、不够！');
      await treve.print_and_wait(
        `我抓住 ${callname} 的肩膀翻过身，这次我在上面。`,
      );
      await you.say_and_wait('让我休息一下？');
      await treve.print_and_wait('你在开玩笑吧，是你的话做多少都可以吧？');
      await treve.print_and_wait(
        '第一次用骑乘位榨取，只能模仿色情视频的样子做。',
      );
      await treve.print_and_wait('无论做多少次，都无法习惯。');
      await treve.print_and_wait(
        '只是屁股沉下，让肉棒完全埋入身体，快感就会渗出，意识会被放飞。',
      );
      await treve.print_and_wait('好了，你也别放松，加油～加油～再满足我吧。');
      await treve.print_and_wait('要用你的肉棒，杀了我哦。');
      await treve.print_and_wait('大脑恢复正常的时候，太阳已经完全升起了。');
      await treve.print_and_wait(`${callname}一副喘不过气的样子。`);
      await treve.print_and_wait(
        '在那之后我也一直索取着，改变姿势连战，稍微休息一下就继续做爱。',
      );
      await treve.print_and_wait('嘴巴和阴道被插入的次数已经数不清了。');
      await treve.print_and_wait(
        `虽然也想试一下屁股，但 ${callname} 说那个得事先做好准备。`,
      );
      await treve.print_and_wait('饥渴与干涸得到了满足，但是……');
      await treve.print_and_wait(
        `我把 ${callname} 再次推倒在床上，因为：${you.sex}晨勃了。`,
      );
      await treve.print_and_wait(
        `我在${you.sex}干涸的嘴上，印上了一个贪婪的吻。`,
      );
    };
    f.title = title;
    return f;
  })(),
  '89-continue-confirm': '要开启二番战吗？',
  99: (() => {
    const title = "Ensemble, c'est tout（只要在一起）";
    /**
     * @param {CharaTalk} treve 卓芙
     * @param {CharaTalk} you 玩家
     */
    const f = async (treve, you) => {
      const ret = [];
      await era.printAndWait([
        '来到情人宾馆，',
        you.get_colored_name(),
        ' 把 ',
        treve.get_colored_name(),
        ' 推倒在床上，嘴唇重叠起来。',
      ]);
      await era.printAndWait([
        '舌头被缠住，',
        you.get_colored_name(),
        ' 把唾液灌进去。',
        treve.get_colored_name(),
        ' 渐渐接受了，开始自己寻求。',
      ]);
      await era.printAndWait('混合的唾液从嘴边滴下也不介意，继续接吻。');
      await era.printAndWait([
        '之后 ',
        you.get_colored_name(),
        ' 吸住了 ',
        treve.get_colored_name(),
        ' 的脖颈，留下红色的痕迹，好像是要加上所有的标记。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的手触摸着 ',
        treve.get_colored_name(),
        ' 的胸口，隔着胸罩揉捏。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 因为突然的刺激而发出声音，',
        you.get_colored_name(),
        ' 同时扯住了两个乳头。',
      ]);
      await treve.say_and_wait('呀啊啊！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 接着把手伸进裙子里，抚摸大腿后，探进内裤。',
      ]);
      await era.printAndWait([
        '缝隙一被 ',
        you.get_colored_name(),
        ' 滑过，',
        treve.get_colored_name(),
        ' 的身体就发抖了。',
      ]);
      await treve.say_and_wait('快摸……');
      await era.printAndWait([
        '正如她希望的那样，',
        you.get_colored_name(),
        ' 的手指碰到了阴核。',
      ]);
      await era.printAndWait('包皮被剥掉，敏感的部分被温柔地爱抚了。');
      await treve.say_and_wait('啊……哈啊……嗯！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的另一只手又伸进 ',
        treve.get_colored_name(),
        ' 的胸口，在乳晕周围抚摸着。',
      ]);
      await era.printAndWait('以指尖画圆，一点一点地朝着中心走去。');
      await era.printAndWait(
        '终于到达乳头后，用大拇指和食指轻轻地按下，滚动，或者竖起指甲。',
      );
      await treve.say_and_wait('等、那里！');
      await era.printAndWait('明明是喜欢的。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 继续进攻，直到 ',
        treve.get_colored_name(),
        ' 头脑模糊到什么也无法思考。',
      ]);
      await era.printAndWait([
        '然后，回过神来，',
        treve.get_colored_name(),
        ' 自己张开了大腿。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 满意地把内裤脱下。']);
      await era.printAndWait([
        '也许是期待之后的事情吧，',
        treve.get_colored_name(),
        ' 的子宫一直躁动着。',
      ]);
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 脱下裤子，露出已经勃起的那个时，',
        treve.get_colored_name(),
        ' 轻轻地高潮了。',
      ]);
      await era.printAndWait('即使害怕，也不会逃跑。');
      if (!era.get('status:205:经期')) {
        era.print('要避孕吗？');
        era.printButton('让她吃避孕药', 1);
        era.printButton('生中出！', 2);
        ret.push(await era.input());
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' 抓着自己的阳具，靠近 ',
        treve.get_colored_name(),
        ' 的阴道口，慢慢地插入了。',
      ]);
      await era.printAndWait(
        '龟头部分进入后，爱液成为润滑油，让整根肉棒一下子插到了里面。',
      );
      await treve.say_and_wait('啊啊啊啊！不行！！');
      await era.printAndWait([
        '确认被吞到根部附近，',
        you.get_colored_name(),
        ' 开始动了。',
      ]);
      await treve.say_and_wait('啊！啊！好激烈……');
      await era.printAndWait([
        '每次打到腰上都会响起啪的一声，阴道壁被擦过，',
        treve.get_colored_name(),
        ' 只能在快感中喘息。',
      ]);
      await era.printAndWait(`随着肉棒的动作，${treve.sex}的身体上下移动。`);
      await era.printAndWait([
        '表情管理也已经崩坏，但 ',
        treve.get_colored_name(),
        ' 已经不在意了。',
      ]);
      await treve.say_and_wait('去了！去了！啊啊啊！！');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 的冲刺下，二人同时迎来了顶峰，温热的因子填满了 ',
        treve.get_colored_name(),
        ' 沉下的子宫。',
      ]);
      await era.printAndWait([
        '射精持续了很久，在这期间，',
        treve.get_colored_name(),
        ' 的子宫一直被龟头亲吻着灌入精液。',
      ]);
      await era.printAndWait([
        '不久全部射出来后，',
        you.get_colored_name(),
        ' 拔出肉棒。与此同时，白浊逆流而出。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 看着自己的肚子，',
        you.get_colored_name(),
        ' 又压到了她身上。',
      ]);
      await era.printAndWait('嘴唇重叠，舌头缠绕。');
      await era.printAndWait([
        '持续热吻了一会儿后，',
        you.get_colored_name(),
        ' 把重新恢复精神的那东西顶了过去。',
      ]);
      await treve.say_and_wait('啊，不行的……');
      await era.printAndWait([
        '没有什么不行的，',
        you.get_colored_name(),
        ' 再次开始活塞运动。',
      ]);
      await era.printAndWait([
        '被 ',
        you.get_colored_name(),
        ' 强行侵犯的 ',
        treve.get_colored_name(),
        ' 拼命抵抗，但是使不上力气。',
      ]);
      await era.printAndWait([
        '阴道内的抽插变得激烈，嘴巴也被 ',
        you.get_colored_name(),
        ' 的舌头蹂躏。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 紧紧抱住 ',
        you.get_colored_name(),
        ' 的后背，把身体交给快乐。',
      ]);
      await treve.say_and_wait('真是……我变成什么样都可以吗……');
      await era.printAndWait([
        '看着这样的 ',
        treve.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 露出了满意的笑容。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 双脚抱住 ',
        you.get_colored_name(),
        ' 的后背，不让 ',
        you.get_colored_name(),
        ' 逃跑。',
      ]);
      await treve.say_and_wait('嗯！射出来，全部给我。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 在龟头紧贴子宫口的状态下吐出精子。',
      ]);
      await treve.say_and_wait('齁哦……啊……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的射精还在持续，每次脉动时 ',
        treve.get_colored_name(),
        ' 的身体都会跟着痉挛。',
      ]);
      await era.printAndWait([
        '让人感觉是 ',
        treve.get_colored_name(),
        ' 小小的子宫会破裂的量，终于释放结束了。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 把肉棒慢慢地拔出。']);
      await treve.say_and_wait('能让我再去一次吗……');
      await era.printAndWait([
        '这样说的 ',
        treve.get_colored_name(),
        '，把脸蹭到 ',
        you.get_colored_name(),
        ' 的肉棒上。',
      ]);
      await era.printAndWait('就这样伸出舌头，把龟头含在嘴里。');
      await era.printAndWait('就连尿道里剩下的东西也被吸取干净。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的肉棒再次漂亮地勃起了，被 ',
        treve.get_colored_name(),
        ' 挪到了自己的私处。',
      ]);
      await treve.say_and_wait('这次从后面……');
      await era.printAndWait('匍匐而行，变成了后入的姿势。');
      await treve.say_and_wait('啊！这个不行，戳到的地方不对啊……');
      await era.printAndWait('阴道内的每一块褶皱都被摩擦。');
      await era.printAndWait([
        '由于 ',
        you.get_colored_name(),
        ' 过于激烈的动作，',
        treve.get_colored_name(),
        ' 手臂的姿势崩溃，变成了突出臀部的样子。',
      ]);
      era.printButton('「卓芙 的小穴很舒服，紧紧的棒极了。」', 1);
      await era.input();
      await era.printAndWait([
        '腰撞上去的时候，',
        treve.get_colored_name(),
        ' 的身体就会发抖。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 像攻打腹部一样顺着阴道壁往上推。',
      ]);
      await era.printAndWait([
        '被戳到G点的 ',
        treve.get_colored_name(),
        ' 感觉全身都被通了电。',
      ]);
      await treve.say_and_wait('那里！不行……又要来了！');
      await treve.say_and_wait('去了！射给我！射在我里面吧。');
      await era.printAndWait([
        '高潮的同时被 ',
        you.get_colored_name(),
        ' 中出，注入热乎的因子汁。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '稍憩片刻，说要给 ',
        you.get_colored_name(),
        ' 个惊喜的 ',
        treve.get_colored_name(),
        ' 小跑进了一旁的更衣室。',
      ]);
      await era.printAndWait([
        '过了一会儿，',
        treve.get_colored_name(),
        ' 的小脑袋从更衣室的门缝里弹了出来。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 能看出她一脸不安的表情，一手用力撑着门沿。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 伸手抓住 ',
        treve.get_colored_name(),
        ' 捂住嘴的小手，抓过来反剪到了身后。',
      ]);
      await era.printAndWait([
        '在小手离开嘴巴的一瞬间，',
        treve.get_colored_name(),
        ' 吐出舌头喘着热气的小嘴暴露无遗。',
      ]);
      await era.printAndWait([
        '或许是害怕自己控制不住会发出声音，',
        treve.get_colored_name(),
        ' 急忙咬住下唇。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 拍了拍 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      await era.printAndWait([
        '等 ',
        you.get_colored_name(),
        ' 放开她后，',
        treve.get_colored_name(),
        ' 就像母狗一样双手撑在地上，脖子上有一条无比显眼的黑色皮质项圈。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 猛地一拉狗链，让 ',
        treve.get_colored_name(),
        ' 的整个上半身被迫昂起。',
      ]);
      await era.printAndWait([
        '窒息不仅让 ',
        treve.get_colored_name(),
        ' 双颊通红，双手绝望地扣弄着项圈，徒劳地想要解开，也让她快感的刺激直线上升。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 双腿颤抖着，淫液裹挟着精液一股股地泄出，顺着大腿将胯间完全濡湿……',
      ]);
      await era.printAndWait([
        '施虐癖得到了满足的 ',
        you.get_colored_name(),
        ' 松开了狗链，精疲力尽的 ',
        treve.get_colored_name(),
        ' 跪在了地上，大口喘息着。',
      ]);
      await era.printAndWait([
        treve.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 的命令下，小脸贴到地板上，冲着 ',
        you.get_colored_name(),
        ' 撅高了屁股，用双指掰开两瓣红肿的阴唇，向 ',
        you.get_colored_name(),
        ' 展示自己刚刚被内射过的小穴。',
      ]);
      await era.printAndWait([
        '精液一点点滑落到地板上，',
        you.get_colored_name(),
        ' 十分满意。',
      ]);
      era.printButton('「聪明的狗狗一定知道接下来该怎么做吧。」', 1);
      await era.input();
      await treve.say_and_wait('请在我的飞机杯蜜穴里注入您高贵的精液吧❤️～');
      await era.printAndWait([
        '伴随着啄食般的亲吻，',
        you.get_colored_name(),
        ' 的肉棒再次开始了对爱马的侵犯。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
