function DanhSachNhanVien(){
     this.arr=[];
    this.themNV=function(nv){
       this.arr.push(nv); 
    }
    this.timvitriNV=function(tkNV){
      // tao bien index de gan vi tri 
      index=-1;
      //tao vongf lap duyet mang
      this.arr.forEach(function(item,i){
         //neu masv truyen vafo ==item.masv gan cho index==i
         if(item.tkNV===tkNV){
            index=i;
         }
      });
      return index;
    };
    this.xoaNV=function(tkNV){
       var index=this.timvitriNV(tkNV);
          if(index!==-1){
             this.arr.splice(index,1);
          }
      };
      this.suaNV=function(tkNV){
         var index=this.timvitriNV(tkNV);
         if(index!==-1){
            return this.arr[index];
         }
         return null;
      };
      this.capnhatNV=function(nv){ 
         var index=this.timvitriNV(nv.tkNV);
         if(index!==-1){
            this.arr[index]=nv;
         }
      };
      this.timkiemNV=function(keyword){
         // tạo mảng để chứ thông tin sinh viên cần tìm
         var arrtk=[];
         //duyệt từng phần tử của mảng
         this.arr.forEach(function(item){
            // nếu item.loaiNV trùng với key word=> thêm sinh viên được tìm ra vào mảng tìm kiếm
            if(item.loaiNV.toLowerCase().indexOf(keyword.toLowerCase())>-1){
               arrtk.push(item);
            }
         });
         return arrtk;
      }
}