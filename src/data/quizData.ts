export const quizData: Record<
  string,
  Record<string, Record<"easy" | "medium" | "hard", any[]>>
> = {
  grade1: {
    Math: {
      easy: [
        {
          question: "What is 2 + 3?",
          options: ["4", "5", "6", "7"],
          correctAnswer: "5",
        },
        {
          question: "Which number comes after 9?",
          options: ["8", "9", "10", "11"],
          correctAnswer: "10",
        },
      ],
      medium: [
        {
          question: "What is 10 - 4?",
          options: ["5", "6", "7", "8"],
          correctAnswer: "6",
        },
      ],
      hard: [
        {
          question: "What is 3 + 7 + 2?",
          options: ["11", "12", "13", "14"],
          correctAnswer: "12",
        },
      ],
    },
    Science: {
      easy: [
        {
          question: "What do we breathe in to live?",
          options: ["Oxygen", "Carbon dioxide", "Water", "Nitrogen"],
          correctAnswer: "Oxygen",
        },
      ],
      medium: [
        {
          question: "Which part of the plant is green?",
          options: ["Leaf", "Root", "Flower", "Stem"],
          correctAnswer: "Leaf",
        },
      ],
      hard: [
        {
          question: "What gas do plants give out?",
          options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
          correctAnswer: "Oxygen",
        },
      ],
    },
  },

  grade5: {
    Math: {
      easy: [
        {
          question: "What is 12 × 5?",
          options: ["50", "55", "60", "65"],
          correctAnswer: "60",
        },
      ],
      medium: [
        {
          question: "Find the area of a rectangle: length 10, width 4",
          options: ["14", "40", "24", "20"],
          correctAnswer: "40",
        },
      ],
      hard: [
        {
          question: "Simplify: 2/3 + 1/6",
          options: ["1/2", "5/6", "2/6", "3/6"],
          correctAnswer: "5/6",
        },
      ],
    },
    Science: {
      easy: [
        {
          question: "What force pulls objects to the Earth?",
          options: ["Magnetism", "Gravity", "Friction", "Electricity"],
          correctAnswer: "Gravity",
        },
      ],
      medium: [
        {
          question: "What planet is known as the Red Planet?",
          options: ["Earth", "Venus", "Mars", "Jupiter"],
          correctAnswer: "Mars",
        },
      ],
      hard: [
        {
          question: "What is the boiling point of water in Celsius?",
          options: ["50", "75", "100", "150"],
          correctAnswer: "100",
        },
      ],
    },
  },

  grade8: {
    Math: {
      easy: [
        {
          question: "Simplify: 5x + 2x",
          options: ["5x", "7x", "10x", "x²"],
          correctAnswer: "7x",
        },
      ],
      medium: [
        {
          question: "What is the slope of y = 3x + 4?",
          options: ["3", "4", "-3", "-4"],
          correctAnswer: "3",
        },
      ],
      hard: [
        {
          question: "Factorize: x² - 9",
          options: ["(x - 3)(x + 3)", "(x - 9)(x + 1)", "(x - 1)(x + 9)", "x(x - 9)"],
          correctAnswer: "(x - 3)(x + 3)",
        },
      ],
    },
    Science: {
      easy: [
        {
          question: "What is H₂O?",
          options: ["Hydrogen", "Oxygen", "Water", "Acid"],
          correctAnswer: "Water",
        },
      ],
      medium: [
        {
          question: "What is the main function of red blood cells?",
          options: ["Fight infection", "Carry oxygen", "Clot blood", "Digest food"],
          correctAnswer: "Carry oxygen",
        },
      ],
      hard: [
        {
          question: "What organelle is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
          correctAnswer: "Mitochondria",
        },
      ],
    },
  },

  grade12: {
    Math: {
      easy: [
        {
          question: "Differentiate: d/dx (x²)",
          options: ["x", "2x", "x²", "1"],
          correctAnswer: "2x",
        },
      ],
      medium: [
        {
          question: "Integrate: ∫ 2x dx",
          options: ["x² + C", "2x² + C", "x + C", "2x + C"],
          correctAnswer: "x² + C",
        },
      ],
      hard: [
        {
          question: "Solve: lim(x→0) (sinx / x)",
          options: ["0", "1", "∞", "Does not exist"],
          correctAnswer: "1",
        },
      ],
    },
    Science: {
      easy: [
        {
          question: "What is the atomic number of Carbon?",
          options: ["6", "12", "14", "8"],
          correctAnswer: "6",
        },
      ],
      medium: [
        {
          question: "What is Newton's 2nd Law?",
          options: ["F = ma", "E = mc²", "V = IR", "pV = nRT"],
          correctAnswer: "F = ma",
        },
      ],
      hard: [
        {
          question: "Name the process of making DNA from RNA.",
          options: ["Replication", "Transcription", "Translation", "Duplication"],
          correctAnswer: "Transcription",
        },
      ],
    },
  },
};
