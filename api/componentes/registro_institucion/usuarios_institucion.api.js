'use strict'
const model_institucion = require ('./usuarios_institucion.model');

module.exports.registrar_institucion = (req, res) =>{
    let nuevo_institucion = new model_institucion(
        {
            institucion_id: req.body.ObjectId,
            institucion_nombre_encargado : req.body.institucion_nombre_encargado,
            institucion_departamento_encargado : req.body.institucion_departamento_encargado,
            institucion_telefono : req.body.institucion_telefono,
            institucion_correo_electronico : req.body.institucion_correo_electronico,
            institucion_contrasena : req.body.institucion_contrasena,
            institucion_nombre_inscrito : req.body.institucion_nombre_inscrito,
            institucion_nombre : req.body.institucion_nombre,
            institucion_niveles : req.body.institucion_niveles,
            institucion_bachillerato_internacional : req.body.institucion_bachillerato_internacional,
            institucion_tipo : req.body.institucion_tipo,
            institucion_idiomas : req.body.institucion_idiomas,
            institucion_generos : req.body.institucion_generos,
            institucion_ideologia : req.body.institucion_ideologia,
            institucion_fundacion : req.body.institucion_fundacion,
            institucion_referencia : req.body.institucion_referencia,
            institucion_cedula : req.body.institucion_cedula,
            institucion_provincia : req.body.institucion_provincia,
            institucion_canton : req.body.institucion_canton,
            institucion_distrito : req.body.institucion_distrito,
            institucion_direccion : req.body.institucion_direccion,
            institucion_sitio_web : req.body.institucion_sitio_web,
            institucion_fax : req.body.institucion_fax,
            institucion_imagen : req.body.institucion_imagen,
            tipo_usuario : "Institucion",
        }
    );
    nuevo_institucion.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg : `No se pudo registrar el usuario, ocurrio el siguiente error ${error}`
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Se registro satisfactoriamente el usuario`
                }
            );
        }

    });
};

module.exports.validar_institucion = function (req, res){
    model_institucion.findOne({institucion_cedula: req.body.institucion_cedula}).then(
        function(usuario_institucion){
            if(usuario_institucion){
                if(usuario_institucion.institucion_contrasena == req.body.institucion_contrasena){
                    res.json({
                        success: true,
                        usuario_institucion: usuario_institucion
                    });
                } else{
                    res.json({
                        success: false,
                        msg: 'La contraseña no es correcta'
                    });
                }
            }else{
                res.json({
                    success: false,
                    msg: 'El usuario no existe'
                });
            }
        }
    )
};

module.exports.listar_institucion = (req, res) => {
    model_institucion.find().then(
        function (instituciones) {
            if(instituciones.length > 0) {
                res.json(
                    {
                        success: true,
                        instituciones : instituciones
                    }
                )
            } else {
                res.json(
                    {
                        success: false,
                        instituciones: 'No se encontraron instituciones'
                    }
                )
            }
        }
    )
};