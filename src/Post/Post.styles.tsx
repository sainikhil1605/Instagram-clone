import { makeStyles } from '@material-ui/styles';

const PostStyles = makeStyles({
  postImage: {
    objectFit: 'contain',
    width: '100%',
    maxHeight: '200px',
    maxWidth: '400px',
    alignSelf: 'center',
    marginBottom: '20px',
  },
  userName: {
    marginRight: '10px',
  },
  postHeader: {
    display: 'flex',
    padding: '5px',

    alignItems: 'center',
    borderBottom: '1px solid lightgray',
  },
  avatar: {
    marginRight: '10px',
    marginLeft: '10px',
  },
  post: {
    margin: 'auto',
    backgroundColor: 'white',
    maxWidth: '700px',
    display: 'flex',
    flexDirection: 'column',
    borderTop: '1px solid lightgray',
    borderBottom: '1px solid lightgray',
    marginBottom: '30px',
  },
  caption: {
    padding: '20px',
  },
});
export default PostStyles;
