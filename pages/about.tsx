import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import dates from "../public/calendar.json";
import Employee from "@/components/Employee";

const montserrat = Montserrat({ subsets: ["latin"] });

const about = () => {
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
      setMonth("");
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
        <title>KAIKA MUSIC | Om os</title>
        <link rel="icon" href="/kaika_logo.png" />
        <meta name="description" content="Landsdækkende booking bureau" />
      </Head>
      <main className={montserrat.className}>
        {/* Lines */}
        <div className=" line absolute top-0 left-0 w-screen h-0 flex  gap-36  ">
          <div className="  transition-all duration-[3000ms] line left-[85%] fixed h-0 w-[6px] bg-mauve delay-[150ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[86.5%] fixed h-0 w-[6px] bg-sunglow delay-[1000ms] "></div>

          <div className="  transition-all duration-[3000ms] line left-[88%] fixed h-0 w-[6px] bg-mint-green delay-[300ms] "></div>
        </div>

        <section className={`h-screen w-screen relative flex flex-col p-8`}>
          <div
            className={` duration-1000 delay-[1500ms] transition-all absolute top-0 left-0 w-screen h-screen
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
                  src="/logo_about.png"
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

            {/* Om os text */}
            <div className=" flex flex-col justify-center items-center z-10 mx-auto w-screen h-screen">
              {/* Text wrapper */}
              <div className=" text-white flex flex-col justify-center items-start gap-y-4 max-w-6xl mx-auto">
                <h2 className=" text-4xl uppercase font-bold mb-10">Om os</h2>
                <p className=" ml-10 text-xl max-w-4xl leading-8">
                  Kaika Music er et af landets førende bookingbureauer, og vores
                  varemærke er at levere branchens bedste service.
                  <br />
                  <br />
                  Bag Kaika Music står Kai Koitzsch, som er kendt af mange i
                  musikbranchen og har været en del af denne i mere end 35 år.
                  Kaika Music havde sin opstart i 2007 i et mindre kontor på
                  Marselis Boulevard i Århus. Masser af succes gjorde, at Kaika
                  i 2010 flyttede til Egsagervej i Åbyhøj nær Århus i helt
                  nyistandsatte og lyse kontorlokaler.
                  <br />
                  <br />I dag består Kaika Music af et dynamisk team på i alt
                  fem medarbejdere – alle med masser af energi. Sammen bestræber
                  vi os på at levere branchens bedste service til dig og dit
                  næste arrangement.
                  <br />
                  <br />
                  Holdet bag Kaika Music glæder sig meget til et kommende
                  samarbejde. <br /> <br /> Velkommen til KAIKA MUSIC.
                </p>
              </div>
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
        {/* Værdier text */}
        <div className=" flex flex-col justify-center items-center z-10 mx-auto w-screen h-[50vh] mb-20">
          {/* Text wrapper */}
          <div className=" text-white flex flex-col justify-center items-start gap-y-4 max-w-6xl mx-auto">
            <h2 className=" text-4xl uppercase font-bold mb-10">
              Kaikas værdier
            </h2>
            <p className=" ml-10 text-xl max-w-4xl leading-8">
              Kaika Music har fire værdisæt, som alle medarbejdere handler ud
              fra. Disse værdier er vigtige for vores daglige arbejde og vores
              relationer med andre. De fire værdier er: at holde aftaler,
              kommunikation, engagement og initiativ. Vi fokuserer på at
              overholde aftaler, have en åben og ligefrem kommunikation, vise
              engagement og tage initiativ til at finde nye muligheder. Disse
              værdier er afgørende for at skabe gode oplevelser og relationer.
            </p>
          </div>
        </div>
        {/* services text */}
        <div className=" flex flex-col justify-center items-center z-10 mx-auto w-screen h-[50vh] mb-20">
          {/* Text wrapper */}
          <div className=" text-white flex flex-col justify-center items-start gap-y-4 max-w-6xl mx-auto">
            <h2 className=" text-4xl uppercase font-bold mb-10">
              KAIKAS SERVICES
            </h2>
            <p className=" ml-10 text-xl max-w-4xl leading-8">
              Kaika Music tilbyder forskellige services, herunder musik, lyd/lys
              og scener til arrangementer som foreningsarrangementer,
              firmaarrangementer, byfester og markeder. Vi kan hjælpe med alt
              det praktiske omkring planlægning og afvikling af et arrangement.
              Kaika Music har stor erfaring og kontakterne til at få et
              arrangement til at lykkes, og vi går målrettet efter at levere
              branchens bedste service hver gang.
            </p>
          </div>
        </div>
        {/* services text */}
        <div className=" flex flex-col justify-center items-start max-w-6xl z-10 mx-auto w-screen h-auto">
          {/* Text wrapper */}
          <div className=" text-white flex flex-col justify-center items-start gap-y-4 ml-[6rem] max-w-6xl">
            <h2 className=" text-4xl uppercase font-bold mb-20">
              Mød team kaika
            </h2>
            <div className=" flex flex-col gap-20">
              <Employee
                name="Kai Koitzsch"
                title="BOOKING OG MANAGEMENT"
                mail="kk@kaika.dk"
                phone="+45 70 231 233 / +45 40 16 16 95"
                image="/employees/kai.png"
              />
              <Employee
                name="CASPER WEINREICH"
                title="BOOKING"
                mail="cw@kaika.dk"
                phone="+45 70 231 233 / +45 40 161 673"
                image="/employees/casper.png"
              />
              <Employee
                name="LASSE K. H. PEDERSEN"
                title="PRODUKTIONSMANAGER"
                mail="lp@kaika.dk"
                phone="+45 70 231 233"
                image="/employees/lasse.png"
              />
              <Employee
                name="BETINA L. ANDERSEN"
                title="ØKONOMI"
                mail="kk@kaika.dk"
                phone="+45 70 231 233 "
                image="/employees/betina.png"
              />
              <Employee
                name="NINNA KORSGAARD"
                title="PA & KONTRAKTFORHOLD"
                mail="nk@kaika.dk"
                phone="+45 70 231 233 "
                image="/employees/ninna.png"
              />
              <Employee
                name="MARIE K. L. BORDINGGAARD"
                title="ADMINISTRATIONSELEV"
                mail="mb@kaika.dk"
                phone="+45 70 231 233 "
                image="/employees/marie.png"
              />
            </div>
          </div>
        </div>
        <div className=" w-screen flex justify-center">
          <Link
            href="/contact"
            className=" text-white font-semibold uppercase text-xl px-6 py-2 border-2 border-mauve mt-20 hover:bg-mauve hover:text-space-cadet transition-all "
          >
            Kontakt
          </Link>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default about;
