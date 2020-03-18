import React, { useState, useEffect, useCallback } from "react";
import "./tabbed-list.scss";
import "./../../styles.scss";
import { FamilyMemberPage } from "./family-member-page";
import { TabbedListItem } from "./tabbed-list-item";
import classNames from "classnames";

export const TabbedList = () => {
  const [showMyForms, setShowMyForms] = useState(true);
  const [showFamilyForms, setShowFamilyForms] = useState(false);
  const [listItems, setListItems] = useState([]);

  const handleMyFormsClick = useCallback(() => {
    setShowMyForms(true);
    setShowFamilyForms(false);
  }, []);
  const handleFamilyFormsClick = useCallback(() => {
    setShowMyForms(false);
    setShowFamilyForms(true);
  }, []);

  useEffect(() => {
    //TODO make api call
    const result = [
      {
        id: 1,
        color: "#0000ff",
        date: new Date(),
        resultText: "Rezultat Formular - esti in siguranta daca ramai in casa",
        symptomText: "Simptome - nu prezinti simptome specifice COVID-19",
        onClick: () => {
          alert("hello");
        }
      },
      {
        id: 2,
        color: "#ff0000",
        date: new Date(),
        resultText: "Rezultat Formular - esti in siguranta daca ramai in casa",
        symptomText: "Simptome - prezinti simptome specifice COVID-19",
        onClick: () => {
          alert("hello");
        }
      }
    ];

    setListItems(result);
  }, []);

  return (
    <div>
      <div className="tabs">
        <ul>
          <li
            className={classNames("tl-tab", { active: showMyForms })}
            onClick={handleMyFormsClick}
          >
            Formularele mele
          </li>
          <li
            className={classNames("tl-tab", { active: showFamilyForms })}
            onClick={handleFamilyFormsClick}
          >
            Membrii familiei
          </li>
        </ul>
      </div>
      <div>
        {showMyForms && (
          <div className="tab-page">
            {listItems.map(item => (
              <TabbedListItem key={item.id} {...item} />
            ))}
          </div>
        )}
        {showFamilyForms && <FamilyMemberPage />}
      </div>
    </div>
  );
};

TabbedList.propTypes = {};
