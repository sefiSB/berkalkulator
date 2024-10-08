import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import TaxRelief from "./TaxRelief/TaxRelief";
import MemberSummary from "./MemberSummary/MemberSummary";

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const HouseholdSalaryCalculator = () => {
  const [datePopUp, setDatePopUp] = useState(false);
  const [numberPopUp, setNumberPopUp] = useState(false);
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Bendi",
      brber: 500000,
      /* netto: countNetto(500000), */
      szja: 1,
      frissHazasok: 0,
      date: "2019-01-08",
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
      eltartottak: 0,
    },
    {
      id: 2,
      name: "John",
      brber: 1000,
      /* netto: countNetto(1000), */
      szja: 0,
      frissHazasok: 0,
      date: "2023-01-01",
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
      eltartottak: 0,
    },
    {
      id: 3,
      name: "Alice",
      brber: 20000,
      /* netto: countNetto(20000), */
      szja: 0,
      frissHazasok: 0,
      date: "2021-01-01",
      szemelyiKedvezmeny: 0,
      csaladiKedvezmeny: 0,
      eltartottak: 0,
    },
  ]);
  const [activeMember, setActiveMember] = useState(members[0]);
  

  const dataChange = (data) => {
    setActiveMember({
      ...activeMember,
      date: data,
    });
  };

  const getFamilyInputs = (eltartottak, csaladiKedvezmeny) => {
    changeActiveTaxes(
      activeMember.szja,
      activeMember.frissHazasok,
      activeMember.szemelyiKedvezmeny,
      csaladiKedvezmeny,
      eltartottak
    );
  };

  const handleTabClick = (member) => {
    let newMember = {
      id: member.id,
      name: member.name,
      brber: member.brber,
      /* netto: member.netto, */
      szja: member.szja,
      frissHazasok: member.frissHazasok,
      date: member.date,
      szemelyiKedvezmeny: member.szemelyiKedvezmeny,
      csaladiKedvezmeny: member.csaladiKedvezmeny,
      eltartottak: member.eltartottak,
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
        date: newMember.date,
        /* netto: countNetto(newMember.brber), */
        szja: newMember.szja,
        frissHazasok: newMember.frissHazasok,
        szemelyiKedvezmeny: newMember.szemelyiKedvezmeny,
        csaladiKedvezmeny: newMember.csaladiKedvezmeny,
        eltartottak: newMember.eltartottak,
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

  const changeActiveDate = (date) => {
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
      /* netto: activeMember.netto, */
      szja: activeMember.szja,
      frissHazasok: activeMember.frissHazasok,
      date: date,
      szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
      csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
      eltartottak: activeMember.eltartottak,
    };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: activeMember.name,
        brber: activeMember.brber,
        /* netto: activeMember.netto, */
        szja: activeMember.szja,
        frissHazasok: activeMember.frissHazasok,
        date: date,
        szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
        csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
        eltartottak: activeMember.eltartottak,
      },
      ...partition2,
    ]);
  };

  const changeActiveData = (nname, nbrber) => {
    /* countTax(); */
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
      /* netto: activeMember.netto, */
      szja: activeMember.szja,
      frissHazasok: activeMember.frissHazasok,
      date: activeMember.date,
      szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
      csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
      eltartottak: activeMember.eltartottak,
    };
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: nname,
        brber: nbrber,
        /* netto: activeMember.netto, */
        szja: activeMember.szja,
        frissHazasok: activeMember.frissHazasok,
        date: activeMember.date,
        szemelyiKedvezmeny: activeMember.szemelyiKedvezmeny,
        csaladiKedvezmeny: activeMember.csaladiKedvezmeny,
        eltartottak: activeMember.eltartottak,
      },
      ...partition2,
    ]);
  };


  const changeActiveTaxes = (
    szja,
    frissHazasok,
    szemelyiKedvezmeny,
    csaladiKedvezmeny,
    eltartottak
  ) => {
    console.log("csaladi ",eltartottak,csaladiKedvezmeny)
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
      /* netto: activeMember.netto, */
      szja: szja,
      frissHazasok: frissHazasok,
      date: activeMember.date,
      szemelyiKedvezmeny: szemelyiKedvezmeny,
      csaladiKedvezmeny: csaladiKedvezmeny,
      eltartottak: eltartottak,
    };

    setActiveMember(nMember);
    setMembers([...partition1, nMember, ...partition2]);
  };

  const checkBoxes = (checked, targetID) => {
    
    switch (targetID) {
      case "szja":
        if (checked) {
          changeActiveTaxes(
            1,
            activeMember.frissHazasok,
            activeMember.szemelyiKedvezmeny,
            activeMember.csaladiKedvezmeny,
            activeMember.eltartottak
          );
        } else {
          changeActiveTaxes(
            0,
            activeMember.frissHazasok,
            activeMember.szemelyiKedvezmeny,
            activeMember.csaladiKedvezmeny,
            activeMember.eltartottak
          );
        }
        break;

      case "frissHazasok": //nincs megirva
        if (checked) {
          changeActiveTaxes(
            activeMember.szja,
            1,
            activeMember.szemelyiKedvezmeny,
            activeMember.csaladiKedvezmeny,
            activeMember.eltartottak
          );
          setDatePopUp(true);
        } else {
          changeActiveTaxes(
            activeMember.szja,
            0,
            activeMember.szemelyiKedvezmeny,
            activeMember.csaladiKedvezmeny,
            activeMember.eltartottak
          );
          setDatePopUp(false);
        }
        break;

      case "szemelyiKedvezmeny": //nincs megirva
        if (checked) {
          changeActiveTaxes(
            activeMember.szja,
            activeMember.frissHazasok,
            1,
            activeMember.csaladiKedvezmeny,
            activeMember.eltartottak
          );
        } else {
          changeActiveTaxes(
            activeMember.szja,
            activeMember.frissHazasok,
            0,
            activeMember.csaladiKedvezmeny,
            activeMember.eltartottak
          );
        }
        break;

      case "csaladiKedvezmeny": //nincs megirva
        if (checked) {
          setNumberPopUp(true);
          changeActiveTaxes(
            activeMember.szja,
            activeMember.frissHazasok,
            activeMember.szemelyiKedvezmeny,
            1,
            1,
          );
        } else {
          setNumberPopUp(false);
          changeActiveTaxes(
            activeMember.szja,
            activeMember.frissHazasok,
            activeMember.szemelyiKedvezmeny,
            0,
            0,
          );
        }
    }
  };

  if (members.length == 0) {
    //ne lehessen üres a calculator
    let newMember = {
      name: "Új személy",
      brber: 0,
      /* netto: 0, */
      id: uuidv4(),
      szja: 0,
      frissHazasok: 0,
      date: null,
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
            <TaxRelief
              active={activeMember}
              onChecked={checkBoxes}
              showDate={datePopUp}
              showInput={numberPopUp}
              changeData={dataChange}
              familyInputs={getFamilyInputs}
              popUpClose={() => setDatePopUp(false)}
            />

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
