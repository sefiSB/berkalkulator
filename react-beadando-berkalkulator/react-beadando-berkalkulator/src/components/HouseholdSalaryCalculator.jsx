import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

const members=[{name:"Bendi"}]
const active="Bendi"
//aktív

const HouseholdSalaryCalculator = () => {
  return (
    <>
      <header>
        <FamilyMemberTabs 
        members={members}
        active={active}
        />
      </header>
      <main>
        <SalaryCalculator 
        active={active}/>
        {/* szemelyre kattintva kulon kulon */}
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
