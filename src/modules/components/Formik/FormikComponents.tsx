import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }:any) => {

  const [field, meta] = useField(props);
  return (
    <>
      <span>{label}</span>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <p className="error">{meta.error}</p>
      ) : null}
    </>
  );
};
