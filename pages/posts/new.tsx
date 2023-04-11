import { GetServerSideProps } from 'next';
import { Form } from '@/components/Form';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

type ThisFormData = {
  title: string;
  content: string;
};

type ThisErrors = {
  title: string[];
  content: string[];
};

const NewPost = () => {
  const [formData, setFromData] = useState<ThisFormData>({
    title: '',
    content: '',
  });

  const [errors, setErrors] = useState<ThisErrors>({
    title: [],
    content: [],
  });

  const onChange = useCallback(
    (key: keyof ThisFormData, value: string | number) => {
      setFromData({
        ...formData,
        [key]: value,
      });
    },
    [formData]
  );

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      console.log(formData);
    },
    [formData]
  );

  return (
    <>
      <Form
        fields={[
          {
            label: '标题',
            type: 'text',
            value: formData.title,
            onChange: (e) => onChange('title', e.target.value),
            errors: errors.title,
          },
          {
            label: '内容',
            type: 'textarea',
            value: formData.content,
            onChange: (e) => onChange('content', e.target.value),
            errors: errors.content,
          },
        ]}
        onSubmit={onSubmit}
        button={<button type="submit">创建</button>}
      />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default NewPost;
