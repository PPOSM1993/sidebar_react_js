
import { Menu } from 'antd';
import { AppstoreAddOutlined, AreaChartOutlined, BarChartOutlined, HomeOutlined, PayCircleOutlined, SettingOutlined } from '@ant-design/icons';
import React from 'react';

const items = [
  {
    key: 'home',
    label: 'Home',
    icon: <HomeOutlined />,
  },

  {
    key: 'activity',
    label: 'Activity',
    icon: <AppstoreAddOutlined />,
  },

  {
    key: 'tasks',
    label: 'Tasks',
    icon: <BarChartOutlined />,

    children: [
      {
        key: 'tasks-1',
        label: 'Tasks 1',
      },
      {
        key: 'tasks-2',
        label: 'Tasks 2',
      },

      {
        key: 'subtasks',
        label: 'Subtasks',

        children: [
          {
            key: 'subtasks-1',
            label: 'Subtasks 1',
          },
          {
            key: 'subtasks-2',
            label: 'Subtasks 2',
          },
        ]
      },
    ],
  },

  {
    key: 'progress',
    label: 'Progress',
    icon: <AreaChartOutlined />,
  },

  {
    key: 'payment',
    label: 'Payment',
    icon: <PayCircleOutlined />
  },

  {
    key: 'setting',
    label: 'Setting',
    icon: <SettingOutlined />
  }

];
const MenuList = ({darkTheme}) => {
  const onClick = (e) => {
    console.log('click ', e);
    //onClick={onClick}
  };
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'}
    className='menu-bar'
      defaultOpenKeys={['home']}
      mode="inline"
      items={items}
    />
  );
};
export default MenuList;