import About from "@/components/About/About";
import Defence from "@/components/Defence/Defence";
import LaunchServices from "@/components/LaunchServices/LaunchServices";
import Mission from "@/components/Mission/Mission";
import Welcome from "@/components/Welcome/Welcome";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<Welcome />
			<Mission />
			<Defence />
			{/* <About />
			<LaunchServices /> */}
		</main>
	);
}
