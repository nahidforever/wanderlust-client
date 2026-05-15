import DestinationCard from "@/components/DestinationCard";
import React from "react";

const DestinationPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const destinations = await res.json();

  return (
    <div className="max-w-7xl mx-auto w-full mb-21">
      <h2>All Destination</h2>
      <div className="grid grid-cols-3 gap-4 mt-12">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination._id}
            destination={destination}
          ></DestinationCard>
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
