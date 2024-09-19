const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const KitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { attr_enum, fumble_result } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param {TrainFailParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  if (extra_flag.train === attr_enum.intelligence) {
    throw new Error();
  }
  extra_flag['args'] = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    edu_marks = new KitaruEduMarks();

  if (
    me.sex_code > 0 &&
    !edu_marks.fortune_train_fail &&
    era.get('love:56') > 75
  ) {
    // 第一次训练失败固定会弹出来的事件
    edu_marks.fortune_train_fail++;
    await print_event_name('触诊', kitaru);
    await era.printAndWait([
      '以公主抱的姿势将训练失败的 ',
      kitaru.get_colored_name(),
      ' 送到保健室，好在',
      kitaru.sex,
      '并没有受伤，不过例行的检查还是需要的。',
    ]);
    await era.printAndWait([
      '过程中，察觉到了 ',
      me.get_colored_name(),
      ' 正位于',
      kitaru.sex,
      '肩胛和腿弯处的手，  ',
      kitaru.get_colored_name(),
      ' 的脸上显出了些许酡红。',
    ]);
    await era.printAndWait([
      '坐在保健室的洁白床铺边缘，自知给 ',
      me.get_colored_name(),
      ' 添乱了的',
      kitaru.get_teen_sex_title(),
      '有些局促不安的盯着地板，在令人难以忍受的寂静中等着校医的出现。',
    ]);
    await kitaru.say_and_wait(['那个，', callname, '……']);
    await era.printAndWait([
      '校医多半是有什么棘手的病人要照顾，毕竟特雷森每天训练失败的赛',
      kitaru.get_uma_sex_title(),
      '可是数不胜数，那么初步的足部检查，也就是触诊，只能由 ',
      me.get_colored_name(),
      ' 做了。',
    ]);
    era.printButton('「脱下来」', 1);
    await era.input();
    await kitaru.say_and_wait(['欸！', callname, ' 是要！']);
    await era.printAndWait([
      '强忍着 ',
      kitaru.get_colored_name(),
      ' 过于吵闹的反应，',
      me.get_colored_name(),
      ' 指了指',
      kitaru.sex,
      '脚上穿着的运动鞋。',
    ]);
    era.printButton('脱下鞋子', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      ' 弯下腰，解开鞋带，将',
      kitaru.sex,
      '的运动鞋缓缓脱下，而后，被白色过膝袜裹住，透出些许肉色的玉足，在 ',
      me.get_colored_name(),
      ' 面前绷直了脚尖。',
    ]);
    era.printButton('「袜子也要脱掉」', 1);
    await era.input();
    await kitaru.say_and_wait(['那个！', callname, '……']);
    await kitaru.say_and_wait('这个的话，我自己来就好了。');
    await era.printAndWait([
      '面颊发红的 ',
      kitaru.get_colored_name(),
      ' 坐在床边，先屈起左脚踩在了床面，虽然已经尽力遮掩，但百褶裙下的风光还是展露了出来。',
    ]);
    await era.printAndWait([
      '裙摆的缝隙里，隐约可以窥探到那被蓝白色胖次包裹的小肉臀，此刻正因为坐在床铺上的缘故而微微显得扁圆。',
    ]);
    await era.printAndWait([
      '拈起在大腿上勒出痕迹的丝袜边缘，向外拉起，顺着肌肉的优美曲线向下经过小腿，露出圆润洁白的大腿，一寸一寸的向下卷着，腿肉跟着轻轻颤动，直到双腿的丝袜都变成小小的一团。',
    ]);
    await kitaru.say_and_wait(['那，', callname, '……下，下一步呢？']);
    await era.printAndWait([
      '明显变得害羞的 ',
      kitaru.get_colored_name(),
      ' 低着头，双脚自顾自地交叠在一起，互相来回磨蹭，粉嫩的脚趾也互相拨弄着晃来晃去。',
    ]);
    era.printButton('伸手', 1);
    await era.input();
    await era.printAndWait([
      '属于 ',
      kitaru.get_colored_name(),
      ' 的，因为害羞而略微蜷曲着的脚，准确来说是右足进入了 ',
      me.get_colored_name(),
      ' 的手中。',
    ]);
    await kitaru.say_and_wait('啊呀…….');
    await era.printAndWait([
      '相当优美的弯曲足弓，娇嫩的足趾，透着运动后的红润，',
      me.get_colored_name(),
      ' 用手指顺着足底到脚踝的部位抚摸过去，感叹着外表与普通人类无异的双足却能在奔跑时承受如此大的加速度。',
    ]);
    await kitaru.say_and_wait('咿呀……呼……');
    await era.printAndWait([
      '急促的喘气声自 ',
      kitaru.get_colored_name(),
      ' 的口中漏出。',
    ]);
    await era.printAndWait([
      '明明到了这一步就可以确定 ',
      kitaru.get_colored_name(),
      ' 没有任何问题了，但是……',
    ]);
    await era.printAndWait('还要继续吗？');
    era.printButton('结束', 1);
    era.printButton('继续', 2);
    if ((await era.input()) === 2) {
      await era.printAndWait([
        '继续向上，指腹蹭过带着些许回弹的小腿肚，膝盖上的肌腱，在到其上的大腿。',
      ]);
      await kitaru.say_and_wait('唔嗯……');
      await era.printAndWait([
        '大腿股先是和男人肌肤相亲而展现出的僵硬，而后 ',
        kitaru.get_colored_name(),
        ' 又意识到是自己命定之人正在抚摸而放松开来的柔软。',
      ]);
      await kitaru.say_and_wait('哈啊！');
      await era.printAndWait([
        '用指腹确认着肌肉组的状态，又按摩般揉捏着，似乎已经跨越了触诊的界线，',
        kitaru.get_colored_name(),
        ' 的呼吸也染上了桃色氛围特有的湿润与荡漾。',
      ]);
      await kitaru.say_and_wait('嗯……哈啊！');
      await era.printAndWait([
        '在 ',
        me.get_colored_name(),
        ' 不知道是不是不小心碰到',
        kitaru.sex,
        '大腿根部的时候，',
        kitaru.get_colored_name(),
        ' 发出了一声惊呼，于是 ',
        me.get_colored_name(),
        ' 终于抬起头来，与',
        kitaru.sex,
        '四目相对。',
      ]);
      await era.printAndWait([
        '察觉到 ',
        me.get_colored_name(),
        ' 视线的 ',
        kitaru.get_colored_name(),
        ' 像是被吓了一跳的样子，试图用侧发遮住自己赤红的脸颊，却又因为平日那凌乱的发型而失败。',
      ]);
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '开始只是浅红的面颊现在完全被赤色的红潮侵染，或许是为了配合 ',
        me.get_colored_name(),
        ' 触诊的动作，本是端坐在病床上的 ',
        kitaru.get_colored_name(),
        ' 身体已经完全瘫扭着，衬衣未遮掩住的皮肤位置也泛着红色。',
      ]);
      await kitaru.say_and_wait(['唔……哈啊！嗯……那个，', callname, '？']);
      era.printButton('「……嗯？福来？没事吧？」', 1);
      await era.input();
      await kitaru.say_and_wait('是、是的……那个，我没事的……');
      await kitaru.say_and_wait(['所以，', callname, '……没问题吧？']);
      await era.printAndWait([
        '正慢慢给自己左脚穿上过膝袜的 ',
        kitaru.get_colored_name(),
        ' 抬起头来望着 ',
        me.get_colored_name(),
        ' 不知是否是错觉，脸上似乎带着几分若有若无的期待。',
      ]);
      await era.printAndWait('还要继续吗？');
      era.printButton('结束', 1);
      era.printButton('握住待兼福来的脚', 2, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('推到待兼福来', 3, {
        disabled: era.get('love:56') < 75,
      });
      switch (await era.input()) {
        case 2:
          await kitaru.say_and_wait([callname, '……唔❤️！？']);
          await era.printAndWait([
            '在面前',
            kitaru.get_uma_sex_title(),
            '的惊呼声中握住了',
            kitaru.sex,
            '左脚的脚踝，然后高高举起，在 ',
            kitaru.get_colored_name(),
            ' 成功地因为 ',
            me.get_colored_name(),
            ' 这突然举动而彻底放弃表情管理变得满面潮红时，将那裹着纤薄白丝的足心，隔着裤子放在了 ',
            me.get_colored_name(),
            ' 绷起的小帐篷上。',
          ]);
          await kitaru.say_and_wait(['啊，', callname, '，难道现在要在这里……']);
          await kitaru.say_and_wait('……用脚做吗？');
          await era.printAndWait([
            '大概是察觉到了你的意思，病床上的栗毛',
            kitaru.get_uma_sex_title(),
            '抬起头询问着 ',
            me.get_colored_name(),
            ' 的意思。',
          ]);
          await kitaru.say_and_wait([
            '哦……好的，那 ',
            callname,
            '，帮忙盯着点门口。',
          ]);
          await kitaru.say_and_wait([
            '因为，担心自己一会儿还会不会有这个余裕。',
          ]);
          await era.printAndWait([
            '在得到许可之后，在先前的触诊结束后还来不及穿上过膝袜的右足，用裸露在外的脚趾拉开了 ',
            me.get_colored_name(),
            ' 的裤链。',
          ]);
          await era.printAndWait(['滋啦～']);
          await kitaru.say_and_wait('好大……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的小声比划着的口型应该是这么说的。',
          ]);
          await era.printAndWait([
            '接下来，用套着白丝过膝袜的左脚，和另一只触感完全不同的裸足组成足穴。',
          ]);
          await era.printAndWait([
            '在粗大的肉竿上缓缓地套弄着，蹭弄着肉棒杆身上每一条隆起的青筋。',
          ]);
          await era.printAndWait([
            '直到舒展的足趾间已能拉出些透明而粘稠的淫丝。',
          ]);
          await kitaru.say_and_wait('嗯……哈啊！');
          await era.printAndWait([
            '不过，速度还是太慢了，这样不知道什么时候才能射出来。',
          ]);
          era.printButton('握住双脚', 1);
          await era.input();
          await kitaru.say_and_wait('唔唔！……');
          await era.printAndWait([
            '原本撑着床铺的 ',
            kitaru.get_colored_name(),
            ' 突然失去平衡的向后倾倒，取而代之的，只有左腿穿着被先走汁弄的黏糊糊的白色过膝袜的一对美足，被 ',
            me.get_colored_name(),
            ' 托着脚踝高高举起，搭在了肉棒上。',
          ]);
          await kitaru.say_and_wait([callname, '，太，太突然了！']);
          await era.printAndWait([
            '压低声音呵斥着 ',
            me.get_colored_name(),
            '，但几近失去理智的 ',
            me.get_colored_name(),
            ' 没有在意。',
          ]);
          await era.printAndWait([
            '像是对待什么用完即弃的杯子般随意地使用着 ',
            kitaru.get_colored_name(),
            ' 的双足。',
          ]);
          await era.printAndWait([
            '在粗大的肉茎上包络成一个异色的圆，随着 ',
            me.get_colored_name(),
            ' 的双手以远超先前频率的高速在肉棒上套弄着，发出阵阵淫靡的摩擦水声。',
          ]);
          await kitaru.say_and_wait('肉棒大人……好烫～！');
          await era.printAndWait([
            '从敏感足心传来的火热触感与浓厚的种子汁气味，让被 ',
            me.get_colored_name(),
            ' 握住双足的 ',
            kitaru.get_colored_name(),
            ' 像是落入了猎人陷阱中的栗毛狐狸，上半身陷在保健室的床垫里，凭着',
            kitaru.get_uma_sex_title(),
            '的柔韧性顺与床铺交织成更高的仰角。',
          ]);
          await kitaru.say_and_wait('命定之人❤️这么激烈，脚，好烫～！');
          await era.printAndWait(['音量隐约有些失控的趋势。']);
          era.printButton('呵斥', 1);
          await era.input();
          await me.say_and_wait([
            '给我小声点！之前触诊的时候，这对下流蹄子早就有反应了吧！',
          ]);
          await era.printAndWait([
            '听到了 ',
            me.get_colored_name(),
            ' 的呵斥，',
            kitaru.get_colored_name(),
            ' 脸上露出的失态的下流表情，难耐地发出唔唔的沉闷呻吟声。',
          ]);
          await kitaru.say_and_wait('欸嘿嘿……粗暴的命定之人， 也好喜欢～！');
          await era.printAndWait([
            '捏住了 ',
            kitaru.get_colored_name(),
            ' 想要发颤的脚腕，轻轻用力， 发泄般地使用起这对足穴飞机杯。',
          ]);
          await kitaru.say_and_wait(['哈～哈～……哈！']);
          await kitaru.say_and_wait(['去了❤️去了❤️咕……']);
          await era.printAndWait([
            '浓白粘稠的精液，以被 ',
            me.get_colored_name(),
            ' 握着的酥麻无力的双足为起点射在了及时并拢的足弓之间，不过还是少数几滴变成了 ',
            kitaru.get_colored_name(),
            ' 的脸上与衣服上白色的点缀。',
          ]);
          await era.printAndWait([
            '浓淍的白浊液体让左腿上的过膝袜颜色变得更深了，而落在右腿上的，则被 ',
            me.get_colored_name(),
            ' 握着 ',
            kitaru.get_colored_name(),
            ' 的脚腕，控制着勉强还有余力的 ',
            kitaru.get_colored_name(),
            ' 蹭着自己脱下来的外套上。',
          ]);
          await era.printAndWait(['该赶紧收拾了，校医之后要是发现就麻烦了。']);
          hook.arg = 1;
          if (!era.get('talent:56:神之足')) {
            era.set('talent:56:神之足', 1);
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 具有 ',
              {
                color: buff_colors[2],
                content: '[神之足]',
              },
              ' 了！',
            ]);
          }
          break;
        case 3:
          era.printButton('「张开腿。」', 1);
          await era.input();
          await kitaru.say_and_wait('欸！？');
          await era.printAndWait([
            '在 ',
            me.get_colored_name(),
            ' 的命令下，',
            kitaru.get_colored_name(),
            ' 乖巧地把手放在了大腿两侧。',
          ]);
          await era.printAndWait([
            '颤颤巍巍地用手掰开双腿，露出已经在先前的触诊中被 ',
            me.get_colored_name(),
            ' 弄的湿润的内裤。',
          ]);
          await quick_into_sex(56);
          hook.arg = 1;
      }
    }
    await era.printAndWait([
      '在检查过没有问题之后，嘱咐 ',
      kitaru.get_colored_name(),
      ' 好好休息。',
    ]);
  } else if (extra_flag.fumble) {
    await print_event_name('严禁逞强！', kitaru);
    await era.printAndWait([
      '带着在训练过程中受伤的 ',
      kitaru.get_colored_name(),
      ' 来到了保健室。',
    ]);
    await kitaru.say_and_wait('嘶……今天的运势没有想象中的那么顺利呢！');
    await kitaru.say_and_wait('会不会是什么大凶的前兆呢？');
    await era.printAndWait([
      '坐在保健室床铺上的 ',
      kitaru.get_colored_name(),
      ' 揉着自己肿起的患处，露出了如临大敌般的表情。',
    ]);
    era.printButton('「别想太多！」（接受失败，承担后果）', 1);
    era.printButton(
      '「干脆趁着休息的时候做个开运仪式？」（尝试摆脱，或承担更重的后果）',
      2,
    );
    // era.printButton('（陪着待兼福来到晚上）', 3, { disabled: era.get('love:56') < 75 });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '说话的同时一边伸手顺着福来那乱糟糟的头发，在 ',
        me.get_colored_name(),
        ' 略微有些粗暴的动作下，',
        kitaru.get_teen_sex_title(),
        '总算是停止了进一步的胡思乱想。',
      ]);
      await kitaru.say_and_wait(['欸！说的也是呢，唔，', callname, '！']);
      await kitaru.say_and_wait('接下来我会好好休息的！');
      await era.printAndWait([
        '孤单一人坐在洁白床铺上的 ',
        kitaru.get_colored_name(),
        '，有些不舍的目送着 ',
        me.get_colored_name(),
        ' 走出了保健室。',
      ]);
      hook.arg = 0;
    } else {
      await era.printAndWait([
        '听到这个建议后，原本病怏怏躺在床铺上 ',
        kitaru.get_colored_name(),
        ' 眼睛里再次发出光芒。',
      ]);
      await era.printAndWait([
        '之后在 ',
        kitaru.get_colored_name(),
        ' 的指挥下开始布置起仪式所需的场地来，直到保健室内看着像是祭拜什么东西的神龛。',
      ]);
      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await era.printAndWait('看来是布置仪式时的动作恶化了伤口呢。');
        await era.printAndWait([
          me.get_colored_name(),
          ' 陪着待 ',
          kitaru.get_colored_name(),
          ' 一起受着来自校医的斥责。',
        ]);
        hook.arg = -1;
      } else {
        await era.printAndWait('意外的真的有用！');
        await era.printAndWait([
          me.get_colored_name(),
          ' 听着 ',
          kitaru.get_colored_name(),
          ' 得意洋洋的对保健室新来的病患布道着自己的白兴大人。',
        ]);
        hook.arg = 1;
      }
    }
  } else {
    await print_event_name('保重身体', kitaru);
    await era.printAndWait([
      '再一次的带着在训练过程中受伤的 ',
      kitaru.get_colored_name(),
      ' 来到了保健室。',
    ]);
    await kitaru.say_and_wait('啊！完全没有预料到呢！');
    await kitaru.say_and_wait('明明神签上写了今天是大吉来着呢！');
    era.printButton('「好好休息吧！」（接受失败，承担后果）', 1);
    era.printButton(
      '「不要老是迷信占卜啊！」（尝试摆脱，或承担更重的后果）',
      2,
    );
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('唔！');
      await era.printAndWait([
        '将自己整个人埋在白色的被褥里，',
        kitaru.get_colored_name(),
        ' 沉沉的睡去了。',
      ]);
      hook.arg = 0;
    } else {
      await kitaru.say_and_wait(['啊！', callname, ' 说的也是呢！']);
      if (Math.random() < extra_flag['args'].ratio.fail_again) {
        await era.printAndWait([
          '不过第二天来保健室看望',
          kitaru.sex,
          '的时候，',
          me.get_colored_name(),
          ' 听见',
          kitaru.sex,
          '又提出了新的占卜方式。',
        ]);
        await era.printAndWait([
          '看来 ',
          kitaru.get_colored_name(),
          ' 没怎么吸取教训。',
        ]);
        hook.arg = -1;
      } else {
        era.drawLine({ content: '次日' });
        await kitaru.say_and_wait(['哦！', callname, '，我发现问题在哪里了！']);
        await era.printAndWait([
          me.get_colored_name(),
          ' 有些意外的看着 ',
          kitaru.get_colored_name(),
          ' 对 ',
          me.get_colored_name(),
          ' 复盘起那天训练',
          kitaru.sex,
          '自己究竟犯了什么失误。',
        ]);
        hook.arg = 1;
      }
    }
  }
};
