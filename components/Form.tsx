import { ChangeEventHandler, FormEventHandler, ReactElement } from 'react';

type Props = {
  fields: {
    label: string;
    value: string | number;
    type: 'text' | 'password' | 'textarea';
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    errors: string[];
  }[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  button: ReactElement;
};

export const Form: React.FC<Props> = (props) => {
  const { fields, button, onSubmit } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <div key={field.label}>
            <label>
              {field.label}
              {field.type === 'textarea' ? (
                <textarea value={field.value} onChange={field.onChange} />
              ) : (
                <input
                  type={field.type}
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            </label>
            {field.errors.length > 0 && field.errors[0]}
          </div>
        ))}
        <div>{button}</div>
      </form>
    </>
  );
};
