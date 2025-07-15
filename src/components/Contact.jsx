import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, User, Sparkles, Zap, Star, Heart, Clock } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sumansingha8654@gmail.com",
      link: "mailto:sumansingha8654@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 6297152592",
      link: "tel:+916297152592",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kolkata, West Bengal",
      link: "#",
      color: "from-pink-500 to-red-500"
    }
  ]

  return (
    <section id="contact" className="py-20 relative particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text text-shadow-strong">Get In Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next <span className="text-blue-400 font-semibold">amazing project</span>? 
            Let's discuss how we can bring your <span className="text-purple-400 font-semibold">vision to life</span>!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="glass-effect-strong rounded-xl p-4 flex items-center space-x-4 shimmer-effect group"
                >
                  <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center glow-effect group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1 text-shadow">{info.title}</h3>
                    <p className="text-gray-400 group-hover:text-white text-xs transition-colors duration-300">{info.value}</p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Send className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
            {/* Social Links
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-white text-shadow flex items-center space-x-2">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                <span>Connect With Me</span>
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: "LinkedIn", icon: "💼", href: "#", color: "from-blue-600 to-blue-700" },
                  { name: "GitHub", icon: "🐙", href: "#", color: "from-gray-700 to-gray-800" },
                  { name: "Twitter", icon: "🐦", href: "#", color: "from-blue-400 to-blue-500" },
                  { name: "Dribbble", icon: "🏀", href: "#", color: "from-pink-500 to-red-500" },
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.12, y: -3, rotate: 4 }}
                    whileTap={{ scale: 0.92 }}
                    className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white text-lg glow-effect hover:shadow-xl transition-all duration-300`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div> */}
            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="glass-effect-strong rounded-xl p-4 text-center"
            >
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse glow-effect"></div>
                <span className="text-green-400 font-bold text-sm">Available for New Projects</span>
              </div>
              <p className="text-gray-400 mb-3 text-xs">
                I'm currently available for freelance work and would love to hear about your ideas!
              </p>
              {/* <div className="flex items-center justify-center space-x-3 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>Response within 24h</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>Free consultation</span>
                </div>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-effect-strong rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white text-shadow mb-6 flex items-center space-x-3">
                <MessageSquare className="w-7 h-7 text-blue-400" />
                <span>Send Me a Message</span>
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <label className="text-gray-300 font-medium flex items-center space-x-2 text-base">
                      <User className="w-5 h-5 text-blue-400" />
                      <span>Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 shimmer-effect text-base"
                      placeholder="Suman Singha"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="space-y-2"
                  >
                    <label className="text-gray-300 font-medium flex items-center space-x-2 text-base">
                      <Mail className="w-5 h-5 text-purple-400" />
                      <span>Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/10 transition-all duration-300 shimmer-effect text-base"
                      placeholder="suman@gmail.com"
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 font-medium flex items-center space-x-2 text-base">
                    {/* <Zap className="w-5 h-5 text-pink-400" /> */}
                    <span>Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all duration-300 shimmer-effect text-base"
                    placeholder="Project Inquiry"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="space-y-2"
                >
                  <label className="text-gray-300 font-medium flex items-center space-x-2 text-base">
                    {/* <Heart className="w-5 h-5 text-yellow-400" /> */}
                    <span>Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 shimmer-effect text-base"
                    placeholder="Type your message here..."
                  />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="btn-primary shimmer-effect w-full py-3 text-base"
                >
                  <Send className="w-5 h-5 inline-block mr-2" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 