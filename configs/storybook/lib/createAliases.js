export const createAliases = (config, rootPath, aliases) => {
	config.resolve.alias = {
		...config.resolve.alias,
		...aliases,
		"@": rootPath,
	};
};
