import { useEffect, useState } from 'react';
import './Home.css';
import Contact from './Contact.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img9 from '../images/Sekhar_img.JPG';
import img10 from '../images/SSG_5964.JPG';

const weddingDate = new Date("2025-08-13T18:00:00"); // customize this date

const Home = () => {
//   const { address } = useContext(UploadContext);
  const [timeLeft, setTimeLeft] = useState({});



  useEffect(() => {
    AOS.init({
    duration: 1000,  // animation speed
    once: false,     // 🔁 animate every time on scroll
    });
    const updateCountdown = () => {
      const now = new Date();
      const diff = weddingDate - now;

      if (diff <= 0) {
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-green-400 flex flex-col items-center justify-center px-4 py-16 text-center" 
          style={{ backgroundColor: '#F5CBCB', color:"#2F5249" ,fontFamily:"Lucida Handwriting"
        }}>

      <p
  style={{
    color: "#6b0f2b",
    textAlign: "center",
    fontSize: "24px",
    lineHeight: "1.8",
    maxWidth: "700px",
    fontFamily: "'Cormorant Garamond', serif",
  }}
><b>
  Mark your calendars, bring your smiles and your dancing shoes!  
  We’re tying the knot and can’t wait to celebrate this madness called love with you.  
  Your presence means the world — your blessings, even more.  
  Join us for the rituals, the laughter, the food… and all the fun that follows!
  </b>
</p>
      
      <h1 className="text-5xl font-serif font-bold " style={{marginTop:'20px'}}>You're Invited!</h1>
      <p className="text-2xl  mb-2" style={{marginTop:"15px"}}>To the wedding of</p>
      <h2 className="text-6xl font-bold text-pink-600" style={{fontFamily:"Papyrus", color:"#670D2F", marginTop:'20px'}}>Sekhar 💖 Monica</h2>
      <div className="my-6">
        <h2 className="text-lg text-gray-600 mb-1" style={{fontSize:"20px", marginBottom:"15px"}}>On</h2>
        <style>
        {`
          @keyframes orbitIn {
            0% {
              transform: rotate(0deg) translateX(150px) rotate(0deg);
              opacity: 0;
            }
            100% {
              transform: rotate(360deg) translateX(0) rotate(-360deg);
              opacity: 1;
            }
          }

          .orbit-word {
            display: inline-block;
            margin: 0 0.4rem;
            font-size: 2rem;
            font-weight: bold;
            animation: orbitIn 2s ease-out forwards;
            transform-origin: center;
            opacity: 0;
          }

          .delay-1 {
            animation-delay: 0s;
          }

          .delay-2 {
            animation-delay: 0.4s;
          }

          .delay-3 {
            animation-delay: 0.8s;
          }
        `}
      </style>
        <p className="orbit-word" >August 13, 2025</p>
        {/* <p className="text-md text-gray-600 mt-2">{address || "Hyderabad, India"}</p> */}
      </div>

      <div  style={{fontFamily:"cursive", backgroundColor:"#f3f6d5ff", width:"500px", height:"100px", borderRadius:"20px", marginTop:"15px"}} >
        <h3 className="text-xl font-bold mb-2 text-pink-700" style={{marginTop:"15px"}} >Countdown to the Big Day</h3>
        {Object.keys(timeLeft).length > 0 ? (
          <div className="flex justify-around mt-4 text-lg font-mono" style={{fontSize: "30px", color:"#1e3d58"}}>
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
          </div>
        ) : (
          <p className="text-green-600 font-semibold">🎉 The day is here! 🎉</p>
        )}
      </div>

      <div className="text-4xl" style={{marginTop:"50px"}}>
            <h1>Meet the Couple</h1>

      </div>

<section
  className="flex flex-col md:flex-row justify-center items-center gap-11 py-10 px-4"
  style={{ backgroundColor: '#F5CBCB', color: "#2F5249", width:'800px', marginTop:"10px" }}
  data-aos="fade-up"
>
  {/* Groom */}
  <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="zoom-in-right">
    <img
      src={img9}
      alt="Groom"
      className="shadow-xl w-72 h-96 object-cover transition-transform duration-700 hover:scale-105"
      style={{ borderRadius: '40%' }}
    />
    <h3 className="text-xl font-semibold mt-4" style={{marginTop:"30px", fontSize:'30px'}}>Soma Sekhar</h3>
    <p style={{marginTop:"30px", fontSize:'20px'}}>S/O</p>
    <p className="text-sm italic text-gray-700"style={{marginTop:"30px", fontSize:'20px'}}>Mr. Prasad & Mrs. Sujatha</p>
  </div>

  {/* Bride */}
  <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="zoom-in-left">
    <img
      src={img10}
      alt="Bride"
      className="shadow-xl w-72 h-96 object-cover transition-transform duration-700 hover:scale-105"
      style={{ borderRadius: '40%' }}
    />
    <h3 className="text-xl font-semibold mt-4" style={{marginTop:"30px", fontSize:'30px'}}>Monica</h3>
    <p style={{marginTop:"30px", fontSize:'20px'}}>D/O</p>
    <p className="text-l italic text-gray-700" style={{marginTop:"30px", fontSize:'20px', marginLeft:'10px'}}>Mr. Srinivas & Mrs. Padma</p>
  </div>
</section>




{/* //Event section */}

<section
  className="bg-pink-100 py-12 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto"
  style={{ backgroundColor: '#F5CBCB', marginBottom: "200px" }}
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-rose-700">
    💫 Wedding Events
  </h2>

  <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
    {[
      {
        title: "Haldi",
        date: "August 12, 2025",
        time: "4 PM onwards",
        bg: "https://plus.unsplash.com/premium_photo-1670524465634-93cf255ffa8b?q=80&w=1154&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        address: "At Groom and Bride's homes",
      },
      {
        title: "Mehendi",
        date: "August 12, 2025",
        time: "10 AM",
        bg: "https://images.unsplash.com/photo-1624504761718-be4d634f4624?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        address: "At Groom and Bride's homes",
      },
      {
        title: "Wedding & Reception",
        date: "August 13, 2025",
        time: "Reception 6 PM onwards",
        muhurtham: "Muhurtham - 3:38 AM (14th early morning)",
        bg: "https://images.unsplash.com/photo-1567530331069-630c6a3926f3?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        address: "SV Ramanarao Function Hall, Balajipeta, Bommur",
      },
    ].map((event, idx) => (
      <div key={idx} className="flip-card w-[260px] h-[300px]">
        <div className="flip-card-inner">
          <div
            className="flip-card-front flex items-center justify-center text-center"
            style={{
              height: "300px",
              backgroundImage: `url(${event.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#FFF",
              fontFamily: "Lucida Handwriting",
              textShadow: "0 1px 2px rgba(0,0,0,0.5)",
              borderRadius: "12px",
            }}
          >
            <div className="text-2xl font-bold px-2">{event.title}</div>
          </div>

          <div
            className="flip-card-back text-center px-4 py-6 bg-white rounded-lg shadow-md"
            style={{ height: "300px", lineHeight: "1.8" }}
          >
            <p className="font-semibold">{event.date}</p>
            <p>{event.time}</p>
            {event.muhurtham && <p><strong>{event.muhurtham}</strong></p>}
            <p>{event.address}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>


    <Contact />

    </div>
    
  );
};

export default Home;
