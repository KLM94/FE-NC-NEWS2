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

export const postComment = (reqBody, id) => {
  const baseURL = `https://kirstys-nc-news.herokuapp.com/api/articles/${id}/comments`;
  return axios.post(baseURL, reqBody).then(({ data }) => {
    return data.comment;
  });
};
