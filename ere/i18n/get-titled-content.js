/** @returns {{[content]:string,[title]:string}} */
function get_titled_content(dict, key, desc_dict = {}, get_desc_key, ...args) {
  if (!dict || !dict[key]) {
    return {};
  }
  const desc = get_desc_key(key);
  const ret = { content: dict[key], title: desc_dict[desc] };
  for (const k in ret) {
    if (typeof ret[k] === 'function') {
      ret[k] = ret[k](...args);
    }
  }
  return ret;
}

module.exports = get_titled_content;
