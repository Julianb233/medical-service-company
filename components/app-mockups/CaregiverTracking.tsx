import React from 'react';
import { Navigation, Phone, MessageSquare, Clock, MapPin } from 'lucide-react';

export default function CaregiverTracking() {
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

      {/* Map Background */}
      <div className="pt-11 h-full relative">
        {/* Simulated Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-warm-50 to-orange-50">
          {/* Map Grid Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,116,134,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(0,116,134,0.18) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />

          {/* Stylized Roads */}
          <div className="absolute top-1/4 left-0 right-0 h-2 bg-gray-300 transform -rotate-12" />
          <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-400" />
          <div className="absolute top-2/3 left-0 right-0 h-2 bg-gray-300 transform rotate-6" />
          <div className="absolute top-0 bottom-0 left-1/3 w-2 bg-gray-300" />

          {/* Route Line */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#007486" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#eb981c" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <path
              d="M 80 200 Q 150 300, 200 450 T 280 600"
              stroke="url(#routeGradient)"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,8"
              strokeLinecap="round"
            />
          </svg>

          {/* Destination Pin (Your Home) */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <MapPin className="w-10 h-10 text-teal-600 fill-teal-100 drop-shadow-lg" />
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-white px-2 py-1 rounded-lg shadow-lg text-xs font-semibold">
                Your Home
              </div>
            </div>
          </div>

          {/* Caregiver Location Pin */}
          <div className="absolute top-1/3 left-1/4">
            <div className="relative animate-pulse">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              {/* Pulsing Ring */}
              <div className="absolute inset-0 w-16 h-16 bg-orange-500 rounded-full animate-ping opacity-30" />
            </div>
          </div>
        </div>

        {/* Back Button */}
        <button className="absolute top-16 left-4 z-20 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Caregiver Info Card */}
        <div className="absolute top-20 left-4 right-4 z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                SJ
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">Sarah Johnson, RN</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>En Route</span>
                  </div>
                  <span>•</span>
                  <span>1.2 miles away</span>
                </div>
              </div>
            </div>

            {/* ETA Banner */}
            <div className="mt-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Estimated Arrival</p>
                <p className="text-2xl font-bold">8 minutes</p>
              </div>
              <Clock className="w-10 h-10 opacity-80" />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-teal-50 text-teal-700 rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-teal-100 transition-colors">
                <Phone className="w-5 h-5" />
                Call
              </button>
              <button className="flex-1 bg-teal-50 text-teal-700 rounded-xl py-3 font-semibold flex items-center justify-center gap-2 hover:bg-teal-100 transition-colors">
                <MessageSquare className="w-5 h-5" />
                Message
              </button>
            </div>
          </div>
        </div>

        {/* Journey Details */}
        <div className="absolute bottom-6 left-4 right-4 z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-5 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4">Journey Details</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-orange-500 rounded-full" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Started Trip</p>
                  <p className="text-sm text-gray-500">1:52 PM from clinic</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Navigation className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">En Route</p>
                  <p className="text-sm text-gray-500">Via Mission Blvd - Fastest route</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-gray-400" />
                </div>
                <div>
                  <p className="font-semibold text-gray-600">Arriving Soon</p>
                  <p className="text-sm text-gray-500">123 Oak Street, San Diego</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
