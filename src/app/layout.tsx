import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={leagueSpartan.className}>
			<body>{children}</body>
		</html>
	);
}
