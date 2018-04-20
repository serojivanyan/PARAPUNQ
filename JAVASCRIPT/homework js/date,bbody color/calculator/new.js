
                var a = document.getElementById("result")
                var r=0
                function f(){
                    var n1=document.getElementById('num1').value
                    var n2=document.getElementById('num2').value
                    r = n1 + n2
                    a.value = r
                }

                function b(){
                    var n1=document.getElementById('num1').value
                    var n2=document.getElementById('num2').value
                    r = n1 - n2
                    a.value = r
                }

                function c(){
                    var n1=document.getElementById('num1').value
                    var n2=document.getElementById('num2').value
                    r = n1 * n2
                    a.value = r
                }

                function d(){
                    var n1=document.getElementById('num1').value
                    var n2=document.getElementById('num2').value
                    if(n2==0){
                                    alert("թիվը 0-ի բաժանել չի կարելի")
                                               document.getElementById("num2").value=""
                               }
                               else r=n1/n2
                
                    a.value = r
                }

                function e(){
                    var n1=document.getElementById('num1').value =""
                    var n2=document.getElementById('num2').value =""
                }
 