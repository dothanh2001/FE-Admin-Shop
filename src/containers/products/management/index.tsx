import type { FC } from 'react';

import './index.less';

import { ExclamationCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Select, Space } from 'antd';
import { useState } from 'react';

import MyButton from '@/components/basic/button';
import MyModal from '@/components/basic/modal';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  productId: string;
  productName: string;
  categoryName: string;
  totalInput: number;
  totalOutput: number;
  purchasePrice: number;
  inventory: number;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    productId: '4013197767003',
    productName: 'Sofa CHAUMONT(NOMAD)',
    categoryName: 'Ghế Sofa',
    status: 'Đang kinh doanh',
    totalInput: 0,
    totalOutput: 0,
    inventory: 0,
    purchasePrice: 4000,
  },
  {
    key: '2',
    productId: '4013197767005',
    productName: 'Sofa CHAUMONT(NOMAD)',
    categoryName: 'Ghế Sofa',
    status: 'Đang kinh doanh',
    totalInput: 0,
    totalOutput: 0,
    inventory: 0,
    purchasePrice: 4000,
  },
  {
    key: '3',
    productId: '4013197767005',
    productName: 'Sofa CHAUMONT(NOMAD)',
    categoryName: 'Ghế Sofa',
    status: 'Đang kinh doanh',
    totalInput: 0,
    totalOutput: 0,
    inventory: 0,
    purchasePrice: 4000,
  },
];

new Array(30).fill(undefined).forEach((item, index) => {
  data.push({
    key: index + 4 + '',
    productId: `${4013197767005 + index}`,
    productName: 'Sofa' + index,
    categoryName: 'Ghế Sofa',
    status: 'Đang kinh doanh',
    totalInput: 0,
    totalOutput: 0,
    inventory: 0,
    purchasePrice: 4000,
  });
});

const ManagementContainer: FC = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [deleteConfirm, deleteContextHolder] = Modal.useModal();

  const handleChangeCategorySearch = () => {};

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

  return (
    <div className="management">
      <div className="management-header">
        <div className="management-search">
          <Input className="product-id-search" placeholder="Mã sản phẩm" />
          <Select
            placeholder="Danh mục"
            style={{ width: '100%' }}
            onChange={handleChangeCategorySearch}
            options={[
              { value: '1', label: 'Ghế Sofa' },
              { value: '2', label: 'Sofa phòng khách' },
              { value: '3', label: 'Bàn trà' },
              { value: '4', label: 'Bàn ăn' },
            ]}
          />
        </div>
        <Button type="primary" icon={<PlusCircleOutlined />} onClick={handleShowCreateModal}>
          Thêm mới
        </Button>
      </div>
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key} height="100%">
        <Column title="Mã sản phẩm" dataIndex="productId" key="productId" width="10%" />
        <Column title="Tên sản phẩm" dataIndex="productName" key="productName" width="15%" />
        <Column title="Danh mục" dataIndex="categoryName" key="categoryName" width="10%" />
        <Column title="Nhập" dataIndex="totalInput" key="totalInput" width="10%" />
        <Column title="Xuất" dataIndex="totalOutput" key="totalOutput" width="10%" />
        <Column title="Giá nhập" dataIndex="purchasePrice" key="purchasePrice" width="10%" />
        <Column title="Tồn kho" dataIndex="inventory" key="inventory" width="10%" />
        <Column title="Trạng thái" dataIndex="status" key="status" />
        <Column
          title="Hành động"
          key="action"
          align="center"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text">Sửa</MyButton>
              <MyButton type="text" onClick={handleShowDeleteItemConfirm}>
                Xoá
              </MyButton>
            </Space>
          )}
        />
      </MyTable>
      {/* Modal place */}
      <MyModal title="Tạo mới xuất xứ" open={isCreateModalOpen} onOk={handleOkCreate} onCancel={handleCancelCreate}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
      {deleteContextHolder}
    </div>
  );
};

export default ManagementContainer;
