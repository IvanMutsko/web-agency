import React, { useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import { CONTACT_TYPE } from '../../utils/constants';
import { typeInput, patternInput, placeholderInput } from '../../utils/common';

import {
  InputWrap,
  WrapForScroll,
  Title,
  Form,
  Label,
  RadioInput,
  TextInput,
  TextArea,
  Button,
} from './CallbackForm.styled';

const initialState = {
  name: '',
  contactMethod: CONTACT_TYPE.TELEPHONE,
  userContact: '',
  comment: '',
};

const CallbackForm = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formElement = document.getElementById('contactForm');

    console.log(formData);

    formElement.reset();
  };

  const renderThumb = () => {
    const thumbStyle = {
      backgroundColor: `#ffffff80`,
      borderRadius: '5px',
    };
    return <div style={{ ...thumbStyle }} />;
  };

  return (
    <InputWrap>
      <Scrollbars
        autoHeight
        autoHeightMin={'400px'}
        renderThumbVertical={renderThumb}
      >
        <WrapForScroll>
          <Title>Would you like us to contact you?</Title>
          <Form id="contactForm" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <TextInput
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John"
                required
              />
            </div>
            <div>
              <Label htmlFor="contactMethod">
                Select a convenient answer format:
              </Label>
              <RadioInput
                id="tel"
                type="radio"
                name="contactMethod"
                value={CONTACT_TYPE.TELEPHONE}
                checked={formData.contactMethod === CONTACT_TYPE.TELEPHONE}
                onChange={handleChange}
              />
              <label htmlFor="tel">Telephone</label>
            </div>
            <div>
              <RadioInput
                id="mail"
                type="radio"
                name="contactMethod"
                value={CONTACT_TYPE.MAIL}
                checked={formData.contactMethod === CONTACT_TYPE.MAIL}
                onChange={handleChange}
              />
              <label htmlFor="mail">Email</label>
            </div>
            <div>
              <RadioInput
                id="telegram"
                type="radio"
                name="contactMethod"
                value={CONTACT_TYPE.TELEGRAM}
                checked={formData.contactMethod === CONTACT_TYPE.TELEGRAM}
                onChange={handleChange}
              />
              <label htmlFor="telegram">Telegram</label>
            </div>
            <div>
              <Label htmlFor="userContact">
                Enter you {formData.contactMethod}:
              </Label>
              <TextInput
                id="userContact"
                type={typeInput(formData.contactMethod)}
                name="userContact"
                value={formData.userContact}
                onChange={handleChange}
                pattern={patternInput(formData.contactMethod)}
                placeholder={placeholderInput(formData.contactMethod)}
                required
              />
            </div>

            <Label htmlFor="comment">Comment</Label>
            <TextArea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Enter you comment"
              maxLength="400"
            />

            <Button type="submit">Submit</Button>
          </Form>
        </WrapForScroll>
      </Scrollbars>
    </InputWrap>
  );
};

export default CallbackForm;
