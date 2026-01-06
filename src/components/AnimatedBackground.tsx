const AnimatedBackground = () => {
  return (
    <>
      {/* Floating Geometric Shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large Circle */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
        
        {/* Medium Circle */}
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-blue-300/20 rounded-full blur-2xl animate-float-medium" style={{ animationDelay: "2s" }}></div>
        
        {/* Small Circle */}
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float-fast" style={{ animationDelay: "1s" }}></div>
        
        {/* Square */}
        <div className="absolute top-2/3 right-1/3 w-40 h-40 bg-blue-200/15 blur-2xl animate-float-medium rotate-45" style={{ animationDelay: "3s" }}></div>
        
        {/* Another Circle */}
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-blue-300/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1.5s" }}></div>
        
        {/* Small accent */}
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-float-fast" style={{ animationDelay: "0.5s" }}></div>
      </div>

      {/* Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Floating Code Symbols */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 text-6xl text-blue-400 animate-float-code" style={{ animationDelay: "0s" }}>
          {"</>"}
        </div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-blue-300 animate-float-code" style={{ animationDelay: "2s" }}>
          {"{}"}
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl text-blue-400 animate-float-code" style={{ animationDelay: "1s" }}>
          {"()"}
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl text-blue-300 animate-float-code" style={{ animationDelay: "3s" }}>
          {"[]"}
        </div>
      </div>
    </>
  );
};

export default AnimatedBackground;
