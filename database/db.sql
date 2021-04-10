CREATE DATABASE database_dana;
 use database_dana;

--users table
 CREATE TABLE tb_patient(
     idPatient INT(11) NOT NULL,
     fullName VARCHAR(16) ,
     birthDate date ,
     diagnostic VARCHAR(50) ,
     photoPath VARCHAR(50),
     parentName VARCHAR(50) ,
     parentPhone1 VARCHAR(50) ,
     parentPhone2 VARCHAR(50) ,
     medicalPath VARCHAR(50) ,
     agreementPath VARCHAR(50) ,
     dxPath VARCHAR(50) ,
     privacyPath VARCHAR(50) ,
     parentSignature VARCHAR(50) ,
     medicalRecord VARCHAR(50) ,
     congnitiveArea VARCHAR(50) ,
     socialArea VARCHAR(50) ,
     physicArea VARCHAR(50) ,
     feelingArea VARCHAR(50) ,
     grape binary ,
     alone binary ,
     twin binary ,
     support binary 
 );
 CREATE TABLE tb_session(
      idSession INT(11) NOT NULL,
      idPatient INT(11) ,
      terapist VARCHAR(16) ,
      horseName VARCHAR(16) ,
      dogName VARCHAR(16) ,
      sessionDate  date ,
      activityName VARCHAR(16) ,
      objective VARCHAR(16) ,
      evaluation VARCHAR(16) ,
      parentNote VARCHAR(16) 
 );

 ALTER TABLE tb_patient 
    ADD PRIMARY KEY(idPatient);
 ALTER TABLE tb_patient 
    MODIFY idPatient INT(11)  AUTO_INCREMENT;

DESCRIBE tb_patient;

 ALTER TABLE tb_session 
    ADD PRIMARY KEY(idSession);
 ALTER TABLE tb_session 
    MODIFY idSession INT(11)  AUTO_INCREMENT;

DESCRIBE tb_session;