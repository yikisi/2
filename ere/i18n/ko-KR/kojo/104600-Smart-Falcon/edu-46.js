/**
 * @file スマートファルコン - 育成
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} train トレーニングの基礎能力（i18n 済み）
   */
  get_ts_content(falcon, train) {
    era.print([
      falcon.get_colored_name(),
      '의 ',
      train,
      ' 트레이닝이 무사히 끝났다.',
    ]);
  },
  ts_add: (() => {
    const title = '추가 자율 트레이닝';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`예정된 메뉴를 모두 마친 뒤`);
      await falcon.say_and_wait(`${callname}! 반짝이는 팔코, 봤어?`);
      await era.printAndWait(
        `더트에서 땀을 흘려 흙투성이가 된 ${falcon.name}의 눈만 반짝반짝 빛났다.`,
      );
      await you.say_and_wait(`예정대로 전부 해냈네. 수고했어, 팔코.`);
      await falcon.say_and_wait(`${callname}도 팔코가 빛난다고 생각해? 야호⭐`);
      await era.printAndWait(
        `${you.name}에게서 깨끗한 수건을 받아 얼굴의 진흙을 닦고는 기록을 정리하는 ${you.name}에게 천천히 다가갔다.`,
      );
      await falcon.say_and_wait(`음, 있잖아, ${callname}、`);
      await era.printAndWait(
        `산들바람이 길가의 풀을 흔들고 ${falcon.name}의 표정은 석양에 가려졌다.`,
      );
      await falcon.say_and_wait(
        `조금만 더 연습해도 돼? 팔코는 아직 이루고 싶은 목표가 있어!`,
      );
      await falcon.say_and_wait(
        `게다가 ${falcon.uma_sex_title} 아이돌이라면 목표는 조~금 높아도 되잖아?`,
      );
      await falcon.say_and_wait(`그럼 ${callname}은(는) 어떻게 생각해?`);
      era.printButton(`그렇다면 `, 1);
      await era.input();
      await era.printAndWait(
        `지금 팔코는 컨디션이 좋아 추가 트레이닝도 할 수 있을 것 같다. 하지만 운동량을 갑자기 늘리면 다음 날 트레이닝에 지장이 생기지 않을까.`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `길가의 작은 풀조차 튼튼하게 자라기를 바라는 건가.`,
      );
      era.printButton(
        `「그럼 힘내, 미래의 ${falcon.uma_sex_title} 아이돌」`,
        1,
      );
      era.printButton('「……오늘 트레이닝은 여기까지야」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(
          `응! 추가 트레이닝도 잘 부탁해, ${callname}！`,
        );
        era.printButton(
          `팔코가 톱 아이돌을 향해 한 걸음씩 나아가는 모습을 볼 수 있어 나도 기뻐.`,
          1,
        );
        await era.input();
        await you.say_and_wait(`그럼 다음은 `);
        await era.printAndWait(
          `통금 직전까지 트레이닝한 뒤 ${callname}은(는) 더는 달릴 수 없게 된 팔코를 안아 기숙사 앞까지 데려다주었다.`,
        );
      } else {
        await falcon.say_and_wait(`하지만……`);
        await you.say_and_wait(
          `${falcon.uma_sex_title} 아이돌의 길은 단숨에 갈 수 없어. 과하면 오히려 역효과야!`,
        );
        await falcon.say_and_wait('응?');
        await you.say_and_wait(
          `과도하게 트레이닝하면 피로 때문에 자세가 흐트러져 다리를 다치거나 골절될 수도 있어.`,
        );
        await you.say_and_wait(
          `그러니 팔코의 트레이너로서 그런 위험을 감수할 수는 없어.`,
        );
        await falcon.say_and_wait(
          `팔코가 바보였네. 이렇게 간단한 걸 생각 못 했다니.`,
        );
        await era.printAndWait(
          `${callname}을(를) 똑바로 보지 못하는 팔코를 보며 ${callname}은(는) 한숨을 내쉬고 ${falcon.sex}의 머리를 쓰다듬었다.`,
        );
        await you.say_and_wait(`이제 트레이너실에서 조금 쉬자.`);
        await falcon.say_and_wait(`응!`);
        await era.printAndWait(
          `그 뒤 ${you.name}은(는) 트레이너실에서 팔코의 다리를 마사지하며 요즘 유행에 관해 이야기했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '몸을 소중히!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`……${callname}`);
      await you.say_and_wait(`팔코……`);
      await era.printAndWait(
        `교의「당신이 ${falcon.sex}의 트레이너입니까? 왜 ${falcon.sex}가 이렇게 지쳤는데도 위험을 감수한 겁니까?」`,
      );
      await era.printAndWait(
        `할 말이 없어 ${you.name}은(는) 말없이 ${falcon.sex}의 질책을 들을 수밖에 없었다.`,
      );
      await falcon.say_and_wait(`아니야, 팔코가 먼저 부탁했어.`);
      await era.printAndWait(
        `교의「부상으로 후유증이 남을 수도 있다는 걸 모르십니까?」`,
      );
      await era.printAndWait(
        `트레이너 수첩에도 평소 트레이닝 중 입은 부상이 후유증으로 이어져 은퇴한 사례가 실려 있다.`,
      );
      await era.printAndWait(`그런데도.`);
      await you.say_and_wait(`죄송합니다. 다음부터 주의하겠습니다.`);
      await era.printAndWait(`교의「환자의 휴식을 방해하지 마세요」`);
      await era.printAndWait(
        `교의는 한숨을 내쉬며 문을 닫았다. 보건실에서 말없이 두 사람이 시선을 마주했다.`,
      );
      era.printButton('「괜찮아. 팔코는 이렇게 푹 쉬어」', 1);
      era.printButton('「……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`……응. 팔코, 금방 나을게.`);
        await falcon.say_and_wait(
          `팔코도 가끔 너무 서두르니까 전부 ${callname} 탓은 아니야.`,
        );
        era.printButton('「고마워, 팔코」', 1);
        await era.input();
        await falcon.say_and_wait(
          `응, ${callname}. 트레이너실에 있는 잡지 좀 가져다줄래?`,
        );
        await you.say_and_wait(`알았어. 팔코도 푹 쉬어.`);
        await falcon.say_and_wait(`응.`);
        await era.printAndWait(
          `보건실 문을 조심스레 닫자 팔코는 벌써 잠든 듯했다.`,
        );
      } else if (fail_again) {
        await falcon.say_and_wait(`${callname}。`);
        await era.printAndWait(`팔코가 ${callname}보다 먼저 침묵을 깼다.`);
        await falcon.say_and_wait(`손잡아 줄래?`);
        await era.printAndWait(
          `팔코의 시선이 천장에서 천천히 창밖으로 향했다.`,
        );
        await falcon.say_and_wait(`친구들과 헤어질 때도 이런 석양이었어.`);
        await falcon.say_and_wait('아파!');
        await you.say_and_wait(`팔코!`);
        await falcon.say_and_wait(`${callname}, 조금만 더 가까이 와 줄래?`);
        await falcon.say_and_wait(
          `이미 이렇게 많은 친구와 헤어졌는데 ${callname}까지 잃고 싶지 않아.`,
        );
        await era.printAndWait(
          `흐느끼는 팔코를 꼭 끌어안고 ${you.name}은(는) 거대한 금빛 덩어리가 지평선에 삼켜지는 모습을 보았다.`,
        );
        await era.printAndWait(`긴 밤이 온다.`);
      } else {
        await falcon.say_and_wait(`${callname}`);
        await era.printAndWait(`팔코가 ${callname}의 이름을 부른다.`);
        await era.printAndWait(
          `어째서인지 ${callname}는 ${falcon.sex}의 손을 꼭 잡았다.`,
        );
        await falcon.say_and_wait(`느껴져, ${callname}의 따뜻하고 커다란 손.`);
        await falcon.say_and_wait(`조금 편해졌어.`);
        await you.say_and_wait(`난 여기 있어. 어디에도 안 가!`);
        await falcon.say_and_wait(`${callname}, 다정하네.`);
        await era.printAndWait(`팔코는 커다란 손을 자신의 뺨에 가져다 댔다.`);
        await falcon.say_and_wait(`이대로 조금 쉬자.`);
        await era.printAndWait(`얼마 지나지 않아 팔코는 그대로 잠들었다.`);
        await era.printAndWait(
          `조심스레 문을 닫고 ${callname}은(는) 보건실을 나왔다.`,
        );
        await era.printAndWait(`팔코는 금세 기운을 되찾았다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '무리는 금물!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`${callname}……`);
      await era.printAndWait(`팔코는 트레이닝 중 부주의로 발목을 접질렸다.`);
      await falcon.say_and_wait(`미안, 팔코가 너무 피곤해서……`);
      await era.printAndWait(
        `잇따른 게릴라 라이브 때문에 팔코의 체력이 크게 소모되었는지도 모른다.`,
      );
      era.printButton('「당분간 길거리 라이브는 쉬자.」', 1);
      era.printButton('「길거리 라이브를 해 볼래?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`으으~ 팔코를 기다리는 팬들은 어떡하지?`);
        era.printButton(
          '「다친 발로 무리해서 공연하면 팬들도 걱정하지 않겠어?」',
          1,
        );
        await era.input();
        await falcon.say_and_wait('……그럼 조금만 쉴 수밖에 없겠네.');
        await falcon.say_and_wait(
          '그럼 기운 내게 트레이너실에서 아리마 기념 위닝 라이브를 보자!',
        );
        era.printButton('「다친 곳에 힘주지 마.」', 1);
        await era.input();
        await falcon.say_and_wait(`알았어! ${callname}, 안아 줄래?`);
        era.printButton(`「영차!」`, 1);
        await era.input();
        await falcon.say_and_wait(`와, 정말 안아 줬어.`, true);
        await falcon.say_and_wait(`좋은 냄새가 나고 엄청 가까워.`, true);
        await era.printAndWait(
          `다리를 쉬게 해야 하므로 컨디션을 되찾는 데는 시간이 걸린다.`,
        );
      } else {
        await era.printAndWait(`음악의 리듬을 타면 팔코도 빨리 나을지 모른다.`);
        await era.printAndWait('잠시 생각하다 시도해 보기로 했다.');
        era.printButton(
          '「기분이 좋아지면 상처도 빨리 나아. 그러니 라이브 하자!」',
          1,
        );
        await era.input();
        await falcon.say_and_wait(`어, 그런 방법도 있구나. 팔코, 힘낼게!`);
        if (fail_again) {
          await era.printAndWait(
            `평소처럼 초록 악마가 ${callname}에게 붙잡혀 있는 틈에 팔코의 정기 라이브가 시작되었다.`,
          );
          await falcon.say_and_wait(
            `여러분! 이쪽을 봐 주세요! 지금부터 팔코 라이브 시작할게요!`,
          );
          await era.printAndWait(
            `리듬에 맞춰 계속 춤추는 팔코는 다친 적도 없는 것 같았다.`,
          );
          await falcon.say_and_wait(`야호! 드디어 팬이 몇 명 와 줬어!`, true);
          await era.printAndWait(
            `생각에 잠긴 사이 반응이 한 박자 늦어 그만 넘어지고 말았다.`,
          );
          await falcon.say_and_wait(`으, 팔코는 괜찮아요⭐`);
          await era.printAndWait(
            `${callname}이(가) 타즈나에게서 겨우 벗어났을 때 팔코의 부상은 악화되어 있었다.`,
          );
        } else {
          await era.printAndWait(`라이브는 의외로 훌륭했다.`);
          await falcon.say_and_wait('여러분! 이쪽! 봐 주세요!');
          await era.printAndWait(
            `평지를 무대 삼아 휴대용 마이크를 꺼내면 팔코의 작은 무대가 완성된다.`,
          );
          await falcon.say_and_wait(`♪`);
          await era.printAndWait(
            `아무도 없던 곳에 드문드문 사람이 서더니 이윽고 인파가 모였다.`,
          );
          await era.printAndWait(`강변 잔디가 사람들로 가득 찼다.`);
          era.printButton('「효과가 굉장하네」', 1);
          await era.input();
          await era.printAndWait(
            `${callname}도 간간이 환호하는 사람들 틈에서 조용히 팔코의 라이브를 보았다.`,
          );
          await era.printAndWait(
            `라이브 작전은 대성공인 듯했고 ${falcon.name}의 상처도 빨리 나았다.`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '함성이 울려 퍼지는 더트 레이스';
    // アイドル活動には熱心だが、レースには自分を無理に乗せている。失敗した未来への恐れかもしれない
    // 主題：力を尽くして前へ、逆流を上る。ファル子とトレーナーが旅先で雑談して得た結論
    // 人は寂しがりだ。曲が終わり人が散ったあと、高揚はゆっくり退き、残るのは疲れだけ
    // 世間の楽観は、拾い集めた瓦を寄せて継ぎはぎした楽観にすぎず、大きな危険の前では四散する
    // つまり、楽観を装った悲観者にすぎない
    // だが悲観は、自分が積み上げた成果を見落とすことでもある。未来への視野を自分の五メートル以内の操作可能域へ戻せば、続ける力が得られる
    // 大きすぎる期待は足を止め、言い訳に埋もれ、良心は塵を被り、嘘の負債を重ねていく
    // トレーナーは約束どおり、ファル子をダートレースへ連れて行った
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname_37 エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (falcon, flash, you, callname_37) => {
      await era.printAndWait(`어느 더트 레이스`);
      era.println();
      await you.say_as_passer_by_and_wait(
        `중계`,
        `레이스는 마지막 국면! 이번과 사번이 무리를 벗어나 마지막 일대일 승부를 펼칩니다!`,
      );
      await you.say_as_passer_by_and_wait(`관중`, `우오오오오오오오!`);
      await era.printAndWait(
        `눈이 어깨에 살며시 내려앉아 물기가 된다. 관중석에서는 두꺼운 목도리와 코트로 몸을 감싼 관중들이 깃발과 테이프를 흔들고, 파도처럼 이어지는 응원이 겨울의 고요를 깨뜨리고 있었다.`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}`,
        `하아아아!`,
      );
      await era.printAndWait(
        `두 명의 ${falcon.uma_sex_title}는 전반 내내 선두권에 있었지만 무리와의 격차는 크지 않았다. 마지막 스퍼트에서 급가속하며 뒤로 멀찍이 따돌린다.`,
      );
      await era.printAndWait(`질서 있던 응원은 극적인 전개에 흔들려 뒤섞인다.`);
      await you.say_as_passer_by_and_wait(
        `중계`,
        `두 사람 모두 한 치도 양보하지 않습니다! 남은 거리 200미터! 100미터! 50미터! 승자는──`,
      );
      await era.printAndWait(`시간이 그 순간 얼어붙었다.`);
      await era.printAndWait(
        `뒤쫓는 ${falcon.uma_sex_title}와 앞서던 ${falcon.uma_sex_title}가 나란히 달리다 추월하려 한다──`,
      );
      await falcon.say_and_wait(
        `이게 트레이너인 ${you.adult_sex_title}이(가) 보여 주고 싶었던 광경이야?`,
      );
      await era.printAndWait(`멈췄던 시간이 다시 흐른다.`);
      await era.printAndWait(
        `승리한 ${falcon.uma_sex_title}는 모래투성이인 채 땀과 눈물이 뒤섞인 미소를 관객들에게 보냈다.

`,
      );
      await era.printAndWait(
        `경기장의 조명이 승자에게 집중되고 다른 ${falcon.uma_sex_title}들은 달을 에워싼 별들처럼 승리의 결실을 더욱 달콤하게 빛냈다.`,
      );
      await era.printAndWait(
        `벅찬 기쁨도, 패배의 분함도 목에서 짜내는 함성이 된다. 목이 쉬어도 저 하늘에 닿으려 한다.`,
      );
      await era.printAndWait(
        `추운 밤에도 이 열기는 그 자리에 있는 모두의 가슴에 분명히 전해졌다.`,
      );
      await falcon.say_and_wait(`와아──더트 레이스, 생각보다 훨씬 활기차네.`);
      await falcon.say_and_wait(
        `무대 한가운데 선 ${falcon.uma_sex_title}에게 관객들의 시선이 모두 모이고……`,
        true,
      );
      await falcon.say_and_wait(`팔코도 저기에 설 수 있다면.`, true);
      await falcon.say_and_wait(`팔코……팔코, 감동해서 울 것 같아!`);
      await era.printAndWait(
        `출구로 나온 ${falcon.name}가 속마음을 이야기했다.`,
      );
      await falcon.say_and_wait(
        `더트 레이스는 생각보다 훨씬 대단했어. 관객들의 열기도, ${falcon.uma_sex_title}들이 쏟은 사랑도 잔디를 택한 ${falcon.uma_sex_title}들과 똑같아!`,
      );
      await falcon.say_and_wait(`팔코, 정했어!`);
      await era.printAndWait(
        `열정에 불이 붙은 ${falcon.teen_sex_title}가 진지한 눈으로 ${you.name}을(를) 본다.`,
      );
      await falcon.say_and_wait(
        `팔코는 더트 레이스를 출발점으로 이 코스를 단숨에 달려 톱 ${falcon.uma_sex_title}돌이라는 목표까지 곧장 나아갈 거야!`,
      );
      await era.printAndWait(
        `소란에 주변 사람들이 힐끗힐끗 바라본다.${falcon.name}의 더트 아이돌을 향한 길은 이제 막 시작되었다.`,
      );
      era.drawLine();
      await falcon.say_and_wait(`통금 시간이 다 됐네! 그럼 내일 봐⭐`);
      await era.printAndWait(
        `${falcon.name}를 태운 전철을 배웅하고 문득 낯익은 모습을 발견했다.`,
      );
      await you.say_and_wait(
        `에이신 플래시……플래시 씨군요. 오늘 밤은 바람도 없고 좋네요.`,
      );
      await era.printAndWait(
        `학생이 먼저 말을 걸기에는 부담스러울 테고, 상대를 알고 싶은 마음도 있어 ${you.name} 쪽에서 먼저 인사했다.`,
      );
      await flash.say_and_wait(`네, 안녕하세요, ${callname_37}。`);
      await you.say_and_wait(
        `${falcon.actual_name_with_title}가 돌아오기를 기다리셨나요? 안심하세요. 벌써 기숙사로 무사히 돌아갔습니다.`,
      );
      await you.say_and_wait(
        `오는 길에 팔콘이 시간표대로 움직이는 룸메이트가 있다고 했어요. 그때부터 기대했는데, 실제로 만나니 들은 것보다 더 든든하네요.`,
      );
      await era.printAndWait(
        `오는 길에 ${falcon.name}가 시간을 잘 지키는 룸메이트 이야기를 했다. 좋은 관계를 맺어 두는 것은 중요하다.`,
      );
      await flash.say_and_wait(
        `후후, 과찬이십니다. 일정을 차질 없이 진행하기 위해 필요한 일을 할 뿐입니다. 대단한 일은 아닙니다.`,
      );
      await flash.say_and_wait(
        `다만 팔콘 씨 이야기가 나와서 말씀드리자면, 공교롭게도 요즘 ${falcon.sex}가 당신 이야기를 자주 했습니다.`,
      );
      await era.printAndWait(
        `에이신 플래시는 살짝 웃으며 화제를 ${you.name} 쪽으로 돌렸다.`,
      );
      await you.say_and_wait(
        `팔콘${falcon.adult_sex_title}에게 그런 말을 들었다니 영광이네요.`,
      );
      await you.say_and_wait(`그렇다면 앞으로의 세 해도 기대가 됩니다.`);
      await flash.say_and_wait(`세 해, 말입니까……`);
      await era.printAndWait(
        `${you.name}이(가) 그 말을 꺼내자 에이신 플래시는 잠시 침묵했다.`,
      );
      await flash.say_and_wait(
        `${callname_37}. 지금 여기서 여쭙는 것은 실례이며 갑작스럽겠지만 한 가지만 묻겠습니다.`,
      );
      await flash.say_and_wait(
        `담당 트레이너로서 각오는 되어 있으십니까? 팔콘 씨와 ${falcon.sex}일심동체가 되어 책임을 짊어질 각오 말입니다.`,
      );
      await era.printAndWait(`드디어 나왔다, 이 질문!`);
      await era.printAndWait(`예상대로 플래시는 이 우정을 소중히 여기고 있다.`);
      await era.printAndWait(
        `${falcon.sex}의 시험을 통과하려면 이쪽도 똑같이 성의를 보여야 한다.`,
      );
      era.printButton(
        `「원예에 마음을 빼앗긴 정원사처럼 심은 씨앗을 소중히 키우고, 축복과 희망을 담아 ${falcon.sex}가 꽃피기를 빌겠습니다.」`,
        1,
      );
      await era.input();
      await flash.say_and_wait(
        `상당히 감성적인 답변이시군요. 그렇다면 안심했습니다.`,
      );
      await era.printAndWait(
        `에이신 플래시는 ${you.name}에게 살짝 고개 숙여 감사를 표했다.`,
      );
      await flash.say_and_wait(
        `팔콘 씨${falcon.sex}를 잘 부탁드립니다.${falcon.sex}의 친구로서 필요하시다면 저도 힘을 보태겠습니다.`,
      );
      await flash.say_and_wait(`。`);
      await era.printAndWait(`그렇다면.`);
    };
    f.title = title;
    return f;
  })(),
  next_beginning: (() => {
    const title = 'First! 아이돌의 첫걸음';
    /**
     * 震える両手 イメージ 夢の中の物語 人物 交渉 細かな仕草 顔 空の変化 色彩 草原
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('트레이닝장');
      era.printButton(`버텨! 마지막 한 바퀴!`, 1);
      await era.input();
      await falcon.say_and_wait(`……하아아아!`);
      await era.printAndWait(
        `${falcon.name}는 몸을 앞으로 기울여 지면의 저항에 맞섰다. 발밑의 대지가 둔한 진동을 전한다.`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `이를 악물고 속도를 유지한 ${falcon.name}가 더트의 선명한 흰 선을 달려 넘었다.`,
      );
      await you.say_and_wait(`수고했어!`);
      await era.printAndWait(
        `${you.name}은(는) 준비한 수건을 ${falcon.name}에게 건네고 ${falcon.sex}는 이마의 땀을 꼼꼼히 닦았다.`,
      );
      await era.printAndWait(
        `모래와 땀이 뒤섞여 ${falcon.sex}의 체육복에 빽빽이 달라붙어 있었다.`,
      );
      await era.printAndWait(
        `격한 운동 직후 갑자기 앉으면 몸에 부담이 간다.${you.name}와(과) ${falcon.name}는 트레이닝장을 천천히 돌며 잡담했다.`,
      );
      await falcon.say_and_wait(`${callname}⭐ 이번엔 전보다 좋아졌어?`);
      await era.printAndWait(
        `${you.name}은(는) 타이머의 기록을 확인하고 마지막 스퍼트 때 남은 깊은 흔적을 보며 작게 고개를 끄덕였다. 긍정적인 대답에 ${falcon.teen_sex_title}는 흥분을 감추지 못하고 ${callname}의 앞을 걸었다.`,
      );
      await falcon.say_and_wait(
        `야호⭐ 이걸로 ${falcon.uma_sex_title} 아이돌의 길을 나아갈 수 있어!`,
      );
      await you.say_and_wait(`${falcon.uma_sex_title} 아이돌?`);
      await era.printAndWait(
        `${falcon.name}는 전에도 ${falcon.uma_sex_title} 아이돌이라는 말을 했다. 하지만 그것이 무엇인지 아직 확실히 알지 못한다.`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title} 아이돌은 팔코가 만든 말이야. 반짝반짝 빛나고 친근한 아이돌로, 팬들과 함께 성장하고 지켜보며 사랑과 희망을 주고받는 존재!`,
      );
      await you.say_and_wait(`개인의 매력을 내세우는 아이돌 연예인 같은 건가?`);
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌이라는 개념은 연예계의 신인 아이돌에 가깝다.`,
      );
      await you.say_and_wait(
        `${falcon.uma_sex_title} 아이돌만의 특징은 뭐야?`,
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 생수를 ${falcon.sex}에게 건넸다.`,
      );
      await you.say_and_wait(`이 개념은 먼저 수첩에 적어 두자.`, true);
      await falcon.say_and_wait(
        `관중석의 모두가 팔코가 빛나는 모습을 계속 봐 줬으면 해!`,
      );
      await era.printAndWait(`도주 전략은 ${falcon.name}의 바람에 딱 맞는다.`);
      await you.say_and_wait(`각질 중에서는 도주가 가장 잘 맞겠지.`, true);
      await you.say_and_wait(`확실히 팔코답네.`);
      await era.printAndWait(
        `레이스에서도 무대에서도 누구보다 빛나는 존재.${falcon.sex}는 그쪽을 선택한 것이다.`,
      );
      await falcon.say_and_wait(
        `팔코는 반짝반짝 빛나는 ${falcon.uma_sex_title} 아이돌이니까⭐`,
      );
      await falcon.say_and_wait(
        `예전부터 지금도, 앞으로도 늘 빛나는 ${falcon.uma_sex_title} 아이돌!`,
      );
      await you.say_and_wait(
        `${falcon.name}가 도달할 곳은 어떤 풍경일까? 나도 기대되기 시작했어.`,
      );
      await falcon.say_and_wait(`분명 최고의 풍경일 거야!`);
      await falcon.say_and_wait(
        `그래.${falcon.name}가 ${falcon.uma_sex_title} 아이돌로 있는 모습을 생각하기만 해도 팔코는 이~만큼 힘이 솟아!`,
      );
      await falcon.say_and_wait(`${callname}, 다음 목표는!`);
      await era.printAndWait(
        `${falcon.name}는 기운을 되찾은 모양이다.${you.name}은(는) 무리하는 건 아닌지 조금 걱정된다.`,
      );
      await you.say_and_wait(`확실히 팔코답네.`, true);
      era.printButton(`그럼 한 번 더 재 보자.`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}! 팔코, 준비됐어!`);
      await you.say_and_wait(`준비!`);
      await era.printAndWait(
        `${falcon.name}의 몸에 힘이 들어가고 시선은 앞의 코스를 똑바로 향했다.`,
      );
      await era.printAndWait(
        `출발 신호와 함께 일어난 흙먼지가 더트 아이돌이 내디딘 첫걸음을 지켜보았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_9: (() => {
    const title = '앞으로도 잘 부탁해⭐';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(`2월은 일 년 중 가장 춥다.`);
      await era.printAndWait(
        `도시의 하늘을 두꺼운 구름이 뒤덮고 갑작스러운 폭설이 거리를 하얗게 칠했다.`,
      );
      await era.printAndWait(
        `추운 날은 초조함도 불러온다. 쉬는 날에도 ${you.name}은(는) 일찍 트레이너실로 왔다.`,
      );
      await era.printAndWait(
        `${falcon.name}의 트레이닝은 궤도에 올랐다. 다음 데뷔전도 문제없을 것이다.`,
      );
      await era.printAndWait(
        `마음에 걸리는 것은 ${falcon.name}의 무거운 발소리다.`,
      );
      await era.printAndWait(
        `그 덕분에 ${falcon.sex}를 위한 더트 스피드와 파워 훈련의 진도가 빠르다.`,
      );
      await era.printAndWait(
        `오랜 ${falcon.uma_sex_title} 아이돌 활동에도 기운이 넘치는 것은 아마 이 묵직함 덕분일 것이다.`,
      );
      await minoru.say_and_wait(`어머, 오늘은 일찍 오셨네요?`);
      await era.printAndWait(
        `생각에 잠기면 시간은 금세 흐른다. 타즈나는 당연하다는 듯 트레센 교문에 나타나 미소 지으며 ${you.name}을(를) 보고 있었다.`,
      );
      era.printButton(
        `귀여운 ${falcon.uma_sex_title}들을 하루라도 빨리 데뷔시키고 싶어서 일찍 일어나 왔습니다. 그나저나 오늘도 아름다우시네요, 타즈나 씨.`,
        1,
      );
      await era.input();
      await minoru.say_and_wait(`후후, 참. 칭찬해도 아무것도 안 나와요.`);
      await era.printAndWait(
        `살짝 웃는 타즈나의 얼굴에는 동요가 없다. 어떤 의미에서 ${falcon.sex} 쪽이 이상적인 어른이다.`,
      );
      await era.printAndWait(`서로 인사하고 헤어지며 예의라는 의식이 끝났다.`);
      await era.printAndWait(
        `${you.name}이(가) 어깨의 눈을 털고 난방을 삼십 도로 맞췄을 때──`,
      );
      await falcon.say_and_wait(`실례할게⭐`);
      await era.printAndWait(`${falcon.name}가 트레이너실 문을 힘차게 열었다.`);
      era.printButton(`좋은 아침!`, 1);
      await era.input();
      await era.printAndWait(
        `입구에서 난 소리는 제쳐 두고, ${falcon.teen_sex_title}의 하얀 입김은 찬 공기 속으로 금세 사라진다.${falcon.name}의 열정만은 식지 않는다.`,
      );
      await falcon.say_and_wait(
        `${callname}, 좋은 아침! 오늘도 기운차 보이네!`,
      );
      await era.printAndWait(`곧 ${falcon.name}의 활기찬 대답이 돌아왔다.`);
      await era.printAndWait(
        `${falcon.name}의 미소에서 눈을 내리자 ${you.name}의 시선은 ${falcon.sex}가 든 작은 양동이와 빗자루에 모였다.`,
      );
      await falcon.say_and_wait(
        `늘 신세를 지고 있으니까 팔코는 오늘 봉사 활동을 할 거야!`,
      );
      await era.printAndWait(
        `${falcon.name}는 손에 든 양동이를 흔들었다. 물이 들어 있었다면 당장이라도 넘칠 듯했다.`,
      );
      await you.say_and_wait(`구체적으로 뭘 하는데?`);
      await falcon.say_and_wait(
        `음──다들 일어나기 전에 고가교 밑에서 잔디로 흘러온 쓰레기를 분리해서 버리러 갈 거야⭐`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌이란 무엇인가(철학).`,
      );
      await falcon.say_and_wait(`그러고 보니 ${callname}도 같이 갈래?`);
      era.printButton(`나도 돕고 싶어.`, 1);
      era.printButton(`가고 싶지만 아직 일이 남았어.`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`야호!`);
        await falcon.say_and_wait(`그럼 당장 출발!`);
        await era.printAndWait(
          `${you.name}이(가) 고개를 끄덕이자 ${falcon.name}의 미소가 더욱 밝아졌다.`,
        );
        era.drawLine();
        await falcon.say_and_wait(`놓치지 않을 거야⭐`);
        await era.printAndWait(
          `${falcon.name}은(는) 마지막 쓰레기를 모아 준비한 검은 봉투에 넣었다.`,
        );
        await falcon.say_and_wait(`이제 이것만 전부 버리면 끝!`);
        await falcon.say_and_wait(`${callname}, 수고했어!`);
        await era.printAndWait(
          `${falcon.sex}는 검은 봉투를 정성껏 예쁜 나비 매듭으로 묶었다.`,
        );
        await era.printAndWait(
          `평소에도 환경 보호를 이야기했지만 직접 쓰레기를 줍고 나서야 ${you.name}은(는) 깊이 이해했다.`,
        );
        await era.printAndWait(
          `팔코에게는 자신을 응원하는 팬들에게 나름대로 답하는 방법일 것이다.`,
        );
        await era.printAndWait(
          `……이런 데서 의외로 ${falcon.teen_sex_title}다운 고집이 드러나는구나.`,
        );
        await falcon.say_and_wait(
          `${callname}이(가) 없었으면 라이브 전에 끝내기는 팔코에게 조금 어려웠을 거야……`,
        );
        await falcon.say_and_wait(
          `팔코는 ${callname}에게 어떻게 고마움을 전해야 할지 모르겠어.`,
        );
        await era.printAndWait(
          `쓰레기는 대부분 ${falcon.name}가 처리했다. 도움이 됐다는 말은 겸손일 뿐이다.`,
        );
        era.print(`뭐라고 답할까.`);
        era.printButton(`팔코 라이브를 먼저 봐도 돼?`, 1);
        era.printButton(`다음 중간고사 전 과목 합격!`, 2);
        if ((await era.input()) === 1) {
          await falcon.say_and_wait(`응? 그걸로 돼? ${callname}의 부탁이라면.`);
          await you.say_and_wait(`팔코 1호팬의 부탁이야!`);
          await falcon.say_and_wait(`응? 1호팬……팔코, 좋은 생각이 났어!`);
          await era.printAndWait(
            `1호팬이라는 말이 영감을 자극했는지 ${falcon.name}의 꼬리가 곧게 섰다.`,
          );
          await falcon.say_and_wait(`음……이렇게……아니……이쪽이 더 좋겠다.`);
          await era.printAndWait(
            `${falcon.name}는 검은 봉투를 무대 뒤에 놓았다. 무대라고 해도 고가교 아래 다섯 제곱미터쯤 되는 빈터다. 그리고 교복 주머니에서 마이크를 꺼냈다.`,
          );
          await falcon.say_and_wait(
            `다음 곡은 팔코가 방금 떠올린 노래♪ 1호팬인 ${you.adult_sex_title}의 요청으로 만든 시험 버전이야♪`,
          );
          await falcon.say_and_wait(`그럼 셋, 둘, 하나!`);
          await era.printAndWait(
            `아직 남은 하얀 입김, 밝아 오는 하늘, 작은 빈터에서 라이브가 시작된다.`,
          );
        } else {
          await falcon.say_and_wait(`에에에? 그런 부탁이야?`);
          await you.say_and_wait(
            `모르는 건 나도 봐 줄게. 그러니까 팔코, 도망가면 안 돼.`,
          );
          await era.printAndWait(`${falcon.name}는 조금 곤란한 표정을 지었다.`);
          await falcon.say_and_wait(`그래도 팔코 힘낼게! 팔코! 힘내자!`);
          await era.printAndWait(
            `활기찬 목소리에 근처 공원의 새들이 놀라 나무 주위를 한참 맴돌다 둥지로 돌아갔다.`,
          );
          await era.printAndWait(
            `트레센으로 돌아가는 길, ${falcon.name}는 전보다 기분이 좋아 보였다.`,
          );
          await falcon.say_and_wait(`그러고 보니 ${callname}。`);
          await falcon.say_and_wait(`${callname}도 좋아하는 아이돌이 있어?`);
          await era.printAndWait(
            `왜 ${falcon.name}가 갑자기 그런 질문을 하는지 모르겠다.`,
          );
          await falcon.say_and_wait(`아, 대답 안 해도 돼. 아니, 대답하지 마.`);
          await era.printAndWait(
            `${you.name}이(가) 대답하려 하자 ${falcon.name}는 안절부절못했다.`,
          );
          await era.printAndWait(
            `${you.name}은(는) 하늘을 보았다. 남빛 하늘이 지평선의 금빛에 조금씩 자리를 내주고 있었다. 곧 다시 북적일 것이다.`,
          );
        }
      } else {
        await falcon.say_and_wait(`${callname}, 역시 바쁘구나.`);
        await falcon.say_and_wait(
          `팔코가 멋대로 부탁한 것뿐이야.${callname}는 괜찮아!`,
        );
        await era.printAndWait(
          `${falcon.name}는 조금 아쉬운 표정을 지었지만 곧 평소 모습으로 돌아왔다.`,
        );
        await you.say_and_wait(`조심해서 가!`);
        await falcon.say_and_wait(`응! 팔코가 ${callname} 몫까지 힘낼게!`);
        await era.printAndWait(
          `${you.name}은(는) ${falcon.name}의 귀가 움직이는 것을 보며 트레이너실 문을 조심스레 닫았다.`,
        );
        await era.printAndWait(
          `팔코가 애쓴 덕분에 강변에 떠 있던 쓰레기는 모두 사라졌다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_18: (() => {
    const title = '텅 빈 머릿속에 남은 단 하나의 마음';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`5월 중순의 어느 날.`);
      await era.printAndWait(
        `트레이닝 계획은 착실히 진행되었고 ${falcon.name}의 홍보 덕분에 강변의 길거리 라이브에도 열성팬이 몇 명 생겼다.`,
      );
      await era.printAndWait(
        `현실은 예상보다 밝다. 직접 해 봐야 답을 알 수 있는 일도 있다.`,
      );
      await era.printAndWait(
        `만족스럽게 한숨을 내쉰 뒤 ${you.name}은(는) 등에 땀이 밴 것을 깨달았다.`,
      );
      await era.printAndWait(`봄과 여름의 경계는 작년보다 확실히 덥다.`);
      await you.say_and_wait(
        `데뷔전도 가깝다. 이제 트레이닝의 성과를 시험할 차례다!`,
      );
      await falcon.say_and_wait(`${callname}, 큰일이야!`);
      await era.printAndWait(
        `그렇게 생각하던 ${you.name}은(는) 트레이너실로 뛰어든 그림자에 놀랐다.`,
      );
      await you.say_and_wait(`또 시험에서 낙제했어?`, true);
      await era.printAndWait(`뜻밖이기는 하지만 전혀 예상 못 한 일도 아니다.`);
      await falcon.say_and_wait(
        `그것도 중요하지만 팔코가 겪은 건 그게 아니야!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 그제야 알아차렸다.${falcon.teen_sex_title}는 어깨로 숨을 쉬고 있었고 땀이 이마에서 목덜미로 흘러내렸다.`,
      );
      await era.printAndWait(`여기까지 뛰어온 것이다.`);
      await you.say_and_wait(`무슨 일이야?`);
      await falcon.say_and_wait(
        `하아, 하아……있잖아, 팔코는 트레센 주변 사람들에게 ${falcon.uma_sex_title} 아이돌이라는 개념을 알리려고 직접 만든 포스터를 나눠 주고 있어. 작은 선물도 덤으로 주고.`,
      );
      await falcon.say_and_wait(
        `계속 싸게 팔아 주던 잡화점이 갑자기 이사했는데 새로 찾은 가게는 다 너무 비싸.`,
      );
      await falcon.say_and_wait(
        `그것뿐이면 어떻게든 버텼겠지만 최근에 다니던 잡화점도 원재료 가격이 올라서 값을 올린대……`,
      );
      await falcon.say_and_wait(`이대로라면 팔코는 대위기야!`);
      await era.printAndWait(
        `사정은 대략 알겠다. 안정적인 구매처가 갑자기 사라져 ${falcon.name}는 당황하고 있다.`,
      );
      await era.printAndWait(`잠시 생각한 뒤 ${you.name}은(는)──
`);
      era.printButton(`다른 가게도 찾아볼까?`, 1);
      era.printButton(`중요한 건 팔코의 아이돌로서의 마음이야!`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`${falcon.name}가 쌓아 온 인기를 생각하면.`);
        await you.say_and_wait(
          `${falcon.uma_sex_title} 아이돌로서 상점가에서 행사를 열어 활동비를 모으는 건 어때?`,
        );
        await you.say_and_wait(
          `팔코는 분위기 띄우는 걸 잘하잖아. 가게로 손님을 모으면서 인기도 꾸준히 쌓을 수 있어.`,
        );
        await you.say_and_wait(`가게에서 받은 돈으로 이 시기를 넘기자!`);
        await falcon.say_and_wait(`하지만 누구에게 부탁하면 돼?`);
        await era.printAndWait(`${falcon.name}가 쌓아 온 인기를 생각하면.`);
        await you.say_and_wait(`옆에서 나도 팔코를 도울게.`);
        await falcon.say_and_wait(`후우~ 살았다……다행이야.`);
        await era.printAndWait(
          `${falcon.name}는 신이 나서 ${you.name}의 손을 잡고 빙글빙글 돌기 시작했다.`,
        );
        await era.printAndWait(`그러고 보니──`);
        await era.printAndWait(
          `팬을 차별 없이 대하는 팔코와 담당 ${falcon.uma_sex_title}로서의 ${falcon.name}。`,
        );
        await era.printAndWait(`${falcon.name}에게는 어느 쪽이 더 중요할까.`);
        await era.printAndWait(
          `어지러울 만큼 충만한 기분 속에서 ${you.name}은(는) 그 질문을 어렴풋이 떠올렸다.`,
        );
        await you.say_and_wait(`……일단 눈앞의 일부터 해결하자.`, true);
        await era.printAndWait(
          `그 뒤 ${you.name}은(는) 여러 가게에서 아르바이트하는 ${falcon.uma_sex_title}들에게 홍보가 부족해 고민하는 주인들 이야기를 들었다.`,
        );
        await era.printAndWait(
          `그 결과 협업으로 구경꾼을 많이 모았고 정당한 보수와 보너스 외에도 ${falcon.name}는 우마스타에서 새 팬을 얻었다.`,
        );
      } else {
        await you.say_and_wait(`가장 중요한 건 팔코의 아이돌로서의 마음이야!`);
        await falcon.say_and_wait(`응?`);
        await you.say_and_wait(
          `외모와 격식을 중시하는 모델보다 풋풋하고 귀여우며 팬들과 더 가깝다는 점이 바로 ${falcon.uma_sex_title} 아이돌의 매력이야!`,
        );
        await era.printAndWait(
          `열이 오를수록 ${you.name}은(는) 책상을 세게 두드리다 반동에 손이 아파졌다.`,
        );
        await falcon.say_and_wait(
          `응? ${callname}이(가) 하려는 말은 팔코가 홍보에 너무 의존해서 ${falcon.uma_sex_title} 아이돌의 본질을 놓쳤다는 거야?`,
        );
        await you.say_and_wait(
          `맞아! ${falcon.uma_sex_title} 아이돌로 활약하는 ${falcon.name}를 모두에게 보여 주자!`,
        );
        await falcon.say_and_wait(
          `알았어! 팔코, ${falcon.uma_sex_title} 아이돌로서 힘낼게!`,
        );
        await era.printAndWait(`그러고 보니──`);
        await era.printAndWait(
          `팬을 차별 없이 대하는 팔코와 담당 ${falcon.uma_sex_title}로서의 ${falcon.name}。`,
        );
        await era.printAndWait(`${falcon.name}에게는 어느 쪽이 더 중요할까.`);
        await you.say_and_wait(`분하지만 팔코에게는 아마 `, true);
        await era.printAndWait(
          `그 생각은 곧 ${falcon.name}가 신나서 늘어놓은 수많은 제안에 휩쓸려 사라졌다.`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title} 아이돌의 마음을 깨달은 ${falcon.name}는 그 섬세함으로 많은 팬을 사로잡았다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = '라벤더';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`강변 풀밭.
`);
      await falcon.say_and_wait(
        `언제나 팔코를 응원해 주는 여러분! 팔코는 이제 드디어 `,
      );
      await era.printAndWait(
        `계획대로 착실히 트레이닝을 쌓아 온 ${falcon.name}는 이미 충분한 성과를 내고 있다.`,
      );
      await era.printAndWait(
        `다가오는 데뷔전을 위해 ${falcon.name}는 만반의 준비를 마쳤다.`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `평소처럼 ${falcon.name}와 나란히 트레센으로 돌아가는 길에 ${falcon.name}가 갑자기 ${you.name}을(를) 보았다.`,
      );
      await era.printAndWait(`레이스가 다가오니 불안한 것도 당연하다.`);
      await era.printAndWait(`그것도 아주 자연스러운 일이다.`);
      await falcon.say_and_wait(`그러고 보니 팔코의 첫 무대네.`);
      await era.printAndWait(
        `${falcon.name}는 ${falcon.uma_sex_title} 아이돌을 목표로 곧장 달려 나가고 있다.`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title} 아이돌의 길을 가기로 했을 때는 신나서 밤새 잠도 못 잤는데, 달력을 넘길 때마다 팔코는 지금 조금……`,
      );
      era.printButton(`데뷔전이라 무서워?`, 1);
      await era.input();
      await falcon.say_and_wait(`아니, 그냥 기분이……조금 복잡해.`);
      await era.printAndWait(
        `자기 꼬리를 쫓아 빙빙 돌던 새끼 고양이가 상자에 부딪혀 쿵 소리를 낸 것 같은.`,
      );
      era.printButton(`그렇구나.`, 1);
      await era.input();
      await falcon.say_and_wait(`그래도 팔코는 지금 기분 최고야!`);
      await falcon.say_and_wait(`아이돌이 되는 첫 무대라니 소설 주인공 같아!`);
      await falcon.say_and_wait(`이제 팔코가 빛날 차례야!`);
      await era.printAndWait(`${falcon.name}는 ${you.name}에게 미소 지었다.`);
      await falcon.say_and_wait(
        `……${callname}도 앞으로 계속 팔코 곁에서 응원해 줄 거지?`,
      );
      era.printButton(`물론이지.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `음──${callname}, 다른 ${falcon.uma_sex_title}에게도 그렇게 말해?`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 혼잣말을 못 들은 척했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '첫 오디션!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`강변 풀밭
`);
      await falcon.say_and_wait(
        `목표는! 톱 아이돌인 ${falcon.uma_sex_title} 아이돌──${falcon.name}, 지금 정식으로 데뷔합니다⭐`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코, 드디어 데뷔하는구나!`);
      await falcon.say_and_wait(
        `맞아요! 이날을 위해 팔코는 계속 노력했어요! 여러분도 조금만 참아 달라고 할까 했지만……`,
      );
      await falcon.say_and_wait(
        `팔코도 여러분처럼 설렘이 하늘까지 닿았거든요♪`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `그 기세로 계속 나아가!`);
      await falcon.say_and_wait(
        `팔코는 레이스 시작부터 끝까지 반짝일게요⭐……와아, 두근거려! 신기해, 심장이 계속 두근두근 대답해……`,
      );
      await falcon.say_and_wait(
        `약속이에요. 관중석에서 팔코의 무대를 지켜봐 주세요⭐`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await era.printAndWait(`
대기실
`);
      await falcon.say_and_wait(`리본……오케이! 등번호……이상 없음!`);
      await era.printAndWait(
        `전신 거울 앞에 선 ${falcon.name}는 몇 번이나 자신의 모습을 확인했다.`,
      );
      await falcon.say_and_wait(
        `늘 응원해 주는 모두를 위해……팔코, 반드시 이길 거야!`,
        true,
      );
      await falcon.say_and_wait(`팔코! 파이팅!`);
      await era.printAndWait(`${falcon.name}는 움켜쥔 주먹을 높이 들었다.`);
      era.printButton(`레이스장을 무대라고 생각하면 돼.`, 1);
      await era.input();
      await era.printAndWait(
        `옆에서 기다리는 ${you.name}은(는) 첫 데뷔전에 나서는 ${falcon.name}를 보고 있었다.`,
      );
      await you.say_and_wait(`팔코라면 분명 이길 수 있어!`);
      await falcon.say_and_wait(`${callname}도!`);
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 두 손이 미세하게 떨리는 것을 느꼈다.`,
      );
      await falcon.say_and_wait(
        `팬들은 어디에서 팔코를 기다릴까♪ 빛나는 팔코가 모두에게 승리를 전할게⭐`,
      );
      await era.printAndWait(
        `위로가 아니다. 그동안 쌓은 트레이닝의 성과에 대한 ${falcon.name}의 확신이다.`,
      );
      await falcon.say_and_wait(
        `${callname}은(는) 관중석에서 팔코의 멋진 모습 잘 봐 줘♪`,
      );
      await falcon.say_and_wait(
        `……그리고 팔코에게는 질 수 없는 이유가 하나 더 있어!`,
        true,
      );
      // トレーナーとは無関係。ただ恐れに耐えきれない結果
      await falcon.say_and_wait(
        `우울한 생각은 여기까지! 팔코의 톱 아이돌을 향한 길은 지금부터야!`,
        true,
      );
      await falcon.say_and_wait(
        `빛나는 ${falcon.uma_sex_title} 아이돌──${falcon.name}! 이제 관중석의 모두가 눈 깜빡일 틈도 없이 팔코만 보게 할 거야!`,
      );
      await era.printAndWait(`${falcon.name}는 레이스장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '데뷔전 이후·떠오르는 신성';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.say_as_passer_by_and_wait(`중계`, `승자는──${falcon.name}！`);
      await era.printAndWait(
        `${falcon.name}가 팬들에게 선언한 대로 레이스 시작부터 관중의 시선을 단단히 사로잡았다.`,
      );
      await era.printAndWait(
        `그대로 다른 ${falcon.uma_sex_title}들과 격차를 유지한 채 끝까지 달렸다.`,
      );
      await falcon.say_and_wait(
        `${callname}！ ${callname}! 팔코의 레이스 봤어?`,
      );
      era.printButton(`나도 모르게 넋 놓고 봤어!`, 1);
      await era.input();
      await falcon.say_and_wait(`정말? 야호⭐`);
      await era.printAndWait(
        `코스에서 내려온 ${falcon.name}는 조금 쉬더니 다시 기운을 되찾았다.`,
      );
      await era.printAndWait(
        `저린 다리 근육을 마사지하는 동안 ${you.name}의 얼굴에서 미소가 떠나지 않았다.`,
      );
      await falcon.say_and_wait(
        `──더는 안 되겠다고 생각했을 때 관중석의 응원이 들렸어. 그러자 어디선가 힘이 솟아서 그대로 골까지 단숨에!`,
      );
      await era.printAndWait(
        `코스에서 내려온 ${falcon.name}는 무대에 오르기 전 틈을 타 매일 하는 게릴라 라이브를 관중석에 홍보하려 했지만 결국 ${you.name}에게 제지당했다.`,
      );
      await falcon.say_and_wait(`팔코의 다음 무대도 기대해 줘!`);
      await era.printAndWait(
        `마지막 마사지가 끝나자 ${falcon.name}는 새 감각을 확인하듯 발끝으로 섰다.`,
      );
      era.printButton(`더트 아이돌의 기개를 제대로 보여 줘!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `이렇게 팔코의 홈에서 관객들의 마음을 전~부 빼앗을게♪ 팔코는 세상에서 가장 빛나는 ${falcon.uma_sex_title} 아이돌이니까⭐`,
      );
      era.drawLine({ content: 'ウィンナーズステージ' });
      await falcon.say_and_wait(`이게 위닝 라이브……?`, true);
      await era.printAndWait(
        `스태프의 안내에 따라 정해 둔 대형 그대로 승강기에 올랐다.`,
      );
      await era.printAndWait(
        `줄을 서 있을 때는 드문드문 목소리가 들렸지만 정해진 자리에 서자 가느다란 숨소리만 남았다.`,
      );
      await falcon.say_and_wait(`${falcon.name}의 꿈은 여기서 시작된다!`, true);
      await era.printAndWait(
        `크게 흔들린 뒤 ${falcon.name}는 아래로 잡아당기는 힘을 느꼈다. 이제 실전이다.`,
      );
      await era.printAndWait(
        `무섭지 않다고 속으로 되뇌어도 이마와 손바닥은 땀으로 젖어 있었다.`,
      );
      await era.printAndWait(
        `스포트라이트가 순위에 따라 무대를 비추고 시간은 ${falcon.teen_sex_title} 일행을 기다리며 서서히 멈춰 간다.`,
      );
      await era.printAndWait(
        `애타게 기다린 무대가 눈앞에 있다. 연습한 스텝이 머릿속을 몇 번이나 스쳐 가고 긴장으로 머리가 하얘지려 했다. 그래도 멈춘 시간은 다시 흐르기 시작했다. 지금이 나아갈 때다.`,
      );
      await era.printAndWait(
        `그렇게 ${falcon.name}는 첫 위닝 라이브를 마쳤다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = '계속되기를 바라는 일상';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(
        `${callname}, 팔코가 요즘 라이브 하기 좋은 곳을 찾았어. 같이 보러 가도 돼?`,
      );
      await era.printAndWait(
        `${you.name}은(는) 서류철에서 고개를 들었다가 ${falcon.name}와 눈이 마주쳤다.`,
      );
      await you.say_and_wait(`우왓.`);
      await era.printAndWait(
        `바짝 다가온 ${falcon.name}는 장난에 성공한 듯 웃었다.`,
      );
      await you.say_and_wait(`가까워!`, true);
      await era.printAndWait(
        `생각해 보면 ${falcon.sex}도 감수성이 풍부한 시기다. 이런 행동을 해도 이상하지 않다.`,
      );
      await you.say_and_wait(
        `팔코의 노력을 부정하는 건 아니지만 요즘 아이돌 활동이 조금 많지 않아?`,
      );
      await you.say_and_wait(
        `이상적인 미래를 향해 나아가는 건 옳아. 하지만 시험에서 떨어지면 그 길이 늦어져.`,
      );
      await falcon.say_and_wait(
        `히익!……그……팔코도 반성하고 있어. 아이돌 활동도 시간과 장소를 잘 생각하고 하니까.`,
      );
      await era.printAndWait(
        `${falcon.name}는 어딘가 딴생각을 하는 듯했다.${you.name}이(가) 일부러 헛기침하자 그제야 당황하며 설명했다.`,
      );
      await you.say_and_wait(`거짓말하는 사람은 눈을 못 마주친다던데.`);
      await era.printAndWait(
        `그 말을 듣고 황급히 ${you.name}의 눈을 보는 ${falcon.name}를 보고 ${you.name}은(는) 한 가지를 확신했다.`,
      );
      await you.say_and_wait(
        `역시……다음 중간고사 때 제대로 복습하겠다고 약속하면 팔코의 부탁도 들어줄게.`,
      );
      await falcon.say_and_wait(`에에에? ${callname}, 어떻게 알았어?`);
      await era.printAndWait(
        `${falcon.name}의 표정은 꾸며 낸 것 같지 않았지만 가슴 한구석이 조금 불안했다.`,
      );
      await you.say_and_wait(`이대로 ${falcon.name}는 괜찮을까.`, true);
      await era.printAndWait(`앞으로의 계획을 조금 고치는 게 좋을지도 모른다.`);
      await you.say_and_wait(`이 기간에는 게릴라 라이브를 조금 쉴까?`);
      await falcon.say_and_wait(`싫어!`);
      await era.printAndWait(`${falcon.name}의 반응은 예상보다 격했다.`);
      await falcon.say_and_wait(
        `아니야! 그런 뜻이 아니라! 팔코, 복습 제대로 할게! 그러니까 꼭 해야 하는 라이브가 있어!`,
      );
      await era.printAndWait(
        `일단 ${falcon.name}의 약속은 받아 냈다. 아이돌 활동을 소중히 여기는 팔코라면 적어도 당분간 담임과 쫓고 쫓길 걱정은 없을 듯하다.`,
      );
      await falcon.say_and_wait(
        `음──팔코가 무슨 말을 하려 했더라……아! ${callname}？`,
      );
      await era.printAndWait(
        `${falcon.name}는 ${you.name}의 눈을 똑바로 보았다.`,
      );
      await falcon.say_and_wait(
        `팔코, ${callname}와(과) 함께 보고 싶은 곳이 있어.


`,
      );
      await era.printAndWait(
        `${falcon.name}에게 손이 이끌린 ${you.name}은(는) 넓은 풀밭으로 나왔다.`,
      );
      await era.printAndWait(
        `주변에 높은 건물이 없어서인지 하늘이 평소보다 가깝게 느껴졌다.`,
      );
      await era.printAndWait(
        `여름이 가까워져서인지 공기도 평소보다 습하다. 구름 사이로 비치는 햇살이 풀밭에 옅은 안개를 만들었다.`,
      );
      await falcon.say_and_wait(`${callname}, 여기 어때?`);
      await era.printAndWait(
        `${falcon.name}는 ${you.name}의 손목을 흔들며 설렘을 억누르지 못하고 의견을 물었다.`,
      );
      await era.printAndWait(
        `북적이는 도심에서 이런 풀밭을 찾느라 ${falcon.name}도 꽤 시간을 들였을 것이다.`,
      );
      await era.printAndWait(
        `아니, 생각해 보면 원래 대형 쇼핑몰을 지으려던 땅이 사정상 방치되었을지도 모른다. 그리고 식물들의 낙원이 되었겠지.`,
      );
      await falcon.say_and_wait(
        `음, 리허설도 할 겸 ${callname}, 팔코의 보조를 해 줄래?`,
      );
      await you.say_and_wait(`응?`);
      await era.printAndWait(
        `${falcon.name}의 표정은 해를 등지고 있어 잘 보이지 않는다. 하지만 잘게 떨리는 귀를 보니 ${falcon.sex}는 상당한 용기를 내어 결심했을 것이다.`,
      );
      await era.printAndWait(
        `핑계라면 더 그럴듯하게 댈 수도 있었을 것이다. 하지만 ${falcon.sex}의 이런 마음은 솔직히 다루기 어렵다.`,
      );
      era.printButton(`앞으로 부탁해도 될까, 팔코?`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}이(가) 싫다면 어쩔 수 없지만……어?`);
      await era.printAndWait(
        `${you.name}이(가) 선뜻 승낙할 줄 몰랐는지 ${falcon.name}는 잠시 굳었다가 조심스레 ${you.name}의 손을 잡았다.`,
      );
      await falcon.say_and_wait(`영광입니다⭐`);
      await era.printAndWait(
        `${falcon.sex}는 묘하게 들뜬 목소리로 ${you.name}에게 답했다.`,
      );
      await era.printAndWait(
        `하늘은 어느 때보다 땅에 가까워 풀과 흙이 뒤섞인 숨결에 녹아든다. 처음에는 ${falcon.name}의 리듬을 따라가려 했지만 크게 한 번 부딪힌 뒤 끝내 버티지 못한 ${you.name}은(는) 풀밭에 털썩 주저앉았다.`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `어지럼이 남아 있는데도 ${falcon.name}의 설렘과 기쁨은 또렷이 전해졌다.`,
      );
      await falcon.say_and_wait(`미안, 팔코가 너무 신났어.`);
      await era.printAndWait(`가느다란 팔이 조심스레 일으켜 주었다.`);
      era.printButton(`아이돌은 이렇게 가까운 존재구나.`, 1);
      await era.input();
      await era.printAndWait(`두근.`);
      await era.printAndWait(
        `혼잣말 같은 만족감을 느끼며, 어릴 적 잔디를 전력으로 달리고 그대로 드러누웠을 때처럼 풀밭에 몸을 맡겼다.`,
      );
      await era.printAndWait(`꿈결처럼 걱정 없던 어린 시절로 돌아간다.`);
      await era.printAndWait(
        `거세게 뛰는 심장이 자신의 존재를 힘차게 증명한다.`,
      );
      await era.printAndWait(`그래, 이 행복이 이대로 영원히──`);
      await falcon.say_and_wait(
        `어! ${callname}, 격하게 운동한 뒤 잔디에 누우면 안 돼!`,
      );
      await era.printAndWait(
        `가느다란 팔에서 전해지는 강한 힘에 몸이 일으켜졌다.`,
      );
      await era.printAndWait(`음, 왠지 그립네.`);
      await era.printAndWait(
        `슬픔과 그리움, 후련함이 뒤섞인 복잡한 감정이 가슴에 솟았다.`,
      );
      await you.say_and_wait(`하지만 지금 내게 불행한 점은 하나도 없다.`, true);
      await era.printAndWait(`이런 일상이 계속되면 좋겠다.`);
      await era.printAndWait(
        `무심코 하늘을 올려다보니 푸른 하늘에 적란운 몇 개가 자유롭게 흐르고 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_34: (() => {
    const title = '빛나는 큰 무대로, 멈추지 말고 나아가라!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`……후우⭐ 고마워요, 여러분!`);
      await era.printAndWait(
        `즉흥 메들리가 끝나자 쏟아지는 박수가 ${falcon.name}를 인정해 주었다.`,
      );
      await era.printAndWait(
        `데뷔 이후 레이스에서도 무대에서도 빛난 팔코는 큰 관심을 받았다.`,
      );
      await era.printAndWait(
        `우마스타에서는 「${falcon.uma_sex_title} 아이돌?! ${falcon.name}⭐」이 화제다.`,
      );
      await era.printAndWait(
        `이어진 강변 라이브 영상도 우마스타에서 많은 팬을 모았다.`,
      );
      await you.say_and_wait(`이대로 계속 나아가자!`, true);
      await era.printAndWait(
        `소문을 듣고 모인 관객들에게 둘러싸여 강변 풀밭에서 진지하게 노래하던 ${falcon.name}는 깊은 밤까지 쉬지 않고 노래했다.`,
      );
      await you.say_and_wait(`수고했어!`);
      await era.printAndWait(
        `마지막 팬이 만족하며 돌아간 뒤 ${you.name}은(는) ${falcon.name} 쪽으로 걸어갔다.`,
      );
      await era.printAndWait(
        `이렇게 될 것을 예상해 기숙사장에게 외박 허가를 신청해 두었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 준비한 수건을 ${falcon.sex}에게 건네자 땀에 젖은 감촉과 묘한 향기가 신경을 자극했다.`,
      );
      await falcon.say_and_wait(`고마워⭐`);
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}와 함께 만든 무대를 정리하며 ${falcon.name}의 표정을 살폈다.`,
      );
      await falcon.say_and_wait(`～～～♪`);
      await era.printAndWait(
        `기분 좋은 ${falcon.name}는 아직도 무대의 여운에 젖어 있다.`,
      );
      await you.say_and_wait(`수고했어! 나머지는 내가 치울게.`);
      await era.printAndWait(
        `뒷정리를 모두 맡으려던 ${you.name}은(는) 꼬리에 몇 번이나 맞았다.`,
      );
      await falcon.say_and_wait(
        `이렇게 응원해 주는 팬이 있으면 에너지가 가득 찬 것 같아서 다음 날 아침까지 계속 노래할 수 있을 것 같아!`,
      );
      await falcon.say_and_wait(`정리하는 지금도 심장이 두근두근 뛰어.`);
      await falcon.say_and_wait(`……게다가.`);
      await era.printAndWait(
        `아직 무대에서 벗어나지 못한 ${falcon.name}가 소매를 살짝 잡아당기며 ${you.name}의 대답을 기다렸다.`,
      );
      await you.say_and_wait(
        `팔코의 무대는 정말 좋았어. 쭉 지켜본 팬으로서 정말 감동했어!`,
      );
      await falcon.say_and_wait(`……정말!`);
      await era.printAndWait(`${falcon.name}는 ${you.name}의 손을 꼭 잡았다.`);
      await falcon.say_and_wait(`다행이다!`);
      await era.printAndWait(
        `갑자기 꼬르륵 소리만 나지 않았다면 모든 것이 이렇게 아름다운 채로 남았을 것이다.`,
      );
      await falcon.say_and_wait(`……아하하, 팬이 없어서 다행이야.`);
      await era.printAndWait(
        `조금 민망해진 ${falcon.name}는 수줍게 고개를 숙였다.`,
      );
      await you.say_and_wait(
        `그러고 보니 요즘 엄청 인기 있는 라멘집이 있어. 가 볼래?`,
      );
      await era.printAndWait(
        `${you.name}은(는) 시계를 보았다. 지금 서두르면 늦지 않는다.`,
      );
      await falcon.say_and_wait(`──좋아⭐ 그럼 지금 가자!`);
      await era.printAndWait(
        `${falcon.name}가 ${you.name}의 손을 잡은 순간 ${you.name}은(는) 불길한 예감이 들었다.`,
      );
      await falcon.say_and_wait(`──3, 1! 스타트!`);
      era.drawLine({ content: 'ラーメン店内' });
      await falcon.say_and_wait(
        `와──아아! 생각보다 훨씬 맛있어! 팔코, 에너지 충전 완료⭐`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}가 우마스타에 올린 사진을 보았다. ${you.name}의 손을 잡고 가지런히 놓인 라멘 두 그릇과 함께 찍은 셀카였다.`,
      );
      await you.say_and_wait(`대단하네.`);
      await era.printAndWait(
        `구도의 각도도, 셔터를 누른 순간도 흠잡을 데 없다.`,
      );
      await you.say_and_wait(`팔코는 사진작가 재능도 있는 거 아냐?`);
      await era.printAndWait(
        `화면 위로 손가락을 빠르게 움직이는 ${falcon.name}가 가끔 미소 짓는다. 지금은 방해하지 않는 편이 좋겠다고 생각했다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌이란 무엇인가. 아마 아직 답은 나오지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_40: (() => {
    const title = '야래향';
    /**
     * 夜は光合成を止め、廃気を出す。自分がもう時代遅れで、埋められそうだという恐れから逃れるため。新しい潮流を追い、生存の恐怖を追い払おうとする。
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `더트에서 ${falcon.name}의 이름을 알리기 위해 앞으로 출주할 레이스 계획을 세우기 시작했다.`,
      );
      await era.printAndWait(`심야, 트레이너 기숙사
`);
      await era.printAndWait(
        `데뷔전에서 모은 데이터를 다시 정리하고 다음 날 일정을 메모했다.`,
      );
      await era.printAndWait(`그대로 쉬려던 순간──`);
      await era.printAndWait(`──부르르르`);
      await era.printAndWait(`휴대폰이 진동했다.`);
      await era.printAndWait(`벌써 깊은 밤이다. 이 시간에 받아야 할까.`);
      era.printButton(`받는다`, 1);
      era.printButton(`받지 않는다`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `한밤중에 온 연락이라면 받지 않을 이유가 없겠지.`,
        );
        await era.printAndWait(
          `그렇게 생각하며 ${you.name}은(는) 휴대폰을 열었다.`,
        );
        await falcon.say_and_wait(`안녕! ${callname}, 자고 있었어?`);
        await era.printAndWait(
          `벌써 날짜가 바뀐 한밤중임을 깨달았다. 졸음에 저절로 하품이 났다.`,
        );
        await era.printAndWait(
          `${falcon.name}가 이런 시간에 연락한 이유는 뭘까. 급한 일이라면 왜 룸메이트에게 묻지 않고 자신을 찾았을까.`,
        );
        await era.printAndWait(`아니면 자신만 해결할 수 있는 일일까.`);
        await era.printAndWait(
          `말투를 가늠하며 ${falcon.name}의 동기를 생각했다.`,
        );
        await era.printAndWait(
          `답장을 보내고 얼마 지나지 않아 휴대폰이 다시 울렸다.`,
        );
        await falcon.say_and_wait(
          `별일은 아닌데 팔코는 역시 ${callname}에게 상담하는 게 좋겠다고 생각했어.`,
        );
        await era.printAndWait(
          `${falcon.name}는 ${you.name}을(를) 믿음직한 어른이라고 생각하는 걸까.`,
        );
        await era.printAndWait(
          `영광이기는 하지만……순간 어떻게 답해야 할지 몰랐다.`,
        );
        era.printButton(`무슨 일인지 말해 줘.`, 1);
        era.printButton(`할 말은 내일 해도 돼.`, 2);
        if ((await era.input()) === 1) {
          await you.say_and_wait(`팔코가 힘들면 언제 어디서든 상담해도 돼.`);
          await era.printAndWait(
            `답장을 기다리는 시간은 생각보다 길었다.${you.name}이(가) 잠들기 직전에 한꺼번에 열 통 넘는 메시지가 도착했다.`,
          );
          await falcon.say_and_wait(
            `……${callname}에게는 가끔 약한 모습 보여도 되지?`,
          );
          await falcon.say_and_wait(
            `데뷔전 이후 팔코는 새로운 더트 아이돌로서 팬이 늘었어.`,
          );
          await falcon.say_and_wait(
            `덕분에 매일 아침 라이브에도 손님이 가득 모이게 됐지.`,
          );
          await falcon.say_and_wait(
            `그런데 어제 라이브에는 낯익은 몇 사람이 안 보였어.`,
          );
          await falcon.say_and_wait(
            `팬들과 앙코르를 할 때도 『실제 아이돌보다 버추얼 아이돌이 낫다』는 말을 들었고.`,
          );
          await falcon.say_and_wait(
            `팔코는 별로 신경 안 써⭐ 하지만 왠지 마음이 허전해.`,
          );
          await era.printAndWait(
            `${you.name}은(는) 상대가 몇 번이나 메시지를 고쳐 쓰며 겨우 감정을 가라앉히는 모습을 떠올릴 수 있었다.`,
          );
          await era.printAndWait(
            `요즘 학생들은 예전 자신보다 타자가 빠르다고 감탄하면서 신중히 말을 골랐다.`,
          );
          await era.printAndWait(
            `기존 아이돌에게는 버추얼 아이돌보다 확실한 실재감이 있다. 버추얼 아이돌의 등장으로 엄청난 열풍이 일었지만,`,
          );
          await era.printAndWait(`그래도 버추얼 아이돌에게는 약점이 있다.`);
          await era.printAndWait(
            `가장 뚜렷한 것은 ${falcon.sex}는 선수로 무대에 설 수 없다는 것이다.`,
          );
          await era.printAndWait(
            `레이스 ${falcon.uma_sex_title}인 ${falcon.name}는 레이스에서 활약하며 지켜보는 관객들에게 자신의 이야기를 전할 수 있다.`,
          );
          await era.printAndWait(
            `기술이 날로 발전하는 지금도 그것만으로 기존 아이돌의 자리는 남는다.`,
          );
          await era.printAndWait(
            `적절한 논점을 고르며 기존 아이돌의 강점을 생각했다.`,
          );
          await falcon.say_and_wait(
            `고마워! ${callname}! 팔코, 아이돌의 길을 더 열심히 걸을게!`,
          );
          await era.printAndWait(`곧 팔코는 기뻐하는 이모티콘을 보내 왔다.`);
          await falcon.say_and_wait(`팔코, 빨리 톱 아이돌이 되고 싶어!`);
          await era.printAndWait(
            `다음 날 기운 넘치는 ${falcon.name}는 응원하는 팬들에게 최고의 무대를 선사했다.`,
          );
        }
      } else {
        await era.printAndWait(`벌써 이 시간이네. 할 말은 내일 하자.`);
        await era.printAndWait(
          `휴대폰을 무음으로 바꾸고 ${you.name}은(는) 다시 잠들었다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해의 기운!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}와(과) ${falcon.name}는 새로운 한 해를 맞이했다.`,
      );
      await era.printAndWait(`트레이너실
`);
      await falcon.say_and_wait(`새해 복 많이 받아!`);
      await era.printAndWait(
        `${you.name}이(가) 트레이너실 문을 열자 코타츠 옆에 ${falcon.name}가 앉아 있었다.`,
      );
      era.printButton(`팔코, 새해 복 많이 받아!`, 1);
      await era.input();
      await era.printAndWait(
        `인사를 돌려주고 ${you.name}도 코타츠에 들어갔다.`,
      );
      await era.printAndWait(
        `따뜻한 코타츠가 바깥의 추위를 몰아냈다. 새해가 무엇을 가져올지 생각하던 ${you.name}은(는) ${falcon.name}와 눈이 마주쳤고 ${falcon.sex}는 ${you.name}에게 미소 지었다.`,
      );
      await you.say_and_wait(`해넘이 새해 라이브는 어땠어?`);
      await era.printAndWait(
        `차가웠던 두 손에 조금씩 감각이 돌아왔다.${you.name}은(는) 귤을 집어 껍질을 벗겼다.`,
      );
      await falcon.say_and_wait(
        `어제 무대는 생각보다 훨씬 대단했어. 팔코도 노래와 댄스를 많이 배웠어!`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}는 이야기하며 들떠서 밖으로 나온 꼬리를 다시 코타츠에 집어넣었다.`,
      );
      await falcon.say_and_wait(`잊을 뻔했어!`);
      await era.printAndWait(
        `${falcon.name}는 교복 주머니를 부스럭거리며 뒤졌다.`,
      );
      await falcon.say_and_wait(
        `선물은 뭘 할지 고민했는데, 소중한 사람에게는 직접 만든 걸 주는 게 정답이라는 생각이 문득 들었어.`,
      );
      await falcon.say_and_wait(
        `${callname}, 한 해 동안 수고했어. 새해에도 잘 부탁해!`,
      );
      await era.printAndWait(
        `팔코는 미소 지으며 연하장을 ${you.name}에게 건넸다.`,
      );
      await you.say_and_wait(`그럼 고맙게 받을게.`);
      await era.printAndWait(
        `코타츠에서 손을 뻗어 온기가 남은 연하장을 받았다.${falcon.name}가 잡고 있던 모서리가 조금 부풀어 있었다.`,
      );
      await you.say_and_wait(`올해 계획은?`);
      await falcon.say_and_wait(
        `올해도 팔코는 팬들에게 귀여운 모습을 전할 거야!`,
      );
      await era.printAndWait(
        `말이 끝나기가 무섭게 ${falcon.name}는 엄청난 속도로 ${you.name}의 질문에 답했다.`,
      );
      await you.say_and_wait(`늘 열심히 하는 팔코니까 지금은 조금 쉬어도 돼.`);
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 동그란 머리를 쓰다듬었다.${falcon.sex}는 거부하지 않고 기분 좋은 표정을 지었다.`,
      );
      await falcon.say_and_wait(`어? 음──팔코는 이제 어린애가 아니야.`);
      await era.printAndWait(
        `말로는 항의해도 코타츠를 다시 빠져나온 꼬리는 들떠서 위아래로 흔들렸다.`,
      );
      await you.say_and_wait(`팔코가 조금 지쳤다면
`);
      era.printButton(`아이돌의 길은 꾸준한 연습에 있다(모든 능력+10)`, 1);
      era.printButton(`어디 놀러 갈까?(스킬 Pt+100)`, 2);
      era.printButton(`같이 영화 볼래?(체력+600)`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `꾸준한 트레이닝이야말로 뛰어난 실력의 열쇠다.${falcon.name}의 아이돌 여정에서 방심은 허용되지 않는다.`,
          );
          await you.say_and_wait(`오늘은 스피드 훈련을 하자.`);
          await era.printAndWait(
            `코타츠의 따뜻함은 아쉽지만 그래도 다리를 뺐다.`,
          );
          await falcon.say_and_wait(`${callname}？`);
          await era.printAndWait(
            `어느새 ${falcon.name}는 운동복으로 갈아입었다.`,
          );
          await era.printAndWait(
            `${falcon.name}가 예상보다 기운차서 ${you.name}은(는) 안심했다.`,
          );
          await era.printAndWait(
            `그 뒤 ${you.name}와(과) ${falcon.name}는 함께 트레이닝장으로 향했다.`,
          );
          break;
        case 2:
          await falcon.say_and_wait(`음, 어디가 좋을까?`);
          await era.printAndWait(
            `${falcon.name}는 주머니에서 휴대폰을 꺼내 작게 중얼거리며 화면을 빠르게 넘겼다.`,
          );
          await era.printAndWait(
            `반짝이는 팔코에 비해 이렇게 골똘히 생각하는 팔코는 무척 드물다.`,
          );
          await falcon.say_and_wait(`점심은 여기로 가자!`);
          await era.printAndWait(
            `${falcon.name}는 화면을 돌려 ${you.name}에게 보여 주었다. 근처에서 화제가 된 인기 타피오카 가게였다.`,
          );
          await you.say_and_wait(
            `자기도 모르게 웃는 팔코는 평소보다 더 귀여워.`,
          );
          await era.printAndWait(`어느새 미소 짓고 있는 ${falcon.name}。`);
          await falcon.say_and_wait(`아……`);
          await era.printAndWait(`${falcon.name}의 얼굴이 갑자기 붉어졌다.`);
          await falcon.say_and_wait(`심장이 빨라……`, true);
          await falcon.say_and_wait(`에에에? 팔코, 이상한 표정은 아니었지?`);
          await era.printAndWait(
            `팔코는 황급히 표정을 가다듬으며 허둥지둥 꼬리를 코타츠 안으로 밀어 넣었다.`,
          );
          await falcon.say_and_wait(`${callname}！`);
          await era.printAndWait(
            `${you.name}의 표정을 알아차렸는지 ${falcon.name}는 평소 얼굴로 돌아왔다.`,
          );
          await era.printAndWait(
            `얼마 뒤 두 사람은 찻집에서 즐거운 하루를 보냈다.`,
          );
          break;
        case 3:
          await falcon.say_and_wait(
            `${falcon.uma_sex_title}와 트레이너가 함께 볼 영화는──`,
          );
          await falcon.say_and_wait(`팔코도 좋은 생각이 안 나네.`);
          await era.printAndWait(`${you.name}에게도 좋은 생각은 없었다.`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '사랑하는 마음! 팔코의 선물!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`──좋은 아침⭐!`);
      await falcon.say_and_wait(
        `그러고 보니 오늘은 발렌타인이네요──여러분, 초콜릿 받았나요?`,
      );
      await falcon.say_and_wait(
        `못 받았어도 괜찮아요. 이제 나올 건 팔코가 준비한 초콜릿이니까──`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await falcon.say_and_wait(`앞으로도 계속 팔코를 응원해 주세요♪`);
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `그거 팔코가 진심을 담은 초콜릿이야?`,
      );
      await falcon.say_and_wait(
        `아니에요~ 팔코는 모든 팬을 똑같이 좋아하니까 초콜릿 가게에서 한꺼번에 샀어요.`,
      );
      await falcon.say_and_wait(
        `게다가 상자 안에는 팔코 특제 엽서와 사인도 들어 있어요⭐!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬 B`,
        `팔코의 발렌타인 기념 행사에 와서 정말 다행이야!`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await era.printAndWait(`현장 분위기가 더욱 뜨거워졌다.`);
      await falcon.say_and_wait(`앞으로도 많이 응원해 주세요♪`);
      await you.say_as_passer_by_and_wait(`팬`, `오오오오!!!`);
      await falcon.say_and_wait(
        `바로 그거예요♪ 수줍음과 사랑을 담은 팔코의 무대를 봐 주세요!`,
      );
      await era.printAndWait(
        `팬들의 환호 속에 ${falcon.name}의 발렌타인 기념 라이브는 이제 막 시작되었다.`,
      );
      await falcon.say_and_wait(
        `수고했어요! 앞으로도 쭉 팔코를 응원해 줄 거죠?`,
      );
      await era.printAndWait(
        `마지막 팬을 배웅한 뒤 조금 떨어져 기다리던 ${you.name}이(가) 앞으로 나왔다.`,
      );
      await falcon.say_and_wait(`팔코의 노래가 ${callname}의 마음에 닿았어?`);
      era.printButton(`확실히 느꼈어.`, 1);
      await era.input();
      await falcon.say_and_wait(`……그러고 보니 ${callname}에게 줄 것도 있어.`);
      await era.printAndWait(
        `${falcon.name}는 눈에 잘 띄지 않는 구석의 상자에서 예쁘게 포장한 선물 상자를 꺼냈다.`,
      );
      await falcon.say_and_wait(
        `이건 ${falcon.name}가 담당 ${falcon.uma_sex_title}로서 ${callname}에게 주는 진심……의리 초콜릿이야!`,
      );
      await era.printAndWait(
        `상자를 열자 하트 모양 초콜릿과 카드가 들어 있었다.`,
      );
      await falcon.say_and_wait(`앞으로도 계속 팔코를 응원해 줘!`);
      await era.printAndWait(`${falcon.name}는 달콤한 미소를 지었다.`);
      era.printButton(`장소를 정리하면 같이 밥 먹으러 갈래?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `근처에 트레이너와 ${falcon.uma_sex_title}가 둘이 가면 할인해 주는 가게가 있대. 가 보자!`,
      );
      await era.printAndWait(`${falcon.name}는 ${you.name}의 손을 잡아끌었다.`);
      await falcon.say_and_wait(
        `팬이 팔코에게 추천해 준 가게야. 저기에도 팔코 팬이 있을까? 기대돼!`,
      );
      era.printButton(`분명 있을 거야.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `그러고 보니 팔코……아니, 팔코는 아무 말도 안 했어⭐`,
      );
      await era.printAndWait(`두 사람은 근처 인기 가게에서 발렌타인을 보냈다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = '목표는 사츠키상!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, suzuka, you, callname) => {
      await era.printAndWait(
        `나뭇가지에 두껍게 쌓였던 눈이 마침내 녹고 조용하던 트레센에 새소리가 돌아왔다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 따뜻한 트레이너실에서 앞으로의 레이스를 생각하고 있을 때.`,
      );
      await falcon.say_and_wait(`${callname}, 다녀왔어!`);
      await suzuka.say_and_wait(`실례하겠습니다.`);
      await era.printAndWait(`트레이너실에 두 손님이 찾아왔다.`);
      await you.say_and_wait(`오늘도 팔코는 기운이 넘치네.`);
      await falcon.say_and_wait(
        `응! 활기와 귀여움이야말로 ${falcon.uma_sex_title} 아이돌만의 차별점이니까.`,
      );
      await era.printAndWait(
        `${falcon.name}는 트레이너실을 한 바퀴 돌고 소파로 뛰어들었다. 사일런스 스즈카는 소파 끝에 조용히 앉아 몇 번이나 방을 둘러보았다.`,
      );
      await falcon.say_and_wait(`소파에 누우니까 정말 편하다.`);
      await you.say_and_wait(`오늘 아이돌 활동은 어땠어?`);
      await era.printAndWait(
        `${you.name}은(는) 플라스틱 컵 두 개를 꺼내 편의점에서 산 홍차를 따랐다.`,
      );
      await falcon.say_and_wait(`음──팔코, 사츠키상에 나가고 싶어.`);
      await you.say_and_wait(`어?`);
      await suzuka.say_and_wait(`응?`);
      await era.printAndWait(`옆에 있던 사일런스 스즈카가 살며시 입을 가렸다.`);
      await falcon.say_and_wait(`팔코, 사츠키상에 나가고 싶어!`);
      await era.printAndWait(
        `${falcon.name}는 상당한 기세로 트레이너실의 사람들에게 선언했다.`,
      );
      await suzuka.say_and_wait(`팔콘 씨가 저를 데려온 건 그 일 때문이었군요.`);
      await suzuka.say_and_wait(
        `하지만 팔콘 씨는 더트에서 활약하고 있잖아요. 왜 잔디에 나가고 싶으신가요?`,
      );
      await era.printAndWait(
        `${you.name}도 같은 의문을 품고 ${falcon.sex}를 보았다.`,
      );
      await falcon.say_and_wait(
        `팔코는 계속 더트를 달렸으니까 더트 팬들은 팔코를 알아⭐`,
      );
      await falcon.say_and_wait(
        `하지만 잔디 쪽 관객은 아직 팔코를 잘 모르는 것 같아. 그래서 잔디에 나가 잔디 팬들도 팔코를 응원하게 하고 싶어!`,
      );
      era.printButton(`그렇다면 나도 찬성이야.`, 1);
      await era.input();
      await era.printAndWait(
        `잔디 관객에게도 이렇게 귀여운 ${falcon.uma_sex_title}를 알릴 수 있다면 팔코의 아이돌 활동에 큰 힘이 되겠지.`,
      );
      await suzuka.say_and_wait(
        `그렇군요. 그래서 잔디를 달리는 요령을 가르쳐 달라는 건가요?`,
      );
      await falcon.say_and_wait(`그러니까 『이차원의 도망자』를 빌려줘!`);
      await suzuka.say_and_wait(`……응?`);
      await falcon.say_and_wait(
        `아예 사츠키상에서는 팔코가 이차원의 도망자라고 소개해서 스즈카에게 힘을 받을래!`,
      );
      await era.printAndWait(
        `사일런스 스즈카뿐 아니라 ${you.name}도 ${falcon.name}의 엉뚱한 말에 머리를 감쌌다.`,
      );
      await suzuka.say_and_wait(
        `팔콘 씨, 다른 사람의 칭호를 쓰고 이상한 짓은 하지 마세요!`,
      );
      await era.printAndWait(`사일런스 스즈카가 화를 냈다.
`);
      era.printButton(`미안해요. 나중에 팔코에게 잘 말해 둘게요.`, 1);
      era.printButton(`잔디를 달리는 요령을 가르쳐 주실 수 있나요?`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `어떤 이유든 남의 이름을 빌려 쓰는 건 좋지 않다.`,
        );
        await era.printAndWait(`이러다 불필요한 다툼이 생길 수도 있다.`);
        await suzuka.say_and_wait(`아니요, 걱정하지 않으셔도 돼요.`);
        await suzuka.say_and_wait(
          `팔콘 씨는 활발하고 엉뚱한 면이 있지만 남의 평판을 악용할 사람은 아니에요.`,
        );
        await suzuka.say_and_wait(
          `그래도 도주 우마 자매 활동에서 팔콘 씨의 페이스를 따라가는 건 힘들지만요.`,
        );
        await suzuka.say_and_wait(
          `하지만 자기 이름으로 길을 걸어 주세요. 진심으로 받아들이지 않은 칭호는 바라는 결말을 가져다주지 않아요.`,
        );
        await falcon.say_and_wait(`에에? 스즈카, 화내니까 무서워!`);
        await you.say_and_wait(`그런 거였구나.`);
        await era.printAndWait(`${you.name}은(는) 다시 자리에 앉았다.`);
        await suzuka.say_and_wait(
          `칭호는 빌려드릴 수 없지만 잔디를 달리는 요령은 제대로 알려드릴게요.`,
        );
        await era.printAndWait(
          `그 뒤 세 시간 동안 사일런스 스즈카에게 잔디에 관한 지식을 배웠다.`,
        );
      } else {
        await suzuka.say_and_wait(`그것뿐이라면 물론 괜찮아요.`);
        await era.printAndWait(`사일런스 스즈카는 이제 화가 풀린 것 같다?`);
        await suzuka.say_and_wait(
          `진심으로 받아들이지 않은 칭호는 바라는 결말을 가져다주지 않아요. 엉뚱한 데로 빠지기 쉬운 팔콘 씨도 그건 기억해 주세요.`,
        );
        await suzuka.say_and_wait(`그리고
`);
        await suzuka.say_and_wait(
          `그래도 선두의 경치는 남에게 양보하지 않을 거예요! 그 점은 가슴에 새겨 두세요, 팔콘 씨.`,
        );
        await falcon.say_and_wait(`에에? 스즈카, 화내니까 무서워!`);
        await era.printAndWait(`……그게 본론이었나.`);
        await you.say_and_wait(
          `앞으로 ${falcon.name}는 꽤 고생할 듯하다.`,
          true,
        );
        await era.printAndWait(
          `${falcon.name}는 도움을 청하는 눈으로 ${you.name}을(를) 보았다.`,
        );
        await you.say_and_wait(`(눈을 피한다)`, true);
        era.drawLine();
        await suzuka.say_and_wait(
          `벌써 여덟 시간째 연습 중인데 팔콘 씨는 아직도 이렇게 기운이 넘치나요?`,
        );
        await falcon.say_and_wait(`장시간 라이브라면 아직 한계가 아니야!`);
        await suzuka.say_and_wait(`그럼 계속하죠.`);
        await era.printAndWait(`그 뒤 잔디 특훈은 통금 시간까지 이어졌다.`);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_15: (() => {
    const title = '노려라! 사츠키상!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`트레이닝장
`);
      await falcon.say_and_wait(`하아, 하아……`);
      await you.say_and_wait(`수고했어.`);
      await falcon.say_and_wait(`${callname}, 팔코, 전보다 빨라졌어?`);
      await era.printAndWait(`${you.name}은(는) 스톱워치를 보았다.`);
      await you.say_and_wait(`……이기기까지는 아직 멀었다.`);
      await era.printAndWait(
        `사일런스 스즈카에게 달리는 요령을 배웠지만 더트에 익숙한 ${falcon.name}에게는 여전히 버겁다.`,
      );
      await falcon.say_and_wait(`……${callname}？`);
      await era.printAndWait(
        `${falcon.name}는 ${you.name}의 표정에서 무언가 읽은 듯 물을 마시며 ${you.name}의 반응을 살폈다.`,
      );
      await you.say_and_wait(`조금 어렵지만 꾸준히 연습하면 극복할 수 있어.`);
      await era.printAndWait(
        `${you.name}은(는) 서류철을 내려놓고 진지하게 ${falcon.sex}를 보았다.`,
      );
      await falcon.say_and_wait(`${callname}, 그 표정 수상한데?`);
      await falcon.say_and_wait(`혹시 벌써 좋아하는 사람이 있어?`);
      await era.printAndWait(
        `왜 그런 결론에 도달했는지는 모르겠지만 왠지 안심된다.`,
      );
      await you.say_and_wait(`조금 피곤할 뿐이야. 잠깐 쉬면 괜찮아.`);
      await falcon.say_and_wait(`……정말?`);
      await era.printAndWait(
        `의심을 떨칠 수 없게 된 모양이다. 점점 더 고개를 갸웃하는 ${falcon.name}를 보고 ${you.name}은(는) 새로운 화제를 찾았다.`,
      );
      await you.say_and_wait(
        `그보다 팔코, 신곡을 만들기로 했다는 걸 응원해 주는 모두에게 알리기로 했잖아?`,
      );
      await you.say_and_wait(`서두르지 않으면 다들 기다리다 지치겠어.`);
      await falcon.say_and_wait(`어? 그러면 서둘러야겠다.`);
      await era.printAndWait(
        `말은 그렇게 하면서 ${falcon.sex}는 움직이지 않았다. 꼬리만 팔랑팔랑 의자를 두드렸다.`,
      );
      await you.say_and_wait(`서두르지 않으면 다들 기다리다 지치겠어.`);
      await falcon.say_and_wait(`알았어~`);
      await era.printAndWait(
        `못 들었나 싶어 되풀이했지만 ${falcon.name}는 여전히 앉아 있다.`,
      );
      await era.printAndWait(
        `무슨 말을 할지 생각하던 중 ${falcon.name}가 일어났다.`,
      );
      await falcon.say_and_wait(`그럼 다녀올게~`);
      await falcon.say_and_wait(`아쉽네.`, true);
      await era.printAndWait(
        `그 뒤 ${falcon.name}는 석양을 받으며 탈의실로 달려갔다.`,
      );
      era.drawLine({ content: 'ライブ終了後' });
      await falcon.say_and_wait(`고마워요⭐ 오늘 라이브도 대호평이네요⭐`);
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await era.printAndWait(`주변에서 드문드문 박수가 들렸다.`);
      await falcon.say_and_wait(
        `그럼 팔코가 한 곡 더 부를게요♪──늘 응원해 주는 당신에게⭐`,
      );
      await era.printAndWait(`오늘 무대도 대성공이었다.`);
      await era.printAndWait(
        `구경하던 인파가 천천히 흩어진 뒤 멀리서 지켜보던 ${you.name}이(가) ${falcon.name} 쪽으로 걸어갔다.`,
      );
      await you.say_and_wait(`수고했어. 오늘 무대도 반응이 정말 좋았네.`);
      await era.printAndWait(
        `언제나 무대를 생각하는 ${falcon.teen_sex_title}는 정말 귀엽다.`,
      );
      await falcon.say_and_wait(
        `아니야! ${callname}이(가) 발굴해 주지 않았다면 팔코는 지금도 무대 때문에 고민했을 거야.`,
      );
      await era.printAndWait(
        `자신은 해야 할 일을 했을 뿐이다……그렇게 말하고 싶었지만 ${you.name}은(는) 입을 다물었다.`,
      );
      await falcon.say_and_wait(
        `오늘 라이브도 끝났으니 이제 사츠키상을 향해 전력을 다하자!`,
      );
      await era.printAndWait(
        `${falcon.name}의 종이봉투를 받고 말없이 트레센으로 돌아갔다.`,
      );
      await falcon.print_and_wait(`손에 든 종이봉투가 왜 이렇게 무거울까.`);
      await falcon.print_and_wait(
        `지나치게 들뜬 머릿속은 종이컵 안에서 빙빙 도는 검은 덩어리 같았다.`,
      );
      await you.say_as_passer_by_and_wait(`어린 목소리`, `저기요!`);
      await era.printAndWait(
        `목소리는 뒤에서 들려왔다.${you.name}와(과) ${falcon.name}는 눈을 마주치고 함께 돌아보았다.`,
      );
      await you.say_as_passer_by_and_wait(
        `어린 목소리`,
        `${falcon.name}언니 무대, 정말 멋졌어요! 저도 팔코 언니 같은 아이돌이 되고 싶어요!`,
      );
      await era.printAndWait(
        `중등부쯤 되어 보이는 작은 ${falcon.uma_sex_title}로, ${falcon.name}의 팬인 모양이다.`,
      );
      await falcon.say_and_wait(
        `고마워! 내일도 같은 곳에서 팔코를 응원해 줘⭐`,
      );
      await era.printAndWait(
        `아이돌 모드로 돌아온 ${falcon.name}는 기쁘게 양손을 흔들었다.`,
      );
      await you.say_as_passer_by_and_wait(
        `어린 목소리`,
        `어떻게 하면 팔코 언니 같은 대단한 아이돌이 될 수 있나요?`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}는 두 사람에 관해 더 알고 싶은 모양이다.`,
      );
      await falcon.say_and_wait(
        `톱 ${falcon.uma_sex_title} 아이돌이 되겠다는 목표를 갖고, 그 목표를 꼭 기억하며 행동하면 돼!`,
      );
      await era.printAndWait(
        `그렇구나, 하며 작은 ${falcon.uma_sex_title}는 고개를 끄덕였다.`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `옆에 계신 분은 팔코 언니에게 소중한 분이죠?`,
      );
      await falcon.say_and_wait(`엄청 소중한 사람이야!`);
      await era.printAndWait(
        `${falcon.name}는 기쁜 마음을 감추지 못하며 ${falcon.sex}의 물음에 답했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `팬들보다 소중한가요?`,
      );
      await falcon.say_and_wait(`어? 그건.`);
      await era.printAndWait(`${falcon.name}는 드물게 멈칫하더니 이윽고.`);
      era.printButton(`팬보다 소중한 사람이야.`, 1);
      era.printButton(`팬과는 다른 의미로 똑같이 소중한 사람이야.`, 2);
      if ((await era.input()) === 1) {
        await you.say_as_passer_by_and_wait(
          `작은 ${falcon.uma_sex_title}`,
          `팬보다 소중하다는 게 무슨 뜻이에요?`,
        );
        await era.printAndWait(
          `트레이닝에서도 일상에서도 지도해 주는 사람이야.`,
        );
      } else {
        await you.say_as_passer_by_and_wait(
          `작은 ${falcon.uma_sex_title}`,
          `다른 의미라는 게 무슨 뜻이에요?`,
        );
        await era.printAndWait(
          `트레이닝에서도 일상에서도 지도해 주는 사람이야.`,
        );
      }
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `트레이너였군요!`,
      );
      await era.printAndWait(
        `기쁘게 주위를 돌던 작은 ${falcon.uma_sex_title}가 갑자기 손을 잡았다.`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `제가 입학하면 오빠가 제 전담 트레이너가 되어 주실래요?`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}를 육성하려면 이사장에게 신청한 뒤 꼬박 세 해 동안 트레이닝을 책임져야 한다.`,
      );
      await era.printAndWait(`솔직히 상당히 힘들다.`);
      await you.say_and_wait(
        `트레센에 들어오면 나보다 훌륭한 트레이너를 만날 거야.`,
      );
      await era.printAndWait(`어째서인지 등골이 서늘하다.`);
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `알겠어요!`,
      );
      await era.printAndWait(
        `감사를 전한 뒤 작은 ${falcon.uma_sex_title}는 빠르게 떠났다.`,
      );
      await you.say_and_wait(`팔코──`);
      await falcon.say_and_wait(`아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.name}는 아무 일도 없었다는 듯 이쪽을 바라보고 있었다.`,
      );
      await you.say_and_wait(`이거 복잡하네.`, true);
      await era.printAndWait(
        `그 뒤 보답하는 뜻으로 다음 휴일에는 ${falcon.name}와 외출하기로 약속했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '사츠키상에서 빛나는 팔코';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`기자 회견에서 사츠키상 출주를 발표한 뒤.`);
      await era.printAndWait(
        `${falcon.name}가 적성에 맞지 않는 무대에서 이길 수 있을지 의문도 있었다. 하지만 그보다 더트에서 활약하는 ${falcon.name}가 어떤 활기를 보여 줄지 기대하는 마음이 더 컸다.`,
      );
      await era.printAndWait(`대기실`);
      await falcon.say_and_wait(`흥흥♪ 이걸로 팔코, 준비 완료!`);
      await era.printAndWait(
        `${falcon.name}는 전신 거울 앞에서 승부복을 다시 확인했다.`,
      );
      await falcon.say_and_wait(`${callname}, 어때?`);
      era.printButton(`눈부셔!`, 1);
      await era.input();
      await falcon.say_and_wait(`이렇게 팬들의 시선을 전부──빼앗을 거야!`);
      await falcon.say_and_wait(
        `……그러고 보니 팔코가 이 승부복을 입는 것도 처음이네……`,
      );
      await era.printAndWait(
        `${falcon.name}는 갑자기 쑥스러운 듯 ${you.name}와(과) 마주 보던 눈을 피했다.`,
      );
      await falcon.say_and_wait(`……아무것도 아니야⭐`);
      await era.printAndWait(`그리고 무언가 감추듯 입을 가리고 웃었다.`);
      await falcon.say_and_wait(`이번에야말로 출발이야!`);
      await era.printAndWait(`${falcon.name}는 문손잡이를 잡고 열려 했다.`);
      era.printButton(
        `내 시선을 빼앗았듯 레이스장 모두의 시선도 전부 빼앗아 와!`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `${falcon.name}는 눈을 깜빡이고 대기실 문을 닫았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '사츠키상 이후·빛나는 큰 무대';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, suzuka, you, callname) => {
      await falcon.say_and_wait(`정말……`);
      await falcon.say_and_wait(
        `${falcon.name}……팔코, 정말 이겼어! Lucky! Victory⭐`,
      );
      await era.printAndWait(
        `${you.name}도 전광판의 글자를 가만히 바라보았다. 눈앞의 사실이 꿈처럼 부서져 이 비현실적인 상태로 깨어나는 건 아닐까 두려웠다. 하지만 깨더라도 좋은 꿈이겠지.`,
      );
      await era.printAndWait(
        `그런데도 ${falcon.name}의 순위는 ${you.name}이(가) 어떻게 움직여도 변하지 않았다. 나무에서 사과를 떨어뜨리는 중력처럼 안심할 수 있었다.`,
      );
      await falcon.say_and_wait(`꿈 아니지! ${callname}！`);
      await era.printAndWait(
        `${falcon.name}도 아직 이 환희에서 헤어 나오지 못했다.`,
      );
      era.printButton(`다음은 ${falcon.name}가 꿈꾸던……잔디의 무대야!`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 스스로 듣고도 놀랄 만큼 날카롭게 떨리는 목소리를 냈다.`,
      );
      await falcon.say_and_wait(`네!`);
      await era.printAndWait(
        `${falcon.name}는 그제야 정신을 차리고 위닝 라이브 준비를 서둘렀다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 의자에 기대 한참 동안 정신을 차리지 못했다.`,
      );
      era.drawLine({ content: 'ウィンナーズステージ終了後' });
      await you.say_and_wait(`수고했어.`);
      await era.printAndWait(
        `${you.name}은(는) 준비한 수건을 김이 오르는 ${falcon.name}에게 건넸다.`,
      );
      await era.printAndWait(
        `흠뻑 젖은 ${falcon.name}는 지칠 대로 지쳤는데도 ${falcon.sex}의 눈은 빛났다.`,
      );
      await you.say_and_wait(`사츠키상 무대는 어땠어?`);
      await falcon.say_and_wait(`생각보다 넓고, 생각보다 반짝였어!`);
      await falcon.say_and_wait(
        `그리고 팔코는 이렇게 사람이 많은 무대에서 노래한 적이 없어. 달렸던 무대보다 두 배나 큰 곳에 서다니.`,
      );
      await era.printAndWait(
        `수건으로 머리카락의 땀을 닦으며 ${falcon.name}는 ${you.name}을(를) 보고 있었다.`,
      );
      await falcon.say_and_wait(
        `이렇게 많은 관객이 봐 주면 팔코는 힘이 가득 차는 것 같아……${callname}도 모두에게 주목받는 느낌을 알면 팔코가 무슨 말을 하는지 이해할 거야.`,
      );
      await era.printAndWait(
        `${falcon.name}는 아쉬운 듯 손을 멈추었다. 무언가 보는 듯하다가 좋은 일을 떠올리듯 무심코 수건을 문질렀다.`,
      );
      await suzuka.say_and_wait(`실례하겠습니다.`);
      await era.printAndWait(`사일런스 스즈카가 대기실 문을 열었다.`);
      await suzuka.say_and_wait(`어? 나중에 오는 게 좋았을까요?`);
      await era.printAndWait(
        `${falcon.name}은(는) 무심코 움직임을 멈췄다. 사일런스 스즈카는 ${you.name}을(를) 보며 다음 말을 기다리는 듯했다.`,
      );
      await you.say_and_wait(
        `아니요, 오히려 잘 오셨어요. 고마워요, 스즈카 씨.`,
      );
      await you.say_and_wait(`지난번 잔디 특훈이 정말 도움이 됐어요.`);
      await era.printAndWait(
        `${you.name}은(는) 진심으로 ${falcon.sex}에게 감사를 전했다.`,
      );
      await falcon.say_and_wait(`고마워, 스즈카. 팔코가 이긴 건 네 덕분이야⭐`);
      await suzuka.say_and_wait(`스……스즈카?`);
      await era.printAndWait(
        `어느새 ${falcon.name}는 평소 모습으로 돌아와 있었다.`,
      );
      await you.say_and_wait(
        `이번 승리의 공로자인 스즈카${suzuka.adult_sex_title}, 함께 승리를 축하하지 않을래요?`,
      );
      await era.printAndWait(
        `조금 전의 애매한 분위기는 접어 두고 ${you.name}은(는) 사일런스 스즈카에게 제안했다.`,
      );
      await suzuka.say_and_wait(
        `……${callname}께서 그렇게 말씀하신다면요. 감사합니다.`,
      );
      await era.printAndWait(
        `그 뒤 일행은 근처 유명 양식당에서 승리의 맛을 즐겼다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_lose: (() => {
    const title = '사츠키상 이후·동경하던 무대의 한가운데';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`대기실`);
      era.printButton(`무대 수고했어, 팔코.`, 1);
      await era.input();
      await era.printAndWait(
        `사츠키상에서는 이기지 못했지만 ${falcon.name}는 만족스러워 보였다.`,
      );
      await falcon.say_and_wait(`사츠키상 무대는 생각보다 컸어……`);
      await falcon.say_and_wait(
        `평소 무대의 두 배나 되고, 눈부신 플래시며 눈에 들어오는 관객 모두가 이쪽을 보고 있었어.`,
      );
      await falcon.say_and_wait(
        `하지만 가장 빛나는 건 무대의 한가운데겠지……다음엔 팔코가 반드시 설 거야!`,
      );
      await falcon.say_and_wait(`팔코, 파이팅!`);
      await you.say_and_wait(
        `바보야, 사츠키상은 클래식급 레이스 ${falcon.uma_sex_title}만 나갈 수 있어!`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 작은 머리를 가볍게 톡 쳤다.`,
      );
      await falcon.say_and_wait(`에헤⭐`);
      await era.printAndWait(`혀를 내민 ${falcon.name}는 의외로 귀여웠다.`);
      await you.say_and_wait(`귀엽네.`, true);
      await you.say_and_wait(
        `크흠! 이제 팔코는 재팬 더트 더비를 착실히 준비하자.`,
      );
      await falcon.say_and_wait(`응⭐`);
      await you.say_and_wait(`하지만 아이돌 무대도 소홀히 해선 안 돼!`);
      await falcon.say_and_wait(`네⭐`);
      await you.say_and_wait(`이 기세로 앞으로 나아가자!`);
      await falcon.say_and_wait(
        `최강의 ${falcon.uma_sex_title} 아이돌──${
          falcon.name
        }⭐ 다음엔 반드시 반짝이는 모습을 모두에게 보여 줄게!`,
      );
      await era.printAndWait(`${falcon.name}는 활기찬 목소리로 답했다.`);
      await era.printAndWait(
        `${you.name}은(는) 다음 레이스가 기대되기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_15: (() => {
    const title = '진작에 알아차린 연심';
    /**
     * 既定では皐月賞終了後
     * ライブのあと学校へ戻るとリボンが一本足りない。急いで探すが門限が近い。選択
     * 落とした場所へ行っても見つからない。絶望していると、駆けつけてきた小さなウマ娘が拾っていた。トレーナーとの関係を聞かれる
     * スマートファルコンは、トレーナーへの気持ちがアイドル活動を大きく傷つけるかもしれないと気づく
     * 不安に落ちる
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`기숙사
`);
      await falcon.say_and_wait(`${callname}, 기숙사까지 데려다줘서 고마워!`);
      await falcon.print_and_wait(
        `${you.name}이(가) 모퉁이에서 사라지는 모습을 배웅한 ${falcon.name}도 미소 지으며 돌아섰다.`,
      );
      await falcon.print_and_wait(
        `레이스에 나가면서 늘 응원하는 사람들의 소원도 이루어 주고 싶다. 그 균형을 잡기 위해 ${you.name}은(는) ${falcon.name}를 설득해 출주하는 주에는 게릴라 라이브 시간을 줄였다.`,
      );
      await falcon.print_and_wait(
        `소중한 무대 시간을 아끼기 위해 ${falcon.name}는 평소보다 더 빛났다.`,
      );
      await falcon.say_and_wait(`……트레이너 ${falcon.uma_sex_title}。`);
      await falcon.print_and_wait(
        `기상──수업──트레이닝──라이브──기숙사. 물 흐르듯 고요한 일상.`,
      );
      await falcon.print_and_wait(
        `${callname}이(가) 모퉁이에서 사라지는 걸 배웅하는 것도 이제 일상의 일부다.`,
      );
      await falcon.print_and_wait(
        `더 많은 사람을 웃게 하려고 쓰러질 때까지 아이돌 활동을 한다. 그래서 매일이 충실하다.`,
      );
      await falcon.print_and_wait(
        `아, 하지만 라이브가 끝나면 다리가 움직이지 않는 일이 늘었다.`,
      );
      await falcon.print_and_wait(
        `아이돌 수련이 아직 부족해서일까, 스스로에게 묻는다.`,
      );
      await falcon.print_and_wait(
        `또 다른 자신은 고개를 젓고 『팬에게 팔코의 약한 모습을 보일 수 없어』라며 부정적인 생각을 버렸다.`,
      );
      await falcon.print_and_wait(
        `전에는 메이드복도 입었으니 이번에는 승부복으로 라이브 해 볼까?`,
      );
      await falcon.print_and_wait(
        `팔코 팬들도 여러 사정 때문에 레이스장에 못 오는 일이 많으니까.`,
      );
      await falcon.print_and_wait(
        `레이스가 평일에 열려서 못 온 걸까……그렇게 생각하고 싶지만 역시 잔디 레이스가 더 관심을 끌겠지.`,
      );
      await falcon.print_and_wait(
        `사츠키상은 무대도 더 크고 출전하는 ${falcon.uma_sex_title}도 강해. 팔코가 나가는 더트보다 훨씬 넓은 관중석을 채우는 팬도 더 많고.`,
      );
      await falcon.print_and_wait(`그렇게 생각하니 조금 분하네──`);
      await falcon.print_and_wait(
        `정했어! 팔코는 가장 빛나는 모습으로 모두에게 행복을 전할 거야!`,
      );
      await falcon.print_and_wait(
        `안심하게 만드는 포즈! 시선을 사로잡는 스텝! 그리고 다이아몬드처럼 반짝이는 승부복!`,
      );
      await falcon.print_and_wait(
        `아──그러고 보니 머리 모양도 고치는 게 좋겠어.`,
      );
      era.printButton(`응?`, 1);
      await era.input();
      await falcon.print_and_wait(
        `올려 묶었던 머리가 마침내 풀려나듯 머리끈이 끊어졌다.`,
      );
      await falcon.say_and_wait(`드디어 한계였구나.`);
      await falcon.print_and_wait(
        `혼잣말을 중얼거리는 ${falcon.name}는 무심코 앞머리의 리본을 쓰다듬었다.`,
      );
      await falcon.print_and_wait(
        `비용을 아끼려고 중고로 산 머리끈은 이렇게 격한 움직임을 버티지 못했다.`,
      );
      await falcon.print_and_wait(`하나, 둘……셋?`);
      await falcon.print_and_wait(
        `가슴에 불안이 스쳤다. 리본을 풀고 몇 번이나 헛되이 세어 보았다.`,
      );
      await falcon.say_and_wait(`서둘러 돌아온 길을 찾아봐야 해.`, true);
      await falcon.print_and_wait(
        `그건 가장 소중한, 다정한 엄마가 직접 만들어 준 첫 승부복.`,
      );
      await falcon.say_and_wait(`하지만 시간이.`, true);
      await falcon.print_and_wait(
        `시침과 분침 사이에는 파르페의 딸기 하나도 못 끼울 것 같다.`,
      );
      await falcon.print_and_wait(
        `통금을 어기면 나중에 타즈나 씨에게 혼나겠지.`,
      );
      await falcon.print_and_wait(`먼저 키세키 선배에게 말하면 조금 봐주실까?`);
      await falcon.say_and_wait(`팔코! 파이팅!`);
      await falcon.print_and_wait(`정신을 차렸을 때는 이미 달리고 있었다.`);
      await falcon.print_and_wait(`아, 언제나 이래.`);
      await falcon.print_and_wait(
        `빛의 고리를 팔랑거리는 천사 팔코는 한숨을 쉬었고 옆의 악마 팔코는 기쁘게 응원했다.`,
      );
      await falcon.say_and_wait(
        `지금의 위기에 전력을 다한다! 나중 일은 내일의 팔코에게 맡긴다! 그게 팔코의 아이돌 정신!`,
      );
      await falcon.print_and_wait(
        `나아갈 방향을 정한 ${falcon.name}는 구석구석 놓치지 않고 전속력으로 달렸다.`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `트레센 교문, 상점가 골목, 목적지인 강변 풀밭까지. 어디에도 리본은 없었다.`,
      );
      await falcon.print_and_wait(
        `리본에 날개가 돋아 팔랑팔랑 날아간 것 같아.`,
      );
      await falcon.print_and_wait(`아, 사랑하는 리본아. 에덴에서 잘 지내기를.`);
      await falcon.print_and_wait(
        `산만한 생각을 떨쳐 낸 팔코는 한 가지를 더 깨달았다.`,
      );
      await falcon.say_and_wait(`통금 시간이 벌써 삼십 분이나 지났어! 어떡해!`);
      await falcon.print_and_wait(
        `사정을 안 트레센에서는 지금쯤 팔코를 애타게 찾고 있겠지.`,
      );
      await falcon.print_and_wait(`분해. 빈손으로 돌아가다니 정말 분해.`);
      await falcon.say_and_wait(
        `아니, 좋게 생각하면 내일 아침까지 리본을 찾을 시간은 충분해!`,
        true,
      );
      await falcon.print_and_wait(
        `초조한 마음도 겨우 가라앉아 떨어뜨렸을 만한 곳을 떠올렸다.`,
      );
      await falcon.print_and_wait(`라이브 전에는 리본이 이마에 제대로 있었다.`);
      await falcon.print_and_wait(
        `앙코르에서 양쪽 끝 관객을 모두 보려고 전에 본 인기 아이돌의 멋진 회전을 따라 했더니 시야가 뒤집혔다.`,
      );
      await falcon.print_and_wait(`아마 그때 떨어졌겠지.`);
      await falcon.print_and_wait(`누군가 주웠다면 팔코가 찾을 가능성은 낮다.`);
      await falcon.print_and_wait(`음──평소 수학 시간에 졸지만 않았어도.`);
      await you.say_as_passer_by_and_wait(`？？？`, `거기 팔코 언니야?`);
      await falcon.say_and_wait(`에에에에?`);
      await falcon.print_and_wait(
        `갑작스러운 목소리에 ${falcon.name}의 심장이 한 박자 멎고 꼬리털까지 뻣뻣해졌다.`,
      );
      await falcon.print_and_wait(
        `한밤중 오솔길에서 들리는 어린 목소리와 강변으로 천천히 다가오는 검은 그림자.`,
      );
      await falcon.say_and_wait(
        `이게 트레이너가 말한, 말 안 듣는 ${falcon.uma_sex_title}를 잡아먹는 ${falcon.uma_sex_title} 킬러?`,
        true,
      );
      await falcon.say_and_wait(`파──팔코, 팔코는 맛없어어어!`);
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `응?`,
      );
      await falcon.print_and_wait(`쿵!`);
      await falcon.print_and_wait(`그림자 옆의 덤불이 우르르 쓰러졌다.`);
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `역시 팔코 언니다!`,
      );
      await falcon.print_and_wait(
        `조금도 겁먹지 않은 작은 ${falcon.uma_sex_title}가 신이 나서 다가왔다.`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `리본을 조심스레 주머니에 넣고, 돌려주려고 몰래 나온 눈앞의 ${falcon.teen_sex_title}를 보았다.`,
      );
      await falcon.print_and_wait(`되찾았다는 안도감은 곧 자책감에 덮였다.`);
      await falcon.print_and_wait(
        `리본 때문에 통금을 어기지 않았다면 팔코는 분명 자신을 탓했을 것이다.`,
      );
      await falcon.print_and_wait(
        `칭찬받고 싶어 하는 얼굴의 ${falcon.teen_sex_title}를 보고, 적어도 팔코가 책임지고 데려다줘야겠다고 생각했다.`,
      );
      await falcon.print_and_wait(
        `${falcon.name}는 쪼그려 앉아 ${falcon.teen_sex_title}와 눈높이를 맞추려 했다.`,
      );
      await falcon.say_and_wait(
        `고마워. 팔코는 모두를 위해 ${falcon.uma_sex_title} 아이돌이 되도록 힘낼게.`,
      );
      await falcon.print_and_wait(
        `트레이너 ${falcon.uma_sex_title}이(가) 쓰다듬는 모습을 따라 하며 최대한 다정하게 웃었다.`,
      );
      await falcon.say_and_wait(`미안, 팔코는 아직 미숙하네.`, true);
      await falcon.print_and_wait(
        `마음속의 ${callname}에게 사과하자 상대는 쓴웃음을 지으며 고개를 저었다.`,
      );
      await falcon.say_and_wait(`팔코 언니가 데려다줄게.`);
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `어? 정말? 팔코 언니가 데려다주는 거야!`,
      );
      await falcon.print_and_wait(
        `눈앞의 ${falcon.teen_sex_title}는 누군가에게 도움이 된 것이 기뻐서 뛰었다. 팔코가 해 온 일과 똑같다.`,
      );
      await falcon.print_and_wait(
        `${callname}에게 얼마나 폐를 끼쳤는지 문득 깨닫자 등이 뜨거워졌다.`,
      );
      await falcon.say_and_wait(`함께 가장 빛나는 무대로 가자!`);
      await falcon.print_and_wait(
        `상한 리본을 소중히 넣고 ${falcon.teen_sex_title}의 작은 손을 살며시 잡았다.`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `데려다줘서 고마워!`,
      );
      await falcon.print_and_wait(
        `아파트 현관에서 작은 ${falcon.uma_sex_title}가 ${falcon.name}에게 감사 인사를 했다.`,
      );
      await falcon.say_and_wait(`아니야, 내가 더 고맙지.`);
      await falcon.print_and_wait(`쓴웃음을 지으며 감사를 돌려주었다.`);
      await falcon.print_and_wait(
        `작은 ${falcon.uma_sex_title}의 부모님은 출장이 잦아 매일 ${falcon.sex}는 혼자 등하교한다고 한다.`,
      );
      await falcon.print_and_wait(
        `매일 마중 갈까 물었지만 남에게 폐를 끼칠 수 없다며 거절했다.`,
      );
      await falcon.print_and_wait(`그 고집은 어릴 적 팔코와 닮았다.`);
      await falcon.say_and_wait(
        `오는 길에 약속했듯이 다시는 이런 위험한 일 하지 마! 팔코와 약속한 거야?`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `알았어!`,
      );
      await falcon.print_and_wait(
        `문으로 들어가려던 ${falcon.uma_sex_title}는 무언가 떠올랐는지 돌아서 ${falcon.name}를 보았다.`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `그러고 보니 팔코 언니, 왜 얼굴이 빨개?`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `${callname} 생각했어?`,
      );
      await falcon.print_and_wait(`아니야, 그런 사이가 아니야.`);
      await falcon.print_and_wait(
        `그렇게 대꾸하려 했지만 도저히 말이 나오지 않았다.`,
      );
      await falcon.print_and_wait(
        `달걀을 통째로 삼킨 것처럼 말이 목에 걸렸다.`,
      );
      await you.say_as_passer_by_and_wait(
        `작은 ${falcon.uma_sex_title}`,
        `내일도 팔코 언니 무대 보러 갈게!`,
      );
      await falcon.print_and_wait(`문이 눈앞에서 천천히 닫혔다.`);
      await falcon.print_and_wait(
        `작은 ${falcon.uma_sex_title}에게까지 벌써 들킨 걸까?`,
      );
      await falcon.print_and_wait(
        `${falcon.uma_sex_title} 아이돌이라는 꿈을 이루기 전까지는 사람들 앞에서 조금 거리를 두는 게 좋을까.`,
      );
      await falcon.print_and_wait(`하지만
`);
      await falcon.say_and_wait(
        `팔코는 ${callname}에게 이렇게 폐를 끼쳤던 거야?`,
      );
      await falcon.print_and_wait(
        `다음 날 작은 ${falcon.uma_sex_title}의 가족이 트레센에 ${falcon.name}가 데려다준 것에 대해 감사를 전했다. 그 때문에 ${you.name}은(는) 타즈나에게 호되게 혼났다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_21: (() => {
    const title = '트레이너실의 꽃';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      era.printButton(`드디어 끝났다.`, 1);
      await era.input();
      await era.printAndWait(
        `마지막 서류를 정리하고 ${you.name}은(는) 어깨의 짐을 내려놓은 듯 숨을 내쉬었다.`,
      );
      await you.say_and_wait(`트레이너는 정말 힘드네.`, true);
      await era.printAndWait(
        `어느새 트레이너실에 금빛 석양이 찾아와 있었다. 창밖에서 들리는 열띤 트레이닝 소리가 ${you.name}에게 트레이너 양성 학교 시절을 떠올리게 했다.`,
      );
      await era.printAndWait(
        `더트를 달리는 ${falcon.uma_sex_title} 아이돌──${falcon.name}. 아직 실감은 안 나지만 이제는 더트의 신성이다.`,
      );
      await era.printAndWait(
        `하지만 ${falcon.name}의 팬층이 날로 커지고 일정 진행은 점점 느려지는 걸 보면.`,
      );
      await era.printAndWait(`어째서인지 마음 한구석이 허전해진다.`);
      await you.say_and_wait(
        `……트레이너의 역할을 제대로 하고 있는 걸까.`,
        true,
      );
      await era.printAndWait(
        `하루에 쓸 수 있는 집중력은 한정되어 있다. 의식은 알아차릴 수 있는 범위에만 미친다.`,
      );
      await era.printAndWait(
        `모든 것을 돌보기란 거의 불가능하다. 사고를 막으려 신경을 더 쓰면 오히려 불확실함이 늘어난다.`,
      );
      await era.printAndWait(
        `텅 빈 트레이너실에 있으면 부정적인 생각이 기억 구석에서 흘러나온다.`,
      );
      await falcon.say_and_wait(`${callname}, 다녀왔어⭐`);
      await era.printAndWait(
        `${falcon.name}의 동그란 머리가 열린 문틈으로 불쑥 나왔다.`,
      );
      await you.say_and_wait(`수고했어. 오늘 트레이닝 전에 조금 쉬자.`);
      await era.printAndWait(
        `기분을 추스르려고 ${you.name}은(는) 자리에서 일어나 ${falcon.name}에게 홍차를 내주었다.`,
      );
      await era.printAndWait(
        `그리고 얌전히 앉아 있는 ${falcon.name}를 보았다.`,
      );
      await era.printAndWait(
        `평소의 ${falcon.name}와 달리 손에는 누군가에게 받은 씨앗이 들려 있다.`,
      );
      await era.printAndWait(
        `${falcon.name}는 ${you.name}의 시선을 알아차리고 귀를 움직이며 손의 작은 봉투를 흔들었다.`,
      );
      await era.printAndWait(
        `${you.name}와(과) ${falcon.name}의 노력으로 ${falcon.uma_sex_title} 아이돌이라는 개념이 드디어 퍼졌다.`,
      );
      await era.printAndWait(
        `이제 ${falcon.uma_sex_title} 아이돌이라고 하면 더트 관객들은 ${falcon.name}를 떠올린다.`,
      );
      await era.printAndWait(
        `그 덕분에 ${falcon.name}에게도 상당한 규모의 팬 모임이 생겼다.`,
      );
      await falcon.say_and_wait(`응, 상점가 언니가 줬어.`);
      await era.printAndWait(
        `많은 팬은 ${falcon.name}에게 자신의 이상을 투영한다. 그러니 도와주는 것도 당연한 걸까.`,
      );
      await era.printAndWait(
        `편지는 트레이너인 ${you.name}이(가) 골라낸 뒤 ${falcon.name}에게 보여 준다. 포장된 선물도 마찬가지다.`,
      );
      await era.printAndWait(
        `${falcon.name}는 의외로 이 점에서는 순순히 따르고 팬들도 자제하고 있다. 덕분에 지금 ${falcon.sex}의 작은 머릿속은 우울한 말에 잠겨 있지 않다.`,
      );
      era.printButton(`잘 키워 보자.`, 1);
      await era.input();
      await era.printAndWait(
        `우선 창가의 그늘에 씨앗을 심고 싹이 나면 볕 드는 곳으로 옮기자.`,
      );
      await era.printAndWait(
        `${falcon.name}가 화분을 놓은 뒤 종종걸음으로 ${you.name}의 옆에 앉았다.`,
      );
      await falcon.say_and_wait(`아, ${callname}`);
      await you.say_and_wait(`응? 팔코, 왜 그래?`);
      await falcon.say_and_wait(`……아니, 아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.name}의 귀가 팔랑이고 꼬리도 계속 소파를 두드렸다.`,
      );
      await falcon.say_and_wait(`그러고 보니 앞으로의 트레이닝 방침은──`);
      await era.printAndWait(`잡담과 트레이닝 속에서 시간이 흘렀다.`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = '이유를 알 수 없는 초조함';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await falcon.say_and_wait(`……음──`);
      await era.printAndWait(
        `${you.name}이(가) 대기실에 들어가자 조금 풀이 죽은 ${falcon.name}가 있었다.`,
      );
      await falcon.say_and_wait(`${callname}, 이번 레이스에는 손님 많이 올까?`);
      await you.say_and_wait(
        `팔코가 사츠키상에 나간 덕분에 잔디 관객들도 더트에서 빛나는 ${falcon.name}를 알아.`,
      );
      await falcon.say_and_wait(`잔디 코스에 비하면……`);
      await you.say_and_wait(
        `아직 부족하지만 팔코의 노력으로 더트에도 조금씩 인기가 붙었어.`,
      );
      await falcon.say_and_wait(`그렇구나.`);
      await falcon.say_and_wait(`팔코가 더트 레이스를 바꿀 수 있을지도!`);
      await era.printAndWait(`노력은 언젠가 결실을 맺어.`);
      era.printButton(`게다가 모두 팔코가 나오기를 기다려!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `……맞아! 관중석에서 응원하는 팬들을 위해 팔코가 골까지 단숨에 달릴게!`,
      );
      await falcon.say_and_wait(`……${callname}, 출발까지 얼마나 남았어?`);
      await era.printAndWait(
        `${you.name}은(는) 휴대폰을 ${falcon.name}에게 건넸다. 화면의 시각은 출발까지 삼십 분 남았음을 보여 주었다.`,
      );
      await falcon.say_and_wait(`그럼!`);
      await era.printAndWait(
        `${falcon.name}는 가져온 짐에서 두꺼운 포스터 뭉치를 꺼냈다.`,
      );
      await falcon.say_and_wait(`출발 전에 근처 사람들에게 팔코를 알리자!`);
      await era.printAndWait(
        `${you.name}이(가) 입을 열기도 전에 ${falcon.name}는 ${you.name}의 손목을 잡고 밖으로 달렸다.`,
      );
      await falcon.say_and_wait(`팔코! 파이팅!`);
      await era.printAndWait(
        `그 뒤 출전할 ${falcon.uma_sex_title}가 출발 직전까지 라이브를 했다는 일이 조금 화제가 되었다.`,
      );
      await era.printAndWait(
        `곧 ${minoru.name}의 무서운 미소와 다음 달 월급이 ${you.name}에게 다시는 그러지 않겠다는 맹세를 받아 냈다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = '재팬 더트 더비 이후·충만한 열기';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`대기실
`);
      await falcon.say_and_wait(`${callname}, 팔코 무대 봤어?⭐`);
      await you.say_and_wait(`현장 열기가 생각보다 엄청났어!`);
      await era.printAndWait(
        `무대 위 팔코를 보니 레이스보다 오히려 무대가 ${falcon.sex}의 본거지다.`,
      );
      await era.printAndWait(
        `수없이 연습한 스텝과 팬들과의 호응이 공연장을 달궜다.`,
      );
      await you.say_and_wait(`팔코는 아이돌로서 프로 수준이야.`);
      await era.printAndWait(
        `레이스 ${falcon.uma_sex_title}보다 ${falcon.sex}는 아이돌 쪽으로 나아가야 할까.`,
      );
      await falcon.say_and_wait(
        `팔코는 톱 아이돌을 향해 나아가니까 아이돌의 기초 중 기초도 제대로 해야 해!`,
      );
      await you.say_and_wait(`지금 다리에 감각은 있어?`);
      await era.printAndWait(
        `스파이크를 벗기고 팔코의 다리를 마사지하기 시작했다.`,
      );
      await falcon.say_and_wait(`전보다는 조금 느껴져!`);
      await you.say_and_wait(
        `팔코의 열정은 불꽃처럼 뜨겁지만 몸을 무시하면 다치기 쉬워!`,
      );
      await falcon.say_and_wait(`알았어. 앞으로도 ${callname}에게 부탁할게.`);
      await era.printAndWait(
        `무대에서 내려온 팔코는 거의 서 있지도 못해 ${you.name}이(가) 안고 대기실로 돌아왔다.`,
      );
      await you.say_and_wait(`팔코는 나비처럼 아름답네.`);
      await era.printAndWait(
        `자신을 불태워 세상을 비춘다. 여리고, 부서지기 쉽다.`,
      );
      await falcon.say_and_wait(
        `어? 나비……나비라면 ${callname}도 꽃들 속에 있어?`,
      );
      await you.say_and_wait(`팔코를 만난 건 내게 영광이야!`);
      await falcon.say_and_wait(`꺄──팔코, 잡히겠다!`);
      await you.say_and_wait(`이제 팔코는 못 도망가!`);
      await era.printAndWait(`${falcon.name}는 재팬 더트 더비를 제패했다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '합숙, 스타트!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `여름 합숙이 시작되어 ${you.name}와(과) 팔코는 여름 특훈을 위해 이사장 소유의 해변으로 왔다.`,
      );
      era.printButton('「엄청 넓은 모래사장이야!」', 1);
      await era.input();
      await era.printAndWait(`오래 흔들리며 온 보람이 드디어 있었다.`);
      await falcon.say_and_wait(`생각보다 아름다워!`);
      await falcon.say_and_wait(`……음, 먼저 팬들에게 사진을──`);
      await era.printAndWait(
        `차에서 내리자마자 기다렸다는 듯 찰칵찰칵 사진을 찍었다.`,
      );
      era.printButton(`트레이닝도 잊으면 안 돼!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `네! ${callname}은(는) 팔코의 활약을 지켜봐 줘!`,
      );
      await falcon.say_and_wait(
        `아이돌 팔코도, ${falcon.uma_sex_title}의 ${
          falcon.name
        }로서도 전부 해낼게!`,
      );
      era.printButton(`그 기세야!`, 1);
      await era.input();
      era.println();
      await falcon.say_and_wait(
        `──이상! 팔코의 첫 목표는! 근처 마을 사람들에게 팔코를 알리는 것!`,
      );
      era.printButton(`팔코, 파이팅!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `${falcon.uma_sex_title} 아이돌의 시원한 여름 라이브 작전. 이 모래사장에서 시작!`,
      );
      await era.printAndWait(
        `${you.name}와(과) ${falcon.name}가 라이브 장소를 정한 뒤 여름 합숙은 노랫소리 속에서 시작되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '축제';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`팔코, 제대로 준비하고 올게!`);
      await era.printAndWait(
        `${falcon.name}는 그렇게 말하고 서둘러 기숙사로 뛰어들었다.`,
      );
      await era.printAndWait(
        `여름 라이브의 분위기가 너무 좋아 앙코르를 더했더니 한 시간 늦게 끝났다.`,
      );
      await era.printAndWait(
        `함께 불꽃놀이를 보려던 일정은 한꺼번에 빠듯해졌다.`,
      );
      await era.printAndWait(
        `기숙사 안의 소란이 잦아든다. 불꽃놀이가 시작되기까지 한 시간도 남지 않았다.`,
      );
      await era.printAndWait(
        `올해 불꽃놀이는 마을 중심에서 열린다. 근처에서 가장 잘 보이는 곳은 마을에서 조금 떨어진 산 위다.`,
      );
      await era.printAndWait(
        `평소 걸음으로 산기슭까지 삼십 분, 올라가는 데 다시 십오 분. 생각하니 초조해진다.`,
      );
      await falcon.say_and_wait(`기다렸지!`);
      await era.printAndWait(`드디어 왔네.`);
      await era.printAndWait(
        `그렇게 말하려 했지만 유카타로 갈아입은 ${falcon.name}는 평소보다 귀여웠다.`,
      );
      await era.printAndWait(
        `입술이 바짝 마르고 심장이 갑자기 빨라지며 이마에도 땀이 맺혔다.`,
      );
      await falcon.say_and_wait(`이 옷, 안 어울려?`);
      await era.printAndWait(
        `분홍색 유카타를 입은 ${falcon.name}는 유연한 자태를 아낌없이 드러냈고 멀리서 보면 한 송이 꽃처럼 사랑스러웠다.`,
      );
      await you.say_and_wait(
        `팔코가 가장 빛나는 우마무스메가 아니라면 세상 누구도 그 칭호를 쓸 수 없겠지.`,
      );
      await falcon.say_and_wait(
        `${callname}이(가) 그렇게 말하니까 팔코는 조금 부끄러워.`,
      );
      await era.printAndWait(`${falcon.name}는 부끄러운 듯 고개를 숙였다.`);
      await you.say_and_wait(
        `첫 번째는 늦겠지만 두 번째는 아직 볼 수 있다.`,
        true,
      );
      await falcon.say_and_wait(`${callname}, 팔코 손잡아 줄래?`);
      era.printButton(`팔코의 손을 잡는다`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 작은 손을 손안에 감쌌다. 팬들 앞에서 빛나던 평소 모습보다 조금 더 고운 매력이 느껴진다.`,
      );
      await falcon.say_and_wait(`팔코가 꼭 잡고 있을게?`);
      await era.printAndWait(`응?`);
      await falcon.say_and_wait(`아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.name}는 몰래 입을 가리고 웃은 뒤 ${you.name}의 걸음에 맞췄다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `축제 장소는 여러 곳이지만 가장 전망이 좋은 곳은 마을에서 떨어진 신사다.`,
      );
      await era.printAndWait(
        `신사로 가려면 긴 돌계단을 올라야 한다. 그래서 다른 곳보다 사람이 조금 적다.`,
      );
      await falcon.say_and_wait(`${callname}, 서두르지 않으면 시작하겠어!`);
      await era.printAndWait(
        `${you.name}보다 한 계단 높은 곳에 서서 ${falcon.name}는 조금 앞의 산허리를 보았다.`,
      );
      await you.say_and_wait(`팔코, 기다려. 너무 빨라. 잠깐만 쉬자.`);
      await era.printAndWait(
        `${falcon.name}에게는 끝없는 기운이 있는 모양이다. 처음에는 ${you.name}이(가) ${falcon.sex}의 손을 이끌었지만 조금 걷자 곧 ${falcon.sex}가 ${you.name}을(를) 끌며 계속 돌계단을 올랐다.`,
      );
      await falcon.say_and_wait(`${callname}의 체력은 생각보다 약하네!`);
      await era.printAndWait(`우마무스메는 삼여신의 총아라고 해야 할까.`);
      await era.printAndWait(
        `인간은 체력을 다 쓸 만한 길도 우마무스메에게는 준비 운동도 안 될 것이다.`,
      );
      await era.printAndWait(
        `숨을 고르며 주위를 보니 신사로 향하는 길에는 사람이 거의 없다. 축제 음악도 끝나 가고 곧 불꽃놀이가 시작된다.`,
      );
      await you.say_and_wait(
        `팔코와 함께 불꽃놀이 시작을 못 보는 건 조금 아쉽네.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 조금 아쉬운 듯 ${falcon.name}에게 말했다.`,
      );
      await falcon.say_and_wait(
        `${callname}, 그렇게 팔코랑 불꽃놀이 보고 싶어?`,
      );
      await era.printAndWait(
        `${falcon.name}의 목소리에는 말로 표현하기 힘든 묘한 울림이 있었다.`,
      );
      era.printButton(`팔코와 함께 그 순간을 간직하고 싶어.`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 생각한 뒤 솔직하게 ${falcon.sex}에게 전했다.`,
      );
      await falcon.say_and_wait(`그럼 팔코를 꼭 잡아!`);
      await era.printAndWait(
        `가느다란 ${falcon.teen_sex_title}가 ${you.name}을(를) 끌어당겼다.`,
      );
      await falcon.say_and_wait(`이대로 돌계단을 단숨에 올라갈 거야! 

`);
      await era.printAndWait(
        `그 감각은 설명하기 어렵다. 마을에서 파는 매운 국물을 얼굴에 몽땅 뒤집어쓴 것처럼 바람이 베는 아픔과 심장에 가해지는 강한 압박 때문에 ${you.name}은(는) 거의 공포에 빠졌다.`,
      );
      await era.printAndWait(
        `그래도 지옥 같은 경험은 예상보다 빨리 끝났다.${falcon.name}가 ${you.name}의 어깨를 살짝 흔들 때까지 산허리에 도착한 줄도 몰랐다.`,
      );
      await era.printAndWait(
        `왜 길에서 우마무스메를 타고 출퇴근하는 사람이 없는지 문득 알게 되었다.`,
      );
      await falcon.say_and_wait(`${callname}, 불꽃놀이 시작했어!`);
      await era.printAndWait(
        `펑, 펑, 불꽃이 밤하늘을 밝히며 불꽃놀이가 본격적으로 시작되었다.`,
      );
      await era.printAndWait(
        `하늘에 피어나는 불꽃은 이 축제 무대의 앙코르이기도 할 것이다.`,
      );
      await era.printAndWait(
        `문득 ${you.name}은(는) 더트를 달리는 ${falcon.name}를 떠올렸다.`,
      );
      await era.printAndWait(`불꽃처럼 금세 사라질지도 모른다.`);
      await era.printAndWait(`그렇게 생각하니 조금 쓸쓸하다.`);
      await falcon.say_and_wait(
        `아름다워! 팔코가 톱 아이돌이 되는 순간에는 이것보다 어울리는 게 없겠지!`,
      );
      await era.printAndWait(
        `${you.name}의 옆에 선 ${falcon.name}는 불꽃에 타오르는 듯한 주황빛으로 물들었다.`,
      );
      era.printButton(`내년에도 함께 불꽃놀이 보자.`, 1);
      await era.input();
      await era.printAndWait(
        `하늘에 꽃이 줄지어 피어나며 불꽃놀이도 끝나 간다.`,
      );
      await you.say_and_wait(`그때는 지금보다 훨씬 더 빛날 거야!`);
      await era.printAndWait(`${falcon.name}은(는) ${you.name}을(를) 보았다.`);
      await falcon.say_and_wait(`응! 그때도 잘 부탁해!`);
      await era.printAndWait(
        `가장 아름다운 불꽃이 ${you.name}의 눈앞에서 피어났다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙 종료·더 큰 무대로';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`하아! 하아! 하아!`);
      await you.say_and_wait(`팔코, 파이팅!`);
      await falcon.say_and_wait(`하아아아아!`);
      await era.printAndWait(
        `지칠 대로 지친 몸을 이끌고 골을 향한 팔코는 마침내 천천히 멈췄다.`,
      );
      await you.say_and_wait(`수고했어.`);
      await era.printAndWait(
        `준비한 수건을 팔코에게 건네고 종이에 마지막 줄을 적었다.`,
      );
      await falcon.say_and_wait(
        `여름 합숙에서 배운 요령을 살려 레이스에서 더 많은 팬에게 팔코의 반짝임을 보여 줄게⭐`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}하지만 트레이닝과 마을 라이브를 병행하는 건 이미 한계일 것이다. 그런데 ${falcon.uma_sex_title}는 잠깐 쉬었을 뿐인데 라이브 준비를 시작했다.`,
      );
      era.printButton(`너무 힘들지 않아?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `다른 ${falcon.uma_sex_title}와 비교하면 팔코의 특징은 활기찬 점일지도.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌인 ${falcon.name}는 마을의 작별 라이브에 초대받았다.`,
      );
      await era.printAndWait(
        `이 마을에서 새로 사귄 팬과 친구들을 위해서라도 지칠 대로 지쳤지만 전력을 다해야 한다.`,
      );
      await you.say_and_wait(
        `오늘 밤 라이브는 팬들에게 평생 한 번뿐인 무대야!`,
      );
      await era.printAndWait(`적어도 트레이너로서 할 일은 하자.`);
      await falcon.say_and_wait(
        `${callname}에게도 그렇구나……팔코는 지금 에너지 가득해!`,
      );
      era.drawLine({ content: 'ライブ終了後' });
      await falcon.say_and_wait(`~~~~♪ 고마워요, 여러분!`);
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await era.printAndWait(
        `근처 마을에서 연 라이브는 의외로 인기였다. 팔코가 공연한다는 말을 듣고 세 시간이나 운전해 온 팬도 있었다.`,
      );
      await era.printAndWait(
        `많은 사람에게는 무대 자체보다 더트 아이돌인 ${falcon.name}를 직접 보는 것이 진짜 목적일 것이다.`,
      );
      await falcon.say_and_wait(
        `응, 응! 여러분의 목소리가 팔코 귀에 닿았어요! 팔코는 기뻐요!`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `한 곡 더! 팔코! 한 곡 더!`);
      await falcon.say_and_wait(`그럼 한 곡 더……`);
      await era.printAndWait(
        `${falcon.name}는 ${you.name}의 시선을 알아차렸다.`,
      );
      await falcon.say_and_wait(
        `아하하……벌써 늦었고 멀리서 팔코 라이브를 보러 와 준 팬도 있어요……${falcon.uma_sex_title}아이돌인 팔코는 한 분 한 분을 생각해야 해요. 그러니까 미안해요!`,
      );
      await falcon.say_and_wait(
        `하지만 좋은 소식! 이번 라이브는 팔코의 트레이너에게 부탁해서 우마스타와 동영상 사이트에 올려 뒀어요!`,
      );
      await falcon.say_and_wait(`팔코의 반짝임을 언제든 다시 봐 주세요❤`);
      await falcon.say_and_wait(`그럼! 구호, 시작할게요!`);
      await falcon.say_and_wait(`팔코가 도주하면?`);
      await you.say_as_passer_by_and_wait(`팬`, `쫓아갈 수밖에!`);
      await falcon.say_and_wait(`계속 쫓아올 건가요?`);
      await you.say_as_passer_by_and_wait(`팬`, `지평선의 큰 무대까지!`);
      await falcon.say_and_wait(`고마워⭐`);
      await era.printAndWait(
        `현장의 팬들이 흩어지자 무대에는 ${you.name}와(과) ${falcon.name}만 남았다.`,
      );
      era.printButton(`정말 좋았어.`, 1);
      await era.input();
      await era.printAndWait(`${falcon.name}는 만족스러운 표정을 지었다.`);
      await era.printAndWait(
        `무대에서 뛰던 두 다리는 ${you.name}이(가) ${falcon.sex}를 살며시 안은 순간 망가진 인형처럼 땅으로 무너졌다.`,
      );
      await falcon.say_and_wait(`……매일이 지금 같으면 좋겠어.`);
      await era.printAndWait(`그래도 ${falcon.sex}의 눈은 여전히 빛났다.`);
      await falcon.say_and_wait(`이 기세라면 팔코도 그 벽을 넘을 수 있을지도!`);
      await era.printAndWait(
        `${falcon.name}가 있기에 잔디만 보던 관객들도 조금씩 이쪽으로 눈을 돌리기 시작했다.`,
      );
      await you.say_and_wait(`분명 할 수 있어!`);
      await era.printAndWait(
        `${you.name}의 말을 들은 ${falcon.name}는 관중석을 보았다.`,
      );
      await falcon.say_and_wait(`이렇게 한 걸음씩 가장 높은 무대로.`);
    };
    f.title = title;
    return f;
  })(),
  we_47_39: (() => {
    const title = '망우초';
    /**
     * 萱草＝忘れ草。悩みを忘れる意
     * 過剰摂取は中毒の恐れ
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`상점가의 게릴라 라이브
`);
      await falcon.say_and_wait(`~~~♪ 여러분, 수고하셨어요!`);
      await era.printAndWait(
        `더트를 무대로 가장 앞에서 계속 빛나는 ${falcon.uma_sex_title} 아이돌──${falcon.name}는 이제 화제의 중심이다.`,
      );
      await era.printAndWait(
        `${falcon.name}의 활약을 직접 보려고 일부러 표를 사서 오는 사람도 많다.`,
      );
      await era.printAndWait(
        `과장하면 더트＝${falcon.name}가 거의 현실이 되어 가고 있다.`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await era.printAndWait(
        `……명성이 커질수록 시련도 커진다.${falcon.name}가 원해서 홍보 활동을 다니는 거지만 바쁠 때는 트레이닝까지 멈추니 ${you.name}에게는 웃을 일이 아니다.`,
      );
      await you.say_and_wait(
        `……지금 계약이 끝나면 팔코와 제대로 이야기해야겠다.`,
      );
      await era.printAndWait(
        `${falcon.name}의 의지를 존중한다고 해도 이것을 자유라고 할 수 있을까.`,
      );
      await you.say_as_passer_by_and_wait(
        `열성팬 A`,
        `매일 일하느라 지치지만! 팔코의 무대를 보면 피로가 사라져!`,
      );
      await you.say_as_passer_by_and_wait(
        `열성팬 B`,
        `팔코가 광고한 굿즈는 전부 모았어! 행동으로 응원하는 거라면 팔코를 향한 내 사랑이 가장 깊어!`,
      );
      await you.say_as_passer_by_and_wait(
        `열성팬 C`,
        `웃기지 마! 난 팔코가 데뷔하기 전부터 응원한 원조 팬이야! 지금은 주머니가 가볍지만……팔코를 향한 사랑은 너희보다 강해!`,
      );
      await era.printAndWait(
        `팬들이 당신을 『아이돌 프로듀서』라고 부를 만큼 본업은 거의 잊혔다. 점점 뜨거워지는 팬층을 보며 가슴속 걱정은 깊어진다.`,
      );
      await you.say_and_wait(
        `……요즘 사람들은 마음을 의지할 곳을 점점 더 강하게 찾는 건지도 모른다.`,
      );
      await era.printAndWait(`일단 그 이유로 자신을 위로했다.`);
      await era.printAndWait(
        `조금 떨어진 무대에서 팬들과 교류하는 ${falcon.teen_sex_title}를 본다. 정신적으로도 이미 한계일 것이다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = '팔코의 결단';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`상점가 광장
`);
      await falcon.say_and_wait(`언제나 말없이 팔코를 응원해 줘서 고마워요⭐`);
      await falcon.say_and_wait(
        `이건 팔코가 어젯밤 내내 만든 작은 선물이에요. 팔코의 마음을 받아 주세요❤`,
      );
      await era.printAndWait(
        `${you.name}와(과) ${falcon.name}의 홍보가 이어지며 찾아오는 사람이 늘었다. 작은 잔디밭은 이제 수많은 사람에게 둘러싸여 있다.`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await era.printAndWait(
        `사람들에게 둘러싸인 것은 ${falcon.uma_sex_title} 아이돌의 길을 걷는 ${falcon.name}다.`,
      );
      await era.printAndWait(
        `인기는 아직 잔디의 스타 아이돌에 못 미친다. 하지만 더트 팬들이 라이브에 오는 열정은 잔디 팬들을 훨씬 뛰어넘는다.`,
      );
      await era.printAndWait(
        `이유는 간단하다. 잔디 팬들에게는 같은 시기에 선택할 유명 레이스 ${falcon.uma_sex_title}가 여럿 있다. 더트 전문 ${falcon.uma_sex_title} 아이돌로 인기와 실력을 겸비한 ${falcon.name}는 ${falcon.sex}뿐이다.`,
      );
      await era.printAndWait(
        `${falcon.name}가 받는 압박이 얼마나 클지 짐작할 수 있다.`,
      );
      await era.printAndWait(`렌즈 아래로 모인 햇빛 같다.`);
      await you.say_and_wait(
        `${falcon.name}, 요즘 잠자는 시간이 점점 줄었어. 정말 괜찮아?`,
      );
      await era.printAndWait(
        `최근 트레이너실은 ${falcon.name}의 낮잠 장소가 되었다. 그것도 당신이 억지로 재워서다.`,
      );
      await era.printAndWait(
        `트레이닝, 아이돌 활동, 팬레터 답장(당신의 확인을 거쳐), 다음 게릴라 라이브 준비.`,
      );
      await era.printAndWait(
        `복잡한 일정이 ${falcon.sex}의 정신력을 크게 소모하고 있다.`,
      );
      await falcon.say_and_wait(`……그리고! 팔코에게 좋은 소식이 있어요!`);
      await falcon.say_and_wait(
        `팔코는 다음 JBC 클래식과 도쿄 대상전에 나가기로 했어요!`,
      );
      await you.say_as_passer_by_and_wait(
        `팬`,
        `앞으로도 팔코의 활약을 볼 수 있겠네! 최고야!`,
      );
      await falcon.say_and_wait(
        `다음 레이스에서도 팔코는 계속 빛날 거예요! 꼭 현장에서 봐 주세요!`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `꼭 갈게!`);
      await falcon.say_and_wait(`고마워⭐`);
      await era.printAndWait(
        `마지막 팬이 떠난 뒤 당신은 조금 떨어진 곳에서 ${falcon.name}에게 걸어갔다.`,
      );
      era.printButton(`수고했어.`, 1);
      await era.input();
      await era.printAndWait(
        `뒷정리란 구경꾼이 남긴 쓰레기를 모두 쓸어 담는 것이다.`,
      );
      await era.printAndWait(
        `처음에 ${falcon.name}는 직접 청소하겠다고 했지만 이미 한계일 거라며 당신이 강하게 말렸다.`,
      );
      await falcon.say_and_wait(`……${callname}？`);
      await era.printAndWait(
        `나무 그늘에서 졸던 평소의 지친 ${falcon.name}와는 다르다.${falcon.sex}의 메마른 눈이 당신을 똑바로 보고 있다.`,
      );
      await falcon.say_and_wait(
        `팔코는 합격점을 받을 만한 ${falcon.uma_sex_title} 아이돌이 되었어?`,
      );
      await you.say_and_wait(
        `${falcon.uma_sex_title} 아이돌로서는 세상에 하나뿐인 존재야.`,
      );
      await falcon.say_and_wait(
        `……조금만 더 힘내면 돼. 그러니까 ${callname}, 안심해!`,
      );
      await era.printAndWait(
        `……${falcon.sex}의 눈은 당신이 아니라 뒤에 있는 무언가를 보고 있었다.`,
      );
      await falcon.say_and_wait(
        `팔코는 혼자가 싫어. 그러니까 무슨 일이 있어도 가장 큰 무대에서 빛나고 싶어.`,
      );
      await falcon.say_and_wait(`……불꽃처럼 싫은 밤을 찢고.`);
      await falcon.say_and_wait(`팔코 같은 더 많은 사람에게 답을 전하고 싶어.`);
      await era.printAndWait(
        `그렇게 말하는 동안 ${falcon.sex}의 눈에서 눈물이 떨어졌다.`,
      );
      await falcon.say_and_wait(`팔코가 노력할 수 있는 곳은 더트뿐인데.`);
      await falcon.say_and_wait(`……사츠키상 같은 큰 무대에 다시 서고 싶어.`);
      await era.printAndWait(
        `그러고는 지칠 대로 지친 ${falcon.teen_sex_title}는 눈을 감았다.`,
      );
      await era.printAndWait(
        `트레이너인 자신이 담당 ${falcon.uma_sex_title}를 이 지경으로 몰아넣었다면 이미 제 역할을 못 한 것이다.`,
      );
      await era.printAndWait(
        `담당의 의견을 존중한다는 말도 책임에서 도망치기 위한 변명일 뿐이다.`,
      );
      await era.printAndWait(`어느 때보다 자신의 나약함이 밉다.`);
      await you.say_and_wait(`……이대로는 안 돼.`);
      await era.printAndWait(
        `소중한 ${falcon.teen_sex_title}를 조심스레 안아 올렸다. 팔에 느껴지는 무게가 트레이너의 역할이 지닌 무게다.`,
      );
      await you.say_and_wait(`……적어도 트레이너의 책임은 다하자.`);
      await era.printAndWait(`각오를 다지자 팔 근육은 아팠지만 마음은 풀렸다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '결단의 대가';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `11월의 날씨와 달리 ${falcon.name}의 아이돌 활동 중단 보도는 뜨겁게 달아올랐다.`,
      );
      await era.printAndWait(
        `레이스에서도 무대에서도 한순간도 빛을 잃지 않기로 유명한 ${falcon.name}가 마침내 한계에 도달했다.`,
      );
      await era.printAndWait(`적어도 외부에는 그렇게 설명하고 있다.`);
      await era.printAndWait(
        `갑작스러운 사건에 당사자들은 입을 다물었다. 그 탓에 이야기는 점점 현실에서 멀어졌다.`,
      );
      await era.printAndWait(
        `너무 황당한 소문을 빼면 현재 주된 이야기는 두 가지다.`,
      );
      await era.printAndWait(`${falcon.name}에게 연인이 생겨 곧 은퇴한다.`);
      await era.printAndWait(
        `${falcon.name}는 다리에 심각한 부상을 입어 입원 중이며 완치 가능성은 낮고, 앞으로 무대에서 사라질지도 모른다.`,
      );
      await era.printAndWait(`어느 쪽이든 아이돌 활동에는 치명적인 타격이다.`);
      await you.say_and_wait(`결정한 이상 되돌릴 수 없다.`);
      await era.printAndWait(
        `당분간 아이돌 활동을 쉬겠다고 알린 뒤 예상했던 다툼은 일어나지 않았다.${falcon.sex}는 그 사실을 조용히 받아들였다.`,
      );
      await era.printAndWait(
        `……하지만 자신의 독단으로 ${falcon.sex}가 성장할 기회를 빼앗은 것일지도 모른다.`,
      );
      await era.printAndWait(
        `자신의 주장으로 이렇게 무거운 결과를 낳았다면, 돌아보았을 때 이 결정은 옳았을까.`,
      );
      await you.say_and_wait(
        `……결국 옳았는지는 모르겠다. 난 옳다고 생각한 일을 했을 뿐이다.`,
      );
      await era.printAndWait(`그 대가를 치르게 되더라도.`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `아, 안녕하세요. ${falcon.name}의 ${callname} 맞으시죠?`,
      );
      await era.printAndWait(
        `어느새 복도에 있던 남자가 마침내 먹잇감을 찾은 듯 눈을 빛내며 빠르게 다가왔다. 이상하다. 이번 일정은 아무에게도 알리지 않았을 텐데.`,
      );
      await you.say_and_wait(
        `맞습니다. 무슨 일이시죠? 팔코 사인이라면 죄송하지만 ${falcon.sex}는 방금 내려갔습니다.`,
      );
      await era.printAndWait(
        `……그러고 보니 이 방은 가장 안쪽이다.${falcon.name}를 찾았다면 오는 길에 마주쳤을 것이다.`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `아……죄송합니다. 개인적인 호기심입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `팔코보다 ${falcon.sex}의 트레이너 쪽에 관심이 있어서요.`,
      );
      await era.printAndWait(`무언가 숨기듯 마스크와 장갑까지 끼고 있다. ?`);
      await you.say_and_wait(`……아니, 뭔가 잘못됐다.`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}의 팬`,
        `그대로 지옥에 떨어져!`,
      );
      await era.printAndWait(`아무 예고도 없이 하얀 빛이 번뜩였다.`);
      await you.say_and_wait(`윽.`);
      await era.printAndWait(
        `팬의 보복은 생각했지만 이렇게 과격할 줄은 몰랐다.`,
      );
      await era.printAndWait(
        `머리는 아직 눈앞의 비현실적인 사건을 처리하고 있었다.`,
      );
      await era.printAndWait(
        `그래서 당신은 그 자리에 멍하니 서서 배로 꽂혀 드는 칼을 보고 있었다.`,
      );
      await era.printAndWait(`그대로 아무것도 못 한 채 끝을 맞는다.`);
      await you.say_and_wait(`윽!`);
      await era.printAndWait(`──무의식중에 서류 가방으로 막지 않았다면.`);
      await era.printAndWait(`칼은 가죽 가방에 깊은 상처를 남겼다.`);
      await you.say_as_passer_by_and_wait(`광적인 팬`, `젠장.`);
      await era.printAndWait(
        `그래도 갑작스러운 충격에 저절로 고개가 들리고 엉덩방아를 찧을 뻔했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `광적인 팬`,
        `팔코는 그렇게 완벽한데 왜 너 따위를 좋아하는 거지?`,
      );
      await era.printAndWait(`감촉이 다름을 알아차린 폭도는 실패에 격분했다.`);
      await you.say_as_passer_by_and_wait(
        `광적인 팬`,
        `울부짖으며 그대로 지옥으로 떨어져!`,
      );
      await era.printAndWait(
        `칼도 빼지 않고 그 기세로 벽까지 몰아붙이려 한다.`,
      );
      await you.say_and_wait(`젠장, 도망칠 곳이 없다.`);
      await era.printAndWait(
        `칼도 빼지 않은 채 디딜 곳을 잃은 당신을 벽까지 몰아붙였다.`,
      );
      await you.say_as_passer_by_and_wait(
        `광적인 팬`,
        `그 풋풋하고 섬세한 팔코가 왜 갑자기 활동을 쉬겠어──`,
      );
      await era.printAndWait(
        `이성이 분노에 녹아 버렸는지 팬은 더 격앙되어 칼을 앞으로 밀었다.`,
      );
      await you.say_as_passer_by_and_wait(`광적인 팬`, `──그렇군, 알겠어.`);
      await era.printAndWait(
        `잠시 망설이던 광신자는 깨달았다는 듯 고개를 끄덕였다.`,
      );
      await you.say_as_passer_by_and_wait(
        `광적인 팬`,
        `네가 있어서 우리 팔코가 이렇게 된 거야.`,
      );
      await you.say_as_passer_by_and_wait(
        `광적인 팬`,
        `네가 없어지면 팔코도 원래대로 돌아오겠지?`,
      );
      await era.printAndWait(
        `아드레날린이 솟구친 당신은 눈앞의 절망을 보고 있었다.`,
      );
      await era.printAndWait(
        `아랫배에 옅은 저림이 퍼졌다. 누군가 배에 얼음을 밀어 넣은 듯했다. 방패 삼은 서류철 아래로 미끄러진 칼은 분명 목표에 닿았다.`,
      );
      await you.say_as_passer_by_and_wait(`광적인 팬`, `쳇.`);
      await era.printAndWait(
        `원래 심장을 노린 일격이었다. 가방에 막히자 차선으로 배를 노렸다.`,
      );
      await you.say_and_wait(
        `알려 주세요. 왜 ${falcon.name}는 아직 돌아오지 않나요?`,
      );
      await era.printAndWait(`압도적으로 불리한 상황에서 오히려 냉정해졌다.`);
      await era.printAndWait(
        `거센 심장 박동, 눈처럼 사라지는 체력, 거의 마비된 몸. 당신은 어느 때보다 집중해 돌파구를 찾았다.`,
      );
      await you.say_as_passer_by_and_wait(
        `광적인 팬`,
        `……너 같은 용서받지 못할 놈에게 설명할 필요 없어.`,
      );
      await you.say_and_wait(`지금이다!`, true);
      await era.printAndWait(
        `조금 전까지의 대화는 상대를 방심시키기 위한 것이었다. 대화를 생각하게 해 몸을 지키는 데 소홀해지도록.`,
      );
      await era.printAndWait(
        `반대로 완전히 화를 돋울 수도 있다. 하지만 지금은 통할 가능성에 걸어야 한다.`,
      );
      await era.printAndWait(
        `기습이 성공해 잠깐 방심한 상대의 사타구니를 당신은 힘껏 걷어찼다.`,
      );
      await you.say_as_passer_by_and_wait(`광적인 팬`, `아아아아아아!`);
      await era.printAndWait(
        `고통이 감각을 되살렸는지 상대의 손이 순간 느슨해졌다.`,
      );
      await you.say_and_wait(`지금이다!`, true);
      await era.printAndWait(
        `상대가 괴로워하며 몸을 굽힌 틈에 서류 가방을 힘껏 내리쳤다.`,
      );
      await you.say_as_passer_by_and_wait(`광적인 팬`, `윽──`);
      await era.printAndWait(`손에 남은 저림을 보니 상당히 묵직한 타격이었다.`);
      await you.say_as_passer_by_and_wait(`광적인 팬`, `……한 발짝만 더였는데!`);
      await era.printAndWait(
        `퇴로 없이 간신히 선 악마는 언제 쓰러져도 이상하지 않다.`,
      );
      await era.printAndWait(`하지만 당신의 상태는 더 나쁘다.`);
      await you.say_and_wait(`이걸로 끝인가?`, true);
      await era.printAndWait(`어지럼이 눈처럼 쏟아진다.`);
      await era.printAndWait(
        `혀끝을 깨물어 격통으로 잠시 정신을 붙잡고 온 힘을 다해 가방을 던졌다.`,
      );
      await era.printAndWait(
        `첫 공격은 상대가 얼굴을 돌려 피했다. 곧바로 ${you.name}은(는) 몸을 무기 삼아 정면으로 들이받았다.`,
      );
      await era.printAndWait(
        `상대의 뒤통수가 유리 탁자에 세게 부딪혔고 그대로 완전히 의식을 잃었다.`,
      );
      await you.say_and_wait(`구급차를 불러야 해.`, true);
      await era.printAndWait(
        `온 힘을 다해 전화를 마친 뒤 ${you.name}도 의식을 잃었다.`,
      );
      await era.printAndWait(`${you.name}의 시야가 서서히 흐려졌다.`);
      await era.printAndWait(`멀어지는 의식이 마지막으로 본 것은──`);
      await era.printAndWait(`새 시대의 배를 놓친 승객이었다.`);
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_c: (() => {
    const title = '초조함의 시작';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `JBC 클래식의 관중은 예년에는 이만 명을 넘지 않았다.`,
      );
      await era.printAndWait(`하지만 `);
      await falcon.say_and_wait(
        `${callname}, 출발 전에 이 전단지를 다 나눠 줘야 해!`,
      );
      await era.printAndWait(
        `팔코의 노력 덕분에 오가는 팬들이 끊이지 않는다?!`,
      );
      await you.say_and_wait(`팔코라면 정말 해낼지도?`);
      await era.printAndWait(
        `팔코의 몸을 계속 걱정하던 ${you.name}의 가슴에도 비현실적인 기대가 싹트기 시작했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `행인 A`,
        `어? 이 근처에서 레이스가 열려?`,
      );
      await you.say_as_passer_by_and_wait(
        `행인 B`,
        `더트 레이스? 관심 없……${falcon.name}가 나온다고?`,
      );
      await you.say_as_passer_by_and_wait(
        `행인 C`,
        `${falcon.name}? 우마스타에서 화제인 그 애?`,
      );
      await you.say_as_passer_by_and_wait(`행인 A`, `잠깐만.`);
      await era.printAndWait(
        `어느새 전단지는 서로 가져가려는 사람들 손에 동났다.`,
      );
      await falcon.say_and_wait(`팔코, 생각보다 인기가 많을지도……`);
      await falcon.say_and_wait(
        `전에는 이만큼 나눠 주려면 오전 내내 걸렸는데.`,
      );
      await era.printAndWait(
        `그렇게 말하면서도 ${falcon.name}의 미소는 멈추지 않았다.`,
      );
      await falcon.say_and_wait(
        `팔코는 벌써 생각보다 인기인이 된 건지도 몰라.`,
      );
      await you.say_and_wait(`모두 팔코를 보고 있어.`);
      await falcon.say_and_wait(`응. 늘 응원해 주는 모두를 위해.`);
      await falcon.say_and_wait(`팔코는 2000% 노력해서 우승할 거야!`);
      await era.printAndWait(
        `보이지 않는 기운의 물결이 ${falcon.name}를 감쌌다.`,
      );
      await falcon.say_and_wait(`가만히 못 있겠어. 지금 가자!`);
      await you.say_and_wait(`아직 출발 전이야.`);
      await era.printAndWait(
        `말이 끝나기도 전에 ${falcon.name}는 전화를 끊었다.`,
      );
      await falcon.say_and_wait(`이제 ${callname}을(를) 깜짝 놀라게 할 거야!`);
      await era.printAndWait(
        `${falcon.name}는 결심하고 레이스장으로 달려갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_c: (() => {
    const title = 'JBC 클래식 이후·과부하';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`팔코는 압도적인 차이로 승리했다.`);
      await era.printAndWait(`도주하는 팔코가 레이스 전체의 흐름을 장악했다.`);
      await era.printAndWait(
        `이어진 위닝 라이브에서도 ${falcon.sex}는 모든 힘을 쏟아부었다.`,
      );
      await era.printAndWait(`하지만──`);
      await you.say_as_passer_by_and_wait(
        '의사',
        '큰 이상은 없습니다. 너무 지쳐 의식을 잃었을 뿐입니다.',
      );
      await you.say_as_passer_by_and_wait(
        '의사',
        `당신이 ${falcon.name}의 트레이너시죠? 왜 ${falcon.sex}를 제대로 쉬게 하지 않았습니까?`,
      );
      await you.say_and_wait(`죄송합니다. 전부 제 탓입니다.`);
      await you.say_as_passer_by_and_wait('의사', '더는 무리시키지 마세요.');
      await you.say_and_wait(`감사합니다.`);
      await era.printAndWait(
        `병상에 누운 ${falcon.name}를 보며 자리에 앉은 ${you.name}은(는) 주먹을 쥐었다.`,
      );
      era.drawLine();
      await you.say_and_wait(`팔코! 정신 차려, 팔코!`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「조금 전까지 무대에서는 기운찼는데 승강기에서 내려오더니──」`,
      );
      await you.say_and_wait(`구급차! 구급차는 어디 있죠?`);
      await you.say_as_passer_by_and_wait(
        '담당자',
        '구급차는 이미 불렀습니다.',
      );
      await you.say_as_passer_by_and_wait(
        '담당자',
        '일단 의무실로 옮겨 주세요.',
      );
      await falcon.say_and_wait([
        { content: `${callname}？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(
        `팔코를 조심스레 업고 담당자가 알려 준 대로 의무실로 달렸다.`,
      );
      era.printButton(`너에게 무슨 일이라도 생기면 나도 `, 1);
      await era.input();
      await falcon.say_and_wait([
        { content: `${callname}, 맞지?`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(`팔코가 무언가 말하는 것 같다.`);
      await era.printAndWait(
        `의무실로 달려간 뒤의 일은 잘 기억나지 않는다. 팔코가 구급차로 옮겨지는 모습 말고는.`,
      );
      await falcon.say_and_wait(`${you.actual_name}！`);
      era.drawLine();
      await era.printAndWait(
        `눈앞의 ${falcon.teen_sex_title}는 커다란 눈으로 ${you.name}을(를) 보고 있었다.`,
      );
      await era.printAndWait(
        `땀에 젖은 작은 손이 ${you.name}의 소매를 놓지 않았다.`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`어느새 시야가 흐려졌다.`);
      await you.say_and_wait(`팔코……다행이야.`);
      await era.printAndWait(`${falcon.name}가 무사하면 그것으로 됐다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_42: (() => {
    const title = '수선화';
    /**
     * 好きになればなるほど、「耐えられないやり方」の定義は厳しくなる。何かをする動力も強くなる。
     * 何もしないことは、自分にとって苦痛だ。奥底には二重の裏切りがある——好きな相手を裏切った感覚と、自分の好きそのものを裏切った感覚。
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`팬에게 습격당한 지 일주일이 지났다.`);
      await era.printAndWait(
        `사건의 중심에 있던 당신과 ${falcon.name}의 안전을 고려해`,
      );
      await era.printAndWait(`학원은 당분간 외출을 제한하기로 했다.`);
      await era.printAndWait(`……어떤 의미에서는 구원이기도 하다.`);
      await era.printAndWait(
        `잊자고 속으로 되뇌어도 그 공허한 얼굴이 저절로 떠오른다.`,
      );
      await you.say_and_wait(`존재의 불안인가.`, true);
      await era.printAndWait(
        `어떤 각도에서 봐도 영점이다. 기술도 경력도 공백이니 처음부터 입장 자격이 없다.`,
      );
      await era.printAndWait(
        `처음에는 이 길이 맞지 않나 보다 하고 다른 분야로 도망칠 수 있었다.`,
      );
      await era.printAndWait(`새 업계에서도 똑같은 궁지에 부딪히기 전까지는.`);
      await era.printAndWait(`돌아보니 그저 몇 년을 허비했을 뿐이었다.`);
      await era.printAndWait(
        `뜨거운 열정으로 무언가 하고 싶었을지도 모른다. 현실 앞에서 자신은 아무것도 할 수 없음을 인정해야 했다.`,
      );
      await era.printAndWait(
        `현실에 굴복하지 않는 사람에게 자신의 존재를 증명하는 것은 목숨보다 중요하다.`,
      );
      await era.printAndWait(
        `존재감이 없다면 생명은 아무 표시도 결과도 없이 에너지만 소모하는 과정일 뿐이다.`,
      );
      await era.printAndWait(`그때 스포트라이트 아래 설 기회가 생긴다면.`);
      await era.printAndWait(`그것이 당신들에게 큰 상처를 주더라도.`);
      await era.printAndWait(`미안해. 하지만 나는 존재해야 해.`);
      await era.printAndWait(
        `헤매며 자신의 존재를 증명할 것을 찾고, 스스로 색을 칠해 같은 색의 무리에 들어가 방황하지 않는 척한다.`,
      );
      await era.printAndWait(
        `자신의 결론이 틀릴지도 모른다는 걸 알면서도 지금은 일단 이 관점으로 자신을 납득시킬 수밖에 없다.`,
      );
      await era.printAndWait(
        `그렇게 보면 지난주 습격은 존재를 증명하고 싶은 절망한 사람이 가장 화제가 될 소재를 찾은 것뿐이다.`,
      );
      await era.printAndWait(`상대가 우연히 ${falcon.name}의 팬이었을 뿐이다.`);
      await era.printAndWait(
        `${falcon.name}가 트레이너실 문을 살며시 열고 억지로 미소 지었을 때.`,
      );
      await era.printAndWait(
        `당신은 ${falcon.name}에게서 시선을 내려 트레이닝 계획을 멍하니 바라보았다.`,
      );
      await era.printAndWait(
        `지난주 습격은 위험했지만 실제 상처는 아랫배의 베인 자국 하나뿐이었다.`,
      );
      await era.printAndWait(
        `트레센은 트레이너와 담당 ${falcon.uma_sex_title}가 충돌할 때 생길 폭력을 대비해 제복 일부에 케블라를 사용한다.`,
      );
      await era.printAndWait(
        `화난 ${falcon.uma_sex_title}에게 걷어차여 크게 다치는 걸 막으려는 것이었지만 칼을 막는 데도 의외로 효과가 있었다.`,
      );
      await era.printAndWait(`뭐라고 할까. 전화위복인가.`);
      await you.say_and_wait(`팔코……아니, ${falcon.name}。`);
      await era.printAndWait(
        `흩어진 생각을 눈앞의 ${falcon.teen_sex_title}에게 돌렸다. 그 예명으로 ${falcon.sex}를 불러도 될지 망설였다.`,
      );
      await falcon.say_and_wait(`${callname}, 팔코는 괜찮아.`);
      await era.printAndWait(
        `예상보다 강한 ${falcon.teen_sex_title}의 모습이 기쁘면서도 조금 슬프다.`,
      );
      await era.printAndWait(
        `그늘이 드리운 ${falcon.teen_sex_title}는 고개를 숙였다.`,
      );
      await falcon.say_and_wait(
        `팔코는 ${falcon.uma_sex_title} 아이돌로서 이런 불안을 어렴풋이 느꼈어. 오히려 언젠가는 올 일이라고 생각했지.`,
      );
      await falcon.say_and_wait(
        `그러니까 ${callname}이(가) 사과할 게 아니라 팔코가 사과해야 해.`,
      );
      await era.printAndWait(
        `${falcon.name}의 시선이 위아래로 흔들렸다. 이런 이야기는 서툰 모양이다.`,
      );
      await era.printAndWait(`당신은 깊이 숨을 들이쉬고 말을 이으려 했다──`);
      await falcon.say_and_wait(`팔코도 알아.`);
      await era.printAndWait(
        `거울 같은 호수보다 고요한 ${falcon.name}가 고개를 들어 당신의 눈을 보았다.`,
      );
      await falcon.say_and_wait(
        `팬들은 팔코에게 희망을 맡겨. 그러니 팔코에게는 흠이 있어선 안 되지.`,
      );
      await falcon.say_and_wait(
        `하지만 팔코는 그렇게 생각하지 않아. 아이돌이 되기 위해 흘린 땀과 아주 조금의 행운이 있다면,`,
      );
      await falcon.say_and_wait(
        `팔코 같은 ${falcon.uma_sex_title}도 무대 한가운데서 빛날 수 있어……그런데……이런 짓을 하는 건 이상하지 않아?`,
      );
      await era.printAndWait(`슬픈 눈을 피하고 싶어도 시선을 뗄 수 없다.`);
      era.printButton(`팔코는 왜 아이돌이 되고 싶어?`, 1);
      await era.input();
      await era.printAndWait(
        `도망치는 것이 도망치지 않는 것보다 무거운 결과를 낳는다.`,
      );
      await falcon.say_and_wait(
        `……팔코처럼 외로운 사람도 잠시 외로움의 아픔을 잊을 수 있도록.`,
      );
      await era.printAndWait(`그래. 바로 그것 때문이다.`);
      await era.printAndWait(
        `자신의 불행을 아무리 한탄해도 책임은 달라지지 않는다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title} 아이돌로서 여기까지 순탄하게 온 것 자체가 상상하기 힘든 기적 같은 행운이다.`,
      );
      await you.say_and_wait(
        `알아. 심장이 도려내진 듯한 어두운 상처에서 늘 피가 흐르지.`,
      );
      await you.say_and_wait(
        `꽃과 박수가 아무리 그 판단을 부정해도 라이브가 끝나 무대에서 내려오면 상처에서 흐르는 피가 자신에게 묻는다.`,
      );
      era.printButton(
        `죄책감을 덜기 위한 눈물보다 아이돌에게는 해야 할 일이 있다.`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `팔코가 생각해야 할 건 다음 레이스에서 이기는 방법과 시니어급 더트야.`,
      );
      await you.say_and_wait(
        `팬의 기대에 응하는 것만이 아니라 더트의 ${falcon.uma_sex_title} 아이돌을 꿈꾸는 후배들을 위한 것이기도 해.`,
      );
      await you.say_and_wait(
        `방향이 안 보여도 좋아, 틀려도 좋아! 그 상처를 안고 앞으로 나아가! 레이스에서도 무대 한가운데서도 계속 빛나!`,
      );
      await you.say_and_wait(
        `${falcon.couple_title}에게 보여 줘. 초대 ${falcon.uma_sex_title} 아이돌인 ${falcon.name}가 어디까지 갈 수 있는지!`,
      );
      await era.printAndWait(
        `올바른 방향과 목표가 동시에 갖춰져 이루어지는 성공은 이 세상에 없다.`,
      );
      await era.printAndWait(
        `진지하게 생각하면 올바른 방향도 목표도 존재하지 않는다.`,
      );
      await era.printAndWait(
        `그래도 방향과 목표가 틀렸어도 우리는 수많은 성공을 이뤄 왔어. 그렇지?`,
      );
      await era.printAndWait(
        `지금까지 여정의 성공은 모두 그렇게 왔어. 남은 여정의 성공만 잘못된 방향과 목표에서 나오지 못할 이유가 있을까?`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '크리스마스의 소원';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`나카야마 레이스장·아리마 기념`);
      await era.printAndWait(
        `관중석의 입김이 옅은 흰 안개가 되어 겨울 레이스장에 떠다녔다.`,
      );
      await era.printAndWait(`올해 아리마 기념도 여전히 뜨겁다.`);
      await era.printAndWait(
        `당신과 ${falcon.name}는 관중석에 앉아 중계가 아리마 기념에 나서는 스타 레이스 ${falcon.uma_sex_title}들을 소개하는 소리를 들었다.`,
      );
      await you.say_and_wait(
        `올해 아리마 기념에서 가장 주목받는 출전 ${falcon.uma_sex_title}는 다이와 스칼렛이네.`,
      );
      await falcon.say_and_wait(`스칼렛?`);
      await era.printAndWait(
        `소란스러운 함성 속에서는 ${falcon.uma_sex_title}의 뛰어난 청력도 걸림돌이다.`,
      );
      await you.say_and_wait(`귀는 잘 보호하고 있어?`);
      await falcon.say_and_wait(`팔코, 귀마개 제대로 했어!`);
      await era.printAndWait(
        `리본이 달린 귀여운 귀마개가 거센 함성에 팔코가 일시적으로 귀먹는 것을 막아 주었다.`,
      );
      await you.say_and_wait(`그럼 자리를 찾으러 가자.`);
      await falcon.say_and_wait(`응! 저기……${callname}`);
      await falcon.say_and_wait(`오늘만 이름으로 불러도 돼?`);
      await era.printAndWait(
        `의외였다.${falcon.name}는 아이돌로서의 부담에 얽매이지 않게 되었다.`,
      );
      await you.say_and_wait(`${falcon.name}, 같이 가자.`);
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(
        `관객들이 거의 자리를 잡은 뒤 두 사람도 자기 자리를 찾았다.`,
      );
      await you.say_and_wait(`올해 아리마 기념도 성황이네.`);
      await falcon.say_and_wait(`스칼렛도 나온대!`);
      await era.printAndWait(
        `파란색과 흰색 승부복을 입은 레이스 ${falcon.uma_sex_title}가 코스로 들어왔다.`,
      );
      await era.printAndWait(
        `가장 눈길을 끄는 것은 ${falcon.sex}의 긴 갈색 트윈 테일이다.`,
      );
      await falcon.say_and_wait(`스칼렛의 승부복은 TV로 볼 때보다 아름다워!`);
      await you.say_and_wait(`이번에는 ${falcon.sex}가 어떻게 달릴까?`);
      era.drawLine({ content: 'ウィンナーズステージ後' });
      await era.printAndWait(`다이와 스칼렛은 멋지게 일착을 차지했다.`);
      await era.printAndWait(`무대에서의 퍼포먼스도 가슴을 뜨겁게 했다.`);
      await era.printAndWait(`그것이 끝난 뒤,`);
      await falcon.say_and_wait(`아리마 기념의 무대는 정말 넓네.`);
      await falcon.say_and_wait(`팔코도 이런 무대에 설 수 있으면 좋겠다.`);
      await era.printAndWait(
        `휴대폰으로 확인한 소식에 따르면 올해 관객은 십일만 명을 넘었다.`,
      );
      await era.printAndWait(`그에 비해 도쿄 대상전은 이삼만 명이다.`);
      await falcon.say_and_wait(
        `하지만 그래도 팔코는 톱 아이돌로서 더트도 인기 있게 만들 거야!`,
      );
      await era.printAndWait(`정통파 아이돌이라는 건가.`);
      await you.say_and_wait(
        `그럼 우선 도쿄 대상전부터 그 목표를 향해 조금씩 나아가자!`,
      );
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(
        `휴대폰을 꺼내 시간을 확인하니 벌써 통금이 가까웠다.`,
      );
      await you.say_and_wait(`지금 돌아가도 늦겠네. 근처에서 하룻밤 묵자.`);
      await falcon.say_and_wait(`음──${callname}, 방은 벌써 잡아 뒀지?`);
      await you.say_and_wait(`방?`);
      await era.printAndWait(
        `황급히 휴대폰을 열자 근처 호텔은 이미 만실이었다.`,
      );
      await era.printAndWait(
        `그사이 시간도 흘러 지금 역까지 뛰어도 트레센으로 돌아가는 막차를 탈 수 없다.`,
      );
      await falcon.say_and_wait(`……괘, 괜찮아, ${callname}。`);
      await era.printAndWait(
        `축 처진 당신의 어깨를 본 ${falcon.name}는 잠시 뜸을 들이다 지니고 있던 작은 가방에서 카드를 꺼냈다.`,
      );
      await falcon.say_and_wait(`잊을 뻔했어! 이거, ${callname}에게 줄게.`);
      await era.printAndWait(
        `당신은 ${falcon.name}의 산타 복장이 인쇄된 작은 카드를 받았다.`,
      );
      await falcon.say_and_wait(`잊을 뻔했어! 이거, ${callname}에게 줄게.`);
      await falcon.say_and_wait(
        `${callname}이(가) 갑자기 말하지 않았다면 팔코는 잊을 뻔했어……아하하.`,
      );
      await era.printAndWait(
        `팔코의 수줍은 미소를 보고 ${falcon.sex}의 기대 어린 시선을 따라가니 뒷면에도 글이 있었다.`,
      );
      era.printButton(`「고마워.」`, 1);
      await era.input();
      await era.printAndWait(
        `조금 서툰 사인과 『오늘도 파이팅』이라고 적힌 팔코의 귀여운 캐릭터 그림.`,
      );
      await falcon.say_and_wait(
        `기분이 가라앉으면 팔코를 보면 기운이 날 거야!`,
      );
      await era.printAndWait(`고마워. 그렇다면──`);
      await you.say_and_wait(`근처 숙소에 빈방이 있는지 물어보자.`);
      await era.printAndWait(
        `근처 호텔은 미리 예약으로 찼다. 하지만 사정이 생겨 못 오는 손님도 있을 것이다. 그 틈을 잡을 수 있다면.`,
      );
      await era.printAndWait(
        `그 생각에 두 사람은 발걸음을 재촉했다. 세 곳의 프런트를 돌아보니 급한 일로 취소된 빈방이 하나 있었다.`,
      );
      await falcon.say_and_wait(`이래도 괜찮아?`);
      await era.printAndWait(
        `머리 장식을 빼고 머리카락을 푼 ${falcon.name}가 중얼거렸다.`,
      );
      await era.printAndWait(
        `어쩔 수 없는 일이었다. 당신은 ${falcon.name}의 작은 머리를 쓰다듬었다.`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `전철을 놓친 것이 아직 마음에 걸리는 모양이다. 나중에 어떻게 보답할지 생각하자.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_dai_c: (() => {
    const title = '스마트 팔콘';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `마음을 다잡은 ${falcon.name}는 걸음을 조금 늦추어 나아가기로 했다.`,
      );
      await era.printAndWait(`계속 자신을 찾아 주던 팬들을 기다린다.`);
      await era.printAndWait(`트레이너실`);
      await you.say_and_wait(`앞으로는 팔코의 노력을 믿을게.`);
      await falcon.say_and_wait(
        `${callname}도 관중석에서 팔코가 성장하는 모습을 지켜봐 줘.`,
      );
      await era.printAndWait(
        `사실 이 ${falcon.teen_sex_title}는 의외로 강하다.`,
      );
      await era.printAndWait(
        `다시 생각한 끝에 대부분의 일정을 줄이고 몇 가지에 집중했다.`,
      );
      await era.printAndWait(
        `방향을 되찾고 착실히 나아가기 시작한 지 아직 한 달쯤밖에 안 됐다.`,
      );
      await falcon.say_and_wait(`${callname}, 왼쪽 머리 장식을 고쳐 줄래?`);
      await era.printAndWait(
        `전신 거울 속의 ${falcon.teen_sex_title}가 평소 얼굴로 돌아오자 말로 표현할 수 없는 기쁨이 솟았다.`,
      );
      await falcon.say_and_wait(
        `도쿄 대상전은 아직 아리마 기념에 미치지 못하지만──`,
      );
      await era.printAndWait(`구경 온 관객은 이미 예년을 훨씬 넘었다.`);
      await falcon.say_and_wait(`적어도 민들레로서는 팔코는 행복해♪`);
      await era.printAndWait(`${falcon.name}는 대기실 문을 조심스레 닫았다.`);
    };
    f.title = title;
    return f;
  })(),
  toky_dai_win_c: (() => {
    const title = '도쿄 대상전 이후·『스마트 팔콘』이라는 더트 아이돌';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}는 올해 우승을 차지했다.`);
      await era.printAndWait(
        `무대 위의 ${falcon.sex}는 다시 한 번 성장한 듯했다.`,
      );
      await era.printAndWait(
        `밝은 미소와 리듬을 타는 모습이 현장을 멋지게 달궜다.`,
      );
      await you.say_and_wait(`팔코……수고했어.`);
      await era.printAndWait(
        `무대에서 내려온 ${falcon.name}는 어깨로 숨을 쉬었고 온몸의 땀이 아이돌로서의 노력을 보여 주었다.`,
      );
      await era.printAndWait(
        `대기실에서도 팬들의 목소리가 밀물처럼 길게 이어져 들렸다.`,
      );
      await you.say_and_wait(`예상보다 훨씬 대단했어.`);
      await era.printAndWait(`아이돌로서는 최고의 영광이다.`);
      await falcon.say_and_wait(
        `${callname}이(가) 없었다면 팔코는 이 광경을 못 봤을 거야.`,
      );
      await falcon.say_and_wait(`전부 팔코의 공이라기보다는`);
      await you.say_and_wait(`함께 노력한 결과네.`);
      await era.printAndWait(
        `몸은 살짝 떨리는데도 ${you.name}에게 환한 미소를 지은 팔코가 손을 내밀었다.`,
      );
      await falcon.say_and_wait(
        `앞으로의 길도 ${callname}와(과) 함께 걷고 싶어.`,
      );
      await era.printAndWait(
        `땀으로 축축한 작은 손을 잡은 ${you.name}도 미소 지으며 ${falcon.name}를 보았다.`,
      );
      await you.say_and_wait(`나도 팔코에게 많이 배웠어. 앞으로도 잘 부탁해.`);
      await era.printAndWait(
        `마주 보던 두 사람은 가슴속 두려움을 모두 털어 내듯 웃었다. 알고 있기 때문이다──`,
      );
      await era.printAndWait(
        `──이 세상에 이만큼 마음이 통하는 상대는 다시 없다는 것을.`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '신사에서 소원 빌기';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`몇 번을 와도 여기는 참 조용하네⭐`);
      await falcon.say_and_wait(
        `음──아예 신님께도 팔코의 라이브를 보여 드릴까!`,
      );
      era.printButton(`엉뚱한 소리도 적당히 해!`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${falcon.name}의 머리를 가볍게 두드렸다. 으응, 하는 소리가 난 뒤 물결 일던 수면은 다시 잠잠해졌다.`,
      );
      await era.printAndWait(
        `고개를 들어 길게 늘어선 참배객을 보니 무력감이 온몸을 덮쳤다.`,
      );
      era.printButton(`참배하러 온 사람이 생각보다 많네.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `다들 시간이 걸려도 이루고 싶은 소원이 있으니까.`,
      );
      await falcon.say_and_wait(`그래도 팔코는 미래의 팬들을 위해 힘낼 거야!`);
      await era.printAndWait(
        `많은 사람이 한곳으로 향하는 모습을 보자, 본능이 된 아이돌의 자각이${falcon.name}의 열정에 순식간에 불을 붙였다.`,
      );
      await you.say_and_wait(`……일단 참배부터 마치자.`);
      await era.printAndWait(
        `옆에서 지칠 줄 모르는${falcon.teen_sex_title}을(를) 보며,${you.name}은(는) 살짝 머리를 감쌌다.`,
      );
      await era.printAndWait(
        `멋대로 여는 게릴라 라이브가 민폐라서도, 앞으로 더트 G1 전승이라는 험난한 목표 때문도 아니다.`,
      );
      await you.say_and_wait(`저 미소는 누가 봐도 억지웃음이다.`, true);
      era.drawLine();
      await era.printAndWait(`긴 기다림 끝에 두 사람은 시주함 앞에 섰다.`);
      await era.printAndWait(
        `눈앞의 삼여신상을 보니 삼여신에게 번영을 기원했던 강의 신 이야기가 떠올랐다.`,
      );
      await era.printAndWait(`……번영을 기원하는 강의 신이라.`);
      await era.printAndWait(`생각이 시간을 앞질렀다 되돌아오기를 반복한다.`);
      await falcon.say_and_wait(`삼여신님──`);
      await era.printAndWait(`몸은 옆 사람의 동작을 따라 했다.`);
      await era.printAndWait(`그 순간,${you.name}이(가) 내놓은 답은`);
      era.printButton(`강의 신은 주민들의 건강을 빈다(체력+600)`, 1);
      era.printButton(`강의 신은 주민들의 용기를 빈다(모든 능력치+10)`, 2);
      era.printButton(
        `강의 신은 주민들의 지혜를 빈다(파워+10, 스킬 Pt+100)`,
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `그 후,${you.name}의 귀에 삼여신의 속삭임이 들려왔다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '팔코와 밸런타인♪';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`올해 밸런타인 행사는 전용 행사장에서 열렸다.`);
      await era.printAndWait(
        `팔코는 늘 하던 장소에서 하고 싶다고 고집했지만, 찾아올 팬들과 호기심에 방문할 관광객들을 생각하면.`,
      );
      await era.printAndWait(`……어쩌면 안전 때문이었을지도 모른다.`);
      await falcon.say_and_wait(`팔코의 감사제에 와 줘서 고마워♪`);
      await falcon.say_and_wait(
        `늘 아이돌 팔코를 묵묵히 응원해 준 보답으로, 어제 하루 종일 만든 선물이야!`,
      );
      await era.printAndWait(
        `팔코는 행사장의 팬들에게 포장한 초콜릿 상자를 보여 주었다.`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await falcon.say_and_wait(
        `응, 응! 다들 보내 준 열기, 팔코에게 전해졌어!`,
      );
      await falcon.say_and_wait(
        `이 기세로 팔코의 마음이 담긴 초콜릿도 맛있게 먹어 줘!`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `오오오오! 팔코! 팔코!`);
      era.drawLine();
      await falcon.say_and_wait(`앞으로도 쭉 팔코를 응원해 줘!`);
      await era.printAndWait(
        `마지막 팬이 초콜릿을 받고 만족스럽게 떠나자 행사장에는${you.name}와(과)${falcon.name}만 남았다.`,
      );
      await era.printAndWait(
        `${falcon.name}의 뒤에 쌓여 있던 초콜릿도 모두 나눠 주었다.`,
      );
      await falcon.say_and_wait(`아, 잠깐만. 아직 조금 남았어!`);
      await era.printAndWait(
        `${falcon.sex}은(는) 구석에서 예쁘게 포장한 선물 상자를 꺼냈다. 행사장을 꾸밀 때부터 준비해 둔 모양이다.`,
      );
      await falcon.say_and_wait(
        `이건 경주우마무스메인${falcon.name}이(가),${callname}에게 보내는 평소의 감사 인사야.`,
      );
      await era.printAndWait(
        `${falcon.name}의 목소리는 생각보다 담담해서 변화를 읽을 수 없었다.`,
      );
      await era.printAndWait(
        `너무 깊이 생각하는 거겠지. 요즘은 제대로 쉬는 게 좋겠다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = '선배와 후배(일)';
    /** @param {CharaTalk} falcon スマートファルコン */
    const f = async (falcon) => {
      await falcon.say_and_wait(
        `톱 아이돌을 향해 나아가는 팔코의 달리기, 다들 레이스장에서 지켜봐 줘♪`,
      );
      await falcon.say_and_wait(`팔코라면 최고의 레이스를 보여 줄 수 있어⭐`);
      await era.printAndWait(
        `출발 전에 전단지를 나눠 주는 일은 이제 두 사람 사이에서 말이 필요 없는 일과가 되었다.`,
      );
      await era.printAndWait(`${falcon.uma_sex_title}「어, 팔코 씨?」`);
      await era.printAndWait(
        `지방 트레센에서 온 듯한${falcon.uma_sex_title}이(가),${falcon.name}을(를) 알아보았다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「팔코 선배! 저도 아이돌로서 더트에 데뷔하고 싶어요!」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「도쿄 대상전에서 달리는 모습을 보고 용기를 얻었어요. 저도 사람들에게 희망을 전하는 아이돌이 되고 싶어요!」`,
      );
      await era.printAndWait(
        `동경하는 눈빛으로${falcon.name}을(를) 바라보는${falcon.uma_sex_title}。`,
      );
      await falcon.say_and_wait(`……팔코`, true);
      await falcon.say_and_wait(
        `아이돌이 되고 싶었던 맨 처음 그 마음, 팔코가 꼭 전할게!`,
      );
      await era.printAndWait(`복잡한 표정의 팔코는 레이스장으로 향했다.`);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = '페브러리 스테이크스 후·후배';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('위너스 스테이지 후');
      await falcon.say_and_wait(`응원해 줘서 고마워!`);
      await era.printAndWait(
        `위너스 스테이지를 멋지게 마친 팔코는 대기실로 돌아왔다.`,
      );
      await you.say_and_wait(`팔코, 수고했어!`);
      await era.printAndWait(
        `생수와 수건을 받아 들고 들뜬 마음을 천천히 가라앉힌다.`,
      );
      await falcon.say_and_wait(`톱 아이돌에 또 한 걸음 가까워졌네!`);
      await you.say_and_wait(`팔코라면 분명 할 수 있어!`);
      await falcon.say_and_wait(`있잖아,${callname}, 팔코는……`);
      await era.printAndWait(`똑똑똑`);
      await era.printAndWait(`때아닌 노크 소리가 들렸다.`);
      await you.say_and_wait(`팔코의 팬인가 봐.`);
      await era.printAndWait(`대기실 문을 살짝 열었다.`);
      await you.say_and_wait(`죄송합니다. 팔코는 쉬고 있는데……누구시죠?`);
      await era.printAndWait(
        `전단지를 나눠 줄 때 만났던, 후배라고 소개한${falcon.uma_sex_title}였다.`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「팔코 선배! 우승 축하드려요!」`,
      );
      await falcon.say_and_wait(`어?`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「팔코 선배, 모르셨어요? 더트의${falcon.uma_sex_title}들에게 팔코 선배는 눈부신 빛이에요!」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「잔디에 적성이 없어서 더트로 온 저희는 더 이상 물러설 곳도 없어요……그런데 팔코 선배가 앞으로 나아갈 희망을 보여 주셨어요!」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「그러니까 팔코 선배는 계속 빛나 주세요!」`,
      );
      await era.printAndWait(
        `점점 열을 올리던${falcon.uma_sex_title}은(는),${falcon.name}의 손을 꼭 잡았다.`,
      );
      await falcon.say_and_wait(`저기, 팔코는`);
      await you.say_and_wait(
        `저는${falcon.name}의 트레이너입니다. 지금${falcon.sex}에게는 휴식이 필요해요. 하실 말씀이 있다면 제게 해 주세요.`,
      );
      await era.printAndWait(`여기서는 물러서면 안 된다.`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「팔코 선배의 트레이너님이세요? 죄송해요! 너무 흥분해서 잊고 있었어요!」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「두 분의 시간을 방해해서 죄송합니다. 실례할게요!」`,
      );
      await era.printAndWait(
        `어색한 표정을 지은${falcon.uma_sex_title}은(는) 억지웃음을 띤 채 대기실을 나갔다.`,
      );
      await you.say_and_wait(`드디어 갔네. 팔코?`);
      await falcon.say_and_wait(
        `팔코도 넘어지면서 겨우 나아가고 있는데, 왠지 실감이 안 나.`,
      );
      await era.printAndWait(
        `무언가 떠올랐는지 팔코는 망설이는 표정을 지었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_9: (() => {
    const title = '스마트 팔콘';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        '불타던 하늘이 짙푸른 빛에 갈라지고, 이윽고 온 하늘의 별빛으로 흩어진다.',
      );
      await era.printAndWait('평소와 다를 것 없는 라이브.');
      await era.printAndWait(
        '시니어급에 들어서며 관심은 조금 줄었지만 더트 팬들의 열기는 식지 않았다.',
      );
      await era.printAndWait(
        '이토록 개성이 뚜렷한 더트 아이돌이 드물기 때문일 것이다.',
      );
      await era.printAndWait([
        '팬들에게 둘러싸인 ',
        falcon.get_colored_name(),
        '에게는 크리스털 당근 같은 흡인력이 있다.',
      ]);
      await falcon.say_and_wait(`후우──다들! 고마워!`);
      await era.printAndWait(
        `조금 전 시작한 메들리가 막바지에 이르자 팬들은 무대 위 아이돌에게 기쁨을 전하고 있다.`,
      );
      await you.say_as_passer_by_and_wait(
        `새 팬 A`,
        `CD로만 들었는데 역시 현장에서 듣는 게 더 좋네.`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 B`,
        `팔코가우마무스메아이돌의 사랑을 모두에게 공평하게 나눠 주니까 이렇게 끌리는 거지.`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 C`,
        `분위기 깨는 말이긴 한데, 팔코 좀 이상하지 않아?`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 C`,
        `예전 팔코는 통통 튀는 활력이 있었는데, 지금은 뭔가 묘한 느낌이야.`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 D`,
        `다음 레이스 때문이겠지. 팬 발표회에서 시니어급 더트 레이스를 전부 이기겠다고 했잖아.`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 D`,
        `그래도 그렇게 어려운 목표를 세우고도 팔코는 웃고 있어.`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 D`,
        `『이게 바로우마무스메아이돌이구나』 하고 늘 생각해.`,
      );
      await you.say_as_passer_by_and_wait(
        `새 팬 E`,
        `그러고 보니 작년에 팬이 습격──`,
      );
      await you.say_as_passer_by_and_wait(
        `오랜 팬 B`,
        `그만! 그건 입에 올리면 안 되는 금기야!`,
      );
      await era.printAndWait(
        `들떠 있던 팬들은 찬물을 끼얹은 듯 입을 다물었고, 모두 이야기를 이어 갈 마음을 잃었다.


`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(
        `마지막까지 남아 있던 팬이 떠난 뒤,${you.name}은(는) 조금 떨어진 곳에서${falcon.name}을(를) 맞이했다.`,
      );
      await era.printAndWait(
        `미소 짓는${falcon.teen_sex_title}은(는)${you.name}와(과) 오늘 라이브에서 잘된 점과 아쉬운 점을 짚었다. 긍정적인 평가나 더 좋은 결론이 나올 때마다 트레센으로 돌아가는 오솔길에 밝은 웃음소리가 울렸다.`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await you.say_and_wait(`어?`);
      await falcon.say_and_wait(`아쉽지만.`);
      await era.printAndWait(`${falcon.name}의 목소리는 고요하게 차올랐다.`);
      await falcon.say_and_wait(
        `아니, 아무것도 아니야. 이렇게 거리를 두는 게 팔코에게도,${callname}에게도 가장 좋아.`,
      );
      await era.printAndWait(
        `평소의 무모한 모습과는 달리,${falcon.name}은(는)${you.name}에게 미소 지었다.`,
      );
      await falcon.say_and_wait(
        `팔코도 생각해 봤어.${callname}와(과) 너무 가까이 지냈던 것 같아.`,
      );
      await era.printAndWait(
        `말로 표현하기 힘든 거리감이 두 사람 사이에 퍼진다.`,
      );
      await falcon.say_and_wait(
        `우마무스메아이돌로서 팬들을 공평하지 않게 좋아하면 안 되잖아.`,
      );
      await you.say_and_wait(`아니, 그렇게까지는──`);
      await era.printAndWait(`${you.name}이(가) 다음 말을 찾고 있을 때.`);
      await falcon.say_and_wait(`${callname}, 이건 잠시 맡아 줘.`);
      await era.printAndWait(
        `${falcon.name}은(는) 이마에 단 머리 장식을 살며시 풀었다.`,
      );
      await you.say_and_wait(`……왜?`);
      await era.printAndWait(
        `놀라움에 사고가 멈추고 가슴속 의문이 그대로 입 밖으로 나왔다.`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}은(는) 웃으며 물기에 젖은 리본을 건넸다.`,
      );
      await you.say_and_wait(`팔코에게 소중한 거잖아?`);
      await falcon.say_and_wait(
        `응. 팔코에게는 무엇과도 바꿀 수 없는 보물이야.`,
      );
      await falcon.say_and_wait(
        `하지만 내가 가지고 있는 것보다 잠시${callname}에게 빌려주는 게 가장 도움이 될 것 같아.`,
      );
      await you.say_and_wait(`아니, 아니야. 뭔가 잘못됐어.`);
      await era.printAndWait(
        `끊어진 레일을 향해 달려가는 롤러코스터를 눈앞에서 보는 기분이다.`,
      );
      await era.printAndWait(
        `꽉 쥔 오른 주먹을 가느다란 손이 바이스처럼 억지로 펼쳤다.`,
      );
      await falcon.say_and_wait(`${callname}, 정말 둔하구나.`);
      await era.printAndWait(
        `조금 아쉬운 듯, 고인 물 같은 고요함으로 대답했다.`,
      );
      await falcon.say_and_wait(
        `앞으로 팔코는우마무스메아이돌로서 설 거야. 그러니까──`,
      );
      await era.printAndWait(`심연까지.`);
      await falcon.say_and_wait(
        `앞으로 잘 부탁해,${you.actual_name}트레이너님.`,
      );
      await era.printAndWait(`그렇군. 과거의 자신과 결별하기 위한 물건인가.`);
      await era.printAndWait(`알기 쉽네, 하하하. 답이 절대로 그럴 리 없잖아.`);
      await you.say_and_wait(`하하, 그래, 아니야, 아니, 어쩌면.`);
      await you.say_and_wait(`${falcon.name}。`);
      await era.printAndWait(
        `교실 천장에 매달린 형광등이 떨어져 가슴 앞에서 깨졌을 때 지르는 비명 같았다.`,
      );
      await falcon.say_and_wait(`그러니까,${callname}, 이게 맞는 거야.`);
      await era.printAndWait(
        `${falcon.name}은(는) 표정 하나 바꾸지 않고 한 걸음 물러났다.`,
      );
      await you.say_and_wait(`웃기지 마!`);
      await era.printAndWait(
        `${falcon.name}와(과) 함께 보낸 시간을 부정하는 거야?`,
      );
      await era.printAndWait(
        `어째서 이렇게까지 노력했는데 결과가 이 모양이지?`,
      );
      await era.printAndWait(
        `분노로 흐트러진 몸은 억울함과 증오를 토해 내고 싶은데, 공허한 말의 파편만 흘러나온다.`,
      );
      await era.printAndWait(
        `시야가 흐려지고 입은 스스로도 알 수 없는 말을 반복하며 눈앞의 사실을 무의식적으로 거부한다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 현기증에서 벗어났을 때, 곁에 있던${falcon.teen_sex_title}은(는) 이미 사라지고 없었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '현기증';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`트레이너실
`);
      await falcon.print_and_wait(`의욕이 나지 않는다.`);
      await falcon.print_and_wait(
        `${falcon.name}의 단호한 태도 때문인지 어디서부터 손대야 할지 모르겠다.`,
      );
      await falcon.print_and_wait(
        `${falcon.name}에게 미움을 산 걸까. 라이브를 보러 가고 싶다고 해도,${falcon.name}은(는) 이유를 대며 거절한다.`,
      );
      await falcon.print_and_wait(`하지만──`);
      await falcon.print_and_wait(`거절당할수록 불안은 커진다.`);
      await you.say_and_wait(`젠장!`);
      await falcon.print_and_wait(
        `책상을 세게 내리치며 가슴속 열기를 토해 낸다.`,
      );
      await falcon.print_and_wait(
        `${falcon.sex}에게 전하고 싶다. 아이돌로서 자신의 행복을 추구하는 건 아무 잘못도 없다고.`,
      );
      era.drawLine();
      await falcon.print_and_wait(`고마워, 다들!`);
      await falcon.print_and_wait(
        `늘 하던 두 시간짜리 라이브를 마치고도 세 곡을 연달아 더 불렀다.`,
      );
      await falcon.print_and_wait(
        `잠깐 쉬면 그대로 세 시간은 더 부를 수 있다.`,
      );
      await falcon.print_and_wait(`그런데 도무지 의욕이 나지 않는다.`);
      await falcon.print_and_wait(`팬들에게 이렇게 의욕 없는 표정을 보인다면.`);
      await falcon.print_and_wait(`자기 자신도 용서하지 못할 것이다.`);
      await falcon.print_and_wait(`${callname}에게 고민을 털어놓으면──`);
      await falcon.print_and_wait(`지친 몸에서 나약한 말이 새어 나온다.`);
      await falcon.say_and_wait(
        `팔코는 소중한${callname}을(를) 다시 위험에 빠뜨릴 수 없어.`,
        true,
      );
      await falcon.print_and_wait(
        `상처를 누른 채 피투성이로 서 있던${callname}。`,
      );
      await falcon.print_and_wait(`안 돼. 더는 생각하면 안 돼.`);
      await falcon.print_and_wait(
        `${falcon.name}은(는)${falcon.uma_sex_title}아이돌로서 이미 실격이다.`,
      );
      await falcon.print_and_wait(`하지만──`);
      await falcon.print_and_wait(
        `가슴속 의문을 억지로 눌러 담는다. 완벽한${falcon.uma_sex_title}아이돌에게는 흠 하나도 허용되지 않는다.`,
      );
      await falcon.say_and_wait(`팔코, 파이팅!`);
      await falcon.print_and_wait(
        `다시 한번 자신을 북돋우며,${falcon.uma_sex_title}아이돌인${falcon.name}은(는) 대기실에서 무대로 돌아갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '팬 감사제♪';
    /**
     * シニア級、スマートファルコンはダートのウマ娘アイドルとしてダートの人気を上げた
     * ウマ娘A・Bはダートを選んだ。Aは外向、Bは内向
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(
        `팬들에게 평소의 감사를 전하는 감사 이벤트가 다시 시작되었다.`,
      );
      await era.printAndWait(`하지만 예전과는 다르다.`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `${falcon.name}선배, 같이 사진 찍어도 돼요?`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}B`,
        `저도 팔코랑 찍고 싶어요!`,
      );
      await era.printAndWait(
        `갓 입학한 어린${falcon.uma_sex_title}들에게 둘러싸인${falcon.name}。`,
      );
      await falcon.say_and_wait(`팔코, 이렇게 인기가 많다니……`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `팔코 선배는 지금 더트의 인기 스타잖아요!`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `더트 레이스라고 하면 다들${falcon.name}을(를) 떠올려요!`,
      );
      await falcon.say_and_wait(`와아──톱 아이돌에 또 한 걸음 가까워졌네!`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `그리고, 그리고! 팔코 선배가 더트에서 활약하며 주목받은 덕분에 눈에 띄지 않던 더트의${falcon.uma_sex_title}들도 드디어 관심을 받게 됐어요!`,
      );
      await falcon.say_and_wait(
        `전부 팔코 덕분은 아니야. 계속 응원해 준──모두 덕분이지.`,
      );
      await falcon.say_and_wait(
        `그래서 응원해 주는 모두에게 감사하는 마음으로, 열 시부터 두 번째 무대에서 보답 라이브를 할 거야.`,
      );
      await falcon.say_and_wait(`다들 꼭 와 줄 거지?`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `팔코! 팔코!`,
      );
      era.drawLine();
      await falcon.say_and_wait(`～～～♪ 고마워, 다들!`);
      await you.say_as_passer_by_and_wait(`팬`, `팔코! 팔코!`);
      await falcon.say_and_wait(
        `다음 레이스에서도 빛나는 팔코를 지켜봐 줘? 그럼, 하나, 둘!`,
      );
      await falcon.say_and_wait(`팔코가 도주하면?`);
      await you.say_as_passer_by_and_wait(`팬`, `쫓아갈 수밖에 없지!`);
      await falcon.say_and_wait(`지평선 끝까지 쫓아오는 거야～?`);
      await you.say_as_passer_by_and_wait(`팬`, `그곳이 팔코의 커다란 무대!`);
      await falcon.say_and_wait(
        `길이 없다면 팔코가 찾을게! 목표를 찾았다면 바로 붙잡아!`,
      );
      await you.say_as_passer_by_and_wait(`팬`, `──커다란 사랑을 쟁취하자!`);
      await falcon.say_and_wait(
        `최강의${falcon.uma_sex_title}아이돌,${falcon.name}♪ 오늘도 마음이 전해졌어⭐`,
      );
      await you.say_as_passer_by_and_wait(
        `팬`,
        `오오오오오오오오! 팔코! 팔코!`,
      );
      await era.printAndWait(`팔코의 무대는 대성공이었다.`);
      era.drawLine();
      await you.say_and_wait(`주변을 조금 걸어 볼까.`, true);
      await era.printAndWait(`원래 인적이 드물던 샛길도 방문객들로 붐빈다.`);
      await era.printAndWait(
        `지름길로 빠져나가려던${you.name}에게는 조금 불편했지만, 빽빽한 인파 속에는 어딘가 공허한 안도감이 있었다.`,
      );
      await era.printAndWait(
        `어느 학자의 말이 떠오른다. 안정적인 관계를 유지할 수 있는 사람은 백오십 명, 더 깊이 교류할 수 있는 사람은 스무 명쯤, 친한 친구가 될 수 있는 사람은 겨우 다섯에서 일곱 명이라고 한다.`,
      );
      await era.printAndWait(
        `그들에게 나는 그 세계의 보잘것없는 조연이거나, 칠십억 분의 일에 불과한 배경일 것이다.`,
      );
      await era.printAndWait(
        `그렇게 생각하면 길거리에서 갑자기${falcon.uma_sex_title}이(가) 되더라도 대부분에게는 한 달도 가지 못할 뉴스에 불과하다.`,
      );
      await era.printAndWait(
        `해류를 탄 물고기 떼처럼, 정신을 차려 보니 보조 무대 쪽에 와 있었다.`,
      );
      await era.printAndWait(
        `하루 동안의 스타인${falcon.uma_sex_title}들이 빛나는 순간을 바라본다.`,
      );
      await you.say_and_wait(`……${falcon.name}`, true);
      await era.printAndWait(
        `최고의${falcon.uma_sex_title}아이돌을 꿈꾸며 끝까지 빛나려 하는, 지기 싫어하는${falcon.teen_sex_title}。`,
      );
      await era.printAndWait(
        `${falcon.name}이(가) 서둘러 두 사람 사이에 선을 그은 건, 내가 생각했던 것처럼 단순한 이야기는 아니었던 것 같다.`,
      );
      await you.say_and_wait(`${falcon.name}에게도 사정이 있는 거야.`);
      await era.printAndWait(`그 사실을 깨닫는 것만으로도 깊은 위안이 되었다.`);
      await era.printAndWait(
        `──설령 그 안도감이 진짜가 아니더라도, 가짜 안도감 역시 안도감이기는 하다.`,
      );
      await era.printAndWait(`억지로라도 그렇게 인정한다.`);
      await you.say_and_wait(
        `기회를 봐서,${falcon.name}와(과) 제대로 이야기하자.`,
        true,
      );
      await era.printAndWait(`${you.name}은(는) 다시 훈련 계획에 집중했다.`);
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = '눈물이 눈꺼풀 안으로 되돌아갈 수 있다면';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `결심한${you.name}은(는) 억지로라도${falcon.name}의 손을 잡아끌었다.`,
      );
      await you.say_and_wait(
        `미안해. 실례라는 건 알아. 하지만 바꿀 수 있다면 이 방법뿐이야.`,
      );
      await era.printAndWait(
        `묻지도 따지지도 않고${falcon.sex}의 손목을 끌고 목적지로 향한다.`,
      );
      await era.printAndWait(
        `처음에는 놀라 힘이 들어갔지만, 곧 그 힘이 풀렸다.`,
      );
      await era.printAndWait(
        `${you.name}의 가슴은 이제 곧 이뤄질 소망으로 가득했다.`,
      );
      await era.printAndWait(
        `${falcon.sex}에게 전하고 싶다. 아이돌이어도 자신의 행복을 좇아도 된다고.`,
      );
      await era.printAndWait(
        `${you.name}와(과)${falcon.name}은(는) 그 너른 잔디밭에 나왔다.`,
      );
      await era.printAndWait(
        `견디기 힘든 어색한 공기가 두 사람 사이에 감돈다.`,
      );
      await era.printAndWait(
        `혼자서 이렇게 무거운 짐을 짊어질 필요 없어. 그건 그저 사고였어. 앞으로 주의를──`,
      );
      await era.printAndWait(
        `만약${you.name}이(가)${falcon.name}의 입장이었다면. 그런 말로 스스로를 납득시킬 수 있었을까.`,
      );
      await you.say_and_wait(`……조금만 더 믿어 줬으면 해.`);
      await era.printAndWait(`팔코는 이미 한계였어.`);
      await falcon.say_and_wait(`……어?`);
      await era.printAndWait(
        `${falcon.name}의 목소리에는 당혹감이 섞여 있었다.`,
      );
      await falcon.say_and_wait(`${callname}은(는) 계속 믿고 있었는걸?`);
      await era.printAndWait(`그게 아니라고,${you.name}은(는) 고개를 저었다.`);
      await you.say_and_wait(
        `단순히 트레이너와${falcon.uma_sex_title}로서도, 팬과 아이돌로서도 아닌, 가장 믿을 수 있는 상대로${falcon.name}이(가) 대해 줬으면 해.`,
      );
      await falcon.say_and_wait(
        `……팔코 때문이어도,${callname}이(가) 다치더라도?`,
      );
      era.printButton(
        `${falcon.name}을(를) 향한 사랑은 이 정도로 흔들리지 않아.`,
        1,
      );
      era.printButton(`팔코를 향한 사랑은 이 정도로 흔들리지 않아.`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`……어?`);
        await era.printAndWait(
          `믿기 힘든 말을 들은 듯,${falcon.name}의 눈이 순간 크게 뜨였다.`,
        );
        await falcon.say_and_wait(
          `……너무해……정말 좋아……${callname}, 그런 말 하면 안 돼……`,
        );
        await falcon.say_and_wait(`이러면 팔코는……어떻……미안해.`);
        await era.printAndWait(
          `착각처럼 턱에 날카로운 통증이 스치더니,${you.name}은(는) 어둠 속으로 떨어졌다.`,
        );
        await era.printAndWait(`그대로 깊은 잠에 빠졌다.`);
      } else {
        await falcon.say_and_wait(`……팔코야?`);
        await era.printAndWait(`${falcon.name}의 표정이 굳어졌다.`);
        await falcon.say_and_wait(`팔코……역시 팔코구나……${callname}。`);
        await era.printAndWait(`그리운 것을 보듯 눈을 가늘게 떴다.`);
        await falcon.say_and_wait(
          `있잖아……팔코를 봐 줘.${callname}을(를) 위해서라면 팔코는 뭐든……`,
        );
        await era.printAndWait(`희미하게 빛나던 눈이 순식간에 생기를 잃었다.`);
        await falcon.say_and_wait(
          `아니야! 이런 팔코는${callname}이(가) 좋아하는, 모든 팬을 감싸 주는${falcon.uma_sex_title}아이돌이 아니야!`,
        );
        await era.printAndWait(`죄책감이 바늘처럼 가슴을 찔렀다.`);
        await falcon.say_and_wait(
          `무대 위의 팔코는 모두의 것이야. 이런……이런 건 용서받을 수 없어.`,
        );
        await falcon.say_and_wait(
          `팔코가${falcon.uma_sex_title}아이돌의 원칙을 저버리는 바람에,${callname}은(는) 너덜너덜한 봉제 인형처럼 피바다에 내던져졌어.`,
        );
        await falcon.say_and_wait(
          `그런데도, 사랑은 공평하게 나누겠다고 맹세했는데도……${callname}을(를) 보면 더 많이 쏟아 주고 싶어져.`,
        );
        await falcon.say_and_wait(
          `팔코는${callname}에게 모든 걸 쏟을 수 없어. 그러는 순간 팔코는 팔코가 아니게 되니까.`,
        );
        await era.printAndWait(
          `그저 실패하는 것보다 온 힘을 다해 부딪친 끝에 양자택일을 해야 하는 것이 더 슬프다.`,
        );
        await falcon.say_and_wait(`……그렇다면.`);
        await era.printAndWait(
          `착각처럼 턱에 날카로운 통증이 스치더니,${you.name}은(는) 어둠 속으로 떨어졌다.`,
        );
        await era.printAndWait(`그대로 깊은 잠에 빠졌다.`);
      }
      era.drawLine();
      await era.printAndWait(`${you.name}은(는) 다시 그 풀밭에 서 있었다.`);
      await era.printAndWait(
        `폐허 사이의 풀밭. 먼 하늘에서 다가오는 적란운. 그립고 아름다운 시간.`,
      );
      await era.printAndWait(`그리고 곁에 있는${falcon.teen_sex_title}。`);
      await era.printAndWait(
        `그래. 이런 곳이야말로 제대로 이야기를 나누기에 어울린다.`,
      );
      await you.say_and_wait(`팔코──`);
      await era.printAndWait(`팔코는 아무 대답도 하지 않는다.`);
      await you.say_and_wait(`팔코?`);
      await era.printAndWait(
        `${you.name}은(는) 조심스레 곁에 있는${falcon.teen_sex_title}에게 손을 대 보았다.`,
      );
      await era.printAndWait(
        `체온은 평소와 같고 손끝에 닿는 피부의 감촉도 변함없다.`,
      );
      await you.say_and_wait(
        `자세히 보니 가느다란 은빛 실이${falcon.sex}을(를) 조종하는 것 같다.`,
      );
      await era.printAndWait(`마치 인형처럼.`);
      await you.say_and_wait(
        `실을 따라가면 조종하는 자를 찾을 수 있을지도 모른다.`,
      );
      await era.printAndWait(
        `엄지와 검지로 가느다란 실을 잡고 그 근원을 향해──`,
      );
      await era.printAndWait(`강렬한 빛이${you.name}의 눈을 가렸다.`);
      await era.printAndWait(`눈앞의 풀밭이 무대로 변한다.`);
      await era.printAndWait(
        `내가 무대 한가운데 서 있다. 아니, 정확히는${falcon.name}이(가) 서 있다.`,
      );
      await era.printAndWait(
        `빼곡한 관객들이${you.name}에게 익숙한 노래에 맞춰 몸을 흔들고 있다.`,
      );
      await you.say_and_wait(`라이브? 그런데 위화감이 너무 심하다.`);
      await era.printAndWait(`아까부터 공기 중에 희미한 비린내가 감돈다.`);
      await era.printAndWait(`그 의미를 깨달은 순간 온몸에 소름이 돋았다.`);
      await you.say_and_wait(`팔코?`);
      await era.printAndWait(
        `팔코라고 불린 인형이${you.name}쪽으로 돌아보았다. 그리고──`,
      );
      await era.printAndWait(
        `왼눈 오른눈 왼귀 오른귀 왼쪽 콧구멍 오른쪽 콧구멍, 입안의 검붉은 액체`,
      );
      await era.printAndWait(
        `시각 촉각 후각 미각 청각 이성 감성이 끈적한 덩어리로 뒤섞인다.

`,
      );
      await you.say_and_wait(`하아, 하아, 하아.`);
      await era.printAndWait(
        `악몽에서 벌떡 깨어났다. 이마에 맺힌 땀, 축축한 셔츠. 모두 방금 일이 꿈이었다고 말해 준다.`,
      );
      await you.say_and_wait(`방금 건?`);
      await era.printAndWait(
        `액체를 세게 뱉어 내자 입안에 쓴 비린 맛이 남았다.`,
      );
      await era.printAndWait(
        `그전에 무슨 일이 있었는지 떠올리려 했지만 조금만 생각해도 머리가 깨질 것 같았다.`,
      );
      await era.printAndWait(`일단 포기하고 주위를 둘러본다.`);
      await era.printAndWait(
        `몸을 뉘인 소파. 오른쪽의 사무용 책상. 그 너머 벽에 걸린 액자 속 사진.`,
      );
      await you.say_and_wait(`트레이너실로 돌아왔나?`);
      await era.printAndWait(
        `기억이 끊기기 직전에 뭘 하고 있었지? 쓰러진 뒤 누가 데려다줬을까?`,
      );
      await era.printAndWait(
        `무의식적으로 바지 주머니에 손을 넣어 휴대 전화를 찾는다.`,
      );
      await era.printAndWait(`그보다 부드러운 무언가가 손에 닿았다.`);
      await you.say_and_wait(`이건?`);
      await era.printAndWait(`머리를 묶을 때 쓰는, 정성껏 손질한 리본.`);
      await era.printAndWait(`팔코가 도주하면?`);
      await you.say_and_wait(`……그렇군.`);
      await era.printAndWait(`답은 이미 명백했다.`);
      await era.printAndWait(`소중히 간직해 둔 리본을 손목에 묶는다.`);
      await era.printAndWait(`${you.name}은(는) 결심했다.
`);
      era.printButton(`${falcon.name}을(를) 쫓아간다`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `얼마나 지났는지도 모르겠다. 상점가, 백화점, 강가의 풀밭.`,
      );
      await era.printAndWait(
        `친한 팬이나 친구들에게 물어도 모두 모른다는 대답뿐이었다.`,
      );
      await you.say_and_wait(`하아……하아……하아……`);
      await era.printAndWait(
        `여기서 포기하고 팔코 곁에서 도망친다면 역시 분할 것이다.`,
      );
      await era.printAndWait(`군자는 위험한 곳에 가까이 가지 않는다고 했다.`);
      await era.printAndWait(
        `도쿄 같은 대도시에서도 한밤중에 돌아다니는 건 상당히 위험하다.`,
      );
      await era.printAndWait(`이렇게 된 데에는 나에게도 책임이 있을 것이다.`);
      await era.printAndWait(
        `하지만 그렇다고 자책할 이유는 없다. 나는 생각만큼 현명하지도, 용감하지도 않다.`,
      );
      await era.printAndWait(
        `지혜도 이 정도, 용기도 이 정도. 이상과는 다른 현실이 그 사실을 증명한다.`,
      );
      await era.printAndWait(
        `그걸 알면서도 후회한다면 지혜와 용기를 갖추고도 실패한 자신을 상상하며 후회하는 셈이다.`,
      );
      await era.printAndWait(`인지 부조화에 빠질 위험이 상당히 크다.
`);
      await era.printAndWait(`정신을 차려 보니 익숙한 풀밭으로 돌아와 있었다.`);
      await era.printAndWait(
        `봄에서 여름으로 넘어가는 시기. 한밤중의 풀밭은 생각보다 추웠다.`,
      );
      await era.printAndWait(`${you.name}은(는) 저도 모르게 몸을 떨었다.`);
      await era.printAndWait(
        `봄에서 여름으로 넘어가는 시기. 한밤중의 풀밭은 생각보다 추웠다.`,
      );
      await era.printAndWait(
        `축축한 공기에 흙냄새가 섞여 있고, 달빛 아래 폐허가 풀밭을 둘러싸고 있다.`,
      );
      await era.printAndWait(`마치 막이 내려온 것처럼.`);
      await era.printAndWait(
        `그리고 기다리던${falcon.teen_sex_title}——${falcon.name}이(가) 그 풀밭에 있었다.
`,
      );
      await era.printAndWait(
        `${falcon.sex}에게 사과하고 제대로 이야기하면 오해를 풀 수 있다.`,
      );
      await falcon.say_and_wait(`어? ${callname}, 벌써……`);
      await era.printAndWait(
        `무대의 주인공이 놀란 얼굴로${you.name}을(를) 바라본다.`,
      );
      await era.printAndWait(
        `어제 오후부터 아무것도 먹지 못해서일까. 금방이라도 무너질 듯한${falcon.sex}은(는) 창백한 인형처럼 위태로웠다.`,
      );
      await falcon.say_and_wait(
        `……아니, 괜찮아. 팔코는 조금 고민하고 있을 뿐이야. 내일이면 다시 평소처럼──`,
      );
      await era.printAndWait(
        `두 다리를 모은 채 땅에 주저앉더니 괴롭게 기침한다.`,
      );
      era.printButton(`팔코!`, 1);
      await era.input();
      await era.printAndWait(
        `준비한 말은 전부 잊어버리고,${you.name}은(는)${falcon.teen_sex_title}에게 달려갔다.`,
      );
      await you.say_and_wait(`참아 줘. 금방 끝날 거야.`);
      await era.printAndWait(`${falcon.name}이(가)${you.name}을(를) 붙잡았다.`);
      await era.printAndWait(
        `양손에 전해지는 냉기보다 또렷한 두 눈이${you.name}을(를) 사로잡았다.`,
      );
      await falcon.say_and_wait(`팔코는……${callname}을(를) 탓할 생각은……그냥.`);
      await falcon.say_and_wait(
        `팔코의 행복보다……${callname}이(가) 더 행복했으면……`,
      );
      await falcon.say_and_wait(
        `미안해……팬 1호의 행복조차 지키지 못하다니, 아이돌 실격이네……`,
      );
      await falcon.say_and_wait(`……미안해.`);
      await era.printAndWait(
        `가슴속에 쌓아 둔 괴로움을 토해 낸 뒤,${falcon.name}은(는) 그대로 쓰러졌다.`,
      );
      await era.printAndWait(
        `마음속으로는 짐작하고 있었다.${falcon.sex}의 입으로 듣기 전에는 확신할 수 없었던,${falcon.name}이(가) 진정 바랐던 것.`,
      );
      await era.printAndWait(`미안해. 이렇게 되게 해서.`);
      era.printButton(`${falcon.name}을(를) 조심스레 업는다`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는)${falcon.teen_sex_title}을(를) 조심스레 업고,${falcon.sex}와(과) 함께 걷는 무게를 실감했다.`,
      );
      await era.printAndWait(`왔던 길은 생각보다 길었다.`);
      await era.printAndWait(
        `──하지만${falcon.name}에게는 인생에서 가장 중요한 성인식이었을지도 모른다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_18: (() => {
    const title = '일상';
    /**
     * 頭の中に、トレーナーとの過去が閃く
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`크게 흔들리는 느낌에 눈을 떴다.`);
      await era.printAndWait(
        `아직 흐릿한 시야 너머에서 주황색 덩어리가 움직인다.`,
      );
      await era.printAndWait(`부은 두 눈을 비비며 정신을 차리려 한다.`);
      await era.printAndWait(
        `똑같이 어리둥절한${falcon.teen_sex_title}와(과) 눈이 마주쳤다.`,
      );
      await falcon.say_and_wait(`아……`);
      await era.printAndWait(
        `${falcon.teen_sex_title}도 이제 막 깼는지 낯선 천장을 보며 고개를 갸웃한다.`,
      );
      await you.say_and_wait(`안녕,${falcon.name}。`);
      await era.printAndWait(
        `무언가 깨달았는지 눈이 확 뜨이고 귀가 쫑긋 섰다.`,
      );
      await falcon.say_and_wait(`──어? 어어! 왜${callname}의 방에 있는 거야?`);
      await era.printAndWait(
        `두 사람 사이의 유대 덕분에,${falcon.name}은(는) 덤벼들지 않고 목소리를 높여 물었을 뿐이었다.`,
      );
      await you.say_and_wait(
        `미안해, 내 마음대로 했지만. 외박 허가는 기숙사장에게 확인받았어.`,
      );
      await falcon.say_and_wait(`그 말은……${callname}이(가) 팔코를……`);
      await you.say_and_wait(
        `아니야! 팔코의 너무 앞서가는 생각은 이제 따라갈 수가 없어.`,
      );
      await you.say_and_wait(
        `허락 없이 트레센을 나가 병원에 갔다가 주간지에 찍히면 그대로 가십 일면을 장식할 거야.`,
      );
      await you.say_and_wait(`나도 팔코도 명예에 큰 상처를 입겠지.`);
      await you.say_and_wait(
        `그래서 의사에게 큰 문제는 없으니 푹 쉬라는 말을 들은 뒤,${falcon.name}이(가) 순회 활동 중 과로로 쓰러졌다는 이유로 이사장에게 외박을 신청했어.`,
      );
      await you.say_and_wait(
        `늦은 밤이었는데도 타즈나 씨가 바로 답장해 줘서 다행이었지.`,
      );
      await you.say_and_wait(`그런데 팔코, 지금 몸은 어때?`);
      await era.printAndWait(
        `${you.name}의 말을 묵묵히 듣던${falcon.name}이(가) 침대에서 일어났다.`,
      );
      await falcon.say_and_wait(`미안해.${callname}에게 이렇게 폐를 끼쳐서.`);
      await era.printAndWait(
        `그리고${you.name}쪽으로 돌아서서 깊이 고개를 숙였다.`,
      );
      await you.say_and_wait(
        `미안해.${falcon.name}을(를) 좀 더 믿었다면 팔코를 이런 일을 겪게 하지 않았을 텐데.`,
      );
      await era.printAndWait(`머릿속에${falcon.name}의 슬픈 미소가 스쳤다.`);
      await you.say_and_wait(
        `조바심을 억눌렀다면 팔코를 이렇게 괴롭게 하지 않았을 텐데.`,
      );
      await era.printAndWait(`${you.name}도 깊이 고개를 숙였다.`);
      await falcon.say_and_wait(
        `어! 잘못한 건 팔코인데,${callname}이(가) 그럴 필요는 없어.`,
      );
      await era.printAndWait(
        `고개를 들어 말리려던${falcon.name}와(과),${you.name}의 머리가 부딪쳤다.`,
      );
      await era.printAndWait(
        `${you.name}의 코에 강한 충격으로 얼얼한 감각이 퍼졌다.`,
      );
      await falcon.say_and_wait(`아,${callname}。`);
      await you.say_and_wait(`응? 왜?`);
      await era.printAndWait(
        `${you.name}이(가) 무심코 코를 만지자 새빨간 액체가 콧속에서 입으로 흘러들었다.`,
      );
      await era.printAndWait(
        `……이상하게도 씁쓸한 쇠 맛이${you.name}에게 안도감을 주었다.`,
      );
      await falcon.say_and_wait(`${callname}, 앉아!`);
      await era.printAndWait(
        `${falcon.name}은(는) 막무가내로${you.name}을(를) 침대에 앉히고,${you.name}은(는) 냅킨을 반으로 찢어 접은 뒤 피가 나는 코를 막았다.`,
      );
      await you.say_and_wait(`……하하하.`);
      await era.printAndWait(
        `환자와 간병하는 사람이 뒤바뀐 광경에 웃음을 참을 수 없었다.`,
      );
      await era.printAndWait(
        `아직 제대로 고정되지 않은 냅킨이 흔들리며 허공에 붉은 선을 그리더니, 다음 순간${you.name}의 트레이너 외투를 적셨다.`,
      );
      await falcon.say_and_wait(`으아아악!`);
      await era.printAndWait(`늘 그랬듯 정신없는 일상이 다시 시작된다.`);
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = '휴일';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {string} callname_4 マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname, callname_4) => {
      await era.printAndWait(
        `봄과 여름이 뒤섞이는 계절. 하늘에서 내리쬐는 햇살에도 열기가 섞이기 시작했다.`,
      );
      await era.printAndWait(
        `하지만 지금${you.name}에게는 춥지도 덥지도 않은 딱 좋은 온도였다.`,
      );
      await era.printAndWait(
        `……사건의 파도 속에서 허우적대다 한고비를 넘기고 겨우 살아남았다.`,
      );
      await era.printAndWait(
        `상점가를 오가는 사람들을 보고 있으면 어딘가 현실감이 없어진다.`,
      );
      await era.printAndWait(
        `그들도${you.name}처럼 고난 속에서 허우적대며 가까스로 살아남은 동료일까.`,
      );
      await era.printAndWait(
        `지난번에는 살아남았다. 다음에 실패하면 어떻게 될까.`,
      );
      await era.printAndWait(
        `한번 실패하면 모든 것이 영으로 돌아간다. 그곳, 에덴으로 가져갈 수 있는 건 아무것도 없다.`,
      );
      await era.printAndWait(`사람들은 왜 두려워하지 않을까.`);
      await era.printAndWait(
        `아니. 죽음 앞에 서고 나서야 살아 있는 행복이 주어진 특권임을 알게 된다.`,
      );
      await era.printAndWait(
        `언젠가는 아무것도 지니지 못한 채 세상을 떠난다. 그렇기에 살아남은 하루하루를 더욱 소중히 여긴다.`,
      );
      await falcon.say_and_wait(`${callname}, 오래 기다렸지♪`);
      await era.printAndWait(
        `사복으로 갈아입은${falcon.name}이(가) 종종걸음으로${you.name}앞에 나타났다.`,
      );
      await era.printAndWait(
        `머리를 자연스럽게 풀어 내렸다. 특유의 목소리가 아니었다면 거리를 오가는 작은${falcon.uma_sex_title}와(과) 구별하기 어려웠을 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 맡아 둔 리본을 돌려주려 했지만, 「${callname}이(가) 가지고 있는 게 더 좋아. 엄마도 찬성했어」라며 거절당했다.`,
      );
      await era.printAndWait(
        `……작은${falcon.uma_sex_title}에게 관심이 있는 편은 아니라고 생각했는데, 상대를 볼 때마다 가슴속에 말로 표현할 수 없는 감정이 솟는다.`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `상대는${you.name}의 복잡한 심정을 눈치채지 못한 채 여전히 눈부신 미소로${you.name}을(를) 바라본다.`,
      );
      await era.printAndWait(
        `휴일이라 그런지 교차로에 선 두 사람에게 가끔 이상한 시선이 향한다.`,
      );
      await you.say_and_wait(`일단 근처 백화점부터 둘러보자!`);
      await era.printAndWait(
        `망설이다가는 귀중한 휴일이 끝나 버린다.${you.name}은(는) 커다란 간판이 걸린 건물을 가리켰다.`,
      );
      await falcon.say_and_wait(
        `어! 저기에 유명한 디저트 가게가 새로 생겼다던데!`,
      );
      await falcon.say_and_wait(`서두르자, 지금 바로 가자!`);
      await era.printAndWait(
        `${falcon.name}이(가)${you.name}의 손을 끌고 디저트 가게로 향한다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `점원에게 메뉴판을 받아 빼곡한 디저트 사진들을 보며,${you.name}은(는) 고민했다.`,
      );
      await falcon.say_and_wait(`${callname}은(는) 뭐가 좋아?`);
      era.printButton(`과일 파르페가 좋겠어!`, 1);
      era.printButton(`신작 초콜릿도 궁금해!`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`팔코도 그 새콤달콤한 파르페 좋아해.`);
        await falcon.say_and_wait(
          `입안에 퍼지는 차가움과 달콤함이,${callname}와(과) 처음 만났을 때 같아♪`,
        );
      } else {
        await falcon.say_and_wait(`팔코도 이 맛 초콜릿 먹어 보고 싶어♪`);
        await falcon.say_and_wait(`……⭐`);
        await era.printAndWait(
          `……어째서인지${falcon.sex}이(가) 슬쩍 입을 가리고 웃고 있다.`,
        );
        await era.printAndWait(`생각이 알 수 없는 차원으로 날아간 걸까.`);
      }
      await maru.say_and_wait(`하이! 안녕! 여기서 팔코를 만나다니.`);
      await falcon.say_and_wait(`안녕하세요⭐ 마루젠 선배!`);
      await era.printAndWait(
        `조금 떨어진 자리에서 혼자 디저트를 즐기던 마루젠스키가 말을 걸었다.`,
      );
      await maru.say_and_wait(
        `최근에 더트 레이스가 유행한다는 이야기를 들었거든.`,
      );
      await maru.say_and_wait(
        `그래서 유행을 따라 더트에서 맹활약하는 팔코의 레이스를 보러 갔지.`,
      );
      await maru.say_and_wait(
        `더트를 선택한 후배들이 달리는 방법을 물어보길래 제대로 보러 간 거야.`,
      );
      await maru.say_and_wait(
        `그런데 팔코처럼 온 힘을 다해 빛나는 아이돌을 보면, 후배가 언제 선배를 추월할까 싶어 마음이 복잡해지네.`,
      );
      await you.say_and_wait(
        `팔코니까.${falcon.sex}이(가) 있으면 더트는 더 인기를 얻을 거야.`,
      );
      await falcon.say_and_wait(`……！`);
      await maru.say_and_wait(
        `그런데 다음에는 제왕상에 나간다며? 나도 현장에 응원하러 갈게!`,
      );
      await falcon.say_and_wait(
        `그때는 마루젠 선배에게 후배의 멋진 모습을 보여 드릴게요!`,
      );
      await era.printAndWait(
        `웃고 있던 마루젠스키가 시선을${you.name}에게 돌렸다.`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('love:4') > 90
      ) {
        await you.say_and_wait(`우연이네, 마루젠스키.`);
        await era.printAndWait(
          `마루젠스키는 미소 지은 채 손에 든 커피를 젓고 있다.`,
        );
        await you.say_and_wait(`……아.`);
        await maru.say_and_wait(
          `어머, 트레이너 군? 오늘은 훈련장을 디저트 가게로 바꾼 거야? 지능 특훈?`,
        );
        await maru.say_and_wait(
          `후후～이 언니도 과일 파르페를 먹으면서 지능을 단숨에 올리고 싶네.`,
        );
        await era.printAndWait(
          `그건 트레이너의 일이 아니지 않느냐고 에둘러 찌른다.`,
        );
        await era.printAndWait(
          `${falcon.name}와(과)의 관계는 아주 조금 가까워졌을 뿐이라고 생각하지만, 아직은 순조로울 것이다.`,
        );
        await falcon.say_and_wait(
          `기다렸지⭐ ${callname}……그리고 마루젠스키 선배.`,
        );
        await era.printAndWait(
          `두 사람 사이의 미묘한 분위기를 알아챘는지 긴 줄에서 달려오던${falcon.name}의 발걸음이 점점 느려졌다.`,
        );
        await maru.say_and_wait(`팔코, 안녕♪`);
        await era.printAndWait(
          `수라장을 빠져나가려던${you.name}은(는) 마루젠스키의 기세에 그 자리에 못 박혔다.`,
        );
        if (era.get('love:46') > 90) {
          await falcon.say_and_wait(
            `마루젠 선배라도 이 초콜릿은 양보 못 해요♪`,
          );
          await maru.say_and_wait(`요즘 후배들은 생각보다 귀엽네♪`);
          await maru.say_and_wait(
            `잘하는 코스가 달랐지만 않으면 팔코랑 한판 붙어 보고 싶은걸♪`,
          );
          await falcon.say_and_wait(`마루젠 선배라도 팔코는 지지 않아요♪`);
          await maru.say_and_wait(`조금 실례라고 생각하지 않아?`);
          await falcon.say_and_wait(`네? 팔코는 악의가 없는데요?`);
          await falcon.say_and_wait(
            `그냥 마루젠 선배도 슬슬 결혼할 나이인데 왜 아직 여기 계시나 해서요.`,
          );
          await maru.say_and_wait(
            `팔코는 아이돌이지? ${callname}와(과) 나란히 앉아 있어도 스캔들은 괜찮아?`,
          );
          await maru.say_and_wait(`${callname_4}, 넌 어떻게 생각해?`);
          await falcon.say_and_wait(
            `괜찮아요. 기사가 나면${callname}와(과) 결혼한다고 발표하면 되니까♪ 그렇지,${callname}？`,
          );
          await era.printAndWait(
            `여유로운 마루젠스키가 진지해진${falcon.name}을(를) 바라본다. 보이지 않는 압박감에 주변 사람들이 자리를 피하기 시작했다.`,
          );
          era.printButton(`아무것도 보고 싶지 않아.`, 1);
          await era.input();
          await era.printAndWait(
            `전쟁터 한가운데서 멍하니 두 사람을 바라보는${you.name}은(는) 모래에 머리를 파묻은 타조나 다름없었다.`,
          );
        } else {
          await falcon.say_and_wait(
            `마루젠스키 선배도 계시니까 여기서 게릴라 라이브를 해요⭐`,
          );
          await era.printAndWait(
            `갑작스러운 전개에도${falcon.name}은(는) 그 자리에 끼어들었다.`,
          );
          await maru.say_and_wait(
            `요즘은 아무 데나 무대로 만드는 게 유행이야?`,
          );
          await falcon.say_and_wait(`팔코만의 방식이에요⭐`);
          await falcon.say_and_wait(
            `스즈카랑 부르봉, 후진이 없는 건 조금 아쉽지만……도주 우마 자매의 활동으로 하자!`,
          );
          await maru.say_and_wait(
            `레이스든 라이브든, 언니는 전력으로 달릴 거야!`,
          );
          await era.printAndWait(
            `마루젠스키는${you.name}에게 윙크하더니,${falcon.name}와(과) 임시 무대를 준비하기 시작했다.`,
          );
          await era.printAndWait(`소동은 그렇게 일단락되었다.`);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_teio_sho: (() => {
    const title = '제왕상을 앞둔 준비';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name}이(가) 제왕상에 도전한다는 소식이 우마스타 전체에 퍼졌다.`,
      );
      await era.printAndWait(
        `팔코의 달리기와 노래에 매료된 사람들은 발매와 동시에 표를 모두 사들였다.`,
      );
      await era.printAndWait(
        `더트가${falcon.name}을(를) 선택했다기보다는,${falcon.name}이(가) 더트를 만들어 낸 셈이다.`,
      );
      await era.printAndWait(`대기실에서`);
      await falcon.say_and_wait(`……팔코, 조금 긴장돼.`);
      await era.printAndWait(
        `평소의${falcon.name}와(과) 달리 곧 시작될 레이스를 앞두고 망설이고 있다.`,
      );
      await falcon.say_and_wait(
        `실수하면 응원해 주는 팬들과 후배들이 실망하지 않을까?`,
      );
      await you.say_and_wait(
        `팔코의 팬이자,${falcon.name}의 트레이너로서 나는 믿어.`,
      );
      await you.say_and_wait(`팔코라면 괜찮아!`);
      await falcon.say_and_wait(
        `${callname}이(가) 그렇게 말한다면 팔코, 힘낼게!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 시계를 보았다. 벌써 출발할 시간이다.`,
      );
      await you.say_and_wait(`그럼 좋은 소식 기다릴게, 팔코!`);
      await falcon.say_and_wait(
        `응! 후배${falcon.uma_sex_title}에게 선배 아이돌의 방식을 보여 주고 올게!`,
      );
      await era.printAndWait(`선배 아이돌 팔코가 코스로 향했다.`);
    };
    f.title = title;
    return f;
  })(),
  teio_sho_win: (() => {
    const title = '제왕상 후·빛나는 아이돌';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname) => {
      await era.printAndWait(`${falcon.name}은(는) 멋지게 1착을 차지했다.`);
      await era.printAndWait(`위너스 스테이지에서도 실력을 유감없이 발휘했다.`);
      await era.printAndWait(
        `팔코에게 톱 아이돌로 가는 길은 이제 제법 가까워졌다.`,
      );
      await falcon.say_and_wait(`${callname}, 팔코의 무대 어땠어?`);
      await you.say_and_wait(`이제 프로 아이돌과 큰 차이도 없어.`);
      await you.say_and_wait(`그래도 비교한다면 우리 팔코가 제일 귀엽지.`);
      await falcon.say_and_wait(`응! 팔코도 자신이 귀엽다고 생각해!`);
      await maru.say_and_wait(`팔코, 정말 대단하네!`);
      await era.printAndWait(`어느새 마루젠스키가 대기실 입구에 서 있었다.`);
      await falcon.say_and_wait(`어? 마루젠 선배가 왜 여기 계세요?`);
      await maru.say_and_wait(
        `응! 팔코가 열심히 달리는 모습에 완전～감동했거든!`,
      );
      await maru.say_and_wait(
        `빛나고 싶다는 꿈을 품고 잔디를 달리고, 위너스 스테이지에서 가장 아름다운 자신을 보여 주는 거잖아.`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}도 그 열정에 불이 붙었어!`,
      );
      await falcon.say_and_wait(`그, 그렇게까지 말씀하실 정도는 아닌데……`);
      await maru.say_and_wait(`흐음──기회가 되면 같이 연습하지 않을래?`);
      await falcon.say_and_wait(`저기, 팔코는`);
      await maru.say_and_wait(
        `더트라면,${maru.elder_sibling_sex_title}이(가) 그 약점을 어떻게든 해 볼게♪`,
      );
      await maru.say_and_wait(`그럼 다음에 또 보자♪`);
      await falcon.say_and_wait(
        `……네! 마루젠 선배와 함께라면 팔코도 더 많이 배울 수 있겠어요!`,
      );
      await era.printAndWait(`이렇게 제왕상은 멋지게 막을 내렸다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '합숙, 시작!';
    /**
     * 拍子、場面、順序、幕、物語
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.say_and_wait(`드디어 도착했다.`);
      await era.printAndWait(
        `${falcon.name}이(가) 우마스타에 올린 라이브 공지에 팬들이 순식간에 몰려들었다.`,
      );
      await era.printAndWait(
        `좋아요를 누르고, 질문에 정성껏 답하고, 악의적인 댓글은 지운다.`,
      );
      await era.printAndWait(
        `흔들리는 버스 안에서 계속 휴대 전화를 본 탓에, 목적지까지 사분의 일이 남았을 무렵 구역질이 밀려왔다.`,
      );
      await era.printAndWait(
        `겨우 도착하자마자 얼굴이 새파래질 때까지 토했다.`,
      );
      await era.printAndWait(`덕분에 살아 있다는 실감 하나는 또렷했다.`);
      await era.printAndWait(
        `하지만${falcon.name}에게는 쉼 없이 달려온 나날에서 마침내 쉴 수 있는 귀중한 하루이기도 하다.`,
      );
      await you.say_and_wait(`마치 휴가 같다.`, true);
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `${falcon.name}이(가)${you.name}을(를) 찾고 있다.`,
      );
      await you.say_and_wait(`여기야!`);
      await era.printAndWait(`최대한 큰 소리로 대답한다.`);
      await era.printAndWait(
        `대답을 들은${falcon.name}이(가) 파닥파닥 모래를 밟으며${you.name}에게 달려왔다.`,
      );
      await falcon.say_and_wait(`${callname}⭐ 앞으로의 훈련도 잘 부탁──`);
      await falcon.say_and_wait(`어어? ${callname}, 괜찮아?`);
      await era.printAndWait(
        `몸이 좋지 않아 창백해진${you.name}의 얼굴을 바라본다.`,
      );
      await you.say_and_wait(
        `팬들에게 답장을 오래 하다가 멀미가 좀 났을 뿐이야. 별일 아니야.`,
      );
      await falcon.say_and_wait(`아니야!`);
      await era.printAndWait(
        `우마무스메아이돌답지 않은 목소리로,${falcon.name}이(가) 강하게 반박했다.`,
      );
      await falcon.say_and_wait(
        `${callname}은(는) 팔코와 함께우마무스메아이돌의 길을 걷는 동료잖아! ${callname}이(가) 쓰러지면 팔코의 훈련에도 큰 지장이 생겨.`,
      );
      await era.printAndWait(
        `곁을 지나던우마무스메와(과) 트레이너들이 힐끔거린다.`,
      );
      await you.say_and_wait(`미안해. 다음부터는 조심할게.`);
      await era.printAndWait(
        `시선이 늘어서인지,${you.name}이(가) 사과해서인지,${falcon.name}의 태도가 누그러졌다.`,
      );
      await falcon.say_and_wait(`팔코도 말이 심했어. 미안해.`);
      await falcon.say_and_wait(
        `——${callname}이(가) 팔코에게 보이지 않는 곳까지 달려가 버리면……`,
      );
      await era.printAndWait(
        `${falcon.name}은(는) 고개를 숙이고 무언가 생각한다.`,
      );
      await you.say_and_wait(`팔코?`);
      await falcon.say_and_wait(
        `아무것도 아니야⭐ 팔코의 여름 합숙 계획은──해변의 손님들을 전부 팔코의 팬으로 만드는 거야!`,
      );
      await falcon.say_and_wait(
        `그러려면 다음 축제에서 보러 와 준 사람들의 마음을 사로잡아야지!`,
      );
      await you.say_and_wait(`훈련도 잊으면 안 돼!`);
      await era.printAndWait(
        `그 목표에서 힘을 얻었는지,${falcon.name}이(가) 반짝이고 있다.`,
      );
      await falcon.say_and_wait(`정말～그것도 놓치지 않을 거야⭐`);
      await era.printAndWait(
        `눈앞의${falcon.name}이(가) 평소 모습으로 돌아오자,${you.name}도 안심했다.`,
      );
      era.printButton(`응──그럼 일단 해변 열 바퀴를 돌며 몸부터 풀자!`, 1);
      await era.input();
      await falcon.say_and_wait(`네♪`);
      await era.printAndWait(
        `${you.name}와(과) 팔코의 시니어급 여름 합숙이 시작되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = '축제';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`해변에서 가까운 작은 마을에서
`);
      await era.printAndWait(
        `바다에 가깝다는 이점을 살려 일 년에 한 번 열리는 여름 축제가 한창이다.`,
      );
      await era.printAndWait(
        `최근 더트의 스타로 초대받은${falcon.name}이(가) 무대 한가운데 서 있다.`,
      );
      await falcon.say_and_wait(`～～～♪ 후우──고마워, 다들⭐`);
      await era.printAndWait(
        `무대 아래 관객들이 무대 위 아이돌에게 박수와 함성을 보낸다.`,
      );
      await you.say_and_wait(`역시 객석에서 보는 게 제일 좋다.`, true);
      await era.printAndWait(
        `${you.name}이(가) 객석에서${falcon.name}을(를) 보고 싶다고 하자,${falcon.name}은(는) 무언가 말하고 싶은 눈치였지만 물으려 하자 말을 돌려 버렸다.`,
      );
      await era.printAndWait(
        `그래도 곡이 끝날 무렵 팬들과 눈을 맞추는 사이, 희미한 시선 하나가 줄곧${you.name}을(를) 향하고 있다.`,
      );
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`조금 쓸쓸하다.`);
      await era.printAndWait(
        `${falcon.name}의 무대가 평범해서는 아니다. 푸른 원석은 연마되어 다이아몬드의 광채를 드러내기 시작했다.`,
      );
      await era.printAndWait(
        `그저 처음 만났을 무렵의 순수한${falcon.name}이(가) 조금 그립다.`,
      );
      await era.printAndWait(
        `지금의${falcon.sex}은(는) 이미 훌륭한 아이돌이다.`,
      );
      await era.printAndWait(`이제 충분해.`);
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`그래도 가슴속 불안은 사라지지 않았다.`);
      await era.printAndWait(`무언가 놓치고 있는 것 같다.`);
      await era.printAndWait(`그 슬픈 눈빛.`);
      await you.say_as_passer_by_and_wait(`관광객 A`, `으아악!`);
      await era.printAndWait(
        `비명과 함께 검붉은 액체가${you.name}에게 튀었다.`,
      );
      await you.say_and_wait(`으아아아!`);
      await era.printAndWait(
        `불행 중 다행으로 검붉은 액체는 시간이 지나 열기가 거의 식어 미지근할 뿐이었다.`,
      );
      await era.printAndWait(
        `남은 걱정은 국물투성이가 된 셔츠를 어떻게 빨 것인가, 그리고`,
      );
      await you.say_and_wait(`으아아아!`, true);
      await era.printAndWait(
        `눈꺼풀 가장자리가 마치 수많은 개미가 각막 주위를 기어 다니는 것 같다.`,
      );
      await you.say_and_wait(`냅킨, 물, 뭐든──`);
      await era.printAndWait(`주위를 더듬던 두 손이 겨우 젖은 수건을 잡았다.`);
      await you.say_and_wait(`미안해, 나중에 보상할게!`);
      await era.printAndWait(
        `스스로도 지나치다 싶은 말을 내뱉으며 일단 얼굴에 갖다 댄다.`,
      );
      await era.printAndWait(`주위가 크게 술렁인다.`);
      await you.say_and_wait(
        `……저 사람 옷을 수건 대신 찢어 버린 건 아니겠지……`,
        true,
      );
      await era.printAndWait(`따끔한 감각이 사라지고 눈을 크게 떴다.`);
      await you.say_and_wait(`미안해, 어떻게든 할 테니까……${falcon.name}。`);
      await era.printAndWait(
        `눈에 들어온 것은 오른팔 부분이 뜯겨 나간 아이돌 의상이었다.`,
      );
      await era.printAndWait(
        `무대 위에 있던${falcon.teen_sex_title}이(가) 무대 아래로 내려와 있었다.`,
      );
      era.drawLine();
      await era.printAndWait(
        `어떻게든 소동을 수습한 뒤,${you.name}와(과)${falcon.name}은(는) 기숙사로 돌아가는 길을 걷고 있었다.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`무슨 말부터 해야 할지 모르겠다.`);
      await era.printAndWait(
        `이렇게 당황한${falcon.name}은(는) 처음 본다.${falcon.name}와(과) 영원히 헤어지게 된다는 사실을 안 것처럼.`,
      );
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(`팔코가 망쳐 버렸어……`);
      await falcon.say_and_wait(`다들 멀리서 팔코를 응원하러 와 줬는데.`);
      await era.printAndWait(
        `충동이 가라앉자 후회하기 시작하는${falcon.name}。`,
      );
      await you.say_and_wait(
        `그렇지 않아. 팬들도 팔코가 당황하는 걸 보고 똑같이 걱정했을 거야.`,
      );
      await you.say_and_wait(
        `팔코가 안심하는 모습을 보여 주면 다들 안심할 거야.`,
      );
      await era.printAndWait(
        `${falcon.name}은(는) 무언가 말하려다 결국 침묵했다.`,
      );
      await era.printAndWait(
        `축제를 즐기는 인파를 거슬러 걸어 인적이 드문 곳에 이르자,${falcon.name}이(가) 비로소 입을 열었다.`,
      );
      await falcon.say_and_wait(`${callname}, 팔코는 제멋대로일까?`);
      await falcon.say_and_wait(
        `모든 팬을 공평하게 사랑한다고 말하면서 마음의 저울은 늘 한쪽으로 기울어.`,
      );
      await falcon.say_and_wait(
        `팔코는 결국 약속을 어겼어……자신의 책임, 아이돌의 책임도 또 저버렸고.`,
      );
      await era.printAndWait(
        `몇 번이나 생각한 끝에,${falcon.name}은(는) 속마음을 꺼냈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 안다. 그것이 바로${falcon.sex}을(를) 괴롭히는 고민이라는 것을.`,
      );
      await you.say_and_wait(`팔코, 트레이너가 하는 일이 뭔지 알아?`);
      await era.printAndWait(
        `잠시 생각한 뒤,${you.name}은(는) 최대한 차분하게 입을 열었다.`,
      );
      await falcon.say_and_wait(
        `──트레이너는 담당우마무스메의 가능성을 끌어내고 몸과 마음을 지켜 줘. 가장 중요한 건,우마무스메이(가)우마무스메의 길을 최대한 멀리까지 걸어갈 수 있게 돕는 거야.`,
      );
      await you.say_and_wait(
        `맞아. 팔코가 말한 일을 해내면 합격점을 받을 트레이너지.`,
      );
      await you.say_and_wait(
        `……하지만 더 빛나는 트레이너가 되기까지는 아직 거리가 있어.`,
      );
      await falcon.say_and_wait(`……팔코가 꿈꾸는 아이돌과 똑같네.`);
      await you.say_and_wait(
        `그 책임을 깨닫는 것 말고도 우리가 고민하는 건, 실패했을 때 어떻게 할 것인가야.`,
      );
      await you.say_and_wait(
        `실력과 재능이 아득히 높은 전설적인 트레이너나 남들이 질투할 만큼 운이 좋은 선택받은 자가 아니라면, 모든 평범한 사람은 이 무거운 질문과 마주한다.`,
      );
      await you.say_and_wait(
        `성공했을 때는 이겼다는 사실만으로 약속을 지켰다고 느낄 수 있어. 실패했을 때,${falcon.couple_title}에게 큰소리쳤던 자신을 어떻게 바라볼까?`,
      );
      await you.say_and_wait(`최선을 다했는데 운이 나빴을 뿐이라고 말해 봐도.`);
      await falcon.say_and_wait(`그렇구나……`);
      await you.say_and_wait(`유감스럽지만 실패의 결과는 받아들여야 해.`);
      await you.say_and_wait(
        `가볍게는 기대했던 성과가 낮아지고 외부의 의심을 사겠지. 심하면 사직을 강요받고 생명까지 위험해질 수 있어.`,
      );
      await you.say_and_wait(
        `이 질문에 뛰어난 트레이너들은 각기 다른 답을 내놓아. 내 답은,`,
      );
      await you.say_and_wait(
        `내가 선택할 수 없는 사고의 이면에도 결국 나를 향한 호의가 있다는 거야. 사고가 나서 그 순간에는 실패하더라도, 결국 그 실패가 성공보다 나을 수도 있어.`,
      );
      await you.say_and_wait(`그러니 그 책임을 받아들이겠어.`);
      await you.say_and_wait(
        `자신의 선택은 스스로 책임진다. 아이돌도 트레이너도 결국 향하는 곳은 같아.`,
      );
      await you.say_and_wait(
        `그러니까 자신의 책임을 이해했다면 자신의 생각대로 해도 돼.`,
      );
      await era.printAndWait(
        `그 뒤로 이어지는 길에서,${falcon.name}의 발걸음은 한결 가벼워졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙 종료';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}의 시니어급 여름 합숙이 끝났다.`);
      await falcon.say_and_wait(
        `톱 아이돌로 가는 길, 멈추지 않고 나아갈 거야♪`,
      );
      await era.printAndWait(
        `여름 합숙을 마치는 연회에서 술을 많이 마셨다는 핑계로 빠져나온${you.name}은(는) 마찬가지로 자리를 비운${falcon.teen_sex_title}와(과) 마주쳤다.`,
      );
      await you.say_and_wait(
        `유명 아이돌 팔코가 연회에서 빠져나오다니 드문 일이네.`,
      );
      await falcon.say_and_wait(
        `팬 1호가 없으면 아이돌 활동도 갑자기 빛을 잃으니까.`,
      );
      await era.printAndWait(`그렇구나.`);
      await you.say_and_wait(`팔코는 이제 외롭지 않아?`);
      await falcon.say_and_wait(
        `……솔직히 아직 무서워. 하지만 예전만큼은 아니야.`,
      );
      await falcon.say_and_wait(`${callname}이(가) 늘 곁에 있으니까.`);
      await you.say_and_wait(`……그게 팔코의 답이구나.`, true);
      await era.printAndWait(
        `${falcon.name}이(가) 몸을 살짝 앞으로 기울이고 오른손 검지를 입술 한가운데 세운 뒤 오른쪽 눈을 감았다.`,
      );
      await falcon.say_and_wait(
        `게다가,${falcon.name}은(는) 정말 좋아하는${callname}와(과) 세상에서 가장 큰 무대에 서고 싶어!`,
      );
      await falcon.say_and_wait(
        `그때는……팔코……아니,${falcon.name}은(는) 아무 말도 안 했어⭐`,
      );
      await era.printAndWait(
        `${falcon.sex}의 감출 수 없는 미소를 보니 행복한 상상을 한 모양이다.`,
      );
      await era.printAndWait(
        `그 꿈을 위해 노력하는 하루하루가 바로 꿈을 이루는 시간이다.`,
      );
      await falcon.say_and_wait(
        `걸어온 길 주변으로 끝없이 펼쳐진 초원이 보이기 시작했다.`,
      );
      await you.say_and_wait(
        `톱 아이돌이 되려면 다음 레이스도 방심하면 안 돼!`,
      );
      await falcon.say_and_wait(`아니야!`);
      await era.printAndWait(`${falcon.name}의 말에,${you.name}은(는) 놀랐다.`);
      await you.say_and_wait(`팔코, 무슨 뜻이야?`);
      await falcon.say_and_wait(
        `${callname}이(가) 전에 말했잖아. 자신의 선택은 스스로 책임지는 거라고.`,
      );
      await falcon.say_and_wait(
        `팔코는 마음의 저울을${callname}쪽으로 기울였지만,${falcon.uma_sex_title}아이돌로서의 책임은 변하지 않아.`,
      );
      await falcon.say_and_wait(
        `얼마나 시간이 지나도, 약속을 들은 사람들이 잊어버려도, 그건 변하지 않아.`,
      );
      await falcon.say_and_wait(
        `그러니까 과로로 쓰러질 때까지, 은퇴할 때까지 팔코는${falcon.uma_sex_title}아이돌의 책임을 짊어질 거야.`,
      );
      await falcon.say_and_wait(`그게 팔코가 내놓은 답이야.`);
      await era.printAndWait(
        `옆에 있는${falcon.teen_sex_title}은(는) 후련한 표정을 하고 있다.${falcon.sex}은(는) 각오를 다졌다.`,
      );
      era.printButton(`가장 가까운 곳에서 지켜보게 해 줘.`, 1);
      await era.input();
      await falcon.say_and_wait(`후후후.`);
      await era.printAndWait(
        `${falcon.name}이(가) 갑자기 웃음을 터뜨리더니 눈물이 날 때까지 웃었다.`,
      );
      era.printButton(`팔코?`, 1);
      await era.input();
      await era.printAndWait(`그리고${you.name}을(를) 힘껏 끌어안았다.`);
      await falcon.say_and_wait(`고마워,${callname}。`);
      await era.printAndWait(`${falcon.name}은(는) 이제 혼자가 아니야.`);
    };
    f.title = title;
    return f;
  })(),
  we_95_37: (() => {
    const title = '선배와 후배';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(
        `신중하게 생각한 끝에,${you.name}은(는) JBC 클래식, 챔피언스컵, 도쿄 대상전 세 경주를 시니어급 후반 계획에 넣었다.`,
      );
      await era.printAndWait(
        `후반의 세 경주를 전부 이긴다. 그 부담감은 말할 필요도 없다.`,
      );
      await era.printAndWait(
        `톱 아이돌이란 그런 험난한 무대에서도 모두에게 희망을 전하는 존재다.`,
      );
      await era.printAndWait(`똑똑똑.`);
      await you.say_and_wait(`누군가를 부른 기억은 없다.`);
      await era.printAndWait(
        `${falcon.name}이라면 그냥 들어올 것이다.${minoru.name}이라면 먼저 휴대 전화로 연락할 것이다. 다른${falcon.uma_sex_title}이라면 대부분 내가 먼저 연락한다.`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `오랜만이에요,${callname}！`,
      );
      await era.printAndWait(
        `밤색 머리의${falcon.uma_sex_title}이(가) 문을 열다가 너무 흥분한 나머지 문손잡이를 떼어 버렸다.`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `아, 죄송해요! 너무 흥분해서!`,
      );
      await era.printAndWait(`어디선가 본 얼굴이다.`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `${callname}, 저 기억하세요?`,
      );
      await era.printAndWait(`머릿속에 이름이 떠올랐다가 사라지기를 반복한다.`);
      await era.printAndWait(
        `${falcon.name}이(가) 여기 있다면 한눈에 알아봤겠지.`,
      );
      await era.printAndWait(
        `${falcon.sex}은(는) 라이브를 보러 온 팬들의 얼굴을 한 사람도 빠짐없이 기억한다.`,
      );
      await you.say_and_wait(
        `라이브? ${falcon.uma_sex_title}, 강가의 풀밭.`,
        true,
      );
      await you.say_and_wait(`그러고 보니 한 사람 만난 적이 있다.`, true);
      await you.say_and_wait(
        `작년에 아이돌이 되겠다고 결심했던 그${falcon.uma_sex_title}구나.`,
      );
      await era.printAndWait(
        `체격도 키도 거의 변하지 않은 것 같지만 예전의 분위기가 남아 있다.`,
      );
      await you.say_and_wait(`너도 본격화를 맞이했구나.`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `역시${callname}! 처음에는 기억 못 하시면 어쩌나 걱정했는데 괜한 생각이었네요.`,
      );
      await era.printAndWait(
        `짐작이 맞았다. 원하는 답을 얻은${falcon.uma_sex_title}이(가) 의기양양하게 귀를 세운다.`,
      );
      await you.say_and_wait(
        `좌절, 방황, 알 수 없는 일들. 땀과 눈물은 기본이고, 신념이 목숨보다 무거울 때도 있다.`,
      );
      await you.say_and_wait(
        `아이돌의 길은 나도 잘 모르지만 힘이 될 수 있다면 기쁘겠어.`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `트,${callname}, 대체 무슨 일을 겪으신 거예요?`,
      );
      await era.printAndWait(
        `${you.name}의 평범한 이력에 겁을 먹고 소파 구석에서 떠는${falcon.uma_sex_title}。`,
      );
      await era.printAndWait(
        `실례되는 반응이다. 내 경험을 꾸밈없이 이야기했을 뿐인데.`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await you.say_as_passer_by_and_wait(falcon.uma_sex_title, `팔코 선배!`);
      await era.printAndWait(`방금 있었던 일을 설명한 뒤.`);
      await falcon.say_and_wait(`아이돌의 일상이야.`);
      await era.printAndWait(
        `미소 짓는${falcon.name}의 목소리는 조금도 달라지지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_38: (() => {
    const title = '마음에 새기는 거울';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.used_to_say_and_wait(`${falcon.uma_sex_title}아이돌?`);
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title}아이돌이라니, 조금 막연한 말이네.`,
      );
      await you.used_to_say_and_wait(
        `레이스에 나가 빛나는 거라면 코스를 달리는${falcon.uma_sex_title}은(는) 모두 똑같아.`,
      );
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title}아이돌만의 특별함은 어디에 있을까?`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `처음 훈련했을 때,${callname}이(가) 이 질문을 던졌다.`,
      );
      await falcon.print_and_wait(`……그때는 뭐라고 대답했더라?`);
      await falcon.print_and_wait(`그 자리만 모면하고 넘겼었지.`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`지금도 정답을 내놓을 수 없다.`);
      await falcon.print_and_wait(
        `사춘기 특유의 섬세함이 빚어내는 귀여움을 매력으로 내세우고 싶다.`,
      );
      await falcon.print_and_wait(
        `그렇게 팬들과 함께 성장하고, 마지막에는 보는 사람과 보이는 사람으로서 톱 아이돌 명예의 전당 문을 두드린다.`,
      );
      await falcon.print_and_wait(
        `강가에서 자원봉사로 쓰레기를 줍는 일도, 힘겨운 게릴라 라이브도.`,
      );
      await falcon.print_and_wait(
        `생활 가까이에 있는 아이돌이라는 생각을 관철하며 팬들에게 자신의 성장을 전한다.`,
      );
      await falcon.print_and_wait(
        `아픔과 실의는 숨기고, 사람들이 기대하는 아이돌의 가면을 쓴다.`,
      );
      await falcon.print_and_wait(`……그 과정은 생각만큼 괴롭지 않았다.`);
      await falcon.print_and_wait(`풀밭 위의 무대도 하나의 훈련이다.`);
      await falcon.print_and_wait(
        `텔레비전과 댄스 선생님, 인터뷰 잡지에서 배운 경험을 떠올린다.`,
      );
      await falcon.print_and_wait(
        `박자에서 박자로, 동작에서 동작으로, 순간에서 순간으로.`,
      );
      await falcon.print_and_wait(`타고난 재능처럼 될 때까지 계속 갈고닦는다.`);
      await falcon.print_and_wait(`한 곡이 끝났다.`);
      await falcon.print_and_wait(`눈을 뜨고 아무도 없는 풀밭을 마주한다.`);
      await falcon.print_and_wait(`눈을 뜨고 한 사람이 있는 풀밭을 마주한다.`);
      await falcon.print_and_wait(`눈을 뜨고 몇 사람이 있는 풀밭을 마주한다.`);
      await falcon.print_and_wait(`눈을 뜨고 커다란 무대를 마주한다.
`);
      await falcon.print_and_wait(
        `지식이었던 것이 본능에 녹아들고, 본능은 다시 새로운 지식을 굳힌다.`,
      );
      await falcon.print_and_wait(
        `녹았다 굳기를 반복하며 생의 끝까지 이어지는 그 강은, 밖에서 보면 다이아몬드 같다.`,
      );
      era.drawLine();
      await falcon.say_and_wait(`JBC 클래식도 이제 얼마 안 남았네.`);
      await falcon.say_and_wait(`……${callname}。`);
      await falcon.say_and_wait(
        `팔코에게 시간이 조금만 더 있었다면, 더 일찍 깨달았을 거야.`,
      );
      await falcon.say_and_wait(
        `아니야! ${callname}은(는) 지금의 팔코를 좋아하지 않을 거야!`,
      );
      await falcon.say_and_wait(
        `${callname}이(가) 기대하는 팔코는 언제나 활기차게 앞으로 나아가는 완벽한 아이돌이야!`,
      );
      await falcon.say_and_wait(
        `그러니까 코스에서도 무대에서도 팔코는 계속 빛날 거야. 모두의 눈을 사로잡을 때까지!`,
      );
      era.drawLine();
      await falcon.print_and_wait(`죄책감이라는 높은 벽에 가로막혀 있어도.`);
      await falcon.print_and_wait(
        `팬에게 습격당한 원인은 기울어진 저울. 팬의 소망을 외면한 아이돌의 말로.`,
      );
      await falcon.print_and_wait(`아이돌이 성장할수록 압박해 오는 악의.`);
      await falcon.print_and_wait(
        `이대로 가면 언젠가 그 거대한 압력을 견디지 못하고 달궈진 바위처럼 작은 계기에도 터져 버릴 것이다.`,
      );
      await falcon.print_and_wait(
        `잘못된 선택만 해 온 내가, 단 하나 옳다고 확신하는 것.`,
      );
      await falcon.print_and_wait(`──아아, 시간이 조금만 더 있다면.`);
      await falcon.print_and_wait(
        `시간이 더 있었다면 이 얽힌 매듭을 풀 수 있었을 텐데.`,
      );
      await falcon.print_and_wait(`하지만 그건 불가능하다.`);
      await falcon.print_and_wait(
        `마땅히 해야 할 의무에서 도망치는 한 미래는 오지 않는다.`,
      );
      await falcon.print_and_wait(
        `아이돌의 길을 선택한 이상, 팬들이 보내는 믿음과 기도에는 반드시 보답한다.`,
      );
      await falcon.print_and_wait(`아이돌로서 끝까지 본분을 다한다.`);
      await falcon.print_and_wait(`그러니 이제 도망치지 않겠다.`);
      await falcon.print_and_wait(`처음 더트 레이스를 봤을 때를 기억해?`);
      era.printButton(
        `뒤쫓던${falcon.uma_sex_title}이(가) 선두의${falcon.uma_sex_title}을(를) 추월했어.`,
        1,
      ); //恋慕が責任を越える
      era.printButton(
        `선두의${falcon.uma_sex_title}이(가) 중요한 한 걸음을 내디뎠어.`,
        2,
      ); //責任が恋慕を押さえる
      // teは2、geは1
      const ret = await era.input();
      if (ret === 1) {
        await falcon.print_and_wait(
          `──그래. 뒤쫓던${falcon.uma_sex_title}이(가) 선두의${falcon.uma_sex_title}을(를) 추월했지.`,
        );
        await falcon.print_and_wait(
          `더트의${falcon.uma_sex_title}이(가) 마주하는 환경은 더 가혹하다.`,
        );
        await falcon.print_and_wait(
          `온 힘을 다해 머리를 비우고, 눈앞의 목표를 추월하기 위해.`,
        );
        await falcon.print_and_wait(`그래도 부족하다.`);
        await falcon.print_and_wait(
          `처음에 좋은 위치를 잡지 못하면 뒤처진 자는 모래의 시련을 겪는다.`,
        );
        await falcon.print_and_wait(
          `승부복은 더트에 더러워지고 예쁜 얼굴은 모래에 뒤덮인다. 어느 각도에서 봐도 빛나는 모습이라고 할 수 없다.`,
        );
        await falcon.print_and_wait(
          `눈에 들어간 모래가 깊이 파고들고, 가쁜 호흡도 모래 때문에 흐트러진다.`,
        );
        await falcon.print_and_wait(
          `생각할 틈도 없이, 자신의 존재마저 잊은 채 상대를 추월한다.`,
        );
        await falcon.print_and_wait(`그것이 경쟁하는 의미다.`);
      } else {
        await falcon.print_and_wait(
          `선두의${falcon.uma_sex_title}이(가) 중요한 한 걸음을 내디뎠어.`,
        );
        await falcon.print_and_wait(
          `작년에 스즈카가 잔디 레이스를 알려 줬을 때, 다른 사람에게는 양보하지 않겠다던 풍경……이거였던가.`,
        );
        await falcon.print_and_wait(`선두의 풍경……그립네.`);
        await falcon.print_and_wait(
          `전국 투어를 돌며 지방의${falcon.uma_sex_title}와(과) 치렀던 레이스.`,
        );
        await falcon.print_and_wait(`잔디 레이스보다 더트의 인상이 강하다.`);
        await falcon.print_and_wait(`……`);
        await falcon.print_and_wait(`사츠키상만 빼고.`);
        await falcon.print_and_wait(
          `노래의 리듬에 따라 바뀌는 조명. 객석의 야광봉이 리듬에 맞춰 바다를 이룬다. 멀리서 보면 층이 선명한 물결 같다.`,
        );
      }
      await falcon.print_and_wait(`……아아……또${callname}의 얼굴이 떠오른다.`);
      await falcon.print_and_wait(`도망치면 안 되는데.`);
      await falcon.print_and_wait(`눈물이 멈추지 않더라도.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_40: (() => {
    const title = '하늘과 대지와 이곳에 살아가는 우리';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`공원
`);
      await era.printAndWait(`팔코의 제안으로 공원 잔디밭에 왔다.`);
      await era.printAndWait(
        `가을도 벌써 절반이 지났고, 행인들도 외투를 입기 시작했다.`,
      );
      await you.say_and_wait(`팔코, 춥지 않아?`);
      await era.printAndWait(
        `얇은 옷차림의 팔코를 보니 나도 모르게${falcon.sex}에게 묻고 싶어졌다.`,
      );
      await falcon.say_and_wait(`팔코는 안 추운데?`);
      await era.printAndWait(
        `그렇지.${falcon.uma_sex_title}은(는) 인간보다 체온이 조금 높다.`,
      );
      await you.say_and_wait(`팔코가 조금 부럽네.`);
      await falcon.say_and_wait(`${callname}, 갑자기 무슨 말이야?`);
      await you.say_and_wait(
        `팔코처럼 밝고 귀여운${falcon.uma_sex_title}아이돌의 트레이너라니 운이 좋지.`,
      );
      await falcon.say_and_wait(
        `어～～? 정말! ${callname}이(가) 갑자기 그런 말을 하면, 팔코는……`,
      );
      await you.say_and_wait(`아, 도착했다.`);
      await era.printAndWait(
        `공원의 호수 근처 잔디밭. 나들이객과 뛰노는 아이들이 곳곳에 있다.`,
      );
      await you.say_and_wait(`호수 쪽에 생각보다 사람이 많네.`);
      await era.printAndWait(
        `가져온 가방에서 직접 만든 도시락을 꺼내며 무심코 말한다.`,
      );
      await falcon.say_and_wait(`호수에 오는 사람은 커플이 많네.`);
      await era.printAndWait(
        `팔코는 펼쳐 놓은 담요에 얌전히 앉아 이쪽을 보고 있다.`,
      );
      await you.say_and_wait(`우마스타에서 유명한 커플 명소가 됐나 봐. 자.`);
      await falcon.say_and_wait(`커플은 휴일에만 놀러 나올 수 있으니까──`);
      await era.printAndWait(`팔코는 준비해 둔 당근 꿀 특제 음료를 받아 든다.`);
      await falcon.say_and_wait(`……커플이라.`, true);
      await you.say_and_wait(`팔코는 어떻게 생각해?`);
      await falcon.say_and_wait(`어?`);
      await era.printAndWait(
        `${you.name}에게 속마음을 들킨 팔코가 너무 세게 힘을 준 탓에 뚜껑이 멋진 포물선을 그리며 조금 떨어진 나무줄기에 깊숙이 박혔다.`,
      );
      await falcon.say_and_wait(`……${callname}, 보고 있어! 얍!`);
      await era.printAndWait(
        `${you.name}이(가) 반응하기도 전에 팔코는 뚜껑이 박힌 큰 나무로 달려갔다.`,
      );
      await falcon.say_and_wait(`커플? 팔코와${callname}`, true);
      await era.printAndWait(
        `아직 반응하기도 전에 팔코는 뚜껑이 박힌 큰 나무로 달려갔다.

`,
      );
      await era.printAndWait(`작은 소동이 지나고 두 사람은 다시 앉았다.`);
      await era.printAndWait(
        `${you.name}은(는) 팔코가 직접 만든 도시락을 맛보며 옆에서 건네준 음료를 받는다.`,
      );
      await era.printAndWait(
        `차가운 음료가 목을 타고 내려가자 만족스러운 트림이 나왔다.`,
      );
      await you.say_and_wait(`음──조금 달네.`);
      await falcon.say_and_wait(`도시락에 딸기 주스를 뿌렸거든.`);
      await falcon.say_and_wait(
        `그러고 보니 플래시도 시식할 때 비슷한 말을 했어.`,
      );
      await era.printAndWait(
        `에이신 플래시가 옆에서 지도했다면 단 것도 이해된다.`,
      );
      await you.say_and_wait(`그랬구나. 케이크 같은──`);
      await falcon.say_and_wait(`아니야! 이건 팔코가 직접 생각한 거야!`);
      await era.printAndWait(
        `갑자기 커진 팔코의 목소리에 행인들이 힐끔거렸다.`,
      );
      await falcon.say_and_wait(`아, 미안해. 갑자기 흥분해서.`);
      await falcon.say_and_wait(`이러면 팔코답지 않지⭐ 하하하.`);
      await era.printAndWait(
        `무언가 깨달은 팔코는 고개를 숙였고, 얼굴이 물들 듯 새빨개졌다.`,
      );
      era.printButton(`고마워, 팔코.`, 1);
      await era.input();
      await era.printAndWait(`팔코의 작은 머리를 살며시 쓰다듬는다.`);
      await falcon.say_and_wait(`팔코는 이제 어린애가 아니야.`);
      await era.printAndWait(
        `말로는 항의해도 거세게 거부하지는 않고 그대로 머리를 맡겨 준다.`,
      );
      await you.say_and_wait(`팔코는 이런 자리가 어려워?`);
      await falcon.say_and_wait(
        `남의 시선은 그렇게 신경 쓰지 않지만, 조금은 그래.`,
      );
      await falcon.say_and_wait(`……${callname}의 평가는 조금 신경 쓰여.`);
      await era.printAndWait(`마지막 목소리는 점점 작아졌다.`);
      await you.say_and_wait(`무대 위 팔코도 좋지만 이런 팔코도 귀엽네.`);
      await you.say_and_wait(`팔코가 빛나는 모습도 귀여워.`);
      await falcon.say_and_wait(`팔코는 생각만큼 빛나지 않아.`);
      await falcon.say_and_wait(
        `${callname}을(를) 만나기 전에는 매일 아이돌 활동과 마감 직전의 학점 때문에 바쁘게 뛰어다녔어.`,
      );
      await falcon.say_and_wait(`겨우 쉴 틈이 생기면 자꾸 생각했지.`);
      await falcon.say_and_wait(`팔코가 가는 길은 잘못됐을지도 모른다고.`);
      await era.printAndWait(`손에 든 찻잔을 바라보는 팔코. 위로하려던`);
      await falcon.say_and_wait(
        `하지만 얼마 전 일을 겪고 이제 마음이 후련해졌어.`,
      );
      await falcon.say_and_wait(
        `이렇게 잘못된 길을 계속 달려온 게 바로 팔코야!`,
      );
      await falcon.say_and_wait(`아이돌이란 그런 거잖아?`);
      era.printButton(
        `다른 사람에게 희망을 전하고 더 많은 사람을 이끄는 것?`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(
        `아니야! 이 길을 걷고 싶은 사람의 마음에 용기를 주는 것!`,
      );
      await falcon.say_and_wait(
        `이 길을 걷는 사람은 팔코보다 똑똑하고 더 노력할 테니까, 더 빛날 거야!`,
      );
      era.printButton(`부족한 건 그 용기뿐이라는 거야?`, 1);
      await era.input();
      await falcon.say_and_wait(
        `그게 팔코가${falcon.uma_sex_title}아이돌로 있는 이유야!`,
      );
      await falcon.say_and_wait(
        `팔코는 그다지 똑똑하지 않으니까 용기를 내서 더 많은 사람을 도울 거야!`,
      );
      await falcon.say_and_wait(
        `팔코의 춤을 접한${falcon.uma_sex_title}들이 팔코가 걸어온 길에 들어선 걸 보고.`,
      );
      await falcon.say_and_wait(`팔코는 진심으로 기뻤어.`);
      await falcon.say_and_wait(
        `텔레비전 속 아이돌에게 힘을 얻었던 그때의 나 같아서.`,
      );
      await era.printAndWait(
        `열심히 이야기하던 팔코는 들고 있던 차가 식었다는 것을 뒤늦게 깨닫는다.`,
      );
      era.printButton(`팔코는 대단하네.`, 1);
      await era.input();
      await falcon.say_and_wait(
        `그렇지 않아! 팔코는 평범한${falcon.uma_sex_title}아이돌이야.`,
      );
      await falcon.say_and_wait(
        `하면 기쁘니까 하는, 평범하고 작은${falcon.uma_sex_title}일 뿐이야.`,
      );
      await falcon.say_and_wait(`게다가,`);
      await falcon.say_and_wait(
        `고백조차 못 하는 가장 못난${falcon.uma_sex_title}아이돌이고.`,
        true,
      );
      era.printButton(`게다가?`, 1);
      await era.input();
      await falcon.say_and_wait(`에헤헤⭐`);
      await era.printAndWait(
        `그 뒤의 대화는 호수에 첫 금빛이 내려앉을 무렵 끝났다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = 'JBC 클래식·아이돌의 첫걸음';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(
        `아이돌의 길에 놓인 시련 중 하나, JBC 클래식이 시작되었다.`,
      );
      await era.printAndWait(
        `${falcon.name}이(가) 출전한다는 소식에 클래식의 관객이 순식간에 늘었다.`,
      );
      await era.printAndWait(`비인기 잔디 G1과 견줄 만한 수준이 되었다.`);
      await era.printAndWait(`그리고 팔코에게는.`);
      await falcon.say_and_wait(
        `팔코 같은 평범한${falcon.uma_sex_title}에게 지금까지의 승리는 전부 기적 같은 거야.`,
      );
      await falcon.say_and_wait(`그래도 팔코는 계속 빛나고 싶어.`);
      await you.say_and_wait(
        `그렇다면 이제 해도 돼. 팔코, 네 생각대로 이 그림을 그려 봐!`,
      );
      await you.say_and_wait(
        `최고의${falcon.uma_sex_title}아이돌이란 스스로 정하는 거야!`,
      );
      await era.printAndWait(
        `대기실 안에서도 밖의 귀가 멎을 듯한 함성이 희미하게 들린다.`,
      );
      await falcon.say_and_wait(`그래도 팔코는 계속 빛나고 싶어.`);
      await falcon.say_and_wait(
        `지금부터 팔코가 빛나는 모습, 똑똑히 지켜봐 줘!`,
      );
      await era.printAndWait(`아직 젊은 아이돌이 코스로 향했다.`);
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = 'JBC 클래식 후·다시 출발!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await you.say_as_passer_by_and_wait(
        `팬`,
        `팔코! 팔코! 우오오오오오오오오!`,
      );
      await era.printAndWait(
        `결승선을 통과한 순간, 경기장의 관객들이 더트에 떠오른 스타에게 함성을 보낸다.`,
      );
      await you.say_and_wait(`팔코, 생각보다 더 빛나네.`);
      await falcon.say_and_wait(
        `응원해 줘서 고마워. 앞으로도 팔코를 잘 부탁해!`,
      );
      await you.say_and_wait(`응──다음은 위너스 스테이지네.`);
      await era.printAndWait(
        `${you.name}은(는) 올해 JBC에서 만든 디스크를 영상 기기에 넣는다.`,
      );
      await era.printAndWait(
        `현장에서${falcon.name}의 결승선 통과를 보지는 못했지만 본인의 생생한 설명이 어느 정도 아쉬움을 달래 준다.`,
      );
      await falcon.say_and_wait(
        `다음은 팔코가 추천하는 위너스 스테이지 시간⭐`,
      );
      await era.printAndWait(
        `영상 속의${falcon.name}이(가) 홀로 위너스 스테이지로 향한다.`,
      );
      era.drawLine({ content: 'ウィンナーズステージのあと' });
      await falcon.say_and_wait(`올해 목표는 이제 도쿄 대상전만 남았다.`);
      await era.printAndWait(
        `팔코의 무대는 상상 이상이어서 팬들의 기세가 무대를 뒤집을 듯했다.`,
      );
      await era.printAndWait(
        `직접 보는 것보다는 현장감이 덜하지만,${you.name}도 충분히 만족했다.`,
      );
      await you.say_and_wait(`톱 아이돌까지 이제 한 걸음 남았네?`);
      await falcon.say_and_wait(`정상까지는 아직 멀었어.`);
      await you.say_and_wait(`그렇게 말하면서도.`);
      await era.printAndWait(
        `${you.name}은(는) 영상을 멈추고 다시${falcon.name}을(를) 바라본다.`,
      );
      await you.say_and_wait(`팔코, 생각보다 강하구나.`);
      await falcon.say_and_wait(`……팔코는 생각만큼 강하지 않은걸?`);
      await you.say_and_wait(`올해를 마무리할 도쿄 대상전을 위해 지금은 쉬자.`);
      await you.say_and_wait(`왜냐하면 팔코는.`);
      await era.printAndWait(
        `옆에 있는${falcon.name}에게서 고른 숨소리가 들려온다.`,
      );
      await era.printAndWait(
        `그동안의 준비를${falcon.name}혼자 해 온 피로가 마침내 한계에 달한 모양이다.`,
      );
      await you.say_and_wait(`지금은${falcon.sex}이(가) 잠깐 자게 두자.`, true);
      await you.say_and_wait(`고마워,${falcon.name}。`);
      await era.printAndWait(
        `${falcon.name}을(를) 푹신한 소파에 조심히 눕히고 트레이너 재킷을${falcon.sex}에게 덮어 준다.`,
      );
      await era.printAndWait(
        `너무 흔들었는지,${falcon.name}의 귀가 움직이더니 몸이 더 편한 자세로 바뀐다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_cham_cup_s: (() => {
    const title = '챔피언스컵·더트의 톱 아이돌!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`두 번째 경주, 챔피언스컵이 시작되었다.`);
      await era.printAndWait(
        `클래식을 준비하며 다져 온 힘으로 다음은 챔피언스컵이다.`,
      );
      await era.printAndWait(
        `예전처럼 전단지를 들고 돌아다닐 필요도 없이,${falcon.name}이(가) 나온다는 소식을 들은 팬들이 알아서 표를 샀다.`,
      );
      await falcon.say_and_wait(`팔코, 생각했던 것보다 인기 많네.`);
      await era.printAndWait(`바깥의 소란은 오히려 큰 압박감으로 다가온다.`);
      await you.say_and_wait(`무리해서 나온 거야?`);
      await era.printAndWait(
        `미세하게 떨리는 두 손. 보이지 않는 압박 앞에서 팔코는.`,
      );
      await falcon.say_and_wait(`다음 레이스도 팔코, 힘낼게!`);
      await you.say_and_wait(`행운을 빌어……몸이 안 좋으면 내게 와.`);
      await era.printAndWait(
        `잠시 멈췄다가,${falcon.name}은(는) 대기실 문을 열었다.`,
      );
      await era.printAndWait(
        `귀를 울리는 함성 속에서,${falcon.name}은(는) 코스에 올랐다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  cham_cup_win_s: (() => {
    const title = '챔피언스컵 후·목표──도쿄 대상전';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name}은(는) 여유롭게 챔피언스컵을 거머쥐었다.`,
      );
      await era.printAndWait(
        `무대 위의${falcon.name}은(는) 한층 더 빛나고 있다.`,
      );
      await era.printAndWait(`대기실에서`);
      await falcon.say_and_wait(`${callname}──이제 도쿄 대상전만 남았네.`);
      await you.say_and_wait(`팔코라면 할 수 있어.`);
      await era.printAndWait(`조용히 내 마음을 전했다.`);
      await era.printAndWait(`격려라기보다 확고한 확신을 말하고 있다.`);
      await falcon.say_and_wait(`──지금 팔코는 조금 긴장돼.`);
      await era.printAndWait(
        `그렇다. 마지막 한 걸음을 앞두고 결과를 기다리는 시간이 가장 긴장된다.`,
      );
      await you.say_and_wait(
        `${
          falcon.name
        }은(는) 내가 본 중 가장 강한${falcon.uma_sex_title}이야. 그러니 네 꿈이 이루어졌으면 해.`,
      );
      await era.printAndWait(
        `${falcon.name}의 작은 머리를 쓰다듬는다. 처음에는 거부하던${falcon.sex}이(가) 지금은 차분해 보인다.`,
      );
      await falcon.say_and_wait(`마음이 조금 진정됐어. 고마워.`);
      await you.say_and_wait(`진정됐으면 어디 가서 먹으면서 축하할까?`);
      await falcon.say_and_wait(`고기가 먹고 싶어. 같이 가자⭐`);
      await era.printAndWait(
        `식사를 즐긴 뒤 통금 시간 전에${falcon.name}을(를) 기숙사까지 데려다주었다.`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(
        `무언가 말하려던${falcon.name}이(가) 잠시 망설인다.`,
      );
      await you.say_and_wait(`왜 그래?`);
      await falcon.say_and_wait(`아무것도 아니야⭐`);
      await era.printAndWait(
        `${falcon.teen_sex_title}은(는) 입을 가리고 쿡쿡 웃더니 달려갔다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_45: (() => {
    const title = '모이사나이트';
    /**
     * 約束を破っても、心が狂っても、
     * アイドルである以上、ファンの期待には真剣に応える
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(
        `${callname}을(를) 배웅한 뒤 스마트 팔콘은 홀로 트레이너실 소파에 앉아 있었다.`,
      );
      await falcon.print_and_wait(
        `천진난만한 가면을 벗고 조용한 순간을 음미한다.`,
      );
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`트레센의 밤은 생각보다 고요하다.`);
      await falcon.say_and_wait(`그러고 보니,`);
      await falcon.print_and_wait(
        `도쿄 대상전이 끝나면${callname}와(과)의 계약도 끝나네.`,
      );
      await falcon.print_and_wait(
        `상황에 따라 이사장님께 연장을 신청할 수는 있지만, 어째서인지 의욕이 나지 않아.`,
      );
      await falcon.print_and_wait(
        `무언가 부족해. 아직 깨닫지 못한 부분이 있어.`,
      );
      await falcon.print_and_wait(`가슴의 통증이 그 답을 찾게 한다.`);
      await falcon.say_and_wait(`오늘 달은 생각보다 예쁘네.`);
      await falcon.print_and_wait(
        `트레이너실 창문으로 들어오는, 건드리면 찢어질 듯 흐릿한 달빛.`,
      );
      await falcon.print_and_wait(
        `하얀 비단이 뻗는 방향으로 시선이 내려가고, 환상의 끝에는 차갑고 검은 물체가 있다.`,
      );
      await falcon.print_and_wait(
        `……너무 많이 써서 일찍 수명을 다한 마이크${you.adult_sex_title}인가.`,
      );
      await falcon.say_and_wait(`너도 네 역할을 다했구나.`);
      await falcon.print_and_wait(`검은 물체는 말없이 자신을 바라보고 있다.`);
      await falcon.say_and_wait(`아아, 정말.`);
      await falcon.print_and_wait(`왜 그렇게 슬픈 눈으로 보는 거야?`);
      await falcon.say_and_wait(`……맞아. 팔코에게는 이제 아무것도 없어.`);
      await falcon.say_and_wait(
        `양립할 수 없는 두 가지를 붙잡으려다 결국 모두 잃었어.`,
      );
      await falcon.say_and_wait(
        `팬들과의 거리를 조절하려고,${callname}을(를) 향한 연심을 깊이 묻었어.`,
      );
      await falcon.say_and_wait(
        `그래도 팔코를 응원해 준 팬들에게, 금 간 다이아몬드는 예전의 빛에 미치지 못해.`,
      );
      await falcon.print_and_wait(
        `마이크${you.adult_sex_title}의 물음에 진지하게 답한다.`,
      );
      await falcon.print_and_wait(
        `바람을 견딜 수 없는 대가를 치르고 이루더라도, 무대에 서서 그 순간이 탄생하는 모습을 직접 보고 싶어.`,
      );
      await falcon.say_and_wait(
        `팔코는 줄곧 빛나는 순간을 바라며 아이돌의 길에 들어섰어.`,
      );
      await falcon.print_and_wait(`처음 품었던 갈망은 이제 대부분이.`);
      await falcon.print_and_wait(
        `누군가를 위해서가 아니야. 오직 자신의 소원을 이루기 위해서.`,
      );
      await falcon.print_and_wait(
        `${falcon.uma_sex_title}아이돌로서 응원해 준 팬들에게 가장 만족스러운 그림을 바칠 거야.`,
      );
      await falcon.print_and_wait(`그러니 출발하자!`);
      await falcon.print_and_wait(
        `더트의 큰 레이스를 향한 지지가 잔디의 십분의 일일지라도.`,
      );
      await falcon.print_and_wait(
        `팔코는 다이아몬드보다 빛나게, 광채를 더욱 선명하게 만들 거야!`,
      );
      await falcon.print_and_wait(
        `팔코가${falcon.uma_sex_title}아이돌이라는 각오를 걸고!`,
      );
      await falcon.print_and_wait(`그대로 단숨에 결승선까지 빛나는 거야!`);
    };
    f.title = title;
    return f;
  })(),
  we_95_47: (() => {
    const title = '스마트 팔콘의 결단';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}와(과)${falcon.name}은(는) 다음 주 도쿄 대상전을 위해 긴장 속에 준비하고 있다.`,
      );
      await era.printAndWait(
        `${falcon.name}와(과) 계약한 지도 거의 삼 년이다.`,
      );
      await you.say_and_wait(`다음은 졸업식인가.`);
      await era.printAndWait(
        `트레센을 졸업하고 더 높은 곳으로 나아갈까. 정식으로 아이돌의 길에 들어설까.`,
      );
      await era.printAndWait(`${falcon.name}이라면 그 두 가지겠지.`);
      await era.printAndWait(
        `미래로 향하는 같은 승객으로서,${falcon.name}와(과) 함께 쌓은 경험은 고요한 밤이면 어제 일처럼 떠오를 것이다.`,
      );
      await era.printAndWait(`딩동댕동.`);
      await era.printAndWait(
        `시끄러운 소리가${you.name}의 생각을 끊었다. 벌써 하교 시간이다.`,
      );
      await era.printAndWait(
        `평소에는 서류를 정리한 뒤 강가 풀밭에서${falcon.name}을(를) 기다린다.`,
      );
      await you.say_and_wait(`여기서 잠깐${falcon.name}을(를) 기다리자.`);
      await era.printAndWait(
        `도저히 자리를 비울 수 없을 때에는${falcon.name}쪽에서 찾아와 기다려 준다.`,
      );
      await era.printAndWait(
        `굳이 약속한 것은 아니지만 두 사람 사이에는 그런 암묵적인 약속이 있다.`,
      );
      await era.printAndWait(
        `──하지만 내려 둔 커피의 김이 사라질 때까지 익숙한 노크는 들리지 않았다.`,
      );
      await you.say_and_wait(`급한 일에 붙잡혀 꼼짝 못 하고 있을지도 모른다.`);
      await era.printAndWait(
        `지금의${falcon.uma_sex_title}아이돌에게는 갑작스러운 일도 늘고 있다.`,
      );
      await era.printAndWait(
        `오래된 마음의 응어리가 풀려서인지,${falcon.name}의 움직임은 평소보다 적극적이다.`,
      );
      await you.say_and_wait(
        `그렇다면 휴대 전화로 우마스타의 새 소식을 기다리자.`,
        true,
      );
      await you.say_and_wait(
        `내일 아침,${falcon.sex}의 재미있는 이야기를 들으면 된다.`,
      );
      await era.printAndWait(
        `서류를 다루다 넘어뜨린 액자를 세워 가장 잘 보이는 자리에 돌려놓는다.`,
      );
      era.drawLine();
      await era.printAndWait(`겨울밤은 생각보다 길다.`);
      await era.printAndWait(
        `혼자 있는 시간에 생각은 세상의 끝까지 뻗어 간다.`,
      );
      await era.printAndWait(
        `바닥을 알 수 없는 감정도 뻗어 나가며 끝없이 불어난다.`,
      );
      await era.printAndWait(`말없는 바다 같기도, 끝없는 우물 같기도 하다.`);
      await era.printAndWait(`똑똑똑.`);
      await era.printAndWait(
        `조용히 잠금을 풀자 머리를 풀어 내린 밤색 머리의${falcon.uma_sex_title}이(가) 있었다.`,
      );
      await falcon.say_and_wait(`……${callname}。`);
      await you.say_and_wait(`일단 들어와.`);
      await era.printAndWait(
        `걸이에 있던 수건을 꺼내${falcon.name}에게 건네고 문을 닫았다.`,
      );
      await era.printAndWait(
        `이상한 소문보다${you.name}이(가) 걱정하는 건 팔코의 상태다.`,
      );
      await falcon.say_and_wait(`실례할게.`);
      await you.say_and_wait(`뭐 마실래? 홍차? 주스? 커피? 아니, 커피는 말자.`);
      await era.printAndWait(
        `들어오자 거실 소파에 얌전히 앉아 두 눈으로 주위를 둘러본다.`,
      );
      await era.printAndWait(
        `그러고 보니,${falcon.name}이(가) 이곳에 오는 건 처음이다.`,
      );
      await era.printAndWait(`……${falcon.sex}은(는) 어떻게 알았지?`);
      await falcon.say_and_wait(`${callname}, 어딘가 정신이 딴 데 가 있네?`);
      await era.printAndWait(
        `생각에 너무 잠긴 탓에,${falcon.name}의 호기심을 자극했다.`,
      );
      await you.say_and_wait(`아니, 뭘 내올까 생각했을 뿐이야.`);
      await falcon.say_and_wait(`팔코는 맥주 마시고 싶어!`);
      await you.say_and_wait(`정했어. 홍차로 하자.`);
      await era.printAndWait(`머릿속에서 결정하자 움직임에도 목적이 생긴다.`);
      await era.printAndWait(
        `주전자를 최대한 천천히 기울여 책상에 한 방울도 흘리지 않는다.`,
      );
      await you.say_and_wait(`막 끓여서 뜨거우니까 조심해.`);
      await falcon.say_and_wait(`응!`);
      await era.printAndWait(
        `올해 합숙 파티에서${falcon.name}이(가) 트레이너 쪽 음료를 잘못 마신 뒤로 줄곧 그 맛을 잊지 못하는 모양이다.`,
      );
      await era.printAndWait(
        `${falcon.sex}이(가) 말하는 구름 위를 걷는 듯한 붕 뜬 기분은……아니, 그냥 가향 음료를 너무 많이 마신 탓이다.`,
      );
      await era.printAndWait(
        `하지만${falcon.name}을(를) 기숙사로 데려다주고 타즈나 씨에게 댈 변명을 생각하는 건 상당한 고행이었다.`,
      );
      await era.printAndWait(`지금 지하철 입구까지 가도 막차는 탈 수 없다.`);
      await era.printAndWait(
        `잔을 감싸 쥐고 찻잎을 바라보며 무언가 생각하는${falcon.name}。`,
      );
      await era.printAndWait(`칙.`);
      await you.say_and_wait(`무슨 일인지 말해 줄 수 있어?`);
      await era.printAndWait(
        `잠시 생각하다 캔을 연다. 입구에서 넘쳐나는 갈색 거품이 거센 홍수를 연상시킨다.`,
      );
      await era.printAndWait(
        `외박 허가는 내일 내면 된다──그런 생각도 알코올과 함께 피에 섞여 무의식에서 떠오른다.`,
      );
      await you.say_and_wait(`구름 한 점 없는 하늘.`);
      await you.say_and_wait(`내일도 날씨가 좋겠네.`, true);
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(``);
      await you.say_and_wait(`차라리 여기서 하룻밤 자고 갈래?`);
      await you.say_and_wait(`……팔코니까.`);
      await you.say_and_wait(`행복했으면 좋겠어.`);
      await era.printAndWait(`입 밖에 낸 순간,${you.name}은(는) 후회했다.`);
      await era.printAndWait(
        `수만 가지 감정이 가슴에 솟았는데, 마지막에 나온 말이 이것이었다.`,
      );
      // 前文の恋心と責任の選択でここは変わる。変わるのは重心だけで、スマートファルコンのトレーナーへの恋心は抑えても消えない。暗火のように
      // 恋慕が責任より大きい
      await you.say_and_wait(`이제 미움받겠네.`, true);
      await falcon.say_and_wait(`${callname}, 좋아해.`);
      await you.say_and_wait(`역시……응?`);
      await era.printAndWait(
        `생각보다 의연한 얼굴. 처음 보는,${falcon.name}인${falcon.teen_sex_title}의 숨겨 둔 일면.`,
      );
      await falcon.say_and_wait(
        `팬보다, 팬들 모두보다,${callname}이(가) 좋아!`,
      );
      await era.printAndWait(`갑작스러운 고백에 말이 나오지 않는다.`);
      await you.say_and_wait(`어? 팔코, 왜?`);
      await falcon.say_and_wait(
        `계속 카렌이 부러웠어……청순파 아이돌로 있는 것보다 직접 다가가 트레이너의 호감을 손에 넣는 게 맞는 거……겠지.`,
      );
      await falcon.say_and_wait(
        `아, 팔코가${falcon.uma_sex_title}아이돌을 동경하던 때에는, 좋아하는 사람 때문에 지금껏 모은 팬들을 놓아줄 날이 올 거라고는 생각 못 했어.`,
      );
      await falcon.say_and_wait(
        `하지만 팔코는 후회하지 않아.${callname}와(과) 만난 그 풀밭에서부터 팔코는 줄곧 마음을 억누르고 있었어.`,
      );
      await falcon.say_and_wait(
        `그러니까 팔코는 나쁜 아이야. 팬을 위한다고 말하면서 사실은 자신을 만족시켰어. 그래서 결심했어──아이돌로서가 아니라,${falcon.name}으로서${callname}을(를) 좋아하기로.`,
      );
      await era.printAndWait(
        `${falcon.name}의 고백이라기보다,${falcon.name}인${falcon.teen_sex_title}이(가) 가슴속 깊은 곳을 보여 주었다.`,
      );
      await you.say_and_wait(`아아……그랬구나……`);
      await era.printAndWait(
        `예감은 있었다. 알 수 없는 데서 밀려오던 불안에도 의미가 생겼다.`,
      );
      await you.say_and_wait(`앞으로의 길도 잘 부탁해.`);
      await era.printAndWait(`${falcon.name}의 손을 살며시 잡는다.`);
      await falcon.say_and_wait(`어?`);
      await you.say_and_wait(`이번에는 내가 이겼어.`);
      await era.printAndWait(
        `땀에 젖은 오른손은 살짝 떨리지만 손안에서는 줄곧 안정되어 있다.`,
      );
      await falcon.say_and_wait(`……응,${callname}의 승리야! 앞으로 잘 부탁해!`);
      await you.say_and_wait(
        `앞으로의 아이돌 생활에는 파도가 좀 더 많아지겠네. 머리 아픈걸.`,
      );
      await falcon.say_and_wait(
        `그러게……다음 팬 소동은 한동안 힘들지도 모르겠어.`,
      );
      await era.printAndWait(`눈이 마주치자 두 사람은 소리 내어 웃었다.`);
      await era.printAndWait(
        `기쁨과 안도가 섞인 눈물이 나올 때까지 웃었다. 앞으로도 웃으며 나아갈 것이다.`,
      );
      await falcon.say_and_wait(
        `역시 팔코는 트레이너의 품에 뛰어드는 게 좋아⭐`,
      );
      await falcon.say_and_wait(`있잖아……${callname}。`);
      await era.printAndWait(`이 순간에는 생각할 필요가 없다.`);
      await era.printAndWait(`${falcon.name}의 입술에 살며시 입을 맞춘다.`);
      await you.say_and_wait(`짭짤하다.`, true);
      await era.printAndWait(`생각보다 조금 달콤하다.`);
      // いっしょに頑張ろう。スマートファルコンとプレイヤーが手を取る。砂の城が崩れても、握った手が離れなければ、また建て直せる
      // 責任が恋慕を越える
      await falcon.say_and_wait(`응.`);
      await era.printAndWait(
        `발끝으로 선${falcon.teen_sex_title}이(가) 입술을 포개 왔다.`,
      );
      await era.printAndWait(
        `희미한 통증과 씁쓸한 짠맛……이게${falcon.name}의 입맞춤인가. 그렇구나.`,
      );
      await falcon.say_and_wait(`좋아해.`);
      await era.printAndWait(
        `갑작스러운 고백인데도 한 발이 벼랑 끝에 걸친 듯하다. 그래서 다음 말을 기다린다.`,
      );
      await falcon.say_and_wait(
        `──하지만 팔코는 계속 응원해 준 팬들에게 책임을 져야 해.`,
      );
      await you.say_and_wait(`역시.`);
      await falcon.say_and_wait(`팔코는 망설였어. 헤맸어. 도망쳤어.`);
      await falcon.say_and_wait(`죄책감에 휩싸인 나날은 죽음보다 괴로웠어.`);
      await falcon.say_and_wait(
        `──온몸에 상처를 달고 있어서 아무리 봐도 빛나지 않아. 싫어져.`,
      );
      await falcon.say_and_wait(`그래도 팔코는 자신을 위해 움직일 거야.`);
      await falcon.say_and_wait(
        `팬들의 응원이 없었다면 팔코는 팔코가 아니었을 테니까.`,
      );
      await era.printAndWait(
        `${falcon.sex}의 얼굴은 웃는다기보다 극심한 고통으로 근육이 크게 일그러진 모습에 가깝다.`,
      );
      await falcon.say_and_wait(
        `……하지만……하지만 팔코의 속은 텅 비어서, 도저히 꿰맬 수 없는 상처가 있는 것 같아.`,
      );
      await era.printAndWait(
        `아까부터 계속 진동하던 휴대 전화를 벽에 세게 내던졌다.`,
      );
      await era.printAndWait(
        `조금만 더 일찍${falcon.name}의 내면을 들여다봤더라면.`,
      );
      await falcon.say_and_wait(`그러니까,`);
      await era.printAndWait(
        `학생이 교외에서 숙박하려면 기숙사장에게 사전 신청이 필요하다.`,
      );
      await era.printAndWait(
        `학생이 교외에서 숙박하려면 기숙사장에게 사전 신청이 필요하다.`,
      );
      await era.printAndWait(
        `학생이 교외에서 숙박하려면 기숙사장에게 사전 신청이 필요하다.`,
      );
      await era.printAndWait(
        `아아, 저 멀리서 들려오는 목소리처럼, 뒷부분은 억지로 끌어낸 생각에 전부 덮여 버린다.`,
      );
      await era.printAndWait(`각오는 했는데 왜 이렇게 슬플까.`);
      await falcon.say_and_wait(
        `……그런 거구나. 약속을 어기고 마음이 망가져도 아이돌이라면 팬의 기대에 진지하게 응해야 한다.`,
      );
      await you.say_and_wait(`알겠어……팔코의 결정은 어떻게 되든 지지할게.`);
      await era.printAndWait(
        `시야가 자신의 범위를 벗어나 눈앞의${falcon.teen_sex_title}에게서 장면 전체를 내려다보는 위치로 옮겨 가고, 기계처럼 정해진 규칙에 따라 대화하고 있다.`,
      );
      await era.printAndWait(`그래도,${falcon.sex}의 결정은 존중한다.`);
      await you.say_and_wait(`잘 자.`);
      await falcon.say_and_wait(`${callname}, 잘 자.`);
      await era.printAndWait(
        `끊겼던 생각이 돌아왔을 때 나는 이미 그곳에 있었다.`,
      );
      await era.printAndWait(`먼 곳에서 들려오는 가냘픈 목소리.`);
      await you.say_and_wait(`아니, 그럴 리 없어.`);
      await you.say_and_wait(
        `팔코가 성공하든 실패하든 끝까지 함께 지켜볼 거야.`,
      );
      await you.say_and_wait(`그때는 오늘 밤 이야기를 웃으며 하겠지.`);
      await you.say_and_wait(`그러니까 팔코, 두려워하지 마.`);
      era.printButton(`결단을 내릴 때 내가 등을 밀어 줄게.`, 1);
      await era.input();
      await falcon.say_and_wait(`……${callname}。`);
      await era.printAndWait(
        `${you.name}은(는)${falcon.name}이(가) 내민 손을 힘껏 잡았다.`,
      );
      await falcon.say_and_wait(`${callname}, 오늘 한 말 꼭 기억해야 해?`);
      await you.say_and_wait(`응, 이미 기억했어.`);
      await era.printAndWait(
        `다음 날 아침 곁에서 자는${falcon.name}을(를) 발견하는 건 조금 뒤의 이야기다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '크리스마스♪';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}와(과)${falcon.name}의 세 번째 크리스마스.`,
      );
      await falcon.say_and_wait(`다들 고마워!`);
      await era.printAndWait(
        `크리스마스 당일에도 라이브를 열어 팬들에게 감사를 전하고 있었다.`,
      );
      await era.printAndWait(`팬 「팔코! 팔코!」`);
      await falcon.say_and_wait(
        `계속 응원해 준 보답으로 팔코의 마음을 여기에 담았어!`,
      );
      await era.printAndWait(`팬 A 「감사합니다!」`);
      await era.printAndWait(`팬 B 「앞으로도 계속 응원할게!」`);
      await era.printAndWait(`팬 C 「모든 레이스를 보러 갈게!」`);
      await era.printAndWait(
        `선물이 동나자 받지 못한 몇몇 팬들이 어깨를 늘어뜨렸다.`,
      );
      await falcon.say_and_wait(
        `팔코의 감사제에 와 준 다들, 이제 팔코의 미소로 따뜻해지는 거야!`,
      );
      await era.printAndWait(`남은 팬들은 악수와 미소라는 선물을 받았다.`);
      await era.printAndWait(
        `팬 D 「늦어서 선물은 못 받았지만 앞으로도 팔코를 응원할게!」`,
      );
      await era.printAndWait(
        `팬들이 흩어진 뒤 현장에 남은 건${you.name}와(과) 팔코뿐이었다.`,
      );
      await falcon.say_and_wait(`드디어 끝났다!`);
      era.printButton(`선물을 받은 팬들은 분명 기뻐할 거야.`, 1);
      await era.input();
      await falcon.say_and_wait(`응!`);
      await falcon.say_and_wait(
        `처음에는 팬이 한 명도 없었는데 빛나는 아이돌이 됐어.${callname}이(가) 없었다면 팔코는 여기까지 오지 못했을 거야!`,
      );
      await era.printAndWait(
        `${you.name}에게 고개를 숙이는 팔코를 보고,${you.name}은(는) 조금 놀랐다.`,
      );
      era.printButton(
        `아니, 아무리 그래도 팔코가 해낸 일이야. 나는 내 할 일을 했을 뿐이고.`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(
        `그렇지 않아! ${callname}이(가) 없었다면 팔코는 출전할 기회조차 없었을 거야!`,
      );
      await falcon.say_and_wait(`게다가,${callname}이(가)……아, 미안해.`);
      await falcon.say_and_wait(`이제 어디 좀 둘러보지 않을래?`);
      await falcon.say_and_wait(`외박 허가도 이미 받아 뒀어!`);
      await era.printAndWait(
        `${you.name}의 손을 살며시 잡은${falcon.name}이(가),${you.name}을(를) 이끌고 나아간다.`,
      );
      await you.say_and_wait(`여기 있는 도구들은?`);
      await falcon.say_and_wait(`괜찮아!`);
      await era.printAndWait(`난방이 되는 방을 나서자 바로 추위가 밀려온다.`);
      await falcon.say_and_wait(`밖은 생각보다 춥네.`);
      await era.printAndWait(
        `보온 장갑을 꼈는데도 스치는 틈 사이로 냉기가 들어온다.`,
      );
      await you.say_and_wait(`사이제리야에서 든든하게 먹을까?`);
      await era.printAndWait(
        `저렴하고 알찬 사이제리야는 배고픈 두 사람에게 꽤 매력적이다.`,
      );
      await falcon.say_and_wait(
        `${
          falcon.name
        }도 그렇게 생각했어.${callname}와(과) 같이 먹는다면 갑자기 신나네⭐`,
      );
      await you.say_and_wait(`그럼 서두르자!`);
      era.drawLine();
      await era.printAndWait([
        falcon.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: '건', color: falcon.color },
        '배!」',
      ]);
      await era.printAndWait(
        `따뜻한 색의 조명 아래 가게의 소란과 식기가 부딪치는 소리가 독특한 울림을 만든다.`,
      );
      await falcon.say_and_wait(`사이제리야 음식, 생각보다 맛있네.`);
      await you.say_and_wait(
        `축제라서 그런가. 여기 있는 사람들 모두 즐거워 보여.`,
      );
      await falcon.say_and_wait(
        `그것도 있지만, 좀 더 평범한${falcon.uma_sex_title}으로서 축제를 즐기고 있어.`,
      );
      await you.say_and_wait(`팔코, 아이돌 생활에 지쳤어?`);
      await falcon.say_and_wait(`아니? 오히려 즐기고 있는걸!`);
      await era.printAndWait(`눈을 크게 뜬 팔코가 고개를 갸웃한다.`);
      await you.say_and_wait(`앞으로의 길도 팔코가 열심히 해야겠지.`);
      await falcon.say_and_wait(`꿈의 트로피?`);
      await you.say_and_wait(
        `레이스 말고도 일정을 잘 살피고 과로하지 않도록 해!`,
      );
      await era.printAndWait(
        `정신을 차려 보니 어느새 평소의 잔소리로 돌아와 있었다.`,
      );
      await falcon.say_and_wait(
        `으～이런 분위기에,${callname}은(는) 정말 목석이야.`,
      );
      await era.printAndWait(
        `반쯤 남은 주스를 빙빙 저으며 불만스러운 팔코가${you.name}을(를) 바라본다.`,
      );
      await falcon.say_and_wait(
        `그래도 그런${callname}이라서,${falcon.name}이(가) 제일 좋아!`,
      );
      await era.printAndWait(`갑자기 웃는 팔코는 더욱 귀엽다.`);
      await falcon.say_and_wait(`음──조금 가까이 가도 돼?`);
      await era.printAndWait(`그렇게 말하며,${you.name}의 자리로 몸을 붙인다.`);
      await you.say_and_wait(`……`);
      await falcon.say_and_wait(`그럼! 하나, 둘, 셋!`);
      await era.printAndWait(
        `입 맞추는 순간을 휴대 전화로 찍은${falcon.name}。`,
      );
      await era.printAndWait(`아이돌이라면 절대 안 되는 일이지.`);
      await falcon.say_and_wait(
        `아이돌 팔코는 팬 한 사람 한 사람에게 공평한 사랑을 줘. 하지만 지금의 나는 어디에나 있는 평범한${falcon.uma_sex_title}이야!`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_dai_s: (() => {
    const title = '도쿄 대상전·the biggest stage';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.print_and_wait(`이날은 생각보다 빨리 찾아왔다.`);
      await falcon.print_and_wait(
        `고된 땀방울도, 노력의 가치도 이 순간 드러난다.`,
      );
      await falcon.print_and_wait(
        `톱 아이돌을 꿈꾸며, 응원해 준 팬들을 위해 여기까지 왔다.`,
      );
      await falcon.print_and_wait(`그런데도 자신을 납득시킬 수 없다.`);
      await falcon.print_and_wait(
        `깊은 곳에서 들려오는 목소리가 계속 묻는다. 이래도 괜찮아?`,
      );
      await falcon.print_and_wait(`가슴이 아프다. 심장을 움켜쥔 것 같다.`);
      await falcon.print_and_wait(`답은 모르겠다.`);
      await falcon.print_and_wait(
        `하지만 어렴풋이 알 수 있다. 마지막 답은 여기서 나올 것이다.`,
      );
      era.printButton(`이제 출발이야, 팔코.`, 1);
      await era.input();
      await falcon.say_and_wait(`……출발하자. 그 답을 찾아서.`);
      await era.printAndWait(
        `모래 섞인 바람에 눈을 제대로 뜨지 못하던${you.name}에게 문득 코스로 향하는${falcon.name}와(과), 처음 만났을 때의${falcon.teen_sex_title}이(가) 겹쳐 보였다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_dai_win_s: (() => {
    const title = '도쿄 대상전 후·위너스 스테이지를 앞둔 결단';
    /**
     * （恋慕が責任より大きい）東京大賞典のあと、ウィンナーズステージまでの隙間で、スマートファルコンは自分を見直す（決めたことに後悔はない。もう一度選んでも、この道を選ぶ）
     * （責任が恋慕より大きい）東京大賞典のあと、ウィンナーズステージまでの隙間で、スマートファルコンは自分を見直す（決めたことに後悔はない。もう一度選んでも、この道を選ぶ）
     * 渇望は満たされ、心はもう孤独ではない。恐れは信仰の固さとともに消え、強さは覚悟へ変わった
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`마침내 이 순간이 왔다.`);
      await falcon.print_and_wait(
        `삼 년 전의 내가 동경하던, 수천 팬들의 시선이 모이는 가장 빛나는 무대. 상상했던 궤도와는 더 이상 겹치지 않지만.`,
      );
      await falcon.print_and_wait(`결국 이루었다.`);
      await falcon.print_and_wait(
        `어려운 목표를 이룬 순간에는 보통 말로 다 할 수 없을 만큼 흥분하거나, 숨을 죽인 채 모두 끝난 뒤 안도의 한숨을 내쉴 때까지 기다린다.`,
      );
      await falcon.print_and_wait(`그런데 지금의 나는 놀라울 만큼 고요하다.`);
      await falcon.print_and_wait(
        `이 순간을 위해 다듬은 표정과 손짓, 자세와 발음은 가장 자연스러운 모습이다.`,
      );
      await falcon.print_and_wait(
        `그래도 가슴속에는 말로 표현할 수 없는 감정이 있다.`,
      );
      await falcon.print_and_wait(
        `비유하자면 아직 텔레비전 앞에서 유명 아이돌을 동경하며 일부러 스텝을 흉내 내던 그 작은${falcon.uma_sex_title}같다.`,
      );
      await falcon.print_and_wait(
        `──방금까지 머릿속을 맴돌던 잡음이 어느새 사라졌다.`,
      );
      // 恋慕が責任より大きい
      await falcon.print_and_wait(
        `결정한 일에 후회는 없다. 다시 선택하더라도 이 길을 고를 것이다.`,
      );
      await falcon.print_and_wait(`정말 할 말이 있다면,`);
      await falcon.print_and_wait(
        `${callname}와(과) 함께한 나날에 만족한다는 것.`,
      );
      await falcon.print_and_wait(`고마워,${callname}、`);
      //責任が恋慕より大きい
      await falcon.print_and_wait(
        `책임에서 도망쳐 감각을 마비시켜도 내면의 자신은 한 걸음씩 다가와 추궁한다. 천 배로 증폭된 예민함 속에서 불길과 추위가 주는 이중의 고통에 빠진다.`,
      );
      await falcon.print_and_wait(
        `그렇게 증폭된 상태에서는 깃털만 한 압박도 사람을 무너뜨릴 수 있다.`,
      );
      await falcon.print_and_wait(
        `주어진 책임을 마주하는 건 압박이다. 하지만 그 책임에서 도망치는 건 또 다른 고통에 빠질 뿐이다.`,
      );
      await falcon.print_and_wait(`그것이 내가 얻은 깨달음.`);
      await falcon.print_and_wait(`그러니.`);
      await falcon.say_and_wait(
        `팬들을 위해 팔코는 후회 없이 마지막 한 곡을 바칠 거야!`,
      );
      era.drawLine();
      await era.printAndWait(
        `아무도 눈길을 주지 않던 길거리 아이돌에서 더트의 톱 아이돌로. 삼 년이라는 시간에 비하면 너무나 빠르다.`,
      );
      await era.printAndWait(
        `${falcon.sex}와(과) 처음 만났을 때 창문에서 뛰어내리던 모습처럼.`,
      );
      await era.printAndWait(
        `그 순간의${falcon.sex}은(는) 땅보다 하늘에 더 가까웠다.`,
      );
      await era.printAndWait(
        `그것이${falcon.sex}와(과) 계약하기로 마음먹은 이유였을지도 모른다.`,
      );
      await era.printAndWait(
        `카메라의 플래시가 모여드는 초점은,${falcon.name}이라는 이름의 톱 아이돌이다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  deadline_fight: (() => {
    const title = '기말 대작전!';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`으───어려워.`);
      await falcon.print_and_wait(
        `낙제할 것 같은 답안지를 보고 팔코는 말을 잃었다.`,
      );
      await falcon.say_and_wait(
        `이대로라면 방과 후에 남는 정도로는 안 끝날 거야. 학점을 못 딸지도 몰라.`,
      );
      await falcon.print_and_wait(
        `팔코는 당황해서 빙빙 돌다가 문득 ${callname}을(를) 떠올렸다.`,
      );
      await falcon.say_and_wait(`${callname}에게 물어보자.`);
      era.drawLine({ content: 'トレーナー室' });
      await era.printAndWait(
        `눈앞의 점수를 보고,${you.name}도 팔코처럼 말을 잃었다.`,
      );
      await you.say_and_wait(`……팔코?`);
      await era.printAndWait(
        `고개를 숙이고 미안해하는 팔코를 보며,${you.name}은(는) 길게 한숨을 내쉬었다.`,
      );
      await you.say_and_wait(`그럼 같이 틀린 문제를 보자.`);
      await era.printAndWait(
        `팔코를${you.name}의 자리에 앉히고,${you.name}은(는) 다른 의자를${falcon.sex}옆으로 옮겼다.`,
      );
      await you.say_and_wait(
        `합격에 필요한 건 곁가지가 아니라, 『줄기』가 되는 사고방식을 이해하는 거야.`,
      );
      await you.say_and_wait(
        `무엇을 먼저 하고 무엇을 나중에 할지 냉정하게 판단한다.`,
      );
      await you.say_and_wait(`그럼 이 부분은……`);
      await era.printAndWait(`오후 내내 오답과 싸웠다.`);
      era.drawLine({ content: '黄昏のあと' });
      await you.say_and_wait(`대략 이 정도야……팔코?`);
      await falcon.say_and_wait(`……아, 네.`);
      await era.printAndWait(`어느새 팔코의 정신은 다른 곳에 가 있었다.`);
      await you.say_and_wait(`……뭐, 오늘은 여기까지 하자.`);
      await era.printAndWait(
        `길게 숨을 내쉬고,${you.name}은(는) 팔코의 답안지를 자신의 파일에 넣었다.`,
      );
      await you.say_and_wait(`지금부터 재시험에 합격할 때까지 라이브 금지야.`);
      await falcon.say_and_wait(`어?`);
      await falcon.say_and_wait(`${callname}, 안 돼!!!`);
      await era.printAndWait(`팔코의 비명이 교사 전체에 울려 퍼졌다.`);
    };
    f.title = title;
    return f;
  })(),
  idol_ice_cream: (() => {
    const title = '팔코·데이트 대작전';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`들어가기도 전에 팔코의 활기찬 목소리가 들린다.`);
      await you.say_and_wait(
        `이름보다 목소리가 먼저 들린다는 게 이런 건가.`,
        true,
      );
      await era.printAndWait(`물론 아니다.`);
      await falcon.say_and_wait(
        `팔코를 응원해 주는 팬들에게 가성비 좋은 디저트를 추천하고 싶은데,${callname}, 어디 아는 곳 있어?`,
      );
      await era.printAndWait(
        `아이돌은 응원해 주는 팬들에게 감사를 전할 필요도 있다.`,
      );
      await you.say_and_wait(`디저트라면 근처 쇼핑몰을 둘러보는 건 어때?`);
      await you.say_and_wait(
        `우마스타의 생활 정보 계정이 추천하는 가게를 봐도 좋겠다.`,
      );
      await era.printAndWait(`팔코도 생각에 잠긴다.`);
      await falcon.say_and_wait(
        `음……팔코는 직접 가 봐야 정할 수 있을 것 같아.`,
      );
      await falcon.say_and_wait(`그러니까 ${callname}……`);
      await era.printAndWait(`${you.name}의 반응을 몰래 살피는 팔코.`);
      await falcon.say_and_wait(`……역시 팔코 혼자 갈게⭐`);
      await you.say_and_wait(`응, 그래.`);
      await era.printAndWait(`일부러 못 들은 척한다.`);
      await falcon.say_and_wait(`어?! 그건 안 돼!`);
      await era.printAndWait(
        `제 발등을 찍은 팔코는 허둥대다가 마침내 속마음을 꺼냈다.`,
      );
      await you.say_and_wait(`미안, 아까 잘 못 들었어. 다시 말해 줄래?`);
      await falcon.say_and_wait(`팔코는,${callname}와(과) 같이 가고 싶어.`);
      await you.say_and_wait(`귀여운 팔코의 부탁이라면 당연히 들어줘야지.`);
      await falcon.say_and_wait(`야호⭐`);
      await era.printAndWait(
        `그 뒤 두 사람은 근처 디저트 가게들을 맛보며 다녔다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  loneliness_girl: (() => {
    const title = '강가의 아이돌';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`강가의 풀밭에서`);
      await falcon.say_and_wait(`${callname}, 여기 공기가 정말 맑아.`);
      await falcon.say_and_wait(`강가 풀밭에 공기도 맑으니까 쉬기 좋네.`);
      await falcon.say_and_wait(
        `! 맞아, 여기서 라이브를 하고 우마스타에 올리면 팬도 확 늘지 않을까?`,
      );
      await falcon.say_and_wait(`${callname}은(는) 어떻게 생각해?`);
      await era.printAndWait(`심호흡하며 미래를 꿈꾸는 팔코를 바라본다.`);
      await you.say_and_wait(`그러네. 맑은 공기를 마시면 팬들도 기뻐하겠지.`);
      await falcon.say_and_wait(`……${callname}도 기뻐?`);
      await you.say_and_wait(`? 응.`);
      await falcon.say_and_wait(`팔코도 기뻐⭐`);
      await era.printAndWait(
        `입을 가리고 쿡쿡 웃는 팔코와 강가를 걷는다. 수면에서 육지로 불어오는 바람에 물가의 풀도 몸을 흔든다.`,
      );
      await era.printAndWait(`식물들도 바람과 물이 주는 윤기를 기다리고 있다.`);
      await falcon.say_and_wait(`${callname}, 여기 봐!`);
      await era.printAndWait(
        `새로운 것을 발견한 팔코가 강가로 달려가 쪼그려 앉는다.`,
      );
      await era.printAndWait(
        `팔코를 따라 물가로 가서,${you.name}도 팔코의 시선 끝을 바라본다.`,
      );
      await era.printAndWait(`강가에 뿌리내린 작고 하얀 꽃이 바람에 흔들린다.`);
      await falcon.say_and_wait(`이 꽃, 팔코 같아.`);
      await era.printAndWait(
        `살짝 만지고 싶지만 힘을 주면 꺾일까 봐 하얀 꽃잎이 감싼 노란 꽃술을 바라보기만 한다.`,
      );
      era.printButton(`캐모마일이었던가.`, 1);
      await era.input();
      await you.say_and_wait(
        `고대 이집트에서는${falcon.sex}을(를) 달의 약초라고 불렀고, 몸을 식히고 마음을 가라앉히는 효능이 있대.`,
      );
      await you.say_and_wait(`꽃말은……`);
      await era.printAndWait(`몰래 휴대 전화에 캐모마일을 검색한다.`);
      await you.say_and_wait(`역경 속의 힘.`);
      await falcon.say_and_wait(`팔코도 캐모마일처럼 피어나고 싶어.`);
      await era.printAndWait(`가끔 강물이 씻고 지나가는 축축한 흙을 바라본다.`);
      await falcon.say_and_wait(
        `흙 속에 깊이 뿌리내리고 피어난 꽃을 모두에게 바치는 거야.`,
      );
      await falcon.say_and_wait(`그러니까 팔코도 힘내야겠어.`);
      await era.printAndWait(
        `팔코의 머리를 쓰다듬으려 손을 뻗었지만 능숙하게 피했다.`,
      );
      await falcon.say_and_wait(`도망가는 팔코를 잡고 싶으면 쫓아와!`);
      await you.say_and_wait(`팔코, 잡으러 간다!`);
      await falcon.say_and_wait(`${callname}은(는) 팔코를 영원히 못 잡을걸⭐`);
      await era.printAndWait(
        `시끌벅적하던 풀밭에 고요가 돌아온다. 흔들리는 꽃 소리만 바람의 귓가를 천천히 흐른다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  shine_girl: (() => {
    const title = '역 앞 홍보';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname_4 マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname_4) => {
      await era.printAndWait(`어느 휴일`);
      await falcon.say_and_wait(`톱 아이돌을 꿈꾸는${falcon.name}입니다!`);
      await falcon.say_and_wait(`아이돌 팔코를 잘 부탁드려요♪`);
      await era.printAndWait(
        `휴일에,${you.name}은(는)${falcon.name}에게 이끌려 역으로 왔다.`,
      );
      await you.say_and_wait(`역의 유동 인구를 노려 팬을 모으려는 건가?`);
      await you.say_and_wait(`이 열정을 공부에 쏟을 수 있다면 좋을 텐데.`);
      await era.printAndWait(`하지만 대부분은 이상한 눈으로 보고 지나쳐 간다.`);
      era.drawLine({ content: '昼になる' });
      await falcon.say_and_wait(`으～벌써 점심인데 새 팬이 안 늘어.`);
      await era.printAndWait(
        `다들 볼일이 있으니까. 팬 활동을 할 여유가 있는 건 학생 정도겠지.`,
      );
      await era.printAndWait(`게다가,`);
      await maru.say_and_wait(`팔코 아니니?`);
      await era.printAndWait(`뜻밖의 사람이 나타났다.`);
      await falcon.say_and_wait(`어? 마루젠 선배, 여기는 왜 오셨어요?`);
      await era.printAndWait(
        `트레센 교복을 입은 마루젠스키가 여유로운 미소로 두 사람을 보고 있다.`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 47
      ) {
        await maru.say_and_wait(
          `아무리 찾아도 ${callname_4}이(가) 안 보인다 했더니 여기 있었구나?`,
        );
        await era.printAndWait(
          `${you.name}은(는) 물론 이 친근한${maru.elder_sibling_sex_title}을(를) 기억한다.`,
        );
        await maru.say_and_wait(
          `한동안 ${callname_4}이(가) 안 보이면,${maru.elder_sibling_sex_title}, 쓸쓸한걸?`,
        );
        era.printButton(`같이 할래?`, 1);
        await era.input();
        await maru.say_and_wait(
          `귀여운 후배를 도울 수 있다면 영광이지. 그래서 난 뭘 하면 될까?`,
        );
        await era.printAndWait(
          `달리는 기쁨을 맛보고 더 많은${maru.uma_sex_title}이(가) 그 등을 뒤쫓게 하려고,`,
        );
      }
      await falcon.say_and_wait(`팔코는 지금 역에서 팬들을 모으려던 참이야⭐`);
      await falcon.say_and_wait(`그래서 마루젠 선배도 홍보를 도와줬으면 해요.`);
      await maru.say_and_wait(
        `이렇게 귀여운 후배라면,${maru.elder_sibling_sex_title}이(가) 도와줘야지.${maru.elder_sibling_sex_title}의 홍보 실력을 보여 줄게.`,
      );
      await era.printAndWait(`다음 열차가 도착했을 때`);
      await maru.say_and_wait(
        `하이! 멋쟁이도 미인도 이쪽 봐요! 이렇게 귀여운 아가씨인데, 일빠 안 찍고 가실 거예요?`,
      );
      await maru.say_and_wait(
        `압박감이 산더미라도 괜찮아. 그까이꺼 다 뜬구름이지～`,
      );
      await falcon.say_and_wait(`……그리운 말투다.`);
      await era.printAndWait(
        `${you.name}은(는) 중학교 때 인터넷에서 그런 표현을 주고받던 분위기를 떠올렸다.`,
      );
      await era.printAndWait(
        `그 말이 나오자마자 모두 발걸음을 재촉했다. 두 손으로 얼굴을 가리며 벼락이라도 맞은 듯한 사람도 많았다.`,
      );
      await maru.say_and_wait(`음～일빠가 한 명도 없네.`);
      await era.printAndWait(
        `아쉬워하는 마루젠스키를 보고 팔코가 앞으로 나와 위로한다.`,
      );
      await falcon.say_and_wait(`괘, 괜찮아요. 이미 팔코에게 도움이 됐는걸요.`);
      await falcon.say_and_wait(`아무튼 고마워요.`);
      await maru.say_and_wait(`그렇다면……나도 팔코의 팬이 되어도 될까?`);
      await falcon.say_and_wait(`어? 마루젠 선배가 팬……감사합니다!`);
      await era.printAndWait(`팬을 얻은 팔코를 보며,${you.name}도 기뻐했다.`);
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 96
      ) {
        await maru.say_and_wait(`팔코, 부탁 하나 해도 될까?`);
        await era.printAndWait(
          `여유로운 표정의 마루젠스키가${you.name}와(과)${falcon.name}이(가) 이야기하는 모습을 보고 있다.`,
        );
        await falcon.say_and_wait(`팔코가 도울 수 있다면 기뻐요!`);
        maru.say(
          `잘됐다! 근처 쇼핑몰에서 요즘 유행하는 코코아 파르페를 사다 줄래?`,
        );
        await era.printAndWait('초콜릿과 아이스크림이 섞인 음료.', {
          fontSize: '0.5rem',
        });
        await falcon.say_and_wait(
          `물론이죠. 하지만 팔코는 아직 팬들을 모으는 중인데요.`,
        );
        await maru.say_and_wait(
          `나도 도와줄게. 그러니 부탁이야, 방금 생긴 새 팬의 소원을 들어줘!`,
        );
        await falcon.say_and_wait(
          `음──네! 마루젠 선배의 부탁이라면 팔코, 힘낼게요!`,
        );
        await falcon.say_and_wait(`그럼 팔코, 다녀올게!`);
        await era.printAndWait(
          `멀어지는 팔코를 바라보니 역에 남은 건${you.name}와(과) 마루젠스키뿐이었다.`,
        );
        await maru.say_and_wait(
          `볼일이 없다면,${callname_4}을(를) 잠깐 독차지하게 해 줘♪`,
        );
        await era.printAndWait(
          `${you.name}을(를) 끌어안고 다정하게 쓰다듬는 마루젠스키는 행복해 보였다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  curiosity_girl: (() => {
    const title = '황금국화';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`어느 휴일`);
      await falcon.say_and_wait(`${callname}, 잠깐 와 줄래?`);
      await era.printAndWait(
        `팔코는 트레이너실의 전신 거울 앞에서 옷매무새를 다듬고 있다.`,
      );
      await falcon.say_and_wait(
        `저기, 팔코는 머리를 풀었다가 포니테일로 묶고 리본을 달고 싶어.`,
      );
      await era.printAndWait(
        `뒤가 보이지 않아서,${you.name}의 손을 빌리고 싶은 모양이다.`,
      );
      await you.say_and_wait(`──이렇게 하면 돼?`);
      await falcon.say_and_wait(`음──조금만 더 위로.`);
      await era.printAndWait(
        `조심스럽게 나비 모양 핀을 조금 더 높은 곳에 단다.`,
      );
      await you.say_and_wait(`──이건 어때?`);
      await falcon.say_and_wait(`음──거의 됐어.`);
      await era.printAndWait(`머리 모양을 바꾼 팔코는 전과 조금 다르다.`);
      await falcon.say_and_wait(`하지만 어딘가 부족한 느낌이 든다.`);
      await era.printAndWait(`다시 신경이 쓰이기 시작한다.`);
      await falcon.say_and_wait(
        `${callname}! 이따가 상점가에 같이 가지 않을래?`,
      );
      await falcon.say_and_wait(`작은 장식을 사고 싶어.`);
      await era.printAndWait(`자기 매력의 한계를 보고 싶은 걸까.`);
      await you.say_and_wait(`좋아!`);
      era.drawLine({ content: '商店街' });
      await era.printAndWait(`주말이라 상점가에는 평일보다 훨씬 사람이 많다.`);
      await falcon.say_and_wait(`그럼 이 가게부터 보자!`);
      await era.printAndWait(
        `최근 화제인 가게인 모양이다. 소품을 구경하는 커플의 비율이 의외로 높다.`,
      );
      await you.say_and_wait(`커플이 많네.`);
      await falcon.say_and_wait(
        `팔코와${callname}이(가) 섞여 있어도 어색하지 않겠어.`,
      );
      await era.printAndWait(
        `${you.name}의 팔을 잡아끈 팔코는 가게를 한 바퀴 돌다가 머리끈 앞에서 멈췄다.`,
      );
      await falcon.say_and_wait(`다 귀여워. 그런데 뭐가 좋을까?`);
      await era.printAndWait(`팔코는 이 머리끈들이 마음에 든 모양이다.`);
      await you.say_and_wait(`그렇게 고민되면 원하는 건 다 살까?`);
      await era.printAndWait(
        `막 월급을 받은 ${you.name}은(는) 말에 힘이 실려 있다. 아마도?`,
      );
      await falcon.say_and_wait(`정말 그래도 돼?${callname}, 다정하네!`);
      await falcon.say_and_wait(`그런데,${callname}은(는) 어떤 게 좋아?`);
      era.printButton(`초록 리본이 달린 흰 머리끈`, 1);
      era.printButton(`흰 토끼 장식이 달린 초록 머리끈`, 2);
      era.printButton(`흰 장미 장식이 달린 검은 머리끈`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(`음──팔코도 이 산뜻한 느낌이 좋아.`);
          await falcon.say_and_wait(`푸른 들판을 걷는 것처럼 기운이 나⭐`);
          break;
        case 2:
          await falcon.say_and_wait(`귀여운 스타일? 팔코도 그렇게 생각했어!`);
          await falcon.say_and_wait(`토끼에는 사랑을 바란다는 숨은 뜻도 있대.`);
          await falcon.say_and_wait(`팔코는 아무 말도 안 했어⭐`);
          break;
        case 3:
          await falcon.say_and_wait(
            `호호호! 팔코도 소악마 스타일 아이돌이라고!`,
          );
          await era.printAndWait(`아무리 봐도 별로 닮지 않았다.`);
          await falcon.say_and_wait(
            `트레이너가 골랐으니까 진지하게 생각해 볼게.`,
          );
          await era.printAndWait(
            `${falcon.sex}의 작은 머리를 가볍게 두드리자 비명이 튀어나왔다.`,
          );
          await falcon.say_and_wait(`미안해, 다음부터는 그런 말투 안 쓸게!`);
      }
      await era.printAndWait(`고른 머리끈을 봉투에 넣고 쇼핑을 이어 간다.`);
    };
    f.title = title;
    return f;
  })(),
  rooftop_idol: (() => {
    const title = '옥상의 아이돌';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`어느 방과 후`);
      await era.printAndWait(
        `${falcon.name}의 최근 데이터를 정리하고 긴장을 푼 ${you.name}이(가) 길게 숨을 내쉰다.`,
      );
      era.printButton(`이따가 옥상이나 걸어야겠다.`, 1);
      await era.input();
      await era.printAndWait(
        `어느새 ${you.name}에게도 거울을 보며 혼잣말하는 버릇이 생겼다.`,
      );
      await you.say_and_wait(
        `둘이 함께 있으면 상대의 버릇이 옮는다는 건가.`,
        true,
      );
      await era.printAndWait(
        `그 생각을 감정 가장 깊은 곳에 묻고 싶은데,${you.name}을(를) 상대로 혼자 들뜬 것처럼 계속 떠오른다.`,
      );
      await era.printAndWait(`마지막 결론은──`);
      await you.say_and_wait(
        `나는 팔코로서의${falcon.name}을(를) 좋아한다.`,
        true,
      );
      await era.printAndWait(
        `밝고 긍정적이며 목표를 향해 나아가는${falcon.sex}이(가),${you.name}와(과) 팬들에게 희망을 전해 왔다.`,
      );
      await you.say_and_wait(
        `이런${falcon.uma_sex_title}이(가) 정말 존재할까?`,
        true,
      );
      await era.printAndWait(`${you.name}의 내면은 줄곧 그것을 의심한다.`);
      await era.printAndWait(`아이돌로 살아가는 고통과 마음속 자책.`);
      await you.say_and_wait(
        `${falcon.sex}은(는) 어두운 면을 보여 주고 싶지 않을 뿐이겠지.`,
        true,
      );
      await era.printAndWait(`정신을 차려 보니 옥상이었다.`);
      await era.printAndWait(
        `석양이 천천히 지평선 아래로 내려가고, 주위에서 서늘한 기운이 밀려와 기온이 또 한층 떨어진다.`,
      );
      await you.say_and_wait(`이제 돌아갈까.`);
      await era.printAndWait(`돌아가려던 순간 익숙한 그림자가 보였다.`);
      await falcon.say_and_wait(`우러러보면 보이지만, 손을 뻗으면 허공뿐.`);
      await falcon.say_and_wait(`달 속의 계수나무처럼, 푸른 바다 위에 있네.`);
      await era.printAndWait(
        `수심 어린 노랫소리가 바람을 타고 전해지고, 근심 어린 눈은 석양이 사라지는 쪽을 바라보고 있다.`,
      );
      await you.say_and_wait(`팔코?`, true);
      await era.printAndWait(`목소리에 이끌려 그 근원을 바라본다.`);
      await era.printAndWait(
        `바람을 맞는${falcon.name}은(는) 긴 머리칼을 맡긴 채 수심 어린 눈으로 허공을 보고 있다.`,
      );
      await era.printAndWait(`말을 걸려다가 그 자리에 멈췄다.`);
      await era.printAndWait(`${falcon.name}은(는) 결국 옥상을 떠났다.`);
    };
    f.title = title;
    return f;
  })(),
  petrichor_girl: (() => {
    const title = (falcon) => `풋풀 내음이 나는${falcon.uma_sex_title}들`;
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`오늘은 교내 개방의 날이었다.`);
      await falcon.say_and_wait(
        `${falcon.name} ${falcon.elder_sibling_sex_title}이야. 지금부터 트레센을 안내해 줄게♪`,
      );
      await era.printAndWait(
        `근처 초등학교의 어린${falcon.uma_sex_title}들이 트레센을 견학하러 왔다.`,
      );
      era.printButton(
        `이 어린${falcon.uma_sex_title}들 가운데 나중에 담당이 될 아이도 있을지 모른다.`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `어린${falcon.uma_sex_title}A 「여기가 트레센이야?」`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}B 「와! 학원이 엄청 커!」`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}C「${
          falcon.name
        }언니, 트레센의 역사를 알려 줘!」`,
      );
      await falcon.say_and_wait(
        `아이돌 팔코라면 팬들에게 제대로 설명해 줄게♪ 우선……`,
      );
      await era.printAndWait(
        `활기 넘치는 ${falcon.name}은 트레센과 관련된 일들을 인내심 있게 설명해 주었다.`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}A 「저쪽에 있는 사람은 누구야?」`,
      );
      await era.printAndWait(
        `${
          falcon.name
        }의 주위에서 뛰놀던 어린${falcon.uma_sex_title}이(가)${you.name}을(를) 발견했다.`,
      );
      await falcon.say_and_wait(
        `트레센의${falcon.uma_sex_title}이라도 G1에서 우승하는 건 어렵단다……어? 잠깐만.`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}A 「저쪽 트레이너 멋있지 않아?」`,
      );
      await era.printAndWait(
        `방금까지${
          falcon.name
        }옆에 있던${falcon.uma_sex_title}들이 우르르${you.name}의 주위로 몰려왔다.`,
      );
      await falcon.say_and_wait(`트,${callname}！`);
      await era.printAndWait(
        `어린${falcon.uma_sex_title}B 「트레센에 입학하면 내 담당 트레이너가 되어 줄래?」`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}A 「안 돼! 내가 먼저 봤어!」`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}B 「말은 내가 먼저 했어. 그러니까 똑같아!」`,
      );
      await era.printAndWait(
        `어린${falcon.uma_sex_title}들이 소중한 장난감을 빼앗으려는 듯${you.name}의 양손을 잡아당긴다.`,
      );
      era.printButton(`아, 아파!`, 1);
      await era.input();
      await era.printAndWait(
        `다들 알다시피,${falcon.uma_sex_title}의 힘은 성인 인간의 세 배다.`,
      );
      await era.printAndWait(
        `힘을 조절하지 못해 위험해지는 일을 막기 위해,${falcon.uma_sex_title}에게는 필수 교육이 있다.`,
      );
      await era.printAndWait(`바로 자신의 힘을 조절하는 법을 배우는 것이었다.`);
      await era.printAndWait(
        `대부분의${falcon.uma_sex_title}은(는) 중학교 때부터 의식적으로 힘을 억제한다.`,
      );
      await era.printAndWait(
        `하지만 마음도 아직 자라고 있는 어린${falcon.uma_sex_title}들에게는.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 마치 두 명의 근육질 거구에게 장난감처럼 이리저리 끌려다니는 꼴이 되었다.`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`다행히 ${falcon.name}이 제때 도착했다.`);
      await falcon.say_and_wait(
        `너희 둘! 대체 무슨 일인지 팔코에게 제대로 설명해 봐!`,
      );
      await era.printAndWait(
        `두 어린${falcon.uma_sex_title}이(가) 거대한 힘에 공중으로 들려 올라가 무슨 일인지 보려는 순간,${
          falcon.name
        }의 무시무시한 얼굴이 눈앞에 나타났다.`,
      );
      await era.printAndWait(`어린${falcon.uma_sex_title}A 「으아아!」`);
      await era.printAndWait(`어린${falcon.uma_sex_title}B 「잡아먹지 마!」`);
      await era.printAndWait(
        `방금까지 다투던 두 아이는 이제 서로 꼭 껴안은 채 벌벌 떨며 ${falcon.name}의 훈계를 들었다.`,
      );
      await falcon.say_and_wait(`${callname}！ ${callname}, 괜찮아?`);
      await era.printAndWait(
        `설교가 끝난 뒤, ${falcon.name}은 걱정스러운 표정으로 ${you.name}에게 물었다.`,
      );
      era.printButton(`괜찮아. 아이들이 조금 신났을 뿐이야.`, 1);
      await era.input();
      await era.printAndWait(`아픔을 참고 아이들에게 다가간다.`);
      await era.printAndWait(`어린${falcon.uma_sex_title}A 「우──」`);
      await era.printAndWait(`어린${falcon.uma_sex_title}B 「응?」`);
      era.printButton(
        `인간은${falcon.uma_sex_title}보다 훨씬 연약해. 다음에는 힘을 조절해 줘.`,
        1,
      );
      await era.input();
      era.printButton(
        `그럴 수 있다면 트레센에서도 너희의 활기찬 모습을 보고 싶어.`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        `어린${falcon.uma_sex_title}A`,
        '응, 응.',
      );
      await you.say_as_passer_by_and_wait(
        `어린${falcon.uma_sex_title}B`,
        '알겠어.',
      );
      await era.printAndWait('인솔 교사가 뒤늦게 와서 사정을 듣고 사과했다.');
      era.drawLine({ content: '終了後' });
      await falcon.say_and_wait(
        `자기 자신보다 남의 기분을 더 걱정하다니, 그러다간 금방 다치고 말 거야!`,
      );
      await era.printAndWait([
        '팔코의 설교를 얌전히 들으며 ',
        you.get_colored_name(),
        '은(는) 양손을 움직여 보았다.',
      ]);
      await you.say_and_wait(`팔코, 나를 그렇게나 걱정해 준 거야?`);
      await falcon.say_and_wait(`우마돌이니까 당연히 팬을 걱정해야지!`);
      await falcon.say_and_wait(`게다가 ${callname}은 팔코의……`);
      await era.printAndWait(
        `무언가 깨달은 듯, 팔코의 얼굴이 점점 붉게 물들었다.`,
      );
      await falcon.say_and_wait(`아앗! ${callname}, 팔코를 놀렸어! 너무해!`);
      await era.printAndWait(
        `서로 티격태격하는 사이, 오늘의 일과가 마무리되었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Freesia';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`아주 평범한 아침`);
      await falcon.say_and_wait(`${callname}, 오늘도 힘내자⭐`);
      await era.printAndWait(
        `연패로 팬들의 의심이 많아졌지만, 팔코의 격려에${you.name}은(는) 훈련 계획을 이어 가고 있다.`,
      );
      await you.say_and_wait(`오늘의 팔코도 잘 부탁해.`);
      await falcon.say_and_wait(`——！${callname}의 부탁이라면 팔코도 힘낼게⭐`);
      await era.printAndWait(
        `수많은 경쟁자를 제치고 매일 흘린 땀이 마침내 보상받았다.`,
      );
      await era.printAndWait(
        `이 일로 팔코의 이름을 알릴 수 있다면 앞으로의 더트도……`,
      );
      await falcon.say_and_wait(`팔코가 도주하면?`);
      await era.printAndWait(
        `무언가 기다리는${falcon.name}이(가) 초조한 눈으로${you.name}을(를) 바라본다.`,
      );
      era.printButton(`쫓아갈 수밖에 없지!`, 1);
      await era.input();
      await falcon.say_and_wait(`지평선 끝까지 쫓아오는 거야?`);
      await era.printAndWait(`눈부신 빛이 무대에 쏟아진다.`);
      await you.say_and_wait(`그곳이 팔코의 커다란 무대!`);
      await era.printAndWait(
        `배우들은 자신의 대사를 작게 읊고, 촬영팀은 카메라 작동 상태를 마지막으로 확인한다.`,
      );
      await falcon.say_and_wait(
        `길이 없다면 팔코가 찾을게! 목표를 찾았다면 바로 붙잡아!`,
      );
      await era.printAndWait(`감독이 맨 앞줄에 앉는다.`);
      await you.say_and_wait(`──커다란 사랑을 쟁취하자!`);
      await era.printAndWait(`준비! 모두 주인공의 등장을 기다린다.`);
      await falcon.say_and_wait(
        `최강의${falcon.uma_sex_title}아이돌,${falcon.name}♪ 오늘도 마음이 전해졌어⭐`,
      );
      await era.printAndWait(`귀여운 의상을 입은 팔코가 등장했다.`);
      era.printButton(`주변을 조금 걸어 본다`, 1);
      era.printButton(`자리를 잡고 팔코의 무대를 본다`, 2, {
        disabled: true,
      });
      if ((await era.input()) === 1) {
        await era.printAndWait(`아무도 없는 무대 뒤 대기실로 돌아간다.`);
        await era.printAndWait(`어째서인지 기분도 들뜬다.`);
        await you.say_and_wait(
          `공기는 조금 탁하지만 여기서도${falcon.name}의 아름다운 노래가 들린다.`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「안녕하세요.${falcon.name}의 트레이너이신가요?」`,
        );
        await era.printAndWait(
          `어느새 대기실에 들어와 있던${falcon.uma_sex_title}。`,
        );
        await you.say_and_wait(`네, 저는──`);
        await era.printAndWait(
          `반응하기도 전에 날카로운 통증이 가슴을 덮쳤다.`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「처음 뵙겠습니다, 트레이너${you.adult_sex_title}. 그리고 안녕히 가세요.」`,
        );
        await era.printAndWait(
          `두 번째 칼질을 하려던${falcon.uma_sex_title}에게,${you.name}이(가) 손 가까이에 있던 화장품을 던졌다.`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「으──기어오르지 마! 으아아!!!」`,
        );
        await era.printAndWait(
          `어깨 가방에서${falcon.uma_sex_title}대비용 스프레이를 꺼낸${you.name}이(가) 떨면서 일어선다.`,
        );
        await era.printAndWait(
          `비명을 지르는${falcon.uma_sex_title}을(를) 무시하고 스프레이를 끝까지 눌러 뿌린다.`,
        );
        await you.say_and_wait(`이 일은 팔코에게 알려야 해.`);
        await era.printAndWait(
          `무의식적으로 가방을 들어 올린${you.name}은(는) 즉사만은 피할 수 있었다.`,
        );
        await era.printAndWait(
          `하지만 아드레날린이 솟는 와중에도 피는 멈추지 않고 흘렀다.`,
        );
        await you.say_and_wait(`여기는 위험해. 여기서 상처를 감쌀 수는 없어.`);
        await era.printAndWait(`여길 나가야 해.`);
        await era.printAndWait(
          `그렇게 생각하고 나가려던${you.name}의 가방을,${falcon.uma_sex_title}이(가) 마구 뻗은 두 손으로 붙잡았다.`,
        );
        await you.say_and_wait(`큰일이다.`, true);
        await era.printAndWait(
          `거대한 힘이 밀려온다. 목숨을 구해 준 가방이 이제는 사신이 되었다.`,
        );
        await era.printAndWait(
          `목이 당겨진${you.name}은(는) 허공에서 두 팔을 휘저을 수밖에 없었다.`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「지옥에서 네 죄를 뉘우쳐라! 하하하하하하하!!!」`,
        );
        await falcon.say_and_wait(`${callname}, 팔코 들어갈게?`);
        await era.printAndWait(`의식이 흐려지는${you.name}에게 환청이 들린다.`);
        await you.say_and_wait(`이렇게 팔코의 목소리가 들리는구나.`, true);
        await you.say_and_wait(`나는`, true);
        await era.printAndWait(
          `힘없이 바닥에 쓰러진${you.name}은(는) 아픔조차 느끼지 못했다.`,
        );
      }
      era.drawLine();
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`다정하게 부르는 소리. 어디선가 들었던 목소리다.`);
      await you.say_and_wait(`천국인가. 조금만 더 자게 해 줘.`, true);
      await era.printAndWait(`어느새 안심하며 깊은 잠에 빠졌다.`);
      era.drawLine();
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(
        `다정하면서도 단단한 목소리가 먼 곳에서 들려온다.`,
      );
      await era.printAndWait(`아주 익숙한 목소리다.`);
      await era.printAndWait(
        `어디서 들었더라? 교실? 옥상? 그${falcon.teen_sex_title}——`,
      );
      await you.say_and_wait(`나는 누구지? 여기는 어디지?`, true);
      await era.printAndWait(`새까만 세상을 둘러보고 다시 깊이 잠든다.`);
      await falcon.say_and_wait(
        `${callname}, 또 ${callname}을(를) 만나러 왔어.`,
      );
      await falcon.say_and_wait(`팔코도 업계에서 조금은 자리 잡게 됐어.`);
      await falcon.say_and_wait(
        `전에도 ${callname}에게 말했지만.${callname}, 기억 못 하겠지.`,
      );
      await era.printAndWait(`밝은 목소리가 점점 가라앉는다.`);
      await falcon.say_and_wait(
        `하지만, 그래도 팔코는 ${callname}의 기대를 안고 계속 노력할 거야!${callname}, 다음에 또 올게!`,
      );
      await you.say_and_wait(`팔코.`);
      await era.printAndWait(
        `일어나려 했지만 저린 몸이 말을 듣지 않아 다시 병상으로 무겁게 가라앉았다.`,
      );
      await falcon.say_and_wait(`어?!`);
      await era.printAndWait([
        '──마지막으로 한 번 더 보려던 ',
        falcon.get_colored_name(),
        '이(가) 그 광경을 모두 보았다.',
      ]);
      await falcon.say_and_wait(`${callname}……돌아왔구나!`);
      await you.say_and_wait(`얼마나 지났어?`);
      await era.printAndWait(
        `상당한 시간이 흘렀을 것이다.${you.name}은(는) 최악의 상황도 각오하고 있었다.`,
      );
      await falcon.say_and_wait(`음──그 사건이 있고 벌써 삼 년이야.`);
      await you.say_and_wait(`……그렇구나.`);
      await era.printAndWait(`벌써 그렇게나 지났나.`);
      await you.say_and_wait(`전보다 더 빛나 보여.`);
      await era.printAndWait(
        `외로운${falcon.teen_sex_title}이(가) 어떻게 이 아이돌의 길을 걸어왔을지 상상하기 어렵다.`,
      );
      await falcon.say_and_wait(
        `응!${callname}이(가) 퇴원하면 빛나는 팔코도 볼 수 있어!`,
      );
      await you.say_and_wait(`……미안해.`);
      await you.say_and_wait(`트레이너라면 네 곁에 있어 줘야 했는데.`);
      await falcon.say_and_wait(
        `아니야.${callname}이(가) 눈뜬 모습을 볼 수 있다면 팔코는 그것만으로도 충분히 행복해.`,
      );
      await falcon.say_and_wait(`그 이상 바라면 팔코가 너무 욕심부리는 거야.`);
      await era.printAndWait(`차갑고 작은 손이 거칠고 커다란 손에 포개진다.`);
      await falcon.say_and_wait(`그러니까 ${callname}, 빨리 나아 줘.`);
      await era.printAndWait(
        `커다란 손을 자신의 뺨에 살며시 갖다 대고,${falcon.name}은(는) 눈을 감아 오랜만의 온기를 음미한다.`,
      );
      await you.say_and_wait(
        `……응, 반드시. 팔코의 라이브도, 팔코의 앞날도 전부.`,
      );
      await era.printAndWait(`입술에 촉촉한 감촉이 닿아 다음 말이 멎었다.`);
      await you.say_and_wait(`아니, 이제 충분하다.`, true);
      await era.printAndWait(`입맞춤은 짭짤했다.`);
    };
    f.title = title;
    return f;
  })(),
};
