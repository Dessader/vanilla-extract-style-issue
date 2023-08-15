import { createGlobalTheme } from "@vanilla-extract/css";
import { spacing } from "@/tokens";

export const cssVars = createGlobalTheme(":root", { spacing });
