import React from "react";
import artists from "../public/artists.json";
import { useState, useEffect } from "react";
import { TbLoaderQuarter, TbLoader } from "react-icons/tb";

interface BookingModalProps {
  onClick: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ onClick }) => {
  const data = artists;
  const [formData, setFormData] = useState({});
  const [formLength, setFormLength] = useState(0);
  const [status, setStatus] = useState("form");

  /* Dynamic progressbar based on number of elements in the formData object */
  useEffect(() => {
    const formDataKeys = Object.keys(formData);
    const newFormLength = (formDataKeys.slice(0, 5).length / 5) * 100;
    setFormLength(newFormLength);
  }, [formData]);

  return (
    <div className=" animate-in w-screen h-[101vh] bg-black bg-opacity-50 absolute top-0 left-0 flex justify-center items-center z-[999999999]">
      <div className=" relative w-[60rem] h-[30rem] bg-space-cadet bg-opacity-100 flex flex-col items-center py-12 px-8 gap-y-4">
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

        <h2 className=" text-3xl font-bold text-sunglow uppercase">
          Bookingformular
        </h2>

        {status === "form" && (
          <>
            {/* Progress bar */}
            <div className=" relative w-1/2 mx-auto h-3 bg-white">
              <div
                style={{ width: `${formLength}%` }}
                className={` h-full absolute top-0 left-0 bg-mauve transition-all duration-500 delay-500 shadow-lg`}
              ></div>
            </div>
            <form className=" w-full h-full flex justify-between mt-8 gap-8 text-space-cadet">
              {/* left */}
              <div className="  w-1/2 h-4/5 flex flex-col justify-around text-sm">
                <input
                  required
                  placeholder="Navn"
                  className="w-full h-1/5 bg-white placeholder-space-cadet p-2 uppercase font-bold text-sm"
                  type="text"
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                  }}
                />
                <input
                  required
                  placeholder="Telefonnummer"
                  className="w-full h-1/5 bg-white placeholder-space-cadet p-2 uppercase font-bold text-sm"
                  type="text"
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                />
                <input
                  required
                  placeholder="E-mail"
                  className="w-full h-1/5 bg-white placeholder-space-cadet p-2 uppercase font-bold text-sm"
                  type="mail"
                  onChange={(e) => {
                    setFormData({ ...formData, mail: e.target.value });
                  }}
                />
              </div>
              {/* right */}
              <div className="  w-1/2 h-4/5 flex flex-col justify-around placeholder-space-cadet text-sm">
                <input
                  required
                  onFocus={(e) => (e.target.type = "date")}
                  placeholder="Dato for arrangement"
                  className="w-full h-1/5 bg-white placeholder-space-cadet p-2 uppercase font-bold text-sm"
                  type="text"
                  onChange={(e) => {
                    setFormData({ ...formData, date: e.target.value });
                  }}
                />
                <select
                  required
                  defaultValue={"Vælg kunstner"}
                  className="w-full h-1/5 bg-white placeholder-space-cadet p-2 uppercase font-bold text-sm"
                  onChange={(e) => {
                    setFormData({ ...formData, artist: e.target.value });
                  }}
                >
                  <option disabled>Vælg kunstner</option>
                  {data.map((artist) => (
                    <option key={artist.id} value={artist.name}>
                      {artist.name}
                    </option>
                  ))}
                </select>
                <input
                  placeholder="Kommentar"
                  className="w-full h-1/5 bg-white placeholder-space-cadet p-2 uppercase font-bold text-sm"
                  type="text"
                  onChange={(e) => {
                    setFormData({ ...formData, comment: e.target.value });
                  }}
                />
              </div>
            </form>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(formData);
                setStatus("loading");
                setTimeout(() => {
                  setStatus("success");
                }, 1000);
                setTimeout(() => {
                  onClick();
                }, 4000);
              }}
              className="uppercase flex justify-center text-sm items-center py-2 px-4 font-semibold text-white border  border-mauve hover:bg-mauve hover:text-space-cadet transition-all duration-300"
              type="submit"
            >
              Send
            </button>
          </>
        )}
        {status === "loading" && (
          <div className=" w-full h-full flex justify-center items-center relative">
            <h2
              className="
            text-2xl font-bold text-sunglow uppercase animate-pulse"
            >
              sender...
            </h2>
          </div>
        )}
        {status === "success" && (
          <div className=" w-full h-full flex justify-center items-center relative">
            <div className=" flex flex-col gap-4 text-white font-semibold text-2xl text-center">
              <h2>Tak for din forespørgsel!</h2>
              <h2>Du modtager et svar indenfor 24 timer.</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
