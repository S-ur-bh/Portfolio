import { useState, useRef, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { SocialLinks } from '@/components/ui/social-links'
import { cn } from '@/lib/utils'

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hisaurabh.work@gmail.com',
    href: 'mailto:hisaurabh.work@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9569845570',
    href: 'tel:+919569845570',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    href: '#',
  },
]

const socials = [
  { name: 'GitHub', url: 'https://github.com', icon: Github },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'LeetCode', url: 'https://leetcode.com', icon: Code2 },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [_error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Format email body with sender details
    const formattedMessage = `Name: ${formData.name}
Email: ${formData.email}
Purpose: ${formData.subject}

Message:
${formData.message}`

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formattedMessage,
        },
        EMAILJS_CONFIG.publicKey
      )

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: 'general', message: '' })
      if (formRef.current) {
        formRef.current.reset()
      }

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      console.error('Failed to send email:', err)
      setError('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-mono mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mt-4" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6 font-mono">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-4 p-4',
                        'bg-card border border-border rounded-xl',
                        'hover:border-accent/50',
                        'transition-all duration-300'
                      )}
                    >
                      <div className={cn(
                        'w-12 h-12 rounded-lg',
                        'bg-accent/10 flex items-center justify-center'
                      )}>
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted">{item.label}</p>
                        <p className="text-foreground font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 font-mono">
                  Follow Me
                </h3>
                <SocialLinks links={socials} iconSize={20} linkClassName="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center hover:border-accent/50" />
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-muted mb-2">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn(
                      'w-full px-4 py-3',
                      'bg-card border border-border rounded-lg',
                      'text-foreground placeholder:text-muted-foreground',
                      'focus:outline-none focus:border-accent',
                      'transition-colors duration-200'
                    )}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted mb-2">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn(
                      'w-full px-4 py-3',
                      'bg-card border border-border rounded-lg',
                      'text-foreground placeholder:text-muted-foreground',
                      'focus:outline-none focus:border-accent',
                      'transition-colors duration-200'
                    )}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={cn(
                    'w-full px-4 py-3',
                    'bg-card border border-border rounded-lg',
                    'text-foreground',
                    'focus:outline-none focus:border-accent',
                    'transition-colors duration-200'
                  )}
                >
                  <option value="general">General Inquiry</option>
                  <option value="project">Project Collaboration</option>
                  <option value="job">Job Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={cn(
                    'w-full px-4 py-3',
                    'bg-card border border-border rounded-lg',
                    'text-foreground placeholder:text-muted-foreground',
                    'focus:outline-none focus:border-accent',
                    'transition-colors duration-200',
                    'resize-none'
                  )}
                  placeholder="Your message..."
                />
              </div>


              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'w-full px-6 py-3',
                  'bg-accent text-background font-mono font-medium',
                  'rounded-lg',
                  'flex items-center justify-center gap-2',
                  'hover:bg-accent-secondary',
                  'disabled:opacity-50 disabled:cursor-not-allowed',
                  'transition-all duration-300'
                )}
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full"
                  />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'p-4 rounded-lg',
                    'bg-accent/10 border border-accent/50',
                    'text-accent text-center'
                  )}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              {/* Error Message */}
              {_error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    'p-4 rounded-lg',
                    'bg-red-500/10 border border-red-500/50',
                    'text-red-500 text-center'
                  )}
                >
                  {_error}
                </motion.div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
