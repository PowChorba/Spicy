export default function VideosSkeleton() {
  
    return (
      <div className="bg-[#00000015] rounded-lg h-[250px] shadow-[10px_10px_5px_-6px_rgba(0,0,0,0.21)] mt-2 overflow-hidden flex flex-col justify-center items-center gap-2 relative">
        <div className="w-full h-2/3 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>
        </div>
        <div className="w-full h-1/3 bg-white p-2">
            <div className="bg-gray-400 w-full h-4"></div>
            <div className="absolute left-2 bottom-4 bg-gray-400 h-2 w-1/6"></div>
        </div>
      </div>
    );
  }