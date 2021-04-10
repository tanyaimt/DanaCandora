const { response } = require('express');
const express = require ('express');
const router =express.Router();

const pool = require('../database');

router.get('/addSession',(req,res) => {
    res.render('links/addSession');
});

router.get('/addPatient',(req,res) => {
    res.render('links/addPatient');
});

router.post('/addPatient',async(req,res) => {
    const {fullName}=req.body;
    console.log(req.body);
    const newLink={fullName};

});

router.get('/',async(req,res) => {
    const links = await pool.query('SELECT * FROM tb_patient');
    console.log(links);
    res.render('links/lists',{links: links});
});
router.get('/delete/:id',async(req,res) => {
    const {id} = req.params;
    await pool.query('DELETE FROM links WHERE id=?',[id]);
    req.flash('success','Link Deleted Succefully');
    res.redirect('/links');
});
router.get('/edit/:id',async(req,res) => {
    const {id} = req.params;
    const links = await pool.query('SELECT * FROM links where id=?',[id]);
    res.render('links/edit',{link:links[0]});
});

router.post('/edit/:id',async(req,res) => {
    const { id } = req.params;
    const { title,description,url } = req.body;
    const newLink = {
        title,
        description,
        url
    };
    await pool.query('UPDATE links SET ? WHERE id=?',[newLink,id]);
    req.flash('success','Link Updated Succefully');
    res.redirect('/links/');
});


module.exports=router;