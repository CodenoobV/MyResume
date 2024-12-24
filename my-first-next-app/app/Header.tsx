import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h1>My First Next.js App</h1>
        <nav>
            <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/request">Submit Your Request</Link>
            </li>
            </ul>
        </nav>
    </header>
  );
}