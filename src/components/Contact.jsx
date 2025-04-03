import React, { useState } from "react";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FaMailBulk } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [senderEmail, setSenderEmail] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [loading, setLoading] = useState(false);

  const VITE_START_POINT = import.meta.env.VITE_START_POINT;

  const handleWhatsAppChat = () => {
    const phoneNumber = "+2348166462615";
    const defaultMessage = encodeURIComponent(
      "Hello Kay-kay, I'd like to work with you."
    );
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;
    window.open(whatsappLink, "_blank");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${VITE_START_POINT}/api/send-email`, {
        senderEmail,
        emailBody,
      });
      if (response.status === 200) {
        setSenderEmail("");
        setEmailBody("");
        toast.success("Email sent successfully");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("An error occurred. Try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} />
      <div id="contact" className="flex flex-col items-center py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl">
          {/* WhatsApp */}
          <div
            className="flex items-center gap-4 bg-green-500 hover:bg-green-600 transition-all text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg cursor-pointer"
            onClick={handleWhatsAppChat}
          >
            <BiLogoWhatsapp size={28} /> Chat on WhatsApp
          </div>
          {/* Contact Form */}
          <div className="w-full bg-white shadow-xl rounded-lg p-6 backdrop-blur-lg bg-opacity-80">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="p-4 border rounded-lg w-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Your Email Address"
                required
              />
              <textarea
                name="emailBody"
                value={emailBody}
                onChange={(e) => setEmailBody(e.target.value)}
                placeholder="Your Message"
                className="p-4 border rounded-lg w-full h-32 resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              ></textarea>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold px-6 py-3 rounded-lg shadow-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                <FaMailBulk size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
