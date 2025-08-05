const era = require('#/era-electron');

const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { good_end, handle_debuff, normal_end } = require('#/event/snippets/17');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const { buff_colors } = require('#/data/color-const');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  async race_end(chara, me, callname, hook, extra_flag) {
    const edu_marks = new LunaEduMarks();
    const i_emperor = edu_marks.emperor;
    const { luna, emperor } = i_emperor
      ? { emperor: 17, luna: 9017 }
      : {
          emperor: 9017,
          luna: 17,
        };
    const luna_talk = get_chara_talk(luna);
    const emperor_talk = get_chara_talk(emperor);
    const edu_weeks = era.get('cflag:17:育成回合计时');
    if (extra_flag.rank === 1) {
      hook.override = true;
      let wait_flag = false;
      if (
        extra_flag.race === race_enum.begin_race &&
        edu_weeks < 48 &&
        extra_flag.rank === 1
      ) {
        // 新秀年出道战
        await print_event_name('进攻开始', chara);

        await era.printAndWait(
          `在和象征家略加商讨后，${me.name} 为露娜的出道报了名。`,
        );
        await era.printAndWait('就在日本杯当天。');
        await era.printAndWait(
          `露娜知道 ${me.name} 的判断后眉头紧蹙，但最终没有反对。`,
        );
        await era.printAndWait(
          `${me.name} 知道这相当地……恶意，但确实是一件没有办法的办法。`,
        );
        await era.printAndWait('日本需要提振信心，哪怕是将希望寄托在未来。');
        await era.printAndWait(
          `所以，当 ${me.name} 目睹了一场谈不上是竞争的赛事后，${me.name} 本能地松了一口气。`,
        );
        await era.printAndWait(
          `事实上，当 ${me.name} 意识到的时候，自己的双手已经紧紧握成拳头。`,
        );
        await me.say_and_wait('我是要向谁挥拳吗？他*的……', true);
        await era.printAndWait(
          `${me.name} 不可思议地看着自己的手，感觉视线颤抖。`,
        );
        await era.printAndWait(
          `不仅如此，${me.name} 还渐渐感觉到口干舌燥、头晕目眩。`,
        );
        await era.printAndWait(
          `${chara.name}，${chara.sex}是多么……多么……多么……强大！！！`,
        );
        await era.printAndWait(
          `${me.name} 无法形容自己此刻的感受，但唯有一件事是知道的——`,
        );
        await era.printAndWait(`${me.name} 是如此地卑鄙。`);
        await era.printAndWait(
          `不然要如何解释 ${me.name} 的笑容？还有听到那些外国佬惊呼时的狂喜？`,
        );
        era.printButton('（为了让全世界的人都明白一件事情。）', 1);
        era.printButton('（看到了吗？世界——）', 2);
        await era.input();
        await era.printAndWait(`${me.name} 哈哈大笑。`);
        era.printButton('「露娜，她要将世界席卷。」', 1);
        era.printButton('「皇帝，她要将世界席卷！」', 2);
        await era.input();
        await era.printAndWait('那天，所有人都被夺取了心智。');
        await era.printAndWait(
          `那天，露娜回来时没有和 ${me.name} 庆祝，只是悲伤地扑进了 ${me.name} 的怀里。`,
        );
        await era.printAndWait('那天，日本赛马娘再次输掉了日本杯。');
        await era.printAndWait(
          '没事的，没事的……只要有露娜在，一切都会好起来的。',
        );
        await era.printAndWait(`${me.name} 安慰着露娜，所有的担忧都烟消云散。`);
        era.println();
        wait_flag = sys_love_uma(luna, 4);
      } else if (extra_flag.race === race_enum.saud_cup && edu_weeks < 48) {
        // 新秀年沙特阿拉伯RC
        await print_event_name('破竹之势', chara);

        await era.printAndWait(`${chara.sex}按照计划赢下了比赛。`);
        await era.printAndWait(`${me.name} 的余光看到了同僚们。`);
        await era.printAndWait(
          '离他们的担当回来，他们必须故作轻松前，还有一些时间。',
        );
        await era.printAndWait(
          `所以 ${me.name} 不会怪罪他们的长吁短叹，和那些投向自己或羡慕或嫉妒的目光。`,
        );
        await era.printAndWait(
          `${me.name} 是鲁铎象征的训练员，${chara.sex}会取得胜利，${me.name} 也会。`,
        );
        await era.printAndWait('不过');
        era.printButton(i_emperor ? '「您凯旋……！」' : '「辛苦了……！」', 1);
        await era.input();
        await era.printAndWait(
          `看到 ${chara.name} 归来，${me.name} 刚想打招呼，却见另一位赛马娘迎上了${chara.sex}。`,
        );
        await era.printAndWait(`${me.name} 不由得紧张起来——是丸善斯基。`);
        await era.printAndWait(`如果在这个时候刺激 ${chara.name}——`);
        await era.printAndWait('但所幸，二人只是稍加攀谈，并都露出了笑容。');
        await era.printAndWait(`归来时，${chara.name} 仍然欢欣雀跃。`);
        await era.printAndWait(
          `${me.name} 知道，${chara.sex}的笑容并非因为取得了胜利，而是和丸善斯基刚刚的对话。`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '那样强大的怪物，正等着我去狩猎——'
            : '能得到前辈的肯定，特别是丸善的肯定，对我而言意义重大。',
        );
        await era.printAndWait(
          `${me.name} 知道，就算是在所有的赛马娘里，丸善斯基依旧以压倒性的强大而闻名。`,
        );
        await era.printAndWait(
          `但是，作为 ${chara.name} 的训练员，${me.name} 只清楚一件事情。`,
        );
        era.printButton('「赢的会是你。」', 1);
        era.printButton('「到那时，『皇帝』的实力将会更得到证明。」', 2);
        const ret = await era.input();
        await era.printAndWait(
          `似乎很惊讶 ${me.name} 会这样说，${chara.name} 微微一笑。`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '倒是说了句漂亮话，凯旋吧！'
            : '这就是所谓被刺激出了本能吧？哪怕我已经不再愿意奔跑，却仍然能够感到战栗。',
        );
        era.println();
        wait_flag = sys_like_chara(emperor, 0, 50 * (ret === 2));
        wait_flag = sys_love_uma(luna, 4) || wait_flag;
      } else if (extra_flag.race === race_enum.sats_sho) {
        // 经典年皋月赏后
        await print_event_name('卧薪尝胆', chara);

        await me.say('首先是第一冠。');
        await era.printAndWait(
          i_emperor
            ? `仿佛和 ${me.name} 一样咀嚼着这份喜悦，皇帝高高举起一根手指。`
            : `仿佛和 ${me.name} 一样咀嚼着这份喜悦，露娜抬起头，长舒一口气。`,
        );
        await era.printAndWait('如此压倒性的强大，如此不容置疑的强大。');
        await era.printAndWait(
          '观众们对着传说开幕般的场景，发出了迄今为止最热烈的欢呼。',
        );
        era.printButton('「或许真的能实现……如果是皇帝的话。」', 1);
        era.printButton('「或许真的能实现……如果是露娜的话。」', 2);
        await era.input();
        await era.printAndWait(`${me.name} 还记得，那日露娜对你说的话。`);
        await luna_talk.say('去创造一个所有赛马娘都能幸福的世界。');
        era.println();
        wait_flag = sys_love_uma(luna, 4);
      } else if (
        extra_flag.race === race_enum.toky_yus &&
        check_aim_race(era.get('cflag:17:育成成绩'), race_enum.sats_sho, 1, 1)
      ) {
        // 经典年日本德比后
        await print_event_name('拔山盖世', chara);

        await me.say_and_wait('这就是第二冠了！');
        await era.printAndWait('距离实现梦想，又近了一步。');
        await era.printAndWait(
          '人们都在热烈地讨论，在德比上，鲁铎象征发挥出了多么强劲的实力。',
        );
        await era.printAndWait('多么不可思议！');
        if (i_emperor) {
          await era.printAndWait(
            '仿佛和众人一样品味着这份惊喜，皇帝高高举起两根手指。',
          );
        } else {
          await era.printAndWait(
            '仿佛和众人一样品味着这份惊喜，露娜露出了由衷的笑容。',
          );
        }
        await era.printAndWait(
          '随后的几天里，人们都在热烈地讨论，在德比上，鲁铎象征发挥出了多么强劲的实力。',
        );
        await era.printAndWait(
          `${chara.sex}的名字与那些历史上伟大的赛马娘们相提并论。`,
        );
        await era.printAndWait('那些璀璨，最终又暗淡了的明星们。');
        await era.printAndWait('可鲁铎象征好像不一样。');
        await era.printAndWait(
          `只有 ${me.name} 知道，在德比里，${chara.sex}踏进了更深远的一步——`,
        );
        await era.printAndWait('领域。');
        await era.printAndWait(
          `直到现在，谈到这里，${me.name} 仍感到深深的敬畏。`,
        );
        await era.printAndWait(`但转念一想，${me.name} 又感到唏嘘不已。`);
        await era.printAndWait(
          '前人也曾做到过，但时光一点一点毫不留情地过去，所有伟大都只成为了回忆。',
        );
        era.printButton(
          '「如今还活跃着的，尚存一丝本格化力量的也仅有丸善斯基了。」',
          1,
        );
        await era.input();
        await era.printAndWait(`${me.name} 和 ${chara.name} 诉说着。`);
        await era.printAndWait(
          `一旦本格化消失，再强大的赛${chara.get_uma_sex_title()}也泯然众人，只留下一点点的回忆。`,
        );
        await era.printAndWait(
          `这是无可抗拒的，终有一天，${chara.name} 也会……`,
        );
        await era.printAndWait(
          `似乎是感受到了 ${me.name} 兴奋之下隐藏的悲叹，${chara.name} 静静地看着你。`,
        );
        if (i_emperor) {
          await chara.say_and_wait('征途永远不会停止。');
        } else {
          await chara.say_and_wait('我们的梦想……我似乎得到了答案。');
        }
        era.printButton('「……」', 1);
        await era.input();
        await era.printAndWait(
          `${me.name} 不明白这句话的含义，但 ${chara.name} 并没有向你解释的意思。`,
        );
        await chara.say_and_wait('伊甸……');
        era.drawLine();
        await chara.print_and_wait(
          `在 ${me.name} 和 ${chara.name} 分别后，${chara.sex}独自来到了学园中庭。`,
        );
        await chara.print_and_wait(
          '看着三女神的雕像，回味着踏入领域的光景，站在世代最顶点的赛马娘握紧了拳。',
        );
        if (i_emperor) {
          await chara.say_and_wait('桎梏，永远不应该存在。');
        } else {
          await chara.say_and_wait(
            `我一定会完成我和 ${me.actual_name} 的愿望，哪怕我……`,
          );
        }
        era.println();
        sys_love_uma(luna, 4);
        era.set('status:17:领域', 1);
        era.print([
          chara.get_colored_name(),
          ' 领悟了',
          { color: buff_colors[1], content: ' [领域]', fontWeight: 'bold' },
          '！',
        ]);
        wait_flag = true;
      } else if (
        extra_flag.race === race_enum.kiku_sho &&
        check_aim_race(
          era.get('cflag:17:育成成绩'),
          race_enum.sats_sho,
          1,
          1,
        ) &&
        check_aim_race(era.get('cflag:17:育成成绩'), race_enum.toky_yus, 1, 1)
      ) {
        // 经典年菊花赏后
        await print_event_name('三冠达成', chara);

        await era.printAndWait('仿佛怒吼一般，全世界都在热烈地欢呼。');
        await era.printAndWait('又一位赛马娘达成了这伟业！');
        await era.printAndWait(
          '适时，管弦乐队开始演奏一场家喻户晓，且极其应景的交响曲。',
        );
        await era.printAndWait('【皇帝】', { color: color_17[1] });
        await era.printAndWait(`${me.name} 热泪盈眶，扶着腰，低下了头。`);
        await era.printAndWait(`${me.name} 知道，约定，和梦想，还远未达成。`);
        await era.printAndWait('但一会就好……一会就好……');
        await era.printAndWait(`${me.name} 低着头，在无人知晓的地方嚎啕大哭。`);
        era.printButton('「恭喜你……」', 1);
        era.printButton('「有史以来……最伟大的表现……」', 2);
        await era.input();
        await era.printAndWait(`${me.name} 为 ${chara.name} 感到无尽的骄傲！`);
        await era.printAndWait(
          i_emperor
            ? `仿佛和 ${me.name} 心有灵犀，皇帝高高举起三根手指。`
            : `仿佛和 ${me.name} 心有灵犀，露娜流下了幸福的泪水。`,
        );
        await era.printAndWait(
          `过了许久，气喘吁吁的 ${chara.name} 都没有离开场地。`,
        );
        await era.printAndWait(
          `人们只是觉得${chara.sex}想更久地沐浴在荣光之下。`,
        );
        await era.printAndWait(
          `但 ${chara.name} 滔天的战意之下，${me.name} 却突然发现，${chara.sex}的脚步摇摇晃晃。`,
        );
        await era.printAndWait(
          `${me.name} 捏紧了拳头，一股从未有过的寒意席卷了 ${me.name} 的身体。`,
        );
        era.printButton('「该不会……」', 1);
        era.printButton('「伤病……」', 2);
        await era.input();
        era.drawLine();
        await chara.print_and_wait(
          `当晚，${chara.name} 独自来到了中庭、三女神的雕像之下。`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '无论你们建造的摇篮（监狱）多坚固……'
            : '还差一点，我就能进去了……',
        );
        era.println();
        const tmp = new Array(5).fill(0);
        tmp[get_random_entry(Object.values(attr_enum))] = 15;
        wait_flag = get_attr_and_print_in_event(17, tmp, 0) || wait_flag;
      } else if (extra_flag.race === race_enum.japa_cup && edu_weeks >= 96) {
        // 资深年日本杯
        await print_event_name('油尽灯枯', emperor_talk);

        await era.printAndWait(
          `${me.name} 看着 ${chara.name} 冲过终点，${chara.sex}浑身颤抖，在观众的欢呼声中迅速离场。`,
        );
        await era.printAndWait(`${me.name} 赶紧向更衣室跑去。`);
        await era.printAndWait('不会错的。');
        await era.printAndWait(
          `${me.name} 感觉自己快疯了。看着赛场上，${chara.sex}差点从领域中崩溃，${me.name} 就明白了那所谓的代价是什么。`,
        );
        await era.printAndWait(
          `领域——它的燃料是赛马娘们的未来！否则，${chara.name} 绝不可能受到如此之大的伤害，简直就像、就像……`,
        );
        await era.printAndWait('本格化的力量消失了一样。');
        await era.printAndWait(
          `${me.name} 来到更衣室，突然听到了一声巨响！${me.name} 推开门，却发现墙壁上豁然有一个大洞。`,
        );
        await chara.say_and_wait(
          i_emperor
            ? '吾的力量，竟会在赛道中突然消失？'
            : '我抱歉，我情绪有点激动……',
        );
        await era.printAndWait(
          `${me.name} 赶忙向前，看着 ${chara.name} 鲜血淋漓的手，${me.name} 赶紧去找医药箱。`,
        );
        await era.printAndWait(
          `这样下去，不要说奢求胜利了，${chara.sex}甚至无法站上赛场。`,
        );
        await chara.say_and_wait('就算如此，我也不会停下自己的脚步。');
        await era.printAndWait(
          `${me.name} 惊讶地抬起头，却发现 ${chara.name} 的眼中带着 ${me.name} 根本无法理解的情绪。`,
        );
        await era.printAndWait('有惊讶和不甘，也有狂喜和狂怒。');
        await era.printAndWait([
          { content: '？？？「领域消失的那一瞬间，', color: luna_talk.color },
          { content: '我看到了——', color: emperor_talk.color },
          { content: '」', color: luna_talk.color },
        ]);
        await era.printAndWait([
          { content: '？？？「', color: emperor_talk.color },
          { content: '就差一点……', color: luna_talk.color },
          { content: '一点', color: emperor_talk.color },
          { content: '（伊甸）', color: luna_talk.color },
          { content: '」', color: emperor_talk.color },
        ]);
        await era.printAndWait(
          `${me.name} 无法应和，只能强忍着泪水，为 ${chara.name} 处理伤口。`,
        );
        era.println();
        wait_flag = sys_love_uma(luna, 4);
      } else if (extra_flag.race === race_enum.arim_kin && edu_weeks >= 96) {
        // 资深年有马纪念
        if (
          (edu_marks.good_end =
            (extra_flag.rank === 1 && !era.get(`status:17:神经衰弱`)) + 1) === 2
        ) {
          await print_event_name('领域尽头', luna_talk);
        } else {
          await print_event_name('绝响', emperor_talk);
        }
        await chara.print_and_wait('哈……哈……');
        await chara.print_and_wait('哈…………');
        await chara.print_and_wait(
          `${chara.name} 眼前的世界正在剧烈地动摇，${chara.sex}视线内的一切都在模糊。`,
        );
        await chara.print_and_wait(
          `如海潮般袭来的眩晕与疼痛打击着${chara.sex}，领域正在排斥自己——${chara.name} 意识到了。`,
        );
        await chara.print_and_wait(`${chara.sex}已不再无所不能。`);
        await chara.print_and_wait(
          `每迈出一步，${chara.name} 都能感受到巨大的违和感。`,
        );
        await chara.print_and_wait(
          `落足，再抬起。剧烈的疼痛让${chara.sex}面目狰狞得可怕。`,
        );
        await chara.print_and_wait(
          `往常轻易能破开的风好像铁壁横亘，撞得${chara.sex}伤痕累累。`,
        );
        await chara.print_and_wait(
          `在这场比赛中，${chara.sex}像是风暴中被折断双翼的飞鸟。`,
        );
        era.drawLine();
        await chara.print_and_wait(
          `眼皮变得沉重，${chara.name}的意识已经恍惚。`,
        );
        await chara.print_and_wait(
          '领域正在崩塌，那缓慢的场景逐渐要动起来了。',
        );
        await chara.print_and_wait(
          '马娘们在奔跑，踢着绿茵地，激起尘土，把飞草带进风中飘舞。',
        );
        await chara.print_and_wait(
          '自己心脏跳得越来越快，却一丁点的力量也用不出。',
        );
        await chara.print_and_wait(
          '身体的零件：那些肌肉、筋脉和内脏，正在被巨大的惯性撕扯着。',
        );
        await chara.print_and_wait(
          '如果不在这个弯道停下来，在领域完全褪去的瞬间——',
        );
        await chara.print_and_wait('自己会死。');
        await chara.say_and_wait(
          emperor === 17
            ? '赛道并非天途，终有停滞之时。'
            : '这就是领域的真相……透支本格化的力量……',
        );
        await chara.print_and_wait(
          '一代又一代的勇者跨入了领域，透支了自己的未来、理想和一切的可能性。',
        );
        await chara.print_and_wait(`现在，轮到 ${chara.name} 了。`);
        await chara.print_and_wait(
          '在面对生涯，乃至生命的结尾时，自己该做些什么？没人教过自己。',
        );
        await era.printAndWait([
          {
            content: '露娜',
            color: luna_talk.color,
          },
          '&',
          { content: '皇帝', color: emperor_talk.color },
          '「',
          { content: me.actual_name, color: emperor_talk.color },
          { content: '。', color: luna_talk.color },
          '」',
        ]);
        if (edu_marks.good_end === 2) {
          await era.printAndWait([
            {
              content: '露娜',
              color: luna_talk.color,
            },
            '&',
            { content: '皇帝', color: emperor_talk.color },
            '「',
            { content: '你', color: emperor_talk.color },
            { content: '会和我', color: luna_talk.color },
            { content: '（我）', color: emperor_talk.color },
            { content: '一起的吧？', color: luna_talk.color },
            '」',
          ]);
          await era.printAndWait(
            `把胸中的气吐尽，在千千万万的观众的实现下，${chara.name} 加速了！！！`,
          );
          await era.printAndWait('没有道路的延续就自己踏破！');
          await era.printAndWait([
            {
              content: '露娜',
              color: luna_talk.color,
            },
            '&',
            { content: '皇帝', color: emperor_talk.color },
            '「',
            { content: '为了', color: emperor_talk.color },
            { content: '我', color: luna_talk.color },
            { content: '们', color: emperor_talk.color },
            { content: '的梦想！！！', color: luna_talk.color },
            '」',
          ]);
          era.printButton('「冲啊！！！！！！！」', 1);
          await era.input();
          await me.print_and_wait('冲啊！！！！！！！');
          await me.print_and_wait('冲啊！！！！！！！');
          await era.printAndWait(
            `${me.name} 已经不在乎了自己的喉咙会否撕裂了。`,
          );
          await era.printAndWait(
            `${me.name} 只知道，${
              chara.name
            } 正向 ${me.get_couple_title()} 的梦想迎头迈进。`,
          );
          await era.printAndWait('很近了！很近了！');
          await era.printAndWait(
            '在盛大的欢呼声中，最强的赛马娘踏向了未知的远方。',
          );
        } else {
          await era.printAndWait([
            {
              content: '露娜',
              color: luna_talk.color,
            },
            '&',
            { content: '皇帝', color: emperor_talk.color },
            '「',
            { content: '我', color: emperor_talk.color },
            { content: '（我）会把', color: luna_talk.color },
            { content: '宝贵的经验', color: emperor_talk.color },
            { content: '告诉你……', color: luna_talk.color },
            '」',
          ]);
          await chara.print_and_wait('——来吧。');
          await chara.print_and_wait(
            `如迎接自己的宿命一般，${chara.name} 冲向了自己的末路。`,
          );
        }
        era.drawLine();
        if (edu_marks.good_end === 2) {
          await print_event_name(
            ['伊甸见我', { content: '（我）', color: emperor_talk.color }],
            luna_talk,
          );

          await luna_talk.print_and_wait('这里是哪里？');
          await luna_talk.print_and_wait('赛马娘好像突然梦醒一样。');
          await luna_talk.print_and_wait('这是一片无尽的草原。');
          await luna_talk.print_and_wait(
            `赛马娘奔跑着，风吹起绿茵，也吹起${chara.sex}散落的发丝。`,
          );
          await luna_talk.print_and_wait(
            `${chara.sex}头顶，同时顶着太阳与月亮。`,
          );
          await luna_talk.print_and_wait('日月之下，有几道身影注视着赛马娘。');
          await luna_talk.print_and_wait('三位女神——好奇地注视着祂们的孩子。');
          await luna_talk.print_and_wait('原来如此。');
          await luna_talk.print_and_wait('赛马娘眨了眨眼。');
          await luna_talk.print_and_wait(
            `赛马娘「${me.actual_name}，你总让我休息。现在……我到了可以永恒安息的地方。」`,
          );
          await luna_talk.print_and_wait(
            '赛马娘「第一次听到【伊甸】的名字时，我无法想象它能涵盖多宏伟和美丽的景象。」',
          );
          await luna_talk.print_and_wait('赛马娘「这是一个崭新的世界。」');
          await luna_talk.print_and_wait(
            '赛马娘「或许此处也有生命存在。拥有和我们一样的喜怒哀乐。」',
          );
          await luna_talk.print_and_wait(
            '赛马娘「有多彩的故事和炽热的愿望，还有浪漫、爱情及挣扎。」',
          );
          await luna_talk.print_and_wait('赛马娘「我终于抵达了——」');
          await luna_talk.print_and_wait(
            '赛马娘的奔跑逐渐缓慢，最终，她停在了女神们的面前。',
          );
          await era.printAndWait(
            '三女神「孩子，恭喜你抵达了一切终点……一切的开端。你是第一位来到伊甸的赛马娘。」',
          );
          await era.printAndWait(
            '三女神「我们会奖励你，为你实现真正的梦想！那么，在许下你的愿望前，你还有什么想问的吗？」',
          );
          era.drawLine();
          await luna_talk.print_and_wait(
            '赛马娘回想着自己的人生，许多画面在她眼前闪过。',
          );
          await luna_talk.print_and_wait(
            '赛马娘「我们的夙愿和难以企及的梦想——」',
          );
          await luna_talk.print_and_wait('赛马娘「我们的传承和热爱的一切——」');
          await luna_talk.print_and_wait(
            '赛马娘「它们究竟是如何经久不衰，被一代又一代的赛马娘继承下去的？」',
          );
          await luna_talk.print_and_wait(
            '赛马娘问出了自己心中的疑问，可不等女神们为她解答，她又自顾自地回答：',
          );
          await luna_talk.print_and_wait(
            '赛马娘「是因为赛马娘和训练员……我们之间的羁绊吗？」',
          );
          await luna_talk.print_and_wait('赛马娘扶额，抬头粲然一笑。');
          await luna_talk.print_and_wait(
            `女神们爱怜地摸着${chara.sex}散乱的发丝。`,
          );
          await era.printAndWait('三女神「那么，你的愿望是？」');
          await luna_talk.print_and_wait(
            '赛马娘张开双臂，仿佛拥抱这个崭新的世界。',
          );
          await luna_talk.print_and_wait(
            '赛马娘「我要一个能让梦想延续的地方。」',
          );
          await luna_talk.print_and_wait(
            '赛马娘「一个让赛马娘永远奔跑下去的地方。」',
          );
          await luna_talk.print_and_wait(
            '赛马娘「一个只要我们还能听见爱我们的人在欢呼和祷告，为我们祈求胜利——」',
          );
          await luna_talk.print_and_wait(
            '赛马娘「我们就能永远挺身而出，战胜所有强敌的地方。」',
          );
          await luna_talk.print_and_wait(
            '赛马娘「一个人间的伊甸！只要存有梦想，所有赛马娘都能去的伊甸！」',
          );
          await era.printAndWait('女神们默默地点了点头，而赛马娘又开口了。');
          await luna_talk.print_and_wait(
            '赛马娘「还有，我要回去，在那个地方，我的爱人一定在等着我。」',
          );
          await era.printAndWait(
            '三女神「真是贪婪的孩子……嗯……但我们似乎也没有规定，你只能许一个愿望？」',
          );
          era.drawLine();
          await era.printAndWait('比赛结束了。');
          await era.printAndWait(
            `在人群散去之后，${me.name} 找了一个借口离开了包围着自己的记者和同事，回到了赛场。`,
          );
          await era.printAndWait(`${me.name} 看到了想要见到的赛马娘。`);
          await era.printAndWait(
            `${luna_talk.sex}背对着，${me.name} 看不见${luna_talk.sex}现在的表情。`,
          );
          await era.printAndWait(
            `或许${luna_talk.sex}仍被夺冠的景象震撼，也可能${luna_talk.sex}还在回味于 ${me.name} 不知道的激昂。`,
          );
          await era.printAndWait(`抑或${luna_talk.sex}只是倦了，想自己独处。`);
          await era.printAndWait(
            `${me.name} 颓然地坐到了地上，连日来的疲劳让 ${me.name} 连站起来的力气都快没有了。`,
          );
          await era.printAndWait(
            `${me.name} 昂着头，望着天，发现远处的晴空还挂着月亮——日月当空。`,
          );
          await era.printAndWait(`${me.name} 长出一口气`);
          await luna_talk.print_and_wait(`？？？「${me.actual_name}」`);
          await era.printAndWait(
            `终于，${me.name} 听到了${luna_talk.sex}的呼唤。带着强烈的忐忑，${me.name} 看向了${luna_talk.sex}，却没有回应${luna_talk.sex}。`,
          );
          await era.printAndWait(
            `${me.name} 不知道此刻该跪拜，还是该傻笑。此刻 ${me.name} 面对的，究竟是露娜，还是皇帝？`,
          );
          era.drawLine();
          await luna_talk.print_and_wait(
            '？？？「每当一个灵魂沉睡时，另一个灵魂就会苏醒。」',
          );
          await luna_talk.print_and_wait(
            '？？？「一方哀伤，一方狂怒，似乎像是月亮和太阳一样，从不相见，互相排离。」',
          );
          await era.printAndWait(
            `${luna_talk.sex}望向无边无际的天空，神情凝重得却好似望着一道深渊。`,
          );
          era.printButton('「或许你只是太阳。」', 1);
          era.printButton('「或许你只是月亮。」', 2);
          await era.input();
          await era.printAndWait(
            `听到 ${me.name} 的话，${chara.sex}低下了头。`,
          );
          era.printButton('「但你也可以既是太阳，也是月亮。」', 1);
          era.printButton('「但你也可以既是皇帝，也是露娜。」', 2);
          await era.input();
          await era.printAndWait('目光顺着日月余晖的光芒交汇。');
          await era.printAndWait(
            `${luna_talk.sex} 呆呆地望着 ${me.name}，随后红了脸颊，也红了眼眶。`,
          );
          await era.printAndWait(
            `${me.name} 伸出了手，而${luna_talk.sex}奔向你。露娜？皇帝？${me.name} 已不再去思考这个问题了。`,
          );
          await era.printAndWait(
            `${me.name} 握住了${luna_talk.sex}伸出的手，然后尽情相拥、泪如雨下。`,
          );
          await era.printAndWait(
            `${me.name} 相信，此时此刻，在 ${me.name} 怀里的${luna_talk.sex}、只顾与 ${me.name} 热烈相拥、亲吻的${luna_talk.sex}，也不再被这个问题束缚。`,
          );
          await era.printAndWait(
            '深吻后，两人都喘息着，希望能在下一轮澄清真心的风暴前透一口气。',
          );
          await era.printAndWait(
            `${me.name} 能听见${luna_talk.sex}趴在你胸膛上的温度，这样的炽热，以前从未有过——既有皇帝的不容置疑，也有露娜的柔情似水。`,
          );
          await me.say_and_wait('你是我爱的皇帝，也是爱我的露娜。', true);
          await era.printAndWait(
            `${me.name} 本这样想，可片刻后却摇了摇头，在怀中美人的一声轻呼中，带着${luna_talk.sex}一起躺倒在草地上。`,
          );
          era.printButton('「我的爱人，名叫鲁铎象征。」', 1);
          await era.input();
          good_end(edu_marks);
        } else {
          const luna_end =
            !era.get(`status:${luna}:神经衰弱`) &&
            era.get(`love:${luna}`) >= 90;
          if (luna_end) {
            await print_event_name('亘古轮月', luna_talk);
          } else {
            await print_event_name('皇帝君临', emperor_talk);
          }
          await era.printAndWait('比赛结束了。');
          await era.printAndWait(
            `在人群散去之后，${me.name} 找了一个借口离开了包围着自己的记者和同事，回到了赛场。`,
          );
          await era.printAndWait(`${me.name} 看到了想要见到的赛马娘。`);
          await era.printAndWait(
            `${chara.name} 远远地站在夕阳下，风吹起绿茵，也吹起 ${chara.sex} 散落的发丝。`,
          );
          await era.printAndWait(
            `月夜即将到来，太阳尚未落下。${chara.sex}背对着，${me.name} 看不见${chara.sex}现在的表情。`,
          );
          await era.printAndWait(
            `或许${chara.sex}仍被夺冠的景象震撼，也可能${chara.sex}还在回味于 ${me.name} 不知道的激昂。`,
          );
          await era.printAndWait(`抑或${chara.sex}只是倦了，想自己独处。`);
          await era.printAndWait(
            `${me.name} 颓然地坐到了地上，连日来的疲劳让 ${me.name} 连站起来的力气都快没有了。`,
          );
          await era.printAndWait(
            `${me.name} 昂着头，望着天，发现远处的晴空还挂着月亮——日月当空。`,
          );
          await era.printAndWait(`？？？「${me.actual_name}」`);
          await era.printAndWait(
            `终于，${me.name} 听到了${chara.sex}的呼唤。带着强烈的忐忑，${me.name} 看向了${chara.sex}，却没有回应${chara.sex}。`,
          );
          await era.printAndWait(
            `${me.name} 不知道此刻该跪拜，还是该傻笑。此刻 ${me.name} 面对的，究竟是露娜，还是皇帝？`,
          );
          era.drawLine();
          await era.printAndWait(
            '？？？「每当一个灵魂沉睡时，另一个灵魂就会苏醒。」',
          );
          await era.printAndWait(
            '？？？「一方哀伤，一方狂怒，似乎像是月亮和太阳一样，从不相见，互相排离。」',
          );
          await era.printAndWait(
            `${chara.sex}望向无边无际的天空，神情凝重得却好似望着一道深渊。`,
          );
          await chara.print_and_wait(
            `？？？「${
              luna_end
                ? '我，曾经很恨那个皇帝。'
                : '近日，吾险些战死在赛场上，但最后，有一个微弱的声音鼓励了吾。'
            }」`,
          );
          await era.printAndWait(`${me.name} 呆呆地望着${chara.sex}。`);
          if (luna_end) {
            await luna_talk.print_and_wait(
              `？？？「但在最后，${chara.sex}却和我说：『那个弄臣，从始至终都相信吾不会输。』」`,
            );
            await luna_talk.print_and_wait(
              `？？？「所以${chara.sex}要赠予 ${me.actual_name} 一场永远都醒不来的，美梦。」`,
            );
            await luna_talk.print_and_wait(
              '？？？「皇帝的征途，已经结束了啊。」',
            );
            await era.printAndWait(
              `露娜过去忧愁的目光带着迷茫，明明 ${me.get_couple_title()} 的愿望已经达成，${
                chara.sex
              }却不知为何如此怅然若失。`,
            );
            await luna_talk.say_and_wait('那我的故事，是不是也要结束了？');
          } else {
            await emperor_talk.print_and_wait(
              `？？？「${chara.sex}让吾支撑下去。${chara.sex}说：『我最讨厌你了，但为了我们的梦想，我只祈求一件事。』」`,
            );
            await emperor_talk.print_and_wait(
              `？？？「带着胜利，去见 ${me.actual_name}。」`,
            );
            await emperor_talk.print_and_wait(
              `？？？「哪怕以后我们永远都不会再相见，${chara.sex}说……${chara.sex}也愿意将一切奉献出去。」`,
            );
            await era.printAndWait(
              `皇帝锐利的目光带着迷茫，${chara.sex}怎么也想不起来，是谁胆敢在自己脑海里如此聒噪。`,
            );
            await emperor_talk.say_and_wait('她是谁？');
          }
          await era.printAndWait('目光顺着日月余晖的光芒交汇。');
          if (luna_end) {
            await era.printAndWait('夜幕降临，太阳消失了踪影。');
            await era.printAndWait('只留天上明月温柔的怀抱。');
          } else {
            await era.printAndWait('天太亮了，月亮消失了踪影。');
            await era.printAndWait('只留太阳无尽的光芒。');
          }
          await era.printAndWait(`${me.name} 低下了头，红了眼眶。`);
          if (luna_end) {
            era.printButton('「我会陪着你的。」', 1);
            era.printButton('「『皇帝』的故事，是永远不会结束的。」', 2);
          } else {
            era.printButton('「吾皇，她是我非常重要的人。」', 1);
            era.printButton('「……是谁呢？」', 2);
          }
          await era.input();
          if (luna_end) {
            await luna_talk.say_and_wait('这样啊。');
            await era.printAndWait('抬起沉重的脚步，露娜向轮月的方向走去。');
          } else {
            await emperor_talk.say_and_wait('这样啊。');
            await era.printAndWait('抬起沉重的脚步，皇帝向太阳的方向走去。');
          }
          await era.printAndWait(`${me.name} 不知道${chara.sex}要去往何处。`);
          await era.printAndWait([
            {
              content: `但 ${me.name} 还是颤颤巍巍站起身来，跟随着 `,
            },
            (luna_end ? luna_talk : emperor_talk).get_colored_name(),
            { content: `——无论${chara.sex}要去往何处。` },
          ]);
          era.println();
          normal_end(edu_marks, luna_end);
        }
      } else {
        hook.override = false;
        await print_event_name('竞赛获胜！', chara);

        await chara.say_and_wait(
          i_emperor
            ? `${chara.sex}们根本称不上是我的对手。就这点程度，也需要我亲自出手？`
            : '……如果这是你希望看到的结局，我不会反对。',
        );
        era.printButton('「无可奈何之举。」', 1);
        era.printButton('「你可以做得更好。」', 2);
        if ((await era.input()) === 1) {
          await chara.say_and_wait(i_emperor ? '哼。' : '我明白……唉。');
        } else {
          await chara.say_and_wait(
            i_emperor ? '弄臣，你倒是非常神气？哼……' : '我不会有这样的期待。',
          );
        }
      }
      wait_flag && (await era.waitAnyKey());
    } else if (extra_flag.rank <= 5 && !edu_marks.faith_collapse) {
      edu_marks.faith_collapse++;
      await print_event_name('信念崩塌', emperor_talk);

      await era.printAndWait(`${me.name} 张开嘴，却最终没能吐出哪怕一个字。`);
      await era.printAndWait('输了。');
      await era.printAndWait(
        `${me.name} 颤抖地抓住看台上的栏杆，尽可能的不让自己倒下。`,
      );
      await era.printAndWait('身边的人在向你祝贺，祝贺鲁铎象征的入着。');
      await era.printAndWait(
        `${me.name} 连表面功夫都来不及做，径直离开了赛场。`,
      );
      await era.printAndWait(
        `${me.name} 向地下通道奔去，${me.name} 知道，在赛后，赛马娘们都会回到更衣室去。`,
      );
      await era.printAndWait(
        `${me.name} 气喘吁吁地跑到 ${chara.name} 的更衣室门前，却发现无论如何门也打不开。`,
      );
      era.printButton('「露娜？！」', 1);
      era.printButton('「吾皇！！！」', 2);
      const ret = await era.input();
      await era.printAndWait(
        `门内传来了呕吐的声音。${me.name} 感觉被谁重重地击打了脑袋。`,
      );
      await luna_talk.say_and_wait('没事的…………我只是需要一点时间…………');
      await luna_talk.say_and_wait('我……………………………………');
      await era.printAndWait(
        `${
          me.name
        } 拍打着门，却只能听见门内${chara.get_teen_sex_title()}呕吐和啜泣的声音。`,
      );
      await era.printAndWait(
        `${me.name} 无助地蹲在地上……${me.name} 知道，自己辜负了露娜的期望。`,
      );
      await era.printAndWait(`${me.name} 没能帮到${chara.sex}。`);
      await era.printAndWait(`${me.get_couple_title()}输了。`);
      if (ret === 2) {
        await handle_debuff(edu_marks, luna);
      }
    } else {
      return await super.race_end(chara, me, callname, hook, extra_flag);
    }
  }
};
