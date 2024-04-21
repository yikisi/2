const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const plana = require('#/event/edu/edu-events-32/week-start-06-plana');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 1] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
  ) => {
    era.set('cflag:32:节日事件标记', 0);
    let ret;
    if (edu_marks.plan_b) {
      await print_event_name('下定决心的新年', tachyon);
      await era.printAndWait('新年');
      await era.printAndWait('本该是除旧岁，迎新年的喜庆日子');
      await era.printAndWait(
        '到神社参拜，也象征着洗去去年的一切，迎接新年的到来',
      );
      era.println();
      await era.printAndWait('然而……孽缘往往，是难以洗净的');
      await era.printAndWait('无论是与谁，在什么地点，哪怕神社也不例外');
      await era.printAndWait('会如影随形，死缠烂打跟在身边，令人厌恶的存在');
      await era.printAndWait('没错，所谓的孽缘即是————');
      era.println();
      await tachyon.say_and_wait(['哦呀，', callname, '……真巧啊']);
      era.printButton('「速……速子！」', 1);
      era.printButton('「先不说这个了，快跑！」', 2);
      await era.input();
      await tachyon.say_and_wait('啊，等……');
      await era.printAndWait([
        '没等 ',
        tachyon.get_colored_name(),
        ' 回应，',
        me.get_colored_name(),
        ' 便拉着',
        tachyon.sex,
        '往神社里钻，很快便消失在了人群之中',
      ]);
      await say_by_passer_by_and_wait('记者A', '咕……没逮到');
      await say_by_passer_by_and_wait(
        '记者B',
        '没想到没发着光的时候这么难找……',
      );
      era.println();
      await say_by_passer_by_and_wait('记者C', '……在这边堵着，千万不能漏掉了');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 拉着 ',
        tachyon.get_colored_name(),
        ' 躲在人群中，确认没有拿着摄影机的记者追上来才放下了心来',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 在有马纪念后的忽然宣布复归，对媒体而言可以说是最让人注目的焦点了',
      ]);
      await era.printAndWait([
        '但由于担心 ',
        tachyon.get_colored_name(),
        ' 的状况，',
        me.get_colored_name(),
        ' 拒绝了一切关于此事的采访',
      ]);
      await era.printAndWait('却没想到他们直接追上门来……！');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait([
        '这时 ',
        me.get_colored_name(),
        ' 才想起，',
        me.get_colored_name(),
        ' 刚刚没想太多就抓着 ',
        tachyon.get_colored_name(),
        ' 跑了起来……',
      ]);
      era.printButton('「速子，腿没事吧！」', 1);
      await era.input();
      await era.printAndWait('……没什么，只是，有点吓到了，呵呵');
      await era.printAndWait([
        '毕竟还是',
        tachyon.get_uma_sex_title(),
        '，哪怕是腿脚不便的',
        tachyon.get_uma_sex_title(),
        '身体素质比起人类还是强上许多，更何况还是今年要回归赛场的前G1',
        tachyon.get_uma_sex_title(),
        '了',
      ]);
      era.println();
      const coffee = get_chara_talk(25),
        t_call_c = sys_get_colored_callname(32, 25);
      await me.say_and_wait('……是啊，回归赛场', true);
      era.printButton('「速子」', 1);
      era.printButton('「今年的赛程……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '那当然……是和 ',
        t_call_c,
        ' 一样了，这不用我多说吧',
      ]);
      era.println();
      await era.printAndWait('果然如此');
      await era.printAndWait([me.get_colored_name(), ' 点了点头']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 离开赛场，以及离开赛场的原因，都是为了 ',
        coffee.get_colored_name(),
        '———',
        me.get_colored_name(),
        ' 的另一名负责',
        tachyon.get_uma_sex_title(),
      ]);
      await era.printAndWait([
        '那么，在有限能够选择的比赛中，当然必须要以 ',
        coffee.get_colored_name(),
        ' 参加的比赛为优先…………',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？怎么了吗？']);
      era.println();
      await era.printAndWait('心中还是忍不住想起');
      await era.printAndWait([
        '夏日集训时 ',
        tachyon.get_colored_name(),
        ' 脸上的表情',
      ]);
      await era.printAndWait([
        '菊花赏后 ',
        tachyon.get_colored_name(),
        ' 的眼神',
      ]);
      await era.printAndWait([
        '有马前……',
        tachyon.get_colored_name(),
        ' 下定决心时的神情',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 这才发现 ',
        tachyon.get_colored_name(),
        ' 正盯着 ',
        me.get_colored_name(),
        ' 似乎有些时间了，连忙回过神来问怎么了',
      ]);
      era.println();
      await tachyon.say_and_wait('……没什么，只是快轮到我们了');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '指着神社，然后 ',
        me.get_colored_name(),
        ' 才发现，',
        me.get_couple_title(),
        ' 匆忙跑入的，是本舍前祈求神明保佑的长列',
      ]);
      era.printButton('「速子你不是不信这些吗？」', 1);
      await era.input();
      await era.printAndWait([
        '话一出口 ',
        me.get_colored_name(),
        ' 便感觉坏事',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '……哦，真看不出来，你原来还会在乎我的意愿啊',
        );
        era.println();
        await era.printAndWait(['果不其然，遭到了', tachyon.sex, '的冷嘲热讽']);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait('……不是你把我拉过来的吗？');
        era.println();
        await era.printAndWait([
          '这么说起来，似乎还没跟 ',
          tachyon.get_colored_name(),
          ' 解释过……',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 连忙说了记者的事情']);
        await era.printAndWait([
          '听完后',
          tachyon.sex,
          '没有过多的反应，只说了句这样啊',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          '虽然不信……但我姑且当成你的心意吧，再说不是你先把我拉过来的吗？',
        );
        era.println();
        await era.printAndWait([
          '这么说起来，似乎还没跟 ',
          tachyon.get_colored_name(),
          ' 解释过……',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 连忙说了记者的事情']);
        await era.printAndWait(['听完后', tachyon.sex, '露出了有些抱歉的眼神']);
      } else {
        await tachyon.say_and_wait('我相信的不是神，而是将我带到这里的你');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' 忽然说了些令人羞耻的内容',
        ]);
        await era.printAndWait([
          '这么说起来，似乎还没跟 ',
          tachyon.get_colored_name(),
          ' 解释过……',
        ]);
        await era.printAndWait([me.get_colored_name(), ' 连忙说了记者的事情']);
        await tachyon.say_and_wait('呵，一群庸碌的蚊蝇而已，也敢质疑我们？');
        await era.printAndWait([tachyon.get_colored_name(), ' 不屑的笑了声']);
      }
      era.println();
      await era.printAndWait([
        '对话的途中，',
        me.get_couple_title(),
        ' 已经排到了队伍最前方',
      ]);
      await era.printAndWait([me.get_colored_name(), ' 望着眼前的神像']);
      await era.printAndWait('那么……该许什么愿呢');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        ' 思考了许多，想了许多要许的愿望',
      ]);
      await era.printAndWait('双手合十，向神明祈祷');
      await era.printAndWait([
        '希望 ',
        tachyon.get_colored_name(),
        ' 的双腿不要有事，健康跑完',
      ]);
      await era.printAndWait([
        '希望 ',
        tachyon.get_colored_name(),
        ' 的比赛可以一如往常的精彩',
      ]);
      await era.printAndWait([
        '希望……',
        coffee.get_colored_name(),
        ' 的训练也能平安进行',
      ]);
      era.println();
      await era.printAndWait([
        '结束祈祷，',
        me.get_colored_name(),
        ' 抬头看向一旁的 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        '早就已经结束了敷衍的祈祷，正等待着 ',
        me.get_colored_name(),
      ]);
      await era.printAndWait([
        me.get_couple_title(),
        ' 两人离开人群，小心的避开了还不死心的记者回到学园',
      ]);
      era.println();
      await tachyon.say_and_wait(['那么……你都祈祷了什么？']);
      era.println();
      await era.printAndWait([
        '不知为何，',
        tachyon.get_colored_name(),
        ' 很好奇的样子',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 告诉',
        tachyon.sex,
        '……',
      ]);
      era.printButton('速子的健康（体力+20%）', 1);
      era.printButton('速子的比赛（随机属性+20）', 2);
      era.printButton('茶座的训练（技能点数+30）', 3);
      ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            me.get_colored_name(),
            ' 告诉',
            tachyon.sex,
            '，',
            me.get_colored_name(),
            ' 祈祷了',
            tachyon.sex,
            '的双腿健康',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('……无聊的愿望');
            await tachyon.say_and_wait(
              '如果只求身体健康……那我不回归赛场不就好了吗？',
            );
            await tachyon.say_and_wait([
              '都已经决定抛弃一切了，还许这种愿……',
              callname,
              ' 你的觉悟不足啊',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 的回复十分辛辣',
            ]);
            await era.printAndWait([
              '听起来仿佛对 ',
              me.get_colored_name(),
              ' 说的愿望打从心底嗤之以鼻',
            ]);
          } else {
            await tachyon.say_and_wait('……身体健康啊');
            await tachyon.say_and_wait('不，没什么，只是……呵呵');
            await tachyon.say_and_wait('是啊，要是能够健康的跑完就好了');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' 轻描淡写的说着',
            ]);
            await era.printAndWait(
              '仿佛这只是一场普通的谈天——也确实如此——而已',
            );
          }
          era.println();
          await era.printAndWait(['但是 ', me.get_colored_name(), ' 没有看漏']);
          await era.printAndWait([
            '在说出愿望的同时，',
            tachyon.get_colored_name(),
            ' 眼神中绽放出的希望和渴望',
          ]);
          await era.printAndWait('……可是，看见了又能怎么办呢？');
          await era.printAndWait([
            '追寻那种可能的道路，在几个月前就已经被 ',
            me.get_colored_name(),
            ' 亲手封上',
          ]);
          await era.printAndWait([
            '现在的 ',
            me.get_colored_name(),
            ' 与',
            tachyon.sex,
            '，只是在朝着自毁的道路狂奔而已',
          ]);
          era.println();
          await era.printAndWait('所以只能献上祈祷');
          await era.printAndWait('至少，在这最后的时间里');
          await era.printAndWait([tachyon.sex, '能免于痛苦，免于伤病']);
          era.println();
          await tachyon.say_and_wait('……没什么事，我就回去了');
          era.printButton('「注意休息」', 1);
          break;
        case 2:
          await era.printAndWait([
            me.get_colored_name(),
            ' 告诉',
            tachyon.sex,
            '，',
            me.get_colored_name(),
            ' 祈祷了',
            tachyon.sex,
            '和 ',
            coffee.get_colored_name(),
            ' 的比赛顺利',
          ]);
          era.println();
          await tachyon.say_and_wait('哈哈，这不是不错的愿望吗？');
          await tachyon.say_and_wait([
            t_call_c,
            ' 已经证明了',
            tachyon.sex,
            '的可能性……接下来，该轮到我了',
          ]);
          await tachyon.say_and_wait([
            '明明说着要成为',
            tachyon.sex,
            '的垫脚石，我可不能原地踏步啊，不然，充其量也就是鹅卵石而已了',
          ]);
          era.println();
          await me.say_and_wait([
            '虽然 ',
            tachyon.get_colored_name(),
            ' 口口声声说着为了 ',
            coffee.get_colored_name(),
          ]);
          await era.printAndWait([
            '但 ',
            me.get_colored_name(),
            ' 依然没有错过……',
          ]);
          await era.printAndWait([
            '在提起比赛时，',
            tachyon.get_colored_name(),
            ' 眼中闪过的斗志',
          ]);
          await era.printAndWait([
            '果然，',
            tachyon.get_colored_name(),
            ' 还是渴望回到赛场的吧',
          ]);
          await era.printAndWait('……但是，渴望又能怎么办呢');
          await era.printAndWait([
            '追寻那种可能的道路，在几个月前就已经被 ',
            me.get_colored_name(),
            ' 亲手封上',
          ]);
          await era.printAndWait([
            '现在的 ',
            me.get_colored_name(),
            ' 与',
            tachyon.sex,
            '，只是在朝着自毁的道路狂奔而已',
          ]);
          era.println();
          await era.printAndWait('所以只能献上祈祷');
          await era.printAndWait('至少，在这最后的时间里');
          await era.printAndWait([
            '希望在剩下的时间中，',
            tachyon.sex,
            '能尽情享受，那样的时光',
          ]);
          era.println();
          await tachyon.say_and_wait('呵呵，为了你的期待，得马上开始训练了啊');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 开心的朝着训练场走去',
          ]);
          era.printButton('……训练小心', 1);
          break;
        case 3:
          await era.printAndWait([
            me.get_colored_name(),
            ' 告诉',
            tachyon.sex,
            '，',
            me.get_colored_name(),
            ' 祈祷了 ',
            coffee.get_colored_name(),
            ' 的训练顺利',
          ]);
          era.println();
          await tachyon.say_and_wait('……嗯');
          await tachyon.say_and_wait([
            '当然了……毕竟我们做的，都是为了 ',
            t_call_c,
            ' 能够更加，并且超越极限啊',
          ]);
          await tachyon.say_and_wait([
            '要是',
            tachyon.sex,
            '的训练出现问题，那么……一切就白费了',
          ]);
          await tachyon.say_and_wait(
            '所以这个才是重中之重……你能够不忘优先顺序，我很高兴',
          );
          era.println();
          await era.printAndWait([
            '虽然 ',
            tachyon.get_colored_name(),
            ' 口口声声说着为了 ',
            coffee.get_colored_name(),
          ]);
          await era.printAndWait([
            '但 ',
            me.get_colored_name(),
            ' 依然没有错过……提起 ',
            coffee.get_colored_name(),
            ' 时',
            tachyon.sex,
            '眼神中的落寞',
          ]);
          await era.printAndWait([
            '果然，自己不该提起 ',
            coffee.get_colored_name(),
            ' 的吧',
          ]);
          await era.printAndWait([
            '现在，身为 ',
            tachyon.get_colored_name(),
            ' 的训练员时的自己，应该要为了',
            tachyon.sex,
            '而想才对吧',
          ]);
          await era.printAndWait([
            '但……为',
            tachyon.sex,
            '着想的权利早在几个月前就已经被自己抛弃了',
          ]);
          await era.printAndWait([
            '现在的 ',
            me.get_colored_name(),
            ' 和',
            tachyon.sex,
            '，只是在朝着自毁的道路狂奔而已',
          ]);
          era.println();
          await era.printAndWait('因此只能献上祈祷');
          await era.printAndWait('希望能够保障一切的外在因素');
          await era.printAndWait([
            '满足',
            tachyon.sex,
            '，满足 ',
            tachyon.get_colored_name(),
            ' 的「遗愿」',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '呵呵，为了你的期待，接下来我也不能输啊，必须让自己恢复到足以与 ',
            t_call_c,
            ' 站上同个舞台才行',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' 淡淡的说完，朝着实验室走去',
          ]);
          era.printButton('「……实验小心」', 1);
      }
      await era.input();
      await era.printAndWait([tachyon.sex, '挥了挥手表示知道了']);
    } else {
      ret = await plana(tachyon, me, callname, relation, love);
    }
    switch (ret) {
      case 1:
        flags.wait_flag = get_attr_and_print_in_event(
          32,
          undefined,
          0,
          JSON.parse(`{"体力":${era.get('base:32:体力') * 0.2}`),
        );
        break;
      case 2:
        {
          const temp = new Array(5).fill(0);
          temp[get_random_entry(Object.values(attr_enum))] = 20;
          flags.wait_flag = get_attr_and_print_in_event(32, temp, 0);
        }
        break;
      case 3:
        flags.wait_flag = get_attr_and_print_in_event(32, undefined, 30);
    }
  };
};
