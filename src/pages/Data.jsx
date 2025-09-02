import React, { useState, useEffect } from "react";
import { FaChartBar, FaDatabase, FaChartPie, FaFileAlt, FaEye, FaFlag, FaShieldAlt, FaNetworkWired, FaSearch, FaClock, FaGlobe, FaUsers, FaMoneyBillWave, FaExclamationTriangle, FaDownload, FaFilter, FaSync } from "react-icons/fa";
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

// Sample data for charts
const transactionData = [
  { month: "Jan", total: 45000, suspicious: 850, resolved: 720 },
  { month: "Feb", total: 52000, suspicious: 920, resolved: 810 },
  { month: "Mar", total: 48000, suspicious: 780, resolved: 650 },
  { month: "Apr", total: 61000, suspicious: 1100, resolved: 980 },
  { month: "May", total: 58000, suspicious: 950, resolved: 850 },
  { month: "Jun", total: 67000, suspicious: 1250, resolved: 1100 },
  { month: "Jul", total: 72000, suspicious: 1380, resolved: 1200 },
  { month: "Aug", total: 69000, suspicious: 1150, resolved: 1050 }
];

const threatTypeData = [
  { name: "Money Laundering", value: 35, color: "#EF4444" },
  { name: "Cyber Fraud", value: 28, color: "#F59E0B" },
  { name: "Tax Evasion", value: 20, color: "#3B82F6" },
  { name: "Foreign Exchange Violation", value: 12, color: "#10B981" },
  { name: "Others", value: 5, color: "#8B5CF6" }
];

const agencyPerformanceData = [
  { agency: "ED", cases: 145, resolved: 120, pending: 25 },
  { agency: "CBI", cases: 89, resolved: 75, pending: 14 },
  { agency: "FIU-IND", cases: 234, resolved: 198, pending: 36 },
  { agency: "IT Dept", cases: 67, resolved: 58, pending: 9 },
  { agency: "RBI", cases: 156, resolved: 134, pending: 22 }
];

const complianceData = [
  { sector: "Banking", compliance: 92, nonCompliance: 8 },
  { sector: "Securities", compliance: 88, nonCompliance: 12 },
  { sector: "Insurance", compliance: 85, nonCompliance: 15 },
  { sector: "NBFCs", compliance: 78, nonCompliance: 22 },
  { sector: "Fintech", compliance: 82, nonCompliance: 18 }
];

const regionalData = [
  { region: "North", cases: 2450, amount: 45.6, resolved: 2100 },
  { region: "South", cases: 1890, amount: 38.2, resolved: 1650 },
  { region: "West", cases: 3200, amount: 62.8, resolved: 2850 },
  { region: "East", cases: 1560, amount: 28.4, resolved: 1320 },
  { region: "Central", cases: 980, amount: 18.9, resolved: 850 },
  { region: "Northeast", cases: 420, amount: 8.1, resolved: 380 }
];

const timeSeriesData = [
  { time: "00:00", alerts: 12, threats: 8, resolved: 15 },
  { time: "04:00", alerts: 8, threats: 5, resolved: 12 },
  { time: "08:00", alerts: 25, threats: 18, resolved: 20 },
  { time: "12:00", alerts: 35, threats: 28, resolved: 30 },
  { time: "16:00", alerts: 42, threats: 35, resolved: 38 },
  { time: "20:00", alerts: 28, threats: 22, resolved: 25 }
];

const riskLevelData = [
  { level: "Critical", count: 145, color: "#DC2626" },
  { level: "High", count: 289, color: "#EA580C" },
  { level: "Medium", count: 456, color: "#D97706" },
  { level: "Low", count: 678, color: "#16A34A" },
  { level: "Minimal", count: 234, color: "#059669" }
];

const internationalData = [
  { country: "USA", requests: 45, responses: 38, pending: 7 },
  { country: "UK", requests: 32, responses: 28, pending: 4 },
  { country: "UAE", requests: 28, responses: 25, pending: 3 },
  { country: "Singapore", requests: 22, responses: 20, pending: 2 },
  { country: "Switzerland", requests: 18, responses: 15, pending: 3 },
  { country: "Others", requests: 67, responses: 58, pending: 9 }
];

export default function Data() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveStats, setLiveStats] = useState({
    activeUsers: 1247,
    processingQueue: 89,
    systemUptime: "99.8%",
    lastUpdate: "2 seconds ago"
  });

  // Simulate real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setLiveStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        processingQueue: Math.max(0, prev.processingQueue + Math.floor(Math.random() * 6) - 3),
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
              डेटा और सांख्यिकी
            </h1>
            <FaFlag className="text-green-400 text-4xl" />
          </div>
          <p className="text-2xl font-semibold text-orange-200 mb-4">Data & Statistics</p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            साइबर सुरक्षा और वित्तीय अपराध निवारण के लिए डेटा विश्लेषण, सांख्यिकीय रिपोर्ट और प्रदर्शन मेट्रिक्स।
          </p>
          <p className="text-blue-200 max-w-4xl mx-auto leading-relaxed mt-2">
            Data analysis, statistical reports and performance metrics for cyber security and financial crime prevention.
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
                <span className="text-sm font-semibold text-green-700">System Online</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-600" />
                <span className="text-sm text-gray-700">Last Updated: {liveStats.lastUpdate}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUsers className="text-purple-600" />
                <span className="text-sm text-gray-700">Active Users: {liveStats.activeUsers}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Queue: {liveStats.processingQueue}</span>
              <span className="text-sm text-gray-700">Uptime: {liveStats.systemUptime}</span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <FaSync className="animate-spin" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Statistics Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Transactions</h3>
                <p className="text-3xl font-bold text-blue-600">5,52,000</p>
                <p className="text-xs text-green-600 mt-1">↗ +12% from last month</p>
              </div>
              <FaMoneyBillWave className="text-blue-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Suspicious Cases</h3>
                <p className="text-3xl font-bold text-red-600">8,350</p>
                <p className="text-xs text-red-600 mt-1">↗ +8% from last month</p>
              </div>
              <FaExclamationTriangle className="text-red-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Resolved Cases</h3>
                <p className="text-3xl font-bold text-green-600">7,180</p>
                <p className="text-xs text-green-600 mt-1">↗ +15% from last month</p>
              </div>
              <FaShieldAlt className="text-green-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Recovery Amount</h3>
                <p className="text-3xl font-bold text-orange-600">₹2.4Cr</p>
                <p className="text-xs text-green-600 mt-1">↗ +22% from last month</p>
              </div>
              <FaDatabase className="text-orange-500 text-2xl" />
            </div>
          </div>
        </div>

        {/* Additional KPI Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg p-6 border border-indigo-200">
            <div className="text-center">
              <FaGlobe className="text-indigo-600 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-indigo-800">International Cases</h3>
              <p className="text-2xl font-bold text-indigo-600 mt-2">234</p>
              <p className="text-xs text-indigo-600 mt-1">Cross-border investigations</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl shadow-lg p-6 border border-cyan-200">
            <div className="text-center">
              <FaClock className="text-cyan-600 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-cyan-800">Avg Resolution Time</h3>
              <p className="text-2xl font-bold text-cyan-600 mt-2">45 Days</p>
              <p className="text-xs text-cyan-600 mt-1">Improved by 18%</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl shadow-lg p-6 border border-emerald-200">
            <div className="text-center">
              <FaUsers className="text-emerald-600 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-emerald-800">Agencies Involved</h3>
              <p className="text-2xl font-bold text-emerald-600 mt-2">12</p>
              <p className="text-xs text-emerald-600 mt-1">Active collaboration</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl shadow-lg p-6 border border-rose-200">
            <div className="text-center">
              <FaExclamationTriangle className="text-rose-600 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-rose-800">High Priority</h3>
              <p className="text-2xl font-bold text-rose-600 mt-2">67</p>
              <p className="text-xs text-rose-600 mt-1">Require immediate attention</p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl shadow-lg p-6 border border-amber-200">
            <div className="text-center">
              <FaDownload className="text-amber-600 text-3xl mx-auto mb-3" />
              <h3 className="text-lg font-bold text-amber-800">Data Exports</h3>
              <p className="text-2xl font-bold text-amber-600 mt-2">1,456</p>
              <p className="text-xs text-amber-600 mt-1">This month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Transaction Trends Line Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartBar className="text-blue-600 mr-3" />
              लेनदेन रुझान | Transaction Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={transactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="total" stroke="#3B82F6" strokeWidth={2} name="Total Transactions" />
                <Line type="monotone" dataKey="suspicious" stroke="#EF4444" strokeWidth={2} name="Suspicious" />
                <Line type="monotone" dataKey="resolved" stroke="#10B981" strokeWidth={2} name="Resolved" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Threat Types Pie Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartPie className="text-purple-600 mr-3" />
              खतरे के प्रकार | Threat Types
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={threatTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {threatTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Agency Performance Bar Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaShieldAlt className="text-green-600 mr-3" />
              एजेंसी प्रदर्शन | Agency Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agencyPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="agency" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="resolved" fill="#10B981" name="Resolved Cases" />
                <Bar dataKey="pending" fill="#F59E0B" name="Pending Cases" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Compliance Rate Area Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaFileAlt className="text-teal-600 mr-3" />
              अनुपालन दर | Compliance Rates
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={complianceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="sector" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="compliance" stackId="1" stroke="#10B981" fill="#10B981" name="Compliant %" />
                <Area type="monotone" dataKey="nonCompliance" stackId="1" stroke="#EF4444" fill="#EF4444" name="Non-Compliant %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Advanced Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Regional Analysis Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaDatabase className="text-indigo-600 mr-3" />
              क्षेत्रीय विश्लेषण | Regional Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={regionalData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" />
                <YAxis />
                <Tooltip formatter={(value, name) => [
                  name === 'amount' ? `₹${value}Cr` : value,
                  name === 'cases' ? 'Cases' : name === 'amount' ? 'Amount Involved' : 'Resolved'
                ]} />
                <Legend />
                <Bar dataKey="cases" fill="#3B82F6" name="Total Cases" />
                <Bar dataKey="resolved" fill="#10B981" name="Resolved Cases" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Risk Level Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaShieldAlt className="text-red-600 mr-3" />
              जोखिम स्तर | Risk Levels
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskLevelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="count"
                  label={({ level, percent }) => `${level} ${(percent * 100).toFixed(0)}%`}
                >
                  {riskLevelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Real-time Monitoring */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* 24-Hour Activity Timeline */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaEye className="text-cyan-600 mr-3" />
              24-घंटे गतिविधि | 24-Hour Activity
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="alerts" stackId="1" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.6} name="Security Alerts" />
                <Area type="monotone" dataKey="threats" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.6} name="Active Threats" />
                <Area type="monotone" dataKey="resolved" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Resolved Issues" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* International Cooperation */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaNetworkWired className="text-emerald-600 mr-3" />
              अंतर्राष्ट्रीय सहयोग | International Cooperation
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={internationalData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="country" type="category" width={80} />
                <Tooltip />
                <Legend />
                <Bar dataKey="responses" fill="#10B981" name="Responses Received" />
                <Bar dataKey="pending" fill="#F59E0B" name="Pending Requests" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Live Data Feed Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          लाइव डेटा फीड | Live Data Feed
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Real-time Alerts */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-6 border border-red-200">
            <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-3"></div>
              सक्रिय अलर्ट | Active Alerts
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-red-500">
                <p className="text-sm font-semibold text-red-700">High-Value Transaction Alert</p>
                <p className="text-xs text-gray-600">₹2.5Cr transfer detected - Under review</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-orange-500">
                <p className="text-sm font-semibold text-orange-700">Suspicious Pattern Detected</p>
                <p className="text-xs text-gray-600">Multiple small transactions from same source</p>
                <p className="text-xs text-gray-500">5 minutes ago</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-yellow-500">
                <p className="text-sm font-semibold text-yellow-700">KYC Compliance Issue</p>
                <p className="text-xs text-gray-600">Incomplete documentation flagged</p>
                <p className="text-xs text-gray-500">8 minutes ago</p>
              </div>
            </div>
          </div>

          {/* System Performance */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200">
            <h3 className="text-lg font-bold text-green-800 mb-4 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
              सिस्टम प्रदर्शन | System Performance
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Database Load</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <span className="text-xs text-green-600">78%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">API Response Time</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                  </div>
                  <span className="text-xs text-blue-600">92ms</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700">Data Processing</span>
                <div className="flex items-center">
                  <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <span className="text-xs text-purple-600">85%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-blue-800 mb-4 flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mr-3"></div>
              हाल की गतिविधियां | Recent Activities
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border-l-4 border-blue-500">
                <p className="text-sm font-semibold text-blue-700">STR Filed</p>
                <p className="text-xs text-gray-600">Bank of India - Suspicious cash deposit</p>
                <p className="text-xs text-gray-500">1 minute ago</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-green-500">
                <p className="text-sm font-semibold text-green-700">Case Resolved</p>
                <p className="text-xs text-gray-600">Money laundering investigation completed</p>
                <p className="text-xs text-gray-500">3 minutes ago</p>
              </div>
              <div className="bg-white rounded-lg p-3 border-l-4 border-purple-500">
                <p className="text-sm font-semibold text-purple-700">International Request</p>
                <p className="text-xs text-gray-600">Data sharing request from UK FIU</p>
                <p className="text-xs text-gray-500">6 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Analytics Dashboard */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          उन्नत विश्लेषण डैशबोर्ड | Advanced Analytics Dashboard
        </h2>
        
        {/* Data Export and Filter Controls */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Agencies</option>
                <option>Enforcement Directorate</option>
                <option>CBI</option>
                <option>FIU-IND</option>
                <option>Income Tax Department</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>Last 90 Days</option>
                <option>Last Year</option>
                <option>Custom Range</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Risk Levels</option>
                <option>Critical Only</option>
                <option>High & Critical</option>
                <option>Medium & Above</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Export PDF
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Export Excel
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Generate Report
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Analytics Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Transaction Volume by Amount */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              राशि के अनुसार लेनदेन | Transactions by Amount
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">₹0 - ₹10L</span>
                <span className="text-sm font-semibold text-blue-600">45,230</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">₹10L - ₹1Cr</span>
                <span className="text-sm font-semibold text-orange-600">8,450</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">₹1Cr - ₹10Cr</span>
                <span className="text-sm font-semibold text-red-600">2,180</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">₹10Cr+</span>
                <span className="text-sm font-semibold text-purple-600">450</span>
              </div>
            </div>
          </div>

          {/* Top Suspicious Entities */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              संदिग्ध संस्थाएं | Suspicious Entities
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                <div>
                  <p className="text-sm font-semibold text-red-800">Entity A***</p>
                  <p className="text-xs text-red-600">Multiple high-value transactions</p>
                </div>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Critical</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <div>
                  <p className="text-sm font-semibold text-orange-800">Entity B***</p>
                  <p className="text-xs text-orange-600">Unusual transaction patterns</p>
                </div>
                <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">High</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <div>
                  <p className="text-sm font-semibold text-yellow-800">Entity C***</p>
                  <p className="text-xs text-yellow-600">KYC documentation issues</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Medium</span>
              </div>
            </div>
          </div>

          {/* Investigation Status */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              जांच स्थिति | Investigation Status
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">156</div>
                <p className="text-sm text-gray-600">Active Investigations</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-green-600">89</div>
                  <p className="text-xs text-green-700">Completed</p>
                </div>
                <div className="bg-orange-50 rounded-lg p-3">
                  <div className="text-xl font-bold text-orange-600">67</div>
                  <p className="text-xs text-orange-700">In Progress</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-600">₹45.6Cr</div>
                <p className="text-xs text-blue-700">Total Assets Under Investigation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          डेटा श्रेणियां | Data Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "लेनदेन विश्लेषण",
              english: "Transaction Analysis",
              desc: "संदिग्ध लेनदेन पैटर्न की पहचान, वित्तीय धोखाधड़ी का पता लगाना और असामान्य गतिविधियों की निगरानी के लिए डेटा विश्लेषण।",
              englishDesc: "Data analysis for identifying suspicious transaction patterns, detecting financial fraud and monitoring unusual activities.",
              icon: <FaChartBar />,
              gradient: "from-blue-500 to-indigo-600",
              bgGradient: "from-blue-50 to-indigo-50"
            },
            {
              title: "साइबर खतरा डेटा",
              english: "Cyber Threat Intelligence",
              desc: "साइबर हमलों, मैलवेयर गतिविधि, फिशिंग प्रयासों और डिजिटल सुरक्षा उल्लंघनों का रियल-टाइम डेटा और विश्लेषण।",
              englishDesc: "Real-time data and analysis of cyber attacks, malware activity, phishing attempts and digital security breaches.",
              icon: <FaShieldAlt />,
              gradient: "from-red-500 to-orange-600",
              bgGradient: "from-red-50 to-orange-50"
            },
            {
              title: "अनुपालन मेट्रिक्स",
              english: "Compliance Metrics",
              desc: "वित्तीय संस्थानों की अनुपालन दर, STR फाइलिंग सांख्यिकी, KYC अपडेट स्थिति और नियामक अनुपालन ट्रैकिंग।",
              englishDesc: "Compliance rates of financial institutions, STR filing statistics, KYC update status and regulatory compliance tracking.",
              icon: <FaFileAlt />,
              gradient: "from-green-500 to-emerald-600",
              bgGradient: "from-green-50 to-emerald-50"
            },
            {
              title: "जांच डेटाबेस",
              english: "Investigation Database",
              desc: "चल रही जांच, बंद मामले, संपत्ति जब्ती रिकॉर्ड और प्रवर्तन एजेंसी सहयोग डेटा का केंद्रीकृत डेटाबेस।",
              englishDesc: "Centralized database of ongoing investigations, closed cases, asset seizure records and enforcement agency collaboration data.",
              icon: <FaSearch />,
              gradient: "from-purple-500 to-pink-600",
              bgGradient: "from-purple-50 to-pink-50"
            },
            {
              title: "वित्तीय खुफिया रिपोर्ट",
              english: "Financial Intelligence Reports",
              desc: "FIU-IND द्वारा तैयार की गई विश्लेषणात्मक रिपोर्ट, ट्रेंड एनालिसिस और संदिग्ध गतिविधि पैटर्न की पहचान।",
              englishDesc: "Analytical reports prepared by FIU-IND, trend analysis and identification of suspicious activity patterns.",
              icon: <FaEye />,
              gradient: "from-teal-500 to-cyan-600",
              bgGradient: "from-teal-50 to-cyan-50"
            },
            {
              title: "अंतर्राष्ट्रीय डेटा साझाकरण",
              english: "International Data Sharing",
              desc: "विदेशी FIU के साथ डेटा एक्सचेंज, सीमा पार अपराध ट्रैकिंग और अंतर्राष्ट्रीय सहयोग सांख्यिकी।",
              englishDesc: "Data exchange with foreign FIUs, cross-border crime tracking and international cooperation statistics.",
              icon: <FaNetworkWired />,
              gradient: "from-yellow-500 to-amber-600",
              bgGradient: "from-yellow-50 to-amber-50"
            }
          ].map((dataType, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${dataType.bgGradient} p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200`}
            >
              <div className={`p-4 bg-gradient-to-r ${dataType.gradient} rounded-xl w-fit mx-auto mb-6 shadow-lg`}>
                <div className="text-white text-3xl">{dataType.icon}</div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {dataType.title}
              </h2>
              <p className="text-lg font-semibold text-gray-600 mb-4 text-center">{dataType.english}</p>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {dataType.desc}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm italic border-t pt-3">
                  {dataType.englishDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Machine Learning & AI Analytics Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          AI विश्लेषण और मशीन लर्निंग | AI Analytics & Machine Learning
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* AI Threat Detection */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaShieldAlt className="text-purple-600 mr-3" />
              AI खतरा पहचान | AI Threat Detection
            </h3>
            <div className="space-y-4">
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-purple-800">Model Accuracy</span>
                  <span className="text-lg font-bold text-purple-600">94.7%</span>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{width: '94.7%'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-green-600">2,456</p>
                  <p className="text-xs text-green-700">Threats Detected</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-red-600">23</p>
                  <p className="text-xs text-red-700">False Positives</p>
                </div>
              </div>
            </div>
          </div>

          {/* Predictive Analytics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartBar className="text-indigo-600 mr-3" />
              भविष्यवाणी विश्लेषण | Predictive Analytics
            </h3>
            <div className="space-y-4">
              <div className="bg-indigo-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-indigo-800 mb-2">Next Month Prediction</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-600">Expected Cases</span>
                  <span className="text-sm font-bold text-indigo-600">9,200 ± 150</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-orange-600">78%</p>
                  <p className="text-xs text-orange-700">Confidence Level</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-blue-600">15</p>
                  <p className="text-xs text-blue-700">Risk Factors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Data Quality & Governance */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          डेटा गुणवत्ता और शासन | Data Quality & Governance
        </h2>
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaDatabase className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Data Completeness</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">96.8%</p>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '96.8%'}}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaShieldAlt className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Data Accuracy</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">98.2%</p>
            <div className="w-full bg-green-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{width: '98.2%'}}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaClock className="text-orange-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Data Freshness</h3>
            <p className="text-3xl font-bold text-orange-600 mb-2">92.5%</p>
            <div className="w-full bg-orange-200 rounded-full h-2">
              <div className="bg-orange-600 h-2 rounded-full" style={{width: '92.5%'}}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaEye className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Data Consistency</h3>
            <p className="text-3xl font-bold text-purple-600 mb-2">94.1%</p>
            <div className="w-full bg-purple-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{width: '94.1%'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Management System */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
          अलर्ट प्रबंधन प्रणाली | Alert Management System
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Alert Priority Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              अलर्ट प्राथमिकता वितरण | Alert Priority Distribution
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-red-800">Critical</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-600">45</p>
                  <p className="text-xs text-red-600">Immediate action required</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-orange-800">High</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-orange-600">128</p>
                  <p className="text-xs text-orange-600">Within 24 hours</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-yellow-800">Medium</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-600">267</p>
                  <p className="text-xs text-yellow-600">Within 72 hours</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-800">Low</span>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-green-600">389</p>
                  <p className="text-xs text-green-600">Routine review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time Analytics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              प्रतिक्रिया समय विश्लेषण | Response Time Analytics
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-blue-800">Average Response Time</span>
                  <span className="text-lg font-bold text-blue-600">2.4 hrs</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
                <p className="text-xs text-blue-600 mt-1">Target: 3 hours</p>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-lg font-bold text-green-600">85%</p>
                  <p className="text-xs text-green-700">On Time</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3">
                  <p className="text-lg font-bold text-yellow-600">12%</p>
                  <p className="text-xs text-yellow-700">Delayed</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3">
                  <p className="text-lg font-bold text-red-600">3%</p>
                  <p className="text-xs text-red-700">Overdue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">डेटा और सांख्यिकी प्रणाली</h3>
            <p className="text-blue-200 text-sm">Data & Statistics System</p>
          </div>
          <div className="border-t border-blue-700 pt-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              सरकारी डेटा प्रबंधन प्रणाली | Government Data Management System
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
