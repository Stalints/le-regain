'use client';

import { useState } from 'react';
import AdminDashboard from '@/components/ui/AdminDashboard';
import AdminLogin from '@/components/ui/AdminLogin';
import AppointmentModal from '@/components/ui/AppointmentModal';
import Footer from '@/components/ui/Footer';
import Navbar from '@/components/ui/Navbar';
import BlogView from '@/components/views/BlogView';
import GalleryView from '@/components/views/GalleryView';
import HomeView from '@/components/views/HomeView';
import LocationsView from '@/components/views/LocationsView';
import PmrView from '@/components/views/PmrView';
import SkinView from '@/components/views/SkinView';
import TeamView from '@/components/views/TeamView';

export default function Page() {
  const [activeView, setActiveView] = useState('home');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  const openAppointmentModal = () => {
    setIsAppointmentModalOpen(true);
  };

  const closeAppointmentModal = () => {
    setIsAppointmentModalOpen(false);
  };

  const handleAdminLogout = () => {
    setAdminUser(null);
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'pmr':
        return <PmrView onBookAppointment={openAppointmentModal} />;
      case 'skin':
        return <SkinView onBookAppointment={openAppointmentModal} />;
      case 'team':
        return <TeamView />;
      case 'locations':
        return <LocationsView />;
      case 'gallery':
        return <GalleryView />;
      case 'blog':
        return <BlogView />;
      case 'admin':
        return adminUser ? (
          <AdminDashboard adminUser={adminUser} onLogout={handleAdminLogout} />
        ) : (
          <AdminLogin onLogin={setAdminUser} />
        );
      case 'home':
      default:
        return (
          <HomeView
            onBookAppointment={openAppointmentModal}
            setActiveView={setActiveView}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar
        activeView={activeView}
        setActiveView={setActiveView}
        onBookAppointment={openAppointmentModal}
      />

      {renderActiveView()}

      <Footer
        activeView={activeView}
        setActiveView={setActiveView}
        onBookAppointment={openAppointmentModal}
      />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={closeAppointmentModal}
      />
    </div>
  );
}
