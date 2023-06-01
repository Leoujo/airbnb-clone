"use client";

import Image from "next/image";
import { useMemo } from "react";
import HeartButton from "../HeartButton";
import Link from "next/link";
import { Listing, Reservation } from "@prisma/client";
import { useRouter } from "next/navigation";

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: any | null;
}

// col-span-1 -> grid column takes 1/12 space on the screen.
const ListingCard: React.FC<ListingCardProps> = ({ 
	data, 
	reservation, 
	onAction, 
	disabled, 
	actionLabel, 
	actionId, 
	currentUser
 }) => {
	const router = useRouter()
	
//   const price = useMemo(() => {
//     return data.info.images.data.price;
//   }, [data]);

  return (
    <Link href={`/listings/${data.info.id}`}>
      <div className="col-span-1 cursor-pointer group">
        <div className="flex flex-col gap-2 w-full">
          <div className="aspect-square w-full relative overflow-hidden rounded-xl">
            <Image fill alt="Listing" src={data.info.mainImage.url} className="object-cover h-full w-full group-hover:scale-110 transition" />
            <div className="absolute top-3 right-3">
              <HeartButton />
            </div>
          </div>
        </div>

        <div className="font-semibold text-lg">{`${data.info.location.city}, ${data.info.location.country.title}`}</div>
        <div className="font-light text-neutral-500">{data.info.title}</div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {data.info.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
