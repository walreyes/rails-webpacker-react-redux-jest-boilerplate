import React from 'react';
import Counter from '../../../counter/components/Counter';

const counterProps = {
  counter: 0,
  increment: jest.fn(),
  doubleAsync: jest.fn(),
}


it('should render Counter without crashing', () => {
  const wrapper = shallow(
      <Counter {...counterProps} />
  );

  expect(wrapper).toMatchSnapshot();
});

it('should render a counter 0', () => {
    const wrapper = mount(
        <Counter {...counterProps} />
    );

    expect(wrapper.prop('counter')).toEqual(0);
});
/*
it('should increment counter by 1', () => {
    const value = '2';
    const increment = jest.fn();
    const wrapper = shallow(
        <Counter counter={0} increment={increment} />
    );

    expect(wrapper).toMatchSnapshot();

        wrapper.find('select').simulate('change', {
        target: { value },
    });

    expect(onChange).toBeCalledWith(value);
});
*/




/*
it('should render a label', () => {
    const wrapper = shallow(
        <Label>Hello Jest!</Label>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a small label', () => {
    const wrapper = shallow(
        <Label small>Hello Jest!</Label>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a grayish label', () => {
    const wrapper = shallow(
        <Label light>Hello Jest!</Label>
    );
    expect(wrapper).toMatchSnapshot();
});

it('should render a document title', () => {
    const wrapper = shallow(
        <DocumentTitle title="Events" />
    );
    expect(wrapper.prop('title')).toEqual('Events');
});

it('should render a document title and a parent title', () => {
    const wrapper = shallow(
        <DocumentTitle title="Events" parent="Event Radar" />
    );
    expect(wrapper.prop('title')).toEqual('Events — Event Radar');
});

it('should render Markdown in preview mode', () => {
    const wrapper = shallow(
        <MarkdownEditor value="*Hello* Jest!" />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('[name="toggle-preview"]').simulate('click');

    expect(wrapper).toMatchSnapshot();
});

it('should render Markdown in preview mode', () => {
    const wrapper = shallow(
        <MarkdownEditor value="*Hello* Jest!" />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.find('[name="toggle-preview"]').simulate('click');

    expect(wrapper).toMatchSnapshot();
});
*/
