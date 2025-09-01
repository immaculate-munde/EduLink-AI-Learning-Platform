import React, { useState } from 'react';
import { SearchIcon, FilterIcon, BookIcon, VideoIcon, FileTextIcon, PlusIcon } from 'lucide-react';
// Mock resource data
const resources = [{
  id: 1,
  title: 'Algebra Fundamentals',
  type: 'pdf',
  subject: 'Mathematics',
  grade: 'Grade 9',
  author: 'Dr. Smith',
  date: '2023-05-15',
  url: '#'
}, {
  id: 2,
  title: 'Cell Structure and Function',
  type: 'video',
  subject: 'Biology',
  grade: 'Grade 10',
  author: 'Prof. Johnson',
  date: '2023-06-02',
  url: '#'
}, {
  id: 3,
  title: 'World War II Overview',
  type: 'document',
  subject: 'History',
  grade: 'Grade 11',
  author: 'Dr. Williams',
  date: '2023-04-18',
  url: '#'
}, {
  id: 4,
  title: 'Introduction to Chemical Bonds',
  type: 'pdf',
  subject: 'Chemistry',
  grade: 'Grade 10',
  author: 'Prof. Brown',
  date: '2023-05-30',
  url: '#'
}, {
  id: 5,
  title: "Shakespeare's Macbeth Analysis",
  type: 'document',
  subject: 'Literature',
  grade: 'Grade 11',
  author: 'Dr. Davis',
  date: '2023-06-10',
  url: '#'
}, {
  id: 6,
  title: 'Geometry Proofs Explained',
  type: 'video',
  subject: 'Mathematics',
  grade: 'Grade 10',
  author: 'Prof. Miller',
  date: '2023-05-22',
  url: '#'
}, {
  id: 7,
  title: 'Photosynthesis Process',
  type: 'pdf',
  subject: 'Biology',
  grade: 'Grade 9',
  author: 'Dr. Wilson',
  date: '2023-06-05',
  url: '#'
}, {
  id: 8,
  title: 'Essay Writing Techniques',
  type: 'document',
  subject: 'English',
  grade: 'Grade 9',
  author: 'Prof. Taylor',
  date: '2023-04-25',
  url: '#'
}];
export function ResourceLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [filterType, setFilterType] = useState('');
  // Extract unique subjects, grades, and types for filters
  const subjects = [...new Set(resources.map(resource => resource.subject))];
  const grades = [...new Set(resources.map(resource => resource.grade))];
  const types = [...new Set(resources.map(resource => resource.type))];
  // Apply filters
  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = filterSubject === '' || resource.subject === filterSubject;
    const matchesGrade = filterGrade === '' || resource.grade === filterGrade;
    const matchesType = filterType === '' || resource.type === filterType;
    return matchesSearch && matchesSubject && matchesGrade && matchesType;
  });
  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <BookIcon className="h-5 w-5 text-red-500" />;
      case 'video':
        return <VideoIcon className="h-5 w-5 text-blue-500" />;
      case 'document':
        return <FileTextIcon className="h-5 w-5 text-green-500" />;
      default:
        return <FileTextIcon className="h-5 w-5 text-gray-500" />;
    }
  };
  return <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resource Library
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse and search educational materials
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          <span>Upload Resource</span>
        </button>
      </div>
      {/* Search and filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search resources..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex flex-wrap gap-3">
            <select value={filterSubject} onChange={e => setFilterSubject(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Subjects</option>
              {subjects.map(subject => <option key={subject} value={subject}>
                  {subject}
                </option>)}
            </select>
            <select value={filterGrade} onChange={e => setFilterGrade(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Grades</option>
              {grades.map(grade => <option key={grade} value={grade}>
                  {grade}
                </option>)}
            </select>
            <select value={filterType} onChange={e => setFilterType(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Types</option>
              {types.map(type => <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>)}
            </select>
          </div>
        </div>
      </div>
      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="mr-3 p-2 bg-gray-100 dark:bg-gray-700 rounded-md">
                  {getResourceIcon(resource.type)}
                </div>
                <div>
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                    {resource.type.toUpperCase()}
                  </span>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Subject:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {resource.subject}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Grade:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {resource.grade}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Author:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {resource.author}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    Date:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {new Date(resource.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href={resource.url} className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                  Download Resource
                </a>
              </div>
            </div>
          </div>)}
      </div>
      {filteredResources.length === 0 && <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No resources match your search criteria.
          </p>
        </div>}
    </div>;
}