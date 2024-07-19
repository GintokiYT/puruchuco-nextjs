import AcademicCalendar from "@/components/AcademicCalendar/AcademicCalendar";
import HeroHome from "@/components/HeroHome/HeroHome";
import HeaderLayout from "@/layouts/HeaderLayout/HeaderLayout";

import { FaGraduationCap } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <HeaderLayout />
      <HeroHome></HeroHome>
      <AcademicCalendar />
      <div className="w-full max-w-4xl m-auto flex justify-center gap-8">
        <div className="flex flex-col justify-center items-center gap-1 w-64">
          <FaGraduationCap size={32}/>
          <p className="text-center">Educación</p>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-64 text-[var(--color-4)]">
          <IoMdFootball size={32}/>
          <p className="text-center">Deporte</p>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-64 text-[var(--color-3)]">
          <FaBookReader size={32}/>
          <p className="text-center">Lectura</p>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.</p>
        </div>
      </div>
    </>
  );
}
