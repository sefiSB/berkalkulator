import React from "react";
import Nav from "react-bootstrap/Nav";

const FamilyMemberTabs = ({ members, active, onTabClick, onPlusClick }) => {
  return (
    <div>
      <Nav variant="pills">
        {members.map((item, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              active={item.name === active}
              onClick={() => onTabClick(item.name)}
            >
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}

        <Nav.Item>
        <Nav.Link onClick={()=>}>
              +
            </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default FamilyMemberTabs;
