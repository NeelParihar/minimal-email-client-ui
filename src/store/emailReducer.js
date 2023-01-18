const markEmailAsRead = (emails, emailId) => {
  return emails.map((email) => {
    if (email.id === emailId) {
      return { ...email, isRead: true };
    }
    return email;
  });
};

const markEmailAsFav = (emails, emailId) => {
  return emails.map((email) => {
    if (email.id === emailId) {
      return { ...email, isFavorite: true };
    }
    return email;
  });
};

const emailReducer = (state = [], action) => {
  switch (action.type) {
    case "MARK_EMAIL_READ": {
      return markEmailAsRead(state, action.payload);
    }
    case "MARK_EMAIL_FAV": {
      return markEmailAsFav(state, action.payload);
    }
    case "UPDATE_EMAILS": {
      console.log(action);
      return [...state, ...action.payload];
    }
    default: {
      return [...state];
    }
  }
};
export default emailReducer;
