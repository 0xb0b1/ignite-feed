import styles from "./styles.module.scss";

interface PostProps {
  author: string;
  content: string;
}

export const Post = ({ author, content }: PostProps) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/0xb0b1.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>{author}</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title="27 de Julho às 08:13h" dateTime="2022-07-27 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </article>
  );
};
