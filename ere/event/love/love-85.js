const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_like_chara,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { get_mother } = require('#/event/snippets/108500');
const masturbate = require('#/event/snippets/masturbate');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const {
  pregnant_stage_enum,
  vp_status_enum,
} = require('#/data/ero/status-const');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[49](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    await print_title_with_kojo(this.#kojo, '49', ruby, me, callname);
    begin_and_init_ero(this.id);
    await masturbate(this.id);
    end_ero_and_train();
    await sys_love_uma_in_event(this.id);
  }

  async 74(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[74](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const ret = await print_title_with_kojo(
      this.#kojo,
      '74',
      ruby,
      get_mother(),
      me,
      callname,
    );

    if (ret[0] === 1 && ret[1] === 1) {
      era.set('flag:强制BE', this.id);
      return;
    }

    begin_and_init_ero(0, this.id);
    era.set('tcvar:0:发情', era.set('tcvar:85:发情', 1));
    const cache1 = era.get('abl:85:阴道耐性');
    const cache2 = era.get('talent:85:淫壶');
    era.set('abl:85:阴道耐性', 5);
    era.set('talent:85:淫壶', 2);
    update_ero_status(this.id);
    await quick_make_love(
      new EroParticipant(this.id, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
    );
    if (era.get('talent:85:处女') > vp_status_enum.no) {
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(this.id, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(this.id, part_enum.virgin),
      );
      end_ero_and_train();
    } else {
      await print_ero_page(this.id, true);
      await end_ero_and_show_result();
    }
    era.set('talent:85:淫壶', cache2);
    era.set('abl:85:阴道耐性', cache1);
    await this.#kojo['74-after'](ruby, get_mother(), me, callname);
    await sys_love_uma_in_event(this.id);
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async date(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'date', ruby, me);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.anal),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.abuse),
      new EroParticipant(85, part_enum.anal),
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async delicious(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'delicious', ruby, me);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.foot),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.body),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.mouth, -0.5),
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
    );
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(85, part_enum.virgin),
      new EroParticipant(0, part_enum.hand),
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async dessert(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'dessert', ruby, me);
    begin_and_init_ero(0, 85);
    set_palam_to_max(85, part_enum.clitoris);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.clitoris),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async non_penetration(ruby, me) {
    const ret = await print_title_with_kojo(
      this.#kojo,
      'non_penetration',
      ruby,
      me,
    );
    let _relation = 0,
      _love = 0;
    begin_and_init_ero(0, 85);
    switch (ret[0]) {
      case 1:
        _relation += 5;
        break;
      case 2:
        _love++;
        break;
      case 3:
        _relation += 5;
        _love++;
    }
    if (ret[1] === 1) {
      _relation += 3;
    } else {
      _love++;
    }
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.foot),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.clitoris),
    );
    if (ret[2] === 2) {
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.mouth),
      );
    }
    await quick_make_love(
      new EroParticipant(85, part_enum.body, -0.4),
      new EroParticipant(0, part_enum.penis, -0.4),
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.clitoris, -0.4),
      new EroParticipant(0, part_enum.penis, -0.4),
    );
    end_ero_and_train();
    sys_like_chara(85, 0, _relation, true, _love) && (await era.waitAnyKey());
  }

  async 89(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[89](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    switch ((await print_title_with_kojo(this.#kojo, '89', ruby, me))[0]) {
      case 1:
        await sys_love_uma_in_event(85);
        begin_and_init_ero(0, 85);
        await quick_make_love(
          new EroParticipant(0, part_enum.mouth),
          new EroParticipant(85, part_enum.mouth),
        );
        end_ero_and_train();
        break;
      case 2:
        era.set('cflag:85:爱慕暂拒', 89);
        await punish_rejecting_love(85);
        break;
      case 3:
        era.set('flag:强制BE', 85);
    }
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async kiss(ruby, me, callname) {
    await print_title_with_kojo(this.#kojo, 'kiss', ruby, me, callname);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async jade(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'jade', ruby, me);
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async dance(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'dance', ruby, me);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async take_shower(ruby, me, callname) {
    await print_title_with_kojo(this.#kojo, 'take_shower', ruby, me, callname);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    set_palam_to_max(85, part_enum.clitoris);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.clitoris),
    );
    end_ero_and_train();
  }

  async 99(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[99](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    if ((await print_title_with_kojo(this.#kojo, '99', ruby, me))[0] === 1) {
      await quick_into_sex(85, 85, true);
    } else {
      begin_and_init_ero(0, 85);
      set_palam_to_max(85, part_enum.virgin);
      era.set(
        'palam:85:阴道快感',
        Math.ceil(era.get('tcvar:85:阴道快感上限') * 0.4 + 1),
      );
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.mouth),
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(85, part_enum.breast),
      );
      era.set(
        'palam:0:阴茎快感',
        Math.ceil(era.get('tcvar:0:阴茎快感上限') * 0.4 + 1),
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
      );
      await print_ero_page(85);
      await end_ero_and_show_result();
    }
    await this.#kojo['99-after'](ruby, me);
    await sys_love_uma_in_event(85);
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async clinic(ruby, me, callname) {
    await print_title_with_kojo(this.#kojo, 'clinic', ruby, me, callname);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.clitoris),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.anal),
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.virgin),
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async loli_wife(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'loli_wife', ruby, me);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
    );
    await print_ero_page(85);
    await end_ero_and_show_result();
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async milking(ruby, me, callname) {
    await print_title_with_kojo(this.#kojo, 'milking', ruby, me, callname);
    begin_and_init_ero(0, 85);
    set_palam_to_max(85, part_enum.breast);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  }

  async shame(ruby, me) {
    await print_title_with_kojo(this.#kojo, 'shame', ruby, me);
  }

  async foot_job(ruby, me, callname) {
    await print_title_with_kojo(this.#kojo, 'foot_job', ruby, me, callname);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.foot),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
  }

  async sex_mark(ruby, me, callname) {
    if (
      (
        await print_title_with_kojo(this.#kojo, 'sex_mark', ruby, me, callname)
      )[0] === 2
    ) {
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(85, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      end_ero_and_train();
    }
  }

  async run(stage, extra_flag, event_object) {
    const pregnant_cache = era.get(`cflag:${this.id}:妊娠阶段`),
      ret = super.run(stage, extra_flag, event_object);
    if (pregnant_cache === 1 << pregnant_stage_enum.no) {
      era.set(`cflag:${this.id}:妊娠阶段`, 1 << pregnant_stage_enum.no);
    }
    return ret;
  }
};
