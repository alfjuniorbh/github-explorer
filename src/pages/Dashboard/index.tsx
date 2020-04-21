import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore GitHub Repository</Title>

      <Form>
        <input placeholder="Enter with repository name" />
        <button type="submit">Confirm</button>
      </Form>

      <Repositories>
        <a href="lik">
          <img
            src="https://avatars1.githubusercontent.com/u/2363796?s=460&u=4d6fb77c7da115851195b987094e58d2cf2b3710&v=4"
            alt="Junior"
          />
          <div>
            <strong>alfjuniorbh/ruby</strong>
            <p>Nisi sit tempor ipsum ea occaecat incididunt aute et.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="lik">
          <img
            src="https://avatars1.githubusercontent.com/u/2363796?s=460&u=4d6fb77c7da115851195b987094e58d2cf2b3710&v=4"
            alt="Junior"
          />
          <div>
            <strong>alfjuniorbh/ruby</strong>
            <p>Nisi sit tempor ipsum ea occaecat incididunt aute et.</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="lik">
          <img
            src="https://avatars1.githubusercontent.com/u/2363796?s=460&u=4d6fb77c7da115851195b987094e58d2cf2b3710&v=4"
            alt="Junior"
          />
          <div>
            <strong>alfjuniorbh/ruby</strong>
            <p>Nisi sit tempor ipsum ea occaecat incididunt aute et.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
