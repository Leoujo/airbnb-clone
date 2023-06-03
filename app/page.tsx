// This is a server component - can call db directly, without api call

import { Inter } from "next/font/google";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/Listings/ListingCard";
import getListings from "./actions/getListings";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const listings = await getListings();
  //   const currentUser = await getCurrentUser();

  const isEmpty = listings.length === 0;
  if (isEmpty) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <div
        className="
			pt-12 
			grid 
			grid-cols-1 
			sm:grid-cols-2 
			md:grid-cols-3 
			lg:grid-cols-4 
			xl:grid-cols-5 
			2xl:grid-cols-6 
			gap-8"
      >
        {listings.map((listing: any) => {
          return <ListingCard key={listing.id} data={listing} />;
        })}
      </div>
    </Container>
  );
}
