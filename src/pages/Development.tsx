// Development.tsx
interface VideoCardProps {
  videoId: string;
  title: string;
  subtitle: string;
  domain: string;
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
        alt="photu"
        className="w-full h-auto hover:opacity-90 transition-opacity"
      />
    </a>
    <div className="bg-white p-2 space-y-1">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-md font-medium">{subtitle}</p>
      <p className="text-xs font-semibold">{domain}</p>
    </div>
  </div>
);

const Development = () => {
  const videos = [
    {
      videoId: "WuiB5TAQOAM",
      title: "Hitesh Chaudhary",
      subtitle: "HTML + CSS",
      domain: "Frontend",
    },
    {
      videoId: "Hr5iLG7sUa0",
      title: "Chai aur Javascript",
      subtitle: "Beginner + Adv Javascript",
      domain: "Fullstack",
    },
    {
      videoId: "Ez8F0nW6S-w",
      title: "Shraddha Khapra",
      subtitle: "Git & Github",
      domain: "Open Source - Version Conrtol",
    },
    {
      videoId: "vz1RlUyrc3w",
      title: "Chai aur React",
      subtitle: "React.js",
      domain: "Frontend",
    },
    {
      videoId: "I3y1XHwBL6w",
      title: "Sheriyans Coding School",
      subtitle: "Node.js + Express.js + MongoDB",
      domain: "Backend",
    },
    {
      videoId: "KuCwrySinqI",
      title: "Harkirat Singh",
      subtitle: "Docker",
      domain: "Open Source - DevOps",
    },
    {
      videoId: "d56mG7DezGs",
      title: "Programming with Mosh",
      subtitle: "Typescript",
      domain: "FullStack",
    },
    {
      videoId: "OgS1ZWZItno",
      title: "Chai aur Next",
      subtitle: "Next.js",
      domain: "FullStack + Ai",
    },
  ];

  return(
    <div className="min-w-screen min-h-screen px-10 py-5">
        <h1 className="text-4xl font-giest font-semibold py-8">Best Playlists for Development</h1>
        <div className="flex flex-wrap justify-items-start gap-6">
           {videos.map((video)=>(
            <VideoCard key={video.videoId}{...video} />
           ))}
        </div>
    </div>
  );

};

export default Development;
