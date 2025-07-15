import { motion } from 'framer-motion'
import { Code, Palette, Database, Cloud, Smartphone, Globe, Zap, Sparkles, Star, Heart } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-7 h-7" />,
      color: "from-blue-400 to-blue-500",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "JavaScript", level: 90, icon: "🇯‌🇸‌" },
        { name: "TypeScript", level: 80, icon: "📘" },
        { name: "Tailwind CSS", level: 90, icon: "🎨" },
        { name: "Next.js", level: 60, icon: "⚡" },
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-7 h-7" />,
      color: "from-green-400 to-[#006A4E]",
      skills: [
        { name: "Node.js", level: 90, icon: "🟢" },
        { name: "Express.js", level: 85, icon: "🐍" },
        { name: "PostgreSQL", level: 80, icon: "🐘" },
        { name: "MongoDB", level: 82, icon: "🍃" },
        // { name: "GraphQL", level: 80, icon: "🔷" },
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-7 h-7" />,
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "Adobe XD", level: 75, icon: "📐" },
        { name: "Prototyping", level: 70, icon: "🔧" },
        { name: "User Research", level: 80, icon: "🔍" },
      ]
    },
    {
      title: "Tools & Others",
      icon: <Zap className="w-7 h-7" />,
      color: "from-yellow-500 to-orange-400",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "VS Code", level: 98, icon: "💻" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Postman", level: 90, icon: "🧪" },
        // { name: "Agile", level: 90, icon: "🏃" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative particle-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text text-shadow-strong">My Skills</span>
          </h2>
          {/* <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I've learned a wide range of <span className="text-blue-400 font-semibold">technologies</span> and 
            <span className="text-purple-400 font-semibold"> tools</span> to create 
            <span className="text-pink-400 font-semibold"> exceptional digital experiences</span>.
          </p> */}
        </motion.div>

        {/* Enhanced Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="glass-effect-strong rounded-xl overflow-hidden card-hover p-3"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-4 relative overflow-hidden rounded-t-xl`}> 
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-white glow-effect">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white text-shadow">
                      {category.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    {/* Removed Star icon */}
                  </motion.div>
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 right-2 w-1.5 h-1.5 bg-white/40 rounded-full"
                />
                <motion.div
                  animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full"
                />
              </div>
              {/* Skills List */}
              <div className="p-4 space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-base">{skill.icon}</span>
                        <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      </div>
                      <span className="text-slate-400 font-bold text-xs">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-1.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2, 
                          duration: 1.2, 
                          ease: 'easeOut' 
                        }}
                        className={`skill-bar-fill bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-shadow mb-4">
              <span className="gradient-text">Additional Expertise</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Beyond technical skills, I bring <span className="text-blue-400 font-semibold">creativity</span> and 
              <span className="text-purple-400 font-semibold"> problem-solving</span> to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "PR & Outreach Lead ", icon: "floatone", desc: [
                "Build partnerships with college alumnis and tech communities.",
                "Increase event visibility through strategic outreach.",
                "Drive student engagement and grow the community."
              ] },
              { title: "Co-Lead Organizer", icon: "floattwo", desc: [
                "Coordinate and host API-focused meetups and workshops.",
                "Promote API literacy through hands-on sessions and resources.",
                "Grow the local community by engaging students and professionals."
              ] },
              { title: "GDG 30Days DSA Challenge", icon: "floatthree", desc: [
                "Completed a 30-day DSA challenge under GDG GCELT.",
                "Posted daily problem explanations and hand written solutions on Twitter",
                "Improved problem-solving skills in topics like arrays, strings, and recursion."
              ] },
              { title: "GFG 160Days DSA Challenge", icon: "floatfour", desc: [
                "Participated in a GFG 160 days coding event maintained a streak of 80 Days.",
                "Learned new problem-solving techniques through daily questions.",
                "Learned a lot about the time and space complexity of algorithms.",
              ] },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-xl p-6 text-center shimmer-effect"
              >
                <div className="text-4xl mb-4 floating-animation flex items-center justify-center">
                  {skill.icon === "floatone" && (
                    <img
                      src="/floatone.png"
                      alt="GDDOnCampus"
                      className="w-16 h-16 object-cover rounded-full shadow-lg border-4 border-white/30 bg-white/10"
                      style={{ boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.15)' }}
                    />
                  )}
                  {skill.icon === "floattwo" && (
                    <img
                      src="/floattwo.png"
                      alt="PostmanCommunityKolkata"
                      className="w-16 h-16 object-cover rounded-full shadow-lg border-4 border-white/30 bg-white/10"
                      style={{ boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.15)' }}
                    />
                  )}
                  {skill.icon === "floatthree" && (
                    <img
                      src="/floatthree.png"
                      alt="GDD30DaysDSAChallenge"
                      className="w-16 h-16 object-cover rounded-full shadow-lg border-4 border-white/30 bg-white/10"
                      style={{ boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.15)' }}
                    />
                  )}
                  {skill.icon === "floatfour" && (
                    <img
                      src="/floatfour.png"
                      alt="GFG160DaysDSAChallenge"
                      className="w-16 h-16 object-cover rounded-full shadow-lg border-4 border-white/30 bg-white/10"
                      style={{ boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.15)' }}
                    />
                  )}
                </div>
                <h4 className="text-white font-bold mb-2">{skill.title}</h4>
                <div className="flex flex-col items-start justify-center mb-1 gap-1">
                  {skill.desc.map((point, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-blue-400 text-lg">&bull;</span>
                      <p className="text-gray-400 text-sm m-0">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8 text-lg">
            Ready to see these skills in action? Let's build something 
            <span className="text-blue-400 font-semibold"> incredible together</span>!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary shimmer-effect flex items-center space-x-3 mx-auto"
          >
          
            <span>View My Work</span>
            
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 