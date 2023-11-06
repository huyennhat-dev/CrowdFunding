import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8  bg-[#ffffff] min-h-screen flex flex-row md:px-2 sm:px-0">
      <div className="sm:flex hidden p-4 fixed ">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full mx-auto sm:pr-5 sm:ml-[120px] ">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default App