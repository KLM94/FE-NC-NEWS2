import axios from "axios";

export const getArticle = id => {
  const baseURL = `https://kirstys-nc-news.herokuapp.com/api/articles/${id}`;
  return axios.get(baseURL);
};

export const getArticles = (topic, sortBy) => {
  const baseURL = `https://kirstys-nc-news.herokuapp.com/api/articles`;
  return axios.get(baseURL, { params: { topic: topic } });
};

export const getTopics = () => {
  const baseURL = "https://kirstys-nc-news.herokuapp.com/api/topics";
  return axios.get(baseURL);
};

export const getComments = id => {
  const baseURL = `https://kirstys-nc-news.herokuapp.com/api/articles/${id}/comments`;
  return axios.get(baseURL);
};

export const postComment = (body, article_id, username) => {
  const baseURL = `https://kirstys-nc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios
    .post(baseURL, { body, username })
    .then(res => {
      return res.data.comment;
    })
    .catch(err => console.dir(err));
};

export const deleteComment = comment_id => {
  const baseURL = `https://kirstys-nc-news.herokuapp.com/api/comments/${comment_id}`;
  return axios
    .delete(baseURL)
    .then(res => {
      return res.data.comment;
    })
    .catch(err => console.dir(err));
};
