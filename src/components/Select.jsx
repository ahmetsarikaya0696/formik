import { useField } from "formik";

export default function Select({ children, label, ...rest }) {
  const [field, meta] = useField(rest);
  return (
    <div>
      <label>{label}</label>
      <select {...field} {...rest} className={meta.error ? "input-error" : ""}>
        {children}
      </select>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
