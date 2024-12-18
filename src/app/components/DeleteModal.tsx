"use client";
import { Modal } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import { deletePost } from "../actions";

export default function DeleteModal({ text, id }: DeleteProps) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  const handleDelete = async () => {
    try {
      const res = await deletePost(id);
      if (res) {
        toast.success("Post deleted successfully");
        setOpen(false);
      } else {
        throw Error("Error occured");
      }
    } catch (error) {
      toast.error("Error deleting post");
    }
  };
  return (
    <>
      <a type="primary" onClick={showModal} className="text-red-500">
        {text || "Delete"}
      </a>
      <Modal
        title={text || "Delete"}
        open={open}
        onOk={handleDelete}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to delete that post?</p>
      </Modal>
    </>
  );
}
