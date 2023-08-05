import classNames from 'classnames/bind';
import styles from './DetailModal.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const cx = classNames.bind(styles);
function DetailModal({ isModalOpen, toggle, reRenderState }) {
    const handleUpdateUser = async () => {
        try {
            reRenderState();
            toggle();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className={cx('form-update')}>
            <Modal isOpen={isModalOpen}>
                <ModalHeader>Detail Product</ModalHeader>
                <ModalBody>
                    <div>Hello</div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleUpdateUser}>
                        Update
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DetailModal;
