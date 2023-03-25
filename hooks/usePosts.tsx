import { useEffect, useState } from 'react';
import axios from 'axios';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get('/api/v1/posts').then(
      (res) => {
        setPosts(res.data);
        setIsLoading(false);
        if (res.data.length === 0) {
          setIsEmpty(true);
        }
      },
      () => {
        setIsLoading(false);
      }
    );
  }, []);

  return { posts, isLoading, isEmpty, setIsEmpty, setIsLoading, setPosts };
}
