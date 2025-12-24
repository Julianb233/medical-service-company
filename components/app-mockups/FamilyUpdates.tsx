import React from 'react';
import { Heart, MessageCircle, Image as ImageIcon, FileText, Activity, ThumbsUp, Clock } from 'lucide-react';

export default function FamilyUpdates() {
  return (
    <div className="relative w-[375px] h-[812px] bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900">
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
        <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white px-6 py-6 sticky top-0 z-10">
          <h1 className="text-2xl font-bold mb-1">Family Updates</h1>
          <p className="text-white/90 text-sm">Stay connected with Mom&apos;s care</p>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Today's Summary Card */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg p-5 text-white">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-6 h-6" />
              <h3 className="font-bold text-lg">Today&apos;s Summary</h3>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-2xl font-bold">98%</p>
                <p className="text-xs opacity-90">Health Score</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-2xl font-bold">2</p>
                <p className="text-xs opacity-90">Activities</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                <p className="text-2xl font-bold">5</p>
                <p className="text-xs opacity-90">Updates</p>
              </div>
            </div>
          </div>

          {/* Update Feed */}
          <div className="space-y-3">
            {/* Visit Complete Update */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-4 pb-3">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    SJ
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">Sarah Johnson, RN</h4>
                      <span className="text-xs text-gray-500">2:45 PM</span>
                    </div>
                    <p className="text-xs text-gray-500">Completed afternoon visit</p>
                  </div>
                </div>

                <p className="text-sm text-gray-700 mb-3">
                  Great visit with Margaret today! All vitals looking good. She enjoyed our walk around the garden and was in wonderful spirits.
                </p>

                {/* Photo Grid */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-teal-400" />
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-orange-400" />
                  </div>
                </div>

                {/* Vitals Summary */}
                <div className="bg-teal-50 rounded-xl p-3 mb-3">
                  <p className="text-xs font-semibold text-teal-900 mb-2">Today&apos;s Vitals</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-500">Blood Pressure:</span>
                      <span className="ml-1 font-semibold text-gray-900">118/76</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Heart Rate:</span>
                      <span className="ml-1 font-semibold text-gray-900">72 bpm</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Temperature:</span>
                      <span className="ml-1 font-semibold text-gray-900">98.4°F</span>
                    </div>
                    <div>
                      <span className="text-gray-500">O2 Level:</span>
                      <span className="ml-1 font-semibold text-gray-900">98%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interaction Bar */}
              <div className="border-t border-gray-100 px-4 py-2 flex items-center justify-between">
                <button className="flex items-center gap-2 text-teal-600 text-sm font-semibold">
                  <ThumbsUp className="w-4 h-4" />
                  <span>12 Likes</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 text-sm font-semibold">
                  <MessageCircle className="w-4 h-4" />
                  <span>3 Comments</span>
                </button>
              </div>
            </div>

            {/* Medication Update */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">Medications Taken</h4>
                    <span className="text-xs text-gray-500">2:05 PM</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    All afternoon medications taken on schedule with Sarah&apos;s assistance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      Lisinopril 10mg
                    </span>
                    <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      Metformin 500mg
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Update */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5 text-orange-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">Physical Activity</h4>
                    <span className="text-xs text-gray-500">1:30 PM</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Completed 20-minute walk in the garden with assistance. Margaret showed great energy and balance today!
                  </p>
                  <div className="bg-orange-50 rounded-xl p-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Steps:</span>
                      <span className="font-semibold text-gray-900">847 steps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Care Notes */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">Care Notes</h4>
                    <span className="text-xs text-gray-500">12:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Morning visit complete. Margaret had a good breakfast and participated in light exercises. Mood is excellent today.
                  </p>
                </div>
              </div>
            </div>

            {/* Family Message */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-md border border-teal-200 p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-200 flex items-center justify-center flex-shrink-0 text-teal-700 font-bold">
                  JT
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-gray-900">John Thompson (Son)</h4>
                    <span className="text-xs text-gray-500">10:30 AM</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    Thanks for the wonderful care, Sarah! The photos brightened my day. Mom looks so happy!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add Update Button */}
          <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl py-4 font-bold shadow-lg flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Add Family Message
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 pb-8">
        <div className="flex justify-around">
          <div className="flex flex-col items-center text-gray-400">
            <Activity className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center text-teal-600">
            <div className="w-8 h-1 bg-teal-600 rounded-full mb-1" />
            <span className="text-xs font-semibold">Updates</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Clock className="w-5 h-5 mb-1" />
            <span className="text-xs">History</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Heart className="w-5 h-5 mb-1" />
            <span className="text-xs">Health</span>
          </div>
        </div>
      </div>
    </div>
  );
}
