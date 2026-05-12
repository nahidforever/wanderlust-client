import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const { _id, imageUrl, price, destinationName, duration, country } =
    destination;
  return (
    <div className="shadow-sm border">
      <Image
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      ></Image>

      <div className="flex items-center">
        <LuMapPin /> <span>{country}</span>
      </div>

      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{destinationName}</h2>
        <p className="text-2xl font-bold">$ {price}</p>
      </div>

      <div className="flex gap-1 items-center">
        <FaCalendar /> <span>{duration}</span>
      </div>

      <Link href={`/destinations/${_id}`}>
        <Button variant="ghost" className="mt-5 text-cyan-500">
          Book Now
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
