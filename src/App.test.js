import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  it('should be an instance of App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update its state when addContestant is called', () => {
    const player = {id: 2, name: 'Ranger', status: 'Busy', interests: 'Peanut Butter and Squirrels' }
    const expected = [
      {id: 1, name: 'Leta', status: 'online', interests: 'Cats and Burritos' },
      {id: 2, name: 'Ranger', status: 'Busy', interests: 'Peanut Butter and Squirrels' }
  ]
    const wrapper = shallow(<App />);
    wrapper.instance().addContestant(player);
    expect(wrapper.state('contestants')).toEqual(expected);
  })

});
