import { Mail, Linkedin, MessageCircle, ArrowRight, MapPin, Clock } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: "Drop me a message anytime",
    color: "violet",
    gradient: "from-violet-600 to-purple-600",
    glow: "shadow-violet-500/30 hover:shadow-violet-500/60",
    border: "hover:border-violet-500/50",
    iconBg: "bg-violet-500/15 border-violet-500/30 text-violet-400",
    badge: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  },
  {
    label: "WhatsApp",
    value: "Chat with me",
    href: personalInfo.whatsapp,
    icon: MessageCircle,
    description: "Quick questions & collaboration",
    color: "emerald",
    gradient: "from-emerald-600 to-teal-600",
    glow: "shadow-emerald-500/30 hover:shadow-emerald-500/60",
    border: "hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: personalInfo.linkedin,
    icon: Linkedin,
    description: "Let's grow our network",
    color: "cyan",
    gradient: "from-cyan-600 to-blue-600",
    glow: "shadow-cyan-500/30 hover:shadow-cyan-500/60",
    border: "hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-emerald-500/40 to-transparent" />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <MessageCircle size={12} />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Let's{" "}
            <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Whether you have a project in mind, an opportunity to discuss, or just want to say hello —
            my inbox is always open. I respond within 24 hours.
          </p>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
            <MapPin size={14} className="text-violet-400" />
            {personalInfo.location}
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm">
            <Clock size={14} className="text-cyan-400" />
            Indian Time (UTC+5:30)
          </div>
          {personalInfo.availableForWork && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new roles
            </div>
          )}
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;
            return (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center text-center p-8 rounded-2xl bg-slate-900/60 border border-slate-800 ${contact.border} shadow-xl ${contact.glow} transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Top gradient line */}
                <div className={`absolute top-0 left-8 right-8 h-0.5 rounded-full bg-linear-to-r ${contact.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${contact.iconBg}`}>
                  <Icon size={24} />
                </div>

                {/* Label */}
                <h3 className="text-white font-bold text-lg mb-1">{contact.label}</h3>

                {/* Description */}
                <p className="text-slate-500 text-xs mb-3">{contact.description}</p>

                {/* Value */}
                <span className={`text-sm font-semibold px-3 py-1 rounded-full border ${contact.badge} mb-5`}>
                  {contact.value}
                </span>

                {/* CTA */}
                <div className={`flex items-center gap-1.5 text-sm font-semibold text-slate-400 group-hover:text-white transition-all duration-300`}>
                  Reach out
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Final CTA strip */}
        <div className="mt-16 text-center">
          <div className="inline-block p-px rounded-2xl bg-linear-to-r from-violet-600 via-purple-600 to-cyan-600">
            <div className="px-8 py-5 rounded-2xl bg-slate-950/80 backdrop-blur-sm">
              <p className="text-slate-300 text-sm mb-3 font-medium">
                Prefer a direct email?
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xl sm:text-2xl font-black bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent hover:from-violet-300 hover:to-cyan-300 transition-all duration-300"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="mt-20 border-t border-slate-800/60 pt-8 text-center text-slate-600 text-xs">
        <p>
          Designed & built by{" "}
          <span className="text-slate-400 font-semibold">{personalInfo.name}</span>
          {" · "}
          Powered by React, Vite & Tailwind CSS
        </p>
      </div>
    </section>
  );
}
