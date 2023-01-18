import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByUnread, filterByRead, filterByFav} from '../../store/actions'

export const ButtonGroup = ({ buttons }) => {
    const dispatch = useDispatch();
    const filterBy = useSelector((state) => state.filterReducer);
    const getButtonIndex = (button) => {
        return buttons.findIndex(but => but.toLowerCase() === button.toLowerCase())
    }

    const getButtonAction= (button)=>{
        // eslint-disable-next-line default-case
        switch(button.toUpperCase()){
            case "UNREAD": {
                return filterByUnread()
              }
            case "READ": {
                return filterByRead()
            }
            case "FAVORITES": {
                return filterByFav()
            }
        }
    }
    return (
      <>
        {buttons.map((buttonLabel, i) => (
          <button
            key={i}
            name={buttonLabel}
            onClick={() => dispatch(getButtonAction(buttonLabel))}
            className={i === getButtonIndex(filterBy) ? "navButton active" : "navButton"}
          >
            {buttonLabel}
          </button>
        ))}
      </>
    );
  };