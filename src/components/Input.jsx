import { useField } from "formik";

export default function Input({ label, ...rest }) {
  const [field, meta] = useField(rest);
  return (
    <div>
      <label>{label}</label>
      <input
        {...field}
        {...rest}
        className={meta.error ? "input-error" : ""}
      />
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
