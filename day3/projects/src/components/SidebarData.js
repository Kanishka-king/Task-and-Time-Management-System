import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/project',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <BsCheckCircleFill />,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/cal',
    icon:  <FaCalendarAlt />,
    cName: 'nav-text'
  },
  {
    title: 'TimeLine',
    path: '/time',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Notification',
    path: '/not',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];