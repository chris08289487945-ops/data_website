// Mock Data
const DEFAULT_MOCK_DATA = {
  categories: [
    { id: 'c1', name: '手機' },
    { id: 'c6', name: '3C周邊' },
    { id: 'c2', name: '電腦零件' },
    { id: 'c3', name: '筆記型電腦' },
    { id: 'c4', name: '日用品' },
    { id: 'c5', name: '家電' }
  ],
  generalItems: [
    { id: 'g1', categoryId: 'c1', img: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2?w=500&q=80', price: 29900, name: '高階智慧型手機', stock: 15, desc: '最新的旗艦級手機，配備強大的處理器與相機。不僅擁有極致的效能，更具備令人驚豔的顯示螢幕。', specs: '螢幕: 6.7 吋 / 儲存容量: 256GB / 顏色: 曜石黑' },
    { id: 'g2', categoryId: 'c3', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', price: 45000, name: '輕薄筆記型電腦', stock: 8, desc: '適合商務與創作者的輕薄高效能筆電。具備長效電池續航力，讓您隨時隨地保持生產力。', specs: '螢幕: 14 吋 / 處理器: Core i7 / 記憶體: 16GB RAM' },
    { id: 'g3', categoryId: 'c4', img: 'https://images.unsplash.com/photo-1542222024-c39e2281f121?w=500&q=80', price: 120, name: '有機洗髮精', stock: 50, desc: '天然植物萃取，溫和不刺激。適合各種髮質，洗後清爽無負擔。', specs: '容量: 500ml / 產地: 台灣' },
    { id: 'g4', categoryId: 'c4', img: 'https://pic.616pic.com/ys_bnew_img/00/12/93/IoeHbh1sY8.jpg', price: 2000, name: '極品痔瘡藥膏', stock: 100, desc: '100 % 純天然，用過都說讚。', specs: '容量: 30g / 使用方式: 外用' },
    { id: 'g5', categoryId: 'c2', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500&q=80', price: 10990, name: 'ASUS ROG RTX3060', stock: 10, desc: '華碩 ROG 玩家共和國高階顯示卡，散熱極佳，支援光線追蹤。', specs: '晶片: GeForce RTX 3060 / 記憶體: 12GB GDDR6' },
    { id: 'g6', categoryId: 'c2', img: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80', price: 25990, name: 'GIGABYTE RTX5060', stock: 5, desc: '技嘉最新世代顯示卡，效能突破天際，暢玩所有 3A 大作。', specs: '晶片: GeForce RTX 5060 / 記憶體: 16GB GDDR7' },
    { id: 'g7', categoryId: 'c6', img: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80', price: 1290, name: '無線藍牙滑鼠', stock: 30, desc: '輕巧好攜帶的無線滑鼠，支援多裝置切換，適合辦公與外出使用。', specs: '連線: Bluetooth / 續航: 90 天 / 顏色: 石墨灰' },
    { id: 'g8', categoryId: 'c6', img: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&q=80', price: 1890, name: 'USB-C 多功能集線器', stock: 18, desc: '整合 HDMI、USB 與讀卡機接口，筆電外接螢幕與周邊更方便。', specs: '接口: HDMI, USB-A, SD / 材質: 鋁合金' },
    { id: 'g9', categoryId: 'c6', img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80', price: 3290, name: '降噪藍牙耳機', stock: 22, desc: '主動降噪搭配清晰通話麥克風，通勤、會議與娛樂都能穩定使用。', specs: '降噪: ANC / 續航: 32 小時 / 充電: USB-C' }
  ],
  auctionItems: [
    { id: 'a1', categoryId: 'c6', img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80', name: '限量版智慧手錶', startPrice: 5000, currentPrice: 8500, timeLeft: 7200 },
    { id: 'a2', categoryId: 'c2', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&q=80', name: '絕版機械鍵盤', startPrice: 2000, currentPrice: 4200, timeLeft: 3600 }
  ],
  member: {
    id: '',
    account: '',
    password: '',
    phone: '',
    address: '',
    joinDate: ''
  },
  cart: [],
  orders: [
    {
      orderId: 'ORD-882910',
      time: '2026-05-23 14:30:22',
      data: '高階智慧型手機 x2, 有機洗髮精 x3',
      amount: 60160,
      status: '已出貨',
      paymentMethod: '信用卡',
      trackingNumber: 'TW123456789',
      deliveryStatus: '已送達',
      shippingTime: '2026-05-23 16:00:00'
    },
    {
      orderId: 'ORD-109283',
      time: '2026-05-24 10:15:45',
      data: 'ASUS ROG RTX3060 x1, 輕薄筆記型電腦 x1',
      amount: 55990,
      status: '處理中',
      paymentMethod: '貨到付款',
      trackingNumber: '待發貨',
      deliveryStatus: '準備出貨',
      shippingTime: '-'
    }
  ]
};

const MOCK_DATA = JSON.parse(localStorage.getItem('MOCK_DATA')) || DEFAULT_MOCK_DATA;
MOCK_DATA.categories = DEFAULT_MOCK_DATA.categories;
DEFAULT_MOCK_DATA.generalItems.forEach(defaultItem => {
  if (!MOCK_DATA.generalItems.some(item => item.id === defaultItem.id)) {
    MOCK_DATA.generalItems.push(defaultItem);
  }
});
DEFAULT_MOCK_DATA.auctionItems.forEach(defaultItem => {
  if (!MOCK_DATA.auctionItems.some(item => item.id === defaultItem.id)) {
    MOCK_DATA.auctionItems.push(defaultItem);
  }
});
MOCK_DATA.generalItems.forEach(item => {
  const defaultItem = DEFAULT_MOCK_DATA.generalItems.find(defaultItem => defaultItem.id === item.id);
  if (defaultItem) item.categoryId = defaultItem.categoryId;
  if (item.name.includes('洗衣機')) item.categoryId = 'c5';
});
MOCK_DATA.auctionItems.forEach(item => {
  const defaultItem = DEFAULT_MOCK_DATA.auctionItems.find(defaultItem => defaultItem.id === item.id);
  if (defaultItem) item.categoryId = defaultItem.categoryId;
});
let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

function saveData() {
  localStorage.setItem('MOCK_DATA', JSON.stringify(MOCK_DATA));
  localStorage.setItem('isLoggedIn', isLoggedIn);
}

// Utils
function formatCurrency(amount) {
  return new Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'TWD', minimumFractionDigits: 0 }).format(amount);
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

// Render Functions
function renderNavbar() {
  const existingNav = document.querySelector('.navbar');
  if (existingNav) existingNav.remove();
  
  // 取得當前檔案路徑來判斷導覽項目是否 active
  const path = window.location.pathname;
  const isSeller = path.includes('seller.html') ? 'active' : '';
  const isMember = path.includes('member.html') ? 'active' : '';
  const isOrders = path.includes('orders.html') ? 'active' : '';
  const isCart = path.includes('cart.html') ? 'active' : '';

  const currentCategory = new URLSearchParams(window.location.search).get('category');
  const navHTML = `
    <nav class="navbar">
      <div class="nav-left">
        <a href="index.html" class="logo">標標</a>
        <span class="nav-divider"></span>
        <div id="category-links">
          ${MOCK_DATA.categories.map(c => `<a href="index.html?category=${c.id}" class="nav-category-link${currentCategory === c.id ? ' active-cat' : ''}">${c.name}</a>`).join('')}
        </div>
      </div>
      <div class="nav-right">
        <a href="seller.html" class="nav-link ${isSeller}">我是賣家</a>
        <a href="member.html" class="nav-link ${isMember}">會員專區</a>
        <a href="orders.html" class="nav-link ${isOrders}">訂單表</a>
        <a href="cart.html" class="nav-link ${isCart}">購物車 <span class="badge status-shipped">${MOCK_DATA.cart.length}</span></a>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHTML);
}

function renderGeneralItems() {
  const container = document.getElementById('general-items-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const categoryFilter = urlParams.get('category');

  let items = MOCK_DATA.generalItems;
  if (categoryFilter) {
    items = items.filter(item => item.categoryId === categoryFilter);
  }

  container.innerHTML = items.map(item => `
    <div class="glass-panel product-card" onclick="location.href='product.html?id=${item.id}'" style="cursor: pointer;">
      <img src="${item.img}" alt="${item.name}" class="product-img">
      <h3 class="product-title">${item.name}</h3>
      <div class="product-price">${formatCurrency(item.price)}</div>
      <p class="product-desc">${item.desc.substring(0, 30)}...</p>
      <div class="product-meta">
        <span>商品 ID: ${item.id}</span>
        <span>庫存: ${item.stock}</span>
      </div>
      <button class="btn" onclick="event.stopPropagation(); addToCart('${item.id}')">加入購物車</button>
    </div>
  `).join('');
}

function renderAuctionItems() {
  const container = document.getElementById('auction-items-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const categoryFilter = urlParams.get('category');

  let items = MOCK_DATA.auctionItems;
  if (categoryFilter) {
    items = items.filter(item => item.categoryId === categoryFilter);
  }

  if (items.length === 0) {
    container.innerHTML = '<p class="empty-message">暫無競標商品</p>';
    return;
  }

  container.innerHTML = items.map(item => `
    <div class="glass-panel product-card" onclick="location.href='auction.html?id=${item.id}'" style="cursor: pointer;">
      <img src="${item.img}" alt="${item.name}" class="product-img">
      <div class="auction-timer" id="timer-${item.id}">剩餘時間: ${formatTime(item.timeLeft)}</div>
      <h3 class="product-title">${item.name}</h3>
      <div class="product-meta">
        <span>競標 ID: ${item.id}</span>
      </div>
      <div class="product-meta">
        <span>起標價: ${formatCurrency(item.startPrice)}</span>
      </div>
      <div class="product-price" style="color: #e63946;">目前最高價: ${formatCurrency(item.currentPrice)}</div>
      <button class="btn btn-secondary" onclick="event.stopPropagation(); location.href='auction.html?id=${item.id}'">出價</button>
    </div>
  `).join('');

  if (!window.auctionTimersStartedHome) {
    window.auctionTimersStartedHome = true;
    setInterval(() => {
      MOCK_DATA.auctionItems.forEach(item => {
        if (item.timeLeft > 0) {
          item.timeLeft--;
          const timerEl = document.getElementById(`timer-${item.id}`);
          if (timerEl) {
            timerEl.innerText = `剩餘時間: ${formatTime(item.timeLeft)}`;
          }
        }
      });
    }, 1000);
  }
}

function renderMemberInfo() {
  const container = document.getElementById('member-info-container');
  if (!container) return;

  if (!isLoggedIn) {
    container.innerHTML = `
      <div style="max-width: 350px; margin: 0 auto; text-align: center; padding: 20px 0;">
        <h3 style="margin-bottom: 25px; font-size: 1.6rem;">會員登入</h3>
        <div class="form-group" style="text-align: left;">
          <input type="text" id="login-account" placeholder="請輸入帳號" style="padding: 15px;">
        </div>
        <div class="form-group" style="text-align: left;">
          <input type="password" id="login-password" placeholder="請輸入密碼" style="padding: 15px;">
        </div>
        <div style="margin-bottom: 25px; text-align: center;">
          <a href="#" style="font-size: 0.85rem; color: var(--text-secondary); text-decoration: underline;">尚未成為會員? 註冊成為會員吧!</a>
        </div>
        <button class="btn" style="width: 100%; padding: 15px; font-size: 1.1rem;" onclick="login()">登入</button>
      </div>
    `;
    const btnContainer = document.getElementById('edit-btn-container');
    if (btnContainer) btnContainer.style.display = 'none';
  } else {
    const member = MOCK_DATA.member;
    container.innerHTML = `
      <div class="form-group"><label>會員 ID</label><input type="text" id="member-id" value="${member.id}" disabled></div>
      <div class="form-group"><label>帳號</label><input type="text" id="member-account" value="${member.account}" disabled></div>
      <div class="form-group"><label>密碼</label><input type="password" id="member-password" value="${member.password}" disabled></div>
      <div class="form-group"><label>電話</label><input type="text" id="member-phone" value="${member.phone}" disabled></div>
      <div class="form-group"><label>地址</label><input type="text" id="member-address" value="${member.address}" disabled></div>
      <div class="form-group"><label>入會日期</label><input type="text" id="member-joinDate" value="${member.joinDate}" disabled></div>
    `;
    const btnContainer = document.getElementById('edit-btn-container');
    if (btnContainer) btnContainer.style.display = 'block';
  }
}

function login() {
  const acc = document.getElementById('login-account').value;
  const pass = document.getElementById('login-password').value;
  if (acc && pass) {
    isLoggedIn = true;
    MOCK_DATA.member.id = 'M' + new Date().getTime().toString().slice(-6);
    MOCK_DATA.member.account = acc;
    MOCK_DATA.member.password = pass;
    MOCK_DATA.member.joinDate = new Date().toISOString().split('T')[0];
    saveData();
    alert("登入成功！可以開始購物囉。");
    renderMemberInfo();
  } else {
    alert("請輸入帳號與密碼！");
  }
}

function toggleEditMember() {
  const inputs = document.querySelectorAll('#member-info-container input:not(#member-id):not(#member-joinDate)');
  const btn = document.getElementById('edit-member-btn');
  const isEditing = btn.textContent === '編輯會員資料';

  if (isEditing) {
    inputs.forEach(input => input.disabled = false);
    btn.textContent = '儲存會員資料';
    btn.style.background = '#10b981';
  } else {
    inputs.forEach(input => input.disabled = true);
    btn.textContent = '編輯會員資料';
    btn.style.background = '';

    // Update mock data
    MOCK_DATA.member.account = document.getElementById('member-account').value;
    MOCK_DATA.member.password = document.getElementById('member-password').value;
    MOCK_DATA.member.phone = document.getElementById('member-phone').value;
    MOCK_DATA.member.address = document.getElementById('member-address').value;
    saveData();
    alert('會員資料已成功更新！');
  }
}

function addToCart(id) {
  if (!isLoggedIn) {
    alert("請先登入會員再將商品加入購物車！");
    window.location.href = "member.html";
    return;
  }
  const item = MOCK_DATA.generalItems.find(i => i.id === id);
  if (!item) return;
  const existing = MOCK_DATA.cart.find(i => i.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    MOCK_DATA.cart.push({ id: item.id, name: item.name, price: item.price, quantity: 1, img: item.img, checked: true });
  }
  saveData();
  alert(`已加入購物車：${item.name}`);
  renderNavbar();
}

function updateCartQuantity(id, delta) {
  const item = MOCK_DATA.cart.find(i => i.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity < 1) item.quantity = 1;
    saveData();
    renderCart();
    renderNavbar();
  }
}

function removeFromCart(id) {
  MOCK_DATA.cart = MOCK_DATA.cart.filter(i => i.id !== id);
  saveData();
  renderCart();
  renderNavbar();
}

function toggleCartItem(id, checked) {
  const item = MOCK_DATA.cart.find(i => i.id === id);
  if (item) {
    item.checked = checked;
    saveData();
    renderCart();
  }
}

function toggleCartAll(checked) {
  MOCK_DATA.cart.forEach(i => i.checked = checked);
  saveData();
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cart-container');
  if (!container) return;

  if (MOCK_DATA.cart.length === 0) {
    container.innerHTML = '<p>購物車是空的。</p>';
    return;
  }

  let total = 0;
  const allChecked = MOCK_DATA.cart.every(i => i.checked);

  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th style="width: 50px;"><input type="checkbox" id="cart-check-all" style="width: 18px; height: 18px;" onclick="toggleCartAll(this.checked)" ${allChecked ? 'checked' : ''}></th>
          <th>商品</th>
          <th>單價</th>
          <th>數量</th>
          <th>小計</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        ${MOCK_DATA.cart.map(item => {
    const subtotal = item.price * item.quantity;
    if (item.checked) total += subtotal;
    return `
            <tr>
              <td><input type="checkbox" style="width: 18px; height: 18px;" onclick="toggleCartItem('${item.id}', this.checked)" ${item.checked ? 'checked' : ''}></td>
              <td style="display:flex; align-items:center; gap:15px;">
                <img src="${item.img}" style="width:60px; height:60px; border-radius:8px; object-fit:cover;">
                <span style="font-weight: 500;">${item.name}</span>
              </td>
              <td>${formatCurrency(item.price)}</td>
              <td>
                <div style="display:flex; align-items:center; gap:10px;">
                  <button class="btn btn-secondary" style="padding: 4px 10px;" onclick="updateCartQuantity('${item.id}', -1)">-</button>
                  <span>${item.quantity}</span>
                  <button class="btn btn-secondary" style="padding: 4px 10px;" onclick="updateCartQuantity('${item.id}', 1)">+</button>
                </div>
              </td>
              <td style="font-weight: 600;">${formatCurrency(subtotal)}</td>
              <td>
                <button class="btn" style="background:#e53935; border:none; padding: 6px 12px; color:white; border-radius:6px; cursor:pointer;" onclick="removeFromCart('${item.id}')">移除</button>
              </td>
            </tr>
          `;
  }).join('')}
      </tbody>
    </table>
    <div style="text-align:right; margin-top:30px; font-size:1.5rem; font-weight:bold;">
      選取商品總計: <span>${formatCurrency(total)}</span>
    </div>
    <div style="text-align:right; margin-top:20px;">
      <button class="btn" onclick="goToCheckout()">前往結帳</button>
    </div>
  `;
}

function goToCheckout() {
  const checkedItems = MOCK_DATA.cart.filter(i => i.checked);
  if (checkedItems.length === 0) {
    alert("請先勾選要結帳的商品！");
    return;
  }
  window.location.href = 'checkout.html';
}

function renderOrders() {
  const container = document.getElementById('orders-container');
  if (!container) return;

  if (MOCK_DATA.orders.length === 0) {
    container.innerHTML = '<p>目前沒有任何訂單。</p>';
    return;
  }

  container.innerHTML = `
    <table class="data-table">
      <thead>
        <tr>
          <th>訂單 ID</th>
          <th>訂單時間</th>
          <th>訂單資料</th>
          <th>訂單金額</th>
          <th>付款方式</th>
          <th>訂單狀態</th>
          <th>物流狀態</th>
        </tr>
      </thead>
      <tbody>
        ${MOCK_DATA.orders.map(order => `
          <tr>
            <td style="font-weight: 500;">${order.orderId}</td>
            <td style="color: var(--text-secondary);">${order.time}</td>
            <td>${order.data}</td>
            <td style="font-weight:bold;">${formatCurrency(order.amount)}</td>
            <td>${order.paymentMethod}</td>
            <td><span class="badge ${order.status === '已出貨' ? 'status-shipped' : 'status-processing'}">${order.status}</span></td>
            <td>
              <div style="font-size:0.9rem; color: var(--text-secondary); line-height: 1.5;">
                單號: ${order.trackingNumber}<br>
                狀態: <span style="color: #3b82f6; font-weight: 500;">${order.deliveryStatus}</span><br>
                出貨: ${order.shippingTime}
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderProductDetail() {
  const container = document.getElementById('product-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');
  const item = MOCK_DATA.generalItems.find(i => i.id === productId);

  if (!item) {
    container.innerHTML = '<p>找不到商品</p>';
    return;
  }

  container.innerHTML = `
    <div class="product-detail-layout">
      <img src="${item.img}" alt="${item.name}" class="product-detail-img">
      <div class="product-detail-info">
        <h2 style="font-size: 2.5rem; margin-bottom: 10px;">${item.name}</h2>
        <div style="color: var(--text-secondary); margin-bottom: 15px;">商品 ID: ${item.id}</div>
        <div style="font-size: 2rem; font-weight: bold; margin-bottom: 15px;">${formatCurrency(item.price)}</div>
        <div style="margin-bottom: 15px; color: var(--text-secondary); font-size: 1rem;">
          <strong>規格描述：</strong> ${item.specs || '無規格資料'}
        </div>
        <div style="margin-bottom: 20px; color: var(--text-secondary);">庫存數量: ${item.stock}</div>
        <button class="btn" style="width: 100%; padding: 16px; font-size: 1.1rem;" onclick="addToCart('${item.id}')">加入購物車</button>
      </div>
    </div>
    
    <div class="glass-panel" style="margin-top: 40px;">
      <h3 style="font-size: 1.5rem; margin-bottom: 20px;">商品介紹</h3>
      <p style="line-height: 1.8; color: var(--text-secondary);">${item.desc}</p>
    </div>

    <div style="margin-top: 60px;">
      <h3 style="font-size: 1.8rem; margin-bottom: 30px;">更多商品</h3>
      <div class="product-grid">
        ${MOCK_DATA.generalItems.filter(i => i.id !== item.id).slice(0, 4).map(other => `
          <div class="glass-panel product-card" onclick="location.href='product.html?id=${other.id}'" style="cursor: pointer;">
            <img src="${other.img}" alt="${other.name}" class="product-img">
            <h4 class="product-title">${other.name}</h4>
            <div class="product-price">${formatCurrency(other.price)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAuctionDetail() {
  const container = document.getElementById('auction-detail-container');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const auctionId = urlParams.get('id');
  const item = MOCK_DATA.auctionItems.find(i => i.id === auctionId);

  if (!item) {
    container.innerHTML = '<p>找不到競標商品</p>';
    return;
  }

  container.innerHTML = `
    <div class="product-detail-layout">
      <img src="${item.img}" alt="${item.name}" class="product-detail-img">
      <div class="product-detail-info">
        <h2 style="font-size: 2.5rem; margin-bottom: 10px;">${item.name}</h2>
        <div style="color: var(--text-secondary); margin-bottom: 20px;">競標 ID: ${item.id}</div>
        <div class="auction-timer" id="detail-timer-${item.id}" style="font-size: 1.2rem; padding: 12px 20px; text-align: center;">剩餘時間: ${formatTime(item.timeLeft)}</div>
        <div style="margin-top: 30px; margin-bottom: 10px; color: var(--text-secondary); font-size: 1.1rem;">起標價: ${formatCurrency(item.startPrice)}</div>
        <div style="font-size: 2.5rem; font-weight: bold; margin-bottom: 40px; color: #e63946;">目前最高價: <span id="current-price-display">${formatCurrency(item.currentPrice)}</span></div>
        <div class="form-group" style="display: flex; gap: 15px;">
          <input type="number" id="bid-amount" placeholder="輸入出價金額" style="flex: 1; font-size: 1.1rem;" min="${item.currentPrice + 100}">
          <button class="btn" style="padding: 16px 40px; font-size: 1.1rem;" onclick="placeBid('${item.id}')">出價</button>
        </div>
      </div>
    </div>

    <div class="glass-panel" style="margin-top: 40px;">
      <h3 style="font-size: 1.5rem; margin-bottom: 20px;">商品介紹</h3>
      <p style="line-height: 1.8; color: var(--text-secondary);">這是一件極具收藏價值的競標商品，擁有獨特的歷史與設計。參與競標，把這份獨特帶回家吧！千萬不要錯過這次難得的機會。</p>
    </div>

    <div style="margin-top: 60px;">
      <h3 style="font-size: 1.8rem; margin-bottom: 30px;">更多競標商品</h3>
      <div class="product-grid">
        ${MOCK_DATA.auctionItems.filter(i => i.id !== item.id).slice(0, 4).map(other => `
          <div class="glass-panel product-card" onclick="location.href='auction.html?id=${other.id}'" style="cursor: pointer;">
            <img src="${other.img}" alt="${other.name}" class="product-img">
            <h4 class="product-title">${other.name}</h4>
            <div class="product-price" style="color: #e63946;">最高價: ${formatCurrency(other.currentPrice)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  if (!window.auctionTimersStartedDetail) {
    window.auctionTimersStartedDetail = true;
    setInterval(() => {
      if (item.timeLeft > 0) {
        item.timeLeft--;
        const timerEl = document.getElementById(`detail-timer-${item.id}`);
        if (timerEl) {
          timerEl.innerText = `剩餘時間: ${formatTime(item.timeLeft)}`;
        }
      }
    }, 1000);
  }
}

function placeBid(id) {
  if (!isLoggedIn) {
    alert("請先登入會員才能參與競標！");
    window.location.href = "member.html";
    return;
  }
  const amountInput = document.getElementById('bid-amount');
  const amount = parseInt(amountInput.value);
  const item = MOCK_DATA.auctionItems.find(i => i.id === id);
  if (amount > item.currentPrice) {
    item.currentPrice = amount;
    saveData();
    alert('出價成功！');
    document.getElementById('current-price-display').innerText = formatCurrency(item.currentPrice);
    amountInput.value = '';
    amountInput.min = item.currentPrice + 100;
  } else {
    alert('出價必須高於目前最高價！');
  }
}

function renderCheckout() {
  const container = document.getElementById('checkout-container');
  if (!container) return;

  const checkedItems = MOCK_DATA.cart.filter(i => i.checked);

  if (checkedItems.length === 0) {
    container.innerHTML = '<p>沒有選擇結帳商品，請回購物車選擇。</p>';
    return;
  }

  let total = 0;
  const itemsHtml = checkedItems.map(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;
    return `
      <div style="display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid var(--surface-border); padding-bottom: 15px;">
        <div style="display: flex; align-items: center; gap: 15px;">
          <img src="${item.img}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
          <span style="font-weight: 500;">${item.name} x ${item.quantity}</span>
        </div>
        <span style="font-weight: 600;">${formatCurrency(subtotal)}</span>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px;">
      <div class="glass-panel">
        <h3 style="margin-bottom: 30px; font-size: 1.5rem;">填寫訂單資訊</h3>
        <div class="form-group">
          <label>物流方式選擇</label>
          <select id="shipping-method">
            <option value="信用卡">宅配到府</option>
            <option value="超商取貨">超商取貨</option>
          </select>
        </div>
        <div class="form-group">
          <label>付款方式選擇</label>
          <select id="payment-method">
            <option value="信用卡">信用卡</option>
            <option value="LINE Pay">LINE Pay</option>
            <option value="貨到付款">貨到付款</option>
          </select>
        </div>
        <div class="form-group">
          <label>收件人姓名</label>
          <input type="text" id="recipient-name" placeholder="請輸入姓名" value="${MOCK_DATA.member.account || ''}">
        </div>
        <div class="form-group">
          <label>收件地址</label>
          <input type="text" id="recipient-address" placeholder="請輸入地址" value="${MOCK_DATA.member.address || ''}">
        </div>
      </div>
      
      <div class="glass-panel" style="height: fit-content; position: sticky; top: 100px;">
        <h3 style="margin-bottom: 30px; font-size: 1.5rem;">商品確認</h3>
        <div style="margin-bottom: 20px;">
          ${itemsHtml}
        </div>
        <div style="margin-top: 30px; font-size: 1.3rem; display: flex; justify-content: space-between; font-weight: bold;">
          <span>訂單總金額</span>
          <span>${formatCurrency(total)}</span>
        </div>
        <button class="btn" style="width: 100%; margin-top: 40px; padding: 16px; font-size: 1.1rem;" onclick="confirmCheckout()">確認結帳</button>
      </div>
    </div>
  `;
}

function confirmCheckout() {
  const checkedItems = MOCK_DATA.cart.filter(i => i.checked);
  let total = 0;
  const itemsText = checkedItems.map(i => {
    total += i.price * i.quantity;
    return `${i.name} x${i.quantity}`;
  }).join(', ');

  const paymentMethod = document.getElementById('payment-method').value;

  const newOrder = {
    orderId: 'ORD-' + Math.floor(Math.random() * 1000000),
    time: new Date().toLocaleString(),
    data: itemsText,
    amount: total,
    status: '處理中',
    paymentMethod: paymentMethod,
    trackingNumber: '待發貨',
    deliveryStatus: '準備出貨',
    shippingTime: '-'
  };

  MOCK_DATA.orders.push(newOrder);
  MOCK_DATA.cart = MOCK_DATA.cart.filter(i => !i.checked);
  saveData();

  alert('訂單已成功成立！');
  window.location.href = 'orders.html';
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderGeneralItems();
  renderAuctionItems();
  renderMemberInfo();
  renderCart();
  renderOrders();
  renderProductDetail();
  renderAuctionDetail();
  renderCheckout();
});
