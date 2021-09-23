import PropTypes from "prop-types";

function MyComponent(props) {
  return (
    <div>
      <p>
        제 이름은 {props.name}인데...
        {props.children}
      </p>
    </div>
  );
}

// default prop 설정.
MyComponent.defaultProps = {
  name: "김수현",
};

// porp type 설정
MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MyComponent;
