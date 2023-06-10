import { useField } from 'formik';

export const MyTextInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.name} style={{ fontWeight: 'bold' }}>
        {label}
      </label>
      <input
        className={`text-input ${meta.touched && meta.error ? 'error' : ''}`} // Add CSS classes conditionally
        {...field}
        {...props}
        style={{
          border: '1px solid #ccc',
          borderRadius: '20px',
          padding: '8px',
          width: '78%',
          textAlign: 'center',
          // Add more inline styles as needed
        }}
      />
      {meta.touched && meta.error ? (
        <p className="error" style={{ color: 'red', margin:'0%',fontSize:'12px' }}>
          {meta.error}
        </p>
      ) : null}
    </div>
  );
};
