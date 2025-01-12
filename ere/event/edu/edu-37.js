/**
 * @file 荣进闪耀 - 育成
 *
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const CustomizedEdu = require('#/event/edu/edu-common');
const flash_race_end = require('#/event/edu/edu-events-37/race-end');
const flash_race_start = require('#/event/edu/edu-events-37/race-start');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status-desc.json');
const FlashEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-37');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const { attr_enum, fumble_result } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,string,string,{wait:boolean},function):Promise<*>>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-37/week-start-1'),
  require('#/event/edu/edu-events-37/week-start-2'),
].forEach((f) => f(week_start_handlers));

module.exports = class extends CustomizedEdu {
  async out_shopping(flash, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg !== 'black_treasure') {
      return;
    }
    if (era.get('flag:当前互动角色') > 0 || !sys_check_awake(37)) {
      add_event(hook.hook, event_object);
      await era.printAndWait([
        flash.get_colored_name(),
        ' 好像对这里很关注的样子……下次独自出行偶遇的时候问问吧',
      ]);
      await era.clear(1);
      return;
    }
    const your_name = me.name;
    new EventMarks(0).sub(event_hooks.out_shopping);
    await print_event_name('漆黑珍宝', flash);
    await era.printAndWait(
      `独自在商场准备购买生活用品时，${your_name} 突然在附近看到了满脸闷闷不乐的荣进闪耀。`,
    );
    era.printButton('「怎么了？」', 1);
    await era.input();
    await era.printAndWait(`见此，${your_name} 好奇地询问道。`);
    await flash.say_and_wait(`啊，${callname}。`);
    await era.printAndWait(`听出声音的来源是 ${your_name}，荣进闪耀有些惊讶。`);
    await flash.say_and_wait('不，没什么。');
    await era.printAndWait(`然后下一秒，${flash.sex}又摇了摇头。`);
    await flash.say_and_wait(
      '只是我突然想念起在家乡吃到的料理，所以想要尝试在日本这边寻找到食材，进行复刻。',
    );
    await flash.say_and_wait('只是……');
    await era.printAndWait('说到这里，荣进闪耀的脸上迅速闪过一丝纠结。');
    era.printButton('「很贵吗？」', 1);
    await era.input();
    await era.printAndWait(
      `而敏锐地捕捉到这一情况的 ${your_name}，似乎猜到了${flash.sex}情绪低落的原因。`,
    );
    await flash.say_and_wait('……嗯。');
    await era.printAndWait(`闻言，${flash.sex}沉默片刻，随后缓缓点头。`);
    await flash.say_and_wait(
      '制作料理所需要用到的高端鱼子酱，在这边商场的价格，超过了我这个月可用的零花钱范畴。',
    );
    await flash.say_and_wait(
      '虽然也可以使用其他更为便宜的品牌进行替代，但是这样做出来的成品就不是我最开始所怀念的那份味道了。',
    );
    await era.printAndWait(`话毕，${your_name} 看见${flash.sex}轻叹一口气。`);
    await era.printAndWait(`面对此时满脸沮丧的荣进闪耀，${your_name} 决定——`);
    era.printButton('「顺其自然」', 1);
    if (era.get('flag:当前马币') > 50) {
      era.printButton(`「借给${flash.sex}钱」`, 2);
    }
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `虽然 ${your_name} 的心中划过替面前人购买商品的打算，但仔细想来，以荣进闪耀的性格想必是不会答应这件事情的。`,
      );
      await era.printAndWait(
        `于是最终，${your_name} 也只是看着${flash.sex}愁眉苦脸地离开商场。`,
      );
      era.println();
      sys_change_motivation(37, -1) && (await era.waitAnyKey());
    } else {
      await era.printAndWait(
        `虽然 ${your_name} 的心中划过替面前人购买商品的打算，但仔细想来，以荣进闪耀的性格想必是不会答应这件事情的。`,
      );
      await flash.say_and_wait('诶？');
      await era.printAndWait('不过话虽如此，但也不是没有解决办法。');
      await flash.say_and_wait(`${callname} 您的意思是……打算替我支付吗？`);
      await era.printAndWait(`听到 ${your_name} 的提议，荣进闪耀愣了几秒。`);
      await flash.say_and_wait('您的好意我心领了，但这种事情果然……');
      await era.printAndWait(
        `紧接着，反应过来的${flash.sex}猛然摇头，表情甚是抗拒。`,
      );
      era.printButton('「只是将你未来的零花钱提前透支而已。」', 1);
      await era.input();
      await era.printAndWait(
        `见此，${your_name} 向荣进闪耀重申「借」和「请」的区别。`,
      );
      await era.printAndWait(
        `${your_name} 相信比起单纯的受到他人馈赠，这种更为公平的形式${flash.sex}会较容易接受。`,
      );
      await flash.say_and_wait('唔……');
      await era.printAndWait(
        `果然，在听到 ${your_name} 的话后，${flash.sex}的脸上浮现出迟疑的表情。`,
      );
      await flash.say_and_wait('……我知道了。');
      await era.printAndWait(
        `最终，在经过再三思索之后，${flash.sex}点头，接受了 ${your_name} 的帮助。`,
      );
      await flash.say_and_wait('我会铭记您的这份恩情的。');
      await era.printAndWait(`${flash.sex}郑重道。`);
      await flash.say_and_wait('我保证。');
      sys_change_money(-50);
      sys_get_billings().push({ creditor: 37, repay: 25, timer: 2 });
      era.add('flag:收支', 25);
    }
    return true;
  }

  async out_start(flash, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 37) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 6) {
      return false;
    }
    const your_name = me.name;
    await print_event_name('遇见之花', flash);
    await era.printAndWait(
      `临近情人节，为了参观今年新推出的巧克力的款项，荣进闪耀邀请 ${your_name} 一起前往附近的甜品店。`,
    );
    await era.printAndWait('不过……');
    await say_by_passer_by_and_wait(
      `客人`,
      `等一下，明明是我先来的——好痛，${your_name} 撞到我了！`,
    );
    await say_by_passer_by_and_wait(
      '店员',
      '想要购买『巧克力年轮蛋糕』的顾客请来这里排队。啊！这位客人，店内是不允许奔跑的。',
    );
    await flash.say_and_wait('还真是……一片混乱呢。');
    await era.printAndWait('看着店内在四处嚷挤的人群，荣进闪耀皱紧眉头。');
    await flash.say_and_wait(
      '这样的话就没有办法仔细的调查展览柜里的甜品了，有点麻烦……',
    );
    era.printButton('「需要换一家店吗？」', 1);
    await era.input();
    await era.printAndWait(`见此，${your_name} 提议道。`);
    await flash.say_and_wait(
      '……毕竟情人节将至，恐怕别的地方的情况也跟这里差不多吧。',
    );
    await era.printAndWait('说到这里，荣进闪耀轻叹一口气。');
    await flash.say_and_wait(
      '嘛，不过想要的商品其实已经提前在网上购物成功了，所以即便没有办法在现场考察实际的情况也不是什么大的问题。',
    );
    await flash.say_and_wait('因此，现在就先回去吧。');
    era.drawLine();
    await flash.say_and_wait(
      '其实，自从我来到日本之后，每年的情人节目睹这种人们因为送礼而产生争执的画面，都会觉得有些不可思议呢。',
    );
    await era.printAndWait('回到特雷森学园的路上，荣进闪耀突然发出一声感叹。');
    era.printButton('「德国那边没有这样的习俗吗？」', 1);
    await era.input();
    await era.printAndWait(`见此，${your_name} 有些疑惑。`);
    await flash.say_and_wait('准确来说是有的，但是比起巧克力，主流还是送花。');
    await era.printAndWait(
      `说着，荣进闪耀伸出一根手指，开始为 ${your_name} 科普。`,
    );
    await flash.say_and_wait(
      '而且更进一步的讲，即便要赠礼，对象也不会是情侣之外的人。',
    );
    await flash.say_and_wait('也就是说，没有所谓的义理礼物。');
    era.printButton('「原来如此。」', 1);
    await era.input();
    await era.printAndWait(
      '换句话说，如果想要赠礼的话，那接受礼物的目标一定是十分重要的存在吧。',
    );
    await era.printAndWait(`${your_name} 了然地点了点头。`);
    await flash.say_and_wait(
      '以身边的人举例子的话，那就是每年情人节，我都能看到父亲送给母亲的玫瑰花束。',
    );
    await flash.say_and_wait('………');
    await era.printAndWait('说到这里，不知道为什么，荣进闪耀突然陷入沉默。');
    await era.printAndWait(
      `${your_name} 似乎感觉${flash.sex}的目光在隐隐之间向 ${your_name} 这边看了一眼。`,
    );
    era.printButton('「怎么了？」', 1);
    await era.input();
    await flash.say_and_wait('……不，没什么。');
    await era.printAndWait('再度开口的荣进闪耀轻轻摇头。');
    await flash.say_and_wait('总而言之，德国那边是不会以告白为由赠送礼物的。');
    await flash.say_and_wait('如果要这么做，那双方只会是更深层次的关系。');
    await flash.say_and_wait(
      '因此从这个角度来讲，反而是日本这边会有在情人节这天告白的习俗，更让我诧异。',
    );
    era.printButton('「大概是一个顺水推舟的借口吧？」', 1);
    await era.input();
    await era.printAndWait(
      '告白是一个需要勇气的行为，以情人节告白这种传统节日中的传统习俗为由，来进行这类无论最终成败与否都会改变双方关系的行为，正好合适。',
    );
    await flash.say_and_wait('需要合适的理由来为真正的心意做掩护吗……');
    await flash.say_and_wait('呵呵～～倒是很不错的主意呢。');
    await era.printAndWait(
      '如同受到某种启发一般，荣进闪耀若有所思地点了点头。',
    );
    await flash.say_and_wait(
      `啊，看到学园的校门口。那么，由于接下来我还有事情需要去处理，所以先在此告别了，${callname}。`,
    );
    era.printButton('「路上小心。」', 1);
    await era.input();
    era.drawLine({ content: '情人节当天' });
    await flash.say_and_wait(`早上好，${callname}。`);
    await era.printAndWait(
      `刚推开训练室的大门，${your_name} 便看到一朵娇艳欲滴的蓝色花朵，竖立在办公桌旁的花瓶上。`,
    );
    era.printButton('「这朵花是？」', 1);
    await era.input();
    await flash.say_and_wait('蓝色矢车菊，德国的国花。');
    await era.printAndWait(`荣进闪耀微笑着为 ${your_name} 介绍。`);
    await flash.say_and_wait(
      '上次和您分别之后，回去的路上我仔细思索了一番。最终认为既然目前所在的国家是日本的话，那么在传统节日方面也要入乡随俗一点才好。',
    );
    era.printButton('「所以这就是你的情人节礼物吗？」', 1);
    await era.input();
    await flash.say_and_wait(
      `是的，因为 ${callname} 您没有用鲜花作为装饰品的习惯，所以将此作为礼物一来可以改善您的周边环境，二来……`,
    );
    era.printButton('「二来？」', 1);
    await era.input();
    await flash.say_and_wait(
      '二来在不经意间看到这朵鲜花时，说不定还会借此联想到那位赠送鲜花的人。',
    );
    await flash.say_and_wait('呵呵呵——');
    await era.printAndWait('说完这些之后，荣进闪耀捂嘴轻笑，似乎显得很开心。');
    era.set('cflag:37:节日事件标记', 0);
    sys_like_chara(37, 0, 100) && (await era.waitAnyKey());
    return true;
  }

  async race_end(flash, me, callname, hook, extra_flag) {
    return await flash_race_end(
      flash,
      me,
      callname,
      hook,
      extra_flag,
      super.race_end,
    );
  }

  async race_start(flash, me, callname, hook, extra_flag) {
    return await flash_race_start(
      flash,
      me,
      callname,
      hook,
      extra_flag,
      super.race_start,
    );
  }

  async train_fail(flash, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(flash, me, callname, hook, extra_flag);
    }
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    const your_name = me.name;
    if (extra_flag.fumble) {
      await print_event_name('不要胡来', flash);
      await era.printAndWait('荣进闪耀的训练失败了。');
      await flash.say_and_wait('Autsch……');
      await flash.say_and_wait('真是非常抱歉，没有想到我竟然会受伤……');
      await era.printAndWait(`保健室内，${flash.sex}语气歉意地说道。`);
      await flash.say_and_wait('不过，不能因为这种小伤就变更行程。');
      await era.printAndWait(
        `然后下一秒，${flash.sex}又摇了摇头，准备重整旗鼓。`,
      );
      await flash.say_and_wait(
        '幸好伤势的程度在可以接受的范围内，相信只需要稍微休息一下就能继续训练。',
      );
      era.printButton('「先安心治疗吧。」', 1);
      era.printButton('「真的还能继续训练吗？」', 2);
      let ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          '虽然想要积极训练是件好事，但也不应该为此而勉强自己。',
        );
        await flash.say_and_wait(
          '但如果在这里浪费太多时间的话，接下来的计划就有被推迟的可能……',
        );
        await era.printAndWait(
          `面对 ${your_name} 的提议，荣进闪耀的脸上浮现出犹豫之色。`,
        );
        era.printButton('「要是伤势恶化，情况就会变得更糟糕。」', 1);
        await era.input();
        await era.printAndWait(`见此，${your_name} 轻叹一口气，说道。`);
        await flash.say_and_wait('……');
        await era.printAndWait(`很明显，${your_name} 的话提醒了面前人。`);
        await era.printAndWait(
          `只见${flash.sex}垂下头，目光闪动，似乎是在思索其中的利害。`,
        );
        await flash.say_and_wait('我知道了……');
        await era.printAndWait(`片刻之后，${flash.sex}身体一松。`);
        await flash.say_and_wait(
          '您说的是呢，既然这样的话，那就暂时先安心治疗吧。',
        );
        hook.arg = 0;
      } else {
        await era.printAndWait(
          '虽然想要积极训练是件好事，但只凭荣进闪耀现在的状态，是否有些太勉强了？。',
        );
        await flash.say_and_wait(
          '嗯，虽然高强度的运动暂时没有办法进行，不过轻度的耐力跑还是可以做到的。',
        );
        await era.printAndWait(
          `面对 ${your_name} 的疑惑，${flash.sex}自信道。`,
        );
        await flash.say_and_wait('唔！');
        await era.printAndWait(
          `……然后下一秒，${your_name} 就看到${flash.sex}因为起身过猛而闷哼一声。`,
        );
        era.printButton('「还是好好治疗吧。」', 1);
        await era.input();
        await era.printAndWait(`见此，${your_name} 轻叹一口气。`);
        await flash.say_and_wait('是……');
        await era.printAndWait(
          '不可置疑的事实摆在眼前，即便心中再有不甘，荣进闪耀也只能低头接受。',
        );
        if (Math.random() < extra_flag.args.ratio.fail_again) {
          hook.arg = -1;
        } else {
          hook.arg = 1;
        }
      }
    } else {
      await print_event_name('好好休息', flash);
      await era.printAndWait('荣进闪耀的训练失败了。');
      await flash.say_and_wait(
        '唔，是我不够注意……要是热身运动能做得更仔细一点的话……也许就能避免这个结果了。',
      );
      await era.printAndWait(`训练室内，${flash.sex}语气低落地说道。`);
      await flash.say_and_wait('现在这样的话，之后的计划就有被推迟的可能了。');
      era.printButton('「别着急，先好好休息吧。」', 1);
      era.printButton('「不要勉强自己，先好好休息吧。」', 2);
      let ret = await era.input();
      if (ret === 1) {
        await era.printAndWait('心急吃不了热豆腐，在运动上这个道理同样适用。');
        await era.printAndWait('只劳不逸终究会失衡，最后导致更为糟糕的结果。');
        await flash.say_and_wait('唔……');
        await era.printAndWait(
          `荣进闪耀当然也明白这份道理，于是${flash.sex}在沉默片刻之后，缓缓点头。`,
        );
        await flash.say_and_wait('我知道了，那就按照您的建议，先好好休息吧。');
        hook.arg = 0;
      } else {
        await era.printAndWait('心急吃不了热豆腐，在运动上这个道理同样适用。');
        await era.printAndWait('一味的勉强自己只会让情况变得更加糟糕。');
        await flash.say_and_wait('唔……');
        await era.printAndWait(
          `荣进闪耀当然也明白这份道理，于是${flash.sex}在沉默片刻之后，缓缓点头。`,
        );
        await flash.say_and_wait(
          '虽然我并不认为这是一种勉强。不过您说的也对呢。',
        );
        await flash.say_and_wait('那就按照您的建议，先好好休息吧。');
        if (Math.random() < extra_flag.args.ratio.fail_again) {
          hook.arg = -1;
        } else {
          hook.arg = 1;
        }
      }
    }
  }

  async train_success(flash, me, callname, hook, extra_flag) {
    const your_name = me.name;
    if (Math.random() < 0.2 * extra_flag.stamina_ratio) {
      const edu_marks = new FlashEduMarks();
      if (
        extra_flag.train === attr_enum.speed &&
        era.get('cflag:49:育成回合计时') < 3 * 48 &&
        edu_marks.train_with_festa
      ) {
        const festa = get_chara_talk(49);
        await print_event_name('追加训练', flash);
        await era.printAndWait('荣进闪耀以出色的表现完成了这一次的训练目标。');
        await era.printAndWait(
          `本该就此可以休息的${flash.sex}，突然看到了正站在操场一旁的中山庆典。`,
        );
        await flash.say_and_wait('中山同学，你现在是在训练时间吗？');
        await era.printAndWait(
          `见后者此时一脸慵懒的表情，${flash.sex}好奇地问道。`,
        );
        await festa.say_and_wait('是啊……不过总觉得提不起干劲。');
        await era.printAndWait('中山庆典则耸了耸肩膀，回应道。');
        await flash.say_and_wait('提不起干劲？');
        await era.printAndWait('闻言，荣进闪耀的脸上浮现出一丝关切。');
        await flash.say_and_wait('是身体不舒服吗？');
        await festa.say_and_wait(
          '才不是啊，单纯只是自顾自的训练不够刺激而已。',
        );
        await flash.say_and_wait('刺激？');
        await era.printAndWait(
          `听到面前人的话，${flash.sex}若有所思地点了点头。`,
        );
        await flash.say_and_wait(
          '既然这样的话，那和我进行一场併走训练，你觉得如何呢？',
        );
        await festa.say_and_wait('併走？');
        await era.printAndWait(
          '听到荣进闪耀的提议，中山庆典的脸上一扫刚刚的懒散，转而露出感兴趣的微笑。',
        );
        await festa.say_and_wait('这倒是很有意思的方案。');
        await festa.say_and_wait('喂，那边的训练员。');
        era.printButton('「？」', 1);
        await era.input();
        await era.printAndWait(
          `然后下一秒，${flash.sex}将目光投向 ${your_name}。`,
        );
        await festa.say_and_wait(
          `虽然我很想直接拉着荣进闪耀去痛快跑一场，但是${
            flash.sex
          }是你负责的担当${flash.get_uma_sex_title()}吧？`,
        );
        await festa.say_and_wait('你的意见呢？');
        era.printButton('「去吧，闪耀。」', 1);
        era.printButton('「已经到休息时间了。」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
          await era.printAndWait(
            `既然荣进闪耀想要带给中山庆典一场热血沸腾的刺激比赛，那就如${flash.sex}所愿好了。`,
          );
          await era.printAndWait(
            `于是，${your_name} 向荣进闪耀挥手，示意${flash.sex}加油。`,
          );
          await flash.say_and_wait('嗯！');
          await era.printAndWait('见此，荣进闪耀点了点头。');
          await flash.say_and_wait('那么，我会全力以赴的，中山同学！');
          await festa.say_and_wait('哈哈！很好，就该这样！');
          await era.printAndWait(
            '闻言，中山庆典也发出一声充满期待的哈哈大笑。',
          );
          await era.printAndWait('就这样，两人奔赴赛道，认真进行着併走训练。');
        } else {
          await era.printAndWait(
            `荣进闪耀想要带给中山庆典一场热血沸腾的刺激比赛，虽然 ${your_name} 也希望能够如${flash.sex}所愿。`,
          );
          await era.printAndWait(
            '但是今天的运动量已经达标了，过度训练反而有可能导致身体出现问题。',
          );
          await era.printAndWait(`因此，${your_name} 对着荣进闪耀摇了摇头。`);
          await flash.say_and_wait('唔……');
          await era.printAndWait('见状，荣进闪耀面露遗憾之色。');
          await flash.say_and_wait('我知道了，过度训练确实不好呢。');
          await flash.say_and_wait(
            '既然这样的话，那中山同学，我们可以改天再来一起奔跑吗？',
          );
          await era.printAndWait(
            '就这样，荣进闪耀从身后拿出计划本，在与中山庆典约定好的日期上面，画上了一个圈。',
          );
        }
        edu_marks.train_with_festa = 0;
      } else {
        return await super.train_success(flash, me, callname, hook, extra_flag);
      }
    } else if (
      era.get(`status:37:发胖`) &&
      Math.random() < 0.1 * extra_flag.stamina_ratio
    ) {
      await flash.say_and_wait('……诶？');
      await era.printAndWait(
        '某天，在例行的身体检查中，荣进闪耀发现体重秤上的数字相较于之前有所增长。',
      );
      await flash.say_and_wait('体重……增加了？');
      await era.printAndWait(`见此，${flash.sex}皱紧眉头。`);
      await flash.say_and_wait(
        '看来必须要在原定的行程表之外再添加额外的减肥计划了呢。',
      );
      await era.printAndWait(`想到这里，${flash.sex}点了点头。`);
      await era.printAndWait(
        '就这样，经过一段时间的锻炼，荣进闪耀的体重又回归了正常。',
      );
      era.set(`status:37:发胖`, 0);
      era.set(`base:37:体重偏差`, 2000);
    }
  }

  async week_end(flash, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg,
      your_name = me.name;
    if (
      event_arg === 47 + 32 &&
      era.get('cflag:37:位置') === era.get('cflag:0:位置')
    ) {
      await print_event_name('交心之谈 · 二', flash);
      await flash.say_and_wait([
        '（',
        flash.get_colored_name(),
        '我会在合宿结束那天给您答复，这段期间内，就按照原定的计划执行吧。）',
      ]);
      await era.printAndWait(
        '特雷森的合宿活动持续时间很短，从开始到结束，也只有一个月的间隔。',
      );
      await era.printAndWait(
        `而在此期间，${your_name} 能感觉到荣进闪耀的状态正在不断的无序起伏着。时而坚定，时而动摇；时而对着 ${your_name} 展颜微笑，时而看向天空迷茫沉思。`,
      );
      await era.printAndWait(
        `不过话虽如此，但 ${your_name} 相信${flash.sex}能够在最后理性的做出自己的决断。毕竟对于经历各种艰苦训练都毫无怨言的人而言，这种事情，根本不值一提。`,
      );
      await flash.say_and_wait(
        `${callname}，请问今天晚上17点到18点这段时间，您有安排吗？`,
      );
      await era.printAndWait(
        `而也令 ${your_name} 不失所望的，荣进闪耀，完美地交出了自己的答卷。`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '其实，在10年之前的小时候，我并没有养成现在这种凡事都寻求精确的习性。',
      );
      await era.printAndWait('月末，合宿旅馆旁的海滩。');
      await era.printAndWait(`荣进闪耀和 ${your_name} 一起漫步在大海的边缘。`);
      await era.printAndWait('此刻，夕阳正在另一侧的尽头处徐徐下沉。');
      await era.printAndWait(
        '落日的余晖散发出璀璨的金色，将整片海岸线染成一副壮丽的画卷。',
      );
      await flash.say_and_wait(
        '直到7岁那一年的圣诞节前夕。那天的我回到家，发现我的父亲他正在准备Stollen，一种德国的圣诞节传统面包。',
      );
      await era.printAndWait('说着，荣进闪耀转身，无言地看向这份绝伦美景。');
      await era.printAndWait(`片刻之后，${flash.sex}才再度开口。`);
      await flash.say_and_wait(
        '……看到他在制作的过程中，一丝不苟，连一克的用材误差都不会允许的认真态度。当时的我并不理解，便好奇地发问。',
      );
      await flash.say_and_wait(
        '『爸爸，为什么一定要这么精准呢？哪怕糖的用量跟食谱有一点区别，吃起来的味道也没什么变化呀。』',
      );
      era.printButton('「还真是出乎意料的发言。」', 1);
      await era.input();
      await era.printAndWait(
        `以 ${your_name} 对面前人的了解，很难想象出${flash.sex}居然会说出这种敷衍的话语。`,
      );
      await flash.say_and_wait(
        '是的，所以正是父亲接下来对我说的那段话，改变了我的人生轨迹。',
      );
      await era.printAndWait(
        `荣进闪耀点了点头，${flash.sex}的语气中带着怀念的感慨。`,
      );
      await flash.say_and_wait(
        '『当然是因为品质啊，闪耀。如果今天为了这些许的误差而放松了标准，那么明天，后天呢？』',
      );
      await flash.say_and_wait(
        '一次的放松就有可能带来次次的松懈，最终产生无法挽回的结果……是很简单明了的道理，不是吗？',
      );
      await flash.say_and_wait(
        '我本以为我的父亲只是想借此让我认知到这种事情。但是没有想到，他紧接着说出来的话，却远远超越了当时的我的理解范畴。',
      );
      await era.printAndWait('说到这里，荣进闪耀垂下头，将手放在自己的胸口。');
      await flash.say_and_wait(
        '『但品质并非是最重要的，因为只要有食谱的话，谁都可以做出完美的甜点。』',
      );
      await flash.say_and_wait(
        '『因此最关键的，是这颗心。让别人通过甜点感受到我们的用心，这才是重中之重。』',
      );
      era.printButton('「重要的是其中的心意吗？」', 1);
      await era.input();
      await flash.say_and_wait(
        '但是心并非调味品，它无法做到让食物变得更加美味。',
      );
      await era.printAndWait(
        '荣进闪耀轻叹一声，原本平静如水的眼神产生了一丝明显的波动。',
      );
      await flash.say_and_wait(
        '当时的我，是这么回应我的父亲的。而他，则以我的年龄太小为理由没有进行详细解释，只是说等以后就顺其自然的理解了。',
      );
      era.printButton('「与人生的阅历相挂钩啊。」', 1);
      await era.input();
      await flash.say_and_wait(
        '嗯，可是稚嫩时期的我却不服输的认为不必等到以后。',
      );
      await flash.say_and_wait(
        '都说父母是孩子最崇敬的榜样。然后当时的我就觉得，只要能够模仿他们的行事风格，是不是就可以顺利理解这句话了。',
      );
      await flash.say_and_wait(
        '呵呵呵～～真是不切实际的想法呢。毕竟直到现在，我都没能彻底通透父亲的这句话。',
      );
      await era.printAndWait(
        '荣进闪耀带着自我调侃地轻笑几声，显然对于过去自己的幼稚行为感到些许滑稽。',
      );
      await flash.say_and_wait(
        '不过在这个模仿学习的过程中，因为渐渐知晓了凡事都要做到追求严格、严正、精密这一点的不易，所以倒是越来越尊敬能够将这种事情化作日常的父亲和母亲了呢。',
      );
      await flash.say_and_wait(
        '也正因如此，想要让他们以我为傲的想法便在心底油然而生。',
      );
      era.printButton('「这就是一切的起因吗？」', 1);
      await era.input();
      await flash.say_and_wait('是的，这就是一切的起因。');
      await era.printAndWait('话毕，荣进闪耀从身后取出那枚银黑色勋章。');
      await flash.say_and_wait('然后我就来到了这里，和您相遇。');
      await era.printAndWait(
        `${flash.sex}对着它凝视良久，直至落日收敛起自己的余光，才再度开口。`,
      );
      await flash.say_and_wait(
        `……据说作为${flash.get_uma_sex_title()}出生，能够在赛场上奔跑是件十分骄傲的事情。所以我渴望着在此取得荣誉，最终做到荣归故里。`,
      );
      await flash.say_and_wait(
        '这就是我奔跑的原动力，这就是我一直都如此执着的理由。',
      );
      await flash.say_and_wait('但是……');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `荣进闪耀突然沉默了一瞬，与此同时，${your_name} 看见${flash.sex}的手有些无力地垂落下去。`,
      );
      await flash.say_and_wait(
        '在实际执行的途中，这种想法，却又慢慢扭曲成了一种偏激的意志。',
      );
      await era.printAndWait(`${flash.sex}轻声道。`);
      await flash.say_and_wait(
        '合宿的第一天，您对我说的那番话让我猛然意识到。我的梦想，其实一直以来都并非只属于我一个人。',
      );
      await flash.say_and_wait(
        '过去的我没能理解这一点……所以从来都只顾着自己埋头前进，没有在意过您的任何想法。',
      );
      await flash.say_and_wait(
        '明明您对我的帮助无可替代。明明我们理应是一心同体的关系。',
      );
      era.printButton('「闪耀……」', 1);
      await era.input();
      await flash.say_and_wait('仔细回想起来，我亏欠您许多的恩情。');
      await flash.say_and_wait(
        '皋月赏赛前的发烧也好，日本德比赛后的腿伤也好，都是您提前一步考虑到了最深层次的事物，以我的身体健康为最高优先级重新制定计划。',
      );
      await flash.say_and_wait(
        '而可笑的是，我却对您精心策划的这一切不管不顾，只是一味地谈论未来。',
      );
      await flash.say_and_wait(
        '……明明没有了健康的身体支持，任何梦想都只会沦为毫无意义的空想……',
      );
      await era.printAndWait(
        '说到这里，荣进闪耀抬起头，对着此时将暗不暗的天空，发出一阵幽幽叹息。',
      );
      era.printButton('「能够顺利康复还是取决于你自己的努力。」', 1);
      await era.input();
      await era.printAndWait(
        `见此，${your_name} 微微皱眉。${your_name} 不愿意看到这种情况的发生，荣进闪耀的行为，就像是在否定了${flash.sex}自己的所有努力一样。`,
      );
      await flash.say_and_wait(
        '呵……您啊，即便在这种情况下还会选择安慰我吗，果然是非常温柔的人呢。',
      );
      await era.printAndWait(
        `而${flash.sex}则在听到 ${your_name} 的话后，对 ${your_name} 微微一笑。`,
      );
      era.printButton('「这是事实。」', 1);
      await era.input();
      await era.printAndWait(`${your_name} 再次强调。`);
      await flash.say_and_wait('我的话也是事实。');
      await era.printAndWait(
        `荣进闪耀摇了摇头，没有过多纠结于这个话题。${flash.sex}只是伸出手，将 ${your_name} 在月初递给${flash.sex}的银黑勋章又再次递回给 ${your_name}。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name} 低下头，看了眼这枚勋章，又抬起头，看了眼${flash.sex}。`,
      );
      await flash.say_and_wait(
        '挑战经典三冠的目的是为了实现梦想，但想要实现梦想却并非只有挑战经典三冠这一条路可以选择。',
      );
      await flash.say_and_wait(
        '我其实早就应该明白这一点，但却一直被自己的固执所束缚，自顾自地陷入牛角尖。',
      );
      era.printButton(
        '「这都是你早已经决定好的计划，对于它的坚持可以理解。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        '但是计划是可以变通的，一意孤行反而才是一种不成熟的体现。',
      );
      await flash.say_and_wait('……也许……');
      await era.printAndWait(
        `说到这里，${your_name} 看见荣进闪耀突然若有所思地点了点头。`,
      );
      await flash.say_and_wait(
        '花费了这么久的时间才领悟出这个道理的我，终于能够接近父亲和母亲一些了吧。',
      );
      era.printButton('「相信你的父母也很乐意看到你走出属于自己的道路。」', 1);
      await era.input();
      await flash.say_and_wait('您说得对呢。');
      await flash.say_and_wait(`所以，${callname}。`);
      await flash.say_and_wait('呼……');
      await era.printAndWait(
        '在下一句对话开始之前，荣进闪耀深吸一口气，这似乎代表接下来要发生的才是今天最重要的正题。',
      );
      await flash.say_and_wait('我想要参加今年的日本杯。');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}直视着 ${your_name} 的眼睛，一字一顿地说出了自己的想法。`,
      );
      await flash.say_and_wait(
        `如果，因为身体的原因无法角逐只有同世代实力最强的赛${flash.get_uma_sex_title()}才能赢下的菊花赏的话，那么，不妨将目标放在其之上。`,
      );
      await flash.say_and_wait(
        '我想以自己的巅峰状态，去挑战比我更富有经验的前辈。',
      );
      await flash.say_and_wait(
        `我想尝试，赢下日本德比的自己，是否能够战胜${flash.sex}们。`,
      );
      era.printButton('「如果是你的话一定可以做到。」', 1);
      await era.input();
      await flash.say_and_wait('呵呵～');
      await era.printAndWait(
        `听到 ${your_name} 毫不犹豫的支持，荣进闪耀嫣然一笑。`,
      );
      await flash.say_and_wait(
        '是啊，有您在身边支持的话，我肯定是可以做到的吧。',
      );
      await era.printAndWait(
        `夜幕初临的海滩上，来自异国的${flash.get_teen_sex_title()}面色柔和地对 ${your_name} 伸出左手。`,
      );
      await flash.say_and_wait('接下来，就以此为目标开始努力吧！');
      await era.printAndWait(
        `${flash.sex}的语气中蕴含着十分深沉的情感。那是纵使天崩于前，也丝毫不会动摇的信任。`,
      );
      era.printButton('「嗯。」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name} 点了点头，顺其自然地接过${flash.sex}的手。`,
      );
      await era.printAndWait(
        `毫无疑问的，经过这次的夏季合宿。${your_name} 们的未来，会绽放出更加绚烂精彩的火花。`,
      );
      era.println();
      era.set('status:37:分心', 0);
      await era.printAndWait([
        flash.get_colored_name(),
        ' 不再 ',
        {
          color: buff_colors[0],
          content: '[分心]',
          title: status_desc['闪耀分心'],
        },
        ' 了！',
      ]);
    } else if (
      event_arg === 95 + 32 &&
      era.get('cflag:37:位置') === era.get('cflag:0:位置')
    ) {
      await print_event_name('未来之事 · 三', flash);
      await era.printAndWait('夏日的时光转瞬即逝。');
      await era.printAndWait(
        `在这最后的夏季合宿中，${your_name} 看着荣进闪耀的实力正在稳扎稳打的变强。`,
      );
      await era.printAndWait(
        `就如同填补完最后一块碎片的镜子一般，此时的${flash.sex}，状态已经趋于完美，能够发挥出来的实力也处于这几年的巅峰。`,
      );
      era.printButton(
        '（这样的话，在秋季天皇赏上的表现应该是没有问题了。）',
        1,
      );
      await era.input();
      await era.printAndWait(
        `见此，${your_name} 满意地点了点头。一种为${flash.sex}即将可以实现梦想的喜悦在心中油然而生。`,
      );
      await flash.say_and_wait(`${callname}？`);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await era.printAndWait(
        `而兴许是见到 ${your_name} 此时的表情有些奇怪，结束一轮训练后的荣进闪耀，站在 ${your_name} 的面前，歪头发问。`,
      );
      await flash.say_and_wait(
        '只是觉得您最近注视着我的眼神里，似乎蕴涵着某种与平常不同的情感呢？',
      );
      era.printButton('「可能是因为我的使命即将达成了吧。」', 1);
      await era.input();
      await flash.say_and_wait('达成使命？');
      era.printButton('「见证你梦想的实现。」', 1);
      await era.input();
      await era.printAndWait(
        `所谓训练员，就是帮助${flash.get_uma_sex_title()}，引导${flash.get_uma_sex_title()}，管理${flash.get_uma_sex_title()}，最终令${
          flash.sex
        }们得到一个圆满结局的存在。因此，${your_name} 觉得 ${your_name} 的说法并无不妥。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `但有些意外的是，在听到 ${your_name} 这么说之后，荣进闪耀脸上却并没有露出开心的表情，反而是陷入了思索。`,
      );
      await flash.say_and_wait('那在此之后呢？');
      await era.printAndWait(`良久，${flash.sex}才说道。`);
      era.printButton('「在此之后？」', 1);
      await era.input();
      await era.printAndWait(
        `${your_name} 眨了眨眼睛，不理解荣进闪耀如此发问的用意。`,
      );
      await flash.say_and_wait('换句话说，您的梦想是什么呢？');
      era.printButton('「当然是实现你的梦想。」', 1);
      await era.input();
      await era.printAndWait(`闻言，${your_name} 下意识回答。`);
      await flash.say_and_wait('呵呵～');
      await era.printAndWait(
        `而在听到 ${your_name} 这么说之后，荣进闪耀轻笑一声，似乎是意料到了 ${your_name} 会这样回答。`,
      );
      await flash.say_and_wait('不，我想知道的是您的梦想。');
      await era.printAndWait(`下一秒，${flash.sex}摇了摇头。`);
      await flash.say_and_wait('将这件事情排除在外之后的，您真实的想法。');
      await era.printAndWait(
        `这么说着的荣进闪耀，眼睛注视着 ${your_name}，湛蓝色的瞳孔中再次闪烁出2个月之前 ${your_name} 就无法理解的那道波动。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `不过现在，观察着面前人脸上时刻在变化的细微表情，${your_name} 似乎又有了新的想法了。`,
      );
      era.printButton('「让我再考虑一段时间吧。」', 1);
      await era.input();
      await era.printAndWait(`最终，${your_name} 如此说道。`);
      era.drawLine();
      await flash.say_and_wait('………');
      era.printButton('「闪耀？」', 1);
      await era.input();
      await era.printAndWait(
        `回到特雷森学园的车上，${your_name} 发现荣进闪耀的视线一直在盯着某个地方看。`,
      );
      await flash.say_and_wait('没什么，我只是在注视合宿场地。');
      era.printButton('「合宿场地？」', 1);
      await era.input();
      await flash.say_and_wait('嗯，因为从这里学到了很多东西呢。');
      await flash.say_and_wait(
        `就比如与 ${callname} 您一起，经历了许多训练，让自己的实力得到进一步的提升。`,
      );
      era.printButton('「原来如此。」', 1);
      await era.input();
      await flash.say_and_wait(
        '所以，一想到这可能是我最后一次来到这里，心里难免就会产生不舍之情。',
      );
      era.printButton('「将这份宝贵的回忆，铭记在心吧。」', 1);
      await era.input();
      await era.printAndWait(
        `见荣进闪耀此时有些微妙的表情，${your_name} 开口安慰道。`,
      );
      await flash.say_and_wait('嗯。');
      await era.printAndWait(
        `${flash.sex}点了点头，紧接着便转身看向 ${your_name}。`,
      );
      await flash.say_and_wait(`说起来，${callname}。`);
      era.printButton('「怎么了？」', 1);
      await era.input();
      await flash.say_and_wait(
        '如果我在达成梦想之后，选择留在日本的话，您会怎么想呢？',
      );
      era.printButton('「……诶？」', 1);
      await era.input();
      await era.printAndWait(
        `荣进闪耀这突如其来的问题打了 ${your_name} 一个措手不及。`,
      );
      await flash.say_and_wait(
        '虽然继承父母的蛋糕店是已经决定好的事情，但在实现这个计划的途中可能也会因为某些原因在日本逗留一段时间也说不定。',
      );
      await era.printAndWait(
        `而大概是也知道自己的问题太过突兀，紧接着，${flash.sex}解释道。`,
      );
      era.printButton('「会觉得很开心吧。」', 1);
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `然后下一秒，${your_name} 的直言不讳就令${flash.sex}微微一愣。`,
      );
      await flash.say_and_wait('开心……吗？');
      era.printButton('「因为能继续看到你奔跑的身姿。」', 1);
      await era.input();
      await era.printAndWait(`${your_name} 点了点头，对荣进闪耀露出温柔笑容。`);
      await flash.say_and_wait('……这样啊。');
      await era.printAndWait(
        `荣进闪耀陷入沉默，${your_name} 看到${flash.sex}错开了和 ${your_name} 对视的眼眸。`,
      );
      era.printButton('「……闪耀？」', 1);
      await era.input();
      await flash.say_and_wait('……不，没什么。');
      await era.printAndWait(`片刻之后，再度开口的${flash.sex}摇了摇头。`);
      await flash.say_and_wait(
        '这些事情还是等之后在讨论吧。总之，目前的重点还是秋季天皇赏。',
      );
      await era.printAndWait(
        `说着，${flash.sex}脸上的表情快速变化为一种坚定。`,
      );
      await flash.say_and_wait('父亲和母亲都在那里等待着我，所以——');
      era.printButton('「要挺胸前进呢。」', 1);
      await era.input();
      await flash.say_and_wait('嗯！');
    }
  }

  async week_start(flash, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return await super.week_start(
        flash,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait: false },
      ret = await week_start_handlers[event_object.arg](
        flash,
        me.name,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait && (await era.waitAnyKey());
    return ret;
  }
};
