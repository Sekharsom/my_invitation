const Contact = () => {
  return (
    <section
      className="bg-green-50 py-10 px-4 text-center mx-auto rounded-2xl"
      style={{
        width: '70%',
        backgroundColor: '#e5dedcff',
      }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">
        📞 Need Help or Directions?
      </h2>
      <p className="text-base sm:text-lg">
        Feel free to contact our families for assistance
      </p>

      <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-y-4 gap-x-10 text-base sm:text-lg">
        <p><strong>Groom’s Side:</strong> 95055 40154</p>
        <p><strong>Bride’s Side:</strong> 91825 40219</p>
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
