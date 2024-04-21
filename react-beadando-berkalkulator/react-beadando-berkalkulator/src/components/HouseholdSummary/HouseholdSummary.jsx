import Table from 'react-bootstrap/Table';

const HouseholdSummary = ({members}) => {
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
      <tr>
        <td>{member.name}</td>
        <td>{member.brber}</td>
      </tr>
    ))}
    </tbody>
    </Table>
  </div>;
};

export default HouseholdSummary;
