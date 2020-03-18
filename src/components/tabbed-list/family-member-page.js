import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import "./../../styles.scss";
import "./tabbed-list.scss";
import classNames from "classnames";
import { TabbedListItem } from "./tabbed-list-item";

export const FamilyMemberPage = () => {
  const [members, setMembers] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    //TODO make api call --- mocked result
    const result = [
      { id: 1, name: "Camelia Nistor" },
      { id: 2, name: "Andrei Nistor" }
    ];
    setMembers(result);
    setSelected(result[0]);
  }, []);

  useEffect(() => {
    //TODO make api call --- mocked result
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
  }, [selected]);

  const triggerDropdown = useCallback(() => {
    setDropdownActive(true);
  }, []);

  const handleSelect = useCallback(m => {
    setSelected(m);
    setDropdownActive(false);
  }, []);

  return (
    <div className="tab-page">
      <div className="tli-dropdown-container">
        <div className="vis-text">Vizualizeaza pentru:</div>
        <div className="action-container">
          <div
            className={classNames("dropdown", { "is-active": dropdownActive })}
          >
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
                onClick={triggerDropdown}
              >
                {selected && selected.name}
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content ">
                {members.length &&
                  members.map(m => (
                    <div
                      key={m.id}
                      className="dropdown-item"
                      onClick={() => handleSelect(m)}
                    >
                      {m.name}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <button
            className="complete-form-button"
            onClick={() => {
              /* TODO*/
              alert("implement me");
            }}
          >
            Completeaza formular
          </button>
        </div>
      </div>

      <div>
        {listItems.map(item => (
          <TabbedListItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

FamilyMemberPage.propTypes = {
  familyMembers: PropTypes.array,
  onClick: PropTypes.func
};
