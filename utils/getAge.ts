export const getAge = (dateString: string): number => {
    let today: Date = new Date();
    let bornDate: Date = new Date(dateString);
    let age: number = today.getFullYear() - bornDate.getFullYear();
    let monthDiference: number = today.getMonth() - bornDate.getMonth();
    if (monthDiference < 0 || (monthDiference === 0 && today.getDate() < bornDate.getDate())) {
        age--;
    }
    return age;
};
