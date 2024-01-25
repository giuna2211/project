import { useState } from "react";
import HeaderNavigators from "./Header-navigators-component";

export default function Header() {
  const [activePage, setActoinActivePage] = useState(1);
  return (
    <header>
      <a href="" className="header-logo">
        <img src="" />
        <span>name</span>
      </a>
      <HeaderNavigators
        number={1}
        activePage={activePage}
        setActoinActivePage={setActoinActivePage}
      />
      <HeaderNavigators
        number={2}
        activePage={activePage}
        setActoinActivePage={setActoinActivePage}
      />
      <HeaderNavigators
        number={3}
        activePage={activePage}
        setActoinActivePage={setActoinActivePage}
      />
    </header>
  );
}
