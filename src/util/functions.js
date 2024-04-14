export const dialogClsoeByBackdrop = (dialogRef, event) => {
	const rect = dialogRef.current.getBoundingClientRect();
	const isInDialog =
		rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
	if (!isInDialog) {
		dialogRef.current.close();
	}
};
