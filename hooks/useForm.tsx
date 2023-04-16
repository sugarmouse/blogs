import { FormEvent, ReactElement, useCallback, useState } from 'react';

type useFormOptions<InitFormData> = {
  initFormData: InitFormData;
  fields: {
    label: string;
    type: 'text' | 'password' | 'textarea';
    key: keyof InitFormData;
  }[];
  onSubmit: (formData: InitFormData) => void;
  button: ReactElement;
};

export function useForm<InitFormData>(options: useFormOptions<InitFormData>) {
  const { initFormData, fields, onSubmit, button } = options;
  const [formData, setFromData] = useState(initFormData);
  const [errors, setErrors] = useState(() => {
    const e: { [k in keyof InitFormData]?: string[] } = {};
    for (let key in initFormData) {
      if (initFormData.hasOwnProperty(key)) {
        e[key] = [];
      }
    }
    return e;
  });

  const onChange = useCallback(
    (key: keyof InitFormData, value: string | number) => {
      setFromData({
        ...formData,
        [key]: value,
      });
    },
    [formData]
  );

  const _onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(formData);
    },
    [onSubmit, formData]
  );

  const form = (
    <form onSubmit={_onSubmit}>
      {fields.map((field) => (
        <div key={field.label}>
          <label>
            {field.label}
            {field.type === 'textarea' ? (
              <textarea
                value={formData[field.key].toString()}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
            ) : (
              <input
                type={field.type}
                value={formData[field.key].toString()}
                onChange={(e) => onChange(field.key, e.target.value)}
              />
            )}
          </label>
          {errors[field.key].length > 0 && errors[field.key][0]}
        </div>
      ))}
      <div>{button}</div>
    </form>
  );

  return { form, formData, setFromData, errors, setErrors };
}
