module.exports = {
  "*.{js,jsx,ts, tsx}": ["eslint --fix"],
  "*.{ts,tsx}": [() => "tsc --noEmit"],
};

// "lint-staged": {
//   "*.{js, jsx, ts, tsx}": "eslint --cache --fix",
//   "**/*.(ts|tsx)": [
//     () => "tsc --skipLibCheck --noEmit",
//   "eslint --cache --fix",
//   ]
// },
