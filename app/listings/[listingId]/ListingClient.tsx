"use client";

import Container from "@/app/components/Container";
import ListingHead from "@/app/components/Listings/ListingHead";
import ListingInfo from "@/app/components/Listings/ListingInfo";

const ListingClient = ({ listing }: any) => {
  return (
    <div>
      <Container>
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col gap-6">
            <ListingHead listing={listing} />
            <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
              <ListingInfo listing={listing} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ListingClient;
