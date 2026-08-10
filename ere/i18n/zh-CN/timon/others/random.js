/**
 * @file 随机小事件
 * @author イーウィヤ
 * @author 雞雞
 * @author 幽白書
 * @author KUN
 * @author Mr.E.
 * @author 念来过倒要你
 * @author 牛蛙煲
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = {
  god_coin: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} _ 无意义参数，但必须留着
     * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
     * @param {number|undefined} god 随机女神的ID（抽中随机女神的好感的情况），如果所有女神都已经受肉这里会是 undefined
     */
    const f = async (_, dice, god) => {
      await printAndWait('投个硬币许个愿吧……');
      if (dice < 0.4 && god) {
        await printAndWait('是……幻听吗？听到了会让人莫名亲近并信赖的声音呢……');
        const color = get_chara_color(god);
        switch (god) {
          case 340:
            await printAndWait('热情的，红色的声音……', {
              color,
            });
            break;
          case 341:
            await printAndWait('包容的，蓝色的声音……', {
              color,
            });
            break;
          case 342:
            await printAndWait('严厉的，黄色的声音……', {
              color,
            });
        }
      } else if (dice < 0.7) {
        await printAndWait('啊……这个说不定可以……？');
        await printAndWait(
          '不过虽然这么说……好像什么都没想到，但是仔细想想似乎又明白了什么……',
        );
      } else if (dice < 0.9) {
        await printAndWait('果然无事发生呢……');
      } else {
        await printAndWait('捡起来的时候变成了两枚！');
      }
    };
    f.title = '三女神雕像下的许愿池';
    return f;
  })(),
  all_round_meek: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} meek 快乐米可
     */
    const f = async (meek) => {
      await printAndWait('突然从哪里吹过来一张很有年代感的书页！？');
      await printAndWait('……伸手抓住了。');
      await printAndWait(
        '为什么关于短距离英里中距离长距离的内容会同时出现在一页书上啊喂——',
      );
      await meek.say_and_wait('啊，这个能请还给我吗……');
      await printAndWait([
        '正震惊的时候，被 ',
        meek.get_colored_name(),
        ' 这么搭话了。',
      ]);
      await printAndWait('……嘶有种偷窥了他人宝物的心虚感乖乖地递了回去。');
      println();
      await printAndWait('……啊，难道说那一页是那个桐生院家的训练秘笈！？');
      await printAndWait('隔了很久之后才突然想起来，狠狠地捶了下手心。');
    };
    f.title = '什么都会一点的米可同学';
    return f;
  })(),
  experiment: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} ss 周日宁静（确切来说是茶座的「朋友」）
     * @param {CharaTalk} coffee 曼城茶座
     * @param {boolean} is_endu_med 是否是耐力药
     */
    const f = async (you, ss, coffee, is_endu_med) => {
      await you.say_and_wait('有人吗……');
      println();
      await printAndWait('没听说这件教室有被另外采用啊……');
      await printAndWait([
        '唐突的大雨，唐突的雷声，像是被驱赶了似的，',
        you.get_colored_name(),
        ' 来到了这件小小的宝库。',
      ]);
      println();
      await you.say_and_wait('大概是，让我选一样的意思？');
      println();
      await printAndWait('一支装在束带中的酒红色药剂');
      await printAndWait('和一只有些破旧的黑猫玩偶');
      println();
      you.say('选哪个呢……', true);
      printButton('药剂（耐力+? or 体力+50）', 1);
      printButton('玩偶（智力+8，技能点数+?）', 2);
      const ret = await input();
      if (ret === 1) {
        if (is_endu_med) {
          await printAndWait('好苦——');
        } else {
          await printAndWait('好辣——');
        }
      } else {
        await ss.say_as_unknown_and_wait('呦西呦西呦西呦西——');
        await coffee.say_as_unknown_and_wait('嗯……？');
        await printAndWait([
          '好像有看见窗外有',
          coffee.uma_sex_title,
          '的影子掠过？怎么可能～这里可不是一楼啊。',
        ]);
      }
      return [ret];
    };
    f.title = '废旧理科教室探险';
    return f;
  })(),
  shadow_minoru: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} minoru 骏川缰绳/丰收时刻
     * @param {CharaTalk} taiki 大树快车
     * @param {CharaTalk} you 玩家
     * @param {boolean} know_minoru 是否知道骏川缰绳的真实身份
     */
    const f = async (minoru, taiki, you, know_minoru) => {
      if (know_minoru) {
        await printAndWait([
          you.get_colored_name(),
          ' 远远地看到了两抹绿色的身影在视野里不断变大，原来是 ',
          taiki.get_colored_name(),
          ' 因为不明的缘故被 ',
          minoru.get_colored_name(),
          ' 追赶着……真是宝刀未老啊！',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 远远地看到了两抹绿色的身影在视野里不断变大，原来是 ',
          taiki.get_colored_name(),
          ' 因为不明的缘故被 ',
          minoru.get_colored_name(),
          ' 追赶着……说起来，为什么人类能追上',
          taiki.uma_sex_title,
          '的速度啊？',
        ]);
      }
      printButton('「慢下来！不要受伤了！」', 1);
      await input();
      await printAndWait([
        '走在前头的 ',
        taiki.get_colored_name(),
        ' 慢慢降下速度，一身绿色的秘书连忙向 ',
        you.get_colored_name(),
        ' 言谢。又做了一件好事！',
      ]);
    };
    f.title = '绿色的幻影';
    return f;
  })(),
  chairman_annoyance1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川弥生/北方风味
     */
    const f = async (taste) => {
      await printAndWait([
        '学园理事长 ',
        taste.get_colored_actual_name(),
        ' 正在苦恼着，准确来说是钱财上的问题：特雷森的预算又一次超支了——！！',
      ]);
      await printAndWait(
        '如今这位橙发的小矮子正在绿色秘书的训斥下瑟瑟发抖……但无法忽视的财政问题到底该怎么解决呢？',
      );
      printButton(
        '「开源节流，带头降薪！」（债务+40，育成中马娘技能点数+10）',
        1,
      );
      printButton('「这方面不由我负责……」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait('似乎发生了好事！');
        await printAndWait('……但这个月要吃泡面度日了！');
      } else {
        await printAndWait('似乎没什么特别的。');
      }
      return [ret];
    };
    f.title = '%TEEN%理事长的烦恼之一';
    return f;
  })(),
  chairman_annoyance2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川弥生/北方风味
     */
    const f = async (taste) => {
      await printAndWait([
        '学园理事长 ',
        taste.get_colored_actual_name(),
        ' 的猫咪失踪了！因为猫咪不见而陷入消沉的理事长，连带让特雷森的运作效率也大大降低！',
      ]);
      printButton(
        '「总动员所有人力，务必找到小猫！」（精力-50，好感+40～60）',
        1,
      );
      printButton('「所以呢？」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '找到小猫后，',
          taste.get_colored_name(),
          ' 十分高兴，特雷森也重回正轨了！',
        ]);
      } else {
        await printAndWait('似乎没什么特别的……所以理事长平常都在干什么？');
      }
      return [ret];
    };
    f.title = '%TEEN%理事长的烦恼之二';
    return f;
  })(),
  av_meteor: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} vega 爱慕织姬
     * @param {CharaTalk} you 玩家
     * @param {boolean} good_event 选择预兆是发生好事还是坏事
     * */
    const f = async (vega, you, good_event) => {
      await printAndWait([
        '一天晚上，',
        you.get_colored_name(),
        ' 在枯树洞旁看到了抬头仰望星空的 ',
        vega.get_colored_name(),
        '。',
      ]);
      await printAndWait('顺着视线看去，用余光捕捉到了一颗流星堪堪掠过。');
      printButton('「这一定是什么预兆！」（育成中马娘干劲+1 or -1）', 1);
      printButton('「此事平平无奇。」（稳定度+1）', 2);
      const ret = await input();
      if (ret === 1) {
        if (good_event) {
          await printAndWait('似乎发生了好事！');
        } else {
          await printAndWait('坏事……');
        }
      } else {
        await printAndWait('似乎发生了平淡无奇的事！');
      }
      return [ret];
    };
    f.title = '观测彗星';
    return f;
  })(),
  custom: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait([
        '某天下午 ',
        you.get_colored_name(),
        ' 在最近开始游玩的手机游戏《闪光的优秀少女》里又遇到低机率的训练失败了……习惯就好……',
      ]);
      printButton('「……习惯个屁！」（马币-50，育成中马娘体力+15%）', 1, {
        disabled: get('flag:当前马币') < 50,
      });
      printButton('「习惯就好！」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' 直接使出了成年人的魔法・氪金！',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 按住了把手机摔烂的冲动……',
        ]);
      }
      return [ret];
    };
    f.title = '习惯成自然';
    return f;
  })(),
  mr_naked_apron: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '早上醒来时，发现 ',
        chara.get_colored_name(),
        ' 已经不在床上了。',
      ]);
      await printAndWait([
        '起床梳洗后在厨房发现了',
        chara.sex,
        '的身影，对方似乎在准备早餐的样子，然而……',
      ]);
      await printAndWait([
        '浑身上下赤裸，只穿着围裙认真地准备早餐的 ',
        chara.get_colored_name(),
        ' 一边扭着可爱的屁股一边做菜的模样实在是——',
      ]);
      printButton('（可恶，忍不了了！）', 1);
      printButton('（数质数冷静下来吧……）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          ' 抑制住了冲动，用理性向 ',
          chara.get_colored_name(),
          ' 打招呼。',
        ]);
      }
      return ret;
    };
    f.title = '隔日清晨之裸体围裙';
    return f;
  })(),
  mr_blowjob: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '早上醒来时，',
        you.get_colored_name(),
        ' 自下身感受到一股异样的感觉。',
      ]);
      await printAndWait([
        '睁开眼睛后出现在眼前的是 ',
        chara.get_colored_name(),
        ' 光着身子用嘴巴吸吮着 ',
        you.get_colored_name(),
        ' 的',
        you.sex_code === 0 ? '阴蒂' : '阴茎',
        '的淫靡景象。',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        ' ',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? '贪婪'
          : skill > 2
            ? '熟练'
            : '生涩',
        '地',
        you.sex_code === 0 ? '舔舐着阴蒂' : '吞吐着阴茎',
        '，',
        you.get_colored_name(),
        ' 也不禁以手按住 ',
        chara.get_colored_name(),
        ' 的脑袋渴求更多的快感。',
      ]);
      printButton('（可恶，忍不了了！）', 1);
      printButton('（要去了……！）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          '在 ',
          chara.get_colored_name(),
          ' 的早安口交下，',
          you.get_colored_name(),
          ' 很快就达到了高潮，',
          you.sex_code === 0 ? '爱液' : '精液',
          '尽数射进了 ',
          chara.get_colored_name(),
          ' 的樱桃小嘴当中。',
        ]);
        await chara.say_and_wait(['满嘴都是……', callname, ' 的味道呢……']);
        await printAndWait('欲望得以发泄之后，新的一天开始了……');
      }
      return ret;
    };
    f.title = '隔日清晨之早安口交';
    return f;
  })(),
  ts_sex: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      await printAndWait([
        '一天的训练结束后，',
        chara.get_colored_name(),
        ' 的样子好像有点奇怪……',
      ]);
      await printAndWait(
        '面色潮红，在双腿间流下的不明液体与汗液混在一起，散发出一股淫靡的味道。',
      );
      printButton('「这也是训练员的义务……」', 1);
      printButton('「总之先去医务室吧！」', 2);
      const ret = await input();
      return [ret];
    };
    f.title = '训练后的性欲高涨';
    return f;
  })(),
  drug_notice: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {CharaTalk} you 玩家
     * @param {number} effect 效果 0-训练X手buff，1-健康茶，2-母乳药剂，3-性欲上升
     */
    const f = async (tachyon, you, effect) => {
      await printAndWait(
        [
          '【来自学园的通知——刚才 ',
          tachyon.get_colored_name(),
          ' 错误地散布在操场的药品真面目至今不明，请各位训练员如无必要请不要使用操场进行训练。】',
        ],
        { fontSize: '1.5rem' },
      );
      let ask_tachyon = false;
      while (true) {
        printButton('（应该不会出问题吧？）（随机效果）', 1);
        printButton('既然通知了那就算了……（效果无效化）', 2);
        if (!ask_tachyon && get('cflag:32:招募状态') === 1) {
          printButton('「速子……你这家伙！」', 3);
        }
        switch (await input()) {
          case 1:
            switch (effect) {
              case 0:
                await printAndWait('队伍成员的训练更顺利了……');
                break;
              case 1:
                await printAndWait('队伍成员本周的减肥会更有效果……');
                break;
              case 2:
                await printAndWait('队伍成员都开始流出母乳了……');
                break;
              case 3:
                await printAndWait('队伍成员的性欲上升了……');
            }
            return [1];
          case 2:
            return [2];
          case 3:
            await printAndWait([
              '在 ',
              you.get_colored_name(),
              ' 的逼问下，',
              tachyon.get_colored_name(),
              ' 坦白了',
              tachyon.sex,
              '投放的药物大致会有怎么样的效果——',
            ]);
            switch (effect) {
              case 0:
                await tachyon.say_and_wait(
                  '简单的说大概就是会让人在训练里更容易集中的药啦……',
                );
                break;
              case 1:
                await tachyon.say_and_wait(
                  '简单的说大概就是会让人快速消耗卡路里的药啦……',
                );
                break;
              case 2:
                await tachyon.say_and_wait(
                  '简单的说大概就是会让人让马娘流出母乳的药啦……',
                );
                break;
              case 3:
                await tachyon.say_and_wait(
                  '简单的说大概就是会让人稍微削弱理性的药啦……',
                );
            }
            ask_tachyon = true;
        }
      }
    };
    f.title = '学园通知・药物散播';
    return f;
  })(),
  gs_carrot: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} gs 黄金船
     */
    const f = async (gs) => {
      await printAndWait([
        '在学校里被一头芦毛的诡异',
        gs.uma_sex_title,
        '拦住了。',
      ]);
      await gs.say_and_wait(
        '唏！那边那位训练员！要不要跟小金船一起到海边拔萝卜啊！',
      );
      await printAndWait([
        '原来是问题儿童 ',
        gs.get_colored_name(),
        '……而且海边哪有什么萝卜可以拔啊？',
      ]);
      printButton('「你要拔，那便拔！」（马币+20）', 1);
      printButton('「总觉得有点可疑……」（体力+100）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          '竟然从沙滩里挖出来了散发着彩虹色光芒，而且看起来像是宝石的萝卜？！',
        );
      } else {
        await printAndWait(
          '得到了普通的萝卜……等下长在海边真的算普通吗！？总之先拿回去给午饭加餐了。',
        );
      }
      return [ret];
    };
    f.title = '拔萝卜之鬼';
    return f;
  })(),
  trainer_race: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} aoi 桐生院葵
     */
    const f = async (you, aoi) => {
      await printAndWait([
        '前往特雷森学园的路上，一张海报随风哗啦一声地拍到了 ',
        you.get_colored_name(),
        ' 的脸上。',
      ]);
      await printAndWait([
        '把海报摘下来一看，似乎是只面向训练员的',
        get_random_entry(['短跑', '游泳', '登山']),
        '比赛，上面写着哪怕对体质没自信现场也会有官方支援的样子，要参加吗？',
      ]);
      printButton('（试试也不会少块肉？）（体力&精力-25%，可能获得奖品）', 1);
      printButton('（忙死了，哪来的时间参加啊——！）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          '在接受诡异的针炙后竟然顺利获胜了！还得到了主办方安排的奖品！',
        );
        await printAndWait(
          '但顺利得让人背脊发凉啊……就像是自己被当成什么实验品一样……',
        );
      } else {
        await printAndWait([
          '后来听说是 ',
          aoi.get_colored_name(),
          ' 在没有支援的场合下获胜了的样子。',
        ]);
        await printAndWait('果然，那个人强得像鬼一样……');
      }
      return [ret];
    };
    f.title = '随风飘扬的海报';
    return f;
  })(),
  bankruptcy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait([
        '游手好闲不好好工作？抑或时运实在不站在 ',
        you.get_colored_name(),
        ' 身边？总之 ',
        you.get_colored_name(),
        ' 还是让银行户头的数字见底了！',
      ]);
      await printAndWait([
        '虽然很可悲，但只能请求负责',
        get('flag:角色性别') === 1 ? '马郎' : '马娘',
        '慷慨解囊了……吗？',
      ]);
      printButton('「怎么会这样……」', 1);
      await input();
    };
    f.title = '破产';
    return f;
  })(),
  reject: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait('不知何故，最近在校园走路的时候总会引来窃窃私语。');
      await printAndWait([
        you.get_colored_name(),
        ' 尝试探查一番后发现，自己竟然在不知不觉间被当成了负心渣',
        you.sex_code === 1 ? '渣男' : '渣女',
        '？！',
      ]);
      printButton('「我不是，我没有！」', 1);
      await input();
    };
    f.title = '污蔑，都是污蔑！';
    return f;
  })(),
  work_over: (() => {
    /** @author 雞雞 */
    const f = async () => {
      await printAndWait('训练员这工作高薪厚职，但并不好做。');
      await printAndWait([
        '除了负责自己旗下赛',
        get('flag:角色性别') === 1 ? '马郎' : '马娘',
        '的训练外，还有校园事务记者发布会财务管理撰写研究报告等等繁重职责。',
      ]);
      println();
      await printAndWait('今天也是喝能量饮料强撑、睡办公室桌下的一天。');
      printButton('「地板好硬……」', 1);
      await input();
    };
    f.title = '人生无常之加班';
    return f;
  })(),
  sick: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you 玩家
     */
    const f = async (you) => {
      await printAndWait([
        you.get_colored_name(),
        ' 一觉起来便觉头昏脑胀、昏昏欲睡，总之便是浑身不对劲。',
      ]);
      printButton('「丢哪妈，顶硬上！」', 1);
      printButton('「打电话请假，然后去看医生吧……」', 2);
      return [await input()];
    };
    f.title = '人生无常之生病';
    return f;
  })(),
  fishing: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} sky 青云天空
     * @param {CharaTalk} you 玩家
     */
    const f = async (sky, you) => {
      sky.name = '戴着斗笠的芦毛' + sky.uma_sex_title;
      await printAndWait([
        you.get_colored_name(),
        ' 带着钓竿在河边遇到了一名',
        sky.uma_sex_title,
        '。',
      ]);
      await printAndWait([
        sky.sex,
        '没有回过头，背对着 ',
        you.get_colored_name(),
        ' 说道。',
      ]);
      println();
      await sky.say_and_wait(
        '喵哈哈，真巧呢，相遇即是有缘，就自己选一个拿走吧～',
      );
      println();
      await printAndWait([
        you.get_colored_name(),
        ' 看了看，对方的身旁摆着一根破旧的钓竿以及一个假饵。',
      ]);
      printButton('选择钓竿（本次渔获翻倍）', 1);
      printButton('选择假饵（20 白因子）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' 选择了钓竿，接着仿佛有什么魔力一般，',
          you.get_colored_name(),
          ' 今天的手气好的吓人，钓到的鱼是平常的两倍还多！',
        ]);
      } else {
        await printAndWait('嗯？这个假饵的流线型……');
        await printAndWait([
          '此时，',
          you.get_colored_name(),
          ' 忽然灵光一闪！',
        ]);
      }
      return [ret];
    };
    f.title = '钓鱼的心得';
    return f;
  })(),
  ts_shower: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {boolean} want_sex 角色是否同意性爱
     */
    const f = async (chara, you, want_sex) => {
      const ret = [];
      await printAndWait(['嗯？', chara.get_colored_name(), ' 还没来吗？']);
      await printAndWait('正好，趁现在先沖个澡吧！');
      println();
      await printAndWait([
        '打开门，映入眼帘的是身无寸缕的 ',
        chara.get_colored_name(),
        '……',
      ]);
      printButton('「哦，要一起洗澡吗？」', 1);
      printButton('「不好意思打扰了！」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        if (want_sex) {
          await printAndWait('对方兴致盎然的答应了。');
          await printAndWait('你们互相给对方擦了背。');
          await printAndWait([
            '结束洗浴后，',
            chara.sex,
            '带着不甚满足的眼光看向 ',
            you.get_colored_name(),
            '……',
          ]);
        } else {
          await chara.say_and_wait('笨蛋，在想什么啊你！');
          await printAndWait([you.get_colored_name(), ' 被赶了出去……']);
        }
      } else {
        await you.say_and_wait('不好意思打扰了！');
        await printAndWait([you.get_colored_name(), ' 大喊一声跑了出去。']);
        await printAndWait([
          '没过多久，冲好澡的 ',
          chara.get_colored_name(),
          ' 红着脸走了出来。',
        ]);
      }
      return ret;
    };
    f.title = '淋浴间内';
    return f;
  })(),
  sr_strange_lunch: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '到了午餐时间，',
        you.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 不约而同的来到了天台。',
      ]);
      await printAndWait([
        '不知为何，今天 ',
        chara.get_colored_name(),
        ' 带来的饭盒格外的丰盛',
      ]);
      println();
      await chara.say_and_wait([callname, '，来试试看味道怎么样吧。']);
      await chara.say_and_wait('这可是得意之作哦～');
      println();
      await printAndWait([
        you.get_colored_name(),
        ' 把眼前的饭盒接过来，毫无顾虑的拿起了餐具。',
      ]);
      await printAndWait(['美美的享受了几口之后，身体却逐渐温热了起来……']);
      println();
      await printAndWait([
        you.get_colored_name(),
        ' 有点奇怪的转头看向身边的 ',
        chara.get_colored_name(),
        '，才发现也同样面对潮红。',
      ]);
      await printAndWait([
        '正当 ',
        you.get_colored_name(),
        ' 想要问什么的时候，却被强行吻住嘴唇打断了话语。',
      ]);
      println();
      await printAndWait(['直到松开的时候，嘴边还拉出了一道长长的银丝。']);
      printButton('「这下不得不做了……」', 1);
      printButton('「我可是正人君子！鋼の意志发动！」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '明明是在天台，',
          you.get_colored_name(),
          ' 和 ',
          chara.get_colored_name(),
          ' 却在不断的渴求着对方。',
        ]);
        await printAndWait([
          '但一想到这还是午休时间，',
          you.get_colored_name(),
          ' 便没有继续想其他的事情，伸手抓住了 ',
          chara.get_colored_name(),
          ' 的肩膀……',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 猛的摇摇头唤回了坚定的意志，立刻收起了手上的饭盒。',
        ]);
        await printAndWait([
          '当着 ',
          chara.get_colored_name(),
          ' 的面站起身，如同逃跑似的离开了天台……',
        ]);
      }
      return ret;
    };
    f.title = '奇怪的午饭';
    return f;
  })(),
  breakfast: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara 喝玩家奶的角色
     * @param {CharaTalk} you 玩家
     */
    const f = async (chara, you) => {
      await printAndWait([
        '一进入训练员室，',
        you.get_colored_name(),
        ' 看见 ',
        chara.get_colored_name(),
        ' 刚吃完早餐，正在喝牛奶的样子。',
      ]);
      await printAndWait('那瓶奶的包装……好像有些眼熟……');
      await printAndWait([
        '还有，',
        chara.get_colored_name(),
        ' 的眼神不知为何有些奇怪……',
      ]);
      await printAndWait('……一定是错觉吧。');
    };
    f.title = '「早餐」';
    return f;
  })(),
  or_riverside_walk: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '在河堤边上休闲的度过了一段时间之后，',
        you.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 踏上了返程。',
      ]);
      await printAndWait('温柔的风吹过了两个人的脸，很是惬意。');
      printButton('「该回去了呢，」', 1);
      printButton('「时间有点晚了。」', 2);
      await input();
      await printAndWait([
        '在 ',
        you.get_colored_name(),
        ' 说话的同时，身旁的 ',
        chara.get_colored_name(),
        ' 偷偷把视线转了过来，默默把肩膀靠在一起。',
      ]);
      println();
      await printAndWait('一同慢悠悠的走在路上，一路上都看不见多少人。');
      await chara.say_and_wait('很安静呢……');
      await printAndWait([
        '似乎察觉到了什么的 ',
        chara.get_colored_name(),
        '，放缓了脚步。',
      ]);
      println();
      await printAndWait([
        '发现身旁的 ',
        chara.get_colored_name(),
        ' 停下了脚步时，',
        you.get_colored_name(),
        ' 也停住脚步回头看过去。',
      ]);
      printButton('「怎么了？」', 1);
      await input();
      await chara.say_and_wait('可以，稍微合上眼睛一会吗？');
      await printAndWait([
        '听着摸不着头脑的要求，',
        you.get_colored_name(),
        ' 稍微愣了一下，但还是合上了眼睛。',
      ]);
      println();
      await printAndWait('风声在耳边吹过，清凉中却夹杂了一丝热风。');
      await printAndWait([
        '即使不睁眼，',
        you.get_colored_name(),
        ' 也能猜到发生了什么。',
      ]);
      await printAndWait('双臂环过身体，脸上感受到了一点温热的湿润感。');
      println();
      await chara.say_and_wait('……好啦，我们回去吧。');
      await printAndWait([
        '再次睁开眼的时候，',
        chara.get_colored_name(),
        ' 已经安静地站在 ',
        you.get_colored_name(),
        ' 的面前了。',
      ]);
      await printAndWait('虽然脸上还带着一点微红色，但却是微笑着后退了两步。');
      printButton('「回去吧。」（好感+10）', 1);
      printButton('「或许……可以晚点再回去……」（爱慕+1）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' 抓住了 ',
          you.get_colored_name(),
          ' 温暖的手，安心的走在路上。',
        ]);
        await you.say_and_wait('刚才的触感，到底是什么呢……', true);
      } else {
        await chara.say_and_wait('晚点……');
        await chara.say_and_wait('也就是……');
        await printAndWait([
          '面对眼前红着脸的 ',
          chara.get_colored_name(),
          '，',
          you.get_colored_name(),
          ' 只是笑了笑。',
        ]);
        await printAndWait([
          '今天，就带着 ',
          chara.get_colored_name(),
          ' 再玩一会吧。',
        ]);
      }
      return ret;
    };
    f.title = '河堤漫步时光';
    return f;
  })(),
  os_is_movie_right: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '原本想要和 ',
        chara.get_colored_name(),
        ' 一起去商店街随意的闲逛几下，但却发现了一个意外的宣传。',
      ]);
      println();
      await you.say_as_passer_by_and_wait('宣传', [
        '完美展现了赛',
        chara.uma_sex_title,
        '成长之路的全新作！',
      ]);
      println();
      await printAndWait([
        '虽然并没有听说，但 ',
        you.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 本着好奇心还是买票进场了。',
      ]);
      await printAndWait('坐进了影院，有些期待的等着灯光熄灭，故事开始。');
      await printAndWait(
        '屏幕上的电影画面确实是符合全新作的制作水平，但成长之路却有些令人意外。',
      );
      println();
      await you.say_as_passer_by_and_wait('演员', '训练员，多亏了你……');
      await you.say_as_passer_by_and_wait('演员', '都是因为训练员，我现在才……');
      println();
      await printAndWait([
        '屏幕上的画面有点夸张，让 ',
        you.get_colored_name(),
        ' 觉得这稍微有些不对劲。',
      ]);
      await printAndWait('这真的是成长的过程吗？');
      println();
      await printAndWait([
        '察觉到了有些不对劲的 ',
        you.get_colored_name(),
        '，正准备转身去和 ',
        chara.get_colored_name(),
        ' 说说剩下的部分就不看了。',
      ]);
      println();
      await chara.say_and_wait('……');
      println();
      await printAndWait('手臂的上方传来了一阵暖和的感觉。');
      await printAndWait([
        '坐在身旁的 ',
        chara.get_colored_name(),
        ' 轻轻地握住 ',
        you.get_colored_name(),
        ' 的手。',
      ]);
      println();
      await chara.say_and_wait('……要走了吗？');
      println();
      await printAndWait([
        '影院黑暗的环境里，唯有 ',
        chara.get_colored_name(),
        ' 的脸格外明显。',
      ]);
      await printAndWait([
        '双手重叠在 ',
        you.get_colored_name(),
        ' 的手臂上，轻轻靠在肩膀上。',
      ]);
      println();
      await printAndWait(
        '画面在两个人的心里已经不再重要，视线已经被紧紧锁死了。',
      );
      await printAndWait('屏幕的微光照在彼此的脸上，折射出眼中的光线。');
      println();
      await chara.say_and_wait([callname, '……']);
      await chara.say_and_wait('我……');
      await you.say_as_passer_by_and_wait('演员', '我喜欢你！');
      println();
      await printAndWait('影片来到高潮的时刻，打断了两个人原有的动作。');
      await printAndWait([
        '声音覆盖在 ',
        you.get_colored_name(),
        ' 和 ',
        chara.get_colored_name(),
        ' 之间，视线中夹杂着一点尴尬。',
      ]);
      printButton('「还是……冷静点吧」（干劲上升，好感+10）', 1);
      printButton('「我们……一起出去吧」（干劲大幅上升，爱慕+1）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait('电影逐渐走向尾声，照明灯也适时点亮了。');
        await printAndWait([
          '明亮的光线照在 ',
          you.get_colored_name(),
          ' 尴尬的脸上，',
          you.get_colored_name(),
          ' 也轻咳了一声。',
        ]);
        println();
        await chara.say_and_wait('……嗯。');
        println();
        await printAndWait([
          '仍然贴在一起的手转而抓住了 ',
          you.get_colored_name(),
          '，跟着一起站起身来。',
        ]);
        await printAndWait([
          '即使是带着一点遗憾，但也乖巧的站了起来，跟在 ',
          you.get_colored_name(),
          ' 的身后。',
        ]);
      } else {
        await printAndWait([
          '即使是在电影的高潮节点里，',
          you.get_colored_name(),
          ' 还是从中间找到了一丝声音。',
        ]);
        await printAndWait([
          '跟着气氛喊出来的 ',
          chara.get_colored_name(),
          ' 愣了一下，立刻自顾自的向后缩去。',
        ]);
        await printAndWait([
          '相对的，',
          you.get_colored_name(),
          ' 脸上的表情软化了，缓缓往前探去。',
        ]);
        await printAndWait([
          '嘴唇贴在一起，将 ',
          chara.get_colored_name(),
          ' 的惊讶和羞涩全部压回了心里，享受着幸福感。',
        ]);
        println();
        await printAndWait([
          you.get_colored_name(),
          ' 牵住 ',
          chara.get_colored_name(),
          ' 的手，悄悄的离开了影院。',
        ]);
        await printAndWait([
          '带着满脸都是绯红色的 ',
          chara.get_colored_name(),
          '，看着面前的旅馆，缓慢的挽住了',
          chara.sex,
          '的肩膀走进去……',
        ]);
      }
      return ret;
    };
    f.title = '这电影对吗？';
    return f;
  })(),
  privacy_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan|false} money 如果卖出能得到的货款
     */
    const f = async (you, money) => {
      await printAndWait([
        '今天起床后，',
        you.get_colored_name(),
        ' 看到私人账户收到信息，对方表示希望买断以后的所有货。',
      ]);
      printButton('（可能就是有人有怪癖吧……反正能拿到钱就好）', 1);
      printButton('（居然还需要寄到指定地点……好可疑，还是算了）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' 收到了一笔汇款。']);
        await printAndWait(
          '对方表示下次还是这个收货地址，并希望有货的时候优先联系TA。',
        );
        if (money) {
          await printAndWait(['获得了 ', money, ' 马币的货款……']);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 认为对方的言语中颇有可疑之处，而且收货地址距离特雷森学院并不太远。',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 婉拒了对方，只不过对方似乎没有死心，说如果有货可疑联系TA，会以更高的价格收购。',
        ]);
      }
      return [ret];
    };
    f.title = '个人隐私安全（其一？）';
    return f;
  })(),
  privacy_2_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 买奶的角色
     */
    const f = async (you, chara) => {
      await printAndWait([
        '训练室内，',
        chara.get_colored_name(),
        ' 正在玩手机，见到 ',
        you.get_colored_name(),
        ' 立马收了起来，好像在躲着 ',
        you.get_colored_name(),
        ' 的样子。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' 的手机也震动了一下，提示收到了一条消息。',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' 动了动鼻子，说 ',
        you.get_colored_name(),
        ' 身上好像有些陌生的味道。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' 并没有在意，毕竟',
        chara.uma_sex_title,
        '很敏感。',
      ]);
      await printAndWait('……');
      await printAndWait([
        '自然也没有发现 ',
        chara.get_colored_name(),
        ' 在 ',
        you.get_colored_name(),
        ' 注意不到的地方眼神奇怪了起来。',
      ]);
    };
    f.title = '个人隐私安全（其二？！）';
    return f;
  })(),
  privacy_2_2: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan|false} money 如果卖出能得到的货款
     */
    const f = async (you, money) => {
      await printAndWait([
        '对方又一次发来讯息，希望 ',
        you.get_colored_name(),
        ' 能够给TA货物。',
      ]);
      await printAndWait(
        'TA似乎是这一类商品的爱好者，显得非常急切，就像是要用它们来干什么一样。',
      );
      printButton('（最近手头有点紧……果然还是做吧？）', 1);
      printButton('（……好可疑，还是算了）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '正所谓没有钱是万万不能的，事到如今也没人能够苛责 ',
          you.get_colored_name(),
          ' 了吧。',
        ]);
        await printAndWait([
          '抱着遮掩的心思，',
          you.get_colored_name(),
          ' 决定还是同意对方。',
        ]);
        if (money) {
          await printAndWait(['获得了 ', money, ' 马币的货款……']);
        }
      } else {
        await printAndWait(
          '这么近的收货地址，加上这种急迫的语气，果然是可疑人员吧，不要理会了。',
        );
        await printAndWait([
          '这么想着，',
          you.get_colored_name(),
          ' 把对方拉入了黑名单。',
        ]);
      }
      return [ret];
    };
    f.title = '个人隐私安全（其二！？）';
    return f;
  })(),
  privacy_3: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 买奶的角色
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (you, chara, callname) => {
      const ret = [];
      await printAndWait([
        '训练结束后，',
        chara.get_colored_name(),
        ' 问 ',
        you.get_colored_name(),
        ' 是否有空，想和 ',
        you.get_colored_name(),
        ' 去一个地方。',
      ]);
      printButton('「正好没什么安排，一起去吧。」', 1);
      printButton('「还是算了，太晚了」', 2);
      ret.push(await input());
      if (ret.at(-1) === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' 的步伐逐渐轻快，只不过 ',
          you.get_colored_name(),
          ' 越看越觉得熟悉。',
        ]);
        await printAndWait('这分明是之前那个买家的收货地址！');
        await chara.say_and_wait([
          callname,
          ' 真是不注意个人隐私，明明什么都没透露，偏偏ip是在校园内呢～',
        ]);
        await chara.say_and_wait([
          '不过没关系，我已经帮 ',
          callname,
          ' 处理好了，之前好像是这里的人想要对 ',
          callname,
          ' 做一些不好的事呢。',
        ]);
        await chara.say_and_wait([
          '但是为了让 ',
          callname,
          ' 学到教训，一定要让你用身体好好记住——',
        ]);
        await chara.say_and_wait('——我们是一心同体的。');
        await printAndWait('……');
        printButton(`好好拥抱${chara.sex}，表示自己的谢意。（好感+25）`, 1);
        printButton(`带着${chara.sex}回去好好感谢。`, 2);
        ret.push(await input());
      } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
        await printAndWait('手腕上传来一股温柔却不容抗拒的力量。');
        await printAndWait([
          you.get_colored_name(),
          ' 被 ',
          chara.get_colored_name(),
          ' 反身拉在还没上锁的训练员室，然后反手锁上了门。',
        ]);
        if (get('flag:惩戒力度') === 3) {
          await chara.say_and_wait([
            '明明已经是',
            chara.uma_sex_title,
            '的所有物了。',
          ]);
          await chara.say_and_wait('居然还以为自己对这副身体有处置权吗？');
          await chara.say_and_wait('看来有必要对你明确一下你的地位了。');
          await chara.say_and_wait(
            '还看着我做什么？衣服难道不会自己脱下来吗！',
          );
          await printAndWait([
            '在意味不明的注视下，',
            you.get_colored_name(),
            ' 一点一点地脱去自己的衣服。',
          ]);
          await printAndWait(
            '先是代表训练员身份的徽章，最后是代表个人隐私的内衣裤。',
          );
          await chara.say_and_wait('就这样？犯了这种错误……');
          await printAndWait([
            chara.get_colored_name(),
            ' 还没说完，作为孕袋的身体就明白了。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' 把衣服甩在一边，用最规范的土下座，将私处一览无余地展露给对方。',
          ]);
          await printAndWait('浑身发热呢……');
          await printAndWait(['是因为被', chara.uma_sex_title, '大人呵斥……']);
          await printAndWait('还是，本来就期待被这样对待才会做出这样的事呢？');
          await printAndWait('脑子和身体都烧了起来，无法思考了。');
          await printAndWait('事到如今只知道用行动表示歉意了。');
          await printAndWait('就连被强加的马耳也匍匐在地上。');
        } else {
          await chara.say_and_wait([
            callname,
            ' 每天也会被身体困扰对吧，我明白的哦～',
          ]);
          await chara.say_and_wait('真是的，明明只要说出来，我就会帮忙的。');
          await printAndWait([
            you.get_colored_name(),
            ' 感到 ',
            chara.get_colored_name(),
            ' 已经开始着急地剥去自己的衣服。',
          ]);
          await chara.say_and_wait(
            '每次都要自己处理，很麻烦的吧……没关系，那种的事情已经结束了。今天，不，还有以后……',
          );
          await chara.say_and_wait('我都会帮你好好处理的。');
          await chara.say_and_wait(
            '不注重上网隐私，这么光明正大地挂着售卖乳液的链接。',
          );
          await chara.say_and_wait('这不就是暗示训练员欲求不满吗？');
          await chara.say_and_wait('可以放松身体了哦？');
          await printAndWait([
            '虽然 ',
            you.get_colored_name(),
            ' 还想辩解什么，但是发情了的',
            chara.uma_sex_title,
            '显然不会听 ',
            you.get_colored_name(),
            ' 再说什么。',
          ]);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 被 ',
          chara.get_colored_name(),
          ' 拉到训练员宿舍。',
        ]);
        await chara.say_and_wait([
          callname,
          ' 很辛苦吧，还要开展副业才能生活。',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' 耳朵垂了下来，似乎对 ',
          you.get_colored_name(),
          ' 的「私生活」有一些了解。',
        ]);
        await chara.say_and_wait(
          '如果有困难，一定要告诉我哦，我一定会站在你那边的！',
        );
        await chara.say_and_wait([
          '之前 ',
          callname,
          ' 在网络上的时候被人追踪了，好像有人要找麻烦的样子。',
        ]);
        await chara.say_and_wait('不过放心吧，已经被我解决啦～');
        await chara.say_and_wait('如果有困难的话一定要告诉我哦！');
        await printAndWait([
          chara.get_colored_name(),
          ' 给了 ',
          you.get_colored_name(),
          ' 一个拥抱。',
        ]);
        if (get('cflag:0:身高') - get(`cflag:${chara.id}:身高`) > 20) {
          await printAndWait([
            '舌头也趁机舔了 ',
            you.get_colored_name(),
            ' 的脖子，弄得 ',
            you.get_colored_name(),
            ' 也痒痒的。',
          ]);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            ' 在 ',
            you.get_colored_name(),
            ' 的脖颈间深深吸了一口气，好像这就是',
            chara.sex,
            '为 ',
            you.get_colored_name(),
            ' 解决这件事的报酬。',
          ]);
        }
        await chara.say_and_wait([callname, '，下周见，好好休息吧！']);
        await printAndWait([
          chara.get_colored_name(),
          ' 就这样把 ',
          you.get_colored_name(),
          ' 送到宿舍门口，和 ',
          you.get_colored_name(),
          ' 道别。',
        ]);
      }
      return ret;
    };
    f.title = '个人隐私安全（其三？）';
    return f;
  })(),
  strange_day: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 卷入事件的担当，可能是爱丽速子
     * @param {CharaTalk|false} tachyon 爱丽速子，如果 chara 是爱丽速子则是 false
     * @param {CharaTalk|false} minoru 骏川缰绳/丰收时刻，如果 chara 是骏川缰绳/丰收时刻则是 false
     * @param {CharaTalk|false} doto 名将怒涛，如果 chara 是名将怒涛则是 false
     * @param {CharaTalk|false} maya 摩耶重炮，如果 chara 是摩耶重炮则是 false
     * @param {CharaTalk|false} sky 青云天空，如果 chara 是青云天空则是 false
     */
    const f = async (you, chara, tachyon, minoru, doto, maya, sky) => {
      await printAndWait([
        '早上，',
        you.get_colored_name(),
        ' 感觉有些不太对劲，但仍然打算迎接美满的一天。',
      ]);
      await you.say_and_wait('(ง •̀_•́)ง');
      await printAndWait([
        you.get_colored_name(),
        ' 没有在意那么多，在洗漱完毕后出门了。',
      ]);
      println();
      if (minoru) {
        await minoru.say_and_wait('Y(^_^)Y');
        await printAndWait([minoru.sex, '还是一如既往在校门口欢迎每一个人。']);
        println();
      }
      await you.say_and_wait('……？', true);
      await you.say_and_wait('눈_눈');
      await printAndWait([
        you.get_colored_name(),
        ' 感觉有点怪异，却无法说出来。',
      ]);
      println();
      if (doto) {
        await doto.say_and_wait('(๑•́ωก̀๑)');
        await printAndWait([doto.sex, '怎么又哭了？']);
        println();
      }
      if (maya) {
        await maya.say_and_wait('(～0～)');
        await printAndWait('这位小祖宗又熬夜了吧。');
        println();
      }
      if (sky) {
        await sky.say_and_wait('<(*ΦωΦ*)>');
        await printAndWait('……这都是什么表情。');
        println();
      }
      await you.say_and_wait('……！', true);
      await you.say_and_wait('(#ﾟДﾟ)');
      await printAndWait([
        you.get_colored_name(),
        ' 终于注意到，这一路上都没听到一句话，反而是一些颜文字浮现在脑中。',
      ]);
      await you.say_and_wait('……', true);
      await you.say_and_wait('(#`皿´)');
      println();
      if (tachyon) {
        await printAndWait('脑海中浮现某一只天天穿实验服的奸商。');
        await you.say_and_wait('(‡▼益▼)');
        await printAndWait([
          '又是',
          tachyon.sex,
          '做的实验么，',
          you.get_colored_name(),
          ' 打算动身去找',
          tachyon.sex,
          '。',
        ]);
        println();
        await chara.say_and_wait('(｢･ω･)｢嘿');
        printButton('「(｢･ω･)｢嘿」', 1);
        printButton('「ヾ(＾。^*)」', 2);
        await input();
        await chara.say_and_wait('( •᷄ὤ•᷅)？');
        await printAndWait([
          '看样子好像没有理解 ',
          you.get_colored_name(),
          ' 在干什么。',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' 向 ',
          chara.get_colored_name(),
          ' 伸出了手。',
        ]);
        await chara.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
        printButton(`向${chara.sex}解释现在的状态。`, 1);
        await input();
        await you.say_and_wait('(´ﾟωﾟ｀)');
        await you.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
        await you.say_and_wait('₍₍◞( •௰• )◟₎₎');
        await printAndWait('手舞足蹈了一会。');
        await you.say_and_wait('╮（╯＿╰）╭');
        println();
        await chara.say_and_wait('【•】_【•】');
        await chara.say_and_wait('(ノ=Д=)ノ┻━┻');
        println();
        await printAndWait([
          '过了一时半会，',
          chara.sex,
          '终于理解了意思，于是陪 ',
          you.get_colored_name(),
          ' 一起去了。',
        ]);
        drawLine();
        await printAndWait(['很快到了', tachyon.sex, '的实验室。']);
        await tachyon.say_and_wait('(¦3[▓▓]');
        await you.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
        await tachyon.say_and_wait('Σ(っ °Д °;)っ');
        await chara.say_and_wait('(ಡωಡ)');
        drawLine({ content: '解释了好一会' });
        await tachyon.say_and_wait('(//▽//)');
        await tachyon.say_and_wait('～(￣▽￣～)～');
        await printAndWait([
          '最后，让 ',
          you.get_colored_name(),
          ' 记录了感觉，并给了解药与赔偿。',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' 想起了那天天搞实验的爱马。',
        ]);
        await you.say_and_wait('(๑•ี_เ•ี๑)');
        drawLine();
        await printAndWait([
          you.get_colored_name(),
          ' 轻车熟路的找到',
          chara.sex,
          '的实验室。',
        ]);
        await chara.say_and_wait('⊙▽⊙');
        await you.say_and_wait('(^_^)');
        await chara.say_and_wait('Σ(っ °Д °;)っ');
        await printAndWait('爱马TV，堂堂开播！');
        await chara.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
        drawLine({ content: '（感谢汤姆老师的配音）' });
        await chara.say_and_wait('≥﹏≤');
        await you.say_and_wait('╮（﹀＿﹀）╭');
      }
    };
    f.title = '可笑しい日（奇怪的一天）';
    return f;
  })(),
  strange_day2: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 卷入事件的角色，不会是爱丽速子
     * @param {CharaTalk} tachyon 爱丽速子
     * @param {PrintedSpan} callname 角色对你的称呼
     * @param {PrintedSpan} callname_32 爱丽速子对你的称呼
     * @param {string[]} med_list 药水列表，是 名称 × 数量 的形式
     */
    const f = async (you, chara, tachyon, callname, callname_32, med_list) => {
      await printAndWait([
        you.get_colored_name(),
        ' 照常起来，又发现身体不太对劲。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' 环顾了四周，发现并无变化。',
      ]);
      await printAndWait('只是………手有点痒，想做些什么……');
      let flag_a = true,
        horse_hair = false,
        flag_b = true,
        b_line;
      const check_times_in_a = new Array(6).fill(0),
        check_times_in_b = new Array(2).fill(true);
      const cur_line = getLineCount();
      while (flag_a) {
        printInColRows(
          [
            { content: '那么要调查些什么呢？', type: 'text' },
            { config: { width: 8 }, type: 'divider' },
          ],
          [
            {
              config: { width: 3 },
              content: '墙墙墙墙墙',
              type: 'text',
            },
            {
              accelerator: 1,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '窗',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '墙墙墙墙墙',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '墙', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '双双双',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '墙',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '墙', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '人人人',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '墙',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '墙', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '床床床',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '墙',
              type: 'text',
            },
          ],
          [
            { config: { width: 6 }, content: '墙', type: 'text' },
            {
              accelerator: 3,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '柜',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '墙',
              type: 'text',
            },
          ],
          [
            { config: { width: 1 }, content: '墙', type: 'text' },
            {
              accelerator: 4,
              config: { width: 1, showAcc: false },
              content: '镜',
              type: 'button',
            },
            {
              config: { align: 'right', width: 6 },
              content: '墙',
              type: 'text',
            },
          ],
          [
            { config: { width: 7 }, content: '墙', type: 'text' },
            {
              accelerator: 5,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '厕',
              type: 'button',
            },
          ],
          [
            { config: { width: 3 }, content: '墙墙墙墙', type: 'text' },
            {
              accelerator: 6,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '大 门',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '墙墙墙墙',
              type: 'text',
            },
          ],
          [{ config: { width: 8 }, type: 'divider' }],
        );
        switch (await input()) {
          case 1:
            switch (++check_times_in_a[0]) {
              case 1:
                await printAndWait([you.get_colored_name(), ' 打开了窗户。']);
                await printAndWait('外面鸟儿在歌唱，花儿在绽放。');
                await printAndWait([
                  '像 ',
                  you.get_colored_name(),
                  ' 这样的训练员……应当在家好好睡一天。',
                ]);
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' 将窗户关上，隔绝了外面的声音。',
                ]);
                await printAndWait([
                  '可惜 ',
                  you.get_colored_name(),
                  ' 还需要工作，还不能休息。',
                ]);
                break;
              default:
                await printAndWait('开关窗好玩？');
            }
            break;
          case 2:
            switch (++check_times_in_a[1]) {
              case 1:
                await printAndWait('这是一场很大很柔软的床。');
                await printAndWait('……但是为什么要买双人床呢？');
                break;
              case 2:
                await printAndWait('……为什么这里有根马尾毛？');
                await printAndWait([you.get_colored_name(), ' 闻了闻。']);
                await printAndWait('……熟悉的味道。');
                await printAndWait('获得【马尾毛】。');
                horse_hair = true;
                break;
              default:
                await printAndWait([
                  '很大很舒服的床……恐怕不止 ',
                  you.get_colored_name(),
                  ' 感觉舒服。',
                ]);
            }
            break;
          case 3:
            switch (++check_times_in_a[2]) {
              case 1:
                await printAndWait('这是一个床头柜，上面摆着一些珍贵的照片。');
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' 翻箱倒柜了一番，什么也没有找到。',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' 好像听到有人问：',
                ]);
                await you.say_as_unknown_and_wait('……为什么要在家里翻箱倒柜？');
                await printAndWait('……希望是错觉。');
                break;
              case 3:
                await printAndWait([
                  you.get_colored_name(),
                  ' 仔细调查了一下……在角落里找到了10马币。',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' 心满意足的离开了。',
                ]);
                await printAndWait('获得 10 马币。');
                // FLAGNAME:16 = 当前马币
                add('flag:16', 10);
                break;
              default:
                await printAndWait('只有一张珍贵的照片。');
            }
            break;
          case 4:
            switch (++check_times_in_a[3]) {
              case 1:
                await printAndWait([
                  '这是 ',
                  you.get_colored_name(),
                  '，平平无奇的脸庞，质朴的徽章，朴素的衣服。',
                ]);
                break;
              case 2:
                await printAndWait(
                  '就是一名拥有帅气的脸，优雅的衣服，徽章闪耀的训练员。',
                );
                await printAndWait('……真好看不是么。');
                break;
              case 3:
                await printAndWait([
                  '镜中的人实在说不出夸奖的话了，无语地看着 ',
                  you.get_colored_name(),
                  '。',
                ]);
                await printAndWait('……是不是有种不太对？');
                await printAndWait('眨了一下眼睛，一切平常。');
                break;
              case 4:
                // 被卷入者是曼城茶座、小林历奇和周日宁静的情况，会发生超自然事件
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait([
                    you.get_colored_name(),
                    ' 对镜子笑了起来。',
                  ]);
                  await printAndWait([
                    '镜中的人也突然开始对 ',
                    you.get_colored_name(),
                    ' 笑了起来……',
                  ]);
                  await printAndWait('……只是幅度太大，裂到了耳后根。');
                  await printAndWait([
                    you.sex,
                    ' 开始用手扶住镜框，开始用起了力。',
                  ]);
                  await printAndWait([
                    you.get_colored_name(),
                    '……吓得不敢动？',
                  ]);
                  await printAndWait([
                    you.sex,
                    ' 的脸越来越大，就快到了眼前。',
                  ]);
                  await printAndWait([
                    '……直到 ',
                    you.sex,
                    ' 看清了 ',
                    you.get_colored_name(),
                    ' 的脸。',
                  ]);
                  await printAndWait(['……', you.sex, ' 逃走了。']);
                  await printAndWait('现在镜中空无一物。');
                  await printAndWait([you.get_colored_name(), ' 打了个哈欠。']);
                } else {
                  await printAndWait(['这是 ', you.get_colored_name(), '。']);
                }
                break;
              default:
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait('镜中什么也没有……不知道什么时候回来。');
                  await printAndWait([
                    you.get_colored_name(),
                    ' 还想整理下自己呢。',
                  ]);
                } else {
                  await printAndWait(['这是 ', you.get_colored_name(), '。']);
                }
            }
            break;
          case 5:
            flag_b = true;
            await printAndWait([
              you.get_colored_name(),
              ' 推开了厕所门，进入了厕所里。',
            ]);
            b_line = getLineCount();
            while (flag_b) {
              printInColRows(
                [
                  {
                    content: [
                      you.get_colored_name(),
                      ' 俯视四周，要从哪里开始呢？',
                    ],
                    type: 'text',
                  },
                  { config: { width: 6 }, type: 'divider' },
                ],
                [
                  { config: { width: 3 }, content: '墙墙墙墙', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '墙墙墙墙',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 1 }, content: '墙', type: 'text' },
                  {
                    accelerator: 1,
                    config: { width: 2, showAcc: false },
                    content: '马桶',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '墙',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '墙', type: 'text' },
                  {
                    accelerator: 2,
                    config: { align: 'right', width: 2, showAcc: false },
                    content: '浴缸',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 1 },
                    content: '墙',
                    type: 'text',
                  },
                ],
                [
                  {
                    accelerator: 3,
                    config: { width: 3, showAcc: false },
                    content: '厅',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '墙',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '墙墙墙墙', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '墙墙墙墙',
                    type: 'text',
                  },
                ],
                [{ config: { width: 6 }, type: 'divider' }],
              );
              switch (await input()) {
                case 1:
                  if (check_times_in_b[0]) {
                    await printAndWait([
                      you.get_colored_name(),
                      ' 感觉有人在盯着自己……环顾四周没人。',
                    ]);
                    print('感觉有一股尿意，要上吗？');
                    printButton('上', 1);
                    printButton('不了', 2);
                    if ((await input()) === 1) {
                      await printAndWait([
                        '……是错觉吗？',
                        you.get_colored_name(),
                        ' 感觉马桶在说话。',
                      ]);
                      await printAndWait('……');
                      await printAndWait('……');
                      await printAndWait([
                        you.get_colored_name(),
                        ' 隐约听到它说：',
                      ]);
                      await you.say_as_unknown_and_wait('呜呜呜……我不干净了……');
                      await you.say_and_wait('……错觉吧。', true);
                      check_times_in_b[0] = false;
                    }
                  } else {
                    await printAndWait('马桶好像在哭泣……以后给它道个歉吧。');
                  }
                  break;
                case 2:
                  if (check_times_in_b[1]) {
                    await printAndWait('这是一个浴缸，在里面很舒服。');
                    check_times_in_b[1] = false;
                  } else {
                    await printAndWait([
                      you.get_colored_name(),
                      ' 好像隐隐听到：',
                    ]);
                    await you.say_as_unknown_and_wait(
                      '别调查了，我只是为了防止厕所太空放所放置的。',
                    );
                    await printAndWait('……真的很奇妙。');
                  }
                  break;
                case 3:
                  flag_b = false;
              }
              await clear(getLineCount() - b_line);
            }
            break;
          case 6:
            flag_a = false;
        }
        await clear(getLineCount() - cur_line);
      }
      drawLine();
      await printAndWait('推开大门，不知为什么今天出门格外得迟。');
      await printAndWait('看了一眼时间，已经快迟到了。');
      if (horse_hair) {
        await printAndWait([
          you.get_colored_name(),
          ' 看了一眼大门，思索着要不要换一个。',
        ]);
        await you.say_as_passer_by_and_wait('门', '不关 我事。');
        await you.say_and_wait('……现在连装都不装一下？', true);
      }
      println();
      await printAndWait([you.get_colored_name(), ' 来到了大街上。']);
      await printAndWait([
        you.get_colored_name(),
        ' 觉得自己又被 ',
        tachyon.get_colored_name(),
        ' 下药了。',
      ]);
      await printAndWait('这次的药效是什么？');
      print(
        [
          { content: ' ', isDivider: true },
          '房房房房房房房房房房房房',
          { isBr: 2 },
          '你',
          { isBlank: 8 },
          '面包',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: 2 },
          { isBlank: 6 },
          '树',
          { isBlank: 6 },
          '树',
          { isBlank: 6 },
          '树',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        you.get_colored_name(),
        ' 与蓄谋已久的 ',
        chara.get_colored_name(),
        ' 相遇了！',
      ]);
      print('距离很近，要做些什么？');
      printButton('逃跑', 1);
      printButton('冷静应对', 2);
      await input();
      await printAndWait([
        '……',
        chara.sex,
        ' 已经盯上了 ',
        you.get_colored_name(),
        '，无论做什么都无济于事！',
      ]);
      print(
        [
          { content: ' ', isDivider: true },
          '房房房房房房房房房房房房',
          { isBr: 2 },
          '你',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: true },
          { isBlank: 4 },
          '面包',
          { isBr: true },
          { isBlank: 6 },
          '树',
          { isBlank: 6 },
          '树',
          { isBlank: 6 },
          '树',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        chara.sex,
        ' 扑到了 ',
        you.get_colored_name(),
        ' 身上。',
      ]);
      await chara.say_and_wait(['对不起，', callname, '！我是不小心的！']);
      await chara.say_and_wait('我快迟到了才跑这么快。');
      await chara.say_and_wait(
        '香香的，好想现在就……不行不行，再忍一会……',
        true,
      );
      await printAndWait('嘴上这么说的，身体却没有移动。');
      await you.say_and_wait('没事，小心就好。');
      await printAndWait([
        you.get_colored_name(),
        ' 看着眼前已经开始闻起 ',
        you.get_colored_name(),
        ' 气味的',
        chara.uma_sex_title,
        '，心中恶趣味顿起。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' 向',
        chara.sex,
        '说出了现在的情况。',
      ]);
      await printAndWait([chara.sex, ' 满脸通红。']);
      await chara.say_and_wait('……');
      await chara.say_and_wait('所以说我现在想的话……？', true);
      await chara.say_and_wait('……呀，要迟到了，我先走了……');
      await printAndWait([chara.sex, ' 头也不回的跑开了。']);
      await you.say_and_wait('真可爱呀。');
      if (horse_hair) {
        await you.say_as_passer_by_and_wait(
          '马尾毛',
          '确实很可爱，希望你以后也这么觉得。',
        );
        await you.say_and_wait('？？？');
      }
      drawLine();
      await printAndWait([
        you.get_colored_name(),
        ' 来到了 ',
        tachyon.get_colored_name(),
        ' 的实验室。',
      ]);
      if (get('cflag:32:招募状态') === 1) {
        await printAndWait([tachyon.sex, '背着身，坐在一个……白色塑料椅上？']);
        await tachyon.say_and_wait('你不应该来的。');
        await you.say_and_wait('你又给我喂了什么？快给我解药。');
        await tachyon.say_and_wait('我们期间打过多少次了？');
        await you.say_and_wait('……');
        await tachyon.say_and_wait('想要的话，自己来拿。');
        await you.say_and_wait('再玩梗的话断了你的午饭。');
        await printAndWait([tachyon.get_colored_name(), ' 光速滑跪。']);
        await printAndWait([
          tachyon.sex,
          ' 抱着 ',
          you.get_colored_name(),
          ' 的大腿，心里暗自期待。',
        ]);
        await tachyon.say_and_wait(['呜呜呜，不要啊，', callname_32, '。']);
        await printAndWait([
          you.get_colored_name(),
          ' 向着解药走去，不小心用脚踢到了',
          tachyon.sex,
          '。',
        ]);
        await printAndWait([tachyon.sex, ' 内心十分酸爽。']);
        await tachyon.say_and_wait('好痛啊，呜呜。');
        await printAndWait([
          '……',
          you.get_colored_name(),
          ' 觉得这个解药不喝不行。',
        ]);
        await printAndWait([
          '一饮而尽，世界重新变得安静，',
          you.get_colored_name(),
          ' 再也没有想去调查周围一切的欲望。',
        ]);
        await tachyon.say_and_wait('……喝了？……给我也来一瓶。');
        await printAndWait([
          '看着',
          tachyon.sex,
          '满脸失望的样子，',
          you.get_colored_name(),
          ' 确定要重启一下爱马TV了。',
        ]);
        await you.say_and_wait('……');
        await tachyon.say_and_wait('唉？⊙▽⊙');
        await tachyon.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
        drawLine({ content: '（感谢汤姆老师的配音）' });
      } else {
        await printAndWait([
          tachyon.sex,
          ' 正坐在椅子上，好像已经知道 ',
          you.get_colored_name(),
          ' 会到来。',
        ]);
        await printAndWait('空气竟一时间有点安静。');
        await you.say_and_wait('闭口不说话，装高手？');
        await tachyon.say_and_wait('不需要说话，不是吗？', true);
        await you.say_and_wait('？');
        await tachyon.say_and_wait('看这表情应该是成功了。', true);
        await tachyon.say_and_wait('这是我最近研发的，异体同心药水。', true);
        await tachyon.say_and_wait('效果不错，你先别急着打，给，这个是解药。');
        await printAndWait([
          tachyon.sex,
          ' 指了指旁边的填表图，以及旁边的药水。',
        ]);
        await printAndWait([
          '一饮而尽，世界重新变得安静，',
          you.get_colored_name(),
          ' 再也没有想去调查周围一切的欲望。',
        ]);
        await printAndWait('虽说如此，那还是感觉越想越气。');
        println();
        print('获得了几瓶比较贵的药水：');
        for (const med of med_list) {
          print(`· ${med}`);
        }
        await waitAnyKey();
      }
    };
    f.title = '可笑しい日（奇怪的一天）2';
    return f;
  })(),
  wind_welcome: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {boolean} race_week 是否本周有比赛且有未受肉三女神
     */
    const f = async (you, race_week) => {
      await printAndWait([
        you.get_colored_name(),
        ' 感受到一股微风吹过身侧，带着操场青草的清香。',
      ]);
      printButton('「今天真是个好天气啊」（担当干劲+1）', 1);
      if (race_week) {
        printButton('「希望今天的比赛也顺利」（？？？好感+50）', 2);
      }
      return [await input()];
    };
    f.title = '风来访';
    return f;
  })(),
  we_are_one: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      await printAndWait([
        '回到训练室，',
        chara.get_colored_name(),
        ' 带着头上的洗澡巾在沙发上起身，笑眯眯地看着 ',
        you.get_colored_name(),
        '。',
      ]);
      println();
      await chara.say_and_wait([
        '今天我的发挥也很不错吧，',
        callname,
        ' 是不是要～好好奖励奖励我？',
      ]);
      printButton('「今天真是辛苦你了，好好休息，我们出去玩一圈吧！」', 1);
      print('（干劲-1，好感+50）');
      printButton('「那，你想要什么奖励？」', 2);
      const ret = [await input()];
      if (ret[0] === 2) {
        await printAndWait(['下意识的反问调笑，却等到了意料之外的回答。']);
        println();
        await chara.say_and_wait([
          '我想成为 ',
          callname,
          ' 的『新娘子』，怎么样？」',
        ]);
        println();
        await printAndWait([
          '眼前的马娘笑嘻嘻的，一边说着一边又把 ',
          you.get_colored_name(),
          ' 的手往',
          chara.sex,
          '的身上放。',
        ]);
        println();
        await chara.say_and_wait([
          '我们是一心同体的关系，对吧？这个时候一定是一样的想法对吧？反正不管 ',
          you.get_colored_name(),
          ' 怎么说，我已经忍不了啦！！！',
        ]);
        println();
        await printAndWait([
          '她用尾巴反锁上了门，一把抱住 ',
          you.get_colored_name(),
          ' 冲向边上的沙发上。',
        ]);
        println();
        await chara.say_and_wait(['扯下我的「头纱」，像对待妻子一样对我吧～']);
        println();
        await printAndWait([
          '在 ',
          you.get_colored_name(),
          ' 意识过来的时候，一切都来不及了。',
        ]);
        println();
        printButton('「冷静一下，我想我们还有别的事情要做……」', 1);
        printButton(
          '粗暴地扯下被当做头纱的浴巾，是时候让她知道谁才是床上的霸主了！',
          2,
        );
        ret.push(await input());
        if (ret[1] === 1) {
          await printAndWait([
            '听到 ',
            you.get_colored_name(),
            ' 拒绝，只见抱着 ',
            you.get_colored_name(),
            ' 的马娘依旧是那副笑脸。',
          ]);
          await chara.say_and_wait(
            '不想要？看来我们的默契还不够啊，我知道了，只要一直做，做到一心同体就没问题了吧？',
          );
        }
      }
      return ret;
    };
    f.title = '「」心「」体';
    return f;
  })(),
  chocolate: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {number} max_lover 空中神宫、创升、梦之旅中爱慕值最高者
     * @param {number} max_love 空中神宫、创升、梦之旅中最高的爱慕值，如果都没招募则是-1
     */
    const f = async (you, max_lover, max_love) => {
      await printAndWait('情人节，可惜工作没有休假。');
      await printAndWait(
        '训练员这工作有时候还得防备一些「别有用心」的对象，刷到马推还有一堆人在散发着恋爱的酸臭。',
      );
      printButton(
        '「一点风声罢了，今天也是为担当燃烧身体的一天」（体力&精力+50）',
        1,
      );
      printButton('「闲着也是闲着，不如发个推凑个热闹」', 2);
      const ret = await input();
      if (ret === 2) {
        if (max_love === -1) {
          await printAndWait(['「打开冰箱发现最浪漫的果然是浓缩咖啡」']);
          await printAndWait('随手编辑了一条推文，用小号发出去。');
        } else if (max_love < 60) {
          await printAndWait(
            '「今天也是努力工作的一天，什么？都情人节了？刚准备下单巧克力发现通讯列表是空的！」',
          );
          await printAndWait('随手编辑了一条推文，用小号发出去。');
          println();
          await printAndWait(
            '第二天收到了匿名寄来的包裹，拆开一看原来是一块精装巧克力',
          );
          println();
          await printAndWait('真是奇怪，会是谁寄的呢……');
        } else {
          await printAndWait(
            '「本命巧克力迷路第 N 年，在便利店买了根青汁味百奇自我应援」',
          );
          await printAndWait('随手编辑了一条推文，用小号发出去。');
          println();
          switch (max_lover) {
            case 36:
              // 空中神宫的场合
              await printAndWait(
                '第二天收到了匿名寄来的包裹，拆开一看原来是巧克力，感觉是很精致小巧的巧克力',
              );
              break;
            case 80:
              // 创升的场合
              await printAndWait(
                '第二天收到了匿名寄来的包裹，拆开一看原来是巧克力，感觉是很像吧唧的巧克力',
              );
              break;
            case 119:
              // 梦之旅的场合
              await printAndWait(
                '第二天收到了匿名寄来的包裹，拆开一看原来是巧克力，感觉是很华贵的巧克力',
              );
          }
          println();
          await printAndWait(['真是奇怪，会是谁寄的呢……']);
        }
      }
      return [ret];
    };
    f.title = '巧克力！';
    return f;
  })(),
  sakura_regret: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara 角色
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, callname) => {
      await printAndWait([
        '夜晚，在床上的 ',
        chara.get_colored_name(),
        ' 用被子把自己藏起来',
      ]);
      println();
      await chara.say_and_wait([callname, '，为什么……就不愿意接受我的爱呢……']);
      println();
      await chara.say_and_wait(['明明那些美好的记忆，都是我们一起创造的……']);
      println();
      await chara.say_and_wait(['真是……孤独啊……']);
      println();
      await printAndWait(['在', chara.sex, '没注意到的地方，枕头悄悄的湿了。']);
      println();
    };
    f.title = '樱花的遗憾';
    return f;
  })(),
  nice_weekend: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara 爱丽数码或目白多伯
     * @param {CharaTalk} you 玩家
     * @param {PrintedSpan} callname 角色对玩家的称呼
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        chara.get_colored_name(),
        ' 因为同人作品的死线将至，邀请 ',
        you.get_colored_name(),
        ' 周末去',
        chara.sex,
        '的工作室里赶稿',
      ]);
      printButton('为了不影响训练，这也是必要的（同意）', 1);
      printButton('假期就是假期，加班是不可能的！（拒绝）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          '身为社畜，对死线的厌恶早就刻在了骨子里；作为训练员，帮助担当也责无旁贷！',
        );
        await printAndWait('终于，在周日即将结束的时候，你们完成了这本作品。');
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          await printAndWait([
            you.get_colored_name(),
            ' 记不清是什么时候睡着的了，只记得担当带着 ',
            you.get_colored_name(),
            ' 开始工作，也许是 ',
            you.get_colored_name(),
            ' 实在不擅长这方面的东西，也许是 ',
            you.get_colored_name(),
            ' 实在是太累了。总之，在 ',
            you.get_colored_name(),
            ' 睡醒之后，已经是周一的凌晨了，身上还不断传来劳累过度的酸痛。',
          ]);
          println();
          await printAndWait([
            '突然，',
            you.get_colored_name(),
            ' 感觉身上好像沉重很多',
          ]);
          println();
          printButton('太累了吗？还是继续休息吧（不去看异样）', 1);
          printButton('睡麻了吗？稍微活动一下吧（看一下异样）', 2);
          ret.push(await input());
          if (ret.at(-1) === 1) {
            await printAndWait([
              you.get_colored_name(),
              ' 昏昏沉沉的，在 ',
              chara.get_colored_name(),
              ' 的工作室里醒来，对方已经给 ',
              you.get_colored_name(),
              ' 准备好了晚饭，可惜 ',
              you.get_colored_name(),
              ' 还是感觉干劲不足……',
            ]);
          } else {
            await printAndWait([
              you.get_colored_name(),
              ' 活动了一下身体，发现原来是 ',
              chara.get_colored_name(),
              ' 趴在 ',
              you.get_colored_name(),
              ' 的身侧。',
            ]);
            await printAndWait([
              '裸 着 趴 在 ',
              you.get_colored_name(),
              ' 的 身 侧',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' 本来还想说些什么，但是听到了眼前一黑腰上一酸的话',
            ]);
            await chara.say_and_wait([
              callname,
              ' 已经醒了？那我们就开始第二轮吧❤️～',
            ]);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              '作品内容是训练员与',
              chara.uma_sex_title,
              '的甜蜜日常，大受好评！就是不知道为什么训练员的脸好像有点……和 ',
              you.get_colored_name(),
              ' 相似？（马币+150）',
            ]);
          }
          if (relation >= 550) {
            await printAndWait([
              '贩售结束之后，',
              chara.get_colored_name(),
              ' 想要请 ',
              you.get_colored_name(),
              ' 吃甜品来感谢 ',
              you.get_colored_name(),
              '。（获得[浓缩咖啡]×5）',
            ]);
          }
        }
      }
      return ret;
    };
    f.title = '欢乐周末开始啦！';
    return f;
  })(),
  kamen_rider: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you 玩家
     * @param {boolean} no_ero_item 是否没有性玩具
     */
    const f = async (you, no_ero_item) => {
      const ret = [];
      await printAndWait(['路过商店街的时候，发现有个商家正在做活动：']);
      await printAndWait(['「扮演假面骑士送温暖～」']);
      await printAndWait([
        '店家解释道，这是为了给一些小朋友们送去温暖办的活动，只不过虽然衣服足够，人手却不够了。',
      ]);
      await printAndWait(['他们希望这样能让孩子们的生活更加丰富。']);
      await printAndWait(['如果参加的话，还能试穿合适的假面骑士套装。']);
      printButton('「还有时间，就来参加一下吧。」', 1);
      printButton('「算了算了，这种热闹的活动不适合我。」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '店家感谢了 ',
          you.get_colored_name(),
          ' 的付出，把 ',
          you.get_colored_name(),
          ' 领到换衣间，让 ',
          you.get_colored_name(),
          ' 自行选择一身衣服——',
        ]);
        printButton('「胡萝卜侠！」（声望+15）', 1);
        printButton('「魔法少女（蒙面怪人款）！」（马币+25）', 2);
        printButton(
          '「？？？一副有些奇怪的道具」（声望+20，部分担当干劲+1）',
          3,
          { disabled: no_ero_item },
        );
        ret.push(await input());
        switch (ret[1]) {
          case 1:
            await printAndWait([
              '效果大受好评！似乎还看到一些眼熟的学生了？！',
            ]);
            break;
          case 2:
            await printAndWait(['效果大受好评！虽然这身衣服很难穿上去……']);
            break;
          case 3:
            await printAndWait([
              '紧身衣和几片奇怪的布料在店员的帮助下穿了上去，那个看上去像是内裤一样的布料居然只是把面部盖住？！',
            ]);
            await printAndWait([
              '虽然作为店家的吉祥物效果很好，但是总感觉好像失去了点什么……',
            ]);
        }
      }
      return ret;
    };
    f.title = '假面（？）骑士！';
    return f;
  })(),
  big_sale: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you 玩家
     * @param {string} uma 马娘 or 马郎
     * @param {boolean} disabled 并无担当在育成中，或持有马币少于10
     */
    const f = async (you, uma, disabled) => {
      await printAndWait('出行的路上路过了商店街……');
      await printAndWait('似乎有什么不一样？');
      await you.say_as_passer_by_and_wait(
        '果蔬店老板',
        '瞧一瞧看一看了啊，新鲜的水果蔬菜超低价大甩卖！',
      );
      await printAndWait([you.get_colored_name(), '颇感兴趣地凑过去看了看。']);
      await printAndWait(
        '果蔬店的货摊上摆满了各式水果蔬菜，看样子非常新鲜，品质也非常不错。',
      );
      await you.say_as_passer_by_and_wait(
        '果蔬店老板',
        '我家的水果蔬菜物美价廉，怎么样，要不要买一些呢？',
      );
      printButton(`购买胡萝卜（马币-10，育成中${uma}速度+20）`, 1, {
        disabled,
      });
      printButton(`购买大蒜（马币-10，育成中${uma}耐力+20）`, 2, { disabled });
      printButton(`购买土豆（马币-10，育成中${uma}力量+20）`, 3, { disabled });
      printButton(`购买辣椒（马币-10，育成中${uma}根性+20）`, 4, { disabled });
      printButton(`购买草莓（马币-10，育成中${uma}智力+20）`, 5, { disabled });
      printButton('囊中羞涩，告辞', 6);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的胡萝卜。',
          ]);
          await printAndWait([
            '好不容易把大包胡萝卜带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了象征速度的胡萝卜汉堡肉与胡萝卜汁。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 2:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的大蒜。',
          ]);
          await printAndWait([
            '好不容易把大包大蒜带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了耐力惊人的超大碗大蒜拉面。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的土豆。',
          ]);
          await printAndWait([
            '好不容易把大包土豆带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了充满力量感的土豆泥盖饭。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 4:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的辣椒。',
          ]);
          await printAndWait([
            '把辣椒带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了望之色变的超辣麻婆豆腐。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 5:
          await printAndWait([
            you.get_colored_name(),
            '决定按照成长期',
            uma,
            '的饭量购入新鲜的草莓。',
          ]);
          await printAndWait([
            '好不容易把大包草莓带回学园后，',
            you.get_colored_name(),
            '为担当',
            uma,
            '制作了一看就很聪明的草莓冰激凌。',
          ]);
          await printAndWait('收获了好评！');
          break;
        case 6:
          if (!disabled) {
            await printAndWait([
              you.get_colored_name(),
              '想了想自家担当的饭量，悄悄地溜走了。',
            ]);
          } else {
            await printAndWait(['可惜没有需要用的。']);
            await printAndWait([
              you.get_colored_name(),
              ' 摇了摇头，转身走了。',
            ]);
          }
      }
      return [ret];
    };
    f.title = '商店街大甩卖';
    return f;
  })(),
  justice: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you 玩家
     * @param {CharaTalk} chara 角色
     * @param {CharaTalk} minoru 骏川缰绳
     * @param {PrintedSpan} call_301 一般角色对骏川缰绳的称呼
     */
    const f = async (you, chara, minoru, call_301) => {
      chara.name = chara.sex_code === 1 ? '怪异的马郎' : '怪异的马娘';
      await printAndWait([
        you.get_colored_name(),
        '走在路上，突然间看到前方有一个正在被',
        chara.uma_sex_title,
        '追逐的训练员。',
      ]);
      await printAndWait([
        '这训练员看样子已经体力不支，随时都有可能会被身后的',
        chara.uma_sex_title,
        '追上。',
      ]);
      await printAndWait([
        '这时，训练员看到了',
        you.get_colored_name(),
        '，仿佛燃起了一丝希望那样向',
        you.get_colored_name(),
        '跑过来。',
      ]);
      await you.say_as_passer_by_and_wait(
        '陌生训练员',
        '拜托了，请帮帮我，我不想回到那个地方……那个地下室……',
      );
      await printAndWait([
        you.get_colored_name(),
        '看了看眼前绝望至极的陌生训练员和正在迅速接近的眼睛有些发红的',
        chara.uma_sex_title,
        '，选择',
      ]);
      printButton('帮助陌生训练员', 1);
      printButton(`帮助${chara.name}`, 2);
      printButton('装作没有看到', 3);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            '虽然不知道发生了什么，但是本着同事之间互帮互助的原则，',
            you.get_colored_name(),
            '有些犹豫地点了点头。',
          ]);
          await chara.say_and_wait(
            '请把我的训练员还给我好吗？我……还有些话要跟训练员说呢……',
          );
          await printAndWait([
            you.get_colored_name(),
            '看着眼前散发着满满危险气息的',
            chara.uma_sex_title,
            '，暗自吞咽了一口唾沫。',
          ]);
          await you.say_and_wait([
            '那个，有什么矛盾可以说出来慢慢解决，不然我可就给',
            call_301,
            '打电话了哦。',
          ]);
          await printAndWait([
            '尽管',
            you.get_colored_name(),
            '也两股战战，但',
            you.get_colored_name(),
            '下意识做出了最正确的选择——把',
            minoru.get_colored_name(),
            '搬了出来。',
          ]);
          await printAndWait([
            '果然，',
            you.get_colored_name(),
            '看到眼前',
            chara.uma_sex_title,
            '变得犹豫起来。',
          ]);
          await chara.say_and_wait(
            '训练员……你逃不掉的，下一次，你可就遇不到这么好的同事了呢……',
          );
          await printAndWait([
            '面前的',
            chara.uma_sex_title,
            '锐利的目光似乎能将',
            you.get_colored_name(),
            '刺穿一样，仿佛是能透过',
            you.get_colored_name(),
            '的身体看到',
            you.get_colored_name(),
            '身后的训练员。',
          ]);
          await printAndWait(['随后，', chara.sex, '竟然直接转身离去了。']);
          await printAndWait([
            you.get_colored_name(),
            '与身后的训练员同时松了口气。',
          ]);
          await you.say_as_passer_by_and_wait(
            '陌生训练员',
            '非常感谢您，这是我的一点点谢礼，请您收下……',
          );
          await printAndWait([
            '陌生的训练员掏出自己的钱包塞进',
            you.get_colored_name(),
            '手里，没等',
            you.get_colored_name(),
            '反应过来就匆匆走远了。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '本来还想问一下发生了什么，但看样子是没机会了。',
          ]);
          println();
          await printAndWait('获得了 100 马币！');
          break;
        case 2:
          await chara.say_and_wait(
            '请把我的训练员还给我好吗？我……还有些话要跟训练员说呢……',
          );
          await printAndWait([
            you.get_colored_name(),
            '看着眼前散发着满满危险气息的',
            chara.uma_sex_title,
            '，实在是提不起忤逆对方的心思。',
          ]);
          await you.say_and_wait('您二位请便，我先走一步了。');
          await printAndWait([
            '说完，',
            you.get_colored_name(),
            '便向旁边悄悄一挪，露出了身后的陌生训练员。',
          ]);
          await printAndWait([
            '举止怪异的',
            chara.uma_sex_title,
            '迅速便抓住了陌生训练员的胳膊，将其有些强硬地拉了过来。',
          ]);
          await chara.say_and_wait(
            '竟然敢偷偷逃跑……这么调皮的训练员，需要好好地『照顾』一下了……',
          );
          await printAndWait([
            you.get_colored_name(),
            '大气不敢出地看着',
            chara.uma_sex_title,
            '一边状若亲密地用脸颊蹭着训练员的手臂，一边拖着对方离去。',
          ]);
          await printAndWait([
            '突然，那',
            chara.uma_sex_title,
            '想起了什么似的，掏出一件东西向',
            you.get_colored_name(),
            '抛了过来。',
          ]);
          await printAndWait([you.get_colored_name(), '手忙脚乱地接住了。']);
          await chara.say_and_wait(
            '这位好心的训练员，请一定不要冷落您的担当哦？呵呵……',
          );
          await printAndWait([
            you.get_colored_name(),
            '目送着这两位的身影逐渐消失，惊魂未定。',
          ]);
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            '实在是没有勇气面对这过于诡异的状况，于是手忙脚乱掏出手机，装作在打电话，悄悄溜走了。',
          ]);
          await printAndWait([
            '直到怪异的',
            chara.uma_sex_title,
            '与陌生训练员消失在了',
            you.get_colored_name(),
            '的视野中，',
            you.get_colored_name(),
            '才渐渐放松下来。',
          ]);
          await printAndWait([
            '虽然',
            you.get_colored_name(),
            '明白，两不相帮本质上还是在帮助怪异的',
            chara.uma_sex_title,
            '。',
          ]);
          await printAndWait([
            '不过',
            you.get_colored_name(),
            '一整天都在想这件事，似乎反而比平时更清醒了一些。',
          ]);
      }
      if (get('exp:0:监禁次数') === 0) {
        await printAndWait([
          '之后，',
          you.get_colored_name(),
          '不经意间想到，自己是不是也会犯下同样的错误、走向同样的结局呢？',
        ]);
      }
      return [ret];
    };
    f.title = '路见不平';
    return f;
  })(),
};
