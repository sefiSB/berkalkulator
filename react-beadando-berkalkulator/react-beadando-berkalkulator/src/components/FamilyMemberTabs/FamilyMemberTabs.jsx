import React from "react";
import Nav from "react-bootstrap/Nav";

// eslint-disable-next-line react/prop-types
const FamilyMemberTabs = ({ members, active, onTabClick, onPlusClick }) => {
  /* const handlePlusClick = () => {
    onPlusClick();
  }; */
  console.log(active);
  return (
    <div>
      <Nav variant="pills">
        {members.map((item, index) => (
          <Nav.Item key={index} className="tabs">
            <Nav.Link
              active={item.name == active.name}
              onClick={() => onTabClick(item)}
            >
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}

        <Nav.Item className="tabs">
          <Nav.Link
            onClick={() => onPlusClick({ name: "Új személy", brber: 0 })}
          >
            +
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default FamilyMemberTabs;
