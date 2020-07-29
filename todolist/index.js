var todoList = [];
var id = 1;

var Todo = function (tenViec, doUuTien, ngayHetHan) {
    this.id = id++;
    this.tenViec = tenViec;
    this.doUuTien = doUuTien;
    this.ngayHetHan = ngayHetHan;
};

var submitTodo = function (event) {
    event.preventDefault();

    var tenViec = document.getElementById('ten_viec').value;
    var doUuTien = document.getElementById('do_uu_tien').value;
    var ngayHetHan = document.getElementById('ngay_het_han').value;

    var obj = new Todo(tenViec, doUuTien, ngayHetHan);

    todoList.unshift(obj);
    renderTodoList();

    document.getElementById('ten_viec').value = '';
    document.getElementById('do_uu_tien').value = 0;
    document.getElementById('ngay_het_han').value = '';
};

var renderTodoList = function () {
    document.getElementById('todo_list').innerHTML = '';

    var html = '';
    var doUuTienList = [
        'Thấp',
        'Trung bình',
        'Cao',
    ];

    todoList.forEach(function (element) {
        html += '<li>' + element.id + ' - '
            + element.tenViec + ' - '
            + doUuTienList[element.doUuTien] + ' - '
            + element.ngayHetHan
            '</li>';
    });

    document.getElementById('todo_list').innerHTML = html;
};
