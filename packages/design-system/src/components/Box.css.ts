import { style } from "@vanilla-extract/css";
import { cssVars } from "../vars";

export const root = style({
	padding: cssVars.spacing["spacing-2x"],
	background: "lightcoral",
});
