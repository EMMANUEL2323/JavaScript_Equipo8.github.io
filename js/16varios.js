function muestra(sValor, oTbl, oElemento){
    var nTabla=0, i=0;
    var oLinea;
    var oCeldaOpe, oCeldaRes, oCeldaCal;
    
    var oCtrl;
    var oCtrl2;
        if (isNaN(sValor))
            alert("Debe elegir la tabla de multiplicar");
        else{
            nTabla = parseInt(sValor, 10);
            if (oElemento != null){
                oElemento.style.visibility = "visible";
    
                if (oTbl != null){
                    //Si la tabla está llena, vaciarla primero
                    if (oTbl.rows.length>1){
                        for (i=1; i<=10; i++)
                            oTbl.deleteRow(-1);
                    }
    
                    //Colocar operaciones y campos para resultado en la tabla
                    for (i=1; i<=10; i++){
                        oLinea = oTbl.insertRow(-1);
                        oCeldaOpe = oLinea.insertCell(0);
                        oCeldaRes = oLinea.insertCell(1);
                        oCeldaCal=oLinea.insertCell(2);
                        oCeldaOpe.innerHTML = nTabla + " * " + i;
    
    
                        oCtrl = document.createElement("input");
                        oCtrl.type="text";
                        oCtrl.id = "txtResultado"+i;
                        oCeldaRes.appendChild(oCtrl);
    
                        oCeldaCal.innerHTML =  "  " ;
    
                        oCtrl2 = document.createElement("text");
                        //oCtrl2.type="text";
                        oCtrl2.id="ok"+i;
                        oCeldaCal.appendChild(oCtrl2);
    
    
                    }   
                }
            }
        }
    }
    
    /*
    * Función: califica
    */
    function califica(sValor, oTbl) {
        var nTabla = 0, i = 0, nCapturado = 0, nCalif = 0;
        var sValorCapturado = "", sErr = "";
        var sValorCal = "";
      
        if (isNaN(sValor)) {
          sErr = "Debe elegir la tabla de multiplicar";
        } else {
          nTabla = parseInt(sValor, 10);
      
          //Recorrer los campos si ya están pintados
          if (oTbl.rows.length > 1) {
            for (i = 1; i <= 10; i++) {
              sValorCapturado = document.getElementById("txtResultado" + i).value;
              if (isNaN(sValorCapturado)) {
                sErr = sErr + "Error de captura en el resultado " + i + "\n";
              } else {
                nCapturado = parseInt(sValorCapturado, 10);
                if (nCapturado == nTabla * i) {
                  nCalif++;
                  document.getElementById("txtResultado" + i).style =
                    "border: 4px solid #4bf510; background-color: #4bf510";
                    oTbl.rows[i].cells[2].innerHTML="Correcto"
                } else {
                  document.getElementById("txtResultado" + i).style =
                    "border: 4px solid #f00; background-color: #f00";
                    oTbl.rows[i].cells[2].innerHTML="Incorrecto"
                }
              }
            }
          }
        }
	if (sErr == "") //Este if se ocupa para mostrar el mensaje 
	{	
	var newDiv = document.createElement("div"); //crea el div
    var newContent = document.createTextNode(""); //crea el texto
    newDiv.appendChild(newContent); //agrega el texto
  
    var newP = document.createElement("p"); //crea el parrafo <p>            
    var ResTole = document.createTextNode("Calificacion = "+nCalif ); //Aqui cambias la variable donde guardes los aciertos 
    newP.appendChild(ResTole); //inserta el texto en p                            en este ejemplo es nCalif pero lo cambias
  
   document.body.appendChild(newDiv); //inserta el div al documento
   document.body.appendChild(newP); //inserta el p al documento
	}
   else
		alert(sErr);//Deje el alert ya que no hace nada porque el valor de esta variable es ""
}
