import { ReactNode } from "react";
import "@/styles/app.css";
import "@example-monorepo/design-system/styles";

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
