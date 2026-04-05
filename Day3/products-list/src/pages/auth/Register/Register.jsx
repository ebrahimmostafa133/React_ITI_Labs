import { Field, Form, Formik, ErrorMessage } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { use, useContext } from "react"
import { AuthContext } from "../../../Context/AuthContext"
import * as Yup from "yup"
function Register() {
  const navigate = useNavigate()
  const { register } = useContext(AuthContext)
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
  })
  const onSubmit = (values) => {
    register({ email: values.email, name: values.name, username: values.username })
    navigate('/')
  }

  return (
    <div className=" flex items-center justify-center bg-slate-100 px-4 py-10 min-h-screen">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">Create account</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Register</h2>
          <p className="mt-2 text-sm text-slate-500">Join now and start exploring the product catalog.</p>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
              <Field
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="name" /></div>
            </div>

            <div className="mb-5">
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-700">Username</label>
              <Field
                name="username"
                type="text"
                placeholder="Enter your username"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="username" /></div>
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="email" /></div>
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="password" /></div>
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">Confirm Password</label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="confirmPassword" /></div>
            </div>

            <button type="submit" className="w-full rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200 transition hover:from-emerald-700 hover:to-teal-600">
              Register
            </button>

            <p className="mt-5 text-center text-sm text-slate-500">
              Already have an account? <Link to="/login" className="font-semibold text-emerald-600 hover:text-emerald-700">Login</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Register
