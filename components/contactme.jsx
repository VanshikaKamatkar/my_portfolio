"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_dbn806r",     // replace with your EmailJS service ID
        "template_nch915e",    // replace with your EmailJS template ID
        formData,
        "dVretoN2AIn4a69wE"      // replace with your EmailJS user/public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen  w-full flex flex-col justify-center items-center bg-gradient-to-br  px-4 py-16"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl space-y-6 transition"
      >
        {["name", "email", "subject", "message"].map((field, i) => (
          <motion.div
            key={field}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <label
              htmlFor={field}
              className="block text-white font-mono mb-2 capitalize"
            >
              {field}
            </label>
            {field !== "message" ? (
              <input
                id={field}
                name={field}
                type={field === "email" ? "email" : "text"}
                placeholder={`Enter your ${field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required={field !== "subject"}
              />
            ) : (
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl text-white font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <p
            className={`mt-4 text-center font-semibold ${
              status.includes("✅") ? "text-green-400" : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
}
