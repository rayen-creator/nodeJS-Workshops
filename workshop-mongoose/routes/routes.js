const contactController=require('../controller/contactController');


module.exports = (app)=>{
    app.get('/contacts',contactController.getAllContacts);
    app.get('/contact/:id',contactController.findContactById);
    app.post('/addContact',contactController.addContact);
    app.put('/updateContact/:id',contactController.UpdateContact);
    app.delete('/deleteContact/:id',contactController.DeleteContact);
};