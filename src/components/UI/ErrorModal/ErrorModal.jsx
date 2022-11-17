import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import Card from '../Card/Card';
import classes from './errorModal.module.css';

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}></div>
    )
}

const ErrorModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>OK</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
    return (
        <>
            {/* le backdrop */}
            {createPortal(
                <Backdrop onConfirm={props.onConfirm} /> ,
                document.getElementById("backdrop-root")
            )}

            {/* la modal */}
            {createPortal(
                <ErrorModalOverlay
                    title={props.title}
                    message={props.message}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("modal-root")
            )}
        </>
    )
}

export default ErrorModal
