interface VideoCardProps {
  videoId: string;
  title: string;
  subtitle: string;
  domain?: string; 
}

const VideoCard = ({ videoId, title, subtitle, domain }: VideoCardProps) => (
  <div className="w-full md:w-1/4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="w-full h-auto hover:opacity-90 transition-opacity"
      />
    </a>
    <div className="p-4 bg-white">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-xs font-semibold text-gray-600">{subtitle}</p>
      {domain && <p className="text-xs font-semibold text-gray-500">{domain}</p>}
    </div>
  </div>
);

const Resources = () => {
  const dsaVideos = [
    { videoId: "rZ41y93P2Qo", title: "Kunal Kushwaha", subtitle: "Java + DSA" },
    { videoId: "F6mWUALRTcE", title: "Coding with Minmer", subtitle: "C++" },
    { videoId: "KLlXCFG5TnA", title: "Neetcode", subtitle: "Python" },
    { videoId: "WQoB2z67hvY", title: "Love Babbar", subtitle: "C++" }
  ];

  const devVideos = [
    { videoId: "WuiB5TAQOAM", title: "Hitesh Chaudhary", subtitle: "HTML + CSS", domain: "Frontend" },
    { videoId: "Hr5iLG7sUa0", title: "Chai aur Javascript", subtitle: "Beginner + Adv Javascript", domain: "Fullstack" },
    { videoId: "Ez8F0nW6S-w", title: "Shraddha Khapra", subtitle: "Git & Github", domain: "Open Source - Version Control" },
    { videoId: "vz1RlUyrc3w", title: "Chai aur React", subtitle: "React.js", domain: "Frontend" },
    { videoId: "I3y1XHwBL6w", title: "Sheriyans Coding School", subtitle: "Node.js + Express.js + MongoDB", domain: "Backend" },
    { videoId: "KuCwrySinqI", title: "Harkirat Singh", subtitle: "Docker", domain: "Open Source - DevOps" },
    { videoId: "d56mG7DezGs", title: "Programming with Mosh", subtitle: "Typescript", domain: "FullStack" },
    { videoId: "OgS1ZWZItno", title: "Chai aur Next", subtitle: "Next.js", domain: "FullStack + AI" }
  ];

  return (
    <>
    <div>
        <h1 className="text-4xl text-[#ECF3F2] bg-gradient-to-t from-black to-gray-700 py-10 text-center">Resources</h1>
    </div>
      <div className="min-w-screen min-h-screen px-10 py-5 mb-10">
      <h1 className="text-4xl font-semibold py-8">Best Roadmaps</h1>
        <div className="flex flex-wrap gap-6">
          <a href="https://roadmap.sh/" target="_blank">
            <img
              src="roadmap.png"
              alt="Roadmap"
              className="w-auto h-32 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer"
            />
          </a>
          <a href="https://algomap.io/" target="_blank">
            <img
              src="algomap.png"
              alt="Algomap"
              className="w-auto h-32 rounded-lg transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer"
            />
          </a>
        </div>
        <h1 className="text-4xl font-semibold py-8">Best DSA Playlists</h1>
        <div className="flex flex-wrap gap-6">
          {dsaVideos.map((video) => (
            <VideoCard key={video.videoId} {...video} />
          ))}
        </div>

        <h1 className="text-4xl font-semibold py-8">Best Development Playlists</h1>
        <div className="flex flex-wrap gap-6">
          {devVideos.map((video) => (
            <VideoCard key={video.videoId} {...video} />
          ))}
        </div>

        
      </div>
      
    </>
  );
};

export default Resources;
