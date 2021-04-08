CREATE DATABASE database_dana;
 use database_dana;

--users table
 CREATE TABLE tb_patient(
     idPatient INT(11) NOT NULL,
     fullName VARCHAR(16) NOT NULL,
     birthDate date NOT NULL,
     diagnostic VARCHAR(50) NOT NULL,
     photoPath VARCHAR(50) NOT NULL,
     parentName VARCHAR(50) NOT NULL,
     parentPhone1 VARCHAR(50) NOT NULL,
     parentPhone2 VARCHAR(50) NOT NULL,
     medicalPath VARCHAR(50) NOT NULL,
     agreementPath VARCHAR(50) NOT NULL,
     dxPath VARCHAR(50) NOT NULL,
     privacyPath VARCHAR(50) NOT NULL,
     parentSignature VARCHAR(50) NOT NULL,
     medicalRecord VARCHAR(50) NOT NULL,
     congnitiveArea VARCHAR(50) NOT NULL,
     socialArea VARCHAR(50) NOT NULL,
     physicArea VARCHAR(50) NOT NULL,
     feelingArea VARCHAR(50) NOT NULL,
     grape binary NOT NULL,
     alone binary NOT NULL,
     twin binary NOT NULL,
     support binary NOT NULL
 );
 CREATE TABLE tb_session(
      idSession INT(11) NOT NULL,
      idPatient INT(11) NOT NULL,
      terapist VARCHAR(16) NOT NULL,
      horseName VARCHAR(16) NOT NULL,
      dogName VARCHAR(16) NOT NULL,
      sessionDate  date NOT NULL,
      activityName VARCHAR(16) NOT NULL,
      objective VARCHAR(16) NOT NULL,
      evaluation VARCHAR(16) NOT NULL,
      parentNote VARCHAR(16) NOT NULL
 );

 ALTER TABLE tb_patient 
    ADD PRIMARY KEY(idPatient);
 ALTER TABLE tb_patient 
    MODIFY idPatient INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE tb_patient;

 ALTER TABLE tb_session 
    ADD PRIMARY KEY(idSession);
 ALTER TABLE tb_session 
    MODIFY idSession INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE tb_session;