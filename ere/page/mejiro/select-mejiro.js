const era = require('#/era-electron');

const m_free = new (require('#/page/mejiro/free-mejiro'))();
const m_call = new (require('#/page/mejiro/call-of-mejiro'))();

/** @returns {MejiroCity} */
function select_mejiro_city() {
  if (era.get('flag:目白城风格') > 0) {
    return m_call;
  }
  return m_free;
}

module.exports = select_mejiro_city;
