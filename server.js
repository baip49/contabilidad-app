const express = require('express');
const bodyParser = require('body-parser');
const { Parser } = require('json2csv');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/api/estados-financieros', (req, res) => {
    const { transactions } = req.body;

    if (!transactions || !Array.isArray(transactions)) {
        return res.status(400).json({ error: 'El cuerpo de la solicitud debe incluir un arreglo de transacciones.' });
    }

    const estadosFinancieros = generarEstadosFinancieros(transactions);

    const formato = req.query.formato || 'json';
    if (formato === 'csv') {
        const parser = new Parser();
        const csv = parser.parse(estadosFinancieros);
        res.header('Content-Type', 'text/csv');
        res.attachment('estados-financieros.csv');
        return res.send(csv);
    }

    res.json(estadosFinancieros);
});

function generarEstadosFinancieros(transactions) {
    let totalActivos = 0;
    let totalPasivos = 0;
    let totalCapital = 0;
    let ingresos = 0;
    let egresos = 0;

    transactions.forEach(transaction => {
        if (transaction.type === 'activo') {
            totalActivos += transaction.amount;
        } else if (transaction.type === 'pasivo') {
            totalPasivos += transaction.amount;
        } else if (transaction.type === 'capital') {
            totalCapital += transaction.amount;
        } else if (transaction.type === 'ingreso') {
            ingresos += transaction.amount;
        } else if (transaction.type === 'egreso') {
            egresos += transaction.amount;
        }
    });

    const estadoResultados = {
        ingresos,
        egresos,
        utilidad: ingresos - egresos,
    };

    const balanceGeneral = {
        activos: totalActivos,
        pasivos: totalPasivos,
        capital: totalCapital,
        balance: totalActivos - totalPasivos - totalCapital,
    };

    const estadoCambiosCapital = {
        capitalInicial: totalCapital,
        utilidad: ingresos - egresos,
        capitalFinal: totalCapital + (ingresos - egresos),
    };

    const estadoFlujosEfectivo = {
        flujoOperativo: ingresos - egresos,
        flujoInversion: 0, 
        flujoFinanciamiento: 0, 
        flujoNeto: ingresos - egresos,
    };

    return {
        balanceGeneral,
        estadoResultados,
        estadoCambiosCapital,
        estadoFlujosEfectivo,
    };
}

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});