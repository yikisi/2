const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love52AfterGirlFriend = require('#/event/love/love-events-52/after-girl-friend');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');

module.exports = class extends Love52AfterGirlFriend {
  async 89(urara, me, callname, stage, extra_flag, event_object) {
    const { in_urara, relation } = this.get_event_vars();
    const life_marks = new UraraLifeMarks();
    if (stage === event_hooks.week_end) {
      if (life_marks.active_89 === 0) {
        await print_event_name('不再回头的决心', urara);
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
          sys_get_colored_callname(52, 61),
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
        if (relation > 150) {
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
        if ((await era.input()) === 1) {
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
            me.actual_name,
            ' 约定更多的事——',
          ]);
          if (
            era
              .getAddedCharacters()
              .filter((e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75)
              .length > 0
          ) {
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
            await in_urara.say_as_unknown_and_wait([
              '因恋心而斗志高昂，',
              urara.teen_sex_title,
              '在心中拟定起未来的计划，并带着思索进入了梦乡。',
            ]);
            await in_urara.say_as_unknown_and_wait(
              '今夜的乌拉拉，终于因拿出勇气而跨过了多虑而失眠的烦恼。',
            );
            await in_urara.say_as_unknown_and_wait([
              '不管小',
              urara.uma_sex_title,
              '准备何时开始行动，即使稍显稚嫩，那也一定会是份合格的心意。',
            ]);
          }
          add_event(event_hooks.week_start, event_object);
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
          await in_urara.say_as_unknown_and_wait([
            '至少对小',
            urara.uma_sex_title,
            '来说，与 ',
            callname,
            ' 更进一步，以今夜的心理确实不够合适。',
          ]);
          await in_urara.say_as_unknown_and_wait([
            '唉，先不提 ',
            callname,
            ' 是否会那样对待乌拉拉，明明只要拿出勇气来就好了啊……',
          ]);
          begin_and_init_ero(52);
          await masturbate(52);
          end_ero_and_train();
          era.set('status:52:熬夜', 1);
          era.set('cflag:52:爱慕暂拒', 89);
        }
      } else {
        await print_event_name('不再迷茫的你', urara);
        await urara.say_and_wait([callname, '，这里已经什么都没有了啊。']);
        await era.printAndWait([
          '后来再次路过那次的婚礼现场时，顺着 ',
          urara.get_colored_name(),
          ' 的提醒，',
          me.get_colored_name(),
          ' 又一次透过栅栏向公园内望去。',
        ]);
        await era.printAndWait([
          '这一次，草坪上连有人来过的痕迹都消失的一干二净，只有 ',
          urara.get_colored_name(),
          ' 的轻声叹息还在 ',
          me.get_colored_name(),
          ' 的耳边回荡着。',
        ]);
        await era.printAndWait([
          '即使因为担当的过于娇小而没能观察到',
          urara.sex,
          '的眼睛，但从头顶一对失落的耳朵中依旧能看出',
          urara.sex,
          '的心绪。',
        ]);

        era.printButton(
          `「${sys_get_callname(0, 52)}，一起去里面看看吧。」`,
          1,
        );
        await era.input();

        await urara.say_and_wait('诶？嗯……');
        await era.printAndWait([
          '在一惊之后是有些心不在焉的回答，',
          urara.get_colored_name(),
          ' 顺从地跟上了 ',
          me.get_colored_name(),
          ' 的步伐，一同绕过矮矮的栅栏。',
        ]);
        await era.printAndWait([
          '但尽管与 ',
          me.get_colored_name(),
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
          me.get_colored_name(),
          ' 还真是个差劲的大人。',
        ]);
        await era.printAndWait(
          '至少现在，是愚钝的大人该做出补偿，将担当内心的空洞重新填补的时候了。',
        );
        await era.printAndWait(
          '明明还有很多话想说，但现在能说的，果然也只有——',
        );

        era.printButton(`主动牵起 ${sys_get_callname(0, 52)} 的手。`, 1);
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
          me.get_colored_name(),
          ' 想要兑换约定的时刻。',
        ]);
        era.println();

        if (relation > 150) {
          await urara.say_and_wait(
            '和想象中的不太一样呢，但是终于等到了，所以我也很满足哦？',
          );
          await era.printAndWait([
            '即刻间与 ',
            me.get_colored_name(),
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
            me.get_colored_name(),
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
            me.get_colored_name(),
            ' 也回以了明确的答案——',
          ]);
        }
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
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
            me.get_colored_name(),
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
        era.printButton(
          `「对不起，让 ${sys_get_callname(0, 52)} 久等了！」`,
          1,
        );
        await era.input();

        era.drawLine();
        await in_urara.say_as_unknown_and_wait('现在的您，已经没法回头了哦？');
        await sys_love_uma_in_event(52);
      }
    } else if (stage === event_hooks.week_start) {
      await print_event_name(`许下约定的${urara.sex}`, urara);
      await in_urara.say_as_unknown_and_wait(
        '那次路过婚礼现场，只是纯粹的偶然而已，但若想改变奔跑的轨迹，一次偶然也足矣。',
      );
      era.drawLine();
      await era.printAndWait([
        '与婚礼现场只有一栅之隔，记忆中的 ',
        me.get_colored_name(),
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
        me.phy_sex_title,
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

      if (relation > 150) {
        await urara.say_and_wait([callname, '，在想什么呢？']);
        await era.printAndWait([
          urara.get_colored_name(),
          ' 不知何时转过头来，像往常一样发自内心的对 ',
          me.get_colored_name(),
          ' 笑着。',
        ]);
        await era.printAndWait([
          '或许 ',
          me.get_colored_name(),
          ' 们现在也和那对新人没什么区别吧？感受着恋人美好的笑容，',
          me.get_colored_name(),
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
          me.get_colored_name(),
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
          me.get_colored_name(),
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
        me.get_colored_name(),
        ' 回答上一个问题，也不给予更多的思考时间，樱粉色的小恋人再次发问了。',
      ]);
      await urara.say_and_wait([
        '乌拉拉不会有更多的请求，但是 ',
        callname,
        '，乌拉拉的手现在还空着哦？',
      ]);
      await era.printAndWait([
        '没有直接看向 ',
        me.get_colored_name(),
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
        me.get_colored_name(),
        ' 的回答。',
      ]);
      in_urara.say_as_unknown(
        `面对依旧等待着训练员${me.get_adult_sex_title()}（您）的${sys_get_callname(
          0,
          52,
        )}，您的决定……`,
      );
      era.printButton(`牵住${sys_get_callname(0, 52)}的手。（升级关系）`, 1);
      era.printButton('现在还没准备好。（暂不升级）', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '与 ',
          urara.get_colored_name(),
          ' 的关系怎样了，',
          me.get_colored_name(),
          ' 早就知道这一点。',
        ]);
        await era.printAndWait([
          '不需要去考量什么，',
          me.get_colored_name(),
          ' 拉起了恋人的小手，',
          urara.get_colored_name(),
          ' 紧绷的耳朵也终于松口气般地放了下来。',
        ]);
        await era.printAndWait([
          '从简单的相合变为五指交叠，小',
          urara.uma_sex_title,
          '细嫩的手指有些羞涩的在 ',
          me.get_colored_name(),
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
        if (relation > 150) {
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
            me.get_colored_name(),
            ' 笑着，仿佛在用什么都懂一点的表情抚摸着 ',
            me.get_colored_name(),
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
            me.get_colored_name(),
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
            me.get_colored_name(),
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
            me.get_colored_name(),
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
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
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
          await in_urara.say_as_unknown_and_wait(
            '说的也是啊，你确实是个过分的人，不过还请稍微打起精神来吧，因为……',
          );
        } else {
          era.drawLine();
        }
        await in_urara.say_as_unknown_and_wait('您已经没法回头了……');
        await sys_love_uma_in_event(52);
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
          `「不要伤心，${sys_get_callname(
            0,
            52,
          )}，并不是在说不可以，只是现在还不行。」`,
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
        if (relation > 150) {
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
          `「所以就像${sys_get_callname(
            0,
            52,
          )}说的那样，到合适的时候，我会第一时间告诉${sys_get_callname(
            52,
            0,
          )}的！」`,
          1,
        );
        await era.input();

        await urara.say_and_wait('那……约好了哦？');
        await era.printAndWait([
          '在一阵思索后，',
          urara.get_colored_name(),
          ' 笑着向 ',
          me.get_colored_name(),
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
        await in_urara.say_as_unknown_and_wait(
          '在这里停住了？！不……什么都没有……',
        );
        await in_urara.say_as_unknown_and_wait(
          '不过，说起来……您为什么这么熟练啊？',
        );
        era.set('cflag:52:爱慕暂拒', 89);
        new UraraLifeMarks().active_89 = 1;
        await punish_rejecting_love(52);
      }
    }
  }
};
