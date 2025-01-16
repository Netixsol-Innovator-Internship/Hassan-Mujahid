import { create } from "zustand";

const jobStore = (set) => ({
  jobs: [],
  filterTags: [],
  setJobs: (jobsData) =>
    set(() => ({
      jobs: jobsData,
    })),
  setFilterTags: (tag) => {
    set((state) => {
      if (state.filterTags.includes(tag))
        return {
          filterTags: [...state.filterTags],
        };
      return {
        filterTags: [...state.filterTags, tag],
      };
    });
  },

  removeFilterTags: (tag) => {
    set((state) => ({
      filterTags: state.filterTags.filter((item) => item !== tag),
    }));
  },

  clearFilterTags: () => {
    set((state) => ({
      filterTags: [],
    }));
  },
});

const useJobStore = create(jobStore);

export default useJobStore;
