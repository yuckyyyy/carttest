<div class="cart" id="">
    <header class="cart__header">
        <h3 class="cart__title">@if(Session::get('lang') == 'en')
                Cart
            @else
                Кошик
            @endif</h3>
        <button class="cart__close" data-hover="close"><span>@if(Session::get('lang') == 'en')
                    close
                @else
                    закрити
                @endif</span></button>
    </header>

    <div id="leftblockcontent">
        <span></span>
        <div class="cart__item">
            @if(Session::get('lang') == 'en')
                YOUR CART IS EMPTY
            @else
                ПУСТО
            @endif
        </div>
    </div>
</div>
<footer class="footer">
    <div class="container-full">
        <div class="footer__row">
            <div class="footer__left">
                <span class="footer__copyright">PHSPHNES / @2024</span>
                <a href="/contacts" class="footer__link"
                   data-hover="@if(Session::get('lang') == 'en') Contact @else Контакти @endif"><span>@if(Session::get('lang') == 'en')
                            Contact
                        @else
                            Контакти
                        @endif</span></a>
                <a href="/legal" class="footer__link"
                   data-hover="@if(Session::get('lang') == 'en') Legal @else Юр.Iнфо @endif"><span>@if(Session::get('lang') == 'en')
                            Legal
                        @else
                            Юр.Iнфо
                        @endif</span></a>

            </div>
            <div class="footer__right">
                <div style="display: flex">
                    <img style="width: 50px;margin-left: 20px;margin-right: 20px"
                         src="../img/icons/icons8-apple-pay-250.svg">
                    <img style="width: 30px; margin-left: 20px; margin-right: 20px; filter: grayscale(100%);" src="../img/icons/mastercard-svgrepo-com.svg">

                    <img style="width: 50px;margin-left: 20px;margin-right: 20px"
                         src="../img/icons/visa-svgrepo-com (1).svg">
                </div>
            </div>
        </div>
    </div>
</footer>
@if(request()->is('shop*'))
    <div class="filters">
        <header class="filters__header">
            <h3 class="filters__title">@if(Session::get('lang') == 'en')
                    filters
                @else
                    Фільтри
                @endif</h3>
            <button class="filters__close" data-hover="close"><span>@if(Session::get('lang') == 'en')
                        close
                    @else
                        закрити
                    @endif</span></button>
        </header>

        <div class="filters__content">
            <div class="filters__sort">@if(Session::get('lang') == 'en')
                    Sort by
                @else
                    Сортирувати За
                @endif:
            </div>
            <form id="action_filters" action="#">
                <div>
                    <input type="radio" id="test0" name="radio-group" value="all"
                           @if(request()->is('shop')) checked @endif />
                    <label for="test0">@if(Session::get('lang') == 'en')
                            All
                        @else
                            Всі
                        @endif</label>
                </div>
                <div>
                    <input type="radio" id="test1" name="radio-group" value="latest-arrivals"
                           @if(request()->is('shop/lastdrop')) checked @endif />
                    <label for="test1">@if(Session::get('lang') == 'en')
                            Latest arrivals
                        @else
                            Найновіщі
                        @endif</label>
                </div>
                <div>
                    <input type="radio" id="test2" name="radio-group" value="clothes"
                           @if(request()->is('shop/1')) checked @endif />
                    <label for="test2">@if(Session::get('lang') == 'en')
                            Clothes
                        @else
                            Речі
                        @endif</label>
                </div>
                <div>
                    <input type="radio" id="test3" name="radio-group" value="accesories"
                           @if(request()->is('shop/2')) checked @endif />
                    <label for="test3">@if(Session::get('lang') == 'en')
                            Accesories
                        @else
                            Аксесуари
                        @endif</label>
                </div>
                <div>
                    <input type="radio" id="test4" name="radio-group" value="paintings"
                           @if(request()->is('shop/3')) checked @endif/>
                    <label for="test4">@if(Session::get('lang') == 'en')
                            Paintings
                        @else
                            Картини
                        @endif</label>
                </div>
            </form>
        </div>

        <footer class="filters__footer">
            <div class="filters__footer-content">
                <button id='show_result'>show result</button>
            </div>
        </footer>
        <script>
            document.getElementById('show_result').addEventListener('click', function () {

                const selectedOption = document.querySelector('input[name="radio-group"]:checked').value;

                let url;
                switch (selectedOption) {
                    case 'all':
                        url = '/shop';
                        break;
                    case 'latest-arrivals':
                        url = '/shop/lastdrop';
                        break;
                    case 'clothes':
                        url = '/shop/1';
                        break;
                    case 'accesories':
                        url = '/shop/2';
                        break;
                    case 'paintings':
                        url = '/shop/3';
                        break;
                    default:
                        url = '/';
                }

                window.location.href = url;
            });
        </script>
    </div>
@endif

<div class="fade"></div>
<script src="../js/index.bundle.js"></script>
<script src="../js/homme.bundle.js"></script>
<script src="../js/jquery.js"></script>


<script>
    $(document).ready(function () {
        updateCartCount();
    });

    function updateCartCount() {
        $.ajax({
            url: '{{ route('cart.count') }}',
            method: 'GET',
            success: function (response) {
                $('#cartcount').text(response.count);
            },
            error: function () {
                console.log('Error occurred while updating cart count.');
            }
        });
    }

    function viewCart() {
        // updateCartCount();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '{{ route('cart.view') }}');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        xhr.onload = function () {
            if (xhr.status === 200) {
                var responseData = xhr.responseText;
                var leftblock = document.getElementById('leftblockcontent');
                leftblock.innerHTML = responseData;
            } else {
                alert('Error: ' + xhr.status);
            }
        };

        xhr.onerror = function () {
            alert('Error.');
        };

        xhr.send();
    }

    function removeFromCart(element) {
        var cartItemId = element.dataset.id;
        var data = {
            product_id: cartItemId
        };

        $.ajax({
            url: '/cart/remove',
            type: 'POST',
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                'X-Requested-With': 'XMLHttpRequest'
            },
            data: JSON.stringify(data),
            success: function (responseData) {
                if (responseData.success) {
                    // closeCart();
                    updateCartCount();
                    viewCart();
                } else {
                    alert('Error.');
                }
            },
            error: function (xhr, status, error) {
                alert('Error: ' + error);
            }
        });
    }

    function removeFromCartAll() {

        $.ajax({
            url: '/cart/remove_all',
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': '{{ csrf_token() }}',
                'X-Requested-With': 'XMLHttpRequest'
            },

            success: function (responseData) {
                if (responseData.success) {
                    // closeCart();
                    updateCartCount();
                    viewCart();
                } else {
                    alert('Error.');
                }
            },
            error: function (xhr, status, error) {
                alert('Error: ' + error);
            }
        });
    }

    function closeCart() {
        document.getElementById("leftblock").style.transform = "translateX(-350px)";
    }

    document.querySelectorAll('.form-select-size button').forEach(button => {
        button.addEventListener('click', function () {
            if (!button.classList.contains('sold-out')) {
                document.querySelectorAll('.form-select-size button').forEach(btn => {

                    btn.classList.remove('this');

                });
                this.classList.add('this');
            }
        });
    });

    function addToCart(productId) {
        fetch("{{ route('cart.add') }}", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute("content"),
                "X-Requested-With": "XMLHttpRequest"
            },
            body: JSON.stringify({
                product_id: productId
            })
        })
            .then(response => response.json())
            .then(responseData => {
                if (responseData.success) {
                    updateCartCount();
                } else {
                    alert("Error: " + responseData.message);
                }
            })
            .catch(error => {
                alert("Error: " + error);
            });
    }

    function plusToCart(productId, size) {
        // closeCart();

        add(size);

        function add() {
            console.log(size);
            const data = {
                "_token": "{{ csrf_token() }}",
                product_id: productId,
                size: size
            };

            fetch('{{ route('cart.add') }}', {
                method: 'POST',
                headers: {
                    "_token": "{{ csrf_token() }}",
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify(data)
            })
                .then(function (response) {
                    return response.json();
                })
                .then(function (responseData) {
                    if (responseData.success) {
                        viewCart()
                        updateCartCount()
                        // const nameProd = document.getElementById('nameProd').innerText;
                        // const priceProd = document.getElementById('priceProd').innerText;
                        // const content_ids = document.getElementById('prodId').innerText;
                    } else {
                        alert('Error');
                    }
                })
                .catch(function (error) {
                    alert('Error: ' + error);
                });
        }
    }


    function selectSize(button) {

        var sizeButtons = document.querySelectorAll('button.sizebt');
        sizeButtons.forEach(function (btn) {
            btn.classList.remove('selected');
            btn.style.opacity = '0.35';
        });


        button.classList.add('selected');
        button.style.opacity = '1';
    }
</script>
