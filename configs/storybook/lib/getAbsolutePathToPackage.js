import { dirname, join } from "path";

export const getAbsolutePathToPackage = (value) => {
	return dirname(require.resolve(join(value, "package.json")));
};
