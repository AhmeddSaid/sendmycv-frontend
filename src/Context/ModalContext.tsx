"use client";
import {createContext, ReactNode, useContext, useState} from "react";

interface ModalContextType {
    isModalOpen: boolean;
    modalContent: ReactNode | null;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
    isModalOpen: false,
    modalContent: null,
    openModal: () => {
    },
    closeModal: () => {
    },
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({children}: { children: ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent(null);
    };

    return (
        <ModalContext.Provider
            value={{isModalOpen, modalContent, openModal, closeModal}}
        >
            {children}
        </ModalContext.Provider>
    );
}
