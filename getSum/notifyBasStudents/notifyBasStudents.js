

function notifyBasStudents(students) {
	for (users of students){
        if (users.rate <= 3.5) {
            console.log(`${users.name}, учись лучше!!`);
        }else{
            console.log(`${users.name} ,молодец!!`);
        }
}
}

notifyBasStudents([
	{ name: 'Адилет', rate: 4 },
	{ name: 'Азиза', rate: 3.5 },
	{ name: 'Абай', rate: 5 },
	{ name: 'Бексултан', rate: 3 },
]);

// "Азиза, учись лучше"
// "Бексултан, учись лучше"