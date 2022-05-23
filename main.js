// tạo ra một danh sách rỗng để chứa các nhân viên
var dsnv = new DanhSachNhanVien();
var validation= new Validation();
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
    var  _matkhau=getEle("password").value;
    var _luongCB = getEle("luongCB").value;
    var _giolam = getEle("gioLam").value;
    var isvalid=true;
    isvalid &=validation.kiemtraRong(_tkNV,"tbTKNV","(*)vui long nhập tài khoản")&&validation.ktDodaikitu(_tkNV,"tbTKNV",4,8,"(*) vui lòng nhập từ 4-8 ky tự");
    isvalid &=validation.kiemtraRong(_tenNV,"tbTen","(*)vui long nhập tên");
    isvalid &=validation.kiemtraRong(_ngaylam,"tbNgay","(*)vui long nhập ngày làm");
    isvalid &=validation.kiemtraRong(_email,"tbEmail","(*)vui long nhập email");
    isvalid &=validation.kiemtraRong(_matkhau,"tbMatKhau","(*)vui long nhập mật khẩu");
    isvalid &=validation.kiemtraRong(_luongCB,"tbLuongCB","(*)vui long nhập lương cơ bản");validation.kiemtraSoluong(_luongCB,"tbLuongCB",1000000,20000000,"(*) vui lòng nhập mức lương từ 1000000-20000000");
    isvalid &=validation.kiemtraRong(_giolam,"tbGiolam","(*)vui long nhập giờ làm")&&validation.kiemtraSoluong(_giolam,"tbGiolam",80,200,"(*) vui lòng nhập từ 80-200 giờ");
    isvalid &=validation.kiemtraCV("chucvu","tbChucVu","(*)vui lòng chọn chức vụ");
    //check validation;
    if(!isvalid) return;
    // tạo đối tượng nhân viên
    var nhanVien = new NhanVien(_tkNV, _tenNV, _email,_matkhau, _chucvuNV, _ngaylam, _luongCB, _giolam);
    // tinh tổng lương
    nhanVien.tongluong();
    //xếp loại nhân viên
    nhanVien.xeploai();
    return nhanVien;
}
getEle("btnThemNV").onclick = function () {
    var nhanVien = LayTT();
    //push nhân viên vào danh sách
   if(nhanVien){
    dsnv.themNV(nhanVien);
    creattable(dsnv.arr)
    setlocalStorage();
   }
};

function creattable(data) {
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
    <td>
    <button class="btn btn-info" onclick="suaNV('${item.tkNV}')"data-toggle="modal"data-target="#myModal">Sửa</button>
    <button class="btn btn-danger" onclick="xoaNV('${item.tkNV}')" >Xoá</button>
    </td>
    </tr>
    `;
  });
  getEle("tableDanhSach").innerHTML=content;
}
//xoa nhan vien
function xoaNV(id){
    dsnv.xoaNV(id);
    creattable(dsnv.arr);
    setlocalStorage();
};
//sua nhan vien
function suaNV(id){
    var nv=dsnv.suaNV(id);
    if(nv){
        getEle("tknv").value=nv.tkNV;
        getEle("name").value=nv.tenNV;
        getEle("email").value=nv.email;
        getEle("chucvu").value=nv.chucvuNV;
        getEle("datepicker").value=nv.ngaylam;
        getEle("luongCB").value=nv.luong;
        getEle("gioLam").value=nv.giolam;
    };
    getEle("tknv").disabled=true;
};
// cap nhat nhan vien
getEle("btnCapNhat").onclick=function(){
    var nhanVien=LayTT();
    dsnv.capnhatNV(nhanVien);
    creattable(dsnv.arr);
    setlocalStorage();
}
// tìm kiếm nhân viên
//dùng hàm addEventListener() để bắt sự kiên
getEle("searchName").addEventListener("keyup",function(){
    var keyword=getEle("searchName").value;
    var arrtk=dsnv.timkiemNV(keyword);
     creattable(arrtk);
});
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