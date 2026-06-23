/**
 * @file 春乌拉拉 - 爱慕
 * @author 99
 * @desc 在某些条件下乌拉拉的好感度锁定融洽，所以所有好感度都作为参数传入
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    const title = '觉醒的稚嫩';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {string} self_name 春乌拉拉的自称
     * @param {PrintedSpan} u_call_h 春乌拉拉对圣王光环的称呼
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        `如果是往常，现在的 ${
          urara.name
        } 理应早已进入了梦乡，但今夜的小${urara.uma_sex_title}却些难以入眠。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `从舍友的床上不断传出的让人脸红心态的低吟声就像某种咒语一般，总将${urara.sex}的思绪带到不知名的某个地方……`,
      );
      era.drawLine();
      await urara.print_and_wait(
        `在床上翻来覆去着，${urara.name} 的思绪也像风雨中的小船般在脑海上晃个不停。`,
      );
      await urara.print_and_wait(
        `就这样闭上眼睛的话，总感觉会像上次那样梦到不得了的事，比如对 ${self_name} 这样那样的 ${callname} 什么的。`,
      );
      await urara.print_and_wait(
        `不过渴求地将 ${self_name} 推倒的 ${callname}，虽然有点可怕，但现在好像接受了也不错的样子？`,
      );
      await urara.print_and_wait(
        `梦里抱着 ${callname} 的${urara.uma_sex_title}那副不害臊的神情也是，以后的 ${self_name} 也会……变成那样不知羞耻的「${urara.phy_sex_title}」吗？`,
      );
      await urara.print_and_wait(
        `这样平等的相拥着，那时的 ${callname} 与 ${self_name}，究竟是谁在渴求谁呢……`,
      );
      await urara.print_and_wait(
        '不行不行，现在还不是胡思乱想的时候！要好好睡觉才行！',
      );
      await urara.print_and_wait([
        `那现在要去提醒一下 `,
        u_call_h,
        ` 吗？可是这样做一定会惹${urara.sex}生气的，还是 ${self_name} 再努力一下好了……`,
      ]);
      urara.print('呜呜……身体好热，就算掀掉被子也还是好热……');
      era.printButton('试一下，试一下就好……（升级关系）', 1);
      era.printButton('唔……但还是好困啊……（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (urara.sex_code === 1) {
          await urara.print_and_wait(
            `然而在褪掉睡衣，将手伸向肉棒的瞬间，${urara.teen_sex_title} 娇嫩的身体就已做好了迎接高潮的准备。`,
          );
        } else {
          await urara.print_and_wait(
            `然而在褪掉睡衣，将手伸进花园的瞬间，${urara.teen_sex_title} 娇嫩的身体就已做好了迎接高潮的准备。`,
          );
        }
        await urara.print_and_wait(
          `仅是轻轻一下，小${urara.uma_sex_title}的身体就在比以往任何一次都要激烈的反应下，让无法抑制的让水声打湿了床单。`,
        );
        await urara.print_and_wait(
          `而即使用力捂住嘴不让声音漏出，在不住的颤抖中，对 ${callname} 微弱的呼唤还是从蒙住的被子下偷偷溜走了。`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            '不知不觉中，因高潮而挺起的那对雌肉也在急不可耐挤出着奶水。',
          );
          await urara.print_and_wait([
            '即使身体酥软无比，汁水还是不断自发性地挤出着乳首，浸透着',
            urara.teen_sex_title,
            '的睡衣。',
          ]);
          era.println();
          era.set('palam:52:胸部快感', era.get('tcvar:52:胸部快感上限') * 0.75);
        }
        await urara.print_and_wait(
          `身体发生了无法理解的反应，${self_name} 有点慌张，但欲望依旧占据着身体绝对的支配。`,
        );
        await urara.print_and_wait(
          `在手指失控的深入与不住的娇声呻吟中，小${urara.uma_sex_title}比以往任何一次都沉浸在对某人的爱欲之中。`,
        );
        await urara.print_and_wait(
          `就像初尝发情的幼兽期望着被成年雄性所征服，${self_name} 在被单下不断扭动着腰肢。`,
        );
        await urara.say_and_wait(
          `${callname}……呜……被 ${callname}、粗暴的……不行了、哈啊……`,
        );
        await urara.print_and_wait(
          `被某人施以支配凌虐的妄想仿佛整晚都在持续，${self_name} 甚至不知道自己何时睡着的。`,
        );
        await urara.print_and_wait(
          `等${urara.teen_sex_title}再次睁开眼睛时，已经是第二天被闹钟叫醒的时候了。`,
        );
        await urara.print_and_wait(
          '在发泄了欲望后，除了床的状况有些糟糕外，这一夜竟然睡得意外安稳，只是——',
        );
        await urara.say_and_wait(
          `虽然不是很懂，但是……${callname}、好想来一次……真正的……`,
        );
        await urara.print_and_wait(
          `在${urara.teen_sex_title}起床时的意犹未尽之间，「不知羞耻」的话语竟再次小声地脱口而出了……`,
        );
      } else {
        await urara.say_and_wait(`下次还要去见${callname}，还是赶快睡吧……`);
        await urara.print_and_wait(
          `强忍着躁动的身体，用力将尾巴拉到一边，小${urara.uma_sex_title}艰难的在床上翻了个身。`,
        );
        await urara.print_and_wait(
          `用被子与枕头蒙住耳朵，在努力地折腾了一番后，${callname} 终于在室友断断续续的喘息声中进入了梦乡。`,
        );
        await urara.print_and_wait(
          `但在梦中，小${urara.uma_sex_title}又梦见了，像看待「${urara.phy_sex_title}」般热切的将${
            urara.sex
          }推倒的 ${callname}……`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            '而醒来的时候，两只不听话的大白兔似乎也因为梦中的发情还在精神的挺立着。',
          );
          await urara.print_and_wait(
            '从挺立的尖端流出的白色汁液，也趁着主人沉浸在梦中将睡衣的胸前浸湿地一塌糊涂。',
          );
          era.println();
        }
        await urara.print_and_wait(
          `于是，被过激的春梦整晚缠绕着的 ${self_name}，第二天还是起晚了。`,
        );
        await urara.say_and_wait(
          `要是 ${self_name} 昨晚没有忍耐，会睡得更好一点吧，大概……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  50: (() => {
    const title = '稚嫩的水声';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait('虽然不太愿面对……');
      await inner_urara.say_as_unknown_and_wait(
        '但在爱欲的浇灌下，青涩的果实总会成熟为妖艳的蛇果。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '那么，日后到底要不要早早摘下这颗甜美的果实呢……？',
      );
      era.drawLine();
      await era.printAndWait([
        '在等待未果于是开始动身寻找后，',
        you.get_colored_name(),
        ' 轻易的找到了 ',
        urara.get_colored_name(),
        ' 所躲藏的阴影。',
      ]);
      await era.printAndWait([
        '掩耳盗铃般的，面色潮红的 ',
        urara.get_colored_name(),
        ' 将幼小身体努力蜷缩进大厅背光的角落中。',
      ]);
      await era.printAndWait([
        '只是即使仅有一墙之隔，沉溺于羞耻快感的小',
        urara.uma_sex_title,
        '依旧没能发现 ',
        you.get_colored_name(),
        ' 已近在咫尺。',
      ]);
      await era.printAndWait(
        '本应穿着整齐的布料仅是凌乱地挂在身上，稚嫩的敏感点毫无保留的暴露在空气中。',
      );
      if (urara.sex_code - 1) {
        await era.printAndWait(
          '十只手指努力地探索着身体的每一个淫靡的角落，不断地从粉嫩的幼穴中拉出粘稠的银丝。',
        );
        await era.printAndWait([
          urara.teen_sex_title,
          '的淫水正源源不断地滴落，在光洁的地板上留下一滩充满背德欲望的小小水洼。',
        ]);
      }
      if (era.get('talent:52:乳房尺寸') >= 1) {
        await era.printAndWait(
          '而与淫水一同洒下的，还有几滴禁忌且不合时宜的乳白色。',
        );
        await era.printAndWait(
          '严实紧绷的束胸被翻开，一对在幼小的身体上有些不协调的膨乳暴露在了观者面前。',
        );
        await era.printAndWait(
          '乳房蓬松柔软的下垂着，向前凸出的乳晕和乳首不受控制地分泌着白色的汁水。',
        );
        await era.printAndWait([
          '就算',
          urara.teen_sex_title,
          '将手臂搭在身前极力捧住两只因发情而乱颤的小怪物，乳白色的水渍也依旧在身下越积越多。',
        ]);
        await era.printAndWait(
          '而这对柔软敏感到成为新性器的自产奶魅肉，也昭示着这幅娇小的身体其实早已做好了准备——',
        );
        await era.printAndWait(
          '准备好在为未来的某一刻能进行哺乳，也准备好了让紧致的小腹成为新的孕袋……',
        );
      }
      await era.printAndWait([
        '此刻的 ',
        urara.get_colored_name(),
        ' 就像一只肥美的幼兔，天真地将诱人的弱点全部展现在了潜伏的捕食者面前。',
      ]);
      await urara.say_and_wait([
        '呜……',
        callname,
        '……',
        you.actual_name,
        '……究竟是怎么了……好舒服、停不下来……',
      ]);
      await era.printAndWait([
        '伴随着能够勾起征服欲的娇嫩哭腔，',
        urara.get_colored_name(),
        ' 在连绵的娇喘中呼唤着 ',
        you.get_colored_name(),
        ' 的名字。',
      ]);
      await era.printAndWait(
        '明知道现在正做着绝对不能被人看到的事，却还是无法抑制地发出着快乐的呻吟。',
      );
      await era.printAndWait([
        '含苞待放的',
        urara.teen_sex_title,
        '，正无助又期待地向看不见的某人展示着自己的身体最不堪的一面。',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          you.sex,
          '还在等着我的……明明不可以的，万一让',
          you.sex,
          '看到了、不要……',
        ]);
        await era.printAndWait([
          '带着大脑都被烧坏掉的淫乱神情，',
          urara.get_colored_name(),
          ' 混合着水声淫乱地低语着。',
        ]);
        await era.printAndWait([
          '小小的',
          urara.uma_sex_title,
          '此刻像着了魔一般，不断地搅动着敏感到一触即发的身体。',
        ]);
        await urara.say_and_wait([
          '如果被 ',
          callname,
          ' 看见、如果被 ',
          you.actual_name,
          ' 看见的话，呜……',
        ]);
        await urara.say_and_wait('好想要……但是不行……脑袋要变得奇怪起来了——');
      } else {
        await urara.say_and_wait([
          '明明、我都明白的……',
          callname,
          ' 是那样的人，但是，啊、哈啊……',
        ]);
        await era.printAndWait([
          '虽然精神在抗拒着，但堕入情欲的小',
          urara.uma_sex_title,
          '却无法凭自己停下激烈自慰的手指。',
        ]);
        await era.printAndWait([
          '此刻的 ',
          urara.get_colored_name(),
          ' 的双腿向外折成八字，脊背也因激烈的快感而挺到了极限。',
        ]);
        await urara.say_and_wait([
          '果然我还……',
          urara.get_colored_name(),
          '、还想要相信 ',
          callname,
          '，想要相信 ',
          you.actual_name,
          '……',
        ]);
        await urara.say_and_wait([
          '但是……为什么、现在一想起 ',
          callname,
          '，身体就——',
        ]);
      }
      await era.printAndWait(
        '在无法抑制的绝顶声中，娇小但淫乱的身体迎来了激烈的最高潮。',
      );
      await era.printAndWait([
        '失禁般飞溅的爱液浇灌着地板、打湿了鞋子与半脱的长袜，也浸透了',
        urara.teen_sex_title,
        '的内裤与安全裤。',
      ]);
      await era.printAndWait([
        '欲望得以暂时释放的 ',
        urara.get_colored_name(),
        ' 失神地靠在墙角中，耳朵与尾巴无力地垂着，失去对焦的双眼怔怔的看着某处。',
      ]);
      await era.printAndWait([
        '只是当',
        urara.sex,
        '笨拙地想要收拾身体时，随着双腿的脱力，小',
        urara.uma_sex_title,
        '还是滑坐在了身下那滩逐渐失温的汁水当中……',
      ]);
      await era.printAndWait([
        '当 ',
        urara.get_colored_name(),
        ' 衣衫不整、慌慌张张地跑来与 ',
        you.get_colored_name(),
        ' 汇合时，距约定时间早已晚了好一会儿，但这次 ',
        you.get_colored_name(),
        ' 却连下次注意的提醒都没能说出口。',
      ]);
      await era.printAndWait([
        '为了压抑住当场吃掉 ',
        urara.get_colored_name(),
        ' 的欲望，',
        you.get_colored_name(),
        ' 几乎耗光了精力，更别说去直视那张依旧挂着诱人潮红的小脸了。',
      ]);
      await era.printAndWait([
        '只是视线无处安放的 ',
        you.get_colored_name(),
        ' 还是注意到了，在担当凌乱的裙下，晶莹的液体正顺着湿透的内裤边缘不断流出，沾湿了长袜的边缘……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = '躁动的爱意';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {string} self_name 春乌拉拉的自称
     * @param {PrintedSpan} u_call_h 春乌拉拉对圣王光环的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '在床上翻了个身，今天的小',
        urara.uma_sex_title,
        '似乎真的失眠了……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '怀春的',
        urara.teen_sex_title,
        '，不管外表多么年幼，内在都会如此反复无常……',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        '又来了，砰砰直跳的心脏怎么也静不下来，如果不去管的话明天又要起不来了。',
      );
      await urara.print_and_wait(
        '可是越是强迫自己去睡，脑海中浮现出的那张脸就会更加清晰。',
      );
      await urara.print_and_wait(
        '就算努力折起耳朵，用力将尾巴缠在腰间，它们也还是会不受控制地抖动起来。',
      );
      await urara.print_and_wait(
        '是因为它们很高兴吗？可是为什么总会变成这样？为什么每当闭上眼睛时，总能看到那个熟悉的人？',
      );
      await urara.print_and_wait([
        '那个第一次相遇时就在眼前倒下去的人；会因初识的',
        urara.uma_sex_title,
        '简单两句就来应约的人；',
      ]);
      await urara.print_and_wait([
        '那个愿意为跑在最后的弱小',
        urara.uma_sex_title,
        '应援的人；不管发生什么都与不成器的',
        urara.sex,
        '走到了现在的人……',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          '回过头来的时候，已经想象不到没有 ',
          callname,
          ' 的 ',
          self_name,
          ' 要怎么走到现在了。',
        ]);
        await urara.say_and_wait('这个样子，真的很幸运呢……');
        await urara.print_and_wait([
          '但有一天失去了 ',
          callname,
          ' 呢？就算是要为了大家奔跑，但离开了那个人，弱小的 ',
          self_name,
          ' 还能继续下去吗……',
        ]);
        await urara.print_and_wait(
          '好不安，失去了那份幸运的未来好可怕，可就算是能够预见的未来，那又怎么办呢？',
        );
        await urara.print_and_wait(
          '因为担当与训练员的关系，总有一天会迎来改变——',
        );
      } else {
        await urara.print_and_wait([
          '就算两人平时表现出的关系并不算好，',
          self_name,
          ' 也早已依赖上 ',
          callname,
          ' 了。',
        ]);
        await urara.say_and_wait([
          '而且在 ',
          callname,
          ' 身边的感觉也并不坏……',
        ]);
        await urara.print_and_wait([
          '不知不觉间，',
          callname,
          ' 在 ',
          self_name,
          ' 心中所占的面积已经扩到连自己都感到惊讶的程度了。',
        ]);
        await urara.print_and_wait(
          '虽然还是有些不知所措，但是走在一起就会心跳加速，被鼓励也会开心地出乎意料。',
        );
        await urara.print_and_wait([
          '究竟是怎么了？',
          self_name,
          ' 对 ',
          callname,
          ' 的感情，在不知道的地方迎来改变了吗？',
        ]);
      }
      urara.say(`那我（乌拉拉）对 ${you.sex} 的感情……`);
      era.printButton('「果然，是「恋爱」的感情吗？」（升级关系）', 1);
      era.printButton('「还、还是担当对训练员的好感吧？」（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait([
          '那……难道这就是恋爱？',
          self_name,
          ' 对 ',
          callname,
          '？',
        ]);
        await urara.print_and_wait([
          '虽然不完全明白，但应该就是这样吧，可这么说来，',
          callname,
          ' 会喜欢 ',
          self_name,
          ' 吗？',
        ]);
        await urara.print_and_wait([
          '一想到这个问题，心里就会变得酸涩，但是……想象不到 ',
          callname,
          ' 会主动告白的样子啊！',
        ]);
        await urara.print_and_wait([
          '再这样下去，什么都不明白的 ',
          self_name,
          ' 只会永远被 ',
          callname,
          ' 当做小孩子吧……',
        ]);
        await urara.say_and_wait('可是不管会不会接受，都不能逃避本心呢！');
        await urara.say_and_wait([
          '就算很困难，但是不诚实的话，之后一定会后悔呢！这点 ',
          self_name,
          ' 还是知道的！',
        ]);
        await urara.print_and_wait([
          '「',
          urara.actual_name,
          '」从来都不是厉害的',
          urara.uma_sex_title,
          '，',
          urara.sex,
          '的日常又笨又幼稚，和闪耀的大家根本没法相提并论……',
        ]);
        await urara.print_and_wait([
          '但这样 ',
          self_name,
          ' 也更要和奔跑时一样，要竭尽全力的去向 ',
          callname,
          ' 表达真心。',
        ]);
        await urara.print_and_wait([
          '那样的话就算没能拿到一着、就算被 ',
          callname,
          ' 拒绝，也能够和往常一样甘心的接受——',
        ]);
        if (high_relation) {
          await urara.print_and_wait([
            '因为 ',
            self_name,
            ' 知道 ',
            callname,
            ' 其实是个优秀的人，也被大家爱着并不奇怪吧。',
          ]);
          await urara.say_and_wait('从明天开始，就大声地把喜欢说出来吧——');
        } else {
          await urara.print_and_wait([
            '哪怕 ',
            callname,
            ' 是个过分的人，',
            self_name,
            ' 还是喜欢上了过分的 ',
            callname,
            '。',
          ]);
          await urara.say_and_wait([
            '不管发生什么，喜欢 ',
            callname,
            ' 的事实都是不会改变……',
          ]);
        }
        await urara.say_and_wait([
          '所以我也会拿出勇气来的，为了在未来的某一天，能够与 ',
          callname,
          ' 成为——',
        ]);
        if (has_lover) {
          await urara.say_and_wait([
            '即使 ',
            callname,
            '，已经有了其他女孩子？',
          ]);
          await urara.print_and_wait([
            '刚刚下定决心，来自不知何处的质问却紧随而至，但已做好准备的 ',
            self_name,
            ' 只是在被单下咬紧了嘴唇。',
          ]);
          await urara.say_and_wait(
            '……我知道哦？那样做既不够资格，也一定是很恶劣的事，还会让大家伤心……',
          );
          await urara.say_and_wait(
            '但是如果欺骗自己的话，就什么都改变不了啊。',
          );
          await urara.say_and_wait([
            '虽然 ',
            self_name,
            ' 很笨，还有很多事情都不明白，但 ',
            self_name,
            ' 不是胆小鬼。',
          ]);
          await urara.say_and_wait([
            '我不会逃避，为了下次能继续抬头挺胸的与 ',
            callname,
            ' 在一起——！',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '嗯！果然还是一如既往吧，',
          self_name,
          ' 与 ',
          callname,
          ' 还是普普通通的关系……大概？',
        ]);
        await urara.print_and_wait([
          '虽然总觉得忘记了什么，又或者是小',
          urara.uma_sex_title,
          '还是没有完全理解自身的感受。',
        ]);
        await urara.print_and_wait([
          '在庞大的感情在普通的挤压已久之后，',
          self_name,
          ' 最终还是来到了当机的极限值。',
        ]);
        await urara.print_and_wait([
          '晕晕乎乎的，',
          self_name,
          ' 又将希望寄予了可靠的舍友，或许',
          urara.sex,
          '可以带来什么意见？',
        ]);
        await urara.say_and_wait([
          '不过旁边的 ',
          u_call_h,
          ' 已经睡着了啊，明明平常都是 ',
          self_name,
          ' 会先睡着来着？',
        ]);
        await urara.say_and_wait([
          '嗯，不要再胡思乱想了 ',
          self_name,
          '，还是赶快睡吧，要不然就又要没力气了。',
        ]);
        await urara.print_and_wait([
          '但是，身体还是好热，要不再来一次那个吧？把被子掀掉，睡衣也全脱掉……',
        ]);
        await urara.say_and_wait('嗯～哈啊……');
        await urara.print_and_wait([
          '颤抖地将手再次深入敏感的地方，小',
          urara.uma_sex_title,
          '眼前又出现了那个人因渴求',
          urara.sex,
          '的身体而化身野兽的样子。',
        ]);
        await urara.print_and_wait([
          '随着身体不知道第几次地迎来高潮，脑袋再也无力思考的 ',
          self_name,
          ' 在乱七八糟的床铺上沉沉地睡去……',
        ]);
        await urara.say_and_wait('……');
        await urara.print_and_wait([
          '在通过释放欲望的方式放弃思考后，小',
          urara.uma_sex_title,
          '又暂时将这段思考驱逐出了脑海。',
        ]);
        await urara.print_and_wait([
          '但',
          urara.teen_sex_title,
          '的心情也没法永远忽略下去，可能过不了多久，',
          urara.sex,
          '又会被这些问题所缠住吧。',
        ]);
        await urara.print_and_wait([
          '不过至少最近这段时间，不管是 ',
          you.get_colored_name(),
          ' 还是',
          urara.sex,
          '不用再担心有人突然失眠的问题了。',
        ]);
        await urara.print_and_wait([
          '只是这样一丝不挂的入睡，在第二天起床时肯定会把可怜的「室友妈妈」吓一跳吧。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = (urara) => ['致等待已久的', urara.sex];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (urara, inner_urara, you, high_relation, has_lover) => {
      await era.printAndWait([
        '或许是因为那天遇上了很多事情，',
        you.get_colored_name(),
        ' 与 ',
        urara.get_colored_name(),
        ' 终于有机会独处的时候，天色已逐渐变暗下来。',
      ]);
      await era.printAndWait([
        '记忆中的 ',
        urara.get_colored_name(),
        ' 仰头看着夜空，小',
        urara.uma_sex_title,
        '安静地数着星星，樱瞳上洒满了点点星光。',
      ]);
      await era.printAndWait([
        '只是今天的小',
        urara.uma_sex_title,
        '依旧有些缺乏兴致，耳朵和尾巴也只是若有所思的耷拉着。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 当然知道为什么，就算记忆会有偏差，两人一起的时间与经历也绝对不会说谎。',
      ]);
      await era.printAndWait([
        '想要去拉 ',
        urara.get_colored_name(),
        ' 的手、想要看到 ',
        urara.get_colored_name(),
        ' 的笑容、想要和 ',
        urara.get_colored_name(),
        ' 更进一步……',
      ]);
      await era.printAndWait([
        '就算使用理性，想到的也只有',
        urara.sex,
        '还在等待着某人的回应，思考已容不下它物。',
      ]);
      await era.printAndWait([
        '担当还是一如既往的样子，所以有问题的只会是用「谨言慎行」当借口的训练员而已。',
      ]);
      await era.printAndWait([
        '事到如今就算是错上加错，卑鄙的大人也已经用光了全部的底牌。',
      ]);
      await era.printAndWait([
        '想好了吗？不过就算还觉得自己没准备好，人生也不会经历两个相同的夜晚啊。',
      ]);

      await era.printAndWait([
        '在匆忙的星空下，',
        you.get_colored_name(),
        ' 终于——',
      ]);
      era.printButton('主动去牵起乌拉拉的手。', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 轻轻地牵起了身边人的手，而回应的则是在略微迟疑后温暖的回握。',
      ]);
      await era.printAndWait([
        '将目光悄悄地转向一侧，沉默的 ',
        urara.get_colored_name(),
        ' 终于冲 ',
        you.get_colored_name(),
        ' 笑了起来。',
      ]);
      await era.printAndWait([
        '明明还是小小的',
        urara.sex,
        '，不知为何却在这时表现出了不像小孩子的冷静。',
      ]);
      await era.printAndWait([
        '带着什么都懂一点的表情，就像 ',
        urara.get_colored_name(),
        ' 主动告白时的那样。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '虽然比想象中的稍微有些晚了，但是乌拉拉依旧这样喜欢着训练员哦！',
        );
        await era.printAndWait([
          '靠在身边回应着 ',
          you.get_colored_name(),
          ' 的情感，',
          urara.get_colored_name(),
          ' 不知不觉中笑了出来。',
        ]);
        await urara.say_and_wait(['请多指教……？嘿嘿～果然不太适合乌拉拉呢！']);
      } else {
        await urara.say_and_wait([
          '在想什么呢？明明已经这个时候了……不过，就是那么回事吧，训练员！',
        ]);
        await era.printAndWait([
          '虽然总有些不满和担忧，但 ',
          urara.get_colored_name(),
          ' 还是小声笑了起来。',
        ]);
        await urara.say_and_wait('回去的稍微慢一点，应该不会让大家担心吧？');
      }
      era.println();
      if (has_lover) {
        await urara.say_and_wait(
          '不过训练员，走夜路真的很黑呢，不要只送别人回家哦？',
        );
        await urara.say_and_wait('突然放开的话，也许乌拉拉会走丢也说不定呢……');
        era.println();
      }
      await era.printAndWait([
        '回去的路上，成为恋人的二人步伐也不知不觉中慢了下来。',
      ]);
      await era.printAndWait([
        '尚处天真时节的小',
        urara.uma_sex_title,
        '与已是大人年纪的训练员，不论差距多大还是选择了彼此。',
      ]);
      await era.printAndWait([
        '前方不知要走到什么时候的夜路，或许会让大家担心也说不定。',
      ]);
      await era.printAndWait([
        '不过只要在门禁前安全的回去就好了吧？回忆着那天的归路，',
        urara.teen_sex_title,
        '合上了',
        urara.sex,
        '画得到处都是的笔记。',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        '希望未来的乌拉拉与训练员，不管发生什么，也不会在夜中迷路。',
        true,
      );
      await inner_urara.say_as_unknown_and_wait([
        '回忆着那天的点点星光，小小的',
        urara.uma_sex_title,
        '如此祈愿着。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-3': (() => {
    const title = '致做出选择的你';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '坐在自己的办公桌前处理着文件，你回想着今天与乌拉拉在一起时的意外遭遇。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但说是意外也并非恰当，因为在那之前的你也从未见过如此『有备而来』的乌拉拉。',
      );
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '！在恋爱方面，',
        callname,
        ' 对乌拉拉是怎么想的呢？',
      ]);
      await era.printAndWait([
        '在刚听到这个问题时，',
        you.get_colored_name(),
        ' 差点以为自己幻听了，又或者 ',
        urara.get_colored_name(),
        ' 被谁教了奇怪的玩笑？',
      ]);
      await era.printAndWait([
        '但当坐在桌前的 ',
        you.get_colored_name(),
        ' 转头看去，却发现小',
        urara.uma_sex_title,
        '就站在身后，带着与竞争重赏时相当的神情靠了过来。',
      ]);
      await era.printAndWait([
        '与平日的相处模式没有关系，亦没有任何怀疑的余地，',
        urara.get_colored_name(),
        ' 与 ',
        you.get_colored_name(),
        ' 挤上了同一张椅子。',
      ]);
      await era.printAndWait([
        '仿佛要夺得一着那般，',
        urara.get_colored_name(),
        ' 霸占性的坐在了 ',
        you.get_colored_name(),
        ' 的大腿上，将全部身体压在担当训练员的身前。',
      ]);
      await urara.say_and_wait([
        '所以 ',
        callname,
        '！对乌拉拉究竟是怎么想的呢？乌拉拉想现在就知道！',
      ]);
      await era.printAndWait([
        '在樱瞳与 ',
        you.get_colored_name(),
        ' 的咫尺之间，小小的',
        urara.uma_sex_title,
        '带着严肃的笑意再次向 ',
        you.get_colored_name(),
        ' 问道。',
      ]);
      await era.printAndWait([
        '只是此刻被 ',
        urara.get_colored_name(),
        ' 堵住退路的 ',
        you.get_colored_name(),
        ' 并不意外，相反 ',
        you.get_colored_name(),
        ' 或许打心底就知道可能会有这一天。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 是',
        urara.sex,
        '的训练员，连 ',
        urara.get_colored_name(),
        ' 都能察觉到的感情，就算不敢认同，',
        you.get_colored_name(),
        ' 也知道那是存在的。',
      ]);
      await era.printAndWait(
        '而两人现在的距离有多近，也仅是包括周围人在内的「心照不宣」而已。',
      );
      await era.printAndWait(
        '回忆在这里出现了短暂的迟疑，但无论期待还是怀疑，都不应逃避来自担当的感情。',
      );
      await era.printAndWait([
        '况且，就连主动提起的 ',
        urara.get_colored_name(),
        ' 都没有半分迷茫。',
      ]);
      era.println();
      inner_urara.say_as_unknown([
        '面对安静等待着的 ',
        urara.get_colored_name(),
        '，训练员 ',
        you.adult_sex_title,
        '（您）当时的选择是——',
      ]);
      era.printButton(`抱住 ${urara.name}`, 1);
      era.printButton('「现在还不行……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '在片刻的抉择后，',
          you.get_colored_name(),
          ' 将 ',
          urara.get_colored_name(),
          ' 拥入了怀中。',
        ]);
        await urara.say_and_wait(
          '诶嘿嘿～让训练员为难了呢，但是训练员真的选择乌拉拉了，感觉好开心……',
        );
        await era.printAndWait([
          '紧绷的身体在 ',
          you.get_colored_name(),
          ' 拥抱中变得逐渐柔软，',
          urara.get_colored_name(),
          ' 看起来也因为 ',
          you.get_colored_name(),
          ' 的选择而松了口气。',
        ]);
        await era.printAndWait([
          '虽然有些和平日的 ',
          urara.get_colored_name(),
          ' 不太一样，但作为',
          urara.sex,
          '的训练员 ',
          you.get_colored_name(),
          ' 也知道为什么。',
        ]);
        await era.printAndWait([
          '小马就算懵懂，也明白自己是怎样的「',
          urara.uma_sex_title,
          '」，',
          urara.sex,
          '其实一直缺乏着安全感，只是很少会表现出来。',
        ]);
        await era.printAndWait([
          '而拥抱「',
          urara.get_colored_name(),
          '」的理由？姑且答得上来，但还是因那些不正当的欲望而难以启齿。',
        ]);
        await era.printAndWait(
          '比如在初次相遇时，有位成年人在同床共枕的少女的身体上，感受到了安心与温存？',
        );
        await era.printAndWait(
          '既需要在学生的激励下才寻回差点遗忘的前进初心，还要在学生身上寻得梦寐以求的倒错温暖。',
        );
        await era.printAndWait([
          '与 ',
          urara.get_colored_name(),
          ' 立下契约的训练员，除去心里被 ',
          urara.get_colored_name(),
          ' 重新燃起那团火之外，剩下的可能尽是些居心不纯。',
        ]);
        await era.printAndWait([
          '但这些都没有关系，因为不管收容了怎样复杂的感情，与 ',
          urara.get_colored_name(),
          ' 在一起的经历也绝非虚假。',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait(
            '训练员，不要因为乌拉拉贬低自己哦？因为这也是乌拉拉做出的选择。',
          );
          await era.printAndWait([
            '回忆中，',
            urara.get_colored_name(),
            ' 伸出了令人安心的小手，揉搓着 ',
            you.get_colored_name(),
            ' 脸颊上的犹豫。',
          ]);
          await era.printAndWait([
            '露出似乎什么都懂一点的表情，',
            urara.get_colored_name(),
            ' 用一如既往的笑容回应着 ',
            you.get_colored_name(),
            ' 的拥抱。',
          ]);
          await urara.say_and_wait(
            '心意相通是很棒的事，妈妈也是这么说的！而且乌拉拉也不会一直是小孩子哦？',
          );
          await era.printAndWait(
            '没错，现在已经不用再犹豫了，相恋的人就在彼此身边。',
          );
        } else {
          await urara.say_and_wait(
            '在担心吗？可不管发生了什么，乌拉拉也已经喜欢上了训练员……',
          );
          await era.printAndWait([
            '回忆中，',
            urara.get_colored_name(),
            ' 虽然刚刚的表情有些复杂，但此刻还是释然捧起了 ',
            you.get_colored_name(),
            ' 的脸颊。',
          ]);
          await era.printAndWait([
            '带着绝不会反悔的神色，少女勇敢地向 ',
            you.get_colored_name(),
            ' 可能掺入了杂质的爱做出了回应。',
          ]);
          await urara.say_and_wait(
            '不用再忍耐了哦训练员，因为做出选择的乌拉拉就在这里，就在训练员身边……！',
          );
          await era.printAndWait('是啊，如今已经不会再被责怪了……');
        }
        era.println();
        if (has_lover) {
          await urara.say_and_wait(
            '但这下子，就算乌拉拉被大家说卑鄙，也不能回头了哦……',
          );
          await era.printAndWait([
            '柔软的缩在 ',
            you.get_colored_name(),
            ' 的怀中，',
            urara.get_colored_name(),
            ' 突然靠在 ',
            you.get_colored_name(),
            ' 的身前轻声说道。',
          ]);

          era.printButton('「——」', 1);
          await era.input();

          await era.printAndWait([
            '只是在 ',
            you.get_colored_name(),
            ' 被突袭打乱了阵脚时，',
            urara.get_colored_name(),
            ' 却再次摇了摇头，温柔地安抚了恋人。',
          ]);
          await urara.say_and_wait(
            '没关系哦？乌拉拉并不是要责怪训练员，毕竟乌拉拉在那之前已经做好准备了嘛。',
          );
          await era.printAndWait('紧随其后的，又是天使般的笑容。');
          era.println();
        }
        await urara.say_and_wait('今后，也一直喜欢着对方吧，训练员！');
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '回忆着着怀中乌拉拉那份小巧而踏实的温润与柔软，美好的回忆暂时告一段落了。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '可喜可贺？不，并没有在说反话，因为我也愿意相信，您会是幸福的。',
        );
      } else {
        await urara.say_and_wait(
          '果然乌拉拉的问题太唐突了！可不能让训练员太为难呢！',
        );
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 还在思考该如何说些委婉的话时，',
          urara.get_colored_name(),
          ' 却率先开口了。',
        ]);
        await urara.say_and_wait(
          '毕竟训练员是大人，大人会考虑的更多呢！这样的话乌拉拉也不会继续问了！',
        );
        await urara.say_and_wait(
          '所以到时候，如果训练员哪天想好了的话，一定要跟乌拉拉说啊！',
        );
        era.println();
        if (high_relation) {
          await era.printAndWait([
            '没有失落的样子，只是和平常一样普通的笑着，小',
            urara.uma_sex_title,
            '只是伸手拽了拽训练员的脸颊。',
          ]);
          await urara.say_and_wait(
            '但乌拉拉也没打算放弃呢！乌拉拉会继续等下去！训练员也已经猜到了吧！',
          );
          await urara.say_and_wait(
            '乌拉拉的话，会等到训练员觉得就算接受乌拉拉没问题为止哦！',
          );
        } else {
          await era.printAndWait([
            '但在说完之后就立刻变得有点泄气，',
            urara.get_colored_name(),
            ' 又软趴趴地缩到了 ',
            you.get_colored_name(),
            ' 的怀里。',
          ]);
          await urara.say_and_wait(
            '训练员知道，乌拉拉要等多久吗？不过，训练员不会告诉乌拉拉吧……',
          );
          await urara.say_and_wait(
            '如果乌拉拉更强势一点，训练员会现在就答应乌拉拉吗？开玩笑的啦……',
          );
        }
        era.println();
        await era.printAndWait(
          '虽然还不知道那天会不会到来，但也没错，现在维持现状就好，现在还不是时候——',
        );
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '所以在那之前，就算是桥到船头自然直，两人的关系又该怎么处理呢？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '在椅子上慵懒地摇晃着，你与乌拉拉就这样度过了某段无所事事又心事重重的时光。',
        );
        await inner_urara.say_as_unknown_and_wait('……');
        await inner_urara.say_as_unknown_and_wait(
          '已经不知道您在想什么了，都到这时候了有不答应的道理吗？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '……对不起说了不该说的话，总之辛苦了。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  75: (() => {
    const title = '逐渐明了的爱意';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {PrintedSpan|false} u_call_r 春乌拉拉对米浴的称呼，当米浴的爱慕值不足时为 false
     * @param {PrintedSpan|false} u_call_h 春乌拉拉对圣王光环的称呼，当圣王光环的爱慕值不足时为 false
     */
    const f = async (
      urara,
      inner_urara,
      you,
      high_relation,
      u_call_r,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '就算遮遮掩掩，感情也总有一天会开花结果。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '那么处于现在进行时的您，现在请听题——',
      );
      await inner_urara.say_as_unknown_and_wait('乌鸦，为什么像写字台呢？');
      era.drawLine();
      await urara.print_and_wait([
        '看到靠在角落的长椅上睡着了的 ',
        you.get_colored_name(),
        '，一路跑来的乌拉拉小心地收起了脚步声。',
      ]);
      await urara.say_and_wait('诶？训练员昨晚又没休息好吗？那么轻轻地……');
      await urara.print_and_wait([
        '压低声音悄悄来到 ',
        you.get_colored_name(),
        ' 身边，乌拉拉也坐到长椅上，在安静等待的同时注视着 ',
        you.get_colored_name(),
        ' 平静的侧颜。',
      ]);
      await urara.print_and_wait([
        '身体逐渐升温，温热的情感再次占据了高处，因相遇以来逐渐被填满的经历，现在的乌拉拉已充分理解了这份悸动为何。',
      ]);
      await urara.say_and_wait(
        '仔细想想的话，现在的训练员好像第一次相遇时的样子，总感觉很有缘分呢。',
      );
      await urara.print_and_wait([
        '缓缓地靠近熟睡中的 ',
        you.get_colored_name(),
        '，将耳朵搭在 ',
        you.get_colored_name(),
        ' 的身上，乌拉拉聆听着 ',
        you.get_colored_name(),
        ' 的呼吸与心跳。',
      ]);
      await urara.print_and_wait([
        you.get_colored_name(),
        ' 的担当又想起了与 ',
        you.get_colored_name(),
        ' 初次相遇时，',
        you.get_colored_name(),
        ' 因为努力过头而倒下的那天。',
      ]);
      await urara.print_and_wait([
        '只是这次相遇的再现中，不管是身体还是心灵，乌拉拉都最初相比发生了彻底的改变。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '以前的时候还不懂，但现在呢，我果然喜欢着训练员。',
        );
        await urara.print_and_wait([
          '安心地倚靠在 ',
          you.get_colored_name(),
          ' 的身边，乌拉拉像是找到归路的孩子般悄悄抱住了沉睡中的 ',
          you.get_colored_name(),
          '。',
        ]);
        await urara.print_and_wait([
          '小',
          urara.uma_sex_title,
          '比人类略高的体温伴随着象征爱意的拥抱，将熟悉的温暖注入了 ',
          you.get_colored_name(),
          ' 的身体。',
        ]);
        await urara.print_and_wait([
          '因为训练员改变了乌拉拉的奔跑，因为训练员让乌拉拉获得了一着的喜悦；',
        ]);
        await urara.print_and_wait([
          '因为训练员改变了乌拉拉的生活，因为训练员让乌拉拉发现了更多的爱，所以……',
        ]);
        await urara.say_and_wait('今后也让我一直、一直喜欢着你吧——');
      } else {
        await urara.say_and_wait('训练员，我可以一直信任你的对吧？');
        await urara.print_and_wait([
          '用湿润的眼神注视着还在沉睡中的 ',
          you.get_colored_name(),
          '，乌拉拉的口中喃喃着不期待被回答的疑问。',
        ]);
        await urara.print_and_wait([
          '小',
          urara.uma_sex_title,
          '只是在劝说着自己稍微鼓起勇气，继续贴近这位令',
          urara.sex,
          '感到些许不安的仰慕者。',
        ]);
        await urara.print_and_wait([
          '就像',
          urara.sex,
          '最初的奔跑，即使可能不会被重视，',
          urara.sex,
          '也想全心全意拥抱这份不安稳的爱意。',
        ]);
        await urara.print_and_wait([
          '哪怕',
          urara.sex,
          '也只是含苞待放的年龄，哪怕这份感情或许会被随意丢弃，哪怕最后 ',
          you.get_colored_name(),
          ' 会……',
        ]);
        await urara.say_and_wait('不要现在就醒来哦——');
      }
      era.println();
      await urara.say_and_wait('啾……');
      await urara.print_and_wait([
        '带着热恋中纯真',
        urara.teen_sex_title,
        '的羞涩与勇气，来自担当的轻吻落在了将醒之际的 ',
        you.get_colored_name(),
        ' 的额头之上。',
      ]);
      await urara.print_and_wait([
        '并非是多么激烈的表达，借着成长所学的乌拉拉将',
        urara.sex,
        '理解到的「真正的爱意」献给了 ',
        you.get_colored_name(),
        '。',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        '而在熟悉的芳香中缓缓醒来的 ',
        you.get_colored_name(),
        '，也清楚的感受到了担当轻柔但厚重的爱意。',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await urara.say_and_wait(
        '诶嘿嘿～还是让训练员看到了啊，对不起哦训练员！',
      );
      await era.printAndWait([
        '被 ',
        you.get_colored_name(),
        ' 发现的乌拉拉，就像恶作剧的孩子般露出了被揭穿的羞涩笑意，此刻爬上',
        urara.teen_sex_title,
        '脸颊的微润娇羞也比任何时候都更加惹人怜爱。',
      ]);
      await urara.say_and_wait(
        '虽然没办法好好描述，果然这样最适合现在我对训练员的心情哦！',
      );
      await era.printAndWait([
        '面对面坐在 ',
        you.get_colored_name(),
        ' 的大腿上，还有些笨拙的小恋人向 ',
        you.get_colored_name(),
        ' 认真地宣誓着自己的情感。',
      ]);
      await urara.say_and_wait(
        '想对训练员亲口说的事……虽然现在没办法好好表达，但我以后一定可以做到的！',
      );
      await urara.say_and_wait('所以训练员，再等等我、再等等乌拉拉吧！');
      await era.printAndWait([
        '努力的向 ',
        you.get_colored_name(),
        ' 倾诉着有感而发的话语，尚未完全长大的女孩倾诉着还无法完整形容的爱意。',
      ]);
      await era.printAndWait([
        '但就算没能将一切都好好表达，乌拉拉想要传递出的感情，此刻的 ',
        you.get_colored_name(),
        ' 也早已了然于心。',
      ]);

      era.printButton('「我明白的，正因如此我也期待着乌拉拉。」', 1);
      await era.input();

      await era.printAndWait([
        '主动牵起',
        urara.teen_sex_title,
        '的手，直视着那对湿润的樱瞳，',
        you.get_colored_name(),
        ' 也不假思索的对乌拉拉给予了「大人的承诺」。',
      ]);
      await era.printAndWait([
        '今天彼此，以及从今往后的彼此，或许现在才刚刚开始。',
      ]);
      if (u_call_r || u_call_h) {
        era.println();
        await era.printAndWait([
          '只是，在训练员',
          you.adult_sex_title,
          '移开视线的瞬间，小',
          urara.uma_sex_title,
          '纯洁的笑容中闪过了一丝难以察觉的暗色。',
        ]);
        await era.printAndWait([
          '凝视着最喜欢的人的侧脸，',
          urara.teen_sex_title,
          '的脑海中却在最不合时宜的时刻浮现出了最不合时宜的景象。',
        ]);
        await era.printAndWait([
          '那是小小的',
          urara.sex,
          '最不愿记起，但在每次被揭开时就会被揪紧胸口、缠住双腿，只得目送他人远去时的记忆。',
        ]);
        if (u_call_r) {
          await urara.say_and_wait(
            [
              u_call_r,
              ' 也是这样喜欢着训练员，那 ',
              u_call_r,
              ' 也一定会对训练员这样做吧！这样对训练员表达……喜欢？',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '与训练员走在一起的『',
              u_call_r,
              '』、与训练员亲近的『',
              {
                color: u_call_r.color,
                content: '米浴同学',
                fontWeight: 'bold',
              },
              '』、与训练员身影相叠的『',
              {
                color: u_call_r.color,
                content: '黑色的——',
                fontWeight: 'bold',
              },
              '』……！',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '但 ',
              u_call_r,
              ' 才不是那样，',
              u_call_r,
              ' 是大家的『英雄』啊！',
              urara.sex,
              '已经得到训练员的约定了才对……',
            ],
            true,
          );
        }
        if (u_call_h) {
          await urara.say_and_wait(
            [
              u_call_h,
              ' 果然喜欢着训练员，或许真的比起还很幼稚的乌拉拉更适合站在训练员身边，但是……',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '露出从未见过的神情的『',
              u_call_h,
              '』、与训练员相拥的『',
              {
                color: u_call_h.color,
                content: '圣王同学',
                fontWeight: 'bold',
              },
              '』、与训练员逐渐贴近的『',
              {
                color: u_call_h.color,
                content: '三流的——',
                fontWeight: 'bold',
              },
              '』……！',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '不对！才不是这样的！',
              u_call_h,
              ' 比任何人都要优秀！',
              u_call_h,
              ' 比任何人都配得上训练员才对……',
            ],
            true,
          );
        }
        if (u_call_r && u_call_h) {
          era.println();
          await urara.say_and_wait(
            '那两人果然都喜欢着训练员……但是好难受……难受的头疼……难受的想吐……',
            true,
          );
          await urara.say_and_wait(
            '但是乌拉拉为什么要感到难受，乌拉拉不应该开心吗？',
            true,
          );
          await urara.say_and_wait(
            '乌拉拉为什么想要诅咒最好的朋友们呢……可是嫉妒的话，后来者的乌拉拉才没有资格不是吗……？',
            true,
          );
        }
        era.println();
        await urara.say_and_wait(
          '想要从后方插进来，想要破坏好友喜欢的心情、真正做着坏事的坏心眼家伙是……？',
          true,
        );
        await urara.say_and_wait(
          '感觉好像忘记了什么，明明不应该是这样的，但是训练员说会等着乌拉拉！但是训练员……！',
          true,
        );

        era.printButton('「乌拉拉？怎么了？是身体不舒服吗？」', 1);
        await era.input();

        await era.printAndWait([
          '听到 ',
          you.get_colored_name(),
          ' 的呼唤，乌拉拉脸上本就不易察觉的混沌轻若鸿毛的消散了。',
        ]);
        await era.printAndWait([
          '但并不美丽，也总有一天会用根茎啃食',
          urara.teen_sex_title,
          '心灵的黑色种子，已然在乌拉拉的内心中埋下了。',
        ]);
        await urara.say_and_wait('对不起……但是乌拉拉已经……');
        await era.printAndWait([
          '乌拉拉上前牵住了 ',
          you.get_colored_name(),
          ' 伸出的手，在开朗地笑容下，充满劣等感的歉意消失在了两人背后的风中……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '89-1': (() => {
    const title = '不再回头的决心';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {PrintedSpan} u_call_h 春乌拉拉对圣王光环的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await urara.print_and_wait(
        '又是那样吧，只要乌拉拉闭上眼睛的话，肯定会发生些什么吧？',
      );
      await urara.print_and_wait(
        '但是平静的夜里什么都不会发生，从床上睁开眼睛，依旧是熟悉的宿舍寝室。',
      );
      await urara.print_and_wait([
        '没有发生什么意外惊喜，也没有妄想中会对乌拉拉这样那样的 ',
        callname,
        '。',
      ]);
      await urara.print_and_wait([
        '总觉得有些……不高兴？但是除了在梦话中说着「一流」的 ',
        u_call_h,
        ' 外，并没有什么扫兴的理由。',
      ]);
      await urara.print_and_wait(
        '该睡觉的时间早就过了，可乌拉拉又在因为胡思乱想失眠。',
      );
      await urara.print_and_wait([
        '要不了多久，乌拉拉或许很快就会变成只想着和 ',
        callname,
        ' 做舒服的事的坏孩子了。',
      ]);
      await urara.print_and_wait([
        '不过在那之前，乌拉拉会先成为脑袋里除了 ',
        callname,
        ' 什么都塞不下的笨蛋吧。',
      ]);
      era.println();
      if (era.get('exp:52:性爱次数') >= 10) {
        await urara.say_and_wait([
          '一、一定都是因为 ',
          callname,
          ' 才变成的这个样子的！',
        ]);
        await urara.print_and_wait(
          '难道乌拉拉本来就是好色的坏孩子？就算是乌拉拉也会觉得泄气啊。',
        );
        await urara.print_and_wait([
          '可不管怎么否定，乌拉拉身体都已经离不开 ',
          callname,
          ' 了……',
        ]);
      } else {
        await urara.say_and_wait([
          '要是 ',
          callname,
          ' 能与乌拉拉更多、更多的亲热，乌拉拉就不会变成坏孩子了吧？',
        ]);
        await urara.print_and_wait([
          '可是乌拉拉身体都已经为 ',
          callname,
          ' 做好准备了，',
          callname,
          ' 却还是冷淡的不像样子。',
        ]);
        await urara.print_and_wait([
          '果然 ',
          callname,
          ' 更喜欢成熟一点的吗？有点伤心啊……',
        ]);
      }
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '但是就算这样，我也不想讨厌 ',
          callname,
          '，不如说乌拉拉爱着 ',
          callname,
          ' 才对。',
        ]);
        await urara.print_and_wait([
          '名为「',
          urara.get_colored_name(),
          '」的',
          urara.uma_sex_title,
          '迷恋着 ',
          callname,
          '，甚至「恋人关系」也已经无法满足。',
        ]);
        await urara.print_and_wait(
          '但更进一步的话，那不就会变成很重要的关系吗？「恋人」以上，应该是夫妻对吧？',
        );
        await urara.print_and_wait(
          '即使妈妈没主动提过，乌拉拉也知道那是人生的头等大事。',
        );
        await urara.print_and_wait([
          '就算与 ',
          callname,
          ' 达成了肌肤相亲的默契，如此任性的要求也不是能随便提起的。',
        ]);
      } else {
        await urara.say_and_wait([
          '乌拉拉以前也经常怀疑自己，只是每次都发现自己好像还是爱着 ',
          callname,
          '。',
        ]);
        await urara.print_and_wait([
          '就算很难承认，「',
          urara.get_colored_name(),
          '」现在也已经只能珍惜这份不安分的爱意了。',
        ]);
        await urara.print_and_wait([
          '如果乌拉拉能再往上一步，将 ',
          callname,
          ' 绑在身边呢？但是再往上的话……',
        ]);
        await urara.print_and_wait(
          '随便与人结合很难得到幸福，妈妈曾经是这样对乌拉拉说的。',
        );
        await urara.print_and_wait(
          '但是现在明知会变得不幸，乌拉拉却舍不得丢掉这段缝缝补补的经历。',
        );
      }
      era.println();
      urara.say(['那么现在与 ', callname, ' 的关系……']);
      era.printButton('「我是不会退让的！」（升级关系）', 1);
      era.printButton('「果然太早了吧……」（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait('决定了，乌拉拉不会再退让了。');
        await urara.print_and_wait([
          '乌拉拉已经在 ',
          callname,
          ' 心里占到了独属于自己的一席之地，但这还远远不够。',
        ]);
        await urara.print_and_wait(
          '因为就算乌拉拉不做选择，永远不会止步于现在，就像乌拉拉不会永远都是小孩子。',
        );
        await urara.print_and_wait([
          '与其继续考虑 ',
          callname,
          ' 的感受，不如乌拉拉去主动做些什么，就算被拒绝也没关系。',
        ]);
        await urara.print_and_wait(
          '接下来不管是好与坏，乌拉拉都要像大人一样拿出勇气来，既然大家能做到，那乌拉拉也没问题！',
        );
        await urara.print_and_wait([
          '还有不只是「恋人」的约定，乌拉拉还想要和 ',
          callname,
          '、想要和 ',
          you.actual_name,
          ' 约定更多的事——',
        ]);
        if (has_lover) {
          era.println();
          await urara.print_and_wait([
            '不过首先，不管 ',
            callname,
            ' 答不答应，乌拉拉都希望 ',
            callname,
            ' 能多分出些时间来才好。',
          ]);
          await urara.print_and_wait([
            '就算乌拉拉没办法很好的责怪 ',
            callname,
            '，只有这点还是能稍微装作生气的！',
          ]);
          await urara.print_and_wait([
            '只是 ',
            callname,
            ' 喜欢大家的理由，应该还是大家跑得更快吧？以后的训练也要更加努力才行……',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait([
            '因恋心而斗志高昂，',
            urara.teen_sex_title,
            '在心中拟定起未来的计划，并带着思索进入了梦乡。',
          ]);
          await inner_urara.say_as_unknown_and_wait(
            '今夜的乌拉拉，终于因拿出勇气而跨过了多虑而失眠的烦恼。',
          );
          await inner_urara.say_as_unknown_and_wait([
            '不管小',
            urara.uma_sex_title,
            '准备何时开始行动，即使稍显稚嫩，那也一定会是份合格的心意。',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '没错，现在还太早了，',
          callname,
          ' 肯定也不会答应。',
        ]);
        await urara.print_and_wait([
          '只是乌拉拉也没想到，有一天竟然会害怕被 ',
          callname,
          ' 拒绝。',
        ]);
        await urara.print_and_wait(
          '不是没有考虑过会被拒绝，而是害怕被拒绝后会怎样。',
        );
        await urara.print_and_wait([
          '在这样重要的事情上如果被拒绝了，乌拉拉还能和 ',
          callname,
          ' 维持现在的关系吗？',
        ]);
        await urara.print_and_wait([
          '那时候要怎办呢？干脆去求 ',
          callname,
          '，就算把乌拉拉变成宠物也不要丢掉乌拉拉？',
        ]);
        await urara.print_and_wait(
          '一想到如果真的被那样对待，身体的躁动又止不住了，乌拉拉真的变成糟糕的坏孩子了。',
        );
        await urara.say_and_wait([
          '还是先让身体冷静下来，明天还要早起……哈啊……',
          callname,
          '……',
        ]);
        await urara.print_and_wait([
          '过度的焦虑与藏起的自卑心被一同激发出来，',
          urara.teen_sex_title,
          '粗暴的将手伸向了焦躁的身体。',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait([
          '至少对小',
          urara.uma_sex_title,
          '来说，与 ',
          callname,
          ' 更进一步，以今夜的心理确实不够合适。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '唉，先不提 ',
          callname,
          ' 是否会那样对待乌拉拉，明明只要拿出勇气来就好了啊……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-2': (() => {
    const title = '不再迷茫的你';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await urara.say_and_wait([callname, '，这里已经什么都没有了啊。']);
      await era.printAndWait([
        '后来再次路过那次的婚礼现场时，顺着 ',
        urara.get_colored_name(),
        ' 的提醒，',
        you.get_colored_name(),
        ' 又一次透过栅栏向公园内望去。',
      ]);
      await era.printAndWait([
        '这一次，草坪上连有人来过的痕迹都消失的一干二净，只有 ',
        urara.get_colored_name(),
        ' 的轻声叹息还在 ',
        you.get_colored_name(),
        ' 的耳边回荡着。',
      ]);
      await era.printAndWait([
        '即使因为担当的过于娇小而没能观察到',
        urara.sex,
        '的眼睛，但从头顶一对失落的耳朵中依旧能看出',
        urara.sex,
        '的心绪。',
      ]);

      era.printButton('「乌拉拉，一起去里面看看吧。」', 1);
      await era.input();

      await urara.say_and_wait('诶？嗯……');
      await era.printAndWait([
        '在一惊之后是有些心不在焉的回答，',
        urara.get_colored_name(),
        ' 顺从地跟上了 ',
        you.get_colored_name(),
        ' 的步伐，一同绕过矮矮的栅栏。',
      ]);
      await era.printAndWait([
        '但尽管与 ',
        you.get_colored_name(),
        ' 一同站在目送那对新人的草地上，小',
        urara.uma_sex_title,
        '的尾巴却依旧兴趣缺缺的摇摆着。',
      ]);
      await era.printAndWait([
        '或许是还沉浸在着上次被拒绝时的伤心回忆中，',
        urara.get_colored_name(),
        ' 仿佛失去了一直以来的活力。',
      ]);
      await era.printAndWait([
        '理所当然的，毕竟不管再怎么美好，这里都是一位',
        urara.teen_sex_title,
        '抱有希望但被却爱人亲自拒绝的伤心地。',
      ]);
      await era.printAndWait([
        '这时的 ',
        urara.get_colored_name(),
        ' 或许还对那个等待的承诺抱有不安的怀疑吧，那时的 ',
        you.get_colored_name(),
        ' 还真是个差劲的大人。',
      ]);
      await era.printAndWait(
        '至少现在，是愚钝的大人该做出补偿，将担当内心的空洞重新填补的时候了。',
      );
      await era.printAndWait('明明还有很多话想说，但现在能说的，果然也只有——');

      era.printButton('主动牵起 乌拉拉 的手。', 1);
      await era.input();

      await urara.say_and_wait('……啊！');
      await era.printAndWait([
        '或许是两人习以为常的默契，又或是小',
        urara.uma_sex_title,
        '期待已久的感应，',
        urara.get_colored_name(),
        ' 瞪大眼睛，樱瞳从惊讶到惊喜。',
      ]);
      await era.printAndWait([
        '在接触的瞬间，',
        urara.get_colored_name(),
        ' 便有所察觉了，这不只是恋人间的活动，也是 ',
        you.get_colored_name(),
        ' 想要兑换约定的时刻。',
      ]);
      era.println();

      if (high_relation) {
        await urara.say_and_wait(
          '和想象中的不太一样呢，但是终于等到了，所以我也很满足哦？',
        );
        await era.printAndWait([
          '即刻间与 ',
          you.get_colored_name(),
          ' 的距离缩短为零，',
          urara.get_colored_name(),
          ' 天真中透着爱意的脸庞仿佛从未有过的接近。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 再取回了往日相伴时的幸福神情，此刻更仿佛是将要在相同的绿地戴上戒指的新娘一般。',
        ]);
        await era.printAndWait([
          '哪怕小小的',
          urara.sex,
          '既没有真正的纱裙，也没有众人的祝福，但如今的',
          urara.sex,
          '依旧能够成为恋人眼中的主角。',
        ]);
        await urara.say_and_wait([
          '如果 ',
          callname,
          ' 能更早一些就好了，所以为了补偿乌拉拉，接下来要一直在一起呦？',
        ]);
        await era.printAndWait([
          '面对 ',
          urara.get_colored_name(),
          ' 真挚的笑容，',
          you.get_colored_name(),
          ' 当然也给予了最明确的答案——',
        ]);
      } else {
        await urara.say_and_wait([
          '特意回到这里，',
          callname,
          ' 是不是太笨拙了，虽然这样的话不应由乌拉拉来说呢……',
        ]);
        await era.printAndWait([
          '极力隐藏着开心的情绪，',
          urara.get_colored_name(),
          ' 努力压下了自己亮起的眼眸，但却依旧无法下压跃动的耳朵和尾巴。',
        ]);
        await era.printAndWait([
          '站在清爽的绿地上，约定得以完成的 ',
          urara.get_colored_name(),
          ' 终于驱散了笑容中的阴霾。',
        ]);
        await era.printAndWait([
          '就算二人之间的爱意与相处的平衡依旧十分微妙，但此刻 ',
          urara.get_colored_name(),
          ' 的伴侣志愿依旧从未改变。',
        ]);
        await urara.say_and_wait([
          '总之这次真的想好了吧！不许再反悔了哦 ',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '而面对 ',
          urara.get_colored_name(),
          ' 半开玩笑的笑容，',
          you.get_colored_name(),
          ' 也回以了明确的答案——',
        ]);
      }
      if (has_lover) {
        era.println();
        await urara.say_and_wait([
          '这样的话，或许乌拉拉在那之后还会看到 ',
          callname,
          ' 对更多人讲出约定也说不定哦……',
        ]);
        await urara.say_and_wait([
          '没关系的，乌拉拉可以原谅 ',
          callname,
          ' 哦？因为乌拉拉也是 ',
          callname,
          ' 的妻子嘛！',
        ]);
        await era.printAndWait([
          '只是突然间的，牵着 ',
          you.get_colored_name(),
          ' 的手突然用上了',
          urara.uma_sex_title,
          '的力量，',
          urara.get_colored_name(),
          ' 的笑容中似乎多了份对宣誓权力的暗示。',
        ]);
        await urara.say_and_wait(
          '所以不管是怎样的先来后到，我都会好好叮嘱在训练时不听话的孩子哦？',
        );
      }
      era.printButton('「对不起，让 乌拉拉 久等了！」', 1);
      await era.input();

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('现在的您，已经没法回头了哦？');
    };
    f.title = title;
    return f;
  })(),
  '89-3': (() => {
    const title = (urara) => ['许下约定的', urara.sex];
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     * @param {boolean} has_lover 是否已经有热恋以上关系的队伍成员
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '那次路过婚礼现场，只是纯粹的偶然而已，但若想改变奔跑的轨迹，一次偶然也足矣。',
      );
      era.drawLine();
      await era.printAndWait([
        '与婚礼现场只有一栅之隔，记忆中的 ',
        you.get_colored_name(),
        ' 与',
        urara.uma_sex_title,
        '，在栅栏之外目送着一对新人穿过献上祝福的人群。',
      ]);
      await era.printAndWait([
        '像是在暗示什么，这对新人一位是娇小的',
        urara.uma_sex_title,
        '，另一位则是大',
        urara.sex,
        '许多的',
        you.phy_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '回忆中的 ',
        urara.get_colored_name(),
        ' 没有说话，只是清澈的樱瞳在注视中闪过了一丝憧憬。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 也到了寻求组建家庭的阶段。如此倒错的想法，绝不是一位正经大人应该想的。',
      ]);
      await era.printAndWait([
        '但也没办法，与小',
        urara.uma_sex_title,
        '成为了恋人的不是别人，正是',
        urara.sex,
        '的训练员。',
      ]);
      await era.printAndWait(
        '那么扪心自问一下，如果担当希望能与恋人在未来组建家庭，训练员准备又做好了吗？',
      );
      era.println();

      if (high_relation) {
        await urara.say_and_wait([callname, '，在想什么呢？']);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 不知何时转过头来，像往常一样发自内心的对 ',
          you.get_colored_name(),
          ' 笑着。',
        ]);
        await era.printAndWait([
          '或许 ',
          you.get_colored_name(),
          ' 们现在也和那对新人没什么区别吧？感受着恋人美好的笑容，',
          you.get_colored_name(),
          ' 如此肯定到。',
        ]);
        await era.printAndWait([
          '所以，现在的 ',
          urara.get_colored_name(),
          ' 恰好需要一个认真的承诺，不管',
          urara.sex,
          '是否被定义为「大人」。',
        ]);
      } else {
        await urara.say_and_wait([callname, '，有什么在意的事吗？']);
        await era.printAndWait([
          '收回目光 ',
          urara.get_colored_name(),
          ' 静静地看着 ',
          you.get_colored_name(),
          '，露出了有点无奈但依旧很开心的笑容。',
        ]);
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          '总露出与气氛不符的表情，但要说不知道为什么，恐怕连自己也不会信。',
        ]);
        await era.printAndWait([
          '但小',
          urara.uma_sex_title,
          '是感到憧憬还是不安，亦或是两者都有，只有这点 ',
          you.get_colored_name(),
          ' 现在无法确认。',
        ]);
      }
      era.println();

      await urara.say_and_wait([
        callname,
        '，有一天，乌拉拉也可以穿上白色的长裙吗？',
      ]);
      await era.printAndWait([
        '不等 ',
        you.get_colored_name(),
        ' 回答上一个问题，也不给予更多的思考时间，樱粉色的小恋人再次发问了。',
      ]);
      await urara.say_and_wait([
        '乌拉拉不会有更多的请求，但是 ',
        callname,
        '，乌拉拉的手现在还空着哦？',
      ]);
      await era.printAndWait([
        '没有直接看向 ',
        you.get_colored_name(),
        '，',
        urara.get_colored_name(),
        ' 继续隔着窄窄的围栏，如望向正在播放的未来般凝视着喧闹的结婚仪式。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 的小手正安静的等在身侧，哪怕上面既没有包裹白纱，也没有戴上闪亮的圆环。',
      ]);
      await era.printAndWait([
        urara.sex,
        '一定懂得这些东西，但小',
        urara.uma_sex_title,
        '想要的仍旧只有掌心的相触，以及勾起小指的约定。',
      ]);
      await era.printAndWait([
        '不管以后要面对什么，小小的',
        urara.sex,
        '都已经决心等待 ',
        you.get_colored_name(),
        ' 的回答。',
      ]);
      inner_urara.say_as_unknown(
        `面对依旧等待着训练员${you.adult_sex_title}（您）的乌拉拉，您的决定……`,
      );
      era.printButton('牵住乌拉拉的手。（升级关系）', 1);
      era.printButton('现在还没准备好。（暂不升级）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '与 ',
          urara.get_colored_name(),
          ' 的关系怎样了，',
          you.get_colored_name(),
          ' 早就知道这一点。',
        ]);
        await era.printAndWait([
          '不需要去考量什么，',
          you.get_colored_name(),
          ' 拉起了恋人的小手，',
          urara.get_colored_name(),
          ' 紧绷的耳朵也终于松口气般地放了下来。',
        ]);
        await era.printAndWait([
          '从简单的相合变为五指交叠，小',
          urara.uma_sex_title,
          '细嫩的手指有些羞涩的在 ',
          you.get_colored_name(),
          ' 的手掌之间蹭来蹭去。',
        ]);
        await era.printAndWait([
          '收到回应的 ',
          urara.get_colored_name(),
          ' 依旧没有说话，但娇羞的红晕此刻诚实的染红了',
          urara.sex,
          '的脸颊。',
        ]);
        await era.printAndWait(
          '抚摸着过于娇小的恋人的手，一直压在心底的背德感仿佛在呼吸之间就会倾泻而出。',
        );
        await era.printAndWait('只是一点承诺都没有，这样真的就好了吗？');
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            '原来是这样，身为大人不得不隐藏想法，可 ',
            callname,
            ' 的心里还是觉得对不住乌拉拉啊。',
          ]);
          await urara.say_and_wait([
            '不用担心哦？乌拉拉从一开始就不在意和 ',
            callname,
            ' 的差距，所以乌拉拉才能鼓起勇气主动提起那些事。',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' 还在对 ',
            you.get_colored_name(),
            ' 笑着，仿佛在用什么都懂一点的表情抚摸着 ',
            you.get_colored_name(),
            ' 内心的最深处。',
          ]);
          await urara.say_and_wait([
            '只要这样就可以了！',
            callname,
            ' 一直以来也很辛苦，所以乌拉拉什么都不需要哦？',
          ]);
          await urara.say_and_wait([
            callname,
            '，以后可以继续请多关照吗？虽然是要以更进一步的身份呦！',
          ]);
          await era.printAndWait([
            '随着婚礼钟声的敲响，樱粉色的笑容逐渐占满了 ',
            you.get_colored_name(),
            ' 的视线。',
          ]);
          await era.printAndWait(
            '原来如此，在看不见的地方，小乌拉拉早就已经做好与人相伴一生的准备了啊……',
          );
        } else {
          await urara.say_and_wait([
            '在担心什么呢 ',
            callname,
            '？明明已经什么事都做过了，是害怕乌拉拉反悔吗？',
          ]);
          await urara.say_and_wait([
            '才不会哦！乌拉拉知道 ',
            callname,
            ' 是个小气鬼，所以我要留在 ',
            callname,
            ' 身边自己寻找答案哦？',
          ]);
          await era.printAndWait([
            '仍然没有看向 ',
            you.get_colored_name(),
            '，',
            urara.get_colored_name(),
            ' 的目光透过栅栏望向天空，似乎在思考着生活尽头的事。',
          ]);
          await urara.say_and_wait([
            '而且就算是个那样的人，我也看得见 ',
            callname,
            ' 的付出，所以乌拉拉可以什么都不要。',
          ]);
          await urara.say_and_wait([
            '不过说句过分的话，乌拉拉觉得 ',
            callname,
            ' 拿不出什么像样的承诺哦？',
          ]);
          await era.printAndWait([
            '婚礼的钟声响起，小',
            urara.uma_sex_title,
            '以笑容转向了 ',
            you.get_colored_name(),
            '，脸上带着释然的爱意。',
          ]);
          await era.printAndWait([
            '就算知道',
            urara.sex,
            '的训练员是什么样的人，',
            urara.get_colored_name(),
            ' 也依旧愿意与其相伴吗……',
          ]);
        }
        era.println();
        await urara.say_and_wait([callname, '，稍微闭上眼睛吧！']);
        await era.printAndWait(
          '虽然有些因紧张而颤抖但不约而同的闭上眼睛，紧接着是与婚礼的主角们所平行的拥吻。',
        );
        await era.printAndWait(
          '或许总有一天，在被隔开的平行线之外的二人也能成为双人仪式的主角。',
        );
        await era.printAndWait(
          '即使未来是未知的，即使谁也没有许下承诺，即使幸福可能会变得稀缺。',
        );
        await era.printAndWait(
          '既然恋人互相拥有了决心，那亦只有牵着手一起向前的选择。',
        );
        if (has_lover) {
          era.println();
          await urara.say_and_wait([
            '不过 ',
            callname,
            ' 还真是贪心，虽然这也是乌拉拉的选择，但还是希望大家不会责备乌拉拉就好了。',
          ]);
          await urara.say_and_wait([
            '可是乌拉拉与 ',
            callname,
            ' 都已经做出选择了，已经来不及了呢……',
          ]);
          await era.printAndWait([
            '在亲热后俯在恋人的耳边，',
            urara.teen_sex_title,
            '的笑容似乎有些苦涩。',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait(
            '说的也是啊，你确实是个过分的人，不过还请稍微打起精神来吧，因为……',
          );
        } else {
          era.drawLine();
        }
        await inner_urara.say_as_unknown_and_wait('您已经没法回头了……');
      } else {
        await urara.say_and_wait(
          '现在还不行啊……没关系的，乌拉拉会继续等下去的！',
        );
        await era.printAndWait([
          '在焦急的等待无果后蜷缩起依旧空荡荡的手心，',
          urara.get_colored_name(),
          ' 自我安慰般地再次开口了。',
        ]);
        await urara.say_and_wait([
          '不过呢，如果有一天 ',
          callname,
          ' 想好了的话……一定要快点和乌拉拉说哦!',
        ]);
        await urara.say_and_wait(
          '因为乌拉拉，也是鼓起了好大的勇气才说出来的……',
        );
        await era.printAndWait([
          '没能看向最喜欢的 ',
          callname,
          '，甚至用阴影藏起了变红的樱瞳，',
          urara.get_colored_name(),
          ' 的笑容因声音的颤抖而变得悲伤。',
        ]);
        await urara.say_and_wait([
          '果然还是有点难受……乌拉拉、真的很想和 ',
          callname,
          '……',
        ]);
        await era.printAndWait('而后，就连强颜欢笑也逐渐变得破碎——');

        era.printButton(
          '「不要伤心，乌拉拉，并不是在说不可以，只是现在还不行。」',
          1,
        );
        await era.input();

        await urara.say_and_wait('……诶？');
        await era.printAndWait([
          '有些出乎意料地，',
          urara.get_colored_name(),
          ' 颤抖的声音停下了，红红的眼睛里透着些许疑惑。',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            '乌拉拉还以为 ',
            callname,
            ' 终于厌倦了，看来没那回事呢……',
          ]);
          await era.printAndWait([
            '连眼角的泪水都顾不上擦，小',
            urara.uma_sex_title,
            '一下就安心的贴到了 ',
            callname,
            ' 身上。',
          ]);
          await era.printAndWait([
            '安心地感受着恋人身上的气息，',
            urara.get_colored_name(),
            ' 逐渐平复了因害怕被嫌弃而失控的心绪。',
          ]);
        } else {
          await urara.say_and_wait([
            '原来 ',
            callname,
            ' 不是要抛弃乌拉拉吗？总觉得有点开心……',
          ]);
          await era.printAndWait([
            '偷偷抹掉了眼角的泪水，',
            urara.teen_sex_title,
            '小声说着不知道如何得出的结论。',
          ]);
          await era.printAndWait([
            '不过按照一直以来的相处节奏，或许 ',
            urara.get_colored_name(),
            ' 会得出这样的结论也并没那么意外……',
          ]);
        }
        era.printButton(
          '「所以就像乌拉拉说的那样，到合适的时候，我会第一时间告诉乌拉拉的！」',
          1,
        );
        await era.input();

        await urara.say_and_wait('那……约好了哦？');
        await era.printAndWait([
          '在一阵思索后，',
          urara.get_colored_name(),
          ' 笑着向 ',
          you.get_colored_name(),
          ' 伸出了小指。',
        ]);

        era.printButton('「约好了哦！」', 1);
        await era.input();

        await era.printAndWait(
          '随着小指的相叠，婚礼的现场也响起了庆祝的钟声，仿佛在庆祝两人许下了人生最重要的约定一般。',
        );
        await era.printAndWait([
          '有这样的祝福，与',
          urara.sex,
          '相约的日子，一定会很快到来吧？不过那一天会以怎样的形式到来呢……',
        ]);
        await urara.say_and_wait([
          '不过被 ',
          callname,
          ' 拒绝了，然后未来的日子里被 ',
          callname,
          ' 当做宠物，或许也……',
        ]);
        await urara.say_and_wait('不、不是，没、没什么哦？');
        await era.printAndWait([
          '看着假装自己什么都没说的 ',
          urara.get_colored_name(),
          '，总觉得相约的日子不知不觉中又变远了……',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '在这里停住了？！不……什么都没有……',
        );
        await inner_urara.say_as_unknown_and_wait(
          '不过，说起来……您为什么这么熟练啊？',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  90: (() => {
    const title = '不妥协的爱意';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的爱慕
     * @param {PrintedSpan|false} u_call_r 春乌拉拉对米浴的称呼，当米浴的爱慕值不足时为 false
     * @param {PrintedSpan|false} u_call_h 春乌拉拉对圣王光环的称呼，当圣王光环的爱慕值不足时为 false
     */
    const f = async (urara, inner_urara, you, callname, u_call_h, u_call_r) => {
      await inner_urara.say_as_unknown_and_wait('……唉，终究是变成这样了……');
      await inner_urara.say_as_unknown_and_wait(
        '只要有合适的土壤，被种下的种子就会生根发芽。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '不用担心，乌拉拉依旧是温柔的，只是被黑色缠绕的春色，在您眼中是否美丽呢？',
      );
      era.drawLine();
      await urara.say_and_wait([callname, '，你原来在这里等我啊！']);
      await era.printAndWait([
        '与平常充满活力不同，今天的 ',
        urara.get_colored_name(),
        ' 在来到 ',
        you.get_colored_name(),
        ' 身边后安静的坐在了长椅上的 ',
        you.get_colored_name(),
        ' 身边。',
      ]);
      await era.printAndWait([
        '而等 ',
        you.get_colored_name(),
        ' 刚想出声询问是不是发生了什么，却被静静微笑的小',
        urara.uma_sex_title,
        '用本格化的力量抓住了衣领。',
      ]);
      await era.printAndWait([
        '随后，',
        you.get_colored_name(),
        ' 感受到了唇齿相叠的温柔，也感受到担当细小柔软的舌尖不可思议的撬开了 ',
        you.get_colored_name(),
        ' 的防备，侵入了 ',
        you.get_colored_name(),
        ' 的口腔。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 大胆地探入着 ',
        you.get_colored_name(),
        ' 的身体，细嫩芬芳的舌尖温柔又强硬的拂过牙齿与舌苔，不断搅动起细微又粘稠的水声。',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') <= 10) {
        await era.printAndWait([
          '发生了什么？为什么要这样做？乌拉拉 ',
          urara.sex,
          '……',
        ]);
        await era.printAndWait([
          '无数个问题在 ',
          you.get_colored_name(),
          ' 眼前打转。眼前这抹袭击自己的樱粉色，真的是「',
          urara.get_colored_name(),
          '」吗？',
        ]);
        await era.printAndWait([
          '可不管 ',
          you.get_colored_name(),
          ' 怎么集中已经同口中的体液一起被混成浆糊的脑袋，现在也已经无法思考出问题的答案了。',
        ]);
        await era.printAndWait([
          '而依靠着这幅身体的本能压倒爱人的 ',
          urara.get_colored_name(),
          '，则心满意足的将全身贴了上去，让',
          urara.sex,
          '的存在继续深入着 ',
          you.get_colored_name(),
          ' 的一切。',
        ]);
      } else {
        await era.printAndWait([
          '在因氧气消耗而逐渐模糊的双眼中，绽放的樱瞳一直在过近的距离下占据着 ',
          you.get_colored_name(),
          ' 视野的全部。',
        ]);
        await era.printAndWait([
          '思考能力在小',
          urara.uma_sex_title,
          '绵软的攻势中瓦解了，逐渐被吸干力量的身体再也无力与自己的担当抗衡。',
        ]);
        await era.printAndWait(
          '仿佛是缺氧时产生的幻觉，带着以夺走一切为前提的气势压上来的小小担当眼中，流露出趋近狂乱的爱意。',
        );
      }
      era.println();

      await era.printAndWait([
        '在决定将',
        urara.sex,
        '的气息烙印在 ',
        you.get_colored_name(),
        ' 的身上之前，小小的',
        urara.uma_sex_title,
        '苦恼过很久，但乌拉拉最后还是理解了。',
      ]);
      await era.printAndWait(
        '信任这段感情也好，不信任这段感情也罢；信任爱人的人品也好，不信任爱人的人品也罢；',
      );
      await era.printAndWait([
        callname,
        ' 是人间之屑又如何？',
        callname,
        ' 是个色鬼又怎样？',
        callname,
        ' 只是想要占有 ',
        urara.get_colored_name(),
        ' 又有什么关系？',
      ]);
      await era.printAndWait([
        '那些事……与 ',
        urara.get_colored_name(),
        ' 强占身为好友的恋人的 ',
        callname,
        ' 的嘴唇，也没什么区别吧？',
      ]);
      await era.printAndWait([
        '小',
        urara.uma_sex_title,
        '终于从深吻中解放了自己的训练员，两人从互相紧抵的舌尖上拉出了一道恋恋不舍的丝线……',
      ]);
      await era.printAndWait([
        '看着 ',
        you.get_colored_name(),
        ' 茫然又有些喘不过气的表情，',
        urara.get_colored_name(),
        ' 露出了纯真中掺杂着一丝魅意的笑容。',
      ]);
      await urara.say_and_wait([
        '对不起哦 ',
        callname,
        '，但是现在的我是不会退让的……',
      ]);
      await era.printAndWait([
        '没有一丝歉意的声音从',
        urara.teen_sex_title,
        '的唇边低声路过，曾经令',
        urara.sex,
        '不齿的对好友的背叛如今竟变得不痛不痒。',
      ]);
      await urara.say_and_wait([
        '因为乌拉拉明白了，因为乌拉拉想起来了，这些都是 ',
        callname,
        ' 的错啊……',
      ]);
      era.println();
      if (u_call_r && u_call_h) {
        await inner_urara.say_as_unknown_and_wait([
          '训练员',
          you.adult_sex_title,
          '很贪心，明明已经拥有了乌拉拉最好的朋友，还想要连乌拉拉也拥有。',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '如果是以前还不懂的乌拉拉可能会更加难受吧，但现在的乌拉拉不在乎。',
        );
        await inner_urara.say_as_unknown_and_wait([
          '可现在的乌拉拉却对 ',
          callname,
          ' 露出了得意洋洋的表情，又是为什么呢？',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          '为什么训练员',
          you.adult_sex_title,
          '会在接受了 ',
          u_call_r ? u_call_r : u_call_h,
          ' 后，还能如此轻松的对待乌拉拉呢？',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '为什么在拥有了别人的爱后，还想要将乌拉拉也抱在怀中呢？',
        );
        await inner_urara.say_as_unknown_and_wait([
          '为什么乌拉拉明知道这一点，却还在笑着与这样的训练员',
          you.adult_sex_title,
          '相拥呢？',
        ]);
      }
      era.println();
      await urara.say_and_wait(
        ['因为 ', callname, ' 是个大骗子，而乌拉拉也爱上了这样的大骗子。'],
        true,
      );
      await urara.say_and_wait(
        [
          callname,
          ' 将不应给予的感情送给了乌拉拉，同样不管那是不是真品，明知不应收下却据为己有的乌拉拉都是同罪。',
        ],
        true,
      );
      await urara.say_and_wait(
        '乌拉拉要变成卑劣的大人？乌拉拉以后会变成卑劣的大人？乌拉拉觉得这不重要哦？',
        true,
      );
      await urara.say_and_wait(
        '像个小孩子的我是后来者又如何？就算大错特错，其他深陷其中的人又比这样的乌拉拉清白多少吗？',
        true,
      );
      await urara.say_and_wait([
        callname,
        ' 将我变成这个样子，所以也请 ',
        callname,
        ' 对乌拉拉好好负起责任吧……',
      ]);
      await era.printAndWait([
        '不等 ',
        you.get_colored_name(),
        ' 表达对这句话的疑惑，小小的担当便伸出了手，用细嫩的食指抵住了 ',
        you.get_colored_name(),
        ' 的嘴唇。',
      ]);
      await urara.say_and_wait(
        [
          '这句话的意思，不要来问乌拉拉哦？',
          callname,
          ' 的话，自己肯定能找答案吧？',
        ],
        true,
      );
      await urara.say_and_wait([
        '不要问哦 ',
        callname,
        '，现在的话，就先到这里吧……？',
      ]);
      await era.printAndWait([
        '伴随着',
        urara.teen_sex_title,
        '愈发浑浊的樱瞳，在不洁的爱意浇灌下，丑陋的种子绽放出了一朵妖艳而卑劣的花……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 的 ',
        {
          content: '口技巧',
          color: buff_colors[3],
        },
        ' 变得更加娴熟了……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '大人心房的钥匙';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {boolean} high_relation 是否为高好感度（不低于融洽且不处于三周循环内）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '钥匙是个方便的好东西，可以开启什么，也可以锁住什么。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '但一把钥匙，往往只能打开相配的锁。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `所以是要将钥匙亲手交给${urara.sex}，还是等${urara.sex}一点点偷走您的钥匙呢？`,
      );
      await inner_urara.say_as_unknown_and_wait('……嗯？好像区别也不大？');
      era.drawLine();

      await era.printAndWait([
        '看到坐在熟悉的地方安静沉睡的担当，',
        you.get_colored_name(),
        ' 适当的放慢了脚步。',
      ]);
      await era.printAndWait([
        '散开长发的小小',
        urara.uma_sex_title,
        '借着温暖的阳光，肆无忌惮地横躺在长椅上安静地沉睡着。',
      ]);
      await era.printAndWait([
        '最近又熬夜了？还是努力过头了？就算 ',
        you.get_colored_name(),
        ' 坐到',
        urara.sex,
        '身边，小',
        urara.uma_sex_title,
        '塌下的耳朵也没有要竖起的迹象。',
      ]);
      await era.printAndWait([
        '就像最初相遇时那样，哪怕不再纯洁，',
        urara.get_colored_name(),
        ' 依旧像还没长大的孩子般且毫无防备。',
      ]);
      await era.printAndWait([
        '可就算「小红帽」相信别人不会伤害',
        urara.sex,
        '，最亲近的训练员也早就被',
        urara.sex,
        '纯洁的诱惑变成「大灰狼」了。',
      ]);
      await era.printAndWait(
        '遮掩在整齐的校服下，尚未完全成熟的幼小身体实际早就觉醒了追寻快乐的本能。',
      );
      await era.printAndWait(
        '饱满圆润的樱唇随着呼吸起伏放松地微张着，仿佛是在等待着谁来品尝的熟成浆果。',
      );
      await era.printAndWait([
        '面对在朝夕相处中自由炫耀身体的「坏',
        urara.child_sex_title,
        '」，身为大人的理智也逐渐失去了控制。',
      ]);
      await era.printAndWait([
        '捉住了那对纤细的手腕，',
        you.get_colored_name(),
        ' 报复性的将 ',
        urara.get_colored_name(),
        ' 盖在身下，向诱人的',
        urara.sex,
        '逐渐压下身体。',
      ]);
      await urara.say_and_wait([
        '……',
        callname,
        '，虽然乌拉拉不介意，但在这里做的话，会被发现哦？',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '被 ',
          you.get_colored_name(),
          ' 压在长椅上的 ',
          urara.get_colored_name(),
          ' 不知何时已经醒了，但没有一点反抗，甚至顺从着 ',
          you.get_colored_name(),
          ' 再次眯起了眼睛。',
        ]);
        await urara.say_and_wait([
          '不过 ',
          callname,
          ' 很想要的话，乌拉拉的感受和身体全都不用在意哦？',
        ]);
        await era.printAndWait([
          '迷蒙的双眼因逐渐升温的身体湿润起来，散开樱发的',
          urara.sex,
          '散发着仿佛能接纳 ',
          you.get_colored_name(),
          ' 的一切的母性。',
        ]);
        await urara.say_and_wait([
          '现在的乌拉拉，随时欢迎 ',
          callname,
          ' 的全部哦？',
        ]);
      } else {
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          '紧张地注视着想要侵犯',
          urara.sex,
          '的 ',
          you.get_colored_name(),
          '，但仅象征性的挣扎后就将脸转向一侧，任 ',
          you.get_colored_name(),
          ' 摆弄着',
          urara.sex,
          '的身体。',
        ]);
        await urara.say_and_wait([
          '……没关系，不管做什么我都会忍住的，',
          callname,
          ' 要快一点哦？',
        ]);
        await era.printAndWait([
          '眼角因紧张变得湿润，但小小的',
          urara.uma_sex_title,
          '还是强迫身体做好了被粗暴侵犯的心理准备。',
        ]);
        await urara.say_and_wait('只是一次的话，什么都能接受哦？');
      }

      era.printButton('「！」', 1);
      await era.input();

      await era.printAndWait([
        '在 ',
        urara.get_colored_name(),
        ' 献身的低语中，企图将溢出的欲望施加在无辜恋人身上的 ',
        you.get_colored_name(),
        ' 反而找回了一些理智。',
      ]);
      await era.printAndWait([
        '只是在 ',
        you.get_colored_name(),
        ' 犹豫着要跟担当说什么时，',
        urara.get_colored_name(),
        ' 却在发现 ',
        you.get_colored_name(),
        ' 的迟疑后安心地轻笑起来。',
      ]);
      await urara.say_and_wait([
        '恢复精神了吗 ',
        callname,
        '？最近又累了吧？乌拉拉真的不要紧呦！',
      ]);
      await era.printAndWait([
        '没有接过 ',
        you.get_colored_name(),
        ' 的沉默，维持着被恋人压倒的样子，',
        urara.get_colored_name(),
        ' 寂寞地说起了看似无关的话题。',
      ]);
      await urara.say_and_wait([
        '虽然乌拉拉还没有好好成为大人，但 ',
        callname,
        ' 可以将『大人的钥匙』交给乌拉拉吗？',
      ]);

      era.printButton('「『大人的钥匙』？」', 1);
      await era.input();

      await urara.say_and_wait([
        '嗯！因为最近有位与自己的训练员没那么亲近的同学，竟然拿到训练员的钥匙了。',
      ]);
      await urara.say_and_wait([
        '可就在乌拉拉也觉得惊奇的时候，',
        urara.sex,
        '却对乌拉拉说了意想不到的话——',
      ]);
      await urara.say_and_wait(
        '『和训练员要好的乌拉拉竟然没得到邀请吗？看来乌拉拉还在被当成小孩子呢！』',
      );
      await era.printAndWait([
        '短暂的一顿，小',
        urara.uma_sex_title,
        '的笑容中竟融进了与稚嫩的脸庞所不符的复杂情感。',
      ]);
      await urara.say_and_wait([
        '所以乌拉拉在想啊，是不是直到现在，乌拉拉都还在被 ',
        callname,
        ' 当成小孩子？',
      ]);
      await urara.say_and_wait([
        '最喜欢 ',
        callname,
        ' 的乌拉拉，什么时候才能被 ',
        callname,
        ' 迎进房间里？',
      ]);
      await urara.say_and_wait(['还是就算被 ', callname, ' 压倒，乌拉拉也……']);
      await era.printAndWait([
        '凝视着',
        urara.teen_sex_title,
        '变得焦急又伤感的眼神，',
        you.get_colored_name(),
        ' 终于理解了 ',
        urara.get_colored_name(),
        ' 想要表达的前因后果。',
      ]);
      await era.printAndWait([
        '体能超群的',
        urara.uma_sex_title,
        '们不会被区区门窗所阻拦，从对方那里拿到的物件对',
        urara.couple_title,
        '来说也更多的是象征意义。',
      ]);
      await era.printAndWait([
        '但即使能够无需承担后果的行动，',
        urara.get_colored_name(),
        ' 也想要尊重 ',
        you.get_colored_name(),
        ' 的选择。',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '一直等待着最喜欢的 ',
        callname,
        ' 主动邀请',
        urara.sex,
        '的那一天，而现在 ',
        you.get_colored_name(),
        ' 已经让',
        urara.sex,
        '等得太久了。',
      ]);

      inner_urara.say_as_unknown(
        `此时此刻，钥匙就在训练员${you.adult_sex_title}自己手中——`,
      );
      era.printButton(
        '「对不起忘记了重要的事，让乌拉拉久等了……」（好感+10）',
        1,
      );
      era.printButton('「当然没那回事，只是现在还不是时候……」', 2);
      const ret = await era.input();

      await era.printAndWait([
        '只是在 ',
        you.get_colored_name(),
        ' 还没说出口，',
        urara.get_colored_name(),
        ' 就探出身子，用肌肤相亲堵住了 ',
        you.get_colored_name(),
        ' 的答案。',
      ]);
      await era.printAndWait([
        '没有撬开 ',
        you.get_colored_name(),
        ' 的牙齿，也没有挣脱 ',
        you.get_colored_name(),
        ' 的双手，只是简单的双唇交叠，',
        urara.get_colored_name(),
        ' 就拦住了 ',
        you.get_colored_name(),
        ' 全部的退路。',
      ]);
      await era.printAndWait([
        '明明只过了几秒的亲热却仿佛延长了几个世纪，而 ',
        you.get_colored_name(),
        ' 在这漫长的一瞬中也放开了 ',
        urara.get_colored_name(),
        ' 的身体。',
      ]);
      await era.printAndWait([
        '随着两人略带余韵的缓缓分开，钥匙也在不知不觉中被 ',
        you.get_colored_name(),
        ' 拿在了手中。',
      ]);
      await era.printAndWait([
        '在短暂的沉默后，与 ',
        urara.get_colored_name(),
        ' 交换了心意的 ',
        you.get_colored_name(),
        ' 终于下定决心，将钥匙推到了 ',
        urara.get_colored_name(),
        ' 面前。',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(['——谢谢 ', callname, '！']);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 递出钥匙的瞬间，',
          urara.get_colored_name(),
          ' 也心照不宣的与 ',
          you.get_colored_name(),
          ' 同时伸出了手。',
        ]);
        await era.printAndWait([
          '笑着接过 ',
          you.get_colored_name(),
          ' 的钥匙，小',
          urara.uma_sex_title,
          '像攥着宝物般紧紧地攥着一把普通到不能再普通的钥匙。',
        ]);
        await era.printAndWait([
          '看着露出欣喜的表情的 ',
          urara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 也放松下来，伸手摸了摸小',
          urara.uma_sex_title,
          '散开的发丝。',
        ]);
        await era.printAndWait(
          '或许在未来的某一天，在清晨就能看到在厨房忙碌的樱粉色也说不定；',
        );
        await era.printAndWait(
          '或许在未来的某一天，归家后就能看到来迎接自己的樱粉色也说不定……',
        );
        await era.printAndWait([
          '确实是个很美好的未来没错，现在唯一的遗憾，也只有 ',
          you.get_colored_name(),
          ' 并不确定家门的备用钥匙还在不在原处……',
        ]);
        await urara.say_and_wait([
          '诶嘿嘿～而且这样就能也向大家炫耀一下了！而且 ',
          callname,
          ' 的房间里一定也有很多很棒的东西吧！',
        ]);
        await era.printAndWait('哎，原来还有这层目的在里面吗？');
        await era.printAndWait([
          '在后来的日子里，',
          you.get_colored_name(),
          ' 似乎也因为将钥匙交给 ',
          urara.get_colored_name(),
          ' 的事情被很多人指指点点了。',
        ]);
        await era.printAndWait('至于缘由……放在心里就好吧。');
      } else {
        await urara.say_and_wait([
          callname,
          ' 也有 ',
          callname,
          ' 的考虑，乌拉拉明白的！不过以后要多陪陪乌拉拉哦？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 笑着推开了 ',
          you.get_colored_name(),
          ' 递来的钥匙，小手也攀上了 ',
          you.get_colored_name(),
          ' 变得略显失落的脸。',
        ]);
        await urara.say_and_wait(['而且呢，', callname, ' 还是笑起来更好看！']);
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          '还是接受了最初那个被 ',
          callname,
          ' 拒绝的结果，笑着重新扎起了马尾。',
        ]);
        await urara.say_and_wait('接下来一起去训练吧！今天要做什么呢？');
        await era.printAndWait([
          '即使被重要的人拒绝了，',
          urara.get_colored_name(),
          ' 却还在一如既往的笑着，想要让喜欢的人不必为',
          urara.sex,
          '感到担心。',
        ]);
        await era.printAndWait(
          '不管怎样，即使未来一定还有机会，两位对彼此都无比重要的人又错过了更加贴近心灵的机会。',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' 独自扎起头发的背景，看上去也有些过于落寞了……',
        ]);
        await era.printAndWait([
          '理所当然的，在后来的日子里，',
          you.get_colored_name(),
          ' 因为 ',
          urara.get_colored_name(),
          ' 总是郁郁寡欢的样子被很多人询问了。',
        ]);
        await era.printAndWait('至于缘由……在那时候如果能更直率一点就好了吧？');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  101: (() => {
    const title = '独占力';
    /**
     * @param {CharaTalk} urara 春乌拉拉
     * @param {CharaTalk} inner_urara 「春乌拉拉」
     * @param {CharaTalk} you 玩家
     * @param {string} callname 春乌拉拉对玩家的称呼
     * @param {string} self_name 春乌拉拉的自称
     */
    const f = async (urara, inner_urara, you, callname, self_name) => {
      await inner_urara.say_as_unknown_and_wait(
        '小乌拉拉也是会嫉妒的，就是那么回事。',
      );
      era.drawLine();
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 来到训练场入口时，意外地被突然冲过来的 ',
        urara.get_colored_name(),
        ' 撞了个满怀。',
      ]);
      await urara.say_and_wait([
        '今天也来陪我一起吧！只要 ',
        callname,
        ' 想的话我们做什么都可以哦？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' 从正面用双臂紧紧地捉住了 ',
        you.get_colored_name(),
        '，使 ',
        you.get_colored_name(),
        ' 完全失去了移开视线溜走的机会。',
      ]);
      await era.printAndWait([
        '而现在还没搞清楚状况的 ',
        you.get_colored_name(),
        '，也只能这样略带紧张地迎向 ',
        urara.get_colored_name(),
        ' 的笑脸。',
      ]);
      await urara.say_and_wait(['所以说，今天再多陪 ', self_name, ' 一会吧！']);
      await era.printAndWait([
        '并没有给 ',
        you.get_colored_name(),
        ' 回话的机会，',
        urara.get_colored_name(),
        ' 带着缺了些真实感的笑容单方面结束了对话。',
      ]);
      await era.printAndWait([
        '随后，',
        urara.get_colored_name(),
        ' 用出乎意料的力道半拖着 ',
        you.get_colored_name(),
        ' 离开了训练场。',
      ]);
      await era.printAndWait([
        '是太寂寞了吗？不过 ',
        urara.get_colored_name(),
        ' 出现在这里……应该只是偶然吧？',
      ]);
      await era.printAndWait([
        '至少比起无法想象的被 乌拉拉 提前蹲守，',
        you.get_colored_name(),
        ' 更愿如此相信。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
