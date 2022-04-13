const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const GatewaysModel = require('./models/Gateways');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://guilherme:guilherme@cluster0.30fhd.mongodb.net/ecomfort_prod?retryWrites=true&w=majority", {
    useNewUrlParser : true,
});

//CREATE
app.post('/insert', async(req,res) => {
    const gatewaysName = req.body.gatewaysName
    const serial_Number = req.body.serial_Number
    const registered_Users = req.body.registered_Users
    const ipv4 = req.body.ipv4
    const gateways = new GatewaysModel({name:gatewaysName, serialNumber: serial_Number, registeredUsers: registered_Users, ipV4: ipv4});


    try {
        await gateways.save();
        res.send("Inserted Data");
    } catch (error) {
        console.log(error);
    }
});

//READ
app.get('/read', async(req,res) => {
    /*const serial_Number = req.body.serial_Number
    GatewaysModel.find({$where : {serialNumber: serial_Number}}, (error, result) => {
        if(error) {
            res.send(error)
            return;
        }

        res.send(result)
    })*/
    GatewaysModel.find({}, (error, result) => {
        if(error) {
            res.send(error)
            return;
        }

        res.send(result)
    })      
});

//UPDATE
app.put('/update', async(req,res) => {
    const newGatewayName = req.body.newGatewayName
    const id = req.body.id

    try {
        await GatewaysModel.findById(id, (err, updatedNameGateway) => {
        updatedNameGateway.name = newGatewayName;
        updatedNameGateway.save();
        res.send("update");
    })
    } catch (error) {
        console.log(error);
    }
});

//DELETE
app.delete('/delete/:id', async(req,res) => {
    const id = req.body.id;
    await GatewaysModel.findByIdAndRemove(id).exec();
    res.send("deleted");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});