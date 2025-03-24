# Contabilidad App

Este proyecto es una aplicación web para registrar y clasificar transacciones contables básicas. Permite gestionar asientos de apertura, compras en efectivo, compras a crédito, compras combinadas, anticipos de clientes, compras de papelería y pagos de rentas pagadas por anticipado. Además, genera **esquemas de mayor**, **balanza de comprobación** y **balance general**.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos:

- **assets/js/app.js**: Lógica de JavaScript para gestionar entradas de datos, cálculos contables, generación de esquemas de mayor, balanza de comprobación y balance general.
- **index.html**: Página principal de la aplicación con la estructura HTML, formularios para la entrada de datos y elementos para mostrar el balance, las transacciones y los reportes contables.
- **server.js**: Servidor básico en Node.js que expone una API para generar estados financieros en formato JSON o CSV.
- **assets/libs/bootstrap.min.css**: Versión minimizada de Bootstrap CSS para estilos y componentes.
- **assets/libs/bootstrap.bundle.min.js**: Versión minimizada de Bootstrap JavaScript para funcionalidades interactivas.

## Funcionalidades

1. **Registro de Transacciones**:
   - Permite registrar transacciones contables seleccionando el tipo de transacción, la cuenta contable y el monto.
   - Actualiza automáticamente el balance general al registrar una transacción.

2. **Esquemas de Mayor**:
   - Genera esquemas de mayor agrupando las transacciones por cuenta contable.
   - Muestra los débitos, créditos y el saldo de cada cuenta.

3. **Balanza de Comprobación**:
   - Genera una tabla con los débitos y créditos totales de cada cuenta contable.
   - Permite verificar que los débitos y créditos estén balanceados.

4. **Balance General**:
   - Calcula y muestra los activos, pasivos y capital con base en las transacciones registradas.

5. **Reinicio del Balance**:
   - Permite reiniciar el balance y limpiar el historial de transacciones.

6. **API para Estados Financieros**:
   - Exposición de una API básica en el servidor (`server.js`) que permite:
     - Recibir un arreglo de transacciones contables.
     - Generar los siguientes estados financieros:
       - Balance General.
       - Estado de Resultados.
       - Estado de Cambios en el Capital Contable.
       - Estado de Flujos de Efectivo.
     - Devolver los estados financieros en formato JSON o CSV.

## Instrucciones de Instalación

1. Clona este repositorio en tu computadora.
2. Instala las dependencias del servidor ejecutando `npm install`.
3. Inicia el servidor con `npm start`.
4. Abre el archivo `index.html` en tu navegador web.

## Uso de la Aplicación

1. **Registrar Transacciones**:
   - Completa el formulario seleccionando el tipo de transacción, la cuenta contable y el monto.
   - Haz clic en "Registrar Transacción" para agregar la transacción y actualizar el balance.

2. **Generar Esquemas de Mayor**:
   - Haz clic en el botón "Generar Esquemas de Mayor" para visualizar las transacciones agrupadas por cuenta contable.

3. **Generar Balanza de Comprobación**:
   - Haz clic en el botón "Generar Balanza de Comprobación" para ver los débitos y créditos totales de cada cuenta.

4. **Generar Balance General**:
   - Haz clic en el botón "Generar Balance General" para calcular y mostrar los activos, pasivos y capital.

5. **Reiniciar Balance**:
   - Haz clic en el botón "Reiniciar Balance" para limpiar el historial de transacciones y reiniciar el balance a $0.00.

6. **Usar la API para Estados Financieros**:
   - Envía una solicitud POST al endpoint `/api/estados-financieros` del servidor con un cuerpo JSON que contenga un arreglo de transacciones.
   - Ejemplo de cuerpo de solicitud:
     ```json
     {
         "transactions": [
             { "type": "activo", "amount": 5000 },
             { "type": "pasivo", "amount": 2000 },
             { "type": "capital", "amount": 3000 },
             { "type": "ingreso", "amount": 7000 },
             { "type": "egreso", "amount": 4000 }
         ]
     }
     ```
   - Puedes especificar el formato de salida (JSON o CSV) utilizando el parámetro de consulta [formato](http://_vscodecontentref_/1). Ejemplo:
     - JSON: `http://localhost:3000/api/estados-financieros?formato=json`
     - CSV: `http://localhost:3000/api/estados-financieros?formato=csv`

## Ejemplos de Uso

- Para registrar una compra en efectivo:
  1. Selecciona "Compra en Efectivo" en el formulario.
  2. Selecciona la cuenta contable correspondiente (por ejemplo, "Caja").
  3. Ingresa el monto y haz clic en "Registrar Transacción".

- Para generar un esquema de mayor:
  1. Haz clic en "Generar Esquemas de Mayor".
  2. Visualiza las transacciones agrupadas por cuenta y el saldo de cada una.

- Para generar un balance general:
  1. Haz clic en "Generar Balance General".
  2. Visualiza los activos, pasivos y capital calculados.

- Para usar la API:
  1. Envía una solicitud POST al servidor con las transacciones.
  2. Recibe los estados financieros en el formato solicitado (JSON o CSV).

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la aplicación, por favor abre un issue o envía un pull request.

## Tecnologías Utilizadas

- **HTML5** y **CSS3** para la estructura y diseño de la interfaz.
- **Bootstrap 5** para estilos y componentes responsivos.
- **JavaScript** para la lógica de la aplicación.
- **Node.js** y **Express** para el servidor y la API.