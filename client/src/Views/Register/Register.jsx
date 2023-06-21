import { useState } from "react";
import { createUser } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const validateUser = await dispatch(createUser(data)); // Esperar a que se resuelva la promesa
      console.log(validateUser);
      if (validateUser) {
        navigate("/");
      }
    } catch (error) {
      alert(error);
    }
  };

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateField = (fieldName, value) => {
    let error = "";

    switch (fieldName) {
      case "email":
        if (!emailRegex.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "password":
        if (!passwordRegex.test(value)) {
          error =
            "Password must contain at least one uppercase letter and one special character (!@#$%^&*), and be at least 6 characters long";
        }
        break;
      case "confirmPassword":
        if (value !== data.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }

    return error;
  };

  const isFormValid = () => {
    return (
      !errors.email &&
      !errors.password &&
      !errors.confirmPassword &&
      data.email &&
      data.password &&
      data.confirmPassword &&
      data.name
    );
  };

  return (
    <section style={{ backgroundColor: "#f3f4f6" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          height: "100vh",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#111827",
          }}
        >
          logo
        </a>
        <div
          style={{
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "0.375rem",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            maxWidth: "20rem",
            padding: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <h1
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                lineHeight: "1.5",
                color: "#111827",
              }}
            >
              Create an account
            </h1>
            <form onSubmit={handleRegister} style={{ marginTop: "1.5rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="name"
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                    color: "#111827",
                  }}
                >
                  Your name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  style={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #d1d5db",
                    color: "#111827",
                    fontSize: "0.875rem",
                    borderRadius: "0.375rem",
                    padding: "0.625rem",
                    width: "100%",
                  }}
                  placeholder="name"
                  required
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  value={data.name}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="email"
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                    color: "#111827",
                  }}
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  style={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #d1d5db",
                    color: "#111827",
                    fontSize: "0.875rem",
                    borderRadius: "0.375rem",
                    padding: "0.625rem",
                    width: "100%",
                  }}
                  placeholder="name@company.com"
                  required
                  onChange={handleInputChange}
                  value={data.email}
                />
                {errors.email && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="password"
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                    color: "#111827",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  style={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #d1d5db",
                    color: "#111827",
                    fontSize: "0.875rem",
                    borderRadius: "0.375rem",
                    padding: "0.625rem",
                    width: "100%",
                  }}
                  placeholder="••••••••"
                  required
                  onChange={handleInputChange}
                  value={data.password}
                />
                {errors.password && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {errors.password}
                  </p>
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="confirm-password"
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "0.875rem",
                    fontWeight: "medium",
                    color: "#111827",
                  }}
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirm-password"
                  style={{
                    backgroundColor: "#f9fafb",
                    border: "1px solid #d1d5db",
                    color: "#111827",
                    fontSize: "0.875rem",
                    borderRadius: "0.375rem",
                    padding: "0.625rem",
                    width: "100%",
                  }}
                  placeholder="••••••••"
                  required
                  onChange={handleInputChange}
                  value={data.confirmPassword}
                />
                {errors.confirmPassword && (
                  <p
                    style={{
                      color: "red",
                      fontSize: "0.75rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid()}
                style={{
                  width: "100%",
                  color: "#000",
                  backgroundColor: "#fff",
                  hoverBackgroundColor: "#e5e7eb",
                  focusRingColor: "#6b7280",
                  fontWeight: "medium",
                  borderRadius: "0.375rem",
                  fontSize: "0.875rem",
                  padding: "0.625rem",
                  textAlign: "center",
                  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                  border: "none",
                  outline: "none",
                }}
              >
                Create an account
              </button>

              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.875rem",
                  fontWeight: "light",
                  color: "#6b7280",
                }}
              >
                Already have an account?{" "}
                <a
                  href="/"
                  style={{
                    fontWeight: "medium",
                    color: "#3b82f6",
                    hoverColor: "#2563eb",
                  }}
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
