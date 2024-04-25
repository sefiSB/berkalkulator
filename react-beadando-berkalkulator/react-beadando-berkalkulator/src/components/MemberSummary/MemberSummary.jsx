import React from "react";

const MemberSummary = ({ activeMember }) => {
  
  
  const countTax = () => {
    let tax = activeMember.brber * 0.185;
    if (activeMember.szja == 0) {
      tax += activeMember.brber * 0.15;
    } else {
      if (activeMember.brber > 499995) {
        tax += (activeMember.brber - 499995) * 0.15;
      }
    }

    if (activeMember.frissHazasok == 1) {
      const msDay = 86400000;
      if ((new Date() - new Date(activeMember.date))< 2 * 365*msDay) {
        if (activeMember.brber - tax > 5000) {
          tax -= 5000;
        } else {
          tax -= activeMember.brber - activeMember.netto;
        }
      }
    }

    if (activeMember.szemelyiKedvezmeny == 1) {
      if (activeMember.brber - tax > 77300) {
        tax -= 77300;
      } else {
        tax -= activeMember.brber - tax;
      }
    }

    if (activeMember.csaladiKedvezmeny > 0) {
      if (activeMember.csaladiKedvezmeny == 1) {
        tax -= 10000 * activeMember.eltartottak;
      }
      if (activeMember.csaladiKedvezmeny == 2) {
        tax -= 20000 * activeMember.eltartottak;
      }
      if (activeMember.csaladiKedvezmeny == 3) {
        tax -= 33000 * activeMember.eltartottak;
      }
    }

    return activeMember.brber - tax;
  };

  return (
    <>
        <h2>Számított nettó bér:</h2>
        <div>{Math.floor(countTax())}</div>
    </>
  );
};

export default MemberSummary;
