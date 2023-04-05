import { css } from 'styled-components';

const trackStyles = css`
  &::-webkit-scrollbar-track {
    background: #eff1f5;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e3e5eb;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
`;

const basicStyles = css`
  display: inline-flex;
  flex-direction: row;
  border: none;
  box-sizing: border-box;
`;

const basicTextStyles = css`
  line-height: 14px;
  font-size: 14px;
`;

const pseudoStyles = css`
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const scrollStyleSecondary = css`
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #878787;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
  &::-webkit-scrollbar-track {
    background: #e0dfdf;
    border: 0px none #ffffff;
    border-radius: 42px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-track:active {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const scrollStylePrimary = css`
  &::-webkit-scrollbar-track {
    background: #313133;
    border: 0px none #ffffff;
    border-radius: 42px;
  }
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #3d3c40;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #3d3c40;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #808080;
  }

  &::-webkit-scrollbar-track:hover {
    background: #313133;
  }
  &::-webkit-scrollbar-track:active {
    background: #313133;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const config = {
  horizonalScrollbarHeight: 8,
};

const scrollBarStyle = css`
  &::-webkit-scrollbar {
    width: ${config.horizonalScrollbarHeight}px;
    height: ${config.horizonalScrollbarHeight}px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &::-webkit-scrollbar-thumb {
    background: #a1a1a1;
    border: 0px none #ffffff;
    border-radius: 50px;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #878787;
    cursor: move;
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #808080;
  }
  &::-webkit-scrollbar-track {
    background: #e0dfdf;
    border: 0px none #ffffff;
    border-radius: 42px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-track:active {
    background: #e0dfdf;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

const hiddenFn = ({ isHidden }) =>
  isHidden &&
  css`
    display: none;
  `;

const trackHoverStyle = css`
  &::-webkit-scrollbar-track {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: none;
    border: none;
    box-shadow: none;
    width: 14px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    transition: all 0.2s ease-in-out;
    opacity: 0;
    background: #eeeff1;
    border: none;
    box-shadow: none;
    border-radius: 6px;
  }
  &:hover {
    &::-webkit-scrollbar-track {
      opacity: 1;
    }
    &::-webkit-scrollbar-thumb {
      opacity: 1;
    }
  }
`;

const horizontalPushFn = ({ horizontalPush }) =>
  horizontalPush &&
  css`
    margin-left: ${horizontalPush};
  `;

const mtFn = ({ mt }) =>
  mt &&
  css`
    margin-top: ${mt}px;
  `;

const mbFn = ({ mb }) =>
  mb &&
  css`
    margin-bottom: ${mb}px;
  `;

const pbFn = ({ pb }) =>
  pb &&
  css`
    padding-bottom: ${pb}px;
  `;
const ptFn = ({ pt }) =>
  pt &&
  css`
    padding-top: ${pt}px;
  `;

const horizontalPullFn = ({ horizontalPull }) =>
  horizontalPull &&
  css`
    margin-right: ${horizontalPull};
  `;

const verticalPullFn = ({ verticalPull }) =>
  verticalPull &&
  css`
    margin-bottom: ${verticalPull};
  `;

const verticalPushFn = ({ verticalPush }) =>
  verticalPush &&
  css`
    margin-top: ${verticalPush};
  `;

const mlFn = ({ ml }) =>
  ml &&
  css`
    margin-left: ${ml}px;
  `;

const mrFn = ({ mr }) =>
  mr &&
  css`
    margin-right: ${mr}px;
  `;

const bgColorFn = ({ bgColor }) =>
  bgColor &&
  css`
    background: ${bgColor};
  `;

const preventSelectFn = ({ preventSelect }) =>
  preventSelect &&
  css`
    user-select: none;
  `;

const borderColorFn = ({ color }) =>
  color &&
  css`
    border-color: color;
  `;

const lineHeightFn = ({ lineHeight }) =>
  lineHeight &&
  css`
    line-height: ${lineHeight}px;
  `;

const heightFn = ({ height }) =>
  height &&
  css`
    height: ${height};
  `;

const fontSizeFn = ({ size }) =>
  size &&
  css`
    font-size: ${size}px;
  `;

const weightFn = ({ weight = 500 }) =>
  weight &&
  css`
    font-weight: ${weight};
  `;

const widthFn = ({ width }) =>
  width &&
  css`
    width: ${width};
  `;

const linkFn = ({ link }) =>
  link &&
  css`
    text-decoration: underline;
    cursor: pointer;
  `;

const flipFn = ({ flip }) =>
  flip &&
  css`
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: 'FlipH';
  `;

const rotateFn = ({ rotate }) =>
  rotate &&
  css`
    transform: rotate(${rotate}deg);
  `;

const centerFn = ({ center }) =>
  center &&
  css`
    text-align: center;
  `;

const colorFn = ({ color }) =>
  color &&
  css`
    color: ${color};
  `;

const paddingFnc = ({ padding }) =>
  padding &&
  css`
    padding: ${padding};
  `;

const maxHeightFn = ({ maxHeight }) =>
  maxHeight &&
  css`
    max-height: ${maxHeight};
  `;

const flexDirectionFn = ({ direction }) => css`
  flex-direction: ${direction};
`;
const justifyContentFn = ({ justifyContent }) => css`
  justify-content: ${justifyContent};
`;

export {
  horizontalPushFn,
  weightFn,
  linkFn,
  widthFn,
  centerFn,
  colorFn,
  heightFn,
  flexDirectionFn,
  justifyContentFn,
  maxHeightFn,
  bgColorFn,
  paddingFnc,
  lineHeightFn,
  preventSelectFn,
  horizontalPullFn,
  verticalPullFn,
  verticalPushFn,
  fontSizeFn,
  trackStyles,
  trackHoverStyle,
  scrollBarStyle,
  scrollStylePrimary,
  scrollStyleSecondary,
  basicStyles,
  basicTextStyles,
  pseudoStyles,
  mtFn,
  mbFn,
  mlFn,
  mrFn,
  pbFn,
  ptFn,
  flipFn,
  rotateFn,
  hiddenFn,
  borderColorFn,
};
