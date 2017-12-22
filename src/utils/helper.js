import React from 'react';
import { Form, Input, Select, Upload, Icon, message } from 'antd';
import { func } from './common';
const Option = Select.Option;

class FormField extends React.Component {
  state = {
    Imageloading: false,
  };

  /* ---------------------------- Image uploader helper functions -------------------------------- */
  getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }
  handleImageChange = (info) => {
    console.log("Info: ", info);
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
    }
  }
  /* ---------------------------- Image uploader helper functions -------------------------------- */

  render() {
    let props = this.props;
    let field = props.fieldAttribute;
    let type = field.type || 'input';  
    let title = func.titleCase(field.name);
    const { getFieldDecorator } = props.form;

    /* ---------------------------- Image -------------------------------- */
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const imageUrl = this.state.imageUrl;

    /* ---------------------------- Image -------------------------------- */
  
    const Types = {
      input: () => {      
        return (
          <Input placeholder={title} />
        )
      },
      select: () => {
        let options = field.options;      
        return (
        <Select placeholder={title}>
          { options.map((option, index) => <Option key={index} value={option.value}>{option.name}</Option>)}              
        </Select> 
      )},
      image: () => {
        return (
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action=""            
            beforeUpload={this.beforeUpload}
            onChange={this.handleImageChange}
          >
          {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
        </Upload>
        )
      }
    } 
    
    return (
      <Form.Item>
        {getFieldDecorator(field.name, {
          rules: field.validation,
        })(
          Types[type]()
        )}
    </Form.Item> 
    ) 
  }   
}

export {
  FormField
};

