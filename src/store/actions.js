export const markEmailFav = (emailId) => {
    return {
      type: "MARK_EMAIL_FAV",
      payload: emailId,
    };
};

export const markEmailRead = (emailId) => {
    return {
      type: "MARK_EMAIL_READ",
      payload: emailId,
    };
};

export const updateEmails = (emails) => {
    return {
      type: "UPDATE_EMAILS",
      payload: emails,
    };
};


export const filterByUnread = () => {
    return {
      type: "UNREAD",
    };
};

export const filterByRead = () => {
    return {
      type: "READ",
    };
};

export const filterByFav = () => {
    return {
      type: "FAVORITES",
    };
};