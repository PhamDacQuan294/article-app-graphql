"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const article_resolver_1 = require("./article.resolver");
const category_resolver_1 = require("./category.resolver");
exports.resolvers = [
    article_resolver_1.resolversArticle,
    category_resolver_1.resolversCategory
];
