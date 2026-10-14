/**
 * @file ランダム小イベント
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
     * @param {CharaTalk} _ 無意味な引数だが残す必要あり
     * @param {number} dice 祈りのダイス。0-1 の小数で、小さいほど良い
     * @param {number|undefined} god ランダムな女神の ID（その女神の好感が当たった場合）。全員が受肉済みなら undefined
     */
    const f = async (_, dice, god) => {
      await printAndWait('동전을 던지고 소원을 빌자……');
      if (dice < 0.4 && god) {
        await printAndWait(
          '……환청일까. 어째서인지 친근함과 신뢰가 솟아나는 목소리가 들렸다……',
        );
        const color = get_chara_color(god);
        switch (god) {
          case 340:
            await printAndWait('열정적인 붉은 목소리……', {
              color,
            });
            break;
          case 341:
            await printAndWait('포용력 있는 푸른 목소리……', {
              color,
            });
            break;
          case 342:
            await printAndWait('엄격한 노란 목소리……', {
              color,
            });
        }
      } else if (dice < 0.7) {
        await printAndWait('아……이거, 될지도……?');
        await printAndWait(
          '그렇게 말은 했지만…… 아무것도 떠오르지 않는다. 하지만 곰곰이 생각하니 무언가 알 것 같았다……',
        );
      } else if (dice < 0.9) {
        await printAndWait('역시 아무 일도 일어나지 않았다……');
      } else {
        await printAndWait('주워 보니 두 개가 되어 있었다!');
      }
    };
    f.title = '세 여신상 아래의 소원 연못';
    return f;
  })(),
  all_round_meek: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} meek ハッピーミーク
     */
    const f = async (meek) => {
      await printAndWait(
        '어디선가 세월의 흔적이 느껴지는 종이 한 장이 날아왔다!?',
      );
      await printAndWait('……손을 뻗어 붙잡았다.');
      await printAndWait(
        '단거리, 마일, 중거리, 장거리 내용이 왜 같은 페이지에 있는 거지——',
      );
      await meek.say_and_wait('아, 그거 돌려주실 수 있나요……');
      await printAndWait([
        '페이지의 내용에 놀라고 있을 때 ',
        meek.get_colored_name(),
        '가 다가와 말을 걸었다.',
      ]);
      await printAndWait(
        '……남의 보물을 훔쳐본 듯한 죄책감에 얌전히 돌려주었다.',
      );
      println();
      await printAndWait(
        '……어라, 혹시 그 페이지는 키류인 가문의 트레이닝 비전이었나!?',
      );
      await printAndWait('한참 뒤에 갑자기 생각나, 손바닥을 세게 쳤다.');
    };
    f.title = '뭐든 조금씩은 하는 미쿠 씨';
    return f;
  })(),
  experiment: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} ss サンデーサイレンス（正確にはカフェの「友人」）
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {boolean} is_endu_med スタミナ薬かどうか
     */
    const f = async (you, ss, coffee, is_endu_med) => {
      await you.say_and_wait('누군가 있다……');
      println();
      await printAndWait('이 교실을 다른 용도로 쓴다는 말은 못 들었는데……');
      await printAndWait([
        '갑작스러운 폭우와 천둥. ',
        you.get_colored_name(),
        '은(는) 쫒기듯 이 작은 보물창고에 도착했다.',
      ]);
      println();
      await you.say_and_wait('아마 둘 중 하나를 고르라는 걸까?');
      println();
      await printAndWait('가죽 끈이 묶여 있는 와인빛 약');
      await printAndWait('그리고 조금 낡은 검은 고양이 인형');
      println();
      you.say('어느 쪽으로 할까……', true);
      printButton('약 (스태미나 +? 또는 체력 +50)', 1);
      printButton('인형 (지능 +8, 스킬 Pt +?)', 2);
      const ret = await input();
      if (ret === 1) {
        if (is_endu_med) {
          await printAndWait('써——');
        } else {
          await printAndWait('매워——');
        }
      } else {
        await ss.say_as_unknown_and_wait('옳지 옳지 옳지 옳지——');
        await coffee.say_as_unknown_and_wait('음……?');
        await printAndWait([
          '창밖으로 ',
          coffee.uma_sex_title,
          '의 그림자가 스친 것 같은데? 설마~ 여기는 1층도 아니잖아.',
        ]);
      }
      return [ret];
    };
    f.title = '버려진 과학실 탐험';
    return f;
  })(),
  shadow_minoru: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} taiki タイキシャトル
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} know_minoru 駿川たづなの正体を知っているか
     */
    const f = async (minoru, taiki, you, know_minoru) => {
      if (know_minoru) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 멀리서 두 개의 녹색 그림자가 다가오는 것을 보았다. 아무래도 ',
          taiki.get_colored_name(),
          '이(가) 알 수 없는 이유로 ',
          minoru.get_colored_name(),
          '에게 쫓기는 모양이다…… 아직 녹슬지 않은 실력이군!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 멀리서 두 개의 녹색 그림자가 다가오는 것을 보았다. 아무래도 ',
          taiki.get_colored_name(),
          '이(가) 알 수 없는 이유로 ',
          minoru.get_colored_name(),
          '에게 쫓기는 모양이다…… 그건 그렇고, 어떻게 인간이 ',
          taiki.uma_sex_title,
          '의 속도를 따라잡을 수 있는 거지?',
        ]);
      }
      printButton('「속도를 줄여! 다칠 수도 있어!」', 1);
      await input();
      await printAndWait([
        '앞서 달리던 ',
        taiki.get_colored_name(),
        '이(가) 천천히 감속하고, 녹색 옷차림의 비서가 ',
        you.get_colored_name(),
        '에게 감사 인사를 했다. 좋은 일을 하나 해냈다!',
      ]);
    };
    f.title = '녹색 환영';
    return f;
  })(),
  chairman_annoyance1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     */
    const f = async (taste) => {
      await printAndWait([
        '학원 이사장 ',
        taste.get_colored_actual_name(),
        '이(가) 머리를 싸매고 있다. 정확히는 돈 문제다. 트레센 예산이 또 초과되었다——!!',
      ]);
      await printAndWait(
        '지금 이 주황 머리의 작은 이사장은 녹색 비서에게 혼나며 벌벌 떨고 있다…… 무시무시한 재정의 구멍을 어떻게 메워야 할까?',
      );
      printButton(
        '「수입과 지출을 바로잡자. 우선 솔선해서 감봉이다!」 (빚 +40, 육성 중인 우마무스메의 스킬 Pt +10)',
        1,
      );
      printButton('「그건 내 책임이 아닌데……」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait('좋은 일이 생긴 듯하다!');
        await printAndWait('……다만 이번 달은 컵라면 생활이다!');
      } else {
        await printAndWait('특별한 일은 일어나지 않았다.');
      }
      return [ret];
    };
    f.title = '%TEEN% 이사장의 고민·첫 번째';
    return f;
  })(),
  chairman_annoyance2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     */
    const f = async (taste) => {
      await printAndWait([
        '학원 이사장 ',
        taste.get_colored_actual_name(),
        '의 고양이가 사라졌다! 고양이가 없어 풀이 죽은 이사장 때문에 트레센의 운영 효율이 크게 떨어지고 있다!',
      ]);
      printButton(
        '「총동원이다. 반드시 고양이를 찾아라!」 (기력 -50, 호감 +40~60)',
        1,
      );
      printButton('「어쩔 수 없나.」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '고양이를 찾은 후 ',
          taste.get_colored_name(),
          '은 매우 기뻐했고 트레센도 다시 정상적으로 돌아왔다.',
        ]);
      } else {
        await printAndWait(
          '특별한 일은 일어나지 않았다…… 그보다 이사장은 평소에 무슨 일을 하는 거지?',
        );
      }
      return [ret];
    };
    f.title = '%TEEN% 이사장의 고민·두 번째';
    return f;
  })(),
  av_meteor: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} vega アドマイヤベガ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} good_event 予兆を吉とするか凶とするか
     * */
    const f = async (vega, you, good_event) => {
      await printAndWait([
        '어느 날 밤 ',
        you.get_colored_name(),
        '은(는) 고목 구멍 근처에서 별하늘을 올려다보는 ',
        vega.get_colored_name(),
        '을(를) 발견했다.',
      ]);
      await printAndWait(
        '시선을 따라가자 눈가로 유성 한 줄기가 스쳐 사라졌다.',
      );
      printButton(
        '「이건 무언가의 징조다!」 (육성 중인 우마무스메의 의욕 +1 또는 -1)',
        1,
      );
      printButton('「그냥 별똥별이야.」 (안정도 +1)', 2);
      const ret = await input();
      if (ret === 1) {
        if (good_event) {
          await printAndWait('좋은 일이 생긴 듯하다!');
        } else {
          await printAndWait('나쁜 일이……');
        }
      } else {
        await printAndWait('아주 평범한 일이 생긴 듯하다!');
      }
      return [ret];
    };
    f.title = '혜성 관측';
    return f;
  })(),
  custom: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait([
        '어느 오후, ',
        you.get_colored_name(),
        '은(는) 최근 시작한 모바일 게임 『반짝이는 우수 소녀』에서 또 낮은 확률의 트레이닝 실패를 겪었다…… 익숙해지자, 익숙해지자……',
      ]);
      printButton(
        '「……익숙해지겠냐!」 (우마 코인 -50, 육성 중인 우마무스메의 체력 +15%)',
        1,
        {
          disabled: get('flag:当前马币') < 50,
        },
      );
      printButton('「익숙해지자!」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 어른의 마법·과금을 시전했다!',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스마트폰을 부숴 버리고 싶은 충동을 참았다……',
        ]);
      }
      return [ret];
    };
    f.title = '익숙함은 무섭다';
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
        '아침에 눈을 뜨자 ',
        chara.get_colored_name(),
        '은(는) 이미 침대에 없었다.',
      ]);
      await printAndWait([
        '일어나 준비를 마치고 나가니 부엌에서 ',
        chara.sex,
        '의 모습을 발견했다. 아침을 준비하는 모양이다. 그런데……',
      ]);
      await printAndWait([
        '실오라기 하나 걸치지 않은 채 앞치마만 두르고 열심히 아침 식사를 만드는 ',
        chara.get_colored_name(),
        '이(가) 귀여운 엉덩이를 흔들며 요리하는 모습은, 그야말로——',
      ]);
      printButton('(아아, 참을 수 없어!)', 1);
      printButton('(소수를 세면서 진정하자……)', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 충동을 억누르고 이성적으로 ',
          chara.get_colored_name(),
          '에게 인사했다.',
        ]);
      }
      return ret;
    };
    f.title = '다음 날 아침, 알몸 앞치마';
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
        '아침에 눈을 뜨자, ',
        you.get_colored_name(),
        '은(는) 하반신에서 이상한 감촉을 느꼈다.',
      ]);
      await printAndWait([
        '눈을 뜨자 눈앞에는 알몸의 ',
        chara.get_colored_name(),
        '이(가) 입으로 ',
        you.get_colored_name(),
        '의 ',
        you.sex_code === 0 ? '클리토리스' : '음경',
        '을(를) 빨아올리는 음란한 광경이 펼쳐져 있었다.',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) ',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? '탐욕스럽'
          : skill > 2
            ? '능숙하'
            : '서투르',
        '게 ',
        you.sex_code === 0 ? '클리토리스를 핥았고' : '음경을 입에 물었고',
        ', ',
        you.get_colored_name(),
        '도 무심코 손으로 ',
        chara.get_colored_name(),
        '의 머리를 누르며 더 큰 쾌감을 요구했다.',
      ]);
      printButton('(못 참겠어!)', 1);
      printButton('(간다……!)', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          chara.get_colored_name(),
          '의 아침 구강 봉사에 ',
          you.get_colored_name(),
          '은(는) 금세 절정하여 ',
          you.sex_code === 0 ? '애액' : '정액',
          '을(를) 남김없이 ',
          chara.get_colored_name(),
          '의 작은 입 안에 쏟아부었다.',
        ]);
        await chara.say_and_wait(['입 안이 전부…… ', callname, '의 맛……']);
        await printAndWait('욕망을 풀고 난 뒤, 새로운 하루가 시작되었다……');
      }
      return ret;
    };
    f.title = '다음 날 아침, 아침 구강 봉사';
    return f;
  })(),
  ts_sex: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      await printAndWait([
        '하루 트레이닝을 마친 후 ',
        chara.get_colored_name(),
        '의 상태가 어딘가 이상하다……',
      ]);
      await printAndWait(
        '얼굴은 붉게 달아올랐고, 허벅지 사이로 흐르는 정체 모를 액체가 땀과 뒤섞여 음란한 냄새를 풍긴다.',
      );
      printButton('「이것도 트레이너의 임무다……」', 1);
      printButton('「일단 보건실로!」', 2);
      const ret = await input();
      return [ret];
    };
    f.title = '트레이닝 후의 성욕';
    return f;
  })(),
  drug_notice: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {number} effect 効果 0-トレーニング上手バフ、1-健康茶、2-母乳薬、3-性欲上昇
     */
    const f = async (tachyon, you, effect) => {
      await printAndWait(
        [
          '【학원 공지——조금 전 ',
          tachyon.get_colored_name(),
          '이(가) 실수로 운동장에 뿌린 약품의 정체는 현재 불명입니다. 각 트레이너께서는 꼭 필요한 경우가 아니면 운동장에서의 트레이닝을 삼가 주세요.】',
        ],
        { fontSize: '1.5rem' },
      );
      let ask_tachyon = false;
      while (true) {
        printButton('(괜찮겠지) (무작위 효과)', 1);
        printButton('공지대로 조심하자…… (효과 무효화)', 2);
        if (!ask_tachyon && get('cflag:32:招募状态') === 1) {
          printButton('「타키온…… 너 말이야!」', 3);
        }
        switch (await input()) {
          case 1:
            switch (effect) {
              case 0:
                await printAndWait('팀원들의 트레이닝이 잘 진행되었다……');
                break;
              case 1:
                await printAndWait(
                  '이번 주 팀원들의 감량은 평소보다 효과가 좋을 듯하다……',
                );
                break;
              case 2:
                await printAndWait('팀원들에게서 모유가 나오기 시작했다……');
                break;
              case 3:
                await printAndWait('팀원들의 성욕이 높아졌다……');
            }
            return [1];
          case 2:
            return [2];
          case 3:
            await printAndWait([
              you.get_colored_name(),
              '의 추궁에 ',
              tachyon.get_colored_name(),
              '은(는)',
              tachyon.sex,
              '가 뿌린 약의 대략적인 효과를 털어놓았다——',
            ]);
            switch (effect) {
              case 0:
                await tachyon.say_and_wait(
                  '간단히 말하면 트레이닝 중에 집중하기 쉬워지는 약이라네……',
                );
                break;
              case 1:
                await tachyon.say_and_wait(
                  '간단히 말하면 열량을 빨리 소비하게 하는 약이라네……',
                );
                break;
              case 2:
                await tachyon.say_and_wait(
                  '간단히 말하면 우마무스메에게서 모유가 나오게 하는 약이라네……',
                );
                break;
              case 3:
                await tachyon.say_and_wait(
                  '간단히 말하면 이성을 조금 약하게 하는 약이라네……',
                );
            }
            ask_tachyon = true;
        }
      }
    };
    f.title = '학원 공지·약제 살포';
    return f;
  })(),
  gs_carrot: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} gs ゴールドシップ
     */
    const f = async (gs) => {
      await printAndWait([
        '학원에서 정체 모를 회색 머리의 ',
        gs.uma_sex_title,
        '에게 불려 세워졌다.',
      ]);
      await gs.say_and_wait(
        '헤이! 거기 트레이너! 골시랑 바다에서 무 뽑지 않을래!',
      );
      await printAndWait([
        '문제아인 ',
        gs.get_colored_name(),
        '이었다…… 그런데 바다에 무가 자라나?',
      ]);
      printButton('「뽑고 싶으면 뽑아!」 (우마 코인 +20)', 1);
      printButton('「왠지 수상한데……」 (체력 +100)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          '모래사장에서 무지갯빛으로 빛나는 보석 같은 무를 파냈다!?',
        );
      } else {
        await printAndWait(
          '평범한 무를 얻었다…… 아니, 바닷가에서 자라는 게 평범한가!? 일단 점심 반찬으로 보태자.',
        );
      }
      return [ret];
    };
    f.title = '무 뽑기의 귀신';
    return f;
  })(),
  trainer_race: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} aoi 桐生院葵
     */
    const f = async (you, aoi) => {
      await printAndWait([
        '트레센 학원으로 가는 길, 포스터 한 장이 바람에 날려 ',
        you.get_colored_name(),
        '의 얼굴에 착 달라붙었다.',
      ]);
      await printAndWait([
        '포스터를 보니 트레이너를 대상으로 한 ',
        get_random_entry(['단거리 달리기', '수영', '등산']),
        ' 대회인 것 같다. 체력에 자신이 없더라도 현장에서 지원해준다고 하는데, 참가해 볼까?',
      ]);
      printButton(
        '(해 봐도 손해는 없겠지) (체력 및 기력 -25%, 상품 확률 획득)',
        1,
      );
      printButton('(너무 바빠서 참가할 시간이 없어——!)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          '정체 모를 침술을 받고 나니 어째서인지 손쉽게 우승하고, 주최 측의 상품까지 받았다!',
        );
        await printAndWait(
          '하지만 너무 순조로워 등골이 서늘하다…… 실험대에 오른 기분이다……',
        );
      } else {
        await printAndWait([
          '결국 ',
          aoi.get_colored_name(),
          '이(가) 먼저 말문을 열고, 세 여신상 앞에서 경건하게 기도하면 두 번째 기회를 얻을 수 있다는 소문을 들은 적이 있다고 말했다.',
        ]);
        await printAndWait('역시 저 사람은 무시무시하게 강하다……');
      }
      return [ret];
    };
    f.title = '바람에 날리는 포스터';
    return f;
  })(),
  bankruptcy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait([
        '게으르게 제대로 일하지 않은 탓일까. 아니면 운이 ',
        you.get_colored_name(),
        '의 편을 들어주지 않은 것뿐일까. 어쨌든 ',
        you.get_colored_name(),
        '의 은행 잔고가 바닥나고 말았다!',
      ]);
      await printAndWait([
        '한심하지만 담당 ',
        get('flag:角色性别') === 1 ? '우마무스코' : '우마무스메',
        '에게 사정할 수밖에…… 없는 걸까?',
      ]);
      printButton('「이렇게 될 줄이야……」', 1);
      await input();
    };
    f.title = '파산';
    return f;
  })(),
  reject: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait(
        '어째서인지 요즘 학원을 걷다 보면 수군거리는 소리가 따라붙는다.',
      );
      await printAndWait([
        you.get_colored_name(),
        '이(가) 알아보니, 어느새 매정한',
        you.sex_code === 1 ? '쓰레기 남자' : '쓰레기 여자',
        '취급을 받고 있었다!?',
      ]);
      printButton('「내가 뭘 했는데?!」', 1);
      await input();
    };
    f.title = '억울하다, 억울해!';
    return f;
  })(),
  work_over: (() => {
    /** @author 雞雞 */
    const f = async () => {
      await printAndWait('트레이너는 고소득 직업이지만 쉬운 일은 아니다.');
      await printAndWait([
        '담당 ',
        get('flag:角色性别') === 1 ? '우마무스코' : '우마무스메',
        '의 트레이닝 외에도 학원 행정, 기자 회견, 재무, 연구 보고서 작성 등 잡무가 끝이 없다.',
      ]);
      println();
      await printAndWait(
        '오늘도 에너지 드링크로 버티며 사무실 책상 아래에서 잠드는 하루다.',
      );
      printButton('「바닥이 딱딱해……」', 1);
      await input();
    };
    f.title = '무상한 야근';
    return f;
  })(),
  sick: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 일어나자마자 머리가 무겁고 졸음이 가시지 않으며, 온몸이 이상했다.',
      ]);
      printButton('「기합으로 버틴다!」', 1);
      printButton('「전화해서 휴가를 내고 병원에 가자……」', 2);
      return [await input()];
    };
    f.title = '무상한 병';
    return f;
  })(),
  fishing: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (sky, you) => {
      sky.name = '삿갓을 쓴 회색 머리의 ' + sky.uma_sex_title;
      await printAndWait([
        you.get_colored_name(),
        '은(는) 낚싯대를 들고 강가에 갔다가 한 명의 ',
        sky.uma_sex_title,
        '을(를) 만났다.',
      ]);
      await printAndWait([
        sky.sex,
        '은(는) 돌아보지 않고 ',
        you.get_colored_name(),
        '에게 등을 보인 채 말했다.',
      ]);
      println();
      await sky.say_and_wait(
        '냐하하, 우연이네. 만난 것도 인연인데, 마음에 드는 걸 가져가~',
      );
      println();
      await printAndWait([
        you.get_colored_name(),
        '이(가) 보니, 상대 옆에는 낡은 낚싯대와 루어가 놓여 있었다.',
      ]);
      printButton('낚싯대를 고른다 (이번에 잡는 물고기 두 배)', 1);
      printButton('루어를 고른다 (백인자 +20)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 낚싯대를 골랐다. 그러자 무슨 마법이라도 걸린 듯 ',
          you.get_colored_name(),
          '은(는) 놀라운 솜씨를 발휘해 평소의 두 배가 넘는 물고기를 잡았다!',
        ]);
      } else {
        await printAndWait('음? 이 루어의 유선형……');
        await printAndWait([
          '그때 ',
          you.get_colored_name(),
          '에게 영감이 떠올랐다!',
        ]);
      }
      return [ret];
    };
    f.title = '낚시의 요령';
    return f;
  })(),
  ts_shower: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} want_sex 相手が性行為に同意するか
     */
    const f = async (chara, you, want_sex) => {
      const ret = [];
      await printAndWait(['음? ', chara.get_colored_name(), '은(는) 아직인가?']);
      await printAndWait('온 김에 먼저 샤워하자!');
      println();
      await printAndWait([
        '문을 열자 실오라기 하나 걸치지 않은 ',
        chara.get_colored_name(),
        '이(가) 눈에 들어왔다……',
      ]);
      printButton('「오, 같이 씻을까?」', 1);
      printButton('「미안, 방해했네!」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        if (want_sex) {
          await printAndWait('상대는 흔쾌히 수락했다.');
          await printAndWait('서로의 등을 씻어 주었다.');
          await printAndWait([
            '다 씻고 나자 ',
            chara.sex,
            '은(는) 아직 부족하다는 눈빛으로 ',
            you.get_colored_name(),
            '을(를) 바라봤다……',
          ]);
        } else {
          await chara.say_and_wait('바보, 무슨 생각을 하는 거야!');
          await printAndWait([you.get_colored_name(), '은(는) 쫓겨났다……']);
        }
      } else {
        await you.say_and_wait('미안, 방해했네!');
        await printAndWait([
          you.get_colored_name(),
          '은(는) 그렇게 외치며 뛰쳐나갔다.',
        ]);
        await printAndWait([
          '잠시 후, 샤워를 마친 ',
          chara.get_colored_name(),
          '이(가) 얼굴을 붉힌 채 나왔다.',
        ]);
      }
      return ret;
    };
    f.title = '샤워실 안에서';
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
        '점심 시간에 ',
        you.get_colored_name(),
        '과(와)',
        chara.get_colored_name(),
        '은(는) 우연히 옥상에서 만났다.',
      ]);
      await printAndWait([
        '어째서인지 오늘 ',
        chara.get_colored_name(),
        '의 도시락은 유난히 호화로웠다.',
      ]);
      println();
      await chara.say_and_wait([callname, ', 한번 먹어 봐.']);
      await chara.say_and_wait('자신 있는 요리야~');
      println();
      await printAndWait([
        you.get_colored_name(),
        '은(는) 눈앞의 도시락을 받고 사양하지 않고 젓가락을 들었다.',
      ]);
      await printAndWait(['몇 입 맛있게 먹고 나자, 몸이 서서히 뜨거워졌다……']);
      println();
      await printAndWait([
        you.get_colored_name(),
        '이(가) 이상하게 여겨 옆의 ',
        chara.get_colored_name(),
        '을(를) 보니, 상대도 뺨이 붉어져 있었다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '이(가) 무언가 물으려는 순간, 강한 입맞춤에 말이 막혔다.',
      ]);
      println();
      await printAndWait(['입술이 떨어질 때 입가에 긴 실이 남아 있었다.']);
      printButton('「이렇게 된 이상 어쩔 수 없지……」', 1);
      printButton('「참아야 하느니라!」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '옥상인데도 ',
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 계속 서로를 갈구했다.',
        ]);
        await printAndWait([
          '하지만 아직 점심시간이라는 것을 깨닫고 ',
          you.get_colored_name(),
          '은(는) 딴생각하지 않고 ',
          chara.get_colored_name(),
          '의 어깨를 붙잡았다……',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 힘껏 고개를 저어 의지를 되살리고, 도시락을 곧바로 치웠다.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' 앞에서 일어나 도망치듯 옥상을 떠났다……',
        ]);
      }
      return ret;
    };
    f.title = '이상한 점심';
    return f;
  })(),
  breakfast: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara プレイヤーの乳を飲むキャラ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara, you) => {
      await printAndWait([
        '트레이너실에 들어서자 ',
        you.get_colored_name(),
        '은(는) 아침을 먹은 ',
        chara.get_colored_name(),
        '이(가) 우유를 마시는 모습을 보았다.',
      ]);
      await printAndWait('저 병 포장…… 어디서 본 것 같은데……');
      await printAndWait([
        '게다가 ',
        chara.get_colored_name(),
        '의 눈빛이 어째서인지 조금 이상하다……',
      ]);
      await printAndWait('……기분 탓이겠지.');
    };
    f.title = '「아침 식사」';
    return f;
  })(),
  or_riverside_walk: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '강둑에서 잠시 시간을 보낸 뒤 ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 돌아가기 시작했다.',
      ]);
      await printAndWait('부드러운 바람이 두 사람의 얼굴을 스쳐 기분 좋다.');
      printButton('「슬슬 돌아갈까?」', 1);
      printButton('「조금 늦은 시간이네」', 2);
      await input();
      await printAndWait([
        you.get_colored_name(),
        '이(가) 말하는 동안 옆의 ',
        chara.get_colored_name(),
        '은(는) 조용히 이쪽으로 시선을 돌리고 살며시 어깨를 붙여 왔다.',
      ]);
      println();
      await printAndWait('천천히 나란히 걷는 길에는 사람이 거의 없었다.');
      await chara.say_and_wait('조용하네……');
      await printAndWait([
        '무언가 알아차렸는지 ',
        chara.get_colored_name(),
        '은(는) 걸음을 늦췄다.',
      ]);
      println();
      await printAndWait([
        '옆의 ',
        chara.get_colored_name(),
        '이(가) 멈춘 것을 알아차리고 ',
        you.get_colored_name(),
        '도 걸음을 멈추고 돌아보았다.',
      ]);
      printButton('「왜 그래?」', 1);
      await input();
      await chara.say_and_wait('잠깐 눈을 감아 줄래?');
      await printAndWait([
        '영문 모를 부탁에 ',
        you.get_colored_name(),
        '은(는) 조금 당황했지만 그래도 눈을 감았다.',
      ]);
      println();
      await printAndWait(
        '귓가로 바람이 지나가고, 서늘함 속에 한 줄기 온기가 섞였다.',
      );
      await printAndWait([
        '눈을 뜨지 않아도 ',
        you.get_colored_name(),
        '은(는) 무슨 일이 일어났는지 알았다.',
      ]);
      await printAndWait(
        '두 팔이 몸을 감싸고 얼굴에 따뜻하고 촉촉한 감촉이 닿았다.',
      );
      println();
      await chara.say_and_wait('……자, 돌아가자.');
      await printAndWait([
        '다시 눈을 뜨자 ',
        chara.get_colored_name(),
        '은(는) 조용히 ',
        you.get_colored_name(),
        '앞에 서 있었다.',
      ]);
      await printAndWait(
        '뺨에는 아직 옅은 붉은빛이 남았지만, 미소 지으며 두 걸음 물러났다.',
      );
      printButton('「돌아가자.」 (호감 +10)', 1);
      printButton('「……조금 더 늦게 돌아가도……」 (연모 +1)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          chara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '의 따뜻한 손을 잡고 안심하며 걸었다.',
        ]);
        await you.say_and_wait('아까 그 감촉은 대체 뭐였을까……', true);
      } else {
        await chara.say_and_wait('조금만 더……');
        await chara.say_and_wait('그러니까……');
        await printAndWait([
          '얼굴을 붉힌 ',
          chara.get_colored_name(),
          '을(를) 앞에 두고 ',
          you.get_colored_name(),
          '은(는) 그저 웃었다.',
        ]);
        await printAndWait([
          '오늘은 ',
          chara.get_colored_name(),
          '을(를) 조금 더 놀게 놔 두자.',
        ]);
      }
      return ret;
    };
    f.title = '강둑 산책';
    return f;
  })(),
  os_is_movie_right: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '원래는 ',
        chara.get_colored_name(),
        '과(와) 상점가를 돌아다닐 생각이었지만, 뜻밖의 광고를 보았다.',
      ]);
      println();
      await you.say_as_passer_by_and_wait('광고', [
        chara.uma_sex_title,
        '의 성장을 완벽하게 그린 최신작!',
      ]);
      println();
      await printAndWait([
        '들어 본 적은 없었지만 ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 호기심에 표를 사서 들어갔다.',
      ]);
      await printAndWait(
        '좌석에 앉아, 조명이 꺼지고 이야기가 시작되기를 조금 기대하며 기다렸다.',
      );
      await printAndWait(
        "화면의 완성도는 최신작다운 수준이었지만, '성장'을 그리는 방식은 예상 밖이었다.",
      );
      println();
      await you.say_as_passer_by_and_wait('배우', '트레이너, 당신 덕분에……');
      await you.say_as_passer_by_and_wait(
        '배우 ',
        '트레이너 덕분에 지금의 저는……',
      );
      println();
      await printAndWait([
        '화면은 조금 과장되어 있었고 ',
        you.get_colored_name(),
        '은(는) 어딘가 아닌 것 같았다.',
      ]);
      await printAndWait('이게 정말 성장 과정인가?');
      println();
      await printAndWait([
        '위화감을 느낀 ',
        you.get_colored_name(),
        '은(는) 나머지는 보지 않아도 되겠다고 ',
        chara.get_colored_name(),
        '에게 말하려고 돌아보았다.',
      ]);
      println();
      await chara.say_and_wait('……');
      println();
      await printAndWait('팔 위에 따뜻한 감촉이 얹혔다.');
      await printAndWait([
        '옆의 ',
        chara.get_colored_name(),
        '이(가) 살며시 ',
        you.get_colored_name(),
        '의 손을 잡았다.',
      ]);
      println();
      await chara.say_and_wait('……벌써 가려고?');
      println();
      await printAndWait([
        '어두운 영화관 안에서 ',
        chara.get_colored_name(),
        '의 얼굴만 유난히 선명하게 보였다.',
      ]);
      await printAndWait([
        '포개진 손이 ',
        you.get_colored_name(),
        '의 팔 위에 놓이고, 어깨에 살짝 기댔다.',
      ]);
      println();
      await printAndWait(
        '화면은 더 이상 두 사람의 마음에 남지 않고, 시선은 서로에게 고정되었다.',
      );
      await printAndWait(
        '스크린의 희미한 빛이 서로의 얼굴을 비추고 눈동자에서 반짝였다.',
      );
      println();
      await chara.say_and_wait([callname, '……']);
      await chara.say_and_wait('저……');
      await you.say_as_passer_by_and_wait('배우 ', '좋아해요!');
      println();
      await printAndWait('영화가 절정에 이르러 두 사람의 움직임을 가로막았다.');
      await printAndWait([
        '목소리가 ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '사이를 채우고, 시선에 조금 어색함이 섞였다.',
      ]);
      printButton('「……진정하자」 (의욕 상승, 호감 +10)', 1);
      printButton('「……같이 나가자」 (의욕 대폭 상승, 연모 +1)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait('영화는 끝을 향해 가고, 조명도 때맞춰 켜졌다.');
        await printAndWait([
          '밝은 빛이 ',
          you.get_colored_name(),
          '의 어색한 얼굴을 비추자 ',
          you.get_colored_name(),
          '은(는) 가볍게 헛기침했다.',
        ]);
        println();
        await chara.say_and_wait('……응.');
        println();
        await printAndWait([
          '아직 포개져 있던 손이 이번에는 ',
          you.get_colored_name(),
          '을(를) 잡고 함께 일으켰다.',
        ]);
        await printAndWait([
          '아쉬움은 있었지만 순순히 일어나 ',
          you.get_colored_name(),
          '의 뒤를 따라왔다.',
        ]);
      } else {
        await printAndWait([
          '영화가 절정에 이른 와중에도 ',
          you.get_colored_name(),
          '은(는) 그 틈으로 말을 전했다.',
        ]);
        await printAndWait([
          '분위기에 휩쓸려 말해 버린 ',
          chara.get_colored_name(),
          '은(는) 잠시 굳었다가 곧 스스로 뒤로 물러났다.',
        ]);
        await printAndWait([
          '반면',
          you.get_colored_name(),
          '의 표정은 부드러워졌고, 천천히 앞으로 다가갔다.',
        ]);
        await printAndWait([
          '입술이 포개지고 ',
          chara.get_colored_name(),
          '의 놀람과 부끄러움을 가슴 깊이 밀어 넣으며 행복을 맛보았다.',
        ]);
        println();
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '의 손을 잡고 조용히 영화관을 나섰다.',
        ]);
        await printAndWait([
          '얼굴이 새빨개진 ',
          chara.get_colored_name(),
          '을(를) 데리고 눈앞의 여관을 바라보다, 천천히 ',
          chara.sex,
          '의 어깨를 감싸고 안으로 들어갔다……',
        ]);
      }
      return ret;
    };
    f.title = '이 영화, 맞는 거야?';
    return f;
  })(),
  privacy_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan|false} money 売れば得られる代金
     */
    const f = async (you, money) => {
      await printAndWait([
        '일어나 보니 ',
        you.get_colored_name(),
        '의 개인 계정에 연락이 와 있었다. 앞으로 나오는 물건을 모두 사고 싶다는 내용이었다.',
      ]);
      printButton('(취향이 이상한 사람이 있겠지…… 돈만 되면 돼)', 1);
      printButton('(지정한 주소로 보내라니…… 수상해, 그만두자)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), '은(는) 송금받았다.']);
        await printAndWait(
          '상대는 다음에도 같은 주소로 보내고, 물건이 생기면 우선 연락해 달라고 했다.',
        );
        if (money) {
          await printAndWait(['대금으로', money, '우마 코인을 얻었다……']);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 상대의 말이 수상하게 느껴졌다. 배송지도 트레센 학원에서 그리 멀지 않았다.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 정중히 거절했다. 하지만 상대는 포기하지 않고, 물건이 생기면 연락해 달라며 더 비싸게 사겠다고 했다.',
        ]);
      }
      return [ret];
    };
    f.title = '개인정보 보안 (첫 번째?)';
    return f;
  })(),
  privacy_2_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 乳を買うキャラ
     */
    const f = async (you, chara) => {
      await printAndWait([
        '트레이너실에서 ',
        chara.get_colored_name(),
        '은(는) 스마트폰을 만지다가 ',
        you.get_colored_name(),
        '을(를) 보자마자 치워 버렸다. ',
        you.get_colored_name(),
        '에게 숨기는 듯하다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '의 스마트폰도 한 번 진동하며 메시지 알림이 왔다.',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 코를 킁킁거리며 ',
        you.get_colored_name(),
        '의 몸에서 낯선 냄새가 난다고 말했다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 신경 쓰지 않았다. ',
        chara.uma_sex_title,
        '은(는) 예민하니까.',
      ]);
      await printAndWait('……');
      await printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 눈이 닿지 않는 곳에서 ',
        chara.get_colored_name(),
        '의 눈빛이 이상해진 것도 알아차리지 못했다.',
      ]);
    };
    f.title = '개인정보 보안 (두 번째?!)';
    return f;
  })(),
  privacy_2_2: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan|false} money 売れば得られる代金
     */
    const f = async (you, money) => {
      await printAndWait([
        '상대가 또 연락해 왔다. ',
        you.get_colored_name(),
        '에게 물건을 넘겨 달라고 했다.',
      ]);
      await printAndWait(
        '이런 물건의 애호가인 듯, 무언가 쓸 곳이라도 있는 것처럼 조급해했다.',
      );
      printButton('(요즘 주머니가 가벼운데…… 역시 할까?)', 1);
      printButton('(……수상해, 그만두자)', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '돈이 없으면 아무것도 할 수 없다. 이제 와서 누가 ',
          you.get_colored_name(),
          '을(를) 탓할 수 있을까.',
        ]);
        await printAndWait([
          '숨길 생각으로 ',
          you.get_colored_name(),
          '은(는) 상대의 요구에 응하기로 했다.',
        ]);
        if (money) {
          await printAndWait(['대금으로', money, '우마 코인을 얻었다……']);
        }
      } else {
        await printAndWait(
          '이렇게 가까운 배송지에, 이 정도로 조급해하다니. 역시 수상하다. 상대하지 않아도 된다.',
        );
        await printAndWait([
          '그렇게 생각하며 ',
          you.get_colored_name(),
          '은(는) 상대를 차단했다.',
        ]);
      }
      return [ret];
    };
    f.title = '개인정보 보안 (두 번째!?)';
    return f;
  })(),
  privacy_3: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 乳を買うキャラ
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (you, chara, callname) => {
      const ret = [];
      await printAndWait([
        '트레이닝 뒤, ',
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 시간이 있는지 물으며 어딘가 가고 싶다고 했다.',
      ]);
      printButton('「마침 예정도 없으니 가자.」', 1);
      printButton('「그만두자. 너무 늦은 시간이야.」', 2);
      ret.push(await input());
      if (ret.at(-1) === 1) {
        await printAndWait([
          chara.get_colored_name(),
          '의 발걸음은 점점 가벼워졌다. 하지만 ',
          you.get_colored_name(),
          '은(는) 볼수록 낯익었다.',
        ]);
        await printAndWait('예전 구매자의 배송지와 똑같은 곳이다!');
        await chara.say_and_wait([
          callname,
          '은(는) 개인정보에 무심하네. 아무것도 유출하지 않았다고 생각해도 IP는 학원 안이잖아~',
        ]);
        await chara.say_and_wait([
          '하지만 괜찮아, ',
          callname,
          '의 일은 이미 정리해 뒀어. 여기 사람이 ',
          callname,
          '에게 나쁜 짓을 하려던 모양이야.',
        ]);
        await chara.say_and_wait([
          '다만, ',
          callname,
          '에게 교훈을 남기려면 몸으로 제대로 기억하게 해야지——',
        ]);
        await chara.say_and_wait('——우리는 한 몸이나 마찬가지니까.');
        await printAndWait('……');
        printButton(`${chara.sex}을(를) 꼭 안아 감사를 전한다. (호감 +25)`, 1);
        printButton(`${chara.sex}을(를) 데리고 돌아가 제대로 감사한다.`, 2);
        ret.push(await input());
      } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
        await printAndWait('손목에 부드럽지만 거스를 수 없는 힘이 가해졌다.');
        await printAndWait([
          you.get_colored_name(),
          '은(는)',
          chara.get_colored_name(),
          '에게 끌려 돌아가 아직 잠기지 않은 트레이너실로 밀려 들어갔고, 문은 안에서 잠겼다.',
        ]);
        if (get('flag:惩戒力度') === 3) {
          await chara.say_and_wait([
            '이미 ',
            chara.uma_sex_title,
            '의 소유물인데.',
          ]);
          await chara.say_and_wait(
            '이 몸을 마음대로 할 권리가 자신에게 있다고 생각해?',
          );
          await chara.say_and_wait('네 입장을 확실히 알려 줄 필요가 있겠네.');
          await chara.say_and_wait('뭘 보고 있어? 옷은 스스로 못 벗어!');
          await printAndWait([
            '영문 모를 시선 아래, ',
            you.get_colored_name(),
            '은(는) 조금씩 옷을 벗었다.',
          ]);
          await printAndWait(
            '맨 먼저 트레이너의 신분을 나타내는 배지, 마지막에는 개인의 은밀한 영역인 속옷이었다.',
          );
          await chara.say_and_wait('그것뿐이야? 이런 잘못을 저질러 놓고……');
          await printAndWait([
            chara.get_colored_name(),
            '이(가) 말을 끝내기도 전에 임신 주머니의 몸은 알아들었다.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '은(는) 옷을 옆으로 내던지고 가장 올바른 자세로 머리를 조아리며, 성기를 감추지 않고 상대에게 드러냈다.',
          ]);
          await printAndWait('몸이 뜨거워……');
          await printAndWait([
            chara.uma_sex_title,
            '님에게 꾸중을 들어서일까……',
          ]);
          await printAndWait(
            '아니면 이렇게 다뤄지기를 기대해서 처음부터 이런 짓을 한 건가?',
          );
          await printAndWait('머리도 몸도 뜨거워져 생각할 수가 없다.');
          await printAndWait('이제는 행동으로 사과할 수밖에 없다.');
          await printAndWait('눌린 말귀까지 바닥에 납작 엎드려 있다.');
        } else {
          await chara.say_and_wait([
            callname,
            '도 매일 몸 때문에 곤란하지? 알아～',
          ]);
          await chara.say_and_wait('참, 말만 했으면 도와줬을 텐데.');
          await printAndWait([
            you.get_colored_name(),
            '은(는) ',
            chara.get_colored_name(),
            '이(가) 벌써 다급하게 자신의 옷을 벗겨 내기 시작했음을 느꼈다.',
          ]);
          await chara.say_and_wait(
            '매번 혼자 처리하는 건 귀찮잖아…… 괜찮아, 그런 건 이제 끝이야. 오늘도, 아니, 앞으로도……',
          );
          await chara.say_and_wait('제대로 내가 처리해 줄게.');
          await chara.say_and_wait(
            '인터넷 개인정보도 지키지 않고 모유 판매 링크를 버젓이 올리다니.',
          );
          await chara.say_and_wait('그건 트레이너가 욕구불만이라는 암시잖아?');
          await chara.say_and_wait('몸에 힘 빼도 돼?');
          await printAndWait([
            you.get_colored_name(),
            '은(는) 아직 변명하고 싶었지만, 발정한 ',
            chara.uma_sex_title,
            '이(가) ',
            you.get_colored_name(),
            '의 뒷말을 들을 리 없었다.',
          ]);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '에게 트레이너 기숙사로 끌려갔다.',
        ]);
        await chara.say_and_wait([
          callname,
          '은(는) 힘들겠네. 부업까지 해야 생활할 수 있다니.',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 귀를 내리고 ',
          you.get_colored_name(),
          "의 '사생활'을 어느 정도 알고 있는 듯했다.",
        ]);
        await chara.say_and_wait(
          '곤란한 일이 있으면 꼭 말해. 나는 반드시 네 편이니까!',
        );
        await chara.say_and_wait([
          '전에 ',
          callname,
          '이(가) 인터넷에서 추적당해 누군가에게 시달릴 뻔했던 모양이야.',
        ]);
        await chara.say_and_wait('하지만 안심해, 내가 이미 처리했으니까~');
        await chara.say_and_wait('곤란한 일이 있으면 꼭 말해 줘!');
        await printAndWait([
          chara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '을(를) 끌어안았다.',
        ]);
        if (get('cflag:0:身高') - get(`cflag:${chara.id}:身高`) > 20) {
          await printAndWait([
            '혀로도 이어서 ',
            you.get_colored_name(),
            '의 목을 핥으며, ',
            you.get_colored_name(),
            '을(를) 간지럽혔다.',
          ]);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '의 목덜미에 깊이 얼굴을 묻었고, 그것이',
            chara.sex,
            '이(가) ',
            you.get_colored_name(),
            '을(를) 위해 움직인 보상인 듯했다.',
          ]);
        }
        await chara.say_and_wait([callname, ', 다음 주에 봐. 푹 쉬어!']);
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 그대로 ',
          you.get_colored_name(),
          '을(를) 기숙사 입구까지 데려다주고 ',
          you.get_colored_name(),
          '과(와) 헤어졌다.',
        ]);
      }
      return ret;
    };
    f.title = '개인정보 보안 (세 번째?)';
    return f;
  })(),
  strange_day: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 巻き込まれた担当。アグネスタキオンの場合あり
     * @param {CharaTalk|false} tachyon アグネスタキオン。chara がアグネスタキオンなら false
     * @param {CharaTalk|false} minoru 駿川たづな / ハーベストタイム。chara がその場合は false
     * @param {CharaTalk|false} doto メイショウドトウ。chara がその場合は false
     * @param {CharaTalk|false} maya マヤノトップガン。chara がその場合は false
     * @param {CharaTalk|false} sky セイウンスカイ。chara がその場合は false
     */
    const f = async (you, chara, tachyon, minoru, doto, maya, sky) => {
      await printAndWait([
        '아침, ',
        you.get_colored_name(),
        '은(는) 어딘가 이상하다고 느끼면서도 알찬 하루를 맞이할 생각이었다.',
      ]);
      await you.say_and_wait('(ง •̀_•́)ง');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 깊이 신경 쓰지 않고 준비를 마친 뒤 나섰다.',
      ]);
      println();
      if (minoru) {
        await minoru.say_and_wait('Y(^_^)Y');
        await printAndWait([
          minoru.sex,
          '은(는) 여전히 교문에서 한 명 한 명을 맞이하고 있다.',
        ]);
        println();
      }
      await you.say_and_wait('……？', true);
      await you.say_and_wait('目_目');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 꺼림칙함을 느꼈지만 말로 표현할 수 없었다.',
      ]);
      println();
      if (doto) {
        await doto.say_and_wait('(๑•́ωก̀๑)');
        await printAndWait([doto.sex, '은(는) 또 울고 있나?']);
        println();
      }
      if (maya) {
        await maya.say_and_wait('(～0～)');
        await printAndWait('이 아이, 또 밤을 샜구나.');
        println();
      }
      if (sky) {
        await sky.say_and_wait('<(*ΦωΦ*)>');
        await printAndWait('……그 표정은 뭐지.');
        println();
      }
      await you.say_and_wait('……!', true);
      await you.say_and_wait('(#ﾟДﾟ)');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 마침내 알아차렸다. 오는 동안 한마디도 들리지 않았다. 대신 이모티콘이 머릿속에 떠올랐다.',
      ]);
      await you.say_and_wait('……', true);
      await you.say_and_wait('(#`皿´)');
      println();
      if (tachyon) {
        await printAndWait(
          '머릿속에 매일 백의를 입는 그 악덕 상인이 떠올랐다.',
        );
        await you.say_and_wait('(‡▼益▼)');
        await printAndWait([
          '또 ',
          tachyon.sex,
          '의 실험인가. ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '을(를) 찾으러 가기로 했다.',
        ]);
        println();
        await chara.say_and_wait('(｢･ω･)｢헤이');
        printButton('「(｢･ω･)｢헤이」', 1);
        printButton('「ヾ(＾。^*)」', 2);
        await input();
        await chara.say_and_wait('( •᷄ὤ•᷅)？');
        await printAndWait([
          '아무래도 ',
          you.get_colored_name(),
          '이(가) 무슨 짓을 하는지 모르는 듯하다.',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '에게 손을 뻗었다.',
        ]);
        await chara.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
        printButton(`지금의 상태를 ${chara.sex}에게 설명한다.`, 1);
        await input();
        await you.say_and_wait('(´ﾟωﾟ｀)');
        await you.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
        await you.say_and_wait('₍₍◞( •௰• )◟₎₎');
        await printAndWait('한동안 손발을 움직이며 설명했다.');
        await you.say_and_wait('╮（╯＿╰）╭');
        println();
        await chara.say_and_wait('【•】_【•】');
        await chara.say_and_wait('(ノ=Д=)ノ┻━┻');
        println();
        await printAndWait([
          '잠시 후, ',
          chara.sex,
          '은(는) 겨우 뜻을 이해하고 ',
          you.get_colored_name(),
          '과(와) 동행해 주었다.',
        ]);
        drawLine();
        await printAndWait(['금새 ', tachyon.sex, '의 연구실에 도착했다.']);
        await tachyon.say_and_wait('(¦3[▓▓]');
        await you.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
        await tachyon.say_and_wait('Σ(っ °Д °;)っ');
        await chara.say_and_wait('(ಡωಡ)');
        drawLine({ content: '잠시 설명했다' });
        await tachyon.say_and_wait('(//▽//)');
        await tachyon.say_and_wait('～(￣▽￣～)～');
        await printAndWait([
          '마지막으로 ',
          you.get_colored_name(),
          '에게 느낌을 기록하게 한 뒤 해독제와 보상을 건넸다.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 매일 실험만 하는 애마를 떠올렸다.',
        ]);
        await you.say_and_wait('(๑•ี_เ•ี๑)');
        drawLine();
        await printAndWait([
          you.get_colored_name(),
          '은(는) 익숙한 발걸음으로 ',
          chara.sex,
          '의 연구실을 찾아갔다.',
        ]);
        await chara.say_and_wait('⊙▽⊙');
        await you.say_and_wait('(^_^)');
        await chara.say_and_wait('Σ(っ °Д °;)っ');
        await printAndWait('애마 TV, 당당히 개막!');
        await chara.say_as_unknown_and_wait('아우(∩∀°╭아우∀∀아우∀∀°)아우아우');
        drawLine({ content: '(톰 선생님의 더빙에 감사드립니다)' });
        await chara.say_and_wait('≥﹏≤');
        await you.say_and_wait('╮（﹀＿﹀）╭');
      }
    };
    f.title = '이상한 하루';
    return f;
  })(),
  strange_day2: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 巻き込まれたキャラ。アグネスタキオンにはならない
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {PrintedSpan} callname キャラからあなたへの呼び方
     * @param {PrintedSpan} callname_32 アグネスタキオンからあなたへの呼び方
     * @param {string[]} med_list 薬のリスト。「名称 × 数量」形式
     */
    const f = async (you, chara, tachyon, callname, callname_32, med_list) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 평소처럼 일어났다가 또 몸이 이상하다는 것을 깨달았다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 주위를 둘러봤지만 달라진 것은 없었다.',
      ]);
      await printAndWait('다만…… 손이 근질거려 무언가 하고 싶다……');
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
            { content: '그럼 무엇을 조사해볼까?', type: 'text' },
            { config: { width: 8 }, type: 'divider' },
          ],
          [
            {
              config: { width: 3 },
              content: '벽벽벽벽벽',
              type: 'text',
            },
            {
              accelerator: 1,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '창',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '벽벽벽벽벽',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '벽', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '===',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '벽',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '벽', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '사람들',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '벽',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '벽', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '바닥',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '벽',
              type: 'text',
            },
          ],
          [
            { config: { width: 6 }, content: '벽', type: 'text' },
            {
              accelerator: 3,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '탁',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '벽',
              type: 'text',
            },
          ],
          [
            { config: { width: 1 }, content: '벽', type: 'text' },
            {
              accelerator: 4,
              config: { width: 1, showAcc: false },
              content: '거',
              type: 'button',
            },
            {
              config: { align: 'right', width: 6 },
              content: '벽',
              type: 'text',
            },
          ],
          [
            { config: { width: 7 }, content: '벽', type: 'text' },
            {
              accelerator: 5,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '욕',
              type: 'button',
            },
          ],
          [
            { config: { width: 3 }, content: '벽벽벽벽', type: 'text' },
            {
              accelerator: 6,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '현 관',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '벽벽벽벽',
              type: 'text',
            },
          ],
          [{ config: { width: 8 }, type: 'divider' }],
        );
        switch (await input()) {
          case 1:
            switch (++check_times_in_a[0]) {
              case 1:
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 창문을 열었다.',
                ]);
                await printAndWait('밖에서는 새가 지저귀고 꽃이 피어 있었다.');
                await printAndWait([
                  you.get_colored_name(),
                  '같은 트레이너는…… 집에서 하루 종일 자라는 듯한 날이다.',
                ]);
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 창문을 닫아 바깥 소리를 차단했다.',
                ]);
                await printAndWait([
                  '아쉽지만,',
                  you.get_colored_name(),
                  '에게는 일이 있어 아직 쉴 수 없다.',
                ]);
                break;
              default:
                await printAndWait('창문을 여닫는 게 재미있나?');
            }
            break;
          case 2:
            switch (++check_times_in_a[1]) {
              case 1:
                await printAndWait('크고 푹신한 침대다. ');
                await printAndWait('……그런데 왜 더블 침대를 샀지?');
                break;
              case 2:
                await printAndWait('……왜 여기에 말꼬리 털이 있지?');
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 냄새를 맡아 보았다.',
                ]);
                await printAndWait('……익숙한 냄새다. ');
                await printAndWait('【말꼬리 털】을 얻었다.');
                horse_hair = true;
                break;
              default:
                await printAndWait([
                  '크고 편안한 침대…… 편안한 것은 ',
                  you.get_colored_name(),
                  '만이 아닌 듯하다.',
                ]);
            }
            break;
          case 3:
            switch (++check_times_in_a[2]) {
              case 1:
                await printAndWait(
                  '침대 옆 선반이다. 소중한 사진 몇 장이 놓여 있다.',
                );
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 뒤져 보았지만 아무것도 찾지 못했다.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 누군가의 목소리를 들은 듯했다.',
                ]);
                await you.say_as_unknown_and_wait('……왜 집 안을 뒤지고 있지?');
                await printAndWait('……기분 탓이기를 바란다.');
                break;
              case 3:
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 꼼꼼히 살펴보다……구석에서 10 우마 코인을 발견했다.',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  '은(는) 만족하며 자리를 떠났다.',
                ]);
                await printAndWait('10 우마 코인을 얻었다.');
                // FLAGNAME:16 = 現在のウマコイン
                add('flag:16', 10);
                break;
              default:
                await printAndWait('소중한 사진 한 장만 있을 뿐이다.');
            }
            break;
          case 4:
            switch (++check_times_in_a[3]) {
              case 1:
                await printAndWait([
                  '이것이 ',
                  you.get_colored_name(),
                  '. 평범한 얼굴, 소박한 배지, 수수한 옷.',
                ]);
                break;
              case 2:
                await printAndWait(
                  '멋진 얼굴에 단정한 옷, 빛나는 배지를 단 트레이너다.',
                );
                await printAndWait('……예쁘잖아.');
                break;
              case 3:
                await printAndWait([
                  '거울 속 인물은 더 칭찬할 말도 없어, 말없이 ',
                  you.get_colored_name(),
                  '을(를) 바라보고 있다.',
                ]);
                await printAndWait('……어딘가 이상하지 않나?');
                await printAndWait('눈을 깜빡이니 평소와 같았다.');
                break;
              case 4:
                // 巻き込まれたのがマンハッタンカフェ、コパノリッキー、サンデーサイレンスの場合、超常現象が起きる
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait([
                    you.get_colored_name(),
                    '은(는) 거울을 향해 웃었다.',
                  ]);
                  await printAndWait([
                    '거울 속 인물도 갑자기 ',
                    you.get_colored_name(),
                    '을(를) 향해 웃기 시작했다……',
                  ]);
                  await printAndWait('……다만 입꼬리가 귀 뒤까지 찢어져 있다.');
                  await printAndWait([
                    you.sex,
                    '은(는) 거울틀에 손을 걸고 힘을 주기 시작했다.',
                  ]);
                  await printAndWait([
                    you.get_colored_name(),
                    '……무서워서 움직일 수 없나?',
                  ]);
                  await printAndWait([
                    you.sex,
                    '의 얼굴이 커져 바로 눈앞까지 다가왔다.',
                  ]);
                  await printAndWait([
                    '……',
                    you.sex,
                    '이(가) ',
                    you.get_colored_name(),
                    '의 얼굴을 똑똑히 볼 때까지.',
                  ]);
                  await printAndWait(['……', you.sex, '은(는) 도망쳤다.']);
                  await printAndWait('지금 거울 속은 텅 비어 있다.');
                  await printAndWait([
                    you.get_colored_name(),
                    '은(는) 하품했다.',
                  ]);
                } else {
                  await printAndWait(['이것이', you.get_colored_name(), '。']);
                }
                break;
              default:
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait(
                    '거울 속에는 아무것도 없다…… 언제 돌아올지 알 수 없다.',
                  );
                  await printAndWait([
                    you.get_colored_name(),
                    '은(는) 몸단장을 하고 싶었을 뿐인데.',
                  ]);
                } else {
                  await printAndWait(['이것이 ', you.get_colored_name(), '.']);
                }
            }
            break;
          case 5:
            flag_b = true;
            await printAndWait([
              you.get_colored_name(),
              '은(는) 화장실 문을 밀고 안으로 들어갔다.',
            ]);
            b_line = getLineCount();
            while (flag_b) {
              printInColRows(
                [
                  {
                    content: [
                      you.get_colored_name(),
                      '은(는) 주변을 내려다보았다. 어디부터 살펴볼까?',
                    ],
                    type: 'text',
                  },
                  { config: { width: 6 }, type: 'divider' },
                ],
                [
                  { config: { width: 3 }, content: '벽벽벽벽', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '벽벽벽벽',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 1 }, content: '벽', type: 'text' },
                  {
                    accelerator: 1,
                    config: { width: 2, showAcc: false },
                    content: '변기',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '벽',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '벽', type: 'text' },
                  {
                    accelerator: 2,
                    config: { align: 'right', width: 2, showAcc: false },
                    content: '욕조',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 1 },
                    content: '벽',
                    type: 'text',
                  },
                ],
                [
                  {
                    accelerator: 3,
                    config: { width: 3, showAcc: false },
                    content: '방',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '벽',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '벽벽벽벽', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '벽벽벽벽',
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
                      '은(는) 누군가 지켜보는 듯한 기분이 들었다…… 둘러봐도 아무도 없었다.',
                    ]);
                    print('소변이 마렵다. 소변을 볼까?');
                    printButton('본다', 1);
                    printButton('그만둔다', 2);
                    if ((await input()) === 1) {
                      await printAndWait([
                        '……기분 탓인가? ',
                        you.get_colored_name(),
                        '은(는) 변기가 말하는 것 같았다.',
                      ]);
                      await printAndWait('……');
                      await printAndWait('……');
                      await printAndWait([
                        you.get_colored_name(),
                        '은(는) 희미하게 이런 말을 들었다.',
                      ]);
                      await you.say_as_unknown_and_wait('으으……더러워졌어……');
                      await you.say_and_wait('……기분 탓이겠지.', true);
                      check_times_in_b[0] = false;
                    }
                  } else {
                    await printAndWait('변기가 우는 것 같다…… 나중에 사과하자.');
                  }
                  break;
                case 2:
                  if (check_times_in_b[1]) {
                    await printAndWait('욕조다. 들어가면 기분 좋다.');
                    check_times_in_b[1] = false;
                  } else {
                    await printAndWait([
                      you.get_colored_name(),
                      '은(는) 희미하게 이런 말을 들은 듯했다.',
                    ]);
                    await you.say_as_unknown_and_wait(
                      '살펴보지 마. 화장실이 허전하지 않게 두었을 뿐이야.',
                    );
                    await printAndWait('……참으로 기묘하다.');
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
      await printAndWait(
        '현관문을 밀고 나오니, 어째서인지 오늘은 출발이 유난히 늦다.',
      );
      await printAndWait('시계를 보니 벌써 지각하기 직전이다.');
      if (horse_hair) {
        await printAndWait([
          you.get_colored_name(),
          '은(는) 현관문을 보며 바꾸는 편이 좋을지 생각했다.',
        ]);
        await you.say_as_passer_by_and_wait('문', '상관 없어.');
        await you.say_and_wait('……이제 시치미를 뗄 생각도 없나?', true);
      }
      println();
      await printAndWait([you.get_colored_name(), '은(는) 거리로 나갔다.']);
      await printAndWait([
        you.get_colored_name(),
        '은(는) 또 ',
        tachyon.get_colored_name(),
        '에게 약을 먹여졌다고 느꼈다.',
      ]);
      await printAndWait('이번에는 무슨 효과지?');
      print(
        [
          { content: ' ', isDivider: true },
          '지붕지붕지붕지붕지붕지붕',
          { isBr: 2 },
          '너',
          { isBlank: 8 },
          '빵',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: 2 },
          { isBlank: 6 },
          '나무',
          { isBlank: 6 },
          '나무',
          { isBlank: 6 },
          '나무',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        you.get_colored_name(),
        '은(는) 정확히 노리고 있던 ',
        chara.get_colored_name(),
        '과(와) 마주쳤다!',
      ]);
      print('거리가 가깝다. 어떻게 할까?');
      printButton('도망친다', 1);
      printButton('침착하게 대응한다', 2);
      await input();
      await printAndWait([
        '……',
        chara.sex,
        '은(는) 이미 ',
        you.get_colored_name(),
        '을(를) 똑바로 보고 있어 무엇을 해도 소용없다!',
      ]);
      print(
        [
          { content: ' ', isDivider: true },
          '지붕지붕지붕지붕지붕지붕',
          { isBr: 2 },
          '너',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: true },
          { isBlank: 4 },
          '빵',
          { isBr: true },
          { isBlank: 6 },
          '나무',
          { isBlank: 6 },
          '나무',
          { isBlank: 6 },
          '나무',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        chara.sex,
        '은(는) ',
        you.get_colored_name(),
        '에게 달려들었다.',
      ]);
      await chara.say_and_wait(['미안,', callname, '! 실수했어!']);
      await chara.say_and_wait('지각할 것 같아서 그만 빨리 달렸네.');
      await chara.say_and_wait('착각이겠지……', true);
      await printAndWait('입으로는 그렇게 말하면서도 몸은 움직이지 않았다.');
      await you.say_and_wait('괜찮아, 조심하면 돼.');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 눈앞에서 자신의 냄새를 맡기 시작한 ',
        chara.uma_sex_title,
        '을(를) 보고 장난기가 생겼다.',
      ]);
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        chara.sex,
        '에게 지금 상황을 이야기했다.',
      ]);
      await printAndWait([chara.sex, '은(는) 얼굴이 새빨개졌다.']);
      await chara.say_and_wait('……');
      await chara.say_and_wait('착각이겠지……', true);
      await chara.say_and_wait('……읏, 지각하겠다. 먼저 갈게……');
      await printAndWait([chara.sex, '은(는) 돌아보지 않고 달려갔다.']);
      await you.say_and_wait('귀엽네.');
      if (horse_hair) {
        await you.say_as_passer_by_and_wait(
          '말꼬리 털',
          '확실히 귀엽지. 앞으로도 그렇게 생각해 주면 좋겠네.',
        );
        await you.say_and_wait('？？？');
      }
      drawLine();
      await printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 연구실에 도착했다.',
      ]);
      if (get('cflag:32:招募状态') === 1) {
        await printAndWait([
          tachyon.sex,
          '은(는) 등을 돌리고 하얀 플라스틱 의자에 앉아 있다?',
        ]);
        await tachyon.say_and_wait('오지 말았어야 했어.');
        await you.say_and_wait('또 뭘 먹인 거야. 해독제 내놔.');
        await tachyon.say_and_wait('우리가 몇 번이나 싸웠지?');
        await you.say_and_wait('……');
        await tachyon.say_and_wait('원한다면 직접 가져가.');
        await you.say_and_wait('계속 장난칠 거면 점심은 없어.');
        await printAndWait([
          tachyon.get_colored_name(),
          '은(는) 빛의 속도로 무릎을 꿇었다.',
        ]);
        await printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          '의 허벅지에 매달려 속으로 기대하고 있다.',
        ]);
        await tachyon.say_and_wait(['으아앙, 그러지 마, ', callname_32, '.']);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 해독제로 다가가다가 실수로 발이 ',
          tachyon.sex,
          '에게 닿았다.',
        ]);
        await printAndWait([tachyon.sex, '의 마음은 몹시 복잡했다.']);
        await tachyon.say_and_wait('아파, 으아앙.');
        await printAndWait([
          '……',
          you.get_colored_name(),
          '은(는) 이 해독제는 마실 수밖에 없다고 생각했다.',
        ]);
        await printAndWait([
          '단숨에 들이켜자 세상은 다시 조용해졌고 ',
          you.get_colored_name(),
          '은(는) 주위를 살펴보고 싶은 욕구가 사라졌다.',
        ]);
        await tachyon.say_and_wait('……마셨어? ……나도 한 병.');
        await printAndWait([
          '실망한 ',
          tachyon.sex,
          '의 얼굴을 보고 ',
          you.get_colored_name(),
          '은(는) 애마 TV를 재개해야 한다고 확신했다.',
        ]);
        await you.say_and_wait('……');
        await tachyon.say_and_wait('어?⊙▽⊙');
        await tachyon.say_as_unknown_and_wait(
          '아우(∩∀°╭아우∀∀아우∀∀°)아우아우',
        );
        drawLine({ content: '(톰 선생님의 더빙에 감사드립니다)' });
      } else {
        await printAndWait([
          tachyon.sex,
          '은(는) 의자에 앉아 ',
          you.get_colored_name(),
          '이(가) 올 줄 알고 있었던 듯했다.',
        ]);
        await printAndWait('공기가 순간 기묘하게 고요해졌다.');
        await you.say_and_wait('말없이 전문가인 척하는 거야?');
        await tachyon.say_and_wait('말할 필요는 없지, 그렇지 않나?', true);
        await you.say_and_wait('?');
        await tachyon.say_and_wait('그 표정이면 성공이군.', true);
        await tachyon.say_and_wait('최근 연구 성과인 이체동심의 약일세.', true);
        await tachyon.say_and_wait(
          '효과가 좋군. 때리는 건 나중으로 미루게. 자, 해독제일세.',
        );
        await printAndWait([
          tachyon.sex,
          '은(는) 옆의 기록지와 그 옆에 놓인 약을 가리켰다.',
        ]);
        await printAndWait([
          '단숨에 들이켜자 세상은 다시 조용해졌고 ',
          you.get_colored_name(),
          '은(는) 주위를 살펴보고 싶은 욕구가 사라졌다.',
        ]);
        await printAndWait('그렇다 해도 생각할수록 화가 난다.');
        println();
        print('비싼 약을 몇 병 얻었다:');
        for (const med of med_list) {
          print(`· ${med}`);
        }
        await waitAnyKey();
      }
    };
    f.title = '이상한 하루 2';
    return f;
  })(),
  wind_welcome: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} race_week 今週にレースがあり、未受肉の三女神がいるか
     */
    const f = async (you, race_week) => {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 산들바람이 몸을 스치는 것을 느꼈다. 운동장의 푸른 풀 향기가 실려 있었다.',
      ]);
      printButton('「오늘은 날씨가 좋네」 (담당의 의욕 +1)', 1);
      if (race_week) {
        printButton('「오늘 레이스도 순조롭기를」 (??? 호감 +50)', 2);
      }
      return [await input()];
    };
    f.title = '바람의 방문';
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
        '트레이너실로 돌아오자 ',
        chara.get_colored_name(),
        '은(는) 머리에 수건을 올린 채 소파에서 일어나 웃으며 ',
        you.get_colored_name(),
        '을(를) 보고 있었다.',
      ]);
      println();
      await chara.say_and_wait([
        '오늘 내 움직임, 꽤 괜찮았지? ',
        callname,
        '~ 제대로 보상해 줄 거지?',
      ]);
      printButton('「오늘 열심히 했어. 쉬었다가 나가자!」', 1);
      print('(의욕 -1, 호감 +50)');
      printButton('「그래서, 어떤 보상이 좋아?」', 2);
      const ret = [await input()];
      if (ret[0] === 2) {
        await printAndWait([
          '무심코 장난삼아 되물었는데 예상 밖의 대답이 돌아왔다.',
        ]);
        println();
        await chara.say_and_wait([callname, "의 '신부'가 되고 싶은데, 어때?"]);
        println();
        await printAndWait([
          '눈앞의 우마무스메는 씩 웃으며 그렇게 말하고, ',
          you.get_colored_name(),
          '의 손을 ',
          chara.sex,
          '의 몸으로 이끈다.',
        ]);
        println();
        await chara.say_and_wait([
          '우리는 일심동체잖아? 이럴 때는 같은 생각을 하고 있겠지? 아무튼 ',
          you.get_colored_name(),
          '이(가) 무슨 말을 해도 더는 못 참겠어!!!',
        ]);
        println();
        await printAndWait([
          '꼬리로 문을 잠그고 ',
          you.get_colored_name(),
          '을(를) 안아 옆 소파로 뛰어들었다.',
        ]);
        println();
        await chara.say_and_wait(['「베일」을 벗기고 아내처럼 대해 줘～']);
        println();
        await printAndWait([
          you.get_colored_name(),
          '이(가) 알아차렸을 때는 이미 늦었다.',
        ]);
        println();
        printButton('「진정해. 다른 할 일도 있잖아……」', 1);
        printButton(
          '베일 대신 두른 수건을 거칠게 벗겨 내고, 침대의 주인이 누구인지 가르쳐 주겠어!',
          2,
        );
        ret.push(await input());
        if (ret[1] === 1) {
          await printAndWait([
            you.get_colored_name(),
            '의 거절을 듣고도 매달린 우마무스메의 미소는 변하지 않았다.',
          ]);
          await chara.say_and_wait(
            '필요 없어? 아직 호흡이 맞지 않는구나. 알았어, 계속하면 한마음 한몸이 되겠지?',
          );
        }
      }
      return ret;
    };
    f.title = '「」심「」체';
    return f;
  })(),
  chocolate: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {number} max_lover エアシャカール、トランセンド、ドリームジャーニーのうち恋慕が最高の者
     * @param {number} max_love エアシャカール、トランセンド、ドリームジャーニーのうち最高の恋慕。未募集なら -1
     */
    const f = async (you, max_lover, max_love) => {
      await printAndWait('발렌타인데이지만 일에는 휴일이 없다.');
      await printAndWait(
        "트레이너라는 직업은 때때로 '속셈이 있는' 상대에게도 대비해야 한다. 타임라인을 열면 연애의 새콤한 기운이 가득하다.",
      );
      printButton(
        '「소문 따위는 바람 소리. 오늘도 담당을 위해 몸을 불태우는 하루다」 (체력 및 기력 +50)',
        1,
      );
      printButton('「한가하면 글을 올려 분위기를 띄울까」', 2);
      const ret = await input();
      if (ret === 2) {
        if (max_love === -1) {
          await printAndWait([
            '「냉장고를 열면 가장 낭만적인 건 역시 농축 커피」',
          ]);
          await printAndWait('적당히 문장을 다듬어 부계정에 올렸다.');
        } else if (max_love < 60) {
          await printAndWait(
            '「오늘도 열심히 일하는 하루. 어, 발렌타인? 초콜릿을 주문하려 했더니 연락처가 비어 있었네!」',
          );
          await printAndWait('적당히 문장을 다듬어 부계정에 올렸다.');
          println();
          await printAndWait(
            '다음 날 익명의 택배가 도착했다. 열어 보니 고급 초콜릿이었다',
          );
          println();
          await printAndWait('이상하네, 누가 보낸 거지……');
        } else {
          await printAndWait(
            '「진심이 담긴 초콜릿을 못 받은 지 N년째. 편의점에서 녹즙 맛 포키를 사서 스스로를 응원한다」',
          );
          await printAndWait('적당히 문장을 다듬어 부계정에 올렸다.');
          println();
          switch (max_lover) {
            case 36:
              // エアシャカールの場合
              await printAndWait(
                '다음 날 익명의 택배가 도착했다. 열어 보니 작고 정교한 초콜릿이었다',
              );
              break;
            case 80:
              // トランセンドの場合
              await printAndWait(
                '다음 날 익명의 택배가 도착했다. 열어 보니 캔 배지 모양의 초콜릿이었다',
              );
              break;
            case 119:
              // ドリームジャーニーの場合
              await printAndWait(
                '다음 날 익명의 택배가 도착했다. 열어 보니 몹시 화려한 초콜릿이었다',
              );
          }
          println();
          await printAndWait(['이상하네, 누가 보낸 거지……']);
        }
      }
      return [ret];
    };
    f.title = '초콜릿!';
    return f;
  })(),
  sakura_regret: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara キャラ
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, callname) => {
      await printAndWait([
        '밤, 침대 위의 ',
        chara.get_colored_name(),
        '은(는) 이불 속에 몸을 숨기고 있었다.',
      ]);
      println();
      await chara.say_and_wait([
        callname,
        ', 어째서…… 내 사랑을 받아 주지 않는 거야……',
      ]);
      println();
      await chara.say_and_wait([
        '그 아름다운 기억은 모두 우리가 함께 만들었는데……',
      ]);
      println();
      await chara.say_and_wait(['너무…… 외로워……']);
      println();
      await printAndWait([
        chara.sex,
        '이(가) 모르는 사이 베개가 조용히 젖었다.',
      ]);
      println();
    };
    f.title = '벚꽃의 아쉬움';
    return f;
  })(),
  nice_weekend: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara アグネスデジタルまたはメジロドーベル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        chara.get_colored_name(),
        '은(는) 동인지 마감일이 다가오자 ',
        you.get_colored_name(),
        '을(를) 주말에 ',
        chara.sex,
        '의 작업실로 불러 막바지 작업을 도와 달라고 했다.',
      ]);
      printButton('트레이닝에 지장을 주지 않기 위한 필요 경비다 (수락)', 1);
      printButton('휴일은 휴일이다. 잔업은 있을 수 없어! (거절)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          '직장인으로서 마감에 대한 혐오는 뼛속 깊이 새겨져 있다. 트레이너로서 담당을 돕는 것도 당연한 임무다!',
        );
        await printAndWait(
          '마침내 일요일이 끝날 무렵, 두 사람은 한 권을 완성했다.',
        );
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          await printAndWait([
            you.get_colored_name(),
            '은(는) 언제 잠들었는지 기억하지 못했다. 담당에게 이끌려 작업을 시작했고 ',
            you.get_colored_name(),
            '이(가) 이런 작업에 맞지 않았던 건지, 아니면 그저 너무 피곤했던 건지. 아무튼 눈을 뜨니 월요일 새벽이었고, 몸에는 과로의 통증이 남아 있었다.',
          ]);
          println();
          await printAndWait([
            '갑자기 ',
            you.get_colored_name(),
            '은(는) 몸이 유난히 무겁다고 느꼈다',
          ]);
          println();
          printButton(
            '너무 피곤한가? 조금 더 쉬자 (이상함을 살피지 않는다)',
            1,
          );
          printButton('저린 건가? 몸을 조금 움직이자 (이상함을 살핀다)', 2);
          ret.push(await input());
          if (ret.at(-1) === 1) {
            await printAndWait([
              you.get_colored_name(),
              '은(는) 멍하니 ',
              chara.get_colored_name(),
              '의 작업실에서 눈을 떴다. 상대가 ',
              you.get_colored_name(),
              '에게 저녁 식사를 준비해 주었지만, 그래도 ',
              you.get_colored_name(),
              '은(는) 의욕이 나지 않았다……',
            ]);
          } else {
            await printAndWait([
              you.get_colored_name(),
              '이(가) 몸을 움직이자 ',
              chara.get_colored_name(),
              '이(가) ',
              you.get_colored_name(),
              '의 옆에 엎드려 있었다.',
            ]);
            await printAndWait(['알 몸 으 로 엎 드 려 있 었 다']);
            await printAndWait([
              you.get_colored_name(),
              '은(는) 무언가 말하려 했지만 눈앞이 캄캄해지고 허리에 힘이 풀렸다',
            ]);
            await chara.say_and_wait([
              callname,
              ', 벌써 일어났어? 그럼 두 번째 판이야❤️～',
            ]);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              '동인지는 트레이너와 ',
              chara.uma_sex_title,
              '의 달콤한 일상을 담은 내용으로 큰 호평을 받았다! 그런데 어째서인지 트레이너의 얼굴이 ',
              you.get_colored_name(),
              '을(를) 닮은 것 같다? (우마 코인 +150)',
            ]);
          }
          if (relation >= 550) {
            await printAndWait([
              '배포를 마친 뒤, ',
              chara.get_colored_name(),
              '은(는) 감사의 뜻으로 ',
              you.get_colored_name(),
              '에게 디저트를 사 주고 싶어 했다. (【농축 커피】×5 획득)',
            ]);
          }
        }
      }
      return ret;
    };
    f.title = '즐거운 주말의 시작!';
    return f;
  })(),
  kamen_rider: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} no_ero_item 性玩具を持っていないか
     */
    const f = async (you, no_ero_item) => {
      const ret = [];
      await printAndWait(['상점가를 지나가는데 가게에서 행사를 하고 있었다.']);
      await printAndWait(['「가면라이더로 변신하여 따뜻함을 전하자~」']);
      await printAndWait([
        '점주에 따르면 아이들에게 따뜻함을 전하기 위한 기획이란다. 의상은 충분하지만 일손이 부족하다고 한다.',
      ]);
      await printAndWait([
        '아이들의 일상을 조금 더 풍요롭게 해 주고 싶다는 것이다.',
      ]);
      await printAndWait([
        '참가하면 몸에 맞는 가면라이더 슈트를 입어 볼 수 있다.',
      ]);
      printButton('「시간도 있으니 참가해 볼까.」', 1);
      printButton('「그만두자. 이런 북적이는 건 안 맞아.」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '점주는 ',
          you.get_colored_name(),
          '의 협조에 감사하며 탈의실로 안내하고 마음에 드는 옷을 고르게 했다——',
        ]);
        printButton('「당근 라이더!」 (명성 +15)', 1);
        printButton('「마법 소녀(가면 괴인 사양)!」 (우마 코인 +25)', 2);
        printButton(
          '「??? 어딘가 묘한 소품」 (명성 +20, 일부 담당의 의욕 +1)',
          3,
          { disabled: no_ero_item },
        );
        ret.push(await input());
        switch (ret[1]) {
          case 1:
            await printAndWait([
              '큰 호평을 받았다! 낯익은 학생도 있었던 것 같은데!?',
            ]);
            break;
          case 2:
            await printAndWait([
              '큰 호평을 받았다! 이 옷은 입기가 힘들었지만……',
            ]);
            break;
          case 3:
            await printAndWait([
              '점원의 도움으로 타이츠와 묘한 천을 입었다. 속옷 같은 천은 얼굴만 가리는 것이었다!?',
            ]);
            await printAndWait([
              '가게 마스코트로는 효과 만점이었지만, 무언가 소중한 것을 잃은 기분이다……',
            ]);
        }
      }
      return ret;
    };
    f.title = '가면(?) 라이더!';
    return f;
  })(),
  big_sale: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you プレイヤー
     * @param {string} uma ウマ娘 または ウマ郎
     * @param {boolean} disabled 育成中の担当がいない、または所持ウマコインが 10 未満
     */
    const f = async (you, uma, disabled) => {
      await printAndWait('외출 중에 상점가를 지나갔다……');
      await printAndWait('무언가 평소와 다르다?');
      await you.say_as_passer_by_and_wait(
        '채소 가게 주인 ',
        '어서 와서 구경하세요, 신선한 채소와 과일이 초특가입니다!',
      );
      await printAndWait([
        you.get_colored_name(),
        '은(는) 흥미가 생겨 들여다보았다.',
      ]);
      await printAndWait(
        '가게 앞에는 형형색색의 채소와 과일이 늘어서 있었고, 모양도 신선도도 흠잡을 데 없었다.',
      );
      await you.say_as_passer_by_and_wait(
        '채소 가게 주인 ',
        '우리 가게는 싸고 맛있어요. 어때요, 조금 사 갈래요?',
      );
      printButton(
        `당근을 산다 (우마 코인 -10, 육성 중인 ${uma}의 스피드 +20)`,
        1,
        {
          disabled,
        },
      );
      printButton(
        `마늘을 산다 (우마 코인 -10, 육성 중인 ${uma}의 스태미나 +20)`,
        2,
        {
          disabled,
        },
      );
      printButton(
        `감자를 산다 (우마 코인 -10, 육성 중인 ${uma}의 파워 +20)`,
        3,
        {
          disabled,
        },
      );
      printButton(
        `고추를 산다 (우마 코인 -10, 육성 중인 ${uma}의 근성 +20)`,
        4,
        {
          disabled,
        },
      );
      printButton(
        `딸기를 산다 (우마 코인 -10, 육성 중인 ${uma}의 지능 +20)`,
        5,
        {
          disabled,
        },
      );
      printButton('돈이 부족하니 그만둔다', 6);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            you.get_colored_name(),
            '은(는) 성장기인 ',
            uma,
            '의 식사량을 고려해 신선한 당근을 샀다.',
          ]);
          await printAndWait([
            '커다란 봉지를 학원까지 나른 후 ',
            you.get_colored_name(),
            '은(는) 담당 ',
            uma,
            '에게 스피드의 상징인 당근 함박스테이크와 당근 주스를 만들어 주었다.',
          ]);
          await printAndWait('호평을 받았다!');
          break;
        case 2:
          await printAndWait([
            you.get_colored_name(),
            '은(는) 성장기인 ',
            uma,
            '의 식사량을 고려해 신선한 마늘을 샀다.',
          ]);
          await printAndWait([
            '커다란 봉지를 학원까지 나른 후 ',
            you.get_colored_name(),
            '은(는) 담당 ',
            uma,
            '에게 스태미나 만점의 특대 마늘 라멘을 만들어 주었다.',
          ]);
          await printAndWait('호평을 받았다!');
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            '은(는) 성장기인 ',
            uma,
            '의 식사량을 고려해 신선한 감자를 샀다.',
          ]);
          await printAndWait([
            '커다란 봉지를 학원까지 나른 후 ',
            you.get_colored_name(),
            '은(는) 담당 ',
            uma,
            '에게 파워가 느껴지는 매시드포테이토 덮밥을 만들어 주었다.',
          ]);
          await printAndWait('호평을 받았다!');
          break;
        case 4:
          await printAndWait([
            you.get_colored_name(),
            '은(는) 성장기인 ',
            uma,
            '의 식사량을 고려해 신선한 고추를 샀다.',
          ]);
          await printAndWait([
            '고추를 학원으로 가져온 뒤 ',
            you.get_colored_name(),
            '은(는) 담당 ',
            uma,
            '에게 보기만 해도 얼굴이 창백해지는 초 매운 마파두부를 만들어 주었다.',
          ]);
          await printAndWait('호평을 받았다!');
          break;
        case 5:
          await printAndWait([
            you.get_colored_name(),
            '은(는) 성장기인 ',
            uma,
            '의 식사량을 고려해 신선한 딸기를 샀다.',
          ]);
          await printAndWait([
            '커다란 봉지를 학원까지 나르고 ',
            you.get_colored_name(),
            '은(는) 담당 ',
            uma,
            '에게 보기만 해도 똑똑해질 것 같은 딸기 아이스크림을 만들어 주었다.',
          ]);
          await printAndWait('호평을 받았다!');
          break;
        case 6:
          if (!disabled) {
            await printAndWait([
              you.get_colored_name(),
              '은(는) 담당의 식사량을 떠올리고 조용히 자리를 떴다.',
            ]);
          } else {
            await printAndWait(['마침 사용할 곳이 없었다.']);
            await printAndWait([
              you.get_colored_name(),
              '은(는) 고개를 젓고 돌아섰다.',
            ]);
          }
      }
      return [ret];
    };
    f.title = '상점가 대할인';
    return f;
  })(),
  justice: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} minoru 駿川たづな
     * @param {PrintedSpan} call_301 一般キャラから駿川たづなへの呼び方
     */
    const f = async (you, chara, minoru, call_301) => {
      chara.name =
        chara.sex_code === 1 ? '이상한 우마무스코' : '이상한 우마무스메';
      await printAndWait([
        you.get_colored_name(),
        '은(는) 길을 걷다 앞에서 ',
        chara.uma_sex_title,
        '에게 쫓기는 트레이너를 보았다.',
      ]);
      await printAndWait([
        '그 트레이너는 이미 체력이 거의 바닥났고, 뒤의 ',
        chara.uma_sex_title,
        '에게 언제 따라잡혀도 이상하지 않았다.',
      ]);
      await printAndWait([
        '그때 트레이너는 ',
        you.get_colored_name(),
        '을(를) 발견하고 한 줄기 희망에 매달리듯 ',
        you.get_colored_name(),
        '에게 달려왔다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '낯선 트레이너 ',
        '제발 도와줘. 그곳으로는 돌아가고 싶지 않아…… 그 지하실로는……',
      );
      await printAndWait([
        you.get_colored_name(),
        '은(는) 눈앞에서 절망한 낯선 트레이너와 빠르게 다가오는 붉은 눈의 ',
        chara.uma_sex_title,
        '을(를) 보고,',
      ]);
      printButton('낯선 트레이너를 돕는다', 1);
      printButton(`${chara.name}을(를) 돕는다`, 2);
      printButton('못 본 척한다', 3);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            '무슨 일이 있었는지는 모르지만 동료로서 서로 돕자는 생각에 ',
            you.get_colored_name(),
            '은(는) 망설이면서도 고개를 끄덕였다.',
          ]);
          await chara.say_and_wait(
            '제 트레이너를 돌려주시겠어요? 아직……하고 싶은 이야기가 있어요……',
          );
          await printAndWait([
            you.get_colored_name(),
            '은(는) 짙은 위험의 기운을 풍기는 ',
            chara.uma_sex_title,
            '을(를) 보며 몰래 침을 삼켰다.',
          ]);
          await you.say_and_wait([
            '저기, 다툼이라면 대화로 차분히 해결하자. 안 그러면 ',
            call_301,
            '에게 전화할 거야.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '자신도 무릎이 떨렸지만 순간 가장 올바른 방법을 선택했다—— ',
            minoru.get_colored_name(),
            '의 이름을 꺼낸 것이다.',
          ]);
          await printAndWait([
            '과연, ',
            you.get_colored_name(),
            '의 눈앞에서 ',
            chara.uma_sex_title,
            '은(는) 망설이기 시작했다.',
          ]);
          await chara.say_and_wait(
            '트레이너…… 도망칠 수는 없어. 다음에는 이렇게 좋은 동료를 만나지 못할 거야……',
          );
          await printAndWait([
            '눈앞의 ',
            chara.uma_sex_title,
            '의 날카로운 시선은 ',
            you.get_colored_name(),
            '을(를) 꿰뚫을 듯했고, ',
            you.get_colored_name(),
            '의 몸 너머 뒤에 있는 트레이너까지 보는 듯했다.',
          ]);
          await printAndWait([
            '그러고는 ',
            chara.sex,
            '은(는) 몸을 홱 돌려 떠났다.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '과(와) 뒤의 트레이너는 동시에 숨을 내쉬었다.',
          ]);
          await you.say_as_passer_by_and_wait(
            '낯선 트레이너 ',
            '정말 감사합니다. 작은 성의지만 받아 주세요……',
          );
          await printAndWait([
            '낯선 트레이너는 지갑을 꺼내 ',
            you.get_colored_name(),
            '의 손에 쥐여 주고는 반응하기도 전에 황급히 멀어졌다.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '은(는) 무슨 일이 있었는지 묻고 싶었지만, 더는 기회가 없을 듯했다.',
          ]);
          println();
          await printAndWait('우마 코인 100을 얻었다!');
          break;
        case 2:
          await chara.say_and_wait(
            '제 트레이너를 돌려주시겠어요? 아직……하고 싶은 이야기가 있어요……',
          );
          await printAndWait([
            you.get_colored_name(),
            '은(는) 짙은 위험의 기운을 풍기는 ',
            chara.uma_sex_title,
            '을(를) 보자 거스를 기운이 나지 않았다.',
          ]);
          await you.say_and_wait('두 분이서 이야기하세요. 저는 이만.');
          await printAndWait([
            '그렇게 말하고, ',
            you.get_colored_name(),
            '은(는) 살짝 옆으로 비켜 뒤의 낯선 트레이너를 드러냈다.',
          ]);
          await printAndWait([
            '행동이 이상한 ',
            chara.uma_sex_title,
            '은(는) 곧바로 낯선 트레이너의 팔을 잡고 조금 강제로 끌어당겼다.',
          ]);
          await chara.say_and_wait(
            "몰래 도망치다니…… 이렇게 건방진 트레이너는 제대로 '보살펴' 줘야겠네……",
          );
          await printAndWait([
            you.get_colored_name(),
            '은(는) 숨을 죽인 채, ',
            chara.uma_sex_title,
            '이(가) 다정하게 트레이너의 팔에 뺨을 비비면서 상대를 끌고 가는 모습을 보았다.',
          ]);
          await printAndWait([
            '갑자기 그 ',
            chara.uma_sex_title,
            '은(는) 무언가 생각난 듯 물건을 꺼내 ',
            you.get_colored_name(),
            '에게 던졌다.',
          ]);
          await printAndWait([you.get_colored_name(), '은(는) 황급히 받았다.']);
          await chara.say_and_wait(
            '친절한 트레이너님, 자신의 담당에게 절대 차갑게 대하지 마세요? 후후……',
          );
          await printAndWait([
            you.get_colored_name(),
            '은(는) 두 사람이 멀어지는 모습을 배웅하며, 아직도 진정되지 않는 심장을 느꼈다.',
          ]);
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            '에게는 이 지나치게 이상한 상황을 마주할 용기가 없었다. 황급히 스마트폰을 꺼내 통화하는 척하며 조용히 자리를 떴다.',
          ]);
          await printAndWait([
            '이상한 ',
            chara.uma_sex_title,
            '과(와) 낯선 트레이너가 ',
            you.get_colored_name(),
            '의 시야에서 사라질 때까지, ',
            you.get_colored_name(),
            '은(는) 좀처럼 긴장을 풀지 못했다.',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '도 알고 있다. 어느 쪽에도 손을 내밀지 않는 것은 본질적으로 이상한 ',
            chara.uma_sex_title,
            '을(를) 돕는 일이다.',
          ]);
          await printAndWait([
            '그래도 ',
            you.get_colored_name(),
            '은(는) 하루 종일 이 일을 생각했고, 오히려 평소보다 머리가 맑아진 듯했다.',
          ]);
      }
      if (get('exp:0:监禁次数') === 0) {
        await printAndWait([
          '나중에, ',
          you.get_colored_name(),
          '은(는) 문득 자신도 같은 잘못을 저질러 같은 결말로 향하지 않을까 생각했다.',
        ]);
      }
      return [ret];
    };
    f.title = '못 본 척할 수 없는 일';
    return f;
  })(),
};
