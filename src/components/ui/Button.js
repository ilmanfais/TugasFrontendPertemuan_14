import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  background: ${function (props) {
    if (props.variant === "primary") {
      return "linear-gradient(0deg, rgba(52,150,63,1) 0%, rgba(0,0,0,1) 100%);";
    } else if (props.variant === "secondary") {
      return "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(52,150,63,1) 100%);";
    } else {
      return "radial-gradient(circle, rgba(52,150,63,1) 0%, rgba(0,0,0,1) 100%);";
    }
  }};
`;

export default Button;
