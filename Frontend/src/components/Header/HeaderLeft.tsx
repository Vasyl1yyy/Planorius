import icon from '../../img/Planorius.png';
import { FaBars } from 'react-icons/fa6';
import { GoHomeFill } from 'react-icons/go';
import { CgGoogleTasks } from 'react-icons/cg';
import { FaRepeat } from 'react-icons/fa6';
import { FaFileContract } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { RiSettings4Fill } from 'react-icons/ri';
import { NavLink } from 'react-router';
import { useState } from 'react';
import NavLinkComponents from './headerComponents/NavLinkComponents';

export default function HeaderLeft() {
  const [active, setActive] = useState('w-14');
  const [activePage, setActivePage] = useState(window.location.pathname);

  return (
    <div
      className={
        'grid grid-cols-1 grid-rows-10 items-center justify-center h-full  rounded-3xl p-1 bg-black-300 border-2 border-black-400 hover:border-basic overflow-hidden ' +
        active +
        ' transition-all duration-300 ease-in-out'
      }
    >
      <div className="text-3xl text-black-400 hover:text-basic transition delay-100 ease-in-out align-middle text-center pt-3 h-full w">
        <button
          className="cursor-pointer w-full flex items-start justify-center h-full"
          onClick={() => setActive(active === 'w-14' ? 'w-40' : 'w-14')}
        >
          <FaBars />
        </button>
      </div>
      <div className="h-full ml-0.5">
        <NavLink
          to="/"
          className="pointer flex items-center justify-center"
          onClick={() => setActivePage(window.location.pathname)}
        >
          <img className="w-10" src={icon} alt="" />
          {active === 'w-40' && (
            <span className="text-white text-lg mb-[-4px] ml-2">
              <span className="text-basic font-bold">P</span>lanorius
            </span>
          )}
        </NavLink>
      </div>
      <div
        className="flex flex-col ml-2 justify-top gap-5 row-span-7 h-full "
        onClick={() => setActivePage(window.location.pathname)}
      >
        <NavLinkComponents
          to="/"
          icon={<GoHomeFill className="text-basic w-[30px] " />}
          label="home"
          active={active}
          activePage={activePage === '/' ? true : false}
        />
        <NavLinkComponents
          to="/tasks"
          icon={<CgGoogleTasks className="text-basic w-[30px] " />}
          label="tasks"
          active={active}
          activePage={activePage === '/tasks' ? true : false}
        />
        <NavLinkComponents
          to="/habits"
          icon={<FaRepeat className="text-basic w-[30px] text-2xl" />}
          label="habits"
          active={active}
          activePage={activePage === '/habits' ? true : false}
        />
        <NavLinkComponents
          to="/scripts"
          icon={<FaFileContract className="text-basic w-[30px] text-2xl" />}
          label="scripts"
          active={active}
          activePage={activePage === '/scripts' ? true : false}
        />

        <NavLinkComponents
          to="/friends"
          icon={<BsPeopleFill className="text-basic w-[30px]" />}
          label="friends"
          active={active}
          activePage={activePage === '/friends' ? true : false}
        />
      </div>
      <div
        className="flex flex-col ml-2  justify-end pb-2 h-full gap-3 "
        onClick={() => setActivePage(window.location.pathname)}
      >
        <NavLinkComponents
          to="/profile"
          icon={<BsFillPersonFill className="text-basic w-[30px]" />}
          label="profile"
          active={active}
          activePage={activePage === '/profile' ? true : false}
        />
        <NavLinkComponents
          to="/settings"
          icon={<RiSettings4Fill className="text-basic w-[30px]" />}
          label="settings"
          active={active}
          activePage={activePage === '/settings' ? true : false}
        />
      </div>
    </div>
  );
}
