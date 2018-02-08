const userModel = require("../Models/userModel");
const storyModel = require("../Models/storyModel");

exports.index = function(req,res){
    res.send("<p>I'M AN API</p>");
};

exports.profile = function(req, res){
    const query = {"email" : req.body.email};

    userModel.find(query, function(err, docsFound){
        if(err){
            console.log(err);
            return err;
        };

        res.json(docsFound);
    });
};

exports.signup = function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const results = [email, password];

    const newUser = new userModel();
    newUser.email = email;
    newUser.password = password;

    newUser.save()
        .catch( function(err) {
            console.log("this is signUp: " + err);
        });
    
    res.json(results);
};

exports.saveProfile = function(req, res){
    const {firstName, lastName, location} = req.body;

    const query = {"email" : req.body.email};

    userModel.findOneAndUpdate(query,
        { $set : {"firstName": firstName, "lastName": lastName, "location" : location} }, function(err, docAffected){
        if(err){
            console.log(err);
            return err;
        };
        res.json(docAffected);
    });
};

exports.addInterest = function(req, res){
    const interest = req.body.interest;

    const query = {"email" : req.body.email};

    userModel.findOneAndUpdate(query,
        { $push : { 'userInterest' : interest}},
            function(err, docAffected){
                if(err){
                    console.log(err);
                    return err;
                };
                res.json(docAffected);
    });
};

exports.request = function(req, res){
    const {title, dateWanted, typeOfService, content, pictureURL} = req.body;

    //get this location from user location
    const locaiton = req.body.location;

    const results = [title, dateWanted, typeOfService, content, pictureURL];

    const newStory = new storyModel();
    newStory.title = title;
    newStory.dateWanted = dateWanted;
    newStory.typeOfService = typeOfService;
    newStory.content = content;
    newStory.pictureURL = pictureURL;
    newStroy.location = location;

    //creating a query for saving the story id into user's profile, get the email form user profile
    const profileEmail = req.body.userEmail;
    const query = {"email" : profileEmail};

    newStory.save(
        function(err, story){
            if(err){
                console.log("Story err is: " + err);
            };

            console.log(story._id);
            //adding the story id to the array in the user profile
            userModel.findOneAndUpdate(query,
                { $push: {"stories" : story._id}},
                    function(err, docAffected){
                        if(err){
                            console.log(err);
                            return err;
                        };
                    });

        res.json(results);

    });
};



exports.loadStory = function(req, res){

    const query = {"_id" : req.body.id};

    storyModel.find(query,
        function(err, docFound){
            if(err){
                console.log(err);
                return err;
            };

            res.json(docFound);
    });
};

exports.getStoryLocation = function(req, res){

    const location = req.body.location[0].zipCode;
    const query = {"locaton.zipCode" : location};

    storyModel.find(query,
        function(err, docsFound){
            if(err){
                console.log("Stroy by locaiton error : " + err);
                return err;
            }

            res.json(docsFound);

        })
};

exports.deleteStory = function(req, res){
    const storyId = req.body.storyId;
    const userEmail = req.body.userEmail;

    //creating a query for finding the user and removing story id from the array
    const query = {"email": userEmail};

    userModel.findOneAndUpdate(query,
        { $pull: {"stories": storyId}},
            function(err, docAffected){
                if(err){
                    console.log("Error deleting story from userProfile " + err);
                    return err;
                };

                console.log(docAffected.email);

                storyModel.findByIdAndRemove(storyId,
                    function(err, story){
                        if(err){
                            console.log("Error deleting the story from database " + err);
                            return err;
                        };

                        console.log(stroy.title);

                        res.json(story);
                    });

            }
    );
};

exports.getLeaders = function(req, res){

    const location = req.body.location[0].zipCode;

    const query = {"location.zipCode" : location};

    userModel.find(query,
        'balance email',
            function(err, docsFound){
                if(err){
                    console.log("Leader err :" + err);
                    return err;
                };

                const userBalanceArr = 
                    docsFound.map((item) => item );

                userBalanceArr.sort( function(a, b){
                    return b.balance[0].balance - a.balance[0].balance;
                });

                //this array contains objects with balance and email
                res.json(userBalanceArr);
            }
    );
};