import React from "react";

import Image from "next/image";

import { FaRegCalendar } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { EditModal } from "@/components/EditModal";
import { DeleteAlert } from "@/components/DeleteAlert";
import BookingCard from "@/components/BookingCard";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  console.log(token);

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  const destination = await res.json();

  const { imageUrl, price, destinationName, duration, country, description } =
    destination;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-end gap-5">
        <EditModal destination={destination}></EditModal>
        <DeleteAlert destination={destination}></DeleteAlert>
      </div>

      <div className="flex items-center justify-end gap-5"></div>

      <div className="flex  items-center gap-3 justify-end mt-5 mb-3"></div>
      <Image
        className="w-full h-100 object-cover"
        alt={destinationName}
        src={imageUrl}
        height={500}
        width={800}
      />

      <div className="flex justify-between">
        <div className="p-2">
          <div className="flex items-center gap-1">
            <LuMapPin /> <span>{country}</span>
          </div>
          <div className="flex justify-between">
            <div>
              <div>
                <h2 className="text-xl font-bold">{destinationName}</h2>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegCalendar /> {duration}
              </div>
            </div>
          </div>

          <h1 className="mt-10 text-2xl font-bold">Overview</h1>

          <p>{description}</p>
        </div>

        <BookingCard destination={destination} />
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
