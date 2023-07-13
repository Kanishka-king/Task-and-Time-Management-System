import React from 'react';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Task',
    path: '/home',
    icon: <FaIcons.FaTasks />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/pro',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/dash',
    icon: <FaIcons.FaDashcube />,
    cName: 'nav-text'
  },
  {
    title: 'Calender',
    path: '/cal',
    icon: <FaIcons.FaCalendarCheck />,
    cName: 'nav-text'
  },

  {
    title: 'Forum',
    path: '/forum',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/cont',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];