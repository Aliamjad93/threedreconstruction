// import React from 'react'
// import { AiFillFacebook,AiFillYoutube,AiOutlineLinkedin } from "react-icons/ai";

// export default function Index() {
//   return (
    
//     <div className='bg-slate-800 min-h-screen py-3 px-14 text-white' >
//       <div className=' flex items-center justify-between'>
//         <h1 className='text-xl font-bold'>Next Js</h1>

//         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-md'>CV</button>
//         </div>
//       {/* #header end */}
       
        
      
      

//       <div className=' mt-5 w-5/12 mx-auto text-center'>
//       <h2 className='text-2xl text-blue-400  font-bold'>John Wick</h2>
//       <h3 className='font-bold'>Actor and Artist</h3>
//       <p>Install tailwindcss and its peer dependencies via npm, <br></br> and then run the init command to generate both tailwind.config.js and postcss.config.js and my name is ali amjad student of data science.</p>
      

//       <div className=' flex space-x-10 justify-center   mt-2'>      
//         <AiFillFacebook className='text-xl' />
//         <AiFillYoutube className='text-xl'/>
//         <AiOutlineLinkedin className='text-xl'/>
//       </div>
      
//       <img src="/assets/download.jpg" className='mx-auto h-32 w-32 rounded-full mt-3'></img>

      
        


      


//         </div>
//         <h1 className='font-bold mt-5'>Services I Offer</h1>
//         <p className='py-5'>
//         If you want to sell a product or service to a prospective client, you may need to send an offering services letter. You can send an offering services letter in response to a specific solicitation by a client or as an unsolicited contact. Clients may receive many letters offering services, so it's important to make a strong impression with your letter in order to make a sale.
//         </p>
        
//         <div className='  flex justify-between  '>
          

//           <div className='bg-black w-[30%] rounded-xl py-5 px-5 mt-5 '> 

//           <AiFillFacebook className='mx-auto' />
//           <h1 className='text-center'>heading</h1>
//           <p>In this article, we discuss what a proposal letter offering services is, explain how to write one and provide a template and example to use as a guide.</p>

//           </div>
//           <div className='bg-black w-[30%] rounded-xl py-5 px-5 mt-5'> 
//           <AiFillFacebook className='mx-auto' />
//           <h1 className='text-center'>heading</h1>
//           <p>In this article, we discuss what a proposal letter offering services is, explain how to write one and provide a template and example to use as a guide.</p>

//           </div>
//           <div className='bg-black w-[30%] rounded-xl py-5 px-5 mt-5'> 
//           <AiFillFacebook className='mx-auto' />
//           <h1 className='text-center'>heading</h1>
//           <p>In this article, we discuss what a proposal letter offering services is, explain how to write one and provide a template and example to use as a guide.</p>

//           </div>
          
//         </div>
//         <h2 className='font-bold mt-5'>Services I Offer</h2>

//         <p className='py-5'>If you want to sell a product or service to a prospective client, you may need to send an offering services letter. You can send an offering services letter in response to a specific solicitation by a client or as an unsolicited contact. Clients may receive many letters offering services, so it's important to make a strong impression with your letter in order to make a sale.
//         </p>

//         <div className='bg-red-700 flex'>
//           <div className='bg-black w-[50%]'>
//             <img src='/assets/download.jpg' className='w-full h-[400px] mr-5 px-5 py-5'></img>
//             <img src='/assets/download.jpg' className='w-full h-[400px] px-5 py-5'></img>
//             <img src='/assets/download.jpg' className='w-full h-[400px] px-5 py-5'></img>
//           </div>
//           <div className='bg-black w-[50%]'>
//           <img src='/assets/download.jpg' className='w-full h-[400px] px-5 py-5'></img>
//           <img src='/assets/download.jpg' className='w-full h-[400px] px-5 py-5'></img>
//           <img src='/assets/download.jpg' className='w-full h-[400px] px-5 py-5'></img>
//           </div>
//         </div>
//       </div>
    
//   )
// }













import '/styles/Home.module.css';

import { useRouter } from "next/router";
import { use, useEffect, useRef, useState } from "react";
// import testVideo from "./testVideo.mp4";

export default function App() {
  const router=useRouter();
  const ref = useRef(null);
  const [focus, setFocus] = useState(false);
  const [names,setNames]=useState('');

  const loop = () => {
    ref.current.play();
  };

  const onEndedLoop = () => {
    if (focus) loop(); // when ended check if its focused then loop
  };

  useEffect(() => {
    if (focus) loop(); // when focused then loop
  }, [focus]);

  

  let name='';
  function n(){
      setNames(localStorage.getItem('img'));
    //  console.log(name);
  }
  // console.log(names);
  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

 
  
  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="bg-black rounded-full">
        <h1 className="font-serif text-7xl py-10 rounded-xl font-extrabold text-center justify-center text-yellow-300">3D Reconstruction From Images</h1>
        
      </div>
      <h1 className="font-serif text-4xl py-5  font-extrabold text-center justify-center text-orange-500  rounded-full">Select an Image you want to convert</h1>
      <div>
        <div className="bg-zinc-500 rounded-xl">
      <button onClick={()=> localStorage.setItem('img','ali.mp4')/
      n()/sleep(2000)}>
            <img src='/images/ali.jpeg' width={200} className="rounded-full ml-10 mt-5"></img>
            
        </button> 

        <button onClick={()=> localStorage.setItem('img','girl.mp4') /
      n()/sleep(2000)}>
            <img src='/images/girl.jpeg' width={200} className="rounded-full ml-5 mt-5 "></img>
        </button>

        <button onClick={()=> localStorage.setItem('img','girl2.mp4') /
      n()/sleep(2000)}>
            <img src='/images/girl2.jpg' width={200} className=" rounded-full ml-5 mt-5 "></img>
        </button>
        <button onClick={()=> localStorage.setItem('img','girl3.mp4') /
      n()/sleep(2000)}>
            <img src='/images/girl3.jpeg' width={200} className="rounded-full ml-5 mt-5 "></img>
        </button>
        <button onClick={()=> localStorage.setItem('img','girl4.mp4') /
      n()/sleep(2000)}>
            <img src='/images/girl4.jpeg' width={200} className="rounded-full ml-5 mt-5 "></img>
        </button>
        <button onClick={()=> localStorage.setItem('img','girl5.mp4') /
      n()/sleep(2000)}>
            <img src='/images/girl5.jpeg' width={200} className="rounded-full ml-5 mt-5 "></img>
        </button> 
        </div>



      <div className="flex items-center justify-center mt-36">
       




      



      
      
      <video className='rounded-xl mb-20'
        
         id="video" 
         ref={ref} 
         style={{ width: "900px" }} 
         autoPlay 
         onMouseOver={() => setFocus(true)} 
         onMouseOut={() => setFocus(false)} 
         muted={true} 
        
         src={ '/images/'+names}
        
         onEnded={onEndedLoop} 
       ></video> 
       </div>
       </div>
    </div>
  );
}





