interface PostProps {
  author: string;
  content: string;
}

export const Post = ({ author, content }: PostProps) => {
  return (
    <div>
      <h3>{author}</h3>
      <span>{content}</span>
    </div>
  );
};
