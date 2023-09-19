<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Canine Details</title>
                <style>
                    h1 {
                    text-align: center;
                    padding-top:10px;
                    }
                    table {
                    width: 100%;
                    display:flex;
                    align-items:center;
                    align-content:center;
                    justify-content:center;

                    }
                    table, th, td {
                    padding:10px;
                    border: 1px solid black;
                    border-collapse: collapse;
                    text-align: left;
                    }
                </style>
            </head>
            <body>
                <h1>Canine details</h1>
                <table>
                    <tr>
                        <th>Breed</th>
                        <th>Color</th>
                        <th>Country</th>
                    </tr>
                    <xsl:for-each select="Dogs/Dog">
                        <tr>
                            <td>
                                <xsl:value-of select="breed" />
                            </td>
                            <td>
                                <xsl:value-of select="color" />
                            </td>
                            <td>
                                <xsl:value-of select="country" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>