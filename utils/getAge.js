export const getAge = dateString => {
	let today = new Date();
	let bornDate = new Date(dateString);
	let age = today.getFullYear() - bornDate.getFullYear();
	let monthDiference = today.getMonth() - bornDate.getMonth();
	if (
		monthDiference < 0 ||
		(monthDiference === 0 && today.getDate() < bornDate.getDate())
	) {
		age--;
	}
	return age;
};
