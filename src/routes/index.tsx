import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
	component: App,
});



export default function App() {
  const [videos] = useState([
    {
      id: 1,
      thumbnail: "/api/placeholder/400/300",
      title: "Video 1",
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/400/300",
      title: "Video 2",
    },
    {
      id: 3,
      thumbnail: "/api/placeholder/400/300",
      title: "Video 3",
    },
  ]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Watch Our Videos</h2>
        <p className="text-gray-600 text-center mb-6 sm:mb-10 max-w-2xl mx-auto text-sm sm:text-base">
          Dignissimux asperiores vitae velit veniam totam fuga molestias accusamus alias autem
          provident. Odit ab aliquam dolor eius.
        </p>

        {/* Responsive layout with breakpoints optimized for notebook/laptop */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          {videos.map((video) => (
            <div key={video.id} className="relative rounded-lg overflow-hidden shadow-md w-full sm:w-1/3 mb-4 sm:mb-0">
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full h-40 sm:h-48 lg:h-56 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-orange-500 hover:text-white transition-colors">
                  <Play size={22} className="text-orange-500 hover:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}