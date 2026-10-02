export default function TechIcon({ name, className = "w-5 h-5 flex-shrink-0" }) {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M11.9 2c-3.1 0-5 .6-5 2.6v2h5v.7H4.3C2.3 7.3 1 8.8 1 11.4c0 2.8 1.5 3.9 3.5 3.9h1.7v-2.3c0-2.3 1.9-4.2 4.2-4.2h5.5c1.9 0 3.5-1.5 3.5-3.4V4.6c0-2-1.9-2.6-5-2.6h-2.5zm-1.8 1.4c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#387EB8"/>
        <path d="M12.1 22c3.1 0 5-.6 5-2.6v-2h-5v-.7h7.6c2 0 3.3-1.5 3.3-4.1 0-2.8-1.5-3.9-3.5-3.9h-1.7v2.3c0 2.3-1.9 4.2-4.2 4.2H8.1c-1.9 0-3.5 1.5-3.5 3.4v.8c0 2 1.9 2.6 5 2.6h2.5zm1.8-1.4c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFE052"/>
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes("javascript")) {
    return (
      <div className={`${className} bg-[#F7DF1E] rounded flex items-center justify-center font-bold text-[10px] text-black`}>
        JS
      </div>
    );
  }

  // Java
  if (normalized === "java") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M8.5 18.5c0 1.2 3.5 2 7 0M7 21c3.5 1 10.5 1 13-1" stroke="#EA2D2E" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M10 14c-.5-1.5 1-2.5 2-3.5s1-2.5 0-3.5M13 14c0-1.5 1.5-2.5 2-3.5s0-2.5-1-3.5" stroke="#5382A1" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" stroke="#00D8FF" strokeWidth="1.4"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" stroke="#00D8FF" strokeWidth="1.4"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" stroke="#00D8FF" strokeWidth="1.4"/>
        <circle cx="12" cy="12" r="2" fill="#00D8FF"/>
      </svg>
    );
  }

  // Flask
  if (normalized.includes("flask")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#24231F" strokeWidth="1.8">
        <path d="M10 2v5.5L4.5 18c-.8 1.4.2 3 1.8 3h11.4c1.6 0 2.6-1.6 1.8-3L14 7.5V2h-4z"/>
        <path d="M8 2h8M6 14h12" strokeLinecap="round"/>
      </svg>
    );
  }

  // Django
  if (normalized.includes("django")) {
    return (
      <div className={`${className} bg-[#092E20] rounded flex items-center justify-center font-serif font-bold text-[10px] text-white tracking-tighter`}>
        dj
      </div>
    );
  }

  // HTML5
  if (normalized.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2l2 18 7 2 7-2 2-18H3z" fill="#E34F26"/>
        <path d="M12 4v16l5.5-1.5 1.5-14.5H12z" fill="#EF652A"/>
        <path d="M12 7.5h4.5l-.2 2.5H12v2.5h4l-.4 4.5-3.6 1-3.6-1-.2-2.5h2l.1 1.2 1.7.5 1.7-.5.2-2.2H7.6l-.3-3.5H12V7.5z" fill="white"/>
      </svg>
    );
  }

  // CSS3
  if (normalized.includes("css")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M3 2l2 18 7 2 7-2 2-18H3z" fill="#1572B6"/>
        <path d="M12 4v16l5.5-1.5 1.5-14.5H12z" fill="#33A9DC"/>
        <path d="M12 7.5h4.5l-.4 3.5H12v2.5h3.8l-.4 4.5-3.4 1-3.4-1-.2-2.5h2l.1 1.2 1.5.4 1.5-.4.2-2H8l-.3-3.2H12V7.5z" fill="white"/>
      </svg>
    );
  }

  // REST APIs
  if (normalized.includes("rest") || normalized.includes("api")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#6E715C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="4"/>
        <path d="M7 10h10M7 14h6"/>
      </svg>
    );
  }

  // MySQL
  if (normalized.includes("mysql")) {
    return (
      <div className={`${className} bg-[#00758F] rounded flex items-center justify-center font-bold text-[8px] text-white`}>
        SQL
      </div>
    );
  }

  // SQLite
  if (normalized.includes("sqlite")) {
    return (
      <div className={`${className} bg-[#003B57] rounded flex items-center justify-center font-bold text-[7px] text-[#00D8FF]`}>
        SQLite
      </div>
    );
  }

  // OpenCV
  if (normalized.includes("opencv")) {
    return (
      <svg className={className} viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4.5" fill="#EA3829"/>
        <circle cx="7" cy="16" r="4.5" fill="#4B9B34"/>
        <circle cx="17" cy="16" r="4.5" fill="#1C5FB4"/>
        <circle cx="12" cy="13" r="2" fill="white"/>
      </svg>
    );
  }

  // NumPy
  if (normalized.includes("numpy")) {
    return (
      <div className={`${className} bg-[#013243] rounded flex items-center justify-center font-bold text-[8px] text-[#4DABCF]`}>
        NUM
      </div>
    );
  }

  // Pandas
  if (normalized.includes("pandas")) {
    return (
      <div className={`${className} bg-[#150458] rounded flex items-center justify-center font-bold text-[8px] text-[#FFD43B]`}>
        PD
      </div>
    );
  }

  // Matplotlib
  if (normalized.includes("matplotlib")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#11557C" strokeWidth="2">
        <path d="M4 19h16M7 16l4-8 4 5 4-7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  // Git
  if (normalized === "git") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21.6 10.9L13.1 2.4a1.8 1.8 0 0 0-2.5 0L8.8 4.2l3.2 3.2a2.1 2.1 0 0 1 2.7 2.7l3.1 3.1a2.1 2.1 0 1 1-1.3 1.2l-2.9-2.9v5.1a2.1 2.1 0 1 1-1.8 0V9.4L8.7 6.3 2.4 12.6a1.8 1.8 0 0 0 0 2.5l8.5 8.5a1.8 1.8 0 0 0 2.5 0l8.2-8.2a1.8 1.8 0 0 0 0-2.5z" fill="#F05032"/>
      </svg>
    );
  }

  // GitHub
  if (normalized.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#24292E">
        <path d="M12 2C6.47 2 2 6.47 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    );
  }

  // Postman
  if (normalized.includes("postman")) {
    return (
      <div className={`${className} bg-[#FF6C37] rounded-full flex items-center justify-center font-bold text-[8px] text-white`}>
        P
      </div>
    );
  }

  // VS Code
  if (normalized.includes("vs code") || normalized.includes("vscode")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <path d="M17.5 2L6.5 12l11 10 4-2V4l-4-2z" fill="#007ACC"/>
        <path d="M17.5 2L7 11.5 2 7.5l2-2 13.5-3.5z" fill="#1F9CF0"/>
        <path d="M17.5 22L7 12.5 2 16.5l2 2 13.5 3.5z" fill="#0065A9"/>
      </svg>
    );
  }

  // Claude
  if (normalized.includes("claude")) {
    return (
      <div className={`${className} bg-[#D97706] rounded flex items-center justify-center font-bold text-[8px] text-white`}>
        ✦
      </div>
    );
  }

  // Default fallback
  return (
    <div className={`${className} bg-[#6E715C]/20 text-[#6E715C] rounded flex items-center justify-center font-bold text-[10px]`}>
      •
    </div>
  );
}
