const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const Love52UntilFuckBuddy = require('#/event/love/love-events-52/until-fuck-buddy');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');

module.exports = class extends Love52UntilFuckBuddy {
  async 74(urara, me, callname, stage, extra_flag, event_object) {
    const { in_urara, relation, chara_self_name } = this.get_event_vars();
    const life_marks = new UraraLifeMarks();
    if (stage === event_hooks.week_end) {
      if (life_marks.active_74 === 0) {
        await print_event_name('躁动的爱意', urara);
        await in_urara.say_as_unknown_and_wait([
          '在床上翻了个身，今天的小',
          urara.uma_sex_title,
          '似乎真的失眠了……',
        ]);
        await in_urara.say_as_unknown_and_wait([
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
        if (relation > 150) {
          await urara.print_and_wait([
            '回过头来的时候，已经想象不到没有 ',
            callname,
            ' 的 ',
            chara_self_name,
            ' 要怎么走到现在了。',
          ]);
          await urara.say_and_wait('这个样子，真的很幸运呢……');
          await urara.print_and_wait([
            '但有一天失去了 ',
            callname,
            ' 呢？就算是要为了大家奔跑，但离开了那个人，弱小的 ',
            chara_self_name,
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
            chara_self_name,
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
            chara_self_name,
            ' 心中所占的面积已经扩到连自己都感到惊讶的程度了。',
          ]);
          await urara.print_and_wait(
            '虽然还是有些不知所措，但是走在一起就会心跳加速，被鼓励也会开心地出乎意料。',
          );
          await urara.print_and_wait([
            '究竟是怎么了？',
            chara_self_name,
            ' 对 ',
            callname,
            ' 的感情，在不知道的地方迎来改变了吗？',
          ]);
        }
        urara.say(`那我（乌拉拉）对 ${me.sex} 的感情……`);
        era.printButton('「果然，是「恋爱」的感情吗？」（升级关系）', 1);
        era.printButton('「还、还是担当对训练员的好感吧？」（暂不升级）', 2);
        if ((await era.input()) === 1) {
          await urara.print_and_wait([
            '那……难道这就是恋爱？',
            chara_self_name,
            ' 对 ',
            callname,
            '？',
          ]);
          await urara.print_and_wait([
            '虽然不完全明白，但应该就是这样吧，可这么说来，',
            callname,
            ' 会喜欢 ',
            chara_self_name,
            ' 吗？',
          ]);
          await urara.print_and_wait([
            '一想到这个问题，心里就会变得酸涩，但是……想象不到 ',
            callname,
            ' 会主动告白的样子啊！',
          ]);
          await urara.print_and_wait([
            '再这样下去，什么都不明白的 ',
            chara_self_name,
            ' 只会永远被 ',
            callname,
            ' 当做小孩子吧……',
          ]);
          await urara.say_and_wait('可是不管会不会接受，都不能逃避本心呢！');
          await urara.say_and_wait([
            '就算很困难，但是不诚实的话，之后一定会后悔呢！这点 ',
            chara_self_name,
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
            chara_self_name,
            ' 也更要和奔跑时一样，要竭尽全力的去向 ',
            callname,
            ' 表达真心。',
          ]);
          await urara.print_and_wait([
            '那样的话就算没能拿到一着、就算被 ',
            callname,
            ' 拒绝，也能够和往常一样甘心的接受——',
          ]);
          if (relation > 150) {
            await urara.print_and_wait([
              '因为 ',
              chara_self_name,
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
              chara_self_name,
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
          if (
            sys_filter_chara('cflag', '招募状态', recruit_flags.yes).filter(
              (e) => e > 0 && era.get(`love:${e}`) >= 75,
            ).length > 0
          ) {
            await urara.say_and_wait([
              '即使 ',
              callname,
              '，已经有了其他女孩子？',
            ]);
            await urara.print_and_wait([
              '刚刚下定决心，来自不知何处的质问却紧随而至，但已做好准备的 ',
              chara_self_name,
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
              chara_self_name,
              ' 很笨，还有很多事情都不明白，但 ',
              chara_self_name,
              ' 不是胆小鬼。',
            ]);
            await urara.say_and_wait([
              '我不会逃避，为了下次能继续抬头挺胸的与 ',
              callname,
              ' 在一起——！',
            ]);
          }
          add_event(event_hooks.week_start, event_object);
        } else {
          await urara.say_and_wait([
            '嗯！果然还是一如既往吧，',
            chara_self_name,
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
            chara_self_name,
            ' 最终还是来到了当机的极限值。',
          ]);
          await urara.print_and_wait([
            '晕晕乎乎的，',
            chara_self_name,
            ' 又将希望寄予了可靠的舍友，或许',
            urara.sex,
            '可以带来什么意见？',
          ]);
          await urara.say_and_wait([
            '不过旁边的 ',
            sys_get_colored_callname(52, 61),
            ' 已经睡着了啊，明明平常都是 ',
            chara_self_name,
            ' 会先睡着来着？',
          ]);
          await urara.say_and_wait([
            '嗯，不要再胡思乱想了 ',
            chara_self_name,
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
            chara_self_name,
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
            me.get_colored_name(),
            ' 还是',
            urara.sex,
            '不用再担心有人突然失眠的问题了。',
          ]);
          await urara.print_and_wait([
            '只是这样一丝不挂的入睡，在第二天起床时肯定会把可怜的「室友妈妈」吓一跳吧。',
          ]);
          begin_and_init_ero(52);
          await masturbate(52);
          end_ero_and_train();
          era.set('status:52:熬夜', 1);
          era.set('cflag:52:爱慕暂拒', 74);
        }
      } else {
        await print_event_name(`致等待已久的${urara.sex}`, urara);
        await era.printAndWait([
          '或许是因为那天遇上了很多事情，',
          me.get_colored_name(),
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
          me.get_colored_name(),
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
          me.get_colored_name(),
          ' 终于——',
        ]);
        era.printButton('主动去牵起乌拉拉的手。', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          ' 轻轻地牵起了身边人的手，而回应的则是在略微迟疑后温暖的回握。',
        ]);
        await era.printAndWait([
          '将目光悄悄地转向一侧，沉默的 ',
          urara.get_colored_name(),
          ' 终于冲 ',
          me.get_colored_name(),
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
        if (relation > 150) {
          await urara.say_and_wait(
            '虽然比想象中的稍微有些晚了，但是乌拉拉依旧这样喜欢着训练员哦！',
          );
          await era.printAndWait([
            '靠在身边回应着 ',
            me.get_colored_name(),
            ' 的情感，',
            urara.get_colored_name(),
            ' 不知不觉中笑了出来。',
          ]);
          await urara.say_and_wait([
            '请多指教……？嘿嘿～果然不太适合乌拉拉呢！',
          ]);
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
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
          await urara.say_and_wait(
            '不过训练员，走夜路真的很黑呢，不要只送别人回家哦？',
          );
          await urara.say_and_wait(
            '突然放开的话，也许乌拉拉会走丢也说不定呢……',
          );
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
        await in_urara.say_as_unknown_and_wait([
          '回忆着那天的点点星光，小小的',
          urara.uma_sex_title,
          '如此祈愿着。',
        ]);
        await sys_love_uma_in_event(52);
      }
    } else if (stage === event_hooks.week_start) {
      await print_event_name('致做出选择的你', urara);
      await in_urara.say_as_unknown_and_wait(
        '坐在自己的办公桌前处理着文件，你回想着今天与乌拉拉在一起时的意外遭遇。',
      );
      await in_urara.say_as_unknown_and_wait(
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
        me.get_colored_name(),
        ' 差点以为自己幻听了，又或者 ',
        urara.get_colored_name(),
        ' 被谁教了奇怪的玩笑？',
      ]);
      await era.printAndWait([
        '但当坐在桌前的 ',
        me.get_colored_name(),
        ' 转头看去，却发现小',
        urara.uma_sex_title,
        '就站在身后，带着与竞争重赏时相当的神情靠了过来。',
      ]);
      await era.printAndWait([
        '与平日的相处模式没有关系，亦没有任何怀疑的余地，',
        urara.get_colored_name(),
        ' 与 ',
        me.get_colored_name(),
        ' 挤上了同一张椅子。',
      ]);
      await era.printAndWait([
        '仿佛要夺得一着那般，',
        urara.get_colored_name(),
        ' 霸占性的坐在了 ',
        me.get_colored_name(),
        ' 的大腿上，将全部身体压在担当训练员的身前。',
      ]);
      await urara.say_and_wait([
        '所以 ',
        callname,
        '！对乌拉拉究竟是怎么想的呢？乌拉拉想现在就知道！',
      ]);
      await era.printAndWait([
        '在樱瞳与 ',
        me.get_colored_name(),
        ' 的咫尺之间，小小的',
        urara.uma_sex_title,
        '带着严肃的笑意再次向 ',
        me.get_colored_name(),
        ' 问道。',
      ]);
      await era.printAndWait([
        '只是此刻被 ',
        urara.get_colored_name(),
        ' 堵住退路的 ',
        me.get_colored_name(),
        ' 并不意外，相反 ',
        me.get_colored_name(),
        ' 或许打心底就知道可能会有这一天。',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 是',
        urara.sex,
        '的训练员，连 ',
        urara.get_colored_name(),
        ' 都能察觉到的感情，就算不敢认同，',
        me.get_colored_name(),
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
      in_urara.say_as_unknown([
        '面对安静等待着的 ',
        urara.get_colored_name(),
        '，训练员 ',
        me.adult_sex_title,
        '（您）当时的选择是——',
      ]);
      era.printButton(`抱住 ${urara.name}`, 1);
      era.printButton('「现在还不行……」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '在片刻的抉择后，',
          me.get_colored_name(),
          ' 将 ',
          urara.get_colored_name(),
          ' 拥入了怀中。',
        ]);
        await urara.say_and_wait(
          '诶嘿嘿～让训练员为难了呢，但是训练员真的选择乌拉拉了，感觉好开心……',
        );
        await era.printAndWait([
          '紧绷的身体在 ',
          me.get_colored_name(),
          ' 拥抱中变得逐渐柔软，',
          urara.get_colored_name(),
          ' 看起来也因为 ',
          me.get_colored_name(),
          ' 的选择而松了口气。',
        ]);
        await era.printAndWait([
          '虽然有些和平日的 ',
          urara.get_colored_name(),
          ' 不太一样，但作为',
          urara.sex,
          '的训练员 ',
          me.get_colored_name(),
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
        if (relation > 150) {
          await urara.say_and_wait(
            '训练员，不要因为乌拉拉贬低自己哦？因为这也是乌拉拉做出的选择。',
          );
          await era.printAndWait([
            '回忆中，',
            urara.get_colored_name(),
            ' 伸出了令人安心的小手，揉搓着 ',
            me.get_colored_name(),
            ' 脸颊上的犹豫。',
          ]);
          await era.printAndWait([
            '露出似乎什么都懂一点的表情，',
            urara.get_colored_name(),
            ' 用一如既往的笑容回应着 ',
            me.get_colored_name(),
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
            me.get_colored_name(),
            ' 的脸颊。',
          ]);
          await era.printAndWait([
            '带着绝不会反悔的神色，少女勇敢地向 ',
            me.get_colored_name(),
            ' 可能掺入了杂质的爱做出了回应。',
          ]);
          await urara.say_and_wait(
            '不用再忍耐了哦训练员，因为做出选择的乌拉拉就在这里，就在训练员身边……！',
          );
          await era.printAndWait('是啊，如今已经不会再被责怪了……');
        }
        era.println();
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
          await urara.say_and_wait(
            '但这下子，就算乌拉拉被大家说卑鄙，也不能回头了哦……',
          );
          await era.printAndWait([
            '柔软的缩在 ',
            me.get_colored_name(),
            ' 的怀中，',
            urara.get_colored_name(),
            ' 突然靠在 ',
            me.get_colored_name(),
            ' 的身前轻声说道。',
          ]);

          era.printButton('「——」', 1);
          await era.input();

          await era.printAndWait([
            '只是在 ',
            me.get_colored_name(),
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
        await in_urara.say_as_unknown_and_wait(
          '回忆着着怀中乌拉拉那份小巧而踏实的温润与柔软，美好的回忆暂时告一段落了。',
        );
        await in_urara.say_as_unknown_and_wait(
          '可喜可贺？不，并没有在说反话，因为我也愿意相信，您会是幸福的。',
        );
        await sys_love_uma_in_event(52);
      } else {
        await urara.say_and_wait(
          '果然乌拉拉的问题太唐突了！可不能让训练员太为难呢！',
        );
        await era.printAndWait([
          '在 ',
          me.get_colored_name(),
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
        if (relation > 150) {
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
            me.get_colored_name(),
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
        await in_urara.say_as_unknown_and_wait(
          '所以在那之前，就算是桥到船头自然直，两人的关系又该怎么处理呢？',
        );
        await in_urara.say_as_unknown_and_wait(
          '在椅子上慵懒地摇晃着，你与乌拉拉就这样度过了某段无所事事又心事重重的时光。',
        );
        await in_urara.say_as_unknown_and_wait('……');
        await in_urara.say_as_unknown_and_wait(
          '已经不知道您在想什么了，都到这时候了有不答应的道理吗？',
        );
        await in_urara.say_as_unknown_and_wait(
          '……对不起说了不该说的话，总之辛苦了。',
        );
        new UraraLifeMarks().active_74 = 1;
        era.set('cflag:52:爱慕暂拒', 74);
        await punish_rejecting_love(52);
      }
    }
  }
};
