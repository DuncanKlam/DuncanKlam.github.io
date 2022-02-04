import React from 'react';
import {GiPineapple} from 'react-icons/gi';

const icon = <GiPineapple size={30} />

export const pineapples = [
    {
      title: 'ToDoList Application',
      path: 'https://github.com/DuncanKlam/ToDoListApplication',
      icon: icon,
      cName: 'nav-text',
      description: 'This app brings up a GUI using Java Swing that can be used to create, edit, and delete ToDo items on a local database. They can then be uploaded to a web server, and synced from the server to the database.'
    },
    {
      title: 'Workout Generator',
      path: 'https://github.com/DuncanKlam/Workout-Generator',
      icon: icon,
      cName: 'nav-text',
      description: 'This app creates a GUI using Java Swing that allows you to generate a random workout after selecting some basic inputs about type and intensity of workout.'
    },
    {
      title: 'Calculator',
      path: 'https://github.com/DuncanKlam/CalculatorUIInClass',
      icon: icon,
      cName: 'nav-text',
      description: 'A very simple graphic calculator in Java Swing with basic calculator function + memory.'
    },
    {
      title: 'Quaternary Calculator',
      path: 'https://github.com/DuncanKlam/QuaternaryCalculator',
      icon: icon,
      cName: 'nav-text',
      description: 'A very simple quaternary calculator in Java Swing.'
    },
    {
      title: 'Decimal Binary Hexadecimal Converter',
      path: 'https://github.com/DuncanKlam/DecimalBinaryHexadecimalConverter',
      icon: icon,
      cName: 'nav-text',
      description: 'A simple java program to convert between Decimal, Binary, and Hexadecimal units.'
    },
    {
      title: 'Wikipedia Revision Viewer',
      path: 'https://github.com/DuncanKlam/WikipediaRevisionViewerRedux',
      icon: icon,
      cName: 'nav-text',
      description: 'This program launches a GUI using Java Swing to see the most recent revisions on any given wiki page using the Wikipedia Revisions API.'
    },
  ];