import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import dayjs from "dayjs";
import React from "react";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p>Ebad&apos;s Portfolio</p>
        <ul>
          {navLinks.map((item) => (
            <li key={item?.id} onClick={() => openWindow(item?.type)}>
              <p>{item?.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map((v) => (
            <li key={v?.id}>
              <img src={v?.img} alt={`icon-${v?.id}`} className="icon-hover" />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("dddd MMMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
