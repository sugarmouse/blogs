import { ChangeEventHandler, FormEventHandler, ReactElement } from 'react';

type Props = {
  fields: {
    label: string;
    value: string | number;
    type: 'text' | 'password';
    onChange: ChangeEventHandler<HTMLInputElement>;
    errors: string[];
  }[];
  onSubmit: FormEventHandler<HTMLFormElement>;
  button: ReactElement;
};

export const Form: React.FC<Props> = (props) => {
  const { fields, button, onSubmit } = props;
  return (
    <>
      <h1>test</h1>
      <form onSubmit={onSubmit}>
        {fields.map((field) => (
          <div>
            <label>
              {field.label}
              <input
                type={field.type}
                value={field.value}
                onChange={field.onChange}
              />
            </label>
            {field.errors.length > 0 && field.errors[0]}
          </div>
        ))}
        <div>{button}</div>
      </form>
    </>
  );
};
