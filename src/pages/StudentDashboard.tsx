import React, { useState } from 'react';
import { BookOpenIcon, AwardIcon, TrendingUpIcon, ClockIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock data
const mockCourses = [{
  id: 1,
  title: 'Algebra Fundamentals',
  subject: 'Mathematics',
  progress: 65,
  image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}, {
  id: 2,
  title: 'World History: Modern Era',
  subject: 'History',
  progress: 42,
  image: 'https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
}, {
  id: 3,
  title: 'Introduction to Biology',
  subject: 'Science',
  progress: 78,
  image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
}, {
  id: 4,
  title: 'English Literature',
  subject: 'Language Arts',
  progress: 22,
  image: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
}];
const badges = [{
  id: 1,
  name: 'Quick Learner',
  description: 'Completed 5 quizzes in one day',
  icon: <ClockIcon className="h-8 w-8 text-yellow-500" />
}, {
  id: 2,
  name: 'Math Whiz',
  description: 'Scored 100% on 3 math quizzes',
  icon: <TrendingUpIcon className="h-8 w-8 text-blue-500" />
}, {
  id: 3,
  name: 'Consistent Scholar',
  description: 'Maintained a 7-day streak',
  icon: <AwardIcon className="h-8 w-8 text-purple-500" />
}];
export function StudentDashboard() {
  const [selectedGrade, setSelectedGrade] = useState('Grade 9');
  const streak = 7; // Mock streak data
  const grades = ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'University Year 1', 'University Year 2', 'University Year 3', 'University Year 4'];
  return <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Student Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Welcome back! Continue your learning journey.
        </p>
      </div>
      {/* Grade selector and streak */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Select Your Grade
          </h2>
          <select value={selectedGrade} onChange={e => setSelectedGrade(e.target.value)} className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
            {grades.map(grade => <option key={grade} value={grade}>
                {grade}
              </option>)}
          </select>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Learning Streak
            </h2>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {streak} days
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{
              width: `${streak / 10 * 100}%`
            }}></div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {10 - streak} more days until next badge
            </p>
          </div>
        </div>
      </div>
      {/* Recommended courses */}
      <div className="mb-8">
        <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
          Recommended Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCourses.map(course => <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="h-36 bg-gray-300 dark:bg-gray-700 relative">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                  {course.subject}
                </span>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-1">
                  {course.title}
                </h3>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-1">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{
                  width: `${course.progress}%`
                }}></div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {course.progress}% complete
                  </p>
                </div>
                <div className="mt-4">
                  <Link to="/app/quiz" className="block text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                    Continue Learning
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Badges and achievements */}
      <div>
        <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
          Your Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {badges.map(badge => <div key={badge.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center">
              <div className="mr-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-full">
                {badge.icon}
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  {badge.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {badge.description}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}