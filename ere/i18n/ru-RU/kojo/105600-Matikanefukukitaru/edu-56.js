/**
 * @file 待兼福来 - 育成
 * @author ALEX
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors, motivation_colors } = require('#/data/color-const');

const { typing } = require('#/i18n/ru-RU/snippets');

module.exports = {
  async train_success(kitaru, lucky_train) {
    era.print([kitaru.get_colored_name(), ' 的训练顺利结束了！']);
    era.println();
    if (lucky_train) {
      await kitaru.say_and_wait('是契合运势的选择呢！');
    }
  },
  train_fail: (() => {
    const title = '保重身体';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {number} fail_again 如果选努力的话是否再次失败
     */
    const f = async (kitaru, you, callname, fail_again) => {
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
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('唔！');
        await era.printAndWait([
          '将自己整个人埋在白色的被褥里，',
          kitaru.get_colored_name(),
          ' 沉沉的睡去了。',
        ]);
      } else {
        await kitaru.say_and_wait(['啊！', callname, ' 说的也是呢！']);
        if (fail_again) {
          await era.printAndWait([
            '不过第二天来保健室看望',
            kitaru.sex,
            '的时候，',
            you.get_colored_name(),
            ' 听见',
            kitaru.sex,
            '又提出了新的占卜方式。',
          ]);
          await era.printAndWait([
            '看来 ',
            kitaru.get_colored_name(),
            ' 没怎么吸取教训。',
          ]);
        } else {
          era.drawLine({ content: '次日' });
          await kitaru.say_and_wait([
            '哦！',
            callname,
            '，我发现问题在哪里了！',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 有些意外的看着 ',
            kitaru.get_colored_name(),
            ' 对 ',
            you.get_colored_name(),
            ' 复盘起那天训练',
            kitaru.sex,
            '自己究竟犯了什么失误。',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '严禁逞强！';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {number} fail_again 如果选努力的话是否再次失败
     */
    const f = async (kitaru, you, callname, fail_again) => {
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
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '说话的同时一边伸手顺着福来那乱糟糟的头发，在 ',
          you.get_colored_name(),
          ' 略微有些粗暴的动作下，',
          kitaru.teen_sex_title,
          '总算是停止了进一步的胡思乱想。',
        ]);
        await kitaru.say_and_wait(['欸！说的也是呢，唔，', callname, '！']);
        await kitaru.say_and_wait('接下来我会好好休息的！');
        await era.printAndWait([
          '孤单一人坐在洁白床铺上的 ',
          kitaru.get_colored_name(),
          '，有些不舍的目送着 ',
          you.get_colored_name(),
          ' 走出了保健室。',
        ]);
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
        if (fail_again) {
          await era.printAndWait('看来是布置仪式时的动作恶化了伤口呢。');
          await era.printAndWait([
            you.get_colored_name(),
            ' 陪着待 ',
            kitaru.get_colored_name(),
            ' 一起受着来自校医的斥责。',
          ]);
        } else {
          await era.printAndWait('意外的真的有用！');
          await era.printAndWait([
            you.get_colored_name(),
            ' 听着 ',
            kitaru.get_colored_name(),
            ' 得意洋洋的对保健室新来的病患布道着自己的白兴大人。',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  first_train_fail: (() => {
    const title = '触诊';
    /**
     * 男T马娘+热恋及以上，第一次训练失败固定会弹出来的事件
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        '以公主抱的姿势将训练失败的 ',
        kitaru.get_colored_name(),
        ' 送到保健室，好在',
        kitaru.sex,
        '并没有受伤，不过例行的检查还是需要的。',
      ]);
      await era.printAndWait([
        '过程中，察觉到了 ',
        you.get_colored_name(),
        ' 正位于',
        kitaru.sex,
        '肩胛和腿弯处的手，',
        kitaru.get_colored_name(),
        ' 的脸上显出了些许酡红。',
      ]);
      await era.printAndWait([
        '坐在保健室的洁白床铺边缘，自知给 ',
        you.get_colored_name(),
        ' 添乱了的',
        kitaru.teen_sex_title,
        '有些局促不安的盯着地板，在令人难以忍受的寂静中等着校医的出现。',
      ]);
      await kitaru.say_and_wait(['那个，', callname, '……']);
      await era.printAndWait([
        '校医多半是有什么棘手的病人要照顾，毕竟特雷森每天训练失败的赛',
        kitaru.uma_sex_title,
        '可是数不胜数，那么初步的足部检查，也就是触诊，只能由 ',
        you.get_colored_name(),
        ' 做了。',
      ]);
      era.printButton('「脱下来」', 1);
      await era.input();
      await kitaru.say_and_wait(['欸！', callname, ' 是要！']);
      await era.printAndWait([
        '强忍着 ',
        kitaru.get_colored_name(),
        ' 过于吵闹的反应，',
        you.get_colored_name(),
        ' 指了指',
        kitaru.sex,
        '脚上穿着的运动鞋。',
      ]);
      era.printButton('脱下鞋子', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 弯下腰，解开鞋带，将',
        kitaru.sex,
        '的运动鞋缓缓脱下，而后，被白色过膝袜裹住，透出些许肉色的玉足，在 ',
        you.get_colored_name(),
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
        you.get_colored_name(),
        ' 的手中。',
      ]);
      await kitaru.say_and_wait('啊呀…….');
      await era.printAndWait([
        '相当优美的弯曲足弓，娇嫩的足趾，透着运动后的红润，',
        you.get_colored_name(),
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
          you.get_colored_name(),
          ' 不知道是不是不小心碰到',
          kitaru.sex,
          '大腿根部的时候，',
          kitaru.get_colored_name(),
          ' 发出了一声惊呼，于是 ',
          you.get_colored_name(),
          ' 终于抬起头来，与',
          kitaru.sex,
          '四目相对。',
        ]);
        await era.printAndWait([
          '察觉到 ',
          you.get_colored_name(),
          ' 视线的 ',
          kitaru.get_colored_name(),
          ' 像是被吓了一跳的样子，试图用侧发遮住自己赤红的脸颊，却又因为平日那凌乱的发型而失败。',
        ]);
        await kitaru.say_and_wait([callname, '……']);
        await era.printAndWait([
          '开始只是浅红的面颊现在完全被赤色的红潮侵染，或许是为了配合 ',
          you.get_colored_name(),
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
          you.get_colored_name(),
          ' 不知是否是错觉，脸上似乎带着几分若有若无的期待。',
        ]);
        await era.printAndWait('还要继续吗？');
        era.printButton('结束', 1);
        era.printButton('握住待兼福来的脚', 2, {
          disabled: era.get('love:56') < 75,
        });
        era.printButton('推倒待兼福来', 3, {
          disabled: era.get('love:56') < 75,
        });
        ret.push(await era.input());
        if (ret[0] === 2) {
          await kitaru.say_and_wait([callname, '……唔❤️！？']);
          await era.printAndWait([
            '在面前',
            kitaru.uma_sex_title,
            '的惊呼声中握住了',
            kitaru.sex,
            '左脚的脚踝，然后高高举起，在 ',
            kitaru.get_colored_name(),
            ' 成功地因为 ',
            you.get_colored_name(),
            ' 这突然举动而彻底放弃表情管理变得满面潮红时，将那裹着纤薄白丝的足心，隔着裤子放在了 ',
            you.get_colored_name(),
            ' 绷起的小帐篷上。',
          ]);
          await kitaru.say_and_wait(['啊，', callname, '，难道现在要在这里……']);
          await kitaru.say_and_wait('……用脚做吗？');
          await era.printAndWait([
            '大概是察觉到了你的意思，病床上的栗毛',
            kitaru.uma_sex_title,
            '抬起头询问着 ',
            you.get_colored_name(),
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
            you.get_colored_name(),
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
            you.get_colored_name(),
            ' 托着脚踝高高举起，搭在了肉棒上。',
          ]);
          await kitaru.say_and_wait([callname, '，太，太突然了！']);
          await era.printAndWait([
            '压低声音呵斥着 ',
            you.get_colored_name(),
            '，但几近失去理智的 ',
            you.get_colored_name(),
            ' 没有在意。',
          ]);
          await era.printAndWait([
            '像是对待什么用完即弃的杯子般随意地使用着 ',
            kitaru.get_colored_name(),
            ' 的双足。',
          ]);
          await era.printAndWait([
            '在粗大的肉茎上包络成一个异色的圆，随着 ',
            you.get_colored_name(),
            ' 的双手以远超先前频率的高速在肉棒上套弄着，发出阵阵淫靡的摩擦水声。',
          ]);
          await kitaru.say_and_wait('肉棒大人……好烫～！');
          await era.printAndWait([
            '从敏感足心传来的火热触感与浓厚的种子汁气味，让被 ',
            you.get_colored_name(),
            ' 握住双足的 ',
            kitaru.get_colored_name(),
            ' 像是落入了猎人陷阱中的栗毛狐狸，上半身陷在保健室的床垫里，凭着',
            kitaru.uma_sex_title,
            '的柔韧性顺与床铺交织成更高的仰角。',
          ]);
          await kitaru.say_and_wait('命定之人❤️这么激烈，脚，好烫～！');
          await era.printAndWait(['音量隐约有些失控的趋势。']);
          era.printButton('呵斥', 1);
          await era.input();
          await you.say_and_wait([
            '给我小声点！之前触诊的时候，这对下流蹄子早就有反应了吧！',
          ]);
          await era.printAndWait([
            '听到了 ',
            you.get_colored_name(),
            ' 的呵斥，',
            kitaru.get_colored_name(),
            ' 脸上露出的失态的下流表情，难耐地发出唔唔的沉闷呻吟声。',
          ]);
          await kitaru.say_and_wait('欸嘿嘿……粗暴的命定之人，也好喜欢～！');
          await era.printAndWait([
            '捏住了 ',
            kitaru.get_colored_name(),
            ' 想要发颤的脚腕，轻轻用力，发泄般地使用起这对足穴飞机杯。',
          ]);
          await kitaru.say_and_wait(['哈～哈～哈！']);
          await kitaru.say_and_wait(['去了❤️去了❤️咕……']);
          await era.printAndWait([
            '浓白粘稠的精液，以被 ',
            you.get_colored_name(),
            ' 握着的酥麻无力的双足为起点射在了及时并拢的足弓之间，不过还是少数几滴变成了 ',
            kitaru.get_colored_name(),
            ' 的脸上与衣服上白色的点缀。',
          ]);
          await era.printAndWait([
            '浓淍的白浊液体让左腿上的过膝袜颜色变得更深了，而落在右腿上的，则被 ',
            you.get_colored_name(),
            ' 握着 ',
            kitaru.get_colored_name(),
            ' 的脚腕，控制着勉强还有余力的 ',
            kitaru.get_colored_name(),
            ' 蹭着自己脱下来的外套上。',
          ]);
          await era.printAndWait(['该赶紧收拾了，校医之后要是发现就麻烦了。']);
          if (!era.get('talent:56:神之足')) {
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
        } else if (ret[0] === 3) {
          era.printButton('「张开腿。」', 1);
          await era.input();
          await kitaru.say_and_wait('欸！？');
          await era.printAndWait([
            '在 ',
            you.get_colored_name(),
            ' 的命令下，',
            kitaru.get_colored_name(),
            ' 乖巧地把手放在了大腿两侧。',
          ]);
          await era.printAndWait([
            '颤颤巍巍地用手掰开双腿，露出已经在先前的触诊中被 ',
            you.get_colored_name(),
            ' 弄的湿润的内裤。',
          ]);
        }
      }
      if (!ret[0] || ret[0] === 1) {
        await era.printAndWait([
          '在检查过没有问题之后，嘱咐 ',
          kitaru.get_colored_name(),
          ' 好好休息。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = '竞赛之前';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {number} edu_prog 育成进程，资深年宝冢纪念以前小于8
     */
    const f = async (kitaru, you, callname, edu_prog) => {
      const buffer = [];
      if (era.get('mark:56:淫纹') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait('……幸好我的决胜服不是露肚子的。');
          await era.printAndWait(
            '不过因为赛前激动而一并产生效果的淫纹，散发出的粉色光芒还是隐约可见。',
          );
        });
      }
      if (era.get('mark:56:欢愉') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait('唔……非常，非常期待比赛之后的奖励呢！');
          await era.printAndWait([
            '因为比赛而禁欲了一段时间的 ',
            kitaru.get_colored_name(),
            '，只是想到这里身体就微微开始发抖。',
          ]);
        });
      }
      if (era.get('mark:56:同心') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait('之后……命定之人明白的吧！');
          await kitaru.say_and_wait('唔！');
          await era.printAndWait([
            '踮起脚尖，在 ',
            you.get_colored_name(),
            ' 脸颊上轻轻啄了一下，',
            kitaru.get_colored_name(),
            ' 向赛场走去。',
          ]);
        });
      }
      if (edu_prog < 8) {
        buffer.push(
          async () => {
            await kitaru.say_and_wait(
              '……我拜请白兴大人，祂的伟力谅必能给我开辟出道路！',
            );
            await era.printAndWait([
              '念着不知从哪里听到的祷词，',
              kitaru.get_colored_name(),
              ' 的身影消失在赛场的入口处。',
            ]);
          },
          async () => {
            await kitaru.say_and_wait('……群星移动到了正确的位置呢！');
            await era.printAndWait([
              '将水晶球塞回招财猫背包里，',
              kitaru.get_colored_name(),
              ' 的身影消失在赛场的入口处。',
            ]);
          },
        );
      } else {
        buffer.push(async () => {
          await kitaru.say_and_wait(['请 ', callname, ' 等待并心怀希望吧！']);
          await kitaru.say_and_wait('我会尽全力拿下胜利的！');
        });
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_sex: (() => {
    const title = '不合时宜的发情';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('唔……');
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '捂着小腹的 ',
        kitaru.get_colored_name(),
        ' 弓着背站在 ',
        you.get_colored_name(),
        ' 的面前，泛红的脸颊显露出一股发情般的恍惚。',
      ]);
      await kitaru.say_and_wait([callname, '……要……好想要……']);
      await era.printAndWait([
        '为什么会突然这样子，',
        you.get_colored_name(),
        ' 不禁有些慌乱。',
      ]);
      await era.printAndWait([
        '可还没等 ',
        you.get_colored_name(),
        ' 细想，',
        kitaru.get_colored_name(),
        ' 已经半跪着跌在了地上。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见',
        kitaru.sex,
        '拉起了自己衣服的下摆，已经泛着绯红的小腹处，那个由 ',
        you.get_colored_name(),
        ' 画上的淫纹正不合时宜的发着粉红色的微光。',
      ]);
      await era.printAndWait([
        '毫无疑问，这正是让 ',
        kitaru.get_colored_name(),
        ' 现在从身体到内心都完全进入做爱状态的罪魁祸首。',
      ]);
      await kitaru.say_and_wait([callname, '……抱歉……']);
      await era.printAndWait([
        '坐在长椅上的 ',
        you.get_colored_name(),
        ' 看着 ',
        kitaru.get_colored_name(),
        ' 膝行着来到 ',
        you.get_colored_name(),
        ' 的双腿之间，然后这只发情母马自觉地趴在了 ',
        you.get_colored_name(),
        ' 的胯部。',
      ]);
      await era.printAndWait([
        '只是隔着布料散发处的气味，就给了占卜师小姐的小腹重重的一击。',
      ]);
      await era.printAndWait([
        '淫纹催生着 ',
        kitaru.get_colored_name(),
        ' 的身体散发出甜香的荷尔蒙气息，魅惑的神态也让 ',
        you.get_colored_name(),
        ' 下身的凸起愈发鼓胀。',
      ]);
      await kitaru.say_and_wait('唔呼！');
      await era.printAndWait([
        '张开微红的唇瓣，雪白的贝齿咬在 ',
        you.get_colored_name(),
        ' 裤子的拉链上将其慢慢拉开，被解开了约束的粗大胀红肉茎从西装裤中蹦出。',
      ]);
      await kitaru.say_and_wait('肉棒先生……你好……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 贪婪地嗅着 ',
        you.get_colored_name(),
        ' 下体发出的性臭味，而后急不可耐的用舌尖吻上了肉棒的前端。',
      ]);
      await kitaru.say_and_wait('咕啾！');
      await era.printAndWait([
        '自铃口溢出的粘液被 ',
        kitaru.get_colored_name(),
        ' 的舌尖舔去，又将肉茎整个吞入口中，晶莹的涎水在肉棒进出间从赛',
        kitaru.uma_sex_title,
        '选手的嘴角滴落，为双唇的粉红抹上一层釉彩。',
      ]);
      await era.printAndWait([
        '鼓出了肉棒的形状的两腮配合着咕啾咕啾的粘稠吸吮声，说不定隔着门都能听见。',
      ]);
      await kitaru.say_and_wait('唔嗯！');
      await era.printAndWait([
        '看来内裤的布料忠实的履行了自己的职责，',
        kitaru.get_colored_name(),
        ' 下身的衣物倒是没什么异样，但逐渐乏力的双腿还是说明了 ',
        kitaru.get_colored_name(),
        ' 的小腹对',
        kitaru.sex,
        '发出的催促。',
      ]);
      await kitaru.say_and_wait('嘶……！');
      await era.printAndWait([
        '如乞食的金鱼吞入饵食，深吻一般让龟头抵着喉咙的软肉，姣好的脸颊也因为龟冠的强行闯入而不得不向两边鼓凸，喉咙发出摄食般咕咕的吞咽声音。',
      ]);
      await kitaru.say_and_wait('咕呃……！');
      await era.printAndWait([
        '琼鼻抵在 ',
        you.get_colored_name(),
        ' 的阴毛丛中，让将要踏上赛场的 ',
        kitaru.get_colored_name(),
        ' 肺部充满属于 ',
        you.get_colored_name(),
        ' 的气味。',
      ]);
      await era.printAndWait('噗咻！');
      await era.printAndWait([
        '尽管窒息感让眼泪涌出眼角，被 ',
        you.get_colored_name(),
        ' 刻下了淫纹的 ',
        kitaru.get_colored_name(),
        ' 却依然死死的抵着 ',
        you.get_colored_name(),
        ' 的胯下，让又腥又臭的气味被',
        kitaru.uma_sex_title,
        '灵敏的味蕾和鼻腔不断放大。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的小舌被继续胀大的肉棒压的扁平，喉头的软肉也参与了对龟头的按摩。',
      ]);
      await kitaru.say_and_wait('哈……哈……');
      await era.printAndWait([
        '肉棒在湿热紧致的口穴进进出出，伴随着阵阵激烈的吸力，',
        you.get_colored_name(),
        ' 抵达了射精的终点',
      ]);
      await kitaru.say_and_wait('咕哈！');
      await era.printAndWait([
        '些许嘴角溢出的精液被未卜先知的占卜师小姐捧在了掌心，急不可耐的继续送入嘴中。',
      ]);
      await kitaru.say_and_wait('咕嘟！');
      await era.printAndWait([
        '间或涌出的残精也一起伴随着喉咙蠕动的吞咽声入腹。',
      ]);
      await era.printAndWait([
        '适时的，通知选手的声音响起，',
        kitaru.sex,
        '才慢慢的从 ',
        you.get_colored_name(),
        ' 的胯下站起，用食指撇去了嘴角的精液与几根卷曲的阴毛，而后伸出舌尖将它们卷入口腔。',
      ]);
      await era.printAndWait([
        '直到此时，',
        kitaru.get_colored_name(),
        ' 的瞳孔才恢复些许清明。',
      ]);
      await kitaru.say_and_wait('呼……');
      await kitaru.say_and_wait('好多了……');
      await kitaru.say_and_wait([
        '真是的！',
        callname,
        ' 的淫纹控制太不熟练了！',
      ]);
      await era.printAndWait([
        '带上些责骂的语气，',
        kitaru.get_colored_name(),
        ' 缓缓从地上站了起来，白色长筒袜的上端已经沾染了些内裤没有拦住的外溢穴汁。',
      ]);
      await kitaru.say_and_wait([
        '不过，在吞下 ',
        callname,
        ' 精液之后，莫名觉得很精神呢！',
      ]);
      await kitaru.say_and_wait('能发挥的更好也不一定？');
      await era.printAndWait([
        '在仔细打理了一下自己的外表，确保不会被别人看出异常后，',
        kitaru.get_colored_name(),
        ' 才离开了赛前等候室。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '比赛获胜';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('Happy come come！福气来了哦！');
      await kitaru.say_and_wait([
        '哎呀呀！多亏了 ',
        callname,
        '！多亏了白兴大人！多亏了被神明眷顾着的我啊！',
      ]);
      era.printButton('「没错！」', 1);
      era.printButton('「不要得意忘形！」', 2);
      if ((await era.input()) === 1) {
        if (era.get('love:56') < 75) {
          await kitaru.say_and_wait('呜呼！那要怎么庆祝呢？');
          await kitaru.say_and_wait('去吃苹果派怎么样？');
          await era.printAndWait([
            '于是晚上和 ',
            kitaru.get_colored_name(),
            ' 一起吃了撒上了肉桂和糖粉的苹果派。',
          ]);
        } else {
          await kitaru.say_and_wait(['那个，', callname, ' 能凑近一点吗？']);
          await kitaru.say_and_wait('嘿！');
          await era.printAndWait([
            '橙色的团子自觉的跳到了 ',
            you.get_colored_name(),
            ' 的怀里，而后',
            kitaru.sex,
            '肆无忌惮的在 ',
            you.get_colored_name(),
            ' 的衣服上留下',
            kitaru.sex,
            '的气味。',
          ]);
          await kitaru.say_and_wait('欸嘿嘿，命定之人的气味！');
        }
      } else {
        await kitaru.say_and_wait('唔！说的也是呢！');
        await kitaru.say_and_wait(['那么，', callname, ' 请收下这个吧！']);
        await era.printAndWait('从自己背着的招财猫背包里掏出了一个护身符。');
        await kitaru.say_and_wait('这可是！凝结着胜者好运的护身符呢！');
        await kitaru.say_and_wait(['之后 ', callname, ' 还会收到许多的！']);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '入着';
    /** @param {CharaTalk} kitaru 待兼福来 */
    const f = async (kitaru) => {
      await kitaru.say_and_wait('呜……本来以为会赢的。');
      await kitaru.say_and_wait('下次！下次一定会没有问题的！');
      await era.printAndWait([
        '比赛失利的 ',
        kitaru.get_colored_name(),
        ' 失落了一小下后就立刻恢复了',
        kitaru.sex,
        '的乐天状态。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '落败';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     */
    const f = async (kitaru, you) => {
      await kitaru.say_and_wait('输……输了？');
      await era.printAndWait([
        '都没撑到走回休息室，',
        kitaru.get_colored_name(),
        ' 就已经在 ',
        you.get_colored_name(),
        ' 的怀里大声的哭了起来。',
      ]);
      await era.printAndWait([
        '贴着 ',
        you.get_colored_name(),
        ' 胸口的双耳，缠着 ',
        you.get_colored_name(),
        ' 左腿的尾巴，',
        kitaru.sex,
        '像是要把整个人融到 ',
        you.get_colored_name(),
        ' 的怀里一样死死地搂抱着 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(
        '不知为何，明明如此狼狈的场景连胜者都投来了羡慕的目光。',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_sex: (() => {
    const title = '预热完毕';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '漂亮的夺下了第一的 ',
        kitaru.get_colored_name(),
        ' 在离开观众视线的那一刻，如释重负般的跌入了 ',
        you.get_colored_name(),
        ' 的怀中。',
      ]);
      await kitaru.say_and_wait('结……结束了……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 在闻到 ',
        you.get_colored_name(),
        ' 的气味之后，紧绷的身体才放松下来。',
      ]);
      await kitaru.say_and_wait([callname, '……', callname, '……']);
      await you.say_and_wait('好烫！');
      await era.printAndWait([
        '运动后的温度，发情时的温度，嗅到自己命定之人后的兴奋温度，通过这紧紧的拥抱分享给了 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '白丝的狐狸小姐在 ',
        you.get_colored_name(),
        ' 的胸膛上撒娇般的蹭动着',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'A「那个他们两个人在干什么？」',
      ]);
      await era.printAndWait([kitaru.uma_sex_title, 'B「胜者的庆祝仪式吧？」']);
      await era.printAndWait([
        '较暗的地下通道内，',
        you.get_colored_name(),
        '  看到些许粉色微光从 ',
        kitaru.get_colored_name(),
        ' 小腹的衣物中透出。',
      ]);
      await era.printAndWait([
        '一刻都不敢多待，',
        you.get_colored_name(),
        '  抱着 ',
        kitaru.get_colored_name(),
        ' 去到了选手休息室。',
      ]);
      await kitaru.say_and_wait(['……忍不住了！']);
      await era.printAndWait(['被情欲冲昏的脑袋已经完全失去组织语言的能力。']);
      await era.printAndWait([
        '在腹中的精液，口腔残留的对 ',
        you.get_colored_name(),
        ' 精液味道还未完全消散的比赛半途时，湿润感，酥酥的麻痒感，以及隐隐约约的钝痛感就不断折磨着 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await era.printAndWait(['砰！']);
      await era.printAndWait([
        you.get_colored_name(),
        '  反手关上门，将 ',
        kitaru.get_colored_name(),
        ' 壁咚在门上。',
      ]);
      await era.printAndWait([
        '汗湿的衣服有些难脱，不断升腾起来的湿热白气带着 ',
        kitaru.get_colored_name(),
        ' 的好闻味道一个劲的往  ',
        you.get_colored_name(),
        '  鼻子里钻。',
      ]);
      await kitaru.say_and_wait('唔……');
      await era.printAndWait([
        '橙色的马尾悄悄地盘上了  ',
        you.get_colored_name(),
        '  的腰。',
      ]);
      await kitaru.say_and_wait('快来吧……命定之人……');
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = (kitaru) => ['窥视命运的', kitaru.teen_sex_title];
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([callname, '！我做完了哦！']);
      await era.printAndWait([
        '不远处，刚做完一组训练的 ',
        kitaru.get_colored_name(),
        ' 正冲 ',
        you.get_colored_name(),
        ' 挥着手，那种过于热情的喊声引来不少其他赛',
        kitaru.uma_sex_title,
        '的侧目。',
      ]);
      await era.printAndWait([
        '在这几日的相处中，除了过于依赖开运道具之外，',
        kitaru.sex,
        '可以称得上是一个开朗，外向，总之，几乎所有的元气系相关的正面词汇都能往',
        kitaru.sex,
        '身上贴。',
      ]);
      await era.printAndWait('但……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 能发现 ',
        kitaru.get_colored_name(),
        ' 身上对于占卜，命运，运气等过于明显的偏执。',
      ]);
      await era.printAndWait(
        '所谓占卜，大部分的人只是当作茶余饭后的谈资或者笑料而已。',
      );
      await era.printAndWait([
        '可 ',
        kitaru.get_colored_name(),
        ' 并不这么想，从工作日中的训练，到假期里的出游地点，',
        kitaru.sex,
        '都会用',
        kitaru.sex,
        '凝聚完运气的占卜后只有',
        kitaru.sex,
        '自己才能解读的答案来做出决定。',
      ]);
      await era.printAndWait([
        '或许正是因为如此，在某一次的占卜中被',
        kitaru.sex,
        '认定为',
        kitaru.sex,
        '命定之人的 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        '对于 ',
        you.get_colored_name(),
        ' 有着同那些还在磨合期的担当组合们，完全不同的信任态度。',
      ]);
      await era.printAndWait([
        '似乎，',
        kitaru.sex,
        '认准了 ',
        you.get_colored_name(),
        ' 就是',
        kitaru.sex,
        '口中那位白兴大人派来的使者。',
      ]);
      await era.printAndWait('接下来，还有一个重要的事项需要确定');
      era.printButton('「待兼福来同学，关于将来的目标……」', 1);
      await era.input();
      await era.printAndWait([
        '目标，也可以说成是赛',
        kitaru.uma_sex_title,
        '奔跑目的，愿望。',
      ]);
      await era.printAndWait('具体的像是经典三冠，春秋连霸，乃至凯旋门。');
      await era.printAndWait(
        '或是更为宽泛的，单纯的为了胜利，抑或追寻某位偶像的道路。',
      );
      await era.printAndWait('乃至更为抽象的，证明自己的存在，价值。');
      await kitaru.say_and_wait('目标吗……');
      era.printButton(
        `「像是将来要跑什么比赛，或者是想要成为怎样的赛${kitaru.uma_sex_title}。」`,
        1,
      );
      await era.input();
      await kitaru.say_and_wait('欸！我没什么特别的目标啦！');
      await kitaru.say_and_wait('只要能一直保持现在的幸运就好了！');
      await kitaru.say_and_wait('不过……');
      await kitaru.say_and_wait('如果一定要说的话……菊花赏或许不错呢？');
      await era.printAndWait([
        '面前的 ',
        kitaru.get_colored_name(),
        ' 听起来是在开玩笑，但表情却是认真无疑。',
      ]);
      era.printButton('「有什么理由吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('唔……');
      await kitaru.say_and_wait([
        '是名叫 ',
        kitaru.get_colored_name(),
        ' 的',
        kitaru.teen_sex_title,
        '！为了实现幸福！成为神明！命运中的必经之路！',
      ]);
      await era.printAndWait([
        '沉思片刻之后，',
        kitaru.teen_sex_title,
        '用',
        kitaru.sex,
        '那一如往常过于夸张的说辞回答了 ',
        you.get_colored_name(),
        '，但',
        kitaru.sex,
        '的眼神却是真诚无比的。',
      ]);
      await era.printAndWait('话说回来，要在3000米的菊花赏获胜吗？');
      await era.printAndWait('所谓最强的马赢菊花赏。');
      await era.printAndWait([
        '这个目标，对于',
        kitaru.sex,
        '来说，是不是太过于遥远了呢。',
      ]);
      await era.printAndWait('还是先一步一步来，以出道战胜利为目标吧！');
    };
    f.title = title;
    return f;
  })(),
  ws_fortune_week: (() => {
    const title = '吉凶占卜';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {number} luck 占卜结果，0-小吉，1-中吉，2-大吉，3-凶
     */
    const f = async (kitaru, luck) => {
      // 占卜道具
      const luck_ways = ['塔罗', '灵摆', '卦象', '星象', '数字命理', '骰子'];
      const luck_result = ['小吉', '中吉', '大吉', '凶'];
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 尝试用 ',
        { color: kitaru.color, content: get_random_entry(luck_ways) },
        ' 进行了占卜，结果是 ',
        {
          color: motivation_colors[luck === 3 ? 1 : luck + 2],
          content: luck_result[luck],
        },
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_14: (() => {
    const title = '入局';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 几乎是在对',
        kitaru.sex,
        '一无所知的情况下，和 ',
        kitaru.get_colored_name(),
        ' 签下契约的。',
      ]);
      await era.printAndWait([
        '好在随着时间推进，',
        you.get_colored_name(),
        ' 对',
        kitaru.sex,
        '的了解也在逐步扩展到赛跑之外的地方。',
      ]);
      await era.printAndWait([
        '比如那间 ',
        you.get_colored_name(),
        ' 与 ',
        kitaru.get_colored_name(),
        ' 相遇的神社，正巧是由',
        kitaru.couple_title,
        '家运营的。',
      ]);
      await kitaru.say_and_wait(['欸！', callname, ' 很感兴趣吗？']);
      await kitaru.say_and_wait('今天我恰好也要去工作呢！');
      await era.printAndWait([
        '反正今日也无训练安排。',
        you.get_colored_name(),
        ' 索性在 ',
        kitaru.get_colored_name(),
        ' 的邀请下，陪着',
        kitaru.sex,
        '去处理神社的相关事务。',
      ]);
      await era.printAndWait([
        '即使是休息日，此间神社也如当初与 ',
        kitaru.get_colored_name(),
        ' 相见时那般冷清。',
      ]);
      await era.printAndWait([
        '不过 ',
        kitaru.get_colored_name(),
        ' 的热情倒是没有受到丝毫影响，换上了巫女服的',
        kitaru.sex,
        '颇为认真的处理着从简单的清扫到折出御币在内的各项工作。',
      ]);
      await era.printAndWait([
        '已是黄昏，今日仍无参拜客的到来，可 ',
        you.get_colored_name(),
        ' 的那位担当却仍一脸期待的看着参拜客必经的鸟居。',
      ]);
      await era.printAndWait(
        '以及……今天一整天下来，似乎见到的神职人员就只有——',
      );
      era.printButton('「待兼福来？」', 1);
      await era.input();
      await kitaru.say_and_wait(['欸！', callname, '？']);
      era.printButton('「平时这里就你一个人？」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！');
      await kitaru.say_and_wait(
        '当然新年，以及特殊节日的时候，我们还是会雇一些人过来帮忙就是的啦！',
      );
      await kitaru.say_and_wait('偶尔妈妈也会来……');
      await era.printAndWait([
        '讲到这里，',
        kitaru.uma_sex_title,
        '细长的双耳蔫了下去。',
      ]);
      await kitaru.say_and_wait('毕竟在我记忆里……');
      await kitaru.say_and_wait('这里就没什么人来的样子。');
      await era.printAndWait([
        '有些无奈的冲 ',
        you.get_colored_name(),
        ' 耸了耸肩，看来',
        kitaru.sex,
        '并不想让 ',
        you.get_colored_name(),
        ' 因为这件事儿同情',
        kitaru.sex,
        '。',
      ]);
      await kitaru.say_and_wait(['好啦！', callname, ' 不用想法子安慰我啦！']);
      await kitaru.say_and_wait('唔呀！');
      await era.printAndWait([
        '看起来像是突然想到了什么，',
        kitaru.get_colored_name(),
        ' 整个人像是炸毛的小猫一样跳了起来，恢复了那欢喜的表情。',
      ]);
      await kitaru.say_and_wait([
        '对啊！正是因为如此，当时能找到这里来的 ',
        callname,
        ' 很厉害呢！',
      ]);
      await era.printAndWait([
        '在',
        kitaru.sex,
        '又发表几句对运势的看法后，时间也到了该回去的时候了。',
      ]);
      await kitaru.say_and_wait(
        '那么！我去后面换一下衣服！一会儿我们一起回特雷森吧！',
      );
      await era.printAndWait([
        '这样说着，',
        kitaru.get_colored_name(),
        ' 向本殿旁的小房间走去。',
      ]);
      era.drawLine({ content: '几分钟后' });
      await era.printAndWait('哐！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 听到了象征参拜的钟声响起，这说明有客人来了。',
      ]);
      await era.printAndWait([
        '不过 ',
        kitaru.get_colored_name(),
        ' 还没回来。',
      ]);
      await era.printAndWait([
        '看来这下只能由 ',
        you.get_colored_name(),
        ' 出去接待了。',
      ]);
      await era.printAndWait('环顾四周，除了还在摇晃的铜钟外，并没看到人影。');
      await era.printAndWait('塞钱箱的掷币口处，倒是卡了什么东西。');
      era.printButton('检查赛钱箱', 1);
      await era.input();
      await you.say_and_wait('奇怪，怎么会有……');
      await era.printAndWait('塞钱箱的上面莫名的放着一张泛黄的报纸残页。');
      await era.printAndWait(
        '内容看起来是当地报社拍摄的几张记录此间神社日常的照片。',
      );
      await era.printAndWait([
        '人山人海的参拜客，神职人员的笑脸，还有正被他们围着的……两只 ',
        kitaru.get_colored_name(),
        '？',
      ]);
      era.printButton('不对，年纪对不上', 1);
      await era.input();
      await era.printAndWait([
        '看起来是一对',
        kitaru.siblings_sex_title,
        '，年长的',
        kitaru.elder_sibling_sex_title,
        '正握着年幼',
        kitaru.younger_sibling_sex_title,
        '的手。',
      ]);
      await era.printAndWait([
        '年纪稍小的那位 ',
        you.get_colored_name(),
        ' 可以从耳饰确认是 ',
        kitaru.get_colored_name(),
        ' 无疑，但',
        kitaru.sex,
        '身边的那一位是……？',
      ]);
      era.printButton(`（${kitaru.elder_sibling_sex_title}吗？）`, 1);
      await era.input();
      await era.printAndWait([
        '不过之前从来没有听 ',
        kitaru.get_colored_name(),
        ' 说过',
        kitaru.sex,
        '还有一个',
        kitaru.elder_sibling_sex_title,
        '。',
      ]);
      await kitaru.say_and_wait(['欸！', callname, ' 站在那里做什么呢？']);
      await era.printAndWait([
        '换好了校服的 ',
        kitaru.get_colored_name(),
        ' 出现在了 ',
        you.get_colored_name(),
        ' 的身后。',
      ]);
      era.printButton('给待兼福来看', 1);
      era.printButton('不给', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '然而，正当 ',
          you.get_colored_name(),
          ' 想把刚刚捡到到的报纸残页给',
          kitaru.sex,
          '看时。',
        ]);
      } else {
        await era.printAndWait([
          '然而，正当 ',
          you.get_colored_name(),
          ' 想把刚刚捡到到的报纸残页藏起来时。',
        ]);
      }
      await era.printAndWait(['突如起来的一阵风卷过，响起了纸张的撕裂声。']);
      await era.printAndWait([
        '那张残页只在 ',
        you.get_colored_name(),
        ' 的手中留下了极小的一块残片，其余被风卷入半空，在 ',
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        ' 的面前化成了更细小的碎块，向远方四散开来。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '迎接出道战';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 参加出道赛的日子终于到来了。',
      ]);
      await era.printAndWait([
        '从平日训练时的数据来看，名叫 ',
        kitaru.get_colored_name(),
        ' 的赛',
        kitaru.uma_sex_title,
        '除了面对逃马容易焦躁之外，其余的能力均在同期中上。',
      ]);
      await era.printAndWait([
        '在出示了证件之后，',
        you.get_colored_name(),
        ' 被许可进入了 ',
        kitaru.get_colored_name(),
        ' 的赛前休息室。',
      ]);
      await kitaru.say_and_wait([callname, '！！！']);
      await era.printAndWait([
        '在看到 ',
        you.get_colored_name(),
        ' 走进房间后 ',
        kitaru.get_colored_name(),
        ' 兴奋地冲 ',
        you.get_colored_name(),
        ' 跑了过来。',
      ]);
      await era.printAndWait([
        '倒是出乎 ',
        you.get_colored_name(),
        ' 的意料。',
      ]);
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          '印象中大部分赛',
          kitaru.uma_sex_title,
          '这个时候都会紧张的不得了，但是 ',
          kitaru.get_colored_name(),
          ' 却是一副兴奋不已的样子。',
        ]);
      } else {
        await era.printAndWait([
          '听前辈们说，大部分赛',
          kitaru.uma_sex_title,
          '这个时候都会紧张的不得了，但是 ',
          kitaru.get_colored_name(),
          ' 却是一副兴奋不已的样子。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' 上下打量了一番待兼福来，',
        kitaru.sex,
        '看起来兴奋不已，一如',
        kitaru.sex,
        '曾经提到过的全身充满了灵力时的表现。',
      ]);
      era.printButton('「运势不错？」', 1);
      await era.input();
      if (era.get('status:56:凶') === 1) {
        await kitaru.say_and_wait('勉勉强强吧……不过出道战大概没问题就是啦。');
      } else {
        await kitaru.say_and_wait('嗯！现在我可是有白兴大人附身的呢！');
      }
      await kitaru.say_and_wait(
        '况且祂派来的神使也在我身边，我和那时候可不一样了！',
      );
      era.printButton('「那时候？」', 1);
      await era.input();
      await era.printAndWait('似乎是没想到自己会不小心说出来。');
      await era.printAndWait([
        '本来满脸堆笑的 ',
        kitaru.get_colored_name(),
        ' 突然顿住了，表情变得有些复杂。',
      ]);
      await kitaru.say_and_wait([
        '在我',
        kitaru.elder_sibling_sex_title,
        '……总之……',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 深吸了几口气，随后继续讲了下去。',
      ]);
      await kitaru.say_and_wait(
        '当时是我有生以来第一次想要抽签！结果因为没有零钱，只好放弃的那一天！',
      );
      await kitaru.say_and_wait(
        '不过和那次不一样！我现在有个强而有力的同伴呢！',
      );
      await era.printAndWait([
        '话毕，',
        you.get_colored_name(),
        '  熟悉的，',
        kitaru.get_colored_name(),
        '  的笑容再次出现在了',
        kitaru.sex,
        '的脸上。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '参拜开始';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('太好了！我跑完了啦哦！');
      await era.printAndWait([
        '第一个冲过终点线后，',
        kitaru.get_colored_name(),
        ' 正在赛道上庆祝着，摆出了双手举向天空的姿势。',
      ]);
      await kitaru.say_and_wait([callname, '！灵验万分！比赛顺利！']);
      if (era.get('status:56:凶') === 1) {
        await kitaru.say_and_wait(
          '就算是凶，有白兴大人加持的我还是赢下来了呢！',
        );
      } else {
        await kitaru.say_and_wait('果然是大吉！连白兴大人都附在了我身上！');
      }
      await kitaru.say_and_wait('一下子就结束了呢！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 仔细回想了一下方才 ',
        kitaru.get_colored_name(),
        ' 的表现，',
        kitaru.sex,
        '的状态很好。',
      ]);
      await era.printAndWait(['平日里的教导', kitaru.sex, '都有用上。']);
      await era.printAndWait('和选拔赛时的笨拙姿态完全不同。');
      await era.printAndWait(
        '如果照这个进步速度下去，菊花赏获胜也不是没有可能。',
      );
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait(
        '感觉状态很好！未来的菊花赏肯定没有问题！下一场比赛是什么呢？',
      );
      await kitaru.say_and_wait('要不要用占卜决定？');
      await kitaru.say_and_wait('呜！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 今日又挨了一记来自于 ',
        you.get_colored_name(),
        ' 的铁爪。',
      ]);
      era.printButton('「青叶赏！」', 1);
      await era.input();
      await kitaru.say_and_wait('诶！青叶赏！');
      await kitaru.say_and_wait('那不是要到很远了吗？');
      await era.printAndWait('的确如此。');
      await era.printAndWait([
        '但考虑到 ',
        kitaru.get_colored_name(),
        ' 的距离适性，以及',
        kitaru.sex,
        '的目标是经典三冠之一的菊花赏。',
      ]);
      await era.printAndWait([
        '况且 ',
        you.get_colored_name(),
        ' 也需要更多的时间了解这位状况游移不定的赛',
        kitaru.uma_sex_title,
        '。',
      ]);
      await era.printAndWait('青叶赏会是一个不错的选择。');
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = '橱窗里的既视感';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '出道战就此结束，代表着 ',
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        ' 的两人三足算是正式启程了。',
      ]);
      await era.printAndWait([
        '作为胜利的奖励，',
        you.get_colored_name(),
        ' 答应陪着',
        kitaru.sex,
        '去商店街采购新的开运道具。',
      ]);
      await era.printAndWait([
        '已经不记得是第几次在呼声中奔向 ',
        kitaru.get_colored_name(),
        '，光是背包里那颗价格不菲的水晶球就压着你喘不过气来。',
      ]);
      await era.printAndWait([
        '提着大包小包的 ',
        you.get_colored_name(),
        ' 扶着墙，汗流浃背之时，却发觉 ',
        kitaru.get_colored_name(),
        ' 的下一声却迟迟没有传来。',
      ]);
      era.printButton('抬起头', 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 入定般地站在体育用品店的橱窗前，只有偶尔甩动几下的马尾能证明',
        kitaru.sex,
        '并不是雕塑之类的死物。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 顺着',
        kitaru.sex,
        '的目光看过去。',
      ]);
      await era.printAndWait('是体育用品店的橱窗，里面的电视机正放着录像。');
      await era.printAndWait([
        '作为训练员的 ',
        you.get_colored_name(),
        ' 立刻认出来其上播放的内容是史上有名的逃马赛',
        kitaru.uma_sex_title,
        '的领放剪辑。',
      ]);
      era.printButton('「待兼福来？」', 1);
      await era.input();
      await kitaru.say_and_wait('……');
      era.printButton('「待兼福来！你还好吗？」', 1);
      await era.input();
      await kitaru.say_and_wait(['啊！没事没事，', callname, '！']);
      await kitaru.say_and_wait('欸嘿！看的有些太入迷了！');
      await kitaru.say_and_wait('我们继续去下一个灵点吧！');
      await era.printAndWait([
        '不对，',
        you.get_colored_name(),
        ' 能感觉的到 ',
        kitaru.get_colored_name(),
        ' 这次转移话题的行为过于刻意了，况且……',
      ]);
      await era.printAndWait([
        '抛开 ',
        kitaru.get_colored_name(),
        ' 的主要跑法是差行这点先不谈，那种表情也并非和其它赛',
        kitaru.uma_sex_title,
        '一样单纯因为看到了别人奔跑的感同身受的开心或是兴奋，而是……',
      ]);
      // await era.printAndWait('那种想要保持微笑，但又因为不断涌上来的悲伤而冲击出的呆滞。');
      await era.printAndWait('呆滞？不，倒不如说是标准到了极点的微笑。');
      era.printButton('「刚才发生了什么事？」', 1);
      era.printButton('「怎么了吗？」', 2);
      await era.input();
      await kitaru.say_and_wait('……那个');
      await kitaru.say_and_wait('就是觉得有些既视感啦！');
      era.printButton('「既视感？」', 1);
      await era.input();
      await kitaru.say_and_wait('就是……就是……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见 ',
        kitaru.get_colored_name(),
        ' 的眼神变得有些游离不定，晃了几下脑袋。',
      ]);
      await kitaru.say_and_wait([
        '想到了我的',
        kitaru.elder_sibling_sex_title,
        '啦！以前和',
        kitaru.sex,
        '一起并走的时候，',
        kitaru.sex,
        '总是像电视里那些逃马一样把我甩开了好大好大的一段距离呢！',
      ]);
      era.printButton(
        `「听起来你的${kitaru.elder_sibling_sex_title}是位很优秀的赛${kitaru.uma_sex_title}吧？」`,
        1,
      );
      await era.input();
      await kitaru.say_and_wait('是的……只是……');
      await era.printAndWait([
        '近乎是从喉咙里强行挤出来的回答，',
        kitaru.get_colored_name(),
        ' 背过去的耳朵像要插到脑袋里一样。',
      ]); // 紧张
      await kitaru.say_and_wait('去世了……');
      await kitaru.say_and_wait('对……去世了……');
      era.printButton('「抱歉」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '诶诶！抱歉的应该是我才对，又说了这么奇怪的话。',
      );
      await kitaru.say_and_wait([
        '和 ',
        callname,
        ' 在一起的时候，老是容易得意忘形呢！',
      ]);
      await kitaru.say_and_wait('唔……');
      await era.printAndWait([
        '之后 ',
        kitaru.get_colored_name(),
        ' 草草的找借口结束了这次庆祝活动，',
        you.get_colored_name(),
        ' 独自一人提着那堆采购来的开运物品回到了自己的办公室。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = '旋风扫净';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} tannhauser 待兼诗歌剧
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {PrintedSpan} callname_62 待兼诗歌剧对玩家的称呼
     */
    const f = async (kitaru, tannhauser, you, callname, callname_62) => {
      await era.printAndWait([
        '如往常一样，',
        you.get_colored_name(),
        ' 在去往办公室的路上。',
      ]);
      await era.printAndWait('「砰！！！」');
      await era.printAndWait([
        '直到在路过赛',
        kitaru.uma_sex_title,
        '宿舍的时候，听到了一声巨响。',
      ]);
      era.printButton('分辨一下声音的方向', 1);
      era.printButton('无视', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '虽然 ',
          you.get_colored_name(),
          ' 的听力比不上那些赛',
          kitaru.uma_sex_title,
          '，但在宁静的早上定位这突兀声响的方位对 ',
          you.get_colored_name(),
          ' 而言不难。',
        ]);
        await tannhauser.say_as_unknown_and_wait('呜呜……');
        await era.printAndWait(['某位', kitaru.uma_sex_title, '发出的哀叹。']);
        await kitaru.say_as_unknown_and_wait('啊啊啊！万分抱歉！');
        await era.printAndWait([
          '以及，毫无疑问是 ',
          kitaru.get_colored_name(),
          ' 的声音。',
        ]);
        await era.printAndWait([
          '当 ',
          you.get_colored_name(),
          ' 还在犹豫着要不要给',
          kitaru.sex,
          '打个电话的时候，',
          you.get_colored_name(),
          ' 看到宿舍门口蹦出了一个熟悉的家伙。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 大概能猜到，一定是自己那令人不省心的担当又整出了什么乱子。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 加快脚步，打算趁着这件事被学生会那帮人发现前先溜走。',
        ]);
        await era.printAndWait([
          '直到 ',
          you.get_colored_name(),
          ' 感觉到衣服被身后什么人扯住了。',
        ]);
      }
      await kitaru.say_and_wait('啊哈哈！');
      await kitaru.say_and_wait('太好了！');
      await kitaru.say_and_wait(['是 ', callname, '！']);
      await you.say_and_wait('唉……');
      era.printButton('「需要帮忙吗？」', 1);
      era.printButton('「又闯祸了？」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('喔喔！看来今天是大吉呢！');
        await kitaru.say_and_wait([
          '乐于助人的 ',
          callname,
          ' 在灾难之后突然出现！',
        ]);
      } else {
        await kitaru.say_and_wait('呜欸！不愧是我的命定之人！一下子就猜中了！');
        await kitaru.say_and_wait([
          '不过 ',
          callname,
          ' 一定会帮忙的吧！我们可是一莲托生的关系呢！',
        ]);
        await era.printAndWait([
          '拗不过 ',
          kitaru.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 还是点了点头',
        ]);
      }
      await kitaru.say_and_wait('那个……总之先过来吧！');
      await era.printAndWait([
        '在保安的诧异目光下，',
        kitaru.sex,
        '不由分说的把 ',
        you.get_colored_name(),
        ' 拉进了宿舍！',
      ]);
      await era.printAndWait([
        '一打开门，闯入 ',
        you.get_colored_name(),
        ' 眼帘的就是一座由杂物堆积而成的大山。',
      ]);
      await tannhauser.say_and_wait('救……');
      if (era.get('cflag:62:招募状态') === 1) {
        await tannhauser.say_and_wait([callname_62, '……救救我！']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 的另一位担当正被埋在下面。',
        ]);
      } else {
        await era.printAndWait([kitaru.sex, '的室友正被压在下面。']);
      }
      era.printButton('「这座垃圾山是？」', 1);
      await era.input();
      await kitaru.say_and_wait('才不是垃圾山呢！');
      await kitaru.say_and_wait('这些是！我一直以来收集的开运物品啦！');
      await kitaru.say_and_wait(
        '或许照着这个势头增长下去，特雷森学院有一天会被吞噬也不一定！',
      );
      await kitaru.say_and_wait('啊，上面那句不是占卜而是我的猜测。');
      await kitaru.say_and_wait([
        '好了好了！',
        callname,
        ' 帮我想想有什么地方放吧！',
      ]);
      await era.printAndWait([
        '各种 ',
        you.get_colored_name(),
        ' 叫得出名字的，或叫不出名字的杂物，小玩意混在这座大山里，甚至还包括些明显是最近才买的纪念品。',
      ]);
      await era.printAndWait('倒不如说现在才倒本来就是已经是大吉中的大吉了。');
      await era.printAndWait([
        '名叫 ',
        kitaru.get_colored_name(),
        ' 的赛',
        kitaru.uma_sex_title,
        '，意外的有很严重的囤积癖。',
      ]);
      await era.printAndWait('果然，答案只有一个了。');
      era.printButton('「扔掉吧……」', 1);
      await era.input();
      await kitaru.say_and_wait('欸？');
      await kitaru.say_and_wait('欸！！！！！！');
      era.drawLine({ content: '特雷森学院 宿舍后的焚化炉' });
      await era.printAndWait([
        '面对着堆积如山的开运物品，',
        you.get_colored_name(),
        ' 决定从哪个开始呢？',
      ]);
      let a = true;
      let b = true;
      let c = true;
      do {
        era.printMultiColumns(
          [
            { c: '看起来平平无奇的瓶盖', e: a },
            { c: '损坏颇为严重的人偶', e: b },
            { c: '写有【大愿成就】的御守', e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = false;
            await kitaru.say_and_wait(
              '这个，这个是我第一次一下子就拧开的瓶盖！',
            );
            await kitaru.say_and_wait('求你了！绝对不行啊！');
            break;
          case 2:
            b = false;
            await kitaru.say_and_wait(
              '呜！那是我差点被三轮车压到时替我受难的人偶！',
            );
            await kitaru.say_and_wait('扔掉它的话我会遭大厄运的！');
            break;
          case 3:
            c = false;
            await kitaru.say_and_wait(
              '啊！那是我小学的时候！带领我进入球技校园八强的御守！',
            );
            await kitaru.say_and_wait('从它开始绝对不行！');
        }
      } while (a || b || c);
      await kitaru.say_and_wait('呜呜！果然哪个都不行啊！');
      await kitaru.say_and_wait([
        '我恳求你！',
        callname,
        '，能不能不要扔掉！我什么都会做的！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 不得不把拼命摩擦着双手的 ',
        kitaru.get_colored_name(),
        ' 从焚化炉前拉走。',
      ]);
      await era.printAndWait('看来得好好考虑一下怎么处理这些东西了。');
    };
    f.title = title;
    return f;
  })(),
  ws_38: (() => {
    const title = '收容！开运物品';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([callname, ' 真是太好了！']);
      await era.printAndWait([
        '在一番思量之下，',
        you.get_colored_name(),
        ' 想出了一个或许可行的解决办法——',
      ]);
      await era.printAndWait([
        '就是让 ',
        kitaru.get_colored_name(),
        ' 把东西暂存到 ',
        you.get_colored_name(),
        ' 家里。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 看着 ',
        kitaru.get_colored_name(),
        ' 正一个一个的用',
        kitaru.sex,
        '那些形态各异的开运道具填满了 ',
        you.get_colored_name(),
        ' 的屋子四处。',
      ]);
      await era.printAndWait([
        '那种异常兴奋的姿态，不像是',
        kitaru.uma_sex_title,
        '，倒像是正在标记着自己领地的小动物。',
      ]);
      await kitaru.say_and_wait('欸嘿嘿！真是有些抱歉了！');
      await kitaru.say_and_wait(
        '所以收集开运道具可是我从……一直以来保持的习惯呢！！！',
      );
      await kitaru.say_and_wait('在我成神前！都会一直坚持下去吧！');
      await era.printAndWait([
        kitaru.sex,
        '似乎斟酌了一下，随后装作不经意地跳过了那个',
        kitaru.sex,
        '本想说出来的时间点。',
      ]);
      await era.printAndWait('……就和出道战的那时候一样');
      await kitaru.say_and_wait([
        '话说，今后也能经常来 ',
        callname,
        ' 的家里看看吗？',
      ]);
      await era.printAndWait([
        '看着正在 ',
        you.get_colored_name(),
        ' 家客厅中雀跃不已的 ',
        kitaru.get_colored_name(),
        '，无奈地点了点头。',
      ]);
      await kitaru.say_and_wait('欸——不要露出那种表情吗？');
      await kitaru.say_and_wait([
        '撒！那 ',
        callname,
        ' 有什么想麻烦阿福的吗！我会不遗余力的！',
      ]);
      await era.printAndWait([
        '似乎是知道自己的行为的确给 ',
        you.get_colored_name(),
        ' 添了不少的麻烦，橙发的',
        kitaru.teen_sex_title,
        '做出了',
        kitaru.sex,
        '标志性的动作，绷直的白皙双臂伸向天花板，期待着 ',
        you.get_colored_name(),
        ' 的回答。',
      ]);
      await era.printAndWait([
        '有什么能麻烦 ',
        kitaru.get_colored_name(),
        ' 的吗？',
      ]);
      await era.printAndWait([
        '嗯……只要',
        kitaru.sex,
        '不给自己添麻烦就是最大的帮助了。',
      ]);
      await era.printAndWait([
        '不过，这或许是个进一步了解',
        kitaru.sex,
        '的好机会。',
      ]);
      await era.printAndWait([
        '比如，',
        kitaru.sex,
        '经常提及的那位白兴大人，对于 ',
        kitaru.get_colored_name(),
        ' 而言，似乎远不只是普通的信仰那么简单。',
      ]);
      await kitaru.say_and_wait('诶！想更多的了解白兴大人！');
      await kitaru.say_and_wait('唔……');
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见',
        kitaru.sex,
        '像是想起了什么一样，皱了皱眉头，呼吸变得有些急促。',
      ]);
      era.printButton('「实在不愿意的话……」', 1);
      await era.input();
      await kitaru.say_and_wait('不不不不不！');
      await kitaru.say_and_wait('只是今天还不是大吉啦！我需要先准备一下！');
    };
    f.title = title;
    return f;
  })(),
  ws_42: (() => {
    const title = '所谓白兴大人';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('白兴大人');
      await era.printAndWait([
        '这位神明几乎整天被挂在 ',
        kitaru.get_colored_name(),
        ' 的嘴边。',
      ]);
      await era.printAndWait([
        '训练的好坏，天气的转变，乃至是地球的转动，都能被 ',
        kitaru.get_colored_name(),
        ' 以某种形式和',
        kitaru.sex,
        '口中的白兴大人关联到一起。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 询问过很多次，得到的却是',
        kitaru.sex,
        '语焉不详的描述。',
      ]);
      await era.printAndWait('直到有一天……');
      await you.say_and_wait('所以，我也算开运道具吗？！');
      await kitaru.say_and_wait('欸！可是有着承蒙关照之人能带来幸运的说法呢！');
      await era.printAndWait([
        '在',
        kitaru.sex,
        '几近恳求的态度下，',
        you.get_colored_name(),
        ' 只好答应了和',
        kitaru.sex,
        '一起出门开运的请求。',
      ]);
      await kitaru.say_and_wait([
        '首先是粗点心店吧！就在这里占卜一下 ',
        callname,
        ' 的运势！',
      ]);
      await kitaru.say_and_wait('大吉！');
      await kitaru.say_and_wait('开了一个好头呢！');
      await kitaru.say_and_wait('然后是那家杂货店！');
      await kitaru.say_and_wait('这个达摩看起来很好的样子！');
      await kitaru.say_and_wait('哦！原来眼睛已经被画上了吗？');
      await era.printAndWait(
        '忙碌了差不多一天，几乎逛遍了商店街的每一个角落。',
      );
      await kitaru.say_and_wait(
        '欸嘿，果然还是应该来神社收尾啊！拍拍手祈愿，感谢这一天平安无事！',
      );
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('唔，该做的都做完了呢！');
      await kitaru.say_and_wait([callname, '！我准备好了！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见',
        kitaru.sex,
        '突然底下了头，随后，像是下定了什么决心似的，望向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait([
        callname,
        ' 一直不是很好奇白兴大人的事情吗……？',
      ]);
      await kitaru.say_and_wait([
        '其实，那个是',
        kitaru.elder_sibling_sex_title,
        '告诉我的神明！',
      ]);
      await era.printAndWait(
        '用双手捂着脑袋，将那本就乱糟糟的橙发弄的更加混乱，就像是强迫着自己回忆一样。',
      );
      await kitaru.say_and_wait([
        '记得小时候，我经常被拿去和事事都能做好的',
        kitaru.elder_sibling_sex_title,
        '相比较。',
      ]);
      await kitaru.say_and_wait('那时我跑的很慢，甚至连闸门都不敢出。');
      await kitaru.say_and_wait([
        '但',
        kitaru.elder_sibling_sex_title,
        '和我不同，',
        kitaru.sex,
        '是位很优秀的逃马呢！连特雷森都对',
        kitaru.sex,
        '发出过邀请哦！',
      ]);
      await kitaru.say_and_wait([
        '为了安慰我，',
        kitaru.elder_sibling_sex_title,
        '会给我做每次都是大吉的占卜，还有就是各种开运物品！',
      ]);
      await kitaru.say_and_wait([
        '还有白兴大人的加持！',
        kitaru.elder_sibling_sex_title,
        '告诉我，只要有白兴大人的加持，就能变得幸运！',
      ]);
      await kitaru.say_and_wait('所以，我一直都在相信着白兴大人！');
      await kitaru.say_and_wait('直到……');
      await kitaru.say_and_wait(['直到后面', kitaru.sex, '去世了。']);
      await kitaru.say_and_wait('而……');
      await kitaru.say_and_wait([
        kitaru.sex,
        '总是说，让白兴大人多多庇佑我，但……也许正是白兴大人没有庇佑',
        kitaru.sex,
        '。',
      ]);
      await kitaru.say_and_wait('有时我在想，是不是因为……要是我……');
      await era.printAndWait([
        '先是眼角出现了些许泪光，而后一滴，两滴，泪珠断断续续的叩响了 ',
        kitaru.get_colored_name(),
        ' 脚下的石板路。',
      ]);
      await kitaru.say_and_wait([
        '抱歉……自顾自的说了这么多，',
        callname,
        ' 一定觉得我很烦吧……',
      ]);
      era.printButton('递出纸巾', 1);
      await era.input();
      await kitaru.say_and_wait('嗯……');
      await kitaru.say_and_wait('谢谢……');
      await era.printAndWait([
        '在擦干眼泪之后，',
        kitaru.get_colored_name(),
        ' 狠狠地甩了几下头，而后再次尝试露出往日的笑容。',
      ]);
      await kitaru.say_and_wait('不能哭……不能哭……');
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        '最喜欢看见我的笑容了……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 听见 ',
        kitaru.get_colored_name(),
        ' 在不停地喃喃自语，而后又几乎是自责，乃至愧疚般的扯着自己的耳朵与尾巴。',
      ]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        '近乎疯狂的，想要逃避掉自己正在哭泣的现实。',
      ]);
      await kitaru.say_and_wait('唔！');
      era.printButton('伸出手', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 将',
        kitaru.sex,
        '拥入怀中，尝试让',
        kitaru.sex,
        '冷静下来，不断流出的泪水，以至于让 ',
        you.get_colored_name(),
        ' 的胸口都湿了一大片。',
      ]);
      era.println();
      await era.printAndWait([
        '寂寥无人的神社中，',
        you.get_colored_name(),
        ' 默默地抚摸着 ',
        kitaru.get_colored_name(),
        ' 的头发，直到',
        kitaru.sex,
        '的颤抖渐渐平息。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '选召之人';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('又到了初诣的时候');
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          '依据习惯，特雷森学院的训练员往往会和自己负责的赛',
          kitaru.uma_sex_title,
          '一同进行这个仪式。',
        ]);
      } else {
        await era.printAndWait([
          '来自特雷森内部的手册上，清楚无疑的写着，请尽量与自己负责的担当赛',
          kitaru.uma_sex_title,
          '一同进行。',
        ]);
      }
      await era.printAndWait([
        '在事先同 ',
        kitaru.get_colored_name(),
        ' 约定好了行程之后，',
        kitaru.sex,
        '没有向往常那样与 ',
        you.get_colored_name(),
        ' 一同在校园大门前见面之后再前往目的地。',
      ]);
      await era.printAndWait([
        '和先前',
        kitaru.sex,
        '说的一样，原本寂静冷清的神社此刻终于算是有了些人气，三三两两的参拜客们并在一起，谈笑声不断响起。',
      ]);
      await era.printAndWait('此间神社巫女为众人祈福的舞蹈开始了。');
      await era.printAndWait('「咚！」');
      await era.printAndWait([
        you.get_colored_name(),
        '听见鼓声响起，而后是三味线的加入。',
      ]);
      await era.printAndWait([
        '表演开始了，',
        kitaru.get_colored_name(),
        ' 仍不知所踪。',
      ]);
      await era.printAndWait('「哗啦！」');
      await era.printAndWait(
        '然后神乐铃的声音响起，代表着属于此间神社的巫女登场。',
      );
      await era.printAndWait([
        '舞台上的',
        kitaru.uma_sex_title,
        '正随着富有韵律感的音乐翩翩起舞。',
      ]);
      await era.printAndWait(
        '即使是如此寒冷的天气，周围人们的欢呼声也是丝毫不减。',
      );
      await era.printAndWait([
        '一年以来人们积攒的疲惫与劳累，正随着舞台上那橘发金眼的',
        kitaru.uma_sex_title,
        '悄然曼妙的请神舞蹈下悄然脱落，无声无息。',
      ]);
      await era.printAndWait([
        '是啊，所谓',
        kitaru.uma_sex_title,
        '，不正是活着的，现人神之类的生灵吗？',
      ]);
      await era.printAndWait([
        '只不过，',
        you.get_colored_name(),
        ' 是知道那位正翩翩起舞的现人神的身份的。',
      ]);
      await era.printAndWait([
        '那正是迟迟不露面的 ',
        kitaru.get_colored_name(),
        '，随着',
        kitaru.sex,
        '手中神乐铃的摇动，清澈的铃声洁净着周围的环境和祈祷者的心灵。',
      ]);
      await era.printAndWait([
        '平日里一向脱线的',
        kitaru.sex,
        '，居然能露出如此圣严的神态，倒是颇让 ',
        you.get_colored_name(),
        ' 意外的。',
      ]);
      era.drawLine({ content: '待兼福来家的神社 神乐结束后' });
      await era.printAndWait([
        '几乎已是凌晨时分，为了自家神社忙前忙后的 ',
        kitaru.get_colored_name(),
        ' 总算得以有片刻休息。',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '那家伙几乎是一刻不停的跑到了 ',
        you.get_colored_name(),
        ' 的面前，带动着巫女服的振袖一摆一摆的',
      ]);
      await kitaru.say_and_wait([
        '非常非常抱歉！毕竟是难得的，神社里有点人的时候！忘了应该要提前和 ',
        callname,
        ' 说一下的！',
      ]);
      await kitaru.say_and_wait(
        '父亲毕竟是这里的宫司呢，为此我也得好好努力才行！',
      );
      await kitaru.say_and_wait('不过，作为回报……');
      await kitaru.say_and_wait('现在是巫女的单独服务时间哦！');
      era.printButton('「阿福这么说，其他参拜客们不会嫉妒吗？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '诶诶！',
        callname,
        ' 可是受到了白兴大人选召的人啊！',
      ]);
      await era.printAndWait(
        '两人安静而单调的脚步声，就在神社中响起，最后二人来到了神社的塞钱箱前。',
      );
      await kitaru.say_and_wait(['那么！', callname, ' 的愿望是什么呢！']);
      await kitaru.say_and_wait(
        '现在的我可是灵力的最顶点呢！无论是什么愿望都会实现的！',
      );
      await kitaru.say_and_wait('甚至能听到白兴大人的声音呢！');
      await era.printAndWait([
        '穿着兰花般素白巫女服的 ',
        kitaru.get_colored_name(),
        '，握住了 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      era.printButton('「那自然是希望阿福能赢下接下来的青叶赏了」', 1);
      await era.input();
      await kitaru.say_and_wait('诶……');
      await kitaru.say_and_wait([callname, ' 的愿望是这个吗？']);
      await kitaru.say_and_wait('我明白了！我会努力的！');
      await kitaru.say_and_wait([
        '那么！',
        callname,
        ' 再见！可以的话！明天也要来哦！',
      ]);
      await era.printAndWait([
        '目送 ',
        you.get_colored_name(),
        ' 离开之后，',
        kitaru.get_colored_name(),
        ' 回去了',
        kitaru.sex,
        '位于神社的居所。',
      ]);
      await era.printAndWait([
        '不过，当 ',
        you.get_colored_name(),
        ' 迈出神社的朱红鸟居之时，心底莫名响起了一道声音。',
      ]);
      await era.printAndWait('而后，周围的世界几乎被纯白所吞没。');
      era.drawLine({ content: '？？？' });
      await typing('选召之人/受选者，你/我们的愿望/旨意是什么？', kitaru.color);
      era.println();
      era.printButton('激振的气氛（全属性+7）', 1);
      era.printButton('战栗的气息（速度+30）', 2);
      era.printButton('轻微的破绽（技能点数+40）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await kitaru.print_and_wait('五感变得敏锐……');
          break;
        case 2:
          await kitaru.print_and_wait('轻点脚尖，轻快而又舒适……');
          break;
        case 3:
          await kitaru.print_and_wait(
            '系带解开——窗户外敞——锁像上过油一样转动……',
          );
      }
      era.println();
      await era.printAndWait([
        '当 ',
        you.get_colored_name(),
        ' 回过神来的时候，已经坐上了返回特雷森的末班车。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '仪式理论';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '随着青叶赏日期的逼近，训练的强度也逐渐降了下来。',
      );
      await era.printAndWait([
        '靠在栏杆上，望着那些正在训练场上挥洒汗水的赛',
        kitaru.uma_sex_title,
        '们，',
        you.get_colored_name(),
        ' 若有所思。',
      ]);
      await era.printAndWait([
        '赛',
        kitaru.uma_sex_title,
        '踏上赛场的理由有很多。',
      ]);
      await era.printAndWait(['而 ', kitaru.get_colored_name(), '……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 记得',
        kitaru.sex,
        '说过的话。',
      ]);
      await kitaru.say_and_wait(
        [
          '是名叫待兼福来的',
          kitaru.teen_sex_title,
          '！为了实现幸福！成为神明！命运中的必经之路！',
        ],
        true,
      );
      await era.printAndWait('那对于菊花赏的莫名执念，究竟是因为什么？');
      await era.printAndWait([
        '怀着疑问的 ',
        you.get_colored_name(),
        ' 在帮着那家伙擦完汗之后，再次向 ',
        kitaru.get_colored_name(),
        ' 提出了这个问题。',
      ]);
      await kitaru.say_and_wait('诶……我也不太记得了。');
      await kitaru.say_and_wait('大概是和某人的约定吧。');
      await era.printAndWait([
        '自上次在神社里的痛哭之后，',
        you.get_colored_name(),
        ' 再也没有和 ',
        kitaru.get_colored_name(),
        ' 聊过有关于',
        kitaru.elder_sibling_sex_title,
        '，甚至尽力避免涉及家庭的相关话题。',
      ]);
      await era.printAndWait([
        '不过，对于赛',
        kitaru.uma_sex_title,
        '而言，为何奔跑可是至关重要的事情，考虑到 ',
        kitaru.get_colored_name(),
        ' 的交际圈，能和',
        kitaru.sex,
        '立下约定的会是……？',
      ]);
      era.printButton(`「和${kitaru.elder_sibling_sex_title}吗？」`, 1);
      era.printButton('「和白兴大人吗？」', 2);
      await era.input();
      await kitaru.say_and_wait('也许吧……唔。');
      await kitaru.say_and_wait(
        '除非刻意去想，否则童年的记忆总像是蒙上了一层雾那样。',
      );
      await kitaru.say_and_wait(['话说，', callname, ' 有听过类似的事情吗？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 将吸满了汗的热腾腾毛巾搭在了一旁，按住了试图挑起来的 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      era.printButton('「什么事情？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '赛',
        kitaru.uma_sex_title,
        '通过献祭变成神明什么的？',
      ]);
      await era.printAndWait([
        '本来在提到',
        kitaru.elder_sibling_sex_title,
        '后略有不快的面容，突然变得的明快起来。',
      ]);
      await era.printAndWait([
        '话题的突然转向令 ',
        you.get_colored_name(),
        ' 丝毫摸不着头脑。',
      ]);
      era.printButton('「献祭？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '就是那种向神明呈上礼品的仪式啦！对于赛',
        kitaru.uma_sex_title,
        '而言，毫无疑问的就是赛跑后的胜利呢！',
      ]);
      await kitaru.say_and_wait(
        '不是也有书本提到赛跑本来就是献给三女神的舞蹈什么的嘛！',
      );
      await kitaru.say_and_wait('之前在家里阁楼的藏书中瞥见过……');
      await kitaru.say_and_wait(
        '至少对我而言，仪式的道路中有菊花赏，这我毫无疑问的能够确定哦！',
      );
      await era.printAndWait([
        '这样说着，给周围的环境无形中添了几分秘氛的 ',
        kitaru.get_colored_name(),
        ' 继续去训练了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_aoba_sho: (() => {
    const title = '迎接青叶赏';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('青叶赏乃是日本德比的预选赛。');
      await era.printAndWait([
        '因此许多想借此获取日本德比出走资格的赛',
        kitaru.uma_sex_title,
        '都会参加这比赛。',
      ]);
      await era.printAndWait(
        '光是在赛前展示阶段的其他选手散发而出的气势便和出道战大不相同。',
      );
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          '即使对于身经百战的 ',
          you.get_colored_name(),
          ' 而言，也带来了不少重压。',
        ]);
      } else {
        await era.printAndWait([
          '哪怕对作为训练员的 ',
          you.get_colored_name(),
          '，也带来了不少重压。',
        ]);
      }
      era.drawLine({ content: '东京赛马场 休息室门前' });
      era.printButton('推开门', 1);
      await era.input();
      await era.printAndWait([
        '再次进入赛前休息室，希望能见到同上次出道战时一样的 ',
        kitaru.get_colored_name(),
        '……',
      ]);
      await kitaru.say_and_wait('呼……哈！呼……哈！');
      await era.printAndWait([
        '事与愿违，像是呼吸不上来一样，',
        kitaru.sex,
        '大口地喘着气。',
      ]);
      era.printButton('「需要我给你一个纸袋吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('啊哈哈……没事的！没事的！');
      await kitaru.say_and_wait('就连赛前的占卜不是也说我现在是大吉吗？');
      await kitaru.say_and_wait([
        '白兴大人……',
        callname,
        '……还有',
        kitaru.elder_sibling_sex_title,
        '……',
      ]);
      await kitaru.say_and_wait('没事的！一定会没事的！');
      await era.printAndWait([
        '不应该……',
        kitaru.get_colored_name(),
        ' 的表现过于应激了，就算用单纯的赛前紧张来解释也完全说不通。',
      ]);
      await kitaru.say_and_wait(
        '好了好了！没问题的，我们之后还在菊花赏上夺胜呢！',
      );
      await era.printAndWait([
        '似乎是察觉到了 ',
        you.get_colored_name(),
        ' 的担心，',
        kitaru.get_colored_name(),
        ' 尝试转开了话题。',
      ]);
      await kitaru.say_and_wait('对……对，为了之后的菊花赏，我会全力以赴的！');
      await era.printAndWait([
        '过于明显的自我暗示，希望对于 ',
        kitaru.get_colored_name(),
        ' 而言是有效的。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  aoba_sho_end: (() => {
    const title = '影中的福';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {number} rank 比赛名次
     */
    const f = async (kitaru, you, callname, rank) => {
      await era.printAndWait([
        '开始，',
        kitaru.get_colored_name(),
        ' 的走位和步态控制都很优秀，尽管平日里的',
        kitaru.sex,
        '是一个脱线的性格，但 ',
        you.get_colored_name(),
        ' 的教导，',
        kitaru.sex,
        '还是有铭记于心的。',
      ]);
      await era.printAndWait([
        '比赛进入了末盘，',
        kitaru.get_colored_name(),
        ' 也开始加速了，和几位领放选手的距离在迅速缩短。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 展现出的末脚能力颇为优秀，几马身的差距转瞬即逝。',
      ]);
      await era.printAndWait('直到……');
      if (rank === 1) {
        await era.printAndWait([
          '解说「发生什么了吗？',
          kitaru.get_colored_name(),
          ' 跑姿出现了明显的变形。」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 听见广播里如此解说。',
        ]);
        await era.printAndWait([
          '确实如此……',
          kitaru.get_colored_name(),
          ' 在逼近那位领放选手之后，跑姿变得越来越不稳，而脸上的表情也变得越发的狰狞起来。',
        ]);
        await era.printAndWait([
          '尽管凭着硬实力，',
          kitaru.get_colored_name(),
          ' 还是第一名冲线，不过末脚的时机，步伐，抢位意识，完全没有，似乎方才 ',
          kitaru.get_colored_name(),
          ' 只是凭着作为赛',
          kitaru.uma_sex_title,
          '的本能在奔跑一样。',
        ]);
        await era.printAndWait([
          '在 ',
          kitaru.get_colored_name(),
          ' 以一种几近踉跄的跑姿冲过终点线之后，',
          you.get_colored_name(),
          ' 几乎是一步没停的冲向了赛场，在和周围待命的医生确认没有问题之后，直接抱着',
          kitaru.sex,
          '来到了休息室。',
        ]);
      } else {
        await era.printAndWait([
          '解说「是失速了吗？',
          kitaru.get_colored_name(),
          ' 的速度突然下降了」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 听见广播里如此解说。',
        ]);
        await era.printAndWait([
          '在 ',
          kitaru.get_colored_name(),
          ' 以一种几近踉跄的跑姿冲过终点线之后，',
          you.get_colored_name(),
          ' 几乎是一步没停的冲向了赛场，在和周围待命的医生确认没有问题之后，直接抱着',
          kitaru.sex,
          '来到了休息室。',
        ]);
      }

      era.drawLine({ content: '东京赛马场 休息室内' });
      await kitaru.say_and_wait('欸嘿嘿！都说没事的了！');
      await era.printAndWait([
        '赛后，坐在休息室里的 ',
        kitaru.get_colored_name(),
        '，正双脚赤裸的坐在椅子上。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 不放心，还是让',
        kitaru.sex,
        '脱下鞋袜仔细检查，也就是进行触诊。',
      ]);
      await era.printAndWait(
        '裸露在外的白润由于比赛之后微微泛着红，而脚掌的弧线顺滑而流畅，足趾则因突然暴露在空气中而微微颤抖着。',
      );
      await era.printAndWait([
        '不过 ',
        you.get_colored_name(),
        ' 并没有多少心思去欣赏 ',
        kitaru.get_colored_name(),
        ' 的双足，只是再三确认刚才的情况并非骨折或者是扭伤。',
      ]);
      await era.printAndWait('但是，如果不是肉体上的问题话……');
      era.printButton('回忆', 1);
      await era.input();
      await era.printAndWait([
        '似曾相识，开始选拔赛的时候也有类似的情况，只不过，',
        you.get_colored_name(),
        ' 当时只当成是 ',
        kitaru.get_colored_name(),
        ' 对冲刺时机的掌握并不熟练。',
      ]);
      era.printButton('「发生了什么？」', 1);
      await era.input();
      await kitaru.say_and_wait('啊……');
      era.printButton('「就是刚才末盘时。」', 1);
      await era.input();
      await era.printAndWait([
        '原本还算是欢快的',
        kitaru.sex,
        '再次陷入了沉默。',
      ]);
      await kitaru.say_and_wait('唔……');
      await kitaru.say_and_wait('不要……');
      await era.printAndWait([kitaru.sex, '双唇紧抿，几乎要咬出血来。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 鲜少在这位赛',
        kitaru.uma_sex_title,
        '口中听到过拒绝。',
      ]);
      era.printButton('停止追问，并就现有的情报分析', 1);
      era.printButton('尝试以更为柔和的口吻继续追问', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '对了，和出道战不同，选拔赛和这次的青叶赏有一个共通点。',
        );
        await era.printAndWait([
          '以逃跑为跑法的',
          kitaru.uma_sex_title,
          '数量与强度均高于平均线，而 ',
          kitaru.get_colored_name(),
          ' 都是在终盘和逃马的对抗中出现此状。',
        ]);
        await era.printAndWait([
          '结合 ',
          kitaru.get_colored_name(),
          ' 平日里的一些表现。',
        ]);
        await era.printAndWait('非常不妙……');
        await era.printAndWait('触景生情，以及选择性遗忘，典型的PTSD症状。');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 尝试以更为柔和的口吻，继续追问，直到……',
        ]);
        await kitaru.say_and_wait('不！不！不是我的错！');
        await kitaru.say_and_wait('求你了！');
        await era.printAndWait(
          '马耳向后背的几乎是要插入自己的脑袋中，原本明亮的双眼染上了浑浊。',
        );
        await era.printAndWait(
          [
            kitaru.get_colored_name(),
            '「',
            {
              color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
              content: '啊啊啊啊啊！！！！！',
            },
            '」',
          ],
          {
            align: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
        );
        await era.printAndWait('砰！', {
          align: 'center',
          color: 'red',
          fontSize: '2.25rem',
          fontWeight: 'bold',
        });
        await era.printAndWait([
          '结结实实的一下，陷入应激状态的 ',
          kitaru.get_colored_name(),
          ' 给了 ',
          you.get_colored_name(),
          ' 一拳。',
        ]);
        await era.printAndWait([
          '幸好，在看到 ',
          you.get_colored_name(),
          ' 倒在地上的同时，',
          kitaru.uma_sex_title,
          '原本浑浊的双眼总算恢复了清明。',
        ]);
        await kitaru.say_and_wait('啊啊啊！非常抱歉！');
        await kitaru.say_and_wait([callname, '！没事吧！我现在就去叫医生！']);
        await era.printAndWait([
          '并无大碍？',
          you.get_colored_name(),
          ' 也的确得到了自己想要知道的东西。',
        ]);
        await era.printAndWait(
          '惊跳反应增强，伴随着攻击性行为的出现，典型的 PTSD 症状。',
        );
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' 陷入了沉思，精神上的缺陷远比肉体上的问题更加棘手。',
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 发现对赛跑患有了 PTSD。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_18: (() => {
    const title = '门槛前';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} suzuka 无声铃鹿
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {PrintedSpan} callname_2 无声铃鹿对玩家的称呼
     * @param {PrintedSpan} s_call_k 无声铃鹿对待兼福来的称呼
     * @param {number} teem_count 担当数量
     */
    const f = async (
      kitaru,
      suzuka,
      you,
      callname,
      callname_2,
      s_call_k,
      teem_count,
    ) => {
      await era.printAndWait([
        '休息日，',
        you.get_colored_name(),
        ' 正坐在办公室里，若有所思',
      ]);
      await era.printAndWait([
        '最开始，只是出于训练员的责任感而和 ',
        kitaru.get_colored_name(),
        ' 签订了担当契约。',
      ]);
      await era.printAndWait([
        '但这位',
        kitaru.teen_sex_title,
        '却远比 ',
        you.get_colored_name(),
        ' 想象的要麻烦，',
        you.get_colored_name(),
        ' 就像是撞上了卡律布狄斯的船长，被扯进了几乎是看不见底的麻烦漩涡中。',
      ]);
      await era.printAndWait([
        '尤其是青叶赏后，',
        kitaru.sex,
        '的情绪变得越来越不稳定。',
      ]);
      await era.printAndWait([
        '不仅是在训练中，平日里的 ',
        kitaru.get_colored_name(),
        ' 也变得越发的不安。',
      ]);
      await era.printAndWait([
        '即使是面对邀请来并走的逃马同学，',
        kitaru.sex,
        '也会在终盘前就失速。',
      ]);
      // 无声铃鹿的差分 需要吗？
      if (era.get('cflag:2:招募状态') === 1) {
        await suzuka.say_and_wait([callname_2, '，', s_call_k, '没事吧？']);
        await era.printAndWait([
          '队伍里的其他成员也对 ',
          kitaru.get_colored_name(),
          ' 现在的状况有所注意。',
        ]);
      }
      await era.printAndWait('那么，现在该怎么办呢？');
      era.printButton('（继续前行吧）', 1);
      await era.input();
      await era.printAndWait([
        '不会有别的答案了吧，毕竟，那家伙可是管 ',
        you.get_colored_name(),
        ' 叫做命定之人啊。',
      ]);
      await era.printAndWait('是时候开始工作了……');
      await era.printAndWait(
        'PTSD，即创伤后应激障碍，通常的病因是个体经历、目睹或遭遇到一个或多个涉及自身或他人的实际死亡。',
      );
      await era.printAndWait(
        '出于保护机制，大脑会自动屏蔽事发时的记忆，或用虚构加以替换，即所谓的选择性遗忘，不能回忆起与创伤有关的事件细节。',
      );
      await era.printAndWait([
        '而平时的 ',
        kitaru.get_colored_name(),
        ' 才能保持',
        kitaru.teen_sex_title,
        '的活泼，只有提到与',
        kitaru.sex,
        '',
        kitaru.elder_sibling_sex_title,
        '相关的事物时才会流露出悲伤正是因为如此。',
      ]);
      await era.printAndWait([
        '继续据此推测，当时赛场上的情景，配合着赛跑本就紧张的高压，一定触发了 ',
        kitaru.get_colored_name(),
        ' 的应激。',
      ]);
      await era.printAndWait('即创伤性再体验症状。');
      await era.printAndWait([
        '那么，童年时的 ',
        kitaru.get_colored_name(),
        '，究竟经历了什么？',
      ]);
      await era.printAndWait([
        '如果是涉及到赛',
        kitaru.uma_sex_title,
        '的事故话，当地的报纸应该会有相关报道。而 ',
        kitaru.get_colored_name(),
        ' 曾经也透露过',
        kitaru.elder_sibling_sex_title,
        '受到特雷森邀请的事实。',
      ]);
      await era.printAndWait([
        '调查开始，',
        you.get_colored_name(),
        ' 决定从……',
      ]);
      era.printButton('翻阅旧报纸', 1);
      era.printButton('查阅特雷森的过往新生档案', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '快十年前的一张报纸，提到了一位',
          kitaru.uma_sex_title,
          '在训练的过程中因事故去世，由于是当地神社宫司的女儿，在当时引起了一阵不小的风波。',
        ]);
        await era.printAndWait(
          '这大概也解释了为何神社的参拜客会比其他地方少那么多。',
        );
        await era.printAndWait([
          '在那张事故现场的照片上，',
          you.get_colored_name(),
          ' 看到了一个熟悉的身影。',
        ]);
        await era.printAndWait([
          '当时出事的时候，',
          kitaru.get_colored_name(),
          ' 也在场，',
          kitaru.sex,
          '亲眼看着自己的',
          kitaru.elder_sibling_sex_title,
          '用逃马在终盘时的冲刺速度撞在了护栏上。',
        ]);
        await era.printAndWait([
          '尽管大脑的保护机制将真实的记忆埋于其下，但在全神贯注的青叶赏赛场上，终盘前的逃马冲刺时那似曾相识的画面，还是引发了 ',
          kitaru.get_colored_name(),
          ' 的心病。',
        ]);
      } else {
        await era.printAndWait([
          '照片上是和 ',
          kitaru.get_colored_name(),
          ' 有着几分神似的长发',
          kitaru.uma_sex_title,
          '。',
        ]);
        await era.printAndWait([
          '优秀的逃马，连特雷森都对',
          kitaru.sex,
          '发出过邀请',
        ]);
        await era.printAndWait([
          '而现在，得益于特雷森还算不错的文件备份意识，那封邀请信的复印件及相关材料正躺在 ',
          you.get_colored_name(),
          ' 的手中。',
        ]);
        await era.printAndWait(
          '一位以菊花赏为目标的逃马……可惜后面由于训练时的意外丧生。',
        );
        await era.printAndWait([
          '当时出事的时候，',
          kitaru.get_colored_name(),
          ' 也在场，',
          kitaru.sex,
          '亲眼看着自己的',
          kitaru.elder_sibling_sex_title,
          '用逃马在终盘时的冲刺速度撞在了护栏上。',
        ]);
        await era.printAndWait([
          '尽管大脑的保护机制将真实的记忆埋于其下，但在全神贯注的青叶赏赛场上，终盘前的逃马冲刺时那似曾相识的画面，还是引发了 ',
          kitaru.get_colored_name(),
          ' 的心病。',
        ]);
      }
      era.println();
      await era.printAndWait('「咚！咚！咚！」');
      await era.printAndWait([you.get_colored_name(), ' 听见办公室的门响了。']);
      era.printButton('「请进！」', 1);
      await era.input();
      await era.printAndWait([
        '门开了，那位给 ',
        you.get_colored_name(),
        ' 带来了不少麻烦的担当，正怯生生的站在门口，如一只担惊受怕的小狐狸，',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait([
        '那个，这个是送给 ',
        callname,
        ' 的开运道具！',
      ]);
      await era.printAndWait([
        '带着明显的歉意，一枚的橙色的御守放在了 ',
        you.get_colored_name(),
        ' 的桌子上。',
      ]);
      await kitaru.say_and_wait('我……我想说……');
      await kitaru.say_and_wait('总之！青叶赏的事情非常抱歉！！！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 揉了揉',
        kitaru.sex,
        '冲 ',
        you.get_colored_name(),
        ' 低下的头，直到',
        kitaru.sex,
        '的马耳再次欢欣的敲打着 ',
        you.get_colored_name(),
        ' 的手背。',
      ]);
      await era.printAndWait('气氛再次如往常一样变得融洽了起来。');
      await kitaru.say_and_wait(['那 ', callname, '！下一次比赛的训练安排？']);
      await era.printAndWait([
        '按计划，本来是该继续出走日本德比的，但是 ',
        kitaru.get_colored_name(),
        ' 现在这个情况，或许正常完赛都会是问题。',
      ]);
      await kitaru.say_and_wait('是要取消吗？！');
      await era.printAndWait([
        kitaru.sex,
        '定然是从 ',
        you.get_colored_name(),
        ' 变得沉默的表情中察觉到了什么，眼瞳里闪烁着不安。',
      ]);
      era.printButton('点头', 1);
      await era.input();
      await era.printAndWait([
        '「可能要取消」',
        you.get_colored_name(),
        ' 这么告诉了',
        kitaru.sex,
      ]);
      await kitaru.say_and_wait('欸欸欸！');
      await kitaru.say_and_wait('没问题，绝对没问题的！');
      await kitaru.say_and_wait('我可以参加比赛的！');
      await era.printAndWait([
        '可以说是谄媚的往 ',
        you.get_colored_name(),
        ' 这边靠拢，不断地对 ',
        you.get_colored_name(),
        ' 说着恳求的话语。',
      ]);
      await era.printAndWait([
        '这真的是 ',
        kitaru.get_colored_name(),
        ' 吗？倒更像是救助站里尽力在新主人面前表现自己的宠物？',
      ]);
      era.printButton('「阿福，你在害怕什么吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('诶！');
      await kitaru.say_and_wait('不是的！');
      await kitaru.say_and_wait('我只是……那个……');
      await kitaru.say_and_wait('唉……');
      await kitaru.say_and_wait([
        callname,
        ' 一定觉得我很没用吧，总是吵吵嚷嚷的，现在，现在快连比赛都跑不了了。',
      ]);
      if (teem_count >= 2) {
        await kitaru.say_and_wait('比你的其他担当差了那么多……');
      } else {
        await kitaru.say_and_wait([
          '第一位担当就是我这样的',
          kitaru.uma_sex_title,
          '，是大凶吧。',
        ]);
      }
      await kitaru.say_and_wait([
        callname,
        ' 是',
        kitaru.elder_sibling_sex_title,
        '之后，第二个愿意认可我的人……',
      ]);
      await kitaru.say_and_wait('但我这么没用……');
      await kitaru.say_and_wait('我，我真的很害怕……');
      await kitaru.say_and_wait([
        callname,
        ' 也会像是',
        kitaru.elder_sibling_sex_title,
        '一样，抛下我一个人吗？',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的声音，像是从冰窟中传来。',
      ]);
      await era.printAndWait([
        '尽管已临近夏季，但此时，办公室内空气却冻得 ',
        you.get_colored_name(),
        ' 皮肤发脆，仿佛玻璃上都结了霜。',
      ]);
      era.printButton('「阿福，你还记得我们最开始见面时的仪式吗？」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), ' 伸出了手']);
      await kitaru.say_and_wait('嗯，拉钩仪式！');
      await kitaru.say_and_wait([
        '是',
        kitaru.elder_sibling_sex_title,
        '教给我的哦，当时和',
        kitaru.sex,
        '约定好了……',
      ]);
      await kitaru.say_and_wait('当时在青叶赏的终盘上……我全想起来了……');
      await kitaru.say_and_wait([
        '连我现在要去菊花赏的目标，也是和',
        kitaru.sex,
        '的约定呢。',
      ]);
      await era.printAndWait([
        '和',
        kitaru.elder_sibling_sex_title,
        '的约定，难怪 ',
        kitaru.get_colored_name(),
        ' 会对菊花赏如此看重。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的话语声逐渐低了下来，直到变成了那种因为抑制哭泣而变得嘶哑的声音，',
      ]);
      await era.printAndWait([
        '早有研究表明，处在高压环境下的人们更容易表现出迷信的行为，为的是尽力让事情回到自己的掌控中。',
      ]);
      await era.printAndWait([
        '对于 ',
        kitaru.get_colored_name(),
        ' 而言，早夭的',
        kitaru.elder_sibling_sex_title,
        '，因丧女后而变得有些严厉的母亲，神社充斥着的神秘主义氛围。',
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        '日常用来安慰',
        kitaru.sex,
        '的白兴大人，毫无疑问成了',
        kitaru.sex,
        '紧握的救命稻草。',
      ]);
      await era.printAndWait([
        '而',
        kitaru.sex,
        '平日里还能维持那个开朗乐观的表象，只是偶尔会在与 ',
        you.get_colored_name(),
        ' 相处的时候露出一点不对劲来，就已经算是大吉了。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 注视着你，泛着泪光的失焦眸子，又像是在祈求着不知等在何处的白兴大人的答复。',
      ]);
      await era.printAndWait([
        '那么，毫无疑问，现在该是 ',
        you.get_colored_name(),
        ' 把自己的担当拉回现实中的时候了。',
      ]);
      era.printButton('「不会的！」', 1);
      await era.input();
      era.printButton('「阿福，我不会抛弃你的！」', 1);
      await era.input();
      era.printButton('「和最开始一样，做个约定吧！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 尽力从把右手从 ',
        kitaru.get_colored_name(),
        ' 的紧握中挣脱，而后握拳，伸出了自己的小拇指。',
      ]);
      era.printButton(
        '「当你陷入困惑，陷入痛苦时，请想起我，我会与你一同承担，让我也成为你奔跑的理由之一吧！」',
        1,
      );
      await era.input();
      await kitaru.say_and_wait('呜……');
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        kitaru.sex,
        '颤颤巍巍地伸出了小拇指，完成了当初神社前别无二致的拉钩仪式。',
      ]);
      await kitaru.say_and_wait('诶嘿……');
      await era.printAndWait([
        '琥珀色的瞳光摇晃着，倒映出了 ',
        you.get_colored_name(),
        ' 注视着',
        kitaru.sex,
        '的眼眸。',
      ]);
      era.printButton('「怎么了！」', 1);
      await era.input();
      await era.printAndWait([
        kitaru.sex,
        '望着 ',
        you.get_colored_name(),
        ' 那过于严肃的表情，突然破涕为笑。',
      ]);
      await kitaru.say_and_wait([
        '没……那个……只是在想……当时占卜出的命定之人是 ',
        callname,
        ' 真是太好了！',
      ]);
      await kitaru.say_and_wait(
        '命定之人都这样说了，如果我还宣布日本德比停止出走，不就和参拜不带上祭品没什么两样吗？',
      );
      await kitaru.say_and_wait([callname, '！请相信我吧！']);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '迎接日本德比';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '在 ',
        kitaru.get_colored_name(),
        ' 的强烈要求下，维持了原定于日本德比的出走计划。',
      ]);
      await era.printAndWait([
        '近乎所有同期的优秀赛',
        kitaru.uma_sex_title,
        '都报名参加了这场比赛，从人气排名来看，',
        kitaru.get_colored_name(),
        ' 只是那些被媒体评价为重在参与的，不起眼的一位。',
      ]);
      await era.printAndWait(
        '也不只有一家媒体，抨击了其位于青叶赏突然失速的表现。',
      );
      era.drawLine({ content: '东京赛马场 休息室门前' });
      era.printButton('推开门', 1);
      await era.input();
      await era.printAndWait([kitaru.sex, '正站在房间内，']);
      await era.printAndWait(
        '让人第一眼以为是水手服的衣物，却有着如巫女服般故意裸露出双肩的设计，赤红的领子如强调般地落在撑出明显形状的挺拔间，',
      );
      await era.printAndWait(
        '下身则是堪堪能遮住其安产形臀部的百褶裙与勾勒出其修长双腿的白色丝袜，还有代表着其巫女身份的绘马，念珠，背后是象征着好运的招财猫',
      );
      await era.printAndWait([
        '这便是名叫 ',
        kitaru.get_colored_name(),
        ' 的赛',
        kitaru.uma_sex_title,
        '的决胜服，可爱，元气，性感，神秘，一切都在这一身服装之中得到了完美的结合。',
      ]);
      era.printButton('「没问题？」', 1);
      await era.input();
      await kitaru.say_and_wait('虽然很想说没问题……但……');
      await kitaru.say_and_wait(
        '光是在展示环节听着粉丝们的声援，就开始紧张了。',
      );
      await kitaru.say_and_wait(['但……', callname, '！']);
      await era.printAndWait([
        '橘发的',
        kitaru.teen_sex_title,
        '深吸一口气，回过头来冲 ',
        you.get_colored_name(),
        ' 尽可能的比了个笑容。',
      ]);
      await kitaru.say_and_wait('所谓最幸运的马赢德比呢！');
      await kitaru.say_and_wait([
        '要论幸运这一块！有白兴大人和 ',
        callname,
        ' 双重加持的我，可是无敌的！',
      ]);
      await era.printAndWait([
        kitaru.sex,
        '向 ',
        you.get_colored_name(),
        ' 比了一个大拇指，自上次立下约定后，',
        you.get_colored_name(),
        ' 能明显感觉到 ',
        kitaru.get_colored_name(),
        ' 的态度转变了许多。',
      ]);
      await era.printAndWait([
        '至少和 ',
        you.get_colored_name(),
        ' 在一起的时候，脸上的微笑没那么刻板了。',
      ]);
      era.printButton('「我可不希望你燃尽啊」', 1);
      await era.input();
      era.printButton('「平安回来！」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！');
      await kitaru.say_and_wait(['我答应过 ', callname, ' 的！']);
      if (era.get('love:56') >= 50) {
        await kitaru.say_and_wait(['不过 ', callname, ' 也给我些开运能量吧！']);
        await era.printAndWait([
          '这样说着，穿着决胜服的 ',
          kitaru.get_colored_name(),
          ' 忽然从面前抱住了 ',
          you.get_colored_name(),
          ' 的身体。',
        ]);
        await era.printAndWait([
          '蓬松的橙色头发在 ',
          you.get_colored_name(),
          ' 的胸前蹭着。',
        ]);
        await era.printAndWait([
          '过了好一会儿，心满意足的 ',
          kitaru.get_colored_name(),
          ' 才抬起头看着 ',
          you.get_colored_name(),
          '。',
        ]);
      }
      await kitaru.say_and_wait([callname, ' 知道吗？']);
      await kitaru.say_and_wait('在仪式中，言语可是有着很重的分量呢！');
      await kitaru.say_and_wait('所以承诺过的事情！我一定会做到的！');
      await era.printAndWait([
        '话毕，调整了一下自己招财猫背包的背带的 ',
        kitaru.get_colored_name(),
        ' 转身走向赛场。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_end: (() => {
    const title = '曙光初现';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait(
        '进入了终盘，大家开始冲刺了，位于前方的逃马也开始了加速！',
      );
      await kitaru.print_and_wait('头好疼……');
      await kitaru.say_and_wait('不……不要！');
      await kitaru.print_and_wait([
        '那一天，我看见留着橙色长发的赛',
        kitaru.uma_sex_title,
        '开始了冲刺。',
      ]);
      await kitaru.say_and_wait('不要！');
      await kitaru.print_and_wait('砰！！！');
      await kitaru.print_and_wait(
        '裸露在外的骨头，歪斜的栏杆，还有被染成了红色的草地。',
      );
      await kitaru.say_and_wait('不要啊！');
      await kitaru.print_and_wait('如落海底，如坠冰窟，双脚陷入了泥潭之中。');
      await you.say_as_passer_by_and_wait('解说', [
        kitaru.get_colored_name(),
        '，',
        kitaru.get_colored_name(),
        ' 又要失速了吗？',
      ]);
      await kitaru.say_and_wait([callname, '……可能要让你失望了。']);
      await kitaru.print_and_wait([
        '直到我看见靠在栏杆上的赛',
        kitaru.uma_sex_title,
        '张开了嘴。',
      ]);
      await kitaru.say_as_unknown_and_wait('阿福……');
      await kitaru.say_as_unknown_and_wait('让我们做个约定吧。');
      await kitaru.say_as_unknown_and_wait('将来要看到阿福在菊花赏上奔跑哦！');
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '？']);
      await kitaru.say_and_wait('唔……约定。');
      await kitaru.say_and_wait(['对，约定……我答应过 ', callname, ' 的！']);
      await kitaru.say_and_wait('平安归来！');
      await kitaru.say_and_wait('现在，是向神明献上奔跑的时候了！');
      await you.say_as_passer_by_and_wait('解说', [
        '不，好快！好快啊！',
        kitaru.sex,
        '开始冲刺了！',
      ]);
      await kitaru.say_and_wait(['有 ', callname, ' 在身边的我，可是大吉啊！']);
      era.drawLine({ content: '东京赛马场 休息室内' });
      await kitaru.say_and_wait(['呼……', callname, '，我冲出来了！']);
      await kitaru.say_and_wait(
        '呃！我还活着了！总之现在，超幸福！超满足的啦！',
      );
      await kitaru.say_and_wait('福气满满！');
      era.printButton('「辛苦了，谢谢你！」', 1);
      await era.input();
      await kitaru.say_and_wait('欸，也不用这么说啦！');
      await kitaru.say_and_wait('我只是做了自己能做的事情而已！');
      await kitaru.say_and_wait('我从影子中逃出来了哦！');
      era.printButton('「那么下一场是菊花赏？」', 1);
      await era.input();
      await kitaru.say_and_wait('要跑菊花赏！');
      await kitaru.say_and_wait('是的！菊花赏！');
      await kitaru.say_and_wait('虽然可能有些困难啦……');
      await kitaru.say_and_wait(['但是相信我和 ', callname, ' 一定没问题的！']);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的 PTSD 暂时消除了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_21: (() => {
    const title = '开运投射';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {boolean} join_toky_yus 福来是否参与了日本德比
     */
    const f = async (kitaru, you, callname, join_toky_yus) => {
      await era.printAndWait([
        '训练的休息时间，',
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        ' 靠在栏杆上，有一搭没一搭的聊着。',
      ]);
      await kitaru.say_and_wait('呃……菊花赏……不管怎么想都觉得不行。');
      await kitaru.say_and_wait('从来没有跑过那么长的距离。');
      await kitaru.say_and_wait('不过在那之前，还得跑神户新闻杯。');
      await kitaru.say_and_wait('毕竟，之前的粉丝数，跑菊花赏有点勉强……');
      era.printButton('「看起来很不安啊？」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯……');
      await kitaru.say_and_wait('占卜不出结果呢……');
      await kitaru.say_and_wait([
        '不过这是和我',
        kitaru.elder_sibling_sex_title,
        '的约定！我一定会实现的！',
      ]);
      await kitaru.say_and_wait(['我用拉勾仪式向', kitaru.sex, '保证过的！']);
      if (join_toky_yus) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 在日本德比终盘的冲刺令 ',
          you.get_colored_name(),
          ' 难忘，似乎',
          kitaru.sex,
          '完全走出了自己内心的困境。',
        ]);
      }
      await era.printAndWait([
        '况且，这种终盘爆发力，倘若利用好的话，势必能成为',
        kitaru.sex,
        '出奇制胜的关键。',
      ]);
      era.printButton('「可以继续训练了？」', 1);
      await era.input();
      await kitaru.say_and_wait('诶！');
      await kitaru.say_and_wait(['嗯……毕竟有 ', callname, ' 陪着我嘛！']);
      await kitaru.say_and_wait([callname, ' 是我最强的开运物品哦！']);
      await kitaru.say_and_wait('只要命定之人在身边的话！我应该会是无敌的吧！');
      await era.printAndWait('看起来像是开玩笑？');
      await era.printAndWait([
        '不，',
        you.get_colored_name(),
        ' 能确定，',
        kitaru.sex,
        '说出这番话的时候是真心的。',
      ]);
      await era.printAndWait('PTSD 的疗法之一是精神分析疗法。');
      await era.printAndWait(
        '该疗法的理论框架之一是依恋理论，内容大概是解释了各种感情上的联结和纽带。',
      );
      await era.printAndWait([
        '如果 ',
        you.get_colored_name(),
        ' 推论正确的话，',
        kitaru.get_colored_name(),
        '，正在逐步的，把包括 ',
        you.get_colored_name(),
        ' 在内的各项开运物品视为',
        kitaru.sex,
        '走到现在的精神支柱，即自我意愿的投射。',
      ]);
      await era.printAndWait('这……应该是好事吧？');
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（经典年）';
    /**
     * 经典年和资深年夏季合宿的共通开始事件
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     */
    const f = async (kitaru, you) => {
      await era.printAndWait([
        '炎热的夏季，和 ',
        kitaru.get_colored_name(),
        ' 一起坐上了前往夏季合宿场所的长途大巴。',
      ]);
      await era.printAndWait([
        '脖颈处传来马耳细腻舒服温暖的触感，',
        kitaru.get_colored_name(),
        ' 正因为疲倦而靠在 ',
        you.get_colored_name(),
        ' 的肩膀上。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 开始思考起',
        kitaru.sex,
        '之后的训练计划起来。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_32: (() => {
    const title = '坠入凡间的星';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        '今天，是 ',
        you.get_colored_name(),
        ' 约好了和 ',
        kitaru.get_colored_name(),
        ' 一起出游的日子。',
      ]);
      await era.printAndWait([
        '自乘船抵达此处开始，',
        kitaru.get_colored_name(),
        ' 就一直拉着 ',
        you.get_colored_name(),
        ' 在这座并不算大的岛屿上四处乱逛着。',
      ]);
      await era.printAndWait([
        '目标是菊花赏的',
        kitaru.sex,
        '自然耐力不会差到哪里去，短短几个小时下来，',
        you.get_colored_name(),
        ' 已经累的不行。',
      ]);
      await era.printAndWait('转眼已是黄昏，是时候该回去了。');
      await era.printAndWait('不过……');
      await kitaru.say_and_wait([callname, '！这边这边！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 反倒是愈发的热情了起来。',
      ]);
      await era.printAndWait([
        '即使是对于 ',
        kitaru.get_colored_name(),
        ' 而言，能从今天来到此处就一直保持如此的热情也是颇为罕见的。',
      ]);
      era.printButton('「好了，该说说看你想干什么了吧？」', 1);
      await era.input();
      await kitaru.say_and_wait(['欸嘿嘿！果然是 ', callname, '！']);
      await kitaru.say_and_wait('一下子就看出来了呢！');
      await kitaru.say_and_wait('那个！今晚有流星雨呢！');
      await kitaru.say_and_wait(['想和 ', callname, ' 一起看！']);
      era.printButton('「直接说出来不好吗？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '呜……要是被 ',
        callname,
        ' 拒绝的话，我今天一天都会是大凶了！',
      ]);
      era.drawLine({ content: '无人岛 几个小时后' });
      await era.printAndWait([
        you.get_colored_name(),
        ' 简单搭起来的营火噼啪作响。',
      ]);
      await kitaru.say_and_wait([
        '喔喔喔！',
        callname,
        ' 快看！流星雨来了呢！',
      ]);
      await kitaru.say_and_wait(
        '据说，我当时还在妈妈的肚子里的时候，爸爸妈妈也来这里看过流星雨呢！',
      );
      await kitaru.say_and_wait('所以！今天的我不是待兼福来！而是待兼星来！');
      await kitaru.say_and_wait('欸，对了，看流星雨要搭配什么仪式吗？');
      era.printButton('「奔跑」（速度+25）', 1);
      era.printButton('「许愿」（技能点数+20）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await kitaru.say_and_wait('的确如此呢！');
        await kitaru.say_and_wait('能就此获得星空之力也说不定。');
        await era.printAndWait([
          kitaru.sex,
          '褪下了鞋袜开始了奔跑，白皙的双脚在奔跑的过程中击打出水花，而后又被身后摆动不已的马尾拂过，以至于让些许甩出的水滴落在了 ',
          you.get_colored_name(),
          ' 的裤腿上。',
        ]);
      } else {
        await kitaru.say_and_wait('许愿吗？');
        await kitaru.say_and_wait('嗯……我知道了！');
        await kitaru.say_and_wait('虽然我好像没有什么特别的愿望。');
        await era.printAndWait([kitaru.sex, '闭上了双眼，双手合十。']);
        await era.printAndWait([
          '橙发',
          kitaru.teen_sex_title,
          '在营火光芒的照耀下，竟如教堂彩绘玻璃上那些圣光庇佑的修女般圣洁。',
        ]);
      }
      if (era.get('love:56') >= 49) {
        era.drawLine({ content: '一段时间后' });
        if (ret[0] === 1) {
          await era.printAndWait([
            '奔跑结束后，有些脱力的 ',
            kitaru.get_colored_name(),
            ' 躺在了 ',
            you.get_colored_name(),
            ' 的怀里，',
            kitaru.sex,
            '今天穿着的衬衣已经在刚才的仪式中湿透了，其下因为激烈运动而有些泛红的乳肉若隐若现。',
          ]);
          await era.printAndWait([
            '怕',
            kitaru.sex,
            '着凉，于是 ',
            you.get_colored_name(),
            ' 把自己的外套脱下来盖在了',
            kitaru.sex,
            '的身上。',
          ]);
          await kitaru.say_and_wait(['欸嘿嘿，', callname, ' 的气味呢。']);
          await era.printAndWait([
            kitaru.sex,
            '蹭了蹭 ',
            you.get_colored_name(),
            ' 的胸口，',
            you.get_colored_name(),
            ' 能感受到',
            kitaru.sex,
            '乱糟糟的头发划过胸口时的触感。',
          ]);
        } else {
          await era.printAndWait([
            '结束了祈祷的修女躺在了 ',
            you.get_colored_name(),
            ' 的怀里，',
            you.get_colored_name(),
            ' 能感受到',
            kitaru.sex,
            '乱糟糟的头发划过胸口时的触感。',
          ]);
          await era.printAndWait([
            '以及',
            kitaru.sex,
            '胸前的那对柔软偶尔挤压着 ',
            you.get_colored_name(),
            ' 时的感觉，似乎',
            kitaru.sex,
            '本人倒是完全没有意识到此刻的自己多么的有诱惑力。',
          ]);
        }
        await kitaru.say_and_wait('那个，我今天还有一个愿望哦。');
        await era.printAndWait([
          you.get_colored_name(),
          ' 看见 ',
          kitaru.get_colored_name(),
          ' 的脸微微泛红，不知是否是因为今天的活动过于兴奋了。',
        ]);
        await kitaru.say_and_wait('我想……');
        era.printButton('「唔！」', 1);
        await era.input();
        await era.printAndWait([
          '一天下来过于疲倦的 ',
          you.get_colored_name(),
          ' 来不及反应。',
        ]);
        await you.say_and_wait('咕……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 柔软的双唇，和 ',
          you.get_colored_name(),
          ' 的重叠在了一起。',
        ]);
        await era.printAndWait([
          '唇间溢出的吐息和唾液，带着',
          kitaru.sex,
          '的热度与味道',
        ]);
        await kitaru.say_and_wait('哈……');
        await kitaru.say_and_wait(['和，和 ', callname, ' Kiss了呢！']);
        await kitaru.say_and_wait('呼……');
        await era.printAndWait([
          '结束之后，',
          kitaru.sex,
          '的吐息拂过 ',
          you.get_colored_name(),
          ' 的耳边。',
        ]);
        if (
          era.get('love:56') > 49 ||
          era.get('exp:56:性交次数') > era.get('exp:56:睡奸次数')
        ) {
          await era.printAndWait(['要顺势做点什么吗？']);
          era.printButton('推倒待兼福来', 1);
          era.printButton('算了吧（全属性+1）', 2);
          ret.push(await era.input());
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_kobe_hai: (() => {
    const title = '迎接神户新闻赏';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {PrintedSpan} call_5 待兼福来对富士奇石的称呼
     */
    const f = async (kitaru, you, callname, call_5) => {
      await era.printAndWait([
        '严肃到近乎面无表情的 ',
        kitaru.get_colored_name(),
        ' 正坐在休息室的长椅上。',
      ]);
      await era.printAndWait([
        '过于正式的坐姿倒是让贴在体操服上的号码布弯曲的弧度变得更加明显，穿着白色长筒袜的双腿紧紧并拢在一起，在大腿根处勒出一道诱人的曲线。',
      ]);
      await era.printAndWait([
        '再加上……',
        you.get_colored_name(),
        ' 一想到这家伙平时经常脱线的样子，',
        you.get_colored_name(),
        ' 的笑声抑制不住的从嘴角漏出来。',
      ]);
      await kitaru.say_and_wait([callname, ' 笑什么？']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 仍是强装着正经问着 ',
        you.get_colored_name(),
        '，不过嘴角还是明显的抽动了一下。',
      ]);
      era.printButton('「很紧张吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('不，毕竟夏季合宿准备了那么久……');
      await era.printAndWait('扯了扯两下胸口的号码布，试图分散自己的注意力。');
      await era.printAndWait([
        '不过当 ',
        you.get_colored_name(),
        ' 走过去坐在 ',
        kitaru.get_colored_name(),
        ' 的身边时，',
        kitaru.sex,
        '原本严肃的表情还是被打破了。',
      ]);
      await kitaru.say_and_wait('唔……还是有一点的。');
      await kitaru.say_and_wait(
        '明明知道更难的应该还在后头，没想到现在就有些害怕了。',
      );
      await era.printAndWait([
        '歪着身子靠在 ',
        you.get_colored_name(),
        ' 的肩膀上，',
        kitaru.get_colored_name(),
        ' 呼吸缓和了几分，如此近的距离 ',
        you.get_colored_name(),
        ' 也能闻到',
        kitaru.sex,
        '那股神社般清冷的体香。',
      ]);
      await kitaru.say_and_wait('嗅……嗅……');
      await kitaru.say_and_wait([
        '听 ',
        call_5,
        ' 说过，能感受到互相味道好闻，是两人的相性很好的证明……',
      ]);
      await kitaru.say_and_wait('有点冷静下来了呢……');
      await kitaru.say_and_wait([
        '话说，',
        callname,
        ' 对于约定是怎么看的呢？',
      ]);
      await era.printAndWait([
        '没等 ',
        you.get_colored_name(),
        ' 回答，',
        kitaru.teen_sex_title,
        '自顾自地说了下去。',
      ]);
      await kitaru.say_and_wait(
        '在我看来，做了约定的双方，就会互相把自己命运中的一部分和对方绑在一起。',
      );
      await kitaru.say_and_wait([
        '所以啊，和',
        kitaru.elder_sibling_sex_title,
        '做了约定的我，踏上了本该属于',
        kitaru.sex,
        '的道路，为此当然要好好表现才行。',
      ]);
      await kitaru.say_and_wait('呼……');
      era.printButton('「倒是希望之后能看见属于福来的道路。」', 1);
      await era.input();
      await kitaru.say_and_wait('啊！');
      await kitaru.say_and_wait('这样吗！？');
      await kitaru.say_and_wait('呼……还是先完成眼前的事情吧。');
      await kitaru.say_and_wait('总之 是时候出发了……');
      await kitaru.say_and_wait(['等着我吧 ', callname, '！']);
      await kitaru.say_and_wait('为了打开通向菊花赏的大门，我会全力以赴的！');
    };
    f.title = title;
    return f;
  })(),
  kobe_hai_win: (() => {
    const title = '绑定';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await you.say_as_passer_by_and_wait('解说', [
        kitaru.get_colored_name(),
        ' 能追赶上吗？',
      ]);
      await you.say_as_passer_by_and_wait('解说', '好快！好快！太快了！');
      await you.say_as_passer_by_and_wait('解说', '五马身！三马身！一马身！');
      await you.say_as_passer_by_and_wait('解说', '超越了！');
      await you.say_as_passer_by_and_wait('解说', [
        '获胜者是 ',
        kitaru.get_colored_name(),
        '！',
      ]);
      await kitaru.print_and_wait(
        '没有恐惧，没有犹豫，而是将自己平日里的训练，积攒下来的努力，在终盘的时候全部都释放出来。',
      );
      await kitaru.print_and_wait('非常好，不是吗？');
      era.drawLine({ content: '阪神赛马场 休息室内' });
      await kitaru.say_and_wait('呼！！！');
      era.printButton('「幸苦了！」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！');
      await kitaru.say_and_wait('终于，我现在也算是完全脱敏了吧！？');
      await kitaru.say_and_wait('那么，之后就是菊花赏了吧！');
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          '没等 ',
          you.get_colored_name(),
          ' 回答，',
          kitaru.get_colored_name(),
          ' 就已经跳到了 ',
          you.get_colored_name(),
          ' 的身上。',
        ]);
        await era.printAndWait([
          '坐在了 ',
          you.get_colored_name(),
          ' 的腿上，等着 ',
          you.get_colored_name(),
          ' 用毛巾开始擦拭起',
          kitaru.sex,
          '汗津津的头发。',
        ]);
        await era.printAndWait([
          '终于，在察觉到怀中',
          kitaru.uma_sex_title,
          '的臀部开始不安分的磨蹭起来的时候，',
          you.get_colored_name(),
          ' 拍了一下 ',
          kitaru.get_colored_name(),
          ' 的头，示意',
          kitaru.sex,
          '安静下来。',
        ]);
        await kitaru.say_and_wait('哎呀！');
      }
      await era.printAndWait([
        '绕过 ',
        kitaru.get_colored_name(),
        ' 的毛茸茸尾巴，伸手从一旁的公文包中取出了为 ',
        kitaru.get_colored_name(),
        ' 设计的菊花赏训练计划。',
      ]);
      await kitaru.say_and_wait(['哦！果然，', callname, ' 早就有准备了吧！']);
      era.printButton('「害怕了吗？」', 1);
      era.printButton('「可别到时候掉链子呀！」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('当然！');
      } else {
        await kitaru.say_and_wait('怎么会！');
      }
      await kitaru.say_and_wait([
        '属于',
        kitaru.elder_sibling_sex_title,
        '的参拜道路，我会替',
        kitaru.sex,
        '走完的！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_39: (() => {
    const title = '两世之间';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '距离菊花赏只剩下一周了，',
        you.get_colored_name(),
        ' 能感觉到，',
        kitaru.get_colored_name(),
        ' 这段时间变得愈发狂热起来。',
      ]);
      await era.printAndWait([
        '虽然往常的训练项目',
        kitaru.sex,
        '也会认真执行，但是现在的',
        kitaru.sex,
        '就像是一张弦绷的过紧的弓。',
      ]);
      await era.printAndWait([
        '赛前超负荷训练可是大凶，',
        you.get_colored_name(),
        ' 决定给',
        kitaru.sex,
        '放两天假。',
      ]);
      await kitaru.say_and_wait('但是但是！菊花赏已经近在眼前啦！');
      await kitaru.say_and_wait(['唔，那 ', callname, ' 陪我出去逛逛吧。']);
      await kitaru.say_and_wait([
        '正巧，也一直有想和 ',
        callname,
        ' 一起去拜访的地方呢。',
      ]);
      era.drawLine({ content: '市郊墓园 通向深处的小路' });
      await era.printAndWait('乘着公交车，来到了郊外的墓园。');
      await era.printAndWait([
        '随着越发的进入墓园深处，一向欢快的 ',
        kitaru.get_colored_name(),
        ' 也平静了下来，和周围的环境一同变得肃穆。',
      ]);
      await kitaru.say_and_wait('到了，就是这里。');
      await era.printAndWait(
        '柏树下，在一座并不算小的墓碑前，待兼福停了下来。',
      );
      await era.printAndWait([
        '其上的黑白照片中的',
        kitaru.uma_sex_title,
        '，和 ',
        kitaru.get_colored_name(),
        ' 有几分神似，不过倒是留了显得更成熟的长发。',
      ]);
      await kitaru.say_and_wait([
        '嗯……我的',
        kitaru.elder_sibling_sex_title,
        '。',
      ]);
      await kitaru.say_and_wait(
        '不过之前总是不想来，即使是妈妈的要求也会尝试拒绝掉。',
      );
      await kitaru.say_and_wait('现在来看应该潜意识的害怕才对。');
      await era.printAndWait([kitaru.sex, '自顾自地说着。']);
      era.printButton('「需要留你一个人静静吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！');
      await kitaru.say_and_wait('不用了！');
      await kitaru.say_and_wait([callname, ' 在这里陪着我就好了！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的声音中，有些许的颤抖。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见',
        kitaru.sex,
        '的双手紧紧的握在一起，指甲几乎要插进了掌心。',
      ]);
      await era.printAndWait(['而后，', kitaru.sex, '缓缓上前。']);
      await kitaru.say_and_wait([
        '那个，',
        kitaru.elder_sibling_sex_title,
        '，我带着我现在的 ',
        callname,
        ' 来看你了……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 听着 ',
        kitaru.get_colored_name(),
        ' 对着那方墓碑倾诉着，也许算不上多么庄重，甚至是有些轻松，那种语气就像',
        kitaru.sex,
        '的',
        kitaru.elder_sibling_sex_title,
        '仍存活于世一样。',
      ]);
      await era.printAndWait([
        '从如何与 ',
        you.get_colored_name(),
        ' 相见，到日本德比，再到赢下神户新闻赏，',
        you.get_colored_name(),
        ' 听着 ',
        kitaru.get_colored_name(),
        ' 向',
        kitaru.sex,
        '去世的',
        kitaru.elder_sibling_sex_title,
        '转述着 ',
        you.get_colored_name(),
        ' 和',
        kitaru.sex,
        '的经历。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await kitaru.say_and_wait('下周就是菊花赏了呢！');
      await kitaru.say_and_wait('真是花了好长时间才完完整整的想起来呢……');
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        '，我会像约好的那样夺下胜利的！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '迎接菊花赏';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('终于……和承诺中的一样……还是走到了这一步啊！');
      await kitaru.say_and_wait('在拥有众多神社与佛寺的京都！');
      await kitaru.say_and_wait('以菊花为象征的重要比赛！');
      await era.printAndWait([
        '这是 ',
        kitaru.get_colored_name(),
        ' 第一次挑战 3,000 米的比赛，这种炼狱般的长距离。',
      ]);
      await era.printAndWait(['理所当然的，', kitaru.sex, '看起来有些紧张。']);
      await era.printAndWait([
        '从最开始和',
        kitaru.sex,
        '确立下菊花赏的目标之后，',
        you.get_colored_name(),
        ' 便能感受到',
        kitaru.sex,
        '对于此的执念，和',
        kitaru.elder_sibling_sex_title,
        '的约定，和 ',
        you.get_colored_name(),
        ' 的约定，支撑着名为 ',
        kitaru.get_colored_name(),
        ' 的',
        kitaru.teen_sex_title,
        '走到现在这一步。',
      ]);
      await era.printAndWait(['如今，', kitaru.sex, '的目标就在眼前。']);
      await kitaru.say_and_wait(['那个，', callname, '！']);
      era.printButton('「怎么了」', 1);
      await era.input();
      await kitaru.say_and_wait('能握住我的手吗？');
      await era.printAndWait([
        kitaru.teen_sex_title,
        '有些扭捏的看向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        '突如其来的请求，或许又是 ',
        kitaru.get_colored_name(),
        ' 临时想出的另一个仪式。',
      ]);
      era.printButton('伸手', 1);
      await era.input();
      await era.printAndWait([
        '赛',
        kitaru.uma_sex_title,
        '略高的体温，自',
        kitaru.sex,
        '的掌心传来，',
        you.get_colored_name(),
        ' 发现 ',
        kitaru.get_colored_name(),
        ' 急促的呼吸转缓了许多。',
      ]);
      await kitaru.say_and_wait('虽然……现在可能不是说这个的时候。');
      await kitaru.say_and_wait([
        '即使在',
        kitaru.elder_sibling_sex_title,
        '去世后，承诺替',
        kitaru.sex,
        '实现在菊花赏上奔跑的愿望，对我来说也不过是奢望罢了。',
      ]);
      await kitaru.say_and_wait([
        '如今居然能走到这一步，',
        callname,
        ' 对我来说，真的真的，和天神派来的使者别无二致！',
      ]);
      await kitaru.say_and_wait('呼……');
      await kitaru.say_and_wait('欸嘿嘿！');
      await kitaru.say_and_wait('果然啊，说出来就好多了！');
      await kitaru.say_and_wait(['那么，', callname, '，我出发了！']);
      await kitaru.say_and_wait('请静待我……我们向神明们呈上胜利吧！');
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '命运的半途';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {boolean} win_kobe_hai 待兼福来是否赢取神户新闻杯
     */
    const f = async (kitaru, you, callname, win_kobe_hai) => {
      await era.printAndWait('马群进入了第四弯道，比赛也将进入终局。');
      await era.printAndWait([
        '然而 ',
        kitaru.get_colored_name(),
        ' 的踪迹仍匿于马群间，',
        you.get_colored_name(),
        ' 只能从那抹若隐若现的亮橙色推测出 ',
        kitaru.get_colored_name(),
        ' 的大概位置。',
      ]);
      await era.printAndWait([
        '能发挥出 ',
        kitaru.get_colored_name(),
        ' 优秀爆发力的差行跑法本就对时机把握苛刻，胜利与败北往往只差一线之隔。',
      ]);
      await era.printAndWait([
        '这场比赛，对于 ',
        kitaru.get_colored_name(),
        ' 而言，会是大凶吗？',
      ]);
      await you.say_as_passer_by_and_wait(
        '解说',
        '第四弯道过后，接下来就是最后的直线……',
      );
      await era.printAndWait(['被堵住了吗？然而终点已近在咫尺。']);
      await era.printAndWait([
        '观察，调整，决定，与行动，现在这个循环唯有身处漩涡中心的 ',
        kitaru.get_colored_name(),
        ' 本人才能完成，观众席上的 ',
        you.get_colored_name(),
        ' 帮不上忙。',
      ]);
      await era.printAndWait(['想要祈祷，这个念头不知怎么的冒了出来。']);
      await era.printAndWait([
        '或许，',
        you.get_colored_name(),
        ' 此刻的无力感，一如',
        kitaru.elder_sibling_sex_title,
        '夭折那一天时的 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await you.say_and_wait('不……现在还有身为训练员能帮的上忙的事情。', true);
      era.printButton('「阿福！！！」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), ' 声嘶力竭的嘶吼起来。']);
      await era.printAndWait([
        '不知高速奔跑中的 ',
        kitaru.get_colored_name(),
        ' 能否听到 ',
        you.get_colored_name(),
        ' 的呼喊，但胜利的天平，确确实实的向',
        kitaru.sex,
        '那边倾斜了。',
      ]);
      await era.printAndWait([
        '仿佛圣人开海一般，又或者说像阿拉伯的少年以咒语打开门扉一般，那道橙色的闪电劈开了马群。',
      ]);
      await you.say_as_passer_by_and_wait('解说', [
        '——是待兼！',
        kitaru.get_colored_name(),
        '！福气仍将继续到来吗？！！',
      ]);
      if (win_kobe_hai) {
        await you.say_as_passer_by_and_wait(
          '解说',
          '冲线了！自神户之后！！！福气也来到了菊花的舞台！！！',
        );
      } else {
        await you.say_as_passer_by_and_wait('解说', '冲线了！');
      }
      era.drawLine({ content: '京都竞马场 菊花赏结束后' });
      await kitaru.say_and_wait([callname, '！！']);
      await kitaru.say_and_wait('我……我赢了！赢了哦……！');
      await era.printAndWait([
        '训练室内，幸福不已的 ',
        kitaru.get_colored_name(),
        ' 扑到了 ',
        you.get_colored_name(),
        ' 的怀里，与 ',
        you.get_colored_name(),
        ' 紧紧相拥。',
      ]);
      await era.printAndWait([
        '赛',
        kitaru.uma_sex_title,
        '长距离赛跑后的炽热体温，还有胸前的弹软触感，隔着汗湿的水手服，通过拥抱传给了 ',
        you.get_colored_name(),
        '。',
      ]);
      if (era.get('love:56') >= 50) {
        await kitaru.say_and_wait('这可都是多亏了命定之人呢！');
        await era.printAndWait([
          '如此说着，',
          kitaru.sex,
          '抬起头，用那如琥珀一般的眸子看着 ',
          you.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait('对了！');
        await kitaru.say_and_wait('也要给命定之人点奖励才行呢！');
        await era.printAndWait([
          '而后，在 ',
          you.get_colored_name(),
          ' 骤惊的眼瞳中，',
          kitaru.sex,
          '略掂脚尖，二人的嘴唇交叠在了一起。',
        ]);
        await era.printAndWait([
          '不可思议系',
          kitaru.teen_sex_title,
          '的清冷体香混着散在空气中的微腥汗气充斥着 ',
          you.get_colored_name(),
          ' 的嗅觉。',
        ]);
        await era.printAndWait('舌尖互抵，而又再次相触。');
        await era.printAndWait([
          '唇分之后，',
          you.get_colored_name(),
          ' 看见',
          kitaru.teen_sex_title,
          '的小舌头在唇边舔了舔，吸入几丝唾液。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' 还是第一次见 ',
          kitaru.get_colored_name(),
          ' 如此主动。',
        ]);
      }
      await era.printAndWait([
        '在菊花赏上获胜了，名叫 ',
        kitaru.get_colored_name(),
        ' 的',
        kitaru.teen_sex_title,
        '，实现了自己的执念，在追寻自己幸福的命运之路上踏出了一大步。',
      ]);
      await era.printAndWait(['但', kitaru.sex, '下一步，又该往何处去呢？']);
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '神化';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} suzuka 无声铃鹿
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, suzuka, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        ' 一起在办公室里享受着菊花赏后难得的休憩时间。',
      ]);
      await era.printAndWait('菊花赏结束后，紧绷的弦总算得以放松。');
      await kitaru.say_and_wait([callname, '，下一场比赛该选什么呢？']);
      era.printButton('「阿福有什么想跑的吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('唔……');
      await era.printAndWait([
        '从',
        kitaru.elder_sibling_sex_title,
        '的阴影中走了出来，也实现了想要在菊花赏上奔跑的愿望，但此时的 ',
        kitaru.get_colored_name(),
        '，反倒是显得有些迷惘。',
      ]);
      await era.printAndWait([
        '本来懒趴趴的躺在沙发上 ',
        kitaru.get_colored_name(),
        ' 晃晃悠悠站了起来。',
      ]);
      await era.printAndWait([
        '在办公室的沙发上凭借',
        kitaru.uma_sex_title,
        '优秀的平衡踱步着，穿着白色织物的玲珑双足交替着踏在沙发上。',
      ]);
      if (era.get('cflag:2:招募状态') === 1) {
        await era.printAndWait('一边摸着下巴一边转着圈。');
        await era.printAndWait([
          '思考时的这种独特动作倒让 ',
          you.get_colored_name(),
          ' 想起了自己另一位名叫',
          suzuka.get_colored_name(),
          '的担当。',
        ]);
      }
      await kitaru.say_and_wait('硬要说的话，我好像没有什么特别想跑的比赛呢？');
      await kitaru.say_and_wait('直接连着把日本杯和有马纪念都拿下？');
      era.printButton('「太离谱了吧！」', 1);
      await era.input();
      await kitaru.say_and_wait(['那就听 ', callname, ' 的指令吧？']);
      await era.printAndWait([
        '颇为平静的说出了这番话，就像比赛似乎和',
        kitaru.sex,
        '是什么无关的事情一样。',
      ]);
      await kitaru.say_and_wait('哈……');
      await era.printAndWait([
        '打了个哈欠，名叫 ',
        kitaru.get_colored_name(),
        ' 的赛',
        kitaru.uma_sex_title,
        '，径直向后栽倒在了办公室中央那堆积成山的开运道具中。',
      ]);
      await era.printAndWait('哗啦！');
      await era.printAndWait([
        '几个不知装着什么的纸盒被躺倒的 ',
        kitaru.get_colored_name(),
        ' 挤到了一旁。',
      ]);
      await era.printAndWait([
        '略微调整几下，直到能舒舒服服地躺在那赛后亲自采购回来的杂物堆中，',
        kitaru.get_colored_name(),
        ' 望向了 ',
        you.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait('运势到达了极点的我，定能向你呈上胜利！');
      await kitaru.say_and_wait('赶紧下指示吧！带给我幸运的命定之人！');
      await era.printAndWait([
        '也许即使是刀山火海，',
        kitaru.get_colored_name(),
        ' 也会因为作为',
        kitaru.sex,
        '最强开运物品的 ',
        you.get_colored_name(),
        ' 一句能获得大吉的指示，而毫不犹豫的跳进去吧？',
      ]);
      era.printButton('「明年的……金鯱赏？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '明年春天的？',
        callname,
        ' 选了一场非常遥远的比赛呢。',
      ]);
      await era.printAndWait([
        '躺在开运道具堆上的',
        kitaru.teen_sex_title,
        '用慵懒的声线回答了 ',
        you.get_colored_name(),
        '，而后传来几声呼噜声，',
        kitaru.sex,
        '便酣睡了过去。',
      ]);
      await era.printAndWait([
        '的确是一场遥远的比赛，但对于今年赛程如此密集的 ',
        kitaru.get_colored_name(),
        '，休息一段时间后再开始是必要的。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '神乐';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {boolean} win_kiku_sho 待兼福来是否赢取菊花赏
     */
    const f = async (kitaru, you, callname, win_kiku_sho) => {
      const ret = [];
      await era.printAndWait([
        '和去年不同，今年的 ',
        you.get_colored_name(),
        ' 提前收到了 ',
        kitaru.get_colored_name(),
        ' 的邀请，前往了',
        kitaru.couple_title,
        '家的神社。',
      ]);
      await era.printAndWait([
        '此时神社的人数还不算多，',
        you.get_colored_name(),
        ' 踏着石阶，再次跨过了那朱红的鸟居。',
      ]);
      await era.printAndWait([
        '而后与上次一样，由远极近，',
        you.get_colored_name(),
        ' 的世界被纯白所笼罩。',
      ]);
      era.drawLine({ content: '？？？' });
      era.printButton('睁开眼睛', 1);
      await era.input();
      await era.printAndWait([
        '周围空无一切，柔和的白色光束从不同的角度如审视般地照在 ',
        you.get_colored_name(),
        ' 的身上。',
      ]);
      era.printButton('抬起头', 1);
      await era.input();
      await era.printAndWait('纯黑色的倒金字塔，突兀悬于空中。');
      era.println();
      if (win_kiku_sho) {
        await typing(
          '非常好/保持预期，有资格/能力成为' + kitaru.sex + '的协助者/伴侣',
          kitaru.color,
        );
        era.println();
        await typing('你的旨意/愿望是什么？', kitaru.color);
      } else {
        await typing('低于预期/响应未达标，协助者/伴侣意料之外', kitaru.color);
        era.println();
        await typing('参数/可选项还需要优化/替换', kitaru.color);
      }
      era.println();
      era.printButton('昂扬的气氛（全属性+7）', 1);
      era.printButton('脉动的气息（力量+30）', 2);
      era.printButton('轻微的裂缝（技能点数+30）', 3);
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await kitaru.print_and_wait('群情激昂……');
          break;
        case 2:
          await kitaru.print_and_wait('力量上涌，精神鼓舞……');
          break;
        case 3:
          await kitaru.print_and_wait('云朵分离——墙壁碾动——旧伤作痛……');
      }
      if (
        era.get('love:56') >= 49 &&
        you.sex_code !== 0 &&
        kitaru.sex_code !== 1
      ) {
        await kitaru.say_and_wait('喂……');
        await kitaru.say_and_wait('喂……');
        await kitaru.say_and_wait([callname, '！']);
        era.printButton('睁开眼睛', 1);
        await era.input();
        await kitaru.say_and_wait('怎么靠着鸟居睡着了？');
        await kitaru.say_and_wait('小心着凉啊！');
        era.printButton('抬起头', 1);
        await era.input();
        await era.printAndWait([
          '穿着巫女服的 ',
          kitaru.get_colored_name(),
          ' 拉住了 ',
          you.get_colored_name(),
          ' 的手，笑意盈盈，黄昏的阳光在其亮橙色的碎发间起舞',
        ]);
        await era.printAndWait([
          '今年算是暖冬吧，加上赛',
          kitaru.uma_sex_title,
          '本就略高的体温，这巫女服对',
          kitaru.sex,
          '而言可能还偏厚了。',
        ]);
        await era.printAndWait([
          '巫女的洁白上衣配着下身鲜红的百褶裙，白色的长筒袜勾勒出了',
          kitaru.sex,
          '柔美的双腿。',
        ]);
        await era.printAndWait(
          '分离式的宽大振袖在风的吹拂下偶尔摆动，让露出的腋下与雪白的侧乳若隐若现。',
        );
        await era.printAndWait([
          '那将衣物撑起明显小丘的胸部在',
          kitaru.sex,
          '拉扯 ',
          you.get_colored_name(),
          ' 手臂的同时肆意摇晃着。',
        ]);
        await era.printAndWait([
          kitaru.uma_sex_title,
          '自身的活力与传统服饰带来的庄重，在这名叫 ',
          kitaru.get_colored_name(),
          ' 的',
          kitaru.uma_sex_title,
          '身上完美的交融在一起。',
        ]);
        era.printButton('「好美……」', 1);
        await era.input();
        await kitaru.say_and_wait('欸！');
        await kitaru.say_and_wait(['唔呼呼！', callname, ' 迷上了吗？']);
        await kitaru.say_and_wait('这可是特地为我的命定之人挑选的哦！');
        await kitaru.say_and_wait('那么，请期待着我今晚的神乐吧！');
        era.drawLine({ content: '待兼福来家的神社 大殿前' });
        await era.printAndWait([
          '新年的神社，由于 ',
          kitaru.get_colored_name(),
          ' 这一年来的精彩表现，神社的参拜客数量也不断增多。',
        ]);
        await era.printAndWait(
          '这座因为十几年前的事故而快被众人遗忘的神社，如今又重新焕发出了生机。',
        );
        await era.printAndWait(
          '众人们的喧哗声先是达到了最高潮，随后便如退潮般，慢慢散去。',
        );
        await era.printAndWait(
          '在万籁俱寂的时候，仿佛看准时机一般，远处的太鼓被奏响，神乐正式开始。',
        );
        await era.printAndWait('乐器的合奏恰到好处。');
        await era.printAndWait('太鼓如关西大汉的吼声令人心情澎湃。');
        await era.printAndWait(
          '三味线如月出于东山之上，徘徊于斗牛之间，轻快回旋。',
        );
        await era.printAndWait(
          '巫女摇响的神乐铃声则点缀于其间，澄澈，悠远而空灵。',
        );
        await era.printAndWait([
          '那声音当中，神殿的正中央，正是 ',
          kitaru.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 的担当 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await era.printAndWait([
          '伴随着旋律，',
          kitaru.sex,
          '于庄严而冷肃的空间中飘飞，月光自天井射下，照在 ',
          kitaru.get_colored_name(),
          ' 饰以清丽淡雅妆容的脸上。',
        ]);
        await era.printAndWait([
          kitaru.sex,
          '挥舞着那把神乐铃，邀请神明与',
          kitaru.sex,
          '共舞。',
        ]);
        await era.printAndWait(
          '一曲毕，台上的现人神立于正中央，向四周的民众们行礼。',
        );
        era.drawLine({ content: '一段时间后' });
        await kitaru.say_and_wait('呼……总算结束了啊！');
        await kitaru.say_and_wait(['多谢 ', callname, ' 今天来帮忙啦！']);
        await era.printAndWait([
          '和上次差不多，',
          you.get_colored_name(),
          ' 们一直忙到了凌晨时分，直到神社再次回到原来寂寥无人的常态。',
        ]);
        await era.printAndWait([
          '不过却也和上次不同……有些疲惫的 ',
          kitaru.get_colored_name(),
          ' 正靠在 ',
          you.get_colored_name(),
          ' 的肩膀上。',
        ]);
        await era.printAndWait([
          '或许是的布料还是有点厚重了，',
          kitaru.get_colored_name(),
          ' 裸露在外的白嫩肌肤上香汗淋漓，微张的唇瓣也吐出热气。',
        ]);
        await era.printAndWait([
          '巫女服勾勒出',
          kitaru.sex,
          '较好的身体曲线，露出的侧乳因为先前的忙碌染上了绯红，随着呼吸起伏着，似乎在诱惑着 ',
          you.get_colored_name(),
          ' 伸手试试触感。',
        ]);
        era.printButton('忍耐（好感+5，爱慕+1）', 1);
        era.printButton('搂住待兼福来的腰', 2, {
          disabled: era.get('love:56') < 75,
        });
        ret.push(await era.input());
        if (ret[1] === 1) {
          await era.printAndWait([
            '强压下自己的欲望，向 ',
            kitaru.get_colored_name(),
            ' 道别之后，',
            you.get_colored_name(),
            ' 坐上了返回特雷森的车。',
          ]);
        } else {
          await kitaru.say_and_wait(['诶！诶！', callname, '……唔……']);
          await era.printAndWait([
            '俯下身，低头夺走了',
            kitaru.sex,
            '的嘴唇，听着 ',
            kitaru.get_colored_name(),
            ' 从喉咙中挤出的微弱的呻吟。',
          ]);
          await kitaru.say_and_wait('咕……咕……');
          await kitaru.say_and_wait('呼哈……');
          await era.printAndWait([
            '唇舌相互纠缠，被 ',
            you.get_colored_name(),
            ' 抱在怀中的 ',
            kitaru.get_colored_name(),
            ' 难耐似的扭动着身体，些许唾液自',
            kitaru.sex,
            '的嘴角流下，落在神社的石板路上。',
          ]);
          await era.printAndWait([
            '贪婪地将舌头探入',
            kitaru.sex,
            '先前还在为众人献上祷词的口中，迎接 ',
            you.get_colored_name(),
            ' 的是',
            kitaru.sex,
            '并不熟练的回应',
          ]);
          await kitaru.say_and_wait('咿呀……');
          await era.printAndWait('抱在怀里的担当，发出了下流的声音。');
          await era.printAndWait([
            '左手探入了',
            kitaru.sex,
            '的巫女服，轻轻掐着',
            kitaru.sex,
            '乳房的边缘玩弄着。',
          ]);
          await era.printAndWait([
            '接着又整个搭上，感受着小巧的乳肉在 ',
            you.get_colored_name(),
            ' 的揉捏下变成各种形状。',
          ]);
          await kitaru.say_and_wait('哈……哈啊！');
          await era.printAndWait([
            '指尖在柔嫩的乳晕上绕着圈，偶尔用指尖轻点，',
            kitaru.get_colored_name(),
            ' 便会配合发出可爱的叫声。',
          ]);
          await kitaru.say_and_wait('呀啊！');
          await era.printAndWait([
            '舌吻继续，一边将右手抚上了',
            kitaru.sex,
            '的大腿，指肚摩檫起了丝袜的布料，发出低微的嘶嘶声。',
          ]);
          await era.printAndWait([
            '一步一步的，划过',
            kitaru.sex,
            '的大腿，手探入了温暖的裙摆下。',
          ]);
          await era.printAndWait([
            '湿透了，',
            you.get_colored_name(),
            ' 可以感觉得到。',
          ]);
          await era.printAndWait([
            '一划过被濡湿内裤勾勒出的阴阜，',
            kitaru.get_colored_name(),
            ' 便发出了更加淫荡的声音。',
          ]);
          await era.printAndWait([
            '就站在神社石板路的正中间做这种事情，背德感的刺激让 ',
            you.get_colored_name(),
            ' 的欲望进一步高涨。',
          ]);
          await kitaru.say_and_wait('呀，不要……不要在这里……');
          await era.printAndWait([
            '只是',
            kitaru.teen_sex_title,
            '的欲拒还迎罢了，',
            kitaru.get_colored_name(),
            ' 虽是说着不情愿，但是并拢的双腿却微微分开，得以让 ',
            you.get_colored_name(),
            ' 的手进一步探入。',
          ]);
          await era.printAndWait(
            '手指插入，穴肉自觉的吸附上来，指节在穴腔内活动时发出粘腻的声响。',
          );
          await kitaru.say_and_wait('唔！');
          await era.printAndWait([
            '强烈的刺激让 ',
            kitaru.get_colored_name(),
            ' 急促的喘息着，双腿夹紧 ',
            you.get_colored_name(),
            ' 的手臂，如触电般颤抖着。',
          ]);
          await kitaru.say_and_wait(['呀呜，', callname, '！']);
          era.printButton('「这么舒服吗？」', 1);
          await era.input();
          await kitaru.say_and_wait('不，不知道啊……嗯呀，哈啊……');
          await era.printAndWait(
            '淫液流出，顺着大腿根部一路往下，在白色的长筒袜上勾勒出淫靡的花纹。',
          );
          await kitaru.say_and_wait(['啊，嗯嗯，呀嗯，', callname, '！']);
          await kitaru.say_and_wait('要来了！');
          await kitaru.say_and_wait([
            '去了！',
            you.get_colored_actual_name(),
            '！',
          ]);
          await era.printAndWait(
            '在一阵抽搐般的痉挛后，些许爱液还是突破内裤的阻拦涌了出来，神社的石板路上出现了一片明显的水渍。',
          );
          era.printButton('「继续吗？」', 1);
          await era.input();
          await kitaru.say_and_wait('诶……嗯！');
          await era.printAndWait('是时候进行下一步了。');
          await era.printAndWait([
            you.get_colored_name(),
            '将',
            kitaru.sex,
            '抵在了道路旁挂着粗壮注连绳的大树上，这过程中也没有停止玩弄',
            kitaru.sex,
            '，水渍一路从石板路的中央断断续续的来到这树前。',
          ]);
          await era.printAndWait([
            '像是要对折般抬起 ',
            kitaru.get_colored_name(),
            ' 匀称的大腿，将阴茎贴在已经湿透的缝隙处，一口气插了进去。',
          ]);
          await kitaru.say_and_wait('哈啊！');
          await era.printAndWait(
            '巫女发出的呻吟声清晰可辨，回荡在无人的神社中。',
          );
          await era.printAndWait([
            '每次抽插，',
            kitaru.get_colored_name(),
            ' 的身体上下移动着。手臂带着宽大的振袖上下翻飞着，如同方才神乐般的舞姿。',
          ]);
          await era.printAndWait([
            '而后又因对快感的祈求而抱紧了 ',
            you.get_colored_name(),
            '，让肉棒得以抽送到更为深处的软肉。',
          ]);
          await kitaru.say_and_wait([
            '哈……',
            you.get_colored_actual_name(),
            '！',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 全身无力地勉强抱着渴求着自己的训练员。',
          ]);
          await era.printAndWait('啪！啪！啪！');
          await era.printAndWait('庄严圣洁的神社内，响起淫荡的啪嗒水声。');
          await era.printAndWait(
            '每一次撞击都会带出体内的爱液，浇灌着巫女背靠着的古树。',
          );
          await era.printAndWait([
            '本来还对这场淫祀有所拘谨的 ',
            kitaru.get_colored_name(),
            '，也在 ',
            you.get_colored_name(),
            ' 的逐步进攻下开始纵情的扭动着腰。',
          ]);
          await kitaru.say_and_wait('感觉好舒服！嗯嗯唔……！');
          await era.printAndWait([
            '露天之下的神社内，',
            you.get_colored_name(),
            ' 与 ',
            kitaru.get_colored_name(),
            ' 如野兽般索求着快感。',
          ]);
          await era.printAndWait('神圣的神社当中，却上演着这么秽亵的一幕。');
          await era.printAndWait([
            '或许正是因为这背德的行为，',
            kitaru.get_colored_name(),
            ' 的腔壁是难以想象的紧致。',
          ]);
          await kitaru.say_and_wait('哦哦……！好……舒服……！');
          await era.printAndWait([
            '每一次摩擦着内侧的腔壁，',
            you.get_colored_name(),
            ' 的阴茎都受到极为强烈的刺激。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 似乎也是如此感觉，每一次要抽出腰，腔内的软肉死死的缠着 ',
            you.get_colored_name(),
            ' 的肉棒。',
          ]);
          await kitaru.say_and_wait('嗯啊……要，要去了……！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的背向后弓了过去，蜜穴猛然的紧缩，给 ',
            you.get_colored_name(),
            ' 带来巨量的快感。',
          ]);
          await era.printAndWait('咕哧——咕哧——');
          await era.printAndWait([
            you.get_colored_name(),
            '的肉棒抵着',
            kitaru.sex,
            '的子宫口倾吐起精液，让本就高潮的 ',
            kitaru.get_colored_name(),
            ' 不断地颤抖着。',
          ]);
          await kitaru.say_and_wait('唔呃呃呃呃！！！');
          await era.printAndWait(
            '没有抑制自己的呻吟，淫荡的巫女直截了当的叫出声来。',
          );
          await era.printAndWait(
            '爱液自交合处不断溢出，在神圣的古树下积起了一滩充满背德欲望的水洼。',
          );
          await era.printAndWait(
            '失焦的星星瞳向上翻起，香舌吐出，向此间神社的神灵宣告着这场祭祀的结束。',
          );
        }
      } else {
        await era.printAndWait([
          '当 ',
          you.get_colored_name(),
          ' 回过神来的时候，',
          you.get_colored_name(),
          ' 已经坐上了返回特雷森的末班车。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '圣瓦伦汀的局外人';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {number} teem_count 担当数量
     */
    const f = async (kitaru, you, callname, teem_count) => {
      const ret = [];
      await era.printAndWait(
        '圣瓦伦汀之日的特雷森学院，一如既往的被微妙的桃色氛围所笼罩。',
      );
      await era.printAndWait([
        '空气如饱含汁水般甜蜜，充斥巧克力的甜腻味道与赛',
        kitaru.uma_sex_title,
        '们不自觉散发出的荷尔蒙味道。',
      ]);
      await era.printAndWait(
        '而情人节的主角自然是各位训练员了，这似乎成为了校内，乃至社会上的约定俗成。',
      );
      era.printButton('「真是奇怪。」', 1);
      await era.input();
      if (teem_count >= 2) {
        await era.printAndWait([
          '今天一天品尝了不少担当送 ',
          you.get_colored_name(),
          ' 的巧克力，也有可能是担当本身。',
        ]);
        await era.printAndWait([
          '然而 ',
          kitaru.get_colored_name(),
          ' 还是没有出现。',
        ]);
      } else {
        await era.printAndWait([
          '不过，',
          you.get_colored_name(),
          ' 似乎是那个例外。',
        ]);
        await era.printAndWait([
          '今天一天没见到 ',
          kitaru.get_colored_name(),
          '。',
        ]);
      }
      if (era.get('love:56') >= 75) {
        await era.printAndWait([
          '一直等到了晚上，也没有收到任何来自 ',
          kitaru.get_colored_name(),
          ' 的消息。',
        ]);
        await era.printAndWait([
          '短信……没有消息，电话……也没有接通，',
          you.get_colored_name(),
          ' 甚至询问了',
          kitaru.sex,
          '的舍友，',
          kitaru.sex,
          '并没有向舍友透露自己今天的行程。',
        ]);
        await era.printAndWait('有些失落的回到了家中。');
        era.drawLine({ content: you.name + '的自宅' });
        await era.printAndWait(
          '靠在沙发上，静看电子钟的数位屏显示的时间愈发逼近0点。',
        );
        await era.printAndWait([
          '有些失望……当 ',
          you.get_colored_name(),
          ' 无意间扫过几件 ',
          kitaru.get_colored_name(),
          ' 送给 ',
          you.get_colored_name(),
          ' 的开运物品时，',
          you.get_colored_name(),
          ' 如此想着。',
        ]);
        era.printButton('聆听检定', 1);
        await era.input();
        era.println();
        const result = get_random_value(65, 90);
        if (result > 60) {
          await era.printAndWait([
            '出目：',
            result,
            '/??',
            { isDivider: true },
            you.get_colored_name(),
            ' 的聆听检定: 失败',
          ]);
          await era.printAndWait('没听见什么，天气倒是让人昏昏欲睡。');
        }
        await era.printAndWait([
          '就当 ',
          you.get_colored_name(),
          ' 要在沙发上沉沉睡去时，窗户那边似乎有插销声响起，而后……',
        ]);
        await kitaru.say_and_wait('呼啊！');
        await era.printAndWait('眼前出现了一抹熟悉的栗色身影。');
        await era.printAndWait([
          '不知何时，',
          kitaru.get_colored_name(),
          ' 出现在了 ',
          you.get_colored_name(),
          ' 的面前，而更令 ',
          you.get_colored_name(),
          ' 感到躁动的则是',
          kitaru.sex,
          '糟糕的姿势。',
        ]);
        await era.printAndWait([
          '橘色头发的',
          kitaru.teen_sex_title,
          '正骑在 ',
          you.get_colored_name(),
          ' 的腰间，',
          you.get_colored_name(),
          ' 能察觉到',
          kitaru.sex,
          '被裙子遮住的臀部摩擦 ',
          you.get_colored_name(),
          ' 裤子布料的声音。',
        ]);
        await era.printAndWait([
          '应该只是 ',
          kitaru.get_colored_name(),
          ' 一贯的无距离感行为吧？',
        ]);
        await kitaru.say_and_wait([callname, '，情人节快乐！']);
        await era.printAndWait(
          '声音带着剧烈运动之后特有的一丝疲倦，刚刚说出那番话的时也是气喘吁吁的，看来是一路跑过来的。',
        );
        await era.printAndWait([
          '而校服上，甚至于是',
          kitaru.sex,
          '橘黄色的头发上也沾了不少的棕色污渍，从',
          kitaru.sex,
          '身上那股浓郁的香气来看，应该在制作过程中不小心撒上去的巧克力。',
        ]);
        await era.printAndWait([
          kitaru.sex,
          '从背后拿出了一个带着折皱的礼盒，放在了 ',
          you.get_colored_name(),
          ' 的胸口上。',
        ]);
        await kitaru.say_and_wait('请看！');
        await kitaru.say_and_wait('这是我花了一天时间为你摘下来的星星哦！');
        await era.printAndWait(
          '打开了礼盒，里面是整整十二个象征着星座的巧克力，份量对于一个人来说无论如何都有些过多了。',
        );
        era.printButton('「要我一个人吃完吗？」', 1);
        await era.input();
        await kitaru.say_and_wait(
          '不行啦～这种东西就是要只吃自己的星座才会有趣啊！',
        );
        await kitaru.say_and_wait('你看，我是双子座的。');
        await kitaru.say_and_wait('北河二和北河三加起来刚好是其他的两倍大呢！');
        await kitaru.say_and_wait('唔……果然，第一次做，份量把握的不太好……');
        await kitaru.say_and_wait(
          '好在及时赶上了，差点就错过了今天的情人节呢！',
        );
        era.printButton('「辛苦了！」', 1);
        await era.input();
        await kitaru.say_and_wait('就是说啊……所以呢！');
        await kitaru.say_and_wait('那个～我想拜托你一件事情！');
        await kitaru.say_and_wait('如果你不介意的话，可以两个人一起吃它吗？');
        await kitaru.say_and_wait('就是……感情很好的各吃一半这样。');
        await era.printAndWait([
          '随着话语愈发向着不符合师生关系的情况发展，',
          kitaru.get_colored_name(),
          ' 的面色也愈发的绯红起来。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '看着那盒摊开放在 ',
          you.get_colored_name(),
          ' 胸口的巧克力，一丝欲望自心底升起。',
        ]);
        era.printButton('「想要奖励吗？」', 1, {
          disabled: era.get('love:56') < 75,
        });
        era.printButton('只是吃下巧克力（体力+300）', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await kitaru.say_and_wait('欸！？');
          await era.printAndWait([
            '这么询问着，右手则捏住了',
            kitaru.sex,
            '腰侧的软肉。',
          ]);
          await era.printAndWait([
            '后知后觉的意识到了自己此时的姿势和所谓的骑乘位没什么两样，',
            kitaru.teen_sex_title,
            '的面色更加的红润，尾巴有意无意地拍了几下 ',
            you.get_colored_name(),
            ' 的腿。',
          ]);
          await era.printAndWait('随后是细若蚊鸣的回应传来。');
          await kitaru.say_and_wait('……想');
          era.printButton('「大点声哦！？」', 1);
          await era.input();
          await kitaru.say_and_wait('唔……巧克力还没吃呢……');
          await era.printAndWait([
            '听到回答，',
            you.get_colored_name(),
            ' 松开右手。',
          ]);
          await era.printAndWait('啪！');
          await kitaru.say_and_wait('咿呀！');
          await era.printAndWait([
            you.get_colored_name(),
            '的手指拢齐，并作成手掌，以不轻不重的力道，极快地在',
            kitaru.teen_sex_title,
            '挺翘的臀部上打了一下。',
          ]);
          await era.printAndWait('随着洁白臀肉的抖动，酥麻的快感传递开来。');
          await era.printAndWait([
            '接下来，趁着',
            kitaru.teen_sex_title,
            '分神的瞬间，',
            you.get_colored_name(),
            ' 伸出双手，和骑在自己身上的',
            kitaru.teen_sex_title,
            '的双手相扣。',
          ]);
          era.printButton('「那你喂我。」', 1);
          await era.input();
          await kitaru.say_and_wait('欸！可是……');
          await era.printAndWait([
            kitaru.teen_sex_title,
            '柔若无骨的双手被 ',
            you.get_colored_name(),
            ' 握着，自然是没有办法用手喂 ',
            you.get_colored_name(),
            ' 的。',
          ]);
          await kitaru.say_and_wait('我明白了……');
          await era.printAndWait('毕竟是占卜师，悟性自然是不差的。');
          await era.printAndWait([
            kitaru.sex,
            '像一只可爱的小狗狗一样，缓缓的俯下身子。',
          ]);
          await era.printAndWait([
            '衔起了一块巧克力，抿紧嘴唇轻轻的送到了 ',
            you.get_colored_name(),
            ' 的嘴边。',
          ]);
          await era.printAndWait('咔嚓。');
          await era.printAndWait(
            '巧克力被从中间分开，如先前所说的一样二人各吃一块。',
          );
          await era.printAndWait([
            '碎屑落在了 ',
            you.get_colored_name(),
            ' 的身上，又被',
            kitaru.teen_sex_title,
            '小心地用舌尖拭去。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的脸上布满了娇艳欲滴的绯红，有不少顺着纤细的脖颈蔓延，将挺拔的锁骨都涂满了颜色。',
          ]);
          await era.printAndWait([
            '本来处于半躺状态的 ',
            you.get_colored_name(),
            ' 趁着',
            kitaru.teen_sex_title,
            '对付巧克力的分神，坐了起来。',
          ]);
          await kitaru.say_and_wait('咕！');
          await era.printAndWait([
            '撬开了 ',
            kitaru.get_colored_name(),
            ' 的口腔，半融化的巧克力液随着舌头一起挺入',
            kitaru.sex,
            '的口腔。',
          ]);
          await kitaru.say_and_wait('唔哈……');
          await era.printAndWait([
            '舌头在',
            kitaru.sex,
            '的口腔中游走，将巧克力的味道和',
            kitaru.teen_sex_title,
            '的唾液混合在一起，在搅动间发出浓稠的淫靡声响。',
          ]);
          await kitaru.say_and_wait('咕……');
          await era.printAndWait([
            '先是北河二，再是北河三，象征着 ',
            kitaru.get_colored_name(),
            ' 的两块巧克力就这样化作混着双方唾液的液体进入二人腹中。',
          ]);
          await era.printAndWait([
            '而身前已经在方才可可味的激吻中被 ',
            you.get_colored_name(),
            ' 弄到有些失神的 ',
            kitaru.get_colored_name(),
            '，正满足地喘息着。',
          ]);
          await era.printAndWait(
            '时不时吐出来的小舌头上还粘着些许融化的巧克力，黑色与粉色互相交叠。',
          );
          await kitaru.say_and_wait([callname, '……想要！']);
        } else {
          await era.printAndWait([
            '不能辜负 ',
            kitaru.get_colored_name(),
            ' 的好心。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' 认真的吃起了巧克力。',
          ]);
        }
      } else {
        await era.printAndWait([
          '直到晚上，接到了来自 ',
          kitaru.get_colored_name(),
          ' 的电话。',
        ]);
        await kitaru.say_and_wait('那个，能在学校附近的公园见一面吗？');
        era.drawLine({ content: '公园' });
        await era.printAndWait([
          '等了好一会儿，才看到从入口处匆忙跑过来的 ',
          kitaru.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait(['啊！', callname, '，不好了！不好了！']);
        await era.printAndWait([
          you.get_colored_name(),
          '见着橘色头发的',
          kitaru.teen_sex_title,
          '焦急的向 ',
          you.get_colored_name(),
          ' 跑过来。',
        ]);
        await era.printAndWait([
          '校服上沾了不少的棕色污渍，细闻可以感受到',
          kitaru.sex,
          '身上沾染着的浓郁巧克力香气。',
        ]);
        era.printButton('「怎么了？」', 1);
        await era.input();
        await kitaru.say_and_wait('因为星星实在太多，星座们全都掉出来了呢！');
        await kitaru.say_and_wait('你看！');
        await era.printAndWait([
          kitaru.sex,
          '把藏在背后的礼盒向 ',
          you.get_colored_name(),
          ' 递上。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '配合的露出了惊喜的表情。',
        ]);
        era.printButton('接过礼盒', 1);
        await era.input();
        await kitaru.say_and_wait('开玩笑的啦！');
        await kitaru.say_and_wait('这是我费劲心思制作的十二星座巧克力。');
        await kitaru.say_and_wait('今天可是情人节啊！');
        await kitaru.say_and_wait('身为喜欢占卜的人，自然要认真的过节才行！');
        await era.printAndWait([
          '在',
          kitaru.sex,
          '热切的目光下，',
          you.get_colored_name(),
          ' 打开了礼盒。',
        ]);
        await era.printAndWait([
          '整整十二个象征着星座的巧克力，尽管做工有些粗糙，但',
          kitaru.teen_sex_title,
          '的心意确实的蕴含在其中，除了份量对于一个人来说无论如何都有些过多了。',
        ]);
        era.printButton('「要我一个人吃完吗？」', 1);
        await era.input();
        await kitaru.say_and_wait(
          '不行啦～这种东西就是要只吃自己的星座才会有趣啊！',
        );
        await kitaru.say_and_wait('你看，我是双子座的。');
        await kitaru.say_and_wait('北河二和北河三加起来刚好是其他的两倍大呢！');
        await kitaru.say_and_wait('唔……果然，第一次做，份量把握的不太好……');
        await kitaru.say_and_wait(
          '好在及时赶上了，差点就错过了今天的情人节呢！',
        );
        era.printButton('「辛苦了！」', 1);
        await era.input();
        await kitaru.say_and_wait('就是说啊……所以呢！');
        await kitaru.say_and_wait('那个～我想拜托你一件事情！');
        await kitaru.say_and_wait('如果你不介意的话，可以两个人一起吃它吗？');
        await era.printAndWait([
          '指了指盒中看起来有些粗糙的手工巧克力，',
          kitaru.teen_sex_title,
          '的脸颊有些若有若无的绯红。',
        ]);
        await kitaru.say_and_wait('就是……感情很好的各吃一半这样。');
        await era.printAndWait([
          '似乎是无自觉的说出了似乎有些不符合师生关系的发言，',
          kitaru.get_colored_name(),
          ' 双手合十的看着 ',
          you.get_colored_name(),
          '。',
        ]);
        era.printButton('点头', 1);
        await era.input();
        await era.printAndWait([
          '之后和 ',
          kitaru.get_colored_name(),
          ' 一起食用了巧克力，',
        ]);
        await kitaru.say_and_wait('呼啊！比想象中还要甜呢！');
        await kitaru.say_and_wait([callname, '，祝你情人节快乐！']);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_kink_sho: (() => {
    const title = '迎接金號赏';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('呼哇……真是时隔了好久之后的比赛。');
      era.printButton('「准备的怎么样？」', 1);
      await era.input();
      await kitaru.say_and_wait('马马虎虎啦！');
      await kitaru.say_and_wait('唔！没有什么特别的感觉呢……');
      await kitaru.say_and_wait('幸运缠身的我，只要奔跑就会一直赢下去吧？');
      await era.printAndWait([
        '穿着体操服的 ',
        kitaru.get_colored_name(),
        ' 笑意盈盈的看着 ',
        you.get_colored_name(),
        '。',
      ]);
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait('对了对了！');
        await kitaru.say_and_wait([callname, '！再陪我做一个开运的仪式吧！']);
        await era.printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 还未反应过来的时候，用手轻轻捧起了 ',
          you.get_colored_name(),
          ' 的脸。',
        ]);
        await you.say_and_wait('唔！');
        await era.printAndWait([
          '通常来讲会固守齿后的小舌，这次却一反常态的侵入 ',
          you.get_colored_name(),
          ' 的口腔，送上属于 ',
          kitaru.get_colored_name(),
          ' 的涎液。',
        ]);
        await kitaru.say_and_wait('啾～');
        await era.printAndWait(
          '直到由于通知选手入闸，而不得不停止这一次时间长的有些离谱的激吻。',
        );
        await kitaru.say_and_wait(['好了！', callname, '！我出发了！']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的脸上红云浮动，让 ',
          you.get_colored_name(),
          ' 不禁怀疑这家伙到底放了多少心思在跑步上。',
        ]);
      }
      era.printButton('「还是要认真一点吧？」', 1);
      await era.input();
      await kitaru.say_and_wait(['欸，', callname, '！']);
      await kitaru.say_and_wait('明明带给我如此好运的就是你啊！');
      await kitaru.say_and_wait('你只需要坐那里看着就行！');
      await kitaru.say_and_wait('大吉的我只要随便跑跑就能赢了！');
      await era.printAndWait([
        '漠然，乃至于有些冷淡的态度，似乎比赛对',
        kitaru.sex,
        '而言是什么完全无关的事情一样。',
      ]);
      await era.printAndWait([
        '只是在服从 ',
        you.get_colored_name(),
        ' 的命令踏上赛场。',
      ]);
      await kitaru.say_and_wait('好了好了，不用再说了！');
      await era.printAndWait([
        '也许在菊花赏上，随着 ',
        kitaru.get_colored_name(),
        ' 的执念一同献祭掉的，还有什么别的东西。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kink_sho_win: (() => {
    const title = '被凭依者';
    /**
     * 菊花赏胜利+金鯱赏胜利
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '轻松地取得了胜利，就像是和 ',
        callname,
        ' 约定的一样。',
      ]);
      await kitaru.print_and_wait([
        '想向',
        kitaru.elder_sibling_sex_title,
        '报告我现在的状态。',
      ]);
      await kitaru.say_and_wait([
        '我已经是一位优秀的赛',
        kitaru.uma_sex_title,
        '了哦！',
      ]);
      await kitaru.print_and_wait([
        '在',
        kitaru.elder_sibling_sex_title,
        '的墓前，我对着',
        kitaru.sex,
        '的墓碑这样说着。',
      ]);
      await kitaru.say_and_wait([callname, ' 有没有什么想说的？']);
      await kitaru.print_and_wait([
        '我看见 ',
        callname,
        ' 双手合十，认真的侧脸只能看到微动的嘴唇。',
      ]);
      await you.say_and_wait([
        '福来的',
        kitaru.elder_sibling_sex_title,
        '，谢谢你，一直以来照顾着',
        kitaru.sex,
        '！',
      ]);
      await kitaru.print_and_wait([
        '嗯，',
        kitaru.elder_sibling_sex_title,
        '一定会为我高兴的吧！',
      ]);
      era.drawLine({ content: '一段时间后 特雷森的宿舍内' });
      await kitaru.say_and_wait('……');
      await kitaru.print_and_wait('是吗？');
      await kitaru.print_and_wait(
        '青叶赏，日本德比，神户新闻赏，菊花赏，金號赏……',
      );
      await kitaru.print_and_wait('驱使我跑到现在的到底是什么呢？');
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '……']);
      await kitaru.print_and_wait(
        '只是偶然一瞥，窗户变成了镜子，映出了独自站着的我。',
      );
      await kitaru.print_and_wait('身高比以前高了，头发也变长了。');
      await kitaru.print_and_wait([
        '比起第一次遇到 ',
        callname,
        ' 时，更加成熟的模样。',
      ]);
      await kitaru.print_and_wait([
        '简直和照片中的',
        kitaru.elder_sibling_sex_title,
        '别无二致。',
      ]);
      await kitaru.print_and_wait('那……我呢？');
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait('被凭依的空壳……');
      await kitaru.print_and_wait(
        '莫名的恶心感涌上心头，胃和肠子像是绞成了一团。',
      );
      era.drawLine({ content: '次日 ' + you.name + ' 的办公室' });
      era.printButton('「空壳？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 喃喃地念着 ',
        kitaru.get_colored_name(),
        ' 告诉的这个结论，那个认为自己被',
        kitaru.elder_sibling_sex_title,
        '的灵魂凭依上的',
        kitaru.teen_sex_title,
        '，正不安的站在屋内的一角。',
      ]);
      await kitaru.say_and_wait('对啊，我好像的确变得不太像是自己。');
      await kitaru.say_and_wait('该说，我只是借出身体而已，让执念附上来吗？');
      await kitaru.say_and_wait('因为我其实什么也没有想嘛。');
      await kitaru.say_and_wait('只是随意地顺势发展而已。');
      await kitaru.say_and_wait('这样子……真的算我赢了吗？');
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('要是在两年前，我说不定会很高兴呢！');
      await kitaru.say_and_wait('但是一想到……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        '颤抖的声音逐渐变得如雾般朦胧不清。',
      ]);
      era.printButton('「阿福？」', 1);
      await era.input();
      await kitaru.say_and_wait('抱歉……');
      await kitaru.say_and_wait('让我静一静。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的 PTSD 再度复发了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kink_sho_lose: (() => {
    const title = '运气用尽';
    /**
     * 菊花赏胜利+金鯱赏失败
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('咦……我输了……？');
      await kitaru.say_and_wait('我的运气，居然没效……？');
      await kitaru.say_and_wait('这是骗人的吧！这不可能发生的！我的运气是……！');
      await kitaru.say_and_wait([callname, '！这是个噩梦对吧！']);
      await kitaru.say_and_wait('明明，明明在你身边的我应该是大吉才对的！');
      era.printButton('「这是现实……」', 1);
      await era.input();
      await kitaru.say_and_wait('怎么会，我还以自己已经脱胎换骨了！');
      await kitaru.say_and_wait('要是被神明抛弃……我……我……！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 默默的走上前，将快要哭出来的 ',
        kitaru.get_colored_name(),
        ' 拥入怀中。',
      ]);
      await kitaru.say_and_wait(['呜呜呜……', callname, '……']);
      era.drawLine({ content: '次日 ' + you.name + ' 的办公室' });
      era.printButton('「空壳？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' 喃喃地念着 ',
        kitaru.get_colored_name(),
        ' 告诉的这个结论，那个',
        kitaru.teen_sex_title,
        '，正不安的站在屋内的一角。',
      ]);
      await kitaru.say_and_wait('对啊，我好像的确变得不太像是自己。');
      await kitaru.say_and_wait('该说，我只是借出身体而已，让执念附上来吗？');
      await kitaru.say_and_wait('因为我其实什么也没有想嘛。');
      await kitaru.say_and_wait('只是随意地顺势发展而已。');
      await kitaru.say_and_wait('这样子……我真的跑出来了吗？');
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        '颤抖的声音逐渐变得如雾般朦胧不清。',
      ]);
      era.printButton('「阿福？」', 1);
      await era.input();
      await kitaru.say_and_wait('抱歉……');
      await kitaru.say_and_wait('让我静一静。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的 PTSD 再度复发了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_11: (() => {
    const title = '不稳定星等';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '接连获得胜利的 ',
        kitaru.get_colored_name(),
        ' 在金號赏后受到了电视台采访的邀请。',
      ]);
      await era.printAndWait([
        '在赛',
        kitaru.uma_sex_title,
        '中出身平平无奇的 ',
        kitaru.get_colored_name(),
        ' 在青叶赏的糟糕表现之后，还能接连取下包括菊花赏在内的几场重赏的冠军，',
        kitaru.sex,
        '也算是跑进了众人的视野中。',
      ]);
      await era.printAndWait([
        '推不掉，毕竟相较于同期早早就宣称是以挑战速度极限的栗毛赛',
        kitaru.uma_sex_title,
        '，还是来自于目白家的长距离赛',
        kitaru.uma_sex_title,
        '，除了赛场，胜者live以外，偶尔会在神社露面的 ',
        kitaru.get_colored_name(),
        ' 可称得上是神秘。',
      ]);
      await era.printAndWait([
        '作为',
        kitaru.sex,
        '的训练员，理所应当的需要陪',
        kitaru.sex,
        '一起接受采访，况且……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 想起了',
        kitaru.sex,
        '在金號赏后的表现，似乎在那次比赛之后，意识到什么的 ',
        kitaru.get_colored_name(),
        ' 又回到了那个不稳定的精神状态。',
      ]);
      era.drawLine({ content: '演播室内' });
      await kitaru.say_and_wait('嗯，是的');
      await kitaru.say_and_wait('也许吧');
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        '在赛后的采访中，',
        kitaru.get_colored_name(),
        ' 回答的颇为勉强，多亏了 ',
        you.get_colored_name(),
        ' 打的圆场，才让话题风向往着 ',
        kitaru.get_colored_name(),
        ' 是一个冷静而沉默寡言的',
        kitaru.uma_sex_title,
        '导去。',
      ]);
      await era.printAndWait([
        '冷静，沉默寡言会和 ',
        kitaru.get_colored_name(),
        ' 关联到一起？真是令 ',
        you.get_colored_name(),
        ' 难以想象。',
      ]);
      await era.printAndWait([
        '好在眼看着这场考验就要抵达尽头，',
        you.get_colored_name(),
        ' 已经开始计划着之后针对 ',
        kitaru.get_colored_name(),
        ' 的疗愈方案。',
      ]);
      await era.printAndWait('不对！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 被汗浸润的橘发贴在额头上，马耳像是受惊了般竖起来。',
      ]);
      await era.printAndWait('必须要叫停了，然而下一个问题已经被抛了出来。');
      await you.say_as_passer_by_and_wait('女主持人', '那么，我想问一下……');
      await you.say_as_passer_by_and_wait('女主持人', [
        kitaru.get_colored_name(),
        ' 选手目前是为了什么在奔跑呢？',
      ]);
      await kitaru.say_and_wait('为什么', true);
      await kitaru.say_and_wait('胜利吗？', true);
      await kitaru.say_and_wait('奖金吗？', true);
      await kitaru.say_and_wait('还是别的什么？', true);
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '？']);
      await you.say_as_passer_by_and_wait(
        '女主持人',
        '嗯？抱歉，能再说一遍吗？',
      );
      await kitaru.say_and_wait('但是……', true);
      await kitaru.say_and_wait('但是我已经跑出来了啊！！！！！');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          '「',
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: '不不不不不！！！！！',
          },
          '」',
        ],
        {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await kitaru.say_and_wait('唔！');
      await era.printAndWait([
        '在昏迷的 ',
        kitaru.get_colored_name(),
        ' 向后栽倒在地上前，',
        you.get_colored_name(),
        ' 冲了上去，及时扶住了',
        kitaru.sex,
        '。',
      ]);
      await era.printAndWait(['采访中断。']);
      era.drawLine({ content: '几天后' });
      await era.printAndWait(['检查并无大碍，只是需要多休息。']);
      await kitaru.say_and_wait(['抱歉，又麻烦 ', callname, ' 了。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 听着沙发上病怏怏的 ',
        kitaru.get_colored_name(),
        ' 对 ',
        you.get_colored_name(),
        ' 说着抱歉。',
      ]);
      await era.printAndWait(
        '是啊，光是处理在演播室昏迷导致的舆论爆炸，就让你这几天焦头烂额。',
      );
      await era.printAndWait([
        '晕倒在演播室的 ',
        kitaru.get_colored_name(),
        '，无疑把 ',
        you.get_colored_name(),
        ' 推上了风口浪尖。',
      ]);
      await era.printAndWait([
        '不过，眼下更重要的，还是愈发变得不稳定的 ',
        kitaru.get_colored_name(),
        '。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_12: (() => {
    const title = '落入鲸鱼之腹';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} suzuka 无声铃鹿
     * @param {CharaTalk} tannhauser 待兼诗歌剧
     * @param {CharaTalk} bright 目白光明
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {PrintedSpan} callname_2 无声铃鹿对玩家的称呼
     * @param {PrintedSpan} b_call_k 目白光明对待兼福来的称呼
     */
    const f = async (
      kitaru,
      suzuka,
      tannhauser,
      bright,
      you,
      callname,
      callname_2,
      b_call_k,
    ) => {
      await era.printAndWait([
        '在那次采访之后，',
        kitaru.get_colored_name(),
        ' 陷入了低沉。',
      ]);
      await era.printAndWait('今天甚至还翘掉了训练。');
      await era.printAndWait('放不下心。');
      await era.printAndWait([
        '虽然',
        kitaru.sex,
        '已经给 ',
        you.get_colored_name(),
        ' 留了不用担心',
        kitaru.sex,
        '的消息，但是那种不安感还是在 ',
        you.get_colored_name(),
        ' 心中挥之不去。',
      ]);

      if (era.get('cflag:74:招募状态') === 1) {
        await bright.say_and_wait([b_call_k, ' 吗？……没见到呢。']);
      }
      if (era.get('cflag:62:招募状态') === 1) {
        await tannhauser.say_and_wait([
          '诶！今天',
          kitaru.sex,
          '早上出宿舍就没见过了。',
        ]);
      }
      if (era.get('cflag:2:招募状态') === 1) {
        await suzuka.say_and_wait(['抱歉……', callname_2, '，我也没见到。']);
      }

      await era.printAndWait([
        '接连询问了几个同学也没得到担当的下落，如果是 ',
        kitaru.get_colored_name(),
        '，现在最有可能会去哪里？',
      ]);
      await era.printAndWait([
        '不，不会是',
        kitaru.sex,
        '经常参拜的神社，也不会是学校那些学生们常去的枯树洞。',
      ]);
      era.drawLine({ content: '市郊墓园' });
      await era.printAndWait([
        '橘色的赛',
        kitaru.uma_sex_title,
        '正对着那方代表着',
        kitaru.sex,
        '已逝',
        kitaru.elder_sibling_sex_title,
        '的墓碑发着呆。',
      ]);
      era.printButton('「待兼福来？」', 1);
      await era.input();
      await kitaru.say_and_wait(['……', callname, '！']);
      await kitaru.say_and_wait('果然还是被找到了吗？');
      await kitaru.say_and_wait('欸嘿嘿……？');
      era.printButton('使用铁爪', 1);
      await era.input();
      await kitaru.say_and_wait('啊呜！');
      await era.printAndWait([
        '被 ',
        you.get_colored_name(),
        ' 拍到头的',
        kitaru.teen_sex_title,
        '发出了一声悲鸣。',
      ]);
      era.printButton('「需要帮助吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('诶，不用啦！');
      await kitaru.say_and_wait('你看，我现在好多啦！');
      era.printButton('「实际呢？」', 1);
      era.printButton('「说实话。」', 2);
      await era.input();
      await kitaru.say_and_wait('很害怕……');
      era.printButton('「害怕？」', 1);
      await era.input();
      await kitaru.say_and_wait('……嗯。');
      await kitaru.say_and_wait(
        '占卜和挑选良辰吉日，真的都很好啊，它们总是在背后为我助力……',
      );
      await kitaru.say_and_wait('从那时起，就一直如此。');
      await era.printAndWait([
        '伸手抚摸着大理石墓碑的表面，',
        kitaru.get_colored_name(),
        ' 眼中的星星蒙上了一层阴霾。',
      ]);
      await kitaru.say_and_wait('我自打很小的时候，就开始相信占卜了。');
      await kitaru.say_and_wait([
        '就这样，大吉之日的我碰到了 ',
        callname,
        '，强撑着一直往答应',
        kitaru.elder_sibling_sex_title,
        '的菊花赏走了下去。',
      ]);
      await kitaru.say_and_wait(
        '本来以为夺下菊花赏之后，只要有着命定之人和开运物品的陪伴，我就会幸福的吧？',
      );
      await kitaru.say_and_wait([
        '结果在金鯱赏之后，发现自己还是以前那个缩在',
        kitaru.elder_sibling_sex_title,
        '影子里的小',
        kitaru.uma_sex_title,
        '。',
      ]);
      await kitaru.say_and_wait([
        '完全不知道为什么要成为赛',
        kitaru.uma_sex_title,
        '，只是凭着命定之人的指示踏上赛场罢了……',
      ]);
      await kitaru.say_and_wait('是不是就此退役比较好呢？');
      era.printButton('「为什么？」', 1);
      await era.input();
      await kitaru.say_and_wait('对啊！');
      await era.printAndWait([
        kitaru.sex,
        '点了点头，失去高光的星星瞳呆滞地望着墓园里的湖面。',
      ]);
      await kitaru.say_and_wait([
        '没有目标，完全辜负了粉丝，乃至 ',
        callname,
        ' 愿望的，被神灵舍弃了的我！',
      ]);
      await kitaru.say_and_wait(
        '就该去当池子里的碎藻，载浮载沉，最后被吞入鱼腹才对啊！',
      );
      await kitaru.say_and_wait([
        '说起来，',
        callname,
        ' 为什么会支持我到现在呢？',
      ]);
      await kitaru.say_and_wait('明明我总是犯错，还经常得寸进尺……');
      era.printButton('「因为喜欢福来的奔跑」', 1);
      era.printButton('「想要实现福来的愿望」', 2);
      await era.input();
      await kitaru.say_and_wait('欸！！！！！！');
      era.printButton('「我说了什么奇怪的话吗？」', 1);
      await era.input();
      await kitaru.say_and_wait(
        '没有！只是在想……要是我也能说出这样帅气的话就好了。',
      );
      await kitaru.say_and_wait('可光是决定自己下一步要怎么走就分身乏术了。');
      era.printButton('「是这样吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸？');
      era.printButton('「不过，我觉得阿福你也很厉害喔！」', 1);
      await era.input();
      await kitaru.say_and_wait('唔！');
      era.printButton('「你是能从别人给你的东西中找出合适的答案的人。」', 1);
      await era.input();
      await era.printAndWait([
        '面前',
        kitaru.uma_sex_title,
        '的双耳摆动了起来。',
      ]);
      era.printButton('「我说的没错吧？」', 1);
      await era.input();
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait('谢谢你，就算只是安慰人的话，我也很开心了。');
      await kitaru.say_and_wait([
        '……明明我也让 ',
        callname,
        ' 和支持自己的粉丝们失望了。',
      ]);
      era.printButton('「那么在宝冢纪念上给大家赔罪吧！」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！');
      await kitaru.say_and_wait('嗯？啊啊啊，不行，绝对不行的啊！');
      await kitaru.say_and_wait(
        '宝冢纪念——不就是必须要粉丝投票后才能参加的比赛吗？',
      );
      await era.printAndWait([
        '安慰着声音正不断变大的 ',
        kitaru.get_colored_name(),
        '，',
        you.get_colored_name(),
        ' 开始替',
        kitaru.sex,
        '思考起粉丝感谢祭拉票的办法。',
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的 PTSD 暂时消除了。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = (kitaru) => ['背负众人愿望的', kitaru.teen_sex_title];
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 在先前采访上的糟糕表现，引来了不少媒体的抨击。',
      ]);
      await kitaru.say_and_wait(['唔啊！', callname, '。真的没有问题吗？']);
      await kitaru.say_and_wait('那个，我记得那些报纸上都说我……');
      await you.say_as_passer_by_and_wait('报纸', [
        '……',
        kitaru.get_colored_name(),
        ' 的表现实在让人看不下去……',
      ]);
      await you.say_as_passer_by_and_wait(
        '报纸',
        '……缺乏运动员的骄傲与回应粉丝的精神……',
      );
      await you.say_as_passer_by_and_wait('报纸', '……并不热爱比赛……');
      await kitaru.say_and_wait('啊！没必要说出来吧！');
      await kitaru.say_and_wait('不过……算了，毕竟我就是那样没错。');
      await kitaru.say_and_wait('真的，很刺耳……刺耳到感觉耳朵快掉下来了。');
      await kitaru.say_and_wait('怕是我一上场，就会吃到鸡蛋雨吧……');
      era.printButton('「好了，该上场了！」', 1);
      await era.input();
      era.printButton('「相信我，不会有问题的！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '在先前的调查中发现，社交媒体上，',
        kitaru.get_colored_name(),
        ' 的粉丝们并没有因为',
        kitaru.sex,
        '在采访上的表现而放弃',
        kitaru.sex,
        '。',
      ]);
      await era.printAndWait([
        '反而是在',
        kitaru.sex,
        '的粉丝群中，有一些人在 ',
        you.get_colored_name(),
        ' 的引导下，开始为',
        kitaru.sex,
        '的参赛资格投票。',
      ]);
      await kitaru.say_and_wait(['唔！如果 ', callname, ' 你这么说的话……']);
      await kitaru.say_and_wait(
        '总之！如果我在粉丝的骂声中去往了天国，我的水晶球就交给你了！',
      );
      await era.printAndWait([
        '带着几分踏上刑场的悲壮，',
        kitaru.get_colored_name(),
        ' 向前走去。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 正站在饰以URA徽记的采访背景墙前。',
      ]);
      await you.say_as_passer_by_and_wait('女主持人', [
        kitaru.get_colored_name(),
        ' ',
        kitaru.adult_sex_title,
        '，你愿意告诉我们你春季的目标吗？',
      ]);
      await kitaru.say_and_wait('咕啊！上来就问这种问题吗？');
      await era.printAndWait([
        '虽然早就预料到了 ',
        kitaru.get_colored_name(),
        ' 会有这样的反应，',
        you.get_colored_name(),
        ' 还是无奈地扶了扶额。',
      ]);
      await era.printAndWait([
        '从先前自己私下调查的情况来看，',
        kitaru.get_colored_name(),
        ' 的粉丝并没有因为',
        kitaru.sex,
        '在采访上的表现而放弃',
        kitaru.sex,
        '。',
      ]);
      era.printButton('「你就说给他们听吧。」', 1);
      await era.input();
      await era.printAndWait([
        '将手放在',
        kitaru.teen_sex_title,
        '的肩膀上，稍稍用力将还在不断抗拒的',
        kitaru.sex,
        '推到了主持人的话筒前。',
      ]);
      await kitaru.say_and_wait('唔！确定嘛……好吧。');
      await kitaru.say_and_wait('各位，本人在这个春季的目标！');
      await kitaru.say_and_wait('与其说是目标，不如说是梦想吧——！');
      await kitaru.say_and_wait('是参加宝冢纪念！');
      await era.printAndWait([
        '似乎是自己都没察觉到会这么顺利的说出来，',
        kitaru.get_colored_name(),
        ' 的脸上先是惊讶，而后如等待审判般的低了下头。',
      ]);
      await kitaru.say_and_wait('咦？');
      era.printButton('鼓掌', 1);
      await era.input();
      await era.printAndWait('台下响起了一阵掌声。');
      await kitaru.say_and_wait('鼓掌？为什么呢？');
      await you.say_as_passer_by_and_wait('粉丝A', [
        '加油啊！',
        kitaru.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        '粉丝B',
        '我会去帮你投票的！一定要出赛啊！',
      );
      await kitaru.say_and_wait('大家是怎么了？明明那次的采访那么糟糕……');
      await you.say_as_passer_by_and_wait('粉丝A', [
        '啊！实在是太惨了呢，不过这就是 ',
        kitaru.get_colored_name(),
        ' 呀。',
      ]);
      await you.say_as_passer_by_and_wait(
        '粉丝B',
        '人偶尔也是会迷惘的嘛，该说会有种亲切感吗？',
      );
      await kitaru.say_and_wait('亲切感……所以大家还没有放弃我吗？');
      await you.say_as_passer_by_and_wait(
        '粉丝C',
        '才不会放弃你呢！在菊花赏上的表现那么拼命，真是令人难忘！',
      );
      await you.say_as_passer_by_and_wait(
        '粉丝D',
        '是啊！宝冢纪念一定要加油啊！',
      );
      await kitaru.say_and_wait('是的……是的……！');
      await kitaru.say_and_wait('我会再挑战一次看看的！');
      await era.printAndWait([
        '就算遭到了神明的舍弃，也会被粉丝们捡回来，在投票结果公布后，',
        kitaru.get_colored_name(),
        ' 勉强获得了宝冢纪念的参赛资格。',
      ]);
      era.println();
      await era.printAndWait([kitaru.get_colored_name(), ' 不再依赖运势……']);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '迎接宝冢纪念';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('通向荣耀的参拜道路本来应该已经中断！');
      await kitaru.say_and_wait('但是，大家大大小小的愿望一个又一个汇聚起来！');
      await kitaru.say_and_wait('替我再次开辟出那条道路了！');
      await kitaru.say_and_wait('宝冢纪念！');
      await kitaru.say_and_wait(['我绝对不会辜负他们的，', callname, '！']);
      await kitaru.say_and_wait('我会跑出一场最棒的比赛给大家看！');
      era.printButton('「已经没事了？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '是的！之前我只是背着',
        kitaru.elder_sibling_sex_title,
        '的愿望，靠着大大小小的开运道具前行。',
      ]);
      await kitaru.say_and_wait(
        '但现在的我，还背负着许多粉丝的愿望！比之前强太多了！',
      );
      await kitaru.say_and_wait('还有最重要的，自己想要获胜的心情！');
      await kitaru.say_and_wait('这场仪式……');
      await kitaru.say_and_wait(
        '不……比赛，我不会依靠运气，而是用我自己的意志去跑！',
      );
      era.printButton('「听起来有点太耍帅了呢？」', 1);
      era.printButton('「保持这个势头向前冲吧！」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('说，说的也算呢～这样太夸张了，太夸张了……');
      } else {
        await kitaru.say_and_wait('嗯！……尽管就连我自己都觉得有点太夸张了。');
      }
      await kitaru.say_and_wait(
        '不过！我的心情可是货真价实的！这次签筒里会抽出什么！',
      );
      await kitaru.say_and_wait('是由我自己决定！');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '复苏';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {boolean} kink_sho_kiss 是否在金鯱赏前接吻
     */
    const f = async (kitaru, you, callname, kink_sho_kiss) => {
      const ret = [];
      await era.printAndWait([
        '看台上，那犹如建御雷神才能发出的巨大欢呼声，宣告了 ',
        kitaru.get_colored_name(),
        ' 的胜利。',
      ]);
      await era.printAndWait('正所谓，事在人为，有志者，事竟成。');
      await era.printAndWait([
        '走出低谷后的大复活，',
        kitaru.get_colored_name(),
        ' 今日的表现，正是这句话的完美写照。',
      ]);
      era.println();
      era.drawLine({ content: '阪神赛马场 休息室内' });
      await kitaru.say_and_wait([callname, '！我赢了！我赢了！']);
      era.printButton('「嗯！粉丝们也很高兴呢！」', 1);
      await era.input();
      await kitaru.say_and_wait('那我们下一场比赛是什么呢？');
      await kitaru.say_and_wait('还是趁着夏季合宿这段时间好好想一下吧。');
      await kitaru.say_and_wait(['对了，', callname, '！']);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await kitaru.say_and_wait('关于自己的道路要怎么走，我似乎有一点眉目了！');
      await you.say_and_wait('能告诉我吗？');
      await kitaru.say_and_wait('唔……目前只是有点模糊不清的预感而已啦！');
      if (
        era.get('love:56') >= 75 &&
        kink_sho_kiss &&
        you.sex_code !== 0 &&
        kitaru.sex_code !== 1
      ) {
        await kitaru.say_and_wait(['不过那条路一定得有 ', callname, ' 吧！']);
        await era.printAndWait([
          '说完这番话后，因为运动完而脸颊酡红的 ',
          kitaru.get_colored_name(),
          ' 环抱住了 ',
          you.get_colored_name(),
          ' 的腰。',
        ]);
        await era.printAndWait([
          '故意扯的有些松垮的决胜服，半遮半掩的露出',
          kitaru.sex,
          '精致分明的锁骨，与随着呼吸颤动的乳肉。',
        ]);
        await era.printAndWait(
          '再向下，是正不断交叠摩擦的湿漉漉白丝和逐渐被卷进双腿间的蓝色百褶裙。',
        );
        await kitaru.say_and_wait(['那个……', callname, '……']);
        await kitaru.say_and_wait([
          '金號赏的事情，真的很抱歉，还对 ',
          callname,
          ' 说出那样的话……',
        ]);
        await kitaru.say_and_wait('如果想的话……就，把我当作是赔罪的祭品吧……');
        era.printButton('接受', 1);
        era.printButton('拒绝', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            '把得胜回来的 ',
            kitaru.get_colored_name(),
            ' 壁咚在了墙角。',
          ]);
          await kitaru.say_and_wait([callname, '！']);
          await era.printAndWait(
            '大口的呼吸起湿漉漉白丝，乳间与腋下的香甜气味。',
          );
          await era.printAndWait([
            '配合着休息室内屏幕里解说员小姐的点评，一起品鉴起今日优胜',
            kitaru.uma_sex_title,
            '的久经锻炼的肉体。',
          ]);
          await era.printAndWait([
            '在喘息声中扛起了 ',
            kitaru.get_colored_name(),
            ' 的右腿，自打小就开始锻炼神乐舞的',
            kitaru.sex,
            '柔韧度出色。',
          ]);
          await era.printAndWait([
            '肉棒抵着和褪下的内裤拉出了丝线的穴口，',
            you.get_colored_name(),
            ' 的担当下意识的想要挣扎，却又想起了自己今天作为祭品的身份而作罢。',
          ]);
          await era.printAndWait(
            '插入了，腰间的悬挂着的绘马配合的如祈福般发出了声响。',
          );
          await era.printAndWait([
            '毫无怜惜的抽插，不理会 ',
            kitaru.get_colored_name(),
            ' 如何用染满了欲望的声线求饶。',
          ]);
          await era.printAndWait([
            '然后在里面直接射出来，报复般的让这个总是不让人省心的担当子宫被 ',
            you.get_colored_name(),
            ' 的精液填满。',
          ]);
          await era.printAndWait([
            '直到让',
            kitaru.sex,
            '水手服下的平坦小腹略微鼓起，才想起来这家伙一会儿还要去参加胜者舞台而停手。',
          ]);
          await era.printAndWait([
            '而后的LIVE环节，明明极少出错的 ',
            kitaru.get_colored_name(),
            ' 接连出现了几个失误。',
          ]);
          await era.printAndWait(
            'LIVE还未过半，新换上的舞台服就已经被汗水浸透，胸腹之间的衣料隐隐透出水痕，而短裙里颤抖双腿间流下的液滴，和沿着下巴滴落的汗水一起落在舞台上。',
          );
        } else {
          await era.printAndWait([
            '拒绝了，',
            you.get_colored_name(),
            ' 看着 ',
            kitaru.get_colored_name(),
            ' 莫名变得气鼓鼓的走向了LIVE的候场房间。',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_95_25: (() => {
    const title = '无愿之愿';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 如往常一样，站在神社的摇铃前',
      ]);
      await kitaru.say_and_wait('呼呼！那么，接下来该许愿了！');
      await kitaru.say_and_wait('希望未知的下一场比赛……');
      await kitaru.say_and_wait(
        '欸！不管是什么，总之神明只需要看着我就好了，我会自己完成的！',
      );
      await kitaru.say_and_wait('来许个别的愿望吧……');
      await era.printAndWait([
        '然而在低头思索了一阵之后，原本静心凝神的',
        kitaru.teen_sex_title,
        '突然发出了',
        kitaru.sex,
        '标志性的怪叫声。',
      ]);
      await kitaru.say_and_wait('呃！咦咦～？唉呀？');
      await era.printAndWait('随后一溜烟冲出了神社。');
      era.drawLine({ content: you.name + ' 的办公室' });
      await era.printAndWait([
        '橙发的',
        kitaru.teen_sex_title,
        '火急火燎地推开了 ',
        you.get_colored_name(),
        ' 办公室的门，冲了进来。',
      ]);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await kitaru.say_and_wait([callname, '！大事不好了！']);
      await kitaru.say_and_wait('身为占卜之子的我！竟然没有愿望可以许！');
      await kitaru.say_and_wait('好缘分，想实现的愿望什么的，都已经实现了。');
      await kitaru.say_and_wait('是不是又和当时菊花赏结束后一样呢？');
      era.printButton('「那不是表现你现在很满足吗？」', 2);
      await era.input();
      await kitaru.say_and_wait('满足？');
      await kitaru.say_and_wait([
        '嗯……的确欸，未来的目标有了点眉头，',
        callname,
        ' 也待在我身边，还有一群支持自己的粉丝。',
      ]);
      await kitaru.say_and_wait('粉丝……');
      await kitaru.say_and_wait([
        '对了！',
        callname,
        '，我想用一场比赛，来好好回应那些支持我走到现在的粉丝！',
      ]);
      await kitaru.say_and_wait([callname, ' 有什么建议吗？']);
      era.printButton('「同样由粉丝投票决定的有马纪念？」', 1);
      era.printButton('「连着拿下日本杯和有马纪念？」', 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait('啊啦，不要再调笑我了！');
        await kitaru.say_and_wait(
          '我知道当时说的有些过于夸张了，不过，单论有马纪念的话，还是没问题的！',
        );
        await kitaru.say_and_wait('决定了！就有马纪念吧！');
      }
      era.drawLine({ content: '待兼福来家的神社' });
      await kitaru.say_and_wait(
        '上一次的宝冢纪念，我是因为跟信徒一样的粉丝大发慈悲才能够参加的。',
      );
      await kitaru.say_and_wait(
        '而这次我想靠自己的力量好好拉票，然后参加比赛。',
      );
      await kitaru.say_and_wait(
        '我想把许多的愿望全都集合起来，在年底的中山一次实现。',
      );
      await kitaru.say_and_wait(
        '在自己的愿望实现后，这次轮到我来带给大家快乐了！',
      );
      await kitaru.say_and_wait('只要我在有马纪念中获胜，大家也能获得幸福吧？');
      await era.printAndWait([
        '目光转向了 ',
        you.get_colored_name(),
        '，',
        kitaru.sex,
        '的神情看起来十分坦然，如果说是被神佛宠爱的赛',
        kitaru.uma_sex_title,
        '也不为过吧。',
      ]);
      era.printButton('「是啊。」', 1);
      era.printButton('「一定吧！」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), ' 点了点头表示赞同。']);
      await kitaru.say_and_wait('仔细想想，在神明面前，也并不是只有许愿呢！');
      await era.printAndWait([
        '橙发的',
        kitaru.teen_sex_title,
        '向前踏出了一步，尽管还是穿着校服，神态却逐渐变得和作法时的巫女一样庄严。',
      ]);
      await kitaru.say_and_wait('坐镇于此地的神明啊！请收下我的誓约吧！');
      await kitaru.say_and_wait('我绝对！会在有马纪念中获胜！');
      await kitaru.say_and_wait('这是为了把幸福送给让我对自己重拾信心的人们！');
      await era.printAndWait('严肃凛然的声音在黄昏的逢魔时刻的回荡。');
      await era.printAndWait('却意外让人觉得神圣。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: { title: '夏季合宿（资深年）' },
  ws_95_31: (() => {
    const title = '林中参拜';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {number} teem_count 担当数量
     */
    const f = async (kitaru, you, callname, teem_count) => {
      const ret = [];
      await era.printAndWait([
        '今天是盂兰盆节的最后一天，按习俗是将纸灯放入河中漂流，指引逝去亲人返回黄泉的日子。',
      ]);
      await era.printAndWait([
        '夜晚，勉强能分辨出来路的树林中，身着浅绿色浴衣的 ',
        kitaru.get_colored_name(),
        ' 扒开了挡路的树枝，露出了一处人迹罕至的河岸。',
      ]);
      await era.printAndWait([
        '夏合宿地点旁的河流，已有些许暖橙色的灯火浮在其上。',
      ]);
      await kitaru.say_and_wait(['那么，最后一天的仪式，就在这里进行吧！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 将肩膀上扛着的布袋放下，弄出了一阵重物坠地的明显声响。',
      ]);
      era.printButton('「今天的计划是？」', 1);
      era.printButton('「这里面是？」', 2);
      await era.input();
      await kitaru.say_and_wait(['是这样的！']);
      await kitaru.say_and_wait(['我想借着这次机会，顺带和过去的我告别！']);
      await era.printAndWait([
        kitaru.sex,
        '打开了那个布袋，里面是各式的开运物品。',
      ]);
      await era.printAndWait([
        '一些先前在 ',
        kitaru.get_colored_name(),
        ' 宿舍见过的，部分是曾放在你办公室的，而菊花赏买回来的那些东西则占了一大部分。',
      ]);
      await kitaru.say_and_wait([
        '唔……现在宿舍和训练室那边应该只留下了100多个的样子！',
      ]);
      await kitaru.say_and_wait(['至于放在 ', callname, ' 家里的！就送你了！']);
      era.printButton('「还是很多呀……」', 1);
      era.printButton('「那我就满怀感激的收下了！」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait(['啊！明明已经精挑细选了好久才选出这些的！']);
        await era.printAndWait([
          '被 ',
          you.get_colored_name(),
          ' 指出问题之后的',
          kitaru.teen_sex_title,
          '有些气鼓鼓地瞪了 ',
          you.get_colored_name(),
          ' 一眼。',
        ]);
      } else {
        await kitaru.say_and_wait([
          '本来想把水晶球也送给 ',
          callname,
          ' 的！不过之后说不定还有要用的时候！',
        ]);
      }
      era.println();
      await era.printAndWait([
        '小旗帜，带着折痕的扑克牌，木制的人偶就这样被掷入了河中，混入暖橙色的灯火一起向着下游流去。',
      ]);
      await kitaru.say_and_wait(['欸！话说这样会不会污染环境啊！']);
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 告诉 ',
        kitaru.get_colored_name(),
        '，已经事先通知了负责人，所以下游会有阻拦网收集并集中焚烧后，',
        kitaru.teen_sex_title,
        '总算可以放心的放流起',
        kitaru.sex,
        '的开运物品来。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await kitaru.say_and_wait(['那么，就用这盏纸灯作为今天的结束吧？']);
      await era.printAndWait([
        '被火光暖成橙色的方形纸灯浮在水面上，可灯却像是被钉死了一样在河中浮着。',
      ]);
      await kitaru.say_and_wait(['哈……']);
      await era.printAndWait(['无论如何，已是午夜，是时候该回去了。']);
      await era.printAndWait([
        '看来犯迷糊的 ',
        kitaru.get_colored_name(),
        ' 不怎么记得路的样子，',
        kitaru.sex,
        '那随着迷路而愈发焦急的步伐让身为人类的 ',
        you.get_colored_name(),
        ' 有些跟不上。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的担当近乎发狂一般的撞开前面挡路的枝杈，浅绿色的浴衣在黑暗的森林中若隐若现，',
        you.get_colored_name(),
        ' 要跟丢了。',
      ]);
      era.printButton('「待兼福来！」', 1);
      era.printButton('「等一下！」', 2);
      await era.input();
      await era.printAndWait([
        '然而无论 ',
        you.get_colored_name(),
        ' 怎么喊，跑在前面的',
        kitaru.uma_sex_title,
        '却似没听到般继续往树林的深处奔去。',
      ]);
      await era.printAndWait([
        '声音在漆黑的林中回响，目光所及范围内，现在只剩下了 ',
        you.get_colored_name(),
        ' 一人。',
      ]);
      await era.printAndWait([
        '扶着一旁的树干，',
        you.get_colored_name(),
        ' 气喘吁吁的肺总算得以休息，但是……现在该怎么办？',
      ]);
      await era.printAndWait(['哗啦！']);
      await era.printAndWait([
        '有树叶被掀开的声音自身后传来，会是 ',
        kitaru.get_colored_name(),
        ' 吗？不过，听说这附近也有熊出没……担当不在身边的 ',
        you.get_colored_name(),
        '，是不是该躲一下比较好？',
      ]);
      await kitaru.say_as_unknown_and_wait('喂！');
      await kitaru.say_as_unknown_and_wait([
        you.get_colored_actual_name(),
        you.adult_sex_title,
        '！',
      ]);
      await kitaru.say_as_unknown_and_wait('在这里！');
      await era.printAndWait([
        '回头看去，笑意盈盈的 ',
        kitaru.get_colored_name(),
        ' 正站在 ',
        you.get_colored_name(),
        ' 的身后。',
      ]);
      await kitaru.say_and_wait('那么！为了防止你再次掉队。');
      await kitaru.say_and_wait('请握住我的手吧！');
      era.printButton('伸手', 1);
      era.printButton('当然是伸手了', 2);
      await era.input();
      era.drawLine({ content: '一段时间后' });
      await era.printAndWait('看样子是被带回到了大路上。');
      let direction = 0,
        temp;
      do {
        await era.printAndWait([
          you.get_colored_name(),
          ' 与 ',
          kitaru.get_colored_name(),
          ' 走着走着，眼前出现了一个分岔路口。',
        ]);
        await kitaru.say_and_wait('那么！走这边怎么样？');
        await era.printAndWait([
          you.get_colored_name(),
          ' 身旁的 ',
          kitaru.get_colored_name(),
          '，指向了左边的路口。',
        ]);
        era.printButton('走左边', 1);
        era.printButton('走右边', 2);
        temp = await era.input();
        direction += temp === 2;
      } while (temp === 2 && direction < 3);
      if (direction < 3) {
        await era.printAndWait([
          '树木变得稀疏，视野所及之处总算是变得明亮了起来，直到 ',
          you.get_colored_name(),
          ' 的眼前出现了一片废墟。',
        ]);
        await era.printAndWait([
          '爬满了绿蔓的鸟居，正立于这片残骸上，看样子是某个废弃了许久的神社。',
        ]);
        await kitaru.say_and_wait('啊啦啦，真的很好运呢！');
        await kitaru.say_and_wait('没想到这里还有如此特殊的能量之地。');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 牵着 ',
          you.get_colored_name(),
          ' 的手跨过了倒塌的拜殿屋顶。',
        ]);
        await kitaru.say_and_wait('唔！感觉灵力非常的充裕呢！');
        await kitaru.say_and_wait([
          '那么，',
          you.get_colored_actual_name(),
          you.adult_sex_title,
          '，有什么想要我占卜的吗？',
        ]);
        era.printButton('「该回去了吧？」', 1);
        era.printButton('「能问个问题吗？」', 2, {
          disabled: era.get('love:56') < 75,
        }); // 好感度解锁
        ret.push(await era.input());
        if (ret[0] === 1) {
          await kitaru.say_and_wait('这样吗？');
          await kitaru.say_and_wait('那就回去吧！');
          await era.printAndWait([
            '之后，',
            kitaru.get_colored_name(),
            ' 和 ',
            you.get_colored_name(),
            ' 回去了，看来 ',
            kitaru.get_colored_name(),
            ' 累的不行，躺下就呼呼大睡。',
          ]);
        } else {
          await kitaru.say_and_wait('当然啦，什么都可以！');
          await era.printAndWait([
            '面前的',
            kitaru.uma_sex_title,
            '，单论外表，样子的确和 ',
            you.get_colored_name(),
            ' 的担当一模一样，连笑的方式也没有差别。',
          ]);
          await era.printAndWait([
            '但是，从无声无息地出现在 ',
            you.get_colored_name(),
            ' 的背后，称呼的突然变化，到把 ',
            you.get_colored_name(),
            ' 引到这里，违和感数不胜数。',
          ]);
          era.printButton('「你是谁？」', 1);
          await era.input();
          kitaru.name = '待兼福来？';
          await kitaru.say_and_wait([
            '……啊哈哈。不愧是那孩子的 ',
            callname,
            '/引路人。',
          ]);
          await era.printAndWait([
            '以 ',
            kitaru.get_colored_name(),
            ' 的身姿出现的',
            kitaru.teen_sex_title,
            '，微微笑着。',
          ]);
          await era.printAndWait([
            '明明就站在 ',
            you.get_colored_name(),
            ' 的面前开口说话，但',
            kitaru.sex,
            '的答复却像是直接出现在 ',
            you.get_colored_name(),
            ' 的意识中一样。',
          ]);
          await kitaru.say_and_wait([
            '抱歉借用了自家巫女/你担当的身体，不过，自从',
            kitaru.sex,
            '找到了命定之人，就想抽空来聊聊呢。',
          ]);
          await kitaru.say_and_wait('嗯……你看起来倒是不怎么惊讶的样子');
          era.printButton('（毕竟我是待兼福来的训练员）', 1);
          era.printButton(
            `（这种事情出现在${kitaru.sex}身上，也不算离奇吧？）`,
            2,
          ); // 好感度解锁
          await era.input();
          await kitaru.say_and_wait('啊啦！');
          await kitaru.say_and_wait([
            '话虽如此，在',
            kitaru.sex,
            '',
            kitaru.elder_sibling_sex_title,
            '去世前，',
            kitaru.sex,
            '也并不热衷于占卜和咒术，以前啊，总是追着',
            kitaru.sex,
            '',
            kitaru.elder_sibling_sex_title,
            '的后背走，每次有什么事都叫',
            kitaru.sex,
            '。',
          ]);
          await kitaru.say_and_wait('很麻烦吧？');
          era.printButton('（点头）', 1);
          era.printButton('「的确，我也经常一有事就被那家伙叫来叫去」', 2);
          await era.input();
          await era.printAndWait([
            '注视着',
            kitaru.sex,
            '明明在看着 ',
            you.get_colored_name(),
            '，却又好像凝视着什么遥远地方的双瞳，',
            you.get_colored_name(),
            ' 做出了回答。',
          ]);
          if (teem_count >= 2) {
            await kitaru.say_and_wait([
              '帮助',
              kitaru.sex,
              '了却了菊花赏的约定，真的很厉害。',
            ]);
          } else {
            await kitaru.say_and_wait('第一位担当就能拿下菊花赏，真的很厉害。');
          }
          await kitaru.say_and_wait([
            '作为被',
            kitaru.sex,
            '信仰的神明大人，我倒觉得自己挺失败的，明明自己有个灵力如此出众的巫女。',
          ]);
          await kitaru.say_and_wait([
            '却没能在',
            kitaru.sex,
            '最需要的时候出现，也没能在',
            kitaru.sex,
            '最痛苦的时候开导',
            kitaru.sex,
            '，只能偶尔在',
            kitaru.sex,
            '的梦中出现，给',
            kitaru.sex,
            '一些提示的样子。',
          ]);
          await kitaru.say_and_wait('呜呜呜……还是信众太少了呀，。');
          await kitaru.say_and_wait([
            '不过，人多起来的话，我也没办法一直关注着',
            kitaru.sex,
            '吧，是好事也不一定？',
          ]);
          await era.printAndWait([
            '凭依在 ',
            you.get_colored_name(),
            ' 担当身上的神明，说到这开始下意识地揉着自己的头发，该说是和 ',
            kitaru.get_colored_name(),
            ' 一个模子刻出来的吗？',
          ]);
          await kitaru.say_and_wait(you.actual_name_with_title);
          era.printButton('「在？」', 1);
          era.printButton('「什么事？」', 2);
          await era.input();
          await kitaru.say_and_wait([
            you.get_colored_name(),
            ' 是',
            kitaru.sex,
            '的 ',
            callname,
            ' 真是太好了！',
          ]);
          await era.printAndWait([
            '被自家神灵操控着身体的 ',
            kitaru.get_colored_name(),
            ' 眨了几下眼睛，之后脱力般地倒入了 ',
            you.get_colored_name(),
            ' 的怀里。',
          ]);
          await typing(
            '这孩子就拜托你了，' + kitaru.sex + '的命中注定之人',
            kitaru.color,
          );
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的身体微微发热。',
          ]);
          kitaru.name = void 0;
        }
      } else {
        await era.printAndWait([
          '兜兜转转，总算是走出来了，远处宿舍楼的灯光依稀可见……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_37: (() => {
    const title = '每个人的天命';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' 看见自己橘色头发的担当轻抚着大理石墓碑的表面。',
      ]);
      await era.printAndWait([
        '和菊花赏前那次一样，在低声轻语了一阵后，',
        kitaru.get_colored_name(),
        ' 转过身来冲 ',
        you.get_colored_name(),
        ' 点了点头。',
      ]);
      era.printButton('「该回去了吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('……嗯。');
      await era.printAndWait([
        '即使走出了墓园，',
        kitaru.get_colored_name(),
        ' 也没恢复那个往常欢快的样子。',
      ]);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '拿下菊花赏，走出了',
        kitaru.elder_sibling_sex_title,
        '的阴影，还有和训练员在一起的日子。',
      ]);
      await kitaru.say_and_wait('这三年对我来说简直就像是梦一样。');
      await era.printAndWait([
        '说完这番话的',
        kitaru.teen_sex_title,
        '再次陷入了沉默，',
        you.get_colored_name(),
        ' 们二人就这样走在返程的路上，看着道路两侧如 ',
        kitaru.get_colored_name(),
        ' 发色般的枫叶不停落下。',
      ]);
      await era.printAndWait([
        '直到 ',
        you.get_colored_name(),
        ' 察觉到',
        kitaru.sex,
        '拉了拉 ',
        you.get_colored_name(),
        ' 的衣袖。',
      ]);
      await kitaru.say_and_wait('对了！');
      await kitaru.say_and_wait([callname, '！之前提到的自己今后的目标！']);
      await kitaru.say_and_wait(
        '关于怎么获得自己今后最强最大的大吉级幸福，我已经完全想好了！',
      );
      era.printButton('「是什么呢？」', 1);
      era.printButton('「能告诉我吗？」', 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait('当然没问题！');
      }
      await kitaru.say_and_wait('那就是——继续这样追逐着运势跑下去！');
      await kitaru.say_and_wait('不过可不是和之前一样只是一味的怨天尤人！');
      await kitaru.say_and_wait('而是无论运势无论如何都会去面对的样子！');
      await kitaru.say_and_wait('该说的话，就是享受命运为我准备的每一道菜吗？');
      era.printButton('「说出了很帅的话呢！」', 1);
      era.printButton('「听起来很帅呢！」', 2);
      await era.input();
      await kitaru.say_and_wait('欸！');
      await kitaru.say_and_wait('正是如此！');
      await era.printAndWait([
        '到了兴奋之处的 ',
        kitaru.get_colored_name(),
        ' 索性跑了起来，为素白色的冬日染上了一丝活力。',
      ]);
      if (era.get('love:56') >= 75) {
        await era.printAndWait([
          '似乎是突然想到了什么，眼看着就要跑出视线的 ',
          kitaru.get_colored_name(),
          ' 再次冲了回来，拉住了 ',
          you.get_colored_name(),
          ' 的手。',
        ]);
        await kitaru.say_and_wait(['对了！', callname, '！']);
        await kitaru.say_and_wait('你也要呆着我的身边才行啊！');
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 蹦蹦跳跳的跑在了 ',
        you.get_colored_name(),
        ' 的身前，笑容再次回到了',
        kitaru.sex,
        '的脸上。',
      ]);
      await era.printAndWait(
        '明亮橙发在秋日空中翻飞的落叶中若影若现，闪耀着金色的光芒。',
      );
      await era.printAndWait([
        '有马纪念就在眼前，',
        kitaru.get_colored_name(),
        ' 也在这个时候找到了属于自己的道路。',
      ]);
      await era.printAndWait([
        '相信无论接下来的签筒中会有什么样的结果，',
        kitaru.sex,
        '都能坦然接受吧？',
      ]);
      if (era.get('talent:0:自信程度') === 1) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 不再 [自卑] 了！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  cl_before_arim_kin_s: (() => {
    const title = '摘下胜利之星';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '距离有马纪念只剩下几天，不过在那之前，率先到来的是同样是一年一度的圣诞节。',
      );
      await era.printAndWait(
        '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
      );
      await era.printAndWait([
        '还在研究着有马纪念战术的 ',
        you.get_colored_name(),
        ' 听见窗户传来声响。',
      ]);

      await kitaru.say_and_wait('嘿！');
      await era.printAndWait([
        '循着声音的方向看了过去。',
        you.get_colored_name(),
        ' 那令人不省心的担当正背着一个大布袋，正尝试通过窗户挤进屋内。',
      ]);
      await era.printAndWait([
        '那包不知道是什么的东西突然被狭窄的窗户卡住，直到在',
        kitaru.uma_sex_title,
        '的怪力下逐渐变形。',
      ]);
      await kitaru.say_and_wait('哎呀！');
      await era.printAndWait(
        '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
      );
      await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
      await kitaru.say_and_wait('当当！待兼圣诞来！');
      await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
      era.printButton('「没事吧？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！没事的！');
      await kitaru.say_and_wait([
        '哦，对了对了，有个东西要给 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '在洒在地上的物品中一阵翻找后，',
        kitaru.get_colored_name(),
        ' 拿起了一个包装意外精美的盒子。',
      ]);
      await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
      await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
      await era.printAndWait(
        '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
      );
      await kitaru.say_and_wait('欸！怎么会！');
      await kitaru.say_and_wait([
        '呼……如果这样的话，就只能麻烦 ',
        callname,
        ' 陪我出门一趟了。',
      ]);
      era.drawLine({ content: '特雷森校园 天台' });
      await era.printAndWait([
        '来到了和 ',
        kitaru.get_colored_name(),
        ' 常去的天台，冬季的寒风吹着 ',
        you.get_colored_name(),
        ' 有些发抖，不过 ',
        kitaru.get_colored_name(),
        ' 却是一点都不在意。',
      ]);
      await kitaru.say_and_wait([
        '好了！',
        callname,
        '，请把手中的圣诞树对着天空举起来吧！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
      ]);
      await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
      await kitaru.say_and_wait('好浪漫喔！');
      era.printButton('「比较想要实体的星星。」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！天上的星星也不行吗？');
      await era.printAndWait([
        '在听到这句话的同时，橘发的',
        kitaru.teen_sex_title,
        '顿时低下了头。',
      ]);
      era.printButton('「用有马纪念的胜利之星来装饰吧！」', 1);
      await era.input();
      await kitaru.say_and_wait('喔！有马纪念！');
      await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
      era.printButton('「那就这么说定了？」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！……是，是的……我什么都答应。！');
      await kitaru.say_and_wait([
        '那个，今天的 ',
        callname,
        ' 真的好有魄力啊！',
      ]);
      await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
      ]);
      await era.printAndWait([
        '不过眼看着有马纪念就要到了，',
        you.get_colored_name(),
        ' 还是压下了自己逐渐膨胀的欲望。',
      ]);
      await era.printAndWait([
        '还没有星星可以装在圣诞树的顶端，和 ',
        kitaru.get_colored_name(),
        ' 一起去拿下最后的星星吧。',
      ]);
      await era.printAndWait('要是有马纪念之后再来庆祝圣诞节或许会比较好吧。');
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '迎接有马纪念';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '少有的陪着 ',
        kitaru.get_colored_name(),
        ' 一起走到了通向跑道的地下通道内。',
      ]);
      await era.printAndWait([
        '出口如同被选中的人才能通过的怪物之口，而每当',
        kitaru.uma_sex_title,
        '被出口的阳光所吞噬时。',
      ]);
      await era.printAndWait(
        '粉丝们的声援就会在远处响起，就像吃到美味佳肴后满意地咆哮的怪物的声音一样。',
      );
      await era.printAndWait(
        '观众们的欢呼声叠加在一起，连地下通道的墙壁都发生了震动。',
      );
      await era.printAndWait([
        '直到 ',
        you.get_colored_name(),
        ' 看见走在前方的 ',
        kitaru.get_colored_name(),
        ' 如从梦中被惊醒一般的停滞了一下。',
      ]);
      era.printButton('「还好吗？」', 1);
      await era.input();
      await kitaru.say_and_wait('唔！');
      await kitaru.say_and_wait('……真的来到了有马纪念啊！');
      await kitaru.say_and_wait('一路上给不少人添麻烦了……');
      era.printButton('「那为了他们，拿下今天的胜利吧！」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！');
      await era.printAndWait([
        '大家都已经入场了，地下通道内只剩下了 ',
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait('对了！');
      await kitaru.say_and_wait('那个……想要运气的支援呢！');
      if (era.get('love:56') < 50) {
        await era.printAndWait([
          '带着炽热体温的橙发',
          kitaru.uma_sex_title,
          '扑进了 ',
          you.get_colored_name(),
          ' 的胸膛，耳朵抽动着拍了几下 ',
          you.get_colored_name(),
          ' 的脸。',
        ]);
      } else {
        await era.printAndWait([
          '凝视了片刻后，',
          you.get_colored_name(),
          ' 的手还是绕过了 ',
          kitaru.get_colored_name(),
          ' 的侧颈，抚着',
          kitaru.sex,
          '的后脑，低头吻住了',
          kitaru.sex,
          '的嘴。',
        ]);
        await era.printAndWait(
          '在明知可能会被其他选手看见的场合交换起唾液来。',
        );
        era.println();
        await you.say_as_passer_by_and_wait(
          `路人${kitaru.uma_sex_title}`,
          '真是肉麻……',
        );
        era.println();
      }
      await kitaru.say_and_wait('呼……这下感觉眼里都能流出神签来呢！');
      await era.printAndWait([
        '如此近的距离，',
        you.get_colored_name(),
        ' 发现',
        kitaru.sex,
        '双瞳中的星星变得更加的明亮了。',
      ]);
      await kitaru.say_and_wait(['那我出发了，', callname, '！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' 目送着 ',
        kitaru.get_colored_name(),
        ' 穿过地下马道，越过怪物的嘴，被天空降下的白色光芒所笼罩。',
      ]);
      await era.printAndWait('在轰轰烈烈喧嚣声的伴随下走进了闸门。');
      era.drawLine({ content: '中山赛马场 马闸内' });
      await kitaru.print_and_wait(
        '之前，我一直以为，只要幸运站在我这一边，我就能走到这一步！',
      );
      await kitaru.print_and_wait(
        '不过，单凭幸运是无法来到这里的！是许许多多的缘分指引我前来的！',
      );
      await kitaru.print_and_wait('把自己投射在我身上，为我加油的粉丝们！');
      await kitaru.print_and_wait('同期的伙伴！');
      await kitaru.print_and_wait([
        '过世的',
        kitaru.elder_sibling_sex_title,
        '！',
      ]);
      await kitaru.print_and_wait(['还有一直拼命培育我的 ', callname, '！']);
      await kitaru.print_and_wait('我今天不会向神明祈祷。');
      await kitaru.print_and_wait('今天——');
      await kitaru.print_and_wait('是由我成为神明——成为白兴大人！');
      await kitaru.print_and_wait('我要成为带给大家幸福的福娘！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '福来今至';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '从前，有一位赛',
        kitaru.uma_sex_title,
        '，叫 ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await kitaru.print_and_wait([
        kitaru.sex,
        '一点才华都没有，是个贪心无比，只想靠幸运往上爬的',
        kitaru.child_sex_title,
        '子。',
      ]);
      await kitaru.print_and_wait([
        '不过，这样的',
        kitaru.sex,
        '却在有马纪念称霸了！',
      ]);
      await kitaru.print_and_wait(['没错……', kitaru.sex, '付出了一切！']);
      await kitaru.print_and_wait([
        '那个',
        kitaru.child_sex_title,
        '变成了神明，',
        kitaru.sex,
        '跳脱马的境界，进入了神域，然后变成了一道白光……',
      ]);
      era.drawLine({ content: '中山赛马场 地下通道' });
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 在赛后如此对 ',
        you.get_colored_name(),
        ' 布道着。',
      ]);
      await kitaru.say_and_wait([callname, '！我们成功了喔！']);
      await kitaru.say_and_wait('你觉得幸福吗？');
      await kitaru.say_and_wait('你很庆幸自己负责的担当是我的吧？');
      era.printButton('「那是当然了！」', 1);
      await era.input();
      await kitaru.say_and_wait('呜啊！我就想听这句话！');
      await you.say_and_wait('唔！？');
      await era.printAndWait([
        '激动不已的 ',
        kitaru.get_colored_name(),
        ' 径直扑进了 ',
        you.get_colored_name(),
        ' 的怀中，毫无顾忌的将身上的汗水洒在了 ',
        you.get_colored_name(),
        ' 的衬衣上。',
      ]);
      if (kitaru.sex_code !== 1) {
        await era.printAndWait([
          kitaru.uma_sex_title,
          '比赛后湿热的甜腻体味被 ',
          you.get_colored_name(),
          ' 吸入，而胸前的那对乳肉被挤压的柔软感觉由于运动后的体温更是明显。',
        ]);
      }
      await era.printAndWait([
        '过于的亲密的动作以至于受到了其他选手和训练员的侧目，',
        you.get_colored_name(),
        ' 只得拍了拍 ',
        kitaru.get_colored_name(),
        ' 的背，示意',
        kitaru.sex,
        '赶紧停下来。',
      ]);
      await kitaru.say_and_wait('好，就以这个气势去接受胜利者的访谈吧！');
      era.drawLine({ content: '有马纪念后的采访现场' });
      await kitaru.say_and_wait('今天！我必须在这里说这句话才行！');
      await kitaru.say_and_wait('在菊花的舞台之后！福气也来到中山了！');
      await kitaru.say_and_wait('只要衷心希望，福气就会到来！');
      await kitaru.say_and_wait('只要心怀希望，幸运就一定会到来！');
      await kitaru.say_and_wait('那么！祝各位有个好年！');
      await era.printAndWait([
        '在无数聚光灯和镜头前，说出这番话的 ',
        kitaru.get_colored_name(),
        ' 以',
        kitaru.sex,
        '标志性双手伸向天空的动作作为收尾，将幸福传递到了所有将愿望寄托在',
        kitaru.sex,
        '身上的粉丝们。',
      ]);
      await era.printAndWait([
        '而站在',
        kitaru.sex,
        '身后一同接受采访的 ',
        you.get_colored_name(),
        '，之后也与为众人祈愿的 ',
        kitaru.get_colored_name(),
        ' 一起登上了许多家媒体的报纸。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_after_arim_kin_s: (() => {
    const title = '名叫待兼福来的星星';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {boolean} accept_sex 是否接受性爱
     */
    const f = async (kitaru, you, callname, accept_sex) => {
      const ret = [];
      await era.printAndWait([
        '有马纪念结束了，不过在和 ',
        kitaru.get_colored_name(),
        ' 的契约结束之前，率先到来的是同样是一年一度的圣诞节。',
      ]);
      await era.printAndWait(
        '圣诞节的气氛早就在整个特雷森中蔓延开来，学生们挂上的装饰随处可见。',
      );
      await era.printAndWait([
        '还在办公室忙碌着年终报告的 ',
        you.get_colored_name(),
        ' 听见窗户传来声响。',
      ]);

      await kitaru.say_and_wait('嘿！');
      await era.printAndWait([
        '循着声音的方向看了过去。',
        you.get_colored_name(),
        ' 那令人不省心的担当正背着一个大布袋，正尝试通过窗户挤进屋内。',
      ]);
      await era.printAndWait([
        '那包不知道是什么的东西突然被狭窄的窗户卡住，直到在',
        kitaru.uma_sex_title,
        '的怪力下逐渐变形。',
      ]);
      await kitaru.say_and_wait('哎呀！');
      await era.printAndWait(
        '随着破裂的撕拉声，拐杖糖，灯带，姜饼人，礼物盒，各种各样圣诞节的象征物从布袋中涌了出来。',
      );
      await era.printAndWait('本来平淡无奇的办公室转瞬充满了圣诞节的气息。');
      await kitaru.say_and_wait('当当！待兼圣诞来！');
      await kitaru.say_and_wait([callname, ' 有没有觉得很惊喜呢？']);
      era.printButton('「没事吧？」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！没事的！');
      await kitaru.say_and_wait([
        '哦，对了对了，有个东西要给 ',
        callname,
        ' 呢！',
      ]);
      await era.printAndWait([
        '在洒在地上的物品中一阵翻找后，',
        kitaru.get_colored_name(),
        ' 拿起了一个包装意外精美的盒子。',
      ]);
      await kitaru.say_and_wait('锵锵！——盒子里装的是，树龄千年的圣诞树！');
      await kitaru.say_and_wait('虽然不过是迷你模型而已了。');
      await era.printAndWait(
        '可惜，在打开后，手工制成的圣诞树已经在刚才的混乱中断成了两截，就连顶端的星星也落了下来。',
      );
      await kitaru.say_and_wait('欸！怎么会！');
      await kitaru.say_and_wait([
        '呼……如果这样的话，就只能麻烦 ',
        callname,
        ' 陪我出门一趟了。',
      ]);
      era.drawLine({ content: '特雷森校园 天台' });
      await era.printAndWait([
        '来到了和 ',
        kitaru.get_colored_name(),
        ' 常去的天台，冬季的寒风吹着 ',
        you.get_colored_name(),
        ' 有些发抖，不过 ',
        kitaru.get_colored_name(),
        ' 却是一点都不在意。',
      ]);
      await kitaru.say_and_wait([
        '好了！',
        callname,
        '，请把手中的圣诞树对着天空举起来吧！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '照做了，今夜星空如茵，繁星点缀的夜幕从圣诞树的枝桠间透入。',
      ]);
      await kitaru.say_and_wait('你看！这样是不是就像是装满了天上的星星呢！');
      await kitaru.say_and_wait('好浪漫喔！');
      if (
        era.get('love:56') >= 75 &&
        kitaru.sex_code !== 1 &&
        you.sex_code !== 0
      ) {
        era.printButton('「比较想要实体的星星。」', 1);
        await era.input();
        await kitaru.say_and_wait('欸！天上的星星也不行吗？');
        await era.printAndWait([
          '在听到这句话的同时，橘发的',
          kitaru.teen_sex_title,
          '顿时低下了头。',
        ]);
        era.printButton('「比如……名叫待兼福来的星星就不错呢！」', 1);
        await era.input();
        await kitaru.say_and_wait('欸！我吗？');
        await era.printAndWait([
          '被叫到名字',
          kitaru.teen_sex_title,
          '转过头来看着 ',
          you.get_colored_name(),
          '，十字星状的瞳孔中闪烁着北极星般的明亮光芒。',
        ]);
        await kitaru.say_and_wait('呜哇！原来还有这招，我甘拜下风！');
        await kitaru.say_and_wait([
          '那个，今天的 ',
          callname,
          ' 真的好有魄力啊！',
        ]);
        await kitaru.say_and_wait('该说让人看着就心跳加速吗……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的脸上泛起了可爱的红晕，双眼眸光流转，看起来就想让人好好疼爱一番。',
        ]);
        await era.printAndWait([
          '下意识的伸出手，只是搭在 ',
          kitaru.get_colored_name(),
          ' 的身上，对',
          kitaru.sex,
          '的身体早就知根知底的 ',
          you.get_colored_name(),
          ' 便发现了',
          kitaru.sex,
          '即使是对',
          kitaru.uma_sex_title,
          '而言也有些略高的体温。',
        ]);
        await era.printAndWait('先是隔着校服抚摸着肩膀。');
        await kitaru.say_and_wait('……欸。');
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait([
          '顺势滑下后轻捏两下乳房，',
          kitaru.get_colored_name(),
          ' 便配合的发出了一声轻微的呻吟。',
        ]);
        await kitaru.say_and_wait('呜……');
        await kitaru.say_and_wait('那里很敏感的……', true);
        await era.printAndWait([
          '继续往下，指腹划过腰间，明明隔着冬季的厚重校服，',
          kitaru.get_colored_name(),
          ' 却像是被电到了般颤抖起来。',
        ]);
        await kitaru.say_and_wait('……哈。');
        await kitaru.say_and_wait('好久没有被命定之人这样触摸了啊……', true);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' 的吐息变得更加湿润而荡漾。',
        ]);
        await era.printAndWait([
          '眼前，清秀的面颊完全被赤色红潮浸染，双眼眸光流转、泪水盈盈的 ',
          kitaru.get_colored_name(),
          ' 对 ',
          you.get_colored_name(),
          ' 投来了期待的目光。',
        ]);
        await kitaru.say_and_wait('好想要……', true);
        era.printButton('一言不发的回去', 1);
        era.printButton('抱起待兼福来', 2, {
          disabled: kitaru.sex_code === 1 || you.sex_code === 0 || !accept_sex,
        });
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            '没有理会不知道在期待着什么的 ',
            kitaru.get_colored_name(),
            '，',
            you.get_colored_name(),
            ' 转身离开了天台。',
          ]);
        } else {
          await era.printAndWait([
            '为了应对有马纪念，',
            kitaru.get_colored_name(),
            ' 与 ',
            you.get_colored_name(),
            ' 早就禁欲了许久。',
          ]);
          await era.printAndWait(
            '而如果用一场酣畅淋漓的性爱来作为奖励的话，或许是个不错的选择。',
          );
          await kitaru.say_and_wait('欸啊！');
          await era.printAndWait([
            '用公主抱的姿势把双腿发软的 ',
            kitaru.get_colored_name(),
            ' 抱在怀中，',
            kitaru.get_colored_name(),
            ' 纤细的藕臂搂住了 ',
            you.get_colored_name(),
            ' 的脖子。',
          ]);
          await kitaru.say_and_wait([callname, ' 的气味……'], true);
          await kitaru.say_and_wait('好热……', true);
          await era.printAndWait([
            '不过只是走到天台入口的路程，',
            kitaru.get_colored_name(),
            ' 便按捺不住的把脸埋在 ',
            you.get_colored_name(),
            ' 的胸口，交叠在一起的双腿越来越过分的摩擦着，直到裙下的糟糕气味传入 ',
            you.get_colored_name(),
            ' 的鼻腔。',
          ]);
          era.printButton('抱起待兼福来', 1);
          await era.input();
          await kitaru.say_and_wait('嗯……', true);
          await era.printAndWait([
            '明明没有开口，不过 ',
            you.get_colored_name(),
            ' 还是看出了怀中担当的意愿。',
          ]);
          await era.printAndWait('关上了通向天台的大门，将寒风阻拦在外。');
          await era.printAndWait('楼梯口的空间并不算大。');
          await era.printAndWait([
            '让怀中的 ',
            kitaru.get_colored_name(),
            ' 背对着 ',
            you.get_colored_name(),
            ' 扶着内侧的水泥墙壁，把',
            kitaru.sex,
            '的校服裙子拉起，露出内裤。',
          ]);
          await kitaru.say_and_wait(
            ['唔，这个姿势，完全看不见 ', callname, '……'],
            true,
          );
          await era.printAndWait(
            '那片布料湿的仿佛能滴下水来，已经快在在双腿不断的交替摩擦间拧成了一股线。',
          );
          era.printButton('分开双腿', 1);
          await era.input();
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 听话的执行了的命令，双腿大大的分开，在伸手拉下内裤的时候，小穴与分离的布料拉起粘稠的丝线。',
          ]);
          await era.printAndWait(
            '而后手指伸入，柔软的嫩肉无法对其形成一分一毫的抵抗。',
          );
          await kitaru.say_and_wait('哈……哈啊');
          await era.printAndWait([
            '开始还小心翼翼的，直到在 ',
            kitaru.get_colored_name(),
            ' 愈发过分的呻吟声下，让剩下的半根手指毫不怜惜的一起进入。',
          ]);
          await kitaru.say_and_wait('唔呜？！');
          await era.printAndWait([
            '剥开包皮，玩弄起肿胀的阴蒂，莫大的快感从 ',
            kitaru.get_colored_name(),
            ' 的尾椎末侧升起，电流沿着脊背流向全身',
          ]);
          await kitaru.say_and_wait('咦呀呀呀呀呀呀！');
          await era.printAndWait(
            '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
          );
          await era.printAndWait([
            '被掀起的冬季校服短裙半掩着的雪臀，在 ',
            kitaru.get_colored_name(),
            ' 的痉挛下不断的颤动着。',
          ]);
          era.printButton('伸手', 1);
          await era.input();
          await kitaru.say_and_wait('咿呀！');
          await era.printAndWait([
            '首先是揉搓，而后，在 ',
            kitaru.get_colored_name(),
            ' 愈发可爱的呻吟声下，变成了对待无机物般下手不知轻重的揉捏，肆意地变幻出淫荡的形状。',
          ]);
          await era.printAndWait(
            '象征着高潮的水流也随之涌出，洒在天台入口处的水泥地上。',
          );
          await kitaru.say_and_wait([callname, '……']);
          await era.printAndWait([
            '在 ',
            kitaru.get_colored_name(),
            ' 的催促下，是时候进入正戏了。',
          ]);
          await era.printAndWait('脱下裤子，露出了已经勃起的阴茎。');
          await kitaru.say_and_wait('嗯……');
          await era.printAndWait([
            '似乎是察觉到了逐渐逼近的火热，饥渴的小穴一开一合的对 ',
            you.get_colored_name(),
            ' 的阴茎发出了邀请。',
          ]);
          await era.printAndWait('然后，粗大的肉棒长驱直入。');
          await era.printAndWait('小穴内的爱液和穴内的空气一起被无情的挤出。');
          await era.printAndWait([
            '属于成年男性级别的肉棒霸占了穴内所有的空间，在',
            kitaru.teen_sex_title,
            '的私密地带横行霸道。',
          ]);
          await kitaru.say_and_wait(
            ['小穴一缩一缩的，包裹着 ', callname, ' 的肉棒。'],
            true,
          );
          await era.printAndWait('砰！');
          await era.printAndWait([
            '沉闷的撞击声从 ',
            kitaru.get_colored_name(),
            ' 的小穴深部传来',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 本想大声的叫出来，却又在 ',
            you.get_colored_name(),
            ' 的示意下，把声音压了下去。',
          ]);
          await kitaru.say_and_wait(
            '连自己小穴『啧啧』的淫靡吮吸声都能听见。',
            true,
          );
          await era.printAndWait([
            '尽管这么想着，',
            kitaru.get_colored_name(),
            ' 双腿还是愈发的分开，让站立后入的体位更加的标准。',
          ]);
          await era.printAndWait(
            '环状的粉红穴肉在肉棒的冲击下，如同被采蜜的花朵般随风抽搐荡漾着。',
          );
          await kitaru.say_and_wait('这么激烈的话，要，要去了啊～～～', true);
          await kitaru.say_and_wait('去了去了啊！！！');
          await era.printAndWait([
            '将脱力的爱人翻了一个面，水泥墙壁的冰凉刺激让 ',
            kitaru.get_colored_name(),
            ' 失神的星星瞳重新对焦。',
          ]);
          await era.printAndWait([
            '这次是对面立位，',
            you.get_colored_name(),
            ' 得以欣赏着平日里元气的',
            kitaru.uma_sex_title,
            '在性爱中的表情。',
          ]);
          await kitaru.say_and_wait('砰～砰～');
          await era.printAndWait('淫靡的交合声回响在天台楼梯口的狭小空间内。');
          await kitaru.say_and_wait('太激烈！太激烈了！', true);
          await kitaru.say_and_wait('要，要去了啊～');
          await era.printAndWait('压抑着的娇媚声音终于泄了出来。');
          await era.printAndWait([
            '话是这么说，可橙色的尾巴却如同有自我意识般缠在了 ',
            you.get_colored_name(),
            ' 的腿，配合着纠缠地越发紧密的小穴，背叛般的告诉了主人此刻接近高潮的状态。',
          ]);
          await kitaru.say_and_wait('要去了啊！！！');
          await era.printAndWait('稍稍前倾，龟头径直抵着子宫口倾吐起精液。');
          await era.printAndWait('从小穴和肉棒交合处漏出了点点白浊。');
          era.drawLine();
          await kitaru.print_and_wait('之后又持续了多久呢？');
          await kitaru.print_and_wait([
            '不过我第二天醒来的时候，发现自己睡在了 ',
            callname,
            ' 家里的床上。',
          ]);
        }
      } else {
        await era.printAndWait([
          '庆祝一阵后，和 ',
          kitaru.get_colored_name(),
          ' 回去了。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = 'Farewell Matikane……';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} doto 名将怒涛
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     * @param {PrintedSpan} call_58 待兼福来对名将怒涛的称呼
     */
    const f = async (kitaru, doto, you, callname, call_58) => {
      await era.printAndWait([
        '也许是最后一次，以 ',
        kitaru.get_colored_name(),
        ' 的训练员这一身份陪',
        kitaru.sex,
        '完成这一次的初诣了。',
      ]);
      await era.printAndWait([
        '怀着这样的心情，',
        you.get_colored_name(),
        ' 再次来到这座偏远神社的鸟居前。',
      ]);
      era.printButton('迈入鸟居', 1);

      await era.input();
      await era.printAndWait(
        '奇怪，并没有以前那种宛如跌落进另一个世界中的错位感。',
      );
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '不过，没等 ',
        you.get_colored_name(),
        ' 细想多久，早早等在参拜道上的 ',
        kitaru.get_colored_name(),
        ' 便把 ',
        you.get_colored_name(),
        ' 拉进了正在准备迎接新年参拜客的神社内。',
      ]);
      era.drawLine();
      await kitaru.say_and_wait('对！对！再往左边挂一点。');
      await kitaru.say_and_wait('啊，哦，欸欸欸！！！');
      await kitaru.say_and_wait(['啊！小心啊，', call_58, '！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 正有条不紊的指挥着包括 ',
        doto.get_colored_name(),
        ' 在内几位邀请来帮忙的同学装点着新年的神社。',
      ]);
      await era.printAndWait(
        '一旁而事先折好的工艺品和等待挂起的灯笼如小山般强调着接下来的工作量会有多大。',
      );
      era.printButton('「能独当一面了呢！」', 1);
      await era.input();
      await era.printAndWait([
        '出言夸赞了一下自己的担当，让站在一旁调度众人的',
        kitaru.teen_sex_title,
        '双耳微不可察的摆动了一下。',
      ]);
      await kitaru.say_and_wait('……嗯。');
      await era.printAndWait([
        '比划了一下高度，',
        kitaru.get_colored_name(),
        ' 示意负责纸灯笼的茶色',
        kitaru.uma_sex_title,
        '继续把挂绳拉高一些。',
      ]);
      await kitaru.say_and_wait([
        '记得小时候和',
        kitaru.elder_sibling_sex_title,
        '的初诣的时候，那才是人山人海呢！',
      ]);
      await kitaru.say_and_wait(
        '为此也一直有在准备就是了，这回应该能够用上吧？',
      );
      await era.printAndWait([
        '在看着茶色头发的',
        kitaru.uma_sex_title,
        '成功把悬于道路上的纸灯笼串起之后，有着温暖发色的',
        kitaru.uma_sex_title,
        '转头等待起 ',
        you.get_colored_name(),
        ' 的答复。',
      ]);
      era.printButton('点头', 1);
      era.printButton('「我相信会的。」', 2);
      await era.input();
      await era.printAndWait([
        '的确如此，在有马纪念上 ',
        kitaru.get_colored_name(),
        ' 的漂亮表现与发言惊艳了全国的观众。',
      ]);
      await era.printAndWait([
        '社交媒体上早就有不少人的发言想要借着新年的参拜来让这位才在有马纪念中取得优胜的',
        kitaru.teen_sex_title,
        '为自己带来好运。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 背后的故事也被一些好事的媒体挖了出来，除了对如此乐天的',
        kitaru.teen_sex_title,
        '居然有着如此沉重过往而感到的反差，更多则是因此而生的感动。',
      ]);
      await you.say_and_wait(['背负命运奔跑的赛', kitaru.uma_sex_title]);
      await era.printAndWait([
        '想到这里，下意识的念出了最近几张赛',
        kitaru.uma_sex_title,
        '期刊上为 ',
        kitaru.get_colored_name(),
        ' 冠上的名号。',
      ]);
      await kitaru.say_and_wait('欸！！！');
      await kitaru.say_and_wait('有些夸张了！');
      await kitaru.say_and_wait([
        '还有什么',
        kitaru.teen_sex_title,
        '和',
        kitaru.sex,
        '的命定之人之类的花边新闻……',
      ]);
      await era.printAndWait([
        '不知是因为 ',
        you.get_colored_name(),
        ' 提及的那个过于浮夸的称号，还是后面随之想到的一些半真半假的绯闻，原本气定神闲指挥着众人的 ',
        kitaru.get_colored_name(),
        ' 脸上多了几分绯红。',
      ]);
      await kitaru.say_and_wait('不过，命运啊……我真是被困扰了好久呢！');
      await kitaru.say_and_wait('而且我想……我也已经准备好了……');
      era.printButton('「准备好什么了？」', 1);

      await era.input();
      await kitaru.say_and_wait([
        '那个，',
        callname,
        '，明天陪我再去一躺市郊的墓地吧。',
      ]);
      await era.printAndWait([
        '暂时按下了自己好奇的心情，',
        you.get_colored_name(),
        ' 开始在 ',
        kitaru.get_colored_name(),
        ' 的指挥下加入了为新年的神社做起准备的队伍中。',
      ]);
      era.drawLine({ content: '次日 市郊墓园' });
      await era.printAndWait([
        '同样的柏树下，墓碑旁，名叫',
        you.get_colored_actual_name(),
        '的训练员身旁站着一位橙色',
        kitaru.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '前一天晚上的祓禊仪式，果然如 ',
        you.get_colored_name(),
        ' 预料般的那样，前来的参拜客举袖为云。',
      ]);
      await era.printAndWait([
        '光是焚烧那些客人们带来的御守，熊手等开运道具，便让 ',
        kitaru.get_colored_name(),
        '，还有',
        kitaru.sex,
        '请来的临时巫女忙到了半夜。',
      ]);
      await era.printAndWait([
        '记得自己的承诺，',
        kitaru.get_colored_name(),
        ' 还是起了一个大早，稀疏纤细的尘埃在冬日的阳光中漂浮游动，大理石制的墓碑如玻璃般闪耀。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '注意到',
        kitaru.teen_sex_title,
        '只是呆立在墓碑前，一言不发。',
      ]);
      await you.say_and_wait('需要留你一个人静静吗？');
      await era.printAndWait([
        you.get_colored_name(),
        '再次问出了这个问题，一如第一次被 ',
        kitaru.get_colored_name(),
        ' 带到此处一样。',
      ]);
      await kitaru.say_and_wait([
        '不，不用了，',
        you.actual_name[0],
        '……',
        you.get_colored_actual_name(),
        '，陪我一会儿吧……',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 发出了哽咽，并非平常那种若无其事的淡然。',
      ]);
      await kitaru.say_and_wait('……还记得我昨天说的准备好了吗。');
      await kitaru.say_and_wait([
        '笑容，奔跑的执念，最开始的跑步技巧，运营神社的知识，',
        kitaru.elder_sibling_sex_title,
        '教给我了许多。',
      ]);
      await kitaru.say_and_wait([
        '倘若灵魂存在的话，把我自己的躯壳献给',
        kitaru.elder_sibling_sex_title,
        '也不是什么不可以的事情！',
      ]);
      await era.printAndWait([
        '几乎是低吼着说出这番话的 ',
        kitaru.get_colored_name(),
        '，望着',
        kitaru.elder_sibling_sex_title,
        '的黑白照片，三年来变得成熟了许多的侧脸几乎和照片中的',
        kitaru.uma_sex_title,
        '无异。',
      ]);
      await kitaru.say_and_wait([
        '但是，',
        kitaru.elder_sibling_sex_title,
        '肯定不会愿意，以及……',
        callname,
        ' 也不会愿意的吧。',
      ]);
      await kitaru.say_and_wait([
        '……准备好，让',
        kitaru.elder_sibling_sex_title,
        '离开了！',
      ]);
      await kitaru.say_and_wait(
        '但这并不是遗忘，而是告别……我，我准备好跑出属于自己的命运了！',
      );
      await kitaru.say_and_wait([
        '我站在这里，',
        callname,
        ' 站在身旁看着我，就像是阳光洒在我的脸上……',
      ]);
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        '，我现在很幸福呢……',
      ]);
      await era.printAndWait([
        '阵风拂来，树叶的沙沙响声悠扬空灵，如同 ',
        kitaru.get_colored_name(),
        ' 昨晚奏响的神乐……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_143_1: (() => {
    const title = '了局';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '和 ',
        kitaru.get_colored_name(),
        ' 充满了怪力乱神的三年总算是要结束了，也该把物色新担当的计划提上日程了。',
      ]);
      await era.printAndWait(['不过，在那之前，还有些事情要忙。']);
      await era.printAndWait([
        '这三年中存放在办公室里的，存放在 ',
        you.get_colored_name(),
        ' 家里的，经过 ',
        kitaru.get_colored_name(),
        ' 放流后仍剩下一些的开运道具，也该物归原主了，简单的同楼下 ',
        kitaru.get_colored_name(),
        ' 的妈妈问了声好，',
        you.get_colored_name(),
        ' 踏入了福来家的阁楼。',
      ]);
      await kitaru.say_and_wait(['啊！', callname, '，总算是来了！']);
      await era.printAndWait([
        '盘坐在木质的地板上的 ',
        kitaru.get_colored_name(),
        '，被阁楼中的泛黄古籍与各式古物所包围。',
      ]);
      await era.printAndWait([
        '不过，看',
        kitaru.sex,
        '熟练的穿进穿出的样子，倒不如说这里是属于',
        kitaru.sex,
        '的领域才对。',
      ]);
      await kitaru.say_and_wait('之后把这些东西就放在这里吧！');
      await era.printAndWait([
        kitaru.sex,
        '开始有序的把那些经过筛选后的物品摆在空余的架子上，和一旁章鱼脸的雕像，荧光的偏三方八面体之类的奇怪物品并列在一起。',
      ]);
      await you.say_and_wait('好多东西呢');
      await kitaru.say_and_wait('嗯，不止有我自己收集的东西。');
      await kitaru.say_and_wait(
        '有些参拜客放在神社除祟的但之后没有拿回去的东西，之后也会流落到这里来。',
      );
      await kitaru.say_and_wait(
        '所以就算是上个世纪的东西也有可能在里面找到哦！',
      );
      await era.printAndWait([
        '看来 ',
        kitaru.get_colored_name(),
        ' 的囤积癖居然是家族遗传。',
      ]);
      await era.printAndWait([
        '整理继续，房间里静的只能听见 ',
        kitaru.get_colored_name(),
        ' 的脚步声。',
      ]);
      await kitaru.say_and_wait('话说，我同命定之人的契约已经结束了。');
      await era.printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 试图辨认出一旁古籍上文字来打发时间的时候，架子后突然传来 ',
        kitaru.get_colored_name(),
        ' 的声音，过了好久，',
        kitaru.sex,
        '才说出另一句话。',
      ]);
      await kitaru.say_and_wait('那个，命定之人之后的打算是什么呢？');
      era.printButton('「继续以训练员的身份干下去吧？」', 1);
      era.printButton('「已经有在计划招募新担当了」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('嗯……毫不意外呢');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' 从架子缝隙中看见 ',
          kitaru.get_colored_name(),
          ' 的耳朵抽动了一下。',
        ]);
      }
      await you.say_and_wait('那福来呢？');
      await kitaru.say_and_wait('大概……继承家里的神社？');
      await kitaru.say_and_wait('毕竟这三年下来，神社的香火甚至比以前还旺呢。');
      await kitaru.say_and_wait('去读大学也有可能？');
      await kitaru.say_and_wait(
        '我应该能申请到密斯卡托尼克大学的民俗学吧，进入特雷森的大学部也不是什么困难的事情。',
      );
      await era.printAndWait('就这样自顾自的推演着，马尾一下一下的拍打着。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 变得认真了许多，平日里那种不正经的样子也消失了。',
      ]);
      await kitaru.say_and_wait('唉……');
      await kitaru.say_and_wait('总之，还是先等殿堂的评选结果出来后再说吧。');
      await era.printAndWait([
        kitaru.sex,
        '将一颗水晶球从架子上取了下来，用布包好。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 记得这是',
        kitaru.sex,
        '在出道战之后，恳求了好久 ',
        you.get_colored_name(),
        ' 才同意买的奖励。',
      ]);
      await kitaru.say_and_wait('命定之人，请把这个摆在你的办公室里吧。');
      await kitaru.say_and_wait([
        '毕业后，就算我不在 ',
        callname,
        ' 身边了，我相信它也会给你带来好运的！',
      ]);
      await era.printAndWait([
        '之后听着 ',
        kitaru.get_colored_name(),
        ' 逐个介绍起那些物品的历史。',
      ]);
      await era.printAndWait(['或许就这样悠闲的等到殿堂评选结果出来也不错。']);
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = '两个世界的主人';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '有马纪念上的表演为神社带来的人气来的快，去的也快。',
      );
      await era.printAndWait([
        '神社再次变回了如 ',
        you.get_colored_name(),
        ' 最初遇见 ',
        kitaru.get_colored_name(),
        ' 时寂寥无人的样子。',
      ]);
      await era.printAndWait([
        '若要说有什么不同的话，也许就是参拜客多了许多以菊花赏为目标的赛',
        kitaru.uma_sex_title,
        '吧。',
      ]);
      await era.printAndWait('以及……');
      await kitaru.say_and_wait(['辛苦了，', callname, '！']);
      await era.printAndWait([
        '穿着巫女的装束的 ',
        kitaru.get_colored_name(),
        ' 抓住了 ',
        you.get_colored_name(),
        ' 的胳膊。',
      ]);
      await kitaru.say_and_wait('让你做这些杂务真是不好意思……');
      await era.printAndWait([
        '本来只是应对因为有马纪念突然增加的参拜客，但来神社帮忙的这一习惯还是被 ',
        you.get_colored_name(),
        ' 保留了下来。',
      ]);
      await era.printAndWait([
        '毕竟 ',
        kitaru.get_colored_name(),
        ' 的闪光系列赛才刚刚结束，不知下一位合拍的担当会在什么时候遇见。',
      ]);
      await kitaru.say_and_wait('去休息一下吧！');
      await era.printAndWait(
        '并肩走在夕阳照耀下的神社，巫女的木屐在石板路上哒哒响着。',
      );
      await era.printAndWait([
        '直到眼前的 ',
        kitaru.get_colored_name(),
        ' 停下了脚步。',
      ]);
      await era.printAndWait([
        '面前是熟悉的塞钱箱，最早，',
        you.get_colored_name(),
        ' 便是和 ',
        kitaru.get_colored_name(),
        ' 在这里遇见的。',
      ]);
      await kitaru.say_and_wait([
        '说起来，',
        callname,
        ' 再过几个月就要迎来新担当了吧。',
      ]);
      await kitaru.say_and_wait('需要我帮你祈福一下吗？');
      era.printButton('点头', 1);
      era.printButton('摇头', 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          kitaru.sex,
          '尝试挥动了一下御币，却又迅速的停了下来，眉头紧皱。',
        ]);
        await kitaru.say_and_wait(
          '……果然，如果是为了这个的话，完全没法全心全意啊。',
        );
      } else {
        await kitaru.say_and_wait('猜到了！');
        await kitaru.say_and_wait([
          '不过，要是 ',
          callname,
          ' 同意我大概也不会做吧。',
        ]);
      }
      await era.printAndWait([
        '又陷入了沉默，直到不断落下的残阳为 ',
        kitaru.get_colored_name(),
        ' 披上了金色的头纱。',
      ]);
      await era.printAndWait([
        '将御币放在一旁的塞钱箱上，',
        kitaru.get_colored_name(),
        ' 打破了沉默。',
      ]);
      await kitaru.say_and_wait([callname, ' 听说过逢魔时刻吗？']);
      era.printButton('点头', 1);
      era.printButton('摇头', 2);
      await era.input();
      await kitaru.say_and_wait(
        '嗯！也就是黄昏时分，据说这是两世交汇的时刻，也是神魔最容易干涉人间的时刻。',
      );
      await kitaru.say_and_wait('这样的话……');
      await kitaru.say_and_wait(
        '跨越了有马纪念的考验，进入了殿堂，勉勉强强算是成为了神明的我。',
      );
      await kitaru.say_and_wait('不知道能不能借此实现自己的愿望呢？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 紧握的右手伸到了 ',
        you.get_colored_name(),
        ' 的面前，而后，伸出了',
        kitaru.sex,
        '的小拇指。',
      ]);
      await era.printAndWait([
        '是 ',
        you.get_colored_name(),
        ' 熟悉的，拉钩仪式的邀请。',
      ]);
      await kitaru.say_and_wait('今后，会陪我一直走下去吧？');
      await kitaru.say_and_wait(`我的训练员${you.adult_sex_title}……`);
      await kitaru.say_and_wait('我的命定之人……');
      await kitaru.say_and_wait('以及……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        '的声音逐渐变得细若蚊鸣，绯红随着温暖的夕阳染上了',
        kitaru.sex,
        '的脸颊。',
      ]);
      await era.printAndWait([kitaru.sex, '抬起头来，瞳中星光闪烁。']);
      await kitaru.say_and_wait('我的爱人。');
    };
    f.title = title;
    return f;
  })(),
  os_hot_line: (() => {
    const title = '热线电话';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        '被兴冲冲的 ',
        kitaru.get_colored_name(),
        ' 拉着在旧校区里四处乱转。',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait(
        '据说！只要拨打这个电话号码！就可以获得开运能量哦！',
      );
      await era.printAndWait([
        '看起来纤细的手臂却使出了难以抗衡的力量锁着 ',
        you.get_colored_name(),
        ' 的胳膊，杜绝了 ',
        you.get_colored_name(),
        ' 想要逃跑的念头。',
      ]);
      era.drawLine({ content: '一段时间后' });
      await kitaru.say_and_wait('呼……');
      await era.printAndWait([
        '总算是到了 ',
        kitaru.get_colored_name(),
        ' 认为合适的时候，天色已暗，窗户透出的阳光在走廊泛黄的墙壁上打出光斑。',
      ]);
      await era.printAndWait([
        '不过……完全比不上 ',
        you.get_colored_name(),
        ' 担当双瞳中因兴奋而几乎要满溢出来的光彩就是了。',
      ]);
      await kitaru.say_and_wait(['那么，', callname, '！开始拨打电话吧！']);
      await era.printAndWait([
        '站在被事先挑选好的仪式地点，也就是被老旧课桌椅围绕的教室正中，',
        kitaru.get_colored_name(),
        ' 拿起了电话。',
      ]);
      let a = true,
        b = true,
        c = true;
      do {
        era.printMultiColumns(
          [
            { c: '拨打电话', e: a },
            { c: '询问电话号码的细节', e: b },
            { c: '看一下周围的情况', e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e, width: 8 },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = b = c = false;
            await era.printAndWait('嘟……嘟……');
            era.drawLine({ content: '几秒钟后' });
            break;
          case 2:
            b = false;
            await kitaru.say_and_wait('嗯……我在一个论坛上看到的。');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 歪了歪头，似乎并不觉得自己的行为有什么不妥。',
            ]);
            break;
          case 3:
            c = false;
            await era.printAndWait('过于安静了，甚至窗外偶有几声鸟鸣传入。');
            await era.printAndWait('太阳要下山了……');
        }
      } while (a || b || c);

      await era.printAndWait('叮铃铃……叮铃铃……');
      await kitaru.say_and_wait('诶！？');
      await kitaru.say_and_wait(['那个……', callname, '，你听见了吗？']);
      await era.printAndWait('听起来像是座机的铃声。');
      await era.printAndWait(
        '声音应该是从隔壁教室传来的，在空荡荡的教学楼内回荡着。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' 和 ',
        kitaru.get_colored_name(),
        ' 来到走廊上朝那间课室内看去。',
      ]);
      await kitaru.say_and_wait('真真真的假的！');
      await era.printAndWait('布满灰尘的讲台上突兀的放着一台老式电话座机。');
      await era.printAndWait(
        '红色外壳泛着树脂的光泽，本应该是拨号盘的地方却被一块黑色旋钮替代。',
      );
      await era.printAndWait(
        '这个电话似乎就凭空出现在那里，在不接任何线路的情况下响着。',
      );
      await kitaru.say_and_wait('现现现在……该怎么办？');
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          '橙发的',
          kitaru.teen_sex_title,
          '整个人像是树獭一样抱住了 ',
          you.get_colored_name(),
          ' 的腰，颤抖地指着那个还在不断发出响声的通讯设备。',
        ]);
      } else {
        await era.printAndWait([
          '橙发的',
          kitaru.teen_sex_title,
          '颤抖地捏着 ',
          you.get_colored_name(),
          ' 的衣角，惊恐地指着那个还在不断发出响声的通讯设备。',
        ]);
      }

      a = b = c = true;
      do {
        era.printMultiColumns(
          [
            { c: '接电话', e: a },
            { c: '让待兼福来接', e: b },
            { c: '离开', e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e, width: 8 },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = b = c = false;
            era.printButton('「喂？」', 1);
            era.printButton('「你好？」', 2);
            await era.input();
            await kitaru.say_as_unknown_and_wait('……#&A%……');
            await era.printAndWait([
              '似乎有应答声传来，不过 ',
              you.get_colored_name(),
              ' 没法确定。',
            ]);
            era.printButton('「喂？」', 1);
            era.printButton('「你好？」', 2);
            await era.input();
            await kitaru.say_as_unknown_and_wait('……@&*#……&&￥……');
            await era.printAndWait('话筒里充斥着杂音和宛如倒放磁带的撕拉声。');
            era.printButton('挂断', 1);
            era.printButton('「喂？」', 2);
            if ((await era.input()) === 1) {
              await era.printAndWait([
                '当 ',
                you.get_colored_name(),
                ' 正打算放下话筒的时候，如同电脑合成般的声音自那一头传来……',
              ]);
            } else {
              await era.printAndWait('如同电脑合成般的声音自那一头传来……');
            }
            era.println();
            await typing(
              `照顾好待兼福来 ${you.actual_name}训练员`,
              kitaru.color,
            );
            era.println();
            await era.printAndWait('嘟……嘟……');
            await era.printAndWait('被挂断了……');
            ret.push(1);
            break;
          case 2:
            a = b = c = false;
            await kitaru.say_and_wait('欸！这样吗！！！');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 颤颤巍巍的握起了电话。',
            ]);
            await kitaru.say_and_wait('……欸！？');
            await era.printAndWait([
              '似乎是对电话那头出现的人有些意外，',
              kitaru.get_colored_name(),
              ' 面露惊诧。',
            ]);
            await kitaru.say_and_wait('嗯……是的…….');
            await kitaru.say_and_wait('……嗯，训练员，我的训练员也在！');
            await kitaru.say_and_wait('……我知道了。');
            await era.printAndWait([
              you.get_colored_name(),
              ' 看见 ',
              kitaru.get_colored_name(),
              ' 挂断了电话，眼眶周围有些发红',
            ]);
            await era.printAndWait([
              '之后也没能问出来电话那头是谁，',
              kitaru.sex,
              '就像完全忘了这件事一样。',
            ]);
            ret.push(2);
            break;
          case 3:
            c = false;
            await kitaru.say_and_wait('是是是……我也觉得，这有点……');
            era.drawLine({ content: '一段时间后' });
            await era.printAndWait('叮铃铃……叮铃铃……');
            await kitaru.say_and_wait('诶！？怎么又走回来了啊！！！！');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' 的惊呼声在走廊里回荡。',
            ]);
        }
      } while (a || b || c);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_god_study: (() => {
    const title = '神学研讨';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '今天的计划是和 ',
        kitaru.get_colored_name(),
        ' 在办公室里学习，空荡荡的椅子……看来',
        kitaru.sex,
        '今天是迟到了。',
      ]);
      await kitaru.say_and_wait([callname, '！', callname, '！']);
      await kitaru.say_and_wait([callname, '！！！']);
      await kitaru.say_and_wait('上次问题的答案我找到了哦！');
      await era.printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 打算打电话的时候，吵吵嚷嚷的 ',
        kitaru.get_colored_name(),
        ' 捧着一本不知道从哪里找来的书籍冲进了房间。',
      ]);
      await kitaru.say_and_wait('就是，有关神社供奉的主神是谁哦！');
      await era.printAndWait([
        you.get_colored_name(),
        ' 记得的确问过 ',
        kitaru.get_colored_name(),
        ' 这个问题。',
      ]);
      await kitaru.say_and_wait('你看这里！说是三女神会有多个化身哦！');
      await kitaru.say_and_wait('白兴大人也在呢！');
      await era.printAndWait([
        kitaru.sex,
        '冲 ',
        you.get_colored_name(),
        ' 举起了那本泛黄的宽大书籍，里面用颇为煞有介事的手法详细描绘了几位女神的多种化身以及可能的猜想。',
      ]);
      await kitaru.say_and_wait('然后，我回去翻了一下前几任神主的手记！');
      await kitaru.say_and_wait(
        '我们神社供奉的，应该是那位化身数量过多的女神，因此才没有一个具体的形象吧！',
      );
      await kitaru.say_and_wait('你看！这里还提出了什么眷族之类的概念。');
      await kitaru.say_and_wait('夏塔克鸟之类的！');
      era.printButton('「眷族？」', 1);
      await era.input();
      await kitaru.say_and_wait('嗯！');
      await kitaru.say_and_wait('也就是受到神明眷顾之类的意思啦！');
      await kitaru.say_and_wait(['赛', kitaru.uma_sex_title, '也在其中呢！']);
      await era.printAndWait([
        '头突然有点疼，眼前的橙色',
        kitaru.uma_sex_title,
        '隐约变得不真切了起来……',
      ]);
      await kitaru.say_and_wait('哦！对了！');
      await era.printAndWait([
        '想是想到了什么，',
        kitaru.sex,
        '握住了 ',
        you.get_colored_name(),
        ' 的手，笑意盈盈的看着 ',
        you.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait('如果我将来也成为神明了！');
      await kitaru.say_and_wait(['我肯定不会忘记给 ', callname, ' 神眷的哦！']);
      await era.printAndWait([
        '如言出法随般，',
        you.get_colored_name(),
        ' 的意识再度恢复了清明，缓过来的 ',
        you.get_colored_name(),
        ' 立即催促 ',
        kitaru.get_colored_name(),
        ' 开始今天的学习计划。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_luck_name: (() => {
    const title = '带来好运的名字';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '由于最近的文化课成绩走势不佳，',
        kitaru.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 的安排下留在训练室内自习。',
      ]);
      await era.printAndWait('哗啦……');
      await era.printAndWait([
        '作为今日监督的 ',
        you.get_colored_name(),
        ' 正打算看看福来学的怎么样了，结果还没进门就听见骰子在桌面上滚动的声音。',
      ]);
      await era.printAndWait([
        '背对着门的',
        kitaru.teen_sex_title,
        '，看起来正聚精会神的思考着什么。',
      ]);
      await kitaru.say_and_wait('七福神……');
      await kitaru.say_and_wait('水晶……');
      await kitaru.say_and_wait('灵动……');
      await kitaru.say_and_wait('唔……话说是不是该把『福来』留下来比较好呢？');
      await era.printAndWait(
        '时不时的在草稿纸上涂画着，应该是某件颇为重要的事情吧。',
      );
      era.printButton('「学的怎么样了？」', 1);
      era.printButton('「在想什么？」', 2);
      await era.input();
      await kitaru.say_and_wait('哎呀呀！来的正好！');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '完全没有因为走神被抓到的不好意思，',
        kitaru.get_colored_name(),
        ' 双眼放光地盯着走进来的 ',
        you.get_colored_name(),
        '。',
      ]);
      await kitaru.say_and_wait(
        '那个，我其实是在想，最近成绩不佳是不是运气问题呢？',
      );
      await kitaru.say_and_wait('要是改个名会不会好一点？');
      await kitaru.say_and_wait('你看！');
      await era.printAndWait([
        kitaru.sex,
        '向 ',
        you.get_colored_name(),
        ' 举起了本该是用于记录演算步骤的草稿纸，上面几乎是密密麻麻的写满了 ',
        kitaru.get_colored_name(),
        ' 的想到的名字。',
      ]);
      await kitaru.say_and_wait('呜……不过写了这么多，感觉像是在做无用功！');
      await kitaru.say_and_wait([
        '还是 ',
        kitaru.get_colored_name(),
        ' 比较好！',
      ]);
      await era.printAndWait('这样说着，面前的橙色团子肉眼可见的瘪了下去。');
      era.printButton('安慰（技能点数+10）', 1);
      era.printButton('离开（全属性+3，但……）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait('也不算是无用功了！');
        await kitaru.say_and_wait('欸！为什么？');
        await you.say_and_wait('嗯……');
        await era.printAndWait([
          '在 ',
          kitaru.get_colored_name(),
          ' 诘问般的目光中，',
          you.get_colored_name(),
          ' 下意识说出了一个或许能派的上用处的场景。',
        ]);
        await you.say_and_wait('比如像是作为未来孩子的名字？');
        await kitaru.say_and_wait('欸……给孩子的名字？');
        await kitaru.say_and_wait('……');
        await kitaru.say_and_wait(['说的是和 ', callname, ' 的孩子吗？']);
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait([
            '啊！',
            callname,
            ' 这么快就想着孩子的事情了？',
          ]);
          await kitaru.say_and_wait('哎呀！！！');
          await era.printAndWait([
            '在敲了几下 ',
            kitaru.get_colored_name(),
            ' 的脑袋之后，胡思乱想的',
            kitaru.sex,
            '总算是能继续学习了。',
          ]);
        } else {
          await kitaru.say_and_wait('啊！！！');
          await era.printAndWait([
            '才反应过来自己刚刚说了什么的 ',
            kitaru.get_colored_name(),
            ' 后知后觉的发出了惊呼。',
          ]);
          await era.printAndWait([
            '之后被满脸通红的 ',
            kitaru.get_colored_name(),
            ' 推出了房间。',
          ]);
        }
      } else {
        await era.printAndWait([
          '让 ',
          kitaru.get_colored_name(),
          ' 继续学习。',
        ]);
        await era.printAndWait([
          '不知道为什么，',
          kitaru.get_colored_name(),
          ' 的心情下降了',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_miso_fortune: (() => {
    const title = '味噌占卜';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([
        '那么！',
        callname,
        '！今天来做味噌汤占卜吧！',
      ]);
      await era.printAndWait([
        '兴高采烈的 ',
        kitaru.get_colored_name(),
        ' 将一碗味噌汤放在了 ',
        you.get_colored_name(),
        ' 的面前。',
      ]);
      era.printButton('饮用', 1);
      era.printButton('不饮用', 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait('欸！？');
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait([
          '双手合十的',
          kitaru.teen_sex_title,
          '在 ',
          you.get_colored_name(),
          ' 面前摆出了楚楚可怜的表情，橙色的尾巴也低声下气的垂了下来。',
        ]);
        await era.printAndWait('这下没有办法拒绝吧？');
        era.printButton('饮用', 1);
        await era.input();
      }
      await you.say_and_wait('咕嘟');
      await era.printAndWait([
        '或许是由于',
        kitaru.uma_sex_title,
        '本身的味觉过于敏感，这碗汤的调味有些过于淡了！',
      ]);
      await era.printAndWait([
        '不过抛开这点不谈，其余的部分鲜中又带着一丝甘甜，看来 ',
        kitaru.get_colored_name(),
        ' 确实下了不少心思。',
      ]);
      await kitaru.say_and_wait([callname, '！味道如何？']);
      await era.printAndWait([
        kitaru.teen_sex_title,
        '黄水晶般的双眼闪闪发光的看着 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton('「有点淡了。」', 1);
      await era.input();
      await kitaru.say_and_wait('欸！');
      await era.printAndWait(
        '用指尖直接在刚刚喝完的碗底蘸了一点点汤汁，伸出粉嫩的舌尖舔了舔。',
      );
      await kitaru.say_and_wait(['唔！', callname, ' 的口味是偏重的呢……']);
      era.printButton('「占卜的部分呢？」', 1);
      await era.input();
      await kitaru.say_and_wait('哦！你说这个呀！');
      await era.printAndWait([
        kitaru.sex,
        '漫不经心地端起 ',
        you.get_colored_name(),
        ' 放下的瓷碗，扫视起碗底。',
      ]);
      await kitaru.say_and_wait('从味噌渣的形状来看……这个占卜结果是——');
      await kitaru.say_and_wait('凶！');
      await era.printAndWait('该说是毫不意外吗？');
      await kitaru.say_and_wait([
        '所以！为了避免厄运，',
        callname,
        '，要试试小福做的其他菜式吗？',
      ]);
      if (kitaru.sex_code !== 1) {
        await kitaru.say_and_wait('巫女做的佳肴可是会含有神力的呢！');
      }
      await era.printAndWait(
        '于是之后接连品尝了过咸的玉子烧，还有稍微带点焦糊的煎鱼。',
      );
      await era.printAndWait([
        '看来 ',
        kitaru.get_colored_name(),
        ' 的厨艺还有很大的提高空间。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  og_fortune_game_duel_1: (() => {
    const title = '和占卜师的游戏对决！Ⅰ';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '该说 ',
        kitaru.get_colored_name(),
        ' 在游戏，尤其是对抗性较强的类型上的天赋意外的高吗？',
      ]);
      await era.printAndWait([
        '自从 ',
        you.get_colored_name(),
        ' 把',
        kitaru.sex,
        '带入电子游戏的深坑之后，从开始还能凭借 ',
        kitaru.get_colored_name(),
        ' 的生疏获得优势，到后面被',
        kitaru.sex,
        '几乎是未卜先知般的意识一边倒的碾压。',
      ]);
      await kitaru.say_and_wait(['好了好了！', callname, ' 在想什么呢？']);
      await era.printAndWait([
        '又到了打游戏的闲暇时光，坐在游戏机前的担当冲 ',
        you.get_colored_name(),
        ' 举着手柄，用尾巴拍了拍一旁沙发上留给Player2的位置。',
      ]);
      await era.printAndWait([
        '两条健康肉感的双腿交叉着搁置在沙发的扶手上，裸露在外的脚趾慵懒的摆动着。',
      ]);
      await era.printAndWait(['那么 ', you.get_colored_name(), ' 决定……']);
      era.printButton('双人的格斗向游戏', 1);
      era.printButton('竞速向的赛车游戏', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '有来有回，可惜最后还是被击败了……奇怪，怎么会输呢？',
        );
        await era.printAndWait([
          '明明最早是 ',
          you.get_colored_name(),
          ' 教 ',
          kitaru.get_colored_name(),
          ' 打游戏的啊，那个操作意识就算是用',
          kitaru.uma_sex_title,
          '的反应速度来解释也说不通。',
        ]);
      } else {
        await era.printAndWait('险而又险。');
        await era.printAndWait([
          '你们玩的是竞速赛车游戏，幸好在最后一圈的时候趁着 ',
          kitaru.get_colored_name(),
          ' 没反应过来超过了',
          kitaru.sex,
          '。',
        ]);
        await era.printAndWait([
          '话说，',
          kitaru.sex,
          '是怎么做到不看后视镜的情况下卡 ',
          you.get_colored_name(),
          ' 赛车位置的呢？',
        ]);
      }
      await kitaru.say_and_wait('唔……大概是占卜师的预感吧。');
      await you.say_and_wait('预感？');
      await kitaru.say_and_wait('嗯！');
      await kitaru.say_and_wait([
        '对啊！就是大概能猜到 ',
        callname,
        ' 之后会怎么做。',
      ]);
      await kitaru.say_and_wait('可惜隔着电脑屏幕的其他玩家就不行了……');
    };
    f.title = title;
    return f;
  })(),
  og_fortune_game_duel_2: (() => {
    const title = '和占卜师的游戏对决！Ⅱ';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await kitaru.say_and_wait('好欸！！！');
      await era.printAndWait([
        '在答应陪',
        kitaru.sex,
        '打游戏之后，',
        kitaru.get_colored_name(),
        ' 总算是消停了一些。',
      ]);
      await kitaru.say_and_wait([
        '是啊！果然还是要和 ',
        callname,
        ' 玩才有意思嘛！',
      ]);
      await era.printAndWait([
        '不过，对于 ',
        kitaru.get_colored_name(),
        ' 的能力，',
        you.get_colored_name(),
        ' 陪',
        kitaru.sex,
        '打无疑是自讨苦吃。',
      ]);
      await kitaru.say_and_wait('诶！？');
      await era.printAndWait([
        '在提出了不许 ',
        kitaru.get_colored_name(),
        ' 使用占卜能力之后，',
        kitaru.sex,
        '露出了有些不满的表情，看来',
        kitaru.sex,
        '并不想放弃自己的些许优势。',
      ]);
      await kitaru.say_and_wait('当然没问题啦！');
      await era.printAndWait([
        '奇怪，',
        kitaru.sex,
        '只是稍稍思考了一下，就爽快的答应了 ',
        you.get_colored_name(),
        ' 的请求。',
      ]);
      await era.printAndWait(['那么 ', you.get_colored_name(), ' 决定……']);
      era.printButton('双人的格斗向游戏', 1);
      era.printButton('竞速向的赛车游戏', 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await era.printAndWait([
          '看来之前的失败果然是',
          kitaru.sex,
          '那玄之又玄的能力，直到那个由 ',
          kitaru.get_colored_name(),
          ' 操控的举着船锚的角色在血量所剩无几的情况下被 ',
          you.get_colored_name(),
          ' 逼退到屏幕边缘。',
        ]);
      } else {
        await era.printAndWait([
          '看来之前的失败果然是',
          kitaru.sex,
          '那玄之又玄的能力，凭借着恰当的操作技巧，',
          you.get_colored_name(),
          ' 的赛车一直领先在 ',
          kitaru.get_colored_name(),
          ' 的赛车前面。',
        ]);
      }
      if (kitaru.sex_code !== 1 && you.sex_code !== 0) {
        await era.printAndWait('赢定了……吗？');
        await you.say_and_wait('唔……');
        await era.printAndWait(
          '还在沉睡状态的胯下之物隔着布料突然感受到了某种颇为不妙的触感。',
        );
        await kitaru.say_and_wait('嘿呀！');
        await era.printAndWait('一下，两下，而后是接连不断的轻触。');
        await era.printAndWait([you.get_colored_name(), ' 下意识的低头看去，']);
        await era.printAndWait([
          you.get_colored_name(),
          ' 的两腿之间，',
          kitaru.get_colored_name(),
          ' 的右脚正隔着布料压在上面，裸露在外的圆润脚趾，随着',
          kitaru.sex,
          '控制操控摇杆的动作有节奏地轻点着 ',
          you.get_colored_name(),
          ' 那正逐渐抬起头来的肉棒。',
        ]);
        await kitaru.say_and_wait('哈！');
        await era.printAndWait([
          '就趁着 ',
          you.get_colored_name(),
          ' 这走神的功夫，',
          kitaru.get_colored_name(),
          ' 抓住了机会。',
        ]);
        await era.printAndWait(
          '珍珠般的可爱足趾并拢，与绷紧的脚背一起前压，让本就因为布料阻碍而胀的难受的肉棒突然一下受到更大的刺激。',
        );
        await you.say_and_wait('喂！待兼福来！');
        await kitaru.say_and_wait(['啊啦，', callname, ' 失误了呢！']);
        await you.say_and_wait('嘶……');
        await era.printAndWait([
          '受到提醒后 ',
          kitaru.get_colored_name(),
          ' 反而得寸进尺，',
          you.get_colored_name(),
          ' 不禁弓起了背，手中的摇杆在突如其来的刺激下和胯下的肉棒一起随着',
          kitaru.sex,
          '的动作颤抖着。',
        ]);
        if (ret1 === 1) {
          await era.printAndWait([
            '在 ',
            kitaru.get_colored_name(),
            ' 早有准备的一连串招数之后，屏幕恰当的弹出了象征着 ',
            you.get_colored_name(),
            ' 被击败的 SLASH！',
          ]);
        } else {
          await era.printAndWait([
            '漆着赛',
            kitaru.uma_sex_title,
            '特色涂装的赛车冲出了护栏，坠入了山谷。',
          ]);
        }
        await kitaru.say_and_wait(['哎呀，', callname, ' 输了呢？']);
        await era.printAndWait([
          '方才还碰着 ',
          you.get_colored_name(),
          ' 下体的脚已经缩了回去。',
        ]);
        await era.printAndWait([
          '受困于布料内的肉棒胀的 ',
          you.get_colored_name(),
          ' 有些难受，然而造成这一切的家伙却装着若无其事的看着 ',
          you.get_colored_name(),
          '。',
        ]);
        await kitaru.say_and_wait('再来一局吗？');
        await era.printAndWait([
          '话语间夹杂些许媚意的 ',
          kitaru.get_colored_name(),
          '，放下了手柄，侧看身子看着你。',
        ]);
        await era.printAndWait([
          '衬衫下优美的背部曲线与臀瓣分开的光洁裸腿肆意的展现在 ',
          you.get_colored_name(),
          ' 的面前。',
        ]);
        await kitaru.say_and_wait('还算说……想要惩罚一下小福我呢？');
        era.printButton('是', 1);
        era.printButton('否', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            ' 站了起来，然而看到 ',
            you.get_colored_name(),
            ' 有所动作的 ',
            kitaru.get_colored_name(),
            ' 似乎并没有将要受到惩罚的慌乱，反而……',
          ]);
          await era.printAndWait([
            '……如果 ',
            you.get_colored_name(),
            ' 没有看错的话，那对眸子在扫过 ',
            you.get_colored_name(),
            ' 下身支起的帐篷时，',
            kitaru.sex,
            '吞了下口水。',
          ]);
          await era.printAndWait([
            '抓住方才',
            kitaru.sex,
            '使坏的小脚，一把将这家伙推倒在了沙发上，而后褪下了自己的裤子，让因为先前福来挑逗而蓄势待发的肉棒伸入了福来的裙摆下。',
          ]);
          await kitaru.say_and_wait('呀！');
          await era.printAndWait(
            '伸手挑开似乎是已经知道了将要面对什么而变得有了些水渍的内裤，肉棒简单蹭了两下发热的穴口，便开始长驱直入。',
          );
          await era.printAndWait('砰！');
          await kitaru.say_and_wait('唔啊！！！');
          await era.printAndWait([
            '因为体型差的关系，',
            kitaru.get_colored_name(),
            ' 柔软的宫口对于 ',
            you.get_colored_name(),
            ' 的肉棒来说，并不是什么无法触及的地方。',
          ]);
          await era.printAndWait(
            '只是第一次撞击，体验到快感的福来就忍不住叫出了声。',
          );
          await kitaru.say_and_wait('哈啊……');
          await era.printAndWait([
            you.get_colored_name(),
            ' 的肉棒在小穴内毫不留情的来回抽插，惩罚起这个在方才用脚玩弄它的',
            kitaru.uma_sex_title,
            '。',
          ]);
          await kitaru.say_and_wait('哈……哈……');
          await era.printAndWait([
            '身下的爱人只是喘着粗气，让红润的臀瓣高高翘起，以配合 ',
            you.get_colored_name(),
            ' 的动作。',
          ]);
          await era.printAndWait([
            '双手先是扶着腰，而后上移把玩起那对乳房，再到后来抓着福来的手腕，让',
            kitaru.sex,
            '随着 ',
            you.get_colored_name(),
            ' 抽插的动作仰起头来。',
          ]);
          await kitaru.say_and_wait('呀啊！！！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' 的双足直直地绷起，趾尖也因为快感而抽颤起来。',
          ]);
          await kitaru.say_and_wait('要去了呀啊啊哈！！！');
          await era.printAndWait(
            '随着精液的注入，占卜师小姐高高的昂起头，让嘴角因为快感而留下的透明涎水顺着洁白的天鹅颈滴落，沾湿了衣襟。',
          );
        }
      } else {
        await era.printAndWait('赢了！');
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  be_force: (() => {
    const title = '给现人神的祭品';
    /**
     * @param {CharaTalk} kitaru 待兼福来
     * @param {CharaTalk} you 玩家
     * @param {string} callname 待兼福来对玩家的称呼
     */
    const f = async (kitaru, you, callname) => {
      await you.say_and_wait('又输了？');
      await era.printAndWait([
        '已经不记得是第几次安慰失败后的 ',
        kitaru.get_colored_name(),
        ' 了，自那次对',
        kitaru.sex,
        '来说至关重要的比赛失败后，破裂成无数碎片的自信心再也没有合起来过。',
      ]);
      await era.printAndWait([
        '稍稍挪了一下桌面上的文件，以免',
        kitaru.sex,
        '的泪水滴在文件上。',
      ]);
      await you.say_and_wait(['……这次的理由是什么？']);
      await kitaru.say_and_wait(['运势不佳。']);
      await era.printAndWait([
        '也对，',
        you.get_colored_name(),
        ' 还能从',
        kitaru.sex,
        '的口中听到什么回答。',
      ]);
      await era.printAndWait([
        '就算是被',
        kitaru.sex,
        '口口生生叫着是命定之人的 ',
        you.get_colored_name(),
        '，现在也感觉有些厌烦了。',
      ]);
      await era.printAndWait(['该怎么办呢？']);
      await era.printAndWait(['自信……自信……自信……']);
      await era.printAndWait([
        '面前这家伙明明很强的，为什么，为什么连 ',
        you.get_colored_name(),
        ' 这样一个普通的人类都能把',
        kitaru.sex,
        '当成是养殖场里的兔子一样对待，是时候让',
        kitaru.sex,
        '意识到这一点了。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 走到',
        kitaru.sex,
        '面前，弯下腰，在',
        kitaru.sex,
        '闪躲的目光中，抬起了',
        kitaru.sex,
        '的双手，放在了自己的脖颈上。',
      ]);
      await you.say_and_wait(['感觉到了吗？福来。']);
      await kitaru.say_and_wait([
        '那个，那个，',
        callname,
        ' 这回要怎么惩罚我？',
      ]);
      await era.printAndWait([
        '于是，',
        you.get_colored_name(),
        ' 在',
        kitaru.sex,
        '略微有些期待的目光中回答道。',
      ]);
      await you.say_and_wait(['试着掐一下我吧！']);
      await era.printAndWait([
        '就是这样，勾起赛',
        kitaru.uma_sex_title,
        '埋在心底的支配欲。',
      ]);
      await era.printAndWait([
        '对一直压制着自己的 ',
        kitaru.get_colored_name(),
        ' 而言，突然释放出来的结果和随之而来的快感只会更为强烈。',
      ]);
      await era.printAndWait([
        '连自己最敬重的 ',
        callname,
        ' 都能踩在脚下，理所当然的自卑也就不存在了。',
      ]);
      await era.printAndWait([
        '窒息感逐渐涌了上来，在失去意识前，最后记得的是面前 ',
        kitaru.get_colored_name(),
        ' 带着可爱笑容的俏脸。',
      ]);
      era.drawLine();
      await era.printAndWait('计划是成功的。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 的确变得强硬了很多，作为差马在红技能的使用上变得愈发熟练，或者说……狠毒？',
      ]);
      await era.printAndWait([
        '在推开家里的门前，',
        you.get_colored_name(),
        ' 想着这件事。',
      ]);
      await era.printAndWait([
        '在家里迎接 ',
        you.get_colored_name(),
        ' 的是直截了当的一拳，用手捂着脸颊，逐渐变成朱红色的嘴角正滴下些许带着血的唾液。',
      ]);
      await era.printAndWait([
        '抬起头，身前的 ',
        kitaru.get_colored_name(),
        ' 舔了舔嘴唇，露出了在 ',
        you.get_colored_name(),
        ' 眼中仍然如太阳般明亮的笑容。',
      ]);
      era.setToBottom();
      await era.printAndWait([
        '在',
        kitaru.sex,
        '下一脚踢到 ',
        you.get_colored_name(),
        ' 的肚子上前，',
        you.get_colored_name(),
        ' 突然想起还没有约定今天的安全词是什么。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
