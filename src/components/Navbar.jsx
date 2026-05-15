"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-white py-3">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <ul className="flex gap-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>

          <li>
            <Link href={"/my-bookings"}>My Booking</Link>
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

        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    referrerPolicy="no-referrer"
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button onClick={handleSignOut} variant="danger" size="sm">
                  Logout
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>

              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
