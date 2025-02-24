// import React from 'react';

// const PingMeLogo = () => {
//   return (
//     <div className="flex items-center justify-center gap-2">
//       <span className="relative">
//         <span className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 
//           bg-clip-text text-transparent animate-pulse">
//           Ping
//         </span>
//         <div className="absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full animate-ping" />
//       </span>
//       <span className="text-4xl font-extrabold text-purple-500">Me</span>
//       <div className="relative w-6 h-6">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
//           rounded-full animate-ping opacity-20" />
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
//           rounded-full animate-pulse" />
//       </div>
//     </div>
//   );
// };

// // Updated AuthImagePattern component with the new logo
// const AuthImagePattern = ({ title, subtitle }) => {
//   const shapes = [
//     'circle(50% at 50% 50%)',
//     'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
//     'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
//   ];

//   const colors = [
//     'from-blue-400/60 to-cyan-400/60',
//     'from-indigo-400/60 to-purple-400/60',
//     'from-sky-400/60 to-blue-500/60',
//   ];

//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-4 gap-4 mb-8">
//           {[...Array(16)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square relative transform hover:scale-110 transition-all duration-300
//                 ${i % 3 === 0 ? 'animate-ping' : ''}
//                 ${i % 3 === 1 ? 'animate-pulse' : ''}
//                 ${i % 3 === 2 ? 'animate-bounce' : ''}
//                 hover:z-10`}
//             >
//               <div 
//                 className={`absolute inset-0 bg-gradient-to-br ${colors[i % colors.length]} 
//                   backdrop-blur-sm transition-colors duration-500
//                   hover:shadow-lg hover:shadow-blue-500/50`}
//                 style={{
//                   clipPath: shapes[i % shapes.length],
//                   animationDelay: `${i * 0.2}s`
//                 }}
//               />
//               <div 
//                 className="absolute inset-0 bg-white/10 mix-blend-overlay"
//                 style={{
//                   clipPath: shapes[i % shapes.length],
//                   transform: `rotate(${i * 45}deg)`
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="mb-4">
//           <PingMeLogo />
//         </div>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;






import React, { useState } from 'react';

const Notification = () => (
  <div className="absolute -top-1 -right-1 flex space-x-0.5">
    <div className="h-2 w-2 bg-blue-500 rounded-full animate-ping" />
    <div className="h-2 w-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
    <div className="h-2 w-2 bg-cyan-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
  </div>
);

const PingMeLogo = () => {
  const [hovering, setHovering] = useState(false);

  return (
    <div 
      className="flex items-center justify-center gap-2 cursor-pointer group"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative">
        <span className="text-4xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 
          bg-clip-text text-transparent animate-pulse tracking-tight group-hover:tracking-wide transition-all duration-300">
          Ping
        </span>
        <Notification />
      </div>
      <span className="text-4xl font-black text-purple-500 group-hover:scale-110 transition-transform">Me</span>
      <div className="relative w-6 h-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
          rounded-full animate-ping opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 
          rounded-full animate-pulse" />
        {hovering && (
          <div className="absolute -top-8 right-0 bg-white/90 text-xs rounded-lg px-2 py-1 shadow-lg
            backdrop-blur-sm text-gray-700 whitespace-nowrap">
            What Are you Waiting For ?!
          </div>
        )}
      </div>
    </div>
  );
};

const AuthImagePattern = ({ title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const shapes = [
    'circle(50% at 50% 50%)',
    'polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
  ];

  const colors = [
    'from-blue-400/60 to-cyan-400/60',
    'from-indigo-400/60 to-purple-400/60',
    'from-sky-400/60 to-blue-500/60',
    'from-purple-400/60 to-pink-400/60',
  ];

  const messages = [
    '👋 Hey!',
    '📱 Connect',
    '💬 Chat',
    '🚀 Fast',
  ];

  return (
    <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-base-200 to-base-300 h-screen">
      <div className="w-96 text-center relative">
        <div className="absolute inset-0 bg-blue-500/5 animate-pulse rounded-2xl -z-10" />
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square relative transform transition-all duration-500
                ${activeIndex === i ? 'scale-110 z-10' : 'hover:scale-105'}
                ${i % 4 === 0 ? 'animate-ping' : ''}
                ${i % 4 === 1 ? 'animate-pulse' : ''}
                ${i % 4 === 2 ? 'animate-bounce' : ''}
                ${i % 4 === 3 ? 'animate-spin-slow' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${colors[i % colors.length]} 
                  backdrop-blur-sm transition-all duration-500
                  hover:shadow-lg hover:shadow-blue-500/50`}
                style={{
                  clipPath: shapes[i % shapes.length],
                  animationDelay: `${i * 0.2}s`,
                  transform: `rotate(${activeIndex === i ? 360 : 0}deg)`
                }}
              />
              <div 
                className="absolute inset-0 bg-white/10 mix-blend-overlay"
                style={{
                  clipPath: shapes[i % shapes.length],
                  transform: `rotate(${i * 45}deg)`
                }}
              />
              {activeIndex === i && (
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white/90 
                  text-xs rounded-lg px-2 py-1 shadow-lg backdrop-blur-sm text-gray-700 whitespace-nowrap">
                  {messages[i % messages.length]}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mb-3 bg-white/5 rounded-xl backdrop-blur-sm">
          <PingMeLogo />
        </div>
        <p className="text-base-content/60 text-sm bg-white/5 rounded-lg p-3 backdrop-blur-sm
          animate-pulse hover:animate-none transition-all">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;


