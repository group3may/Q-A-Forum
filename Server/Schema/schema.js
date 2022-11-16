let createQuestion = `CREATE TABLE if not exists Questions(
    question_Id int auto_increment,
    question varchar(255) not null,
    question_discription varchar(255) not null,
    PRIMARY KEY (question_Id)
    )`
 export default createQuestion