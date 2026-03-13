/**
 * @file 北部玄驹 - 育成
 * @author 小黑
 */
const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const kita_back_school = require('#/event/edu/edu-events-68/back-school');
const kita_out_start = require('#/event/edu/edu-events-68/out-start');
const kita_race_end = require('#/event/edu/edu-events-68/race-end');
const kita_week_end = require('#/event/edu/edu-events-68/week-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const { location_enum } = require('#/data/locations');
const { attr_enum, fumble_result } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async back_school(kita, me, callname, hook, extra_flag, event_object) {
    return await kita_back_school(kita, me, hook, event_object);
  }

  async crazy_fan_end() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    if (new KitaEduMarks().crazy_fan) {
      await kita.say_and_wait(`抱歉，训练员${me.get_adult_sex_title()}。`);
      await era.printAndWait(
        `站在返回家乡的车站，${kita.name} 对 ${me.name} 深深地鞠了一躬。`,
      );
      await era.printAndWait(
        `以往活泼的${kita.teen_sex_title}此时面色苍白，眼袋肉眼可见的红肿起来，似乎是哭过的样子。`,
      );
      await era.printAndWait(
        `因为比赛失败的原因，愤怒的粉丝为此冲击了校园，希望把 ${me.name} 这个「罪魁祸首」处刑掉。`,
      );
      await era.printAndWait(
        '虽然最后这件事莫名平静了下来，但是小北已经不能够继续在特雷森学园训练了。',
      );
      era.println();
      era.printButton(`「对不起，小北。」`, 1);
      await era.input();
      await kita.say_and_wait(
        `不，应该是我对不起您才对，训练员${me.get_adult_sex_title()}是什么错也没有的。`,
      );
      await era.printAndWait(
        `露出惨淡的微笑，${kita.name} 忍不住又一次流下泪来。`,
      );
      await era.printAndWait(
        `在这短短的几天里，${kita.teen_sex_title}到底哭泣过多少次了呢。`,
      );
      await kita.say_and_wait(
        `果然，小北我并不是什么能够胜利的赛${kita.uma_sex_title}呢。`,
      );
      await kita.say_and_wait(
        '样貌普普通通，只有结实这一个优点，真是对不起，耽误了您这么长的时间。',
      );
      await kita.say_and_wait(
        `我会负起责任的，再见了，训练员${me.get_adult_sex_title()}。`,
      );
      await era.printAndWait(
        `登上归乡的巴士，${kita.name} 在嗡嗡作响的手机上说了一句话。`,
      );
      await era.printAndWait(`那声音被风儿吹散，未能传进 ${me.name} 的耳中。`);
      await era.printAndWait(`但在之后，有关 ${kita.name} 的热度莫名的消退。`);
      await era.printAndWait(
        `${me.name} 的训练员生涯中就像是从没有过 ${kita.name} 出现过一样，正常的继续了下去。`,
      );
      await era.printAndWait(
        `但偶尔，${
          me.name
        } 还是会想起那个${kita.teen_sex_title}转身时，那脆弱而苍白的背影。`,
      );
      await print_event_name(
        [
          {
            content: `归乡的 ${kita.name}`,
            color: buff_colors[3],
          },
        ],
        kita,
      );
    } else if (era.get('love:68') < 75 && era.get('relation:68:0') > 75) {
      await era.printAndWait(`在 ${kita.name} 毕业之后过了多久呢。`);
      await era.printAndWait(
        `时间已经记得不太清了，在那位黑色的${me.teen_sex_title}离开之后，${
          me.name
        } 一如既往地像个训练员一样工作。`,
      );
      await era.printAndWait(
        `成为新的孩子的训练员，用稍微有点鬼畜的手段进行训练。`,
      );
      await era.printAndWait(`最后目送着孩子们在三年后离开。`);
      await era.printAndWait(
        `有些孩子会偶尔进行通讯，有些则不会，但是每年一如既往地，${kita.name} 会在你也有时间的时候打电话给你。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}，最近过得怎么样呢？`,
      );
      await kita.say_and_wait(
        `新的担当么？会不会很累？毕竟仔细想想的话，小北我那个时候不是一般的听话呢～`,
      );
      await kita.say_and_wait(
        `我这边么？啊～我在准备演歌手的出道，诶嘿嘿～毕竟父亲大人他年纪也大了嘛。`,
      );
      await era.printAndWait(
        `就这样闲聊着彼此最近的生活，分享着有趣的故事，讨论着那三年的时光。`,
      );
      await era.printAndWait(
        `${kita.name} 嘿嘿笑着同 ${me.name} 互相道着祝贺起彼此，像是往常一样结束了通话。`,
      );
      await me.say_and_wait(`这样就好。`);
      await me.say_and_wait(`这样就可以了。`);
      await print_event_name(
        [
          {
            content: `训练员${me.get_adult_sex_title()}，最近还好么！`,
            color: buff_colors[3],
          },
        ],
        kita,
      );
    } else {
      return await super.crazy_fan_end();
    }
  }

  async out_church(kita, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 47 + 1) {
      return;
    }
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    let wait_flag = false;
    await print_event_name('新年的抱负', kita);
    await era.printAndWait(
      `在神社鸟居旁的角落里，${me.name} 看到了带着滚烫热情的 ${kita.name}，看样子已经等 ${me.name} 等了很久的样子。`,
    );
    await kita.say_and_wait(
      `训练员${me.get_adult_sex_title()}，新年的一年请您多多指教！诶嘿嘿～`,
    );
    await era.printAndWait(
      `${kita.name} 向 ${me.name} 打了个招呼，哒哒哒地跑了过来，小小的靴子在石板上发出了清脆的响声。`,
    );
    await era.printAndWait(
      '看来每年为了祈祷经典年能够顺利进行的祈福传统，让这只小马过于兴奋了呢。',
    );
    await kita.say_and_wait(
      '那么事不宜迟，为了今年的顺利，我们快去神社里参拜吧！',
    );
    await era.printAndWait(
      `穿着一身深色浴衣的 ${kita.name} 抖动着可爱的马耳，拉着你的衣袖笑嘻嘻的催促道。`,
    );
    await era.printAndWait(
      `${me.name} 摸了摸小北的脑袋，和 ${kita.sex} 一起聆听着神社里传来的阵阵声响，走上满是青苔的漫长台阶。`,
    );
    await era.printAndWait('哒、哒、哒……');
    await era.printAndWait(
      `聆听着两人安静而单调的脚步声，${me.name} 和 ${kita.name} 踏过八十八节略显圆滑的台阶。`,
    );
    await era.printAndWait(
      `而在追着迫不及待跑上的${kita.teen_sex_title}走过最后几节台阶后，出现在 ${me.get_couple_title()} 面前的是满是欢声笑语的热闹景象。`,
    );
    await kita.say_and_wait('呜哈哈～就算是东京的神社也和老家的神社差不多啊～');
    await era.printAndWait(
      `${kita.name} 穿过被张灯结彩的纸灯笼束成的小道，小跑着来到神社的赛钱箱前面，认真的拍了两次手，鞠了一躬。`,
    );
    await kita.say_and_wait(
      '唔唔唔……为了明年三月能够有足够的粉丝去比赛，请大家一定要来看我的比赛啊……',
    );
    await era.printAndWait(
      `听着赛${kita.uma_sex_title}小声念叨着自己的愿望，${
        me.name
      } 也拍了拍手，开始祈祷起来。`,
    );
    era.printButton('（希望小北能跑得更快）', 1);
    era.printButton('（希望小北能应对更长的比赛）', 2);
    era.printButton('（希望小北能掌握更多技巧）', 3);
    const ret = await era.input();
    if (ret === 1) {
      wait_flag =
        get_attr_and_print_in_event(68, [25, 0, 0, 0, 0], 0) || wait_flag;
    } else if (ret === 2) {
      wait_flag =
        get_attr_and_print_in_event(68, [0, 20, 0, 0, 0], 0) || wait_flag;
    } else {
      wait_flag = get_attr_and_print_in_event(68, undefined, 20) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(kita, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 95 + 14) {
      return;
    }
    await print_event_name('粉丝感谢祭！', kita);
    await era.printAndWait(
      `为了感谢粉丝们的支持，${me.name} 和小北在商店街的餐厅里举报了感谢服务。`,
    );
    await era.printAndWait(
      `站在用箱子堆叠起来的桌子后，小北握着麦克风，用欢快的嗓音唱着特雷森音头。`,
    );
    await kita.say_and_wait(`晃来晃去、飘来飘去、翩翩起舞花浴衣～`);
    await era.printAndWait(
      `摇晃着手欢快的唱着音头，${me.name} 坐在台后默默观赏着，这除 ${me.name} 之外没有任何人能够看到的身影。`,
    );
    await era.printAndWait(
      `在小北帮助过的大家的支持下，这次感谢祭就这么落入了尾声。`,
    );
    era.println();
    get_attr_and_print_in_event(68, [0, 0, 0, 0, 10], 10) &&
      (await era.waitAnyKey());
    era.set('cflag:68:节日事件标记', 0);
    return true;
  }

  async out_start(kita, me, callname, hook, extra_flag, event_object) {
    return await kita_out_start(kita, me, hook, event_object);
  }

  async race_end(kita, me, callname, hook, extra_flag) {
    await kita_race_end(kita, me, hook, extra_flag);
  }

  async school_atrium(kita, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:当前互动角色') !== 68) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 42) {
      return false;
    }
    await print_event_name('悠闲的午后时光', kita);
    await era.printAndWait(
      `在没有课也没有训练计划的某个下午，${me.name} 在食堂旁的侧门处找到了小北。`,
    );
    await kita.say_and_wait(`啊～训练员${me.get_adult_sex_title()}中午好。`);
    await era.printAndWait(
      `小北搬着两箱罐装汽水，尾巴左摇右晃的向这边打了个招呼。`,
    );
    await era.printAndWait(
      `${
        me.name
      } 看到在${kita.teen_sex_title}背后，食堂原本关闭的侧门正被木棍撑住，而七八箱汽水在旁边堆成了小山……这是在干什么啊。`,
    );
    await kita.say_and_wait(
      '啊，这个是食堂小卖部的阿姨搬汽水扭到了腰，所以我想帮她把箱子都搬进去。',
    );
    await kita.say_and_wait(
      `诶嘿嘿……被训练员${me.get_adult_sex_title()}看到了其他的样子，有点害羞呢……`,
    );
    await era.printAndWait(
      `看着 ${me.name} 惊讶的样子，${kita.name}害羞的嘿嘿笑着用箱子挡住了脸。`,
    );
    await kita.say_and_wait(
      `先不和训练员${me.get_adult_sex_title()}说了，我接着搬箱子了哦。`,
    );
    await era.printAndWait(
      `这么说着，小北将几个箱子叠在一块，稳稳当当地顺着侧门走了进去。`,
    );
    await era.printAndWait(
      `${me.name} 看着小北娇小而结实的背影，心里若有所思。`,
    );
    era.println();
    get_attr_and_print_in_event(68, [0, 0, 0, 0, 5], 0) &&
      (await era.waitAnyKey());
    return true;
  }

  async train_fail(kita, me, callname, hook, extra_flag) {
    await CustomizedEdu.print_fail_info_in_train(
      kita,
      extra_flag.train,
      extra_flag.fumble,
    );
    if (extra_flag.train !== attr_enum.intelligence) {
      extra_flag['args'] = extra_flag.fumble
        ? fumble_result.fumble
        : fumble_result.fail;
      if (extra_flag.fumble) {
        await print_event_name('严禁逞强！', kita);
        await kita.say_and_wait(`好痛啊……这次的好像真的有点严重了……`);
        await era.printAndWait(
          `${kita.name} 坐在保健室的床上，捂住腰，露出了十分扭曲的表情。`,
        );
        await era.printAndWait(
          `看来今天只能休息了呢，${me.name} 如此告知 ${kita.name}。`,
        );
        await kita.say_and_wait(
          `诶，休息么？可是……这个时候的大家都在训练，对吧…？`,
        );
        await kita.say_and_wait(
          `让我……休息真的好么？就算是比较轻松的训练也好，我不太想要休息啊……`,
        );
        await era.printAndWait(
          `${me.name} 看向小北身上肿起的地方，不管怎么样，这都只能休息了，不如说不休息问题反而会更加严重……`,
        );
        await kita.say_and_wait(
          `说的也是……那我也只能收拾一下心情，好好的休息了……`,
        );
        await era.printAndWait(
          `${kita.name} 有些落寞地躺进被子里，呆呆的望着天花板。`,
        );
        await kita.say_and_wait(`保健室，原来是这么安静的地方啊……有点寂寞呢……`);
      } else {
        await print_event_name('保重身体！', kita);
        await kita.say_and_wait(`痛痛痛痛……扭伤了啊……`);
        await era.printAndWait(
          `坐在保健室的椅子上，${kita.name} 伸手轻轻戳着缠绕在脚腕上的膏药贴，不甘心的嘟起了嘴。`,
        );
        await era.printAndWait(
          `看来今天只能休息了呢，${me.name} 如此告知 ${kita.name}。`,
        );
        await kita.say_and_wait(`休息么……真不甘心啊……`);
        await kita.say_and_wait(
          `但是既然训练员${me.get_adult_sex_title()}这么说了，也只能这样了……`,
        );
        await era.printAndWait(
          `${kita.name} 翻身用被子包裹住了自己，闭上眼开始睡觉了。`,
        );
      }
      hook.arg = 0;
    }
  }

  async train_success_add(kita, me, callname) {
    await print_event_name('额外自主训练！', kita);
    await era.printAndWait([
      '训练结束后，',
      kita.get_colored_name(),
      ' 似乎仍有些意犹未尽。',
    ]);
    await era.printAndWait([
      kita.sex,
      '远远向天边望去，夕阳正在垂落，最后的光芒洒落大地。',
    ]);
    await era.printAndWait(`天马上就要黑了，但是还不够，还没有到达极限。`);
    era.printButton('「继续训练吧！」', 1);
    era.printButton('「今天就到此为止吧。」', 2);
    if ((await era.input()) === 1) {
      await kita.say_and_wait(['明白了！那么', callname, '请看好哦！']);
      return true;
    } else {
      await kita.say_and_wait(`这样么，好～那么就好好休息明天再锻炼吧！`);
    }
    return false;
  }

  async week_end(kita, me, callname, hook, extra_flag, event_object) {
    return await kita_week_end(kita, me, hook, event_object);
  }

  async week_start(kita, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg,
      event_marks = new KitaEduMarks();
    let wait_flag = false;
    if (event_arg === 'beginning') {
      await print_event_name(`不过是平平无常的${kita.teen_sex_title}`, kita);
      era.println();
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}！今天也请您多多指教了！`,
      );
      await era.printAndWait(
        `向 ${me.name} 深深鞠了一躬，${kita.name} 小跑着翻过栅栏，像只活泼的小鹿似的跳进跑道里开始了今天的锻炼。`,
      );
      await era.printAndWait(
        `在和 ${kita.name} 一起进行过锻炼之后，身为训练员的 ${me.name} 基本摸清了担当的素质。`,
      );
      await era.printAndWait(
        `首先，也是最重要的是，${kita.name} 的身体相当结实。`,
      );
      await era.printAndWait(
        `仅仅在进入赛道后不到二十分钟的时间，${kita.name} 便完成了预计应是半小时的热身任务。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}，我热身完了，接下来的计划是什么！？`,
      );
      await kita.say_and_wait('是速度训练么？还是耐力训练？这些我都可以哦。');
      await era.printAndWait(
        `站在跑道里，好看的脸蛋因为热身而微微发烫的赛${kita.uma_sex_title}对这边大声问道。`,
      );
      await era.printAndWait(`第二个是，${kita.sex}是个很不擅长计划的姑娘。`);
      await era.printAndWait(
        '虽然不至于到在训练里三心二意的地步，说好听点也可以称赞这是随时而动。',
      );
      await era.printAndWait(
        `但是 ${
          kita.name
        } 这位赛${kita.uma_sex_title}，并不会是那些会根据自己条件制定策略和计划的孩子。`,
      );
      era.println();

      era.printButton('「是评测小北奔跑素质的锻炼哦。」', 1);
      await era.input();
      await era.printAndWait(
        `一边说着，${me.name} 将视线重新移回笔记本上。而除此之外，还有一个最大的问题。`,
      );
      await kita.say_and_wait(
        '评测我的身体素质么？明白了！我会全力以赴地展现实力的！',
      );
      await era.printAndWait(
        '正在兴头上的小北摇晃起尾巴，小跑着跑到用白油漆画出的起点线后。',
      );
      await era.printAndWait(
        `在号令枪令人耳鸣的巨大声响中，黑色的赛${kita.uma_sex_title}迈开步伐向前奔驰而去。`,
      );
      await era.printAndWait(
        `深色跑鞋在草地上踏出一道浅浅的脚印，${kita.name} 压低身子大步冲锋在前`,
      );
      await era.printAndWait(
        `若这是赛道上的一条行列的话，那么${kita.sex}必然在先行靠前的位置上。`,
      );
      era.println();

      era.printButton('「但是……」', 1);
      await era.input();
      await era.printAndWait(`但是，看不到能够取得绝对胜利的要素。`);
      await era.printAndWait(
        `${
          me.name
        } 忧心忡忡地望向小北漆黑的身影，渴望从中看到掩藏在${kita.teen_sex_title}小小身体下的某种天赋。`,
      );
      await era.printAndWait(
        `尽管${kita.sex}的身体素质优秀的无可言说，但在中央这卧虎藏龙之地这远远不够，若是没有足以击败${kita.sex}人的兵器……`,
      );
      await kita.say_and_wait('呼，呼，呼……');
      await era.printAndWait(
        `${
          me.name
        } 看到${kita.teen_sex_title}均匀的喘息，那白皙结实的小腿在草场上绷出令人惊叹的曲线，而${
          kita.sex
        }的身影在 ${me.name} 的视网膜中变得越来越近。`,
      );
      await era.printAndWait('可是仅凭身体素质，走不了太远的。');
      await era.printAndWait(`${me.name} 摁下秒表，那是个中规中矩的成绩。`);
      await era.printAndWait(
        `必须让 ${kita.name} 找到独属于${kita.sex}的兵器。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [5, 0, 5, 0, 0], 0) || wait_flag;
    } else if (event_arg === 38) {
      const nature = get_chara_talk(60);
      await print_event_name('优秀素质 登场', kita);
      await era.printAndWait('十月后半的某一天上午。');
      await era.printAndWait(
        `自从出道战之后已经过去了三个半月的时间，${me.name} 和小北在赛道上一如往常地进行着并跑锻炼。`,
      );
      await era.printAndWait(`而今天作为训练的陪同对象是……`);
      await kita.say_and_wait(`啊，是素质${nature.get_adult_sex_title()}！`);
      await nature.say_and_wait(
        `呀吼～训练员${me.get_adult_sex_title()}我来了呦～小北久等了么？`,
      );
      await era.printAndWait(
        `向这边挥着手慢步跑来，碰巧有时间的素质小姐慵懒地嘿嘿笑着同小北闲聊起来。`,
      );
      await era.printAndWait(
        `今天的训练计划是锻炼对恶劣环境的毅力和忍受能力，内容则是两人在泥地赛道上的并跑训练。`,
      );
      await era.printAndWait(
        `虽然 ${kita.name} 并没有在泥地赛道奔跑的天赋，但是这样反而能更好的进行训练吧。`,
      );
      await kita.say_and_wait(
        `今天请多多指教，素质${nature.get_adult_sex_title()}！`,
      );
      await nature.say_and_wait(`不要这么认真啦，叫我素质就好了～`);
      await era.printAndWait(
        `在稍微热身了十分钟后，${nature.name} 和 ${kita.name} 一前一后地走进赛道，开始了今天的训练。`,
      );
      era.drawLine({ content: '一段时间后' });
      await era.printAndWait(`就结果而言，并不乐观。`);
      await nature.say_and_wait(`呜哇～小北 ${me.name} 没事吧～脚还好么？`);
      await kita.say_and_wait(
        `哈啊哈啊……没…没关系的……素质${nature.get_adult_sex_title()}！`,
      );
      await nature.say_and_wait(`都说了叫我素质就好……`);
      await era.printAndWait(
        `在 ${nature.name} 的搀扶下，在泥地里摔了一跤的${kita.name}走出跑道，露出了明显是在强撑的笑容。`,
      );
      await era.printAndWait(
        `不知是担当的用力过猛还是训练员选用的训练方式有误，小北在结束训练后重重的摔了一跤。`,
      );
      await era.printAndWait(
        `尽管训练本身卓有成效，但是除去常规训练以外，其他的根性训练计划暂时中止好了。`,
      );
      await era.printAndWait(
        `看着勉强站起身走向这边的${kita.name}，${me.name} 在笔记本的这一条上重重的划了一道叉。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [0, 0, 0, 10, 0], 0) || wait_flag;
    } else if (event_arg === 47 + 10) {
      await print_event_name('没有恶意的小小恶作剧 ', kita);
      await era.printAndWait(
        `白色情人节，${me.name} 一大早便在草场跑道上等着${kita.name}。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}！到的真早啊～`,
      );
      await era.printAndWait(`等了没多久，小北便从跑道上踩着草地跑了过来。`);
      await era.printAndWait(
        `呼吸着清新的新鲜空气，${
          me.name
        } 看向穿着运动服的${kita.teen_sex_title}，心里怀着小北对礼物还一无所知的些许窃喜，慢步走了上去。`,
      );
      await kita.say_and_wait(
        `？训练员${me.get_adult_sex_title()}？那一脸奇怪的笑容是怎么回事？`,
      );
      await era.printAndWait(
        `像是头警惕的小鹿似的在 ${me.name} 面前停步，${kita.name}小心翼翼地弯下腰，一点一点的靠近。`,
      );
      await era.printAndWait(
        `哼哼哼，不想着逃跑还想要凑近过来么？不愧是小北，但是已经没有用了！`,
      );
      era.println();
      era.printButton('「白色情人节快乐哦小北～这是训练员我送你的礼物～」', 1);
      await era.input();
      await era.printAndWait(
        `一边大声说着，${
          me.name
        } 掏出礼物递给了小北，吓得${kita.teen_sex_title}摆出了空手道应敌的姿势。`,
      );
      await era.printAndWait(
        `在调笑了小北好一阵后，${me.name} 面带微笑的看着小北拆开包装吃起里面的巧克力。`,
      );
      await kita.say_and_wait(
        `谢谢训练员${me.get_adult_sex_title()}，我不客气……好酸！这是话梅……啊！口水口水！`,
      );
      await era.printAndWait(
        `在入口的一瞬间，刺激的酸味便让${kita.teen_sex_title}的表情反射性的扭曲起来。`,
      );
      await era.printAndWait(
        `唾液在酸酸话梅的刺激下大量分泌，而这就是 ${me.name} 给小北准备的一点小小的恶作剧，在众多巧克力中唯二的巧克力话梅糖。`,
      );
      await era.printAndWait(
        `至于后来在小北全心全意的报复下，${me.name} 被迫把剩下的话梅一口吃了导致口水直流什么的。`,
      );
      await era.printAndWait(`那就不需要太在意了呢～`);
      era.println();
      wait_flag = sys_like_chara(68, 0, 5, true, 1) || wait_flag;
    } else if (event_arg === 47 + 7) {
      await print_event_name('家人是很重要的', kita);
      await era.printAndWait(
        `某一天上午，${me.name} 同 ${kita.name} 一起待在训练员室里。`,
      );
      await era.printAndWait(
        `因为没有训练计划，${me.name} 看到小北正百无聊赖地趴在沙发上同家里人打着电话，等 ${me.name} 整理完明天的教案。`,
      );
      await kita.say_and_wait(`诶，最近还发生了这种事么？还真是不得了哇……`);
      await kita.say_and_wait(`唔嘿嘿。妈妈也是，不要太娇惯大家了哦。`);
      await era.printAndWait(
        `看着开心地和家里人聊着天的 ${kita.name}，${me.name} 突然对小北的母亲产生了些许的兴趣。`,
      );
      await era.printAndWait(`${kita.name} 的妈妈，是什么样的人呢？`);
      await kita.say_and_wait(`诶，我的妈妈么？`);
      await era.printAndWait(
        `带着这样的好奇，${me.name} 在小北挂断电话后主动出言问道`,
      );
      await kita.say_and_wait(
        `怎么说呢，嗯唔唔……我的妈妈是什么样的人的话……感觉就是很普通。`,
      );
      await kita.say_and_wait(
        `虽然妈妈她也是退役下来的赛马娘，身材也非常好啦，但是感觉就是很平常，或者说没有特殊的地方？`,
      );
      await kita.say_and_wait(
        `啊，不过妈妈她很会唱演歌呢，训练员${me.get_adult_sex_title()}有机会的话可以一起哦。`,
      );
      await era.printAndWait(
        `听着 ${kita.name} 讲着 ${kita.sex} 和妈妈的日常，${me.name} 开始不知不觉间期待起和小北家人见面的时候。`,
      );
      await era.printAndWait(
        `而在不知不觉间，${me.name} 的教案已经整理完毕了。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [0, 0, 5, 0, 0], 0) || wait_flag;
    } else if (event_arg === 47 + 11) {
      await print_event_name('稳健的支持与皋月阴云', kita);
      const teio = get_chara_talk(3);
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}！表格已经填好了吧！没有错误吧？比如说，比如说名字啊年龄啊……`,
      );
      await kita.say_and_wait(
        `啊啊还有两分钟就要开始确认了好吓人！帝王${teio.get_adult_sex_title()}当年也是这样的吗！？`,
      );
      await era.printAndWait(
        `在训练员室里苦恼的来回度步，${kita.name}焦急地翻查着手里的报名表，一副忧心忡忡的样子。`,
      );
      await era.printAndWait(
        `这也难怪，即使粉丝数达成了目标，但是G1比赛的报名注册也是十分严格的。`,
      );
      await era.printAndWait(
        `对于第一次进行报名的小北来说，感到紧张也是在所难免的吧。`,
      );
      await teio.say_and_wait(
        `放宽心啦小北～本帝王大人都给 ${me.name} 检查过十次了哦，不要太紧张啦。`,
      );
      await era.printAndWait(
        `坐在沙发上悠闲地喝着蜂蜜特饮，${kita.name} 的偶像 ${teio.name} 晃着两条小腿。`,
      );
      await kita.say_and_wait(
        `但是，帝王${teio.get_adult_sex_title()}！报名马上就开始了，不第一时间——`,
      );
      await teio.say_and_wait(
        `但是报名时间是从今天开始的一周左右吧，这么急也是一周后统一审查啊。`,
      );
      await era.printAndWait(
        `一边说着，${teio.name} 招手把 ${kita.name} 拉到身边，将蜂蜜特饮塞进自己的小粉丝手里。`,
      );
      await kita.say_and_wait(
        `好啦～放下心好好休息啦～事情交给训练员${me.get_adult_sex_title()}处理就好。`,
      );
      await kita.say_and_wait(`唔唔……唔唔唔唔……还是好不安啊……`);
      await era.printAndWait(
        `看着这样的小北，${me.name} 悄悄地按下回车键，觉得还是把已经提交上去这件事延后一点说好了。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [3, 3, 3, 3, 3], 20) || wait_flag;
    } else if (event_arg === 47 + 29 || event_arg === 95 + 29) {
      if (
        era.get('cflag:0:位置') !== location_enum.beach ||
        era.get('cflag:68:位置') !== era.get('cflag:0:位置')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('夏季合宿', kita);
      await era.printAndWait(
        `对于年轻的小赛${kita.uma_sex_title}们来说，中央学园每年八月的夏季合宿，是${
          kita.sex
        }们仅次于几次假期最为期待的日子。`,
      );
      await era.printAndWait(
        `毕竟谈到特雷森的合宿，便是阳光，沙滩，南国舒适的温度和带有咸味的海风。`,
      );
      await era.printAndWait(
        `但对于老练的训练员们而言，夏季合宿则是提升赛${kita.uma_sex_title}能力的最好时间。`,
      );
      await era.printAndWait(
        `合宿地点完善的器材，不会扭伤脚踝的柔软沙地，适合锻炼游泳技术的清澈海洋，再严肃的训练员，也会不禁露出幸福的笑容。`,
      );
      await era.printAndWait(
        `而对于${kita.name}来说，夏季合宿也是有效巩固自身力量的最好时间。`,
      );
      await kita.say_and_wait(
        `呜诶啊！好软的沙滩啊！训练员${me.get_adult_sex_title()}快看快看，我的脚整个都陷进去了诶！`,
      );
      await era.printAndWait(
        `在白色的沙滩上赤着脚踩来踩去，黑色的赛${kita.uma_sex_title}笑着高高举起双手，露出糯米般光滑的腋下。`,
      );
      await kita.say_and_wait(
        `哈哈，感觉好厉害啊训练员${me.get_adult_sex_title()}！这样的话，感觉怎么样的训练也能忍受了～`,
      );
      await era.printAndWait(
        `看着像是小孩子似的${kita.name}，${me.name} 也忍不住有些想要闹腾起来了。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [0, 0, 10, 10, 0], 0) || wait_flag;
    } else if (event_arg === 47 + 48) {
      await print_event_name('圣诞夜的晚餐', kita);
      await era.printAndWait(
        `圣诞节的特雷森，就如同过去的十几年那样一如既往的吵闹。`,
      );
      await era.printAndWait(
        `此时，${me.name} 和 ${kita.name} 就像其他人一样，在食堂里欢庆着节日，享受着食堂的节假日特别菜单。`,
      );
      await kita.say_and_wait(
        `唔姆姆……两份大薯条，四份炸鸡块和鸡肉汉堡，还要两杯可乐……`,
      );
      await era.printAndWait(
        `在 ${me.name} 身边，${me.name} 的担当踮起脚尖看着柜台后的菜单，毫不顾忌地点着热量相当之高的食品。`,
      );
      await era.printAndWait(
        `看来要加大日后的训练力度了……${me.name} 在心底里的笔记本上默默记上了一笔。`,
      );
      await kita.say_and_wait(
        `唔嘿嘿～谢谢你训练员${me.get_adult_sex_title()}，明明是难得的圣诞节还要陪我出来玩。`,
      );
      await era.printAndWait(
        `抱着一大盘食物坐在空出的椅子上，${kita.name} 露出不好意思的表情，将可乐递给了 ${me.name}。`,
      );
      await era.printAndWait([
        me.get_colored_name(),
        ' 喝着可乐环顾四周，零星也能看到几个同样在大吃特吃的孩子，看来对年轻人来说这么点上一大盘食物也不是什么奇怪的事……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 将视线收回，',
        kita.get_colored_name(),
        ' 正在 ',
        me.get_colored_name(),
        ' 面前小口小口地吃着薯条，明明只是普通的庶民食物却吃得不亦乐乎。',
      ]);
      era.println();
      era.printButton('「感觉小北是很适合吃薯条的孩子呢。」', 1);
      era.printButton('「感觉小北是很适合吃汉堡的孩子呢。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait(`诶？很适合吃薯条是指？`);
        await era.printAndWait(
          `将香软温热的薯条两口吃下，${kita.name} 好奇的问道。`,
        );
        await era.printAndWait(
          `${
            me.name
          } 略带犹豫地紧紧盯着${kita.uma_sex_title}的嘴巴，那薄软而纤细的双唇带着健康的红润，还带着些许润唇膏的晶莹。`,
        );
        await me.say_and_wait(
          `不，就是，小北叼着薯条的样子很孩子气，很可爱啊。`,
        );
        await kita.say_and_wait(`嘿诶？是这样么…？`);
        await era.printAndWait(
          `像 ${me.name} 说的那样咬住一根薯条，那食指长的金光长条自然的垂下，${kita.name} 垂下头将脸凑近了一些。`,
        );
        await era.printAndWait(
          `${kita.teen_sex_title}天真而毫无防备的面容就这么摆在 ${
            me.name
          } 面前，仍然带着一股活泼稚气的 ${kita.name} 眨着眼，似乎对 ${
            me.name
          } 的态度十分好奇。`,
        );
        await era.printAndWait(
          `${me.name} 将视线移下，透过校服的衣领能够看到小北雪白的脖颈，那明显而又色气的锁骨一览无余。`,
        );
        await kita.say_and_wait(`唔姆姆……`);
        await era.printAndWait(
          `三两口将薯条吃下，${kita.teen_sex_title}将后背重新贴回椅子上，大口大口的吃起了薯条。`,
        );
        await era.printAndWait(
          `${me.name} 喝着可乐，开始享受起这和小北共度的美妙圣诞节。`,
        );
        era.println();
        wait_flag = sys_like_chara(68, 0, 50) || wait_flag;
      } else {
        await kita.say_and_wait(`汉堡是指？`);
        await era.printAndWait(
          `三两口薯条吞咽进肚子里，${kita.name} 好奇的问道。`,
        );
        await era.printAndWait(
          `……不好，说错了话了……${
            me.name
          } 略带犹豫地紧紧盯着${kita.uma_sex_title}的嘴巴，那纤细而晶莹的红润双唇。`,
        );
        await me.say_and_wait(
          `不，就是，小北的嘴巴大大的，感觉很适合吃汉堡的样子。`,
        );
        await era.printAndWait(
          `听到 ${me.name} 的理由，小北鼓着嘴巴露出了不开心的表情。`,
        );
        await era.printAndWait(
          `虽然完全可以理解，毕竟哪有${kita.child_sex_title}子听了这种话还会开心啊……`,
        );
        await kita.say_and_wait(
          `训练员${me.get_adult_sex_title()}……这可是难得的圣诞节哦，惹我不开心真的可以么？`,
        );
        await era.printAndWait(
          `嘟着嘴咔嚓咔嚓地薯条，${kita.name} 仿佛是威胁一样地说着话。`,
        );
        era.println();
        era.printButton(`「对不起是我不好……请小北大人饶了我吧……」`, 1);
        await era.input();
        await era.printAndWait(`哼～`);
        await era.printAndWait(
          `上下抖动着耳朵的 ${kita.name} 侧过身去，闭着眼摸索着薯条塞进嘴里。`,
        );
        await kita.say_and_wait(
          `唔唔唔……居然这么说人家，小北我真是对 ${callname} 太失望了。`,
        );
        await era.printAndWait(
          `所言极是……不如说这么瞎说了还没发大火已经是小北宽容大量了……`,
        );
        await era.printAndWait(
          `${me.name} 双手合十，不停的向不高兴的小北说着讨好的话。`,
        );
        await era.printAndWait(
          `但就在 ${me.name} 道歉的时候，小北正偷偷侧过身来看着 ${me.name} 的态度，露出了得意的坏笑。`,
        );
        await era.printAndWait(
          `在被强行塞了一个汉堡吃证明训练员${me.get_adult_sex_title()}也很适合吃汉堡后，在 ${
            me.name
          } 眼里，小北终于开心的转过神来。`,
        );
        await era.printAndWait(
          `${me.name} 咬着汉堡，一边接受着惩罚，一边享受起和小北共度的时光。`,
        );
        era.println();
        wait_flag = sys_like_chara(68, 0, 10, true, 2) || wait_flag;
      }
      era.set('cflag:68:节日事件标记', 0);
    } else if (event_arg === 95 + 1) {
      await print_event_name('小北的熟人？', kita);
      await era.printAndWait('一年的时光转瞬即逝，很快就到了新年伊始。');
      await era.printAndWait(
        `对于 ${me.name} 的担当 ${kita.name} 来说，训练强度的提升，赛程的安排，导致了接下来的一年是相当重要的一年。`,
      );
      await kita.say_and_wait(`嗯哼哼～嗯哼哼～哼哼嗯哼哼～`);
      await era.printAndWait(
        `穿着睡衣的 ${kita.name} 在门外哼着歌，似乎是在干些什么，而 ${me.name} 则在房间里准备着新年的火锅。`,
      );
      await era.printAndWait(
        '毕竟不管怎么说，新年还是要好好过得，不能因为期待而让小北压力太大。',
      );
      await era.printAndWait(
        '虽然在训练员室里吃火锅睡被褥怎么想都还是有些奇怪就是了。',
      );
      await era.printAndWait(
        `在这样准备着橘子和被炉的时候，${
          me.name
        } 听到${kita.teen_sex_title}打开门的声音，和一阵阵的脚步声。`,
      );
      era.println();
      era.printButton('「欢迎回来，小……小北！？」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name} 回过头，看到的反而是两个身材高大的壮汉。`,
      );
      await era.printAndWait(
        '这两位的体魄异常的结实，且都穿着白色的西服，戴着眼镜的那人面容满是伤疤，另一人的下巴上则留着一丛小胡子。',
      );
      await era.printAndWait(
        `其冷酷的表情，满是审视的眼神……不管怎么看这都是黑道啊！骏川小姐 ${me.name} 怎么把他们放进来的啊！？`,
      );
      await kita.say_and_wait(
        `啊，花山哥，桐生哥，这个人就是我的训练员${me.get_adult_sex_title()}哦～`,
      );
      await era.printAndWait(
        `在两位壮汉身后，${me.name} 的担当笑嘻嘻地钻了出来，抱着一纸袋的礼物替 ${me.name} 介绍起来。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}，这就是我和你说过的花山哥和桐生哥哦。`,
      );
      await kita.say_and_wait(
        `嘻嘻，虽然表情凶了点，但是都是和小北我关系很好的好人，所以不要害怕哦。`,
      );
      await era.printAndWait('花山「啊。」');
      await era.printAndWait('桐生「嗯。」');
      await era.printAndWait(
        `两个壮汉一起点了点头，在小北身后对 ${me.name} 露出近乎憨厚的笑容，抬手拎起几袋从商店街买来的羊肉。`,
      );
      await era.printAndWait(
        `在小北的招呼声中，${me.name} 和传奇黑道们一起悠闲用黑道式休闲的度过了接下来的时光。`,
      );
      era.drawLine({ content: '过了一段时间后' });
      await kita.say_and_wait(`明年再见哦！桐生哥花山哥！`);
      await era.printAndWait(
        `在吃过火锅又聊了几个小时的黑道传奇历史之后，${me.name} 和小北一起看着两位黑道大哥走向校门。`,
      );
      await era.printAndWait(
        `……并且给路边坐在亭子里的骏川${kita.get_adult_sex_title()}深深地鞠了一躬。`,
      );
      await era.printAndWait(
        `最后那个就当做没有看到吧，${me.name} 一边这样想着，一边转身享受起这美好的一夜。`,
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(68, [10, 10, 10, 10, 10], 0) || wait_flag;
      era.set('cflag:68:节日事件标记', 0);
    } else if (event_arg === 95 + 6) {
      await print_event_name('略微有些破碎的甜酒味', kita);
      await era.printAndWait(
        `在资深年的情人节这天，和 ${kita.name} 相约在训练员室里见面。`,
      );
      await era.printAndWait(
        `虽然是需要赠送巧克力的节日，不过打开门的时候却发现小北少见的打扮了一番。`,
      );
      await kita.say_and_wait(
        `啊！训练员${me.get_adult_sex_title()}，已经来了么！`,
      );
      await era.printAndWait(
        `穿着昂贵和服的 ${kita.name} 慌慌张张地摆好桌子，对着 ${me.name} 紧张地深深鞠了一躬。`,
      );
      await kita.say_and_wait(
        `训练员${me.get_adult_sex_title()}，情人节快乐！那个，这个，这个！是小北我上供给训练员的礼物，请您笑纳！`,
      );
      era.println();
      era.printButton(`「礼物么？谢谢你小北。」`, 1);
      await era.input();
      await era.printAndWait(
        `满怀期待的接过礼物盒打开，放在高档的盒子里的是碎的乱七八糟的巧克力。`,
      );
      await era.printAndWait(
        `而在盒子的小格子里，还能隐约看到无色透明的液体……是甜酒啊！`,
      );
      await kita.say_and_wait(
        `呜呜……虽然是想要给训练员${me.get_adult_sex_title()}一个惊喜的，但是不知道为什么巧克力全碎掉了……`,
      );
      await era.printAndWait(
        `看到盒子里的样子，早已知道这副惨样的 ${kita.name} 露出了不安的表情。`,
      );
      await era.printAndWait(
        `${me.name} 拿起一颗巧克力放进嘴里，咀嚼着碎掉巧克力内部带着些许酒味的糖心。`,
      );
      await era.printAndWait(
        `嗯，是担当在情人节送给 ${me.name} 的很棒的巧克力啊。揉搓着小北的脑袋，感觉着柔顺发丝在手掌间划过的感觉。`,
      );
      await era.printAndWait(
        `${me.name} 拉着 ${kita.name} 在桌前坐下，开始一起享用起情人节的巧克力了。`,
      );
      era.println();
      wait_flag = sys_like_chara(68, 0, 100) || wait_flag;
      event_marks.senior_valentine++;
      era.set('cflag:68:节日事件标记', 0);
    } else {
      return await super.week_start(
        kita,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    wait_flag && (await era.waitAnyKey());
  }
};
