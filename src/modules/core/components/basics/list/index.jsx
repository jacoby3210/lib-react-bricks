import { useRepeat } from '@lib-react-bricks/src/modules/core/advanced';

// -------------------------------------------------------------------------- //
// Layout - to generate a gui for an item in an source data by default.
// -------------------------------------------------------------------------- //

const Container = props => {

  const {className, children} = props;

  return (
    <ul className={className} {...props}>
      {children}
    </ul>
  );

}

const Template = props => {

  const {item, ...attributes} = props;
  
  const ctx = useRepeat();
  
  return (
    <li id={item.id} name={item.label} {...attributes}>
      {item?.text}
    </li>
  );

};
  
export const List = {Container, Template}

// -------------------------------------------------------------------------- //