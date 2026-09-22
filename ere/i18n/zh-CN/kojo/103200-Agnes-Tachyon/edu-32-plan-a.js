/**
 * @file 爱丽速子 - 育成 - Plan A
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { adaptability_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_a_advanced: (() => {
    const title = 'Advanced';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        '如果说，真的如 ',
        tachyon.get_colored_name(),
        ' 所说，为',
        tachyon.sex,
        '带来希望的人是自己的话',
      ]);
      await era.printAndWait([
        '那么，陪伴',
        tachyon.sex,
        '走在这条梦想的道路上，这也是自己的责任及义务吧',
      ]);
      await era.printAndWait([
        '如果按',
        tachyon.sex,
        '所说，这个故事是由自己所开启的，那么无论以什么形式结束，自己都理应站在台上直到一切的谢幕',
      ]);
      era.println();
      await era.printAndWait('所以……');
      era.printButton('「……不行」', 1);
      era.printButton('「不是这样的」', 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await era.printAndWait(['不是陪伴', tachyon.sex, '吧']);
      await era.printAndWait(['不是待在舞台上而已吧']);
      era.println();
      await era.printAndWait([
        '我是，',
        tachyon.get_colored_name(),
        ' 的训练员',
      ]);
      await era.printAndWait(['是与', tachyon.sex, '两人三脚一同前行的训练员']);
      await era.printAndWait(['是与', tachyon.sex, '并肩，而非跟在身后的人']);

      era.printButton('「……我选Plan A」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……是吗？那么，就为了我鞠躬尽瘁，好好看着我吧……无论燃烧，还是凋零',
      );
      era.println();
      await era.printAndWait('不对，不是的');
      await era.printAndWait([
        you.get_colored_name(),
        ' 摇了摇头，阻止了 ',
        tachyon.get_colored_name(),
        ' 的话',
      ]);
      era.println();
      await you.say_and_wait('不是看着');
      era.println();
      await tachyon.say_and_wait('……？');
      era.printButton('「我会与你『一起』，实现『我们』的梦想」', 1);
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 陷入了沉默']);
      await era.printAndWait([
        tachyon.sex,
        '的表情仿佛愤怒，又仿佛带有一丝喜悦',
      ]);
      await era.printAndWait('随后……');
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait('……身为豚鼠，却想获得与人类相等的地位吗？');
        era.println();
        await era.printAndWait([
          '一如既往的傲慢话语，将 ',
          you.get_colored_name(),
          ' 打落谷底',
        ]);
        await era.printAndWait('想要并肩而行的前提是对方愿意与自己同行');
        await era.printAndWait(
          '若是两人三脚的过程中，只有一方想要维持住中间的联系，那无论如何都是绝不可能向前行动的',
        );
        await era.printAndWait('这样的口气，想必…');
        era.println();
        await tachyon.say_and_wait(
          '那么，努力追上我的步伐吧，展露出我都无法无视的光彩……证明你的可能性吧！',
        );
      } else if (love < 75) {
        await tachyon.say_and_wait('……呵呵，哈哈哈哈！');
        era.println();
        await era.printAndWait([
          '突然，',
          tachyon.get_colored_name(),
          ' 露出了满意的笑容',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '是吗，是吗，并肩同行的伙伴，共同作战的战友……呵呵，这不是很有意思吗！',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '张开双臂，歪头看向身后的 ',
          you.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          '那么就跟上来吧，',
          callname,
          '！不在我之上，也不在我之下的同伴，若是你有把握能做到的话，那就来吧',
        ]);
      } else {
        await tachyon.say_and_wait([
          '也就是说……',
          callname,
          '，你是认真的吗？',
        ]);
        era.println();
        await era.printAndWait('认真……？');
        await era.printAndWait([
          '自己确实是认真想要与 ',
          tachyon.get_colored_name(),
          ' 同行的，是这个意思吗？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 点了点头表示自己的决心',
        ]);
        era.println();
        await tachyon.say_and_wait('……然后同行，也就是，同居……唔……');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), ' 用力摇了摇头']);
        await era.printAndWait('虽然不知道发生了什么，但似乎有什么不对劲……？');
        era.println();
        await tachyon.say_and_wait(
          '……咳咳，我明白了，那么，一起朝着我们的目标努力吧',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 似乎稍微冷静了一些说道',
        ]);
        await era.printAndWait(
          '虽然不知道发生了什么，但总之这应该是得到认可的证明了',
        );
        await era.printAndWait('今后也要继续努力才行！');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 放弃参加月桂杯的事情，传遍了整个学园',
      ]);
      await era.printAndWait([
        '身为训练员，',
        you.get_colored_name(),
        ' 也不免被人抨击',
      ]);
      await era.printAndWait([
        '不过……这也是与',
        tachyon.sex,
        '同行必须付出的代价吧',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_29: (() => {
    const title = '媒体应对办法';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait('夏日集训');
      await era.printAndWait([
        '对',
        tachyon.uma_sex_title,
        '们而言，是兼具放松及提升实力的时间',
      ]);
      await era.printAndWait([
        '对记者们而言，则是平常除了比赛便不会轻易暴露于人前的',
        tachyon.uma_sex_title,
        '们难得有机会能够采访到的日子',
      ]);
      await era.printAndWait('也因此，狗仔队们早早便聚集在了合宿点外');
      await you.say_as_passer_by_and_wait('记者A', '有看到吗？');
      await you.say_as_passer_by_and_wait('记者B', '别急，还没完全下来呢');
      await you.say_as_passer_by_and_wait(
        '记者C',
        '来了来了！就是那个，训练员正在发出光芒的！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 一下车，就受到了记者们的团团包围',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 暗叫不好，连忙降低了身上的亮度，只可惜已经为时已晚',
      ]);
      await you.say_as_passer_by_and_wait('记者A', [
        '请问 ',
        tachyon.get_colored_name(),
        ' 拒绝参加月桂杯的原因是什么？',
      ]);
      await you.say_as_passer_by_and_wait('记者B', '是有什么苦衷吗？');
      await you.say_as_passer_by_and_wait('记者C', '是对学生会长的不信任吗？');
      await era.printAndWait(
        '呜哇，麻烦的问题好多，还有最后一个记者这思想很危险啊，想挑动对立吗？',
      );
      await era.printAndWait([
        '面对这么多记者，',
        you.get_colored_name(),
        ' 决定……',
      ]);
      era.printButton('耐心解释（干劲下降一阶段）', 1);
      era.printButton('驱赶（声望下降）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 耐心的与记者们解释了阵营目标是年底的菊花赏',
        ]);
        await era.printAndWait(
          '因此在此之前其他的事情都需要推移，另外并没有对现今会长的不满',
        );
        await era.printAndWait([
          '为了应付记者们耽误了许多时间，速子的情绪也因此不耐了起来',
        ]);
        await era.printAndWait([
          '见此 ',
          you.get_colored_name(),
          ' 匆忙找了个理由结束他们的采访便带着 ',
          tachyon.get_colored_name(),
          ' 进入合宿宿舍',
        ]);
      } else {
        await era.printAndWait('啊，好吵啊');
        await era.printAndWait([
          you.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          ' 交换了一下眼神',
        ]);
        await era.printAndWait([
          '在长时间的配合下，',
          tachyon.sex,
          '马上理解了 ',
          you.get_colored_name(),
          ' 要做什么，从包里掏出了墨镜',
        ]);
        await era.printAndWait('然后……');
        era.printButton('「认真发光！」', 1);
        era.printButton('「太阳拳！」', 2);
        await era.input();
        await you.say_as_passer_by_and_wait('记者A', '我的眼睛！');
        await you.say_as_passer_by_and_wait('记者B', '好亮！');
        era.println();
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 120% 全力的发光照射下，连太阳都显得黯然失色',
        ]);
        await era.printAndWait([
          '趁着记者们揉着双眼的时候，',
          you.get_colored_name(),
          ' 带着 ',
          tachyon.get_colored_name(),
          ' 快步进入了合宿的宿舍',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_31: (() => {
    const title = '夏日的数据采集';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('哈啊……哈啊……哈啊……');
      era.println();
      await era.printAndWait([
        '合宿期间，',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 努力进行着对菊花赏的特训，在劳逸结合的训练方式下，训练成果颇有成效',
      ]);
      era.println();
      await tachyon.say_and_wait('数据……怎么样？');

      era.printButton(
        '「已经恢复到改变跑法前的速度了……这样下去，菊花赏绝对没问题！」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '为了最大化降低 ',
        tachyon.get_colored_name(),
        ' 腿部负荷改良的跑法，如今也以至大成，在两人的努力下，菊花赏想必绝对……',
      ]);
      era.println();
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 敞想于 ',
        tachyon.get_colored_name(),
        ' 的未来中时，喘过气来的 ',
        tachyon.get_colored_name(),
        ' 开口了',
      ]);
      era.println();
      await tachyon.say_and_wait('好，我的部分训练结束了，接下来该你了');
      era.println();
      await era.printAndWait('…………该来的还是得来啊');
      await era.printAndWait([
        '所谓的劳逸结合，具体而言其实就是，在 ',
        tachyon.get_colored_name(),
        ' 训练时 ',
        you.get_colored_name(),
        ' 休息，而 ',
        tachyon.get_colored_name(),
        ' 休息时……自然就轮到 ',
        you.get_colored_name(),
        ' 上了',
      ]);
      await era.printAndWait([
        '在 ',
        tachyon.get_colored_name(),
        ' 的药物帮助下，如今的 ',
        you.get_colored_name(),
        ' 在短暂爆发力上可以说已经不输给公开赛等级的',
        tachyon.uma_sex_title,
        '了，',
      ]);
      await era.printAndWait([
        '而测量 ',
        you.get_colored_name(),
        ' 的药物实验数据也是 ',
        tachyon.get_colored_name(),
        ' 合宿期间好好训练的前提之一',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '今天就大发慈悲让你自己选吧，',
        callname,
        '……力量训练和耐力训练，你要选择哪一个呢',
      ]);
      era.println();
      await era.printAndWait('唔……虽然感觉都差不多，但');
      era.printButton('力量训练（力量&根性+10）', 1);
      era.printButton('耐力训练（耐力&力量+10）', 2);
      era.printButton('速度训练（速度&智力+10）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait('如此如此这般这般');
          await era.printAndWait([
            '于是 ',
            you.get_colored_name(),
            ' 拖着比人还高三倍的大轮胎在沙滩上走着',
          ]);
          await era.printAndWait(
            '天知道这种轮胎到底是给什么车用的，横着躺还有人的三倍高度',
          );
          await era.printAndWait([
            '这期间，',
            tachyon.get_colored_name(),
            ' 一直坐在轮胎上为 ',
            you.get_colored_name(),
            ' 加油打气……',
          ]);
          era.println();
          await tachyon.say_and_wait(['走快点啊 ', callname]);
          await tachyon.say_and_wait('怎么慢成这样，速度速度');
          await tachyon.say_and_wait('大不了爆衣变身绿巨人吧');
          era.println();
          await era.printAndWait('加油……打气？');
          era.println();
          await era.printAndWait([
            '在这比起打气，更像是锻炼人耐压性的呼声中，',
            you.get_colored_name(),
            ' 完成了今天的训练',
          ]);
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait('下去吧');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 震惊的看着 ',
            tachyon.get_colored_name(),
            '，但不是因为训练的艰难，而是……',
          ]);
          era.printButton('「……只要下去游泳就好了？」', 1);
          await era.input();
          await tachyon.say_and_wait('嗯哼，按正常圈数游完就好了～～');
          era.println();
          await era.printAndWait([
            '看 ',
            tachyon.get_colored_name(),
            ' 的表情明显有阴谋，但实在想不到……',
          ]);
          await era.printAndWait([
            '不，应该说，能想到',
            tachyon.sex,
            '会做什么的可能性太多了，实在猜不到',
            tachyon.sex,
            '到底用的是什么',
          ]);
          await era.printAndWait([
            '但在这边干等着也没用，于是 ',
            you.get_colored_name(),
            ' 先下了水',
          ]);
          era.println();
          await era.printAndWait('好冰！');
          await era.printAndWait('海水的温度明显不同以往的冰，要说的话……');
          await era.printAndWait([
            '就像之前 ',
            tachyon.get_colored_name(),
            ' 为了测试耐寒药水而让自己跳进去的冰块池一般',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 连忙慌张的看向周围，却发现其他学生依然一如往常的在海中嬉戏',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '哼哼，感觉现在特别冷吧，这就是在下水前给你喝的药的效果，可以提高知觉的药物，没错，就是对O忍里面会出现的那种药物！',
          );
          era.println();
          await era.printAndWait('不要说〇魔忍啊！？');
          await era.printAndWait(
            '但奇怪的是，除了现在的体感温度仿佛像在冬天泡冰块浴一般，就没有什么其他特别的感受了，如果是对魔O的话这时候应该是……',
          );
          era.println();
          await tachyon.say_and_wait(
            '当然，这还只是半成品而已，主要就是提高对寒冷神经上的敏感度而已，那么，你就好好游完指定的目标里数吧',
          );
          era.println();
          await era.printAndWait('好冷……');
          await era.printAndWait([
            '即便没有 ',
            tachyon.get_colored_name(),
            ' 的指示，在寒冷下 ',
            you.get_colored_name(),
            ' 还是被迫拼命活动身体来产生热量，最终好不容易完成了游泳的目标',
          ]);
          era.drawLine({ content: '题外话' });
          await tachyon.say_and_wait([
            '……为什么明明只是提高你的神经敏感度也能感冒啊，',
            callname,
          ]);
          era.println();
          await you.say_and_wait('……这个问题不是该问你吗？');
          break;
        case 3:
          await era.printAndWait('无论哪一个看起来都不怀好意啊……');
          await era.printAndWait(['机智的 ', you.get_colored_name(), ' 选择']);
          era.printButton('「……我忽然想起宿舍瓦斯炉好像没关，先回去了！」', 1);
          await era.input();
          await era.printAndWait('三十六计走为上策！');
          era.println();
          await tachyon.say_and_wait([
            '吼吼，居然想和我赛跑吗？看来最近的体力提升让你有些膨胀了啊，',
            callname,
            '。',
          ]);
          await tachyon.say_and_wait(
            '没问题，我让你十秒，要是被我追上了，今天的药就加倍。',
          );
          await tachyon.say_and_wait('来，让我玩的开心点吧，啊哈哈哈哈哈哈！');
          era.println();
          await era.printAndWait([
            '十秒的限时一过，',
            tachyon.get_colored_name(),
            ' 的脚步声就立即出现在耳边了',
          ]);
          await era.printAndWait(
            '快啊，快啊，仔细想想这个时候训练员培训学校是怎么教的',
          );
          await you.say_and_wait(
            ['寻找障碍物来干扰', tachyon.uma_sex_title, '的动作！'],
            true,
          );
          await era.printAndWait(
            '好，快点………这里是沙滩哪里来的障碍物啊啊啊啊啊啊！！！',
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            '啧啧，跑的太慢了啊 ',
            callname,
            '，那么今天的两管……好，再来一次吧，一样十秒，这次再追到就是四管了……继续吧～～',
          ]);
          await you.say_and_wait('还来啊！？');
          await era.printAndWait([
            '最终，',
            you.get_colored_name(),
            ' 被 ',
            tachyon.get_colored_name(),
            ' 追了又放四次，总共灌了十六管的药水',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_low_rel: (() => {
    const title = '不同的可能性';
    /**
     * 菊花赏赛前 - 低好感
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '那天晚上，',
        you.get_colored_name(),
        ' 做了一个梦',
      ]);
      await era.printAndWait([
        '被人称为超光速粒子的',
        tachyon.sex,
        '，在赛场上折翼的梦',
      ]);
      await era.printAndWait([
        '那玻璃的双腿破碎，四散的琉璃碎片刺入了 ',
        you.get_colored_name(),
        ' 的双眼',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 从梦中惊醒，久久无法恢复平静',
      ]);
      await era.printAndWait([
        '梦境实在太过真实，让 ',
        you.get_colored_name(),
        ' 不由得心有余悸',
      ]);
      await era.printAndWait([
        '剩下的夜晚 ',
        you.get_colored_name(),
        ' 依然辗转无法入眠，直至天亮',
      ]);
      era.drawLine();
      await era.printAndWait([
        '天才蒙蒙亮，',
        you.get_colored_name(),
        ' 便匆忙离开了训练员宿舍',
      ]);
      await era.printAndWait([
        '虽说赛前已经无数次确认过',
        tachyon.sex,
        '的身体状况',
      ]);
      await era.printAndWait(
        '虽说怎么想也不可能像梦中那样夸张的碎裂。还是担心，还是害怕',
      );
      await era.printAndWait([
        '还是必须亲眼看见',
        tachyon.sex,
        '，才能确定梦中的一切并非真实',
      ]);
      era.println();
      await tachyon.say_and_wait(['哦呀，', callname, '？今天来的真早']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 冲进实验室时，看见的是一大清早便悠哉喝着红茶的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        '不过今天毕竟是三冠的最后一场了……紧张也是正常的吧',
      );
      await era.printAndWait([
        '菊花赏，最强的',
        tachyon.uma_sex_title,
        '才能赢下的比赛',
      ]);
      await era.printAndWait([
        '忽然，',
        you.get_colored_name(),
        ' 一时陷入了语塞',
      ]);
      await era.printAndWait('自己做出的选择真的是正确的吗？');
      await era.printAndWait(['万一，', tachyon.sex, '真的像梦中那样碎裂']);
      await era.printAndWait('自己真的有办法坦然面对吗？');
      era.println();
      await tachyon.say_and_wait([callname, '？怎么了吗？']);
      era.println();
      await era.printAndWait('明明是如此冲动的情况下冲入实验室的');
      await era.printAndWait([
        '在看见',
        tachyon.sex,
        '的刹那，却什么也说不出口了',
      ]);
      era.printButton('「……没什么，菊花赏，一定会赢的」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 只能，说出连自我安慰都不足以的话语',
      ]);
      era.println();
      await tachyon.say_and_wait('……嗯，一定能赢');
      era.println();
      await era.printAndWait('无言');
      await era.printAndWait('今日的菊花赏，愿一切安好');
      await era.printAndWait([you.get_colored_name(), ' 向神，向佛，向光祈祷']);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_high_rel: (() => {
    const title = '会赢吗？';
    /**
     * 菊花赏赛前 - 高好感
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '菊花赏，最强的',
        tachyon.uma_sex_title,
        '才能赢下的比赛',
      ]);
      await era.printAndWait('最强，这个词代表着，是全方位');
      await era.printAndWait('速度，耐力，力量，毅力，智慧');
      await era.printAndWait(
        '五种在训练员间最为重视的能力都均衡的达到最强才能赢下的比赛',
      );
      await era.printAndWait([
        '但是……如果是 ',
        tachyon.get_colored_name(),
        ' 的话，没有问题',
      ]);
      era.println();
      await era.printAndWait('天生的强者');
      await era.printAndWait([
        '哪怕无须锻炼，',
        tachyon.sex,
        '也必然能够达到这样的程度吧',
      ]);
      await era.printAndWait([
        '这就是 ',
        tachyon.get_colored_name(),
        '，绝对的强悍',
      ]);
      await era.printAndWait([
        '……不如说，自己真的对',
        tachyon.sex,
        '有帮助吗？',
      ]);
      if (
        new Array(5).fill(0).some((_, i) => era.get(`base:32:${5 + i}`) < 1200)
      ) {
        await era.printAndWait([
          '说到底，现在的',
          tachyon.sex,
          '距离当初',
          tachyon.sex,
          '的极限，不是还有很长一段距离吗？',
        ]);
      } else {
        await era.printAndWait([
          '说到底，现在的',
          tachyon.sex,
          '不就只是恢复到以前该有的水平而已不是吗？',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([callname, '？比赛前你又在发什么呆？']);
      era.println();
      await era.printAndWait([
        '打断沉浸于自我厌恶中的 ',
        you.get_colored_name(),
        ' 的，是正在钉蹄铁的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '听见 ',
        you.get_colored_name(),
        ' 的话后，不出 ',
        you.get_colored_name(),
        ' 所料的，',
        tachyon.get_colored_name(),
        ' 对此嗤之以鼻',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '无聊，我的双腿现在是建立在我的研究与你的训练之下的',
      );
      era.println();
      await tachyon.say_and_wait(
        '要是没有你的努力，现在的我说不定已经无法奔跑了，你的意思是希望变成那样吗？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 连忙道歉说自己不是那个意思',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '晚了，明天的药量加倍，既然你感受不出这中间努力的重量，那么就让你多体会一点吧',
      );
      era.println();
      await era.printAndWait(
        '不，都已经一天三顿像饭一样吃了，这还能再增加的吗',
      );
      await era.printAndWait([you.get_colored_name(), ' 在心里忍不住吐槽道']);
      era.println();
      await era.printAndWait(['就在你们毫无压力的谈天时，比赛时间也快到了']);
      await era.printAndWait(['你们漫步走向赛场']);
      era.printButton('「今天的比赛，能赢吧？」', 1);
      await era.input();
      await tachyon.say_and_wait('这个吗……究竟能不能呢～～');
      await tachyon.say_and_wait('不，就算你说什么认真问的我也真不好回答啊……');
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait([
          '毕竟 ',
          call_25,
          ' 和其他',
          tachyon.uma_sex_title,
          '可完全不是一个等级的啊',
        ]);
        await tachyon.say_and_wait([
          '再怎么说',
          tachyon.sex,
          '可是被我选中同样能够踏足极限以后的世界的人……',
        ]);
        await tachyon.say_and_wait([
          '以及这个距离的 ',
          call_25,
          '……说不定，称之为历史最强都不为过',
        ]);
      }
      era.printButton('「那么，会输吗？」', 1);
      await era.input();
      await tachyon.say_and_wait('会赢哦');
      era.println();
      await tachyon.say_and_wait('『我们』一定能赢');
      era.println();
      await era.printAndWait('不再是目送');
      await era.printAndWait([
        you.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 一同走向赛场',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '会赢的';
    /**
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} c_call_y 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     * @param {boolean} win_triple_crowns 爱丽速子是否赢得三冠
     * @param {boolean} invincible 爱丽速子是否无败
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
      win_triple_crowns,
      invincible,
    ) => {
      if (win_triple_crowns) {
        if (invincible) {
          await you.say_as_passer_by_and_wait('解说', [
            '无败三冠诞生！历史的车轮再一次的转动了！',
            tachyon.get_colored_name(),
            '，无败三冠达成！',
          ]);
        } else {
          await you.say_as_passer_by_and_wait('解说', [
            '三冠',
            tachyon.uma_sex_title,
            '诞生！同年中的最强！最快最幸运最强的',
            tachyon.uma_sex_title,
            '就是，',
            tachyon.get_colored_name(),
            '！',
          ]);
        }
      } else {
        await you.say_as_passer_by_and_wait('解说', [
          '超越了一众强敌率先越过终点线的是，超光速的',
          tachyon.sex_code - 1 ? '公主' : '王子',
          '，',
          tachyon.get_colored_name(),
          '！菊花赏最强的',
          tachyon.uma_sex_title,
          '，就是 ',
          tachyon.get_colored_name(),
          '！',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 拿下了菊花赏，当之无愧的胜利',
      ]);
      await era.printAndWait(
        '然而，还来不及为胜利而庆祝，便出现了一名造访的不速之客',
      );
      era.println();
      await coffee.say_and_wait([c_call_t, '……你今天的跑法……']);
      await tachyon.say_and_wait(['哦呀，', call_25, '，怎么了吗？']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' Plan B 的接班人']);
      await era.printAndWait([tachyon.get_colored_name(), ' Plan A 的试金石']);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          '这场菊花赏上，',
          tachyon.get_colored_name(),
          ' 最大的敌人',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '同时也是，',
          you.get_colored_name(),
          ' 的另一名负责',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, '，你的跑法，和以前不一样了……']);
      await tachyon.say_and_wait(
        '呵呵，有什么问题吗？跑法本不就是不断在进化的吗？',
      );
      await coffee.say_and_wait('没什么……只是，恭喜你，跨越了另一个自己');
      await tachyon.say_and_wait([
        '……另一个自己？等等，',
        call_25,
        '！什么意思！',
      ]);
      await coffee.say_and_wait(
        '……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            '还有，就算是负责',
            tachyon.uma_sex_title,
            '…不要占用别人的爱人太久了，',
            c_call_t,
          ]);
          await era.printAndWait([
            '说完后，',
            coffee.get_colored_name(),
            ' 在 ',
            you.get_colored_name(),
            ' 的脸上吻了一下宣示主权',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            '因为今天是特别的日子所以先把 ',
            c_call_y,
            ' 借你一下……等一下要还给我',
          ]);
        } else {
          await coffee.say_and_wait([
            '对了……等一下记得把 ',
            c_call_y,
            ' 还给我',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([call_25, '！…………啧，走掉了……']);
      await era.printAndWait([
        '没事吧，',
        you.get_colored_name(),
        ' 担心的望着 ',
        tachyon.get_colored_name(),
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            '没什么……话说，',
            callname,
            '，你可真受欢迎啊',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            '没什么……话说 ',
            callname,
            '，你的风流债可真多啊',
          ]);
        } else {
          await tachyon.say_and_wait([
            '没什么……比起这个，',
            callname,
            '……你的风流债可真多啊',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 咬牙切齿的回过头来说道',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '必须要好好消毒被 ',
            call_25,
            ' 弄脏的地方才行！',
          ]);
          era.println();
          await era.printAndWait([
            '以此为理由，',
            tachyon.sex,
            '不停的亲吻着 ',
            you.get_colored_name(),
            ' 的脸颊，以十倍百倍的数量想压过 ',
            coffee.get_colored_name(),
            ' 刚刚印上的吻',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '总之，无论如何，',
        you.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 荣光的菊花赏结束了',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_lose: (() => {
    const title = '火苗点现';
    /**
     * Plan A 专属（Plan B 禁止参加菊花赏）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} c_call_y 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} coffee_kiku_sho 曼城茶座是否参加菊花赏
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
    ) => {
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「……速子？」', 1);
      await era.input();
      await era.printAndWait([
        '比赛结束，荣光的菊花赏，决出最强',
        tachyon.uma_sex_title,
        '的竞赛',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的负责',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        ' 却败在了这场比赛之上',
      ]);
      await era.printAndWait([
        '在比赛结束进入选手休息室后，你们两人就一直维持着沉默',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 暗暗看着',
        tachyon.sex,
        '的脸庞，却猜不透',
        tachyon.sex,
        '的心思',
      ]);
      await era.printAndWait('就在沉默的压力累积到极限时……');
      era.println();
      await tachyon.say_and_wait('呵呵……');

      era.printButton('「速子……？」', 1);
      await era.input();
      await tachyon.say_and_wait('明明都觉得不会输的……哎呀，还是被超越了');
      await tachyon.say_and_wait([
        '果然，',
        tachyon.uma_sex_title,
        '的可能性还是只有在比赛中才能探索啊',
      ]);
      await tachyon.say_and_wait('输了输了');
      era.println();
      await era.printAndWait([
        '速子的态度，出乎 ',
        you.get_colored_name(),
        ' 意料之外的轻松',
      ]);
      await era.printAndWait([
        '也是啊……对',
        tachyon.sex,
        '而言，不管怎么说比赛都是实验而已',
      ]);
      await era.printAndWait('实验有成功有失败，比赛也是');
      await era.printAndWait('失败了吸取教训就好');
      era.println();
      await era.printAndWait([
        '虽然这样的态度是否适合比赛还不好说，但最起码可以安心',
        tachyon.sex,
        '大概并没有受到太多影响了',
      ]);
      era.println();
      await era.printAndWait(
        '然而，还来不及为此感到安心，便出现了一名造访的不速之客',
      );
      era.println();
      await coffee.say_and_wait([c_call_t, '……你今天的跑法……']);
      await tachyon.say_and_wait(['哦呀，', call_25, '，怎么了吗？']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' Plan B 的接班人']);
      await era.printAndWait([tachyon.get_colored_name(), ' Plan A 的试金石']);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          '这场菊花赏上，',
          tachyon.get_colored_name(),
          ' 最大的敌人',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '同时也是，',
          you.get_colored_name(),
          ' 的另一名负责',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, '，你的跑法，和以前不一样了……']);
      await tachyon.say_and_wait(
        '呵呵，有什么问题吗？跑法本不就是不断在进化的吗？',
      );
      await coffee.say_and_wait('没什么……只是，恭喜你，跨越了另一个自己');
      await tachyon.say_and_wait([
        '……另一个自己？等等，',
        call_25,
        '！什么意思！',
      ]);
      await coffee.say_and_wait(
        '……究竟是什么意思呢？毕竟我也只是传达朋友说的话而已',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            '还有，就算是负责',
            tachyon.uma_sex_title,
            '…不要占用别人的爱人太久了，',
            c_call_t,
          ]);
          await era.printAndWait([
            '说完后，',
            coffee.get_colored_name(),
            ' 在 ',
            you.get_colored_name(),
            ' 的脸上吻了一下宣示主权',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            '因为今天是特别的日子所以先把 ',
            c_call_y,
            ' 借你一下……等一下要还给我',
          ]);
        } else {
          await coffee.say_and_wait([
            '对了……等一下记得把 ',
            c_call_y,
            ' 还给我',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([call_25, '！…………啧，走掉了……']);
      await era.printAndWait([
        '没事吧，',
        you.get_colored_name(),
        ' 担心的望着 ',
        tachyon.get_colored_name(),
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            '没什么……话说，',
            callname,
            '，你可真受欢迎啊',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            '没什么……话说 ',
            callname,
            '，你的风流债可真多啊',
          ]);
        } else {
          await tachyon.say_and_wait([
            '没什么……比起这个，',
            callname,
            '……你的风流债可真多啊',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 咬牙切齿的回过头来说道',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '必须要好好消毒被 ',
            call_25,
            ' 弄脏的地方才行！',
          ]);
          era.println();
          await era.printAndWait([
            '以此为理由，',
            tachyon.sex,
            '不停的亲吻着 ',
            you.get_colored_name(),
            ' 的脸颊，以十倍百倍的数量想压过 ',
            coffee.get_colored_name(),
            ' 刚刚印上的吻',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 与 ',
        tachyon.get_colored_name(),
        ' 的经典战线结束了！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_triple_crowns: (() => {
    const title = '三冠之梦';
    /**
     * Plan A 专属（Plan B 禁止参加菊花赏，无法赢取三冠）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} pocket 森林宝穴
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} sats_sho 皋月赏（上色版名字）
     * @param {PrintedSpan} toky_yus 日本德比（上色版名字）
     */
    const f = async (
      tachyon,
      coffee,
      pocket,
      you,
      callname,
      call_25,
      relation,
      love,
      sats_sho,
      toky_yus,
    ) => {
      await tachyon.say_and_wait('……这里是');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 忽然一阵恍惚',
      ]);
      await tachyon.print_and_wait('眼前出现的，是绿草如茵，空无一人的赛场');
      era.println();
      await tachyon.say_and_wait('……是梦吗？');
      era.println();
      await tachyon.print_and_wait([
        '还记得，现在应该是菊花赏结束，刚刚和 ',
        callname,
        ' 分别后，自己累到直接倒上了床',
      ]);
      await tachyon.print_and_wait([
        '菊花赏，确实是目前的自己挑战过最艰难的一次战斗',
      ]);
      await tachyon.print_and_wait('但是，还是赢下来了');
      await tachyon.print_and_wait(
        '然而眼前的，却不是给自己留下如此深刻印象的赛场，而是……',
      );
      era.println();
      await tachyon.print_and_wait('中山赛场？');
      await tachyon.print_and_wait('如果是中山的话，那么……');
      era.println();
      await tachyon.print_and_wait([
        '不出所料，回头看向身后的屏幕，屏幕中播放着皋月赏的图样',
      ]);
      await tachyon.print_and_wait([
        '然而，揭示版上的成绩却昭示着比赛已经结束的事实，第一名，是 ',
        tachyon.get_colored_name(),
        '，理所当然',
      ]);
      era.println();
      await tachyon.say_and_wait(['……回到皋月赏的时候了吗？']);
      era.println();
      await tachyon.print_and_wait([
        '空无一人的赛场，明明没有选手却已经完赛的皋月赏',
      ]);
      await tachyon.print_and_wait(
        '哪怕是不讲逻辑的梦境，这一切也还是太违背常理了',
      );
      era.println();
      await tachyon.print_and_wait('于是……');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 瞪着眼前，不知何时出现的光球',
      ]);
      era.println();
      await tachyon.say_and_wait('你……是谁？是你把我拉进这个梦里的？');
      era.println();
      await tachyon.print_and_wait([
        '所谓的拉入梦里，或许不是那么符合科学的说法，但要是……根据 ',
        call_25,
        ' 的说法来想的话……',
      ]);
      await you.say_as_passer_by_and_wait('？？？', '…………');
      era.println();
      await tachyon.print_and_wait('光球没有说话，只是在原地漂浮着');
      era.println();
      await tachyon.say_and_wait('……不想说吗？');
      await tachyon.say_and_wait('那么，我就说出自己的猜测了……');
      await tachyon.say_and_wait([
        '你……就是「',
        tachyon.get_colored_name(),
        '」吧',
      ]);
      era.println();
      await tachyon.print_and_wait('要猜出这点，其实没什么困难的');
      await tachyon.print_and_wait([
        '只要能够结合 ',
        call_25,
        ' 说的「另一个自己」就好',
      ]);
      await tachyon.print_and_wait([
        '传说……',
        tachyon.uma_sex_title,
        '是身上宿有异世界的灵魂的存在',
      ]);
      await tachyon.print_and_wait([
        '……虽然说，比起这种说法 ',
        tachyon.get_colored_name(),
        ' 更宁愿相信是生物自然进化的结果就是了',
      ]);
      await tachyon.print_and_wait('但假如，这个说法是真的的话……');
      era.println();
      await tachyon.print_and_wait('「另一个自己」，说的，想必就是这个吧');
      await tachyon.print_and_wait(
        '来自异世界的灵魂，或者被称为「Uma Soul」的存在',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
      await tachyon.say_and_wait('什么？');
      era.println();
      await tachyon.print_and_wait(
        '忽然，光球身上仿佛荡起了涟漪，仿佛拼尽了全力，才发出了这么几个音一般',
      );
      await tachyon.print_and_wait([
        '不自觉的，',
        tachyon.get_colored_name(),
        ' 越靠越近，想听清它在说什么……',
      ]);
      era.println();
      await tachyon.say_and_wait('………！');
      era.println();
      await tachyon.print_and_wait('碰到了');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 的脑中，瞬间出现了不存在的记忆',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '是那个世界，名为 ',
        tachyon.get_colored_name(),
        ' 的生物的记忆',
      ]);
      await tachyon.print_and_wait([
        '如自己最开始所预料的一般，「',
        tachyon.get_colored_name(),
        '」的双腿，在皋月赏后便不堪负荷，被迫引退',
      ]);
      await tachyon.print_and_wait([
        '在那个世界，',
        tachyon.get_colored_name(),
        ' 被认为是可能性的代表，被称为「如果⬛」、「幻之三冠⬛」',
      ]);
      await tachyon.print_and_wait(
        '没有人怀疑，如果让他获得机会，他绝对能够赢下三冠',
      );
      await tachyon.print_and_wait('如果他没有腿伤，绝对会是历史留名的名⬛');
      await tachyon.print_and_wait(
        '如果没有退役，其他同世代的⬛与其相比都会黯淡许多',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，是最接近三冠的存在',
      ]);
      await tachyon.print_and_wait('但是如果……终究只是如果');
      await tachyon.print_and_wait('无法兑现的如果，那就是一纸废文');
      await tachyon.print_and_wait('随着同期们在不同领域的闪耀');
      await tachyon.print_and_wait('这样的确信也变成了疑问');
      await tachyon.print_and_wait([
        '在东京 2,400 米，真的有办法胜过那个 ',
        pocket.get_colored_name(),
        ' 吗？',
      ]);
      await tachyon.print_and_wait([
        '在京都 3,000 米，真的有办法胜过那个 ',
        coffee.get_colored_name(),
        ' 吗',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，是三冠……？',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '到此，',
        tachyon.get_colored_name(),
        ' 恢复了神智',
      ]);
      await tachyon.print_and_wait([
        '忽然，',
        tachyon.sex,
        '发现自己能够听懂光球的话了',
      ]);
      await tachyon.say_as_unknown_and_wait('……谢谢……谢谢你……');
      await tachyon.say_and_wait('…………');
      era.println();
      await tachyon.print_and_wait('将如果兑现');
      await tachyon.print_and_wait('将虚无的可能性变成实在的现实');
      era.println();
      await tachyon.print_and_wait([
        '虽然异界的「',
        tachyon.get_colored_name(),
        '」没能成功',
      ]);
      await tachyon.print_and_wait([
        '但 ',
        tachyon.get_colored_name(),
        ' 做到了',
      ]);
      await tachyon.print_and_wait('证明了自己的可能性');
      era.println();
      await tachyon.print_and_wait([tachyon.get_colored_name(), '，是三冠⬛']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，是三冠⬛？',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，是三冠',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait('……这样啊');
      era.println();
      await tachyon.print_and_wait('超越了过去的自己');
      await tachyon.print_and_wait('超越了另一个世界的自己');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，踏出了全新的一步',
      ]);
      era.println();
      await tachyon.say_and_wait('那么，我该走了');
      await tachyon.say_as_unknown_and_wait('…………？');
      era.println();
      await tachyon.print_and_wait([
        '虽然没有说话，但不知为何，',
        tachyon.get_colored_name(),
        ' 能够感受到光球的疑惑',
      ]);
      await tachyon.print_and_wait('去哪里？');
      await tachyon.print_and_wait('梦想已经完成了，不是吗？');
      await tachyon.print_and_wait('目标已经达到了，不是吗？');
      await tachyon.print_and_wait('接下来还要做什么？');
      era.println();
      await tachyon.say_and_wait([
        '哼，『',
        tachyon.get_colored_name(),
        '』的可能性，只能想到经典年的结束吗？',
      ]);
      await tachyon.say_and_wait(
        '……不，这样讲总觉得好像在骂自己啊……咳咳，重来',
      );
      await tachyon.say_and_wait([
        '『',
        tachyon.get_colored_name(),
        '』的可能性，或许只能到经典年结束……',
      ]);
      await tachyon.say_and_wait([
        '不，顶多，也就只到皋月赏为止吧。',
        tachyon.get_colored_name(),
        ' 的可能性……',
      ]);
      await tachyon.say_and_wait('或许也是如此');
      era.println();
      await tachyon.print_and_wait('然而');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 想到了，那个愿意为自己燃尽一切，眼中闪烁着狂气的人',
      ]);
      era.println();
      if (relation <= 0) {
        await tachyon.say_and_wait([
          '虽然……是个非常差劲，就人格而言把',
          you.sex,
          '毁灭了或许对世界的贡献还比较大的人',
        ]);
      } else if (love >= 75) {
        await tachyon.say_and_wait('我最爱的，最爱我的，我的恋人');
      } else if (relation <= 225) {
        await tachyon.say_and_wait('与我同行的，志同道合的伙伴');
      } else {
        await tachyon.say_and_wait(
          '理解我的一切，甚至交托性命也不会有丝毫犹豫的那个人',
        );
      }
      era.println();
      await tachyon.print_and_wait('如果……没有那个人在的话');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 在 ',
        sats_sho,
        ' 后说不定就完全燃尽了',
      ]);
      era.println();
      await tachyon.print_and_wait('如果……没有那个人在的话');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 在 ',
        toky_yus,
        ' 后说不定就察觉到自己的极限而主动退让了',
      ]);
      era.println();
      await tachyon.print_and_wait('如果……没有那个人在的话');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 绝对，连未来都不敢遐想',
      ]);
      era.println();
      await tachyon.print_and_wait('但是……如果没有意义');
      await tachyon.print_and_wait('并且这个如果，永远不会兑现');
      await tachyon.print_and_wait('所以……');
      era.println();
      await tachyon.say_and_wait([
        '看着吧，『',
        tachyon.get_colored_name(),
        '』，『我们』已经跨越了过去，立足于现在，接下来，是开创未来的时刻了！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '，走向了赛场的出口',
      ]);
      await tachyon.print_and_wait(['走出门前，', tachyon.sex, '回头看了一眼']);
      era.println();
      await tachyon.print_and_wait('赛场内的屏幕，皋月赏的图样已经消失');
      await tachyon.print_and_wait('屏幕内的画面一片空白');
      await tachyon.print_and_wait('上一场比赛已经结束');
      await tachyon.print_and_wait(
        '下一场会在这个赛场上上映的，又是怎样的比赛？',
      );
      era.println();
      await tachyon.print_and_wait('不知道，但是，已经说好了，一同前行');
      await tachyon.print_and_wait('所以');
      era.println();
      await tachyon.say_and_wait('继续实验吧……为了，看见可能性能够抵达的彼方');
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_41: (() => {
    const title = '第二次年度审核';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('那么……该来谈正经的话题了');
      era.println();
      await era.printAndWait(['时间是菊花赏后']);
      await era.printAndWait([
        '地点是 ',
        tachyon.get_colored_name(),
        ' 的实验室',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, '严肃的拉下了窗帘，点亮照明灯光']);
      await era.printAndWait([you.get_colored_name(), ' 紧张的咽了口口水']);
      await era.printAndWait([
        '如此紧张的气氛……以 ',
        tachyon.get_colored_name(),
        ' 的性格',
      ]);
      await era.printAndWait(
        '难道是实验失误？有什么危险的实验动物跑出去了？把什么危险性药物散播在水源里了？还是……',
      );
      era.printButton('「我明白了，我会负责抓回来的」', 1);
      era.printButton('「我明白了，我会背下罪名的」', 2);
      era.printButton('「我明白了，自首吧，速子」', 3);
      await era.input();
      await tachyon.say_and_wait(
        '……不是，你在说什么乱七八糟的，我有点理解不能。我要说的是，三冠也结束了，差不多该来讨论今后的目标了',
      );
      await era.printAndWait('…………欸！？');
      await era.printAndWait([
        '由于话题的内容比自己预想的还要正经太多导致 ',
        you.get_colored_name(),
        ' 陷入了无声的惊愕',
      ]);
      era.printButton('「目标……」', 1);
      era.printButton('「啊，是研究的目标吧」', 2);
      await era.input();
      await era.printAndWait([
        '肯定是这样吧，是指实验，毕竟 ',
        tachyon.get_colored_name(),
        ' 的双腿在菊花赏后确实感觉比起以前稳定了许多，最起码目前应该不用特别担心伤病了',
      ]);
      await era.printAndWait(
        '那么接下来实验确实也该进入下个阶段了，肯定是这样，不是的话，那不就好像在说……',
      );
      era.println();
      await tachyon.say_and_wait(
        '实验的目标……确实也是，但是我现在要讨论的，是赛程的目标，当初讲好的是到三冠吧，现在三冠结束，也该进入下个阶段了',
      );
      era.println();
      await era.printAndWait('欸欸欸欸！！！！？？？？');
      await era.printAndWait([
        '这次 ',
        you.get_colored_name(),
        ' 真的陷入了惊愕，惊讶的程度让 ',
        you.get_colored_name(),
        ' 做出了《呐喊》的姿势',
      ]);
      await era.printAndWait([
        '这惹的眼前的 ',
        tachyon.get_colored_name(),
        ' 也忍不住笑了出来',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '呵呵……我会主动开始谈论比赛的事有这么令人吃惊吗？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着',
        tachyon.sex,
        '的态度，回想着以往只将比赛视为实验验证的附加物的 ',
        tachyon.get_colored_name(),
      ]);
      era.printButton('「……速子……改变了呢」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '要说的话，本来就没有什么是不变的，以研究而言，故步自封闭门造车更是最忌讳的事……',
      );
      await tachyon.say_and_wait(
        '不过，改变也有分好与坏，至少目前而言我很满意现在的改变，这点我必须要感谢你才行',
      );
      era.println();
      await era.printAndWait([
        '听见 ',
        tachyon.get_colored_name(),
        ' 难得坦率的话语，',
        you.get_colored_name(),
        ' 一时慌了阵脚',
      ]);
      await era.printAndWait([
        '今天无论对 ',
        you.get_colored_name(),
        ' 还是对 ',
        tachyon.get_colored_name(),
        '，都发生太多的第一次了',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '真的没想到，凭着当时的一腔热血，居然能够走到这一步……',
      );
      await tachyon.say_and_wait(
        '连我都有些惧怕了，所谓的可能性，就好像毒药一样，让人不由得将理智忘却……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 看着自己的双腿，身体有些颤抖',
      ]);
      await era.printAndWait(['虽然不太懂', tachyon.sex, '的意思，但']);
      era.printButton('「速子还想继续挑战极限吗？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '继续？不，',
        callname,
        '，我一直都在挑战极限的路途上，没有停下来过。',
      ]);
      await tachyon.say_and_wait([
        '菊花赏不过是一个起点而已，在菊花赏后才是真正朝着极限出发的旅途啊！',
      ]);
      await tachyon.say_and_wait([
        '中距离最强的大阪杯、全现役',
        tachyon.uma_sex_title,
        '中上半年及下半年最强的宝冢纪念和有马纪念……',
      ]);
      await tachyon.say_and_wait('要超越的目标，要抵达的巅峰不是比比皆是吗？');
      era.println();
      await era.printAndWait('因此');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 笔直的盯着 ',
        you.get_colored_name(),
        ' 的双眼',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '三冠结束后的世界，再与我一起同行吧，',
        callname,
      ]);
      await tachyon.say_and_wait('作为报酬，我会让你看见更加宽广的世界');
      era.printButton('「是」', 1);
      era.printButton('「那还用说吗？我很乐意」', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的经典战线结束了',
      ]);
      await era.printAndWait('资深战线即将开始！');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_1: (() => {
    const title = '第二次年度审核报告';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_9 爱丽速子对大和赤骥的称呼
     * @param {PrintedSpan} call_25 爱丽速子对爱丽速子的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {number} cook_times 给爱丽速子做饭的次数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_9,
      call_25,
      relation,
      love,
      cook_times,
    ) => {
      await era.printAndWait([
        '今年，就是与 ',
        tachyon.get_colored_name(),
        ' 的资深年了',
      ]);
      await era.printAndWait(
        '今年两人的目标……虽然先前没有明说，但果然，要以最强为目标的话，那两场比赛就是绝不可少的',
      );
      await era.printAndWait([
        '宝冢纪念和有马纪念啊……除此之外，大阪杯若是有机会的话也想参加',
      ]);
      era.println();
      await era.printAndWait([
        '能够赢下这三场比赛的话，应该就能抵达所谓',
        tachyon.uma_sex_title,
        '的极限了吧',
      ]);
      await era.printAndWait([
        '但是，',
        tachyon.get_colored_name(),
        ' 的目标不只在此，',
        tachyon.sex,
        '的目标是……超越极限',
      ]);
      await era.printAndWait('所以除了比赛之外，研究上的协助也不能忘了……');
      era.println();
      await tachyon.say_and_wait([callname, '，来的这么早啊？']);
      era.println();
      await era.printAndWait([
        '不知不觉，说好了今天一起来参拜的 ',
        tachyon.get_colored_name(),
        ' 也已经到了',
      ]);
      era.printButton(
        '「那当然！今年的资深战线，还有其他各式各样的事情……要许的愿太多了！」',
        1,
      );
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait('这样啊……那么，有没有什么想向我许的愿呢？❤');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 用魅惑的眼神，带着暗示意味的询问 ',
          you.get_colored_name(),
        ]);
        era.print([
          '有没有什么，这一年希望能对 ',
          tachyon.get_colored_name(),
          ' 做的事……',
        ]);
        era.printButton('「希望能跟速子更多的sex」', 1);
        era.printButton('「希望速子的身体更加敏感」', 2);
        era.printButton('「希望被速子踩」', 3, {
          disabled: you.sex_code === 0,
        });
        era.printButton('「希望速子认真训练」', 4);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait('……色鬼，想做的话，回去再说吧');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 靠在 ',
              you.get_colored_name(),
              ' 耳边轻声说道',
            ]);
            break;
          case 2:
            await tachyon.say_and_wait([
              '这个嘛……吃药的话倒是很简单就能达到了，不过，还是希望 ',
              callname,
              ' 你能透过自己的手来让我变成你喜欢的样子呢❤',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 爬在 ',
              you.get_colored_name(),
              ' 肩上，惬意的说着',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              '居然许这种愿望……果然是变态啊，',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              '虽然嘴上这样说着，但 ',
              tachyon.get_colored_name(),
              ' 却悄悄脱下了鞋，露出黑丝包裹的足底',
            ]);
            await era.printAndWait('今天为了参拜走了一整天，被酿窖入味的黑丝');
            era.println();
            await tachyon.say_and_wait('想要……被这样的双足踩吗？');
            await tachyon.say_and_wait(
              '想被压在脸上，让肺部被我足底的肮脏空气灌满吗？',
            );
            await tachyon.say_and_wait(
              '想要被踩着肉棒，直到整根肉棒都被我的足臭和你的先走汁弄得哪怕十米内都能闻到上面的气味吗？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' 狂热的望着 ',
              tachyon.get_colored_name(),
              '，答案不言自喻',
            ]);
            era.println();
            await tachyon.say_and_wait('……色鬼，想做的话，回去再说吧');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 靠在 ',
              you.get_colored_name(),
              ' 耳边轻声说道',
            ]);
            break;
          case 4:
            await tachyon.say_and_wait('……不解风情的家伙');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 无趣的切了一声',
            ]);
        }
      } else if (love >= 50) {
        await tachyon.say_and_wait('其他的愿望……比如呢？');
        era.println();
        era.print([
          tachyon.get_colored_name(),
          ' 饶有兴致的看着 ',
          you.get_colored_name(),
        ]);
        era.printButton('「希望……和速子的关系变得更好」', 1);
        era.printButton('「希望……与其他担当的关系变得更好」', 2);
        era.printButton('「希望……丝之歌今年能出！」', 3);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait('呵呵，我相信，一定会的❤');
            break;
          case 2:
            await tachyon.say_and_wait(
              '……特别讲其他担当故意想惹我生气？可惜，我是不会上这种当的',
            );
            era.println();
            await era.printAndWait([
              '虽然这么说，但 ',
              tachyon.get_colored_name(),
              ' 还是不高兴的鼓起了脸颊',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              '欸……那是什么东西……圣巢？空O骑士？……原来 ',
              callname,
              ' 你这么喜欢游戏吗？',
            ]);
        }
      } else if (relation <= 0) {
        await tachyon.say_and_wait(
          '呵，怪力乱神的东西都当成宝，想那种事还不如专心想想怎么帮助我的实验吧',
        );
      } else if (relation <= 225) {
        await tachyon.say_and_wait(
          '呵呵，虽然我不相信这种怪力乱神的东西，但姑且还是接受你的好意了',
        );
      } else {
        await tachyon.say_and_wait('是吗？那么，你的愿望必然会被实现');
        era.println();
        await era.printAndWait([
          '听见 ',
          tachyon.get_colored_name(),
          ' 的口气，',
          you.get_colored_name(),
          ' 有些意外',
        ]);
        await era.printAndWait([
          '原本以为对这种迷信的事',
          tachyon.sex,
          '大概就算不是嗤之以鼻，也不会认真对待吧',
        ]);
        await era.printAndWait([
          '然而',
          tachyon.sex,
          '的口气听起来却仿佛打从心底确信如此',
        ]);
        era.printButton('「速子……？」', 1);
        era.printButton('「你不是不信这些吗？」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '当然了，比起神明什么的，我更信任手上的研究……但是，比起研究，我更加信任的，是你',
        );
        era.println();
        await era.printAndWait([
          '准确来说，是 ',
          you.get_colored_name(),
          ' 做出的努力',
        ]);
        await era.printAndWait([tachyon.sex, '补充道']);
        era.println();
        await tachyon.say_and_wait(
          '你这一年所做的努力，必然能够受到回报，如果神明不给，那么就由我来给',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 自信满满的说道。取代神明的功能吗？真像 ',
          tachyon.get_colored_name(),
          ' 会说的话啊，不过……在神社里还是别这样讲比较好吧',
        ]);
      }
      era.drawLine();
      await era.printAndWait([
        '虽然过年的神社十分热闹，你们还是很快就结束了参拜的过程',
      ]);
      await era.printAndWait([
        '结束参拜后，',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 讨论了今年度的计划',
      ]);
      era.println();
      await tachyon.say_and_wait('嗯……就像十一月那时谈论过的一样，没有问题');
      era.println();
      await era.printAndWait(
        '比赛的事情简单的就过去了，接下来，才是今天的重头戏',
      );
      era.println();
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await tachyon.say_and_wait([
          '极限……在我们的努力之下，我可以大胆说出现在的自己已经到达了极限……',
          tachyon.uma_sex_title,
          '的极限',
        ]);
      } else {
        await tachyon.say_and_wait(
          '极限……虽然目前还没达到，但坚持实验下去迟早能够达到，所以不成问题',
        );
      }
      era.println();
      await tachyon.say_and_wait('唯一的问题是……跨越极限');
      await tachyon.say_and_wait('而关于这个……现在的我，没有任何头绪');
      era.println();
      await era.printAndWait([
        '明明说的是毫无头绪，但 ',
        tachyon.get_colored_name(),
        ' 眼神中的骄傲却让人觉得仿佛',
        tachyon.sex,
        '刚说出的是已经想出黎曼猜想的解法一般的话语',
      ]);
      era.printButton('「毫无头绪……听起来真不妙呢」', 1);
      await era.input();
      await era.printAndWait('这下没办法了呢');
      await era.printAndWait('真的毫无头绪的话');
      era.println();
      await era.printAndWait('明明应该是十分令人烦恼的事，心情却感觉十分平和');
      await era.printAndWait('毫无头绪，那么，就得寻找头绪了吧');
      era.printButton('「那么速子，试试看把精力投注在比赛上吧？」', 1);
      era.printButton(
        `${tachyon.uma_sex_title}的极限，果然还是必须在赛场上才能突破吧`,
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……有一定道理，但我怎么觉得，这是 ',
        callname,
        ' 你在满足自己的私欲呢',
      ]);
      era.printButton('「毕竟速子说过，会让我看见更宽广的世界不是吗？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '呵呵，说的也是啊，那么继续吧，我们新一年的研究！',
      );
      era.println();
      era.print('那么，在开始研究前……');
      era.printButton('「先吃年糕吧」（体力+20%）', 1);
      era.printButton('「马上去训练吧」（随机属性+20）', 2);
      era.printButton('「回去研究吧」（技能点数+30）', 3);
      let ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '你们回到了 ',
            tachyon.get_colored_name(),
            ' 的实验室',
          ]);
          await era.printAndWait(['而后，你们做的第一件事……']);
          era.println();
          await tachyon.say_and_wait(
            '……虽然由我来这么说有点不对吧，但我们……明明才刚说了那样的话，现在却在干嘛啊',
          );
          era.println();
          await era.printAndWait('以前学生进行理科实验用的教室');
          await era.printAndWait([
            '现在正被 ',
            you.get_colored_name(),
            ' 用于进行热能释放及测量糯米合成物燃点的实验',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 和 ',
            tachyon.get_colored_name(),
            ' 围坐在作为实验仪器的烤炉边，享受着火炉的温暖',
          ]);
          await era.printAndWait([
            '洒水器？那种东西在以前被 ',
            tachyon.get_colored_name(),
            ' 用来于校园内散布大规模药剂实验时就已经被学生会下令强制拆除以免让 ',
            tachyon.get_colored_name(),
            ' 有接触机会了',
          ]);
          era.printButton('「差不多烤好了哦」', 1);
          era.printButton('「那，速子不吃吗？」', 2);
          await era.input();
          await tachyon.say_and_wait('当然吃');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 接过了 ',
            you.get_colored_name(),
            ' 烤好的糯米合成物——年糕，立马咬了下去，然后，不出 ',
            you.get_colored_name(),
            ' 所料的……',
          ]);
          era.println();
          await tachyon.say_and_wait('好烫！……呼呼');
          era.println();
          if (cook_times < 10) {
            await tachyon.say_and_wait('……没想到你做的还挺好吃的，出乎意料了');
          } else {
            await tachyon.say_and_wait(
              '好烫……不过好吃，不愧是经过我锻炼的豚鼠',
            );
          }
          era.println();
          await you.say_and_wait('为什么好像是自己的功劳一样啊……');
          era.println();
          await era.printAndWait(
            '不管怎么样，不管是实验研究，还是训练及比赛对策，改天做都行',
          );
          await era.printAndWait('难得的新年，还是好好享受一下这份平静吧');
          era.println();
          await era.printAndWait('速子笑了，然后轻轻咬了口年糕');
          await era.printAndWait([
            '最近不知道为什么，只要提到「明天」、「以后」，',
            tachyon.get_colored_name(),
            ' 的心情就会忽然转好',
          ]);
          await era.printAndWait([
            '感到好奇的 ',
            you.get_colored_name(),
            '，忍不住发问了',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, '，我的脚……']);
          break;
        case 2:
          await era.printAndWait([
            '为了把握 ',
            tachyon.get_colored_name(),
            ' 难得有干劲的时间，',
            you.get_colored_name(),
            ' 立马和',
            tachyon.sex,
            '一起到了训练场',
          ]);
          await era.printAndWait([
            '看见',
            tachyon.sex,
            '在训练场上奔驰的模样，尽管已经是见过无数次的光景，',
            you.get_colored_name(),
            ' 还是忍不住陷入了沉迷',
          ]);
          await era.printAndWait('如光一般灿烂，如光一般眩目……如光一般，永恒');
          await era.printAndWait(
            '以前那种奔跑起来时的虚幻感，不知何时已经不见',
          );
          await era.printAndWait('失去了不安，剩下的是最纯粹的光');
          await era.printAndWait([
            you.get_colored_name(),
            ' 更深一层的陷入沉醉',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '？……', callname, '！']);
          era.println();
          await era.printAndWait([
            '不知不觉，连',
            tachyon.sex,
            '已经结束训练回到 ',
            you.get_colored_name(),
            ' 身边都没能发觉',
          ]);
          era.println();
          await tachyon.say_and_wait('在看我训练的时候还敢发呆……好胆子啊……');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 连忙和',
            tachyon.sex,
            '解释了自己感受到的不同',
          ]);
          era.println();
          await tachyon.say_and_wait('……是吗');
          await tachyon.say_and_wait('其实……我自己也有一种奇怪的感觉');
          await tachyon.say_and_wait([
            '感觉在菊花赏后……我的腿……有种怪怪的感觉',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            callname,
            '，那根试管拿过来，不要晃到了，要是洒出来大概能把地板融化到一楼',
          ]);
          await tachyon.say_and_wait([
            callname,
            '，我现在手上有点忙，帮我点一下酒精灯然后把旁边那管药剂倒到坩埚煮到沸腾',
          ]);
          await tachyon.say_and_wait([
            '然后是……好，把这些染成咖啡色，放进 ',
            call_25,
            ' 的咖啡粉……',
            callname,
            '！你拿走干什么！',
          ]);
          await tachyon.say_and_wait(
            '戴一下口罩，等下的烟雾会有严重的昏睡效果，要是不好好做好防护的话大概能昏到周末吧',
          );
          await tachyon.say_and_wait([
            '这个……往里面再加点苹果汁和砂糖……药剂？不是，这是等一下 ',
            call_9,
            ' 来要给',
            tachyon.sex,
            '的饮料',
          ]);
          era.println();
          await era.printAndWait([
            '你们参拜完后便回到了 ',
            tachyon.get_colored_name(),
            ' 的实验室，今天的 ',
            tachyon.get_colored_name(),
            ' 状态无比的好',
          ]);
          await era.printAndWait([
            '不停的下达指令，除去某些太过奇怪的指令外，',
            you.get_colored_name(),
            ' 也完成了大部分',
            tachyon.sex,
            '交代的事，但……',
          ]);
          era.println();
          await tachyon.say_and_wait('没成功啊……啧，再多加点');
          await tachyon.say_and_wait('今天以内……必须做完二十二次临床测试');
          era.println();
          await era.printAndWait('一如既往急躁的实验效率，加上极佳的实验状态');
          await era.printAndWait('结果就是需要做的事情成倍的增加');
          era.printButton('「速子，不能休息一下吗」', 1);
          era.printButton('「不用这么急吧，明天再做也可以……」', 2);
          await era.input();
          await tachyon.say_and_wait('明天什么……');
          era.println();
          await era.printAndWait('想要训斥的话语说到一半忽然停下');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 仿佛被按了暂停键一般停下了手上的动作',
          ]);
          await era.printAndWait([
            '手上的药管眼看就要流出到地上，',
            you.get_colored_name(),
            ' 慌忙上去稳住了那管据说只要一滴就能腐蚀到一楼的药剂',
          ]);
          era.printButton('「速子！怎么了……！」', 1);
          era.printButton('「怎么忽然停住了！」', 2);
          await era.input();
          await tachyon.say_and_wait('…………哈哈');
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), ' 忽然笑了起来']);
          era.printButton('「脑子……终于坏掉了吗」', 1);
          await era.input();
          await tachyon.say_and_wait([
            '……等会再跟你算帐，',
            callname,
            '……我只是在想',
          ]);
          era.println();
          await era.printAndWait('想什么？');
          era.println();
          await tachyon.say_and_wait('……我们真的，看见明天了呢');
          await era.printAndWait('明天？');
          await era.printAndWait('到底在说什么，难道真的是脑袋撞到了吗？');
          await era.printAndWait([
            '还是什么，天才跟疯子只有一线之隔所以 ',
            tachyon.get_colored_name(),
            ' 终于疯了吗？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '总觉得你在想什么很失礼的事啊……就像你说的，明天再做，也不迟呢，呵呵',
          );
          await tachyon.say_and_wait('毕竟，接下来还有很多明天吧');
          era.printButton('「不管怎么样，明天总会到来的吧」', 1);
          era.printButton('「别想那么多了，总之明天再继续吧」', 2);
          if ((await era.input()) === 1) {
            await tachyon.say_and_wait(
              '是啊，不过……这么美好的明天真的……是第一次',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 喃喃说着什么听不懂的话',
            ]);
          } else {
            await tachyon.say_and_wait('呵呵，当然，明天再继续吧，嗯，明天');
            era.println();
            await era.printAndWait([
              '哪怕被 ',
              you.get_colored_name(),
              ' 扫了兴 ',
              tachyon.get_colored_name(),
              ' 还是一副高兴的模样',
            ]);
          }
          era.println();
          await era.printAndWait([
            '不知道为什么，听到「明天」之后，',
            tachyon.get_colored_name(),
            ' 的心情忽然变得很开心的样子',
          ]);
          await era.printAndWait([
            '感到好奇的 ',
            you.get_colored_name(),
            '，忍不住发问了',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, '，我的脚……']);
      }
      era.printButton('怎么了！', 1);
      era.printButton('有哪里不对吗！', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……呵呵，别那么紧张，我是想说，我的脚……在菊花赏之后，感觉忽然稳定了许多',
      ]);
      era.println();
      await era.printAndWait('稳定了许多，这……不是好事吗？');
      await era.printAndWait('欸，意思是，现在应该恭喜吗？');
      await era.printAndWait([
        '展开过度突然的话题，使 ',
        you.get_colored_name(),
        ' 陷入迷茫，不理解',
        tachyon.sex,
        '忽然提到这个的原因',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……这是我人生中第一次，可以抛弃对腿脚的担心专注于一件事上……',
      );
      await tachyon.say_and_wait(
        '就仿佛，可以理所当然的一直跑下去，哪怕跑到天涯海角',
      );
      await tachyon.say_and_wait(
        '所以……只要一想到明天，未来……这种对一般人来说最理所当然的事，我也会有种……',
      );
      await tachyon.say_and_wait(
        '怎么说呢……按你说的，我确实表现出了喜悦的感情来，',
      );
      await tachyon.say_and_wait('不过，是因为能够专心于研究的喜悦吗？');
      await tachyon.say_and_wait('……唔，好像又不太是……值得探讨');
      era.println();
      await era.printAndWait([
        '听到这，',
        you.get_colored_name(),
        ' 忽然灵光一闪',
      ]);
      era.printButton('「难道，不是因为可以毫无顾虑的跑步了吗？」', 1);
      era.printButton('「难道，不是因为可以自由自在的跑步了吗？」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '唔……',
        callname,
        '，我的意思不就是这样吗？我不理解你再说一次的理由',
      ]);
      era.printButton('「不是实验，而是跑步本身」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '……你的意思是，我是因为喜欢跑步，可以自由自在的跑步了，所以感到高兴？',
      ]);
      era.println();
      await era.printAndWait([
        '啊……果然，',
        tachyon.get_colored_name(),
        ' 的话应该很难接受的吧',
      ]);
      await era.printAndWait('毕竟要承认纯粹理智的自己喜欢某种东西……');
      await tachyon.say_and_wait('这……');
      era.println();
      await you.say_and_wait('这？');
      era.println();
      await tachyon.say_and_wait('这不是很有趣的可能性吗！');
      era.println();
      await era.printAndWait('…………欸？');
      era.println();
      await tachyon.say_and_wait([
        '对跑步本身感兴趣……感觉，是个很有意思的课题啊！',
        callname,
        '！接下来的研究就决定是这个了！',
      ]);
      era.println();
      await era.printAndWait('研，研究什么？');
      era.println();
      await tachyon.say_and_wait('那还用说！当然是对跑步的『喜欢』了！');
      era.println();
      await era.printAndWait('研究……喜欢？');
      await era.printAndWait([
        '没等 ',
        you.get_colored_name(),
        ' 回过神来，兴奋中的 ',
        tachyon.get_colored_name(),
        ' 继续说道',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '我有一种预感……突破极限的可能性，就在这个上了！接下来的目标就定为研究这个吧！',
      );
      era.println();
      await era.printAndWait([
        '听 ',
        tachyon.get_colored_name(),
        ' 这么说，',
        you.get_colored_name(),
        ' 也冷静了下来，开始思考利弊',
      ]);
      await era.printAndWait([
        '如果是真的，那么无论如何也要帮助 ',
        tachyon.get_colored_name(),
        ' 达成目标',
      ]);
      await era.printAndWait([
        '如果只是错觉的话……那么 ',
        tachyon.get_colored_name(),
        ' 开始享受起跑步，这本身对 ',
        you.get_colored_name(),
        ' 而言也不是什么坏事',
      ]);
      await era.printAndWait(
        '为了研究而跑和为了自己喜欢而跑，怎么想都是后者更好吧',
      );
      era.println();
      await era.printAndWait(
        '所以，除了某个难题外，可以说这是百利而无一害的决定……',
      );
      await era.printAndWait([
        '思考清楚后，',
        you.get_colored_name(),
        ' 对 ',
        tachyon.get_colored_name(),
        ' 点了点头',
      ]);
      era.printButton('「就以这个为目标吧！」', 1);
      await era.input();
      await era.printAndWait('百利而无一害的决定，只要除去最大的难题');
      await era.printAndWait('那么，究竟该如何研究「感情」呢？加油吧，豚鼠！');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '变量 · 群众感情的刺激';
    /**
     * Plan A 专属（Plan B 禁止参加大阪杯）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_5 爱丽速子对富士奇石的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} coffee_sank_hai 曼城茶座是否参加大阪杯
     */
    const f = async (tachyon, you, callname, call_5, love, coffee_sank_hai) => {
      await era.printAndWait('大阪杯');
      await era.printAndWait('一年中，中长距离最初的一场G1赛事');
      await era.printAndWait([
        '对于刚刚进入资深年的',
        tachyon.uma_sex_title,
        '来说，这是最初检验其实力的一场比赛',
      ]);
      await era.printAndWait([
        '然而……对 ',
        tachyon.get_colored_name(),
        ' 而言',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速子前辈！皋月赏那个时候真的太帅了！',
      );
      await tachyon.say_and_wait(
        '呵呵，谢谢支持，不过我的跑法是一直在进步的，比起皋月赏，现在跑的……绝对会更加惊艳哦',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '速子前辈……看到你在德比的跑法……我真的觉得，如果说',
        tachyon.uma_sex_title,
        '有极限的话，大概就是那样了！',
      ]);
      await tachyon.say_and_wait([
        '不，那只是 ',
        tachyon.get_colored_name(),
        ' 的极限而已……',
        tachyon.uma_sex_title,
        '是没有极限的，我相信你们都拥有着无穷的可能性',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '速子前辈！到底要怎么样才能变成像你一样跑的这么快……！',
      );
      await tachyon.say_and_wait(
        '哦？真的想知道吗？那么，明天下午到教学理科……',
      );
      era.printButton('「咳咳」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 咳了两声，提醒 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '正与后辈们友好交流的',
        tachyon.sex,
        '僵了一下，人后装作什么也没有发生的继续说了下去',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 不停说着自己比赛时的事，引的这些后辈的小',
        tachyon.uma_sex_title,
        '们专注聆听',
      ]);
      await era.printAndWait('看上去就像赛前的正常粉丝服务一般温馨的场景');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 叹了口气，回想起前几个月 ',
        tachyon.get_colored_name(),
        ' 说的实验内容',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait([
        '根据资料的收集……',
        tachyon.uma_sex_title,
        '在比赛或者奔跑中会感到快乐的原因，首先排在最优先的是被人称赞，收到观众的支持……',
      ]);
      await tachyon.used_to_say_and_wait([
        '毕竟都还是初中生高中生的年纪，渴望认可也是很正常的',
      ]);
      await tachyon.used_to_say_and_wait(
        '虽然我觉得自己不会受到影响……但既然是实验，那就必须要将所有可能性都考虑于内',
      );
      await tachyon.used_to_say_and_wait('综合以上……没错，获得观众的支持……');
      era.println();
      await era.printAndWait(['说到这，你们忽然陷入了卡壳']);
      era.println();
      await era.printAndWait(
        '回想起几个月前暑期的事……以及在那之后各种的拒绝采访',
      );
      await era.printAndWait([
        '在大众眼中的 ',
        tachyon.get_colored_name(),
        '，在媒体的宣传以及我方的忽视下，似乎已经变成现役的最大问题儿童了',
      ]);
      era.println();
      await tachyon.say_and_wait('……总之，先从特雷森内部能够掌握的来吧');
      era.drawLine();
      await era.printAndWait('如此如此这般这般');
      await era.printAndWait([
        '不过，虽然已经不是第一次看见了，但 ',
        tachyon.get_colored_name(),
        ' 的交流能力还是一如既往的强大啊……',
      ]);
      await era.printAndWait(
        '要是愿意把花费在那些危险实验的精力分出一些在经营人际交往上……',
      );
      await era.printAndWait(['自己说不定就不会被', tachyon.sex, '迷上了吧']);
      await era.printAndWait(
        '那种不顾一切，为了研究一切都能做到最好的奉献般的身姿',
      );
      await era.printAndWait('以及抛却一切，将所有甩在背后的跑法');
      await era.printAndWait([
        '两者合一的 ',
        tachyon.get_colored_name(),
        '，才是最令人着迷的',
        tachyon.sex,
      ]);
      if (love >= 75 && tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait('……不过');
        await era.printAndWait([
          '看着自己的爱人这样被他人围拥，哪怕都是同性也还是令人有些吃醋啊',
        ]);
        await era.printAndWait('这种时候……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 偷偷按下了藏在手上的某个按纽',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          '速子前辈！可以帮我签名吗！',
        );
        await tachyon.say_and_wait('呵呵，当然可……唔！');
        era.println();
        await era.printAndWait([
          '在签名的瞬间被启动的某个小玩具，使得 ',
          tachyon.get_colored_name(),
          ' 的签名歪了一些',
        ]);
        await era.printAndWait(
          '幸好那名眼神里满是崇拜的小粉丝似乎并不在意这点小事',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 回过头来暗暗瞪了 ',
          you.get_colored_name(),
          ' 一眼',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 点了点头，露出歉意的笑容……然后，将手上的遥控器强度调高一阶',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'B',
          '速子前辈……今天的比赛请一定要加油！',
        );
        await tachyon.say_and_wait('好呜呜……一……一定会……');
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'C',
          '速子前辈……怎么了吗？',
        );
        await tachyon.say_and_wait('没……没什么……只是……只是……咕……');
        era.printButton('「时候也不早了，该回去选手休息室准备了」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' 连忙上前帮 ',
          tachyon.get_colored_name(),
          ' 解围，在',
          tachyon.sex,
          '那比起瞪视更像欲求不满的调情的目光下，带着',
          tachyon.sex,
          '连忙回到选手休息室',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……真是的……别那么嫉妒啊……连后辈的醋都吃……',
          you.sex_code === 1 ? '男人不大方点怎么行呢' : '',
        ]);
        era.printButton('「那，我去关心一下茶座的赛况了」', 1, {
          disabled: !coffee_sank_hai,
        });
        era.printButton('「那，我也去关心一下你的后辈们吧」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '都把人家的性欲勾起了，现在还想去找其他人……这可不行啊',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 轻轻的从背后抱了上来',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '比赛前……时间还够吧❤️别用这种无聊的玩具了……难道你不想，直接填满我的里面吗❤️',
        ]);
        era.drawLine();
        await era.printAndWait([tachyon.get_colored_name(), ' 踏上了赛场']);
        await era.printAndWait([
          '不过……这是唯一一次幸亏',
          tachyon.sex,
          '那掩的遮实的胜负服，不然大概所有人都会发现',
          tachyon.sex,
          '那莫名突起的小腹了吧',
        ]);
      }
      era.printButton('「时间差不多了，速子」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '啊，也是，那么该上场了……请在比赛结束后再为我祝贺吧，小马驹们',
      );
      era.println();
      await era.printAndWait([
        '最后的一个媚眼引得小',
        tachyon.uma_sex_title,
        '们再度发生了惊呼',
      ]);
      era.printButton('「……小马驹？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '跟 ',
        call_5,
        ' 学的……怎么，你也想被这么称呼吗？我的小豚鼠？',
      ]);
      era.printButton('…………不，还是算了吧', 1);
      await era.input();
      await tachyon.say_and_wait([
        '哦呀，居然害羞了吗？真是纯情啊，',
        callname,
      ]);
      era.printButton('毕竟……硬件比不上，这样模仿只会让人觉得……', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 可怜的看着 ',
        tachyon.get_colored_name(),
        ' 的胸前',
      ]);
      await tachyon.say_and_wait([
        '…………',
        callname,
        '？能麻烦你说清楚硬件是什么意思吗？',
      ]);
      era.printButton('「……不，什么也没有」', 1);
      await era.input();
      await era.printAndWait('在打闹中，比赛开始的时间也到了');
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = '未知因素';
    /**
     * Plan A 专属（Plan B 禁止参加大阪杯）
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        '！新一年的 G1 连战敲响了超光速的钟声！',
        tachyon.get_colored_name(),
        ' 漂亮的越过终点！',
      ]);
      era.println();
      await tachyon.print_and_wait('哦，赢了啊');
      await tachyon.print_and_wait([
        '虽然说来可能十分不尊重人，但这确实就是 ',
        tachyon.get_colored_name(),
        ' 的真实想法',
      ]);
      await tachyon.print_and_wait([
        '在这个赛场上，能够阻止 ',
        tachyon.get_colored_name(),
        ' 的就只有',
        tachyon.sex,
        '自己的伤病',
      ]);
      await tachyon.print_and_wait([
        '在已经摆脱伤病的现在，哪怕被称为自傲也无所谓，',
        tachyon.get_colored_name(),
        ' 无法输给任何人',
      ]);
      era.println();
      await tachyon.print_and_wait([tachyon.sex, '唯一在乎的，只有实验的结果']);
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.say_and_wait(
        '没有欢呼声……也是啊，这种临时抱佛脚的收买人心怎么可能有用……还是需要时间积累',
        true,
      );
      await tachyon.print_and_wait(
        '再说，就算有了欢呼声，对比赛也不可能有什么影响的吧',
      );
      await tachyon.print_and_wait('不然比赛只要看人气颁发名次不就好了');
      await tachyon.print_and_wait('比赛结束……那么，该去找豚鼠……');
      era.println();
      await you.say_as_passer_by_and_wait('观众A', '好厉害啊！');
      era.println();
      await tachyon.say_and_wait('…………？');
      await you.say_as_passer_by_and_wait('观众B', [
        '好快的跑法……那个就是 ',
        tachyon.get_colored_name(),
        ' 吗？',
      ]);
      await you.say_as_passer_by_and_wait(
        '观众C',
        '因为媒体的关系，原本以为是个问题儿童……就算真的是问题儿童，在赛场上就该是成绩论高下吧！',
      );
      await you.say_as_passer_by_and_wait('观众D', [
        '本来经典赛上的战绩就堪称逆天，这种',
        tachyon.uma_sex_title,
        '到底为什么会在闪耀系列赛里乱杀啊，哪怕梦之杯来人都赢不过的啦！',
      ]);
      await you.say_as_passer_by_and_wait(
        '观众E',
        '从经典赛就一直在看了，但无论看几次果然还是太强了！',
      );
      era.println();
      await tachyon.say_and_wait('这是……', true);
      era.println();
      await tachyon.print_and_wait(
        '仿佛定格了一般，在通过终点线一会后才响起的',
      );
      await tachyon.print_and_wait('全场的欢呼声');
      await tachyon.print_and_wait(
        '夸张，夸大，毫无根据的赞扬，荒谬至极的吹嘘',
      );
      await tachyon.print_and_wait('……奇怪，是这场比赛有什么特别的吗？');
      era.println();
      await tachyon.say_and_wait(
        '不……一直都是如此，只是……一直都没注意到而已',
        true,
      );
      await tachyon.print_and_wait('担心双腿崩溃');
      await tachyon.print_and_wait('担心实验失败');
      await tachyon.print_and_wait('担心止步不前');
      await tachyon.print_and_wait('所以……不是不存在，只是没听见，因为不重要');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速子前辈好帅！',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '果然速子前辈才是最强的',
        tachyon.uma_sex_title,
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '速子前辈必胜！',
      );
      await tachyon.print_and_wait('实际上，一直存在');
      await tachyon.print_and_wait([
        '在皋月赏的时候，那个人一定喊过「超越光速吧！',
        tachyon.get_colored_name(),
        '！」',
      ]);
      await tachyon.print_and_wait([
        '在日本德比的时候，那个人一定喊过「让我看见',
        tachyon.uma_sex_title,
        '的可能性吧！」',
      ]);
      await tachyon.print_and_wait([
        '在菊花赏的时候，那个人一定喊过「向我证明，',
        tachyon.uma_sex_title,
        '的伤病是可以被超越的吧！」',
      ]);
      era.println();
      await tachyon.print_and_wait('然后……是大阪杯');
      await you.say_and_wait([
        tachyon.get_colored_name(),
        ' 的可能性，绝对不只三冠！',
      ]);
      era.println();
      await tachyon.print_and_wait('啊啊');
      await tachyon.print_and_wait('这次，终于听见了');
      era.println();
      await tachyon.print_and_wait([
        '原来，',
        tachyon.get_colored_name(),
        ' 一直都是被人爱着的',
      ]);
      await tachyon.print_and_wait('被粉丝，被后辈，被世界');
      await tachyon.print_and_wait('还有……观众席最前排');
      await tachyon.print_and_wait('明明没有在发光，却比谁都还要亮眼的那个人');
      era.println();
      await tachyon.print_and_wait('真是，这个笨蛋');
      await tachyon.print_and_wait('明明比赛的时候都喊得出那样的话来');
      await tachyon.print_and_wait(
        '怎么面对面时，就只能说出那种蹩脚的夸奖了？',
      );
      await tachyon.print_and_wait('要是我没听到的话怎么办');
      await tachyon.print_and_wait('这些支持不就白费了吗？');
      await tachyon.print_and_wait(
        '支持……原来不是为了被支持的人听见才喊出的吗？',
      );
      await tachyon.print_and_wait(
        '……那么，不为了被听见而喊出的，才是真正的支持吗？',
      );
      era.drawLine();
      await tachyon.say_and_wait(['我回来了……', callname]);
      era.printButton('「欢迎回来，速子，腿没有任何问题吧！」', 1);
      era.printButton('「今天跑的一样真的，太厉害了！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '……原本感觉对支持的定义已经能够明确了，都怪你啊，又得重新调查了',
      );
      era.println();
      await you.say_and_wait('欸————为啥！？');
      era.println();
      await tachyon.say_and_wait(
        '作为惩罚……今天的药是干扰大脑高级认知判断能力的药……',
      );
      await tachyon.say_and_wait(
        '或者通俗一点来讲叫做吐真剂，喝下去之后好好聊聊今天比赛的看法吧',
      );
      era.println();
      await you.say_and_wait('欸—————！？');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, you, callname, call_25) => {
      await tachyon.say_and_wait(['因此，根据我的实验结果……大阪杯时粉丝……']);
      await tachyon.say_and_wait(
        '以及某人，具有的热情制造出了力量，使我超越了原来的速度，果然，感情是带有一定程度力量的吧',
      );
      era.printButton('「没想到速子居然会相信这种唯心的概念啊」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '我只相信真理及可能性，只要有这个可能性我就能赌上一切……',
        callname,
        ' 你不也是吗？',
      ]);
      await tachyon.say_and_wait([
        '唯物唯心都好，只要能够为我所用，让我超越极限，抵达可能性的尽头……哪怕是 ',
        call_25,
        ' 的朋友，我也不会吝啬借其一用的',
      ]);
      await tachyon.say_and_wait(
        '……不过要合理解释的话，大概是与大脑皮层及中枢神经的活跃程度有关吧，简单来讲就是……呵呵，合法的兴奋剂？',
      );
      era.printButton('「！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '呵呵，开玩笑的……但本质上这种兴奋对体能的加成，如果是无意识之下，那么提升的兴奋阀值也有限',
      );
      await tachyon.say_and_wait([
        '起码绝对不会有大阪杯那时测量出来的那么高……难道说是我自己精神上……',
      ]);
      era.printButton('「速子？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……不，没什么，还需要再进行验证罢了，比起这个，我想更加深入研究看看……『粉丝』的概念',
      );
      era.printButton('「粉丝……」', 1);
      era.printButton('「那也就是说……」', 2);
      await era.input();
      await tachyon.say_and_wait('错……我打算参加看看，粉丝感谢祭');
      await tachyon.say_and_wait(
        '近距离的接触……这次的目的有二，如果顺利的话……希望能一次解决',
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait('粉丝A', [
        '速子',
        tachyon.adult_sex_title,
        '！请问可以和您拍张照吗！',
      ]);
      await tachyon.say_and_wait('呵呵，当然可以了，需要摆什么特殊的姿势吗？');
      await you.say_as_passer_by_and_wait(
        '粉丝A',
        '不，不用，只需要像这样双手抱胸就可以了！',
      );
      await tachyon.say_and_wait('像这样吗？');
      await you.say_as_passer_by_and_wait('粉丝A', '非，非常感谢！');
      era.println();
      await you.say_as_passer_by_and_wait(
        '粉丝B',
        '速子同学！我支持你很久了！宝冢纪念也要加油啊',
      );
      await tachyon.say_and_wait('是吗是吗？谢谢你的鼓励');
      await you.say_as_passer_by_and_wait(
        '粉丝B',
        '是的，希望速子同学之后也能继续跑出更加令人着迷的跑法来！',
      );
      await tachyon.say_and_wait('一定会的，哈哈哈哈！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 有条不紊的与来访的粉丝们进行着应答',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 营业模式与一般情况的差距……',
      ]);
      await era.printAndWait([
        '有时差距真的大到会让人开始怀疑到底哪边才是',
        tachyon.sex,
        '的本性',
      ]);
      await era.printAndWait('很快的，活动便结束了');
      era.println();
      await tachyon.say_and_wait('唔……收集到了很有趣的数据呢');
      await tachyon.say_and_wait(
        '我整理了今天来无论是握手签名还是拍照的比赛观众——',
      );
      await tachyon.say_and_wait(
        '以下简称为『粉丝』，观看比赛的目的，以及见到我之后的心跳呼吸脉搏反应速率……',
      );
      await tachyon.say_and_wait('根据粉丝不同的说法做出了结论');
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        '，对这些粉丝而言，类似于实验中的奖赏',
      ]);
      await tachyon.say_and_wait(
        '付出名为应援的努力，希望能够获得回应作为奖赏……',
      );
      era.printButton('「……我不觉得是这样」', 1);
      era.printButton('「对速子的应援没有那么复杂」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……嗯，这个论述的话，最大的破绽就在于，',
        callname,
        '，你的支援又是为了什么',
      ]);
      await tachyon.say_and_wait([
        '皋月赏、日本德比、菊花赏，还有大阪杯……你都为我应援了吧',
      ]);
      await tachyon.say_and_wait(
        '但是与他们不同……跟在我身边的你是知道的，知道当时的我还没有将粉丝的支持当成需要特别看待的实验变量',
      );
      await tachyon.say_and_wait(
        '所以你的应援及支持，无法获得任何的回报，和你对我的研究的支持不同……',
      );
      await tachyon.say_and_wait(
        '相比你对我研究上的支持，能够获得你想要看见的跑法和比赛……',
      );
      await tachyon.say_and_wait('但应援和支持这方面，完全不明白啊');
      era.println();
      await era.printAndWait([
        '听见 ',
        tachyon.get_colored_name(),
        ' 的询问，',
        you.get_colored_name(),
        ' 不由得一时语塞',
      ]);
      await era.printAndWait([
        '要对 ',
        tachyon.get_colored_name(),
        ' 的问题做出回答其实并不难',
      ]);
      await era.printAndWait(
        '但……这种感情上的东西，真的是能够透过言语来使人理解的吗',
      );
      await era.printAndWait([
        '看 ',
        you.get_colored_name(),
        ' 没回话，',
        tachyon.get_colored_name(),
        ' 又继续说道',
      ]);
      era.println();
      await tachyon.say_and_wait('这样的话，今天的实验只能算成功一半吧……');
      await tachyon.say_and_wait([
        '之后就是宝冢纪念了，这次要整体测量粉丝的支持对数据的影响才行',
      ]);
      await era.printAndWait([
        '在迷惑中，',
        tachyon.get_colored_name(),
        ' 的粉丝感谢祭结束了',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_a: (() => {
    const title = '万众其心';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     */
    const f = async (tachyon, you) => {
      await era.printAndWait(['在你们抵达阪神赛场的时候，全场已经人声鼎沸']);
      era.println();
      await you.say_as_passer_by_and_wait('观众A', [
        '果然看好的还是 ',
        tachyon.get_colored_name(),
        ' 啊',
      ]);
      await you.say_as_passer_by_and_wait('观众B', [
        tachyon.get_colored_name(),
        '？那不是……之前……',
      ]);
      await you.say_as_passer_by_and_wait('观众C', [
        '一听就知道上次大阪杯你没看了，能够跑出那种跑法的',
        tachyon.uma_sex_title,
        '不可能是坏人！',
      ]);
      await you.say_as_passer_by_and_wait(
        '观众D',
        '人格跑法论什么的差不多得了……不过，确实是非常与众不同的跑法',
      );
      await you.say_as_passer_by_and_wait('观众E', [
        '加油啊！再跑出大阪杯的跑法来吧！',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '哦呀哦呀……真是受欢迎啊，而且提的都是大阪杯……我说，我去年的比赛就这么无聊吗？',
      );
      era.printButton('「去年当然也很精彩」', 1);
      era.printButton('「只是大阪杯尤其精彩」', 2);
      await era.input();
      await era.printAndWait([
        '去年的 ',
        tachyon.get_colored_name(),
        '，跑起来除了光的眩目感外，却带有一丝虚幻',
      ]);
      await era.printAndWait([
        '因此看完',
        tachyon.sex,
        '的比赛，比起惊艳更多还是担心',
      ]);
      await era.printAndWait(['害怕', tachyon.sex, '会就这么化光而去']);
      await era.printAndWait('没有了那丝虚幻感后');
      await era.printAndWait([tachyon.get_colored_name(), ' 的跑法，堪称艺术']);
      era.println();
      await tachyon.say_and_wait(
        '……姑且当成是夸奖吧，那么，这样的气氛也正好进行第二次的实验',
      );
      await tachyon.say_and_wait(
        '大阪杯那次……没能在比赛途中确定，现在G1的舞台，还有应援的粉丝，呵呵，到底能够走到哪一步呢',
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_a: (() => {
    const title = '神话诞生';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('解说', [
        '称霸了上半年的总决赛，化身为神话的是 ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 理所当然的第一个跨越了终点线',
      ]);
      await era.printAndWait('全场响起了响亮的掌声及欢呼');
      await era.printAndWait('空中彩纸飞舞，又是一次辉煌且精彩的比赛');
      era.println();
      await era.printAndWait('忽然，观众席发出惊呼，接着喧闹变得更为热络');
      await era.printAndWait([
        '那个比赛后总是轻描淡写草草挥手下场的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('现在却依然留在场上，大方的回应着粉丝们的欢呼声');
      await era.printAndWait('而这一举动也引发了更热闹的声援，声音响彻云霄');
      era.drawLine({ content: '下场后' });
      await tachyon.say_and_wait('……呵呵');
      era.printButton('「速子！」', 1);
      era.printButton('「今天也很精彩！」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '嗯？哦，比起这个，',
        callname,
        '！你看，测试的结果！',
      ]);
      await tachyon.say_and_wait([
        '这次的实验中比起大阪杯加入了更多的欢呼声变量，根据比赛结束后的数据分析',
      ]);
      await tachyon.say_and_wait(
        '确实对肌肉的输出力量产生了帮助……其输出量大于平常情绪增长造成的幅度……',
      );
      await tachyon.say_and_wait(
        '简单来讲，实验成功！观众的应援确实能够造成影响，哈哈哈哈哈哈！',
      );
      era.println();
      era.print('……虽然不太明白，但总之实验似乎是成功了');
      era.printButton('「恭喜！」', 1);
      era.printButton('「这样距离可能性就更进一步了！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '呵呵……虽然还有些地方没能搞清楚，但在比赛中运用已经没有问题了！',
      );
      await tachyon.say_and_wait(
        '不过……这么看来，其实我确实是会因喝采而感到高兴的啊……该说毕竟还是社会性生物吗……',
      );
      era.printButton(
        '「大家都是很认真的为速子加油的哦，要是速子做出反应一定会很高兴的」',
        1,
      );
      era.printButton(
        '「我是很认真为速子加油的，要是速子能够感到高兴就太好了」',
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '呵呵，说的也是……那么下次做点回应吧，就当作支援报酬的粉丝服务吧',
          );
          era.println();
          await era.printAndWait([
            '并不是报酬……虽然想这么说，但 ',
            tachyon.get_colored_name(),
            ' 大概还是无法明白吧',
          ]);
        } else {
          era.println();
          await tachyon.say_and_wait('你的喝采……嗯，我也确实的听到了……');
          await tachyon.say_and_wait(
            '话说，明明能说出那种话来，怎么每次跑完回来都是这些老套的陈腔滥调啊？',
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '那么，这个大家一定也包括了你吧……你希望我做出怎么样的回应，来感谢你呢♡',
          );
        } else {
          await tachyon.say_and_wait(
            '这样啊，那么，我该用什么来回报我最大的粉丝才好呢',
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 用妩媚的眼神看着 ',
          you.get_colored_name(),
        ]);
        await era.printAndWait([
          '一时 ',
          you.get_colored_name(),
          ' 竟忘记了言语',
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的宝冢纪念结束了！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_31: (() => {
    const title = '他人的可能性';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_2 爱丽速子对无声铃鹿的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, call_2, love) => {
      await era.printAndWait('阳光，沙滩');
      await era.printAndWait([
        '以及在沙滩上奔跑着的',
        tachyon.uma_sex_title,
        '们',
      ]);
      era.printButton('「真是青春啊」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '……看着眼前的场景居然能说出这种话来，训练员',
        you.adult_sex_title,
        '您也……真不愧是速子前辈的训练员啊',
      ]);
      era.println();
      await era.printAndWait([
        '夏日的沙滩上，正在进行着',
        tachyon.uma_sex_title,
        '间的追逐战',
      ]);
      await era.printAndWait('仿佛鬼抓人一般');
      await era.printAndWait(
        '明明是以一对多，但不知为何惧怕并逃跑的却是人多的一方',
      );
      await era.printAndWait([
        '而被惧怕着的一方，赫然是今年上半年风头最盛的',
        tachyon.uma_sex_title,
        '，也是 ',
        you.get_colored_name(),
        ' 的负责',
        tachyon.uma_sex_title,
        '，',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        '哦呀哦呀……这可真是，现在的孩子连良药苦口的道理都不明白了吗',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '……如果，只是苦的程度也就算了',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '速子前辈的药……虽然味道不错，虽然不错，但是……！',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'D',
        '身体发光什么的……这种事真的太丢人了！',
      );
      era.println();
      await era.printAndWait('…………欸？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着眼前的',
        tachyon.uma_sex_title,
        '们……虽然因为阳光的关系不太明显，但确实在手臂肩膀或者腿的位置散发着微弱的光芒',
      ]);
      await era.printAndWait('不过，为什么发光的都是些奇怪的地方');
      await era.printAndWait([
        '嗯？怎么还有个',
        tachyon.uma_sex_title,
        '大腿内侧在……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……这种药的效果，是让血流加速的部位发光，而且药效应该只有训练的那一个小时有效，',
      );
      await tachyon.say_and_wait(
        '但副作用是会加速兴奋情况下被触碰位置的蛋白质UMA—A的活性，而血流加速发光的原理就是透过对UMA—A',
      );
      era.drawLine();
      await tachyon.say_and_wait(
        '总而言之，就是……与心上人，或者会使自己心跳加速的人身体接触，才会发光',
      );
      era.println();
      await era.printAndWait('啊，原来如此');
      await era.printAndWait('这下能够明白肩膀手臂发光的原因了');
      await era.printAndWait('……等等，那大腿内侧的……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看',
        tachyon.sex,
        '忽然羞红了脸的模样，已经领悟了一切',
      ]);
      await era.printAndWait('……现在的孩子玩的真花啊');
      era.println();
      await tachyon.say_and_wait(
        '总之……这种药，主要还是辅佐作用，必须要结合持之以恒的训练才能有效',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '我……我们会好好训练的！真的不会偷懒！所以药什么的……',
      );
      await tachyon.say_and_wait(
        '呵呵，那可不行，两者结合才能达到最佳的提升效果，所以……乖乖喝下去吧！',
      );
      era.println();
      await era.printAndWait([
        '眨眼间，',
        tachyon.get_colored_name(),
        ' 便趁着',
        tachyon.uma_sex_title,
        '们放松警惕时一个箭步冲到了其中一名',
        tachyon.uma_sex_title,
        '面前，以迅雷不及掩耳的速度将药灌入',
        tachyon.sex,
        '的口中',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '就让你们瞧瞧吧……以 ',
        callname,
        ' 为对象训练出来的灌药能力！哈哈哈哈哈哈！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '咿呀———',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '咕哇————',
      );
      era.println();
      await era.printAndWait([
        '再怎么说，也是身为G1级',
        tachyon.uma_sex_title,
        '，也是 ',
        you.get_colored_name(),
        ' 认可的最快的',
        tachyon.uma_sex_title,
        '，这些还未完全发育成的后辈当然不是 ',
        tachyon.get_colored_name(),
        ' 的对手',
      ]);
      await era.printAndWait('不过几分钟的时间，整个沙滩已经尸横遍野');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '速……速子前辈怎么，好像变了个人一样',
      );
      era.println();
      await era.printAndWait([
        '这么说来，为了后辈们眼中的形象好方便实验，',
        tachyon.get_colored_name(),
        ' 一般在后辈们面前都是维持着装出来的成熟前辈样来着',
      ]);
      await era.printAndWait([
        '要说的话，眼前这副模样才是 ',
        tachyon.get_colored_name(),
        ' 这名',
        tachyon.uma_sex_title,
        '的本性才对',
      ]);
      await era.printAndWait(['不过……', tachyon.sex, '说的也没错']);
      era.printButton('「速子确实……改变了很多呢」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起了前几天 ',
        tachyon.get_colored_name(),
        ' 说的话',
      ]);
      await tachyon.used_to_say_and_wait(
        '想要变得和速子前辈一样强……那些孩子这么和我说了哦！',
      );
      await tachyon.used_to_say_and_wait([
        '来吧！',
        callname,
        '！为了那些孩子，必须要努力调配最适合',
        tachyon.couple_title,
        '的药出来才行！',
      ]);
      await era.printAndWait([
        '不是，「为了实验，让',
        tachyon.couple_title,
        '试药」',
      ]);
      await era.printAndWait([
        '不是，「为了',
        tachyon.couple_title,
        '，而调配药物」',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '果然是这样吧……以前那个温柔的速子前辈到底去哪里了……',
      );
      era.println();
      await tachyon.say_and_wait('哦呀～～这里不还有一匹小马驹吗？');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '咿！！！',
      );
      era.println();
      await era.printAndWait([
        '看着最后躲在 ',
        you.get_colored_name(),
        ' 身旁的小',
        tachyon.uma_sex_title,
        '也被 ',
        tachyon.get_colored_name(),
        ' 按倒灌药，这场沙滩上的残忍实验总算以 ',
        tachyon.get_colored_name(),
        ' 的完胜作为结局',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '好了，',
        callname,
        '，开始我们今天的实验吧',
      ]);
      await era.printAndWait('但只有这点，是不会改变的');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 始终还是追求着极限以及突破极限的',
        tachyon.uma_sex_title,
      ]);
      era.printButton('「那么，今天的实验主题是？」', 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……你应该知道吧，最近 ',
          call_2,
          ' 似乎学会了在水上跑步的方法',
        ]);
        await era.printAndWait('…………欸？');
        era.println();
        await tachyon.say_and_wait(
          '根据计算，只要能够以超过 30m 每秒的速度在水上奔跑，确实是可以达到类似于轻功点水的效果',
        );
        era.println();
        await era.printAndWait('……不是，30m？每秒？');
        await era.printAndWait('不知何时，自己的腰上已经被绑上了一条绳子');
        await era.printAndWait([
          '而 ',
          tachyon.get_colored_name(),
          ' 坐上了海边的水上摩托',
        ]);
        await you.say_and_wait('……为什么你是水上摩托我却要在水上跑啊！？');
        era.println();
        await tachyon.say_and_wait(['加油吧，', callname, '，你一定可以的']);
        era.println();
        await era.printAndWait('话音刚落，整个人便飞了出去');
        await era.printAndWait([
          '轻功水上飘有没有成功不知道，但据看见那道风景线的小',
          tachyon.uma_sex_title,
          '们所说，倒是像打水漂时在水面上弹跳的石子',
        ]);
      } else {
        await tachyon.say_and_wait('今天的话……来点有意思的实验吧');
        era.println();
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 当着一群后辈们的面前，牵住了 ',
          you.get_colored_name(),
          ' 的手',
        ]);
        era.printButton('「速……速子？」', 1);
        await era.input();
        await era.printAndWait([
          '原本趴在地上装死的后辈们忽然抬起眼睛盯着你们两人',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 将脸贴近 ',
          you.get_colored_name(),
          ' 的耳朵，悄悄说道',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '之前不是说过吗，想要进行对于观众，或者说粉丝的观察',
        );
        await tachyon.say_and_wait([
          '现在是对于情感挑动方面的探查……举例来讲，要是我在这里亲你一下，',
          tachyon.couple_title,
          '的反应会如何呢？',
        ]);
        era.println();
        await era.printAndWait([
          '或许是因为阳光太过炙热，导致 ',
          you.get_colored_name(),
          ' 竟然有些不敢抬头去看 ',
          tachyon.get_colored_name(),
          ' 此时的眼神',
        ]);
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 的唇凑近了 ',
          you.get_colored_name(),
          ' 的脸庞，由于身体的遮挡，看上去就仿佛真的亲上去了一般',
        ]);
        await era.printAndWait([
          '一旁围观的',
          tachyon.uma_sex_title,
          '们发出了小小的惊呼',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '真是……不可思议。',
          callname,
          '，不知道为什么，听见',
          tachyon.couple_title,
          '的声音之后，我感觉自己似乎更有行动的欲望了',
        ]);
        await tachyon.say_and_wait(
          '是卡里古拉效应吗？由于在公共场所进行这样的事会使人感到害羞，因此反而增加了行为的欲望',
        );
        era.println();
        await tachyon.say_and_wait('啾❤');
        era.println();
        await era.printAndWait('亲上去了');
        await era.printAndWait('连说服自己的借口都没有了');
        era.println();
        await tachyon.say_and_wait(
          '那么……还要不要继续呢？让我们听听看，观众的感想吧❤',
        );
        era.println();
        await era.printAndWait([
          '说到最后一句是，',
          tachyon.get_colored_name(),
          ' 的音量忽然放大',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 转头看向沙滩，却看见一张张因眼前景色而满脸通红的稚嫩脸庞',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '看来……大家都很喜欢呢，这不是你宝冢时跟我说过的吗？粉丝服务……之类的？',
        ]);
        era.println();
        await era.printAndWait([
          '不妙啊，当初劝 ',
          tachyon.get_colored_name(),
          ' 的话竟然变成迴力镖了吗',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 抱住了 ',
          you.get_colored_name(),
          ' 的身体，顺势向前将 ',
          you.get_colored_name(),
          ' 压在了沙滩上',
        ]);
        era.println();
        await tachyon.say_and_wait('还想……继续吗？');
        era.printButton('「不想」', 1);
        era.printButton('「……不想」', 2);
        await era.input();
        await era.printAndWait(
          '再怎么说，即便退一万步来讲，在这么多人面前，还是太过头了吧',
        );
        await era.printAndWait([
          '而且仔细看了一眼，其实 ',
          tachyon.get_colored_name(),
          ' 的脸庞也有淡淡的微红……虽然不知道是因为害羞还是兴奋就是了',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '那么……就麻烦你跟这些小',
          tachyon.uma_sex_title,
          '们收集兴奋时的数据了',
        ]);
        era.println();
        await era.printAndWait([
          '忽然，',
          tachyon.get_colored_name(),
          ' 从 ',
          you.get_colored_name(),
          ' 身上爬了起来',
        ]);
        era.println();
        await tachyon.say_and_wait('如果还想继续的话……记得带着数据回来找我❤');
        era.println();
        await era.printAndWait([
          '没有放低音量的暗示话语，使周围',
          tachyon.uma_sex_title,
          '们又发出了阵阵的惊呼',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 摸摸鼻子，这下数据收集虽然容易，但之后不管回去不回去都得有人说闲话了啊',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_32: (() => {
    const title = '换位实验';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {PrintedSpan} kobe_hai 神户新闻杯（上色版名字）
     * @param {PrintedSpan} arim_kin 有马纪念（上色版名字）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      kobe_hai,
      arim_kin,
    ) => {
      await era.printAndWait('于是，愉快的夏日集训时间也过去了');
      await era.printAndWait('你们准备跟着学园的巴士回到学校');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速……速子前辈！请，请等一下！',
      );
      era.println();
      await era.printAndWait('嗯？');
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 同时疑惑的回头，看向了髮间有着巨大流星的小',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '今年秋天……我会出赛 ',
        kobe_hai,
        '……速子前辈……到时候可以来为我加油吗！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '加油……吗？',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '是的！希望速子前辈能看看我的跑步的模样！',
      );
      era.println();
      await era.printAndWait([
        kobe_hai,
        '……是九月下旬的比赛，如果只是观赛的话，也不至于影响到什么重要的事',
      ]);
      await era.printAndWait([
        '所以一切的问题就是，',
        tachyon.get_colored_name(),
        ' 愿意与否了',
      ]);
      era.println();
      await tachyon.say_and_wait('嗯……可以啊，那个时候，目前还没有其他安排');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '真的吗！太好了！我会努力赢下来的！',
      );
      era.println();
      await era.printAndWait([
        '小',
        tachyon.uma_sex_title,
        '兴奋的站起身来，完全看不出像是刚被强行灌完药的模样一溜烟的跑走了',
      ]);
      era.println();
      await tachyon.say_and_wait('……真是耀眼啊，这些孩子们的可能性');
      era.printButton('「怎么一副好像老人家的口吻」', 1);
      era.printButton('「但是在我眼中，速子才是最闪耀的！」', 2);
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          '是吗？那么……你要一直看着我才行啊，因为我的可能性，已经离不开你了♡',
        );
        await era.printAndWait([
          '夏季集训结束，接下来是 ',
          arim_kin,
          '！……不过在这之前，是 ',
          kobe_hai,
          ' 的观战！',
        ]);
      } else if (love >= 50) {
        await tachyon.say_and_wait(
          '那么……就好好看着吧，我的可能性能抵达的地方',
        );
      } else if (relation >= 225) {
        await tachyon.say_and_wait(
          '呵呵，这是当然，那些孩子要超越我还早的很呢！',
        );
      } else if (relation >= 0) {
        await tachyon.say_and_wait('我说你……不说这种肉麻的话是会死吗？');
      } else {
        await tachyon.say_and_wait('被你这种人期待……真是令人讨厌啊');
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_35: (() => {
    const title = '因素 · 旁观者设置';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait(
        '不过仔细想想……这大概是我第一次在观众席看比赛吧',
      );
      era.println();
      await era.printAndWait(['今天是神户新闻杯']);
      await era.printAndWait([
        '是 ',
        tachyon.get_colored_name(),
        ' 受后辈之邀来观赛的日子',
      ]);
      era.printButton('「毕竟主要都是自己上场跑呢」', 1);
      era.printButton('「毕竟主要都是看比赛录像呢」', 2);
      await era.input();
      await era.printAndWait([
        '对 ',
        tachyon.get_colored_name(),
        ' 而言，除了自己的比赛外，应该就没有需要到赛场的情况了',
      ]);
      await era.printAndWait(
        '比赛数据分析什么的，比起在观众席上看，看比赛结束后的录象能得到的数据还更多一些',
      );
      await era.printAndWait(
        '因此今天确实是第一次，或者说第一次以观众的身份而非研究角度来观看比赛',
      );
      era.println();
      await tachyon.say_and_wait('……实际在现场的感觉……果然很吵啊');
      era.println();
      await you.say_as_passer_by_and_wait('粉丝A', '加油！');
      await you.say_as_passer_by_and_wait('粉丝B', '一定要赢啊！');
      await you.say_as_passer_by_and_wait('粉丝C', [
        '神户新闻杯虽然说是菊花赏的先行赛，但实际上2400米和阪神赛场举办这两点对菊花赏而言都不算是对菊花赏检验的效果……',
      ]);
      await you.say_as_passer_by_and_wait('粉丝C', [
        '……因此其实很难说在神户新闻杯胜出的',
        tachyon.uma_sex_title,
        '就一定能赢下菊花赏',
      ]);
      await you.say_as_passer_by_and_wait('粉丝D', '怎么忽然说这个');
      era.println();
      await tachyon.say_and_wait('这就是平常我比赛前观众席上的场景吗？');
      era.printButton('「差不多吧，甚至更热闹一点」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……也是，毕竟是G1。嘛，虽然能理解他们的心情，不过这个时候加油也是没用的吧',
      );
      era.printButton('「有没有用……不是这样算的」', 1);
      era.printButton('「看下去就知道了」', 2);
      await era.input();
      await tachyon.say_and_wait('看下去什么的……哦？开始入闸了');
      era.drawLine();
      await tachyon.print_and_wait('那孩子进入闸门了');
      await tachyon.print_and_wait([
        '但说实话，这场比赛对 ',
        tachyon.get_colored_name(),
        ' 而言，其实需要关注的点不多',
      ]);
      await tachyon.print_and_wait('具有可能性的那孩子，必然是重中之重');
      await tachyon.print_and_wait(
        '……但除此之外，这场比赛不过是经典级限定的G2赛事',
      );
      era.println();
      await tachyon.say_and_wait('可以说，没有输掉的可能性吧');
      era.println();
      await tachyon.print_and_wait('赛前人气也是理所当然的第一人气');
      await tachyon.print_and_wait('天时地利人和，不可能输');
      await tachyon.print_and_wait('赛前分析胜率高达97.46%');
      era.println();
      await tachyon.print_and_wait('然而……');
      era.println();
      await you.say_as_passer_by_and_wait('观众A', '不要输！');
      await you.say_as_passer_by_and_wait('观众B', [
        '加油！还有机会！从外侧超',
        tachyon.sex,
        '啊！',
      ]);
      await you.say_as_passer_by_and_wait('观众C', '不要放弃！一定可以追上！');
      era.println();
      await tachyon.print_and_wait([
        '为什么还在为后面的',
        tachyon.uma_sex_title,
        '加油',
      ]);
      await tachyon.print_and_wait('明显，已经追不上了不是吗');
      await tachyon.print_and_wait('……不明白');
      await tachyon.print_and_wait([
        '不，能够理解，虽然徒劳但还是想要为自己支持的',
        tachyon.uma_sex_title,
        '发出喊声，这种事情自己还是能够理解的',
      ]);
      await tachyon.print_and_wait(
        '虽然说是疯狂科学家，但自己也不是什么不懂人性的机器人',
      );
      await tachyon.print_and_wait('但，为什么自己……');
      era.println();
      await you.say_as_passer_by_and_wait('解说', [
        '追上来了！现在后面的',
        tachyon.uma_sex_title,
        '追上来了！',
      ]);
      era.println();
      await tachyon.say_and_wait('！');
      await tachyon.say_and_wait('……加油');
      await tachyon.say_and_wait('加油！不要输啊！');

      era.printButton('「！」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '解说',
        '冲—————线！第一名的是一号一闸—————',
      );
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的应援声，被淹没在全场的喝采及加油声',
      ]);
      await era.printAndWait([
        '全场能够听见的恐怕只有在',
        tachyon.sex,
        '身边的 ',
        you.get_colored_name(),
        '，以及……',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '前辈！我听见你的加油声了！谢谢前辈的应援……那个时候，感觉全身忽然涌起了力量！',
      );
      era.println();
      await tachyon.say_and_wait('……呵呵，跑的很不错，未来还要继续努力下去');
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', '是！');
      era.println();
      await era.printAndWait([
        '神户新闻杯结束，',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 离开了赛场',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……虽然理论上已经确定，但实际以场外人……或者，以当事人的身份来看，还是第一次',
      );
      await tachyon.say_and_wait(
        '无论是其他孩子，还是那孩子，最后都……真的超越极限了',
      );
      era.println();
      await era.printAndWait([
        '今天的比赛上，好几名',
        tachyon.uma_sex_title,
        '都是',
      ]);
      await era.printAndWait('超越了极限');
      await era.printAndWait([
        '超越了在赛前测出的，',
        tachyon.couple_title,
        '的理论最大速度',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '，你还记得之前粉丝感谢祭时的事吗？',
      ]);

      era.printButton('「速子是想着获得回报而为那孩子应援的吗？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 没有回答，只是反问了句',
      ]);
      era.println();
      await tachyon.say_and_wait('……呵呵');
      await tachyon.say_and_wait('不是因为想被人听见，想产生互动的行为……');
      await tachyon.say_and_wait(
        '而是纯粹，将自己的心情、情绪发泄出来而高喊出声',
      );
      await tachyon.say_and_wait('换句话说，就是『感动』');
      await tachyon.say_and_wait([
        '观众被',
        tachyon.uma_sex_title,
        '感动而发出欢呼，',
        tachyon.uma_sex_title,
        '也被观众感动而超越自己的极限……',
      ]);
      await tachyon.say_and_wait(
        '明明是好像左脚踩右脚，甚至永动机一样的不合理的概念，却实际的发生了',
      );
      await tachyon.say_and_wait(
        '真的，果然这些都是在实验室里完全体验不到的啊，哈哈哈哈！',
      );

      era.printButton('「这样，算是『喜欢』上比赛了吗」', 1);
      await era.input();
      await tachyon.say_and_wait('……嗯，我也不知道');
      era.println();
      await era.printAndWait('……也是');
      await era.printAndWait('毕竟说到底依然不是自己登上赛场去跑的');
      await era.printAndWait('要说喜欢与不喜欢，或许还是难以说明吧');
      await era.printAndWait([
        '但无论如何，随着神户新闻杯的结束，有马纪念也已经快要进入眼前了',
      ]);
      await era.printAndWait('研究的尽头（Deadline），就在眼前了');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_39: (() => {
    const title = '最终因素的寻求';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait(
        '随着时间进入秋季，年尾最重要的比赛也映入大众眼帘',
      );
      era.println();
      await you.say_as_passer_by_and_wait('记者A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '，请问对今年底的有马纪念自己是第一人气有什么感想吗？',
      ]);
      await tachyon.say_and_wait([
        '第一人气？没什么……不，感谢各位的支持，有马纪念……',
      ]);
      await tachyon.say_and_wait('我会努力，以超越自己的极限为目标去跑');
      await you.say_as_passer_by_and_wait('记者B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '的目标是超越',
        tachyon.uma_sex_title,
        '的极限，请问这是什么意思呢？',
      ]);
      await tachyon.say_and_wait([
        '呵呵呵……如果一切顺利的话，你们在有马纪念上就能看到了',
      ]);
      await you.say_as_passer_by_and_wait('记者C', [
        '请问目前对于有马纪念，',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '有进行过哪些准备呢？',
      ]);
      await tachyon.say_and_wait(
        '场地及肉体的突破自不用说，但除此之外……事实上，我正在寻求精神上的突破啊',
      );
      era.println();
      await era.printAndWait('精神上的突破');
      await era.printAndWait('这一话题让现场的记者都有些困惑');
      await era.printAndWait('无论是从外表给人的形象，还是偶尔听见的传闻');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 都不像是会讲精神论的',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await you.say_as_passer_by_and_wait('记者A', [
        '精……精神上的突破？……毕竟下一场的对手是那个 ',
        coffee.get_colored_name(),
        '，所以想要寻求精神面的帮助吗？',
      ]);
      await tachyon.say_and_wait([call_25, '……对手……？']);
      await you.say_as_passer_by_and_wait('记者A', '难，难道不是吗？');
      await tachyon.say_and_wait('……不，是值得探讨的可能性啊，呵呵呵');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 留下了意味深长的话语，并没有做出解释',
      ]);
      if (love >= 50 && love < 75) {
        await you.say_as_passer_by_and_wait('记者A', [
          '对了……另外还有关于 ',
          tachyon.get_colored_name(),
          ' 与训练员的传闻',
        ]);
        await you.say_as_passer_by_and_wait('记者A', '想问两位……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 看了 ',
          you.get_colored_name(),
          ' 一眼，不知为何，',
          you.get_colored_name(),
          ' 心里有些毛毛的',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '你是想问，我和',
          you.sex,
          '之间……有没有恋爱方面的感情吗？',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 又看了 ',
          you.get_colored_name(),
          ' 一眼，这次 ',
          you.get_colored_name(),
          ' 明白了，',
          tachyon.sex,
          '的意思是「你希望我怎么回答？」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 以不会被记者看到的角度，以最小限度摇了摇头，希望',
          tachyon.sex,
          '能看见',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……这么说吧，',
          you.sex,
          '……是我最重要的……',
        ]);
        await you.say_as_passer_by_and_wait('记者A', '最重要的……？');
        era.println();
        await era.printAndWait([
          '全场都集中了注意力在 ',
          tachyon.get_colored_name(),
          ' 的话语上',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 也不由得吞了口口水']);
        era.println();
        await tachyon.say_and_wait('最重要的……实验动物');
        era.println();
        await era.printAndWait('记者们听见回答全都泄了口气');
        await era.printAndWait([
          you.get_colored_name(),
          ' 也吐了口气，不过是安心的泄气',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '悄悄用嘴型对 ',
          you.get_colored_name(),
          ' 说了「欠我一次」',
        ]);
        await era.printAndWait([
          '但现在的 ',
          you.get_colored_name(),
          ' 也没有功夫去顾虑这些了',
        ]);
        era.println();
        await era.printAndWait('题外话，在那之后隔天的新闻头条……');
        await you.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          ' 对谣言做出回应！声称训练员为最重要的存在！',
        ]);
        await era.printAndWait('…………这不是什么也没回避到吗');
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_43: (() => {
    const title = '完全燃起的胜负心';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     * @param {boolean} invincible 爱丽速子是否无败
     * @param {boolean} beat_c 爱丽速子是否击败过曼城茶座
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      invincible,
      beat_c,
    ) => {
      await tachyon.say_and_wait('呼……呼……');
      era.println();
      await era.printAndWait([
        '从神户新闻杯结束后到今天，',
        tachyon.get_colored_name(),
        ' 的训练一直维持在良好的状态',
      ]);
      era.println();
      await tachyon.say_and_wait('……今天，也还是一样啊');
      era.println();
      await era.printAndWait('然而……维持，也就代表着没有进步');
      await era.printAndWait([
        '随着时间距离有马越来越近，',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的情绪也不免有些急躁起来',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '速子前辈！今天我也来了！',
      );
      era.println();
      await era.printAndWait([
        '这时出现治愈两人的，便是神户新闻杯时的后辈',
        tachyon.uma_sex_title,
        '了',
      ]);
      await era.printAndWait([
        '那名后辈的',
        tachyon.uma_sex_title,
        '，现在经常会跟着 ',
        tachyon.get_colored_name(),
        ' 一起锻炼',
      ]);
      await era.printAndWait([
        '而身为训练员的 ',
        you.get_colored_name(),
        ' 也不时会对',
        tachyon.sex,
        '做出指点',
      ]);
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 无聊的盯着对方时，眼前忽然浮现了一张熟悉的脸庞',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '怎么？盯着人家看的那么起劲，不会是看上那孩子了吧？',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' 慌忙摇头']);
      era.println();
      if (relation >= 0) {
        await tachyon.say_and_wait('呵呵……那孩子确实具有相当可观的可能性');
        await tachyon.say_and_wait([
          '……如果是以前的我的话，或许可能将',
          tachyon.sex,
          '当成Plan B的备选吧',
        ]);
        await tachyon.say_and_wait(
          '但是整个Plan B，都是建立在PlanA不可行的备选',
        );
        await tachyon.say_and_wait(['可别逐末忘本了，', callname]);
      } else {
        await tachyon.say_and_wait('别用那种眼神盯着我关注的后辈');
        await tachyon.say_and_wait('……像你这种人，就别去祸害别人了');
        await tachyon.say_and_wait('跟在我身边，算是给你的最大的怜悯了');
      }
      if (love >= 75) {
        era.println();
        await tachyon.say_and_wait(
          '要是忘记的话，就让我重新让你的眼睛灼伤吧……',
        );
        await tachyon.say_and_wait([
          '这次，会亮至炫目……直到你再也看不清其他',
          tachyon.uma_sex_title,
          '的模样为止',
        ]);
      }
      era.println();
      await era.printAndWait([
        '这个，某种意义上来说是 ',
        tachyon.get_colored_name(),
        ' 的独占欲吗？',
      ]);
      await era.printAndWait([you.get_colored_name(), ' 只能苦笑带过']);
      era.println();
      await era.printAndWait([
        '然而，今天的来客，却不只后辈的',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait('……哦呀');
      await coffee.say_and_wait([c_call_t, '……']);
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '，',
        tachyon.get_colored_name(),
        ' Plan B的主选',
      ]);
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '也是 ',
          you.get_colored_name(),
          ' 的负责',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          '与 ',
          you.get_colored_name(),
          ' 发誓，要一起追上朋友的重要的担当',
        ]);
      }
      era.println();
      await era.printAndWait([
        '不知为何忽然找上了 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '？是来接受我的实验的吗？要的话随时欢……',
      ]);
      await coffee.say_and_wait('不是……只是想，可以和我来场模拟赛吗？');
      await tachyon.say_and_wait('……模拟赛？');
      await coffee.say_and_wait('是的……无论如何，请务必');
      era.println();
      await era.printAndWait('……模拟赛的申请十分简单');
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '更何况 ',
          you.get_colored_name(),
          ' 是',
          tachyon.couple_title,
          '两人的训练员',
        ]);
      }
      await era.printAndWait('甚至不需要特殊安排，只需要租借场地就好');
      era.println();
      await era.printAndWait('申请的手续没过多久就放了下来');
      await era.printAndWait([
        '只有两人的赛道上，',
        you.get_colored_name(),
        ' 充当起跑的宣布者站在赛道旁',
      ]);
      await era.printAndWait('心中是不安与忐忑');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '，',
        tachyon.sex,
        '的目标是超越',
        tachyon.uma_sex_title,
        '的极限',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '，',
        coffee.sex,
        '的目标是追上朋友的步伐',
      ]);
      era.println();
      await era.printAndWait('不知是命中注定的安排还是恶趣味的巧合，');
      await era.printAndWait(['这两人都将最终的目标选在有马纪念']);
      await era.printAndWait(
        '今天的模拟赛……虽然不知道原因为何，但大概可以视为那天的预演吧',
      );
      await era.printAndWait([
        '怀着各种复杂的心情，',
        you.get_colored_name(),
        ' 挥下了旗子',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('第三弯道，然后……是最终直线');
      await tachyon.print_and_wait([call_25, ' 在左边？不，右边']);
      await tachyon.print_and_wait([
        call_25,
        ' 的跑法还是和以前一样……无法捉摸',
      ]);
      await tachyon.print_and_wait('但是，规律的话，还是能够抓到的');
      era.println();
      await tachyon.say_and_wait('就是这……什！？');
      era.println();
      await tachyon.print_and_wait('必须承认');
      await tachyon.print_and_wait('赛前的自己确实有些大意了');
      await tachyon.print_and_wait('作为Plan B的代替品');
      if (beat_c) {
        await tachyon.print_and_wait('除此之外还是曾经的手下败将');
      }
      await tachyon.print_and_wait('哪怕嘴上说的再好听');
      await tachyon.print_and_wait([
        '什么 ',
        coffee.get_colored_name(),
        ' 是独立的个体',
      ]);
      await tachyon.print_and_wait([
        '什么 ',
        coffee.get_colored_name(),
        ' 拥有不输给自己的才能',
      ]);
      await tachyon.print_and_wait('心中还是产生了几乎无法称之为傲慢的轻视');
      await tachyon.print_and_wait([
        '觉得伪物的',
        coffee.sex,
        '，怎么可能胜过状态绝佳的真物',
      ]);
      era.println();
      await tachyon.say_and_wait('跑法也好，速度也好……好陌生');
      era.println();
      await tachyon.print_and_wait('这也是当然');
      await tachyon.print_and_wait([
        '毕竟上一次，',
        tachyon.get_colored_name(),
        ' 仔细观察 ',
        coffee.get_colored_name(),
        ' 的跑法及速度，那已经是一年前的七月的事了',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '天真的以为，在自己进步时对手会乖乖原地踏步的理论家必须付出小瞧对手的代价',
      );
      await tachyon.print_and_wait('……对手，吗？');
      era.println();
      await tachyon.print_and_wait('不是伪物');
      await tachyon.print_and_wait('不是替代品');
      await tachyon.print_and_wait('漆黑的猎犬，对傲慢研究者的脖子露出了尖牙');
      await tachyon.print_and_wait('以疼痛，以败北来证明自己的存在');
      await tachyon.print_and_wait([
        '证明自己，是足以与',
        tachyon.sex,
        '站在同个舞台上的「对手」',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……呵呵，想要胜过对手，想要赢过对方，想要超越某人……原来如此，原来是这样的感觉吗？',
      );
      era.println();
      await tachyon.print_and_wait('好吧，承认吧');
      await tachyon.print_and_wait([
        '这次是 ',
        tachyon.get_colored_name(),
        ' 败了',
      ]);
      await tachyon.print_and_wait('觉悟不足，研究不足，认真的程度不足');
      await tachyon.print_and_wait(
        '这种情况下要是还赢了，那才真是轻视了对方的努力',
      );
      await tachyon.print_and_wait(['不如说，还要感谢 ', call_25, ' 才对']);
      await tachyon.print_and_wait([
        '要是一直放着，直到有马纪念才发现这缺少的「最后一个要素」，那可没有再来一次的机会了',
      ]);
      await tachyon.print_and_wait('所以……');
      era.println();
      await tachyon.say_and_wait('啊啊……这次是我———');
      era.printButton('「速子不要输！」', 1);
      era.printButton('「茶座加油啊！」', 2, {
        disabled: era.get('cflag:25:招募状态') !== recruit_flags.yes,
      });
      const ret = await era.input();
      era.println();
      if (ret === 1) {
        await tachyon.print_and_wait('话到了嘴边，开不了口');
        await tachyon.print_and_wait([
          '如果是纯粹的 ',
          tachyon.get_colored_name(),
          ' 的话，那么承认眼前的败北应该也不是什么难事',
        ]);
        await tachyon.print_and_wait('比赛就和实验一样，没有一定成功的道理');
        await tachyon.print_and_wait(
          '但失败了也不要紧，吸取教训，重新来过，无非就是这样',
        );
        await tachyon.print_and_wait('更何况这只是一场模拟赛而已');
        era.println();
        await tachyon.print_and_wait('说服自己放弃的理由可以有很多');
        await tachyon.print_and_wait('说服自己坚持下去的理由只有一个');
        await tachyon.print_and_wait('但这一个理由，胜过其他全部');
        era.println();
        await tachyon.say_and_wait('我想要……想要赢下来！');
        era.println();
        await tachyon.print_and_wait('连自己都感到讶异的执着');
        await tachyon.print_and_wait([
          '如果是纯粹的 ',
          tachyon.get_colored_name(),
          '，此时一定能够干脆放弃',
        ]);
        await tachyon.print_and_wait(
          '但是，那个不受外界影响，纯粹冷酷的研究者已经不在了',
        );
        era.println();
        await tachyon.print_and_wait('在接纳他人的应援，受到他人的感染时');
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' 就已经不再纯粹了',
        ]);
        await tachyon.print_and_wait([
          '现在的 ',
          tachyon.get_colored_name(),
          '，是为了研究，为了超越极限',
        ]);
        await tachyon.print_and_wait('以及……');
        await tachyon.print_and_wait('那个无论哪一场比赛都跟在自己身旁的人');
        await tachyon.print_and_wait([
          '无论何时都能以 ',
          tachyon.get_colored_name(),
          ' 的要求为优先的人',
        ]);
        era.println();
        if (love >= 50) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' 是为了自己唯一的爱人而跑的',
          ]);
        } else if (relation > 225) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            '，是为了与自己志同道合的同志而跑的',
          ]);
        } else {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            '，是为了自己唯一的实验动物而跑的',
          ]);
        }
        era.println();
        await tachyon.print_and_wait('反应是交互的，这是化学的基本定理');
        await tachyon.print_and_wait([
          '在名为 ',
          you.get_colored_actual_name(),
          ' 的豚鼠被 ',
          tachyon.get_colored_name(),
          ' 的跑法灼烧双眼的同时',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' 也在接受',
          you.sex,
          '的声援同时，被',
          you.sex,
          '所改变',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '不想在',
          you.sex,
          '面前输掉……不想辜负',
          you.sex,
          '的信任……还有……',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '不想，输给 ',
          coffee.get_colored_name(),
          '！',
        ]);
      } else {
        await tachyon.say_and_wait('————是我，输了');
        era.println();
        await tachyon.print_and_wait('但是，不是永远');
        await tachyon.print_and_wait('只有现在，只有这个瞬间承认');
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' 不如 ',
          coffee.get_colored_name(),
        ]);
        await tachyon.print_and_wait('下一次，有马纪念');
        await tachyon.print_and_wait('自己会反过身来，以挑战者的身份');
        await tachyon.print_and_wait([
          '将 ',
          coffee.get_colored_name(),
          ' 的咽喉撕碎，嚼烂',
        ]);
        era.println();
        await tachyon.print_and_wait('啊啊……不停灼烧的热意');
        await tachyon.print_and_wait('怎么也消退不下去');
      }
      era.println();
      await tachyon.print_and_wait('身为研究者的傲气？');
      await tachyon.print_and_wait('对备用计划的轻视？');
      await tachyon.print_and_wait('不对，不是这样');
      await tachyon.print_and_wait('只是想要胜利，想要彻底的超越');
      await tachyon.print_and_wait(['不想输给 ', coffee.get_colored_name()]);
      await tachyon.print_and_wait(['想要赢过 ', coffee.get_colored_name()]);
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait('一定……要赢！');
        era.drawLine();
        await era.printAndWait([tachyon.get_colored_name(), ' 赢下了模拟赛']);
        await era.printAndWait('但是……只是极微小的差距');
        era.println();
        await tachyon.say_and_wait([
          '哈啊……哈啊……呼……呼哈哈哈！怎么样？',
          call_25,
          '，最后还是我赢了吧！',
        ]);
        await coffee.say_and_wait(
          '……请不要认为，现在就是我真正的实力了……这只是模拟赛而已',
        );
        await tachyon.say_and_wait(
          '哈哈哈！愉悦，愉悦，败犬不甘心的吠声真是不错……咕呜！',
        );
        await coffee.say_and_wait('…………给我记住');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 装模作样的高笑做到一半便在 ',
          coffee.get_colored_name(),
          ' 的瞪视下忽然噤了声，仿佛被无形的手捂住了口鼻一般',
        ]);
        if (
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 75
        ) {
          await coffee.say_and_wait([
            callname_25,
            '……等到……有马的时候，要是可以为我加油的话，我会很开心的',
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 头也不回的离开了训练场，留下 ',
          you.get_colored_name(),
          ' 和 ',
          tachyon.get_colored_name(),
          '，以及虽然一直没有戏份但确实还在训练场上的',
          tachyon.uma_sex_title,
          '后辈',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          '速子前辈！真的太厉害了！',
        );
        await tachyon.say_and_wait([
          '……哼哼，这算不上什么，等到有马纪念再看吧，到时候会让你们都看见最极致的跑法！',
        ]);
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          '速子前辈～～～～！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 和后辈应付了几声后，后辈也离开了赛场',
        ]);
        await era.printAndWait('直到这时……');
        era.printButton(`「……可以了，${tachyon.couple_title}都走了」`, 1);
        await era.input();
        await tachyon.say_and_wait('哈啊～～');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 忽然仿佛提着的一口气泻下来一般靠着 ',
          you.get_colored_name(),
          ' 瘫坐在地上',
        ]);
        await era.printAndWait([
          '一般这种情况 ',
          you.get_colored_name(),
          ' 会满脸担心的关心',
          tachyon.sex,
          '是不是有什么不舒服',
        ]);
        await era.printAndWait('但现在……');
        era.printButton('「辛苦了」', 1);
        era.printButton('「很累吧」', 2);
        await era.input();
        await era.printAndWait([
          '只有 ',
          you.get_colored_name(),
          ' 能够看出，在刚才的比赛中 ',
          tachyon.get_colored_name(),
          ' 真的拼尽了全力',
        ]);
        await era.printAndWait([
          '在 ',
          coffee.get_colored_name(),
          ' 的跑法及可能性的逼迫下，拼尽了全力，好不容易，才勉强，真的是勉强，',
        ]);
        await era.printAndWait('以几乎能称之为误差的差距胜出');
        era.println();
        await tachyon.say_and_wait([
          '嗯……',
          call_25,
          '……成长到，已经超乎我的想像了啊……',
        ]);
        await tachyon.say_and_wait([
          '我却还是……用原本的态度来对待',
          tachyon.sex,
          '……',
        ]);
      } else {
        await tachyon.print_and_wait('啊啊……这种感觉，就是……');
        era.drawLine();
        await era.printAndWait([tachyon.get_colored_name(), ' 输掉了模拟赛']);
        await era.printAndWait('但是，只是以极微小的差距败北');
        era.println();
        await coffee.say_and_wait('……如果只是这点程度的话，那，我很失望');
        await coffee.say_and_wait([
          '这样的 ',
          c_call_t,
          '，对我超越朋友的目标，没有任何助益……',
        ]);
        if (love >= 75) {
          await coffee.say_and_wait([
            '搞不懂……为什么 ',
            callname_25,
            ' 会把时间浪费在你身上',
          ]);
          era.println();
          await era.printAndWait([
            coffee.get_colored_name(),
            ' 贴在 ',
            you.get_colored_name(),
            ' 身旁，亲昵的动作和毫不留情的批评让 ',
            you.get_colored_name(),
            ' 产生了一些反差感',
          ]);
          await era.printAndWait([
            '刚跑完步身上淡淡的草香，以及微微的汗味搔痒着 ',
            you.get_colored_name(),
            ' 的嗅觉',
          ]);
          await era.printAndWait([
            '微微湿润的头发和喘完气有些红润的脸庞刺激着 ',
            you.get_colored_name(),
            ' 的视觉',
          ]);
          await era.printAndWait([
            '不由自主的，',
            you.get_colored_name(),
            ' 有些按耐不住自己的手',
          ]);
          era.println();
          await coffee.say_and_wait([
            callname_25,
            '……要在这里吗？在 ',
            c_call_t,
            ' 面前……？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 看着眼前趴在草地上还在喘气的 ',
            tachyon.get_colored_name(),
            '，回过神来',
          ]);
          await coffee.say_and_wait([
            callname_25,
            '，刚刚的……如果可以的话，等一下请……',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            ' 留下暧昧的话语之后便离开了',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 狠狠瞪了 ',
            you.get_colored_name(),
            ' 一眼',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 游移视线，有些不敢看',
            tachyon.sex,
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' 离开后，',
          tachyon.get_colored_name(),
          ' 依然没从草地上起身',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 担忧的望着趴在草地上的 ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '……',
          call_25,
          ' 真的……成长到，已经超乎我的想像了啊……',
        ]);
        await tachyon.say_and_wait([
          '我却还是……用原本的态度来对待',
          tachyon.sex,
          '……',
        ]);
      }
      await tachyon.say_and_wait('……真是……羞愧啊……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '喘着气说出的话，都是今天以前难以想像 ',
        tachyon.get_colored_name(),
        ' 会说出口的',
      ]);
      if (invincible) {
        await era.printAndWait([
          '从未感受过败北的 ',
          tachyon.get_colored_name(),
          '，在那一刻真的体会到了败北的可能性',
        ]);
      } else {
        await era.printAndWait(
          '哪怕是以前输过的比赛，都没有感受过如此的压迫感',
        );
      }
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait([
          '要是……要是刚才，我真的输给了 ',
          call_25,
          ' 的话',
        ]);
        await tachyon.say_and_wait(
          '一想到那种可能性，就感到全身颤抖……我在抗拒，抗拒那样的可能性',
        );
      } else {
        await tachyon.say_and_wait([
          '要是……要是刚才，我要是赢过 ',
          call_25,
          ' 的话',
        ]);
        await tachyon.say_and_wait(
          '一想到那种可能性，就感到全身颤抖……我在渴望，渴望那样的可能性',
        );
      }
      await tachyon.say_and_wait([
        '不想输给 ',
        call_25,
        '……不甘心输给 ',
        call_25,
      ]);
      await tachyon.say_and_wait([
        '但是……心里却还在燃烧着，想要再次与 ',
        call_25,
        ' 分出胜负，想要从正面彻底击败',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '抬头看向 ',
        you.get_colored_name(),
        ' 的眼睛',
      ]);
      await era.printAndWait([
        '比起以前令人沉迷发狂的光子般的目光，现在',
        tachyon.sex,
        '的双眸充斥着感情的波动',
      ]);
      await era.printAndWait([
        '仿佛燃烧的火炬，但这旺盛的火光，却比毫无波动的光子更加明亮夺目，也更加吸引 ',
        you.get_colored_name(),
        ' 的眼神',
      ]);
      era.println();
      await tachyon.say_and_wait('这就是……劲敌的感觉吗？');
      await tachyon.say_and_wait([
        '不是不甘心输掉……而是不甘心输给『',
        coffee.get_colored_name(),
        '』',
      ]);
      await tachyon.say_and_wait('一定是这样，不然怎么解释，这样的热度……');
      await tachyon.say_and_wait([
        '……现在马上回去吧！',
        callname,
        '！这就是了！就是这个！这就是最后缺少的东西了！',
      ]);
      era.println();
      await era.printAndWait(['年关将至，接下来，就是有马纪念了']);
      return [];
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_48: (() => {
    const title = '临夜的圣诞老人';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait('寒冬的夜里');
      await era.printAndWait(['明天，就是有马纪念了']);
      await era.printAndWait([
        '必须维持良好的作息，好去支援 ',
        tachyon.get_colored_name(),
        ' 才行',
      ]);
      await era.printAndWait('所以，必须要早睡');
      await era.printAndWait('所以……');
      era.println();
      await era.printAndWait('到底是谁，这个时候还在外面嘎吱嘎吱吵人睡觉！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 愤怒的推开窗一看，看见窗外是拿着试管的 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        '哦呀，居然醒来了吗，可惜没机会尝试最新调的试剂了……',
      );
      era.printButton('「……那是什么」', 1);
      era.printButton('「……你为什么会在窗外」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '唔……某种能够无声无味将玻璃腐蚀的药，只对玻璃有效，所以可以防止像之前一样不小心滴穿地板的事，不过副作用嘛……',
        );
        await tachyon.say_and_wait(
          '它在溶解完之后会自动进入缝隙中，很难清理，所以被腐蚀掉的地方基本上除非全部拆掉否则应该都再也装不了玻璃了',
        );
        era.println();
        await era.printAndWait('好恐怖！？');
      } else {
        await tachyon.say_and_wait(
          '哼哼，惊喜哦……比起这个，不先放我进去吗？外面有点冷啊',
        );
        era.println();
        await era.printAndWait('所以说为什么要爬窗啊！！');
      }
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' 径直进了房间']);
      await era.printAndWait([you.get_colored_name(), ' 有些戒备的看着对方']);
      era.println();
      await era.printAndWait([
        '这也不是 ',
        tachyon.get_colored_name(),
        ' 第一次闯入私宅了，每次都是以无法忍耐到早上才做实验为由来给自己下药',
      ]);
      await era.printAndWait([
        '平常也就算了，有马前一天的重要时光说什么也不能再让',
        tachyon.sex,
        '为所欲为了',
      ]);
      era.printButton('「明天就是有马纪念了」', 1);
      era.printButton('「快回去休息吧」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……嗯哼，明天就是有马纪念了，那么……今天呢？',
      ]);
      era.printButton('「今天？」', 1);
      era.printButton('「……有马纪念前一天？」', 2);
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('现场忽然陷入沉默');
      await era.printAndWait([
        '仿佛连 ',
        tachyon.get_colored_name(),
        ' 都无语了一般',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '，不知道你今天有没有注意到，街上的面包坊最近忽然开始卖起木头蛋糕了',
      ]);
      era.printButton('「是因为最近流行吗？」', 1);
      await era.input();
      await tachyon.say_and_wait('…………肯O基开始推出炸鸡套餐了？');
      era.printButton('「O德基除了炸鸡还有啥能当套餐的吗？」', 1);
      await era.input();
      await tachyon.say_and_wait('……………学生会长穿的布偶服？');
      era.printButton(
        '「肯定又是什么冷笑话的梗吧，我才不会上当，装成圣诞树什么…………欸？」',
        1,
      );
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('房间内又陷入一阵沉默');
      era.printButton('「难道说……今天……是，圣诞节？」', 1);
      await era.input();
      await era.printAndWait('哈哈哈');
      await era.printAndWait(['室内响起了', tachyon.sex, '银铃般的笑声']);
      await era.printAndWait(
        '如果是以这声音作为铃铛的话，或许自己真的会相信圣诞老人的到来吧',
      );
      era.println();
      await tachyon.say_and_wait([
        '没错，',
        callname,
        '！今天就是圣诞节！那么……有没有什么想要的圣诞礼物呢？今天，就让本圣诞老人大方的为你实现吧！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 掏出了先前不知道藏在哪里的圣诞帽，斜斜戴在耳朵上',
      ]);
      await era.printAndWait(
        '张开双臂，摆出了往常的姿势，然而口中说出的却不是「开始实验吧」，而是「Merry Christmas」',
      );
      era.printButton('「Merry Christmas」', 1);
      era.printButton('「圣诞快乐」', 2);
      await era.input();
      await tachyon.say_and_wait('好啦好啦，总之快说，想要什么圣诞礼物！');
      era.printButton('「速子的吻」', 1);
      era.printButton('「有马胜利」', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        await era.printAndWait('可能是因为圣诞节的气氛吧');
        await era.printAndWait([
          '一不小心，对 ',
          tachyon.get_colored_name(),
          ' 做出了明显越过师生关系的发言',
        ]);
        era.println();
        if (love >= 75) {
          await tachyon.say_and_wait('欸………');
          era.println();
          await era.printAndWait('果……果然很奇怪吧');
          await era.printAndWait('还是换个');
          era.println();
          await tachyon.say_and_wait(
            '不……只是，平常都在做的事，拿来当圣诞愿望什么的，也太掉价了',
          );
          await tachyon.say_and_wait(
            '这可是难得的圣诞节啊……不换个特殊点的愿望吗？',
          );
          await tachyon.say_and_wait('比如……');
          era.println();
          await era.printAndWait('慢慢掀开的校服裙，底下是深紫的蕾丝');
          await era.printAndWait('暗示性的眼神，充满了情欲和渴望');
          await era.printAndWait('但是……');
          era.printButton('「明天……有马……」', 1);
          await era.input();
          await era.printAndWait('只能说出关键词来的原因');
          await era.printAndWait('是因为理智也只能支撑自己说出这些单词来了');
          await era.printAndWait('心里半是害怕半是期待');
          await era.printAndWait([
            '害怕 ',
            tachyon.get_colored_name(),
            ' 不听劝告',
          ]);
          await era.printAndWait([
            '期待 ',
            tachyon.get_colored_name(),
            ' 不听劝告',
          ]);
          era.println();
          await tachyon.say_and_wait('……算了');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 停下了手上的动作',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 的心中半是庆幸半是遗憾',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '毕竟仔细想想，等到明天，做为实验成功的庆祝方式，不也挺不错的吗',
          );
          era.println();
          await era.printAndWait('明天……');
          await era.printAndWait('看来，需要期待的事又多一件了啊');
        } else if (love >= 50) {
          await tachyon.say_and_wait('可以哦');
          era.println();
          await era.printAndWait('欸……？');
          await era.printAndWait([
            '没等 ',
            you.get_colored_name(),
            ' 反应过来，',
            tachyon.get_colored_name(),
            ' 便主动靠上前',
          ]);
          await era.printAndWait('等等，什么情况');
          era.println();
          await tachyon.say_and_wait('咕啾……啾……啾噜……');
          era.println();
          await era.printAndWait('长达数分钟的长吻');
          await era.printAndWait(
            '短暂而又漫长的时间里，寂静的圣诞夜中只有唾液交换的声音响起',
          );
          if (!era.get('exp:0:接吻次数')) {
            await era.printAndWait('初吻就是法式深吻');
            await era.printAndWait(
              '这种奇幻的梦境，或许也只有圣诞之夜会发生吧',
            );
          }
          era.println();
          await tachyon.say_and_wait('这个圣诞礼物，喜欢吗？');
          era.println();
          await era.printAndWait([
            '月下的',
            tachyon.sex,
            '，眼神带着妖豔且危险的色彩',
          ]);
          era.println();
          await tachyon.say_and_wait('放心吧……我还是知道轻重缓急的');
          era.println();
          await era.printAndWait([
            '再怎么说，明天是有马纪念的情况下还做那种事绝对是对对手和自己的最大不敬',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '所以……只是稍微，做个记号，等到有马结束之后，呵呵……仔细想想，到时候要怎么回应我吧',
          ]);
        } else if (relation > 225) {
          await tachyon.say_and_wait('嗯？真是奇怪的要求啊……只有这样吗？');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 很正常的在 ',
            you.get_colored_name(),
            ' 的脸颊上亲了一下',
          ]);
          era.println();
          await era.printAndWait('……好像，没什么感觉？');
          era.println();
          await tachyon.say_and_wait(
            '真是的，难得的圣诞愿望，浪费在这种事情上，真不理解你……',
          );
          era.println();
          await era.printAndWait(
            '虽然感觉还好，但被这么一说也有种自己似乎亏了的感觉',
          );
          await era.printAndWait('这样的话……');
          era.println();
          await tachyon.say_and_wait([
            '！……喂，喂喂，',
            callname,
            '……你在做什么',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 反过来，搂住了 ',
            tachyon.get_colored_name(),
            ' 的腰',
          ]);
          await era.printAndWait('来而不往，非礼也……是这么说的吗？随便吧');
          await era.printAndWait(
            '难得的圣诞节，由自己掌握主导权，不也是一次有趣的经历吗？',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' 轻轻的，在 ',
            tachyon.get_colored_name(),
            ' 的额头上啄吻了一下',
          ]);
          era.printButton('「圣诞快乐」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '…………看在今天圣诞节的份上，就不跟你计较了……之后给我记住',
          );
          era.printButton('「虽然这么说，但速子的脸却很红……」', 1);
          await era.input();
          await tachyon.say_and_wait('闭嘴！');
        } else if (relation > 0) {
          await tachyon.say_and_wait('哦？真的想要吗？');
          era.println();
          await era.printAndWait('————欸？');
          era.println();
          await tachyon.say_and_wait(
            '听说，似乎是有这么种东西，叫什么誓约之吻的',
          );
          era.println();
          await era.printAndWait('欸欸———！？');
          era.println();
          await tachyon.say_and_wait('这样的话，来吧');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 说完后，忽然靠近了 ',
            you.get_colored_name(),
          ]);
          era.println();
          await tachyon.say_and_wait('就当成，节日的大放送……');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '轻轻的，贴近 ',
            you.get_colored_name(),
            ' 的身体',
          ]);
          await era.printAndWait('温柔的———在手背，轻啄了一下');
          era.println();
          await tachyon.say_and_wait('好了');
          era.println();
          await era.printAndWait('…………欸？');
          era.println();
          await tachyon.say_and_wait([
            '顺带一提，誓约的内容是从今以后你必须永远作为我的 ',
            callname,
            ' 接受实验哦？',
          ]);
          era.println();
          await era.printAndWait('等一下！？');
          await era.printAndWait(
            '一个手背的社交吻换一辈子是不是两边的价值差有点大了！？',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 没有回应 ',
            you.get_colored_name(),
            ' 的抱怨，只是咯咯笑着',
          ]);
          await era.printAndWait('也不知道到底是认真的还是说着玩的');
        } else {
          await tachyon.say_and_wait(
            '喂喂，哪怕是圣诞节，这种玩笑也开的过头了吧',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 用危险的眼神警告 ',
            you.get_colored_name(),
          ]);
          await era.printAndWait([
            '然而这种熟悉的冷漠回复反而让 ',
            you.get_colored_name(),
            ' 安心了下来',
          ]);
        }
      } else {
        await era.printAndWait(['大概是因为明天就是有马纪念']);
        await era.printAndWait([
          '导致 ',
          you.get_colored_name(),
          ' 脑子一热，不由得将可以被称之为KY（搞不懂气氛）的话说了出口',
        ]);
        era.printButton('「有马……」', 1);
        await era.input();
        await tachyon.say_and_wait('嘘');
        era.println();
        await era.printAndWait([
          '话说到一半便被 ',
          tachyon.get_colored_name(),
          ' 的食指按住',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '今天是奇迹及魔幻的夜晚，那些现实的话，等到明天再说，好吗？',
        );
        era.println();
        await era.printAndWait(['月下的', tachyon.sex, '，如同真正的天使一般']);
        era.printButton('「没想到速子也有这么浪漫的一面啊」', 1);
        await era.input();
        await tachyon.say_and_wait(
          '哦？哈哈哈！这么说来，不是有句话吗？『科学家才是世界上最大的浪漫主义者』啊',
        );
        era.println();
        await era.printAndWait('如果不是相信那些浪漫的，感性的东西');
        await era.printAndWait(
          '是不会将自己的人生都投入在枯燥重复的研究中的吧',
        );
        await era.printAndWait([
          '相信着',
          tachyon.uma_sex_title,
          '的可能性的',
          tachyon.sex,
          '，相信着 ',
          tachyon.get_colored_name(),
          ' 的可能性的 ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('不就是最天真的两名梦想家吗？');
        era.println();
        await tachyon.say_and_wait('那么，还有什么想要的其他圣诞礼物吗？');
        era.printButton('「不用了」', 1);
        await era.input();
        await era.printAndWait('这场梦，就是最棒的礼物了');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 好似理解了 ',
          you.get_colored_name(),
          ' 的意思般，点了点头仿佛在认同 ',
          you.get_colored_name(),
          ' 的想法',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('那么……你想要的礼物送完了');
        era.println();
        await era.printAndWait('嗯……？');
        await era.printAndWait([
          '在「礼物」环节结束后，',
          tachyon.get_colored_name(),
          ' 却好像还没玩够一般，又接着开口说道',
        ]);
        era.println();
        await tachyon.say_and_wait('接下来，该轮到圣诞老人想送的礼物了');
        era.println();
        await era.printAndWait([
          '听见这句话，',
          you.get_colored_name(),
          ' 立马绷紧了神经',
        ]);
        await era.printAndWait('果然……还是逃不掉吗？');
        era.println();
        await tachyon.say_and_wait([callname, '，这几天，你也应该累了吧']);
        era.println();
        await era.printAndWait([
          '伴随着为 ',
          you.get_colored_name(),
          ' 着想的起手式，',
          tachyon.get_colored_name(),
          ' 一步一步靠近了床边的 ',
          you.get_colored_name(),
        ]);
        await era.printAndWait([
          '渐渐的，将 ',
          you.get_colored_name(),
          ' 逼退到床角',
        ]);
        await era.printAndWait('这次的会是什么呢？发光？变色？变形？');
        era.println();
        await era.printAndWait('与恐惧一同爬上床边的红眼阴影不断迫近');
        await era.printAndWait([
          '最后，在距离接近于零时，',
          tachyon.sex,
          '展露出了',
          tachyon.sex,
          '的真实目的',
        ]);
        era.println();
        await tachyon.say_and_wait('————好乖，好乖');
        era.println();
        await era.printAndWait('垫在后脑勺下的是丝质的触感');
        await era.printAndWait(['眼前是', tachyon.sex, '豔丽的脸庞']);
        if (tachyon.sex_code - 1) {
          await era.printAndWait('——原本想这么说，但却被两座山脉给挡住了视线');
        }
        await era.printAndWait('这是……膝枕？');
        era.println();
        await tachyon.say_and_wait(
          '真是的，你以为会是什么？不是都说了吗？今天晚上的我，只是名普通的圣诞老人而已，不在此之上，也不在此之下',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' 愣愣的听着，',
          tachyon.sex,
          '轻柔的仿佛在唱童谣一般的话语',
        ]);
        era.println();
        await tachyon.say_and_wait('辛苦了———还有，谢谢你');
        era.println();
        await era.printAndWait([
          '今天晚上之前，一直都在配合着负责',
          tachyon.uma_sex_title,
          '的胡闹',
        ]);
        await era.printAndWait(
          '明天早上之后，还要继续面对有马纪念以及在那之后的URA总决赛',
        );
        await era.printAndWait('所以至少现在，这个夜晚');
        await era.printAndWait('祝，一夜好梦');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_a: (() => {
    const title = '最终实验准备完成';
    /**
     * 资深年有马纪念赛前，Plan A 限定
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait('那天到来时，一切显得意外的平静');
      await era.printAndWait([
        '在前一天晚上舒服的安眠后，今天格外有精神的 ',
        you.get_colored_name(),
        ' 一早便起床给 ',
        tachyon.get_colored_name(),
        ' 泡好了红茶',
      ]);
      await era.printAndWait('阳光洒在室内，灰尘在光影下舞动');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 没有在做实验，只是平常的阅读着早报',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 也没有发出光芒，只是安静的品味着红茶',
      ]);
      await era.printAndWait('两人在实验室里享受着暴风雨前最后的宁静');
      era.println();
      await you.say_as_passer_by_and_wait('记者A', [
        '请问速子',
        tachyon.adult_sex_title,
        '，这次的有马纪念有没有特别关注的对手呢',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……嗯，前几天刚出现了，',
        coffee.get_colored_name(),
        '，',
        call_25,
        '……应该，是能够被称为劲敌的存在吧',
      ]);
      await you.say_as_passer_by_and_wait('记者A', '应该……？');
      await tachyon.say_and_wait('嗯，差不多就是这么回事');
      era.println();
      await era.printAndWait([
        '踏上赛场前的时光，',
        you.get_colored_name(),
        ' 忽然想起了前几天采访时 ',
        tachyon.get_colored_name(),
        ' 说的话',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '，你有听过物理学的两大乌云吗？']);
      await tachyon.say_and_wait('没听过？没事没事，只是个故事的引子罢了');
      await tachyon.say_and_wait(
        '据说，开尔文爵士曾经说过，物理学的大厦已经建成，只是在天空中还有两朵小小的乌云',
      );
      await tachyon.say_and_wait(
        '然而，谁也没有想到，这两朵小小的乌云，却引出了量子力学和相对论两大近代物理巨头……',
      );
      await tachyon.say_and_wait([
        '当然，这个故事八成是穿凿附会的，但是……我的意思是，',
        call_25,
        ' 就是那朵乌云',
      ]);
      await tachyon.say_and_wait([
        '在我的理论中，',
        call_25,
        ' 是最后剩下的那块拼图……但在这之后呢？',
      ]);
      await tachyon.say_and_wait(
        '这朵乌云，能够给我带来相对论一般的冲击吗？让我……见识看看吧',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_a: (() => {
    const title = '超越极限';
    /**
     * 资深年有马纪念结束，Plan A 限定
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {boolean} coffee_win_kiku_sho 曼城茶座是否赢取菊花赏
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_win_kiku_sho,
    ) => {
      await tachyon.say_and_wait('哈啊……哈啊……');
      era.println();
      await tachyon.print_and_wait('脚步沉重，迟钝');
      await tachyon.print_and_wait('原因……很清楚');
      await tachyon.print_and_wait('来自身后的猎犬散发出了强烈的压迫感');
      era.println();
      await tachyon.print_and_wait([
        '在 ',
        call_25,
        ' 奔跑时，无论是前后的',
        tachyon.uma_sex_title,
        '都会感受到的极强压迫力',
      ]);
      await tachyon.print_and_wait([
        '和',
        tachyon.sex,
        '的朋友在内，都是自己的科学无法解释的东西',
      ]);
      era.println();
      await tachyon.say_and_wait('……来了！');
      era.println();
      await tachyon.print_and_wait([coffee.get_colored_name(), ' 追在身后']);
      await tachyon.print_and_wait([
        '后颈汗毛竖立，仿佛能够感受到',
        tachyon.sex,
        '的鼻息一般',
      ]);
      await tachyon.print_and_wait('就是现在，就在这里');
      era.println();
      await tachyon.print_and_wait([
        '如果说 ',
        tachyon.get_colored_name(),
        ' 拥有的是超越次元的速度',
      ]);
      await tachyon.print_and_wait([
        '那么 ',
        coffee.get_colored_name(),
        ' 就是跨越次元的弔诡',
      ]);
      await tachyon.print_and_wait(
        '不知会从何出现，仿佛从镜中世界穿越而来的异形身姿',
      );
      era.println();
      await tachyon.print_and_wait([
        '那漆黑的幻影，瞬间超越了 ',
        tachyon.get_colored_name(),
      ]);
      era.drawLine();
      await coffee.say_and_wait('……抱歉');
      era.println();
      await coffee.print_and_wait('为了实现自己的梦想，而将他人的梦想踢落');
      await coffee.print_and_wait('更何况，对方还是……');
      await coffee.print_and_wait('是什么呢？');
      await coffee.print_and_wait(
        '朋友？宿敌？天生相克的存在？研究者和实验品？',
      );
      await coffee.print_and_wait([
        '将最后一个选项甩出脑袋后，',
        coffee.get_colored_name(),
        ' 继续向前奔驰',
      ]);
      await coffee.print_and_wait(
        '在通往梦想的道路上，即便是再深的感情，顶多也就只能化作这样一句抱歉',
      );
      era.println();
      await coffee.print_and_wait(
        '只要跨越此处，接下来，下个目标，就是「那个身影」……！',
      );
      era.println();
      await coffee.print_and_wait(['但是，', coffee.sex, '漏判了一个可能性']);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '，还留有余力的可能性',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '，一开始就没有用尽全力的可能性',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '，在等待的就是这个时机的可能性',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        '前方的',
        tachyon.uma_sex_title,
        '是……跑在最前头的逃',
        tachyon.uma_sex_title,
        '，以及 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        '最适合 ',
        tachyon.get_colored_name(),
        ' 的位置，仿佛在实验室里一般舒适的位置',
      ]);
      await tachyon.print_and_wait('就是现在，就在这里');
      era.println();
      await tachyon.print_and_wait('时间停滞了，世界改变了');
      era.println();
      await tachyon.print_and_wait('眼前是无穷无尽无垠的黑色空间');
      await tachyon.print_and_wait('充满了算式的数理公式');
      era.println();
      await tachyon.print_and_wait([
        '想要超越 ',
        coffee.get_colored_name(),
        '——变量宿敌已添加',
      ]);
      await tachyon.print_and_wait('最适合自己的环境——变量跑位已添加');
      await tachyon.print_and_wait('锻炼及天赋的结合——变量速度已添加');
      await tachyon.print_and_wait('然后是……');
      era.println();
      await tachyon.print_and_wait('从身后，感觉到了一丝暖意及红茶的香味');
      await tachyon.print_and_wait([
        '但 ',
        tachyon.get_colored_name(),
        ' 没有回头',
      ]);
      await tachyon.print_and_wait('不需要回头，因为那是对对方的不信任');
      await tachyon.print_and_wait([
        '看着前方，然后……等待对方，相信',
        you.sex,
        '必然会追上自己，与自己同行',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '冒着热气的红茶被摆放在 ',
        tachyon.get_colored_name(),
        ' 的面前',
      ]);
      await tachyon.print_and_wait('宛如日常的实验室一般');
      await tachyon.print_and_wait('一切都是如此理所当然');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '会理所当然的陪伴在 ',
        tachyon.get_colored_name(),
        ' 身旁',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' 理所当然的会解决面前一切难题',
      ]);
      era.println();
      await tachyon.say_and_wait('最后的解就是这个……');
      era.println();
      await tachyon.print_and_wait('在宛如黑板的空间中画下U=MA2的公式');
      await tachyon.print_and_wait('瞬间，黑暗的空间中，所有算式发出光芒');
      await tachyon.print_and_wait([
        '这就是，',
        tachyon.get_colored_name(),
        ' 的最终解',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        ' 追上来了！',
        tachyon.get_colored_name(),
        ' 追上来了！',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        '最前面的逃',
        tachyon.uma_sex_title,
        '已经后继无力，最后的激战果然还是这两人！',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！几乎并排冲入最终直线！',
      ]);
      if (coffee_win_kiku_sho) {
        await you.say_as_passer_by_and_wait('解说', [
          '『最强的',
          tachyon.uma_sex_title,
          '』，与『最快的',
          tachyon.uma_sex_title,
          '』，要在这里决出胜负！',
        ]);
      }
      await tachyon.print_and_wait('啊啊');
      await tachyon.print_and_wait('明明是在比赛');
      await tachyon.print_and_wait('却感觉……如此畅快');
      era.println();
      await tachyon.print_and_wait('与自己认可的劲敌');
      await tachyon.print_and_wait('发挥出自己的全力');
      await tachyon.print_and_wait('但是……还不够');
      era.printButton('「超越极限吧！」', 1);
      await era.input();
      await tachyon.print_and_wait('随着接受过的几次采访');
      await tachyon.print_and_wait([
        '超越极限似乎已经成为 ',
        tachyon.get_colored_name(),
        ' 的粉丝口中，超越「',
        tachyon.get_colored_name(),
        ' 最强」、「',
        tachyon.get_colored_name(),
        ' 必胜」等的口号了',
      ]);
      await tachyon.print_and_wait([
        '但即便是如此杂乱的助威声，与',
        you.sex,
        '的话语相比，听起来都是那么模糊',
      ]);
      era.println();
      await tachyon.print_and_wait('嗯，没错');
      await tachyon.print_and_wait('就是现在');
      era.println();
      await tachyon.print_and_wait('比起领域更上一层的极限');
      await tachyon.print_and_wait('超越极限吧');
      await tachyon.print_and_wait(['超越', tachyon.uma_sex_title, '的极限']);
      await tachyon.print_and_wait([
        '超越 ',
        tachyon.get_colored_name(),
        ' 的极限',
      ]);
      await tachyon.print_and_wait('超越一切，然后，在这之后');
      await tachyon.print_and_wait('朝着更加遥远的彼方—————伸手');
      await you.say_as_passer_by_and_wait('解说', [
        '冲————线！破，破纪录了！年度的总决赛！是 ',
        tachyon.get_colored_name(),
        '！打破纪录，在今日称霸中山赛场的是 ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait('结束了');
      await tachyon.print_and_wait('结束……了？');
      era.println();
      await tachyon.print_and_wait('应该是，结束了吧');
      await tachyon.print_and_wait('毕竟揭示版上都排出成绩了');
      await tachyon.print_and_wait(
        '但是，身体的热意却丝毫不像比赛已经结束一样',
      );
      await tachyon.print_and_wait('肾上腺素仿佛沸腾一般还在源源不绝产出');
      era.println();
      await you.say_as_passer_by_and_wait('观众A', '做到了啊！');
      era.println();
      await tachyon.print_and_wait(
        '忽然的喊声，使自己在吓了一跳的同时回归现实',
      );
      await you.say_as_passer_by_and_wait('观众B', '真的，真的打破记录了啊！');
      await you.say_as_passer_by_and_wait('观众C', '好样的！');
      era.println();
      await tachyon.print_and_wait('整个会场欢声雷动');
      await tachyon.print_and_wait('……简直，比胜利的自己还要兴奋啊');
      era.println();
      await tachyon.print_and_wait('应该，要做出回应的吧');
      await tachyon.print_and_wait('不管怎么说，应该要做出社会性的表达');
      await tachyon.print_and_wait('……不，这只是纯粹，对支援者的感谢');
      await tachyon.print_and_wait('应该要表现出来才对');
      await tachyon.print_and_wait('但是……');
      era.println();
      await tachyon.print_and_wait('挣扎了半天');
      await tachyon.print_and_wait('也只能勉强抬手');
      await tachyon.print_and_wait('仿佛整个人依然活在梦里一般');
      era.println();
      await tachyon.print_and_wait('只是');
      await tachyon.print_and_wait('光是这样，便足以掀起巨浪般的欢声了');
      era.drawLine();
      era.printButton('「速子……那就是……！」', 1);
      await era.input();
      await era.printAndWait('不敢做出定论');
      await era.printAndWait('没有人会敢对自己从没见过的东西做出定论');
      await era.printAndWait(
        '如果为真的话，那么，这将是从未有人抵达过的领域————',
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton('「……速子？」', 1);
      await era.input();
      await era.printAndWait('仿佛还没从梦中惊醒一般');
      await era.printAndWait([
        '虽然很难描述，但眼前的 ',
        tachyon.get_colored_name(),
        '，就好像在梦游一般',
      ]);
      await era.printAndWait(['这种情况下，应该唤醒', tachyon.sex, '的吧？']);
      await era.printAndWait('但是，要怎么做呢？');
      await era.printAndWait(
        '毕竟连自己都忍不住怀疑，眼前的这些只是一场梦而已',
      );
      await era.printAndWait(
        '如此漫长的三年，在今天终于以最完美的实验成果画下尾声',
      );
      era.println();
      await tachyon.say_and_wait('…………呵呵');
      await tachyon.say_and_wait('哈哈哈哈哈哈哈！');
      era.println();
      await era.printAndWait('如果说前一秒发出的笑声是让人欣慰总算回过神来');
      await era.printAndWait(
        '那么，后一秒的狂笑便是使人怀疑是否是脑袋出问题了',
      );
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 担忧的想上前检查时……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '你看到了吗？……你看到了吧！',
        callname,
        '！',
      ]);
      await tachyon.say_and_wait(
        '这就是，实验的成果……我带你看见了！这就是，极限之后的世界！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起去年十一月时 ',
        tachyon.get_colored_name(),
        ' 说过的话',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        '作为报酬，我会让你看见更加宽广的世界',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '真的做到了']);
      await era.printAndWait('每一场比赛，都在距离目标更近一步');
      await era.printAndWait('然后现在');
      await era.printAndWait('两人真的看见了更宽广的，极限后的世界');
      era.printButton('「嗯……我们真的，做到了」', 1);
      await era.input();
      await era.printAndWait([
        '这是 ',
        you.get_colored_name(),
        ' 第一次看见，世界上竟然还有比 ',
        tachyon.get_colored_name(),
        ' 的跑法更加闪耀的东西',
      ]);
      await era.printAndWait([
        '那就是，此时 ',
        tachyon.get_colored_name(),
        ' 脸上露出的笑容',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_a: (() => {
    const title = '庆功';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {PrintedSpan} call_25 爱丽速子对曼城茶座的称呼
     * @param {PrintedSpan} callname_25 曼城茶座对玩家的称呼
     * @param {PrintedSpan} c_call_t 曼城茶座对爱丽速子的称呼
     * @param {number} relation 爱丽速子对玩家的好感度
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
    ) => {
      await era.printAndWait('有马后隔天');
      await era.printAndWait([
        '或许是目的达到使 ',
        you.get_colored_name(),
        ' 放下心来，这三年以来，',
        you.get_colored_name(),
        ' 第一次迟到了',
      ]);
      await era.printAndWait('不过，毕竟两人的目标已经实现');
      await era.printAndWait('接下来就轻松的迎接URA总决赛吧');
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait('你在搞什么？这么慢，实验都开始多久了');
        era.println();
        await era.printAndWait([
          '当 ',
          you.get_colored_name(),
          ' 来到 ',
          tachyon.get_colored_name(),
          ' 的实验室时，看见的却是一如既往专注于研究的 ',
          tachyon.get_colored_name(),
        ]);
        era.println();
        await tachyon.say_and_wait(
          '昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！',
        );
        await tachyon.say_and_wait(
          '只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！',
        );
        await tachyon.say_and_wait('快点换好实验服过来帮忙！');
        await coffee.say_and_wait([c_call_t, '……，你好吵']);
        await tachyon.say_and_wait([
          '哦呀哦呀，这不是昨天有马纪念输给我的 ',
          call_25,
          ' 吗？',
        ]);
        await tachyon.say_and_wait(
          '有什么想说的我洗耳恭听，毕竟接受败者的狂吠也是身为胜利者的————',
        );
        await coffee.say_and_wait('啧……');
        await tachyon.say_and_wait('哇啊！我的实验资料————烧………没烧起来？');
        era.println();
        await era.printAndWait([
          '瞬间，',
          tachyon.get_colored_name(),
          ' 的实验资料燃烧了起来，但正当 ',
          tachyon.get_colored_name(),
          ' 急急忙忙冲上去想抢救资料时，火焰忽然消失了',
        ]);
        era.println();
        await coffee.say_and_wait([
          '……只有这次姑且承认……昨天 ',
          c_call_t,
          ' 确实，跑的不错……',
        ]);
        await coffee.say_and_wait(
          '虽然很不甘心……但……一不小心把你和『朋友』重叠了……',
        );
        await tachyon.say_and_wait([
          '朋友？哦？这个……很有意思啊！',
          call_25,
          '，希望你还请务必仔细说说！',
        ]);
        await tachyon.say_and_wait('吵死了……走开……');
        era.println();
        await era.printAndWait([
          '看着吵闹的两人，',
          you.get_colored_name(),
          ' 换上了实验服，苦笑着加入这今后也会继续下去的日常',
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          '然而，当 ',
          you.get_colored_name(),
          ' 到了实验室门前',
        ]);
        await era.printAndWait([you.get_colored_name(), ' 听见了里面的对话声']);
        era.println();
        await tachyon.say_and_wait([
          call_25,
          '……怎么办……',
          callname,
          ' ',
          you.sex,
          '该不会，真的不来了吧……',
        ]);
        await coffee.say_and_wait('……关我什么事');
        await tachyon.say_and_wait([
          '昨天我说了目标已经达成……',
          you.sex,
          '会不会因为这样就不来了……',
        ]);
        await tachyon.say_and_wait([
          '说到底会不会其实什么三年以来累积的羁绊都是我自己的妄想，说不定',
          you.sex,
          '从头到尾都没有……都没有……',
        ]);
        await coffee.say_and_wait('……如果真的是那样的话，你要怎么办？');
        await tachyon.say_and_wait([
          '……果然，那就得用药让',
          you.sex,
          '离不开我了啊，仔细想想这不是很不公平吗？',
        ]);
        await tachyon.say_and_wait([
          '只有我离不开',
          you.sex,
          '，',
          you.sex,
          '离了我却一样能活的好好的，还是得尽快弄出点成瘾性高的药让',
          you.sex,
          '从此再也离不开我……',
        ]);
        await tachyon.say_and_wait(
          '或者像小说里面那种蛊毒……要是不定时服用我做的解药就会发作……',
        );
        await coffee.say_and_wait('……真重啊');
        const coffee_check =
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            '但警告你，不准对我的 ',
            callname_25,
            ' 做那种事',
          ]);
        }
        era.println();
        await era.printAndWait([
          '听到这有些背脊发凉的 ',
          you.get_colored_name(),
          ' 连忙推了门进去',
        ]);

        era.printButton('「对不起！我睡过头了！」', 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          '！………你在搞什么？这么慢，实验都开始多久了！',
        ]);
        era.println();
        await era.printAndWait([
          '虽然板着脸装作严厉的样子，但 ',
          tachyon.get_colored_name(),
          ' 身后那疯狂摇摆的尾巴却完全按耐不住',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '似乎也注意到了般努力的压了几下，但还是压不住，于是转过头来，好似什么也没发生的继续念叨',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '昨天只是在比赛中证明了超越极限的可能性，接下来的目标是常态化！',
        );
        await tachyon.say_and_wait(
          '只是一次突破那可能是意外，两次可能是巧合，只有能够让它常态化维持那才叫真正的突破啊！',
        );
        era.println();
        await tachyon.say_and_wait(
          '……所以说，快点换好实验服过来帮忙！……好吗？',
        );
        era.println();
        await era.printAndWait([
          '看着想要装作严厉的虚张声势却又不安的望着 ',
          you.get_colored_name(),
          ' 的 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 忍不住上前，抱住了',
          tachyon.sex,
        ]);
        era.println();
        await tachyon.say_and_wait(['！', callname, '……！']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 与',
          tachyon.sex,
          '的实验动物，在三年后，还将迎来第二个，第三个三年，直到永久……',
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait([
            '……别得寸进尺了，把 ',
            callname_25,
            ' 还我',
          ]);
          era.println();
          await era.printAndWait([
            '在两人的争夺下，',
            you.get_colored_name(),
            ' 苦笑着加入了吵吵闹闹的日常',
          ]);
        } else {
          await coffee.say_and_wait('……你们可以不要在我面前秀恩爱吗？');
          era.println();
          await era.printAndWait(
            '却忘记了，房间里另一位正在忍受狗粮袭击的同房者',
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_a: (() => {
    const title = '薛定鄂的超光速粒子';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     * @param {number} love 爱丽速子对玩家的爱慕值
     */
    const f = async (tachyon, coffee, you, callname, love) => {
      await tachyon.say_and_wait('对了，这么说起来，还有这个东西啊……');
      await tachyon.say_and_wait([
        '感觉浪费了也不好，怎么样，',
        callname,
        '？要一起去吗？',
      ]);
      era.println();
      await era.printAndWait('在偶然整理实验室时');
      await era.printAndWait(['你们发现了被藏在某个角落的信封袋']);
      if (love >= 75) {
        await era.printAndWait('嗯……？');
        await era.printAndWait('不知道为什么，总觉得违和感十分重');
        await era.printAndWait([
          you.get_colored_name(),
          ' 仔细观察了一下，随即发现端倪',
        ]);
        await era.printAndWait(
          '明明是大扫除时被发现的，信封看起来却完全没有任何褶皱痕迹，甚至感觉还被人好好的收藏着',
        );
        await era.printAndWait([
          '联想到是 ',
          tachyon.get_colored_name(),
          '「找」出来的，',
          you.get_colored_name(),
          ' 大致猜到了真相',
        ]);
        era.println();
        await tachyon.say_and_wait(['嗯？', callname, '？怎么了吗？']);
        era.println();
        await era.printAndWait('……还是别说出来吧');
        await era.printAndWait([
          '不然，',
          tachyon.get_colored_name(),
          ' 恼羞成怒事小，问题在',
          tachyon.sex,
          '恼羞成怒之后晚上自己绝对不会好受',
        ]);
      }
      era.println();
      await era.printAndWait([
        '你们来到的温泉旅店，就商店街的活动标准来看，算是相当豪华的场所',
      ]);
      await era.printAndWait('独间的温泉池，日式的标准客房，甚至还有怀石料理');
      await era.printAndWait(
        '不如说……一般商店街的抽奖真的会准备如此豪华的大奖吗？',
      );
      await era.printAndWait([
        '难不成……其实一开始就是有人安排过的，只是借这个机会提供给',
        tachyon.uma_sex_title,
        '和训练员？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 坐在温泉池内，胡思乱想着一些无边无际的事情',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？我进去了哦～～']);
      era.println();
      await era.printAndWait([
        '忽然，负责',
        tachyon.uma_sex_title,
        '在门外的呼喊将 ',
        you.get_colored_name(),
        ' 的神智唤回',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 下意识的回答了请便后才想起现在自己正在泡汤',
      ]);
      await era.printAndWait('现在要遮挡自己已经来不及了—————');
      await era.printAndWait([
        you.get_colored_name(),
        ' 连忙将身体完全缩进了温泉中，希望能靠着温泉的雾气稍微遮蔽一些不该被看到的部位',
      ]);
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.say_and_wait([
          callname,
          '—————怎么这么害羞的缩着身体呢？明明都已经看过那么多次了',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '—————怎么这么害羞的缩着身体呢？明明实验的时候都全看光过了',
        ]);
      }
      era.println();
      await era.printAndWait([
        '虽然这么说，但 ',
        tachyon.get_colored_name(),
        ' 的语气其实也有些拘谨',
      ]);
      await era.printAndWait([
        '与光着身子的 ',
        you.get_colored_name(),
        ' 不同，',
        tachyon.get_colored_name(),
        ' 的身上围了一层浴巾',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '自顾自的进了温泉，朝着 ',
        you.get_colored_name(),
        ' 靠了过来',
      ]);
      await era.printAndWait([
        '随后坐在 ',
        you.get_colored_name(),
        ' 的身旁，一脸放松的依偎着 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait('总算……URA也结束了啊');
      await tachyon.say_and_wait('偶尔，像这样放松一下也不错呢');
      era.println();
      await era.printAndWait([tachyon.sex, '满足的叹了口气']);
      await era.printAndWait(
        '仿佛刚完成了一件大案子的社畜，在酒会上猛灌了口啤酒后吐出的那口气一般',
      );
      await era.printAndWait(
        '说不清到底是解放感，成就感，可能……还有淡淡的，自己都找不到原因的失落感？',
      );
      await era.printAndWait([
        '回想这三年，',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 确实一起达到了许多成就',
      ]);
      await era.printAndWait([
        '三冠的道路，对情感的研究课题，与 ',
        coffee.get_colored_name(),
        ' 的激战……',
      ]);
      await era.printAndWait('还有更多更多，值得一提，或者不值一提');
      await era.printAndWait([
        '这三年的重量，让 ',
        you.get_colored_name(),
        ' 不由得也和 ',
        tachyon.get_colored_name(),
        ' 一样吐出了叹息',
      ]);
      era.println();
      await era.printAndWait([
        '接下来的时间，你们二人谁也没说话，只是互相依偎着',
      ]);
      await era.printAndWait([
        '此时的 ',
        you.get_colored_name(),
        ' 才发觉，身旁的',
        tachyon.sex,
        '身体是如此娇小',
      ]);
      await era.printAndWait([
        '此时不是什么天才',
        tachyon.uma_sex_title,
        '，也不是疯狂科学家',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '也不过是一名普通的',
        tachyon.teen_sex_title,
        '而已',
      ]);
      era.println();
      await era.printAndWait('热烟缭绕的温泉中，静静享受着片刻宁静的两人');
      await era.printAndWait([
        '对熟知麻烦制造者 ',
        tachyon.get_colored_name(),
        '，以及助纣为虐的其负责训练员的人来说，这想必是难以置信的画面吧',
      ]);
      await era.printAndWait('但此时，两人便是如此沉浸于此');
      era.drawLine();
      await tachyon.say_and_wait([callname, '，你知道，薛定鄂的猫吗？']);
      era.println();
      await era.printAndWait([
        '忽然，',
        tachyon.get_colored_name(),
        ' 打破了这份沉默',
      ]);
      await era.printAndWait('薛定鄂的猫……？');
      era.printButton('「不知道」', 1);
      era.printButton('「知道」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '薛定鄂的猫，最早是薛定鄂用以反驳量子力学而提出的假想实验，',
        );
        await tachyon.say_and_wait(
          '令人讽刺的是，现在却变成了用以诠释量子力学的最佳代表',
        );
        await tachyon.say_and_wait(
          '简单来说，就是将放射性物质、会被放射线触发的毒气开关，以及猫放在完全隔绝外界的箱子中',
        );
        await tachyon.say_and_wait(
          '没有人知道放射性物质何时会衰变生成放射线，',
        );
        await tachyon.say_and_wait(
          '换言之，没有人知道开关究竟会不会触发，在打开箱子前，猫会同时处于死亡和生存的叠加状态',
        );
      } else {
        await tachyon.say_and_wait(
          '关于这个实验，如今各种学派都有各自的想法，但万变不离其宗的……你知道，这个实验中最重要的是什么吗？',
        );
      }
      era.printButton('「……猫？」', 1);
      era.printButton('「……毒气？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '哈哈，确实，要是没有这些的话实验根本是无法成立的……不过，都不对哦',
      );
      era.println();
      await era.printAndWait([
        '忽然，',
        tachyon.get_colored_name(),
        ' 从温泉里站起身来，面对着 ',
        you.get_colored_name(),
        '，与 ',
        you.get_colored_name(),
        ' 双目相对',
      ]);
      await era.printAndWait('那酒红色的眼眸如久酿的蜜泉一般，令人沉醉');
      await era.printAndWait([
        '忽然 ',
        you.get_colored_name(),
        ' 有些好奇，这样的',
        tachyon.sex,
        '也曾经评价过自己拥有一双疯狂的眼睛',
      ]);
      await era.printAndWait([
        '那么现在，从',
        tachyon.sex,
        '的眼眸中看见的又是什么呢？',
      ]);
      era.println();
      await tachyon.say_and_wait('答案是—————『观测者』');
      await tachyon.say_and_wait(
        '无论猫是死是活，这都只是『可能』，是无限接近，却无法定型的可能性',
      );
      await tachyon.say_and_wait(
        '只有在加入了观测后，可能性才能彻底定型，化为无论生死的结果',
      );
      era.println();
      await era.printAndWait('换言之');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 伸出手，好似想要触碰 ',
        you.get_colored_name(),
        ' 的眼睛，却又有些颤抖，怕一不小心伤害到 ',
        you.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 主动抓住了',
        tachyon.sex,
        '的手，缓慢，却稳当的朝着自己的双眼靠近',
      ]);
      era.println();
      await tachyon.say_and_wait('你，就是我的观测者');
      await tachyon.say_and_wait([
        '是将 ',
        tachyon.get_colored_name(),
        ' 的可能性固定的人',
      ]);
      await tachyon.say_and_wait([
        '是决定了此刻的 ',
        tachyon.get_colored_name(),
        ' 的人',
      ]);
      await tachyon.say_and_wait(
        '在这场实验中，你才是研究者，而我，不过是被你放进箱子里的猫而已',
      );
      era.println();
      await era.printAndWait('轻轻的，碰到了');
      await era.printAndWait('没什么特殊的感觉，除了眼珠被触碰的刺痛感');
      await era.printAndWait([
        '但 ',
        tachyon.get_colored_name(),
        ' 仿佛这样就满足了一般，主动收回了手',
      ]);
      era.println();
      await tachyon.say_and_wait('今后的实验……还请多多指教');
      await tachyon.say_and_wait('我亲爱的，教授君');
      await tachyon.say_and_wait('等会出去，不要忘记我给你准备的礼物哦');
      era.println();
      await era.printAndWait([
        '说完后，',
        tachyon.get_colored_name(),
        ' 便先上了岸',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '对了，今天的药我加在冰镇牛奶里了，要记得喝哦',
      );
      era.println();
      await era.printAndWait(
        '…………最起码，会帮自己准备冰牛奶，这也算是一种成长吗？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 一边思考着近似于被 PUA 的人会有的想法，一边决定在温泉里再多泡一会',
      ]);
    };
    f.title = title;
    return f;
  })(),
  palace_a: (() => {
    const title = '极限的彼方';
    /**
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} coffee 曼城茶座
     * @param {CharaTalk} you 玩家
     * @param {string} callname 爱丽速子对玩家的称呼
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        '与 ',
        tachyon.get_colored_name(),
        ' 的三年结束了',
      ]);
      era.println();
      await era.printAndWait([
        '在毕业典礼后，',
        you.get_colored_name(),
        ' 也曾问过',
        tachyon.sex,
        '未来的打算',
      ]);
      await tachyon.say_and_wait('身为学生，最重要的本份不就是学习吗？');
      await era.printAndWait([
        tachyon.sex,
        '只笑着说了这么一句与',
        tachyon.sex,
        '的风格完全不符的话语',
      ]);
      era.println();
      await era.printAndWait('然而，这次似乎是真的');
      await era.printAndWait([
        you.get_colored_name(),
        ' 在当年的大学统一考试考生名单里看见了',
        tachyon.sex,
        '的名字',
      ]);
      await era.printAndWait([
        '虽然令人难以置信，但',
        tachyon.sex,
        '似乎选择了继续升学',
      ]);
      era.println();
      await era.printAndWait('今天，是各大学的开学典礼');
      await era.printAndWait([
        you.get_colored_name(),
        ' 回想起几个月前，发榜的那天',
      ]);
      await era.printAndWait([
        '听说',
        tachyon.sex,
        '上榜的 ',
        you.get_colored_name(),
        '，内心的心情不知该如何表达',
      ]);
      await era.printAndWait([
        '充满了可能性的',
        tachyon.sex,
        '，最终也还是要走上平凡人的道路',
      ]);
      await era.printAndWait(
        '如普通人一般升学，如普通人一般毕业，如普通人一般的就业',
      );
      await era.printAndWait([
        '然后，迟早有一天，',
        tachyon.sex,
        '……也会变成像自己一样无聊的大人吗？',
      ]);
      await era.printAndWait([
        '在那场只有两人的庆祝会上，',
        you.get_colored_name(),
        ' 对',
        tachyon.sex,
        '说了什么，',
        tachyon.sex,
        '对 ',
        you.get_colored_name(),
        ' 说了什么都已经忘得一干二净了',
      ]);
      era.println();
      await era.printAndWait([
        '与',
        tachyon.sex,
        '告别了的自己，也要回到原来的生活，迎来下一名负责',
        tachyon.uma_sex_title,
        '，支持',
        tachyon.sex,
        '的梦想',
      ]);
      await era.printAndWait([
        '但像',
        tachyon.sex,
        '那样，能够将 ',
        you.get_colored_name(),
        ' 的目光灼烧的，如光一般的',
        tachyon.uma_sex_title,
        '……恐怕也再见不到了吧',
      ]);
      await era.printAndWait([
        '不知不觉，',
        you.get_colored_name(),
        ' 竟下意识的走到了曾是旧理科准备室，后来变成实验室，如今想当然又要变回理科准备室的空教室',
      ]);
      era.println();
      await you.say_and_wait('来都来了，顺便整理一下吧');
      await era.printAndWait([
        you.get_colored_name(),
        ' 将门打开，看见的是一如既往做着实验的 ',
        tachyon.get_colored_name(),
        ' 和在自己的角落喝着咖啡的 ',
        coffee.get_colored_name(),
        '……这种妄想，当然是不存在的',
      ]);
      await era.printAndWait([
        '在毕业典礼结束后就没有人进入过的这间教室，还维持着你们最后一次使用时的样貌',
      ]);
      await era.printAndWait([
        '放置在实验桌上的空试管、里面液体已经干枯的烧瓶，以及桌上的红茶污渍，岁月的痕迹勾起了 ',
        you.get_colored_name(),
        ' 三年里的种种回忆',
      ]);
      era.println();
      await tachyon.say_and_wait(['……啊，', callname]);
      era.println();
      await era.printAndWait([
        '身后传来了熟悉的呼喊声，',
        you.get_colored_name(),
        ' 转过头来',
      ]);
      await era.printAndWait([
        '是 ',
        you.get_colored_name(),
        ' 朝朝暮暮心心念念的',
        tachyon.sex,
      ]);
      era.println();
      await tachyon.say_and_wait('既然来了，就快来帮我搬东西吧');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在看见 ',
        you.get_colored_name(),
        ' 的刹那，露出了一如往常的笑容，笑容明媚到 ',
        you.get_colored_name(),
        ' 产生了一种错觉，仿佛你们之间什么也没改变',
      ]);
      await era.printAndWait(
        '也是啊，既然已经毕业，那么这里的实验器具等，当然也必须搬走了',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 不发一语，默默的跟在 ',
        tachyon.get_colored_name(),
        ' 的身后',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 原本以为，',
        tachyon.sex,
        '大概是想把东西搬到自己家，或者现在的学校，又或者……回收处理？',
      ]);
      await era.printAndWait([
        '却没想到，',
        tachyon.sex,
        '将所有的器具都搬到了隔壁的理科准备室',
      ]);
      era.println();
      await tachyon.say_and_wait('好了，这样就完成了……');
      era.println();
      await era.printAndWait([
        '最后的',
        tachyon.sex,
        '，站在恐怕再也不会回来的教室门前，露出了寂寞的笑容',
      ]);
      await era.printAndWait(['随后，回头看向了 ', you.get_colored_name()]);
      era.println();
      await tachyon.say_and_wait([callname, '，让我们开始今天的实验吧！']);
      era.println();
      await era.printAndWait([tachyon.sex, '的眼中，依然闪耀着疯狂的光芒']);
      await era.printAndWait([
        '如三年间的每一天，',
        tachyon.sex,
        '每次见面时的招呼语一般',
      ]);
      await era.printAndWait([
        '不知不觉间，',
        you.get_colored_name(),
        ' 也露出了笑容来，越笑越开心，越笑越大声，甚至笑出了眼泪来',
      ]);
      await era.printAndWait('或许这三年间，真的有些东西是永远不会改变的吧');
      await era.printAndWait([
        '比如 ',
        you.get_colored_name(),
        ' 和 ',
        tachyon.get_colored_name(),
        ' 的关系，比如',
        tachyon.sex,
        '的求知欲，比如 ',
        you.get_colored_name(),
        ' 对',
        tachyon.sex,
        '及',
        tachyon.sex,
        '对 ',
        you.get_colored_name(),
        ' 的感情',
      ]);
      await era.printAndWait([
        '风沙沙吹过走廊，仿佛在附和着 ',
        you.get_colored_name(),
        ' 的话语',
      ]);
      await era.printAndWait('窗外落叶飘落，秋日已至');
      era.drawLine({ content: '三天后' });
      era.printButton('「……等一下！？那天原来不是来道别的吗！？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '…………',
        callname,
        '？我说这都过去三天了你才反应过来，是不是有点慢了',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 的实验室……隔壁的新实验室',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 在「就陪着',
        tachyon.sex,
        '最后闹一次吧」的想法下配合了',
        tachyon.sex,
        '的「最后一场」实验',
      ]);
      await era.printAndWait('却没想到这最后一场一做就是三天');

      era.printButton('「不是说要上大学吗！？」', 1);
      await era.input();
      await tachyon.say_and_wait('是啊，我上的是特雷森大学部啊');
      era.println();
      await you.say_and_wait('特雷森哪来的大学部！？我怎么没听说过！？');
      era.println();
      await tachyon.say_and_wait(
        '虽然剧情里没有提过，但官方设定里特雷森学园确实是有大学部的哦',
      );
      era.printButton('「官方设定是什么鬼啊！？」', 1);
      era.printButton(
        '「退一万步，就算真的有好了，你都不用去上课的吗！？」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……',
        callname,
        '，我都开始怀疑你有没有上过大学了，大学哪有人乖乖去上课的啊',
      ]);
      era.println();
      await era.printAndWait(
        '虽然很想反驳，但想到面前是连高中课业都爱去不去几乎全部翘掉的人，忽然就没什么反驳的余力了',
      );
      era.printButton('「那为什么要忽然换教室啊！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '不……这个让我说也有点那个，但那间教室因为我们这几年的使用……',
      );
      await tachyon.say_and_wait('稍微出现了一些安全上的问题……');
      await tachyon.say_and_wait(
        '因此需要检查跟维修管理……大概一周的时间就能换回去了',
      );
      era.printButton('「只是一周的时间就别搞的好像多感伤的样子啊！？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '啊，',
        callname,
        ' 你好过分，那间教室好歹也是承载了我们三年的虐……使用，感谢一下也不过分吧？',
      ]);
      era.println();
      await era.printAndWait('无话可说');
      await era.printAndWait([
        '现在看来仿佛一切确实都如',
        tachyon.sex,
        '说的那样',
      ]);
      await era.printAndWait('搞了半天，原来只有自己在自顾自的感伤吗？');
      era.println();
      await tachyon.say_and_wait(
        '明明发榜那天就跟你说过入学的学校跟之后实验要继续拜托你的事了……',
      );
      await tachyon.say_and_wait(
        '结果却全都被忘光了……果然，那天在饮料里下的药有点太重了吗？',
      );
      era.println();
      await era.printAndWait(
        '原来不记得那天的事情不是艺术美化而是真的喝到断片了吗！？',
      );
      era.println();
      await tachyon.say_and_wait([
        '好了好了，不说这些闲话了，',
        callname,
        '，快点走吧，今天的药如果没有意外的话……',
      ]);
      await tachyon.say_and_wait([
        '…或许能够颠覆整个',
        tachyon.uma_sex_title,
        '世界也说不定啊',
      ]);
      era.println();
      await era.printAndWait('颠覆……世界……？');
      era.drawLine();
      await era.printAndWait([
        '在左思右想，想出了第一百二十四种 ',
        tachyon.get_colored_name(),
        ' 的发明造成世界毁灭的可能性后，',
        you.get_colored_name(),
        ' 跟着',
        tachyon.sex,
        '来到了操场',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '拿出了一瓶一如往常却又从未见过的药水',
      ]);
      await era.printAndWait('一如往常，是一如往常的发光药水');
      await era.printAndWait(
        '从未见过，却是药水的光芒，并非平常常见的任何颜色',
      );
      await era.printAndWait(
        '硬要说的话……是蓝白相间的光芒，却又并非是纯粹的蓝白光混合',
      );
      await era.printAndWait('或许，这瓶药真的有办法颠覆整个世界');
      await era.printAndWait([
        '不知为何，',
        you.get_colored_name(),
        ' 忽然产生了这种想法',
      ]);
      await era.printAndWait([
        '但是，这种颠覆到底是好是坏，',
        you.get_colored_name(),
        ' 还无法辨明',
      ]);
      era.println();
      await tachyon.say_and_wait('那么，我要喝了');
      era.println();
      await era.printAndWait([
        '没来得及说出什么，',
        tachyon.get_colored_name(),
        ' 便飞快的打开了药水瓶，灌了下去',
      ]);
      era.println();
      await tachyon.say_and_wait('然后……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '忽然开始跑了起来，一切发生的太过突然，导致 ',
        you.get_colored_name(),
        ' 完全无法做出任何举动',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '跑完了正常的训练量后，脸不红气不喘的回到了 ',
        you.get_colored_name(),
        ' 的身旁',
      ]);
      await era.printAndWait([
        '这种程度的锻炼，对现在的',
        tachyon.sex,
        '而言早就不算什么了，',
      ]);
      await era.printAndWait([
        '或者说，以你们当初的测量，现在的',
        tachyon.sex,
        '应该早就已经抵达',
        tachyon.uma_sex_title,
        '的极限了才对……',
      ]);
      era.println();
      await era.printAndWait([
        '想到这，',
        you.get_colored_name(),
        ' 忽然有了个想法',
      ]);
      await era.printAndWait([
        '虽然疯狂，但如果是这样的话……那么',
        tachyon.sex,
        '的举动，这一切都有办法解释了',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 用颤抖的手翻找着口袋，寻找曾经，',
        tachyon.sex,
        '给 ',
        you.get_colored_name(),
        ' 的那副眼镜',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '怎么样，',
        callname,
        '？你现在看到的我，『是多少』？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' 眼中的',
        tachyon.sex,
        '，头上的数字和符号，并非是代表极限的「SS+ 1200」，而是……',
      ]);
      await era.printAndWait('「UG 1205」', {
        color: adaptability_colors.at(-1),
      });
      era.drawLine();
      await tachyon.print_and_wait([
        '看到 ',
        you.get_colored_actual_name(),
        ' 的表情，',
        tachyon.get_colored_name(),
        ' 笑了',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '不需要器具的观测也能知道自己的变化，毕竟有谁能够比',
        tachyon.sex,
        '更了解自己的身体呢？',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '想要的，其实就是眼前 ',
        you.get_colored_actual_name(),
        ' 的这副表情',
      ]);
      era.println();
      await tachyon.print_and_wait('与他一同走过的三年');
      await tachyon.print_and_wait('为了梦想拼尽全力的那些时光');
      await tachyon.print_and_wait('两人的努力，流尽了汗水泪水才突破的');
      era.println();
      await tachyon.print_and_wait('名为极限的障壁');
      era.println();
      await tachyon.print_and_wait('惊讶吧？喜悦吧？震惊吧？');
      await tachyon.print_and_wait([
        '渐渐的，',
        tachyon.get_colored_name(),
        ' 控制不住自己脸上的表情了',
      ]);
      await tachyon.print_and_wait('啊啊，明明这句话是想更云淡风轻一些说出的');
      await tachyon.print_and_wait('但是嘴角，忍耐不住的上扬');
      await tachyon.print_and_wait('但是眼角，无法控制的流泪');
      await tachyon.print_and_wait('这就是喜极而泣吗？');
      await tachyon.print_and_wait('不行，忍耐不住了');
      era.println();
      await tachyon.say_and_wait([
        '来吧，',
        callname,
        '，让我们一同探索，极限之后的世界吧！',
      ]);
      era.println();
      await tachyon.print_and_wait('不行，现在的自己脸上的表情一定很蠢吧');
      await tachyon.print_and_wait(
        '真是的，露出这种表情去谈判，怎么能让人信赖呢',
      );
      await tachyon.print_and_wait('要是有谁会信任露出这种愚蠢表情的人的话……');
      era.println();
      await tachyon.print_and_wait('呵呵，那必然是，疯子或者狂人吧');
      await tachyon.print_and_wait([
        '比如，眼前露出了同样愚蠢的表情，眼睛中依然闪烁着令人疯狂的光芒的 ',
        you.get_colored_actual_name(),
        ' 一样',
      ]);
      era.println();
      await era.printAndWait(
        '疯狂的科学家，与狂信的豚鼠，迎来了最适合两人的结局',
      );
    };
    f.title = title;
    return f;
  })(),
};
