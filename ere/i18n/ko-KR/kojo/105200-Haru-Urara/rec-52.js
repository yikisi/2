/**
 * @file ハルウララ - 募集
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} inner_urara
   * @param {CharaTalk} you
   * @param {string} callname
   * @param {number} rec_mark
   */
  async recruit(urara, inner_urara, you, callname, rec_mark) {
    const ret = [];
    if (era.get('cflag:52:育成次数') > 0) {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '또 왔구나. 같은 이야기를 다시 듣고 싶니? 아니면, 아직 끝내지 못한 미련이 있는 걸까?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '네가 원한다면 처음부터 다시 시작하자. 새로운 이야기에서 답을 찾을 수 있기를 바라.',
      );
      await inner_urara.say_as_unknown_and_wait(
        `언제나처럼, 이건 더는 작아질 수도 없을 만큼 아주 작은 ${urara.uma_sex_title}의 이야기——`,
      );
    } else if (rec_mark) {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '이번에는 각오가 되어 있니? 이번만큼은 이야기를 끝까지 함께해 주면 좋겠어……기대하고 있을게.',
      );
      await inner_urara.say_as_unknown_and_wait(
        `그럼, 이건 더는 작아질 수도 없을 만큼 아주 작은 ${urara.uma_sex_title}의 이야기——`,
      );
    } else {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '있지, 들리니? 듣고 있다면 슬슬 이 이야기를 시작하자.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '흔한 이야기일 수도, 조금 긴 이야기일 수도 있어. 그래도 선택한 이상 끝까지 들어 줘.',
      );
      await inner_urara.say_as_unknown_and_wait(
        `이건 더는 작아질 수도 없을 만큼 아주 작은 ${urara.uma_sex_title}의 이야기——`,
      );
    }
    era.drawLine();
    await era.printAndWait(
      `훈련장 구석에서 따가운 햇볕을 피해 앉아 있던 ${you.name}은(는) 문득 어지러움을 느꼈다.`,
    );
    await era.printAndWait(
      `며칠 전에도 이런 기분이 들긴 했지만, 이번에는 그 증상이 훨씬 뚜렷했다.`,
    );
    await era.printAndWait(
      `이유는 아직 알 수 없었다. 다만 ${you.name}은(는) 가슴 깊은 곳에서 무언가가 빠르게 빠져나가는 것을 느끼고 있었다……`,
    );
    await era.printAndWait(`……`);
    await era.printAndWait(
      `엘리트가 모이는 중앙 트레센에서 가장 부족함 없는 것은 인재와 천재다.`,
    );
    await era.printAndWait(
      `신인이든 이미 전설이 된 사람이든, 언제나 더 뛰어난 누군가가 더 높은 정상에 서 있다.${you.name}은(는) 그곳까지 단 한 걸음을 남겨 놓고도 닿지 못할 것 같았다.`,
    );
    await era.printAndWait(
      `지금까지 쌓아 온 모든 것을 발판 삼아 전력을 다해 몸을 끌어올려도, 『극소수』만이 서는 자리는 여전히 멀었다——`,
    );
    await era.printAndWait(
      `선배들의 경험담은 마지막 한 걸음이 이토록 멀다는 것을 알려 주지 않았다.${you.name}은(는) 조금 좌절하고 있었다.`,
    );
    await era.printAndWait(
      `재능을 타고나 천재라고까지 불리는 동료들 앞에서, ${you.name}이(가) 기댈 수 있는 것은 이제 『버티는 것』뿐이었다.`,
    );
    await era.printAndWait(
      `스스로를 납득시키려 애썼다. 그래도 마음을 완전히 가라앉힐 수는 없었다.`,
    );
    await era.printAndWait(
      `${urara.uma_sex_title}에 대한 이해가 뒤처진다는 사실을 쉽게 받아들여서는 트레이너를 할 수 없다.${
        you.name
      }에게는 아직 더 나아가고 싶은 마음이 남아 있었다.`,
    );
    await era.printAndWait(
      `계속 추구하고, 앞으로 나아가고 싶다. 할 수 있는 일은 당장의 압박을 일단 견뎌 내는 것뿐이었다.`,
    );
    await era.printAndWait(
      `하지만 지금의 ${you.name}은(는) 떠올리지 못했다. 억지로 긴장하기보다 무거운 짐을 잠시 내려놓고, 아주 작은 『희망』을 스스로에게 채워 주는 일이 더 필요했다는 것을.`,
    );
    await era.printAndWait(
      `물론 하늘은 사람의 바람대로 개지 않는다. 이 턱을 어떻게 넘어설지 생각하기도 전에 더 큰 문제가 닥쳤다.`,
    );
    await era.printAndWait(
      `압박에 쫓겨 멈추지 못하게 된 ${you.name}은(는) 최근 계속 야근으로 자신을 몰아붙였다. 그 끝에 정신이 마침내 한계에 다다랐다.`,
    );
    await era.printAndWait(
      `금방이라도 쓰러질 듯한 ${you.name}은(는) 실 끊어진 인형처럼 옆으로 기울었다. 땅에 닿기 직전, 흐려지는 시야 속으로 벚꽃빛 한 줄기가 파고들었다.`,
    );
    await era.printAndWait(
      `그리고 ${
        you.name
      }의 곁으로 퍼져 온 것은 천진한 ${urara.teen_sex_title}에게서 풍기는 향기였다.`,
    );
    await era.printAndWait(
      `벚꽃 향기일까? 그럴 리 없다. 물처럼 옅은 벚꽃이 이토록 안심되는 향기를 낼 리 없었다.`,
    );
    await era.printAndWait(
      `그렇다면……과부하에 걸린 뇌가 만들어 낸 환각일까? 아무래도 정말 지칠 대로 지친 모양이었다……`,
    );
    await era.printAndWait(
      `멀어지는 의식을 붙잡지 못한 채, ${you.name}은(는) 끊어지는 생각 속에서 천천히 눈을 감았다.`,
    );
    await era.printAndWait(
      `의식이 사라지기 직전, ${you.name}은(는) 분명히 느꼈다. 누군가 쓰러진 몸에 다가와 다정하게 받아 안아 주고 있다는 것을.`,
    );
    await era.printAndWait(
      `몸이 닿은 순간, ${urara.teen_sex_title}의 은은한 향기가 ${
        you.name
      }의 몸과 마음을 감쌌다. 체육복에 남은 운동 후의 온기까지 섞여 있는 듯했다.`,
    );
    await urara.say_as_unknown_and_wait(
      `트레이너? 괜찮아? 잠시만! 금방 보건실로 데려다줄게!`,
    );
    await era.printAndWait(
      `말로 표현할 수 없는 안도감 속에서 몸이 한계를 맞았고, ${
        you.name
      }은(는) 도와주러 온 ${urara.uma_sex_title}에게 고마움을 느끼며 의식을 놓았다.`,
    );

    era.drawLine();
    inner_urara.say_as_unknown(
      `의식의 틈새에서, ${callname}은(는) 이렇게 생각했다(말했다)——`,
    );
    era.printButton(`「꿈이 아니었구나……」`, 1);
    era.printButton(`「……미안해……」`, 2);
    era.printButton(`「처, 천사인가……?」`, 3);
    ret.push((ret['love'] = await era.input()));
    await inner_urara.say_as_unknown_and_wait(
      `소년과 소녀의 만남일까? 후훗, 입장 차이를 생각하면 어느 쪽이든 그건 아니겠지.`,
    );
    await inner_urara.say_as_unknown_and_wait(
      `하지만 이런 만남도 의외로 나쁘지 않지 않아?`,
    );

    era.drawLine();
    await era.printAndWait(
      `코끝을 스치는 익숙한 약품 냄새와 함께, 멀어졌던 의식은 트레센 보건실에 누워 있는 육체를 서서히 되찾았다.`,
    );
    await era.printAndWait(
      `ゆっくり目を覚ました ${you.name} は、朦朧としたまま傍らの柔らかさを味わっていた。硬いシーツのことではない。隣で眠っている少女の、その感触だ。`,
    );
    await era.printAndWait(
      `目を開けなくても、${
        you.name
      } は傍らの甘い気配でだいたい察しがついた。いま枕を並べているのは、倒れた ${
        you.name
      } を保健室まで運んでくれた小${urara.uma_sex_title}だ。`,
    );
    era.println();

    await inner_urara.say_as_unknown_and_wait(
      `자, 잠에서 깬 ${callname}은(는) 어떻게 할까——`,
    );
    era.printButton(
      `일어나서 고맙다고 한다.${
        you.name
      }은(는) 눈을 뜨고 먼저 ${urara.teen_sex_title}의 상태를 살펴보기로 했다.`,
      1,
    );
    era.printButton(
      `まだ、疲れてる。${you.name} は目を閉じたまま、得がたい温柔郷に浸ることにした。`,
      2,
      { disabled: urara.sex_code === 1 },
    );

    if ((await era.input()) === 2) {
      await era.printAndWait(
        `こんなに安心できたのは、もうずいぶん久しぶりだった。`,
      );
      await era.printAndWait(
        `目を閉じたまま、${you.name} はその温もりの源へさらに身を寄せ、ほとんど${urara.sex}を抱き寄せそうになる。`,
      );
      await era.printAndWait(
        `眠りの中の、柔らかくて健康な肉感。素朴な花のような体の匂い。どちらも ${you.name} の心をほどいていく。`,
      );
      await era.printAndWait(
        `${urara.teen_sex_title}の吐息がすぐ近くで、無邪気に ${
          you.name
        } の首筋をくすぐる。距離感を失った接触に、${you.name} の意識は沈んでいった。`,
      );
      await era.printAndWait(
        `助けてくれた生徒にこんなことをするのは、とてもよろしくない。大人として、下品すぎる——${you.name} にもそれはわかっている。`,
      );
      await era.printAndWait(
        `それでも今の ${you.name} の頭は、心の飢えに従い、体へ『もう一歩』と命じ続けていた。`,
      );
      await era.printAndWait(
        `恍惚の中、${you.name} の指が小${urara.uma_sex_title}の体へ這い上がる。`,
      );
      await era.printAndWait(
        `指先から掌へ。${you.name} は触覚で、思いのほか小さな輪郭と、つぼみのような曲線を測っていく。`,
      );
      await era.printAndWait(
        `片手は${urara.teen_sex_title}の胸の丘を撫で、柔らかい頬と唇をかすめ、さらさらの髪を伝う。`,
      );
      await era.printAndWait(
        `指は耳カバーの内側を探り、小さな耳の柔らかさを味わう。`,
      );
      await era.printAndWait(
        `もう一方の手は柔らかい後頸と背筋を下り、毛に隠れた${urara.teen_sex_title}の尾の根元へ滑り込む。`,
      );
      await era.printAndWait(
        `敏感な根元だけでなく、指をひと曲げすれば、ブルマの穴からさらに奥へも届く。`,
      );
      await era.printAndWait(
        `衣を一枚めくれば、もっと深い秘密の『花園』にまで……`,
      );
      await era.printAndWait(
        `だが ${
          you.name
        } がさらに深く入ろうとしたとき、眠りの中の小${urara.uma_sex_title}が耳と尻尾を震わせ始めた。`,
      );
      await era.printAndWait(
        `体が小さく震え、喉から可愛い吐息が漏れる。夢から覚める前触れだ。`,
      );
      await era.printAndWait(
        `もう欲張りすぎてはいけない。半睡の ${you.name} はようやく理性を取り戻し、目を開けるべきだと気づいた——`,
      );
      era.printButton('눈을 뜬다', 1);
      await era.input();
    }

    await era.printAndWait(
      `눈을 뜬 순간, 벚꽃빛이 시야를 가득 채웠다. 활짝 핀 벚꽃 같은 눈동자가 ${you.name}의 시선과 마주쳤다. 천진하지만 아무것도 모르는 것만은 아닌, 작은 빛이 담겨 있었다.`,
    );
    await era.printAndWait(
      `그 맑은 눈동자는 선입견도 의심도 없이 ${you.name}을(를) 바라보다가, 악의 없는 미소를 지어 보였다.`,
    );
    await era.printAndWait(
      `벚꽃빛 포니테일과 붉은 리본을 흔들며, 어린아이처럼 천진한 작은 ${urara.uma_sex_title}이(가) ${
        you.name
      }보다 먼저 보건실 침대에서 상체를 일으켰다.`,
    );
    await era.printAndWait(
      `肌に沿う体操服の下に、幼いのに意外と整った体つきが透ける。正座した太腿と尻は、幼い印象に似合わないほど豊かに丸い。`,
    );
    await era.printAndWait(
      `溢れんばかりの肉感が三角の下着を満たし、密着した布が腰と尻に生々しい食い込みを残している。`,
    );
    await era.printAndWait(
      `여기에 거리감을 잴 수 없는 동안의 얼굴이 더해져, 아직 미숙함에도 불구하고 ${urara.sex}는 자신만의 독특한『여성』으로서의 매력을 발산하고 있었다.`,
    );
    await era.printAndWait(
      `어쩔 수 없었다고 변명해 봐도, 그 사랑스러운 얼굴에 떠오른 티 없이 맑은 미소는 조금 전 ${urara.sex}와(과) 나란히 누워 응석을 부렸던 ${you.name}에게 피할 수 없는 죄책감을 남겼다.`,
    );
    await urara.say_as_unknown_and_wait(
      '트레이너 맞지? 몸은 좀 어때? 트레이너라는 직업은 정말 힘들구나! 하지만 너무 무리하지 않아도 괜찮아!',
    );
    await era.printAndWait(
      `귀여운 미소와 허물없는 걱정을 담아, 벚꽃빛의 작은 ${urara.uma_sex_title}이(가) 스스럼없이 ${
        you.name
      }에게 기대 왔다.`,
    );
    await era.printAndWait(
      `그제야 ${you.name}은(는) 깨달았다. 자신을 도와준 ${urara.uma_sex_title}의 이름조차 아직 모른다는 것을.`,
    );
    era.println();

    era.printButton(`「고마워. 너는……?」`, 1);
    await era.input();

    await urara.say_and_wait(
      `우라라야! 트레이너가 쓰러질 것 같았는데 주변에 아무도 없어서 보건실까지 데려왔어!`,
    );
    await urara.say_and_wait(
      `기다리는 동안 옆에서 깜빡 잠들었지 뭐야. 에헤헤~`,
    );
    await era.printAndWait(
      `정말 정성껏 보살핌을 받은 모양이다. 점점 더 ${urara.sex}에게 미안해졌다.`,
    );
    await urara.say_and_wait(
      `아, 맞다! 트레이너 선생님! 다음에 우라라 선발 레이스 보러 와 줄래?`,
    );
    era.println();

    era.printButton(`「선발 레이스? 네가 나가는 거?」`, 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 조금 당황하며 우라라를 바라보았다. 각오가 부족하다거나 훈련을 게을리한다는 의심 때문은 아니었다. 다만……`,
    );
    await era.printAndWait(
      `한눈에 알 수 있었다. 하루 우라라라는 ${urara.uma_sex_title}에게는 반짝이는 자질이 있다. 하지만 지금의 ${
        urara.sex
      }은(는) 그리 빨리 달릴 수 있을 것 같지 않았다.`,
    );
    await era.printAndWait(`적어도 지금은 기대한 결과를 얻지 못할 것이다.`);
    await urara.say_and_wait(
      `응! 1착 할 거야! 왠지 그럴 것 같거든! 그러니까……`,
    );
    await era.printAndWait(
      `작은 ${urara.uma_sex_title}은(는) 들뜬 채 무언가 말하려다 문득 벽시계를 보았다.`,
    );
    await urara.say_and_wait(
      `앗! 벌써 시간이 이렇게 됐네! 트레이너도 몸조심해! 그럼 또 봐!`,
    );
    await era.printAndWait(
      `갑자기 시간을 알아차린 탓에 우라라와의 대화는 어정쩡하게 끊어졌다.`,
    );
    await era.printAndWait(
      `느낌만으로 정해지는 일이 아니야——${you.name}은(는) 그렇게 말하고 싶었다. 하지만 ${urara.sex}의 달리기를 보고 싶다는 마음이 가슴속에서 싹터, 입을 열지 못했다.`,
    );
    await era.printAndWait(
      `다음에는 정말 보러 가는 게 좋을지도 모르겠다. 통통 뛰듯 보건실을 나서는 우라라를 배웅한 뒤, ${you.name}은(는) 다시 눈을 감았다.`,
    );
    await era.printAndWait(`역시 아직 피곤하다.`);
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      `끝까지 지켜보고 싶은 것인지, 스스로도 깨닫지 못한 다른 이유 때문인지.${callname}（${you.name})은(는) 결국 훈련장으로 발걸음을 옮겼다.`,
    );
    era.drawLine();
    await you.say_as_passer_by_and_wait(
      '트레이너 A',
      '저 애는 사람을 끌어당기는 힘은 있지만, 역시……',
    );
    await you.say_as_passer_by_and_wait(
      '트레이너 B',
      `그러게. 저런 애를 키우려면 얼마나 힘들지 상상이 가네.${urara.sex}은(는) 여기에 안 맞는 것 아닐까.`,
    );
    await you.say_as_passer_by_and_wait(
      '트레이너 C',
      '분위기는 좋지. 하지만 그것만으로는 의미 없잖아.',
    );
    await era.printAndWait(
      `주변의 수군거림에 이끌리듯, ${you.name}은(는) 코스로 눈을 돌렸다. 아니나 다를까, ${you.name}의 직감이 맞았다.`,
    );
    await era.printAndWait(
      `우라라의 레이스는 이미 시작되어 있었다. 가장 기본적인 선발 레이스에서조차 ${urara.sex}은(는) 맨 뒤로 처져 있었다.`,
    );
    await era.printAndWait(
      `주변 트레이너들이 ${
        urara.sex
      }에게 오래 시선을 둘 리 없었다. 어쩌다 다시 바라보더라도 곧 다른 ${urara.uma_sex_title}에게 눈길을 돌렸다.`,
    );
    await era.printAndWait(
      `잠깐만 관심을 둘 생각이었던 ${you.name}만이 지금 ${urara.sex}의 모습에 빠져들고 있었다.`,
    );
    await era.printAndWait(
      `끝까지 달리기를 포기하지 않는 그 뒷모습을 보며, 희미한 두근거림이 ${you.name}의 가슴에 모여들기 시작했다……`,
    );
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      `자, 지금의 ${callname}, 혹은 지금의 ${you.name}은(는)……?`,
    );
    era.printButton(
      `「아직 잘 모르겠지만, 의외로 계속 보고 싶어.」(영입을 시도한다)`,
      1,
    );
    era.printButton(
      `「${urara.sex}은(는) 좋은 애야. 하지만 아직 너무 약하고 재능도 없어 보여. 더 잘 맞는 사람이 있을지도 몰라.」(영입을 포기한다)`,
      2,
    );
    ret.push((ret['rec'] = await era.input()));
    if (ret['rec'] === 1) {
      era.drawLine();
      await era.printAndWait(
        `가슴의 두근거림을 따라, ${you.name}은(는) 그 작은 모습을 계속 지켜보기로 했다.`,
      );

      await era.printAndWait(
        `
맨 뒤에서도 하루 우라라는 온 힘을 다해 달리고 있었다. 이를 악문 얼굴인데도, 읽히는 것은 즐거움뿐이었다.`,
      );
      await era.printAndWait(
        `${
          urara.sex
        }은(는) 앞의 누군가를 쫓는 것도, 누군가를 추월하려 안간힘을 쓰는 것도 아니었다. 『하루 우라라』라는 ${urara.uma_sex_title}은(는) 그저 전력으로 달리는 것을 즐기고 있었다. 그뿐이었다.`,
      );
      await era.printAndWait(
        `가슴이 두근거리는 이유가 점점 분명해졌다. 여전히 맨 뒤에 있는데도, ${urara.sex}에게 소리쳐 응원하고 싶은 마음이 ${you.name}의 안을 가득 채웠다.`,
      );
      await era.printAndWait(
        `언제 입 밖으로 나왔는지도 모를 응원과 함께, 벅찬 마음이 생각보다 먼저 행동이 되어 현실로 나타났다.`,
      );
      await era.printAndWait(
        `하지만 이건 하루에도 몇 번씩 열리는 평범한 선발 레이스다. 그런 레이스의 꼴찌를 향해 목이 쉬도록 응원하는 일은 이해하기 어려웠다.`,
      );
      await era.printAndWait(
        `그래도 그런 평범한 생각은 ${you.name}을(를) 막지 못했다. 적어도 지금의 ${you.name}은(는) 신경 쓰지 않았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 이상하게 여겨지고 깔보일 각오도 했다. 닿지 않는 마지막 거리를 오를 때 곁에서 받던 시선과 마찬가지로.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 놀랐다.${
          you.name
        }의 목소리를 따라 더 많은 ${urara.uma_sex_title}들이 응원하기 시작했고, 트레이너들까지 그 모습을 향해 성원을 보내기 시작한 것이다.`,
      );
      await era.printAndWait(
        `작은 파문이 퍼지고, 응원 속에서 마지막 거리가 줄어들었다. 그 계기를 만든 ${you.name}은(는) 응원의 물결 한가운데서 가슴이 뭉클해졌다——`,
      );
      await era.printAndWait(
        `전력을 다하는 벚꽃빛 등 뒤에는, 직업적 적성을 따라 선택한 「${you.name}」뿐 아니라 열정과 용기로 트레이너가 된 「${you.name}」도 있었다.`,
      );
      await era.printAndWait(
        `처음의 자신은 돈이나 명성, 혹은 강한 ${urara.uma_sex_title}을(를) 키웠다는 실적만을 위해 이곳에 왔던가.`,
      );
      await era.printAndWait(`그것만은 아니었을 것이다.`);
      era.drawLine();

      await inner_urara.say_as_unknown_and_wait(
        `몽상가의 탁상공론처럼 들리겠지만……`,
      );
      await inner_urara.say_as_unknown_and_wait(`……`);
      await inner_urara.say_as_unknown_and_wait(
        `……결과만으로는 꿈도 열정도 잴 수 없다.`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `실적이 없으면 뒤처질지도 모른다. 결과가 모든 것을 대변하는지도 모른다——`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `그럼에도 지금 이 순간, 당신은 『무심코』 떠올리고 말았다. 자신이 결과만을 위해 온 것은 아니라는 사실을. 잃더라도 두려워해서는 안 된다는 것을.`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `강모래에 묻힌 작은 금 조각은 별 가치가 없을지도 모른다. 그래도 누군가 주워 올리면 반짝반짝 빛난다.`,
      );
      era.drawLine();

      await era.printAndWait(
        `달리기를 마친 출전자들이 코스를 나오자, 선두로 달린 ${urara.uma_sex_title}을(를) 영입하려고 동료들은 곧바로 흩어졌다.`,
      );
      await era.printAndWait(
        `모여 있던 ${urara.uma_sex_title}들도 다음 레이스——혹은 자기 차례——를 준비하러 달려갔다. 남은 것은 아직 떠나지 않은 ${
          you.name
        }와(과), 그 앞에 선 우라라뿐이었다.`,
      );
      await era.printAndWait(
        `골인 직전 처음 들린 응원으로 ${
          you.name
        }을(를) 알아본 작은 ${urara.uma_sex_title}이(가) 티 없이 맑은 미소로 손을 흔들며 이쪽으로 달려왔다.`,
      );
      await era.printAndWait(
        `늘 보던 맑은 미소. 이른 봄의 아침 햇살이 이곳을 비추는 듯했다.`,
      );
      await urara.say_and_wait(
        `앗! 저번에 만난 트레이너네! 정말 보러 와 줬구나!`,
      );
      await era.printAndWait(
        `${
          you.name
        }의 곁에 다가온 작은 ${urara.uma_sex_title}은(는) 기뻐하면서도 조금 놀란 듯했다.`,
      );
      await urara.say_and_wait(
        `에헤헤~ 또 졌네! 그래도 끝까지 달렸어. 달리는 건 정말 재밌어! 그러니까 트레이너, 다음에도……`,
      );
      await era.printAndWait(
        `조금 쑥스러운 듯 말하는 우라라의 이야기를 들으며, ${you.name}은(는) 결심했다.`,
      );

      era.printButton(`「우라라, 들어 봐.」`, 1);
      await era.input();

      await era.printAndWait(
        `활짝 핀 벚꽃 같은 눈동자와 마주한 채 마음의 준비를 마친 ${you.name}은(는) 먼저 ${urara.sex}에게 한 걸음 다가갔다.`,
      );
      await you.say_and_wait(
        `어려울지도 모른다. 하지만 지금의 자신이라면 ${urara.sex}의 순수한 기대에 보답할 수 있을 것이다——`,
        true,
      );

      await inner_urara.say_as_unknown_and_wait(
        `예전에는 품지 못했을 마음을 담아, 이제 신념을 품은 ${callname}(당신)은 우라라에게 제안했다.`,
      );
      era.printButton(`「다음엔 이길 수 있도록 함께 트레이닝하자.」`, 1);
      era.printButton(
        `「네가 달리는 모습을 더 보고 싶어. 그러니까……내 담당이 되어 줄래?」`,
        2,
      );
      ret.push((ret['reward'] = await era.input()));

      await era.printAndWait(
        `${
          you.name
        }의 제안을 들은 작은 ${urara.uma_sex_title}은(는) 촉촉해진 눈을 크게 떴다. 벚꽃빛 눈동자가 갑작스러운 말에 살짝 떨렸다.`,
      );
      await era.printAndWait(
        `이윽고 얼굴에 순수한 수줍음이 조금 떠올랐지만, 우라라는 분명하게 ${you.name}의 바람에 답했다.`,
      );
      await urara.say_and_wait(
        `지금까지 혼자 트레이닝해서 어떻게 해야 할지 잘 모르겠어!`,
      );
      await urara.say_and_wait(
        `그래도 트레이너랑 함께라면 더 빨리 달릴 수 있겠지! 그러니까……`,
      );
      await era.printAndWait(
        `${
          you.name
        }을(를) 따라 우라라도 한 걸음 앞으로 나왔다. 익숙하고 순수한 미소를 지은 채, 작은 ${urara.uma_sex_title}은(는) ${
          you.name
        }의 두 손을 잡았다.`,
      );
      await urara.say_and_wait(`그러니까 기뻐! 앞으로 같이 힘내자, 트레이너!`);
      await era.printAndWait(
        `타오르기 시작한 작은 불씨는 그리 쉽게 꺼지지 않는다. 스스로를 똑바로 마주할 수 있다면, 달려갈 길은 앞으로도 이어질 수 있다.`,
      );
      await era.printAndWait(
        `우라라의 환한 미소를 바라보며, ${you.name}은(는) 마음속으로 다시 한번 결심을 굳혔다.`,
      );
      await era.printAndWait(
        `결과가 어떻든, ${you.name}은(는) ${urara.sex}의 마지막까지 함께하며, ${urara.sex}이(가) 달려갈 미래를 지켜볼 것이다.`,
      );

      era.printButton(`「그러니 멈추지 마……」`, 1);
      await era.input();

      await era.printAndWait(
        `그리고 우라라가 놀라 소리치는 가운데, 가슴속의 또 다른 턱을 막 넘어선 ${you.name}은(는) 또 쓰러졌다——`,
      );
      await era.printAndWait(
        `너무 긴장을 푼 나머지 갑자기 다리에 힘이 빠진 ${you.name}은(는) 『멈출 수 없는』 자세 그대로 안심하며 바닥으로 쓰러졌다.`,
      );
      await era.printAndWait(
        `눈을 뜨니 다시 우라라와 나란히 누워 있었다——그것은 또 다른 이야기다.`,
      );
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 트레이너가 되었다!',
      ]);
    } else {
      await era.printAndWait(
        `${you.name}은(는) 가슴의 희미한 두근거림을 떨쳐 내고 훈련장을 떠났다.`,
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        `그렇게 ${callname}은(는) 돌아보지도 않고 훈련장을 나섰다——`,
      );
      await inner_urara.say_as_unknown_and_wait(`……하아……`);
      await inner_urara.say_as_unknown_and_wait(
        `이번의 너는 변덕이었던 모양이네. 그렇다면 이야기도 여기서 대충 덮어 두자.`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `하지만 이곳은 언제든 만날 자리를 비워 둘 거야. 그러니까……`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `다음에 그 벚꽃빛에 조금이라도 마음이 움직인다면, 다시 한번 시도해 봐.`,
      );
    }
    return ret;
  },
};
