import React, { useEffect, useState } from 'react';
import { Popconfirm } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import UserFormModal from './UserFormModal';
import userActions from '../../actions/users';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import {UserOutlined, SearchOutlined } from '@ant-design/icons';

const { getUsers, removeUser } = userActions;

const DashboardPage = ({ data }) => {
  const [visible, setvisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.data);
  const loader = useSelector(state => state.users.loader);
  const [searchText, setSearchText] = useState(null);
  const [searchedColumn, setSerchedColumn] = useState(null);
  useEffect(() => {
    dispatch(getUsers());
    // eslint-disable-next-line
  }, []);

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
          text
        ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSerchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };


  const columns = [
    {
      title: 'Id',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Profile',
      dataIndex: 'imgPath',
      key: 'imgPath',
      render: (text, row) => (
        <div className=''>
          <img height="35px" src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'}/>
        </div>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      ...getColumnSearchProps('age'),
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => {
        return (<div>
          <Button 
          className="mr-15"
            onClick={() => {
              setUser(record);
              setIsEdit(true);
              setvisible(true);
            }}>
            Edit
        </Button>
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
        </div>)
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
      <Table className="m-10" rowKey={'_id'} dataSource={users} loading={loader} columns={columns} />
      <UserFormModal action={isEdit ? 'edit' : 'add'} data={user} visible={visible} setvisible={setvisible} />
    </div>
  );
}

export default DashboardPage;