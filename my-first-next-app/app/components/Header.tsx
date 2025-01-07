import Link from "next/link";

const Header = () => {
    return (
        <nav className="text-2xl font-bold ml-auto">
            <Link className="bg-slate-600 px-1 py-1 mr-3" href="/">Home</Link>
            <Link className="bg-slate-600 px-1 py-1 mr-3" href="/todo">Todo</Link>
            <Link className="bg-slate-600 px-1 py-1 mr-1"href="/resume">My Resume</Link>
        </nav>
    );
};

export default Header;