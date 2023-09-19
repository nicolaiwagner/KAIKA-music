import React from "react";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsSpotify } from "react-icons/bs";
import Link from "next/link";

interface ArtistModalProps {
  name: string;
  image: string;
  description: string;
  spotify: string;
  pressekit: string;
  onClick: () => void;
  facebook: string;
  instagram: string;
  book: () => void;
}

const ArtistModal: React.FC<ArtistModalProps> = ({
  name,
  image,
  description,
  spotify,
  facebook,
  instagram,
  pressekit,
  book,

  onClick,
}) => {
  return (
    <div
      className={` animate-in w-screen h-[101vh] bg-black bg-opacity-50 fixed left-0 flex justify-center items-center z-[999999999]`}
    >
      <div className=" relative w-[80rem] h-[37rem] bg-space-cadet bg-opacity-100 flex flex-col items-center py-12 px-8 gap-y-4">
        <svg
          onClick={onClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-sunglow absolute top-8 right-8 cursor-pointer hover:scale-105 active:scale-95 transition-all "
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className=" font-bold text-3xl uppercase text-mint-green">
          {name}
        </h2>
        <div className="  h-3/4 w-full my-auto flex gap-x-8">
          <div className=" h-full w-3/4  flex border border-white">
            <div className=" h-full w-1/2 overflow-hidden flex">
              <Image
                className="object-cover"
                alt="Artist image"
                src={image}
                width={600}
                height={600}
                priority
              />
            </div>
            <div className="w-1/2 text-lg overflow-y-scroll relative">
              <p className=" text-white p-4">{description}</p>
              {description.length > 450 && (
                <div className="w-fill h-8 sticky left-0 bottom-0 backdrop-brightness-[50%] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/4  flex flex-col items-center justify-end px-2 py-4 gap-4">
            <div className=" flex gap-1 mt-4 text-white">
              <Link target="_blank" href={facebook}>
                <BsFacebook className="inline-block mr-2 text-3xl hover:text-mint-green transition-all" />
              </Link>
              <Link target="_blank" href={spotify}>
                <BsSpotify className="inline-block mr-2 text-3xl hover:text-mint-green transition-all" />
              </Link>
              <Link target="_blank" href={instagram}>
                <BsInstagram className="inline-block mr-2 text-3xl hover:text-mint-green transition-all" />
              </Link>
            </div>
            <Link
              className=" w-40 flex justify-center py-2 px-6 border-2 border-sunglow text-sunglow font-semibold uppercase text-sm hover:text-space-cadet hover:bg-sunglow transition-all"
              target="_blank"
              href={pressekit}
            >
              Pressekit
            </Link>
            <button
              className=" w-40 flex justify-center py-2 px-6 border-2 border-mauve text-space-cadet bg-mauve font-semibold uppercase text-sm hover:bg-space-cadet hover:text-mauve transition-all"
              onClick={book}
            >
              Book Artist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ArtistModal.defaultProps = {
  name: "Artist Name",
  image: "/presse_kit/FAUSTIX/Faustix_november2022_@Nikolaj Osorio_WEB_4.jpg",
  description: "Artist Description",
  spotify:
    "https://open.spotify.com/artist/2hazSY4Ef3aB9ATXW7F5w3?si=8e9e9e9e9e9e9e9e",
  pressekit: "https://www.google.com",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
};

export default ArtistModal;
