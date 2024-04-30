import Table from 'react-bootstrap/Table';

const HouseholdSummary = ({members}) => {

  let osszeg = 0;

  const countTax = (member) => {
    const msDay = 1000 * 60 * 60 * 24;
    let tax = member.brber * 0.185;
    if (member.szja == 0) {
      tax += member.brber * 0.15;
    } else {
      if (member.brber > 499995) {
        tax += (member.brber - 499995) * 0.15;
      }
    }

    if (member.frissHazasok == 1) {
      if ((new Date() - member.date) / msDay < 2 * 365) {
        if (member.brber - tax > 5000) {
          tax -= 5000;
        } else {
          tax -= member.brber - member.netto;
        }
      }
    }

    if (member.szemelyiKedvezmeny == 1) {
      if (member.brber - tax > 77300) {
        tax -= 77300;
      } else {
        tax -= member.brber - tax;
      }
    }

    if (member.csaladiKedvezmeny > 0) {
      if (member.csaladiKedvezmeny == 1) {
        tax -= 10000 * member.eltartottak;
      }
      if (member.csaladiKedvezmeny == 2) {
        tax -= 20000 * member.eltartottak;
      }
      if (member.csaladiKedvezmeny == 3) {
        tax -= 33000 * member.eltartottak;
      }
    }
    osszeg += member.brber - tax;
    if(member.brber-tax>member.brber){
      return member.brber;
    }
    else{
      return member.brber - tax;
    }
  };


  return <div>
    <h2>Háztartás összesítétt jövedelme</h2>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Családtag</th>
          <th>Nettó bér</th>
        </tr>
      </thead>
      <tbody>

    {members.map((member) => (
      <tr key={member.id}>
        <td>{member.name}</td>
        <td>{Math.floor(countTax(member))}</td>
      </tr>
    ))}
    <tr>
      <td>Összesen</td>
      <td> {Math.floor(osszeg)} </td>
    </tr>
    </tbody>
    </Table>
  </div>;
};

export default HouseholdSummary;
