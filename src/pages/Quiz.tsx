import React, { useState } from 'react';
import { CheckCircleIcon, XCircleIcon } from 'lucide-react';
// Mock quiz data
const quizQuestions = [{
  id: 1,
  question: 'What is the formula for the area of a circle?',
  options: ['A = πr²', 'A = 2πr', 'A = πd', 'A = r²'],
  correctAnswer: 'A = πr²',
  explanation: 'The area of a circle is calculated using the formula A = πr², where r is the radius of the circle.'
}, {
  id: 2,
  question: 'Which planet is known as the Red Planet?',
  options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
  correctAnswer: 'Mars',
  explanation: 'Mars is often called the Red Planet due to its reddish appearance, which is caused by iron oxide (rust) on its surface.'
}, {
  id: 3,
  question: "Who wrote 'Romeo and Juliet'?",
  options: ['Charles Dickens', 'Jane Austen', 'William Shakespeare', 'Mark Twain'],
  correctAnswer: 'William Shakespeare',
  explanation: 'Romeo and Juliet is a tragedy written by William Shakespeare early in his career, between 1591 and 1595.'
}, {
  id: 4,
  question: 'What is the chemical symbol for gold?',
  options: ['Go', 'Gd', 'Au', 'Ag'],
  correctAnswer: 'Au',
  explanation: "The chemical symbol for gold is Au, which comes from the Latin word 'aurum', meaning gold."
}, {
  id: 5,
  question: 'Which of these is NOT a primary color in painting?',
  options: ['Red', 'Blue', 'Green', 'Yellow'],
  correctAnswer: 'Green',
  explanation: 'In traditional color theory, the primary colors for painting are red, blue, and yellow. Green is a secondary color made by mixing blue and yellow.'
}];
export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const handleAnswerSelect = (answer: string) => {
    if (showResult) return; // Prevent changing answer after showing result
    setSelectedAnswer(answer);
    setAnswers({
      ...answers,
      [currentQuestion]: answer
    });
  };
  const handleCheckAnswer = () => {
    if (!selectedAnswer) return;
    setShowResult(true);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };
  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers({});
    setQuizCompleted(false);
  };
  // If quiz is completed, show results
  if (quizCompleted) {
    const percentage = Math.round(score / quizQuestions.length * 100);
    let message = '';
    if (percentage >= 90) {
      message = "Excellent! You've mastered this topic!";
    } else if (percentage >= 70) {
      message = "Great job! You're doing well!";
    } else if (percentage >= 50) {
      message = "Good effort! With a bit more practice, you'll improve!";
    } else {
      message = "Keep practicing! You'll get better with time.";
    }
    return <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Quiz Results
          </h1>
          <div className="text-center py-8">
            <div className="inline-block p-4 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
              <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                {score}/{quizQuestions.length}
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {percentage}%
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              {message}
            </p>
          </div>
          <div className="space-y-6 mb-8">
            {quizQuestions.map((q, index) => <div key={q.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <p className="font-medium text-gray-900 dark:text-white mb-2">
                  Question {index + 1}: {q.question}
                </p>
                <div className="ml-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    Your answer: {answers[index] || 'Not answered'}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Correct answer: {q.correctAnswer}
                  </p>
                  {answers[index] === q.correctAnswer ? <p className="text-green-600 dark:text-green-400 flex items-center mt-1">
                      <CheckCircleIcon className="h-4 w-4 mr-1" /> Correct
                    </p> : <p className="text-red-600 dark:text-red-400 flex items-center mt-1">
                      <XCircleIcon className="h-4 w-4 mr-1" /> Incorrect
                    </p>}
                </div>
              </div>)}
          </div>
          <div className="flex justify-center">
            <button onClick={handleRestartQuiz} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Take Another Quiz
            </button>
          </div>
        </div>
      </div>;
  }
  const question = quizQuestions[currentQuestion];
  return <div className="max-w-3xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Quiz
          </h1>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
        </div>
        <div className="mb-6">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{
            width: `${(currentQuestion + 1) / quizQuestions.length * 100}%`
          }}></div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            {question.question}
          </h2>
          <div className="space-y-3">
            {question.options.map(option => <div key={option} onClick={() => handleAnswerSelect(option)} className={`p-4 border rounded-md cursor-pointer transition-colors ${selectedAnswer === option ? showResult ? option === question.correctAnswer ? 'bg-green-100 dark:bg-green-900 border-green-500 dark:border-green-500' : 'bg-red-100 dark:bg-red-900 border-red-500 dark:border-red-500' : 'bg-blue-50 dark:bg-blue-900 border-blue-500 dark:border-blue-500' : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'}`}>
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 dark:text-gray-200">
                    {option}
                  </span>
                  {showResult && option === question.correctAnswer && <CheckCircleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />}
                  {showResult && selectedAnswer === option && option !== question.correctAnswer && <XCircleIcon className="h-5 w-5 text-red-600 dark:text-red-400" />}
                </div>
              </div>)}
          </div>
          {showResult && <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-md">
              <p className="text-gray-800 dark:text-gray-200">
                {question.explanation}
              </p>
            </div>}
        </div>
        <div className="flex justify-between">
          <button onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))} disabled={currentQuestion === 0 || showResult} className={`px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md font-medium text-gray-700 dark:text-gray-300 ${currentQuestion === 0 || showResult ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
            Previous
          </button>
          {!showResult ? <button onClick={handleCheckAnswer} disabled={!selectedAnswer} className={`px-6 py-2 bg-blue-600 text-white rounded-md font-medium ${!selectedAnswer ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}>
              Check Answer
            </button> : <button onClick={handleNextQuestion} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
              {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
            </button>}
        </div>
      </div>
    </div>;
}