/**
 * @file 北部玄驹 - 爱慕
 * @author 小黑
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '爱欲';
    /** @param {CharaTalk} kita 北部玄驹 */
    const f = async (kita) => {
      await kita.say_and_wait('啊……嗯呜……呜呜呜……');
      await era.printAndWait([
        '身体变得燥热的 ',
        kita.get_colored_name(),
        '，在床上玩弄着自己到达了高潮。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '热烈';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(['嗯……', callname, '……', callname, '……啊啊……']);
      await era.printAndWait([
        '在被子里低语着 ',
        you.get_colored_name(),
        ' 的名字，',
        kita.get_colored_name(),
        ' 咬着嘴唇高潮了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {string} callname 北部玄驹对玩家的称呼
     */
    const f = async (kita, callname) => {
      await kita.say_and_wait([
        '呜……呜呜……',
        callname,
        '，',
        callname,
        ' 呜哦哦哦哦～',
      ]);
      await era.printAndWait([
        kita.get_colored_name(),
        ' 努力揉搓着敏感的地方，满是味道的浓郁性汁狠狠地喷在了被子里。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  m_kita_notify: (kita) => [
    '多欺负几次 ',
    kita.get_colored_name(),
    '，趁她发情期的时候来车站，或许会有意想不到的事件发生哦！',
  ],
  m_kita: (() => {
    const title = '喜欢被欺负的小北';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `和 ${kita.name} 在校门口约好了，今天要一起去约会。`,
      );
      await era.printAndWait(
        `但是不知为何，今天的小北莫名戴上了口罩，还总是左顾右盼的望着什么。`,
      );
      await era.printAndWait(
        `在不知道多少次担当离开 ${you.name} 一个人去女厕所后，${you.name} 终于拉住少女问她到底发生了什么。`,
      );
      await kita.say_and_wait(`训练员${you.adult_sex_title}……就是，嗯，那个……`);
      await kita.say_and_wait(`小北我……可能到了发情期了……呜呜……`);
      await kita.say_and_wait(
        `即使吃了药也没有用，在路上只是闻到您的味道就很想要，训练员${you.adult_sex_title}，我该怎么办啊……`,
      );
      await era.printAndWait(
        `摘下口罩，小北纯熟的发情体味，混合着闷在衣服里的雌性臭味，在空气中升华为肉眼可见的热气。`,
      );
      await era.printAndWait(
        `${you.name} 呼吸着，闻到了空气中小北弥散开来的浓厚汗味，下身不由得在燥热中挺立起来。`,
      );
      await era.printAndWait(
        `JK${kita.uma_sex_title}A「我说……不觉得空气中有股臭味么？」`,
      );
      await era.printAndWait(
        `JK${kita.uma_sex_title}B「啊，是哦是哦，是什么味道呢。」`,
      );
      await era.printAndWait(
        `路过的赛${kita.uma_sex_title}JC皱着鼻子说道，${you.name} 赶紧用衣服捂住发情中的小北跑走了。`,
      );
      era.println();
      await era.printAndWait(
        `在只有两人的胶囊旅店里，脸蛋红透了的 ${kita.name} 磨蹭着双腿坐在 ${you.name} 两腿之间。`,
      );
      await era.printAndWait(
        `小北此时此刻已经完全没了平时的机灵劲，可爱的小嘴微微张开，脸蛋上满是发情后近乎狐媚的下流表情。`,
      );
      await era.printAndWait(
        `因为是穿了私服的原因，此时，小北透气的白色T恤已经被汗液彻底浸透。`,
      );
      await era.printAndWait(
        `那薄薄的布料紧贴在她身体的曲线，将小北胸口那丰满挺翘的乳肉暴露出来。`,
      );
      await era.printAndWait(
        `这两团平日里便被仔细呵护的淫熟乳球，此时正被蕾丝的胸罩紧紧包裹着相互挤压，揉蹭着分泌出混杂着奶香味的汗液。`,
      );
      await era.printAndWait(
        `似乎是察觉到了训练员的视线，小北夹紧双腿，发出呜咽的声音。`,
      );
      await kita.say_and_wait(
        `嗯……嗯呜……想要……想要训练员${you.adult_sex_title}……啊……`,
      );
      await era.printAndWait(
        `突然，${kita.name} 上下摇晃着胸部，让一对肥嫩的大白兔翻腾着跳出胸罩。`,
      );
      await era.printAndWait(
        `赛马娘近乎谄媚的表情，刚刚还呼吸沉重的少女用手臂捧起沉重的胸部，一对硕大显眼的奶头在布料上顶起显眼的凸起。`,
      );
      await era.printAndWait(
        `而后，${you.name} 感觉到了一阵温热柔软的触感，以及微微硬起的乳头在手心磨蹭的感觉。`,
      );
      await era.printAndWait(
        `因为发情而神色恍惚的 ${kita.name} 吐着舌头，用略带傻气的表情捧起雪白柔软的乳房，磨蹭着训练员的手臂。`,
      );
      await era.printAndWait(
        `少女诱人的乳沟随着胸部的挤压而变得深邃，沉甸甸的实感在 ${you.name} 手臂上磨蹭，略带汗臭的奶香味涌入鼻孔，让人兴致大发。`,
      );
      await you.say_and_wait(`我的担当可真是个，下流的孩子呢。`);
      await era.printAndWait(
        `轻声嘲笑着，${you.name} 抬手扣住 ${kita.name} 立起的乳首，让她仰着头发出不堪入耳的淫媚闷叫。`,
      );
      await era.printAndWait(
        `肉实的小腿微微抬起，雌性高潮的声音从被称为男子汉的小北口中发出，其声音大的能刺破耳膜。`,
      );
      await era.printAndWait(
        `被扣弄着奶头的马娘露出被支配的表情，在训练员的玩弄下变成区区一只的废物母马。`,
      );
      await era.printAndWait(
        `骚臭粘稠的淫水在沙发上弥散开来，无法抑制两腿间爱液的 ${kita.name} 扭动着肥臀，在乳头被指尖捏住时喷出欢喜的淫叫。`,
      );
      await kita.say_and_wait(
        `训练员${you.adult_sex_title}去了要去了咿喔喔喔喔呜呜呜呜！？`,
      );
      await era.printAndWait(
        `浑浊的雌汁从 ${kita.name} 的两腿间喷涌而出，让赛马娘的大脑发生了不可逆的转化。`,
      );
      await era.printAndWait(
        `少女的脖颈被训练员用力掐住，让 ${kita.name} 只能仰起后背，如同死鱼般痉挛着前后摇晃起屁股，迎来今天的第一次高潮。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} you 玩家 */
  async m_kita_end(you) {
    await era.printAndWait(
      `或许今天这样就可以了吧，${you.name} 抱着喘息着的少女将其平放在床上，思索着沾满少女味道的自己该怎么向骏川小姐解释。`,
    );
  },
  nyotaimori_notify: (kita) => [
    '多欺负几次 ',
    kita.get_colored_name(),
    ' 再来商店街，或许会有意想不到的事件发生哦！',
  ],
  nyotaimori: (() => {
    const title = '「简单」就餐';
    /**
     * @param {CharaTalk} kita 北部玄驹
     * @param {CharaTalk} you 玩家
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `和 ${kita.name} 相约，在商店街的餐厅里简单的就餐……`,
      );
      await era.printAndWait(
        `虽然是家很可疑的餐厅，但是看起来应该没有问题吧？`,
      );
      await era.printAndWait(
        '女服务员「啊啦，是北部小姐和她的训练员对吧？女体盛一桌，已经准备好了哦。」',
      );
      era.println();
      era.printButton('「女体盛！？」', 1);
      await era.input();
      await era.printAndWait(
        `女体盛，顾名思义便是以女体为餐盘的料理，多以生鱼片为主，作为艺伎的习俗在文化层面而合理的……`,
      );
      await era.printAndWait(`不不不，再怎么样这个也太过分了吧？`);
      await era.printAndWait(
        `根本不合理啊！？如果被发现的话就要被特雷森开除了，小北也要背上训练员是变态的而被歧视的污名了！`,
      );
      await era.printAndWait(
        `但是，一股属于担当的巨力将 ${you.name} 拉了回来，${you.name} 转过头，看到小北那坚定认真的目光。`,
      );
      era.println();
      await kita.say_and_wait(
        `训练员${you.adult_sex_title}，一直以来在我烦恼的时候帮助我，指导我锻炼，真的是非常感谢！`,
      );
      await kita.say_and_wait(
        `以这次我想给训练员，一份足够体现小北敬意的礼物，请你不要太惊讶哦！`,
      );
      await era.printAndWait(
        `看着慌慌张张的 ${you.name}，${kita.name} 微笑着将握住 ${you.name} 的手，用远高于常人的体温捂热 ${you.name} 的手心。`,
      );
      await era.printAndWait(
        `${you.name} 想要狠下心拒绝，可面对担当的请求却怎么也说不出口。`,
      );
      await era.printAndWait(
        `在担当为 ${you.name} 蒙上遮掩的黑布之后，${you.name} 被牵着手带往小北早已准备好的房间，被塞上了一双筷子。`,
      );
      await era.printAndWait(
        `在足足十分钟的不安和琐碎的杂声之后，${you.name} 终于在担当的声音下解开了布带。`,
      );
      era.println();
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait(
        `尽带着扑鼻的酒香味，一具雪白的女体正平躺在木质的餐盘上，正对着 ${you.name}。`,
      );
      await era.printAndWait(
        `黑发少女的脸蛋娇好可爱，身材丰盈而曼妙，一双摆成M字的大腿修长且笔直。`,
      );
      await era.printAndWait(
        `只是那正对着 ${you.name} 的肉感十足的圆润大屁股，还是让 ${you.name} 一眼就认出了自己的担当，${kita.name}。`,
      );
      await kita.say_and_wait(`唔嗯嗯……哈呜……咿～`);
      await era.printAndWait(
        `无色的液珠从少女赤裸的脖颈间缓缓滑下，那被喷撒上冰冷清酒的肌肤因温度微微颤动，让担当露出苦闷的表情。`,
      );
      await era.printAndWait(
        `紧紧抱住大腿摆出V字，在训练员面前高高抬起屁股的 ${kita.name} 就好像一只可口的火鸡，仅仅只是看着便让人食欲大振。`,
      );
      await era.printAndWait(
        `水滴在那隆起成坡的乳根处停下，同酱色的肉汁融合在一起，但 ${you.name} 的目光却被食材的色泽润吸引。`,
      );
      await era.printAndWait(
        `在赛马娘挺翘丰润的乳肉上，成片和切成小段的酱牛肉遮住了那美妙的双峰，却唯独没有遮住那艳粉色的乳头，`,
      );
      await era.printAndWait(
        `一对樱桃似的可爱乳尖就这样暴露在空气中，在牛肉的遮蔽下不露半分乳晕，如同刚刚摘下的石榴籽般鲜嫩可口。`,
      );
      await era.printAndWait(
        `而将视线从那对酥胸移开，带着显眼赤红色的金枪鱼红肉，紧紧贴裹着少女身材的曲线便映入眼帘。`,
      );
      await era.printAndWait(
        `毫无赘肉的腰肢和肚腩此刻成了拼盘的主体，摆出如同鲤鱼般整齐的形状。`,
      );
      await era.printAndWait(
        `各色的鱼生与蟹子以小北小巧竖长的肚脐为中心紧致地贴在一起，在喷香的酒滴下散发着独特的味道。`,
      );
      await era.printAndWait(
        `而 ${kita.name} 宝贵的子宫则被特别标出，盖上了『请按摩这里❤️』的酒红色印戳。`,
      );
      await era.printAndWait(
        `而在印戳的两侧，便是少女厚实淫靡的白嫩肉臀，摆出V字的修长结实大腿。`,
      );
      await era.printAndWait(
        `在 ${kita.name} 的动作下，那为了被雄性种付的舒适度而演化而出的，以生育子嗣而特化的安产型马娘肥尻毫无遮掩地摆在 ${you.name} 面前。`,
      );
      await era.printAndWait(
        `似乎是感觉到了 ${you.name} 侵略性的视线，小北淫熟的蜜桃肉尻在 ${you.name} 面前扭动着做出无意义的可怜挣扎。`,
      );
      await era.printAndWait(
        `被切到薄薄一片的鲔鱼生透出少女臀部的肉色，紧紧贴住那下流的曲线。`,
      );
      if (era.get('relation:68:0') > 376) {
        await era.printAndWait(
          `而那被腿肉挤压而凸显出来的肥嫩馒头屄，则在轻轻的张合中欢迎着 ${you.name} 的宠幸。`,
        );
        await era.printAndWait(
          `淫靡的蜜汁从蚌肉般雪白的肉穴中满溢而出，打湿了那独属于少女的色情粉润色泽。`,
        );
        await era.printAndWait(
          `至于这微微立起的勃起阴蒂，在 ${you.name} 手中的筷子前就像一个可笑的小小骑士，只需轻轻一戳就会媚叫着败北。`,
        );
      } else {
        await era.printAndWait(
          `而少女两腿之间那宝贵的私处，此刻正仿佛含苞待放的花朵般被小心的遮掩住。`,
        );
        await era.printAndWait(
          `此刻，一团雪白清香的蚌肉正随着收缩的穴肉，在 ${kita.name} 下流的粉润色泽中进出出。`,
        );
        await era.printAndWait(
          `本就浓厚紧致的雪白软肉，在被赛马娘那淫靡的雌媚淫酱彻底浸透过后，仅仅只是注视变成了一种犯罪。`,
        );
        await kita.say_and_wait(`嗯唔唔……`);
        await era.printAndWait(
          `随着小北胆怯的闷哼，两瓣色情的穴肉现在却成了柔软的蚌壳，将美味的珍珠吞入深处。`,
        );
        await you.say_and_wait(
          '人鱼的公主似乎不想让我过多欣赏如此贵重的秘宝呢。',
        );
        await era.printAndWait(`${you.name} 不由得开玩笑着说道。`);
      }
      await era.printAndWait(
        `而将视线再度移下，${kita.name} 那最大的弱点正不设防地暴露在 ${you.name} 面前。`,
      );
      await era.printAndWait(
        `作为 ${kita.name} 身下极其敏感的第二性器，小北的屁眼可谓是肥厚软弹。`,
      );
      await era.printAndWait(
        `如果说 ${kita.name} 的前穴是备受呵护的秘密领域，那么后穴便是榨取肉棒精液的榨精天国。`,
      );
      await era.printAndWait(
        `那有如凹陷乳头般珍贵，微微凸起的甜甜圈屁穴，仅仅凭借穴肉吮吸便足以让肉棒因受精而早泄。`,
      );
      await era.printAndWait(
        `在加上那淫媚的臀肉对肉棒的挤压榨取，小北的肛门在床上便足以称得上杀人的魔器。`,
      );
      await era.printAndWait(
        `而在小北那粉嫩敏感的屁穴褶皱上，美味的金枪鱼大腹正沿着着肮脏的沟渠平铺开来。`,
      );
      await era.printAndWait(
        `老板娘优秀的刀功将最珍贵的部分切成细丝而不断，做成盛开的花朵般让其在污秽的后庭绽放。`,
      );
      await era.printAndWait(
        `这不到一口的小小料理随着屁穴的蜷缩而一同蠕动，而经过了仔仔细细无死角的清洁之后，${kita.name} 的屁眼可谓是毫无肮脏之处。`,
      );
      await era.printAndWait(
        `赛马娘那粉嫩的屁穴正收缩着绷紧，承担着作为取悦 ${you.name} 的餐盘之用途。`,
      );
      await era.printAndWait(
        `${you.name} 的筷子在少女的肚脐上打着转，在担当可爱的反抗中准备享用这顿丰盛的盛宴。`,
      );
      await era.printAndWait('美味（各种意义上的）地享受了一段时间后');
      await era.printAndWait('就结论而言，的确是一顿美食呢。');
    };
    f.title = title;
    return f;
  })(),
};
