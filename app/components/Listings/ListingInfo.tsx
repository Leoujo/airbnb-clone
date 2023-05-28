"use client";

import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";

const ListingInfo = ({ listing }: any) => {
  const { host, details } = listing.info;
  const { name, avatar } = host;
  return (
    <div className="col-span-4 flex flex-col gap-8 ">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Hosted by {name}</div>
          <Avatar image={avatar.url} />
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          {details.data.map((detail: any) => (
            <div key={detail.type + detail.value}>{`${detail.type}: ${detail.value}`}</div>
          ))}
        </div>
      </div>
      <hr />
      <ListingCategory />
    </div>
  );
};

export default ListingInfo;
