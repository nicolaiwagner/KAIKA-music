import React from "react";
import Image from "next/image";

interface EmployeeProps {
  image: string;
  title: string;
  name: string;
  mail: string;
  phone: string;
}

const Employee: React.FC<EmployeeProps> = ({
  image,
  title,
  name,
  mail,
  phone,
}) => {
  return (
    <div className=" flex gap-16 w-[50rem] h-[12rem] items-center">
      {/* Image wrapper */}
      <div className=" w-2/5">
        <Image
          className=" h-full w-full object-cover"
          src={image}
          alt="Kai"
          width={500}
          height={500}
        />
      </div>
      {/* text wrapper  */}
      <div className="flex flex-col gap-4">
        <h2 className=" text-mauve uppercase font-bold text-xl">{title}</h2>
        <p className="uppercase text-white text-lg">{name}</p>
        <a
          href={`mailto:${mail}`}
          className="uppercase hover:text-sunglow transition-all text-white text-lg"
        >
          {mail}
        </a>
        <p className="uppercase text-white text-lg">{phone}</p>
      </div>
    </div>
  );
};

Employee.defaultProps = {
  image: "/employees/kai.png",
  title: "Job titel",
  name: "Fulde Navn",
  mail: "Mail",
  phone: "Mobil",
};

export default Employee;
