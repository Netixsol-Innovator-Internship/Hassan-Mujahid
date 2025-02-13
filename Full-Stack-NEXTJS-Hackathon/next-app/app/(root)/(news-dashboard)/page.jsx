"use client";

import { useState, useCallback } from "react";
import Grid from "@mui/material/Grid2";
import {
  Container,
  Typography,
  CircularProgress,
  Box,
  Fade,
  Alert,
} from "@mui/material";
import NewsCard from "../../../components/NewsCard";
import SearchBar from "../../../components/SearchBar";
import CategoryFilter from "../../../components/CategoryFilter";
import NewsFilters from "../../../components/NewsFilters";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNews } from "../../../custom/useNews";

export default function NewsDashboard() {
  const [filters, setFilters] = useState({
    page: 1,
    searchQuery: "",
    category: "all",
    sortBy: "publishedAt",
    fromDate: null,
    toDate: null,
  });

  const {
    news,
    totalResults,
    isLoading,
    isLoadingMore,
    isError,
    isEverythingEndpoint,
  } = useNews(filters);

  const hasMore = news.length < totalResults;

  const handleSearch = useCallback((query) => {
    setFilters((prev) => ({
      ...prev,
      searchQuery: query,
      page: 1, // Reset to first page
      category: "all",
    }));
  }, []);

  const handleCategoryChange = (newCategory) => {
    setFilters((prev) => ({
      ...prev,
      category: newCategory,
      page: 1,
      // Clear date filters when switching to top-headlines
      ...(newCategory !== "all" && {
        fromDate: null,
        toDate: null,
      }),
    }));
  };

  const handleSortChange = (newSortBy) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: newSortBy,
      page: 1,
    }));
  };

  const handleDateChange = (type) => (dateString) => {
    setFilters((prev) => ({
      ...prev,
      [type]: dateString,
      page: 1,
      // When setting dates, switch to 'all' category
      category: "all",
    }));
  };

  const loadMore = useCallback(() => {
    if (!isLoadingMore) {
      setFilters((prev) => ({
        ...prev,
        page: prev.page + 1,
      }));
    }
  }, [isLoadingMore]);

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Latest News
        </Typography>

        <SearchBar onSearch={handleSearch} />

        {!isEverythingEndpoint && (
          <CategoryFilter
            value={filters.category}
            onChange={handleCategoryChange}
          />
        )}

        <NewsFilters
          sortBy={filters.sortBy}
          onSortChange={handleSortChange}
          fromDate={filters.fromDate}
          onFromDateChange={handleDateChange("fromDate")}
          toDate={filters.toDate}
          onToDateChange={handleDateChange("toDate")}
          disabled={!isEverythingEndpoint}
        />

        {isEverythingEndpoint && (
          <Alert severity="info" sx={{ mb: 2 }}>
            Using advanced search with date filters.
            {filters.category !== "all" &&
              " Category is included in search terms."}
          </Alert>
        )}
      </Box>

      <Fade in={true}>
        <div>
          {isError ? (
            <Alert severity="error">
              {isError.message || "Error loading news. Please try again later."}
            </Alert>
          ) : (
            <>
              {isLoading && news.length === 0 ? (
                <Box sx={{ display: "flex", justifyContent: "center", p: 8 }}>
                  <CircularProgress />
                </Box>
              ) : (
                <InfiniteScroll
                  dataLength={news.length}
                  next={loadMore}
                  hasMore={hasMore}
                  loader={
                    <Box
                      sx={{ display: "flex", justifyContent: "center", p: 3 }}
                    >
                      <CircularProgress />
                    </Box>
                  }
                  endMessage={
                    <Typography
                      textAlign="center"
                      color="text.secondary"
                      sx={{ mt: 4 }}
                    >
                      No more news to load.
                    </Typography>
                  }
                >
                  <Grid container spacing={3}>
                    {news.map((article, index) => (
                      <Grid
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        key={`${article.url}-${index}`}
                      >
                        <NewsCard article={article} />
                      </Grid>
                    ))}
                  </Grid>
                </InfiniteScroll>
              )}

              {!isLoading && news.length === 0 && (
                <Alert severity="info">
                  No news found. Try different filters.
                </Alert>
              )}
            </>
          )}
        </div>
      </Fade>
    </Container>
  );
}
