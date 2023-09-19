import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import artistsList from "../public/artists.json";
import { Montserrat } from "next/font/google";
import ArtistCardSmall from "@/components/ArtistCardSmall";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

const artists = () => {
  const data = artistsList;
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView, entry } = useInView(undefined);
  const [showNav, setShowNav] = useState(false);
  const [language, setLanguage] = useState("da");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const [currentLetter, setCurrentLetter] = useState("");
  const alfabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "æ",
    "ø",
    "å",
  ];

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
        <title>KAIKA MUSIC | Artister</title>
        <link rel="icon" href="/kaika_logo.png" />
        <meta name="description" content="Landsdækkende booking bureau" />
      </Head>
      <main className={montserrat.className}>
        {/* Lines */}
        <div className=" line absolute top-0 left-0 w-screen h-0 flex  gap-36  ">
          <div className="  transition-all duration-1000 line left-[15%] fixed h-0 w-[8px] bg-rose delay-[300ms]  "></div>

          <div className="  transition-all duration-[3000ms] line left-[20%] fixed h-0 w-[8px] bg-rose delay-[600ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[83%] fixed h-0 w-[6px] bg-mauve delay-[150ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[84.5%] fixed h-0 w-[6px] bg-sunglow delay-[1000ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[86%] fixed h-0 w-[6px] bg-mint-green delay-[300ms] "></div>
        </div>
        <section className={`h-screen w-screen relative  flex flex-col p-8`}>
          <div
            className={` artist-bg duration-1000 delay-[1500ms] transition-all absolute top-0 left-0 w-screen h-screen
           `}
          >
            {/* Logo and Navigation */}

            <nav
              className={` z-[9999] transition-all duration-500 flex justify-between h-auto top-0  left-0 right-0 fixed p-8  ${
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
                <div className=" flex items-center justify-between z-[99999]">
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
              <Link className=" z-[9999]" href="/">
                <Image
                  className=" translate-x-[-50%] absolute left-1/2 z-10"
                  src="/logo_yellow.png"
                  alt="kaika logo"
                  width={130}
                  height={130}
                />
              </Link>

              {/* CTA button */}
              <Link href="/contact" className=" ">
                <h2 className="uppercase flex justify-center text-sm items-center py-2 px-4 font-semibold text-white border  border-sunglow hover:bg-sunglow hover:text-space-cadet transition-all duration-300">
                  Kontakt
                </h2>
              </Link>
            </nav>

            {/* Artist text */}
            <div className=" flex flex-col justify-center items-center z-10 mx-auto translate-x-[-50%] absolute left-1/2 top-[40%]">
              <Image
                src="/artisttext.png"
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
        {/* Artist section */}
        <section className=" w-screen flex flex-col pt-40">
          {/* Filter and letters */}
          <div className=" ml-[15%] h-auto w-full flex max-w-5xl justify-start gap-x-4 z-[999]">
            {/* Search input */}
            <div
              ref={ref}
              className="flex items-center text-white placeholder:text-sunglow border-2 border-rose rounded-md bg-space-cadet px-4 py-2 active:border-rose outline-none focus:border-rose"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-sunglow mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(event: any) => setFilter(event.target.value)}
                className=" text-white placeholder:text-sunglow outline-none bg-space-cadet "
                type="text"
              />
            </div>
            <div className=" flex gap-2 bg-space-cadet">
              {alfabet.map((letter) => (
                <button
                  onClick={() => {
                    if (currentLetter === letter) {
                      setCurrentLetter("");
                    } else {
                      setCurrentLetter(letter);
                    }
                  }}
                  className={` font-bold text-2xl uppercase ${
                    letter == currentLetter
                      ? "text-mauve underline"
                      : "text-sunglow"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
            <button
              onClick={() => {
                setCurrentLetter("");
                setFilter("");
              }}
              className="uppercase flex justify-center text-sm items-center py-2 px-4 font-semibold text-white bg-space-cadet border-2  border-rose hover:bg-rose hover:text-space-cadet transition-all duration-300"
            >
              Nulstil
            </button>
          </div>
          {/* Artist cards */}
          <div className=" mx-auto [&>*:nth-child(even)]:translate-y-20 w-full flex flex-wrap justify-center gap-12 max-w-7xl mt-20">
            {data
              ?.filter((e) => {
                if (filter === "") {
                  return e;
                } else {
                  return e.name
                    .toLocaleLowerCase()
                    .includes(filter.toLocaleLowerCase());
                }
              })
              .filter((e) => {
                if (currentLetter === "") {
                  return e;
                } else {
                  return (
                    e.name[0].toLocaleLowerCase() ===
                    currentLetter.toLocaleLowerCase()
                  );
                }
              })
              .map((e) => (
                <ArtistCardSmall key={e.id} name={e.name} image={e.image} />
              ))}
          </div>
        </section>
        <div className=" mt-20 w-screen h-auto absolute left-0">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default artists;
