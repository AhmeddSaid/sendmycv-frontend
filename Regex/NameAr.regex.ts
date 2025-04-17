const NameArRegex: RegExp =
	/^(?!^\d+$)(?!^[\u0660-\u0669]+$)(?!^\s+$)(?!.*[\u0620\uFEFF\n\r\t\u00A0\u2003])(?=.{2,})(?=.*[\u0600-\u06FF])(?:(?=.*[0-9\u0660-\u0669\s])|)^[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF0-9\u0660-\u0669\s،؟]+$/;

export default NameArRegex;
