const express = require('express');
var mySQL = require('mysql');

const routes = express.Router();

var connection = mySQL.createConnection({
    host: '66.70.194.206',
    user: 'root',
    password: 'db.pim1211',
    database: 'bdpim'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected to MySQL Server!");
});

// API Empresas

routes.get("/empresas", function(req, res){
    connection.query('select * from tbl_empresas', function(err, rows, fields){
        if (!err)
            res.status(200).json(rows);
        else
        res.status(400).json(err);
    })
});

routes.get("/empresas/:id", function(req, res){
    connection.query('select * from tbl_empresas where ID_EMPRESA = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/empresas", function(req, res){
    connection.query('insert tbl_empresas set ?', req.body, function(err, rows, fields){
        if (!err)
        res.status(201).json('Registro ' + rows.insertId + ' inserido com sucesso');
        else
            res.status(400).json(err)
    })

});

routes.delete("/empresas/:id", function(req, res){
    connection.query('delete from tbl_empresas where ID_EMPRESA = ?', [req.body.id], function(err, rows, fields){
        if(!err)
        res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.put("/empresas/:id", function(req, res){
    connection.query('update tbl_empresas set ? where id = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

// API Veículos

routes.get("/veiculos", function(req, res){
    connection.query('select * from tbl_cadveiculo', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/veiculos/:id", function(req, res){
    connection.query('select * from tbl_cadveiculo where id_veiculo = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/veiculos", function(req, res){
    connection.query('insert tbl_cadveiculo set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});

routes.delete("/veiculos/:id", function(req, res){
    connection.query('delete from tbl_cadveiculo where id_veiculo = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/veiculos/:id", function(req, res){
    connection.query('update tbl_cadveiculo set ? where id_veiculo = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

// API Multas

routes.get("/multas", function(req, res){
    connection.query('select * from tbl_cadmulta', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/multas/:id", function(req, res){
    connection.query('select * from tbl_cadmulta where id_multa = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/multas", function(req, res){
    connection.query('insert tbl_cadmulta set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});

routes.delete("/multas/:id", function(req, res){
    connection.query('delete from tbl_cadmulta where id_multa = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/multas/:id", function(req, res){
    connection.query('update tbl_cadmulta set ? where id_multa = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

// API Motoristas

routes.get("/motoristas", function(req, res){
    connection.query('select * from tbl_cadmotorista', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/motoristas/:id", function(req, res){
    connection.query('select * from tbl_cadmotorista where id_motorista = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/motoristas", function(req, res){
    connection.query('insert tbl_cadmotorista set ?', req.body, function(err, rows, fields){
        if (!err)
        res.status(201).json('Registro ' + rows.insertId + ' inserido com sucesso');
        else
            res.status(400).json(err)
    })

});

routes.delete("/motoristas/:id", function(req, res){
    connection.query('delete from tbl_cadmotorista where ID_MOTORISTA = ?', [req.params.id,], function(err, rows, fields){
        if(!err)
        res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});
 
 routes.put("/motoristas/:id", function(req, res){
     connection.query('update tbl_cadmotorista set ? where ID_MOTORISTA = ?' + req.body.CATEGORIACNH_MOTORISTA +' where ID_MOTORISTA = ?', [req.params.id], function (err, rows, fields) {
          if (!err)
              res.json(rows);
          else
            res.json(err);
      })
  });


// API Viagens

routes.get("/viagens", function(req, res){
    connection.query('select * from tbl_cadviagem', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/viagens/:id", function(req, res){
    connection.query('select * from tbl_cadviagem where id_viagem = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/viagens", function(req, res){
    connection.query('insert tbl_cadviagem set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});

routes.delete("/viagens/:id", function(req, res){
    connection.query('delete from tbl_cadviagem where id_viagem = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/viagens/:id", function(req, res){
    connection.query('update tbl_cadviagem set ? where id_viagem = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

// API Abastecimento

routes.get("/abastecimento", function(req, res){
    connection.query('select * from tbl_cadabastecimento', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/abastecimento/:id", function(req, res){
    connection.query('select * from tbl_cadabastecimento where id_abastecimento = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/abastecimento", function(req, res){
    connection.query('insert tbl_cadabastecimento set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});

routes.delete("/abastecimento/:id", function(req, res){
    connection.query('delete from tbl_cadabastecimento where id_abastecimento = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/abastecimento/:id", function(req, res){
    connection.query('update tbl_cadabastecimento set ? where id_abastecimento = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

// API Seguro

routes.get("/seguro", function(req, res){
    connection.query('select * from tbl_cadseguro', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/seguro/:id", function(req, res){
    connection.query('select * from tbl_cadseguro where id_seguro = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/seguro", function(req, res){
    connection.query('insert tbl_cadseguro set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});

routes.delete("/seguro/:id", function(req, res){
    connection.query('delete from tbl_cadseguro where id_seguro = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/seguro/:id", function(req, res){
    connection.query('update tbl_cadseguro set ? where id_seguro = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

// API Financas

routes.get("/financas", function(req, res){
    connection.query('select * from tbl_cadfinanca', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/financas/:id", function(req, res){
    connection.query('select * from tbl_cadfinancas where id_financa = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/financas", function(req, res){
    connection.query('insert tbl_cadfinanca set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

});

routes.delete("/financas/:id", function(req, res){
    connection.query('delete from tbl_cadfinanca where id_financa = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/finacas/:id", function(req, res){
    connection.query('update tbl_cadfinanca set ? where id_financa = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});


// API Login

routes.post("/authenticate", async function (req, res) {
    const { user, password } = req.body;

    connection.query('select id, login, login_password from tb_login where login = ?', user, function (err, rows, fields) {
        if (err)
            res.status(400).json(err);
        else
            if (rows.length == 0)
                res.status(400).json({ error: 'Login não encontrado!' });
            else
                if (password != rows[0].login_password)
                    res.status(400).json({ error: 'Senha inválida!' });
                else {
                    res.status(200).send({
                        rows,
                        
                    });
                }
    })
});

routes.get("/cadlog", function(req, res){
    connection.query('select * from tb_login', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

module.exports = routes;