import Link from "next/link";
import {
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

import TopBar from "../../components/TopBar";
import MainNavbar from "../../components/MainNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us | SATPAL AND SONS",
  description: "Get in touch with Satpal & Sons for inquiries, quotes, or support.",
};

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <MainNavbar />
      <Breadcrumb />

      <div className="bg-white text-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#011F4B] mb-4">Send us a message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have a question or need assistance? Fill out the form below and we&apos;ll get back to you shortly.
              </p>
              <ContactForm />
            </div>

            {/* Static Contact Info */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-[#011F4B] mb-4">Get in touch</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Find us or reach out through our contact details below. We&apos;re here to help!
              </p>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-5">
                  <FaLocationDot className="text-[#011F4B] text-3xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Our Location</h3>
                    <address className="not-italic text-gray-700 leading-relaxed">
                      Y252, 2nd Mezzanine Floor, Back Side Loha Mandi, <br />
                      Naraina, New Delhi-110028, Delhi, India
                    </address>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <FaEnvelope className="text-[#011F4B] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700">Email us</h3>
                    <p className="text-gray-600">support@satpalsons.co</p>
                    <p className="text-gray-600">hello@yourdomain.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <FaPhone className="text-[#011F4B] text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-700">Call us</h3>
                    <p className="text-gray-600">+91 9868210750</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="font-semibold text-lg text-gray-700 mb-4">Follow our social media</h3>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    {[
                      {
                        icon: <FaFacebookF size={14} />,
                        href: "#",
                        hover: "hover:bg-[#1877F2]",
                      },
                      {
                        icon: <FaTwitter size={14} />,
                        href: "#",
                        hover: "hover:bg-[#1DA1F2]",
                      },
                      {
                        icon: <FaInstagram size={14} />,
                        href: "#",
                        hover: "hover:bg-[#E1306C]",
                      },
                      {
                        icon: <FaLinkedinIn size={14} />,
                        href: "#",
                        hover: "hover:bg-[#0077B5]",
                      },
                      {
                        icon: <FaYoutube size={14} />,
                        href: "#",
                        hover: "hover:bg-[#FF0000]",
                      },
                    ].map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`w-7 h-7 flex items-center justify-center rounded-full bg-[#011F4B] text-white transition ${item.hover}`}
                      >
                        {item.icon}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.610445206747!2d77.14079002457322!3d28.64143523367805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031f2fc43d5d%3A0xa5353953270d4a32!2sBlock%20X%2C%20Naraina%20Industrial%20Area%20Phase%201%2C%20Naraina%2C%20Delhi%2C%20110028!5e0!3m2!1sen!2sin!4v1750500098588!5m2!1sen!2sin"
            className="w-full h-80 md:h-96"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location on Google Maps"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
