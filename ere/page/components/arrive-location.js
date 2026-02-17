const era = require('#/era-electron');

const print_page_header = require('#/page/components/page-header');

const { location_enum } = require('#/data/locations');
const { vehicle_enum } = require('#/data/move-const');

const di18n = require('#/i18n/extended-def');

async function arrive_location(loc) {
  await era.clear();
  print_page_header();
  era.drawLine();
  const vehicle = era.get('flag:单人载具');
  era.print(
    di18n.timon.get_it_arrive_location(
      vehicle_enum.keys[vehicle - 1],
      location_enum.keys[loc],
    ),
  );
}

module.exports = arrive_location;
