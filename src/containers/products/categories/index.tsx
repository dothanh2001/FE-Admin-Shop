import type { FC } from 'react';

import { ExclamationCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Modal, Space } from 'antd';
import moment from 'moment';
import { useState } from 'react';

import MyButton from '@/components/basic/button';
import MyModal from '@/components/basic/modal';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  categoryId: string;
  categoryName: string;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    categoryId: '4013197767001',
    categoryName: 'Ghế Sofa',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '2',
    categoryId: '4013197767002',
    categoryName: 'Sofa phòng khách',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '3',
    categoryId: '4013197767003',
    categoryName: 'Bàn trà',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '4',
    categoryId: '4013197767004',
    categoryName: 'Bàn ăn',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '5',
    categoryId: '4013197767005',
    categoryName: 'Giường ngủ',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '6',
    categoryId: '4013197767006',
    categoryName: 'Quạt trần đèn',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '7',
    categoryId: '4013197767007',
    categoryName: 'Kệ tivi',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '8',
    categoryId: '4013197767008',
    categoryName: 'Bàn trang điểm',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '9',
    categoryId: '4013197767009',
    categoryName: 'Tủ quần áo',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '10',
    categoryId: '4013197767010',
    categoryName: 'Tranh decor',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
];

const CategoryContainer: FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [deleteConfirm, deleteContextHolder] = Modal.useModal();

  const handleShowCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleOkCreate = () => {
    setIsCreateModalOpen(false);
  };

  const handleCancelCreate = () => {
    setIsCreateModalOpen(false);
  };

  const handleShowDeleteItemConfirm = () => {
    deleteConfirm.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: 'Xác nhận',
      cancelText: 'Huỷ',
    });
  };

  const handleShowUpdateItemModal = () => {
    setIsUpdateModalOpen(true);
  };

  const handleOkUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  const handleCancelUpdate = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="categories">
      <div className="categories-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleShowCreateModal}>
          Thêm mới
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã" dataIndex="categoryId" key="categoryId" />
        <Column title="Danh mục" dataIndex="categoryName" key="categoryName" />
        <Column title="Trạng thái" dataIndex="status" key="status" />
        <Column title="Cập nhật" dataIndex="updatedAt" key="updatedAt" />
        <Column
          title="Hành động"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text" onClick={handleShowUpdateItemModal}>
                Sửa
              </MyButton>
              <MyButton type="text" onClick={handleShowDeleteItemConfirm}>
                Xoá
              </MyButton>
            </Space>
          )}
        />
      </MyTable>

      {/* Modal place */}
      <MyModal title="Tạo mới danh mục" open={isCreateModalOpen} onOk={handleOkCreate} onCancel={handleCancelCreate}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      <MyModal title="Cập nhật danh mục" open={isUpdateModalOpen} onOk={handleOkUpdate} onCancel={handleCancelUpdate}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      {deleteContextHolder}
    </div>
  );
};

export default CategoryContainer;
