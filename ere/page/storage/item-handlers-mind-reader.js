const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const di18n = require('#/i18n/extended-def');
const { i18n } = require('#/i18n/selector');

async function use_glasses(iid) {
  const item_name = di18n.tb_item.get_name(iid);
  const original = [27, 28, 29].find(
    (tiid) => era.get(`status:0:${24 + tiid - 27}`) > 0,
  );
  // ITEMNAME:26 = 万能镜框
  if (!era.get('item:26')) {
    await era.printAndWait(
      i18n().timon.storage.no_glass_template.replace('%LENS%', item_name),
    );
    return;
  }
  const base_name = di18n.tb_item.get_name(26);
  if (original === iid) {
    await era.printAndWait(
      i18n()
        .timon.storage.glass_have_lens_template.replace('%GLASS%', base_name)
        .replace('%LENS%', item_name),
    );
  } else if (
    (!original &&
      (await select_yes_or_no(
        i18n()
          .timon.storage.glass_equip_confirm_template.replace(
            '%GLASS%',
            base_name,
          )
          .replace('%LENS%', item_name),
      ))) ||
    (await select_yes_or_no(
      i18n()
        .timon.storage.glass_replace_confirm_template.replace(
          '%GLASS%',
          base_name,
        )
        .replace('%NEW%', item_name)
        .replace('%LENS%', di18n.tb_item.get_name(original)),
    ))
  ) {
    await era.printAndWait(
      i18n()
        .timon.storage.glass_equip_template.replace('%GLASS%', base_name)
        .replace('%LENS%', item_name),
    );
    if (original > 0) {
      await era.printAndWait(
        i18n().timon.storage.glass_lens_broken_template.replace(
          '%LENS%',
          di18n.tb_item.get_name(original),
        ),
      );
      era.set(`status:0:${24 + original - 27}`, 0);
    }
    era.set(`status:0:${24 + iid - 27}`, 1);
    era.add(`item:${iid}`, -1);
    return true;
  }
}

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[25] = async () => {
    const cur_line = era.getLineCount();
    let to_use = 1;
    let flag_use = true;
    let flag_print = true;
    let timer = era.get('status:0:马语者');
    if (timer >= 99) {
      to_use = 0;
    } else {
      const amount = Math.min(era.get('item:马语者'), 99 - timer);
      while (flag_use) {
        era.setAlign('center');
        (flag_print ? era.printInColRows : era.replaceInColRows)(
          [
            {
              config: { align: 'left' },
              content: i18n().timon.storage.use_mind_reader_select,
              type: 'text',
            },
          ],
          [
            {
              accelerator: 2,
              config: { disabled: to_use < 2, width: 2 },
              content: '-10',
              type: 'button',
            },
            {
              accelerator: 4,
              config: { disabled: !to_use, width: 2 },
              content: '-1',
              type: 'button',
            },
            { config: { width: 2 }, content: to_use.toString(), type: 'text' },
            {
              accelerator: 6,
              config: { disabled: to_use === amount, width: 2 },
              content: '+1',
              type: 'button',
            },
            {
              accelerator: 8,
              config: { disabled: to_use === amount, width: 2 },
              content: '+10',
              type: 'button',
            },
            { content: [], type: 'text' },
            {
              accelerator: 5,
              config: { width: 3 },
              content: i18n().ui_yes,
              type: 'button',
            },
            {
              accelerator: 0,
              config: { width: 3 },
              content: i18n().ui_no,
              type: 'button',
            },
          ],
        );
        era.setAlign('left');
        switch (await era.input({ hideInput: true })) {
          case 2:
            to_use = Math.max(to_use - 10, 0);
            break;
          case 4:
            to_use--;
            break;
          case 6:
            to_use++;
            break;
          case 8:
            to_use = Math.min(to_use + 10, amount);
            break;
          case 5:
            flag_use = false;
            break;
          case 0:
            to_use = 0;
            flag_use = false;
        }
        flag_print = false;
      }
    }
    if (to_use > 0) {
      await era.clear(era.getLineCount() - cur_line);
      if (
        await select_yes_or_no(
          i18n().timon.storage.use_mind_reader_confirm_template.replace(
            '%COUNT%',
            to_use.toString(),
          ),
        )
      ) {
        const timer = era.add('status:0:马语者', to_use);
        era.add('item:马语者', -to_use);
        await get_chara_talk(0).say_as_unknown_and_wait(
          (to_use === timer
            ? i18n().timon.storage.mind_reader_welcome_timer_template
            : i18n().timon.storage.mind_reader_continue_timer_template
          ).replace('%TIMER%', timer.toString()),
        );
        return true;
      }
    } else if (timer > 0) {
      await era.clear(era.getLineCount() - cur_line);
      await get_chara_talk(0).say_as_unknown_and_wait(
        i18n().timon.storage.mind_reader_notify_timer_template.replace(
          '%TIMER%',
          timer.toString(),
        ),
      );
    }
  };

  for (let iid = 27; iid <= 29; ++iid) {
    handlers[iid] = (arg) => use_glasses(arg);
  }
};
