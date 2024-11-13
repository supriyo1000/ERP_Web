import { forwardRef } from "react"
import { emptyProps } from "../types"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default forwardRef<HTMLDivElement, emptyProps>(function ContactUs(props, ref) {
  return (
    <section id='contact' className="min-h-screen text-white flex items-center justify-center flex-col text-center" ref={ref}>
      <h1 className="section-header">Contact Us</h1>
      <div>
        <div>
          <p>Need any help or support? Don't worry</p>
          <p>We are always there for you 24x7</p>
        </div>
        <div>
          <div className="flex justify-between">
            <div>Mobile No.</div><div>{import.meta.env.VITE_PHONE_NUMBER ?? '+91 98765 43210'}</div>
          </div>
          <div className="flex justify-between">
            <div>Email</div><div>{import.meta.env.VITE_EMAIL_ADDRESS ?? 'example@gmail.com'}</div>
          </div>
          <div className="flex justify-between">
            <div>WhatsApp</div><div>{import.meta.env.VITE_WHATSAPP_NUMBER ?? '+91 98765 43210'}</div>
          </div>
        </div>
        <div>
          <p>Also you can connect with us at:</p>
          <div className="flex items-center gap-4">
            <a className="flex items-center gap-1" href={(import.meta.env.VITE_FACEBOOK_PROFILE === undefined || import.meta.env.VITE_FACEBOOK_PROFILE.trim() === '') ? `https://www.facebook.com/${import.meta.env.VITE_FACEBOOK_PROFILE}` : '/'}><FaFacebookF />/ {import.meta.env.VITE_FACEBOOK_PROFILE ?? '-handle'}</a>
            <a className="flex items-center gap-1" href={(import.meta.env.VITE_INSTAGRAM_PROFILE === undefined || import.meta.env.VITE_INSTAGRAM_PROFILE.trim() === '') ? `https://www.instagram.com/${import.meta.env.VITE_INSTAGRAM_PROFILE}` : '/'}><FaInstagram />/ {import.meta.env.VITE_INSTAGRAM_PROFILE ?? '-handle'}</a>
            <a className="flex items-center gap-1" href={(import.meta.env.VITE__PROFILE === undefined || import.meta.env.VITE__PROFILE.trim() === '') ? `https://www.x.com/${import.meta.env.VITE__PROFILE}` : '/'}><FaXTwitter />/ {import.meta.env.VITE_X_PROFILE ?? '-handle'}</a>
          </div>
        </div>
      </div>
    </section>
  )
})