import React from "react";
import Nav from "react-bootstrap/Nav";



const FamilyMemberTabs = ({ members, active, onTabClick, onPlusClick,emptyMembers }) => {
  const handleClick = (item) => {
    onTabClick(item);
    console.log(members);
  };
  

  return (
    <div>
      <Nav variant="pills">
        
        {
        members.map((item) => (
          <Nav.Item key={item.id} className="tabs">
            <Nav.Link
              active={item.id === active.id}
              onClick={() => handleClick(item)}
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
