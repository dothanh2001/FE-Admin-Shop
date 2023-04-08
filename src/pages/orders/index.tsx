import type { FC } from 'react';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import { log } from 'console';

import MyButton from '@/components/basic/button';
import MyTable from '@/components/core/table';

const { Column } = MyTable;

interface ColumnType {
  key: string;
  orderId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  totalAmount: number;
  address: string;
  description: string;
  status: string;
}

const data: ColumnType[] = [
  {
    key: '1',
    orderId: '4013197767003',
    productName: 'Sofa CHAUMONT(NOMAD)',
    unitPrice: 18900000,
    quantity: 1,
    totalAmount: 18900000,
    description: '',
    address: '44 Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội',
    status: 'Đang giao',
  },
  {
    key: '2',
    orderId: '4013197767005',
    productName: 'Sofa CHAUMONT(NOMAD)',
    unitPrice: 18900000,
    quantity: 1,
    totalAmount: 18900000,
    address: '44 Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội',
    description: '',
    status: 'Đang giao',
  },
  {
    key: '3',
    orderId: '4013197767005',
    productName: 'Sofa CHAUMONT(NOMAD)',
    unitPrice: 18900000,
    quantity: 1,
    totalAmount: 18900000,
    address: '44 Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội',
    description: '',
    status: 'Đang giao',
  },
];

new Array(30).fill(undefined).forEach((item, index) => {
  data.push({
    key: index + 4 + '',
    orderId: `${4013197767005 + index}`,
    productName: 'Sofa' + index,
    unitPrice: 18900000,
    quantity: 1,
    totalAmount: 18900000,
    address: 'Sidney No. 1 Lake Park' + index,
    description: '',
    status: 'Đang giao',
  });
});

const OrderPage: FC = () => {
  const [confirmModal, contextHolderConfirmPayment] = Modal.useModal();
  const [removeModal, contextHolderRemovePayment] = Modal.useModal();

  const handleShowConfirmAcceptPayment = () => {
    confirmModal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: 'Xác nhận thanh toán đơn hàng?',
      okText: 'Xác nhận',
      cancelText: 'Huỷ',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const handleShowConfirmRemovePayment = () => {
    removeModal.confirm({
      title: 'Xác nhận',
      icon: <ExclamationCircleOutlined />,
      content: 'Xác nhận huỷ đơn hàng?',
      okText: 'Xác nhận',
      cancelText: 'Huỷ',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div className="aaa">
      <MyTable<ColumnType> dataSource={data} rowKey={record => record.key} height="100%">
        <Column title="Mã đơn hàng" dataIndex="orderId" key="orderId" />
        <Column title="Tên sản phẩm" dataIndex="productName" key="productName" />
        <Column title="Đơn giá" dataIndex="unitPrice" key="unitPrice" />
        <Column title="Số lượng" dataIndex="quantity" key="quantity" width="75px" />
        <Column title="Tổng tiền" dataIndex="totalAmount" key="totalAmount" />
        <Column title="Địa chỉ" dataIndex="address" key="address" />
        <Column title="Mô tả" dataIndex="description" key="description" width="100px" />
        <Column title="Trạng thái" dataIndex="status" key="status" />
        <Column
          title="Hành động"
          key="action"
          render={(text, record: any) => (
            <Space size="middle">
              <MyButton type="text" onClick={handleShowConfirmAcceptPayment}>
                Xác nhận thanh toán
              </MyButton>
              {contextHolderConfirmPayment}
              <MyButton type="text" onClick={handleShowConfirmRemovePayment}>
                Huỷ
              </MyButton>
              {contextHolderRemovePayment}
            </Space>
          )}
        />
      </MyTable>
    </div>
  );
};

export default OrderPage;
