import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { User, Briefcase, Mail, LogOut } from 'lucide-react';

const FacultyDashboard = () => {
  const [facultyData, setFacultyData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFacultyData = async () => {
      try {
        const token = localStorage.getItem('facultyToken');
        if (!token) {
          navigate('/facultylogin');
          return;
        }

        const response = await axios.get('http://localhost:5000/api/faculty/me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setFacultyData(response.data);
      } catch (err) {
        localStorage.removeItem('facultyToken');
        navigate('/facultylogin');
      } finally {
        setLoading(false);
      }
    };

    fetchFacultyData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('facultyToken');
    navigate('/facultylogin');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Faculty Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-600 hover:text-red-800"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {facultyData && (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    Welcome, {facultyData.name}
                  </h2>
                  <p className="text-gray-600">{facultyData.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Role</p>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                    {facultyData.role.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                    <User className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {facultyData.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Designation</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {facultyData.designation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-gray-900">
                      {facultyData.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activities</h3>
              <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
                No recent activities
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default FacultyDashboard;
