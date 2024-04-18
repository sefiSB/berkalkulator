import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import TaxRelief from "./TaxRelief/TaxRelief";
import MemberSummary from "./MemberSummary/MemberSummary";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

/* const members=[{name:"Bendi"},{name:"Jani"},{name:"Feri"}]
const active="Bendi" */
//aktív
const HouseholdSalaryCalculator = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "Bendi", brber: 10000, netto: 10000},
    { id: 2, name: "John", brber: 1000 ,netto: 1000},
    { id: 3, name: "Alice", brber: 20000 ,netto: 20000},
  ]);
  const [activeMember, setActiveMember] = useState(members[0]); // State to store active member

  const handleTabClick = (member) => {
    let newMember = { id: member.id, name: member.name, brber: member.brber };
    setActiveMember(newMember);
    console.log(activeMember);
  };

  const handleChangeMember = (newMember) => {
    setMembers([
      ...members,
      { id: uuidv4(), name: newMember.name, brber: newMember.brber },
    ]);
  };

  const changeActiveData = (nname, nbrber) => {
    let i = 0;
    let partition1 = [];
    let partition2 = [];
    while (i < members.length) {
      if (members[i].id == activeMember.id) {
        break;
      }
      partition1.push(members[i]);
      i++;
    }
    i++;
    while (i < members.length) {
      partition2.push(members[i]);
      i++;
    }
    let nMember = { id: activeMember.id, name: nname, brber: nbrber, netto: activeMember.netto};
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      { id: activeMember.id, name: nname, brber: nbrber, netto: activeMember.netto},
      ...partition2,
    ]);
  };


  const changeActiveNetto = (nnber) => {
    let i = 0;
    let partition1 = [];
    let partition2 = [];
    while (i < members.length) {
      if (members[i].id == activeMember.id) {
        break;
      }
      partition1.push(members[i]);
      i++;
    }
    i++;
    while (i < members.length) {
      partition2.push(members[i]);
      i++;
    }
    let nMember = { id: activeMember.id, name: activeMember.name, netto: nnber };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      { id: activeMember.id, name: activeMember.name, netto: nnber },
      ...partition2,
    ]);
  };
  const changeByTax = (t, id) => {
    switch (id) {
      case "szja":
        if (t) {
          changeActiveNetto(activeMember.netto / 0.75);
        } else {
          changeActiveNetto(activeMember.netto* 0.75);
        }
        break;
      case "frissHazasok":
        if (t) {
          changeActiveData(activeMember.name, activeMember.brber * 0.9);
        } else {
          changeActiveData(activeMember.name, activeMember.brber / 0.9);
        }
        break;
      case "szemelyiKedvezmeny":
        if (t) {
          changeActiveData(activeMember.name, activeMember.brber * 0.8);
        } else {
          changeActiveData(activeMember.name, activeMember.brber / 0.8);
        }
        break;

        case "csaladiKedvezmeny":
        if (t) {
          changeActiveData(activeMember.name, activeMember.brber * 0.7);
        } else {
          changeActiveData(activeMember.name, activeMember.brber / 0.7);
        }
    }
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
        <TaxRelief active={activeMember} onChecked={changeByTax} />
        <MemberSummary active={activeMember} />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
