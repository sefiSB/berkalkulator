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
    return Math.floor(brutto - brutto * 0.15 - brutto * 0.185);
  };
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Bendi",
      brber: 1000,
      netto: countNetto(1000),
      szja: 0,
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

  const [datePopUp,setDatePopUp]=useState(false);

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

  const changeActiveTaxes = (
    szja,
    frissHazasok,
    szemelyiKedvezmeny,
    csaladiKedvezmeny
  ) => {
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
    setActiveMember(nMember);
    setMembers([
      ...partition1,
      {
        id: activeMember.id,
        name: activeMember.name,
        brber: activeMember.brber,
        netto: activeMember.netto,
        szja: szja,
        frissHazasok: frissHazasok,
        szemelyiKedvezmeny: szemelyiKedvezmeny,
        csaladiKedvezmeny: csaladiKedvezmeny,
      },
      ...partition2,
    ]);
  };

  const checkBoxes = (eventID, t) => {
    switch (eventID) {
      case "szja":
        if (t) {
          szja = 0;
        } else {
          szja = 1;
        }
        break;
      case "frissHazasok":
        if (!datePopUp){
          setDatePopUp(true);
        }
        break;
      case "szemelyiKedvezmeny":
        if (t) {
          szemelyiKedvezmeny = 0;
        } else {
          szemelyiKedvezmeny = 1;
        }
        break;
      case "csaladiKedvezmeny":
        break;
    }
    /* setActiveMember({activeMember, szja: szja, frissHazasok: frissHazasok, szemelyiKedvezmeny: szemelyiKedvezmeny, csaladiKedvezmeny: csaladiKedvezmeny}); */
    changeActiveTaxes(
      szja,
      frissHazasok,
      szemelyiKedvezmeny,
      csaladiKedvezmeny
    );
    countTax();
  };

  const countTax = () => {
    let tax = 0;
    if (activeMember.szja == 1) {
      if (activeMember.brber > 499952) {
        tax += 499952 * 0.15;
      }
    }
    if (activeMember.szja == 0) {
      tax += activeMember.brber * 0.15;
    }
    if (activeMember.frissHazasok == 1) {
      tax -= 50000;
    }
    if (activeMember.csaladiKedvezmeny == 1) {
      tax -= activeMember.brber * 0.3;
    }
    if (activeMember.szemelyiKedvezmeny == 1) {
      if (tax < 77300) {
        tax = 0;
      } else {
        tax -= 77300;
      }
    }
    changeActiveNetto(activeMember.brber - tax);
  };

  /* const changeByTax = (t, id) => {
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
  }; */
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
              onSubmit={changeActiveData}
            />
            <TaxRelief active={activeMember} onChecked={checkBoxes} />
            <DatePopUp active={datePopUp}/>
            <MemberSummary active={activeMember} />
          </div>
          <div className="col jobb">
          <HouseholdSummary members={members}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
