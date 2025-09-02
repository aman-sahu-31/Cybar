import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import { 
  FaShieldAlt, 
  FaExclamationTriangle, 
  FaChartLine, 
  FaBell, 
  FaUsers, 
  FaCreditCard, 
  FaRobot, 
  FaEye,
  FaArrowUp,
  FaArrowDown,
  FaClock,
  FaGlobe
} from "react-icons/fa";

export default function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [liveStats, setLiveStats] = useState({
    activeUsers: 15847,
    blockedTransactions: 1234,
    threatLevel: "Medium"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate live data updates
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 10) - 5,
        blockedTransactions: prev.blockedTransactions + Math.floor(Math.random() * 3),
        threatLevel: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)]
      }));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced Data with more comprehensive metrics
  const keyMetrics = [
    {
      title: "सक्रिय उपयोगकर्ता",
      englishTitle: "Active Users",
      value: liveStats.activeUsers.toLocaleString(),
      change: "+12.5%",
      trend: "up",
      icon: <FaUsers />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      title: "अवरुद्ध लेनदेन",
      englishTitle: "Blocked Transactions",
      value: liveStats.blockedTransactions.toLocaleString(),
      change: "+8.3%",
      trend: "up",
      icon: <FaCreditCard />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50"
    },
    {
      title: "बॉट का पता लगाना",
      englishTitle: "Bot Detection",
      value: "99.2%",
      change: "+0.5%",
      trend: "up",
      icon: <FaRobot />,
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50"
    },
    {
      title: "वर्तमान खतरा स्तर",
      englishTitle: "Current Threat Level",
      value: liveStats.threatLevel,
      change: "Stable",
      trend: "stable",
      icon: <FaShieldAlt />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    }
  ];

  const alertData = [
    { 
      label: "गंभीर अलर्ट", 
      englishLabel: "Critical Alerts", 
      value: 12, 
      color: "#dc2626",
      icon: <FaExclamationTriangle />,
      gradient: "from-red-500 to-red-600",
      description: "तत्काल कार्रवाई आवश्यक"
    },
    { 
      label: "उच्च अलर्ट", 
      englishLabel: "High Alerts", 
      value: 28, 
      color: "#ea580c",
      icon: <FaBell />,
      gradient: "from-orange-500 to-orange-600",
      description: "24 घंटे में समीक्षा"
    },
    { 
      label: "मध्यम अलर्ट", 
      englishLabel: "Medium Alerts", 
      value: 156, 
      color: "#d97706",
      icon: <FaEye />,
      gradient: "from-yellow-500 to-yellow-600",
      description: "निगरानी में"
    },
    { 
      label: "निम्न अलर्ट", 
      englishLabel: "Low Alerts", 
      value: 342, 
      color: "#16a34a",
      icon: <FaShieldAlt />,
      gradient: "from-green-500 to-green-600",
      description: "सामान्य निगरानी"
    }
  ];

  const transactionData = [
    { time: "00:00", successful: 1200, blocked: 45, suspicious: 23 },
    { time: "04:00", successful: 800, blocked: 32, suspicious: 18 },
    { time: "08:00", successful: 2100, blocked: 78, suspicious: 34 },
    { time: "12:00", successful: 3200, blocked: 125, suspicious: 67 },
    { time: "16:00", successful: 2800, blocked: 98, suspicious: 45 },
    { time: "20:00", successful: 1900, blocked: 67, suspicious: 28 },
  ];

  const threatData = [
    { name: "फिशिंग", value: 35, color: "#dc2626" },
    { name: "मैलवेयर", value: 28, color: "#ea580c" },
    { name: "बॉट अटैक", value: 22, color: "#d97706" },
    { name: "डेटा चोरी", value: 15, color: "#7c3aed" },
  ];

  const recentIncidents = [
    {
      id: 1,
      type: "गंभीर",
      description: "संदिग्ध बल्क ट्रांसफर का पता चला",
      time: "2 मिनट पहले",
      status: "जांच में",
      severity: "high"
    },
    {
      id: 2,
      type: "मध्यम",
      description: "असामान्य लॉगिन पैटर्न",
      time: "15 मिनट पहले",
      status: "समाधानित",
      severity: "medium"
    },
    {
      id: 3,
      type: "निम्न",
      description: "नया डिवाइस लॉगिन",
      time: "1 घंटा पहले",
      status: "सत्यापित",
      severity: "low"
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/10 rounded-full -translate-x-40 translate-y-40 blur-3xl"></div>
      
      {/* Header with Live Time */}
      <div className="relative z-10 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-bold text-gray-800">🇮🇳 साइबर सुरक्षा केंद्र</span>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 rounded-full shadow-lg">
              <span className="text-sm font-bold text-white">🛡️ Live Monitoring</span>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border">
            <div className="flex items-center gap-2 text-gray-700">
              <FaClock />
              <span className="font-mono text-sm">{currentTime.toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-green-600 bg-clip-text text-transparent">
            साइबर सुरक्षा निगरानी केंद्र
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Cyber Security Monitoring Center
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            वास्तविक समय निगरानी और खतरा विश्लेषण | Real-time monitoring and threat analysis
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 relative z-10">
        {keyMetrics.map((metric, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${metric.bgGradient} p-6 rounded-2xl shadow-xl border border-white/50 hover:scale-105 transition-all duration-300`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${metric.gradient} shadow-lg`}>
                <div className="text-white text-xl">{metric.icon}</div>
              </div>
              <div className={`flex items-center gap-1 text-sm font-semibold ${
                metric.trend === 'up' ? 'text-green-600' :
                metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
              }`}>
                {metric.trend === 'up' && <FaArrowUp />}
                {metric.trend === 'down' && <FaArrowDown />}
                {metric.change}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{metric.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{metric.englishTitle}</p>
            <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 relative z-10">
        {alertData.map((alert, index) => (
          <div
            key={index}
            className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${alert.gradient}`}>
                <div className="text-white">{alert.icon}</div>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{alert.label}</h3>
                <p className="text-xs text-gray-600">{alert.englishLabel}</p>
              </div>
            </div>
            <p className="text-2xl font-bold mb-2" style={{ color: alert.color }}>
              {alert.value}
            </p>
            <p className="text-xs text-gray-600">{alert.description}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 relative z-10">
        {/* Transaction Flow */}
        <div className="lg:col-span-2 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <FaChartLine className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800">24-घंटे लेनदेन प्रवाह</h2>
              <p className="text-sm text-gray-600">24-Hour Transaction Flow</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={transactionData}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="successful" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              <Area type="monotone" dataKey="blocked" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
              <Area type="monotone" dataKey="suspicious" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Distribution */}
        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
              <FaExclamationTriangle className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">खतरा वितरण</h2>
              <p className="text-sm text-gray-600">Threat Distribution</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={threatData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {threatData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Incidents */}
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200 relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <FaBell className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-800">हाल की घटनाएं</h2>
            <p className="text-sm text-gray-600">Recent Security Incidents</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {recentIncidents.map((incident) => (
            <div
              key={incident.id}
              className={`p-4 rounded-xl border-l-4 ${
                incident.severity === 'high' ? 'border-red-500 bg-red-50' :
                incident.severity === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                'border-green-500 bg-green-50'
              } hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      incident.severity === 'high' ? 'bg-red-200 text-red-800' :
                      incident.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                      'bg-green-200 text-green-800'
                    }`}>
                      {incident.type}
                    </span>
                    <span className="text-xs text-gray-500">{incident.time}</span>
                  </div>
                  <p className="font-semibold text-gray-800 mb-1">{incident.description}</p>
                  <p className="text-sm text-gray-600">Status: {incident.status}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
