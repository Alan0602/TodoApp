import { useField } from 'formik';
import './formikComponent.css'

export const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div className={`${props.className ? props.className : ''}`}>
      <label htmlFor={props.name} style={{ fontWeight: 'bold' }}>
        {label}
      </label>
      <input
        className={`text-input input1 ${meta.touched && meta.error ? 'error' : ''}`} // Add CSS classes conditionally
        {...field}
        {...props}
        style={{
          border: '1px solid #ccc',
          borderRadius: '25px',
          padding: '8px',
          width: '78%',
          textAlign: 'center',
          // Add more inline styles as needed
        }}
        required
      />
      {meta.touched && meta.error ? (
        <p className="error" style={{ color: 'red', margin:'0%',fontSize:'12px' }}>
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
