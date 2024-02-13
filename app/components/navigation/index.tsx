"use client"
import { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    </div>
  );
};

export default Home;
