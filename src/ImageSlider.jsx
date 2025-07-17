import { useState, useEffect } from 'react';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';

const ImageSlider = () => {
    const imageList = [img1, img2, img3, img4];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = imageList.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % total);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="w-full max-w-xl mx-auto overflow-hidden rounded-xl shadow-lg bg-white"
    style={{marginTop:'200px'}}>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `400px`,
          height: '600px',
          alignItems:'center',
          transform: `translateX(-${(100 / total) * currentIndex}%)`,
        
        }}
      >
        {imageList.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-72 sm:h-80 md:h-96 flex items-center justify-center bg-gray-100">
            <img
              src={img}
              alt={`slide-${index}`}
              className="max-h-full max-w-full object-contain"
              style={{maxWidth:'100', backgroundSize:'cover'}}
            />
          </div>
        ))}
      </div>

      {/* Optional: Dots indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {imageList.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-pink-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
