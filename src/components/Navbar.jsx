import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="pt-6 absolute left-[50%] translate-x-[-50%]">
      <ul
        className="relative flex w-fit rounded-md border border-stroke-color bg-button-color text-white p-1 mx-auto"
        onMouseLeave={() => {
          setPosition((prv) => ({
            ...prv,
            opacity: 0,
          }));
        }}
      >
        <Navs setPosition={setPosition}>Home</Navs>
        <Navs setPosition={setPosition}>Projects</Navs>
        <Navs setPosition={setPosition}>Contact</Navs>

        <Block position={position} />
      </ul>
    </div>
  );
};

const Navs = ({ children, setPosition }) => {
  const ref = useRef();
  return (
    <li
      className="relative z-10 block cursor-pointer px-3 py-2 uppercase text-xs text-white "
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          width,
          left: ref.current.offsetLeft,
          opacity: 1,
        });
      }}
    >
      <Link to={`${children == "Home" ? "/" : `/${children.toLowerCase()}`}`}>{children}</Link>
    </li>
  );
};

const Block = ({ position }) => {
  return (
    <motion.li
      className="absolute z-0 h-8 w-36 rounded bg-[#383838]"
      animate={position}
    />
  );
};

export default Navbar;
