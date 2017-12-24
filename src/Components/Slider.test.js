import React from 'react';
import Slider from './Slider';
import renderer from 'react-test-renderer';

test('Slider renders when minimal props passed', () => expect(renderer
  .create(<Slider min={"0"} max={"10"}/>).toJSON()).toMatchSnapshot());

test('Slider renders when value prop passed', () => expect(renderer
  .create(<Slider min="0" max="10" value="5"/>).toJSON()).toMatchSnapshot());

test('Slider renders when onChange prop passed', () => expect(renderer
  .create(<Slider min="0" max="10" value="5" onChange={()=>{}}/>).toJSON()).toMatchSnapshot());