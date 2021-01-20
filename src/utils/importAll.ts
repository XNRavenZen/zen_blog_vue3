const path = require("path");

interface Context {
  [x: string]: any;
}

const importAll = (
  context: __WebpackModuleApi.RequireContext,
  pattern: string | RegExp,
  flag: string
) => {
  const map: Context = {};
  for (const key of context.keys()) {
    const keyArr = key.split("/");
    keyArr.shift(); // 移除.
    map[keyArr.join(".").replace(RegExp(pattern, flag), "")] = context(key);
  }
  return map;
};
export default importAll;
