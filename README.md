# Contabilidad App

Este proyecto es una aplicación web para registrar y clasificar transacciones contables básicas. Permite gestionar asientos de apertura, compras en efectivo, compras a crédito, compras combinadas, anticipos de clientes, compras de papelería y pagos de rentas pagadas por anticipado. Además, genera **esquemas de mayor**, **balanza de comprobación** y **balance general**.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos:

- **assets/js/app.js**: Lógica de JavaScript para gestionar entradas de datos, cálculos contables, generación de esquemas de mayor, balanza de comprobación y balance general.
- **index.html**: Página principal de la aplicación con la estructura HTML, formularios para la entrada de datos y elementos para mostrar el balance, las transacciones y los reportes contables.
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

## Instrucciones de Instalación

1. Clona este repositorio en tu computadora.
2. Abre el archivo `index.html` en tu navegador web.

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

## Capturas de Pantalla

Asegúrate de capturar imágenes de las siguientes funcionalidades para incluirlas aquí:
- Registro de transacciones.
- Esquemas de mayor generados.
- Balanza de comprobación.
- Balance general.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar la aplicación, por favor abre un issue o envía un pull request.

## Tecnologías Utilizadas

- **HTML5** y **CSS3** para la estructura y diseño de la interfaz.
- **Bootstrap 5** para estilos y componentes responsivos.
- **JavaScript** para la lógica de la aplicación.