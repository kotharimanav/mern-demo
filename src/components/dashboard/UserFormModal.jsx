import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import userActions from '../../actions/users';
import { useDispatch } from 'react-redux'
const { addUser, editUser } = userActions;

const UserFormModal = ({ visible, setvisible, action, data }) => {
    const dispatch = useDispatch();
    const [fields, setFields] = useState([]);
    const [form] = Form.useForm();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    useEffect(() => {
        if (action === "edit") {
            setFields([{
                name: [
                    "name"
                ],
                value: data.name
            }, {
                name: [
                    "age"
                ],
                value: data.age
            }, {
                name: [
                    "email"
                ],
                value: data.email
            }])
        }
        if (action === 'add') {
            form.resetFields();
            setFields([]);
        }
        // eslint-disable-next-line
    }, [data, action])

    const handleOk = () => {
        setvisible(false);
    };

    const handleCancel = () => {
        setvisible(false);
    };

    const onFinish = values => {
        if (action === "add") {
            dispatch(addUser(values));
        }
        if (action === "edit") {
            dispatch(editUser(data._id, values));
        }
        handleOk();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal title={action === "edit" ? "Edit User" : "Add User"} visible={visible} footer={[]} onCancel={handleCancel}>
            <div>
                <Form
                    form={form}
                    {...layout}
                    name="basic"
                    fields={action === "edit" ? fields : []}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input your Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' },{ type:'email', message: 'Invalid email' }]}
                    >
                        <Input disabled={action === "edit"} />
                    </Form.Item>
                    <Form.Item
                        label="Age"
                        name="age"
                        rules={[{ required: true, message: 'Please input your age!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className="pull-right">
                        <Button type="primary" className="mr-10" htmlType="submit">
                            Submit
                        </Button>
                        <Button type="primary" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </div>
                </Form>
            </div>
        </Modal>

    );
}

export default UserFormModal;