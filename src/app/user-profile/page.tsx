"use client";

import Sidebar from "@/components/sidebar";

export default function UserProfile() {

    

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-transparent to-transparent py-20 px-4 flex items-center justify-center">
            <Sidebar />
            <div className="max-w-xl w-full bg-gradient-to-b from-blue-50 via-transparent to-transparent rounded-2xl shadow-2xl border border-blue-700 p-10">
                <div className="text-center mb-10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0xgCzY-QSnwbl4PK03rs3cdwlAnDA13ZIAQ&s"
                        alt="Profile Picture"
                        className="w-32 h-32 rounded-full mx-auto border-4 border-blue-600 shadow-lg transition-transform duration-300 hover:scale-110"
                    />
                    <h1 className="mt-4 text-3xl font-bold text-white">John Doe</h1>
                    <p className="text-blue-500 text-lg font-medium">Software Developer</p>
                </div>

                <div className="text-center space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Contact</h2>
                        <ul className="text-black space-y-2">
                            <li>Email: john.doe@example.com</li>
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Location: San Francisco, CA</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <button
                           
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-blue-600 px-6 py-2 font-semibold  text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            <span className="absolute left-0 top-0 h-full w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            <span className="relative  z-10 flex items-center gap-2">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M15.232 5.232l3.536 3.536M4 13v7h7l9.293-9.293a1 1 0 000-1.414l-5.586-5.586a1 1 0 00-1.414 0L4 13z" />
                                </svg>
                                Edit Profile
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
