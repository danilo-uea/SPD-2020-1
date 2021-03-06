const mongoose = require('mongoose');

const MensagemSchema = new mongoose.Schema({
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    idChat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat',
        require: true
    },
    texto: {
        type: String,
        required: true
    },
    publicacao: {
        type: Date,
        default: Date.now,
    }
});


mongoose.model('Mensagem', MensagemSchema);
