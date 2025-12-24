'use client';

import { useState, useEffect } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

export default function ComingSoonContent() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const features: Feature[] = [
    {
      icon: '📍',
      title: 'Real-Time Tracking',
      description: 'See when your caregiver is on the way with live GPS tracking and ETA updates.',
      delay: 0.1,
    },
    {
      icon: '📅',
      title: 'Appointment Updates',
      description: 'Get instant notifications about appointment status, delays, and changes.',
      delay: 0.2,
    },
    {
      icon: '👨‍👩‍👧',
      title: 'Family Connection',
      description: 'Keep family members in the loop with real-time updates and care summaries.',
      delay: 0.3,
    },
    {
      icon: '🏥',
      title: 'Healthcare Integration',
      description: 'Seamlessly share updates with doctors and healthcare providers.',
      delay: 0.4,
    },
    {
      icon: '💊',
      title: 'Medication Reminders',
      description: 'Never miss a dose with smart medication tracking and alerts.',
      delay: 0.5,
    },
    {
      icon: '📝',
      title: 'Care Notes',
      description: 'Access detailed visit summaries and care notes after each appointment.',
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-warm-50 to-orange-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative container-custom section-padding pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="inline-block mb-4">
                <span className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                  🚀 Coming Soon
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-teal-800 bg-clip-text text-transparent">
                HappyHomeCare Connect
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
                Track your caregiver in real-time. Stay connected with family. Never miss an update.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                The future of home healthcare coordination is almost here.
              </p>
            </div>
          </div>

          {/* Hero Phone Mockup */}
          <div
            className={`relative max-w-sm mx-auto mb-16 transform transition-all duration-1200 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative mx-auto w-[300px] h-[600px] bg-gray-900 rounded-[50px] shadow-2xl p-3 border-8 border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10" />

                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-teal-500 to-teal-700 rounded-[40px] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-8 pt-8 pb-4 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-3 border border-white rounded-sm" />
                      <div className="w-1 h-3 bg-white rounded-sm" />
                    </div>
                  </div>

                  {/* App content preview */}
                  <div className="px-6 pt-4">
                    <div className="text-white text-center mb-6">
                      <h2 className="text-2xl font-bold mb-2">Welcome</h2>
                      <p className="text-teal-100 text-sm">Your care, connected</p>
                    </div>

                    {/* Mock appointment card */}
                    <div className="bg-white rounded-2xl p-4 shadow-xl mb-4 animate-pulse-soft">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                          👨‍⚕️
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">Today&apos;s Appointment</div>
                          <div className="text-xs text-gray-500">2:00 PM - 3:00 PM</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-teal-600 font-medium">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                        Caregiver on the way
                      </div>
                    </div>

                    {/* Mock buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1">📍</div>
                        <div className="text-xs text-white">Track</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
                        <div className="text-2xl mb-1">👨‍👩‍👧</div>
                        <div className="text-xs text-white">Family</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -right-4 top-20 bg-white rounded-2xl shadow-2xl p-3 max-w-[180px] animate-fade-in-right">
                <div className="flex items-start gap-2">
                  <div className="text-2xl">🔔</div>
                  <div>
                    <div className="text-xs font-semibold text-gray-900">Sarah is 5 min away</div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative section-padding bg-white/50 backdrop-blur-sm">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to keep you and your loved ones connected and informed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${feature.delay}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Mockups Section */}
      <section className="relative section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A glimpse into the HappyHomeCare Connect experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Mockup 1: Home Screen */}
            <div className={`transform transition-all duration-1000 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-4 shadow-2xl border-4 border-gray-700">
                <div className="bg-white rounded-[30px] p-4 h-[500px] overflow-hidden">
                  <div className="text-center mb-4">
                    <div className="text-xs text-gray-400 mb-2">Today</div>
                    <h3 className="text-lg font-bold text-gray-900">Your Schedule</h3>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-3 border-l-4 border-teal-500">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-sm">
                          S
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">Sarah Johnson</div>
                          <div className="text-xs text-gray-600">Registered Nurse</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-700 mb-1">2:00 PM - 3:00 PM</div>
                      <div className="flex items-center gap-1 text-xs text-teal-700 font-medium">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-pulse" />
                        En route • ETA 5 min
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 border-l-4 border-gray-300">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm">
                          M
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">Mike Davis</div>
                          <div className="text-xs text-gray-600">Physical Therapist</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-700 mb-1">Tomorrow • 10:00 AM</div>
                      <div className="text-xs text-gray-500">Scheduled</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-gray-700">Quick Actions</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="flex flex-col items-center p-2 bg-teal-50 rounded-lg">
                        <span className="text-xl mb-1">💊</span>
                        <span className="text-xs text-gray-700">Meds</span>
                      </button>
                      <button className="flex flex-col items-center p-2 bg-orange-50 rounded-lg">
                        <span className="text-xl mb-1">👨‍👩‍👧</span>
                        <span className="text-xs text-gray-700">Family</span>
                      </button>
                      <button className="flex flex-col items-center p-2 bg-gray-50 rounded-lg">
                        <span className="text-xl mb-1">📝</span>
                        <span className="text-xs text-gray-700">Notes</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3 font-medium">Home Screen</p>
            </div>

            {/* Mockup 2: Map View */}
            <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-4 shadow-2xl border-4 border-gray-700">
                <div className="bg-teal-100 rounded-[30px] p-4 h-[500px] overflow-hidden relative">
                  {/* Map background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-4 grid-rows-8 h-full">
                      {[...Array(32)].map((_, i) => (
                        <div key={i} className="border border-teal-300" />
                      ))}
                    </div>
                  </div>

                  {/* Map content */}
                  <div className="relative z-10">
                    <div className="bg-white rounded-xl p-3 mb-4 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white text-lg">
                          🚗
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-gray-900">Sarah is on the way</div>
                          <div className="text-xs text-gray-600">Arriving in 5 minutes</div>
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-teal-500 rounded-full" />
                      </div>
                    </div>

                    {/* Map markers */}
                    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2">
                      <div className="relative">
                        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg animate-bounce">
                          📍
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500 rotate-45" />
                      </div>
                    </div>

                    <div className="absolute bottom-32 right-8">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl shadow-lg pulse">
                        🏠
                      </div>
                    </div>

                    {/* Route line */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <path
                        d="M 200 250 Q 180 300, 230 350"
                        stroke="var(--color-teal-500)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="10,5"
                        className="animate-pulse"
                      />
                    </svg>
                  </div>

                  {/* Bottom card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-3 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500">Distance</div>
                        <div className="text-sm font-bold text-gray-900">1.2 miles</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">ETA</div>
                        <div className="text-sm font-bold text-teal-600">5 min</div>
                      </div>
                      <button className="px-4 py-2 bg-teal-500 text-white rounded-lg text-xs font-semibold">
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3 font-medium">Live Tracking</p>
            </div>

            {/* Mockup 3: Family Sharing */}
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-4 shadow-2xl border-4 border-gray-700">
                <div className="bg-white rounded-[30px] p-4 h-[500px] overflow-hidden">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Family Circle</h3>
                    <p className="text-xs text-gray-500">Everyone stays informed</p>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-orange-50 rounded-xl p-3 border border-orange-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shrink-0">
                          🔔
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-900 mb-1">
                            New Update
                          </div>
                          <div className="text-xs text-gray-700 mb-2">
                            Sarah started today&apos;s visit with Mom
                          </div>
                          <div className="text-xs text-gray-500">2 minutes ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-teal-50 rounded-xl p-3 border border-teal-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white shrink-0">
                          📝
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-900 mb-1">
                            Visit Summary
                          </div>
                          <div className="text-xs text-gray-700 mb-2">
                            Vitals checked, medications administered
                          </div>
                          <div className="text-xs text-gray-500">1 hour ago</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white shrink-0">
                          💊
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-semibold text-gray-900 mb-1">
                            Medication Reminder
                          </div>
                          <div className="text-xs text-gray-700 mb-2">
                            Evening medication due at 6:00 PM
                          </div>
                          <div className="text-xs text-gray-500">3 hours ago</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="text-xs font-semibold text-gray-700 mb-3">Family Members</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs">
                          JD
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-900">John (Son)</div>
                          <div className="text-xs text-gray-500">All notifications</div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">
                          EM
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-gray-900">Emma (Daughter)</div>
                          <div className="text-xs text-gray-500">Summary only</div>
                        </div>
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3 font-medium">Family Updates</p>
            </div>

            {/* Mockup 4: History */}
            <div className={`transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-4 shadow-2xl border-4 border-gray-700">
                <div className="bg-white rounded-[30px] p-4 h-[500px] overflow-hidden">
                  <div className="text-center mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Visit History</h3>
                    <p className="text-xs text-gray-500">December 2024</p>
                  </div>

                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-semibold text-gray-900">Monday, Dec 23</div>
                        <div className="text-xs text-green-600 font-medium">✓ Completed</div>
                      </div>
                      <div className="text-xs text-gray-700 mb-1">Sarah Johnson, RN</div>
                      <div className="text-xs text-gray-500">2:00 PM - 3:00 PM</div>
                      <button className="mt-2 text-xs text-teal-600 font-medium">View Notes →</button>
                    </div>

                    <div className="border-l-4 border-green-500 pl-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-semibold text-gray-900">Friday, Dec 20</div>
                        <div className="text-xs text-green-600 font-medium">✓ Completed</div>
                      </div>
                      <div className="text-xs text-gray-700 mb-1">Mike Davis, PT</div>
                      <div className="text-xs text-gray-500">10:00 AM - 11:00 AM</div>
                      <button className="mt-2 text-xs text-teal-600 font-medium">View Notes →</button>
                    </div>

                    <div className="border-l-4 border-green-500 pl-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-semibold text-gray-900">Wednesday, Dec 18</div>
                        <div className="text-xs text-green-600 font-medium">✓ Completed</div>
                      </div>
                      <div className="text-xs text-gray-700 mb-1">Sarah Johnson, RN</div>
                      <div className="text-xs text-gray-500">2:00 PM - 3:00 PM</div>
                      <button className="mt-2 text-xs text-teal-600 font-medium">View Notes →</button>
                    </div>

                    <div className="border-l-4 border-gray-300 pl-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-xs font-semibold text-gray-900">Monday, Dec 16</div>
                        <div className="text-xs text-red-600 font-medium">✗ Canceled</div>
                      </div>
                      <div className="text-xs text-gray-700 mb-1">Mike Davis, PT</div>
                      <div className="text-xs text-gray-500">Weather cancellation</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <div className="text-xl font-bold text-teal-600">24</div>
                        <div className="text-xs text-gray-500">Total Visits</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-green-600">22</div>
                        <div className="text-xs text-gray-500">Completed</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-orange-600">4.9</div>
                        <div className="text-xs text-gray-500">Avg Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3 font-medium">Visit History</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="relative section-padding bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Be the First to Know
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Get notified when HappyHomeCare Connect launches and receive exclusive early access.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300 text-lg"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto animate-scale-in">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">You&apos;re on the list!</h3>
                <p className="text-teal-100">
                  We&apos;ll send you an email as soon as HappyHomeCare Connect is ready.
                </p>
              </div>
            )}

            <p className="text-sm text-teal-200 mt-6">
              No spam, ever. Just important updates about our launch.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">HappyHomeCare Connect</h3>
            <p className="text-gray-400 mb-6">
              Powered by HappyHomeCare - Excellence in Home Healthcare
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <a href="mailto:info@happyhomecare.com" className="hover:text-teal-400 transition-colors">
                Contact Us
              </a>
              <span>•</span>
              <a href="/privacy" className="hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              © 2024 HappyHomeCare. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Additional animation styles */}
      <style jsx>{`
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          animation-delay: 1.5s;
          opacity: 0;
        }

        .animate-pulse-soft {
          animation: pulseSoft 2s ease-in-out infinite;
        }

        @keyframes pulseSoft {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.02);
            opacity: 0.95;
          }
        }
      `}</style>
    </div>
  );
}
