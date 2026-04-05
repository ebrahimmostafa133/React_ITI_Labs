import { useState } from "react"
import { Field, Form, Formik, ErrorMessage } from "formik"
import * as Yup from "yup"
function ContactUs() {
  const [successMessage, setSuccessMessage] = useState("")
  const initialValues = {
    fname: "",
    lname: "",
    phone: "",
    email: "",
    message: "",
  }
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits").required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
  })
  const onSubmit = (values, { resetForm }) => {
    setSuccessMessage("Thank you for contacting us! We will get back to you soon.")
    resetForm()
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-xl rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-600">Get in touch</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Contact Us</h2>
          <p className="mt-2 text-sm text-slate-500">Send us a message and we&apos;ll get back to you shortly.</p>
        </div>

        {successMessage && (
          <div className="mb-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-700 shadow-sm">
            {successMessage}
          </div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="mb-5">
              <label htmlFor="fname" className="mb-2 block text-sm font-medium text-slate-700">First Name</label>
              <Field
                name="fname"
                type="text"
                placeholder="Enter your first name"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="fname" /></div>

              <label htmlFor="lname" className="mb-2 block text-sm font-medium text-slate-700">Last Name</label>
              <Field
                name="lname"
                type="text"
                placeholder="Enter your last name"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="lname" /></div>
            </div>

            <div className="mb-5">
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
              <Field
                name="phone"
                type="text"
                placeholder="Enter your phone number"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="phone" /></div>
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="email" /></div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
              <Field
                name="message"
                as="textarea"
                placeholder="Enter your message"
                className="h-32 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="message" /></div>
            </div>

            <button type="submit" className="w-full rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:from-sky-700 hover:to-cyan-600">
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default ContactUs
