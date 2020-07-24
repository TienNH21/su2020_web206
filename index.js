var sv1 = {
    maSV: 'PH12345',
    ten: 'Nguyen Van A',
    lop: 'PT14111',
    ngayNhapHoc: moment('2019-06-13', 'YYYY-MM-DD'),
    diemTrungBinh: 6,
    tinhHocLuc: function () {
        if (this.diemTrungBinh < 5) {
            return "Học lực yếu";
        } else if (this.diemTrungBinh < 7) {
            return "Học lực trung bình";
        } else if (this.diemTrungBinh < 8) {
            return "Học lực khá";
        } else {
            return "Học lực giỏi";
        }
    },
    thoiGianRaTruong: function () {
        var thoiGianDaHoc = moment().diff(this.ngayNhapHoc, 'month');
        return 28 - thoiGianDaHoc;
    }
};

var tgianRaTruong = sv1.thoiGianRaTruong();
console.log(tgianRaTruong);