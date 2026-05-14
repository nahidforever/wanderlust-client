import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/booking/${user.id}`);

  const data = await res.json();

  console.log(data);

  return (
    <div className="max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-bold">My Bookings</h1>
    </div>
  );
};

export default MyBookings;
