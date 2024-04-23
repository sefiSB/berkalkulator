import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import TaxRelief from "./TaxRelief/TaxRelief";
import MemberSummary from "./MemberSummary/MemberSummary";
import DatePopUp from "./DatePopUp/DatePopUp";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

/* const members=[{name:"Bendi"},{name:"Jani"},{name:"Feri"}]
const active="Bendi" */
//aktív
const HouseholdSalaryCalculator = () => {
  const countNetto = (brutto) => {
    return Math.floor(brutto - brutto * 0.15 - brutto * 0.185); //szja és TB
  };
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Bendi",
      brber: 500000,
      netto: countNetto(500000),
      szja: 1,
      frissHazasok: 0,
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
    },
    {
      id: 2,
      name: "John",
      brber: 1000,
      netto: countNetto(1000),
      szja: 0,
      frissHazasok: 0,
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
    },
    {
      id: 3,
      name: "Alice",
      brber: 20000,
      netto: countNetto(20000),
      szja: 0,
      frissHazasok: 0,
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
    },
  ]);
  const [activeMember, setActiveMember] = useState(members[0]);

  const [datePopUp, setDatePopUp] = useState(false);

  const handleTabClick = (member) => {
    let newMember = {
      id: member.id,
      name: member.name,
      brber: member.brber,
      netto: member.netto,
      szja: member.szja,
      frissHazasok: member.frissHazasok,
      szemelyiKedvezmeny: member.szemelyiKedvezmeny,
      csaladiKedvezmeny: member.csaladiKedvezmeny,
    };
    setActiveMember(newMember);
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

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    if (id != members[0].id) {
      setActiveMember(members[0]);
    } else {
      setActiveMember(members[1]);
    }
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
      szja: activeMember.szja,
      frissHazasok: activeMember.frissHazasok,
      szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
      csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
    };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: nname,
        brber: nbrber,
        netto: activeMember.netto,
        szja: activeMember.szja,
        frissHazasok: activeMember.frissHazasok,
        szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
        csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
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
      szja: activeMember.szja,
      frissHazasok: activeMember.frissHazasok,
      szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
      csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
    };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: activeMember.name,
        brber: activeMember.brber,
        netto: nnber,
        szja: activeMember.szja,
        frissHazasok: activeMember.frissHazasok,
        szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
        csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
      },
      ...partition2,
    ]);
  };

  const changeActiveTaxes = (
    szja,
    frissHazasok,
    szemelyiKedvezmeny,
    csaladiKedvezmeny
  ) => {
    console.log(szja+" fasz")
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
      netto: activeMember.netto,
      szja: szja,
      frissHazasok: frissHazasok,
      szemelyiKedvezmeny: szemelyiKedvezmeny,
      csaladiKedvezmeny: csaladiKedvezmeny,
    };
    console.log(nMember.szja+" asdasd")
    setActiveMember(nMember);
    console.log(activeMember);
    console.log("bomboclat")
    setMembers([
      ...partition1,
      nMember,
      ...partition2,
    ]);

  };

  const checkBoxes = (checked, targetID) => {
    switch (targetID) {
      case "szja":
        if (checked) {
          changeActiveTaxes(
            1,
            activeMember.frissHazasok,
            activeMember.szemelyiKedvezmeny,
            activeMember.csaladiKedvezmeny
          );
          console.log(activeMember.szja+"taxok utan");
        } else {
          changeActiveTaxes(
            0,
            activeMember.frissHazasok,
            activeMember.szemelyiKedvezmeny,
            activeMember.csaladiKedvezmeny
          );
        }
        break;

      case "frissHazasok": //nincs megirva
        break;

      case "szemelyiKedvezmeny": //nincs megirva
        if (checked) {
        }
    }
    countTax();
  };

  const countTax = () => {
    let tax = activeMember.brber * 0.185;
    if (activeMember.szja == 0) {
      tax += activeMember.brber * 0.15;
    } else {
      if (activeMember.brber > 499995) {
        tax += (activeMember.brber - 499995) * 0.15;
      }
    }

    changeActiveNetto(activeMember.brber - tax);
  };

  if (members.length == 0) {
    let newMember = {
      name: "Új személy",
      brber: 0,
      netto: 0,
      id: uuidv4(),
      szja: 0,
      frissHazasok: 0,
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
    };
    setMembers([newMember]);
    setActiveMember(newMember);
  }

  return (
    <>
      <header>
        <div className="tabok">
          <FamilyMemberTabs
            members={members}
            active={activeMember}
            onTabClick={handleTabClick}
            onPlusClick={handleChangeMember}
            /* emptyMembers={addIfEmpty} */
          />
        </div>
      </header>
      <main>
        <div className="row">
          <div className="col bal">
            <SalaryCalculator
              active={activeMember}
              members={members}
              onSubmit={changeActiveData}
              deleteMember={deleteMember}
            />
            <TaxRelief active={activeMember} onChecked={checkBoxes} />
            <DatePopUp active={datePopUp} />
            <MemberSummary activeMember={activeMember} />
          </div>
          <div className="col jobb">
            <HouseholdSummary members={members} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
