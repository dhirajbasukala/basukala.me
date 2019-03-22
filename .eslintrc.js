module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["import", "prettier"],
  env: {
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    "global-require": 0,
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight", "to"],
        aspects: ["noHref", "invalidHref", "preferButton"]
      }
    ]
  }
};
