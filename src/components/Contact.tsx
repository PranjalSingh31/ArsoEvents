import { motion } from "motion/react";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-white via-rose-50/30 to-amber-50/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-rose-200/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-amber-500 mx-auto" />
          </motion.div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 tracking-wider uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="mb-4">Let's Create Something Amazing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to plan your dream event? Reach out to us and let's start creating unforgettable memories together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-amber-500 to-rose-500 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="mb-8 text-white text-center">Contact Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.a
                  href="tel:9321764749"
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center gap-4 group bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-4 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                    <Phone className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white/80 mb-2">Call Us</p>
                    <p className="text-xl">9321764749</p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center gap-4 group bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-4 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white/80 mb-2">Location</p>
                    <p className="text-xl">NAVI Mumbai</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -10 }}
                  className="flex flex-col items-center gap-4 group bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="p-4 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-white/80 mb-2">Email</p>
                    <p className="text-xl">info@arsoevents.com</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "500+", label: "Events" },
                { number: "100%", label: "Satisfaction" },
                { number: "10+", label: "Years" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500 mb-2">
                    {stat.number}
                  </p>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}