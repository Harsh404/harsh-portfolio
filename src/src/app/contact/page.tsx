// src/app/contact/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Harsh Rai',
  description:
    'Got a project in mind or just want to say hi? Reach out via the form below and I’ll get back to you soon.',
}

export default function ContactPage() {
  return (
    <section className="contact container">
      <h1>Contact Me</h1>
      <p>
        Have a question, feedback, or want to work together? Fill out the form and I’ll reply
        within 1–2 business days.
      </p>

      <form
        action="https://formspree.io/f/meogovpe"
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">
            Name<span>*</span>
          </label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email<span>*</span>
          </label>
          <input type="email" id="email" name="_replyto" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea id="message" name="message" rows={6} required />
        </div>

        <button type="submit" className="btn-primary">
          Send Message
        </button>
      </form>
    </section>
  )
}
