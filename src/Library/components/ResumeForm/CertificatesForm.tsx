import { Form, FormSection } from "@/Library/components/ResumeForm/Form";
import { FormContainer } from "@/Library/components/ResumeForm/index";
import { CreateHandleChangeArgsWithDescriptions } from "@/Library/components/ResumeForm/types";
import CvInput from "@/Library/components/UI/CVInput";
import { useAppDispatch, useAppSelector } from "@/_lib/redux/hooks";
import { changeCertificates, selectCertificates } from "@/_lib/redux/resumeSlice";
import { ResumeCertificates } from "@/_lib/redux/types";

export const CertificatesForm = () => {
	const certificates = useAppSelector(selectCertificates);
	const dispatch = useAppDispatch();
	const showDelete = certificates.length > 1;
	// let x = useSelector((state) => state.textAreaStore)
	// const dispatcha = useDispatch();
	// x.textAreaValue = document.getElementsByName("descriptions").values()

	return (
		<FormContainer>
			<Form form="certificates" addButtonText="Add certificate">
				{certificates.map(({ name, issueDate, expirationDate, descriptions }, idx) => {
					const handleCertificateChange = (
						...[field, value]: CreateHandleChangeArgsWithDescriptions<ResumeCertificates>
					) => {
						dispatch(changeCertificates({ idx, field, value } as any));
					};
					const showMoveUp = idx !== 0;
					const showMoveDown = idx !== certificates.length - 1;

					return (
						<FormSection
							key={idx}
							form="certificates"
							idx={idx}
							showMoveUp={showMoveUp}
							showMoveDown={showMoveDown}
							showDelete={showDelete}
							deleteButtonTooltipText={"Delete certificate"}
						>
							<CvInput
								name="name"
								label="Name"
								placeholder="Send my cv"
								value={name}
								onChange={handleCertificateChange}
							/>
							<CvInput
								label="Issuing organization"
								name="descriptions"
								placeholder="Entrepreneur and educator obsessed with making education free for anyone"
								value={descriptions}
								onChange={handleCertificateChange}
							/>
							<CvInput
								name="issueDate"
								label="Issue date"
								placeholder="Winter 2022"
								value={issueDate}
								onChange={handleCertificateChange}
							/>
							<CvInput
								name="expirationDate"
								label="Expiration date"
								placeholder="Winter 2022"
								value={expirationDate}
								onChange={handleCertificateChange}
							/>
							{/*<BulletListTextarea*/}
							{/*  name="descriptions"*/}
							{/*  label="Description"*/}
							{/*  placeholder="Bullet points"*/}
							{/*  value={descriptions}*/}
							{/*  onChange={handleCertificateChange}*/}
							{/*  labelClassName="col-span-full"*/}
							{/*/>*/}

							{/*<input type="text" onChange={(e) => dispatcha(setValue(e.target.value))}/>*/}
						</FormSection>
					);
				})}
			</Form>
		</FormContainer>
	);
};
