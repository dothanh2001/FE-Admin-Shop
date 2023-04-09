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
  tradeMarkedId: string;
  tradeMarkedName: string;
  updatedAt: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    tradeMarkedId: '4013197767003',
    tradeMarkedName: 'KIKA LUXURY 1',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '2',
    tradeMarkedId: '4013197767005',
    tradeMarkedName: 'KIKA LUXURY 2',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '3',
    tradeMarkedId: '4013197767005',
    tradeMarkedName: 'KIKA LUXURY 3',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
  {
    key: '4',
    tradeMarkedId: '4013197767005',
    tradeMarkedName: 'KIKA LUXURY 4',
    updatedAt: moment().format('HH:mm DD-MM-YYYY'),
    status: 'Active',
  },
];

const TradeMarkedContainer: FC = () => {
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
    <div className="trademarked">
      <div className="trademarked-header">
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleShowCreateModal}>
          Thêm mới
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key}>
        <Column title="Mã" dataIndex="tradeMarkedId" key="tradeMarkedId" />
        <Column title="Thương hiệu" dataIndex="tradeMarkedName" key="tradeMarkedName" />
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
      <MyModal title="Tạo mới thương hiệu" open={isCreateModalOpen} onOk={handleOkCreate} onCancel={handleCancelCreate}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      <MyModal
        title="Cập nhật thương hiệu"
        open={isUpdateModalOpen}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      {deleteContextHolder}
    </div>
  );
};

export default TradeMarkedContainer;
