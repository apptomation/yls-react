import React from 'react';
import Header from '../../components/ui/Header';
import Profile from './components/Profile';
import Footer from '../homepage/components/Footer';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16 lg:pt-18">
        <Profile />      
      </main>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
