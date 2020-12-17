import React from 'react';
import { Form, Input, Button } from 'antd';

export default function LoginPage({login}) {
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 }
  };

  const onFinish = values => {
    login(values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
      <div className='wa-45 mlr-auto card py-20 px-20'>
        <Form
          name='basic'
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='Email'
            name='email'
            rules={[{ required: true, message: 'Please input your email!' },{ type: 'email',message:'Invalid email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
  );
}
