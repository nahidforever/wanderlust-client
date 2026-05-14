"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import React, { useState } from "react";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);

  const handleBooking = async () => {
    const bookingData = {
      userId: user.id,
      userImage: user.image,
      userName: user.name,
      destinationId: destination._id,
      destinationName: destination.destinationName,
      price: destination.price,
      imageUrl: destination.imageUrl,
      country: destination.country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <Card className="rounded-none border mt-5 mb-18">
      <p className="text-sm text-muted">Starting Form</p>

      <h2 className="text-3xl text-cyan-500 font-bold">${destination.price}</h2>
      <p className="text-sm text-muted">Per Person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBooking}
        className="w-full rounded-none bg-cyan-500"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
