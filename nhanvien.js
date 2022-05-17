function NhanVien(_tkNV,_tenNV,_email,_chucvuNV,_ngaylam,_luongCB,_giolam ){
    this.tkNV=_tkNV;
    this.tenNV=_tenNV;
    this.email=_email;
    this.chucvuNV=_chucvuNV;
    this.ngaylam=_ngaylam;
    this.luongcb=_luongCB;
    this.giolam=_giolam;
    this.luong=0;
    this.loaiNV="";
    this.tongluong=function(){
        
    if(_chucvuNV=="Sếp")
    {
        this.luong=_luongCB*3;
    }if(_chucvuNV=="Trưởng phòng"){
        this.luong=_luongCB*2;
    }if(_chucvuNV=="Nhân viên"){
        this.luong=_luongCB;
    }
    // return luong;
    }
    this.xeploai=function(){
    if(192<=_giolam){
        this.loaiNV="nhân viên xuất sắc";
    }if( 192>_giolam &&  _giolam>=176){
        this.loaiNV="nhân viên giỏi";
    }if(176>_giolam && _giolam>=160){
        this.loaiNV="nhân viên khá";
    }
    // else{
    //     return"nhân viên trung bình";
    // }
    }

}