import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { useState } from "react";

/* const members=[{name:"Bendi"},{name:"Jani"},{name:"Feri"}]
const active="Bendi" */
//aktív

const HouseholdSalaryCalculator = () => {
  const [activeMember, setActiveMember] = useState("Bendi"); // State to store active member

  const handleTabClick = (memberName) => {
    setActiveMember(memberName); // Update active member when a tab is clicked
  };

  const [members, setMembers] = useState([
    { name: "Bendi", brber: 10000 },
    { name: "John", brber: 1000 },
    { name: "Alice", brber: 20000 }
  ]);

  const handleChangeMember = (newMember) => {
    setMembers([...members[members.length].name=]);
  };
  return (
    <>
      <header>
      <FamilyMemberTabs 
          members={members}
          active={activeMember}
          onTabClick={handleTabClick}
          onPlusClick={handleChangeMember}
        />
      </header>
      <main>
        <SalaryCalculator 
        active={activeMember}
        oonPlusClick={handleNewMemberSubmit}/>
        {/* szemelyre kattintva kulon kulon */}
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
