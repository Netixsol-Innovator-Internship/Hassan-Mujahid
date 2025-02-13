"use client";

import useSWR from "swr";
import { useState, useEffect } from "react";

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to fetch news");
    }
    return response.json();
  } catch (error) {
    console.error("News API Error:", error);
    throw error;
  }
};

export function useNews({
  page = 1,
  pageSize = 12,
  category = "general",
  searchQuery = "",
  sortBy = "publishedAt",
  fromDate = null,
  toDate = null,
}) {
  const [articles, setArticles] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Determine which endpoint to use
  const useEverythingEndpoint = Boolean(searchQuery || fromDate || toDate);

  // Build the URL
  let url = new URL(
    useEverythingEndpoint
      ? `${BASE_URL}/everything`
      : `${BASE_URL}/top-headlines`
  );

  // Add common parameters
  url.searchParams.append("apiKey", NEWS_API_KEY);
  url.searchParams.append("page", page.toString());
  url.searchParams.append("pageSize", pageSize.toString());

  if (useEverythingEndpoint) {
    // For everything endpoint
    const queryParts = [];
    if (searchQuery) queryParts.push(searchQuery);
    if (category !== "all" && category !== "general") queryParts.push(category);

    // If no search terms, use a default query
    const finalQuery =
      queryParts.length > 0 ? queryParts.join(" AND ") : "news";
    url.searchParams.append("q", finalQuery);

    // Add sorting
    url.searchParams.append("sortBy", sortBy);

    // Add date filters
    if (fromDate) url.searchParams.append("from", `${fromDate}T00:00:00`);
    if (toDate) url.searchParams.append("to", `${toDate}T23:59:59`);

    // Add language parameter
    url.searchParams.append("language", "en");
  } else {
    // For top-headlines endpoint
    url.searchParams.append("country", "us");
    if (category !== "all") {
      url.searchParams.append("category", category);
    }
  }

  const cacheKey = url.toString();

  const { data, error, isLoading } = useSWR(cacheKey, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
  });

  // Update articles when data changes
  useEffect(() => {
    if (data?.articles) {
      if (page === 1) {
        setArticles(data.articles);
      } else {
        setArticles((prev) => [...prev, ...data.articles]);
      }
      setIsLoadingMore(false);
    }
  }, [data, page]);

  // Reset articles when search or filters change
  useEffect(() => {
    setArticles([]);
  }, [searchQuery, category, sortBy, fromDate, toDate]);

  return {
    news: articles,
    totalResults: data?.totalResults || 0,
    isLoading: isLoading && page === 1,
    isLoadingMore: isLoading && page > 1,
    isError: error,
    isEverythingEndpoint: useEverythingEndpoint,
  };
}
