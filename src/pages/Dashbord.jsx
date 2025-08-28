import React from "react";
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

export default function Dashboard() {
  // 🔹 Static Data
  const alertData = [
    { label: "Critical alerts", value: 245, color: "#b91c1c" },
    { label: "High level alerts", value: 39, color: "#22c55e" },
    { label: "Medium level alerts", value: 10, color: "#f59e0b" },
    { label: "Low level alerts", value: 50, color: "#4ade80" },
    { label: "Very low-level alerts", value: 220, color: "#ef4444" },
  ];

  const lineData = [
    { month: "Feb", Critical: 100, High: 80, Medium: 50, Low: 70, VeryLow: 120 },
    { month: "Mar", Critical: 150, High: 100, Medium: 70, Low: 90, VeryLow: 160 },
    { month: "Apr", Critical: 250, High: 200, Medium: 100, Low: 180, VeryLow: 220 },
    { month: "May", Critical: 180, High: 150, Medium: 90, Low: 130, VeryLow: 200 },
    { month: "Jun", Critical: 300, High: 250, Medium: 150, Low: 200, VeryLow: 400 },
  ];

  const pieData = [
    { name: "Critical", value: 19, color: "#b91c1c" },
    { name: "High", value: 21, color: "#f97316" },
    { name: "Medium", value: 20, color: "#facc15" },
    { name: "Low", value: 21, color: "#4ade80" },
    { name: "Very Low", value: 19, color: "#22c55e" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
        Transaction Monitoring Dashboard
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Multi-level alerts with transaction insights
      </p>

      {/* Last 10 Days Alerts */}
      <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">
        Last 10 Days Alerts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
        {alertData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition"
          >
            <p className="text-gray-600 font-medium mb-2">{item.label}</p>
            <h2 className="text-3xl font-bold" style={{ color: item.color }}>
              {item.value}
            </h2>
            <div className="h-2 mt-3 rounded-full" style={{ background: item.color }}></div>
          </div>
        ))}
      </div>

      {/* Bottom Section: Transactions + Alerts by Level */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">Transactions</h2>
          <p className="text-sm text-gray-500 mb-2">Total Transactions: 1400 (Year 2023)</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Critical" stroke="#b91c1c" strokeWidth={2} />
              <Line type="monotone" dataKey="High" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="Medium" stroke="#facc15" strokeWidth={2} />
              <Line type="monotone" dataKey="Low" stroke="#4ade80" strokeWidth={2} />
              <Line type="monotone" dataKey="VeryLow" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-blue-600">Alerts by Level</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
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
