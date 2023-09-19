import React from "react";
import Image from "next/image";

interface CompanyLogoProps {
  url: string;
}

const CompanyLogo: React.FC<CompanyLogoProps> = ({ url }) => {
  return (
    <div className="w-32 h-32 flex justify-center items-center">
      <Image
        className="object-contain"
        alt="Icon"
        width={200}
        height={200}
        src={url}
        draggable={false}
      />
    </div>
  );
};

CompanyLogo.defaultProps = {
  url: "/company-icons/carlsberg__logo.png",
};

export default CompanyLogo;
