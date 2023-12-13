import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import './index.css'


const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const videoRef = useRef(null);

  useEffect(()=>{
    function isTouchDevice(){
      console.log("isTouchDevice")
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    if(typeof window !== "undefined"){
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const coolVideo = videoRef.current as any;

      const tl = gsap.timeline({
        scrollTrigger:{
          trigger: "video",
          start: "top top",
          end: "bottom+=200% bottom",
          scrub:2,
          markers:true
        }
      });

      coolVideo.onloadedmetadata = function(){
        console.log("Loaded")
        tl.to(coolVideo,{currentTime:coolVideo.duration})
      };
      if(isTouchDevice()){
        coolVideo.play();
        coolVideo.pause();
      }
    }
  },[])
  return (
    <div>
      <video
      ref={videoRef}
      className='video'
      playsInline={true}
      webkit-playsinline= "true"
      preload='auto'
      muted
      >
        <source src="https://assets.codepen.io/39255/output_960.mp4" />
      </video>
    </div>
  )
}

export default App