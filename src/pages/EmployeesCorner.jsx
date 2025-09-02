import React, { useState, useEffect } from "react";
import { FaUserTie, FaUsers, FaAward, FaGraduationCap, FaShieldAlt, FaFlag, FaHandshake, FaChartLine, FaLock, FaClock, FaCalendarAlt, FaTasks, FaUserCheck, FaSync, FaDownload } from "react-icons/fa";
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

// Sample data for employee analytics
const employeePerformanceData = [
  { month: "Jan", training: 145, completed: 132, pending: 13 },
  { month: "Feb", training: 167, completed: 158, pending: 9 },
  { month: "Mar", training: 189, completed: 175, pending: 14 },
  { month: "Apr", training: 203, completed: 195, pending: 8 },
  { month: "May", training: 178, completed: 169, pending: 9 },
  { month: "Jun", training: 221, completed: 210, pending: 11 }
];

const departmentData = [
  { name: "Cyber Security", employees: 45, color: "#3B82F6" },
  { name: "Financial Intelligence", employees: 38, color: "#10B981" },
  { name: "Investigation", employees: 32, color: "#F59E0B" },
  { name: "Compliance", employees: 28, color: "#EF4444" },
  { name: "IT Support", employees: 22, color: "#8B5CF6" }
];

const attendanceData = [
  { day: "Mon", present: 142, absent: 8, leave: 5 },
  { day: "Tue", present: 148, absent: 4, leave: 3 },
  { day: "Wed", present: 145, absent: 6, leave: 4 },
  { day: "Thu", present: 150, absent: 3, leave: 2 },
  { day: "Fri", present: 147, absent: 5, leave: 3 }
];

export default function EmployeesCorner() {
  const [liveStats, setLiveStats] = useState({
    onlineEmployees: 142,
    activeTraining: 23,
    pendingApprovals: 8,
    lastUpdate: "Just now"
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setLiveStats(prev => ({
        ...prev,
        onlineEmployees: prev.onlineEmployees + Math.floor(Math.random() * 6) - 3,
        activeTraining: Math.max(0, prev.activeTraining + Math.floor(Math.random() * 4) - 2),
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
              कर्मचारी कॉर्नर
            </h1>
            <FaFlag className="text-green-400 text-4xl" />
          </div>
          <p className="text-2xl font-semibold text-orange-200 mb-4">Employees Corner</p>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            सरकारी कर्मचारियों के लिए प्रशिक्षण, नीतियां, मान्यता कार्यक्रम और व्यावसायिक विकास के अवसर।
          </p>
          <p className="text-blue-200 max-w-4xl mx-auto leading-relaxed mt-2">
            Training, policies, recognition programs and professional development opportunities for government employees.
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
                <span className="text-sm text-gray-700">Online: {liveStats.onlineEmployees}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-700">Training: {liveStats.activeTraining}</span>
              <span className="text-sm text-gray-700">Approvals: {liveStats.pendingApprovals}</span>
              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <FaSync className="animate-spin" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Employee KPI Cards */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Total Employees</h3>
                <p className="text-3xl font-bold text-blue-600">165</p>
                <p className="text-xs text-green-600 mt-1">↗ +3 new joiners</p>
              </div>
              <FaUsers className="text-blue-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Training Completed</h3>
                <p className="text-3xl font-bold text-green-600">1,248</p>
                <p className="text-xs text-green-600 mt-1">↗ +15% this month</p>
              </div>
              <FaGraduationCap className="text-green-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Awards Given</h3>
                <p className="text-3xl font-bold text-purple-600">89</p>
                <p className="text-xs text-purple-600 mt-1">↗ +12 this quarter</p>
              </div>
              <FaAward className="text-purple-500 text-2xl" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-600 mb-2">Attendance Rate</h3>
                <p className="text-3xl font-bold text-orange-600">94.2%</p>
                <p className="text-xs text-green-600 mt-1">↗ +2.1% improvement</p>
              </div>
              <FaUserCheck className="text-orange-500 text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Employee Analytics Charts */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Training Progress Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaGraduationCap className="text-blue-600 mr-3" />
              प्रशिक्षण प्रगति | Training Progress
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={employeePerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="training" stroke="#3B82F6" strokeWidth={2} name="Training Sessions" />
                <Line type="monotone" dataKey="completed" stroke="#10B981" strokeWidth={2} name="Completed" />
                <Line type="monotone" dataKey="pending" stroke="#F59E0B" strokeWidth={2} name="Pending" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Department Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaUsers className="text-purple-600 mr-3" />
              विभाग वितरण | Department Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="employees"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Attendance Analytics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaCalendarAlt className="text-green-600 mr-3" />
              उपस्थिति विश्लेषण | Attendance Analysis
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="#10B981" name="Present" />
                <Bar dataKey="absent" fill="#EF4444" name="Absent" />
                <Bar dataKey="leave" fill="#F59E0B" name="On Leave" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <FaChartLine className="text-indigo-600 mr-3" />
              प्रदर्शन मेट्रिक्स | Performance Metrics
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-blue-800">Overall Performance</span>
                  <span className="text-lg font-bold text-blue-600">87.5%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '87.5%'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-green-600">92%</p>
                  <p className="text-xs text-green-700">Task Completion</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-purple-600">4.2/5</p>
                  <p className="text-xs text-purple-700">Avg Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employee Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "प्रशिक्षण और विकास",
              english: "Training & Development",
              desc: "साइबर सुरक्षा, वित्तीय अपराध जांच और अनुपालन प्रक्रियाओं में विशेष प्रशिक्षण कार्यक्रम। कौशल विकास और प्रमाणन पाठ्यक्रम।",
              englishDesc: "Specialized training programs in cyber security, financial crime investigation and compliance procedures. Skill development and certification courses.",
              icon: <FaGraduationCap />,
              gradient: "from-blue-500 to-indigo-600",
              bgGradient: "from-blue-50 to-indigo-50"
            },
            {
              title: "कर्मचारी कल्याण",
              english: "Employee Welfare",
              desc: "स्वास्थ्य बीमा, पेंशन योजना, छुट्टी नीति और कर्मचारी सहायता कार्यक्रम। कार्य-जीवन संतुलन और मानसिक स्वास्थ्य सहायता।",
              englishDesc: "Health insurance, pension schemes, leave policies and employee assistance programs. Work-life balance and mental health support.",
              icon: <FaUsers />,
              gradient: "from-green-500 to-emerald-600",
              bgGradient: "from-green-50 to-emerald-50"
            },
            {
              title: "प्रदर्शन मूल्यांकन",
              english: "Performance Evaluation",
              desc: "वार्षिक प्रदर्शन समीक्षा, लक्ष्य निर्धारण, करियर प्रगति योजना और उपलब्धि ट्रैकिंग सिस्टम।",
              englishDesc: "Annual performance reviews, goal setting, career progression planning and achievement tracking system.",
              icon: <FaChartLine />,
              gradient: "from-purple-500 to-pink-600",
              bgGradient: "from-purple-50 to-pink-50"
            },
            {
              title: "पुरस्कार और मान्यता",
              english: "Awards & Recognition",
              desc: "उत्कृष्ट कार्य प्रदर्शन, नवाचार, टीम वर्क और सेवा उत्कृष्टता के लिए पुरस्कार कार्यक्रम। मासिक और वार्षिक सम्मान।",
              englishDesc: "Award programs for excellent work performance, innovation, teamwork and service excellence. Monthly and annual honors.",
              icon: <FaAward />,
              gradient: "from-yellow-500 to-amber-600",
              bgGradient: "from-yellow-50 to-amber-50"
            },
            {
              title: "सुरक्षा प्रोटोकॉल",
              english: "Security Protocols",
              desc: "कार्यस्थल सुरक्षा नियम, डेटा सुरक्षा दिशानिर्देश, गोपनीयता नीति और साइबर सुरक्षा प्रशिक्षण।",
              englishDesc: "Workplace security rules, data protection guidelines, confidentiality policies and cyber security training.",
              icon: <FaShieldAlt />,
              gradient: "from-red-500 to-orange-600",
              bgGradient: "from-red-50 to-orange-50"
            },
            {
              title: "टीम सहयोग",
              english: "Team Collaboration",
              desc: "अंतर-विभागीय सहयोग, परियोजना प्रबंधन उपकरण, संचार प्लेटफॉर्म और सामूहिक कार्य वातावरण।",
              englishDesc: "Inter-departmental collaboration, project management tools, communication platforms and collaborative work environment.",
              icon: <FaHandshake />,
              gradient: "from-teal-500 to-cyan-600",
              bgGradient: "from-teal-50 to-cyan-50"
            }
          ].map((service, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${service.bgGradient} p-8 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-gray-200`}
            >
              <div className={`p-4 bg-gradient-to-r ${service.gradient} rounded-xl w-fit mx-auto mb-6 shadow-lg`}>
                <div className="text-white text-3xl">{service.icon}</div>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
                {service.title}
              </h2>
              <p className="text-lg font-semibold text-gray-600 mb-4 text-center">{service.english}</p>
              <div className="space-y-3">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {service.desc}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm italic border-t pt-3">
                  {service.englishDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-900 text-white py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-orange-400 mb-2">कर्मचारी सेवा प्रणाली</h3>
            <p className="text-blue-200 text-sm">Employee Service System</p>
          </div>
          <div className="border-t border-blue-700 pt-4">
            <p className="text-sm text-blue-200">
              © {new Date().getFullYear()} साइबर सुरक्षा विभाग | Cyber Security Department | 
              सरकारी कर्मचारी प्रबंधन प्रणाली | Government Employee Management System
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
