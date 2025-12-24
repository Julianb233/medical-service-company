'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HomeDashboard from './HomeDashboard';
import CaregiverTracking from './CaregiverTracking';
import AppointmentDetails from './AppointmentDetails';
import FamilyUpdates from './FamilyUpdates';
import CareHistory from './CareHistory';

const screens = [
  { name: 'Home Dashboard', component: HomeDashboard, description: 'Your care hub at a glance' },
  { name: 'Live Tracking', component: CaregiverTracking, description: 'See your caregiver en route in real-time' },
  { name: 'Appointment Details', component: AppointmentDetails, description: 'Complete care plan and medication info' },
  { name: 'Family Updates', component: FamilyUpdates, description: 'Stay connected with daily care activities' },
  { name: 'Care History', component: CareHistory, description: 'Track health metrics and visit timeline' },
];

export default function AppMockupsShowcase() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const CurrentComponent = screens[currentScreen].component;

  return (
    <div className="w-full bg-gradient-to-br from-white via-teal-50 to-teal-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience the Future of Home Care
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            See how our mobile app keeps families connected and caregivers coordinated
          </p>
        </div>

        {/* Swipe Indicator Badge - Mobile Only */}
        <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
          <div className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 animate-pulse">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Swipe to explore
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>

        {/* Mockup Display */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          {/* Navigation - Left */}
          <button
            onClick={prevScreen}
            className="hidden lg:flex w-14 h-14 bg-teal-600 hover:bg-teal-700 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous screen"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="origin-top transform scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100">
              <CurrentComponent />
            </div>
          </div>

          {/* Navigation - Right */}
          <button
            onClick={nextScreen}
            className="hidden lg:flex w-14 h-14 bg-teal-600 hover:bg-teal-700 rounded-full items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next screen"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Screen Info */}
        <div className="text-center mt-8">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {screens[currentScreen].name}
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            {screens[currentScreen].description}
          </p>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-4 lg:hidden mb-6">
            <button
              onClick={prevScreen}
              className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center text-white shadow-lg"
              aria-label="Previous screen"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextScreen}
              className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full flex items-center justify-center text-white shadow-lg"
              aria-label="Next screen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2">
            {screens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentScreen(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentScreen
                    ? 'w-8 bg-teal-600'
                    : 'w-2 bg-gray-400 hover:bg-gray-500'
                }`}
                aria-label={`Go to ${screens[index].name}`}
              />
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-teal-100">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-2">Real-Time Updates</h4>
            <p className="text-gray-600 text-sm">
              Live caregiver tracking and instant notifications for every visit
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-orange-100">
            <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-2">Family Connection</h4>
            <p className="text-gray-600 text-sm">
              Share photos, notes, and updates with the entire family
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-teal-100">
            <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-gray-900 font-bold text-lg mb-2">Health Insights</h4>
            <p className="text-gray-600 text-sm">
              Track vitals, medications, and progress over time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
