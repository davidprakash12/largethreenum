<!DOCTYPE html>

<HTML>
    <HEAD>
        <SCRIPT>
            function Find(){
                var a=parseInt(document.getElementById("txta").value);
                var b=parseInt(document.getElementById("txtb").value);
                var c=parseInt(document.getElementById("txtc").value);
                
                var g=0;
                
                if(a>b){
                    if(a>c){
                        g=a;
                    }
                    else{
                        g=c;
                    }
                }
                else{
                    if(b>c){
                        g=b;
                    }
                    else{
                        g=c;
                    }
                }
                
                document.getElementById("txtd").value=""+g;
                
                
            }
        </SCRIPT>
    </HEAD>
    <BODY>
        <h2>Nested If : True/False ladder</h2>
        <hr />
        <table>
            <tr>
                <td>
                    <label>Enter A</label>
                </td>
                <td>
                    <input type="text" name="txta" id="txta" />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Enter B</label>
                </td>
                <td>
                    <input type="text" name="txtb" id="txtb"  />
                </td>
            </tr>
            <tr>
                <td>
                    <label>Enter C</label>
                </td>
                <td>
                    <input type="text" name="txtc" id="txtc"  />
                </td>
            </tr>
            <tr>
                <td>
                    &nbsp;
                </td>
                <td>
                    <input type="button" value="Find" onclick="Find()" />
                </td>
            </tr>
             
            <tr>
                <td>
                    <label>Greater</label>
                </td>
                <td>
                    <input type="text" name="txtd" id="txtd" readonly />
                </td>
            </tr>
        </table>
    </BODY>
</HTML>
