/**
 * @file 爱丽数码 - 招募
 * @author 片手虾好评发售中！
 */
const era = require('#/era-electron');

module.exports = {
  rec_start: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      const ret = [];
      await era.printAndWait(
        `训练场，原本作为${digital.uma_sex_title}平日训练的地点，今日却挤满了训练员，因为今天不仅只有${digital.uma_sex_title}训练，还有一项重要的活动——选拔赛。`,
      );
      await era.printAndWait(
        `具有天赋的${digital.uma_sex_title}为了邂逅出色的训练员，自然要展现自己的实力，选拔赛自然是绝佳的选择。`,
      );
      await era.printAndWait([
        '作为训练员的 ',
        you.get_colored_name(),
        '，自然也在关注正在飞驰的',
        digital.uma_sex_title,
        '，但偶然间，',
        you.get_colored_name(),
        ' 眼睛余光注意到了远处隐藏于看台阴影下的粉色身影。',
      ]);
      era.println();
      await you.say_and_wait(`嗯……${digital.uma_sex_title}？`);

      await era.printAndWait(
        `\n选拔赛原则上是所有未找到训练员的${digital.uma_sex_title}共同参加的，找到训练员的${digital.uma_sex_title}也绝大多数不会在意这场未入流的比赛。`,
      );
      await era.printAndWait(`${you.name} 决定去看一眼。`);
      await digital.say_and_wait(
        `呜呼呼呼，相互交错的双腿，略微凌乱的呼吸，互不相让的觉悟，以及梦寐以求的相遇，太太太尊尊尊了……`,
      );
      await era.printAndWait(
        `当 ${
          you.name
        } 从后面楼梯绕上看台时，看到了一个粉色头发，扎着一个醒目的红色的大蝴蝶结的${digital.uma_sex_title}，此时${
          digital.sex
        }正高举双手……应援？`,
      );

      era.println();
      await era.printAndWait(`${you.name} 的选择：`);
      era.printButton('（应援不可能有人比我更勇！）', 1);
      era.printButton(
        `「你不是${digital.uma_sex_title}吗？为什么在这里？」`,
        2,
      );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `${you.name} 从不存在的背包里掏出应援棒，然后……`,
        );
        await era.printAndWait(`里打里跳前挥先给${digital.sex}整上一套！`);
        await you.say_and_wait(`嗯嗨哦嗨……呜哟嗨！`);
        await era.printAndWait(
          `挥出应援棒，就像打年糕一样，运用全身的肌肉，从腿部，腰间到手臂，把力量传递，才可以打出最劲的call！`,
        );
        await digital.say_and_wait(`诶？这里有人吗？不会吧……`);
        await era.printAndWait(
          `发出疑惑的声音，粉红色的${digital.uma_sex_title}左看右看，转过身来，看到了你。`,
        );
        await digital.say_and_wait(
          `哇！这个演唱会应援的方式用于赛跑，真不错啊！你！一定是很喜欢${digital.uma_sex_title}的训练员吧！`,
        );
        await era.printAndWait(
          `那可不然，${you.name} 可是百里挑一的中央训练员啊。${you.name} 自豪地收回应援棒。`,
        );
        await you.say_and_wait(`那么问题来了，你为什么不参加选拔赛？`);
        await digital.say_and_wait(
          `诶？你说我吗，不不不，我就是随处可见的普通赛${digital.uma_sex_title}${
            digital.name
          }，不是那种该出现在赛场的${digital.uma_sex_title}。`,
        );
        await era.printAndWait(
          `${digital.sex}激烈地摆动双手，似乎是想说${digital.sex}完全不合适。`,
        );
      } else {
        await digital.say_and_wait(
          `哇啊啊啊，十分抱歉！让你看到不好的东西了，我立刻换个地方！`,
        );
        await era.printAndWait(
          `${digital.sex}慌张地摆动双手，并且还想立刻离开。`,
        );
        await you.say_and_wait(`等一下！`);
        await digital.say_and_wait(`噫？`);
        await you.say_and_wait(`你不参加选拔赛吗？`);
        await digital.say_and_wait(
          `牡蛎牡蛎！我就是个普通的${digital.uma_sex_title}${
            digital.name
          }，不可以这样影响到${
            digital.couple_title
          }！数码我只需要远远地看着就好了！天仙般的${digital.uma_sex_title}只可远视！`,
        );
        await era.printAndWait(
          `可以看得到，${digital.sex}把头摇得像鼓浪一样。`,
        );
      }
      await era.printAndWait(
        `${you.name} 不是很理解${digital.sex}的意思，看上去${
          digital.sex
        }十分喜欢${digital.uma_sex_title}，但是又不愿接近${digital.uma_sex_title}，而且，${
          digital.sex
        }不也是${digital.uma_sex_title}吗。`,
      );
      await you.say_and_wait(
        `为什么不打算参赛，在近距离观察${digital.couple_title}呢？`,
      );
      await digital.say_and_wait(`诶？虽然这说得很有道理……但是我不想出道`);
      await digital.say_and_wait(
        `如果我出道了，我我我可就无法近距离推到另一边的${digital.uma_sex_title}了！`,
      );
      await digital.say_and_wait(
        `这对于我来说是无法接受的，无论是草地上，还是泥地上奔跑的${digital.uma_sex_title}，都是最棒的啊！`,
      );
      await digital.say_and_wait(`呜哦哦哦哦……`);
      await era.printAndWait(`${digital.sex}捂住了大脑，看起来非常痛苦。`);
      await era.printAndWait(
        `虽然还不是很理解${digital.sex}的困处，${digital.sex}看起来在为草地和泥地之中仅能选择其中一项而感到焦虑。`,
      );
      await era.printAndWait(
        `的确，在先前，并没有听说过有哪位${digital.uma_sex_title}可以在两类赛道上都漂亮地奔驰……至少在中央赛事上如此。`,
      );
      await digital.say_and_wait(`所以，我得先走了！`);
      await era.printAndWait(
        `为何，不参加选拔赛？选到合适的训练员，出道，在赛事下留下自己的名字，是每一个${digital.uma_sex_title}的梦想，不是这样吗？`,
      );
      return ret;
    };
    f.title = '是变态啊！是……是吗？（前篇）';
    return f;
  })(),
  rec_end: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      await era.printAndWait(
        `${you.name} 对 ${digital.name} 起了好奇心，所以在选拔赛过去一天后，${you.name} 幸运地在公共训练场上发现了${digital.sex}。`,
      );
      await digital.say_and_wait(
        `呼嘿呼嘿，是${digital.uma_sex_title}跑过的泥地，能够以这副躯体奔跑在无法亵渎的泥土上，真是三女神的恩惠……`,
      );
      await era.printAndWait(
        `稍具力量的双腿踏在泥地上，扬起浮尘，脚力强劲，看起来是十分适合泥地的类型。`,
      );
      await digital.say_and_wait(
        `呀哈，${digital.uma_sex_title}酱跑过的草地，真的是太棒了……这样的话，无论什么比赛展开都能拿到好的成绩，真是积德了呢～`,
      );
      await era.printAndWait(
        `擦了下头上的汗水，仰天大笑，${digital.sex}看起来十分的享受。`,
      );
      await era.printAndWait(
        '等一下，数码刚才是转去跑草地了吗？！不是，这不是说……',
      );
      await era.printAndWait(
        `这意味着${digital.sex}要付出双倍的训练量才能达到这种效果！`,
      );
      era.println();
      await you.say_and_wait(
        `这么足够的实力不打算参加选拔赛吗？这是暴殄天物啊！`,
      );
      era.println();
      await digital.say_and_wait(
        `不不不，要是参加了我的大脑会像爆米花一样炸开的！`,
      );
      await digital.say_and_wait(`嗯……诶！怎么是你？`);
      await era.printAndWait(
        `或许是之前给${digital.sex}留下了好的印像，也或许是${digital.sex}只是想跟 ${you.name} 说明白，${digital.sex}示意借一步说话。`,
      );
      era.drawLine();
      await era.printAndWait(`跟着${digital.sex}来到了训练场的看台上。`);
      await era.printAndWait(
        `大多数训练员观察${digital.uma_sex_title}训练都是在比较近的位置，因此看台反而成了比较少人经过的地方。`,
      );
      await era.printAndWait(
        `把手搭在栏杆上，数码看着训练场上训练的${digital.uma_sex_title}。`,
      );
      era.println();
      await digital.say_and_wait(`事实上，我是带着对推的妄想在跑步。`);
      await era.printAndWait(`说着这番话的数码做沉思状。`);
      await you.say_and_wait(`推的妄想？`);
      await digital.say_and_wait(`诶？是出现特殊名词了吗？嗯，简单的说……`);
      await era.printAndWait(
        `${
          digital.sex
        }开始滔滔不绝地讲起了对${digital.uma_sex_title}的爱，到底如何喜欢上${digital.uma_sex_title}，以及因为喜欢，所以努力考上了特雷森，本来想着出道时突然发现……`,
      );
      await digital.say_and_wait(
        `如你所见，我草地跟泥地的适性都还好，但就是因为都可以，所以才难以选择啊！选了一边就会抛弃另一边！`,
      );
      await era.printAndWait(`数码无奈地摊开了手。`);
      await digital.say_and_wait(
        `每个${digital.uma_sex_title}酱都有每一边的好啊！每一个都很尊啊！`,
      );
      await digital.say_and_wait(
        `这是我不能接受的！所以我抛弃了觉悟，都不选啦！`,
      );
      await digital.say_and_wait(`啊哈哈哈哈！`);
      await era.printAndWait(
        `叉起腰，仰起头，${digital.sex}自嘲般地大笑了起来。`,
      );
      await digital.say_and_wait(
        `怎么样？这下对我没办法了吧？我就是个这样毫无觉悟的赛${digital.uma_sex_title}！`,
      );
      await you.say_and_wait(`毫无觉悟吗……`);
      await era.printAndWait(
        `作为训练员，${
          you.name
        } 已经看过了或者听过了很多泥地${digital.uma_sex_title}，短距离${digital.uma_sex_title}苦恼于不能参加在闪耀系列赛里面最热门的中距离草地比赛。`,
      );
      await era.printAndWait(
        `但是，到了最后，${digital.couple_title}都意识到了——比赛本身的巨大意义，也就是比赛所带来的价值，相比起人气来说都不值一提。`,
      );
      await era.printAndWait(
        `这位${digital.uma_sex_title}呢？自称为 ${
          digital.name
        } 的${digital.uma_sex_title}，因为无法同时在草地和泥地上奔驰而苦恼，但是，与其他${digital.uma_sex_title}不同的是，${
          digital.sex
        }有这个天赋。`,
      );
      await era.printAndWait(`而且……${digital.sex}为此付出了双倍的努力。`);
      await digital.say_and_wait(
        `呼呼呼，感到无言以对了吧？那么我就先走一步啦～`,
      );
      era.println();
      await you.say_and_wait(`不，换句话说，你才是最有觉悟的！`);
      await digital.say_and_wait(`诶？你什么意思？`);
      await era.printAndWait(
        `是啊，就在刚才，这样小巧的身姿在泥地上充满力量的奔跑。`,
      );
      await era.printAndWait(`以及，丝毫不逊色于泥地上，草地上轻盈的奔跑。`);
      await era.printAndWait(
        `在无法做出选择的时候，${digital.sex}却在两侧就努力到了现在。`,
      );
      await era.printAndWait(`必可以活用于这次！`);
      await you.say_and_wait(`不做选择的觉悟！`);
      await era.printAndWait(
        `是的，不做选择本身就是一种选择，但${digital.sex}所说的「不做选择」，可是要付出双倍的努力啊！`,
      );
      await digital.say_and_wait('诶？');
      await you.say_and_wait(
        `不做选择！不再草地泥地做出选择，不就是即选择草地也选择泥地吗！`,
      );
      await era.printAndWait(
        `数码僵住了，本来无精打采偶尔耷拉一下的尾巴都定住了。`,
      );
      await digital.say_and_wait('诶？既选择草地又选择泥地，你是说……');
      await you.say_and_wait(`对的，就是说全能跑者啊！`);
      await digital.say_and_wait('不不不不，不可能的');
      await digital.say_and_wait('就是在编故事中也不敢轻易出现的全能跑者？！');
      await era.printAndWait('嗯，再怎么说还是有点不切实际吗……');
      await digital.say_and_wait('你是天才吗！');
      await digital.say_and_wait(
        `我可以既在草地上观察践破草皮的${digital.uma_sex_title}，也可以在泥地上观察扬起尘土的${digital.uma_sex_title}？！`,
      );
      await digital.say_and_wait('嘿呀————！！！！！！！！！！！！！！！！！');
      await era.printAndWait(
        `看起来数码说话真的很快，没让 ${you.name} 反应过来，${digital.sex}已经长喊着高举双手转了一圈了。`,
      );
      await era.printAndWait(
        `似乎是让${digital.sex}理解了你的意思，${digital.sex}居然想要挑战吗？！`,
      );
      await digital.say_and_wait(
        `平日侍奉${digital.uma_sex_title}酱们所得到的回报，终于成了丰硕的果实吗！`,
      );
      await digital.say_and_wait('呜呀————————！');
      await digital.say_and_wait('决定了！数码碳我要成为全能王！');
      await digital.say_and_wait('为了能近距离接触每一个推！');
      await you.say_and_wait(`真是有趣呐，要不要成为我的担当？`);
      await era.printAndWait(`${you.name} 伸出了右手。`);
      await era.printAndWait(
        `即使是看到了先前${digital.sex}在泥地与草地上的精彩表现，但赛场上终究与训练不同，${digital.sex}的未来到底会如何，这激起了你极大的好奇心。`,
      );
      await digital.say_and_wait(
        `……先说明一点，我仅是想要以最近的距离推我的推，所以不要对我有太大的期望……`,
      );
      await era.printAndWait(`怎么一开始就打退堂鼓了……`);
      await era.printAndWait(
        `但${digital.sex}的眼神却格外坚定，娇嫩的小手握住了你的手。`,
      );
      await era.printAndWait(
        `虽然看起来有点奇怪，但${digital.sex}必可以在赛场上擦出不一样的火花，${you.name} 这样确信。`,
      );
    };
    f.title = '是变态啊！是……是吗？（后篇）';
    return f;
  })(),
};
