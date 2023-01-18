const filterReducer = (state = '', action) => {
    switch (action.type) {
      case "UNREAD": {
        return 'UNREAD'
      }
      case "READ": {
        return 'READ'
      }
      case "FAVORITES": {
        return 'FAVORITES'
      }
      default: {
        return state;
      }
    }
  };
  export default filterReducer;
  