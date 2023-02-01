import Image from "next/image";
import Link from "next/link";

function HeaderPage() {
  return (
    <nav className="items-cente flex justify-between space-x-2 px-10 py-5 font-bold">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https:links.papareact.com/1m8"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>PAPAFAM</h1>
      </div>
      <div>
        <Link
          href="https://www.papareact.com/universityofcode"
          className="flex items-center rounded-full bg-gray-900 px-5 py-3 text-center text-sm text-[#F7AB0A] md:text-base"
        >
          Sign up to the University of Code
        </Link>
      </div>
    </nav>
  );
}

export default HeaderPage;
