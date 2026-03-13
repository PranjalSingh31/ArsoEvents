import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, PartyPopper, Cake, Gift, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Weddings",
    description: "Plan your big day with us for the memories of lifetime!",
    image: "https://images.unsplash.com/photo-1736236660067-b2ada04464d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGxhbm5pbmclMjBkZXNpZ258ZW58MXx8fHwxNjM3OTQwMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    icon: PartyPopper,
    title: "Corporate Events",
    description: "Professional and memorable corporate celebrations",
    image: "https://images.unsplash.com/photo-1762919243806-a3da5ca7f03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjM3OTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Making every birthday celebration extra special",
    image: "https://images.unsplash.com/photo-1758998426882-a06af595893b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGRlY29yYXRpb24lMjBsaWdodHN8ZW58MXx8fHwxNjM3OTQwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Gift,
    title: "All Celebrations",
    description: "Let it be anything, we'll make it special and grand",
    image: "https://images.unsplash.com/photo-1724847664518-c62583f1bf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NjM3MDMwODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    gradient: "from-amber-500 to-orange-500",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-20 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-20 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
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
            Our Services
          </span>
          <h2 className="mb-6">We Decor Your Dreams</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Are you planning your wedding and confused a lot? Let it be anything we are gonna be there 
            to make it special and grand for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Background */}
                <div className="relative h-96 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300`}></div>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white mb-3">{service.title}</h3>
                  <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {service.description}
                  </p>
                  <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    <span className="text-sm">Learn More</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Simply get in touch with us to start planning your dream event
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}