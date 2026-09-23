/* =========================================================
   BOOKHUB - JAVASCRIPT
   Đây là phần xử lý "logic" của ứng dụng:
   - Đọc dữ liệu JSON
   - Hiển thị sách
   - Tìm kiếm, lọc, sắp xếp
   - Xem chi tiết
   - Điều khiển SPA bằng URL hash
   ========================================================= */

// Lấy các phần tử HTML để JavaScript có thể thao tác.
const bookGrid=document.getElementById("bookGrid");
const emptyState=document.getElementById("emptyState");
const bookCount=document.getElementById("bookCount");
const searchInput=document.getElementById("searchInput");
const categoryFilter=document.getElementById("categoryFilter");
const sortSelect=document.getElementById("sortSelect");
const booksSection=document.getElementById("books");
const detailSection=document.getElementById("detail");
const bookDetail=document.getElementById("bookDetail");
const backButton=document.getElementById("backButton");

// Biến toàn cục lưu danh sách sách sau khi đọc từ JSON.
let books=[];

// ---------------------------------------------------------
// 1. Đọc dữ liệu JSON
// ---------------------------------------------------------
async function loadBooks(){
  try{
    // fetch() lấy file JSON mà không cần database.
    const response=await fetch("data/books.json");
    if(!response.ok) throw new Error("Không thể tải dữ liệu sách.");

    // Chuyển JSON thành mảng JavaScript.
    books=await response.json();

    createCategoryOptions();
    renderBooks(books);
    handleRoute();
  }catch(error){
    console.error(error);
    bookGrid.innerHTML='<div class="empty-state"><h3>Không thể tải dữ liệu</h3><p>Hãy chạy website bằng Live Server.</p></div>';
  }
}

// ---------------------------------------------------------
// 2. Tạo danh sách thể loại tự động
// ---------------------------------------------------------
function createCategoryOptions(){
  // Set loại bỏ các thể loại bị trùng nhau.
  const categories=[...new Set(books.map(book=>book.category))].sort((a,b)=>a.localeCompare(b,"vi"));
  categories.forEach(category=>{
    const option=document.createElement("option");
    option.value=category;
    option.textContent=category;
    categoryFilter.appendChild(option);
  });
}

// ---------------------------------------------------------
// 3. Render danh sách sách ra màn hình
// ---------------------------------------------------------
function renderBooks(bookList){
  bookGrid.innerHTML="";
  bookCount.textContent=`${bookList.length} sách`;

  if(bookList.length===0){emptyState.classList.remove("hidden");return;}
  emptyState.classList.add("hidden");

  bookList.forEach(book=>{
    const card=document.createElement("article");
    card.className="book-card";
    card.innerHTML=`
      <img class="book-cover" src="${book.cover}" alt="Bìa sách ${escapeHtml(book.title)}" loading="lazy">
      <div class="book-info">
        <div class="book-category">${escapeHtml(book.category)}</div>
        <h3 class="book-title">${escapeHtml(book.title)}</h3>
        <div class="book-author">Tác giả: ${escapeHtml(book.author)}</div>
        <div class="book-year">Năm xuất bản: ${book.year}</div>
        <button class="btn btn-primary" type="button" onclick="showBookDetail(${book.id})">Xem chi tiết</button>
      </div>`;
    bookGrid.appendChild(card);
  });
}

// ---------------------------------------------------------
// 4. Tìm kiếm + lọc + sắp xếp
// ---------------------------------------------------------
function applyFilters(){
  const keyword=searchInput.value.trim().toLowerCase();
  const category=categoryFilter.value;
  const sortType=sortSelect.value;

  // filter() chỉ giữ lại những sách phù hợp điều kiện.
  let result=books.filter(book=>{
    const matchesKeyword=book.title.toLowerCase().includes(keyword)||book.author.toLowerCase().includes(keyword);
    const matchesCategory=category==="all"||book.category===category;
    return matchesKeyword&&matchesCategory;
  });

  // sort() sắp xếp kết quả theo lựa chọn.
  switch(sortType){
    case "title-asc": result.sort((a,b)=>a.title.localeCompare(b.title,"vi")); break;
    case "title-desc": result.sort((a,b)=>b.title.localeCompare(a.title,"vi")); break;
    case "year-desc": result.sort((a,b)=>b.year-a.year); break;
    case "year-asc": result.sort((a,b)=>a.year-b.year); break;
  }
  renderBooks(result);
}

// ---------------------------------------------------------
// 5. Hiển thị chi tiết sách
// ---------------------------------------------------------
function showBookDetail(id){
  const book=books.find(item=>item.id===id);
  if(!book)return;

  bookDetail.innerHTML=detailHtml(book);

  // Thay đổi URL bằng hash, không tải lại toàn bộ trang.
  window.location.hash=`detail/${book.id}`;
  handleRoute();
}

function detailHtml(book){
  return `<div class="detail-card">
    <div><img class="detail-cover" src="${book.cover}" alt="Bìa sách ${escapeHtml(book.title)}"></div>
    <div>
      <div class="book-category">${escapeHtml(book.category)}</div>
      <h1>${escapeHtml(book.title)}</h1>
      <p>${escapeHtml(book.description)}</p>
      <div class="detail-meta">
        <div class="meta-item"><strong>Tác giả</strong><span>${escapeHtml(book.author)}</span></div>
        <div class="meta-item"><strong>Năm xuất bản</strong><span>${book.year}</span></div>
        <div class="meta-item"><strong>Thể loại</strong><span>${escapeHtml(book.category)}</span></div>
        <div class="meta-item"><strong>Số trang</strong><span>${book.pages}</span></div>
      </div>
    </div>
  </div>`;
}

// ---------------------------------------------------------
// 6. Routing đơn giản cho SPA
// ---------------------------------------------------------
function handleRoute(){
  const hash=window.location.hash||"#home";

  if(hash.startsWith("#detail/")){
    const id=Number(hash.split("/")[1]);
    const book=books.find(item=>item.id===id);
    if(book){
      // Nếu người dùng mở trực tiếp /#detail/1 thì vẫn tạo nội dung.
      if(!bookDetail.innerHTML.trim()) bookDetail.innerHTML=detailHtml(book);
      booksSection.classList.add("hidden");
      detailSection.classList.remove("hidden");
      window.scrollTo({top:0,behavior:"smooth"});
      return;
    }
  }

  detailSection.classList.add("hidden");
  booksSection.classList.remove("hidden");
  if(hash==="#books") setTimeout(()=>booksSection.scrollIntoView({behavior:"smooth"}),50);
}

// Quay lại danh sách.
backButton.addEventListener("click",()=>{
  bookDetail.innerHTML="";
  window.location.hash="books";
});

// Đăng ký các sự kiện người dùng.
searchInput.addEventListener("input",applyFilters);
categoryFilter.addEventListener("change",applyFilters);
sortSelect.addEventListener("change",applyFilters);
window.addEventListener("hashchange",handleRoute);

// Escape HTML giúp dữ liệu JSON không vô tình được hiểu như HTML.
function escapeHtml(value){
  return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
}

// Bắt đầu ứng dụng.
loadBooks();
