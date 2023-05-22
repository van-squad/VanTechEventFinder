module.exports = {
  "*.{js,jsx}": ["eslint --cache --fix"],
  "*.{ts,tsx}": [() => "tsc --skipLibCheck --noEmit", "eslint --cache --fix"],
};

// "lint-staged": {
//   "*.{js, jsx, ts, tsx}": "eslint --cache --fix",
//   "**/*.(ts|tsx)": [
//     () => "tsc --skipLibCheck --noEmit",
//   "eslint --cache --fix",
//   ]
// },
