"use client";

import Grid from "@mui/material/Grid2";
import { Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { parseISO } from "date-fns";

export default function NewsFilters({
  sortBy,
  onSortChange,
  fromDate,
  onFromDateChange,
  toDate,
  onToDateChange,
  disabled = false,
}) {
  const formatDateForAPI = (date) => {
    if (!date) return null;
    try {
      // Format date to YYYY-MM-DD
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    } catch (error) {
      console.error("Date formatting error:", error);
      return null;
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={4}>
          <FormControl fullWidth disabled={disabled}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortBy}
              label="Sort By"
              onChange={(e) => onSortChange(e.target.value)}
            >
              <MenuItem value="publishedAt">Latest First</MenuItem>
              <MenuItem value="relevancy">Most Relevant</MenuItem>
              <MenuItem value="popularity">Most Popular</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid xs={12} sm={4}>
          <DatePicker
            label="From Date"
            value={fromDate ? parseISO(fromDate) : null}
            onChange={(newDate) => {
              onFromDateChange(formatDateForAPI(newDate));
            }}
            disabled={disabled}
            slotProps={{
              textField: {
                fullWidth: true,
                error: false,
              },
            }}
            maxDate={toDate ? parseISO(toDate) : undefined}
          />
        </Grid>

        <Grid xs={12} sm={4}>
          <DatePicker
            label="To Date"
            value={toDate ? parseISO(toDate) : null}
            onChange={(newDate) => {
              onToDateChange(formatDateForAPI(newDate));
            }}
            disabled={disabled}
            slotProps={{
              textField: {
                fullWidth: true,
                error: false,
              },
            }}
            minDate={fromDate ? parseISO(fromDate) : undefined}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
