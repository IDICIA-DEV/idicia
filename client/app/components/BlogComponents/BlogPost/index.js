// Element for displaying blog previews
import React, { PropTypes } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { getDate } from 'utils/postFormatter';
import styles from './styles.scss';

const BlogPost = ({ post }) => {
  const brief = post.content.brief.html || post.content.brief;
  const postBody = post.content.extended.html || post.content.markdown.html;
  const date = getDate(post.publishedDate);

  return (
    <section className={styles.dropCard}>
      <Card style={{ width: 'auto' }}>
        {post.image &&
        <CardMedia
          aspectRatio="wide"
          image={post.image.url}
        />
        }
        <CardTitle
          title={post.title}
          subtitle={date}
        />
        <CardText>
          <blockquote dangerouslySetInnerHTML={{ __html: brief }} />
          <section dangerouslySetInnerHTML={{ __html: postBody }} />
        </CardText>
        <CardActions>
        </CardActions>
      </Card>
    </section>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object,
};

export default BlogPost;
