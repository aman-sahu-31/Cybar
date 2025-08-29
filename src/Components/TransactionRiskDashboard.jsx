import React, { useState, useEffect, useRef } from 'react';

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

  // Mock data for transactions
  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      const mockTransactions = [
        { id: 1, amount: 1250.75, currency: 'USD', merchant: 'TechCorp Inc.', category: 'Electronics', riskScore: 85, status: 'Pending', timestamp: '2023-07-15T14:30:00Z', location: 'New York, US', isFlagged: true },
        { id: 2, amount: 450.00, currency: 'EUR', merchant: 'FashionOutlet', category: 'Clothing', riskScore: 30, status: 'Approved', timestamp: '2023-07-15T12:15:00Z', location: 'Paris, FR', isFlagged: false },
        { id: 3, amount: 3200.50, currency: 'USD', merchant: 'LuxuryCars', category: 'Automotive', riskScore: 92, status: 'Pending', timestamp: '2023-07-15T10:45:00Z', location: 'Tokyo, JP', isFlagged: true },
        { id: 4, amount: 78.99, currency: 'GBP', merchant: 'BookWorld', category: 'Education', riskScore: 15, status: 'Approved', timestamp: '2023-07-15T09:20:00Z', location: 'London, UK', isFlagged: false },
        { id: 5, amount: 1250.00, currency: 'USD', merchant: 'TechDeals', category: 'Electronics', riskScore: 65, status: 'Pending', timestamp: '2023-07-14T16:50:00Z', location: 'Chicago, US', isFlagged: true },
        { id: 6, amount: 45.50, currency: 'USD', merchant: 'CoffeeShop', category: 'Food', riskScore: 10, status: 'Approved', timestamp: '2023-07-14T14:20:00Z', location: 'San Francisco, US', isFlagged: false },
        { id: 7, amount: 1980.00, currency: 'USD', merchant: 'JewelryStore', category: 'Luxury', riskScore: 88, status: 'Rejected', timestamp: '2023-07-14T11:30:00Z', location: 'Dubai, AE', isFlagged: true },
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

  // Format currency
  const formatCurrency = (amount, currency) => {
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Transaction Risk Analysis</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
              <i className="fas fa-sync-alt mr-2"></i>Refresh Data
            </button>
            <div className="relative">
              <button className="flex items-center text-gray-700">
                <i className="fas fa-user-circle text-2xl"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full p-3 bg-blue-100 text-blue-500">
                <i className="fas fa-exchange-alt text-xl"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{isLoading ? '--' : totalTransactions}</h2>
                <p className="text-gray-500">Total Transactions</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full p-3 bg-red-100 text-red-500">
                <i className="fas fa-exclamation-triangle text-xl"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{isLoading ? '--' : highRiskTransactions}</h2>
                <p className="text-gray-500">High Risk</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full p-3 bg-yellow-100 text-yellow-500">
                <i className="fas fa-flag text-xl"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{isLoading ? '--' : flaggedTransactions}</h2>
                <p className="text-gray-500">Flagged</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="rounded-full p-3 bg-green-100 text-green-500">
                <i className="fas fa-check-circle text-xl"></i>
              </div>
              <div className="ml-4">
                <h2 className="text-2xl font-bold">{isLoading ? '--' : approvalRate}%</h2>
                <p className="text-gray-500">Approval Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transactions List */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Recent Transactions</h2>
                <div className="flex space-x-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Filter by risk:</span>
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-red-500"
                        checked={riskFilters.high}
                        onChange={() => setRiskFilters({...riskFilters, high: !riskFilters.high})}
                      />
                      <span className="ml-2 text-sm">High</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-yellow-500"
                        checked={riskFilters.medium}
                        onChange={() => setRiskFilters({...riskFilters, medium: !riskFilters.medium})}
                      />
                      <span className="ml-2 text-sm">Medium</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input 
                        type="checkbox" 
                        className="form-checkbox text-green-500"
                        checked={riskFilters.low}
                        onChange={() => setRiskFilters({...riskFilters, low: !riskFilters.low})}
                      />
                      <span className="ml-2 text-sm">Low</span>
                    </label>
                  </div>
                  <select 
                    className="form-select block w-32 text-sm border-gray-300 rounded-md"
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value)}
                  >
                    <option value="24h">Last 24h</option>
                    <option value="7d">Last 7 days</option>
                    <option value="30d">Last 30 days</option>
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
                    <i className="fas fa-search text-gray-400 text-3xl mb-2"></i>
                    <p className="text-gray-500">No transactions match the selected filters</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Risk Analysis Sidebar */}
          <div className="space-y-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Risk Distribution</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>High Risk</span>
                    <span>{highRiskTransactions}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: `${(highRiskTransactions / totalTransactions) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Medium Risk</span>
                    <span>{transactions.filter(t => t.riskScore >= 30 && t.riskScore < 70).length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-500 h-2 rounded-full" 
                      style={{ width: `${(transactions.filter(t => t.riskScore >= 30 && t.riskScore < 70).length / totalTransactions) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Low Risk</span>
                    <span>{transactions.filter(t => t.riskScore < 30).length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: `${(transactions.filter(t => t.riskScore < 30).length / totalTransactions) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Risk by Category</h2>
              <div className="space-y-3">
                {['Electronics', 'Clothing', 'Automotive', 'Education', 'Food', 'Luxury'].map(category => {
                  const categoryTransactions = transactions.filter(t => t.category === category);
                  const avgRisk = categoryTransactions.length > 0 
                    ? Math.round(categoryTransactions.reduce((sum, t) => sum + t.riskScore, 0) / categoryTransactions.length) 
                    : 0;
                  
                  return (
                    <div key={category} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{category}</span>
                      <div className="flex items-center">
                        <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              avgRisk >= 70 ? 'bg-red-500' : avgRisk >= 30 ? 'bg-yellow-500' : 'bg-green-500'
                            }`} 
                            style={{ width: `${avgRisk}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium">{categoryTransactions.length} transactions</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                <button className="flex flex-col items-center justify-center p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition">
                  <i className="fas fa-ban text-lg mb-1"></i>
                  <span className="text-sm">Block Merchant</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-yellow-50 text-yellow-700 rounded-lg hover:bg-yellow-100 transition">
                  <i className="fas fa-user-check text-lg mb-1"></i>
                  <span className="text-sm">Verify User</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition">
                  <i className="fas fa-times-circle text-lg mb-1"></i>
                  <span className="text-sm">Reject Transaction</span>
                </button>
                <button className="flex flex-col items-center justify-center p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition">
                  <i className="fas fa-check-circle text-lg mb-1"></i>
                  <span className="text-sm">Approve Transaction</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TransactionRiskDashboard;