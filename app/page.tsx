// This is a server component - can call db directly, without api call

import { Inter } from "next/font/google";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import fakedata from "../listing.json";
import { Category, Data, FakeData } from "./types/FakeData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = fakedata as FakeData;
  const isEmpty = true;
  if (data.length === 0) {
    return <EmptyState showReset />;
  }
  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {data.map((data: Data) => {
          return <div>{data.info.images.data[0].url}</div>;
        })}
      </div>
    </Container>
  );
}
