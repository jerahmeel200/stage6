import React from 'react'
import Image from 'next/image'
import Logo2 from '../public/assets/video-repo/logo-2.png'
import { FiSearch } from 'react-icons/fi'
import Navbar from '@/components/shared/Navbar'
// import { Spinner } from '../../components/shared/Loader'
// import VideoCard from '../../components/shared/VideoCard'

function Videos() {
  const src =
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'

  const details = [
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
    {
      src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
      title: 'How to Create Facebook Ad Listing',
      date: '  SEPTEMBER 22, 2023',
    },
  ]
  return (
    <div>
      <div className="w-full min-h-screen overflow-y-hidden">
        <div className="w-full min-h-full mb-8 flex flex-col justify-between">
          <Navbar />

          <div className="w-full px-4 md:px-8 lg:px-16 py-5 flex flex-col md:flex-row items-start justify-between">
            <div className="w-full md:w-auto flex flex-col items-start justify-start">
              <h1 className="text-dark-100 ppB text-2xl md:text-3xl font-bold lg:text-4xl">
                Hello, John Mark
              </h1>
              <p className="text-white-400 text-xs md:text-sm ppReg">
                Here are your recorded videos
              </p>
            </div>
            <div
              style={{ border: '1px solid gray' }}
              className="w-full md:max-w-[250px]   border-gray-300 px-4 md:px-6 lg:px-8 flex items-center justify-start rounded-lg mt-4 md:mt-0"
            >
              <FiSearch size={15} color="gray" />
              <input
                type="text"
                className="w-full py-3 bg-transparent  border-gray-300 outline-none border-none px-3 text-xs md:text-sm text-white-400 font-ppReg"
                placeholder="Search for a video"
              />
            </div>
          </div>

          <div
            style={{
              borderTop: '1px solid lightgray',
              paddingTop: '50px',
            }}
            className="w-full px-4 lg:px-12 mt-9 flex flex-col gap-4 overflow-y-scroll"
          >
            <p className="text-gray-600 font-medium text-sm lg:text-base">
              Recent files
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {details.map((item, index) => (
                <div
                  key={index}
                  className="max-w-[500px] p-4 border border-gray-200 rounded-md"
                >
                  <video
                    controls
                    className="w-full h-[150px] lg:h-[200px] rounded-md bg-gray-300 object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <div className="flex justify-between mt-2 p-2">
                    <p className="text-black-700 font-medium text-sm lg:text-base">
                      {item.title}
                    </p>
                    <div className="flex">
                      <img
                        className="w-4 h-4 object-contain mr-2"
                        src="/assets/video-repo/link.png"
                        alt="Link"
                      />
                      <img
                        className="w-4 h-4 object-contain"
                        src="/assets/video-repo/more.png"
                        alt="More"
                      />
                    </div>
                  </div>
                  <p className="text-gray-400 opacity-50 text-xs lg:text-sm p-2">
                    {item.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos

// import React, { useState, useEffect, useContext } from 'react';
// import Image from 'next/image';
// import { FiSearch } from 'react-icons/fi';
// import Navbar from '@/components/shared/Navbar';
// import axios from 'axios';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { GlobalContext } from '../context/GlobalContext';
// import Link from 'next/link'

// function Videos() {
//   const { user } = useContext(GlobalContext);
//   const displayName = user?.displayName || 'user13';

//   const [videos, setVideos] = useState<[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(`https://www.cofucan.tech/srce/api/recording/user/${displayName}`);
//         const formattedVideos = response.data.map(video => ({
//           id: video.id,
//           username: video.title,
//           src: video.original_location, // Update this according to your API response
//           created_date: formatDate(video.created_date),
//         }));
//         setVideos(formattedVideos);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching videos:', error);
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, [user]);

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' };
//     const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
//     return formattedDate.toUpperCase();
//   };

//   /*   const src =
//       'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'

//     const details = [
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//       {
//         src: 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         title: 'How to Create Facebook Ad Listing',
//         date: '  SEPTEMBER 22, 2023',
//       },
//     ] */
//   return (

//     <div>
//         <div className="w-full h-screen overflow-y-hidden">
//           <div className="w-full h-full mb-8 flex flex-col justify-between">
//             <Navbar />
//             <div className="w-full px-[6em] py-5 flex items-start justify-between lg:flex-row md:flex-col sm:flex-col">
//               <div className="w-auto flex flex-col items-start justify-start">
//                 <h1 className="text-black-600 lg:text-[2em] sm:text-sm font-bold mb-3">
//                   Hello, John Mark
//                 </h1>
//                 <p className="text-white-400 text-[12px] color-black-600 ">
//                   Here are your recorded videos

//                 </p>
//               </div>
//               <div className="w-full max-w-[250px] bg-white-300 px-4 flex items-center justify-start border rounded-lg">
//                 <FiSearch size={15} color="#ccc" />
//                 <input
//                   type="text"
//                   className="w-full py-3 bg-transparent outline-none border-none px-3 text-[10px] text-white-400 font-ppReg"
//                   placeholder="Search for a video"
//                 />
//               </div>
//             </div>
//             <br />
//             <div className="w-full px-[6em] min-h-[15em] mt-9 flex justify-start flex-col gap-4 mb-5 overflow-y-scroll">
//               <p className="text-dark-200 font-ppReg text-[12px] ">Recent files</p>
//               <div className="w-full flex items-center justify-start flex-wrap gap-7">
//                 {videos.map((item, index) => (
//                   <Link key={index} href={`/videos/${item?.id}`} passHref>
//                     <div
//                       key={index}
//                       className="w-full p-4 max-w-[500px] max-h-[250px] h-full border-solid border-white-300 border-[2px] rounded-[10px] "
//                     >
//                       <video
//                         controls
//                         className="w-full h-[150px] rounded-[10px] bg-white-300 object-cover"
//                       >
//                         <source src={item.src} type="video/mp4" />
//                       </video>
//                       <div className="flex justify-between mt-3">
//                         <p className="text-dark-100 font-ppSB text-[15px] mt-1">
//                           {item.username}
//                         </p>
//                         <div className="flex">
//                           <Image
//                             src="/assets/video-repo/link.png"
//                             alt="stuff"
//                             width={20}
//                             height={20}
//                           />
//                           <Image
//                             src="/assets/video-repo/more.png"
//                             alt="stuff"
//                             width={20}
//                             height={20}
//                           />
//                         </div>
//                       </div>
//                       <p className="text-white-400 opacity-[.5] font-ppReg text-[11px]">
//                         {item?.created_date}
//                       </p>
//                     </div>

//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <ToastContainer
//             position="top-center" // Position the toast container at the bottom-center
//             autoClose={1500} // Close after 3 seconds (adjust as needed)
//             style={{
//               width: 'fit-content', // Adjust the width as needed
//               textAlign: 'center', // Center-align the container's content
//             }}
//           />
//         </div>
//     </div>
//   );

// }

// export default Videos
