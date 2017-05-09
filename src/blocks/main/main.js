import React from 'react'; 
import { render } from 'react-dom';
import { Route } from 'react-router-dom'
import { About }from './../main/components/About.js';
import { Archive } from './../main/components/Archive.js';
import { Blog } from '../main/components/Blog.js';
import { Connect } from '../main/components/Connect.js';
import { NotFound } from '../main/components/NotFound.js';

const Main = () => (
	<main>       
    <div className='container'>
	  <Route exact path='/' component={Blog} />
      <Route path="/connect" component={Connect}/>
      <Route path="/about" component={About}/>
      <Route path="/archive" component={Archive}/>
	 </div>
   </main>
)


export { Main };