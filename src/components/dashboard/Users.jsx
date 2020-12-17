import React, { useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import UserFormModal from './UserFormModal';
import userActions from '../../actions/users';
const { getUsers, removeUser } = userActions;

const DashboardPage = ({ data }) => {
  const [visible, setvisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);
  const loader = useSelector(state => state.users.loader);

  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

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
        return (<Button
          onClick={() => {
            setUser(record);
            setIsEdit(true);
            setvisible(true);
          }}>
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
            onConfirm={() => {
              dispatch(removeUser(record._id))
            }}
            onCancel={() => { }}
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
        <Button className="pull-right m-10" onClick={() => { setIsEdit(false); setUser(null); setvisible(true) }}>
          Add
        </Button>
      </div>
      <Table className="m-10" dataSource={users} loading={loader} columns={columns} />
      <UserFormModal action={isEdit ? 'edit' : 'add'} data={user} visible={visible} setvisible={setvisible} />
    </div>
  );
}

export default DashboardPage;