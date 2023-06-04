"use client";

import Image from "next/image";
import { useCallback, useMemo } from "react";
import HeartButton from "../HeartButton";
import Link from "next/link";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/app/types";
import useCountries from "@/app/hooks/useCountries";
import { format } from "date-fns";
import Button from "../Button";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
}

// col-span-1 -> grid column takes 1/12 space on the screen.
const ListingCard: React.FC<ListingCardProps> = ({ data, reservation, onAction, disabled, actionLabel, actionId = "" }) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);
  //   const price = useMemo(() => {
  //     return data.images.data.price;
  //   }, [data]);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`; 
  }, [reservation]);

  return (
    <div onClick={() => router.push(`/listings/${data.id}`)} className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image fill alt="Listing" src={data.imageSrc} className="object-cover h-full w-full group-hover:scale-110 transition" />
          <div className="absolute top-3 right-3">
            <HeartButton />
          </div>
        </div>
      </div>

      <div className="font-semibold text-lg">{`${location?.region}, ${location?.label}`}</div>
      <div className="font-ligh text-neutral-500">{reservationDate || data.category}</div>
      <div className="font-light text-neutral-500">{data.title}</div>
      <div className="flex flex-row items-center gap-1">
        <div className="font-semibold">$ {data.price}</div>
        {!reservation && <div className="font-light">night</div>}
      </div>
      {onAction && actionLabel && <Button disabled={disabled} small label={actionLabel} onClick={handleCancel} />}
    </div>
  );
};

export default ListingCard;
