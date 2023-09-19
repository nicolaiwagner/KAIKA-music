import React from "react";
import Image from "next/image";

interface ArtistCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ArtistCard: React.FC<ArtistCardProps> = (props: ArtistCardProps) => {
  return (
    <div
      onClick={props.onClick}
      className={` relative aspect-[5/7] h-[28rem] cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 `}
    >
      <div className=" top-0 left-0 z-10 absolute w-full h-full flex flex-col items-center justify-end py-20">
        <h3 className="text-center z-10 uppercase text-3xl text-white drop-shadow-lg ">
          {props.name}
        </h3>
      </div>
      <Image
        alt={props.name}
        width={500}
        height={700}
        className=" z-0 object-cover h-full top-0 left-0 absolute"
        src={props.image}
      />
    </div>
  );
};

ArtistCard.defaultProps = {
  name: "Artist Name",
  image: "/presse_kit/OUTLANDISH/Outlandish 2023 stor format.jpg",
};

export default ArtistCard;
