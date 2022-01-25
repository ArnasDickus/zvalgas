import React from "react";

interface IArticlesData {
    id: number;
    authorName: string;
    articleTitle: string;
    articleDate: Date;
    imageLink: string;
    authorHtml: React.ReactNode;
    articleCardData: {
        name: string;
        description: string;
    },
}


export const articlesData: IArticlesData[] = [
  {
    id: 1,
    authorName: 'Peter Jackson',
    articleTitle: 'Why I like reading',
    articleDate: new Date(),
    imageLink: 'fdfdf',
    authorHtml: `<div>Hello world this is my name</div>`,
    articleCardData: {
      name: 'Hello',
      description: 'very good article'
    }
  },
  {
    id: 2,
    authorName: 'Peter Jackson',
    articleTitle: 'Why I like reading',
    articleDate: new Date(),
    imageLink: 'fdfdf',
    authorHtml: `<div>Hello world this is my name</div>`,
    articleCardData: {
      name: 'Hello',
      description: 'very good article'
    }
  },
  {
    id: 3,
    authorName: 'Peter Jackson',
    articleTitle: 'Why I like reading',
    articleDate: new Date(),
    imageLink: 'fdfdf',
    authorHtml: `<div>Hello world this is my name</div>`,
    articleCardData: {
      name: 'Hello',
      description: 'very good article'
    }
  }
]
