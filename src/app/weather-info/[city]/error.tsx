"use client";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const ErrorPage: NextPage = () => {
  return (
    <div className="h-screen bg-zinc-100 p-6">
      <div className="flex justify-center">
        <Link href={"/"}>
          <Image
            src="/img/logo.png"
            alt="Attactor Logo"
            width={200}
            height={100}
          />
        </Link>
      </div>

      <div className="text-center text-lg mt-6">
        Something went error. Please try again later.
      </div>
    </div>
  );
};

export default ErrorPage;
