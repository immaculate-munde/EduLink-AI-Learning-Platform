import React, { useState } from 'react';
import { SearchIcon, FilterIcon, UserIcon, BookOpenIcon } from 'lucide-react';
// Mock data
const students = [{
  id: 1,
  name: 'Alex Johnson',
  grade: 'Grade 9',
  averageScore: 87,
  courses: ['Algebra', 'Biology', 'History'],
  lastActive: 'Today'
}, {
  id: 2,
  name: 'Jamie Smith',
  grade: 'Grade 9',
  averageScore: 92,
  courses: ['Algebra', 'Chemistry', 'English'],
  lastActive: 'Yesterday'
}, {
  id: 3,
  name: 'Taylor Brown',
  grade: 'Grade 10',
  averageScore: 78,
  courses: ['Geometry', 'Biology', 'History'],
  lastActive: '2 days ago'
}, {
  id: 4,
  name: 'Jordan Lee',
  grade: 'Grade 10',
  averageScore: 95,
  courses: ['Geometry', 'Physics', 'Literature'],
  lastActive: 'Today'
}, {
  id: 5,
  name: 'Casey Miller',
  grade: 'Grade 9',
  averageScore: 82,
  courses: ['Algebra', 'Chemistry', 'History'],
  lastActive: '3 days ago'
}, {
  id: 6,
  name: 'Riley Wilson',
  grade: 'Grade 11',
  averageScore: 88,
  courses: ['Trigonometry', 'Physics', 'Literature'],
  lastActive: 'Today'
}, {
  id: 7,
  name: 'Quinn Davis',
  grade: 'Grade 11',
  averageScore: 73,
  courses: ['Trigonometry', 'Chemistry', 'English'],
  lastActive: 'Yesterday'
}, {
  id: 8,
  name: 'Avery Martinez',
  grade: 'Grade 10',
  averageScore: 90,
  courses: ['Geometry', 'Biology', 'Literature'],
  lastActive: 'Today'
}];
export function TeacherDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [filterCourse, setFilterCourse] = useState('');
  // Extract unique grades and courses for filters
  const grades = [...new Set(students.map(student => student.grade))];
  const courses = [...new Set(students.flatMap(student => student.courses))];
  // Apply filters
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade = filterGrade === '' || student.grade === filterGrade;
    const matchesCourse = filterCourse === '' || student.courses.includes(filterCourse);
    return matchesSearch && matchesGrade && matchesCourse;
  });
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Teacher Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor student progress and performance
        </p>
      </div>
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4">
              <UserIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Students
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {students.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-4">
              <BookOpenIcon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Active Courses
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {courses.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mr-4">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Average Score
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {Math.round(students.reduce((acc, student) => acc + student.averageScore, 0) / students.length)}
                %
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Search and filters */}
      <div className="mb-6 bg-white dark:bg-gray-800 rounded-lg shadow p-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search students..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex space-x-4">
            <div className="w-40">
              <select value={filterGrade} onChange={e => setFilterGrade(e.target.value)} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option value="">All Grades</option>
                {grades.map(grade => <option key={grade} value={grade}>
                    {grade}
                  </option>)}
              </select>
            </div>
            <div className="w-40">
              <select value={filterCourse} onChange={e => setFilterCourse(e.target.value)} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
                <option value="">All Courses</option>
                {courses.map(course => <option key={course} value={course}>
                    {course}
                  </option>)}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Student table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Grade
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Courses
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Average Score
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Last Active
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filteredStudents.map(student => <tr key={student.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {student.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {student.grade}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 dark:text-white">
                      {student.courses.join(', ')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${student.averageScore >= 90 ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' : student.averageScore >= 80 ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' : student.averageScore >= 70 ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'}`}>
                      {student.averageScore}%
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {student.lastActive}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}