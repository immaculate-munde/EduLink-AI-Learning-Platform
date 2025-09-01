import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, MessageCircleIcon, ThumbsUpIcon, ThumbsDownIcon, PlusIcon } from 'lucide-react';
// Mock forum data
const forumPosts = [{
  id: 1,
  title: 'Tips for solving quadratic equations?',
  content: "I'm having trouble understanding the different methods for solving quadratic equations. Can someone explain when to use factoring vs. the quadratic formula?",
  author: 'math_student',
  date: '2023-06-10',
  category: 'Mathematics',
  comments: 12,
  upvotes: 24,
  downvotes: 2
}, {
  id: 2,
  title: 'Book recommendations for AP Biology',
  content: "I'm preparing for the AP Biology exam and looking for good study resources. Any book recommendations that helped you prepare?",
  author: 'bio_learner',
  date: '2023-06-08',
  category: 'Science',
  comments: 8,
  upvotes: 16,
  downvotes: 0
}, {
  id: 3,
  title: 'How to write a compelling essay introduction?',
  content: "My teacher says my essay introductions are weak. How do you write an introduction that grabs the reader's attention?",
  author: 'essay_writer',
  date: '2023-06-05',
  category: 'English',
  comments: 15,
  upvotes: 32,
  downvotes: 3
}, {
  id: 4,
  title: 'Confused about mole calculations in chemistry',
  content: "I'm having trouble with stoichiometry and mole calculations. Can someone explain the concept in simple terms?",
  author: 'chem_student',
  date: '2023-06-03',
  category: 'Science',
  comments: 10,
  upvotes: 18,
  downvotes: 1
}, {
  id: 5,
  title: 'Historical events leading to World War I',
  content: "I'm working on a project about WWI and need help identifying the key events that led to the conflict. Any resources or summaries would be appreciated!",
  author: 'history_buff',
  date: '2023-05-30',
  category: 'History',
  comments: 7,
  upvotes: 21,
  downvotes: 2
}];
export function Forum() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  // Extract unique categories for filters
  const categories = [...new Set(forumPosts.map(post => post.category))];
  // Apply filters and sorting
  const filteredPosts = forumPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || post.category === filterCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'popular':
        return b.upvotes - b.downvotes - (a.upvotes - a.downvotes);
      case 'commented':
        return b.comments - a.comments;
      default:
        return 0;
    }
  });
  return <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Community Forum
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discuss and share knowledge with peers
          </p>
        </div>
        <Link to="#" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <PlusIcon className="h-5 w-5 mr-2" />
          <span>New Post</span>
        </Link>
      </div>
      {/* Search and filters */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search posts..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex space-x-4">
            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">All Categories</option>
              {categories.map(category => <option key={category} value={category}>
                  {category}
                </option>)}
            </select>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="popular">Most Popular</option>
              <option value="commented">Most Commented</option>
            </select>
          </div>
        </div>
      </div>
      {/* Posts list */}
      <div className="space-y-4">
        {filteredPosts.map(post => <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <Link to={`/app/forum/${post.id}`} className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                    {post.title}
                  </Link>
                  <div className="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>Posted by {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <ThumbsUpIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.upvotes}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsDownIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.downvotes}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">
                {post.content}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/app/forum/${post.id}`} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                  Read more
                </Link>
                <div className="flex items-center">
                  <MessageCircleIcon className="h-4 w-4 text-gray-500 dark:text-gray-400 mr-1" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.comments} comments
                  </span>
                </div>
              </div>
            </div>
          </div>)}
        {filteredPosts.length === 0 && <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow">
            <p className="text-gray-500 dark:text-gray-400">
              No posts match your search criteria.
            </p>
          </div>}
      </div>
    </div>;
}