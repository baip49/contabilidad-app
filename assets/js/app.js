document.addEventListener('DOMContentLoaded', function() {
    const transactionForm = document.getElementById('transactionForm');
    const transactionList = document.getElementById('transactionList');
    const balanceDisplay = document.getElementById('balanceDisplay');
    
    let transactions = []; // Cada transacción será un objeto con detalles
    let balance = 0;

    function updateBalance(amount) {
        balance += amount; // Actualiza el balance sumando o restando el monto
        const balanceDisplay = document.getElementById('balanceDisplay');
        if (balanceDisplay) {
            balanceDisplay.textContent = `Balance Actual: $${balance.toFixed(2)}`;
        }
    }

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const transactionType = document.getElementById('transactionType').value;
        const account = document.getElementById('account').value;
        const amountInput = document.getElementById('amount');
        const amount = parseFloat(amountInput.value);
        
        if (!isNaN(amount)) {
            const transaction = {
                type: transactionType,
                account: account,
                amount: amount,
                isDebit: transactionType === 'apertura' || transactionType === 'anticipo'
            };

            transactions.push(transaction); // Guarda la transacción en el historial

            // Actualiza el balance
            updateBalance(transaction.isDebit ? amount : -amount);

            // Agrega la transacción a la lista visual
            const listItem = document.createElement('li');
            listItem.textContent = `${transaction.account} (${transaction.type}): $${amount.toFixed(2)} (${transaction.isDebit ? 'Débito' : 'Crédito'})`;
            transactionList.appendChild(listItem);

            // Limpia el formulario
            amountInput.value = '';
            document.getElementById('transactionType').value = '';
            document.getElementById('account').value = '';
        } else {
            alert('Por favor, ingrese un monto válido.');
        }
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        balance = 0; // Reinicia el balance
        updateBalance(0); // Actualiza la visualización del balance
        transactionList.innerHTML = ''; // Limpia la lista de transacciones
        transactions = []; // Limpia el historial de transacciones (si decides usarlo)
    });

    document.getElementById('generateLedger').addEventListener('click', function() {
        const ledgerOutput = document.getElementById('ledgerOutput');
        ledgerOutput.innerHTML = ''; // Limpia el contenido previo

        const ledger = {};

        // Agrupa las transacciones por cuenta
        transactions.forEach(transaction => {
            if (!ledger[transaction.account]) {
                ledger[transaction.account] = [];
            }
            ledger[transaction.account].push(transaction);
        });

        // Genera el esquema de mayor para cada cuenta
        for (const account in ledger) {
            const accountTransactions = ledger[account];
            let accountBalance = 0;

            const accountDiv = document.createElement('div');
            accountDiv.innerHTML = `<h4>${account}</h4>`;
            const accountList = document.createElement('ul');

            accountTransactions.forEach(transaction => {
                accountBalance += transaction.isDebit ? transaction.amount : -transaction.amount;
                const listItem = document.createElement('li');
                listItem.textContent = `${transaction.type}: $${transaction.amount.toFixed(2)} (${transaction.isDebit ? 'Débito' : 'Crédito'})`;
                accountList.appendChild(listItem);
            });

            const balanceItem = document.createElement('li');
            balanceItem.textContent = `Saldo: $${accountBalance.toFixed(2)}`;
            accountList.appendChild(balanceItem);

            accountDiv.appendChild(accountList);
            ledgerOutput.appendChild(accountDiv);
        }
    });

    document.getElementById('generateTrialBalance').addEventListener('click', function() {
        const trialBalanceOutput = document.getElementById('trialBalanceOutput');
        trialBalanceOutput.innerHTML = ''; // Limpia el contenido previo

        const trialBalance = {};

        // Agrupa las transacciones por cuenta
        transactions.forEach(transaction => {
            if (!trialBalance[transaction.account]) {
                trialBalance[transaction.account] = { debit: 0, credit: 0 };
            }
            if (transaction.isDebit) {
                trialBalance[transaction.account].debit += transaction.amount;
            } else {
                trialBalance[transaction.account].credit += transaction.amount;
            }
        });

        // Genera la tabla de balanza de comprobación
        const table = document.createElement('table');
        table.classList.add('table', 'table-bordered');
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Cuenta</th>
                    <th>Débitos</th>
                    <th>Créditos</th>
                </tr>
            </thead>
            <tbody>
                ${Object.entries(trialBalance).map(([account, { debit, credit }]) => `
                    <tr>
                        <td>${account}</td>
                        <td>$${debit.toFixed(2)}</td>
                        <td>$${credit.toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        `;

        trialBalanceOutput.appendChild(table);
    });

    document.getElementById('generateBalanceSheet').addEventListener('click', function() {
        const balanceSheetOutput = document.getElementById('balanceSheetOutput');
        balanceSheetOutput.innerHTML = ''; // Limpia el contenido previo

        let totalAssets = 0;
        let totalLiabilities = 0;

        transactions.forEach(transaction => {
            if (transaction.account === 'caja' || transaction.account === 'bancos' || transaction.account === 'clientes') {
                totalAssets += transaction.isDebit ? transaction.amount : -transaction.amount;
            } else {
                totalLiabilities += transaction.isDebit ? transaction.amount : -transaction.amount;
            }
        });

        balanceSheetOutput.innerHTML = `
            <h4>Balance General</h4>
            <p>Activos: $${totalAssets.toFixed(2)}</p>
            <p>Pasivos: $${totalLiabilities.toFixed(2)}</p>
            <p>Capital: $${(totalAssets - totalLiabilities).toFixed(2)}</p>
        `;
    });
});