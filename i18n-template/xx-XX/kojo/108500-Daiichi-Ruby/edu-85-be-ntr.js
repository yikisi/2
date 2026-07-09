/**
 * @file 第一红宝石 - 育成 - NTR 结局
 * @author 梦露
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  be_ntr: (() => {
    const title = '「露比说不定会换个训练员」';
    /**
     * @param {CharaTalk} ruby 第一红宝石
     * @param {CharaTalk} you 玩家
     * @param {string} callname 第一红宝石对玩家的称呼
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        '[WARNING]\n！！！！NTR 注意！！！！\n该结局口上含有高浓度NTR要素，是否继续？',
        {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        },
      );
      era.printMultiColumns(
        ['快快端上来罢', '还是端下去罢……'].map((e, i) => ({
          accelerator: i * 100,
          config: { width: 12, align: 'center' },
          content: e,
          type: 'button',
        })),
      );
      const ret = await era.input();
      if (ret === 0) {
        await era.printAndWait('（你已经被警告过了）', {
          align: 'center',
          color: buff_colors[3],
          fontSize: '2rem',
          fontWeight: 'bold',
          isParagraph: true,
        });
        await era.printAndWait([
          '在那之后的某天，',
          you.get_colored_name(),
          ' 收到了 ',
          ruby.get_colored_name(),
          ' 委托管家先生交给你的CD。',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait('黄毛', '好了，露比，快脱了。');
        await ruby.say_and_wait('……啊，我知道了。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 似乎做好了心理准备，把手放在未婚夫的内裤上。',
        ]);
        await era.printAndWait([
          '她呼了一口气，让心平静下来。然后当尽力把内裤一下子拉下来的时候，巨大的男根，气势汹汹地飞出，出现在 ',
          ruby.get_colored_name(),
          ' 的面前。',
        ]);
        await ruby.say_and_wait('哎呀……');
        await era.printAndWait([ruby.get_colored_name(), ' 发出短暂的悲鸣。']);
        await era.printAndWait('他的巨根有力地耸立着。');
        await era.printAndWait('其姿态无愧是雄性的象征。');
        await era.printAndWait([
          '巨根像是在看着 ',
          ruby.get_colored_name(),
          ' 一样，黑光怒放。',
        ]);
        await era.printAndWait('太大了……');
        await era.printAndWait(
          '他的巨根已经勃起，像成熟的香蕉一样又黑又大。它的大小像塑料瓶一样，遍布肥大的血管，像一个生物一样暴起。',
        );
        await ruby.say_and_wait('啊……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 因阴茎太大而不禁发出感叹声。她眼睛似乎离不开那根巨根，惊讶地睁大了。她双目震惊地注视着眼前大小令人难以置信的肉棒。',
        ]);
        await ruby.say_and_wait('好厉害……竟然……会这样……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 称赞他的的巨根，特别是对长度一见钟情，气喘吁吁。',
        ]);
        await era.printAndWait([
          '她手握着巨大的根部，',
          ruby.get_colored_name(),
          ' 的手指又长又漂亮，不过，对方规格外的巨根完全和手指不搭，重新确认那个的大小。',
        ]);
        await era.printAndWait(
          '黄毛「你觉得和你的训练员比，哪个小鸡鸡比较大？」',
        );
        await era.printAndWait([
          '他带着狂傲的笑容问 ',
          ruby.get_colored_name(),
          '，目的你完全明白。但是，让作为未婚妻的她说这句话是有意义的。',
        ]);
        await ruby.say_and_wait('……！那种事，我是不会说的。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 的表情变得模糊，未婚夫把手放在 ',
          ruby.get_colored_name(),
          ' 的头上，爱抚着。',
        ]);
        await era.printAndWait('黄毛「快说。」');
        await era.printAndWait([
          '他带着锐利的表情命令 ',
          ruby.get_colored_name(),
          '，她以放弃的样子嘟囔着。',
        ]);
        await ruby.say_and_wait('您的……更大。');
        await era.printAndWait('黄毛「比谁的好？好好说出来。」');
        await ruby.say_and_wait('您的好……！比训练员更大更棒……！');
        await era.printAndWait('黄毛「说得真好。」');
        await era.printAndWait([
          '和刚才的表情完全不同，他露出柔和的表情抚摸着 ',
          ruby.get_colored_name(),
          ' 的头。',
        ]);
        await ruby.say_and_wait('对不起……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 带着抱歉的表情凝视着镜头。',
        ]);
        await era.printAndWait('看了她的样子，你意识到我曾被爱着。');
        await era.printAndWait([
          '和她对视的时候，突然你们之间插入了巨根。眼前挤满了他的肉杆，',
          ruby.get_colored_name(),
          ' 也已经从镜头移开视线，目光完全被眼前的巨物夺走了。',
        ]);
        await era.printAndWait([
          '他随意地抓住了 ',
          ruby.get_colored_name(),
          ' 的头发，压在自己的胯间。强行撬开嘴，把巨根拧进她的嘴里，粗暴地拉着头发上下移动。',
        ]);
        await ruby.say_and_wait('嗯……嗯……嗯……！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 痛苦地皱起眉头。每当黑乎乎的巨根从 ',
          ruby.get_colored_name(),
          ' 的小嘴中出来或进入时，唾液就会从嘴角滴滴答答地掉下来。',
        ]);
        await era.printAndWait(
          '在她小小的口内失去了去处的巨根，终于侵入了喉咙，把她纤细而美丽的喉咙捣得鼓起。',
        );
        await ruby.say_and_wait('嗯～！嗯……！');
        await era.printAndWait(
          '平时凛然美丽的她的脸，由于那过分的痛苦洒满了眼泪和鼻涕。',
        );
        await era.printAndWait('黄毛「出来了！给我全部喝完！」');
        await era.printAndWait(
          '未婚夫这样对她说了之后，一口气把她的头压到根部射精。那个精液以惊人的量从她的鼻子和口中漏出。',
        );
        await ruby.say_and_wait('嗯……嗯……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 咕噜咕噜地喝干精液。',
        ]);
        await ruby.say_and_wait('哈啊……！唔嗯……哈……');
        await era.printAndWait([
          '终于从 ',
          ruby.get_colored_name(),
          ' 的喉咙中拔出的巨根被粘稠的精液和唾液挂着，唾液的线从她丰润的嘴唇上延伸出来。',
        ]);
        await era.printAndWait(
          '眼睛的焦点无法对准，好像是缺氧状态，视线模糊。她的嘴角因为一直含到根部而沾满了男性的阴毛，以至侵入到嘴里。',
        );
        await era.printAndWait([
          '未婚夫把巨根放在 ',
          ruby.get_colored_name(),
          ' 的脸上，就这样把溢出来的精子涂在她姣好的面颊上。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 的脸被涂上满满的精液，从嘴里滴下唾液，完全喘不过气来。',
        ]);
        await era.printAndWait('已经不会有反抗的意思了吧。');
        await ruby.say_and_wait('嗯♥啊♥啊♥啊♥');
        await ruby.say_and_wait('哦♥♥哦♥♥♥♥');
        await ruby.say_and_wait('嗯啊啊♥嗯嗯♥');
        await ruby.say_and_wait('咕哦♥哼♥');
        await ruby.say_and_wait('哦～哦♥');
        await era.printAndWait(
          '那简直是野兽的声音。对强壮的雄性，对巨根下流的谄媚声。',
        );
        await you.say_and_wait('露比……？', true);
        await era.printAndWait([
          '不可能。',
          ruby.get_colored_name(),
          ' 用这样肮脏的声音没用地喘息。',
        ]);
        await era.printAndWait('一只巨大的黝黑雄性在侵犯一只洁白的雌性。');
        await era.printAndWait(
          '雄性把她从上面压住，用力地摇着腰，雌性一边发出肮脏的喘息声，一边像抱着一样把脚缠在雄性的腰上。',
        );
        await era.printAndWait([
          '从 ',
          ruby.get_colored_name(),
          ' 的秘部出入的漆黑的巨根由于其压倒性的巨大而划出巨大的弧度。',
        ]);
        await era.printAndWait(
          '粗暴地摆腰，把巨根这样塞进女人的身体，那样简直像是强奸。',
        );
        await era.printAndWait(
          '他们互相凝视时，一次又一次地深吻。亲密度高的体位，本来就只能和恋人一起做。',
        );
        await ruby.say_and_wait('哦♥哦♥哦！好厉害♥能顶到最里面♥呜哦哦哦啊！');
        await era.printAndWait('她粗俗地那样叫着，未婚夫听了很高兴地问她。');
        await era.printAndWait('黄毛「训练员的小鸡鸡和我的巨根，哪个好？」');
        await ruby.say_and_wait(
          '啊！这个！这边这个大大的♥能够到训练员碰不到的地方♥',
        );
        await era.printAndWait('黄毛「哈哈，你真的很喜欢巨根呢！」');
        await ruby.say_and_wait(
          '喜欢！♥喜欢大块头的！♥和小鸡鸡训练员作为生物的等级不同♥',
        );
        await era.printAndWait('黄毛「是吧，那种垃圾训练员你就扔了吧！」');
        await ruby.say_and_wait(
          '不行♥不要说他的坏话♥因为只是鸡鸡不大♥是包茎的孩子小鸡鸡♥因为喜欢温柔的地方♥不行♥',
        );
        await era.printAndWait('黄毛「即使温柔，作为男人也是无价值的垃圾！」');
        await ruby.say_and_wait('不行♥说实话不行♥');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 一边喘息一边这样叫，听到这句话的他腰越来越快地动起来，开始冲刺。',
        ]);
        await ruby.say_and_wait('哇哦哦哦♥不行♥不行♥不行♥去了～♥♥♥');
        await era.printAndWait('然后，未婚夫也一边颤抖着身体一边开始射精。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 发出「齁齁齁♥」的喘息声，将缠绕着的两脚伸直，在快感中发抖。',
        ]);
        await era.printAndWait([
          '他一离开她的身体站起来，就会从 ',
          ruby.get_colored_name(),
          ' 的秘部滑溜溜地拔出巨根。当然没有戴避孕套，精液滴滴答答地滴下来。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 翻起白眼，脚和身体都抽搐着。从她的秘部溢出了失去去处的精液。',
        ]);
        await era.printAndWait([ruby.get_colored_name(), ' 接受了中出。']);
        await era.printAndWait([
          '未婚夫轻轻抱起浑身松散无力的 ',
          ruby.get_colored_name(),
          '，把胳膊搭在她可爱的腿关节上。',
        ]);
        await era.printAndWait([
          '像是冒着黑光的肉棒再度塞进湿透了的 ',
          ruby.get_colored_name(),
          ' 的秘部。',
        ]);
        await ruby.say_and_wait('哇！♥');
        await era.printAndWait([
          '因为一口气用力地顶到了里面，',
          ruby.get_colored_name(),
          ' 用肮脏的声音喘息。每次用力活塞的时候，',
          ruby.get_colored_name(),
          ' 饱满的嫩乳就会摇晃。',
        ]);
        await ruby.say_and_wait('不要看♥不要看♥这样的我♥拜托你♥哦哦♥♥♥');
        await era.printAndWait(
          '她叫你不要看。与平时保持的形象相去甚远，不想让人看到这样的自己吧。',
        );
        await era.printAndWait(
          '那个时候未婚夫在她的耳朵边低语。她一边吐气一边点头。然后，对你说。',
        );
        await ruby.say_and_wait('不要看♥变态♥小鸡鸡变态去死♥去死吧♥');
        await era.printAndWait('她喘不过气来，还是对你说着侮蔑的言辞。');
        await ruby.say_and_wait(
          '包茎去死吧♥被人夺走爱马的垃圾去死吧♥去死吧♥去死吧♥去死吧♥',
        );
        await era.printAndWait(
          '听到这句话的未婚夫更强硬地插入。恐怕对她的耳语是「我会让你更舒服，所以说训练员的坏话」之类的命令吧。',
        );
        await ruby.say_and_wait('去死♥去死劣等基因♥没有活在世界上的价值♥');
        await you.say_and_wait('这是露比的真心吗？', true);
        await ruby.say_and_wait('喂♥啊～♥');
        await era.printAndWait(
          '把脚伸直，痉挛。唾液从嘴里滴下来，眼睛朝上翻。为了想办法从遍布身体的快感中逃出来，让身体耷拉着。',
        );
        await era.printAndWait([
          '看到这一幕的未婚夫把 ',
          ruby.get_colored_name(),
          ' 随手扔到床上。',
        ]);
        await ruby.say_and_wait(['……对不起，', callname, '……']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
