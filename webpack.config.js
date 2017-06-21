function buildConfig(env) {
  if (!env) {
    env = { type: "dev" };
  }
  return require("./config/" + env.type + ".js")(env);
}

module.exports = buildConfig;
