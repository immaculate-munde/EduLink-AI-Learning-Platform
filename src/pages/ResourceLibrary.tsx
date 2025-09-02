import React, { useState } from 'react';
import { 
  SearchIcon, FilterIcon, BookIcon, VideoIcon, 
  FileTextIcon, PlusIcon, XIcon 
} from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  type: string;
  subject: string;
  grade: string;
  author: string;
  date: string;
  url: string;
}

// Initial resources
const initialResources: Resource[] = [
  {
    id: 1,
    title: 'Algebra Fundamentals',
    type: 'pdf',
    subject: 'Mathematics',
    grade: 'Grade 9',
    author: 'Dr. Smith',
    date: '2023-05-15',
    url: '#'
  },
  {
    id: 2,
    title: 'Cell Structure and Function',
    type: 'video',
    subject: 'Biology',
    grade: 'Grade 10',
    author: 'Prof. Johnson',
    date: '2023-06-02',
    url: '#'
  },
  {
    id: 3,
    title: 'World War II Overview',
    type: 'document',
    subject: 'History',
    grade: 'Grade 11',
    author: 'Dr. Williams',
    date: '2023-04-18',
    url: '#'
  }
];

export function ResourceLibrary() {
  const [resources, setResources] = useState<Resource[]>(initialResources);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  const [filterGrade, setFilterGrade] = useState('');
  const [filterType, setFilterType] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [newResource, setNewResource] = useState<Partial<Resource>>({
    title: '',
    type: '',
    subject: '',
    grade: '',
    author: '',
    date: '',
    url: ''
  });

  // Extract unique subjects, grades, and types
  const subjects = [...new Set(resources.map(r => r.subject))];
  const grades = [...new Set(resources.map(r => r.grade))];
  const types = [...new Set(resources.map(r => r.type))];

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

  const handleAddResource = () => {
    if (!newResource.title || !newResource.type) return;

    const resourceToAdd: Resource = {
      id: resources.length + 1,
      title: newResource.title!,
      type: newResource.type!,
      subject: newResource.subject || 'General',
      grade: newResource.grade || 'N/A',
      author: newResource.author || 'Unknown',
      date: newResource.date || new Date().toISOString().split('T')[0],
      url: newResource.url || '#'
    };

    setResources([...resources, resourceToAdd]);
    setNewResource({});
    setShowModal(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resource Library
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse and search educational materials
          </p>
        </div>
        <button 
          onClick={() => setShowModal(true)} 
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
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
            <input 
              type="text" 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
              placeholder="Search resources..." 
              className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <select value={filterSubject} onChange={e => setFilterSubject(e.target.value)} className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Subjects</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>{subject}</option>
              ))}
            </select>
            <select value={filterGrade} onChange={e => setFilterGrade(e.target.value)} className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Grades</option>
              {grades.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
            <select value={filterType} onChange={e => setFilterType(e.target.value)} className="px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resources grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map(resource => (
          <div key={resource.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
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
                <p className="text-sm text-gray-500 dark:text-gray-400">Subject: <span className="text-gray-900 dark:text-white">{resource.subject}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Grade: <span className="text-gray-900 dark:text-white">{resource.grade}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Author: <span className="text-gray-900 dark:text-white">{resource.author}</span></p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date: <span className="text-gray-900 dark:text-white">{new Date(resource.date).toLocaleDateString()}</span></p>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <a href={resource.url} className="block w-full text-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md">
                  Download Resource
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No resources match your search criteria.</p>
        </div>
      )}

      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upload Resource</h2>
              <button onClick={() => setShowModal(false)}>
                <XIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="space-y-3">
              <input type="text" placeholder="Title" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.title || ''} onChange={e => setNewResource({ ...newResource, title: e.target.value })} />
              <input type="text" placeholder="Subject" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.subject || ''} onChange={e => setNewResource({ ...newResource, subject: e.target.value })} />
              <input type="text" placeholder="Grade" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.grade || ''} onChange={e => setNewResource({ ...newResource, grade: e.target.value })} />
              <select className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.type || ''} onChange={e => setNewResource({ ...newResource, type: e.target.value })}>
                <option value="">Select Type</option>
                <option value="pdf">PDF</option>
                <option value="video">Video</option>
                <option value="document">Document</option>
              </select>
              <input type="text" placeholder="Author" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.author || ''} onChange={e => setNewResource({ ...newResource, author: e.target.value })} />
              <input type="date" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.date || ''} onChange={e => setNewResource({ ...newResource, date: e.target.value })} />
              <input type="text" placeholder="Resource URL" className="w-full px-3 py-2 border rounded-md dark:bg-gray-700" value={newResource.url || ''} onChange={e => setNewResource({ ...newResource, url: e.target.value })} />
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={handleAddResource} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Resource</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
