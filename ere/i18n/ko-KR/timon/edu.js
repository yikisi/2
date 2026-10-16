/**
 * @file 育成の地の文
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry, join_list } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} races
   * @param {PrintedSpan} wins
   * @param {PrintedSpan} reward
   * @param {PrintedSpan[]} race_names
   */
  get_result_list(chara, races, wins, reward, race_names) {
    const ret = [];
    ret.push([
      chara.get_colored_name(),
      ', 통산 ',
      races,
      '전 ',
      wins,
      '승, 총 획득 상금 ',
      reward,
      ' 우마 코인',
    ]);
    if (race_names.length > 0) {
      ret.push([
        '주요 우승 경력: ',
        ...join_list(race_names.slice(0, 5), ' '),
        race_names.length > 5 ? '……' : '',
      ]);
    }
    return ret;
  },
  on_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait(
        `매년 1월, URA의 ${chara.uma_sex_title}전당에서는 은퇴한 우마무스메를 대상으로 투표를 시작한다.`,
      );
      era.println();
      await era.printAndWait(
        `그리고 3월, 선수 생활을 마치고 엄격한 투표를 통과한 ${chara.uma_sex_title}가 전당에 입성하며, 《현창 ${chara.uma_sex_title}》라는 최고의 영예를 얻는다.`,
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 애마',
        chara.get_colored_name(),
        '——',
      ]);
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        `${chara.sex}를 본뜬 동상이 공개되고, `,
        ...title,
        chara.get_colored_name(),
        '의 전설은 영원히 전당에 새겨진다……',
      ]);
    };
    f.title = '전당의 자리에';
    return f;
  })(),
  under_palace: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {TextContent[]} result
     * @param {[]} title
     */
    const f = async (chara, you, result, title) => {
      await era.printAndWait('안타깝게도 전당에 입성하지 못했다.');
      era.println();
      await era.printAndWait(
        '그래도 온 힘을 다해 쌓은 성과는 자랑스럽다. 뒤를 잇는 이들이 그 어깨 위에서 더 높은 정상을 향하리라 믿는다.',
      );
      era.println();
      for (const seg of result) {
        await era.printAndWait(seg);
      }
      era.println();
      await era.printAndWait([
        ...title,
        chara.get_colored_name(),
        '의 이야기는 앞으로도 사람들의 입에 오르내릴 것이다……',
      ]);
    };
    f.title = '전당의 자리 아래에서';
    return f;
  })(),
  pl_future: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {CharaTalk} can_sex
     */
    const f = async (chara, you, can_sex) => {
      await era.printAndWait([
        '세월은 눈 깜짝할 사이에 흘러간다. ',
        chara.get_colored_name(),
        '과(와) 보낸 세월도 어느덧 몇 년. 조금만 더 지나면 새로운 장이 시작된다.',
      ]);
      era.println();
      if (era.get(`love:${chara.id}`) >= 75) {
        await era.printAndWait(
          '익숙한 트레이너실에서 두 사람은 다정하게 몸을 기댔다.',
        );
        await era.printAndWait(
          '연인들은 둘만의 행복한 세상에 빠져, 세상의 자잘한 일 따위는 모두 잊은 듯했다.',
        );
        era.println();
        await era.printAndWait('나는 세상의 왕이다! ——잭 도슨', {
          align: 'center',
        });
      } else if (can_sex) {
        await era.printAndWait(
          '익숙한 트레이너실에서 두 사람은 뜨겁게 입맞춤했다.',
        );
        await era.printAndWait(
          '정욕의 기운이 방을 가득 채우고, 달콤한 목소리와 살갗이 부딪히는 소리만 계속 울린다.',
        );
        era.println();
        await era.printAndWait('먹는 것과 성은 본성이다. ——맹자', {
          align: 'center',
        });
      } else {
        await era.printAndWait(
          '익숙한 트레이너실에서 두 사람은 즐겁게 이야기를 나누면서도 피할 수 없는 이별에 가슴 아파했다.',
        );
        await era.printAndWait(
          '인생에서 만날 수 있는 기회는 적다. 잃을 수도 있기에 지금 곁에 있는 사람을 소중히 하는 것이다.',
        );
        era.println();
        await era.printAndWait(
          '일생에 단 한 번의 만남을 소중히 여기는 마음은 오직 다도 속에서 드러난다. ——센노 리큐',
          {
            align: 'center',
          },
        );
      }
    };
    f.title = '그리고, 미래로';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} attr
   */
  async train(chara, you, attr) {
    const chara_name = chara.get_colored_name();
    if (!chara.id) {
      chara_name.content = '자신';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          '스피드를 높이기 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 달리기 훈련을 시켰다……',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          '스태미나를 높이기 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 수영 훈련을 시켰다……',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          '파워를 높이기 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 웨이트 트레이닝을 시켰다……',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          '근성을 기르기 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 오르막 훈련을 시켰다……',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          '레이스 감각을 기르기 위해 ',
          you.get_colored_name(),
          '은(는) ',
          chara_name,
          '에게 레이스 영상 분석을 시켰다……',
        ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  ts_info(chara) {
    era.print([chara.get_colored_name(), '의 트레이닝은 무사히 끝났다!']);
  },
  ts_add: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 아직 부족한 모양이다. 자율 트레이닝을 하고 싶은 걸까?',
      ]);
      era.printButton('허락한다!', 1);
      era.printButton('계획 밖인데……', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          `의 자율 트레이닝을 묵인하고, ${chara.sex}의 의욕을 칭찬했다.`,
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '의 자율 트레이닝을 막고 충분히 쉬라고 타일렀다.',
        ]);
      }
      return ret;
    };
    f.title = '열혈 추가 트레이닝!';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  async tf_info(chara, attr, is_fumble) {
    if (attr === attr_enum.intelligence) {
      await era.printAndWait([
        '아차! ',
        chara.get_colored_name(),
        `이(가) ${is_fumble ? '기절해' : '잠들어'} 버렸다!`,
      ]);
    } else {
      const buffer = [];
      switch (attr) {
        case attr_enum.speed:
          buffer.push('미끄러져 넘어졌다', '땅바닥에 굴렀다', '힘이 다했다');
          break;
        case attr_enum.endurance:
          buffer.push('다리에 쥐가 났다');
          break;
        case attr_enum.strength:
          buffer.push(
            '눈에 진흙이 들어갔다',
            '쓰러졌다',
            '샌드백에 반격당했다',
          );
          break;
        case attr_enum.toughness:
          buffer.push('힘이 다했다', '허리를 삐었다', '굴러떨어졌다');
      }
      await era.printAndWait([
        '큰일이다! ',
        chara.get_colored_name(),
        '이(가) ',
        get_random_entry(buffer),
        '!',
      ]);
    }
  },
  train_fail: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        '의 트레이닝은 실패했다……',
      ]);
      era.println();
      era.print('어떻게 할까?');
      era.println();
      era.printButton('「잠깐 쉬자」', 1);
      era.printButton('「반성회다!」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '트레이너실에서……';
    return f;
  })(),
  train_fumble: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      const ret = [];
      await era.printAndWait([
        chara.get_colored_name(),
        '의 트레이닝은 실패했다……',
      ]);
      era.println();
      era.print('어떻게 할까?');
      era.println();
      era.printButton('「푹 쉬어!」', 1);
      era.printButton('「근성으로 극복하자!」', 2);
      ret.push(await era.input());
      return ret;
    };
    f.title = '보건실에서……';
    return f;
  })(),
  /**
   * @param {CharaTalk} chara
   * @param {number} debuff
   */
  tf_change_debuff(chara, debuff) {
    if (debuff > 0) {
      era.print([
        '【',
        chara.get_colored_name(),
        '은(는) 훈련이 수월해졌다고 느꼈다】',
      ]);
    } else {
      era.print([
        '【',
        chara.get_colored_name(),
        '은(는) 훈련이 힘들어졌다고 느꼈다】',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_success
   */
  async foreign_study(chara, you, is_success) {
    if (!chara.id) {
      await era.printAndWait([
        '외국어로 기본적인 대화를 할 수 있도록 ',
        you.get_colored_name(),
        '은(는) 호텔 방에서 공부했다……',
      ]);
    } else {
      await era.printAndWait([
        '외국어로 기본적인 대화를 할 수 있도록 ',
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '에게 호텔 방에서 공부하도록 했다……',
      ]);
    }
    if (is_success) {
      await era.printAndWait('벼락치기가 통했다!');
    } else {
      await era.printAndWait([
        '큰일이다! ',
        chara.get_colored_name(),
        '이(가) 잠들어 버렸다!',
      ]);
    }
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   */
  fs_learn_language(chara, language) {
    era.print([
      chara.get_colored_name(),
      '은(는) ',
      language,
      '을(를) 배웠다!',
    ]);
  },
  /**
   * @param {CharaTalk} chara
   * @param {PrintedSpan} language
   * @param {PrintedSpan} new_level
   */
  fs_update_language(chara, language, new_level) {
    era.print([
      chara.get_colored_name(),
      '의 ',
      language,
      '실력이 더욱 늘어, 지금은 ',
      new_level,
      '!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_rest(chara, you) {
    await era.printAndWait([
      '컨디션을 되찾기 위해 ',
      you.get_colored_name(),
      '은(는) 현지의 물리 치료를 예약하고 호텔에서 몸을 돌봤다……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '의 몸 상태가 조금씩 회복되는 듯하다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async foreign_train(chara, you) {
    await era.printAndWait([
      '현지 코스에 익숙해지기 위해 ',
      you.get_colored_name(),
      '은(는) 트레이닝장에서 적응 훈련을 시켰다……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 현지 경기장의 감각에 조금씩 익숙해진 듯하다!',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {string} loc_name
   */
  async foreign_travel(chara, you, loc_name) {
    await era.printAndWait([
      '기분을 풀기 위해 ',
      you.get_colored_name(),
      ...(chara.id > 0
        ? ['은(는) ', chara.get_colored_name(), '과(와) 함께 ']
        : ['은(는) 혼자 ']),
      loc_name,
      '을(를) 관광했다……',
    ]);
    await era.printAndWait('돈은 꽤 썼지만, 그래도 그만한 가치는 있었다!');
  },
  race_start: (() => {
    /**
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {number} item
     * @param {boolean} do_sex
     */
    const f = async (chara, you, item, do_sex) => {
      if (!item) {
        /** @author 雞雞 */
        const buffer = [
          async () => await you.say_and_wait('전력을 다하면 돼!'),
          async () => await you.say_and_wait('너의 달리기를 보여 줘!'),
        ];
        await get_random_entry(buffer)();
      } else {
        /** @author 黑奴队长 */
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 직접 ',
          chara.get_colored_name(),
          '에게 몇 가지 「특별한 장비」를 달아 주었다.',
        ]);
        switch (item) {
          case 4:
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 사랑스럽게 ',
              you.get_colored_name(),
              '을(를) 흘겨보고는 둘만의 비밀을 옷 아래 감춘 채 출발선으로 걸어갔다……',
            ]);
            break;
          case 3:
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 순순히 옷을 정리했다. 비쳐 나오는 연분홍빛이 아랫배와 곁눈질하는 눈빛에 겹쳐진다……',
            ]);
            break;
          case 2:
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 천천히 옷을 다시 입으며 도구가 몸에서 빠지지 않았는지 확인했다……',
            ]);
            break;
          case 1:
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 살며시 ',
              you.get_colored_name(),
              '의 표정을 살피더니 고개를 숙이고 자극을 견뎠다……',
            ]);
        }
      }
    };
    f.title = '레이스 전에';
    return f;
  })(),
  race_end_item_win: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 뺨을 붉힌 ',
        chara.get_colored_name(),
        '을(를) 맞이해 휴게실로 안내했다.',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 들어오자마자 해방된 듯 달콤한 목소리를 흘렸고, ',
        you.get_colored_name(),
        '은(는) 서둘러 문을 닫고 모든 성인용품을 멈췄다.',
      ]);
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '은(는) 품 안에서 몸을 비벼 오는 ',
        chara.get_colored_name(),
        '에게 나중에 제대로 예뻐해 주겠다고 약속하며, 한낮에 잘못을 저지르는 것만은 피했다.',
      ]);
    };
    f.title = '달아오른 승리';
    return f;
  })(),
  race_end_item_lose: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 숙인 ',
        chara.get_colored_name(),
        '을(를) 맞이해 휴게실로 안내했다.',
      ]);
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 힘없이 그 자리에 주저앉았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 눈치껏 성인용품을 멈추고 조용히 말을 건넸다.',
      ]);
    };
    f.title = '예상대로의 패배';
    return f;
  })(),
  race_end_win: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '최고야!' : '더 높은 곳을 노리자!',
      );
    };
    f.title = '레이스 승리';
    return f;
  })(),
  race_end_5: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '오늘도 잘 달렸어!'
          : '저 녀석들에겐 절대로 질 수 없어!',
      );
    };
    f.title = '레이스 입상';
    return f;
  })(),
  race_end_10: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5 ? '다음엔 더 잘될 거야!' : '낙담만 해서는 안 돼!',
      );
    };
    f.title = '레이스 패배';
    return f;
  })(),
  race_end_lose: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await you.say_and_wait(
        Math.random() < 0.5
          ? '언젠가는 꼭 이길 거야!'
          : '계속 이렇게 망신당할 셈이야?',
      );
    };
    f.title = '다음엔 지지 않아!';
    return f;
  })(),
  summer_start: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '여름 하면 수영복과 바닷가. 물론 ',
        chara.get_colored_name(),
        '과(와) ',
        you.get_colored_name(),
        '은(는) 바다에서 쉬면서도 트레이닝을 게을리하지 않았다.',
      ]);
    };
    f.title = '여름 합숙';
    return f;
  })(),
};
