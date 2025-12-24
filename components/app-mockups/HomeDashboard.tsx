import React from 'react';
import { Calendar, Clock, Heart, Bell, User, Activity } from 'lucide-react';

export default function HomeDashboard() {
  return (
    <div className="relative w-[375px] h-[812px] bg-white rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900">
      {/* iPhone Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-11 bg-white z-50 flex items-center justify-between px-8">
        <span className="text-sm font-semibold">9:41</span>
        <div className="w-24 h-6 bg-gray-900 rounded-full" />
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-gray-900 rounded-full" />
            <div className="w-0.5 h-3 bg-gray-900 rounded-full" />
            <div className="w-0.5 h-3 bg-gray-900 rounded-full" />
            <div className="w-0.5 h-3 bg-gray-900 rounded-full" />
          </div>
          <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
            <rect x="0" y="0" width="22" height="12" rx="2" className="fill-gray-900" />
            <rect x="23" y="4" width="1" height="4" rx="0.5" className="fill-gray-900" />
          </svg>
        </div>
      </div>

      {/* App Content */}
      <div className="pt-14 pb-6 h-full overflow-y-auto">
        {/* Header */}
        <div className="px-6 py-6 bg-gradient-to-br from-teal-500 to-teal-700 text-white">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90">Good morning</p>
              <h1 className="text-2xl font-bold">Margaret Thompson</h1>
            </div>
            <div className="relative">
              <Bell className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-[10px] font-bold">2</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Calendar className="w-5 h-5 mb-1" />
              <p className="text-xs opacity-80">Next Visit</p>
              <p className="text-sm font-semibold">Today 2PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Heart className="w-5 h-5 mb-1" />
              <p className="text-xs opacity-80">Health Score</p>
              <p className="text-sm font-semibold">Excellent</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3">
              <Activity className="w-5 h-5 mb-1" />
              <p className="text-xs opacity-80">This Week</p>
              <p className="text-sm font-semibold">3 Visits</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-6 py-4">
          {/* Today's Appointments */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-gray-900">Today&apos;s Appointments</h2>
              <button className="text-sm text-teal-600 font-semibold">View All</button>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">Sarah Johnson, RN</h3>
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                      En Route
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>2:00 PM - 3:30 PM</span>
                  </div>
                  <p className="text-sm text-gray-500">Routine check-up, medication review</p>
                  <button className="mt-3 text-sm text-teal-600 font-semibold">Track Caregiver →</button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900">Michael Chen, PT</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                      5:00 PM
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>5:00 PM - 6:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-500">Physical therapy session</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl p-4 shadow-md">
                <Calendar className="w-6 h-6 mb-2" />
                <span className="text-sm font-semibold">Schedule Visit</span>
              </button>
              <button className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-4 shadow-md">
                <Heart className="w-6 h-6 mb-2" />
                <span className="text-sm font-semibold">Health Records</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 pb-8">
        <div className="flex justify-around">
          <div className="flex flex-col items-center text-teal-600">
            <div className="w-8 h-1 bg-teal-600 rounded-full mb-1" />
            <span className="text-xs font-semibold">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Calendar className="w-5 h-5 mb-1" />
            <span className="text-xs">Schedule</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Activity className="w-5 h-5 mb-1" />
            <span className="text-xs">Health</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <User className="w-5 h-5 mb-1" />
            <span className="text-xs">Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
