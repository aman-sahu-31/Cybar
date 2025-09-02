import React, { useState, useEffect } from "react";
import { FaUserShield, FaFileSignature, FaRegClock, FaPhone, FaEnvelope, FaFlag, FaClock, FaUsers, FaSync, FaDownload, FaChartBar, FaChartPie, FaCalendarAlt, FaTasks, FaExclamationTriangle } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area
} from "recharts";

// Sample data for grievance analytics
const grievanceData = [
  { month: "Jan", received: 156, resolved: 142, pending: 14 },
  { month: "Feb", received: 189, resolved: 175, pending: 14 },
  { month: "Mar", received: 134, resolved: 128, pending: 6 },
  { month: "Apr", received: 203, resolved: 195, pending: 8 },
  { month: "May", received: 178, resolved: 169, pending: 9 },
  { month: "Jun", received: 221, resolved: 210, pending: 11 }
];

const grievanceTypeData = [
  { name: "Service Delay", count: 45, color: "#3B82F6" },
  { name: "Corruption", count: 32, color: "#EF4444" },
  { name: "Misconduct", count: 28, color: "#F59E0B" },
  { name: "Policy Issues", count: 23, color: "#10B981" },
  { name: "Others", count: 18, color: "#8B5CF6" }
];

const resolutionTimeData = [
  { priority: "Critical", avgDays: 3, target: 3 },
  { priority: "High", avgDays: 7, target: 7 },
  { priority: "Medium", avgDays: 12, target: 15 },
  { priority: "Low", avgDays: 25, target: 30 }
];

export default function GrievanceRedressal() {
  const [liveStats, setLiveStats] = useState({
    activeGrievances: 34,
    todayReceived: 8,
    avgResolutionTime: "12 days",
    lastUpdate: "Just now"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        activeGrievances: prev.activeGrievances + Math.floor(Math.random() * 4) - 2,
        todayReceived: Math.max(0, prev.todayReceived + Math.floor(Math.random() * 3) - 1),
        lastUpdate: "Just now"
      }));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-white to-green-600 text-center py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-blue-900/90"></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center gap-4 mb-6">
            <FaFlag className="text-orange-400 text-4xl" />
            <h1 className="text-5xl font-bold text-white drop-shadow-lg">
              शिकायत निवारण
            </h1>
            <FaFlag className="text-green-400 text-4xl" />
          </div>
          <p className="text-2xl font-semibold text-orange-200 mb-4">Grievance Redressal System</p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            नागरिकों की शिकायतों का त्वरित और प्रभावी समाधान सुनिश्चित करने के लिए संरचित शिकायत निवारण तंत्र।
          </p>
          <p className="text-blue-200 max-w-4xl mx-auto leading-relaxed mt-2">
            Structured grievance redressal mechanism to ensure quick and effective resolution of citizen complaints.
          </p>
        </div>
      </div>

      {/* Live Status Bar */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-green-700">Grievance Portal Online</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-600" />
                <span className="text-sm text-gray-700">Last Updated: {liveStats.lastUpdate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaExclamationTriangle className="text-red-600" />
                <span className="text-sm text-gray-700">Active: {liveStats.activeGrievances}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Today: {liveStats.todayReceived}</span>
              <span className="text-sm text-gray-700">Avg Time: {liveStats.avgResolutionTime}</span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <FaSync className="animate-spin" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grievance Statistics Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Grievances</h3>
                <p className="text-3xl font-bold text-red-600">1,281</p>
                <p className="text-xs text-green-600 mt-1">↗ +8% this month</p>
              </div>
              <FaExclamationTriangle className="text-red-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Resolved</h3>
                <p className="text-3xl font-bold text-green-600">1,189</p>
                <p className="text-xs text-green-600 mt-1">↗ 92.8% success rate</p>
              </div>
              <FaUserShield className="text-green-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Pending</h3>
                <p className="text-3xl font-bold text-orange-600">92</p>
                <p className="text-xs text-orange-600 mt-1">↓ -15% from last month</p>
              </div>
              <FaRegClock className="text-orange-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg Resolution</h3>
                <p className="text-3xl font-bold text-blue-600">12 Days</p>
                <p className="text-xs text-green-600 mt-1">↓ -2 days improvement</p>
              </div>
              <FaCalendarAlt className="text-blue-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Grievance Analytics Charts */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Grievance Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartBar className="text-blue-600 mr-3" />
              शिकायत रुझान | Grievance Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={grievanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="received" stroke="#3B82F6" strokeWidth={2} name="Received" />
                <Line type="monotone" dataKey="resolved" stroke="#10B981" strokeWidth={2} name="Resolved" />
                <Line type="monotone" dataKey="pending" stroke="#F59E0B" strokeWidth={2} name="Pending" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Grievance Type Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartPie className="text-purple-600 mr-3" />
              शिकायत प्रकार | Grievance Types
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={grievanceTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {grievanceTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Resolution Time by Priority */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FaClock className="text-green-600 mr-3" />
            प्राथमिकता के अनुसार समाधान समय | Resolution Time by Priority
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={resolutionTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="priority" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgDays" fill="#3B82F6" name="Average Days" />
              <Bar dataKey="target" fill="#10B981" name="Target Days" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <FaUserShield className="text-red-600" /> शिकायत निवारण के बारे में | About Grievance Redressal
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                शिकायत निवारण तंत्र नागरिकों को सरकारी सेवाओं के संबंध में शिकायतें, फीडबैक या चिंताओं को उठाने के लिए एक संरचित प्रक्रिया प्रदान करता है। हमारा लक्ष्य पारदर्शिता, जवाबदेही और शिकायतों का समय पर समाधान सुनिश्चित करना है।
              </p>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                The Grievance Redressal Mechanism provides a structured process for citizens to raise complaints, feedback, or concerns regarding government services.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-red-800 mb-3">Key Benefits</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li>• Quick resolution process</li>
                <li>• Online tracking facility</li>
                <li>• Multiple submission channels</li>
                <li>• Regular status updates</li>
                <li>• Appeal mechanism</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
            <FaFileSignature className="text-green-600" /> शिकायत दर्ज करने की प्रक्रिया | How to File a Grievance
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">शिकायत चरण | Filing Steps</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li className="p-3 bg-blue-50 rounded-lg">आधिकारिक पोर्टल या ईमेल के माध्यम से अपनी शिकायत दर्ज करें।</li>
                <li className="p-3 bg-green-50 rounded-lg">नाम, संपर्क और समस्या विवरण सहित विवरण प्रदान करें।</li>
                <li className="p-3 bg-orange-50 rounded-lg">एक अद्वितीय शिकायत आईडी के साथ पावती प्राप्त करें।</li>
                <li className="p-3 bg-purple-50 rounded-lg">ऑनलाइन या हेल्पलाइन सहायता के माध्यम से स्थिति ट्रैक करें।</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">English Steps</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li className="p-3 bg-gray-50 rounded-lg">Register your grievance through the official portal or email.</li>
                <li className="p-3 bg-gray-50 rounded-lg">Provide details including name, contact, and issue description.</li>
                <li className="p-3 bg-gray-50 rounded-lg">Receive an acknowledgement with a unique grievance ID.</li>
                <li className="p-3 bg-gray-50 rounded-lg">Track status online or through helpline support.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
            <FaRegClock className="text-blue-600" /> समाधान समयसीमा | Resolution Timeline
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">समयसीमा | Timeline</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <strong>3 दिन</strong> – शिकायत की पावती।
                    <p className="text-sm text-gray-600">Acknowledgement of grievance.</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">15</div>
                  <div>
                    <strong>15 दिन</strong> – संबंधित विभाग द्वारा समीक्षा और प्रतिक्रिया।
                    <p className="text-sm text-gray-600">Review and response by the concerned department.</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">30</div>
                  <div>
                    <strong>30 दिन</strong> – अंतिम समाधान (मामले की जटिलता के आधार पर भिन्न हो सकता है)।
                    <p className="text-sm text-gray-600">Final resolution (may vary based on case complexity).</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Priority Levels</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-red-100 rounded">
                  <span className="text-sm font-semibold text-red-800">Critical</span>
                  <span className="text-sm text-red-600">3 days</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-orange-100 rounded">
                  <span className="text-sm font-semibold text-orange-800">High</span>
                  <span className="text-sm text-orange-600">7 days</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-100 rounded">
                  <span className="text-sm font-semibold text-yellow-800">Medium</span>
                  <span className="text-sm text-yellow-600">15 days</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-100 rounded">
                  <span className="text-sm font-semibold text-green-800">Low</span>
                  <span className="text-sm text-green-600">30 days</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
            <FaPhone className="text-purple-600" /> सहायता के लिए संपर्क | Contact for Assistance
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                <p className="flex items-center gap-2 font-semibold text-red-800">
                  <FaEnvelope className="text-red-500" /> ईमेल | Email
                </p>
                <p className="text-red-700 ml-6">grievance@gov.in</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="flex items-center gap-2 font-semibold text-green-800">
                  <FaPhone className="text-green-500" /> हेल्पलाइन | Helpline
                </p>
                <p className="text-green-700 ml-6">1800-111-222</p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Office Hours</h4>
              <p className="text-purple-700 mb-2">सोमवार से शनिवार | Monday to Saturday</p>
              <p className="text-purple-600">सुबह 9:30 से शाम 6:00 तक | 9:30 AM – 6:00 PM</p>
              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-sm text-gray-600">Emergency: 24/7 available</p>
                <p className="text-sm text-gray-600">Response: Within 3 days</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">शिकायत निवारण प्रणाली</h3>
            <p className="text-blue-200 text-sm">Grievance Redressal System</p>
          </div>
          <div className="border-t border-blue-700 pt-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              सरकारी शिकायत प्रबंधन प्रणाली | Government Grievance Management System
            </p>
            <p className="text-xs text-blue-300 mt-2">
              भारत सरकार के तहत विकसित | Developed under Government of India
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
