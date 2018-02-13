import axios from "axios";

export default {
    //query should be the email of the user
    getProfile: function(query){
        return axios.get("/api/profile/" + query);
    },
    //query should an object containing firstname, lastname
    saveProfile: function(query){
        return axios.post('/api/profile', query);
    },
    addInterest: function(query){
        return axios.post('/userInterest', query);
    },
    request: function(query){
        return axios.post('/api/request', query);
    },
    signUp: function(query){
        return axios.post('/api/signup', query);
    },
    getStoryLocation: function(query){
        return axios.get('/api/storyLocation/' + query);
    },
    deleteStroy: function(query){
        return axios.delete('/api/story', query);
    },
    loadStory: function(query){
        return axios.get('/api/story/' + query);
    },
    getLeaders: function(query){
        return axios.get('/api/leaders/' + query);
    }
}