"use client";
import styled from "styled-components";
import { useModal } from "@/Context/ModalContext";

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(10px);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
`;

const ModalContent = styled.div`
	background-color: #ffffff;
	border-radius: 2.625rem;
	width: fit-content;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

export default function Modal() {
	const { isModalOpen, modalContent, closeModal } = useModal();

	if (!isModalOpen) return null;

	return (
		<ModalOverlay onClick={closeModal}>
			<ModalContent onClick={e => e.stopPropagation()}>{modalContent}</ModalContent>
		</ModalOverlay>
	);
}
