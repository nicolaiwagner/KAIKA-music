import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsSpotify } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-screen bg-space-cadet h-[25rem] z-[999] ">
      <Image
        className=" w-screen bg-space-cadet"
        alt="Footer overlay"
        src="/overlay4.svg"
        width={1920}
        height={100}
        draggable={false}
      />
      <div className=" w-full bg-true-black h-auto ">
        {/* Row 1 Logo */}
        <div className="flex justify-start items-center h-20 py-20 px-20">
          <Image
            className="object-contain z-[999]"
            alt="Logo"
            src="/logo_white.png"
            width={150}
            height={150}
          />
        </div>
        {/* Row 2 Links */}
        <div className="flex justify-center items-start pb-12 px-20 gap-64 text-white z-[999]">
          {/* Link box */}
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Kontakt</h2>
            <div className=" flex flex-col text-lg">
              <p>Egsagervej 14</p>
              <p>8230 Åbyhøj</p>
              <Link className=" hover:text-sunglow" href="tel:+45 70 231 233 ">
                Tlf: +45 70 231 233
              </Link>
              <Link className=" hover:text-sunglow" href="mailto:mail@kaika.dk">
                mail@kaika.dk
              </Link>
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Om Kaika</h2>
            <div className=" flex flex-col text-lg">
              <Link className=" hover:text-sunglow" href="/about">
                Om Kaika
              </Link>
              <Link className="cursor-not-allowed" href="#">
                Jobs
              </Link>
              <Link className=" hover:text-sunglow" href="/about">
                Medarbejdere
              </Link>
              <Link className="  hover:text-sunglow" href="/about">
                Værdier
              </Link>
            </div>
          </div>
          <div className=" flex flex-col">
            <h2 className=" font-bold text-xl uppercase">Musik</h2>
            <div className=" flex flex-col text-lg">
              <Link className=" hover:text-sunglow" href="/concerts">
                Kalender
              </Link>
              <Link className=" hover:text-sunglow" href="/artists">
                Artister
              </Link>
              <div className=" flex gap-1 mt-4">
                <Link href="https://www.facebook.com/KaikaMusic">
                  <BsFacebook className="inline-block mr-2 text-3xl hover:text-sunglow transition-all" />
                </Link>
                <Link href="/">
                  <BsSpotify className="inline-block mr-2 text-3xl hover:text-sunglow transition-all cursor-not-allowed" />
                </Link>
                <Link href="https://www.instagram.com/kaika.music/">
                  <BsInstagram className="inline-block mr-2 text-3xl hover:text-sunglow transition-all" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* KAIKA */}
        <div className="flex justify-center items-center h-20 py-20 px-20">
          <p className="text-white font-bold text-lg">Kaika Music</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
