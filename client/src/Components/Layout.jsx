import  Burger from "./Burger";
import Nav from "./Nav";
import { useState, useRef } from "react";
import { useOnClickOutside } from "../services/hooks"
// import FocusLock from 'react-focus-lock';

export default function Layout({ children }) {
  const node = useRef();
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return (
    <div className="layout">
      <div ref={node}>
        
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Nav open={open} setOpen={setOpen} id={menuId} />
        
      </div>
      <main>{children}</main>
    </div>
  )
}