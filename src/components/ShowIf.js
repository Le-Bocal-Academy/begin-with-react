const ShowIf = (props) => {
  const { condition, children, defaultValue = null } = props;
  return condition ? children : defaultValue;
};

export default ShowIf;