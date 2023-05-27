"use client";

import { Data } from "@/app/types/FakeData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import HeartButton from "../HeartButton";

interface ListingCardProps {
  data: any;
  onAction?: (id: string) => void;
  disabled?: string;
  actionId?: string;
}

// col-span-1 -> grid column takes 1/12 space on the screen.
const ListingCard: React.FC<ListingCardProps> = ({ data, onAction, disabled, actionId }) => {
  const router = useRouter();

  const price = useMemo(() => {
    return data.info.images.data.price;
  }, [data]);

  return (
    <div onClick={() => router.push(`/listings/${data.info.id}`)} className="col-span-1 cursor-pointer group">
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
  );
};

export default ListingCard;
