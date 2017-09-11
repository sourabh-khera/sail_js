/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `UserController.login()`
   */
  login: function (req, res) {
     User.findOne({
       email:req.param('email'),
       password:req.param('password')
     }).exec(function(err,user){
        if(err){
          res.serverError(err)
        }
        if(!user){
          res.badRequest('email or passowrd is wrong')
        }
        req.session.me=user.id;
        req.session.userName=user.name;
        res.redirect('/')


     })
  },


  /**
   * `UserController.logout()`
   */
  logout: function (req, res) {
      req.session.me=null;
     res.redirect('/')
  },


  /**
   * `UserController.signup()`
   */
  signup: function (req, res) {

      User.create({
        name:req.param('name'),
        email:req.param('email'),
        password:req.param('password')
      }).exec(function(err,user){
        if(err){
          res.serverError(err)
        }
        req.session.me=user.id;

        res.redirect('/')
      })

      }
};

