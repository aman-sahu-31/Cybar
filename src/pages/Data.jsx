// src/pages/DataStatistics.jsx


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
} from "recharts";

const monthlyData = [
  { month: "Jan", transactions: 400, suspicious: 50 },
  { month: "Feb", transactions: 600, suspicious: 70 },
  { month: "Mar", transactions: 800, suspicious: 90 },
  { month: "Apr", transactions: 500, suspicious: 40 },
  { month: "May", transactions: 900, suspicious: 120 },
  { month: "Jun", transactions: 750, suspicious: 100 },
];

const pieData = [
  { name: "Fraudulent", value: 40 },
  { name: "Unusual", value: 30 },
  { name: "No Rationale", value: 20 },
  { name: "Others", value: 10 },
];

const COLORS = ["#EF4444", "#F59E0B", "#3B82F6", "#10B981"];

export default function Data() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">
        📊 Data & Statistics - Suspicious Transaction Detection
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-700">Total Transactions</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">35,420</p>
          </div>
        </div>
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-700">Suspicious Cases</h2>
            <p className="text-3xl font-bold text-red-600 mt-2">1,450</p>
          </div>
        </div>
        <div className="shadow-lg rounded-2xl border border-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-700">Resolved Cases</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">980</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Line Chart */}
        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Monthly Transaction Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="transactions" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="suspicious" stroke="#EF4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 shadow-lg rounded-2xl">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Types of Suspicious Transactions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
