import { Button } from 'antd';
import React from 'react';
import Users from '../../components/dashboard/Users'
import { useDispatch } from 'react-redux'
import authActions from '../../actions/auth';
const { logout } = authActions;

const Dashboard = () => {
  const dispatch = useDispatch();
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
      <div className="my-15">
        <Button onClick={() => {
          dispatch(logout())
        }}>Logout</Button>
      </div>
      <div className="my-30">
        <Users data={data} />
      </div>
    </div >
  );
};

export default Dashboard;
