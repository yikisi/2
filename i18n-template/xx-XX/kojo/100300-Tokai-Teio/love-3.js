/**
 * @file 东海帝王 - 爱慕
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('……搞不明白。');
      await teio.print_and_wait([
        '见到 ',
        callname,
        ' 自己就莫名奇妙地心跳加速，好像比赛前的反应……看到',
        you.sex,
        '跟别的',
        teio.phy_sex_title,
        '交谈总感觉不太舒服，跑完步后看见',
        you.sex,
        '微笑着向自己走来的时候身体会更热……',
      ]);
      await teio.say_and_wait('呜——是怎样啦！');
      await teio.print_and_wait(
        `问好友，${teio.couple_title}要么红着脸躲开，打着哈哈岔开话题，要么笑来笑去就没有正经解释，还有人半开玩笑半认真地问${teio.sex}是不是喜欢上了自己的训练员，可恶，这种事情……`,
      );
      await teio.print_and_wait('这种事情总不能去问训练员吧啊啊！！');
      await era.printAndWait(
        `在床上扑腾了一阵，散开头发的${teio.uma_sex_title}摇晃着小腿，趾尖一下下地轻触着床沿。`,
      );
      await teio.say_and_wait('算了，就算是恋爱，也难不倒帝王大人。');
      await teio.print_and_wait(
        `${you.name} 的担当抬起不知何时羞红的脸，擅自决定了两人从此以后的关系……`,
      );
      // TALENTNAME:0 = 情感活动
      if (era.get('talent:3:0') !== 1) {
        era.println();
        era.print([teio.get_colored_name(), ' 变得 [感性] 了！']);
      }
    };
    f.title = '萌动';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} callname 东海帝王对玩家的称呼
     */
    const f = async (teio, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `今天是和平常无甚区别的一天，${you.name} 像往常一样，站在田径场上，看着担当奔跑的身姿。`,
      );
      await era.printAndWait(
        `已经多久了呢？${you.name} 不禁思考起来。自己从公园中与${teio.sex}偶遇，到现在，仿佛并没有过太多时间，又仿佛已和${teio.sex}一起经历了许多。`,
      );
      await era.printAndWait(
        `一幕幕回忆涌上心头，${teio.sex}挥洒汗水，拼命锻炼的样子，${teio.sex}眯起眼睛，开心的笑容，${teio.sex}咬紧牙关在赛场上冲线的特写，${teio.sex}充满青春活力的倩影……`,
      );
      await era.printAndWait(
        `当初自己到底是以什么心态在众多人面前直接抢着签下${teio.sex}的？是觉得${teio.sex}能够让自己的职业生涯达到高峰？还是被${teio.sex}奔跑的模样，自信阳光的态度所感染，吸引？`,
      );
      await era.printAndWait(
        `又或是说……只因为见到了${teio.sex}本人？从第一眼起就产生了一股必须要让自己和${teio.sex}担当的冲动？`,
      );
      era.println();
      await teio.say_and_wait(`训练员？`);
      era.println();

      era.printButton('「什么？」', 1);
      await era.input();

      await era.printAndWait(
        `专属于 ${you.name} 的担当${teio.uma_sex_title}极其随意地用一只手撩起了自己的跑步过程中散开的头发，一边用头绳重新扎辫的同时一边用另一只手拿过 ${you.name} 手上已经拧好了的水瓶，小口小口地喝了起来。`,
      );
      await era.printAndWait(
        `不知是汗还是水的液体从白皙的皮肤上滴落，${
          you.name
        } 赶忙移开目光，却扫到了${teio.uma_sex_title}撩发露出的后颈上。`,
      );
      await teio.say_and_wait(`训练员，${you.name} 怎么了？`);
      era.println();
      await era.printAndWait(
        `${you.name} 一时半会还没思考好语言，就下意识说出了莫名奇妙的话`,
      );
      era.printButton('「嗯？哦！没什么，只是在想怎么看你。」', 1);
      await era.input();

      await teio.say_and_wait(`……？`);
      era.println();
      await era.printAndWait(
        `小${teio.uma_sex_title}笑意难忍，放下了水杯，脸颊微红地转身扭头，对上 ${
          you.name
        } 的视线。`,
      );
      era.println();
      await teio.say_and_wait(`那么，${callname}是怎么看我的呢？`);
      era.println();
      await era.printAndWait(
        `${teio.sex}紧紧盯着 ${you.name}，目光中夹杂着几分羞涩和些许期待。`,
      );
      era.println();
      await era.printAndWait(`${you.name} 会说——`);
      era.printButton(`「……或许不是我现在这个身份能说的」（升级关系）`, 1);
      era.printButton(
        `「一个优秀活泼可爱，但淘气的${teio.child_sex_title}……或者${teio.younger_sibling_sex_title}吧」（暂不升级）`,
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await teio.say_and_wait('那，你想要变成什么身份呢？');
        await era.printAndWait(
          `${teio.teen_sex_title}眼珠一转，嘻嘻笑着加了个问题。`,
        );
        await era.printAndWait('这个小鬼！');
        await era.printAndWait(`${you.name} 不禁有些头大，下意识吐槽道`);
        await you.say_and_wait('哎……你要是一直这样，以后一起生活可怎么办啊。');
        await teio.say_and_wait('一，一起？');
        await era.printAndWait(
          `${teio.teen_sex_title}慌了阵脚，捂住了自己的下半张脸，${
            you.name
          } 见势便也豁出去了。`,
        );
        await you.say_and_wait(
          '我……从一开始，就想一直和你一起奔跑下去。你会接受这个邀请吗？',
        );
        await teio.say_and_wait(`/////`);
        await era.printAndWait(
          `${teio.teen_sex_title}闭上双瞳，大口喘着气，随着一个深呼吸，${
            teio.sex
          }垂下了手，直视着 ${you.name}。`,
        );
        await teio.say_and_wait(
          '你可不准反悔哦，无敌的帝王大人也是会小心眼的！',
        );
        era.println();
      } else {
        await teio.say_and_wait(`这样啊……`);
        await era.printAndWait(
          `${teio.uma_sex_title}不禁嘟起了嘴，${
            you.name
          } 赶紧清了清嗓子，开始宣读今天的训练相关内容。`,
        );
      }
      return ret;
    };
    f.title = '不许变';
    return f;
  })(),
  '89-hurt': (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('训练员宿舍');
      await era.printAndWait('沉默。');
      await era.printAndWait(
        `${
          you.name
        } 看着面前闭着眼睛，面上有水珠滴落，身体微微有些颤抖的${teio.uma_sex_title}${teio.teen_sex_title}。`,
      );
      await era.printAndWait(
        `然后 ${you.name} 像之前一样，拿起加热过的，软绵的浴巾，开始给${teio.sex}擦拭身体，又拿起梳子和吹风机，帮${teio.sex}梳理毛发。`,
      );
      await era.printAndWait(
        `自从那件事后，${teio.sex}常常来 ${you.name} 的宿舍借用浴室，沐浴后则由 ${you.name} 再负责帮${teio.sex}弄干身体，顺便做一下护理。事到如今，已成了习惯。`,
      );
      await era.printAndWait(
        `擦拭完毕，${you.name} 将物品放在旁边的小桌上，开始给自己的担当做例行的腿脚按摩，帮助${teio.sex}复健。`,
      );
      await era.printAndWait(
        `${
          you.name
        } 带茧，略显粗糙的手在${teio.uma_sex_title}${teio.teen_sex_title}最重要的足和小腿处上下抚弄，时不时地用轻巧的力度摁压一下。`,
      );
      await era.printAndWait(
        `光滑而有弹性的皮肤触感反馈到 ${you.name} 的指尖上，从外表看矫健美妙的双腿实则内藏着危难。就是它们，支撑着${teio.sex}前行，奔跑，驰骋赛场。而现在……`,
      );
      era.println();
      await teio.say_and_wait('呐，训练员。');
      era.println();
      await era.printAndWait(
        `${you.name} 抬起头，心底隐约知道${teio.sex}会说出什么，但还是回道`,
      );
      await you.say_and_wait('怎么了，帝王？');
      era.println();
      await teio.say_and_wait('我……你……以后，还能怎么办呢？');
      era.println();
      await era.printAndWait(
        `${teio.sex}轻点下颌，望向双腿，曾经与${teio.sex}并肩作战，现在毫无生气也不知能不能恢复的同伴，同时，也看着 ${you.name}。`,
      );
      era.printButton(`「这就是我的答案。」（升级关系）`, 1);
      era.printButton(`「……」（暂不升级）`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' 掏出一只盒子，还没等',
          teio.uma_sex_title,
          teio.teen_sex_title,
          '反应过来，就轻轻捧起',
          teio.sex,
          '的左脚，打开包装，将里面的一枚戒指套在',
          teio.sex,
          '的第四趾上。',
        ]);
        await era.printAndWait(
          `被 ${you.name} 亲自挑选的趾戒尺寸刚好，可以固定在上又不会对佩戴者本人足趾的活动造成影响。`,
        );
        await era.printAndWait(
          `双手指肚习惯性捏了捏一些位于${teio.uma_sex_title}足部的，放松活血的穴位，`,
        );
        await era.printAndWait(
          `随后 ${you.name} 抬起头，目光从下而上扫去，对上了自家担当红透了的脸和似乎含泪的双眸。`,
        );
        era.printButton('「你愿意吗？」', 1);
        await era.input();
        await teio.say_and_wait('……愿意！');
        era.println();
        await era.printAndWait(
          `${teio.teen_sex_title}破涕为笑，张开双臂，${you.name} 起身，将${
            teio.sex
          }紧抱住，再不分开。`,
        );
        // TALENTNAME:53 = 神之足
        if (!era.get('talent:3:53')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' 具有 ',
            {
              color: buff_colors[2],
              content: '[神之足]',
            },
            ' 了！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} 想说什么？${you.name} 该说什么？${you.name} 能说什么呢？最终只不过是一句叹息。`,
        );
        await era.printAndWait(
          `${
            you.name
          } 默默地做着剩下的步骤，完事后把安静地${teio.teen_sex_title}抱起再放下，走到房门外，送别。`,
        );
      }
      return ret;
    };
    f.title = '契约已定';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('训练员宿舍');

      await teio.say_and_wait(`蜂蜜～`);
      era.println();
      await era.printAndWait(
        `${you.name} 哎了一声，让小${teio.uma_sex_title}坐进自己怀里（免得${
          teio.sex
        }挤来挤去闹腾），举起手上的毛巾，熟练地擦干${teio.sex}的头发。`,
      );
      await era.printAndWait(
        '同时另一只手也没闲着，操纵着鼠标浏览着电脑上的训练文件。',
      );
      era.println();
      await teio.say_and_wait('唔……');
      era.println();
      await era.printAndWait(
        `小${teio.uma_sex_title}喝着从冰箱里拿出的蜂蜜特饮，也看着 ${
          you.name
        } 电脑上的资料。`,
      );
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait('忍不住了。');
      await era.printAndWait(
        `刚刚出浴的${teio.teen_sex_title}身上的香气，大腿上的肌肤触感，时不时扫弄自己小腹的${teio.uma_sex_title}毛发……`,
      );
      await era.printAndWait(`${you.name} 感觉血液流通已经产生了生理导向。`);
      era.println();
      await teio.say_and_wait('训练员～这一页已经好长时间了哦。');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `坐在 ${you.name} 腿上的她很自然地往身后靠了靠，${you.name} 不禁浑身僵硬，`,
      );
      await era.printAndWait(
        `紧接着，${teio.sex}的头又靠进 ${you.name} 的胸口，小小的马耳灵动地转了一圈，然后贴到 ${you.name} 的心口处。`,
      );
      era.println();
      await teio.say_and_wait(`心跳得有些快哦。`);
      await era.printAndWait(`${you.name}——`);
      era.printButton('低头含住担当的耳朵（升级关系）', 1);
      era.printButton('强行站起（暂不升级）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `鬼迷心窍地，${you.name} 低下头，一口轻衔住了帝王的马耳尖，透过口腔，${you.name} 感觉${teio.sex}不自然地颤动了一下，随即沉静下来，默默接受，并等着 ${you.name} 的下一步。`,
        );
        era.println();
        await you.say_and_wait(
          '帝王……你愿意继续跟我走下去吗，走到更远的地方。',
        );
        era.println();
        await era.printAndWait(
          `${teio.sex}的脸已经红透了，小声说了句什么，明确地点了点头。`,
        );
        // TALENTNAME:62 = 淫身
        if (!era.get('talent:3:62')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' 变得 ',
            {
              color: buff_colors[2],
              content: '[淫身]',
            },
            ' 了！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${
            you.name
          } 强压住心中浮现出的那份再正常不过的生理冲动，扶住${teio.uma_sex_title}，将${
            teio.sex
          }放到一旁，站了起来，咳了一声，假装无事发生。${
            teio.name
          } 看起来有点不满。`,
        );
      }
      return ret;
    };
    f.title = 'Together, forever';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} teio 东海帝王
     * @param {CharaTalk} you 玩家
     * @param {string} tname 获得的特性名
     */
    const f = async (teio, you, tname) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} 呼吸着清新的空气，在阳光沐浴下散着步。`,
      );
      await era.printAndWait(
        `突然，身后传来沙沙的声响，柔软而有弹性的触感从腰后传来，一双穿着纯白色袖套的双手紧紧扣住了 ${you.name} 的身子。`,
      );
      era.println();
      await you.say_and_wait(
        `光天化日之下被${teio.uma_sex_title}抱住的年上教练，旁人会怎么看啊。`,
      );
      era.println();
      await teio.say_and_wait(
        `多有福气呀。我要是看到了被这样对待还好像受了委屈的人，肯定把${you.sex}一脚踢到海里。`,
      );
      era.println();
      await you.say_and_wait('你可饶我一命吧。');
      era.println();
      await teio.say_and_wait('没关系。现在的我又不是外人。');
      era.println();
      await era.printAndWait(
        `${you.name} 用余光看到${teio.sex}的马尾愉快地摆了摆。`,
      );
      era.println();
      await teio.say_and_wait('而且……现在也没有外人。');
      era.println();
      await era.printAndWait('确实。');
      await era.printAndWait(
        `不知为何，${you.name} 和${teio.sex}确立情人关系后，就莫名奇妙在校园活动里中了个奖。`,
      );
      await era.printAndWait('奖品是双人邮轮免费一日参观，附赠婚礼礼服租用。');
      await era.printAndWait(
        `${you.name} 想起了当时那些工作人员计划得逞的目光和暧昧地微笑，不由得苦笑。`,
      );
      era.println();
      await you.say_and_wait('……你这样紧贴着我的话，很容易出问题。');
      era.println();
      await teio.say_and_wait('现在可是大白天哦，而且是在船上哦？');
      era.println();
      await you.say_and_wait('所以我才觉得困扰。这要让我怎么解决呢？');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        {
          content: `「……训练员${you.adult_sex_title}啊，不会是对自己负责的学生起反应的变态吧？」`,
          color: teio.color,
        },
        '（笑）',
      ]);
      era.println();
      await you.say_and_wait('不是……额，不好说……不对，不能是！');
      era.println();
      await teio.say_and_wait('呵呵……那解释一下？');
      era.println();
      await era.printAndWait(
        `担当${teio.uma_sex_title}的身体贴得更近了，${
          you.name
        } 感觉自己口干舌燥，心跳异常，连忙说道`,
      );
      era.println();
      await you.say_and_wait('只是对自己的自制力不抱任何幻想罢了。');
      era.println();
      await teio.say_and_wait('不过我倒是……也已经明白了那些事情呢……');
      era.println();
      await era.printAndWait(
        `脸红的${teio.uma_sex_title}${teio.teen_sex_title}叽叽咕咕地絮叨着离开了 ${you.name}。令人舒适的体温渐行渐远。`,
      );
      await era.printAndWait(
        `不料，${teio.sex}马上又回来了。担当绕到 ${you.name} 跟前，想要钻进外衣里。`,
      );
      era.println();
      await you.say_and_wait('更不像话了。');
      era.println();
      await teio.say_and_wait('也许吧。');
      era.println();
      await you.say_and_wait('如果激起我的欲望，怎么办？');
      era.println();
      await teio.say_and_wait('到时再说。');
      era.println();
      await you.say_and_wait('……真是不负责任。');
      era.println();
      await teio.say_and_wait('呵呵。');
      era.println();
      await you.say_and_wait('冷吗？');
      era.println();
      await teio.say_and_wait('唔……');
      era.println();
      await era.printAndWait(
        `船速不快，海风也很适宜。但仍能感觉到耳边寒风凛冽，是降温了吗？${you.name} 下意识拉开外衣的边缘，将 ${teio.name} 裹紧自己的怀里。身着白色婚纱——`,
      );
      await era.printAndWait(
        `——看起来更像是花童——的小${teio.uma_sex_title}从 ${you.name} 黑色的衣领处冒出头来，整个人倚在 ${you.name} 身上。`,
      );
      await era.printAndWait('啊……这下暖和了。');
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await teio.say_and_wait('没问题的。');
      era.println();
      await you.say_and_wait('……？');
      era.println();
      await era.printAndWait(
        `怀中的${teio.teen_sex_title}突然冒出这么一句话。`,
      );
      await era.printAndWait(
        `凝视。眼前是为 ${you.name} 鼓气的微笑，以及不知怀疑为何物的明眸。`,
      );
      era.println();
      await teio.say_and_wait('你的目光有些躲闪哦。');
      era.println();
      await you.say_and_wait('……');
      await era.printAndWait(
        `不得不承认，${you.name} 刚刚确实有些恍惚——接下来要开始的，就是二人的新生活了。`,
      );
      await era.printAndWait(
        `自己的人生，给${teio.sex}一半，相互的，${teio.sex}也拥有 ${you.name} 的一半。自己，真的能承担这份沉重吗？`,
      );
      era.println();
      await teio.say_and_wait(`一定能行的，${you.actual_name}。`);
      era.println();
      await era.printAndWait(
        `——让${teio.child_sex_title}子这么安慰自己，反倒更尴尬和慌乱啊。`,
      );
      await era.printAndWait(
        `${you.name} 笑了笑，把手放在${teio.sex}的头上，胡乱摸了摸，${teio.sex}眯起眼，享受地哼起了小调。`,
      );
      await era.printAndWait('怀中至宝，如此美丽。');
      await era.printAndWait(
        `这位${teio.uma_sex_title}，拥有无垢纯洁的信念，并且为此奉献上了自己的躯体。${
          teio.sex
        }的灵魂又光彩照人，如太阳般闪耀。`,
      );
      await era.printAndWait(
        `这位${teio.teen_sex_title}……就是 ${you.name} 曾差点放弃的梦想之化身。`,
      );
      era.printButton(`「抱紧${teio.sex}，共同前进」（升级关系）`, 1);
      era.printButton('「松开手，驻足不前」（暂不升级）', 2);
      ret.push(await era.input());
      if (ret[0] === 1 && tname) {
        era.println();
        era.print([
          teio.get_colored_name(),
          ' 变得 ',
          {
            color: buff_colors[2],
            content: `[${tname}]`,
          },
          ' 了！',
        ]);
      }
      return ret;
    };
    f.title = '明日再叙';
    return f;
  })(),
};
