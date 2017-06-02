import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paragraph from './Paragraph';
import Title from './Title';
import ReactHtmlParser from 'react-html-parser';
import ArticleMeta from './ArticleMeta';

export default class ListItem extends  Component  {
	render() {
		const { article } =  this.props;

		return (
			<article className='article'>
				<a href={`/articles/${article.id}`}>
					<Title block='article' text={ ReactHtmlParser(article.title) } />
				</a>
				<ArticleMeta date={ new Date(article.created_at).toLocaleDateString() } />
				<div className='article__text text'>
					{ ReactHtmlParser(article.announce_text) }
				</div>
				<a  
					href={`/articles/${article.id}`}
					className='article__toArticle'>
						Читать дальше&hellip;
				</a>
			</article>
		);
	}
}