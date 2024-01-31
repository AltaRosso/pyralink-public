"use client";

import React from "react";
import { Carousel } from "flowbite-react";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
// import Image from "next/image";

const Defence = () => {
	return (
		<div
			id="target-area-defence"
			className="w-full px-7 py-20 relative bg-slate-950"
		>
			<>
				<h1 className="text-center pb-10 text-white">Defence in space</h1>
				<hr className="pb-10" />

				<div className="flex justify-between flex-col md:flex-row">
					<span className="md:w-1/2 self-center md:pr-20 text-white">
						<p>
							New class Military Satellite Communications services for the South
							African Defence Force and it&apos;s allies.
						</p>
					</span>

					<div className="h-56 sm:h-64 xl:h-80 2xl:h-96  md:w-1/2">
						<Carousel
							slideInterval={3000}
							pauseOnHover
							indicators={false}
							leftControl={<RocketLaunchOutlinedIcon className="-rotate-90" />}
							rightControl={<RocketLaunchOutlinedIcon />}
						>
							<div className=" flex h-full items-center justify-center dark:text-white relative">
								<img
									src="./defence/pyralink_defence.png"
									alt="Pyralink Defence"
									// className="w-[860px]"
									width={860}
									height={574}
								/>
								<h3 className="absolute pt-10 left-0 bottom-0 mt-10 text-2xl font-bold text-orange-800">
									High Bandwidth
								</h3>
							</div>

							<div className="flex h-full items-center justify-center dark:text-white relative">
								<img
									src="./defence/pyralink_defence_2.png"
									alt="Pyralink Defence"
									// className="w-[860px]"
									width={860}
									height={574}
								/>{" "}
								<h3 className="absolute pt-10 left-0 bottom-0 text-2xl font-bold text-orange-800">
									Secure Communications
								</h3>
							</div>

							<div className=" flex h-full items-center justify-center dark:text-white relative">
								<img
									src="./defence/pyralink_defence.png"
									alt="Pyralink Defence"
									// className="w-[860px]"
									width={860}
									height={574}
								/>{" "}
								<h3 className="absolute pt-10 left-0 bottom-0 text-2xl font-bold text-orange-800">
									{" "}
									National Security Launch
								</h3>
							</div>
						</Carousel>
					</div>
				</div>
			</>
		</div>
	);
};

export default Defence;
