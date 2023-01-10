import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <Link href="/" className="logo">
                <div>
                    <Image src="/dev-logo.png" width={128} height={90} alt="Enterprise logo" />
                </div>
            </Link>
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/users">
                Users
            </Link>
        </nav>
    );
};

export default Navbar;