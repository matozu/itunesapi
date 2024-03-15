const path = require("path");

module.exports = {
  entry: "./script.js", // Ulazna točka vašeg aplikacijskog koda
  output: {
    path: path.resolve(__dirname, "dist"), // Izlazni direktorij za izgrađene datoteke
    filename: "bundle.js", // Naziv izgrađene JS datoteke
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Pravilo koje će se primijeniti na sve CSS datoteke
        use: ["style-loader", "css-loader"], // Koristite style-loader i css-loader za obradu CSS-a
      },
    ],
  },
  mode: "production", // Postavite na 'production' kako bi se automatski izvršila minimizacija
};
