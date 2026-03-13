import { motion } from "motion/react";
import { Heart, Users, Award, Target, Sparkles, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passionate Team",
    description: "Absolute artists from the town",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Designed exclusively for your taste",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Making every moment unforgettable",
  },
  {
    icon: Target,
    title: "Vision to Reality",
    description: "Flawless execution of your dreams",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-white via-amber-50/30 to-rose-50/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200/20 to-purple-200/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Decorative Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Cards Stack */}
            <div className="relative h-[600px] flex items-center justify-center">
              {/* Background Decorative Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-br from-amber-400 to-rose-400 rounded-3xl shadow-2xl"
              ></motion.div>
              
              {/* Middle Decorative Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute inset-4 bg-gradient-to-br from-rose-400 to-purple-400 rounded-3xl shadow-2xl"
              ></motion.div>

              {/* Main Content Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-8 bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="mb-8"
                >
                  <div className="relative">
                    <Sparkles className="w-20 h-20 text-amber-500" />
                    <Star className="w-8 h-8 text-rose-500 absolute -top-2 -right-2" />
                  </div>
                </motion.div>
                
                <h3 className="text-4xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">
                  NAVI Mumbai
                </h3>
                <p className="text-gray-600 text-lg mb-6">Based Event Experts</p>
                
                <div className="grid grid-cols-2 gap-6 w-full">
                  <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6">
                    <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 mb-2">500+</p>
                    <p className="text-gray-600 text-sm">Happy Events</p>
                  </div>
                  <div className="bg-gradient-to-br from-rose-50 to-purple-50 rounded-2xl p-6">
                    <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500 mb-2">100%</p>
                    <p className="text-gray-600 text-sm">Satisfaction</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 tracking-wider uppercase">About Us</span>
            </div>
            
            <h2 className="mb-6">ARSO EVENTS</h2>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Is a NAVI Mumbai based event management firm with a team of absolute artists from the town.
              </p>
              <p>
                Here at ARSO Events, every celebration is designed and coordinated by our super skilled team 
                and which is created exclusively for the client's personal taste and style.
              </p>
              <p>
                We guide you through the myriad of details and decisions that need to be made and make the 
                planning as fun as the celebration. Our goal is to understand your vision, develop it and 
                execute it flawlessly.
              </p>
              <p>
                We aim to deliver impactfulness of celebration & profoundness of experience to make an 
                unforgettable memory for the client. Team ARSO ensures the most memorable and spectacular 
                events tailored to our client's desires.
              </p>
              <p>
                Above all, we provide an unforgettable personal experience for you and your guests.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-amber-100 to-rose-100">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-900">{value.title}</p>
                      <p className="text-sm text-gray-500">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
            >
              Plan Your Dream Day With Us
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}