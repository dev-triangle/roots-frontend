import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { baseUrl } from "../../utils/urls";
import axiosInstance from "../../auth/authHandler";
export class BecomeGuideForm extends Component {
  state = {
    name: "",
    guideImg: null,
    image: null,
    desc: "",
    age: null,
    gender: null,
    contact: "",
    address: "",
    user_foreign: localStorage.getItem("userid"),
    place_foreign: this.props.placeId,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      guideImg: e.target.files[0],
      image: e.target.files[0],
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    // form_data.append('user_image', this.state.user_image, this.state.user_image.name);
    // form_data.append('guide_image', this.state.guideImg, this.state.guideImg.name);
    form_data.append('user_foreign', this.state.user_foreign);
    form_data.append('name', this.state.name);
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('place_foreign', this.state.place_foreign);
    form_data.append('desc', this.state.desc);
    form_data.append('age', this.state.age);
    form_data.append('gender', this.state.gender);
    form_data.append('contact', this.state.contact);
    form_data.append('address', this.state.address);
    let url = `${baseUrl}/guides/`;

    axiosInstance.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="guide_from">
        <Form.Group className="bguide__div">
          <Form.Control
            type="text"
            placeholder="Name *"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Form.Group className="bguide__div">
          <Form.Control
            type="file"
            placeholder="pic"
            name="guideImg"
            id="guideImg"
            accept=".jpg, .jpeg, .png"
            onChange={this.handleImageChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Form.Group className="bguide__div">
          <Form.Control
            type="text"
            placeholder="Description *"
            name="desc"
            id="desc"
            value={this.state.desc}
            onChange={this.handleChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Form.Group className="bguide__div">
          <Form.Control
            type="number"
            placeholder="Age *"
            name="age"
            id="age"
            value={this.state.age}
            onChange={this.handleChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Form.Group className="bguide__div">
          <Form.Control
            type="text"
            placeholder="Gender *"
            name="gender"
            id="gender"
            value={this.state.gender}
            onChange={this.handleChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Form.Group className="bguide__div">
          <Form.Control
            type="text"
            placeholder="Contact *"
            name="contact"
            id="contact"
            value={this.state.contact}
            onChange={this.handleChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Form.Group className="bguide__div">
          <Form.Control
            type="text"
            placeholder="Address *"
            name="address"
            id="address"
            value={this.state.address}
            onChange={this.handleChange}
            className='guide__input'
          />
        </Form.Group>
        <br />
        <Button
          onClick={this.handleSubmit}
          variant="success"
          type="submit"
          block
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default BecomeGuideForm;
