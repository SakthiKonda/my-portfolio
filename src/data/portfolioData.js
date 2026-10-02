export const portfolioData = {
  name: "JAYASAKTHI K R",
  headline: "Python full-stack developer, exploring AI.",
  bio: "I build responsive web applications and Python backends, and explore computer vision through hands-on projects. I'm a final-year Computer Science Engineering student seeking an entry-level software engineering or full-stack role.",
  location: "Madurai, Tamil Nadu",
  phone: "+91 9080518863",
  email: "jayasakthiramkumar@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  photo: "/hero_photo.jpg",

  education: {
    degree: "B.E. Computer Science & Engineering · Honours in Full Stack",
    institution: "SRM Madurai College for Engineering and Technology",
    graduationYear: "Graduating 2027",
    cgpa: "8.81 / 10.0",
    rank: "Department 1st Rank: 8.85 CGPA",
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "JavaScript"],
    },
    {
      category: "Web development",
      items: ["HTML5", "CSS3", "React", "Flask", "Django", "REST APIs"],
    },
    {
      category: "Data & computer vision",
      items: ["MySQL", "SQLite", "OpenCV", "NumPy", "Pandas", "Matplotlib"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Claude"],
    },
    {
      category: "Core CS Concepts",
      items: ["Object-Oriented Programming (OOP)", "Machine Learning Fundamentals", "Data Structures & Algorithms (DSA Basics)"],
    },
  ],

  projects: [
    {
      id: "01",
      title: "Resume Builder",
      description: "A web application with Google OAuth authentication, automated PDF résumé generation, and skill-gap analysis that suggests targeted improvements.",
      tech: "Python · Flask · Google OAuth · SQLite",
      github: "https://github.com/SakthiKonda/resume-builder-flask-google-oauth",
      live: null,
    },
    {
      id: "02",
      title: "Real-Time Object Detection",
      description: "Detects objects from live video with a pre-trained MobileNet-SSD model. Includes frame preprocessing and stream integration for real-time detection.",
      tech: "Python · MobileNet-SSD · OpenCV",
      github: "https://github.com/SakthiKonda/real-time-object-detection-mobilenet-ssd",
      live: null,
    },
    {
      id: "03",
      title: "VisionTrack",
      description: "A webcam-based face recognition application for registered individuals. Combines Haar Cascade detection, grayscale conversion, resizing, and threshold-based classification.",
      tech: "Python · Haar Cascade · OpenCV",
      github: "https://github.com/SakthiKonda/VisionTrack-Real-Time-Face-Recognition",
      live: null,
    },
  ],

  experience: [
    {
      role: "AI & Machine Learning Intern",
      company: "Averixis Solutions",
      period: "June – July 2026",
      location: "Bangalore",
      description: "Built OpenCV workflows with pre-trained deep learning models for image processing. Analyzed system performance and evaluated machine learning solutions.",
    },
    {
      role: "Python Development Intern",
      company: "Kevell Global Solutions",
      period: "June – July 2025",
      location: "Madurai",
      description: "Processed and cleaned datasets using NumPy and Pandas. Analyzed patterns and maintained data accuracy.",
    },
    {
      role: "Web Development Intern",
      company: "WebGapp",
      period: "January – February 2025",
      location: "Madurai",
      description: "Designed responsive interfaces with HTML, CSS, and JavaScript, focusing on structure, performance, and cross-browser consistency.",
    },
  ],

  certifications: [
    {
      title: "Machine Learning: Introduction for Everyone",
      issuer: "IBM",
      badge: "AI/ML",
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      badge: "Security",
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      badge: "Cloud",
    },
    {
      title: "Web Application Development",
      issuer: "SRM University",
      badge: "Web Dev",
    },
    {
      title: "Python for Data Science",
      issuer: "SRM University",
      badge: "Data Science",
    },
    {
      title: "Blockchain and Its Applications",
      issuer: "NPTEL",
      badge: "Blockchain",
    },
    {
      title: "Data Science Tools for AI Applications",
      issuer: "SRM University",
      badge: "AI Tools",
    },
  ],

  additional: {
    eventCoordination: "Coordinated and conducted technical events during college symposiums.",
    softSkills: ["Problem-solving", "Active collaboration", "Clear communication", "Adaptability"],
  },
};
