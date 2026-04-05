import { Field, Form, Formik, ErrorMessage } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../Context/AuthContext"
import * as Yup from "yup"
function Login() {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const initialValues = {
    email: "",
    password: "",
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  })
  const onSubmit = (values) => {
    login({ email: values.email, name: values.email.split('@')[0] })
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4 py-10">
      <div className="w-full max-w-md rounded-[32px] bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-600">Sign in</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Welcome Back</h2>
          <p className="mt-2 text-sm text-slate-500">Log in to manage your products and access your cart.</p>
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
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="email" /></div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              <div className="mt-2 text-xs text-red-500"><ErrorMessage name="password" /></div>
            </div>

            <button type="submit" className="w-full rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:from-blue-700 hover:to-cyan-600">
              Login
            </button>

            <p className="mt-5 text-center text-sm text-slate-500">
              Don't have an account? <Link to="/register" className="font-semibold text-blue-600 hover:text-blue-700">Register</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Login
