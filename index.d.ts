interface Post {
  id: string;
  title: string;
  date: string;
};

interface PostWithContent extends Post {
  content: string;
}