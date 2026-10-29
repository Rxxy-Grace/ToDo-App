const FILTERS = ["All", "Todo", "In Progress", "Done", "Blocked"];

const FilterBar = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-start gap-2 p-4 overflow-x-auto whitespace-nowrap">
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`shrink-0 border border-primary rounded-full px-3 py-1.5 text-xs font-medium transition duration-200 ${
              isActive
                ? "bg-primary text-white"
                : "bg-secondary text-primary-foreground hover:bg-primary hover:text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default FilterBar;