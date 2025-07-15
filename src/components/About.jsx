import { motion } from 'framer-motion'
import { User, Code, Palette, Zap, Star, Award, Clock, Users, Sparkles, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Code className="w-6 h-6" />, value: "10+", label: "Projects Completed", color: "text-blue-400" },
    { icon: <Users className="w-6 h-6" />, value: "10+", label: "Hackathons", color: "text-pink-400" },
    { icon: <Award className="w-6 h-6" />, value: "5", label: "Awards Won", color: "text-yellow-400" },
  ]

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-5 h-5" />, level: 95 },
    { name: "Backend Development", icon: <Code className="w-5 h-5" />, level: 90 },
    { name: "UI/UX Design", icon: <Palette className="w-5 h-5" />, level: 85 },
    { name: "Mobile Development", icon: <Code className="w-5 h-5" />, level: 80 },
    { name: "DevOps & Cloud", icon: <Zap className="w-5 h-5" />, level: 75 },
  ]

  return (
    <section id="about" className="py-20 relative particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text text-shadow-strong">About Me</span>
          </h2>
          {/* <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I'm a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> and 
            <span className="text-purple-400 font-semibold"> UI/UX Designer</span> who loves creating 
            <span className="text-pink-400 font-semibold"> amazing digital experiences</span>.
          </p> */}
        </motion.div>

        <div className="relative flex flex-col lg:flex-row gap-16 items-center justify-center">
          {/* Floating blurred background shapes for depth */}
          <motion.div
            className="hidden lg:block absolute -top-24 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl z-0"
            animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="hidden lg:block absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-pink-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-2xl z-0"
            animate={{ scale: [1, 1.05, 1], x: [0, -10, 0], y: [0, -10, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Profile Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10"
          >
            <div className="w-72 h-72 mx-auto glass-effect-strong rounded-3xl shadow-2xl flex items-center justify-center relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 border-4 border-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-[2rem] pointer-events-none"
                style={{ boxShadow: '0 0 40px 8px rgba(168,85,247,0.10), 0 0 0 8px rgba(236,72,153,0.06)' }}
              />
              <img
                src="/mypic.jpg"
                alt="Suman Singha profile"
                className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white/10 z-10"
                style={{ zIndex: 1 }}
              />
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="z-10 flex flex-col gap-6"
          >
            <div className="glass-effect-strong rounded-2xl p-6 flex flex-col gap-4 shadow-xl w-64">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className="flex items-center gap-4"
                >
                  <div className={`rounded-xl p-2 bg-white/10 ${stat.color} flex items-center justify-center shadow-md`}>{stat.icon}</div>
                  <div>
                    <div className="text-2xl font-black text-white text-shadow">{stat.value}</div>
                    <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Story & Values Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="z-10 max-w-xl w-full"
          >
            {/* Story Card with gradient accent bar */}
            <div className="relative mb-10">
              <div className="absolute -left-4 top-0 h-full w-2 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />
              <div className="glass-effect-strong rounded-2xl p-8 pl-10 shadow-xl">
                <h3 className="text-3xl font-bold text-white text-shadow flex items-center space-x-3 mb-4">
                  <User className="w-8 h-8 text-blue-400" />
                  <span>My Journey</span>
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    I am currently in my 3rd in my B.Tech in Computer Science & Enginerring from <span className="text-blue-400 font-semibold">
                      Government College of Engineering and Technology, Kolkata.</span> 
                  </p>
                  <p>
                    I am actively participating in hackathons and coding competitions to improve my skills and learn new technologies.
                    I have also worked on some projects which are listed in the <span className="text-blue-400 font-semibold">Projects</span> section.
                  </p>
                  <p>
                    I believe in writing <span className="text-yellow-400 font-semibold">clean, maintainable code</span> and 
                    creating <span className="text-green-400 font-semibold">user-centered designs</span> that make a difference 
                    in people's lives.
                  </p>
                </div>
              </div>
            </div>
            {/* What I Value (unchanged) */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white text-shadow flex items-center space-x-3">
                {/* <Sparkles className="w-8 h-8 text-pink-400" /> */}
                <span>What I Value</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Innovation", desc: "Always exploring new technologies and approaches",  },
                  { title: "Quality", desc: "Writing clean, efficient, and maintainable code",  },
                  { title: "Collaboration", desc: "Working together to achieve amazing results",  },
                  { title: "Learning", desc: "Continuously improving and expanding my skills", },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-effect rounded-xl p-4 shimmer-effect"
                  >
                    <div className="text-2xl mb-2">{value.icon}</div>
                    <h4 className="text-white font-bold mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            {/* Ready to bring your <span className="text-blue-400 font-semibold">vision to life</span>?  */}
            Let's create something <span className="text-purple-400 font-semibold">amazing together</span>!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shimmer-effect flex items-center space-x-3 mx-auto"
          >
            
            <span>Let's Work Together</span>
            
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default About 