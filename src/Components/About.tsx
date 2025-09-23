function About() {
  return (
    <div className="bg-gray-900 p-8 rounded-lg max-w-4xl mx-auto my-10">
      <h1 style={{color:'yellowGreen'}} className="text-3xl font-bold mb-4">About CryPeek</h1>
      <p className="text-lg mb-4 bg-gray-800 p-4 hover:scale-105 transform transition duration-300">
        Welcome to <span className="font-semibold ">CryPeek</span> — your trusted platform for exploring the exciting world of cryptocurrency. 
        At CryPeek, we aim to provide users with real-time market data, insightful analysis, and an easy-to-use interface to manage your crypto portfolio.
      </p>
      <p className="text-lg mb-4 bg-gray-800 p-4 hover:scale-105 transform transition duration-300">
        Our mission is to empower both beginners and experienced traders to make informed decisions in the rapidly evolving cryptocurrency market. 
        We combine innovative tools, accurate information, and a seamless experience to help you navigate your crypto journey with confidence.
      </p>
      <p className="text-lg mb-4 bg-gray-800 p-4 hover:scale-105 transform transition duration-300">
        Whether you're tracking market prices, analyzing trends, or managing your portfolio, CryPeek is designed to make your crypto experience simple, intuitive, and secure.
      </p>
    </div>
  );
}

export default About;
