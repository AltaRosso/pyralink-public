import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavComponent from "@/components/Navbar/Navbar";

// const inter = Inter({ subsets: ["latin"] });

export const roboto_mono = Roboto_Mono({
	weight: "100",
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Pyralink | SpaceThings",
	description: "Pyralink website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={roboto_mono.className}>
				<NavComponent />
				{children}
			</body>
		</html>
	);
}
