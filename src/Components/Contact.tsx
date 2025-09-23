function Contact() {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg max-w-4xl mx-auto my-10 hover:scale-105 transition transform-300">
      <h1 style={{color:'yellowGreen'}} className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-4 ">
        We'd love to hear from you! Whether you have questions, suggestions, or need support, our team at <span className="font-semibold">CryPeek</span> is here to help.
      </p>
      <ul className="text-lg space-y-2">
        <li>
          <strong>Email:</strong> <a href="mailto:support@crypeek.com" className="text-blue-400">support@crypeek.com</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-400">+1 (234) 567-890</a>
        </li>
        <li>
          <strong>Address:</strong> 123 Crypto Lane, Blockchain City, USA
        </li>
      </ul>
      <p className="mt-4 text-lg">
        You can also reach out to us through our social media channels or fill out the contact form on our website. 
        We aim to respond to all inquiries within 24 hours.
      </p>
    </div>
  );
}

export default Contact;
