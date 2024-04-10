import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";

//memberek
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
        <SalaryCalculator />
        <HouseholdSummary />
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
