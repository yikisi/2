/**
 * @file 調教の地の文 - その他
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');
const {
  pregnant_stage_enum,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');

module.exports = {
  /** @param {CharaTalk} chara 3Pに加わりたい第三者 */
  async join_3p(chara) {
    era.print([
      chara.get_colored_name(),
      '은(는) 볼을 붉히며 끼어들고 싶어 한다……받아들일까?',
    ]);
    era.printButton('「마침 잘 왔어」', 1);
    era.printButton('그만둔다……', 2);
    return (await era.input()) === 1;
  },
  /**
   * @param {CharaTalk} chara 3Pに加わりたい第三者
   * @param {CharaTalk} you プレイヤー
   */
  async join_3p_accept(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 품으로 뛰어들었다……',
    ]);
  },
  /**
   * @param {CharaTalk} chara 3Pに加わりたい第三者
   * @param {CharaTalk} lover 主な相手
   * @param {CharaTalk} you プレイヤー
   */
  async join_3p_force(chara, lover, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) ',
      lover.get_colored_name(),
      '의 동의를 얻자, ',
      you.get_colored_name(),
      '의 항의를 멋지게 무시했다……',
    ]);
  },
  /** @param {CharaTalk} chara 3Pに加わりたい第三者 */
  async join_3p_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 얼굴을 가리고 떠났다……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {string} p_desc 肉棒の大きさの形容
   */
  get_penis_be_erect: (chara, p_desc) => [
    chara.get_colored_name(),
    '의 ',
    p_desc,
    '육봉이 발기했다!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {string} b_desc 胸の大きさの形容
   */
  get_nipple_be_erect: (chara, b_desc) => [
    '짙은 빛깔의 체리가 ',
    chara.get_colored_name(),
    '의 ',
    b_desc,
    '양 가슴 끝에서 고개를 내밀었다……',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_lubricated: (chara, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '이(가) 젖었다!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_bleed: (chara, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '은(는) 아직 출혈 중이다!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} part
   */
  get_be_wounded: (chara, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '이(가) 찢어졌다!',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {boolean} is_virgin trueなら処女喪失、falseなら童貞喪失
   */
  get_lose_virginity: (chara, is_virgin) => [
    chara.get_colored_name(),
    is_virgin ? '은(는) 처녀성을 잃었다!' : '은(는) 동정을 잃었다!',
  ],
  /**
   * 射精時、どこへ出させるかの提示
   * @param {CharaTalk} chara
   */
  get_orgasm_denial_notification: (chara) => [
    chara.get_colored_name(),
    '의 육봉이 한계에 도달했다……',
  ],
  /**
   * 体内へ出すボタン
   * @param {string} part 接触部位
   */
  get_bt_cum_in: (part) => `${part}으로 받아낸다`,
  /** 体外へ出すボタン */
  bt_cum_out: '정액을 피한다',
  /**
   * 体外射精を選んだ結果
   * @param {CharaTalk} chara 射精する側
   * @param {CharaTalk} you プレイヤー
   * @param {string} part 接触部位
   * @param {boolean} stop_success 体外に成功したか
   * @param {boolean} towards_face 顔か体か
   */
  async orgasm_denial(chara, you, part, stop_success, towards_face) {
    if (stop_success) {
      era.print([
        you.get_colored_name(),
        '의 ',
        part,
        '은(는) 준비가 끝난 ',
        chara.get_colored_name(),
        '의 육봉을 뱉어냈고, 따뜻한 정액은 ',
        you.get_colored_name(),
        '의 ',
        towards_face ? '얼굴' : '몸',
        '을(를) 향해 곧장 날아갔다……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '과(와)의 겨룸에서 졌다……',
      ]);
    }
  },
  /** @param {CharaTalk} chara */
  get_zero_stamina: (chara) => [
    chara.get_colored_name(),
    '은(는) 체력을 모두 소모해 탈진했다……',
  ],
  /** @param {CharaTalk} chara */
  get_lost_mind: (chara) => [
    chara.get_colored_name(),
    '은(는) 기력을 모두 소모해 실신했다……',
  ],
  /**
   * 快楽刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pleasure(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 강한 쾌감에 몸을 떨고 있다……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 쾌감의 여운에 잠겨 표정이 풀어져 있다……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 강한 쾌락에 몸과 마음이 불탄 듯하다……',
        ]);
    }
  },
  /**
   * 同心刻印
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async mark_meek(chara, you) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait([
        chara.get_colored_name(),
        '과(와) ',
        you.get_colored_name(),
        '은(는) 더욱 일심동체가 되었다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 더욱 굴복했다……',
      ]);
    }
  },
  /**
   * 苦痛刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_pain(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 얼굴을 찡그리며 고통을 참고 있다……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 괴로운 비명을 질렀다……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 너무 아파서 울부짖었다……',
        ]);
    }
  },
  /**
   * 恥辱刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_shame(chara, level) {
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 모욕에 뺨을 붉혔다……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 치욕에 사로잡힌 듯하다……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 완전히 치욕에 사로잡혔다……',
        ]);
    }
  },
  /**
   * 反抗刻印
   * @param {CharaTalk} chara
   * @param {number} level
   */
  async mark_hate(chara, level) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait('이미 친밀한 관계지만 너무 심했던 모양이다.');
    }
    switch (level) {
      case 1:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 날카로운 눈초리로 노려보았다……',
        ]);
        break;
      case 2:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 분노한 표정을 지었다……',
        ]);
        break;
      case 3:
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 분노로 얼굴을 일그러뜨리며 낮게 저주를 내뱉었다……',
        ]);
    }
  },
  /**
   * 淫紋
   * @param {CharaTalk} chara
   * @param {number} level
   * @param {boolean} is_new 新たに得た淫紋か
   */
  async mark_ero(chara, level, is_new) {
    if (is_new) {
      await era.printAndWait([
        chara.get_colored_name(),
        '의 아랫배에 음문이 나타났다……',
      ]);
    }
    switch (level) {
      case 1:
        await era.printAndWait('음문이 난자의 이동 경로를 표시하기 시작했다……');
        break;
      case 2:
        await era.printAndWait('음문은 태아의 성장에 따라 더욱 화려해진다……');
        break;
      case 3:
        await era.printAndWait(
          '음문이 임신 확률과 수태 상태를 표시하기 시작했다……',
        );
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} mother 中出しされた母側
   * @param {CharaTalk} father 中出しした父側
   * @param {boolean} is_mother_awake 母側が起きているか
   * @param {boolean} is_father_awake 父側が起きているか
   * @param {boolean} inmon_no_preg 淫紋による避妊か
   */
  async cum_in_womb(
    mother,
    father,
    is_mother_awake,
    is_father_awake,
    inmon_no_preg,
  ) {
    const talent_palam =
      era.get(`talent:${mother.id}:子宫敏感`) > 0 ||
      era.get(`mark:${mother.id}:欢愉`) >= 2;
    const talent_sex =
      era.get(`talent:${mother.id}:淫乱`) > 0 ||
      era.get(`talent:${mother.id}:榨精成瘾`) > 0;
    const has_lv2_inmon = era.get(`mark:${mother.id}:淫纹`) >= 2;
    let talent_check = talent_palam || talent_sex;
    if (has_lv2_inmon) {
      await era.printAndWait([
        mother.get_colored_name(),
        '의 아랫배에서 자궁을 나타내는 하트 무늬가 천천히 채워져 간다……',
      ]);
    }
    if (
      era.get(`status:${mother.id}:经期`) > 0 ||
      era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${mother.id}:长效避孕药`) > 0 ||
      era.get(`status:${mother.id}:短效避孕药`) > 0 ||
      inmon_no_preg
    ) {
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            father.get_colored_name(),
            '의 따뜻한 정액이 근질거리는 ',
            mother.get_colored_name(),
            '의 자궁을 채워 간다……',
          ]);
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 쾌감에 빠져 있다……',
          ]);
        } else if (era.get('tflag:强奸') === father.id) {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              '은(는) 굴욕 속에서 ',
              mother.sex_code > 0 ? '후타나리' : '여성',
              '로서의 극락을 맛보았다……',
            ],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              '은(는) 기뻐하며 ',
              mother.sex_code > 0 ? '후타나리' : '여성',
              '로서의 극락을 맛보았다……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    } else {
      const love = era.get(`love:${mother.id || father.id}`);
      if (love < 75) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 쏟아낸 정액이 얇은 막에 가로막히지 않았음을 알아차렸다……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            '이(가) 방출한 수많은 정자가 무방비한 ',
            mother.get_colored_name(),
            '의 난자를 향해 나아간다……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 자신이 임신할지도 모른다는 사실에 두려워했다……',
          ]);
        }
      } else if (love < 90) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 쏟아낸 정액이 가로막힘 없이 나아가는 것을 느꼈다……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            '이(가) 방출한 수많은 정자가 방비를 풀어 놓은 ',
            mother.get_colored_name(),
            '의 난자를 향해 나아간다……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 자신이 임신할지도 모른다는 사실을 어렴풋이 깨달았다……',
          ]);
        }
      } else {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 쏟아낸 정액이 가로막힘 없이 나아가는 것에 놀랐다……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            '이(가) 방출한 수많은 정자가 임신을 바라는 ',
            mother.get_colored_name(),
            '의 난자를 향해 나아간다……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 엄마가 된다는 느낌을 기쁘게 받아들이고 있다……',
          ]);
        }
      }
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 근질거리는 자궁이 정액으로 채워지는 쾌감에 빠져, 임신할 가능성 따위는 돌아보지 않았다……',
          ]);
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              era.get('tflag:强奸') !== father.id
                ? '은(는) 굴욕 속에서 '
                : '은(는) 기뻐하며 ',
              mother.sex_code > 0 ? '후타나리' : '여성',
              '로서의 극락을 맛보았다……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    }
  },
  /**
   * 中出し受精を淫紋がすぐ感知した場合
   * @param {CharaTalk} mother 受胎した母側
   * @param {CharaTalk} father 中出しした父側
   */
  be_pregnant(mother, father) {
    era.print([
      father.get_colored_name(),
      '이(가) 안에 사정한 뒤, ',
      mother.get_colored_name(),
      '의 음문 상태가 이상해졌다……',
    ]);
  },
  report_preg_in_love: (() => {
    /**
     * 良縁以上の関係での妊娠
     * @author 雞雞
     * @param {CharaTalk} mother 母側
     * @param {CharaTalk} father 父側
     * @param {number} unexpected_pregnant 予期せぬ妊娠
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 아랫배의 음문에 나타난 임신 무늬를 보고 기뻐하며, 행복한 얼굴로 ',
          father.get_colored_name(),
          '에게 알렸다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 손에 든 임신 테스트기의 결과에 기뻐하며, ',
          father.get_colored_name(),
          '에게 즐겁게 알렸다.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) 몇 번이나 확인했지만, 아이가 자신의 핏줄이라는 답만 돌아왔다.',
        ]);
        await era.printAndWait([
          '하지만',
          father.get_colored_name(),
          '에게는 그런 기억이 없다……',
        ]);
      } else {
        if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
          await era.printAndWait([
            '어떻게 임신했는지는 기억나지 않지만, ',
            mother.get_colored_name(),
            '은(는) 아이의 아버지는 사랑하는',
            father.get_colored_name(),
            '외에는 있을 수 없다고 믿고 있다.',
          ]);
        }
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) 살며시',
          mother.get_colored_name(),
          '을(를) 안고 새 생명이 깃든 순간을 함께 축하했다……',
        ]);
      }
    };
    f.title = '수태';
    return f;
  })(),
  report_preg: (() => {
    /**
     * 熱恋以下の関係での妊娠
     * @author 雞雞
     * @param {CharaTalk} mother 母側
     * @param {CharaTalk} father 父側
     * @param {number} unexpected_pregnant 予期せぬ妊娠
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 창백한 얼굴로 아랫배의 음문에 나타난 임신 무늬를 보더니, 세면대로 달려가 토했다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 창백한 얼굴로 손에 든 임신 테스트기를 보다가, 다시 세면대에서 토했다.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 어떻게 임신했는지 전혀 기억나지 않는다. 범인이',
          father.get_colored_name(),
          '이라는 사실을 믿기 어렵지만, 돌이켜 보면',
          father.sex,
          '외에는 있을 수 없다……',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          '그 뒤, ',
          mother.get_colored_name(),
          '은(는) 조심스럽게',
          father.get_colored_name(),
          '에게 임신 사실을 알렸다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) 몇 번이나 확인했지만, 아이가 자신의 핏줄이라는 답만 돌아왔다.',
        ]);
        await era.printAndWait([
          '기억은 없는데도, ',
          father.get_colored_name(),
          '은(는)',
          mother.get_colored_name(),
          '의 눈물을 보고 아버지로서 책임지기를 선택했다……',
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:阴道尺寸`) > 0) {
          await era.printAndWait([
            '……물론',
            father.get_colored_name(),
            '도 어머니가 되고 싶은 마음이 조금 있었다……',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          '그 뒤, ',
          mother.get_colored_name(),
          '은(는) 주눅 든 채',
          father.get_colored_name(),
          '에게 임신 사실을 알렸다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는)',
          mother.get_colored_name(),
          '의 눈가에 눈물이 맺히는 것을 보았다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 겁먹은 채, ',
          father.get_colored_name(),
          '에게 아버지로서 책임져 달라고 부탁했다……',
        ]);
      } else {
        await era.printAndWait([
          '그 뒤, ',
          mother.get_colored_name(),
          '은(는) 차갑게',
          father.get_colored_name(),
          '에게 임신 사실을 알렸다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는)',
          mother.get_colored_name(),
          '의 눈가에 눈물이 맺히는 것을 보았다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 원망스러운 기색으로, ',
          father.get_colored_name(),
          '에게 아버지로서 책임질 것을 요구했다……',
        ]);
      }
    };
    f.title = '예기치 않은 임신';
    return f;
  })(),
  have_baby: (() => {
    /**
     * 子の誕生。熱恋以下の関係
     * @author 雞雞
     * @param {CharaTalk} mother 母側
     * @param {CharaTalk} father 父側
     * @param {number} unexpected_pregnant 予期せぬ妊娠
     */
    const f = async (mother, father, unexpected_pregnant) => {
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 머뭇거리며',
          father.get_colored_name(),
          '을(를) 보았다. 아이의 아버지를 어떻게 대해야 할지 모르는 듯하다.',
        ]);
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 머뭇거리며',
          father.get_colored_name(),
          '을(를) 보았다. 아이의 아버지를 어떻게 바라봐야 할지 모르는 듯하다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '이(가) ',
          father.get_colored_name(),
          '을(를) 바라보는 눈은 공허했지만, 아이에게는 사랑을 보내고 있었다.',
        ]);
      }
    };
    f.title = '새로운 생명';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} awake 起きているか
   */
  async shop_start(chara, you, awake) {
    if (!awake) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 잠들어 있어, ',
        you.get_colored_name(),
        `이(가)${chara.sex}에게 무엇을 하려는지 전혀 모르고 있다……`,
      ]);
    } else if (era.get(`mark:${chara.id}:反抗`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 차갑게',
        you.get_colored_name(),
        '을(를) 바라보고 있다. 눈동자에는 원망만 가득하다……',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 도발하듯 ',
        you.get_colored_name(),
        '을(를) 바라봤다. 성노예 따위가 무엇을 할 수 있겠는가……',
      ]);
    } else if (
      era.get(`mark:${chara.id}:淫纹`) ||
      era.get(`mark:${chara.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 들뜬 마음으로 ',
        you.get_colored_name(),
        '을(를) 바라보고 있다. 자신에게 어떤 변화가 생길지 기다릴 수 없는 듯하다……',
      ]);
    } else if (era.get(`mark:${chara.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 겁먹은 눈으로 ',
        you.get_colored_name(),
        '을(를) 바라보고 있다. 왜 이런 짓을 하는지 알 수 없다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 불안하게',
        you.get_colored_name(),
        '을(를) 바라보고 있다. 앞으로 무슨 일이 일어날지 알 수 없다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_sleep(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 잠들어 있어, ',
      you.get_colored_name(),
      `이(가)${chara.sex}에게 한 일을 전혀 모르고 있다……`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_hate(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 몸의 변화를 견디며, ',
      you.get_colored_name(),
      `이(가) ${chara.sex}를 성인용품처럼 가지고 노는 것을 욕했다……`,
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_pleasure(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 몸의 변화를 느끼고 ',
      you.get_colored_name(),
      '과(와) 함께 쾌락을 맛보고 싶어 견딜 수가 없다……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_slave(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 바라보며 눈물을 글썽였다. 하지만 의식도 언젠가는 몸에 이끌려 변해 갈 것이다……',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async shop_end_lover(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 실망하여',
      you.get_colored_name(),
      '을(를) 바라보았다.',
      you.get_colored_name(),
      `이(가)${chara.sex}의 몸에 만족하지 못한다는 사실이 슬프다……`,
    ]);
  },
  /**
   * 初めて不貞に気づく
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic 気性（淫紋で歪められている場合あり）
   * @param {boolean} cuckold 寝取られ癖があるか
   */
  after_betrayed_first(chara, you, characteristic, cuckold) {
    if (chara.race > 0) {
      era.print([
        chara.uma_sex_title,
        '의 코는 예민하다.',
        you.get_colored_name(),
        '에게서 풍기는 음란한 냄새가 방금 말타기를 했다는 사실을 주변에 알리고 있다.',
      ]);
      era.print([
        '냄새를 맡은',
        chara.get_colored_name(),
        '은(는)',
        you.get_colored_name(),
        '의 부정에',
        cuckold
          ? '희미한 정욕을 느꼈다……'
          : characteristic >= 0
            ? '분노했다……'
            : '슬퍼했다……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '에게서 풍기는 음란한 냄새가 방금 말타기를 했다는 사실을 주변에 알리고 있다.',
      ]);
      era.print([
        '그것을 알아차린 ',
        chara.get_colored_name(),
        '은(는)',
        you.get_colored_name(),
        '의 부정에',
        cuckold
          ? '희미한 정욕을 느꼈다……'
          : characteristic >= 0
            ? '분노했다……'
            : '슬퍼했다……',
      ]);
    }
  },
  /**
   * 二度目の不貞
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} characteristic 気性（淫紋で歪められている場合あり）
   * @param {boolean} cuckold 寝取られ癖があるか
   */
  after_betrayed_second(chara, you, characteristic, cuckold) {
    era.print([
      you.get_colored_name(),
      '은(는) 유혹에 넘어가 다시',
      chara.get_colored_name(),
      '을(를) 배신했다.',
    ]);
    era.print('잠깐의 욕망 해소 이면에는 얼마나 많은 마음이 얽혀 있는 것일까?');
    era.print([
      chara.race > 0 ? '냄새를 맡은' : '그것을 알아차린 ',
      chara.get_colored_name(),
      '은(는)',
      you.get_colored_name(),
      '의 부정에',
      cuckold
        ? '희미한 정욕을 느꼈다……'
        : characteristic >= 0
          ? '분노했다……'
          : '슬퍼했다……',
    ]);
  },
  /**
   * 何度も不貞に気づく
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} cuckold 寝取られ癖があるか
   */
  after_betrayed(chara, you, cuckold) {
    if (cuckold) {
      era.print([
        you.get_colored_name(),
        '의 부정행위는 ',
        chara.get_colored_name(),
        '에게 깊은 상처를 주는 동시에, 말로 표현하기 어려운 희미한 흥분도 일으켰다……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '의 부정에, ',
        chara.get_colored_name(),
        '은(는) 몹시 분노하고 있다……',
      ]);
    }
  },
};
