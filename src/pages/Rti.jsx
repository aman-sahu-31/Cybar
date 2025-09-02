import React, { useState, useEffect } from "react";
import { FaInfoCircle, FaFileAlt, FaEnvelope, FaPhone, FaFlag, FaClock, FaUsers, FaSync, FaDownload, FaChartBar, FaChartPie, FaCalendarAlt, FaTasks } from "react-icons/fa";
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

// Sample data for RTI analytics
const rtiRequestData = [
  { month: "Jan", requests: 234, processed: 198, pending: 36 },
  { month: "Feb", requests: 267, processed: 245, pending: 22 },
  { month: "Mar", requests: 189, processed: 176, pending: 13 },
  { month: "Apr", requests: 298, processed: 278, pending: 20 },
  { month: "May", requests: 345, processed: 321, pending: 24 },
  { month: "Jun", requests: 312, processed: 289, pending: 23 }
];

const departmentRtiData = [
  { name: "Cyber Security", requests: 45, color: "#3B82F6" },
  { name: "Financial Intelligence", requests: 38, color: "#10B981" },
  { name: "Investigation", requests: 32, color: "#F59E0B" },
  { name: "Administration", requests: 28, color: "#EF4444" },
  { name: "Legal", requests: 22, color: "#8B5CF6" }
];

const responseTimeData = [
  { category: "Simple", avgDays: 8, target: 10 },
  { category: "Moderate", avgDays: 18, target: 20 },
  { category: "Complex", avgDays: 28, target: 30 }
];

export default function RTI() {
  const [liveStats, setLiveStats] = useState({
    activeRequests: 67,
    todaySubmissions: 12,
    avgResponseTime: "14 days",
    lastUpdate: "Just now"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        activeRequests: prev.activeRequests + Math.floor(Math.random() * 4) - 2,
        todaySubmissions: Math.max(0, prev.todaySubmissions + Math.floor(Math.random() * 3) - 1),
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
              सूचना का अधिकार
            </h1>
            <FaFlag className="text-green-400 text-4xl" />
          </div>
          <p className="text-2xl font-semibold text-orange-200 mb-4">Right to Information (RTI)</p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            पारदर्शिता और जवाबदेही सुनिश्चित करने के लिए सूचना का अधिकार अधिनियम 2005 के तहत नागरिक सेवाएं।
          </p>
          <p className="text-blue-200 max-w-4xl mx-auto leading-relaxed mt-2">
            Citizen services under Right to Information Act 2005 to ensure transparency and accountability.
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
                <span className="text-sm font-semibold text-green-700">RTI Portal Online</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-600" />
                <span className="text-sm text-gray-700">Last Updated: {liveStats.lastUpdate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaFileAlt className="text-purple-600" />
                <span className="text-sm text-gray-700">Active Requests: {liveStats.activeRequests}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Today: {liveStats.todaySubmissions}</span>
              <span className="text-sm text-gray-700">Avg Time: {liveStats.avgResponseTime}</span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <FaSync className="animate-spin" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RTI Statistics Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Total RTI Requests</h3>
                <p className="text-3xl font-bold text-blue-600">2,145</p>
                <p className="text-xs text-green-600 mt-1">↗ +18% this month</p>
              </div>
              <FaFileAlt className="text-blue-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Processed</h3>
                <p className="text-3xl font-bold text-green-600">1,987</p>
                <p className="text-xs text-green-600 mt-1">↗ 92.6% success rate</p>
              </div>
              <FaTasks className="text-green-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Pending</h3>
                <p className="text-3xl font-bold text-orange-600">158</p>
                <p className="text-xs text-orange-600 mt-1">↓ -12% from last month</p>
              </div>
              <FaClock className="text-orange-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Avg Response</h3>
                <p className="text-3xl font-bold text-purple-600">14 Days</p>
                <p className="text-xs text-green-600 mt-1">↓ -3 days improvement</p>
              </div>
              <FaCalendarAlt className="text-purple-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* RTI Analytics Charts */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* RTI Request Trends */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartBar className="text-blue-600 mr-3" />
              RTI अनुरोध रुझान | RTI Request Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rtiRequestData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="requests" stroke="#3B82F6" strokeWidth={2} name="Total Requests" />
                <Line type="monotone" dataKey="processed" stroke="#10B981" strokeWidth={2} name="Processed" />
                <Line type="monotone" dataKey="pending" stroke="#F59E0B" strokeWidth={2} name="Pending" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department-wise RTI Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartPie className="text-purple-600 mr-3" />
              विभागवार वितरण | Department-wise Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentRtiData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="requests"
                >
                  {departmentRtiData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Response Time Analysis */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FaClock className="text-green-600 mr-3" />
            प्रतिक्रिया समय विश्लेषण | Response Time Analysis
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={responseTimeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="avgDays" fill="#3B82F6" name="Average Days" />
              <Bar dataKey="target" fill="#10B981" name="Target Days" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* About RTI */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
            <FaInfoCircle className="text-blue-500" /> सूचना का अधिकार के बारे में | About RTI
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                सूचना का अधिकार अधिनियम, 2005 भारत के प्रत्येक नागरिक को सार्वजनिक प्राधिकरणों से जानकारी मांगने का अधिकार देता है। यह शासन में पारदर्शिता और जवाबदेही को बढ़ावा देता है।
              </p>
              <p className="text-gray-600 leading-relaxed text-sm italic">
                The Right to Information Act, 2005 empowers every citizen of India to seek information from public authorities, promoting transparency and accountability in governance.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-blue-800 mb-3">Key Features</h4>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>• 30-day response guarantee</li>
                <li>• Minimal application fee (₹10)</li>
                <li>• Online tracking system</li>
                <li>• Appeal mechanism available</li>
                <li>• Penalty for delays</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
            <FaFileAlt className="text-green-600" /> आवेदन प्रक्रिया | How to Apply for RTI
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">आवेदन चरण | Application Steps</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li className="p-3 bg-blue-50 rounded-lg">स्पष्ट प्रश्नों के साथ अपना RTI आवेदन तैयार करें।</li>
                <li className="p-3 bg-green-50 rounded-lg">संबंधित लोक सूचना अधिकारी (PIO) को जमा करें।</li>
                <li className="p-3 bg-orange-50 rounded-lg">निर्धारित आवेदन शुल्क (आमतौर पर ₹10) का भुगतान करें।</li>
                <li className="p-3 bg-purple-50 rounded-lg">RTI नियमों के अनुसार 30 दिनों के भीतर प्रतिक्रिया की प्रतीक्षा करें।</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-4">English Steps</h4>
              <ol className="list-decimal list-inside space-y-3 text-gray-600">
                <li className="p-3 bg-gray-50 rounded-lg">Prepare your RTI application with clear questions.</li>
                <li className="p-3 bg-gray-50 rounded-lg">Submit it to the concerned Public Information Officer (PIO).</li>
                <li className="p-3 bg-gray-50 rounded-lg">Pay the prescribed application fee (usually ₹10).</li>
                <li className="p-3 bg-gray-50 rounded-lg">Await a response within 30 days as per RTI rules.</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
            <FaEnvelope className="text-purple-600" /> संपर्क जानकारी | Contact Information
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="flex items-center gap-2 font-semibold text-blue-800">
                  <FaEnvelope className="text-blue-500" /> ईमेल | Email
                </p>
                <p className="text-blue-700 ml-6">rti-help@gov.in</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="flex items-center gap-2 font-semibold text-green-800">
                  <FaPhone className="text-green-500" /> हेल्पलाइन | Helpline
                </p>
                <p className="text-green-700 ml-6">1800-123-456</p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-bold text-purple-800 mb-3">Office Hours</h4>
              <p className="text-purple-700 mb-2">सोमवार से शुक्रवार | Monday to Friday</p>
              <p className="text-purple-600">सुबह 9 बजे से शाम 6 बजे तक | 9 AM – 6 PM</p>
              <div className="mt-4 p-3 bg-white rounded border">
                <p className="text-sm text-gray-600">Response Time: Within 30 days</p>
                <p className="text-sm text-gray-600">Fee: ₹10 per application</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">सूचना का अधिकार प्रणाली</h3>
            <p className="text-blue-200 text-sm">Right to Information System</p>
          </div>
          <div className="border-t border-blue-700 pt-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              सरकारी पारदर्शिता प्रणाली | Government Transparency System
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
