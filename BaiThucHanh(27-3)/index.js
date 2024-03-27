$(document).ready(function() {
    // Bắt sự kiện click nút Save
    $('button[type="submit"]').click(function(event) {
        event.preventDefault();
        var isValid = true;

        // Kiểm tra trường Tên không được để trống
        var name = $('#name').val();
        if (name.trim() === '') {
            isValid = false;
            $('#helpIdNAME').text('Tên không được để trống');
        } else {
            $('#helpIdNAME').text('');
        }

        // Kiểm tra trường Số điện thoại
        var sdt = $('#sdt').val();
        if (sdt.trim() === '') {
            isValid = false;
            $('#helpIdSDT').text('Số điện thoại không được để trống');
        } else {
            $('#helpIdSDT').text('');
        }

        // Kiểm tra trường Ngày sinh
        var birthday = $('#birthday').val();
        if (birthday.trim() === '') {
            isValid = false;
            $('#helpIdBD').text('Ngày sinh không được để trống');
        } else {
            $('#helpIdBD').text('');
        }

        // Kiểm tra trường Địa chỉ
        var address = $('#address').val();
        if (address.trim() === '') {
            isValid = false;
            $('#helpIdADDRESS').text('Địa chỉ không được để trống');
        } else {
            $('#helpIdADDRESS').text('');
        }

        // Kiểm tra trường Số tiền
        var money = $('#money').val();
        if (money.trim() === '') {
            isValid = false;
            $('#helpIdMONEY').text('Số tiền không được để trống');
        } else {
            $('#helpIdMONEY').text('');
        }

        // Kiểm tra tính hợp lệ và hiển thị thông báo
        if (isValid) {
            alert('Dữ liệu hợp lệ. Bạn có thể tiến hành xử lý dữ liệu ở đây.');
        } else {
            alert('Dữ liệu không hợp lệ. Vui lòng kiểm tra lại các trường thông tin.');
        }
    });
});
