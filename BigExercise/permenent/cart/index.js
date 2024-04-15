       // Lấy tất cả các phần tử sản phẩm trong giỏ hàng
        const products = document.querySelectorAll('.sp');

        let total = 0;

        // Lặp qua từng sản phẩm và tính tổng giá tiền
        products.forEach(product => {
            // Lấy giá tiền của sản phẩm
            const priceElement = product.querySelector('.price');
            const priceText = priceElement.innerText;
            const priceNumber = product.querySelector('.number')
            const priceNumberText = priceNumber.innerText;
            
            // Lấy giá tiền số từ chuỗi và chuyển đổi sang số nguyên
            const price = parseInt(priceText.replace('d', ''));
            const number = parseInt(priceNumberText.replace('d', '')); // Loại bỏ ký tự 'd' và chuyển đổi sang số nguyên
                price = price*number
            // Thêm giá tiền của sản phẩm vào tổng tạm tính
            total += price;
        });

        // Hiển thị tổng tạm tính vào phần tử HTML
        const priceEL = document.querySelector('.bill .price');
        priceEL.innerText = total + 'd';
        const totalEl = document.querySelector('.bill .priceTotal');
        totalEl.innerText = total + 'd';

        // Thêm sự kiện xóa cho nút "Xóa" của mỗi sản phẩm
        const deleteButtons = document.querySelectorAll('.btnDeleteSp');
        deleteButtons.forEach(button => {
            button.addEventListener('click', function (event) {
                // Lấy phần tử sản phẩm cha của nút "Xóa" được nhấp
                const productElement = event.target.closest('.sp');
                // Lấy giá tiền của sản phẩm
                const priceElement = productElement.querySelector('.price');
                const priceText = priceElement.innerText;
                // Lấy giá tiền số từ chuỗi và chuyển đổi sang số nguyên
                const price = parseInt(priceText.replace('d', '')); // Loại bỏ ký tự 'd' và chuyển đổi sang số nguyên

                // Trừ giá tiền của sản phẩm khỏi tổng giá tiền
                total -= price;

                // Xóa phần tử sản phẩm khỏi giỏ hàng
                productElement.remove();

                // Cập nhật tổng giá tiền mới lên giao diện
                totalEl.innerText = total + 'd';
                priceEL.innerText = total + 'd';

            });
        });
