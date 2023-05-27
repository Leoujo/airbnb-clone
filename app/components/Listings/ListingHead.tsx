"use client";

import Image from "next/image";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

const ListingHead = ({ listing }: any) => {
  const { title, location, mainImage } = listing.info;
  const { city, country } = location;
  return (
    <>
      <Heading title={title} subtitle={`${city}, ${country.title}`} />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image alt="Image" src={mainImage.url} fill className="object-cover w-full" />
        <div className="absolute top-5 right-5">
          <HeartButton />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
