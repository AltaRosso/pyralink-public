import React from "react";
// import Image from "next/image";

const Mission = () => {
	return (
		<div
			id="target-area-mission"
			className="w-full py-20 bg-[#F5F8FF] font-semibold text-black relative"
		>
			<>
				<h1 className="text-center pb-10">Mission</h1>
				<hr className="pb-10" />
				<div className="flex flex-col md:flex-row">
					<div className="flex">
						<span className="z-[1] flex flex-col md:gap-10 gap-5 place-self-center px-7 md:px-10 pb-10">
							<p className="pb-4">
								Maintaining South Africa&apos;s presence in space.
							</p>

							<li>
								Create a stronger society where South Africans can make Space
								part of their daily conversations
							</li>
							<li>
								Assuring South Africa&apos;s Access to Space for civilian and
								military users in a safe and sustainable space environment.
							</li>
							<li>
								Support South African National Security satellite missions &
								Support SANSA&apos;s vision 2040.
							</li>
						</span>{" "}
					</div>

					<div className="md:pr-10 rounded-full text-center">
						<img
							loading="lazy"
							src="./mission/sat.jpg"
							className="rounded-sm"
							width={1000}
							height={571}
							alt="satelite"
						/>
						<a
							className="text-xs"
							target="_blank"
							rel="noreferrer noopener"
							href="https://www.freepik.com/free-photo/spacecraft-orbiting-planet-earth-global-communications-generated-by-ai_41438906.htm#query=satellite&position=4&from_view=keyword&track=sph&uuid=8acb268d-022b-43b6-b820-72a9432cbd9d"
						>
							Image by vecstock on Freepik
						</a>{" "}
					</div>
				</div>{" "}
			</>
		</div>
	);
};

export default Mission;
