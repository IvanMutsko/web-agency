import React from 'react';
import { Section, Title, Table, Button } from './Brief.styled';

const Brief = () => {
  return (
    <Section>
      <Title>Brief</Title>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customer:</td>
            <td>ABC Corporation</td>
          </tr>
          <tr>
            <td>Project:</td>
            <td>
              Development of a web application for managing customer orders
            </td>
          </tr>
          <tr>
            <td>Project description:</td>
            <td>
              ABC Corporation is a large company specialising in the production
              and sale of electronics. We are looking for a web developer to
              create a web application that will help us manage our customer
              service orders.
            </td>
          </tr>
          <tr>
            <td>Functional requirements:</td>
            <td>
              <ul>
                <li>Authorisation and authentication,</li>
                <li>Ability to log in as an employee or customer</li>
                <li>Order management</li>
                <li>Customer management</li>
                <li>Statistics and reports</li>
                <li>Communication</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Contact information:</td>
            <td>
              <ul>
                <li>Name: John Doe</li>
                <li>Position: Principal Engineer</li>
                <li>E-mail: john.doe@abccorp.com</li>
                <li>Phone: +1 (123) 456-7890</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button
        href="https://forms.gle/DXL5hH4VnqdRFXuj9"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fill in now
      </Button>
    </Section>
  );
};

export default Brief;
