/**
 * @file 待兼福来 - 调教
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const NormalCommandLines = require('#/event/ero/common-lines/normal/normal-common');
const SleepCommandLines = require('#/event/ero/common-lines/sleep/sleep-common');
const CustomizedEro = require('#/event/ero/ero-common');
const KitaruNormalCommunications = require('#/event/ero/ero-lines-56/normal-communications');
const KitaruNormalFucking = require('#/event/ero/ero-lines-56/normal-fucking');
const KitaruNormalMakingOuts = require('#/event/ero/ero-lines-56/normal-making-outs');
const KitaruNormalSm = require('#/event/ero/ero-lines-56/normal-sm');
const KitaruSleepFucking = require('#/event/ero/ero-lines-56/sleep-fucking');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { mark_enum } = require('#/data/ero/mark-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const { location_enum } = require('#/data/locations');

class KitaruNormalLines extends NormalCommandLines {
  constructor(root) {
    super(root, { communications: true });
    this.communications = new KitaruNormalCommunications(this);
    this.making_outs = new KitaruNormalMakingOuts(this);
    this.fucking = new KitaruNormalFucking(this);
    this.sm = new KitaruNormalSm(this);
  }
}

class KitaruSleepLines extends SleepCommandLines {
  constructor(root) {
    super(root, { fucking: true });
    this.fucking = new KitaruSleepFucking(this);
  }
}

module.exports = class extends CustomizedEro {
  constructor(chara_id) {
    super(chara_id, { normal: true, sleep: true });
    this.normal = new KitaruNormalLines(this);
    this.sleep = new KitaruSleepLines(this);
  }

  async ero_start() {
    const kitaru = get_chara_talk(56),
      me = get_chara_talk(0),
      relation = era.get('relation:56:0'),
      callname = sys_get_callname(56, 0);
    if (era.get('tflag:强奸') >= 0 || !sys_check_awake(56)) {
      return;
    }
    if (era.get('status:56:马跳Z') || era.get('status:56:超马跳Z')) {
      await kitaru.say_and_wait(['我的身体……好热啊……']);
      await era.printAndWait([
        '尽力试着自控的 ',
        kitaru.get_colored_name(),
        ' 抱膝缩在角落，粉嫩的锁骨泛着发情的绯红。',
      ]);
      await kitaru.say_and_wait(['哈啊❤️～哈❤️']);
      await era.printAndWait([
        '张开的双唇将香舌暴露在空中，翕动的鼻尖不断吸入着 ',
        me.get_colored_name(),
        ' 的气味。',
      ]);
      await kitaru.say_and_wait(['想要❤️想要❤️想要❤️想要❤️']);
      await era.printAndWait([
        '终于，无法抗拒药性的 ',
        kitaru.get_colored_name(),
        ' 踉踉跄跄的站了起来，衣物一件接着一件落在地上。',
      ]);
      if (kitaru.sex_code - 1) {
        await era.printAndWait([
          '那对奶白色的团子压在了 ',
          me.get_colored_name(),
          ' 的身上，隔着衣服也能感受到 ',
          kitaru.get_colored_name(),
          ' 的硬邦邦乳尖，炽热的吐息从耳畔传来。',
        ]);
      }
      await kitaru.say_and_wait([
        '已经……极限了，',
        sys_get_colored_callname(56, 0),
        '，来吃掉我吧。',
      ]);
    } else if (era.get('status:56:发情')) {
      await kitaru.say_and_wait(['来做吧？']);
      await kitaru.say_and_wait(['明明……哈❤️好热啊……']);
      await era.printAndWait([
        '由于发情期而变得主动的 ',
        kitaru.get_colored_name(),
        '，自顾自的脱起了汗湿的衣服。',
      ]);
      await era.printAndWait([
        '红润的嘴唇不停半张半合，吐出白雾般的一股股雾气，让催情的荷尔蒙充斥着整个房间。',
      ]);
      await kitaru.say_and_wait(['好热啊……']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 主动褪去衣物, 含着娇媚气息的体液不断的流下来, 啪嗒啪嗒地落在木地板上。',
      ]);
      await era.printAndWait([
        '随后目光涣散的软倒在了 ',
        me.get_colored_name(),
        ' 的怀里, 栗色的马尾也缠上了 ',
        me.get_colored_name(),
        ' 的大腿',
      ]);
      await kitaru.say_and_wait([
        '帮帮我吧……',
        sys_get_colored_callname(56, 0),
        '。',
      ]);
    } else if (era.get('flag:当前位置') === location_enum.restroom) {
      if (relation < 400) {
        await kitaru.say_and_wait(['唔……那个，', callname, '？']);
        await era.printAndWait([
          '被 ',
          me.get_colored_name(),
          ' 强硬抱在怀里的 ',
          kitaru.get_colored_name(),
          '，轻轻颤抖着，不过耳朵倒是好懂地一摆一摆的。',
        ]);
        await kitaru.say_and_wait([
          '要在这里做吗……万一被风纪委员',
          kitaru.sex,
          '们发现的话？',
        ]);
        await kitaru.say_and_wait(['咕唔！啾❤️……啾啊❤️']);
        await era.printAndWait([
          '回答 ',
          kitaru.get_colored_name(),
          ' 的是 ',
          me.get_colored_name(),
          ' 的嘴唇。',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '手也不安分的伸进了自己担当的裙子里，揉捏着两腿间的软肉，直到把',
            kitaru.sex,
            '的内裤也弄的湿漉漉的。',
          ]);
        }
        await era.printAndWait([
          '被勾起了情欲的 ',
          kitaru.get_colored_name(),
          ' 眼角含泪的靠在了 ',
          me.get_colored_name(),
          ' 的怀里。',
        ]);
        await kitaru.say_and_wait([
          '快点开始吧……',
          sys_get_colored_callname(56, 0),
          ' ❤️',
        ]);
      } else {
        await era.printAndWait([
          '对上了 ',
          me.get_colored_name(),
          ' 目光的 ',
          kitaru.get_colored_name(),
          ' 像是突然明白了什么，栗色的尾巴也停止了摆动',
        ]);
        await kitaru.say_and_wait(['是……想要做了吗？']);
        await kitaru.say_and_wait(['用那个眼神，不用占卜也能猜到啦！']);
        await kitaru.say_and_wait(['唔, 明明还在学校里呢, 要是被发现的话……']);
        await era.printAndWait(['咚！']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '嘴上抱怨着, 但是校服的裙子却跌落在了地面，然后又是同样代表着上衣被脱下的闷声……最后, 随着运动内衣的褪下，原本被裹住的乳球一下子跳了出来。',
          ]);
          await era.printAndWait([
            '在那对多了层粉色的丰盈乳房上，乳尖因期待而充血挺立着。',
          ]);
        }
        await kitaru.say_and_wait(['哈啊❤️～哈❤️……']);
        await era.printAndWait([
          '双臂轻轻的环住了 ',
          me.get_colored_name(),
          ' 的脖子, ',
          kitaru.get_colored_name(),
          ' 用变得湿润的星星瞳望向 ',
          me.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait([
          sys_get_colored_callname(56, 0),
          '……让我变得舒服起来吧',
        ]);
      }
    } else if (era.get('flag:当前位置') === location_enum.home) {
      if (relation < 400) {
        await era.printAndWait([
          '从背后靠近正研究着如何在 ',
          me.get_colored_name(),
          ' 家里摆放开运物品的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait(['呀啊……']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '双手伸进 ',
            kitaru.get_colored_name(),
            ' 的衣服里，掠过那对饱满的乳肉，让橙发少女小声的抗议着。',
          ]);
          await kitaru.say_and_wait(['至少，先让我把这个放好吧……']);
          await era.printAndWait([
            '但不安分的手继续向下探去，隔着肚皮轻轻按压着 ',
            kitaru.get_colored_name(),
            ' 正渴求着更多刺激的子宫。',
          ]);
        }
        await era.printAndWait([
          '于是 ',
          kitaru.get_colored_name(),
          ' 便会下意识后退，让自己的臀缝隔着裤子主动的顶上了 ',
          me.get_colored_name(),
          ' 的肉棒。',
        ]);
        await kitaru.say_and_wait(['……硬邦邦的。']);
        await kitaru.say_and_wait(['要现在做吗？']);
        await kitaru.say_and_wait([
          '感觉 ',
          sys_get_colored_callname(56, 0),
          ' 也忍的很辛苦呢……',
        ]);
      } else {
        await era.printAndWait([
          '从背后搂住正研究着如何在 ',
          me.get_colored_name(),
          ' 家里摆放开运物品的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait(['唔呵呵！！！']);
        await kitaru.say_and_wait([
          callname,
          ' 是打算对我做什么呢……唔～❤️啾～❤️',
        ]);
        await era.printAndWait([
          '早有预料般地侧过头来，仰头堵上了 ',
          me.get_colored_name(),
          ' 的嘴唇。',
        ]);
        await era.printAndWait([
          '二人的唇齿舌立即激烈地纠缠在一起，发出令空气不忍直视的淫靡水声。',
        ]);
        await kitaru.say_and_wait(['唔～❤️……啾啊❤️～啾……嗯❤️']);
        await era.printAndWait([
          '突然，',
          kitaru.get_colored_name(),
          ' 扣住了 ',
          me.get_colored_name(),
          ' 的手，引着 ',
          me.get_colored_name(),
          ' 摸向了',
          kitaru.sex,
          '的两腿间，顺带着扯下了内裤。',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '连大腿根部都有泛着光泽的水渍，肉眼可见的湿透了，',
          ]);
        }
        await kitaru.say_and_wait(['嗯……反正已经写了外宿申请的，所以～❤️']);
        await kitaru.say_and_wait(['让我……变得更加舒服吧～❤️']);
      }
    } else if (
      era.get('love:56') >= 50 &&
      era.get('flag:当前位置') !== location_enum.home
    ) {
      await kitaru.say_and_wait([callname, '，要做了吗？']);
      await era.printAndWait([
        '被 ',
        me.get_colored_name(),
        ' 搂在怀里的 ',
        kitaru.get_colored_name(),
        ' 红着脸说道，马耳一摆一摆的拍在你的脸上。',
      ]);
      await me.say_and_wait(['讨厌了吗？']);
      await kitaru.say_and_wait([
        '欸！并没有！！！绝对，绝对不会讨厌 ',
        me.get_colored_name(),
        ' 的！',
      ]);
      await era.printAndWait([
        '轻轻地摸了',
        kitaru.sex,
        '的脸、拍了拍',
        kitaru.sex,
        '的头发，让因害怕被 ',
        me.get_colored_name(),
        ' 抛弃的 ',
        kitaru.get_colored_name(),
        ' 冷静了下来。',
      ]);
      await me.say_and_wait(['……要吃掉你了哦']);
      await era.printAndWait([
        '软倒在了 ',
        me.get_colored_name(),
        ' 怀里的 ',
        kitaru.get_colored_name(),
        ' 眼神湿润地着看着 ',
        me.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait(['嗯……']);
      await kitaru.say_and_wait([
        '……请 ',
        sys_get_colored_callname(56, 0),
        ' 随意地开动吧。',
      ]);
    }
  }

  async orgasm(kitaru, me) {
    if (!era.get('tflag:主导权')) {
      switch (era.get('tflag:前回行动')) {
        case ero_hooks.standing:
          if (era.get('nowex:56:阴道高潮') > 0) {
            if (
              era.get('nowex:0:阴茎高潮') > 0 &&
              era.get('nowex:56:膣内精液') > 0
            ) {
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 能感到在体内横冲直撞的肉棒也一跳一跳的做好了发射的准备。',
              ]);
              await era.printAndWait([
                '箍紧正双眼上翻的 ',
                kitaru.get_colored_name(),
                ' 的腰臀，肉棒抵着因发情而下垂的子宫灌射着精液，腔内的穴肉也吮吸般刺激着龟头。',
              ]);
              await kitaru.say_and_wait('～唔呃嗯嗯嗯嗯嗯！！！');
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 原本充满元气的脸庞双眼翻白，唇瓣此刻大大的张开着，吐出那软嫩的香舌。',
              ]);
              await era.printAndWait([
                '浓郁的白精的自交合处滴答滴答落在了地上。',
              ]);
            } else {
              await kitaru.print_and_wait(['咕齁齁齁齁～！！！']);
              await era.printAndWait([
                '达到了高潮的 ',
                kitaru.get_colored_name(),
                '，痉挛的趾尖连维持平衡都做不到。',
              ]);
              await era.printAndWait([
                '只得进一步抱住了还在不断抽送着肉棒的 ',
                me.get_colored_name(),
                ' 喉咙中低吟着如同求饶般的呜呜声。',
              ]);
            }
          }
          break;
        case ero_hooks.hug_standing:
          if (era.get('nowex:56:阴道高潮') > 0) {
            if (
              era.get('nowex:0:阴茎高潮') > 0 &&
              era.get('nowex:56:膣内精液') > 0
            ) {
              await era.printAndWait([
                '发射边缘的肉棒完全拔出，而后微微抬起那对肉臀，调整角度。',
              ]);
              await era.printAndWait([
                '肉棒长驱直入的碾过布满褶皱的穴壁，抵住 ',
                kitaru.get_colored_name(),
                ' 的宫颈，倾吐起精液。',
              ]);
              await kitaru.say_and_wait('～～唔咕哦，好烫……好……厉害……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 柔美的身体，几乎被 ',
                me.get_colored_name(),
                ' 拉拽成一个弓形，头部高高扬起，而后靠在了 ',
                me.get_colored_name(),
                ' 的怀中，被挤压而流出的精液顺着大腿流下，弄的下垂的栗色马尾上也沾了不少。',
              ]);
            } else {
              await kitaru.print_and_wait(['呀……呀啊❤️']);
              await era.printAndWait([
                '不受控制的弓起身子，仰起了天鹅般的白皙脖颈，向后靠在你的怀中。',
              ]);
              await era.printAndWait([
                '被挤压而流出的爱液顺着大腿流下，弄的栗色马尾也多了不少湿漉漉的深色痕迹。',
              ]);
            }
          }
      }
    }
  }

  async get_mark(level, type, _new) {
    if (!sys_check_awake(56)) {
      return await super.get_mark(level, type, _new);
    }
    const callname = sys_get_callname(56, 0),
      kitaru = get_chara_talk(56),
      me = get_chara_talk(0),
      love = era.get('love:56');
    switch (type) {
      case mark_enum.pleasure:
        if (kitaru.sex_code === 1) {
          return await super.get_mark(level, type, _new);
        }
        switch (level) {
          case 1:
            if (love >= 75) {
              await kitaru.say_and_wait('呀啊！！！');
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 移开了视线，在 ',
                me.get_colored_name(),
                ' 询问能否继续时点了点头。',
              ]);
              await era.printAndWait(
                '配合着扭起腰，品味着自己一人时无法体验到的快感。',
              );
            } else {
              await kitaru.say_and_wait('唔唔！哈啊哈啊……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 歪着头沉思了一会。',
              ]);
              await kitaru.say_and_wait('为什么……好舒服。');
            }
            break;
          case 2:
            if (love >= 75) {
              await kitaru.say_and_wait([
                '哈啊啊！！！',
                me.get_colored_actual_name(),
              ]);
              await era.printAndWait([
                '在高潮中大声的叫出了 ',
                me.get_colored_name(),
                ' 的名字，平日偶尔能在 ',
                kitaru.get_colored_name(),
                ' 身上感受到少许来自其为巫女的圣洁。',
              ]);
              await era.printAndWait('此刻彻底荡然无存。');
            } else {
              await kitaru.say_and_wait('哈……快！快点！');
              await era.printAndWait([
                '尽管因为激烈绝顶而颤抖不止，逐渐被快感支配的 ',
                kitaru.get_colored_name(),
                ' 对 ',
                me.get_colored_name(),
                ' 发出了继续袭击的请求。',
              ]);
            }
            break;
          case 3:
            if (love >= 75 || !get_penis_size(0)) {
              await kitaru.say_and_wait('肉棒……再激烈些……肉棒大人！！！');
              await era.printAndWait([
                '随着性爱带来的快感逐步覆写完 ',
                kitaru.get_colored_name(),
                ' 的意识。',
              ]);
              await era.printAndWait([
                kitaru.get_uma_sex_title(),
                '口中嚷嚷着的淫语，说明了白兴大人的彻底失败。',
              ]);
            } else {
              await kitaru.say_and_wait('唔啊啊！！！');
              await era.printAndWait([
                '被绝顶支配的 ',
                kitaru.get_colored_name(),
                ' 失神望着不知待在哪里的神明。',
              ]);
              await era.printAndWait([
                '从嘴里模糊不清的恳求来看，身体完全屈服的',
                kitaru.sex,
                '此时的祈祷对象已经变成了给',
                kitaru.sex,
                '带来如此快感的 ',
                me.get_colored_name(),
                ' 了。',
              ]);
            }
        }
        break;
      case mark_enum.meek:
        switch (level) {
          case 1:
            era.println();
            await kitaru.say_and_wait('咿啊～！');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 靠在了 ',
              me.get_colored_name(),
              ' 的身上，任凭摆布。',
            ]);
            await era.printAndWait('面泛春光，娇躯一颤一颤地跳动着。');
            break;
          case 2:
            era.println();
            await kitaru.say_and_wait('呀！！！');
            await kitaru.say_and_wait('不，没事～命定之人请继续吧！');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 那蒙上了层水雾的橙色双眸注视着 ',
              me.get_colored_name(),
              '。',
            ]);
            await era.printAndWait([
              '偶尔触碰到',
              kitaru.sex,
              '的敏感带时，',
              kitaru.sex,
              '便会配合发出可爱的叫声。',
            ]);
            break;
          case 3:
            await era.printAndWait([
              '闭上了眼睛的 ',
              kitaru.get_colored_name(),
              ' 将手臂环在 ',
              me.get_colored_name(),
              ' 的脖子上，而后稍稍踮起了脚尖，让双唇贴着 ',
              me.get_colored_name(),
              ' 的耳朵。',
            ]);
            await kitaru.say_and_wait('主人……');
            await kitaru.say_and_wait('嘿嘿，命定之人喜欢这个称呼吗？');
            await kitaru.say_and_wait('那么，主人接下来把小福玩坏也没事哦！');
            break;
        }
        break;
      case mark_enum.pain:
        switch (level) {
          case 1:
            if (love >= 75) {
              await kitaru.say_and_wait('哈啊！好疼！！！');
              await kitaru.say_and_wait('没关系的……');
              await kitaru.say_and_wait('只是希望能再温柔一点……');
            } else {
              await kitaru.say_and_wait('呜……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 的表情因为疼痛而变得扭曲，但',
                kitaru.sex,
                '只是尽力咬紧牙关，漏出些许悲鸣。',
              ]);
            }
            break;
          case 2:
            if (love >= 75) {
              era.println();
              await kitaru.say_and_wait('咿啊～！？');
              await kitaru.say_and_wait(
                '我是有些抖M啦……但这实在有些过分了吧！？',
              );
            } else {
              await kitaru.say_and_wait('咿啊～！？');
              await kitaru.say_and_wait('白兴大人……救救我……');
            }
            break;
          case 3:
            if (love >= 75) {
              await kitaru.say_and_wait('不要！不要啊！！！');
              await kitaru.say_and_wait('我不想……我不想命定之人变成这样子……');
              await era.printAndWait([
                kitaru.get_colored_name(),
                ' 的身体因为疼痛而颤抖不止，眼泪啪嗒啪嗒的滴落下来。',
              ]);
            } else {
              await kitaru.say_and_wait('……');
              await era.printAndWait([
                '如人偶般任凭 ',
                me.get_colored_name(),
                ' 的摆布，这位名叫 ',
                kitaru.get_colored_name(),
                ' 的赛',
                kitaru.get_uma_sex_title(),
                '正再次尝试将自己的记忆封闭起来。',
              ]);
            }
        }
        break;
      case mark_enum.shame:
        switch (level) {
          case 1:
            await kitaru.say_and_wait('呜……请，请继续吧……');
            await era.printAndWait([
              '欢爱过程中的 ',
              kitaru.get_colored_name(),
              ' 试图用手蒙住自己的眼睛，看来',
              kitaru.sex,
              '对这样的行为还是有点害羞。',
            ]);
            break;
          case 2:
            await kitaru.say_and_wait('唔……还是有点害羞……');
            await kitaru.say_and_wait('要是被白兴大人看到话。');
            break;
          case 3:
            await kitaru.say_and_wait('啊啊啊，无所谓了……');
            await era.printAndWait([
              '自暴自弃般地说出了这番话，',
              kitaru.get_colored_name(),
              ' 索性配合起 ',
              me.get_colored_name(),
              ' 愈发大胆的动作来。',
            ]);
            await kitaru.say_and_wait('我……真是败廉耻的行为。');
        }
        break;
      case mark_enum.hate:
        switch (level) {
          case 1:
            if (love >= 75) {
              await kitaru.say_and_wait([
                '这，这就是 ',
                callname,
                ' 喜欢的吗？',
              ]);
              await kitaru.say_and_wait('稍稍有点过分了呢……');
            } else {
              await kitaru.say_and_wait('啊……我可以拒绝吗？');
              await kitaru.say_and_wait([callname, '，我偶尔也是会生气的哦！']);
            }
            break;
          case 2:
            if (love >= 75) {
              await kitaru.say_and_wait([
                '那个……',
                callname,
                '，是有些讨厌我了吗？',
              ]);
              await kitaru.say_and_wait([
                '我，我会好好听话的……告诉我，告诉我怎么取悦 ',
                callname,
                ' 吧……',
              ]);
            } else {
              await kitaru.say_and_wait('是这样吗？');
              await era.printAndWait([
                '原本琥珀般温暖的眼眸变得冰冷，锐利的十字星审视着 ',
                me.get_colored_name(),
                '。',
              ]);
            }
            break;
          case 3:
            if (love >= 75) {
              await kitaru.say_and_wait('命定之人……');
              await kitaru.say_and_wait([
                '……',
                kitaru.get_bigger_sibling_sex_title(),
                '，我……',
              ]);
              await kitaru.say_and_wait('我该怎么办……');
              await era.printAndWait('嵌着星星的琥珀色眼眸，此刻黯淡无光。');
            } else {
              await kitaru.say_and_wait('一定要这样吗？');
              await era.printAndWait([
                '一瞬间，宛如被神明凝视般的压力降临到了 ',
                me.get_colored_name(),
                ' 的身上。',
              ]);
              await kitaru.say_and_wait(
                '命定之人……虽然现在觉得这个称呼有些恶心了。',
              );
              await kitaru.say_and_wait(
                '但多少还算是占卜的结果……所以，接下来能不要这么对我吗？',
              );
            }
        }
        break;
      case mark_enum.ero:
        if ((level >= 2 && _new) || kitaru.sex_code === 1) {
          return await super.get_mark(level, type, _new);
        }
        switch (level) {
          case 1:
            await era.printAndWait(
              '小腹上那个繁复复杂的图纹，显示出了卵子的活动轨迹……',
            );
            await era.printAndWait(
              '冒着粉红亮光的纹路，暗示主人身份般绘出了类似神道教的鸟居的镂空。',
            );
            await kitaru.say_and_wait(['没想到 ', callname, ' 还会这个……']);
            break;
          case 2:
            await kitaru.say_and_wait('唔……纹路变得更加复杂了呢……');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 沉默地看着小腹上坐落于子宫位置的鸟居周围的纹饰……',
            ]);
            await kitaru.say_and_wait('不知道白兴大人会怎么想。');
            break;
          case 3:
            await era.printAndWait(
              '更加复杂的形状，添加了显示出怀孕率和受孕的功能……',
            );
            await era.printAndWait([
              '被神选中的巫女抚摸着脐下的位置，自觉的对 ',
              me.get_colored_name(),
              ' 张开了双腿。',
            ]);
            await era.printAndWait(
              '能拉出丝线的小穴随着呼吸间闪烁的淫纹，有节奏的张合着。',
            );
            await kitaru.say_and_wait('哈……哈……');
            await era.printAndWait([
              '冒着粉光的眸子，呆滞地看着 ',
              me.get_colored_name(),
              '。',
            ]);
        }
    }
  }
};
