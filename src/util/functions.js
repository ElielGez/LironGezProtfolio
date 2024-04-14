export const dialogClsoeByBackdrop = (dialogRef, event) => {
	const rect = dialogRef.current.getBoundingClientRect();
	const isInDialog =
		rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
	if (!isInDialog) {
		dialogRef.current.close();
	}
};
export const downloadFile = (url, fileName) => {
	fetch(url)
		.then(response => response.blob())
		.then(blob => {
			const blobURL = URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = blobURL;
			a.style.display = 'none';

			if (fileName && fileName.length) a.download = fileName;
			document.body.appendChild(a);
			a.click();
		})
		.catch(error => {
			console.error(error);
		});
};
