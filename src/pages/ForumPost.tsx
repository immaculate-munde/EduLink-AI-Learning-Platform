import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeftIcon, ThumbsUpIcon, ThumbsDownIcon, MessageCircleIcon, FlagIcon, UserIcon } from 'lucide-react';
// Mock post data
const post = {
  id: 1,
  title: 'Tips for solving quadratic equations?',
  content: "I'm having trouble understanding the different methods for solving quadratic equations. Can someone explain when to use factoring vs. the quadratic formula? I understand that factoring is quicker when the equation is easily factorizable, but sometimes it's hard to tell when to use which method.\n\nAlso, are there any tricks for recognizing patterns that make factoring easier? Any help would be appreciated!",
  author: 'math_student',
  date: '2023-06-10',
  category: 'Mathematics',
  upvotes: 24,
  downvotes: 2
};
// Mock comments
const comments = [{
  id: 1,
  author: 'math_teacher',
  date: '2023-06-10',
  content: "Great question! Here's a general rule of thumb: Try factoring first if the coefficients are small integers. If you can't factor it easily within 30 seconds, use the quadratic formula. The quadratic formula always works, but factoring can be quicker when applicable.\n\nFor recognizing patterns, look for perfect squares (like x² + 10x + 25, which is (x+5)²) and the difference of squares (like x² - 16, which is (x+4)(x-4)).",
  upvotes: 15,
  downvotes: 0,
  isTeacher: true
}, {
  id: 2,
  author: 'algebra_fan',
  date: '2023-06-10',
  content: "I always start by checking if a = 1 (in ax² + bx + c). If a = 1, then I look for two numbers that multiply to give c and add to give b. If a ≠ 1, then I try to factor out the GCD first, or use the quadratic formula if that doesn't simplify things enough.",
  upvotes: 8,
  downvotes: 1,
  isTeacher: false
}, {
  id: 3,
  author: 'math_student',
  date: '2023-06-11',
  content: "Thank you both for the helpful explanations! The patterns for perfect squares and difference of squares are exactly what I needed. I'll practice identifying these patterns.",
  upvotes: 5,
  downvotes: 0,
  isTeacher: false
}];
export function ForumPost() {
  const {
    postId
  } = useParams();
  const [newComment, setNewComment] = useState('');
  const [commentError, setCommentError] = useState('');
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) {
      setCommentError('Comment cannot be empty');
      return;
    }
    // In a real app, this would send the comment to an API
    alert('Comment submitted! (This is just a prototype)');
    setNewComment('');
    setCommentError('');
  };
  return <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/app/forum" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to forum
        </Link>
      </div>
      {/* Post */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-6">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {post.title}
              </h1>
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
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
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <ThumbsUpIcon className="h-5 w-5 mr-1" />
                <span>{post.upvotes}</span>
              </button>
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                <ThumbsDownIcon className="h-5 w-5 mr-1" />
                <span>{post.downvotes}</span>
              </button>
              <button className="text-gray-500 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400">
                <FlagIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </div>
      {/* Comments section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          <div className="flex items-center">
            <MessageCircleIcon className="h-5 w-5 mr-2" />
            <span>Comments ({comments.length})</span>
          </div>
        </h2>
        {/* Comment form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <form onSubmit={handleSubmitComment}>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Add a comment
              </label>
              <textarea id="comment" rows={3} value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="Share your thoughts..." className={`w-full px-3 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${commentError ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'}`}></textarea>
              {commentError && <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {commentError}
                </p>}
            </div>
            <div className="flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Post Comment
              </button>
            </div>
          </form>
        </div>
        {/* Comments list */}
        <div className="space-y-4">
          {comments.map(comment => <div key={comment.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {comment.author}
                      </span>
                      {comment.isTeacher && <span className="ml-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded">
                          Teacher
                        </span>}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(comment.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <ThumbsUpIcon className="h-4 w-4 mr-1" />
                    <span>{comment.upvotes}</span>
                  </button>
                  <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <ThumbsDownIcon className="h-4 w-4 mr-1" />
                    <span>{comment.downvotes}</span>
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
                  {comment.content}
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}