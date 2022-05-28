export const FilterReducer = (state, action) => {
    switch (action.type) {
        case "SORT_PRIORITY":
            return {
                ...state,
                sortByPriority: action.payload,
            }
        case "SORT_TIME":
            return {
                ...state,
                sortByTime: action.payload,
            }
         case "SEARCH_NOTE":
            return {
                ...state, searchByTitle: action.payload
            }
          case "FILTER_CLEAR":
              return {
                  sortByPriority: "",
                  searchByTitle: "",
              }
        default:
          return state;
    }
}