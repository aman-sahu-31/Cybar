import React, { useState, useEffect, useRef } from 'react';
import { BarChart, AlertTriangle, CheckCircle, Flag, RefreshCw, User, Shield, TrendingUp, Clock, MapPin, CreditCard, Phone, Mail } from 'lucide-react';

const TransactionRiskDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [riskFilters, setRiskFilters] = useState({
    high: true,
    medium: true,
    low: true
  });
  const [timeFilter, setTimeFilter] = useState('24h');
  const [isLoading, setIsLoading] = useState(true);
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Mock data for Indian transactions
  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      const mockTransactions = [
        { id: 1, amount: 125000.75, currency: 'INR', merchant: 'टेक कॉर्प / TechCorp India', category: 'Electronics', riskScore: 85, status: 'Pending', timestamp: '2023-07-15T14:30:00Z', location: 'Mumbai, Maharashtra', isFlagged: true },
        { id: 2, amount: 4500.00, currency: 'INR', merchant: 'फैशन आउटलेट / Fashion Outlet', category: 'Clothing', riskScore: 30, status: 'Approved', timestamp: '2023-07-15T12:15:00Z', location: 'Delhi, NCR', isFlagged: false },
        { id: 3, amount: 320000.50, currency: 'INR', merchant: 'लक्जरी कार्स / Luxury Cars', category: 'Automotive', riskScore: 92, status: 'Pending', timestamp: '2023-07-15T10:45:00Z', location: 'Bangalore, Karnataka', isFlagged: true },
        { id: 4, amount: 789.99, currency: 'INR', merchant: 'बुक वर्ल्ड / BookWorld', category: 'Education', riskScore: 15, status: 'Approved', timestamp: '2023-07-15T09:20:00Z', location: 'Pune, Maharashtra', isFlagged: false },
        { id: 5, amount: 125000.00, currency: 'INR', merchant: 'टेक डील्स / TechDeals', category: 'Electronics', riskScore: 65, status: 'Pending', timestamp: '2023-07-14T16:50:00Z', location: 'Hyderabad, Telangana', isFlagged: true },
        { id: 6, amount: 450.50, currency: 'INR', merchant: 'कॉफी शॉप / Coffee Shop', category: 'Food', riskScore: 10, status: 'Approved', timestamp: '2023-07-14T14:20:00Z', location: 'Chennai, Tamil Nadu', isFlagged: false },
        { id: 7, amount: 198000.00, currency: 'INR', merchant: 'ज्वेलरी स्टोर / Jewelry Store', category: 'Luxury', riskScore: 88, status: 'Rejected', timestamp: '2023-07-14T11:30:00Z', location: 'Kolkata, West Bengal', isFlagged: true },
      ];
      setTransactions(mockTransactions);
      setIsLoading(false);
    }, 1500);
  }, []);

  // Filter transactions based on risk filters
  const filteredTransactions = transactions.filter(transaction => {
    if (transaction.riskScore >= 70 && riskFilters.high) return true;
    if (transaction.riskScore >= 30 && transaction.riskScore < 70 && riskFilters.medium) return true;
    if (transaction.riskScore < 30 && riskFilters.low) return true;
    return false;
  });

  // Calculate metrics
  const totalTransactions = transactions.length;
  const highRiskTransactions = transactions.filter(t => t.riskScore >= 70).length;
  const flaggedTransactions = transactions.filter(t => t.isFlagged).length;
  const approvalRate = totalTransactions > 0 
    ? Math.round((transactions.filter(t => t.status === 'Approved').length / totalTransactions) * 100) 
    : 0;

  // Risk score indicator component
  const RiskScoreIndicator = ({ score }) => {
    let bgColor = '';
    let width = '';
    if (score >= 70) {
      bgColor = 'bg-red-500';
      width = '85%';
    } else if (score >= 30) {
      bgColor = 'bg-yellow-500';
      width = '45%';
    } else {
      bgColor = 'bg-green-500';
      width = '15%';
    }

    return (
      <div className="flex items-center">
        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
          <div className={`h-2 rounded-full ${bgColor}`} style={{ width }}></div>
        </div>
        <span className="text-sm font-medium">{score}</span>
      </div>
    );
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let className = '';
    if (status === 'Approved') className = 'bg-green-100 text-green-800';
    else if (status === 'Pending') className = 'bg-yellow-100 text-yellow-800';
    else if (status === 'Rejected') className = 'bg-red-100 text-red-800';
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
        {status}
      </span>
    );
  };

  // Risk category class
  const getRiskClass = (score) => {
    if (score >= 70) return 'risk-high';
    if (score >= 30) return 'risk-medium';
    return 'risk-low';
  };

  // Format currency for Indian context
  const formatCurrency = (amount, currency) => {
    if (currency === 'INR') {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
    }
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency }).format(amount);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 via-white to-green-500 shadow-lg border-b-4 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Digital India
              </div>
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Cyber Suraksha
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-gray-800 to-green-600 bg-clip-text text-transparent mb-2">
              लेन-देन जोखिम विश्लेषण डैशबोर्ड
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
              Transaction Risk Analysis Dashboard
            </h2>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
              <RefreshCw className="w-4 h-4" />
              डेटा रीफ्रेश करें / Refresh Data
            </button>
            <div className="relative">
              <button className="flex items-center text-gray-700 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full p-3">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{isLoading ? '--' : totalTransactions}</h2>
                <p className="text-gray-600 text-sm">कुल लेन-देन / Total Transactions</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl shadow-lg p-6 border border-red-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-full p-3">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">{isLoading ? '--' : highRiskTransactions}</h2>
                <p className="text-gray-600 text-sm">उच्च जोखिम / High Risk</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 border border-amber-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3">
                <Flag className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{isLoading ? '--' : flaggedTransactions}</h2>
                <p className="text-gray-600 text-sm">फ्लैग किए गए / Flagged</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border border-green-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full p-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{isLoading ? '--' : approvalRate}%</h2>
                <p className="text-gray-600 text-sm">अनुमोदन दर / Approval Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transactions List */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
              <div className="px-6 py-4 bg-gradient-to-r from-orange-50 to-green-50 border-b border-gray-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <h2 className="text-lg font-medium text-gray-900">हाल के लेन-देन / Recent Transactions</h2>
                <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">जोखिम फिल्टर / Filter by risk:</span>
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-red-500 rounded"
                        checked={riskFilters.high}
                        onChange={() => setRiskFilters({...riskFilters, high: !riskFilters.high})}
                      />
                      <span className="ml-2 text-sm text-red-600 font-medium">उच्च / High</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-yellow-500 rounded"
                        checked={riskFilters.medium}
                        onChange={() => setRiskFilters({...riskFilters, medium: !riskFilters.medium})}
                      />
                      <span className="ml-2 text-sm text-yellow-600 font-medium">मध्यम / Medium</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-green-500 rounded"
                        checked={riskFilters.low}
                        onChange={() => setRiskFilters({...riskFilters, low: !riskFilters.low})}
                      />
                      <span className="ml-2 text-sm text-green-600 font-medium">कम / Low</span>
                    </label>
                  </div>
                  <select 
                    className="form-select block w-40 text-sm border-gray-300 rounded-lg bg-white shadow-sm"
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                  >
                    <option value="24h">पिछले 24 घंटे / Last 24h</option>
                    <option value="7d">पिछले 7 दिन / Last 7 days</option>
                    <option value="30d">पिछले 30 दिन / Last 30 days</option>
                  </select>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="px-6 py-4 animate-pulse">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                          <div className="h-3 bg-gray-200 rounded w-24"></div>
                        </div>
                        <div className="h-4 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  ))
                ) : filteredTransactions.length > 0 ? (
                  filteredTransactions.map(transaction => (
                    <div key={transaction.id} className={`px-6 py-4 ${getRiskClass(transaction.riskScore)}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex items-center">
                            <span className="font-medium text-gray-900">{transaction.merchant}</span>
                            {transaction.isFlagged && (
                              <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                                Flagged
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">
                            {formatDate(transaction.timestamp)} • {transaction.category} • {transaction.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{formatCurrency(transaction.amount, transaction.currency)}</div>
                          <div className="flex items-center justify-between mt-1">
                            <StatusBadge status={transaction.status} />
                            <RiskScoreIndicator score={transaction.riskScore} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-12 text-center">
                    <Shield className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">चयनित फिल्टर से कोई लेन-देन मेल नहीं खाता</p>
                    <p className="text-gray-400 text-sm">No transactions match the selected filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Risk Analysis Sidebar */}
          <div className="space-y-6">
            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                जोखिम वितरण / Risk Distribution
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span className="font-medium">उच्च जोखिम / High Risk</span>
                    <span className="font-bold text-red-600">{highRiskTransactions}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-pink-500 h-3 rounded-full shadow-sm" 
                      style={{ width: `${(highRiskTransactions / totalTransactions) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span className="font-medium">मध्यम जोखिम / Medium Risk</span>
                    <span className="font-bold text-amber-600">{transactions.filter(t => t.riskScore >= 30 && t.riskScore < 70).length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full shadow-sm" 
                      style={{ width: `${(transactions.filter(t => t.riskScore >= 30 && t.riskScore < 70).length / totalTransactions) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span className="font-medium">कम जोखिम / Low Risk</span>
                    <span className="font-bold text-green-600">{transactions.filter(t => t.riskScore < 30).length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full shadow-sm" 
                      style={{ width: `${(transactions.filter(t => t.riskScore < 30).length / totalTransactions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                <BarChart className="w-5 h-5 text-purple-600" />
                श्रेणी के अनुसार जोखिम / Risk by Category
              </h2>
              <div className="space-y-3">
                {['Electronics', 'Clothing', 'Automotive', 'Education', 'Food', 'Luxury'].map(category => {
                  const categoryTransactions = transactions.filter(t => t.category === category);
                  const avgRisk = categoryTransactions.length > 0 
                    ? Math.round(categoryTransactions.reduce((sum, t) => sum + t.riskScore, 0) / categoryTransactions.length) 
                    : 0;
                  
                  return (
                    <div key={category} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                      <span className="text-sm text-gray-700 font-medium">{category}</span>
                      <div className="flex items-center">
                        <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className={`h-2 rounded-full ${
                              avgRisk >= 70 ? 'bg-gradient-to-r from-red-500 to-pink-500' : 
                              avgRisk >= 30 ? 'bg-gradient-to-r from-amber-500 to-orange-500' : 
                              'bg-gradient-to-r from-green-500 to-emerald-500'
                            }`} 
                            style={{ width: `${avgRisk}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium text-gray-600">{categoryTransactions.length} लेन-देन</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                त्वरित कार्रवाई / Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-50 to-pink-50 text-red-700 rounded-lg hover:from-red-100 hover:to-pink-100 transition-all duration-300 border border-red-200">
                  <AlertTriangle className="w-5 h-5 mb-2" />
                  <span className="text-xs font-medium">व्यापारी ब्लॉक करें</span>
                  <span className="text-xs text-gray-500">Block Merchant</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 text-amber-700 rounded-lg hover:from-amber-100 hover:to-orange-100 transition-all duration-300 border border-amber-200">
                  <User className="w-5 h-5 mb-2" />
                  <span className="text-xs font-medium">उपयोगकर्ता सत्यापित करें</span>
                  <span className="text-xs text-gray-500">Verify User</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-red-50 to-pink-50 text-red-700 rounded-lg hover:from-red-100 hover:to-pink-100 transition-all duration-300 border border-red-200">
                  <Flag className="w-5 h-5 mb-2" />
                  <span className="text-xs font-medium">लेन-देन अस्वीकार करें</span>
                  <span className="text-xs text-gray-500">Reject Transaction</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 rounded-lg hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-200">
                  <CheckCircle className="w-5 h-5 mb-2" />
                  <span className="text-xs font-medium">लेन-देन अनुमोदित करें</span>
                  <span className="text-xs text-gray-500">Approve Transaction</span>
                </button>
              </div>
            </div>

            {/* Indian Government Resources */}
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 shadow-lg rounded-xl p-6 border-2 border-orange-200">
              <h2 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                सरकारी संसाधन / Government Resources
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-800">साइबर क्राइम हेल्पलाइन</span>
                  </div>
                  <p className="text-blue-600 font-bold text-lg">1930</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-gray-800">I4C Portal</span>
                  </div>
                  <p className="text-green-600 font-bold">cybercrime.gov.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransactionRiskDashboard;