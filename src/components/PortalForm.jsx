import { Form, Formik } from "formik";
import Input from "./Input";
import { portalSchema } from "../schemas";
import Select from "./Select";
import Checkbox from "./Checkbox";

const onSubmit = async (values, actions) => {
  await new Promise((r) => setTimeout(r, 1000));
  actions.resetForm();
};

export default function PortalForm() {
  return (
    <>
      <Formik
        initialValues={{ userName: "", school: "", isAccepted: false }}
        onSubmit={onSubmit}
        validationSchema={portalSchema}
      >
        {({ isSubmitting }) => (
          <Form className="form-container">
            <Input
              label="UserName"
              name="userName"
              type="text"
              placeholder="Please enter your userName"
            />
            <Select
              label="School"
              name="school"
              placeholder="Plase select a school"
            >
              <option value="">Please select a school</option>
              <option value="MIT">MIT</option>
              <option value="Harvard">Harvard</option>
              <option value="Stanford">Stanford</option>
              <option value="Oxford">Oxford</option>
            </Select>
            <Checkbox label="I accept the terms" name="isAccepted" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
