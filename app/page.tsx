import React from "react";
import { categories } from "../constants";
import fetchNews from "../lib/fetchNew";
import NewsList from "./NewsList";

const Homepage = async () => {
  const news: NewsResponse = await fetchNews(categories.join(","));
  return <NewsList news={news} />;
};

export default Homepage;
