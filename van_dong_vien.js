function VanDongVien(ma_van_dong_vien, ho_ten, ngay_sinh, giai_thuong)
{
  this.maVDV = ma_van_dong_vien;
  this.hoTen = ho_ten;
  this.ngaySinh = ngay_sinh;
  this.giaiThuong = giai_thuong;

  this.kiemTraDieuKien = function (ngayBatDauSuKien, soTuoiToiThieu) {
    var tuoi = moment(ngayBatDauSuKien, "DD-MM-YYYY").diff(
      moment(this.ngaySinh, "DD-MM-YYYY"),
      'years'
    );

    return tuoi >= 18;
  }

  this.themGiaiThuong = function (giai_thuong_moi) {
    this.giaiThuong.unshift(giai_thuong_moi);
  }

  this.danhSachGiaiThuong = function () {
    this.giaiThuong.forEach(function (value) {
      console.log(value);
    });
  }

  this.hienThi = function () {
    document.getElementById("ma_vdv")
      .innerText = this.maVDV;

    document.getElementById("ten_vdv")
      .innerText = this.hoTen;

    document.getElementById("ngay_sinh")
      .innerText = this.ngaySinh;

    var html = '';
    this.giaiThuong.forEach(function (value) {
      html += '<li>' + value + '</li>';
    });

    document.getElementById("giai_thuong")
      .innerHTML = html;
  }
}

var vdv1 = new VanDongVien('PH01234', 'Nguyen Van A', '20-03-1989', []);
vdv1.themGiaiThuong("Ong vàng SP-2019");
vdv1.themGiaiThuong("Ong vàng FA-2020");
vdv1.danhSachGiaiThuong();
vdv1.hienThi();

var themGiaiThuong = function () {
  var text = document.getElementById("giai_thuong_moi").value;
  if (text.length == 0) {
    alert("Không được để trống!");
    return ;
  }

  vdv1.themGiaiThuong(text);
  document.getElementById("giai_thuong").innerHTML = "";
  vdv1.hienThi();
}
