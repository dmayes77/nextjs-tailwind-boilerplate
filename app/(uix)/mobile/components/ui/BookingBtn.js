"use client";

import Button from "./Button";

export default function BookingBtn() {
  const handleBooking = () => {
    console.log("Booking clicked!");
    // You can add more logic here
  };

  return (
    <Button onClick={handleBooking}>
      Book an Appointment
    </Button>
  );
}
