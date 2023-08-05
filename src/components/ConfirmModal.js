import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Modal } from 'reactstrap';

import './ConfirmModal.scss';
// import * as actions from "../store/actions";
import { KeyCodeUtils } from '../utils';

function ConfirmModal() {
    // constructor(props) {
    //     super(props);
    //     this.acceptBtnRef = React.createRef();
    // }

    // initialState = {};

    // state = {
    //     ...this.initialState,
    // };

    // componentDidMount() {
    //     document.addEventListener('keydown', this.handlerKeyDown);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('keydown', this.handlerKeyDown);
    // }

    handlerKeyDown = (event) => {
        const keyCode = event.which || event.keyCode;
        if (keyCode === KeyCodeUtils.ENTER) {
            if (!this.acceptBtnRef.current || this.acceptBtnRef.current.disabled) return;
            this.acceptBtnRef.current.click();
        }
    };

    onAcceptBtnClick = () => {
        const { contentOfConfirmModal } = this.props;
        if (contentOfConfirmModal.handleFunc) {
            contentOfConfirmModal.handleFunc(contentOfConfirmModal.dataFunc);
        }
        this.onClose();
    };

    onClose = () => {
        this.props.setContentOfConfirmModal({
            isOpen: false,
            messageId: '',
            handleFunc: null,
            dataFunc: null,
        });
    };

    // const { contentOfConfirmModal } = this.props;

    return (
        <Modal isOpen={contentOfConfirmModal.isOpen} className={cx('confirm-modal')} centered={true}>
            <div className={cx('modal-header')}>
                <div className={cx('modal-title')}>
                    <FormattedMessage id={'common.confirm'} />
                </div>
                <div className={cx('col-auto')}>
                    <button className={cx('btn btn-close')} onClick={this.onClose}>
                        <i className={cx('fal fa-times')} />
                    </button>
                </div>
            </div>

            <div className={cx('modal-body')}>
                <div className={cx('confirm-modal-content')}>
                    <div className={cx('row')}>
                        <div className={cx('col-12')}>
                            <FormattedMessage
                                id={
                                    contentOfConfirmModal.messageId
                                        ? contentOfConfirmModal.messageId
                                        : 'common.confirm-this-task'
                                }
                            />
                        </div>

                        <hr />

                        <div className={cx('col-12')}>
                            <div className={cx('btn-container text-center')}>
                                <button className={cx('btn btn-add')} onClick={this.onClose}>
                                    <FormattedMessage id="common.close" />
                                </button>
                                <button
                                    ref={this.acceptBtnRef}
                                    className={cx('btn btn-add')}
                                    onClick={this.onAcceptBtnClick}
                                >
                                    <FormattedMessage id={'common.accept'} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

// const mapStateToProps = state => {
//     return {
//         lang: state.app.language,
//         contentOfConfirmModal: state.app.contentOfConfirmModal
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         setContentOfConfirmModal: (contentOfConfirmModal) => dispatch(actions.setContentOfConfirmModal(contentOfConfirmModal))
//     };
// };

export default ConfirmModal;
