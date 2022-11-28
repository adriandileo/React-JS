
export default function BotonC(props){

    function handleClick() {
        if (props.onClick) props.onClick();
      }
      return (
        <button className="botonClick" onClick={handleClick}>
          {props.children}
        </button>
      )
}