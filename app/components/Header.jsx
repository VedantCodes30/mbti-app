import { Link } from "next-view-transitions";
import React from "react";

function Header() {
  return (
    <header style={{ viewTransitionName: "header" }}>
      <div className="logo">
        <Link href="/">PersonaQuest</Link>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link prefetch href={"/"}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link prefetch href={"/quiz"}>
              Quiz
            </Link>
          </li>

          <li>
            {" "}
            <Link prefetch href={"/about"}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default React.memo(Header);
