import React, { useEffect, useState } from 'react';
import { Table, Button, Tag, Space } from 'antd';
import { Popconfirm, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import UserFormModal from './UserFormModal';
import userActions from '../../actions/users';
const {getUsers} = userActions;

const DashboardPage = ({ data }) => {
  const [visible, setvisible] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(state=>state.users.data);
  const loader = useSelector(state=>state.users.loader);

  useEffect(()=>{
    dispatch(getUsers());
  },[]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      key: 'email',
      render: (text, record) => {
        return (<Button>
          Edit
        </Button>)
      }
    },
    {
      title: 'Remove',
      dataIndex: 'remove',
      key: 'email',
      render: (text, record) => {
        return (
          <Popconfirm
            title="Are you sure to delete this user?"
            onConfirm={()=>{}}
            onCancel={()=>{}}
            okText="Yes"
            cancelText="No"
          >
              <Button>
                Remove
          </Button>
          </Popconfirm>
       )
      }
    },
  ];
  return (
    <div className='mlr-auto card'>
      <div className='ml-auto'>
        <Button className="pull-right m-10" onClick={() => { setvisible(true) }}>
          Add
        </Button>
      </div>
      <Table className="m-10" dataSource={users} loading={loader} columns={columns} />
      <UserFormModal visible={visible} setvisible={setvisible} />
    </div>
  );
}

export default DashboardPage;