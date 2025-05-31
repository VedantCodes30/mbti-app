import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link href={"/"}>PersonaQuest</Link>
      </div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link href={"/quiz"}>Quiz</Link>
          </li>
          <li>
            {" "}
            <Link href={"/result"}>Result</Link>
          </li>
          <li>
            {" "}
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
