import "./filter.css";
import { useFilter } from "../../hooks/context/filter-context";
export const NoteFilter = () => {
  const {
    filter: { sortByPriority, sortByTime },
    filterDispatch,
  } = useFilter();
  return (
    <>
      <div className="margin-auto width-fitcontent padding-md filter-container">
        <button
          className="login-site cursor-pointer"
          onClick={() => filterDispatch({ type: "FILTER_CLEAR", payload: {} })}
        >
          Clear
        </button>
        <fieldset className="padding-md flex-col margin-top">
          <legend>By Priority</legend>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                filterDispatch({
                  type: "SORT_PRIORITY",
                  payload: "HIGH_TO_LOW",
                })
              }
              checked={sortByPriority && sortByPriority === "HIGH_TO_LOW"}
            ></input>{" "}
            High to Low
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                filterDispatch({
                  type: "SORT_PRIORITY",
                  payload: "LOW_TO_HIGH",
                })
              }
              checked={sortByPriority && sortByPriority === "LOW_TO_HIGH"}
            ></input>{" "}
            Low to High
          </label>
        </fieldset>
        <fieldset className="padding-md flex-col">
          <legend>By Time</legend>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                filterDispatch({
                  type: "SORT_TIME",
                  payload: "NEW_TO_OLD",
                })
              }
              checked={sortByTime && sortByTime === "NEW_TO_OLD"}
            ></input>{" "}
            New To Old
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              onChange={() =>
                filterDispatch({
                  type: "SORT_TIME",
                  payload: "OLD_TO_NEW",
                })
              }
              checked={sortByTime && sortByTime === "OLD_TO_NEW"}
            ></input>{" "}
            Old to New
          </label>
        </fieldset>
      </div>
    </>
  );
};
