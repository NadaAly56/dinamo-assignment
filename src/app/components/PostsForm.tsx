"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { postAction } from "../actions";
import { toast } from "sonner";

export default function PostsForm({
  method = "post",
  dataRecord,
}: PostsFormProps) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const variant = Form.useWatch("variant", form);
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

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      console.log("Form submitted with values:", values);
      setConfirmLoading(true);
      const response = await postAction(
        values,
        method === "put" ? dataRecord?.id : undefined
      );
      if (response) {
        const successMessage =
          method === "post"
            ? "Post created successfully!"
            : "Post updated successfully!";
        toast.success(successMessage);
        form.resetFields();
        setOpen(false);
      } else {
        throw new Error("Failed to submit the post.");
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Submission Failed:", error.message);
      } else {
        console.error("Validation Failed:", error);
      }
      if (method === "post") {
        toast.error("Failed to create the post. Please try again.");
      } else {
        toast.error("Failed to edit the post. Please try again.");
      }
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      {method == "post" ? (
        <div className="w-100 text-end">
          <Button type="primary" onClick={showModal}>
            Add Post
          </Button>
        </div>
      ) : (
        <a type="primary" onClick={showModal}>
          Edit
        </a>
      )}

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
          variant={variant || "filled"}
          style={{ maxWidth: 600 }}
          initialValues={{
            variant: "filled",
            title: dataRecord?.title,
            body: dataRecord?.body,
          }}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter a title" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Post"
            name="body"
            rules={[
              { required: true, message: "Please enter the post content" },
            ]}
          >
            <Input.TextArea
              rows={6}
              placeholder="Write your post content here..."
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
