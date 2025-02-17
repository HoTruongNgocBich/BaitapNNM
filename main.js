// Họ và tên: Hồ Trương Ngọc Bích
// MSSV: 2180601982

class Student {
    constructor(name, age, score1, score2) {
        this.name = name;
        this.age = age;
        this.score1 = score1;
        this.score2 = score2;
    }
}

const students = [
    new Student("Nguyen Van A", 18, 9, 8),
    new Student("Tran Thi B", 20, 6, 7),
    new Student("Le Van C", 21, 5, 6),
    new Student("Pham Thi D", 17, 7, 3)
];

const classifications = students.map(student => {
    const avgScore = (student.score1 + student.score2) / 2;
    let grade;
    if (avgScore >= 8) {
        grade = "Giỏi";
    } else if (avgScore >= 6.5) {
        grade = "Khá";
    } else if (avgScore >= 5) {
        grade = "Trung bình";
    } else {
        grade = "Yếu";
    }
    return `${student.name} - Xếp loại: ${grade}`;
});

console.log("Xếp loại của từng sinh viên:", classifications);

const totalAverageScore = students.reduce((sum, student) => sum + (student.score1 + student.score2) / 2, 0) / students.length;
console.log("Điểm trung bình cộng của lớp:", totalAverageScore.toFixed(2));

const hasUnder18 = students.some(student => student.age < 18);
console.log("Có sinh viên nào dưới 18 tuổi không?", hasUnder18 ? "Có" : "Không");

const allHaveNames = students.every(student => student.name.trim().length > 0);
console.log("Cả lớp có đầy đủ tên không?", allHaveNames ? "Có" : "Không");

const promise1 = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    setTimeout(() => {
        if (randomNum % 2 === 0) {
            resolve(students[0]);
        } else {
            reject("Dữ liệu lỗi");
        }
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    const randomNum = Math.floor(Math.random() * 11);
    setTimeout(() => {
        if (randomNum % 2 === 0) {
            resolve(students[1]);
        } else {
            reject("Dữ liệu lỗi");
        }
    }, 4000);
});

Promise.all([promise1, promise2])
    .then(results => {
        console.log("Lấy dữ liệu hoàn thành:", results);
    })
    .catch(error => {
        console.error("Thông Báo:", error);
    });

Promise.race([promise1, promise2])
    .then(result => {
        console.log("Đã lấy được dữ liệu:", result);
    })
    .catch(error => {
        console.error("Thông Báo:", error);
    });;