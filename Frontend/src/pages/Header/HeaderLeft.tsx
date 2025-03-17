import icon from '../../img/Planorius.png';
import { FaBars } from 'react-icons/fa6';
import { GoHomeFill } from 'react-icons/go';
import { CgGoogleTasks } from 'react-icons/cg';
import { FaRepeat } from 'react-icons/fa6';
import { FaFileContract } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiSettings4Fill } from 'react-icons/ri';

export default function HeaderLeft() {
  return (
    <div className="grid grid-cols-1 grid-rows-10 items-center justify-center h-full  rounded-3xl p-1 bg-black-300 border-2 border-black-400 hover:border-basic transition delay-100 ease-in-out">
      <div className="text-3xl text-black-400 hover:text-basic transition delay-100 ease-in-out flex items-top justify-center pt-3 h-full">
        <FaBars />
      </div>
      <div className="h-full">
        <img className="w-10" src={icon} alt="" />
      </div>
      <div className="flex flex-col items-center justify-top gap-5 row-span-7 h-full ">
        <div className="text-3xl text-basic">
          <GoHomeFill />
        </div>
        <div className="text-3xl text-basic">
          <CgGoogleTasks />
        </div>
        <div className="text-2xl text-basic">
          <FaRepeat />
        </div>
        <div className="text-2xl text-basic">
          <FaFileContract />
        </div>
        <div className="text-3xl text-basic">
          <BsPeopleFill />
        </div>
      </div>
      <div className="flex flex-col items-center justify-end pb-2 h-full gap-3">
        <div className="text-3xl text-basic">
          <BsFillPersonFill />
        </div>
        <div className="text-3xl text-basic ">
          <RiSettings4Fill />
        </div>
      </div>
    </div>
  );
}
