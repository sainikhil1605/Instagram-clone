import { Avatar } from '@material-ui/core';
import PostStyles from './Post.styles';
type Postprops = {
  imageUrl: string;
  userName: string;
  caption: string;
};
const Post = ({ imageUrl, userName, caption }: Postprops) => {
  const styles = PostStyles();
  return (
    <div className={styles.post}>
      <div className={styles.postHeader}>
        <Avatar className={styles.avatar} alt="post" src={imageUrl} />
        <h5>{userName}</h5>
      </div>
      <img src={imageUrl} alt="post" className={styles.postImage} />
      <p className={styles.caption}>
        <strong className={styles.userName}>{userName}</strong>
        <span>{caption}</span>
      </p>
    </div>
  );
};

export default Post;
