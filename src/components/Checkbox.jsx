import { useField } from "formik";

export default function Input({ label, ...rest }) {
  const [field, meta] = useField(rest);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          {...field}
          {...rest}
          className={meta.error ? "input-error" : ""}
        />
        <span>{label}</span>
      </label>
      {meta.error && <div className="error">{meta.error}</div>}
    </div>
  );
}
