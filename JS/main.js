//Bài 1: Tính tiền lương nhân viên
var btnTinhLuong = document.getElementById('btnTinhLuong');
btnTinhLuong.onclick = function(){
//input
var luongNgay = document.getElementById('luongNgay').value;
var soNgayLam = document.getElementById('soNgayLam').value;
//xử lý
var tongLuong = luongNgay * soNgayLam;
//output
var KQ_b1 = document.getElementById('ketQua-b1');
KQ_b1.innerHTML = tongLuong.toLocaleString() + ' VND';
}

//Bài 2: tính trung bình cộng
var btnTinhTB = document.getElementById('btnTinhTB');
btnTinhTB.onclick = function(){
//input
var num1 = document.getElementById('num-1').value;
var num2 = document.getElementById('num-2').value;
var num3 = document.getElementById('num-3').value;
var num4 = document.getElementById('num-4').value;
var num5 = document.getElementById('num-5').value;
//output
var tinhTB = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4) + parseFloat(num5)) / 5;
//In ra màn hình
var KQ_b2 = document.getElementById('ketQua-b2');
KQ_b2.innerHTML = tinhTB;
}

//Bài 3: Quy đổi tiền USD

var btnQuyDoiUSD = document.getElementById('btnQuyDoiUSD');
btnQuyDoiUSD.onclick = function(){
    var dinhGia = 23500;
    var doiUSD = document.getElementById('doiUSD').value;
    var quyDoi = dinhGia * parseFloat(doiUSD);
    var KQ_b3 = document.getElementById('ketQua-b3');
    KQ_b3.innerHTML = quyDoi.toLocaleString() + ' VND';
}

//Bài 4: Tính diện tích và chu vi hình chữ nhật
var btnTinhDT = document.getElementById('btnTinhDT');
btnTinhDT.onclick = function(){
    //input
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    // xử lý
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;
    //output
    var KQ_b4_1 = document.getElementById('ketQua-b4-1');
    KQ_b4_1.innerHTML = dienTich + ' m2';
    var KQ_b4_2 = document.getElementById('ketQua-b4-2');
    KQ_b4_2.innerHTML = chuVi + ' m';
}

//Bài 5: Tính tổng 2 ký số
var btnTinhTongKySo = document.getElementById('btnTinhTongKySo');
btnTinhTongKySo.onclick = function(){
    //input
    var kySo = document.getElementById('kySo').value;
    // xử lý
    var hangChuc = Math.floor(kySo%100/10);
    var hangDonVi = kySo%10;
    var tong = hangChuc + hangDonVi;
    //output
    var KQ_b5 = document.getElementById('ketQua-b5');
    KQ_b5.innerHTML = tong;
}

