import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import dates from "../public/calendar.json";

const montserrat = Montserrat({ subsets: ["latin"] });

const concerts = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView, entry } = useInView(undefined);
  const [showNav, setShowNav] = useState(false);
  const [language, setLanguage] = useState("da");
  const [activeMonth, setActiveMonth] = useState("Juni");
  const [calendar, setCalendar] = useState(dates.juni);
  const [month, setMonth] = useState("6");

  useEffect(() => {
    if (calendar === dates.juni) {
      setMonth(".6");
    } else if (calendar === dates.juli) {
      setMonth(".7");
    } else if (calendar === dates.august) {
      setMonth(".8");
    } else if (calendar === dates.september) {
      setMonth(".9");
    } else if (calendar === dates.oktober) {
      setMonth(".10");
    } else if (calendar.length >= 1) {
      setMonth("");
    }
  }, [calendar]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const animateLines = () => {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
        line.classList.add("animate-line");
      });
    };
    if (inView) {
      animateLines();
    } else if (!inView) {
      const lines = document.querySelectorAll(".line");
      lines.forEach((line) => {
        line.classList.remove("animate-line");
      });
    }
  }, [inView]);
  return (
    <>
      <Head>
        <title>KAIKA MUSIC | Koncerter</title>
        <link rel="icon" href="/kaika_logo.png" />
        <meta name="description" content="Landsdækkende booking bureau" />
      </Head>
      <main className={montserrat.className}>
        {/* Lines */}

        <div className=" left-0   w-full z-[9999] ">
          <Image
            className=" translate-y-1"
            src="/overlayxl.png"
            fill
            alt="Overlay"
          />
        </div>
        <section className={`h-screen w-screen relative flex flex-col p-8`}>
          <div
            className={` concert-bg duration-1000 delay-[1500ms] transition-all absolute top-0 left-0 w-screen h-screen
           `}
          >
            {/* Logo and Navigation */}

            <nav
              ref={ref}
              className={` transition-all duration-500 flex justify-between h-auto top-0  left-0 right-0 fixed p-8  ${
                showNav
                  ? "bg-space-cadet bg-opacity-40 backdrop-blur z-[99999]"
                  : ""
              }
          `}
            >
              {/* Menu */}
              <div
                className={`left-0 h-screen p-8 transition-all duration-500 z-[9999999] absolute top-0 ${
                  menuOpen ? "left-0" : "left-[-50%]"
                } w-80 h-full bg-true-black bg-opacity-95 backdrop-blur flex flex-col`}
              >
                <div className=" flex items-center justify-between">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`w-12 h-12 text-white ${
                        menuOpen ? "opacity-100" : "opacity-0"
                      } transition-all delay-300 duration-700 `}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Language options */}
                  <div className=" flex gap-1">
                    <button
                      className={`text-white text-base font-bold uppercase ${
                        language === "da" && "underline underline-offset-2"
                      }`}
                    >
                      {" "}
                      DK{" "}
                    </button>
                    <button className="text-white text-base font-bold uppercase">
                      {" "}
                      EN{" "}
                    </button>
                    <button className="text-white text-base font-bold uppercase">
                      {" "}
                      DE{" "}
                    </button>
                  </div>
                </div>
                {/* Menu links */}
                <div className=" flex flex-col py-12 px-4 text-3xl uppercase text-mint-green font-bold gap-y-8">
                  <Link
                    className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/concerts"
                  >
                    Koncerter
                  </Link>
                  <Link
                    className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/artists"
                  >
                    Artister
                  </Link>
                  <Link
                    className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/about"
                  >
                    Om os
                  </Link>
                  <Link
                    className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/contact"
                  >
                    Kontakt
                  </Link>
                  <Link
                    className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/"
                  >
                    Booking
                  </Link>
                </div>
              </div>
              {/* Burger menu */}
              <button onClick={() => setMenuOpen(!menuOpen)} className=" ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 9a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9zm0 6.75a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Logo */}
              <Link href="/">
                <Image
                  className=" translate-x-[-50%] absolute left-1/2 z-10"
                  src="/koncertlogo.png"
                  alt="kaika logo"
                  width={130}
                  height={130}
                  draggable={false}
                />
              </Link>

              {/* CTA button */}
              <Link href="/contact" className=" ">
                <h2 className="uppercase flex justify-center text-sm items-center py-2 px-4 font-semibold text-white border  border-mint-green hover:bg-mint-green hover:text-space-cadet transition-all duration-300">
                  Kontakt
                </h2>
              </Link>
            </nav>

            {/* Artist text */}
            <div className=" flex flex-col justify-center items-center z-10 mx-auto translate-x-[-50%] absolute left-1/2 top-[40%]">
              <Image
                src="/koncerterimg.png"
                alt="artist text"
                width={800}
                height={800}
                draggable={false}
                priority
              />
            </div>

            <svg
              onClick={() => {
                // make function that scrolls to next section
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-16 h-16 text-white animate-bounce cursor-pointer absolute bottom-0 right-[48%] transform "
            >
              <path
                fillRule="evenodd"
                d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </section>
        {/* Calendar section */}
        <section className="w-full z-[999] h-auto bg-space-cadet backdrop-blur flex flex-col py-20 px-12 items-center ">
          {/* Select Month */}
          <div className="w-[50rem] h-14 bg-space-cadet border-2 border-mint-green flex mb-20">
            <button
              onClick={() => {
                setCalendar(dates.juni);
                setActiveMonth("Juni");
              }}
              className={` w-1/5 transition-all duration-300 h-full uppercase text-lg border-mint-green ${
                activeMonth === "Juni"
                  ? "bg-mint-green text-space-cadet font-bold"
                  : "text-sunglow"
              } flex items-center justify-center`}
            >
              Juni
            </button>
            <button
              onClick={() => {
                setCalendar(dates.juli);
                setActiveMonth("Juli");
              }}
              className={` w-1/5 transition-all duration-300 h-full uppercase text-lg border-l-2 border-mint-green ${
                activeMonth === "Juli"
                  ? "bg-mint-green text-space-cadet font-bold"
                  : "text-sunglow"
              } flex items-center justify-center`}
            >
              Juli
            </button>
            <button
              onClick={() => {
                setActiveMonth("August");
                setCalendar(dates.august);
              }}
              className={` w-1/5 transition-all duration-300 h-full uppercase text-lg border-l-2 border-mint-green ${
                activeMonth === "August"
                  ? "bg-mint-green text-space-cadet font-bold"
                  : "text-sunglow"
              } flex items-center justify-center`}
            >
              August
            </button>
            <button
              onClick={() => {
                setActiveMonth("September");
                setCalendar(dates.september);
              }}
              className={` w-1/5 transition-all duration-300 h-full uppercase text-lg border-l-2 border-mint-green ${
                activeMonth === "September"
                  ? "bg-mint-green text-space-cadet font-bold"
                  : "text-sunglow"
              } flex items-center justify-center`}
            >
              September
            </button>
            <button
              onClick={() => {
                setActiveMonth("Oktober");
                setCalendar(dates.oktober);
              }}
              className={` w-1/5 transition-all duration-300 h-full uppercase text-lg border-l-2 border-mint-green ${
                activeMonth === "Oktober"
                  ? "bg-mint-green text-space-cadet font-bold"
                  : "text-sunglow"
              } flex items-center justify-center`}
            >
              Oktober
            </button>
          </div>
          {/* Calendar */}
          <div className="w-full relative">
            {/* Vertical line */}

            {calendar.map((e) => (
              <div className=" text-left relative uppercase w-[70rem] mx-auto border-b-[3px] border-mint-green flex justify-between px-2 py-4 font-light">
                <div className="h-[200%] absolute w-1 left-[10%] top-[-2rem] bg-mint-green "></div>
                {/* left side */}
                <div className=" flex text-sunglow text-2xl w-80 justify-between">
                  <h2 className="w-1/2">{`${e.date}${month}`}</h2>
                  <h2 className="w-1/2 whitespace-nowrap">{e.artist}</h2>
                </div>
                {/* Middle */}
                <div className=" flex text-sunglow text-2xl gap-x-8 justify-between">
                  <h2 className="w-1/2 text-mauve whitespace-nowrap">
                    {e.venue}
                  </h2>
                  <Link
                    className=" whitespace-nowrap font-bold text-mint-green ml-12 hover:scale-105 transition-all duration-300"
                    href={"/"}
                  >
                    Køb billet
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* News */}
        <section className=" mt-20 w-full relative  bg-space-cadet flex flex-col h-[30rem] items-center overflow-hidden ">
          {/* Text wrapper  */}
          <div className=" absolute top-0 left-0 z-[999] px-14 py-14 flex flex-col gap-8">
            <h2 className=" text-3xl uppercase font-bold text-white">
              Introducing: Faustix
            </h2>
            <p className=" max-w-lg text-xl text-white mt-12 font-normal">
              Kaika Music er stolte af at byde velkommen til Faustix! Faustix
              behøver næppe nogen større introduktion, da han allerede har gjort
              sig bemærket som en af landets allerbedste DJ´s og producere…
            </p>

            <button className=" flex text-white items-center gap-4 hover:scale-105 transition-all">
              <p className=" text-xl font-bold uppercase">Book nu</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* Image container */}
          <div className="w-full h-full absolute top-0 left-0">
            <Image
              className="object-cover z-0"
              src="/faustix_stor.png"
              alt="Faustix"
              width={2000}
              height={2000}
            />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default concerts;
