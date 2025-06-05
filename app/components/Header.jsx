import { Link } from "next-view-transitions";

export default function Header() {
  return (
    <header>
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

// "use client";

// import { useState } from "react";
// import { Link } from "next-view-transitions";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="p-4 pt-2 flex items-center justify-between md:px-8">
//       <div className="logo text-xl font-medium">
//         <Link href="/">PersonaQuest</Link>
//       </div>

//       {/* Hamburger Toggle (mobile only) */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="text-xl md:hidden"
//         aria-label="Toggle menu"
//       >
//         {menuOpen ? "✖" : "☰"}
//       </button>

//       {/* Desktop Nav */}
//       <nav className="hidden md:block">
//         <ul className="flex gap-6">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/quiz">Quiz</Link>
//           </li>
//           <li>
//             <Link href="/about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <nav className="absolute top-16 left-0 w-full  shadow-md md:hidden z-10">
//           <ul className="flex flex-col items-center gap-4 py-4">
//             <li>
//               <Link href="/" onClick={() => setMenuOpen(false)}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/quiz" onClick={() => setMenuOpen(false)}>
//                 Quiz
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" onClick={() => setMenuOpen(false)}>
//                 About
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }
