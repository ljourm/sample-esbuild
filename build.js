const { build } = require("esbuild");

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

const isDev = process.env.NODE_ENV === "development";

console.log("bundle...");
console.log(`isDev: ${isDev}`);

const options = {
  target: "es2015",
  platform: "browser",
  entryPoints: ["src/index.jsx"],
  outdir: "dest",
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
};

build(options).catch((err) => console.log(`Error: ${JSON.stringify(err)}`));
