import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Footer from '../homepage/components/Footer';
import { sendEmail } from '../../services/api';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendEmail({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message:
        `<html>`+
        `<h3>New Contact Form Submission</h3><br>` +
          `<strong>Message from:</strong> ${form.name}<br>` +
          `<strong>Phone:</strong> ${form.phone}<br>` +
          `<strong>Email:</strong> ${form.email}<br>` +
          `<strong>Message:</strong> ${form.message}<br>`+
        `</html>`,
      });
      if (response.status === 200) {
        alert('Your message has been sent successfully!');
        setForm({ message: '', email: '', phone: '', name: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-18">
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden hero-bg">
          {/* Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float animation-delay-400"></div>
          </div>
          <div className="relative w-full max-w-4xl mx-auto container-padding py-20">
            <div className="flex flex-col md:flex-row gap-8 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/20 p-8">
              {/* Left: Company Contact Info */}
              <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
                <h2 className="text-2xl font-bold text-white mb-6">Company Contacts</h2>
                <div className="space-y-4 text-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Phone:</span>
                    <a href="tel:+12898853706" className="text-secondary-100 hover:text-accent transition-colors">+1 (289) 885-3706</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Email:</span>
                    <a href="mailto:info@ylsbusinessmanagement.com" className="text-secondary-100 hover:text-accent transition-colors">info@ylsbusinessmanagement.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Instagram:</span>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yls_business_management/" className="text-secondary-100 hover:text-accent transition-colors">@yls_business_management</a>
                  </div>
                  {/* <div className="flex items-center gap-3">
                    <span className="font-semibold text-white">Address:</span>
                    <span className="text-secondary-100">123 Innovation Drive, Tech Valley, CA 94016</span>
                  </div> */}
                </div>
              </div>
              {/* Right: Contact Form */}
              <div className="md:w-1/2">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Contact Us</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-accent"
                      required
                    />                                       
                  </div>
                 <button
                    type="submit"
                    className={`w-full btn-accent py-3 rounded-lg font-bold text-lg ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Submit'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
