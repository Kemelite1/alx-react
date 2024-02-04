import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header/Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    shallow(<Header />);
  });

  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
