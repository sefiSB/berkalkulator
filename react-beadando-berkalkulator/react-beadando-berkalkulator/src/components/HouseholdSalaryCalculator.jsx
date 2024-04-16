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
    setActiveMember(memberName);
  };

  const [members, setMembers] = useState([
    { name: "Bendi", brber: 10000 },
    { name: "John", brber: 1000 },
    { name: "Alice", brber: 20000 },
  ]);

  const handleChangeMember = (newMember) => {
    setMembers([...members, { name: newMember.name, brber: newMember.brber }]);
  };

  const changeActiveData = (nname, nbrber) => {
    let a = members.find((member) => member.name ===activeMember);
    a.name = nname;
    a.brber = nbrber;

    console.log(activeMember)
    console.log(members);
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
        <SalaryCalculator active={activeMember} onSubmit={changeActiveData}/>
        
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
