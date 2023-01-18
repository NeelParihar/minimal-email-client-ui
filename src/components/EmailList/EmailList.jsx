import "./EmailList.css";
import { useEffect, useState } from "react";
import Card from "./EmailCard";
import EmailDetailsCard from "./EmailDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { updateEmails, filterByRead } from "../../store/actions";

export default function EmailList() {
  const dispatch = useDispatch();
  const emails = useSelector((state) => state.emailReducer);
  const filterBy = useSelector((state) => state.filterReducer);

  const [page, setPage] = useState(1);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [selectedEmailId, setSelectedEmailId] = useState(undefined);
  const [selectedEmail, setSelectedEmail] = useState(undefined);

  const [filteredEmails, setFilteredEmails] = useState(emails);

  /* fetching emails for each page */
  useEffect(() => {
    fetch("https://flipkart-email-mock.now.sh/?page=" + page)
      .then((res) => res.json())
      .then((res) => {
        dispatch(updateEmails(res.list));
        setShowLoadMore(
          res.total > emails.length + res.list.length ? true : false
        );
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  /* fetching email body for a email */
  useEffect(() => {
    if (selectedEmailId) {
      fetch("https://flipkart-email-mock.now.sh/?id=" + selectedEmailId)
        .then((res) => res.json())
        .then((res) => {
          let email = emails.find((e) => e.id === selectedEmailId);
          setSelectedEmail({ ...email, ...res });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmailId]);

  /* filter emails if a filter is choosed */
  useEffect(() => {
    let updatedEmails = undefined;

    if (filterBy === "UNREAD") {
      updatedEmails = emails.filter((e) => !e.isRead);
    } else if (filterBy === "READ") {
      updatedEmails = emails.filter((e) => e.isRead);
    } else if (filterBy === "FAVORITES") {
      updatedEmails = emails.filter((e) => e.isFavorite);
    }

    if (!updatedEmails) {
      updatedEmails = [...emails];
    }

    if (updatedEmails.length === 0) {
      setShowLoadMore(false);
    }

    setFilteredEmails(updatedEmails);
  }, [filterBy, emails]);

  return (
    <main className="container">
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: selectedEmail ? "40%" : "100%",
          height: "85vh",
          overflowY: "scroll",
        }}
      >
        {filteredEmails?.map((email) => {
          return (
            <div
              onClick={() => {
                setSelectedEmailId(email.id);
                dispatch(filterByRead());
              }}
            >
              <Card email={email} isSelected={email.id === selectedEmailId} />
            </div>
          );
        })}

        {showLoadMore && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "1rem",
            }}
          >
            <button
              className="btn"
              onClick={() => setPage((preValue) => preValue + 1)}
            >
              {" "}
              <strong>Load More</strong>
            </button>{" "}
          </div>
        )}
      </section>

      {selectedEmail && (
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "55%",
            height: "100%",
          }}
        >
          <EmailDetailsCard email={selectedEmail} />
        </section>
      )}
    </main>
  );
}
