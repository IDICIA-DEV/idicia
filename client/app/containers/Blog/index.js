import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import bulma from 'styles/bulma.scss';

import BlogPreviewList from 'components/BlogComponents/BlogPreviewList';
import BlogPost from 'components/BlogComponents/BlogPost';
import LoadingIndicator from 'components/LoadingIndicator';
import Paginator from 'components/Paginator';

import {
  getPostBySlug,
  getPageOfPosts,
} from './actions';
import {
  makeSelectCurrentPage,
  makeSelectFocusedPost,
  makeSelectPosts,
  makeSelectLoading,
  // makeSelectLoadSuccess,
  makeSelectMaxPages,
} from './selectors';

export class Blog extends Component {
  componentDidMount() {
    const {
      currentPage,
      onGetPost,
      onGetPosts,
      routeParams,
    } = this.props;

    // Load content based on if this container is being used to display
    // all posts or a single post specified by the route pathing
    if (routeParams) {
      // Get and render the single post foxued by the user
      console.log(`Retrieve blog post: ${routeParams.postSlug}`);
      onGetPost(routeParams.postSlug);
    } else {
      // On mount, fetch posts from the API to populate the redux store
      // The template below will populate itself based on the store's contents
      console.log('Blog mounted, loading all posts');
      onGetPosts(currentPage);
    }
  }

  // componentDidUpdate() {
  //   const {
  //     loadSuccess,
  //   } = this.props;
  //
  //   if (!loadSuccess) {
  //     alert('Failed to get posts :(');
  //   }
  // }

  render() {
    const {
      currentPage,
      focusedPost,
      loading,
      maxPages,
      onGetPosts,
      posts,
      routeParams,
    } = this.props;

    // Display a single blog post or a list of previews depending on location in the app
    const BlogContainerContent = routeParams ?
      focusedPost && <BlogPost postData={focusedPost} /> :
      posts && <BlogPreviewList posts={posts} />;

    return (
      <section id="content" className={bulma.container}>
        {loading ? <LoadingIndicator /> : BlogContainerContent}
        {!routeParams ?
          <Paginator
            currPage={currentPage}
            numPages={maxPages}
            getPosts={onGetPosts}
          /> : null}
      </section>
    );
  }
}

Blog.propTypes = {
  currentPage: PropTypes.number,
  focusedPost: PropTypes.object,
  loading: PropTypes.bool,
  // loadSuccess: PropTypes.bool,
  maxPages: PropTypes.number,
  onGetPost: PropTypes.func,
  onGetPosts: PropTypes.func,
  posts: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  routeParams: PropTypes.object,
};

// Need to export so we can test and have full test coverage in Jest
export const mapDispatchToProps = (dispatch) => ({
  onGetPost: (slug) => dispatch(getPostBySlug(slug)),
  onGetPosts: (page) => dispatch(getPageOfPosts(page)),
});

const mapStateToProps = createStructuredSelector({
  currentPage: makeSelectCurrentPage(),
  focusedPost: makeSelectFocusedPost(),
  maxPages: makeSelectMaxPages(),
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
  // loadSuccess: makeSelectLoadSuccess(),
});

// Wrap the component to inject dispatch and state
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
