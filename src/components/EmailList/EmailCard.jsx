import "./EmailList.css";
import { getFormatedDates } from "../../utils/DateFormat";

export default function Card({ email, isSelected }) {
  const date = new Date(email.date);
  return (
    <div className={''+(isSelected? 'card selected':'card') + (email.isRead?' cardIsRead ': '')}>
      <div>
        <span className="avatar">{email?.from?.name[0].toUpperCase()}</span>
      </div>
      <div className="cardDetails">
        <div>
          From: <strong>{email?.from?.name} {email?.from?.email}</strong>
        </div>
        <div>
          Subject: <strong>{email?.subject}</strong>
        </div>

        <p>
          {email?.short_description}
        </p>
        <div><span>{getFormatedDates(date)}</span><span className="favText">{email?.isFavorite ? 'Favorite':''}</span></div>
        
      </div>
    </div>
  );
}
