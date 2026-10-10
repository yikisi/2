/**
 * @file トウカイテイオー - 日常
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {number} b_escape 地下室からの脱出方法
   */
  good_morning(teio, you, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('그렇구나…… 하아.');
          } else {
            teio.say('테이오 님의 트레이너…… 하하.');
          }
          break;
        case escape_enum.beat:
          teio.say('내가 또 당신을…… 그리고 이 모든 것을 저버렸어.');
          era.print([
            teio.sex,
            '가 두 눈을 감고 주먹을 꽉 쥐었다. 손바닥이 붉게 물들어 금방이라도 피가 배어 나올 것 같았다.',
          ]);
          era.print([
            you.get_colored_name(),
            '은(는) 받아들였다. 하지만 ',
            you.get_colored_name(),
            '은(는) 담당이 요즘 체력 트레이닝에 지나치게 몰두하는 것 같다고 느꼈다……',
          ]);
          break;
        case escape_enum.strike:
          teio.say('내가 또 당신을…… 그리고 이 모든 것을 저버렸어.');
          era.print([
            teio.sex,
            '가 두 눈을 감고 주먹을 꽉 쥐었다. 손바닥이 붉게 물들어 금방이라도 피가 배어 나올 것 같았다.',
          ]);
          era.print([
            you.get_colored_name(),
            '은(는) 받아들였다. 하지만 ',
            you.get_colored_name(),
            '은(는) 요즘 어딘가 어두운 곳에서 누군가 줄곧 자신을 지켜보는 듯한 느낌을 떨칠 수 없었다……',
          ]);
      }
    } else if (era.get('status:0:熬夜') > 0) {
      era.print([
        teio.get_colored_name(),
        {
          color: teio.color,
          content: '「아…… 좋은 아침이야 트레이너. 뭐? 나 어제 밤 안샜어!」',
        },
        ' (하품)',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => teio.say('오늘 트레이닝은…… 이만큼! 전부 해낼 테니까!'),
        () => teio.say('어, 벌써 시작이야?!'),
        () => teio.say('벌꿀 음료를 너무 마셨나…… 조금 힘드네.'),
      );
      if (era.get('love:3') >= 50) {
        buffer.push(() =>
          era.print([
            teio.get_colored_name(),
            `은(는) 다른 ${teio.uma_sex_title}와 이야기를 나누고 있었던 모양이다. `,
            you.get_colored_name(),
            `이(가) ${teio.sex}의 이름을 부르자 대화를 마치고 달려왔다.`,
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} b_escape 地下室からの脱出方法
   */
  select(teio, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('트레이너…… 아아.');
          } else {
            teio.say([
              callname,
              '도 예전의 나보다 더 장난꾸러기가 된 것 같네.',
            ]);
          }
          break;
        case escape_enum.beat:
        case escape_enum.strike:
          if (era.get('status:3:腿伤') > 0) {
            teio.say('내가 또 당신을…… 그리고 이 모든 것을 저버렸어.');
            era.print([
              teio.sex,
              '가 두 눈을 감고 주먹을 꽉 쥐었다. 손바닥이 붉게 물들어 금방이라도 피가 배어 나올 것 같았다.',
            ]);
          } else {
            teio.say('아, 나는……');
            teio.say('미안해, 트레이너.');
            era.print([teio.sex, '가 예전보다 훨씬 고분고분해진 듯하다.']);
          }
      }
    } else {
      teio.say(
        Math.random() < 0.5
          ? `으음~ 무적의 테이오 님께 무슨 용건이라도?`
          : `흐흥, 나는 언제든지 준비됐어!`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_study(teio, you) {
    await you.say_and_wait('무적의 테이오 님에게도 모르는 게 다 있네.');
    await era.printAndWait(
      `${you.name}이(가) 조금 놀리자, ${teio.sex}는 입술을 삐죽 내밀고 ${you.name}을(를) 빤히 노려보았다. 헛기침을 한 뒤에야 제대로 강의를 시작했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async talk(teio, you) {
    if (era.get('base:3:体力') < era.get('maxbase:3:体力') * 0.45) {
      if (Math.random() < 0.5) {
        await teio.say_and_wait('아…… 무적의 테이오 님도 지칠 때가 있구나아……');
      } else {
        await era.printAndWait([
          teio.get_colored_name(),
          '은(는) 고개를 들고 흐릿한 시선을 ',
          you.get_colored_name(),
          `에게 돌렸다. ${teio.sex}를 쉬게 해야겠다……`,
        ]);
      }
    } else {
      switch (era.get('cflag:3:干劲')) {
        case -2:
          await era.printAndWait([
            teio.get_colored_name(),
            `은(는) 초조하게 발을 구르며 온몸의 털까지 곤두세우고 있었다…… 지금은 ${teio.sex}에게 일을 시키지 않는 편이 좋겠다.`,
          ]);
          break;
        case -1:
          await era.printAndWait([
            teio.get_colored_name(),
            '의 입가에서 미소가 사라졌다…… 조금 이상하다.',
          ]);
          break;
        case 0:
          await era.printAndWait([
            teio.get_colored_name(),
            '은(는) 그다지 기운이 없어 보였다. 여전히 밝기는 하지만 어딘가 허전한 느낌이었다.',
          ]);
          break;
        case 1:
          await era.printAndWait([
            teio.get_colored_name(),
            '은(는) 운동장을 자유롭게 달리며 몸을 풀고 있었다. 의욕이 넘쳤다.',
          ]);
          break;
        case 2:
          await era.printAndWait([
            teio.get_colored_name(),
            '은(는) 신이 나서 제자리에서 무릎을 높이 들어 올리며 뛰었다. 생기 넘치고 씩씩한 모습이 ',
            you.get_colored_name(),
            '에게 함께하자고 손짓하는 듯했다.',
          ]);
      }
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async office_gift(teio, callname) {
    await teio.say_and_wait([
      '엣! 이거 ',
      callname,
      '가 나한테 주는 선물이야? 지금 열어봐도 돼? 음…… 돌아갈 때까지 기다리라고? 알았어, 그래도 정말 고마워!',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_cook(teio, you) {
    await teio.say_and_wait('무적의 테이오 님은…… 응, 이런 것도 잘한다고!');
    await era.printAndWait(
      `${you.name}은(는) ${teio.sex}의 서툰 요리 솜씨를 보고 함께 돕기로 했다. 곧이어 보기 좋고 향기로운 음식들이 식탁 위에 가득 차려졌다.`,
    );
    await era.printAndWait([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: '잘 ', color: teio.color },
      '(잘) ',
      { content: '먹겠습니다!', color: teio.color },
      '」',
    ]);
    await era.printAndWait(
      `미소를 나눈 뒤, 두 사람은 직접 만든 음식에 푹 빠져들었다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_rest(teio, you) {
    if (era.get('relation:3:0') > 150) {
      await you.say_and_wait(`일어나, 테이오. ${teio.adult_sex_title}。`);
      await teio.say_and_wait(`으응—— 히히~`);
      await era.printAndWait(
        `${teio.teen_sex_title}의 몸이 ${you.name}의 위로 쓰러지면서 두 사람 모두 소파에 푹 파묻혔다.`,
      );
      await era.printAndWait(
        `숨결이 ${you.name}의 목덜미를 간질였다. ${you.name}은(는) 담당 ${teio.uma_sex_title}의 등을 편안하게 쓰다듬고, 한 손으로는 털도 정돈해 주었다.`,
      );
    } else {
      await era.printAndWait(
        `테이오가 모처럼 조용해졌다. ${you.name}은(는) ${teio.sex}와 소파에 나란히 앉아 느긋한 시간을 함께 보냈다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async office_game(teio, you) {
    await teio.say_and_wait('아앗! 무적의 테이오 님은 지지 않아!');
    await era.printAndWait(
      `화면 속 캐릭터가 날뛰는 모습은 지금 조작하는 사람과 꼭 닮아 있었다. ${you.name}은(는) 옆에서 푹 빠져 있는 ${teio.sex}를 어이없다는 듯 흘끗 보았다. 자그마한 ${teio.uma_sex_title}는 진지하게 컨트롤러를 쥔 채 이마에 땀방울까지 맺혀 있었다. ${you.name}은(는) 미소를 짓고 게임으로 시선을 돌렸다.`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  async s_a_tree_hollow(teio) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('지금의 나는…… 하하, 하하하, 윽——');
    } else {
      await teio.say_and_wait(
        '크으…… 이기고 싶어, 이기고 싶다고! 난 테이오야! 무적이라고! 반드시……',
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_dating(teio, you) {
    await era.printAndWait(
      `학원 안에서…… 이래도 괜찮을까? ${you.name}의 마음에 의문이 떠올랐다. 하지만 곁에 딱 붙은 테이오는 얼굴만 유난히 빨갛고, 그 외에는 평소와 다름없었다.`,
    );
    await era.printAndWait(
      `${teio.sex}의 그런 얼굴을 보고 ${you.name}은(는) 오히려 안심했다. 다른 사람의 시선도 신경 쓰지 않고, 연인처럼 ${teio.sex}와 장난을 치기 시작했다.`,
    );
  },
  /** @param {CharaTalk} teio トウカイテイオー */
  async s_r_lunch(teio) {
    await teio.say_and_wait('여기서 밥 먹으니까 의외로 괜찮네!');
    await era.printAndWait(
      '도시락을 펼친 곳은…… 「천장」 위? 두 사람은 기분 좋은 점심을 즐겼다.',
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async o_r_fishing(teio, you, callname) {
    await teio.say_and_wait([callname, ', 여기야!']);
    await era.printAndWait(
      `${teio.sex}는 그렇게 말하며 신발을 벗고 맨발로 얕은 물에 들어갔다. 물에 젖은 하얀 두 발은 물속에서 한층 더 귀여워 보였다.`,
    );
    await era.printAndWait(
      `안타깝지만 이렇게 소란을 피우면 물고기는 도망갈 수밖에 없다. ${you.name}은(는) 어이없다는 듯 한숨을 쉬고 ${teio.sex}의 옆에 앉아 낚시 준비를 시작했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_walking(teio, you) {
    await teio.say_and_wait(`강가를 걸으니까~ 기분 좋아!`);
    await era.printAndWait(
      `${you.name}의 담당은 콧노래를 흥얼거리며 춤추듯 걸었다. 또 오자고, ${you.name}은(는) ${teio.sex}의 즐거워하는 얼굴을 보며 생각했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_arcade(teio, you) {
    await era.printAndWait(
      `${you.name}와(과) ${teio.name}은(는) 게임 센터에서 실컷 놀고, 돌아가기 전에 남은 코인을 인형 뽑기에 「낭비」하기로 했다.`,
    );
    await era.printAndWait(
      `그렇게 말했지만 두 사람 모두 꽤 진지하게 스틱을 조작하고, 몇 번이고 고민한 끝에 버튼을 눌렀다……`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async o_s_drawing(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '……무적의 테이오 행운을 나눠 줄게!']);
      await era.printAndWait(
        `${teio.sex}는 ${you.name}의 몸에 기대 한쪽 팔을 붙잡았다. 따뜻하고 탄력 있는 감촉과 좋은 향기가 동시에 밀려왔다. ${you.name}은(는) 조금 어색하게 다른 손을 상자 안에 넣었다……`,
      );
    } else {
      await teio.say_and_wait(
        '음…… 운으로도 무적의 테이오 님은 지지 않아! 아마도……',
      );
      await era.printAndWait(
        `${teio.sex}가 ${you.name}을(를) 바라보았다. ${you.name}이(가) 고개를 끄덕이자 ${teio.sex}는 상자 안에 손을 넣었다……`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async o_s_ktv(teio, you, callname) {
    if (era.get('relation:3:0') > 225) {
      await teio.say_and_wait([callname, '! 내 노래 어땠어?!']);
      await era.printAndWait(
        `${you.name}은(는) 입술까지 가져간 물컵을 황급히 내려놓고, 환하게 웃는 담당 앞에서 생각에 잠긴 표정을 지었다. 방금 ${teio.sex}는 온 마음을 다해 「사랑은 더비☆」를 불렀고, 지금도 뺨에 붉은 기가 남아 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 머리를 쥐어짜 칭찬을 늘어놓았다. ${teio.sex}는 ${you.name}의 그런 모습을 보고 더욱 기쁜 듯 웃었다.`,
      );
    } else {
      await era.printAndWait(
        `정신을 차려 보니 노래방 앞에 와 있었다. ${teio.sex}가 강력히 원해서 안으로 들어가 한동안 즐겼다——다만 노래는 거의 ${teio.sex}만 불렀다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_movie(teio, you) {
    if (era.get('relation:3:0') > 225) {
      await era.printAndWait(
        `테이오는 ${you.name}의 왼팔을 끌어안고 발돋움해 귓가에 영화 제목을 속삭였다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 보니 달콤한 연애 영화였다. 조금 우스워져 오른손으로 테이오의 머리를 쓰다듬으려다가, ${teio.sex}의 부끄러움과 결심이 뒤섞인 눈과 마주쳤다.`,
      );
      await era.printAndWait('응…… 그럼, 연인처럼 보러 가자.');
    } else if (Math.random() < 0.5) {
      await era.printAndWait(
        `테이오가 강력히 원해서 ${you.name}은(는) 「도전할 만한 공포 영화」를 골랐다.`,
      );
      await era.printAndWait(
        `예상대로 절정에 이를 때마다 자그마한 ${teio.uma_sex_title}는 버티지 못했고, ${you.name}의 ${teio.sex}가 있는 쪽 팔은 감각이 없어질 만큼 세게 붙잡혀 있었다……`,
      );
    } else {
      await era.printAndWait(
        `${you.name}은(는) 테이오와 온 가족이 즐길 만한 코미디 영화를 보며 절로 웃음을 터뜨렸다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} dice おみくじの出目。0-1の小数で、小さいほど良い
   */
  async o_c_pray(teio, you, callname, dice) {
    await teio.say_and_wait([callname, '~ 빨리빨리, 같이 운세 뽑자!']);
    await era.printAndWait(
      `자그마한 ${teio.uma_sex_title}가 ${you.name}의 손을 잡아끌며 신사로 달려갔다. ${you.name}은(는) 황급히 보폭을 넓혀 따라갔다. 목적지에 도착할 무렵, ${you.name}은(는) 이미 땀투성이였다……`,
    );
    await era.printAndWait(
      `부드러운 감촉이 손에서 떨어졌다. ${teio.name}은(는) 통을 들어 올리고 눈을 가늘게 뜨며 웃더니 마구 흔들었다——`,
    );
    await teio.say_and_wait('에헤헤——하앗!');
    await era.printAndWait(
      `아이처럼 신나게 흔들고 나자 통에서 대나무 막대 하나가 튀어나왔다. ${you.name}은(는) 손을 들어 손가락 사이로 막대를 잡고 눈을 가늘게 떠 보았다.`,
    );
    if (dice < 0.2) {
      await era.printAndWait('(대길)');
      if (era.get(`relation:3:0`) > 225) {
        await era.printAndWait(
          `${you.name}은(는) 다가가 테이오에게 막대를 흔들어 보였다. ${teio.sex}는 그것을 낚아채더니 놀랍고 기쁜 표정으로 ${you.name}에게 뛰어들어 허리를 끌어안았다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}은(는) 대길이라고 소리 내어 읽었다. 테이오의 귀가 기쁜 듯 폴짝 움직였다. ${teio.sex}는 한걸음에 다가와 ${you.name}의 막대를 쥔 손을 잡고 내용을 확인하더니 킥킥 웃었다.`,
        );
      }
    } else if (dice < 0.4) {
      await era.printAndWait('(중길)');
      await era.printAndWait(
        `${you.name}이(가) 글자를 읽자 테이오는 그 자리에서 가슴을 펴고 허리에 손을 얹었다. 자신이 통을 잘 흔든 덕이라고 자랑하는 듯했다.`,
      );
    } else if (dice < 0.8) {
      await era.printAndWait('(소길)');
      await era.printAndWait(
        `${you.name}은(는) 그것을 테이오에게 건넸고, ${teio.sex}는 기쁜 듯 웃었다.`,
      );
    } else {
      await era.printAndWait('(흉)');
      await era.printAndWait(
        `${you.name}은(는) 잠깐 망설이다 소리 내어 읽지 않았다. 테이오는 뭔가 눈치챈 듯 어색한 얼굴로 그 자리에 섰고, 두 사람은 이 일을 잊기로 했다.`,
      );
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async good_night_normal(teio, you, callname) {
    era.print(
      `바쁜 하루가 끝나고, ${you.name}은(는) ${teio.name}을(를) 기숙사 입구까지 바래다주었다.`,
    );
    teio.say(['내일 또 봐! ', callname, '！']);
    era.print(
      `피곤한 하루였는데도 ${teio.sex}는 여전히 기운이 넘쳤다. ${you.name}은(는) 그렇게 생각하며 ${teio.sex}와 손을 흔들어 작별했다.`,
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  gn_sex_intro(teio, you) {
    era.print(
      `바쁜 하루가 끝나고, ${you.name}은(는) ${teio.name}을(를) 기숙사 입구까지 바래다주었다.`,
    );
    era.print(
      '평소처럼 헤어지려던 순간, 어째서인지 두 사람 모두 동작을 멈췄고 짧은 침묵이 흘렀다……',
    );
    era.print([
      teio.get_colored_name(),
      '/',
      you.get_colored_name(),
      '「',
      { content: '음, ', color: teio.color },
      '응——」',
    ]);
    era.print(
      `침묵 끝에 동시에 말이 나와 다시 어색해졌다. 하지만 조금 우습기도 해서 ${teio.uma_sex_title}의 눈가에 웃음이 번졌다. ${teio.sex}는 용기를 내어 ${you.name}보다 먼저 입을 열었다.`,
    );
    teio.say('저기, 외박 신청은 해 뒀으니까, 오늘은……');
  },
  gn_sex_confirm: (teio, you) => [
    '목소리가 점점 작아졌다. 뺨이 붉게 달아오르자 ',
    you.get_colored_name(),
    '은(는) ',
    teio.sex,
    '의 그런 얼굴을 보고 더는 참지 못해 결심했다——',
  ],
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   * @param {number} check 求愛判定。大成功なら拒否しても逆に押し切られる
   */
  async gn_sex_reject(teio, you, callname, check) {
    if (check !== 2) {
      return;
    }
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('음…… 그렇구나.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 여전히 가슴을 펴고 자신을 바라보면서도 눈빛만은 가라앉는 ',
        teio.sex,
        '를 보고 마음이 아파, 한 손을 ',
        teio.sex,
        '의 머리로 뻗었다.',
      ]);
      await era.printAndWait([
        '하지만 갑자기 ',
        teio.sex,
        '가 손을 들어 죽순 같은 다섯 손가락으로 ',
        you.get_colored_name(),
        '의 손바닥을 단단히 붙잡았다. ',
        you.get_colored_name(),
        '은(는) 힘을 주어 빼내려 했지만 꼼짝도 하지 않았다——',
      ]);
      await teio.say_and_wait([callname, '……']);
      await era.printAndWait([
        teio.sex,
        '는 점점 더 ',
        you.get_colored_name(),
        '에게 다가왔다.',
      ]);
      await teio.say_and_wait(
        '나는…… 어디서든, 놓고 싶지 않아. 놓지 않을 거야.',
      );
    } else {
      await teio.say_and_wait(
        '그——래——? 그럼 가자! 준비는 다 됐어, 장소도 정해 놨고!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 무슨 말이라도 꺼내기 전에, 체력에서 앞서는 ',
        teio.uma_sex_title,
        '에게 바람처럼 끌려갔다…… 지금 이 자리에서는 ',
        you.get_colored_name(),
        '의 의견이 중요하지 않을지도 모른다. ',
        teio.get_colored_name(),
        '은(는) 그저 앞으로 무슨 일이 일어날지를 ',
        you.get_colored_name(),
        '에게 알려 주었을 뿐이다.',
      ]);
    }
  },
  cl_new_year: (() => {
    const title = '새해';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        '새해야! ',
        callname,
        ', 준비됐어? 뭐 하고 놀까? 오늘은 같이 밤새 신나게 놀자!',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 황급히 ${teio.sex}에게 목소리를 낮추라고 손짓했다. 이대로 계속 외치게 두었다가는 학생을 유혹하는 변태 교사라는 평판이 생길지도 모른다. 참 손이 많이 가는 아이다.`,
      );
      await era.printAndWait(
        `하지만…… 담당 ${teio.uma_sex_title}가 곁에서 즐겁게 뛰며 활력을 뿜어내는 모습을 보자 ${you.name}은(는) 일 년 동안의 수고가 보답받는 것 같았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = '밸런타인데이';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('하찌미 하찌미~ 에헤헤~');
      await era.printAndWait(
        `${you.name}이(가) 책상에서 고개를 들자, 두 손을 등 뒤에 숨기고 싱글벙글 ${you.name}을(를) 바라보는 ${teio.uma_sex_title} ${teio.teen_sex_title}이(가) 보였다.`,
      );
      await teio.say_and_wait([callname, '~ 이거, 내가 만든 선물이야~']);
      await era.printAndWait(
        `${teio.sex}가 손을 앞으로 내밀었다. 그리 세련되지는 않았지만 정성이 담긴 포장의 작은 상자가 ${you.name}의 눈앞에 나타났다.`,
      );
      era.print([you.get_colored_name(), '——']);
      era.printButton('선물을 받는다', 1);
      era.printButton(`${teio.sex}까지 함께 먹어 버린다`, 2, {
        disabled: era.get('love:3') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) 선물을 받아 고맙다고 말하고, ${teio.sex}의 앞에서 조심스럽게 포장을 풀어 안의 초콜릿을 입에 넣었다.`,
        );
        await era.printAndWait(
          `담당했던 학생들과 동료들에게 받은 일곱, 여덟 개의 초콜릿을 정리한 뒤, ${you.name}은(는) 책상 뒤에 앉아 업무를 준비했다.`,
        );
      } else {
        await era.printAndWait(
          `${you.name}은(는) ${teio.sex}의 손에서 상자를 받았지만 바로 먹지는 않았다. 다른 손으로 천천히 포장을 풀면서도 ${teio.sex}의 손을 계속 잡고 있었다.`,
        );
        await era.printAndWait(
          `${teio.sex}의 얼굴이 귀까지 빨개졌을 때, ${you.name}은(는) 갑자기 ${teio.sex}를 품으로 끌어당겨 초콜릿을 머금은 채 ${teio.sex}의 입술에 입을 맞췄다.`,
        );
        await era.printAndWait(
          `벌꿀과 카카오의 달콤함이 ${teio.teen_sex_title}의 작은 혀에 감돌았다……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_temple_fair: (() => {
    const title = '축제';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}이 메시지로 초대하자, 곧바로 ${teio.name}에게서 답장이 왔다.`,
      );
      await teio.say_and_wait(`트레——이너——`);
      await era.printAndWait(
        `${teio.teen_sex_title}は、幼さをすべて可愛さへ変え、どこか色気も匂わせる浴衣に着替え、${you.name} の前で一回転する。`,
      );
      await teio.say_and_wait(`この格好、どう？`);
      era.printButton('「うん……」', 1);
      await era.input();
      await era.printAndWait(`答えにくい。`);
      await era.printAndWait(`胸の奥で、何かがプツリと切れた気がする。`);
      await era.printAndWait(
        `小柄な${teio.teen_sex_title}が着ると、まだ育ちきっていないが、それでも充分に色気のある体つきが透けて見える。`,
      );
      await era.printAndWait(
        `いちばん上の純白の耳当てが、小さな${teio.uma_sex_title}を純情な生徒だと指名しているようだ。その下、ゆったりした布は曲線を強調するほど体に密着せず、脇と側腹を透けさせている。`,
      );
      await era.printAndWait(
        `普段は隠れている、滑らかで白い敏感な肌が、今は ${you.name} の視線にさらされている。${you.name} が望めば、手を伸ばして感触を確かめることすらできる……`,
      );
      await teio.say_and_wait(`んっ？`);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        teio.teen_sex_title,
        'の美しさに沈み、しばらく抜けられない。',
      ]);
      era.printButton('我慢できない！', 1, {
        disabled: era.get('love:3') < 75,
      });
      era.printButton('강철 같은 의지!', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は大きく息を吸い、重くなった体で${teio.uma_sex_title}のそばへ歩み、大きな手を伸ばす——`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = '핼러윈';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        '오늘의 일을 마치고 집무실을 정돈한 ',
        you.get_colored_name(),
        '은(는) 다리를 쉬게 하며 학원의 종소리를 기다렸다.',
      ]);
      await era.printAndWait('오늘은 무언가가 일어난다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 정해진 운명을 기다렸다.',
      ]);
      era.println();
      await era.printAndWait('「쿵——, 똑똑똑, 쿵——」');
      await era.printAndWait([
        '기묘한 노크 소리가 들렸다. ',
        you.get_colored_name(),
        '은(는) 숨을 죽이고 문 뒤로 돌아가 힘껏 문을 열었다——',
      ]);
      era.println();
      await era.printAndWait('붉은 덩어리가 날아들었다.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 소리 없이 달려들었다.',
      ]);
      era.println();
      await teio.say_and_wait('와앗!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 기습은 통하지 않았다. ',
        teio.sex,
        '는 늦지 않게 돌아섰고, 마침 ',
        you.get_colored_name(),
        '와 끌어안듯 부딪쳤다.',
      ]);
      era.println();
      await teio.say_and_wait('테이오 님은 놀라지 않는다고!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 담당은 빨간 두건을 쓴 채 허리에 손을 얹고, 한 손에는 바구니를 든 채 다른 손으로 ',
        you.get_colored_name(),
        '을(를) 붙잡으러 왔다.',
      ]);
      era.println();
      await teio.say_and_wait('못된 어른, 나랑 놀자!');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 알았다고 몇 번이고 대답하고 약속대로 ',
        teio.sex,
        '와 외출했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait([
        '크리스마스야! 음, ',
        callname,
        '은(는) 산타가 돼서 선물을 주든가, 나랑 밤새 놀든가, 둘 중 하나야!',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 항의했지만, 기운 넘치는 담당에게는 아무래도 이길 수 없을 듯했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async load_talk(teio, callname) {
    await teio.say_and_wait([callname, '……이 아이를 버리는 거야? 왜……']);
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: get_gradient_color(teio.color, '#ff0000', 0.5),
          content:
            '「어째서…… 어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서어째서」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await era.printAndWait(
      [
        teio.get_colored_name(),
        {
          color: 'red',
          content: '「어째서…… 어째서어——!」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '3rem' },
    );
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async end_talk(teio, you) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:3') >= 75) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '함께 물러날 때가 와 버린 것 같네…… 역시, 조금 분해.',
          );
        } else {
          await teio.say_and_wait(
            '트레이너…… 무슨 일이 있어도, 나는 계속 그렇게 부를 거야.',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait([
          '아무 말도 없었다. ',
          teio.sex,
          '는 마지막으로 ',
          you.get_colored_name(),
          '을(를) 한 번 바라보았다. 청흑색 눈동자에는 눈물로도 씻어 낼 수 없는 얼룩이 가득했다.',
        ]);
      } else {
        await teio.say_and_wait(
          '언제부터 두 사람이 가는 길이 어긋나기 시작한 걸까……?',
        );
      }
    } else {
      if (era.get('love:3') >= 50) {
        if (era.get('status:3:腿伤') > 0) {
          await teio.say_and_wait(
            '설마, 이런 결말이라니…… 안 돼! 너도 계속 내 곁에 있어! 남들이 어떻게 보든, 넌 내 트레이너니까!',
          );
        } else {
          await teio.say_and_wait(
            '히엑——드, 들켰어? 그, 그럼 앞으로는 몰래…… 책임져 줘야 해!',
          );
        }
      } else if (era.get('status:3:腿伤') > 0) {
        await teio.say_and_wait('언제부터 서로 시선을 피하게 된 걸까……');
      } else {
        await teio.say_and_wait('……계약 해지에 동의해.');
      }
    }
  },
};
