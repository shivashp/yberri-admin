import React from 'react';
import DataTable from '../DataTable';
import { Button } from 'antd';
import ItemForm from './ItemForm';

const columns = [{
  title: 'Item Image',
  dataIndex: 'image',
  key: 'image',  
  className: 'table-image',
  render: (text,record) => <img src={text} alt={record.name} />,
}, {
  title: 'Item Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Category',
  dataIndex: 'category',
  key: 'category',
}, {
  title: 'Price',
  dataIndex: 'price',
  key: 'price',
}, {
  title: 'Action',
  key: 'action',
  className: 'table-action',
  render: (text, record) => (
    <span>      
      <Button type="danger">Delete</Button>      
    </span>
  ),
}];

const data = [{
  key: '1',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg',
  name: 'Veg Momo',
  category: 'Snacks',
  price: 140
}, {
  key: '2',
  image: 'https://cdn5.norecipes.com/wp-content/uploads/2015/05/23053212/recipechicken-chow-mein.1024x1024-4.jpg',
  name: 'Chowmein',
  category: 'Veg Item',
  price: 160
}, {
  key: '3',
  image: 'http://hellolittlehome.com/wp-content/uploads/2015/10/sweet-cinnamon-milk-tea-5-300x300.jpg',
  name: 'Milk Tea',
  category: 'Hot Drinks',
  price: 40
}, {
  key: '4',
  image: 'https://vignette.wikia.nocookie.net/phobia/images/2/2e/Beer.jpg/revision/latest?cb=20161108052500',
  name: 'Tuborg Beer',
  category: 'Drinks',
  price: 400
}, {
  key: '5',
  image: 'http://www.uno.com.np/user_upload/images/images_(2)4930296.jpg',
  name: 'Thakali Khana',
  category: 'Lunch',
  price: 260
}, {
  key: '6',
  image: 'https://www.browneyedbaker.com/wp-content/uploads/2013/05/vanilla-bean-ice-cream-23-600.jpg',
  name: 'Vanilla Ice-cream',
  category: 'Dessert',
  price: 110
}, {
  key: '7',
  image: 'http://www.telegraph.co.uk/content/dam/food-and-drink/2017/01/04/coffeeS006G8_wwwAlamycom_Heart-shaped-coffee-art-on-a-latte_trans_NvBQzQNjv4BqEDjTm7JpzhSGR1_8ApEWQA1vLvhkMtVb21dMmpQBfEs.jpg?imwidth=450',
  name: 'Coffee',
  category: 'Hot Drinks',
  price: 90
}];

export default class ItemCategories extends React.Component {
  state = {
    menuOpen: false
  }
  handleClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }  
  render() {
    return (
      <div>
        { this.state.menuOpen && <ItemForm handleClick={this.handleClick}/> }        
        <DataTable name="Item" columns={columns} data={data} handleClick={this.handleClick} menuOpen={this.state.menuOpen}/>
      </div>
    )
  }
}