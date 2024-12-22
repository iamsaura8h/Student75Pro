// import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ChevronRight, Code, Globe, Database } from 'lucide-react';

const RoadmapLinks = () => {
  const roadmaps = [
    {
      title: "Data Structures & Algorithms",
      description: "Master fundamental DSA concepts and problem-solving techniques",
      icon: <Code className="w-6 h-6" />,
      links: [
        { text: "Arrays & Strings", url: "#arrays" },
        { text: "Linked Lists & Trees", url: "#linked-lists" },
        { text: "Sorting Algorithms", url: "#sorting" },
        { text: "Dynamic Programming", url: "#dp" },
        { text: "Graph Algorithms", url: "#graphs" }
      ]
    },
    {
      title: "Web Development",
      description: "Complete guide to modern full-stack development",
      icon: <Globe className="w-6 h-6" />,
      links: [
        { text: "HTML & CSS Fundamentals", url: "#html-css" },
        { text: "JavaScript Essentials", url: "#javascript" },
        { text: "React.js Deep Dive", url: "#react" },
        { text: "Node.js & Express", url: "#node" },
        { text: "MongoDB Basics", url: "#mongodb" }
      ]
    },
    {
      title: "MERN Stack",
      description: "Comprehensive path to full-stack JavaScript development",
      icon: <Database className="w-6 h-6" />,
      links: [
        { text: "MongoDB Atlas Setup", url: "#mongodb-setup" },
        { text: "Express.js REST APIs", url: "#express-apis" },
        { text: "React Components & Hooks", url: "#react-advanced" },
        { text: "Node.js Backend Development", url: "#node-backend" },
        { text: "Full Stack Integration", url: "#integration" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {roadmaps.map((section) => (
        <Card key={section.title} className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="flex items-center space-x-2">
              {section.icon}
              <CardTitle className="text-xl">{section.title}</CardTitle>
            </div>
            <CardDescription>{section.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.url}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 hover:underline p-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RoadmapLinks;