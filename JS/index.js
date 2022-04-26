$(document).ready(function() {
    var i = 1; // Khởi tạo số thứ tự
   // Viết code vào
    $("#btn2").click(function(){
        $("#myModal").modal();
    })

function kiemTraTen()
{
    let mauKT = /^([A-Z]{1}\[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
    let ht = $("#Name").val();
    if(ht =="")
    {
        $("#tbName").html("Không để trống");
        return false;
    }
    if(mauKT.test(ht)==false)
    {
        $("#tbName").html("Mỗi kí tự đầu viết hoa không được sử dụng số");
        return true;
    }
    else{
        $("#tbName").html("*");
        return true;
    }
}
$("#Name").blur(kiemTraTen);
    
function KiemTraSoAo(){
    var mauKT= /^\d*$/;
    var ht = $("#Ao").val();
    if(ht=='')
    {
        $("#tbAo").html("Không để trống");
        return false;
    }
    if(mauKT.test(ht)==false)
    {
        $("#tbAo").html("Dùng số từ 1 đến 100");
        return true;
    }
    else
    {
        var soAo = $("#Ao").val();
        if(soAo<1 || soAo>100)
        {
            $("#tbAo").html("Từ 1 đến 100");
        }
        else
        {
            $("#tbAo").html("*");
            return true;
        }
    }
}
$("#Ao").blur(KiemTraSoAo);

function KiemTraDiaChi()
{
    var mauKT=/^[A-Z][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;    
    var ht = $("#DC").val();
    if(ht=="")
    {
        $("#tbDC").html("Không để trống");
        return false;
    }
    if(mauKT.test(ht)==true)    
    {
        $("#tbDC").html("*");
        return true;
    }
    else
    {
        $("#tbDC").html("Mỗi kí tự đầu viết hoa không sử dụng số");
        return true;
    }
}
$("#DC").blur(KiemTraDiaChi);

function KiemTraNTT()
{
    var ht = $("#NTT").val();
    if(ht == "")
    {
        $('#tbNTT').html("không để trống");
        return false;
    }
    var today = new Date()
    var ntt = new Date(ht);
    today = today.setDate(today.getDate()+7);
    if(today > ntt )
    {
        $('#tbNTT').html("Phải sau ngày hiện tại 7 ngày");
        return false;
    }
    else
    {
        $('#tbNTT').html("*");
        return true;
    }
}
$("#NTT").blur(KiemTraNTT);

function KiemtraSDT()
{
    var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
    var ht = $("#SDT").val()
    if(ht=="")
    {
        $("#tbSDT").html("không được để trống");
        return false;
    }
    if(mauKT.test(ht)==true)
    {
        $("#tbSDT").html("*");
        return true;
    }
    else
    {
        $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
        return false;
    }
}
$("#SDT").blur(KiemtraSDT);

$("Save").click(function(){
    if(kiemTraTen()==true && KiemTraSoAo()==true && KiemtraSDT()==true && KiemTraNTT()==true && KiemTraDiaChi()==true)
    {
        row = "<tr>";
        row += "<th>"+(i++)+"</th>";
        row += "<th>"+ $("#Name").val() +"</th>";
        row += "<th>"+$("#Ao").val()+"</th>";
        row += "<th>"+ $("#DC").val() +"</th>"
        row += "<th>"+ $("#NTT").val() +"</th>";
        row += "<th>"+ $("#SDT").val() +"</th>";
        row += "<th>"+ $("#ADD").val() +"</th>";
        $("#danhsach").append(row);
        $("#myModal").modal("hide");

    }
})
});