"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/app/lib/utils";
import Link from "next/link";

export function MainNavBar() {
	return (
		<div className="relative w-full flex items-center justify-center">
			<Navbar className="top-10" />
		</div>
	);
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null);
	return (
		<div
			className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				<Link href={"/"}>
					<MenuItem setActive={setActive} active={active} item="Home" />
				</Link>
				<MenuItem setActive={setActive} active={active} item="Our Services">
					<div className="flex flex-col space-y-4 text-sm">
						<HoveredLink href="/courses/all-courses">All Courses</HoveredLink>
						<HoveredLink href="/courses/basic-music-theory">
							Basic Music Theory
						</HoveredLink>
						<HoveredLink href="/courses/advance-composition">
							Advance Composition
						</HoveredLink>
						<HoveredLink href="/courses/song-writing">Song Writing</HoveredLink>
						<HoveredLink href="/courses/music-production">
							Music Production
						</HoveredLink>
					</div>
				</MenuItem>
				<Link href={"/contact"}>
					<MenuItem setActive={setActive} active={active} item="Contact Us" />
				</Link>
			</Menu>
		</div>
	);
}
