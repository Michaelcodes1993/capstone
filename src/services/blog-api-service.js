import config from '../config';
import TokenService from './token-service';

const BlogApiService = {
  getBlogsList() {
    return fetch(`${config.API_ENDPOINT}/blogs`, {
      headers: {},
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getBlog(blogId) {
    return fetch(`${config.API_ENDPOINT}/blogs/${blogId}`, {}).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getBlogComment(blogId) {
    return fetch(
      `${config.API_ENDPOINT}/blogs/${blogId}/reviews`,
      {}
    ).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default BlogApiService;
