import Image from "next/image";

const Welcome = () => {
	return (
		<div className="w-full relative mb-20x shadow-[20px_12px_20px_#181510] ">
			<Image
				src="./welcome/PyraLink_High bandwidth.png"
				className="opacity-20 object md:w-full md:h-screen h-full"
				width={2048}
				height={1428}
				alt="high bandwith"
			/>
			<h1 className="absolute top-0 left-0 text-white ps-10 pt-20">
				Space within your reach
			</h1>
			<p className="hidden md:block text-white absolute top-[10%] max-w-5xl ps-10 pt-20 text-lg text-justify">
				PyraLink Aerospace provides spacecraft components and launch services
				for African national security satellites. As South Africa&apos;s only
				rocket company, we craft tailored solutions that meet the needs of the
				African space industry.{" "}
			</p>
			<div className="absolute top-2/3 md:top-3/4 w-full flex justify-center">
				<a
					href="mailto:lawrence@pyralink.co.za"
					className=" block text-white p-4 bg-opacity-50 rounded-es-full
					rounded-se-full bg-blue-600 hover:bg-blue-800 w-1/2 text-center"
				>
					Get in touch
				</a>
			</div>
		</div>
	);
};

export default Welcome;
