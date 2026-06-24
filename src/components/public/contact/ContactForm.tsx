"use client";

import { useState } from "react";

import { createContact } from "@/actions/contact/contact";

export default function ContactForm() {
const [name, setName] =
useState("");

const [email, setEmail] =
useState("");

const [mobile, setMobile] =
useState("");

const [companyName, setCompanyName] =
useState("");

const [city, setCity] =
useState("");

const [message, setMessage] =
useState("");

const [loading, setLoading] =
useState(false);

const [error, setError] =
useState("");

const [success, setSuccess] =
useState("");

async function handleSubmit(
event: React.FormEvent<HTMLFormElement>
) {
event.preventDefault();


setError("");
setSuccess("");

try {
  setLoading(true);

  const response =
    await createContact({
      name,
      email,
      mobile,
      companyName,
      city,
      message,
    });

  if (!response.success) {
    setError(
      response.message
    );

    return;
  }

  setSuccess(
    "Your message has been submitted successfully."
  );

  setName("");
  setEmail("");
  setMobile("");
  setCompanyName("");
  setCity("");
  setMessage("");
} catch {
  setError(
    "Failed to submit message."
  );
} finally {
  setLoading(false);
}


}

return ( <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

  <h2 className="mb-2 text-3xl font-bold text-[#0F2747]">
    Send Enquiry
  </h2>

  <p className="mb-6 text-slate-600">
    Our automation experts will contact you shortly.
  </p>

  {error && (
    <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
      {error}
    </div>
  )}

  {success && (
    <div className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
      {success}
    </div>
  )}

  <form
    onSubmit={handleSubmit}
    className="space-y-5"
  >
    <input
      type="text"
      placeholder="Name *"
      value={name}
      onChange={(e) =>
        setName(
          e.target.value
        )
      }
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F2747]"
    />

    <input
      type="email"
      placeholder="Email *"
      value={email}
      onChange={(e) =>
        setEmail(
          e.target.value
        )
      }
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F2747]"
    />

    <input
      type="text"
      placeholder="Mobile *"
      value={mobile}
      onChange={(e) =>
        setMobile(
          e.target.value
        )
      }
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F2747]"
    />

    <input
      type="text"
      placeholder="Company Name"
      value={companyName}
      onChange={(e) =>
        setCompanyName(
          e.target.value
        )
      }
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F2747]"
    />

    <input
      type="text"
      placeholder="City"
      value={city}
      onChange={(e) =>
        setCity(
          e.target.value
        )
      }
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F2747]"
    />

    <textarea
      rows={5}
      placeholder="Message *"
      value={message}
      onChange={(e) =>
        setMessage(
          e.target.value
        )
      }
      required
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-[#0F2747]"
    />

    <div className="flex flex-col gap-3 sm:flex-row">

      <button
        type="submit"
        disabled={loading}
        className="
          rounded-xl
          bg-[#0F2747]
          px-6
          py-3
          font-medium
          text-white
          transition
          hover:bg-[#173865]
          disabled:opacity-60
        "
      >
        {loading
          ? "Submitting..."
          : "Send Message"}
      </button>

      <a
        href="https://wa.me/917057748540"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-xl
          bg-[#0F2747]  
          px-6
          py-3
          text-center
          font-medium
          text-white
          transition
          hover:bg-[#173865]
        "
      >
        WhatsApp Us
      </a>

    </div>
  </form>
</div>


);
}
