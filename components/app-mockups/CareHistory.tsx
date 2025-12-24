import React from 'react';
import { Calendar, Activity, FileText, TrendingUp, Heart, ChevronRight, Filter } from 'lucide-react';

export default function CareHistory() {
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
          <h1 className="text-2xl font-bold mb-1">Care History</h1>
          <p className="text-white/90 text-sm">Complete timeline of care activities</p>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Health Metrics Summary */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">Health Metrics - Last 30 Days</h3>
              <button className="text-teal-600 text-sm font-semibold flex items-center gap-1">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-teal-50 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-teal-600" />
                  <span className="text-xs text-gray-600">Blood Pressure</span>
                </div>
                <p className="text-lg font-bold text-gray-900">118/76</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Improved 5%
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-4 h-4 text-orange-600" />
                  <span className="text-xs text-gray-600">Heart Rate</span>
                </div>
                <p className="text-lg font-bold text-gray-900">72 bpm</p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Stable
                </p>
              </div>
            </div>

            {/* Mini Chart Visualization */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-4">
              <p className="text-xs text-gray-600 mb-2">Blood Pressure Trend</p>
              <div className="flex items-end justify-between h-20 gap-1">
                {[65, 72, 68, 75, 70, 78, 73, 80, 75, 82, 78, 76].map((height, i) => (
                  <div key={i} className="flex-1 bg-teal-500 rounded-t" style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 px-1">Activity Timeline</h3>

            {/* This Week */}
            <div className="space-y-3">
              <div className="px-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">This Week</p>
              </div>

              {/* Today */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">Today - December 24</span>
                  </div>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">2 visits</span>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-1 bg-teal-500 rounded-full flex-shrink-0" />
                    <div className="flex-1 pb-3 border-b border-gray-100">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-900 text-sm">Afternoon Visit - Sarah Johnson</p>
                        <span className="text-xs text-gray-500">2:00 PM</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">Routine check-up, vitals monitoring, medication review</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                          Completed
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-1 bg-gray-300 rounded-full flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-gray-900 text-sm">Evening Visit - Michael Chen</p>
                        <span className="text-xs text-gray-500">5:00 PM</span>
                      </div>
                      <p className="text-xs text-gray-600 mb-2">Physical therapy session</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
                          Scheduled
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yesterday */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">Yesterday - December 23</span>
                  </div>
                  <span className="text-xs text-gray-500">3 visits</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                        <Activity className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Morning Care - Lisa Martinez</p>
                        <p className="text-xs text-gray-500">9:00 AM</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Afternoon Care - Sarah Johnson</p>
                        <p className="text-xs text-gray-500">2:00 PM</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>

                  <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">PT Session - Michael Chen</p>
                        <p className="text-xs text-gray-500">5:00 PM</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Last Week */}
            <div className="space-y-3">
              <div className="px-1">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Week</p>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">December 17-23</span>
                  </div>
                  <span className="text-xs text-gray-500">18 visits</span>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="bg-teal-50 rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-teal-600">18</p>
                    <p className="text-xs text-gray-600">Total Visits</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-green-600">100%</p>
                    <p className="text-xs text-gray-600">On Time</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-2 text-center">
                    <p className="text-lg font-bold text-orange-600">4</p>
                    <p className="text-xs text-gray-600">Caregivers</p>
                  </div>
                </div>

                <button className="w-full text-teal-600 text-sm font-semibold flex items-center justify-center gap-1">
                  View Details
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Doctor Notes */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md border border-blue-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <h3 className="font-bold text-gray-900">Recent Doctor Notes</h3>
              </div>

              <div className="bg-white rounded-xl p-3 mb-2">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-gray-900 text-sm">Dr. Patricia Williams</p>
                  <span className="text-xs text-gray-500">Dec 20</span>
                </div>
                <p className="text-xs text-gray-600">
                  Patient showing excellent progress. Blood pressure well-controlled. Continue current medication regimen.
                </p>
              </div>

              <button className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                View All Medical Records
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 pb-8">
        <div className="flex justify-around">
          <div className="flex flex-col items-center text-gray-400">
            <Activity className="w-5 h-5 mb-1" />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Heart className="w-5 h-5 mb-1" />
            <span className="text-xs">Updates</span>
          </div>
          <div className="flex flex-col items-center text-teal-600">
            <div className="w-8 h-1 bg-teal-600 rounded-full mb-1" />
            <span className="text-xs font-semibold">History</span>
          </div>
          <div className="flex flex-col items-center text-gray-400">
            <Calendar className="w-5 h-5 mb-1" />
            <span className="text-xs">Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
}
