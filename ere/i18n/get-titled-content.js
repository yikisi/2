/**
 * 根据关键词，获取角色相关关键词及其描述的工具函数，例如状态名及其描述、特性名及其描述
 * @returns {{[content]:string,[title]:string}}
 */
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
