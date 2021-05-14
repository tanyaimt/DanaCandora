const { response } = require('express');
const express = require ('express');
const router =express.Router();

const pool = require('../database');
//ADD GET
router.get('/addSession/:idPatient',(req,res) => {
    res.render('links/addSession');
});

router.get('/listsSession/:idPatient',(req,res) => {
    res.render('links/addSession');
});

router.get('/addPatient',(req,res) => {
    res.render('links/addPatient');
});
router.get('/consentimiento',(req,res) => {
    res.render('links/consentimiento');
});
//ADD POST
router.post('/addPatient',async(req,res) => {
    const {fullName,birthDate,diagnostic,photoPath,parentName,parentPhone1,parentPhone2,medicalPath,agreementPath,dxPath,privacyPath,parentSignature,medicalRecord,congnitiveArea,socialArea,physicArea,feelingArea,monta}=req.body;
    const newPatient={
        fullName,
        birthDate,
        diagnostic,
        photoPath,
        parentName,
        parentPhone1,
        parentPhone2,
        medicalPath,
        agreementPath,
        dxPath,
        privacyPath,
        parentSignature,
        medicalRecord,
        congnitiveArea,
        socialArea,
        physicArea,
        feelingArea,
        monta
    };
    await pool.query('INSERT INTO tb_patient set?',[newPatient]);
    req.flash('success','Paciente agregado exitosamente');
    res.redirect('/links');
});
router.post('/addSession/:idSession',async(req,res) => {
    console.log(req.body);
    const {terapist,horseName,dogName,sessionDate,activityName,objective,evaluation,parentNote}=req.body;
    const newSession={
        terapist,
        horseName,
        dogName,
        sessionDate,
        activityName,
        objective,
        evaluation,
        parentNote
    };
     await pool.query('INSERT INTO tb_session set?',[newSession]);
    req.flash('success','Sesion agregada exitosamente');
    res.render('/links/listsSession/');
});
//LIST
router.get('/',async(req,res) => {
    const links = await pool.query('SELECT * FROM tb_patient');
    res.render('links/listsPatient',{links: links});
});
router.get('/session/:idPatient',async(req,res) => {
    const {idPatient} = req.params;
    const links = await pool.query('SELECT * FROM tb_session s,tb_patient p where p.idPatient=s.idPatient and s.idPatient=?',[idPatient]);
    res.render('links/listsSession',{links: links});
});
//DELETE
router.get('/deletePatient/:idPatient',async(req,res) => {
    const {idPatient} = req.params;
    await pool.query('DELETE FROM tb_patient WHERE idPatient=?',[idPatient]);
    req.flash('success','Paciente eliminado');
    res.redirect('/links');
});
router.get('/deleteSession/:idPatient/:idSession',async(req,res) => {
    const {idSession,idPatient} = req.params;
    await pool.query('DELETE FROM tb_session WHERE idSession=?',[idSession]);
    req.flash('success','Sesion eliminada');
    res.redirect('/links/session/:idPatient');
});
//EDIT GET
router.get('/editPatient/:idPatient',async(req,res) => {
    const {idPatient} = req.params;
    const links = await pool.query('SELECT * FROM tb_patient where idPatient=?',[idPatient]);
    console.log(links[0]);
    res.render('links/editPatient',{links:links[0]});
});
router.get('/editSession/:idSession',async(req,res) => {
    const {idSession} = req.params;
    const links = await pool.query('SELECT * FROM tb_session where idSession=?',[idSession]);
    res.render('links/editSession',{links:links[0]});
});
//EDIT POST
router.post('/editPatient/:idPatient',async(req,res) => {
    const { idPatient } = req.params;
    console.log(idPatient);
    const {fullName,birthDate,diagnostic,photoPath,parentName,parentPhone1,parentPhone2,medicalPath,agreementPath,dxPath,privacyPath,parentSignature,medicalRecord,congnitiveArea,socialArea,physicArea,feelingArea,monta}=req.body;
    const newLink={
        fullName,
        birthDate,
        diagnostic,
        photoPath,
        parentName,
        parentPhone1,
        parentPhone2,
        medicalPath,
        agreementPath,
        dxPath,
        privacyPath,
        parentSignature,
        medicalRecord,
        congnitiveArea,
        socialArea,
        physicArea,
        feelingArea,
        monta
    };
    console.log(newLink)
    await pool.query('UPDATE tb_patient SET ? WHERE idPatient=?',[newLink,idPatient]);
    req.flash('success','Paciente actualizado');
    res.redirect('/links/');
});
router.post('/editSession/:idSession',async(req,res) => {
    const { idSession } = req.params;
    const {terapist,horseName,dogName,sessionDate,activityName,objective,evaluation,parentNote}=req.body;
    const newSession={
        terapist,
        horseName,
        dogName,
        sessionDate,
        activityName,
        objective,
        evaluation,
        parentNote
    };
    await pool.query('UPDATE tb_session SET ? WHERE idSession=?',[newLink,idSession]);
    req.flash('success','Sesion actualizada');
    res.redirect('/links/sessions/idPatient');
});

module.exports=router;