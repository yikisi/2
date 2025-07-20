const era = require('#/era-electron');

const print_page_header = require('#/page/components/page-header');

const { location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

async function arrive_location(loc) {
  await era.clear();
  print_page_header();
  era.drawLine();
  const vehicle = era.get('flag:单人载具');
  era.print([
    '【',
    vehicle > 0 ? `${vehicle_verbs[vehicle]}着 ${vehicle_names[vehicle]} ` : '',
    '抵达了 ',
    location_name[loc],
    '】',
  ]);
}

module.exports = arrive_location;
