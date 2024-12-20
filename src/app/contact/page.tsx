"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { useRouter } from "next/navigation";

export default function ContactUsPage() {
	const router = useRouter();

	const handleSubmit = (): void => {
		router.push("/");
	};
	return (
		<div className="min-h-screen flex justify-center items-center z-100">
			<div className="w-96 px-4 md:px-0 mt-10">
				<h2 className="text-2xl font-semibold text-white mb-6">
					Say Something!
				</h2>
				<div className="w-full">
					<div className="w-auto">
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-gray-300 text-sm font-bold mb-2"
							>
								Your Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="John Doe"
								required
								className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-gray-300 text-sm font-bold mb-2"
							>
								Your Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="rohit@example.com"
								required
								className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
							/>
						</div>
						<div className="mb-6">
							<label
								htmlFor="message"
								className="block text-gray-300 text-sm font-bold mb-2"
							>
								Your Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								placeholder="How can we help you?"
								required
								className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-700 text-white"
							></textarea>
						</div>
						<button
							// type="submit"
							onClick={handleSubmit}
							className="bg-emerald-500 w-full text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
						>
							Send Message
						</button>
					</div>
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
