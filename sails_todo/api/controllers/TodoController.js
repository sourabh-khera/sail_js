/**
 * TodoController
 *
 * @description :: Server-side logic for managing todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `TodoController.addTodo()`
   */
  addTodo: function (req, res) {
    Todo.create({
      user:req.session.me,
      msg:req.param('msg')
    }).exec(function(err,todo){
       if(err){
         return res.serverError(err);
       }
       res.redirect("/")

    });
  },


  /**
   * `TodoController.listAll()`
   */
  listAll: function (req, res) {
     Todo.find({
       user:req.session.me,
     }).exec(function(err,todos){
        res.view('todoList',{todos:todos})
    })
  },

  'hello-saurabh': function(req, res){
    return res.end("Hello Saurabh");
  }
};

