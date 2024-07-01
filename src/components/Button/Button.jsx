import { useId } from 'react';
import './Button.scss';

const Button = ({
    className = '',
    postionClass = '',
    title = '', //not to be given when svg is used
    type = 'button',
    svg,
    onClickCallBk,
    disabled = false,
    style = 'neutral',
    ariaLabel = '',
}) => {
    const clickHandler = (e) => {
        onClickCallBk(e);
    };
    const id = useId();
    const btnClass = title ? `buttonLayout ${style} ${className}` : `${className}`;

    return (
        <div className={postionClass}>
            <button
                className={btnClass}
                onClick={clickHandler}
                disabled={disabled}
                id={id}
                aria-label={title ? title : ariaLabel}
                type={type}
            >
                {title ? title : svg}
            </button>
        </div>
    );
};

export default Button;
