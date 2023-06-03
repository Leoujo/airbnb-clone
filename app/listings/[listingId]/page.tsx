import ListingClient from "./ListingClient";

// Note: This is a server-side component, so we can't use hooks.
interface IParams {
  listingId?: string;
}

// accessing params in server components
const ListingPage = async ({ params }: { params: IParams }) => {

  return (
    <div>
      <ListingClient />
    </div>
  );
};

export default ListingPage;
