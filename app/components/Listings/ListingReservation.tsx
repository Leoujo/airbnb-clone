"use client";

import React from "react";

interface ListingReservationProps {
  price: number;
  totalPrice: number;
}

export const ListingReservation: React.FC<ListingReservationProps> = ({ price, totalPrice }) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ Price</div>
        <div className="font-light text-neutral-600"> night</div>
      </div>
      <hr />
      {/* <Calendar /> */}
    </div>
  );
};
