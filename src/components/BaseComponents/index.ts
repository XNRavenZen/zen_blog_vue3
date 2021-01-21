import importAll from "@/utils/importAll";
export default importAll(require.context(".", true, /\.vue$/), /\.vue$/, "g");
