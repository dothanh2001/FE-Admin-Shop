import type { FC } from 'react';

import './index.less';

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
  nativeId: string;
  nativeName: string;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    nativeId: '4013197767003',
    nativeName: 'Việt Nam',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '2',
    nativeId: '4013197767005',
    nativeName: 'Hàn Quốc',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '3',
    nativeId: '4013197767005',
    nativeName: 'Mỹ',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '4',
    nativeId: '4013197767005',
    nativeName: 'Canada',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
];

const NativeContainer: FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [deleteConfirm, deleteContextHolder] = Modal.useModal();

  const handleShowCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleOkCreateNative = () => {
    setIsCreateModalOpen(false);
  };

  const handleCancelCreateNative = () => {
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

  const handleOkUpdateNative = () => {
    setIsUpdateModalOpen(false);
  };

  const handleCancelUpdateNative = () => {
    setIsUpdateModalOpen(false);
  };

  return (
    <div className="natives">
      <div className="native-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleShowCreateModal}>
          Thêm mới
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã" dataIndex="nativeId" key="nativeId" />
        <Column title="Xuất xứ" dataIndex="nativeName" key="nativeName" />
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
      <MyModal
        title="Tạo mới xuất xứ"
        open={isCreateModalOpen}
        onOk={handleOkCreateNative}
        onCancel={handleCancelCreateNative}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      <MyModal
        title="Cập nhật xuất xứ"
        open={isUpdateModalOpen}
        onOk={handleOkUpdateNative}
        onCancel={handleCancelUpdateNative}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      {deleteContextHolder}
    </div>
  );
};

export default NativeContainer;
