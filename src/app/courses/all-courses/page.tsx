import React from "react";
import courseData from "@/app/data/music_courses.json";
import Image from "next/image";
import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { SparklesCore } from "@/app/components/ui/sparkles";

interface Course {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	instructor: string;
	isFeatured: boolean;
	image: string;
}

export default function AllCoursesPage() {
	return (
		<div className="h-auto w-auto">
			<SparklesCore
				id="tsparticlesfullpage"
				background="transparent"
				minSize={0.6}
				maxSize={1.4}
				particleDensity={60}
				className="w-auto h-screen absolute"
				particleColor="#FFFFFF"
			/>
			<div className=" bg-black py-12 pt-36">
				<div>
					<h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white">
						All Courses List ({courseData.courses.length})
					</h1>
				</div>
				<div className="flex h-auto gap-10 flex-wrap justify-center ">
					{courseData.courses?.map((course: Course) => {
						return (
							<div
								key={course.id} // Ensure each item has a unique key
								className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96"
							>
								<div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
									{/* Ensure the image URL exists */}
									{course.image && (
										<Image
											alt="card-image"
											src={course.image}
											layout="responsive"
											width={800}
											height={450}
										/>
									)}
								</div>
								<div className="p-4">
									<h6 className="mb-2 text-slate-800 text-xl font-semibold">
										{course.title}
									</h6>
									<p className="text-slate-600 leading-normal font-light">
										{course.description}
									</p>
								</div>
								<div className="px-4 pb-4 pt-0 mt-2">
									<button
										className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
										type="button"
									>
										Read more
									</button>
								</div>
								{/* <HoverEffect /> */}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
