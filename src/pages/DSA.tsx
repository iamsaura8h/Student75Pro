// import React from 'react';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface VideoCardProps {
  videoId: string;
  title: string;
  subtitle: string;
}

const VideoCard = ({ videoId, title, subtitle }: VideoCardProps) => (
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
      </div>
  </div>
);

const DSA = () => {
  const videos = [
    {
        videoId:'rZ41y93P2Qo',
        title:'Kunal Kushwaha',
        subtitle:'Java + DSA'
    },
    {
      videoId: 'F6mWUALRTcE',
      title: 'Coding with Minmer',
      subtitle: 'C++'
    },
    
    {
        videoId:'KLlXCFG5TnA',
        title:'Neetcode',
        subtitle:'Python'
    },{
        videoId:'WQoB2z67hvY',
        title:'Love Babbar',
        subtitle:'C++'
    }


  ];

  return (
    <>
    <Navbar />
    <div className="min-w-screen min-h-screen px-10 py-5 mb-10">
        <h1 className="text-4xl font-giest font-semibold py-8">Best DSA Playlists</h1>
      <div className="flex flex-wrap gap-6">
        {videos.map((video) => (
          <VideoCard key={video.videoId} {...video} />
        ))}
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default DSA;