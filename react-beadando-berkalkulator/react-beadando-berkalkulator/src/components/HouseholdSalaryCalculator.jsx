import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

/* const members=[{name:"Bendi"},{name:"Jani"},{name:"Feri"}]
const active="Bendi" */
//aktív
const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "Bendi", brber: 10000 },
    { id: 2, name: "John", brber: 1000 },
    { id: 3, name: "Alice", brber: 20000 },
  ]);
  console.log(members[0]);
  const [activeMember, setActiveMember] = useState(members[0]); // State to store active member

  const handleTabClick = (member) => {
    setActiveMember(member);
  };

  const handleChangeMember = (newMember) => {
    setMembers([
      ...members,
      { id: uuidv4(), name: newMember.name, brber: newMember.brber },
    ]);
  };

  const changeActiveData = (nname, nbrber) => {
    let a = members.find((member) => member.id === activeMember.id);
    a.name = nname;
    a.brber = nbrber;

    console.log(activeMember);
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
        <SalaryCalculator active={activeMember} onSubmit={changeActiveData} />

        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
