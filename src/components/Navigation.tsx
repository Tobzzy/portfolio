import { useState } from "react";
import styled from "styled-components";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const paths = [
  { path: "#", icon: <AiOutlineHome /> },
  { path: "#about", icon: <AiOutlineUser /> },
  { path: "#experience", icon: <BiBook /> },
  { path: "#services", icon: <RiServiceLine /> },
  { path: "#contact", icon: <BiMessageSquareDetail /> },
];

export const Navigation = () => {
  const [activePath, setActivePath] = useState("#");

  return (
    <Nav>
      {paths.map(({ path, icon }) => (
        <NavLink
          href={path}
          onClick={() => setActivePath(path)}
          className={activePath === path ? "active" : ""}
        >
          {icon}
        </NavLink>
      ))}
    </Nav>
  );
};

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  bottom: 2rem;
  left: calc(50%);
  transform: translateX(-50%);
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

const NavLink = styled.a`
  background: transparent;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.active {
    background: var(--color-primary);
    color: var(--color-bg);
  }
`;
