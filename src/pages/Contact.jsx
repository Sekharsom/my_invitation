
const Contact = () => {
  return (
    <section className="bg-green-50 py-10 px-4 text-center" style={{width:'70%', borderRadius:"20px", backgroundColor:'#e5dedcff'}}>
      <h2 className="text-3xl font-bold text-green-800 mb-6">📞 Need Help or Directions?</h2>
      <p className="text-lg">Feel free to contact our families for assistance</p>
      <div className="mt-4 text-lg gap-11" style={{display:'flex'}}>
        <p><strong>Groom’s Side : </strong>95055 40154</p>
        <p><strong>Bride’s Side : </strong>91825 40219</p>
        <a
            href="https://maps.app.goo.gl/xsj2igc1idZo7Rjp8" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            📍 View Venue on Google Maps  
        </a>
        
      </div>
    </section>
  );
};

export default Contact;
