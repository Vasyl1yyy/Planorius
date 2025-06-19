import { NavLink } from 'react-router';

type NavLinkComponentsProps = {
  to: string;
  icon: React.ReactElement;
  label: string;
  active: string;
  activePage: boolean;
};

export default function NavLinkComponents({
  to,
  icon,
  label,
  active,
  activePage,
}: NavLinkComponentsProps) {
  return (
    <div className="text-3xl text-white flex items-center justify-start">
      <NavLink
        to={to}
        className={
          'pointer w-40 flex items-center relative font-normal hover:text-basic transition delay-100 ease-in-out after:h-0.5 after:w-full after:absolute after:bottom-[-4px] after:rounded-full after:transition-all after:duration-300 hover:after:bg-basic after:right-1 ' +
          (activePage ? 'after:bg-basic' : 'after:bg-black-300')
        }
      >
        {icon}
        {active === 'w-40' && (
          <span className=" text-base mb-[-4px] ml-3 font-normal">{label}</span>
        )}
      </NavLink>
    </div>
  );
}
