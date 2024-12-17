"use client"
import { Table } from "antd";
import PostsForm from "./PostsForm";

export default function PostsTable({ data }: { data: Post[] }) {
    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'UserId',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Post',
            dataIndex: 'body',
            key: 'body',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: string, record: Post) => (
                <div className="flex gap-2">
                    <PostsForm method="put" dataRecord={record} />
                    <a className="text-red-500">Delete</a>
                </div>
            ),
        }
    ];
    return (
        <Table dataSource={data} columns={columns} />
    )
}