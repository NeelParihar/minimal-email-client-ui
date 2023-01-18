import "./EmailList.css";
import { getFormatedDates } from "../../utils/DateFormat";
import { Parser } from "html-to-react";
import { useDispatch } from "react-redux";
import { markEmailRead, markEmailFav } from "../../store/actions";
import { useEffect } from "react";

const htmlToReactParser = new Parser();

export default function Card({ email }) {
  const dispatch = useDispatch();
  const date = new Date(email.date);

  const markFav = () => {
    dispatch(markEmailFav(email.id));
    alert("E-mail marked as favorite");
  };

  useEffect(() => {
    dispatch(markEmailRead(email.id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return (
    <div className="emailDetailsCard">
      <div>
        <span className="avatar">{email?.from?.name[0].toUpperCase()}</span>
      </div>
      <div className="emailDetailsCardBody">
        <div className="emailDetailsCardHeader">
          <h1>{email?.subject}</h1>
          {!email.isFavorite && (
            <button className="favBtn" onClick={() => markFav()}>
              {" "}
              <strong>Mark as favorite</strong>
            </button>
          )}
        </div>

        <p>{getFormatedDates(date)}</p>
        <p>{htmlToReactParser.parse(email?.body)}</p>
      </div>
    </div>
  );
}
