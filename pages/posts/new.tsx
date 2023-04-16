import { GetServerSideProps } from 'next';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useForm } from '@/hooks/useForm';
import axios from 'axios';
import type { Field } from '@/hooks/useForm';

type ThisFormData = {
  title: string;
  content: string;
};

const NewPost = () => {
  const initFormData: ThisFormData = {
    title: '',
    content: '',
  };

  const fields: Field[] = [
    {
      label: '标题',
      type: 'text',
      key: 'title',
    },
    {
      label: '内容',
      type: 'textarea',
      key: 'content',
    },
  ];

  const onSubmit = (formData: ThisFormData) => {
    axios.post('/posts/new', formData).then(
      () => {
        window.alert('提交成功');
      },
      (e) => {
        setErrors(e);
      }
    );
  };

  const button = <button type="submit">注册</button>;

  const { form, setErrors } = useForm<ThisFormData>(
    initFormData,
    fields,
    onSubmit,
    button
  );

  return <>{form}</>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default NewPost;
