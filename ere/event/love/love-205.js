const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const quick_into_sex = require('#/event/snippets/quick-into-sex');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');
const print_title_with_kojo = require('#/event/snippets/print-title-with-kojo');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const {
  pregnant_stage_enum,
  vp_status_enum,
} = require('#/data/ero/status-const');
const { get_breast_cup } = require('#/data/info-generator');

const { i18n } = require('#/i18n/selector');

module.exports = class extends CustomizedLove {
  get #kojo() {
    return i18n().kojo[this.id].love;
  }

  async 49(treve, me, callname, stage, extra_flag, event_object) {
    if (event_object.arg.length === 1) {
      if (
        (await print_title_with_kojo(this.#kojo, '49-1', treve, me))[0] === 1
      ) {
        if (
          treve.sex_code === 0 &&
          (era.get('talent:205:处女') > vp_status_enum.no ||
            era.get('talent:205:处女') === vp_status_enum.dont_know) &&
          me.sex_code > 0
        ) {
          event_object.arg.push('lust');
          add_event(stage, event_object);
        } else {
          await sys_love_uma_in_event(this.id);
        }
      } else {
        era.set('cflag:205:爱慕暂拒', 49);
      }
    } else {
      begin_and_init_ero(0, this.id);
      if (
        (
          await print_title_with_kojo(
            this.#kojo,
            '49-2',
            treve,
            me,
            callname,
            get_breast_cup(this.id),
          )
        )[0] === 1
      ) {
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(this.id, part_enum.breast),
          false,
        );
      } else {
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(this.id, part_enum.body),
          false,
        );
      }
      await quick_make_love(
        new EroParticipant(0, part_enum.abuse),
        new EroParticipant(this.id, part_enum.masochism),
        false,
      );
      set_palam_to_max(this.id, part_enum.clitoris);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(this.id, part_enum.virgin),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(this.id, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      end_ero_and_train();
      await sys_love_uma_in_event(this.id);
    }
  }

  async 74(treve, me, callname) {
    if (
      treve.sex_code !== 1 &&
      me.sex_code > 0 &&
      check_pregnant_unprotect(205)
    ) {
      await print_title_with_kojo(this.#kojo, '74', treve, me, callname);
      begin_and_init_ero(0, 205);
      era.set('palam:205:阴道快感', era.get('tcvar:205:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      era.set('palam:205:阴道快感', era.get('tcvar:205:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.body),
        false,
      );
      era.set('tcvar:0:避孕套', 1);
      era.set('palam:0:阴茎快感', era.get('tcvar:0:阴茎快感上限'));
      era.set('palam:205:阴道快感', era.get('tcvar:205:阴道快感上限'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      era.add('exp:205:阴道高潮次数', 5);
      era.add('exp:0:阴茎高潮次数', 5);
      era.add('exp:0:射精量', 20);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      end_ero_and_train();
    } else {
      await print_event_name(this.#kojo[74].title, treve);
    }
    await sys_love_uma_in_event(this.id);
  }

  async 89(treve, me, callname) {
    if (
      treve.sex_code !== 1 &&
      me.sex_code > 0 &&
      era.get('cflag:205:妊娠阶段') === 1 << pregnant_stage_enum.no
    ) {
      await print_title_with_kojo(this.#kojo, '89', treve, me, callname);
      begin_and_init_ero(0, 205);
      !era.get(`status:205:经期`) && era.set('status:205:短效避孕药', 1);
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(
          205,
          treve.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.virgin),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      era.drawLine();
      era.add('exp:205:口交次数', 10);
      era.add('exp:205:性交次数', 10);
      era.add('exp:0:戳阴部次数', 10);
      await sys_love_uma_in_event(205);
      end_ero_and_train();
      era.drawLine();
      if (await select_yes_or_no(this.#kojo['89-continue-confirm'])) {
        await quick_into_sex(205);
      }
    } else {
      await print_event_name(this.#kojo[89].title, treve);
      await sys_love_uma_in_event(205);
    }
  }

  async 99(treve, me) {
    if (
      treve.sex_code !== 1 &&
      me.sex_code > 0 &&
      check_pregnant_unprotect(205)
    ) {
      if ((await print_title_with_kojo(this.#kojo, '99', treve, me))[0] === 1) {
        era.set('status:205:短效避孕药', 1);
      }
      begin_and_init_ero(0, 205);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          205,
          treve.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(205, part_enum.breast),
        false,
      );
      set_palam_to_max(205, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(205, part_enum.mouth),
        new EroParticipant(0, part_enum.penis),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      set_palam_to_max(0, part_enum.sadism);
      set_palam_to_max(205, part_enum.masochism);
      await quick_make_love(
        new EroParticipant(0, part_enum.hit),
        new EroParticipant(205, part_enum.body),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(205, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(205, part_enum.virgin),
        false,
      );
      end_ero_and_train();
    } else {
      await print_event_name(this.#kojo[99].title, treve);
    }
    await sys_love_uma_in_event(205);
  }
};
