"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";
import Image from "next/image";

export default function NavComponent() {
	const [toggle, setToggle] = useState(false);

	function handleToggle() {
		setToggle(!toggle);
	}

	return (
		<Navbar
			fluid
			className={`b-[hsla(0,0%,100%,.8)] opacity-90 sticky top-0 md:px-10 py-4 z-50`}
		>
			<Navbar.Brand as={Link} href="/" onClick={() => setToggle(false)}>
				<img
					src="/pyralink_black_logo_2.png"
					className="mr-3 h-6 sm:h-9"
					alt="Pyralink Logo"
				/>
			</Navbar.Brand>
			{!toggle ? (
				<Navbar.Toggle
					onClick={handleToggle}
					className={`hover:bg-inherit focus:ring-0`}
					style={{ WebkitTapHighlightColor: "transparent" }}
				/>
			) : (
				<HighlightOffIcon
					onClick={handleToggle}
					className={`md:hidden hover:bg-inherit focus:ring-0 text-4xl text-gray-500`}
				/>
			)}
			<Navbar.Collapse className={`${toggle ? "block" : "hidden"} `}>
				<Navbar.Link
					href="/#target-area-mission"
					onClick={() => setToggle(false)}
				>
					<span className="font-extrabold px-4 py-2">Mission</span>
				</Navbar.Link>
				<Navbar.Link
					as={Link}
					href="/#target-area-defence"
					onClick={() => setToggle(false)}
				>
					<span className="font-extrabold px-4 py-2">Defence</span>
				</Navbar.Link>
				<Navbar.Link
					href="/#target-area-about"
					onClick={() => setToggle(false)}
					disabled
				>
					<span className="font-extrabold px-4 py-2">About</span>
				</Navbar.Link>
				<Navbar.Link
					href="/#target-area-launch-services"
					onClick={() => setToggle(false)}
					disabled
				>
					<span className="font-extrabold px-4 py-2">Launch Services</span>
				</Navbar.Link>
				<Navbar.Link
					href="https://za.indeed.com/cmp/Pyralink-Aerospace"
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					<span className="font-extrabold px-4 py-2">Careers</span>
				</Navbar.Link>
				<Navbar.Link href="/contact">
					<span className="font-extrabold text-white rounded-3xl bg-black px-6 py-2 ">
						Contact
					</span>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
