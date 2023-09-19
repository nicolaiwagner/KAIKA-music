import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
const montserrat = Montserrat({ subsets: ["latin"] });

const contact = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { ref, inView, entry } = useInView(undefined);
  const [showNav, setShowNav] = useState(false);
  const [language, setLanguage] = useState("da");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

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
        <div className=" line absolute top-0 left-0 w-screen h-0 flex  gap-36 z-0 ">
          <div className="  transition-all duration-[3000ms] line left-[83%] fixed h-0 w-[6px] bg-mauve delay-[150ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[84.5%] fixed h-0 w-[6px] bg-sunglow delay-[1000ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[86%] fixed h-0 w-[6px] bg-mint-green delay-[300ms] "></div>
        </div>
        {/* Booking modal */}
        {bookingModalOpen && (
          <BookingModal onClick={() => setBookingModalOpen(false)} />
        )}

        <section className={`h-screen w-screen relative flex flex-col p-8`}>
          <div
            className={`  duration-1000 delay-[1500ms] transition-all absolute top-0 left-0 w-screen h-screen
             `}
          >
            {/* Logo and Navigation */}

            <nav
              ref={ref}
              className={` transition-all duration-500 flex justify-between h-auto top-0  left-0 right-0 fixed p-8  ${
                showNav
                  ? "bg-space-cadet bg-opacity-40 backdrop-blur z-[99999]"
                  : "z-[999999]"
              }
            `}
            >
              {/* Menu */}
              <div
                className={`left-0 h-screen p-8 transition-all duration-500 z-[9999999] absolute top-0 ${
                  menuOpen ? "left-0" : "left-[-50%]"
                } w-80 h-full bg-true-black bg-opacity-95 backdrop-blur flex flex-col`}
              >
                <div className=" flex items-center justify-between z-[9999999]">
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
                <div className="z-[99999] flex flex-col py-12 px-4 text-3xl uppercase text-mint-green font-bold gap-y-8">
                  <Link
                    className=" hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/concerts"
                  >
                    Koncerter
                  </Link>
                  <Link
                    className=" z-[99999] hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/artists"
                  >
                    Artister
                  </Link>
                  <Link
                    className=" z-[99999] hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/about"
                  >
                    Om os
                  </Link>
                  <Link
                    className=" z-[99999] hover:scale-105 active:scale-95 transition-all hover:text-mauve"
                    href="/contact"
                  >
                    Kontakt
                  </Link>
                  <Link
                    className=" z-[99999] hover:scale-105 active:scale-95 transition-all hover:text-mauve"
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
                  src="/logo_contact.png"
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
            <div className=" flex flex-col justify-center items-start  absolute font-montserat text-white mt-40">
              <h2 className="text-[2.4rem] font-semibold uppercase ml-64 pb-[2.2rem] -z-10 ">
                Kontakt os
              </h2>
              <p className="text-[1.2em] max-w-6xl pl-96 text-xl leading-8">
                Har du spørgsmål om billetter og koncerter? Så tøv ikke med at
                kontakte os på mail@kaika.dk. Vores team står klar til at
                besvare alle dine spørgsmål hurtigst muligt. <br />
                <br />
                Hvis du foretrækker telefonisk kontakt, er du mere end velkommen
                til at ringe til os på +45 70 231 233 Vi står klar til at lytte
                og give dig den bedst mulige assistance <br /> <br />
                Vores adresse er Egsagervej 14, 8230 Åbyhøj. Hvis du ønsker at
                sende os en faktura, bedes du venligst bruge følgende
                e-mailadresse: mail@kaika.dk.
              </p>
              <button
                onClick={() => setBookingModalOpen(true)}
                className=" p-2 border-solid border-2 border-rose rounded-md
               uppercase translate-x-[37rem] mt-8 hover:bg-rose hover:text-white transition-all duration-300"
              >
                Send bookingforespørgsel
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default contact;
