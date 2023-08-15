module.exports = {
	"*.{ts,tsx}": ["eslint --max-warnings=0 --no-ignore", "prettier --write"],
	"*.js": ["prettier --write"],
};
