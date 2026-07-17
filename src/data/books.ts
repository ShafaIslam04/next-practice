import { Book } from "@/types/book";

export const books: Book[] = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/books/atomic-habits.jpg",
    genre: "Self Improvement",
    rating: 4.9,
    pages: 320,
    publishedYear: 2018,
    description:
      "A practical guide to building good habits, breaking bad ones, and achieving remarkable results through small daily improvements.",
    lessons: [
      "Small habits lead to remarkable results.",
      "Focus on systems rather than goals.",
      "Identity shapes long-term behavior."
    ]
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    image: "/books/deep-work.jpg",
    genre: "Productivity",
    rating: 4.8,
    pages: 304,
    publishedYear: 2016,
    description:
      "Learn how focused, distraction-free work helps you produce high-quality results in less time.",
    lessons: [
      "Eliminate distractions.",
      "Schedule focused work sessions.",
      "Depth creates value."
    ]
  },
  {
    id: 3,
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "/books/clean-code.jpg",
    genre: "Programming",
    rating: 4.9,
    pages: 464,
    publishedYear: 2008,
    description:
      "One of the most influential books on writing clean, readable, and maintainable software.",
    lessons: [
      "Write meaningful names.",
      "Keep functions small.",
      "Refactor continuously."
    ]
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    image: "/books/the-pragmatic-programmer.jpg",
    genre: "Programming",
    rating: 4.9,
    pages: 352,
    publishedYear: 1999,
    description:
      "A timeless guide that teaches practical thinking, problem solving, and professional software craftsmanship.",
    lessons: [
      "Take responsibility for your code.",
      "Automate repetitive tasks.",
      "Never stop learning."
    ]
  },
  {
    id: 5,
    title: "Refactoring",
    author: "Martin Fowler",
    image: "/books/refactoring.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 448,
    publishedYear: 2018,
    description:
      "Improve existing code without changing its behavior by applying proven refactoring techniques.",
    lessons: [
      "Improve code incrementally.",
      "Remove duplication.",
      "Refactor with tests."
    ]
  },
  {
    id: 6,
    title: "Design Patterns",
    author: "Erich Gamma et al.",
    image: "/books/design-patterns.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 416,
    publishedYear: 1994,
    description:
      "The famous Gang of Four book introducing reusable object-oriented design patterns.",
    lessons: [
      "Reuse proven solutions.",
      "Favor composition over inheritance.",
      "Design for flexibility."
    ]
  },
  {
    id: 7,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "/books/the-psychology-of-money.jpg",
    genre: "Finance",
    rating: 4.8,
    pages: 256,
    publishedYear: 2020,
    description:
      "Explains how behavior and mindset influence financial success more than technical knowledge.",
    lessons: [
      "Wealth is built through patience.",
      "Avoid emotional decisions.",
      "Saving is powerful."
    ]
  },
  {
    id: 8,
    title: "The Lean Startup",
    author: "Eric Ries",
    image: "/books/the-lean-startup.jpg",
    genre: "Business",
    rating: 4.7,
    pages: 336,
    publishedYear: 2011,
    description:
      "Learn how startups can innovate quickly through experimentation and validated learning.",
    lessons: [
      "Build, measure, learn.",
      "Validate assumptions early.",
      "Iterate continuously."
    ]
  },
  {
    id: 9,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    image: "/books/thinking-fast-and-slow.jpg",
    genre: "Psychology",
    rating: 4.8,
    pages: 512,
    publishedYear: 2011,
    description:
      "A fascinating exploration of how our minds make decisions using two different thinking systems.",
    lessons: [
      "Recognize cognitive biases.",
      "Slow thinking improves decisions.",
      "Question first impressions."
    ]
  },
  {
    id: 10,
    title: "The Power of Habit",
    author: "Charles Duhigg",
    image: "/books/the-power-of-habit.jpg",
    genre: "Self Improvement",
    rating: 4.8,
    pages: 371,
    publishedYear: 2012,
    description:
      "Discover the science behind habits and how they can be changed to improve personal and professional life.",
    lessons: [
      "Understand the habit loop.",
      "Replace bad habits with good ones.",
      "Consistency beats motivation."
    ]
  },
    {
    id: 11,
    title: "Code Complete",
    author: "Steve McConnell",
    image: "/books/code-complete.jpg",
    genre: "Programming",
    rating: 4.9,
    pages: 960,
    publishedYear: 2004,
    description:
      "A comprehensive guide to software construction, covering coding practices, design, debugging, and development techniques.",
    lessons: [
      "Write code for readability.",
      "Reduce software complexity.",
      "Continuous improvement makes better developers."
    ]
  },

  {
    id: 12,
    title: "The Clean Coder",
    author: "Robert C. Martin",
    image: "/books/the-clean-coder.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 256,
    publishedYear: 2011,
    description:
      "Learn the mindset, discipline, and professionalism required to become a respected software developer.",
    lessons: [
      "Be responsible for your work.",
      "Learn to say no professionally.",
      "Practice coding regularly."
    ]
  },

  {
    id: 13,
    title: "Working Effectively with Legacy Code",
    author: "Michael Feathers",
    image: "/books/working-effectively-with-legacy-code.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 456,
    publishedYear: 2004,
    description:
      "A practical guide for understanding, testing, and improving existing codebases without introducing bugs.",
    lessons: [
      "Write characterization tests first.",
      "Refactor safely.",
      "Understand before modifying."
    ]
  },

  {
    id: 14,
    title: "Don't Make Me Think",
    author: "Steve Krug",
    image: "/books/dont-make-me-think.jpg",
    genre: "UI/UX",
    rating: 4.8,
    pages: 216,
    publishedYear: 2014,
    description:
      "A classic introduction to web usability and user-centered interface design.",
    lessons: [
      "Keep interfaces simple.",
      "Reduce user effort.",
      "Design with clarity."
    ]
  },

  {
    id: 15,
    title: "Soft Skills",
    author: "John Sonmez",
    image: "/books/soft-skills.jpg",
    genre: "Career",
    rating: 4.7,
    pages: 504,
    publishedYear: 2014,
    description:
      "A complete career guide for software developers covering productivity, communication, finance, and personal growth.",
    lessons: [
      "Build your personal brand.",
      "Communicate effectively.",
      "Invest in lifelong learning."
    ]
  },

  {
    id: 16,
    title: "Essentialism",
    author: "Greg McKeown",
    image: "/books/essentialism.jpg",
    genre: "Productivity",
    rating: 4.8,
    pages: 272,
    publishedYear: 2014,
    description:
      "Focus on what truly matters by eliminating unnecessary tasks and commitments.",
    lessons: [
      "Do less but better.",
      "Learn to say no.",
      "Prioritize what matters most."
    ]
  },

  {
    id: 17,
    title: "Zero to One",
    author: "Peter Thiel",
    image: "/books/zero-to-one.jpg",
    genre: "Business",
    rating: 4.7,
    pages: 224,
    publishedYear: 2014,
    description:
      "Explores how entrepreneurs create innovative companies that build entirely new markets.",
    lessons: [
      "Think differently.",
      "Innovation creates monopolies.",
      "Build unique products."
    ]
  },

  {
    id: 18,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "/books/rich-dad-poor-dad.jpg",
    genre: "Finance",
    rating: 4.7,
    pages: 336,
    publishedYear: 1997,
    description:
      "A personal finance classic that challenges conventional thinking about money, investing, and wealth.",
    lessons: [
      "Assets generate wealth.",
      "Financial education is essential.",
      "Make money work for you."
    ]
  },

  {
    id: 19,
    title: "Start With Why",
    author: "Simon Sinek",
    image: "/books/start-with-why.jpg",
    genre: "Leadership",
    rating: 4.8,
    pages: 256,
    publishedYear: 2009,
    description:
      "Explains how great leaders inspire action by communicating purpose before products or services.",
    lessons: [
      "Purpose drives motivation.",
      "People buy why, not what.",
      "Lead through inspiration."
    ]
  },

  {
    id: 20,
    title: "The Mythical Man-Month",
    author: "Frederick P. Brooks Jr.",
    image: "/books/the-mythical-man-month.jpg",
    genre: "Software Engineering",
    rating: 4.7,
    pages: 336,
    publishedYear: 1975,
    description:
      "A timeless collection of essays on software project management and why adding more people doesn't always speed up development.",
    lessons: [
      "Communication costs grow with team size.",
      "Plan software realistically.",
      "Brooks' Law still matters."
    ]
  },
    {
    id: 21,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    image: "/books/introduction-to-algorithms.jpg",
    genre: "Computer Science",
    rating: 4.9,
    pages: 1312,
    publishedYear: 2009,
    description:
      "Commonly known as CLRS, this book is the definitive reference for algorithms and data structures.",
    lessons: [
      "Analyze time and space complexity.",
      "Master fundamental algorithms.",
      "Choose the right data structure."
    ]
  },

  {
    id: 22,
    title: "Cracking the Coding Interview",
    author: "Gayle Laakmann McDowell",
    image: "/books/cracking-the-coding-interview.jpg",
    genre: "Interview Preparation",
    rating: 4.9,
    pages: 706,
    publishedYear: 2015,
    description:
      "A comprehensive guide for preparing coding interviews with hundreds of problems and detailed solutions.",
    lessons: [
      "Practice consistently.",
      "Understand problem-solving patterns.",
      "Communicate your thought process."
    ]
  },

  {
    id: 23,
    title: "Head First Design Patterns",
    author: "Eric Freeman",
    image: "/books/head-first-design-patterns.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 694,
    publishedYear: 2020,
    description:
      "A beginner-friendly introduction to design patterns using practical examples and engaging visuals.",
    lessons: [
      "Favor composition over inheritance.",
      "Program to interfaces.",
      "Apply patterns when appropriate."
    ]
  },

  {
    id: 24,
    title: "Computer Networking: A Top-Down Approach",
    author: "James F. Kurose",
    image: "/books/computer-networking-a-top-down-approach.jpg",
    genre: "Computer Networks",
    rating: 4.8,
    pages: 864,
    publishedYear: 2021,
    description:
      "A modern textbook explaining computer networking from the application layer down to the physical layer.",
    lessons: [
      "Understand TCP/IP deeply.",
      "Learn how the web works.",
      "Master network protocols."
    ]
  },

  {
    id: 25,
    title: "Operating System Concepts",
    author: "Abraham Silberschatz",
    image: "/books/operating-system-concepts.jpg",
    genre: "Operating Systems",
    rating: 4.8,
    pages: 976,
    publishedYear: 2018,
    description:
      "A classic textbook covering processes, memory management, scheduling, virtualization, and file systems.",
    lessons: [
      "Understand process scheduling.",
      "Learn memory management.",
      "Explore operating system architecture."
    ]
  },

  {
    id: 26,
    title: "The Phoenix Project",
    author: "Gene Kim",
    image: "/books/the-phoenix-project.jpg",
    genre: "DevOps",
    rating: 4.8,
    pages: 432,
    publishedYear: 2018,
    description:
      "A novel that teaches DevOps principles through the story of rescuing a failing IT project.",
    lessons: [
      "Improve workflow efficiency.",
      "Reduce bottlenecks.",
      "Collaborate across teams."
    ]
  },

  {
    id: 27,
    title: "Accelerate",
    author: "Nicole Forsgren",
    image: "/books/accelerate.jpg",
    genre: "DevOps",
    rating: 4.8,
    pages: 288,
    publishedYear: 2018,
    description:
      "Research-backed insights into building high-performing software development teams.",
    lessons: [
      "Measure software delivery performance.",
      "Automate deployments.",
      "Build a culture of continuous improvement."
    ]
  },

  {
    id: 28,
    title: "Algorithms to Live By",
    author: "Brian Christian",
    image: "/books/algorithms-to-live-by.jpg",
    genre: "Computer Science",
    rating: 4.7,
    pages: 368,
    publishedYear: 2016,
    description:
      "Shows how computer science algorithms can improve everyday decision-making.",
    lessons: [
      "Use optimal stopping strategies.",
      "Balance exploration and exploitation.",
      "Think algorithmically."
    ]
  },

  {
    id: 29,
    title: "Think Again",
    author: "Adam Grant",
    image: "/books/think-again.jpg",
    genre: "Psychology",
    rating: 4.8,
    pages: 320,
    publishedYear: 2021,
    description:
      "Encourages readers to question assumptions, rethink beliefs, and embrace continuous learning.",
    lessons: [
      "Challenge your own opinions.",
      "Stay intellectually humble.",
      "Learning requires unlearning."
    ]
  },

  {
    id: 30,
    title: "Never Split the Difference",
    author: "Chris Voss",
    image: "/books/never-split-the-difference.jpg",
    genre: "Communication",
    rating: 4.9,
    pages: 288,
    publishedYear: 2016,
    description:
      "Former FBI negotiator Chris Voss shares practical negotiation techniques for business and everyday life.",
    lessons: [
      "Listen actively.",
      "Build trust before negotiating.",
      "Ask calibrated questions."
    ]
  },
    {
    id: 31,
    title: "The Intelligent Investor",
    author: "Benjamin Graham",
    image: "/books/the-intelligent-investor.jpg",
    genre: "Finance",
    rating: 4.9,
    pages: 640,
    publishedYear: 2006,
    description:
      "The classic guide to value investing that has influenced generations of investors, including Warren Buffett.",
    lessons: [
      "Invest with discipline.",
      "Think long-term.",
      "Manage risk before seeking returns."
    ]
  },

  {
    id: 32,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    image: "/books/sapiens.jpg",
    genre: "History",
    rating: 4.8,
    pages: 512,
    publishedYear: 2015,
    description:
      "A fascinating exploration of the history of humankind, from ancient ancestors to modern civilization.",
    lessons: [
      "Understand human evolution.",
      "Ideas shape civilizations.",
      "History explains the present."
    ]
  },

  {
    id: 33,
    title: "Homo Deus",
    author: "Yuval Noah Harari",
    image: "/books/homo-deus.jpg",
    genre: "Future & Technology",
    rating: 4.7,
    pages: 448,
    publishedYear: 2017,
    description:
      "Explores humanity's future, artificial intelligence, biotechnology, and the evolution of society.",
    lessons: [
      "Technology changes humanity.",
      "AI will reshape industries.",
      "Question future assumptions."
    ]
  },

  {
    id: 34,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    image: "/books/the-7-habits-of-highly-effective-people.jpg",
    genre: "Self Improvement",
    rating: 4.9,
    pages: 432,
    publishedYear: 2020,
    description:
      "A timeless framework for personal and professional effectiveness built around character and principles.",
    lessons: [
      "Be proactive.",
      "Begin with the end in mind.",
      "Seek win-win solutions."
    ]
  },

  {
    id: 35,
    title: "Make Time",
    author: "Jake Knapp & John Zeratsky",
    image: "/books/make-time.jpg",
    genre: "Productivity",
    rating: 4.7,
    pages: 304,
    publishedYear: 2018,
    description:
      "Practical strategies to focus on what truly matters instead of constantly reacting to distractions.",
    lessons: [
      "Choose one daily priority.",
      "Reduce digital distractions.",
      "Protect your attention."
    ]
  },

  {
    id: 36,
    title: "Hooked",
    author: "Nir Eyal",
    image: "/books/hooked.jpg",
    genre: "Product Design",
    rating: 4.7,
    pages: 256,
    publishedYear: 2014,
    description:
      "Explains how successful digital products create user habits through thoughtful product design.",
    lessons: [
      "Understand user behavior.",
      "Design engaging products.",
      "Build lasting habits ethically."
    ]
  },

  {
    id: 37,
    title: "Inspired",
    author: "Marty Cagan",
    image: "/books/inspired.jpg",
    genre: "Product Management",
    rating: 4.9,
    pages: 368,
    publishedYear: 2017,
    description:
      "A practical guide to building technology products customers truly love.",
    lessons: [
      "Solve real customer problems.",
      "Validate ideas early.",
      "Empower product teams."
    ]
  },

  {
    id: 38,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    image: "/books/the-design-of-everyday-things.jpg",
    genre: "UI/UX",
    rating: 4.8,
    pages: 368,
    publishedYear: 2013,
    description:
      "A classic book explaining how thoughtful design improves usability and reduces human error.",
    lessons: [
      "Design for humans.",
      "Provide clear feedback.",
      "Keep interfaces intuitive."
    ]
  },

  {
    id: 39,
    title: "The Manager's Path",
    author: "Camille Fournier",
    image: "/books/the-managers-path.jpg",
    genre: "Leadership",
    rating: 4.8,
    pages: 244,
    publishedYear: 2017,
    description:
      "A roadmap for engineers transitioning into technical leadership and management roles.",
    lessons: [
      "Develop leadership skills.",
      "Build strong engineering teams.",
      "Communicate effectively."
    ]
  },

  {
    id: 40,
    title: "AI Superpowers",
    author: "Kai-Fu Lee",
    image: "/books/ai-superpowers.jpg",
    genre: "Artificial Intelligence",
    rating: 4.7,
    pages: 304,
    publishedYear: 2018,
    description:
      "Examines the global AI race and its impact on business, society, and the future of work.",
    lessons: [
      "AI is transforming industries.",
      "Data fuels machine learning.",
      "Prepare for future careers."
    ]
  },
    {
    id: 41,
    title: "Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    author: "Aurélien Géron",
    image: "/books/hands-on-machine-learning.jpg",
    genre: "Machine Learning",
    rating: 4.9,
    pages: 856,
    publishedYear: 2022,
    description:
      "A practical guide to building machine learning and deep learning applications using Python and TensorFlow.",
    lessons: [
      "Understand supervised and unsupervised learning.",
      "Build neural networks with TensorFlow.",
      "Evaluate and improve ML models."
    ]
  },

  {
    id: 42,
    title: "Artificial Intelligence: A Modern Approach",
    author: "Stuart Russell & Peter Norvig",
    image: "/books/artificial-intelligence-a-modern-approach.jpg",
    genre: "Artificial Intelligence",
    rating: 4.9,
    pages: 1152,
    publishedYear: 2021,
    description:
      "The definitive textbook covering search, reasoning, planning, machine learning, and modern AI techniques.",
    lessons: [
      "Learn the foundations of AI.",
      "Understand intelligent agents.",
      "Study reasoning and decision making."
    ]
  },

  {
    id: 43,
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio & Aaron Courville",
    image: "/books/deep-learning.jpg",
    genre: "Artificial Intelligence",
    rating: 4.8,
    pages: 800,
    publishedYear: 2016,
    description:
      "A comprehensive introduction to deep learning theory, neural networks, and modern AI techniques.",
    lessons: [
      "Understand neural networks.",
      "Learn optimization techniques.",
      "Build strong AI foundations."
    ]
  },

  {
    id: 44,
    title: "Grokking Algorithms",
    author: "Aditya Bhargava",
    image: "/books/grokking-algorithms.jpg",
    genre: "Algorithms",
    rating: 4.9,
    pages: 256,
    publishedYear: 2016,
    description:
      "A beautifully illustrated introduction to algorithms and data structures for beginners.",
    lessons: [
      "Understand algorithms visually.",
      "Master recursion and graph algorithms.",
      "Analyze algorithm efficiency."
    ]
  },

  {
    id: 45,
    title: "System Design Interview",
    author: "Alex Xu",
    image: "/books/system-design-interview.jpg",
    genre: "System Design",
    rating: 4.9,
    pages: 322,
    publishedYear: 2020,
    description:
      "A practical guide to solving system design interview questions with scalable architecture patterns.",
    lessons: [
      "Design scalable systems.",
      "Understand load balancing.",
      "Learn distributed architecture."
    ]
  },

  {
    id: 46,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    image: "/books/designing-data-intensive-applications.jpg",
    genre: "System Design",
    rating: 4.9,
    pages: 616,
    publishedYear: 2017,
    description:
      "An essential resource for designing reliable, scalable, and maintainable distributed systems.",
    lessons: [
      "Understand distributed databases.",
      "Learn replication and partitioning.",
      "Build reliable applications."
    ]
  },

  {
    id: 47,
    title: "Building Microservices",
    author: "Sam Newman",
    image: "/books/building-microservices.jpg",
    genre: "Backend Development",
    rating: 4.8,
    pages: 616,
    publishedYear: 2021,
    description:
      "A practical guide to designing, deploying, and maintaining microservice-based architectures.",
    lessons: [
      "Design loosely coupled services.",
      "Manage service communication.",
      "Deploy microservices effectively."
    ]
  },

  {
    id: 48,
    title: "Domain-Driven Design",
    author: "Eric Evans",
    image: "/books/domain-driven-design.jpg",
    genre: "Software Engineering",
    rating: 4.8,
    pages: 560,
    publishedYear: 2003,
    description:
      "Introduces domain-driven design principles for modeling complex software systems.",
    lessons: [
      "Model real business domains.",
      "Create ubiquitous language.",
      "Separate business logic effectively."
    ]
  },

  {
    id: 49,
    title: "Release It!",
    author: "Michael T. Nygard",
    image: "/books/release-it.jpg",
    genre: "Software Engineering",
    rating: 4.8,
    pages: 376,
    publishedYear: 2018,
    description:
      "Learn techniques for building production-ready software that remains stable under real-world conditions.",
    lessons: [
      "Design resilient systems.",
      "Prepare for failures.",
      "Monitor production applications."
    ]
  },

  {
    id: 50,
    title: "Continuous Delivery",
    author: "Jez Humble & David Farley",
    image: "/books/continuous-delivery.jpg",
    genre: "DevOps",
    rating: 4.9,
    pages: 512,
    publishedYear: 2010,
    description:
      "A classic guide to automating software delivery and improving deployment reliability.",
    lessons: [
      "Automate testing.",
      "Deploy frequently and safely.",
      "Build reliable CI/CD pipelines."
    ]
  },
    {
    id: 51,
    title: "Kubernetes Up & Running",
    author: "Brendan Burns, Joe Beda & Kelsey Hightower",
    image: "/books/kubernetes-up-and-running.jpg",
    genre: "DevOps",
    rating: 4.8,
    pages: 368,
    publishedYear: 2022,
    description:
      "A practical guide to deploying, managing, and scaling containerized applications with Kubernetes.",
    lessons: [
      "Understand Kubernetes architecture.",
      "Deploy applications with Pods and Deployments.",
      "Scale applications reliably."
    ]
  },

  {
    id: 52,
    title: "Docker Deep Dive",
    author: "Nigel Poulton",
    image: "/books/docker-deep-dive.jpg",
    genre: "DevOps",
    rating: 4.8,
    pages: 480,
    publishedYear: 2023,
    description:
      "Learn Docker from fundamentals to advanced containerization concepts used in production.",
    lessons: [
      "Understand Docker images and containers.",
      "Use Docker Compose effectively.",
      "Deploy applications consistently."
    ]
  },

  {
    id: 53,
    title: "Learning React",
    author: "Alex Banks & Eve Porcello",
    image: "/books/learning-react.jpg",
    genre: "Frontend Development",
    rating: 4.7,
    pages: 350,
    publishedYear: 2024,
    description:
      "A beginner-friendly introduction to React, hooks, state management, and modern frontend development.",
    lessons: [
      "Build reusable React components.",
      "Understand Hooks.",
      "Manage application state."
    ]
  },

  {
    id: 54,
    title: "React Explained",
    author: "Zac Gordon",
    image: "/books/react-explained.jpg",
    genre: "Frontend Development",
    rating: 4.6,
    pages: 320,
    publishedYear: 2018,
    description:
      "Explains React concepts in a simple and approachable way for developers transitioning to modern frontend development.",
    lessons: [
      "Understand JSX.",
      "Learn component lifecycle.",
      "Think in components."
    ]
  },

  {
    id: 55,
    title: "Fullstack React",
    author: "Anthony Accomazzo",
    image: "/books/fullstack-react.jpg",
    genre: "Frontend Development",
    rating: 4.7,
    pages: 826,
    publishedYear: 2017,
    description:
      "A comprehensive guide to building complete web applications using React.",
    lessons: [
      "Build scalable React apps.",
      "Manage routing and state.",
      "Create reusable UI."
    ]
  },

  {
    id: 56,
    title: "Learning TypeScript",
    author: "Josh Goldberg",
    image: "/books/learning-typescript.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 550,
    publishedYear: 2022,
    description:
      "A modern guide to writing safer and more maintainable JavaScript using TypeScript.",
    lessons: [
      "Use static typing effectively.",
      "Build maintainable applications.",
      "Understand TypeScript fundamentals."
    ]
  },

  {
    id: 57,
    title: "Effective TypeScript",
    author: "Dan Vanderkam",
    image: "/books/effective-typescript.jpg",
    genre: "Programming",
    rating: 4.9,
    pages: 320,
    publishedYear: 2019,
    description:
      "Fifty-plus practical tips for improving TypeScript code quality and avoiding common mistakes.",
    lessons: [
      "Write expressive types.",
      "Avoid unnecessary any.",
      "Improve code maintainability."
    ]
  },

  {
    id: 58,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    image: "/books/eloquent-javascript.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 472,
    publishedYear: 2018,
    description:
      "A modern introduction to JavaScript programming through projects and interactive examples.",
    lessons: [
      "Master JavaScript fundamentals.",
      "Understand asynchronous programming.",
      "Develop problem-solving skills."
    ]
  },

  {
    id: 59,
    title: "You Don't Know JS Yet",
    author: "Kyle Simpson",
    image: "/books/you-dont-know-js-yet.jpg",
    genre: "Programming",
    rating: 4.9,
    pages: 320,
    publishedYear: 2020,
    description:
      "A deep dive into JavaScript's language mechanics, scope, closures, async programming, and more.",
    lessons: [
      "Understand JavaScript deeply.",
      "Master scope and closures.",
      "Learn async behavior."
    ]
  },

  {
    id: 60,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    image: "/books/javascript-the-good-parts.jpg",
    genre: "Programming",
    rating: 4.7,
    pages: 176,
    publishedYear: 2008,
    description:
      "A classic book highlighting the most powerful and elegant features of JavaScript.",
    lessons: [
      "Write clean JavaScript.",
      "Avoid language pitfalls.",
      "Prefer simplicity over complexity."
    ]
  },
    {
    id: 61,
    title: "Pro Git",
    author: "Scott Chacon & Ben Straub",
    image: "/books/pro-git.jpg",
    genre: "Version Control",
    rating: 4.9,
    pages: 458,
    publishedYear: 2014,
    description:
      "A comprehensive guide to Git, covering everything from basic commits to advanced branching, rebasing, and collaboration workflows.",
    lessons: [
      "Master Git fundamentals.",
      "Use branches effectively.",
      "Collaborate confidently with GitHub."
    ]
  },

  {
    id: 62,
    title: "Git Pocket Guide",
    author: "Richard E. Silverman",
    image: "/books/git-pocket-guide.jpg",
    genre: "Version Control",
    rating: 4.7,
    pages: 234,
    publishedYear: 2013,
    description:
      "A concise reference for everyday Git commands and best practices for software development teams.",
    lessons: [
      "Learn essential Git commands.",
      "Resolve merge conflicts.",
      "Maintain a clean commit history."
    ]
  },

  {
    id: 63,
    title: "The Linux Command Line",
    author: "William Shotts",
    image: "/books/the-linux-command-line.jpg",
    genre: "Operating Systems",
    rating: 4.8,
    pages: 504,
    publishedYear: 2019,
    description:
      "A practical introduction to using the Linux terminal for file management, scripting, and system administration.",
    lessons: [
      "Navigate Linux efficiently.",
      "Write shell scripts.",
      "Automate repetitive tasks."
    ]
  },

  {
    id: 64,
    title: "Linux Basics for Hackers",
    author: "OccupyTheWeb",
    image: "/books/linux-basics-for-hackers.jpg",
    genre: "Cybersecurity",
    rating: 4.7,
    pages: 264,
    publishedYear: 2018,
    description:
      "Introduces Linux concepts from a cybersecurity perspective, including networking, permissions, and scripting.",
    lessons: [
      "Understand Linux permissions.",
      "Learn networking basics.",
      "Use Linux tools effectively."
    ]
  },

  {
    id: 65,
    title: "Web Security for Developers",
    author: "Malcolm McDonald",
    image: "/books/web-security-for-developers.jpg",
    genre: "Cybersecurity",
    rating: 4.7,
    pages: 330,
    publishedYear: 2020,
    description:
      "Explains common web security vulnerabilities and practical ways to build secure web applications.",
    lessons: [
      "Protect against XSS attacks.",
      "Prevent SQL injection.",
      "Secure authentication systems."
    ]
  },

  {
    id: 66,
    title: "The Web Application Hacker's Handbook",
    author: "Dafydd Stuttard & Marcus Pinto",
    image: "/books/the-web-application-hackers-handbook.jpg",
    genre: "Cybersecurity",
    rating: 4.9,
    pages: 912,
    publishedYear: 2011,
    description:
      "An in-depth guide to understanding, testing, and securing modern web applications.",
    lessons: [
      "Understand web vulnerabilities.",
      "Think like a security tester.",
      "Build safer applications."
    ]
  },

  {
    id: 67,
    title: "The DevOps Handbook",
    author: "Gene Kim, Jez Humble, Patrick Debois & John Willis",
    image: "/books/the-devops-handbook.jpg",
    genre: "DevOps",
    rating: 4.9,
    pages: 480,
    publishedYear: 2021,
    description:
      "A practical handbook on implementing DevOps culture, automation, continuous integration, and deployment.",
    lessons: [
      "Improve deployment pipelines.",
      "Automate repetitive processes.",
      "Strengthen team collaboration."
    ]
  },

  {
    id: 68,
    title: "Clean Architecture",
    author: "Robert C. Martin",
    image: "/books/clean-architecture.jpg",
    genre: "Software Engineering",
    rating: 4.8,
    pages: 432,
    publishedYear: 2017,
    description:
      "Explains architectural principles for creating maintainable, scalable, and testable software systems.",
    lessons: [
      "Separate business logic from frameworks.",
      "Apply SOLID principles.",
      "Design maintainable systems."
    ]
  },

  {
    id: 69,
    title: "Patterns of Enterprise Application Architecture",
    author: "Martin Fowler",
    image: "/books/patterns-of-enterprise-application-architecture.jpg",
    genre: "Software Engineering",
    rating: 4.8,
    pages: 560,
    publishedYear: 2002,
    description:
      "A foundational book describing proven architectural patterns used in enterprise software systems.",
    lessons: [
      "Understand enterprise architecture.",
      "Organize complex applications.",
      "Reuse proven design patterns."
    ]
  },

  {
    id: 70,
    title: "The Software Engineer's Guidebook",
    author: "Gergely Orosz",
    image: "/books/the-software-engineers-guidebook.jpg",
    genre: "Career",
    rating: 4.9,
    pages: 440,
    publishedYear: 2023,
    description:
      "A modern career guide covering software engineering skills, promotions, leadership, communication, and career growth.",
    lessons: [
      "Grow beyond coding skills.",
      "Improve technical communication.",
      "Build a long-term engineering career."
    ]
  },
    {
    id: 71,
    title: "Structure and Interpretation of Computer Programs",
    author: "Harold Abelson & Gerald Jay Sussman",
    image: "/books/structure-and-interpretation-of-computer-programs.jpg",
    genre: "Computer Science",
    rating: 4.9,
    pages: 657,
    publishedYear: 1996,
    description:
      "A legendary computer science textbook that teaches programming through abstraction, recursion, and language design.",
    lessons: [
      "Master abstraction.",
      "Think recursively.",
      "Build strong programming fundamentals."
    ]
  },

  {
    id: 72,
    title: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    image: "/books/code-the-hidden-language-of-computer-hardware-and-software.jpg",
    genre: "Computer Science",
    rating: 4.9,
    pages: 400,
    publishedYear: 2022,
    description:
      "Explains how computers work from electricity and binary numbers to processors, operating systems, and software.",
    lessons: [
      "Understand binary representation.",
      "Learn how computers execute programs.",
      "Connect hardware with software."
    ]
  },

  {
    id: 73,
    title: "Computer Systems: A Programmer's Perspective",
    author: "Randal E. Bryant & David R. O'Hallaron",
    image: "/books/computer-systems-a-programmers-perspective.jpg",
    genre: "Computer Systems",
    rating: 4.9,
    pages: 1168,
    publishedYear: 2022,
    description:
      "A deep exploration of how software interacts with hardware, memory, processors, and operating systems.",
    lessons: [
      "Understand memory organization.",
      "Learn processor architecture.",
      "Write efficient software."
    ]
  },

  {
    id: 74,
    title: "The Art of Computer Programming",
    author: "Donald E. Knuth",
    image: "/books/the-art-of-computer-programming.jpg",
    genre: "Algorithms",
    rating: 5.0,
    pages: 3168,
    publishedYear: 2011,
    description:
      "One of the most influential works in computer science covering algorithms, mathematics, and programming techniques.",
    lessons: [
      "Develop algorithmic thinking.",
      "Study mathematical foundations.",
      "Appreciate elegant programming."
    ]
  },

  {
    id: 75,
    title: "The C Programming Language",
    author: "Brian W. Kernighan & Dennis M. Ritchie",
    image: "/books/the-c-programming-language.jpg",
    genre: "Programming",
    rating: 4.9,
    pages: 288,
    publishedYear: 1988,
    description:
      "The classic introduction to the C programming language written by its creators.",
    lessons: [
      "Master low-level programming.",
      "Understand memory management.",
      "Write efficient code."
    ]
  },

  {
    id: 76,
    title: "Programming Pearls",
    author: "Jon Bentley",
    image: "/books/programming-pearls.jpg",
    genre: "Programming",
    rating: 4.8,
    pages: 256,
    publishedYear: 1999,
    description:
      "A timeless collection of essays on problem solving, algorithms, and writing elegant software.",
    lessons: [
      "Solve problems systematically.",
      "Optimize algorithms.",
      "Write elegant programs."
    ]
  },

  {
    id: 77,
    title: "The Algorithm Design Manual",
    author: "Steven S. Skiena",
    image: "/books/the-algorithm-design-manual.jpg",
    genre: "Algorithms",
    rating: 4.9,
    pages: 730,
    publishedYear: 2020,
    description:
      "A practical guide to selecting, designing, and implementing efficient algorithms.",
    lessons: [
      "Choose appropriate algorithms.",
      "Analyze computational complexity.",
      "Solve real-world problems efficiently."
    ]
  },

  {
    id: 78,
    title: "Algorithms",
    author: "Robert Sedgewick & Kevin Wayne",
    image: "/books/algorithms.jpg",
    genre: "Algorithms",
    rating: 4.8,
    pages: 992,
    publishedYear: 2011,
    description:
      "An in-depth introduction to algorithms, data structures, graph processing, sorting, and searching.",
    lessons: [
      "Master classic algorithms.",
      "Understand graph processing.",
      "Improve coding efficiency."
    ]
  },

  {
    id: 79,
    title: "Compilers: Principles, Techniques, and Tools",
    author: "Alfred V. Aho, Monica S. Lam, Ravi Sethi & Jeffrey D. Ullman",
    image: "/books/compilers-principles-techniques-and-tools.jpg",
    genre: "Computer Science",
    rating: 4.8,
    pages: 1000,
    publishedYear: 2006,
    description:
      "Widely known as the 'Dragon Book', this classic explains compiler design from lexical analysis to code generation.",
    lessons: [
      "Understand compiler architecture.",
      "Learn parsing techniques.",
      "Translate source code into machine code."
    ]
  },

  {
    id: 80,
    title: "Introduction to the Theory of Computation",
    author: "Michael Sipser",
    image: "/books/introduction-to-the-theory-of-computation.jpg",
    genre: "Computer Science",
    rating: 4.8,
    pages: 504,
    publishedYear: 2012,
    description:
      "An accessible introduction to automata, formal languages, computability, and computational complexity.",
    lessons: [
      "Understand finite automata.",
      "Explore computability theory.",
      "Learn computational complexity."
    ]
  },
    {
    id: 81,
    title: "Node.js Design Patterns",
    author: "Mario Casciaro & Luciano Mammino",
    image: "/books/nodejs-design-patterns.jpg",
    genre: "Backend Development",
    rating: 4.9,
    pages: 662,
    publishedYear: 2020,
    description:
      "A comprehensive guide to building scalable, maintainable, and high-performance Node.js applications using proven design patterns.",
    lessons: [
      "Write modular Node.js applications.",
      "Understand asynchronous programming deeply.",
      "Apply design patterns effectively."
    ]
  },

  {
    id: 82,
    title: "Node.js in Action",
    author: "Mike Cantelon, Marc Harter & T.J. Holowaychuk",
    image: "/books/nodejs-in-action.jpg",
    genre: "Backend Development",
    rating: 4.7,
    pages: 416,
    publishedYear: 2017,
    description:
      "Learn how to build fast, scalable web applications and APIs using Node.js and its asynchronous architecture.",
    lessons: [
      "Build REST APIs.",
      "Understand the event loop.",
      "Develop scalable backend services."
    ]
  },

  {
    id: 83,
    title: "Designing Web APIs",
    author: "Brenda Jin, Saurabh Sahni & Amir Shevat",
    image: "/books/designing-web-apis.jpg",
    genre: "Backend Development",
    rating: 4.8,
    pages: 472,
    publishedYear: 2022,
    description:
      "A practical guide to designing consistent, secure, and developer-friendly web APIs.",
    lessons: [
      "Design intuitive APIs.",
      "Version APIs correctly.",
      "Handle authentication securely."
    ]
  },

  {
    id: 84,
    title: "PostgreSQL: Up and Running",
    author: "Regina Obe & Leo Hsu",
    image: "/books/postgresql-up-and-running.jpg",
    genre: "Database",
    rating: 4.7,
    pages: 296,
    publishedYear: 2023,
    description:
      "A hands-on introduction to PostgreSQL covering queries, indexing, performance, and administration.",
    lessons: [
      "Write efficient SQL queries.",
      "Understand indexing.",
      "Optimize database performance."
    ]
  },

  {
    id: 85,
    title: "SQL Performance Explained",
    author: "Markus Winand",
    image: "/books/sql-performance-explained.jpg",
    genre: "Database",
    rating: 4.8,
    pages: 205,
    publishedYear: 2017,
    description:
      "Explains how SQL databases execute queries and how indexing can dramatically improve performance.",
    lessons: [
      "Optimize SQL queries.",
      "Use indexes wisely.",
      "Understand execution plans."
    ]
  },

  {
    id: 86,
    title: "Redis in Action",
    author: "Josiah L. Carlson",
    image: "/books/redis-in-action.jpg",
    genre: "Database",
    rating: 4.7,
    pages: 352,
    publishedYear: 2013,
    description:
      "Learn how to use Redis for caching, queues, sessions, and real-time applications.",
    lessons: [
      "Use Redis as a cache.",
      "Build fast applications.",
      "Understand key-value databases."
    ]
  },

  {
    id: 87,
    title: "API Design Patterns",
    author: "JJ Geewax",
    image: "/books/api-design-patterns.jpg",
    genre: "Software Engineering",
    rating: 4.8,
    pages: 472,
    publishedYear: 2021,
    description:
      "Explores reusable patterns for designing maintainable, scalable, and consistent APIs.",
    lessons: [
      "Design reusable APIs.",
      "Handle versioning gracefully.",
      "Create consistent API contracts."
    ]
  },

  {
    id: 88,
    title: "Building Evolutionary Architectures",
    author: "Neal Ford, Rebecca Parsons & Patrick Kua",
    image: "/books/building-evolutionary-architectures.jpg",
    genre: "Software Architecture",
    rating: 4.8,
    pages: 218,
    publishedYear: 2017,
    description:
      "Learn how to design software architectures that can evolve as business requirements change.",
    lessons: [
      "Design adaptable systems.",
      "Balance trade-offs.",
      "Build evolutionary architectures."
    ]
  },

  {
    id: 89,
    title: "Fundamentals of Software Architecture",
    author: "Mark Richards & Neal Ford",
    image: "/books/fundamentals-of-software-architecture.jpg",
    genre: "Software Architecture",
    rating: 4.9,
    pages: 432,
    publishedYear: 2020,
    description:
      "A comprehensive introduction to software architecture styles, patterns, and engineering decisions.",
    lessons: [
      "Understand architecture styles.",
      "Evaluate technical trade-offs.",
      "Design scalable systems."
    ]
  },

  {
    id: 90,
    title: "Web Scalability for Startup Engineers",
    author: "Artur Ejsmont",
    image: "/books/web-scalability-for-startup-engineers.jpg",
    genre: "System Design",
    rating: 4.8,
    pages: 344,
    publishedYear: 2015,
    description:
      "A practical guide to designing web applications that can scale from thousands to millions of users.",
    lessons: [
      "Scale web applications.",
      "Reduce system bottlenecks.",
      "Prepare for growth."
    ]
  },
    {
    id: 91,
    title: "Learning GraphQL",
    author: "Alex Banks & Eve Porcello",
    image: "/books/learning-graphql.jpg",
    genre: "Backend Development",
    rating: 4.7,
    pages: 280,
    publishedYear: 2021,
    description:
      "A practical guide to building and consuming GraphQL APIs for modern web applications.",
    lessons: [
      "Understand GraphQL fundamentals.",
      "Build efficient APIs.",
      "Reduce over-fetching and under-fetching."
    ]
  },

  {
    id: 92,
    title: "RESTful Web APIs",
    author: "Leonard Richardson & Mike Amundsen",
    image: "/books/restful-web-apis.jpg",
    genre: "Backend Development",
    rating: 4.8,
    pages: 408,
    publishedYear: 2013,
    description:
      "A comprehensive guide to designing scalable and standards-based REST APIs.",
    lessons: [
      "Follow REST principles.",
      "Design resource-oriented APIs.",
      "Improve API consistency."
    ]
  },

  {
    id: 93,
    title: "Staff Engineer",
    author: "Will Larson",
    image: "/books/staff-engineer.jpg",
    genre: "Career",
    rating: 4.8,
    pages: 284,
    publishedYear: 2021,
    description:
      "Explores the responsibilities, influence, and career path of senior and staff software engineers.",
    lessons: [
      "Increase technical influence.",
      "Lead without formal authority.",
      "Make high-impact technical decisions."
    ]
  },

  {
    id: 94,
    title: "The Staff Engineer's Path",
    author: "Tanya Reilly",
    image: "/books/the-staff-engineers-path.jpg",
    genre: "Career",
    rating: 4.9,
    pages: 342,
    publishedYear: 2022,
    description:
      "A practical guide for engineers transitioning into senior technical leadership roles.",
    lessons: [
      "Grow technical leadership.",
      "Communicate effectively.",
      "Drive engineering excellence."
    ]
  },

  {
    id: 95,
    title: "High Output Management",
    author: "Andrew S. Grove",
    image: "/books/high-output-management.jpg",
    genre: "Leadership",
    rating: 4.8,
    pages: 272,
    publishedYear: 1995,
    description:
      "One of the most influential books on management, productivity, and building high-performing teams.",
    lessons: [
      "Measure meaningful output.",
      "Develop great teams.",
      "Lead with clarity."
    ]
  },

  {
    id: 96,
    title: "Measure What Matters",
    author: "John Doerr",
    image: "/books/measure-what-matters.jpg",
    genre: "Leadership",
    rating: 4.8,
    pages: 320,
    publishedYear: 2018,
    description:
      "Introduces the OKR (Objectives and Key Results) framework used by leading technology companies.",
    lessons: [
      "Set ambitious goals.",
      "Measure progress objectively.",
      "Align teams around outcomes."
    ]
  },

  {
    id: 97,
    title: "Good to Great",
    author: "Jim Collins",
    image: "/books/good-to-great.jpg",
    genre: "Business",
    rating: 4.8,
    pages: 320,
    publishedYear: 2001,
    description:
      "Explains why some companies achieve lasting success while others remain average.",
    lessons: [
      "Greatness comes from discipline.",
      "Build strong leadership.",
      "Focus on long-term success."
    ]
  },

  {
    id: 98,
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    image: "/books/the-hard-thing-about-hard-things.jpg",
    genre: "Business",
    rating: 4.8,
    pages: 304,
    publishedYear: 2014,
    description:
      "Shares honest lessons from building and leading technology companies through difficult challenges.",
    lessons: [
      "Lead during uncertainty.",
      "Make difficult decisions.",
      "Build resilient organizations."
    ]
  },

  {
    id: 99,
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    image: "/books/the-almanack-of-naval-ravikant.jpg",
    genre: "Self Improvement",
    rating: 4.9,
    pages: 242,
    publishedYear: 2020,
    description:
      "A collection of Naval Ravikant's ideas on wealth, happiness, learning, and decision-making.",
    lessons: [
      "Invest in yourself.",
      "Seek long-term wealth.",
      "Build leverage through knowledge."
    ]
  },

  {
    id: 100,
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    image: "/books/the-mom-test.jpg",
    genre: "Entrepreneurship",
    rating: 4.8,
    pages: 136,
    publishedYear: 2013,
    description:
      "Learn how to talk to customers and validate product ideas without asking leading questions.",
    lessons: [
      "Ask better customer questions.",
      "Validate ideas with evidence.",
      "Avoid false positive feedback."
    ]
  }
];
