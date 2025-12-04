import Alert from "@/components/alert";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
export interface KeyValue {
  label: string;
  value: string;
}

type ContactProps = {
  addresses: string;
  email: KeyValue[];
  phone: KeyValue[];
  subTitle?: string;
  title?: string;
  description?: string;
  serviceId: string;
  templateId: string;
  publicKey: string;
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  [key: string]: string;
}

export default function Contact2({
  title = "Contact Us",
  addresses,
  email,
  phone,
  subTitle,
  description,
//   serviceId,
//   templateId,
//   publicKey,
}: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [alertType, setAlertType] = useState<
    "success" | "update" | "delete" | "warning" | "failed"
  >("success");
  const [message, setMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);

  // ✅ Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ email + phone validation
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone: string) => /^[+]?[0-9]{7,15}$/.test(phone);

  // ✅ handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setAlertType("warning");
      setMessage("Please enter a valid email address.");
      setShowAlert(true);
      return;
    }

    if (!validatePhone(formData.phone)) {
      setAlertType("warning");
      setMessage("Please enter a valid phone number.");
      setShowAlert(true);
      return;
    }

    try {
    //   await emailjs.send(serviceId, templateId, formData, publicKey);
      setAlertType("success");
      setMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setAlertType("failed");
      setMessage("⚠️ Error sending message.");
    }
    setShowAlert(true);
  };

  return (
    <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/60 px-4 lg:px-[10%]">
      <h1 className="sr-only">{title}</h1>

      {/* 🔔 Alert */}
      <div className="fixed top-3 right-0 z-9999">
        <Alert
          type={alertType}
          message={message}
          show={showAlert}
          onClose={() => setShowAlert(false)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {/* 📍 Address & Social Section */}
        <div className="space-y-8 px-2 text-foreground p-6 md:p-12 lg:px-20 py-20 flex flex-col justify-center">
          <div className="flex justify-center flex-col gap-5">
            <p className="text-lg text-primary-foreground">{title}</p>
            <h1 className="text-2xl text-primary-foreground font-bold">{subTitle}</h1>
            <p className="text-primary-foreground/80 text-sm">{description}</p>

            {/* Address */}
            <div className="flex items-start gap-3 mt-6 w-[70%]">
              <IoLocation className="text-primary-foreground text-4xl mt-1 p-2 shrink-0 bg-primary rounded-md w-12 h-12"/>
              <div>
                <p className="font-bold text-primary-foreground">Our Location</p>
                <p className="text-primary-foreground">{addresses}</p>
              </div>
            </div>

            {/* Phone numbers */}
            <div className="flex items-start gap-3 mt-4 w-[70%]">
              <FaPhoneAlt className="text-primary-foreground text-4xl mt-1 p-2 shrink-0 bg-primary rounded-md w-12 h-12" />

              <div>
                <p className="font-bold text-primary-foreground">Phone Number</p>
                {phone.map((ph, idx) => (
                  <a
                    key={idx}
                    href={`tel:${ph.value}`}
                    className="cursor-pointer text-primary-foreground"
                  >
                    {ph.label} <br />
                  </a>
                ))}
              </div>
            </div>

            {/* Emails */}
            <div className="flex items-start gap-3 mt-4 w-[70%]">
              <AiOutlineMail className="text-primary-foreground text-4xl mt-1 p-2 shrink-0 bg-primary rounded-md w-12 h-12" />

              <div>
                <p className="font-bold text-primary-foreground">Email Address</p>

                {email.map((em, idx) => (
                  <a
                    key={idx}
                    href={`mailto:${em.value}`}
                    className="cursor-pointer text-primary-foreground"
                  >
                    {em.label} <br />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ✨ Form Section with decorations */}
        <div className="relative w-[80%] py-20 block mx-auto">
          {/* 🔸 Dotted Pattern (aligned below circle) */}
          <div className="absolute top-11 -right-8 grid grid-cols-3 gap-2 z-0">
            {Array.from({ length: 45 }).map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 bg-primary-foreground shadow rounded-full block"
              ></span>
            ))}
          </div>

          <div className="absolute top-11 right-1 grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 bg-primary-foreground rounded-full block"
              ></span>
            ))}
          </div>

          <div className="absolute bottom-20 -left-8 grid grid-cols-4 gap-2 z-0">
            {Array.from({ length: 48 }).map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 bg-primary-foreground rounded-full block"
              ></span>
            ))}
          </div>

          <div className="absolute bottom-11 -left-8 grid grid-cols-10 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className="w-1 h-1 bg-primary-foreground rounded-full block"
              ></span>
            ))}
          </div>

          <form
            className="relative flex flex-col space-y-4 py-5 px-8 bg-primary text-primary-foreground rounded-lg shadow-lg z-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-primary-foreground text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-primary-foreground text-black"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-lg">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-primary-foreground text-black"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-lg">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-primary-foreground text-black"
                rows={5}
              />
            </div>

            <button
              type="submit"
              aria-label="submit"
              className="bg-secondary/70 text-primary-foreground py-2 px-6 rounded-md font-semibold cursor-pointer hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
