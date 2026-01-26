/**
 * @file 丸善斯基 - 育成
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const maru_race_end = require('#/event/edu/edu-events-4/race-end');
const maru_race_start = require('#/event/edu/edu-events-4/race-start');
const maru_week_end = require('#/event/edu/edu-events-4/week-end');
const maru_week_start = require('#/event/edu/edu-events-4/week-start');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const { attr_names, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async week_start(maru, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 'palace') {
      return await super.week_start(
        maru,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    return await maru_week_start(maru, me, callname, hook, event_object);
  }

  async week_end(maru, me, callname, hook, extra_flag, event_object) {
    return await maru_week_end(maru, me, hook, event_object);
  }

  async race_start(maru, me, callname, hook, extra) {
    return await maru_race_start(maru, me, hook, extra);
  }

  async race_end(maru, me, callname, hook, extra) {
    if (await maru_race_end(maru, me, callname, hook, extra)) {
      return await super.race_end(maru, me, callname, hook, extra);
    }
  }

  async train_success(zensky, me, callname, hook, extra_flag) {
    era.print(
      `${zensky.name} 的 ${attr_names[extra_flag.train]} 训练顺利成功了……`,
    );
    if (Math.random() < 0.9 * extra_flag.stamina_ratio) {
      const me = get_chara_talk(0);
      await print_event_name('额外的自主训练', zensky);
      await era.printAndWait(`在${zensky.name}的训练结束后。`);
      await zensky.say_and_wait(`哈喽？${callname}，待会有空吗？`);
      await zensky.say_and_wait('在这种天气跑步应该会很开心吧？');

      await zensky.say_and_wait(
        '溅起的水花、雨中朦胧的视野……这种时候好像可以感受到别具一格的风。',
      );

      await zensky.say_and_wait(
        '今天我不是跑得非常有干劲吗！我觉得就这样结束练习有点可惜呢♪',
      );

      await zensky.say_and_wait(`在雨中奔跑感觉也不错哦♪`);

      await zensky.say_and_wait(`这种程度的雨，跟晨浴差不多吧。`);

      await zensky.say_and_wait('不过现在应该说是傍晚浴才对吧……？');

      await zensky.say_and_wait('我的身体还火热得不得了啊。');

      await zensky.say_and_wait(
        `说不定现在才是我发挥作用的时候？${callname}又是怎么想的呢？`,
      );
      era.printButton('「我知道了，那就跑吧。」', 1);
      era.printButton('「还是先不跑吧！」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await zensky.say_and_wait(
          `就是这样！我今天要跑一整晚哦。呵呵，天空好像也很高兴呢。`,
        );

        await zensky.say_and_wait(`那就出发吧，走向风的世界。`);
        await era.printAndWait('于是额外训练，就在雨中不断持续下去了。');
      } else {
        await zensky.say_and_wait('哎呀，真可惜。');
        await zensky.say_and_wait('难得有这种机会的……！');
        await zensky.say_and_wait(
          '不过这也是没办法的事情呢。毕竟体力的保存也很重要嘛……！',
        );
        await zensky.say_and_wait('而且害训练员感冒的话，那就伤脑筋了呢。');
        await zensky.say_and_wait(
          `虽然讨价还价也不好，不过${me.name}陪我去雨里兜风吧，就我们两个哦♪`,
        );
        era.println();
        await era.printAndWait(
          `雨天兜风虽然让我们精疲力尽，不过${zensky.name}却似乎十分享受。`,
        );
      }
      era.println();
    }
  }

  async train_fail(zensky, me, callname, hook, extra_flag) {
    const chara_talk = get_chara_talk(4);
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.fumble) {
      const me = get_chara_talk(0);
      await print_event_name('严禁逞强！', chara_talk);
      await chara_talk.say_and_wait(`唔，好痛`);
      await era.printAndWait(`${chara_talk.name}在之前的训练中不慎扭伤了脚踝`);
      await chara_talk.say_and_wait(`即使是我也已经到极限了哦`);
      await chara_talk.say_and_wait(
        '不过，离下场比赛的日子也接近了呢……得赶快打起精神来！',
      );
      era.println();

      era.printButton('「别急，慢慢治疗吧。」', 1);
      era.printButton('「有时下猛药也是必要的！」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await chara_talk.say_and_wait(
          `这样吗？虽然我觉得只要稍微休息一下就可以恢复过来了！`,
        );
        era.printButton('「如果伤口恶化的话就麻烦了。」', 1);
        await era.input();
        await chara_talk.say_and_wait(
          '……知道了。既然决定要治疗了，那就要以完全恢复为目标才行！',
        );
        await chara_talk.say_and_wait(
          '那么，为了打起精神来，去买点意式奶酪回来吧。',
        );
        era.printButton('「啊，注意脚不要再次受伤了。」', 1);
        await era.input();
        await chara_talk.say_and_wait(
          `哎呀，${callname}真是温柔呢，如果不是${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我而是后辈们的话，说不定一下子就被攻略了呢～`,
        );

        era.printButton(`「${chara_talk.name}又在开玩笑了。」`, 1);
        await era.input();
        await chara_talk.say_and_wait('哼哼♪');
        await era.printAndWait(
          `在${chara_talk.name}彻底恢复过来之前，训练只能暂时放一边了`,
        );
        era.println();
        hook.args = -1;
      } else {
        await era.printAndWait(
          `临近比赛的日子接近了，${chara_talk.name}又受了很严重的伤，如果想要快点好起来的话，只能剑走偏锋了`,
        );
        await era.printAndWait(`${me.name}思索再三，决定下一剂猛药`);
        era.printButton(
          '「如果保持心情畅快的话伤口会恢复的更快一点，靠意志力撑过去吧！」',
          1,
        );
        await era.input();
        await chara_talk.say_and_wait(
          '跟我想的一样呢，如果是要放松心情的话，去市中心追逐最潮流的时尚吧',
        );

        if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await era.printAndWait(
            `于是${me.name}在时尚杂志上确定了当季最新的潮流服装后带着${chara_talk.name}来到了百货大楼。`,
          );
          await era.printAndWait(
            `虽然是工作日，但人流量还是相当巨大，${me.name}为了防止有人不小心撞到${chara_talk.name}受伤的腿处处小心。`,
          );
          await era.printAndWait(
            `${me.get_couple_title()}两个在大楼里看得眼花缭乱。`,
          );
          await chara_talk.say_and_wait(
            `诶？现在的潮流我都没有听说过了，难道${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }我out了吗？`,
          );
          era.printButton(
            `「被先锋潮流打击的${chara_talk.name}心情变差，恢复的效果也大幅下降了」`,
            1,
          );
          await era.input();
          hook.arg = -1;
        } else {
          await era.printAndWait(
            `${me.name}在${chara_talk.name}的引导下开着小塔七拐八拐来到了一家看上去有年代感的CD店。`,
          );
          await chara_talk.say_and_wait(
            '虽然这家店外表看上去比较朴素，不过里面的音乐还是蛮潮流的嘛♪',
          );
          await era.printAndWait(
            `${me.name}随手拿起一张CD盘,脑海里不太确定是不是自己高中时反复听过这首歌.`,
          );
          await chara_talk.say_and_wait(
            '呵呵～果然是首好歌♪让人忍不住想跳起舞来呢。',
          );
          era.printButton(
            `「(只要${
              chara_talk.sex_code - 1 ? '她' : '他'
            }高兴的话，也挺好吧？)」`,
            1,
          );
          await era.input();
          await era.printAndWait(
            `不知是否是音乐的作用，${chara_talk.name}的伤口也恢复得更快了.`,
          );
          hook.arg = 0;
        }
      }
    } else {
      await print_event_name('保重身体！', chara_talk);
      await chara_talk.say_and_wait(`唔嗯，脚好像扭伤了呢`);
      await era.printAndWait(`${chara_talk.name}在之前的训练中不慎扭伤了脚踝`);
      await chara_talk.say_and_wait(
        `没关系的啦♪这点小伤的话两三下就能治好的。`,
      );
      era.println();

      era.printButton('「就算是小伤也要好好休息！」', 1);
      era.printButton('「这就是青春吧，我们回去训练吧！」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await chara_talk.say_and_wait(
          `Ok♪${callname}对我的事这么关心，其实也很在意我吧？`,
        );

        await chara_talk.say_and_wait(
          `不过受伤了这件事很没有${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }的风采呢，这样会让小特${chara_talk.sex_code - 1 ? '她' : '他'}们……`,
        );

        era.printButton('「没有这回事！」', 1);
        await era.input();

        await chara_talk.say_and_wait(
          `嗯……说的没错，${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我已经深刻反省了哦，等好好休息后一定会重新展现${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }的风采！`,
        );
        await era.printAndWait(`${chara_talk.name}乖乖在医务室休息了`);

        hook.arg = 0;
      } else {
        if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await chara_talk.say_and_wait(`哎呀，${callname}可真会说话♪`);

          await chara_talk.say_and_wait('可以多夸夸我吗。');

          era.printButton(
            `「${
              chara_talk.name
            }，美丽又强大的赛${chara_talk.get_uma_sex_title()}，像红焰一样又酷又炫的${
              era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
            }大人！」`,
            1,
          );
          await era.input();

          await chara_talk.say_and_wait(
            '哎呀，这么说的我都不好意思了♪那么休息的也差不多了，回去训练吧！',
          );

          era.printButton('「就是这种气势！」', 1);
          await era.input();

          await chara_talk.say_and_wait('好痛！');

          await era.printAndWait(
            '训练的时候伤口又恶化了，不得不重新回到病房休息。',
          );

          hook.arg = -1;
        } else {
          await chara_talk.say_and_wait('一、二、三、四，游刃有余♪');
          await chara_talk.say_and_wait('五、六、七、八，完全没问题♪');
          await chara_talk.say_and_wait(
            `${get_chara_talk(0).name}，我跳得怎么样？`,
          );

          era.printButton('「……好耀眼！」', 1);
          await era.input();
          await chara_talk.say_and_wait(
            '呵呵♪就这样向后辈们展现出又酷又炫的风采吧！',
          );

          era.printButton(`「${chara_talk.name}，${chara_talk.name}！」`, 1);
          await era.input();
          await era.printAndWait(
            `奇迹般的${chara_talk.name}恢复了状态，又回到训练之中了。`,
          );

          hook.arg = 0;
        }
      }
    }
  }

  async out_start(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new MaEduMarks();
    if (event_marks.feel_speed === 1) {
      event_marks.feel_speed++;
      await print_event_name('开超跑兜风', zensky);
      await era.printAndWait(`某天，${me.name} 正准备出校门散步时，恰好看到——`);
      await era.printAndWait(`心情不错的${zensky.name} 正朝着校外方向走去。`);
      era.println();

      await zensky.say_and_wait(
        `啊啦，是${callname}吗？今天天气真不错呢，所以要不要和我一起去兜风？`,
      );
      era.printButton('「好啊.」', 1);
      await era.input();
      await zensky.say_and_wait(
        `没有理由拒绝${
          zensky.name
        } 的邀请，于是${me.get_couple_title()}一同走向了暂时停在校外的红色跑车.`,
      );
      await zensky.say_and_wait('那么，出发咯！');
      await era.printAndWait(
        `红焰色的超跑启动之时，${me.name} 突然感到一阵恶寒，大概是错觉吧。${me.name}试图安慰自己。`,
      );
      era.println();
      await era.printAndWait(`十秒钟过后`);
      era.printButton('「会不会太冲的快了啊！」', 1);
      await era.input();
      await zensky.say_and_wait('这点车速还好啦！');
      await zensky.say_and_wait('差不多要上高速公路了！要拿出真本事出来了哦！');
      await zensky.say_and_wait(
        '小塔开始加速了！小塔开始甩尾了！小塔的速度变得更快了！！！',
      );
      await zensky.say_and_wait('呼哦！这种感觉真是令人欲罢不能呢♪');
      await zensky.say_and_wait(
        `咦？${era.get('callname:0:-1')}！${me.name}怎么了？`,
      );
      await zensky.say_and_wait('呼哦！这种感觉真是令人欲罢不能呢♪');
      await zensky.say_and_wait('喂？喂？');
      await zensky.say_and_wait(`${me.name} 没事吧？是不是我冲刺的太快了啊？`);
      era.printButton('「继续挑战直到极限吧！」', 1);
      era.printButton('「可以稍微休息一下吗？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(
          `既然${callname}都这么说了，${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我的话要认真起来了呢！`,
        );
        await zensky.say_and_wait('跟我一起突破极限吧！');
        await zensky.say_and_wait('来吧！超越音速！');
        await zensky.say_and_wait(
          `只要我和${me.name}在一起的话，无论是哪里都可以到达！`,
        );
        era.println();
        await zensky.say_and_wait('这就是所谓的幻化成风吗？');
        await era.printAndWait(
          `${me.name} 的意识在即将陷入黑暗的前一刻听到了丸善陶醉般的自言自语。`,
        );
        get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`我明白了，不可以勉强自己哦！`);
        era.println();
        await zensky.say_and_wait(`我们到前面的休息站去吧！`);
        await era.printAndWait(`于是${zensky.name}把车停到了休息站。`);
        era.println();
        await zensky.say_and_wait(`没事吧，训练员？`);
        await zensky.say_and_wait(`我去买点喝的来哦。`);
        await era.printAndWait(`${zensky.name}很快带回来了两瓶冰凉的饮料。`);
        await zensky.say_and_wait(`${callname}，${me.name} 现在还好吗？`);
        await era.printAndWait(
          `在喝下饮料之后，${zensky.name}的眩晕感慢慢消退了。`,
        );
        await zensky.say_and_wait(
          `就这样在${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }的大腿上休息一下吧。`,
        );
        await era.printAndWait(
          `${zensky.name}轻轻将${me.name}的脑袋放在了自己的大腿上。`,
        );
        await era.printAndWait(
          `${zensky.sex}的手指触及${me.name}的肌肤，留下一丝冰凉的感觉.`,
        );
        await zensky.say_and_wait(
          `这就是所谓的『膝枕』吗？我也是第一次这么做.如果不舒服的话要和${
            zensky.elder_sibling_sex_title
          }说出来哦.`,
        );
        await era.printAndWait(
          `女性身上特有的香气刺激着大脑，${me.name}不经意间沉溺于飘忽的想象中.`,
        );
        await zensky.say_and_wait(
          `三女神啊，我请求${me.name}，哪怕是一瞬间也好让我沉溺于此吧，在意识消散前的一刹那${me.name}祈祷着.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async school_atrium(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new MaEduMarks();
    if (event_marks.current_trend === 1) {
      event_marks.current_trend++;
      await print_event_name('街头的潮流推手', zensky);
      await era.printAndWait(`这是某一天在中庭发生的事————`);
      await zensky.say_and_wait(
        `${callname}，我有事想找${me.name}商量，${me.name}现在方便吗？`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await zensky.say_and_wait(
        `那个……因为后辈们的邀请，我们打算去时髦的市区买东西，${me.name}也知道这种走在时尚最尖端的感觉吧？`,
      );
      await zensky.say_and_wait(
        `……可是，${me.name}也知道，时尚的变化非常快嘛。虽然我也有努力学习最新最潮的知识啦，不过，和后辈们交流的时候总会出现好像没有办法沟通的情况。`,
      );
      await zensky.say_and_wait(
        `然后，气氛就会变得非常尴尬嘛。所以为了不让大家失望，${me.name}可以帮我想些好办法吗？`,
      );
      era.printButton('「进行提升自己品味的特训吧！」', 1);
      era.printButton(`「${me.name}要对自己有自信!」`, 1);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(`原来如此，是去确认当下最流行的时尚趋势吧！`);
        await zensky.say_and_wait(
          `那么${callname}，可以拜托${me.name}和我一起去确认潮流吗？`,
        );
        era.printButton('「当然可以！」', 1);
        await era.input();
        await era.printAndWait(`于是${me.name}和${zensky.name}一起到了市区。`);
        await zensky.say_and_wait(
          `事不宜迟，就先确认那条街道的潮流趋势吧，那边的CD店也许能确认到最新的潮流哦♪`,
        );
        await era.printAndWait(
          `${zensky.name}指向了一家颇具年代感的CD店，不过再怎么说在那里找到最新的潮流还是有点……`,
        );
        await zensky.say_and_wait(`${callname}，哪里不舒服吗？`);
        await era.printAndWait(
          `虽然心中是这么吐槽但${me.name}还是沉默着和${
            zensky.sex
          }一起探索着流行(二十年前)的CD店`,
        );
        await era.printAndWait(
          `一段时间后，${me.name}和${zensky.name}确认了这条街道所有的店铺.`,
        );
        await zensky.say_and_wait(
          `要追求最新潮流可真难，明明妈妈说过这种事只要掌握诀窍就没问题了……`,
        );
        era.printButton(`「要不要试着说些妈妈教${me.name}的事呢？」`, 1);
        await era.input();
        await zensky.say_and_wait(
          `和后辈们说吗……原来如此，这也是个可行的办法，与其追求流行，自己主动推广的话一定会更快乐!`,
        );
        await zensky.say_and_wait(
          `那么明天就向后辈们推广潮流吧,${callname}谢谢${me.name}咯⭐`,
        );
        await era.printAndWait(
          `第二天，${zensky.name}兴奋地告诉${me.name}后辈们接受了${
            zensky.sex
          }的新潮流.`,
        );
        get_attr_and_print_in_event(4, [10, 0, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`要对自己的品味有自信吗……？`);
        await zensky.say_and_wait(
          `也许是我变得有些胆小了。踌躇不安的样子可真不像我呢。`,
        );
        await zensky.say_and_wait(
          `而且，大家都知道我的品味。我是比谁都懂时尚趋势的，无论如何都要跑在时代尖端的赛${zensky.get_uma_sex_title()}。`,
        );
        await zensky.say_and_wait(`好！我会尽情享受和后辈们的出游的！`);
        await era.printAndWait(
          `后来，${me.name}询问${zensky.name}关于上次出游的事情，${
            zensky.sex
          }似乎和后辈们交流了不少有关潮流的情报。`,
        );
        await era.printAndWait(`这就是具有独特品味充满魅力的${zensky.name}.`);
        get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async back_school(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_marks = new MaEduMarks();
    if (event_marks.favourite_things === 1) {
      event_marks.favourite_things++;
      await print_event_name(`${zensky.name}，畅谈「喜欢」`, zensky);
      await era.printAndWait(`今天的${zensky.name}在接受采访.`);
      await era.printAndWait(
        `记者:那么，接下来想谈谈您穿的决胜服。请问您对这套决胜服最满意的地方在哪里呢？`,
      );
      await zensky.say_and_wait(`燃烧般的红色是我最喜欢的所以塔酱也是红色哦♪`);
      await era.printAndWait(`记者：塔酱？`);
      era.printButton(`那是${zensky.name}爱车的称号.`, 1);
      await zensky.say_and_wait(`啊，抱歉，讲的太投入了♪`);
      await zensky.say_and_wait(
        `其实我小时候被带去车展的时候看到了一辆大红色的超跑，那帅气的外型真让人离不开眼睛呢.`,
      );
      await zensky.say_and_wait(
        `当时的我发誓将来买车的时候一定要买这个，之后一边看着目录上的照片一边幻想着开车时的样子不断努力.`,
      );
      await zensky.say_and_wait(
        `现在这个梦想也实现了哦，每天都开着小塔到处跑哦♪`,
      );
      await era.printAndWait(`采访顺利进行着……`);
      await era.printAndWait(`记者：非常感谢，那么最后也拜托您让我们拍张照`);
      await zensky.say_and_wait(`了解！我会在尽量展现自己的魅力的.`);
      await zensky.say_and_wait(`对了！最熟悉我的人是${callname}吧？`);
      await zensky.say_and_wait(
        `${me.name}觉得今天的拍摄中宣传我的哪一点比较好呢？`,
      );
      era.printButton('「无人可及的速度」', 1);
      era.printButton('「任何时候都游刃有余的笑容」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(
          `原来如此，毕竟我最耀眼的时候还是享受跑步的瞬间嘛.`,
        );
        await zensky.say_and_wait(`既然如此的话就干脆到小塔上拍下我的照片吧`);
        await era.printAndWait(
          `之后在把记者也拖下水的兜风时${zensky.name}脸上露出了闪闪发光的表情。`,
        );
        get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`嗯，说的也是，做任何事最重要就是开心.`);
        era.printButton('「我很期待哦」', 1);
        await era.input();
        await zensky.say_and_wait(
          `包在我身上！我一定会满足${me.name}的期待，露出超级可爱的笑容！`,
        );
        await era.printAndWait(`记者:不错！拍到了精彩的照片了！`);
        await era.printAndWait(
          `几天后，在和${zensky.name}一起确认采访报导的时候.`,
        );
        await zensky.say_and_wait(
          `拍出了很棒的笑容呢♪而且这里……也提到了${me.name}的名字呢.`,
        );
        await zensky.say_and_wait(
          `嗯……『和训练员之间的羁绊关系所产生的令人印象深刻的笑容』上面是这么写的呢！`,
        );
        era.printButton('「有点不好意思」', 1);
        await era.input();
        await zensky.say_and_wait(
          `才不会呢。如果没有${me.name}的支持，我也不会带着这么可爱的笑容呢`,
        );
        await era.printAndWait(
          `无论是照片还是眼前，${me.name}都感受到了${zensky.name}耀眼的笑容.`,
        );
        get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      }
    } else if (event_marks.find_love === 1) {
      event_marks.find_love++;
      await print_event_name(
        `与${zensky.name}于黄昏之时在海边观看日落`,
        zensky,
      );
      await era.printAndWait(`某天，训练结束后.`);
      era.printButton('「好，今天的训练计划全部达成了，辛苦了.」', 1);
      await zensky.say_and_wait(
        `呵呵，能够感受到风的气息与草地的芳香，我也是兴致高涨呢♪`,
      );
      await era.printAndWait(
        `${zensky.name}舒展着自己的身体，完美的身体曲线被${me.name}深深刻进了脑海里.`,
      );
      await zensky.say_and_wait(
        `呼——训练结束后也有些疲惫呢，${
          callname
        }，可以和${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我一起去喫茶店吗？`,
      );
      era.printButton('「当然可以」', 1);
      await era.printAndWait(
        `作为绅士（虽然是个变态）没有不接受成熟淑女请求的道理，于是两人来到了${zensky.name}最喜欢的喫茶店附近.`,
      );
      await era.printAndWait(
        `在走过被黄昏的光线剪得悉悉索索的树荫后，穿过杂草丛生的院子来到二楼时，此刻才算是找到了喫茶店的入口.`,
      );
      await era.printAndWait(
        `店主似乎是一个不苟言笑的老人,在被透过百叶窗的光线照耀下显得更加佝偻,岁月给他造成了不可逆转的伤害,但那双大手却如以往一样灵巧有力.`,
      );
      await era.printAndWait(
        `${zensky.name}熟练地上前点单，在闲聊几句后将话题一转介绍起了${me.name}.`,
      );
      await era.printAndWait(
        `店主停下手中的活计，细细的打量了${me.name}一番，${me.name}的身体不由得坐直了.`,
      );
      await era.printAndWait(
        `老人点了点头，像是认可了${me.name}一样，将一份略显陈旧但依然干净的菜单递给了${me.name}.`,
      );
      await era.printAndWait(
        `正当${me.name}在思考该点些什么的时候，${zensky.name}向${me.name}搭话了.`,
      );
      await zensky.say_and_wait(`${callname}是第一次来这种店铺吧？`);
      await zensky.say_and_wait(
        `店主虽然脾气有点古怪，不过人还是很好的！手艺的话就更不用说了,来这里的不尝一下水果圣代的话那就太可惜了♪`,
      );
      era.printButton('「请给我来一份水果圣代」', 1);
      await era.printAndWait(
        `老式的留声机播放着上世纪流行的爵士乐,在黄昏的衬托下营造出了时光交错般美好氛围.`,
      );
      era.printButton('「(这里的时光仿佛比其他地方流动的还要缓慢啊)」', 1);
      await zensky.say_and_wait(`${callname}，水果圣代已经好了哟.`);
      await era.printAndWait(`${zensky.name}的话语把${me.name}拉回了现实，木制餐盘上的精致圣代插上了两根勺子.
  `);
      era.printButton('（店主是特意的这么放的吗）', 1);
      await zensky.say_and_wait(`${callname}，我来喂${me.name}吧？`);
      await era.printAndWait(
        `斜射在${zensky.name}后背的光线遮住了${
          zensky.sex
        }的表情，耳朵的不停抖动似乎正预示着${zensky.sex}内心的不平静.`,
      );
      await era.printAndWait(`${zensky.name}正等着${me.name}的答复.`);
      era.printButton('「(无言地张开嘴)」', 1);
      era.printButton('「非常抱歉我还有工作要去处理」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${zensky.name}将满满一勺的圣代送进了${me.name}的嘴里.冰凉的触感一瞬间占据了整个脑海，紧接着感受到的是柔软与绵密.`,
        );
        await era.printAndWait(
          `正当${me.name}打算开口称赞时，青涩与甘甜的味道在${me.name}的口中满满扩散开来.`,
        );
        await zensky.say_and_wait(`${callname}，味道怎么样？`);
        era.printButton('「非常美味」', 1);
        await era.input();
        await zensky.say_and_wait(`真的吗!那${me.name}也来喂我吧？`);
        await zensky.say_and_wait(`啊～嗯`);
        await era.printAndWait(
          `${zensky.name}正催促着${me.name}的行动,双耳抖动得更加激烈了.`,
        );
        era.printButton('「只能上了！」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name}努力平复心中的激动,从圣代里挖出一大勺，颤颤惊惊的放进了${zensky.sex}的樱桃般的小嘴里.`,
        );
        await era.printAndWait(
          `${zensky.sex}那明亮的,整齐的,珐琅质的牙齿似乎也带着一丝深情.`,
        );
        await zensky.say_and_wait(
          `味道真不错⭐${callname},接下来换我来喂${me.name}吧♪`,
        );
        await era.printAndWait(
          `嘴角微微凹下的${zensky.sex}，隐隐间带着一丝笑意.`,
        );
        await era.printAndWait(
          `之后${me.name}和${zensky.sex}默默无言,${me.name}一勺我一勺地喂对方吃下了自己勺中的圣代.`,
        );
        await era.printAndWait(
          `黄昏带来的淡淡忧伤感似乎也被${zensky.sex}的身影所冲淡.`,
        );
        await zensky.say_and_wait(`要一起去海边兜风吗，小塔好像也跃跃欲试呢♪`);
        await era.printAndWait(`${zensky.sex}带着期待的目光看向了${me.name}.`);
        era.printButton('「出发吧」', 1);
        await era.input();
        await era.printAndWait(`呵呵♪我就知道${callname}会这么说。`);
        await zensky.say_and_wait(`那么,现在就出发吧！`);
        await era.printAndWait(
          `沉默的店主默默将餐点与饮品收拾好后,细细打量着${me.name}`,
        );
        await era.printAndWait(
          `一炷香后,才向${me.name}点了点头，似乎是认可了${me.name}的样子.`,
        );
        await zensky.say_and_wait(`${callname},该出发了！`);
        await era.printAndWait(`${zensky.name}在门口轻声催促着${me.name}.`);
        await era.printAndWait(
          `${me.name}从钱包中抽出马币准备付款时,店主略微摇了摇头,然后继续擦起了高脚杯.`,
        );
        era.printButton('「……谢谢」', 1);
        await era.input();
        await era.printAndWait(`然后${me.name}正准备离开时`);
        await era.printAndWait(`店主:这位客人,与${me.name}的小女友好好度过吧.`);
        await era.printAndWait(
          `带着磁性而厚重的声音从${me.name}的左侧传来,${me.name}愕然回头,发现店主严肃中带着一丝略微不可察觉的笑意看着${me.name}.`,
        );
        await era.printAndWait(`店主:本店也要打烊了,客人还有什么事情吗？`);
        await era.printAndWait(
          `于是${me.name}头也不回地离开了这里，走向了${zensky.name}所在的门口.`,
        );
        await zensky.say_and_wait(
          `${callname},怎么这么久啊，我带${me.name}出去吧,毕竟这里没有熟悉的人引导是很容易迷路的呦！`,
        );
        await era.printAndWait(
          `在七拐八拐后从商业街熙熙攘攘的人流之中窜出属实让${me.name}大感意外.没花多久坐上小塔后,${me.name}开始与${zensky.name}闲聊起来了.`,
        );
        await zensky.say_and_wait(
          `哼哼♪${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我品味很不错吧,这可是我妈妈推荐的店哦！`,
        );
        era.printButton('「那位店主年龄看上去蛮大了」', 1);
        await era.input();
        await zensky.say_and_wait(
          `因为他已经经营这家店铺三十年了,我小时候就和父母一起来这边喝咖啡吃甜点了.`,
        );
        await zensky.say_and_wait(`虽然店主看起来很严厉，其实他是一个好人呢！`);
        await era.printAndWait(
          `就这样一问一答,进入了环山高速之后，车流便渐渐稀疏起来`,
        );
        await zensky.say_and_wait(
          `果然像这样子和训练员还有小塔一起兜风的感觉真是舒服啊，跟随着激烈的节拍，心情仿佛也一下子高涨了起来了！`,
        );
        await era.printAndWait(
          `${zensky.name}的耳朵伴随的激烈的节奏打起了节拍,${me.name}似乎稍微跟不上${zensky.sex}的节奏了.`,
        );
        await era.printAndWait(
          `在仿佛经过一个世纪才满满舒缓下来的激烈节奏后，伴随着小塔驶出高速车道，${me.name}总算舒了一口气。`,
        );
        await zensky.say_and_wait(
          `呵呵♪风的气息吹拂在脸上的感觉真是令人心潮澎湃，小塔也很高兴呢♪`,
        );
        await zensky.say_and_wait(`……${callname}，${me.name}还好吗。`);
        await era.printAndWait(
          `${zensky.name}放慢了车速，${me.name}的灵魂终于从三女神那回到了自己的身体里`,
        );
        await zensky.say_and_wait(
          `对不起，没有考虑到训练员的状态，作为${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我还真是失策.`,
        );
        await era.printAndWait(
          `${zensky.name}的两只耳朵耷拉了下来，带着愧疚和担心的复杂眼神射向了${me.name}`,
        );
        era.printButton('「没有这回事，能够感受到风的气息我也很开心」', 1);
        await era.input();
        await era.printAndWait(
          `${zensky.name}的耳朵又立刻竖了起来，耳朵也开始随着车载音响播放的shoreline一抖一抖的打着节拍`,
        );
        await zensky.say_and_wait(
          `训练员真是个温柔的人呢，连${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我都觉得喜欢上${me.name}是个正确的决定呢♪`,
        );
        await zensky.say_and_wait(
          `不过话说回来，${callname}每天都要负责这么多孩子，身体吃的消吗？`,
        );
        era.printButton('「摇头」', 1);
        await era.input();
        await zensky.say_and_wait(
          `嗯嗯，这样最好不过了，训练员也真是一个辛苦的职业啊.`,
        );
        await zensky.say_and_wait(
          `不过看着孩子们一点点褪去青涩的外壳逐渐成熟追逐着自己的梦想，我也有一种说不清的感动和愉悦的心情.`,
        );
        await zensky.say_and_wait(
          `或许训练员与${zensky.get_uma_sex_title()}之间的关系，也就是作为师傅与徒弟一样.`,
        );
        await zensky.say_and_wait(
          `看着孩子们从刚接触的陌生与打量走向亲密与信赖，然后在三年的目标结束之后.`,
        );
        await zensky.say_and_wait(
          `作为师傅的训练员与身为徒弟的${zensky.get_uma_sex_title()}积累了非常深厚的羁绊，这份羁绊又化作力量带来了奇迹,然后二人朝着更大的目标前进.`,
        );
        era.printButton(
          `「作为训练员,衷心祝愿自己所负责的${zensky.get_uma_sex_title()}能在追求目标的道路上一帆风顺」`,
          1,
        );
        await era.input();
        era.printButton('「除此之外，再向前一步就是三女神的宠爱了」', 1);
        await era.input();
        await zensky.say_and_wait(
          `呵呵♪训练员真是给了我一个有趣的答复，作为${zensky.get_uma_sex_title()}我也希望能在这三年内能和${callname}一起积累更多美好的回忆呢.`,
        );
        await zensky.say_and_wait(
          `那么接下来也请多指教了,${era.get('cflag:0:性别') - 1 ? '训·练·员·酱' : '训·练·员·君'}♪`,
        );
        await era.printAndWait(
          `天空虽然东边被太阳染成了橙红色，但头顶却依然是深沉的蓝，太阳与星星的交汇一处那渐变的色彩真是怎么看也看不够`,
        );
        await era.printAndWait(`${me.name}忍不住打了一个呵欠.`);
        await zensky.say_and_wait(
          `训练员如果困了的话，可以在副驾驶座上稍微睡一会哦，到了海边我和小塔会把${me.name}唤醒的。`,
        );
        await era.printAndWait(
          `本来就十分疲惫的身体在听到令人安心的话语之后像如释重负一样安心的闭上了双眼，享受着微风柔和的吹拂以及从丸善身上传来的若有若无的香气`,
        );
        await era.printAndWait(
          `本来就十分疲惫的身体在听到令人安心的话语之后像如释重负一样安心的闭上了双眼，享受着微风柔和的吹拂以及从丸善身上传来的若有若无的香气`,
        );
        era.println();
        era.println();
        era.println();
        await era.printAndWait(`十分钟后`);
        await zensky.say_and_wait(`到了哟，${callname}快醒一醒.`);
        await era.printAndWait(
          `揉着还未睡醒的双眼，下意识地打了一个满足的呵欠,${me.name}试图从晕厥的感觉之中迅速恢复`,
        );
        await era.printAndWait(
          `波浪被礁石打碎成悉悉索索的浪花，随着涨潮之时大海带来的礼物，海星和贝壳在落潮之时又悄声无息的消失不见.`,
        );
        await era.printAndWait(`月亮在闪耀的星星们的簇拥下逐渐登上了高处.`);
        await era.printAndWait(`此刻的大海在海浪的声音中显得更安静.`);
        await era.printAndWait(
          `两人关上车门走向海滩，大海向恋人们展示着自己温柔的一面.`,
        );
        await era.printAndWait(`真安静呢，${callname}也是这么想的吧。`);
        await zensky.say_and_wait(`真安静呢，${callname}也是这么想的吧。`);
        await era.printAndWait(
          `${zensky.name}将脚上的高跟鞋脱了下来，赤足走向了海浪之中.`,
        );
        await zensky.say_and_wait(`${callname}也来感受一下海水的亲吻吧.`);
        await era.printAndWait(
          `${me.name}在${zensky.name}的邀请下同样将鞋子脱下慢慢走向波浪`,
        );
        await era.printAndWait(
          `海水卷起一朵朵浪花,那些浪花像孩童一样嬉闹着涌向岸边，细细抚摸着柔软的沙滩,又恋恋不舍的退回`,
        );
        await era.printAndWait(
          `在永恒的抚摸之下,沙滩上划出了一条条银色的岸边,在月光的照耀下,似乎给大海镶上了闪闪发光的银框`,
        );
        await era.printAndWait(`大自然是最好的画家. `);
        await era.printAndWait(
          `${zensky.name}左手提起自己的裙摆，身体自然的半转向${me.name}.月光给${
            zensky.sex
          }披上了不可侵犯的神圣外衣,海浪拍打礁石激起水汽又带来了一丝朦胧的诱惑,永不停息的海浪又仿佛喻示着少女内心的波澜.`,
        );
        await era.printAndWait(
          `可能连${
            zensky.sex
          }自己都没有意识到,在大自然那无形的画笔之下,自己成了这副镶嵌着银色相框油画的主角.`,
        );
        await zensky.say_and_wait(`月色真美呢，${callname}.`);
        era.printButton('「风也很温柔呢」', 1);
        await era.input();
        await zensky.say_and_wait(`呵呵♪${callname}可真会说话呢.`);
        await era.printAndWait(
          `说话之间${me.name}轻轻搂住了${zensky.name}的腰，虽然${
            zensky.sex
          }像触电一样颤抖了一下，不过似乎对${me.name}的行为也没有抵触的举动.`,
        );
        await zensky.say_and_wait(
          `${callname}没有想过未经同意突然抱住淑女会受到什么惩罚吗?`,
        );
        await era.printAndWait(
          `那双青色的瞳孔中蕴含着一种吸引力，当${zensky.sex}凝视着${me.name}的时候，${me.name}的视线便很难移开，但却并不让人压抑。`,
        );
        await era.printAndWait(
          `如同变幻不定的风之妖姬一样,${zensky.sex}是天空的光线、声音、海洋或者陆地的味道.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${me.name}的嘴唇传来了温柔的感触.`);
        await zensky.say_and_wait(
          `真是的,${
            callname
          }一点也不坦率呢.这个时候不主动一点的话会让人焦躁不安的呦.`,
        );
        await era.printAndWait(
          `从一开始试探般的轻啄,到后来逐渐加快地节奏,最后以重重的深吻作为结尾.直到${me.name}呼吸不过来才依依不舍地分开.`,
        );
        await era.printAndWait(
          `两人的嘴唇之间拉出了一道银丝.${
            zensky.sex
          }带着无限爱意而又温柔的表情看向了${me.name}.`,
        );
        await era.printAndWait(
          `${me.name}下意识地紧紧抱住了${zensky.sex},${
            zensky.sex
          }同样也轻抚着${me.name}的脸颊作为回应.`,
        );
        await era.printAndWait(
          `在冰凉的海水中,只有那如同灯塔般温暖的感觉停留了好久.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], 0) &&
          (await era.waitAnyKey());
      } else {
        era.printButton('「非常抱歉我还有工作要去处理」', 1);
        await era.input();
        await zensky.say_and_wait(
          `哎呀，既然这样的话那就快去处理吧，${callname}，好好工作才能得到最终的报酬.`,
        );
        await era.printAndWait(
          `${me.name}沉默着拿起公文包头也不回地离开了喫茶店，不过很快在七拐八拐的小道里迷路了.`,
        );
        await era.printAndWait(
          `最后搭了好心大叔的顺风车${me.name}才勉强在门禁前赶回宿舍.`,
        );
        get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], 0) &&
          (await era.waitAnyKey());
      }
    }
    return true;
  }

  async out_church(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object.arg === 95 + 1) {
      await print_event_name('新年参拜', zensky);
      await era.printAndWait(
        `为了迎接新年.${me.name}和${zensky.name}一起去新年参拜.`,
      );
      await era.printAndWait(
        `实际上也不是为了遵循传统，单纯的只是想要谋求好运气罢了。`,
      );
      await zensky.say_and_wait(
        `果然新年还是在神社祈福对吧？这样比较有新年的感觉呢～！`,
      );
      await zensky.say_and_wait(
        `一年之计在于春，向三女神大人献上一年份的汗水与努力吧！`,
      );
      era.printButton(`「接下来的目标是什么？」`, 1);
      await era.input();
      await zensky.say_and_wait(
        `呵呵～我的目标是——今年也能参加许多有趣的比赛！`,
      );
      await zensky.say_and_wait(
        `而且为了让大家都来追逐我的背影，所以我要比之前更～加大显风采！`,
      );
      era.printButton(`「我会好好协助${me.name}的！」`, 1);
      await era.input();
      await zensky.say_and_wait(
        `${callname}真可靠呢～${era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'}我很稀饭这种感觉哦？`,
      );
      await era.printAndWait(`话说回来，接下来努力的方向是?`);
      era.println();
      era.printButton(`「基本的健康管理！」`, 1);
      era.printButton(`「大概是各方面都很均衡的训练吧！」`, 2);
      era.printButton(`「应该是磨练自己的长处吧！」`, 3);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(
          '俗话说『居移气，养移体』，注意身体健康确实很重要呢.',
        );
        await zensky.say_and_wait('决定了！接下来的目标是身体健康管理！');
        await zensky.say_and_wait('好了，赶快进去吧！');
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 0, [600]) &&
          (await era.waitAnyKey());
      } else if (ret === 2) {
        await zensky.say_and_wait(
          '原来如此！只要各方面都平均训练的话，就能比之前更上一层楼吧！',
        );
        await zensky.say_and_wait(
          '好，包在我身上！我在训练的时候也会更加注意这一点的！',
        );
        await zensky.say_and_wait('那么，已经决定好的话，就赶快进去吧！');
        era.println();
        get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait('说到我的长处的话，果然还是驾驶技术吧？');
        await zensky.say_and_wait('才怪～我在开玩笑呢！是要磨砺跑步技能对吧?');
        await zensky.say_and_wait('OK！训练的时候我也会注意这一方面的.');
        await zensky.say_and_wait('嗯，稍微耽搁了一下下呢，赶快进去吧！');
        era.println();
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 100) &&
          (await era.waitAnyKey());
      }
    }
    era.set('cflag:4:节日事件标记', 0);
  }

  async school_rooftop(zensky, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 4) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_weeks = era.get('cflag:4:育成回合计时'),
      event_marks = new MaEduMarks();
    if (event_marks.beautiful_winner === 1) {
      event_marks.beautiful_winner++;
      await print_event_name('又酷又炫的必胜法！', zensky);
      const chara_30 = get_chara_talk(30);
      await era.printAndWait(
        `某日，${me.name}与${zensky.name}为了开午餐会议，来到天台吃饭的时候——`,
      );
      await era.printAndWait(`听到了微弱的哭泣声。`);
      await zensky.say_and_wait(`咦——这个声音是？`);
      await zensky.say_and_wait(`${me.name}在这里干什么啊，米浴？`);
      await chara_30.say_and_wait('米浴……米浴是一个没用的孩子。');
      await chara_30.say_and_wait(
        '明明好不容易才邀请米浴一起玩警察抓小偷游戏的.',
      );
      await chara_30.say_and_wait(
        '只有米浴还没有被抓住……明明朋友们为了掩护我都被抓住了，米浴该怎么办才好呢……',
      );
      await era.printAndWait(
        `听完米浴的话后，${zensky.name}和${me.name}一齐向下方看去，发现在中庭的中心有个像监狱一样的地方。`,
      );
      await era.printAndWait(
        `${me.name}看向${zensky.name}，${zensky.sex}似乎有想法了.`,
      );
      await zensky.say_and_wait(`那么，来教${me.name}必胜法吧♪？`);
      await zensky.say_and_wait(
        `以体力决胜的A计划和以智慧取胜的B计划，${me.name}觉得哪个比较好呢？`,
      );
      await chara_30.say_and_wait('米浴……米浴也不知道,');
      await era.printAndWait(
        `米浴的目光捕捉到了${me.name}的存在，似乎是看到救星了一样看向${me.name}.`,
      );
      await era.printAndWait(`${zensky.name}似乎在等待着${me.name}的答案`);
      era.printButton('「以体力决胜的A计划」', 1);
      era.printButton('「以智慧取胜的B计划」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await zensky.say_and_wait(`OK！那就采取A计划吧！`);
        await zensky.say_and_wait(
          `米浴${me.name}不是很擅长忍耐吗？那么${me.name}走过去让对面注意到${
            me.name
          }的存在，然后${me.name}与${
            zensky.sex
          }保持一个相对稳定的距离，等到对方体力耗尽的时候就不得不停下来了.`,
        );
        await chara_30.say_and_wait('这，这种事情……米浴能办到吗？');
        await zensky.say_and_wait(
          `绝对能办到！小米浴做事认真又努力，意志力又很强，而且是我自豪地后辈哦！`,
        );
        await zensky.say_and_wait(`绝对没问题哟♪`);
        await chara_30.say_and_wait(
          `既然是丸善${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }的保证，米、米浴……那个，会，会去试试看……!`,
        );
        await zensky.say_and_wait(
          `呵呵♪，托${me.name}的福，我也想到能够增强耐力的训练项目了`,
        );
        await era.printAndWait(
          `没过多久，${me.name}和${zensky.name}就看到了米浴成功解救同伴的小小身影。`,
        );
        get_attr_and_print_in_event(4, [0, 10, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else {
        await zensky.say_and_wait(`OK！那就采取B计划吧！`);
        await zensky.say_and_wait(
          `简单的说，就是把对面引诱到地势复杂的地方，比如说校舍之类的，然后在分叉处甩掉对方！`,
        );
        await chara_30.say_and_wait('米、米浴，做得到这种事情吗……!');
        await chara_30.say_and_wait('可以的！米浴不是很擅长思考吗？');
        await era.printAndWait(`${zensky.name}说着紧紧地握住了米浴的手。`);
        await zensky.say_and_wait(
          `只要冷静下来好好思考，米浴一定没问题的！好吗？`,
        );
        await chara_30.say_and_wait('唔 ……米浴……会试试看……！');
        await zensky.say_and_wait(
          `……呵呵，既然都对后辈这么说了，作为${
            era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
          }我也要好好做到才行呢。`,
        );
        await era.printAndWait(
          `没过多久，${me.name}和${zensky.name}就看到了米浴成功解救同伴的小小身影.`,
        );
      }
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], 0) &&
        (await era.waitAnyKey());
      return true;
    } else if (edu_weeks === 47 + 22 && event_marks.girls_blue === 2) {
      event_marks.girls_blue++;
      await era.printAndWait(`马娘作为普通的赛马娘引退。`);
      await era.printAndWait(
        `或许是因为终于从话语之中解脱，又或者是为了感谢到这一步依然支持自己的粉丝。她换上了打算G1胜利时站在胜者舞台中央所穿的自己设计的决胜服——`,
      );
      await era.printAndWait(
        `尽管这是当年心高气傲的她打算在G1胜利时穿着自己设计的决胜服飒爽登场，`,
      );
      await era.printAndWait(
        `后来妥协到了G2胜利，之后又含着泪水改成了入着即可。或许是因为曾经有过这样的经验，此刻的她看起来就像彗星一样美丽`,
      );
      await era.printAndWait(`作为知情者之一的你自然也参加了这场告别演出。`);
      await say_by_passer_by(`马娘A`, `谢谢大家！`);
      await era.printAndWait(
        `含着泪水的马娘带着笑容看向了参加了这场演出的粉丝们——`,
      );
      await era.printAndWait(
        `不知怎的，像是在偷偷看着什么，又好像在刻意无视什么一样。`,
      );
      await era.printAndWait(`这份令人不快的违和感。`);
      await era.printAndWait(`你逆着马娘刻意忽略的方向看过去——`);
      await era.printAndWait(`那边的，是沉默的看着演出的${zensky.name}。`);
      await era.printAndWait(`应该在这种时候和她说话吗？`);
      era.printButton(`再怎么说还是要看气氛才行`, 1);
      era.printButton(`……不对`, 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await era.printAndWait(`这个时候上去搭话过于看不懂气氛了。`);
        await era.printAndWait(`于是你悄悄离开了这个地方。`);
      } else {
        await me.say_and_wait(`抱歉，借过。`);
        await era.printAndWait(
          `不停的将周围的人群排开，你走到了${zensky.name}附近。`,
        );
        await me.say_and_wait(`……${zensky.name}。`);
        await era.printAndWait(
          `尽管一开始就打算向她提出的问题，现在到了关键时刻反而不知道该说些什么比较好了。`,
        );
        await zensky.say_and_wait(`欸？`);
        await era.printAndWait(`${zensky.name}带着不可置信的表情看着你。`);
        await zensky.say_and_wait(
          `${me.actual_name}怎么会……抱歉，现在思绪有些混乱了。`,
        );
        await era.printAndWait(
          `尽管语气与之前相比更加轻快，但那份刺耳的刻意感却让你感到了难过。`,
        );
        era.printButton(`……${zensky.name}。`, 1);
        era.printButton(`我有个问题想问`, 2);
        const ret2 = await era.input();
        if (ret2 === 1) {
          await zensky.say_and_wait(
            ` ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，可以借一下你的肩膀吗？`,
          );
          await era.printAndWait(
            `你无言的借过肩膀，${zensky.name}紧紧抱住了你的手臂。`,
          );
          await era.printAndWait(
            `欢声笑语的背后是终于解脱的枷锁与随之而来的迷茫，而两人只是沉默的看着发生的一切。`,
          );
        } else {
          await me.say_and_wait(`请等一下，${zensky.name}。`);
          await zensky.say_and_wait(
            `抱歉， ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}。`,
          );
          await zensky.say_and_wait(`这里的声音太大，我恐怕听不清你问的问题。`);
          await zensky.say_and_wait(`有什么问题，可以回去再说吗？`);
          await era.printAndWait(
            `${zensky.name}恍若置身于风暴之中，对你的问题充耳不闻。`,
          );
          await era.printAndWait(
            `偶然间与匆匆离开的${zensky.name}对视，却看到了她失神的眼眸，（玩家名）一时之间不知该如何是好，只能目送对方离去。`,
          );
        }
      }
      event_marks.wind--;
      event_marks.mygo++;
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 10], 0) &&
        (await era.waitAnyKey());
      return true;
    }
  }

  async crazy_fan_end() {
    const event_marks = new MaEduMarks(),
      zensky = get_chara_talk(4),
      callname = sys_get_callname(this.id, 0),
      me = get_chara_talk(0);
    if (event_marks.Self_contempt === 1) {
      event_marks.Self_contempt++;
      await era.printAndWait(`训练室\n`);
      await zensky.say_and_wait(`${me.actual_name}，我先回去了，明天见！`);
      await era.printAndWait(`${zensky.name}离开了训练室。`);
      await era.printAndWait(
        `天色昏暗，与昨天并无不同的工作日，黄昏与夜晚的交界处所呈现的蓝色光线照射进了训练室中。`,
      );
      await era.printAndWait(`你呆呆的坐在训练室那张熟悉的座位之上。`);
      await era.printAndWait(`不是为了追加训练，也不是打算制定计划。`);
      await me.say_and_wait(`也许我应该就此退出更好一点。`);
      await era.printAndWait(
        `不是因为${zensky.name}能力不足。正相反，她出色的完成了每一项计划，甚至反过来根据自己的实际经验反过来对你进行指点。`,
      );
      await era.printAndWait(`真正的问题在于\n`);
      await me.say_and_wait(
        `${zensky.name}这块质量极高的原石，应该由更好的雕琢匠来打造。`,
      );
      await me.say_and_wait(`我的能力不足，仅此而已。`);
      await me.say_and_wait(
        `为了${zensky.name}着想，我不能再继续装下去了，必须找个机会跟她坦白。`,
        true,
      );
      await era.printAndWait(
        `你轻柔的抚摸着那张在海边拍摄的，与${zensky.name}合影的照片，然后撕成两半，再将碎片堆在一起，再次撕成两半。`,
      );
      await me.say_and_wait(
        `最好的原石应该由最好的工匠打磨，我做的是正确的事情。`,
      );
      await era.printAndWait(`直到面无表情地撕到了不能再继续分下去为止。`);
      await era.printAndWait(
        `小心地，仔细地，确保一粒微小地碎片都不会逃出掌心。`,
      );
      await era.printAndWait(
        `打开窗户，不给自己反应的时间，重重地将手中的碎片扔向了天空。`,
      );
      await era.printAndWait(
        `看着想要飞上天空的余烬，最后无可奈何的坠入大地之上，你的心也随之而去。`,
      );
      await me.say_and_wait(`差不多该和${zensky.name}交代一切了。`, true);
      await era.printAndWait(`你离开了训练室，这个曾经挥洒泪水与汗水的地方。`);
      await era.printAndWait(`然后重重的关上了门。\n\n\n\n\n\n`);
      await era.printAndWait(`——黏在办公桌上的一便利贴`);
      await era.printAndWait(`与担当马娘${zensky.name}于天台见面。`);
      await era.printAndWait(`……`);
      await era.printAndWait(`出道战结束后与${zensky.name}在预订餐厅庆祝。`);
      await era.printAndWait(`……`);
      await era.printAndWait(
        `等到皋月赏结束后，向${zensky.name}学习开车以及做饭的技巧（注：${zensky.name}做饭非常好吃！）。`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(`感谢一直以来的陪伴，是我承受不住压力，对不起。`);
      await print_event_name('BAD END:木旺土溃', zensky);
      await era.printAndWait(`不久后，你单方面向理事长提出了辞职申请。`);
      await era.printAndWait(
        `从此，那片失去了营养的泥土再也没有新的嫩芽探出头。`,
      );
    } else if (event_marks.happiness_day === 1) {
      event_marks.happiness_day++;
      await era.printAndWait(
        `虽然不知道之后发生了什么，不过${zensky.name}依然没有什么变化。`,
      );
      await era.printAndWait(
        `在那之后，按照所制定的计划，每一步都踏踏实实的结束了。`,
      );
      await era.printAndWait(`不久之后——`);
      await era.printAndWait(`机场\n`);
      await zensky.say_and_wait(`${me.actual_name}，送到这里就可以了。`);
      await me.say_and_wait(`到了巴黎后，要给我发消息哦？`);
      await zensky.say_and_wait(
        `呵呵～当然，虽然只是两个月的旅行，不过终于有机会可以去埃菲尔铁塔参观了。`,
      );
      await zensky.say_and_wait(
        `${me.actual_name}也是，不要在我离开的时候勾搭其他马娘哦？`,
      );
      await me.say_and_wait(`啊哈哈哈`);
      await zensky.say_and_wait(`你这家伙`);
      await era.printAndWait(`你被她狠狠的用食指敲了一个暴栗。`);
      await me.say_and_wait(`好痛！`);
      await zensky.say_and_wait(`活该——真是让人不省心的家伙。`);
      await zensky.say_and_wait(`那么，我该出发了。`);
      await me.say_and_wait(`一路顺风！`);
      await zensky.say_and_wait(`${me.actual_name}回去的时候也要一路顺风哦！`);
      await era.printAndWait(`不知为何，${zensky.name}露出了寂寞的表情。`);
      await zensky.say_and_wait(`${me.actual_name}……不，没什么。`);
      await zensky.say_and_wait(`差不多该出发了。`);
      await era.printAndWait(`你看着${zensky.name}的身影消失在了人群之中。`);
      era.drawLine();
      await era.printAndWait(
        `作为三年以来互相扶持的担当,虽然互有好感,但始终无法更近一步.`,
      );
      await era.printAndWait(`究竟是缺少了什么呢？`);
      await era.printAndWait(`不过,像这样平稳的结束也是一种幸福吧.`);
      await me.say_and_wait(`今天真是个好天气啊。`, true);
      await era.printAndWait(
        `你眯着眼，看着飞机在天空之中划破薄薄云朵，拖出一道白色的细线。`,
      );
      await era.printAndWait(
        `几曾何时，你也在这种天气下看着${zensky.name}依靠在天台栏杆上眯着眼轻轻哼唱歌曲的样子，顺着她的歌声飘去的地方.`,
      );
      await era.printAndWait(`那就是飞机云了吧,心里这么想着。`);
      await era.printAndWait(`今天也这么平安度过了。`);
      await era.printAndWait(
        `希望${zensky.name}也是，每天都是这样无病无灾的度过。`,
      );
      await era.printAndWait(
        `说起来,距离新马娘入学也快了.得赶快挖掘出新的原石才行.`,
      );
      await era.printAndWait(
        `——就像在那段忧郁的日子里,${zensky.name}也从未放弃过那样.`,
      );
      await era.printAndWait(
        `已经一去不复返了,最后看了一眼她所前去的方向,你随后头也不回的离开.`,
      );
      await print_event_name('NORMAL END:平淡的每一天', zensky);
    } else if (event_marks.crazy_fan === 1) {
      event_marks.crazy_fan++;
      //节拍1 行动：丸善斯基提示到站了 反应：接过了玩家手中的行李箱 价值负荷正或负？亲密/孤独(-)
      await era.printAndWait(`机场`);
      await zensky.say_and_wait(`送到这里就可以了。`);
      await era.printAndWait(
        `${zensky.name}接过了${me.actual_name}紧握着的行李箱。`,
      );
      //节拍2 行动：玩家对丸善斯基即将离开表示不舍 反应：丸善斯基安慰训练员 亲密/孤独(-)
      await me.say_and_wait(`到了巴黎记得给我发消息。`);
      await zensky.say_and_wait(`不用这么担心啦⭐只是去巴黎旅行一段时间。`);
      //节拍3 行动：丸善斯基摸了摸头 反应：玩家害怕失去 失/得(-)
      await era.printAndWait(`${zensky.name}笑着摸了摸${me.actual_name}的头。`);
      await era.printAndWait(
        `比起任何时候都要温柔的抚摸，${me.actual_name}却感到了恐惧。`,
      );
      await me.say_and_wait(`路上小心……无论如何也说不出口`, true);
      //节拍4 行动：丸善斯基鼓励训练员 反应：玩家笑着接受了这份鼓励 失/得(+)
      await zensky.say_and_wait(
        `即使身处异国他乡，我们之间相系的纽带也不会断开。`,
      );
      await zensky.say_and_wait(`所以，勇敢一点吧，我最喜欢的${callname}。`);
      await me.say_and_wait(`……是啊，我感受到了这份温暖在我的心中涌动。`);
      //节拍5 行动：丸善斯基准备离开 反应：玩家目送丸善斯基离开 失/得(-)
      await me.say_and_wait(`那么，该出发了——`);
      await zensky.say_and_wait(`——是啊，现在是分别的时候了。`);
      await era.printAndWait(`紧握住的双手分开了。`);
      await era.printAndWait(
        `${me.actual_name}看着${zensky.name}提着行李箱准备离开。`,
      );
      //节拍5 行动：玩家紧紧抱住了丸善斯基 反应：丸善斯基准备挣脱 亲密/孤独(--)
      await me.say_and_wait(`${zensky.name}！`);
      await era.printAndWait(`${me.name}采取了行动。`);
      await zensky.say_and_wait(`！`);
      await era.printAndWait(
        `${me.actual_name}紧紧地抱住了${
          zensky.sex
        }，周围的旅客不由得停下了脚步看着${me.get_couple_title()}。`,
      );
      await zensky.say_and_wait(`${me.actual_name}，放开我。`);
      await era.printAndWait(`从未听过的${zensky.name}焦躁的声音。`);
      //节拍6 行动：玩家追击 反应：丸善斯基沉默流泪 失/得(-)
      await me.say_and_wait(`这样就好，让我再感受一下${me.name}的温度。`);
      await me.say_and_wait(`我还是无法说服自己。`);
      await me.say_and_wait(`那道风，那道温柔的风，就要在我眼前消失了。`);
      await zensky.say_and_wait(`——${callname}`);
      await era.printAndWait(`努力抑制着悲伤的少女。`);
      //节拍7 行动：丸善斯基反过来紧紧抱住了玩家 反应：玩家感受到了丸善斯基的孤独 失/得(++)
      await era.printAndWait(`然后————`);
      await me.say_and_wait(`${zensky.name}`, true);
      await era.printAndWait(`紧紧抱住了${me.actual_name}`);
      await zensky.say_and_wait(`我也害怕，害怕失去${callname}`);
      await zensky.say_and_wait(`痛苦也好，悲伤也好，都不想再一个人承担了。`);
      await zensky.say_and_wait(
        `和${me.name}一起，一起感受风的吹拂，一起感受清晨的到来`,
      );
      await zensky.say_and_wait(
        `呐，${callname}，就这样一起离开吧，离开这个悲伤的地方。`,
      );
      //节拍7 行动：玩家坚决拒绝 反应:更大的悲伤 亲密/孤独(---)
      await me.say_and_wait(`抱歉`);
      await era.printAndWait(`${me.name}的心在滴血`);
      await me.say_and_wait(`我犯下的罪孽，我现在就要为此赎罪。`);
      await era.printAndWait(
        `直视着${zensky.name}因悲伤而扭曲着的脸，继续说了下去。`,
      );
      await me.say_and_wait(
        `如果就这样一走了之，那么作为训练员的我就已经死了。`,
      );
      await me.say_and_wait(
        `失去了训练员这一身份，作为训练员实现培养${zensky.get_uma_sex_title()}的这一理想也就不复存在了。`,
      );
      await me.say_and_wait(`失去了理想的我，只会堕落到更深的地狱。`);
      await me.say_and_wait(`所以，离开吧，从我身边就此离开吧。`);
      //节拍8 行动：两人接吻 反应:发誓一定会再次见面 亲密/孤独(++++) 失/得(++)
      await era.printAndWait(
        `${me.name}反过来抚摸着${zensky.name}柔软的秀发，感受着${
          zensky.sex
        }的心跳。`,
      );
      await me.say_and_wait(`所以${zensky.name}————`);
      await era.printAndWait(
        `略带一丝铁锈味的舌头强行进入了${me.name}的口腔。`,
      );
      await era.printAndWait(`短暂接触后，又依依不舍的分离。`);
      await zensky.say_and_wait(
        `我可不会就这么轻易放弃的，所以说，${callname}`,
      );
      await era.printAndWait([
        zensky.get_colored_name(),
        '/',
        me.get_colored_name(),
        '「',
        {
          content: '无论身处何地，',
          color: zensky.color,
        },
        '我们的心永远在一起。」',
      ]);
      await zensky.say_and_wait(`那么，再一次。`);
      await era.printAndWait(`无需言语，享受着稍纵即逝的幸福。`);
      await era.printAndWait(`————直至二人分离`);
      await print_event_name('雨天', zensky);
    } else if (event_marks.broken_tears === 1) {
      zensky.print(
        ` ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}，你看到这封信的时候，我已经在飞向巴黎的航班了吧。`,
      );
      zensky.print(`请原谅我的不辞而别。`);
      zensky.print(
        `坦率的说，和 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}相遇的日子，每一天都过得很幸福。`,
      );
      zensky.print(
        `所以，我没有责怪 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}的意思。`,
      );
      zensky.print(`只是，我有点无法面对接下来的道路，不知道该如何是好。`);
      zensky.print(
        `我已经向理事长申请了三个月的休学，打算这段时间在法国旅游转换心情。`,
      );
      zensky.print(
        `说不定在这段时间就想通该怎么面对 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}和后辈们了呢♪`,
      );
      zensky.print(
        `……就跟 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}所想的一样，我不过是一个夹着尾巴逃跑的懦弱马娘。`,
      );
      zensky.print(`……想来想去，恐怕也只有这条路可以走了呢。`);
      zensky.print(
        `虽然就这么抛下这边的后辈们内心多少还是有罪恶感……不，她们凭借自己的努力一定会超过我的！`,
      );
      zensky.print(
        `我发自内心的相信，她们一定会变得更加勇敢，更加努力的向着更高的顶峰奔跑。`,
      );
      zensky.print(
        `啊，好像过于消极了呢。这样子可不像${
          era.get('cflag:4:性别') - 1 ? '姐姐' : '哥哥'
        }大人。`,
      );
      zensky.print(`等到了法国，我会将这边的风土人情通过照片和视频发过来。`);
      zensky.print(
        `到时候和以前一样，拜托 ${era.get('cflag:0:性别') - 1 ? '训练员酱' : '训练员君'}发在马推上了哦？`,
      );
      zensky.print(`到时候后辈们也会大吃一惊吧！`);
      zensky.print(`就这么说定了哦！\n\n\n\n\n\n`);
      zensky.print(`对不起。`);
      await era.printAndWait(
        `信的最后一行被泪水沾湿，向四周扩散的字迹模糊不清。`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(
        `但是${zensky.name}已经不会再回来了。你心中比谁都清楚。`,
      );
      await era.printAndWait(`无可奈何。`);
      await print_event_name('丸善斯基的信', zensky);
    } else {
      await super.crazy_fan_end();
    }
  }
};
