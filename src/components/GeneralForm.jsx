import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
  await new Promise((r) => setTimeout(r, 1000));
  actions.resetForm();
};

export default function GeneralForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        age: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            placeholder="Please enter your email"
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            placeholder="Please enter your age"
            onChange={handleChange}
            className={errors.age ? "input-error" : ""}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            placeholder="Please enter your password"
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={values.confirmPassword}
            placeholder="Please confirm your password"
            onChange={handleChange}
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
      <Link to="/portal">Go to Portal</Link>
    </div>
  );
}
