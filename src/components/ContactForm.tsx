import { useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending (you can integrate with a backend/service later)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-xl shadow-blue-100/50 border border-blue-200">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-blue-200">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-600"></div>
        </div>
        <span className="text-blue-600 text-sm ml-2 font-mono">contact@atanshu ~ send-message</span>
      </div>

      {submitted ? (
        <div className="text-blue-600 font-mono text-sm py-8 text-center animate-fade-in">
          <div className="mb-2 text-lg">✓ Message sent successfully!</div>
          <div className="text-gray-600">I'll get back to you soon.</div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-blue-600 font-mono text-sm mb-2 block font-medium">
              ❯ enter-name --required
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-blue-50/50 border border-blue-200 rounded px-4 py-2 text-gray-700 font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="text-blue-600 font-mono text-sm mb-2 block font-medium">
              ❯ enter-email --required
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-blue-50/50 border border-blue-200 rounded px-4 py-2 text-gray-700 font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="text-blue-600 font-mono text-sm mb-2 block font-medium">
              ❯ write-message --required
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-blue-50/50 border border-blue-200 rounded px-4 py-2 text-gray-700 font-mono text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-mono text-sm py-3 rounded flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                ./send-message.sh
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
