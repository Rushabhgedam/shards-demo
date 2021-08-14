import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Card, CardHeader, ListGroup, ListGroupItem, ListGroupItemText } from "shards-react";
import Dropzone from 'react-dropzone'

export default    class ImageInputDialog extends React.Component {
  constructor(props) {
      super(props);
  };

  render = () => {
      const { 
          imageType, 
          temp, 
          handleCancel, 
          handleSubmit, 
          memberId 
      } = this.props;
      const uploadStatus = "temp.get('uploadStatus')";
      let aspectRatio = null;

      return (
          <div> 
            
          </div>
      );
  }
}

ImageInputDialog.propTypes = {
  ImageType: PropTypes.string,
  temp: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
};