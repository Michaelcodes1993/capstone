import React from 'react';

import BlogApiService from '../services/blog-api-service';

export default class Home extends React.Component {
  static defaultProps = {
    match: { params: {} },
  };

  static contextType = BlogContext;

  ComponentDidMount() {
    const { blogId } = this.props.match.params;
    this.context.clearError();
    BlogApiService.getBlogsList(blogId)
      .then(this.context.setBlog)
      .catch(this.context.setError);
    BlogApiService.getBlogComment(blogId)
      .then(this.context.setComment)
      .catch(this.context.setError);
  }

  componentWillUnmount() {
    this.context.clearBlog();
  }

  renderBlog() {
    const { blog, comment } = this.context;
    return (
      <>
        <div
          className="blogPage_image"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <h2>{blog.title}</h2>
        <BlogContent blog={blog} />
        <BlogComment comment={comment} />
        <CommentForm />{' '}
      </>
    );
  }
}

// const trendingConfig = {
//   1: {
//     gridArea: '1/2/3/3',
//   },
// };
// const featuredConfig = {
//   0: {
//     gridArea: '1/1/2/4',
//   },
// };
// const mergeStyles = function (posts, config) {
//   posts.forEach((post, index) => {
//     post.style = config[index];
//   });
// };

// mergeStyles(trending, trendingConfig);
// mergeStyles(featured, featuredConfig);

// const lastFeatured = featured.pop();

// export default function Home() {
//   console.log(lastFeatured);
//   return (
//     <section className="container home">
//       <div className="row">
//         <h1>Featured Posts</h1>
//         <section className="featured-posts-container">
//           <PostMasonry posts={featured} columns={2} tagsOnTop={true} />
//           {/* <MasonryPost post={lastFeatured} tagsOnTop={true} /> */}
//         </section>
//         <h1>Trending Topics</h1>
//         <PostMasonry posts={trending} columns={3} />
//       </div>
//     </section>
//   );
// }
