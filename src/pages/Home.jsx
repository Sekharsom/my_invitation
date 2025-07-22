import { useEffect, useState } from 'react';
import './Home.css';
import Contact from './Contact.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img9 from '../images/Sekhar_img.JPG';
import img10 from '../images/SSG_5964.JPG';

const weddingDate = new Date("2025-08-13T18:00:00");

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

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
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center"
      style={{
        backgroundColor: '#F5CBCB',
        color: '#2F5249',
        fontFamily: 'Lucida Handwriting',
      }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <p
          className="text-lg sm:text-xl md:text-2xl leading-relaxed mb-6"
          style={{ color: "#6b0f2b", fontFamily: "'Cormorant Garamond', serif" }}
        >
          <b>
            Mark your calendars, bring your smiles and your dancing shoes!
            We’re tying the knot and can’t wait to celebrate this madness called love with you.
            Your presence means the world — your blessings, even more.
            Join us for the rituals, the laughter, the food… and all the fun that follows!
          </b>
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold mt-6">You're Invited!</h1>
        <p className="text-xl mt-4">To the wedding of</p>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#670D2F] mt-4" style={{ fontFamily: "Papyrus" }}>
          Sekhar 💖 Monica
        </h2>

        <div className="my-6">
          <h2 className="text-xl mb-2">On</h2>
          <p className="text-2xl font-bold orbit-word delay-1">August 13, 2025</p>
        </div>

        {/* Countdown Timer */}
        <div className="w-full max-w-md mx-auto bg-[#f3f6d5ff] p-6 rounded-2xl mt-4">
          <h3 className="text-xl font-bold text-pink-700 mb-3">Countdown to the Big Day</h3>
          {Object.keys(timeLeft).length > 0 ? (
            <div className="flex justify-between text-2xl text-[#1e3d58]">
              <div>{timeLeft.days}d</div>
              <div>{timeLeft.hours}h</div>
              <div>{timeLeft.minutes}m</div>
              <div>{timeLeft.seconds}s</div>
            </div>
          ) : (
            <p className="text-green-600 font-semibold">🎉 The day is here! 🎉</p>
          )}
        </div>

        {/* Meet the Couple */}
        <div className="text-3xl sm:text-4xl mt-12 font-bold">Meet the Couple</div>

        <section
          className="flex flex-col md:flex-row justify-center items-center gap-8 py-10 px-4 w-full max-w-5xl mx-auto"
          data-aos="fade-up"
        >
          {/* Groom */}
          <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="zoom-in-right">
            <img
              src={img9}
              alt="Groom"
              className="shadow-xl w-64 h-80 object-cover transition-transform duration-700 hover:scale-105 rounded-[40%]"
            />
            <h3 className="text-2xl font-semibold mt-6">Soma Sekhar</h3>
            <p className="text-lg mt-2">S/O</p>
            <p className="italic text-gray-700 text-lg">Mr. Prasad & Mrs. Sujatha</p>
          </div>

          {/* Bride */}
          <div className="w-full md:w-1/2 flex flex-col items-center" data-aos="zoom-in-left">
            <img
              src={img10}
              alt="Bride"
              className="shadow-xl w-64 h-80 object-cover transition-transform duration-700 hover:scale-105 rounded-[40%]"
            />
            <h3 className="text-2xl font-semibold mt-6">Monica</h3>
            <p className="text-lg mt-2">D/O</p>
            <p className="italic text-gray-700 text-lg">Mr. Srinivas & Mrs. Padma</p>
          </div>
        </section>

        {/* Wedding Events */}
        <section className="py-12 px-4 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-rose-700">💫 Wedding Events</h2>

          <div className="flex flex-wrap justify-center gap-6">
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
              <div key={idx} className="flip-card w-[90vw] sm:w-[260px] h-[300px]">
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
    </div>
  );
};

export default Home;
