import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Article {
    id: ID,
    title: String,
    avatar: String,
    description: String
  }

  type Query { # Để lấy ra
    hello: String,
    getListArticle: [Article],
    getArticle(id: ID): Article
  }

  input ArticleInput {
    title: String,
    avatar: String,
    description: String
  }

  type Mutation { #Chỉnh sửa thì viết vào đây thêm sửa xoá..
    createArticle(article: ArticleInput): Article,
    deleteArticle(id: ID): String
  }
`;
