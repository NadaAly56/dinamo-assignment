"use client"
import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { addPost } from '../actions';

export default function PostsForm({ method = "post", dataRecord }: PostsFormProps) {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [form] = Form.useForm();
    console.log({ form });

    const variant = Form.useWatch('variant', form);
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 14 },
        },
    };
    const showModal = () => {
        setOpen(true);
    };

    const handleSubmit = () => {
        form
            .validateFields()
            .then(async (values) => {
                console.log("Form submitted with values:", values);
                if (method == "post") {
                    await addPost(values);
                    setConfirmLoading(true);
                    setOpen(false);
                    setConfirmLoading(false);
                    form.resetFields();
                }

            })
            .catch((info) => {
                console.error("Validate Failed:", info);
            });
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };
    return (
        <>
            <a type="primary" onClick={showModal}>
                {method == "post" ? "Add" : "Edit"}
            </a>
            <Modal
                title={method == "post" ? "Add Post" : "Edit Post"}
                open={open}
                onOk={handleSubmit}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Form
                    {...formItemLayout}
                    form={form}
                    action={handleSubmit}
                    variant={variant || 'filled'}
                    style={{ maxWidth: 600 }}
                    initialValues={{ variant: 'filled' }}
                >
                    <Form.Item label="Title" name="title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item label="Post" name="body" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}