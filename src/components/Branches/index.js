import React from 'react';
import DataTable from '../DataTable';
import { Button } from 'antd';
import BranchForm from './BranchForm';

const columns = [{
  title: 'Branch Name',
  dataIndex: 'branchName',
  key: 'branchName',  
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
  branchName: 'Breakfast'
}, {
  key: '2',
  branchName: 'Lunch'  
}, {
  key: '3',
  branchName: 'Snacks'
}, {
  key: '4',
  branchName: 'Veg Snacks'
}, {
  key: '5',
  branchName: 'Non-veg Snacks'
}, {
  key: '6',
  branchName: 'Dinner'
}, {
  key: '7',
  branchName: 'Drinks'
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
        { this.state.menuOpen && <BranchForm handleClick={this.handleClick}/> }        
        <DataTable name="Branch" columns={columns} data={data} handleClick={this.handleClick} menuOpen={this.state.menuOpen}/>
      </div>
    )
  }
}