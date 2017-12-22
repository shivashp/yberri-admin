import React from 'react';
import { 
  Table, Divider, Row, Col, Button, Layout
} from 'antd';
import PropTypes from 'prop-types';

const { Content } = Layout;

const DataTable = (props) => {
  const {
    id, name,columns, data, animation, ...attributes
  } = props;
  let title = name.split('');
  title[title.length-1].toLowerCase() === 'y' ? (title.pop() && title.push('ies')):title.push('s');
  title = title.join('');  
  return (
    <div id={id} className={`animated ${animation}`}> 
      <Content className="content-paper">
        <div className="section-heading">
          <Row type="flex" justify="space-between">
            <Col span={20}>
              {`${title}`}
            </Col>
            <Col span={4}>                        
              <Button type="primary" style={{float:'right'}} onClick={props.handleClick}>Add {name}</Button>              
            </Col>        
          </Row>
        </div>
        <Divider />      
        <Table columns={columns} dataSource={data} {...attributes} />
      </Content>
    </div>
  );
}
      
  

DataTable.defaultProps = {
  id: '',
  data: [],
  animation: 'fadeIn',
  menuOpen: false
}

DataTable.propTypes = {
  name: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array,
  animation: PropTypes.string
}

export default DataTable;