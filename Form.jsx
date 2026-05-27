import React, { useState } from 'react';
import './Form.css';

/**
 * Form Component
 * Props:
 *  - title (string): Form heading
 *  - fields (array): [{ name, label, type, placeholder, required }]
 *  - submitLabel (string): submit button text
 *  - onSubmit (func): receives form data object
 */
const Form = ({
  title = 'Contact Me',
  fields = [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe', required: true },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com', required: true },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Inquiry', required: false },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project...', required: true },
  ],
  submitLabel = 'Send Message',
  onSubmit = (data) => { console.log('Form submitted:', data); alert('Form submitted! Check console.'); },
}) => {
  const initialState = fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), {});
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    fields.forEach((f) => {
      if (f.required && !values[f.name].trim()) {
        newErrors[f.name] = `${f.label} is required.`;
      }
      if (f.type === 'email' && values[f.name] && !/\S+@\S+\.\S+/.test(values[f.name])) {
        newErrors[f.name] = 'Enter a valid email address.';
      }
    });
    return newErrors;
  };

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onSubmit(values);
    setSubmitted(true);
    setValues(initialState);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">{title}</h2>
      {submitted && (
        <div className="form-success">✓ Message sent successfully!</div>
      )}
      <form className="form" onSubmit={handleSubmit} noValidate>
        {fields.map((field) => (
          <div key={field.name} className={`form__group ${errors[field.name] ? 'form__group--error' : ''}`}>
            <label className="form__label">
              {field.label}
              {field.required && <span className="form__required">*</span>}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                className="form__input form__textarea"
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
                rows={4}
              />
            ) : (
              <input
                className="form__input"
                type={field.type}
                placeholder={field.placeholder}
                value={values[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            )}
            {errors[field.name] && (
              <span className="form__error">{errors[field.name]}</span>
            )}
          </div>
        ))}
        <button type="submit" className="form__submit">{submitLabel} →</button>
      </form>
    </div>
  );
};

export default Form;
