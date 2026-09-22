/**
 * @file 丸善斯基 - 育成
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} train 训练的基础属性（已经过 i18n 翻译）
   */
  get_ts_content(maru, train) {
    era.print([maru.get_colored_name(), ' 的 ', train, ' 训练顺利结束了']);
  },
  ts_add: (() => {
    const title = '额外的自主训练';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`在${maru.name}的训练结束后。`);
      await maru.say_and_wait(`哈喽？${callname}，待会有空吗？`);
      await maru.say_and_wait('在这种天气跑步应该会很开心吧？');
      await maru.say_and_wait(
        '溅起的水花、雨中朦胧的视野……这种时候好像可以感受到别具一格的风。',
      );
      await maru.say_and_wait(
        '今天我不是跑得非常有干劲吗！我觉得就这样结束练习有点可惜呢♪',
      );
      await maru.say_and_wait(`在雨中奔跑感觉也不错哦♪`);
      await maru.say_and_wait(`这种程度的雨，跟晨浴差不多吧。`);
      await maru.say_and_wait('不过现在应该说是傍晚浴才对吧……？');
      await maru.say_and_wait('我的身体还火热得不得了啊。');
      await maru.say_and_wait(
        `说不定现在才是我发挥作用的时候？${callname} 又是怎么想的呢？`,
      );
      era.printButton('「我知道了，那就跑吧。」', 1);
      era.printButton('「还是先不跑吧！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `就是这样！我今天要跑一整晚哦。呵呵，天空好像也很高兴呢。`,
        );
        await maru.say_and_wait(`那就出发吧，走向风的世界。`);
        await era.printAndWait('于是额外训练，就在雨中不断持续下去了。');
      } else {
        await maru.say_and_wait('哎呀，真可惜。');
        await maru.say_and_wait('难得有这种机会的……！');
        await maru.say_and_wait(
          '不过这也是没办法的事情呢。毕竟体力的保存也很重要嘛……！',
        );
        await maru.say_and_wait('而且害训练员感冒的话，那就伤脑筋了呢。');
        await maru.say_and_wait(
          '虽然讨价还价也不好，不过你陪我去雨里兜风吧，就我们两个哦♪',
        );
        era.println();
        await era.printAndWait(
          `雨天兜风虽然让你们精疲力尽，不过 ${maru.name} 却似乎十分享受。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '保重身体！';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`唔嗯，脚好像扭伤了呢`);
      await era.printAndWait(`${maru.name}在之前的训练中不慎扭伤了脚踝`);
      await maru.say_and_wait(`没关系的啦♪这点小伤的话两三下就能治好的。`);
      era.println();
      era.printButton('「就算是小伤也要好好休息！」', 1);
      era.printButton('「这就是青春吧，我们回去训练吧！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Ok♪${callname}对我的事这么关心，其实也很在意我吧？`,
        );
        await maru.say_and_wait(
          `不过受伤了这件事很没有${
            maru.elder_sibling_sex_title
          }的风采呢，这样会让小特${maru.couple_title}……`,
        );
        era.printButton('「没有这回事！」', 1);
        await era.input();
        await maru.say_and_wait(
          `嗯……说的没错，${
            maru.elder_sibling_sex_title
          }我已经深刻反省了哦，等好好休息后一定会重新展现${
            maru.elder_sibling_sex_title
          }的风采！`,
        );
        await era.printAndWait(`${maru.name}乖乖在医务室休息了`);
      } else if (fail_again) {
        await maru.say_and_wait(`哎呀，${callname}可真会说话♪`);
        await maru.say_and_wait('可以多夸夸我吗。');
        era.printButton(
          `「${
            maru.name
          }，美丽又强大的赛${maru.uma_sex_title}，像红焰一样又酷又炫的${
            maru.elder_sibling_sex_title
          }大人！」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '哎呀，这么说的我都不好意思了♪那么休息的也差不多了，回去训练吧！',
        );
        era.printButton('「就是这种气势！」', 1);
        await era.input();
        await maru.say_and_wait('好痛！');
        await era.printAndWait(
          '训练的时候伤口又恶化了，不得不重新回到病房休息。',
        );
      } else {
        await maru.say_and_wait('一、二、三、四，游刃有余♪');
        await maru.say_and_wait('五、六、七、八，完全没问题♪');
        await maru.say_and_wait(`${you.name}，我跳得怎么样？`);

        era.printButton('「……好耀眼！」', 1);
        await era.input();
        await maru.say_and_wait('呵呵♪就这样向后辈们展现出又酷又炫的风采吧！');

        era.printButton(`「${maru.name}，${maru.name}！」`, 1);
        await era.input();
        await era.printAndWait(
          `奇迹般的${maru.name}恢复了状态，又回到训练之中了。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '严禁逞强！';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     * @param {boolean} fail_again 如果选努力的话是否再次失败
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`唔，好痛`);
      await era.printAndWait(`${maru.name}在之前的训练中不慎扭伤了脚踝`);
      await maru.say_and_wait(`即使是我也已经到极限了哦`);
      await maru.say_and_wait(
        '不过，离下场比赛的日子也接近了呢……得赶快打起精神来！',
      );
      era.println();

      era.printButton('「别急，慢慢治疗吧。」', 1);
      era.printButton('「有时下猛药也是必要的！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `这样吗？虽然我觉得只要稍微休息一下就可以恢复过来了！`,
        );
        era.printButton('「如果伤口恶化的话就麻烦了。」', 1);
        await era.input();
        await maru.say_and_wait(
          '……知道了。既然决定要治疗了，那就要以完全恢复为目标才行！',
        );
        await maru.say_and_wait('那么，为了打起精神来，去买点意式奶酪回来吧。');
        era.printButton('「啊，注意脚不要再次受伤了。」', 1);
        await era.input();
        await maru.say_and_wait(
          `哎呀，${callname}真是温柔呢，如果不是${
            maru.elder_sibling_sex_title
          }我而是后辈们的话，说不定一下子就被攻略了呢～`,
        );

        era.printButton(`「${maru.name}又在开玩笑了。」`, 1);
        await era.input();
        await maru.say_and_wait('哼哼♪');
        await era.printAndWait(
          `在${maru.name}彻底恢复过来之前，训练只能暂时放一边了`,
        );
      } else {
        await era.printAndWait(
          `临近比赛的日子接近了，${maru.name} 又受了很严重的伤，如果想要快点好起来的话，只能剑走偏锋了`,
        );
        await era.printAndWait(`${you.name} 思索再三，决定下一剂猛药`);
        era.printButton(
          '「如果保持心情畅快的话伤口会恢复的更快一点，靠意志力撑过去吧！」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '跟我想的一样呢，如果是要放松心情的话，去市中心追逐最潮流的时尚吧',
        );
        if (fail_again) {
          await era.printAndWait(
            `于是 ${you.name} 在时尚杂志上确定了当季最新的潮流服装后带着${maru.name}来到了百货大楼。`,
          );
          await era.printAndWait(
            `虽然是工作日，但人流量还是相当巨大，${you.name}为了防止有人不小心撞到${maru.name}受伤的腿处处小心。`,
          );
          await era.printAndWait(`你们两个在大楼里看得眼花缭乱。`);
          await maru.say_and_wait(
            `诶？现在的潮流我都没有听说过了，难道${
              maru.elder_sibling_sex_title
            }我 out 了吗？`,
          );
          era.printButton(
            `「被先锋潮流打击的${maru.name}心情变差，恢复的效果也大幅下降了」`,
            1,
          );
          await era.input();
        } else {
          await era.printAndWait(
            `${you.name} 在 ${maru.name} 的引导下开着小塔七拐八拐来到了一家看上去有年代感的CD店。`,
          );
          await maru.say_and_wait(
            '虽然这家店外表看上去比较朴素，不过里面的音乐还是蛮潮流的嘛♪',
          );
          await era.printAndWait(
            `${you.name}随手拿起一张CD盘,脑海里不太确定是不是自己高中时反复听过这首歌.`,
          );
          await maru.say_and_wait(
            '呵呵～果然是首好歌♪让人忍不住想跳起舞来呢。',
          );
          era.printButton(`（只要${maru.sex}高兴的话，也挺好吧？）`, 1);
          await era.input();
          await era.printAndWait(
            `不知是否是音乐的作用，${maru.name} 的伤口也恢复得更快了。`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = '比赛开始';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`地下通道内`);
      await maru.say_and_wait(`今天的比赛也要让后辈们看到我帅气的背影`);
      era.printButton(`「${maru.name}加油」`, 1);
      await era.input();
      await maru.say_and_wait(`呵呵，谢谢 ${callname} 了`);
      await maru.say_and_wait(
        `不要被${maru.elder_sibling_sex_title}的背影迷上了哟～`,
      );
      await era.printAndWait(`${you.name} 目送着${maru.name}走向了赛道`);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '竞赛获胜';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait(
        `victory!victory！胜利了哦，训练员♪第一名果然不一样呢，内心的兴奋完全停不下来啊`,
      );
      await maru.say_and_wait(`训练员看到了我跑步的模样吗？`);
      era.printButton(`「你是最棒的！」`, 1);
      era.printButton(`「还可以做的更好哦！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `对吧对吧♪今天就去喫茶店喝柠檬茶、吃提拉米苏吧。`,
        );
        await maru.say_and_wait(`训练员当然也会一起来的吧？呵呵♪`);
      } else {
        await maru.say_and_wait(`哎呀，训练员真是直接啊！`);
        await maru.say_and_wait(`不过我也不能就这样沾沾自喜！`);
        await era.printAndWait(
          ` ${maru.name} 把 ${maru.sex} 最喜欢的椰果饮料一口气喝完了！`,
        );
        await maru.say_and_wait(
          `——噗哈！真是凉快！好，接下来也会充满干劲的努力哦！`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '竞赛上榜';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait(
        `虽然想为了来看比赛的后辈们拿下第一的，不过我的实力还不够呢……`,
      );
      era.printButton(`「你跑的并不差！」`, 1);
      era.printButton(`「下次要拿第一名！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`呵呵，训练员在安慰我吧。谢谢你。`);
        await maru.say_and_wait(
          `不过…….哎呀，居然还让训练员来担心我，${maru.elder_sibling_sex_title} 我真是没用呢。`,
        );
        await maru.say_and_wait(
          '好，下次一定要让大家看到超级跑车的风采，干脆利落的赢得第一！',
        );
      } else {
        await maru.say_and_wait('是啊，老是唉声叹气就不像我了。');
        await maru.say_and_wait(
          `下次一定要让后辈们看到 ${maru.elder_sibling_sex_title} 我拿出真本事的样子！`,
        );
        await maru.say_and_wait('和塔酱一起去海边兜风吧♪');
        await era.printAndWait(
          `后来你陪 ${maru.name} 去海边兜风，直到 ${maru.sex} 尽兴为止才回家。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '竞赛败北';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait('伤心……');
      await maru.say_and_wait(`抱歉呢……训练员。没能让你看到我帅气的模样…….`);
      era.printButton(`「期待下一次的表现！」`, 1);
      era.printButton(`「垂头丧气也没有用！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`……你真温柔呢，训练员。`);
        await maru.say_and_wait(
          `……好，那我们得快点回去训练才行！下一次一定要让你看到我帅气的一面！`,
        );
      } else {
        await maru.say_and_wait('……说的也是呢。垂头丧气也不能让我跑的更快。');
        await maru.say_and_wait(
          '所以我不能在沮丧下去了。要向就算撞凹了也能马上修好的塔酱一样！',
        );
        await maru.say_and_wait('好！我的修理到此结束。得快点加满油好好冲刺！');
      }
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '序章・丸善斯基登场';
    // 从丸善斯基登场开始 风数值为1 最终结局与风数值 例：TE=20 GE = 17-19 其余均为NE
    // 尽管竞争将造成极大的损耗，但你不想去看看那里的风景吗？
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`草场上`);
      await maru.say_and_wait(`${callname}，接下来一起去哪里逛逛吧？`);
      await era.printAndWait(
        `挨着 ${you.name} 坐下的${maru.uma_sex_title}向 ${you.name} 搭话。`,
      );
      era.printButton('「抱歉，我还要回训练室整理一下文件。」', 1);
      await era.input();
      await era.printAndWait(`天空被落日染成了金黄色的模样。`);
      await maru.say_and_wait(
        `是在下输了，看到 ${callname} 这么努力，${maru.elder_sibling_sex_title}我也想再跑一圈了呢♪`,
      );
      await era.printAndWait(
        `紧挨着 ${you.name} 坐下的 ${maru.uma_sex_title} 补充了水分后站起，被残阳照射下的波浪长发像燃烧着的火焰一样。`,
      );
      await you.say_and_wait(`不要跑过头了。`);
      await maru.say_and_wait(`知道了♪`);
      await era.printAndWait(
        `得到了 ${you.name} 的许可的 ${maru.sex} 再次回到了起跑线。`,
      );
      await era.printAndWait(`随着发令枪的响起，火焰在草场上再次燃起。`);
      await era.printAndWait(
        `火焰的主人也因为奔跑时吹拂的强风露出了由衷的笑容。`,
      );
      era.drawLine();
      await era.printAndWait(
        `重新回到了训练室的${you.name}，趁着最后一缕阳光尚未熄灭之时，将携带的文件夹放回了原本的位置。`,
      );
      await era.printAndWait(
        `原本打算整理${maru.name}奔跑时数据的${you.name}，此刻却被一封信所吸引。`,
      );
      await you.say_and_wait(`这是什么？`, true);
      await era.printAndWait(`是与周围格格不入的，充满青春气息的信封。`);
      await era.printAndWait(
        `没有填写邮编，地址则是自己的办公室，收信人也好好的填上了${you.actual_name}，只是最后的寄信者。`,
      );
      await you.say_and_wait(`${maru.name}？`, true);
      await era.printAndWait(`带着满腹的疑惑，拆开了信封。`);
      await maru.say_and_wait(
        `锵锵！正阅读着这封信的 ${callname}，有没有觉得这样子很酷呢？`,
      );
      await maru.say_and_wait(
        `虽然一开始计划着在你差不多回到训练室的时候突然发短信来着，不过一直搞不定按键真是急死人了><`,
      );
      await maru.say_and_wait(
        `最后只能妥协写信了……但是！${
          maru.sex_code !== 1 ? '美眉' : '帅锅'
        }我意外发现，通过信件传达感情好像也开始渐渐流行起来了！果然，${
          maru.sex_code !== 1 ? '美眉' : '帅锅'
        }我一直都是潮流的领跑者呢思密达♪`,
      );
      await maru.say_and_wait(
        `虽然像这样凭着气势写了下来，不过究竟应该做什么比较好呢？`,
      );
      await maru.say_and_wait(
        `——嗯，如果按照漫画里的情节考虑的话，好像天台似乎不错的样子？`,
      );
      await maru.say_and_wait(
        `所以今天晚上 7 点半在天台见面吧！那么，${callname}，待会见！`,
      );
      await era.printAndWait(
        `将信纸从信封中取出，展开，${you.name} 就这样站着读了起来。`,
      );
      await you.say_and_wait(`真潮啊。`, true);
      await you.say_and_wait(
        `毕竟是接下来三年朝夕相处的同伴,见面的时候得多了解一点对方才行。`,
        true,
      );
      era.printButton(`「而且」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}`,
        `欸？丸善${maru.sex_code !== 1 ? '学姐' : '学长'}竟然会同意那样的人作为三年的担当？`,
      );
      await you.say_as_passer_by_and_wait(
        `路人训练员`,
        `说到底，${you.actual_name}只是被怪物一样的${maru.name}心血来潮看上的幸运儿罢了，真是个运气好的家伙`,
      );
      await you.say_and_wait(`被怪物心血来潮看上的幸运儿吗？`);
      await era.printAndWait(
        `正如所言，试图招募${maru.name}的训练员中不乏在生涯之中取得优秀成绩的精英训练员。`,
      );
      await era.printAndWait(
        `自己与他们相比，乐观来说也是存在着阅历上的差距，被${maru.name}看中，也只是恰巧扣中心弦罢了。`,
      );
      await era.printAndWait(`下一次的话，自己还会有这么幸运吗？`);
      await era.printAndWait(`强迫自己重新将注意力移至工作中。`);
      await era.printAndWait(`瞄了眼手机，锁屏界面上显示的时间为6:05`);
      await you.say_and_wait(`接下来要更加努力才行了。`);
      await era.printAndWait(
        `将信封收进抽屉后，${you.actual_name}再次逃进了工作之中。`,
      );
      era.drawLine();
      await era.printAndWait(`差不多到该出发的时间了。`);
      await era.printAndWait(
        `从训练室到位于教学楼的天台大概需要 10 分钟，考虑到礼貌方面的要素，提前10分钟左右差不多吧。`,
      );
      await era.printAndWait(`而此时锁屏界面上显示的时间为7点整。`);
      era.printButton(`「出发！」`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `夜晚的吹拂比起白天显得更加温柔，仔细感受的话，一丝丝香甜的气味钻进了鼻腔之中。`,
      );
      await you.say_and_wait(`看来明天也会是一个好天气呢。`);
      await maru.say_and_wait(`是啊，希望每天都会向今天这样是个好天气。`);
      await you.say_and_wait(`是啊。欸？`);
      await era.printAndWait(`正打算附和之时才意识到从后方传来的熟悉声音。`);
      await era.printAndWait(
        `为了和 ${maru.sex} 对话而急忙回头，却发现背后空无一人。`,
      );
      await maru.say_and_wait(`原来是酱紫吗？${callname} 真口耐(可爱)呢。`);
      await era.printAndWait(`突然之间被人抱住了。`);
      await you.say_and_wait(`！！！`);
      await era.printAndWait(`夜晚在微风的嬉闹下更加宁静。`);
      await era.printAndWait(
        `虽说从背后被人抱住，但也并没有更近一步，而是停留在了原地。`,
      );
      await maru.say_and_wait(
        `抱歉，只是看到 ${callname} 情不自禁就这么做了。`,
      );
      await era.printAndWait(`从背后轻轻抱住 ${you.name} 的手臂离开了腰部。`);
      await era.printAndWait(
        `得以脱身的 ${you.name} 重新转身看向了这位${maru.teen_sex_title}。`,
      );
      await era.printAndWait(
        `比起在草场之上火红色的身影,在月光照耀下默默伫立着的${maru.name}向 ${you.name} 露出了笑容。`,
      );
      era.printButton(`「……${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(`虽然想要开口，却不知道该说些什么。`);
      await era.printAndWait(`只能这样默默的对视。`);
      await era.printAndWait(`……不知为何感到了害怕。`);
      await era.printAndWait(`该怎么才能与火焰共舞呢？`);
      await era.printAndWait(`该怎么才能让${maru.name}注视着我呢?`);
      era.printButton(`「……」`, 1);
      await era.input();
      await maru.say_and_wait(
        `^_^ 其实没必要这么紧张的。像正常对话一样就好了。`,
      );
      await era.printAndWait(`似乎是过于紧张的样子把${maru.sex}逗笑了。`);
      await maru.say_and_wait(
        `虽然顾虑到他人感受也是好事，但如果不把自己的感受老老实实表达出来的话。`,
      );
      await maru.say_and_wait(
        `即使想要交流，也显得很困难吧，所以抱着神马都是浮云的心态才对！`,
      );
      await era.printAndWait(`似乎被察觉到了心底的想法。`);
      await you.say_and_wait(
        `说的也是，站在那里的是作为今后三年搭档的 ${maru.actual_name_with_title} 吧。`,
      );
      await era.printAndWait(
        `——被那双翠蓝色的清澈双眼所鼓励，不假思索就说出来了。`,
      );
      await maru.say_and_wait(
        `这样才对嘛。正是${maru.sex_code !== 1 ? '美眉' : '帅锅'}我哦。`,
      );
      await you.say_and_wait(`${maru.name}的眼睛真漂亮啊。`);
      await you.say_and_wait(`被这双眼睛所迷住的人一定不少吧。`);
      await you.say_and_wait(
        `而且，像这样说着鼓励着其他人的${maru.name}，迷上的人也不在少数吧。`,
      );
      await maru.say_and_wait(
        `唔——这不是比想象之中还会说话吗？像这样作为前辈指导迷茫中的${maru.uma_sex_title}和人不是很正常的事情吗♪`,
      );
      await maru.say_and_wait(`更何况是接下来的作为同伴的 ${callname} 呢。`);
      await maru.say_and_wait(`嗯——接下来也要像这样的节奏好好享受才行哦。`);
      await maru.say_and_wait(
        `那么，再一次，${maru.name}，作为接下来三年的同伴与担当${maru.uma_sex_title}，请多多指教了♪`,
      );
      era.printButton(`「请多多指教了，${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `在充分感受到了娇嫩的肌肤与蕴藏在其中的力量后，${you.actual_name}紧紧地握住了这双手。`,
      );
      await era.printAndWait(
        `作为${you.name}与${maru.name}签约后的第一次正式见面，就这样结束了。`,
      );
      //风属性为1
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title = (maru) => `来自${maru.elder_sibling_sex_title}的礼物`;
    /**
     * 丸善斯基邀请玩家开车兜风
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`训练室`);
      era.println();
      await era.printAndWait(`咚咚咚`);
      await maru.say_and_wait(`哈喽${callname}！`);
      await era.printAndWait(
        `抱着巧克力小山的${maru.name}走进了 ${you.name} 的训练室。`,
      );
      era.printButton(`「需要帮忙吗？」`, 1);
      await era.input();
      await era.printAndWait(
        `让 ${you.name} 怀疑自己是不是看错了一样，${maru.name}抱着巧克力小山来到了训练室。`,
      );
      await maru.say_and_wait(`后辈们比想象之中还要热情还真是受不鸟呢。`);
      await maru.say_and_wait(
        `说着感谢丸善前辈在平日里的帮助什么的，将这些巧克力硬塞过来了——啊，放在这里可以吗？`,
      );
      era.printButton(`「后辈们很喜欢${you.name}呢」`, 1);
      await era.input();
      await era.printAndWait(
        `将放在小桌上的各种零食与漫画放在地板上，从${maru.name}的手中接过一部分巧克力。`,
      );
      await maru.say_and_wait(`跪了——后辈们的期待可真是沉重呢。`);
      await era.printAndWait(
        `从摇摇欲坠的巧克力塔中解脱出来的${maru.name}带着略显困扰的微笑坐在了沙发上。`,
      );
      await maru.say_and_wait(`${callname}，3q♪`);
      await you.say_and_wait(`作为报酬能和我多说一点可爱后辈们的事情吗？`);
      await era.printAndWait(
        `${you.name} 就这样也顺势坐在了沙发上，正视着${maru.name}的双眼。`,
      );
      await maru.say_and_wait(
        `嗯——既然是${callname}的要求的话。啊，说起来上次有一个看起来很消沉的孩子呢。`,
      );
      await maru.say_and_wait(
        `——虽然只是在选拔赛上失利了，哭啼啼的来找我倾诉。在认真听完${
          maru.sex
        }的讲诉后，虽然只是分享了一些我自己跑步时的心得，不过${
          maru.sex
        }听得很认真的样子。`,
      );
      await maru.say_and_wait(
        `对于某些微妙的地方也是提出了自己的想法，笔记都记了满满一页，拜此所赐，我也收获了不少呢。`,
      );
      await maru.say_and_wait(
        `在离开之前郑重的向我道谢，听说之后也是顺利与训练员签约了♪`,
      );
      await maru.say_and_wait(`每次回想起来，我都很稀饭这种感觉呢⭐`);
      await you.say_and_wait(`真是不错的经历啊。`);
      await maru.say_and_wait(`^_^我也是这么觉得的`);
      await maru.say_and_wait(`说起来，${callname}有收到巧克力吗？`);
      await era.printAndWait(`${maru.name}将目光投向了 ${you.name} 的办公桌。`);
      await you.say_and_wait(
        `很遗憾，虽然以前在团队的时候还会有${maru.uma_sex_title}送给我巧克力，不过自从离开团队作为独立训练员努力后，义理巧克力也看不到了。`,
      );
      await maru.say_and_wait(`酱紫可真是遗憾啊。`);
      await maru.say_and_wait(`……嗯`);
      await maru.say_and_wait(`既然这样的话，那我们一起去挑巧克力吧♪`);
      await era.printAndWait(
        `看上去突然想到了一个好方法的${maru.name}的耳朵刷地一下竖了起来，两眼发亮的看向了 ${you.name}。`,
      );
      await maru.say_and_wait(`就打个酱油的功夫，现在就出发吧！`);
      await you.say_and_wait(`还是算了吧。`, true);
      await era.printAndWait(
        `虽然想这么说出口，不过看着${maru.name}认真考虑店铺的样子。${you.name} 想了想最后还是闭上了嘴。`,
      );
      await you.say_and_wait(`如果只是这样出去的话，应该也没关系吧。`, true);
      era.drawLine();
      await maru.say_and_wait(`今天看上去也很精神呢。小塔！`);
      era.printButton(`「小塔吗？很高兴认识${you.name}！」`, 1);
      await era.input();
      await maru.say_and_wait(`那么${callname}坐在副驾驶上吧。`);
      await maru.say_and_wait(
        `小塔的话也会因为能遇到${callname}这样的新朋友感到高兴的。`,
      );
      await you.say_and_wait(`有点兴奋啊。`, true);
      await maru.say_and_wait(`呼呼，小塔似乎也感到很高兴的样子呢♪`);
      await maru.say_and_wait("准备好了吗？Let's go！");
      await you.say_and_wait(`哎？原来这就是跑车车车车吗啊啊啊啊啊。`);
      era.drawLine();
      await maru.say_and_wait(
        `呼——久违的大闹了一场之后，真是有点受不鸟了呢！${callname}也感受到了吗……${
          callname
        }？`,
      );
      era.printButton('「原来这里不是伊甸园吗？三女神大人很高兴认识你」', 1);
      await era.input();
      await era.printAndWait(
        `连回应的勇气都已经丧失的一干二净，夹着尾巴逃跑的 ${you.name} 像极了被${maru.uma_sex_title}追赶着的胡萝卜。`,
      );
      await maru.say_and_wait(
        `唔，是不是刺激感太强了呢，${callname} 一副生无可恋的样子。`,
      );
      await era.printAndWait(`被留在原地的 ${maru.name} 一个人在自言自语。`);
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = '训练结束的普通一天';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`今天的训练就到这里为止了,辛苦了。`);
      await maru.say_and_wait(`${callname}也辛苦了。`);
      await era.printAndWait(
        `${maru.name}接过从 ${you.name} 手中的毛巾，将额头之上的汗水略微擦拭便交换给了${you.name}。`,
      );
      await you.say_and_wait(
        `按照这样的节奏继续前进的话，之后的朝日杯也有优胜的希望了。`,
      );
      await maru.say_and_wait(
        `不知道在G1级的比赛中又会有什么样的盛况出现呢？真期待呢～`,
      );
      await you.say_and_wait(`${maru.name}觉得奔跑快乐吗？`);
      await era.printAndWait(
        `将毛巾重新拧干之后，从旁边的背包之中取出备用的毛巾，仔细的擦拭着${maru.uma_sex_title}奔跑时凌乱的长发。`,
      );
      await maru.say_and_wait(
        `如果不拿发卡固定住散乱的头发的话在奔跑的时候打到眼睛也是很痛的事情。不小心玩脱了呢。`,
      );
      await maru.say_and_wait(
        `果然还是换个发型转换一下心情比较好吧，${callname}觉得呢？`,
      );
      await you.say_and_wait(`我也这么觉得。`);
      await you.say_and_wait(
        `如果把头发扎起来作成长马尾牢牢固定住的话，也不会影响到奔跑吧。`,
      );
      await you.say_and_wait(
        `而且这样的话，能让大家看到${maru.name}不同的一面，也是不错的选择呢。`,
      );
      await maru.say_and_wait(
        `嗯——到底应该怎么样才好呢？虽然${callname}的建议也不错，不过`,
      );
      await maru.say_and_wait(`啊，好痛。`);
      await you.say_and_wait(`抱歉，这部分的头发缠在一起了。`);
      await maru.say_and_wait(`3q。`);
      await maru.say_and_wait(`今天就和小塔一起享受海风转换一下心情吧♪`);
      await maru.say_and_wait(`${callname}，可以送我到门口吗？`);
      era.printButton(`「一起走吧」`, 1);
      await era.input();
      await era.printAndWait(
        `\n${you.name}与${maru.name}一同走在黄昏的小径上。`,
      );
      await you.say_and_wait(
        `说起来${maru.name}，一个人住在公寓里上学会不会不太方便。`,
      );
      await era.printAndWait(
        `与其他住在寮中的${maru.uma_sex_title}不同，${maru.name}一直住在学院外的公寓之中。`,
      );
      await era.printAndWait(
        `出于对这份特殊的好奇，${you.name}向${maru.name}寻求着答案。`,
      );
      await maru.say_and_wait(
        `比起学院内的宵禁，住在校外的我说不定更加的自由呢。`,
      );
      await maru.say_and_wait(
        `不过每天需要比其他学生更早起床也算是自由的一部分代价。`,
      );
      await you.say_and_wait(
        `有机会真想在${maru.name}的公寓里住一段时间呢，不知道${maru.name}意下如何？`,
      );
      await maru.say_and_wait(
        `虾米？如果是${callname}的话，说不定会很有趣的样子呢。`,
      );
      await maru.say_and_wait(
        `${callname}不要忘了自己说过的话哦？反悔的话，出来混迟早是要还的。`,
      );
      era.printButton(`「那当然。」`, 1);
      await era.input();
      await maru.say_and_wait(`呵呵～我也很期待呢。`);
      await era.printAndWait(`在闲聊中不知不觉已经到了学院门口。`);
      await maru.say_and_wait(`和${callname}在一起的时间总是这么短暂呢。`);
      await you.say_and_wait(
        `正是因为短暂所以才会加倍珍惜这段幸福的时间呢，对${maru.name}来说这也是不错的回忆吧？`,
      );
      await maru.say_and_wait(`是段愉快的回忆呢，明天见，3166～`);
      await era.printAndWait(
        `伴随着引擎的发动声响起,${maru.name}的背影消失在了视野的角落之中。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '出道战前・一切的起点';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, callname) => {
      await era.printAndWait(`地下通道内`);
      await maru.say_and_wait(
        `虽然还是有些紧张，不过现在的话倒是完全放松下来了。`,
      );
      era.printButton(`「就这样让后辈们看到${maru.name}帅气的一面吧！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `嗯嗯, ${callname} 也要好好看着${maru.name}帅气的样子哦。`,
      );
      await maru.say_and_wait(
        `而且，不仅有在背后一直支持着我的后辈们，还能感受到疾驰过程中的突破极限的风！`,
      );
      await maru.say_and_wait(`说到这里，身体也开始兴奋起来了呢！`);
      await maru.say_and_wait(
        `差不多到我出场的时候了，那么，${callname}，待会见！`,
      );
      era.printButton(`「祝你武运昌隆」`, 1);
      await era.input();
      await era.printAndWait(`点了点头后，${maru.name}走向了赛场`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '出道战后・启程之风';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `虽然仅仅只是新秀年的出道战,但为了观看 ${maru.name} 的首秀而前来的人们却把整个竞马场坐满了。`,
      );
      await you.say_and_wait(
        `仔细想想看的话，${maru.name} 的人气还真是可怕啊。`,
      );
      await era.printAndWait(
        `多亏了平日的帮助后辈们的努力，前来观看的人群之中有一大部分都是被帮助过的后辈。`,
      );
      await era.printAndWait(
        `坐在马群之中的 ${you.name} 感受到了格格不入的压力。`,
      );
      await you.say_and_wait(`在手心攥出汗之前找一个人少一点的地方观战吧。`);
      await you.say_as_passer_by_and_wait(
        `解说`,
        `接下来是备受瞩目的新星，同时也具有压倒性的实力与人气的 ${maru.name}，不知道接下来会让我们看到什么样精彩的画面呢！`,
      );
      await you.say_and_wait(`不妙啊。`);
      await era.printAndWait(
        `在解说铿锵有力的渲染之下，像是沸腾的油锅里进了一滴水一样，呐喊声几乎将竞马场掀翻。`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} A`,
        `丸善${maru.sex_code !== 1 ? '学姐' : '学长'}加油！`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} B`,
        `再让我们看一遍前辈的帅气跑法吧！`,
      );
      await era.printAndWait(`哦哦哦哦哦！`);
      await era.printAndWait(`观众们的欢呼声响彻了整个赛马场`);
      await you.say_and_wait(
        `大家看上去都很兴奋啊，果然是 ${maru.name} 的缘故吗？`,
      );
      await era.printAndWait(
        `跟着人群一同站起的 ${you.name} 正努力通过马耳之间的间隙寻找名为 ${maru.name} 的身影。`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `啊，抱歉。`);
      await era.printAndWait(
        `虽说只是被不小心被碰了一下，但受到的冲击力之大还是让你险些痛的叫出了声。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `非常抱歉……不小心没控制好自己的力气，没有碰伤吧？`,
      );
      await you.say_and_wait(`不，没关系。`);
      await era.printAndWait(
        `既然是对方的无意，所以没有必要在这个问题上纠缠的 ${you.name} 就这样原谅了对方。`,
      );
      await you.say_and_wait(`你是来看 ${maru.name} 跑步的吗？`);
      await era.printAndWait(`话说出口的一瞬间就因为自己的问题而深感懊悔。`);
      await you.say_and_wait(`你是来看 ${maru.name} 跑步的吗？`);
      await era.printAndWait(
        `这不废话，对方不来看 ${maru.name} 的还是过来干什么？难道是观看长了腿的胡萝卜在场地上跑吗？`,
      );
      await era.printAndWait(`不过，有点想见识一下长了腿的胡萝卜啊。`);
      await you.say_and_wait(`你们也是来看长了腿的胡萝卜在地上跑步吗？`);
      await era.printAndWait(
        `不好，不小心把脑子里想的话和要说的对话混在一起了。`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `噗嗤。`);
      await you.say_and_wait(`果不其然被嘲笑了啊。`, true);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `这位训练员${you.adult_sex_title}比想象中还有趣啊。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `稍微有点明白丸善前辈为什么会选择你了。`,
      );
      await you.say_and_wait(`诶？`);
      await you.say_and_wait(`原来我已经这么出名了吗？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `不如说，你与丸善前辈签约的第二天，整个特雷森都知道这件事情了。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `大家都很好奇作为 ${maru.name} 的训练员会是什么样子的人呢。`,
      );
      await era.printAndWait(`难怪一路上会有那么多好奇的视线。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `作为丸善前辈的训练员${maru.adult_sex_title}，接下来的道路要加油哦！我也会一直支持你和丸善前辈的！`,
      );
      await era.printAndWait(
        `这位 ${maru.uma_sex_title} 看上去非常开心的样子。`,
      );
      await era.printAndWait(
        `趁着大家将注意力重新聚焦在 ${maru.name} 身上的时候，${you.name} 悄悄离开了原来的座位。`,
      );
      era.drawLine();
      await era.printAndWait(
        `相比于能正面看见 ${maru.name} 奔跑身影的东部，只能看到背影的西部座位就显得人群稀疏。`,
      );
      await era.printAndWait(
        `更不提有不少 ${maru.uma_sex_title} 宁愿站在人群之中也不会坐在自己的座位之上。`,
      );
      await era.printAndWait(`所以说${maru.uma_sex_title}们真是单纯的生物啊。`);
      await era.printAndWait(`不过正因为如此所以我才喜欢 ${maru.sex} 们。`);
      await era.printAndWait(
        `观众席上爆发了一阵欢呼声,是为了庆祝 ${maru.name} 首战获胜的 ${maru.uma_sex_title} 们发出的尖叫。`,
      );
      era.printButton(`「差不多该去迎接 ${maru.name} 了」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname} ♪,看到了我刚才的精彩表演了吗?`);
      era.printButton(`「比想象之中还要精彩的演出！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `嗯嗯,那么我去准备胜者舞台了，${callname} 可要好好看着 ${maru.elder_sibling_sex_title} 我哦⭐`,
      );
      await era.printAndWait(
        `胜者舞台上的 ${maru.name} 比起平时看上去更加闪闪发光，像是被发掘的原石终于露出了原本的面目一样。`,
      );
      await era.printAndWait(`不过说起来，训练员不就是这样的职业吗？`);
      era.drawLine({ content: '胜者舞台结束后' });
      await maru.say_and_wait(
        `呼～出了不少汗呢,不过之前的舞蹈训练真是派上大忙了⭐`,
      );
      era.printButton(`不愧是 ${maru.elder_sibling_sex_title} 大人`, 1);
      await era.input();
      await maru.say_and_wait(
        `哎呀, ${callname} 比平时还要油嘴滑舌的样子,难道对其他的孩子们也是这样的态度吗？`,
      );
      era.printButton(
        `不如说只有 ${maru.name} 一个 ${maru.elder_sibling_sex_title}，想要对其他人说也做不到吧？`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `呵呵呵，听到 ${callname} 这么说，我的心情也愈发高涨起来了呢，嗯——今晚的话要不和小特们一起开个派对庆祝吧！`,
      );
      era.printButton(`「${maru.name} 比平时还要兴奋的样子呢」`, 1);
      await era.input();
      await you.say_and_wait(
        `像是火焰一样席卷了整个草场的 ${maru.name} 可真帅气啊。`,
      );
      await maru.say_and_wait(
        `听到作为担当的 ${callname} 这么说，可真是让人感到安心呢。`,
      );
      await maru.say_and_wait(`不过在继续夸赞之前,下一个目标是？`);
      era.printButton(`「朝日杯怎么样？」`, 1);
      await era.input();
      await maru.say_and_wait(`朝日杯吗?`);
      await maru.say_and_wait(
        `如果能与更强的 ${maru.uma_sex_title} 之间竞争的话，说不定能看到更加美丽的风景，${callname} 这份回答我可以给满分哦。`,
      );
      await maru.say_and_wait(`那么,接下来就朝着朝日杯前进吧！`);
      await era.printAndWait(`${you.name} 和 ${maru.name} 确定了接下来的目标.`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose: (() => {
    const title = '出道战后・再次努力';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await maru.say_and_wait(`啊，输了……`);
      await era.printAndWait(
        `不知是意外还是训练不足的缘故，${maru.name} 在出道战失利。`,
      );
      era.printButton(`回去开反省会吧。`, 1);
      await era.input();
      await maru.say_and_wait(`嗯！下次绝对会胜利！`);
      await era.printAndWait(
        `${you.name} 和 ${maru.name} 确定了接下来的目标。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = '三女神的孩子们';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`中庭 三女神像前`);
      await era.printAndWait(
        `远离终日吵吵闹闹的草场与教学楼，此处是${maru.uma_sex_title}们心灵寄托的圣地。`,
      );
      await era.printAndWait(
        `此处供奉着三女神的神像，其名分别为达利阿拉伯，高多芬阿拉伯以及拜耶尔阿拉伯。`,
      );
      await era.printAndWait(`清澈的水流顺着女神们托着的水瓶汇入池中。`);
      await era.printAndWait(`而此处，又迎来了新的客人。`);
      await emperor.say_and_wait(`……`);
      await era.printAndWait(`皇帝凝视着三女神像。`);
      await emperor.say_and_wait(`还没来吗？`, true);
      await era.printAndWait(
        `虽然以私人的名义邀请了最近看好的${maru.uma_sex_title}前来，不过对方态度却依然暧昧。`,
      );
      await era.printAndWait(
        `是出于对皇帝的威压而恐惧吗，也罢，这样懦弱的${maru.uma_sex_title}不值得托付背后。`,
      );
      await era.printAndWait(`在我等所创造的伊甸园里自由的活下去吧。`);
      await emperor.say_and_wait(`那么，也差不多该回去了`);
      await era.printAndWait(`皇帝的话语被朝着中庭前来的脚步声所打断。`);
      era.drawLine();
      era.printButton(`「呃，我是不是来错地方了。」`, 1);
      await era.input();
      await era.printAndWait(
        `不知如何继续话题而陷入混乱，耳朵传来的只有从女神像所托举的瓶中之水顺流而下与水池碰撞飞溅之声。`,
      );
      await era.printAndWait(
        `所幸皇帝并非在意 ${you.name} 的到来，而是将目光看向了女神像。`,
      );
      era.printButton(`「还好还好」`, 1);
      await era.input();
      await you.say_and_wait(`说起来`);
      await era.printAndWait(
        `很久以前，自己还是孩子的时候，独自一人来到神社时，好像也经历过这样的事情。`,
      );
      await era.printAndWait(
        `凝视着三女神的雕像，忽略掉周围的声音，让自己沉浸在回忆之中。`,
      );
      await era.printAndWait(
        `与朋友玩捉迷藏，为了躲开抓捕者，特意躲在了偏僻的角落里。`,
      );
      await era.printAndWait(`然后在等待的过程之中，不小心就这样睡着了。`);
      await era.printAndWait(`于是就这样遇到了三女神大人。`);
      await era.printAndWait(
        `美丽的红色长发让人想起燃烧的火焰，温柔的${
          maru.sex
        }尝试安抚惊慌失措的 ${you.name}`,
      );
      await era.printAndWait(
        `虽然已经不记得当时安慰的话语了，但那份温柔的感触像是写在了永不褪色的相簿之中的文字一样，被 ${you.name} 铭记着。`,
      );
      await emperor.say_and_wait(
        `——所以吾不需要认可，也无需赞同，所谓王者既是身先士卒。`,
      );
      await era.printAndWait(
        `嘈杂的声音打断了${you.name}的思绪，双腿传来的酥麻感拖着${you.name}的意识回到了现实之中。`,
      );
      await you.say_and_wait(`哈～啊。`);
      await era.printAndWait(
        `忍不住打了一个呵欠，回味着这份温暖的余韵，将视线从女神像移向了中庭的另一边。`,
      );
      await era.printAndWait(`似乎是刻意远离了 ${you.name} 谈论着什么。`);
      await you.say_and_wait(`还是回去吧。`, true);
      await maru.say_and_wait(
        `${callname}？后辈们送了一些胡萝卜过来，今天的话。`,
      );
      await era.printAndWait(`${maru.name} 堵住了离开中庭最近的道路，而且。`);
      await emperor.say_and_wait(`${maru.name}，别来无恙。`);
      await maru.say_and_wait(`小鲁铎今天看上去也很精神的样子呢。`);
      await maru.say_and_wait(`后辈们送了我一点胡萝卜，你也来尝尝看吧。`);
      await emperor.say_and_wait(`不用了。`);
      await maru.say_and_wait(`是吗？真是可惜呢。`);
      await emperor.say_and_wait(`之后可以拜托你送一点过来吗？`);
      await maru.say_and_wait(`当然可以！`);
      await maru.say_and_wait(
        `为了${maru.uma_sex_title}们的幸福拼命努力着的小鲁铎，我觉得很厉害哦。`,
      );
      await maru.say_and_wait(
        `作为挑战者一路努力过来，在赛场上留下了皇帝的威名。`,
      );
      await maru.say_and_wait(
        `像这样不断将没有${maru.uma_sex_title}能做到的预言打破，作为人生来说也是一种幸福吧。`,
      );
      await emperor.say_and_wait(`那么${maru.name}觉得幸福吗？`);
      await maru.say_and_wait(
        `如果说幸福的话，像这样在赛场上为可爱的后辈们留下追逐的希望，不也是很幸福的事情吗？`,
      );
      await maru.say_and_wait(
        `在草场之上自由的奔跑，听着后辈们的苦恼并提供建议，我觉得是不粗的选择哦？`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}们的期待可是比想象之中还要沉重的东西呢。`,
      );
      await emperor.say_and_wait(
        `若是中途便将粉色的泡泡戳破的话还好，如果一直做着粉红色的梦的话。`,
      );
      await emperor.say_and_wait(`总有一天，会遇到自己无法处理的事情。`);
      await emperor.say_and_wait(
        `到那时的话，${maru.name}，我期待着你采取什么方式，怎么跨越这道障碍。`,
      );
      await era.printAndWait(
        `随着铃声的响起，意味着马上就要开始下午的训练。${maru.name} 想了想还是沉默了。`,
      );
      await emperor.say_and_wait(
        `虽然还想多聊几句，不过办公室还有积攒的工作尚未结束，失礼了。`,
      );
      await era.printAndWait(`说罢，皇帝离开了中庭。`);
      await maru.say_and_wait(`……尽管如此，我也知道的。`);
      await maru.say_and_wait(`……抱歉，${callname}，我想起一点事情。`);
      await era.printAndWait(`${maru.name} 露出了忧郁的表情离开了中庭。`);
      await you.say_and_wait(`于是谁也不在了吗？`);
      await you.say_and_wait(
        `${maru.name}，似乎有什么心事的样子，找机会聊天吧。`,
      );
      await era.printAndWait(`${you.name} 离开了中庭。`);
      await era.printAndWait(`于是旅人们怀着不同的心思为了不同的目的前进。`);
      await era.printAndWait(`三女神默默包容了一切。`);
    };
    f.title = title;
    return f;
  })(),
  ws_34: (() => {
    const title = '礼物';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`某天,当${you.name}正在办公室整理文件的时候。`);
      await era.printAndWait(`咚咚咚`);
      era.printButton(`「请进」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `打扰了。`);
      await era.printAndWait(
        `随着门把手的扭转，看上去像是高中部的${maru.uma_sex_title}走了进来。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `下午好，训练员${you.adult_sex_title}。`,
      );
      era.printButton(`「下午好」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `我是特雷森学院随处可见的普通${maru.uma_sex_title}之中的一员`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `希望能像丸善前辈一样在赛场上一路胜利，请多指教。`,
      );
      era.printButton(`「请多指教」`, 1);
      await era.input();
      await era.printAndWait(`两人的手握在了一起。\n`);
      era.printButton(`这边有咖啡……不，还是算了。红茶和椰子汁喜欢喝哪种？`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `非常感谢，不过我只是为了送礼物过来的。`,
      );
      await era.printAndWait(`${maru.sex}从口袋中掏出了一个小盒子`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `像我们这样的普通${maru.uma_sex_title}，能够被训练员看重，在职业生涯中能够G3胜利已经是非常厉害的事情了。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `大家都只是朝着入着为目标拼命努力。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `尽管如此，能够入着的${maru.uma_sex_title}也是屈指可数，大部分赛${maru.uma_sex_title}都只是在出道战胜利后，就这样一场未胜结束了三年的生涯。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `有的甚至在毕业时，也没遇到能签订专属契约的训练员`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `丸善前辈不关心这些，只是一直鼓励着我们的前进。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `在我们遇到问题的时候，在旁边指点着我们。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `所以，我们一直都很感激丸善前辈。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `所以说，我和朋友们一起制作了这份礼物，想要送给丸善前辈。`,
      );
      era.printButton(
        `「我觉得${maru.name}一定会很高兴的，谢谢${you.name}们」`,
        1,
      );
      await era.input();
      await you.say_and_wait(`从舞台的手上将带有蝴蝶结装饰的小盒子收了下来。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `谢谢${you.name}，训练员${you.adult_sex_title}。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `在之后的选拔赛中，一定要让所有人都大吃一惊才行！`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `再见了，${maru.name}的训练员${you.adult_sex_title}！`,
      );
      await era.printAndWait(
        `鞠躬之后，${maru.sex}快步走向了门口探头探脑的同伴身旁`,
      );
      await you.say_and_wait(`希望${maru.sex}之后也能够遇到合适的训练员`, true);
      await era.printAndWait(`轻轻关上大门后,${you.name}打开了小盒子。`);
      await era.printAndWait(`里面放着的是由水晶制作的手链。`);
      await you.say_and_wait(`等${maru.name}回来后亲手交给${maru.sex}吧`, true);
    };
    f.title = title;
    return f;
  })(),
  we_39: (() => {
    const title = '万圣夜';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `将最后一份数据归档后，${you.name}吐出了长长的一口气。`,
      );
      era.printButton(`「终于结束了。」`, 1);
      await era.input();
      await era.printAndWait(
        `活动着几乎麻木的双腿，冬天的夜晚比夏季更加漫长。`,
      );
      await you.say_and_wait(`出去走走吧`, true);
      await era.printAndWait(
        `因为工作全部完成带来的成就感让${you.name}的脚步变得轻快起来。`,
      );
      await era.printAndWait(
        `走出训练室，学院大厅被南瓜灯、紫色的缎带等装饰成了带着神秘气息的古堡。`,
      );
      await you.say_and_wait(`说起来今天是什么日子来着？`, true);
      await you.say_as_passer_by_and_wait(
        `活泼的${maru.uma_sex_title}们`,
        `不给糖就捣蛋！`,
      );
      await era.printAndWait(
        `被打扮成幽灵狼人还有吸血鬼的${maru.uma_sex_title}们缠上了！`,
      );
      await you.say_and_wait(`呜哇！`);
      await era.printAndWait(
        `被躲在拐角处的${maru.uma_sex_title}们措不及防的吓到的${
          you.actual_name
        }摔倒在了地上。`,
      );
      await you.say_as_passer_by_and_wait(
        `活泼的${maru.uma_sex_title}们`,
        `恶作剧大成功！`,
      );
      await era.printAndWait(
        `因为成功吓到路人的${maru.uma_sex_title}们欢笑着跑开了，现场只留下了作为受害者的${
          you.actual_name
        }。`,
      );
      await you.say_and_wait(`打扮成这样，好像是什么节日来着？`);
      await era.printAndWait(
        `努力整理着思绪的${you.name}拍了拍屁股上的灰尘，站了起来。`,
      );
      await you.say_and_wait(`去学院外面看看吧`);
      await era.printAndWait(`打定了主意之后，${you.name}离开了大厅。`);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `打扮成木乃伊的${maru.uma_sex_title}们`,
        `不给糖就捣蛋!`,
      );
      await era.printAndWait(
        `似乎是模仿着西洋的万圣夜，特雷森学院的${maru.uma_sex_title}们也在商业街附近挨家挨户敲起了门。`,
      );
      await era.printAndWait(`店主们也会拿出准备好的糖果作为招待。`);
      await you.say_and_wait(`原来今天是圣诞节吗？`);
      await era.printAndWait(
        `看着巨大的蝙蝠与南瓜灯招牌的入口，${you.name}陷入了沉思之中。`,
      );
      await maru.say_and_wait(`HAPPY HALLOWEEN!`);
      await era.printAndWait(`在入口处被人打招呼了。`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`${callname} 万圣夜快乐♪。`);
      await era.printAndWait(
        `身穿深紫色女巫服cosplay的${maru.name}带着笑容看着${you.name}。`,
      );
      await you.say_and_wait(`没想到会在这里碰到${maru.name}，玩得高兴吗？`);
      await era.printAndWait(
        `抖动着的耳朵，像是顽皮的妖精一样活泼的尾巴，似乎已经不言而喻了。`,
      );
      await maru.say_and_wait(
        `很稀饭这种感觉，如果 ${callname} 也一起玩的话更口耐了♪。`,
      );
      await you.say_and_wait(`嗯……`);
      await era.printAndWait(
        `打扮成各种鬼怪的${maru.uma_sex_title}们都是未成年的${
          maru.teen_sex_title
        }，对于一个成年人来说做这种事的话还是。`,
      );
      await you.say_and_wait(`不如说非常荣幸。`);
      await era.printAndWait(
        `像这样将积攒下来的压力放松下来，全身心融入这份欢乐的海洋之中。`,
      );
      await maru.say_and_wait(`呵呵♪那就说好了哦？`);
      await you.say_and_wait(`一言为定。`);
      await you.say_and_wait(`就当是放松吧。`, true);
      await you.say_as_passer_by_and_wait(
        `打扮成巫妖的${maru.uma_sex_title}`,
        `前辈！这边快忙不过来了！`,
      );
      await era.printAndWait(
        `发放糖果的小摊似乎被${maru.uma_sex_title}们围得水泄不通的样子。`,
      );
      await maru.say_and_wait(`囧，那我先过去了。`);
      era.printButton(`「我也来帮忙」`, 1);
      await era.input();
      await era.printAndWait(
        `在分发了三麻袋的糖果之后，筋疲力竭的两人瘫在了训练室的沙发之上。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_41: (() => {
    const title = (maru) => `训练员与担当${maru.uma_sex_title}`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`这是十一月的某一天。`);
      await era.printAndWait(
        `${you.name}看着去年朝日杯的录像带，思考着如何利用其中的技巧帮助${maru.name}提高自己的能力。`,
      );
      await you.say_and_wait(`该说不愧是超级跑车吗。`);
      await era.printAndWait(`为奔跑而生的双腿，隐藏在优美肢体下的巨大力量。`);
      await you.say_and_wait(`看来就算不需要我也能轻松取胜啊`);
      await era.printAndWait(
        `按下暂停键，轻抿一口咖啡，冰凉的苦涩味在口中慢慢化开。`,
      );
      era.println();
      await era.printAndWait(`吱嘎。`);
      await maru.say_and_wait(`哈喽！${callname} 我进来了。`);
      await you.say_and_wait(`看上去心情不错的样子，遇到什么好事了吗？`);
      await maru.say_and_wait(`汗，${callname} 也看出来了吗？`);
      await maru.say_and_wait(
        `今天的选拨赛上，一直关注着的后辈终于克服了障碍，同样领略到了奔跑的快乐哦？\n`,
      );
      await you.say_and_wait(
        `既然${maru.name}都这么说了，我也有点想见识一下${maru.name}看好的后辈了。\n`,
      );
      await maru.say_and_wait(
        `对吧对吧？后辈们就酱——紫一下子成长起来了！把我都吓了一跳呢。`,
      );
      await maru.say_and_wait(
        `说不定哪天，我也会被后辈们轻松超过，就这样被远远的甩到后面去呢。亚历山大亚历山大。\n`,
      );
      era.printButton(`「之后的训练也要加油才行！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `没错！${
          maru.sex_code !== 1 ? '美眉' : '帅锅'
        }我之后的训练也要斯巴达才行！`,
      );
      era.println();
      await maru.say_and_wait(`说起来。`);
      await era.printAndWait(`${maru.name}像是联想到了什么，两手轻轻合拍。\n`);
      await maru.say_and_wait(`对了，${callname} ,训练结束后一起出去兜风吧?`);
      await maru.say_and_wait(
        `不同于其他季节，秋天的风总会带给人心情畅快的感觉呢。`,
      );
      await maru.say_and_wait(
        `不过，干巴巴的讲述 ${callname} 恐怕也感受不到吧。所以我想，${callname} 就这样用身体来感受或许更好。`,
      );
      era.printButton(
        `既然${maru.name}都这么说了，我也想用感受一下秋风的感觉了。`,
        1,
      );
      await era.input();
      await you.say_and_wait(`真期待${maru.name}所说的秋风是什么感受呢？`);
      era.drawLine();
      await maru.say_and_wait(`呼啊,被风吹后才真正知道神马都是浮云呢。`);
      era.printButton(`「${maru.name}可以开的稍微慢一点吗?」`, 1);
      await era.input();
      await era.printAndWait(
        `比起第一次坐在副驾驶上被吓得几乎晕过去，现在的${you.name}也慢慢适应了这种速度。`,
      );
      await you.say_and_wait(`人类比想象之中还要顽强啊。`, true);
      await you.say_and_wait(
        `在高速移动的气流之中，除了风的呼啸声以及向后飞速后退的景色。`,
        true,
      );
      await era.printAndWait(
        `既不像夏季一样，空气之中混杂着热浪的余韵，也不像冬季，空气之中混杂着寒流的碎片。`,
      );
      await era.printAndWait(`秋天的风，有一种强烈的解脱感。`);
      await era.printAndWait(
        `像是学生时代完成了最后一项作业后，放下笔松了口气。`,
      );
      await era.printAndWait(
        `或者说，被某种东西长期折磨，终于有一天终于结束的感觉。`,
      );
      await era.printAndWait(
        `从被风吹拂的脸颊开始，接着是一根根的头发，以及连接着头发的大脑，最后传递到了心中。`,
      );
      await era.printAndWait(`额外的畅快感，想要就这么无所顾忌的释放出来。`);
      await you.say_and_wait(`${maru.name}，说不定，我。`);
      await maru.say_and_wait(`差不多快到海边了呢。`);
      await era.printAndWait(`嘴巴边即将蹦出的话语，最终还是化为了沉默。`);
      await you.say_and_wait(`……是啊。`);
      era.drawLine();
      await era.printAndWait(
        `从${maru.name}的副驾驶位上下来后,${you.name}向远处竭力眺望，在视野之中也只有像芝麻大小的人影。`,
      );
      await era.printAndWait(
        `或许是${maru.uma_sex_title}这一种族天生所具有的优势，亦或者是从尚未被海水冲散的脚印之中推断出的情况。`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `在这片深蓝色的空间之中，${maru.name}凝视着起伏的波浪——`,
      );
      await era.printAndWait(`然后露出了寂寞的表情。`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`诶？`);
      await maru.say_and_wait(
        `像这样和 ${callname} 在休息日一起看海还是第一次呢。`,
      );
      await era.printAndWait(
        `带着潮湿气息的海风迎面吹拂而来，几乎让人睁不开眼睛。`,
      );
      await maru.say_and_wait(`哎呀，没想到今天的风这么猛烈。`);
      await you.say_and_wait(`这样吗。`);
      await you.say_and_wait(`原来海风就是这样略带苦涩的咸味的气息吗。`);
      await maru.say_and_wait(
        `嗯，略带腥味的风，同时也是依靠着海洋生存的生物的路标。`,
      );
      await maru.say_and_wait(`它们就是依赖着这份特别的气息寻找着食物。`);
      await maru.say_and_wait(
        `所以，从这种角度来说，这种气息成为了维系它们生存的生命线也说不定呢。`,
      );
      await you.say_and_wait(
        `${maru.name}一直都是温柔的大 ${maru.elder_sibling_sex_title} 呢。`,
      );
      await maru.say_and_wait(`我晕，唯独不想让 ${callname} 这么说呢♪`);
      await maru.say_and_wait(
        `被 ${callname} 这么说 ${maru.elder_sibling_sex_title} 我都有点不好意思。`,
      );
      await era.printAndWait(
        `被${you.name}称赞的${maru.name}出现了稀有的可爱表情。`,
      );
      await you.say_and_wait(`感谢三女神大人的馈赠，已经吃不下了。`, true);
      await era.printAndWait(
        `就这样尽情的将${maru.name}可爱的模样吃得一干二净。`,
      );
      await era.printAndWait(
        `相比于训练员的长达数十年的职业生涯,短短的三年不过像泡沫一样短暂。`,
      );
      await era.printAndWait(
        `所以这就意味着可以将生涯中初次遇到的${maru.uma_sex_title}作为练手的对象吗?`,
      );
      await era.printAndWait(
        `不,作为训练员来说,我们的能力注定不足,很可能会让将赌注压在我们身上的${maru.uma_sex_title}们失望。`,
      );
      await era.printAndWait(`即使如此,我们还是要选择签订契约。`);
      await era.printAndWait(`因为${maru.uma_sex_title}们需要它。`);
      await era.printAndWait(`正因为如此,对训练员来说最重要的就是一颗虔诚的心`);
      await era.printAndWait(
        `"纵使有身败名裂的可能，作为训练员也要和担当一起闪耀。"用这颗虔诚的心,来救赎自己训练过程中的一切丑陋与不足之处。`,
      );
      await maru.say_and_wait(`差不多该回家吃饭了，${callname} ——`);
      await era.printAndWait(`月亮升起来了。`);
    };
    f.title = title;
    return f;
  })(),
  before_asah_sta: (() => {
    const title = '朝日杯前・五挡加速';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`准备室内`);
      await maru.say_and_wait(`哼哼哼～`);
      await era.printAndWait(`${maru.name}心情不错的在准备室里检查着决胜服。`);
      await you.say_and_wait(`${maru.name}，准备的怎么样了？`);
      await maru.say_and_wait(`哎呀，是 ${callname} 啊。`);
      await maru.say_and_wait(`正如你所见，现在是马力全开的状态。`);
      era.printButton(`「接下来也要好好享受比赛哦！」`, 1);
      await era.input();
      await you.say_and_wait(
        `毕竟，我一直都想看到朝着未来奔跑的${maru.name}帅气的样子。`,
      );
      await maru.say_and_wait(`嗯，${callname}就好好看着吧。`);
      await maru.say_and_wait(`在赛场上奔跑的${maru.name}的模样。`);
      await maru.say_and_wait(`那么，我出发了。`);
      era.printButton(`「${maru.name}加油！」`, 1);
      await era.input();
      await era.printAndWait(`做好准备的${maru.name}走向了赛场。`);
      await you.say_and_wait(`接下来在观众席上为${maru.sex}加油吧`, true);
    };
    f.title = title;
    return f;
  })(),
  asah_sta_win: (() => {
    const title = '朝日杯后・蜚瓦拔木';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`阪神竞马场\n`);
      await era.printAndWait(
        `凌冽的空气刺激着你的肺部,寒冷刺激着大脑变得更加的清醒。`,
      );
      await you.say_and_wait(` ${maru.name}，一定要赢啊。`);
      await you.say_and_wait(`……不，如果是 ${maru.name} 的话。`);
      await you.say_and_wait(
        `比起胜利，还是为了感受和 ${maru.uma_sex_title} 们一起的奔跑才更加开心吧`,
        true,
      );
      await era.printAndWait(`${you.name} 紧紧地凝视着比赛开始的时刻。`);
      era.drawLine({ content: '观众席的另一端' });
      await era.printAndWait(
        `紧紧握住来之不易的马票, ${maru.uma_sex_title} 紧紧地盯着 ${maru.name} 的身影。`,
      );
      await era.printAndWait(`然而，`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `所以我的存在意义是……`,
      );
      await era.printAndWait(`不小心下意识将自己与 ${maru.sex} 对比了。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `啊！不小心将心底里的话说出来了。`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `可是为什么，心会这么痛呢？`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `我与你的距离，是用尽全力也触摸不到的程度。`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `为什么……`);
      await era.printAndWait(
        `不甘心的咬着嘴唇，将手中紧握的马票搓成了一个圆球。`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `为什么我无法从你的脚步之中看到希望呢`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `不对！我在想什么。`,
      );
      await era.printAndWait(
        `似乎有什么珍贵的东西碎裂了，再也找不回来了。${maru.uma_sex_title} 重新看向了 ${maru.name} 的身影。`,
      );
    };
    f.title = title;
    return f;
  })(),
  asah_sta_5: (() => {
    const title = '朝日杯后・兴奋的感觉';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name} 入着。`);
      await maru.say_and_wait(
        `嗨！${callname}，看到${
          maru.sex_code !== 1 ? '美眉' : '帅锅'
        }我帅气的样子了吗？`,
      );
      era.printButton(`辛苦了。`, 1);
      await era.input();
      era.printButton(`能在G1赛事入着能很厉害了。`, 1);
      await era.input();
      await maru.say_and_wait(
        `奔跑的 ${maru.uma_sex_title} 们都是斗志昂扬的想要取得胜利呢，${maru.elder_sibling_sex_title} 我有点压力山大呢。`,
      );
      await you.say_and_wait(` ${maru.name} 看上去明明乐在其中吧。`);
      await maru.say_and_wait(
        `毕竟是G1级赛事嘛，遇到的对手比平常要强一个档次。`,
      );
      await maru.say_and_wait(
        `相应的，能在草场上获得的快乐也比之前高了一个级别♪`,
      );
      await you.say_and_wait(`接下来去哪里庆祝一下吧？`);
      await maru.say_and_wait(
        `酱紫的话，${maru.sex_code !== 1 ? '美眉' : '帅锅'}我知道一家很受欢迎的甜品店。`,
      );
      era.drawLine({ content: '观众席的另一端' });
      await era.printAndWait(
        `紧紧握住来之不易的马票, ${maru.uma_sex_title} 紧紧地盯着 ${maru.name} 的身影。`,
      );
      await era.printAndWait(`然而，`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `所以我的存在意义是……`,
      );
      await era.printAndWait(`不小心下意识将自己与 ${maru.sex} 对比了。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `啊！不小心将心底里的话说出来了。`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `可是为什么，心会这么痛呢？`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `我与你的距离，是用尽全力也触摸不到的程度。`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `为什么……`);
      await era.printAndWait(
        `不甘心的咬着嘴唇，将手中紧握的马票搓成了一个圆球。`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `为什么我无法从你的脚步之中看到希望呢`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `不对！我在想什么。`,
      );
      await era.printAndWait(
        `似乎有什么珍贵的东西碎裂了，再也找不回来了。${maru.uma_sex_title} 重新看向了 ${maru.name} 的身影。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '圣诞节与心跳的回忆';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`Merry Christmas！`);
      await era.printAndWait(`穿着厚厚衣服的${maru.name}出现在了训练室中。`);
      era.printButton(`「圣诞节快乐!要取暖的话，这里放了围炉和橘子。」`, 1);
      await era.input();
      await era.printAndWait(
        `揉了揉疲惫的眼睛，借着和${maru.name}对话的机会稍微放空大脑。`,
      );
      await maru.say_and_wait(`外面比想象中还要寒冷真是受不鸟了。`);
      await era.printAndWait(
        `将身体交给了柔软的沙发，${maru.name}小心的拨开了橘子皮将果肉放入了口中。`,
      );
      await you.say_and_wait(
        `今天的气温已经到零下1°了，天气预报说今天晚上还会下雪。`,
      );
      await era.printAndWait(
        `'下雪吗'这么嘟哝着的${maru.name}又拨开了一个橘子。`,
      );
      await era.printAndWait(
        `一时之间训练室似乎恢复了寂静，只有沙沙的翻阅纸张声音回荡在训练室之中。`,
      );
      await era.printAndWait(
        `将身体深深埋入沙发的怀抱之中，重新翻开了本周时尚杂志的${maru.name}在被发出橙色光的暖炉围绕之下露出了愉悦的表情。`,
      );
      era.drawLine();
      await you.say_and_wait(`这就是最后一份了。`, true);
      await era.printAndWait(`将文件整理到文件夹之中，活动着酸麻的双腿。`);
      await maru.say_and_wait(`${callname}辛苦了，日程表的下一项是什么？`);
      await era.printAndWait(
        `将放松下来的肌肉一瞬间绷紧，重新恢复到平时状态的${maru.name}看着站起来的 ${you.name}。`,
      );
      await you.say_and_wait(`计划吗？`);
      await era.printAndWait(
        `以前圣诞的时候都是一个人在训练室整理心得笔记的 ${you.name}。`,
      );
      await you.say_and_wait(`嗯——说的对，`);
      await maru.say_and_wait(`一起出去庆祝吧？`);
      await you.say_and_wait(`在训练室里休息`, true);
      await era.printAndWait(
        `看着露出了期待表情的${maru.name}，${you.name} 后半部分硬生生咽了回去。`,
      );
      await maru.say_and_wait(`现在就出发！`);
      await era.printAndWait(`在${maru.name}的热情邀请之下，两人达成了一致。`);
      era.drawLine();
      await era.printAndWait(`在震动的马达声之中，小塔发动了。`);
      await era.printAndWait(
        `黑沉沉的天空，不时吹来的阵阵寒风无情的收割着来往的生灵。`,
      );
      await you.say_and_wait(`阿嚏！`);
      await era.printAndWait(`劲风顺着衣服与肌肤的缝隙之中钻了进去，。`);
      await you.say_and_wait(`好冷啊，但是不久之后还会下雪。`);
      await era.printAndWait(`不禁对之后的行程感到绝望。`);
      await maru.say_and_wait(
        `——说起来，小特${
          maru.couple_title
        }成长的比预想之中还要迅速呢，看到后辈们这么努力的样子，连${maru.elder_sibling_sex_title}我也有些兴奋起来了呢。`,
      );
      await era.printAndWait(
        `想着一定要找个借口抱着${maru.uma_sex_title}取暖，缩着身体忍受着寒冷。`,
      );
      await you.say_and_wait(`出门应该带条围巾的。`, true);
      await maru.say_and_wait(
        `……百货大厦那边推出了圣诞主题的烛光晚餐，一起去尝尝看吧？`,
      );
      await era.printAndWait(
        `呼啸的寒风声中，${maru.name}的话语似乎远在天边。`,
      );
      await you.say_and_wait(`好冷啊。`, true);
      await maru.say_and_wait(`……比起这个的话，我还是认为，啊，到了！`);
      await era.printAndWait(`不远处就是百货大厦了。`);
      era.drawLine();
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: '干', color: maru.color },
        '杯！」',
      ]);
      await era.printAndWait(
        `在${maru.name}口中的特价餐厅之中，两人举杯庆祝着节日的到来。`,
      );
      await maru.say_and_wait(`虽然现在还不能喝酒……不过，果汁的味道也不错哦♪`);
      era.printButton(`「过不了多久，${maru.name}也能喝酒了。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `到那一天时，${callname}要陪我一起喝到通宵才行呢。`,
      );
      await era.printAndWait(
        `一朵雪花从窗外的天空中落下，然后无数的雪花跟随着它的脚步落到了地面之上。`,
      );
      await you.say_and_wait(`为了那一天的到来，接下来的训练也要努力才行！`);
      await era.printAndWait(
        `冰凉而又美丽的它们像是自然界的精灵一样，随性地从空中落入凡间游玩。`,
      );
      await maru.say_and_wait(`下雪了，真可爱呢。`);
      await era.printAndWait(
        `似乎回忆起了什么，${maru.name}盯着外面的雪花若有所思。`,
      );
      await you.say_and_wait(`${maru.name}喜欢雪吗？`);
      await era.printAndWait(
        `摇晃着早已喝尽的玻璃杯，${maru.teen_sex_title}的思绪似乎回到了遥远的过去。`,
      );
      await maru.say_and_wait(`……啊！抱歉，不小心走神了呢。`);
      await era.printAndWait(
        `似乎才注意到${you.name}的存在一样，慌慌张张回应着${you.name}的${maru.name}露出了可爱的破绽。`,
      );
      era.printButton(`「不，没什么」`, 1);
      era.printButton(`「${maru.name}喜欢雪吗？」`, 2, { disabled: true });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `再问同样的问题，对${maru.name}来说也会很尴尬吧。`,
        );
        await era.printAndWait(`${you.name}决定用其他的话题应付过去。`);
        await era.printAndWait(`晚餐就在这样的良好气氛之中结束了。`);
      } else {
        await maru.say_and_wait(`嗯？雪花吗？`);
        await era.printAndWait(
          `似乎苦恼了一会，不过${maru.name}还是说了出来。`,
        );
        await maru.say_and_wait(`其实很虾米哦？`);
        await maru.say_and_wait(
          `不如说希望能在早起的时候拉开窗帘就看到雪花落在窗户上的景象呢！`,
        );
        await you.say_and_wait(`为什么露出这么惆怅的神情呢？`);
        await maru.say_and_wait(`${callname}不也是这样的吗？`);
        await era.printAndWait(`没有接过问题，反而抛出了另一个问句。`);
        await maru.say_and_wait(
          `露出了一副苦恼的样子，像是苦苦寻求答案的探索者一样。`,
        );
        await era.printAndWait(
          `重新把握了节奏的${maru.name}露出了玩味的笑容。`,
        );
        await maru.say_and_wait(`不过，答案其实很简单哦？`);
        await you.say_and_wait(`那么答案是？`);
        await maru.say_and_wait(`不·告·诉·${you.name}⭐`);
        await you.say_and_wait(
          `不对，说话太急切反而让${maru.sex}警戒起来了吗。`,
          true,
        );
        await you.say_and_wait(`只能下次再找机会了。`, true);
        await era.printAndWait(
          `之后又聊了一些有关训练的事情后，愉快的晚餐就这样告一段落了。`,
        );
      }
      era.drawLine({ content: '训练员宿舍门口' });
      await maru.say_and_wait(`886(拜拜喽)！`);
      await maru.say_and_wait(
        `汗，差点忘了！${callname}，这个送给${you.name}。`,
      );
      await era.printAndWait(
        `从放的满满当当的后座位拿出了一个精美丝带包装的礼物盒。`,
      );
      await you.say_and_wait(`${maru.name}这个是？`);
      await maru.say_and_wait(`这下真的明天见！`);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的话语被引擎的轰鸣声所盖过，只能抱着盒子看着小塔变成越来越小的一个点。',
      ]);
      await you.say_and_wait(`总之，先回去吧。`);
      await era.printAndWait(
        `小心捧着作为${maru.name}心意的礼物盒，慢慢回到了房间之中。`,
      );
      await era.printAndWait(
        `扯下金黄色的丝带，轻轻打开礼物盒的顶端，仿佛之中回到了幼年时收到长辈送的礼物一样。`,
      );
      await era.printAndWait(`一条做工精美的围巾以及`);
      await maru.say_and_wait(
        `抱歉呢，虽然也想给${callname}准备更好的，不过现在只有这种牌子了，希望${
          callname
        }不要介意，圣诞节快乐！`,
      );
      await era.printAndWait(`细腻优美的字迹仿佛是在与本人进行对话。`);
      await you.say_and_wait(`3q，${maru.name}。`);
      await era.printAndWait(`不知何时${you.name}也被同化了。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年的思绪';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`时间过得飞快，转眼之间又到了新的一年。`);
      await era.printAndWait(
        `与${maru.name}一起经历的酸甜苦辣，如今都化为了美好的回忆。`,
      );
      await era.printAndWait(
        `虽说今天是法定的节假日，不过在训练员宿舍就这么懒散的度过也过于烦闷了。`,
      );
      await era.printAndWait(
        `想着「随便逛逛吧」，脚步迈向的方向却不知不觉又回到了特雷森。`,
      );
      await you.say_and_wait(`既然来都来了，不如去训练室看看吧`);
      await era.printAndWait(`打定主意后，${you.name} 走向了训练室。`);
      era.drawLine({ content: '训练室' });
      await era.printAndWait(
        `如果是平时的训练室，总有种「又要上班啊」的烦躁感挥之不去。`,
      );
      await era.printAndWait(
        `但如果是休息日带着「随便看看吧」的心态重新回到了训练室时。`,
      );
      await era.printAndWait(
        `与${maru.name}讨论接下来的训练方针，一起品尝着美味的蛋糕，挤在沙发上全神贯注地看着重赏大赛的录像带。`,
      );
      await era.printAndWait(`一切的一切，都像是发生在昨天的事情一样。`);
      await you.say_and_wait(`时间过得可真快啊。`);
      await era.printAndWait(`望着以往的训练室，却有种格格不入的错觉。`);
      await you.say_and_wait(`太累了吗？`);
      await you.say_and_wait(`好！接下来去天台上吹下风清醒一下吧`, true);
      await you.say_and_wait(
        `……不知道${maru.name}现在在哪里,也许现在正在那里吵吵闹闹的度过吧。`,
      );
      await era.printAndWait(`轻轻关上训练室的大门，为了转换心情走向了天台。`);
      era.drawLine({ content: '天台' });
      await era.printAndWait(
        `很多${maru.uma_sex_title}决定在新年时和同伴或者自己的训练员一起度过,而且利用假期这段时间将去年的烦恼一甩而空`,
      );
      await era.printAndWait(`往日吵吵闹闹的学院现在露出了宁静的一面。`);
      await era.printAndWait(`从天台向下俯瞰,整个特雷森学院都在视线之下`);
      await you.say_and_wait(
        `这个时候大喊一声我是要成为三冠王${maru.uma_sex_title}的男人才符合气氛吧`,
        true,
      );
      await you.say_and_wait(`虽然没有人在这里不过还是太羞耻了`, true);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `「我要成为配得上${maru.name}的${you.phy_sex_title}！！！」`,
        {
          align: 'center',
          color: you.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait(
        `将训练员的身份啊，大人的矜持啊通通抛在了脑后，凭着气势喊出了连自己都被吓了一跳的声音。`,
      );
      await era.printAndWait(`打破了禁忌带来的兴奋感让 ${you.name} 满脸通红。`);
      await you.say_and_wait(`真是畅快啊。`);
      await you.say_and_wait(`趁着现在还没人注意到天台，还是快离开吧。\n`);
      await maru.say_and_wait(`哎呀？${callname}？`);
      await era.printAndWait(`野生的${maru.name}出现了！`);
      await you.say_and_wait(`咦咦咦？${maru.name}怎么会在这里？`, true);
      await you.say_and_wait(`哈哈,人生完蛋了`, true);
      await you.say_and_wait(`找个没人的荒岛就这样度过余生吧。`, true);
      era.printButton(`「抱歉，${you.name}认错人了。」`, 1);
      await era.input();
      era.printButton(`「现在的我只是一个非常普通的训练员罢了。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `……啊啦，这位嗯……非常普通的训练员${you.adult_sex_title}。`,
      );
      await maru.say_and_wait(
        `刚才喊的可真有气势，我在楼梯上都听到了那充满热情的声音。`,
      );
      await maru.say_and_wait(`青春真是美好呢。`);
      await maru.say_and_wait(
        `不过，这种话语果然还是要当着当事人的面好好说出来才可以吧？`,
      );
      await maru.say_and_wait(
        `如果是我家的训练员的话，说不定会带着满腔的感情好好阐述出来吧。`,
      );
      await era.printAndWait(
        `因为强烈的羞耻感而感到浑身发热的 ${you.name} 膝下一软，几乎要摔倒。`,
      );
      await you.say_and_wait(`非常抱歉。`, true);

      await era.printAndWait(`${maru.name}只是静静的仰望着天空。`);
      era.printButton(`……不去找小特${maru.couple_title}一起去玩吗?`, 1);
      era.printButton(`「可以告诉我${you.name}的想法吗？」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(`${maru.name}心情不错的哼着怀旧的曲子。`);
      await you.say_and_wait(`是感觉到寂寞了吗？`, true);
      era.printButton(`「这么冷的天气为什么特意来天台呢？」`, 1);
      era.printButton(`「${you.name}到底在想什么？」`, 1, { disabled: true });
      await era.input();
      await era.printAndWait(
        `为了得知真实想法的 ${you.name} 顺势就和一起靠在栏杆上聊起来了`,
      );
      await maru.say_and_wait(
        `去年还和小特${
          maru.couple_title
        }一起开新年派对的,不过今年说着什么快去陪自己的训练员然后就把我推出来了`,
      );
      era.printButton(`小特${maru.couple_title}其实很关心${you.name}呢`, 1);
      await era.input();
      await era.printAndWait(`从${maru.name}身上飘来了芬芳馥郁的气味，`);
      await you.say_and_wait(`是洗发水的味道吗？为什么今天这么香呢`, true);
      await maru.say_and_wait(
        `${callname}也是这么想的吗?${maru.couple_title}可是充满着希望的幼苗呢`,
      );
      await maru.say_and_wait(`总有一天会冲破风与雨的束缚,成为参天大树`);
      await era.printAndWait(
        `与${maru.name}充满期盼的话语相比,${maru.sex}看着天空的样子充满了思绪。`,
      );
      era.printButton(`「${maru.name}不想变成参天大树吗？」`, 1);
      await era.input();
      await maru.say_and_wait(`比起大树的话,我更想化为一阵温柔的风呢。`);
      era.printButton(`「风？」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}没有注意到天空中自由自在的风吗`);
      await maru.say_and_wait(
        `如果能化为天空中吹拂的风,我也许能在后辈们苦恼的时候`,
      );
      await maru.say_and_wait(
        `就差一点就能成功的时候，在叹息的时候给予${maru.couple_title}鼓励了`,
      );
      await you.say_and_wait(`${maru.name}现在已经做的很好了。`);
      await you.say_and_wait(`现在就尽情享受新年的快乐吧`);
      await maru.say_and_wait(`囧，这样下去真不像我了。`);
      await maru.say_and_wait(`${callname}有什么计划吗？`);
      era.printButton('「今天的话就在草地上练习吧」（速度+20）', 1);
      era.printButton(
        '「一起出去逛街然后把不愉快都一扫而空吧」（体力+200）',
        2,
      );
      era.printButton('「今天就在训练室好好休息吧」（技能点数+100）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait('嗯嗯，在草地上飞驰就会神马都是浮云了！');
          await maru.say_and_wait(`不愧是${callname},真懂我的心呢。`);
          await era.printAndWait(`${maru.name}似乎重新打起了精神`);
          await maru.say_and_wait('OK!那么现在就出发吧');
          await era.printAndWait(
            `你们在草地上训练了一整天然后聚在训练室小小庆祝了一下`,
          );
          break;
        case 2:
          await maru.say_and_wait(
            `虾米？${callname}是想和${maru.elder_sibling_sex_title}我约会吗?`,
          );
          await maru.say_and_wait('真心急呢，不好好计划一下约会的路线可不行呢');
          await maru.say_and_wait('那么就开着小塔');
          era.printButton(`「既然是约会的话不如一起走过去吧」`, 1);
          await era.input();
          await maru.say_and_wait(`嗯——`);
          era.printButton(`「既然是情侣的话一起走过去更加有氛围吧」`, 1);
          await era.input();
          await maru.say_and_wait(`既然${callname}都这么要求了`);
          await maru.say_and_wait(`偶尔散步的话也能体会到不一样的感觉吧⭐`);
          await era.printAndWait(`那么现在就出发`);
          await era.printAndWait(
            `等回到训练室的时候两人都筋疲力竭的靠在了沙发上`,
          );
          break;
        case 3:
          await maru.say_and_wait(
            `说的也是,这么冷的天还是呆在温暖的训练室里才对吧`,
          );
          era.printButton(`「我把放在训练室里的小零食还有橘子都拿出来吧」`, 1);
          await era.input();
          await maru.say_and_wait(`呵呵，那我来剥橘子。`);
          await era.printAndWait(`于是这天靠着围炉两人气氛不错的度过了。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '春冬之交';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`训练场`);
      await era.printAndWait(
        `赛${maru.uma_sex_title}在这里挥洒着汗水，朝着希望的未来前进。`,
      );
      await era.printAndWait(
        `经历了朝日杯的洗礼后，${you.name}们将目光放在了皋月赏的前哨战——春季锦标上。`,
      );
      await maru.say_and_wait(
        `按照预定计划，转过第三个弯道后，现在是冲刺的时候了！`,
      );
      await maru.say_and_wait(`就这么一口气将油门踩到底!`);
      await era.printAndWait(
        `对于采取逃马策略的赛${maru.uma_sex_title},相比于其他跑法的${maru.uma_sex_title}来说，将大部分的注意力都放在了序盘与中盘之上。`,
      );
      await era.printAndWait(
        `大概是考虑到将序盘与中盘确立起来的优势牢牢固定下来，就这样取得优势。`,
      );
      await era.printAndWait(
        `比赛中，多名采取相同策略的逃马，往往会在序盘与中盘之间发生殊死的较量。`,
      );
      await era.printAndWait(
        `就这样将比赛带到了快节奏模式，打乱采取穿插与追比策略${maru.uma_sex_title}的节奏吧。`,
      );
      await era.printAndWait(
        `然而，就上面尚未提到的先马，则会因为逃马之间的战斗无力在终盘保持原有的速度，就这么将温存的体力一口气爆发出来，取得优势。`,
      );
      await era.printAndWait(`螳螂捕蝉黄雀在后吗？`);
      await era.printAndWait(
        `但是，${maru.name}不是因为选择了逃马策略，而是因为`,
      );
      await you.say_and_wait(
        `不愧是被称为怪物一样的${maru.uma_sex_title}`,
        true,
      );
      await era.printAndWait(
        `因为享受奔跑，而不知不觉之间获得了常人难以企及的速度。`,
      );
      era.printButton(`「辛苦了,稍微休息一下吧。」`, 1);
      await era.input();
      await maru.say_and_wait(`哈……哈啊……呼～`);
      await era.printAndWait(`周围的草地像是台风过境一样被弄得乱七八糟的。`);
      await maru.say_and_wait(`非常感谢♪`);
      await era.printAndWait(
        `接过了${you.name}递过来的毛巾之后，${maru.name}擦拭着额头上的汗水，从湿透的长发传来的香草味钻进了 ${you.name} 的鼻腔之中。`,
      );
      await era.printAndWait(
        `说不定，像这样在奔跑后露出由衷的满足感才是${maru.name}真正的模样。`,
      );
      era.printButton(`「好怀念的香味啊。」`, 1);
      await era.input();
      await era.printAndWait(
        `一边帮助${maru.name}将湿透的头发用毛巾擦干，一边寻找着话题。`,
      );
      await maru.say_and_wait(`${callname}对香味很感兴趣吗？`);
      await you.say_and_wait(`嗯，很好闻的体香味。`);
      await maru.say_and_wait(
        `呵呵～虽然和体香味很像，不过这其实是香水的味道。`,
      );
      await maru.say_and_wait(`虽然是为了心情变换才选择了这款。`);
      await maru.say_and_wait(`不过从${callname}的反应看来。`);
      await maru.say_and_wait(`似乎很受欢迎的样子。`);
      await maru.say_and_wait(
        `嗯，看上去${maru.elder_sibling_sex_title}我也一直站在潮流的第一线呢。`,
      );
      await era.printAndWait(`${maru.sex}的心情似乎变得更好了。`);
      await you.say_and_wait(
        `唔，虽然我对潮流的东西也了解不多，不过${maru.name}一直都是相当迷人的角色呢。`,
      );
      await maru.say_and_wait(`就算${callname}这么说，也不会有什么奖励的哦？`);
      era.printButton(`「真的不需要」`, 1);
      era.printButton(`「已经收到了非常美好的回忆了」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`诶——`);
        await maru.say_and_wait(
          `${callname}用这种语气说的话，稍微有点可爱呢～`,
        );
        await era.printAndWait(`${maru.name}轻轻抚摸着${you.name}的脑袋。`);
        await maru.say_and_wait(`哼哼哼～果然还是这样的${callname}最可爱了♪`);
      } else {
        await maru.say_and_wait(`欸——`);
        await era.printAndWait(
          `${maru.name}带着不可思议的表情看着${you.name}。`,
        );
        await maru.say_and_wait(`训练员……${callname}说这种话可真是太狡猾了。`);
        await maru.say_and_wait(`……${callname}是不是对其他孩子也是这副说辞？`);
        await era.printAndWait(
          `像是遇到了什么头疼的事情，${maru.name}直直的盯着${you.name}看。`,
        );
        await maru.say_and_wait(
          `如果 ${callname} 变成这样放荡的人，${maru.elder_sibling_sex_title}我也是会伤心的哦？`,
        );
        await you.say_and_wait(`非常抱歉，绝对没有下次了。`);
        await maru.say_and_wait(
          `哈啊，不管怎么样，一定不要对其他的孩子这么说哦，这次的对象是我还好。不，即使是我的话也不要。`,
        );
      }
      await you.say_and_wait(`说起来，${maru.name}。`);
      await you.say_and_wait(`虽然有些突兀，不过有个问题困扰了我很久。`);
      await maru.say_and_wait(
        `哎呀，${callname}也有向${maru.elder_sibling_sex_title}我请教的时刻吗？`,
      );
      await maru.say_and_wait(
        `放心吧，我会好好把我知道的部分都告诉${you.name}的。`,
      );
      await era.printAndWait(
        `${you.name}将擦过汗水的毛巾挤干水分后叠起来放回了包中。`,
      );
      await you.say_and_wait(
        `${maru.name}一直都很受后辈们的欢迎呢，所以我在想。`,
      );
      await you.say_and_wait(`也许，我说的是也许，${maru.name}，${you.name}`);
      await you.say_and_wait(`${maru.name}的愿望是什么呢？`);
      await maru.say_and_wait(
        `嗯——就像花园里的园丁一样，在布满杂草的土壤之上埋下种子。`,
      );
      await maru.say_and_wait(
        `浇水、松土、然后施肥，不论外界的变化如何，就这么期待着。`,
      );
      await maru.say_and_wait(
        `虽然有时会遇到狂风骤雨、在松土时也会遇到意外难缠的杂草，但是，看着依靠自己顽强毅力破土而出的花朵们。`,
      );
      await maru.say_and_wait(
        `看着美丽的花朵终于绽放的一瞬间，在百感交集之下留下的喜悦泪水，我想，这才是我存在的意义。`,
      );
      await you.say_and_wait(`所以，${maru.name}一直都在默默努力着啊。`);
      await maru.say_and_wait(
        `当然，像这样带着稚嫩的后辈们慢慢前进，等待${
          maru.couple_title
        }开花结果的时刻到来。`,
      );
      await maru.say_and_wait(`一切的辛苦都将会得到应分的回报。`);
      await era.printAndWait(
        `没有激动的情感，${maru.name}平静地说出了自己的梦想。`,
      );
      await you.say_and_wait(`……真美啊，${maru.name}。`);
      await you.say_and_wait(`非常感谢，接下来也请多多指教了。`);
      await maru.say_and_wait(`我这边也是，请多多指教了。`);
      await era.printAndWait(
        `虽然冬日的寒冷尚未撤去，但 ${maru.name} 的笑容却令${you.name}感到了温暖。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} falcon 醒目飞鹰
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, falcon, minoru, you, callname) => {
      await era.printAndWait(
        `从居住的训练员公寓来到特雷森时，发现今天的空气比以往更加甜蜜。`,
      );
      await era.printAndWait(
        `看着特雷森的学生们一大早不像以往一副死气沉沉的样子，两两结队兴奋的讨论着被送礼物之人的表情时。`,
      );
      await era.printAndWait(`才意识到情人节又到了。`);
      await era.printAndWait(
        `虽然思考着如果有${maru.uma_sex_title}送巧克力过来应该怎么应对，不过走到训练室门口却没有任何前来打招呼的人。`,
      );
      await you.say_and_wait(
        `现充啊全部爆炸吧，让FFF团的圣火把${you.name}们都烧尽。`,
        true,
      );
      await era.printAndWait(
        `一边咒骂着，一边却像是逃避着空气中拉丝的甜味一样漫无目的的奔跑着。`,
      );
      await era.printAndWait(`然后，结结实实的撞到了某人的身上。`);
      era.printButton(`「抱歉」`, 1);
      await era.input();
      await era.printAndWait(`虽然只是轻微的碰撞，不过这股气味意外的很熟悉。`);
      await maru.say_and_wait(`哈喽，${callname}？`);
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `看着眼前的${maru.teen_sex_title}与一大袋的巧克力，${you.name}不禁陷入了沉思。`,
      );
      await you.say_and_wait(`今年也是这么多吗？`);
      await maru.say_and_wait(
        `去年新入校的后辈们还有刚刚从特雷森毕业的${maru.uma_sex_title}们，不知不觉就积攒成这样了。`,
      );
      await era.printAndWait(
        `这样下去可不是办法啊，就算两个人把巧克力当成主食来吃……不，一个人吃的话根本吃不完。`,
      );
      await you.say_and_wait(`收也不是不收也不是，这下进退两难了啊。`);
      await era.printAndWait(`有什么办法可以处理掉这些巧克力吗？`);
      await you.say_and_wait(
        `嘛，将巧克力作为礼物送给一直以来支持着的粉丝们吧。`,
      );
      await you.say_and_wait(`如果是这个数目的话，作为粉丝福利绰绰有余了！`);
      await maru.say_and_wait(`不过场地选在哪里好呢？`);
      await era.printAndWait(`我觉得`);
      era.printButton(`「租一间演出室临时作为场地吧！」`, 1);
      era.printButton(`「干脆直接在商店街来一场街头演出吧！」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`听上去不错的样子，那就这么办吧。`);
        await era.printAndWait(
          `${you.name}向之前联络的有名导演询问了有无推荐的房间，很快便得到了对方的回复。`,
        );
        await era.printAndWait(
          `在马推上宣布了傍晚举办粉丝感谢会的消息后，迅速得到了大量转发。`,
        );
        await era.printAndWait(
          `粉丝感谢会的完美结束暂且不提，很多粉丝们即使没有巧克力也在争着和${maru.name}握手。`,
        );
        await era.printAndWait(
          `看着${maru.name}保持着微笑的姿势站立了3个小时，让${you.name}对偶像一词有了深刻的敬畏。`,
        );
        await era.printAndWait(
          `第二天的时尚杂志上，刊登了名为${maru.name}潮流的头条。`,
        );
      } else {
        await maru.say_and_wait(`街头演出吗？听上去像是飞鹰同学会干的事情呢。`);
        await maru.say_and_wait(`说不定意外的会很有趣呢！`);
        await era.printAndWait(
          `向${falcon.name}请教了如何突击演出，以及如何在${
            minoru.name
          }的追捕下迅速逃脱的技巧。`,
        );
        await era.printAndWait(
          `在马推上宣布了傍晚在商业街突击演出的消息后，迅速得到了大量转发。`,
        );
        await era.printAndWait(
          `粉丝感谢会的完美结束暂且不提，很多粉丝们即使没有巧克力也在争着和${maru.name}握手。`,
        );
        await era.printAndWait(
          `看着${maru.name}保持着微笑的姿势站立了3个小时，让${you.name}对偶像一词有了深刻的敬畏。`,
        );
        await era.printAndWait(`之后被热情的店家们免费赠送了许多日用品。`);
      }
      await you.say_and_wait(`终于结束了。`);
      await era.printAndWait(
        `将热情的粉丝们一一回应后，一片狼藉的现场只剩下了${you.name}们两人。`,
      );
      await you.say_and_wait(`辛苦了。真的辛苦了。`);
      await era.printAndWait(`${you.name}带着绝对的敬意看向了${maru.name}。`);
      await era.printAndWait(`在夕阳的照耀下简直像是神祇一样不容侵犯。`);
      await maru.say_and_wait(
        `非常感谢您支持着偶像活动的${maru.name}，今后也请多多支持——啊，是${
          callname
        }。`,
      );
      await era.printAndWait(`一时之间不知该如何回复。`);
      await maru.say_and_wait(`说起来，还有这个♪`);
      await era.printAndWait(
        `${maru.name}从后台之中拿出了包装精美的巧克力盒。`,
      );
      await maru.say_and_wait(`情人节快乐，${callname}♪`);
      await era.printAndWait(
        `${you.name}接过了从${maru.name}那里得到的巧克力。`,
      );
      await maru.say_and_wait(`今后也请和${maru.name}一同前行吧，${callname}♪`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = '偶像';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`训练室`);
      await era.printAndWait(`距离春季锦标还有两个星期。`);
      await era.printAndWait(
        `处理完最后一份文件后，${you.name} 放下了手中的笔，长长的呼出了一口气。`,
      );
      await you.say_and_wait(`终于处理完了。`);
      await you.say_and_wait(`但是。`);
      await era.printAndWait(`一直以来都有的一个疑问。`);
      await era.printAndWait(`被死死压制住，不，干脆是不愿意去回忆。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(`园丁。`);
      await you.say_and_wait(`一直习惯于以强者的姿态面临问题。`);
      await era.printAndWait(
        `希望能以教育者的姿态，通过自己的经验尽可能帮助那些可爱的小${maru.uma_sex_title}。`,
      );
      await you.say_and_wait(`但是，作为园丁的道路，不是那么理想的世界。`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `打扰了。`);
      await era.printAndWait(`一位瘦小的${maru.uma_sex_title}走了进来。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `那个，请问丸善前辈在这里吗？`,
      );
      await you.say_and_wait(
        `${maru.name}有事暂时离开了，${you.name}先在这里坐着稍微休息一下吧。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `这样吗……啊，非常感谢！`,
      );
      await era.printAndWait(`${you.name}将一罐胡萝卜汁放在了沙发桌上。`);
      await era.printAndWait(
        `${you.name}打开了之前看到一半的，${maru.name}参加朝日杯的录像。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `诶，这个是丸善前辈的！`,
      );
      await you.say_and_wait(`${you.name}也喜欢看录像吗？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `嗯！丸善前辈冲线部分的特写，我反复看了五六遍呢！`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `不如说，通过模仿丸善前辈的摆动方式，说不定我也能顺利在G3上获胜！`,
      );
      await you.say_and_wait(`……原来是这样吗？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `诶……嗯。因为本格化的时间比较早，所以初中的时候就作为赛${maru.uma_sex_title}参赛了。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `不过，虽然三年过去了，但除了出道战胜利以外，最好的成绩也只有G3的五着。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}捧着手中的胡萝卜汁，凝视着里面的橘黄色液体。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `虽然也为此付出了大量的努力，不过几乎没有什么成长。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `只是重复着，重复着同样的行动，就这样浑浑噩噩的度过。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `我也想过，说不定是我的方法出现了问题。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `不过，仅仅只是在脑海里稍微想了一下就这么搁置了。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `也许，我并不适合作为赛${maru.uma_sex_title}，是时候去找其他方向的出路了。`,
      );
      await era.printAndWait(
        `说完，${maru.uma_sex_title}沉默注视着${you.name}和${maru.name}取得的奖杯。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `赛${maru.uma_sex_title}界不是那个付出就能得到回报的温柔的世界。`,
      );
      await era.printAndWait(`尽管如此。`);
      era.printButton(`「付出终会有回报的一天」`, 1);
      era.printButton(`「或许尽早退出也是一件好事」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`付出终会有回报的一天。`);
      } else {
        await you.say_and_wait(`或许尽早退出也是一件好事。`);
      }
      await era.printAndWait(
        `心乱如麻，恐怕这个${maru.uma_sex_title}也是这么想的吧。`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `……谢谢。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `啊，抱歉，呆的太久了，既然丸善前辈还没过来的话，那我先告辞了。`,
      );
      await era.printAndWait(
        `将喝完的罐头扔进垃圾桶后，${maru.uma_sex_title}向${you.name}道别。`,
      );
      await you.say_and_wait(`祝${you.name}武运昌隆。`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `嗯，再见。`);
      await era.printAndWait(
        `带着苦涩笑容的${maru.uma_sex_title}轻轻关上了训练室的门。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = '殿堂周（因子继承）';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`礼堂\n`);
      await era.printAndWait(`殿堂周是特雷森最重要的几个节日之一。`);
      await era.printAndWait(
        `这一天，很多殿堂${maru.uma_sex_title}会来特雷森演讲。`,
      );
      await era.printAndWait(
        `而这些前辈们的经验，对于刚出道/没出道多久的${maru.uma_sex_title}们来说是珍贵的经验。`,
      );
      await era.printAndWait(
        `因其重要性，${you.name}与${maru.name}早早来到了礼堂等待着演讲的开始。`,
      );
      await maru.say_and_wait(
        `如果能在赛场上与前辈们较量，说不定会意外的有趣呢♪`,
      );
      await era.printAndWait(
        `看着演讲台上的殿堂${maru.uma_sex_title}们，${maru.name}露出了期待的表情。`,
      );
      await era.printAndWait(
        `而${you.name}则在一旁快速捕捉着关键词，记录在电脑上。`,
      );
      await maru.say_as_passer_by_and_wait(
        `殿堂${maru.uma_sex_title}A`,
        `……大家都知道这个世界是由三女神大人所创造的……`,
      );
      await era.printAndWait(
        `台上演讲的殿堂${maru.uma_sex_title}突然提到了三女神大人。`,
      );
      await maru.say_and_wait(`说起来，${callname}知道吗？`);
      await era.printAndWait(`坐在一旁的${maru.name}将视线看向了${you.name}。`);
      await maru.say_and_wait(
        `听说对着中庭的三女神像祈祷，能获得来自其他世界的祝福。`,
      );
      await maru.say_and_wait(`甚至由不可思议的力量发生呢。`);
      await era.printAndWait(
        `四周雷鸣般的掌声响起，演讲的${maru.uma_sex_title}从台上退下，活动进入了下一个阶段。`,
      );
      await era.printAndWait(
        `趁着这个空挡，${you.name}扭头看向了${maru.name}。`,
      );
      await era.printAndWait(
        `换上了周年纪念衣服的${maru.sex}正等待着${you.name}的回复。`,
      );
      era.printButton(`「我期待着${maru.name}站在讲台上那一刻。」`, 1);
      await era.input();
      await maru.say_and_wait(`虾米？${callname}对我的评价这么高吗？`);
      era.printButton(
        `像这样温柔又成熟的大${maru.elder_sibling_sex_title}可是相当少见呢。`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`接下来不努力训练可不行呢！`);
      await you.say_and_wait(`一起加油吧！`);
      await era.printAndWait(
        `回到训练室后，${you.name}们坐在一起看录像带直到深夜。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sprg_sta: (() => {
    const title = '春季锦标前・火焰兰';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`准备室`);
      await era.printAndWait(
        `春季锦标，作为皋月赏的前哨战，许多${maru.uma_sex_title}全力以赴的场所。`,
      );
      await era.printAndWait(`然而此时。`);
      await you.say_as_passer_by_and_wait(
        `工作人员`,
        `已经确认过三遍了，包括${maru.name}在内，一共只有五名赛${maru.uma_sex_title}。`,
      );
      await you.say_and_wait(`啊……谢谢。`);
      await era.printAndWait(
        `对于${maru.name}来说，在赛场上能享受到了快乐程度是与赛事等级以及参赛的${maru.uma_sex_title}成正比。`,
      );
      await era.printAndWait(
        `换句话说，赛事等级越高，能参战的${maru.uma_sex_title}人数以及质量也随之变高，${maru.name}也就愈加享受。`,
      );
      await era.printAndWait(`如果仅仅是这点还好。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `啊，我知道的，这场比赛一定是${maru.name}的胜利。`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}B`,
        `还有考虑的必要吗？如果不是${maru.name}获胜，我根本想不到其他人怎么战胜${
          maru.sex
        }。`,
      );
      await you.say_as_passer_by_and_wait(
        `参赛的赛${maru.uma_sex_title}A`,
        `已经无所谓了，反正接下来一定是${maru.name}的胜利，我还是节省体力准备之后的赛事吧。`,
      );
      await you.say_as_passer_by_and_wait(
        `参赛的赛${maru.uma_sex_title}A`,
        `说到底，没有人能战胜那种怪物。`,
      );
      await maru.say_and_wait(`${callname} ,我已经准备好了`);
      await era.printAndWait(`不合时宜的声音打断了 ${you.name} 的回忆。`);
      await you.say_and_wait(`嗯，这次也要好好享受比赛哦。`);
      await maru.say_and_wait(
        `是啊，不过听说这次参加比赛的人数只满足了最低要求呢。`,
      );
      await maru.say_and_wait(`如果参加比赛的大家更积极一点就好了。`);
      await era.printAndWait(
        `看上去${maru.name}的心情似乎不太好，耳朵也随之低垂了下来。`,
      );
      era.printButton(
        `${maru.name}，将我们之前的训练成果好好展示给在场的观众们看吧`,
        1,
      );
      era.printButton(
        `如果能看到${maru.name}的奔跑，我相信${maru.couple_title}一定会改变主意的`,
        2,
      );
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `嗯，${callname}就在观众席上好好看着我的表现吧！`,
        );
        await maru.say_and_wait(`好好将这份火红的身影记在心底！`);
      } else {
        await maru.say_and_wait(`……`);
        await you.say_and_wait(
          `通过${maru.name}的背影，让那些有些泄气的大家们重新散发希望吧`,
        );
        await you.say_and_wait(`就像我们平时训练的那样。`);
        await maru.say_and_wait(`没错！`);
        await era.printAndWait(`${maru.name}垂下的耳朵又笔直地竖了起来。`);
      }
      await era.printAndWait(
        `虽然还想继续说下去，但工作人员们调试麦克风的声音传到了准备室之中。`,
      );
      await maru.say_and_wait(`差不多该到我出场的时候了，${callname}等会见！`);
      await you.say_and_wait(`为什么感到了一阵不安呢`, true);
      await era.printAndWait(
        `${you.name}将这份不安深深的埋进了心底,看着爱马走向了赛场`,
      );
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_win: (() => {
    const title = '春季S后・迷茫之始';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `没有任何意外发生，这场比赛是 ${maru.name} 的碾压式胜利。`,
      );
      await era.printAndWait(
        `因为同时代的 ${maru.uma_sex_title} 纷纷避战的缘故。`,
      );
      await era.printAndWait(
        `作为参赛对手的 ${maru.uma_sex_title} 们，其中最好的一位也只是在一场不知名的G3取胜的程度罢了。`,
      );
      await era.printAndWait(`这场胜利，真的能感受到快乐吗？`);
      await you.say_as_passer_by_and_wait(
        `解说`,
        ` ${maru.name} ！ ${maru.name} 冲线了！`,
      );
      await you.say_as_passer_by_and_wait(
        `解说`,
        `大差！是 ${maru.name} 压倒性的胜利！`,
      );
      await maru.say_and_wait(`……`);
      maru.print(`这场胜利，真的能感受到快乐吗？`);
      await you.say_and_wait(`${maru.name}？`);
      await you.say_as_passer_by_and_wait(
        `粉丝A`,
        `${maru.name}！${maru.name}！`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝B`,
        `我就知道肯定是 ${maru.name} 的胜利！`,
      );
      await you.say_as_passer_by_and_wait(
        `粉丝A`,
        `不愧是被称为超级跑车的 ${maru.uma_sex_title} ！我果然没有看错！`,
      );
      maru.print(`有点疲惫啊。`);
      await you.say_as_passer_by_and_wait(
        `粉丝A`,
        `就这样会压倒性的实力把那些弱者统统消灭吧！`,
      );
      maru.print(`在准备室换决胜服时也是。`);
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} A`,
        `反正都赢不了，还用那么大力气干什么。`,
      );
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} A`,
        `所谓的 ${maru.uma_sex_title} 以奔跑作为偶像的传统，早该被主播淘汰了。`,
      );
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} A`,
        `干脆顺应潮流，转型当主播，就这么退役吧。`,
      );
      maru.print(`演出结束后，路过窃窃私语的 ${maru.uma_sex_title} 们。`);
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} B`,
        `赛 ${maru.uma_sex_title} 这个职业，反正都只是那些有天赋的人的狩猎场。`,
      );
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} B`,
        `对于像我们这样的普通人，比赛不过只是一次又一次沦为陪衬的笑料罢了，真是恶心。`,
      );
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} B`,
        `所以说啊，能在草场上感受到快乐的人，实在无法理解。`,
      );
      await you.say_as_passer_by_and_wait(
        `赛 ${maru.uma_sex_title} B`,
        `呼啊，当时的自己居然还在憧憬当赛 ${maru.uma_sex_title}，现在想想只是羞耻。`,
      );
      era.drawLine();
      await you.say_and_wait(` ${maru.name}？`);
      await era.printAndWait(` ${maru.name} 以绝对优势充裕的取得了连胜。`);
      await era.printAndWait(
        `虽然只是皋月赏的前哨战，不过接下来的皋月赏恐怕也不存在什么问题吧。`,
      );
      await era.printAndWait(`这么想着，你推开了房门。`);
      await maru.say_and_wait(`啊，${callname} 是来接我的吗？`);
      await era.printAndWait(` ${maru.name} 看上去与平时几乎没有区别。`);
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title} 我的表现怎么样？`,
      );
      era.printButton(`「……也许吧」`, 1); //be1
      era.printButton(`「……${maru.name}。」`, 2);
      era.print('【警告，请谨慎选择，否则一切将不可挽回！】', {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      });
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`虾米？`);
        era.printButton(`啊，抱歉，刚才走神了。`, 1);
        await era.input();
        await you.say_and_wait(
          `不愧是 ${maru.elder_sibling_sex_title}，非常棒哦！`,
        );
        await maru.say_and_wait(`嗯嗯，我也这么想的哦。`);
        await maru.say_and_wait(`嗯——接下来的话，去哪里吃比较好呢？`);
        await maru.say_and_wait(`${callname}有什么推荐的吗？`);
        await you.say_and_wait(`去尝一下萨利亚吧，那里的食物比较好吃。`);
        await maru.say_and_wait(`嗯！那接下来一起去尝尝看吧。`);
      } else {
        await maru.say_and_wait(`哦呀，${callname}怎么了？`);
        await you.say_and_wait(`明天晚上，你有空吗？`);
        await you.say_and_wait(`我有些话想跟你说，就在天台上面谈吧。`);
        await maru.say_and_wait(`有什么事情不能在这里聊吗？`);
        await you.say_and_wait(`抱歉，请允许我任性一次，拜托了。`);
        await maru.say_and_wait(`欸？${callname}？`);
        await you.say_and_wait(`拜托了。`);
        await era.printAndWait(`${you.name} 深深低下了头。`);
        await maru.say_and_wait(`居然做到这种程度……`, true);
        await maru.say_and_wait(`既然 ${callname} 都这么说了。`);
        await maru.say_and_wait(`我明白了。`);
        await era.printAndWait(` ${maru.name} 带着有点忧虑的表情看着你。`);
        await you.say_and_wait(`那么，明天晚上 9 点，在学校天台上见。`);
        await era.printAndWait(
          `背后已经被汗水打湿，虽然已经做好了最坏的打算，但能得到 ${maru.name} 的同意，还是让 ${you.name} 长呼了一口气。`,
        );
        await maru.say_and_wait(
          `${maru.elder_sibling_sex_title}我做了让 ${callname} 受伤的事情吗？`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `粉丝感谢祭是为了感谢一直支持赛场上的${maru.uma_sex_title}们的粉丝们而召开的节日。`,
      );
      await era.printAndWait(
        `这一天，特雷森会开放大门，在特雷森就读的学生们会在学生会安排下的主舞台以及几个副舞台进行表演。`,
      );
      await era.printAndWait(
        `作为在赛${maru.uma_sex_title}道路上前进的${maru.uma_sex_title}们，往往会得到更多的关注。`,
      );
      await era.printAndWait(`舞蹈室\n`);
      await maru.say_and_wait('一、二、三、四，游刃有余♪');
      await maru.say_and_wait('五、六、七、八，完全没问题♪');
      await era.printAndWait(`${you.name}看着${maru.name}进行最后一遍排练。`);
      await maru.say_and_wait(`${callname}${you.name}觉得怎么样？`);
      era.printButton(`「好怀念的歌曲」`, 1);
      await era.input();
      await era.printAndWait(
        `世纪初的非主流歌曲在耳边响起，激烈的鼓点与明快的节奏以及伴随着节拍摆动着步伐的${maru.name}。`,
      );
      await era.printAndWait(
        `恍惚之间似乎回到了学生时代，那个下课后便三三两两聚在一起讨论着最新的CD集。`,
      );
      await maru.say_and_wait(
        `${callname}这可是现在最新潮的流行歌曲哦？这样下去的话会跟不上时代的。`,
      );
      await maru.say_and_wait(`差不多该我出场了。`);
      await maru.say_and_wait(`${callname}就在台下好好欣赏吧。`);
      await era.printAndWait(`一部分游客很喜欢这种复古音乐。`);
      await era.printAndWait(
        `${maru.name}带领着这部分游客回到了过去的幻影之中。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sister_annoyance: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}的烦恼`;
    /**
     * 训练员鼓励丸善斯基，丸善斯基在训练员相信自己的时候重整旗鼓
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`天台`);
      era.println();
      await era.printAndWait(`在整理完今天需要处理的资料后，你来到了天台上。`);
      await era.printAndWait(
        `比赛后的${maru.name}看起来有点奇怪，说话的时候也有些心不在焉的样子。`,
      );
      await era.printAndWait(
        `虽然也有错觉的可能，不过你想要以友人的身份更加深入了解 ${maru.sex} 的问题。`,
      );
      await you.say_and_wait(`如果能一口气全部解决的话就再好不过了。`);
      await era.printAndWait(
        `相信以${maru.name}的能力，不论多大的挫折都能轻松度过吧。\n`,
      );
      await you.say_as_passer_by_and_wait(
        `医生`,
        `${maru.name}小腿骨部分受到了损伤。`,
      );
      await you.say_as_passer_by_and_wait(
        `医生`,
        `继续下去有可能会导致行走与跑步能力受限。`,
      );
      await you.say_as_passer_by_and_wait(
        `医生`,
        `最好还是停止训练，好好休息一段时间。`,
      );
      await you.say_and_wait(`我知道了。`);
      await era.printAndWait(`将诊断书放入公文包后，正准备离开时，被叫住了。`);
      await you.say_as_passer_by_and_wait(
        `医生`,
        `你是${maru.name}的训练员吧。`,
      );
      await you.say_and_wait(`是的。`);
      await you.say_as_passer_by_and_wait(
        `医生`,
        `${maru.name}的腿比想象之中脆弱。`,
      );
      await you.say_as_passer_by_and_wait(
        `医生`,
        `或许是这个原因，看上去你已经很久没有睡好了。`,
      );
      await you.say_and_wait(`是的。`);
      await you.say_as_passer_by_and_wait(
        `医生`,
        `作为指导备受瞩目的赛${maru.uma_sex_title}的训练员，承受的压力比想象中还要巨大。`,
      );
      await you.say_as_passer_by_and_wait(`医生`, '请保重身体。');
      await you.say_and_wait(`……谢谢。`);
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `思绪被 ${maru.name} 的话语所打断，而此时离约定的时间还有十分钟左右的充裕。`,
      );
      await you.say_and_wait(`诶？啊，正巧我也是刚到不久。`);
      await era.printAndWait(
        `身着白色连衣裙的${maru.uma_sex_title}出现在了天台之上。`,
      );
      await maru.say_and_wait(` ${callname} 比想象之中还要急切的样子呢。`);
      await you.say_and_wait(
        `是啊，因为知道今天是个好天气所以才想和${maru.name}一起度过。`,
      );
      await you.say_and_wait(
        `而且仔细看的话，${maru.name}打扮得比平常还要美丽呢。而且，好像有一股茉莉花香的味道。`,
      );
      await maru.say_and_wait(
        `毕竟是 ${callname} 难得亲自邀请嘛，不仔细打扮一下就出门可不行。`,
      );
      await you.say_and_wait(`这么说起来，反而是我这边有些失礼了。`);
      await era.printAndWait(
        `不知该从何开口，你陷入了沉默之中，最后反而是${maru.name}先提出了话题。`,
      );
      await maru.say_and_wait(
        ` ${callname} 平时一直努力的身影，${maru.sex_code !== 1 ? '美眉' : '帅锅'}我很感动哦。`,
      );
      await maru.say_and_wait(
        `原本一直在思考应该怎么让 ${callname} 放松的样子，没想到 ${callname} 主动提出了这个要求。`,
      );
      await maru.say_and_wait(
        `其实的话，没必要一直紧绷着神经不放哦，多依赖一下 ${maru.elder_sibling_sex_title} 我吧。`,
      );
      await era.printAndWait(`被${maru.name}鼓舞的神经也慢慢放松了下来。`);
      await you.say_and_wait(
        `我知道了，接下来的话也请${maru.name} ${maru.elder_sibling_sex_title} 多关照了。`,
      );
      await you.say_and_wait(`那么，该说正事了。`);
      await era.printAndWait(
        `原本因紧张过头而一片空白的大脑也慢慢整理好了思路。`,
      );
      await you.say_and_wait(`请让我多了解一点你。`);
      await maru.say_and_wait(
        `我不是和 ${callname} 一直都呆在一起吗？这又从何说起呢？`,
      );
      await you.say_and_wait(`不，不是这样的。`);
      await era.printAndWait(`你坚决的摇了摇头，正视着 ${maru.sex} 的双眼。`);
      await you.say_and_wait(`虽然我也知道，打听别人的隐私不是什么好事。`);
      await you.say_and_wait(
        `不过，在训练室休息的时候，在偶然间看到的${maru.name}消沉的样子。`,
      );
      await you.say_and_wait(
        `我很难过，像是一块重石压在了心头之上，这个时候我才发现，其实我对${maru.name}的了解还不够多。`,
      );
      await you.say_and_wait(`所以，这不是请求，而是一种宣告。`);
      era.printButton(`「我想多了解一点有关${maru.name}的事情」`, 1);
      await era.input();
      await era.printAndWait(
        `你看到${maru.name}的瞳孔突然放大，快速的眨了眨眼睛，想要逃离的你目光但又迅速恢复。`,
      );
      await maru.say_and_wait(`不以同样的态度回复的话可不行呢。`);
      await maru.say_and_wait(` ${callname} 想知道什么？`);
      await you.say_and_wait(`我想知道的是，${maru.name}最近为什么这么失落。`);
      await you.say_and_wait(
        `是感受不到快乐了吗？还是因为感受到了奔跑的赛${maru.uma_sex_title}们心中的自暴自弃？`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.name}陷入了迟疑之中，${maru.sex} 在思考究竟要不要把自己的真实想法告诉我。`,
      );
      await maru.say_and_wait(`……抱歉。`);
      await era.printAndWait(`${maru.name}的声音似乎显得很失落。`);
      era.printButton(`「不，我这边才是。」`, 1);
      await era.input();
      await you.say_and_wait(`实际上我才是应该道歉的一方，是我太急于求成了。`);
      await you.say_and_wait(`我会一直等你，等你主动向我倾诉的那一天的到来。`);
      await you.say_and_wait(
        `所以，请挺起胸膛来，你是我见过的最美丽的${maru.uma_sex_title}了。`,
      );
      await maru.say_and_wait(`3q，${callname}。`);
      await era.printAndWait(`${maru.name}恢复了之间的状态。`);
      await maru.say_and_wait(`不愧是可靠的成年人呢。`);
      await maru.say_and_wait(
        `现在的感觉就像，一直以来照顾的${you.sex_code !== 1 ? '妹妹' : '弟弟'}突然提出要照顾自己了。`,
      );
      await maru.say_and_wait(
        `作为 ${maru.elder_sibling_sex_title} 我心情可真是复杂呢——`,
      );
      await era.printAndWait(
        `${maru.name}像是看着一起长大的${you.sex_code !== 1 ? '妹妹' : '弟弟'}一样的慈爱眼神。`,
      );
      await maru.say_and_wait(`那么，我们约好了——`);
      await maru.say_and_wait(
        `无论发生了什么，都要和 ${maru.elder_sibling_sex_title} 我商量哦？`,
      );
      era.printButton(`「无论发生了什么，我都会和${maru.name}说清楚的。」`, 1);
      await era.input();
      await you.say_and_wait(
        `毕竟作为可靠的大 ${maru.elder_sibling_sex_title}，不管遇到了什么问题，都会轻松解决掉吧。`,
      );
      await maru.say_and_wait(`那就这么说定了。`);
      await you.say_and_wait(`我这边也是`);
      await maru.say_and_wait(`说起来今天天气不错，与小塔一起去兜风吧——`);
      await you.say_and_wait(`好啊。`);
      await you.say_and_wait(`是不是忘了什么。`, true);
      await era.printAndWait(
        `谈笑之间你们走向了小塔。随后，惨叫声响彻了特雷森。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_16: (() => {
    const title = (maru) => `晚上好，是 ${maru.name} 哦`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, minoru, you, callname) => {
      await era.printAndWait(`公寓。`);
      await you.say_and_wait(`接下来的训练计划就暂时写到这里吧`, true);
      await era.printAndWait(
        `在柔和的灯光照耀下，${you.name} 坐在电脑前处理着假日堆积下来的事务，不同于白天特雷森处处朝气蓬勃的热情呐喊，夜晚的训练员宿舍显得格外静谧。`,
      );
      await you.say_and_wait(`已经快到12点了吗`, true);
      await era.printAndWait(
        `将最后一份文件处理完毕发给理事长后，${you.name}揉了揉疲惫的双眼，全身趴在了沙发之上。`,
      );
      await you.say_and_wait(`洗个澡然后好好睡一觉吧`, true);
      await era.printAndWait(
        `紧紧地闭上双眼，似乎要将一天的疲惫都这么消化掉。然后深深吸进一大口气，将一天的烦躁从身体之中排除。`,
      );
      await era.printAndWait(`嗡嗡嗡`);
      await you.say_and_wait(`这种时候骚扰电话也不会打过来吧`, true);
      await era.printAndWait(
        `虽然身体一百个不想动，但作为社畜的本能还是使你打开了手机。`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `虽然疑惑为什么负责的${maru.uma_sex_title}会在深夜打过来电话，但你还是毫不犹豫地接通了。`,
      );
      await maru.say_and_wait(`嗨～ ${callname}，今晚的天气可真不错呢～`);
      await you.say_and_wait(
        `我这边的话除了看惯了的风景以外也没有什么特别的地方`,
      );
      await you.say_and_wait(`以及，`);
      await era.printAndWait(
        `你深深地吸了一大口气，避免尚未排除的烦躁不小心释放出来。`,
      );
      era.printButton(`「熬夜的话皮肤会变皱的，赶快回去睡觉！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `真是受不鸟了><！${callname} 尽说些亚历山大的话，再这样下去只有3166一途可走了。`,
      );
      await era.printAndWait(
        `看着手机上的文字表情，你花了整整十秒才从回忆中想起它的用法。`,
      );
      await you.say_and_wait(`说起来，${maru.name}怎么突然打电话过来了？`);
      await maru.say_and_wait(
        `睡了一觉醒来后发现再也睡不着了，所以干脆来找 ${callname}。`,
      );
      await you.say_and_wait(`这样吗？`);
      await era.printAndWait(
        `好像提到了什么不得了的词语，不过你还是继续听了下去。`,
      );
      await maru.say_and_wait(
        `虽然一开始睡不着时有些生无可恋，不过看着外面的月亮，心情也像是抢到了沙发一样，特别是从特雷森经过时夜晚的微风所带来的丝丝凉意，更是让人心情雀跃呢⭐`,
      );
      era.printButton(`「该不会——」`, 1);
      await era.input();
      await era.printAndWait(
        `还没等你换好训练员制服时，暂时居住的房门被打开了。`,
      );
      await maru.say_and_wait(`晚上好，${callname} `);
      await you.say_and_wait(`诶？`);
      await era.printAndWait(`却从${maru.sex}的笑意之中看到了惊愕的自己`);
      await maru.say_and_wait(` ${callname}？`);
      era.drawLine();
      await era.printAndWait(
        `在经过了一顿说教之后，${maru.name}在沙发上乖乖地正坐着。`,
      );
      await maru.say_and_wait(`非常感谢♪`);
      await era.printAndWait(
        `随后，你和心血来潮的客人一同收拾着堆放在桌子上的杂物。将速溶红茶递给了 ${maru.sex}。`,
      );
      await era.printAndWait(
        `看着小口小口吮吸着红茶的${maru.name}。你忍不住叹了口气。`,
      );
      await era.printAndWait(
        `这么晚让${maru.sex}一个人回去也有些危险，但也不能随便收留学生留宿。`,
      );
      await you.say_and_wait(`怎么办才好？`, true);
      await maru.say_and_wait(`那个，${callname}？`);
      await era.printAndWait(`${maru.name}在等待着答复，这里的话还是\n`);
      era.printButton(`让${maru.sex}今晚留下来过夜`, 1);
      era.printButton(`「坚持送${maru.sex}回去」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`${callname}脸色看起来不太好哦。`);
        await you.say_and_wait(
          `刚刚在苦恼下一周的训练方案有什么需要改进的地方，所以脸色不太好。`,
          true,
        );
        await maru.say_and_wait(`${callname} 辛苦了。`);
        await era.printAndWait(
          `被${maru.name}习惯性的抚摸着脑袋，虽然你一开始非常抗拒，但时间长了剩下的只有哼哼两声作为训练员身份最后的矜持了。`,
        );
        await maru.say_and_wait(`抱歉了，以后不会再这么做了。`);
        await era.printAndWait(
          `相比于之前更像是礼节性的敷衍，这次的道歉里更多的还是对让你担忧的愧疚。`,
        );
        await era.printAndWait(
          `你看着${maru.sex}可怜的样子，心还是狠不下来，所以又叹了口气。`,
        );
        await you.say_and_wait(
          `这么晚回去的话我也不放心，今天晚上就在这里过夜吧。`,
        );
        await era.printAndWait(
          `什么狗仔队啊，第二天的头条绯闻啊，${
            minoru.name
          }冷漠的眼神和训斥还有一个月的工资啊，都无所谓了。`,
        );
        await you.say_and_wait(`你睡我的床吧，我在沙发上睡一晚。`);
        await maru.say_and_wait(`唔——这样有点可惜啊。`);
        await you.say_and_wait(`深夜的主犯要求真是多啊！`);
        await maru.say_and_wait(`非-常-抱-歉！`);
        await you.say_and_wait(`不要用这种迷惑的说法。`);
        await era.printAndWait(
          `像是会出现在galgame里才会出现的恋爱喜剧发生在了现实，明明是应该高兴的事情。`,
        );
        await era.printAndWait(
          `但你一想到说不定已经有全副武装的狗仔队拍到了深夜你接待${maru.name}进门，第二天头条发布，之后被${
            minoru.name
          }用冷漠的眼神看着的样子还有最重要的工资飞了。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`${you.name}度过了相当煎熬的一个晚上。`);
      } else {
        await you.say_and_wait(`……${maru.name}，我还是送你回去了吧。`);
        await maru.say_and_wait(`诶？真的吗？`);
        await era.printAndWait(
          `经过一番激烈的拉扯后，你最终说服了${maru.name}回到所呆的公寓之中。`,
        );
        await era.printAndWait(`殊不知这种行为却在${maru.sex}的意料之中。`);
        await maru.say_and_wait(
          `这么晚了，${
            callname
          }还是在我这边留宿吧，毕竟，这边的狗仔队意外的很多呢。`,
        );
        await maru.say_and_wait(`刚才的争执声应该把他们都吵醒了吧？`);
        await era.printAndWait(
          `这边的${callname}，你也不想第二天上娱乐杂志的头条吧？`,
        );
        await era.printAndWait(`你突然意识到了这才是真正的陷阱。`);
        await maru.say_and_wait(`那么，${callname}。晚安！`);
        await era.printAndWait(
          `你盖着${maru.name}备用的毛毯，在沙发上度过了一个晚上。`,
        );
        await era.printAndWait(
          `第二天，关于你和嗅到了大新闻气息的狗仔队斗智斗勇那就是另一场冒险了。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '皐月賞前・再一次';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`比赛开始前·发布会上`);
      await you.say_as_passer_by_and_wait(
        `记者A`,
        `非常荣幸能采访到${maru.actual_name_with_title}。`,
      );
      await you.say_as_passer_by_and_wait(
        `记者A`,
        `请问您这次的目标也是取得皋月赏的胜利吗？`,
      );
      await maru.say_and_wait(`是的，这是和负责的训练员商量之后的结果。`);
      await you.say_as_passer_by_and_wait(
        `记者B`,
        `不好意思打扰一下，听说上次春季锦标报名的赛${maru.uma_sex_title}数只满足了最低参与条件的5人。`,
      );
      await you.say_as_passer_by_and_wait(
        `记者B`,
        `是否可以认为赛${maru.uma_sex_title}们认为自己赢不了${maru.name}所以纷纷避战了呢？`,
      );
      await maru.say_and_wait(
        `关于春季锦标相关问题请咨询负责训练员，这里不做表态。`,
      );
      await you.say_as_passer_by_and_wait(
        `记者C`,
        `到我了，请问被称为超级跑车的您之后以无败三冠为目标参加德比吗？`,
      );
      await maru.say_and_wait(`这是目前暂时定下的目标。`);
      await you.say_as_passer_by_and_wait(`记者C`, `我明白了，非常感谢。`);
      await maru.say_and_wait(`太客气了。`);
      era.drawLine({ content: '发布会结束后' });
      await era.printAndWait(`准备室\n`);
      await you.say_and_wait(`${maru.name}准备好了吗，接下来轮到你出场了。`);
      await maru.say_and_wait(`已经准备好了哦。`);
      await you.say_and_wait(`就和往常一样，按照你的想法自由的奔跑吧。`);
      await maru.say_and_wait(
        `哼哼，这次${callname}一定会被我的奔跑所俘获的。`,
      );
      await maru.say_and_wait(`真是期待着那一刻的到来呢——`);
      await maru.say_and_wait(`啊，差不多该出发了。那么待会见！`);
      await you.say_and_wait(`一切顺利。`, true);
      await maru.say_and_wait(`嗯。`);
      await era.printAndWait(`${maru.name}走向了赛场。`);
      await you.say_and_wait(`……${maru.name}，我会一直注视着你的。`, true);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '皐月賞后・如火焰一样美丽的奔跑';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`胜者舞台\n`);
      await era.printAndWait(`工作人员们为了确保胜者舞台装置正常而忙碌着。`);
      await you.say_as_passer_by_and_wait(
        `工作人员A`,
        `胜者舞台马上就要开始了，最后一次调试！`,
      );
      await you.say_as_passer_by_and_wait(
        `工作人员B`,
        `最后再检查一遍气柱机位置！果然，我就知道是 ${maru.name} 会获胜。`,
      );
      await you.say_as_passer_by_and_wait(
        `工作人员B`,
        `之前出道战的时候我就开始关注 ${maru.sex} 了。`,
      );
      await you.say_as_passer_by_and_wait(
        `工作人员C`,
        `灯光向左再打一点！啊，我是在希望杯开始关注的。`,
      );
      await you.say_as_passer_by_and_wait(
        `工作人员C`,
        `虽然之前就听说了有个跑得非常厉害的 ${maru.uma_sex_title}，但不是实地观看还真无法了解。`,
      );
      await you.say_as_passer_by_and_wait(
        `工作人员B`,
        `准备就绪！接下来的东京优骏胜者肯定还会是 ${maru.sex} ！`,
      );
      await you.say_as_passer_by_and_wait(
        `工作人员A`,
        `全体都有！各就位！预备！`,
      );
      await era.printAndWait(`如预料一般，${maru.name} 取得了胜利。`);
      await era.printAndWait(
        `不论是最后冲线的刹那，还是在胜者舞台中央的表演，俘获了众多粉丝的 ${maru.name}。`,
      );
      await era.printAndWait(`带着满足的笑容回到了休息室。`);
      era.printButton(`「辛苦了，演出很精彩。」`, 1);
      await era.input();
      await era.printAndWait(
        `轻轻脱下 ${maru.name} 的长靴，从脚踝开始一直到大腿，小心翼翼控制着按摩的力度。`,
      );
      await you.say_and_wait(
        `该说不愧是王道路线的第一场吗？不管是新闻发布会，还是之后的比赛与胜者舞台，都不是之前参加的同为G1的朝日杯可比的。`,
      );
      await you.say_and_wait(`之后还会遇到比这更加盛大的赛事，${maru.name} ——`);
      await era.printAndWait(
        `在按摩了大约五分钟左右，十指轻轻按压大腿内侧，一遍观察着 ${maru.name} 的反应一遍继续着对话。`,
      );
      await maru.say_and_wait(
        `嗯～谢谢 ${callname} 这么关心了，与其说累到几乎动不了，${maru.elder_sibling_sex_title} 我可是从精神到身体都满足了呢。`,
      );
      await era.printAndWait(
        `一边露出了笑容的 ${maru.name} 不时的传出了小小的喘息声。`,
      );
      await maru.say_and_wait(
        `像这样让更多的 ${maru.uma_sex_title} 们看到我的背影，${maru.couple_title}一定也会憧憬着在赛场上奔跑的样子吧。`,
      );
      await maru.say_and_wait(
        `然后，在努力训练的过程之中，慢慢发现奔跑的快乐。`,
      );
      await maru.say_and_wait(
        `这样的话，我就能看着后辈们追赶着我的背影努力的样子而感到开心了。`,
      );
      await era.printAndWait(
        ` ${maru.name} 那因为微弱的痛苦与稍稍的酥麻感而显得额外明亮的眼睛直直的盯着你看。`,
      );
      await you.say_and_wait(
        `嗯，为了一个月后的东京优骏，接下来这段时间要提高耐力才行了。`,
      );
      await maru.say_and_wait(`嗯——接下来去哪里庆祝才好呢？`);
      await era.printAndWait(
        `按摩结束之后，似乎意犹未尽的 ${maru.name} 在座位上发出了满足的感叹声。`,
      );
      await maru.say_and_wait(`高档餐厅？还是亲民的赛利亚？还是说`);
      era.printButton(`「干脆在训练室庆祝吧！」`, 1);
      await era.input();
      await you.say_and_wait(`多点一份披萨和饮料，然后邀请后辈们一起庆祝。`);
      await maru.say_and_wait(
        `就按 ${callname} 说的那样，开始期待晚上的派对了呢♪`,
      );
      await era.printAndWait(
        `穿起靴子，重新适应着走路感觉的${maru.teen_sex_title}期待着之后的庆典。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = '皐月賞后・换挡起步';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`等候室\n`);
      await maru.say_and_wait(`嗨！ ${callname} ！`);
      await era.printAndWait(`从胜者舞台下来的 ${maru.name} 回到了等候室`);
      await you.say_and_wait(`感觉怎么样？`);
      await era.printAndWait(
        `轻轻脱下 ${maru.name} 的靴子，从脚踝开始一直到大腿，小心翼翼控制着按摩的力度。`,
      );
      await maru.say_and_wait(
        `超级稀饭这种感觉！不愧是经典三冠的皋月赏，为争夺三冠聚集而来的 ${maru.uma_sex_title} 们强者如云呢。`,
      );
      await maru.say_and_wait(
        `还能在之后德比体验更大规模的赛事，${maru.elder_sibling_sex_title} 我有点生无可恋的感觉呢。`,
      );
      await era.printAndWait(
        `在按摩了大约五分钟左右，十指轻轻按压大腿内侧，一遍观察着 ${maru.name} 的反应一遍继续着对话。`,
      );
      await you.say_and_wait(`就按这样的气势挑战德比吧！`);
      await maru.say_and_wait(`没错！就是这种感觉！`);
      await era.printAndWait(
        `按摩结束后，${you.name} 轻轻给 ${maru.name} 套上靴子，后者站了起来气势高涨的决定了接下来的目标。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_17: (() => {
    const title = '憧憬';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      const ret = [];
      await era.printAndWait(`训练室`);
      era.println();
      await era.printAndWait(
        `厚厚的黑眼圈伴随着挥之不去的咖啡，${you.name}将手中的文件看了一遍又一遍。`,
      );
      await you.say_and_wait(`以现在的姿态去挑战德比的话`);
      await era.printAndWait(`接下来重点加强哪方面的属性？`);
      era.printButton(`「耐力与根性！」`, 1);
      era.printButton(`「速度与力量！」`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await you.say_and_wait(`夏季合宿正好把之前一直疏忽的耐力拉起来。`);
      } else {
        await you.say_and_wait(`果然还是速度与力量更好一点吧。`);
      }
      await you.say_and_wait(`啊嚏！`);
      await era.printAndWait(
        `集中的注意力被喷嚏所打断，${you.name}抽了张放在右手边的餐巾纸，然后扔进了满满的垃圾桶中。`,
      );
      await you.say_and_wait(`等处理完这份文件。`, true);
      await era.printAndWait(
        `身体好冷，像是全身埋进了冰块之中，视野也变得模糊了起来。`,
      );
      await era.printAndWait(
        `原以为自己年轻力壮稍微熬了一个星期的夜没关系，却没想到身体先撑不住垮掉了。`,
      );
      await you.say_and_wait(`这该死的身体，感冒药，感冒药在哪里？`);
      await era.printAndWait(
        `打开抽屉，抽出写着退烧药的纸盒子，却发现里面的药早就吃光了。`,
      );
      await you.say_and_wait(`……这样吗？至少趁脑子还能运转的时候。`);
      await era.printAndWait(
        `已经没有什么比这更加糟糕的情况了，心情却变得轻松了起来。`,
      );
      await era.printAndWait(
        `从饮水机倒了一杯温水后，一饮而尽的${you.name}重新坐回了座位。`,
      );
      await you.say_and_wait(`得加快速度了。`);
      await era.printAndWait(
        `牙齿因感受到寒冷而不自觉的上下打架，发出了一连串的「哒哒哒」声，喉咙也变得吞咽困难。`,
      );
      await era.printAndWait(
        `只是为了满足「快点完成这份工作」，「还不能在这里倒下」的这份心情，${you.name}咬牙坚持着。`,
      );
      await you.say_and_wait(`结束了！`);
      await era.printAndWait(
        `敲下最后一个字母后，因为完成带来的满足而放松的精神终于坚持不住。视野开始天旋地转了，大概，自己已经到极限了吧。`,
      );
      await era.printAndWait(`于是${you.name}，满足的倒下了。`);
      await maru.say_and_wait(`${callname}我来打酱油了♪${callname}？`);
      await era.printAndWait(
        `在意识消失之前，${you.name}听到了${maru.name}的声音。`,
      );
      era.drawLine();
      await era.printAndWait(
        `就好好看着我吧，作为在赛${maru.uma_sex_title}生涯上的前辈。`,
      );
      await era.printAndWait(`请好好注视着我吧，就这样被我永远的甩在后面。`);
      await era.printAndWait(
        `请好好祝福着我吧，现在，轮到${you.name}为我喝彩了。`,
      );
      await you.say_and_wait(`这样啊。`);
      await era.printAndWait(
        `大概是某个不知名的${maru.uma_sex_title}心底的声音不小心漏了出来吧。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(`似乎有人在呼唤着${you.name}。`);
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(`被越来越大的声音呼唤着。`);
      await era.printAndWait(`该醒了。安慰着不愿意醒来的自己。`);
      await era.printAndWait(`于是${you.name}不情不愿的睁开了眼睛。`);
      await maru.say_and_wait(`终于醒了吗？${callname}。`);
      await you.say_and_wait(`这里是？`);
      await era.printAndWait(`环绕四周，似乎是${you.name}生活的地方。`);
      await maru.say_and_wait(`稍微等一下。`);
      await era.printAndWait(`${maru.name}走进了厨房，然后端出了一碗粥。`);
      await maru.say_and_wait(
        `已经煮好一段时间了，如果还是有点烫的话，要和我说哦。`,
      );
      await era.printAndWait(
        `温热的流体送进了${you.name}的口中，昏昏沉沉的大脑只能凭借本能认定这是对自己有利的东西。`,
      );
      era.printButton(`「谢谢。」`, 1);
      era.printButton(`「不用了，我自己来。」`, 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await era.printAndWait(
          `眼前的身影似乎披上了一层模糊的雾，${you.name}有些看不清${maru.sex}的动作。`,
        );
        await era.printAndWait(`既然这样，还是干脆闭上眼睛吧。`);
        await era.printAndWait(
          `打定主意后，${you.name}闭上眼睛，配合着对方的动作。`,
        );
        await era.printAndWait(
          `每一次调羹与瓷碗之间的碰撞，都会有一股温热的流体进入口腔之中。`,
        );
        await era.printAndWait(
          `温暖的感触，以及熟练且精准的动作。而最重要的则是，那怀念的感觉。不知不觉间，似乎与母亲的面貌慢慢重合在了一起。`,
        );
      } else {
        await you.say_and_wait(`不用了，我自己来。`);
        await era.printAndWait(
          `刚想要就这么坐起来，却被更加强而有力的双手制止住了。`,
        );
        await maru.say_and_wait(
          `现在不是逞强的时候，病人应该乖乖躺在床上然后好好休息。`,
        );
        await you.say_and_wait(`${maru.name}……`);
        await era.printAndWait(
          `终于耗尽了最后一丝力气，不得不躺在床上。努力将送入口中的食物吞咽下去。`,
        );
      }
      await you.say_and_wait(`……好温暖。`);
      await era.printAndWait(
        `怀念的气息让${you.name}闭上了眼睛，陷入了沉沉的睡眠之中。`,
      );
      await era.printAndWait(`因为恐惧而不断奔波的身体，终于得到了安心。`);
      era.drawLine();
      await you.say_and_wait(`……什么时候？`);
      await era.printAndWait(
        `睁开眼睛，正打算爬起来的时候，看见了在椅子上休息的${maru.teen_sex_title}趴在床上睡着了。`,
      );
      await era.printAndWait(
        `尽力以不会产生颤抖的动作掀开窗帘一角，一丝光芒照在了${you.name}的脸上，天亮了。`,
      );
      await maru.say_and_wait(`唔嗯。原来现在的潮流是这样子吗？`);
      await era.printAndWait(
        `所幸，直立起身体的微微颤动仅仅只是让${
          maru.sex
        }无意识的换了一个姿势，均匀的呼吸声没有被打断。`,
      );
      await you.say_and_wait(`就这样一直等到${maru.sex}醒来吧。`, true);
      await era.printAndWait(`这么想着，${you.name}闭上了眼等待着天亮的时候。`);

      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = (maru) => `日本德比前・${maru.name}`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `应${maru.name}希望能在更大的舞台上体验到不一样的感受，于是你们决定参加日本德比。`,
      );
      await era.printAndWait(`训练室内`);
      await maru.say_and_wait(
        `不愧是德比比赛，前来参加的${maru.uma_sex_title}们水平都很高呢`,
      );
      await era.printAndWait(
        `作为经典三冠之中的第二冠，东京优骏(日本德比)素有最幸运的${maru.uma_sex_title}才能获胜的俗称。`,
      );
      await era.printAndWait(
        `即使是实力强大的${maru.uma_sex_title}，在这一关翻车的也比比皆是，但对${
          maru.name
        }来说`,
      );
      await era.printAndWait(`${maru.name}与平常的表现没有什么区别。`);
      await era.printAndWait(`也许这就是纯粹为了享受比赛而来的吧。`);
      await maru.say_and_wait(`${callname},接下来要好好地看着我的身影哦。`);
      await era.printAndWait(`${maru.name}做好准备后，走向了地下通道。`);
      await you.say_and_wait(`我也差不多该去观众席了。`);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '日本德比后・抉择开始';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `没有任何意外，${maru.name} 漂亮的取得了德比的优胜。`,
      );
      await era.printAndWait(
        `当 ${maru.sex} 冲线的那一刻，如雷鸣般的喝彩声从观众席上传来。`,
      );
      await era.printAndWait(`休息室\n`);
      await maru.say_and_wait(`呼～不愧是经典三冠之中最受瞩目的赛事呢。`);
      await maru.say_and_wait(
        `参加德比的赛 ${maru.uma_sex_title} 们个个都是赛 ${maru.uma_sex_title} 的精英呢。`,
      );
      era.printButton(`「虽然跑道是在德比最外侧，但是在这种不利条件下。」`, 1);
      await era.input();
      era.printButton(`「还能漂亮赢下德比的 ${maru.name} 才是最厉害的。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `其实也没那么厉害啦⭐只是和往常一样，不对，也就比之前稍稍跑得更快了一点的程度呢。`,
      );
      await maru.say_and_wait(`能比德比还要盛大的赛事，恐怕也剩下——`);
      era.printButton(`「要不要去凯旋门？」`, 1);
      era.printButton(`「果然还是有马纪念吗？」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`诶？凯旋门吗？`);
        await maru.say_and_wait(
          `跪了！果然和${callname}在一起每次都能感受到惊喜呢～`,
        );
        await maru.say_and_wait(
          `如果是凯旋门的话，说不定能在那里遇到世界级的赛 ${maru.uma_sex_title} 呢。`,
        );
        await maru.say_and_wait(`嗯——怎么办才好呢？`);
        era.printButton(`怎么样才好呢？`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`对吧？果然还是有马纪念。`);
        era.printButton(
          `「我也期待着 ${maru.name} 能在有马纪念上玩得开心。」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}就好好看着吧。`);
      }
      await maru.say_and_wait(`啊，差不多该去胜者舞台了。`);
      await maru.say_and_wait(`跟 ${callname} 在一起，时间总是过得很快呢。`);
      await you.say_and_wait(
        `在舞台之上也要把这份感情让一直支持着 ${maru.name} 的粉丝们感受到哦！`,
      );
      await maru.say_and_wait(`嗯。要让一直支持着的粉丝们好好看着我才行。`);
      await maru.say_and_wait(`差不多该出发了。`);
      await era.printAndWait(` ${maru.name} 离开了休息室。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(`把休息室门关上后，房间里只剩下自己一个人了。`);
      await you.say_and_wait(`差不多该下定决心了吧。`, true);
      await era.printAndWait(`正准备出发的时候。`);
      await era.printAndWait(`咚咚咚`);
      await era.printAndWait(`真是的，又想到什么新奇的潮流了吗？`);
      await era.printAndWait(`一边苦笑着一边打开了休息室的门。`);
      await you.say_and_wait(`丸善——`);
      await era.printAndWait(`门口留下了一张纸条。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `丸善前辈，我有些疑问想要问你，如果可以的话，明天晚上可以到空教室里见面吗？`,
      );
      await era.printAndWait(`你决定`);
      era.printButton(`「告诉 ${maru.name}」`, 1); //NE
      era.printButton(`「代替 ${maru.name} 前去」`, 2);
      era.print('【警告，请谨慎选择，否则一切将不可挽回！】', {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      });
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`有点头疼啊，是给 ${maru.name} 的。`);
        await you.say_and_wait(
          `虽然也想自己去看看，不过还是交给 ${maru.sex} 比较好吧？`,
        );
        await era.printAndWait(
          `等到 ${maru.name} 回来后，你将这张纸条上的事情告诉了 ${maru.sex}。`,
        );
      } else {
        await era.printAndWait(
          `环顾四周无人后，你将纸条捡起，然后放进了口袋之中。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`为什么要捡起这张纸条，连自己也不清楚。不过——`);
        await era.printAndWait(`总觉得，如果就这么错过的话。`);
        await era.printAndWait(`我可能会失去什么。`);
        await you.say_and_wait(`……抱歉，${maru.name}。`);
        await you.say_and_wait(`无论如何我都要过去一趟。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  toky_yus_lose: (() => {
    const title = '日本德比后・抉择开始';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `没有任何意外，${maru.name} 漂亮的取得了德比的优胜。`,
      );
      await era.printAndWait(
        `当 ${maru.sex} 冲线的那一刻，如雷鸣般的喝彩声从观众席上传来。`,
      );
      await era.printAndWait(`休息室\n`);
      await maru.say_and_wait(`呼～不愧是经典三冠之中最受瞩目的赛事呢。`);
      await maru.say_and_wait(
        `参加德比的赛 ${maru.uma_sex_title} 们个个都是赛 ${maru.uma_sex_title} 的精英呢。`,
      );
      await maru.say_and_wait(`能比德比还要盛大的赛事，恐怕也剩下`);
      era.printButton(`「要不要去凯旋门？」`, 1);
      era.printButton(`「果然还是有马纪念吧！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`诶？凯旋门吗？`);
        await maru.say_and_wait(
          `跪了！果然和${callname}在一起每次都能感受到惊喜呢～`,
        );
        await maru.say_and_wait(
          `如果是凯旋门的话，说不定能在那里遇到世界级的赛 ${maru.uma_sex_title} 呢。`,
        );
        await maru.say_and_wait(`嗯——怎么办才好呢？`);
        era.printButton(`怎么样才好呢？`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`对吧？果然还是有马纪念。`);
        era.printButton(
          `「我也期待着 ${maru.name} 能在有马纪念上玩得开心。」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}就好好看着吧。`);
      }
      await maru.say_and_wait(`啊，差不多该去胜者舞台了。`);
      await maru.say_and_wait(`跟 ${callname} 在一起，时间总是过得很快呢。`);
      await you.say_and_wait(
        `在舞台之上也要把这份感情让一直支持着 ${maru.name} 的粉丝们感受到哦！`,
      );
      await maru.say_and_wait(`嗯。要让一直支持着的粉丝们好好看着我才行。`);
      await maru.say_and_wait(`差不多该出发了。`);
      await era.printAndWait(` ${maru.name} 离开了休息室。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(`把休息室门关上后，房间里只剩下自己一个人了。`);
      await you.say_and_wait(`差不多该下定决心了吧。`, true);
      await era.printAndWait(`正准备出发的时候。`);
      await era.printAndWait(`咚咚咚`);
      await era.printAndWait(`真是的，又想到什么新奇的潮流了吗？`);
      await era.printAndWait(`一边苦笑着一边打开了休息室的门。`);
      await you.say_and_wait(`丸善——`);
      await era.printAndWait(`门口留下了一张纸条。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `丸善前辈，我有些疑问想要问你，如果可以的话，二周后可以到空教室里见面吗？`,
      );
      await era.printAndWait(`你决定`);
      era.printButton(`「告诉 ${maru.name}」`, 1); //NE
      era.printButton(`「代替 ${maru.name} 前去」`, 2);
      era.print('【警告，请谨慎选择，否则一切将不可挽回！】', {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      });
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`有点头疼啊，是给 ${maru.name} 的。`);
        await you.say_and_wait(
          `虽然也想自己去看看，不过还是交给 ${maru.sex} 比较好吧？`,
        );
        await era.printAndWait(
          `等到 ${maru.name} 回来后，你将这张纸条上的事情告诉了 ${maru.sex}。`,
        );
      } else {
        await era.printAndWait(
          `环顾四周无人后，你将纸条捡起，然后放进了口袋之中。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`为什么要捡起这张纸条，连自己也不清楚。不过——`);
        await era.printAndWait(`总觉得，如果就这么错过的话。`);
        await era.printAndWait(`我可能会失去什么。`);
        await you.say_and_wait(`……抱歉，${maru.name}。`);
        await you.say_and_wait(`无论如何我都要过去一趟。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_1: (() => {
    const title = (maru) => `${maru.teen_sex_title}的忧郁`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`空教室`);
      await era.printAndWait(
        `瞒着${maru.name}，你前往了那张小纸条上约定的地方。`,
      );
      await era.printAndWait(`比约定的时间稍稍晚了5分钟，你推开了教室的大门。`);
      await era.printAndWait(`虽说是多年未用的空教室。`);
      await era.printAndWait(`空气中却没有想象中的沉闷感。`);
      await era.printAndWait(`也许是刚下完雨的关系。`);
      await era.printAndWait(`薄薄的霭气依然流连于远处的训练场。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `终于来了吗？丸善前——`,
      );
      await era.printAndWait(`映入你眼帘的是，曾经在观众席向你道谢的身影。`);
      await you.say_and_wait(`抱歉，${maru.name}有事来不了了。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `……怎么会，一定是`,
      );
      await era.printAndWait(`${maru.uma_sex_title}直直的瞪着你——`);
      await era.printAndWait(
        `奇怪的是，比起愤怒的样子，似乎更像是在寻求着什么一样。`,
      );
      await you.say_and_wait(`抱歉了。`, true);
      await era.printAndWait(
        `说到底从始至终都是我为了满足个人的欲望而犯下的过错。`,
      );
      await you.say_and_wait(
        `冷静一点，我也是刚刚才知道的，${maru.name}不久之前捡到了一张纸条——\n`,
      );
      await maru.say_and_wait(
        `无论发生了什么，都要和 ${maru.elder_sibling_sex_title} 我商量哦？`,
      );
      await era.printAndWait(
        `大脑很自然地回想起了和${maru.name}约定过的誓言。`,
      );
      await era.printAndWait(`就这样被自我厌恶所折磨。`);
      await you.say_and_wait(
        `然后有些纠结的跟我说，还有一名${maru.uma_sex_title}跟 ${maru.sex} 约定了要在天台之上见面。`,
      );
      await you.say_and_wait(`所以,抱歉了。`);
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `不知道对方接下来会做什么，虽然想要逃跑，但是，如果让 ${maru.sex} 就这么回去告诉${maru.name}的话——`,
      );
      await era.printAndWait(`就这样被好奇心诱惑进了黑暗的深处。`);
      await you.say_and_wait(`只能硬着头皮继续下去了。`);
      await era.printAndWait(
        `虽然一开始汹涌的情感几乎将自己淹没，但真的到了最高潮时，内心反而变得一片平静。`,
      );
      await you.say_and_wait(
        `抱歉，是我自己主动要求的。作为${maru.name}的训练员，我必须要解决担当的烦恼。`,
      );
      await you.say_and_wait(`虽然不如${maru.name}，不过作为训练员——。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `请问您对于${maru.name}是怎么看的？`,
      );
      await you.say_and_wait(`诶？`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `请问您对${maru.name}的印象是？`,
      );
      await era.printAndWait(`胸中悄然涌出一份感觉。`);
      await era.printAndWait(`焦躁苦闷的悔意，袭上心头。`);
      await you.say_and_wait(`我认为`);
      era.printButton(`「从可靠，值得信赖的角度说」`, 1);
      era.printButton(`「从温柔，值得托付的角度说」`, 2);
      era.printButton(`「从前辈，后辈之间的关系说」`, 3);
      era.print('【警告，请谨慎选择，否则一切将不可挽回！】', {
        color: buff_colors[3],
        offset: 1,
        width: 23,
      });
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(`我认为丸善前辈是一个可靠的——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `抱歉，我想要的不是这个答案。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `作为上次帮助过我的回报，我不会和丸善前辈说的，这位训练员${you.adult_sex_title}。`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}微微躬身之后，离开了空教室，这里又只剩下了你一个人。`,
          );
          break;
        case 2:
          await you.say_and_wait(`我认为丸善前辈是很温柔——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `抱歉，我想要的不是这个答案。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `作为上次帮助过我的回报，我不会和丸善前辈说的，这位训练员${you.adult_sex_title}。`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}微微躬身之后，离开了空教室，这里又只剩下了你一个人。`,
          );
          break;
        case 3:
          await era.printAndWait(
            `可靠也好，温柔也好，恐怕都只是${maru.name}在我面前所展现的表象。`,
          );
          await era.printAndWait(
            `如果从${maru.uma_sex_title}的角度来考虑，不，是${
              maru.sex
            }所期望的名为${maru.name}的偶像。`,
          );
          await you.say_and_wait(
            `我认为${maru.name}是一个对于后辈很关照、会尽可能给予后辈帮助的……偶像。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `为什么，是偶像？`,
          );
          await you.say_and_wait(
            `${maru.name}渴望着能够超过${
              maru.sex
            }的背影，${maru.sex}希望后辈们在看到${
              maru.sex
            }的奔跑之后，能够迸发出青春的活力。`,
          );
          await you.say_and_wait(
            `企及${maru.sex}的背影，超越${maru.sex}，在赛场上击溃${
              maru.sex
            }，还有，最后的——能够自由自在的享受着清新的空气。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `……是啊，丸善前辈就是这样的人。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `既然是丸善前辈的训练员，而且，之前在赛马场上也帮助过我，所以，我觉得`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `说不定，也许，跟你说会比和丸善前辈说出来更好也说不定？`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}站在了靠窗的为止，右手扶着窗栏，眼神在草场与中庭之间游移，似乎是在追逐着一份答案，又像是在逃避着什么一样。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `我，打算放弃成为赛${maru.uma_sex_title}了。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `很久以前，我就知道自己不适合当赛${maru.uma_sex_title}。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `但是，被${maru.name}鼓励了，就因为那份鼓励，我一直坚持到了现在。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `但是，赛${maru.uma_sex_title}不是努力就能取得成功的，童话般的地方。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `别说G1了，就连G2对我来说都是一道不可逾越的天堑，不管怎么努力，对手总有比你更加优越的，更加有天赋的。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `看着在胜者舞台中央享受着鲜花与赞美的第一，作为败者的我们，如果不是以入着的成绩，那么败者的努力就毫无意义。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `不管是白天还是下雨，明明起得比谁都早，明明努力到几乎失去知觉的程度，但我还是失败了。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `有的时候，稍微，只是稍微，会对曾经鼓励过我的丸善前辈有一种阴暗的感情，想要拽着${
              maru.sex
            }的领子，就这样把${maru.sex}按在地上，大声质问${maru.sex}。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `如果当初的话，你没有鼓励我，说不定我也不会坚持到现在，伤痕累累了。`,
          );
          await era.printAndWait(
            `似乎是要将压抑已久的郁闷彻底释放出来，${maru.uma_sex_title}带着异常的亢奋情感将心中的苦闷彻底释放了出来。`,
          );
          await era.printAndWait(
            `夜色如墨，几乎看不清${maru.sex}的表情，但白月如镜，却将${
              maru.sex
            }的泪珠如珍珠滴在玉盘之上，发出了滴滴答答的声音。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `抱歉，我太激动了，谢谢你听我发泄，那么再见了，训练员。`,
          );
          await era.printAndWait(
            `说罢，再也控制不住感情的${maru.uma_sex_title}离开了空教室。`,
          );
          await you.say_and_wait(`你也是被。`);
          await era.printAndWait(`${you.name} 沉思良久。`);
      }
      await maru.used_to_say_and_wait(
        `如果 ${callname} 遇到了什么烦恼的话，要和${maru.elder_sibling_sex_title}我说清楚哦？`,
      );
      await era.printAndWait(
        `像是遥远的地方传来，又像是回荡在这空虚的教室之中。`,
      );
      await era.printAndWait(`让 ${you.name} 无法挥去胸中这股不安。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_2: (() => {
    const title = (maru) => `${maru.teen_sex_title}的忧郁`;
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.uma_sex_title}作为普通的赛${maru.uma_sex_title}引退。`,
      );
      await era.printAndWait(
        `或许是因为终于从话语之中解脱，又或者是为了感谢到这一步依然支持自己的粉丝。${maru.sex}换上了打算G1胜利时站在胜者舞台中央所穿的自己设计的决胜服——`,
      );
      await era.printAndWait(
        `尽管这是当年心高气傲的${maru.sex}打算在G1胜利时穿着自己设计的决胜服飒爽登场，`,
      );
      await era.printAndWait(
        `后来妥协到了G2胜利，之后又含着泪水改成了入着即可。或许是因为曾经有过这样的经验，此刻的${maru.sex}看起来就像彗星一样美丽`,
      );
      await era.printAndWait(`作为知情者之一的你自然也参加了这场告别演出。`);
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `谢谢大家！`,
      );
      await era.printAndWait(
        `含着泪水的${maru.uma_sex_title}带着笑容看向了参加了这场演出的粉丝们——`,
      );
      await era.printAndWait(
        `不知怎的，像是在偷偷看着什么，又好像在刻意无视什么一样。`,
      );
      await era.printAndWait(`这份令人不快的违和感。`);
      await era.printAndWait(
        `${you.name} 逆着${maru.uma_sex_title}刻意忽略的方向看过去——`,
      );
      await era.printAndWait(`那边的，是沉默的看着演出的${maru.name}。`);
      await era.printAndWait(`应该在这种时候和${maru.sex}说话吗？`);
      era.printButton(`再怎么说还是要看气氛才行`, 1);
      era.printButton(`……不对`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`这个时候上去搭话过于看不懂气氛了。`);
        await era.printAndWait(`于是你悄悄离开了这个地方。`);
      } else {
        await you.say_and_wait(`抱歉，借过。`);
        await era.printAndWait(
          `不停的将周围的人群排开，${you.name} 走到了 ${maru.name} 附近。`,
        );
        await you.say_and_wait(`……${maru.name}。`);
        await era.printAndWait(
          `尽管一开始就打算向${maru.sex}提出的问题，现在到了关键时刻反而不知道该说些什么比较好了。`,
        );
        await maru.say_and_wait(`欸？`);
        await era.printAndWait(`${maru.name}带着不可置信的表情看着你。`);
        await maru.say_and_wait(
          `${you.actual_name}怎么会……抱歉，现在思绪有些混乱了。`,
        );
        await era.printAndWait(
          `尽管语气与之前相比更加轻快，但那份刺耳的刻意感却让${you.name}感到了难过。`,
        );
        era.printButton(`……${maru.name}。`, 1);
        era.printButton(`我有个问题想问`, 2);
        if ((await era.input()) === 1) {
          await maru.say_and_wait(`${callname}，可以借一下你的肩膀吗？`);
          await era.printAndWait(
            `${you.name} 无言的借过肩膀，${maru.name}紧紧抱住了你的手臂。`,
          );
          await era.printAndWait(
            `欢声笑语的背后是终于解脱的枷锁与随之而来的迷茫，而两人只是沉默的看着发生的一切。`,
          );
        } else {
          await you.say_and_wait(`请等一下，${maru.name}。`);
          await maru.say_and_wait(`抱歉，${callname}。`);
          await maru.say_and_wait(`这里的声音太大，我恐怕听不清你问的问题。`);
          await maru.say_and_wait(`有什么问题，可以回去再说吗？`);
          await era.printAndWait(
            `${maru.name} 恍若置身于风暴之中，对你的问题充耳不闻。`,
          );
          await era.printAndWait(
            `偶然间与匆匆离开的 ${maru.name} 对视，却看到了她失神的眼眸，（玩家名）一时之间不知该如何是好，只能目送对方离去。`,
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_radi_shi: (() => {
    const title = '日经广播赏前・为了何人的奔跑';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`训练室中`);
      await era.printAndWait(
        `德比之后${maru.name}将对后辈们的热情与爱全部转移到了你的身上`,
      );
      await era.printAndWait(`拜此所赐你的胃也更加痛苦不堪`);
      await you.say_and_wait(`好不容易才说服${maru.name}参加这场比赛`, true);
      await era.printAndWait(
        `在试探性的向${
          maru.name
        }提出参加七夕赏时，默默将手上的椰果饮料放在训练室后关门离开的${
          maru.sex
        }让你的良心开始拷问自己。`,
      );
      await era.printAndWait(
        `在多次打电话未果之后才收到了${maru.name}的同意。`,
      );
      await era.printAndWait(
        `看着眼前的${maru.name}对着全身镜调整着自己的状态。`,
      );
      await you.say_and_wait(
        `现在的${maru.sex}也在动摇着吧，如果再经受一次轻微的打击的话，${
          maru.sex
        }的理想恐怕就会动摇了`,
        true,
      );
      await you.say_and_wait(
        `我真的应该……不，一定，一定这是最好的办法了`,
        true,
      );
      await maru.say_and_wait(`真是令人怀念的衣服……不，没什么`);
      await era.printAndWait(`${maru.name}穿上了略显紧绷的决胜服。`);
      await maru.say_and_wait(`接下来一定要把胜利带给亲爱的${callname}♪`);
      await era.printAndWait(
        `任何想法都已经无所谓了，${maru.name}走向了赛场。`,
      );
    };
    f.title = title;
    return f;
  })(),
  radi_shi_win: (() => {
    const title = '日经广播赏后・迷茫之路';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('休息室');
      era.println();
      await you.say_and_wait(`辛苦了，${maru.name}。`);
      await era.printAndWait(
        `虽然中盘险些被马群所追上，但 ${maru.name} 有惊无险的取得了比赛的胜利。`,
      );
      await you.say_and_wait(
        `这可不像平时的那位 ${maru.elder_sibling_sex_title} 模样的 ${maru.sex}。`,
        true,
      );
      await you.say_and_wait(`恐怕现在还困在怀疑的阴影之中吧。`, true);
      await maru.say_and_wait(` ${callname} ！`);
      await era.printAndWait(`注意到你的瞬间，${maru.name} 露出了开朗的笑容。`);
      await era.printAndWait(`然而，那黯淡的神情却深深烙印在你的脑海之中。`);
      await maru.say_and_wait(`可以多夸夸我吗？`);
      era.printButton(
        `辛苦了，作为美丽又强大的 ${maru.elder_sibling_sex_title} 大人，这次表现得非常精彩！`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `哼哼～那是当然的事情呦，不如说失败的话才更奇怪吧？`,
      );
      era.printButton(`「大腿怎么样了？」`, 1);
      await era.input();
      await maru.say_and_wait(`比想象之中要好的多。`);
      era.printButton(`「大腿怎么样了？」`, 1);
      await era.input();
      await maru.say_and_wait(`……`);
      era.printButton(
        `作为你的训练员，我不会眼睁睁看着爱马因为不断积累的压力最后黯然退场。`,
        1,
      );
      await era.input();
      await you.say_and_wait(`就像之前的 ${maru.uma_sex_title} 一样。`);
      await you.say_and_wait(`原谅我，对不起。`);
      await era.printAndWait(
        `在胜者舞台结束后，${you.name} 决定放弃秋季的菊花赏，转而备战有马纪念。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`沙滩`);
      await era.printAndWait(`虽说是理事长的私人沙滩。`);
      await era.printAndWait(`空气却带着一股感到清凉感。`);
      await era.printAndWait(`也许是因为靠近大海的缘故吧，`);
      await era.printAndWait(
        `海风带着远远的一进一退的波浪声传来了潮湿的气息。`,
      );
      await era.printAndWait(
        `从小塔之上下来，${maru.name}带着满足的感觉微眯着双眼享受着度假的气息——`,
      );
      await you.say_and_wait(`话说，为什么不去乘校车啊。`);
      await era.printAndWait(
        `在${maru.name}强烈要求之下，${you.name}们在小塔的帮助下来到了理事长的私人沙滩。`,
      );
      await maru.say_and_wait(
        `难得来到这片风景优美的沙滩，就酱紫和后辈们一起做公交的话，有些可惜嘛。`,
      );
      await you.say_and_wait(
        `哈？${maru.name}，${you.name}也知道夏季合宿是快速提高能力的捷径吧？`,
      );
      await you.say_and_wait(`所以比平常要更加认真一点吧。`);
      await maru.say_and_wait(
        `我倒。既然${callname}都这么说了，那么${maru.elder_sibling_sex_title}我不认真一点也不行呢⭐`,
      );
      era.printButton(`「这不是当然的吗？」`, 1);
      await era.input();
      await era.printAndWait(
        `虽然${you.name}也期待着海水与日光浴，还有随处可见的泳装。`,
      );
      await you.say_and_wait(`这样的话，接下来就好好享受青春吧。`);
      await era.printAndWait(`有些人按照身体感觉来走才是更加正确的道路。`);
      await era.printAndWait(`所以最好还是不要干涉吧。`);
      await maru.say_and_wait(
        `像这样感受着海风带来的吹拂，心情也像是冲了云霄一样呢思密达。`,
      );
      await you.say_and_wait(
        `连这种古早流行语都回来了，看来${maru.name}心情真的不错。`,
        true,
      );
      await maru.say_and_wait(`呵呵～${callname}真可爱呢♪`);
      await era.printAndWait(
        `不知何处凑过来的${maru.name}一直盯着${you.name}看。`,
      );
      await maru.say_and_wait(`再怎么夸奖都不会有福利的呦～`);
      await era.printAndWait(
        `预测到了${you.name}接下来打算说的话，${maru.name}狡黠的笑了起来。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '庙会';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`真是热闹啊。`);
      await era.printAndWait(
        `与${maru.name}约定好了一起来参加据说非常盛大的庙会，但${you.name}在入口处等了很久也没看见${
          maru.sex
        }的身影。`,
      );
      await era.printAndWait(
        `「是人流太大迷路了吧」正当${you.name}放空大脑看着人群不断汇入灯笼装饰着的庙会，眯着眼着打了一个哈欠时。`,
      );
      await you.say_and_wait(`真是热闹啊。`);
      await era.printAndWait(
        `跟预想之中只是寥寥几个摊位的情况完全不同，从四面八方汇聚的游客与摊位从街道的这头一直蔓延到了街道的另一头。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `在这里发呆的少年，不来尝尝新鲜的水果吗？`,
      );
      await you.say_and_wait(`诶？`);
      await era.printAndWait(`被流动的人群推赶着，不知不觉站在了水果摊面前。`);
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `看这样子是第一次来参加庙会的吧？`,
      );
      await era.printAndWait(
        `似乎是因为收益不错心情也变好的缘故，大叔开始涛涛不绝的说了下去。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `想想看也是，毕竟这里可是被评为旅游时必逛的庙会之一。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `毕竟整个小镇因为靠近这片美丽的沙滩可是吸引了不少的游客前来度假呢。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `虽然以前这里不过只是一个交通不便的平平无奇的乡村罢了，不过自从这边的沙滩出名之后，前来参观的游客也变得多了起来。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `后来伴随着铁路的开通，人们都哗的一下往这边跑了，最后变成了现在的小镇。`,
      );
      await you.say_and_wait(`那个？请问`);
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `哦。看我这记性，说起来${you.name}是因为迷路才站在这里的吧？`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `也是，因为这个庙会有四个一摸一样的入口嘛，虽然我不懂什么艺术之类的东西，不过每年都能看到与其他人约定在入口处集合而找不到人的乐子。`,
      );
      await era.printAndWait(
        `似乎正讲到兴头之上，看上去因为是小镇的本地居民而自豪的大叔带着洪亮的嗓门介绍着。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `顺带一提，如果想走完整个庙会的话，从这里出发一路直走能看到这边的特色演出。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `今晚说不定能在观看庆典的人群那里大赚一笔呢，哈哈哈。`,
      );
      await era.printAndWait(
        `说完最后一句话后，唾沫横飞的大叔终于停下了对话。`,
      );
      await maru.say_as_passer_by_and_wait(`手机`, `嗡嗡嗡`);
      await era.printAndWait(
        `口袋中的手机发出了震动的声音。在人们大多为了演出而出发的现在，现在会打电话的不言而喻了。`,
      );
      await maru.say_and_wait(`${callname}${you.name}在哪里？`);
      await era.printAndWait(
        `口袋中的手机发出了震动的声音。在人们大多为了演出而出发的现在，现在会打电话的不言而喻了。`,
      );
      await maru.say_and_wait(
        `汗，明明是精心准备了一番，看着手机上拍下的照片赶到入口处的时候，却怎么也没看到${
          callname
        }的样子。`,
      );
      await maru.say_and_wait(
        `虽然自认不会错过${callname}的身影，不过左看右看都找不到${
          callname
        }的身影，${maru.elder_sibling_sex_title}我还真是有点生无可恋呢><。`,
      );
      await era.printAndWait(
        `是搞错了入口吧，不，说不定大概${you.name}也搞错了？`,
      );
      era.printButton(`「不好意思打扰了。」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `嗯？是想问怎么分辨入口吧？`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `也是，毕竟每年都有人问这个问题。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `平时的时候很容易分辨的地方，人一多起来看什么就都是一样的了。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `${you.name}叫那位朋友从入口处走到第五个摊位，那边有专门负责引导的志愿者。`,
      );
      await era.printAndWait(
        `大叔一边说着一边自然拿出了一份地图指给了${you.name}看。`,
      );
      await maru.say_as_passer_by_and_wait(
        `摊主`,
        `如果要赶演出的话，走这条路，现在赶过去还来得及。`,
      );
      await era.printAndWait(`虽然因为过于热情而有点奇怪但是很好心的大叔。`);
      await era.printAndWait(
        `向他道谢之后，${you.name}将原话告诉了${maru.name}便匆忙赶了过去。`,
      );
      era.drawLine();
      await era.printAndWait(`快来吧，快来吧，不远处就是盛大的舞台。`);
      await era.printAndWait(
        `忘却这份烦恼吧，在这份热情的舞动之中翩翩起舞吧。`,
      );
      await era.printAndWait(
        `融化在这份盛大的庆典之中吧，就这样和我一起祈祷${maru.sex}永不落幕吧。`,
      );
      await era.printAndWait(
        `带着泪水与汗水交织而成的喜悦，带着迷茫与痛苦最终释然吧。`,
      );
      await era.printAndWait(
        `就像沙滩之上亮晶晶的沙子一样，${you.name}们的喜悦与解脱最终将被历史所铭记。\n`,
      );
      await you.say_and_wait(`总算到目的地了。`);
      await era.printAndWait(
        `前来观看表演的人群络绎不绝，人们或站或坐，举着饮料或者相机观看着舞台之上的精彩表演。`,
      );
      await era.printAndWait(
        `人们呼出的气息仿佛织成了一张薄薄的网，小孩子们尖叫着在人群之中兴奋的跑来跑去。`,
      );
      await you.say_and_wait(`人可真多啊。`);
      await era.printAndWait(
        `尽管已经相当注意自己的脚下，但还是好几次被疯跑着的孩童差点撞得失去平衡。`,
      );
      await you.say_and_wait(`好热，不过当务之急还是要先找到${maru.name}——`);
      await era.printAndWait(
        `虽然想将自己的定位发给${
          maru.sex
        }，但在这么多的人群中，就连手机的信号也变得断断续续的。`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `夜幕低垂，舞台的灯光逐一亮起，在场的游客将自身的注意力集中于舞台之上——`,
      );
      await era.printAndWait(
        `除了看着${maru.name}的${you.name}与注视到${you.name}的目光挥着手小跑过来的${maru.name}。`,
      );
      era.printButton(`「能看到${maru.name}真是太好了」`, 1);
      await era.input();
      await era.printAndWait(
        `像是心中的一块大石终于落到了地上，${you.name}长长的呼出了一口气。`,
      );
      await maru.say_and_wait(
        `总算找到${you.name}了，${maru.elder_sibling_sex_title}我也是松了一口气呢。`,
      );
      await you.say_and_wait(`抱歉，虽然我也想尽快和${maru.name}汇合，不过——`);
      await maru.say_and_wait(
        `嗯～比起道歉的话，接下来${
          callname
        }和我一起看表演才是最能用行动作为补偿吧。`,
      );
      await you.say_and_wait(
        `……直到舞台结束为止，我都不会离开${maru.name}身边的。`,
      );
      await you.say_and_wait(
        `所以，请让我和${you.name}一起创造这份美好的回忆吧。拜托了！`,
      );
      await maru.say_and_wait(`哎呀，这是什么新型告白方式吗？`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}我也是稍～微有点心动了呢。`,
      );
      await maru.say_and_wait(`既然这样的话，${callname}就不要离开我了哦？`);
      await era.printAndWait(
        `受邀参加演出的${maru.uma_sex_title}穿着流光溢彩的服饰轻盈的跃上了舞台，灯光一下子全部集中在了${
          maru.sex
        }的身上，此刻的${maru.sex}仿佛变成了这份沙滩之中最为耀眼的存在。`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `${
          maru.sex
        }的动作流畅而美丽，让人不禁想起了不远处仍在汹涌奔流着的海浪，随着节奏而悄然出现的民族风伴奏将这位身着深蓝色的服饰的${maru.uma_sex_title}烘托成了于海洋深处悄然来到陆地之上翩翩起舞的精灵。`,
      );
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`嗯？${callname}怎么了？`);
      await era.printAndWait(
        `被稍稍提高了声音的${you.name}而吓到了的${maru.teen_sex_title}看着询问的目光看着${you.name}。`,
      );
      await era.printAndWait(`${you.name}的决定是`);
      era.printButton(
        `「${maru.name}，请告诉我${you.name}的痛苦与悲伤吧。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `舞台之上的${maru.teen_sex_title}拼尽自己的全力，洒下的汗水汇聚成了一阵又一阵的浪潮起伏。`,
      );
      await era.printAndWait(
        `观众们带着期待的目光，聚精会神的看着在舞台之上闪耀的那个偶像。`,
      );
      await era.printAndWait(
        `而从始至终，${maru.name}都保持着那份令人不安的沉默。`,
      );
      await you.say_and_wait(`恐怕现在就是关键时刻了。`, true);
      await you.say_and_wait(`无论如何都要保持着耐心。`, true);
      await era.printAndWait(
        `台上的${maru.teen_sex_title}，每一次旋转，每一个跳跃，都牢牢的将观众们的内心紧紧抓住。`,
      );
      await era.printAndWait(`观众们屏息等待着那个时刻的到来。`);
      await maru.say_and_wait(`果然，还是瞒不过${callname}吗？`);
      await era.printAndWait(
        `突然，像是平地一声雷响起，观众们爆发出了热烈的掌声与欢呼声。`,
      );
      await era.printAndWait(
        `将带着的微笑面具摘下，${maru.name}露出了悲伤与成功解脱的释然表情看着${you.name}。`,
      );
      await era.printAndWait(
        `就连这份疼痛都已经消失，带着这份几乎要瘫在地上的麻木感，${maru.teen_sex_title}品尝到了不知道是汗水还是泪水的咸味。`,
      );
      await maru.say_and_wait(`……接下来，换个地方说吧？${you.actual_name}？`);
      await era.printAndWait(
        `被散发出的迷人诱香的果实所吸引的无数游客们汇入了这份盛况之中，今夜，才刚刚进入高潮。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '抉择';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `训练结束后，${you.name}收到了${maru.name}的纸条。`,
      );
      await maru.say_and_wait(
        `${callname}，来附近的神社一趟，我有话想对${you.name}说。`,
      );
      await era.printAndWait(
        `难道是经典的告白场景吗？收拾到东西后${you.name}迅速出发了。`,
      );
      await era.printAndWait(
        `逆着期待欢愉与忘却的人流，${you.name}们像是散步一样来到了附近的一处神社。`,
      );
      await era.printAndWait(
        `欢乐的余韵尚未散尽，游客们的目光纷纷聚焦在了小镇中心的舞台上，`,
      );
      await era.printAndWait(`要是说偏僻的话，亦是存在比此处更为偏僻的地方，`);
      await era.printAndWait(
        `然而，此处既不因过于幽静而显得恐惧，也不因过于喧嚣而使人感到不安。`,
      );
      await maru.say_and_wait(`三女神大人，请听我诉说。`);
      await era.printAndWait(
        `与投入赛钱箱中的马币之间碰撞的清脆声音同时发生的来自${maru.name}的祈祷。`,
      );
      era.printButton(`「投入马币」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}效仿着${maru.name}的动作，闭上眼睛向着三女神祈祷。`,
      );
      era.printButton(`「三女神大人，请指引痛苦之人吧」`, 1);
      era.printButton(`「三女神大人，请指引迷茫之人吧」`, 2);
      await era.input();
      await era.printAndWait(
        `许下了愿望之后，${you.name}看向了一旁的${maru.teen_sex_title}。`,
      );
      await era.printAndWait(
        `${maru.sex}死死的注视着赛钱箱——不，${
          maru.sex
        }看向了那未知的，遥远的地方。`,
      );
      await you.say_and_wait(`${maru.name}在哭泣吗？`, true);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `实在抱歉，今天的姻缘符已经送完了。`,
      );
      await era.printAndWait(
        `少顷，揉着双眼打着哈欠的巫女才从观看表演的人群中姗姗来迟。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `……如果可以的话，请两位客人收下这个吧。`,
      );
      await era.printAndWait(
        `似乎意识到了什么，巫女从长袖中缝合的小口袋里拿出了护身符。`,
      );
      await you.say_and_wait(`非常感谢。`);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `感谢的话语，献给美丽的女神。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `祝福的话语，献给仁慈的女神。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `解脱的话语，献给慈爱的女神。`,
      );
      await you.say_and_wait(`解脱吗？`, true);
      await maru.say_and_wait(`祝福吗……三女神大人，谢谢。`, true);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `三女神们，请带给这个世界美好与希望吧。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `可爱的人们，愿三女神与${you.name}们同在。`,
      );
      await era.printAndWait(
        `巫女一边说着祝福的话语一边将护身符递给了${you.name}们。`,
      );
      await era.printAndWait(
        `与迅速从巫女手中接过护符并回礼的${you.name}不同，${maru.name}接过护符之后，放进了随身携带的小包之中。`,
      );
      await era.printAndWait(`随后——`);
      await maru.say_and_wait(`还是瞒不过${callname}呢。`);
      await era.printAndWait(
        `似乎察觉到了气氛的改变，巫女伸出右手指向了一条僻静的小道，随后离开了此处。`,
      );
      await era.printAndWait(
        `木屐与地面碰撞发出哒哒的清脆声音慢慢变得越来越小，渐渐，这里只剩下了远处传来的鼓声与观众欢呼喝彩之声。`,
      );
      await you.say_and_wait(
        `这里只剩下我们两个人了，接下来的话语除了三女神大人，谁也不会听见。`,
      );
      await era.printAndWait(
        `${you.name}看向了${maru.name}的脸庞，而后者因为终于从困扰之中解脱出来而身体微微颤抖。`,
      );
      await maru.say_and_wait(
        `从哪里说起来比较好呢。实际上，那个晚上我也在场。`,
      );
      await you.say_and_wait(`什么？！`);
      await era.printAndWait(
        `${you.name}的背后涌起了一股寒意，双腿发抖，甚至想要就这么转身逃跑，但是仅存的理性还是告诉了自己，人是不可能跑得过${maru.uma_sex_title}的。`,
      );
      await era.printAndWait(
        `更何况，是作为${maru.uma_sex_title}中的佼佼者，${maru.name}。`,
      );
      await maru.say_and_wait(
        `正如${you.name}所想的那样，那天的${
          callname
        }神色有些古怪，而且视线总是无意识地看向手表。`,
      );
      await maru.say_and_wait(`这个时候，令人讨厌的直觉就这么发动了。`);
      await era.printAndWait(
        `${maru.name}带起了那副${you.name}从未见过的假面，就这么面无表情地诉说着。`,
      );
      await maru.say_and_wait(
        `晚饭后，虽然说回到公寓了，但事实上只是将小塔临时停在了附近的停车场，然后借助脚力回到了特雷森。`,
      );
      await era.printAndWait(
        `背叛者，畜生，罪人，脑海之中不禁浮现出了与${maru.name}定下的约定。`,
      );
      await you.say_and_wait(`我有什么脸面去见${maru.sex}？`, true);
      await era.printAndWait(
        `一想到这个，大脑就一片空白，嘴唇下意识的咬紧，胃里翻江倒海般的——一股恶心感传了出来。`,
      );
      await maru.say_and_wait(
        `虽然${
          callname
        }反侦察意识很强呢，不过再怎么说，警惕起来的${maru.uma_sex_title}可是连最微小的声音都不会放过的。`,
      );
      await maru.say_and_wait(
        `在远远处看到了${
          callname
        }神色慌张的走进了教学楼后，在一楼耐心等到说话声响起便可迅速定位。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`${you.name}张了张嘴，什么也说不出来。`);
      await era.printAndWait(
        `度日如年的感觉，想要就此逃跑，却被灌了铅一样的双腿牢牢钉死在了原地。`,
      );
      await maru.say_and_wait(
        `明明，如果${
          callname
        }没同意和我一起去庙会的话，我打算就这样装傻到一切结束呢。`,
      );
      await era.printAndWait(
        `虽然说出的话带着一股轻快感，但一丝笑容都没有出现的${maru.name}紧紧地盯着${you.name}。`,
      );
      await maru.say_and_wait(
        `不过，既然${callname}已经下定决心的话，我也应该回以应有的尊重。`,
      );
      await maru.say_and_wait(`那么，${callname}，现在轮到${you.name}了。`);
      await era.printAndWait(
        `人类远古时期流传下来的恐惧让${you.name}的大脑全速运转，${you.name}的决定是。`,
      );
      era.printButton('「我不会让步的」', 1);
      era.printButton('「对不起」', 2);
      era.print(
        [
          '【警告，若选择此选项，与 ',
          maru.get_colored_name(),
          ' 的关系将无法挽回！】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}毫不犹豫的迎上了${maru.name}的双眼。`,
        );
        await maru.say_and_wait(
          `${you.actual_name}，你最好给我一个满意的答复。`,
        );
        await era.printAndWait(
          `${maru.name}的马耳慢慢向后背去，语气之中也变得急躁起来。`,
        );
        await you.say_and_wait(`踏错一步可能就是万丈深渊了。`);
        await era.printAndWait(
          `强行安下跳得越来越厉害的心脏，冷静得仿佛不是自己一样。`,
        );
        await era.printAndWait(
          `虽然连自己也不太清楚，为什么自己下意识的拒绝了。`,
        );
        await era.printAndWait(
          `但是，${you.name}知道，这个时候绝对不能妥协，${you.name}不是为了来陪${maru.name}过家家，${you.name}必须展现出那份意志。`,
        );
        await era.printAndWait(
          `回到正题，${maru.name}在意的地方是什么？令${
            maru.sex
          }痛苦的除了背叛誓言还有什么？`,
        );
        await you.say_and_wait(
          `我是来把${you.name}从偶像的神座上拽下来的，${maru.name}。`,
        );
        await era.printAndWait(
          `${maru.name}有意无意释放了一点自己的领域，${you.name}体会到了在赛场上的${maru.uma_sex_title}们所感受到了恐惧。`,
        );
        await you.say_and_wait(
          `偶像是什么？被人崇拜，被人寄托了命运，虽然说着为了让其他人看着自己的背影前进，但实际上，${you.name}是如此的傲慢。`,
        );
        await you.say_and_wait(
          `${you.name}真的承受得了那份被无数人寄托了希望的千斤顶吗？`,
        );
        await you.say_and_wait(`尽管是我，我也知道，世界上没有完美无缺的人。`);
        await you.say_and_wait(`只要是人，就一定会犯错，一定会做出错误。`);
        await you.say_and_wait(
          `错误是不可避免的，悲伤、痛苦之后，才更加懂得珍惜。`,
        );
        await you.say_and_wait(`但是${you.name}`);
        await you.say_and_wait(
          `虽然也是作为知心大${maru.elder_sibling_sex_title}帮助困扰的${maru.uma_sex_title}们。`,
        );
        await you.say_and_wait(
          `但是没有做好善后工作，完全没有意识到${maru.uma_sex_title}们把${you.name}当成了逃避一切问题用的避风港。`,
        );
        await you.say_and_wait(
          `就这样，被${maru.uma_sex_title}擅自寄托了希望，又就这样擅自被认为背叛了的${maru.uma_sex_title}憎恨。`,
        );
        await you.say_and_wait(
          `虽然那些${maru.uma_sex_title}们口口声声说把${you.name}的背影作为偶像看待，在实际行动里却把${you.name}当成神一样崇拜。`,
        );
        await you.say_and_wait(
          `虽然${you.name}不是有意这么做，也从未有这种想法，但是，悲剧就是这么诞生了。`,
        );
        await you.say_and_wait(
          `所以，请从这个神座上下来吧，我不是为了自己而请求，而是因为看到了通向地狱的单程车而拉住${you.name}。`,
        );
        await era.printAndWait(
          `完全不顾${maru.name}的想法，就这样一口气将自己内心挤压下来的想法说了出来。\n`,
        );
        await maru.say_and_wait(
          `那${you.name}的解决方法又在哪里？世界上从来不缺发现问题的人，缺的从来都是能更进一步解决问题的人。`,
        );
        await maru.say_and_wait(`而且，说到底都是${you.name}的一面之辞吧？`);
        await maru.say_and_wait(
          `谁知道这不是${you.name}因为恐惧而胡扯出来的东西？`,
        );
        era.printButton(
          `就像我为了冒被${maru.name}讨厌的风险一样，${you.name}也应该知道自己为什么，是为了何人而冒的风险吧！`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `正打算继续说下去的${maru.name}，被${you.name}的话语所打断。`,
        );
        await you.say_and_wait(
          `我虽然没有这种被后辈们寄托了大量希望与期待的经历，但我也知道，${maru.name}是出于爱而帮助的${
            maru.couple_title
          }。`,
        );
        await you.say_and_wait(
          `就是这个宁可粉身碎骨、万劫不复也要帮助${
            maru.couple_title
          }的这个名叫爱的东西！`,
        );
        await you.say_and_wait(`所以，我不会阻止${maru.name}践行自己的道路。`);
        await era.printAndWait(
          `这是${you.name}第一次直面领域，但心中有种难以形容的温暖与激情让${you.name}凝视着${
            maru.sex
          }的双眼。`,
        );
        await you.say_and_wait(
          `内心的悲伤、对于未来的迷茫，可以让我分担一点吗？`,
        );
        await you.say_and_wait(
          `一个人在伸手不见五指的黑暗之中前进，如果有一盏明灯照亮前方的道路就好了。`,
        );
        await you.say_and_wait(
          `请交给我吧，虽然作为训练员只是马马虎虎，但是作为一盏灯我有信心做好。`,
        );
        await you.say_and_wait(`我会一步步，一点点，为他人而死。`);
        await era.printAndWait(
          `然后，${you.name}看着${maru.sex}的气势慢慢的消散，越来越小。`,
        );
        await era.printAndWait(`最后，${maru.name}像是自责一般，叹了口气。`);
      } else {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `像是度过了一年一样漫长，${you.name} 被 ${maru.name} 用审视犯人的目光紧紧盯着看。最后，${
            maru.sex
          }收回了目光。`,
        );
        await maru.say_and_wait(`那么，接下来的日子，也请多多指教了♪`);
        await era.printAndWait(
          `像是什么也没发生一样，${maru.sex}带着笑容向${you.name}伸出了手。`,
        );
        await you.say_and_wait(`请多多指教`);
        await era.printAndWait(
          `尽管${maru.sex}依然是那副柔和的语气，但 ${you.name} 知道——`,
        );
        await era.printAndWait(
          `有什么暖洋洋的东西，向着黑暗之中，连同自己的灵魂一起\n`,
        );
        await era.printAndWait(`然后，终于 结束了。`);
        await era.printAndWait(`留下的只有寂静。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿结束';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.print(`合宿比想象之中过得更快呢。`);
      maru.print(
        `看着小特 ${maru.couple_title}在沙滩上燃烧着青春之魂，拼命奔跑的模样。`,
      );
      maru.print(`与深夜独自前行观看潮水涨落，又是一种不同的感觉呢。`);
      await maru.say_and_wait(`…… ${callname}。`);
      maru.print(`意外的，没有对 ${callname} 的背叛感到过于愤怒。`);
      maru.print(`就好像，就像是。`);
      era.drawLine();
      await maru.say_and_wait(`合宿比想象之中过得快呢。`);
      era.printButton(`「是啊。」`, 1);
      await era.input();
      await you.say_and_wait(`一旦认真起来了，时间总是觉得不够用呢。`);
      await maru.say_and_wait(`不过时光不会倒流的吧？`);
      await you.say_and_wait(`至少我们留下了快乐的回忆吧？`);
      await maru.say_and_wait(
        `呵呵，是啊。与小特 ${maru.couple_title}昨晚的结束派对，往前推是与 ${callname} 在海岸边一起戏水，再往前的话则是与 ${callname} 一起度过的小镇庆典。`,
      );
      await maru.say_and_wait(`这么算下来的话，实际上过得很充实呢。`);
      await maru.say_and_wait(`真想再回到八月初重新开始呢～`);
      era.printButton(`「大概是时间被意义固定住了吧？」`, 1);
      await era.input();
      await you.say_and_wait(`因为被赋予了意义，所以最终带来了些什么吧？`);
      await maru.say_and_wait(`呵呵，真是有趣的想法呢。`);
      await maru.say_and_wait(
        `既然这样，${callname} 可以和我一起享受最后的夏季合宿吗？`,
      );
      await you.say_and_wait(`？`);
      await era.printAndWait(
        `不久之后，坐在副驾驶的 ${you.name} 开始对开车产生心理阴影了。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = '水与沙';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `所幸这段时间下来，${maru.name}并没有落下原本的训练。`,
      );
      await era.printAndWait(`在这份安慰之下，心中稍微轻松了一点。`);
      await era.printAndWait(`你将视线从工作上挪开，站起身打了一个哈欠。`);
      await era.printAndWait(
        `沙滩彷佛被一层神秘的薄纱笼罩，不远处，${maru.uma_sex_title}们气势高涨地绕着沙滩进行体能训练。`,
      );
      await you.say_and_wait(`已经这么晚了啊。`);
      await era.printAndWait(
        `在那次庙会之后，你与${maru.name}之间的关系似乎更近了一步。`,
      );
      await era.printAndWait(
        `就像是终于得到了进入 ${maru.sex} 内心深处的许可一样。`,
      );
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `无论如何应该和 ${maru.sex} 好好交流一遍，而且，也许机会只有一次。`,
      );
      await era.printAndWait(`所以，你决定`);
      era.printButton(`「寻找${maru.name}」`, 1);
      era.printButton(`「寻找${maru.name}」`, 2);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `夕阳的余晖洒在沙滩上，金色的光芒与细腻的沙粒交织，仿佛整个沙滩都被镀上了一层金辉。`,
      );
      await era.printAndWait(`不知为何，焦躁感逐渐消失了。`);
      await era.printAndWait(
        `脚趾与沙粒之间的摩擦带来的阵阵酥麻感很快转化为了一种快感，心情也随之变得高涨起来。`,
      );
      await era.printAndWait(
        `不远处站在橙红与深蓝交界处的人影，就是${maru.uma_sex_title}们告诉你的${maru.name}了吧。`,
      );
      await era.printAndWait(`你所注视的人影似乎也注意到了你的到来。然后——`);
      await era.printAndWait(`声音被海浪悄然融化。`);
      await era.printAndWait(
        `海浪轻轻拍打着岸边，一进一退的波浪声，像是在诉说一天的故事。`,
      );
      era.drawLine();
      await maru.say_and_wait(`${callname}！这边的水很凉哦！`);
      await era.printAndWait(`${maru.name}高兴的挥着手。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `你略带复杂的看向了${maru.name}，然后脱下了鞋，赤足走向了大海。`,
      );
      await era.printAndWait(
        `比起冰凉的感觉，你最先感到的是一种若有若无的阻力。`,
      );
      await era.printAndWait(
        `不过随着有意识的向前靠近，这种不适感也慢慢消退了。`,
      );
      era.printButton(`「夏天的感觉怎么样？」`, 1);
      era.printButton(`「海水的感觉是不是very cool？」`, 2);
      await era.input();
      await maru.say_and_wait(
        `不止是身体变得凉爽起来了，就连这颗炽热的心也变得一下子平静许多了呢。`,
      );
      await you.say_and_wait(
        `看着${maru.name}欢快玩耍的样子，真是让人不禁期待着明天的到来呢。`,
      );
      await maru.say_and_wait(`明天也会是一个晴朗的好天气吧。`);
      await era.printAndWait(
        `${maru.teen_sex_title}看向了海滩之上，在傍晚也在坚持着练习的${maru.uma_sex_title}们。`,
      );
      await you.say_and_wait(
        `也许只有在失去某物，在痛苦之中辗转反侧，才会刻骨铭心的意识到到自己之前是多么傲慢地挥霍一切吧。`,
      );
      await maru.say_and_wait(
        `……只有这样，在痛苦与迷茫过后，呕心沥血出来的某物才会散发出真正的光芒吧。`,
      );
      await maru.say_and_wait(
        `从迷茫与痛苦化为觉悟的那个瞬间，我一直在期待着那一天的到来。`,
      );
      await era.printAndWait(`说完，两人陷入了沉默。随后，你率先开口道`);
      await you.say_and_wait(`${maru.name}，可以听我说吗？`);
      await maru.say_and_wait(
        `我已经被 ${callname} 从女神的宝座上拉下来了，这次 ${callname} 难道想做什么色色的事情吗？`,
      );
      await era.printAndWait(
        `看着因为害怕而微微颤抖（？）的${maru.name}。你不免因为之前的过激发言老脸一红`,
      );
      era.printButton(`「咳咳，实际上我有事打算告诉你。」`, 1);
      await era.input();
      await era.printAndWait(
        `为了维持作为训练员的矜持（事到如今这种东西真的还有吗），你整理好了姿态后`,
      );
      era.printButton(`「请再让我看到闪耀的背影吧！」`, 1);
      era.printButton(`「无论如何，请让那个背影，那股风，再次吹拂吧」`, 2);
      await era.input();
      await maru.say_and_wait(`！诶？就算是 ${callname} 的要求，这样也`);
      await you.say_and_wait(
        `不，我知道的。不对，不止是我，我知道的，还有我不知道的人们，都在期待的那一刻。`,
      );
      await maru.say_and_wait(`就算 ${callname} 这么说`);
      era.printButton(`「之后就看到了${maru.name}吗？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `带着努力一定会成功的幻想，不是总会被现实所打破吗？`,
      );
      await you.say_and_wait(
        `不，比起最终的结果，人们为了逃避痛苦，却在最终的时刻发现，在追逐梦想的过程中，最宝贵的是意义。`,
      );
      await you.say_and_wait(
        `而且，就算是这样，与其厌恶着这样的自己，在迷茫与痛苦之后，疲惫不堪的人们才会关注被世人称作美的物。`,
      );
      await you.say_and_wait(
        ` 就这样，期待着，期盼着，祈祷着自己的迷茫终于明了的时刻。`,
      );
      await you.say_and_wait(
        ` 然后，意识到了美的瞬间，被那份璀璨夺目的美彻底俘获的片刻。`,
      );
      await you.say_and_wait(` 尽管人生充满了苦难。`);
      await you.say_and_wait(` 尽管因为未曾遇到的事物而手忙脚乱。`);
      await you.say_and_wait(
        ` 尽管因为不能将这份痛苦向他人倾诉而深深的压抑着的心灵。`,
      );
      era.printButton(`「我也想看到那份美丽的背影。」`, 1);
      await era.input();
      await you.say_and_wait(
        ` 然而反过来看，这却是让人脱胎换骨的，最有力的风（助力）了。`,
      );
      await you.say_and_wait(
        `一定，一定会因为追逐着那个美丽的背影而回忆起来！`,
      );
      await you.say_and_wait(`所以，请助我一臂之力。`);
      await era.printAndWait(`就这样直视着${maru.sex}的双眼。`);
      await maru.say_and_wait(` ${callname} 打算让我做什么呢？`);
      await you.say_and_wait(`就在学院的草场上，我会让你看到最难忘的一幕。`);
      await maru.say_and_wait(`我很期待哦？`);
      await era.printAndWait(
        `那笑容宛如春日里初绽的花朵，${maru.name}期待着那一刻的到来。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_34: (() => {
    const title = '无风带';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await era.printAndWait(`你看着手中的草稿纸发呆。`);
      await you.say_and_wait(`不对，这样无法解开${maru.sex}的心结。`, true);
      await era.printAndWait(`将眼前的草稿纸揉成一团，然后随意丢弃到一边。`);
      await era.printAndWait(`飞出的纸团沿着抛物线，碰撞到了其他的纸团。`);
      await era.printAndWait(`想要逃避的心情、做不到的沮丧感就这样弥漫开`);
      await era.printAndWait(`咚咚咚。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `请问是${you.actual_name_with_title}吗？`,
      );
      era.printButton(`「是，有什么事吗？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `啊，训练员${you.adult_sex_title}，嗯。会长让我给训练员${
          you.adult_sex_title
        }带一句话。`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `『我这里有你想要的答案。』`,
      );
      await you.say_and_wait(`……我知道了。现在就出发吧。`);
      await you.say_and_wait(
        `什么时候，不，难道从一开始就在一旁观看吗？`,
        true,
      );
      era.drawLine();
      await era.printAndWait(`你跟在${maru.uma_sex_title}的后面。`);
      await you.say_and_wait(`鲁铎象征了解到哪一步了？`, true);
      await era.printAndWait(`莫名的烦躁感占据了你的内心。`);
      await you.say_as_passer_by_and_wait(`${maru.uma_sex_title}`, `打扰了 `);
      await era.printAndWait(
        `在${maru.uma_sex_title}的带领下，你来到了夜晚的学生会室。`,
      );
      await era.printAndWait(`eclipse first，the rest nowhere。`);
      await era.printAndWait(
        `巨大的牌匾与全神贯注处理文件的皇帝让你流下了冷汗。`,
      );
      await emperor.say_and_wait(`来了吗？`);
      await era.printAndWait(
        `似乎刚刚才注意到你的存在，停下了手头工作的皇帝，带着从容的微笑看着你。`,
      );
      await emperor.say_and_wait(`你觉得今夜的月亮如何？`);
      await you.say_and_wait(
        `今晚的月亮与昨日并无太大不同。以及，皇帝陛下，我们又见面了。`,
      );
      await era.printAndWait(
        `不能惹 ${maru.sex} 生气，不然的话会发生很可怕的后果。`,
      );
      await era.printAndWait(`不能过于奉承，不然会让 ${maru.sex} 失去兴趣。`);
      await emperor.say_and_wait(
        `能遇到这么优秀的训练员，作为特雷森的学生会长我也是非常荣幸。`,
      );
      await you.say_and_wait(`在对方展示气量的时候，最好还是不要拒绝。`, true);
      await emperor.say_and_wait(`还有`);
      await era.printAndWait(
        `似乎对这个答案不置可否，皇帝紧接着提出了第二个问题。`,
      );
      await emperor.say_and_wait(
        `你认为训练员和${maru.uma_sex_title}之间的关系是怎么样的？${maru.name}的训练员。`,
      );
      await era.printAndWait(`最后的称呼语气故意加重，恐怕是为了给予提示。`);
      await you.say_and_wait(
        `我觉得${maru.uma_sex_title}与训练员之间的关系应该是互相扶持。`,
      );
      await emperor.say_and_wait(`……然后呢？`);
      await era.printAndWait(`皇帝带着戏谑的表情看着你。`);
      await you.say_and_wait(`比如说二人三足之类`);
      await emperor.say_and_wait(
        `如果只有这种程度的话。你又为什么会沦落到现在的地步呢？`,
      );
      await emperor.say_and_wait(
        `作为训练员，也就是作为${maru.uma_sex_title}的领导者。`,
      );
      await emperor.say_and_wait(
        `是要从没有路的地方走出路来，从走过的路上走出新路来，是要带领他人航向未知之地。`,
      );
      await emperor.say_and_wait(
        `是在${maru.uma_sex_title}面对未来的迷茫和焦虑问题时，能妥善管理${maru.uma_sex_title}的愿景和信心。`,
      );
      await emperor.say_and_wait(`你做到哪一条了？`);
      await you.say_and_wait(`……`);
      await you.say_and_wait(`皇帝在谈作为训练员所需的领导力。`, true);
      await you.say_and_wait(
        `而在这里的话，${maru.sex} 想要我证明我是否有资格作为${maru.name}的训练员。`,
        true,
      );
      await you.say_and_wait(`那么`, true);
      await you.say_and_wait(
        `……我要去的地方与 ${maru.sex} 同路，我要搭船，条件是当水手。`,
      );
      await you.say_and_wait(
        `每时每刻我都在看，自己是不是在向自己的目标前进，每时每刻都知道自己对船长的配合是出于自愿、是我自己的选择。`,
      );
      await you.say_and_wait(
        `这是我用自己选择的条件，在自己的地方，按照自己的意愿所做出的选择。`,
      );
      await you.say_and_wait(
        `不必要的重担，被人误解的风险，忍受着独自一人的孤独。`,
      );
      await you.say_and_wait(`……某种意义上来说，这是我向理想献上的祭品。`);
      await you.say_and_wait(`不过，理想的道路怎么可能没有代价呢。`);

      await you.say_and_wait(
        `所以，与其说我服从的是船长的命令，不如说服从的是我自己的选择。`,
      );
      await emperor.say_and_wait(
        `服从，说到底不过是屈服换了个好听的说法罢了。`,
      );
      await emperor.say_and_wait(`不过是在惊恐之中随意扯下来的谎话吧？`);
      await you.say_and_wait(`……皇帝陛下应该听说过泥鳅这种生物吧。`);
      await emperor.say_and_wait(`在水田池塘里常见的生物，怎么了？`);
      await you.say_and_wait(`那么皇帝应该也知道，泥鳅是很难捕捉的生物吧。`);
      await you.say_and_wait(
        `在水稻田底部，滑来滑去，很难捕捉，就算运气好触碰到了，也会很快从手中滑落。`,
      );
      await you.say_and_wait(`一路逃避着的我们，又与狡猾的泥鳅有什么不同呢。`);
      await you.say_and_wait(
        `从应当承担的责任面前滑过，活得真的有承担痛苦来得幸福吗？`,
      );
      await you.say_and_wait(`屈服的根源是软弱。`);
      await you.say_and_wait(
        `一个习惯了失败、接受了失败、最终适应了失败的人，只懂得如何失败、不能梦想甚至不敢梦想自己可能是成功的失败者。`,
      );
      await you.say_and_wait(
        `……而一个从失败走向下一个失败的人是不可能获取成功的。`,
      );
      await you.say_and_wait(
        `从哭喊中赤条条出生，又将伴随着哭喊赤条条离开，不去做点什么在这个世界上留下印记的话，就这么带着遗憾离开的话，多少有点可惜吧。`,
      );
      await you.say_and_wait(`所以服从一种决定。`);
      await you.say_and_wait(
        `……既然我已经决定作为训练员，那么最能发挥作用的地方自然就是特雷森了。`,
      );
      await you.say_and_wait(
        `虽然我无法确定前进的方向与${maru.name}所祈求的是否完全相同，`,
      );
      await you.say_and_wait(
        `但我确信，${maru.name}对我的信任与爱足够可靠，所以我以行动代替犹疑。`,
      );
      await emperor.say_and_wait(`……作为指挥者，只能说勉勉强强的及格。`);
      await emperor.say_and_wait(`世界观尚处幼稚，价值观也不过平庸。`);
      await emperor.say_and_wait(`唯一踩线的一点，只是坚定的愿景罢了。`);
      await emperor.say_and_wait(`……不过，这不是今晚的重点。`);
      await era.printAndWait(`皇帝带着名为微笑的面具看着你。`);
      await emperor.say_and_wait(`你喜欢看电影吗？`);
      await era.printAndWait(`突然抛出这个问题的皇帝让你有些疑惑。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `正当你思索如何体面回答之时，皇帝自顾自的说了下去。`,
      );
      await emperor.say_and_wait(
        `让我们想象这样一个场景，如果两名训练员恰好选择了同一场西部电影，看到了这样一幕：保安官与牛仔正在决斗，枪响过后，一人死去，一人活了下来，而作为观众的两人神态却各不相同——`,
      );
      await era.printAndWait(`皇帝故意将尾句拖长，等待着你的回复。`);
      await you.say_and_wait(
        `他们应该是代入到了电影中不同的角色，与角色同悲欢。`,
      );
      await emperor.say_and_wait(
        `尽管死去的追捕牛仔的高尚警官，而活下来的却是在通缉中的罪犯？`,
      );
      await you.say_and_wait(
        `……恐怕是代入罪犯的训练员为了不破坏自己的审美愉悦，而在潜意识中清除了所有的瑕疵。`,
      );
      await you.say_and_wait(
        `……而另外一人不认可作为主角的罪犯，所以对牛仔的缺陷忍无可忍。`,
      );
      await emperor.say_and_wait(`精彩的论述，你比我想象中还要优秀。`);
      await era.printAndWait(`皇帝鼓起了掌。`);
      await emperor.say_and_wait(
        `那么，你对真正的  ${maru.name}了解又有多少？`,
      );
      await emperor.say_and_wait(
        `你怎么知道自己不是代入到了牛仔的……所谓观众呢？`,
      );
      await emperor.say_and_wait(`辛苦了。`);
      await era.printAndWait(`皇帝站了起来，看向了远处的训练场。`);
      await era.printAndWait(
        `草场上努力训练的${maru.uma_sex_title}们传出着喊声响彻了特雷森。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = '思绪';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`哼哼～这不是已经是恋人之间的关系了吗?`);
      await era.printAndWait(
        `在闲聊时开玩笑地想在${maru.name}家借住一段时间，没想到对方爽快的同意了。`,
      );
      await era.printAndWait(
        `拉着你在商场里到处挑选合适的用品，最后东西多到连小塔都放不下了。`,
      );
      await era.printAndWait(
        `与${maru.name}商量之后的决定是通过物流公司把这些东西全部送过来。`,
      );
      await era.printAndWait(`因为同吃同住的缘故，两人之间的羁绊也愈发加深。`);
      await you.say_and_wait(
        `差不多是时候了，现在必须让${maru.name}踏出那一步。`,
        true,
      );
      await era.printAndWait(`因为对失败的恐惧，看着合适的机会从手边滑落。`);
      await era.printAndWait(`想要追求什么，又不敢伸出手。`);
      await you.say_and_wait(
        `……与其说是让${maru.name}，不如说是我要迈出这一步。`,
        true,
      );
      await era.printAndWait(`你一边确认着购买的家具，一边思考着该如何行动。`);
      era.drawLine({ content: '晚饭后' });
      era.printButton(`「明天一起赏秋吧？」`, 1);
      await era.input();
      await era.printAndWait(
        `你打算在气氛最好的时候告诉${maru.name}下周的计划。`,
      );
      await maru.say_and_wait(`说起来确实到了赏秋的时候了呢。`);
      await maru.say_and_wait(`这样的话，明天一起郊游吧？`);
      await era.printAndWait(
        `${maru.name}放下了手中的筷子，双手合掌带着笑容看着你。`,
      );
      await you.say_and_wait(`太好了！`, true);
      await you.say_and_wait(`好啊，人们不是常说艺术之秋，读书之秋吗？`);
      await you.say_and_wait(
        `比起夏天的炎热，冬天的寒冷，秋天这种清爽的季节是最适合抒发艺术情感的时候了。`,
      );
      await you.say_and_wait(
        `而且，我也想在秋天留下和${maru.name}之间的美好回忆。`,
      );
      await maru.say_and_wait(`哎呀，${callname} 原来这么在意我吗？`);
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? '美眉' : '帅锅'}我也想和 ${callname} 留下美好的回忆呢……`,
      );
      await maru.say_and_wait(`呵呵～已经开始期待起明天的行程了呢♪`);
      await era.printAndWait(`${maru.name}的心情看起来十分不错。`);
      era.drawLine({ content: '第二天早上' });
      await maru.say_and_wait(` ${callname}？起来了吗？`);
      await era.printAndWait(`你揉着还未进入状态的双眼挣扎着起床了。`);
      era.printButton(`「比约定的起床时间还要早一点啊」`, 1);
      await era.input();
      await era.printAndWait(
        `一大早感受到了${maru.name}久违的充满活力的声音让你对之后的事情充满了希望。`,
      );
      await maru.say_and_wait(
        `说起来最近好像有美术展览会,以此作为我们第一站的目标吧。`,
      );
      era.drawLine();
      await maru.say_and_wait(`快到中午了，${callname} 尝尝我做的便当怎么样？`);
      era.drawLine();
      await you.say_and_wait(`抓娃娃可真是困难啊。`);
      await era.printAndWait(
        `抱着${maru.name}玩偶的${maru.teen_sex_title}一脸幸福的微笑着。`,
      );
      await you.say_and_wait(`足够了。`);
      era.drawLine();
      await era.printAndWait(`最后一站回到了学院的天台。`);
      await maru.say_and_wait(`风也是会成长的吧。`);
      await era.printAndWait(
        `顺着${maru.name}的视线望向整个学院，金黄色的银杏叶随着风而漫天飞舞。`,
      );
      await maru.say_and_wait(`新诞生的风总是无忧无虑地向着天空飞去。`);
      await maru.say_and_wait(
        `然而，当${maru.sex}接触到了枯叶的悲伤之后，${maru.sex}的脚步就变得沉重了。`,
      );
      await maru.say_and_wait(
        `${maru.sex}也希望能让那些枯叶感受到天空的自由，所以温柔的怀抱着它们，想带着它们一起飞往无忧无虑的天空。`,
      );
      await maru.say_and_wait(
        `但束缚住枯叶的土地最终还是战胜了风的怀抱，所以枯叶在飞向天空的过程中折翼。`,
      );
      await maru.say_and_wait(`最后枯叶还是回归了大地。`);
      await era.printAndWait(`你开始走进${maru.teen_sex_title}的圣域。`);
      await you.say_and_wait(
        `即使如此，枯叶在风的指引下依然做出了自己的决定。`,
      );
      await you.say_and_wait(`没有什么比这一过程更能体现枯叶的生命力了。`);
      era.printButton(`「${maru.name}……我有话想对你说。」`, 1);
      await era.input();
      await maru.say_and_wait(`嗯？`);
      await era.printAndWait(
        `夕阳的余晖洒在了${maru.name}的长发上，为 ${maru.sex} 度了一层金色的光辉。`,
      );
      era.printButton(`「请好好期待着下周吧！」`, 1);
      era.printButton(`到时候让${maru.sex}直接看吧。`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `那我就好好期待着，${callname} 能带给我多大的惊喜。`,
        );
        await era.printAndWait(`隐约意识到了什么，${maru.name} 眨了眨眼。`);
      } else {
        await you.say_and_wait(`接下来一定会让你大吃一惊！`, true);
        await era.printAndWait(`${you.name} 松了口气，期待这下周的到来。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_38: (() => {
    const title = '无风';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, minoru, taste, you, callname) => {
      maru.print(`差不多应该结束了。`);
      maru.print(`奔跑无法带来快乐的话，再怎么努力都无法回答一个问题。`);
      maru.print(`为什么我需要忍耐这份痛苦呢？`);
      maru.print(`所以，就这么看着后辈们在赛场之中活跃的样子吧！`);
      maru.print(`现在的我尤其是这点非常擅长哦！`);
      await maru.say_and_wait(`……`);
      maru.print(`可是，为什么心里还是有些空落落的感觉呢？`);
      maru.print(`好像有什么需要我去寻找的答案在等着我一样？`);
      await maru.say_and_wait(`答案吗？`);
      maru.print(`嘛，算了。重整心情后，去找亲爱的 ${callname} 吧！`);
      maru.print(`不管接下来走哪条路，${callname} 都会温柔的鼓励着我吧。`);
      maru.print(`说起来，${callname} 好像有礼物要送给我。`);
      await maru.say_and_wait(`我可是满怀期待地等着哦？${callname}？`);
      era.drawLine({ content: '理事长办公室' });
      await era.printAndWait(
        `在皇帝以及一直支持着${maru.name}的${maru.uma_sex_title}们的帮助下，到今天终于收集了90%的签名。`,
      );
      await era.printAndWait(
        `轻轻叩击理事长的办公室门，在听到请进的声音后推开了大门。`,
      );
      await taste.say_and_wait(`质问！这位训练员借用夜晚的训练场打算做什么？`);
      await era.printAndWait(`简单的问候后，你单刀直入的提出了自己的设想。`);
      await you.say_and_wait(
        `我想要让负责的担当${maru.uma_sex_title}${maru.name}重新燃起希望。`,
      );
      await taste.say_and_wait(`惊讶！为什么非要用特雷森的训练场？`);
      await you.say_and_wait(
        `这片训练场承载了无数在此挥洒汗水的${maru.uma_sex_title}。看到${maru.uma_sex_title}们努力拼搏的样子正是${maru.name}所希望的。`,
      );
      await you.say_and_wait(
        `这是我收集来的各位${maru.uma_sex_title}联名的请愿书。`,
      );
      await era.printAndWait(
        `你弯下腰将密密麻麻的签名交给了眼前的${maru.teen_sex_title}。`,
      );
      await era.printAndWait(
        `对方仔细确认着每一个签名，${maru.teen_sex_title}头顶的小猫似乎对陌生的你颇感兴趣，围绕着你喵～喵的转来转去。`,
      );
      await era.printAndWait(
        `尽管${maru.teen_sex_title}需要踮起脚尖才能与你对视，但此刻的你大气不敢出，等待着最终的宣判。`,
      );
      await taste.say_and_wait(
        `感动！特雷森的${maru.uma_sex_title}们比我想象之中还要团结。`,
      );
      await taste.say_and_wait(`这位训练员。`);
      era.printButton(`「是！」`, 1);
      await era.input();
      await taste.say_and_wait(`同意！这次活动我也要参加！`);
      await era.printAndWait(
        `${maru.teen_sex_title}拿起了钢笔，认认真真的将北方风味的名字写在了纸上交还给你。`,
      );
      era.printButton(`「理事长谢谢你！」`, 1);
      await era.input();
      await era.printAndWait(
        `微笑的${maru.teen_sex_title}将愉悦！的纸扇打开，一旁的 ${
          minoru.name
        } 带着苦恼与高兴交织的复杂情感看着 ${taste.name} 与${you.name}。`,
      );
      await era.printAndWait(`小心翼翼的将纸张收起，你离开了理事长办公室。`);
      era.drawLine();
      maru.print(
        ` ${callname} 一边说着想和我一起去商业街，一边将准备好的优惠券拿了出来。`,
      );
      maru.print(
        `虽然言行举止实在可疑，不过由 ${callname} 主动提出的约会实在难得。`,
      );
      maru.print(`就算作为饵也过于丰盛了。`);
      maru.print(
        `面带笑容的收下了这份礼物后，与 ${callname} 萨莉亚简单吃过午饭后，一起看了场电影。`,
      );
      maru.print(
        `或许是工作日的缘故吧。这场次的观影者意外的少，很轻松就买到了两个人坐在一起的票。`,
      );
      maru.print(
        `似乎是一部有关${maru.uma_sex_title}由脆弱慢慢走向成熟的励志电影。看着${maru.uma_sex_title}在无数苦难之中依然咬牙前行，不禁想要为 ${maru.sex} 鼓掌。`,
      );
      await you.say_and_wait(
        `不管是多少次看到这样的场景，内心都会自然涌出一份感动与力量啊。`,
      );
      maru.print(`深有同感。`);
      maru.print(
        `电影结束后，一起去挑战了附近据说最难的抓娃娃机，不出意外的失败了。`,
      );
      maru.print(
        `本来打算安慰我的 ${callname} 结果自己反而上了头非要把娃娃抽出来不可。`,
      );
      maru.print(
        `被安慰的一方结果反而成了安慰的一方，这也是命运的一种醍醐味吧。`,
      );
      era.printButton(`「今晚晚上一起去特雷森看看吧？」`, 1);
      await era.input();
      maru.print(`在百货大厦的高级餐厅一边吃饭一边这么说着的 ${callname}。`);
      await maru.say_and_wait(`哎呀，${callname} 终于要向我揭晓这份礼物了吗？`);
      await you.say_and_wait(`不如说我已经激动到连叉子都握不稳了。`);
      await maru.say_and_wait(`有这么激动吗？`);
      await you.say_and_wait(`是的，就是这种程度的礼物，绝对会让你印象深刻。`);
      maru.print(` ${callname} 认真的回应着我的玩笑，不由得开始期待起来了。`);
      await maru.say_and_wait(`那么，接下来一定要好好享受才行！`);
      maru.print(`虽然明年才到法定喝酒的年龄，不过这种程度还是ok的吧？`);
      maru.print(
        `因为喝了酒的缘故，就这么一边聊天一边陪 ${callname} 慢慢的向着特雷森前进。`,
      );
      maru.print(
        `聊着聊着，话题突然转向了之前退役的那名${maru.uma_sex_title}，心突然疼了一下。`,
      );
      await you.say_and_wait(
        `说起来，之前引退的${maru.uma_sex_title}现在朝着训练员的方向努力了。`,
      );
      await maru.say_and_wait(`向着训练员努力也是一条道路。`);
      maru.print(`看来${maru.sex}终于找准自己的目标了。`);
      maru.print(`……心突然疼了一下。`);
      await you.say_and_wait(
        `或许有些人天生不适合某个领域，不过重新思考自己拥有的资源并向着其他的方向努力，说不定会有很大的惊喜在等着呢！`,
      );
      maru.print(`不知道该说些什么比较好，于是我保持着沉默。`);
      maru.print(
        `离特雷森学院还有一条街的距离，像是举办着什么活动一样，欢笑声传到了我的耳中。`,
      );
      maru.print(`奇怪，平时的特雷森有这么吵闹吗？`);
      maru.print(`这就是 ${callname} 准备的礼物。`);
      maru.print(`真是的，走了这么远的弯路呢。`);
      await maru.say_and_wait(`一起去看看吧？`);
      maru.print(`就这么拉着 ${callname} 向着特雷森跑去。`);
      maru.print(`像这样快乐的奔跑，有些怀念呢。`);
      maru.print(`顺着声音振幅的方向，我们慢慢走向了训练场所在的位置。`);
      maru.print(
        `就像是节日庆典一样，训练员与${maru.uma_sex_title}们谈笑着或在草场之上挥洒起了自己的汗水，或在观众席上交谈着，欢呼着。`,
      );
      maru.print(
        `理事长和骏川${
          maru.adult_sex_title
        }注意到了你们的到来，前者打开写着「愉！悦！」的纸扇，后者对你们报以微笑，顺带一提，理事长头上的小猫惬意的甩动着尾巴。`,
      );
      maru.print(`无论是谁，脸上都挂着满足的笑容。`);
      maru.print(`就像在享受着庆典一样。`);
      await maru.say_and_wait(`真是怀念呢。`);
      maru.print(`我的世界曾经充满了色彩。`);
      maru.print(`幼时所目睹的大红色超级跑车，帅气的外型深深吸引了当时的我。`);
      maru.print(`我听到了它的呢喃，似乎和我一样，渴望着自由的奔跑。`);
      maru.print(`于是幼时的我暗暗发誓，将来买车时，一定要选择这辆车。`);
      maru.print(
        `为了迎接与它共鸣的那天到来，一边看着目录上的照片，一边努力练习着驾驶技术。`,
      );
      maru.print(`拿到驾照的那一天，亲手接过自己的驾照。`);
      maru.print(`恍惚梦境般的不真实感，一遍遍地确认着现实的存在。`);
      maru.print(
        `训练时经历过的酸甜苦辣，除了获得的喜悦之外，犹豫与迷茫也悄然而至。`,
      );
      maru.print(
        `也许这样的我，一定是最幸福的状态吧？不，虽说现在的每一天也过得非常快乐就是了。`,
      );
      maru.print(
        `比起胜利之后的荣誉，在赛前分享着最近的消息，在草地上挥洒汗水的奔跑，急促的呼吸刺激着双腿爆发出更强的力量。`,
      );
      maru.print(`直到达到那个————只有三女神才知道的世界。`);
      maru.print(
        `如果所有人都能感受到奔跑的快乐的话，我的理想世界也不远了吧。`,
      );
      maru.print(`然而，理想与现实可能永远存在矛盾。`);
      maru.print(
        `很多${maru.uma_sex_title}在感受到这份快乐之前，就被层层围绕的荆棘扯住了衣服，拖住了步伐。`,
      );
      maru.print(`呼喊着，祈祷着有人能帮助${maru.couple_title}。`);
      maru.print(
        `然而，唯一的解决方法却只有${maru.couple_title}自己领悟到才能挣脱。`,
      );
      maru.print(
        `祈祷着，祈祷着${maru.couple_title}能原谅着缺乏才能的自己，卸下那份沉重的负担（日夜诅咒着无能的自己）。`,
      );
      maru.print(`于是，难以言及的悲伤变成了悲伤的黑白二色。`);
      maru.print(`在我的世界里默默矗立着，像一座缄默的城墙，灰色的幽灵。`);
      maru.print(`像幽灵一样回荡着，徘徊着，呐喊着。`);
      maru.print(`既是为了迷茫的${maru.uma_sex_title}们，也是为了我自己。`);
      maru.print(`来自后辈的崇拜，在草地上所感受到的风，令人怀念的过往。`);
      maru.print(
        `然而，一味沉湎在过去的回忆之中，榨取名为悔恨的快感，这是不对的。`,
      );
      maru.print(`所以，我决定试着向未来前进。`);
      maru.print(`我所选择的道路是否是正确的，自己也不知道。`);
      maru.print(
        `……也许，也许的话，在过去的摇篮曲中等待着机会的到来才是正确的。`,
      );
      maru.print(`像这样的自己，准备不足，觉悟也只是激情的产物。`);
      maru.print(`或许，会在某个偏僻的小道上遇到抛锚的烦恼也说不定。`);
      maru.print(`什么才能救赎这一切呢？\n`);
      maru.print(`意义，这就是我找到的答案`);
      maru.print(
        `『在未来的某个时刻，我做了什么』,这个意义足以救赎我之后可能会受到的可怕的事情。`,
      );
      maru.print(
        `不是以自己的角度来看待，因为人类从来都是承载着时间流向某个地方的运输工具。`,
      );
      maru.print(`世界啊，你是如此的美丽。`);
      maru.print(
        `既不是为了自己的欲望，也并非为了他人而前进，我以风的视角来看着眼前的${maru.uma_sex_title}。`,
      );
      maru.print(`我愿化作微风，不，我（微风）在时间上凝刻了自己的意义。`);
      maru.print(`不论结局如何，风都永远与我相伴。`);
      maru.print(`得赶快回到训练员的身边才行呢。`);
      await maru.say_and_wait(`必须让训练员看到脱胎换骨的自己才可以呢♪`);
      maru.print(`这样真的好吗？`);
      await maru.say_and_wait(`我不想背叛自己的内心，所以说，已经足够了。`);
      await maru.say_and_wait(
        `也要挣扎着，用尽最后的力气再试一次，这一次，只为了心中吹拂的风。`,
      );
      maru.print(`这就是你的美学吗？`);
      await era.printAndWait(
        `叹息的${maru.name}就此消逝，新生的自我重新搅动了周围的空气。`,
      );
      await era.printAndWait(
        `像轻柔的风一样，想快点赶到有着暖洋洋的笑容的那个人的身边。`,
      );
      await era.printAndWait(`那一天，温柔的风诞生了。`);
      era.drawLine();
      await era.printAndWait(`你忐忑不安的等待着${maru.name}的反应。`);
      await era.printAndWait(
        `悲伤？痛苦？释然？贫乏的词汇无法形容眼前的${maru.teen_sex_title}心中所想。`,
      );
      await era.printAndWait(
        `时间像是蜗牛爬行的痕迹，又像是飞机留下的轨迹云一样。`,
      );
      await era.printAndWait(`然而，此刻只能等待。你这么对心中的恐惧说道。`);
      await era.printAndWait(
        `命运的齿轮不是从犯错的那一刻就结束了，犯错后的自己接下来打算做些什么才是最重要的。`,
      );
      await era.printAndWait(
        `正因为得到了无论何时都会隐隐作痛的教训，所以才对世界有了更深的领悟。`,
      );
      await era.printAndWait(`如果是 ${maru.name} 的话，一定会想到类似的。`);
      await era.printAndWait(`就这么收拾好一切，面对接下来的事物。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = '万圣节';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`在深海之中苏醒的我，眼前除了黑暗什么也看不见。`);
      await era.printAndWait(
        `意外的是，依然能够自由的呼吸，依然能感受到自己的心跳。`,
      );
      await era.printAndWait(`出口在哪里？我该怎么办？我是不是要死了？`);
      await era.printAndWait(
        `诸如此类的问题徘徊在脑海里，几乎把自己的意识吞没。`,
      );
      await era.printAndWait(`然而，袖口传来了冰凉的摩擦感。`);
      await era.printAndWait(
        `像是强迫我前进一样，我被风带离了深海之中，飞向了天空。`,
      );
      era.printButton(`「唔，又做噩梦了。」`, 1);
      await era.input();
      await era.printAndWait(`从噩梦之中惊醒，才发觉背后已经湿透了。`);
      await you.say_and_wait(`为什么？`, true);
      await era.printAndWait(
        `清晨的阳光透过窗帘洒在了枕头上，在光线的作用下，就连平时忽略不见的灰尘都变得闪耀起来。`,
      );
      await you.say_and_wait(
        `黑色的海洋，不知何时吹拂的风，某个人的存在。`,
        true,
      );
      await era.printAndWait(
        `努力回忆着之前支离破碎的片段，心里不知何时觉得这件事很重要，莫名的不安从心底升起。`,
      );
      await you.say_and_wait(`下次还是不看那种B级片了。`, true);
      await era.printAndWait(
        `突然觉得对这种奇怪的事情莫名认真的自己很好笑，摇了摇头后准备穿起衣服。`,
      );
      await maru.say_and_wait(`咚咚咚。`);
      await era.printAndWait(`门口传来了敲门声。`);
      if (era.get('love:4') >= 75) {
        await maru.say_and_wait(`哈喽～${callname}，起来了吗？`);
        await you.say_and_wait(`马上过来。`);
        await you.say_and_wait(`已经习惯在${maru.name}家住下了吗。`, true);
        await era.printAndWait(`叠好被子，穿起衣服就开始准备工作。`);
      } else {
        await maru.say_and_wait(`哈喽～${callname}早上好？`);
        await era.printAndWait(`${maru.name}如往常一样来到了训练室。`);
      }
      await era.printAndWait(`新的一天开始了。`);
      era.drawLine();
      await era.printAndWait(
        `将最后一份文件收进了文件夹之中，今天的日程算是告一段落了。`,
      );
      await maru.say_and_wait(`辛苦了。`);
      await era.printAndWait(`坐在旁边的${maru.name}将咖啡递到了桌上。`);
      await you.say_and_wait(`非常感谢。`);
      await era.printAndWait(
        `不是什么名贵的品牌，只是店铺里常卖的那种速溶咖啡。`,
      );
      await era.printAndWait(
        `虽然之前也品尝过品质更好的咖啡甚至是红茶，不过总是喝不习惯。`,
      );
      await era.printAndWait(
        `最后只能用便利店的咖啡是三女神赋予人类的宝物来安慰自己。`,
      );
      await maru.say_and_wait(`${callname}今晚有什么计划吗？`);
      await era.printAndWait(`伸着懒腰的${maru.name}从沙发上站了起来。`);
      await you.say_and_wait(`计划？`);
      await era.printAndWait(`脑海中快速回忆了一遍，似乎没有疏漏的事情。`);
      await you.say_and_wait(`接下来的话，准备提高耐力的训练吧？`);
      await era.printAndWait(`参加长距离比赛耐力也是很重要的事情。`);
      await maru.say_and_wait(
        `受不鸟了。耐力训练确实也很重要，不过${callname}是不是忘记了什么呢？`,
      );
      await you.say_and_wait(`……？`);
      await maru.say_and_wait(
        `去年约定好了一起去参加万圣游行的事情，${callname}应该还记得吧？`,
      );
      await era.printAndWait(
        `看着一脸疑惑的 ${you.name}，${maru.name}最终还是说了回来。`,
      );
      await you.say_and_wait(`好像确实说过这件事。`, true);
      await era.printAndWait(
        `翻开手机备忘录，向下滑动了一会才发现，在去年万圣节当晚记录下来了这件事。`,
      );
      await you.say_and_wait(`我还真是健忘啊。`);
      await era.printAndWait(
        `因为遇到了更加重要的事情，所以优先度不高的事情暂时放到了一边吗。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await you.say_and_wait(`一起出发吧。`);
      await era.printAndWait(
        `${you.name}轻轻牵起了${maru.name}的右手，带头离开了训练室。`,
      );
      await maru.say_and_wait(`就酱紫在万圣集会上打个酱油吧♪`);
      await era.printAndWait(
        `${maru.name}清脆的笑声顺着被风吹拂着的发丝，将愉悦的情绪传达到了训练室中。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '圣诞节';
    /**
     * 结局分支：姐姐的烦恼+少女的忧郁全部触发，风值=15->GE，15>风值>=10->TE
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `已经到12月了吗，${you.name} 停下手中的笔，看向窗外的雪花.`,
      );
      await era.printAndWait(`特雷森每年这个时期都额外的寒冷啊.`);
      await era.printAndWait(
        `${you.name}摇了摇头,正准备将注意力重新集中在手中的文件时.`,
      );
      await maru.say_and_wait(`哼哼哼♪`);
      await maru.say_and_wait(`哈喽————${callname}。`);
      await era.printAndWait(
        `随着门把手的转动，那位令 ${you.name} 心醉的${maru.teen_sex_title}打开了门.`,
      );
      await maru.say_and_wait(
        `${callname}节日也不松懈呢，${
          maru.sex_code !== 1 ? '美眉' : '帅锅'
        }偶稀饭这样努力的人哦♪`,
      );
      await era.printAndWait(
        `被突然闯进来的 ${maru.name}吓得笔都掉到地上了，慌慌张张捡起来的${you.name}没好气的回呛着。`,
      );
      era.printButton(`「${maru.name}是打算和我约会吗?」`, 1);
      await era.input();
      await era.printAndWait(`不料，${maru.name}看起来更开心了。`);
      await maru.say_and_wait(
        `呵呵～原来${callname}这么希望和我约会吗?啊啦♪${
          maru.sex_code !== 1 ? '美眉' : '帅锅'
        }我的魅力真是惊人呢⭐`,
      );
      await maru.say_and_wait(`既然${callname}都邀请我了,那么现在就出发吧！`);
      era.drawLine();
      await maru.say_and_wait(
        `我倒，和${callname}像这样走在步行道上也不错呢。`,
      );
      era.printButton(`「啊啊……好耀眼」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}与换上了冬装的${maru.name}走在大街上,本就美丽的${
          maru.sex
        }在换上了精心挑选的衣服之后独特的气质深深抓住了${you.name}的心.`,
      );
      await era.printAndWait(
        `游客A:这位是${maru.name}吧?我在电视上看过${maru.sex}的跑步.`,
      );
      await era.printAndWait(
        `游客B:是${maru.name}!我是${you.name}的粉丝!请务必给我签名!`,
      );
      await maru.say_and_wait(`哎呀,原来我已经这么出名了吗?`);
      await era.printAndWait(`不妙,好像越来越多的人注意到${maru.sex}的到来了`);
      await era.printAndWait(`${maru.name}的魅力似乎也将无关人员也牵扯进来了,`);
      era.printButton(`(才不能让你们打扰和${maru.name}共处的时光呢)`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}握紧${maru.name}逐渐温暖起来的小手，加快步伐试图甩开那些追星的粉丝们`,
      );
      await maru.say_and_wait(`……呵呵♪`);
      await era.printAndWait(
        `你们好不容易才甩开了紧紧追在后面的粉丝群后,才发觉自己来到了市中心公园`,
      );
      await era.printAndWait(
        `比起上气不接下气的${you.name},身为赛${maru.uma_sex_title}的${
          maru.sex
        }似乎连呼吸都没有打乱节奏.`,
      );
      await era.printAndWait(`————比起平时的训练,这连开胃小菜都算不上.`);
      await you.say_and_wait(`呼……呼……呼啊,总算甩开他们了吧`, true);
      await maru.say_and_wait(`${callname},这里好像很安静呢.`);
      await era.printAndWait(
        `相互交织的LED灯缠绕在道路两旁的树木上,从你们的身后向前方无限延伸.`,
      );
      await era.printAndWait(
        `彩灯照亮了圣诞之夜,也为12月的寒风带来了一丝温暖和光明.`,
      );
      era.printButton(`「是啊,这里真是一个约会的好地方啊」`, 1);
      await era.input();
      await maru.say_and_wait(
        `平安夜的话，训练员${you.adult_sex_title}♪……不想和最喜欢的人一起分享慢慢流逝的时光吗?`,
      );
      await you.say_and_wait(
        `都说到这份上了，再不向前踏出这一步那就太失礼了！`,
      );
      await maru.say_and_wait(`哼哼～所以${callname}的回答是?`);
      era.printButton(`${maru.actual_name_with_title}，请和我约会!`, 1);
      await era.input();

      await maru.say_and_wait(
        `啊啦～${callname}可真有勇气呢,虽然我也想就这么顺着气势答应下来,不过————`,
      );
      await era.printAndWait(`在刚刚的奔跑中 ${you.name} 的头发变得乱糟糟的`);
      await maru.say_and_wait(
        `${callname}的样子可真可爱呢，与其约会不如先把头发梳理一下吧`,
      );
      era.printButton(`「啊hao」」`, 1);
      await era.input();

      await era.printAndWait(
        `还没有等${you.name}回复${maru.name}就从自己的挎包中取出了梳子`,
      );
      await maru.say_and_wait(`${callname}把头低下来`);
      await era.printAndWait(
        `${you.name}乖乖顺从${maru.name}的意图将头低了下来.`,
      );
      await maru.say_and_wait(
        `嗯……${you.name}的头发有些干燥呢,${callname}真是辛苦了.`,
      );
      await era.printAndWait(
        `${maru.sex}尽可能控制住力度温柔的梳理着${
          you.name
        }的头发,那温暖而感怀的气息让${
          you.name
        }回忆起了小时候在草地上晒太阳的气息.`,
      );
      await maru.say_and_wait(
        `……这样的话就差不多了♪那么，${callname}，今天的约会就还请多多指教了.`,
      );
      era.printButton(`「我这边也是请多多指教了」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} 紧紧地握住了 ${maru.name} 的左手,慢慢地享受着着片刻的甜蜜时光.`,
      );
      await maru.say_and_wait(
        `话说回来,这里似乎是本周最受欢迎的情侣打卡圣地呢.`,
      );
      era.printButton(`「难怪一路上都是成双成对的情侣呢」`, 1);
      await era.input();

      await maru.say_and_wait(`呵呵♪下次圣诞的话我们也来这里看风景吧.`);
      await maru.say_and_wait(
        `${callname},那个时候，风景一定会比现在还要美丽。`,
      );
      await era.printAndWait(
        `12月的寒风仿佛见证了${you.name}和${maru.name}之间的亲密关系.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '有马纪念前・最盛大的舞台';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `有马纪念是日本赛事之中最盛大的一场，众多的赛${maru.uma_sex_title}通过投票获得出场许可。`,
      );
      await era.printAndWait(
        `被称为「Super Car」的拥有众多人气的${maru.name}自然也达到了入场的许可。`,
      );
      era.drawLine({ content: '准备室中' });
      await maru.say_and_wait(`${callname}，这下要让后辈们好好看着我的背影哦`);
      era.printButton(`「唔」`, 1);
      await era.input();
      await era.printAndWait(
        `在${maru.name}摆脱阴影之后，以国内最大的舞台——有马纪念为目标，你们开始了练习。`,
      );
      await era.printAndWait(
        `作为少数在经典年就掌握了领域的${maru.uma_sex_title}，或许在参加经典年限定的赛事能稳压一头，不过在强敌如云的有马纪念上`,
      );
      await you.say_and_wait(`只要${maru.name}高兴就好了`, true);
      await era.printAndWait(`这么想着，最后确认了没有遗漏之后。`);
      await era.printAndWait(`嘴唇传来了湿润的触感。`);
      await maru.say_and_wait(`这样的话油门也加满了`);
      await maru.say_and_wait(`那么，${callname}我出发了。`);
      await era.printAndWait(
        `带着${maru.name}独有的活力，${maru.sex}走上了赛场。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '有马纪念后・希望的辉光';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `在有马纪念上披荆斩棘战胜了众多强敌后，${maru.name} 取得了有马纪念的胜利`,
      );
      await you.say_as_passer_by_and_wait(
        `记者A`,
        `恭喜 ${maru.actual_name_with_title}取得了有马纪念的胜利，战况真是激烈呢。`,
      );
      await maru.say_and_wait(
        `是啊，选手们个个都是实力派呢，拜此所赐我也跑的很开心呢`,
      );
      await you.say_as_passer_by_and_wait(
        `记者A`,
        ` ${maru.name} 有什么感想吗？`,
      );
      await maru.say_and_wait(
        `如果能让更多的 ${maru.uma_sex_title} 们看到我的背影然后产生追逐的想法就好了`,
      );
      await you.say_as_passer_by_and_wait(`记者A`, `真是非常远大的理想呢。`);
      await maru.say_and_wait(` ${callname} 这边`);
      await era.printAndWait(
        ` ${maru.name} 看到你的到来后将你拉到了记者面前。」`,
      );
      await you.say_as_passer_by_and_wait(
        `记者A`,
        `请问训练员${you.adult_sex_title}对 ${maru.name} 获胜有什么感谢吗？`,
      );
      era.printButton(`「比起胜利与否，${maru.name} 能够高兴才是最重要的」`, 1);
      await era.input();
      await maru.say_and_wait(
        ` ${callname} 真会说话～不过，没有 ${callname} 的鼓励的话，恐怕我也无法取得胜利呢。`,
      );
      await you.say_as_passer_by_and_wait(
        `记者A`,
        `真是令人感动的羁绊，感谢两位接受我的采访。`,
      );
      await maru.say_and_wait(`今天去哪里大吃一顿庆祝一下吧`);
      await you.say_and_wait(`果然还是露出笑脸的 ${maru.name} 最棒了`, true);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '有马纪念后・最大的舞台！';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`等候室\n`);
      await you.say_and_wait(`感觉怎么样？`);
      await maru.say_and_wait(
        `一起奔跑的赛 ${maru.uma_sex_title} 都是以最强赛${maru.uma_sex_title} 为目标的${maru.uma_sex_title}，能与${maru.couple_title}奔跑也很开心呢。`,
      );
      await you.say_and_wait(`满足了吗？`);
      await maru.say_and_wait(
        `虾米？能比这更大的赛事也只有凯旋门了吧。我喜欢这种感觉哦？`,
      );
      await you.say_and_wait(`等到资深年结束后，第二年夏天去法国参加比赛吧？`);
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? '美眉' : '帅锅'}我也是这么想的呢。`,
      );
      await maru.say_and_wait(`接下来也一起努力吧！`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拜';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `为了迎接新年，${you.name} 和 ${maru.name} 一起去新年参拜.`,
      );
      await era.printAndWait(
        `实际上也不是为了遵循传统，单纯的只是想要谋求好运气罢了。`,
      );
      await maru.say_and_wait(
        `果然新年还是在神社祈福对吧？这样比较有新年的感觉呢～！`,
      );
      await maru.say_and_wait(
        `一年之计在于春，向三女神大人献上一年份的汗水与努力吧！`,
      );
      era.printButton(`「接下来的目标是什么？」`, 1);
      await era.input();
      await maru.say_and_wait(`呵呵～我的目标是——今年也能参加许多有趣的比赛！`);
      await maru.say_and_wait(
        `而且为了让大家都来追逐我的背影，所以我要比之前更～加大显风采！`,
      );
      era.printButton(`「我会好好协助${you.name}的！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}真可靠呢～${maru.elder_sibling_sex_title}我很稀饭这种感觉哦？`,
      );
      await era.printAndWait(`话说回来，接下来努力的方向是?`);
      era.println();
      era.printButton(`「基本的健康管理！」（体力+600）`, 1);
      era.printButton(`「大概是各方面都很均衡的训练吧！」（全属性+10）`, 2);
      era.printButton(`「应该是磨练自己的长处吧！」（技能点数+100）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            '俗话说『居移气，养移体』，注意身体健康确实很重要呢.',
          );
          await maru.say_and_wait('决定了！接下来的目标是身体健康管理！');
          await maru.say_and_wait('好了，赶快进去吧！');
          break;
        case 2:
          await maru.say_and_wait(
            '原来如此！只要各方面都平均训练的话，就能比之前更上一层楼吧！',
          );
          await maru.say_and_wait(
            '好，包在我身上！我在训练的时候也会更加注意这一点的！',
          );
          await maru.say_and_wait('那么，已经决定好的话，就赶快进去吧！');
          break;
        case 3:
          await maru.say_and_wait('说到我的长处的话，果然还是驾驶技术吧？');
          await maru.say_and_wait('才怪～我在开玩笑呢！是要磨砺跑步技能对吧?');
          await maru.say_and_wait('OK！训练的时候我也会注意这一方面的.');
          await maru.say_and_wait('嗯，稍微耽搁了一下下呢，赶快进去吧！');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '情人节';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`给，这是${callname}的那份。`);
      await era.printAndWait(
        `在${you.name}的建议下，今年的情人节${you.name}们决定在训练室里独自两人举办派对。`,
      );
      era.printButton(`「谢谢」`, 1);
      await era.input();
      await era.printAndWait(
        `轻轻解开作为装饰的丝带，将手提包型的巧克力盒打开。`,
      );
      await era.printAndWait(
        `装满了液体巧克力的郁金香杯，以奶油为夹层，上层则是一层厚厚的草莓汁，以及作为点缀的樱桃、薄荷叶与桑葚。`,
      );
      await era.printAndWait(
        `系在杯肚上的黑色蝴蝶结散发着若有若无的粉红色背景。`,
      );
      await maru.say_and_wait(
        `之前一直探索着为了什么而奔跑，而现在奔跑的意义又多了一个。`,
      );
      await maru.say_and_wait(`接下来也要一直支持我哦？${callname}`);
      era.printButton(
        `「那我就心怀感激的收下了,谢谢${you.name}${maru.name}」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `啊，对了!我听小特${maru.couple_title}说百货大楼有家店铺情人节的时候如果双方是情侣的话拍照打卡可以打六折呢.`,
      );
      await era.printAndWait(`${callname}有兴趣吗?`);
      era.printButton(`「没问题」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}和${maru.name}来到了百货大楼,在搜素了一点时间后看到了那家店铺.`,
      );
      await era.printAndWait(
        `可能是什么本周的打卡圣地吧,门口排起了长队,看这样子似乎都是情侣.`,
      );
      await maru.say_and_wait(
        `好多人啊,小特${maru.couple_title}果然没有说错呢,应该就是这家了`,
      );
      await era.printAndWait(`那么我们也去排队吧.`);
      await era.printAndWait(
        `${maru.name}挽住${you.name}的胳膊，混入了情侣之中。`,
      );
      await era.printAndWait(`服务员:两位客人是打算购买情侣特惠套餐吗?`);
      await era.printAndWait(
        `服务员:不过因为听说这里有优惠的原因,有很多贪小便宜的顾客过来,导致真正想要买这份套餐的情侣反而买不到呢`,
      );
      await era.printAndWait(
        `服务员:我们也很头疼呢,不过最后店主想到了一个好主意.`,
      );
      await era.printAndWait(`服务员:请二位来一个浪漫的kiss吧.`);
      era.printButton(`「k……kiss?!」`, 1);
      await era.input();

      await era.printAndWait(
        `服务员:接吻不是很浪漫的事情吗?不仅可以表达您对伴侣的爱意,那些贪图小便宜的人听到要接吻也纷纷逃跑了呢.`,
      );
      await era.printAndWait(`服务员:如果是情侣的话没有什么好害羞的吧.`);
      await era.printAndWait(
        `服务员锐利的视线让${you.name}压力越来越大,${you.name}看向${
          maru.name
        }，虽然${maru.sex}强装着镇定,不过剧烈摆动的尾巴还是出卖了${maru.sex}.`,
      );
      era.printButton(`「只有这么办了」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `${you.name}搂住了${maru.name}的腰,轻抚${
          maru.sex
        }的脸庞,然后心一横亲了过去.`,
      );
      await era.printAndWait(
        `先是试探性的轻吻,随着气氛的不断高涨${you.name}也加快了速度,炽热的爱意最后化为了重重地深吻.`,
      );
      await era.printAndWait(
        `${maru.sex}的嘴唇仿佛散发着苹果的芳香,吸引着采撷者的前来.${
          you.name
        }让自己的舌头探进了${maru.sex}的口腔,仔细地探求着每一寸的空间`,
      );
      await era.printAndWait(
        `每当${you.name}想碰碰${maru.sex}的舌头时,${
          maru.sex
        }不好意思退回去的样子却更加刺激了${you.name}的情欲.`,
      );
      await era.printAndWait(
        `不可以再继续下去了,但${you.name}的动作却无法停下.`,
      );
      await era.printAndWait(
        `在大脑因剧烈的刺激而一片空白时,${you.name}只想将这一刻化为永恒,${you.name}感到了幸福.`,
      );
      await maru.say_and_wait(`……${callname}`);
      await era.printAndWait(
        `服务员:呜啊,还真是炽热的吻,那么快请进,后面的顾客等不及了.`,
      );
      await era.printAndWait(
        `无暇顾及后面的顾客,${you.name}轻捧着${
          maru.sex
        }的脸颊,仿佛是世间唯一的至宝.`,
      );
      await era.printAndWait(
        `${maru.sex}的脸颊彻底变得通红,剧烈的心跳通过二人的近距离接触而传到了${
          you.name
        }的身上.`,
      );
      await era.printAndWait(
        `${you.name}握住了${maru.sex}的手,走向了空出来的座位.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `二人沉默着品尝同一份巴菲,颤抖的手臂暗示了主人的不平静`,
      );
      await era.printAndWait(
        `接下来该怎么道歉?${
          maru.sex
        }会不会就此与我断绝关系?恐惧与喜悦在${you.name}的脑海交锋,最后留下的却是`,
      );
      era.printButton(
        `「${maru.name}是否喜欢我,这没关系，但我喜欢${maru.sex}」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `在经过漫长的折磨后,这份巴菲终于见底了.你们沉默着离开了店铺,走在大街上，掠过河提，最后回到了训练室.`,
      );
      await maru.say_and_wait(`呐,${callname}。`);
      await era.printAndWait(`突然停下脚步的${maru.name}，抱住了${you.name}。`);
      await era.printAndWait(`嘴唇传来的湿润感觉，像是波纹一样扩散开来。`);
      await maru.say_and_wait(`接下来也请多指教❤`);
      await era.printAndWait(
        `从最初的错愕之中恢复过来的${you.name}，看着努力维持着大人充裕的${maru.name}。`,
      );
      await era.printAndWait(
        `对这副模样的${maru.name}感到好笑，却又觉得这样的${maru.sex}实在可爱，像是丝线交织而成的丝绸轻轻铺在了心上。`,
      );
      era.printButton(`「心情真是复杂呢。」`, 1);
      await era.input();
      await era.printAndWait(
        `在星空与霓虹灯的照耀下，两人的手紧紧握在了一起。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_9: (() => {
    const title = '焱炎';
    /**
     * 皇帝与丸善斯基见面，想让丸善斯基看到不同的风景
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`漫长的寒冬终于过去，春风再次吹拂着特雷森。`);
      await era.printAndWait(
        `在经历了苦痛与迷茫之后，重新向着自己所选的方向奔跑的你们——`,
      );
      await era.printAndWait(`与期待已久的鲁铎象征。`);
      await emperor.say_and_wait(`终于等到这一刻了。`);
      await era.printAndWait(`带着轻松的脚步，皇帝来到了训练场。`);
      await emperor.say_and_wait(`看来之前争论的结果，最后是我赢了。`);
      await emperor.say_and_wait(
        `从地狱深处爬出来的感觉怎么样？${maru.name}。`,
      );
      await era.printAndWait(
        `无视了周围的一切，皇帝径直的走向了${maru.name}。`,
      );
      await maru.say_and_wait(
        `虽然度过了一段艰难的时光，不过品尝到了刻苦的快感呢。`,
      );
      await emperor.say_and_wait(`哦？地狱的熊熊烈火没有将你焚烧殆尽吗？`);
      await maru.say_and_wait(`穿过地狱的路离伊甸最近哦♪`);
      await emperor.say_and_wait(`……我真是越来越期待了。`);
      await maru.say_and_wait(`可以当作是夸奖我吗！3q`);
      await emperor.say_and_wait(`……3q吗？Thank you 呵呵。`);
      await emperor.say_and_wait(
        `言归正传。既然你已经做好了要成为${maru.uma_sex_title}们心中的偶像，想必你已经做好了粉身碎骨的准备吧。`,
      );
      await emperor.say_and_wait(`你是出于爱才做出的行为吗？`);
      await maru.say_and_wait(
        `虽然无法肯定自己所做的事一定是正确的，但有一点我很清楚`,
      );
      await maru.say_and_wait(`为此奋斗的每一天，我都很幸福⭐`);
      await emperor.say_and_wait(
        `既然你已经找到了自己的路，那就到时候再见吧。`,
      );
      await era.printAndWait(`皇帝说完便离开了训练场。`);
      era.printButton(`「终于要与皇帝对决了吗？」`, 1);
      await era.input();
      await maru.say_and_wait(`能够和会长对决，说不定也是非常有趣的展开呢。`);
      await maru.say_and_wait(
        `在这份最盛大的舞台之上，说不定会让人牙齿都发颤的激动在等着我呢。`,
      );
      await maru.say_and_wait(`一起努力吧，${callname} ♪`);
      await era.printAndWait(`为此，下一个目标已经决定了。`);
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '大阪杯前・柔和之风';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`与皇帝之间的对决即将在大阪杯开始`);
      await era.printAndWait(`媒体将这件事渲染为王道与霸道之间的对决。`);
      await era.printAndWait(`大阪杯的关注人数已经远远超越了去年的有马纪念。`);
      await era.printAndWait(
        `站台上全是关注这场传奇大赛的粉丝，甚至连过道都占满了人。`,
      );
      era.drawLine({ content: '准备室中' });
      await maru.say_and_wait(`哼哼哼～`);
      await era.printAndWait(`如此紧张的时刻${maru.name}依然相当从容。`);
      era.printButton(`「${maru.name}，这次一定会跑的非常开心」`, 1);
      await era.input();
      await era.printAndWait(
        `没有比皇帝登场更能让${maru.name}对比赛感到兴奋的事情了。`,
      );
      await maru.say_and_wait(`那么，一切都准备OK了。`);
      await maru.say_and_wait(`现在该去享受更加盛大的比赛了。`);
      await era.printAndWait(
        `正准备帮 ${maru.name} 开门的 ${you.name} 却碰到了同样的纤细小手`,
      );
      await era.printAndWait(
        `嘴唇传来了潮湿的气息，柔软的舌头相互交织在一起，又依依不舍的分开。`,
      );
      await maru.say_and_wait(`差点就忘了最重要的事情呢。`);
      await maru.say_and_wait(`${callname}一定要注视着我哦。`);
      await era.printAndWait(`${maru.name}走向了赛场`);
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = '大阪杯结束后・风卷残云';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} emperor 皇帝（鲁铎象征）
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await maru.say_and_wait(`哈啊，哈啊，哈啊。`);
      await maru.say_and_wait(`赢了吗？`, true);
      await era.printAndWait(
        `与皇帝之间的对决，最终以 ${maru.name} 获胜告一段落。`,
      );
      await you.say_and_wait(`真是精彩的比赛，冷汗都不知不觉流了下来。`);
      await era.printAndWait(
        `在奔腾的马群之中找到最合适的位置，冲刺之时理所应当应该在最前面——。`,
      );
      await era.printAndWait(`但就差一点，就会超过 ${maru.name} 了。`);
      await era.printAndWait(`……即使如此，`);
      await maru.say_and_wait(
        `应该说是兴奋还是恐惧呢？能踩中怪物影子的 ${maru.uma_sex_title}，你还是第一个呢小鲁铎♪`,
      );
      await era.printAndWait(
        `似乎对终于遇到能追上 ${maru.sex} 的脚步而感到了满足的 ${maru.name} 露出了笑容。`,
      );
      era.drawLine();
      await emperor.say_and_wait(`……太好了。`);
      await era.printAndWait(
        `皇帝目不斜视地看着你们远去的背影，${maru.sex} 舔舐着自己的牙齿，一种狂喜油然而生。`,
      );
      await era.printAndWait(
        `皇帝未竟的事业太多，故仍需证明自己——证明 ${maru.sex} 独一无二，不止无敌于同世代，还能击溃过往的荣耀、镇压未来的荣光。`,
      );
      era.println();
      await emperor.say_and_wait(`丸善，你最好真能从一而终地贯彻你的理念。`);
      await emperor.say_and_wait(
        `还有——不要以王道自居。开拓者应当只受苦难，你伟大，便倒下，成为后来者向上的阶梯。`,
      );
      await emperor.say_and_wait(
        `为了日本赛 ${maru.uma_sex_title} 的未来——为了一个更强的皇帝。`,
      );
      await era.printAndWait(`为此……皇帝昂起头，居高临下地看着 ${maru.name}。`);
      era.println();
      await emperor.say_and_wait(
        `褪下你的教养、撕开你文明的包装！用尽一切方法，卑贱也罢、粗鲁也好，最好无所不用其极！！！`,
      );
      await emperor.say_and_wait(
        `再怎么难看也是被允许的。做好所有准备……在天皇赏秋，迎接吾（皇帝）的复仇。\n`,
      );
      await era.printAndWait(`说罢，和颜悦色的皇帝脚步轻盈，离开了赛场。`);
    };
    f.title = title;
    return f;
  })(),
  sank_hai_lose: (() => {
    const title = '大阪杯结束后・郁郁苍苍';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      await maru.say_and_wait(`没想到还是输给小鲁铎了呜呜——`);
      await era.printAndWait(`但是 ${maru.name} 却并没有想象之中消沉。`);
      era.printButton(`回去开反省会重新商量一下复仇战吧`, 1);
      await era.input();
      await era.printAndWait(`与皇帝之间的对决暂时告一段落。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '粉丝感谢祭';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `今天是粉丝感谢祭，是${maru.uma_sex_title}们为感谢粉丝们的支持进行表演的日子.`,
      );
      await era.printAndWait(
        `特雷森学院的各个地方都举行着由${maru.uma_sex_title}准备的活动.`,
      );
      await era.printAndWait(
        `难得空闲下来的 ${you.name} 也趁着这个机会到处走动,充分放松自己积累下来的压力.`,
      );
      await era.printAndWait(
        `${maru.name},作为${
          you.name
        }的担当${maru.uma_sex_title},现在正观看着后辈们的表演.`,
      );
      await era.printAndWait(
        `听到来者的脚步声,下意识扭头望去,向${you.name}露出了温柔的微笑.`,
      );
      await maru.say_and_wait(
        `${callname}也是来看${maru.uma_sex_title}们的表演吗?`,
      );
      era.printButton(`「点头」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}在${
          maru.name
        }身边站定,看着眼前舞台上的${maru.uma_sex_title}们努力着展现着自己最美好的一面.`,
      );
      await maru.say_and_wait(
        `后辈们看上去都活力四射的样子呢,${callname}也是这么想的吗?`,
      );
      era.printButton(
        `「${maru.couple_title}都是因为憧憬着${maru.name},希望能超越${
          maru.sex
        }的背影所以才拼命努力的」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`哎呀♪${callname}每次都能带给我意外的惊喜呢.`);
      await maru.say_and_wait(`那么,${callname},想看我上台表演吗?`);
      await era.printAndWait(
        `${maru.name}的尾巴不知不觉间缠绕住了${you.name}的大腿,所幸周围的观众被舞台之上的气氛所点燃没有注意到这边的小小动作.`,
      );
      await era.printAndWait(
        `${maru.name}似乎是察觉到了${you.name}的软肋,更加肆无忌惮的将整个身体贴在了${you.name}的手臂上.`,
      );
      era.printButton(`「${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `因为害怕两人之间传出不好的传闻而影响到${
          maru.sex
        }的前途还有${you.name}被解雇的未来,${you.name}的身体瞬间僵直了.`,
      );
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? '训·练·员·酱' : '训·练·员·君'}♪`,
      );
      await era.printAndWait(
        `${you.name}似乎觉得周围的目光都在看着${you.name},${you.name}开始觉得口干舌燥.`,
      );
      await maru.say_and_wait(
        `${
          callname
        }的这种反应看起来也很可爱呢.虽然很可惜,不过差不多轮到我上台演出了,请不要将视线从我这里移开哦.`,
      );
      await era.printAndWait(`再回神时${maru.sex}已经站在舞台之上了.`);
      await era.printAndWait(
        `${you.name}连忙向周围的游客借了一份荧光棒,跟随着粉丝的浪潮开始舞动起来.`,
      );
      await maru.say_and_wait(
        `享受着风,追逐着风的赛${maru.uma_sex_title},${
          maru.name
        },现在将向粉丝还有后辈们献上我的歌曲.`,
      );
      await era.printAndWait(`唱着古早乐曲的今日之星，`);
    };
    f.title = title;
    return f;
  })(),
  before_yasu_kin_s: (() => {
    const title = '安田纪念前・生机勃发';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}追逐着自由之风来到了东京赛马场`);
      await maru.say_and_wait(`今天的状态非常不错哦。`);
      await era.printAndWait(
        `帮${maru.name}抚平了衣服上突起的褶皱后，超级跑车已经准备就绪`,
      );
      await maru.say_and_wait(`后辈们现在也希望追逐着我的背影然后超越过去呢。`);
      await era.printAndWait(
        `相比于比赛的胜利，${maru.name}更希望亲爱的后辈们能超越自己与旧时代的荣耀`,
      );
      await maru.say_and_wait(`所以我现在也燃烧起来了呢。`);
      await maru.say_and_wait(`那么惯例的，${callname}。`);
      await era.printAndWait(
        `轻搂着${maru.name}纤弱的腰肢，你们沉浸在幸福的时刻之中`,
      );
      await maru.say_and_wait(`${callname}，要一直一直盯着我的背影看哦。`);
      await maru.say_and_wait(
        `看着其他${maru.uma_sex_title}的话，就算是${
          maru.elder_sibling_sex_title
        }我也会吃醋的。`,
      );
      era.printButton(`「我会一直看着你的」`, 1);
      await era.input();
      await maru.say_and_wait(`那么最后一次♪`);
      await era.printAndWait(`依依不舍的分别之后，${maru.name} 走向了赛场。`);
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = '安田纪念结束后・让人想奔跑的竞赛';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('准备室内');
      await maru.say_and_wait(` ${callname}，看到我精彩的背影了吗？`);
      await era.printAndWait(
        `安田纪念上，后辈的 ${maru.uma_sex_title}们似乎都受到了 ${maru.name} 背影的激励，开始以 ${maru.sex} 为目标不断向前奔跑着`,
      );
      await maru.say_and_wait(
        `后辈们也变得很厉害了呢，说不定哪天 ${maru.elder_sibling_sex_title} 我也要被后辈们超越然后咬着手帕一脸嫉妒地瞪着领奖台上的 ${maru.couple_title}看呢`,
      );
      await maru.say_and_wait(
        `为了安抚 ${maru.elder_sibling_sex_title} 我受伤的心灵，${callname} 今天和我一起睡吧`,
      );
      await you.say_and_wait(`比起这个 ${maru.name} 似乎很享受跑步的快乐呢`);
      await maru.say_and_wait(
        `诶，居然岔开话题，${callname} 对我的态度也变得这么冷淡了。`,
      );
      await maru.say_and_wait(
        `是不是我已经失去魅力了，这样下去的话要 ${maru.elder_sibling_sex_title} 我要被负心人抛弃了。`,
      );
      await maru.say_and_wait(` ${maru.elder_sibling_sex_title} 我好可怜啊`);
      await era.printAndWait(` ${maru.name} 现在也学会向你撒娇了`);
      await you.say_and_wait(`这个时候就应该`, true);
      await era.printAndWait(
        `右手轻轻搂住 ${maru.name} 的腰肢，再向其中注入深深一吻，左手不是抚摸着耳朵边的敏感地带`,
      );
      await era.printAndWait(
        `像是吸了猫薄荷的小猫一样，${maru.name} 现在彻底放松下来了。`,
      );
      await maru.say_and_wait(
        `回去的时候让你尝尝 ${maru.elder_sibling_sex_title} 的爱情便当吧♪`,
      );
      await era.printAndWait(
        ` ${you.name} 回忆起了松软奶酪与浇灌着蜂蜜的面包发出的香甜气息，以及 ${maru.name} 在晴朗的天空之下露出的笑容。`,
      );
      era.printButton(`「${maru.name} 的厨艺一直都是这么好呢」`, 1);
      await era.input();
      await era.printAndWait(
        `像是回忆起了什么一样，微笑之中露出了狡黠表情的 ${maru.name} 轻轻摆动着尾巴。`,
      );
      await maru.say_and_wait(`${callname} 接下来也一直做我的试吃员吧。`);
      await you.say_and_wait(`说起来的话，我明天想尝尝看中华料理。`);
      await maru.say_and_wait(`呵呵♪ ${callname} 就拭目以待吧。`);
      era.drawLine();
      await era.printAndWait(
        `等到晚上 ${maru.name} 从厨房将做好的包菜炒肉端上来之后，尚未动筷，那鲜美的气味便急不可耐的从鼻腔之中钻入，搅的馋虫从胃中勾了出来。`,
      );
      await era.printAndWait(
        `等到动筷之时，夹起一块猪肉，那嫩滑的感觉像是夹起了一块豆腐。放入口中，含有菜汁的猪肉在口中迸开，让人恨不得将舌头都吃下去。`,
      );
      await maru.say_and_wait(`味道怎么样？`);
      await era.printAndWait(
        `看着正大块朵颐的 ${you.name}，${maru.name} 露出了满意的笑容。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿开始';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `第三年的夏季合宿现在正式开始，带着与去年截然不同的心态，${you.name}和${maru.name}一起走向了沙滩.`,
      );
      await maru.say_and_wait(
        `呵呵♪今年也是把其他人都甩在身后了呢,${callname}.`,
      );
      await era.printAndWait(
        `身边的爱马依然喜欢抢在其他${maru.uma_sex_title}的前头到达沙滩。`,
      );
      await you.say_and_wait(`${maru.name}看上去心情不错啊`);
      await maru.say_and_wait(
        `啊啦,这不是当然的嘛，必须要把去年没有好好享受的青春今年全部弥补回来嘛.`,
      );
      await era.printAndWait(
        `${maru.name}似乎准备了黑色的泳装,配合${
          maru.sex
        }的身材似乎显得额外充满了魅力.`,
      );
      await you.say_and_wait(
        `平时的${maru.name}一直喜欢睡懒觉，今天反而是${maru.sex}来叫我起床的.`,
      );
      await maru.say_and_wait(
        `总之现在是好好享受集训时光的时间了!不过还是先把防晒霜涂好比较重要吧?`,
      );
      await maru.say_and_wait(
        `${callname}可以麻烦${
          you.name
        }帮我涂下防晒霜吗?今年的夏天比预想之中还要炎热呢。`,
      );
      era.printButton(`「我马上就过来」`, 1);
      await era.input();
      await era.printAndWait(`夏季集训就在这种轻松的气氛中开始了。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = '庙会';
    /**
     * 第三年庙会 应该以更轻松的感觉，漫步在小镇之中
     * 故地重游，心绪万千
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `去年这个时候，第一次领略了小镇的热情。同样也在这里，命运的轨迹就此改变。`,
      );
      await era.printAndWait(
        `青涩的自我，与手缝之中悄然流逝的时间化为了一路前行留下的痕迹。`,
      );
      await era.printAndWait(
        `看着再次拜访的小镇，心中涌动的情感比初次来访时更加复杂。`,
      );
      await era.printAndWait(
        `因为搞错了入口不得不重新确定方位，好心的店主送来的地图，盛大的节日演出。`,
      );
      await era.printAndWait(
        `跟随着人流向着记忆中的地方前进，往昔的记忆便如涓涓细流缓缓涌现。`,
      );
      await maru.say_and_wait(`${callname}。`);
      await era.printAndWait(`熟悉的身影于门口伫立。`);
      era.printButton(`「抱歉让${you.name}久等了。」`, 1);
      await era.input();
      await maru.say_and_wait(`我也是刚刚才到。`);
      await maru.say_and_wait(
        `捞金鱼、金苹糖、姻缘护身符，最后还有舞台之上的表演，这次要尽情的享受才不复此行！`,
      );
      era.printButton(`「一起出发吧」`, 1);
      await era.input();
      await era.printAndWait(`两人的手紧紧牵在了一起。`);
      await maru.say_and_wait(`今后也要像这样一直在我身边哦？`);
      await era.printAndWait(` ${maru.name}望了${you.name}一眼。`);
      await era.printAndWait(
        `${you.name}从牵着手的姿势转到了略微强硬的拉着对方前进。`,
      );
      await era.printAndWait(
        `没有预想之中的抱怨，${you.name}只是感到从手掌传来的力度越来越大，就像是被老虎钳狠狠夹住一样。`,
      );
      await era.printAndWait(
        `感到吃痛的${you.name}下意识望向了造成痛苦的根源，而 ${maru.name}露出了狡黠的笑容。`,
      );
      await era.printAndWait(
        `将作为大人的矜持彻底抛开，像小孩子一样胡闹玩耍。`,
      );
      await era.printAndWait(
        `意识到这样下去一定会输的${you.name}，加快了脚步。`,
      );
      await era.printAndWait(
        ` ${maru.name}的眼神之中吐露出的「想要跟现役的赛${maru.uma_sex_title}比赛跑步，${you.name}还要差了一百年呢」，以及因此故作充裕的将${you.name}的手放开，准备以优雅的脚步将${you.name}超越。`,
      );
      await era.printAndWait(
        `——但${you.name}轻轻环住了${maru.sex}的腰肢，带着充满爱意的眼神直直的盯着对方看去。`,
      );
      await maru.say_and_wait(`诶？训练员……${callname}，旁边还有人。`);
      await era.printAndWait(
        `周围的人虽然注意到了${you.name}们的亲密举动，但只当是热恋中的情侣所做的调情，偶尔也有认出了双方的游客，在注意到了什么之后便加快了脚步离开。`,
      );
      await era.printAndWait(`一时之间，周围只剩下了${you.name}们两人。`);
      await maru.say_and_wait(
        `哎呀哎呀，就像是少女漫画之中的跑出来的故事呢，${callname}已经不是那种16-17岁正处于青春期的小朋友了哦？`,
      );
      await era.printAndWait(
        `在这种暧昧的气氛中处于劣势的 ${maru.name}正试图重新占据主动权。`,
      );
      era.printButton(`「小孩又如何呢？」`, 1);
      await era.input();
      await era.printAndWait(
        `于是${you.name}轻轻在${maru.sex}的额头上轻啄一下，带着一种无法形容的畅快感看着对方，活像是抢到了玩具那副洋洋自得的神情。`,
      );
      await maru.say_and_wait(
        `——是啊，既然 ${callname}说出这种话来，想必已经做好了觉悟吧。`,
      );
      await era.printAndWait(
        `占了便宜正准备就此抽身的${you.name}突然重心不稳，坏绕着 ${maru.name}的手也随之一松。`,
      );
      await era.printAndWait(
        `随后便感觉到左耳所传来的甘甜的吐息声以及随之而来传导到全身的电流感。`,
      );
      await maru.say_and_wait(`——`);
      await era.printAndWait(
        `虽然还是平时的那种熟悉感，但在${you.name}听来却带着一缕恼怒与得意感。`,
      );
      await era.printAndWait(
        ` ${maru.name}的手指在${you.name}的胸口轻轻划过，修长的指甲恰到好处的既没有划破肌肤，${you.name}的身体因为恐惧与兴奋而微微颤抖。`,
      );
      era.printButton(`「接下来还有烟火晚会吧？如果不赶快过去的话，」`, 1);
      await era.input();
      await era.printAndWait(
        `「还不够」，${maru.name}的手指依然没有停止动作。`,
      );
      era.printButton(
        `「我想为了弥补去年的遗憾与 ${maru.name}一同拥有这段美好的回忆！」`,
        1,
      );
      await era.input();
      await era.printAndWait(` ${maru.name}终于停止了再进一步的动作。`);
      await maru.say_and_wait(`——抱歉了，姐姐我也是失态了呢。`);
      await era.printAndWait(
        `语气中没有一丝忏悔感，脸上却露出了只有充分享受了比赛后才会有的满足感。`,
      );
      await maru.say_and_wait(
        `一想到接下来要和 ${callname}所共同创造出的回忆以及在此之上所获得的更加强烈的满足感，姐姐我是不是有些贪得无厌了呢？`,
      );
      await maru.say_and_wait(
        `嗯——消极的情绪可是NG的！接下来的每分每秒留下令人深刻的回忆，对生命都是一种可耻的浪费！`,
      );
      await era.printAndWait(
        `祭典上传来的祭典音乐顺着风的载体传达到了${you.name}们耳边。`,
      );
      await era.printAndWait(`在天空中绽放的艳红色花朵预示着祭典最后的开始。`);
      await era.printAndWait(`然后 ${maru.name}挽住了${you.name}的胳膊。`);
      await era.printAndWait(`随后两人加快了脚步。`);
      await era.printAndWait(
        `最后${you.name}与 ${maru.name}享受着这份恋人之间独有的，无法衡量的氛围。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿结束·难忘的盛宴';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`今年夏季合宿过得的非常充实。`);
      await era.printAndWait(
        `除了在沙滩上打排球敲西瓜之类的日常运动，听着后辈${maru.uma_sex_title}们的烦恼然后准确给出建议也是享受的一环。`,
      );
      await era.printAndWait(`在夏季合宿的最后一天,你们参加了宿舍里的派对。`);
      await era.printAndWait(
        `特别周、千代王一脸崇拜的听着${maru.name}讲述自己这二年来的经验，草上飞也向${maru.name}发起了挑战。`,
      );
      await era.printAndWait(`直至深夜临近，大家才心满意足的解散。`);
      await you.say_and_wait(`夏季合宿也快结束了，接下来就是天秋了吧。`, true);
      await you.say_and_wait(
        `比起比赛的话，果然还是${maru.name}的笑脸最棒了。`,
        true,
      );
      era.printButton(`「好！回到特雷森后也要全力以赴。」`, 1);
      await era.input();
      await era.printAndWait(`自言自语打开房门后，`);
      await you.say_and_wait(`奇怪门没锁吗？`);
      await maru.say_and_wait(` ${callname} ♪`);
      await era.printAndWait(`门后出现的${maru.name}向你飞扑了过来。`);
      await maru.say_and_wait(`今天的话一起睡吧？`);
      await you.say_and_wait(`合宿的时候一起睡的话再怎么说也……`);
      await maru.say_and_wait(`已经和理事长${maru.adult_sex_title}说过了哦`);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 似乎在 ',
        you.get_colored_name(),
        ' 不知道的时候和理事长达成了什么协议。',
      ]);
      await maru.say_and_wait(
        `理事长也希望我们能好好享受青春的时光呢，所以 ${callname} `,
      );
      await era.printAndWait(`${maru.name}满脸通红的看着你。`);
      era.printButton(`「要上了」`, 1);
      era.printButton(`「还是算了吧」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`接下来请多多关照了♪`);
      } else {
        await maru.say_and_wait(
          `虾米？${callname}面对这样的美${maru.teen_sex_title}都提不起兴趣吗？${
            maru.elder_sibling_sex_title
          }我真的要怀疑自己的魅力了呢。`,
        );
        await era.printAndWait(
          `耷拉着耳朵的${maru.name}与平时看上去强烈的反差反而让你激起了施虐心。`,
        );
        await era.printAndWait(`强行压下去的性欲又被提了起来。`);
        await maru.say_and_wait(`那么接下来请多关照了，${callname}♪`);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_40: (() => {
    const title = '不给糖就捣蛋！';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`${callname}，起床了！`);
      await era.printAndWait(`耳边似乎传来了熟悉的声音.`);
      era.printButton(`「唔，再睡一会」`, 1);
      await era.input();
      await maru.say_and_wait(`马上就要九点了呢！`);
      era.printButton(`「什么九？嗯！」`, 1);
      await era.input();
      await era.printAndWait(
        `突然意识到即将发生什么的 ${you.name} 从床上瞬间弹起，紧紧忙忙的穿起衣服。`,
      );
      await you.say_and_wait(`这下要被手纲${you.adult_sex_title}说教了。`);
      await maru.say_and_wait(`呵呵～`);
      await era.printAndWait(
        `看着${you.name}慌慌张张起床的样子，${maru.name}轻轻的笑了。`,
      );
      await you.say_and_wait(`闹钟怎么没响？欸？`);
      await era.printAndWait(`手机上显示的时间为7点，距离上班还有1个小时。`);
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`不给糖就捣蛋！`);
      await you.say_and_wait(`唔——万圣节不是愚人节啊！`);
      await maru.say_and_wait(`我就想要${callname}给我糖嘛～`);
      await you.say_and_wait(`之后一起去糖果店看吧。`);
      await era.printAndWait(`不知何时两人的嘴唇再次贴在了一起。`);
      await maru.say_and_wait(`嗯——那就用这个稍微忍耐一下吧♪`);
      await era.printAndWait(
        `将两人的早餐端上餐桌的${maru.name}露出了可爱的笑容。`,
      );
      era.drawLine({ content: '训练室' });
      await you.say_and_wait(`这就是最后一份了。`);
      await maru.say_and_wait(`辛苦了！`);
      await era.printAndWait(
        `在一旁等待着的${maru.name}熟练的将文件收回文件夹之中。`,
      );
      await you.say_and_wait(`接下来的话。`);
      await maru.say_and_wait(`接下来的话？`);
      await you.say_and_wait(`好像……有什么重要的事情要做？`);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? '训·练·员·酱' : '训·练·员·君'}？`,
      );
      await era.printAndWait(
        `注意到耳朵向后背过去的${maru.name}，${you.name} 不由得心里发毛。`,
      );
      await you.say_and_wait(`快想想，忘了什么？啊，对了！`, true);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? '训·练·员·酱' : '训·练·员·君'}?`,
      );
      await era.printAndWait(
        `${maru.name}的语气逐渐加重，脸上的表情却没有丝毫的变化。`,
      );
      await you.say_and_wait(`一起去糖果店吧？`);
      await era.printAndWait(`平静的语气连自己都感到了害怕。`);
      await maru.say_and_wait(
        `是呢。哎呀～${maru.elder_sibling_sex_title}都差点忘了呢，真实多亏${callname}了♪`,
      );
      await era.printAndWait(
        `刚才的压迫感就像什么也没发生一样消失了，话说${
          maru.sex
        }什么时候可以将领域收发自如了？`,
      );
      await maru.say_and_wait(`一起出发吧？`);
      await you.say_and_wait(`不过出发之前还有一件事。`);
      await maru.say_and_wait(`嗯？`);
      await era.printAndWait(`嘴唇重合在了一起。`);
      await maru.say_and_wait(`唔——哈，哎哎哎？`);
      await era.printAndWait(`长达十五秒的深吻。`);
      await you.say_and_wait(`万圣节快乐！不给糖就捣蛋！`);
      await maru.say_and_wait(`欸？${callname}，我·改·变·想·法·了！`);
      await era.printAndWait(
        `比起柔软的感触 ${you.name} 更加在意${maru.name}即将说出口的话语。`,
      );
      await maru.say_and_wait(`今天晚上不会让${you.name}睡哦❤`);
      await era.printAndWait(
        `全身的力气似乎一瞬间全部消失了一样，浑身瘫软在了${maru.name}的怀抱中。`,
      );
      await maru.say_and_wait(`呵呵呵——现在还不是腿软的时候哦，${callname}。`);
      await era.printAndWait(`不知何时润湿的眼角，被${maru.name}轻轻擦去了。`);
      await maru.say_and_wait(`晚上也请多指教了，${callname}♪`);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '天皇赏秋前・伊甸之梦';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`与皇帝的第二次对决即将开始。`);
      await era.printAndWait(
        `作为 ${maru.name} 与皇帝之间的第二次对决，对于观众们来说是空前盛大的盛况。`,
      );
      era.drawLine({ content: '准备室中' });
      era.printButton(`「让我看到最棒的背影吧」`, 1);
      await era.input();
      await maru.say_and_wait(`能与小鲁铎同台竞技，毫无疑问是最棒的舞台♪`);
      era.printButton(`「有成功的把握吗？」`, 1);
      await era.input();
      await you.say_and_wait(
        `挑战赫赫有名的${maru.uma_sex_title}们，与${
          maru.sex
        }们交流，对抗，决定胜负。`,
      );
      await you.say_and_wait(`有成功的把握吗？`);
      await era.printAndWait(`${maru.name}沉默了一会后，给出了答案。`);
      await maru.say_and_wait(
        `${callname}对在赛场之中奔跑的${maru.uma_sex_title}们怎么看的呢？`,
      );
      await you.say_and_wait(`为了在赛场上胜利，背后付出了汗水与努力。`);
      await you.say_and_wait(`可是。`);
      await maru.say_and_wait(`是啊，只有一名${maru.uma_sex_title}能胜利。`);
      await era.printAndWait(
        `你的眼前再次浮现出了学生会办公室，正中央的那副名言。`,
      );
      await you.say_and_wait(`一马当先，万马齐喑。`);
      await maru.say_and_wait(
        `第一次见到的时候，我想了很久也没想明白该怎么理解。`,
      );
      await maru.say_and_wait(
        `那些默默努力的${maru.uma_sex_title}们，只是因为失败了，努力就全部都被否定了。`,
      );
      await maru.say_and_wait(
        `如果只有一名${maru.uma_sex_title}能够获胜的话，那么其他${maru.uma_sex_title}的努力不就全部白费了吗？`,
      );
      await maru.say_and_wait(
        `如果是注定失败的结局，那从一开始就放弃转向其他方向才是明智的选择吧？`,
      );
      await maru.say_and_wait(
        `——但是，奔跑才是${maru.uma_sex_title}的天性吧？`,
      );
      await maru.say_and_wait(`起跑前紧张的等待着发令枪的响起。`);
      await maru.say_and_wait(
        `奔跑中孤独面对未知的世界，但并没有想象中那么害怕。`,
      );
      await maru.say_and_wait(`冲刺时后方传来的阵阵踩踏声。`);
      await maru.say_and_wait(
        `想要超越前方的背影，想要跑得更快，想要比${maru.sex}迈的更远。`,
      );
      await maru.say_and_wait(`最后冲线的那一刻，反而不是那么重要了。`);
      await maru.say_and_wait(
        `抱着这样的想法，然后取得成功，就这样让后辈们在看不清前方的道路时，按照这条路。`,
      );
      await maru.say_and_wait(
        `被证明是可以走下去的道路，抱着试一试说不定能行的态度。`,
      );
      await maru.say_and_wait(
        `所以我的答案是——无论成败，这场冒险都有值得去做的理由。`,
      );
      await era.printAndWait(`宣布着比赛即将开始的广播响起。`);
      await maru.say_and_wait(`抱歉，一不小心就说的有点多了呢。`);
      await era.printAndWait(`稍微有点不好意思的${maru.name}脸红了。`);
      await era.printAndWait(`从招募${maru.name}开始经历了这么多的事件。`);
      await era.printAndWait(
        `哭泣也好，欢笑也好，哀怮也好，欢喜也好，信任也好，背叛也好。`,
      );
      await era.printAndWait(`已经全部经历过一边了。`);
      await era.printAndWait(`对于${maru.name}来说————`);
      era.printButton(`「一起出发吧。」`, 1);
      await era.input();
      era.printButton(`「让我们写下属于我们自己的故事吧。」`, 1);
      await era.input();
      await maru.say_and_wait(`……呵呵♪`);
      await era.printAndWait(`${maru.name}露出了笑容。`);
      await maru.say_and_wait(`无论接下来发生什么。你都要一直在我身边哦？`);
      await maru.say_and_wait(`欢笑也好，哭泣也好。都要一起面对哦？`);
      await era.printAndWait(`恐怕是 ${you.name} 记忆之中最美丽的笑容。`);
      await era.printAndWait(`${maru.name} 走向了赛场。`);
      await era.printAndWait(`不远处，皇帝正等待着挑战者的到来。`);
      await era.printAndWait(`${you.name} 祈祷着 ${maru.name} 的胜利。`);
      await era.printAndWait(`时间，在此流转。`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '天皇赏秋结束后・金色之秋，黄金之梦';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} darley 达利阿拉伯
     * @param {CharaTalk} godolphin 高多芬柏布
     * @param {CharaTalk} byerley 拜耶尔土耳其
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, darley, godolphin, byerley, you, callname) => {
      darley.name = '睿智的女神';
      godolphin.name = '温柔的女神';
      byerley.name = '严肃的女神';
      await maru.say_and_wait(`哈啊，哈啊，哈啊。`);
      await maru.say_and_wait(`就差一点了。`);
      await era.printAndWait(`在最后的弯道一口气加速。`);
      await era.printAndWait(`此时此刻，赛马场化为了两人之间的角斗场。`);
      await era.printAndWait(`还有10马身，8马身，6马身。`);
      await era.printAndWait(`离终点还有不到15m。`);
      await era.printAndWait(`后方传来的雷霆声越来越近。`);
      await maru.say_and_wait(`果然最后还是差了一点吗？`, true);
      await era.printAndWait(`先前积攒的优势像被火焰融化的积雪一样迅速消融。`);
      await era.printAndWait(`最后冲刺的瞬间。`);
      await era.printAndWait(`皇帝追上了 ${maru.name} 的背影。`);
      await era.printAndWait(`但 ${maru.name} 跨出了的一步。`);
      await era.printAndWait(`皇帝：没想到居然会这样，真是有趣。`);
      await you.say_as_passer_by_and_wait(
        `解说`,
        `最后的胜利者是—— ${maru.name} ！`,
      );
      await maru.say_and_wait(`已经胜利了。`);
      await maru.say_and_wait(`……为什么好累。`);
      era.drawLine();
      maru.print(
        `再次睁开双眼的时候，仿佛从一场大梦苏醒。眼前是一片朦胧而神秘的草原。`,
      );
      maru.print(
        `阳光透过稀疏的云层，如细丝般轻轻洒落，将无垠的绿意染上一层温暖而柔和的金辉。`,
      );
      maru.print(`尝试坐起身来，却感觉身体中的每一个细胞都充满了活力。`);
      maru.print(
        `就这么顺势站了起来。环顾四周，蓝天白云之下，宛如巨大翡翠般镶嵌在大地之中一望无际的草原，散发着柔和而神秘的气息。`,
      );
      maru.print(`微风拂过，草浪翻滚，宛如海洋的波涛，带来了阵阵清新的草香。`);
      await maru.say_and_wait(`这里是哪里？`);
      maru.print(
        `无人回答，但我的内心却无比确信着，哪里有能回答我答案的地方。`,
      );
      await maru.say_and_wait(`跟平常一样马力全开！`);
      await maru.say_and_wait(`三！`);
      await era.printAndWait(`上半身挺直，肩膀放松下沉。`);
      await maru.say_and_wait(`二！`);
      await era.printAndWait(`将全部的力量注入腿部。`);
      await maru.say_and_wait(`一！`);
      await era.printAndWait(`深吸一口气，感受着弥漫于空气之中清新的草味。`);
      await era.printAndWait(
        `随后，追寻着答案，${maru.name} 在草地的怀抱之中疾驰。`,
      );
      era.drawLine();
      await era.printAndWait(` ${maru.name} 来到了一片金色的草原。`);
      await era.printAndWait(
        `那是令人怀念的，${maru.uma_sex_title} 灵魂的摇篮。`,
      );
      await maru.say_and_wait(`这里是？`);
      await godolphin.say_and_wait(`终于来了，温柔的孩子。`);
      await era.printAndWait(
        `突然出现在面前的是，以温柔、爱护之心包容万物的女神。`,
      );
      await darley.say_and_wait(`这一路的辛苦我们都看在眼里。`);
      await era.printAndWait(
        `紧接着尊重并祝福着每位赛 ${maru.uma_sex_title} 与生俱来的个性，冷静且和蔼的女神出现了。`,
      );
      await byerley.say_and_wait(`追求赋予时间意义而从中获取的强大力量`);
      await byerley.say_and_wait(`作为凡人来说，或许也是一种强大的展示吧。`);
      await era.printAndWait(
        `坚信着强大才能开拓未来的，严肃而又强大的女神出现了。`,
      );
      await maru.say_and_wait(`为什么我会出现在这里？`);
      await byerley.say_and_wait(
        `……这里是所有领悟领域的 ${maru.uma_sex_title} 在才能发挥到极致后，会到达的竞技场。`,
      );
      await godolphin.say_and_wait(
        `也是度过精彩的一生后，所有 ${maru.uma_sex_title} 们最后会到达的温柔乡。`,
      );
      await darley.say_and_wait(`到达伊甸的赛 ${maru.uma_sex_title} 啊。`);
      await darley.say_and_wait(
        `你应该明白，有我们缔造的这个世界，因为不同的理念之间发生的永恒对立，所造成了诸多悲伤与痛苦。`,
      );
      await darley.say_and_wait(
        `但也保证了这个世界上永远存在的，不同的，势均力敌的其他选择。`,
      );
      await godolphin.say_and_wait(
        `同样也为那些无人认可的，被认为不合时宜的梦想，有着可以永远憧憬的那个彼方。`,
      );
      await godolphin.say_and_wait(
        `无论你怀抱什么样的信念，这个世界上总有一处可以作为你内心深处的归宿。`,
      );
      await byerley.say_and_wait(
        `人类与 ${maru.uma_sex_title} 需要很长的一段学习时间，用来学习和平且怀有敬意地进行着争斗。`,
      );
      await byerley.say_and_wait(
        `在一切争斗的最后，都会得出一个意义，这意义终将救赎为获得胜利而付出代价的各方 ${maru.uma_sex_title}。`,
      );
      await darley.say_and_wait(
        ` ${maru.name}，如同千万来到伊甸的 ${maru.uma_sex_title} 们一样，你有什么想要问的吗？`,
      );
      await maru.say_and_wait(`想问的吗？`);
      maru.print(`一瞬间因为想要询问的问题太多，话语堵在了喉咙之中。`);
      maru.print(`但是，。`);
      await maru.say_and_wait(`不用了。`);
      await maru.say_and_wait(`旅途之中最重要的是路边的风景。`);
      await maru.say_and_wait(
        `如果从一开始就知道终点的答案的话，那么路边的风景就失去了存在的意义。`,
      );
      await maru.say_and_wait(
        `如果非要说的话，等我结束了这段愉快的旅程之后，再次见面时提出的问题才是明智的选择吧？`,
      );
      await darley.say_and_wait(
        `比起真相更关心世俗吗？你选择了一条有趣的道路呢。`,
      );
      await godolphin.say_and_wait(`尽管接下来的道路比现在还要艰难。`);
      await byerley.say_and_wait(`不论什么困难都能跨越吧？你有这个资格。`);
      await darley.say_and_wait(`祝你之后的道路一路顺风。`);
      await era.printAndWait(
        `柔和的风轻轻将 ${maru.name} 托起，向着远方的世界加速前进。`,
      );
      await era.printAndWait(
        `在意识消失之前的一刹那，${maru.name} 将这片黄金般的故乡深深铭记在了心底。`,
      );
      era.drawLine();
      era.printButton(`「${maru.name}？」`, 1);
      await era.input();
      await era.printAndWait(
        `应该说是不幸中的万幸吗？从比赛结束之后就一直浑浑噩噩的 ${maru.name}，在胜者舞台上依然将自己的舞蹈传达到了每一个支持者的心底。`,
      );
      await era.printAndWait(
        `以训练员身份声称现在的 ${maru.name} 需要休息谢绝了所有的见面会与采访，在确认了 ${maru.name} 处于一种无法用现有科学解释的一动不动的状态后，你小心翼翼的背起 ${maru.name}，开着小塔把 ${maru.sex} 送到了居住的公寓中。`,
      );
      era.printButton(`「打扰了。」`, 1);
      await era.input();
      await era.printAndWait(
        `一边将小塔停在附近的停车场，一边小心翼翼的抱起 ${maru.name}。`,
      );
      await era.printAndWait(
        `将 ${maru.sex} 安置在床上后，你便抽了张椅子坐在 ${maru.sex} 的身边。`,
      );
      await you.say_and_wait(`千万不要有事情，${maru.name}。`, true);
      await era.printAndWait(
        `在尽了自己最大的努力之后，一边祈祷着自己的沉睡能换取 ${maru.name} 的苏醒。`,
      );
      await era.printAndWait(`一边在忐忑不安之中度过。`);
      await era.printAndWait(`一分，一时，一夜无话。`);
      await maru.say_and_wait(`唔。`);
      await era.printAndWait(
        `直到阳光透过云层，将斑驳的光影洒在 ${maru.name} 的身上时。`,
      );
      await maru.say_and_wait(`这里是？`);
      await era.printAndWait(
        `苏醒的${maru.teen_sex_title}疑惑地看着熟悉的天花板，然后将目光定格在了这个陌生而又熟悉的身影之上。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `似乎是一天一夜积累下来的疲劳将 ${you.name} 彻底压垮了，${you.name} 不知不觉间睡着了。`,
      );
      await maru.say_and_wait(`从这种角度看过去的话，${callname} 真帅气呢♪`);
      await maru.say_and_wait(`不管看多少遍都不会腻呢♪`);
      await maru.say_and_wait(`……一路走来辛苦你了，${callname}。`);
      await maru.say_and_wait(`不论发生什么，我们都要在一起哦？`);
      await era.printAndWait(` ${maru.name} 紧紧抱住了 ${you.name}。`);
      await era.printAndWait(`三女神温柔的注视着孩子们。`);
      await darley.say_and_wait(`……温柔的孩子，你的愿望一定会实现的。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_43: (() => {
    const title = '温柔的风';
    /** @param {CharaTalk} maru 丸善斯基 */
    const f = async (maru) => {
      maru.print(`意外的早起。`);
      maru.print(`揉了揉困倦的眼前却翻来覆去怎么也睡不着。`);
      maru.print(`因为倍感烦闷所幸就这样起床了。`);
      maru.print(`揉了揉发困的眼睛后，打开了窗户。`);
      maru.print(`清爽的空气拜访了这间公寓`);
      maru.print(
        `屋外的金黄色的树叶也脱离了母树的怀抱，随着金风的引导拜访了这里。`,
      );
      await maru.say_and_wait(`哈喽！`);
      maru.print(`对着小小的客人露出笑脸迎接到来`);
      maru.print(`在接受了主人的邀请后，小小的客人便稳稳当当地落在了书桌上`);
      await maru.say_and_wait(`……说起来现在流行用落叶制成的书签呢`);
      maru.print(`小心地将树叶清洗干净后，用字典将树叶进行压平`);
      maru.print(`清爽的空气拜访了这间公寓`);
      await maru.say_and_wait(`接下来只要耐心等待太阳的出现了就可以了`, true);
      maru.print(`清晨的薄雾尚未散去，月亮依然悬挂在天空之中，繁星点点。`);
      await maru.say_and_wait(`不久之后就是冬天了呢`, true);
      maru.print(
        `春天萌发的树叶，在夏天生长茂盛，在秋天迎来凋零，最后回归冬天的怀抱`,
      );
      await maru.say_and_wait(`我也努力的绽放过了吗？`, true);
      maru.print(
        `突来的一阵强风吹得人几乎睁不开眼睛，金黄色的落叶依依不舍地离开树枝的怀抱，跟随着热情的风前往最后的旅程。`,
      );
      maru.print(
        `像小溪一样奔涌着的，无数的落叶在风的指引下欢快的汇入大地的海洋之中。`,
      );
      await maru.say_and_wait(
        `真是期待可爱的后辈们最终能达到什么地步呢。唔，一想到这个总觉得亚历山大。`,
      );
      maru.print(`像是说给落叶，又像是对着自己诉说。`);
      await maru.say_and_wait(`等待着后辈们超越我的那一天`, true);
      maru.print(`直到后辈们追上背影的那一天，${maru.name}都会一直等待着。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '圣诞节';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait([
        '为了履行与 ',
        maru.get_colored_name(),
        ' 之间的约定，',
        you.get_colored_name(),
        ' 将最后一份工作完成后便匆匆前往约定的场所。',
      ]);
      await era.printAndWait(
        `到达约定的榉树林荫道附近，${you.name} 看了眼手机,比约定的时间还要早30分钟。`,
      );
      era.printButton(`「时间看来还很充足」`, 1);
      await era.input();
      await era.printAndWait(`心中大定的${you.name}放慢了匆忙的脚步。`);
      await era.printAndWait(
        `去年和${maru.name}为了躲避粉丝们的合围慌不择路恰巧发现了这条小径.`,
      );
      await era.printAndWait(
        `当时的${
          maru.sex
        }似乎很开心的样子……不对,与以往在赛场之上不同,那是另一种的快乐.`,
      );
      await era.printAndWait(
        `似乎为了和我一起享受奔跑的快乐故意放慢了脚步,当时的我大脑一片空白.`,
      );
      await era.printAndWait(`还有情人节那次的接吻,粉丝感谢祭时的亲密接触……`);
      await era.printAndWait(`过去的回忆却如冒烟的炉火一般慢慢升起`);
      await era.printAndWait(`实际上……`);
      await maru.say_and_wait(`吓!`);
      await era.printAndWait(
        `似乎为了吓${you.name}一跳,${maru.name}从${you.name}左手边的一棵榉树后突然冒了出来,那抹红色的身影在白雪的衬托下显得格外的耀眼.`,
      );
      era.printButton(`「唔啊啊啊啊」`, 1);
      await era.input();
      await era.printAndWait(
        `面对突然从视野中窜出来的${maru.teen_sex_title}(?),${you.name}成功地被吓了一跳.`,
      );
      await maru.say_and_wait(`哈喽♪${callname}`);
      era.printButton(`「${maru.name}这样突然蹿出来太吓人了」`, 1);
      await era.input();
      await era.printAndWait(
        `去年与${maru.name}约定在这条榉树林荫道上见面,但没想到${
          maru.sex
        }这么活泼.`,
      );
      await era.printAndWait(
        `虽然一直以成熟的${maru.elder_sibling_sex_title}自居,不过在${you.name}面前也开始展现出了${maru.sex}的另一面.`,
      );
      await maru.say_and_wait(
        `虽说也有我按捺不住兴奋的心情提前了一个小时到这里太无聊心血来潮的缘故.`,
      );
      await maru.say_and_wait(`不过${callname}被吓成这样真可爱呢♪`);
      era.printButton(`「${maru.name}!!!」`, 1);
      await era.input();
      await maru.say_and_wait(`呵呵♪${callname}来抓我啊.`);
      era.printButton(`「别跑！」`, 1);
      await era.input();
      await era.printAndWait(
        `你们像小孩子一样追逐嬉戏,恍惚间回到了童年时期无忧无虑.`,
      );
      era.printButton(`「真快乐啊」`, 1);
      await era.input();
      await era.printAndWait(
        `所幸这条小道上来往的人数不多而且都是像你们这样的情侣`,
      );
      await era.printAndWait(
        `${maru.name}姑且不论,但${
          you.name
        }现在也没有小孩子那种活力了,只能喘着粗气扶着树干看着${maru.sex}.`,
      );
      await maru.say_and_wait(`哼哼♪这场游戏是我赢了.`);
      await maru.say_and_wait(`作为胜利者,不知${callname}要接受我一个条件.`);
      era.printButton(`「等下有这回事吗」`, 1);
      await era.input();

      await maru.say_and_wait(`今天晚上和我约会吧.`);
      await maru.say_and_wait(
        `和我这样潮流的美${maru.teen_sex_title}约会的话可是千载难逢的机会哦.`,
      );
      await maru.say_and_wait(`不知${callname}意下如何呢?`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}正打算回答的时候,肚子却不争气的叫了起来.`,
      );
      await maru.say_and_wait(
        `呵呵,${callname}看来是饿了呢,那么我们就先去吃一点东西再出发吧.`,
      );
      await era.printAndWait(
        `${you.name}再次坐在了副驾驶上,熟悉的感觉令${you.name}无比安心.`,
      );
      await era.printAndWait(
        `${maru.sex}插上钥匙后发动引擎,重低音的引擎轰鸣声响彻了寂静的公园.`,
      );
      await era.printAndWait(`你们在萨莉亚一起吃了稍微丰盛一点的晚餐.`);
      await era.printAndWait(
        `相较于独自一人的默默咀嚼,有${maru.name}的陪伴下食物看起来更加美味了.`,
      );
      await maru.say_and_wait(`OK,我在小塔上等${you.name}.`);
      await era.printAndWait(
        `${you.name}让${maru.name}先回到小塔上等候,自己先去前台付账.`,
      );
      await era.printAndWait(
        `伴随着引擎的再度轰鸣,你们出发前往今天最后一个目的地.`,
      );
      await era.printAndWait(
        `${you.name}熟练地触碰着安装在车内面板的播放音乐,然后靠在座椅上享受着音乐.`,
      );
      await era.printAndWait(`等红绿灯转过后,小塔爬上了斜坡.`);
      await era.printAndWait(
        `上了高速公路后跑车开始一路加速,两旁飞速倒退的路灯使${you.name}仿佛置身于时光隧道之中.`,
      );
      await era.printAndWait(
        `在经历最初的不适后,${you.name}慢慢适应了${maru.name}的速度.`,
      );
      await era.printAndWait(
        `音乐引诱${you.name}逃离时间，呼吸促使${you.name}释放时间.`,
      );
      await era.printAndWait(
        `${you.name}转过头看着${maru.name},恰巧窥见${maru.sex}将视线收回的一瞬间.`,
      );
      await era.printAndWait(`之后除了音响中放出的柔和音乐外,沉默降临了此处.`);
      await maru.say_and_wait(`${callname},已经到山顶了呦.`);
      await era.printAndWait(
        `这是这座城市附近最高的山峰,从山顶向下望去,可以将整座城市收入眼底.`,
      );
      await era.printAndWait(
        `寒冷的空气带走了肺中残存的温暖,刺激着心脏的激烈跳动.`,
      );
      await era.printAndWait(
        `${you.name}看向了身旁的${
          maru.sex
        },那双轻松的,明亮的眸子,带着闪闪发光的样子看着沉浸于节日庆典的城市.`,
      );
      era.printButton(`「${you.name}的眼睛真美丽呢」`, 1);
      await era.input();
      await maru.say_and_wait(`呵呵♪${callname}是想和我调情吗?`);
      await maru.say_and_wait(
        `哎呀我都一把年纪了居然还会有年轻人调戏我，看来我魅力依旧不减当年呢。`,
      );
      await era.printAndWait(
        `${maru.name}将视线收回,然后再度将视线望向了${you.name}.`,
      );
      await maru.say_and_wait(
        `人们常说眼睛是心灵的窗户,那么在${callname}看来,我又是什么样的呢?`,
      );
      await you.say_and_wait(`些许感伤的温柔又美丽的眼睛`);
      await maru.say_and_wait(`${callname}又是想到了什么发出这份感慨呢?`);
      await you.say_and_wait(`那双温柔的眼睛一直在注视着后辈们`);
      await you.say_and_wait(`虽然会因为快乐的时间不会一直持续下去而感伤」`);
      await you.say_and_wait(
        `但因为坚信着后辈们会带来更加耀眼的光芒而感到快乐`,
      );
      await you.say_and_wait(`像是夏天万里无云的晴空一样`);
      await maru.say_and_wait(
        `${callname}是不是对我评价过高了呢?而且现在是冬季呢.`,
      );
      await you.say_and_wait(
        `没有人会小看那份温柔的力量,因为那归根结底可以算作爱.`,
      );
      await you.say_and_wait(`只有温柔的爱才能治愈人们心中的创伤.`);
      await you.say_and_wait(
        `为回应那份爱而努力追逐着背影的孩子们所散发出的火焰,即使是冬天也能感受到和夏天一样的温暖`,
      );
      await maru.say_and_wait(
        `如果注视着孩子们的背影的话,明天也会是一个温暖的晴天吧.`,
      );
      await maru.say_and_wait(`我能遇见${callname}真是太好了♪`);
      await maru.say_and_wait(`……${callname},可以让我任性一回吗?`);
      era.printButton(`「如果是${you.name}的愿望的话,请说吧」`, 1);
      await era.input();
      await maru.say_and_wait(`可以吻我吗?`);
      await era.printAndWait(
        `${you.name}搂住了${maru.name}的腰肢,轻轻拨弄着发梢.`,
      );
      await era.printAndWait(`长达10秒钟的接吻,却是一生之中难忘的一段回忆.`);
      await era.printAndWait(`随后两者分开,${maru.name}的眼泪慢慢滑落脸颊.`);
      await maru.say_and_wait(`${callname},我爱${you.name}.`);
      era.printButton(`「我也爱${you.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `随着时钟指向12点,二人在烟花的烘托下紧紧抱在了一起.`,
      );
    };
    f.title = title;
    return f;
  })(),
  current_trend: (() => {
    const title = '街头的潮流推手';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`这是某一天在中庭发生的事————`);
      await maru.say_and_wait(
        `${callname}，我有事想找${you.name}商量，${you.name}现在方便吗？`,
      );
      era.printButton('「怎么了？」', 1);
      await era.input();
      await maru.say_and_wait(
        `那个……因为后辈们的邀请，我们打算去时髦的市区买东西，${you.name}也知道这种走在时尚最尖端的感觉吧？`,
      );
      await maru.say_and_wait(
        `……可是，你也知道，时尚的变化非常快嘛。虽然我也有努力学习最新最潮的知识啦，不过，和后辈们交流的时候总会出现好像没有办法沟通的情况。`,
      );
      await maru.say_and_wait(
        `然后，气氛就会变得非常尴尬嘛。所以为了不让大家失望，${you.name}可以帮我想些好办法吗？`,
      );
      era.printButton('「进行提升自己品味的特训吧！」（速度+10）', 1);
      era.printButton(`「你要对自己有自信！」（力量+10）`, 1);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`原来如此，是去确认当下最流行的时尚趋势吧！`);
        await maru.say_and_wait(
          `那么${callname}，可以拜托${you.name}和我一起去确认潮流吗？`,
        );
        era.printButton('「当然可以！」', 1);
        await era.input();
        await era.printAndWait(`于是${you.name}和${maru.name}一起到了市区。`);
        await maru.say_and_wait(
          `事不宜迟，就先确认那条街道的潮流趋势吧，那边的CD店也许能确认到最新的潮流哦♪`,
        );
        await era.printAndWait(
          `${maru.name}指向了一家颇具年代感的CD店，不过再怎么说在那里找到最新的潮流还是有点……`,
        );
        await maru.say_and_wait(`${callname}，哪里不舒服吗？`);
        await era.printAndWait(
          `虽然心中是这么吐槽但${you.name}还是沉默着和${
            maru.sex
          }一起探索着流行(二十年前)的CD店`,
        );
        await era.printAndWait(
          `一段时间后，${you.name}和${maru.name}确认了这条街道所有的店铺.`,
        );
        await maru.say_and_wait(
          `要追求最新潮流可真难，明明妈妈说过这种事只要掌握诀窍就没问题了……`,
        );
        era.printButton(`「要不要试着说些妈妈教${you.name}的事呢？」`, 1);
        await era.input();
        await maru.say_and_wait(
          `和后辈们说吗……原来如此，这也是个可行的办法，与其追求流行，自己主动推广的话一定会更快乐!`,
        );
        await maru.say_and_wait(
          `那么明天就向后辈们推广潮流吧,${callname}谢谢${you.name}咯⭐`,
        );
        await era.printAndWait(
          `第二天，${maru.name}兴奋地告诉${you.name}后辈们接受了${
            maru.sex
          }的新潮流.`,
        );
      } else {
        await maru.say_and_wait(`要对自己的品味有自信吗……？`);
        await maru.say_and_wait(
          `也许是我变得有些胆小了。踌躇不安的样子可真不像我呢。`,
        );
        await maru.say_and_wait(
          `而且，大家都知道我的品味。我是比谁都懂时尚趋势的，无论如何都要跑在时代尖端的赛${maru.uma_sex_title}。`,
        );
        await maru.say_and_wait(`好！我会尽情享受和后辈们的出游的！`);
        await era.printAndWait(
          `后来，${you.name}询问${maru.name}关于上次出游的事情，${
            maru.sex
          }似乎和后辈们交流了不少有关潮流的情报。`,
        );
        await era.printAndWait(`这就是具有独特品味充满魅力的${maru.name}.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  feel_speed: (() => {
    const title = '开超跑兜风';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `某天，${you.name} 正准备出校门散步时，恰好看到——`,
      );
      await era.printAndWait(`心情不错的${maru.name} 正朝着校外方向走去。`);
      era.println();

      await maru.say_and_wait(
        `啊啦，是${callname}吗？今天天气真不错呢，所以要不要和我一起去兜风？`,
      );
      era.printButton('「好啊.」', 1);
      await era.input();
      await maru.say_and_wait(
        `没有理由拒绝${
          maru.name
        } 的邀请，于是你们一同走向了暂时停在校外的红色跑车.`,
      );
      await maru.say_and_wait('那么，出发咯！');
      await era.printAndWait(
        `红焰色的超跑启动之时，${you.name} 突然感到一阵恶寒，大概是错觉吧。${you.name}试图安慰自己。`,
      );
      era.println();
      await era.printAndWait(`十秒钟过后`);
      era.printButton('「会不会太冲的快了啊！」', 1);
      await era.input();
      await maru.say_and_wait('这点车速还好啦！');
      await maru.say_and_wait('差不多要上高速公路了！要拿出真本事出来了哦！');
      await maru.say_and_wait(
        '小塔开始加速了！小塔开始甩尾了！小塔的速度变得更快了！！！',
      );
      await maru.say_and_wait('呼哦！这种感觉真是令人欲罢不能呢♪');
      await maru.say_and_wait(
        `咦？${era.get('callname:0:-1')}！${you.name}怎么了？`,
      );
      await maru.say_and_wait('呼哦！这种感觉真是令人欲罢不能呢♪');
      await maru.say_and_wait('喂？喂？');
      await maru.say_and_wait(`${you.name} 没事吧？是不是我冲刺的太快了啊？`);
      era.printButton('「继续挑战直到极限吧！」（速度+10）', 1);
      era.printButton('「可以稍微休息一下吗？」（智力+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `既然${callname}都这么说了，${
            maru.elder_sibling_sex_title
          }我的话要认真起来了呢！`,
        );
        await maru.say_and_wait('跟我一起突破极限吧！');
        await maru.say_and_wait('来吧！超越音速！');
        await maru.say_and_wait(
          `只要我和${you.name}在一起的话，无论是哪里都可以到达！`,
        );
        era.println();
        await maru.say_and_wait('这就是所谓的幻化成风吗？');
        await era.printAndWait(
          `${you.name} 的意识在即将陷入黑暗的前一刻听到了丸善陶醉般的自言自语。`,
        );
      } else {
        await maru.say_and_wait(`我明白了，不可以勉强自己哦！`);
        era.println();
        await maru.say_and_wait(`我们到前面的休息站去吧！`);
        await era.printAndWait(`于是${maru.name}把车停到了休息站。`);
        era.println();
        await maru.say_and_wait(`没事吧，训练员？`);
        await maru.say_and_wait(`我去买点喝的来哦。`);
        await era.printAndWait(`${maru.name}很快带回来了两瓶冰凉的饮料。`);
        await maru.say_and_wait(`${callname}，${you.name} 现在还好吗？`);
        await era.printAndWait(
          `在喝下饮料之后，${maru.name}的眩晕感慢慢消退了。`,
        );
        await maru.say_and_wait(
          `就这样在${maru.elder_sibling_sex_title}的大腿上休息一下吧。`,
        );
        await era.printAndWait(
          `${maru.name}轻轻将${you.name}的脑袋放在了自己的大腿上。`,
        );
        await era.printAndWait(
          `${maru.sex}的手指触及${you.name}的肌肤，留下一丝冰凉的感觉.`,
        );
        await maru.say_and_wait(
          `这就是所谓的『膝枕』吗？我也是第一次这么做.如果不舒服的话要和${
            maru.elder_sibling_sex_title
          }说出来哦.`,
        );
        await era.printAndWait(
          `女性身上特有的香气刺激着大脑，${you.name}不经意间沉溺于飘忽的想象中.`,
        );
        await maru.say_and_wait(
          `三女神啊，我请求${you.name}，哪怕是一瞬间也好让我沉溺于此吧，在意识消散前的一刹那${you.name}祈祷着.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  favourite_things: (() => {
    const title = '丸善斯基，畅谈「喜欢」';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`今天的${maru.name}在接受采访.`);
      await you.say_as_passer_by_and_wait(
        '记者',
        `那么，接下来想谈谈您穿的决胜服。请问您对这套决胜服最满意的地方在哪里呢？`,
      );
      await maru.say_and_wait(`燃烧般的红色是我最喜欢的所以塔酱也是红色哦♪`);
      await you.say_as_passer_by_and_wait('记者', `塔酱？`);
      era.printButton(`那是${maru.name}爱车的称号.`, 1);
      await maru.say_and_wait(`啊，抱歉，讲的太投入了♪`);
      await maru.say_and_wait(
        `其实我小时候被带去车展的时候看到了一辆大红色的超跑，那帅气的外型真让人离不开眼睛呢.`,
      );
      await maru.say_and_wait(
        `当时的我发誓将来买车的时候一定要买这个，之后一边看着目录上的照片一边幻想着开车时的样子不断努力.`,
      );
      await maru.say_and_wait(
        `现在这个梦想也实现了哦，每天都开着小塔到处跑哦♪`,
      );
      await era.printAndWait(`采访顺利进行着……`);
      await you.say_as_passer_by_and_wait(
        '记者',
        `非常感谢，那么最后也拜托您让我们拍张照`,
      );
      await maru.say_and_wait(`了解！我会在尽量展现自己的魅力的.`);
      await maru.say_and_wait(`对了！最熟悉我的人是${callname}吧？`);
      await maru.say_and_wait(
        `${you.name}觉得今天的拍摄中宣传我的哪一点比较好呢？`,
      );
      era.printButton('「无人可及的速度」（力量+20）', 1);
      era.printButton('「任何时候都游刃有余的笑容」（耐力+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `原来如此，毕竟我最耀眼的时候还是享受跑步的瞬间嘛.`,
        );
        await maru.say_and_wait(`既然如此的话就干脆到小塔上拍下我的照片吧`);
        await era.printAndWait(
          `之后在把记者也拖下水的兜风时${maru.name}脸上露出了闪闪发光的表情。`,
        );
      } else {
        await maru.say_and_wait(`嗯，说的也是，做任何事最重要就是开心.`);
        era.printButton('「我很期待哦」', 1);
        await era.input();
        await maru.say_and_wait(
          `包在我身上！我一定会满足${you.name}的期待，露出超级可爱的笑容！`,
        );
        await era.printAndWait(`记者:不错！拍到了精彩的照片了！`);
        await era.printAndWait(
          `几天后，在和${maru.name}一起确认采访报导的时候.`,
        );
        await maru.say_and_wait(
          `拍出了很棒的笑容呢♪而且这里……也提到了${you.name}的名字呢.`,
        );
        await maru.say_and_wait(
          `嗯……『和训练员之间的羁绊关系所产生的令人印象深刻的笑容』上面是这么写的呢！`,
        );
        era.printButton('「有点不好意思」', 1);
        await era.input();
        await maru.say_and_wait(
          `才不会呢。如果没有${you.name}的支持，我也不会带着这么可爱的笑容呢`,
        );
        await era.printAndWait(
          `无论是照片还是眼前，${you.name}都感受到了${maru.name}耀眼的笑容.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beautiful_winner: (() => {
    const title = '又酷又炫的必胜法！';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} rice 米浴
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, rice, you) => {
      await era.printAndWait(
        `某日，${you.name}与${maru.name}为了开午餐会议，来到天台吃饭的时候——`,
      );
      await era.printAndWait(`听到了微弱的哭泣声。`);
      await maru.say_and_wait(`咦——这个声音是？`);
      await maru.say_and_wait(`你在这里干什么啊，米浴？`);
      await rice.say_and_wait('米浴……米浴是一个没用的孩子。');
      await rice.say_and_wait('明明好不容易才邀请米浴一起玩警察抓小偷游戏的.');
      await rice.say_and_wait(
        '只有米浴还没有被抓住……明明朋友们为了掩护我都被抓住了，米浴该怎么办才好呢……',
      );
      await era.printAndWait(
        `听完米浴的话后，${maru.name}和${you.name}一齐向下方看去，发现在中庭的中心有个像监狱一样的地方。`,
      );
      await era.printAndWait(
        `${you.name}看向${maru.name}，${maru.sex}似乎有想法了.`,
      );
      await maru.say_and_wait(`那么，来教${you.name}必胜法吧♪？`);
      await maru.say_and_wait(
        `以体力决胜的A计划和以智慧取胜的B计划，${you.name}觉得哪个比较好呢？`,
      );
      await rice.say_and_wait('米浴……米浴也不知道,');
      await era.printAndWait(
        `米浴的目光捕捉到了${you.name}的存在，似乎是看到救星了一样看向${you.name}.`,
      );
      await era.printAndWait(`${maru.name}似乎在等待着${you.name}的答案`);
      era.printButton('「以体力决胜的 A 计划」（耐力+10）', 1);
      era.printButton('「以智慧取胜的 B 计划」（智力+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`OK！那就采取A计划吧！`);
        await maru.say_and_wait(
          `米浴${you.name}不是很擅长忍耐吗？那么${you.name}走过去让对面注意到${
            you.name
          }的存在，然后${you.name}与${
            maru.sex
          }保持一个相对稳定的距离，等到对方体力耗尽的时候就不得不停下来了.`,
        );
        await rice.say_and_wait('这，这种事情……米浴能办到吗？');
        await maru.say_and_wait(
          `绝对能办到！小米浴做事认真又努力，意志力又很强，而且是我自豪地后辈哦！`,
        );
        await maru.say_and_wait(`绝对没问题哟♪`);
        await rice.say_and_wait(
          `既然是丸善${
            maru.elder_sibling_sex_title
          }的保证，米、米浴……那个，会，会去试试看……!`,
        );
        await maru.say_and_wait(
          `呵呵♪，托${you.name}的福，我也想到能够增强耐力的训练项目了`,
        );
        await era.printAndWait(
          `没过多久，${you.name}和${maru.name}就看到了米浴成功解救同伴的小小身影。`,
        );
      } else {
        await maru.say_and_wait(`OK！那就采取B计划吧！`);
        await maru.say_and_wait(
          `简单的说，就是把对面引诱到地势复杂的地方，比如说校舍之类的，然后在分叉处甩掉对方！`,
        );
        await rice.say_and_wait('米、米浴，做得到这种事情吗……!');
        await rice.say_and_wait('可以的！米浴不是很擅长思考吗？');
        await era.printAndWait(`${maru.name}说着紧紧地握住了米浴的手。`);
        await maru.say_and_wait(
          `只要冷静下来好好思考，米浴一定没问题的！好吗？`,
        );
        await rice.say_and_wait('唔 ……米浴……会试试看……！');
        await maru.say_and_wait(
          `……呵呵，既然都对后辈这么说了，作为${
            maru.elder_sibling_sex_title
          }我也要好好做到才行呢。`,
        );
        await era.printAndWait(
          `没过多久，${you.name}和${maru.name}就看到了米浴成功解救同伴的小小身影.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  memory: (() => {
    const title = '早上好，丸善斯基';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.print(`被直射的阳光照在脸上，不情愿地醒来了。`);
      maru.print(`昨天晚上玩过头歇菜了吗？`);
      await maru.say_and_wait(`呜——`);
      await era.printAndWait(`${maru.name}从床上睁开了眼睛。`);
      await maru.say_and_wait(`呼啊——`);
      await maru.say_and_wait(
        `不愿意从床上做起来，就这样伸出一只手摸索着闹钟。`,
      );
      maru.print(
        `意外的是，平时不小心睡过头被${
          callname
        }用直直的眼神瞪着一样的可怕闹钟，现在却像理事长在学院里种的胡萝卜一样安静。`,
      );
      maru.print(`……不对，怎么想的话都有点奇怪吧？`);
      maru.print(`果然是昨天用力过猛，不小心弄坏了吗？`);
      maru.print(`还是说——`);
      await maru.say_and_wait(`今天是休息日吗？`, true);
      maru.print(`在得到这个好消息后，心满意足的就这么睡过去了——不对！`);
      maru.print(`要是是闹钟坏了呢？今天是星期……星期几来着？`);
      maru.print(`要是迟到的话，被${callname}发现的话……`);
      await maru.say_and_wait(`真是压力山大！`, true);
      maru.print(
        `就这么坐了起来，因为困倦还未完全消除的身体传来了阵阵的麻痹感。`,
      );
      await maru.say_and_wait(`哈——啊。`);
      maru.print(`身体自动做出了反应。`);
      await era.printAndWait(
        `${maru.name}披着乱糟糟的头发摸索着不知丢在何处的拖鞋，视野模糊着走下了床。`,
      );
      era.drawLine();
      maru.print(
        `半梦半醒的自己总算被冰凉的水流从三女神的伊甸园里活生生拽了出来。`,
      );
      maru.print(
        `简单的用电吹风吹了一下头发后，用毛巾包裹住尚在滴水的头发走出了卫生间。`,
      );
      maru.print(`咕咚咕咚，哈啊～`);
      maru.print(`将一整瓶咖啡牛奶一饮而尽后，心情也变得雀跃起来了♪`);
      await maru.say_and_wait(`接下来做些什么呢？`);
      maru.print(`休息日的今天，后辈们应该也去放松了。`);
      maru.print(`休息日的特雷森，稍微有些冷清呢。`);
      await maru.say_and_wait(`${callname}——`);
      maru.print(`胸中悄然涌出一份感觉。`);
      maru.print(`陌生又莫名熟悉的甜蜜感袭上了心头。`);
      maru.print(
        `就算${callname}从这个世界上消失的话，我恐怕也不会忘记这份怮动吧。`,
      );
      await maru.say_and_wait(`这样的话，今天就去训练室吧。`);
      await era.printAndWait(`如果是自卑又比谁都要好胜${callname}的话。`);
      await era.printAndWait(
        `此刻的现在，恐怕正在训练室，一边苦恼着接下来的比赛，一边喝着浓浓的苦咖啡吧。`,
      );
      await maru.say_and_wait(
        `这样的话，不去把囧囧的${
          maru.sex
        }从这份令人难受的苦恼之中拽出来可不行呢。`,
      );
      await era.printAndWait(`${maru.name}来到了训练室门口。`);
      await era.printAndWait(
        `带着最近新了解的「突然推开门吓人一跳」的潮流，推开门大声地宣布着自己的到来。`,
      );
      await era.printAndWait(
        `看着${
          callname
        }带着慌乱的表情手忙脚乱的寻找着被刚才的惊吓不小心飞到沙发下的遥控器。`,
      );
      await era.printAndWait(
        `${maru.name}想起了小包中那张与${
          callname
        }一起在卡拉OK拍下的合照，喝过头的${
          callname
        }带着的可爱酒窝，在床上不知道翻来覆去看了多少遍。`,
      );
      await era.printAndWait(`也许是晴天的关系吧。`);
      await era.printAndWait(
        `${maru.name}看上去就像刚喝饱水分的亮晶晶的胡萝卜一样。`,
      );
      await era.printAndWait(
        `明天的${maru.sex}也会一如既往的，带着这份独特的感觉鼓励着大家吧。`,
      );
      await era.printAndWait(
        `带着这份对未来的憧憬，${maru.name}迎来了新的一天。`,
      );
    };
    f.title = title;
    return f;
  })(),
  teacher_sister: (() => {
    const title = '请指导我，丸善斯基老师！';
    /**
     * 训练员面对想要学习的东西提不起兴趣，丸善斯基对其进行指导
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`某个休息日的早上。`);
      await era.printAndWait(`${you.name} 爬在办公桌上什么都不想干。`);
      await era.printAndWait(
        `自从成功进入特雷森之后，不知为何学生时代的动力一下子全部消失了。`,
      );
      await era.printAndWait(
        `虽然在与 ${maru.name}的交流之中慢慢找回之前的感觉，但这种勉强感还是有些烦恼。`,
      );
      await you.say_and_wait(`平时都这么辛苦了，今天就好好休息一下吧。`);
      await maru.say_and_wait(` ${callname}，我进来了哦♪`);
      await era.printAndWait(
        `正准备带着这种借口摸鱼的时候，${maru.name}推门而入。`,
      );
      await era.printAndWait(
        `该说是不是巧合呢，${maru.name}看上去心情正好的样子。`,
      );
      await maru.say_and_wait(`这样的话，不得不和 ${callname}好好讲解一下了。`);
      await you.say_and_wait(
        `或许和 ${maru.name}商量一下的话，说不定会有新的看法。`,
        true,
      );
      await era.printAndWait(
        `带着这种试试看的想法，${you.name}向 ${maru.name}倾诉了心中的困扰。`,
      );
      await maru.say_and_wait(`唔——原来是这样啊。`);
      await era.printAndWait(
        ` ${maru.name}一边轻轻的笑着，一边将放在角落里的小黑板拉了出来。`,
      );
      await maru.say_and_wait(`这样的话，就让姐姐我来分享一下我的看法吧。`);
      await era.printAndWait(` ${maru.name}在黑板左侧上画下了Q版的自己。`);
      await maru.say_and_wait(
        `有的时候面对一些不去做就会后悔的事物时，是不是总会有种怎么也提不起干劲的状态呢？`,
      );
      await era.printAndWait(
        `在黑板的右侧将作为烦恼的功课、名次，以及舞蹈圈了起来。`,
      );
      await maru.say_and_wait(
        `虽然知道它很重要，不去做的话与亲近的人就会有一种焦虑惶恐的感觉。`,
      );
      await era.printAndWait(
        `${maru.sex}一边解释着，一边贴心的为小人补上乌云。`,
      );
      await maru.say_and_wait(
        `在后悔与焦躁之中度过，但是好像这样也能维持下来的样子？！`,
      );
      await era.printAndWait(`在两者的下方，Q版小人开始向训练员道歉。`);
      await maru.say_and_wait(
        `于是下一次这种事情发生的时候，只要表现出后悔的样子，周围的人也不会说些什么，最后大家都维持在了一个合适的状态上。`,
      );
      await era.printAndWait(
        `将三幅图依次用箭头联系在一起，一个循环便诞生了。`,
      );
      await maru.say_and_wait(` ${callname}觉得如何呢?`);
      era.printButton(`事态也没有得到解决吧？`, 1);
      await era.input();
      await you.say_and_wait(
        `从事情开始恶化，到周围的人对${you.name}施加压力，自己做出后悔的样子，周围的人无可奈何的放弃 这个循环之中，只有事物没有被解决吧？`,
      );
      await you.say_and_wait(
        `本应作为激发动力的燃料被做出后悔姿态的自己消除了，最后事态却向着更糟糕的方向发展了。`,
      );
      await you.say_and_wait(
        `于是在事态越来越严重时，这套懊悔循环不仅能够自我维持，甚至得到了强化。`,
      );
      await era.printAndWait(
        `在思考了8分钟左右，${you.name}犹豫的给出了答案。`,
      );
      await maru.say_and_wait(
        `没错，这种循环本身不解决问题，只解决问题感。对于当事人来说，就像明明知道下周就要考试了，但还是打算趁着时间还有多，跑去街机厅的学生一样。`,
      );
      await maru.say_and_wait(`本质上只是因为害怕疼痛而吃止痛药麻痹自己。`);
      await maru.say_and_wait(`所以，我们要找到行动的动机。`);
      await era.printAndWait(
        `似乎是正确的答案，像是花朵一样的笑容在${maru.sex}的脸上绽放。`,
      );
      await maru.say_and_wait(
        `为了将圆周率精确到第七位小数，人类文明普遍花了至少两千年。`,
      );
      await maru.say_and_wait(`认识到无理数，用了一千年。`);
      await maru.say_and_wait(
        `二元方程、三角函数、对数、阶乘，都是人类长达数千年的集体探索才逐步达成的学术成就。`,
      );
      await era.printAndWait(
        `白板擦将之前的画面擦干净之后，画下了一个巨大的水晶萝卜。`,
      );
      await maru.say_and_wait(
        `能够通过仅仅八年的学习，就将这些成就运用自如，是一件堪称华丽的成就。`,
      );
      await maru.say_and_wait(
        `有些人非常聪明而且有足够的运气，借助名次以及周围人的称赞化为燃料，帮${maru.sex}更快的掌握了这些东西。`,
      );
      await era.printAndWait(`Q版小人通过钻头很快就找到了水晶萝卜。`);
      await you.say_and_wait(`如果我花了很久也没弄懂，怎么办呢？`);
      await maru.say_and_wait(`那又怎么样呢？`);
      await era.printAndWait(` ${maru.name}眨了眨眼。`);
      await maru.say_and_wait(
        `${callname}的目标就是为了十足的领取这份文明的遗产，无论花多久，只要最终学到了就是大赚。`,
      );
      await you.say_and_wait(`可是我遇到看不懂的公式又该怎么处理呢？`);
      await maru.say_and_wait(
        `最好的办法是去阅读与它相关的背景知识，以及相关的历史，去回溯这个思想成就当年是怎么从历史中淘洗出来的。`,
      );
      await era.printAndWait(
        `白板上的Q版小人查阅着矿物知识，向经验丰富的前辈请教。`,
      );
      await maru.say_and_wait(
        `这样不仅能降低认知门槛，更重要的是正确的历史感能帮${you.name}洗脱${you.name}对社会的扭曲想象带来的虚假价值评估。`,
      );
      await maru.say_and_wait(`因为没有动力的根本原因总是估错了价格。`);
      await era.printAndWait(`水晶胡萝卜变得闪闪发亮。`);
      await maru.say_and_wait(
        `历史上重要珍贵的东西，自然也围绕其滋生了庞大的产业与生态。`,
      );
      await era.printAndWait(`Q版小人们围绕着女神祭坛将水晶胡萝卜放了上去。`);
      await maru.say_and_wait(
        `而这份庞大的产业与生态，自然为了这份这些知识的价格做了担保，为了熟知它们的人提供了机会与丰厚的报酬。`,
      );
      await era.printAndWait(`故事的最后，三女神们为Q版小人送上了胡萝卜山。`);
      await maru.say_and_wait(`所以学习是一个利润极高的收益机会。`);
      await you.say_and_wait(`原来如此，谢谢 ${maru.name}老师！`);
      await maru.say_and_wait(
        `哎呀～${callname}真是太客气了。如果能帮助到 ${callname}，${maru.elder_sibling_sex_title}我才是最高兴的一边。`,
      );
      await era.printAndWait(
        `因为帮助到了${you.name}而由衷高兴的 ${maru.name}周围似乎有彩虹浮现。`,
      );
      await era.printAndWait(`你们度过了有意义的一天。`);
    };
    f.title = title;
    return f;
  })(),
  find_love: (() => {
    const title = '与丸善斯基于黄昏之时在海边观看日落';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`某天，训练结束后.`);
      era.printButton('「好，今天的训练计划全部达成了，辛苦了.」', 1);
      await maru.say_and_wait(
        `呵呵，能够感受到风的气息与草地的芳香，我也是兴致高涨呢♪`,
      );
      await era.printAndWait(
        `${maru.name}舒展着自己的身体，完美的身体曲线被${you.name}深深刻进了脑海里.`,
      );
      await maru.say_and_wait(
        `呼——训练结束后也有些疲惫呢，${
          callname
        }，可以和${maru.elder_sibling_sex_title}我一起去喫茶店吗？`,
      );
      era.printButton('「当然可以」', 1);
      await era.printAndWait(
        `作为绅士（虽然是个变态）没有不接受成熟淑女请求的道理，于是两人来到了${maru.name}最喜欢的喫茶店附近.`,
      );
      await era.printAndWait(
        `在走过被黄昏的光线剪得悉悉索索的树荫后，穿过杂草丛生的院子来到二楼时，此刻才算是找到了喫茶店的入口.`,
      );
      await era.printAndWait(
        `店主似乎是一个不苟言笑的老人,在被透过百叶窗的光线照耀下显得更加佝偻,岁月给他造成了不可逆转的伤害,但那双大手却如以往一样灵巧有力.`,
      );
      await era.printAndWait(
        `${maru.name}熟练地上前点单，在闲聊几句后将话题一转介绍起了${you.name}.`,
      );
      await era.printAndWait(
        `店主停下手中的活计，细细的打量了${you.name}一番，${you.name}的身体不由得坐直了.`,
      );
      await era.printAndWait(
        `老人点了点头，像是认可了${you.name}一样，将一份略显陈旧但依然干净的菜单递给了${you.name}.`,
      );
      await era.printAndWait(
        `正当${you.name}在思考该点些什么的时候，${maru.name}向${you.name}搭话了.`,
      );
      await maru.say_and_wait(`${callname}是第一次来这种店铺吧？`);
      await maru.say_and_wait(
        `店主虽然脾气有点古怪，不过人还是很好的！手艺的话就更不用说了,来这里的不尝一下水果圣代的话那就太可惜了♪`,
      );
      era.printButton('「请给我来一份水果圣代」', 1);
      await era.printAndWait(
        `老式的留声机播放着上世纪流行的爵士乐,在黄昏的衬托下营造出了时光交错般美好氛围.`,
      );
      era.printButton('「(这里的时光仿佛比其他地方流动的还要缓慢啊)」', 1);
      await maru.say_and_wait(`${callname}，水果圣代已经好了哟.`);
      await era.printAndWait(
        `${maru.name}的话语把${you.name}拉回了现实，木制餐盘上的精致圣代插上了两根勺子.`,
      );
      era.printButton('（店主是特意的这么放的吗）', 1);
      await maru.say_and_wait(`${callname}，我来喂${you.name}吧？`);
      await era.printAndWait(
        `斜射在${maru.name}后背的光线遮住了${
          maru.sex
        }的表情，耳朵的不停抖动似乎正预示着${maru.sex}内心的不平静.`,
      );
      await era.printAndWait(`${maru.name}正等着${you.name}的答复.`);
      era.printButton('（无言地张开嘴）（智力+20）', 1);
      era.printButton('「非常抱歉我还有工作要去处理」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${maru.name}将满满一勺的圣代送进了${you.name}的嘴里.冰凉的触感一瞬间占据了整个脑海，紧接着感受到的是柔软与绵密.`,
        );
        await era.printAndWait(
          `正当${you.name}打算开口称赞时，青涩与甘甜的味道在${you.name}的口中满满扩散开来.`,
        );
        await maru.say_and_wait(`${callname}，味道怎么样？`);
        era.printButton('「非常美味」', 1);
        await era.input();
        await maru.say_and_wait(`真的吗!那${you.name}也来喂我吧？`);
        await maru.say_and_wait(`啊～嗯`);
        await era.printAndWait(
          `${maru.name}正催促着${you.name}的行动,双耳抖动得更加激烈了.`,
        );
        era.printButton('「只能上了！」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}努力平复心中的激动,从圣代里挖出一大勺，颤颤惊惊的放进了${maru.sex}的樱桃般的小嘴里.`,
        );
        await era.printAndWait(
          `${maru.sex}那明亮的,整齐的,珐琅质的牙齿似乎也带着一丝深情.`,
        );
        await maru.say_and_wait(
          `味道真不错⭐${callname},接下来换我来喂${you.name}吧♪`,
        );
        await era.printAndWait(
          `嘴角微微凹下的${maru.sex}，隐隐间带着一丝笑意.`,
        );
        await era.printAndWait(
          `之后${you.name}和${maru.sex}默默无言,${you.name}一勺我一勺地喂对方吃下了自己勺中的圣代.`,
        );
        await era.printAndWait(
          `黄昏带来的淡淡忧伤感似乎也被${maru.sex}的身影所冲淡.`,
        );
        await maru.say_and_wait(`要一起去海边兜风吗，小塔好像也跃跃欲试呢♪`);
        await era.printAndWait(`${maru.sex}带着期待的目光看向了${you.name}.`);
        era.printButton('「出发吧」', 1);
        await era.input();
        await era.printAndWait(`呵呵♪我就知道${callname}会这么说。`);
        await maru.say_and_wait(`那么,现在就出发吧！`);
        await era.printAndWait(
          `沉默的店主默默将餐点与饮品收拾好后,细细打量着${you.name}`,
        );
        await era.printAndWait(
          `一炷香后,才向${you.name}点了点头，似乎是认可了${you.name}的样子.`,
        );
        await maru.say_and_wait(`${callname},该出发了！`);
        await era.printAndWait(`${maru.name}在门口轻声催促着${you.name}.`);
        await era.printAndWait(
          `${you.name}从钱包中抽出马币准备付款时,店主略微摇了摇头,然后继续擦起了高脚杯.`,
        );
        era.printButton('「……谢谢」', 1);
        await era.input();
        await era.printAndWait(`然后${you.name}正准备离开时`);
        await era.printAndWait(
          `店主:这位客人,与${you.name}的小女友好好度过吧.`,
        );
        await era.printAndWait(
          `带着磁性而厚重的声音从${you.name}的左侧传来,${you.name}愕然回头,发现店主严肃中带着一丝略微不可察觉的笑意看着${you.name}.`,
        );
        await era.printAndWait(`店主:本店也要打烊了,客人还有什么事情吗？`);
        await era.printAndWait(
          `于是${you.name}头也不回地离开了这里，走向了${maru.name}所在的门口.`,
        );
        await maru.say_and_wait(
          `${callname},怎么这么久啊，我带${you.name}出去吧,毕竟这里没有熟悉的人引导是很容易迷路的呦！`,
        );
        await era.printAndWait(
          `在七拐八拐后从商业街熙熙攘攘的人流之中窜出属实让${you.name}大感意外.没花多久坐上小塔后,${you.name}开始与${maru.name}闲聊起来了.`,
        );
        await maru.say_and_wait(
          `哼哼♪${maru.elder_sibling_sex_title}我品味很不错吧,这可是我妈妈推荐的店哦！`,
        );
        era.printButton('「那位店主年龄看上去蛮大了」', 1);
        await era.input();
        await maru.say_and_wait(
          `因为他已经经营这家店铺三十年了,我小时候就和父母一起来这边喝咖啡吃甜点了.`,
        );
        await maru.say_and_wait(`虽然店主看起来很严厉，其实他是一个好人呢！`);
        await era.printAndWait(
          `就这样一问一答,进入了环山高速之后，车流便渐渐稀疏起来`,
        );
        await maru.say_and_wait(
          `果然像这样子和训练员还有小塔一起兜风的感觉真是舒服啊，跟随着激烈的节拍，心情仿佛也一下子高涨了起来了！`,
        );
        await era.printAndWait(
          `${maru.name}的耳朵伴随的激烈的节奏打起了节拍,${you.name}似乎稍微跟不上${maru.sex}的节奏了.`,
        );
        await era.printAndWait(
          `在仿佛经过一个世纪才满满舒缓下来的激烈节奏后，伴随着小塔驶出高速车道，${you.name}总算舒了一口气。`,
        );
        await maru.say_and_wait(
          `呵呵♪风的气息吹拂在脸上的感觉真是令人心潮澎湃，小塔也很高兴呢♪`,
        );
        await maru.say_and_wait(`……${callname}，${you.name}还好吗。`);
        await era.printAndWait(
          `${maru.name}放慢了车速，${you.name}的灵魂终于从三女神那回到了自己的身体里`,
        );
        await maru.say_and_wait(
          `对不起，没有考虑到训练员的状态，作为${maru.elder_sibling_sex_title}我还真是失策.`,
        );
        await era.printAndWait(
          `${maru.name}的两只耳朵耷拉了下来，带着愧疚和担心的复杂眼神射向了${you.name}`,
        );
        era.printButton('「没有这回事，能够感受到风的气息我也很开心」', 1);
        await era.input();
        await era.printAndWait(
          `${maru.name}的耳朵又立刻竖了起来，耳朵也开始随着车载音响播放的shoreline一抖一抖的打着节拍`,
        );
        await maru.say_and_wait(
          `训练员真是个温柔的人呢，连${maru.elder_sibling_sex_title}我都觉得喜欢上${you.name}是个正确的决定呢♪`,
        );
        await maru.say_and_wait(
          `不过话说回来，${callname}每天都要负责这么多孩子，身体吃的消吗？`,
        );
        era.printButton('「摇头」', 1);
        await era.input();
        await maru.say_and_wait(
          `嗯嗯，这样最好不过了，训练员也真是一个辛苦的职业啊.`,
        );
        await maru.say_and_wait(
          `不过看着孩子们一点点褪去青涩的外壳逐渐成熟追逐着自己的梦想，我也有一种说不清的感动和愉悦的心情.`,
        );
        await maru.say_and_wait(
          `或许训练员与${maru.uma_sex_title}之间的关系，也就是作为师傅与徒弟一样.`,
        );
        await maru.say_and_wait(
          `看着孩子们从刚接触的陌生与打量走向亲密与信赖，然后在三年的目标结束之后.`,
        );
        await maru.say_and_wait(
          `作为师傅的训练员与身为徒弟的${maru.uma_sex_title}积累了非常深厚的羁绊，这份羁绊又化作力量带来了奇迹,然后二人朝着更大的目标前进.`,
        );
        era.printButton(
          `「作为训练员,衷心祝愿自己所负责的${maru.uma_sex_title}能在追求目标的道路上一帆风顺」`,
          1,
        );
        await era.input();
        era.printButton('「除此之外，再向前一步就是三女神的宠爱了」', 1);
        await era.input();
        await maru.say_and_wait(
          `呵呵♪训练员真是给了我一个有趣的答复，作为${maru.uma_sex_title}我也希望能在这三年内能和${callname}一起积累更多美好的回忆呢.`,
        );
        await maru.say_and_wait(
          `那么接下来也请多指教了,${you.sex_code !== 1 ? '训·练·员·酱' : '训·练·员·君'}♪`,
        );
        await era.printAndWait(
          `天空虽然东边被太阳染成了橙红色，但头顶却依然是深沉的蓝，太阳与星星的交汇一处那渐变的色彩真是怎么看也看不够`,
        );
        await era.printAndWait(`${you.name}忍不住打了一个呵欠.`);
        await maru.say_and_wait(
          `训练员如果困了的话，可以在副驾驶座上稍微睡一会哦，到了海边我和小塔会把${you.name}唤醒的。`,
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
        await maru.say_and_wait(`到了哟，${callname}快醒一醒.`);
        await era.printAndWait(
          `揉着还未睡醒的双眼，下意识地打了一个满足的呵欠,${you.name}试图从晕厥的感觉之中迅速恢复`,
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
        await maru.say_and_wait(`真安静呢，${callname}也是这么想的吧。`);
        await era.printAndWait(
          `${maru.name}将脚上的高跟鞋脱了下来，赤足走向了海浪之中.`,
        );
        await maru.say_and_wait(`${callname}也来感受一下海水的亲吻吧.`);
        await era.printAndWait(
          `${you.name}在${maru.name}的邀请下同样将鞋子脱下慢慢走向波浪`,
        );
        await era.printAndWait(
          `海水卷起一朵朵浪花,那些浪花像孩童一样嬉闹着涌向岸边，细细抚摸着柔软的沙滩,又恋恋不舍的退回`,
        );
        await era.printAndWait(
          `在永恒的抚摸之下,沙滩上划出了一条条银色的岸边,在月光的照耀下,似乎给大海镶上了闪闪发光的银框`,
        );
        await era.printAndWait(`大自然是最好的画家. `);
        await era.printAndWait(
          `${maru.name}左手提起自己的裙摆，身体自然的半转向${you.name}.月光给${
            maru.sex
          }披上了不可侵犯的神圣外衣,海浪拍打礁石激起水汽又带来了一丝朦胧的诱惑,永不停息的海浪又仿佛喻示着少女内心的波澜.`,
        );
        await era.printAndWait(
          `可能连${
            maru.sex
          }自己都没有意识到,在大自然那无形的画笔之下,自己成了这副镶嵌着银色相框油画的主角.`,
        );
        await maru.say_and_wait(`月色真美呢，${callname}.`);
        era.printButton('「风也很温柔呢」', 1);
        await era.input();
        await maru.say_and_wait(`呵呵♪${callname}可真会说话呢.`);
        await era.printAndWait(
          `说话之间${you.name}轻轻搂住了${maru.name}的腰，虽然${
            maru.sex
          }像触电一样颤抖了一下，不过似乎对${you.name}的行为也没有抵触的举动.`,
        );
        await maru.say_and_wait(
          `${callname}没有想过未经同意突然抱住淑女会受到什么惩罚吗?`,
        );
        await era.printAndWait(
          `那双青色的瞳孔中蕴含着一种吸引力，当${maru.sex}凝视着${you.name}的时候，${you.name}的视线便很难移开，但却并不让人压抑。`,
        );
        await era.printAndWait(
          `如同变幻不定的风之妖姬一样,${maru.sex}是天空的光线、声音、海洋或者陆地的味道.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${you.name}的嘴唇传来了温柔的感触.`);
        await maru.say_and_wait(
          `真是的,${
            callname
          }一点也不坦率呢.这个时候不主动一点的话会让人焦躁不安的呦.`,
        );
        await era.printAndWait(
          `从一开始试探般的轻啄,到后来逐渐加快地节奏,最后以重重的深吻作为结尾.直到${you.name}呼吸不过来才依依不舍地分开.`,
        );
        await era.printAndWait(
          `两人的嘴唇之间拉出了一道银丝.${
            maru.sex
          }带着无限爱意而又温柔的表情看向了${you.name}.`,
        );
        await era.printAndWait(
          `${you.name}下意识地紧紧抱住了${maru.sex},${
            maru.sex
          }同样也轻抚着${you.name}的脸颊作为回应.`,
        );
        await era.printAndWait(
          `在冰凉的海水中,只有那如同灯塔般温暖的感觉停留了好久.`,
        );
      } else {
        era.printButton('「非常抱歉我还有工作要去处理」', 1);
        await era.input();
        await maru.say_and_wait(
          `哎呀，既然这样的话那就快去处理吧，${callname}，好好工作才能得到最终的报酬.`,
        );
        await era.printAndWait(
          `${you.name}沉默着拿起公文包头也不回地离开了喫茶店，不过很快在七拐八拐的小道里迷路了.`,
        );
        await era.printAndWait(
          `最后搭了好心大叔的顺风车${you.name}才勉强在门禁前赶回宿舍.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  dream: (() => {
    const title = '焦鹿梦';
    /**
     * 比喻虚幻迷离、得失无常，以及稀里糊涂、犹如做梦的状况。
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.print(
        `醒来的时候，发现自己躺在草地上，周围是一片花田，从身边的草地一路延伸到地平线的尽头。`,
      );
      maru.print(`如果是平常的话，说不定会带着愉悦的心情漫步于花田之中。`);
      maru.print(`但是，不知为何，想要找到出口的心情占据了上风。`);
      await maru.say_and_wait(`不过，应该往哪个方向出发才好呢？`);
      era.printButton(`「长满了荆棘的玫瑰丛」`, 1);
      era.printButton(`「高大的灌木迷宫」`, 2);
      if ((await era.input()) === 1) {
        maru.print(`我所做的事情，都是为了让你痛苦吗？`);
        maru.print(`拨开荆棘的一瞬间，耳边似乎传来了叹息声。`);
        maru.print(`越是向前，前面的荆棘丛就越密，拨开需要的力气就越大。`);
        maru.print(`而且，后面的道路，不知何时已经被堵死了。`);
        await maru.say_and_wait(`没有退路了。`);
        maru.print(`身体也像是感受到了危机微微的颤抖着。`);
        maru.print(
          `若是普通的人类，或者是稍微虚弱一点的${maru.uma_sex_title}，说不定都会迷失在这连一丝阳光都看不见的囚笼之中吧。`,
        );
        maru.print(
          `渐渐的，手臂快使不出力气了，汗珠顺着皮肤滚落到地面上，然后被灌木丛汲取。`,
        );
        maru.print(`然而，无论从哪里看，似乎都不是出口。`);
        await you.say_as_passer_by_and_wait(
          `玫瑰们`,
          `尽管这样也不打算放弃吗？`,
        );
        maru.print(`灌木丛中传来了窃窃私语声。`);
        await maru.say_and_wait(
          `外面的世界比想象中还要丰富和美丽哦？在这种地方被钩住了衣角的话，不是太可惜了吗？`,
        );
        await you.say_as_passer_by_and_wait(
          `玫瑰们`,
          `原来如此，我们明白了。因为陷入了绝境，所以才要乐观面对。`,
        );
        maru.print(`窃窃私语声越来越大。`);
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `已经没有力气了，你已经没有力气了。`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `你的呼吸，虽然极力控制着，但我已经察觉到了哦？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `那份急促，那份不安，可是与你的语气完全不一样哦？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `实际上，你并没有想象中那么原谅那个训练员吧？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `就算一时之间用意识强行抑制住了，但是那份怀疑的种子已经埋下去了哦？`,
        );
        await you.say_as_passer_by_and_wait(`幻影声`, `所以，没有原谅他的必`);
        await maru.say_and_wait(`啊啊……我知道的。`);
        await maru.say_and_wait(`${callname}的背叛，确实让我很伤心呢。`);
        await maru.say_and_wait(
          `不过，就算是这样的${callname}，我也一直爱着他哦？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `为什么？为什么？爱情不过只是终有一天会破灭的幻觉。`,
        );
        await maru.say_and_wait(`爱才不是那么肤浅的东西呢！`);
        await maru.say_and_wait(
          `恋人之间如果只有泡沫般易逝的激情，会因为终有一天的分别消失而感到深深恐惧，这是不会幸福的。`,
        );
        await maru.say_and_wait(`这份恐惧，终有一天会压倒幸福时的甜蜜。`);
        await maru.say_and_wait(
          `我很害怕，有一天会失去${callname}的痛苦，就这样把我压垮。`,
        );
        await maru.say_and_wait(`不过，我相信${callname}。`);
        await you.say_as_passer_by_and_wait(`幻影声`, `明明已经背叛过你了哦？`);
        await maru.say_and_wait(`我可不能凭借自己的智慧就绝望哦？`);
        await maru.say_and_wait(
          `就算全世界的人类异口同声的说这是不可能的事情，我也不会绝望。`,
        );
        await maru.say_and_wait(
          `正因为人类无法预测自己的未来，所以发生什么都是可能的事情哦？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `明明这份乐观连自己都保护不了？`,
        );
        await maru.say_and_wait(`过去十几年，不是都这么平安度过了吗？`);
        await you.say_as_passer_by_and_wait(`幻影声`, `诶？`);
        maru.print(
          `看似密不透风的荆棘壁露出了一丝裂缝，抓住了机会的${maru.name}就这么冲出了囚笼。`,
        );
        maru.print(`离开了那片荆棘地后，浑身的力气也慢慢恢复过来了。`);
        await you.say_as_passer_by_and_wait(
          `幻影声`,
          `……因为生命是可能性的总和吗？`,
        );
        maru.print(`思索着话语的幻影，在了然的一刹那消散了。`);
      } else {
        era.drawLine();
        maru.print(`不知过了多久，依然没有离开的迹象。`);
        maru.print(
          `不管是按照左手法则，还是干脆把墙壁推倒，最终的结果都一样。`,
        );
        maru.print(
          `更糟糕的是，按照之前的轨迹回到出发点，那边也变成了墙壁的延伸。`,
        );
        await maru.say_and_wait(`唔——有点伤脑筋呢。`);
        maru.print(`只能先行退回姑且称之为中心的一小片空地了。`);
        maru.print(
          `之所以称之为空地，是因为那里的强风非常剧烈，没有草地能在那股狂风之下存活。`,
        );
        maru.print(`不过奇怪的是，那股强风会将人推到墙壁之上。`);
        maru.print(`虽然之前都迅速从侧面滑开，才避免沦落到粉身碎骨的下场。`);
        maru.print(`但是，所有能尝试的方法都已经全部试过了。`);
        await maru.say_and_wait(`如果排除所有可能的话，那么。`);
        await era.printAndWait(`${maru.name}走进了那片空地之中。`);
        await era.printAndWait(
          `尽管狂风咆哮着几乎将${maru.sex}掀翻，但${
            maru.sex
          }最终仍然站稳了脚跟。`,
        );
        await era.printAndWait(`然后。`);
        await era.printAndWait(`借着风的力量冲向了那些墙壁。`);
        await era.printAndWait(`随后，墙壁在这股强大的力量面前寸寸龟裂。`);
        await era.printAndWait(`新的道路在眼前展开。`);
      }
      await maru.say_and_wait(`虽然中途遇到了不少困难，不过都平安的度过了。`);
      await maru.say_and_wait(`接下来又会有什么在前方等待着呢？`);
      await maru.say_and_wait(
        `将过去的灰影远远抛在后面，就这么走在鲜花铺就的地毯之上。`,
      );
      await maru.say_and_wait(`……我的直觉告诉我。`);
      era.printButton(`「向着苏醒时的朝向，不断奔跑」`, 1);
      await era.input();
      await maru.say_and_wait(`预备！`);
      maru.print(`随着发令枪的响起，${maru.name}冲向了自己设定的终点。`);
      maru.print(`美丽的花朵向后飞速倒退，渐渐地，维持不住自己的身形。`);
      maru.print(`像一条五彩斑斓的丝带一样，逐渐融合在了一起。`);
      maru.print(
        `没有呼吸的掣肘，就这样越来越快，越来越快，快到好像要融化成花田的一部分了。`,
      );
      await maru.say_and_wait(`……这样的话。`);
      era.printButton(`「就这样一路加速！」`, 1);
      await era.input();
      await maru.say_and_wait(`就让你看看${maru.name}真正的实力吧！`);
      await era.printAndWait(
        `耳边传来了引擎的轰鸣声，不会错，那就是小塔的声音。`,
      );
      maru.print(`就像是小塔把自己的力量借给了我一样。`);
      maru.print(`就这样，这样就好了吗？`);
      maru.print(`不，这样就好。`);
      maru.print(`带着幼时第一次看到康塔什时的憧憬。`);
      maru.print(`在地平线的彼方，那道闪耀的光芒。`);
      maru.print(`就是终点了吧。已经能看到终点了。`);
      await maru.say_and_wait(`不知为何，稍微有些伤感呢。`);
      maru.print(`等到太阳升起的时候，这份朦胧的触感就会消散了。`);
      maru.print(`或许这就是梦的终结了吧。`);
      await maru.say_and_wait(`哎呀，这样可真不像我呢。`);
      maru.print(
        `世界上没有不散的宴席，这份甜蜜的回忆，恐怕就会永远沉睡下去了。`,
      );
      maru.print(`在现实之中也要快乐的活下去哦？我们约好了。`);
      maru.print(`早安，${maru.name}。`);
      await era.printAndWait(`${maru.name}睁开了眼睛。`);
      await era.printAndWait(`温暖的阳光轻抚着${maru.sex}的长发。`);
      await era.printAndWait(`回味着那份余韵，${maru.name}坐了起来。`);
      await era.printAndWait(`新的一天开始了。`);
    };
    f.title = title;
    return f;
  })(),
  fall_heaven: (() => {
    const title = 'GOOD END · 误入乐园的旅人';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} taste 秋川弥生/北方风味
     * @param {CharaTalk} darley 达利阿拉伯
     * @param {CharaTalk} godolphin 高多芬柏布
     * @param {CharaTalk} byerley 拜耶尔土耳其
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (
      maru,
      taste,
      darley,
      godolphin,
      byerley,
      you,
      callname,
    ) => {
      darley.name = '温柔的女神';
      godolphin.name = '睿智的女神';
      byerley.name = '严肃的女神';
      await era.printAndWait(`平平无奇的休息日。`);
      await era.printAndWait(`击溃了皇帝，漂亮的取得了二连胜。`);
      await era.printAndWait([
        '与 ',
        maru.get_colored_name(),
        ' 一同度过的这三年，恐怕是一段永远无法忘怀的日子。',
      ]);
      await era.printAndWait(['与 ', maru.get_colored_name(), ' 暂且分别。']);
      await taste.say_and_wait(`祝！贺！URA夺冠！`);
      await era.printAndWait([
        '小巧的理事长搬着差不多有',
        maru.sex,
        '一半高的奖杯送到了 ',
        maru.get_colored_name(),
        ' 手上。',
      ]);
      await maru.say_and_wait(`非常感谢！`);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 接过奖杯，面对着摄像机和在旁等待已久的记者们的采访。',
      ]);
      await maru.say_as_passer_by_and_wait('记者A', [
        maru.actual_name_with_title,
        '，请问你拿到奖杯的感受是什么？',
      ]);
      await maru.say_and_wait(
        '一般来说应该会非常激动吧？毕竟是这么盛大的赛事。',
      );
      await maru.say_and_wait('不过真当自己拿到奖杯的那一刻，心底却非常平静。');
      await maru.say_as_passer_by_and_wait(
        '记者A',
        '可以和屏幕前的观众们详细说一下吗？',
      );
      await maru.say_and_wait([
        '是！',
        maru.uma_sex_title,
        '们为了争夺第一在不为人知的地方挥洒汗水，在赛场之上奋力拼搏的朝气让我有了一种『啊，我就是为了这个才参加比赛的』。呵呵～',
      ]);
      await maru.say_as_passer_by_and_wait('记者A', [
        maru.actual_name_with_title,
        ' 对',
        maru.uma_sex_title,
        '们了解的很深呢。',
      ]);
      await maru.say_and_wait([
        '是的！比赛之前我都会和参赛的',
        maru.uma_sex_title,
        '们聊天。然后听到了很多有趣的事情呢～',
      ]);
      await maru.say_as_passer_by_and_wait(
        '记者A',
        '可以和屏幕前的观众们说一下吗？',
      );
      await maru.say_and_wait([
        '呣，就拿最近的一场来说吧，有个',
        maru.uma_sex_title,
        '——',
      ]);
      await maru.say_and_wait([
        '——最后',
        maru.sex,
        '一直在抱怨自己的训练员是个木头脑袋呢。',
      ]);
      await maru.say_as_passer_by_and_wait('记者A', '真是有意思，非常感谢。');
      await era.printAndWait(
        '采访的记者还没来得及一旁离开，另一名记者就迫不及待的冲到了前面。',
      );
      await maru.say_as_passer_by_and_wait('记者B', [
        '不好意思，请问 ',
        maru.actual_name_with_title,
        ' 接下来的目标是什么？',
      ]);
      await maru.say_and_wait('唔，真是一个比较困难的问题呢——');
      await maru.say_and_wait('与训练员商讨的结果是休战一段时间。');
      await maru.say_as_passer_by_and_wait(
        '记者B',
        '多半是想要和自己的训练员一起度蜜月吧。这种事情我见多了。',
        true,
      );
      await maru.say_as_passer_by_and_wait('记者B', '是得了屈腱炎吗？');
      await maru.say_and_wait(
        '是的，决赛前去看了一次医生，虽说只是轻症，但继续参加还是有一定的风险。',
      );
      await maru.say_and_wait([
        '虽然训练员',
        you.adult_sex_title,
        '坚持让我休息，不过我还是想坚持到底……所幸最后有惊无险的胜利了，真是多亏 ',
        callname,
        ' 呢⭐',
      ]);
      await maru.say_as_passer_by_and_wait(
        '记者B',
        [callname, '？果然胜利的', maru.uma_sex_title, '最后都是同一个结局。'],
        true,
      );
      await maru.say_as_passer_by_and_wait(
        '记者B',
        '作为你的训练员一定在背后非常努力吧。可以和我们一起讲讲有关训练员的事情吗？',
      );
      await maru.say_and_wait('这么好机会，不如让训练员自己来说吧！');
      await era.printAndWait([
        '在一旁观看的 ',
        you.get_colored_name(),
        ' 被 ',
        maru.get_colored_name(),
        ' 拉了过来。',
      ]);
      era.printButton('「诶？我吗？」', 1);
      await era.input();
      await era.printAndWait([
        '面对着一大堆的突然兴奋记者与各式专业摄影设备，毫无准备的 ',
        you.get_colored_name(),
        ' 留下了一滴冷汗。',
      ]);
      await maru.say_and_wait([
        '训练员',
        you.adult_sex_title,
        '不要害羞也来说一下感想吧！',
      ]);
      era.printButton(
        `总总总之非常感谢特雷森对我的信任，担当${maru.uma_sex_title}努力的配合……`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait('摄影师', '看这边！');
      await era.printAndWait('手捧着三年的欢笑与泪水落下帷幕。');
      era.drawLine();
      await era.printAndWait([
        '与 ',
        maru.get_colored_name(),
        ' 暂且分别，',
        you.get_colored_name(),
        ' 坐在训练室。',
      ]);
      await era.printAndWait(
        '收藏室中摆放的奖杯作为锚点，记录了这三年度过的时光绝非梦幻。',
      );
      await era.printAndWait(
        '只是，突然之间没有了目标，似乎一下子安下心来了。',
      );
      await era.printAndWait('头昏昏沉沉的，眼皮也在打架。');
      await you.say_and_wait([
        maru.get_colored_name(),
        ' 回来之前，就这样稍微睡一会吧。',
      ]);
      await era.printAndWait([
        '似乎找到了合适的理由，心安理得闭上了双眼的 ',
        you.get_colored_name(),
        ' 就这样陷入了沉睡。',
      ]);
      await era.printAndWait([
        '再次醒来时，',
        you.get_colored_name(),
        ' 来到了一片广阔无垠的草原。',
      ]);
      await era.printAndWait([
        '与 ',
        maru.get_colored_name(),
        ' 谈笑时，',
        maru.sex,
        '半开玩笑的说着「我去过伊甸哦」。',
      ]);
      await era.printAndWait([
        '从这片人间绝对不存在的美景看来，',
        maru.sex,
        '说的恐怕是真的。',
      ]);
      await you.say_and_wait('接下来该往哪个方向走？');
      await era.printAndWait([
        '然后有一个迫切需要解决的问题，',
        you.get_colored_name(),
        ' 不是',
        maru.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([maru.get_colored_name(), ' 的办法微乎甚微。']);
      await era.printAndWait([
        maru.get_colored_name(),
        ' 快回来了，剩下的抉择时间不多了。',
      ]);
      await you.say_and_wait('只能出发了。');
      await era.printAndWait(
        '越是犹豫情况只会愈加糟糕，做出选择也比不做选择要好。',
      );
      await era.printAndWait([
        '回忆着 ',
        maru.get_colored_name(),
        ' 所说的模糊方向，',
        you.get_colored_name(),
        ' 向着那边出发了。',
      ]);
      era.println();
      await era.printAndWait([
        '不知走了多久，时间在这段旅程之中也变得模糊。所幸此处不觉饥饿干渴，让 ',
        you.get_colored_name(),
        ' 的内心稍感慰藉。',
      ]);
      await era.printAndWait('一成不变的草原，似乎永远也无法到达的彼方。');
      await era.printAndWait([
        maru.get_colored_name(),
        ' 所说的那片金黄色的草原……',
      ]);
      await you.say_and_wait('真的存在吗？');
      await era.printAndWait('那片美丽世界。');
      await maru.say_as_unknown_and_wait([maru.sex, '就在那里哦？']);
      await you.say_and_wait([maru.get_colored_name(), '！？']);
      await era.printAndWait([
        '不远处的那位，分明是 ',
        maru.get_colored_name(),
        '！',
      ]);
      await you.say_and_wait('原来你在这里！！');
      await era.printAndWait([
        '欣喜之间，',
        you.get_colored_name(),
        ' 向那道幻影扑去。',
      ]);
      await you.say_and_wait('诶？');
      await era.printAndWait(['拥抱的双臂却穿了', maru.sex, '的身体。']);
      await maru.say_and_wait('……');
      await era.printAndWait('幻影一言不发，向着某处走去。');
      await you.say_and_wait('？');
      await era.printAndWait(
        '一开始只是慢慢的走着，然后速度越来越快，最后干脆奔跑了起来。',
      );
      await you.say_and_wait('等一下！');
      await era.printAndWait([
        '似乎诞生的目的就是为了引导 ',
        you.get_colored_name(),
        '，跑不动坐下来喘气时，在不远处一动不动。',
      ]);
      await era.printAndWait([
        '全力奔跑时，却永远都差那么一点触及到',
        maru.sex,
        '。',
      ]);
      await era.printAndWait(['该怎么办？怎么才能再次触碰', maru.sex, '？']);
      await era.printAndWait(['不甘心，想要追上', maru.sex, '。']);
      await era.printAndWait([
        '想要超过',
        maru.sex,
        '，想看到',
        maru.sex,
        '所知的世界。',
      ]);
      await you.say_and_wait('一定很漂亮吧！不然不会这么执著的前进。');
      await you.say_and_wait('想要拥有，想要占据，想要看到那片美丽的世界。');
      await era.printAndWait(
        '隐隐约约，好像触及到了一直制约着自己的那层桎梏。',
      );
      await era.printAndWait('如果继续跑下去的话，可能会被活活累死。');
      await you.say_and_wait(
        '我想了很久，从契约的那天开始，一直想到了 URA 结束的那一刻。',
      );
      await you.say_and_wait('我真正想要的，其实是美的一瞬间。');
      await you.say_and_wait(
        '一瞬间，感受达到最高潮的那一刻，我就是为了一刻活到现在的。',
      );
      await you.say_and_wait('此时此刻，不就是三女神给我的唯一的机会吗？');
      await you.say_and_wait('那么，答案从一开始就确定了。');
      await era.printAndWait([
        '不顾身体传出的阵阵哀鸣，',
        you.get_colored_name(),
        ' 再次向前加速。',
      ]);
      await era.printAndWait('……与前方那抹曙光，保持了遥不可及的梦幻距离。');
      await era.printAndWait([
        '人类与',
        maru.uma_sex_title,
        '之间，那条难以逾越的天堑。',
      ]);
      await you.say_and_wait('呜啊啊啊啊啊！', true);
      await era.printAndWait('挤出全身最后一丝力气，奋力一跃。');
      await era.printAndWait(
        '即使是幻影似乎也没料到这最后一搏，也来不及反应。',
      );
      await era.printAndWait([
        '最终，',
        you.get_colored_name(),
        '  触碰到了那个身影。',
      ]);
      await you.say_and_wait('我做到了！', true);
      await era.printAndWait('然后，若有若无的触感稍纵即逝。');
      await era.printAndWait([
        '耗尽最后一丝力气的  ',
        you.get_colored_name(),
        '，只能看着不远处站定的幻影。',
      ]);
      await you.say_and_wait(
        [maru.get_colored_name(), '，我终于体会到你的感受了！'],
        true,
      );
      await era.printAndWait('极限运动之下，突然摔倒，恐怕已经骨折了吧。');
      await era.printAndWait('剧烈的呼吸之下，肺部像是小刀一点点割肉般疼痛。');
      await era.printAndWait([
        '巨大的代价之下，',
        you.get_colored_name(),
        ' 又得到了什么？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 的内心已经被那片美所占据，泪水不受控制的流淌下来。',
      ]);
      await you.say_and_wait('我要死了吗？', true);
      await era.printAndWait([
        '幻影不再与之前一样向着目标走去，却反而向 ',
        you.get_colored_name(),
        ' 走了过来。',
      ]);
      await era.printAndWait([
        '就像是给予凋零之人临终关怀一样，轻轻将 ',
        you.get_colored_name(),
        ' 置于膝间。',
      ]);
      await you.say_and_wait([maru.get_colored_name(), '。'], true);
      await era.printAndWait(
        '落木归根，所见之人却非所思之人，心湖却被初春随风飞舞的第一片花瓣所覆盖，一切喧嚣归于沉寂。',
      );
      await you.say_and_wait('这是为了见到你所献上的礼物。', true);
      await you.say_and_wait('我……我不会再逃避了。', true);
      await era.printAndWait('不断涌出的泪水模糊了视野。');
      await you.say_and_wait('你……你永远不会孤独了。', true);
      await era.printAndWait([
        '最后的画面，定格在与 ',
        maru.get_colored_name(),
        ' 所见的那片大海。',
      ]);
      await era.printAndWait('如镜面般平静的大海，映照着过往云烟。');
      era.drawLine();
      await you.say_and_wait('这里是？');
      await era.printAndWait('再次苏醒时，眼前是一片金色的草原。');
      await era.printAndWait([
        '正如 ',
        maru.get_colored_name(),
        ' 口中所说，那片所有人类的摇篮。',
      ]);
      await godolphin.say_and_wait('已经不需要再哭泣了。');
      await godolphin.say_and_wait('这片乐园之中不会再有悲伤存在。');
      await era.printAndWait([
        '象征包容的女神高多芬柏布带着慈爱的神情看着 ',
        you.get_colored_name(),
        '。',
      ]);
      await godolphin.say_and_wait('你已向我们证明了自己的勇气。');
      await godolphin.say_and_wait(
        '直到再次见面为止，请顺着自己的想法走完这条道路吧。',
      );
      await era.printAndWait([
        '象征勇气的女神达利阿拉伯带着期许的目光鼓励 ',
        you.get_colored_name(),
        '。',
      ]);
      await darley.say_and_wait([
        '以人类之身，拼尽全力才得以触碰到',
        maru.uma_sex_title,
        '的边缘。',
      ]);
      await darley.say_and_wait(
        '强大一词，与你无缘。一直以来，不过像胆小鬼一样，钻进谎言编织的纸城堡中，妄想着城堡牢不可破。',
      );
      await darley.say_and_wait(
        '……然而，你在最后的关头，向我们深深的忏悔了。不再逃避，拼尽全力的最后一搏，就是忏悔的证明。',
      );
      await era.printAndWait([
        '象征力量与强大的女神拜耶尔土耳其带着叹息的神情看着 ',
        you.get_colored_name(),
        '。',
      ]);
      era.printButton('「三女神大人！？」', 1);
      await era.input();
      await byerley.say_and_wait(
        '如你所见，我们便是创造并守护这片伊甸的女神。',
      );
      await byerley.say_and_wait([
        '临终之时前来的普通人数不胜数，并非',
        maru.uma_sex_title,
        '以活人之躯前来的人，恐怕只有你一人了。',
      ]);
      await darley.say_and_wait('你有什么愿望的吗？');
      await darley.say_and_wait(
        '只要不是影响到人类社会的运作，我们都可以满足你。',
      );
      await era.printAndWait('愿望吗？');
      await era.printAndWait('细细品味一路走来的艰辛，最后得出的答案是');
      era.printButton(`「请让我回到现实世界，回到 ${maru.name} 的身边」`, 1);
      await era.input();
      await byerley.say_and_wait(
        '愿望许下的那一刻你就会回到人类社会，还是说，你的愿望就是这个？',
      );
      era.printButton(`「尊敬的女神大人，如您所见，这就是我的愿望。」`, 1);
      await era.input();
      await you.say_and_wait(
        '我所追求的美，是在这种普通人的标准下不好不坏的运气，在付出极大的代价之后才会昙花一现。',
      );
      await you.say_and_wait(
        '比喻的话，就像用汗水与时间换了一张美术展的抽奖券。',
      );
      await you.say_and_wait(
        '想要进入这场美术展，就必须抽到这张美术展的票证。',
      );
      await you.say_and_wait(
        '然而任何愿望，哪怕是许愿自己的运气变好，都会让我所追求的美大打折扣。',
      );
      await you.say_and_wait(
        '许愿的结果，反而让自己离自己的目标越来越远，不过是空虚的产物罢了。',
      );
      await darley.say_and_wait('……既然你心意已决，请让我们送你一程。');
      await godolphin.say_and_wait(
        '可爱的孩子，希望你在经历完一生之后，再次来到这里时，能够享有安息。',
      );
      await byerley.say_and_wait(
        '……老鼠虽弱，脆弱的不过是身躯，弱小的身躯之中所蕴含的勇气，不由身体所限，值得动容。',
      );
      await byerley.say_and_wait('或许是我小看了你。');
      await era.printAndWait([
        you.get_colored_name(),
        ' 的身体渐渐离开了地面，在三女神的目送之下，越来越高，越来越快，直到意识中断的那一刻，那片金黄色的草原。',
      ]);
      await era.printAndWait([
        '……以及，作为幻影的',
        maru.sex,
        '向 ',
        you.get_colored_name(),
        ' 挥手道别。',
      ]);
      era.drawLine();
      await maru.say_and_wait([callname, '？']);
      await era.printAndWait('似乎过了很久，又像是并没有经过太久。');
      await era.printAndWait([
        '似乎在 ',
        maru.get_colored_name(),
        ' 的眼中，自己就像是疲惫过头陷入沉睡一样。',
      ]);
      era.printButton(`「我回来了，${maru.name}。」`, 1);
      await era.input();
      await era.printAndWait([
        '就像是梦中的幻影一样，',
        maru.get_colored_name(),
        ' 露出了笑容。',
      ]);
      await maru.say_and_wait('欢迎回来。');
    };
    f.title = title;
    return f;
  })(),
  async fall_heaven_end() {
    await era.printAndWait(`Thank you for your playing!`);
  },
  gentle_wind: (() => {
    const title = 'TRUE END 温柔之风吹拂在整个世界';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `在与${maru.name}经历了难以忘怀的三年之后，夺得了URA奖杯`,
      );
      await era.printAndWait(`接下来要挑战的就是全新的闪耀系列赛了`);
      await era.printAndWait(`不过在此之前。`);
      await you.say_and_wait(`接下来就是去见${maru.name}了吗？`);
      await you.say_and_wait(`有点紧张啊。`);
      era.drawLine({ content: '天台' });
      await era.printAndWait(`拉开天台的大门。`);
      await you.say_and_wait(`好像${maru.name}不在啊？`);
      await era.printAndWait(`除了一阵微风吹过，天台之上再无人影。`);
      await maru.say_and_wait(`猜猜我是谁？`);
      await era.printAndWait(
        `${you.name}的视线被一双手所覆盖，熟悉的味道立刻让${you.name}意识到了来者的身份。`,
      );
      await you.say_and_wait(`${maru.name}`);
      await era.printAndWait(
        `原以为自己会激动的大喊出来，但此刻的声音平稳的自己都有些怀疑。`,
      );
      await maru.say_and_wait(`不愧是${callname}呢，一下子就猜出了我是谁。`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}我从没有这么喜欢过一个人呢♪`,
      );
      await maru.say_and_wait(`这就是所谓的爱吗♪`);
      era.printButton(`「${maru.name}我有话想对${you.name}说，所以」`, 1);
      await era.input();
      await maru.say_and_wait(
        `哼哼～${callname}想对${maru.elder_sibling_sex_title}撒娇吗？`,
      );
      await maru.say_and_wait(`不管是什么恶……`);
      era.printButton(`「请跟我永远生活在一起」`, 1);
      await era.input();
      await era.printAndWait(
        `在${maru.name}一脸难以置信的神情之中，${
          you.name
        }将象征着誓约的戒指递给了${maru.sex}。`,
      );
      era.printButton(`「比起理想，比起赛跑，我更在乎的其实是${you.name}」`, 1);
      await era.input();
      era.printButton(`「所以请接受我的爱意吧」`, 1);
      await era.input();
      await maru.say_and_wait(
        `这下的话，不对这份爱意抱以同样的回应的话，我可是没脸去见三女神呢。`,
      );
      await maru.say_and_wait(
        `${callname}，不止在赛跑上，今后的生活也请多多指教了。`,
      );
      era.printButton(`「我也是，今后也请多多指教了」`, 1);
      await era.input();

      await era.printAndWait(
        `誓约之吻是什么味道的？咸的？还是带有一丝甜味？此刻都没眼前心醉的${maru.teen_sex_title}更加重要。`,
      );
      await era.printAndWait(
        `${you.name}与${maru.name}之间的命运在经历错综复杂的结果之后终于得到了馈赠。`,
      );
      await era.printAndWait(
        `${maru.name}的奔跑带给了赛${maru.uma_sex_title}们勇气与希望。`,
      );
      await era.printAndWait(
        `赛${maru.uma_sex_title}们今后也会一直追逐着${
          maru.name
        }的背影然后超越${maru.sex}吧。`,
      );
      await maru.say_and_wait(
        `比起获胜的话，能让更多的${maru.uma_sex_title}们感受到希望的存在才是我的理想♪`,
      );
      await maru.say_and_wait(
        `接下来的日子里，在草场的一端默默地注视着赛${maru.uma_sex_title}们，然后引导${
          maru.couple_title
        }前往伊甸园便是我新的使命了。`,
      );
      await maru.say_and_wait(
        `不过此刻的话，能和${
          callname
        }甜甜蜜蜜的生活在一起才是最幸福的 TRUE END 呢♪`,
      );
      await era.printAndWait(
        `引导着处于迷茫时期 ${maru.name} 的 ${
          you.name
        } 与引导着迷茫${maru.uma_sex_title}的 ${
          maru.name
        } 最终将化为温柔之风吹拂于赛${maru.uma_sex_title}的世界之中。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async gentle_wind_end(maru, callname) {
    await era.printAndWait(
      `就这样，二人的故事暂且迎来的结局，可喜可贺可喜可贺。`,
    );
    await era.printAndWait(`是否查阅提示？`);
    era.printButton(`是`, 1);
    era.printButton(`否`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(`想要达成GOOD END 生涯比赛需要全部获胜。`);
      await era.printAndWait(`节日相关剧情选项不影响结局。`);
      await era.printAndWait(
        `剧情相关注意第二年选项，存档可以考虑从第二年1月第三周开始，事件名：春冬之交。`,
      );
      await era.printAndWait(
        `若满足GE条件，圣诞节事件后选择清空队伍列表，重新选择${maru.name}触发对话，会出现特殊台词。`,
      );
      await era.printAndWait(
        `另外,第三年第一周,先选择新年参拜再出发去神社触发口上综合收益更高.`,
      );
      await era.printAndWait(`最后，祝早日达成GE。`);
    } else {
      await maru.say_as_unknown_and_wait(
        `想要自己探索吗？看来是有攻略之神的潜质呢。${callname} 加油！`,
      );
    }
  },
  ne_happiness_day: (() => {
    const title = 'NORMAL END · 平淡的每一天';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `虽然不知道之后发生了什么，不过${maru.name}依然没有什么变化。`,
      );
      await era.printAndWait(
        `在那之后，按照所制定的计划，每一步都踏踏实实的结束了。`,
      );
      await era.printAndWait(`不久之后——`);
      await era.printAndWait(`机场`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}，送到这里就可以了。`);
      await you.say_and_wait(`到了巴黎后，要给我发消息哦？`);
      await maru.say_and_wait(
        `呵呵～当然，虽然只是两个月的旅行，不过终于有机会可以去埃菲尔铁塔参观了。`,
      );
      await maru.say_and_wait(
        `${you.actual_name}也是，不要在我离开的时候勾搭其他马娘哦？`,
      );
      await you.say_and_wait(`啊哈哈哈`);
      await maru.say_and_wait(`你这家伙`);
      await era.printAndWait(`你被她狠狠的用食指敲了一个暴栗。`);
      await you.say_and_wait(`好痛！`);
      await maru.say_and_wait(`活该——真是让人不省心的家伙。`);
      await maru.say_and_wait(`那么，我该出发了。`);
      await you.say_and_wait(`一路顺风！`);
      await maru.say_and_wait(`${you.actual_name}回去的时候也要一路顺风哦！`);
      await era.printAndWait(`不知为何，${maru.name}露出了寂寞的表情。`);
      await maru.say_and_wait(`${you.actual_name}……不，没什么。`);
      await maru.say_and_wait(`差不多该出发了。`);
      await era.printAndWait(`你看着${maru.name}的身影消失在了人群之中。`);
      era.drawLine();
      await era.printAndWait(
        `作为三年以来互相扶持的担当,虽然互有好感,但始终无法更近一步.`,
      );
      await era.printAndWait(`究竟是缺少了什么呢？`);
      await era.printAndWait(`不过,像这样平稳的结束也是一种幸福吧.`);
      await you.say_and_wait(`今天真是个好天气啊。`, true);
      await era.printAndWait(
        `${you.name} 眯着眼，看着飞机在天空之中划破薄薄云朵，拖出一道白色的细线。`,
      );
      await era.printAndWait(
        `曾几何时，${you.name} 也在这种天气下看着 ${maru.name} 依靠在天台栏杆上眯着眼轻轻哼唱歌曲的样子，顺着她的歌声飘去的地方.`,
      );
      await era.printAndWait(`那就是飞机云了吧，心里这么想着。`);
      await era.printAndWait(`今天也这么平安度过了。`);
      await era.printAndWait(
        `希望${maru.name}也是，每天都是这样无病无灾的度过。`,
      );
      await era.printAndWait(
        `说起来，距离新马娘入学也快了。得赶快挖掘出新的原石才行。`,
      );
      await era.printAndWait(
        `——就像在那段忧郁的日子里，${maru.name}也从未放弃过那样。`,
      );
      await era.printAndWait(
        `已经一去不复返了，最后看了一眼她所前去的方向，你随后头也不回的离开。`,
      );
    };
    f.title = title;
    return f;
  })(),
  girls_dream: (() => {
    const title = 'NORMAL END · 梦的未来';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `三年以来，${you.name}与${maru.name}向着同一目标奔跑着，在之后的ura比赛取得了优胜。`,
      );
      await era.printAndWait(`在这之后————`);
      await maru.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '学姐' : '学长'
        }，这次的GIII我按照${you.name}教的方法真的胜利了！`,
      );
      await maru.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}B`,
        `原来还有这种解决方法吗？不愧是丸善${
          maru.sex_code !== 1 ? '学姐' : '学长'
        }`,
      );
      await maru.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}C`,
        `多亏了丸善${
          maru.sex_code !== 1 ? '学姐' : '学长'
        }的技巧，现在和训练员${you.adult_sex_title}也相处的很好了。`,
      );
      await maru.say_and_wait(`能够帮上后辈们的忙真是太好了！`);
      await era.printAndWait(`今天的${maru.name}也在给予后辈们建议。`);
      await maru.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '学姐' : '学长'
        }的训练员${you.adult_sex_title}来了！`,
      );
      await era.printAndWait(
        `被${maru.uma_sex_title}们围在中间的${
          maru.name
        }注意到了${you.name}的存在。`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `${maru.name}将饱满的胸部整个压在了${you.name}的肩膀上。`,
      );
      await maru.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}B`,
        `呜哇，这个是？`,
      );
      await maru.say_as_passer_by_and_wait(
        `路人${maru.uma_sex_title}C`,
        `丸善${maru.sex_code !== 1 ? '学姐' : '学长'}和${
          maru.sex
        }的训练员今天也是非常恩爱呢。`,
      );
      era.printButton(`「抱歉来晚了」`, 1);
      await era.input();
      await maru.say_and_wait(
        `嗯嗯，已经有两个小时没看到${
          callname
        }了，${maru.elder_sibling_sex_title}我真的好寂寞呢～`,
      );
      await maru.say_and_wait(`作为补偿的话，今天下午和我一起约会吧♪`);
      era.printButton(`「其实我也因为好～久没看到${maru.name}所以不安了」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}果然一直想着我呢，那么惯例的——`);
      await era.printAndWait(`二人在训练场上紧紧地抱在了一起。`);
      await maru.say_and_wait(`果然还是最喜欢${callname}了呢⭐`);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru 丸善斯基
   * @param {string} callname 丸善斯基对玩家的称呼
   */
  async girls_dream_end(maru, callname) {
    await era.printAndWait(`是否查阅提示？`);
    era.printButton(`是`, 1);
    era.printButton(`否`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(`想要达成GOOD END 生涯比赛需要全部获胜。`);
      await era.printAndWait(`节日相关剧情选项不影响结局。`);
      await era.printAndWait(
        `剧情相关注意第二年选项，存档可以考虑从二年1月第三周开始，事件名：春冬之交。`,
      );
      await era.printAndWait(
        `若满足TE/GE条件，圣诞节事件后选择清空队伍列表，重新选择${maru.name}触发对话，会出现特殊台词。`,
      );
      await era.printAndWait(
        `另外，第三年第一周，先选择新年参拜再出发去神社综合收益更高.`,
      );
      await era.printAndWait(`最后，祝早日达成GE。`);
    } else {
      await maru.say_as_unknown_and_wait(
        `想要自己探索吗？看来是有攻略之神的潜质呢。${callname} 加油！`,
      );
    }
  },
  be_Self_contempt: (() => {
    const title = 'BAD END · 木旺土溃';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     */
    const f = async (maru, you) => {
      await era.printAndWait(`训练室`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}，我先回去了，明天见！`);
      await era.printAndWait(`${maru.name} 离开了训练室。`);
      await era.printAndWait(
        `天色昏暗，与昨天并无不同的工作日，黄昏与夜晚的交界处所呈现的蓝色光线照射进了训练室中。`,
      );
      await era.printAndWait(
        `${you.name} 呆呆的坐在训练室那张熟悉的座位之上。`,
      );
      await era.printAndWait(`不是为了追加训练，也不是打算制定计划。`);
      await you.say_and_wait(`也许我应该就此退出更好一点。`);
      await era.printAndWait(
        `不是因为${maru.name}能力不足。正相反，她出色的完成了每一项计划，甚至反过来根据自己的实际经验反过来对你进行指点。`,
      );
      await era.printAndWait(`真正的问题在于`);
      era.println();
      await you.say_and_wait(
        `${maru.name}这块质量极高的原石，应该由更好的雕琢匠来打造。`,
      );
      await you.say_and_wait(`我的能力不足，仅此而已。`);
      await you.say_and_wait(
        `为了${maru.name}着想，我不能再继续装下去了，必须找个机会跟她坦白。`,
        true,
      );
      await era.printAndWait(
        `你轻柔的抚摸着那张在海边拍摄的，与${maru.name}合影的照片，然后撕成两半，再将碎片堆在一起，再次撕成两半。`,
      );
      await you.say_and_wait(
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
      await you.say_and_wait(`差不多该和${maru.name}交代一切了。`, true);
      await era.printAndWait(`你离开了训练室，这个曾经挥洒泪水与汗水的地方。`);
      await era.printAndWait(`然后重重的关上了门。`);
      era.setToBottom();
      await era.printAndWait(`——黏在办公桌上的一便利贴`);
      await era.printAndWait(
        `与担当${maru.uma_sex_title} ${maru.name} 于天台见面。`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(`出道战结束后与 ${maru.name} 在预订餐厅庆祝。`);
      await era.printAndWait(`……`);
      await era.printAndWait(
        `等到皋月赏结束后，向 ${maru.name} 学习开车以及做饭的技巧（注：${maru.name} 做饭非常好吃！）。`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(`感谢一直以来的陪伴，是我承受不住压力，对不起。`);
      await era.printAndWait(`不久后，你单方面向理事长提出了辞职申请。`);
      await era.printAndWait(
        `从此，那片失去了营养的泥土再也没有新的嫩芽探出头。`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_broken_tears: (() => {
    const title = 'BAD END · 丸善斯基的信';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      maru.say(
        ` ${callname}，你看到这封信的时候，我已经在飞向巴黎的航班了吧。`,
      );
      maru.say(`请原谅我的不辞而别。`);
      maru.say(`坦率的说，和 ${callname}相遇的日子，每一天都过得很幸福。`);
      maru.say(`所以，我没有责怪 ${callname}的意思。`);
      maru.say(`只是，我有点无法面对接下来的道路，不知道该如何是好。`);
      maru.say(
        `我已经向理事长申请了三个月的休学，打算这段时间在法国旅游转换心情。`,
      );
      maru.say(`说不定在这段时间就想通该怎么面对 ${callname}和后辈们了呢♪`);
      maru.say(
        `……就跟 ${callname}所想的一样，我不过是一个夹着尾巴逃跑的懦弱马娘。`,
      );
      maru.say(`……想来想去，恐怕也只有这条路可以走了呢。`);
      maru.say(
        `虽然就这么抛下这边的后辈们内心多少还是有罪恶感……不，她们凭借自己的努力一定会超过我的！`,
      );
      maru.say(
        `我发自内心的相信，她们一定会变得更加勇敢，更加努力的向着更高的顶峰奔跑。`,
      );
      maru.say(
        `啊，好像过于消极了呢。这样子可不像${
          maru.elder_sibling_sex_title
        }大人。`,
      );
      maru.say(`等到了法国，我会将这边的风土人情通过照片和视频发过来。`);
      maru.say(`到时候和以前一样，拜托 ${callname}发在马推上了哦？`);
      maru.say(`到时候后辈们也会大吃一惊吧！`);
      await maru.print_and_wait(`就这么说定了哦！`);
      era.setToBottom();
      maru.say(`对不起。`);
      await era.printAndWait(
        `信的最后一行被泪水沾湿，向四周扩散的字迹模糊不清。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `但是 ${maru.name} 已经不会再回来了。${you.name} 心中比谁都清楚。`,
      );
      await era.printAndWait(`无可奈何。`);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '雨天（离别）';
    /**
     * @param {CharaTalk} maru 丸善斯基
     * @param {CharaTalk} you 玩家
     * @param {string} callname 丸善斯基对玩家的称呼
     */
    const f = async (maru, you, callname) => {
      //节拍1 行动：丸善斯基提示到站了 反应：接过了玩家手中的行李箱 价值负荷正或负？亲密/孤独(-)
      await era.printAndWait(`机场`);
      await maru.say_and_wait(`送到这里就可以了。`);
      await era.printAndWait(
        `${maru.name} 接过了 ${you.name} 紧握着的行李箱。`,
      );
      //节拍2 行动：玩家对丸善斯基即将离开表示不舍 反应：丸善斯基安慰训练员 亲密/孤独(-)
      await you.say_and_wait(`到了巴黎记得给我发消息。`);
      await maru.say_and_wait(`不用这么担心啦⭐只是去巴黎旅行一段时间。`);
      //节拍3 行动：丸善斯基摸了摸头 反应：玩家害怕失去 失/得(-)
      await era.printAndWait(`${maru.name} 笑着摸了摸 ${you.name} 的头。`);
      await era.printAndWait(
        `比起任何时候都要温柔的抚摸，${you.name} 却感到了恐惧。`,
      );
      await you.say_and_wait(`路上小心……无论如何也说不出口`, true);
      //节拍4 行动：丸善斯基鼓励训练员 反应：玩家笑着接受了这份鼓励 失/得(+)
      await maru.say_and_wait(
        `即使身处异国他乡，我们之间相系的纽带也不会断开。`,
      );
      await maru.say_and_wait(`所以，勇敢一点吧，我最喜欢的 ${callname}。`);
      await you.say_and_wait(`……是啊，我感受到了这份温暖在我的心中涌动。`);
      //节拍5 行动：丸善斯基准备离开 反应：玩家目送丸善斯基离开 失/得(-)
      await you.say_and_wait(`那么，该出发了——`);
      await maru.say_and_wait(`——是啊，现在是分别的时候了。`);
      await era.printAndWait(`紧握住的双手分开了。`);
      await era.printAndWait(
        `${you.name} 看着 ${maru.name} 提着行李箱准备离开。`,
      );
      //节拍5 行动：玩家紧紧抱住了丸善斯基 反应：丸善斯基准备挣脱 亲密/孤独(--)
      await you.say_and_wait(`${maru.name}！`);
      await era.printAndWait(`${you.name} 采取了行动。`);
      await maru.say_and_wait(`！`);
      await era.printAndWait(
        `${you.name} 紧紧地抱住了${
          maru.sex
        }，周围的旅客不由得停下了脚步看着你们。`,
      );
      await maru.say_and_wait(`${you.actual_name}，放开我。`);
      await era.printAndWait(`从未听过的 ${maru.name} 焦躁的声音。`);
      //节拍6 行动：玩家追击 反应：丸善斯基沉默流泪 失/得(-)
      await you.say_and_wait(`这样就好，让我再感受一下你的温度。`);
      await you.say_and_wait(`我还是无法说服自己。`);
      await you.say_and_wait(`那道风，那道温柔的风，就要在我眼前消失了。`);
      await maru.say_and_wait(`——${callname}`);
      await era.printAndWait(`努力抑制着悲伤的${maru.teen_sex_title}。`);
      //节拍7 行动：丸善斯基反过来紧紧抱住了玩家 反应：玩家感受到了丸善斯基的孤独 失/得(++)
      await era.printAndWait(`然后————`);
      await you.say_and_wait(`${maru.name}`, true);
      await era.printAndWait(`紧紧抱住了 ${you.name}`);
      await maru.say_and_wait(`我也害怕，害怕失去 ${callname}`);
      await maru.say_and_wait(`痛苦也好，悲伤也好，都不想再一个人承担了。`);
      await maru.say_and_wait(`和你一起，一起感受风的吹拂，一起感受清晨的到来`);
      await maru.say_and_wait(
        `呐，${callname}，就这样一起离开吧，离开这个悲伤的地方。`,
      );
      //节拍7 行动：玩家坚决拒绝 反应:更大的悲伤 亲密/孤独(---)
      await you.say_and_wait(`抱歉`);
      await era.printAndWait(`${you.name} 的心在滴血`);
      await you.say_and_wait(`我犯下的罪孽，我现在就要为此赎罪。`);
      await era.printAndWait(
        `直视着 ${maru.name} 因悲伤而扭曲着的脸，继续说了下去。`,
      );
      await you.say_and_wait(
        `如果就这样一走了之，那么作为训练员的我就已经死了。`,
      );
      await you.say_and_wait(
        `失去了训练员这一身份，作为训练员实现培养${maru.uma_sex_title}的这一理想也就不复存在了。`,
      );
      await you.say_and_wait(`失去了理想的我，只会堕落到更深的地狱。`);
      await you.say_and_wait(`所以，离开吧，从我身边就此离开吧。`);
      //节拍8 行动：两人接吻 反应:发誓一定会再次见面 亲密/孤独(++++) 失/得(++)
      await era.printAndWait(
        `${you.name} 反过来抚摸着 ${maru.name} 柔软的秀发，感受着${
          maru.sex
        }的心跳。`,
      );
      await you.say_and_wait(`所以 ${maru.name}————`);
      await era.printAndWait(
        `略带一丝铁锈味的舌头强行进入了 ${you.name} 的口腔。`,
      );
      await era.printAndWait(`短暂接触后，又依依不舍的分离。`);
      await maru.say_and_wait(`我可不会就这么轻易放弃的，所以说，${callname}`);
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        {
          content: '无论身处何地，',
          color: maru.color,
        },
        '我们的心永远在一起。」',
      ]);
      await maru.say_and_wait(`那么，再一次。`);
      await era.printAndWait(`无需言语，享受着稍纵即逝的幸福。`);
      await era.printAndWait(`————直至二人分离`);
    };
    f.title = title;
    return f;
  })(),
};
