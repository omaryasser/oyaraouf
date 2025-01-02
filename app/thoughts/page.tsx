import { getAllThoughts } from "@/lib/thoughtsRetriever";
import ThoughtsListing from "./thoughtsList";


export default function ThoughtsListingPage() {
  const thoughts = getAllThoughts();

  return <ThoughtsListing thoughts={thoughts} />;
}
