import ListingClient from "./ListingClient";
import fakedata from "../../../listing.json";
import { Data, FakeData } from "@/app/types/FakeData";

// Note: This is a server-side component, so we can't use hooks.
interface IParams {
  listingId?: string;
}

// accessing params in server components
const ListingPage = async ({ params }: { params: IParams }) => {
  const { data } = fakedata as FakeData;

  // Getting specific item by id.
  const listing = data.find((data: Data) => data.info.id === params.listingId);

  return (
    <div>
      <ListingClient listing={listing} />
    </div>
  );
};

export default ListingPage;
