const {format}= require("timeago.js");

 const helper={};

 helper.timeago=(created_at)=>{
    return format(created_at);
 };
 module.exports =helper;