"use strict"

import React from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../../actions/booksActions';
import {bindActionCreators} from 'redux';
import {Carousel, Grid, Col, Row, Button} from 'react-bootstrap';

import BookItem from './bookItem';
import BooksForm from './booksForm';
import Cart from './cart';


class BooksList extends React.Component{
	componentDidMount(){
		// Dispatch an Action
		this.props.getBooks();
	}

	render(){
		const booksList =  this.props.books.map(function(booksArr){
			return(
				<Col xs={12} sm={6} md={4} key={booksArr._id}>
				<BookItem
					_id= {booksArr._id}
					title={booksArr.title}
					description={booksArr.description}
					images={booksArr.images}
					price={booksArr.price}/>
				</Col>
				)
		})
		return(
			<Grid>
				<Row>
					 <Carousel>
					    <Carousel.Item>
					      <img width={900} height={300} alt="900x300" src="/images/home1.jpg" />
					      <Carousel.Caption>
					        <h3>Welcome to your Shopping Cart</h3>
					      </Carousel.Caption>
					    </Carousel.Item>
					    <Carousel.Item>
					      <img width={900} height={300} alt="900x300" src="/images/home2.jpg" />
					      <Carousel.Caption>
					        <h3>Have a good day shopping</h3>
					      </Carousel.Caption>
					    </Carousel.Item>
					 </Carousel>
				</Row>
				<Row>
					<Cart />
				</Row>
				<Row style={{marginTop:'15px'}}>
					{booksList}
				</Row>
			</Grid>
			)
	}
}
function mapStateToProps(state){
	return{
		books: state.books.books
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		getBooks:getBooks
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);