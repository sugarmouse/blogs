import { GetServerSideProps } from 'next';
import { useForm } from '@/hooks/useForm';
import axios from 'axios';

type ThisFormData = {
  title: string;
  content: string;
};

const NewPost = () => {
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

  const { form, setErrors } = useForm<ThisFormData>({
    initFormData: {
      title: '',
      content: '',
    },
    fields: [
      { label: '标题', type: 'text', key: 'title' },
      { label: '内容', type: 'textarea', key: 'content' },
    ],
    button: <button type="submit">注册</button>,
    onSubmit,
  });

  return <>{form}</>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default NewPost;
