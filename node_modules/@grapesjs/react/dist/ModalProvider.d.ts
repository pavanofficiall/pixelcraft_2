import React from 'react';
export interface ModalState {
    /**
     * Modal title
     */
    title: React.ReactElement;
    /**
     * Modal content
     */
    content: React.ReactElement;
    /**
     * Modal attributes
     */
    attributes: Record<string, any>;
    /**
     * Callback for closing the modal
     */
    close: () => void;
}
export interface ModalResultProps extends ModalState {
    /**
     * Indicates if the modal is open.
     */
    open: boolean;
}
export interface ModalProviderProps {
    children: ((props: ModalResultProps) => React.JSX.Element);
}
export interface ModalEventProps {
    open: boolean;
    title: string | HTMLElement;
    content: string | HTMLElement;
    attributes: Record<string, any>;
    close: () => void;
}
declare const ModalProvider: React.NamedExoticComponent<ModalProviderProps>;
export default ModalProvider;
