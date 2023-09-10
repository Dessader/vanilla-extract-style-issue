import { globalStyle, style } from "@vanilla-extract/css";
import { cssVars } from "@example-monorepo/design-system/vars";

globalStyle("*, html, body", {
	margin: 0,
	padding: 0,
	boxSizing: "border-box",
	fontFamily: "sans-serif",
});

// Example styles
// Error on `cssVars.spacing["spacing-2x"]`
export const homePageRoot = style({
	background: "teal",
	color: "white",
	padding: cssVars.spacing["spacing-2x"],
});
