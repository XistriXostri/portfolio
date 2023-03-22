import './burger.button.css';
export function BurgerButton({
    handleClick,
    buttonState,
}: {
    handleClick: () => void;
    buttonState: boolean;
}) {
    return (
        <button
            className={buttonState ? 'burgerButton' : 'burgerButton--active'}
            onClick={handleClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
}
