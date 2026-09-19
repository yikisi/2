const era = require('#/era-electron');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { vehicle_enum } = require('#/data/move-const');

const { i18n } = require('#/i18n/selector');

/**
 * @param {number} item
 * @param {number} [vid]
 */
async function single_vehicle(item, vid = item - 60 + 1) {
  const equipped = era.get('flag:单人载具');
  const item_name = i18n().tb_item.template.replace(
    '%NAME%',
    i18n().vehicle[vehicle_enum.keys[vid - 1]],
  );
  if (equipped === vid) {
    const ret = await select_yes_or_no(
      i18n().timon.storage.single_vehicle_info_template.replace(
        '%ITEM%',
        item_name,
      ),
    );
    if (ret) {
      await era.printAndWait(
        i18n().timon.storage.single_vehicle_canceled.replace(
          '%ITEM%',
          item_name,
        ),
      );
      era.set('flag:单人载具', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped > 0
        ? i18n()
            .timon.storage.single_vehicle_replace_confirm_template.replace(
              '%ITEM%',
              i18n().tb_item.template.replace(
                '%NAME%',
                i18n().vehicle[vehicle_enum.keys[equipped - 1]],
              ),
            )
            .replace('%NEW%', item_name)
        : i18n().timon.storage.single_vehicle_equip_confirm_template.replace(
            '%ITEM%',
            item_name,
          ),
    );
    if (ret) {
      await era.printAndWait(
        i18n().timon.storage.single_vehicle_equip_template.replace(
          '%ITEM%',
          item_name,
        ),
      );
      era.set('flag:单人载具', vid);
    }
  }
}

/**
 * @param {number} item
 * @param {number} [vid]
 */
async function multiple_vehicle(item, vid = item - 60 + 1) {
  const equipped = era.get('flag:多人载具');
  const item_name = i18n().tb_item.template.replace(
    '%NAME%',
    i18n().vehicle[vehicle_enum.keys[vid - 1]],
  );
  if (equipped === vid) {
    const ret = await select_yes_or_no(
      i18n().timon.storage.multiple_vehicle_info_template.replace(
        '%ITEM%',
        item_name,
      ),
    );
    if (ret) {
      await era.printAndWait(
        i18n().timon.storage.multiple_vehicle_canceled.replace(
          '%ITEM%',
          item_name,
        ),
      );
      era.set('flag:多人载具', 0);
    }
  } else {
    const ret = await select_yes_or_no(
      equipped > 0
        ? i18n()
            .timon.storage.multiple_vehicle_replace_confirm_template.replace(
              '%ITEM%',
              i18n().tb_item.template.replace(
                '%NAME%',
                i18n().vehicle[vehicle_enum.keys[equipped - 1]],
              ),
            )
            .replace('%NEW%', item_name)
        : i18n().timon.storage.multiple_vehicle_equip_confirm_template.replace(
            '%ITEM%',
            item_name,
          ),
    );
    if (ret) {
      await era.printAndWait(
        i18n().timon.storage.multiple_vehicle_equip_template.replace(
          '%ITEM%',
          item_name,
        ),
      );
      era.set('flag:多人载具', vid);
    }
  }
}

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  new Array(3)
    .fill(0)
    .forEach((_, i) => (handlers[i + 60] = () => single_vehicle(i + 60)));

  new Array(4)
    .fill(0)
    .forEach((_, i) => (handlers[i + 63] = () => multiple_vehicle(i + 63)));

  handlers[112] = () => single_vehicle(112, vehicle_enum.gold_ship);
  handlers[113] = () => multiple_vehicle(113, vehicle_enum.pama);
};
