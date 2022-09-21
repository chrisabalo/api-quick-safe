const {
    create,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
    getTotalUser,
    updateUser,
    deleteUser,
} = require("./user.service");

const { hashSync, genSaltSync, compare } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
         const salt = genSaltSync(10);
         body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    code: 300,
                    message: "Database connection error"
                });
            } 
                 if (results) {
                 res.json({
                    code: 302,
                    message:"user registered sucessfully",
                    data: results
                  });
                 }
            
            
        });
    },
    login: async(req, res) => {
        const body = req.body;
        getUserByUserEmail(body, (err, results) => {
          if (err) {
            console.log(err);
          } 
          

          if (results) {
            
            compare(body.password, results.passworduser, (error, response) => {

              if (response) {

                const id = results.iduser;
                results.passworduser = undefined;
                const jsontoken = sign({ id }, process.env.JWT_KEY , {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log('The token is :' + jsontoken);

                res.json({
                    code: 200, 
                    message: 'login sucessfull',
                    token: jsontoken,
                    data: results
                })
              } else {
                res.json({
                    code: 208,
                    message: 'Email/Password invalid'
                })
              }

            })
            

          } else {

            res.json({
                    code: 210,
                    message: 'User does not exits to Database'
                })
          }

          // if (!results || !(compareSync( body.password, results.passworduser)) ) {

          //       res.json({
          //           code: 208,
          //           message: 'Email/Password invalid'
          //       })
          // } else {

          //      const id = results.iduser;
          //       results.passworduser = undefined;
          //       const jsontoken = sign({ id }, process.env.JWT_KEY , {
          //           expiresIn: process.env.JWT_EXPIRES_IN
          //       });

          //       console.log('The token is :' + jsontoken);

          //       res.json({
          //           code: 200, 
          //           message: 'login sucessfull',
          //           token: jsontoken,
          //           data: results
          //       })
          // }
          // if (!results) {
          //   res.json({
          //       code: 208,
          //       message: 'Invalid Email/password'
          //   })
          // } else {
          //   const emailExist = results.emailuser;
          //       console.log(results)

          //       if ( emailExist ) {

          //        const comparaison = compareSync( body.password, results.passworduser);

          //        if (comparaison) {

                        // const id = results.iduser;
                        // results.passworduser = undefined;
                        // const jsontoken = sign({ id }, process.env.JWT_KEY , {
                        //     expiresIn: process.env.JWT_EXPIRES_IN
                        // });

                        // res.json({
                        //     code: 200, 
                        //     message: 'login sucessfull',
                        //     token: jsontoken,
                        //     data: results
                        // })

          //        } 
          //        else {
          //                res.json({
          //                     code: 204,
          //                     message: "Invalid email/password"
          //                });
          //           }
          //       }
          //        else {

          //           res.json({
          //             code: 206,
          //             message: "Email does not exits"
          //           });
          //        }
          // }
      });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            
            // if (!results) {
            //     return res.json({
            //         code: 200,
            //         message: "Record not Found"
            //     });
            // }

            // results.password = undefined;
            return res.json({
                code: 200,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'list users',
                data: results
            });
        });
    },
    getTotalUser: (req, res) => {
        getTotalUser((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                code: 200,
                message: 'Total count users ',
                data: results
            });
        });
    },
    updateUsers: (req, res) => {
        const body = req.body;
       // const salt = genSaltSync(10);
       // body.password = hashSync(body.password, salt);
        updateUser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    code: 200,
                    message: "Failed to updated user"
                });
            }
            return res.json({
                code: 200,
                message: "updated successfully"
            });
        });
    },
    getUserInfo: (req, res) => {
        return res.json({
            success: 1,
            data: req.decoded.result
        });
    },
    deleteUser: (req, res) => {

        const data = req.body;

        deleteUser(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    code: 200,
                    message: "Record Not Found"
                });
            }
            return res.json({
                code: 200,
                message: "user deleted successfully"
            });
        });
    }
};