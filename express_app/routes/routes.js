const studentController=require('../controller/studentController')
module.exports=(app)=>{
app.get('/getStudentbyname/:name',studentController.getbyname);
app.get('/getAllStudentOver18',studentController.getAllStudentOver18);
app.get('/getAllStudentOver10note',studentController.getAllStudentOver10note);
app.post('/addStudent',studentController.addStudent);
}