import React, { useState } from 'react';
import "./sidebar.css"
import { AppstoreOutlined, MailOutlined, SettingOutlined,UserOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';
const items = [
  {
    key: 'none',
    label: 'Dashboard',
    icon: "",
  },
  {
    key: 'sub1',
    label: 'User',
    icon: <UserOutlined />,
    children: [
      {
        key: '1',
        label: <Link to="/admin">-Admin</Link>,
      },
      {
        key: '2',
        label: <Link to="/teacher">-Teacher</Link>,
      },
      {
        key: '3',
        label: <Link to="/parent">-Parent</Link>,
      },
      {
        key: '4',
        label: <Link to="/student">-Student</Link>,
      },
    ],
  },

  {
    key: 'sub2',
    label: 'class',
    icon: <UserOutlined />,
    children: [
      {
        key: '5',
        label: <Link to="/class">- create class</Link>,
      },
      {
        key: '6',
        label: '- Update class',
      },
      {
        key: '7',
        label: '- Delete class',
      },
    ],
  },

  {
    key: 'sub3',
    label: 'Batch',
    icon: <UserOutlined />,
    children: [
      {
        key: '8',
        label: <Link to="/section">-section</Link>,
      },
    ],
  },

  {
    key: 'sub4',
    label: 'Teacher',
    icon: <UserOutlined />,
    children: [
      {
        key: '9',
        label: '- add teacher',
      },
      {
        key: '10',
        label: '- class allotment',
      },
      {
        key: '11',
        label: <Link to="/attendence">-Attendence</Link>,
      },
      {
        key: '12',
        label: '- exam',
      },
    ],
  },

  {
    key: 'sub5',
    label: 'Student',
    icon: <UserOutlined />,
    children: [
      {
        key: '13',
        label: '- add student',
      },
      {
        key: '14',
        label: '- update student',
      },
      {
        key: '15',
        label: '- view student',
      },
    ],
  },

  {
    key: 'sub6',
    label: 'Attendence',
    icon: <UserOutlined />,
    children: [
      {
        key: '16',
        label: "-create",
      },
      {
        key: '17',
        label: '- Update ',
      },
      {
        key: '18',
        label: '- view',
      },
    ],
  },

  {
    key: 'sub7',
    label: 'Exam',
    icon: <UserOutlined />,
    children: [
      {
        key: '19',
        label: '- add exam',
      },
      {
        key: '20',
        label: '- manage results',
      },
      {
        key: '21',
        label: '- grade students',
      },
    ],
  },

  {
    key: 'sub8',
    label: 'Fee',
    icon: <UserOutlined />,
    children: [
      {
        key: '22',
        label: '- add payment',
      },
      {
        key: '23',
        label: '- manage payment',
      },
      {
        key: '24',
        label: '- payment due',
      },
    ],
  },

  {
    key: 'sub9',
    label: 'Library',
    icon: <UserOutlined />,
    children: [
      {
        key: '25',
        label: '- add books',
      },
      {
        key: '26',
        label: '- manage books',
      },
      {
        key: '27',
        label: '- Return books/issue',
      },
    ],
  },

  {
    key: 'sub10',
    label: 'Parent Portal',
    icon: <UserOutlined />,
    children: [
      {
        key: '28',
        label: '- view performance',
      },
      {
        key: '29',
        label: '- Contact Teachers',
      },
    ],
  },

  {
    key: 'sub11',
    label: 'Notification',
    icon: <UserOutlined />,
    children: [
      {
        key: '30',
        label: '- send notifications',
      },
    ],
  },

  {
    key: 'sub12',
    label: 'Report',
    icon: <UserOutlined />,
    children: [
      {
        key: '31',
        label: '- View report',
      },
     
    ],
  },

  {
    key: 'sub13',
    label: 'Time Table',
    icon: <UserOutlined />,
    children: [
      {
        key: '32',
        label: '- Create time table',
      },
      {
        key: '33',
        label: '- Update time table',
      },
      {
        key: '34',
        label: '- view',
      },
    ],
  },
];
const sidebar = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
    <div className="sidebar">
      <div className='header'>
      <h1>School Management system</h1>
      </div>
    <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        // defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </div>
     

    </>
  );
};
export default sidebar;