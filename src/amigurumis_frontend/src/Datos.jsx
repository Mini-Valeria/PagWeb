import React from 'react';

const TablaDatos = () => {
    return (
        <div>
            <h2>Tabla de Valores</h2>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Tuberia 1</th>
                        <th>Tuberia 2</th>
                        <th>Tuberia 3</th>
                    
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>ph_value</td>
                        <td>Turbidez_value</td>
                        <td>temp_valu</td>
                        
                    </tr>
                    <tr>
                        <td>7.0</td>
                        <td>3.0</td>
                        <td>8.0</td>
                        
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>30</td>
                        <td>40</td>
                        
                    </tr>
                    <tr>
                        <td>60</td>
                        <td>56</td>
                        <td>65</td>
                        
                    </tr>
                    <tr>
                        <td>40</td>
                        <td>34</td>
                        <td>50</td>
                        
                    </tr>
                    <tr>
                        <td> La calidad del agua es : 77.98
                            se detecta baja precion : puede haber una fuga en el sistema.
                        </td>
                        <td>La calidad del agua es : 70.87
                        se detecta baja precion : puede haber una fuga en el sistema.</td>
                        <td>La calidad del agua es : 70.87
                        se detecta baja precion : puede haber una fuga en el sistema.</td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TablaDatos;
