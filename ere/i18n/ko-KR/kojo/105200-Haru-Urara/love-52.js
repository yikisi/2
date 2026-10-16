/**
 * @file ハルウララ - 恋慕
 * @author 99
 * @author Claude (翻訳)
 * @desc 条件によってはウララの好感が親密で固定されるため、好感はすべて引数で渡す
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    const title = '싹튼 어린 날들';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {string} self_name ハルウララの自称
     * @param {PrintedSpan} u_call_h ハルウララのキングヘイローへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        `평소라면 지금쯤 ${
          urara.name
        }는 진작에 꿈나라에 가 있었을 시간이다. 하지만 오늘 밤의 ${urara.uma_sex_title}는 좀처럼 잠들지 못하고 있다.`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `룸메이트의 침대에서 얼굴이 화끈거릴 정도의 신음이 주문처럼 계속 새어 나오고, ${urara.sex}의 의식을 낯선 곳으로 이끌어간다……`,
      );
      era.drawLine();
      await urara.print_and_wait(
        `침대 위에서 몸을 뒤척여 보지만, ${urara.name}의 머릿속 또한 비바람 속의 작은 배처럼 멈추지 않고 흔들린다.`,
      );
      await urara.print_and_wait(
        `이대로 눈을 감으면 또 저번처럼 엄청난 꿈을 꿀 것 같아. ${callname}이(가) ${self_name}에게 이렇게저렇게 하는 꿈이라든가.`,
      );
      await urara.print_and_wait(
        `원하는 마음으로 ${self_name}를 덮치는 ${callname}의 모습은 조금 무섭지만, 지금이라면 받아들여도 괜찮을 것 같아?`,
      );
      await urara.print_and_wait(
        `꿈속에서 ${callname}을(를) 안고 있던 ${urara.uma_sex_title}의 그 야한 표정도 그래. 앞으로의 ${self_name}도…… 그렇게 부끄러움 모르는 「${urara.phy_sex_title}」이(가) 되어버리는 걸까?`,
      );
      await urara.print_and_wait(
        `똑같이 서로 안고, 그때의 ${callname}과(와) ${self_name} 중 누가 더 상대를 원하고 있었던 걸까……`,
      );
      await urara.print_and_wait(
        '안 돼 안 돼, 지금은 이상한 생각 할 때가 아니야! 제대로 자야지!',
      );
      await urara.print_and_wait([
        `그럼 지금, `,
        u_call_h,
        `에게 말을 걸어볼까? 하지만 그러면 분명 혼날 테고, ${self_name}이(가) 조금 더 노력해서……`,
      ]);
      urara.print('우우…… 몸이 뜨거워, 이불을 걷어내도 여전히 뜨거워……');
      era.printButton('조금만, 조금만이라면…… (관계를 진전시킨다)', 1);
      era.printButton(
        '으음……하지만 아직 졸려……(아직 관계를 발전시키지 않는다)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        if (urara.sex_code === 1) {
          await urara.print_and_wait(
            `그대로 잠옷을 벗고 손을 육봉으로 뻗은 순간, ${urara.teen_sex_title}의 부드러운 몸은 이미 절정을 맞이할 준비가 되어 있었다.`,
          );
        } else {
          await urara.print_and_wait(
            `그대로 잠옷을 벗고 손을 아래의 벛꽃으로 미끄러뜨린 순간, ${urara.teen_sex_title}의 부드러운 몸은 이미 절정을 맞이할 준비가 되어 있었다.`,
          );
        }
        await urara.print_and_wait(
          `살며시 닿았을 뿐인데도, 어린 ${urara.uma_sex_title}의 몸은 지금까지 중 가장 격렬하게 반응했고, 억누를 수 없는 물소리가 시트를 적셨다.`,
        );
        await urara.print_and_wait(
          `입을 꽉 틀어막아 소리를 내지 않으려 해도, 멈추지 않는 떨림 속에서 ${callname}을(를) 부르는 가냘픈 목소리가 뒤집어쓴 이불 밑으로 은밀히 새어 나갔다.`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            '어느새 절정감에 부풀어 오른 암컷의 가슴은, 참지 못하고 모유를 배어내고 있다.',
          );
          await urara.print_and_wait([
            '몸이 녹아내리는 와중에도 모유는 제멋대로 유두에서 흘러나와, ',
            urara.teen_sex_title,
            '의 잠옷을 적셔간다.',
          ]);
          era.println();
          era.set('palam:52:胸部快感', era.get('tcvar:52:胸部快感上限') * 0.75);
        }
        await urara.print_and_wait(
          `알 수 없는 반응에 ${self_name}은 잠시 당황한다. 하지만 욕망은 여전히 몸을 완전히 지배하고 있다.`,
        );
        await urara.print_and_wait(
          `손가락이 멋대로 깊숙이 파고들고, 달콤한 신음이 멈추질 않는다. 어린 ${urara.uma_sex_title}는 그 어느 때보다 깊이, 누군가를 향한 애욕 속으로 빠져들어 간다.`,
        );
        await urara.print_and_wait(
          `마치 처음 발정한 어린 짐승이 성숙한 수컷에게 정복당하고 싶어 하듯이, ${self_name}은 이불 속에서 계속 허리를 비틀어댔다.`,
        );
        await urara.say_and_wait(
          `${callname}…… 으윽…… ${callname}한테, 거칠게…… 안 돼, 하아……`,
        );
        await urara.print_and_wait(
          `누군가에게 지배당하고 괴롭힘을 당하는 망상은 밤새도록 이어진 듯했고, ${self_name}은(는) 언제 잠들었는지조차 알지 못했다.`,
        );
        await urara.print_and_wait(
          `${urara.teen_sex_title}가 다시 눈을 떴을 때는, 이미 다음 날 아침 알람 소리에 잠에서 깬 뒤였다.`,
        );
        await urara.print_and_wait(
          '욕구를 쏟아내고 나니, 침대 위의 엉망인 상태는 차치하고 그날 밤은 의외로 푹 잘 수 있었다. 다만——',
        );
        await urara.say_and_wait(
          `잘은 모르겠지만……${callname}, 진짜로 하고 싶어……`,
        );
        await urara.print_and_wait(
          `${urara.teen_sex_title}가 몸을 일으킨 자리에 남은 열기 속에서, 「염치없는」 말이 다시 작게 흘러나왔다……`,
        );
      } else {
        await urara.say_and_wait(
          `다음에도 ${callname}을(를) 만나야 하니까, 빨리 자야지……`,
        );
        await urara.print_and_wait(
          `들끓는 몸을 진정시키며 꼬리를 억지로 옆으로 치우고, 작은 ${urara.uma_sex_title}는 애써 몸을 뒤척인다.`,
        );
        await urara.print_and_wait(
          `이불과 베개로 귀를 막고 한바탕 소란을 피운 뒤, ${urara.name}는 룸메이트의 간헐적인 숨소리 속에서 마침내 꿈속으로 빠져들었다.`,
        );
        await urara.print_and_wait(
          `그럼에도 꿈속에서, 어린 ${urara.uma_sex_title}는 또 다시 보았다. 마치 「${urara.phy_sex_title}」를 바라보는 듯한 뜨거운 눈빛으로, ${
            urara.sex
          }를 덮쳐 누르는 ${callname}의 모습을……`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            '잠에서 깼을 때, 제멋대로인 크고 하얀 토끼는 몽중 발정의 여운 탓에 여전히 꼿꼿하게 솟아 있었다.',
          );
          await urara.print_and_wait(
            '솟아오른 끝에서 흘러나온 하얀 즙도 주인이 꿈에 잠겨 있는 동안 잠옷의 가슴 부분을 흠뻑 적셔 놓았다.',
          );
          era.println();
        }
        await urara.print_and_wait(
          `그렇게 격렬한 봄의 꿈에 밤새 시달린 ${self_name}는, 다음 날 아침에도 늦잠을 자고 말았다.`,
        );
        await urara.say_and_wait(
          `어젯밤, ${self_name}가 참지 않았더라면 더 푹 잘 수 있었을까? 어쩌면……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  50: (() => {
    const title = '어린 수음';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait('인정하고 싶지는 않지만……');
      await inner_urara.say_as_unknown_and_wait(
        '애욕에 물을 주면, 푸른 열매는 언젠가 요염한 금단의 열매가 되지.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그렇다면, 이 달콤한 열매를 어서 따버려야 할까……?',
      );
      era.drawLine();
      await era.printAndWait([
        '기다리다 지쳐 찾아 나서자 ',
        you.get_colored_name(),
        '은(는) 아주 쉽게, ',
        urara.get_colored_name(),
        '가 숨어 있는 그림자를 찾아냈다.',
      ]);
      await era.printAndWait([
        '귀를 막고 방울을 훔치듯, 볼을 붉힌 ',
        urara.get_colored_name(),
        '는 작은 몸을 홀의 역광 구석으로 필사적으로 웅크리고 있다.',
      ]);
      await era.printAndWait([
        '벽 하나를 사이에 둔 것뿐인데, 수치와 쾌감에 잠긴 작은',
        urara.uma_sex_title,
        '는 바로 코앞까지 다가온 ',
        you.get_colored_name(),
        '을(를) 아직 눈치채지 못했다.',
      ]);
      await era.printAndWait(
        '정돈되어 있어야 할 옷은 흐트러져 몸에 걸려 있고, 어린 소녀의 민감한 부위는 가려주는 것 하나 없이 공기 중에 드러나 있다.',
      );
      if (urara.sex_code - 1) {
        await era.printAndWait(
          '열 손가락이 몸의 음란한 구석구석을 탐색하며, 분홍빛 어린 구멍에서 끈적이는 은실을 몇 번이고 끌어낸다.',
        );
        await era.printAndWait([
          urara.teen_sex_title,
          '의 애액이 끊임없이 흘러내려, 깨끗한 바닥에 배덕한 욕망을 머금은 작은 물웅덩이를 남기고 있다.',
        ]);
      }
      if (era.get('talent:52:乳房尺寸') >= 1) {
        await era.printAndWait(
          '애액과 함께 떨어지는 것은, 금기시되며 이질적인 유백색의 물방울이다.',
        );
        await era.printAndWait(
          '단단히 감긴 가슴싸개가 벌어지며, 어린 몸에는 어울리지 않는 풍만한 가슴이 보는 이의 눈앞에 드러나 있다.',
        );
        await era.printAndWait(
          '가슴은 포동포동하고 부드럽게 처져 있고, 앞으로 내밀어진 유륜과 유두가 멋대로 하얀 즙을 흘리고 있다.',
        );
        await era.printAndWait([
          urara.teen_sex_title,
          '가 팔을 앞으로 돌려 발정으로 떨고 있는 작은 괴물을 필사적으로 지탱해도, 유백색의 얼룩은 발치에 늘어간다.',
        ]);
        await era.printAndWait(
          '부드럽고 민감해서 마치 새로운 성기처럼 변해버린 그녀의 가슴은 이 작은 몸이 이미 모든 준비를 마쳤음을 보여주고 있었다——',
        );
        await era.printAndWait(
          '언젠가 젖을 먹일 준비도, 탄탄한 아랫배를 새로운 아이를 품을 그릇으로 삼을 준비도……',
        );
      }
      await era.printAndWait([
        '지금의 ',
        urara.get_colored_name(),
        '는 마치 살이 통통하게 오른 어린 토끼 같다. 천진난만하게도, 달콤한 급소를 숨어 있던 포식자 앞에 전부 드러내고 있다.',
      ]);
      await urara.say_and_wait([
        '윽……',
        callname,
        '……',
        you.actual_name,
        '……왜 이러지…… 기분 좋아, 멈출 수가 없어……',
      ]);
      await era.printAndWait([
        '정복욕을 자극하는, 어린아이 같은 울음 섞인 소리와 함께',
        urara.get_colored_name(),
        '는 끊어질 듯 이어지는 달콤한 숨결로 ',
        you.get_colored_name(),
        '의 이름을 부른다.',
      ]);
      await era.printAndWait(
        '지금 하고 있는 짓은 절대 남에게 들켜선 안 된다는 걸 알면서도, 쾌락에 젖은 신음은 억누를 수 없다.',
      );
      await era.printAndWait([
        '아직 피어나는 꽃봉오리 같은',
        urara.teen_sex_title,
        '는 무력하면서도 무언가를 기대하듯, 보이지 않는 누군가를 향해 자신의 가장 수치스러운 모습을 드러내고 있다.',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          you.sex,
          ', 아직 기다리고 있는데…… 안 되는데, 만약',
          you.sex,
          '한테 들키면… 싫어…',
        ]);
        await era.printAndWait([
          '머릿속까지 달아오른 듯한 음란한 표정으로, ',
          urara.get_colored_name(),
          '는 물소리에 섞어 음란하게 중얼거린다.',
        ]);
        await era.printAndWait([
          '작은',
          urara.uma_sex_title,
          '는 지금, 마치 무언가에 홀린 듯이 건드리면 터질 것만 같은 몸을 마구 애무하고 있다.',
        ]);
        await urara.say_and_wait([
          callname,
          '에게 들키면 ',
          you.actual_name,
          '에게 들키면, 으응……',
        ]);
        await urara.say_and_wait(
          '원해…… 하지만 안 돼…… 머리가, 이상해질 것 같아——',
        );
      } else {
        await urara.say_and_wait([
          '알고 있어, 알고 있는데도……',
          callname,
          '은(는) 그런 사람인데, 그래도 아, 하아……',
        ]);
        await era.printAndWait([
          '마음은 거부하고 있어도, 정욕에 빠진 작은',
          urara.uma_sex_title,
          '는 격렬하게 자신을 위로하는 손가락을 멈출 수 없다.',
        ]);
        await era.printAndWait([
          '지금의 ',
          urara.get_colored_name(),
          '는 양다리를 팔자로 벌리고, 등도 격렬한 쾌감으로 한계까지 젖히고 있다.',
        ]);
        await urara.say_and_wait([
          '역시 아직……',
          urara.get_colored_name(),
          '는 아직 ',
          callname,
          '을(를) 믿고 싶어, ',
          you.actual_name,
          '을(를) 믿고 싶어……',
        ]);
        await urara.say_and_wait([
          '그런데…… 왜, ',
          callname,
          '을(를) 떠올리는 것만으로 몸이——',
        ]);
      }
      await era.printAndWait(
        '억누를 수 없는 절정의 신음 속에서, 작고 음란한 몸이 격렬한 클라이맥스를 맞이한다.',
      );
      await era.printAndWait([
        '실금하듯 튀어 오른 애액이 바닥을 적시고, 신발과 반쯤 벗겨진 하이 삭스를 적신 뒤, ',
        urara.teen_sex_title,
        '의 속옷과 스패츠까지 흥건하게 적셨다.',
      ]);
      await era.printAndWait([
        '욕구를 한차례 쏟아낸 ',
        urara.get_colored_name(),
        '는 초점 없는 눈으로 멍하니 벽에 기대어 섰고, 귀와 꼬리도 힘없이 축 늘어져 있다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '가 서투르게 몸을 정돈하려 했을 때, 양다리가 힘을 잃고 작은',
        urara.uma_sex_title,
        '는 발밑의, 온기를 잃어가는 물웅덩이 속으로 주저앉고 말았다……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 흐트러진 옷차림 그대로 서둘러 ',
        you.get_colored_name(),
        '과(와) 합류했을 때는 이미 약속 시간을 한참 넘긴 뒤였다. 하지만 이번의 ',
        you.get_colored_name(),
        '은(는), 다음에는 조심하겠다는 한마디조차 내뱉지 못했다.',
      ]);
      await era.printAndWait([
        '그 자리에서 ',
        urara.get_colored_name(),
        '를 당장이라도 잡아먹고 싶은 충동을 억누르는 것만으로도, ',
        you.get_colored_name(),
        '의 기력은 기력은 바닥나기 직전이었다. 유혹하듯 상기된 기색이 남은 그 작은 얼굴을 제대로 쳐다볼 여유조차 없었다.',
      ]);
      await era.printAndWait([
        '시선을 둘 곳을 찾지 못하던 ',
        you.get_colored_name(),
        '은(는) 그럼에도 알아버린다. 담당의 흐트러진 스커트 자락에서 투명한 액체가 젖은 속옷 가장자리를 타고 흘러, 하이삭스의 입구를 적시고 있다는 것을……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = '술렁이는 마음';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {string} self_name ハルウララの自称
     * @param {PrintedSpan} u_call_h ハルウララのキングヘイローへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '침대 위에서 뒤척인다. 오늘 밤 작은 ',
        urara.uma_sex_title,
        '는 정말 잠이 오지 않는 모양이다……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '사랑에 빠진 ',
        urara.teen_sex_title,
        '는 겉모습이 아무리 어려도, 속으로는 이렇게 계속 흔들린다……',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        '또야. 두근거림이 멈추지 않아. 이대로 두면 내일도 못 일어날 거야.',
      );
      await urara.print_and_wait(
        '그런데 억지로 자려고 하면 할수록 머릿속의 그 얼굴이 더 선명해진다.',
      );
      await urara.print_and_wait(
        '귀를 접고 꼬리를 허리에 감아도 저절로 떨리고 만다.',
      );
      await urara.print_and_wait(
        '기뻐서 그런 걸까? 왜 맨날 이러지? 왜 눈을 감으면 그 사람만 보이는 걸까?',
      );
      await urara.print_and_wait([
        '처음 만났을 때 눈앞에서 쓰러졌던 사람. 처음 보는 ',
        urara.uma_sex_title,
        '의 말 몇 마디만 듣고 약속한 자리에 와 준 사람.',
      ]);
      await urara.print_and_wait([
        '맨 뒤에서 달리는 약한 ',
        urara.uma_sex_title,
        '에게 응원을 보내 준 사람. 무슨 일이 생겨도 못난 ',
        urara.sex,
        '하고 여기까지 와 준 사람……',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          '돌이켜보면 ',
          callname,
          '이(가) 없는 ',
          self_name,
          '이(가) 어떻게 지금까지 왔을지, 이제는 상상할 수도 없다.',
        ]);
        await urara.say_and_wait('이런 건 정말 큰 행운이지……');
        await urara.print_and_wait([
          '그런데 언젠가 ',
          callname,
          '이(가) 없어지면? 모두를 위해 달린다고 해도, 그 사람이 없어진 약한 ',
          self_name,
          '은(는) 계속할 수 있을까……',
        ]);
        await urara.print_and_wait(
          '불안해. 그 행운을 잃은 뒤가 무서워. 이미 보이는 미래라고 해도, 어떻게 해야 하지?',
        );
        await urara.print_and_wait(
          '담당과 트레이너의 관계는 언젠가 반드시 달라질 테니까──',
        );
      } else {
        await urara.print_and_wait([
          '평소 사이가 좋아 보이지 않더라도 ',
          self_name,
          '은(는) 이미 ',
          callname,
          '에게 의지하고 있다.',
        ]);
        await urara.say_and_wait([
          '게다가 ',
          callname,
          '의 곁에 있는 건 싫지도 않고……',
        ]);
        await urara.print_and_wait([
          '어느새 ',
          callname,
          '이(가) ',
          self_name,
          '의 마음에서 차지하는 자리는 스스로도 놀랄 만큼 커져 있었다.',
        ]);
        await urara.print_and_wait(
          '아직 어리둥절하지만, 같이 걷기만 해도 가슴이 술렁이고 격려해 주면 깜짝 놀랄 만큼 기쁘다.',
        );
        await urara.print_and_wait([
          '어떻게 된 걸까? ',
          self_name,
          '의 ',
          callname,
          '을(를) 향한 마음이 나도 모르는 사이에 달라진 걸까?',
        ]);
      }
      urara.say(`그럼 우라라가 ${you.sex}에게 느끼는 마음은……`);
      era.printButton(
        "「역시 '사랑'이라는 마음인 걸까?」(관계를 발전시킨다)",
        1,
      );
      era.printButton(
        '「아, 아직은 담당이 트레이너에게 느끼는 호감이겠지?」(아직 발전시키지 않는다)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait([
          '그럼…… 이게 사랑이야? ',
          self_name,
          '이(가) ',
          callname,
          '을(를)?',
        ]);
        await urara.print_and_wait([
          '전부는 모르겠지만, 아마 그런 거겠지. 그런데 그렇다면 ',
          callname,
          '은(는) ',
          self_name,
          '을(를) 좋아할까?',
        ]);
        await urara.print_and_wait([
          '그렇게 생각하자 가슴이 시큰하다. 그런데……',
          callname,
          '이(가) 먼저 고백하는 모습은 상상이 안 돼!',
        ]);
        await urara.print_and_wait([
          '이대로라면 아무것도 모르는 ',
          self_name,
          '은(는) 계속 ',
          callname,
          '한테 어린애 취급만 받겠지……',
        ]);
        await urara.say_and_wait(
          '그래도 받아들여 주지 않더라도 진심에서 도망치면 안 돼!',
        );
        await urara.say_and_wait([
          '힘들어도 솔직하지 않으면 나중에 꼭 후회할 거야! 그것만큼은 ',
          self_name,
          '도 알아!',
        ]);
        await urara.print_and_wait([
          '「',
          urara.actual_name,
          '」는 대단한 ',
          urara.uma_sex_title,
          '가 아니다.',
          urara.sex,
          '의 일상은 서투르고 유치해서, 빛나는 모두와는 비교도 안 된다……',
        ]);
        await urara.print_and_wait([
          '그러니까 더더욱 ',
          self_name,
          '은(는) 달릴 때와 마찬가지로 온 힘을 다해 ',
          callname,
          '에게 진심을 전해야 한다.',
        ]);
        await urara.print_and_wait([
          '그러면 1착을 하지 못해도 ',
          callname,
          '에게 거절당해도 평소처럼 솔직하게 받아들일 수 있어──',
        ]);
        if (high_relation) {
          await urara.print_and_wait([
            self_name,
            '은(는) 알고 있어.',
            callname,
            '은(는) 정말 훌륭한 사람이니까, 다들 좋아해도 이상할 게 없어.',
          ]);
          await urara.say_and_wait('내일부터는 좋아한다고 큰 소리로 말하자──');
        } else {
          await urara.print_and_wait([
            callname,
            '이(가) 나쁜 사람이어도 ',
            self_name,
            '은(는) 그 나쁜 ',
            callname,
            '을(를) 좋아하게 되어 버렸어.',
          ]);
          await urara.say_and_wait([
            '무슨 일이 생겨도 ',
            callname,
            '을(를) 좋아한다는 건 변하지 않아……',
          ]);
        }
        await urara.say_and_wait([
          '그러니까 우라라도 용기를 낼게. 언젠가는 ',
          callname,
          '하고──',
        ]);
        if (has_lover) {
          await urara.say_and_wait([
            '설령 ',
            callname,
            '에게 이미 다른 아이가 있어도?',
          ]);
          await urara.print_and_wait([
            '마음을 정하자마자 어디선가 질문이 들려온다. 하지만 각오를 마친 ',
            self_name,
            '은(는) 이불 아래에서 입술을 깨물었을 뿐이다.',
          ]);
          await urara.say_and_wait(
            '……알고 있어. 자격도 없고, 정말 나쁜 일이고, 다들 슬퍼할 거야……',
          );
          await urara.say_and_wait(
            '그래도 자기 자신한테 거짓말하면 아무것도 달라지지 않아.',
          );
          await urara.say_and_wait([
            self_name,
            '은(는) 머리도 나쁘고 모르는 것도 많아. 그래도 ',
            self_name,
            '은(는) 겁쟁이가 아니야.',
          ]);
          await urara.say_and_wait([
            '도망치지 않을 거야. 다음에도 가슴을 펴고 ',
            callname,
            '하고 함께하기 위해서──!',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '응! 역시 평소랑 똑같아.',
          self_name,
          '하고 ',
          callname,
          '은(는) 평범한 사이…… 맞지?',
        ]);
        await urara.print_and_wait([
          '뭔가 잊고 있는 것 같다. 아니면 작은 ',
          urara.uma_sex_title,
          '는 아직 자신의 마음을 다 받아들이지 못한 걸지도 모른다.',
        ]);
        await urara.print_and_wait([
          '커다란 마음을 계속 평범한 것으로 여기려 애쓴 끝에 ',
          self_name,
          '은(는) 마침내 머리가 멈춰 버릴 지경에 이르렀다.',
        ]);
        await urara.print_and_wait([
          '멍한 채로 ',
          self_name,
          '은(는) 든든한 룸메이트에게 희망을 건다.',
          urara.sex,
          '이라면 뭔가 말해 줄지도 몰라.',
        ]);
        await urara.say_and_wait([
          '그런데 옆의 ',
          u_call_h,
          '은(는) 벌써 자고 있다. 평소에는 ',
          self_name,
          '이(가) 먼저 자는데?',
        ]);
        await urara.say_and_wait([
          '응, 이제 이상한 생각은 그만하자, ',
          self_name,
          '. 빨리 자지 않으면 또 기운이 없어질 거야.',
        ]);
        await urara.print_and_wait(
          '하지만 몸은 아직 뜨거워. 한 번 더, 그거 할래? 이불을 치우고, 잠옷도 전부 벗고……',
        );
        await urara.say_and_wait('음~ 하아……');
        await urara.print_and_wait([
          '떨리는 손을 다시 민감한 곳으로 가라앉힌다. 작은 ',
          urara.uma_sex_title,
          '의 눈앞에, 또 그 사람이',
          urara.sex,
          '의 몸을 원하며 짐승이 되는 모습이 떠오른다.',
        ]);
        await urara.print_and_wait([
          '몇 번째인지 모를 절정 뒤에, 이제 생각할 힘도 없는 ',
          self_name,
          '은(는) 엉망진창인 침대에서 깊이 잠들었다……',
        ]);
        await urara.say_and_wait('……');
        await urara.print_and_wait([
          '욕심을 내서 생각하는 것을 그만둔 뒤, 작은 ',
          urara.uma_sex_title,
          '는 한동안 이 질문을 머릿속에서 지워버렸다.',
        ]);
        await urara.print_and_wait([
          '하지만',
          urara.teen_sex_title,
          '의 마음은 언제까지나 무시할 수 없어. 머지않아 또 ',
          urara.sex,
          '가 이 질문에 휘말리게 될 거야.',
        ]);
        await urara.print_and_wait([
          '적어도 최근에는, ',
          you.get_colored_name(),
          '도 ',
          urara.sex,
          '가도 누군가가 갑자기 잠들지 못하게 될 걱정은 안 해도 돼.',
        ]);
        await urara.print_and_wait(
          '그냥 실오라기 하나 걸치지 않고 잠들면, 다음 날 아침 「룸메이트의 엄마」는 분명 깜짝 놀랄 거야.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = (urara) => ['오랫동안 기다린 ', urara.sex, '에게'];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (urara, inner_urara, you, high_relation, has_lover) => {
      await era.printAndWait([
        '그날 여러 일이 있었던 탓인지 ',
        you.get_colored_name(),
        '하고 ',
        urara.get_colored_name(),
        '가 겨우 둘만 남게 되었을 무렵에는 이미 하늘이 어두워지기 시작했다.',
      ]);
      await era.printAndWait([
        '기억 속의 ',
        urara.get_colored_name(),
        '는 밤하늘을 올려다본다. 작은 ',
        urara.uma_sex_title,
        '는 조용히 별을 세고, 벚꽃빛 눈동자에는 별빛이 흩어진다.',
      ]);
      await era.printAndWait([
        '다만 오늘 밤 작은 ',
        urara.uma_sex_title,
        '는 여전히 조금 기운이 없는 모양이다. 귀와 꼬리도 생각에 잠긴 듯 축 처져 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 알고 있다. 기억이 어긋나더라도 둘이 보낸 시간과 걸어온 길은 거짓말을 하지 않는다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 손을 잡고 싶다.',
        urara.get_colored_name(),
        '의 미소가 보고 싶다.',
        urara.get_colored_name(),
        '하고 더 먼 곳으로 가고 싶다……',
      ]);
      await era.printAndWait([
        '이성적으로 생각해 봐도 떠오르는 건 ',
        urara.sex,
        '가 누군가의 대답을 기다리고 있다는 것뿐이다. 다른 건 머리에 들어오지 않는다.',
      ]);
      await era.printAndWait([
        "담당은 평소 그대로다. 이상한 건 '말과 행동을 조심하겠다'는 핑계를 대는 트레이너 쪽이다.",
      ]);
      await era.printAndWait([
        '이제 와서 잘못을 거듭하게 되더라도, 비겁한 어른의 수는 이미 다 떨어졌다.',
      ]);
      await era.printAndWait([
        '각오는 됐나요? 아직 준비가 부족하다고 생각해도, 인생에서 같은 밤은 두 번 오지 않아요.',
      ]);

      await era.printAndWait([
        '빠르게 흘러가는 별빛 아래 ',
        you.get_colored_name(),
        '은(는) 마침내──',
      ]);
      era.printButton('먼저 우라라의 손을 잡는다.', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 곁에 있는 손을 살며시 잡는다. 잠깐 망설이던 상대도 따뜻하게 손을 마주 잡으며 답했다.',
      ]);
      await era.printAndWait([
        '슬쩍 옆으로 시선을 돌리자, 말없이 있던 ',
        urara.get_colored_name(),
        '가 마침내 ',
        you.get_colored_name(),
        '에게 웃어 보인다.',
      ]);
      await era.printAndWait([
        '아직 작은 ',
        urara.sex,
        '인데도, 이 순간만큼은 어린아이답지 않은 차분함을 보인다.',
      ]);
      await era.printAndWait([
        '조금은 알고 있다는 듯한 얼굴이다.',
        urara.get_colored_name(),
        '가 먼저 고백했을 때와 똑같다.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '생각했던 것보다는 조금 늦었지만, 우라라는 여전히 트레이너를 좋아해!',
        );
        await era.printAndWait([
          '곁으로 다가와 ',
          you.get_colored_name(),
          '의 마음에 답하며 ',
          urara.get_colored_name(),
          '는 어느새 웃고 있었다.',
        ]);
        await urara.say_and_wait([
          '잘 부탁해……? 에헤헤~ 역시 우라라한테는 안 어울리네!',
        ]);
      } else {
        await urara.say_and_wait([
          '무슨 생각 해? 벌써 시간이 이렇게 됐는데…… 그래도 그런 뜻인 거지, 트레이너!',
        ]);
        await era.printAndWait([
          '불만도 불안도 남아 있지만 ',
          urara.get_colored_name(),
          '는 살짝 웃었다.',
        ]);
        await urara.say_and_wait(
          '돌아갈 때 조금 천천히 가도 다들 걱정하지 않겠지?',
        );
      }
      era.println();
      if (has_lover) {
        await urara.say_and_wait(
          '그래도 트레이너, 밤길은 정말 어두워. 다른 아이들만 데려다주면 안 돼!',
        );
        await urara.say_and_wait(
          '갑자기 손을 놓으면 우라라, 길을 잃어버릴지도 몰라……',
        );
        era.println();
      }
      await era.printAndWait([
        '돌아가는 길, 연인이 된 두 사람의 걸음은 어느새 느려져 있었다.',
      ]);
      await era.printAndWait([
        '아직 천진한 시절을 보내는 작은 ',
        urara.uma_sex_title,
        '하고 이미 어른이 된 트레이너. 차이가 커도 서로를 선택했다.',
      ]);
      await era.printAndWait([
        '언제 끝날지 모르는 밤길에 모두가 걱정할지도 모른다.',
      ]);
      await era.printAndWait([
        '통금 전에 무사히 돌아가면 괜찮겠지? 그날의 귀갓길을 떠올리며 ',
        urara.teen_sex_title,
        '는 ',
        urara.sex,
        '의 낙서로 가득한 공책을 덮었다.',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        '앞으로의 우라라와 트레이너가 무슨 일이 있어도 밤길에서 길을 잃지 않기를.',
        true,
      );
      await inner_urara.say_as_unknown_and_wait([
        '그날의 별빛을 떠올리며 작은 ',
        urara.uma_sex_title,
        '는 그렇게 빌었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-3': (() => {
    const title = '선택한 당신에게';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '자기 책상에서 서류를 처리하며, 당신은 오늘 우라라와 함께 있을 때 겪은 뜻밖의 일을 떠올린다.',
      );
      await inner_urara.say_as_unknown_and_wait(
        "뜻밖이라고만 할 수도 없다. 그전까지는 그토록 '준비하고 온' 우라라를 본 적이 없었으니까.",
      );
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '! 사랑이라는 면에서 ',
        callname,
        '은(는) 우라라를 어떻게 생각해?',
      ]);
      await era.printAndWait([
        '그 질문을 들은 순간 ',
        you.get_colored_name(),
        '은(는) 환청이거나, 아니면 ',
        urara.get_colored_name(),
        '가 누군가에게 이상한 장난을 배운 거라고 생각했다.',
      ]);
      await era.printAndWait([
        '하지만 책상 앞에 앉은 ',
        you.get_colored_name(),
        '이(가) 뒤돌아보자, 작은 ',
        urara.uma_sex_title,
        '는 바로 뒤에 서서 중상 경주에 도전할 때와 같은 눈빛으로 다가온다.',
      ]);
      await era.printAndWait([
        '평소의 거리와는 상관없이, 조금도 주저하지 않고 ',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '하고 같은 의자에 끼어 앉았다.',
      ]);
      await era.printAndWait([
        '1착을 차지하듯 ',
        urara.get_colored_name(),
        '는 혼자서 ',
        you.get_colored_name(),
        '의 허벅지를 차지하고 앉아, 담당 트레이너의 앞에 온몸을 기댄다.',
      ]);
      await urara.say_and_wait([
        '그러니까 ',
        callname,
        '! 우라라를 어떻게 생각해? 우라라는 지금 알고 싶어!',
      ]);
      await era.printAndWait([
        '벚꽃빛 눈동자가 ',
        you.get_colored_name(),
        '하고 바로 눈앞에서 마주한다. 작은 ',
        urara.uma_sex_title,
        '는 진지한 미소를 지으며 다시 한번 ',
        you.get_colored_name(),
        '에게 묻는다.',
      ]);
      await era.printAndWait([
        '물러설 길을 ',
        urara.get_colored_name(),
        '에게 막힌 ',
        you.get_colored_name(),
        '은(는) 놀라지 않았다. 오히려 ',
        you.get_colored_name(),
        '은(는) 언젠가 이날이 오리라는 걸 처음부터 알고 있었을지도 모른다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '의 트레이너다.',
        urara.get_colored_name(),
        '도 알아볼 수 있는 마음을, 인정할 수는 없어도 ',
        you.get_colored_name(),
        '은(는) 그 존재를 알고 있다.',
      ]);
      await era.printAndWait(
        "지금 두 사람의 가까운 거리도 주변 사람들까지 포함해 '말하지 않아도 아는 일'일 뿐이다.",
      );
      await era.printAndWait(
        '기억은 여기서 잠깐 머뭇거린다. 기대 때문이든 의심 때문이든, 담당의 마음에서 도망쳐서는 안 된다.',
      );
      await era.printAndWait([
        '게다가 먼저 말을 꺼낸 ',
        urara.get_colored_name(),
        '에게는 망설임이 조금도 없다.',
      ]);
      era.println();
      inner_urara.say_as_unknown([
        '조용히 기다리는 ',
        urara.get_colored_name(),
        ' 앞에서, 트레이너 ',
        you.adult_sex_title,
        ', 즉 당신이 그때 선택한 것은──',
      ]);
      era.printButton(` ${urara.name}를 끌어안는다`, 1);
      era.printButton('「지금은 아직……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '잠깐 망설인 뒤 ',
          you.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '를 품에 안았다.',
        ]);
        await urara.say_and_wait(
          '에헤헤~ 트레이너를 곤란하게 했네. 그래도 트레이너가 우라라를 선택해 줬어. 정말 기뻐……',
        );
        await era.printAndWait([
          '잔뜩 긴장했던 몸이 ',
          you.get_colored_name(),
          '의 품 안에서 풀어진다.',
          urara.get_colored_name(),
          '도 ',
          you.get_colored_name(),
          '의 선택에 안도한 모양이다.',
        ]);
        await era.printAndWait([
          '평소의 ',
          urara.get_colored_name(),
          '하고는 조금 다르다. 하지만 ',
          urara.sex,
          '의 트레이너인 ',
          you.get_colored_name(),
          '은(는) 그 이유를 안다.',
        ]);
        await era.printAndWait([
          "작은 우마무스메는 아직 잘 모르더라도 자신이 어떤 '",
          urara.uma_sex_title,
          "'인지는 알고 있다.",
          urara.sex,
          '는 늘 안심하지 못한다. 다만 좀처럼 겉으로 드러내지 않을 뿐이다.',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          '」을(를) 품은 이유는 일단 대답할 수 있다. 하지만 정당하지 못한 욕망이 섞여 있기에, 입 밖으로 꺼내기는 어렵다.',
        ]);
        await era.printAndWait(
          '예를 들어 처음 만났을 때, 나란히 누운 소녀의 몸에서 안도감과 온기를 느꼈던 일. ',
        );
        await era.printAndWait(
          '잊어가던 전진의 초심을, 그 학생 덕분에 다시 떠올리면서도, 그 학생의 몸에서 갈망해 마지않던 도착적인 온기까지 원하게 된 것.',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '와 계약한 트레이너의 가슴 속에는, ',
          urara.get_colored_name(),
          '가 다시 지펴준 불꽃 외에도, 불순한 마음만이 남아 있는지도 모른다.',
        ]);
        await era.printAndWait(
          '그래도 상관없다. 어떤 복잡한 마음을 품고 있든 ',
          urara.get_colored_name(),
          '과(와) 함께 보낸 나날은 거짓이 아니다.',
        );
        era.println();
        if (high_relation) {
          await urara.say_and_wait(
            '트레이너, 우라라 때문에 스스로를 깎아내리지 마. 이것도 우라라가 선택한 일이니까.',
          );
          await era.printAndWait([
            '기억 속의 ',
            urara.get_colored_name(),
            '는 마음을 편하게 해 주는 작은 손을 뻗어 ',
            you.get_colored_name(),
            '의 뺨에 어린 망설임을 쓰다듬는다.',
          ]);
          await era.printAndWait([
            '조금은 알고 있다는 얼굴로 ',
            urara.get_colored_name(),
            '는 평소의 미소를 지어 ',
            you.get_colored_name(),
            '의 포옹에 답했다.',
          ]);
          await urara.say_and_wait(
            '마음이 통하는 건 정말 좋은 일이라고 엄마도 그랬어! 게다가 우라라는 언제까지나 어린애가 아니야!',
          );
          await era.printAndWait(
            '그렇다. 더는 망설일 필요가 없다. 사랑하는 상대는 서로의 곁에 있다.',
          );
        } else {
          await urara.say_and_wait(
            '걱정하고 있어? 그래도 무슨 일이 생기든 우라라는 이미 트레이너를 좋아해……',
          );
          await era.printAndWait([
            '기억 속의 ',
            urara.get_colored_name(),
            '는 조금 전까지만 해도 복잡한 표정이었지만, 지금은 마음을 정한 듯 ',
            you.get_colored_name(),
            '의 뺨을 두 손으로 감싼다.',
          ]);
          await era.printAndWait([
            '절대 후회하지 않겠다는 눈빛으로 소녀는 용감하게 ',
            you.get_colored_name(),
            '의, 어쩌면 불순한 마음이 섞였을지도 모를 사랑에 답했다.',
          ]);
          await urara.say_and_wait(
            '이제 참지 않아도 돼, 트레이너. 트레이너가 선택한 우라라는 여기 있으니까. 트레이너 곁에……!',
          );
          await era.printAndWait('그렇다. 이제 더는 탓할 일도 없다……');
        }
        era.println();
        if (has_lover) {
          await urara.say_and_wait(
            '그래도 이 일로 다들 우라라를 비겁하다고 해도, 이제 돌아갈 수 없어……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '의 품에 부드럽게 웅크린 ',
            urara.get_colored_name(),
            '는 갑자기 ',
            you.get_colored_name(),
            ' 앞으로 다가가 작은 목소리로 말했다.',
          ]);

          era.printButton('「——」', 1);
          await era.input();

          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 불시에 허를 찔려 흔들리자 ',
            urara.get_colored_name(),
            '는 다시 고개를 저으며 다정하게 연인을 쓰다듬었다.',
          ]);
          await urara.say_and_wait(
            '괜찮아! 우라라는 트레이너를 탓하려는 게 아니야. 그전부터 이미 각오는 되어 있었으니까.',
          );
          await era.printAndWait('뒤이어 다시 천사 같은 미소가 찾아온다.');
          era.println();
        }
        await urara.say_and_wait('앞으로도 계속 서로 좋아하자, 트레이너!');
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '품 안의 우라라가 전하던 작지만 확실한 온기와 부드러움을 떠올리며, 아름다운 기억을 잠시 덮는다.',
        );
        await inner_urara.say_as_unknown_and_wait(
          '행복한 결말인가요? 아니요, 비꼬는 게 아니에요. 저도 믿고 싶어요. 당신이 행복하다는 걸.',
        );
      } else {
        await urara.say_and_wait(
          '역시 우라라가 너무 갑자기 물었네! 트레이너를 곤란하게 하면 안 되지!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 에둘러 말할 표현을 찾는 사이 ',
          urara.get_colored_name(),
          '가 먼저 입을 열었다.',
        ]);
        await urara.say_and_wait(
          '트레이너는 어른이잖아. 어른은 더 많이 생각해야겠지! 그럼 우라라도 더는 안 물을게!',
        );
        await urara.say_and_wait(
          '그러니까 그때 트레이너가 마음을 정하면 꼭 우라라한테 말해 줘!',
        );
        era.println();
        if (high_relation) {
          await era.printAndWait([
            '낙담한 기색도 없이 평소처럼 웃으며 작은 ',
            urara.uma_sex_title,
            '는 트레이너의 뺨을 살짝 꼬집었을 뿐이다.',
          ]);
          await urara.say_and_wait(
            '그래도 우라라는 포기할 생각 없어! 계속 기다릴 거야! 트레이너도 이미 눈치챘잖아!',
          );
          await urara.say_and_wait(
            '트레이너가 우라라를 받아들여도 괜찮다고 생각할 때까지 우라라는 기다릴게!',
          );
        } else {
          await era.printAndWait([
            '말을 마치자마자 조금 풀이 죽은 ',
            urara.get_colored_name(),
            '는 다시 축 늘어져 ',
            you.get_colored_name(),
            '의 품으로 파고든다.',
          ]);
          await urara.say_and_wait(
            '트레이너, 우라라는 얼마나 기다려야 해? 그래도 트레이너는 알려 주지 않겠지……',
          );
          await urara.say_and_wait(
            '우라라가 좀 더 막무가내였다면 트레이너도 지금 바로 좋다고 해 줬을까? 농담이야……',
          );
        }
        era.println();
        await era.printAndWait(
          '그날이 올지는 아직 모른다. 그래도 괜찮다. 지금은 이대로면 된다. 아직은 그때가 아니다──',
        );
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '그럼 그전까지는 어떻게 하지? 닥치면 길이 열린다지만, 두 사람의 관계는 어떻게 해야 할까?',
        );
        await inner_urara.say_as_unknown_and_wait(
          '의자 위에서 느긋하게 흔들리며, 당신과 우라라는 아무것도 하지 않는 듯하면서도 마음이 무거운 시간을 보냈다.',
        );
        await inner_urara.say_as_unknown_and_wait('……');
        await inner_urara.say_as_unknown_and_wait(
          '이제는 당신이 무슨 생각인지 모르겠어요. 여기까지 와서 받아들이지 않을 이유가 있나요?',
        );
        await inner_urara.say_as_unknown_and_wait(
          '……하지 않아도 될 말을 해서 미안해요. 어쨌든 수고했어요.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  75: (() => {
    const title = '분명해진 마음';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {PrintedSpan|false} u_call_r ハルウララのライスシャワーへの呼び方。恋慕が足りないときは false
     * @param {PrintedSpan|false} u_call_h ハルウララのキングヘイローへの呼び方。恋慕が足りないときは false
     */
    const f = async (
      urara,
      inner_urara,
      you,
      high_relation,
      u_call_r,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '숨기더라도 마음은 언젠가 꽃을 피우고 열매를 맺죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그럼 지금도 나아가고 있는 당신에게 문제를 낼게요──',
      );
      await inner_urara.say_as_unknown_and_wait(
        '까마귀는 왜 책상과 닮았을까요?',
      );
      era.drawLine();
      await urara.print_and_wait([
        '구석의 긴 의자에서 잠든 ',
        you.get_colored_name(),
        '을(를) 보고, 달려오던 우라라는 살며시 발소리를 죽였다.',
      ]);
      await urara.say_and_wait(
        '응? 트레이너, 어젯밤에도 잘 못 쉬었어? 그럼 조용히……',
      );
      await urara.print_and_wait([
        '목소리를 낮추고 ',
        you.get_colored_name(),
        '의 곁으로 다가온 우라라도 긴 의자에 앉는다. 조용히 기다리며 ',
        you.get_colored_name(),
        '의 평온한 옆얼굴을 바라본다.',
      ]);
      await urara.print_and_wait([
        '몸에 온기가 돌고 뜨거운 마음이 다시 차오른다. 만난 뒤로 차곡차곡 쌓인 경험 덕분에, 지금 우라라는 이 두근거림의 이유를 잘 알고 있다.',
      ]);
      await urara.say_and_wait(
        '생각해 보니까 지금 트레이너 모습은 처음 만났을 때랑 비슷해. 역시 우리, 인연이 있나 봐.',
      );
      await urara.print_and_wait([
        '잠든 ',
        you.get_colored_name(),
        '에게 천천히 다가가 귀를 ',
        you.get_colored_name(),
        '에게 기댄 채, 우라라는 ',
        you.get_colored_name(),
        '의 숨소리와 심장 박동을 듣는다.',
      ]);
      await urara.print_and_wait([
        you.get_colored_name(),
        '의 담당은 다시 떠올린다.',
        you.get_colored_name(),
        '하고 처음 만난 날, ',
        you.get_colored_name(),
        '이(가) 너무 무리해서 쓰러졌던 날을.',
      ]);
      await urara.print_and_wait([
        '다만 그때와 같은 상황을 다시 맞은 지금, 몸도 마음도 처음의 우라라와는 완전히 달라져 있다.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '전에는 몰랐지만 이제는 알아. 우라라는 역시 트레이너가 좋아.',
        );
        await urara.print_and_wait([
          '마음 놓고 ',
          you.get_colored_name(),
          '의 곁에 다가간 우라라는 집으로 돌아갈 길을 찾은 아이처럼 잠든 ',
          you.get_colored_name(),
          '을(를) 살며시 끌어안았다.',
        ]);
        await urara.print_and_wait([
          '작은 ',
          urara.uma_sex_title,
          '의 인간보다 조금 높은 체온이 사랑이 담긴 포옹과 함께 익숙한 온기를 ',
          you.get_colored_name(),
          '의 몸에 전한다.',
        ]);
        await urara.print_and_wait([
          '트레이너가 우라라의 달리기를 바꿔 줬으니까. 트레이너가 우라라한테 1착의 기쁨을 알려 줬으니까.',
        ]);
        await urara.print_and_wait([
          '트레이너가 우라라의 생활을 바꿔 줬으니까. 트레이너가 우라라한테 더 많은 사랑을 보여 줬으니까. 그러니까……',
        ]);
        await urara.say_and_wait('앞으로도 계속, 쭉 좋아하게 해 줘──');
      } else {
        await urara.say_and_wait('트레이너, 우라라는 계속 믿어도 되는 거지?');
        await urara.print_and_wait([
          '촉촉해진 눈으로 아직 잠든 ',
          you.get_colored_name(),
          '을(를) 바라보며, 우라라는 대답을 바라지 않는 질문을 중얼거린다.',
        ]);
        await urara.print_and_wait([
          '작은 ',
          urara.uma_sex_title,
          '는 조금 용기를 내어 ',
          urara.sex,
          '를 불안하게 하는 이 사람에게 더 가까이 다가가려 한다.',
        ]);
        await urara.print_and_wait([
          '처음 달렸을 때와 마찬가지다. 소중히 여겨 주지 않더라도 ',
          urara.sex,
          '는 이 불안한 마음을 한결같이 품고 싶다.',
        ]);
        await urara.print_and_wait([
          urara.sex,
          '가 아직 꽃봉오리 같은 나이여도, 이 마음이 버림받더라도, 마지막에는 ',
          you.get_colored_name(),
          '이(가)……',
        ]);
        await urara.say_and_wait('지금은 일어나지 마──');
      }
      era.println();
      await urara.say_and_wait('쪽……');
      await urara.print_and_wait([
        '사랑에 빠진 천진한 ',
        urara.teen_sex_title,
        '의 수줍음과 용기를 담아, 담당의 가벼운 입맞춤이 막 잠에서 깨려던 ',
        you.get_colored_name(),
        '의 이마에 내려앉는다.',
      ]);
      await urara.print_and_wait([
        '격렬한 표현은 아니다. 자라면서 배운 대로 우라라는 ',
        urara.sex,
        "가 이해한 '진심'을 ",
        you.get_colored_name(),
        '에게 바쳤다.',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        '익숙한 향기에 천천히 눈을 뜬 ',
        you.get_colored_name(),
        '도 담당의 부드럽지만 깊은 사랑을 분명히 느끼고 있었다.',
      ]);

      era.printButton('「……!」', 1);
      await era.input();

      await urara.say_and_wait(
        '에헤헤~ 역시 트레이너한테 들켜 버렸네. 미안해, 트레이너!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '에게 들킨 우라라는 장난을 들킨 아이처럼 수줍게 웃는다. 지금 ',
        urara.teen_sex_title,
        '의 뺨에 수줍게 홍조가 어린 모습은 평소보다 더욱 사랑스럽다.',
      ]);
      await urara.say_and_wait(
        '말로 잘 표현하진 못하겠지만, 지금 우라라가 트레이너를 좋아하는 마음에는 이게 제일 잘 어울려!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 허벅지에 마주 보고 앉은, 아직 서투른 작은 연인은 진지하게 마음을 맹세한다.',
      ]);
      await urara.say_and_wait(
        '트레이너한테 말로 전하고 싶은 것…… 지금은 잘 표현하지 못하겠지만, 언젠가는 꼭 말할 수 있을 거야!',
      );
      await urara.say_and_wait(
        '그러니까 트레이너, 조금만 더 기다려. 우라라를 기다려 줘!',
      );
      await era.printAndWait([
        '느끼는 그대로를 ',
        you.get_colored_name(),
        '에게 열심히 이야기하며, 아직 다 자라지 않은 소녀는 말로 다 표현하지 못하는 마음을 쏟아낸다.',
      ]);
      await era.printAndWait([
        '모든 걸 잘 말하지 못하더라도 우라라가 전하려는 마음은 지금 ',
        you.get_colored_name(),
        '의 가슴속에도 이미 분명히 전해져 있다.',
      ]);

      era.printButton(
        '「알고 있어. 그러니까 나도 우라라를 기대하고 있을게.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '먼저 ',
        urara.teen_sex_title,
        '의 손을 잡고 촉촉한 벚꽃빛 눈동자를 바라보며 ',
        you.get_colored_name(),
        "도 망설임 없이 우라라에게 '어른의 약속'으로 답했다.",
      ]);
      await era.printAndWait([
        '오늘도, 앞으로도 함께할 두 사람의 이야기는 어쩌면 이제 시작일 것이다.',
      ]);
      if (u_call_r || u_call_h) {
        era.println();
        await era.printAndWait([
          '다만 트레이너 ',
          you.adult_sex_title,
          '이(가) 시선을 돌린 순간, 작은 ',
          urara.uma_sex_title,
          '의 맑은 미소 속으로 놓치기 쉬운 어두운 빛이 한 줄기 스쳤다.',
        ]);
        await era.printAndWait([
          '사랑하는 사람의 옆얼굴을 바라보는 ',
          urara.teen_sex_title,
          '의 머릿속에, 하필 이런 순간에 떠올리고 싶지 않은 광경이 스친다.',
        ]);
        await era.printAndWait([
          '작은 ',
          urara.sex,
          '가 가장 떠올리고 싶지 않은 기억. 떠오를 때마다 가슴이 조이고 발이 떨어지지 않아, 다른 사람의 뒷모습을 지켜볼 수밖에 없었던 기억.',
        ]);
        if (u_call_r) {
          await urara.say_and_wait(
            [
              u_call_r,
              '도 이렇게 트레이너를 좋아하겠지. 그럼 ',
              u_call_r,
              '도 분명 트레이너한테 이렇게 하겠지. 트레이너한테…… 좋아한다고 전할까?',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '트레이너와 걷는 『',
              u_call_r,
              '』, 트레이너와 다정하게 지내는 『',
              {
                color: u_call_r.color,
                content: '라이스 씨',
                fontWeight: 'bold',
              },
              '』, 트레이너와 그림자를 포개는 『',
              {
                color: u_call_r.color,
                content: '검은──',
                fontWeight: 'bold',
              },
              '』……!',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '그래도 ',
              u_call_r,
              '은(는) 그런 아이가 아니야.',
              u_call_r,
              "은(는) 모두의 '영웅'이야!",
              urara.sex,
              '는 이미 트레이너와 약속했을 거야……',
            ],
            true,
          );
        }
        if (u_call_h) {
          await urara.say_and_wait(
            [
              u_call_h,
              '도 역시 트레이너를 좋아해. 아직 철없는 우라라보다 트레이너 곁에 더 잘 어울릴지도 몰라. 그래도……',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '본 적 없는 표정의 『',
              u_call_h,
              '』, 트레이너와 껴안는 『',
              {
                color: u_call_h.color,
                content: '킹 씨',
                fontWeight: 'bold',
              },
              '』, 트레이너에게 다가가는 『',
              {
                color: u_call_h.color,
                content: '삼류──',
                fontWeight: 'bold',
              },
              '』……!',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '아니야! 그런 게 아니야!',
              u_call_h,
              '은(는) 누구보다 훌륭하고 ',
              u_call_h,
              '이야말로 트레이너에게 어울릴 거야……',
            ],
            true,
          );
        }
        if (u_call_r && u_call_h) {
          era.println();
          await urara.say_and_wait(
            '그 둘도 역시 트레이너를 좋아해…… 그런데 괴로워…… 머리가 아플 만큼 괴로워…… 토할 것처럼 괴로워……',
            true,
          );
          await urara.say_and_wait(
            '그런데 우라라는 왜 괴로운 거야? 우라라는 기뻐야 하잖아?',
            true,
          );
          await urara.say_and_wait(
            '왜 우라라는 가장 친한 친구를 저주하고 싶은 걸까…… 질투한다고 해도 나중에 온 우라라한테는 자격도 없는데……?',
            true,
          );
        }
        era.println();
        await urara.say_and_wait(
          '뒤에서 끼어들고 싶어. 친구의 사랑을 망가뜨리고 싶어. 정말 나쁜 짓을 하는 못된 사람은……?',
          true,
        );
        await urara.say_and_wait(
          '뭔가 잊은 것 같아. 이럴 리 없는데. 그래도 트레이너는 우라라를 기다린다고 했어! 하지만 트레이너는……!',
          true,
        );

        era.printButton('「우라라? 왜 그래? 어디 안 좋아?」', 1);
        await era.input();

        await era.printAndWait([
          you.get_colored_name(),
          '의 부름을 듣자, 우라라의 얼굴에 희미하게 드리웠던 어두운 기색이 흔적 없이 사라졌다.',
        ]);
        await era.printAndWait([
          '아름답지 않고, 언젠가 뿌리를 내려 ',
          urara.teen_sex_title,
          '의 마음을 갉아먹을 검은 씨앗은 그래도 우라라의 안에 심어지고 말았다.',
        ]);
        await urara.say_and_wait('미안해…… 그래도 우라라는 이제……');
        await era.printAndWait([
          '우라라는 앞으로 나와 ',
          you.get_colored_name(),
          '이(가) 내민 손을 잡는다. 밝은 미소 아래 열등감으로 가득한 사과는 두 사람 뒤로 부는 바람 속에 사라졌다……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '89-1': (() => {
    const title = '이제 돌아보지 않겠다는 결심';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} u_call_h ハルウララのキングヘイローへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await urara.print_and_wait(
        '또 그렇게 되겠지. 우라라가 눈을 감으면, 무슨 일이 일어나는 거잖아?',
      );
      await urara.print_and_wait(
        '하지만 조용한 밤에는 아무것도 일어나지 않아. 침대에서 눈을 뜨면, 평소의 기숙사 방이야.',
      );
      await urara.print_and_wait([
        '의외의 즐거움도 없고, 망상 속에서 우라라에게 이렇게저렇게 하는 ',
        callname,
        '도 없어.',
      ]);
      await urara.print_and_wait([
        '왠지…… 기쁘지 않아? 하지만 꿈속에서 「일류」라고 말하는 ',
        u_call_h,
        ' 이외에는 흥미를 잃을 이유도 없는데.',
      ]);
      await urara.print_and_wait(
        '잘 시간은 진작 지났어. 그런데도 우라라는 또, 이상한 걸 생각하며 잠들지 못해.',
      );
      await urara.print_and_wait([
        '이대로라면 금방, ',
        callname,
        '과(와) 기분 좋은 일만 생각하는 나쁜 아이가 되어버려.',
      ]);
      await urara.print_and_wait([
        '그전에, 머릿속이 ',
        callname,
        '(으)로 가득 찬 바보가 되는 게 먼저일지도 몰라.',
      ]);
      era.println();
      if (era.get('exp:52:性爱次数') >= 10) {
        await urara.say_and_wait([
          '이건, 전부 ',
          callname,
          ' 탓이야! 이렇게 된 건!',
        ]);
        await urara.print_and_wait(
          '우라라, 원래부터 야한 나쁜 아이였던 걸까? 우라라 자신도 실망스러워.',
        );
        await urara.print_and_wait([
          '하지만 부정해 봐도, 우라라의 몸은 이제 ',
          callname,
          '이(가) 없이는 견딜 수 없어……',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          '과(와) 우라라랑 좀 더, 훨씬 더 사이좋게 지내줬다면, 우라라, 나쁜 아이가 되지 않았을지도 몰라?',
        ]);
        await urara.print_and_wait([
          '그런데 우라라의 몸은 벌써 ',
          callname,
          '을(를) 받아들일 준비가 되어 있는데, ',
          callname,
          '은(는) 아직 차갑기만 해.',
        ]);
        await urara.print_and_wait([
          '역시 ',
          callname,
          '은(는), 좀 더 어른스러운 쪽을 좋아하는 거야? 조금 슬퍼……',
        ]);
      }
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '하지만 그래도, ',
          callname,
          '이(가) 싫어지고 싶지는 않아. 오히려 우라라는 ',
          callname,
          '을(를) 사랑하는걸.',
        ]);
        await urara.print_and_wait([
          '「',
          urara.get_colored_name(),
          '」라는 ',
          urara.uma_sex_title,
          '은 ',
          callname,
          '에게 푹 빠져서, 「연인」만으로는 더 이상 부족해.',
        ]);
        await urara.print_and_wait(
          '하지만 더 나아가면 아주 중요한 사이가 되잖아? 「연인」보다 더 깊은 사이는 부부지?',
        );
        await urara.print_and_wait(
          '엄마는 먼저 말해 주지 않지만, 우라라도 알아. 인생에서 가장 중요한 일이야.',
        );
        await urara.print_and_wait([
          callname,
          '과(와) 살을 맞대고 숨결을 나눌 만큼 가까운 사이라 해도, 그런 제멋대로인 부탁을 함부로 꺼낼 수는 없겠지.',
        ]);
      } else {
        await urara.say_and_wait([
          '우라라는 예전에 자기 마음을 자주 의심했어. 하지만 매번, 역시 ',
          callname,
          '을(를) 사랑한다는 걸 깨달아.',
        ]);
        await urara.print_and_wait([
          '인정하고 싶지 않아도, 「',
          urara.get_colored_name(),
          '」는 지금 이 가만있지 못하는 마음을 소중히 할 수밖에 없어.',
        ]);
        await urara.print_and_wait([
          '우라라가 한 단계 더 올라가서, ',
          callname,
          '을(를) 곁에 붙잡아 둘 수 있다면? 하지만 그다음은……',
        ]);
        await urara.print_and_wait(
          '가벼운 마음으로 누군가와 맺어지면 행복해질 수 없다고, 엄마는 우라라에게 말했어.',
        );
        await urara.print_and_wait(
          '하지만 지금은 불행해질 걸 알면서도, 이렇게 기워 붙인 하루하루를 버릴 수가 없어.',
        );
      }
      era.println();
      urara.say(['그럼 지금 ', callname, '와의 관계는……']);
      era.printButton(
        '「우라라는 이제 양보하지 않을 거야!」(관계를 발전시킨다)',
        1,
      );
      era.printButton(
        '「역시 아직은 너무 이르겠지……」(아직 발전시키지 않는다)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait(
          '결심했어. 우라라는 이제 양보하지 않을 거야.',
        );
        await urara.print_and_wait([
          '우라라는 이미 ',
          callname,
          '의 마음속에 자기만의 자리가 있어. 그래도 그걸로는 전혀 부족해.',
        ]);
        await urara.print_and_wait(
          '우라라가 선택하지 않더라도 지금 자리에 계속 멈춰 있지는 않을 테니까. 우라라가 언제까지나 어린애가 아닌 것처럼.',
        );
        await urara.print_and_wait([
          callname,
          '의 마음을 계속 고민하기보다는 우라라가 먼저 무언가 할 거야. 거절당해도 괜찮아.',
        ]);
        await urara.print_and_wait(
          '앞으로 좋든 나쁘든 우라라는 어른처럼 용기를 낼 거야. 다들 할 수 있다면 우라라도 괜찮아!',
        );
        await urara.print_and_wait([
          "'연인'으로서의 약속만이 아니라, 우라라는 ",
          callname,
          '하고, ',
          you.actual_name,
          '하고 더 많은 약속을 하고 싶어──',
        ]);
        if (has_lover) {
          era.println();
          await urara.print_and_wait([
            '우선은 ',
            callname,
            '이(가) 좋다고 하든 싫다고 하든 ',
            callname,
            '이(가) 시간을 조금 더 내 줬으면 좋겠어.',
          ]);
          await urara.print_and_wait([
            '우라라는 ',
            callname,
            '을(를) 잘 나무라지 못하지만, 이것만큼은 조금 화난 척할 수 있어!',
          ]);
          await urara.print_and_wait([
            callname,
            '이(가) 다들 좋아하는 이유는 다들 더 빨리 달려서겠지? 앞으로 트레이닝을 더 열심히 해야겠어……',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait([
            '사랑하는 마음으로 투지를 북돋운 ',
            urara.teen_sex_title,
            '는 속으로 앞으로의 계획을 세우고, 생각을 품은 채 꿈속으로 들어갔다.',
          ]);
          await inner_urara.say_as_unknown_and_wait(
            '오늘 밤 우라라는 마침내 용기를 내어, 생각이 많아 잠 못 이루던 고민을 넘어섰다.',
          );
          await inner_urara.say_as_unknown_and_wait([
            '작은 ',
            urara.uma_sex_title,
            '가 언제 행동에 나서든, 조금 어리더라도 그 마음은 충분히 합격점일 것이다.',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '맞아. 지금은 아직 너무 일러.',
          callname,
          '도 좋다고 하지 않을 거야.',
        ]);
        await urara.print_and_wait([
          '그래도 우라라도 몰랐어. 언젠가 ',
          callname,
          '한테 거절당하는 게 이렇게 무서울 줄은.',
        ]);
        await urara.print_and_wait(
          '거절당하는 걸 생각 안 한 게 아니야. 거절당한 다음이 무서운 거야.',
        );
        await urara.print_and_wait([
          '이렇게 중요한 일로 거절당하면 우라라는 ',
          callname,
          '하고 지금 같은 사이를 이어 갈 수 있을까?',
        ]);
        await urara.print_and_wait([
          '이럴 땐 어떻게 하지?',
          callname,
          '한테 부탁해서, 우라라를 애완동물로 삼아도 좋으니까 버리지 말아 달라고 할까?',
        ]);
        await urara.print_and_wait(
          '정말로 그렇게 된다고 생각하니 몸의 떨림이 멈추질 않아. 우라라, 정말로 지독하고 나쁜 아이가 되어버렸어.',
        );
        await urara.say_and_wait([
          '일단 몸부터 진정시켜야지. 내일도 일찍 일어나야 하는데…… 하아……',
          callname,
          '……',
        ]);
        await urara.print_and_wait([
          '지나친 불안감과 숨겨왔던 열등감이 한데 뒤섞여 타오르고, ',
          urara.teen_sex_title,
          '는 거칠게, 조급해진 몸을 향해 손을 뻗었다.',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait([
          '적어도 작은 ',
          urara.uma_sex_title,
          '에게는 ',
          callname,
          '하고 더 나아가기 위해 오늘 밤의 마음만으로는 아직 부족하다.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '하아.',
          callname,
          '이(가) 우라라를 그렇게 대한 것과는 별개로, 용기를 냈으면 좋았을 텐데요……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-2': (() => {
    const title = '더는 망설이지 않는 당신';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await urara.say_and_wait([callname, ', 여기에는 이제 아무것도 없어.']);
      await era.printAndWait([
        '나중에 다시 그 결혼식이 열렸던 곳을 지났을 때, ',
        urara.get_colored_name(),
        '의 말에 따라 ',
        you.get_colored_name(),
        '은(는) 다시 한번 울타리 너머 공원 안을 바라보았다.',
      ]);
      await era.printAndWait([
        '이번에는 잔디밭에 사람들이 다녀간 흔적조차 말끔히 사라져 있다. 남은 건 ',
        urara.get_colored_name(),
        '의 작은 한숨이 ',
        you.get_colored_name(),
        '의 귓가에 맴도는 것뿐이다.',
      ]);
      await era.printAndWait([
        '담당이 너무 작아서 ',
        urara.sex,
        '의 눈은 보이지 않더라도, 머리 위의 힘없는 귀를 보면 ',
        urara.sex,
        '의 마음은 읽을 수 있다.',
      ]);

      era.printButton('「우라라, 안쪽을 같이 둘러보자.」', 1);
      await era.input();

      await urara.say_and_wait('응? 응……');
      await era.printAndWait([
        '잠깐 놀라는가 싶더니 조금 멍한 목소리로 대답한다.',
        urara.get_colored_name(),
        '는 얌전히 ',
        you.get_colored_name(),
        '의 걸음을 따라 낮은 울타리를 돌아갔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '하고 나란히 그 신랑 신부를 배웅했던 잔디밭에 서도, 작은 ',
        urara.uma_sex_title,
        '의 꼬리는 여전히 기운 없이 흔들린다.',
      ]);
      await era.printAndWait([
        '지난번에 거절당한 슬픔에 아직 잠겨 있는지 ',
        urara.get_colored_name(),
        '는 평소의 기운을 잃은 것 같다.',
      ]);
      await era.printAndWait([
        '당연하다. 아무리 아름다워도 여기는 ',
        urara.teen_sex_title,
        '가 희망을 품었다가 사랑하는 사람에게 거절당해 상처받은 곳이다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        "는 그 '기다려 달라'는 약속조차 불안하게 의심하고 있을 것이다. 그때의 ",
        you.get_colored_name(),
        '은(는) 정말 못난 어른이었다.',
      ]);
      await era.printAndWait(
        '적어도 지금은 어리석었던 어른이 잘못을 만회하고, 담당의 마음속 빈자리를 다시 채울 차례다.',
      );
      await era.printAndWait(
        '하고 싶은 말은 많다. 그래도 지금 할 수 있는 말은 역시──',
      );

      era.printButton('먼저 우라라의 손을 잡는다.', 1);
      await era.input();

      await urara.say_and_wait('……아!');
      await era.printAndWait([
        '평소 두 사람이 잘 통했던 덕분일까, 아니면 작은 ',
        urara.uma_sex_title,
        '가 오랫동안 기다려 온 순간임을 직감한 덕분일까.',
        urara.get_colored_name(),
        '는 눈을 크게 뜬다. 벚꽃빛 눈동자는 놀라움에서 기쁨으로 바뀐다.',
      ]);
      await era.printAndWait([
        '닿는 순간 ',
        urara.get_colored_name(),
        '는 알아차렸다. 이건 단순히 연인끼리 하는 몸짓이 아니다.',
        you.get_colored_name(),
        '이(가) 약속을 지킬 때다.',
      ]);
      era.println();

      if (high_relation) {
        await urara.say_and_wait(
          '상상했던 거랑은 다르지만 드디어 기다리던 때가 왔어. 그러니까 우라라는 정말 만족해!',
        );
        await era.printAndWait([
          '순식간에 ',
          you.get_colored_name(),
          '하고의 거리가 사라진다.',
          urara.get_colored_name(),
          '의 천진하고도 애정 어린 얼굴이 여느 때보다 가까이 다가온다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 다시 평소처럼 곁에 붙어 있는 행복을 되찾았다. 지금은 같은 잔디 위에서 반지를 끼는 신부 같다.',
        ]);
        await era.printAndWait([
          '작은 ',
          urara.sex,
          '에게 진짜 베일도 모두의 축복도 없더라도, 지금 ',
          urara.sex,
          '는 연인의 눈에 주인공으로 비칠 수 있다.',
        ]);
        await urara.say_and_wait([
          callname,
          '이(가) 조금만 더 빨랐으면 좋았을 텐데. 그러니까 우라라한테 보상으로 앞으로도 쭉 함께 있어 줘!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 진실한 미소 앞에서 ',
          you.get_colored_name(),
          '도 가장 분명한 대답을 돌려준다──',
        ]);
      } else {
        await urara.say_and_wait([
          '일부러 여기까지 다시 오다니 ',
          callname,
          '은(는) 참 서툴러. 우라라가 할 말은 아니지만……',
        ]);
        await era.printAndWait([
          '기쁨을 필사적으로 숨기며 ',
          urara.get_colored_name(),
          '는 눈빛에 드러난 설렘을 감추려 한다. 하지만 들썩이는 귀와 꼬리까지 가만히 둘 수는 없다.',
        ]);
        await era.printAndWait([
          '싱그러운 잔디 위에서, 약속이 이루어진 ',
          urara.get_colored_name(),
          '의 미소에는 그늘이 사라졌다.',
        ]);
        await era.printAndWait([
          '두 사람의 애정과 서로를 대하는 방식 사이의 균형은 아직 미묘하지만, 지금 ',
          urara.get_colored_name(),
          '가 배우자가 되고 싶어 하는 마음은 변하지 않았다.',
        ]);
        await urara.say_and_wait([
          '아무튼 이번에는 정말 결심한 거지! 이제 후회하면 안 돼, ',
          callname,
          '?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 반쯤 장난스러운 미소에 ',
          you.get_colored_name(),
          '도 분명한 대답을 돌려준다──',
        ]);
      }
      if (has_lover) {
        era.println();
        await urara.say_and_wait([
          '이러다가는 나중에 우라라가 ',
          callname,
          '이(가) 더 많은 아이들과 약속하는 것도 보게 될지도 모르겠네……',
        ]);
        await urara.say_and_wait([
          '괜찮아. 우라라는 ',
          callname,
          '을(를) 용서할 수 있어! 우라라도 ',
          callname,
          '의 신부니까!',
        ]);
        await era.printAndWait([
          '갑자기 잡고 있던 ',
          you.get_colored_name(),
          '의 손에 ',
          urara.uma_sex_title,
          '의 힘이 들어간다.',
          urara.get_colored_name(),
          '의 미소에 맹세로 얻은 권리를 암시하는 빛이 섞인다.',
        ]);
        await urara.say_and_wait(
          '그러니까 먼저든 나중이든, 트레이닝 때 말 안 듣는 아이한테는 제대로 주의를 줄 거야!',
        );
      }
      era.printButton('「미안해, 우라라를 기다리게 했네!」', 1);
      await era.input();

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '이제 당신은 돌아갈 수 없어요.',
      );
    };
    f.title = title;
    return f;
  })(),
  '89-3': (() => {
    const title = (urara) => ['약속을 나누었다', urara.sex];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '그날 결혼식이 열린 곳을 지나간 것은 순전한 우연이었다. 하지만 달려가는 길을 바꾸기에는 한 번의 우연이면 충분하다.',
      );
      era.drawLine();
      await era.printAndWait([
        '결혼식장과의 사이에는 울타리 하나뿐이었다. 기억 속의 ',
        you.get_colored_name(),
        '하고 ',
        urara.uma_sex_title,
        '는 울타리 밖에서 축복의 행렬을 지나가는 신랑 신부를 배웅하고 있었다.',
      ]);
      await era.printAndWait([
        '무언가를 암시하듯 신랑 신부 중 한쪽은 작은 ',
        urara.uma_sex_title,
        ', 다른 한쪽은 ',
        urara.sex,
        '보다 훨씬 큰 ',
        you.phy_sex_title,
        '이었다.',
      ]);
      await era.printAndWait([
        '기억 속의 ',
        urara.get_colored_name(),
        '는 말없이 있다. 맑은 벚꽃빛 눈동자에 한 줄기 동경이 스친다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '도 가정을 바라는 단계에 이르렀다. 그런 뒤틀린 생각은 제대로 된 어른이 품을 만한 것이 아니다.',
      ]);
      await era.printAndWait([
        '하지만 어쩔 수 없다. 작은 ',
        urara.uma_sex_title,
        '의 연인이 된 건 다름 아닌 ',
        urara.sex,
        '의 트레이너다.',
      ]);
      await era.printAndWait(
        '그러니 가슴에 손을 얹고 묻는다. 담당이 연인과 가정을 이루기를 바란다면 트레이너는 준비가 되어 있는가.',
      );
      era.println();

      if (high_relation) {
        await urara.say_and_wait([callname, ', 무슨 생각 해?']);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 어느새 이쪽을 향해 평소처럼 진심 어린 미소를 ',
          you.get_colored_name(),
          '에게 보낸다.',
        ]);
        await era.printAndWait([
          '지금의 ',
          you.get_colored_name(),
          ' 일행도 저 신랑 신부와 크게 다르지 않을지도 모른다. 연인의 아름다운 미소를 느끼며 ',
          you.get_colored_name(),
          '은(는) 그렇게 확신했다.',
        ]);
        await era.printAndWait([
          '그러니 지금 ',
          urara.get_colored_name(),
          '에게는 진지한 약속이 필요하다.',
          urara.sex,
          "가 '어른'으로 여겨지는지와는 상관없다.",
        ]);
      } else {
        await urara.say_and_wait([callname, ', 신경 쓰이는 거 있어?']);
        await era.printAndWait([
          '시선을 돌린 ',
          urara.get_colored_name(),
          '는 조용히 ',
          you.get_colored_name(),
          '을(를) 바라보며 조금 난처하면서도 기쁜 미소를 짓는다.',
        ]);
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '는 상황에 어울리지 않는 표정을 자주 짓는다. 이유를 모르겠다고 한다면 스스로도 믿지 못할 것이다.',
        ]);
        await era.printAndWait([
          '하지만 작은 ',
          urara.uma_sex_title,
          '의 마음이 동경인지 불안인지, 아니면 둘 다인지, 그것만큼은 지금 ',
          you.get_colored_name(),
          '도 확인할 수 없다.',
        ]);
      }
      era.println();

      await urara.say_and_wait([
        callname,
        ', 언젠가는 우라라도 길고 하얀 치마를 입을 수 있을까?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 앞선 질문에 답할 틈도 생각할 시간도 주지 않고, 벚꽃빛의 작은 연인이 다시 묻는다.',
      ]);
      await urara.say_and_wait([
        '우라라는 다른 부탁은 안 할게. 그래도 ',
        callname,
        ', 우라라 손은 지금 아직 비어 있어!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '을(를) 똑바로 바라보지는 않은 채 ',
        urara.get_colored_name(),
        '는 좁은 울타리 너머로 흘러가는 미래를 보듯 떠들썩한 결혼식을 바라보고 있다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 작은 손은 조용히 몸 옆에서 기다린다. 하얀 베일도 빛나는 반지도 없다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '는 그런 것들을 알 것이다. 그래도 작은 ',
        urara.uma_sex_title,
        '가 원하는 건 손바닥과 손바닥, 그리고 새끼손가락을 걸고 하는 약속뿐이다.',
      ]);
      await era.printAndWait([
        '앞으로 무슨 일이 닥쳐도 작은 ',
        urara.sex,
        '는 이미 ',
        you.get_colored_name(),
        '의 대답을 기다리기로 결심했다.',
      ]);
      inner_urara.say_as_unknown(
        `아직 트레이너 ${you.adult_sex_title}, 즉 당신을 기다리는 우라라 앞에서, 당신의 결정은……`,
      );
      era.printButton('우라라의 손을 잡는다.(관계를 발전시킨다)', 1);
      era.printButton(
        '지금은 아직 준비가 되지 않았다.(아직 발전시키지 않는다)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '하고의 관계가 어떻게 되어 있는지 ',
          you.get_colored_name(),
          '은(는) 진작부터 알고 있다.',
        ]);
        await era.printAndWait([
          '따져 볼 필요도 없이 ',
          you.get_colored_name(),
          '은(는) 연인의 작은 손을 잡는다.',
          urara.get_colored_name(),
          '의 팽팽하게 긴장한 귀도 마침내 숨을 내쉬듯 내려왔다.',
        ]);
        await era.printAndWait([
          '맞댄 손바닥에 다섯 손가락이 포개지고, 작은 ',
          urara.uma_sex_title,
          '의 가느다란 손가락이 조금 수줍게 ',
          you.get_colored_name(),
          '의 손바닥 안을 문지른다.',
        ]);
        await era.printAndWait([
          '대답을 받은 ',
          urara.get_colored_name(),
          '는 아직 말이 없다. 하지만 지금은 솔직한 붉은빛이 ',
          urara.sex,
          '의 뺨을 물들이고 있다.',
        ]);
        await era.printAndWait(
          '너무나 작은 연인의 손을 쓰다듬자, 가슴 밑바닥에 가라앉혀 둔 죄책감이 숨을 쉴 때마다 넘쳐흐를 것 같다.',
        );
        await era.printAndWait(
          '약속의 말 한마디도 없다. 정말 이걸로 괜찮을까.',
        );
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            '그런 거였구나. 어른이라 숨겨야 하지만 ',
            callname,
            '은(는) 속으로 아직 우라라한테 미안해하고 있어.',
          ]);
          await urara.say_and_wait([
            '걱정하지 않아도 돼! 우라라는 처음부터 ',
            callname,
            '하고의 차이는 신경 쓰지 않았어. 그래서 용기를 내서 먼저 말할 수 있었던 거야.',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '는 여전히 ',
            you.get_colored_name(),
            '에게 웃어 보인다. 조금은 알고 있다는 얼굴로 ',
            you.get_colored_name(),
            '의 가장 깊은 곳을 어루만지듯.',
          ]);
          await urara.say_and_wait([
            '이것만으로도 괜찮아! ',
            callname,
            '은(는) 계속 힘들었잖아. 우라라는 아무것도 필요 없어!',
          ]);
          await urara.say_and_wait([
            callname,
            ', 앞으로도 잘 부탁해! 한 걸음 더 나아간 사이로, 말이야!',
          ]);
          await era.printAndWait([
            '결혼식의 종이 울리고, 벚꽃빛 미소가 ',
            you.get_colored_name(),
            '의 시야를 가득 채워 간다.',
          ]);
          await era.printAndWait(
            '그렇구나. 보이지 않는 곳에서 작은 우라라는 이미 누군가와 평생을 함께할 준비를 마쳤던 것이다……',
          );
        } else {
          await urara.say_and_wait([
            '뭘 걱정하는 거야 ',
            callname,
            '? 이미 뭐든지 다 해왔는데, 우라라가 후회할 거라고 생각해?',
          ]);
          await urara.say_and_wait([
            '안 해! 우라라는 알아. ',
            callname,
            '은(는) 구두쇠라는 걸. 그러니까 ',
            callname,
            '의 곁에 남아서 직접 답을 찾을게!',
          ]);
          await era.printAndWait([
            '여전히 ',
            you.get_colored_name(),
            '을(를) 보지 않은 채 ',
            urara.get_colored_name(),
            '의 시선은 울타리 너머 하늘을 향한다. 삶의 끝을 생각하는 것 같다.',
          ]);
          await urara.say_and_wait([
            '게다가 그런 사람이어도 ',
            callname,
            '이(가) 노력하는 건 보여. 그러니까 우라라는 아무것도 필요 없어.',
          ]);
          await urara.say_and_wait([
            '심한 말이지만, 우라라는 ',
            callname,
            '이(가) 제대로 된 약속은 못 할 것 같아!',
          ]);
          await era.printAndWait([
            '결혼식의 종이 울리고, 작은 ',
            urara.uma_sex_title,
            '는 웃으며 ',
            you.get_colored_name(),
            '을(를) 향한다. 그 얼굴에는 털어 낸 마음이 담겨 있다.',
          ]);
          await era.printAndWait([
            urara.sex,
            '의 트레이너가 어떤 사람인지 알면서도 ',
            urara.get_colored_name(),
            '는 그래도 함께 걷고 싶은 걸까……',
          ]);
        }
        era.println();
        await urara.say_and_wait([callname, ', 잠깐 눈 감아 봐!']);
        await era.printAndWait(
          '긴장으로 떨면서도 약속한 듯 함께 눈을 감는다. 뒤이어 식의 주인공들처럼 포옹과 입맞춤을 나눈다.',
        );
        await era.printAndWait(
          '언젠가는 서로 떨어진 평행선 바깥의 두 사람도 자기들 결혼식의 주인공이 될 수 있을지 모른다.',
        );
        await era.printAndWait(
          '미래가 미지의 것이어도, 누구도 약속을 입 밖에 내지 않아도, 행복이 드물어지더라도.',
        );
        await era.printAndWait(
          '연인이 서로 결심을 품은 이상, 손을 잡고 앞으로 나아갈 수밖에 없다.',
        );
        if (has_lover) {
          era.println();
          await urara.say_and_wait([
            '그래도 ',
            callname,
            '은(는) 욕심쟁이네. 이것도 우라라가 선택한 거지만, 다들 우라라를 탓하지 않았으면 좋겠어.',
          ]);
          await urara.say_and_wait([
            '그래도 우라라랑 ',
            callname,
            '은(는) 이미 선택했어. 이제 늦었어……',
          ]);
          await era.printAndWait([
            '다정한 시간을 나눈 뒤 연인의 귓가로 고개를 숙인 ',
            urara.teen_sex_title,
            '의 미소는 조금 씁쓸했다.',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait(
            '그래요. 당신은 정말 나쁜 사람이에요. 그래도 조금 기운을 내세요. 왜냐하면……',
          );
        } else {
          era.drawLine();
        }
        await inner_urara.say_as_unknown_and_wait(
          '당신은 이제 돌아갈 수 없으니까요……',
        );
      } else {
        await urara.say_and_wait(
          '지금은 아직 안 되는구나…… 괜찮아. 우라라는 계속 기다릴게!',
        );
        await era.printAndWait([
          '초조하게 기다린 보람도 없이, 여전히 비어 있는 손을 오므리며 ',
          urara.get_colored_name(),
          '는 스스로를 위로하듯 다시 입을 연다.',
        ]);
        await urara.say_and_wait([
          '그래도 언젠가 ',
          callname,
          '이(가) 마음을 정하면…… 바로 우라라한테 말해 줘!',
        ]);
        await urara.say_and_wait('우라라도 정말 큰 용기를 내서 말했으니까……');
        await era.printAndWait([
          '사랑하는 ',
          callname,
          '을(를) 바라보지 못하고, 붉어진 벚꽃빛 눈동자를 그늘에 감춘 ',
          urara.get_colored_name(),
          '의 미소는 떨리는 목소리 때문에 슬퍼진다.',
        ]);
        await urara.say_and_wait([
          '역시 조금 괴로워…… 우라라는 정말 ',
          callname,
          '하고……',
        ]);
        await era.printAndWait('그러고는 억지 미소마저 점점 부서져 간다──');

        era.printButton(
          '「슬퍼하지 마, 우라라. 안 된다는 게 아니야. 지금은 아직 그때가 아니라는 거야.」',
          1,
        );
        await era.input();

        await urara.say_and_wait('……응?');
        await era.printAndWait([
          '뜻밖에도 ',
          urara.get_colored_name(),
          '의 떨리는 목소리가 멎었다. 붉어진 눈에는 조금 어리둥절한 기색이 있다.',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            '우라라는 ',
            callname,
            '이(가) 드디어 싫증이 난 줄 알았어. 그런 게 아니었구나……',
          ]);
          await era.printAndWait([
            '눈가의 눈물도 닦지 않은 채 작은 ',
            urara.uma_sex_title,
            '는 금세 안심하고 ',
            callname,
            '에게 다가붙는다.',
          ]);
          await era.printAndWait([
            '연인의 기척에 안심하며 ',
            urara.get_colored_name(),
            '는 미움받을까 하는 두려움에 날뛰던 마음을 진정시켜 간다.',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            '은(는) 우라라를 버리는 게 아니었구나. 왠지 기뻐……',
          ]);
          await era.printAndWait([
            '눈가의 눈물을 살며시 닦으며 ',
            urara.teen_sex_title,
            '는 어떻게 그런 결론에 이르렀는지 모를 말을 작게 중얼거린다.',
          ]);
          await era.printAndWait([
            '다만 지금까지의 거리감이라면 ',
            urara.get_colored_name(),
            '가 그렇게 생각하는 것도 뜻밖은 아닐지 모른다……',
          ]);
        }
        era.printButton(
          '「그러니까 우라라 말대로 때가 되면 가장 먼저 우라라에게 말할게!」',
          1,
        );
        await era.input();

        await urara.say_and_wait('그럼…… 약속이야?');
        await era.printAndWait([
          '조금 생각한 뒤 ',
          urara.get_colored_name(),
          '는 웃으며 ',
          you.get_colored_name(),
          '에게 새끼손가락을 내민다.',
        ]);

        era.printButton('「약속이야!」', 1);
        await era.input();

        await era.printAndWait(
          '새끼손가락을 거는 순간 결혼식장에서도 축복의 종이 울렸다. 인생에서 가장 중요한 약속을 축하하는 것 같았다.',
        );
        await era.printAndWait([
          '이런 축복이 있다면 ',
          urara.sex,
          '하고 약속한 날은 곧 올 것이다. 그날이 어떤 모습으로 찾아올지는……',
        ]);
        await urara.say_and_wait([
          '그래도 ',
          callname,
          '한테 거절당하고 앞으로 ',
          callname,
          '의 반려동물이 된다면 그것도……',
        ]);
        await urara.say_and_wait('아, 아니야. 아, 아무것도 아니야!');
        await era.printAndWait([
          '아무 말도 하지 않은 척하는 ',
          urara.get_colored_name(),
          '를 보고 있자니 약속의 날이 어느새 다시 멀어진 것 같다……',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '여기서 멈췄다고요?! 아니요…… 아무것도 아니에요……',
        );
        await inner_urara.say_as_unknown_and_wait(
          '그건 그렇고…… 당신, 어쩜 그렇게 능숙하죠?',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  90: (() => {
    const title = '양보하지 않는 마음';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan|false} u_call_r ハルウララのライスシャワーへの呼び方。恋慕が足りないときは false
     * @param {PrintedSpan|false} u_call_h ハルウララのキングヘイローへの呼び方。恋慕が足りないときは false
     */
    const f = async (urara, inner_urara, you, callname, u_call_h, u_call_r) => {
      await inner_urara.say_as_unknown_and_wait('……하아. 결국 이렇게 됐네요……');
      await inner_urara.say_as_unknown_and_wait(
        '흙만 있다면 묻힌 씨앗은 뿌리를 내리고 싹을 틔우죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '걱정하지 마세요. 우라라는 여전히 다정하니까요. 다만 검은색에 감싸인 봄빛이, 당신의 눈에 아름답게 보일까요?',
      );
      era.drawLine();
      await urara.say_and_wait([callname, ', 여기서 기다려 줬구나!']);
      await era.printAndWait([
        '평소의 활기찬 모습과 달리, 오늘의 ',
        urara.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 곁으로 다가오더니, 벤치에 앉은 ',
        you.get_colored_name(),
        '의 옆에 조용히 앉았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무슨 일이 있었는지 말을 걸려던 순간, 조용히 웃고 있는 작은 ',
        urara.uma_sex_title,
        '는에게, 본격화된 힘으로 깃을 붙잡힌다.',
      ]);
      await era.printAndWait([
        '이어서 ',
        you.get_colored_name(),
        '은(는) 입술과 치아가 맞닿는 다정함을 느끼고, 담당의 가늘고 부드러운 혀끝이 신기할 정도로 방어막을 비집고 들어와 ',
        you.get_colored_name(),
        '의 입안으로 들어오는 것을 느꼈다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 대담하게 ',
        you.get_colored_name(),
        '의 안쪽을 탐색한다. 가늘고 향기로운 혀끝이, 다정하고 강하게 치아와 혀를 어루만지며, 작게 끈적이는 물소리를 뒤섞는다.',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') <= 10) {
        await era.printAndWait([
          '무슨 일이 일어난 거지. 왜 이런 짓을. 우라라는 ',
          urara.sex,
          '가……',
        ]);
        await era.printAndWait([
          '수많은 질문이 ',
          you.get_colored_name(),
          '의 눈앞을 맴돈다. 자신을 습격한 이 벚꽃 빛은 정말로 「',
          urara.get_colored_name(),
          '」인 것일까.',
        ]);
        await era.printAndWait(
          '입안의 체액과 함께 엉겨 붙은 머릿속을 아무리 집중해도, 지금은 더 이상 답이 나오지 않는다.',
        );
        await era.printAndWait([
          '이 몸의 본능에 의지해 연인을 밀어트린 ',
          urara.get_colored_name(),
          '는 만족스러운 듯 온몸을 밀착시키며 ',
          urara.sex,
          '의 존재를 더욱 ',
          you.get_colored_name(),
          '의 모든 곳으로 침잠시켜 간다.',
        ]);
      } else {
        await era.printAndWait([
          '산소가 부족해 흐릿한 시야 속에서, 피어난 벚꽃 눈동자가 너무 가까운 거리에서 ',
          you.get_colored_name(),
          '의 시야를 전부 차지하고 있다.',
        ]);
        await era.printAndWait([
          '사고는 작은',
          urara.uma_sex_title,
          '는 부드러운 공격에 풀리고, 힘을 빼앗긴 몸은 이제 담당에게 저항할 수 없다. ',
        ]);
        await era.printAndWait(
          '산소 부족의 환각처럼, 모든 것을 빼앗는다는 전제로 압박해오는 작은 담당의 눈에, 미쳐버릴 듯한 마음이 배어 나온다.',
        );
      }
      era.println();

      await era.printAndWait([
        urara.sex,
        '그 기척을 ',
        you.get_colored_name(),
        '에게 새기기로 결심하기까지, 작은 ',
        urara.uma_sex_title,
        '는 오랫동안 고민했다. 하지만 우라라는 마지막에 깨달았다.',
      ]);
      await era.printAndWait(
        '이 마음을 믿어도, 믿지 않아도. 연인의 인품을 믿어도, 믿지 않아도.',
      );
      await era.printAndWait([
        callname,
        '이(가) 인간 쓰레기라도 괜찮아. ',
        callname,
        '이(가) 색귀라도 괜찮아. ',
        callname,
        '이(가) ',
        urara.get_colored_name(),
        '를 독점하고 싶어 하는 것만으로도 상관없어.',
      ]);
      await era.printAndWait([
        '그리고…… ',
        urara.get_colored_name(),
        '가 친구의 연인인 ',
        callname,
        '의 입술을 빼앗는 것도 큰 차이는 없겠지요?',
      ]);
      await era.printAndWait([
        '작은',
        urara.uma_sex_title,
        '는 겨우 깊은 키스에서 트레이너를 해방시킨다. 서로 밀어내던 혀끝에서 아쉬운 듯한 은실이 한 가닥 뽑힌다……',
      ]);
      await era.printAndWait([
        '멍하니, 조금 숨이 가쁜 ',
        you.get_colored_name(),
        '의 얼굴을 보고, ',
        urara.get_colored_name(),
        '는 천진난만함에 색기를 섞은 미소를 지었다.',
      ]);
      await urara.say_and_wait([
        '미안해, ',
        callname,
        '. 하지만 지금의 우라라는 더는 양보하지 않아……',
      ]);
      await era.printAndWait([
        '미안한 기색이라고는 없는 목소리가 ',
        urara.teen_sex_title,
        '의 입술 사이로 낮게 흘러나온다. 한때 ',
        urara.sex,
        '이 그토록 싫어하던 친구에 대한 배신도, 이제는 아무렇지도 않다.',
      ]);
      await urara.say_and_wait([
        '우라라는 알았으니까. 떠올렸으니까. 전부 ',
        callname,
        '의 탓이야……',
      ]);
      era.println();
      if (u_call_r && u_call_h) {
        await inner_urara.say_as_unknown_and_wait([
          '트레이너 ',
          you.adult_sex_title,
          '는 욕심이 많네요. 우라라의 가장 친한 친구를 곁에 두고도, 우라라까지 원하다니.',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '예전의 아무것도 모르던 우라라였다면 훨씬 괴로웠겠죠. 지금의 우라라는 신경 쓰지 않아요.',
        );
        await inner_urara.say_as_unknown_and_wait([
          '그런데 지금의 우라라는 ',
          callname,
          '에게 의기양양한 얼굴을 보이고 있어요. 왜일까요.',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          '왜 트레이너 ',
          you.adult_sex_title,
          '는 ',
          u_call_r ? u_call_r : u_call_h,
          '을 받아들이고 나서도 이렇게 가볍게 우라라를 대하는 걸까요.',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '왜 다른 사람의 사랑을 얻고 나서도 우라라까지 품에 안고 싶어 할까요.',
        );
        await inner_urara.say_as_unknown_and_wait([
          '왜 우라라는 그걸 알면서도 웃으며, 그런 트레이너 ',
          you.adult_sex_title,
          '와 끌어안는 걸까요.',
        ]);
      }
      era.println();
      await urara.say_and_wait(
        [
          '왜냐하면 ',
          callname,
          '은(는) 새빨간 거짓말쟁이고, 우라라도 그런 거짓말쟁이를 좋아하게 됐으니까.',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          callname,
          '은(는) 우라라에게 줘서는 안 될 마음을 줬어. 진짜인지 아닌지는 상관없어. 받아서는 안 된다는 걸 알면서도 제 것으로 삼은 우라라도 똑같이 잘못했지.',
        ],
        true,
      );
      await urara.say_and_wait(
        '우라라는 비열한 어른이 되는 걸까? 앞으로 비열한 어른이 되는 걸까? 우라라한테는 그게 중요하지 않아.',
        true,
      );
      await urara.say_and_wait(
        '어린애 같은 우라라가 나중에 왔다고 뭐가 달라져? 크게 잘못한 거라도, 같은 진흙탕에 있는 사람들이 이런 우라라보다 얼마나 깨끗한데?',
        true,
      );
      await urara.say_and_wait([
        callname,
        '이(가) 우라라를 이렇게 만들었으니까, ',
        callname,
        '도 우라라에게 제대로 책임져 줘……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 그 말의 의미를 묻기도 전에, 작은 담당은 손을 뻗어 가느다란 검지로 ',
        you.get_colored_name(),
        '의 입술을 눌렀다.',
      ]);
      await urara.say_and_wait(
        [
          '무슨 뜻인지 우라라한테 묻지 마. ',
          callname,
          '라면 스스로 답을 찾을 수 있잖아?',
        ],
        true,
      );
      await urara.say_and_wait([
        '묻지 마, ',
        callname,
        '. 지금은 여기까지…… 응?',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '의 점점 더 흐려진 벚꽃 같은 눈동자와 함께, 불결한 생각에 물이 주어지자, 추한 씨앗이 요사스럽고 비열한 꽃을 피웠다……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 ',
        {
          content: '펠라치오 기술',
          color: buff_colors[3],
        },
        '이 더욱 능숙해졌다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '어른의 마음을 여는 열쇠';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '열쇠는 편리하죠. 열 수도 있고, 잠글 수도 있어요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 열쇠 하나는 대개 맞는 자물쇠에만 통하죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        `그럼 직접 열쇠를 ${urara.sex}에게 건넬 건가요? 아니면 ${urara.sex}가 조금씩 당신의 열쇠를 훔치기를 기다릴 건가요?`,
      );
      await inner_urara.say_as_unknown_and_wait('……응? 별 차이가 없으려나요.');
      era.drawLine();

      await era.printAndWait([
        '익숙한 장소에 앉아 조용히 잠든 담당을 발견하고, ',
        you.get_colored_name(),
        '은(는) 적당히 발걸음을 늦추었다.',
      ]);
      await era.printAndWait([
        '긴 머리카락을 풀어 내린 작은 ',
        urara.uma_sex_title,
        '는 따뜻한 햇살 아래 마음 놓고 긴 의자에 누워 조용히 잠들어 있다.',
      ]);
      await era.printAndWait([
        '또 늦게까지 깨어 있었나? 너무 무리했나? ',
        you.get_colored_name(),
        '이(가) 곁에 앉아도 작은 ',
        urara.uma_sex_title,
        '의 누운 귀는 일어날 기색이 없다.',
      ]);
      await era.printAndWait([
        '처음 만났을 때처럼, 설령 더 이상 순결하지 않더라도 ',
        urara.get_colored_name(),
        '는 여전히 다 자라지 않은 아이처럼 아무런 방비가 없다.',
      ]);
      await era.printAndWait([
        '「빨간 모자」가 아무도',
        urara.sex,
        '를 상처 입히지 않을 것이라 믿고 있어도, 가장 가까이 있는 트레이너는 이미',
        urara.sex,
        '의 순진한 유혹에 넘어가 「늑대」가 되어 버렸다.',
      ]);
      await era.printAndWait(
        '단정한 교복 아래, 아직 완전히 성숙하지 않은 작은 몸은 사실 이미 쾌락을 좇는 본능에 눈을 뜨고 있었다.',
      );
      await era.printAndWait(
        '둥글고 도톰한 벚꽃색 입술이 호흡에 맞춰 살며시 벌어져 있다. 누군가 맛봐주길 바라는, 잘 익은 열매와도 같다.',
      );
      await era.printAndWait([
        '아침저녁을 함께하며 거리낌 없이 몸을 드러내는 「나쁜 ',
        urara.child_sex_title,
        '」 앞에서는 어른의 이성조차 조금씩 통제력을 잃어간다.',
      ]);
      await era.printAndWait([
        '가느다란 두 손목을 붙잡고, ',
        you.get_colored_name(),
        '은(는) 보복이라도 하듯 ',
        urara.get_colored_name(),
        '를 몸 아래에 깔고는 유혹적인 ',
        urara.sex,
        '를 향해 서서히 몸을 내리눌렀다.',
      ]);
      await urara.say_and_wait([
        '……',
        callname,
        ', 우라라는 상관없지만, 여기서 하면 들켜버린다구?',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          '에게 긴 의자로 밀려난 채 ',
          urara.get_colored_name(),
          '는 어느새 깨어 있었다. 저항은커녕, 오히려 ',
          you.get_colored_name(),
          '에게 순응하며 다시 눈을 가늘게 뜬다.',
        ]);
        await urara.say_and_wait([
          '하지만 ',
          callname,
          '이(가) 원한다면 우라라의 마음도 몸도 신경 쓰지 않아도 되니까.',
        ]);
        await era.printAndWait([
          '몽롱한 눈이 따뜻해지는 몸으로 젖어든다. 벚꽃 머리카락을 풀어헤친 ',
          urara.sex,
          '는 ',
          you.get_colored_name(),
          '의 모든 것을 받아낼 수 있을 것 같은 모성애를 풍긴다.',
        ]);
        await urara.say_and_wait([
          '지금 우라라는 언제든 ',
          callname,
          '의 모든 것을 환영할 거니까? ',
        ]);
      } else {
        await era.printAndWait([
          '작은',
          urara.uma_sex_title,
          '는 긴장된 눈으로 ',
          urara.sex,
          '를 범하려는 ',
          you.get_colored_name(),
          '을(를) 본다. 겉모습뿐인 저항 뒤에 고개를 돌리고 ',
          you.get_colored_name(),
          '에게 몸을 맡긴다.',
        ]);
        await urara.say_and_wait([
          '……좋아. 뭐든 당해도 참을게.',
          callname,
          '은(는) 빨리 해줘?',
        ]);
        await era.printAndWait([
          '긴장으로 눈가가 촉촉해져도, 작은',
          urara.uma_sex_title,
          '는 몸에 난폭하게 범해질 각오를 다진다.',
        ]);
        await urara.say_and_wait('한 번뿐이라면 뭐든 받아들일게?');
      }

      era.printButton('「！」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '의 헌신적인 속삭임 속에서, 넘쳐흐르는 욕망을 무고한 연인에게 쏟아부으려던 ',
        you.get_colored_name(),
        '은(는) 오히려 이성을 조금 되찾았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 담당에게 무슨 말을 건넬지 망설이고 있을 때 ',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 주저를 눈치채고는 안심한 듯 가볍게 웃음을 터뜨렸다.',
      ]);
      await urara.say_and_wait([
        '이제 정신이 좀 들어, ',
        callname,
        '? 요즘 많이 피곤했지? 우라라는 정말로 괜찮다구!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 침묵에 아랑곳하지 않고, 연인에게 눌린 자세 그대로 ',
        urara.get_colored_name(),
        '는 쓸쓸한 표정으로 언뜻 상관없어 보이는 화제를 꺼냈다.',
      ]);
      await urara.say_and_wait([
        '우라라는 아직 제대로 된 어른이 되지 못했지만, ',
        callname,
        '의 『어른의 열쇠』를 우라라에게 줄 수 있을까?',
      ]);

      era.printButton('「『어른의 열쇠』?」', 1);
      await era.input();

      await urara.say_and_wait([
        '응! 왜냐면 최근에 자기 트레이너랑 그렇게 친하지도 않던 친구가 트레이너의 열쇠를 받았다고 했거든.',
      ]);
      await urara.say_and_wait([
        '우라라도 참 신기하다고 생각했는데, ',
        urara.sex,
        '가 우라라에게 생각지도 못한 말을 했어──',
      ]);
      await urara.say_and_wait(
        '『트레이너와 사이좋은 우라라가 아직 초대받지 못한 거야? 우라라는 아직 어린애 취급받고 있나 보네!』',
      );
      await era.printAndWait([
        '잠깐, 작은 ',
        urara.uma_sex_title,
        '의 미소에 어린 얼굴과 어울리지 않는 복잡한 마음이 섞인다.',
      ]);
      await urara.say_and_wait([
        '그래서 우라라는 생각했어. 혹시 지금까지도 우라라는 ',
        callname,
        '에게 그저 어린애일 뿐인 걸까?',
      ]);
      await urara.say_and_wait([
        callname,
        '을(를) 가장 좋아하는 우라라는 언제쯤 ',
        callname,
        '의 방에 들어갈 수 있는 거야?',
      ]);
      await urara.say_and_wait([
        '아니면 설령 ',
        callname,
        '에게 눌려 있더라도, 우라라는……',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '의 초조함과 쓸쓸함이 섞인 눈을 바라보며 ',
        you.get_colored_name(),
        '은(는) 마침내 ',
        urara.get_colored_name(),
        '가 말하고 싶었던 사정을 이해했다.',
      ]);
      await era.printAndWait([
        '힘이 센 ',
        urara.uma_sex_title,
        '들에게 문이나 창문은 장애물이 되지 않는다. 상대에게 받은 물건은 ',
        urara.couple_title,
        '에게 상징적인 의미가 더 크다.',
      ]);
      await era.printAndWait([
        '뒷감당을 생각하지 않고 행동할 수 있음에도 불구하고, ',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 선택을 존중하고 싶어 했던 것이다.',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '는 줄곧 사랑하는 ',
        callname,
        '이(가) 먼저 ',
        urara.sex,
        '를 초대할 날을 기다렸다. 지금 ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '를 너무 오래 기다리게 했다.',
      ]);

      inner_urara.say_as_unknown(
        `지금 이 순간, 열쇠는 트레이너 ${you.adult_sex_title} 자신의 손에 있다──`,
      );
      era.printButton(
        '「미안해, 중요한 걸 잊고 있었어. 우라라를 너무 기다리게 했네……」（호감도+10）',
        1,
      );
      era.printButton(
        '「물론 그런 게 아니야, 하지만 아직은 때가 아닐 뿐이야……」',
        2,
      );
      const ret = await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 채 말을 내뱉기도 전에, ',
        urara.get_colored_name(),
        '는 몸을 내밀어 입맞춤으로 ',
        you.get_colored_name(),
        '의 대답을 가로막았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 치열을 가르지도, ',
        you.get_colored_name(),
        '의 두 손에서 벗어나지도 않은 채, 그저 가볍게 입술을 포갠 것만으로 ',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 모든 퇴로를 차단했다.',
      ]);
      await era.printAndWait([
        '불과 몇 초간의 입맞춤이었음에도 마치 몇 세기가 흐른 듯한 착각이 들었고, ',
        you.get_colored_name(),
        '은(는) 그 긴 찰나의 순간 속에서 ',
        urara.get_colored_name(),
        '의 몸을 놓아주었다.',
      ]);
      await era.printAndWait([
        '두 사람이 약간의 여운을 남기며 천천히 떨어지자, 어느샌가 열쇠가 ',
        you.get_colored_name(),
        '의 손에 쥐어져 있었다.',
      ]);
      await era.printAndWait([
        '짧은 침묵 끝에 ',
        urara.get_colored_name(),
        '와 마음을 나눈 ',
        you.get_colored_name(),
        '은(는) 마침내 결심을 굳히고, 열쇠를 ',
        urara.get_colored_name(),
        '의 앞으로 내밀었다.',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(['──고마워, ', callname, '！']);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 열쇠를 건네는 순간, ',
          urara.get_colored_name(),
          '도 약속이라도 한 듯 ',
          you.get_colored_name(),
          '과(와) 동시에 손을 뻗었다.',
        ]);
        await era.printAndWait([
          '웃으며 ',
          you.get_colored_name(),
          '의 열쇠를 받은 작은 ',
          urara.uma_sex_title,
          '는 지극히 평범한 열쇠를 보물처럼 꼭 쥔다.',
        ]);
        await era.printAndWait([
          '기쁨이 얼굴에 드러난 ',
          urara.get_colored_name(),
          '를 보고 ',
          you.get_colored_name(),
          '도 긴장을 풀고 작은 ',
          urara.uma_sex_title,
          '의 풀어 내린 머리카락을 쓰다듬는다.',
        ]);
        await era.printAndWait(
          '어쩌면 머지않은 미래의 어느 날, 이른 아침부터 주방에서 분주히 움직이는 벚꽃색 뒷모습을 보게 될지도 모른다.',
        );
        await era.printAndWait(
          '어쩌면 머지않은 미래의 어느 날, 집에 돌아왔을 때 자신을 마중 나오는 벚꽃색 웃음을 보게 될지도 모른다……',
        );
        await era.printAndWait([
          '확실히 무척 아름다운 미래임에는 틀림없지만, 현재 유일한 아쉬움이라면 ',
          you.get_colored_name(),
          '은(는) 집문의 여분 열쇠가 아직 원래 자리에 있는지 확신할 수 없다는 것뿐이다……',
        ]);
        await urara.say_and_wait([
          '에헤헤~ 게다가 이렇게 하면 모두에게 자랑도 할 수 있잖아! 그리고 ',
          callname,
          '의 방에는 분명 멋진 것들이 잔뜩 있을 테니까!',
        ]);
        await era.printAndWait('아니, 애초에 그런 목적도 있었던 건가?');
        await era.printAndWait([
          '그 후로 한동안 ',
          you.get_colored_name(),
          '은(는) 열쇠를 ',
          urara.get_colored_name(),
          '에게 건네준 일로 인해 많은 사람의 입방아에 오르내리게 되었다.',
        ]);
        await era.printAndWait('그 이유는…… 마음속에만 담아두기로 하자.');
      } else {
        await urara.say_and_wait([
          callname,
          '도 ',
          callname,
          ' 나름대로 생각이 있다는 거, 우라라는 다 알고 있어! 하지만 앞으로는 우라라랑 더 많이 놀아줘야 해?',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 웃으며 ',
          you.get_colored_name(),
          '이(가) 내민 열쇠를 밀어냈고, 작은 손은 어느새 약간 실망한 기색이 역력한 ',
          you.get_colored_name(),
          '의 얼굴을 감싸 쥐었다.',
        ]);
        await urara.say_and_wait([
          '그리고 말이야, ',
          callname,
          '은(는) 역시 웃는 얼굴이 제일 멋져!',
        ]);
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '는 처음에 ',
          callname,
          '에게 거절당한 결과를 받아들이고, 웃으며 다시 포니테일을 묶는다.',
        ]);
        await urara.say_and_wait(
          '그럼 이제 훈련하러 가자! 오늘은 무엇을 할 거야?',
        );
        await era.printAndWait([
          '소중한 사람에게 거절당해도 ',
          urara.get_colored_name(),
          '는 평소처럼 웃으며 좋아하는 사람이 ',
          urara.sex,
          '를 걱정하지 않게 하려 한다.',
        ]);
        await era.printAndWait(
          '어찌 되었든, 미래에 분명 다시 기회가 오겠지만, 서로에게 무엇보다 소중한 두 사람은 마음의 거리를 좁힐 더할 나위 없는 기회를 놓치고 말았다.',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '가 혼자 머리를 묶는 뒷모습은 조금 지나치게 쓸쓸하다……',
        ]);
        await era.printAndWait([
          '당연하게도 그 후로 한동안 ',
          you.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '가 항상 기운이 없어 보이는 이유에 대해 많은 사람에게 질문을 받아야 했다.',
        ]);
        await era.printAndWait(
          '그 이유에 대해서는…… 그때 좀 더 솔직해졌더라면 좋았을 텐데.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  101: (() => {
    const title = '독점욕';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {string} self_name ハルウララの自称
     */
    const f = async (urara, inner_urara, you, callname, self_name) => {
      await inner_urara.say_as_unknown_and_wait(
        '작은 우라라도 질투를 해요. 그런 거예요.',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 훈련장 입구에 도착했을 때, 갑자기 달려온 ',
        urara.get_colored_name(),
        '와 정면으로 부딪혔다.',
      ]);
      await urara.say_and_wait([
        '오늘도 나랑 같이 있어 줘! ',
        callname,
        '이(가) 원한다면 우리 뭐든지 할 수 있어!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 정면에서 두 팔로 ',
        you.get_colored_name(),
        '을(를) 꽉 붙잡았다. 덕분에 ',
        you.get_colored_name(),
        '은(는) 시선을 피하며 슬쩍 빠져나갈 틈조차 없었다.',
      ]);
      await era.printAndWait([
        '아직 상황을 파악하지 못한 ',
        you.get_colored_name(),
        '은(는) 조금 긴장한 채 ',
        urara.get_colored_name(),
        '의 미소를 마주할 수밖에 없다.',
      ]);
      await urara.say_and_wait([
        '그러니까 오늘은 좀 더 ',
        self_name,
        '하고 함께 있어 줘!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게 대답할 틈도 주지 않고 ',
        urara.get_colored_name(),
        '는 어딘가 실감이 나지 않는 미소를 지으며 일방적으로 말을 마쳤다.',
      ]);
      await era.printAndWait([
        '그러고 나서 ',
        urara.get_colored_name(),
        '는 예상 밖의 힘으로 ',
        you.get_colored_name(),
        '을(를) 반쯤 끌다시피 하며 트레이닝장을 떠났다.',
      ]);
      await era.printAndWait([
        '너무 외로웠던 것일까? 하지만 ',
        urara.get_colored_name(),
        '가 이곳에 나타난 것은…… 그저 우연이겠지?',
      ]);
      await era.printAndWait([
        '우라라가 미리 와서 기다리고 있었다고는 생각하고 싶지 않다.',
        you.get_colored_name(),
        '은(는) 그렇게 믿고 싶었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
