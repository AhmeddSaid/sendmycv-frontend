import * as yup from "yup";

const PriceValidationSchema = yup
	.number()
	.positive({ en: "Price must be positive", ar: "السعر يجب أن يكون رقم  موجب" })
	.min(0.01, {
		en: "Price must be greater than or equal to 0.01",
		ar: "السعر يجب أن يكون اكبر من 0.01",
	})
	.max(1000000, {
		en: "Price must be less than or equal to 1,000,000",
		ar: "السعر يجب أن يكون اقل من 1,000,000",
	})
	.required({ en: "Please enter price", ar: "الرجاء ادخال السعر" });

export const PriceUpdateValidationSchema = yup
	.number()
	.positive({ en: "Price must be positive", ar: "السعر يجب أن يكون رقم  موجب" })
	.min(0.01, {
		en: "Price must be greater than or equal to 0.01",
		ar: "السعر يجب أن يكون اكبر من 0.01",
	})
	.max(1000000, {
		en: "Price must be less than or equal to 1,000,000",
		ar: "السعر يجب أن يكون اقل من 1,000,000",
	})
	.notRequired();

export default PriceValidationSchema;
