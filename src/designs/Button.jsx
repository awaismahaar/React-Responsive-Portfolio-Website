import styled from "styled-components";
function Button({beforeText,afterText}) {
  return (
    <>
    <Wrapper>
      <button className="button button-item">
        <span className="button-bg">
          <span className="button-bg-layers">
            <span className="button-bg-layer button-bg-layer-1 -purple"></span>
            <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
            <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
          </span>
        </span>
        <span className="button-inner">
          <span className="button-inner-static font-LibreBaskerville">{beforeText}</span>
          <span className="button-inner-hover font-LibreBaskerville">{afterText}</span>
        </span>
      </button>
      </Wrapper>
    </>
  );
}
let Wrapper = styled.span`
  /* From Uiverse.io by OliverZeros */
  button {
    all: unset;
  }

  .button {
    position: relative;
    display: inline-flex;
    height: 3rem;
    align-items: center;
    border-radius: 9999px;
    padding-left: 2.7rem;
    padding-right: 2.7rem;
    font-size: 1rem;
    font-weight: 640;
    cursor: pointer;
    color: #fafaf6;
    letter-spacing: -0.06em;
    box-shadow: 0px 0px 42px -5px #facd12;
  }

  .button-item {
    background-color: transparent;
    color: #1d1d1f;
  }

  .button-item .button-bg {
    border-color: rgba(255, 208, 116);
    background-color: rgba(255, 208, 116);
  }

  .button-inner,
  .button-inner-hover,
  .button-inner-static {
    pointer-events: none;
    display: block;
  }

  .button-inner {
    position: relative;
  }

  .button-inner-hover {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: translateY(70%);
  }

  .button-bg {
    overflow: hidden;
    border-radius: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(1);
    transition: transform 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button-bg,
  .button-bg-layer,
  .button-bg-layers {
    display: block;
  }

  .button-bg-layers {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: -60%;
    aspect-ratio: 1 / 1;
    width: max(200%, 10rem);
  }

  .button-bg-layer {
    border-radius: 9999px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
  }

  .button-bg-layer.-purple {
    background-color: rgba(163, 116, 255);
  }

  .button-bg-layer.-turquoise {
    background-color: rgba(23, 241, 209);
  }

  .button-bg-layer.-yellow {
    --tw-bg-opacity: 1;
    background-color: rgba(255, 208, 116, var(--tw-bg-opacity));
  }

  .button:hover .button-inner-static {
    opacity: 0;
    transform: translateY(-70%);
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.3s linear;
  }

  .button:hover .button-inner-hover {
    opacity: 1;
    transform: translateY(0);
    transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 1.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .button:hover .button-bg-layer {
    transition: transform 1.3s cubic-bezier(0.19, 1, 0.22, 1),
      opacity 0.3s linear;
  }

  .button:hover .button-bg-layer-1 {
    transform: scale(1);
  }

  .button:hover .button-bg-layer-2 {
    transition-delay: 0.1s;
    transform: scale(1);
  }

  .button:hover .button-bg-layer-3 {
    transition-delay: 0.2s;
    transform: scale(1);
  }
`;
export default Button;
