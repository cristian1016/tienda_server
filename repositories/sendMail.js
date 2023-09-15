const nodemailer = require('nodemailer');
const mysql = require("mysql2");

// Configuración del transportador de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'smtp.gmail.com',
  auth: {
    user: 'mercadocampesinocol@gmail.com', // Tu dirección de correo electrónico de Gmail
    pass: 'hikfobmxmxvndchn!', // Tu contraseña de Gmail
  },
});

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: "localhost", // Cambia esto a la dirección de tu servidor MySQL si es necesario
  user: "root",
  password: "Sena1234",
  database: "conexionTienda",
});

// Establecer la conexión a la base de datos
db.connect();

// Función para enviar un correo electrónico al usuario
const enviarCorreo = (user_id) => {
  // Consulta la dirección de correo electrónico del usuario en la base de datos
  const query = 'SELECT email FROM users WHERE id_user = ?';

  db.query(query, [user_id], (err, result) => {
    if (err || result.length === 0) {
      // Maneja errores al obtener la dirección de correo electrónico del usuario
      console.error('Error al obtener la dirección de correo electrónico del usuario: ' + err?.message);
    } else {
      // Obtiene la dirección de correo electrónico del resultado de la consulta

      const email_user = result[0].email;

      // Configura las opciones para el correo electrónico
      const opcionesCorreo = {
        from: 'mercadocampesinocol@gmail.com',
        to: email, 
        subject: 'Ensayo cliente correo',
        html: '<img src="https://i.pinimg.com/564x/d7/10/05/d71005b11f7c25a5b1ccc85a323f9080.jpg">'
      };

      // Envía el correo electrónico utilizando el transportador
      transporter.sendMail(opcionesCorreo, (error, info) => {
        if (error) {
          // Maneja errores al enviar el correo electrónico
          console.error('Error al enviar el correo electrónico: ' + error?.message);
        } else {
          // Registro de éxito al enviar el correo electrónico
          console.log('Correo electrónico enviado con éxito: ' + info.response);
        }
      });
    }
  });
};

module.exports = { enviarCorreo };