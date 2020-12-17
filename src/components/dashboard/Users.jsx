import React, { useEffect, useState } from 'react';
import { Table, Button, Tag, Space } from 'antd';
import { Popconfirm, message } from 'antd';

import UserFormModal from './UserFormModal';

const DashboardPage = ({ data }) => {
  const [visible, setvisible] = useState(false);

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
      <div className='my-10'>
        <Button onClick={() => { setvisible(true) }}>
          Add
        </Button>
      </div>
      <Table dataSource={data} columns={columns} />
      <UserFormModal visible={visible} setvisible={setvisible} />
    </div>
  );
}

export default DashboardPage;