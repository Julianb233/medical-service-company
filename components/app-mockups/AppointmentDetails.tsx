import React from 'react';
import { Calendar, Clock, MapPin, FileText, Pill, CheckCircle, User, Phone } from 'lucide-react';

export default function AppointmentDetails() {
  return (
    <div className="relative w-[375px] h-[812px] bg-gray-50 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-900">
      {/* iPhone Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-11 bg-gradient-to-br from-teal-500 to-teal-700 z-50 flex items-center justify-between px-8 text-white">
        <span className="text-sm font-semibold">9:41</span>
        <div className="w-24 h-6 bg-gray-900 rounded-full" />
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-3 bg-white rounded-full" />
            <div className="w-0.5 h-3 bg-white rounded-full" />
            <div className="w-0.5 h-3 bg-white rounded-full" />
            <div className="w-0.5 h-3 bg-white rounded-full" />
          </div>
          <svg className="w-6 h-3" viewBox="0 0 24 12" fill="none">
            <rect x="0" y="0" width="22" height="12" rx="2" className="fill-white" />
            <rect x="23" y="4" width="1" height="4" rx="0.5" className="fill-white" />
          </svg>
        </div>
      </div>

      {/* App Content */}
      <div className="pt-11 pb-6 h-full overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white px-6 pb-6 pt-4">
          <button className="mb-4 flex items-center gap-2 text-white/90">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-semibold">Back</span>
          </button>

          <h1 className="text-2xl font-bold mb-2">Appointment Details</h1>
          <p className="text-white/90 text-sm">Wednesday, December 24, 2025</p>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Caregiver Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                SJ
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg">Sarah Johnson</h3>
                <p className="text-sm text-gray-600">Registered Nurse (RN)</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">5.0 (248 reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-teal-600 text-white rounded-xl py-2.5 font-semibold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Sarah
              </button>
              <button className="px-4 bg-teal-50 text-teal-700 rounded-xl font-semibold">
                <User className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Time & Location */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-4">Visit Information</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">2:00 PM - 3:30 PM</p>
                  <p className="text-sm text-gray-500">90 minute appointment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Your Home</p>
                  <p className="text-sm text-gray-500">123 Oak Street, San Diego, CA 92101</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Recurring Visit</p>
                  <p className="text-sm text-gray-500">Every Wednesday at 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Care Plan */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-4">Today&apos;s Care Plan</h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">Vital signs monitoring</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">Blood pressure check</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">Medication review & assistance</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-700">Physical therapy exercises</span>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                <CheckCircle className="w-5 h-5 text-gray-300 flex-shrink-0" />
                <span className="text-sm text-gray-400">Wound care assessment</span>
              </div>
            </div>
          </div>

          {/* Medication Reminders */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md border border-orange-200 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Pill className="w-5 h-5 text-orange-600" />
              <h3 className="font-bold text-gray-900">Medication Due</h3>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Lisinopril 10mg</p>
                    <p className="text-sm text-gray-500">Take with water after meal</p>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                    2:00 PM
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">Metformin 500mg</p>
                    <p className="text-sm text-gray-500">Take with food</p>
                  </div>
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                    2:00 PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-teal-600" />
              <h3 className="font-bold text-gray-900">Special Notes</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Patient has been experiencing occasional dizziness. Monitor blood pressure closely and document any changes. Family requested update via app after visit.
            </p>
          </div>

          {/* Action Button */}
          <button className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl py-4 font-bold shadow-lg">
            Track Caregiver
          </button>
        </div>
      </div>
    </div>
  );
}
