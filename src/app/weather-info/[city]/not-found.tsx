"use client";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage: NextPage = () => {
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
        Sorry! We cannot find the city that you are looking for. Please try
        again later
      </div>
    </div>
  );
};

export default NotFoundPage;
