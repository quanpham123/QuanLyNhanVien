// tạo ra một danh sách rỗng để chứa các nhân viên
var dsnv = new DanhSachNhanVien();
//xuống local lấy danh sách sinh viên lên show ra man hình
getItemlocalstorage();
// in ra table danh sách nhân viên
function getEle(id) {
    return document.getElementById(id);
}
function LayTT() {
    var _tkNV = getEle("tknv").value;
    var _tenNV = getEle("name").value;
    var _email = getEle("email").value;
    var _chucvuNV = getEle("chucvu").value;
    var _ngaylam = getEle("datepicker").value;
    var _luongCB = getEle("luongCB").value;
    var _giolam = getEle("gioLam").value;
    // tạo đối tượng nhân viên
    var nhanVien = new NhanVien(_tkNV, _tenNV, _email, _chucvuNV, _ngaylam, _luongCB, _giolam);
    // tinh tổng lương
    nhanVien.tongluong();
    //xếp loại nhân viên
    nhanVien.xeploai();
    return nhanVien;
}
getEle("btnThemNV").onclick = function () {
    var nhanVien = LayTT();
    //push nhân viên vào danh sách
    dsnv.themNV(nhanVien);
    creattable(dsnv.arr)
    setlocalStorage();
}
function creattable( data) {
    // tạo một biến rỗng để chưa bảng mình tạo
    var content = "";
    data.forEach(function(item){
        content += `
    <tr>
    <td>${item.tkNV}</td>
    <td>${item.tenNV}</td>
    <td>${item.email}</td>
    <td>${item.ngaylam}</td>
    <td>${item.chucvuNV}</td>
    <td>${item.luong}</td>
    <td>${item.loaiNV}</td>
    </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML=content;
}
//lưu xg local storage
function setlocalStorage(){
    // convert from json to string
    var dataString =JSON.stringify(dsnv.arr)
    localStorage.setItem("DanhSachNhanVien",dataString);
}
// hàm xg localstorage để lấy thông tin được lưu trả về màn hình
function getItemlocalstorage(){
    if(localStorage.getItem("DanhSachNhanVien")){
       var datastring=localStorage.getItem("DanhSachNhanVien");
       // convert from String to json
       var dataJson=JSON.parse(datastring);
       dsnv.arr=dataJson;
       creattable(dsnv.arr);
    };
}