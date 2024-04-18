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
  const countNetto = (brutto) => {
    return Math.floor(brutto - brutto * 0.15 - brutto * 0.185);
  };
  const [members, setMembers] = useState([
    { id: 1, name: "Bendi", brber: 1000, netto: countNetto(1000) },
    { id: 2, name: "John", brber: 1000, netto: countNetto(1000) },
    { id: 3, name: "Alice", brber: 20000, netto: countNetto(20000) },
  ]);
  const [activeMember, setActiveMember] = useState(members[0]);

  const handleTabClick = (member) => {
    let newMember = { id: member.id, name: member.name, brber: member.brber };
    setActiveMember(newMember);
    console.log(activeMember);
  };

  const handleChangeMember = (newMember) => {
    setMembers([
      ...members,
      {
        id: uuidv4(),
        name: newMember.name,
        brber: newMember.brber,
        netto: countNetto(newMember.brber),
      },
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
    let nMember = {
      id: activeMember.id,
      name: nname,
      brber: nbrber,
      netto: activeMember.netto,
    };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: nname,
        brber: nbrber,
        netto: activeMember.netto,
      },
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
    let nMember = {
      id: activeMember.id,
      name: activeMember.name,
      brber: activeMember.brber,
      netto: nnber,
    };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: activeMember.name,
        brber: activeMember.brber,
        netto: nnber,
      },
      ...partition2,
    ]);
  };
  const changeByTax = (t, id) => {
    switch (id) {
      case "szja":
        if (t) {
          if (activeMember.brber > 499952) {
            let tobblet = activeMember.brber - 499952;
            changeActiveNetto(
              (activeMember.netto += activeMember.brber * 0.15 - tobblet * 0.15)
            );
          } else {
            changeActiveNetto((activeMember.netto+activeMember.brber * 0.15));
          }
        } else {
        if (activeMember.brber > 499952) {
          let tobblet = activeMember.brber - 499952;
          changeActiveNetto((activeMember.netto+tobblet*0.15-activeMember.brber * 0.15));
          }
          else{
            changeActiveNetto((activeMember.netto-activeMember.brber * 0.15));
          }
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
          if (activeMember.brber - activeMember.netto <= 77300) {
            changeActiveNetto((activeMember.netto = activeMember.brber));
          } else {
            changeActiveNetto((activeMember.netto += 77300));
          }
        } else {
          if (activeMember.brber - activeMember.netto <= 77300) {
            //elozore valahogy vissza kell allitani
          } else {
            changeActiveNetto((activeMember.netto -= 77300));
          }
          changeActiveNetto((activeMember.netto -= 77300));
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
