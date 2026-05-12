import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white p-5">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>

        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>

        <li>
          <Link href={"/my-booking"}>My Booking</Link>
        </li>

        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>

      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          height={140}
          width={140}
          alt="logo"
        ></Image>
      </div>

      <ul className="flex gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>

        <li>
          <Link href={"/login"}>Login</Link>
        </li>

        <li>
          <Link href={"/signin"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
