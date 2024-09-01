import './BoxColor.css'

const BoxColor = (props) => {
    const boxColor = {
      backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    };

    const componentToHex = (c) => {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };

    const rgbToHex = (r, g, b) => {
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
    }
  
    return (
      <div style={boxColor} className='color'>
        <div>rgb({props.r}, {props.g}, {props.b})</div>
        <div>{rgbToHex(props.r, props.g, props.b)}</div>
      </div>
    );
  }
  
  export default BoxColor;