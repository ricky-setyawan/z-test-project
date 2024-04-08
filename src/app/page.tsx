"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import Dashboard from "../components/Layout";

export default function Index() {
  // const { data: session } = useSession();
  // const user = session?.user;

  return (
    <div>
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#513FFF] to-[#52E4FF] text-white font-sans">
          <div className="text-center">
            <span className="w-full text-8xl drop-shadow-2xl">Welcome</span>
            <div className="mt-10 text-blue-600 font-bold flex items-center justify-center">
              <Link href="/login" className="bg-white px-10 py-2 w-36 mx-5 rounded-3xl shadow-xl hover:shadow-2xl">
                Sign In
              </Link>
              <Link href="/signup" className="bg-white px-10 py-2 w-36 mx-5 rounded-3xl shadow-xl hover:shadow-2xl">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
