import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SendEmail = () => {
  const notifyError = (message) => toast.error(message);
  const notify = (message) => toast.success(message);

  const handleSendEmail = async (values) => {
    const { email } = values;
    try {
      await axios.post("http://localhost:3001/sendEmail", { email });
      notify("Email sent successfully, check your inbox");
    } catch (error) {
      notifyError(error.response.data.message || "Error sending email");
    }
  };

  return (
    <section className="min-h-screen pt-9 flex flex-col items-center justify-center">
      <div className="max-w-lg w-full mx-auto p-6 bg-gray-200 border  shadow-md rounded-md">
        <Formik
          initialValues={{
            email: "",
          }}
          validate={(values) => {
            const errors = {};

            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Formato de correo electrónico inválido";
            }

            return errors;
          }}
          onSubmit={handleSendEmail}
        >
          <Form>
            <div className="mb-3 ">
              <label
                htmlFor="email"
                className="text-xl font-bold mt-3 text-gray-800"
              >
                <p className="mb-4 text-l">
             Please, enter your email address.
                </p>

           
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="nombre@empresa.com"
                className="w-[69%] p-3 border border-gray-300 rounded-[3rem]"
                required
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-[30%]  bg-gray-800 text-white  rounded-[5rem] p-3 text-lg font-bold cursor-pointer hover:bg-white hover:text-gray-800"
            >
              Send email
            </button>
          </Form>
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
};

export default SendEmail;
