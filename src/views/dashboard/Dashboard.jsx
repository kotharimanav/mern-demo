import React from 'react';
import Users from '../../components/dashboard/Users'

const Dashboard = () => {
  const data = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      email: 'manav@mailnator.com',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      email: 'manav@mailnator.com',
    },
  ]

  return (
    <div className="pt-40 px-40">
        <Users data={data} />
    </div >
  );
};

export default Dashboard;
