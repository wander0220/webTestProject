import PropTypes from "prop-types";

function MyComponent(props) {
  return (
    <div>
      <p>
        제 이름은 {props.name}인데... 발등에 불떨어졌습니다. 저 이제부터 10시
        넘어서 퇴근합니다.. 그럼 집오면 12시네 에잉쯧
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
