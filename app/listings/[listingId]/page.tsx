import getListingById from "@/app/actions/getListingById";
import ListingClient from "./ListingClient";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";

// Note: This is a server-side component, so we can't use hooks.
interface IParams {
  listingId?: string;
}

// accessing params in server components
const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser()

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <div>
      <ListingClient listing={listing} currentUser={currentUser} />
    </div>
  );
};

export default ListingPage;
