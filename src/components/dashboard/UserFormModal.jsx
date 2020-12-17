import React from 'react';
import { Button, Form, Input, Modal } from 'antd';
import userActions from '../../actions/users';
import { useDispatch, useSelector } from 'react-redux'
const { addUser } = userActions;

const UserFormModal = ({ visible, setvisible }) => {
    const dispatch = useDispatch();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const handleOk = () => {
        setvisible(false);
    };

    const handleCancel = () => {
        setvisible(false);
    };


    const onFinish = values => {
        console.log('Success:', values);
        dispatch(addUser(values));
        handleOk();
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Modal title="Add User" visible={visible} footer={[]} onCancel={handleCancel}>
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
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
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
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