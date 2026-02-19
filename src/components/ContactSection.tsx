import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };

    const { error } = await supabase.from("contact_submissions").insert(trimmed);

    if (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    supabase.functions.invoke("send-contact-email", { 
  body: {
    ...trimmed,
    from: "Contact Form <contact@nabeelshamim.com>",
    to: ["Muhammad@digireps.co"],
    subject: `New Contact: ${trimmed.name}`
  } 
}).catch(console.error);

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-48 bg-[#050505] overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header: Understated & Authoritative */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-primary font-black mb-6 block">
              Inquiry Gateway
            </span>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.85]">
              Let’s Connect.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-zinc-500 text-lg md:text-xl font-medium max-w-sm md:ml-auto leading-tight">
              Strategic partnerships begin with a simple message. Reach out for consultations or global ventures.
            </p>
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          {status === "sent" ? (
            <motion.div
              key="success"
              className="py-24 border-t border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 text-primary mb-8">
                <CheckCircle size={28} strokeWidth={3} />
                <h4 className="text-2xl font-black tracking-tight text-white uppercase italic">Confirmed.</h4>
              </div>
              <p className="text-zinc-400 text-xl font-medium max-w-md leading-snug">
                Your transmission has been logged. Expect a formal response to your digital address shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-12 text-[10px] font-black uppercase tracking-[0.5em] text-zinc-600 hover:text-white transition-colors"
              >
                Reset Form
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-x-24 gap-y-24">
                {/* Field: Name */}
                <div className="group relative">
                  <label className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-2 block group-focus-within:text-primary transition-colors">
                    01. Identity
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-6 text-white placeholder:text-zinc-900 focus:outline-none focus:border-primary transition-all text-2xl font-medium tracking-tight"
                    placeholder="Full Name"
                  />
                </div>

                {/* Field: Email */}
                <div className="group relative">
                  <label className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-2 block group-focus-within:text-primary transition-colors">
                    02. Correspondence
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-6 text-white placeholder:text-zinc-900 focus:outline-none focus:border-primary transition-all text-2xl font-medium tracking-tight"
                    placeholder="name@email.com"
                  />
                </div>
              </div>

              {/* Field: Message */}
              <div className="group relative">
                <label className="text-[9px] font-black uppercase tracking-[0.5em] text-zinc-600 mb-2 block group-focus-within:text-primary transition-colors">
                  03. Strategic Brief
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-white/10 py-6 text-white placeholder:text-zinc-900 focus:outline-none focus:border-primary transition-all text-2xl font-medium tracking-tight resize-none"
                  placeholder="How can I assist your vision?"
                />
              </div>

              {/* Action: Minimalist Link-Style Button */}
              <div className="flex justify-start pt-10">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center gap-8 text-white hover:text-primary transition-all duration-500"
                >
                  <span className="text-[12px] font-black uppercase tracking-[0.6em]">
                    {status === "sending" ? "Processing..." : "Submit Inquiry"}
                  </span>
                  <div className="relative flex items-center">
                    <div className="h-[1px] w-24 bg-white/20 group-hover:w-40 group-hover:bg-primary transition-all duration-700" />
                    <ArrowRight size={20} className="ml-[-10px] group-hover:translate-x-4 transition-transform duration-700" />
                  </div>
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      {/* Aesthetic Footer Detail */}
      <div className="absolute bottom-12 right-12 opacity-[0.05] pointer-events-none hidden lg:block">
        <p className="text-[12rem] font-black text-white tracking-tighter leading-none select-none">
          MNS.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;