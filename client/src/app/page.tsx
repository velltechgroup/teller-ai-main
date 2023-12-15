"use client";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Genres from "@/components/Genres";
import Step from "@/components/Step";
import { Footer } from "@/components/Footer";
import Popular from "@/components/Popular";
import useStories from "../hooks/useStory";
import Spinner from "@/utils/Spinner";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const { stories, storiesLoading } = useStories();
  const [selectedGenreFilter, setSelectedGenreFilter] = useState<string>("");
  const { storiesWithFilters } = useStories({
    genre: selectedGenreFilter,
  });
  const [loading, setLoading] = useState(true);

  const memoizedHeader = useMemo(() => <Header stories={stories} />, [stories]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <>
      <Navbar />
      {memoizedHeader}
      <Genres
        stories={storiesWithFilters}
        selectedGenre={selectedGenreFilter}
        setSelectedGenreFilter={setSelectedGenreFilter}
      />
      <Popular stories={stories} />
      <Step />
      <Footer />
    </>
  );
}
